---
title: 着色器
mentions:
    - SirLich
    - Dreamedc2015
    - yanasakana
    - MedicalJewel105
    - SIsilicon
description: MCBE 的着色器。
---

:::warning
本页面的着色器与 [Render Dragon](https://help.minecraft.net/hc/en-us/articles/360052771272-About-the-1-16-200-Update-for-Windows-10-) 不兼容。这意味着它们在 1.16.200 之后的 Windows 和主机设备上无法工作，其他设备在 1.18.30 之后也无法工作！
:::

## 概述

着色器分为 2 个文件夹：`glsl` 和 `hlsl`。为了让着色器在每个设备上都能工作，你需要用两种语言编写着色器。对于在 Windows 上测试，`hlsl` 就足够了。在将着色器从一种语言重写到另一种语言时，需要更改一些内容，比如 HLSL 的 `float3` 在 GLSL 中是 `vec3`。这些语言之间的映射可以在[这里](https://anteru.net/blog/2016/mapping-between-HLSL-and-GLSL/)找到。

## 材质

顶点着色器、片段着色器（有时还有几何着色器）会与一些选项结合作为材质，这是自定义着色器所必需的。要创建新材质，你需要创建一个与默认资源包中 .material 文件同名的文件。例如：`materials/particles.material`。材质支持通过在冒号后添加父材质来继承。例如：`entity_alpha:entity_base`。

### 常见材质定义字段

| **字段名**      | **描述**                                                         | **示例值**                                           | **备注**                                                                                                                                            |
| --------------- | ---------------------------------------------------------------- | ---------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `vertexShader`  | 相对于 hlsl/glsl 文件夹的着色器路径                              |                                                      | 对于 HLSL 着色器，会添加 `.hlsl` 后缀。                                                                                                             |
| `fragmentShader`| 相对于 hlsl/glsl 文件夹的着色器路径                              |                                                      | 对于 HLSL 着色器，会添加 `.hlsl` 后缀。                                                                                                             |
| `vertexFields`  | 传递给顶点着色器的字段数组                                       |                                                      | 最好从默认材质复制此字段。                                                                                                                          |
| `variants`      | 定义材质变体的对象数组                                           |                                                      | 最好从默认材质复制此字段。                                                                                                                          |
| `+defines`      | 要添加到着色器源的 `#define` 指令数组                            |                                                      | 用于重用着色器，但更改一些较小的设置。                                                                                                               |
| `+states`       | 要启用的状态数组                                                 | `["Blending", "DisableAlphaWrite", "DisableDepthWrite"]` | 对于 OpenGL 实现，这等同于 [glEnable](https://www.khronos.org/registry/OpenGL-Refpages/gl2.1/xhtml/glEnable.xml) 调用。                               |
| `-defines`      | 要从继承的 `+defines` 中移除的 `#defines` 指令数组              |                                                      |                                                                                                                                                   |
| `+samplerStates`| 定义如何处理特定索引纹理的对象数组                               | `{ "samplerIndex": 0, "textureFilter": "Point" }`     | `textureFilter` 指定如何采样纹理，`textureWrap` 指定在访问纹理尺寸之外时的行为。                                                                  |
| `msaaSupport`   | 多重采样抗锯齿支持                                               | `Both`                                               |                                                                                                                                                   |
| `blendSrc`      | 指定颜色源混合因子的计算方式                                     | `One`                                                | 对于 OpenGL 实现，这等同于 [glBlendFunc](https://www.khronos.org/registry/OpenGL-Refpages/gl4/html/glBlendFunc.xhtml) 调用。                         |
| `blendDst`      | 指定颜色目标混合因子的计算方式                                   | `One`                                                | 对于 OpenGL 实现，这等同于 [glBlendFunc](https://www.khronos.org/registry/OpenGL-Refpages/gl4/html/glBlendFunc.xhtml) 调用。                         |

示例：

<CodeHeader></CodeHeader>

```json
{
    "materials": {
        "version": "1.0.0",
        "particle_debug": {
            "vertexShader": "shaders/particle_generic.vertex",
            "fragmentShader": "shaders/particle_debug.fragment",

            "vertexFields": [{ "field": "Position" }, { "field": "Color" }, { "field": "UV0" }],

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

有关材质文件和可能字段值的全部详细信息，请查看[材质文件 JSON schema](https://github.com/stirante/bedrock-shader-schema/blob/master/materials.schema.json)。

## 故障排除

### 着色器没有变化

每次着色器有变化时，都需要重启 Minecraft 以完全重新编译着色器。

### 编译错误

当着色器编译错误时，通常会指定发生错误的行号。你需要检查错误设置行上面的几行，因为 Minecraft 会在编译前添加 `#define` 指令。

### 无法找到名为常量缓冲区的: $Globals

我无法准确找到这个错误的实际原因，但它似乎与全局变量有关。删除它们（在 `main` 函数中初始化或将它们更改为 `#define` 指令）似乎可以解决问题。

## 技巧和窍门

### 将变量传递给着色器

你可以通过更改实体颜色将变量从粒子或实体传递给着色器。输入颜色被限制在 `<0.0, 1.0>` 范围内。要传递更大的值，需要除以最大值（或至少某个相当大的数字）。

### 在着色器中使用时间

`TIME` 变量是一个 `float` 类型的秒数，对所有着色器都是全局的。对于基于粒子生命周期的 时间，需要传递这个：

<CodeHeader></CodeHeader>

```json
"minecraft:particle_appearance_tinting": {
    "color": ["variable.particle_age/variable.particle_lifetime", 0, 0, 1]
}
```

然后在着色器中，使用 `PSInput.color.r` 作为时间，其中 `0.0` 是粒子诞生，`1.0` 是粒子死亡。

### 实体朝向相机的方向

对于实体着色器，你可以使着色器依赖于相机相对于实体的方向。

-   在顶点和片段着色器的 `PS_Input` 中添加新字段

<CodeHeader></CodeHeader>

```
float3 viewDir: POSITION;
```

-   然后在顶点着色器中添加此行

<CodeHeader></CodeHeader>

```
PSInput.viewDir = normalize((mul(WORLD, mul(BONES[VSInput.boneId], float4(VSInput.position, 1)))).xyz);
```

-   在片段着色器中，使用 `PSInput.viewDir` 根据相机旋转进行更改

### 调试值

调试值最简单的方法是将其转换为颜色并像这样渲染。

<CodeHeader></CodeHeader>

```
PSOutput.color = float4(PSInput.uv, 0., 1.);
```

这应该创建一个红绿渐压，显示 `uv` 的值在 `<0, 0>` 和 `<1, 1>` 之间。

你可以使用我基于[这个着色器](http://mew.cx/drawtext/drawtext) 编写的调试着色器。目前，这个着色器会显示传递给着色器的颜色值。要显示另一个值，请在 hlsl 着色器的第 70 行更改为：

<CodeHeader></CodeHeader>

```
int ascii = getFloatCharacter( cellIndex, <float4 vector here> );
```

GLSL 版本的调试着色器可能会导致 Minecraft 崩溃，仅用于调试。

[下载调试着色器](http://files.stirante.com/debugShader.zip)

![](debugShader.gif)
