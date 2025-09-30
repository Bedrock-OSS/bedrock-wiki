---
title: Block Tags
description: Block tags can be used to ensure that a block meets certain conditions.
category: General
nav_order: 3
license: true
mentions:
    - SirLich
    - yanasakana
    - aexer0e
    - SmokeyStack
    - MedicalJewel105
    - Lufurrius
    - Chikorita-Lover
    - victorsigma
    - TheItsNameless
    - QuazChick
    - Kaioga5
    - Xterionix
---

Block tags can be used to ensure that a block meets certain conditions.

## Applying Tags

Block tags can be applied in the block's `components`, prefixed with `tag:`, as seen below:

<CodeHeader>BP/blocks/tree_stump.json</CodeHeader>

```json
{
    "format_version": "1.21.110",
    "minecraft:block": {
        "description": {
            "identifier": "wiki:tree_stump",
            "menu_category": {
                "category": "nature"
            }
        },
        "components": {
            "tag:wood": {},
            "tag:minecraft:is_axe_item_destructible": {},
            "tag:wiki:very_useless": {}
        }
    }
}
```

## Testing for Tags

### From Block Descriptors

-   `q.all_tags`
-   `q.any_tag`

<CodeHeader>Block Descriptor</CodeHeader>

```json
{
    "tags": "q.any_tag('wiki:glowing') && q.all_tags('wiki:custom_ore', 'stone')"
}
```

### From Entities

-   `q.relative_block_has_all_tags`
-   `q.relative_block_has_any_tag`
-   `q.block_has_all_tags`
-   `q.block_has_any_tag`

<CodeHeader>minecraft:client_entity > description</CodeHeader>

```json
"scripts": {
    "pre_animation": [
        "v.is_on_sand = q.relative_block_has_any_tag(0, -1, 0, 'sand');"
    ]
}
```

### Additional Queries

**NOTE:** The following query functions have no known use cases.

-   `q.block_neighbor_has_all_tags`
-   `q.block_neighbor_has_any_tag`

Example of an item querying a block's tags:

<CodeHeader>BP/items/custom_pickaxe.json</CodeHeader>

```json
{
    "format_version": "1.21.110",
    "minecraft:item": {
        "description": {
            "identifier": "wiki:custom_pickaxe",
            "menu_category": {
                "category": "equipment",
                "group": "minecraft:itemGroup.name.pickaxe"
            }
        },
        "components": {
            "minecraft:digger": {
                "use_efficiency": true,
                "destroy_speeds": [
                    {
                        "speed": 5,
                        "block": {
                            "tags": "q.any_tag('custom_ore', 'stone', 'metal')"
                        }
                    }
                ]
            }
        }
    }
}
```

## List of Vanilla Tags

<Table data="vanilla_tags.json" />
