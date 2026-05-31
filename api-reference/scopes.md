---
description: The permission scopes that gate every Zoop API endpoint.
icon: shield-halved
---

# Scopes

Every endpoint requires one or more **scopes**. A token (API key or OAuth access token) is granted a fixed set of scopes; a request to an endpoint whose scope the token doesn't hold is rejected with `403` (`insufficient_scope`).

Scopes follow a `verb:resource` shape — `read:*` to view, `write:*` to create/edit/delete, and three `admin:*` scopes for sensitive operations.

## Catalog

| Scope | Grants |
| --- | --- |
| `read:customers` | View customers, contacts, and locations |
| `write:customers` | Create and edit customers, contacts, and locations |
| `read:catalog` | View service catalog and pricing |
| `write:catalog` | Manage service catalog and pricing |
| `read:catalog_items` | View catalog items |
| `write:catalog_items` | Create and edit catalog items |
| `read:catalog_categories` | View catalog categories |
| `write:catalog_categories` | Create and edit catalog categories |
| `read:estimates` | View estimates _(legacy alias for quotes)_ |
| `write:estimates` | Create and edit estimates _(legacy alias for quotes)_ |
| `read:quotes` | View quotes |
| `write:quotes` | Create and edit quotes |
| `read:communications` | View messages and communication history |
| `write:communications` | Send messages on your behalf |
| `read:companies` | View your business profile |
| `write:companies` | Edit your business settings |
| `read:settings` | View settings and configuration |
| `write:settings` | Edit settings and configuration |
| `read:invoices` | View invoices and payment history |
| `write:invoices` | Create and edit invoices |
| `read:jobs` | View jobs and job history |
| `write:jobs` | Create and edit jobs |
| `read:job_series` | View recurring job series |
| `write:job_series` | Create and edit recurring job series |
| `read:plans` | View service plans |
| `write:plans` | Create and edit service plans |
| `read:tax_rates` | View tax rates |
| `write:tax_rates` | Create and edit tax rates |
| `read:notes` | View notes |
| `write:notes` | Create and edit notes |
| `read:agent_sessions` | View AI agent session history |
| `write:agent_sessions` | Run AI agent sessions on your behalf |
| `admin:tenant` | Manage team members and tenant settings |
| `admin:billing` | Access billing and subscription info |
| `admin:credentials` | Manage API keys and OAuth clients |

## Umbrella scopes

A few scopes are **umbrellas** that imply finer-grained children (verb-preserving — a `read:` umbrella never grants a `write:` child):

| Umbrella | Also grants |
| --- | --- |
| `read:catalog` | `read:catalog_items`, `read:catalog_categories` |
| `write:catalog` | `write:catalog_items`, `write:catalog_categories` |
| `read:estimates` | `read:quotes` |
| `write:estimates` | `write:quotes` |

{% hint style="info" %}
`estimates` is the legacy name for **quotes** (the underlying table was renamed). New integrations should request `read:quotes` / `write:quotes`; the `estimates` scopes remain as aliases for older tokens.
{% endhint %}

## Admin scopes

`admin:tenant`, `admin:billing`, and `admin:credentials` are sensitive. Only an **owner** can grant them to an external client — `office` and `tech` users cannot mint admin-scoped credentials. Many admin-tier endpoints also enforce the owner role at call time, independent of scope.
