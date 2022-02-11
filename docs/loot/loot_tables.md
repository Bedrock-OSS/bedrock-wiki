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

-   "`rolls`" Defines how many times a random entry will be chosen from the following "`entries`" object.
-   "`type`" Can be set to either "`item`" or "`loot_table`". 
-   "`name`" Set the item's identifiers (If the `type` set to `item`) or another loot tables file (If the `type` set to `loot_tables`)
-   "`weight`" Is the chance of this entry being chosen. The higher the weight in comparison to other entries in this "`entries`" array, the higher the chance of the entry being chosen.
-   "`functions`" Are what makes loot tables so powerful. They can do a lot, including setting the number of items dropped, enchanting the items (Even works on non-enchantable items), setting the item's names and lores, and even writing books.
-   "`conditions`" Used to checking some condition like _"was the entity killed by a player?"_ and _"was the sword enchanted with Looting III?"_.

<!-- _Blocks do not drop loot in creative mode_ -->

## Functions

Functions are used to provide data in an item. Data can be the enchantment, data value, the number of items that can be dropped together, etc. You can combining 2 or more function. This is the list of functions.

### enchant_randomly

Set random enchantment to item.\
Parameter:
| Name         | Type    | Description                                  |
|--------------|---------|----------------------------------------------|
| `"treasure"` | Boolean | Set treasure enchantment to apply (Optional) |

### enchant_random_gear

Set a chance for an item to be randomly enchanted.\
Parameter:
| Name       | Type  | Description                                                                      |
|------------|-------|----------------------------------------------------------------------------------|
| `"chance"` | Float | Set the chance of the item to be enchanted<br>Allow number from 0-1 as 0% - 100% |

### enchant_with_levels

Set a specific enchantment level (similar mechanics with Enchanting Table and Bookshelf) for the item.\
Parameters:
| Name         | Type    | Description                                                                                         |
|--------------|---------|-----------------------------------------------------------------------------------------------------|
| `"level"`    | Integer | Set the level on enchantment. Same principe on Enchantmen Table<br>Max possible number is 30<br>Use `min/max` parameters to define as a range |
| `"treasure"` | Boolean | Set treasure enchantment to appear (Optional)                                                       |

### exploration_map

Set destination/target location for exploration map. Setting the destination other than Buried Treasure, Woodland Mansion, and Ocean Monument will set the name of map `Unknown Map`, but still directing to corresponding structure.\
Parameter:
| Name            | Type   | Description                                            |
|-----------------|--------|--------------------------------------------------------|
| `"destination"` | String | Set destination/target location                        |

These are lists of available destinations.

1.  Buried Treasure [`burriedTreasure`]
2.  Mansion [`mansion`]
3.  Monument [`monument`]
4.  Mineshaft [`mineshaft`]
5.  Fortress [`fortress`]
6.  Underwater Ruins [`ruins`]
7.  Stronghold [`stronghold`]
8.  Village [`village`]
9.  End City [`endcity`]
10. Shipwreck [`shipwreck`]
11. Pillager Outpust [`pillageroutpost`]

### furnace_smelt

Set cooked items to be dropped when the entity is on fire. Possibly item is food items.\
Example code:
```json
{
    "function": "furnace_smelt",
    "conditions": [
        {
            "condition": "entity_properties",
            "entity": "this",
            "properties": {
                "on_fire": true
            }
        }
    ]
}
```

### looting_enchant
> Used by: Various Entities

Set additional drop for the items when killed using Looting Enchantment. Following formula: `normalDrop + (lootingDrop * lootingLevel)`\
Parameters:
| Name      | Type    | Description                                                                                            |
|-----------|---------|--------------------------------------------------------------------------------------------------------|
| `"count"` | Integer | Set the number to item been dropped when using Looting<br>Use `min/max` parameter to define as a range |
| `"limit"` | Integer | Set the max number to item been dropped when using Looting (Optional)                                  |

### random_aux_value

Set the random data values to the items.\
Parameter: 
| Name       | Type        | Description                                                                           |
|------------|-------------|---------------------------------------------------------------------------------------|
| `"values"` | JSON Object | Set the values for min/max data value<br>Use `min/max` parameter to define as a range |

### set_banner_detail

Set banner detail/type. Only used by Pillager/Vindicator Captain that holds Illager Banner.\
Parameter: 
| Name     | Type    | Description         |
|----------|---------|---------------------|
| `"type"` | Integer | Set the banner type |

### set_count

Set the number of items to be dropped. If you didn't define the value or didn't use this function, the item ALWAYS drops 1.\
Parameter:
| Name      | Type    | Description                                                                         |
|-----------|---------|-------------------------------------------------------------------------------------|
| `"count"` | Integer | Set the number to item been dropped<br>Use `min/max` parameter to define as a range |

### set_damage

Set durability lost to the item. The item must have durability value (Tools).\
Parameter:
| Name       | Type    | Description                                                                     |
|------------|---------|---------------------------------------------------------------------------------|
| `"damage"` | Integer | Set how much damage to the item<br>Use `min/max` parameter to define as a range |

### set_data

Set the data value of the item.\
Parameter:
| Name     | Type    | Description                    |
|----------|---------|--------------------------------|
| `"data"` | Integer | Set the data value of the item |

### set_data_from_color_index

Set data from the color of corresponding entity. Used on Sheep and Mooshroom Cow loot tables.



## Conditions

Conditions are used to define how an entry is chosen in certain conditions. If the condition has met, the entry will spawn. For example, Creeper will drop any disc IF killed by skeleton or stray, Mob such zombie, skeleton, creeper will drop their head if killed by Charging Creeper, etc. You can combining 2 or more condition. This is the list of condition.

### entity_properties

Set true if entity properties have met. Used when `"function": "furnace_smelt"` given.
```JSON
{
    "function": "furnace_smelt",
    "conditions": [
        {
            "condition": "entity_properties",
            "entity": "this",
            "properties": {
                "on_fire": true
            }
        }
    ]
}
```

### has_mark_variant

[Sorry, no documentation yet]

### killed_by_entity

Set true if the entity was killed by a specific entity.\
Parameters: 
| Name        | Type   | Description        |
|-------------|--------|--------------------|
| entity_type | String | Name of the entity |

### killed_by_player

Set true if the entity was killed by the player

### killed_by_player_or_pets

Set true if the entity was killed by a player or tamed entity, such as Tamed Wolf

### random_chance

Set a random chance for an entity. Used for entity equipment.\
Parameters:
| Name   | Type  | Description                                                      |
|--------|-------|------------------------------------------------------------------|
| chance | Float | Set the chance to appear<br>Allow number from 0-1 as 0% - 100%   |

### random_chance_with_looting

Set a random chance with the chance for looting for an entity. Following formula: `chance + (lootingChance x lootingLevel)`.\
Parameters:
| Name    | Type  | Description                                                                      |
|---------|-------|----------------------------------------------------------------------------------|
| chance  | Float | Set the chance to appear<br>Allow number from 0-1 as 0% - 100%                   |
| looting | Float | Set the chance for using Looting to appear<br>Allow number from 0-1 as 0% - 100% |

### random_difficulty_chance

Set a random chance based on the difficulty mode for an entity. Used for entity equipment.\
Parameters:
| Name           | Type  | Description                                                                  |
|----------------|-------|------------------------------------------------------------------------------|
| default_chance | Float | Set the default chance to appear<br>Allow number from 0-1 as 0% - 100%       |
| peaceful       | Float | Set the chance for Peaceful difficulty<br>Allow number from 0-1 as 0% - 100% |
| easy           | Float | Set the chance for Easy difficulty<br>Allow number from 0-1 as 0% - 100%     |
| normal         | Float | Set the chance for Normal difficulty<br>Allow number from 0-1 as 0% - 100%   |
| hard           | Float | Set the chance for Hard difficulty<br>Allow number from 0-1 as 0% - 100%     |

### random_regional_difficulty_chance

[Sorry, no documentation yet]