import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const here = dirname(fileURLToPath(import.meta.url))
const apiDir = join(here, '..')               // api-reference/
const outDir = join(apiDir, 'endpoints')      // api-reference/endpoints/
mkdirSync(outDir, { recursive: true })

const spec = JSON.parse(readFileSync(join(apiDir, 'openapi.json'), 'utf8'))
const SRC = '../openapi.json' // relative from endpoints/<slug>.md to the spec

const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
const METHODS = ['get', 'post', 'put', 'patch', 'delete']

// group operations by tag
const byTag = new Map()
for (const [path, item] of Object.entries(spec.paths)) {
  for (const m of METHODS) {
    const op = item[m]
    if (!op) continue
    const tag = (op.tags && op.tags[0]) || 'Other'
    if (!byTag.has(tag)) byTag.set(tag, [])
    byTag.get(tag).push({ path, method: m, op })
  }
}

const tagMeta = Object.fromEntries((spec.tags || []).map((t) => [t.name, t]))
const summaryLines = []

for (const tag of [...byTag.keys()].sort()) {
  const ops = byTag.get(tag).sort((a, b) => a.path.localeCompare(b.path) || a.method.localeCompare(b.method))
  const s = slug(tag)
  const desc = (tagMeta[tag] && tagMeta[tag].description) || ''

  let md = `---\n`
  md += `description: ${desc.replace(/\n/g, ' ')}\n`
  md += `---\n\n`
  md += `# ${tag}\n\n`
  if (desc) md += `${desc}\n\n`
  md += `All paths are relative to \`https://app.zoop.com/{tenantId}/api\`. Every request needs a bearer token; the required scope is shown on each operation.\n\n`

  for (const { path, method, op } of ops) {
    const title = op.summary || `${method.toUpperCase()} ${path}`
    md += `## ${title}\n\n`
    md += `{% openapi src="${SRC}" path="${path}" method="${method}" %}\n`
    md += `[${SRC}](${SRC})\n`
    md += `{% endopenapi %}\n\n`
  }

  writeFileSync(join(outDir, `${s}.md`), md)
  summaryLines.push(`  * [${tag}](api-reference/endpoints/${s}.md)`)
}

writeFileSync(join(here, 'summary-endpoints.txt'), summaryLines.join('\n') + '\n')
console.log(`generated ${byTag.size} resource pages in api-reference/endpoints/`)
console.log(`total operations: ${[...byTag.values()].reduce((n, a) => n + a.length, 0)}`)
console.log('\nSUMMARY snippet -> _build/summary-endpoints.txt')
console.log(summaryLines.join('\n'))
