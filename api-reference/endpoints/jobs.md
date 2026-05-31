---
description: Jobs, media, crew assignment, completion, and creation from quotes/estimates.
---

# Jobs

Jobs, media, crew assignment, completion, and creation from quotes/estimates.

All paths are relative to `https://app.zoop.com/{tenantId}/api`. Every request needs a bearer token; the required scope is shown on each operation.

## List jobs

{% openapi src="../openapi.json" path="/jobs" method="get" %}
[../openapi.json](../openapi.json)
{% endopenapi %}

## Create a job

{% openapi src="../openapi.json" path="/jobs" method="post" %}
[../openapi.json](../openapi.json)
{% endopenapi %}

## Delete a job

{% openapi src="../openapi.json" path="/jobs/{id}" method="delete" %}
[../openapi.json](../openapi.json)
{% endopenapi %}

## Get a job

{% openapi src="../openapi.json" path="/jobs/{id}" method="get" %}
[../openapi.json](../openapi.json)
{% endopenapi %}

## Update a job

{% openapi src="../openapi.json" path="/jobs/{id}" method="patch" %}
[../openapi.json](../openapi.json)
{% endopenapi %}

## Assign a crew to a job

{% openapi src="../openapi.json" path="/jobs/{id}/assign-crew" method="post" %}
[../openapi.json](../openapi.json)
{% endopenapi %}

## Mark a job as complete

{% openapi src="../openapi.json" path="/jobs/{id}/done" method="post" %}
[../openapi.json](../openapi.json)
{% endopenapi %}

## Upload job media

{% openapi src="../openapi.json" path="/jobs/{id}/media" method="post" %}
[../openapi.json](../openapi.json)
{% endopenapi %}

## Delete a job media item

{% openapi src="../openapi.json" path="/jobs/{id}/media/{mediaId}" method="delete" %}
[../openapi.json](../openapi.json)
{% endopenapi %}

## Create a job from a quote (deprecated estimate URL)

{% openapi src="../openapi.json" path="/jobs/from-estimate/{estimateId}" method="post" %}
[../openapi.json](../openapi.json)
{% endopenapi %}

