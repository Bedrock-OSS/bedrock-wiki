---
title: 生成物品
description: 学习如何生成物品实体。
category: 教程
tags:
    - intermediate
mentions:
    - SirLich
    - Joelant05
    - Dreamedc2015
    - yanasakana
    - MedicalJewel105
    - aexer0e
    - Xterionix
---

在世界中生成物品（就像掉落的那样）是相当常见的。本页面将介绍如何通过各种方法实现这一点，包括实体死亡、交互和通用方法。

## /loot

到目前为止生成物品的最简单方法是使用/loot。格式如下：

```
/loot spawn ~ ~ ~ loot "entities/cow"
```

<CodeHeader>BP/loot_tables/entities/cow.json</CodeHeader>

```json
"minecraft:loot": {
    "table": "loot_tables/entities/cow.json"
}
```

## 实体死亡

另一种简单的生成物品方法（也是最常见的方法）是在实体死亡时掉落物品。这可以通过将`minecraft:loot`组件添加到实体并将其链接到包含你要掉落的物品的战利品表（下面的示例中为`forium`）来实现。

<CodeHeader>BP/entities/my_entity.json#components</CodeHeader>

```json
"minecraft:loot": {
    "table": "loot_tables/entities/forium.json"
}
```

## 虚拟实体死亡

我们可以在一个[虚拟实体](/entities/dummy-entities)上使用`minecraft:loot`，该实体在我们生成它时死亡，从而创建一个`drop_entity`。这个实体可以像`/summon wiki:drop_entity`一样被召唤来生成物品。这在死亡粒子或声音不是问题的情况下很有用。

行为：

<CodeHeader>BP/entities/my_entity.json</CodeHeader>

```json
{
    "format_version": "1.16.0",
    "minecraft:entity": {
        "description": {
            "identifier": "wiki:drop_entity",
            "is_spawnable": true,
            "is_summonable": true,
            "is_experimental": false
        },

        "components": {
            // Causes the entity to die when spawned
            "minecraft:health": {
                "value": 0
            },
            "minecraft:loot": {
                "table": "loot_tables/entities/some_loot.json"
            }
        }
    }
}
```

## 交互

这里有一个名为"box"的实体的示例，它将在交互时掉落其内容。`spawn_items`中的表链接到包含要掉落物品的战利品表。在这个特定情况下，当实体被交互时还会调用`break_box`事件，添加一个移除box的组件组。

请注意，如果实体在交互时没有被移除，它可以再次交互并将生成物品。如果实体应该在交互后持续，可以将`cooldown`参数添加到实体以防止在指定时间内交互。或者，可以调用一个事件来移除包含此`minecraft:interact`组件的组件组。

<CodeHeader>BP/entities/my_entity.json#components</CodeHeader>

```json
"minecraft:interact": {
    "interactions": [
        {
            "on_interact": {
                "filters": {
                    "test": "is_family",
                    "subject": "other",
                    "value": "player"
                },
                "event": "break_box",
                "target": "self"
            },
            "swing": true,
            "spawn_items": {
                "table": "loot_tables/entities/box.json"
            }
        }
    ]
}
```

## 通用方法

这是一个可用于几乎任何场景的方法：实体死亡、基于动画的交互、一般物品掉落。这个方法特别创建用于在没有任何死亡动画、声音或粒子的情况下掉落物品。

设置物品掉落需要几个部分：一个带有行为的新实体、一个对应的动画控制器、一个不可见实体的资源（请参阅虚拟实体教程），和一个战利品表。设置完成后，在要掉落物品的位置生成实体。如果需要多个物品，可以为每个物品设置带有生成事件的组件组。

### 行为

物品使用`minecraft:behavior.drop_item_for`组件与`minecraft:navigation.walk`组件结合生成，后者是前者工作所必需的。请注意，以下中的`time_of_day_range`参数并未按照文档所列进行初始化，但这对于正常功能是必要的。如果希望在玩家很远时物品也能掉落，必须将`max_dist`参数增加到适当的值。

这种行为在物品掉落时似乎会将生物推回。因此，至关重要的是在地面上方一点召唤实体（或在下面的动画控制器中传送它），以避免物品在离生成位置几格的地方生成。减小碰撞箱的大小也可能有所帮助。

<CodeHeader>BP/entities/my_entity.json#components</CodeHeader>

```json
"minecraft:navigation.walk": {},
"minecraft:behavior.drop_item_for": {
    "priority": 1,
    "max_dist": 16,
    "loot_table": "loot_tables/entities/forium.json",
    "time_of_day_range": [0.0, 1.0]
}
```

### 动画控制器

**必须将以下动画控制器链接到实体**以在召唤时移除它。或者，可以使用带有时间线的动画。如果你不知道如何做这件事，请参考实体命令教程。

将实体传送到虚空中不会产生死亡动画、声音或粒子。使用两个转换以确保它不在与生成相同的tick被杀死。

<CodeHeader>BP/animation_controllers/my_entity.ac.json</CodeHeader>

```json
{
    "format_version": "1.10.0",
    "animation_controllers": {
        "controller.animation.drop_items.die": {
            "initial_state": "spawn",
            "states": {
                "spawn": {
                    "transitions": [
                        {
                            "delay": "1"
                        }
                    ]
                },
                "delay": {
                    "transitions": [
                        {
                            "die": "1"
                        }
                    ]
                },
                "die": {
                    "on_entry": ["/tp @s ~ -200 ~"]
                }
            }
        }
    }
}
```

## 结构方法

还有一种有趣的生成物品的方法——通过结构。
你可以用`structure_void`填充结构（这样在加载结构时空气不会替换方块）并将物品放入其中。
这种方法允许我们保留物品数据（如耐久度）。
然后你可以在任何时候和任何地方加载这个结构。

![](structure-method.png)
