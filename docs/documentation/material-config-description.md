---
title: Material Configuration Description
tags:
    - expert
---

:::warning
Materials are not for the faint of heart. Be prepared for potential crashes, content log errors, and long loading times.
:::

## Foreword

This article is translated from https://mc.163.com/dev/mcmanual/mc-dev/mcguide/ - It is provided by Netease, the developers of china edition. The article will introduce the structure and configuration of the material file in detail.

## Material files

We will explain the material files of native Microsoft. First of all, the files under the directory are basically files with the suffix ".material". In addition, there are three important json files, namely common. json, fancy.json, sad.json.

Let's take a look at sad.json and fancy.json first. They are used to control the image quality performance. Each of them defines a list of material files. fancy.json usually defines several more material files than sad.json and may Some additional macros have been added to some material files, and the shader can do special processing by judging these macros:

<CodeHeader>sad.json</CodeHeader>

```json
[
	{"path":"materials/sad.material"},
	{"path":"materials/entity.material"},
	{"path":"materials/terrain.material"},
	{"path":"materials/portal.material"},
	{"path":"materials/barrier.material"},
	{"path":"materials/wireframe.material"}
]
```

<CodeHeader>fancy.json</CodeHeader>

```json
[
	{"path":"materials/fancy.material", "+defines":["FANCY"]},
	{"path":"materials/entity.material", "+defines":["FANCY"]},
	{"path":"materials/terrain.material", "+defines":["FANCY"]},
	{"path":"materials/hologram.material"},
	{"path":"materials/portal.material", "+defines":["FANCY"]},
	{"path":"materials/barrier.material"},
	{"path":"materials/wireframe.material"}
]
```

It can be seen that fancy.json defines more fancy.material and hologram.material material files than sad.json, and also defines FANCY macros for multiple material files. The switch of in-game settings/video/exquisite texture is to control the switch between sad and fancy. When the fancy texture switch is turned on, the material file in fancy.json will take effect, and when it is turned off, the material file in sad.json will take effect.

In order to achieve better performance, the material files in fancy.json usually have more complex operations, while the materials in sad.json usually sacrifice a little rendering performance in exchange for better performance. If developers need to write more complex shaders, it is recommended to write a low-cost version at the same time, and then define them in fancy and sad respectively. Let the player control whether to turn on the corresponding effect through the exquisite texture option in the game.

<CodeHeader>common.json</CodeHeader>

```json
[
	{"path":"materials/particles.material"},
	{"path":"materials/shadows.material"},
	{"path":"materials/sky.material"},
	{"path":"materials/ui.material"},
	{"path":"materials/ui3D.material"},
	{"path":"materials/portal.material"},
	{"path":"materials/barrier.material"},
	{"path":"materials/wireframe.material"}
]
```

Compared with sad and fancy, they can be switched between each other. The material files defined in common.json will be loaded after entering the game. Material files are not loaded except those declared in common.json, sad.json, fancy.json.

## Material syntax

We use one of the material files entity.material to explain, open the file, we can see that the file starts with materials, and then defines the version number version as 1.0.0, these are fixed formats, which identify the parsing of this material file way, we can temporarily ignore it and not modify it.

You can see that the definition of each field in the material is in the form of a key-value pair, for example:

```json
[
	"vertexShader": "shaders/entity.vertex",
]
```

The left side of the colon represents the key as vertexShader, and the right side represents the value shaders/entity.vertex;

There are also definitions in list form:

```json
[
	"vertexFields": [
        { "field": "Position" },
        { "field": "Normal" },
        { "field": "UV0" }
    ],
]
```

The declaration with the symbol [ ] is a list, and then inside is the json definition of each child element.

## Overview of all property fields of the material

### Render state

#### `states`

Configure the rendering environment, which can have the following values:

- `EnableAlphaToCoverage`：An order-independent rendering method for translucent objects. This switch is only useful in environments that support MSAA. When enabled, the edges of objects will be more accurately softened and transitioned according to the transparency. It can also be used for some complex scenes with a large number of meshes overlapping.

- `Wireframe`： Draw wireframe mode

- `Blending`: Enables color blending mode, often used to render translucent objects. After declaring this, it is usually necessary to declare the blending factor blendSrc, blendDst

- `DisableColorWrite`： Do not write color values to the color buffer, none of the RGBA channels are written

- `DisableAlphaWrite`： Do not write transparency alpha values to the color buffer, allow RGB values to be written

- `DisableRGBWrite`： Do not write transparency RGB values to the color buffer, allow writing alpha values

- `DisableDepthTest`： Turn off depth testing
 
- `DisableDepthWrite`： Turn off depth writing

- `DisableCulling`: Render front and back simultaneously

- `InvertCulling`：Use front cropping. The default is back cropping. After declaring this, the back side is rendered and the front side is cropped.

- `StencilWrite`: Enable stencil mask writing

- `EnableStencilTest`： Enable stencil mask testing


### Shader path

#### `vertexShader`

The path to the vertex shader, usually shaders/XXX.vertex.

#### `vrGeometryShader` or `geometryShader`

The path of the geometry shader, usually shaders/XXX.geometry, is not used on the mobile side, and does not need to be modified.

#### `fragmentShader`

The path to the fragment shader, usually shaders/XXX.fragment.

### Shader macro definition

#### `defines`

Define macros for the shaders used. For code reuse, we use the same shader for many different materials. At this time, if you want to execute different logic somewhere in the shader according to the current material, you can judge it through the macro declared by the material defines. We can use the material entity_for_skeleton as an illustration. Here we can see that three macros USE_SKINNING, USE_OVERLAY, and NETEASE_SKINNING are defined.

```json
"entity_for_skeleton": {
	"vertexShader": "shaders/entity.vertex",
	"vrGeometryShader": "shaders/entity.geometry",
	"fragmentShader": "shaders/entity.fragment",
	"+defines": [ "USE_SKINNING", "USE_OVERLAY", "NETEASE_SKINNING" ],
	"vertexFields": [
		{ "field": "Position" },
		{ "field": "Normal" },
		{ "field": "BoneId0" },
		{ "field": "UV0" }
	],
	"msaaSupport": "Both",
	"+samplerStates": [
		{
			"samplerIndex": 0,
			"textureFilter": "Point"
		}
	]
}
```

Looking at the vertex shader entity.vertex, there will be #ifdef, #else, #endif to judge the macro and execute different logic branches. These judgment statements of the macro are processed at compile time, unlike the if in the traditional shader. Else, the logic branch processed at compile time will not be generated in actual operation, and the performance will not be degraded due to the branch. In addition, it can be seen below that macros can also make multi-layer judgments. First, judge the NETEASE_SKINNING macro, and then judge the LARGE_VERTEX_SHADER_UNIFORMS macro in the internal execution logic:

```glsl
#ifdef NETEASE_SKINNING
		MAT4 boneMat = transpose(mat3x4ToMat4(BONES_70[int(BONEID_0)]));
		entitySpacePosition = boneMat * POSITION;
		entitySpaceNormal = boneMat * NORMAL;
#else
	#if defined(LARGE_VERTEX_SHADER_UNIFORMS)
		entitySpacePosition = BONES[int(BONEID_0)] * POSITION;
		entitySpaceNormal = BONES[int(BONEID_0)] * NORMAL;
	#else
		entitySpacePosition = BONE * POSITION;
		entitySpaceNormal = BONE * NORMAL;
	#endif
#endif
```

### Runtime state

#### Depth test

##### `depthFunc`

The depth detection pass function can use the following values:

- `Always`: Always pass

- `Equal`： Passed when the depth value is equal to the buffer value

- `NotEqual`：Passed when the depth value is not equal to the buffer value

- `Less`：Passed when the depth value is less than the buffer value

- `Greater`：Passed when the depth value is greater than the buffer value

- `GreaterEqual`：Pass when the depth value is greater than or equal to the buffer value

- `LessEqual`：Pass when the depth value is less than or equal to the buffer value

Associated states rendering environment configuration:

- `DisableDepthTest`： Turn off depth testing

- `DisableDepthWrite`： Turn off depth writing

#### Stencil Mask Test

##### `stencilRef`

Value to compare with or to be written to the mask buffer

##### `stencilRefOverride`

Whether to use the buffer's current value as stencilRef, 0 or 1 is supported:

- `1`： Use the configured stencilRef. If stencilRef is configured, stencilRefOverride will automatically take 1

- `0`： Use the current value of the buffer as stencilRef, in this case do not configure stencilRef

##### `stencilReadMask`

The mask buffer value and the stencilRef value are bit-ANDed with stencilReadMask before being compared

##### `stencilWriteMask`

The stencilRef value is bit-ANDed with stencilWriteMask before being written to the mask buffer

##### `frontFace` and `backFace`

Configure which mask test function to use on the front or back of the grid. In addition, the order of judgment is mask detection first, then depth detection. You need to configure the following operations:

<!-- Test if this looks ok -->

- `stencilFunc`: The method used when stencilRef is compared with the mask buffer, the following values are supported：
- - `Always`: Always pass
- -	`Equal`： Passed when stencilRef is equal to the buffer value
- -	`NotEqual` ：Passed when stencilRef is not equal to the buffer value
- -	`Less`：Passed when stencilRef is less than the buffer value
- -	`Greater`：Passed when stencilRef is greater than the buffer value
- -	`GreaterEqual`：Passed when stencilRef is greater than or equal to the buffer value
- -	`LessEqual`：Passed when stencilRef is less than or equal to the buffer value

- `stencilFailOp`：The processing performed when the stencilFunc comparison function fails to return, supports the following values：
- -	`Keep`： Keep the original value of the buffer
- -	`Replace`： Writes the stencilRef bit and the value of stencilWriteMask to the buffer

- `stencilDepthFailOp` : The stencilFunc comparison function returns success, but the processing performed when the depth test fails, supports the following values：
- -	`Keep`： Keep the original value of the buffer
- -	`Replace`： Writes the stencilRef bit and the value of stencilWriteMask to the buffer

- `stencilPassOp`: The stencilFunc comparison function returns successfully, and the processing executed when the depth test is successful, supports the following values：
- -	`Keep`： Keep the original value of the buffer
- -	`Replace`： Writes the stencilRef bit and the value of stencilWriteMask to the buffer

Associated states rendering environment configuration:

- `StencilWrite`：Enable mask writing

- `EnableStencilTest`: Enable mask testing

Finally, let's look at an example:

```json
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
    }
```

In the example, StencilWrite represents the support for writing to the mask buffer, EnableStencilTest represents the opening of the mask test, and the configuration of frontFace represents that the mask test always passes when the front face is rendered. If the depth test fails, the buffer value remains unchanged. If it also passes, the stencil bit and the value of stencilWriteMask will be written to the buffer, that is, 1 & 1 = 1 value. The configuration of backFace is also similar.

#### Blend translucent object color blend

The rendering of translucent objects needs to configure the blending factor. The final output rgb color value = current color value * source blending factor + color value in buffer * destination blending factor

##### `blendSrc`

source mix factor

##### `blendDst`

target blending factor

##### `alphaSrc`

The source blending factor when calculating alpha, usually not configured to take the default value

##### `alphaDst`

The target blending factor when calculating alpha, usually not configured to take the default value

In total, the blending factor can take on the following values:

- `DestColor`： Buffer color value

- `SourceColor`： Current color value

- `Zero`： (0,0,0)

- `One`： (1,1,1)

- `OneMinusDestColor`: (1,1,1) - buffer color value

- `OneMinusSrcColor`: (1,1,1) - current color value

- `SourceAlpha`： The alpha value in the current color

- `DestAlpha`： Alpha value in buffer color

- `OneMinusSrcAlpha`： 1 - alpha value in the current color value

In the engine, the default is:

- `blendSrc`：SourceAlpha

- `blendDst`：OneMinusSrcAlpha

- `alphaSrc`：One

- `alphaDst`：OneMinusSrcAlpha

Associated states rendering environment configuration:

- `Blending`: Enables color blending mode, often used to render translucent objects. After declaring this, it is usually necessary - to declare the blending factor blendSrc, blendDst

- `DisableColorWrite`： Do not write color values to the color buffer, none of the RGBA channels are written

- `DisableAlphaWrite`： Do not write transparency alpha values to the color buffer, allow RGB values to be written

- `DisableRGBWrite`： Do not write transparency RGB values to the color buffer, allow writing alpha values

#### Sample texture sample

##### `samplerStates`

Configure the sampling state, the value is a list, and configure each texture according to the number of textures to be sampled. Usually, if UV0 and UV1 are declared in the vertex attribute, it means that two textures need to be sampled, and two elements need to be configured here. Let's look at the definition of child elements:

```json
{
	"samplerIndex": 0,
	"textureFilter": "Point",
	"textureWrap": "Repeat"
}
```

Each property is defined as follows:

##### `samplerIndex`

Number, representing the attribute of the texture that is currently being set, starting from 0

##### `textureFilter`

Texture filtering mode (default is Point), when the actual displayed texture map is enlarged or reduced compared to the original image, the mapping relationship between the new resolution map and the pixels on the original resolution map can have the following values:


- `Point`： Point sampling

- `Bilinear`: Bilinear sampling

- `Trilinear`: Trilinear sampling

- `MipMapBilinear`： MipMap bilinear sampling

- `TexelAA`：Texel antialiasing (not supported on all devices, not recommended)

- `PCF`：Sampling by comparison function (not supported on all devices, not recommended)

##### `textureWrap`

Texture wrapping mode, which controls what kind of texture should be sampled when uv is outside [0,1]. It can have the following values:

- `Repeat`： Repeat, that is, modulo the value to [0, 1] for sampling

- `Clamp`： Edge sampling, sampling the value of the closest edge, that is, if 1.1 is closer to 1, then take 1; if -0.1 is closer to 0, then take 0.


#### Vertex

##### `vertexFields`

Vertex attributes, which are used to declare what attributes each vertex of the mesh that is rendered using this material holds. It is determined when the art is producing resources. The following values ​​may be used:

- `Position`： Model space coordinates

- `Color`： Color

- `Normal`： Normal

- `UV0`: Texture sample coordinates

- `UV1`：Texture sample coordinates

- `UV2`：Texture sample coordinates

- `BoneId0`： Bone ID, used in the bone model

#### Rasterizer environment configuration

##### `msaaSupport`

Configure MSAA (Multi-Sample Anti-Aliasing) support (the default in the engine is NonMSAA)

- `NonMSAA`: Materials are allowed when MSAA is not enabled

- `MSAA`: Materials are allowed when MSAA is enabled

- `Both`：Materials are allowed with or without MSAA enabled. Usually just use this value.


##### `depth offset`

Depth offset is mainly used to solve the z-fighting problem, that is, when two objects have similar depths, some frames may display this object and some frames display another object when rendering. The principle of depth offset is to offset one of the objects in the direction of large or small depth, so that their depths are no longer the same. The following four variables can be configured:

- depthBias

- slopeScaledDepthBias

- depthBiasOGL

- slopeScaledDepthBiasOGL

The specific offset depth is:

`offset = (slopeScaledDepthBias * m) + (depthBias * r)`

On the OGL platform it is:

`offset = (slopeScaledDepthBiasOGL * m) + (depthBiasOGL * r)`

m is the maximum value in the slope of the depth of the polygon (computed at the rasterization stage). The more parallel a polygon is to the near clipping plane, the closer m is to 0. r is the smallest value that produces a discernible difference in depth values ​​in the window coordinate system, and r is a constant specified by the platform that implements OpenGL.

Associated states rendering environment configuration:

- `Wireframe`： Draw wireframe mode

- `DisableCulling`: Render front and back simultaneously

- `InvertCulling`：Use front cropping. The default is back cropping. After declaring this, the back side is rendered and the front - side is cropped.

#### Primitive

##### `primitiveMode`

Primitive rendering mode (the default in the engine is TriangleList):

- `None`： Do not render, normally not used

- `QuadList`：Quadrilateral pattern

- `TriangleList`: A pattern of drawing a triangle every three vertices, for example the first triangle uses vertices v0, v1, v2, and the second uses v3, v4, v5

- `TriangleStrip`: Each vertex will form a triangle with the first two vertices, the structure is a bit more complicated, but it - will save the amount of data

- `LineList`: Draw a line segment every two vertices

- `Line`: Each vertex forms a line segment with a vertex that appears before it.

### Material variant

#### `variants`

Useful for quickly implementing multiple sub-materials based on most of the same definitions. See the actual example of entity_static below:

```json
    "entity_static": {
      "vertexShader": "shaders/entity.vertex",
      "vrGeometryShader": "shaders/entity.geometry",
      "fragmentShader": "shaders/entity.fragment",
      "vertexFields": [
        { "field": "Position" },
        { "field": "Normal" },
        { "field": "UV0" }
      ],
      "variants": [
        {
          "skinning": {
            "+defines": [ "USE_SKINNING" ],
            "vertexFields": [
              { "field": "Position" },
              { "field": "BoneId0" },
              { "field": "Normal" },
              { "field": "UV0" }
            ]
          }
        },
        {
          "skinning_color": {
            "+defines": [ "USE_SKINNING", "USE_OVERLAY" ],
            "+states": [ "Blending" ],
            "vertexFields": [
              { "field": "Position" },
              { "field": "BoneId0" },
              { "field": "Color" },
              { "field": "Normal" },
              { "field": "UV0" }
            ]
          }
        }
      ],
      "msaaSupport": "Both",
      "+samplerStates": [
        {
          "samplerIndex": 0,
          "textureFilter": "Point"
        }
      ]
    }
```

Variants are declarations of material variants. The above declarations declare two sub-variants, skinning and skinning_color. Some external fields are rewritten in the sub-variants. In actual use, it is equivalent to quickly defining two materials. The body and the variant are connected with a dot ".". The two materials are entity_static.skinning and entity_static.skinning_color.

In addition, if there are other materials that inherit from entity_static, such as entity_dynamic, this material will also inherit these two variants, entity_dynamic.skinning and entity_dynamic.skinning_color.

## Material Merge Rules

When the same material is declared in different directory files, it will be merged according to the following rules after loading: 1. Normally, the material fields of the files loaded later will overwrite the previously loaded ones. 2. The following fields are special. Operations to add attributes with "+" and delete attributes with "-" are supported:

- defines
- states
- samplerStates

As an example, for example, such a material is declared in the package body file (irrelevant code is omitted), and three macros are defined:

```json
"testMat": {
	"defines": [ "MACRO_1", "MACRO_2", "MACRO_3" ],
}
```

At this point, a mod also declares this material, defining another three macros:

```json
"testMat": {
	"defines": [ "MACRO_4", "MACRO_5", "MACRO_6" ],
}
```

In the above case, the final runtime is equivalent to the defines field being overwritten, and the macros that take effect at the actual runtime are only: MACRO_4, MACRO_5, MACRO_6

If the "+" symbol is used when defining in the MOD:

```json
"testMat": {
	"+defines": [ "MACRO_4", "MACRO_5", "MACRO_6" ],
}
```

Equivalent to adding definitions on the original basis, the macros that take effect at actual runtime are: MACRO_1, MACRO_2, MACRO_3, MACRO_4, MACRO_5, MACRO_6

If the "-" symbol is used when defining in the MOD:

```json
"testMat": {
	"-defines": [ "MACRO_3"],
}
```

It is equivalent to deleting some definitions on the original basis, the only macros that take effect at runtime are: MACRO_1, MACRO_2

If multiple files define the same material, and they involve overlay, add, and delete operations, the order in which they will take effect is: first perform all overlay operations, then perform all add operations, and finally perform all delete operations .

i.e. if one of the material files declares a delete MACRO_3 action:

```json
"testMat": {
	"-defines": [ "MACRO_3"],
}
```

Then no matter how other files are covered, add MACRO_3, and this material must not have MACRO_3 macro after the final synthesis.