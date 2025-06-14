---
title: MBE - Max's Block Entity
category: Techniques
mentions:
    - BedrockCommands
    - zheaEvyline
nav_order: 3
description: Max's Block Entity system using commands.
---

## Introduction

[Sourced by the Bedrock Commands Community (BCC) Discord](https://bedrockcommands.org/)

This method, developed by Reddit user [u/Maxed_Out10](https://www.reddit.com/user/Maxed_Out10/) allows you to create near-perfect entity replications of any Minecraft block using armor stands and some sequential `/playanimation` commands.

To preserve credits to the creator, the community termed this method as "Max's Block Entity" or MBE for short.

**Points to Note:**
1. This method uses 1 armor stand per block entity. Therefore, too many armor stands (like any entity) can contribute to server lag.
2. Players will still be able to pass through them, as well as interact with them (if not restricted).
3. While the block entity may render in one spot, it's actual hitbox will have a slight offset.

## Video Demonstration

<YouTubeEmbed id="kb8rz9ItE_M" />

## Setup

_To be typed in chat:_

1. `/summon armor_stand ~~~ 81 ~ default "Grumm"`
    - We will set the Y (horizontal) rotation to `81` to align with the normal Minecraft block grid.
    - It is necessary to name it 'Grumm' to avoid inverted block textures.

:::tip

-   Crouch & right-click (on mcpe: long press) the armor stand 6 times to place it in 'Entertain' pose.
-   Doing this negates the need to use the 1st command in the system below.
-   **Only use this if you wish to reduce one command from the system.**

:::

2. Lastly, place the desired block item in the armor stand's main-hand.

:::tip

-   `/replaceitem entity @e[name="Grumm"] slot.weapon.offhand 0 <itemID>`
    -   Instead of manually placing the desired block item in the armor stand's main-hand, use this command to place it in it's off-hand to prevent players from taking the item.

:::

## System

<CodeHeader>BP/functions/wiki/mbe/render.mcfunction</CodeHeader>

```yaml
## Align Arms
playanimation @e[type=armor_stand,name="Grumm"] animation.armor_stand.entertain_pose null 0 "0" wiki:align.arms

## Mini Block Size
playanimation @e[type=armor_stand,name="Grumm"] animation.player.move.arms.zombie null 0 "0" wiki:size.mini_block

## Full Block (optional)
### Size
playanimation @e[type=armor_stand,name="Grumm"] animation.ghast.scale null 0 "0" wiki:size.full_block
### Align
playanimation @e[type=armor_stand,name="Grumm"] animation.fireworks_rocket.move null 0 "0" wiki:align.full_block

## Freeze Armor Stand
execute as @e[type=armor_stand,name="Grumm"] at @s run tp ~~~

## Hide Armor Stand Body
effect @e[type=armor_stand,name="Grumm"] invisibility infinite 1 true
```

![Chain of 6 Command Blocks](/assets/images/commands/command-block-chain/6.png)

### Purpose of Each Command

1. Automatically sets the armor stand pose to 'Entertain' for arms alignment. Skip this command if you prefer to do it manually.
2. **Required command**. Increases size to present as mini-block.
3. _Optional command._ Increases size to present as full-block.
4. _Optional command._ Aligns the full-block size MBE properly.
    - Skip 3 & 4 if you do not need full-block size MBE.
5. Locks the armor stand in place to prevent fall in case block beneath is removed.
6. Hides the armor stand body.

Note: Providing a controller name allows us to stack animations without overwriting the previous one. Example:

-   `wiki:align.full_block` (where `wiki` is a namespace).

Using the same controller names above is not required. However, it can help avoid collisions with other playanimation commands.

## Rotations & Alignments

> Note: These rotation commands (when item placed in main-hand) are to be triggered once through a command block.

<Spoiler title="Full Block">

<CodeHeader></CodeHeader>

```yaml
# Face north
/tp @e[type=armor_stand,name="Grumm",c=1] ~-1.1245 ~0.2260 ~-0.097 81

# Face south
/tp @e[type=armor_stand,name="Grumm",c=1] ~1.1245 ~0.2260 ~0.097 260

# Face east
/tp @e[type=armor_stand,name="Grumm",c=1] ~0.097 ~0.2260 ~-1.1245 171

# Face west
/tp @e[type=armor_stand,name="Grumm",c=1] ~-0.097 ~0.2260 ~1.1245 350
```

</Spoiler>

<Spoiler title="Mini Block">

<CodeHeader></CodeHeader>

```yaml
# Face north
/tp @e[type=armor_stand,name="Grumm",c=1] ~-0.417~-0.5 ~-0.035 81

# Face south
/tp @e[type=armor_stand,name="Grumm",c=1] ~0.417 ~-0.5 ~0.035 260

# Face east
/tp @e[type=armor_stand,name="Grumm",c=1] ~0.035 ~-0.5 ~-0.417 171

# Face west
/tp @e[type=armor_stand,name="Grumm",c=1] ~-0.035 ~-0.5 ~0.417 350
```

</Spoiler>

<Spoiler title="Stairs">

<CodeHeader></CodeHeader>

```yaml
# Face north
/tp @e[type=armor_stand,name="Grumm",c=1] ~-0.097 ~0.2325 ~1.1245 350

# Face south
/tp @e[type=armor_stand,name="Grumm",c=1] ~0.097 ~0.2325 ~-1.1245 171

# Face east
/tp @e[type=armor_stand,name="Grumm",c=1] ~-1.1245 ~0.2325 ~-0.097 81

# Face west
/tp @e[type=armor_stand,name="Grumm",c=1] ~1.1245 ~0.2325 ~0.097 260
```

</Spoiler>

<Spoiler title="Bottom Slab">

<CodeHeader></CodeHeader>

```yaml
# Face north
/tp @e[type=armor_stand,name="Grumm",c=1] ~-0.097 ~0.2325 ~1.1245 350

# Face south
/tp @e[type=armor_stand,name="Grumm",c=1] ~0.097 ~0.2325 ~-1.1245 171

# Face east
/tp @e[type=armor_stand,name="Grumm",c=1] ~-1.1245 ~0.2325 ~-0.097 81

# Face west
/tp @e[type=armor_stand,name="Grumm",c=1] ~1.1245 ~0.2325 ~0.097 260
```

</Spoiler>

<Spoiler title="Top Slab">

<CodeHeader></CodeHeader>

```yaml
# Face north
/tp @e[type=armor_stand,name="Grumm",c=1] ~-1.1245 ~0.484 ~-0.097 81

# Face south
/tp @e[type=armor_stand,name="Grumm",c=1] ~1.1245 ~0.484 ~0.097 260

# Face east
/tp @e[type=armor_stand,name="Grumm",c=1] ~0.097 ~0.484 ~-1.1245 171

# Face west
/tp @e[type=armor_stand,name="Grumm",c=1] ~-0.097 ~0.484 ~1.1245 350
```

</Spoiler>

## Saving & Loading MBE

1. To save, run:

    - `/execute at @e[type=armor_stand,name="Grumm",c=1] run structure save wiki:mbe ~~~ ~~~ true disk false`

2. To load, run:
    - `/structure load wiki:mbe <to: x y z>`

> Note: Structure name `wiki:mbe` can be changed to your preference.
