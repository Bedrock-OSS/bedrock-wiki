---
title: Texture Variation
description: Block texture variation is when a block type can have multiple textures that are randomly applied to the block based on its position in the world.
category: Tutorials
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

:::warning MATERIAL INSTANCES
The [material instances](/blocks/block-components#material-instances) component does not support texture variation. To apply variated textures, you must not have the [geometry](/blocks/block-components#geometry) component applied to your block and textures must be referenced in `RP/blocks.json` instead.
:::

Block texture variation is when a block type can have multiple textures that are randomly applied to the block based on its position in the world. This is useful for blocks such as dirt or grass, where some blocks may have slight variations, such as small rocks, and others don't.

**Issues:**

-   Variations referencing texture set files do not use the defined heightmap, MER or normal map files ([MCPE-126617](https://bugs.mojang.com/browse/MCPE-126617)).

## Applying Texture Variation

To enable texture variations, create a `terrain_texture.json` file in your resource pack's `textures` folder.

This file contains a list of block textures. Variated block textures have a `variation` parameter which is an array of the different textures that will be randomly displayed on the block. Through use of the `weight` parameter, certain texture variations can be made more common than others ([see here](#weighted-texture-variation)).

This is an example of how to create 3 texture variations for the vanilla dirt block:

-   Create or modify three dirt textures, name them `dirt0.png`, `dirt1.png`, and `dirt2.png`.
-   Copy the `dirt0.png`, `dirt1.png`, and `dirt2.png` to the location noted in the path variable. This could contain additional folders if you want to be orderly.
-   Add the following to dirt's texture entry:



<CodeHeader>RP/textures/terrain_texture.json</CodeHeader>

```json
{
  "texture_name": "atlas.terrain",
  "resource_pack_name": "wiki", // ID for your resource pack
  "num_mip_levels": 4, // Quality of texture when viewed from a distance or at an angle
  "padding": 8, // Prevent textures from visually overflowing into each other
  "texture_data": {
    "dirt": {
      "textures": {
        "variations": [
          { "path": "textures/blocks/dirt0" },
          { "path": "textures/blocks/dirt1" },
          { "path": "textures/blocks/dirt2" }
        ]
      }
    }
  }
}
```


## Weighted Texture Variation

After using the example above, you might want to adjust the weights, edit the `terrain_textures.json` to include a weight field as shown below.

To calculate how likely a texture variation is, add all of the weights together (in this case 70 + 20 + 10 = 100) and divide the weight by this total. For example, the probability of the `dirt0` variation being chosen is 70 &div; 100, so 70% of positions in the world will display `dirt0` if dirt is placed there.

<CodeHeader>RP/textures/terrain_texture.json</CodeHeader>

```json
{
  "texture_name": "atlas.terrain",
  "resource_pack_name": "wiki", // ID for your resource pack
  "padding": 8, // Prevent textures from visually overflowing into each other
  "num_mip_levels": 4, // Quality of texture when viewed from a distance or at an angle
  "texture_data": {
    "dirt": {
      "textures": {
        "variations": [
          { "path": "textures/blocks/dirt0", "weight": 70 },
          { "path": "textures/blocks/dirt1", "weight": 20 },
          { "path": "textures/blocks/dirt2", "weight": 10 }
        ]
      }
    }
  }
}
```