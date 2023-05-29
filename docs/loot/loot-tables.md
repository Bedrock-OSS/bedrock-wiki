---
title: Loot Tables
category: Documentation
nav_order: 1
tags:
- Stable
- Last updated for Version 1.18.10
mentions:
- Ciosciaa
---

::: warning
This document is a work in progress.
:::

Loot tables are used to select a set of items from a declared collection. Loot tables can be used from:

- The `/loot` command
- Container contents
- Block drops
- Fishing
- Mob drops
- Equipment on spawned mobs
- Other various mob actions

A different collection of items may be chosen each instance the same loot table would be used, based on [external conditions](#), and [innate randomness](#). Such variation is crucial for playability and adventuring, especially in more RPG-driven systems.

## Integration
Loot tables are not registered add-on entries and are instead referenced by path from the above sources. Loot tables may be placed anywhere within a behavior pack, but it's recommended to place them under the top-level `loot_tables` directory, following vanilla convention.

<FolderView
	:paths="[
		'BP/loot_tables/blocks/cypress_door.json',
		'BP/loot_tables/blocks/cypress_door.json',
		'BP/loot_tables/blocks/cypress_door.json'
	]"
/>

## Structure
Loot tables are represented as JSON objects with a single required `"pools"` array property.

<CodeHeader>#</CodeHeader>

```json
{
	"pools": [
		…
	]
}
```

The loot returned from a loot table invocation will be the *collective sum* of the yields of all pools provided here.

### Pools
Pools act as isolated constructs for selecting items; the results of pools cannot be influenced by other pools.

<CodeHeader>#</CodeHeader>

```json
{
	"rolls": 1,
	
	"entries": [
		{
			"type": "item",
			"name": "wiki:silver"
		}
	]
}
```

Two types of pools are available: general-purpose [weighted random pools](#weighted-random-pools) and [tiered pools](#tiered-pools), the latter of which is traditionally used for selecting mob equipment.

#### Weighted Random Pools
A traditional weighted random pool selects items based on relative weight, choosing a number of yields based on a configured roll count.

<CodeHeader>artifacts.json/pools/0</CodeHeader>

```json
{
	"rolls": {
		"min": 2,
		"max": 4
	},
	
	"entries": [
		{
			"type": "item",
			"name": "minecraft:golden_apple",
			"weight": 20
		},
		{
			"type": "item",
			"name": "minecraft:appleEnchanted",
			"weight": 1
		},
		{
			"type": "item",
			"name": "minecraft:name_tag",
			"weight": 30
		}
	]
}
```

##### Rolls


###### Bonus Rolls
The roll count for a weighted random pool may be altered based on the player's luck using the optional `"bonus_rolls"` property.

```json

```

##### Entry Weighting
The weight is the chance of this entry being chosen. The higher the weight in comparison to other entries in this "entries" array, the higher the chance of the entry being chosen.

```json
"weight": 3
```



###### Quality
The weight of an entry can be changed based on the player's luck using the quality property.

```json
"quality": 2
```

Currently, luck is only expressed when fishing with a fishing rod enchanted with Luck of the Sea.

#### Tiered Pools
Tiered pools are used to select exactly one entry from a collection.

```json
{
	"tiers": {
		"initial_range": 2,
		
		"bonus_rolls": 3,
		"bonus_chance": 0.095
	},

	"entries": [
		{
			"type": "loot_table",
			"name": "loot_tables/entities/armor_set_leather.json"
		},
		{
			"type": "loot_table",
			"name": "loot_tables/entities/armor_set_gold.json"
		},
		{
			"type": "loot_table",
			"name": "loot_tables/entities/armor_set_chain.json"
		},
		{
			"type": "loot_table",
			"name": "loot_tables/entities/armor_set_iron.json"
		},
		{
			"type": "loot_table",
			"name": "loot_tables/entities/armor_set_diamond.json"
		}
	]
}
```

A pool becomes tiered with the inclusion of the `"tiers"` object property:

```json
"tiers": {
	"initial_range": 2,
	
	"bonus_rolls": 3,
	"bonus_chance": 0.095
}
```

Entries in a tiered pool are *ordered*. The selected entry for a tiered pool is based on its index. To determine this index, a starting index is randomly rolled and then a batch of success rolls attempt to increment this starting index.

The starting index is decided by rolling a random integer between 1 and the integer property `"initial_range"`. If no initial range is provided, it defaults to `1`, forcing a starting index of 1.

Next, attempts are made to advanced the index using additional rolls. The count of these roll attempts is given as an integer to `"bonus_rolls"`. The chance that any such roll succeeds is given via `"bonus_chance"`. Chances for `"bonus_chance"` are out of 1, meaning `0.5` would be a 50% chance for any bonus roll to succeed. Each successful roll increases the index by 1. Both of these properties default to `0`, meaning both must be provided to use this additional rolls mechanic.

The final determined index is used to select the corresponding entry as that pool's yield. Indices in tiered pools are one-indexed, meaning the first entry has an index of 1, the second has an index of 2, and so forth. If the determined index is larger than the entry count for that pool, no yield will be provided.

::: warning
All [conditions](#) on entries in a tiered pool are ignored. Conditions on the pool itself are still allowed.
:::

### Entries
Entries are the selectable units of a pool. Three different types of entries are available.

```json

```

#### Item Entries
Item entries are the fundamental entry type for selecting loot. Item entries refer to

```json

```

#### Loot Table Entries
Loot hierarchies can be formed using loot table entries.

```json

```

#### Empty Entries
When selected, empty entries won't yield any loot for that roll.

```json
"type": "empty",
"weight": 4
```

Empty entries can generally be mimicked using [a roll count](#) whose range includes 0, [random chance conditions](#), or [count functions](#) that could randomly select 0. Their primary advantage is readability when using [weighted random pools](#): denoting by weight when a roll won't yield an entry may be easier to understand.

### Functions
Functions are what makes loot tables so powerful. They can do a wide range of tasks for each entry in your loot table. For example, they can change the amount of an item is dropped, what enchantments are present (even on items that normally cannot be enchanted), the item name, it's lore, and it can even write books! View [item functions](https://wiki.bedrock.dev/loot/item-functions.html) for a full list of functions and how they're used.

<CodeHeader>artifacts.json/pools/entries</CodeHeader>

```json
{
	"type": "item",
	"name": "minecraft:dirt",
	"weight": 10,
	"functions" [
		{
			"function": "set_count",
			"count": {
				"min": 16,
				"max": 64
			}
		},
		{
			"function": "set_name",
			"name": "Pile of dirt"
		}
	]
}
```

### Conditions
Conditions check to see if a certain criteria is met. Examples: "Was Zombie killed by Player", "Did the sword have the Looting enchantment on it? If so, what level?"

<CodeHeader>artifacts.json/pools/entries</CodeHeader>

```json
{
	"conditions": [
		{
			"condition": "killed_by_player"
		},
		{
			"condition": "random_chance_with_looting",
			"chance": 0.025,
			"looting_multiplier": 0.01
		}
	],
	"rolls": 1,
	"entries": [
		{
			"type": "item",
			"name": "minecraft:iron_ingot",
			"weight": 1
		},
		{
			"type": "item",
			"name": "minecraft:carrot",
			"weight": 1
		},
		{
			"type": "item",
			"name": "minecraft:potato",
			"weight": 1
		}
	]
}
```

## Overrides

