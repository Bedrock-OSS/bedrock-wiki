---
title: Intro to Items
category: General
nav_order: 1
tags:
    - guide
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
---

:::warning
Items on the stable version of Minecraft (1.10 format version) are missing many new features, available in experimental (1.16 format version). You can learn more about experimental items [here](/items/items-16).
:::

Items require both a behavior file, to determine the behavior of the item, and a resource file, to determine the look of the item.

For this guide we will create two items: a gem to demonstrate creating a simple item & a meal to demonstrate create an edible item.

## Gem Behavior File

<CodeHeader>BP/items/gem.item.json</CodeHeader>

```json
{
	"format_version": "1.10",
	"minecraft:item": {
		"description": {
			"identifier": "wiki:gem"
		},
		"components": {
			"minecraft:hand_equipped": false,
			"minecraft:stacked_by_data": true,
			"minecraft:foil": false,
			"minecraft:max_stack_size": 64,
			"minecraft:max_damage": 10
		}
	}
}
```

-   `format_version` defines what format the file uses. We'll be using 1.10.
-   `identifier` in `description` defines the name we use to refer to the item.
-   `components` describe the behavior of the item. We will look at some of the ones you can apply.
    -   `minecraft:hand_equipped` defines whether the item 'equips' in your hand. This controls how the item is displayed on your character. For example, a Wooden Sword is hand equipped, but an Apple is not.
    -   `minecraft:stacked_by_data` defines whether this item with different aux values will be able to stack. For example the item "minecraft:dye" with aux value 0, which is an Ink Sack (`/give @s dye 1 0`), doesn't stack with "minecraft:dye" with aux value 12, which is a Cocoa Bean (`/give @s dye 1 12`).
    -   `"minecraft:foil"` defines whether the item will have the enchantment glint on it. An enchanted Shovel has this component set to true, but a disenchanted one to false.
    -   `minecraft:max_stack_size` sets how many items can stack in a single inventory slot. It cannot be larger than 64. Set this to 1 for an unstackable item.
    -   `minecraft:max_damage` defines the item's durability. This is used for tools and weapons.

If you enter the game now, the item will function, but it will be invisible. You can test the functionality of your item by running `/give @s wiki:gem`. Let's now define the item's visuals in the RP folder.

## Gem Resource File

<CodeHeader>RP/items/gem.item.json</CodeHeader>

```json
{
	"format_version": "1.10",
	"minecraft:item": {
		"description": {
			"identifier": "wiki:gem",
			"category": "Nature"
		},
		"components": {
			"minecraft:icon": "gem",
			"minecraft:render_offsets": "tools",
			"minecraft:hover_text_color": "light_purple"
		}
	}
}
```

-   Set the same `identifier` under `description` as in the item's behavior file. This links the item's appearance to its behavior.
-   `category` defines the category of items of the item in the creative inventory. It can be set to "Nature", "Equipment", "Construction" or "Items".
-   `components` in the resource file defines how the item is displayed.
    -   `minecraft:render_offsets` defines how the item should be rendered. It can be set to pretty much any Vanilla item name, for example, "apple".
    -   `minecraft:hover_text_color` changes the rarity color of the item (the color of the item name when hovered over). In this example, we'll make the gem's rarity color be light purple.
    -   `minecraft:icon` defines the item texture's short name. Let's look more into it.

## Gem Textures and Shortnames

To define your item texture's shortname (to use the texture on an item), you first need to create the texture. Create a 16\*16 image and save it into `RP/textures/items/gem.png`.

Now let's create the file where texture short names will be defined, `RP/textures/item_texture.json`.

<CodeHeader>RP/textures/item_texture.json</CodeHeader>

```json
{
	"resource_pack_name": "tut",
	"texture_name": "atlas.items",
	"texture_data": {
		"gem": {
			"textures": "textures/items/gem"
		}
	}
}
```

-   `resource_pack_name` is just the name of the resource pack. You can set it as your namespace.
-   `texture_name` defines what types of textures this files holds. Since this is for items we set it to `atlas.items`.
-   In the `texture_data` objects, you'll define all your item texture shortnames.
-   `gem` is the shortname for the `textures/items/gem` texture you added. This same `gem` is defined in `minecraft:icon` component of the Resource file of your item.

If you did everything correctly, your Gem can now be obtainable by `/give` in-game. If you're having trouble, watch your [Content Log](/guide/troubleshooting#content-log). If the item still malfunctions, check out the example files.

## Meal BP File

Now let us define a food item. This uses the component `minecraft:food` along with some others to create a custom food item.

<CodeHeader>BP/items/meal.item.json</CodeHeader>

```json
{
	"format_version": "1.12.0",
	"minecraft:item": {
		"description": {
			"identifier": "wiki:meal"
		},
		"components": {
			"minecraft:hand_equipped": false,
			"minecraft:stacked_by_data": true,
			"minecraft:foil": false,
			"minecraft:max_stack_size": 64,
			"minecraft:use_duration": 32,
			"minecraft:food": {
				"nutrition": 4,
				"saturation_modifier": "normal",
				"can_always_eat": false,
				"effects": [
					{
						"name": "regeneration",
						"chance": 1.0,
						"duration": 5,
						"amplifier": 1
					},
					{
						"name": "absorption",
						"chance": 1.0,
						"duration": 120,
						"amplifier": 3
					}
				]
			}
		}
	}
}
```

-   A new item needs a unique `identifier`, but the same [namespace](/concepts/namespaces).
-   `minecraft:use_duration` defines how long the player will need to hold the 'use' button to consume the food
-   `minecraft:food` is the component that makes the item a food. Let's break it up:
    -   `nutrition` means hunger points to be added when the player consumes the food.
    -   `saturation_modifier` shows how long these will last. Can be set to "poor", "low", "normal", "high", "good", "max" and "supernatural";
    -   `can_always_eat` defines if the player can eat the food even if their hunger bar is full. For Golden Apples, this component is set to true. For most of other vanilla food it is set to false.
    -   `effects` are the status effects to be applied when the player consumes the food. It's pretty self-explanatory: when the player consumes this item, they'll get `Regeneration I` for 5 seconds and `Resistance III` for 120 seconds. This component is optional.

## Meal RP File

<CodeHeader>RP/items/meal.item.json</CodeHeader>

```json
{
	"format_version": "1.10",
	"minecraft:item": {
		"description": {
			"identifier": "wiki:meal",
			"category": "Nature"
		},
		"components": {
			"minecraft:icon": "meal",
			"minecraft:use_animation": "eat",
			"minecraft:hover_text_color": "aqua",
			"minecraft:render_offsets": "apple"
		}
	}
}
```

Here we have an extra component:

-   `minecraft:use_animation` defines what animation to use when the player is using the item (Can be set to "bow", "eat", "drink", "crossbow", "camera").

## Meal Textures and Shortnames

To add another texture for another item, we can just add another entry to `item_texture.json`.

<CodeHeader>RP/textures/item_texture.json</CodeHeader>

```json
{
	"resource_pack_name": "tut",
	"texture_name": "atlas.items",
	"texture_data": {
		"meal": {
			"textures": "textures/items/meal"
		},
		"gem": {
			"textures": "textures/items/gem"
		}
	}
}
```

## Setting Item Names

Your items should now show up in-game, but their names are made up of translation keys containing the identifiers of our items. For example, `wiki:gem` shows up as `item.wiki:gem.name`. To fix this, we need a `.lang` file in `RP/texts/`. If you have US English set as your language in Minecraft settings, you'll need to name your text file `en_US.lang`.

<CodeHeader>RP/texts/en_US.lang</CodeHeader>

```
item.wiki:gem.name=Gem
item.wiki:meal.name=Meal
```

You can learn more about language files [here](/concepts/text-and-translations).

## Folder Layout

If followed correctly, this is how your project should look.

<FolderView :paths="[
	'BP/items/gem.item.json',
	'BP/items/meal.item.json',
	'RP/items/gem.item.json',
	'RP/items/meal.item.json',
	'RP/texts/en_US.lang',
	'RP/textures/item_texture.json',
	'RP/textures/items/gem.png',
	'RP/textures/items/meal.png',
]"></FolderView>

---

## What you have learned

:::tip What you have learned:

-   How to create a simple item
-   How to create a custom food
-   How to link textures using shortnames in `item_textures.json`
-   How to define names in the language file

:::
