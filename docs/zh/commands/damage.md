---
title: 伤害
description: /damage 命令详解。
category: 命令
tags:
    - easy
mentions:
    - BedrockCommands
    - cda94581
    - QuazChick
---

## 简介

[来自基岩版命令社区 (BCC) Discord](https://bedrockcommands.org/)

`/damage` 命令于 Minecraft `1.18.10` 版本引入，可对指定实体造成精确伤害。借此变化，使用 `/effect` 命令伤害实体的笨重方法已过时，使地图和其他创作更加强大。

## 语法

-   damage 命令有两种使用方式：
    -   `/damage <目标> <数量> [原因]`
    -   `/damage <目标> <数量> <原因> entity <伤害来源>`

## 参数

-   不包含在尖括号 `<>` 或方括号 `[]` 中的短语表示你需要按原样输入。
-   包含在括号中的短语是变量，需要替换：
    -   **`<>`** 尖括号表示该变量是必需的。
    -   **`[]`** 方括号表示该变量是可选的。

## 变量

-   **`目标`** 这是你常用的实体选择器，如 `@s`、`@e` 或 `"cda94581"`。可以同时选择多个实体以对多个目标造成伤害。

-   **`数量`** 这是一个整数，指定对目标造成的伤害量。最小值为 `0`，最大值为 `2147483647`，即带符号 32 位整数限制。

-   **`原因`** 这指定伤害的"原因"。此原因将出现在死亡消息中（`X hit the ground too hard for cause: fall`），用于护甲伤害计算（` Amount 中指定的值可能因所穿护甲而有所不同`），还用于行为包/附加组件等多种场景。所有伤害原因的完整列表见[下文](#伤害原因列表)。

-   **`伤害来源`** 如果原因与实体相关（如 `entity_attack`），这指定伤害来自哪里（造成攻击的实体）。这只能限制为 1 个目标。如果选择器找到多个目标，将抛出错误。

> 注意：`<原因> entity <伤害来源>` 仅在原因与其他实体相关时才是必需的（如 `entity_attack`）。否则，请使用第一种语法。

## 示例

<CodeHeader></CodeHeader>

```yaml
# 对所有玩家造成 4 点伤害
/damage @a 4

# 对所有绵羊造成 3 点 'fire' 伤害
/damage @e[type=sheep] 3 fire

# 从随机玩家对所有绵羊造成 40 点 'entity attack' 伤害
/damage @e[type=sheep] 40 entity_attack entity @r
```

## 伤害原因列表

以下是 `/damage` 命令中可以使用所有 'cause' 值：

| 伤害原因 |
| ------------------ |
| `all`              |
| `anvil`            |
| `block_explosion`  |
| `campfire`         |
| `charging`         |
| `contact`          |
| `drowning`         |
| `entity_attack`    |
| `entity_explosion` |
| `fall`             |
| `falling_block`    |
| `fire`             |
| `fire_tick`        |
| `fireworks`        |
| `fly_into_wall`    |
| `freezing`         |
| `lava`             |
| `lightning`        |
| `magic`            |
| `magma`            |
| `none`             |
| `override`         |
| `piston`           |
| `projectile`       |
| `ram_attack`       |
| `self_destruct`    |
| `sonic_boom`       |
| `soul_campfire`    |
| `stalactite`       |
| `stalagmite`       |
| `starve`           |
| `suffocation`      |
| `temperature`      |
| `thorns`           |
| `void`             |
| `wither`           |