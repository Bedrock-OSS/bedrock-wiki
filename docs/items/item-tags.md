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

<CodeHeader>BP/items/example_item.json</CodeHeader>

```json
{
    "format_version": "1.21.110",
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

-   `q.equipped_item_all_tags`
-   `q.equipped_item_any_tag`

<CodeHeader>minecraft:client_entity > description</CodeHeader>

```json
"scripts": {
    "pre_animation": [
        "v.is_holding_pickaxe = q.equipped_item_all_tags('slot.weapon.mainhand', 'minecraft:is_tool', 'minecraft:is_pickaxe');"
    ]
}
```

### From Item Descriptors

-   `q.all_tags`
-   `q.any_tag`

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

## List of Vanilla Tags

<Table data="vanilla_tags.json" />
