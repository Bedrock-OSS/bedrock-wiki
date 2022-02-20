---
title: Flipbook Textures
tags:
    - intermediate
mentions:
    - MedicalJewel105
---

## What this page covers

In this tutorial you will learn:

-   How to apply flipbook textures to a block.
-   Which values you can apply in flipbook_textures.json and what they do.

## Beginning

Flipbook textures are animated textures. Blocks like fire, water, lava and magma use them. You can use animated texture for your block too!
For the first time let's use magma's animated texture.
You can simply apply animated magma's texture to your block by changing `texture` value to one, defined in `Vanilla_RP/textures/terrain_texture.json`:

```json
"magma": {
    "textures": "textures/blocks/magma"
}
```

<CodeHeader>BP/blocks/flipbook_block.json</CodeHeader>

```json
{
	"format_version": "1.17.20",
	"minecraft:block": {
		"description": {
			"identifier": "wiki:flipbook_block"
		},
		"components": {
			"minecraft:destroy_time": 7,
			"minecraft:unit_cube": {},
			"minecraft:block_light_absorption": 15,
			"minecraft:block_light_emission": 0,
			"minecraft:creative_category": {
				"category": "construction",
				"group": "itemGroup.name.construction"
			},
			"minecraft:material_instances": {
				"*": {
					"texture": "magma", // Add it here.
					"render_method": "opaque"
				}
			}
		}
	}
}
```

![](/assets/images/concepts/flipbook/animated_texture_1.gif)

Now it has animated texture!

## How it works

After making block have animated texture, it is time to figure out how it all works.

1. Minecraft takes name and path to texture defined in `terrain_texture.json`

<CodeHeader>RP/textures/terrain_texture.json</CodeHeader>

```json
{
    "num_mip_levels" : 4,
    "padding" : 8,
    "resource_pack_name" : "vanilla",
    "texture_data" : {
        "magma": {
            "textures": "textures/blocks/magma"
        }
    }
}
```

2. Minecraft searches looks into `flipbook_textures.json` aiming to find animation parameters for this name (`magma`)

<CodeHeader>RP/textures/flipbook_textures.json</CodeHeader>

```json
[
    {
        "flipbook_texture": "textures/blocks/magma",
        "atlas_tile": "magma",
        "ticks_per_frame": 10
    }
]
```

`"atlas_tile"` here adds animation parameters to `magma` name, defined in terrain_texture file.

3. Minecraft uses this animated texture for blocks who have `magma` as texture.

This is the way how it works.

## What are the components?

While looking up for something in vanilla flipbook texture file, you can notice some components.

Here is explanation for them:

| Component          | Value   | Meaning                                                                  |
| ------------------ | ------- | ------------------------------------------------------------------------ |
| flipbook_texture   | string  | Path to texture.                                                         |
| atlas_tile         | string  | The shortname defined in the terrain_textures.json.                      |
| atlas_index        | integer | The index of the texture array inside the definition of that shortname.* |
| atlas_tile_variant | integer | Seems to do same as `atlas_index`                                        |
| ticks_per_frame    | integer | How fast frames should be changed. 20 ticks = 1 second.                  |
| frames             | list    | List with numbers of frames which defines their order.                   |
| replicate          | integer | Sets the size of pixels. Default: 1.**                                   |
| blend_frames       | boolean | Defines should frames transition be smooth or not. Default: true.        |

\* `atlas_index` and `atlas_tile_variant`

These components are for defining texture variant (if you have it).

Example:

<CodeHeader>RP/textures/terrain_texture.json#texture_data</CodeHeader>

```json
"dirt" : {
    "textures" : [ 
        "textures/blocks/dirt", 
        "textures/blocks/coarse_dirt"
    ]
}
```

Then you need can add `"atlas_index": 1` or `"atlas_tile_variant": 1` to have animated texture for the second path.

\*\* `replicate`

Changes size of the pixels.

Examples:

-   replicate < 0 breaks animation.
-   replicate 0 breaks animation and texture.
-   replicate 1 changes nothing.
-   replicate 2 makes pixels 2x2 size:

![](/assets/images/concepts/flipbook/animated_texture_2.gif)

Now you can modify vanilla flipbook textures or create your own ones.