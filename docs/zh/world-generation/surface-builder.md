---
title: 地表方块生成
category: 教程
mentions:
    - DerpMcaddon
    - SirLich
tags:
    - experimental
description: 基于特征的地表生成器是一种将一系列方块组合起来以增加主世界地表多样性和装饰性的特征。本教程将解释如何创建此特征，包括大小、频率、生成位置等。
---

基于特征的地表生成器是一种将一系列方块组合起来以增加主世界地表多样性和装饰性的特征。本教程将解释如何创建此特征，包括大小、频率、生成位置等。

## 单方块特征

单方块特征将成为我们地表生成器的基础。它们将定义我们要使用的方块。在本教程中，我将使用粗泥土、灰化土和圆石。

了解更多关于单方块特征的信息[点击这里](/world-generation/feature-types#单方块特征)

粗泥土文件

<CodeHeader>BP/features/coarse_dirt_feature.json</CodeHeader>

```json
{
    "format_version": "1.13.0",
    "minecraft:single_block_feature": {
        "description": {
            "identifier": "wiki:coarse_dirt_feature"
        },
        "places_block": {
            //粗泥土与泥土共享相同的标识符，使用name和states进行设置
            "name": "minecraft:dirt",
            "states": {
                "dirt_type": "coarse"
            }
        },
        "enforce_survivability_rules": false,
        "enforce_placement_rules": false,
        "may_replace": [
            "minecraft:grass" //该方块只能替换草方块
        ]
    }
}
```

灰化土文件

<CodeHeader>BP/features/podzol_feature.json</CodeHeader>

```json
{
    "format_version": "1.13.0",
    "minecraft:single_block_feature": {
        "description": {
            "identifier": "wiki:podzol_feature"
        },
        "places_block": "minecraft:podzol", //灰化土可以使用直接标识符定义
        "enforce_survivability_rules": false,
        "enforce_placement_rules": false,
        "may_replace": [
            "minecraft:grass" //该方块只能替换草方块
        ]
    }
}
```

圆石文件

<CodeHeader>BP/features/cobblestone_feature.json</CodeHeader>

```json
{
    "format_version": "1.13.0",
    "minecraft:single_block_feature": {
        "description": {
            "identifier": "wiki:cobblestone_feature"
        },
        "places_block": "minecraft:cobblestone", //圆石可以使用直接标识符定义
        "enforce_survivability_rules": false,
        "enforce_placement_rules": false,
        "may_replace": [
            "minecraft:grass" //该方块只能替换草方块
        ]
    }
}
```

## 加权随机特征

加权随机特征将作为我们的随机选择器，在各种方块类型之间进行选择。

了解更多关于加权随机特征的信息[点击这里](/world-generation/feature-types#加权随机特征)

<CodeHeader>BP/features/select_surface_block_feature.json</CodeHeader>

```json
{
    "format_version": "1.13.0",
    "minecraft:weighted_random_feature": {
        "description": {
            "identifier": "wiki:select_surface_block_feature"
        },
        "features": [
            [
                "wiki:coarse_dirt_feature", //粗泥土权重为5
                5
            ],
            [
                "wiki:podzol_feature", //灰化土权重为3
                3
            ],
            [
                "wiki:cobblestone_feature", //圆石权重为2
                2
            ]
        ]
    }
}
```

## 散布特征

散布特征是我们地表生成器的重要组成部分。它将决定一个blob中方块的大小、形状和数量。

了解更多关于散布特征的信息[点击这里](/world-generation/feature-types#散布特征)

<CodeHeader>BP/features/scatter_surface_block_feature.json</CodeHeader>

```json
{
    "format_version": "1.13.0",
    "minecraft:scatter_feature": {
        "description": {
            "identifier": "wiki:scatter_surface_block_feature"
        },
        "iterations": "math.random_integer(20,25)",
        "x": {
            "extent": [0, 8],
            "distribution": "gaussian"
        },
        "z": {
            "extent": [0, 8],
            "distribution": "gaussian"
        },
        "y": "q.heightmap(v.worldx, v.worldz) -1",
        "places_feature": "wiki:select_surface_block_feature" //加权随机特征标识符
    }
}
```

-   `iterations` 决定将放置多少个方块。我将使用 Molang 的 `math.random_integer` 函数来随机化方块的数量。在这种情况下，将是20到25个方块。

-   `extent` 使用数组来确定blob的大小。`[0, 8]` 表示大小从0扩展到8个方块。因此，我们的blob在X和Z轴上都将长达8个方块。**仅将此用于X和Z分布**。

-   `"y": "q.heightmap(v.worldx, v.worldz) -1"` 表示它将把方块放在y坐标最高方块的-1位置。因此，它将始终把特征放在地表上。

-   `distribution` 指定要使用的分布类型。可用的包括 `Gaussian`（高斯分布）、`Inverse Gaussian`（逆高斯分布）、`Uniform`（均匀分布）、`Fixed Grid`（固定网格）和 `Jittered Grid`（抖动网格）。

## 特征规则

这是我们地表生成器的最后一步。地表生成器的特征规则稍有不同。

<CodeHeader>BP/feature_rules/overworld_surface_blocks_feature.json</CodeHeader>

```json
{
    "format_version": "1.13.0",
    "minecraft:feature_rules": {
        "description": {
            "identifier": "wiki:overworld_surface_blocks_feature",
            "places_feature": "wiki:scatter_surface_block_feature"
        },
        "conditions": {
            "placement_pass": "surface_pass",
            "minecraft:biome_filter": {
                "test": "has_biome_tag",
                "operator": "==",
                "value": "overworld" //你可以将其更改为你想要的任何生物群系标签
            }
        },
        "distribution": {
            "iterations": 1,
            "x": {
                "extent": [0, 16],
                "distribution": "uniform"
            },
            "y": 0,
            "z": {
                "extent": [0, 16],
                "distribution": "uniform"
            },
            "scatter_chance": {
                //每个chunk生成blob的概率
                "numerator": 1,
                "denominator": 5
            }
        }
    }
}
```

我们的地表生成器完成了！随意修改和尝试！