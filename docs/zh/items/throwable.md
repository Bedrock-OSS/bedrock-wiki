---
title: 可投掷物品
description: 学习如何创建可作为投射物投掷的自定义物品。
category: 教程
tags:
    - intermediate
mentions:
    - Fabrimat
    - MedicalJewel105
    - Lufurrius
    - IlkinQafarov
    - seeit360
    - TheItsNameless
    - SmokeyStack
    - ThomasOrs
    - QuazChick
---

::: tip
本教程假定你具备Molang、动画控制器和实体定义的基础知识。
:::

像喷溅药水或三叉戟这样的物品是可以投掷的特殊物品。

## 物品

首先，你需要制作实际的物品：

<CodeHeader>BP/items/throwable_item.item.json</CodeHeader>

```json
{
    "format_version": "1.26.10",
    "minecraft:item": {
        "description": {
            "identifier": "wiki:throwable_item"
        },
        "components": {
            "minecraft:max_stack_size": 16,
            "minecraft:throwable": {
                "do_swing_animation": true
            },
            "minecraft:projectile": {
                "projectile_entity": "wiki:throwable_item_entity"
            },
            "minecraft:icon": "wiki:throwable_item"
        }
    }
}
```

## 实体

实体将是实际被投掷的物品，它将表现得像一个投射物。
请确保添加雪球运行时标识符以使你的投射物实际被发射，而不是生成。你也可以尝试其他投射物运行时标识符。

<CodeHeader>BP/entities/throwable_item_entity.se.json</CodeHeader>

```json
{
    "format_version": "1.16.0",
    "minecraft:entity": {
        "description": {
            "identifier": "wiki:throwable_item_entity",
            "is_spawnable": false,
            "is_summonable": true,
            "runtime_identifier": "minecraft:snowball"
        },
        "components": {
            "minecraft:collision_box": {
                "width": 0.25,
                "height": 0.25
            },
            "minecraft:projectile": {
                "on_hit": {
                    "grant_xp": {
                        "minXP": 3,
                        "maxXP": 5
                    },
                    "impact_damage": {
                        "damage": 16
                    },
                    "remove_on_hit": {}
                },
                "power": 0.7,
                "gravity": 0.03,
                "angle_offset": -20,
                "hit_sound": "glass"
            },
            "minecraft:physics": {},
            "minecraft:pushable": {
                "is_pushable": true,
                "is_pushable_by_piston": true
            },
            "minecraft:conditional_bandwidth_optimization": {
                "default_values": {
                    "max_optimized_distance": 80,
                    "max_dropped_ticks": 10,
                    "use_motion_prediction_hints": true
                }
            }
        }
    }
}
```

此实体基于原版喷溅药水。

然后你可以通过编辑`minecraft:projectile`组件来定制其行为，在这种情况下，被投掷的物品将授予一些经验值并伤害它击中的任何实体。

## 结论

一旦你有了可投掷物品，你可以开始尝试各种事情，比如调整其力量、效果、动画或将其与[区域效果云](/entities/area-effect-clouds)结合。唯一的限制是你的想象力。
