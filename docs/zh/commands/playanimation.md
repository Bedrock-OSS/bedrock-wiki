---
title: 播放动画
category: 命令
mentions:
    - PipiSpamton
    - zheaEvyline
description: 理解 playanimation 命令。
---

## 简介

[来自日本指挥官聚会 Discord](https://discord.gg/xFZH6QJfSB)

在基岩版中，`/playanimation` 命令允许实体播放动画。你可以堆叠多个动画甚至自定义它们。

## 语法

`/playanimation <entity: target> <animation: string> [next_state: string] [blend_out_time: float] [stop_expression: string] [controller: string]`

**定义：**

`<>` 尖括号表示变量是必需的。<br>
`[]` 方括号表示变量是可选的。

-   `<entity: target>` 指定将播放动画的实体。
-   `<animation: string>` 指定要播放的动画。
-   `[next_state: string]` 指定当当前动画的结束条件满足时过渡到的动画。
-   `[blend_out_time: float]` 设置动画之间过渡的时间。
-   `[stop_expression: string]` 定义结束条件。这必须用 Molang 编写。
-   `[controller: string]` 访问并定义动画控制器。

这是一个复杂命令，详细信息请参阅源文件。