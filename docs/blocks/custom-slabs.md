---
title: Custom Slabs
category: Vanilla Re-Creations
tags:
    - experimental
    - easy
mentions:
    - Kaioga5
    - QuazChick
    - SmokeyStack
---

::: tip FORMAT & MIN ENGINE VERSION `1.20.80`
This tutorial assumes a basic understanding of blocks.
Check out the [blocks guide](/blocks/blocks-intro) before starting.
:::

## Introduction

Making custom slabs is a simple task, but if you find any drawbacks during recreating slabs, this tutorial will help you with it, and you'll be provided with a template for you to use.

Issues:

-   Your custom slab will appear vertically centred when carried.
-   Your custom slab may appear full-sized in item form (on the ground, in item frames, in hand)

## Custom Slab

This will create a vanilla-like custom slab.

<CodeHeader>BP/blocks/custom_slab.json</CodeHeader>

```json
{
    "format_version": "1.20.80",
    "minecraft:block": {
        "components": {
            "minecraft:destructible_by_explosion": {
                "explosion_resistance": 30
            },
            "minecraft:destructible_by_mining": {
                "seconds_to_destroy": 2
            },
            "minecraft:geometry": {
                "bone_visibility": {
                    "bottom": "q.block_state('minecraft:vertical_half') == 'bottom' || q.block_state('wiki:is_double')",
                    "top": "q.block_state('minecraft:vertical_half') == 'top' || q.block_state('wiki:is_double')"
                },
                "identifier": "geometry.slab"
            },
            "minecraft:map_color": [229, 229, 51],
            "minecraft:material_instances": {
                "*": {
                    "texture": "honeycomb_bricks"
                },
                "ends": {
                    "texture": ""
                }
            }
        },
        "description": {
            "identifier": "wiki:honeycomb_bricks_slab",
            "menu_category": {
                "category": "construction",
                "group": "itemGroup.name.slab"
            },
            "states": {
                "wiki:is_double": [false, true]
            },
            "traits": {
                "minecraft:placement_position": {
                    "enabled_states": ["minecraft:vertical_half"]
                }
            }
        },
        "permutations": [
            {
                "components": {
                    "minecraft:collision_box": {
                        "origin": [-8, 0, -8],
                        "size": [16, 8, 16]
                    },
                    "minecraft:custom_components": ["adk-lib:before_on_player_place_double_slab"],
                    "minecraft:selection_box": {
                        "origin": [-8, 0, -8],
                        "size": [16, 8, 16]
                    }
                },
                "condition": "q.block_state('minecraft:vertical_half') == 'bottom' && !q.block_state('wiki:is_double')"
            },
            {
                "components": {
                    "minecraft:collision_box": {
                        "origin": [-8, 8, -8],
                        "size": [16, 8, 16]
                    },
                    "minecraft:custom_components": ["adk-lib:before_on_player_place_double_slab"],
                    "minecraft:selection_box": {
                        "origin": [-8, 8, -8],
                        "size": [16, 8, 16]
                    }
                },
                "condition": "q.block_state('minecraft:vertical_half') == 'top' && !q.block_state('wiki:is_double')"
            },
            {
                "components": {
                    "minecraft:loot": "loot_tables/wiki/blocks/honeycomb_bricks_slab.json"
                },
                "condition": "q.block_state('wiki:is_double')"
            }
        ]
    }
}
```

## Geometry

This will be the geometry used for your custom slabs.

<Spoiler title="Geometry JSON">
  
<CodeHeader>RP/models/blocks/slab.geo.json</CodeHeader>

```json
{
    "format_version": "1.21.0",
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
                    "name": "root",
                    "pivot": [0, 0, 0]
                },
                {
                    "name": "bottom",
                    "parent": "root",
                    "pivot": [0, 0, 0],
                    "cubes": [
                        {
                            "origin": [-8, 0, -8],
                            "size": [16, 8, 16],
                            "uv": {
                                "north": { "uv": [0, 8], "uv_size": [16, 8] },
                                "east": { "uv": [0, 8], "uv_size": [16, 8] },
                                "south": { "uv": [0, 8], "uv_size": [16, 8] },
                                "west": { "uv": [0, 8], "uv_size": [16, 8] },
                                "up": { "uv": [16, 16], "uv_size": [-16, -16] },
                                "down": { "uv": [16, 16], "uv_size": [-16, -16] }
                            }
                        }
                    ]
                },
                {
                    "name": "top",
                    "parent": "root",
                    "pivot": [0, 0, 0],
                    "cubes": [
                        {
                            "origin": [-8, 8, -8],
                            "size": [16, 8, 16],
                            "uv": {
                                "north": { "uv": [0, 8], "uv_size": [16, 8] },
                                "east": { "uv": [0, 8], "uv_size": [16, 8] },
                                "south": { "uv": [0, 8], "uv_size": [16, 8] },
                                "west": { "uv": [0, 8], "uv_size": [16, 8] },
                                "up": { "uv": [16, 16], "uv_size": [-16, -16] },
                                "down": { "uv": [16, 16], "uv_size": [-16, -16] }
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
