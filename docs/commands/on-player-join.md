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
The scoreboard alive must be initilaized for this to funtion. to initialize this automatically without the need to have a a player with command previlages, follow the process outlined in [on first world load](/commands/on-first-world-load).

If you prefer to initialize manually this can be completed using the following command:


`/scoreboard objectives add joined dummy`

## System

<CodeHeader>BP/functions/on_join.mcfunction</CodeHeader>

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

<FolderView
	:paths="[
    'BP',
    'BP/functions',
    'BP/pack_icon.png',
    'BP/manifest.json',
    'BP/functions/on_join.mcfunction',
    'BP/functions/tick.json'
]"
></FolderView>
## notes on Compatibbility
The Scoreboard names (joined in this case) may end up being used by other people. appending and _ and a set of randomly generated characters after joined would be a choice that reduces the probability of colisions. Similar techniques can be employed for the filenames in the .mcfunction files.
