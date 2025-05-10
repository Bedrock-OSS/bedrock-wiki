---
title: Block Tinting
description: Learn how to apply a color tint to your block's texture and map color.
category: Visuals
tags:
    - easy
license: true
mentions:
    - QuazChick
---

## Tinting Textures

### Atlas Tinting

In the [terrain atlas file](/concepts/texture-atlases), the following parameters can be used on a texture to tint it in two different ways:

-   [`tint_color`](/concepts/texture-atlases#tint-color) applies a basic multiply tint to a texture.
-   [`overlay_color`](/concepts/texture-atlases#overlay-color) applies a tint to a texture, using the alpha channel of the texture to determine tint intensity.

<CodeHeader>RP/textures/terrain_texture.json</CodeHeader>

```json
{
    "texture_name": "atlas.terrain",
    "texture_data": {
        "wiki:tinted_texture": {
            "textures": {
                "path": "textures/blocks/untinted_texture",
                "tint_color": "#ff5522" // Tints the texture orange
            }
        }
    }
}
```

### Using Tint Methods

[Tint methods](#list-of-tint-methods) can be used to tint the texture of a block based on the biome it is placed in.

Tinting is applied by specifying the `tint_method` parameter for the [material instance](/blocks/block-components#material-instances) with the texture that should be tinted.

Different material instances of a block can use different tint methods.

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:material_instances": {
    "*": {
        "texture": "wiki:grey_texture",
        "tint_method": "grass"
    }
}
```

## Tinting Map Color

If your texture has tinting applied, the chances are, you'll want maps to display your block with that tint too.

Tint methods can be applied to the block's map color, not just its textures!

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:map_color": {
    "color": "#ffffff",
    "tint_method": "grass"
}
```

## Tint Methods

Tint methods can be used to tint a block based on the biome it is placed in.
Most tint methods use colormaps (found in the `RP/textures/colormap` folder) to determine tint color.

However, an exception to this is the `water` tint method, which uses the `surface_color` defined in the `minecraft:water_appearance` component of client biome files.

### List of Tint Methods

<Table data="tint_methods.json" />

<style>
.color-preview {
    display: inline-grid;
    place-items: center;
    margin-block: 0.5em;
    width: 64px; 
    height: 64px;
    border: var(--border);
    border-radius: var(--border-radius);
    font-family: monospace;
    color: #ffffff;
}
</style>
