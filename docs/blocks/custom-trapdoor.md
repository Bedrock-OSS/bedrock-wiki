---
title: Custom Trapdoors
category: Vanilla Re-Creations
tags:
    - experimental
    - expert
mentions:
    - Kaioga5
---

::: tip FORMAT VERSION `1.20.10`
This tutorial assumes a basic understanding of blocks.
Check out [block features](/blocks/blocks-stable) before starting.
:::

::: warning EXPERIMENTAL
Requires `Holiday Creator Features` to trigger block events.
Requires `Upcoming Creator Features` for use of block traits.
:::

## Introduction

Making custom trapdoors is an often difficult task to do, but after reading this tutorial you'll understand how they work in case you find any drawbacks during recreating them, and you'll be provided with a template for you to use.

## Custom Trapdoor

This will create a vanilla-like custom trapdoor.

<CodeHeader>BP/blocks/custom_trapdoor.json</CodeHeader>

```json
{
	"format_version": "1.20.10",
	"minecraft:block": {
		"description": {
			"identifier": "wiki:trapdoor_template",
            "menu_category": {
				"category": "construction",
                "group":   "itemGroup.name.trapdoor"
			},
            "traits": {
                "minecraft:placement_position": {
                    "enabled_states": [ "minecraft:vertical_half" ]
                },
                "minecraft:placement_direction": {
                    "enabled_states": [ "minecraft:cardinal_direction" ]
                }
            },
            "properties": {
				"wiki:open": [ false, true ]					
			}
		},
        "permutations": [
            // Top Closed
            {
            "condition": "query.block_property('minecraft:vertical_half') == 'top' && query.block_property('minecraft:cardinal_direction') == 'north' && !query.block_property('wiki:open')",
            "components": {
                "minecraft:transformation": {
                    "rotation": [ 0, 0, 180 ]
                    }
                }
            },
            {
                "condition": "query.block_property('minecraft:vertical_half') == 'top' && query.block_property('minecraft:cardinal_direction') == 'south' && !query.block_property('wiki:open')",
                "components": {
                    "minecraft:transformation": {
                        "rotation": [ 180, 0, 0 ]
                    }
                }
            },
            {
                "condition": "query.block_property('minecraft:vertical_half') == 'top' && query.block_property('minecraft:cardinal_direction') == 'east' && !query.block_property('wiki:open')",
                "components": {
                    "minecraft:transformation": {
                        "rotation": [ 180, -270, 0 ]
                    }
                }
            },
            {
                "condition": "query.block_property('minecraft:vertical_half') == 'top' && query.block_property('minecraft:cardinal_direction') == 'west' && !query.block_property('wiki:open')",
                "components": {
                    "minecraft:transformation": {
                        "rotation": [ 180, 270, 0 ]
                    }
                }
            },
            // Top Open
            {
                "condition": "query.block_property('minecraft:vertical_half') == 'top' && query.block_property('minecraft:cardinal_direction') == 'north' && query.block_property('wiki:open')",
                "components": {
                    "minecraft:transformation": {
                        "rotation": [ -270, 0, 0 ]
                    }
                }
            },
            {
            "condition": "query.block_property('minecraft:vertical_half') == 'top' && query.block_property('minecraft:cardinal_direction') == 'south' && query.block_property('wiki:open')",
            "components": {
                "minecraft:transformation": {
                    "rotation": [ 270, 0, -180 ]
                    }
                }
            },
            {
            "condition": "query.block_property('minecraft:vertical_half') == 'top' && query.block_property('minecraft:cardinal_direction') == 'east' && query.block_property('wiki:open')",
            "components": {
                "minecraft:transformation": {
                    "rotation": [ 0, 270, 90 ]
                    }
                }
            },
            {
            "condition": "query.block_property('minecraft:vertical_half') == 'top' && query.block_property('minecraft:cardinal_direction') == 'west' && query.block_property('wiki:open')",
            "components": {
                "minecraft:transformation": {
                    "rotation": [ 180, -270, -270 ]
                    }
                }
            },
            // Bottom Closed
            {
            "condition": "query.block_property('minecraft:vertical_half') == 'bottom' && query.block_property('minecraft:cardinal_direction') == 'north' && !query.block_property('wiki:open')",
            "components": {
                "minecraft:transformation": {
                    "rotation": [ 0, 0, 0 ]
                    }
                }
            },
            {
                "condition": "query.block_property('minecraft:vertical_half') == 'bottom' && query.block_property('minecraft:cardinal_direction') == 'south' && !query.block_property('wiki:open')",
                "components": {
                    "minecraft:transformation": {
                        "rotation": [ 0, 180, 0 ]
                    }
                }
            },
            {
                "condition": "query.block_property('minecraft:vertical_half') == 'bottom' && query.block_property('minecraft:cardinal_direction') == 'east' && !query.block_property('wiki:open')",
                "components": {
                    "minecraft:transformation": {
                        "rotation": [ 0, 270, 0 ]
                    }
                }
            },
            {
                "condition": "query.block_property('minecraft:vertical_half') == 'bottom' && query.block_property('minecraft:cardinal_direction') == 'west' && !query.block_property('wiki:open')",
                "components": {
                    "minecraft:transformation": {
                        "rotation": [ 0, -270, 0 ]
                    }
                }
            },
            {
            "condition": "query.block_property('wiki:open')",
            "components": {
                "minecraft:on_interact":{
                    "event" : "wiki:close",
                    "target": "self"
                    }
                }
            },
            // Bottom Open
            {
                "condition": "query.block_property('minecraft:vertical_half') == 'bottom' && query.block_property('minecraft:cardinal_direction') == 'north' && query.block_property('wiki:open')",
                "components": {
                    "minecraft:transformation": {
                        "rotation": [ 90, 0, 180 ]
                    }
                }
            },
            {
            "condition": "query.block_property('minecraft:vertical_half') == 'bottom' && query.block_property('minecraft:cardinal_direction') == 'south' && query.block_property('wiki:open')",
            "components": {
                "minecraft:transformation": {
                    "rotation": [ 270, 0, 0 ]
                    }
                }
            },
            {
            "condition": "query.block_property('minecraft:vertical_half') == 'bottom' && query.block_property('minecraft:cardinal_direction') == 'east' && query.block_property('wiki:open')",
            "components": {
                "minecraft:transformation": {
                    "rotation": [ 0, -270, 90 ]
                    }
                }
            },
            {
            "condition": "query.block_property('minecraft:vertical_half') == 'bottom' && query.block_property('minecraft:cardinal_direction') == 'west' && query.block_property('wiki:open')",
            "components": {
                "minecraft:transformation": {
                    "rotation": [ 180, 270, -270 ]
                    }
                }
            }
        ],
		"components": {
            "minecraft:geometry": {
                "identifier": "geometry.trapdoor"
            },
            "minecraft:collision_box": {
				"origin": [-8,	0, -8],
				"size": [16, 3, 16]
			},
            "minecraft:selection_box": {
                "origin": [ -8, 0, -8 ],
                "size": [ 16, 3, 16 ]
            },
            "minecraft:on_interact":{
                "condition": "!query.block_property('wiki:open')",
                "event" : "wiki:open",
                "target": "self"
            },
	        "minecraft:material_instances": {
                "*": { 
                    "texture": "spruce_trapdoor","render_method": "blend" 
                }
		    }
	    },
        "events": {
            "wiki:open": {
                "set_block_property": {
					"wiki:open": true
			    },
                "run_command": {
					"command": [
						"playsound open.wooden_trapdoor @a ~~~ 0.9 0.9"
					]
				}
           },
           "wiki:close": {
            "set_block_property": {
                "wiki:open": false
                },
                "run_command": {
					"command": [
						"playsound open.wooden_trapdoor @a ~~~ 0.9 0.9"
					]
				}
            }
        }
    }
}
```

## Geometry

This will be the geometry used for your custom trapdoors.

<Spoiler title="Geometry JSON">
  
<CodeHeader>RP/models/blocks/trapdoor.geo.json</CodeHeader>

```json
{
	"format_version": "1.12.0",
	"minecraft:geometry": [
		{
			"description": {
				"identifier": "geometry.trapdoor",
				"texture_width": 16,
				"texture_height": 16,
				"visible_bounds_width": 2,
				"visible_bounds_height": 1.5,
				"visible_bounds_offset": [0, 0.25, 0]
			},
			"bones": [
				{
					"name": "trapdoor",
					"pivot": [0, 0, 0],
					"cubes": [
						{
							"origin": [-8, 0, -8],
							"size": [16, 3, 16],
							"uv": {
								"north": {"uv": [16, 3], "uv_size": [-16, -3]},
								"east": {"uv": [16, 3], "uv_size": [-16, -3]},
								"south": {"uv": [16, 3], "uv_size": [-16, -3]},
								"west": {"uv": [16, 3], "uv_size": [-16, -3]},
								"up": {"uv": [16, 16], "uv_size": [-16, -16]},
								"down": {"uv": [0, 0], "uv_size": [16, 16]}
							}
						}
					]
				},
				{
					"name": "trapdoor",
					"pivot": [0, 0, 0]
				}
			]
		}
	]
}
```

</Spoiler>

:::tip
Vanilla trapdoors have a few issues in the direction of the texture in certain faces and having a height of 2.95 when it should be 3. This block template and geometry fixes both of those issues.
:::
