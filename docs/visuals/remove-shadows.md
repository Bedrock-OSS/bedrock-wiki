---
title: Remove Entity Shadows
tags:
    - intermediate
---

There are quite a few ways to remove shadows from entities, and nearly all of them have undesirable effects. There is no foolproof way to perfectly remove shadows from specific entities, without causing side effects. 

This document will showcase some of the various ways to remove shadows, and any possible effects from doing this. 

## Small Collision Box

One possibility is to make the size of the collision component very small. This will make it hard to interact/hit the entity, but it will make the shadow disappear!

<CodeHeader></CodeHeader>

```json
"minecraft:collision_box": {
    "width": 0.1,
    "height": 0.1
}

```

You can also add the [custom hit test component](https://bedrock.dev/docs/stable/Entities#minecraft:custom_hit_test). The `custom_hit_test` component will allow you to hit the entity, although you will not be able to interact with it. The `custom_hit_test` will not create a shadow.

<CodeHeader></CodeHeader>

```json
"minecraft:custom_hit_test": {
    "hitboxes": [
        {
            "pivot": [0, 0.5, 0],//This is the position of the hitbox, you can change the X, Y and Z values.
            "width": 0.8,
            "height": 0.7
        }//And you can add many more hitboxes as you want, just copy-paste the hitbox inside the "hitboxes" array.
    ]
}
```

## Teleport underground

If you have a dummy entity (invisible) that you need to interact with, you can telport like `/teleport @x ~ ~-0.01 ~`. This will slightly insert the entity into the ground, and stop shadows from showing.

## Using runtime identifier

Some entities don't have shadows, or very small shadows at least. By using the runtime identifier of these entities, we can remove the shadows. The downside is taking on that entities hard-coded behaviors, which can sometimes be very problematic. See the [runtime identifers document for more information](/entities/runtime-identifier).

## Using Materials

::: error
This methos is no longer support. With the advent of render-dragon, materials like this no longer function. Please do not attempt to use this code in a serious way, and definitely do not attempt it on a marketplace map.
:::

:::warning
 - This folder is NOT included in the vanilla RP Pack examples and must be exported from a APK files or added by hand.
 - This has not been tested for blocks and has only been verified for entities. If you find it works on blocks too please let us know so we can add that in.
:::

<Spoiler title="Removing shadows via Materials.">

Change these lines in the `shadows.material` file under the Resource Pack / materials folder.

#### Working shadow code: Shadows for ALL entities:

<CodeHeader></CodeHeader>

```json
"shadow_overlay": {
      "+states": [
        "DisableDepthTest",
        "DisableCulling",
        "Blending",
        "EnableStencilTest"
      ],

      "vertexShader": "shaders/color.vertex",
      "vrGeometryShader": "shaders/color.geometry",
      "fragmentShader": "shaders/shadow_stencil_overlay.fragment",

      "blendSrc": "DestColor",
      "blendDst": "Zero",

      "frontFace": {
        "stencilFunc": "Equal",
        "stencilPass": "Replace"
      },
```

#### Disabled shadow code: No Shadows for ALL entities:

<CodeHeader></CodeHeader>

```json
 "shadow_overlay": {
      "+states": [
        "DisableDepthTest",
        "DisableCulling",
        "Blending",
        "EnableStencilTest"
      ],

      "vertexShader": "",
      "vrGeometryShader": "",
      "fragmentShader": "",

      "blendSrc": "DestColor",
      "blendDst": "Zero",

      "frontFace": {
        "stencilFunc": "Equal",
        "stencilPass": "Replace"
      }
}
```

<Spoiler>