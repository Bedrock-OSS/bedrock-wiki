---
title: Custom Glass
description: This page will show you how to use material instances to allow texture translucency on full blocks.
category: Vanilla Re-Creations
tags:
    - beginner
    - easy
license: true
mentions:
    - Eko-byte
    - QuazChick
    - SmokeyStack
---

:::tip FORMAT VERSION `1.21.110`
This example requires basic knowledge of blocks to understand.
Check out the [blocks guide](/blocks/blocks-intro) before starting.
:::

Making glass blocks may seem like a simple task, however when you first try your block may appear opaque.
This page will show you how to use [material instances](/blocks/block-components#material-instances) to allow texture translucency and [culling rules](/blocks/block-culling) to hide unwanted block faces.

By the end you should be able to create something like this!

![A collection of custom glass blocks](/assets/images/blocks/custom-glass-blocks/showcase.png)

## Block Model

[Vanilla block models](/blocks/vanilla-block-models) cannot have culling rules applied.
Therefore, we need to create our own full block model in order for our glass to appear correctly.

<Spoiler title="Custom Glass Model JSON">

<CodeHeader>RP/models/blocks/custom_glass.geo.json</CodeHeader>

```json
{
    "format_version": "1.21.110",
    "minecraft:geometry": [
        {
            "description": {
                "identifier": "geometry.custom_glass",
                "texture_width": 16,
                "texture_height": 16
            },
            "bones": [
                {
                    "name": "glass",
                    "pivot": [0, 0, 0],
                    "cubes": [
                        {
                            "origin": [-8, 0, -8],
                            "size": [16, 16, 16],
                            "uv": {
                                "north": { "uv": [0, 0], "uv_size": [16, 16] },
                                "east": { "uv": [0, 0], "uv_size": [16, 16] },
                                "south": { "uv": [0, 0], "uv_size": [16, 16] },
                                "west": { "uv": [0, 0], "uv_size": [16, 16] },
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

## Initial Block JSON

<CodeHeader>BP/blocks/custom_glass.json</CodeHeader>

```json
{
    "format_version": "1.21.110",
    "minecraft:block": {
        "description": {
            "identifier": "wiki:custom_glass",
            "menu_category": {
                "category": "construction",
                "group": "minecraft:itemGroup.name.glass"
            }
        },
        "components": {
            "minecraft:light_dampening": 0, // Don't block any light (this is set to 15 for Tinted Glass)
            "minecraft:loot": "loot_tables/empty.json", // Don't drop without Silk Touch
            "minecraft:geometry": {
                "identifier": "geometry.custom_glass" // A custom full block model that we can apply culling to later
            },
            "minecraft:material_instances": {
                "*": {
                    "texture": "wiki:custom_glass", // Texture shortname defined in terrain_texture.json
                    "render_method": "blend" // Allow translucency
                }
            }
        }
    }
}
```

## Applying Sounds

<CodeHeader>RP/blocks.json</CodeHeader>

```json
{
    "format_version": "1.21.40",
    "wiki:custom_glass": {
        "sound": "glass"
    }
}
```

## Glass Block Culling

Currently, our custom glass doesn't have any culling applied.

This means that, when multiple glass blocks are next to each other, there will be faces separating them:

![A collection of custom glass blocks without culling](/assets/images/blocks/custom-glass-blocks/without_culling.png)

### Block Culling JSON

<Spoiler title="Custom Glass Culling Rules JSON">

<CodeHeader>RP/block_culling/custom_glass.json</CodeHeader>

```json
{
    "format_version": "1.21.80",
    "minecraft:block_culling_rules": {
        "description": {
            "identifier": "wiki:culling.custom_glass"
        },
        "rules": [
            {
                "condition": "same_block",
                "direction": "down",
                "geometry_part": {
                    "bone": "glass",
                    "cube": 0,
                    "face": "down"
                }
            },
            {
                "condition": "same_block",
                "direction": "up",
                "geometry_part": {
                    "bone": "glass",
                    "cube": 0,
                    "face": "up"
                }
            },
            {
                "condition": "same_block",
                "direction": "north",
                "geometry_part": {
                    "bone": "glass",
                    "cube": 0,
                    "face": "north"
                }
            },
            {
                "condition": "same_block",
                "direction": "south",
                "geometry_part": {
                    "bone": "glass",
                    "cube": 0,
                    "face": "south"
                }
            },
            {
                "condition": "same_block",
                "direction": "west",
                "geometry_part": {
                    "bone": "glass",
                    "cube": 0,
                    "face": "west"
                }
            },
            {
                "condition": "same_block",
                "direction": "east",
                "geometry_part": {
                    "bone": "glass",
                    "cube": 0,
                    "face": "east"
                }
            }
        ]
    }
}
```

</Spoiler>

### Applying Culling Rules

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:geometry": {
    "identifier": "geometry.custom_glass",
    "culling": "wiki:culling.custom_glass"
}
```
