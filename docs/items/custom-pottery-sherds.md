---
title: Custom Pottery Sherds
description: Learn how to make custom pottery sherds.
category: Tutorials
tags:
    - easy
license: true
mentions:
    - SmokeyStack
    - QuazChick
---

:::tip FORMAT VERSION `1.21.110`
This page requires a basic understanding of custom items.
Check out the [items guide](/items/items-intro) and [item tags](/items/item-tags) before starting!
:::

Minecraft Bedrock allows us to add custom pottery sherds that can be used to craft Decorated Pots.
This article will cover how to create them.

## Registering Pottery Sherds

Pottery sherds are controlled by an [item tag](/items/item-tags)!
To allow an item to be used to craft a Decorated Pot, we need to apply the `minecraft:decorated_pot_sherds` tag to our item.

:::warning ITEM NAME

The tooltip that displays the pottery sherds used to craft a Decorated Pot will assume that the item's localization key is in the format `item.<identifier>.name`.
Therefore, you will need to change your item's display name to be in this format.

<CodeHeader>RP/texts/en_US.lang</CodeHeader>

```lang
item.wiki:custom_pottery_sherd.name=Custom Pottery Sherd
```

:::

<CodeHeader>BP/items/custom_pottery_sherd.json</CodeHeader>

```json
{
    "format_version": "1.21.110",
    "minecraft:item": {
        "description": {
            "identifier": "wiki:custom_pottery_sherd",
            "menu_category": {
                "category": "items",
                "group": "minecraft:itemGroup.name.potterySherds"
            }
        },
        "components": {
            "minecraft:icon": "wiki:custom_pottery_sherd", // Shortname defined in "RP/textures/item_texture.json"
            "minecraft:tags": {
                "tags": ["minecraft:decorated_pot_sherds"] // Allows the item to be used to craft a Decorated Pot
            },
            "minecraft:display_name": {
                "value": "item.wiki:custom_pottery_sherd.name"
            }
        }
    }
}
```

Now that we have registered our sherd, we can test it by putting the sherd in a crafting table.
If you applied the tag correctly, the crafting table should output a decorated pot!

![Custom pottery sherd item being used to craft a Decorated Pot](/assets/images/items/custom-pottery-sherds/crafting.png)

However, the decorated pot still will not display the sherd itself. This is because we haven't told the decorated pot what image to display!

## Defining Pattern Textures

Here's an example pottery pattern texture that we will use for this tutorial:

<WikiImage
    src="/assets/images/items/custom-pottery-sherds/custom_pottery_pattern.png"
    caption="RP/textures/blocks/custom_pottery_pattern.png"
    pixelated
/>

To tell the game to display the texture, we need to edit the decorated pot's client entity file.
Add the following JSON file to your resource pack:

<CodeHeader>RP/entity/decorated_pot.json</CodeHeader>

```json
{
    "format_version": "1.8.0",
    "minecraft:client_entity": {
        "description": {
            "identifier": "minecraft:decorated_pot",
            "textures": {
                // Each shortname listed here should be the identifier of your item without its namespace.
                "custom_pottery_sherd": "textures/blocks/custom_pottery_pattern" // Path to custom pot texture
            }
        }
    }
}
```

If you've done everything right, your decorated pot will now display your sherd instead of being a blank pot!

![Decorated Pot with a custom pattern on one face](/assets/images/items/custom-pottery-sherds/decorated_pot.png)

## Additional Notes

**Question**: Will editing the client entity file make my add-on incompatible with other add-ons that add pottery sherds?

**Answer**: It does not! Client entity files actually merge definitions together.
As long as your item identifier is unique, other add-ons won't override them!
If you're concerned that your item identifier without a namespace is not unique, prefix your identifier with your namespace e.g. `wiki:wiki_custom_pottery_sherd`.
