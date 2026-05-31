---
description: Build on Zoop with the tenant-scoped REST API.
icon: terminal
---

# API Reference

The Zoop API is organized around REST. It has predictable, resource-oriented URLs, returns JSON, and uses standard HTTP verbs and status codes. Every endpoint is scoped to a tenant.

* **Base URL:** `https://app.zoop.com/{tenantId}/api`
* **Auth:** a bearer token — an API key or an OAuth access token. See [Authentication](authentication.md).
* **Permissions:** every endpoint requires one or more [scopes](scopes.md).
* **Errors:** standard HTTP status codes with a JSON `{ error }` body. See [Errors](errors.md).

`{tenantId}` is your tenant's UUID or storefront slug.

## Quickstart

```bash
curl https://app.zoop.com/{tenantId}/api/customers \
  -H "Authorization: Bearer YOUR_TOKEN"
```

## Conventions

* **Format** — requests and responses are JSON. Send `Content-Type: application/json` on `POST`/`PATCH`.
* **IDs** — resource identifiers are UUIDs.
* **Timestamps** — ISO 8601 (`2026-01-01T12:00:00Z`).
* **Pagination** — list endpoints that paginate return `{ "results": [...], "next_cursor": "…" }`; pass `cursor` to fetch the next page. Some lists are not paginated — each operation documents its own shape.
* **Scopes** — the required scope is shown in every operation's description; `read:*` for reads, `write:*` for mutations.

## Browse the API

{% content-ref url="authentication.md" %}[authentication.md](authentication.md){% endcontent-ref %}
{% content-ref url="scopes.md" %}[scopes.md](scopes.md){% endcontent-ref %}
{% content-ref url="endpoints/README.md" %}[README.md](endpoints/README.md){% endcontent-ref %}
{% content-ref url="mcp.md" %}[mcp.md](mcp.md){% endcontent-ref %}

{% hint style="info" %}
This reference is rendered from an [OpenAPI 3.0 specification](openapi.json) generated from the Zoop codebase.
{% endhint %}
