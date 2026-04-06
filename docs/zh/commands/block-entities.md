---
title: MBE - Max 的方块实体
category: 技术
mentions:
    - BedrockCommands
    - zheaEvyline
    - MaxedOut4826
nav_order: 4
description: 使用命令的 Max 方块实体系统。
---

## 简介

[来自基岩版命令社区 (BCC) Discord](https://bedrockcommands.org/)

这种方法由 Reddit 用户 [u/Maxed_Out10](https://www.reddit.com/user/Maxed_Out10/) 开发，允许你使用盔甲架和一些连续的 `/playanimation` 命令来创建任何 Minecraft 方块的近似完美的实体复制。

为了保持对创作者的贡献，社区将这种方法称为"Max 的方块实体"（Max's Block Entity），简称 MBE。

**需要注意的要点：**

1. 此方法每个方块实体使用一个盔甲架。因此，太多的盔甲架（如任何实体）可能会导致服务器卡顿。
2. 玩家仍然可以穿过它们，也可以与它们交互（除非限制）。
3. 虽然方块实体可能在某处渲染，但其实际碰撞箱会有轻微偏移。

## 视频演示

<YouTubeEmbed id="kb8rz9ItE_M" />

## 设置

_在聊天中输入以下命令：_

1. `/summon armor_stand ~~~ 81 ~ default "Grumm"`
    - 我们将 Y 轴（水平）旋转设置为 `81` 以对齐 Minecraft 的标准方块网格。
    - 必须将其命名为 'Grumm' 以避免方块纹理反转。

:::tip

-   潜行并右键点击（mcpe：长按）盔甲架 6 次，将其置于"Entertain"姿态。
-   这样做可以省去下面系统中第一条命令。
-   **只有在你希望减少一条命令时才使用此方法。**

:::

2. 最后，将所需的方块物品放在盔甲架的主手中。

:::tip

-   `/replaceitem entity @e[name="Grumm"] slot.weapon.offhand 0 <itemID>`
    -   你可以使用此命令将所需的方块物品放在盔甲架的副手，而不是手动放置在主手中，以防止玩家拿走物品。

:::

## 系统

<CodeHeader>BP/functions/wiki/mbe/render.mcfunction</CodeHeader>

```yaml
## 对齐手臂
playanimation @e[type=armor_stand,name="Grumm"] animation.armor_stand.entertain_pose null 0 "0" wiki:align.arms

## 小方块尺寸
playanimation @e[type=armor_stand,name="Grumm"] animation.player.move.arms.zombie null 0 "0" wiki:size.mini_block

## 完整方块（可选）
### 尺寸
playanimation @e[type=armor_stand,name="Grumm"] animation.ghast.scale null 0 "0" wiki:size.full_block
### 对齐
playanimation @e[type=armor_stand,name="Grumm"] animation.fireworks_rocket.move null 0 "0" wiki:align.full_block

## 冻结盔甲架
execute as @e[type=armor_stand,name="Grumm"] at @s run tp ~~~

## 隐藏盔甲架身体
effect @e[type=armor_stand,name="Grumm"] invisibility infinite 1 true
```

![6 个命令方块的链条](/assets/images/commands/command-block-chain/6.png)

### 每条命令的用途

1. 自动将盔甲架姿态设置为"Entertain"以对齐手臂。如果更喜欢手动操作，可以跳过此命令。
2. **必需的命令**。增大尺寸以呈现为小方块。
3. _可选命令_。增大尺寸以呈现为完整方块。
4. _可选命令_。正确对齐完整方块尺寸的 MBE。
    - 如果不需要完整方块尺寸的 MBE，请跳过 3 和 4。
5. 将盔甲架锁定在原位，以防止下方方块被移除时掉落。
6. 隐藏盔甲架身体。

注意：提供控制器名称允许我们堆叠动画而不会覆盖之前的动画。例如：

-   `wiki:align.full_block`（其中 `wiki` 是命名空间）。

使用上述相同的控制器名称不是必需的。但是，它可以帮助避免与其他 playanimation 命令冲突。

## 旋转与对齐

> 注意：这些旋转命令（当物品放置在主手中时）需要通过命令方块触发一次。

<Spoiler title="完整方块">

<CodeHeader></CodeHeader>

```yaml
# 朝北
/tp @e[type=armor_stand,name="Grumm",c=1] ~-1.1245 ~0.2260 ~-0.097 81

# 朝南
/tp @e[type=armor_stand,name="Grumm",c=1] ~1.1245 ~0.2260 ~0.097 260

# 朝东
/tp @e[type=armor_stand,name="Grumm",c=1] ~0.097 ~0.2260 ~-1.1245 171

# 朝西
/tp @e[type=armor_stand,name="Grumm",c=1] ~-0.097 ~0.2260 ~1.1245 350
```

</Spoiler>

<Spoiler title="小方块">

<CodeHeader></CodeHeader>

```yaml
# 朝北
/tp @e[type=armor_stand,name="Grumm",c=1] ~-0.417~-0.5 ~-0.035 81

# 朝南
/tp @e[type=armor_stand,name="Grumm",c=1] ~0.417 ~-0.5 ~0.035 260

# 朝东
/tp @e[type=armor_stand,name="Grumm",c=1] ~0.035 ~-0.5 ~-0.417 171

# 朝西
/tp @e[type=armor_stand,name="Grumm",c=1] ~-0.035 ~-0.5 ~0.417 350
```

</Spoiler>

<Spoiler title="楼梯">

<CodeHeader></CodeHeader>

```yaml
# 朝北
/tp @e[type=armor_stand,name="Grumm",c=1] ~-0.097 ~0.2325 ~1.1245 350

# 朝南
/tp @e[type=armor_stand,name="Grumm",c=1] ~0.097 ~0.2325 ~-1.1245 171

# 朝东
/tp @e[type=armor_stand,name="Grumm",c=1] ~-1.1245 ~0.2325 ~-0.097 81

# 朝西
/tp @e[type=armor_stand,name="Grumm",c=1] ~1.1245 ~0.2325 ~0.097 260
```

</Spoiler>

<Spoiler title="下半砖">

<CodeHeader></CodeHeader>

```yaml
# 朝北
/tp @e[type=armor_stand,name="Grumm",c=1] ~-0.097 ~0.2325 ~1.1245 350

# 朝南
/tp @e[type=armor_stand,name="Grumm",c=1] ~0.097 ~0.2325 ~-1.1245 171

# 朝东
/tp @e[type=armor_stand,name="Grumm",c=1] ~-1.1245 ~0.2325 ~-0.097 81

# 朝西
/tp @e[type=armor_stand,name="Grumm",c=1] ~1.1245 ~0.2325 ~0.097 260
```

</Spoiler>

<Spoiler title="上半砖">

<CodeHeader></CodeHeader>

```yaml
# 朝北
/tp @e[type=armor_stand,name="Grumm",c=1] ~-1.1245 ~0.484 ~-0.097 81

# 朝南
/tp @e[type=armor_stand,name="Grumm",c=1] ~1.1245 ~0.484 ~0.097 260

# 朝东
/tp @e[type=armor_stand,name="Grumm",c=1] ~0.097 ~0.484 ~-1.1245 171

# 朝西
/tp @e[type=armor_stand,name="Grumm",c=1] ~-0.097 ~0.484 ~1.1245 350
```

</Spoiler>

## 保存与加载 MBE

1. 要保存，运行：

    - `/execute at @e[type=armor_stand,name="Grumm",c=1] run structure save wiki:mbe ~~~ ~~~ true disk false`

2. 要加载，运行：
    - `/structure load wiki:mbe <to: x y z>`

> 注意：结构名称 `wiki:mbe` 可以根据需要更改。