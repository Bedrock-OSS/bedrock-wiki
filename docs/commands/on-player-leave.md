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

[Sourced By Bedrock Commands Community Discord](https://discord.gg/SYstTYx5G5)

This system will run your desired commands on the event that a player leaves the world.

> Note: You cannot execute commands on the *players* that leave using target selectors. However, you may use the [On Player Join](/commands/on-player-join) system to execute when they join back.

## Setup

*To be typed in Chat:*

`/scoreboard objectives add total dummy`

If you are working with functions and prefer to have the objective added automatically on world initialisation, follow the process outlined in [On First World Load.](/commands/on-first-world-load)

## System

<CodeHeader>BP/functions/events/player/on_leave.mcfunction</CodeHeader>

```yaml
## Entity Counter
### reset current player count
scoreboard players reset NewPlayerCount total
### get current player count 
execute as @a run scoreboard players add NewPlayerCount total 1

## Get Difference ( current - previous )
scoreboard players operation newPlayerCount total -= playerCount total

## Your Commands Here (example)
### message if there is a difference of -1 or less
execute if score newPlayerCount total matches ..-1 run say a player has left the world

## Entity Counter
### reset current player count
scoreboard players reset playerCount total
### get current player count (to check difference next game tick)
execute as @a run scoreboard players add playerCount total 1
```

![Chain of 6 Command Blocks](/assets/images/commands/commandBlockChain/6.png)

Here, we have used a `/say` command as an example, but you can use any command you prefer and as many as you need.

Just make sure to follow the given order and properly apply the `/execute if score` condition as shown for your desired commands.

## Explanation

- **` NewPlayerCount `** total number of players on the world in the current game-tick (at start of command loop).
- **` PlayerCount `** total number of players on the world in the current game-tick (by the end of command loop).

Since `PlayerCount` is only updated at the end of the command loop, it can be used at the start of the command loop in the next game-tick to check difference with `NewPlayerCount`.

The count is obtained using the [Entity Counter](/commands/entity-counter) system. It may be beneficial to refer to that page to better understand this one. When referring to that page, you will notice that we have used the objective name `total` instead of `count`. This is to prevent collision between the two systems.

By subtracting 'playerCount' total from 'newPlayerCount' total, we will be able to identify if the player count has:
- decreased ` ..-1 `
- increased ` 1.. `
- or if it's unchanged ` 0 `

If it has decreased, we know that 1 or more players have left the game.
Using this knowledge, we can run our desired commands from 'newPlayerCount' if it's score is `-1` or less.
- i.e., if there were 10 players and someone leaves:
    - that is ` NewPlayerCount - PlayerCount `
    - which results ` 9 - 10 = -1 `
    - hence, we will detect by ` ..-1 `

- The 'NewPlayerCount' total is obtained first, subtraction is performed after that to run your desired commands, and lastly, the 'PlayerCount' total is obtained to be used in the next game-tick.

:::tip
All commands involved in a command-block-chain or function will only run in a sequence one after the other but it all still happens in the same tick regardless of the number of commands involved. We are able to achieve this system due to the fact that commands run along the end of a game tick after all events such as player log in, log out, death, etc.. occur.

![gametick](/assets/images/commands/gametick.png)
:::

## Tick JSON

If you are using functions instead of command blocks, the ` on_leave ` function must be added to the ` tick.json ` in order to loop and run it continuously. Multiple files can be added to the ` tick.json ` by placing a comma after each string. Refer to [Functions](/commands/mcfunctions#tick-json) documentation for further info.

<CodeHeader>BP/functions/tick.json</CodeHeader>
```json
{
  "values": [
    "events/player/on_leave"
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
    'BP/functions/events/player/on_leave.mcfunction',
    'BP/functions/tick.json'
]"
></FolderView>

:::info NOTE:

The scoreboard names (in this case: 'total') may end up being used by other people. Appending ` _ ` and a set of randomly generated characters after would be a choice that reduces the probability of collisions. Similar technique can be employed for the ` .mcfunction ` filenames. Ex:
- ` total_0fe678 `
- ` on_leave_0fe678.mcfunction `

:::
