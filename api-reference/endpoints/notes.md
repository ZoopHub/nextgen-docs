---
description: Notes with versioning, attachments, and subject resolution.
---

# Notes

Notes with versioning, attachments, and subject resolution.

All paths are relative to `https://app.zoop.com/{tenantId}/api`. Every request needs a bearer token; the required scope is shown on each operation.

## List notes

{% openapi src="../openapi.json" path="/notes" method="get" %}
[../openapi.json](../openapi.json)
{% endopenapi %}

## Create a note

{% openapi src="../openapi.json" path="/notes" method="post" %}
[../openapi.json](../openapi.json)
{% endopenapi %}

## Delete a note

{% openapi src="../openapi.json" path="/notes/{id}" method="delete" %}
[../openapi.json](../openapi.json)
{% endopenapi %}

## Get a note

{% openapi src="../openapi.json" path="/notes/{id}" method="get" %}
[../openapi.json](../openapi.json)
{% endopenapi %}

## Update a note

{% openapi src="../openapi.json" path="/notes/{id}" method="patch" %}
[../openapi.json](../openapi.json)
{% endopenapi %}

