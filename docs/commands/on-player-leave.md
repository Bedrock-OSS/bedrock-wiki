---
title: On Player Leave
category: On Event Systems
mentions:
    - BedrockCommands
    - zheaEvyline
nav_order: 3
tags:
    - system
---

## Introduction

[Sourced By Bedrock Commands Community Discord](https://discord.gg/SYstTYx5G5)

This system will run your desired commands on the event that a player leaves the world.

> **Note:** you cannot execute commands on the *players* that leave using selectors. However; you may use the [On Player Join](/commands/on-player-join) system to execute when they join back.

## Setup

`/scoreboard objectives add total dummy`

If you prefer to have the objective added automatically on world initialisation, follow the process outlined in [On First World Load.](/docs/commands/on-first-world-load)

## System

<CodeHeader>BP/functions/on_player_leave.mcfunction</CodeHeader>

```yaml
scoreboard players reset new total
execute as @a run scoreboard players add new total 1
scoreboard players operation new total -= old total


#Your Commands Here (example)
execute if score new total matches ..-1 run say a player has left the world


scoreboard players reset old total
execute as @a run scoreboard players add old total 1
```

![commandBlockChain6](/assets/images/commands/commandBlockChain/6.png)

Here we have used a **`/say`** command as an example but you can use any command you prefer and as many as you require.

Just make sure to follow the given order and properly use the `/execute if score` command as shown to run the commands you need.

## Explanation

- **` new `** this FakePlayer name means the total number of players on the world in the current game tick.
- **` old `** this FakePlayer name means the total number of players that were on the world in the previous game tick but also saves the values to be used in the *next* game tick.

These values are obtained using the [Entity Counter](/commands/entity-counter) system. It may be beneficial to refer to that doc for better understanding this one.

By subtracting 'old' total from 'new' total we will be able to identify if player count has:
- decreased ` ..-1 `
- increased ` 1.. `
- or if it's unchanged ` 0 `

If it has decreased; we know that 1 or more players have left the game.
With this knowledge we can run our desired commands from 'new' if it's score is -1 or less.
- ie, if there were 10 players and someone leaves:
    - that is ` new - old `
    - which is ` 9 - 10 = -1 `
    - hence we will detect by ` ..-1 `

- The 'new' total value is obtained first, subtraction is performed after that to run your desired commands and lastly the 'old' total value is obtained to be used in the next game tick.

:::tip
All commands involved in a command-block-chain or function will only run in a sequence one after the other but it all still happens in the same tick regardless of the number of commands involved. We are able to achieve this system due to the fact that commands run along the end of a game tick after all events such as player log in, log out, death etc.. occur.

![gametick](/assets/images/commands/gametick.png)
:::

## Tick JSON

If you are using functions instead of command blocks, the ` on_player_leave ` function must be added to the ` tick.json ` in order to loop and run it continuously. Multiple files can be added to the ` tick.json ` by placing a comma after each string. Refer to [Functions](/commands/mcfunctions#tick-json) documentation for further info.

<CodeHeader>BP/functions/tick.json</CodeHeader>
```json
{
  "values": [
    "on_player_leave"
  ]
}
```

If using functions, your pack folder structure will be be as follows:

<FolderView
	:paths="[
    'BP',
    'BP/functions',
    'BP/pack_icon.png',
    'BP/manifest.json',
    'BP/functions/on_player_leave.mcfunction',
    'BP/functions/tick.json'
]"
></FolderView>

> **Note:** the scoreboard names (in this case: 'total') may end up being used by other people. Appending ` _ ` and a set of randomly generated characters after would be a choice that reduces the probability of collisions. Similar technique can be employed for the ` .mcfunction ` filenames. Ex:
> - ` total_0fe678 `
> - ` on_player_leave_0fe678.mcfunction `
