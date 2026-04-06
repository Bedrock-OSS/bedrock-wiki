---
title: 纹理图集
description: 纹理图集（也称为精灵图）是一张包含许多较小纹理的图像。
tags:
    - intermediate
license: true
mentions:
    - QuazChick
---

纹理图集（也称为精灵图）是一张包含许多较小纹理的图像。使用图集可以减少游戏加载的纹理数量，从而提高性能并降低达到纹理限制的可能性。例如，[地形纹理图集](#terrain) 不是分别加载每个方块纹理，而是作为一张大纹理加载。

如果图集中包含的子纹理过多，Minecraft 会降低图集中纹理的分辨率，直到它们都能装下。

以下是 Minecraft 根据 `Vanilla RP/textures/item_texture.json` 文件中的条目生成的默认[物品纹理图集](#items) 的一个部分。完整的图集包含更多纹理，包括自定义物品纹理！

<WikiImage
    alt="A collection of vanilla item textures."
    src="item_atlas_sample.png"
    width="496"
    pixelated
/>

:::tip 内边距
注意到书本纹理之间拉伸的像素了吗？这叫做[内边距](#padding)，有助于防止图形问题！
:::

## 图集列表

### 旗帜

`atlas.banner`

-   包含旗帜纹理，包括旗帜图案和不祥旗帜纹理。
-   此图集中包含的纹理列表无法修改。

### 物品

`atlas.items`

-   包含物品纹理，包括装备槽占位符、镀金盔甲和盾牌纹理。
-   可以通过 `item_texture.json` 文件向此图集添加纹理。

### 盾牌

`atlas.shield`

-   包含盾牌旗帜图案纹理。
-   此图集中包含的纹理列表无法修改。

### 地形

`atlas.terrain`

-   包含方块纹理，包括带有翻页动画的纹理。
-   默认应用多级纹理渐远（mipmapping）和内边距。
-   可以通过 `terrain_texture.json` 文件向此图集添加纹理。

## 多级纹理渐远（Mipmapping）

[Mipmaps](https://en.wikipedia.org/wiki/Mipmap) 被 Minecraft 用于在纹理远离相机时降低其分辨率。这可以减少远处纹理的锯齿，并可能提供一些性能优势。

### Mip级别

> 译注：Mipmapping 是一种纹理优化技术，会预生成多个不同分辨率的纹理副本，在渲染远处物体时自动使用较小的版本以减少计算和锯齿。

纹理图集的 mip 级别数量由 `num_mip_levels` 参数决定。

在每个 mip 级别，纹理的分辨率减半。

默认情况下，`atlas.terrain` 中的方块纹理有 4 个 mip 级别：

<CodeHeader>Vanilla RP/textures/terrain_texture.json</CodeHeader>

```json
{
    "texture_name": "atlas.terrain",
    "num_mip_levels": 4,
    ...
}
```

对于 16&times;16 的纹理，会生成如下类似的纹理：

<WikiImage alt="A 16 by 16 log texture" src="log_oak_top_1.png" width="64" pixelated />

<WikiImage alt="An 8 by 8 log texture" src="log_oak_top_2.png" width="64" pixelated />

<WikiImage alt="A 4 by 4 log texture" src="log_oak_top_3.png" width="64" pixelated />

<WikiImage alt="A 2 by 2 log texture" src="log_oak_top_4.png" width="64" pixelated />

### 对比

<WikiImage
    src="screenshot_with_mipmapping.jpeg"
    caption="Screenshot of a world with 4 mip levels."
    width="516"
    style="margin-right: 1em"
/>

<WikiImage
    src="screenshot_without_mipmapping.jpeg"
    caption="Screenshot of a world without mipmapping."
    width="516"
/>

## 内边距

内边距是指纹理周围被拉伸的区域，用于防止由于渲染精度问题导致纹理相互渗透。

内边距的宽度可以通过 `padding` 参数调整。该参数的值必须至少为 $2^{n-1}$，其中 $n$ 代表 `num_mip_levels`。例如，如果图集有 6 个 mip 级别，则需要至少 32 像素的内边距（$2^5$）。

默认情况下，每个方块纹理周围有 8 像素的内边距：

<WikiImage alt="A padded Oak Log texture" src="log_oak_top_padded.png" width="128" pixelated />

## 纹理

一个对象，其中每个键是一个短名称，可用于引用纹理图集中的区域。

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

### 路径

一个相对于资源包根目录的字符串，指向具有以下扩展名之一的文件：

-   `.texture_set.json`（需要 `pbr` 功能）
    -   如果引用了纹理集，图集中会添加所有包含的纹理（如 `color` 和 `heightmap`）。
-   `.tga`
-   `.png`
-   `.jpg`
-   `.jpeg`

路径字符串不能包含纹理的文件扩展名。

非正方形的纹理在添加到图集时会被拉伸为正方形。包含多帧的纹理只会添加第一帧。

### 着色 tint_color

#### 默认用法

在默认内容中，`tint_color` 用于给睡莲叶纹理添加绿色色调。

<WikiImage alt="Grey Lily Pad" src="waterlily.png" width="64" pixelated />

<WikiImage alt="Green-tinted Lily Pad" src="waterlily_tinted.png" width="64" pixelated />

#### 着色混合

_以下计算假设颜色通道值为浮点数（0-1）。_

-   像素的颜色通道（$r_1$，$g_1$，$b_1$）乘以 `tint_color` 的颜色通道（$r_2$，$g_2$，$b_2$）。
-   像素的 alpha 通道（$a$）被保留。

$$
\begin{aligned}
R &= r_1 \times r_2 \\
G &= g_1 \times g_2 \\
B &= b_1 \times b_2 \\
A &= a
\end{aligned}
$$

### 叠加颜色 overlay_color

此参数与 `tint_color` 类似，但会丢弃纹理的 alpha（不透明度）通道，而是使用其值来确定色调的强度。

-   这会导致纹理变为不透明的，即使原始纹理包含透明度。
-   对于不透明的纹理，此参数产生与 `tint_color` 相同的结果。

#### 默认用法

在默认内容中，`overlay_color` 用于给草方块侧面纹理的 일부 添加绿色色调，而不会把泥土纹理染成绿色！

在下方可以看到原始的草方块侧面纹理、没有 alpha 通道的版本（显示隐藏的泥土纹理）以及应用了 `overlay_color` 的版本。

<WikiImage alt="Vanilla grass side texture" src="grass_side.png" width="64" pixelated />

<WikiImage
    alt="Grass side texture without an alpha channel"
    src="grass_side_without_alpha.png"
    width="64"
    pixelated
/>

<WikiImage alt="Tinted grass side texture" src="grass_side_tinted.png" width="64" pixelated />

:::danger 透明像素

许多图像编辑器不会保存 alpha 值为 0 的像素的 RGB 值。
为了创建纹理的未着色区域，需要保存这些值。

以下是确保在 GIMP 中保存它们的方法：

![GIMP 'save color values from transparent pixels' export setting.](gimp_export_settings.png)

:::

#### 叠加混合

_以下计算假设颜色通道值为浮点数（0-1）。_

-   像素的颜色通道（$r_1$，$g_1$，$b_1$）乘以 `overlay_color` 的颜色通道（$r_2$，$g_2$，$b_2$）。
-   像素原始颜色的一部分根据其 alpha 的倒数（$1 - a$）被添加进去。
-   像素的 alpha 通道（$a$）变为 1。

$$
\begin{aligned}
R &= r_1 \times r_2 + r_1 \times (1 - a) \\
G &= g_1 \times g_2 + g_1 \times (1 - a) \\
B &= b_1 \times b_2 + b_1 \times (1 - a) \\
A &= 1
\end{aligned}
$$

### 叠加 additive

将指定的 `textures` 相互层叠以创建新的组合纹理。不透明的像素会完全覆盖之前的层。

叠加颜色只能放在第一个 `textures` 条目中，并且会影响所有层。

### 四分之一 quad

一个布尔值，决定是否只显示纹理的左上象限。

此参数只改变此短名称在图集中覆盖的区域，整个纹理都被包含在图集中。

也可以设置为数字，其中 `0` 表示 `false`，其他所有数字表示 `true`。

## 附加参数

-   `default_leather_color`：十六进制字符串
    -   确定未染色皮革盔甲的默认颜色。
-   `default_leather_horse_armor_color`：十六进制字符串
    -   确定未染色皮革马盔甲的默认颜色。

<CodeHeader>RP/textures/item_texture.json</CodeHeader>

```json
{
    "default_leather_color": "#ffffff",
    "default_leather_horse_armor_color": "#ffffff"
}
```
