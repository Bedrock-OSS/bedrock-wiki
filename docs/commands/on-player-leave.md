---
title: On Player Leave
category: On Event Systems
mentions:
    - BedrockCommands
    - zheaEvyline
nav_order: 3
description: This system will run your desired commands on the event that a player leaves the world.
---

## Introduction

[Sourced by the Bedrock Commands Community Discord](https://bedrockcommands.org/)

This system will run your desired commands on the event that a player leaves the world.

> **Note:** You cannot execute commands on *players* that leave using target selectors. However, you can use the [On Player Join](/commands/on-player-join) system to execute commands when they rejoin.

## Setup

*To be typed in chat:*

`/scoreboard objectives add wiki:player_count dummy`

If you are working with functions and prefer to have the objective added automatically when the world initializes, follow the process outlined in [On First World Load](/commands/on-first-world-load).

## System

<CodeHeader>BP/functions/wiki/event/players/on_leave.mcfunction</CodeHeader>

```yaml
## Get Current Tick Player Count
### Reset score
scoreboard players reset .CurrentTick wiki:player_count
### Tally score 
execute as @a run scoreboard players add .CurrentTick wiki:player_count 1

## Get Difference (Current - Previous)
scoreboard players operation .CurrentTick wiki:player_count -= .PreviousTick wiki:player_count

## Your Commands Here (Example)
### Message if there is a difference of -1 or less
execute if score .CurrentTick wiki:player_count matches ..-1 run say One or more players have left the world

## Save Current Tick Player Count to Compare Next Game Tick
### Reset score
scoreboard players reset .PreviousTick wiki:player_count
### Tally score
execute as @a run scoreboard players add .PreviousTick wiki:player_count 1
```

![Chain of 6 Command Blocks](/assets/images/commands/command-block-chain/6.png)

Here, we have used a `/say` command as an example, but you can use any command you prefer and as many as you need.

Just make sure to follow the given order and properly apply the `/execute if score` condition as shown for your desired commands.

## Explanation

Since `.PreviousTick` score is updated at the end of the command loop, it can be used at the start of the next game tick to compare with the score of `.CurrentTick`.

The player count is obtained using the [Entity Counter](/commands/entity-counter) system. Reading that page is recommended to better understand this system.

By subtracting `.PreviousTick` score from `.CurrentTick` score, we can determine if the player count has:
- Decreased (`..-1`)
- Increased (`1..`)
- Remains unchanged (`0`)

If it has decreased, it means one or more players have left the game.
Using this, we can execute commands when `.CurrentTick` is `-1` or lower.
- For example, if there were 10 players and one leaves:
    - `.CurrentTick - .PreviousTick = 9 - 10 = -1`
    - We detect this using `..-1`

- `.CurrentTick` is obtained first, subtraction is performed next, commands are executed based on the result, and finally, `.PreviousTick` is updated to be used in the next game tick.

:::tip
All commands in a command-block chain or function will execute sequentially but within the same game tick, regardless of the number of commands involved. This system works because commands execute at the end of a game tick after all events (such as player join, leave, death, etc.) occur.

<WikiImage
    src="/assets/images/commands/intro-to-command-blocks/game-tick.png"
    alt="Game Tick"
    height=200
/>
:::

## Tick JSON

If you are using functions instead of command blocks, the `on_leave` function must be added to `tick.json` to ensure continuous execution. Multiple files can be added to `tick.json` by placing a comma after each string. Refer to the [Functions](/commands/mcfunctions#tick-json) documentation for more details.

<CodeHeader>BP/functions/tick.json</CodeHeader>
```json
{
  "values": [
    "wiki/event/players/on_leave"
  ]
}
```

If using functions, your pack folder structure should be as follows:

<FolderView
	:paths="[
    'BP',
    'BP/functions',
    'BP/functions/wiki',
    'BP/pack_icon.png',
    'BP/manifest.json',
    'BP/functions/wiki/event',
    'BP/functions/wiki/event/players',
    'BP/functions/wiki/event/players/on_leave.mcfunction',
    'BP/functions/tick.json'
]"
></FolderView>
