---
title: 执行逻辑门
category: 技术
mentions:
    - BedrockCommands
    - zheaEvyline
    - hatfluppyclouds
nav_order: 1
tags:
    - concept
description: 逻辑门是接受一个或多个二进制输入的设备，顾名思义，执行逻辑布尔运算以给出单个二进制输出（'true' 或 'false'）。
---

## 简介

[来自基岩版命令社区 (BCC) Discord](https://bedrockcommands.org/)

逻辑门是接受一个或多个二进制输入的设备，顾名思义，执行逻辑布尔运算以给出单个二进制输出（`true` 或 `false`）。

它们是计算机执行任何功能所使用的。这些设备对编程非常有帮助，使用它们是创建优化命令系统的关键步骤。在本页面中，你将学习如何利用 `/execute` 命令在系统中使用任何逻辑门！

## 逻辑门

**图表：**

![带图表的逻辑门表格](table-with-diagram.jpg)

**转换为命令：**

-   缓冲器：
    -   `/execute if entity @s[tag=red] run <command>`
-   （反相器）非门：
    -   `/execute if entity @s[tag=!red] run <command>`
-   与门：
    -   `/execute if entity @s[tag=red,tag=green] run <command>`
-   （与非）与非门：
    -   `/execute unless entity @s[tag=red,tag=green] run <command>`
-   或门：
    -   `/execute unless entity @s[tag=!red,tag=!green] run <command>`
-   或非门：
    -   `/execute if entity @s[tag=!red,tag=!green] run <command>`
-   异或门：
    -   `/execute unless entity @s[tag=!red,tag=!green] unless entity @s[tag=red,tag=green] run <command>`
-   同或门：
    -   `/execute unless entity @s[tag=red,tag=!green] unless entity @s[tag=!red,tag=green] run <command>`

## 解释

_由 @Champ0401 提供解释：_

**与门：**

-   `/execute as @p[tag=red,tag=green] run say success`

与门至少接受两个输入。在这种情况下，如果玩家满足两个要求（拥有 'red' 和 'green' 标签），命令将运行。与门是 Minecraft 命令中最常用的门。

**非门：**

-   `/execute as @p[tag=!red] run say success` 或：
-   `/execute as @p unless entity @s[tag=red] run say success`

非门反转输入。在这种情况下，命令仅在玩家**没有** red 标签时运行。非门在 Minecraft 命令中也非常常用。

**或门：**

-   `/execute as @p unless entity @s[tag=!red,tag=!green] run say success`

或门接受两个或更多输入。如果玩家至少满足其中一个要求，命令将运行。在这种情况下，玩家可以拥有 red 标签，或 green 标签，或两者都有。或门在 Minecraft 命令中并不自然，但通过添加 `/execute unless`，你可以自己实现。可能对或门的工作方式有点困惑。你可以这样理解：命令会运行除非你两个标签都没有。这会产生与或门相同的输出表。在游戏中自己试试吧！

**异或门：**

-   `/execute as @p unless entity @s[tag=!red,tag=!green] unless entity @s[tag=red,tag=green] run say success`

异或门接受两个输入。如果玩家恰好有_一个_要求，命令将运行。在这种情况下，玩家可以拥有 red 标签或 green 标签，但如果他们有两个标签，命令将不会运行。异或门在 Minecraft 命令中也不自然，但这个变通方法将允许你执行该功能。

其余的门只是其他门的反相，你可以通过翻转命令中的 `if` / `unless` 来更改，或参考上述逻辑门的示例。

## 示例命令

以下是可以在执行逻辑门中使用的目标选择器参数列表：

-   `type`
-   `scores`
-   `name`
-   `tag`
-   `family`
-   `hasitem`

> 注意，所有这些都以或门为例，但任何逻辑门都可以工作，只要遵循类似的语法/顺序。

**示例：**

-   `/execute unless entity @e[type=!chicken, type=!cow] run <command>`
    -   如果实体是鸡或牛，则运行命令。
-   `/execute unless entity @p[scores={objective.a=!5, objective.b=!5}] run <command>`
    -   如果玩家在记分板 `objective.a` 或 `objective.b` 中有 5 分，则运行命令。
-   `/execute unless entity @p[hasitem=[{item=diamond_sword,quantity=0},{item=iron_sword,quantity=0}]] run <command>`
    -   如果玩家有钻石剑或铁剑，则运行命令。

> 注意：你可以在或门中使用超过两个输入（选择器参数），如果满足一个或多个输入，命令将执行。

组合任何不同的参数选择器也可以工作。示例：

-   `/execute unless entity @p[tag=!red, scores={objective.a=!1..5}] run <command>`
-   `/execute unless entity @p[name=!player, hasitem=[{item=iron_sword, quantity=0}]] run <command>`
-   `/execute unless entity @e[type=!chicken,tag=!green, scores={objective.b=!5}, family=!mob}] run <command>`

如有任何疑问或查询，你可以加入我们上面链接的 Discord，我们社区的专家将很乐意帮助你。