---
title: Rotatable Blocks
category: Tutorials
tags:
    - experimental
---

::: tip
This tutorial assumes you have a basic understanding of blocks and Blockbench.
Ensure to check out the [blocks guide](/blocks/blocks-intro) before starting this tutorial
:::

## First Steps

Make sure you have the `Holiday Creator Features` toggle turned on. This will allow us to utilize the `1.16.100` components.

## The Model

Minecraft uses the default pivot points of [0,0,0]. This means that if your model consists of specific pivot points, your model will look detached in-game. In order to combat this, we can use the blockbench plugin called "Bedrock Pivot Fix 2". This will align your elements to the default pivot point without moving your elements.

## Regular Rotation

### Permutations

Rotating blocks make use of the permutations that were introduced in 1.16.100. Each permutation contains the `minecraft:rotation` component, and when the condition is true, the component within the respective permutation will activate and rotate the block to that direction. The 2, 3, 4, and 5 values are used here because the query we'll be using in our event will return those numbers and we'll be storing them to our property.

```json
{
	"permutations": [
		{
			"condition": "query.block_property('wiki:rotation') == 2",
			"components": {
				"minecraft:rotation": [0, 0, 0]
			}
		},
		{
			"condition": "query.block_property('wiki:rotation') == 3",
			"components": {
				"minecraft:rotation": [0, 180, 0]
			}
		},
		{
			"condition": "query.block_property('wiki:rotation') == 4",
			"components": {
				"minecraft:rotation": [0, 90, 0]
			}
		},
		{
			"condition": "query.block_property('wiki:rotation') == 5",
			"components": {
				"minecraft:rotation": [0, 270, 0]
			}
		}
	]
}
```

### Event

In order to make the block rotate the way the player is facing, we have to use some simple molang to query which way the player is facing.


```json
{
	"events": {
		"wiki:set_rotation": {
			"set_block_property": {
				"wiki:rotation": "(query.cardinal_facing_2d)"
			}
		}
	}
}
```

This event is called upon by using the `minecraft:on_player_placing` component.


```json
{
	"minecraft:on_player_placing": {
		"event": "wiki:set_rotation"
	}
}
```

## JSON Part

### The Block Code

```json
{
	"format_version": "1.16.100",
	"minecraft:block": {
		"description": {
			"identifier": "wiki:cabinet",
			"properties": {
				"wiki:rotation": [2, 3, 4, 5]
			}
		},
		"events": {
			"wiki:set_rotation": {
				"set_block_property": {
					"wiki:rotation": "(query.cardinal_facing_2d)"
				}
			}
		},
		"components": {
			"minecraft:material_instances": {
				"*": {
					"texture": "cabinet",
					"render_method": "alpha_test"
				}
			},
			"minecraft:pick_collision": {
				"origin": [-8, 0, -8],
				"size": [16, 16, 16]
			},
			"minecraft:entity_collision": {
				"origin": [-8, 0, -8],
				"size": [16, 16, 16]
			},
			"minecraft:geometry": "geometry.cabinet",
			"minecraft:block_light_absorption": 0,
			"minecraft:destroy_time": 3,
			"minecraft:on_player_placing": {
				"event": "wiki:set_rotation"
			}
		},
		"permutations": [
			{
				"condition": "query.block_property('wiki:rotation') == 2",
				"components": {
					"minecraft:rotation": [0, 0, 0]
				}
			},
			{
				"condition": "query.block_property('wiki:rotation') == 3",
				"components": {
					"minecraft:rotation": [0, 180, 0]
				}
			},
			{
				"condition": "query.block_property('wiki:rotation') == 4",
				"components": {
					"minecraft:rotation": [0, 90, 0]
				}
			},
			{
				"condition": "query.block_property('wiki:rotation') == 5",
				"components": {
					"minecraft:rotation": [0, 270, 0]
				}
			}
		]
	}
}
```

## Log Rotation
Block Rotation identical to how vanilla logs rotate.

### Permutations

Rotating blocks make use of the permutations that were introduced in 1.16.100. Each permutation contains the `minecraft:rotation` component, and when the condition is true, the component within the respective permutation will activate and rotate the block to that direction.

```json
"permutations": [
	{
		"condition": "query.block_property('wiki:block_rotation') == 0",
		"components": {
			"minecraft:rotation": [
				0,
				0,
				0
			]
		}
	},
	{
		"condition": "query.block_property('wiki:block_rotation') == 1",
		"components": {
			"minecraft:rotation": [
				90,
				0,
				0
			]
		}
	},
	{
		"condition": "query.block_property('wiki:block_rotation') == 2",
		"components": {
			"minecraft:rotation": [
				0,
				0,
				90
			]
		}
	}
]
```

### Event

In order to make the block rotate the way a vanilla log would, we need to use a molang expression that uses a query to get what face of a block we're placing our block on and convert it to 0, 1, or 2.

```json
"wiki:update_rotation": {
	"set_block_property": {
		"wiki:block_rotation": "math.floor(query.block_face/2)"
	}
}
```

This event is called upon by using the `minecraft:on_player_placing` component.

```json
{
	"minecraft:on_player_placing": {
		"event": "wiki:update_rotation"
	}
}
```

### Block Property


```json
"properties": {
	"wiki:block_rotation": [
		0,
		1,
		2
	]
}
```

## JSON Part

### The Block Code

```json
{
    "format_version":"1.16.100",
    "minecraft:block":{
        "description":{
            "identifier":"wiki:custom_log",
            "properties":{
                "wiki:block_rotation":[
                    0,
                    1,
                    2
                ]
            }
        },
        "components":{
            "minecraft:destroy_time":1.5,
            "minecraft:explosion_resistance":2,
            "minecraft:friction":1,
            "minecraft:block_light_absorption":0,
            "minecraft:material_instances":{
                "*":{
                    "texture":"log_side",
                    "render_method":"opaque",
                    "ambient_occlusion":false,
                    "face_dimming":true
                },
                "up":{
                    "texture":"log_top",
                    "render_method":"opaque",
                    "ambient_occlusion":false,
                    "face_dimming":true
                },
                "down":{
                    "texture":"log_top",
                    "render_method":"opaque",
                    "ambient_occlusion":false,
                    "face_dimming":true
                }
            },
            "minecraft:unit_cube":{
                
            },
            "minecraft:on_player_placing":{
                "event":"wiki:update_rotation"
            }
        },
        "permutations":[
            {
                "condition":"query.block_property('wiki:block_rotation') == 0",
                "components":{
                    "minecraft:rotation":[
                        0,
                        0,
                        0
                    ]
                }
            },
            {
                "condition":"query.block_property('wiki:block_rotation') == 1",
                "components":{
                    "minecraft:rotation":[
                        90,
                        0,
                        0
                    ]
                }
            },
            {
                "condition":"query.block_property('wiki:block_rotation') == 2",
                "components":{
                    "minecraft:rotation":[
                        0,
                        0,
                        90
                    ]
                }
            }
        ],
        "events":{
            "wiki:update_rotation":{
                "set_block_property":{
                    "wiki:block_rotation":"math.floor(query.block_face/2)"
                }
            }
        }
    }
}
```
