---
title: Movement Detections
category: Techniques
mentions:
    - BedrockCommands
    - zheaEvyline
description: These command-techniques allow you to detect certain player/entity 'states' and subsequently execute your desired commands.
---

## Introduction

[Sourced by the Bedrock Commands Community (BCC) Discord](https://bedrockcommands.org/)

[Image Credits: Unofficial Minecraft Wiki - ](https://minecraft.wiki/)**[CC BY-NC-SA 3.0](https://creativecommons.org/licenses/by-nc-sa/3.0/)**

These command-techniques allow you to detect certain player/entity 'states' and subsequently execute your desired commands.

> Note: For a more performant and high-accuracy approach, it is advisable to use [Animation Controllers](/animation-controllers/animation-controllers-intro)

## is_moving

This technique allows you to detect when your target is/isn't moving, accounting for even subtle movements.

![](/assets/images/commands/movement-detections/moving.gif)

:::warning Known Issues:

1. Does not account for movement while the spyglass is zoomed in or when Slowness Level 6 or higher is in effect.
2. Jumping causes the detection to trigger twice.
   :::

**Commands:**

-   Make sure you add the `wiki:q.is_moving` scoreboard objective:
    -   `/scoreboard objectives add wiki:q.is_moving dummy`

<CodeHeader>BP/functions/wiki/detect_state/player/is_moving.mcfunction</CodeHeader>

```yaml
## Movement Detection
### Mark as not moving
execute as @a at @s positioned ~~10000~ if entity @e[type=leash_knot,r=0.1252] run scoreboard players set @s wiki:q.is_moving 0
### Mark as moving
execute as @a at @s positioned ~~10000~ unless entity @e[type=leash_knot, r=0.1252] run scoreboard players add @s wiki:q.is_moving 1

## Update Point
### Delete previous point
execute as @e[type=leash_knot] at @s unless entity @s[y=-80, dy=9974] run kill @s
### Mark current point
execute at @a positioned ~~10000~ run summon leash_knot ~~~

## Your Commands Here (Examples)
execute as @a[scores=wiki:q.is_moving=0}] run say I'm not moving
execute as @a[scores=wiki:q.is_moving=1}] run say I started moving
execute as @a[scores=wiki:q.is_moving=1..}] run say I'm still moving
```

![Chain of Seven Command Blocks](/assets/images/commands/command-block-chain/7.png)

It is a requirement to follow this same sequence and properly apply the `scores` selector argument as shown for your desired commands.

**States:**

-   **`wiki:q.is_moving=0`** target is _not_ moving.
-   **`wiki:q.is_moving=1`** target started moving. (used for 'trigger' actions)
-   **`wiki:q.is_moving=1..`** target is still moving. (used for repeating actions)

**Purpose of Each Command:**

-   **Command 1:** If there is a Leash Knot above them, it means they have not moved from their "point" from the previous game-tick. Marking them as _not_ moving (0)
    -   Leash Knot is a Vanilla entity with anti-gravity behaviour which serves as a static entity for this system.
-   **Command 2:** If there _isn't_ a Leash Knot above them, it means they have displaced from their "point" from the previous game-tick. Marking them as _moving_ (1) by adding a score.
    -   The score will keep incrementing if they keep moving without pause. Allowing us to use single-execution commands each time they start moving.
-   **Command 3:** We need to delete all previous "points" (kill old Leash Knots) to minimise entity lag. We will also avoid affecting any Leash Knots below the ~10000 height not involved in this system.
    -   we are using the volume filter instead of a simple name filter to do that, because Leash Knots cannot be named.
-   **Command 4:** We will summon a new Leash Knot ~10000 blocks above the player to mark the point they are currently at, which we will test-for in command 1 & 2, in the next game tick. (when this command block chain loops/repeats)
-   **Command 5, 6, 7:** These are example commands (for each state) which can be modified / expanded.

## Differentiating Walking And Sprinting

If you desperately need to detect walking and sprinting separately **solely using commands**, you may use this technique below.

:::warning Known Issue:
Walk/Sprint Detection may not work as intended with effects & enchantments.
:::

<CodeHeader>BP/functions/wiki/detect_state/player/is_moving.mcfunction</CodeHeader>

```yaml
## Movement Detection
### Mark as not moving
execute as @a at @s positioned ~~10000~ if entity @e[type=leash_knot,r=0.1252] run scoreboard players set @s wiki:q.is_moving 0
### Mark as moving
execute as @a at @s positioned ~~10000~ unless entity @e[type=leash_knot,r=0.1252] run scoreboard players add @s wiki:q.is_moving 1

## Walk Detection
### Mark as not walking
scoreboard players set @a wiki:q.is_walking 0
### Mark as walking
execute as @a at @s positioned ~~10000~ if entity @e[type=leash_knot,rm=0.21585,r=0.2805] run scoreboard players set @s wiki:q.is_walking 1

## Sprint Detection
### Mark as not sprinting
scoreboard players set @a wiki:q.is_sprinting 0
### Mark as sprinting
execute as @a at @s positioned ~~10000~ if entity @e[type=leash_knot, rm=0.2806,r=0.9] run scoreboard players set @s wiki:q.is_sprinting 1

## Update Point
### Delete previous point
execute as @e[type=leash_knot] at @s unless entity @s[y=-80,dy=9974] run kill @s
### Mark current point
execute at @a positioned ~~10000~ run summon leash_knot ~~~

## Your Commands Here (Examples)
execute as @a[scores={wiki:q.is_walking=0}] run say I'm not walking
execute as @a[scores={wiki:q.is_walking=1}] run say I'm walking
```

![Chain of Ten Command Blocks](/assets/images/commands/command-block-chain/10.png)

All the commands function the same way as explained previously. The only difference being the values used in the distance arguments `r` & `rm` for the walk/sprint detection commands.

Calculation for the values are given below:
| Movement Type | Average Speed in m/s<br>(blocks per second) | Average Speed<br>(blocks per game tick) |
| :---: | :---: | :---: |
| Walking | 4.317 m/s | 4.317 / 20 = 0.21585 |
| Sprinting | 5.612 m/s | 5.612 / 20 = 0.28060 |
| Sprint-Jumping | 7.127 m/s | 7.127 / 20 = 0.35635 |

> Note: We will not be able to properly use single-execution commands from the walk/sprint detection due to their varying speed. Hence, the commands for the two will be a bit simpler. Also note that jumping while walking has a speed that fluctuates between that of walk and sprint.

-   **Walk Detection Commands:**
    1. The player is marked as _not_ walking (0) by default.
    2. The player is marked as walking (1) if their displacement is between `0.21585` and `0.2805` blocks.
        - `0.2805` is just below sprinting speed.
-   **Sprint Detection Commands:**
    1. The player is marked as _not_ sprinting (0) by default.
    2. The player is marked as sprinting (1) if their displacement is between `0.2806` and `0.9` blocks.
        - Change the value from `0.9` to `0.35635` if you wish to separate sprint-jumping from sprinting despite its fluctuating speed.

## is_sleeping

This technique allows you to detect when the player is/isn't sleeping.

![](/assets/images/commands/movement-detections/sleeping.jpg)

Note: When sleeping, the player's hitbox is reduced to 0.2 blocks.

**Commands:**

-   Make sure you add the `wiki:q.is_sleeping` scoreboard objective:
    -   `/scoreboard objectives add wiki:wiki:q.is_sleeping dummy`

<CodeHeader>BP/functions/wiki/detect_state/player/is_sleeping.mcfunction</CodeHeader>

```yaml
## Sleep Detection
### Mark as not sleeping
execute as @a at @s if entity @s[y=~0.3, dy=0] scoreboard players set @s wiki:q.is_sleeping 0
### Mark as sleeping
execute as @a at @s unless entity @s[y=~0.3, dy=0] run scoreboard players add @s wiki:q.is_sleeping 1

## Your Commands Here (Examples)
execute as @a[scores={wiki:q.is_sleeping=0}] run say I'm not sleeping
execute as @a[scores={wiki:q.is_sleeping=1}] run say I started sleeping
execute as @a[scores={wiki:q.is_sleeping=1..}] run say I'm still sleeping
```

![Chain of Five Command Blocks](/assets/images/commands/command-block-chain/5.png)

It is a requirement to follow this same sequence and properly apply the `scores` selector argument as shown for your desired commands.

**States:**

-   **`wiki:q.is_sleeping=0`** player is _not_ sleeping.
-   **`wiki:q.is_sleeping=1`** player started sleeping. (used for 'trigger' actions)
-   **`wiki:q.is_sleeping=1..`** player is still sleeping. (used for repeating actions)

**Purpose of Each Command:**

-   **Command 1:** If the player's hitbox is higher than 0.2 blocks, we mark them as _not_ sleeping (0)
-   **Command 2:** If the player's hitbox is _not_ higher than 0.2 blocks, we mark them as sleeping (1) by adding a score.
    -   The score will keep incrementing if they don't stop sleeping. Allowing us to use single-execution commands each time they start sleeping.
-   **Command 3, 4, 5:** These are example commands (for each state) which can be modified / expanded.

## is_sneaking

This technique allows you to detect when the player is/isn't sneaking.

![](/assets/images/commands/movement-detections/sneaking.png)

Thanks to the introduction of Short Sneaking parity in 1.20.10 which reduces the player hitbox to 1.5 blocks when sneaking, making a proper sneak-detection using just commands is now possible which previously required add-on assistance.

**Commands:**

-   Make sure you add the `wiki:q.is_sneaking` scoreboard objective:
    -   `/scoreboard objectives add wiki:wiki:q.is_sneaking dummy`

<CodeHeader>BP/functions/wiki/detect_state/player/is_sneaking.mcfunction</CodeHeader>

```yaml
## Sneak Detection
### Mark as not sneaking
execute as @a at @s if entity @s[y=~1.5, dy=0] run scoreboard players set @s wiki:q.is_sneaking 0
### Mark as sneaking
execute as @a at @s unless entity @s[y=~1.5, dy=0] if entity @s[y=~0.7, dy=0] run scoreboard players add @s wiki:q.is_sneaking 1

## Your Commands Here (Examples)
execute as @a[scores={wiki:q.is_sneaking=0}] run say I'm not sneaking
execute as @a[scores={wiki:q.is_sneaking=1}] run say I started sneaking
execute as @a[scores={wiki:q.is_sneaking=1..}] run say I'm still sneaking
```

![Chain of 5 Command Blocks](/assets/images/commands/command-block-chain/5.png)

It is a requirement to follow this same sequence and properly apply the `scores` selector argument as shown for your desired commands.

**States:**

-   **`wiki:q.is_sneaking=0`** player is _not_ sneaking.
-   **`wiki:q.is_sneaking=1`** player started sneaking. (used for 'trigger' actions)
-   **`wiki:q.is_sneaking=1..`** player is still sneaking. (used for repeating actions)

**Purpose of Each Command:**

-   **Command 1:** If the player's hitbox is higher than 1.4 blocks, we mark them as _not_ sneaking (0)
-   **Command 2:** If the player's hitbox is _not_ higher than 1.4 blocks, we mark them as sneaking (1) by adding a score.
    -   The score will keep incrementing if they don't stop sneaking. Allowing us to use single-execution commands each time they start sneaking.
    -   To prevent false-triggers when sleeping or crawling, we will also require their hitbox to be higher than 0.6 blocks.
-   **Command 3, 4, 5:** These are example commands (for each state) which can be modified / expanded.

## is_crawling

This technique allows you to detect when the player is/isn't crawling.

![](/assets/images/commands/movement-detections/crawling.png)

Note: When crawling, the player's hitbox is reduced to 0.6 blocks.

:::warning Known Issue:
Swimming in water or gliding with Elytra will be detected as crawling.
:::

**Commands:**

-   Make sure you add the `wiki:q.is_crawling` scoreboard objective:
    -   `/scoreboard objectives add wiki:wiki:q.is_crawling dummy`

<CodeHeader>BP/functions/wiki/detect_state/player/is_crawling.mcfunction</CodeHeader>

```yaml
## Crawl Detection
### Mark as not crawling
execute as @a at @s if entity @s[y=~0.7, dy=0] run scoreboard players set @s wiki:q.is_crawling 0
### Mark as crawling
execute as @a at @s unless entity @s[y=~0.7, dy=0] if entity @s[y=~0.3, dy=0] run scoreboard players add @s wiki:q.is_crawling 1

## Your Commands Here (Examples)
execute as @a[scores={wiki:q.is_crawling=0}] run say I'm not crawling
execute as @a[scores={wiki:q.is_crawling=1}] run say I started crawling
execute as @a[scores={wiki:q.is_crawling=1..}] run say I'm still crawling
```

![Chain of Five Command Blocks](/assets/images/commands/command-block-chain/5.png)

It is a requirement to follow this same sequence and properly apply the `scores` selector argument as shown for your desired commands.

**States:**

-   **`wiki:q.is_crawling=0`** player is _not_ crawling.
-   **`wiki:q.is_crawling=1`** player started crawling. (used for 'trigger' actions)
-   **`wiki:q.is_crawling=1..`** player is still crawling. (used for repeating actions)

**Purpose of Each Command:**

-   **Command 1:** If the player's hitbox is higher than 0.6 blocks, we mark them as _not_ crawling (0)
-   **Command 2:** If the player's hitbox is _not_ higher than 0.6 blocks, we mark them as crawling (1) by adding a score.
    -   The score will keep incrementing if they don't stop crawling. Allowing us to use single-execution commands each time they start crawling.
    -   To prevent false-triggers when sleeping, we will require their hitbox to be higher than 0.2 blocks.
-   **Command 3, 4, 5:** These are example commands (for each state) which can be modified / expanded.

## Differentiating Crawling, Gliding And Swimming

If you desperately need to detect all three states separately **solely using commands**, you may use this technique below.

:::warning Known Issues:

1. Gliding while touching the ground/ceiling or crashing straight into a wall will be detected as crawling.
2. Crawling from absolute corner of a block while wearing an Elytra, with no adjacent blocks above or below, will be detected as gliding.
    - ![issue2](/assets/images/commands/movement-detections/issue2.png)
3. Swimming in a waterlogged block under another waterlogged block will be detected as crawling.
    - ![issue3](/assets/images/commands/movement-detections/issue3.png)

:::

<CodeHeader>BP/functions/wiki/detect_state/player/is_crawling.mcfunction</CodeHeader>

```yaml
## Set Player States
### Not gliding
execute as @a at @s if entity @s[y=~0.7, dy=0] run scoreboard players set @s wiki:q.is_gliding 0
### Not crawling
execute as @a at @s if entity @s[y=~0.7, dy=0] run scoreboard players set @s wiki:q.is_crawling 0
### Not swimming
execute as @a at @s if entity @s[y=~0.7, dy=0] run scoreboard players set @s wiki:q.is_swimming 0

## Detect Player States
### Gliding
execute as @a[hasitem={item=elytra,location=slot.armor.chest}] at @s unless entity @s[y=~0.7,dy=0] if entity @s[y=~0.3,dy=0] if block ~~1.01~ air if block ~~-0.01~ air rotated ~ 0 if block ^^1.01^-1 air if block ^^-0.01^-1 air if block ^^1.01^1 air if block ^^-0.01^1 air run scoreboard players add @s wiki:q.is_gliding 1
### Crawling
execute as @a[scores={wiki:q.is_gliding=0}] at @s unless entity @s[y=~0.7,dy=0] if entity @s[y=~0.3,dy=0] unless block ~~~ water unless block ~~1.01~ water run scoreboard players add @s wiki:q.is_crawling 1
### Swimming
execute as @a[scores={wiki:q.is_gliding=0,wiki:q.is_crawling=0}] at @s unless entity @s[y=~0.7, dy=0] if entity @s[y=~0.3,dy=0] run scoreboard players add @s wiki:q.is_swimming 1

## Your Commands Here (Examples)
execute as @a[scores={wiki:q.is_swimming=0}] run say I'm not swimming
execute as @a[scores={wiki:q.is_crawling=1}] run say I started crawling
execute as @a[scores={wiki:q.is_gliding=1..}] run say I'm still gliding
```

![Chain of Nine Command Blocks](/assets/images/commands/command-block-chain/9.png)

**Purpose of Each Command:**

-   **Command 1, 2, 3:** If the player's hitbox is higher than 0.6 blocks, we mark them as _not_ gliding/crawling/swimming (0)
-   **Command 4:** If the player's hitbox is _not_ higher than 0.6 blocks, has equiped an elytra, and has no blocks above/below their head/chest/feet, we mark them as gliding (1) by adding a score.
    -   The score will keep incrementing if they don't stop gliding. Allowing us to use single-execution commands each time they start gliding. We will employ the same for crawling/gliding.
    -   To prevent false-triggers when sleeping, we will also require their hitbox to be higher than 0.2 blocks. We will employ the same for crawling/gliding.
-   **Command 5:** If the player's hitbox is _not_ higher than 0.6 blocks, is not gliding, and has no water above/below them, we mark them as crawling (1) by adding a score.
-   **Command 6:** If the player's hitbox is _not_ higher than 0.6 blocks, is not gliding or crawling, we mark them as swimming (1) by adding a score.
-   **Command 7, 8, 9:** These are example commands (for each state) which can be modified / expanded.

## Folder Structure

If you are working with functions, your folder structure may look something like this:

<FolderView
	:paths="[
    'BP',
    'BP/functions',
    'BP/manifest.json',
    'BP/pack_icon.png',
    'BP/functions/wiki',
    'BP/functions/wiki/detect_state',
    'BP/functions/wiki/detect_state/player',
    'BP/functions/wiki/detect_state/player/is_moving.mcfunction',
    'BP/functions/wiki/detect_state/player/is_sleeping.mcfunction',
    'BP/functions/wiki/detect_state/player/is_crawling.mcfunction',
    'BP/functions/tick.json'
]"
></FolderView>
