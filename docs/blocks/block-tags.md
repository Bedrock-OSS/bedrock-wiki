---
title: Block Tags
description: Block tags are used when checking for multiple types of block and can enable vanilla functionality.
category: General
nav_order: 3
related:
    - /blocks/vanilla-block-tags
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

Block tags are used when checking for multiple types of block and can enable vanilla functionality.
For a list of vanilla block tags and their functionality, visit [this page](/blocks/vanilla-block-tags).

## Applying Tags

<CodeHeader path="BP/blocks/tree_stump.json" />

```json
{
    "format_version": "1.26.30",
    "minecraft:block": {
        "description": {
            "identifier": "wiki:tree_stump",
            "menu_category": {
                "category": "nature"
            }
        },
        "components": {
            "minecraft:tags": ["wood", "minecraft:is_axe_item_destructible", "wiki:very_useless"]
        }
    }
}
```

## Testing for Tags

### Block Descriptor

-   `q.all_tags(...tags)`{lang=molang}
    -   Returns whether the block has all of the listed tags.
-   `q.any_tag(...tags)`{lang=molang}
    -   Returns whether the block has at least one of the listed tags.

<CodeHeader path="Block Descriptor" />

```json
{
    "tags": "q.any_tag('wiki:glowing') && q.all_tags('wiki:custom_ore', 'stone')"
}
```

### Entity Molang

-   `q.block_has_all_tags(x, y, z, ...tags)`{lang=molang}
    -   Returns whether the block at the specified coordinates has all of the listed tags.
-   `q.block_has_any_tag(x, y, z, ...tags)`{lang=molang}
    -   Returns whether the block at the specified coordinates has at least one of the listed tags.
-   `q.relative_block_has_all_tags(x, y, z, ...tags)`{lang=molang}
    -   Returns whether the block at the specified offset from the entity has all of the listed tags.
-   `q.relative_block_has_any_tag(x, y, z, ...tags)`{lang=molang}
    -   Returns whether the block at the specified offset from the entity has at least one of the listed tags.

<CodeHeader path="RP/entity/crab.json" breadcrumbs="minecraft:client_entity/description" />

```json
"scripts": {
    "pre_animation": [
        "v.is_on_sand = q.relative_block_has_any_tag(0, -1, 0, 'sand');"
    ]
}
```

### Additional Queries

**NOTE:** The following query functions have no known use cases.

-   `q.block_neighbor_has_all_tags(x, y, z, ...tags)`{lang=molang}
-   `q.block_neighbor_has_any_tag(x, y, z, ...tags)`{lang=molang}

### Digger Example

Example of an item querying a block's tags:

<CodeHeader path="BP/items/custom_pickaxe.json" />

```json
{
    "format_version": "1.26.30",
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
                            "tags": "q.any_tag('minecraft:is_pickaxe_item_destructible')"
                        }
                    }
                ]
            }
        }
    }
}
```
