---
title: Troubleshooting Items
description: Troubleshooting guide to items.
category: General
tags:
    - help
mentions:
    - SmokeyStack
    - yanasakana
    - SirLich
    - MedicalJewel105
    - TheDoctor15
    - ThomasOrs
    - QuazChick
---

:::tip
This page contains troubleshooting information about _items_. You should read our [global troubleshooting](/guide/troubleshooting) document before continuing here.
:::

## Start Here

> "I followed a tutorial or tried to make my own item and something's wrong!"

No need to panic! This page will help debug common issues.

### Item Doesn't Exist

-   Confirm that your pack is actually applied to your world
-   Confirm that your item is in the folder `BP/items/`
-   Confirm that your item is valid, according to [jsonlint](https://jsonlint.com/).
-   Confirm that your identifier is all lowercase, and looks similar to this: `wiki:my_item`

### Missing Textures

Navigate to your `item_texture.json` file. Ensure that it is properly named, and in the correct folder. Some examples of wrong names:

-   ⚠️ `texture/item_texture.json`
-   ⚠️ `textures/Item_texture.json`
-   ⚠️ `textures/item_textures.json`

Here is an example file to compare against:

<CodeHeader>RP/textures/item_texture.json</CodeHeader>

```json
{
    "resource_pack_name": "wiki",
    "texture_name": "atlas.items",
    "texture_data": {
        "wiki:your_item_icon": {
            "textures": "textures/items/your_item_icon"
        }
    }
}
```

Next, navigate to your items BP file. Place the `minecraft:icon` component in your item file under the components section. Ensure that it is properly named.

<CodeHeader>BP/items/your_item.json</CodeHeader>

```json
{
    "format_version": "1.21.110",
    "minecraft:item": {
        "description": {
            "identifier": "wiki:your_item",
            "menu_category": {
                "category": "items"
            }
        },
        "components": {
            "minecraft:icon": "wiki:your_item_icon" // Make sure this string matches the shortname you put in item_texture.json
        }
    }
}
```

If you followed this properly, your item should now have a texture.

## What now?

You've reached the end of the guide. If you still have any problems, feel free to [join the discord server](/discord) and ask your question there.
