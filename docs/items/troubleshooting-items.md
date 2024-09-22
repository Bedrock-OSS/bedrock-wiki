---
title: Troubleshooting Items
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
description: Troubleshooting guide to items.
---

:::tip
This page contains troubleshooting information about _items_. You should read our [global troubleshooting](/guide/troubleshooting) document before continuing here.
:::

## Start Here

I followed a tutorial or tried to make my own item and something is wrong! Calm down. This page will help debug common issues. Follow the buttons and prompts to learn about possible issues with your item, and tips for fixing.

## Stable Items

This section contains troubleshooting information for stable items. Remember, you are using the `1.10` format, so you need both an RP file and a BP file for your item! If you only have a BP file, you have become confused between format versions. Please start again [here](#_1-10-vs-1-16-items).

Find the issue you have, then read the prompts.

-   [I cannot /give myself my custom item!](#i-cannot-give-myself-my-custom-item)
-   [My textures are missing!](#my-textures-are-missing)

### I cannot /give myself my custom item!

An issue here will be caused by the item file in the BP.

-   Confirm that your pack is actually applied to your world
-   Confirm that your item is in the folder `BP/items/`
-   Confirm that your item is valid, according to [jsonlint](https://jsonlint.com/).
-   Confirm that your identifier is all lowercase, and looks similar to this: `wiki:my_item`

### My textures are missing!

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
        "gem": {
            "textures": "textures/items/gem"
        }
    }
}
```

Next, navigate to your items BP file. Ensure that it is in the correct folder. Example of incorrect path:

-   ⚠️ `item/gem.json`

An example file, to compare against:

<CodeHeader>BP/items/gem.json</CodeHeader>

```json
{
    "format_version": "1.10",
    "minecraft:item": {
        "description": {
            "identifier": "wiki:gem",
            "category": "Nature"
        },
        "components": {
            "minecraft:icon": "gem", //make sure this string matches the string you put in item_texture.json!
            "minecraft:render_offsets": "tools"
        }
    }
}
```

If you followed this properly, your item should now have a texture.

---

## Experimental Items

This section contains troubleshooting information for experimental items. Remember, you are using the `1.16` format, so there shouldn't be an RP file for your item! If you have both an RP file and a BP file, you have become confused between format versions. Please start again [here](#_1-10-vs-1-16-items).

Find the issue you have, then read the prompts.

-   [Start Here](#start-here)
-   [1.10 vs 1.16 Items?](#110-vs-116-items)
    -   [Continue](#continue)
-   [Stable Items](#stable-items)
    -   [I cannot /give myself my custom item!](#i-cannot-give-myself-my-custom-item)
    -   [My textures are missing!](#my-textures-are-missing)
-   [Experimental Items](#experimental-items)
    -   [I cannot /give myself my custom item!](#i-cannot-give-myself-my-custom-item-1)
    -   [My Textures Are Missing!](#my-textures-are-missing-1)
    -   [My item is Huge](#my-item-is-huge)
-   [What now?](#what-now)

### I cannot /give myself my custom item!

-   Confirm that your pack is actually applied to your world
-   Confirm that your item is in the folder `BP/items/`
-   Confirm that your item is valid, according to [jsonlint](https://jsonlint.com/).
-   Confirm that your identifier is all lowercase, and looks similar to this: `wiki:my_item`

### My Textures Are Missing!

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
        "gem": {
            "textures": "textures/items/gem"
        }
    }
}
```

Next, navigate to your items BP file. Place the `minecraft:icon` component in your item file under the components section. Ensure that it is properly named.

<CodeHeader>BP/items/your_item.json</CodeHeader>

```json
{
  "format_version": "1.21.10",
  "minecraft:item": {
      "description": {
          "identifier": "namespace:your_item",
          "category" : "items" // This line is required
      },
      "components": {
        "minecraft:icon": {
          "texture": "your_item_name" // Make sure this string matches the string you put in item_texture.json
        }
      },
      "events": {...}
  }
}
```

If you followed this properly, your item should now have a texture.

## What now?

You've reached the end of the guide. If you still have any problems, feel free to [join the discord server](/discord) and ask your question there.
