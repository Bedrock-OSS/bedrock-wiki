---
title: 动态显示
category: 技术
tags:
    - intermediate
mentions:
    - BedrockCommands
    - zheaEvyline
    - mittens4all
nav_order: 9
description: 学习如何使用命令创建自定义和动态显示。
---

## 简介

[来自基岩版命令社区 (BCC) Discord](https://bedrockcommands.org/)

在本教程中，你将学习如何使用命令根据分数向玩家显示自定义动态文本。这是为每个可能的结果使用单独的 `/tellraw` 或 `/titleraw` 消息的有效替代方案。

:::info 注意：
此技术主要用于玩家分数超过 9 的情况。对于仅使用 1-9 分数范围的简化版本，请参阅**[此处](/text/rawtext#ordering-with)**

为充分利用本教程，请确保你对**[原始文本](/text/rawtext)**有基本了解。
:::

## 视频演示

<YouTubeEmbed id="s8QGwsHuEk4" />

## 关键概念

:::tip

将此系统想象成一个图书馆：`wiki:array` 选择书架（1-9），`wiki:element` 选择该架子上的特定书籍（1-9）。这允许你总共存储 81 个不同的'文本'。

:::

| **术语**                 | **它是什么**       | **为什么使用它**                                                                            |
| :----------------------- | :------------------- | :------------------------------------------------------------------------------------------- |
| **`translate`**          | 文本组件             | 作为你的自定义消息列表的"容器"。                                                              |
| **`with`**               | 参数列表              | 插入你的文本或分数的"槽位"列表。                                                               |
| **`score`**              | 数据获取器           | 获取玩家分数并将其转换为命令的文本。                                                         |
| **`wiki:var`**           | 输入分数              | 你想要转换为文本的实际等级或数字。                                                            |
| **`wiki:q.var_changed`** | 查询分数             | 检测输入分数的更新，以便仅在值更改时触发记分板操作。                                        |
| **`wiki:delta_var`**     | 差值分数              | 检测玩家分数自上次更新以来是否已更改。                                                        |
| **`wiki:element`**       | "那本书"              | 选择组内特定消息的分数（1-9）。                                                               |
| **`wiki:array`**         | "那个书架"           | 选择 9 个可能消息组的分数（1-9）。                                                            |
| **`%%%%s`**              | 占位符               | 一个允许分数选择显示哪条消息的技术技巧。                                                       |

**系统逻辑分解**

- 输入和查询：`wiki:var`、`wiki:delta_var` 和 `wiki:q.var_changed` 跟踪文本**何时**需要更新。
- 数学：`wiki:array` 和 `wiki:element` 计算文本在你的列表中的**位置**。

:::warning

- 格式说明符 `%%#` 中仅使用单位整数（1-9）。创建系统时，请确保玩家分数是正整数。
- 此命令块系统覆盖 1-81 范围。对于更大范围，请参阅**[此处](/commands/dynamic-displays#function-setup)**的函数设置。

:::

## 设置

_在聊天中输入以下命令：_

<CodeHeader></CodeHeader>

```yaml
## 添加目标
### 查询 / 状态机
/scoreboard objectives add wiki:q.var_changed dummy
### 数学
/scoreboard objectives add wiki:const dummy
/scoreboard objectives add wiki:array dummy
/scoreboard objectives add wiki:element dummy
/scoreboard objectives add wiki:var dummy
/scoreboard objectives add wiki:delta_var dummy

## 初始化分数
### 常量
/scoreboard players set .1 wiki:const 1
/scoreboard players set .8 wiki:const 8
/scoreboard players set .9 wiki:const 9
```

## 系统

<CodeHeader>BP/functions/wiki/rawtext/display_logic.mcfunction</CodeHeader>

```yaml
## 检测主分数变化以触发计算
### 默认将分数变化查询状态设置为 false (0)
scoreboard players set @a[scores={wiki:q.var_changed=1}] wiki:q.var_changed 0
### 如果当前分数与上一 tick 的分数不匹配，将分数变化查询状态设置为 true (1)
execute as @a unless entity @s[scores={wiki:var=82..}] unless score @s wiki:delta_var = @s wiki:var run scoreboard players set @s wiki:q.var_changed 1

## 计算元素索引
### 确定元素，或选择哪本"书"
execute as @a[scores={wiki:q.var_changed=1}] run scoreboard players operation @s wiki:element = @s wiki:var
### 减 1 以防止第 9 位为 0
execute as @a[scores={wiki:q.var_changed=1}] run scoreboard players operation @s wiki:element -= .1 wiki:const
### 执行模运算 (%) 并加 1 以获取其特定位置 (1-9)
execute as @a[scores={wiki:q.var_changed=1}] run scoreboard players operation @s wiki:element %= .9 wiki:const
execute as @a[scores={wiki:q.var_changed=1}] run scoreboard players operation @s wiki:element += .1 wiki:const

## 计算数组索引
### 确定数组，或"书架"属于哪本书
execute as @a[scores={wiki:q.var_changed=1}] run scoreboard players operation @s wiki:array = @s wiki:var
### 加 8（除数-1）以确保即使值不是 9 的倍数也能正确移动到下一个"书架"
execute as a[scores={wiki:q.var_changed=1}] run scoreboard players operation @s wiki:array += .8 wiki:const
### 除以 9 以获取其特定位置 (1-9)
execute as @a[scores={wiki:q.var_changed=1}] run scoreboard players operation @s wiki:array /= .9 wiki:const

## 保存当前分数
### 将 'wiki:var' 分数分配给 'wiki:delta_var' 分数以在下一个游戏 tick 比较变化
execute as @a unless score @s wiki:delta_var = @s wiki:var run scoreboard players operation @s wiki:delta_var = @s wiki:var
```

![10 个命令方块的链条](/assets/images/commands/command-block-chain/10.png)

**注意：** 如果你计划持续运行命令，请将 titleraw 命令放在命令块链的最后。

## Titleraw 模板

<CodeHeader></CodeHeader>

```json
titleraw @a actionbar {"rawtext":[{"translate":"%%%%s","with":{"rawtext":[{"score":{"name":"*","objective":"wiki:array"}},{"rawtext":[{"translate":"%%%%s","with":{"rawtext":[{"score":{"name":"*","objective":"wiki:element"}},{"text":"Shelf: 1, Book: 1"},...81 texts total...]}}]}...9 shelves...]}}
```

:::tip
为方便起见，请使用下方的文件。完成更改后，使用 **[JSON Minifier](https://codebeautify.org/jsonminifier)** 压缩代码，然后粘贴到你的 `/titleraw` 命令中。
:::

此文件非常长，包含 81 个文本消息的 JSON 模板。请参考源文件获取完整模板。

## 函数方法

此方法使用嵌套 translate 允许分数大于 81。它使用略微修改的 `display_logic.mcfunction` 并设置额外的分数持有者为 81。

详见源文件。

## 下一步

你可以将动态显示与以下系统结合使用：

- 记分板操作
- 记分板计时器
- 原始文本