---
title: 方块置换
description: 方块置换代表方块可能处于的所有状态配置。
category: 通用
nav_order: 7
related:
    - /blocks/block-states
    - /blocks/block-traits
license: true
mentions:
    - QuazChick
    - SmokeyStack
---

:::tip 格式版本 1.26.10
在学习方块置换之前，你应该熟悉[方块状态](/blocks/block-states)。

使用方块状态时，确保你的包清单中的 `min_engine_version` 是 1.20.20 或更高版本。
:::

:::danger 覆盖组件
每个组件只能有**一个**实例同时激活。
重复的组件将被最新的[`置换`](#条件应用组件)数组条目覆盖。
:::

## 什么是置换？

方块置换代表每个方块可能具有的所有状态值配置。

例如，如果你添加了一个带有两个布尔状态的自定义方块...

<CodeHeader>minecraft:block</CodeHeader>

```json
"description": {
    "identifier": "wiki:permutations_example",
    "states": {
        "wiki:first_state": [false, true],
        "wiki:second_state": [false, true]
    }
}
```

...世界中将添加以下4个方块置换：

| 方块类型                  | `wiki:first_state` | `wiki:second_state` |
| --------------------------- | ------------------ | ------------------- |
| `wiki:permutations_example` | `false`{lang=json} | `false`{lang=json}  |
| `wiki:permutations_example` | `true`{lang=json}  | `false`{lang=json}  |
| `wiki:permutations_example` | `false`{lang=json} | `true`{lang=json}   |
| `wiki:permutations_example` | `true`{lang=json}  | `true`{lang=json}   |

要计算你的方块有多少置换，将每个状态的有效状态值数量相乘。
例如，上面的例子计算是 2 × 2，意味着这个方块有4个置换。

### 澄清误解

-   所有方块都有置换，即使没有状态的方块也有1个置换，仅由方块标识符组成。
-   你方块拥有的置换数量取决于它的状态，而不是 `置换` 数组中的项目数量。

## 条件应用组件

方块 `置换` 数组提供了一种根据其当前置换有条件地应用组件（包括标签）到方块的方法。

`置换` 数组中的组件可以覆盖方块的基础组件以及其他组件列表中的组件。`置换` 数组中最新的组件列表优先。

_需要格式版本 [1.19.70](/blocks/block-format-history#_1-19-70) 或更高版本。_

<CodeHeader>BP/blocks/custom_block.json</CodeHeader>

```json
{
    "format_version": "1.26.10",
    "minecraft:block": {
        "description": {
            "identifier": "wiki:custom_block",
            "states": {
                "wiki:integer_state_example": [2, 4, 6, 8],
                "wiki:boolean_state_example": [false, true],
                "wiki:string_state_example": ["red", "green", "blue"]
            }
        },
        "components": {},
        "permutations": [
            {
                "condition": "q.block_state('wiki:integer_state_example') == 2",
                "components": {
                    "minecraft:friction": 0.1
                }
            },
            {
                "condition": "q.block_state('wiki:boolean_state_example')",
                "components": {
                    "minecraft:friction": 0.8 // 覆盖前一个组件列表中定义的摩擦力。
                }
            },
            {
                "condition": "q.block_state('wiki:string_state_example') == 'red' && !q.block_state('wiki:boolean_state_example')",
                "components": {
                    "minecraft:geometry": "geometry.pig"
                }
            }
        ]
    }
}
```

### 置换条件

当评估为真值（不是 `false`{lang=json} 或 `0`{lang=json}）时，相关的组件列表将被应用。

置换条件写为 Molang 表达式字符串，且上下文非常有限：

-   条件纯粹基于方块的置换，因此只能访问 `q.block_state()`{lang=molang} 查询函数。
-   这也意味着条件不能有副作用。
    -   以下数学函数不能使用：`math.die_roll()`{lang=molang}、`math.die_roll_integer()`{lang=molang}、`math.random()`{lang=molang}、`math.random_integer()`{lang=molang}。
    -   不能分配变量（包括 `temp`{lang=molang} 变量）。

```molang
q.block_state('wiki:integer_state_example') < 6 || !q.block_state('wiki:boolean_state_example')
```

## 置换限制

与所有方块相关的事物一样，Mojang 为了防止不良行为而设置了一些限制。

### 每个方块的最大数量

一个方块不能有超过65,536个置换（相当于4个状态，每个状态16个值）。
这是因为方块置换必须能用16位表示。

超过此限制将导致某些状态从你的方块中缺失，以使其置换数量在限制内，同时会有内容日志错误。

### 每个世界的最大数量

一个世界**不应该**有超过65,536个**自定义**方块置换注册（不一定是放置的）。

超过此限制不应影响方块功能，但会导致以下内容日志警告：

> [Blocks][warning]-World with over 65536 block permutations may degrade performance. Current world has XXXXX permutations.