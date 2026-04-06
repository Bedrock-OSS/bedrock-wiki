---
title: 方块状态
category: 通用
tags:
    - easy
mentions:
    - BedrockCommands
    - zheaEvyline
    - SmokeyStack
    - ThomasOrs
description: 学习如何在命令中使用方块状态。
---

## 简介

[来自基岩版命令社区 (BCC) Discord](https://bedrockcommands.org/)

方块状态（Block States），也称为方块属性，定义方块的外观或行为方式，包括方向、颜色、变体或电源状态等属性。这些在 `/clone`、`/execute`、`/fill`、`/setblock` 和 `/testforblock` 等命令中被广泛使用。

在 1.19.70 版本之前，基岩版依赖辅助值（metadata）来定义方块。然而，这种方法已被方块状态取代。辅助值在新版引擎中不再支持。

### 转换示例

<CodeHeader></CodeHeader>

```yaml
# 辅助值示例：
/setblock ~ ~ ~ wool 1

# 使用方块状态的等效写法：
/setblock ~ ~ ~ wool ["color"="orange"]
```

-   使用辅助值的命令在旧版本或 `min_engine_version` 设置为 1.19.63 或更低版本的行为包中可以正常工作。
-   将 `min_engine_version` 更新到 1.19.70 或更高版本需要转换为使用方块状态。

## 语法和示例

### 语法

-   方块状态用方括号（`[]`）括起来。
-   多个状态用逗号（`,`）分隔。
-   字符串使用引号（`" "`）包围（例如 `"birch"`、`"orange"`）。
-   整数（`0`、`1` 等）和布尔值（`true`、`false`）不应使用引号。
-   空括号（`[]`）或没有括号默认为 `0`（例如 `wool []` 或简单写 `wool` 对应白色羊毛）。

### 示例

<CodeHeader></CodeHeader>

```yaml
/setblock ~ ~ ~ wool ["color"="white"]
/setblock ~ ~ ~ wheat ["growth"=0]
/setblock ~ ~ ~ wood ["wood_type"="birch","stripped_bit"=true]
/setblock ~ ~ ~ wool []
```

## 初学者关键概念

1. **整数**：用于定义范围的完整数字（例如 `["redstone_power"=10]` 表示红石强度）。
2. **布尔值**：表示 `true/false` 状态（例如 `["stripped_bit"=true]` 表示去皮原木）。
3. **字符串**：表示预定义的文本输入（例如 `["wood_type"="spruce"]`）。

## 方块状态参考

完整的方块状态列表可在此处查看：
[方块状态列表](https://learn.microsoft.com/en-us/minecraft/creator/reference/content/blockreference/examples/blockstateslist)

-   **注意**：网站上以 `camelCase` 格式列出的方块状态在命令中必须转换为 `snake_case` 格式。
    -   示例：`buttonPressedBit` → `"button_pressed_bit"`

## 转换工具

使用 _@SmokeyStack_ 的[查找表](https://auxval-to-blockstates.netlify.app/)将辅助值转换为方块状态。

## 已知限制

使用方块时必须指定所有对应的方块状态或留空方块状态字段。缺少任何必需状态都会导致命令失败。

### 示例

<CodeHeader></CodeHeader>

```yaml
# 测试石头按钮（辅助值 0）
/execute if block ~~~ stone_button run say success

# 测试未按下的朝西石头按钮（辅助值 1）
/execute if block ~~~ stone_button ["button_pressed_bit"=false,"facing_direction"=1] run say success
```

-   第一条命令有效，因为方块状态字段为空。
-   第二条命令有效，因为指定了所有相关状态（`button_pressed_bit`、`facing_direction`）。

> **注意**：测试部分条件（例如 `["button_pressed_bit"=true]`）而不包含其他状态（如 `facing_direction`）将失败。与实体不同，方块目前尚不支持基于条件的过滤。

### 相关错误报告

-   [MCPE-133360](https://bugs.mojang.com/browse/MCPE-133360)
-   [MCPE-168391](https://bugs.mojang.com/browse/MCPE-168391)