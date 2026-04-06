---
title: 高度图噪声
category: 教程
tags:
    - experimental
mentions:
    - Apex360
    - SirLich
description: 基于噪声的地形。
---

:::tip
本教程假设你基本了解molang、特征和特征规则。
:::

在本教程中，我们将看看如何使用 `q.noise` molang查询制作基于噪声的地形。

## 单方块特征

首先，我们将定义单方块特征。它将定义要生成的方块。在本教程中，我将使用石头。

<CodeHeader>BP/features/stone_feature.json</CodeHeader>

```json
{
    "format_version": "1.13.0",
    "minecraft:single_block_feature": {
        "description": {
            "identifier": "wiki:stone_feature"
        },
        "places_block": "minecraft:stone",
        "enforce_survivability_rules": false,
        "enforce_placement_rules": false
    }
}
```

## 散布特征

散布特征是我们用来生成地形的主要特征。

<CodeHeader>BP/features/column.json</CodeHeader>

```json
{
    "format_version": "1.13.0",
    "minecraft:scatter_feature": {
        "description": {
            "identifier": "wiki:column"
        },
        "iterations": "t.height=64+(q.noise(v.originz/64,v.originx/64))*16; return t.height;",
        "places_feature": "wiki:stone_feature",
        "x": 0,
        "z": 0,
        "y": {
            "extent": [-64, "t.height"],
            "distribution": "fixed_grid"
        }
    }
}
```

让我解释一下 `iterations` 中发生了什么：
在iterations中，我们定义了一个临时 `t.height`，其中我们定义了主要的噪声函数。
在 `t.height` 中，我们首先添加的是基本高度，也就是函数开始的高度。
之后，我们使用 `q.noise` 查询perlin，它返回从-1到1的值，然后除以一个使函数更平滑的值。
然后，我们将整个函数乘以一个值，简单来说就是地形的变化程度。

所以这里发生的是，我们从 `t.height` temp获取值，并将它们分配给从-64到该值的y范围，从而生成一个列。这个值将在列与列之间变化，但不是随机的方式，因为 `q.noise` 查询perlin噪声，意思是值是相互关联的。所以我们不会得到像64、69、45、100、7、56这样的值，而是得到像64、65、66、68、69、68、66、65等等的值。

## 特征规则

<CodeHeader>BP/feature_rules/column_grid_placement.json</CodeHeader>

```json
{
    "format_version": "1.13.0",
    "minecraft:feature_rules": {
        "description": {
            "identifier": "wiki:column_grid_placement",
            "places_feature": "wiki:column"
        },
        "conditions": {
            "placement_pass": "first_pass",
            "minecraft:biome_filter": {
                "any_of": [
                    {
                        "test": "has_biome_tag",
                        "value": "overworld"
                    },
                    {
                        "test": "has_biome_tag",
                        "value": "overworld_generation"
                    }
                ]
            }
        },
        "distribution": {
            "iterations": 256,
            "x": {
                "extent": [0, 15],
                "distribution": "fixed_grid"
            },
            "y": 0,
            "z": {
                "extent": [0, 15],
                "distribution": "fixed_grid"
            }
        }
    }
}
```

在这里，我们将 `iteration` 设置为256，因为整个chunk的面积是256（16x16），以使列在整个chunk中生成。

我们的自定义基于噪声的地形完成了！随意摆弄这些值。