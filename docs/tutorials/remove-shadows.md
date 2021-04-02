---
layout: page
title: Remove Entity Shadows
parent: Tutorials
---

# Removing Entity Shadows

<details id="toc" open markdown="block">
  <summary>
    Table of contents
  </summary>
  {: .text-delta }
1. TOC
{:toc}
</details>

Intermediate
{: .label .label-yellow }

There are quite a few ways to remove shadows from entities. This document will cover some of the best ways.

## Very small Collision Box

Make the size of the collision component very, very small (does 0, 0 work?) this will make it impossible to interact/hit the entity, but it will make the shadow disappear!

But you can also add the custom hit test component, to at least make it possible to hit the entity, you will not be abble to interact wih it, but at least you can hit it.

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

## using runtime identifier

Some entities don't have shadows. By using the runtime identifier of these entities, we can remove the shadows. The downside is taking on that entities hard-coded behaviors. See the [runtime identifers document for more information](/documentation/runtime-identifier)

## Remove Entity Shadows for ALL Entities

{% include info.html
  contents='Can crash your game, or get you rejected on Marketplace!'
%}

Change these lines in the `shadows.material` file under the Resource Pack / materials folder. 

**NOTE:** This folder is NOT included in the vanilla RP Pack examples and must be exported from a APK files or added by hand.

**NOTE:** This has not been tested for blocks and has only been verified for entities. If you find it works on blocks too please let us know so we can add that in.

## Working shadow code: Shadows for ALL entities:
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

## Disabled shadow code: No Shadows for ALL entities: 
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

## Vanilla shadow.material file with working shadows

```json
{
  "materials": {
    "version": "1.0.0",

    "shadow_front": {
      "+states": [
        "StencilWrite",
        "DisableColorWrite",
        "DisableDepthWrite",
        "EnableStencilTest"
      ],

      "vertexShader": "shaders/position.vertex",
      "vrGeometryShader": "shaders/position.geometry",
      "fragmentShader": "shaders/flat_white.fragment",

      "frontFace": {
        "stencilFunc": "Always",
        "stencilFailOp": "Keep",
        "stencilDepthFailOp": "Keep",
        "stencilPassOp": "Replace"
      },

      "backFace": {
        "stencilFunc": "Always",
        "stencilFailOp": "Keep",
        "stencilDepthFailOp": "Keep",
        "stencilPassOp": "Replace"
      },

      "stencilRef": 0,
      "stencilReadMask": 255,
      "stencilWriteMask": 1,
      "vertexFields": [
        { "field": "Position" }
      ],
      "msaaSupport": "Both"

    },

    "shadow_back": {
      "+states": [
        "StencilWrite",
        "DisableColorWrite",
        "DisableDepthWrite",
        "InvertCulling",
        "EnableStencilTest"
      ],

      "vertexShader": "shaders/position.vertex",
      "vrGeometryShader": "shaders/position.geometry",
      "fragmentShader": "shaders/flat_white.fragment",

      "frontFace": {
        "stencilFunc": "Always",
        "stencilFailOp": "Keep",
        "stencilDepthFailOp": "Keep",
        "stencilPassOp": "Replace"
      },

      "backFace": {
        "stencilFunc": "Always",
        "stencilFailOp": "Keep",
        "stencilDepthFailOp": "Keep",
        "stencilPassOp": "Replace"
      },

      "stencilRef": 1,
      "stencilReadMask": 255,
      "stencilWriteMask": 1,

      "vertexFields": [
        { "field": "Position" }
      ],
      "msaaSupport": "Both"

    },

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

      "backFace": {
        "stencilFunc": "Equal",
        "stencilPass": "Replace"
      },

      "stencilRef": 1,
      "stencilReadMask": 255,
      "stencilWriteMask": 0,

      "vertexFields": [
        { "field": "Position" },
        { "field": "Color" }
      ],
      "msaaSupport": "Both"

    },

    "water_hole": {
      "+states": [
        "DisableColorWrite"
      ],
      "vertexFields": [
        { "field": "Position" },
        { "field": "Color" },
        { "field": "UV0" }
      ],

      "vertexShader": "shaders/position.vertex",
      "vrGeometryShader": "shaders/position.geometry",
      "fragmentShader": "shaders/flat_white.fragment",

      "msaaSupport": "Both"
    }
  }
}
```

## shadow.material with NO Shadows

```json
{
  "materials": {
    "version": "1.0.0",

    "shadow_front": {
      "+states": [
        "StencilWrite",
        "DisableColorWrite",
        "DisableDepthWrite",
        "EnableStencilTest"
      ],

      "vertexShader": "",
      "vrGeometryShader": "",
      "fragmentShader": "",

      "frontFace": {
        "stencilFunc": "Always",
        "stencilFailOp": "Keep",
        "stencilDepthFailOp": "Keep",
        "stencilPassOp": "Replace"
      },

      "backFace": {
        "stencilFunc": "Always",
        "stencilFailOp": "Keep",
        "stencilDepthFailOp": "Keep",
        "stencilPassOp": "Replace"
      },

      "stencilRef": 0,
      "stencilReadMask": 255,
      "stencilWriteMask": 1,
      "vertexFields": [
        { "field": "Position" }
      ],
      "msaaSupport": "Both"

    },

    "shadow_back": {
      "+states": [
        "StencilWrite",
        "DisableColorWrite",
        "DisableDepthWrite",
        "InvertCulling",
        "EnableStencilTest"
      ],

      "vertexShader": "",
      "vrGeometryShader": "",
      "fragmentShader": "",

      "frontFace": {
        "stencilFunc": "Always",
        "stencilFailOp": "Keep",
        "stencilDepthFailOp": "Keep",
        "stencilPassOp": "Replace"
      },

      "backFace": {
        "stencilFunc": "Always",
        "stencilFailOp": "Keep",
        "stencilDepthFailOp": "Keep",
        "stencilPassOp": "Replace"
      },

      "stencilRef": 1,
      "stencilReadMask": 255,
      "stencilWriteMask": 1,

      "vertexFields": [
        { "field": "Position" }
      ],
      "msaaSupport": "Both"

    },

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
      },

      "backFace": {
        "stencilFunc": "Equal",
        "stencilPass": "Replace"
      },

      "stencilRef": 1,
      "stencilReadMask": 255,
      "stencilWriteMask": 0,

      "vertexFields": [
        { "field": "Position" },
        { "field": "Color" }
      ],
      "msaaSupport": "Both"

    },

    "water_hole": {
      "+states": [
        "DisableColorWrite"
      ],
      "vertexFields": [
        { "field": "Position" },
        { "field": "Color" },
        { "field": "UV0" }
      ],

      "vertexShader": "shaders/position.vertex",
      "vrGeometryShader": "shaders/position.geometry",
      "fragmentShader": "shaders/flat_white.fragment",

      "msaaSupport": "Both"
    }
  }
}
```
I hope this helps, if you find other ways to disable shadow please let us know so we can add them.
