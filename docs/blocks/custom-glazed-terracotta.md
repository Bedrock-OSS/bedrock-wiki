---
title: Custom Glazed Terracotta
category: Vanilla Re-Creations
tags:
    - easy
mentions:
    - Kaioga5
---

::: tip FORMAT & MIN ENGINE VERSION `1.20.40`
This tutorial assumes a basic understanding of blocks.
Check out the [blocks guide](/blocks/blocks-intro) before starting.
:::


## Introduction
Glazed Terracotta has its own rotation mechanism, enabling players to craft aesthetically pleasing patterns for walls, floors, and ceilings. This guide will instruct you on creating your own blocks resembling glazed terracotta.

## Custom Glazed Terracotta
This will create a vanilla-like custom glazed terracotta.

<CodeHeader>BP/blocks/custom_glazed_terracotta.json</CodeHeader>

```json
{
    "format_version": "1.20.40",
    "minecraft:block": {
        "description": {
            "identifier": "wiki:glazed_terracotta_template",
            "menu_category": {
                "category": "construction",
                "group": "itemGroup.name.glazedTerracotta"
            },
            "traits": {
                "minecraft:placement_direction": {
                    "enabled_states": [
                        "minecraft:cardinal_direction"
                    ]
                }
            }
        },
        "permutations": [
            {
                "condition": "q.block_state('minecraft:cardinal_direction') == 'north'",
                "components": {
                    "minecraft:transformation": { "rotation": [0, 0, 0] },
                    "minecraft:geometry": {
                        "identifier": "geometry.glazed_terracotta",
                        "bone_visibility": {
                            "bottom_1": false,
                            "bottom_2": false,
                            "bottom_3": false,
                            "bottom_4": true
                        }
                    }
                }
            },
            {
                "condition": "q.block_state('minecraft:cardinal_direction') == 'west'",
                "components": {
                    "minecraft:transformation": { "rotation": [0, 90, 0] },
                    "minecraft:geometry": {
                        "identifier": "geometry.glazed_terracotta",
                        "bone_visibility": {
                            "bottom_1": false,
                            "bottom_2": false,
                            "bottom_3": true,
                            "bottom_4": false
                        }
                    }
                }
            },
            {
                "condition": "q.block_state('minecraft:cardinal_direction') == 'south'",
                "components": {
                    "minecraft:transformation": { "rotation": [0, 180, 0] },
                    "minecraft:geometry": {
                        "identifier": "geometry.glazed_terracotta",
                        "bone_visibility": {
                            "bottom_1": false,
                            "bottom_2": true,
                            "bottom_3": false,
                            "bottom_4": false
                        }
                    }
                }
            },
            {
                "condition": "q.block_state('minecraft:cardinal_direction') == 'east'",
                "components": {
                    "minecraft:transformation": { "rotation": [0, -90, 0] },
                    "minecraft:geometry": {
                        "identifier": "geometry.glazed_terracotta",
                        "bone_visibility": {
                            "bottom_1": true,
                            "bottom_2": false,
                            "bottom_3": false,
                            "bottom_4": false
                        }
                    }
                }
            }
        ],
        "components": {
            "minecraft:geometry": {
                "identifier": "geometry.glazed_terracotta"
            },
            "minecraft:material_instances": {
                "*": {
                    "texture": "purple_glazed_terracotta",
                    "render_method": "opaque"
                }
            }
        }
    }
}
```

## Geometry
Vanilla glazed terracotta rotates certain faces of the block with some specific values, which is what gives the block it's magic. Use the following geometry to replicate that behavior.

<Spoiler title="Geometry JSON">
  
<CodeHeader>RP/models/blocks/glazed_terracotta.geo.json</CodeHeader>

```json
{
	"format_version": "1.12.0",
	"minecraft:geometry": [
		{
			"description": {
				"identifier": "geometry.glazed_terracotta",
				"texture_width": 16,
				"texture_height": 16,
				"visible_bounds_width": 4,
				"visible_bounds_height": 3.5,
				"visible_bounds_offset": [0, 1.25, 0]
			},
			"bones": [
				{
					"name": "glazed_terracotta",
					"pivot": [0, 0, 0]
				},
				{
					"name": "top",
					"parent": "glazed_terracotta",
					"pivot": [0, 0, 0],
					"cubes": [
						{
							"origin": [-8, 0, -8],
							"size": [16, 16, 16],
							"uv": {
								"up": {"uv": [16, 16], "uv_size": [-16, -16]}
							}
						}
					]
				},
				{
					"name": "north",
					"parent": "glazed_terracotta",
					"pivot": [0, 8, 0],
					"cubes": [
						{
							"origin": [-8, 0, -8],
							"size": [16, 16, 0],
							"pivot": [0, 8, 0],
							"rotation": [180, 0, 90],
							"uv": {
								"north": {"uv": [16, 16], "uv_size": [-16, -16]}
							}
						}
					]
				},
				{
					"name": "south",
					"parent": "glazed_terracotta",
					"pivot": [0, 0, 0],
					"cubes": [
						{
							"origin": [0, -8, 8],
							"size": [16, 16, 0],
							"pivot": [0, 0, 0],
							"rotation": [180, 0, 270],
							"uv": {
								"south": {"uv": [0, 0], "uv_size": [16, 16]}
							}
						}
					]
				},
				{
					"name": "east",
					"parent": "glazed_terracotta",
					"pivot": [0, 0, 0],
					"cubes": [
						{
							"origin": [-8, -16, -8],
							"size": [0, 16, 16],
							"pivot": [0, 0, 0],
							"rotation": [0, 0, -180],
							"uv": {
								"east": {"uv": [16, 16], "uv_size": [-16, -16]}
							}
						}
					]
				},
				{
					"name": "west",
					"parent": "glazed_terracotta",
					"pivot": [-16, 0, 0],
					"cubes": [
						{
							"origin": [-24, 0, -8],
							"size": [0, 16, 16],
							"pivot": [-16, 0, 0],
							"rotation": [0, 180, 0],
							"uv": {
								"west": {"uv": [16, 16], "uv_size": [-16, -16]}
							}
						}
					]
				},
				{
					"name": "bottom",
					"parent": "glazed_terracotta",
					"pivot": [0, 0, 0]
				},
				{
					"name": "bottom_1",
					"parent": "bottom",
					"pivot": [0, 0, 0],
					"cubes": [
						{
							"origin": [-8, 0, -8],
							"size": [16, 0, 16],
							"uv": {
								"down": {"uv": [0, 0], "uv_size": [16, 16]}
							}
						}
					]
				},
				{
					"name": "bottom_2",
					"parent": "bottom",
					"pivot": [0, 0, 0],
					"cubes": [
						{
							"origin": [-8, 0, -8],
							"size": [16, 0, 16],
							"uv": {
								"down": {"uv": [16, 16], "uv_size": [-16, -16]}
							}
						}
					]
				},
				{
					"name": "bottom_3",
					"parent": "bottom",
					"pivot": [0, 0, 0],
					"cubes": [
						{
							"origin": [-8, 0, -8],
							"size": [16, 0, 16],
							"uv": {
								"down": {"uv": [0, 0], "uv_size": [16, 16]}
							}
						}
					]
				},
				{
					"name": "bottom_4",
					"parent": "bottom",
					"pivot": [0, 0, 0],
					"cubes": [
						{
							"origin": [-8, 0, -8],
							"size": [16, 0, 16],
							"uv": {
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
