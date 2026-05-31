---
description: Public storefront availability and booking holds.
---

# Storefront

Public storefront availability and booking holds.

All paths are relative to `https://app.zoop.com/{tenantId}/api`. Every request needs a bearer token; the required scope is shown on each operation.

## Create a booking hold

{% openapi src="../openapi.json" path="/storefront/holds" method="post" %}
[../openapi.json](../openapi.json)
{% endopenapi %}

## Accept a suggested alternate slot

{% openapi src="../openapi.json" path="/storefront/holds/{id}/accept-suggestion" method="post" %}
[../openapi.json](../openapi.json)
{% endopenapi %}

