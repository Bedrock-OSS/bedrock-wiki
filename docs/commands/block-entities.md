---
title: MBE - Max's Block Entity
category: Techniques
mention:
    - BedrockCommands
    - zheaEvyline
---

## Introduction

[Sourced By Bedrock Commands Community Discord](https://discord.gg/SYstTYx5G5)

This method, developed by Reddit user [u/Maxed_Out10](https://www.reddit.com/user/Maxed_Out10/) allows you to create near-perfect entity replications of any Minecraft block using armour stands and some sequential `/playanimation` commands.

To preserve credits to the creator, the community termed this method as "Max's Block Entity" or MBE for short.

### Points to Note

1. This method uses 1 armour stand per block entity. Therefore, too many armour stands (like any entity) can contribute to server lag.
2. Players will still be able to pass through them as well as interact with them if not restricted.
3. While the block entity may appear in one spot, it's actual hitbox will have a slight offset.

## Video Demonstration

<YouTubeEmbed
    id="kb8rz9ItE_M"
/>

## Setup

*To be typed in chat:*
1. `/summon armor_stand Grumm`
    - It is necessary to name it 'Grumm' to avoid inverted block textures.
2. `/execute as @e [type= armor_stand, name=Grumm, c=1] at @s run tp @s ~~~ 260`
    - This will align the MBE to the normal Minecraft block grid.

:::tip
- Crouch & right-click (on mcpe: long press) the armor stand 6 times to place it in Pose 7
    - Doing this negates the need to use the 2nd command in the system.
    - **Only use this if you wish to reduce one command from the system.**
:::

Lastly, place the desired block item in the armor stand's mainhand.

## System

> Note: adding a delay of 100-200 ticks is recommended.

<CodeHeader>mcfunction</CodeHeader>

```yaml
/effect @e [type= armor_stand, name=Grumm] invisibility 999999 1 true
/playanimation @e [type= armor_stand, name=Grumm] animation.armor_stand.entertain_pose null 0 "0" align.arms
/playanimation @e [type= armor_stand, name=Grumm] animation.player.move.arms.zombie null 0 "0" size.mini_block
/playanimation @e [type= armor_stand, name=Grumm] animation.ghast.scale null 0 "0" size.full_block
/playanimation @e [type= armor_stand, name=Grumm] animation.fireworks_rocket.move null 0 "0" align.full_block
/execute as @e [type= armor_stand, name=Grumm] at @s run tp ~~~
```
![commandBlockChain6](/assets/images/commands/commandBlockChain/6.png)

### Purpose Of Each Command
1. Hides the armour stand body.
2. Automatically sets the armour stand pose to 7 for arms alignment. Skip this command you prefer to do it manually.
3. __Required command__. Increases size to present as mini-block.
4. *Optional command.* Increases size to present as full-block.
5. *Optional command.* Aligns the full-block size MBE properly.
    - Skip 4 & 5 if you do not need full-block size MBE.
6. Locks in place to prevent fall in case block underneath is removed.

:::tip
- `/replaceitem entity @e [name=Grumm] slot.weapon.offhand 0 <itemID>`
  - Instead of manually placing the desired block item in the armor stand's main-hand, use this command to place it in it's offhand to prevent players from taking the item.
:::

## Rotations & Alignments

> Note: These rotation commands (when item placed in main hand) are to be executed only once through a command block.

<Spoiler title="Full MBE">

```yaml
# Face North
/tp @e [type=armor_stand, name=Grumm, c=1] ~-1.1245 ~0.2260 ~-0.097 81

# Face South
/tp @e [type=armor_stand, name=Grumm, c=1] ~1.1245 ~0.2260 ~0.097 260

# Face East
/tp @e [type=armor_stand, name=Grumm, c=1] ~0.097 ~0.2260 ~-1.1245 171

# Face West
/tp @e [type=armor_stand, name=Grumm, c=1] ~-0.097 ~0.2260 ~1.1245 350
```

</Spoiler>


<Spoiler title="Mini MBE">

```yaml
# Face North
/tp @e [type=armor_stand, name=Grumm, c=1] ~-0.417~-0.5 ~-0.035 81

# Face South
/tp @e [type=armor_stand, name=Grumm, c=1] ~0.417 ~-0.5 ~0.035 260

# Face East
/tp @e [type=armor_stand, name=Grumm, c=1] ~0.035 ~-0.5 ~-0.417 171

# Face West
/tp @e [type=armor_stand, name=Grumm, c=1] ~-0.035 ~-0.5 ~0.417 350
```

</Spoiler>

<Spoiler title="Stair MBE">

```yaml
# Face North
/tp @e [type=armor_stand, name=Grumm, c=1] ~-0.097 ~0.2325 ~1.1245 350

# Face South
/tp @e [type=armor_stand, name=Grumm, c=1] ~0.097 ~0.2325 ~-1.1245 171

# Face East
/tp @e [type=armor_stand, name=Grumm, c=1] ~-1.1245 ~0.2325 ~-0.097 81

# Face West
/tp @e [type=armor_stand, name=Grumm, c=1] ~1.1245 ~0.2325 ~0.097 260
```

</Spoiler>

<Spoiler title="Bottom Slab MBE">

```yaml
# Face North
/tp @e [type=armor_stand, name=Grumm, c=1] ~-0.097 ~0.2325 ~1.1245 350

# Face South
/tp @e [type=armor_stand, name=Grumm, c=1] ~0.097 ~0.2325 ~-1.1245 171

# Face East
/tp @e [type=armor_stand, name=Grumm, c=1] ~-1.1245 ~0.2325 ~-0.097 81

# Face West
/tp @e [type=armor_stand, name=Grumm, c=1] ~1.1245 ~0.2325 ~0.097 260
```

</Spoiler>

<Spoiler title="Top Slab MBE">

```yaml
# Face North
/tp @e [type=armor_stand, name=Grumm, c=1] ~-1.1245 ~0.484 ~-0.097 81

# Face South
/tp @e [type=armor_stand, name=Grumm, c=1] ~1.1245 ~0.484 ~0.097 260

# Face East
/tp @e [type=armor_stand, name=Grumm, c=1] ~0.097 ~0.484 ~-1.1245 171

# Face West
/tp @e [type=armor_stand, name=Grumm, c=1] ~-0.097 ~0.484 ~1.1245 350
```

</Spoiler>

## Saving & Loading MBE

1. To save run:
    - `/execute as @e [type=armor_stand, name=Grumm, c=1] at @s run structure save MBE ~~~ ~~~`

2. To load run:
    - `/structure load MBE <coordinates>`

> Note: structure name `MBE` can be changed to your preference.
