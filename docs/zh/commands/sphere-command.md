---
title: 球体命令
category: 实用创作
tags:
    - intermediate
mentions:
    - BedrockCommands
    - 1309-boy
    - zheaEvyline
nav_order: 6
description: 此技术允许您用一条命令创建球体，球体的半径和密度均可完全调整。
---

## 简介

[来源于 Bedrock Commands 社区 (BCC) Discord](https://bedrockcommands.org/)

传统上创建球体需要多个命令方块或复杂的函数。本方法使用单条 `execute` 命令链，基于两个辅助实体（船）的旋转来分叉执行上下文。

:::info 注意：
本指南需要您对 **[执行分叉](/commands/execution-forking)** 有基础了解。
:::

**鸣谢：** *@1309boy*

![球体命令演示](/public/assets/images/commands/sphere-command/sphere-command-demo.png)

## 设置

为了提供必要的旋转向量，您需要召唤两艘辅助船。这些船作为执行分叉的“锚点”。

在聊天中运行以下命令：

<CodeHeader></CodeHeader>

```yaml
# 召唤具有特定垂直旋转的辅助船
/summon boat ~~1~ 0 -90
/summon boat ~~1~ 180 90 none

# 添加标签以便指定目标
/tag @e[type=boat,c=2] add wiki:r
```

### 最佳实践

- **保持加载：** 确保这些船位于常加载的区块或游戏刻区域，以便命令在全球范围内生效。
- **安全：** 将船放置在安全的位置，防止玩家或爆炸移动或摧毁它们。

## 命令

<CodeHeader></CodeHeader>

```yaml
execute positioned 0 0 0 rotated as @e[tag=wiki:r] positioned ^1^^ rotated as @e[tag=wiki:r] rotated ~ 0 positioned ^^^1 rotated as @e[tag=wiki:r] positioned ^1.414^^ facing 0 0 0 positioned 0 0 0 positioned ^^^1 rotated as @e[tag=wiki:r] positioned ^1^^ facing 0 0 0 positioned 0 0 0 positioned ^^^1 rotated as @e[tag=wiki:r] positioned ^1^^ facing 0 0 0 positioned 0 0 0 positioned ^^^1 rotated as @e[tag=wiki:r] positioned ^^^1 rotated as @e[tag=wiki:r] positioned ^^^1.414 facing 0 0 0 positioned 0 0 0 positioned ^^^1 rotated as @e[tag=wiki:r] positioned ^^^1 facing 0 0 0 positioned 0 0 0 positioned ^^^1 rotated as @e[tag=wiki:r] positioned ^^^1 facing 0 0 0 positioned as @p run particle minecraft:balloon_gas_particle ^^^3
```

![1 个重复命令方块](/assets/images/commands/command-block-chain/1.png)

## 技术解析

此命令的复杂性来自于它如何“分叉”执行路径。每次调用 `rotated as @e[tag=wiki:r]` 时，命令会分裂为两条路径（每条船各一条）。

### 1. 创建水平面

> `positioned 0 0 0 rotated as @e[tag=wiki:r] positioned ^1^^ rotated as @e[tag=wiki:r] rotated ~ 0 positioned ^^^1 rotated as @e[tag=wiki:r] positioned ^1.414^^ facing 0 0 0 positioned 0 0 0 positioned ^^^1 rotated as @e[tag=wiki:r] positioned ^1^^ facing 0 0 0 positioned 0 0 0 positioned ^^^1 rotated as @e[tag=wiki:r] positioned ^1^^ facing 0 0 0 positioned 0 0 0 positioned ^^^1`

命令的第一部分专注于水平分布。

- 使用 `positioned ^1^^` 和 `rotated ~ 0` 来计算偏移量。
- 通过执行分叉，命令计算出 **32边形** 在二维平面上的坐标。
- **船 vs. 盔甲架：** 这里使用船是因为它们的垂直旋转 (`rx`) 允许垂直向量复制，而盔甲架则不行。

<WikiImage
    src="/public/assets/images/commands/sphere-command/segment-1.png"
    alt="第一段可视化"
    width="500"
    pixelated
/>

### 2. 垂直扩展

要将圆形变成球体，命令分叉垂直向量。

- **第2和第3段：** 使用 `positioned ^^^1` 和 `positioned ^^^1.414`（$\sqrt{2}$ 的值）来向上和向下移动执行上下文。

> `rotated as @e[tag=wiki:r] positioned ^^^1`

<WikiImage
    src="/public/assets/images/commands/sphere-command/segment-2.png"
    alt="第二段可视化"
    width="500"
    pixelated
/>

> `rotated as @e[tag=wiki:r] positioned ^^^1.414`
<WikiImage
    src="/public/assets/images/commands/sphere-command/segment-3.png"
    alt="第三段可视化"
    width="500"
    pixelated
/>

这创建了8个具有相等中心角的垂直向量，形成了球体的“肋骨”或环。

<WikiImage
    src="/public/assets/images/commands/sphere-command/segment-3.1.png"
    alt="第3.1段可视化"
    width="500"
    pixelated
/>

### 3. 朝向逻辑

`facing 0 0 0` 和 `positioned 0 0 0` 段将朝向重置为球体中心。这确保最终的 `run` 命令始终相对于预期的半径 ($R$)。

<WikiImage
    src="/public/assets/images/commands/sphere-command/segment-4.png"
    alt="第四段可视化"
    width="500"
    pixelated
/>

## 自定义

您可以通过修改最后的段来操纵形状和大小：

- **半径：** 修改 `run` 命令中的最终坐标（例如，`^^^5` 表示半径为5）。
- **密度：** 添加更多分叉将增加球体的点数，但请注意性能影响。
    - 要增加垂直密度，重复：
        - **`rotated as @e[tag=wiki:r] positioned ^^^1`**
    - 要增加水平密度，重复：
        - **`rotated as @e[tag=wiki:r] positioned ^1^^`**
    - **重要：** 无论是垂直还是水平，请确保每次重复都从以下内容开始：
        - `facing 0 0 0 positioned 0 0 0 positioned ^^^1`
