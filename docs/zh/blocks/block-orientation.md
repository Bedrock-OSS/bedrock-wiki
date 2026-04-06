---
title: 方块朝向
description: 了解如何创建可以面向不同方向的方块。
category: 教程
tags:
    - easy
related:
    - /blocks/intercardinal-orientation
license: true
mentions:
    - Ultr4Anubis
    - SmokeyStack
    - ihategravel2
    - MedicalJewel105
    - MajestikButter
    - QuazChick
---

:::tip 格式版本 1.26.10
本教程假设你对方块有基本了解，包括[方块状态](/blocks/block-states)和[方块特性](/blocks/block-traits)。
在开始之前请查看[方块指南](/blocks/blocks-intro)。
:::

## 朝向类型

-   [轴对齐](#轴对齐)

    -   用于原木和玄武岩。
    -   3种轴对齐朝向。

-   [方块面附着](#方块面附着)

    -   用于物品框和梯子。
    -   6种附着方式：down、up、north、south、west和east。

-   [基本方向](#基本方向)

    -   用于南瓜和熔炉。
    -   4种方向：north、south、west和east。

-   [面向方向](#面向方向)

    -   用于发射器和观察者。
    -   6种方向：down、up、north、south、west和east。

-   [斜向方向](/blocks/intercardinal-orientation)

    -   用于旗帜、潮涌核心、头颅和告示牌。
    -   16种方向（22.5度间隔）

## 轴对齐

方块旋转与 vanilla 原木的旋转方式相同。

### 特性

为了设置决定方块附着位置的状态，我们将使用 `minecraft:placement_position` 方块特性，并启用 `minecraft:block_face` 状态。

状态包含的值对于原木旋转来说比我们需要的多，所以一些置换看起来会相同。

<CodeHeader>minecraft:block</CodeHeader>

```json
"description": {
    "identifier": "wiki:log_rotation_example",
    // 方块特性在这里定义
    "traits": {
        "minecraft:placement_position": {
            "enabled_states": ["minecraft:block_face"] // 可用于查询，例如 `q.block_state('minecraft:block_face') == 'north'`
        }
    }
}
```

### 置换

旋转利用方块置换。每个置换包含 `minecraft:transformation` 组件，通过检查 `minecraft:block_face` 状态并应用适当的旋转来实现基本方向旋转。

<CodeHeader>minecraft:block</CodeHeader>

```json
"permutations": [
    // X轴
    {
        "condition": "q.block_state('minecraft:block_face') == 'west' || q.block_state('minecraft:block_face') == 'east'",
        "components": {
            "minecraft:transformation": { "rotation": [0, 0, 90] }
        }
    },
    // Y轴
    {
        "condition": "q.block_state('minecraft:block_face') == 'down' || q.block_state('minecraft:block_face') == 'up'",
        "components": {
            "minecraft:transformation": { "rotation": [0, 0, 0] }
        }
    },
    // Z轴
    {
        "condition": "q.block_state('minecraft:block_face') == 'north' || q.block_state('minecraft:block_face') == 'south'",
        "components": {
            "minecraft:transformation": { "rotation": [90, 0, 0] }
        }
    }
]
```

## 基本方向

### 特性

为了设置决定方块方向的状态，我们将使用 `minecraft:placement_direction` 方块特性，并启用 `minecraft:cardinal_direction` 状态。

<CodeHeader>minecraft:block</CodeHeader>

```json
"description": {
    "identifier": "wiki:cardinal_direction_example",
    // 方块特性在这里定义
    "traits": {
        "minecraft:placement_direction": {
            "enabled_states": ["minecraft:cardinal_direction"], // 可用于查询，例如 `q.block_state('minecraft:cardinal_direction') == 'north'`
            "y_rotation_offset": 180 // 面向玩家
        }
    }
}
```

### 置换

旋转利用方块置换。每个置换包含 `minecraft:transformation` 组件，通过检查 `minecraft:cardinal_direction` 状态并应用适当的旋转来实现基本方向旋转。

**下面的旋转值假设你的模型正面朝北。**

<CodeHeader>minecraft:block</CodeHeader>

```json
"permutations": [
    // 朝北
    {
        "condition": "q.block_state('minecraft:cardinal_direction') == 'north'",
        "components": {
            "minecraft:transformation": { "rotation": [0, 0, 0] }
        }
    },
    // 朝西
    {
        "condition": "q.block_state('minecraft:cardinal_direction') == 'west'",
        "components": {
            "minecraft:transformation": { "rotation": [0, 90, 0] }
        }
    },
    // 朝南
    {
        "condition": "q.block_state('minecraft:cardinal_direction') == 'south'",
        "components": {
            "minecraft:transformation": { "rotation": [0, 180, 0] }
        }
    },
    // 朝东
    {
        "condition": "q.block_state('minecraft:cardinal_direction') == 'east'",
        "components": {
            "minecraft:transformation": { "rotation": [0, -90, 0] }
        }
    }
]
```

## 面向方向

### 特性

为了设置决定方块方向的状态，我们将使用 `minecraft:placement_direction` 方块特性，并启用 `minecraft:facing_direction` 状态。

<CodeHeader>minecraft:block</CodeHeader>

```json
"description": {
    "identifier": "wiki:facing_direction_example",
    // 方块特性在这里定义
    "traits": {
        "minecraft:placement_direction": {
            "y_rotation_offset": 180,
            "enabled_states": ["minecraft:facing_direction"] // 可用于查询，例如 `q.block_state('minecraft:facing_direction') == 'north'`
        }
    }
}
```

### 置换

旋转利用方块置换。每个置换包含 `minecraft:transformation` 组件，通过检查 `minecraft:facing_direction` 状态并应用适当的旋转来实现基本方向旋转。

**下面的旋转值假设你的模型正面朝北。**

<CodeHeader>minecraft:block</CodeHeader>

```json
"permutations": [
    // 朝下
    {
        "condition": "q.block_state('minecraft:facing_direction') == 'down'",
        "components": {
            "minecraft:transformation": { "rotation": [90, 0, 0] }
        }
    },
    // 朝上
    {
        "condition": "q.block_state('minecraft:facing_direction') == 'up'",
        "components": {
            "minecraft:transformation": { "rotation": [-90, 0, 0] }
        }
    },
    // 朝北
    {
        "condition": "q.block_state('minecraft:facing_direction') == 'north'",
        "components": {
            "minecraft:transformation": { "rotation": [0, 0, 0] }
        }
    },
    // 朝西
    {
        "condition": "q.block_state('minecraft:facing_direction') == 'west'",
        "components": {
            "minecraft:transformation": { "rotation": [0, 90, 0] }
        }
    },
    // 朝南
    {
        "condition": "q.block_state('minecraft:facing_direction') == 'south'",
        "components": {
            "minecraft:transformation": { "rotation": [0, 180, 0] }
        }
    },
    // 朝东
    {
        "condition": "q.block_state('minecraft:facing_direction') == 'east'",
        "components": {
            "minecraft:transformation": { "rotation": [0, -90, 0] }
        }
    }
]
```

## 方块面附着

### 特性

为了设置决定方块附着的位置，我们将使用 `minecraft:placement_position` 方块特性，并启用 `minecraft:block_face` 状态。

<CodeHeader>minecraft:block</CodeHeader>

```json
"description": {
    "identifier": "wiki:facing_direction_example",
    // 方块特性在这里定义
    "traits": {
        "minecraft:placement_position": {
            "enabled_states": ["minecraft:block_face"] // 可用于查询，例如 `q.block_state('minecraft:block_face') == 'north'`
        }
    }
}
```

### 置换

旋转利用方块置换。每个置换包含 `minecraft:transformation` 组件，通过检查 `minecraft:block_face` 状态并应用适当的旋转来实现基本方向旋转。

**下面的旋转值假设你的模型正面朝北。**

<CodeHeader>minecraft:block</CodeHeader>

```json
"permutations": [
    // 朝下
    {
        "condition": "q.block_state('minecraft:block_face') == 'down'",
        "components": {
            "minecraft:transformation": { "rotation": [-90, 0, 0] }
        }
    },
    // 朝上
    {
        "condition": "q.block_state('minecraft:block_face') == 'up'",
        "components": {
            "minecraft:transformation": { "rotation": [90, 0, 0] }
        }
    },
    // 朝北
    {
        "condition": "q.block_state('minecraft:block_face') == 'north'",
        "components": {
            "minecraft:transformation": { "rotation": [0, 0, 0] }
        }
    },
    // 朝西
    {
        "condition": "q.block_state('minecraft:block_face') == 'west'",
        "components": {
            "minecraft:transformation": { "rotation": [0, 90, 0] }
        }
    },
    // 朝南
    {
        "condition": "q.block_state('minecraft:block_face') == 'south'",
        "components": {
            "minecraft:transformation": { "rotation": [0, 180, 0] }
        }
    },
    // 朝东
    {
        "condition": "q.block_state('minecraft:block_face') == 'east'",
        "components": {
            "minecraft:transformation": { "rotation": [0, -90, 0] }
        }
    }
]
```