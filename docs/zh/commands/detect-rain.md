---
title: 降雨检测
category: 检测系统
tags:
    - easy
mentions:
    - BedrockCommands
    - zheaEvyline
description: 使用命令检测降雨。
---

## 简介

[来自基岩版命令社区 (BCC) Discord](https://bedrockcommands.org/)

此系统允许你在主世界开始下雨时自动执行命令。

:::warning 限制：
此系统依赖火被雨水立即熄灭的机制。因此，**火势蔓延**游戏规则必须启用，此系统才能正常工作。
:::

## 设置

_在聊天中输入以下命令：_

`/scoreboard objectives add wiki:q.is_raining dummy`

如果你使用函数并希望在世界初始化时自动添加目标，请按照[首次世界加载](/commands/on-first-world-load)中概述的流程进行。

**下一步：**
1. 选择主世界中位于常加载区块或常加载区域内的坐标。
2. 确保此坐标上方没有方块遮挡天空。
3. 保护该区域以防止玩家干扰检测方块（火）。

## 系统

<CodeHeader>BP/functions/wiki/detect/weather/is_raining.mcfunction</CodeHeader>

```yaml
## 状态机
### 如果火已消失且之前没有下雨，设置为状态 1（刚开始）
execute unless block 0 0 0 fire unless score .Weather wiki:q.is_raining matches 2 run scoreboard players set .Weather wiki:q.is_raining 1
### 如果火仍在，设置为状态 0（天气晴朗）
execute if block 0 0 0 fire run scoreboard players set .Weather wiki:q.is_raining 0

## 维持火种
### 在下一个游戏 tick 检查的坐标放置新的火方块
setblock 0 0 0 fire

## 在此处编写你的命令（示例）：
### 下雨时每 tick 运行一次
execute if score .Weather wiki:q.is_raining matches 1.. run title @a actionbar It is raining.
### 雨刚开始时只运行一次
execute if score .Weather wiki:q.is_raining matches 1 run say It has started raining.
### 不下雨时每 tick 运行一次
execute if score .Weather wiki:q.is_raining matches 0 run title @a actionbar It's not raining.

## 更新状态
### 从状态 1 移到状态 2 以防止"一次"命令循环
execute if score .Weather wiki:q.is_raining matches 1 run scoreboard players set .Weather wiki:q.is_raining 2
```

必须遵循相同的顺序并正确应用 `execute if score .Weather wiki:q.is_raining matches` 结构，如所示。另外，请记得将占位符坐标 `(0, 0, 0)` 替换为你在世界中使用的实际检测坐标。

## 文件夹结构

如果你使用函数，请按以下方式组织你的行为包：

<FolderView
	:paths="[
    'BP',
    'BP/functions',
    'BP/pack_icon.png',
    'BP/manifest.json',
    'BP/functions/wiki',
    'BP/functions/wiki/main',
    'BP/functions/wiki/detect',
    'BP/functions/wiki/detect/weather',
    'BP/functions/wiki/detect/weather/is_raining.mcfunction',
    'BP/functions/tick.json'
]"
></FolderView>

在此设置中，`is_raining` 函数由 `main.mcfunction` 调用，该函数通过 `tick.json` 每 tick 执行一次。