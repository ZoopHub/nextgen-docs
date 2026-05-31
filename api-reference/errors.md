---
description: HTTP status codes, error codes, and the error response format.
icon: triangle-exclamation
---

# Errors

Zoop uses conventional HTTP status codes. `2xx` means success, `4xx` means the request was rejected (usually something you can fix), and `5xx` means a problem on Zoop's side.

| Code | Meaning |
| --- | --- |
| `200` | Success. |
| `201` | Resource created. |
| `204` | Success, no response body (e.g. a delete). |
| `400` | Bad request — body failed validation, malformed JSON, or an unsupported filter. |
| `401` | Unauthorized — missing, invalid, expired, or revoked token. |
| `403` | Forbidden — the token lacks the required scope or role, the tenant doesn't match, or a cross-site request was blocked. |
| `404` | Not found — the resource doesn't exist or isn't visible to your tenant. |
| `409` | Conflict — collides with current state (e.g. a duplicate). |
| `429` | Too many requests — you've been rate limited. See [Rate limits](rate-limits.md). |
| `5xx` | Server error. The body includes an `errorId` for support to trace. |

## Response format

Errors return a JSON body with an `error` field:

{% code title="error.json" %}
```json
{ "error": "Not found" }
```
{% endcode %}

On `400` validation failures, `error` may instead be a field-level object describing what failed:

{% code title="validation-error.json" %}
```json
{
  "error": {
    "formErrors": [],
    "fieldErrors": {
      "email": ["Invalid email"]
    }
  }
}
```
{% endcode %}

On `5xx`, the body carries a correlation id:

{% code title="server-error.json" %}
```json
{ "error": "Internal error", "errorId": "0f9c…" }
```
{% endcode %}

## Authentication error reasons

`401`/`403` responses from the auth layer correspond to these reasons:

| Reason | Status | Meaning |
| --- | --- | --- |
| `missing_token` | 401 | No `Authorization: Bearer` header. |
| `invalid_token` | 401 | Token couldn't be verified (bad signature, unknown key, malformed). |
| `expired` | 401 | The token or API key has expired. |
| `revoked` | 401 | The API key was revoked. |
| `insufficient_scope` | 403 | Valid token, but missing a required [scope](scopes.md). |
| `wrong_tenant` | 403 | The token's tenant doesn't match the `{tenantId}` in the URL. |
| `rate_limited` | 429 | Too many requests; a `Retry-After` header indicates how long to wait. |
