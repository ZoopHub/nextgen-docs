---
description: How to authenticate requests to Zoop.
icon: key
---

# Authentication

Zoop authenticates API requests with API keys.

<!-- TODO: Confirm the real auth scheme (API key, OAuth, etc.) and adjust this page. -->

## API keys

Generate an API key from your Zoop dashboard. Include it as a bearer token on every request:

{% code overflow="wrap" %}
```bash
curl https://api.zoop.example/v1/me \
  -H "Authorization: Bearer YOUR_API_KEY"
```
{% endcode %}

{% hint style="warning" %}
**Keep keys secret.** Treat API keys like passwords. Never commit them to source control or expose them in client-side code. Use environment variables or a secrets manager.
{% endhint %}

## Test vs. live keys

<!-- TODO: Document test/live (or sandbox/production) key separation if Zoop supports it. -->

## Rotating keys

<!-- TODO: Describe how to rotate or revoke keys. -->
