---
title: On Player Death
category: On Event Systems
mentions:
    - BedrockCommands
    - zheaEvyline
nav_order: 4
description: This system will run your desired commands on the event that a player dies.
---

## Introduction

[Sourced By Bedrock Commands Community Discord](https://discord.gg/SYstTYx5G5)

This system will run your desired commands on the event that a player dies.

## Setup

_To be typed in Chat:_

`/scoreboard objectives add is_alive dummy`

If you are working with functions and prefer to have the objective added automatically on world initialisation, follow the process outlined in [On First World Load.](/commands/on-first-world-load)

## System

<CodeHeader>BP/functions/events/player/on_death.mcfunction</CodeHeader>

```yaml
## Set Player States
### Not alive
scoreboard players set @a [scores={is_alive=!2}] is_alive 0
### Alive
scoreboard players set @e [type=player] is_alive 1

## Your Commands Here (Example)
execute as @a [scores={is_alive=0}] run say I died

## Mark that Commands for Dead Players Have Been Executed
scoreboard players set @a [scores={is_alive=0}] is_alive 2
```

![commandBlockChain4](/assets/images/commands/commandBlockChain/4.png)

Here, we have used an `/execute - say` command as an example, but you can use any command you prefer and as many as you need.

Just make sure to follow the given order and properly apply the `scores={alive=0}` selector argument as shown for your desired commands.

## Explanation

-   **`is_alive=0`** player is _not_ alive (dead).
-   **`is_alive=1`** player is alive.
-   **`is_alive=2`** player is dead and we have executed our desired commands on/from them.

**Purpose of Each Command:**

1. **Command 1:** All players will be marked as _not_ alive (0) by default.
    - We will ignore score `2`, else the commands that we want to run when the player dies will trigger more than once.
2. **Command 2:** All alive players will be marked as 'alive' (1).
    - `@e` selector allows us to exclusively target players who are alive.
    - `@a` selector will target all players, whether they are alive or not.
3. **Command 3:** Now that alive players have a score of 1 and non-alive players have a score of 0, we will use this knowledge to run our desired commands when the player becomes dead (0).
4. **Command 4:** Since we want to execute our desired commands only once when the player dies, we will set their score to `2`. As not doing this will cause the commands to repeat till they respawn.

## Tick JSON

If you are using functions instead of command blocks, the `on_death` function must be added to the `tick.json` in order to loop and run it continuously. Multiple files can be added to the `tick.json` by placing a comma after each string. Refer to [Functions](/commands/mcfunctions#tick-json) documentation for further info.

<CodeHeader>BP/functions/tick.json</CodeHeader>
```json
{
  "values": [
    "events/player/on_death"
  ]
}
```

If using functions, your pack folder structure will be as follows:

<FolderView
	:paths="[
    'BP',
    'BP/functions',
    'BP/pack_icon.png',
    'BP/manifest.json',
    'BP/functions/events',
    'BP/functions/events/player',
    'BP/functions/events/player/on_death.mcfunction',
    'BP/functions/tick.json'
]"
></FolderView>

:::info NOTE:

The scoreboard names (in this case: 'is*alive') may end up being used by other people. Appending ` * `and a set of randomly generated characters after would be a choice that reduces the probability of collisions. Similar technique can be employed for the` .mcfunction ` filenames. Ex:

-   `is_alive_0fe678`
-   `on_death_0fe678.mcfunction`

:::

## Alternative Method

This method was possible after the introduction of the new `/execute` syntax in Minecraft `1.19.50`.

:::warning Known Issue:
If two or more players are teleported to the same point and one of them dies but the remaining players do not move, the system will fail to execute the commands.
:::

-   Make sure you add the `is_dead` scoreboard objective:
    -   `/scoreboard objectives add is_dead dummy`

<CodeHeader>BP/functions/states/is_dead.mcfunction</CodeHeader>

```yaml
## Set Player States
### Not dead
scoreboard players set @e [type=player] is_dead 0
### Dead
execute as @a at @s unless entity @e [type=player, r=0.01] run scoreboard players add @s is_dead 1

## Your Commands Here (examples)
### Summon armor stand at death position
execute as @a [scores={is_dead=1}] at @s run summon armor_stand "Dead Player" ~~~
### Death message in chat
execute as @a [scores={is_dead=1..}] run say I died and haven't respawned yet..
```

![commandBlockChain4](/assets/images/commands/commandBlockChain/4.png)

**States:**

-   **`is_dead=0`** player is _not_ dead (alive).
-   **`is_dead=1`** player just died. (used for 'trigger' actions)
-   **`is_dead=1..`** player is still dead. (used for repeating actions)

**Purpose of Each Command:**

1. **Command 1:** All alive players are marked as _not_ dead (0)
2. **Command 2:** If there is no alive player within a 0.01 block radius of a player, they will be marked as dead (1)
    - The logic is that only the player themself can be present within such a small radius from them. The probability of two or more players to precisely stand at the same point by themselves (without `/tp` command) is close to zero.
3. **Command 3, 4:** These are example commands (for each state) which can be modified / expanded.
