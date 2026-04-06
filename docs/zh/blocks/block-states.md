---
title: 方块状态
description: 方块状态允许你的方块拥有变体，每个变体通过置换拥有自己的功能和外观。
category: 通用
nav_order: 4
related:
    - /blocks/block-traits
    - /blocks/block-permutations
license: true
mentions:
    - QuazChick
    - SmokeyStack
---

:::tip 格式版本 1.26.10
使用方块状态时，请确保你的包清单中的 `min_engine_version` 为 1.20.20 或更高。
:::

方块状态允许你的方块拥有变体，每个变体通过 [置换](/blocks/block-permutations) 拥有自己的功能和外观。

## 定义状态

有效的状态值可以定义为布尔值、整数或字符串数组，或者通过使用对象定义为整数范围。值数组中的第一项用作默认值。

每个状态最多可以定义 16 个有效值。对于整数范围状态，这意味着 `max` 值不能比 `min` 值高出超过 15。

_需要格式版本 [1.19.70](/blocks/block-format-history#_1-19-70) 或更高。_

<CodeHeader>BP/blocks/custom_block.json</CodeHeader>

```json
{
    "format_version": "1.26.10",
    "minecraft:block": {
        "description": {
            "identifier": "wiki:custom_block",
            "states": {
                "wiki:string_state_example": ["red", "green", "blue"],
                "wiki:boolean_state_example": [false, true],
                "wiki:integer_state_example": [1, 2, 3],
                "wiki:integer_range_state_example": {
                    "values": { "min": 0, "max": 5 } // 与 [0, 1, 2, 3, 4, 5] 相同
                }
            }
        },
        "components": { ... },
        "permutations": [ ... ]
    }
}
```

## 获取状态值

以下是在不同上下文中获取方块状态当前值的方法。

### Molang 查询函数

状态值由 `q.block_state()`{lang=molang} 查询函数返回。

<CodeHeader>Molang 表达式</CodeHeader>

```molang
q.block_state('wiki:string_state_example') == 'blue'
```

### 命令参数

[方块状态参数](/commands/block-states) 包含在 `execute` 和 `testforblock` 等命令中，可用于检查方块状态的值。

<CodeHeader>命令</CodeHeader>

```c
execute if block ~~~ wiki:custom_block["wiki:string_state_example"="blue", "wiki:integer_state_example"=4] run kill
```

### Script API

[`BlockPermutation.getState()`{lang=js}](https://learn.microsoft.com/minecraft/creator/scriptapi/minecraft/server/blockpermutation#getstate) 方法允许你获取不同状态的当前值。

<CodeHeader>脚本</CodeHeader>

```js
customBlock.permutation.getState("wiki:integer_state_example") === 3;
```

## 设置状态值

### 命令参数

[方块状态参数](/commands/block-states) 包含在 `setblock` 和 `fill` 等命令中，可用于将状态更改为默认值以外的值。

<CodeHeader>命令</CodeHeader>

```c
setblock ~~~ wiki:custom_block["wiki:string_state_example"="blue", "wiki:integer_state_example"=4]
```

### Script API

[`BlockPermutation.withState()`{lang=js}](https://learn.microsoft.com/minecraft/creator/scriptapi/minecraft/server/blockpermutation#withstate) 方法返回一个新的方块置换，其中指定的状态值已更改。可以使用 [`Block.setPermutation()`{lang=js}](https://learn.microsoft.com/minecraft/creator/scriptapi/minecraft/server/block#setpermutation) 方法将此置换应用于方块，如下所示。

<CodeHeader>脚本</CodeHeader>

```js
customBlock.setPermutation(customBlock.permutation.withState("wiki:boolean_state_example", false));
```
