---
title: Intro to Block Visuals
description: Learn the fundamentals of block visuals, including textures, geometry, material instances, render methods and shading.
category: Sound & Visuals
nav_order: 1
tags:
    - guide
    - beginner
license: true
mentions:
    - QuazChick
---

## Textures

<WikiImage
    src="texture_atlas.png"
    caption="A section of the terrain texture atlas."
    class="terrain-texture-atlas-float"
    width="336"
    pixelated
/>

To reduce memory usage, all block textures are combined to form the terrain [texture atlas](/concepts/texture-atlases) (`atlas.terrain`), a single large texture that contains every block texture defined in `RP/textures/terrain_texture.json` from every activated resource pack.

This system also imposes some restrictions on block textures that you will need to abide by:

-   Textures should be 16×16 pixels (assuming the textures are not high-resolution)
    -   If the entire texture of your block will not fit into a 16×16 space, you should apply multiple 16×16 textures to your block instead.
    -   This is because the destruction cracks displayed when mining a block span across the entire texture size, meaning that creating larger entity-like textures will result in the destruction cracks being stretched.
    -   Textures that are smaller than 16×16 will be stretched so that they are at least 16×16 pixels in size.
    -   There is no requirement for texture dimensions to be powers of 2.
-   Non-animated textures must not be taller than they are wide.
    -   If a texture's height is larger than its width, the texture will be treated as multiple frames of an animation, cutting the bottom of the texture off to create a square frame.
    -   Textures that are wider than they are tall will be added to the atlas correctly as a non-square texture.
    -   If you would like to create an animated texture, you'll need to make use of [flipbook textures](/blocks/flipbook-textures).

### Adding Atlas Textures

To add a block texture to the terrain texture atlas, you'll need a `terrain_texture.json` file in the `textures` folder of your resource pack.

Within this file, you can create a new texture entry inside the `texture_data` field.
The key of this entry will be referred to as the texture "shortname" and should have a namespace.
We'll be using the `wiki` namespace but you should choose something that uniquely identifies your add-on.

<CodeHeader>RP/textures/terrain_texture.json</CodeHeader>

```json
{
    "texture_data": {
        "wiki:custom_texture": {
            "textures": "textures/wiki/blocks/custom_texture"
        },
        "wiki:another_texture": {
            "textures": "textures/wiki/blocks/another_texture"
        }
    }
}
```

For most textures, all you need to do is set the `textures` parameter to the file path of the texture, omitting the file extension.
If you would like to create more advanced [animated](/blocks/flipbook-textures), [tinted](/blocks/block-tinting) or [variated](/blocks/block-texture-variation) textures, additional setup is needed which is covered in their own pages.

:::tip OTHER ATLAS FIELDS
You may see some resource packs specify other fields such as [`num_mip_levels`](/concepts/texture-atlases#mipmapping) at the top level of this file.
However, doing so is redundant as all of these fields are already included in the vanilla resource pack.
Unless you understand what you're doing and would like to override the vanilla values for these parameters, it's best to leave them out.
:::

## Geometry

Block geometry determines the visual shape of a block which textures are applied onto.
You can either choose to [make a custom model](/blocks/block-models) for your block, or use one of the built-in [vanilla block models](/blocks/vanilla-block-models).

Geometry can be applied to a block using the [`minecraft:geometry`](/blocks/block-components#geometry) component in the block JSON file.

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:geometry": {
    "identifier": "geometry.honey_jar"
}
```

### Conditional Bone Visibility

The groups of cubes in your model (known as bones) can be conditionally shown and hidden based on the block's [permutation](/blocks/block-permutations) by making use of the [`bone_visibility`](/blocks/block-components#geometry-object) parameter.

For example, you could hide the `lid` bone on a custom honey jar block based on a boolean block state.

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:geometry": {
    "identifier": "geometry.honey_jar",
    "bone_visibility": {
        "lid": "q.block_state('wiki:has_lid')"
    }
}
```

### Block Culling

Block culling rules allow you to remove parts of a model based on the surrounding blocks.
This can help to improve the game's performance as resources aren't wasted on unnecessarily rendering hidden parts of your block.
Learn more about block culling [here](/blocks/block-culling)!

## Material Instances

Material instances are rendering configurations that can be applied to different parts of a block geometry.
They control the render method, shading, texture and tinting that is applied to the parts of the geometry that the material instance is applied to.

You can define the material instances that a block has by using the [`minecraft:material_instances`](/blocks/block-components#material-instances) component.

Here, the `texture` parameter must reference a texture atlas shortname from `RP/textures/terrain_texture.json`.

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:material_instances": {
    "*": {
        "texture": "wiki:custom_log",
        "render_method": "opaque" // Must match other instances
    },
    // Custom instance name
    "end": {
        "texture": "wiki:custom_log_end",
        "render_method": "opaque" // Must match other instances
    },
    "up": "end", // References the "end" instance
    "down": "end" // References the "end" instance
}
```

Material instances are assigned to each face of each cube with the following priority:

1.  The `material_instance` defined by the UV in the geometry file.
2.  An instance with the same name as the face (`down`, `up`, `north`, etc.).
3.  The `*` instance is applied if neither of the previous material instances exist.

### Built-In Material Instances

There are seven built-in material instances that do not need to be explicitly applied in the block geometry in order to function.

This includes the default `*` instance as well as a material instance for each face.
The `down`, `up`, `north`, `south`, `west` and `east` instances are automatically associated with the relevant faces of cubes.

By default, [destruction particles](/blocks/block-components#destruction-particles) will display the texture of the `down` material instance (or `*` if not specified).

### Custom Material Instances

Custom instances may be referenced by built-in instances (or other custom instances) from within the `minecraft:material_instances` component to assign the same rendering configuration to multiple material instances.
Alternatively, they can be assigned to faces of cubes in the geometry file.
You can find a demonstration [here](/blocks/block-models#changing-material-instances)!

## Render Methods

The render method of a block determines the underlying shader material that is used to render it.
All material instances of a block must use the same render method.

<Table data="render_methods.json" />

**_Transparency_** — Whether fully see-through pixels are supported.

**_Translucency_** — Whether partially see-through pixels are supported.

**_Backface Visibility_** — Whether faces are visible from behind.

**_Far Visibility_** — Whether faces that are further than half the render distance are rendered.

### Distance-Based Render Methods

<Table data="distance_based_render_methods.json" />

**_Near Appearance_** — The render method used before reaching half the render distance.

**_Far Appearance_** — The render method used after reaching half the render distance.

## Shading

By default, blocks that do not [emit light](/blocks/block-components#light-emission) will have both [ambient occlusion](#ambient-occlusion) and [face dimming](#face-dimming), whereas those that emit light will have no shading applied.

<WikiImage
    src="shading/none.png"
    caption="Shading disabled"
    width="300"
    style="margin-right: 1em"
/>
<WikiImage
    src="shading/ambient_occlusion.png"
    caption="Ambient occlusion (smooth lighting)"
    width="300"
    style="margin-right: 1em"
/>
<WikiImage
    src="shading/face_dimming.png"
    caption="Face dimming"
    width="300"
    style="margin-right: 1em"
/>
<WikiImage
    src="shading/ambient_occlusion_with_face_dimming.png"
    caption="Ambient occlusion with face dimming"
    width="300"
/>

### Ambient Occlusion

:::tip SMOOTH LIGHTING
This type of shading is only displayed to players who have enabled "Smooth Lighting" in video settings.
:::

Ambient occlusion refers to the shadows cast onto blocks that are placed next to each other.
Most full blocks will cast ambient occlusion shadows onto surrounding blocks.
Disabling ambient occlusion on a block will disable these shadows, as well as disabling the smoothing of light across the block.

The intensity of ambient occlusion can be configured by defining the `ambient_occlusion` [material instance](#material-instances) parameter, with higher intensity resulting in darker shadows.

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:material_instances": {
    "*": {
        "texture": "wiki:custom_block",
        "ambient_occlusion": 0.0
    }
}
```

A value of `0.0`{lang=json} results in ambient occlusion being completely disabled whereas a value of `1.0`{lang=json} results in ambient occlusion with the regular intensity.
A value of `10.0`{lang=js} represents the maximum allowed ambient occlusion intensity.

### Face Dimming

Face dimming causes faces of a block to be darkened based on the direction they face.
This type of shading can be enabled or disabled by defining the `face_dimming` [material instance](#material-instances) parameter.

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:material_instances": {
    "*": {
        "texture": "wiki:custom_block",
        "face_dimming": false
    }
}
```

## Vibrant Visuals

-   MER(S) textures can be used to control the [physically based rendering](https://learn.microsoft.com/minecraft/creator/documents/vibrantvisuals/pbroverview) properties of blocks, changing how lighting affects blocks.
-   Shading from directional lights (such as the sun) and point lights will affect blocks in addition to their [ambient occlusion](#ambient-occlusion) and [face dimming](#face-dimming) configuration.
-   Shadows are not cast by blocks using the `blend` [render method](#render-methods), such as glass and frogspawn.

## Additional Factors

Sometimes, functionality that is not purely related to visuals can affect the way a block looks.

-   Block geometry may be altered by the [random offset](/blocks/block-components#random-offset) and [transformation](/blocks/block-components#transformation) components.
-   The held item of a block will look emissive if the default block permutation [emits light](/blocks/block-components#light-emission).

## Legacy Block Visuals (blocks.json) {#legacy-block-visuals}

<Tag name="deprecated" />

If you've been looking at existing resource packs, such as those built into vanilla, you might have seen block texture configuration inside the `RP/blocks.json` file.
This system is based on hardcoded [block shapes](/blocks/block-shapes) rather than data-driven geometry and has extremely limited support for custom blocks.

Unless you're modifying vanilla blocks, you should only ever be using `blocks.json` to define [block sounds](/blocks/block-sounds) via the `sound` parameter.

<style>
@media (min-width: 1200px) {
    .terrain-texture-atlas-float {
        float: right;
        margin-left: 1em;
    }
}
</style>
