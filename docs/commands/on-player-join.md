---
title: On Player Join
category: On Event Systems
mentions:
    - BedrockCommands
    - zheaEvyline
nav_order: 2
tags:
    - system
---

## Introduction

[Sourced By Bedrock Commands Community Discord](https://discord.gg/SYstTYx5G5)

This system will run your desired commands on the event that a players joins the world.

## Setup

*To be typed in Chat:*

`/scoreboard objectives add joined dummy`

If you prefer to have the objective added automatically on world initialisation, follow the process outlined in [On First World Load.](/commands/on-first-world-load)

## System

<CodeHeader>BP/functions/on_player_join.mcfunction</CodeHeader>

```yaml
scoreboard players add @a joined 0


#Your Commands Here (example)
tp @a[scores={joined=0}] 0 65 0


scoreboard players reset * joined
scoreboard players set @a joined 1
```

![commandBlockChain4](/assets/images/commands/commandBlockChain/4.png)


Here we have used a `tp` command as an example but you can use any command you prefer and as many as you require.

Just make sure to follow the given order and properly add the selector argument ` scores={joined=0} ` as shown for your desired commands.

## Explanation

When the player joins, a 0 is added to their objective, this allows us to run commands from them using the 'scores' selector argument.

Immediately after the commands are run, we reset all the scores on the objective using wildcard **` * `** and only players who stayed online will have their score set to 1.

And this way, since our commands only target players with the score 0, the commands won't repeat again for the players who stayed unless they leave and rejoin or if we run:
`/scoreboard players set <player> joined 0`

## Tick JSON

If you are using functions instead of command blocks, the ` on_player_join ` function must be added to the ` tick.json ` in order to loop and run it continuously. Multiple files can be added to the ` tick.json ` by placing a comma after each string. Refer to [Functions](/commands/mcfunctions#tick-json) documentation for further info.

<CodeHeader>BP/functions/tick.json</CodeHeader>
```json
{
  "values": [
    "on_player_join"
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
    'BP/functions/on_player_join.mcfunction',
    'BP/functions/tick.json'
]"
></FolderView>

> **Note:** the scoreboard names (in this case: 'joined') may end up being used by other people. Appending ` _ ` and a set of randomly generated characters after would be a choice that reduces the probability of collisions. Similar technique can be employed for the ` .mcfunction ` filenames. Ex:
> - ` joined_0fe678 `
> - ` on_player_join_0fe678.mcfunction `
