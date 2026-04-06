---
title: 实体计数器
category: 记分板系统
tags:
    - easy
mentions:
    - BedrockCommands
    - zheaEvyline
nav_order: 3
description: 此系统允许你跟踪世界上玩家/实体的总数，然后根据获得的值执行你想要的命令。
---

## 简介

[来自基岩版命令社区 (BCC) Discord](https://bedrockcommands.org/)

此系统允许你跟踪世界上玩家/实体的总数，然后根据获得的值执行你想要的命令。

> 注意：未加载区块中的实体不会被跟踪。但是，玩家无论如何都可以被跟踪。

## 设置

_在聊天中输入以下命令：_

`/scoreboard objectives add wiki:count dummy`

如果你使用函数并希望在世界初始化时自动添加目标，请按照[首次世界加载](/commands/on-first-world-load)中概述的流程进行。

## 系统

<CodeHeader>BP/functions/wiki/scoreboard/players/tally_count.mcfunction</CodeHeader>

```yaml
## 重置之前的计数
scoreboard players set * wiki:count 0

## 获取当前计数（示例）
### 存活玩家
execute as @e[type=player] run scoreboard players add .Players.Alive wiki:count 1
### 苦力怕
execute as @e[type=creeper] run scoreboard players add .Creeper wiki:count 1

## 在此处编写你的命令（示例）
### 如果有 4 个或更多存活玩家则发送消息
execute if score .Players.Alive wiki:count matches 4.. run title @a actionbar There are more than 4 players on the world.
### 如果有 3 个或更少苦力怕则发送消息
execute if score .Creeper wiki:count matches ..3 run title @a actionbar There are less than 3 creeper on the world.
```

![5 个命令方块的链条](/assets/images/commands/command-block-chain/5.png)

这里我们以存活玩家和苦力怕为例进行跟踪，但你也可以跟踪任何你想要的实体，数量不限。你也可以根据自己的喜好更改分数持有者名称。例如：'.Players.Alive' 改为 'Players'。

同样，我们以运行 `/title` 命令为例：

-   a) 当有 4 个或更多玩家时 `4..`
-   b) 当有 3 个或更少 .Creeper 时 `..3`

你也可以修改/扩展这些。例如：使用 `/kill` 命令而不是 `/title` 命令。

## 解释

1.  **命令 1：** 将 `wiki:count` 记分板目标中所有分数持有者名称的分数设置为 `0`，包括任何被跟踪的玩家和实体的分数。
2.  **命令 2、3：** 对于每个你想跟踪计数的目标，分数将被添加到其对应的分数持有者名称。从而获得它们的总数。
    -   示例：苦力怕生物到 '.Creeper' 分数持有者名称。
3.  **命令 4、5：** 这些是示例命令，可以修改/扩展。
    -   根据获得的总数，我们可以使用 `/execute if score` 条件在满足某些值时运行我们想要的命令。
        -   **`n`** 任意数字 _n_
        -   **`n..`** 任意数字 _n_ 及以上
        -   **`..n`** 任意数字 _n_ 及以下
        -   **`n..n1`** 任意数字 _n_ 到任意数字 _n1_。（较小的数字在前）

:::info 注意：
当在多个目标中使用大量分数持有者时，建议单独为每个分数持有者将之前的分数重置为零，而不是使用通配符（`*`），以获得更好的性能。
:::

## Tick JSON

如果你使用函数而不是命令块，必须将 `tally_count` 函数添加到 `tick.json` 中，以便循环并持续运行它。可以通过在每个字符串后放置逗号来向 `tick.json` 添加多个文件。请参阅[函数](/commands/mcfunctions#tick-json)文档以获取更多信息。

<CodeHeader>BP/functions/tick.json</CodeHeader>
```json
{
  "values": [
    "wiki/scoreboard/players/tally_count"
  ]
}
```

如果使用函数，你的包文件夹结构如下：

<FolderView
	:paths="[
    'BP',
    'BP/functions',
    'BP/pack_icon.png',
    'BP/manifest.json',
    'BP/functions/wiki',
    'BP/functions/wiki/main.mcfunction',
    'BP/functions/wiki/scoreboard',
    'BP/functions/wiki/scoreboard/players',
    'BP/functions/wiki/scoreboard/players/tally_count.mcfunction',
    'BP/functions/tick.json'
]"
></FolderView>

在此设置中，`tally_count` 函数由 `main.mcfunction` 调用，该函数通过 `tick.json` 每 tick 执行一次。