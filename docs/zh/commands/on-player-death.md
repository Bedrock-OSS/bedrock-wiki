---
title: 玩家死亡
category: 事件系统
tags:
    - easy
mentions:
    - BedrockCommands
    - zheaEvyline
nav_order: 4
description: 此系统将在玩家死亡时运行你想要的命令。
---

## 简介

[来自基岩版命令社区 (BCC) Discord](https://bedrockcommands.org/)

此系统将在玩家死亡时运行你想要的命令。

## 设置

_在聊天中输入以下命令：_

`/scoreboard objectives add wiki:q.is_alive dummy`

如果你使用函数并希望在世界初始化时自动添加目标，请按照[首次世界加载](/commands/on-first-world-load)中概述的流程进行。

## 系统

<CodeHeader>BP/functions/wiki/events/player/on_death.mcfunction</CodeHeader>

```yaml
## 状态机
### 将所有玩家 (@a) 标记为'死亡'（状态 0）（如果尚未标记则为状态 -1）
scoreboard players set @a[scores={wiki:q.is_alive=!-1}] wiki:q.is_alive 0
### 将所有存活玩家 (@e[type=player]) 标记为'存活'（状态 1）
scoreboard players set @e[type=player] wiki:q.is_alive 1

## 在此处编写你的命令（示例）：
### 玩家进入'死亡'状态时只运行一次
execute as @a[scores={wiki:q.is_alive=0}] run say I died
### 玩家死亡后每 tick 运行
execute as @a[scores={wiki:q.is_alive=..0}] at @s run particle minecraft:soul_particle ~~~

## 更新状态
### 将死亡玩家的状态从 0 移到 -1 以防止"一次"命令循环
scoreboard players set @a[scores={wiki:q.is_alive=0}] wiki:q.is_alive -1
```

![4 个命令方块的链条](/assets/images/commands/command-block-chain/4.png)

这里我们使用了 `/execute - say` 命令作为示例，但你也可以使用任何你想要的命令，数量不限。

只需确保按照所示的顺序正确应用 `scores={wiki:q.is_alive=0}` 选择器参数，用于你想要的命令。

## 解释

-   **`wiki:q.is_alive=0`** 玩家 _不_ 存活（死亡）。
-   **`wiki:q.is_alive=1`** 玩家存活。
-   **`wiki:q.is_alive=2`** 玩家已死亡且我们已对他们执行了我们想要的命令。

**每条命令的用途：**

1.  **命令 1：** 默认情况下，所有玩家都将被标记为_不_存活 (0)。
    -   我们将忽略分数 `2`，否则当玩家死亡时我们想要运行的命令将触发多次。
2.  **命令 2：** 所有存活玩家将被标记为'存活' (1)。
    -   `@e` 选择器允许我们专门针对存活的玩家。
    -   `@a` 选择器将针对所有玩家，无论他们是否存活。
3.  **命令 3：** 现在存活玩家的分数为 1，非存活玩家的分数为 0，我们将利用这些知识在玩家死亡时（0）运行我们想要的命令。
4.  **命令 4：** 由于我们只想在玩家死亡时执行我们想要的命令一次，我们将他们的分数设置为 `2`。如果不这样做，命令将在他们重生之前重复运行。

## Tick JSON

如果你使用函数而不是命令块，必须将 `on_death` 函数添加到 `tick.json` 中，以便循环并持续运行它。可以通过在每个字符串后放置逗号来向 `tick.json` 添加多个文件。请参阅[函数](/commands/mcfunctions#tick-json)文档以获取更多信息。

<CodeHeader>BP/functions/tick.json</CodeHeader>
```json
{
  "values": [
    "wiki/event/players/on_death"
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
    'BP/functions/wiki/event/players/on_death.mcfunction',
    'BP/functions/tick.json'
]"
></FolderView>

## 替代方法

此方法在 Minecraft `1.19.50` 引入新的 `/execute` 语法后成为可能。

:::warning 已知问题：
如果两个或更多玩家被传送到同一点，其中一个死亡但其余玩家不移动，系统将无法执行命令。
:::

-   确保你添加了 `wiki:q.is_dead` 记分板目标：
    -   `/scoreboard objectives add wiki:q.is_dead dummy`

<CodeHeader>BP/functions/detect/player/is_dead.mcfunction</CodeHeader>

```yaml
## 设置玩家状态
### 未死亡
scoreboard players set @e[type=player] wiki:q.is_dead 0
### 死亡
execute as @a at @s unless entity @e[type=player,r=0.01] run scoreboard players add @s wiki:q.is_dead 1

## 在此处编写你的命令（示例）
### 在死亡位置召唤盔甲架
execute as @a[scores={wiki:q.is_dead=1}] at @s run summon armor_stand "Corpse" ~~~
### 聊天中的死亡消息
execute as @a[scores={wiki:q.is_dead=1..}] run say I died and haven't respawned yet..
```

![4 个命令方块的链条](/assets/images/commands/command-block-chain/4.png)

**状态：**

-   **`wiki:q.is_dead=0`** 玩家 _未_ 死亡（存活）。
-   **`wiki:q.is_dead=1`** 玩家刚刚死亡。（用于'触发'动作）
-   **`wiki:q.is_dead=1..`** 玩家仍然死亡。（用于重复动作）

**每条命令的用途：**

1.  **命令 1：** 所有存活玩家被标记为_未_死亡 (0)
2.  **命令 2：** 如果玩家周围 0.01 方块半径内没有存活玩家，他们将被标记为死亡 (1)
    -   逻辑是只有玩家本人可以在离自己这么小的半径内。两个或更多玩家精确站在同一点的概率（没有 `/tp` 命令）接近于零。
3.  **命令 3、4：** 这些是每个状态的示例命令，可以修改/扩展。