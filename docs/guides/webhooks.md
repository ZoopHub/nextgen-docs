---
description: Receive real-time events from Zoop with webhooks.
icon: webhook
---

# Webhooks

Webhooks let Zoop notify your application when events happen, instead of you polling the API.

<!-- TODO: Confirm Zoop supports webhooks and adjust this page to the real implementation. -->

## How webhooks work

1. You register an endpoint URL in your Zoop dashboard.
2. When an event occurs, Zoop sends an HTTP `POST` to your endpoint.
3. Your endpoint responds with `2xx` to acknowledge receipt.

## Example payload

{% code title="webhook.json" overflow="wrap" %}
```json
{
  "id": "evt_1234567890",
  "type": "example.event",
  "createdAt": "2026-01-01T12:00:00Z",
  "data": {}
}
```
{% endcode %}

## Verifying signatures

{% hint style="warning" %}
Always verify webhook signatures so you can trust that requests genuinely come from Zoop.
{% endhint %}

<!-- TODO: Document the signing scheme and a verification example. -->
