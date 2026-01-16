---
title: Block Texture Variation
description: Block texture variation is when a block type can have multiple textures that are randomly applied to the block based on its position in the world.
category: Visuals
tags:
    - intermediate
mentions:
    - SirLich
    - solvedDev
    - Hatchibombotar
    - SmokeyStack
    - MedicalJewel105
    - QuazChick
---

:::tip FORMAT VERSION 1.21.130
When using texture variation with the [material instances](/blocks/block-components#material-instances) component, ensure that the `format_version` of your block JSON is 1.21.110 or higher.
:::

Block texture variation is when a block type can have multiple textures that are randomly applied to the block based on its position in the world.
This is useful for blocks such as gravel or grass, where some blocks may have slight variations, such as small rocks, and others don't.

**Issues:**

-   Variations referencing texture set files do not use the defined heightmap, MER or normal map files ([MCPE-126617](https://bugs.mojang.com/browse/MCPE-126617)).

## Applying Texture Variation

To enable texture variations, create a `terrain_texture.json` file in your resource pack's `textures` folder.

This file contains a list of block textures to be included in the terrain [texture atlas](/concepts/texture-atlases).
Variated atlas entries have a `variations` parameter which is an array of the different textures that will be randomly displayed on the block.
Through use of the `weight` parameter, certain texture variations can be made more common than others ([see here](#weighted-texture-variation)).

This is an example of how to create 3 texture variations for the vanilla gravel block:

-   Create or modify three gravel textures, name them `gravel0.png`, `gravel1.png`, and `gravel2.png`.
-   Copy the `gravel0.png`, `gravel1.png` and `gravel2.png` files to the location specified by the `path` parameter.
    This could contain additional folders if you want to be orderly.
-   Add the following to the `gravel` texture atlas entry:

<CodeHeader>RP/textures/terrain_texture.json</CodeHeader>

```json
{
    "texture_data": {
        "gravel": {
            "textures": {
                "variations": [
                    { "path": "textures/blocks/gravel0" },
                    { "path": "textures/blocks/gravel1" },
                    { "path": "textures/blocks/gravel2" }
                ]
            }
        }
    }
}
```

## Weighted Texture Variation

After using the example above, you might want to adjust the weights, edit the `terrain_texture.json` to include a weight field as shown below.

To calculate how likely a texture variation is, add all of the weights together (in this case 70 + 20 + 10 = 100) and divide the weight by this total. For example, the probability of the `gravel0` variation being chosen is 70 &div; 100, so 70% of positions in the world will display `gravel0` if gravel is placed there.

<CodeHeader>RP/textures/terrain_texture.json</CodeHeader>

```json
{
    "texture_data": {
        "gravel": {
            "textures": {
                "variations": [
                    { "path": "textures/blocks/gravel0", "weight": 70 },
                    { "path": "textures/blocks/gravel1", "weight": 20 },
                    { "path": "textures/blocks/gravel2", "weight": 10 }
                ]
            }
        }
    }
}
```
