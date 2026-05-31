# Zoop API docs — OpenAPI spec & maintenance decision

**For:** Chris
**From:** David
**Date:** 2026-05-31
**Decision needed:** how we keep the OpenAPI spec in sync going forward (we have a snapshot now).

---

## What exists today

We generated a complete **OpenAPI 3.0.3 specification** for the Zoop external API, extracted from the `ZoopHub/nextgen` route handlers (`src/app/[tenantId]/api/**`) and their Zod schemas.

- **83 paths · 133 operations · 161 schemas · 21 resource groups**
- Scope: only the **external developer surface** — every route carrying a `// @scope:` annotation. Internal routes (`@scope: internal`, webhooks, cron jobs, auth callbacks) are deliberately excluded.
- Auth, scopes, errors, and rate-limit behavior are documented from the real auth layer (`src/lib/auth/external/*`).
- **Validates clean** against Redocly (2 cosmetic warnings only).
- Rendered into GitBook as an interactive API reference (one page per resource group + auth/scopes/errors/MCP overview pages).

The spec file is attached: **`openapi.json`**.

The generator toolkit lives in `api-reference/_build/` (`base.json`, per-group `fragments/*.json`, `merge.mjs`, `generate-pages.mjs`, `manifest.tsv`) so the snapshot is reproducible.

## The decision: snapshot vs. generated-in-CI

This is a **point-in-time snapshot**. `nextgen` is under active development, so the spec will drift. Options:

| Option | Effort | Accuracy over time | Notes |
|---|---|---|---|
| **A. Keep as snapshot** (re-run the tooling on demand) | None now; manual refresh later | Drifts between refreshes | Fine short-term; risky as the only long-term plan — wrong API docs are worse than none |
| **B1. Generate from Zod in CI** (recommended long-term) | Medium | Stays in sync | Export the currently-inline route schemas into a registry + use `zod-to-openapi`; emit the spec in CI and fail the build if it's stale |
| **B2. Static/AST extraction** | Medium-high | Brittle | Parses route files; breaks on refactors |
| **B3. Contract tests** | Low-medium | Catches drift, doesn't fix it | Tests assert routes match the committed spec |

**Recommendation:** ship the snapshot now (it's done), and plan **B1** as a follow-up — a CI step that regenerates the spec from exported Zod schemas and the `@scope` annotations, with a staleness check. That turns the `@scope` comments + Zod schemas (already the source of truth) into the published contract automatically.

## Findings worth a look (independent of the docs)

Surfaced while reading the code — possible small bugs/inconsistencies in `nextgen`:

1. **`@scope: admin:settings`** appears on the team-members and crews routes, but `admin:settings` is **not** in the scope catalog (`src/lib/auth/external/scopes.ts`). Looks like doc-drift in the annotations; worth reconciling to a real scope (e.g. `admin:tenant` / `write:settings`).
2. **Inconsistent list-response shapes.** Some lists return `{ results, next_cursor }`, others `{ data, count, page, limit }`, others bare arrays or `{ <resource>: [...] }`. Standardizing pagination would simplify both the API and the docs.
3. **A few `@scope` annotations vs. actual enforcement** don't perfectly line up (the docs follow the annotations). A generator (B1) keyed off real enforcement would remove that ambiguity.

## Asks

1. Pick the long-term maintenance approach (A vs. B1 vs. other).
2. Confirm the documented external surface is the intended public API (102 annotated handlers → 133 documented operations after excluding internal routes).
3. Flag anything in the spec that shouldn't be publicly documented before we publish.
