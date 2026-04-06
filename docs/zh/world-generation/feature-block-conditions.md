---
title: 特征的方块条件
category: 教程
tags:
    - experimental
mentions:
    - PavelDobCZ23
    - SmokeyStack
    - ThomasOrs
description: 了解如何使用方块条件。
---

有时你可能需要根据下方或上方的方块有条件地放置任何特征。并非所有特征都有这样的条件放置选项，但通过一个简单的技巧，我们可以在任何我们想要的特征上使用它。

:::tip
此技术利用 `aggregate_feature` 和 `single_block_feature` 特征。如果你想了解更多，请访问[特征类型](/world-generation/feature-types)文章。
:::

## 文件

### 特征

此特征放置一个 `single_block_feature`，可以为我们的一些其他特征指定我们需要的条件。如果它不会中断你想要的特征，方块可以保留在那里，但我们将在下一个特征中用空气替换它，这样它以后不会造成任何问题。此特征充当"虚拟"特征，因为我们只需要它的条件部分，但实际上不需要它放置任何东西。

<CodeHeader>BP/features/block_condition_feature.json</CodeHeader>

```json
{
    "format_version": "1.18.0",
    "minecraft:single_block_feature": {
        "description": {
            "identifier": "wiki:block_condition_feature"
        },
        "places_block": "minecraft:cobblestone", //任何不在"may_replace"列表中的方块。
        "enforce_placement_rules": false,
        "enforce_survivability_rules": false,
        "may_replace": ["minecraft:air"], //特征仅允许放置在这些方块中。
        //附加条件 - 放置特征时周围可以是什么方块
        "may_attach_to": {
            "bottom": ["minecraft:grass"] //特征只能放置在草方块顶部的方块。
        }
    }
}
//此"虚拟"特征将仅允许特征在空气中生成，正好在草方块上方。
```

下一个特征是将用原来的空气方块替换圆石的方块，但是如果你选择一个你实际上想要的方块或者它以后不会给你造成任何问题，则可以省略此特征。

<CodeHeader>BP/features/block_replacement_feature.json</CodeHeader>

```json
{
    "format_version": "1.18.0",
    "minecraft:single_block_feature": {
        "description": {
            "identifier": "wiki:block_replacement_feature"
        },
        "places_block": "minecraft:air", //用不会给我们造成问题的另一个方块替换该方块。
        "enforce_placement_rules": false,
        "enforce_survivability_rules": false,
        "may_replace": ["minecraft:cobblestone"] //我们在上一个特征中指定的方块。
    }
}
//此特征将用原来的空气替换该方块，这样它就不会给我们造成任何问题。
```

这是一个放置条件"虚拟"特征的特征，消除上一个特征放置的"虚拟"方块，然后是我们实际想要有条件地放置的特征。它使用 `early_out` 值为 `first_failure` 使聚合在条件放置失败时停止。它是由特征规则放置的特征。

<CodeHeader>BP/features/aggregate_placement_rock_feature.json</CodeHeader>

```json
{
    "format_version": "1.18.0",
    "minecraft:aggregate_feature": {
        "description": {
            "identifier": "wiki:aggregate_placement_rock_feature"
        },
        "features": [
            "wiki:block_condition_feature", //用作"虚拟"特征的单方块特征，以作为我们的条件。
            "wiki:block_replacement_feature", //此特征替换我们在上面特征中使用的"虚拟"方块，以免我们以后遇到任何问题。
            //从这一点开始的任何特征都是我们实际想要放置的。
            "wiki:rock_ore_feature"
        ],
        "early_out": "first_failure" //这确保如果第一个（或任何）特征失败，它将继续放置列表中的任何其他内容。
    }
}
//这是一个按顺序放置所有特征的特征，并由特征规则放置。
```

这是我们实际想要有条件地放置的特征。它是 `ore_feature`，它没有实际条件允许我们只将其放置在空气和草方块上，所以这个技术帮助我们实现了这一点。

<CodeHeader>BP/features/rock_ore_feature.json</CodeHeader>

```json
{
    "format_version": "1.18.0",
    "minecraft:ore_feature": {
        "description": {
            "identifier": "wiki:rock_ore_feature"
        },
        "count": 12,
        "replace_rules": [
            {
                "places_block": "minecraft:stone",
                "may_replace": ["minecraft:air", "minecraft:grass"]
            },
            {
                "places_block": {
                    "name": "minecraft:dirt",
                    "states": {
                        "dirt_type": "coarse"
                    }
                },
                "may_replace": ["minecraft:dirt"]
            }
        ]
    }
}
```

:::tip
如果你想了解更多关于矿石特征的信息，可以访问[生成自定义矿石](/world-generation/generating-custom-ores)教程。
:::

### 特征规则

<CodeHeader>BP/feature_rules/overworld_after_surface_rock_feature.json</CodeHeader>

```json
{
    "format_version": "1.18.0",
    "minecraft:feature_rules": {
        "description": {
            "identifier": "wiki:overworld_after_surface_rock_feature",
            "places_feature": "wiki:aggregate_placement_rock_feature"
        },
        "conditions": {
            //在任何主世界生物群系以及after_surface_pass中的特征中放置特征
            "placement_pass": "after_surface_pass",
            "minecraft:biome_filter": [
                {
                    "any_of": [
                        {
                            "test": "has_biome_tag",
                            "operator": "==",
                            "value": "overworld"
                        },
                        {
                            "test": "has_biome_tag",
                            "operator": "==",
                            "value": "overworld_generation"
                        }
                    ]
                }
            ]
        },
        "distribution": {
            //在chunk中尝试1次放置的1/3概率
            "scatter_chance": 33,
            "iterations": 1,
            "coordinate_eval_order": "xzy",
            "x": {
                "distribution": "uniform",
                "extent": [0, 15]
            },
            //沿高度图放置特征
            "y": "q.heightmap(v.worldx,v.worldz)",
            "z": {
                "distribution": "uniform",
                "extent": [0, 15]
            }
        }
    }
}
```

## 总结

阅读本教程后，你应该能够在你想要的任何特征上使用方块条件。这是一个非常基本的例子，因为这对更复杂的创作很有用，并且可以用于任何特征。

像这样，我们制作了一个只能放置在空气方块和草方块上方的岩石特征。

生成截图：

![](rock_feature.png)