---
title: Comparing And Retrieving Scores
category: Scoreboard Systems
mention:
    - BedrockCommands
    - zheaEvyline
description: Learn to test for targets of matching scores / targets with the highest or lowest score.
---

## Introduction

[Sourced By Bedrock Commands Community Discord](https://discord.gg/SYstTYx5G5)

In this guide, you will learn how to test for targets of matching scores / targets with the highest or lowest score.

## Get Highest Score ( > )

**Commands:**

<CodeHeader>BP/functions/scoreboards/player/get_highest_score.mcfunction</CodeHeader>

```yaml
## Get Highest Score
scoreboard players operation Highest <objective> > * <objective>

## Your Commands Here (Example)
execute as <target> if score @s <objective> = Highest <objective> run <command>
```

![Chain of 2 Command Blocks](/assets/images/commands/commandBlockChain/2.png)

**Command 1:** This command compares the `Highest` score with every other tracked score in the specified objective, and if the `Highest` score is lesser than the one being compared to, then the `Highest` score will be assigned the value of that score. To illustrate:

|  #  | Player | Objective: `kills` | Comparison with `Highest` | `Highest` after comparison |
| :-: | :----: | :----------------: | :-----------------------: | :------------------------: |
|  1  |  Alex  |         10         |     `Highest > Alex`      |       `Highest = 10`       |
|  2  |  Kai   |         5          |      `Highest > Kai`      |       `Highest = 10`       |
|  3  | Steve  |         20         |     `Highest > Alex`      |       `Highest = 20`       |

_No change when `Highest` score is compared to player 2 after player 1 (since 10 is already greater than 5)._

:::info NOTE:

Wildcard (`*`) compares with all tracked scores — that includes offline players. To compare with only online players or entities, use `@a` or `@e`.

:::

**Command 2:** This command can be modified or expanded. It allows you to run your desired command if the `<target>` score is equal to `Highest` score.

-   Note: Use `@p` or `@e [c=1]` in place of `<target>` if you want to limit your selection to only one.

**Example:**

<CodeHeader>BP/functions/scoreboards/player/get_highest_score/kills.mcfunction</CodeHeader>

```yaml
## Get Highest Score
scoreboard players operation Highest kills > * kills

## Tag Players with the Most Kills
tag @a remove topKills
execute as @a if score @s kills = Highest kills run tag @s add topKills
```

![Chain of 3 Command Blocks](/assets/images/commands/commandBlockChain/3.png)

## Get Lowest Score ( < )

**Commands:**

<CodeHeader>BP/functions/scoreboards/player/get_lowest_score.mcfunction</CodeHeader>

```yaml
## Get Lowest Score
scoreboard players operation Lowest <objective> < * <objective>

## Your Commands Here
execute as <target> if score @s <objective> = Lowest <objective> run <command>
```

![Chain of 2 Command Blocks](/assets/images/commands/commandBlockChain/2.png)

**Command 1:** This command compares the `Lowest` score with every other tracked score in the specified objective, and if the `Lowest` score is greater than the one being compared to, then the `Lowest` score will be assigned the value of that score. To illustrate:

|  #  | Player | Objective: `blocks_travelled` | Comparison with `Lowest` | `Lowest` after comparison |
| :-: | :----: | :---------------------------: | :----------------------: | :-----------------------: |
|  1  |  Alex  |              100              |     `Lowest < Alex`      |      `Lowest = 100`       |
|  2  |  Kai   |              50               |      `Lowest < Kai`      |       `Lowest = 50`       |
|  3  | Steve  |              200              |     `Lowest < Alex`      |       `Lowest = 50`       |

_No change when `Lowest` score is compared to player 3 after player 2 (since 50 is already less than 200)._

:::info NOTE:

Wildcard (`*`) compares with all tracked scores — that includes offline players. To compare with only online players or entities, use `@a` or `@e`.

:::

**Command 2:** This command can be modified or expanded. It allows you to run your desired command if the `<target>` score is equal to `Lowest` score.

-   Note: Use `@p` or `@e [c=1]` in place of `<target>` if you want to limit your selection to only one.

**Example:**

<CodeHeader>
    BP/functions/scoreboards/player/get_lowest_score/distance_travelled.mcfunction
</CodeHeader>

```yaml
## Get Lowest Score
scoreboard players operation Lowest distance_travelled < * distance_travelled

## Tag Players with the Least Distance Travelled
tag @a remove eliminate
execute as @a if score @s distance_travelled = Lowest distance_travelled run tag @s add eliminate
```

![Chain of 3 Command Blocks](/assets/images/commands/commandBlockChain/3.png)

## Get Matching Scores ( = )

This command compares the executing target's score with other selected targets. It runs the specified command for each target with a matching score.

**Command:**

<CodeHeader>BP/functions/scoreboards/player/get_matching_score.mcfunction</CodeHeader>

```yaml
execute as @a at @s at @a [rm=0.01] if score @s <objective> = @p <objective> run say @s and @p have matching scores!
```

![One Repeating Command Block](/assets/images/commands/commandBlockChain/1.png)

:::info NOTE:

In the `<command>` (where `/say` is used as an example), `@s` refers to the executing entity or player (the target), and `@p` or `@e [c=1]` refers to the entity or player being compared with.
:::

**Visualisation:**

![](/assets/images/commands/comparing-scores/GetMatchingScores.gif)

**Example 1:** Teleport pet to owner if farther than 6 blocks:

<CodeHeader>BP/functions/scoreboards/player/get_matching_score/pet.mcfunction</CodeHeader>

```yaml
## Teleport to Owner
execute as @e [tag=pet] at @s at @a [rm=7] if score @s id = @p id run tp @s @p
```

![One Repeating Command Block](/assets/images/commands/commandBlockChain/1.png)

**Example 2:** Set plot owner to Creative mode and others to Adventure mode:

<CodeHeader>BP/functions/scoreboards/player/get_matching_score/plot.mcfunction</CodeHeader>

```yaml
## Set Owners to Creative Mode
execute as @e [tag=plot] at @s at @a [r=16] if score @s id = @p id run gamemode c @p [m=!c]

## Set Non-Owners to Adventure Mode
execute as @e [tag=plot] at @s at @a [r=16] unless score @s id = @p id run gamemode a @p [m=!a]
```

![Chain of 2 Command Blocks](/assets/images/commands/commandBlockChain/2.png)
