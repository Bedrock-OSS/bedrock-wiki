---
title: Texture Atlases
description: A texture atlas (also known as a spritesheet) is an image that contains many smaller textures.
tags:
    - intermediate
license: true
mentions:
    - QuazChick
---

A texture atlas (also known as a spritesheet) is an image that contains many smaller textures.
The use of atlases reduces the number of textures that the game loads, which improves performance and reduces the likelihood of reaching the texture limit.
For example, rather than loading each block texture separately, the [terrain texture atlas](#terrain) loads as one large texture.

If an atlas contains too many sub textures, Minecraft will decrease the resolution of textures in the atlas until they all fit.

Below is a section of the vanilla [item texture atlas](#items) which Minecraft generates from entries in the `Vanilla RP/textures/item_texture.json` file.
The full atlas contains many more textures, including custom item textures!

<WikiImage
    alt="A collection of vanilla item textures."
    src="/assets/images/concepts/texture-atlases/item_atlas_sample.png"
    width="496"
    pixelated
/>

:::tip PADDING
Notice the stretched pixels between the book textures? That's called [padding](#padding) and helps to prevent graphical issues!
:::

## List of Atlases

### Banner

`atlas.banner`

-   Contains banner textures, including banner patterns and the Ominous Banner texture.
-   The list of textures included in this atlas cannot be modified.

### Items

`atlas.items`

-   Contains item textures, including equipment slot placeholders, trimmed armor and the shield texture.
-   Textures can be added to this atlas via the `item_texture.json` file.

### Shield

`atlas.shield`

-   Contains shield banner pattern textures.
-   The list of textures included in this atlas cannot be modified.

### Terrain

`atlas.terrain`

-   Contains block textures, including those with flipbook animations.
-   Has mipmapping and padding applied by default.
-   Textures can be added to this atlas via the `terrain_texture.json` file.

## Mipmapping

[Mipmaps](https://en.wikipedia.org/wiki/Mipmap) are used by Minecraft to reduce the resolution of textures as they get further away from the camera. This reduces aliasing of distant textures and may provide some performance benefits.

### Mip Levels

The number of mip levels for a texture atlas is determined by the `num_mip_levels` parameter.

At each mip level, the resolution of the texture is halved.

By default, block textures in `atlas.terrain` have 4 mip levels:

<CodeHeader>Vanilla RP/textures/terrain_texture.json</CodeHeader>

```json
{
    "resource_pack_name": "vanilla",
    "texture_name": "atlas.terrain",
    "num_mip_levels": 4,
    ...
}
```

For a 16&times;16 texture, this would produce textures similar to the following:

<WikiImage
    alt="A 16 by 16 log texture"
    src="/assets/images/concepts/texture-atlases/log_oak_top_1.png"
    width="64"
    pixelated
/>

<WikiImage
    alt="An 8 by 8 log texture"
    src="/assets/images/concepts/texture-atlases/log_oak_top_2.png"
    width="64"
    pixelated
/>

<WikiImage
    alt="A 4 by 4 log texture"
    src="/assets/images/concepts/texture-atlases/log_oak_top_3.png"
    width="64"
    pixelated
/>

<WikiImage
    alt="A 2 by 2 log texture"
    src="/assets/images/concepts/texture-atlases/log_oak_top_4.png"
    width="64"
    pixelated
/>

### Comparison

<WikiImage
    src="/assets/images/concepts/texture-atlases/screenshot_with_mipmapping.jpeg"
    caption="Screenshot of a world with 4 mip levels."
    width="516"
    style="margin-right: 1em"
/>

<WikiImage
    src="/assets/images/concepts/texture-atlases/screenshot_without_mipmapping.jpeg"
    caption="Screenshot of a world without mipmapping."
    width="516"
/>

## Padding

Padding refers to the stretched out area around textures that prevents them from bleeding into each other due to imprecise rendering.

The width of the padding can be adjusted using the `padding` parameter. The value of this parameter must be at least $2^{n-1}$, where $n$ represents `num_mip_levels`. For instance, if an atlas has 6 mip levels, it requires a minimum padding of 32 texels ($2^5$).

By default, there are 8 texels of padding around each block texture:

<WikiImage
    alt="A padded Oak Log texture"
    src="/assets/images/concepts/texture-atlases/log_oak_top_padded.png"
    width="128"
    pixelated
/>

## Textures

An object where each key is a shortname that can be used to reference an area in the texture atlas.

<CodeHeader>Texture Atlas</CodeHeader>

```json
{
    "texture_data": {
        "wiki:texture_shortname": {
            "additive": false, // Optional; default is false
            "textures": [
                {
                    "path": "textures/path/to/texture",
                    "quad": false, // Optional; default is false
                    "tint_color": "#ffffff", // Optional
                    "overlay_color": "#ffffff" // Optional
                }
            ]
        }
    }
}
```

### Path

A string relative to the root folder of the resource pack that points to a file with one of the following extensions:

-   `.texture_set.json` (requires `pbr` capability)
    -   If a texture set is referenced, all included textures (such as `color` and `heightmap`) are added to the atlas.
-   `.tga`
-   `.png`
-   `.jpg`
-   `.jpeg`

The path string must not include the texture's file extension.

Textures that are not square will be stretched to be square when added to the atlas.
Only the first frame of textures containing multiple frames will be added to the atlas.

### Tint Color

#### Vanilla Usage

In vanilla, `tint_color` is used to apply a green tint to the Lily Pad texture.

<WikiImage
    alt="Grey Lily Pad"
    src="/assets/images/concepts/texture-atlases/waterlily.png"
    width="64"
    pixelated
/>

<WikiImage
    alt="Green-tinted Lily Pad"
    src="/assets/images/concepts/texture-atlases/waterlily_tinted.png"
    width="64"
    pixelated
/>

#### Tint Blending

_The following calculations assume that color channel values are floats (0-1)._

-   The color channels of the texel ($r_1$, $g_1$, $b_1$) are multiplied by those of the `tint_color` ($r_2$, $g_2$, $b_2$).
-   The alpha channel of the texel ($a$) is preserved..

$$
\begin{aligned}
R &= r_1 \times r_2 \\
G &= g_1 \times g_2 \\
B &= b_1 \times b_2 \\
A &= a
\end{aligned}
$$

### Overlay Color

This parameter is similar to `tint_color`, but discards the alpha (opacity) channel of the texture and instead uses its value to determine the intensity of the tint.

-   This results in an opaque texture, even if the original texture included transparency.
-   For opaque textures, this parameter produces the same results as `tint_color`.

#### Vanilla Usage

In vanilla, `overlay_color` is used to apply a green tint to part of the Grass Block's side texture, without tinting the dirt texture green too!

Below you can see the original grass side texture, a version of it without an alpha channel (revealing the hidden dirt texture) and a version with `overlay_color` applied.

<WikiImage
    alt="Vanilla grass side texture"
    src="/assets/images/concepts/texture-atlases/grass_side.png"
    width="64"
    pixelated
/>

<WikiImage
    alt="Grass side texture without an alpha channel"
    src="/assets/images/concepts/texture-atlases/grass_side_without_alpha.png"
    width="64"
    pixelated
/>

<WikiImage
    alt="Tinted grass side texture"
    src="/assets/images/concepts/texture-atlases/grass_side_tinted.png"
    width="64"
    pixelated
/>

:::danger TRANSPARENT PIXELS

Many image editors will not save RGB values for pixels with an alpha value of 0.
In order to created untinted areas of a texture, you'll need these values to be saved.

Here's how to ensure that they are saved in GIMP:

![GIMP 'save color values from transparent pixels' export setting.](/assets/images/concepts/texture-atlases/gimp_export_settings.png)

:::

#### Overlay Blending

_The following calculations assume that color channel values are floats (0-1)._

-   The color channels of the texel ($r_1$, $g_1$, $b_1$) are multiplied by those of the `overlay_color` ($r_2$, $g_2$, $b_2$).
-   A portion of the texel's original color is added based on its inverse alpha value ($1 - a$).
-   The alpha channel of the texel ($a$) becomes 1.

$$
\begin{aligned}
R &= r_1 \times r_2 + r_1 \times (1 - a) \\
G &= g_1 \times g_2 + g_1 \times (1 - a) \\
B &= b_1 \times b_2 + b_1 \times (1 - a) \\
A &= 1
\end{aligned}
$$

### Additive

Layers the specified `textures` on top of each other to create a new combined texture.
Translucent texels fully override previous layers.

Overlay color only works when placed in the first `textures` entry and affects all layers.

### Quad

A boolean determining whether only the top left quadrant of the texture should be displayed.

This parameter only changes the area in the atlas covered by this shortname, the entire texture is included in the atlas.

May also be set to a number, where `0` represents `false` and all other numbers represent `true`.

## Additional Parameters

-   `default_leather_color`: HEX String
    -   Determines the default color of leather armor when undyed.
-   `default_leather_horse_armor_color`: HEX String
    -   Determines the default color of leather horse armor when undyed.

<CodeHeader>RP/textures/item_texture.json</CodeHeader>

```json
{
    "default_leather_color": "#ffffff",
    "default_leather_horse_armor_color": "#ffffff"
}
```
