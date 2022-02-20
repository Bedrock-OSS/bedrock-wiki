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

Minecraft uses the default pivot points of [0,0,0]. This means that if your model consits of specific pivot points, your model will look detached in-game. In order to combat this, we can use the blockbench plugin called "Bedrock Pivot Fix 2". This will align your elements to the default pivot point without moving your elements.

## JSON Part

Here json part of creating rotatable blocks will be discussed.

### Permutations

Rotating blocks make use of the permutations that were intoduced in 1.16.100. The each permutation contains the `minecraft:rotation` component, and when the condition is true, it will rotate the block to that direction.

<CodeHeader>BP/blocks/my_block.json#minecraft:block</CodeHeader>

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

### Component

The component `minecraft:on_player_placing` triggers the event.

<CodeHeader>BP/blocks/my_block.json#components</CodeHeader>

```json
"minecraft:on_player_placing": {
	"event": "wiki:update_rotation"
}
```

### Event

This event is called upon by using the `minecraft:on_player_placing` component.

<CodeHeader>BP/blocks/my_block.json#events</CodeHeader>

```json
"wiki:update_rotation": {
	"set_block_property": {
		"wiki:block_rotation": "math.floor(query.block_face/2)"
	}
}
```

### Block Property

<CodeHeader>BP/blocks/my_block.json#description</CodeHeader>

```json
"properties": {
	"wiki:block_rotation": [
		0,
		1,
		2
	]
}
```

## Block Code

<CodeHeader>BP/blocks/my_block.json#components</CodeHeader>

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