---
title: 'Troubleshooting Items'
nav_order: 3
tags:
    - help
---

:::warning
This page is currently under construction. Visit the [old item troubleshoot page](./old-troubleshooting-items)
:::

### Your Item Has a Problem

_I followed a tutorial or tried to make my own item and something's wrong!_ No worries, it's easy to make mistakes when dealing with items. This page will help you to debug common issues.

## Before you Begin

::: warning
As of game versions `1.16.100` and onward, there are two distinct types of items, as constituted by its `format_version`.
In short, versions `1.16.0` and prior are currently the stable (Includes **1.16, 1.14, 1.13, 1.12, 1.10**), **non-experimental** version. These **do not** require `Holiday Creator Features` to be enabled.
Versions `1.16.100` and onward are **experimental**. These items **will not work unless** `Holiday Creator Features` **is enabled in the world**.
:::

_Before troubleshooting, please ensure that you have a format version that you'd want to use for your item._

### Version Dependent Components

Among the three main item versions, there are also different sets of item `components`. **It is absolutely imperative that the correct components and syntax are used for their respective versions**. Failure to meet such criteria will **always** result in a broken item. You may find the correct components and their appropriate syntax in the following links:

-   `Experimental (1.16.100+)` - https://bedrock.dev/docs/stable/Item

-   `Stable (1.12.0)` - https://bedrock.dev/docs/1.16.0.0/1.16.20.54/Item

## Troubleshooting All Items

### 1.0 - Pack Updating/Presence

Are the packs _both_ active in your world of testing? (You may check this by going to world settings > behavior/resource packs) Further, are they both set up to properly update? That is, are you either using **development folders** or creating a **new world** each pack update? Ensuring that the packs are actually changing per pack-update is always first step in troubleshooting.

### 1.5 - Determining Pack [Resource or Behavior]

Determining which pack the error is actually in is also very important. There are a few surefire ways to prove which it is in (if not both):
_-If the item is invisible, often constantly throwing the error, `[Item] requires either an icon atlas or icon texture`, the error is in the `resource pack`.
-If the item is showing the black-magenta checkerboard texture, or the "missing" texture, the error is contained in the `resource pack`.
-If the item fails to register at all, that is, not showing in the inventory or through commands, the error is in the `behavior pack`_.

### 2.0 - Ensuring Correct Behaviors

If the item fails to register at all, that is, not showing in the inventory or through commands, the error is in the `behavior pack`. To fix this, there are a few big things to consider:

-   Is the `.json` syntax valid? A validator can be found here: https://jsonlint.com/

-   What does the content log say? Always consider what the log is outputting.

-   Is the pack enabled in the world? (it happens to the best of us)

-   _Make sure that all component names match those found in documentation. Remember_: **no spaces or capitals**

### 3.0 - Ensuring Correct Resources

If the item is showing the black-magenta checkerboard texture, or constantly throwing the error, `[Item] requires either an icon atlas or icon texture`, the error is in the `resource pack`. More on this later.

### 4.0 - Choosing a Version

As stated previously, items work very differently across different `format_version`s. Deciding which format you wish to use is the next step in the troubleshooting process.

-   I wish to use the stable, `1.12.0` format: <BButton color="blue" link="item-troubleshoot#_5-0-assessing-specific-issue">Continue</BButton>

-   I wish to use the experimental, `1.16.100` format: <BButton color="blue">Coming Soon</BButton>

## Stable Item Troubleshooting [1.12.0]

### 5.0 - Assessing Specific Issue

-   My item is invisible in my hand, and is spamming a content log error that it needs an icon: <BButton color="blue" link="item-troubleshoot#_5-1-invisible-item">Continue</BButton>

-   My item is not appearing in the inventory or through commands: <BButton color="blue" link="item-troubleshoot#_5-2-item-not-appearing">Continue</BButton>

-   My item is missing a texture, and has a pink-and-black one: <BButton color="blue" link="item-troubleshoot#_5-3-item-has-magenta-and-black-checkerboard-texture">Continue</BButton>

### 5.1 - Invisible Item

For this error, ensure that your item is properly defined in the **Resource Pack**.
To do this, you need to create an item file in `RP/items/` called `<name_of_your_item>.json`.
<CodeHeader>RP/items/your_item.json</CodeHeader>

```json
{
	"format_version": "1.12.0",
	"minecraft:item": {
		"description": {
			"identifier": "yana:amethyst_sword",
			"category": "Equipment"
		},

		"components": {
			"minecraft:icon": "amethyst_sword",
			"minecraft:render_offsets": "tools"
		}
	}
}
```

_An example of how this file should look_

Be sure that your `"minecraft:icon"` correctly matches to your `item_texture.json` name.

### 5.2 - Item Not Appearing

For this error, ensure that your item is properly defined in your **Behavior Pack**.
To do this, you need to create an item file in `BP/items/` called `<name_of_your_item>.json`.
<CodeHeader>BP/items/your_item.json</CodeHeader>

```json
{
	"format_version": "1.12.0",
	"minecraft:item": {
		"description": {
			"identifier": "yana:amethyst_sword"
		},

		"components": {
			"minecraft:foil": false,
			"minecraft:max_damage": 250,
			"minecraft:hand_equipped": true,
			"minecraft:max_stack_size": 1
		}
	}
}
```

_An example of how this file should look_

Be sure that your `component` names correctly match those found in the documentation.

### 5.3 - Item Has Magenta-and-Black Checkerboard Texture

For this error, ensure that your item's texture is properly referenced in your **Resource Pack**.
This is commonly due to a mismatched file or folder name. Remember, no capitals or spaces in file or folder names.

To fix, ensure your texture paths correct.
These are the folders that all lead to your texture file, as defined in `RP\textures\item_texture.json`. For example:
<CodeHeader>RP\textures\item_texture.json</CodeHeader>

```json
{
	"texture_name": "atlas.items",
	"resource_pack_name": "vanilla",
	"texture_data": {
		"amethyst_sword": {
			"textures": "textures/items/amethyst_sword"
		}
	}
}
```

_This texture should be in the folder `"textures/items/"`, and the image should be called `amethyst_sword.png`._

Ensure your `"minecraft:icon"` component matches toward the correct short name.

```json
{
	"minecraft:icon": "amethyst_sword"
},
```

These, for example, search for a name in `item_texture.json` called `amethyst_sword`, as seen above.
