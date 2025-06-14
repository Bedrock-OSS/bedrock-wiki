---
title: On Player Join
category: On Event Systems
mentions:
    - BedrockCommands
    - zheaEvyline
nav_order: 2
description: This system will run your desired commands on the event that a player joins the world.
---

## Introduction

[Sourced by the Bedrock Commands Community (BCC) Discord](https://bedrockcommands.org/)

This system will run your desired commands on the event that a player joins the world.

## Setup

_To be typed in Chat:_

`/scoreboard objectives add wiki:joined dummy`

If you are working with functions and prefer to have the objective added automatically on world initialisation, follow the process outlined in [On First World Load](/commands/on-first-world-load).

## System

<CodeHeader>BP/functions/wiki/event/players/on_join.mcfunction</CodeHeader>

```yaml
## Register Players to 'wiki:joined' Objective Who Joined For First Time or Were Cleared from 'wiki:joined' Previously
scoreboard players add @a wiki:joined 0

## Your Commands Here (Example)
tp @a[scores={wiki:joined=0}] 0 65 0

### Mark Players as Joined
### Clear 'joined' score of online and offline players
scoreboard players reset * wiki:joined
### Set online players score to 1
scoreboard players set @a wiki:joined 1
```

![Chain of 4 Command Blocks](/assets/images/commands/command-block-chain/4.png)

Here, we have used a `/tp` command as an example, but you can use any command you prefer and as many as you need.

Just make sure to follow the given order and properly apply the `scores={wiki:joined=0}` selector argument as shown for your desired commands.

## Explanation

When the player joins, a score of `0` is added to their `wiki:joined` objective. This allows us to run commands from them using the `scores` selector argument.

Immediately after the commands are run, we reset all the scores on the objective using wildcard **`*`**. And only the players who stayed online will have their score set to `1`.

This way, since our commands only target players with a score of `0`, the commands won't repeat for the players who stayed, unless they leave and rejoin or if we run:

<br>`/scoreboard players set <player> joined 0`

This is because _adding_ a score of 0 to a score of 1 will have no change. But adding a score of 0 to players with no score will set their score to 0.

## Tick JSON

If you are using functions instead of command blocks, the `on_join` function must be added to the `tick.json` in order to loop and run it continuously. Multiple files can be added to the `tick.json` by placing a comma after each string. Refer to [Functions](/commands/mcfunctions#tick-json) documentation for further info.

<CodeHeader>BP/functions/tick.json</CodeHeader>
```json
{
  "values": [
    "wiki/event/players/on_join"
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
    'BP/functions/wiki/event/players/on_join.mcfunction',
    'BP/functions/tick.json'
]"
></FolderView>
