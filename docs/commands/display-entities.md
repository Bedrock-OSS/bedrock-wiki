---
title: FMBE - A New Way to Create Display Entities
category: Techniques
mentions:
    - BedrockCommands
    - zheaEvyline
nav_order: 4
description: A guide to creating block display entities on Bedrock purely using commands.
---

## Introduction

[Sourced by the Bedrock Commands Community (BCC) Discord](https://discord.gg/SYstTYx5G5)

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
playanimation @e[type=fox,tag=wiki:fmbe] animation.player.sleeping none 0 "" controller.animation.fox.move
playanimation @e[type=fox,tag=wiki:fmbe] animation.creeper.swelling none 0 "v.xbasepos=v.xbasepos??0;v.ybasepos=v.ybasepos??0;v.zbasepos=v.zbasepos??0;v.xpos=v.xpos??0;v.ypos=v.ypos??0;v.zpos=v.zpos??0;v.xrot=v.xrot??0;v.yrot=v.yrot??0;v.zrot=v.zrot??0;v.scale=v.scale??1;v.xzscale=v.xzscale??1;v.yscale=v.yscale??1;v.swelling_scale1=2.1385*math.sqrt(v.xzscale)*math.sqrt(v.scale);v.swelling_scale2=2.1385*math.sqrt(v.yscale)*math.sqrt(v.scale);" wiki:scale
playanimation @e[type=fox,tag=wiki:fmbe] animation.ender_dragon.neck_head_movement none 0 "v.head_rotation_x=0;v.head_rotation_y=0;v.head_rotation_z=0;v.head_position_x=(v.xbasepos*3741/8000)*math.sqrt(v.xzscale)*math.sqrt(v.scale);v.head_position_y=(10.6925+v.ybasepos*3741/8000)*math.sqrt(v.yscale)*math.sqrt(v.scale);v.head_position_z=(17.108-v.zbasepos*3741/8000)*math.sqrt(v.xzscale)*math.sqrt(v.scale);" wiki:shift_pos

## Define FMBE Rotation
### X Axis
playanimation @e[type=fox,tag=wiki:fmbe] animation.warden.move none 0 "v.body_x_rot=90+v.xrot;v.body_z_rot=90+v.yrot;" wiki:xrot
### Z Axis
playanimation @e[type=fox,tag=wiki:fmbe] animation.player.attack.rotations none 0 "v.attack_body_rot_y=-v.zrot;" wiki:zrot

## Define FMBE Position
### X Axis
playanimation @e[type=fox,tag=wiki:fmbe] animation.parrot.moving none 0 "v.wing_flap=(16-v.xpos)/0.3;" wiki:xpos
### Y Axis
playanimation @e[type=fox,tag=wiki:fmbe] animation.minecart.move.v1.0 none 0 "v.rail_offset.x=0;v.rail_offset.y=1.6485+v.ypos/16;v.rail_offset.z=0;" wiki:ypos
### Z Axis
playanimation @e[type=fox,tag=wiki:fmbe] animation.parrot.dance none 0 "v.dance.x=-v.zpos;v.dance.y=0;" wiki:zpos
```
![commandBlockChain8](/assets/images/commands/commandBlockChain/8.png)

Note: Providing a controller name allows us to stack animations without overwriting the previous one. Example:
- `wiki:scale` (where `wiki` is a namespace).

Please ensure the controller name in the first command is `controller.animation.fox.move`.

For rest of the commands, using the same controller names above isn't required. However, it can help avoid collisions with other playanimation commands.

## How to Use FMBE

Once you have the system above active, follow the steps and instructions given below:

### Setup
*To be typed in chat:*

1. Summon a fox and use the `/replaceitem` command to give it the item model you want in its main hand.
    - `/summon fox`
    - `/replaceitem entity @e[type=fox,c=1] slot.weapon.mainhand 0 <itemID>`
2. Then, assign it the tag `wiki:fmbe`. This should make the fox appear like an actual block.
    - `/tag @e[type=fox] add wiki:fmbe`

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
- `/playanimation @e[type=fox,tag=wiki:fmbe] animation.player.attack.positions none 0 "" wiki:setvariable`

Write the molang code for the variable you want to edit inside the double quotes and assign the value.

Example, to set `xrot` to 35, `ypos` to 16, and `scale` to 1.5:
- `/playanimation @e[type=fox,tag=wiki:fmbe] animation.player.attack.positions none 0 "v.xrot=35;v.ypos=16;v.scale=1.5;" wiki:setvariable`

Molang also allows for more complex animations using various queries and operators. To learn more about Molang, refer to the **[Molang Documentation](https://bedrock.dev/docs/stable/Molang)**.

### Saving & Loading FMBE

1. To save, run:
    - `/execute at @e[type=fox,tag=FMBE,c=1] run structure save wiki:fmbe ~~~ ~~~ true disk false`

2. To load, run:
    - `/structure load wiki:fmbe <to: x y z>`

Note: The structure name `wiki` can be changed to your preference.

### Stoping FMBE Sounds

To remove fox sounds from the FMBE, you may use these commands:

<CodeHeader>BP/functions/fmbe/stopsound.mcfunction</CodeHeader>

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
![commandBlockChain10](/assets/images/commands/commandBlockChain/10.png)

## Simplified FMBE

This is a compressed three-command version of the system above. If you do not wish to alter the FMBE `xzscale` and `yscale`, this could be a slight optimisation.

<CodeHeader>BP/functions/wiki/fmbe/render_compressed.mcfunction</CodeHeader>

```yaml
## Reposition and Define FMBE Scale
playanimation @e[type=fox,tag=wiki:fmbe] animation.player.sleeping none 0 "" controller.animation.fox.move
playanimation @e[type=fox,tag=wiki:fmbe] animation.creeper.swelling none 0 "v.scale=1;v.adscale=math.sqrt(v.scale);v.adscaled=2.1385*v.adscale;v.xbasepos=0;v.ybasepos=0;v.zbasepos=0;v.xpos=0;v.ypos=0;v.zpos=0;v.xrot=q.life_time*0;v.yrot=q.life_time*0;v.zrot=q.life_time*20;v.swelling_scale1=v.adscaled;v.swelling_scale2=v.adscaled;" wiki:scale

## Define FMBE Position & Rotation
playanimation @e[type=fox,tag=wiki:fmbe] animation.ender_dragon.neck_head_movement none 0 "v.adjust_xz=8*v.adscaled+v.zbasepos/v.adscaled;v.adjust_y=(-5-v.ybasepos/v.adscaled/v.adscaled)*v.adscaled;v.x=v.xbasepos/v.adscaled;v.y=v.adjust_y;v.z=v.adjust_xz;v.ty=v.y*math.cos(v.xrot)-v.z*math.sin(v.xrot);v.tz=v.y*math.sin(v.xrot)+v.z*math.cos(v.xrot);v.y=v.ty;v.z=v.tz;v.tx=-v.x*math.cos(v.zrot)+v.y*math.sin(v.zrot);v.ty=v.x*math.sin(v.zrot)+v.y*math.cos(v.zrot);v.x=v.tx;v.y=v.ty;v.tx=v.x*math.cos(v.yrot)+v.z*math.sin(v.yrot);v.tz=-v.x*math.sin(v.yrot)+v.z*math.cos(v.yrot);v.x=v.tx;v.z=v.tz;v.head_position_x=v.x+v.xpos/v.adscaled;v.head_position_y=7.48/v.adscale+v.z+v.zpos/v.adscaled;v.head_position_z=v.y-v.ypos/v.adscaled;v.head_rotation_x=90+v.xrot;v.head_rotation_y=v.zrot;v.head_rotation_z=v.yrot;" wiki:posrot
```
![commandBlockChain3](/assets/images/commands/commandBlockChain/3.png)

## Video Tutorial

<YouTubeEmbed
    id="DdYq_nOFeKM"
/>
