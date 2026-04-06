---
title: 固体实体
description: 固体实体是玩家可以碰撞、踩踏或以其他方式物理交互而不会穿过的实体。
category: 教程
tags:
    - intermediate
mentions:
    - SirLich
    - Joelant05
    - Chikorita-Lover
    - Lufurrius
    - MedicalJewel105
    - ThomasOrs
    - QuazChick
---

固体实体是玩家可以碰撞、踩踏或以其他方式物理交互而不会穿过的实体。这类实体有很多用途，例如模拟方块。

本文将讨论可以创建固体实体的一些方法。

并非所有技术都适合所有场景。进行实验，找出最适合您的方法。

## 可碰撞实体

这通常是创建具有固体碰撞的实体的最佳选项，允许玩家与实体发生碰撞，而无需修改玩家实体 JSON。

<CodeHeader>BP/entities/solid_entity.json</CodeHeader>

```json
{
    "format_version": "1.26.10",
    "minecraft:entity": {
        "description": {
            "identifier": "wiki:solid_entity",
            "is_spawnable": true,
            "is_summonable": true
        },
        "components": {
            // 允许其他实体与此实体发生碰撞
            "minecraft:is_collidable": {},
            "minecraft:collision_box": {
                "height": 1,
                "width": 1
            },
            // 防止旋转
            "minecraft:body_rotation_blocked": {},
            "minecraft:rotation_axis_aligned": {},
            // 在使用 fancy 图形时隐藏实体的阴影
            "minecraft:renders_when_invisible": {},
            "minecraft:spell_effects": {
                "add_effects": [
                    {
                        "duration": "infinite",
                        "effect": "invisibility",
                        "visible": false
                    }
                ]
            }
        }
    }
}
```

## 可堆叠实体

将 `minecraft:is_stackable` 组件添加到您的实体将允许它与其他可堆叠实体发生碰撞，例如船和矿车。

您还需要添加 `minecraft:push_through` 并将其 `value` 参数设置为 1。

<CodeHeader>minecraft:entity</CodeHeader>

```json
"components": {
    "minecraft:is_stackable": {},
    "minecraft:push_through": 1
}
```

## 运行时标识符

[运行时标识符](/entities/runtime-identifier) 可用于实现固体实体，但目前只有 2 个，每个都有特定的形状和自己的副作用。两个碰撞形状都无法更改或缩放。

### 船

<CodeHeader>BP/entities/solid_entity.json</CodeHeader>

```json
{
    "format_version": "1.26.10",
    "minecraft:entity": {
        "description": {
            "identifier": "wiki:solid_entity",
            "runtime_identifier": "minecraft:boat"
            ...
        }
    }
}
```

-   船形固体碰撞
-   某些其他类似船的效果

### 潜影盒

<CodeHeader>BP/entities/solid_entity.json</CodeHeader>

```json
{
    "format_version": "1.26.10",
    "minecraft:entity": {
        "description": {
            "identifier": "wiki:solid_entity",
            "runtime_identifier": "minecraft:shulker"
            ...
        }
    }
}
```

-   1×1 方块大小的固体碰撞。
-   附着于方块网格。
-   当支撑方块被移除时，会随机传送。

## 使用方块碰撞

在某些情况下，可能最好使用 `/setblock` 或 `/fill` 来放置屏障方块，可以是静态的或动态的。需要有一种方法来放置屏障，以及移除它们的方法。

`/fill ~ ~ ~ ~ ~1 ~ barrier 0 replace air`
在 1x1x2 区域放置屏障。

`/fill ~1 ~1 ~1 ~-1 ~-1 ~-1 air 0 replace barrier`
移除 3x3x3 区域内的屏障。

这些[命令](/animation-controllers/entity-commands)必须以恒定速率触发以保持一致性。它们可以通过实体组件或动画控制器来触发。
