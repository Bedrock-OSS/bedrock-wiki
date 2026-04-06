---
title: FMBE - 创建显示实体的新方法
category: 技术
tags:
    - intermediate
mentions:
    - BedrockCommands
    - PipiSpamton
    - zheaEvyline
    - szea-ll14
nav_order: 5
description: 一份在基岩版仅使用命令创建方块显示实体的指南。
---

## 简介

[来自基岩版命令社区 (BCC) Discord](https://bedrockcommands.org/)

在本页面，我们将学习如何在 Minecraft 基岩版中仅使用命令创建方块显示实体。

开发此技术的第一人是 [u/Maxed_Out10](https://www.reddit.com/user/Maxed_Out10/)，他仅使用原版命令。他的技术灵活性较低但更简单，使用盔甲架。要查看他的方法，请参阅["MBE - Max 的方块实体"](/commands/block-entities)页面。

受 Max 的方块实体 (MBE) 的启发，命令专家 @pipi_Spamton、@siratama 以及他们来自[日本指挥官聚会](https://discord.gg/xFZH6QJfSB)团队设计了一种在 Minecraft 基岩版中创建方块显示实体的新方法，提供了更多的灵活性和定制性。此方法基于与 MBE 相同的原理，但不使用盔甲架，而是有效地使用狐狸的骨骼结构来渲染方块显示。

从传统意义上说，你可以称它们为方块显示实体或简单的"显示实体"。但是，为表彰 [u/Maxed_Out10](https://www.reddit.com/user/Maxed_Out10/)，在基岩版社区中它们更常被称为"Fox MBE"（FMBE）。

:::info 注意

-   此方法每个方块显示使用一只狐狸。因此，太多的狐狸（如任何实体）可能会导致服务器卡顿。
-   玩家仍然可以穿过它们，也可以与它们交互（除非限制）

:::

## 视频演示

<YouTubeEmbed id="FVRd2n7JX3k" />

## 系统

<CodeHeader>BP/functions/wiki/fmbe/render.mcfunction</CodeHeader>

```yaml
### 重新定位并定义 FMBE 尺寸
playanimation @e[tag=wiki:fmbe] animation.player.sleeping none 0 "" controller.animation.fox.move
playanimation @e[tag=wiki:fmbe] animation.creeper.swelling none 0 "v.xbasepos=v.xbasepos??0;v.ybasepos=v.ybasepos??0;v.zbasepos=v.zbasepos??0;v.xpos=v.xpos??0;v.ypos=v.ypos??0;v.zpos=v.zpos??0;v.xrot=v.xrot??0;v.yrot=v.yrot??0;v.zrot=v.zrot??0;v.scale=v.scale??1;v.xzscale=v.xzscale??1;v.yscale=v.yscale??1;v.swelling_scale1=2.1385*math.sqrt(v.xzscale)*math.sqrt(v.scale);v.swelling_scale2=2.1385*math.sqrt(v.yscale)*math.sqrt(v.scale);" wiki:scale
playanimation @e[tag=wiki:fmbe] animation.ender_dragon.neck_head_movement none 0 "v.head_rotation_x=0;v.head_rotation_y=0;v.head_rotation_z=0;v.head_position_x=(v.xbasepos*3741/8000)*math.sqrt(v.xzscale)*math.sqrt(v.scale);v.head_position_y=(10.6925+v.ybasepos*3741/8000)*math.sqrt(v.yscale)*math.sqrt(v.scale);v.head_position_z=(17.108-v.zbasepos*3741/8000)*math.sqrt(v.xzscale)*math.sqrt(v.scale);" wiki:shift_pos

## 定义 FMBE 旋转
### X 轴
playanimation @e[tag=wiki:fmbe] animation.warden.move none 0 "v.body_x_rot=90+v.xrot;v.body_z_rot=90+v.yrot;" wiki:xrot
### Z 轴
playanimation @e[tag=wiki:fmbe] animation.player.attack.rotations none 0 "v.attack_body_rot_y=-v.zrot;" wiki:zrot

## 定义 FMBE 位置
### X 轴
playanimation @e[tag=wiki:fmbe] animation.parrot.moving none 0 "v.wing_flap=(16-v.xpos)/0.3;" wiki:xpos
### Y 轴
playanimation @e[tag=wiki:fmbe] animation.minecart.move.v1.0 none 0 "v.rail_offset.x=0;v.rail_offset.y=1.6485+v.ypos/16;v.rail_offset.z=0;" wiki:ypos
### Z 轴
playanimation @e[tag=wiki:fmbe] animation.parrot.dance none 0 "v.dance.x=-v.zpos;v.dance.y=0;" wiki:zpos
```

![8 个命令方块的链条](/assets/images/commands/command-block-chain/8.png)

注意：提供控制器名称允许我们堆叠动画而不会覆盖之前的动画。例如：

-   `wiki:scale`（其中 `wiki` 是命名空间）。

请确保第一条命令的控制器名称是 `controller.animation.fox.move`。

对于其余命令，使用上述相同的控制器名称不是必需的。但是，它可以帮助避免与其他 playanimation 命令冲突。

## 如何使用 FMBE

激活上述系统后，按照以下步骤和说明操作：

### 设置

_在聊天中输入以下命令：_

1. 召唤一只狐狸并使用 `/replaceitem` 命令将其主手中的物品模型更改为你想要的物品。
    -   `/summon fox ~~~ ~ ~ minecraft:as_adult "wiki:fmbe"`
    -   `/replaceitem entity @e[name="wiki:fmbe",c=1] slot.weapon.mainhand 0 <itemID>`
    -   要动态更改手持物品，请参阅**[此处](/commands/display-entities#changing-fmbe-block-display-dynamically)**部分。
2. 然后，为其分配标签 `wiki:fmbe`。这应该会使狐狸看起来像一个实际的方块。
    -   `/tag @e[name="wiki:fmbe"] add wiki:fmbe`

### 变量

使用 FMBE，你可以使用客户端动画编辑显示位置、大小、角度等。变量如下：

-   位置：
    -   `v.xpos`
    -   `v.ypos`
    -   `v.zpos`
-   旋转：
    -   `v.xrot`
    -   `v.yrot`
    -   `v.zrot`
-   缩放：
    -   `v.scale` — 调整整体大小。
    -   `v.xzscale` — 调整 XZ 轴方向的大小。
    -   `v.yscale` — 调整 Y 轴方向的大小。
-   基础位置：
    -   `v.xbasepos`
    -   `v.ybasepos`
    -   `v.zbasepos`

:::tip 注意

-   `basepos` 变量移动位置而不影响旋转中心，意味着它们依赖于角度。（例如，`v.zbasepos=16` 在相对坐标中表现为 `^^^1`）
-   `pos` 和 `basepos` 值以 1/16 方块单位测量（16 = 1 个完整方块）

:::

### 编辑值

要编辑值，请使用以下命令结构：

-   `/playanimation @e[tag=wiki:fmbe] animation.player.attack.positions none 0 "" wiki:setvariable`

在双引号内写入你要编辑的变量的 molang 代码并赋值。

例如，将 `xrot` 设置为 35，`ypos` 设置为 16，`scale` 设置为 1.5：

-   `/playanimation @e[tag=wiki:fmbe] animation.player.attack.positions none 0 "v.xrot=35;v.ypos=16;v.scale=1.5;" wiki:setvariable`

Molang 还允许使用各种查询和运算符进行更复杂的动画。要了解更多关于 Molang 的信息，请参阅**[Molang 文档](https://bedrock.dev/docs/stable/Molang)**。

### 保存与加载 FMBE

1. 要保存，运行：
    -   `/execute at @e[tag=wiki:fmbe,c=1] run structure save wiki:fmbe ~~~ ~~~ true disk false`

2. 要加载，运行：
    -   `/structure load wiki:fmbe <to: x y z>`

注意：结构名称 `wiki:fmbe` 可以根据需要更改。

### 停止 FMBE 声音

要移除 FMBE 的狐狸声音，你可以使用以下命令：

<CodeHeader>BP/functions/wiki/fmbe/stopsound.mcfunction</CodeHeader>

```yaml
stopsound @a mob.fox.spit
stopsound @a mob.fox.sniff
stopsound @a mob.fox.sleep
stopsound @a mob.fox.screech
stopsound @a mob.fox.hurt
stopsound @a mob.fox.eat
stopsound @a mob.fox.death
stopsound @a mob.fox.bite
stopsound @a mob.fox.ambient
stopsound @a mob.fox.aggro
```

![10 个命令方块的链条](/assets/images/commands/command-block-chain/10.png)

### 动态更改 FMBE 方块显示

![演示 GIF](change-fmbe-block-dynamically.gif)

1. 在只有管理员可以访问的安全区域召唤一个名为 "`wiki:fmbe_pickaxe`" 的盔甲架，并在其主手中放置一个精准采集的镐。
2. 使用**[ticking area](https://learn.microsoft.com/en-us/minecraft/creator/documents/tickingareacommand)**确保此区域始终保持加载。
3. 使用以下命令动态更改目标 FMBE 显示的方块，而无需手动指定物品 ID：
    ```yaml
    ## 将目标 FMBE 的显示更改为其下方的方块
    execute as @e[name="wiki:fmbe_pickaxe"] at @e[tag=wiki:fmbe,name="wiki:test_target"] run loot replace entity @e[c=1] slot.weapon.mainhand 0 mine ~~-1~ mainhand
    ```
    ![一个重复命令方块](/assets/images/commands/command-block-chain/1.png)

## 简化版 FMBE

这是上述系统的压缩三命令版本。如果你不想更改 FMBE 的 `xzscale` 和 `yscale`，这可能是一个小小的优化。

<CodeHeader>BP/functions/wiki/fmbe/render.compressed.mcfunction</CodeHeader>

```yaml
## 重新定位并定义 FMBE 尺寸
playanimation @e[tag=wiki:fmbe] animation.player.sleeping none 0 "" controller.animation.fox.move
playanimation @e[tag=wiki:fmbe] animation.creeper.swelling none 0 "v.scale=1;v.adscale=math.sqrt(v.scale);v.adscaled=2.1385*v.adscale;v.xbasepos=0;v.ybasepos=0;v.zbasepos=0;v.xpos=0;v.ypos=0;v.zpos=0;v.xrot=q.life_time*0;v.yrot=q.life_time*0;v.zrot=q.life_time*0;v.swelling_scale1=v.adscaled;v.swelling_scale2=v.adscaled;" wiki:scale

## 定义 FMBE 位置和旋转
playanimation @e[tag=wiki:fmbe] animation.ender_dragon.neck_head_movement none 0 "v.adjust_xz=8*v.adscaled+v.zbasepos/v.adscaled;v.adjust_y=(-5-v.ybasepos/v.adscaled/v.adscaled)*v.adscaled;v.x=v.xbasepos/v.adscaled;v.y=v.adjust_y;v.z=v.adjust_xz;v.ty=v.y*math.cos(v.xrot)-v.z*math.sin(v.xrot);v.tz=v.y*math.sin(v.xrot)+v.z*math.cos(v.xrot);v.y=v.ty;v.z=v.tz;v.tx=-v.x*math.cos(v.zrot)+v.y*math.sin(v.zrot);v.ty=v.x*math.sin(v.zrot)+v.y*math.cos(v.zrot);v.x=v.tx;v.y=v.ty;v.tx=v.x*math.cos(v.yrot)+v.z*math.sin(v.yrot);v.tz=-v.x*math.sin(v.yrot)+v.z*math.cos(v.yrot);v.x=v.tx;v.z=v.tz;v.head_position_x=v.x+v.xpos/v.adscaled;v.head_position_y=7.48/v.adscale+v.z+v.zpos/v.adscaled;v.head_position_z=v.y-v.ypos/v.adscaled;v.head_rotation_x=90+v.xrot;v.head_rotation_y=v.zrot;v.head_rotation_z=v.yrot;" wiki:posrot
```

![3 个命令方块的链条](/assets/images/commands/command-block-chain/3.png)

## 视频指南

**第一部分：**

<YouTubeEmbed id="DdYq_nOFeKM" />

**第二部分：**

<YouTubeEmbed id="zwyGmxjBDDw" />

**第三部分：**

<YouTubeEmbed id="-5N8yVGR1MA" />

## 社区创作

**@Marmalade 制作的 FMBE 创建工具：**

<YouTubeEmbed id="d4HOGFrmxhs" />

**其他值得注意的创作：**

-   ⭐ **[轨道激光 by @FantasyTheCommander](https://youtu.be/DRy0J6u1qvo)**
-   ⭐ **[动画瀑布 by @FantasyTheCommander](https://youtu.be/AELTWr7akOQ)**
-   ⭐ **[凋零风暴 by @GuppyDuck](https://youtu.be/drf1wUN0Su4)**

## 高级 FMBE 对角变换 - BETA

这是一个新的、稍微高级一点的 FMBE 的测试版，将所需命令方块的总数减少到 5 个，同时还允许更复杂的变换。

![高级 FMBE 对角变换演示 GIF](advanced-fmbe-diagonal-transformation.gif)

它仍在开发中，可能会随时间变化，所以请谨慎使用。

**原始文档来源（日语）：[GitHub 上的讨论 #5](https://github.com/szea-ll14/mcbe-cmd-memo/discussions/5)**

### 高级 FMBE 显示类别

狐狸持有物品的方式会根据物品类型略有不同，模型显示的位置也有所不同。
请从三个可用类别中使用最适合你要显示的物品类型的命令：

-   **3D 方块**（例如石头、铁砧）
-   **2D 方块**（例如梯子、珊瑚、花）
-   **物品**（例如钻石、骨粉、门）
    -   **例外**：
        -   三叉戟
        -   望远镜
        -   弓
        -   玩家头/生物头
        -   旗帜
        -   核心
        -   潮汐核心
        -   装饰罐
        -   按钮
    -   **不支持**：
        -   盾牌

### 高级 FMBE 变量

| 变量          | 描述                               |
| ---------------- | ----------------------------------------- |
| `v.extend_scale` | 在特定方向延伸方块 |
| `v.extend_xrot`  | 延伸方向（x 轴旋转）  |
| `v.extend_yrot`  | 延伸方向（y 轴旋转）  |

（v.xzscale 和 v.yscale 已被移除）

### 高级 FMBE 系统

<Spoiler title="显示类别：3D 方块">

<CodeHeader>BP/functions/wiki/fmbe/render.3d_blocks.mcfunction</CodeHeader>

```yaml
/playanimation @e[tag=wiki:fmbe] animation.player.sleeping _ 0 "v.xpos=v.xpos??0;v.ypos=v.ypos??0;v.zpos=v.zpos??0;v.xrot=v.xrot??0;v.yrot=v.yrot??0;v.zrot=v.zrot??0;v.scale=v.scale??1;v.extend_scale=v.extend_scale??1;v.extend_xrot=v.extend_xrot??-90;v.extend_yrot=v.extend_yrot??0;v.xbasepos=v.xbasepos??0;v.ybasepos=v.ybasepos??0;v.zbasepos=v.zbasepos??0;v.F.r5=-math.sin(v.xrot);v.F.r2=-math.sin(v.yrot);v.F.r3=-math.sin(v.zrot);v.F.r4=math.cos(v.zrot);v.F.r8=math.cos(v.yrot);v.F.r0=-v.F.r5*v.F.r2*v.F.r3+v.F.r8*v.F.r4;v.F.r1=-v.F.r5*v.F.r2*v.F.r4-v.F.r8*v.F.r3;v.F.r6=-v.F.r5*v.F.r8*v.F.r3-v.F.r2*v.F.r4;v.F.r7=-v.F.r5*v.F.r8*v.F.r4+v.F.r2*v.F.r3;v.F.r2=v.F.r2*math.cos(v.xrot);v.F.r3=v.F.r3*math.cos(v.xrot);v.F.r4=v.F.r4*math.cos(v.xrot);v.F.r8=v.F.r8*math.cos(v.xrot);v.F.e0=math.cos(v.extend_yrot);v.F.e4=math.cos(v.extend_xrot);v.F.e5=-math.sin(v.extend_xrot);v.F.e6=math.sin(v.extend_yrot);v.F.e1=v.F.e5*v.F.e6;v.F.e2=-v.F.e4*v.F.e6;v.F.e7=-v.F.e5*v.F.e0;v.F.e8=v.F.e4*v.F.e0;v.F.p0=v.F.r0*v.F.e0+v.F.r2*v.F.e6;v.F.p1=v.F.r0*v.F.e1+v.F.r1*v.F.e4+v.F.r2*v.F.e7;v.F.p2=v.F.r0*v.F.e2+v.F.r1*v.F.e5+v.F.r2*v.F.e8;v.F.p3=v.F.r3*v.F.e0+v.F.r5*v.F.e6;v.F.p4=v.F.r3*v.F.e1+v.F.r4*v.F.e4+v.F.r5*v.F.e7;v.F.p5=v.F.r3*v.F.e2+v.F.r4*v.F.e5+v.F.r5*v.F.e8;v.F.p6=v.F.r6*v.F.e0+v.F.r8*v.F.e6;v.F.p7=v.F.r6*v.F.e1+v.F.r7*v.F.e4+v.F.r8*v.F.e7;v.F.p8=v.F.r6*v.F.e2+v.F.r7*v.F.e5+v.F.r8*v.F.e8;" controller.animation.fox.move
/playanimation @e[tag=wiki:fmbe] animation.creeper.swelling _ 0 "v.swelling_scale2=v.extend_scale*(v.swelling_scale1=(v.F.s=math.sqrt(32/7*v.scale)));" wiki:fmbe.3d_blocks.anim1
/playanimation @e[tag=wiki:fmbe] animation.ender_dragon.neck_head_movement _ 0 "v.head_position_x=-16/v.F.s*((v.xpos-1)*v.F.p1+(v.ypos-1/128)*v.F.p4+v.zpos*v.F.p7+(v.xbasepos*v.F.e1+(v.ybasepos+10/7)*v.extend_scale*v.F.e4+(v.zbasepos-16/7)*v.F.e7)*v.scale);v.head_position_y=16/v.F.s*(((v.xpos-1)*v.F.p2+(v.ypos-1/128)*v.F.p5+v.zpos*v.F.p8)/v.extend_scale+(v.xbasepos*v.F.e2+(v.ybasepos+10/7)*v.extend_scale*v.F.e5+(v.zbasepos-16/7)*v.F.e8)*v.scale);v.head_position_z=16/v.F.s*((v.xpos-1)*v.F.p0+(v.ypos-1/128)*v.F.p3+v.zpos*v.F.p6+(v.xbasepos*v.F.e0+(v.zbasepos-16/7)*v.F.e6)*v.scale);v.head_rotation_x=v.F.e6?math.atan2(0,-v.F.e6):math.atan2(-v.F.e8,v.F.e5);v.head_rotation_y=math.asin(-v.F.e0);v.head_rotation_z=v.F.e6?math.atan2(-v.F.e2,-v.F.e1):0;" wiki:fmbe.3d_blocks.anim2
/playanimation @e[tag=wiki:fmbe] animation.warden.move _ 0 "v.body_x_rot=v.F.p5||v.F.p3?math.atan2(v.F.p5,-v.F.p3):math.atan2(-v.F.p0,-v.F.p2);v.body_z_rot=v.F.p5||v.F.p3?math.atan2(-v.F.p1,v.F.p7):0;" wiki:fmbe.3d_blocks.anim3
/playanimation @e[tag=wiki:fmbe] animation.player.attack.rotations _ 0 "v.attack_body_rot_y=math.asin(-v.F.p4);" wiki:fmbe.3d_blocks.anim4
```

![5 个命令方块的链条](/assets/images/commands/command-block-chain/5.png)

</Spoiler>

<Spoiler title="显示类别：2D 方块">

<CodeHeader>BP/functions/wiki/fmbe/render.2d_blocks.mcfunction</CodeHeader>

```yaml
/playanimation @e[tag=wiki:fmbe] animation.player.sleeping _ 0 "v.xpos=v.xpos??0;v.ypos=v.ypos??0;v.zpos=v.zpos??0;v.xrot=v.xrot??0;v.yrot=v.yrot??0;v.zrot=v.zrot??0;v.scale=v.scale??1;v.extend_scale=v.extend_scale??1;v.extend_xrot=v.extend_xrot??-90;v.extend_yrot=v.extend_yrot??0;v.xbasepos=v.xbasepos??0;v.ybasepos=v.ybasepos??0;v.zbasepos=v.zbasepos??0;v.F.r5=-math.sin(v.xrot);v.F.r2=-math.sin(v.yrot);v.F.r3=-math.sin(v.zrot);v.F.r4=math.cos(v.zrot);v.F.r8=math.cos(v.yrot);v.F.r0=-v.F.r5*v.F.r2*v.F.r3+v.F.r8*v.F.r4;v.F.r1=-v.F.r5*v.F.r2*v.F.r4-v.F.r8*v.F.r3;v.F.r6=-v.F.r5*v.F.r8*v.F.r3-v.F.r2*v.F.r4;v.F.r7=-v.F.r5*v.F.r8*v.F.r4+v.F.r2*v.F.r3;v.F.r2=v.F.r2*math.cos(v.xrot);v.F.r3=v.F.r3*math.cos(v.xrot);v.F.r4=v.F.r4*math.cos(v.xrot);v.F.r8=v.F.r8*math.cos(v.xrot);v.F.e0=math.cos(v.extend_yrot);v.F.e4=math.cos(v.extend_xrot);v.F.e5=-math.sin(v.extend_xrot);v.F.e6=math.sin(v.extend_yrot);v.F.e1=v.F.e5*v.F.e6;v.F.e2=-v.F.e4*v.F.e6;v.F.e7=-v.F.e5*v.F.e0;v.F.e8=v.F.e4*v.F.e0;v.F.p0=v.F.r0*v.F.e0+v.F.r2*v.F.e6;v.F.p1=v.F.r0*v.F.e1+v.F.r1*v.F.e4+v.F.r2*v.F.e7;v.F.p2=v.F.r0*v.F.e2+v.F.r1*v.F.e5+v.F.r2*v.F.e8;v.F.p3=v.F.r3*v.F.e0+v.F.r5*v.F.e6;v.F.p4=v.F.r3*v.F.e1+v.F.r4*v.F.e4+v.F.r5*v.F.e7;v.F.p5=v.F.r3*v.F.e2+v.F.r4*v.F.e5+v.F.r5*v.F.e8;v.F.p6=v.F.r6*v.F.e0+v.F.r8*v.F.e6;v.F.p7=v.F.r6*v.F.e1+v.F.r7*v.F.e4+v.F.r8*v.F.e7;v.F.p8=v.F.r6*v.F.e2+v.F.r7*v.F.e5+v.F.r8*v.F.e8;" controller.animation.fox.move
/playanimation @e[tag=wiki:fmbe] animation.creeper.swelling _ 0 "v.F.co=math.cos(25);v.F.si=math.sin(25);v.swelling_scale2=v.extend_scale*(v.swelling_scale1=(v.F.s=math.sqrt(17/8*v.scale)));" wiki:fmbe.2d_blocks.anim1
/playanimation @e[tag=wiki:fmbe] animation.ender_dragon.neck_head_movement _ 0 "v.F.X=(v.xpos-1)*v.F.p0+(v.ypos-1/128)*v.F.p3+v.zpos*v.F.p6+((v.xbasepos+2/9)*v.F.e0+(v.zbasepos+32/65)*v.F.e6*v.extend_scale)*v.scale;v.F.Y=(v.xpos-1)*v.F.p1+(v.ypos-1/128)*v.F.p4+v.zpos*v.F.p7+((v.xbasepos+2/9)*v.F.e1+(v.ybasepos+10/11)*v.F.e4+(v.zbasepos+32/65)*v.F.e7*v.extend_scale)*v.scale;v.head_position_y=16/v.F.s*(((v.xpos-1)*v.F.p2+(v.ypos-1/128)*v.F.p5+v.zpos*v.F.p8)/v.extend_scale+((v.xbasepos+2/9)*v.F.e2+(v.ybasepos+10/11)*v.F.e5+(v.zbasepos+32/65)*v.F.e8*v.extend_scale)*v.scale);v.head_position_x=16/v.F.s*(v.F.X*v.F.co-v.F.Y*v.F.si);v.head_position_z=16/v.F.s*(v.F.X*v.F.si+v.F.Y*v.F.co);v.head_rotation_x=v.F.e6*v.F.si+v.F.e7*v.F.co||v.F.e0*v.F.si*v.F.si+v.F.e1*v.F.si*v.F.co+v.F.e4*v.F.co*v.F.co?math.atan2(-v.F.e6*v.F.si-v.F.e7*v.F.co,v.F.e0*v.F.si*v.F.si+v.F.e1*v.F.si*v.F.co+v.F.e4*v.F.co*v.F.co):math.atan2(v.F.e2*v.F.si+v.F.e5*v.F.co,v.F.e8);v.head_rotation_y=math.asin(v.F.e4*v.F.si*v.F.co-v.F.e1*v.F.co*v.F.co-v.F.e0*v.F.co*v.F.si);v.head_rotation_z=v.F.e6*v.F.si+v.F.e7*v.F.co||v.F.e0*v.F.si*v.F.si+v.F.e1*v.F.si*v.F.co+v.F.e4*v.F.co*v.F.co?math.atan2(v.F.e5*v.F.si-v.F.e2*v.F.co,v.F.e0*v.F.co*v.F.co-v.F.e1*v.F.co*v.F.si+v.F.e4*v.F.si*v.F.si):0;" wiki:fmbe.2d_blocks.anim2
/playanimation @e[tag=wiki:fmbe] animation.warden.move _ 0 "v.body_x_rot=v.F.p5||v.F.p3*v.F.si+v.F.p4*v.F.co?math.atan2(v.F.p5,-v.F.p3*v.F.si-v.F.p4*v.F.co):math.atan2(-v.F.p0*v.F.si-v.F.p1*v.F.co,-v.F.p2);v.body_z_rot=v.F.p5||v.F.p3*v.F.si+v.F.p4*v.F.co?math.atan2(v.F.p0*v.F.co-v.F.p1*v.F.si,v.F.p7*v.F.si-v.F.p6*v.F.co):0;" wiki:fmbe.2d_blocks.anim3
/playanimation @e[tag=wiki:fmbe] animation.player.attack.rotations _ 0 "v.attack_body_rot_y=math.asin(v.F.p3*v.F.co-v.F.p4*v.F.si);" wiki:fmbe.2d_blocks.anim4
```

![5 个命令方块的链条](/assets/images/commands/command-block-chain/5.png)

</Spoiler>

<Spoiler title="显示类别：物品">

<CodeHeader>BP/functions/wiki/fmbe/render.items.mcfunction</CodeHeader>

```yaml
/playanimation @e[tag=wiki:fmbe] animation.player.sleeping _ 0 "v.xpos=v.xpos??0;v.ypos=v.ypos??0;v.zpos=v.zpos??0;v.xrot=v.xrot??0;v.yrot=v.yrot??0;v.zrot=v.zrot??0;v.scale=v.scale??1;v.extend_scale=v.extend_scale??1;v.extend_xrot=v.extend_xrot??-90;v.extend_yrot=v.extend_yrot??0;v.xbasepos=v.xbasepos??0;v.ybasepos=v.ybasepos??0;v.zbasepos=v.zbasepos??0;v.F.r5=-math.sin(v.xrot);v.F.r2=-math.sin(v.yrot);v.F.r3=-math.sin(v.zrot);v.F.r4=math.cos(v.zrot);v.F.r8=math.cos(v.yrot);v.F.r0=-v.F.r5*v.F.r2*v.F.r3+v.F.r8*v.F.r4;v.F.r1=-v.F.r5*v.F.r2*v.F.r4-v.F.r8*v.F.r3;v.F.r6=-v.F.r5*v.F.r8*v.F.r3-v.F.r2*v.F.r4;v.F.r7=-v.F.r5*v.F.r8*v.F.r4+v.F.r2*v.F.r3;v.F.r2=v.F.r2*math.cos(v.xrot);v.F.r3=v.F.r3*math.cos(v.xrot);v.F.r4=v.F.r4*math.cos(v.xrot);v.F.r8=v.F.r8*math.cos(v.xrot);v.F.e0=math.cos(v.extend_yrot);v.F.e4=math.cos(v.extend_xrot);v.F.e5=-math.sin(v.extend_xrot);v.F.e6=math.sin(v.extend_yrot);v.F.e1=v.F.e5*v.F.e6;v.F.e2=-v.F.e4*v.F.e6;v.F.e7=-v.F.e5*v.F.e0;v.F.e8=v.F.e4*v.F.e0;v.F.p0=v.F.r0*v.F.e0+v.F.r2*v.F.e6;v.F.p1=v.F.r0*v.F.e1+v.F.r1*v.F.e4+v.F.r2*v.F.e7;v.F.p2=v.F.r0*v.F.e2+v.F.r1*v.F.e5+v.F.r2*v.F.e8;v.F.p3=v.F.r3*v.F.e0+v.F.r5*v.F.e6;v.F.p4=v.F.r3*v.F.e1+v.F.r4*v.F.e4+v.F.r5*v.F.e7;v.F.p5=v.F.r3*v.F.e2+v.F.r4*v.F.e5+v.F.r5*v.F.e8;v.F.p6=v.F.r6*v.F.e0+v.F.r8*v.F.e6;v.F.p7=v.F.r6*v.F.e1+v.F.r7*v.F.e4+v.F.r8*v.F.e7;v.F.p8=v.F.r6*v.F.e2+v.F.r7*v.F.e5+v.F.r8*v.F.e8;" controller.animation.fox.move
/playanimation @e[tag=wiki:fmbe] animation.creeper.swelling _ 0 "v.F.co=math.cos(25);v.F.si=math.sin(25);v.swelling_scale2=v.extend_scale*(v.swelling_scale1=(v.F.s=math.sqrt(17/8*v.scale)));" wiki:fmbe.items.anim1
/playanimation @e[tag=wiki:fmbe] animation.ender_dragon.neck_head_movement _ 0 "v.F.X=(v.xpos-1)*v.F.p0+(v.ypos-1/128)*v.F.p3+v.zpos*v.F.p6+((v.xbasepos+11/29)*v.F.e0+(v.zbasepos+8/15)*v.F.e6*v.extend_scale)*v.scale;v.F.Y=(v.xpos-1)*v.F.p1+(v.ypos-1/128)*v.F.p4+v.zpos*v.F.p7+((v.xbasepos+11/29)*v.F.e1+(v.ybasepos+31/37)*v.F.e4+(v.zbasepos+8/15)*v.F.e7*v.extend_scale)*v.scale;v.head_position_y=16/v.F.s*(((v.xpos-1)*v.F.p2+(v.ypos-1/128)*v.F.p5+v.zpos*v.F.p8)/v.extend_scale+((v.xbasepos+11/29)*v.F.e2+(v.ybasepos+31/37)*v.F.e5+(v.zbasepos+8/15)*v.F.e8*v.extend_scale)*v.scale);v.head_position_x=16/v.F.s*(v.F.X*v.F.co-v.F.Y*v.F.si);v.head_position_z=16/v.F.s*(v.F.X*v.F.si+v.F.Y*v.F.co);v.head_rotation_x=v.F.e6*v.F.si+v.F.e7*v.F.co||v.F.e0*v.F.si*v.F.si+v.F.e1*v.F.si*v.F.co+v.F.e4*v.F.co*v.F.co?math.atan2(-v.F.e6*v.F.si-v.F.e7*v.F.co,v.F.e0*v.F.si*v.F.si+v.F.e1*v.F.si*v.F.co+v.F.e4*v.F.co*v.F.co):math.atan2(v.F.e2*v.F.si+v.F.e5*v.F.co,v.F.e8);v.head_rotation_y=math.asin(v.F.e4*v.F.si*v.F.co-v.F.e1*v.F.co*v.F.co-v.F.e0*v.F.co*v.F.si);v.head_rotation_z=v.F.e6*v.F.si+v.F.e7*v.F.co||v.F.e0*v.F.si*v.F.si+v.F.e1*v.F.si*v.F.co+v.F.e4*v.F.co*v.F.co?math.atan2(v.F.e5*v.F.si-v.F.e2*v.F.co,v.F.e0*v.F.co*v.F.co-v.F.e1*v.F.co*v.F.si+v.F.e4*v.F.si*v.F.si):0;" wiki:fmbe.items.anim2
/playanimation @e[tag=wiki:fmbe] animation.warden.move _ 0 "v.body_x_rot=v.F.p5||v.F.p3*v.F.si+v.F.p4*v.F.co?math.atan2(v.F.p5,-v.F.p3*v.F.si-v.F.p4*v.F.co):math.atan2(-v.F.p0*v.F.si-v.F.p1*v.F.co,-v.F.p2);v.body_z_rot=v.F.p5||v.F.p3*v.F.si+v.F.p4*v.F.co?math.atan2(v.F.p0*v.F.co-v.F.p1*v.F.si,v.F.p7*v.F.si-v.F.p6*v.F.co):0;" wiki:fmbe.items.anim3
/playanimation @e[tag=wiki:fmbe] animation.player.attack.rotations _ 0 "v.attack_body_rot_y=math.asin(v.F.p3*v.F.co-v.F.p4*v.F.si);" wiki:fmbe.items.anim4
```

![5 个命令方块的链条](/assets/images/commands/command-block-chain/5.png)

</Spoiler>

### 高级 FMBE 模拟器

你可以在这里使用 3D 模拟器预览和实验变量（注意：它是日语的）：<br>
🔗 **[打开模拟器 (Desmos)](https://www.desmos.com/3d/mzzzuxssx7)**

### 高级 FMBE 计划添加

-   允许使用矩阵计算进行旋转
-   创建与 Nintendo Switch 兼容的版本（分裂版本）
-   添加使用指南
-   添加技术解释