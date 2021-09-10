---
title: Troubleshooting Items
nav_order: 4
tags:
    - help
---

---

:::tip
This page contains troubleshooting information about _items_. You should read our [global troubleshooting](/guide/troubleshooting) document before continuing here.
:::

<a name="0.0"></a>

## Start Here

I followed a tutorial or tried to make my own item and something is wrong! Calm down. This page will help debug common issues. Follow the buttons and prompts to learn about possible issues with your item, and tips for fixing.

<BButton color="blue" link="#_1-10-vs-1-16-items">Continue</BButton>

<a name="1.0.0"></a>

---

## 1.10 vs 1.16 Items?

Before starting, you need to determine whether you creating an experimental item, or a stable item.

:::tip
Versions `1.16.0` and prior are currently **stable** (Includes versions `1.16`, `1.14`, `1.13`, `1.12`, `1.10`). These **do not** require `Holiday Creator Features` to be enabled.

🔗 Tutorial on [stable items](/guide/custom-item).
🔗 Documentation for [stable items](https://bedrock.dev/docs/1.16.0.0/1.16.20.54/Item)

:::

:::tip
Versions `1.16.100` and onward are **experimental**. These items **will not work unless** `Holiday Creator Features` **is enabled in the world**.

🔗 Our tutorial on [experimental items](/items/items-16).
🔗 Documentation for [experimental items](https://bedrock.dev/docs/stable/Item)
:::

### Continue

<BButton color="blue" link="#stable-items">1.10 format (stable)</BButton> <BButton color="blue" link="#experimental-items">1.16.100 format (experimental)</BButton>

---

<a name="2.0"></a>

## Stable Items

This section contains troubleshooting information for stable items. Remember, you are using the `1.10` format, so you need both an RP file and a BP file for your item! If you only have a BP file, you have become confused between format versions. [Please start again here.](#2.0)

Find the issue you have, then read the prompts.

-   [I cannot `/give` myself my custom item!](#2.1)
-   [My textures are missing!](#2.2)

<a name="2.1"></a>

### I cannot `/give` myself my custom item!

An issue here will be caused by the item file in the BP.

-   Confirm that your pack is actually applied to your world
-   Confirm that your item is in the folder `BP/items/`
-   Confirm that your item is valid, according to [jsonlint](https://jsonlint.com/).
-   Confirm that your identifier is all lowercase, and looks similar to this: `wiki:my_item`

<a name="2.2"></a>

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

Next, navigate to your items RP file. Ensure that it is in the correct folder. Some examples of incorrect paths:

-   ⚠️ `item/gem.json`

An example file, to compare against:

<CodeHeader>RP/items/gem.json</CodeHeader>

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

<a name="3.0"></a>

## Experimental Items

This section contains troubleshooting information for experimental items. Remember, you are using the `1.16` format, so there shouldn't be an RP file for your item! If you have both an RP file and a BP file, you have become confused between format versions. [Please start again here.](#2.0)

Find the issue you have, then read the prompts.

-   [I cannot `/give` myself my custom item!](#3.1)
-   [My textures are missing!](#3.2)
-   [My item is huge!](#3.3)

<a name="3.1"></a>

### I cannot `/give` myself my custom item!

-   Confirm that your pack is actually applied to your world
-   Confirm that your item is in the folder `BP/items/`
-   Confirm that your item is valid, according to [jsonlint](https://jsonlint.com/).
-   Confirm that your identifier is all lowercase, and looks similar to this: `wiki:my_item`

<a name="3.2"></a>

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
  "format_version": "1.16.100",
  "minecraft:item": {
      "description": {
          "identifier": "namespace:your_item",
          "category" : "items"     // This line is required
      },
      "components": {
        "minecraft:icon": {
          "texture": "your_item_name" //make sure this string matches the string you put in item_texture.json
        }
      },
      "events": {...}
  }
}
```

If you followed this properly, your item should now have a texture.

<a name="3.3"></a>

### My item is Huge

To turn it to back into a normal size item (`16x16`), use the following formula: `base value/(res/16)`

The base values, `[0.075, 0.125, 0.075]`, seems to be the about the same scale value as normal items.

---

## What now?

You've reached the end of the guide. If you still have any problems, feel free to [join the discord server](/discord) and ask your question there.
