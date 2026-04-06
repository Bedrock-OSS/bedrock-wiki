---
title: 比较与获取分数
category: 记分板系统
mentions:
    - BedrockCommands
    - zheaEvyline
description: 学习如何检测分数相同的目标 / 分数最高或最低的目标。
---

## 简介

[来自基岩版命令社区 (BCC) Discord](https://bedrockcommands.org/)

在本教程中，你将学习如何检测分数相同的目标 / 分数最高或最低的目标。

## 获取最高分数 ( > )

**命令：**

<CodeHeader>BP/functions/wiki/scoreboard/players/get_highest_score.mcfunction</CodeHeader>

```yaml
## 获取最高分数
scoreboard players operation .Highest <objective> > * <objective>

## 在此处编写你的命令（示例）
execute as <target> if score @s <objective> = .Highest <objective> run <command>
```

![2 个命令方块的链条](/assets/images/commands/command-block-chain/2.png)

**命令 1：** 此命令将 `.Highest` 分数与指定目标中所有其他追踪的分数进行比较，如果 `.Highest` 分数小于正在比较的分数，则 `.Highest` 分数将被赋值为该分数。举例说明：

|  #  | 玩家 | 目标：`wiki:kills` | 与 `.Highest` 比较 | 比较后 `.Highest` |
| :-: | :----: | :---------------------: | :------------------------: | :-------------------------: |
|  1  |  Alex  |           10            |     `.Highest > Alex`      |       `.Highest = 10`       |
|  2  |  Kai   |            5            |      `.Highest > Kai`      |       `.Highest = 10`       |
|  3  | Steve  |           20            |     `.Highest > Alex`      |       `.Highest = 20`       |

_当 `.Highest` 分数与玩家 2 比较后没有变化（因为 10 已经大于 5）。_

:::info 注意：

通配符（`*`）与所有追踪的分数进行比较——包括离线玩家。若只与在线玩家或实体比较，请使用 `@a` 或 `@e`。

:::

**命令 2：** 此命令可以修改或扩展。它允许你在 `<target>` 分数等于 `.Highest` 分数时运行你想要的命令。

-   注意：如果你想限制只能选择一个，请用 `@p` 或 `@e[c=1]` 替换 `<target>`。

**示例：**

<CodeHeader>BP/functions/wiki/scoreboard/players/get_highest_score/kills.mcfunction</CodeHeader>

```yaml
## 获取最高分数
scoreboard players operation .Highest wiki:kills > * wiki:kills

## 为击杀数最多的玩家添加标签
tag @a remove wiki:top_kills
execute as @a if score @s wiki:kills = .Highest wiki:kills run tag @s add wiki:top_kills
```

![3 个命令方块的链条](/assets/images/commands/command-block-chain/3.png)

## 获取最低分数 ( < )

**命令：**

<CodeHeader>BP/functions/wiki/scoreboard/players/get_lowest_score.mcfunction</CodeHeader>

```yaml
## 获取最低分数
scoreboard players operation .Lowest <objective> < * <objective>

## 在此处编写你的命令
execute as <target> if score @s <objective> = .Lowest <objective> run <command>
```

![2 个命令方块的链条](/assets/images/commands/command-block-chain/2.png)

**命令 1：** 此命令将 `.Lowest` 分数与指定目标中所有其他追踪的分数进行比较，如果 `.Lowest` 分数大于正在比较的分数，则 `.Lowest` 分数将被赋值为该分数。举例说明：

|  #  | 玩家 | 目标：`wiki:blocks_traveled` | 与 `.Lowest` 比较 | 比较后 `.Lowest` |
| :-: | :----: | :-------------------------------: | :-----------------------: | :-------------------------: |
|  1  |  Alex  |                100                |     `.Lowest < Alex`      |      `.Lowest = 100`       |
|  2  |  Kai   |                50                 |      `.Lowest < Kai`      |       `.Lowest = 50`       |
|  3  | Steve  |                200                |     `.Lowest < Alex`      |       `.Lowest = 50`       |

_当 `.Lowest` 分数与玩家 3 比较后没有变化（因为 50 已经小于 200）。_

:::info 注意：

通配符（`*`）与所有追踪的分数进行比较——包括离线玩家。若只与在线玩家或实体比较，请使用 `@a` 或 `@e`。

:::

**命令 2：** 此命令可以修改或扩展。它允许你在 `<target>` 分数等于 `.Lowest` 分数时运行你想要的命令。

-   注意：如果你想限制只能选择一个，请用 `@p` 或 `@e[c=1]` 替换 `<target>`。

**示例：**

<CodeHeader>
    BP/functions/wiki/scoreboard/players/get_lowest_score/blocks_traveled.mcfunction
</CodeHeader>

```yaml
## 获取最低分数
scoreboard players operation .Lowest wiki:blocks_traveled < * wiki:blocks_traveled

## 为移动距离最短的玩家添加标签
tag @a remove wiki:eliminated
execute as @a if score @s wiki:blocks_traveled = .Lowest wiki:blocks_traveled run tag @s add wiki:eliminated
```

![3 个命令方块的链条](/assets/images/commands/command-block-chain/3.png)

## 获取相同分数 ( = )

此命令将执行目标与其他选定目标的分数进行比较。它为每个分数相同的目标运行指定命令。

**命令：**

<CodeHeader>BP/functions/wiki/scoreboard/players/get_matching_score.mcfunction</CodeHeader>

```yaml
execute as @a at @s at @a[rm=0.01] if score @s <objective> = @p <objective> run say @s and @p have matching scores!
```

![一个重复命令方块](/assets/images/commands/command-block-chain/1.png)

:::info 注意：

在 `<command>`（其中 `/say` 作为示例）中，`@s` 指执行实体或玩家（目标），`@p` 或 `@e[c=1]` 指被比较的实体或玩家。

:::

**可视化：**

![获取相同分数 2D 可视化](2d-visualization.gif)

**示例 1：** 如果宠物距离主人超过 6 方块，将其传送到主人：

<CodeHeader>BP/functions/wiki/scoreboard/players/get_matching_score/pet.mcfunction</CodeHeader>

```yaml
## 传送到主人
execute as @e[tag=pet] at @s at @a[rm=7] if score @s wiki:id = @p wiki:id run tp @s @p
```

![一个重复命令方块](/assets/images/commands/command-block-chain/1.png)

**示例 2：** 将地块所有者设置为创造模式，其他设置为冒险模式：

<CodeHeader>BP/functions/wiki/scoreboard/players/get_matching_score/plot.mcfunction</CodeHeader>

```yaml
## 将所有者设置为创造模式
execute as @e[tag=plot] at @s at @a[r=16] if score @s wiki:id = @p wiki:id run gamemode c @p[m=!c]

## 将非所有者设置为冒险模式
execute as @e[tag=plot] at @s at @a[r=16] unless score @s wiki:id = @p wiki:id run gamemode a @p[m=!a]
```

![2 个命令方块的链条](/assets/images/commands/command-block-chain/2.png)