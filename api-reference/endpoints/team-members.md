---
description: Team members and their invitations.
---

# Team Members

Team members and their invitations.

All paths are relative to `https://app.zoop.com/{tenantId}/api`. Every request needs a bearer token; the required scope is shown on each operation.

## List team members

{% openapi src="../openapi.json" path="/team-members" method="get" %}
[../openapi.json](../openapi.json)
{% endopenapi %}

## Invite a team member

{% openapi src="../openapi.json" path="/team-members" method="post" %}
[../openapi.json](../openapi.json)
{% endopenapi %}

## Remove a team member

{% openapi src="../openapi.json" path="/team-members/{userId}" method="delete" %}
[../openapi.json](../openapi.json)
{% endopenapi %}

## Update a team member's role

{% openapi src="../openapi.json" path="/team-members/{userId}" method="patch" %}
[../openapi.json](../openapi.json)
{% endopenapi %}

## List pending invitations

{% openapi src="../openapi.json" path="/team-members/invitations" method="get" %}
[../openapi.json](../openapi.json)
{% endopenapi %}

## Revoke a pending invitation

{% openapi src="../openapi.json" path="/team-members/invitations/{inviteId}" method="delete" %}
[../openapi.json](../openapi.json)
{% endopenapi %}

## Resend a pending invitation

{% openapi src="../openapi.json" path="/team-members/invitations/{inviteId}/resend" method="post" %}
[../openapi.json](../openapi.json)
{% endopenapi %}

