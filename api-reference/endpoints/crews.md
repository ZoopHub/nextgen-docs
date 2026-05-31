---
description: Crews and crew membership.
---

# Crews

Crews and crew membership.

All paths are relative to `https://app.zoop.com/{tenantId}/api`. Every request needs a bearer token; the required scope is shown on each operation.

## List crews

{% openapi src="../openapi.json" path="/crews" method="get" %}
[../openapi.json](../openapi.json)
{% endopenapi %}

## Create a crew

{% openapi src="../openapi.json" path="/crews" method="post" %}
[../openapi.json](../openapi.json)
{% endopenapi %}

## Get a crew

{% openapi src="../openapi.json" path="/crews/{crewId}" method="get" %}
[../openapi.json](../openapi.json)
{% endopenapi %}

## Rename or archive a crew

{% openapi src="../openapi.json" path="/crews/{crewId}" method="patch" %}
[../openapi.json](../openapi.json)
{% endopenapi %}

## List crew members

{% openapi src="../openapi.json" path="/crews/{crewId}/members" method="get" %}
[../openapi.json](../openapi.json)
{% endopenapi %}

## Add a crew member

{% openapi src="../openapi.json" path="/crews/{crewId}/members" method="post" %}
[../openapi.json](../openapi.json)
{% endopenapi %}

## Remove a crew member

{% openapi src="../openapi.json" path="/crews/{crewId}/members/{userId}" method="delete" %}
[../openapi.json](../openapi.json)
{% endopenapi %}

