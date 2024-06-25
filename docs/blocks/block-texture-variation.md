---
title: Texture Variation
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

Block texture variation is when a single block can have multiple textures. This is useful for blocks such as dirt or grass, where some blocks may have slight variations such as small rocks and others don't.

To enable texture variations, create a `terrain_texture.json` file in the textures folder. The `terrain_texture.json` in the block definition of the texture should be set to a dictionary with a variation key, and the variation key is an array of dictionaries that must contain a path key pointing to the texture file and may contain a weight to control how often the textures show up.

## Applying Texture Variation

This is an example of how to create texture variations for the dirt block with three images:

-   Create a `textures/terrain_texture.json` file in the resource pack
-   In the JSON file, you need to define the blocks that have variation, as shown below

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
          { "path": "textures/blocks/dirt0" },
          { "path": "textures/blocks/dirt1" },
          { "path": "textures/blocks/dirt2" }
        ]
      }
    }
  }
}
```

-   Create or modify three dirt textures, name them `dirt0.png`, `dirt1.png`, and `dirt2.png`
-   Copy the `dirt0.png`, `dirt1.png`, and `dirt2.png` to the location noted in the path variable. This could contain additional folders if you want to be orderly.

## Weighted Texture Variation

After using the example above, you might want to adjust the weights, edit the `terrain_textures.json` to include a weight field as shown below.

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

Notes:

-   This does appear to grab the texture set file. However, the texture set files do not seem to grasp the MER or regular file defined in the texture set.
    -- [Bug Report](https://bugs.mojang.com/browse/MCPE-126617)
