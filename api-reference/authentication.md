---
description: How to authenticate requests to the Zoop API.
icon: key
---

# Authentication

Every Zoop API request is authenticated with a **bearer token** in the `Authorization` header, and is scoped to a single tenant.

```bash
curl https://app.zoop.com/{tenantId}/api/customers \
  -H "Authorization: Bearer YOUR_TOKEN"
```

A token can be one of two kinds — both use the same header:

| Token type | When to use | Carries |
| --- | --- | --- |
| **API key** | Server-to-server / scripts. Created in **Settings → External access** (or via the [API Keys endpoints](endpoints/api-keys.md)). | A fixed set of scopes |
| **OAuth access token** | Apps acting on behalf of a Zoop user (and the [MCP server](mcp.md)). Issued through the Supabase OAuth authorization server. | The user's role + granted scopes |

## API keys

API keys are prefixed (e.g. `zoop_…`) and are shown **once**, at creation — store them securely and never commit them to source control or ship them in client-side code. The plaintext is never retrievable afterward (only a hash is stored).

There are two actor kinds:

* **User keys** — tied to a specific user; inherit that user's tenant role (`owner` / `office` / `tech`).
* **Tenant keys** — machine-to-machine; not tied to any user.

Revoke a key any time from the dashboard or via `DELETE /external-access/{keyId}`.

## OAuth

For apps acting on behalf of a user, Zoop exposes OAuth 2.0 with the Supabase project as the authorization server. Discover the endpoints via the protected-resource metadata document (RFC 9728):

```bash
curl https://app.zoop.com/.well-known/oauth-protected-resource
```

Newly registered OAuth clients default to a read-mostly scope set (`read:customers`, `read:catalog`, `read:estimates`, `read:communications`, `write:communications`); request additional [scopes](scopes.md) as needed.

## Tenant binding

The credential is bound to one tenant. The `{tenantId}` in the URL must match the credential's tenant, otherwise the request is rejected with `403` (`wrong_tenant`). `{tenantId}` accepts either the tenant UUID or the tenant's storefront slug.

## What requires what

* Missing/invalid/expired/revoked token → `401`.
* Valid token without the [scope](scopes.md) an endpoint needs → `403` (`insufficient_scope`).
* Some actions additionally require the **owner** role regardless of scope (noted on those operations).

See [Errors](errors.md) for the full list of failure modes.
