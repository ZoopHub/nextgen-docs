---
description: Recurring service plans and their lifecycle actions (pause, resume, cancel, skip, charge).
---

# Plans

Recurring service plans and their lifecycle actions (pause, resume, cancel, skip, charge).

All paths are relative to `https://app.zoop.com/{tenantId}/api`. Every request needs a bearer token; the required scope is shown on each operation.

## List recurring plans

{% openapi src="../openapi.json" path="/plans" method="get" %}
[../openapi.json](../openapi.json)
{% endopenapi %}

## Create a recurring plan

{% openapi src="../openapi.json" path="/plans" method="post" %}
[../openapi.json](../openapi.json)
{% endopenapi %}

## Get a recurring plan

{% openapi src="../openapi.json" path="/plans/{id}" method="get" %}
[../openapi.json](../openapi.json)
{% endopenapi %}

## Update a recurring plan

{% openapi src="../openapi.json" path="/plans/{id}" method="patch" %}
[../openapi.json](../openapi.json)
{% endopenapi %}

