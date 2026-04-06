---
title: 无敌实体
category: 教程
tags:
    - beginner
mentions:
    - SirLich
    - Joelant05
    - solvedDev
    - MedicalJewel105
description: 学习如何创建无敌实体。
---

## 使用伤害传感器

禁用实体伤害的最佳和最灵活的方式是使用 `minecraft:damage_sensor` 组件。该组件允许我们使用 `filters` 来确定哪些伤害来源可以伤害我们的实体。

了解此组件的最佳方式是使用伤害传感器的原版示例或阅读[文档](https://bedrock.dev/docs/stable/Entities#minecraft:damage_sensor)

### 完全无敌实体

<CodeHeader>BP/entities/entity.json#minecraft:entity/components</CodeHeader>

```json
"minecraft:damage_sensor": {
    "triggers": {
        "cause": "all",
        "deals_damage": "no"
    }
}
```

### 禁用来自玩家的伤害

<CodeHeader>BP/entities/entity.json#minecraft:entity/components</CodeHeader>

```json
"minecraft:damage_sensor": {
    "triggers": {
        "on_damage": {
            "filters": {
                "test": "is_family",
                "subject": "other",
                "value": "player"
            }
        },
        "deals_damage": "no"
    }
}
```

## 最低生命值

`minecraft:health` 组件中的 `min` 属性允许我们创建无法死亡的无敌实体。这包括使用 `/kill @e` 时。这不是一个好的解决方案，因为这样的实体很难被移除。

如果你选择使用此组件，请确保你有另一种方法来杀死实体。从环境传感器、计时器或交互中触发 `minecraft:instant_despawn` 是一个很好的解决方案。你也可以使用 `/event` 调用它或考虑使用脚本API中的 `Entity.remove()`{lang=js}。

<CodeHeader>BP/entities/entity.json#minecraft:entity/components</CodeHeader>

```json
"minecraft:health": {
    "value": 1,
    "max": 1,
    "min": 1
}
```

请注意，将其设置为0会破坏一些死亡和生成动画/效果。
