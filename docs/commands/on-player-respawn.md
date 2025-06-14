---
title: On Player Respawn
category: On Event Systems
mentions:
    - BedrockCommands
    - zheaEvyline
nav_order: 5
description: This system will run your desired commands on the event that a player respawns from death state.
---

## Introduction

[Sourced by the Bedrock Commands Community (BCC) Discord](https://bedrockcommands.org/)

This system will run your desired commands on the event that a player respawns from death state.

## Setup

*To be typed in Chat:*

`/scoreboard objectives add wiki:respawn dummy`

If you are working with functions and prefer to have the objective added automatically on world initialisation, follow the process outlined in [On First World Load](/commands/on-first-world-load).

## System

<CodeHeader>BP/functions/wiki/events/player/on_respawn.mcfunction</CodeHeader>

```yaml
## Your Commands Here (Example)
execute as @e[scores={wiki:respawn=1}] run say I died and respawned.

## Set Player States
### Currently respawning
scoreboard players set @a wiki:respawn 1
### Currently not respawning
scoreboard players set @e[type=player] wiki:respawn 0
```
![Chain of 3 Command Blocks](/assets/images/commands/command-block-chain/3.png)


Here, we have used an `/execute - say` command as an example, but you can use any command you prefer and as many as you need.

Just make sure to follow the given order and properly apply the ` @e[scores={wiki:respawn=1}] ` selector argument as shown for your desired commands.

## Explanation

- **` wiki:respawn=0 `** player is alive or had already respawned.
- **` wiki:respawn=1 `** player is dead or has just respawned (in the current game-tick).
- **` @a `** selector will target all players alive/dead. Hence, we will use it to mark players as `1` 'respawning'
- **` @e `** selector on the other hand will only target players who are alive, so we can use this to mark all alive players 0 'respawned'

Now that *respawning* players are `1` and *respawned* players are `0`, we can use this knowledge to run our desired commands when the players with score `1` respawn from death state. They are targeted with `@e` selector.

In the system, your desired commands must come before the other 2 commands because players change from death state to alive state along the start of the game-tick, before commands are run.

Hence, if we were to put them at the end, the other 2 commands would set respawning players score to `0` first and the commands you want to run won't be able to select those players as our selector argument is `@e[scores={wiki:respawn=1}]`, not `0`. Using `0` would not work as then it would repeat endlessly even on players who have already respawned.

## Tick JSON

If you are using functions instead of command blocks, the ` on_respawn ` function must be added to the ` tick.json ` in order to loop and run it continuously. Multiple files can be added to the ` tick.json ` by placing a comma after each string. Refer to [Functions](/commands/mcfunctions#tick-json) documentation for further info.

<CodeHeader>BP/functions/tick.json</CodeHeader>
```json
{
  "values": [
    "wiki/event/players/on_respawn"
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
    'BP/functions/wiki/event/players/on_respawn.mcfunction',
    'BP/functions/tick.json'
]"
></FolderView>
