---
title: Loot Tables
---

Loot tables are powerful tools that define what blocks drop upon destruction, what entities upon death, what equipment can entities use, what can a player fish out of a river and what loot ends up in the game's loot chests. In order to understand loot tables better, I recommend looking into the `loot_tables` folder of the Example Vanilla Behavior pack, but I'll trow in some examples from there into here nevertheless. \
One can even make a loot that drops half-removed blocks like glowingobsidian and netherreactors!

<Spoiler title="Example Loot Tables">

<CodeHeader>BP/loot_tables/entities/ghast.json</CodeHeader>

```json
{
	"pools": [
		{
			"rolls": 1,
			"entries": [
				{
					"type": "item",
					"name": "minecraft:ghast_tear",
					"weight": 1,
					"functions": [
						{
							"function": "set_count",
							"count": {
								"min": 0,
								"max": 1
							}
						},
						{
							"function": "looting_enchant",
							"count": {
								"min": 0,
								"max": 1
							}
						}
					]
				}
			]
		},
		{
			"rolls": 1,
			"entries": [
				{
					"type": "item",
					"name": "minecraft:gunpowder",
					"weight": 1,
					"functions": [
						{
							"function": "set_count",
							"count": {
								"min": 0,
								"max": 2
							}
						},
						{
							"function": "looting_enchant",
							"count": {
								"min": 0,
								"max": 1
							}
						}
					]
				}
			]
		}
	]
}
```

<CodeHeader>BP/loot_tables/chests/equipment.low_tier_items.json</CodeHeader>

```json
{
	"pools": [
		{
			"rolls": 1,
			"entries": [
				{
					"type": "item",
					"name": "minecraft:leather_chestplate",
					"weight": 1
				},
				{
					"type": "item",
					"name": "minecraft:iron_chestplate",
					"weight": 1
				},
				{
					"type": "empty",
					"weight": 5
				}
			]
		},
		{
			"rolls": 1,
			"entries": [
				{
					"type": "item",
					"name": "minecraft:leather_helmet",
					"weight": 1
				},
				{
					"type": "item",
					"name": "minecraft:iron_helmet",
					"weight": 1
				},
				{
					"type": "empty",
					"weight": 5
				}
			]
		}
	]
}
```

<CodeHeader>BP/loot_tables/chests/village/village_cartographer.json</CodeHeader>

```json
{
	"pools": [
		{
			"rolls": {
				"min": 1,
				"max": 5
			},
			"entries": [
				{
					"type": "item",
					"weight": 10,
					"functions": [
						{
							"function": "set_count",
							"count": {
								"min": 1,
								"max": 3
							}
						}
					],
					"name": "minecraft:map"
				},
				{
					"type": "item",
					"weight": 15,
					"functions": [
						{
							"function": "set_count",
							"count": {
								"min": 1,
								"max": 5
							}
						}
					],
					"name": "minecraft:paper"
				},
				{
					"type": "item",
					"weight": 5,
					"name": "minecraft:compass"
				},
				{
					"type": "item",
					"weight": 15,
					"functions": [
						{
							"function": "set_count",
							"count": {
								"min": 1,
								"max": 4
							}
						}
					],
					"name": "minecraft:bread"
				},
				{
					"type": "item",
					"weight": 5,
					"functions": [
						{
							"function": "set_count",
							"count": {
								"min": 1,
								"max": 2
							}
						},
						{
							"function": "set_data",
							"data": 0
						}
					],
					"name": "minecraft:sapling"
				}
			]
		}
	]
}
```

<CodeHeader>BP/loot_tables/gameplay/fishing/treasure.json</CodeHeader>

```json
{
	"pools": [
		{
			"rolls": 1,
			"entries": [
				{
					"type": "item",
					"name": "minecraft:nautilus_shell",
					"weight": 5
				},
				{
					"type": "item",
					"name": "minecraft:waterlily",
					"weight": 5
				},
				{
					"type": "item",
					"name": "minecraft:name_tag",
					"weight": 5
				},
				{
					"type": "item",
					"name": "minecraft:saddle",
					"weight": 5
				},
				{
					"type": "item",
					"name": "minecraft:bow",
					"weight": 5,
					"functions": [
						{
							"function": "set_damage",
							"damage": {
								"min": 0,
								"max": 0.25
							}
						},
						{
							"function": "enchant_with_levels",
							"levels": 30,
							"treasure": true
						}
					]
				},
				{
					"type": "item",
					"name": "minecraft:fishing_rod",
					"weight": 5,
					"functions": [
						{
							"function": "set_damage",
							"damage": {
								"min": 0,
								"max": 0.25
							}
						},
						{
							"function": "enchant_with_levels",
							"levels": 30,
							"treasure": true
						}
					]
				},
				{
					"type": "item",
					"name": "minecraft:book",
					"weight": 6,
					"functions": [
						{
							"function": "enchant_with_levels",
							"levels": 30,
							"treasure": true
						}
					]
				}
			]
		}
	]
}
```

</Spoiler>

<br>

---

The most important thing in a loot table is the _file name_, since loot tables have no other identifier. They can be called by the path of the file in `BP/blocks/blockname.json/"minecraft:loot: {}"` for block loot, `BP/entities/entityname.json/"minecraft:loot: {}"` for entities and `BP/entities/entityname.json/"minecraft:equipment: {}"` for entity equipment (most hostile mobs use `low_tier_items.json`).\

If you want to change what can a player fish out of a jungle river, simply create your own loot table under `BP/loot_tables/gameplay/fishing/jungle_fish.json and BP/loot_tables/gameplay/fishing/jungle_junk.json` to overwrite the Vanilla loot tables. This can be done with most other Vanilla files too (if the aspect is data-driven).

You can also use `loot_tables.empty.json` for no loot.

Let's break up the Loot table structure somewhat. I took a simple zombie loot table as an example.

<CodeHeader></CodeHeader>

```json
{
	"pools": [
		{
			"rolls": 1,
			"entries": [
				{
					"type": "item",
					"name": "minecraft:rotten_flesh",
					"weight": 1,
					"functions": [
						{
							"function": "set_count",
							"count": {
								"min": 0,
								"max": 2
							}
						},
						{
							"function": "looting_enchant",
							"count": {
								"min": 0,
								"max": 1
							}
						}
					]
				}
			]
		},
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
	]
}
```

-   "`rolls`" defines how many times a random entry will be chosen from the following "`entries`" object.
-   "`type`" can be set to either "`item`" or "`loot_table`" (to refer to an external loot table. For more information on that, check the Vanilla `BP/loot_tables/gameplay/fishing.json`).
-   "`name`" only goes after `"type": "item"` and can be set to an item's full identifier, including the namespace.
-   "`weight`" is the chance of this entry being chosen. The higher the weight in comparison to other entries in this "`entries`" array, the higher the chance of the entry being chosen.
-   "`functions`" are what makes loot tables so powerful. They can do a lot, including setting the number of items dropped, enchanting the items(enchantments can even go on normally non-enchantable items that way), setting the items' names, the items' lores, and even writing books. \
    For more information on functions check the example vanilla files or the unofficial Loot Table documentation, available [here](https://minecraft.gamepedia.com/Bedrock_Edition_function/loot_tables/trade_tables_documentation).
-   "`conditions`" can check for things like _"was the entity killed by a player?"_ and _"was the sword enchanted with Looting III?"_. More info in them can be found in the resources listed above. \

_Blocks do not drop loot in creative mode_

**Note: it is possible to generate loot tables visually online. Check Links and Contact for the link to a reliable generator.**

**_Challenge: Create custom loot tables for our custom blocks created in the previous chapter!_**
