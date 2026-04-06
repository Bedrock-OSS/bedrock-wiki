---
title: 移动检测
category: 检测系统
mentions:
    - BedrockCommands
    - zheaEvyline
description: 这些命令技术允许你检测某些玩家/实体的'状态'，然后执行你想要的命令。
---

## 简介

[来自基岩版命令社区 (BCC) Discord](https://bedrockcommands.org/)

[图片来源：Minecraft Wiki - ](https://minecraft.wiki/)**[CC BY-NC-SA 3.0](https://creativecommons.org/licenses/by-nc-sa/3.0/)**

这些命令技术允许你检测某些玩家/实体的'状态'，然后执行你想要的命令。

> 注意：为了获得更好的性能和更高的精度，建议使用[动画控制器](/animation-controllers/animation-controllers-intro)

## 睡眠检测

此技术允许你检测玩家是否正在/不在睡觉。

![睡觉](sleeping.jpg)

注意：睡觉时，玩家的碰撞箱会缩小到 0.2 方块。

**命令：**

-   确保你添加了 `wiki:q.is_sleeping` 记分板目标：
    -   `/scoreboard objectives add wiki:wiki:q.is_sleeping dummy`

<CodeHeader>BP/functions/wiki/detect/player/is_sleeping.mcfunction</CodeHeader>

```yaml
## 睡眠检测
### 标记为未睡觉
execute as @a at @s if entity @s[y=~0.3, dy=0] run scoreboard players set @s wiki:q.is_sleeping 0
### 标记为睡觉
execute as @a at @s unless entity @s[y=~0.3, dy=0] run scoreboard players add @s wiki:q.is_sleeping 1

## 在此处编写你的命令（示例）
execute as @a[scores={wiki:q.is_sleeping=0}] run say I'm not sleeping
execute as a[scores={wiki:q.is_sleeping=1}] run say I started sleeping
execute as @a[scores={wiki:q.is_sleeping=1..}] run say I'm still sleeping
```

![5 个命令方块的链条](/assets/images/commands/command-block-chain/5.png)

必须遵循相同的顺序并正确应用 `scores` 选择器参数，如所示。

**状态：**

-   **`wiki:q.is_sleeping=0`** 玩家 _没有_ 睡觉。
-   **`wiki:q.is_sleeping=1`** 玩家开始睡觉。（用于'触发'动作）
-   **`wiki:q.is_sleeping=1..`** 玩家仍在睡觉。（用于重复动作）

**每条命令的用途：**

-   **命令 1：** 如果玩家的碰撞箱高于 0.2 方块，我们将其标记为_未睡觉_ (0)
-   **命令 2：** 如果玩家的碰撞箱_不高于_ 0.2 方块，我们通过添加分数将其标记为睡觉 (1)。
    -   如果他们不停止睡觉，分数将继续增加。允许我们在他们每次开始睡觉时使用单次执行命令。
-   **命令 3、4、5：** 这些是每个状态的示例命令，可以修改/扩展。

## 潜行检测

此技术允许你检测玩家是否正在/不在潜行。

![潜行](sneaking.png)

感谢 1.20.10 版本引入的潜行高度变化，当潜行时，玩家的碰撞箱会缩小到 1.5 方块，使得仅使用命令进行正确的潜行检测成为可能，而以前需要附加组件的帮助。

**命令：**

-   确保你添加了 `wiki:q.is_sneaking` 记分板目标：
    -   `/scoreboard objectives add wiki:wiki:q.is_sneaking dummy`

<CodeHeader>BP/functions/wiki/detect/player/is_sneaking.mcfunction</CodeHeader>

```yaml
## 潜行检测
### 标记为未潜行
execute as @a at @s if entity @s[y=~1.5, dy=0] run scoreboard players set @s wiki:q.is_sneaking 0
### 标记为潜行
execute as @a at @s unless entity @s[y=~1.5, dy=0] if entity @s[y=~0.7, dy=0] run scoreboard players add @s wiki:q.is_sneaking 1

## 在此处编写你的命令（示例）
execute as @a[scores={wiki:q.is_sneaking=0}] run say I'm not sneaking
execute as @a[scores={wiki:q.is_sneaking=1}] run say I started sneaking
execute as @a[scores={wiki:q.is_sneaking=1..}] run say I'm still sneaking
```

![5 个命令方块的链条](/assets/images/commands/command-block-chain/5.png)

必须遵循相同的顺序并正确应用 `scores` 选择器参数，如所示。

**状态：**

-   **`wiki:q.is_sneaking=0`** 玩家 _没有_ 潜行。
-   **`wiki:q.is_sneaking=1`** 玩家开始潜行。（用于'触发'动作）
-   **`wiki:q.is_sneaking=1..`** 玩家仍在潜行。（用于重复动作）

**每条命令的用途：**

-   **命令 1：** 如果玩家的碰撞箱高于 1.4 方块，我们将其标记为_未潜行_ (0)
-   **命令 2：** 如果玩家的碰撞箱_不高于_ 1.4 方块，我们通过添加分数将其标记为潜行 (1)。
    -   如果他们不停止潜行，分数将继续增加。允许我们在他们每次开始潜行时使用单次执行命令。
    -   为防止睡觉或爬行时误触发，我们还要求他们的碰撞箱高于 0.6 方块。
-   **命令 3、4、5：** 这些是每个状态的示例命令，可以修改/扩展。

## 爬行检测

此技术允许你检测玩家是否正在/不在爬行。

![爬行](crawling.png)

注意：爬行时，玩家的碰撞箱会缩小到 0.6 方块。

:::warning 已知问题：
在水中游泳或使用鞘翅滑翔会被检测为爬行。
:::

**命令：**

-   确保你添加了 `wiki:q.is_crawling` 记分板目标：
    -   `/scoreboard objectives add wiki:wiki:q.is_crawling dummy`

<CodeHeader>BP/functions/wiki/detect/player/is_crawling.mcfunction</CodeHeader>

```yaml
## 爬行检测
### 标记为未爬行
execute as @a at @s if entity @s[y=~0.7, dy=0] run scoreboard players set @s wiki:q.is_crawling 0
### 标记为爬行
execute as @a at @s unless entity @s[y=~0.7, dy=0] if entity @s[y=~0.3, dy=0] run scoreboard players add @s wiki:q.is_crawling 1

## 在此处编写你的命令（示例）
execute as @a[scores={wiki:q.is_crawling=0}] run say I'm not crawling
execute as @a[scores={wiki:q.is_crawling=1}] run say I started crawling
execute as @a[scores={wiki:q.is_crawling=1..}] run say I'm still crawling
```

![5 个命令方块的链条](/assets/images/commands/command-block-chain/5.png)

必须遵循相同的顺序并正确应用 `scores` 选择器参数，如所示。

**状态：**

-   **`wiki:q.is_crawling=0`** 玩家 _没有_ 爬行。
-   **`wiki:q.is_crawling=1`** 玩家开始爬行。（用于'触发'动作）
-   **`wiki:q.is_crawling=1..`** 玩家仍在爬行。（用于重复动作）

**每条命令的用途：**

-   **命令 1：** 如果玩家的碰撞箱高于 0.6 方块，我们将其标记为_未爬行_ (0)
-   **命令 2：** 如果玩家的碰撞箱_不高于_ 0.6 方块，我们通过添加分数将其标记为爬行 (1)。
    -   如果他们不停止爬行，分数将继续增加。允许我们在他们每次开始爬行时使用单次执行命令。
    -   为防止睡觉时误触发，我们还要求他们的碰撞箱高于 0.2 方块。
-   **命令 3、4、5：** 这些是每个状态的示例命令，可以修改/扩展。

## 区分爬行、滑翔和游泳

如果你迫切需要**仅使用命令**分别检测所有三种状态，可以使用以下技术。

:::warning 已知问题：

1. 接触地面/天花板或直接撞墙时的滑翔会被检测为爬行。
2. 穿戴鞘翅站在方块的绝对角落，且上方或下方没有相邻方块时的爬行会被检测为滑翔。
    -   ![问题2](issue2.png)
3. 在另一个含水方块下方的含水方块中游泳会被检测为爬行。
    -   ![问题3](issue3.png)

:::

<CodeHeader>BP/functions/wiki/detect/player/is_crawling.mcfunction</CodeHeader>

```yaml
## 设置玩家状态
### 未滑翔
execute as @a at @s if entity @s[y=~0.7, dy=0] run scoreboard players set @s wiki:q.is_gliding 0
### 未爬行
execute as @a at @s if entity @s[y=~0.7, dy=0] run scoreboard players set @s wiki:q.is_crawling 0
### 未游泳
execute as @a at @s if entity @s[y=~0.7, dy=0] run scoreboard players set @s wiki:q.is_swimming 0

## 检测玩家状态
### 滑翔
execute as @a[hasitem={item=elytra,location=slot.armor.chest}] at @s unless entity @s[y=~0.7,dy=0] if entity @s[y=~0.3,dy=0] if block ~~1.01~ air if block ~~-0.01~ air rotated ~ 0 if block ^^1.01^-1 air if block ^^-0.01^-1 air if block ^^1.01^1 air if block ^^-0.01^1 air run scoreboard players add @s wiki:q.is_gliding 1
### 爬行
execute as @a[scores={wiki:q.is_gliding=0}] at @s unless entity @s[y=~0.7,dy=0] if entity @s[y=~0.3,dy=0] unless block ~~~ water unless block ~~1.01~ water run scoreboard players add @s wiki:q.is_crawling 1
### 游泳
execute as @a[scores={wiki:q.is_gliding=0,wiki:q.is_crawling=0}] at @s unless entity @s[y=~0.7, dy=0] if entity @s[y=~0.3,dy=0] run scoreboard players add @s wiki:q.is_swimming 1

## 在此处编写你的命令（示例）
execute as @a[scores={wiki:q.is_swimming=0}] run say I'm not swimming
execute as @a[scores={wiki:q.is_crawling=1}] run say I started crawling
execute as @a[scores={wiki:q.is_gliding=1..}] run say I'm still gliding
```

![9 个命令方块的链条](/assets/images/commands/command-block-chain/9.png)

**每条命令的用途：**

-   **命令 1、2、3：** 如果玩家的碰撞箱高于 0.6 方块，我们将其标记为_未滑翔/爬行/游泳_ (0)
-   **命令 4：** 如果玩家的碰撞箱不高于 0.6 方块，装备了鞘翅，且头部/胸部/脚部上下没有方块，我们通过添加分数将其标记为滑翔 (1)。
    -   如果他们不停止滑翔，分数将继续增加。允许我们在他们每次开始滑翔时使用单次执行命令。我们将对爬行/滑翔采用相同的方法。
    -   为防止睡觉时误触发，我们还要求他们的碰撞箱高于 0.2 方块。我们将对爬行/滑翔采用相同的方法。
-   **命令 5：** 如果玩家的碰撞箱不高于 0.6 方块，未滑翔，且上下没有水，我们通过添加分数将其标记为爬行 (1)。
-   **命令 6：** 如果玩家的碰撞箱不高于 0.6 方块，未滑翔或爬行，我们通过添加分数将其标记为游泳 (1)。
-   **命令 7、8、9：** 这些是每个状态的示例命令，可以修改/扩展。

## 行走或奔跑检测

:::danger 已移除
行走/奔跑检测方法已被弃用。最近的游戏更新改变了拴绳结的行为，导致如果它们没有系在栅栏桩上会立即消失。这防止了它们在命令系统中用作独立的静态标记实体。我们目前正在探索替代方案，如果发现可行的解决方法，将更新本部分。
:::

## 文件夹结构

如果你使用函数，你的文件夹结构可能如下所示：

<FolderView
	:paths="[
    'BP',
    'BP/functions',
    'BP/manifest.json',
    'BP/pack_icon.png',
    'BP/functions/wiki',
    'BP/functions/wiki/main.mcfunction',
    'BP/functions/wiki/detect',
    'BP/functions/wiki/detect/player',
    'BP/functions/wiki/detect/player/is_sleeping.mcfunction',
    'BP/functions/wiki/detect/player/is_crawling.mcfunction',
    'BP/functions/tick.json'
]"
></FolderView>

在此设置中，`/detect/player/` 文件夹中的所有函数由 `main.mcfunction` 调用，该函数通过 `tick.json` 每 tick 执行一次。