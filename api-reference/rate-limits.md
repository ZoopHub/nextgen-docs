---
description: How the Zoop API rate limits requests.
icon: gauge-high
---

# Rate limits

The API enforces rate limits on two levels:

* **Per credential** — each API key or access token has its own bucket.
* **Per tenant** — all traffic for a tenant shares a bucket, so one noisy credential can't starve the rest.

A few high-cost endpoints (such as search and message sending) apply additional, narrower limits.

## When you're limited

A throttled request returns `429` with a `Retry-After` header telling you how many seconds to wait:

```http
HTTP/1.1 429 Too Many Requests
Retry-After: 30
Content-Type: application/json

{ "error": "Rate limit exceeded" }
```

## Handling it

* Respect `Retry-After` — wait the indicated time before retrying.
* Back off exponentially on repeated `429`s.
* Prefer pagination cursors and narrow filters over polling large result sets.
