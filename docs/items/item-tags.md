---
title: Item Tags
description: Item tags are used when checking for multiple types of item and can enable vanilla functionality.
category: General
nav_order: 3
license: true
mentions:
    - Xterionix
    - SmokeyStack
    - QuazChick
---

Item tags are used when checking for multiple types of item and can enable vanilla functionality.
For a list of vanilla item tags and their functionality, visit [this page](/items/vanilla-item-tags).

## Applying Tags

<CodeHeader>BP/items/example_item.json</CodeHeader>

```json
{
    "format_version": "1.26.0",
    "minecraft:item": {
        "description": {
            "identifier": "wiki:example_item"
        },
        "components": {
            "minecraft:tags": {
                "tags": ["wiki:example_tag"]
            }
        }
    }
}
```

## Testing for Tags

### From Entities

-   `q.equipped_item_all_tags(slot, ...tags)`{lang=molang}
    -   Returns whether the item at the specified location has all of the listed tags.
-   `q.equipped_item_any_tag(slot, ...tags)`{lang=molang}
    -   Returns whether the item at the specified location has at least one of the listed tags.

<CodeHeader>minecraft:client_entity > description</CodeHeader>

```json
"scripts": {
    "pre_animation": [
        "v.is_holding_pickaxe = q.equipped_item_all_tags('slot.weapon.mainhand', 'minecraft:is_tool', 'minecraft:is_pickaxe');"
    ]
}
```

### From Item Descriptors

-   `q.all_tags(...tags)`{lang=molang}
    -   Returns whether the item has all of the listed tags.
-   `q.any_tag(...tags)`{lang=molang}
    -   Returns whether the item has at least one of the listed tags.

<CodeHeader>Item Descriptor</CodeHeader>

```json
{
    "tags": "q.all_tags('minecraft:is_tool', 'minecraft:is_pickaxe') && q.any_tag('minecraft:diamond_tier', 'minecraft:netherite_tier')"
}
```

### From Recipes

<CodeHeader>minecraft:recipe_shapeless</CodeHeader>

```json
"ingredients": [
    {
        "item": { "tag": "minecraft:planks" }
    }
]
```
