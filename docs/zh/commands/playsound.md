---
title: 播放声音
category: 命令
tags:
    - easy
mentions:
    - BedrockCommands
    - zheaEvyline
    - jordanparki7
description: 理解 /playsound 命令。
---

## 简介

[来自基岩版命令社区 (BCC) Discord](https://bedrockcommands.org/)

你可以使用 `/playsound` 命令向世界中任何地方的玩家播放音效。

## 语法

`/playsound <sound> [player] [position] [volume] [pitch] [minimumVolume]`

## 定义

### 声音

-   这是你希望播放的音效。
-   你可以在以下位置找到当前可用的音效 ID 列表：
    -   https://playsoundlist.xyz/

### 玩家

-   这是一个可选参数。
-   它指的是你常用的目标选择器（你想向谁播放声音）`@a`、`@r` 等。但是，没有 `type=player` 参数的 `@e` 选择器不适用。

### 位置

-   这是一个可选参数。
-   它指的是声音将从哪里播放的 `x y z` 位置，因此将是播放声音半径的中心。

### 音量

-   这是一个可选参数。
-   它决定声音效果可以听到的球体大小。
    -   `0.0` 是最小大小。
-   随着 `volume` 值的增加，可听球体大小会增加。
    -   音量 1 的播放声音等于半径 16 方块的可听球体。
    -   类似地，音量 4 等于 64 方块。

### 音调

-   这是一个可选参数。
-   它决定音效的音调。
-   值可以在 `0.0` 到 `256.0` 之间
    -   值越高，音调越高。
    -   小于或等于 `0.0` 的值会使声音无法听到。

> 注意：音调会影响音效播放的速度。例如，音调 `0.5` 意味着音效以 `0.5×` 速度播放。

### 最小音量

-   这是一个可选参数。
-   它决定在可听球体外声音被听到的最小音量。
-   值可以在 `0.0` 到 `1.0` 之间

## 示例

```yaml
# 向最近的玩家播放随机爆炸音效
/playsound random.explode @p

# 向所有玩家在其位置播放音量 10000 的随机球体音效
/execute as @a at @s playsound random.orb @s ~ ~ ~ 10000
```

注意：由于 `/playsound` 命令是位置性的，如上例第二个示例所示，在他们的位置以大音量播放音效很有帮助。这可以防止音效在某些情况下被切断，例如在传送到很远距离后。

**（推荐）阅读下一章：[声音](/concepts/sounds)**