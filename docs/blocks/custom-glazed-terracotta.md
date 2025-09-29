---
title: Custom Glazed Terracotta
description: Learn how to create a custom block with the same rotation as vanilla Glazed Terracotta.
category: Vanilla Re-Creations
tags:
    - beginner
    - easy
license: true
mentions:
    - Kaioga5
    - QuazChick
---

::: tip FORMAT & MIN ENGINE VERSION `1.21.110`
This tutorial assumes a basic understanding of blocks.
Check out the [blocks guide](/blocks/blocks-intro) before starting.
:::

Glazed Terracotta has its own rotation mechanism, enabling players to craft aesthetically pleasing patterns for walls, floors and ceilings when placing the block from both above and below.
This guide will teach you how to create your own blocks resembling Glazed Terracotta.

## Block JSON

<CodeHeader>BP/blocks/custom_glazed_terracotta.json</CodeHeader>

```json
{
    "format_version": "1.21.110",
    "minecraft:block": {
        "description": {
            "identifier": "wiki:custom_glazed_terracotta",
            "menu_category": {
                "category": "construction",
                "group": "minecraft:itemGroup.name.glazedTerracotta"
            },
            "traits": {
                "minecraft:placement_direction": {
                    "enabled_states": ["minecraft:cardinal_direction"],
                    "y_rotation_offset": 180
                }
            }
        },
        "components": {
            "minecraft:light_dampening": 15,
            "minecraft:material_instances": {
                "*": {
                    "texture": "wiki:custom_glazed_terracotta"
                }
            },
            "minecraft:geometry": {
                "identifier": "geometry.glazed_terracotta",
                "bone_visibility": {
                    "bottom_x": "q.block_state('minecraft:cardinal_direction') == 'west' || q.block_state('minecraft:cardinal_direction') == 'east'",
                    "bottom_z": "q.block_state('minecraft:cardinal_direction') == 'north' || q.block_state('minecraft:cardinal_direction') == 'south'"
                }
            }
        },
        "permutations": [
            {
                "condition": "q.block_state('minecraft:cardinal_direction') == 'north'",
                "components": {
                    "minecraft:transformation": { "rotation": [0, 0, 0] }
                }
            },
            {
                "condition": "q.block_state('minecraft:cardinal_direction') == 'west'",
                "components": {
                    "minecraft:transformation": { "rotation": [0, 90, 0] }
                }
            },
            {
                "condition": "q.block_state('minecraft:cardinal_direction') == 'south'",
                "components": {
                    "minecraft:transformation": { "rotation": [0, 180, 0] }
                }
            },
            {
                "condition": "q.block_state('minecraft:cardinal_direction') == 'east'",
                "components": {
                    "minecraft:transformation": { "rotation": [0, -90, 0] }
                }
            }
        ]
    }
}
```

## Block Model

Vanilla glazed terracotta rotates its bottom faces differently, which is what gives the block its magic.
This requires two separate bottom faces with different rotations.

<Spoiler title="Geometry JSON">
  
<CodeHeader>RP/models/blocks/glazed_terracotta.geo.json</CodeHeader>

```json
{
    "format_version": "1.21.110",
    "minecraft:geometry": [
        {
            "description": {
                "identifier": "geometry.glazed_terracotta",
                "texture_width": 16,
                "texture_height": 16
            },
            "bones": [
                {
                    "name": "glazed_terracotta",
                    "pivot": [0, 0, 0],
                    "cubes": [
                        {
                            "origin": [-8, 0, -8],
                            "size": [16, 16, 16],
                            "uv": {
                                "north": {
                                    "uv": [0, 0],
                                    "uv_size": [16, 16],
                                    "uv_rotation": 270
                                },
                                "east": {
                                    "uv": [0, 0],
                                    "uv_size": [16, 16]
                                },
                                "south": {
                                    "uv": [0, 0],
                                    "uv_size": [16, 16],
                                    "uv_rotation": 90
                                },
                                "west": {
                                    "uv": [0, 0],
                                    "uv_size": [16, 16],
                                    "uv_rotation": 180
                                },
                                "up": {
                                    "uv": [0, 0],
                                    "uv_size": [16, 16]
                                }
                            }
                        }
                    ]
                },
                {
                    "name": "bottom_x",
                    "parent": "glazed_terracotta",
                    "pivot": [0, 0, 0],
                    "cubes": [
                        {
                            "origin": [-8, 0, -8],
                            "size": [16, 0, 16],
                            "uv": {
                                "down": {
                                    "uv": [0, 0],
                                    "uv_size": [16, 16],
                                    "uv_rotation": 180
                                }
                            }
                        }
                    ]
                },
                {
                    "name": "bottom_z",
                    "parent": "glazed_terracotta",
                    "pivot": [0, 0, 0],
                    "cubes": [
                        {
                            "origin": [-8, 0, -8],
                            "size": [16, 0, 16],
                            "uv": {
                                "down": {
                                    "uv": [0, 0],
                                    "uv_size": [16, 16]
                                }
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
