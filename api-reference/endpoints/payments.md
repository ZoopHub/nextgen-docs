---
description: Stripe Connect onboarding/management and payment instructions.
---

# Payments

Stripe Connect onboarding/management and payment instructions.

All paths are relative to `https://app.zoop.com/{tenantId}/api`. Every request needs a bearer token; the required scope is shown on each operation.

## Create or resume Stripe Connect onboarding

{% openapi src="../openapi.json" path="/payments/connect" method="post" %}
[../openapi.json](../openapi.json)
{% endopenapi %}

## Mint a Stripe Express dashboard login link

{% openapi src="../openapi.json" path="/payments/connect/dashboard-link" method="post" %}
[../openapi.json](../openapi.json)
{% endopenapi %}

## Disconnect the tenant's Stripe Connect account

{% openapi src="../openapi.json" path="/payments/connect/disconnect" method="post" %}
[../openapi.json](../openapi.json)
{% endopenapi %}

## Refresh Stripe Connect account status

{% openapi src="../openapi.json" path="/payments/connect/refresh" method="get" %}
[../openapi.json](../openapi.json)
{% endopenapi %}

## Save offline payment instructions

{% openapi src="../openapi.json" path="/payments/instructions" method="post" %}
[../openapi.json](../openapi.json)
{% endopenapi %}

