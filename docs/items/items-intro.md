---
title: Intro to Items
nav_order: 1
tags:
    - guide
---

:::warning
Items on the stable version of Minecraft (1.10 format version) are missing many new features, available in experimental (1.16 format version). You can learn more about [experimental items here](/items/items-16).
:::

Every item, block, or entity requires a `Behavior` file in the BP folder (to define how the item will behave) and a Resource file in the `RP` folder (to specify what the item will look like in-game).

Let's start by creating our simple item's behavior file: `BP/items/gem.item.json` (In some steps, like this one, you will first need to create a folder before the file can be created).

## Gem Behavior Code (BP)

<CodeHeader>BP/items/gem.item.json</CodeHeader>

```json
{
	"format_version": "1.10",
	"minecraft:item": {
		"description": {
			"identifier": "tut:gem"
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
-   `identifier` in `description` is used in blocks, recipes, and entities. It will be used to define your item. For example, you can use /give with the identifier like this: `/give @s tut:gem`. The first part of the identifier is your pack's namespace. It's best to use the same namespace throughout your pack. It can be anything you like (e.g. `kf:`, `jdot:`, `ve:`, `kai:`) providing it isn't too long. A namespace CANNOT be `minecraft:` or `minecon:`. The second part of the identifier is the name of the item, entity, recipe, or block.
-   `components` are "qualities" the object always has. We'll look deeper into them when creating a custom entity. Let's break up everything into "components".
    -   `minecraft:hand_equipped` defines whether the item 'equips' in your hand. This controls how the item is displayed on your character. For example, a Wooden Sword is hand equipped, but an Apple isn't.
    -   `minecraft:stacked_by_data` defines whether this item with different aux values will be able to stack. For example
    -   the item "minecraft:dye" with aux value 0, which is an Ink Sack (`/give @s dye 1 0`), doesn't stack with "minecraft:dye" with aux value 12, which is a Cocoa Bean (`/give @s dye 1 12`).
    -   "minecraft:foil" defines whether the item will have the enchantment glint on it. An enchanted Shovel has this component set to true, but a disenchanted one to false.
    -   `minecraft:max_stack_size` sets how many items can stack in a single inventory slot. It cannot be larger than 64. Set this to 1 for an unstackable item.
    -   `minecraft:max_damage` can be omitted since it's for tools and weapons. It defines the item's durability and is rarely used in simple items.

For more information on components, you can always refer to the documentation on [bedrock.dev/r/Item.](https://bedrock.dev/docs/stable/Item).

If you enter the game now, the item will function, but it will be invisible. You can test the functionality of your item by running `./give @s tut:gem`. Let's fix the invisibility by defining the items visuals in the RP folder.

## Gem Resource Code (RP)

<CodeHeader>RP/items/gem.item.json"</CodeHeader>

```json
{
	"format_version": "1.10",
	"minecraft:item": {
		"description": {
			"identifier": "tut:gem",
			"category": "Nature"
		},
		"components": {
			"minecraft:icon": "gem",
			"minecraft:render_offsets": "tools"
		}
	}
}
```

-   Set the same `identifier` under `description`, as in the item's behavior file.
-   `category` defines the category of items of the item in the creative inventory. It can be set to "Nature", "Equipment", "Construction" or "Items".
-   Note that due to a bug, items will not display in the Creative Inventory how they are supposed to, and you'll have to use `/give` to get them.
-   Here are the components, explained:
    -   `minecraft:render_offsets` defines how the item should be rendered. It can be set to pretty much any Vanilla item name, for example, "apple".
    -   `minecraft:use_animation` defines what animation to use when the player is using the item (Can be set to "bow", "eat", "drink", "crossbow", "camera"). It isn't needed in simple items, only foods, and weapons.
    -   `minecraft:icon` defines the item texture's short name. Let's look more into it.

## Gem Textures and Shortnames

To define your item texture's shortname (to use the texture on an item), you first need to create the texture. Create a 16\*16 image file, draw a gem on it, and save it into `RP/textures/items/gem.png`.

Now let's create the file where texture short names will be defined: `RP/textures/item_texture.json`, and copy this code into it:

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

-   `resource_pack_name` isn't important; you can set it to your identifier.
-   Keep "texture_name" as "atlas.items".
-   In the `texture_data` objects, you'll define all your item texture shortnames.
-   `gem` is the short name for the "textures/items/gem" texture you drew a few moments ago. This same `gem` is defined in `minecraft:icon` component of the Resource file of your item.

## Your Gem is finished!

Done! If you did everything correctly, your Gem can now be obtainable by `/give` in-game. If you're having trouble, watch your [Content Log](/guide/troubleshooting#content-log). If the item still malfunctions, check out the example files.

## Custom food item: - creating an eatable 'Meal'

Creating a food item is the same as creating a simple item, except an additional component is needed in the item's behavior file. Let's get started by creating it as `BP/items/meal.item.json`. Here's the code: It looks very similar to the previous item's behaviors.

### Meal BP Code

<CodeHeader>BP/items/meal.item.json</CodeHeader>

```json
{
	"format_version": "1.12.0",
	"minecraft:item": {
		"description": {
			"identifier": "tut:meal"
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
-   `minecraft:food` is the component that makes the item a food item. Let's break it up:
    -   `nutrition` means hunger points to be added when the player consumes the food.
    -   `saturation_modifier` shows how long these will last. Can be set to "poor", "low", "normal", "high", "good", "max" and "supernatural";
    -   `can_always_eat` defines if the player can eat the food even if their hunger bar is full. For Golden Apples, this component is set to true. Most other vanilla food is set to false.
    -   `effects` are the status effects to be applied when the player consumes the food. It's pretty self-explanatory: when the player consumes this item, they'll get `Regeneration I` for 5 seconds and `Resistance III` for 120 seconds. This component is optional.

### Meal RP Code

<CodeHeader>RP/items/meal.item.json</CodeHeader>

```json
{
	"format_version": "1.10",
	"minecraft:item": {
		"description": {
			"identifier": "tut:meal",
			"category": "Nature"
		},
		"components": {
			"minecraft:icon": "meal",
			"minecraft:use_animation": "eat",
			"minecraft:render_offsets": "apple"
		}
	}
}
```

The preceding code goes in `RP/items/meal.item.json`, similarly to the Gem.

-   `minecraft:use_animation` defines what animation to use when the player is using the item (Can be set to "bow", "eat", "drink", "crossbow", "camera"). It isn't needed in simple items, only foods, and weapons.

### Meal Textures and Shortnames

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

And, lastly, let's create the texture as `RP/textures/items/meal.png` and set its shortname to "meal" in `RP/textures/item_texture.json`.

Make sure to check out the current Item documentation for even more components on [bedrock.dev/r/Item!](https://bedrock.dev/docs/stable/Item)

## Setting Item Names

Your items should now show up in-game, but they have weird names consisting of their identifiers. For example, `tut:gem` shows up as `item.tut:gem.name`. To fix this, we need a `.lang` file in `RP/texts`. If you have US English set as your language in Minecraft settings, you'll need to name your text file `en_US.lang`. You can find file names for other languages in the example resource pack's texts folder. Paste the following "code" into res/texts/en_US.lang. Now your items will have the correct names:

<CodeHeader>RP/texts/en_US.lang</CodeHeader>

```
item.tut:gem.name=Gem
item.tut:meal.name=Meal
```

[You can learn more about .lang here](/concepts/lang)

<div markdown="0" class="folder-structure">
    <ul>
        <li><span class="folder">BP</span>
            <ul>
                <li><span class="folder">items</span>
                    <ul>
                        <li><a href="#bp_gem_item" class="file">gem.item.json</a></li>
                        <li><a href="#bp_meal_item" class="file">meal.item.json</a></li>
                    </ul>
                </li>
            </ul>
        </li>
        <li><span class="folder">RP</span>
            <ul>
                <li><span class="folder">items</span>
                    <ul>
                        <li><a href="#rp_gem_item" class="file">gem.item.json</a></li>
                        <li><a href="#rp_meal_item" class="file">meal.item.json</a></li>
                    </ul>
                </li>
                <li><span class="folder">texts</span>
                    <ul>
                        <li><span class="file">en_US.lang</span></li>
                    </ul>
                </li>
                <li><span class="folder">textures</span>
                    <ul>
                        <li><span class="file">item_texture.json</span></li>
                        <li><span class="folder">items</span>
                            <ul>
                                <li><span class="image">gem.png</span></li>
                                <li><span class="image">meal.png</span></li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </li>
    </ul>
</div>

---

## Your progress so far

**What you've done:**

-   [x] Created a simple item
-   [x] Created a custom food
-   [x] Learned to link textures using short names in `item_textures.json`
-   [x] Learned to define names in the `.lang` file

**What are you to do next:**

-   [ ] Create custom blocks
-   [ ] Learn to define flipbook and directional textures
