---
title: 共享结构
description: JSON 结构可以在 addons 系统中的多个位置表示。
mentions:
    - Ciosciaa
    - ThomasOrs
    - QuazChick
---

JSON 结构可以在 add-ons 系统中的多个位置表示。

## 方块描述符

方块描述符可用于检查符合指定参数的方块。例如，方块描述符用于方块[放置过滤器](/blocks/block-components#placement-filter)来确定自定义方块可以在哪些类型的方块上存活。

### 方块类型描述符

<CodeHeader>方块描述符</CodeHeader>

```json
{
    "name": "wiki:custom_block"
}
```

### 方块状态描述符

<CodeHeader>方块描述符</CodeHeader>

```json
{
    "name": "wiki:custom_block",
    "states": {
        "wiki:custom_state": 5
    }
}
```

### 方块标签描述符

只能访问 `q.all_tags()`{lang=molang} 和 `q.any_tag()`{lang=molang} 查询函数。

<CodeHeader>方块标签描述符</CodeHeader>

```json
{
    "tags": "q.any_tag('minecraft:is_axe_item_destructible', 'wiki:custom_tag')"
}
```

## 物品描述符

物品描述符可用于检查符合指定参数的物品。例如，物品描述符用于物品[可修复](/items/item-components#repairable)组件来确定可以使用哪些类型的物品来修复该物品。

### 物品类型描述符

<CodeHeader>物品描述符</CodeHeader>

```json
{
    "name": "wiki:custom_item"
}
```

### 物品标签描述符

只能访问 `q.all_tags()`{lang=molang} 和 `q.any_tag()`{lang=molang} 查询函数。

<CodeHeader>物品标签描述符</CodeHeader>

```json
{
    "tags": "q.any_tag('minecraft:is_axe', 'wiki:custom_tag')"
}
```

## 范围对象

范围对象定义两个数字之间的范围。

<CodeHeader>范围对象示例</CodeHeader>

```json
{
    "min": 2,
    "max": 4
}
```

如果提供了范围对象，将随机选择一个包含在最小值和最大值之间的值。每次使用范围对象时都会重新进行随机计算，不会保留之前的抽取结果。最大值不能小于最小值，但它们可以相等以将抽取固定为特定值。

## 分数对象

分数对象使用分子和分母定义分数。

<CodeHeader>分数对象示例</CodeHeader>

```json
{
    "numerator": 3,
    "denominator": 5
}
```

使用该对象的位置将使用计算后的除法结果，即 `numerator` ÷ `denominator`。分子和分母都必须至少为 `1`，并且分母不能等于分子。