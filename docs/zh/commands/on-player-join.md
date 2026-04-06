---
title: 玩家加入
category: 事件系统
tags:
    - easy
mentions:
    - BedrockCommands
    - zheaEvyline
nav_order: 2
description: 此系统将在玩家加入世界时运行你想要的命令。
---

## 简介

[来自基岩版命令社区 (BCC) Discord](https://bedrockcommands.org/)

此系统将在玩家加入世界时运行你想要的命令。

## 设置

_在聊天中输入以下命令：_

`/scoreboard objectives add wiki:joined dummy`

如果你使用函数并希望在世界初始化时自动添加目标，请按照[首次世界加载](/commands/on-first-world-load)中概述的流程进行。

## 系统

<CodeHeader>BP/functions/wiki/event/players/on_join.mcfunction</CodeHeader>

```yaml
## 将首次加入或之前已从 'wiki:joined' 清除的玩家注册到 'wiki:joined' 目标
scoreboard players add @a wiki:joined 0

## 在此处编写你的命令（示例）
tp @a[scores={wiki:joined=0}] 0 65 0

### 标记玩家为已加入
### 清除在线和离线玩家的 'joined' 分数
scoreboard players reset * wiki:joined
### 将在线玩家的分数设置为 1
scoreboard players set @a wiki:joined 1
```

![4 个命令方块的链条](/assets/images/commands/command-block-chain/4.png)

这里我们使用了 `/tp` 命令作为示例，但你也可以使用任何你想要的命令，数量不限。

只需确保按照所示的顺序正确应用 `scores={wiki:joined=0}` 选择器参数，用于你想要的命令。

## 解释

当玩家加入时，分数 `0` 会被添加到他们的 `wiki:joined` 目标。这允许我们使用 `scores` 选择器参数为他们运行命令。

命令运行后，我们立即使用通配符 **`***` 重置目标上的所有分数。并且只有保持在线的玩家会将他们的分数设置为 `1`。

这样，由于我们的命令只针对分数为 `0` 的玩家，对于保持在线的玩家命令不会重复，除非他们离开并重新加入，或者我们运行：

<br>`/scoreboard players set <player> joined 0`

这是因为 _添加_ 0 分数到 1 分数不会有任何变化。但是，为没有分数的玩家添加 0 分数会将他们的分数设置为 0。

## Tick JSON

如果你使用函数而不是命令块，必须将 `on_join` 函数添加到 `tick.json` 中，以便循环并持续运行它。可以通过在每个字符串后放置逗号来向 `tick.json` 添加多个文件。请参阅[函数](/commands/mcfunctions#tick-json)文档以获取更多信息。

<CodeHeader>BP/functions/tick.json</CodeHeader>
```json
{
  "values": [
    "wiki/event/players/on_join"
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
    'BP/functions/wiki/event/players/on_join.mcfunction',
    'BP/functions/tick.json'
]"
></FolderView>