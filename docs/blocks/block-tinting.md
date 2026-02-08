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

## Static Tinting

In the [terrain atlas file](/concepts/texture-atlases), the following parameters can be used on a texture to tint it in two different ways:

-   [`tint_color`](/concepts/texture-atlases#tint-color) applies a basic multiply tint to a texture.
-   [`overlay_color`](/concepts/texture-atlases#overlay-color) applies a tint to a texture, using the alpha channel of the texture to determine tint intensity.

<CodeHeader>RP/textures/terrain_texture.json</CodeHeader>

```json
{
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

## Tint Methods

Tint methods can be used to tint a block based on the biome it is placed in.

### Texture Tinting

Tinting is applied to textures by specifying the `tint_method` parameter for the relevant [material instance](/blocks/block-components#material-instances).
Different material instances of a block can use different tint methods.
When the block is an item, textures will be tinted as if the block were placed in a plains biome.

Similarly to the static texture tinting mentioned previously, tint methods can be applied to textures in two different ways:

-   If `alpha_masked_tint` is set to `false`{lang=json} (default), each color channel of the texture will be multiplied by the color of the tint.
    -   This is equivalent to the [`tint_color`](/concepts/texture-atlases#tint-color) parameter in texture atlas files.
-   If `alpha_masked_tint` is set to `true`{lang=json}, the alpha channel of the texture is not multiplied and is instead used to determine the intensity of the tint.
    -   This can be used to restrict the tint to certain pixels in a texture.
    -   This results in the texture becoming opaque.
    -   This is equivalent to the [`overlay_color`](/concepts/texture-atlases#overlay-color) parameter in texture atlas files.

Here's how the material instances of a grass block would look:

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:material_instances": {
    "*": {
        "texture": "wiki:custom_grass_side", // The dirt pixels would have an alpha value of 0, making them unaffected by the green tint
        "tint_method": "grass",
        "alpha_masked_tint": true
    },
    "down": {
        "texture": "wiki:custom_dirt"
    },
    "up": {
        "texture": "wiki:custom_grass_top",
        "tint_method": "grass"
    }
}
```

### Map Color Tinting

If your texture has tinting applied, the chances are, you'll want maps to display your block with that tint too.

Tint methods can be applied to the block's map color, not just its textures!

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:map_color": {
    "color": "#ffffff",
    "tint_method": "grass"
}
```

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
