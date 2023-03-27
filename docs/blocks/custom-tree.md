---
title: Custom Tree
category: Tutorials
tags:
    - experimental
mention:
    - MedicalJewel105
---

Creating your own tree with decaying leaves are possible. Follow this tutorial and you'll have your own in no time!

## What you will do

-   Features:

    -   Decaying leaves
    -                       Tree Feature compatible
    -   If leaves were broken using shears, they will drop the block
    -   Leaves doesn't decay if placed by player
    -   Logs are strippable and rotatable
    -   Stripping logs is compatible with tools from other Add-Ons (if they have the `"tag:minecraft:is_axe":{}` component)
    -   Saplings can be bonemealed and grow the tree (with structures)

-   Issues:
    -   If you made a structure with these blocks, it will crash the game when generated using features. Minecraft structure ticking block bug.

:::tip
To make your leaves decay you need basic understanding on block permutations and block properties.
:::

## Making Decaying Leaves

You will notice straight away that our custom leaves have a long list to search for a vanilla log/custom log by its block tag, although the code example uses the custom logs for this tutorial. The value is 4 and this method is used to search for the nearest log in a circular radius.

<WikiImage
	src="/assets/images/blocks/parts-of-custom-tree/decaying_leaves_showcase_example.png"
	alt="alternative text"
	pixelated="true"
	width=420
/>

Our custom leaves disables ticking when placed by the player which doesn't make the leaves decay and this removes the requirements for another duplicate leave block.

<Spoiler title="Code">

<CodeHeader>BP/blocks/custom_leaves.json</CodeHeader>

```json
{
	"format_version": "1.16.100",
	"minecraft:block": {
		"description": {
			"identifier": "wiki:custom_leaves",
			"properties": {
				"wiki:decay_tier": [4, 3, 2, 1, 0], //the distance in blocks to find the log
				"wiki:not_decay": [false, true], //used when placed by the player or with features
				"wiki:solid": [false, true] //optional; makes the leaves non-transparent when surrounded
			}
		},
		"events": {
			"wiki:on_destroyed": {
				//defines the loot for the tool
				"sequence": [
					{
						"condition": "query.get_equipped_item_name == 'shears'",
						"spawn_loot": {
							"table": "loot_tables/blocks/custom_leaves_block.json"
						}
					},
					{
						"condition": "query.get_equipped_item_name != 'shears'",
						"spawn_loot": {
							"table": "loot_tables/blocks/custom_leaves_loot.json"
						}
					}
				]
			},
			"check": {
				//checks for the log
				"sequence": [
					{
						"condition": "q.block_property('wiki:not_decay') == false",
						"set_block_property": {
							"wiki:decay_tier": "(q.block_neighbor_has_any_tag(0,0,-1,'wiki:custom_log') || q.block_neighbor_has_any_tag(0,0,1,'wiki:custom_log') || q.block_neighbor_has_any_tag(-1,0,0,'wiki:custom_log') || q.block_neighbor_has_any_tag(1,0,0,'wiki:custom_log') || q.block_neighbor_has_any_tag(0,-1,0,'wiki:custom_log') || q.block_neighbor_has_any_tag(0,1,0,'wiki:custom_log')) ? 4 : ((q.block_neighbor_has_any_tag(0,0,-1,'wiki:decay_tier_4') || q.block_neighbor_has_any_tag(0,0,1,'wiki:decay_tier_4') || q.block_neighbor_has_any_tag(-1,0,0,'wiki:decay_tier_4') || q.block_neighbor_has_any_tag(1,0,0,'wiki:decay_tier_4') || q.block_neighbor_has_any_tag(0,-1,0,'wiki:decay_tier_4') || q.block_neighbor_has_any_tag(0,1,0,'wiki:decay_tier_4')) ? 3 : ( (q.block_neighbor_has_any_tag(0,0,-1,'wiki:decay_tier_3') || q.block_neighbor_has_any_tag(0,0,1,'wiki:decay_tier_3 ') || q.block_neighbor_has_any_tag(-1,0,0,'wiki:decay_tier_3') || q.block_neighbor_has_any_tag(1,0,0,'wiki:decay_tier_3') || q.block_neighbor_has_any_tag(0,-1,0,'wiki:decay_tier_3') || q.block_neighbor_has_any_tag(0,1,0,'wiki:decay_tier_3')) ? 2 : ( (q.block_neighbor_has_any_tag(0,0,-1,'wiki:decay_tier_2') || q.block_neighbor_has_any_tag(0,0,1,'wiki:decay_tier_2') || q.block_neighbor_has_any_tag(-1,0,0,'wiki:decay_tier_2') || q.block_neighbor_has_any_tag(1,0,0,'wiki:decay_tier_2') || q.block_neighbor_has_any_tag(0,-1,0,'wiki:decay_tier_2') || q.block_neighbor_has_any_tag(0,1,0,'wiki:decay_tier_2')) ? 1 : 0 ) ) )"
						}
					},
					{
						"set_block_property": {
							"wiki:solid": "q.block_neighbor_has_any_tag(0,0,-1,'wiki:custom_log','stone','wiki:custom_leaves') && q.block_neighbor_has_any_tag(0,0,1,'wiki:custom_log','stone','wiki:custom_leaves') && q.block_neighbor_has_any_tag(0,1,0,'wiki:custom_log','stone','wiki:custom_leaves') && q.block_neighbor_has_any_tag(0,-1,0,'wiki:custom_log','stone','wiki:custom_leaves') && q.block_neighbor_has_any_tag(-1,0,0,'wiki:custom_log','stone','wiki:custom_leaves') && q.block_neighbor_has_any_tag(1,0,0,'wiki:custom_log','stone','wiki:custom_leaves')"
						}
					}
				]
			},
			"wiki:stop_decay": {
				//when placed
				"set_block_property": {
					"wiki:not_decay": true
				}
			},
			"wiki:decay": {
				//when decayed
				"die": {}
			}
		},
		"permutations": [
			//nothing great here, just the stages.
			{
				"condition": "query.block_property('wiki:decay_tier') == 0",
				"components": {
					"minecraft:ticking": {
						"looping": true,
						"range": [0, 0],
						"on_tick": {
							"event": "check"
						}
					},
					"minecraft:unit_cube": {},
					"tag:wiki:decay_tier_0": {},
					"minecraft:random_ticking": {
						"on_tick": {
							"event": "wiki:decay"
						}
					}
				}
			},
			{
				"condition": "query.block_property('wiki:decay_tier') == 1",
				"components": {
					"minecraft:ticking": {
						"looping": true,
						"range": [0, 0],
						"on_tick": {
							"event": "check"
						}
					},
					"minecraft:unit_cube": {},
					"tag:wiki:decay_tier_1": {}
				}
			},
			{
				"condition": "query.block_property('wiki:decay_tier') == 2",
				"components": {
					"minecraft:ticking": {
						"looping": true,
						"range": [0, 0],
						"on_tick": {
							"event": "check"
						}
					},
					"minecraft:unit_cube": {},
					"tag:wiki:decay_tier_2": {}
				}
			},
			{
				"condition": "query.block_property('wiki:decay_tier') == 3",
				"components": {
					"minecraft:ticking": {
						"looping": true,
						"range": [0, 0],
						"on_tick": {
							"event": "check"
						}
					},
					"minecraft:unit_cube": {},
					"tag:wiki:decay_tier_3": {}
				}
			},
			{
				"condition": "query.block_property('wiki:decay_tier') == 4",
				"components": {
					"minecraft:ticking": {
						"looping": true,
						"range": [0, 0],
						"on_tick": {
							"event": "check"
						}
					},
					"minecraft:unit_cube": {},
					"tag:wiki:decay_tier_4": {}
				}
			},
			{
				"condition": "query.block_property('wiki:solid') == true",
				"components": {
					"minecraft:material_instances": {
						"*": {
							"texture": "custom_leaves",
							"render_method": "opaque"
						}
					}
				}
			}
		],
		"components": {
			//main components
			"minecraft:creative_category": {
				"group": "itemGroup.name.leaves",
				"category": "nature"
			},
			"minecraft:on_player_placing": {
				"event": "wiki:stop_decay",
				"target": "self"
			},
			"minecraft:on_player_destroyed": {
				"event": "wiki:on_destroyed"
				//Triggers event that spawns different loot
			},
			"minecraft:ticking": {
				"looping": true,
				"range": [0, 0],
				"on_tick": {
					"event": "check"
				}
			}, //we need both of these to work with world generation
			"minecraft:random_ticking": {
				"on_tick": {
					"event": "check",
					"target": "block"
				}
			},
			"tag:wiki:custom_leaves": {},
			"minecraft:breathability": "air",
			"minecraft:destroy_time": 0.3,
			"minecraft:map_color": "#FFFFFF",
			"minecraft:explosion_resistance": 1.0,
			"minecraft:block_light_absorption": 0.0,
			"minecraft:block_light_emission": 0.0,
			"minecraft:material_instances": {
				"*": {
					"texture": "custom_leaves",
					"render_method": "blend",
					"ambient_occlusion": true,
					"face_dimming": true
				}
			}
		}
	}
}
```

</Spoiler>

## Making Custom Log

<Spoiler title="Code">

<CodeHeader>BP/blocks/custom_log.json</CodeHeader>

```json
{
	"format_version": "1.16.100",
	"minecraft:block": {
		"description": {
			"identifier": "wiki:custom_log",
			"properties": {
				"wiki:facing_direction": [0, 1, 2]
			}
			//Log direction properties
		},
		"permutations": [
			{
				"condition": "query.block_property('wiki:facing_direction') == 0",
				//If query.block_property('wiki:facing_direction') == 0 sets no rotation and on_interact component
				"components": {
					"minecraft:rotation": [0, 0, 0],
					"minecraft:on_interact": {
						"condition": "query.equipped_item_any_tag('slot.weapon.mainhand', 'minecraft:is_axe')",
						"event": "wiki:become_stripped_0"
						//Event sets custom stripped log with no rotation
					}
				}
			},
			{
				"condition": "query.block_property('wiki:facing_direction') == 1",
				//If query.block_property('wiki:facing_direction') == 1 sets rotation and on_interact component
				"components": {
					"minecraft:rotation": [90, 0, 0],
					"minecraft:on_interact": {
						"condition": "query.equipped_item_any_tag('slot.weapon.mainhand', 'minecraft:is_axe')",
						"event": "wiki:become_stripped1"
						//Event sets custom stripped log with rotation
					}
				}
			},
			{
				"condition": "query.block_property('wiki:facing_direction') == 2",
				//If query.block_property('wiki:facing_direction') == 2 sets rotation and on_interact component
				"components": {
					"minecraft:rotation": [0, 0, 90],
					"minecraft:on_interact": {
						"condition": "query.equipped_item_any_tag('slot.weapon.mainhand', 'minecraft:is_axe')",
						"event": "wiki:become_stripped2"
						//Event sets custom stripped log with rotation
					}
				}
			}
		],
		"components": {
			"tag:wiki:custom_log": {},
			"minecraft:creative_category": {
				"category": "nature",
				"group": "itemGroup.name.log"
			},
			"minecraft:material_instances": {
				"*": {
					"texture": "custom_log",
					"render_method": "opaque"
				},
				"ends": {
					"texture": "custom_log_top",
					"render_method": "opaque"
				},
				"up": "ends",
				"down": "ends"
				//Sets different textures for sides and top/bottom of log
			},
			"minecraft:loot": "loot_tables/blocks/custom_log_block.json",
			//Due to some bugs you need to add this component and loot table
			"minecraft:destroy_time": 1.0,
			"minecraft:unit_cube": {},
			"minecraft:on_player_placing": {
				"event": "wiki:set_facing_direction"
			}
			//Sets log rotation on player placing
		},
		"events": {
			"wiki:set_facing_direction": {
				"set_block_property": {
					"wiki:facing_direction": "math.floor( query.block_face / 2.0 )"
				}
			},
			//Sets block rotation
			"wiki:become_stripped_0": {
				"sequence": [
					{
						"run_command": {
							"command": [
								"setblock ~~~ wiki:custom_stripped_log",
								"playsound hit.wood @a ~~~"
							]
						}
					},
					//Sets custom stripped log with special rotation and plays sound
					{
						"damage": {
							"type": "durability",
							"amount": 1,
							"target": "item"
						}
					}
					//Damages axe of player who stripped the log
				]
			},
			"wiki:become_stripped1": {
				"sequence": [
					{
						"run_command": {
							"command": [
								"structure load custom_stripped_log1 ~~~",
								"playsound hit.wood @a ~~~"
							]
						}
					},
					//Loads structure (custom stripped log with special rotation) and plays sound
					{
						"damage": {
							"type": "durability",
							"amount": 1,
							"target": "item"
						}
					}
					//Damages axe of player who stripped the log
				]
			},
			"wiki:become_stripped2": {
				"sequence": [
					{
						"run_command": {
							"command": [
								"structure load custom_stripped_log2 ~~~",
								"playsound hit.wood @a ~~~"
							]
						}
					},
					//Loads structure (custom stripped log with special rotation) and plays sound
					{
						"damage": {
							"type": "durability",
							"amount": 1,
							"target": "item"
						}
					}
					//Damages axe of player who stripped the log
				]
			}
		}
	}
}
```

</Spoiler>

## Making Stripped Log

Here all components are the same

<Spoiler title="Code">

<CodeHeader>BP/blocks/custom_stripped_log.json</CodeHeader>

```json
{
	"format_version": "1.16.100",
	"minecraft:block": {
		"description": {
			"identifier": "wiki:custom_stripped_log",
			"properties": {
				"wiki:facing_direction": [0, 1, 2]
			}
		},
		"permutations": [
			{
				"condition": "query.block_property('wiki:facing_direction') == 0",
				"components": {
					"minecraft:rotation": [0, 0, 0]
				}
			},
			{
				"condition": "query.block_property('wiki:facing_direction') == 1",
				"components": {
					"minecraft:rotation": [90, 0, 0]
				}
			},
			{
				"condition": "query.block_property('wiki:facing_direction') == 2",
				"components": {
					"minecraft:rotation": [0, 0, 90]
				}
			}
		],
		"components": {
			"minecraft:creative_category": {
				"category": "nature",
				"group": "itemGroup.name.log"
			},
			"minecraft:material_instances": {
				"*": {
					"texture": "custom_stripped_log",
					"render_method": "opaque"
				},
				"ends": {
					"texture": "custom_stripped_log_top",
					"render_method": "opaque"
				},
				"up": "ends",
				"down": "ends"
			},
			"minecraft:flammable": {
				"burn_odds": 50,
				"flame_odds": 25
			},
			"minecraft:loot": "loot_tables/blocks/custom_stripped_log_block.json",
			"minecraft:destroy_time": 1.0,
			"minecraft:unit_cube": {},
			"minecraft:on_player_placing": {
				"event": "wiki:set_facing_direction"
			}
		},
		"events": {
			"wiki:set_facing_direction": {
				"set_block_property": {
					"wiki:facing_direction": "math.floor( query.block_face / 2.0 )"
				}
			}
		}
	}
}
```

</Spoiler>

## Making Custom Sapling

For the sapling we will need structures of out tree to make the sapling semi-realistic. `/place feature` would be great.

<Spoiler title="Code">

<CodeHeader>BP/blocks/custom_sapling.json</CodeHeader>

```json
{
	"format_version": "1.16.100",
	"minecraft:block": {
		"description": {
			"identifier": "wiki:custom_sapling",
			"properties": {
				"wiki:growing": [0, 1, 2]
			}
			//Properties of sapling growing
		},
		"permutations": [
			{
				"condition": "query.block_property('wiki:growing') == 0",
				"components": {
					"minecraft:on_interact": {
						"condition": "query.get_equipped_item_name('main_hand') == 'bone_meal'",
						"event": "bone_meal_1"
					},
					"minecraft:ticking": {
						"range": [120, 180],
						"on_tick": {
							"event": "grow_1"
						}
					}
				}
			},
			{
				"condition": "query.block_property('wiki:growing') == 1",
				"components": {
					"minecraft:on_interact": {
						"condition": "query.get_equipped_item_name('main_hand') == 'bone_meal'",
						"event": "bone_meal_2"
					},
					"minecraft:ticking": {
						"range": [120, 180],
						"on_tick": {
							"event": "grow_2"
						}
					}
				}
			},
			{
				"condition": "query.block_property('wiki:growing') == 2",
				"components": {
					"minecraft:on_interact": {
						"condition": "query.get_equipped_item_name('main_hand') == 'bone_meal'",
						"event": "bone_meal_3"
					},
					"minecraft:ticking": {
						"range": [120, 180],
						"on_tick": {
							"event": "grow_3"
						}
					}
				}
			}
		],
		"components": {
			"minecraft:material_instances": {
				"*": {
					"texture": "custom_sapling",
					"render_method": "alpha_test",
					//Add this two components to remove shadow from this block:
					"face_dimming": false,
					"ambient_occlusion": false
				}
			},
			"minecraft:pick_collision": {
				"origin": [-6, 0, -6],
				"size": [12, 13, 12]
			},
			"minecraft:loot": "loot_tables/blocks/custom_sapling.json",
			//Add loot component so it will drop sapling placer
			"minecraft:geometry": "geometry.custom_sapling",
			"minecraft:destroy_time": 0.01,
			"minecraft:entity_collision": false,
			"minecraft:breathability": "air",
			"minecraft:block_light_absorption": 0,
			"minecraft:placement_filter": {
				"conditions": [
					{
						"block_filter": [
							"minecraft:dirt",
							"minecraft:grass",
							"minecraft:podzol"
						],
						"allowed_faces": ["up"]
					}
				]
			},
			//Allows to place block only on this blocks
			"minecraft:ticking": {
				"range": [1, 1],
				"on_tick": {
					"event": "grow_0"
				}
			}
			//Starts to grow
		},
		"events": {
			"grow_0": {
				"set_block_property": {
					"wiki:growing": 0
				}
				//Sets growing stage to 0
			},
			"grow_1": {
				"sequence": [
					{
						"run_command": {
							"command": [
								"particle minecraft:crop_growth_emitter ~~~"
							]
						}
						//Adds particles
					},
					{
						"set_block_property": {
							"wiki:growing": 1
						}
						//Sets growing stage to 1
					}
				]
			},
			"grow_2": {
				"sequence": [
					{
						"run_command": {
							"command": [
								"particle minecraft:crop_growth_emitter ~~~"
							]
						}
						//Adds particles
					},
					{
						"set_block_property": {
							"wiki:growing": 2
							//Sets growing stage to 2
						}
					}
				]
			},
			"grow_3": {
				"run_command": {
					"command": [
						"particle minecraft:crop_growth_emitter ~~~",
						"structure load custom_tree ~-2 ~ ~-2"
					]
				}
				//Particles and structure loads. Magic!
			},
			"bone_meal_1": {
				"sequence": [
					{
						"decrement_stack": {}
						//Clears item that were used to interact
					},
					{
						"trigger": {
							"event": "grow_1"
						}
						//Runs grow_1 event
					}
				]
			},
			"bone_meal_2": {
				"sequence": [
					{
						"decrement_stack": {}
						//Clears item that were used to interact
					},
					{
						"trigger": {
							"event": "grow_2"
						}
						//Runs grow_2 event
					}
				]
			},
			"bone_meal_3": {
				"sequence": [
					{
						"decrement_stack": {}
						//Clears item that were used to interact
					},
					{
						"trigger": {
							"event": "grow_3"
						}
						//Runs grow_3 event
					}
				]
			}
		}
	}
}
```

</Spoiler>

## Making Sapling Placer

<Spoiler title="Code">

<CodeHeader>BP/items/custom_sapling_placer.json</CodeHeader>

```json
{
	"format_version": "1.16.100",
	"minecraft:item": {
		"description": {
			"identifier": "wiki:custom_sapling_placer",
			"category": "nature"
		},
		"components": {
			"minecraft:creative_category": {
				"parent": "itemGroup.name.sapling"
			},
			"minecraft:max_stack_size": 64,
			"minecraft:block_placer": {
				"block": "wiki:custom_sapling"
			},
			"minecraft:icon": {
				"texture": "custom_sapling_placer"
			}
		}
	}
}
```

</Spoiler>

## Making Loot Tables

<Spoiler title="Code">

<CodeHeader>BP/loot_tables/blocks/custom_leaves_block.json</CodeHeader>

This loot will spawn leaves block (when you break it using shears)

```json
{
	"pools": [
		{
			"rolls": 1,
			"entries": [
				{
					"type": "item",
					"name": "wiki:custom_leaves",
					"weight": 1
				}
			]
		}
	]
}
```

Leaves default loot

<CodeHeader>BP/loot_tables/blocks/custom_leaves_loot.json</CodeHeader>

```json
{
	"pools": [
		{
			"rolls": 1,
			"entries": [
				{
					"type": "item",
					"name": "minecraft:apple",
					"weight": 1
				},
				{
					"type": "item",
					"name": "wiki:custom_sapling_placer",
					"weight": 5
				},
				{
					"type": "empty",
					//Nothing wil drop
					"weight": 10
				}
			]
		}
	]
}
```

This loot will spawn log block

<CodeHeader>BP/loot_tables/blocks/custom_log_block.json</CodeHeader>

```json
{
	"pools": [
		{
			"rolls": 1,
			"entries": [
				{
					"type": "item",
					"name": "wiki:custom_log",
					"weight": 1
				}
			]
		}
	]
}
```

This loot will spawn stripped log

<CodeHeader>BP/loot_tables/blocks/custom_stripped_log_block.json</CodeHeader>

```json
{
	"pools": [
		{
			"rolls": 1,
			"entries": [
				{
					"type": "item",
					"name": "wiki:custom_stripped_log",
					"weight": 1
				}
			]
		}
	]
}
```

This will spawn custom_sapling_placer

<CodeHeader>BP/loot_tables/blocks/custom_sapling_placer.json</CodeHeader>

```json
{
	"pools": [
		{
			"rolls": 1,
			"entries": [
				{
					"type": "item",
					"name": "wiki:custom_sapling_placer",
					"weight": 1
				}
			]
		}
	]
}
```

</Spoiler>

## Making/Exporting Structures

Now you need to get custom_stripped_log1 and custom_stripped_log2 structures. Just export rotated stripped logs.

![](/assets/images/blocks/parts-of-custom-tree/export_structures.png)

Build some trees too!

![](/assets/images/blocks/parts-of-custom-tree/export_tree.png)

## Tree Features

:::tip
Tree Features are a really great way to get actual custom trees. You need some understanding on how they work but for this tutorial you can uses these templates.
:::

<Spoiler title="Feature">

<CodeHeader>BP/feature/custom_tree_feature.json</CodeHeader>

```json
{
	"format_version": "1.13.0",
	"minecraft:tree_feature": {
		"description": {
			"identifier": "wiki:custom_tree_feature"
		},
		"trunk": {
			"trunk_height": {
				"range_min": 6,
				"range_max": 10
			},
			"height_modifier": {
				"range_min": -2,
				"range_max": 4
			},
			"trunk_block": {
				"name": "minecraft:log",
				"states": {
					"old_log_type": "spruce"
				}
			}
		},
		"spruce_canopy": {
			"lower_offset": {
				"range_min": 2,
				"range_max": 4
			},
			"upper_offset": {
				"range_min": 0,
				"range_max": 4
			},
			"max_radius": {
				"range_min": 3,
				"range_max": 5
			},
			"leaf_block": {
				"name": "wiki:custom_leaves"
			}
		},
		"base_block": [
			"minecraft:dirt",
			{
				"name": "minecraft:dirt",
				"states": {
					"dirt_type": "coarse"
				}
			}
		],
		"may_grow_on": [
			"minecraft:dirt",
			"minecraft:grass",
			"minecraft:podzol",
			"minecraft:dirt_with_roots",
			"minecraft:moss_block",
			{
				"name": "minecraft:dirt",
				"states": {
					"dirt_type": "coarse"
				}
			},
			{
				"name": "minecraft:farmland",
				"states": {
					"moisturized_amount": 0
				}
			},
			{
				"name": "minecraft:farmland",
				"states": {
					"moisturized_amount": 1
				}
			},
			{
				"name": "minecraft:farmland",
				"states": {
					"moisturized_amount": 2
				}
			},
			{
				"name": "minecraft:farmland",
				"states": {
					"moisturized_amount": 3
				}
			},
			{
				"name": "minecraft:farmland",
				"states": {
					"moisturized_amount": 4
				}
			},
			{
				"name": "minecraft:farmland",
				"states": {
					"moisturized_amount": 5
				}
			},
			{
				"name": "minecraft:farmland",
				"states": {
					"moisturized_amount": 6
				}
			},
			{
				"name": "minecraft:farmland",
				"states": {
					"moisturized_amount": 7
				}
			}
		],
		"may_replace": [
			"minecraft:air",
			{
				"name": "minecraft:leaves",
				"states": {
					"old_leaf_type": "oak"
				}
			},
			{
				"name": "minecraft:leaves",
				"states": {
					"old_leaf_type": "spruce"
				}
			},
			{
				"name": "minecraft:leaves",
				"states": {
					"old_leaf_type": "birch"
				}
			},
			{
				"name": "minecraft:leaves",
				"states": {
					"old_leaf_type": "jungle"
				}
			},
			{
				"name": "minecraft:leaves2",
				"states": {
					"new_leaf_type": "acacia"
				}
			},
			{
				"name": "minecraft:leaves2",
				"states": {
					"new_leaf_type": "dark_oak"
				}
			}
		],
		"may_grow_through": [
			"minecraft:dirt",
			"minecraft:grass",
			{
				"name": "minecraft:dirt",
				"states": {
					"dirt_type": "coarse"
				}
			}
		]
	}
}
```

</Spoiler>

<Spoiler title="Feature Rule">

<CodeHeader>BP/feature_rules/custom_tree_feature_rule.json</CodeHeader>

```json
{
	"format_version": "1.13.0",
	"minecraft:feature_rules": {
		"description": {
			"identifier": "wiki:custom_tree_feature_rule",
			"places_feature": "wiki:custom_tree_feature"
		},
		"conditions": {
			"placement_pass": "surface_pass",
			"minecraft:biome_filter": [
				{
					"test": "has_biome_tag",
					"operator": "==",
					"value": "taiga"
				},
				{
					"test": "has_biome_tag",
					"operator": "!=",
					"value": "mega"
				}
			]
		},
		"distribution": {
			"iterations": 1,
			"coordinate_eval_order": "zxy",
			"x": {
				"extent": [0, 16],
				"distribution": "uniform"
			},
			"y": "query.heightmap(variable.worldx, variable.worldz)",
			"z": {
				"extent": [0, 16],
				"distribution": "uniform"
			}
		}
	}
}
```

</Spoiler>

## Resource Pack (optional guide)

Now it is time to make a resource pack!

Make translations for blocks:

<CodeHeader>RP/texts/en_US.lang</CodeHeader>

```
tile.wiki:custom_log.name=Custom Log
tile.wiki:custom_leaves.name=Custom leaves
tile.wiki:custom_stripped_log.name=Custom Stripped Log
tile.wiki:custom_sapling.name=Custom Sapling
item.wiki:custom_sapling_placer=Custom Sapling
```

Make terrain_texture.json and textures.

<CodeHeader>RP/textures/terrain_texture.json</CodeHeader>

```json
{
	"num_mip_levels": 4,
	"padding": 8,
	"resource_pack_name": "Parts of Custom Tree",
	"texture_data": {
		"custom_leaves": {
			"textures": "textures/blocks/leaves_oak"
		},
		"custom_log": {
			"textures": "textures/blocks/log_oak"
		},
		"custom_log_top": {
			"textures": "textures/blocks/log_oak_top"
		},
		"custom_stripped_log": {
			"textures": "textures/blocks/stripped_oak_log"
		},
		"custom_stripped_log_top": {
			"textures": "textures/blocks/stripped_oak_log_top"
		},
		"custom_sapling": {
			"textures": "textures/blocks/sapling_oak"
		}
	},
	"texture_name": "atlas.terrain"
}
```

Make geometry for sapling:

<CodeHeader>RP/models/blocks/custom_sapling.geo.json</CodeHeader>

```json
{
	"format_version": "1.12.0",
	"minecraft:geometry": [
		{
			"description": {
				"identifier": "geometry.custom_sapling",
				"texture_width": 16,
				"texture_height": 16,
				"visible_bounds_width": 2,
				"visible_bounds_height": 2.5,
				"visible_bounds_offset": [0, 0.75, 0]
			},
			"bones": [
				{
					"name": "bb_main",
					"pivot": [0, 0, 0],
					"cubes": [
						{
							"origin": [-8, 0, 0],
							"size": [16, 16, 0],
							"pivot": [0, 0, 0],
							"rotation": [0, -45, 0],
							"uv": [0, 0]
						},
						{
							"origin": [-8, 0, 0],
							"size": [16, 16, 0],
							"pivot": [0, 0, 0],
							"rotation": [0, 45, 0],
							"uv": [0, 0]
						}
					]
				}
			]
		}
	]
}
```

Make item_texture file

<CodeHeader>RP/textures/item_texture.json</CodeHeader>

```json
{
	"resource_pack_name": "Parts of Custom Tree",
	"texture_name": "atlas.items",
	"texture_data": {
		"custom_sapling_placer": {
			"textures": "textures/blocks/sapling_oak"
		}
	}
}
```

Add sounds to blocks

<CodeHeader>RP/blocks.json</CodeHeader>

```json
{
	"format_version": [1, 1, 0],
	"wiki:custom_leaves": {
		"sound": "grass"
	},
	"wiki:custom_log": {
		"sound": "wood"
	},
	"wiki:custom_stripped_log": {
		"sound": "wood"
	},
	"wiki:custom_sapling": {
		"sound": "grass"
	}
}
```

## Result

What you have created:

<Checklist>

-   [x] Custom Trees with Decaying Leaves
-   [x] Working Sapling
-   [x] Rotatable and strippable Logs

</Checklist>

<FolderView :paths="[
'BP/manifest.json',
'BP/pack_icon.png',
'BP/blocks/custom_leaves.json',
'BP/blocks/custom_log.json',
'BP/blocks/custom_stripped_log.json',
'BP/blocks/custom_sapling.json',
'BP/features/custom_tree_feature.json',
'BP/feature_rules/custom_tree_feature_rule.json',
'BP/items/custom_sapling_placer.json',
'BP/loot_tables/blocks/custom_leaves_block.json',
'BP/loot_tables/blocks/custom_leaves_loot.json',
'BP/loot_tables/blocks/custom_log_block.json',
'BP/loot_tables/blocks/custom_stripped_log_block.json',
'BP/loot_tables/blocks/custom_sapling_placer.json',
'BP/structures/custom_stripped_log1.mcstructure',
'BP/structures/custom_stripped_log2.mcstructure',
'BP/structures/custom_tree.mcstructure',
'RP/manifest.json',
'RP/pack_icon.png',
'RP/blocks.json',
'RP/texts/en_US.lang',
'RP/textures/terrain_texture.json',
'RP/models/blocks/custom_sapling.geo.json',
'RP/textures/item_texture.json'
]"></FolderView>

![](/assets/images/blocks/parts-of-custom-tree/result.png)

## Download Example Pack

Template Pack to use in-game to get the idea.

<BButton
link="https://github.com/Bedrock-OSS/wiki-addon/releases/download/download/custom_tree.mcaddon"
color=blue> Download</BButton>
