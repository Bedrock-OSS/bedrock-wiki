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

## Tick JSON

If you are using functions instead of command blocks, the ` on_first_join ` function must be added to the ` tick.json ` in order to loop and run it continuously. Multiple files can be added to the ` tick.json ` by placing a comma after each string. Refer to [Functions](/commands/mcfunctions#tick-json) documentation for further info.

<CodeHeader>BP/functions/tick.json</CodeHeader>
```json
{
  "values": [
    "on_first_join"
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
    'BP/functions/on_first_join.mcfunction',
    'BP/functions/tick.json'
]"
></FolderView>

> **Note:** the tag names (in this case: 'joined') may end up being used by other people. Appending ` _ ` and a set of randomly generated characters after would be a choice that reduces the probability of collisions. Similar technique can be employed for the ` .mcfunction ` filenames. Ex:
> - ` joined_0fe678 `
> - ` on_first_join_0fe678.mcfunction `
