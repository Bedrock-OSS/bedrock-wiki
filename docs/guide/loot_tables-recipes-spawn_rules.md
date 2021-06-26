---
title: Loot Tables, Recipes, Spawn Rules
---

Loot tables are powerful tools that define what blocks drop upon destruction, what entities upon death, what equipment can entities use, what can a player fish out of a river and what loot ends up in the game's loot chests. In order to understand loot tables better, I recommend looking into the `loot_tables` folder of the Example Vanilla Behavior pack, but I'll trow in some examples from there into here nevertheless. \
One can even make a loot that drops half-removed blocks like glowingobsidian and netherreactors!

<Spoiler title="Example Loot Tables">

```json
//BP/loot_tables/entities/ghast/json

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

```json
//BP/loot_tables/chests/equipment.low_tier_items.json

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

```json
//BP/loot_tables/chests/village/village_cartographer.json

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

```json
//BP/loot_tables/gameplay/fishing/treasure.json

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

---

---

# Custom crafting/smelting/etc Recipes

Recipes can have unique identifiers like `tut:compass_from_compass_block`. They're located in `BP/recipes`.

-   The parameter below "`format_version`" defines the type of this recipe. It can be set to "`recipe_furnace`"(smelting), "`recipe_shaped`"(every ingredient has a set place in the crafting grid) and "`recipe_shapeless`"(ingredients can be placed in whatever order into the crafting grid).
-   Every recipe takes "`tags`" which are a list of vanilla benches that can use this recipe. Can be "`crafting_table`", "`furnace`", "`smoker`", "`blast_furnace`", "`campfire`", "`stonecutter`" etc.
    After b1.16.100 also accepts tags of custom benches.

Let's look through some recipe-specific syntax next.

### Smelting recipe example

```json
{
	"format_version": "1.12",
	"minecraft:recipe_furnace": {
		"description": {
			"identifier": "minecraft:furnace_beef"
		},
		"tags": ["furnace", "smoker", "campfire"],
		"input": {
			"item": "minecraft:beef",
			"data": 0,
			"count": 4
		},
		"output": "minecraft:cooked_beef"
	}
}
```

-   "`input`":
    "`item`": the item's to be smelted full identifier;
    "`data`": it's _aux value_. Default: `0`;
-   _"`count`" is optional. It most likely has something to do with the number of items that can be smelted at the same time in a campfire, but it isn't documented anywhere._
-   "`output`": the item that the furnace outputs after smelting.

### Shaped recipe example

```json
{
	"format_version": "1.12",
	"minecraft:recipe_shaped": {
		"description": {
			"identifier": "minecraft:acacia_boat"
		},
		"tags": ["crafting_table"],
		"groups": ["planks"],
		"pattern": ["#P#", "###"],
		"key": {
			"P": {
				"item": "minecraft:wooden_shovel"
			},
			"#": {
				"item": "minecraft:planks",
				"data": 4
			}
		},
		"result": {
			"item": "minecraft:boat",
			"data": 4
		}
	}
}
```

-   "`pattern`" consists of 3 rows each consisting of 3 character keys. Each character symbolizes an item in a slot of the crafting grid.
-   "`key`" defines each character to mean an item. Here, 'P' means a Wooden Shovel and '`#`' means a '`planks`' block with aux value `4`, which is the Acacia Planks block.
-   "`result`" means same as output. Here it's an Acacia Boat('`boat`' with aux id `4`).

Let's also look into a recipe that gives you more than one item as a result.

```json
{
	"format_version": "1.12",
	"minecraft:recipe_shaped": {
		"description": {
			"identifier": "minecraft:coal"
		},

		"tags": ["crafting_table"],
		"pattern": ["#"],
		"key": {
			"#": {
				"item": "minecraft:coal_block"
			}
		},
		"result": {
			"item": "minecraft:coal",
			"data": 0,
			"count": 9
		}
	}
}
```

-   "`count`" defines how many items you get when you craft this. Here you get 9 coal from deconstructing a coal block.

### Shapeless recipe example

```json
{
	"format_version": "1.12",
	"minecraft:recipe_shapeless": {
		"description": {
			"identifier": "minecraft:firecharge_coal_sulphur"
		},
		"priority": 0,
		"ingredients": {
			"item": "minecraft:fireball",
			"data": 0,
			"count": 4
		},
		"result": {
			"item": "minecraft:blaze_powder",
			"data": 4
		}
	}
}
```

```json
{
	"format_version": "1.12",
	"minecraft:crafting_shapeless": {
		"ingredients": [
			{
				"item": "minecraft:apple"
			},
			{
				"item": "minecraft:chest_minecart"
			},
			{
				"item": "minecraft:apple"
			}
		],
		"result": {},
		"description": {
			"identifier": "tut:randomity_recipe"
		}
	}
}
```

-   "`priority`" is the priority with which the recipe will be chosen over others.
-   "`ingredients`" is simply a list of all ingredients with their aux values. There are no keys, since the ingredients can be placed in any crafting grid slot.

**Note: Crafting recipes can be generated visually online, check Links and Contact for a stable generator.**

**_Challenge: Create custom crafting/smelting recipes for our custom blocks and items created in previous chapters!_**

---

# Spawn Rules

Spawn rules define how vanilla Entities and custom entities spawn. In the next chapter we'll be creating a custom entity, so make sure to prepare a custom spawn rule for it! Check out the vanilla example files for more information. ;)

```json
//BP/spawn_rules/zombie.json

{
	"format_version": "1.8.0",
	"minecraft:spawn_rules": {
		"description": {
			"identifier": "minecraft:zombie",
			"population_control": "monster"
		},
		"conditions": [
			{
				"minecraft:spawns_on_surface": {},
				"minecraft:spawns_underground": {},
				"minecraft:brightness_filter": {
					"min": 0,
					"max": 7,
					"adjust_for_weather": true
				},
				"minecraft:difficulty_filter": {
					"min": "easy",
					"max": "hard"
				},
				"minecraft:weight": {
					"default": 100
				},
				"minecraft:herd": {
					"min_size": 2,
					"max_size": 4
				},
				"minecraft:permute_type": [
					{
						"weight": 95
					},
					{
						"weight": 5,
						"entity_type": "minecraft:zombie_villager"
					}
				],
				"minecraft:biome_filter": {
					"test": "has_biome_tag",
					"operator": "==",
					"value": "monster"
				}
			}
		]
	}
}
```

-   "`description`">"`identifier`": the entity to spawn
-   "`population_control`": controls spawning and despawning quantities. Can be set to "`animal`", "`underwater_animal`", "`monster`" and "`ambient`".
-   "`conditions`" are a list of conditions that have to be met in order for the spawn attempt to succeed.
-   "`minecraft:spawns_on_surface`", "`minecraft:spawns_underground`" and "`minecraft:spawns_underwater`" control where the entity spawns cap-wise.
-   "`minecraft_brightness_filter`" can be set from 0 to 15 and controls in which light levels can entities spawn. - "`adjust_for_weather`" defines whether it light levels are counted lower during rain or thunder weather.
-   "`minecraft:difficulty_filter`" sets the range of level difficulty to enable this entity's spawns.
-   "`minecraft:herd`" sets the number of entities spawning together, on the same spawn rule.
-   "`minecraft:permute_type`" with "`weight`"s and "`entity_type`"s sets a chance for the spawned entity to mutate into a different one.
-   And, lastly, "`minecraft:biome_filter`" tests for certain biome tags. Look up the filter syntax and list of biome tags in the documentation or search examples in the vanilla Example pack.

```json
"minecraft:herd": {
          "min_size": 1,
          "max_size": 2,
          "event":"minecraft:entity_born",
          "event_skip_count": 1
        },
```

-   "`minecraft:herd`" can also be used like this to make the second entity spawned [in this scenario] with the "`minecraft:entity:born`" (as baby). Can be used in any event.
    `"event_skip_count": 2`, for example, means that the first two entities will not be spawned with this event, but all the next ones will.

_Why not create some more custom blocks, items, recipes and loot tables before moving onto the next big chapter?_

---

---

## Your progress so far

**What you've done:**

-   [x] Learned to create Loot Tables;
-   [x] Learned to create custom Recipes of different types;
-   [x] Learned to create spawn rules;
-   [x] Created Recipes and Loot Tables for our custom blocks and items;
-   [x] Learned about the usefulness referencing the Example files and the documentation even better;
-   [x] Tried out some online file generators;

**What are you to do next:**

-   [ ] **Create. Custom. Entities.**
