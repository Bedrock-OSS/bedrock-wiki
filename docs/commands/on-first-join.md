---
title: On Player First Join
category: On Event Systems
mentions:
    - BedrockCommands
    - zheaEvyline
    - SmokeyStack
nav_order: 1
description: This system will run your desired commands on the event that a player joins the world for the first time.
---

## Introduction

[Sourced by the Bedrock Commands Community (BCC) Discord](https://bedrockcommands.org/)

This system will run your desired commands on the event that a player joins the world for the first time.

## System

<CodeHeader>BP/functions/wiki/event/players/on_first_join.mcfunction</CodeHeader>

```yaml
## Your Commands Here (Examples)
### Give stone pickaxe ×1
give @a[tag=!wiki:joined] stone_pickaxe
### Give bread ×16
give @a[tag=!wiki:joined] bread 16

## Mark as Joined
tag @a[tag=!wiki:joined] add wiki:joined
```

![Chain of 3 Command Blocks](/assets/images/commands/command-block-chain/3.png)

Here, we have used 2 `/give` commands as examples, but you can use any command you prefer and as many as you need.

Just make sure to follow the given order and properly apply the `tag=!wiki:joined` selector argument as shown for your desired commands.

## Explanation

When the player joins the world for the first time, they will not have the joined tag.

Once we run our desired commands for players without the tag, they will be given the tag immediately and the commands will not repeat for them unless we remove their tag with:

<br>`/tag <player> remove wiki:joined`

## Tick JSON

If you are using functions instead of command blocks, the `on_first_join` function must be added to the `tick.json` in order to loop and run it continuously. Multiple files can be added to the `tick.json` by placing a comma after each string. Refer to [Functions](/commands/mcfunctions#tick-json) documentation for further info.

<CodeHeader>BP/functions/tick.json</CodeHeader>
```json
{
  "values": [
    "wiki/event/players/on_first_join"
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
    'BP/functions/wiki/event/players/on_first_join.mcfunction',
    'BP/functions/tick.json'
]"
></FolderView>