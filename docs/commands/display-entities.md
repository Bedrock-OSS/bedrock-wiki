---
title: FMBE - A New Way to Create Display Entities
category: Techniques
tags:
    - intermediate
mentions:
    - BedrockCommands
    - PipiSpamton
    - zheaEvyline
    - szea-ll14
nav_order: 4
description: A guide to creating block display entities on Bedrock purely using commands.
---

## Introduction

[Sourced by the Bedrock Commands Community (BCC) Discord](https://bedrockcommands.org/)

In this page, we will learn how to create block display entities in Minecraft Bedrock purely using commands.

The first person to develop such a technique was [u/Maxed_Out10](https://www.reddit.com/user/Maxed_Out10/), who used only Vanilla commands. His technique offers less flexibility but is much simpler, using armor stands. To check out his method, you may refer to the ["MBE - Max's Block Entity"](/commands/block-entities) page.

Inspired by Max's Block Entity (MBE), command experts @pipi_Spamton, @siratama, and their team from the [Japanese Commanders Gathering](https://discord.gg/xFZH6QJfSB), have devised a new technique for creating block display entities in Minecraft Bedrock which offers more flexibility and customization. This method is based on the same principles as MBE, but instead of armor stands, it effectively uses the bone structure of foxes to render the block displays.

In a traditional sense, you may refer to them as block display entities or simply "display entities". However, in recognition of [u/Maxed_Out10](https://www.reddit.com/user/Maxed_Out10/), they are more popularly known as "Fox MBE" (FMBE) in the Bedrock communities.

:::info NOTE

- This method uses 1 fox per block display. Therefore, too many foxes (like any entity) can contribute to server lag.
- Players will still be able to pass through them, as well as interact with them (if not restricted)

:::

## Video Demonstration

<YouTubeEmbed
    id="FVRd2n7JX3k"
/>

## System

<CodeHeader>BP/functions/wiki/fmbe/render.mcfunction</CodeHeader>

```yaml
### Reposition and Define FMBE Scale
playanimation @e[tag=wiki:fmbe] animation.player.sleeping none 0 "" controller.animation.fox.move
playanimation @e[tag=wiki:fmbe] animation.creeper.swelling none 0 "v.xbasepos=v.xbasepos??0;v.ybasepos=v.ybasepos??0;v.zbasepos=v.zbasepos??0;v.xpos=v.xpos??0;v.ypos=v.ypos??0;v.zpos=v.zpos??0;v.xrot=v.xrot??0;v.yrot=v.yrot??0;v.zrot=v.zrot??0;v.scale=v.scale??1;v.xzscale=v.xzscale??1;v.yscale=v.yscale??1;v.swelling_scale1=2.1385*math.sqrt(v.xzscale)*math.sqrt(v.scale);v.swelling_scale2=2.1385*math.sqrt(v.yscale)*math.sqrt(v.scale);" wiki:scale
playanimation @e[tag=wiki:fmbe] animation.ender_dragon.neck_head_movement none 0 "v.head_rotation_x=0;v.head_rotation_y=0;v.head_rotation_z=0;v.head_position_x=(v.xbasepos*3741/8000)*math.sqrt(v.xzscale)*math.sqrt(v.scale);v.head_position_y=(10.6925+v.ybasepos*3741/8000)*math.sqrt(v.yscale)*math.sqrt(v.scale);v.head_position_z=(17.108-v.zbasepos*3741/8000)*math.sqrt(v.xzscale)*math.sqrt(v.scale);" wiki:shift_pos

## Define FMBE Rotation
### X Axis
playanimation @e[tag=wiki:fmbe] animation.warden.move none 0 "v.body_x_rot=90+v.xrot;v.body_z_rot=90+v.yrot;" wiki:xrot
### Z Axis
playanimation @e[tag=wiki:fmbe] animation.player.attack.rotations none 0 "v.attack_body_rot_y=-v.zrot;" wiki:zrot

## Define FMBE Position
### X Axis
playanimation @e[tag=wiki:fmbe] animation.parrot.moving none 0 "v.wing_flap=(16-v.xpos)/0.3;" wiki:xpos
### Y Axis
playanimation @e[tag=wiki:fmbe] animation.minecart.move.v1.0 none 0 "v.rail_offset.x=0;v.rail_offset.y=1.6485+v.ypos/16;v.rail_offset.z=0;" wiki:ypos
### Z Axis
playanimation @e[tag=wiki:fmbe] animation.parrot.dance none 0 "v.dance.x=-v.zpos;v.dance.y=0;" wiki:zpos
```
![Chain of 8 Command Blocks](/assets/images/commands/command-block-chain/8.png)

Note: Providing a controller name allows us to stack animations without overwriting the previous one. Example:
- `wiki:scale` (where `wiki` is a namespace).

Please ensure the controller name in the first command is `controller.animation.fox.move`.

For rest of the commands, using the same controller names above isn't required. However, it can help avoid collisions with other playanimation commands.

## How to Use FMBE

Once you have the system above active, follow the steps and instructions given below:

### Setup
*To be typed in chat:*

1. Summon a fox and use the `/replaceitem` command to give it the item model you want in its main hand.
    - `/summon fox ~~~ ~ ~ minecraft:as_adult "wiki:fmbe"`
    - `/replaceitem entity @e[name="wiki:fmbe",c=1] slot.weapon.mainhand 0 <itemID>`
    - To change the held item dynamically, refer to the section **[here](/commands/display-entities#changing-fmbe-block-display-dynamically)**.
2. Then, assign it the tag `wiki:fmbe`. This should make the fox appear like an actual block.
    - `/tag @e[name="wiki:fmbe"] add wiki:fmbe`

### Variables
With FMBE, you can edit the display position, size, angle, and more using client animations. The variables are as follows:  
- For Position:
    - `v.xpos`
    - `v.ypos`
    - `v.zpos`
- For Rotation:
    - `v.xrot`
    - `v.yrot`
    - `v.zrot`
- For Scale:
    - `v.scale` — adjusts overall size.
    - `v.xzscale` — adjusts size along the XZ axis.
    - `v.yscale` — adjusts size along the Y axis.
- For Base Position:
    - `v.xbasepos`
    - `v.ybasepos`
    - `v.zbasepos`

:::tip NOTE

- `basepos` variables move the position without affecting the center of rotation, meaning they are dependent on angles. (e.g., `v.zbasepos=16` behaves like `^^^1` in relative coordinates).
- `pos` and `basepos` values are measured in 1/16 block units (16 = 1 full block).

:::

### Editing Values

To edit values, use the following command structure:  
- `/playanimation @e[tag=wiki:fmbe] animation.player.attack.positions none 0 "" wiki:setvariable`

Write the molang code for the variable you want to edit inside the double quotes and assign the value.

Example, to set `xrot` to 35, `ypos` to 16, and `scale` to 1.5:
- `/playanimation @e[tag=wiki:fmbe] animation.player.attack.positions none 0 "v.xrot=35;v.ypos=16;v.scale=1.5;" wiki:setvariable`

Molang also allows for more complex animations using various queries and operators. To learn more about Molang, refer to the **[Molang Documentation](https://bedrock.dev/docs/stable/Molang)**.

### Saving & Loading FMBE

1. To save, run:
    - `/execute at @e[tag=wiki:fmbe,c=1] run structure save wiki:fmbe ~~~ ~~~ true disk false`

2. To load, run:
    - `/structure load wiki:fmbe <to: x y z>`

Note: The structure name `wiki:fmbe` can be changed to your preference.

### Stoping FMBE Sounds

To remove fox sounds from the FMBE, you may use these commands:

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
![Chain of 10 Command Blocks](/assets/images/commands/command-block-chain/10.png)

### Changing FMBE Block Display Dynamically

![Demonstration GIF](/assets/images/commands/display-entities/change-fmbe-block-dynamically.gif)

1. Summon an armor stand named "`wiki:fmbe_pickaxe`" in a secure area accessible only to operators and place a silk touch pickaxe in it's main hand.
2. Ensure this area remains loaded at all times using a **[ticking area](https://learn.microsoft.com/en-us/minecraft/creator/documents/tickingareacommand)**.
3. Use the following command to dynamically change the block displayed by the target FMBE without manually specifying the item ID:
    ```yaml
    ## Change the Target FMBE's Display to the Block Below It
    execute as @e[name="wiki:fmbe_pickaxe"] at @e[tag=wiki:fmbe,name="wiki:test_target"] run loot replace entity @e[c=1] slot.weapon.mainhand 0 mine ~~-1~ mainhand
    ```
    ![One Repeating Command Block](/assets/images/commands/command-block-chain/1.png)

## Simplified FMBE

This is a compressed three-command version of the system above. If you do not wish to alter the FMBE `xzscale` and `yscale`, this could be a slight optimisation.

<CodeHeader>BP/functions/wiki/fmbe/render.compressed.mcfunction</CodeHeader>

```yaml
## Reposition and Define FMBE Scale
playanimation @e[tag=wiki:fmbe] animation.player.sleeping none 0 "" controller.animation.fox.move
playanimation @e[tag=wiki:fmbe] animation.creeper.swelling none 0 "v.scale=1;v.adscale=math.sqrt(v.scale);v.adscaled=2.1385*v.adscale;v.xbasepos=0;v.ybasepos=0;v.zbasepos=0;v.xpos=0;v.ypos=0;v.zpos=0;v.xrot=q.life_time*0;v.yrot=q.life_time*0;v.zrot=q.life_time*20;v.swelling_scale1=v.adscaled;v.swelling_scale2=v.adscaled;" wiki:scale

## Define FMBE Position & Rotation
playanimation @e[tag=wiki:fmbe] animation.ender_dragon.neck_head_movement none 0 "v.adjust_xz=8*v.adscaled+v.zbasepos/v.adscaled;v.adjust_y=(-5-v.ybasepos/v.adscaled/v.adscaled)*v.adscaled;v.x=v.xbasepos/v.adscaled;v.y=v.adjust_y;v.z=v.adjust_xz;v.ty=v.y*math.cos(v.xrot)-v.z*math.sin(v.xrot);v.tz=v.y*math.sin(v.xrot)+v.z*math.cos(v.xrot);v.y=v.ty;v.z=v.tz;v.tx=-v.x*math.cos(v.zrot)+v.y*math.sin(v.zrot);v.ty=v.x*math.sin(v.zrot)+v.y*math.cos(v.zrot);v.x=v.tx;v.y=v.ty;v.tx=v.x*math.cos(v.yrot)+v.z*math.sin(v.yrot);v.tz=-v.x*math.sin(v.yrot)+v.z*math.cos(v.yrot);v.x=v.tx;v.z=v.tz;v.head_position_x=v.x+v.xpos/v.adscaled;v.head_position_y=7.48/v.adscale+v.z+v.zpos/v.adscaled;v.head_position_z=v.y-v.ypos/v.adscaled;v.head_rotation_x=90+v.xrot;v.head_rotation_y=v.zrot;v.head_rotation_z=v.yrot;" wiki:posrot
```
![Chain of 3 Command Blocks](/assets/images/commands/command-block-chain/3.png)

## Video Guides

**Part I:**
<YouTubeEmbed
    id="DdYq_nOFeKM"
/>

**Part II:**
<YouTubeEmbed
    id="zwyGmxjBDDw"
/>

**Part III:**
<YouTubeEmbed
    id="-5N8yVGR1MA"
/>

## Community Creations

**FMBE Creation Tool by @Marmalade:**

<YouTubeEmbed
    id="d4HOGFrmxhs"
/>

**Other Notable Creations:**

- ⭐ **[Orbital Laser by @FantasyTheCommander](https://youtu.be/DRy0J6u1qvo)**
- ⭐ **[Animated Waterfalls by @FantasyTheCommander](https://youtu.be/AELTWr7akOQ)**
- ⭐ **[Wither Storm by @GuppyDuck](https://youtu.be/drf1wUN0Su4)**

## Advanced FMBE Diagonal Transformation - BETA

This is the beta version of a new, slightly more advanced FMBE, which reduces the total number of command blocks required to 5, while also allowing for more complex transformations.

![Advanced FMBE Diagonal Transformation Demo GIF](/assets/images/commands/display-entities/advanced-fmbe-diagonal-transformation.gif)

It is still under development and may change over time, so use it with caution.

**Original documentation source (Japanese): [Discussion #5 on GitHub](https://github.com/szea-ll14/mcbe-cmd-memo/discussions/5)**

### Advanced FMBE Display Categories

The way the fox holds an item slightly changes depending on the type of item, and the position where the model is displayed also varies.
Please use the command that is best suited for the type of item you wish to display from the three available categories:

- **3D Blocks** (e.g., stone, anvil)
- **2D Blocks** (e.g., ladder, coral, flower)
- **Items** (e.g., diamond, bone meal, door)
    - **Exceptions**:
        - Trident
        - Spyglass
        - Bow
        - Player Head / Mob Head
        - Banner
        - Heavy Core
        - Conduit
        - Decorated Pot
        - Button
    - **Unsupported**:
        - Shield

### Advanced FMBE Variables

| Variable         | Description                                           |
|------------------|-------------------------------------------------------|
| `v.extend_scale` | Extends the block in a specific direction             |
| `v.extend_xrot`  | Direction of extension (x axis rotation)             |
| `v.extend_yrot`  | Direction of extension (y axis rotation)             |

(v.xzscale and v.yscale have been removed)

### Advanced FMBE Systems

<Spoiler title="Display Category: 3D Blocks">

<CodeHeader>BP/functions/wiki/fmbe/render.3d_blocks.mcfunction</CodeHeader>

```yaml
/playanimation @e[tag=wiki:fmbe] animation.player.sleeping _ 0 "v.xpos=v.xpos??0;v.ypos=v.ypos??0;v.zpos=v.zpos??0;v.xrot=v.xrot??0;v.yrot=v.yrot??0;v.zrot=v.zrot??0;v.scale=v.scale??1;v.extend_scale=v.extend_scale??1;v.extend_xrot=v.extend_xrot??-90;v.extend_yrot=v.extend_yrot??0;v.xbasepos=v.xbasepos??0;v.ybasepos=v.ybasepos??0;v.zbasepos=v.zbasepos??0;v.F.r5=-math.sin(v.xrot);v.F.r2=-math.sin(v.yrot);v.F.r3=-math.sin(v.zrot);v.F.r4=math.cos(v.zrot);v.F.r8=math.cos(v.yrot);v.F.r0=-v.F.r5*v.F.r2*v.F.r3+v.F.r8*v.F.r4;v.F.r1=-v.F.r5*v.F.r2*v.F.r4-v.F.r8*v.F.r3;v.F.r6=-v.F.r5*v.F.r8*v.F.r3-v.F.r2*v.F.r4;v.F.r7=-v.F.r5*v.F.r8*v.F.r4+v.F.r2*v.F.r3;v.F.r2=v.F.r2*math.cos(v.xrot);v.F.r3=v.F.r3*math.cos(v.xrot);v.F.r4=v.F.r4*math.cos(v.xrot);v.F.r8=v.F.r8*math.cos(v.xrot);v.F.e0=math.cos(v.extend_yrot);v.F.e4=math.cos(v.extend_xrot);v.F.e5=-math.sin(v.extend_xrot);v.F.e6=math.sin(v.extend_yrot);v.F.e1=v.F.e5*v.F.e6;v.F.e2=-v.F.e4*v.F.e6;v.F.e7=-v.F.e5*v.F.e0;v.F.e8=v.F.e4*v.F.e0;v.F.p0=v.F.r0*v.F.e0+v.F.r2*v.F.e6;v.F.p1=v.F.r0*v.F.e1+v.F.r1*v.F.e4+v.F.r2*v.F.e7;v.F.p2=v.F.r0*v.F.e2+v.F.r1*v.F.e5+v.F.r2*v.F.e8;v.F.p3=v.F.r3*v.F.e0+v.F.r5*v.F.e6;v.F.p4=v.F.r3*v.F.e1+v.F.r4*v.F.e4+v.F.r5*v.F.e7;v.F.p5=v.F.r3*v.F.e2+v.F.r4*v.F.e5+v.F.r5*v.F.e8;v.F.p6=v.F.r6*v.F.e0+v.F.r8*v.F.e6;v.F.p7=v.F.r6*v.F.e1+v.F.r7*v.F.e4+v.F.r8*v.F.e7;v.F.p8=v.F.r6*v.F.e2+v.F.r7*v.F.e5+v.F.r8*v.F.e8;" controller.animation.fox.move
/playanimation @e[tag=wiki:fmbe] animation.creeper.swelling _ 0 "v.swelling_scale2=v.extend_scale*(v.swelling_scale1=(v.F.s=math.sqrt(32/7*v.scale)));" wiki:fmbe.3d_blocks.anim1
/playanimation @e[tag=wiki:fmbe] animation.ender_dragon.neck_head_movement _ 0 "v.head_position_x=-16/v.F.s*((v.xpos-1)*v.F.p1+(v.ypos-1/128)*v.F.p4+v.zpos*v.F.p7+(v.xbasepos*v.F.e1+(v.ybasepos+10/7)*v.extend_scale*v.F.e4+(v.zbasepos-16/7)*v.F.e7)*v.scale);v.head_position_y=16/v.F.s*(((v.xpos-1)*v.F.p2+(v.ypos-1/128)*v.F.p5+v.zpos*v.F.p8)/v.extend_scale+(v.xbasepos*v.F.e2+(v.ybasepos+10/7)*v.extend_scale*v.F.e5+(v.zbasepos-16/7)*v.F.e8)*v.scale);v.head_position_z=16/v.F.s*((v.xpos-1)*v.F.p0+(v.ypos-1/128)*v.F.p3+v.zpos*v.F.p6+(v.xbasepos*v.F.e0+(v.zbasepos-16/7)*v.F.e6)*v.scale);v.head_rotation_x=v.F.e6?math.atan2(0,-v.F.e6):math.atan2(-v.F.e8,v.F.e5);v.head_rotation_y=math.asin(-v.F.e0);v.head_rotation_z=v.F.e6?math.atan2(-v.F.e2,-v.F.e1):0;" wiki:fmbe.3d_blocks.anim2
/playanimation @e[tag=wiki:fmbe] animation.warden.move _ 0 "v.body_x_rot=v.F.p5||v.F.p3?math.atan2(v.F.p5,-v.F.p3):math.atan2(-v.F.p0,-v.F.p2);v.body_z_rot=v.F.p5||v.F.p3?math.atan2(-v.F.p1,v.F.p7):0;" wiki:fmbe.3d_blocks.anim3
/playanimation @e[tag=wiki:fmbe] animation.player.attack.rotations _ 0 "v.attack_body_rot_y=math.asin(-v.F.p4);" wiki:fmbe.3d_blocks.anim4
```
![Chain of 5 Command Blocks](/assets/images/commands/command-block-chain/5.png)

</Spoiler>

<Spoiler title="Display Category: 2D Blocks">

<CodeHeader>BP/functions/wiki/fmbe/render.2d_blocks.mcfunction</CodeHeader>

```yaml
/playanimation @e[tag=wiki:fmbe] animation.player.sleeping _ 0 "v.xpos=v.xpos??0;v.ypos=v.ypos??0;v.zpos=v.zpos??0;v.xrot=v.xrot??0;v.yrot=v.yrot??0;v.zrot=v.zrot??0;v.scale=v.scale??1;v.extend_scale=v.extend_scale??1;v.extend_xrot=v.extend_xrot??-90;v.extend_yrot=v.extend_yrot??0;v.xbasepos=v.xbasepos??0;v.ybasepos=v.ybasepos??0;v.zbasepos=v.zbasepos??0;v.F.r5=-math.sin(v.xrot);v.F.r2=-math.sin(v.yrot);v.F.r3=-math.sin(v.zrot);v.F.r4=math.cos(v.zrot);v.F.r8=math.cos(v.yrot);v.F.r0=-v.F.r5*v.F.r2*v.F.r3+v.F.r8*v.F.r4;v.F.r1=-v.F.r5*v.F.r2*v.F.r4-v.F.r8*v.F.r3;v.F.r6=-v.F.r5*v.F.r8*v.F.r3-v.F.r2*v.F.r4;v.F.r7=-v.F.r5*v.F.r8*v.F.r4+v.F.r2*v.F.r3;v.F.r2=v.F.r2*math.cos(v.xrot);v.F.r3=v.F.r3*math.cos(v.xrot);v.F.r4=v.F.r4*math.cos(v.xrot);v.F.r8=v.F.r8*math.cos(v.xrot);v.F.e0=math.cos(v.extend_yrot);v.F.e4=math.cos(v.extend_xrot);v.F.e5=-math.sin(v.extend_xrot);v.F.e6=math.sin(v.extend_yrot);v.F.e1=v.F.e5*v.F.e6;v.F.e2=-v.F.e4*v.F.e6;v.F.e7=-v.F.e5*v.F.e0;v.F.e8=v.F.e4*v.F.e0;v.F.p0=v.F.r0*v.F.e0+v.F.r2*v.F.e6;v.F.p1=v.F.r0*v.F.e1+v.F.r1*v.F.e4+v.F.r2*v.F.e7;v.F.p2=v.F.r0*v.F.e2+v.F.r1*v.F.e5+v.F.r2*v.F.e8;v.F.p3=v.F.r3*v.F.e0+v.F.r5*v.F.e6;v.F.p4=v.F.r3*v.F.e1+v.F.r4*v.F.e4+v.F.r5*v.F.e7;v.F.p5=v.F.r3*v.F.e2+v.F.r4*v.F.e5+v.F.r5*v.F.e8;v.F.p6=v.F.r6*v.F.e0+v.F.r8*v.F.e6;v.F.p7=v.F.r6*v.F.e1+v.F.r7*v.F.e4+v.F.r8*v.F.e7;v.F.p8=v.F.r6*v.F.e2+v.F.r7*v.F.e5+v.F.r8*v.F.e8;" controller.animation.fox.move
/playanimation @e[tag=wiki:fmbe] animation.creeper.swelling _ 0 "v.F.co=math.cos(25);v.F.si=math.sin(25);v.swelling_scale2=v.extend_scale*(v.swelling_scale1=(v.F.s=math.sqrt(17/8*v.scale)));" wiki:fmbe.2d_blocks.anim1
/playanimation @e[tag=wiki:fmbe] animation.ender_dragon.neck_head_movement _ 0 "v.F.X=(v.xpos-1)*v.F.p0+(v.ypos-1/128)*v.F.p3+v.zpos*v.F.p6+((v.xbasepos+2/9)*v.F.e0+(v.zbasepos+32/65)*v.F.e6*v.extend_scale)*v.scale;v.F.Y=(v.xpos-1)*v.F.p1+(v.ypos-1/128)*v.F.p4+v.zpos*v.F.p7+((v.xbasepos+2/9)*v.F.e1+(v.ybasepos+10/11)*v.F.e4+(v.zbasepos+32/65)*v.F.e7*v.extend_scale)*v.scale;v.head_position_y=16/v.F.s*(((v.xpos-1)*v.F.p2+(v.ypos-1/128)*v.F.p5+v.zpos*v.F.p8)/v.extend_scale+((v.xbasepos+2/9)*v.F.e2+(v.ybasepos+10/11)*v.F.e5+(v.zbasepos+32/65)*v.F.e8*v.extend_scale)*v.scale);v.head_position_x=16/v.F.s*(v.F.X*v.F.co-v.F.Y*v.F.si);v.head_position_z=16/v.F.s*(v.F.X*v.F.si+v.F.Y*v.F.co);v.head_rotation_x=v.F.e6*v.F.si+v.F.e7*v.F.co||v.F.e0*v.F.si*v.F.si+v.F.e1*v.F.si*v.F.co+v.F.e4*v.F.co*v.F.co?math.atan2(-v.F.e6*v.F.si-v.F.e7*v.F.co,v.F.e0*v.F.si*v.F.si+v.F.e1*v.F.si*v.F.co+v.F.e4*v.F.co*v.F.co):math.atan2(v.F.e2*v.F.si+v.F.e5*v.F.co,v.F.e8);v.head_rotation_y=math.asin(v.F.e4*v.F.si*v.F.co-v.F.e1*v.F.co*v.F.co-v.F.e0*v.F.co*v.F.si);v.head_rotation_z=v.F.e6*v.F.si+v.F.e7*v.F.co||v.F.e0*v.F.si*v.F.si+v.F.e1*v.F.si*v.F.co+v.F.e4*v.F.co*v.F.co?math.atan2(v.F.e5*v.F.si-v.F.e2*v.F.co,v.F.e0*v.F.co*v.F.co-v.F.e1*v.F.co*v.F.si+v.F.e4*v.F.si*v.F.si):0;" wiki:fmbe.2d_blocks.anim2
/playanimation @e[tag=wiki:fmbe] animation.warden.move _ 0 "v.body_x_rot=v.F.p5||v.F.p3*v.F.si+v.F.p4*v.F.co?math.atan2(v.F.p5,-v.F.p3*v.F.si-v.F.p4*v.F.co):math.atan2(-v.F.p0*v.F.si-v.F.p1*v.F.co,-v.F.p2);v.body_z_rot=v.F.p5||v.F.p3*v.F.si+v.F.p4*v.F.co?math.atan2(v.F.p0*v.F.co-v.F.p1*v.F.si,v.F.p7*v.F.si-v.F.p6*v.F.co):0;" wiki:fmbe.2d_blocks.anim3
/playanimation @e[tag=wiki:fmbe] animation.player.attack.rotations _ 0 "v.attack_body_rot_y=math.asin(v.F.p3*v.F.co-v.F.p4*v.F.si);" wiki:fmbe.2d_blocks.anim4
```
![Chain of 5 Command Blocks](/assets/images/commands/command-block-chain/5.png)

</Spoiler>

<Spoiler title="Display Category: Items">

<CodeHeader>BP/functions/wiki/fmbe/render.items.mcfunction</CodeHeader>

```yaml
/playanimation @e[tag=wiki:fmbe] animation.player.sleeping _ 0 "v.xpos=v.xpos??0;v.ypos=v.ypos??0;v.zpos=v.zpos??0;v.xrot=v.xrot??0;v.yrot=v.yrot??0;v.zrot=v.zrot??0;v.scale=v.scale??1;v.extend_scale=v.extend_scale??1;v.extend_xrot=v.extend_xrot??-90;v.extend_yrot=v.extend_yrot??0;v.xbasepos=v.xbasepos??0;v.ybasepos=v.ybasepos??0;v.zbasepos=v.zbasepos??0;v.F.r5=-math.sin(v.xrot);v.F.r2=-math.sin(v.yrot);v.F.r3=-math.sin(v.zrot);v.F.r4=math.cos(v.zrot);v.F.r8=math.cos(v.yrot);v.F.r0=-v.F.r5*v.F.r2*v.F.r3+v.F.r8*v.F.r4;v.F.r1=-v.F.r5*v.F.r2*v.F.r4-v.F.r8*v.F.r3;v.F.r6=-v.F.r5*v.F.r8*v.F.r3-v.F.r2*v.F.r4;v.F.r7=-v.F.r5*v.F.r8*v.F.r4+v.F.r2*v.F.r3;v.F.r2=v.F.r2*math.cos(v.xrot);v.F.r3=v.F.r3*math.cos(v.xrot);v.F.r4=v.F.r4*math.cos(v.xrot);v.F.r8=v.F.r8*math.cos(v.xrot);v.F.e0=math.cos(v.extend_yrot);v.F.e4=math.cos(v.extend_xrot);v.F.e5=-math.sin(v.extend_xrot);v.F.e6=math.sin(v.extend_yrot);v.F.e1=v.F.e5*v.F.e6;v.F.e2=-v.F.e4*v.F.e6;v.F.e7=-v.F.e5*v.F.e0;v.F.e8=v.F.e4*v.F.e0;v.F.p0=v.F.r0*v.F.e0+v.F.r2*v.F.e6;v.F.p1=v.F.r0*v.F.e1+v.F.r1*v.F.e4+v.F.r2*v.F.e7;v.F.p2=v.F.r0*v.F.e2+v.F.r1*v.F.e5+v.F.r2*v.F.e8;v.F.p3=v.F.r3*v.F.e0+v.F.r5*v.F.e6;v.F.p4=v.F.r3*v.F.e1+v.F.r4*v.F.e4+v.F.r5*v.F.e7;v.F.p5=v.F.r3*v.F.e2+v.F.r4*v.F.e5+v.F.r5*v.F.e8;v.F.p6=v.F.r6*v.F.e0+v.F.r8*v.F.e6;v.F.p7=v.F.r6*v.F.e1+v.F.r7*v.F.e4+v.F.r8*v.F.e7;v.F.p8=v.F.r6*v.F.e2+v.F.r7*v.F.e5+v.F.r8*v.F.e8;" controller.animation.fox.move
/playanimation @e[tag=wiki:fmbe] animation.creeper.swelling _ 0 "v.F.co=math.cos(25);v.F.si=math.sin(25);v.swelling_scale2=v.extend_scale*(v.swelling_scale1=(v.F.s=math.sqrt(17/8*v.scale)));" wiki:fmbe.items.anim1
/playanimation @e[tag=wiki:fmbe] animation.ender_dragon.neck_head_movement _ 0 "v.F.X=(v.xpos-1)*v.F.p0+(v.ypos-1/128)*v.F.p3+v.zpos*v.F.p6+((v.xbasepos+11/29)*v.F.e0+(v.zbasepos+8/15)*v.F.e6*v.extend_scale)*v.scale;v.F.Y=(v.xpos-1)*v.F.p1+(v.ypos-1/128)*v.F.p4+v.zpos*v.F.p7+((v.xbasepos+11/29)*v.F.e1+(v.ybasepos+31/37)*v.F.e4+(v.zbasepos+8/15)*v.F.e7*v.extend_scale)*v.scale;v.head_position_y=16/v.F.s*(((v.xpos-1)*v.F.p2+(v.ypos-1/128)*v.F.p5+v.zpos*v.F.p8)/v.extend_scale+((v.xbasepos+11/29)*v.F.e2+(v.ybasepos+31/37)*v.F.e5+(v.zbasepos+8/15)*v.F.e8*v.extend_scale)*v.scale);v.head_position_x=16/v.F.s*(v.F.X*v.F.co-v.F.Y*v.F.si);v.head_position_z=16/v.F.s*(v.F.X*v.F.si+v.F.Y*v.F.co);v.head_rotation_x=v.F.e6*v.F.si+v.F.e7*v.F.co||v.F.e0*v.F.si*v.F.si+v.F.e1*v.F.si*v.F.co+v.F.e4*v.F.co*v.F.co?math.atan2(-v.F.e6*v.F.si-v.F.e7*v.F.co,v.F.e0*v.F.si*v.F.si+v.F.e1*v.F.si*v.F.co+v.F.e4*v.F.co*v.F.co):math.atan2(v.F.e2*v.F.si+v.F.e5*v.F.co,v.F.e8);v.head_rotation_y=math.asin(v.F.e4*v.F.si*v.F.co-v.F.e1*v.F.co*v.F.co-v.F.e0*v.F.co*v.F.si);v.head_rotation_z=v.F.e6*v.F.si+v.F.e7*v.F.co||v.F.e0*v.F.si*v.F.si+v.F.e1*v.F.si*v.F.co+v.F.e4*v.F.co*v.F.co?math.atan2(v.F.e5*v.F.si-v.F.e2*v.F.co,v.F.e0*v.F.co*v.F.co-v.F.e1*v.F.co*v.F.si+v.F.e4*v.F.si*v.F.si):0;" wiki:fmbe.items.anim2
/playanimation @e[tag=wiki:fmbe] animation.warden.move _ 0 "v.body_x_rot=v.F.p5||v.F.p3*v.F.si+v.F.p4*v.F.co?math.atan2(v.F.p5,-v.F.p3*v.F.si-v.F.p4*v.F.co):math.atan2(-v.F.p0*v.F.si-v.F.p1*v.F.co,-v.F.p2);v.body_z_rot=v.F.p5||v.F.p3*v.F.si+v.F.p4*v.F.co?math.atan2(v.F.p0*v.F.co-v.F.p1*v.F.si,v.F.p7*v.F.si-v.F.p6*v.F.co):0;" wiki:fmbe.items.anim3
/playanimation @e[tag=wiki:fmbe] animation.player.attack.rotations _ 0 "v.attack_body_rot_y=math.asin(v.F.p3*v.F.co-v.F.p4*v.F.si);" wiki:fmbe.items.anim4
```
![Chain of 5 Command Blocks](/assets/images/commands/command-block-chain/5.png)

</Spoiler>

### Advanced FMBE Simulator

You can preview and experiment with variables using the 3D simulator here (Note: It's in Japanese):<br>
🔗 **[Open Simulator (Desmos)](https://www.desmos.com/3d/mzzzuxssx7)**

### Advanced FMBE Planned Additions

- Allow rotation using matrix calculations
- Create a version compatible with Nintendo Switch (split version)
- Add a usage guide
- Add technical explanations
