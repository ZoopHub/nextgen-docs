---
description: Per-user account settings, including the personal calendar feed.
---

# Account

Per-user account settings, including the personal calendar feed.

All paths are relative to `https://app.zoop.com/{tenantId}/api`. Every request needs a bearer token; the required scope is shown on each operation.

## Revoke the personal calendar feed token

{% openapi src="../openapi.json" path="/account/calendar-feed" method="delete" %}
[../openapi.json](../openapi.json)
{% endopenapi %}

## Mint or rotate the personal calendar feed

{% openapi src="../openapi.json" path="/account/calendar-feed/rotate" method="post" %}
[../openapi.json](../openapi.json)
{% endopenapi %}

