---
title: 物品掉落检测
category: 检测系统
tags:
    - easy
mentions:
    - BedrockCommands
    - PipiSpamton
description: 此技术允许你区分玩家掉落的物品和其他掉落的物品。
---

## 简介

[来自基岩版命令社区 (BCC) Discord](https://bedrockcommands.org/)

此技术允许你区分玩家掉落的物品和其他掉落的物品。

## 命令

<CodeHeader>BP/functions/wiki/detect/item/is_dropped_by.mcfunction</CodeHeader>

```yaml
## 标记其他来源的物品
### 精确面向 0° 南
tag @e[type=item,ry=0,rym=0,tag=!wiki:source.player] add wiki:source.other

## 标记玩家掉落的物品
tag @e[type=item,tag=!wiki:source.other] add wiki:source.player
```

![2 个命令方块的链条](/assets/images/commands/command-block-chain/2.png)

:::tip 注意
有趣的是，即使玩家面向 0° 南掉落的物品也会被正确标记为 'wiki:source.player'
:::