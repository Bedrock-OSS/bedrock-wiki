---
title: On First Join
category: On Event Systems
mentions:
    - BedrockCommands
    - zheaEvyline
    - SmokeyStack
nav_order: 1
tags:
    - system
---

## Introduction

[Sourced By Bedrock Commands Community Discord](https://discord.gg/SYstTYx5G5)

This system will run your desired commands on the event that a player joins the world for the first time.



## System
<CodeHeader>BP/functions/on_first_join.mcfunction</CodeHeader>

```yaml
#Your Commands Here (examples)
give @a [tag=!joined] stone_pickaxe
give @a [tag=!joined] bread 16 1
tag @a [tag=!joined] add joined
```

![commandBlockChain3](/assets/images/commands/commandBlockChain/3.png)


Here we have used 2 `give` commands as example but you can use any command you prefer and as many as you require.

Just make sure to follow the given order and properly add the selector argument ` tag=!joined ` as shown for your desired commands.

## Explanation

When the player joins the world for the first time, they will not have the joined tag.

Once we run our desired commands for players without the tag, they will be given the tag immediately and the commands will not repeat for them again unless we remove their tag with:
`tag <player> remove joined`

## Tick Json
To get this funtion to run in a loop contuously it must be added to tick.json or a command block. Multiple files can  added to the tick.json by placing a ccommon after each string. See [Functions](/commands/mcfunctions#tick-json) for more details.

<CodeHeader>BP/functions/tick.json</CodeHeader>
```json
{
  "values": [
    "on_first_join"
  ]
}
```
## Folder Structure
The structure of this bheavior pack would be as follows.

<FolderView
	:paths="[
    'BP',
    'BP/functions',
    'BP/pack_icon.png',
    'BP/manifest.json',
    'BP/functions/on_first_join.mcfunction',
    'BP/functions/tick.json'
]"
></FolderView>
## notes on Compatibbility
The Scoreboard names (joined in this case) may end up being used by other people. appending and _ and a set of randomly generated characters after joined would be a choice that reduces the probability of colisions. Similar techniques can be employed for the filenames in the .mcfunction files.
