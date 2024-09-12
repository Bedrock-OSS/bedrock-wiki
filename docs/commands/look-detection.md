---
title: Look Detection
category: Techniques
mention:
  - BedrockCommands
  - AjaxGb
  - Plagiatus
  - zheaEvyline
description: This command-technique allows you to detect when a target looks at a player/entity/coordinate and subsequently run your desired commands.
---

## Introduction

[Sourced By Bedrock Commands Community Discord](https://discord.gg/SYstTYx5G5)

**Credits:** *@AjaxGb*

This command-technique allows you to detect when a target looks at a player/entity/coordinate and subsequently run your desired commands.

## Command

<CodeHeader>BP/functions/look_detector.mcfunction</CodeHeader>

```yaml
execute as <target> at @s anchored eyes facing <entity | coordinate> positioned ^^^1 positioned ~~-1.62~ rotated as @s positioned ^^^-1 if entity @s [r=0.2] run <command>

```
![A Repeating Command Block](/assets/images/commands/commandBlockChain/1.png)

**Visualisation:**

![Alex Looking At A Pig's Head](/assets/images/commands/lookDetectionVisualRep.gif)

> *Note: This is a rough visual representation, not precise measurements.*

**Command Breakdown:**

- `as <target>`
  - sets the execution target. Example:
      - `as @p` (closest player)
      - `as @e [type=zombie]` (all zombies)
- `at @s`
  - sets the execution position to the target's feet.
- `anchored eyes`
  - brings the execution position up to the target's eye level.
- `facing <entity | coordinate>`
  - sets the execution rotation facing an entity or coordinate. Example:
      - `facing 0 0 0` facing coordinate: 0,0,0.
      - `facing entity @e [type=pig, c=1] eyes` (facing eyes of nearest pig)
      - `facing entity @e [type=cow, r=30] feet` (facing eyes of cows in a 30 block radius)
      - `facing entity @e [type=zombie] feet` (facing feet of zombies)
- `positioned ^^^1`
  - from previous point, pushes the execution position 1 block forward in the direction of the entity/coordinate.
- `positioned ~~-1.62~`
  - lowers the execution position back to that of the player's feet on the y axis. Which is 1.62 blocks below eye level.
  - Note: Due to the [MCPE-165051](https://bugs.mojang.com/browse/MCPE-165051) bug, you cannot use `anchored eyes` in place of this.
- `rotated as @s`
  - Reverts the execution rotation to that of the target.
- `positioned ^^^-1`
  - from previous point, pushes the execution position 1 block backwards from the direction the target is facing.
- `if entity @s [r=0.2]`
  - checks if the target is within a 0.2 block radius from the execution position. ie., check if after this back and forth we've arrived roughly back at the target's feet position.
  - To increase or decrease the tolerance for what is considered "close enough", change the `0.2` distance argument.
      - it needs to be between `0.2` and `2`, as `2` basically means you can look in the opposite direction and it's still "close enough". So, realistically, you want to most likely stay well below `1`.
  - To calculate the exact viewing cone angle, see below.

**Examples:**

1. Run a `/say` command when looking at the eyes of cows tagged 'target':

<CodeHeader>BP/functions/look_detector.mcfunction</CodeHeader>

```yaml
execute as @a at @s anchored eyes facing entity @e [type=cow, tag=target] eyes positioned ~~-1.62~ positioned ^^^1 rotated as @s positioned ^^^-1 if entity @s [r=0.2] run say hello cow!
```
![A Repeating Command Block](/assets/images/commands/commandBlockChain/1.png)

2. Run a `/say` command when looking at the position 10,20,30:

<CodeHeader>BP/functions/look_detector.mcfunction</CodeHeader>

```yaml
execute as @a at @s anchored eyes facing 10 20 30 positioned ~~-1.62~ positioned ^^^1 rotated as @s positioned ^^^-1 if entity @s [r=0.2] run say hello block!
```
![A Repeating Command Block](/assets/images/commands/commandBlockChain/1.png)

**Alternative Structure:**

<CodeHeader>BP/functions/look_detector.mcfunction</CodeHeader>

```yaml
execute as <target> at <coordinate | entity> facing entity @s eyes positioned as @s positioned ^^^1 rotated as @s positioned ^^^1 if entity @s[r=0.02] run <command>
```
![A Repeating Command Block](/assets/images/commands/commandBlockChain/1.png)

If you don't need to detect the target looking at the *eyes* of an entity but their feet or a coordinate, you may use this structure which negates the need for the `anchored eyes` condition as the execution position begins from the entity/coordinate rather than the target.

## Calculate Viewing Angle

To approximate the distance/radius you want to use based on your viewing angle, you can use the following formula, where `α` is the angle that you want this method to trigger inside of, left and right of the target:
```
r = 2 * sin ( α / 2 )
```

or, the inverse to calculate what viewing angle a certain radius / distance (`r`) value will give you:
```
α = sin^(-1) (r / 2) * 2
```
> Note: Depending on your calculator, you'll need to convert from radians to degrees.

With the above calculation, the example value of `r=0.2` leaves us with roughly a 12° angle by which we can miss the exact target in either direction and still have it considered "close enough."

