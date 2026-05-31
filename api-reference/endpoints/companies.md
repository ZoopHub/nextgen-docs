---
description: Business/company profile and the active/current company.
---

# Companies

Business/company profile and the active/current company.

All paths are relative to `https://app.zoop.com/{tenantId}/api`. Every request needs a bearer token; the required scope is shown on each operation.

## List companies the caller belongs to

{% openapi src="../openapi.json" path="/companies" method="get" %}
[../openapi.json](../openapi.json)
{% endopenapi %}

## Create a company

{% openapi src="../openapi.json" path="/companies" method="post" %}
[../openapi.json](../openapi.json)
{% endopenapi %}

## Get the current company profile

{% openapi src="../openapi.json" path="/companies/current" method="get" %}
[../openapi.json](../openapi.json)
{% endopenapi %}

## Update the current company profile

{% openapi src="../openapi.json" path="/companies/current" method="patch" %}
[../openapi.json](../openapi.json)
{% endopenapi %}

