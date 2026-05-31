---
description: Make your first successful Zoop request in a few minutes.
icon: rocket-launch
---

# Quickstart

This quickstart takes you from zero to your first successful request.

{% stepper %}
{% step %}
### Create an account and API key

Sign up for Zoop and generate an API key from your dashboard.

<!-- TODO: Link to the real signup / dashboard URL. -->
{% endstep %}

{% step %}
### Make your first request

Replace `YOUR_API_KEY` and run one of the examples below.

{% tabs %}
{% tab title="cURL" %}
{% code overflow="wrap" %}
```bash
curl -X POST https://api.zoop.example/v1/ping \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{ "message": "Hello, Zoop!" }'
```
{% endcode %}
{% endtab %}

{% tab title="JavaScript" %}
{% code overflow="wrap" %}
```javascript
const res = await fetch("https://api.zoop.example/v1/ping", {
  method: "POST",
  headers: {
    Authorization: "Bearer YOUR_API_KEY",
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ message: "Hello, Zoop!" }),
});

console.log(await res.json());
```
{% endcode %}
{% endtab %}

{% tab title="Python" %}
{% code overflow="wrap" %}
```python
import requests

res = requests.post(
    "https://api.zoop.example/v1/ping",
    headers={
        "Authorization": "Bearer YOUR_API_KEY",
        "Content-Type": "application/json",
    },
    json={"message": "Hello, Zoop!"},
)

print(res.json())
```
{% endcode %}
{% endtab %}
{% endtabs %}
{% endstep %}

{% step %}
### Check the response

A successful request returns something like:

{% code title="response.json" overflow="wrap" %}
```json
{
  "id": "evt_1234567890",
  "status": "ok",
  "createdAt": "2026-01-01T12:00:00Z"
}
```
{% endcode %}
{% endstep %}
{% endstepper %}

{% hint style="info" %}
The endpoint, payload, and response shape above are placeholders — replace them with Zoop's real first-call flow.
{% endhint %}

## What's next

{% content-ref url="authentication.md" %}
[authentication.md](authentication.md)
{% endcontent-ref %}

{% content-ref url="guides/first-integration.md" %}
[first-integration.md](guides/first-integration.md)
{% endcontent-ref %}
