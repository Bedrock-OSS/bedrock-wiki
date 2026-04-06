---
title: 方块剔除
description: 方块剔除规则允许你根据周围方块移除模型的某些部分。
category: 视觉
tags:
    - intermediate
related:
    - /blocks/block-models
license: true
mentions:
    - legopitstop
    - QuazChick
---

:::tip 创建你的模型
在开始之前，请确保你已经为你的方块创建了模型。否则你将无法应用剔除规则！
:::

## 应用剔除规则

方块剔除规则允许你根据周围方块移除模型的某些部分。这有助于提升游戏性能，因为不会浪费资源去渲染方块中隐藏的部分。

剔除规则添加在你的资源包的 `block_culling` 文件夹中，格式如下：

<CodeHeader>RP/block_culling/lamp.json</CodeHeader>

```json
{
    "format_version": "1.21.80",
    "minecraft:block_culling_rules": {
        "description": {
            "identifier": "wiki:culling.lamp" // 在方块JSON几何组件中引用的标识符。
        },
        "rules": [ ... ] // 可以包含多个剔除规则的数组。
    }
}
```

然后在你的方块模型的 [`minecraft:geometry`](/blocks/block-components#geometry) 组件中应用它们：

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:geometry": {
    "identifier": "geometry.lamp", // 模型标识符
    "culling": "wiki:culling.lamp" // 方块剔除规则标识符
}
```

## 剔除整个骨骼

如果一个骨骼只能从一个方向看到，应该使用这种规则，意味着整个骨骼可以被剔除，而不是单独的面。

<CodeHeader>minecraft:block_culling_rules > rules</CodeHeader>

```json
{
    "direction": "up", // 如果灯的上方有一个完整的不透明方块，这个骨骼将被剔除。
    "geometry_part": {
        "bone": "lamp_bulb" // 要剔除的骨骼名称。
    }
}
```

## 剔除立方体面

当你想隐藏与完整不透明方块接触的立方体的特定面时，应使用这种规则。

<CodeHeader>minecraft:block_culling_rules > rules</CodeHeader>

```json
{
    "direction": "down", // 如果灯的下方有一个完整的不透明方块，这个骨骼将被剔除。
    "geometry_part": {
        "bone": "lamp_base", // 包含要剔除的立方体的骨骼名称。
        "cube": 0, // 骨骼"cubes"数组中立方体的零索引。
        "face": "down" // 要剔除的立方体面。通常与规则的"direction"相同，除非你的立方体已旋转。
    }
}
```

## 剔除条件

默认情况下，剔除规则会剔除相邻方块的完整不透明面。
但是，它们也可以根据规则的 `condition` 参数剔除其他类型的方块。

<CodeHeader>minecraft:block_culling_rules > rules</CodeHeader>

```json
{
    "cull_against_full_and_opaque": true, // 剔除完整的不透明方块。
    "condition": "same_block", // 对具有相同标识符的方块进行剔除。
    "direction": "down",
    "geometry_part": {
        "bone": "lamp_bulb" // 包含要剔除的立方体的骨骼名称。
    }
}
```

### 相同方块

当使用 `"same_block"`{lang=json} 条件时，如果相邻方块的标识符与该方块相同，指定的几何部分也会被剔除。

### 相同方块置换

当使用 `"same_block_permutation"`{lang=json} 条件时，如果相邻方块的标识符和状态值与该方块相同，指定的几何部分也会被剔除。

### 相同剔除层

当使用 `"same_culling_layer"`{lang=json} 条件时，如果相邻方块具有与该方块相同的 `culling_layer` 标识符，指定的几何部分也会被剔除。