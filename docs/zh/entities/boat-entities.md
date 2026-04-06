---
title: 创建船
category: 教程
tags:
    - intermediate
mentions:
    - SirLich
    - Joelant05
    - MedicalJewel105
    - StealthyExpertX
    - TheItsNameless
description: 学习如何制作船的行为。
---

:::warning 需要 1.16.100 或更低格式版本

行为格式版本现在需要 1.16.100 或更低版本，`minecraft:behavior.rise_to_liquid_level` 和 `minecraft:buoyant` 组件才能正常工作。
如果你找到了适用于更新格式版本的新方法，请考虑通过更新 Wiki 来贡献。
:::

## 使用运行时标识符

你可以[在此处](/entities/runtime-identifier)阅读更多关于运行时标识符的信息。使用运行时标识符，你可以实现船的大部分硬编码行为。但是，你的船不会跟随你旋转，并且它始终会朝北。

## 使用组件

目前，创建船实体的最佳方法是使用组件。1.16 引入了我们可以利用的新组件：`minecraft:behavior.rise_to_liquid_level` 和 `minecraft:buoyant`。在原版中，炽足兽使用第一个组件使其在熔岩上漂浮，但我们也可以将其用于水。

## 方法一：minecraft:behavior.rise_to_liquid_level

<CodeHeader>BP/entities/bar</CodeHeader>

```json
{
    "minecraft:entity": {
        "format_version": "1.14.0",
        "description": {
            "identifier": "wiki:boat",
            "is_summonable": true,
            "is_spawnable": true,
            "is_experimental": false
        },
        "components": {
            // 这是实现魔法效果的组件
            "minecraft:behavior.rise_to_liquid_level": {
                "priority": 0,
                // 此属性可以调整船高出水面的程度
                "liquid_y_offset": 0.5,
                // 正向垂直位移，即船向上移动的距离
                "rise_delta": 0.05,
                // 负向垂直位移，即船向下移动的距离
                "sink_delta": 0.05
                // 使用 rise_delta 和 sink_delta 来模拟波浪/弹跳效果
            },

            // 设置船在水中的速度
            "minecraft:underwater_movement": {
                "value": 5
            },
            // 这个组件很重要，没有它船会沉没
            "minecraft:navigation.walk": {
                "can_sink": false
            },
            "minecraft:rideable": {
                "seat_count": 1,
                "family_types": ["player"],
                "interact_text": "action.interact.enter_boat",
                "seats": {
                    "position": [0, 0, 0]
                }
            },
            // 如果你希望用 WASD 控制船，请添加此组件
            "minecraft:input_ground_controlled": {},
            "minecraft:health": {
                "value": 10,
                "max": 10
            },
            // 设置船在地面上的速度（如果你不希望船在地面上移动，请将其设为零）
            "minecraft:movement": {
                "value": 3
            },
            // 这是为了防止玩家离开船后船不停止
            "minecraft:movement.basic": {},
            "minecraft:collision_box": {
                "width": 1,
                "height": 1
            },
            "minecraft:physics": {}
        }
    }
}
```

## 方法二：minecraft:buoyant

<CodeHeader></CodeHeader>

```json
{
    "minecraft:entity": {
        "format_version": "1.14.0",
        "description": {
            "identifier": "wiki:boat",
            "is_summonable": true,
            "is_spawnable": true,
            "is_experimental": false
        },
        "components": {
            "minecraft:buoyant": {
                // 确定是否考虑重力（对瀑布很有用）
                "apply_gravity": true,
                // 范围：0-1。这控制船高出水面的程度
                "base_buoyancy": 1.0,
                // "波浪"会使实体上下弹跳。大浪只是放大这种效果。注意：将 simulate_waves 设为 false 不会完全消除此效果。
                "simulate_waves": true,
                // "大浪"击中此船的概率
                "big_wave_probability": 0.03,
                // "大浪"的强度
                "big_wave_speed": 10.0,
                // 如果移除此组件，船被向下拖拽的强度
                "drag_down_on_buoyancy_removed": 0,
                // 实体可以在其中浮起的方块。只允许真正的液体：熔岩和水
                "liquid_blocks": ["water"]
            },

            // 设置船在水中的速度
            "minecraft:underwater_movement": {
                "value": 5
            },
            // 这个组件很重要，没有它船会沉没
            "minecraft:navigation.walk": {
                "can_sink": false
            },
            "minecraft:rideable": {
                "seat_count": 1,
                "family_types": ["player"],
                "interact_text": "action.interact.enter_boat",
                "seats": {
                    "position": [0, 0, 0]
                }
            },
            // 如果你希望用 WASD 控制船，请添加此组件
            "minecraft:input_ground_controlled": {},
            "minecraft:health": {
                "value": 10,
                "max": 10
            },
            // 设置船在地面上的速度（如果你不希望船在地面上移动，请将其设为零）
            "minecraft:movement": {
                "value": 3
            },
            // 这是为了防止玩家离开船后船不停止
            "minecraft:movement.basic": {},
            "minecraft:collision_box": {
                "width": 1,
                "height": 1
            },
            "minecraft:physics": {}
        }
    }
}
```

## 使用哪种方法？

两种方法都适用，但各有优缺点。如果你想禁用弹跳效果，请使用第一种方法。如果你想获得更多控制，请使用第二种方法。我将第二种方法用于静态物体（如浮标），将第一种方法用于可移动实体（如船），以模拟原版行为。

## 自定义受伤动画

你可能还对[自定义受伤动画](/visuals/custom-hurt-animations)感兴趣。
