---
description: Connect AI agents to Zoop over the Model Context Protocol.
icon: robot
---

# MCP server

Zoop exposes a **Model Context Protocol (MCP)** server so AI agents can read and act on Zoop data through the same authorization model as the REST API.

* **Endpoint:** `https://app.zoop.com/api/mcp`
* **Transport:** Streamable HTTP, JSON-RPC 2.0 (MCP-compliant)
* **Auth:** the same bearer token as the REST API — a Zoop API key or a Supabase OAuth access token (see [Authentication](authentication.md))

## How it works

The MCP server publishes a set of **tools** that map onto Zoop resources (customers, jobs, quotes, invoices, and more). Every tool call is authorized with the caller's [scopes](scopes.md) — an agent can only do what its token is permitted to do. Agent-session features additionally use the `read:agent_sessions` / `write:agent_sessions` scopes.

## Connecting

Point an MCP-capable client at the endpoint and supply the bearer token. For example, in a client that configures MCP servers over HTTP:

{% code title="mcp-client config (illustrative)" %}
```json
{
  "mcpServers": {
    "zoop": {
      "url": "https://app.zoop.com/api/mcp",
      "headers": { "Authorization": "Bearer YOUR_TOKEN" }
    }
  }
}
```
{% endcode %}

## Errors

Per the MCP spec, protocol-level errors are returned as JSON-RPC 2.0 error objects (with HTTP `200`), while authentication failures use standard HTTP status codes — see [Errors](errors.md).

{% hint style="info" %}
Scope and tenant rules are identical to the REST API: the token must be valid for the tenant whose data the agent operates on, and each tool enforces its own scope.
{% endhint %}
