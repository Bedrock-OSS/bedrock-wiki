---
title: Execute
category: 命令
tags:
    - easy
mentions:
    - JaylyDev
    - Sprunkles137
    - Hatchibombotar
    - TheItsNameless
    - SmokeyStack
    - zheaEvyline
description: /execute 命令详解。
---

## 简介

随着 1.19.50 的发布，`/execute` 命令经历了语法改革。虽然现在语法更冗长、更长，但它允许对命令的上下文组件进行更精细的控制，并为命令添加条件支持，取代了 `/testfor`、`/testforblock` 和 `/testforblocks` 等命令的使用。

在我们深入研究语法及其写法之前，我们需要了解旧的 `/execute` 命令是如何工作的，以及发生了什么变化以及为什么。这将使解释语法中出现的概念变得更容易。

## 理解执行上下文

对于命令的新手和熟悉旧 `/execute` 行为的人来说，复习命令的**执行上下文**概念可能是个好主意。

简而言之，这些是影响命令运行方式的参数。命令将以谁的身份运行（也称为其执行者）；命令将在哪里运行，以及在哪个维度；以及应用于命令的旋转都是可以更改的参数。

每个命令都会应用这个上下文，而这个上下文会根据命令的运行方式而变化。从命令块触发的命令没有执行者，位置设置为该命令块；从聊天运行的命令将执行者定义为玩家，并在玩家位置运行。

## Execute，以及它为什么改变

`/execute` 命令代表一个或多个实体执行命令。旧的语法是这样的：

```
/execute <target> <position> <command>
/execute <target> <position> detect <position> <block> <data value> <command>
```

你指定一个目标作为执行者，然后命令的上下文会改变为以该目标的身份运行，并在该目标处运行。任何位置变化总是相对于该目标。

虽然在大多数情况下这很有用，但它也强制命令的目标和其位置始终绑在一起（除非你手动插入世界坐标而不是 `<position>`）。在制作条件语句方面它也不太灵活，因为你每次都必须以实体身份执行。

早在 2017 年夏季的水下更新开发期间，Minecraft：Java 版的开发者收到了社区关于如何改进 `/execute` 命令语法的反馈，基本概念是：`/execute` 接受无限数量的**子命令**，这些子命令按照你指定的顺序操作命令的某些方面，然后在末尾放置一个"run"子命令来触发命令。

这允许 `/execute` 对命令做更多的事情，并允许分离执行者和命令的位置。

## 语法

现在让我们回顾一下 `/execute` 语法。它们如下：

### `/execute as`

更改命令的执行者，或目标选择器 `@s` 将选择的内容。

```
/execute as <origin: target> -> execute
```

这不会更改命令的位置、旋转或维度上下文。

如果指定了多个目标，则命令将为每个目标运行一次，其中 `@s` 依次选择每个实体。

### `/execute at`

更改命令运行的位置，将命令的位置、旋转和维度上下文设置为实体。

```
/execute at <origin: target> -> execute
```

这不会更改命令的执行者，所以 `@s` 将保持为最后瞄准的任何人。

如果指定了多个目标，则命令将为每个目标运行一次，将位置、旋转和维度上下文设置为每个目标。

### `/execute in`

设置命令应该运行的维度。

```
/execute in <dimension: string> -> execute
```

目前接受的值是 `overworld`、`nether` 和 `the_end`。

例如，如果要在末地作为目标执行，运行：

```
/execute in the_end positioned 0 -100 0 as @a[rm=1] run say I'm in the End dimension
```

注意：维度变化将遵循该维度的比例；从主世界前往末地会将位置应用 x0.125 的比例，反之将应用 x8 的比例。

### `/execute positioned`

直接设置命令的位置上下文。

```
/execute positioned <position: x y z> -> execute
```

将命令的位置设置为特定值。[相对坐标和局部坐标](/commands/relative-coordinates)基于命令的当前位置。

```
/execute positioned as <origin: target> -> execute
```

将命令的位置设置为目标的位置。这类似于 `/execute at` 的工作方式，但它只设置命令的位置，而不设置其旋转或维度。

如果指定了多个目标，则命令将为每个目标运行一次，将位置上下文设置为目标的位置。

### `/execute align`

将命令的当前位置对齐到方块网格。

```
/execute align <axes: swizzle> -> execute
```

对齐位置将向下取整。此子命令接受字母"x"、"y"和"z"的任何非重复组合，并会沿指定的每个轴向下取整位置。

要将目标对齐到方块中心，运行：

```
/execute as <target> at @s align xyz run tp @s ~0.5 ~0.5 ~0.5
```

### `/execute anchored`

将命令的锚点设置为执行者的脚或眼睛。更改锚点将影响局部坐标开始的位置。

```
/execute anchored (eyes|feet) -> execute
```

默认情况下，在目标处执行时的锚点是它们的脚。

当锚点设置为 `eyes` 时，命令的局部位置会根据当前执行者的"眼睛高度"偏移一定的量。

这个偏移应该只适用于局部坐标，但由于一个 bug： [MCPE-162681](https://bugs.mojang.com/browse/MCPE-162681)，它目前会影响相对坐标。

此外，`anchored` 子命令只能在同一个 `/execute` 命令中指示一次。第二个 `anchored` 指令将无效。这是另一个 bug： [MCPE-165051](https://bugs.mojang.com/browse/MCPE-165051)

### `/execute rotated`

直接设置命令的旋转上下文。

```
/execute rotated <yaw: value> <pitch: value> -> execute
```

将命令的旋转设置为特定值。相对坐标和局部坐标基于命令的当前旋转。默认值对于俯仰和偏航都是 0，除非旋转之前已更改。

```
/execute rotated as <origin: target> -> execute
```

将命令的旋转设置为目标的旋转。

如果指定了多个目标，则命令将为每个目标运行一次，将旋转上下文设置为目标的旋转。

### `/execute facing`

将命令的旋转设置为面向某个位置。此旋转根据命令的当前位置计算。

```
/execute facing <position: x y z> -> execute
```

设置旋转面向方块位置。相对坐标和局部坐标基于命令的当前旋转。

```
/execute facing entity <origin: target> (eyes|feet) -> execute
```

设置旋转面向目标的位置。将锚点设置为 `feet` 将使旋转面向他们当前站立的位置，而将锚点设置为 `eyes` 将使命令瞄准该目标的"眼睛位置"（参见 [`/execute anchored`](/commands/new-execute#execute-anchored)）。

如果指定了多个目标，则命令将为每个目标运行一次，将旋转上下文设置为面向该目标。

### `/execute (if|unless)`

根据条件阻止运行命令。如果条件为 true，则命令将继续，否则停止。

`/execute unless` 作为相反作用，测试条件是否为 false 以继续。

```
/execute if entity <target: target> -> execute
```

类似于 `/testfor`。如果目标存在则返回 true。

```
/execute if block <position: x y z> <block: string> -> execute
```

类似于 `/testforblock`。如果指定位置的方块存在则返回 true。

此外可以指定数据值或方块状态，否则它将忽略方块状态（就像设置为 `-1`）。

```
/execute if blocks <begin: x y z> <end: x y z> <destination: x y z> (all|masked) -> execute
```

类似于 `/testforblocks`。它在开始和结束位置之间构建一个体积，如果目标位置的体积与原始体积匹配则返回 true。

参数 `all` 测试所有方块必须匹配，而 `masked` 将忽略空气方块。

```
/execute if score <target: target> <objective: string> matches <range: integer range> -> execute
```

测试指定分数是否为某个值。这使用整数范围语法。

```
/execute if score <target: target> <objective: string> (=|<|<=|>|>=) <source: target> <objective: string> -> execute
```

测试指定分数是否与另一个分数匹配某些逻辑比较。运算符是等于（`=`）、大于（`>`）、大于或等于（`>=`）、小于（`<`）和小于或等于（`<=`）。

### `/execute run`

```
/execute run <command: command>
```

使用所有当前应用的上下文修改运行命令。此子命令始终在一条 `/execute` 命令中放在最后。

但是，此子命令并不总是必需的；以 `if` 或 `unless` 子命令结尾的 `/execute` 命令也是有效的，它将返回它执行的测试的成功性。

## 示例和升级旧命令

由于子命令可以无限链接，`/execute` 命令确实有几乎无限的参数组合，无法一一列出。相反，这里列出了一些常见的命令示例。

`/execute` 的旧功能可以用 `as <target> at @s` 复制。如果你需要相对于实体添加位置偏移，请添加 `positioned`。如果你想检测方块是否存在，请添加 `if block`。这里是一些等效命令：

1. 带偏移的传送。

```yaml
# 旧语法：
/execute @p ~ ~1.62 ~ teleport @s ^ ^ ^3
# 新语法：
/execute as @p at @s positioned ~ ~1.62 ~ run teleport @s ^ ^ ^3
```

2. 链接多个 execute。

```yaml
# 旧语法：
/execute @e[type=sheep] ~ ~ ~ execute @e[type=item,r=5] ~ ~ ~ detect ~ ~-1 ~ stone kill @s
# 新语法：
/execute at @e[type=sheep] as @e[type=item,r=5] at @s if block ~ ~-1 ~ stone run kill @s
```

（注意我们不使用 `as @e[type=sheep] at @s`，因为我们不需要以羊的身份执行；在这个上下文中只需要位置。）

现在有一些在一条命令中不可能做到或在过去新语法引入之前更難做的例子。

```yaml
# 测试假人名称的分数：
/execute if score game_settings var matches 3.. run say [Game] Difficulty set to Hard.

# 比较两个分数是否相等：
/execute as @a if score @s wiki:cash = @s wiki:bank run say My cash balance is equal to my bank balance.

# 在不瞄准实体的情况下测试实体：
execute as @a at @s if entity @e[type=armor_stand,r=10] run gamemode survival @s
```

## 下一步？

<CardGrid>
<Card title="执行逻辑门" link="/commands/logic-gates" image="/assets/images/icons/levers.png">

了解逻辑门以及如何在命令中使用它们来创建更优化的系统！

</Card>

<Card title="比较和获取分数" link="/commands/comparing-scores" image="/assets/images/icons/parrot.png">

学习动态比较和获取多个目标的分数。

</Card>

<Card title="执行位置变体" link="/commands/execute-at-block" image="/assets/images/icons/diamond_ore.png">

学习如何动态地在任何方块变体的位置执行命令。

</Card>

<Card title="执行分叉" link="/commands/execution-forking" image="/assets/images/icons/command_block.png">

学习如何利用乘法执行分叉（MEF）来实例化命令并提高执行频率。

</Card>
</CardGrid>