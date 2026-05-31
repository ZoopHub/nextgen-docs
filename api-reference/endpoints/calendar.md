---
description: Calendar events, availability, holds, the iCal feed, and job scheduling.
---

# Calendar

Calendar events, availability, holds, the iCal feed, and job scheduling.

All paths are relative to `https://app.zoop.com/{tenantId}/api`. Every request needs a bearer token; the required scope is shown on each operation.

## Get busy intervals for a date range

{% openapi src="../openapi.json" path="/calendar/availability" method="get" %}
[../openapi.json](../openapi.json)
{% endopenapi %}

## Create a calendar event (one-off or recurring)

{% openapi src="../openapi.json" path="/calendar/events" method="post" %}
[../openapi.json](../openapi.json)
{% endopenapi %}

## Cancel a calendar event (series-cancel modes)

{% openapi src="../openapi.json" path="/calendar/events/{id}" method="delete" %}
[../openapi.json](../openapi.json)
{% endopenapi %}

## Get a single calendar event

{% openapi src="../openapi.json" path="/calendar/events/{id}" method="get" %}
[../openapi.json](../openapi.json)
{% endopenapi %}

## Edit a calendar event (series-edit modes)

{% openapi src="../openapi.json" path="/calendar/events/{id}" method="patch" %}
[../openapi.json](../openapi.json)
{% endopenapi %}

## Respond to your own event invitation

{% openapi src="../openapi.json" path="/calendar/events/{id}/respond" method="post" %}
[../openapi.json](../openapi.json)
{% endopenapi %}

## List booking holds (holds inbox)

{% openapi src="../openapi.json" path="/calendar/holds" method="get" %}
[../openapi.json](../openapi.json)
{% endopenapi %}

## Confirm a booking hold (promote to a job)

{% openapi src="../openapi.json" path="/calendar/holds/{id}/confirm" method="post" %}
[../openapi.json](../openapi.json)
{% endopenapi %}

## Decline (release) a booking hold

{% openapi src="../openapi.json" path="/calendar/holds/{id}/release" method="post" %}
[../openapi.json](../openapi.json)
{% endopenapi %}

## Propose an alternate slot for a booking hold

{% openapi src="../openapi.json" path="/calendar/holds/{id}/suggest" method="post" %}
[../openapi.json](../openapi.json)
{% endopenapi %}

## Fetch calendar grid items for a date range

{% openapi src="../openapi.json" path="/calendar/items" method="get" %}
[../openapi.json](../openapi.json)
{% endopenapi %}

## Reschedule (drag-drop move) a job

{% openapi src="../openapi.json" path="/calendar/jobs/{id}/reschedule" method="patch" %}
[../openapi.json](../openapi.json)
{% endopenapi %}

