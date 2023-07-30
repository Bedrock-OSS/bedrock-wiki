---
title: Custom Slabs
category: Vanilla Re-Creations
tags:
    - experimental
    - easy
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
::
## Introduction
Making custom slabs is a simple task, but if you find any drawbacks during recreating slabs, this tutorial will help you with it, and you'll be provided with a template for you to use.

## Custom Slab
This will create a vanilla-like custom slab.

<CodeHeader>BP/blocks/custom_slab.json</CodeHeader>

```json
{
	"format_version": "1.20.10",
	"minecraft:block": {
		"description": {
			"identifier": "wiki:slab_template",
			"menu_category": {
				"category": "construction",
				"group": "itemGroup.name.slab"
			},
			"traits": {
                "minecraft:placement_position": {
                    "enabled_states": ["minecraft:vertical_half"]
                	}
            	},
			"properties": {
				"wiki:double": [false, true]
			}
		},
		"permutations": [
		// Bottom Slab
		{
		"condition": "query.block_property('minecraft:vertical_half') == 'bottom' && !query.block_property('wiki:double')",
		"components": {
                    "minecraft:collision_box": {
                        "origin": [ -8, 0, -8 ],
                        "size": [ 16, 8, 16 ] 
                    },
                    "minecraft:selection_box": {
                        "origin": [ -8, 0, -8 ],
                        "size": [ 16, 8, 16 ]
                    },
                    "minecraft:on_interact": {
			"event": "wiki:full_slab",
			"target": "self",
			"condition": "q.block_face == 1.0 && q.is_item_name_any('slot.weapon.mainhand','wiki:slab_template')"
				}
			}
		},
		// Top Slab
		{
		"condition": "query.block_property('minecraft:vertical_half') == 'top' && !query.block_property('wiki:double')",
		"components": {
                    "minecraft:collision_box": {
                        "origin": [ -8, 8, -8 ],
                        "size": [ 16, 8, 16 ] 
                    },
                    "minecraft:selection_box": {
                        "origin": [ -8, 8, -8 ],
                        "size": [ 16, 8, 16 ]
                    },
                    "minecraft:on_interact": {
			"event": "wiki:full_slab",
			"target": "self",
			"condition": "q.block_face == 0.0 && q.is_item_name_any('slot.weapon.mainhand','wiki:slab_template')"
				}
			}
		},
		// Full Slab
		{
		"condition": "query.block_property('wiki:double')",
		"components": {
		    "minecraft:unit_cube": {},
		    "minecraft:on_player_destroyed": {
			"event": "wiki:double_destroy",
			"target": "self"
					}
				}
			}
		],
		"components": {
			"minecraft:destructible_by_mining": {
				"seconds_to_destroy": 7
			},
			"minecraft:destructible_by_explosion": {
				"explosion_resistance": 6
			},
			"tag:stone": {},		  
			"minecraft:geometry": {
				"identifier": "geometry.slab",
				"bone_visibility": {
					"bottom_slab": "query.block_property('minecraft:vertical_half') == 'bottom'",
					"top_slab": "query.block_property('minecraft:vertical_half') == 'top'"
				}
			},
			"minecraft:material_instances": {
				"*": {
					"texture": "stone",
					"render_method": "opaque"
				}
			}
		},
		"events": {
			"wiki:full_slab": {
				"set_block_property": {
					"wiki:double": true
				},
				"run_command": {
					"command": [
						"playsound step.stone @a ~~~ 0.7 1.5"
					]
				},
				"decrement_stack": {
					"ignore_game_mode": false
				}
			},
			"wiki:double_destroy": {
				"spawn_loot": {} // Spawns the block's default loot
			}
		}
	}
}
```

## Geometry
This will be the geometry used for your custom slabs.

<Spoiler title="Geometry JSON">
  
<CodeHeader>RP/models/blocks/slab.geo.json</CodeHeader>
```json
{
	"format_version": "1.12.0",
	"minecraft:geometry": [
		{
			"description": {
				"identifier": "geometry.slab",
				"texture_width": 16,
				"texture_height": 16,
				"visible_bounds_width": 2,
				"visible_bounds_height": 2.5,
				"visible_bounds_offset": [0, 0.75, 0]
			},
			"bones": [
				{
					"name": "top_slab",
					"pivot": [0, 0, 0],
					"cubes": [
						{
							"origin": [-8, 8, -8],
							"size": [16, 8, 16],
							"uv": {
								"north": {"uv": [0, 0], "uv_size": [16, 8]},
								"east": {"uv": [0, 0], "uv_size": [16, 8]},
								"south": {"uv": [0, 0], "uv_size": [16, 8]},
								"west": {"uv": [0, 0], "uv_size": [16, 8]},
								"up": {"uv": [16, 16], "uv_size": [-16, -16]},
								"down": {"uv": [16, 16], "uv_size": [-16, -16]}
							}
						}
					]
				},
				{
					"name": "bottom_slab",
					"pivot": [0, 0, 0],
					"cubes": [
						{
							"origin": [-8, 0, -8],
							"size": [16, 8, 16],
							"uv": {
								"north": {"uv": [0, 8], "uv_size": [16, 8]},
								"east": {"uv": [0, 8], "uv_size": [16, 8]},
								"south": {"uv": [0, 8], "uv_size": [16, 8]},
								"west": {"uv": [0, 8], "uv_size": [16, 8]},
								"up": {"uv": [16, 16], "uv_size": [-16, -16]},
								"down": {"uv": [16, 16], "uv_size": [-16, -16]}
							}
						}
					]
				}
			]
		}
	]
}
```

</Spoiler>
