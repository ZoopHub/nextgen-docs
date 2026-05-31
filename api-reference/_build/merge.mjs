import { readFileSync, writeFileSync, readdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const here = dirname(fileURLToPath(import.meta.url))
const fragDir = join(here, 'fragments')

const spec = JSON.parse(readFileSync(join(here, 'base.json'), 'utf8'))
spec.paths = spec.paths || {}
spec.tags = spec.tags || []
spec.components.schemas = spec.components.schemas || {}

const issues = []
const opIds = new Map()       // operationId -> "method path"
const schemaOwners = new Map() // schema name -> fragment
let opCount = 0

const files = readdirSync(fragDir).filter((f) => f.endsWith('.json')).sort()

for (const file of files) {
  const frag = JSON.parse(readFileSync(join(fragDir, file), 'utf8'))

  // tag
  if (frag.tag) {
    if (!spec.tags.find((t) => t.name === frag.tag.name)) spec.tags.push(frag.tag)
  }

  // paths
  for (const [p, item] of Object.entries(frag.paths || {})) {
    if (spec.paths[p]) {
      // merge methods into existing path
      for (const [m, op] of Object.entries(item)) {
        if (spec.paths[p][m]) issues.push(`PATH COLLISION: ${m.toUpperCase()} ${p} defined in multiple fragments (latest: ${file})`)
        spec.paths[p][m] = op
      }
    } else {
      spec.paths[p] = item
    }
    // operationId dupes
    for (const [m, op] of Object.entries(item)) {
      if (['get','post','put','patch','delete','options','head'].includes(m)) {
        opCount++
        const oid = op.operationId
        if (!oid) { issues.push(`MISSING operationId: ${m.toUpperCase()} ${p} (${file})`); continue }
        if (opIds.has(oid)) issues.push(`DUPLICATE operationId "${oid}": ${opIds.get(oid)} AND ${m.toUpperCase()} ${p} (${file})`)
        else opIds.set(oid, `${m.toUpperCase()} ${p}`)
      }
    }
  }

  // schemas
  for (const [name, schema] of Object.entries(frag.schemas || {})) {
    if (spec.components.schemas[name]) {
      issues.push(`SCHEMA COLLISION: "${name}" in both ${schemaOwners.get(name)} and ${file}`)
    } else {
      schemaOwners.set(name, file)
    }
    spec.components.schemas[name] = schema
  }
}

// ---- normalize to strict OpenAPI 3.0.3 ----
function normalize(spec) {
  if (spec.info && !spec.info.license) spec.info.license = { name: 'Proprietary — © Zoop' }

  // strip tenantId path params (it is a server variable, not a path param)
  for (const item of Object.values(spec.paths)) {
    const strip = (holder) => {
      if (holder && Array.isArray(holder.parameters)) {
        holder.parameters = holder.parameters.filter((x) => !(x && x.name === 'tenantId' && x.in === 'path'))
        if (holder.parameters.length === 0) delete holder.parameters
      }
    }
    strip(item)
    for (const [m, op] of Object.entries(item)) {
      if (['get','post','put','patch','delete','options','head'].includes(m)) strip(op)
    }
  }

  const fix = (node) => {
    if (Array.isArray(node)) return node.forEach(fix)
    if (node && typeof node === 'object') {
      // 3.1/JSON-Schema numeric exclusive bounds -> 3.0 boolean form
      for (const bound of ['exclusiveMinimum', 'exclusiveMaximum']) {
        if (typeof node[bound] === 'number') {
          const base = bound === 'exclusiveMinimum' ? 'minimum' : 'maximum'
          if (node[base] === undefined) node[base] = node[bound]
          node[bound] = true
        }
      }
      // nullable requires a sibling type in 3.0
      if (node.nullable === true && node.type === undefined) {
        if (Array.isArray(node.enum) && node.enum.length) {
          const sample = node.enum.find((v) => v !== null)
          const t = typeof sample
          node.type = t === 'number' ? 'number' : t === 'boolean' ? 'boolean' : 'string'
        } else {
          // nullable beside $ref/allOf/oneOf/anyOf cannot be expressed in 3.0 — drop it
          delete node.nullable
        }
      }
      for (const v of Object.values(node)) fix(v)
    }
  }
  fix(spec.paths)
  fix(spec.components.schemas)
}
normalize(spec)

// sort tags + paths for stable output
spec.tags.sort((a, b) => a.name.localeCompare(b.name))
spec.paths = Object.fromEntries(Object.entries(spec.paths).sort(([a],[b]) => a.localeCompare(b)))

// ---- ref resolution check ----
const present = {
  schemas: new Set(Object.keys(spec.components.schemas)),
  responses: new Set(Object.keys(spec.components.responses || {})),
  parameters: new Set(Object.keys(spec.components.parameters || {})),
  requestBodies: new Set(Object.keys(spec.components.requestBodies || {})),
  securitySchemes: new Set(Object.keys(spec.components.securitySchemes || {})),
}
const brokenRefs = new Map()
function walk(node) {
  if (Array.isArray(node)) return node.forEach(walk)
  if (node && typeof node === 'object') {
    for (const [k, v] of Object.entries(node)) {
      if (k === '$ref' && typeof v === 'string') {
        const m = v.match(/^#\/components\/([^/]+)\/(.+)$/)
        if (m) {
          const [, kind, name] = m
          if (!present[kind] || !present[kind].has(name)) brokenRefs.set(v, (brokenRefs.get(v)||0)+1)
        } else if (!v.startsWith('#/')) {
          brokenRefs.set(v, (brokenRefs.get(v)||0)+1)
        }
      } else walk(v)
    }
  }
}
walk(spec.paths)
walk(spec.components.schemas)

writeFileSync(join(here, '..', 'openapi.json'), JSON.stringify(spec, null, 2) + '\n')

console.log('=== MERGE REPORT ===')
console.log('fragments merged :', files.length)
console.log('tags             :', spec.tags.length)
console.log('paths            :', Object.keys(spec.paths).length)
console.log('operations       :', opCount)
console.log('component schemas:', Object.keys(spec.components.schemas).length)
console.log('')
console.log('--- broken $refs (' + brokenRefs.size + ') ---')
for (const [ref, n] of brokenRefs) console.log(`  ${ref}  x${n}`)
console.log('')
console.log('--- structural issues (' + issues.length + ') ---')
for (const i of issues) console.log('  ' + i)
console.log('')
console.log('wrote: api-reference/openapi.json')
