---
title: Intro to Items
description: A "Hello world" guide in making items. Learn the item format and how to create basic custom items.
category: General
nav_order: 1
tags:
    - guide
    - beginner
mentions:
    - SirLich
    - solvedDev
    - Joelant05
    - yanasakana
    - destruc7ion
    - aexer0e
    - stirante
    - ChibiMango
    - MedicalJewel105
    - Sprunkles317
    - mark-wiemer
    - TheItsNameless
    - s1050613
    - SmokeyStack
---

Minecraft Bedrock allows us to add custom items into our world with various vanilla-like properties

This tutorial will cover how to create basic items for the stable version of Minecraft.

## Registering Items

Item definitions are structured similarly to entities: they contain a description and a list of components that defines the item's behavior.

Unlike entities, blocks do not have a resource definition other than in `RP/blocks.json`.

Below is the **minimum** behavior-side code to get a custom block into the creative inventory.

<CodeHeader>BP/items/custom_item.json</CodeHeader>

```json
{
    "format_version": "1.20.50",
    "minecraft:block": {
        "description": {
            "identifier": "wiki:custom_item",
            "menu_category": {
              "category": "construction"
            }
        },
        "components": {} // Must be here, even if empty!
    }
}
```

### Item Description

- Defines the item's identifier - a unique ID in the format of `namespace:identifier`.
- Configures which `menu_category` the block is placed into.
    - Also takes the optional parameters `group` and `is_hidden_in_commands`.

## Adding Components

Right now, our custom item is using the default component values (which can be found [here](/items/item-components)).

Let's configure our own functionality!

<CodeHeader>BP/items/custom_item.json</CodeHeader>

```json
{
    "format_version": "1.20.50",
    "minecraft:block": {
        "description": {
            "identifier": "wiki:custom_block",
            "menu_category": {
                "category": "construction"
            }
        },
        "components": {
            "minecraft:damage": {
                "value": 10
            },
            "minecraft:durability":{
                "max_durability": 36
            },
            "minecraft:hand_equipped": {
                "value": true
            }
        }
    }
}
```

Browse more item components [here](/items/item-components)!

## Applying Textures

We need to create a texture shortname to link it to an image in `RP/textures/item_texture.json`.

<CodeHeader>RP/textures/item_texture.json</CodeHeader>

```json
{
    "resource_pack_name": "wiki",
    "texture_name": "atlas.items",
    "texture_data": {
        "custom_item": {
            "textures": "textures/items/custom_item"
        }
    }
}
```

In our item file, we will add the `minecraft:icon` component to apply the texture.

<CodeHeader>BP/items/custom_item.json</CodeHeader>

```json
{
    "format_version": "1.20.50",
    "minecraft:block": {
        "description": {
            "identifier": "wiki:custom_block",
            "menu_category": {
                "category": "construction"
            }
        },
        "components": {
            "minecraft:icon": {
                "texture": "custom_item"
            }
        }
    }
}
```

## Defining Names

Finally, we will give our item a name. Additionally, you can use the [Display Name](/items/item-components#display_name) component.

<CodeHeader>RP/texts/en_US.lang</CodeHeader>

```c
tile.wiki:custom_item.name=Custom Item
```

## Result

In this page, you've learnt about the following:

<Checklist>

-   [x] Basic features of items
-   [x] How to apply a texture
-   [x] How to link textures using shortnames in `item_textures.json`
-   [x] How to define names in the language file

</Checklist>