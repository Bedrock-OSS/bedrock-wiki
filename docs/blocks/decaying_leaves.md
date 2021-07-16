---
title: Decaying Leaves
tags:
	- experimental
---


Vanilla-like custom decaying leaves are possible. Make them following this tutorial.

## Concept & Features

Idea: Custom logs replace custom leaves blocks that have ticking component with decay event.
Features:
• Decaying leaves
• If were broken using shears drop leaves block
• Doesn't decay if were placed by player
• Logs with facing direction
• Logs are strippable
• Axes from other Add-ons can strip logs (if they have "tag:minecraft_is_axe":{} component)
Issues:
• If leaves were broken using shears can spawn ordinary loot too

Use /fill command to replace all custom_leaves with custm leaves so they will be decayable

## Getting Started

Create behaviour manifest

<CodeHeader>BP/manifest.json</CodeHeader>

```json
{
	"format_version": 2,
	"header": {
		"name": "Custom Decaying Leaves",
		"description": "Adds custom decaying leaves and more",
		"uuid": "7a1bccb8-a62c-4f71-905b-91fff64eccac",
		"version": [0, 0, 1],
		// We make sure we target the min version with the beta item changes
		"min_engine_version": [1, 16, 100]
	},
	"modules": [
		{
			"type": "data",
			"uuid": "d8e9e744-bcff-4e73-96e3-1675014f7946",
			"version": [0, 0, 1]
		}
	],
	// We are also depending on the RP as we need textures within there
	"dependencies": [
		{
			"uuid": "8653ca00-05fb-426b-b579-e56f1ec21102",
			"version": [0, 1, 0]
		}
	]
}
```

## Making Leaves

<CodeHeader>BP/blocks/custom_leaves.json</CodeHeader>

```json
{
    "format_version":"1.16.100",
    "minecraft:block":{
        "description":{
            "identifier":"tut:custom_leaves",
            "properties":{
                "tut:decaying":[
                    false,
                    true
                ]
            }
            //Properties will make leaves decay or not
        },
        "permutations":[
            {
                "condition":"query.block_property('tut:decaying') == true",
                //If blocks decay:
                "components":{
                    "minecraft:ticking":{
                        "looping":true,
                        "range":[
                            10.0,
                            18.0
                        ],
                        "on_tick":{
                            "event":"tut:decay"
                        }
                        //In range of 10-18 seconds leaves will decay if weren't updated
                    }
                }
            },
            {
                "condition":"query.block_property('tut:decaying') == false",
                    "minecraft:ticking":{
                    "looping":true,
                    "range":[
                        2.0,
                        2.0
                    ],
                    "on_tick":{
                        "event":"tut:set_property_false"
                    }
                    //This component every 2 seconds sets decaying property to false so logs won't make it decayable
                }
            }
        ],
        "components":{
            "minecraft:destroy_time":0.5,
            "minecraft:breakonpush":true,
            "minecraft:material_instances":{
                "*":{
                    "texture":"custom_leaves",
                    "render_method":"alpha_test"
                    //Use this render method to make leaves half-transpared, like vanilla ones
                }
            },
            "minecraft:unit_cube":{},
            "minecraft:loot":"loot_tables/blocks/custom_leaves_loot.json",
            //Basic loot
            "minecraft:on_player_placing":{
                "event":"tut:set_property_false"
            },
            //On player placing happens event that sets decaying property to false
            "minecraft:on_player_destroyed":{
                "condition":"query.get_equipped_item_name(0) == 'shears'",
                //Detects if player hold shears in main hand on destroyed
                "event":"tut:spawn_loot"
                //Spawns loot (leaves block)
            },
            "minecraft:ticking":{
                "looping":true,
                "range":[
                    1.0,
                    1.0
                ],
                "on_tick":{
                    "event":"tut:set_property_true"
                }
            }
            //If this block was naturally generated sets decaying to true
        },
        "events":{
            "tut:set_property_false":{
                "set_block_property":{
                    "tut:decaying":false
                }
            },
            //Sets decaying to false
            "tut:set_property_true":{
                "set_block_property":{
                    "tut:decaying":true
                }
            },
            //Sets decaying to true
            "tut:spawn_loot":{
                "spawn_loot":{
                    "table":"loot_tables/blocks/custom_leaves_block.json"
                }
            },
            //Spawns leaves block
            "tut:decay":{
                "run_command":{
                    "command":[
                        "setblock ~~~ air 0 destroy"
                    ]
                }
            }
            //Imitation of decaying
        }
    }
}
```

## Making Log

<CodeHeader>BP/blocks/custom_log.json</CodeHeader>

```json
{
    "format_version":"1.16.100",
    "minecraft:block":{
        "description":{
            "identifier":"tut:custom_log",
            "properties":{
                "tut:facing_direction":[
                    0,
                    1,
                    2
                ]
            }
            //Log direction properties
        },
        "permutations":[
            {
                "condition":"query.block_property('tut:facing_direction') == 0",
                //If query.block_property('tut:facing_direction') == 0 sets no rotation and on_interact component
                "components":{
                    "minecraft:rotation":[
                        0,
                        0,
                        0
                    ],
					"minecraft:on_interact": {
                        "condition": "query.equipped_item_any_tag('slot.weapon.mainhand', 'minecraft:is_axe')",
						"event": "tut:become_stripped_0"
                        //Event sets custom stripped log with no rotation
					}
                }
            },
            {
                "condition":"query.block_property('tut:facing_direction') == 1",
                //If query.block_property('tut:facing_direction') == 1 sets rotation and on_interact component
                "components":{
                    "minecraft:rotation":[
                        90,
                        0,
                        0
                    ],
					"minecraft:on_interact": {
						"condition": "query.equipped_item_any_tag('slot.weapon.mainhand', 'minecraft:is_axe')",
                        "event": "tut:become_stripped1"
                        //Event sets custom stripped log with rotation
					}
                }
            },
            {
                "condition":"query.block_property('tut:facing_direction') == 2",
                //If query.block_property('tut:facing_direction') == 2 sets rotation and on_interact component
                "components":{
                    "minecraft:rotation":[
                        0,
                        0,
                        90
                    ],
					"minecraft:on_interact": {
                        "condition": "query.equipped_item_any_tag('slot.weapon.mainhand', 'minecraft:is_axe')",
						"event": "tut:become_stripped2"
                        //Event sets custom stripped log with rotation
					}
                }
            }
        ],
        "components":{
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
            "minecraft:destroy_time":1.0,
            "minecraft:unit_cube":{},
            "minecraft:ticking":{
                "looping":true,
                "range":[
                    4.0,
                    6.0
                ],
                "on_tick":{
                    "event":"tut:update_leaves"
                }
            },
            //Updates blocks every 4-6 seconds so they don't decay. Use range to prevent huge lags every N-seconds
            "minecraft:on_player_placing":{
                "event":"tut:set_facing_direction"
            }
            //Sets log rotation on player placing
        },
        "events":{
            "tut:update_leaves":{
                "run_command":{
                    "command":[
                        "fill ~3 ~3 ~3 ~-3 ~-3 ~-3 tut:custom_leaves 0 replace tut:custom_leaves"
                    ]
                }
            },
            //Updates leaves
            "tut:set_facing_direction":{
                "set_block_property":{
                    "tut:facing_direction":"math.floor( query.block_face / 2.0 )"
                }
            },
            //Sets block rotation
			"tut:become_stripped_0": {
                "sequence":[
					{
						"run_command": {
                            "command": [
                                "setblock ~~~ tut:custom_stripped_log"
                            ]
                        }
					},
                    //Damages axe of player who stripped the log
					{
						"damage":{
							"type": "durability",
							"amount": 1,
							"target": "item"
						}
					}
				]
			},
            //Sets custom stripped log with special rotation
			"tut:become_stripped1": {
                "sequence":[
					{
						"run_command": {
                            "command": [
                                "structure load custom_stripped_log1 ~~~"
                            ]
                        }
					},
                    //Damages axe of player who stripped the log
					{
						"damage":{
							"type": "durability",
							"amount": 1,
							"target": "item"
						}
					}
				]
			},
            //Loads structure (custom stripped log with special rotation)
			"tut:become_stripped2": {
                "sequence":[
					{
						"run_command": {
                            "command": [
                                "structure load custom_stripped_log2 ~~~"
                            ]
                        }
					},
                    //Damages axe of player who stripped the log
					{
						"damage":{
							"type": "durability",
							"amount": 1,
							"target": "item"
						}
					}
				]
			}
            //Loads structure (custom stripped log with special rotation)
        }
    }
}
```

## Making Stripped Log

Here all components are the same

<CodeHeader>BP/blocks/custom_stripped_log.json</CodeHeader>

```json
{
    "format_version":"1.16.100",
    "minecraft:block":{
        "description":{
            "identifier":"tut:custom_stripped_log",
            "properties":{
                "tut:facing_direction":[
                    0,
                    1,
                    2
                ]
            }
        },
        "permutations":[
            {
                "condition":"query.block_property('tut:facing_direction') == 0",
                "components":{
                    "minecraft:rotation":[
                        0,
                        0,
                        0
                    ]
                }
            },
            {
                "condition":"query.block_property('tut:facing_direction') == 1",
                "components":{
                    "minecraft:rotation":[
                        90,
                        0,
                        0
                    ]
                }
            },
            {
                "condition":"query.block_property('tut:facing_direction') == 2",
                "components":{
                    "minecraft:rotation":[
                        0,
                        0,
                        90
                    ]
                }
            }
        ],
        "components":{
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
			"minecraft:loot": "loot_tables/blocks/custom_stripped_log_block.json",
            "minecraft:destroy_time":1.0,
            "minecraft:unit_cube":{},
            "minecraft:on_player_placing":{
                "event":"tut:set_facing_direction"
            }
        },
        "events":{
            "tut:set_facing_direction":{
                "set_block_property":{
                    "tut:facing_direction":"math.floor( query.block_face / 2.0 )"
                }
            }
        }
    }
}
```

## Making Loot Tables

This loot will spawn leaves block

<CodeHeader>BP/loot_tables/blocks/custom_leaves_block.json</CodeHeader>

```json
{
    "pools":[
        {
            "rolls":1,
            "entries":[
                {
                    "type":"item",
                    "name":"tut:custom_leaves",
                    "weight":1
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
    "pools":[
        {
            "rolls":1,
            "entries":[
                {
                    "type":"item",
                    "name":"minecraft:apple",
                    "weight":1
                },
                {
                    "type":"item",
                    "name":"minecraft:sapling",
                    "weight":5
                },
                {
                    "type":"empty",
                    //Nothing wil drop
                    "weight":10
                }
            ]
        }
    ]
}
```

This loot will spawn log block

<CodeHeader>BP/loot_tables/blocks/custom_leaves_block.json</CodeHeader>

```json
{
    "pools":[
        {
            "rolls":1,
            "entries":[
                {
                    "type":"item",
                    "name":"tut:custom_log",
                    "weight":1
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
    "pools":[
        {
            "rolls":1,
            "entries":[
                {
                    "type":"item",
                    "name":"tut:custom_stripped_log",
                    "weight":1
                }
            ]
        }
    ]
}
```

## Exporting Structures

Now you need to get custom_stripped_log1 and custom_stripped_log2 structures.

![](/assets/images/blocks/decaying-leaves/export_structures.png)

## Texture Pack

It is time to make a resource pack!

Make translations for blocks:

<CodeHeader>RP/texts/en_US.lang</CodeHeader>

```
tile.tut:custom_log.name=Custom Log
tile.tut:custom_leaves.name=Custom leaves
tile.tut:custom_stripped_log.name=Custom Stripped Log
```

Make terrain_texture.json and the textures.
Used vanilla textures

<CodeHeader>RP/textures/terrain_texture.json</CodeHeader>

```json
{
    "num_mip_levels":4,
    "padding":8,
    "resource_pack_name":"Decaying Leaves",
    "texture_data":{
		"custom_leaves":{
            "textures":"textures/blocks/leaves_oak"
        },
        "custom_log":{
            "textures":"textures/blocks/log_oak"
        },
        "custom_log_top":{
            "textures":"textures/blocks/log_oak_top"
        },
		"custom_stripped_log":{
            "textures":"textures/blocks/stripped_oak_log"
        },
        "custom_stripped_log_top":{
            "textures":"textures/blocks/stripped_oak_log_top"
        }
    },
    "texture_name":"atlas.terrain"
}
```