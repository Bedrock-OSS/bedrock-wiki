---
title: 基于工具的破坏
description: 了解应使用哪种类型的工具来挖掘你的方块。
category: 教程
tags:
    - intermediate
license: true
mentions:
    - QuazChick
---

:::tip 格式版本 1.26.10
本教程假设你对方块和[方块标签](/blocks/block-tags)有基本理解。
在开始之前请查看[方块指南](/blocks/blocks-intro)。
:::

## 开始之前

不幸的是，[可挖掘](/blocks/block-components#可挖掘)组件的参数名称非常不准确，使得基于工具的破坏（以及整体方块破坏）特别令人困惑。

为了正确遵循本教程，请确保你理解以下几点：

-   `seconds_to_destroy` 参数不代表破坏方块所需的**秒数**。

    此参数实际上定义方块的**硬度**值，用作确定方块挖掘时长的基础值。

-   `item_specific_speeds` 的 `destroy_speed` 参数不代表方块破坏的**速度**。

    如果它代表其名称暗示的速度测量，较高的值（表示更快的速度）将导致更短的挖掘时长，然而较高的值反而会增加挖掘时长。

    此参数定义方块的**硬度**值（与 `seconds_to_destroy` 相同），当使用指定的 `item` 挖掘时。

在本页面中，我们将使用**硬度**一词来指代 `seconds_to_destroy` 和 `destroy_speed` 所表示的值（这是正确的术语）。

## 方块硬度

### 定义方块硬度

方块的**硬度**值使用[可挖掘](/blocks/block-components#可挖掘)组件设置。
默认情况下，方块的硬度为 `0`{lang=json}，意味着可以即时挖掘。

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:destructible_by_mining": {
    "seconds_to_destroy": 2 // 将方块硬度设为2
}
```

以下是 vanilla 方块使用的一些硬度值：

-   泥土：`0.5`{lang=json}
-   石头：`1.5`{lang=json}
-   木板：`2`{lang=json}

_你可以在 [Minecraft Wiki](https://minecraft.wiki/w/Breaking#Blocks_by_hardness) 上找到其他硬度值。_

### 定义合适的工具

目前有6个物品可破坏的 [vanilla 方块标签](/blocks/vanilla-block-tags)：

-   斧：`minecraft:is_axe_item_destructible`
-   锄：`minecraft:is_hoe_item_destructible`
-   镐：`minecraft:is_pickaxe_item_destructible`
-   剪刀：`minecraft:is_shears_item_destructible` ~~（不工作，见 [MCPE-189586](https://bugs.mojang.com/browse/MCPE-189586)）~~
-   铲：`minecraft:is_shovel_item_destructible`
-   剑：`minecraft:is_sword_item_destructible` ~~（不工作，见 [MCPE-189586](https://bugs.mojang.com/browse/MCPE-189586)）~~

将其中一个标签应用到你的方块将指示相关工具更快地挖掘方块。

:::tip 多个工具
方块不限于一个物品可破坏标签，让你的方块可以被多种工具更快地挖掘是可能的！

这可以在 vanilla 蜘蛛网中看到，它同时具有 `minecraft:is_shears_item_destructible` 和 `minecraft:is_sword_item_destructible`。
:::

这些标签可以应用到你的方块的 `components`：

<CodeHeader>BP/blocks/custom_stone.json</CodeHeader>

```json
{
    "format_version": "1.26.10",
    "minecraft:block": {
        "description": {
            "identifier": "wiki:limestone",
            "menu_category": {
                "category": "nature",
                "group": "minecraft:itemGroup.name.stone"
            }
        },
        "components": {
            "minecraft:destructible_by_mining": {
                "seconds_to_destroy": 1.5
            },
            // 允许镐更快地挖掘此方块
            "tag:minecraft:is_pickaxe_item_destructible": {}
        }
    }
}
```

## 基于工具的掉落

:::danger 不支持
没有正确的方法来指定需要哪些工具才能使方块掉落战利品。
以下部分描述了尽可能复制 vanilla 掉落机制的方法。
:::

:::danger 爆炸
以下方法会阻止方块在爆炸破坏时掉落战利品，而 vanilla 需要工具的方块在爆炸时仍会掉落。
:::

:::danger 精准采集
无法阻止使用精准采集附魔的物品挖掘时方块掉落自身。
:::

为了防止你的方块在没有所需工具时被破坏而掉落，你需要创建一个新的战利品表。

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:loot": "loot_tables/wiki/blocks/limestone.json"
```

### 战利品表

然后你可以使用 `match_tool` 条件来测试某些工具物品，例如铁等级或更高的镐。

与可挖掘组件类似，`match_tool` 参数命名不当，因为它们没有表明其过滤基于工具的哪个方面。以下是每个过滤器参数更好的描述：

-   `minecraft:match_tool_filter_all` 检查物品是否具有所有列出的[标签](/items/item-tags)。
-   `minecraft:match_tool_filter_any` 检查物品是否至少具有列出的标签之一。
-   `minecraft:match_tool_filter_none` 检查物品是否没有列出的任何标签。

:::tip 排除空手
默认情况下，`match_tool` 组件将匹配空手。
为防止这种情况，你需要确保堆叠大小（`count`）不为0。
:::

<CodeHeader>BP/loot_tables/wiki/blocks/limestone.json</CodeHeader>

```json
{
    "pools": [
        {
            "rolls": 1,
            "conditions": [
                {
                    "condition": "match_tool",
                    "count": 1, // 确保手不为空
                    "minecraft:match_tool_filter_all": [
                        "minecraft:is_tool",
                        "minecraft:is_pickaxe" // 根据必须使用的工具类型更改此标签。
                    ],
                    // 可以成功挖掘方块的工具等级列表。
                    // 如果你的方块应该无论工具等级如何都掉落，你应该移除此过滤器而不是列出每个等级。
                    "minecraft:match_tool_filter_any": [
                        "minecraft:iron_tier",
                        "minecraft:diamond_tier",
                        "minecraft:netherite_tier"
                    ]
                }
            ],
            "entries": [
                {
                    "type": "item",
                    "name": "wiki:limestone"
                }
            ]
        }
    ]
}
```

### 挖掘惩罚

方块破坏速度在使用非正确工具掉落时**应该**慢3倍以上。
然而，由于自定义方块无法正确定义它们需要的工具来掉落，这种挖掘惩罚不适用。

我们可以通过使方块的硬度比不使用正确工具时**高3.33倍**来复制这种惩罚。
这可以通过使用可挖掘组件的 `item_specific_speeds` 参数来实现。

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:destructible_by_mining": {
    "seconds_to_destroy": 6.66, // 不使用工具时的硬度（2 × 3.33 = 6.66）
    "item_specific_speeds": [
        {
            "destroy_speed": 2, // 使用工具时的硬度
            "item": {
                "tags": "q.all_tags('minecraft:is_tool', 'minecraft:is_pickaxe') && q.any_tag('minecraft:iron_tier', 'minecraft:diamond_tier', 'minecraft:netherite_tier')"
            }
        }
    ]
}
```

### 等级可破坏标签

还有一些等级可破坏的 [vanilla 方块标签](/blocks/vanilla-block-tags)，表明方块需要的工具等级才能掉落。
虽然将这些标签之一添加到你的方块不会带来方块功能的变化（例如使用自定义战利品表阻止掉落），但应该将适当的标签添加到你方块以与 vanilla 方块保持一致。

-   石头或更好：`minecraft:stone_tier_destructible`
-   铁或更好：`minecraft:iron_tier_destructible`
-   钻石或更好：`minecraft:diamond_tier_destructible`

## 不好的做法

-   不要使用 `item_specific_speeds` 为每个工具物品单独定义**硬度**值。

    这将阻止 Efficiency 附魔和自定义工具影响你的方块，并使你的 JSON 不必要地冗长。
    你应该**始终**使用 `minecraft:is_*_item_destructible` 标签。