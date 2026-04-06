---
title: 视角检测
category: 检测系统
tags:
    - intermediate
mentions:
    - BedrockCommands
    - AjaxGb
    - Plagiatus
    - zheaEvyline
    - GobbleCrow
nav_order: 6
description: 此命令技术允许你检测目标何时看向玩家/实体/坐标，然后执行你想要的命令。
---

## 简介

[来自基岩版命令社区 (BCC) Discord](https://bedrockcommands.org/)

**致谢：** _@AjaxGb_

此命令技术允许你检测目标何时看向玩家/实体/坐标，然后执行你想要的命令。

:::warning

此技术不考虑视线方向上的遮挡物，例如阻止玩家看到目标或方块的墙壁或树木。要考虑这一点，你必须使用**[光线投射系统](https://bedrockcommands.org/resources/raycasting)**

:::

## 命令

<CodeHeader>BP/functions/wiki/detect/player/is_looking_at.mcfunction</CodeHeader>

```yaml
execute as <target> at @s anchored eyes facing <entity | coordinate> positioned ^^^1 positioned ~~-1.62~ rotated as @s positioned ^^^-1 if entity @s[r=0.2] run <command>
```

![一个重复命令方块](/assets/images/commands/command-block-chain/1.png)

**可视化：**

![Alex 看向猪头](visualization.gif)

> _注意：这是一个粗略的可视化表示，不是精确测量。_

**命令解析：**

-   `as <target>`
    -   设置执行目标。例如：
        -   `as @p`（最近的玩家）
        -   `as @e[type=zombie]`（所有僵尸）
-   `at @s`
    -   将执行位置设置在目标脚下。
-   `anchored eyes`
    -   将执行位置提升到目标的眼部高度。
-   `facing <entity | coordinate>`
    -   设置执行旋转朝向一个实体或坐标。例如：
        -   `facing 0 0 0` 朝向坐标：0,0,0。
        -   `facing entity @e[type=pig,c=1] eyes`（朝向最近猪的眼睛）
        -   `facing entity @e[type=cow,r=30] feet`（朝向 30 方块范围内牛的眼睛）
        -   `facing entity @e[type=zombie] feet`（朝向僵尸的脚）
-   `positioned ^^^1`
    -   从上一点出发，将执行位置沿实体/坐标方向向前推进 1 方块。
-   `positioned ~~-1.62~`
    -   将执行位置沿 Y 轴降低回到玩家脚下的位置。即眼部高度下方 1.62 方块。
    -   注意：由于 [MCPE-165051](https://bugs.mojang.com/browse/MCPE-165051) 错误，你不能用 `anchored feet` 代替此命令。
-   `rotated as @s`
    -   将执行旋转恢复为目标的旋转方向。
-   `positioned ^^^-1`
    -   从上一点出发，将执行位置沿目标朝向方向向后推进 1 方块。
-   `if entity @s[r=0.2]`
    -   检查目标是否在执行位置 0.2 方块半径内。即检查这次前后移动后我们是否大致回到了目标脚下的位置。
    -   要增加或减少"足够接近"的容差，请更改 `0.2` 距离参数。
        -   它需要在 `0.2` 和 `2` 之间，因为 `2` 基本上意味着你可以看向相反方向但仍然"足够接近"。所以实际上，你可能希望保持在 `1` 以下。
    -   要计算精确的视角锥角度，请参见下文。

**示例：**

1. 当看向带有 'target' 标签的牛或羊的眼睛时，运行 `/say` 命令：

<CodeHeader>BP/functions/wiki/detect/player/is_looking_at/target.mcfunction</CodeHeader>

```yaml
execute as @a at @s anchored eyes facing entity @e[type=cow,tag=wiki:target] eyes positioned ~~-1.62~ positioned ^^^1 rotated as @s positioned ^^^-1 if entity @s[r=0.2] run say hello cow!
execute as @a at @s anchored eyes facing entity @e[type=sheep,tag=wiki:target] eyes positioned ~~-1.62~ positioned ^^^1 rotated as @s positioned ^^^-1 if entity @s[r=0.2] run say hello sheep!
```

![一个重复命令方块](/assets/images/commands/command-block-chain/1.png)

2. 当看向坐标 `(10, 20, 30)` 或 `(6, 7, 8)` 时，运行 `/say` 命令：

<CodeHeader>BP/functions/wiki/detect/player/is_looking_at/position.mcfunction</CodeHeader>

```yaml
execute as @a at @s anchored eyes facing 10 20 30 positioned ~~-1.62~ positioned ^^^1 rotated as @s positioned ^^^-1 if entity @s[r=0.2] run say hello block!
execute as @a at @s anchored eyes facing 6 7 8 positioned ~~-1.62~ positioned ^^^1 rotated as @s positioned ^^^-1 if entity @s[r=0.2] run say hello block!
```

![一个重复命令方块](/assets/images/commands/command-block-chain/1.png)

**替代结构：**

<CodeHeader>BP/functions/wiki/detect/player/is_looking_at.mcfunction</CodeHeader>

```yaml
execute as <target> at <coordinate | entity> facing entity @s eyes positioned as @s positioned ^^^1 rotated as @s positioned ^^^1 if entity @s[r=0.02] run <command>
```

![一个重复命令方块](/assets/images/commands/command-block-chain/1.png)

如果你不需要检测目标看向实体的 _眼睛_，而是脚或坐标，你可以使用此结构，因为它不需要 `anchored eyes` 指令，因为执行位置从实体/坐标开始，而不是从目标开始。

## 计算视角

要根据你的视角近似你想要的距离/半径，你可以使用以下公式，其中 `α` 是你希望此方法在目标左右触发的角度：

```
r = 2 * sin ( α / 2 )
```

或者，反过来计算某个半径/距离（`r`）值会给你带来什么视角：

```
α = sin^(-1) (r / 2) * 2
```

> 注意：根据你的计算器，你需要将弧度转换为度。

使用上述计算，示例值 `r=0.2` 给我们留下大约 12° 的角度，我们可以在任一方向上偏离精确目标，但仍然被认为是"足够接近"。

## 视角检测 V2

**致谢：** _@GobbleCrow_

![演示 GIF：玩家看向盔甲架](v2-demo.gif)

如果你需要更高精度地检测玩家看向哪里——非常适合精细调整的机械——你可以使用以下命令，它使用非常相似的逻辑：

<CodeHeader>BP/functions/wiki/detect/player/is_precisely_looking_at.mcfunction</CodeHeader>

```yaml
execute as @a at @s anchored eyes positioned ~~-0.5~ facing entity @e[type=armor_stand,rm=0.0001] feet positioned ^^^10 rotated as @s positioned ^^^10 facing entity @s eyes positioned as @s positioned ^^^-1 rotated as @s positioned ^^^-1 if entity @s[r=0.766] positioned as @s anchored eyes positioned as @e[type=armor_stand,rm=0.0001] anchored feet positioned ~~0.5~ positioned ^^^100000 facing entity @s eyes positioned as @s positioned ^^^10 rotated as @s positioned ^^^10 run title @s[r=0.00005] actionbar §aFound Armor Stand!
```

当指定目标（如 `@a`）精确看向一个实体（如 `@e[type=armor_stand]`）的**眼睛**或**脚**，并且在 `0.00005` 检测半径内时，这将执行一条命令（例如 `/title`），假设所有条件都满足。

> **注意：** `0.766` 半径被选择以匹配盔甲架的碰撞箱。对于其他实体，你可能需要调整此值以适应它们特定的碰撞箱大小和你想要的精度。

### 自定义为方块坐标

要检测玩家是否看向特定的方块位置而不是实体，请替换命令的以下部分：

1. 替换 `facing entity @e[type=armor_stand,rm=0.0001] feet`
    -   改为 `facing <coordinate>`
    -   _（例如 `facing 10 0 10`）_

2. 替换 `positioned as @e[type=armor_stand,rm=0.0001]`
    -   改为 `positioned <coordinate>`
    -   _（例如 `positioned 10 0 10`）_