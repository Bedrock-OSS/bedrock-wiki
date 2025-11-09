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
    "format_version": "1.21.120",
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

-   `q.equipped_item_all_tags(slot, index?, ...tags)`{lang=molang}
    -   Returns whether the item at the specified location has all of the listed tags.
-   `q.equipped_item_any_tag(slot, index?, ...tags)`{lang=molang}
    -   Returns whether the item at the specified location has at least one of the listed tags.

<CodeHeader>minecraft:client_entity > description</CodeHeader>

```json
"scripts": {
    "pre_animation": [
        "v.is_holding_pickaxe = q.equipped_item_all_tags('slot.weapon.mainhand', 'minecraft:is_tool', 'minecraft:is_pickaxe');",
        "v.last_slot_has_food = q.equipped_item_any_tag('slot.hotbar', 8, 'minecraft:is_food');"
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

## List of Vanilla Tags

<Table data="vanilla_tags.json" />
