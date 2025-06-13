---
title: Item Tags
description: Item tags can be used to ensure that an item meets certain conditions.
category: General
nav_order: 3
license: true
mentions:
    - Xterionix
    - SmokeyStack
    - QuazChick
---

Item tags can be used to ensure that an item meets certain conditions.

## Applying Tags

### From 1.20.50 and Onwards

<CodeHeader></CodeHeader>

```json
{
    "format_version": "1.21.90",
    "minecraft:item": {
        "description": {
            "identifier": "wiki:my_item"
        },
        "components": {
            "minecraft:tags": {
                "tags": ["wiki:my_tag"]
            }
        }
    }
}
```

### Before 1.20.50

<CodeHeader></CodeHeader>

```json
{
    "format_version": "1.20.40",
    "minecraft:item": {
        "description": {
            "identifier": "wiki:my_item"
        },
        "components": {
            "tag:wiki:my_tag": {}
        }
    }
}
```

## Testing for Tags

Tags can be queried with:

-   `q.all_tags`
-   `q.any_tag`
-   `q.equipped_item_all_tags`
-   `q.equipped_item_any_tag`

## List of Vanilla Tags

<Table data="vanilla_tags.json" />
