---
title: 首次世界加载
category: 事件系统
mentions:
    - BedrockCommands
    - zheaEvyline
    - SmokeyStack
    - cda94581
nav_order: 0
tags:
    - function
description: 此系统在世界首次加载后应用你的包时执行特定命令。
---

## 简介

[来自基岩版命令社区 (BCC) Discord](https://bedrockcommands.org/)

此系统允许你在你应用包后世界首次加载时运行特定的命令。

> **注意：** 此系统需要[函数](/commands/mcfunctions)包。`tick.json` 文件是必要的，以便在世界初始化时立即触发逻辑。

## Tick JSON

<CodeHeader>BP/functions/tick.json</CodeHeader>
```json
{
  "values": [
    "wiki/main"
  ]
}
```

## 主 MCFUNCTION

<CodeHeader>BP/functions/wiki/main.mcfunction</CodeHeader>

```yaml
# 首次世界加载
## 如果世界未初始化则执行函数
execute unless score .World wiki:q.is_initialised matches 1 run function wiki/event/worlds/on_initialise
```

## 系统

<CodeHeader>BP/functions/wiki/event/worlds/on_initialise.mcfunction</CodeHeader>

```yaml
## 在此处编写你的命令（示例）
say World initialized! Pack loaded for the first time.

## 初始化
### 添加目标
scoreboard objectives add wiki:q.is_initialised dummy
### 标记为已初始化
scoreboard players set .World wiki:q.is_initialised 1
```

一旦你想要的命令被执行，系统会创建一个名为 `wiki:q.is_initialised` 的记分板目标。此目标通过名为 `.World` 的特定分数持有者跟踪世界的初始化状态。通过立即将 `.World` 的分数设置为 `1`，系统确保初始化逻辑被"锁定"，防止在后续 tick 或世界重新加载时重新运行。

## 文件夹结构

<FolderView
	:paths="[
    'BP',
    'BP/functions',
    'BP/functions/wiki',
    'BP/functions/wiki/main.mcfunction',
    'BP/pack_icon.png',
    'BP/manifest.json',
    'BP/functions/wiki/event',
    'BP/functions/wiki/event/worlds',
    'BP/functions/wiki/event/worlds/on_initialise.mcfunction',
    'BP/functions/tick.json'
]"
></FolderView>

在此设置中，`on_initialise` 函数由 `main.mcfunction` 调用，该函数通过 `tick.json` 每 tick 执行一次。