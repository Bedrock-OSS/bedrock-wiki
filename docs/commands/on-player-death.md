---
title: On Player Death
category: On Event Systems
mentions:
    - BedrockCommands
    - zheaEvyline
nav_order: 4
tags:
    - system
---

## Introduction

[Sourced By Bedrock Commands Community Discord](https://discord.gg/SYstTYx5G5)

This system will run your desired commands on the event that a player dies.

## Setup
The scoreboard alive must be initilaized for this to funtion. to initialize this automatically without the need to have a a player with command previlages, follow the process outlined in [on first world load](/commands/on-first-world-load).

If you prefer to initialize manually this can be completed using the following command:

`/scoreboard objectives add alive dummy`

## System

<CodeHeader>BP/functions/on_death.mcfunction</CodeHeader>

```yaml
scoreboard players set @a [scores={alive=!2}] alive 0
scoreboard players set @e [type=player] alive 1


#Your Commands Here (example)
execute as @a [scores={alive=0}] run say I died


scoreboard players set @a [scores={alive=0}] alive 2
```

![commandBlockChain4](/assets/images/commands/commandBlockChain/4.png)


Here we have used an `/execute - say` command as an example but you can use any command you prefer and as many as you require.

Just make sure to follow the given order and properly add the selector argument ` scores={alive=0} ` as shown for your desired commands.

## Explanation

- **` alive=0 `** this means player is dead.
- **` alive=1 `** this means player is alive.
- **` alive=2 `** this means player is dead and we have run our desired commands on/from them.


- **` @a `** selector will target all players alive/dead so we use it to mark everyone as 0 'dead.'
    - Note: we will ignore 2 or it will end up making the commands execute on dead players again. We only want our commands to execute once.


- **` @e `** selector on the other hand will only target players who are alive, so we can use this to mark all alive players 1 'alive.'


- Now that dead players are 0 and alive players are 1 we can use this knowledge to run our desired commands on the dead players.
    - Keep in mind we need to set their score to 2 after or otherwise the commands will keep executing till they respawn.


## Tick Json
To get this funtion to run in a loop contuously it must be added to tick.json or a command block. Multiple files can  added to the tick.json by placing a ccommon after each string. See [Functions](/commands/mcfunctions#tick-json) for more details.

<CodeHeader>BP/functions/tick.json</CodeHeader>
```json
{
  "values": [
    "on_death"
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
    'BP/functions/on_death.mcfunction',
    'BP/functions/tick.json'
]"
></FolderView>
## notes on Compatibbility
The Scoreboard names (alive in this case) may end up being used by other people. appending and _ and a set of randomly generated characters after alive would be a choice that reduces the probability of colisions. Similar techniques can be employed for the filenames in the .mcfunction files.
