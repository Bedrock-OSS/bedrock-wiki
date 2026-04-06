---
title: 玩家离开
category: 事件系统
tags:
    - easy
mentions:
    - BedrockCommands
    - zheaEvyline
nav_order: 3
description: 此系统将在玩家离开世界时运行你想要的命令。
---

## 简介

[来自基岩版命令社区 Discord](https://bedrockcommands.org/)

此系统将在玩家离开世界时运行你想要的命令。

> **注意：** 你无法使用目标选择器对离开的 _玩家_ 执行命令。但是，你可以使用[玩家加入](/commands/on-player-join)系统在它们重新加入时执行命令。

## 设置

_在聊天中输入以下命令：_

`/scoreboard objectives add wiki:player_count dummy`

如果你使用函数并希望在世界初始化时自动添加目标，请按照[首次世界加载](/commands/on-first-world-load)中概述的流程进行。

## 系统

<CodeHeader>BP/functions/wiki/event/players/on_leave.mcfunction</CodeHeader>

```yaml
## 获取当前 tick 玩家数量
### 重置分数
scoreboard players reset .CurrentTick wiki:player_count
### 累计分数
execute as @a run scoreboard players add .CurrentTick wiki:player_count 1

## 获取差值（当前 - 之前）
scoreboard players operation .CurrentTick wiki:player_count -= .PreviousTick wiki:player_count

## 在此处编写你的命令（示例）
### 如果差值为 -1 或更少则发送消息
execute if score .CurrentTick wiki:player_count matches ..-1 run say One or more players have left the world

## 保存当前 tick 玩家数量以在下一个游戏 tick 比较
### 重置分数
scoreboard players reset .PreviousTick wiki:player_count
### 累计分数
execute as @a run scoreboard players add .PreviousTick wiki:player_count 1
```

![6 个命令方块的链条](/assets/images/commands/command-block-chain/6.png)

这里我们使用了 `/say` 命令作为示例，但你也可以使用任何你想要的命令，数量不限。

只需确保按照所示的顺序正确应用 `/execute if score` 条件，用于你想要的命令。

## 解释

由于 `.PreviousTick` 分数在命令循环末尾更新，它可以在下一个游戏 tick 开始时用于与 `.CurrentTick` 分数进行比较。

玩家数量是使用[实体计数器](/commands/entity-counter)系统获得的。建议阅读该页面以更好地理解此系统。

通过从 `.CurrentTick` 分数减去 `.PreviousTick` 分数，我们可以确定玩家数量是否：

-   减少（`..-1`）
-   增加（`1..`）
-   保持不变（`0`）

如果它减少了，意味着一个或多个玩家离开了游戏。
利用这一点，我们可以在 `.CurrentTick` 为 `-1` 或更低时执行命令。

-   例如，如果有 10 个玩家并且一个离开：

    -   `.CurrentTick - .PreviousTick = 9 - 10 = -1`
    -   我们使用 `..-1` 检测到这一点

-   首先获取 `.CurrentTick`，然后执行减法，然后根据结果执行命令，最后更新 `.PreviousTick` 以在下一个游戏 tick 中使用。

:::tip
命令块链或函数中的所有命令将按顺序执行，但在同一个游戏 tick 中执行，无论涉及的命令数量如何。此系统有效是因为命令在所有事件（如玩家加入、离开、死亡等）发生后在游戏 tick 末尾执行。

<WikiImage
    src="/assets/images/commands/intro-to-command-blocks/game-tick.png"
    alt="Game Tick"
    height=200
/>
:::

## Tick JSON

如果你使用函数而不是命令块，必须将 `on_leave` 函数添加到 `tick.json` 中以确保持续执行。可以通过在每个字符串后放置逗号来向 `tick.json` 添加多个文件。请参阅[函数](/commands/mcfunctions#tick-json)文档以获取更多详细信息。

<CodeHeader>BP/functions/tick.json</CodeHeader>
```json
{
  "values": [
    "wiki/event/players/on_leave"
  ]
}
```

如果使用函数，你的包文件夹结构应如下所示：

<FolderView
	:paths="[
    'BP',
    'BP/functions',
    'BP/functions/wiki',
    'BP/pack_icon.png',
    'BP/manifest.json',
    'BP/functions/wiki/event',
    'BP/functions/wiki/event/players',
    'BP/functions/wiki/event/players/on_leave.mcfunction',
    'BP/functions/tick.json'
]"
></FolderView>