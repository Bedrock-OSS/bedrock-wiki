---
title: 玩家首次加入
category: 事件系统
tags:
    - easy
mentions:
    - BedrockCommands
    - zheaEvyline
    - SmokeyStack
nav_order: 1
description: 此系统将在玩家首次加入世界时运行你想要的命令。
---

## 简介

[来自基岩版命令社区 (BCC) Discord](https://bedrockcommands.org/)

此系统将在玩家首次加入世界时运行你想要的命令。

## 系统

<CodeHeader>BP/functions/wiki/event/players/on_first_join.mcfunction</CodeHeader>

```yaml
## 在此处编写你的命令（示例）
### 给予石镐 ×1
give @a[tag=!wiki:joined] stone_pickaxe
### 给予面包 ×16
give @a[tag=!wiki:joined] bread 16

## 标记为已加入
tag @a[tag=!wiki:joined] add wiki:joined
```

![3 个命令方块的链条](/assets/images/commands/command-block-chain/3.png)

这里我们使用了 2 条 `/give` 命令作为示例，但你也可以使用任何你想要的命令，数量不限。

只需确保按照所示的顺序正确应用 `tag=!wiki:joined` 选择器参数，用于你想要的命令。

## 解释

当玩家首次加入世界时，他们不会有已加入的标签。

一旦我们为没有标签的玩家运行我们想要的命令，他们会立即获得标签，除非我们使用以下命令移除他们的标签，否则命令不会重复：

<br>`/tag <player> remove wiki:joined`

## 文件夹结构

如果使用函数，你的包文件夹结构如下：

<FolderView
	:paths="[
    'BP',
    'BP/functions',
    'BP/functions/wiki',
    'BP/functions/wiki/main.mcfunction',
    'BP/pack_icon.png',
    'BP/manifest.json',
    'BP/functions/wiki/event',
    'BP/functions/wiki/event/players',
    'BP/functions/wiki/event/players/on_first_join.mcfunction',
    'BP/functions/tick.json'
]"
></FolderView>

在此设置中，`on_first_join` 函数由 `main.mcfunction` 调用，该函数通过 `tick.json` 每 tick 执行一次。