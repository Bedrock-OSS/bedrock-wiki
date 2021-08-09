---
title: Shaders
---

:::warning
The shaders on this page are incompatible with [Render Dragon](https://help.minecraft.net/hc/en-us/articles/360052771272-About-the-1-16-200-Update-for-Windows-10-). That means that they will not work on Windows 10 or Console devices!
:::

## Overview

Shaders are divided into 2 folders: `glsl` and `hlsl`. For shaders to work on every device,
you need to code shaders in both languages. For testing on Windows, `hlsl` is enough.
When rewriting shaders from one language to another, there are few things to change,
like HLSL `float3` is `vec3` in GLSL. [Mapping between those languages can be found here](https://anteru.net/blog/2016/mapping-between-HLSL-and-GLSL/)

## Materials

Vertex, fragments, and sometimes geometry shaders are combined with some options
as materials and are required for custom shaders. To create new material,
you need to create a file, which matches the name of the .material file in the vanilla resource pack.
For example: `materials/particles.material`. Materials support inheritance by adding parent
material after a colon. For example: `entity_alpha:entity_base`

### Common material definition fields

| **Field name**   | **Description**                                                       | **Example value**                                        | **Notes**                                                                                                                                         |
| ---------------- | --------------------------------------------------------------------- | -------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| `vertexShader`   | Path to the shader relative to hlsl/glsl folder                       |                                                          | For HLSL shader, `.hlsl` suffix is added.                                                                                                         |
| `fragmentShader` | Path to the shader relative to hlsl/glsl folder                       |                                                          | For HLSL shader, `.hlsl` suffix is added.                                                                                                         |
| `vertexFields`   | An array of fields passed to vertex shader                            |                                                          | It's better to copy this field from vanilla material.                                                                                             |
| `variants`       | An array of objects, which define variants of the material            |                                                          | It's better to copy this field from vanilla material.                                                                                             |
| `+defines`       | An array of `#define` directives to add to the shader source          |                                                          | Useful for reusing shader, but changing some minor setting.                                                                                       |
| `+states`        | An array of states to enable                                          | `["Blending", "DisableAlphaWrite", "DisableDepthWrite"]` | For OpenGL implementation, this is equivalent to [glEnable](https://www.khronos.org/registry/OpenGL-Refpages/gl2.1/xhtml/glEnable.xml) call.      |
| `-defines`       | An array of `#defines` directives to remove from inherited `+defines` |                                                          |                                                                                                                                                   |
| `+samplerStates` | An array of objects, defining how texture at certain index is treated | `{ "samplerIndex": 0, "textureFilter": "Point" }`        | `textureFilter` specifies how to sample the texture and `textureWrap` specifies the behavior, when accessing outside of the texture dimensions.   |
| `msaaSupport`    | Multisample anti-aliasing support                                     | `Both`                                                   |                                                                                                                                                   |
| `blendSrc`       | Specifies how the color source blending factors are computed          | `One`                                                    | For OpenGL implementation, this is equivalent to [glBlendFunc](https://www.khronos.org/registry/OpenGL-Refpages/gl4/html/glBlendFunc.xhtml) call. |
| `blendDst`       | Specifies how the color destination blending factors are computed     | `One`                                                    | For OpenGL implementation, this is equivalent to [glBlendFunc](https://www.khronos.org/registry/OpenGL-Refpages/gl4/html/glBlendFunc.xhtml) call. |

Example:

<CodeHeader></CodeHeader>

```json
{
	"materials": {
		"version": "1.0.0",
		"particle_debug": {
			"vertexShader": "shaders/particle_generic.vertex",
			"fragmentShader": "shaders/particle_debug.fragment",

			"vertexFields": [
				{ "field": "Position" },
				{ "field": "Color" },
				{ "field": "UV0" }
			],

			"+samplerStates": [
				{
					"samplerIndex": 0,
					"textureFilter": "Point"
				}
			],

			"msaaSupport": "Both"
		}
	}
}
```

For all the details about material files and possible field values, check [material file JSON schema](https://github.com/stirante/bedrock-shader-schema/blob/master/materials.schema.json).

## Troubleshooting

### Shader doesn’t change

Every time there is a change in the shader, you need to restart Minecraft to recompile the shader completely.

### Compilation error

When there is a shader compilation error, a line number is usually specified where the error occurred. You need to check a few lines above the one set in error because Minecraft adds `#define` directives before compilation.

### Couldn’t find constant buffer named: $Globals

I couldn’t accurately find the actual cause of this error, but it seems to be somehow connected to global variables. Removing them (initializing them in the `main` function or changing them to `#define` directives) seems to fix the problem.

## Tips and tricks

### Passing variables to the shader

You can pass variables to the shader from a particle or an entity by changing entity color.
Input color is clamped to `<0.0, 1.0>`. To pass more significant values, you need to divide by max value (or at least some considerable number).

### Using time in shader

`TIME` variable is a number of seconds as `float` and is global for all shaders. For time-based on particle lifetime, you need to pass this:

<CodeHeader></CodeHeader>

```json
"minecraft:particle_appearance_tinting": {
    "color": ["variable.particle_age/variable.particle_lifetime", 0, 0, 1]
}
```

Then in the shader, use `PSInput.color.r` as time, where `0.0` is particle birth and `1.0` is particle death.

### Camera direction towards the entity

For entity shaders, you can make the shader dependent on the camera direction towards the entity.

-   Add to `PS_Input` in vertex and fragment shader new field

```
float3 viewDir: POSITION;
```

-   After that, add to vertex shader this line

```
PSInput.viewDir = normalize((mul(WORLD, mul(BONES[VSInput.boneId], float4(VSInput.position, 1)))).xyz);
```

-   In the fragment shader, use `PSInput.viewDir` to make changes depending on camera rotation

### Debugging values

The easiest way to debug a value is to turn it into color and render it like this.

```
PSOutput.color = float4(PSInput.uv, 0., 1.);
```

This should create a red-green gradient, showing that the values of `uv` are between `<0, 0>` and `<1, 1>`.

You can use the debug shader I wrote [based on this shader](http://mew.cx/drawtext/drawtext).
Right now, this shader will display values of the color passed to the shader. To display another value, change line 70 in hlsl shader to

```
int ascii = getFloatCharacter( cellIndex, <float4 vector here> );
```

GLSL version of debugging shader may crash Minecraft, use only for debugging.

[Download debug shader](http://files.stirante.com/debugShader.zip)

![](/assets/images/knowledge/shaders/debugShader.gif)
