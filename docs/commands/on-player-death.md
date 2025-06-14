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

[Sourced by the Bedrock Commands Community (BCC) Discord](https://bedrockcommands.org/)

This system will run your desired commands on the event that a player dies.

## Setup

_To be typed in Chat:_

`/scoreboard objectives add wiki:alive dummy`

If you are working with functions and prefer to have the objective added automatically on world initialisation, follow the process outlined in [On First World Load](/commands/on-first-world-load).

## System

<CodeHeader>BP/functions/wiki/events/player/on_death.mcfunction</CodeHeader>

```yaml
## Set Player States
### Not alive
scoreboard players set @a[scores={wiki:alive=!2}] wiki:alive 0
### Alive
scoreboard players set @e[type=player] wiki:alive 1

## Your Commands Here (Example)
execute as @a[scores={wiki:alive=0}] run say I died

## Mark that Commands for Dead Players Have Been Executed
scoreboard players set @a[scores={wiki:alive=0}] wiki:alive 2
```

![Chain of Four Command Blocks](/assets/images/commands/command-block-chain/4.png)

Here, we have used an `/execute - say` command as an example, but you can use any command you prefer and as many as you need.

Just make sure to follow the given order and properly apply the `scores={wiki:alive=0}` selector argument as shown for your desired commands.

## Explanation

-   **`wiki:alive=0`** player is _not_ alive (dead).
-   **`wiki:alive=1`** player is alive.
-   **`wiki:alive=2`** player is dead and we have executed our desired commands on/from them.

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
    "wiki/event/players/on_death"
  ]
}
```

If using functions, your pack folder structure will be as follows:

<FolderView
	:paths="[
    'BP',
    'BP/functions',
    'BP/functions/wiki',
    'BP/pack_icon.png',
    'BP/manifest.json',
    'BP/functions/wiki/event',
    'BP/functions/wiki/event/players',
    'BP/functions/wiki/event/players/on_death.mcfunction',
    'BP/functions/tick.json'
]"
></FolderView>

## Alternative Method

This method was possible after the introduction of the new `/execute` syntax in Minecraft `1.19.50`.

:::warning Known Issue:
If two or more players are teleported to the same point and one of them dies but the remaining players do not move, the system will fail to execute the commands.
:::

-   Make sure you add the `wiki:q.is_dead` scoreboard objective:
    -   `/scoreboard objectives add wiki:q.is_dead dummy`

<CodeHeader>BP/functions/detect_state/player/is_dead.mcfunction</CodeHeader>

```yaml
## Set Player States
### Not dead
scoreboard players set @e[type=player] wiki:q.is_dead 0
### Dead
execute as @a at @s unless entity @e[type=player,r=0.01] run scoreboard players add @s wiki:q.is_dead 1

## Your Commands Here (examples)
### Summon armor stand at death position
execute as @a[scores={wiki:q.is_dead=1}] at @s run summon armor_stand "Corpse" ~~~
### Death message in chat
execute as @a[scores={wiki:q.is_dead=1..}] run say I died and haven't respawned yet..
```

![Chain of Four Command Blocks](/assets/images/commands/command-block-chain/4.png)

**States:**

-   **`wiki:q.is_dead=0`** player is _not_ dead (alive).
-   **`wiki:q.is_dead=1`** player just died. (used for 'trigger' actions)
-   **`wiki:q.is_dead=1..`** player is still dead. (used for repeating actions)

**Purpose of Each Command:**

1. **Command 1:** All alive players are marked as _not_ dead (0)
2. **Command 2:** If there is no alive player within a 0.01 block radius of a player, they will be marked as dead (1)
    - The logic is that only the player themself can be present within such a small radius from them. The probability of two or more players to precisely stand at the same point by themselves (without `/tp` command) is close to zero.
3. **Command 3, 4:** These are example commands (for each state) which can be modified / expanded.
