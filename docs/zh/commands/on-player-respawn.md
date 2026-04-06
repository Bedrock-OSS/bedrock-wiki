---
title: 玩家重生
category: 事件系统
tags:
    - easy
mentions:
    - BedrockCommands
    - zheaEvyline
nav_order: 5
description: 此系统将在玩家从死亡状态重生时运行你想要的命令。
---

## 简介

[来自基岩版命令社区 (BCC) Discord](https://bedrockcommands.org/)

此系统将在玩家从死亡状态重生时运行你想要的命令。

## 设置

_在聊天中输入以下命令：_

`/scoreboard objectives add wiki:respawn dummy`

如果你使用函数并希望在世界初始化时自动添加目标，请按照[首次世界加载](/commands/on-first-world-load)中概述的流程进行。

## 系统

<CodeHeader>BP/functions/wiki/events/player/on_respawn.mcfunction</CodeHeader>

```yaml
## 在此处编写你的命令（示例）
execute as @e[scores={wiki:respawn=1}] run say I died and respawned.

## 设置玩家状态
### 当前正在重生
scoreboard players set @a wiki:respawn 1
### 当前未在重生
scoreboard players set @e[type=player] wiki:respawn 0
```

![3 个命令方块的链条](/assets/images/commands/command-block-chain/3.png)

这里我们使用了 `/execute - say` 命令作为示例，但你也可以使用任何你想要的命令，数量不限。

只需确保按照所示的顺序正确应用 `@e[scores={wiki:respawn=1}]` 选择器参数，用于你想要的命令。

## 解释

-   **`wiki:respawn=0`** 玩家存活或已经重生。
-   **`wiki:respawn=1`** 玩家死亡或刚刚重生（在当前游戏 tick 中）。
-   **`@a`** 选择器将针对所有存活/死亡的玩家。因此，我们将使用它将玩家标记为 `1` '重生中'
-   另一方面，`@e` 选择器只会针对存活的玩家，所以我们可以使用它将所有存活玩家标记为 0 '已重生'

现在 _重生中_ 的玩家是 `1` 且 _已重生_ 的玩家是 `0`，我们可以利用这些知识在分数为 `1` 的玩家从死亡状态重生时运行我们想要的命令。它们使用 `@e` 选择器瞄准。

在你的系统中，你想要的命令必须放在其他 2 条命令之前，因为玩家在游戏 tick 开始时从死亡状态变为存活状态，命令在之后运行。

因此，如果我们将它们放在最后，其他 2 条命令会首先将重生中的玩家分数设置为 `0`，而你想要运行的命令将无法选择这些玩家，因为我们的选择器参数是 `@e[scores={wiki:respawn=1}]`，而不是 `0`。使用 `0` 不起作用，因为那样的话它会在已经重生的玩家身上无限重复。

## Tick JSON

如果你使用函数而不是命令块，必须将 `on_respawn` 函数添加到 `tick.json` 中，以便循环并持续运行它。可以通过在每个字符串后放置逗号来向 `tick.json` 添加多个文件。请参阅[函数](/commands/mcfunctions#tick-json)文档以获取更多信息。

<CodeHeader>BP/functions/tick.json</CodeHeader>
```json
{
  "values": [
    "wiki/event/players/on_respawn"
  ]
}
```

如果使用函数，你的包文件夹结构如下：

<FolderView
	:paths="[
    'BP',
    'BP/functions',
    'BP/functions/wiki',
    'BP/pack_icon.png',
    'BP/manifest.json',
    'BP/functions/wiki/event',
    'BP/functions/wiki/event/players',
    'BP/functions/wiki/event/players/on_respawn.mcfunction',
    'BP/functions/tick.json'
]"
></FolderView>