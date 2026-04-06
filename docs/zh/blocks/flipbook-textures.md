---
title: 方块纹理动画
description: 了解如何为方块创建翻页书（动画）纹理。
category: 视觉
tags:
    - intermediate
mentions:
    - MedicalJewel105
    - SquisSloim
    - SmokeyStack
    - QuazChick
---

从本页面你将学到：

-   如何将翻页书纹理应用到方块。
-   你可以在 `RP/textures/flipbook_textures.json` 中应用哪些值以及它们的作用。

## 应用翻页书纹理

翻页书纹理是动画纹理。火、水、熔岩和岩浆使用它们。你也可以为你的方块使用动画纹理！
第一次让我们使用岩浆的动画纹理。
你可以通过更改 `texture` 值为在 `Vanilla RP/textures/terrain_texture.json` 中定义的值来简单地将岩浆的动画纹理应用到你的方块：

```json
"magma": {
    "textures": "textures/blocks/magma"
}
```

<CodeHeader>BP/blocks/flipbook_block.json</CodeHeader>

```json
{
    "format_version": "1.26.10",
    "minecraft:block": {
        "description": {
            "identifier": "wiki:flipbook_block",
            "menu_category": {
                "category": "construction"
            }
        },
        "components": {
            "minecraft:geometry": "minecraft:geometry.full_block",
            "minecraft:material_instances": {
                "*": {
                    "texture": "magma" // 在这里添加。
                }
            }
        }
    }
}
```

![](animated_texture_1.gif)

现在它有动画纹理了！

## 定义翻页书纹理

在让方块有动画纹理之后，是时候弄清楚它是如何工作的了。

1. Minecraft 获取在 `terrain_texture.json` 中定义的纹理名称和路径

<CodeHeader>RP/textures/terrain_texture.json</CodeHeader>

```json
{
    "texture_data": {
        "magma": {
            "textures": "textures/blocks/magma"
        }
    }
}
```

2. Minecraft 在 `flipbook_textures.json` 中查找，以找到此名称（`magma`）的动画参数

<CodeHeader>RP/textures/flipbook_textures.json</CodeHeader>

```json
[
    {
        "atlas_tile": "magma",
        "flipbook_texture": "textures/blocks/magma",
        "ticks_per_frame": 10
    }
]
```

这里的 `"atlas_tile"` 将动画参数添加到在 terrain_texture 文件中定义的 `magma` 名称。

3. Minecraft 对拥有 `magma` 作为纹理的方块使用此动画纹理。

## 翻页书纹理参数

在查找 vanilla 翻页书纹理文件时，你可能会注意到一些额外的参数：

| 组件            | 类型            | 描述                                                                                                 |
| -------------------- | --------------- | ----------------------------------------------------------------------------------------------------------- |
| `flipbook_texture`   | 字符串          | 纹理路径。                                                                                            |
| `atlas_tile`         | 字符串          | 在 `terrain_texture.json` 文件中定义的简称。                                                   |
| `atlas_index`        | 整数         | 该简称定义内纹理数组的索引。                                     |
| `atlas_tile_variant` | 整数         | 该简称的方块变体数组内方块纹理数组的变体。                            |
| `ticks_per_frame`    | 整数         | 帧应该多快改变。20刻 = 1秒。                                                     |
| `frames`             | 数组 / 整数 | 每帧使用的帧索引列表，或要重复的帧的总数。 |
| `replicate`          | 整数         | 设置像素的大小。默认：`1`{lang=json}                                                            |
| `blend_frames`       | 布尔         | 定义帧转换是否平滑。默认：`true`{lang=json}                               |

### 图集索引

一个组件，你可以在其中定义要动画的方块纹理索引。

<CodeHeader>RP/textures/terrain_texture.json > texture_data</CodeHeader>

```json
"dirt": {
    "textures": [
        "textures/blocks/dirt",
        "textures/blocks/coarse_dirt" // 想象这是你想动画的路径
    ]
}
```

由于路径 2 有动画纹理，因此你将在 Dirt 方块的翻页书纹理上放置 `"atlas_index": 1`{lang=json}。

### 图集瓦片变体

一个组件，你可以在其中定义要动画的方块变体（注册到 `variations` 数组）。

<CodeHeader>RP/textures/terrain_texture.json > texture_data</CodeHeader>

```json
"dirt": {
    "textures": [
        {
            "variations": [
                { "path": "textures/blocks/dirt_va" }, // 想象这是你想动画的方块变体
                { "path": "textures/blocks/dirt0" },
                { "path": "textures/blocks/dirt1" }
            ]
        }
    ]
}
```

现在假设我们想要第一个路径有动画，你要做的是在 Dirt 方块的翻页书纹理上放置 `"atlas_tile_variant": 0`{lang=json}。

### Replicate

更改使用的纹理块的大小。只能取偶数倍的值。如果帧的像素更少，则扩展它们。

| 值 | 功能                     |
| ----- | --------------------------------- |
| < 0   | 破坏动画                  |
| 0     | 破坏动画和纹理        |
| 2     | 渲染 1 / 4 像素的帧     |
| $n$   | 渲染 1 / $n^2$ 像素的帧 |

## 结果

![](animated_texture_2.gif)

现在你可以修改 vanilla 翻页书纹理或创建自己的！