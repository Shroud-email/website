---
layout: ~/layouts/DocsLayout.astro
title: /aliases
---

# List email aliases

`GET /api/v1/aliases`: Lists all your email aliases.

Aliases are returned in pages of 20. You can customize pagination
using the `page_size` and `page` URL parameters, e.g. `/api/v1/aliases?page_size=10&page=3`.

## Example response

```
{
  email_aliases: [{
    "id": 1,
    "address": "deadbeef@fog.shroud.email",
    "enabled": true,
    "title": "Newsletters",
    "notes": "Used for webshop newsletters etc.",
    "forwarded": 26,
    "blocked": 33,
    "blocked_addresses": ["spammer@example.com"]
  }],
  "page_number": 1,
  "page_size": 20,
  "total_entries": 1,
  "total_pages": 1
}
```
