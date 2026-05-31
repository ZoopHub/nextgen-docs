---
description: Send email/SMS and manage inbound message association.
---

# Communications

Send email/SMS and manage inbound message association.

All paths are relative to `https://app.zoop.com/{tenantId}/api`. Every request needs a bearer token; the required scope is shown on each operation.

## Associate a communication with a customer

{% openapi src="../openapi.json" path="/communications/{id}/associate-customer" method="patch" %}
[../openapi.json](../openapi.json)
{% endopenapi %}

## Send an email

{% openapi src="../openapi.json" path="/communications/email" method="post" %}
[../openapi.json](../openapi.json)
{% endopenapi %}

## Send an SMS

{% openapi src="../openapi.json" path="/communications/sms" method="post" %}
[../openapi.json](../openapi.json)
{% endopenapi %}

## List unassociated inbound communications

{% openapi src="../openapi.json" path="/communications/unknown-inbound" method="get" %}
[../openapi.json](../openapi.json)
{% endopenapi %}

