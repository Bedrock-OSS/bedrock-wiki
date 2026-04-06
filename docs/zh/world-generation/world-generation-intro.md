---
title: 世界生成入门
description: 了解如何修改世界生成。
category: 通用
nav_order: 1
tags:
    - guide
mentions:
    - SirLich
    - solvedDev
    - Dreamedc2015
    - destruc7ion
    - MedicalJewel105
    - aexer0e
    - aym-i
    - SmokeyStack
    - Supernova3695
---

:::warning
此页面有些过时，信息有限。如需最新和最全面的信息，请查看本章节的其他页面。
:::

你可以通过附加包更改世界的生成。行为包中需要的文件夹如下：

`structures`、`features`、`feature_rules`、`biomes` 和 `worldgen`。顾名思义：你可以在 `structures` 中存放从结构方块中导出的 `.mcstructure` 文件，在 `biomes` 中存放生物群系文件，在 `worldgen` 及其子文件夹中存放 jigsaw 结构文件，在 `features` 中存放地形特征（如矿石），在 `feature_rules` 中存放生成规则。让我们先来看看如何添加自定义生物群系。

_注意：使用 bridge. 创建生物群系可能更容易，这是一个可视化的附加包创建软件（也可在链接和联系方式中找到），因为官方文档相当不完整。你也可以生成所有原版生物群系、特征和特征规则的示例文件作为参考，如下所示：_

![](gen_coal_ore.png)
_使用 bridge. 生成煤炭矿石特征。_

但是，bridge. 不是必需的。

---

## 自定义生物群系

<CodeHeader>BP/biomes/cold_biome.json</CodeHeader>

```json
{
    "format_version": "1.26.10",
    "minecraft:biome": {
        "description": {
            "identifier": "wiki:cold_biome"
        },
        "components": {
            "minecraft:climate": {
                "downfall": 0.7,
                "snow_accumulation": [0.6, 0.9],
                "temperature": 15.0
            },
            "minecraft:surface_parameters": {
                "sea_floor_depth": 7,
                "sea_floor_material": "minecraft:blue_ice",
                "foundation_material": "minecraft:cobblestone",
                "mid_material": "minecraft:minecraft:concrete",
                "top_material": "minecraft:glass",
                "sea_material": "minecraft:water"
            },
            "minecraft:replace_biomes": {
                "replacements": [
                    {
                        "amount": 0.5,
                        "noise_frequency_scale": 50,
                        "dimension": "minecraft:overworld",
                        "targets": ["minecraft:plains"]
                    }
                ]
            },
            "minecraft:tags": {
                "tags": ["cold_biome"]
            }
        }
    }
}
```

-   将 `format_version` 设置为 1.26.10：这是当前版本最新的生物群系文件版本。
-   `description` 只有一个值：`identifier`。
-   `components` 如你所愿：应用于生物群系的默认配置。让我们来看看：
-   `minecraft:climate` 控制所有气候相关属性。
-   `downfall` 是下雨或下雪的概率。0.0 表示完全无雨（如沙漠），1.0 表示 constant rain（ constant rain）。
-   `temperature` 用于定义诸如水冻结和雨变成雪等属性。

**你可以使用 bridge. 生成默认生物群系文件作为参考。**

-   `overworld_surface` 控制生成的方块。
-   `floor_depth` 是湖泊和河流向下延伸的深度（以方块计）。
-   `sea_floor_material` 定义生成河床和湖床时使用的材质。
-   `foundation_material` 是在 y=5 到 y=50 之间使用的材质。例如，对于沙漠，它是石头。
-   `sea_material` 是湖泊、河流、海洋等中使用的液体材质。例如，在所有主世界生物群系中，这设置为 "minecraft:water"。
-   `top_material` 定义最高层的材质。例如，平原的是草。
-   `mid_material` 是 "top" 和 "foundation" 之间的层。对于平原，它是泥土。
-   `overworld_height` 定义生物群系的地形外观。

不要同时使用 `noise_type` 和 `noise_params`。`noise_params` 是该生物群系允许的最高噪声级和最低噪声级的数组。

![](non_smooth_noise_transition.jpg)
_同一生物群系之间的非平滑过渡，使用 noise_params 作为 [0.1, 0.1] 然后 [1.0, 1.0] 生成。_

-   但是，如果你想使用 `noise_type`，你会看到几种预生成的噪声类型。你可能从原版游戏中知道其中一些。列表如下：

`beach, default, extreme, taiga, ocean, mountains, default_mutated, deep_ocean, lowlands, less_extreme, stone_beach, swamp, river, mushroom`。

-   `minecraft:replace_biomes` 是最重要的组件。它告诉游戏在何处以百分比替换原版生物群系来放置自定义生物群系。

-   最后是生物群系标签！它们非常简单，但很有用。你可以通过在 `minecraft:tags` 组件中以此格式添加任意数量的原版或自定义标签：

<CodeHeader>minecraft:biome > components</CodeHeader>

```json
"minecraft:tags": {
    "tags": [
        "overworld",
        "wiki:custom_tag"
    ]
}
```

然后，你可以在 _环境传感器_、_过滤器_、_has_biome_ 测试、_生成规则_ 等中测试你的标签。

你的自定义生物群系现在完成了！

---

## 特征和特征规则

特征和特征规则用于生成从矿石到草和花、从植被到花岗岩或泥土块的所有内容。
甚至可以使用这些创建自定义结构，但既然它非常繁琐，而且在提到的更新之后会更容易，我们暂时不讨论它。

现在值得一提的是，生成自定义结构的最简单方法是这个由 [MACHINE_BUILDER](https://www.youtube.com/channel/UC8FBQgo4AWwKFX97h60NKOQ) 创建的 [自动生成器](https://machine-builder.itch.io/frg-v2)，你应该注意这个工具有一个免费版本功能有限，要享受完整功能请使用付费版本。不过，我们仍然会在这里学习一些其他的手动特征生成方法，因为有些东西（如矿石）作为 `ore_feature` 生成比作为 `structure_template_feature` 生成效率高得多。

让我们以本教程为例，让我们的 `wiki:blocky` 自定义方块作为矿石生成。我会按简单的方式做：

1. 打开 _bridge._，选择你的附加包。
1. _添加新文件>features>diamond_ore 和添加新文件>feature_rules>diamond_ore_。
1. 现在我将保存文件并在代码编辑器中打开它们，进行必要的修改。

_如果你在安装 bridge. 时遇到问题，你也可以轻松地从头编写文件或从其他地方复制。**一个找到原版文件的地方是[示例包](https://www.minecraft.net/en-us/addons)，另一个更完整的地方是[bridge. 的仓库](https://github.com/bridge.-core/bridge../tree/master/static/vanilla)**。_

## 特征

特征位于 `BP/features`，基本上是存储在游戏文件中的一组方块，可以通过 _feature_rule_ 放置。特征的**文件名**必须与**标识符**匹配。

你可以在 [bedrock.dev/r/Features](https://bedrock.dev/r/Features) 上找到它们的文档

<CodeHeader>BP/features/blocky_ore_feature.json</CodeHeader>

```json
{
    "format_version": "1.13.0",
    "minecraft:ore_feature": {
        "description": {
            "identifier": "blocky_ore_feature"
        },
        "count": 8,
        "places_block": "wiki:blocky",
        "may_replace": [
            {
                "name": "minecraft:stone",
                "states": {
                    "stone_type": "andesite"
                }
            },
            {
                "name": "minecraft:stone",
                "states": {
                    "stone_type": "andesite_smooth"
                }
            },
            {
                "name": "minecraft:stone",
                "states": {
                    "stone_type": "diorite"
                }
            },
            {
                "name": "minecraft:stone",
                "states": {
                    "stone_type": "diorite_smooth"
                }
            },
            {
                "name": "minecraft:stone",
                "states": {
                    "stone_type": "granite"
                }
            },
            {
                "name": "minecraft:stone",
                "states": {
                    "stone_type": "granite_smooth"
                }
            },
            {
                "name": "minecraft:stone",
                "states": {
                    "stone_type": "stone"
                }
            }
        ]
    }
}
```

-   `minecraft_ore_feature` 是自动放置矿石的特定特征类型。每个特征类型都有自己的特定语法。（还有 `single_block_feature` 放置单个方块而不是矿石群等）
-   `identifier` 在这种情况下不需要命名空间。命名空间是可选的，不应添加到文件名中。
-   `count` 是矿石"簇"的最大大小，或者同时生成的实际矿石方块的数量。
-   `places_block` 接受要放置的方块的标识符作为值。
-   `may_replace` 接受特征可以替换的所有方块作为参数。如果它生成在未包含在其中的方块之上，该方块将保持原位而不会被替换。

## 特征规则

**特征规则**控制 _features_（以及未来的 _structures_）的放置位置和方式。

<CodeHeader>BP/feature_rules/overworld_underground_blocky_ore_feature.json</CodeHeader>

```json
{
    "format_version": "1.13.0",
    "minecraft:feature_rules": {
        "description": {
            "identifier": "overworld_underground_blocky_ore_feature",
            "places_feature": "blocky_ore_feature"
        },
        "conditions": {
            "placement_pass": "underground_pass",
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
            "iterations": 100,
            "coordinate_eval_order": "zyx",
            "x": {
                "distribution": "uniform",
                "extent": [0, 16]
            },
            "y": {
                "distribution": "uniform",
                "extent": [0, 16]
            },
            "z": {
                "distribution": "uniform",
                "extent": [0, 16]
            }
        }
    }
}
```

-   `description`
    -   `identifier` 不需要命名空间，但文件名需要匹配。
    -   `places_feature` 接受此规则控制的特征的标识符作为值。
-   `conditions`
    -   `placement_pass` 特征如何传递。
    -   `biome_filter` 测试特征将在哪些生物群系中生成，与生成规则完全相同。
-   `distribution`
    -   `iterations` 基本上是概率。我设置为 100 以使其在 everywhere 生成，但对于 diamond_ore，这设置为 1。
    -   接下来的四个组件显示矿石将向哪个方向"拖动"。
        _需要更多说明_

测试矿石是否生成的最简单方法是使用此命令在低 y 层级执行 `/fill ~15 ~5 ~15 ~-15 ~-15 ~-15 air 0 replace stone`：它将保留选中区域中的所有内容，但 stone（石头）除外：

![](ore_gen_sans_stone.jpg)

是的，100 作为 "iterations" 确实太多了 ;)

建议继续查看其他特征和特征规则的原版文件以学习进一步的技术。然而，你刚学会的足以创建需要生成的大部分内容。

---

## 自定义结构

### 结构模板特征

从 MCBE v1.16.20 开始，**自定义生成结构是可能的**
生成结构的一种简单方法是前面提到的 [这个](https://machine-builder.itch.io/frg-v2) MACHINE_BUILDER 自动生成器。它为你的结构生成所有三个所需文件：`feature_rules/mystructure.feature_rule.json`、`feature_rules/mystructure.feature.json` 和 `structures/mystructure.mcstructure`。你可以在 Minecraft 本身中通过结构方块详细了解如何定义 `.mcstructures`[here](/nbt/mcstructure)。

---

现在你有了 `.mcstructure`，是时候写你的 `feature` 和 `feature rule` 了。后者与矿石相同（请参阅本文开头）。让我们继续讨论 **特征**。

-   请记住，命名空间不是必需的，文件名必须匹配标识符，但不包括命名空间。因此，如果你有一个标识符为 `wiki:myfeaturerule` 或 simply `myfeaturerule` 的特征规则，文件名在两种情况下都可以是 `myfeaturerule.json`。

这是来自[特征文档](https://bedrock.dev/r/Features#minecraft:structure_template_feature) 的代码示例：

<CodeHeader></CodeHeader>

```json
{
    "format_version": "1.13.0",
    "minecraft:structure_template_feature": {
        "description": {
            "identifier": "wiki:hot_air_balloon_feature"
        },
        "structure_name": "wiki:hot_air_balloon",
        "adjustment_radius": 8,
        "facing_direction": "random",
        "constraints": {
            "unburied": {},
            "block_intersection": {
                "block_whitelist": ["minecraft:air"]
            }
        }
    }
}
```

-   `structure_name` 是结构的标识符，即你通过结构方块保存的标识符。

### Jigsaw 结构

Jigsaw 结构可以非常小，也可以非常大，最大可达 256 个方块！

Jigsaw 允许像村庄或遗迹那样的大型随机结构在世界范围内生成，并且可以通过 `/locate` 找到，这与结构特征不同。
它们非常强大，更多信息可以在[这里](/world-generation/jigsaw-structures)找到。

差不多就是这样！现在你可以在世界中生成自己的自定义结构了。

## 你目前的进度

**你已完成：**

-   [x] 创建了你的第一个生物群系。
-   [x] 让你的第一个矿石自然生成。
-   [x] 学会了使用 bridge. 生成原版文件和参考。
-   [x] 了解了其他自定义生成方法。
-   [x] 创建了自定义结构。