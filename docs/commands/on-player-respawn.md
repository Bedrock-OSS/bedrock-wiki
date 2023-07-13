---
title: On Player Respawn
category: On Event Systems
mentions:
    - BedrockCommands
    - zheaEvyline
nav_order: 5
tags:
    - system
---

## Introduction

[Sourced By Bedrock Commands Community Discord](https://discord.gg/SYstTYx5G5)

This system will run your desired commands on the event that a player respawns from death state.

## Setup

The scoreboard alive must be initilaized for this to funtion. to initialize this automatically without the need to have a a player with command previlages, follow the process outlined in [on first world load](/commands/on-first-world-load).

If you prefer to initialize manually this can be completed using the following command:

`/scoreboard objectives add respawn dummy`

## System

<CodeHeader>on_player_respawn.mcfunction</CodeHeader>

```yaml
#Your Commands Here (example)
execute as @e [scores={respawn=1}] run say I died and respawned.


scoreboard players set @a respawn 1
scoreboard players set @e [type=player] respawn 0
```
![commandBlockChain3](/assets/images/commands/commandBlockChain/3.png)


Here we have used an `/execute - say` command as an example but you can use any command you prefer and as many as you require.

Just make sure to follow the given order and properly use the selector argument ` @e [scores={respawn=1}] ` as shown for your desired commands.

## Explanation

- **` respawn=0 `** this means the player is alive or had already respawned.
- **` respawn=1 `** this means the player died and is now respawning, ie. respawned *just now*, in the current gametick.
- **` @a `** selector will target all players alive/dead so we use it to mark everyone as 1 'respawning'
- **` @e `** selector on the other hand will only target players who are alive, so we can use this to mark all alive players 0 'respawned'

Now that *respawning* players are 1 and *respawned* players are 0 we can use this knowledge to run our desired commands on the players respawning.

In the system, your desired commands must come before the other 2 commands because players change from death state to alive state along the start of the gametick before commands are run.

Hence; if we were to put them at the end then the other 2 commands would set respawning players score to 0 first and then the commands you want to run won't be able to select those players as our selector argument is ` @e [scores={respawn=1}] ` not 0. Using 0 would not work as then it would repeat endlessly even on players who have already respawned.


## Tick Json
To get this funtion to run in a loop contuously it must be added to tick.json or a command block. Multiple files can  added to the tick.json by placing a ccommon after each string. See [Functions](/commands/mcfunctions#tick-json) for more details.

<CodeHeader>BP/functions/tick.json</CodeHeader>
```json
{
  "values": [
    "on_join"
  ]
}
```
## Folder Structure
The structure of this behavior pack would be as follows.

## Folder Structure

<FolderView
	:paths="[
    'BP',
    'BP/functions',
    'BP/pack_icon.png',
    'BP/manifest.json',
    'BP/functions/on_player_respawn.mcfunction',
    'BP/functions/tick.json'
]"
></FolderView>
## notes on Compatibbility
The Scoreboard names (alive in this case) may end up being used by other people. appending and _ and a set of randomly generated characters after alive would be a choice that reduces the probability of colisions. Similar techniques can be employed for the filenames in the .mcfunction files.
