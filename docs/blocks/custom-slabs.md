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
hidden: true
description: Re-creation of vanilla slabs.
---

::: tip FORMAT & MIN ENGINE VERSION `1.21.20`
This tutorial assumes a basic understanding of blocks.
Check out the [blocks guide](/blocks/blocks-intro) before starting.
:::

## Introduction

Making custom slabs is a simple task, but if you find any drawbacks during recreating slabs, this tutorial will help you with it, and you'll be provided with a template for you to use.

## Custom Slab

This will create a vanilla-like custom slab.

<CodeHeader>BP/blocks/custom_slab.json</CodeHeader>

```json
{
    "format_version": "1.20.20",
    "minecraft:block": {
        "description": {
            "identifier": "wiki:honeycomb_bricks_slab",
            "menu_category": {
                "category": "construction",
                "group": "itemGroup.name.slab"
            }
        },
        "components": {
            "minecraft:collision_box": {
                "origin": [-8, 0, -8],
                "size": [16, 8, 16]
                 },
            "minecraft:selection_box": {
                "origin": [-8, 0, -8],
                "size": [16, 8, 16]
                }
            },
            "minecraft:destructible_by_explosion": {
                "explosion_resistance": 30
            },
            "minecraft:destructible_by_mining": {
                "seconds_to_destroy": 2
            },
			"minecraft:geometry": "geometry.slab",
            "minecraft:map_color": [229, 229, 51],
			"minecraft:light_dampening": 0,
			"minecraft:material_instances": {
				"*": {
				    "texture": "honeycomb_bricks",
				    "render_method": "alpha_test"
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
    "format_version": "1.21.20",
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
					"name": "block",
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
