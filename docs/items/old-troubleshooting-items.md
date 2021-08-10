---
title: 'Old Troubleshooting Items'
nav_order: 4
tags:
    - help
---

## Learn about Troubleshooting

This page offers specific advice for troubleshooting blocks. You should consider reading our general tips on troubleshooting before starting here.

<BButton link="/guide/troubleshooting"> Troubleshooting Basics </BButton>

## Step-by-step Item Debugging

## 0.0.0 - Trouble

I followed a tutorial or tried to make my own item and something's wrong! Calm down. This page will help debug common issues. <BButton color="blue" link="old-troubleshooting-items#_1-0-0-1-10-vs-1-16-items">Continue</BButton>

## 1.0.0 - 1.10 vs 1.16 Items?

First things first, determine whether you used 1.10 or 1.16 format.
Items are VERY DIFFERENT in 1.16. The main change you need to focus on is that there are longer two files (BP + RP), but rather a single BP file. This means that components like the following need to go into the BP -not the non-existent RP file.

<CodeHeader>BP/items/your_item.json</CodeHeader>

```json
"minecraft:icon": {
    "texture": "copper_ingot"
}
```
Make sure it matches the one from your item_texture.json
Learn about the new 1.16 items here: https://wiki.bedrock.dev/concepts/items

## Result
I'm using 1.10 format <BButton color="blue" link="old-troubleshooting-items#_2-0-0-1-10-items">Continue</BButton>

I'm using 1.16 format <BButton color="blue" link="old-troubleshooting-items#_3-0-0-1-16-items">Continue</BButton>


## 2.0.0 - 1.10 Items

## My Textures Are Missing!

Calm down, navigate to your `item_texture.json`. Ensure that it is properly named.

<CodeHeader>RP/textures/item_texture.json</CodeHeader>

```json
{
	"resource_pack_name": "tut",
	"texture_name": "atlas.items",
	"texture_data": {
		"gem": {
			"textures": "textures/items/your_item_name"
		}
	}
}
```

Next, navigate to your item RP file. Ensure that it is properly named.

<CodeHeader>RP/items/your_item.json</CodeHeader>

```json
{
	"format_version": "1.10",
	"minecraft:item": {
		"description": {
			"identifier": "namespace:your_item",
			"category": "Nature"
		},
		"components": {
			"minecraft:icon": "your_item_name", //make sure this string matches the string you put in item_texture.json
			"minecraft:render_offsets": "tools"
		}
	}
}
```

If you followed this properly, your item should now have a texture.


## 3.0.0 - 1.16 Items

## My Textures Are Missing!

Calm down, navigate to your `item_texture.json`. Ensure that it is properly named.

<CodeHeader>RP/textures/item_texture.json</CodeHeader>

```json
{
	"resource_pack_name": "tut",
	"texture_name": "atlas.items",
	"texture_data": {
		"gem": {
			"textures": "textures/items/your_item_name"
		}
	}
}
```

Next, navigate to your item BP file. Remember, you are using the 1.16 format, so there shouldn't be an RP file for your item. Place the `minecraft:icon` component in your item file under the components section. Ensure that it is properly named.

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

## My item is Huge When Using The New `render_offset` For 1.16.100!

To turn it to back into a normal size item (16x16), use the following formula provided by || MajestikButter ||#3362: `base value/(res/16)`

The base values, [0.075, 0.125, 0.075], seems to be the about the same scale value as normal items

## 4.0.0 - What Now?

That is all the common item troubleshooting tips I have seen. If you still have any problems, feel free to join the discord server and ask your question there. If you believe any information is wrong or outdated, feel free to contribute via github.
