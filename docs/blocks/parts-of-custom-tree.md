---
title: Parts of Custom Tree
category: Tutorials
tags:
    - experimental
    - expert
mention:
    - MedicalJewel105
---

Vanilla-like custom trees are possible. Make their parts by following this tutorial.

## Features

-   Features:

    -   Decaying leaves
    -   If leaves were broken using shears, they will drop block
    -   Leaves doesn't decay if placed by player
    -   Logs are strippable and rotatable
    -   Stripping logs is compatible with tools from other Add-Ons (if they have the `"tag:minecraft:is_axe":{}` component)
    -   Saplings can be bonemealed

-   Issues:
    -   Due to some Minecraft bugs leaves will decay after reloading chunks
    -   If you made a structure with these blocks, it will crash the game when generated using features. Minecrfat bug.

:::tip
To make leaves decay, you need to use `/fill` command that will replace custom_leaves with custom_leaves. It is needed for switching decaying to true because on player placing it sets decaying to false.
:::

:::warning
This method requires PC.
:::

## Making Leaves

<Spoiler title="Code">

<CodeHeader>BP/blocks/custom_leaves.json</CodeHeader>

```json
{
	"format_version": "1.16.100",
	"minecraft:block": {
		"description": {
			"identifier": "wiki:custom_leaves",
			"properties": {
				"wiki:decaying": [true, false]
			}
			//Properties will make leaves decay or not
		},
		"permutations": [
			{
				"condition": "query.block_property('wiki:decaying') == true",
				"components": {
					"minecraft:ticking": {
						"looping": true,
						"range": [15.0, 20.0],
						"on_tick": {
							"event": "wiki:decay"
						}
						//In range of 10-18 seconds leaves will decay if weren't updated
					}
				}
			},
			{
				"condition": "query.block_property('wiki:decaying') == false",
				"components": {}
				//Empty components
			}
		],
		"components": {
			"minecraft:creative_category": {
				"category": "nature",
				"group": "itemGroup.name.leaves"
				//Don't add this component for fake leaves, they should be hidden
			},
			"minecraft:destroy_time": 0.35,
			"minecraft:breakonpush": true,
			"minecraft:material_instances": {
				"*": {
					"texture": "custom_leaves",
					"render_method": "alpha_test"
					//Use this render method to make leaves half-transparent, like vanilla ones
				}
			},
			"minecraft:flammable": {
				"burn_odds": 50,
				"flame_odds": 50
			},
			"minecraft:unit_cube": {},
			"minecraft:loot": "loot_tables/empty.json",
			//It is needed to prevent this block from dropping when just destroyed
			"minecraft:on_player_placing": {
				"event": "wiki:set_property_false"
			},
			//On player placing runs event that sets decaying property to false
			"minecraft:on_player_destroyed": {
				"event": "wiki:on_destroyed"
				//Triggers event that spawns different loot
			}
		},
		"events": {
			"wiki:set_property_false": {
				"set_block_property": {
					"wiki:decaying": false
				}
			},
			//Sets decaying to false
			"wiki:set_property_true": {
				"set_block_property": {
					"wiki:decaying": true
				}
			},
			//Sets decaying to true
			"wiki:on_destroyed": {
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
			//Spawns leaves block
			"wiki:decay": {
				"run_command": {
					"command": ["setblock ~~~ air 0 destroy"]
				}
			}
			//Imitation of decaying
		}
	}
}
```

</Spoiler>

## Making Log

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
			"minecraft:ticking": {
				"looping": true,
				"range": [6.0, 8.0],
				"on_tick": {
					"event": "wiki:update_leaves"
				}
			},
			//Updates blocks every 4-6 seconds so they don't decay. Use range to prevent huge lags every N-seconds
			"minecraft:on_player_placing": {
				"event": "wiki:set_facing_direction"
			}
			//Sets log rotation on player placing
		},
		"events": {
			"wiki:update_leaves": {
				"run_command": {
					"command": [
						"fill ~3 ~3 ~3 ~-3 ~-3 ~-3 wiki:fake_leaves 0 replace wiki:custom_leaves",
						"fill ~3 ~3 ~3 ~-3 ~-3 ~-3 wiki:custom_leaves 0 replace wiki:fake_leaves"
					]
				}
			},
			//Updates leaves
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

## Making Fake Leaves

You can replace block with itself only one time, then it wont work. That is why fake leaves are needed.
Log commands will update leaves without stopping:
`fill ~3 ~3 ~3 ~-3 ~-3 ~-3 wiki:fake_leaves 0 replace wiki:custom_leaves`
`fill ~3 ~3 ~3 ~-3 ~-3 ~-3 wiki:custom_leaves 0 replace wiki:fake_leaves`

<Spoiler title="Code">

<CodeHeader>BP/blocks/fake_leaves.json</CodeHeader>

```json
{
	"format_version": "1.16.100",
	"minecraft:block": {
		"description": {
			"identifier": "wiki:fake_leaves"
		},
		"components": {
			"minecraft:destroy_time": 2,
			"minecraft:breakonpush": true,
			"minecraft:material_instances": {
				"*": {
					"texture": "custom_leaves",
					"render_method": "alpha_test"
					//Use this render method to make leaves half-transparent, like vanilla ones
				}
			},
			"minecraft:flammable": {
				"burn_odds": 50,
				"flame_odds": 50
			},
			"minecraft:ticking": {
				"range": [0.1, 0.1],
				"on_tick": {
					"event": "wiki:update_leaves"
				}
			},
			//If something went wrong and fake leaves weren't replaces with custom leaves
			"minecraft:unit_cube": {},
			"minecraft:loot": "loot_tables/blocks/custom_leaves_loot.json"
			//Basic loot
		},
		"events": {
			"wiki:update_leaves": {
				"run_command": {
					"command": ["setblock ~~~ wiki:custom_leaves"]
				}
			}
			//Turning Back into custom leaves (if log was broken)
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

## Making Sapling

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
			"minecraft:breakonpush": true,
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

This loot will spawn leaves block (when you breaak it using shears)

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

## Exporting Structures

Now you need to get custom_stripped_log1 and custom_stripped_log2 structures. Just export rotated stripped logs.

![](/assets/images/blocks/parts-of-custom-tree/export_structures.png)

Build some trees too! (Don't forget to update leaves using `/fill` command)

![](/assets/images/blocks/parts-of-custom-tree/export_tree.png)

## Resource Pack

Now it is time to make a resource pack!

Make translations for blocks:

<CodeHeader>RP/texts/en_US.lang</CodeHeader>

```
tile.wiki:custom_log.name=Custom Log
tile.wiki:custom_leaves.name=Custom leaves
tile.wiki:custom_stripped_log.name=Custom Stripped Log
tile.wiki:custom_sapling.name=Custom Sapling
item.wiki:custom_sapling_placer=Custom Sapling
tile.wiki:fake_leaves.name=Custom Leaves
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
	},
	"wiki:fake_leaves": {
		"sound": "grass"
	}
}
```

## Result

What you have now:
Custom Leaves, Custom Log, Custom Stripped Log, Custom Sapling, Custom Tree Structure

<FolderView :paths="[

'BP/manifest.json',
'BP/pack_icon.png',

'BP/blocks/custom_leaves.json',
'BP/blocks/custom_log.json',
'BP/blocks/fake_leaves.json',
'BP/blocks/custom_stripped_log.json',
'BP/blocks/custom_sapling.json',

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

<BButton
    link="/assets/packs/tutorials/parts-of-custom-tree/poct_rp.mcpack" download
    color=blue
>RP</BButton>

<BButton
    link="/assets/packs/tutorials/parts-of-custom-tree/poct_bp.mcpack" download
    color=blue
>RP</BButton>