---
description: Create, list, and revoke external API keys for programmatic access.
---

# API Keys

Create, list, and revoke external API keys for programmatic access.

All paths are relative to `https://app.zoop.com/{tenantId}/api`. Every request needs a bearer token; the required scope is shown on each operation.

## List API keys

{% openapi src="../openapi.json" path="/external-access" method="get" %}
[../openapi.json](../openapi.json)
{% endopenapi %}

## Create an API key

{% openapi src="../openapi.json" path="/external-access" method="post" %}
[../openapi.json](../openapi.json)
{% endopenapi %}

## Revoke an API key

{% openapi src="../openapi.json" path="/external-access/{keyId}" method="delete" %}
[../openapi.json](../openapi.json)
{% endopenapi %}

