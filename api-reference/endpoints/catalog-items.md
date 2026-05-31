---
description: Service/product catalog items, images, price history, and bulk import.
---

# Catalog Items

Service/product catalog items, images, price history, and bulk import.

All paths are relative to `https://app.zoop.com/{tenantId}/api`. Every request needs a bearer token; the required scope is shown on each operation.

## List catalog items

{% openapi src="../openapi.json" path="/catalog-items" method="get" %}
[../openapi.json](../openapi.json)
{% endopenapi %}

## Create a catalog item

{% openapi src="../openapi.json" path="/catalog-items" method="post" %}
[../openapi.json](../openapi.json)
{% endopenapi %}

## Archive a catalog item

{% openapi src="../openapi.json" path="/catalog-items/{id}" method="delete" %}
[../openapi.json](../openapi.json)
{% endopenapi %}

## Get a catalog item

{% openapi src="../openapi.json" path="/catalog-items/{id}" method="get" %}
[../openapi.json](../openapi.json)
{% endopenapi %}

## Update a catalog item

{% openapi src="../openapi.json" path="/catalog-items/{id}" method="patch" %}
[../openapi.json](../openapi.json)
{% endopenapi %}

