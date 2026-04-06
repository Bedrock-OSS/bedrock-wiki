---
title: 命令块入门
category: 通用
tags:
    - easy
mentions:
    - BedrockCommands
    - zheaEvyline
    - jordanparki7
nav_order: 1
description: MCBE 命令块入门介绍。
---

## 简介

[来自基岩版命令社区 (BCC) Discord](https://bedrockcommands.org/)

命令块是 Minecraft 中的特殊方块。你在聊天中输入的相同命令（作弊）可以使用命令块自动运行，而且可以重复使用而无需再次输入。

它们只能由在创造模式中具有管理员权限的玩家放置或破坏。

## 获取

1. 打开你的世界设置。
2. 在作弊下，切换"激活作弊"设置为开。
3. 在聊天中运行 `/give @s command_block`。

## 命令块界面

![命令块界面](command-block-ui.png)

## 命令块类型

![脉冲命令块](command-block.impulse.png) **脉冲** 每次通电时运行命令**一次**。

![链式命令块](command-block.chain.png) **链式** 按顺序运行命令，即只有当它所连接的前一个命令块运行后才运行。

![重复命令块](command-block.repeat.png) **重复** 每个游戏 tick 运行命令。每秒大约有 20 个 tick。可以应用延迟来调整命令执行的频率，[如下](/commands/intro-to-command-blocks#command-block-tick-delay)所述。

## 命令块条件

**条件** 命令块仅当它所连接的前一个命令块的输出成功（`true`）时才会运行命令。

> 条件命令块状态通过命令块箭头纹理中的小缩进显示，如下所示：
>
> -   ![脉冲条件命令块](command-block.impulse-conditional.png) 脉冲条件命令块
> -   ![链式条件命令块](command-block.chain-conditional.png) 链式条件命令块
> -   ![重复条件命令块](command-block.repeat-conditional.png) 重复条件命令块

**无条件** 命令块无论结果如何都会运行命令。无论它所连接的前一个命令块的输出是成功（`true`）还是失败（`false`），命令块仍会运行命令。

## 命令块红石状态

**需要红石** 命令块只能通过红石电源激活。使用按钮、拉杆、红石火把等。

**始终活动** 命令块在你关闭命令块界面后立即激活。

## 命令块 Tick 延迟

在此选项中，你可以指定命令块运行命令之前的延迟时间。

tick 指的是 Minecraft 游戏 tick。一个 **tick** 只是游戏中时间的一个计量单位。现实中的 1 秒大约等于 Minecraft 中的 20 个游戏 tick。

:::tip
![命令在游戏 tick 中运行的大致位置](game-tick.png)
:::

## 命令块悬停备注

此选项允许你在命令块上放置悬停文本。在使用多个命令块链时，它对于给出简短的名称以便轻松识别很有用。

当命令运行时，如果游戏规则 `commandblockoutput` 已启用，悬停备注将随输出一起显示在聊天中。
![命令块悬停备注](command-block-hover-note.png)

## 粘贴按钮

![命令块粘贴按钮](command-block-paste-button.png)

粘贴按钮允许你将先前复制的坐标粘贴到"命令输入"框中。

## 命令块输出

-   在命令块界面中切换"上次输出"按钮以查看命令输出和方块详情。
-   你在命令前输入的 `/` 在命令块中不是必需的，但这样做不会导致错误。
-   红石比较器可以读取命令块输出。如果输出成功，它将根据输出强度返回 1 到 15 之间的红石信号。
-   你可以通过在聊天中运行来检查命令块输出是 `true`/`false`。红色文本的输出或输出为 `0` 表示语法错误或失败（`false`）输出。白色文本的输出表示命令运行成功。
-   你还可以通过检查动作是否执行来判断命令是 `true` 还是 `false`。

### 在聊天中禁用命令消息

在聊天中运行：

-   `/gamerule commandblockoutput false` 禁用聊天中的命令块消息。
-   `/gamerule sendcommandfeedback false` 禁用聊天中输入命令的反馈。

## 命令块放置

在为一系统放置命令块链（按顺序工作）时，请确保连续的命令块从前一个命令块箭头的头部连接/开始。

箭头/面向方向可以从侧面的命令块纹理观察到。

**✅ 正确放置**
![正确的命令块放置](command-block-placement.correct.png)

**❌ 错误放置**
![错误的命令块放置](command-block-placement.incorrect.png)

## 命令块故障排除

-   在世界设置中，在**作弊**下，确保命令块未被禁用。
-   确保游戏规则 `maxcommandchainlength` 未设置为 0。
-   确保没有干扰命令块的不需要的红石电源。可能来自红石粉、拉杆、红石火把等。
-   尝试在"始终活动"和"需要红石"之间切换。
-   仔细检查方块类型、条件和命令语法。通电后，再次检查"上次输出"。
-   与红石一样，命令块也必须在已加载的区块中才能工作。你可以使用 ticking area 在玩家不在附近时保持它们加载。请参阅 [/tickingarea](https://learn.microsoft.com/en-us/minecraft/creator/documents/tickingareacommand) 命令文档以获取更多信息。

如果似乎没有任何效果，只需破坏并更换该命令块。

## 你学到了什么

:::tip 你学到了什么：

-   如何在游戏中获取命令块。
-   不同类型的命令块的行为方式和外观。
-   不同的命令块选项（包括条件、状态和延迟）。
-   命令块如何通过红石和聊天消息输出数据。
-   如何正确放置命令块链。
-   如何解决"命令块不工作"

:::

> 设置遵循 codeblock/mcfunction 的命令块系统时，请始终记住，第一个命令块将是 ![重复命令块](command-block.repeat.png) **`Unconditional Always Active`**，其余命令块将是 ![链式命令块](command-block.chain.png) **`Unconditional Always Active`**。全部设置为 0 tick 延迟，除非另有说明。
>
> ![4 个命令方块的链条](/assets/images/commands/command-block-chain/4.png)

## 下一步？

<CardGrid>
<Card title="基础系统" image="/assets/images/icons/command_block.png">

将你所学到的付诸实践，尝试制作这个简单的 **[玩家首次加入](/commands/on-first-join)** 系统，或者 **[实体计数器](/commands/entity-counter)** 系统。

</Card>

<Card title="理解选择器" link="/commands/selectors" image="/assets/images/icons/parrot.png">

学习在命令中使用目标选择器以及如何过滤它们。

</Card>
</CardGrid>