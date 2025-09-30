---
title: Blocks as Items
description: Learn about items that represent blocks in the UI, in containers and when dropped on the ground.
category: General
tags:
    - intermediate
license: true
mentions:
    - QuazChick
---

## Automatic Block Items

When you hold a block in your hand, what you're really holding is an item that places the block. When a custom block is registered to the game, Minecraft also automatically registers a new item to represent that block in the inventory.

This item uses the menu category and display name defined by the block, but no other components of the auto-block-item can be modified.
In order to apply other components, such as a 2D icon for your block, you'll need to replace the block's item with your own.

## Replacing Block Items

:::danger BLOCK PLACEMENT
Replacing the default block item with a custom block placer will disable linear placement functionality for your block, resulting in fast bridging/placement being impossible ([see feedback post](https://discord.com/channels/1138536747932864532/1390648192865144966)).
:::

In order to replace a block item, you will need to create a new item JSON file that has the same identifier as the block.

Your new item will also need the [block placer](/items/item-components#block-placer) component which will allow the item to place the block.
The block placer component will also give the item the 3D appearance of the block by default, however this can be overridden with the [icon](/items/item-components#icon) component to display a 2D sprite.

### Custom Flower Example

One example of a situation where replacing the block item is necessary is with flower blocks, which should display as an icon in item form rather than being 3D.

<CodeHeader>BP/blocks/daffodil.json</CodeHeader>

```json
{
    "format_version": "1.21.110",
    "minecraft:block": {
        "description": {
            "identifier": "wiki:daffodil"
        },
        "components": {
            "minecraft:geometry": "minecraft:geometry.cross",
            "minecraft:material_instances": {
                "*": {
                    "texture": "wiki:daffodil",
                    "render_method": "alpha_test"
                }
            }
        }
    }
}
```

<CodeHeader>BP/items/daffodil.json</CodeHeader>

```json
{
    "format_version": "1.21.110",
    "minecraft:item": {
        "description": {
            "identifier": "wiki:daffodil", // Same as the block's ID
            "menu_category": {
                "category": "nature",
                "group": "minecraft:itemGroup.name.flower"
            }
        },
        "components": {
            "minecraft:icon": "wiki:daffodil",
            "minecraft:block_placer": {
                "block": "wiki:daffodil",
                "replace_block_item": true
            }
        }
    }
}
```
