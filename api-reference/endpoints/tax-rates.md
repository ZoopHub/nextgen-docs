---
description: Tax rates, including archive/restore.
---

# Tax Rates

Tax rates, including archive/restore.

All paths are relative to `https://app.zoop.com/{tenantId}/api`. Every request needs a bearer token; the required scope is shown on each operation.

## List tax rates

{% openapi src="../openapi.json" path="/tax-rates" method="get" %}
[../openapi.json](../openapi.json)
{% endopenapi %}

## Create a tax rate

{% openapi src="../openapi.json" path="/tax-rates" method="post" %}
[../openapi.json](../openapi.json)
{% endopenapi %}

## Archive a tax rate

{% openapi src="../openapi.json" path="/tax-rates/{id}" method="delete" %}
[../openapi.json](../openapi.json)
{% endopenapi %}

## Update a tax rate

{% openapi src="../openapi.json" path="/tax-rates/{id}" method="patch" %}
[../openapi.json](../openapi.json)
{% endopenapi %}

## Restore a tax rate

{% openapi src="../openapi.json" path="/tax-rates/{id}/restore" method="post" %}
[../openapi.json](../openapi.json)
{% endopenapi %}

