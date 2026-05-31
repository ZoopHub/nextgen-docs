---
description: Invoices, payments, refunds, sending, and lifecycle actions.
---

# Invoices

Invoices, payments, refunds, sending, and lifecycle actions.

All paths are relative to `https://app.zoop.com/{tenantId}/api`. Every request needs a bearer token; the required scope is shown on each operation.

## List invoices

{% openapi src="../openapi.json" path="/invoices" method="get" %}
[../openapi.json](../openapi.json)
{% endopenapi %}

## Create an invoice

{% openapi src="../openapi.json" path="/invoices" method="post" %}
[../openapi.json](../openapi.json)
{% endopenapi %}

## Void an invoice (soft-delete)

{% openapi src="../openapi.json" path="/invoices/{id}" method="delete" %}
[../openapi.json](../openapi.json)
{% endopenapi %}

## Get an invoice

{% openapi src="../openapi.json" path="/invoices/{id}" method="get" %}
[../openapi.json](../openapi.json)
{% endopenapi %}

## Update an invoice

{% openapi src="../openapi.json" path="/invoices/{id}" method="patch" %}
[../openapi.json](../openapi.json)
{% endopenapi %}

## Send a draft invoice

{% openapi src="../openapi.json" path="/invoices/{id}/send" method="post" %}
[../openapi.json](../openapi.json)
{% endopenapi %}

## Re-send an invoice reminder

{% openapi src="../openapi.json" path="/invoices/{id}/send-reminder" method="post" %}
[../openapi.json](../openapi.json)
{% endopenapi %}

