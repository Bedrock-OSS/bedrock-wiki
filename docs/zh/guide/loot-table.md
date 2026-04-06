---
title: 添加战利品表、生成规则和合成配方
category: 指南
description: 如何添加你的第一个战利品表、生成规则和合成配方
nav_order: 8
prefix: "8. "
mentions:
    - KaiFireborn
    - SirLich
    - sermah
    - cda94581
    - Ultr4Anubis
    - TheItsNameless
    - Ciosciaa
    - MedicalJewel105
    - ChibiMango
    - fraysdev
    - QuazChick
---

接下来，我们将通过为其添加一些更基本的机制来增强自定义鬼魂实体：

## 战利品表

首先，我们将让鬼魂在死亡时掉落灵质：创建以下文件：

<CodeHeader>BP/loot_tables/entities/ghost.json</CodeHeader>

```json
{
    "pools": [
        {
            "rolls": 1,
            "entries": [
                {
                    "type": "item",
                    "name": "wiki:ectoplasm",
                    "weight": 1,
                    "functions": [
                        {
                            "function": "set_count",
                            "count": {
                                "min": 1,
                                "max": 3
                            }
                        }
                    ]
                }
            ]
        }
    ]
}
```

-   战利品表由 `"pools"` 组成。每个池定义不同的战利品。池由三部分组成，`"rolls"`、`"entries"` 和 `"conditions"`。`"conditions"` 是可选的，本指南不会介绍。要了解有关条件的更多信息，请查看[战利品表](/loot/loot-tables)。
-   `"rolls"` 部分定义了下面的 `"entries"` 对象中将随机选择多少次。
-   `"entries"` 部分定义了战利品表可以选择的物品。每次滚动都会选择一个新物品。
-   `"type"` 定义将选择什么。你可以将其设置为 `"item"` 或 `"loot_table"` 以选择物品或不同的战利品表。
-   `"name"` 将设置为带有其命名空间的物品标识符。它定义了将选择哪个物品。
-   `"weight"` 是可选的，定义了选择该物品的可能性有多大。如果 `"entries"` 部分中有多个物品，可以使用 `"weight"` 属性来使一个物品被选择的概率更大或更小。如果未设置，默认为 1。
-   `"functions"` 提供了一种强大的方式来自定义将返回的物品。它们可以为物品添加附魔、设置物品的名称或简单地设置将掉落的物品数量。要定义物品数量，我们使用 `"set_count"`。它采用 `"count"` 属性，设置将掉落的物品的最大和最小数量。

有关战利品表的更多信息，请参阅我们的扩展指南：[战利品表](/loot/loot-tables)！

## 生成规则

接下来，我们将让鬼魂在沙漠中夜间生成：

<CodeHeader>BP/spawn_rules/ghost.json</CodeHeader>

```json
{
    "format_version": "1.8.0",
    "minecraft:spawn_rules": {
        "description": {
            "identifier": "wiki:ghost",
            "population_control": "monster"
        },
        "conditions": [
            {
                "minecraft:spawns_on_surface": {},
                "minecraft:brightness_filter": {
                    "min": 0,
                    "max": 7,
                    "adjust_for_weather": true
                },
                "minecraft:difficulty_filter": {
                    "min": "easy",
                    "max": "hard"
                },
                "minecraft:weight": {
                    "default": 80
                },
                "minecraft:herd": {
                    "min_size": 1,
                    "max_size": 3
                },
                "minecraft:biome_filter": {
                    "test": "has_biome_tag",
                    "operator": "==",
                    "value": "desert"
                }
            }
        ]
    }
}
```

-   你已经知道 `"format_version"` 的作用。
-   在 `"minecraft:spawn_rules"` 部分中，我们定义我们的生成规则。
-   `"description"` 定义文件的基本属性。`"identifier"` 用于定义此生成规则适用于哪个实体。`"population_control"` 用于限制将生成的实体数量。一旦 `"population_control"` 内定义的池满了，就不会再生成更多实体。
-   使用 `"conditions"` 我们可以定义将此实体的生成限制在特殊情况的规则。我们将简要描述这里使用的每个条件，但你可以在[这里](/entities/vanilla-usage-spawn-rules)了解更多条件以及如何使用它们。
    -   `"spawns_on_surface"` 允许生物仅在表面生成。
    -   `"minecraft:brightness_filter"` 将生成限制在光照级别在定义值之间的区域。如果 `"adjust_for_weather"` 为 `true`，则在雨天和风暴期间的光照水平下降将被忽略。
    -   `"minecraft:difficulty_filter"` 定义生成实体所需的难度级别。
    -   `"weight"` 定义此实体生成的频率。这个值越高，生物生成的就越频繁。
    -   `"minecraft:herd"` 定义一次将生成多少实体。
    -   使用 `"minecraft:biome_filter"` 我们定义实体能够生成的生物群系。

要了解更多关于生成规则的信息，请查看我们的[原版生成规则](/entities/vanilla-usage-spawn-rules)指南。

## 合成配方

最后，作为配方的介绍，我们将让灵质可合成史莱姆方块：

<CodeHeader>BP/recipes/ectoplasm_slime_blocks.json</CodeHeader>

```json
{
    "format_version": "1.20.10",
    "minecraft:recipe_shaped": {
        "description": {
            "identifier": "wiki:ectoplasm_block"
        },
        "tags": ["crafting_table"],
        "pattern": [
            // 3×3 grid of Ectoplasm items
            "###",
            "###",
            "###"
        ],
        "key": {
            "#": {
                "item": "wiki:ectoplasm"
            }
        },
        "unlock": [
            {
                "item": "wiki:ectoplasm" // Unlock this recipe when the player acquires an Ectoplasm item
            }
        ],
        "result": {
            "item": "wiki:ectoplasm_block"
        }
    }
}
```

-   `"format_version"` 已经是已知。
-   使用 `"recipe_shaped"` 我们定义每个成分在合成网格中都有固定的位置。还有一些其他类型可以使用，你可以在[这里](/loot/recipes)找到更多信息。
-   在 `"description"` 中我们定义这个配方的 `"identifier"`，这是配方的名称。
-   `"tags"` 是工作台（合成台、熔炉等）的列表，能够使用此配方。在 b1.16.100 版本之后，可以使用由 add-on 创建的自定义工作台。
-   `"pattern"` 定义物品在合成网格中的排列方式。每个 `#` 代表在 `"key"` 下设置的物品。在这种情况下，整个 3x3 网格必须用 `"wiki:ectoplasm"` 填充，这是我们自己的物品。定义更多物品是可能的，只需在 `"key"` 中添加条目并将键设置为你可以在 `"pattern"` 中使用的字符。
-   `"result"` 包含一个 `"item"`，它被设置为将成为此配方输出结果的物品。

有关此主题的更多信息，请访问我们关于[配方](/loot/recipes)的页面！

## 你学到了什么

:::tip 你已学到：

-   如何创建战利品表并定义生物可以掉落的物品
-   如何设置生物生成的规则
-   如何创建新的合成配方

:::

## 你目前的进度

**你完成的：**

-   [x] 设置你的包
-   [x] 创建自定义物品
-   [x] 创建自定义实体
-   [x] 创建实体的战利品、生成规则和自定义配方

恭喜！你已经完成了本指南并创建了你的第一个 Add-On。🎉
