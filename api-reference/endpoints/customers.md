---
description: Manage customers, their contacts, locations, tags, attachments, and billing.
---

# Customers

Manage customers, their contacts, locations, tags, attachments, and billing.

All paths are relative to `https://app.zoop.com/{tenantId}/api`. Every request needs a bearer token; the required scope is shown on each operation.

## List customers

{% openapi src="../openapi.json" path="/customers" method="get" %}
[../openapi.json](../openapi.json)
{% endopenapi %}

## Create a customer

{% openapi src="../openapi.json" path="/customers" method="post" %}
[../openapi.json](../openapi.json)
{% endopenapi %}

## Archive a customer (soft-delete)

{% openapi src="../openapi.json" path="/customers/{id}" method="delete" %}
[../openapi.json](../openapi.json)
{% endopenapi %}

## Get a customer

{% openapi src="../openapi.json" path="/customers/{id}" method="get" %}
[../openapi.json](../openapi.json)
{% endopenapi %}

## Update a customer

{% openapi src="../openapi.json" path="/customers/{id}" method="patch" %}
[../openapi.json](../openapi.json)
{% endopenapi %}

## Archive a customer

{% openapi src="../openapi.json" path="/customers/{id}/archive" method="post" %}
[../openapi.json](../openapi.json)
{% endopenapi %}

## List customer attachments

{% openapi src="../openapi.json" path="/customers/{id}/attachments" method="get" %}
[../openapi.json](../openapi.json)
{% endopenapi %}

## Upload a customer attachment

{% openapi src="../openapi.json" path="/customers/{id}/attachments" method="post" %}
[../openapi.json](../openapi.json)
{% endopenapi %}

## Delete a customer attachment

{% openapi src="../openapi.json" path="/customers/{id}/attachments/{attachmentId}" method="delete" %}
[../openapi.json](../openapi.json)
{% endopenapi %}

## Get an attachment download URL

{% openapi src="../openapi.json" path="/customers/{id}/attachments/{attachmentId}" method="get" %}
[../openapi.json](../openapi.json)
{% endopenapi %}

## Get a customer's billing profile

{% openapi src="../openapi.json" path="/customers/{id}/billing-profile" method="get" %}
[../openapi.json](../openapi.json)
{% endopenapi %}

## Update a customer's billing profile

{% openapi src="../openapi.json" path="/customers/{id}/billing-profile" method="patch" %}
[../openapi.json](../openapi.json)
{% endopenapi %}

## List customer contacts

{% openapi src="../openapi.json" path="/customers/{id}/contacts" method="get" %}
[../openapi.json](../openapi.json)
{% endopenapi %}

## Create a customer contact

{% openapi src="../openapi.json" path="/customers/{id}/contacts" method="post" %}
[../openapi.json](../openapi.json)
{% endopenapi %}

## Delete a customer contact

{% openapi src="../openapi.json" path="/customers/{id}/contacts/{contactId}" method="delete" %}
[../openapi.json](../openapi.json)
{% endopenapi %}

## Get a customer contact

{% openapi src="../openapi.json" path="/customers/{id}/contacts/{contactId}" method="get" %}
[../openapi.json](../openapi.json)
{% endopenapi %}

## Update a customer contact

{% openapi src="../openapi.json" path="/customers/{id}/contacts/{contactId}" method="patch" %}
[../openapi.json](../openapi.json)
{% endopenapi %}

## Promote a contact to primary

{% openapi src="../openapi.json" path="/customers/{id}/contacts/{contactId}/promote-to-primary" method="post" %}
[../openapi.json](../openapi.json)
{% endopenapi %}

## Find duplicate candidates

{% openapi src="../openapi.json" path="/customers/{id}/duplicate-candidates" method="get" %}
[../openapi.json](../openapi.json)
{% endopenapi %}

## List customer service locations

{% openapi src="../openapi.json" path="/customers/{id}/locations" method="get" %}
[../openapi.json](../openapi.json)
{% endopenapi %}

## Create a customer service location

{% openapi src="../openapi.json" path="/customers/{id}/locations" method="post" %}
[../openapi.json](../openapi.json)
{% endopenapi %}

## Delete a customer location

{% openapi src="../openapi.json" path="/customers/{id}/locations/{locationId}" method="delete" %}
[../openapi.json](../openapi.json)
{% endopenapi %}

## Get a customer location

{% openapi src="../openapi.json" path="/customers/{id}/locations/{locationId}" method="get" %}
[../openapi.json](../openapi.json)
{% endopenapi %}

## Update a customer location

{% openapi src="../openapi.json" path="/customers/{id}/locations/{locationId}" method="patch" %}
[../openapi.json](../openapi.json)
{% endopenapi %}

## Revoke a customer portal token

{% openapi src="../openapi.json" path="/customers/{id}/portal-token" method="delete" %}
[../openapi.json](../openapi.json)
{% endopenapi %}

## Mint a customer portal token

{% openapi src="../openapi.json" path="/customers/{id}/portal-token" method="post" %}
[../openapi.json](../openapi.json)
{% endopenapi %}

## Assign a tag to a customer

{% openapi src="../openapi.json" path="/customers/{id}/tags" method="post" %}
[../openapi.json](../openapi.json)
{% endopenapi %}

## Remove a tag from a customer

{% openapi src="../openapi.json" path="/customers/{id}/tags/{tagId}" method="delete" %}
[../openapi.json](../openapi.json)
{% endopenapi %}

## Get a customer's event timeline

{% openapi src="../openapi.json" path="/customers/{id}/timeline" method="get" %}
[../openapi.json](../openapi.json)
{% endopenapi %}

## Find or create a customer by phone

{% openapi src="../openapi.json" path="/customers/find-or-create-by-phone" method="post" %}
[../openapi.json](../openapi.json)
{% endopenapi %}

## Merge two customer records

{% openapi src="../openapi.json" path="/customers/merge" method="post" %}
[../openapi.json](../openapi.json)
{% endopenapi %}

