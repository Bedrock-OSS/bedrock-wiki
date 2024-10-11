---
title: On First World Load
category: On Event Systems
mentions:
    - BedrockCommands
    - zheaEvyline
    - SmokeyStack
    - cda94581
nav_order: 6
description: This system will run your desired commands on the event that the world is loaded for the first time after applying your pack.
---

## Introduction

[Sourced By Bedrock Commands Community Discord](https://discord.gg/SYstTYx5G5)

This system will run your desired commands on the event that the world is loaded for the first time after applying your pack.
> Note: A [Function](/commands/mcfunctions) Pack is required to achieve this system, since it is the `tick.json` file which allows us to run commands as soon as the world is initialised.


## Tick JSON

<CodeHeader>BP/functions/tick.json</CodeHeader>
```json
{
  "values": [
    "events/world/on_initialise"
  ]
}
```

## System

<CodeHeader>BP/functions/events/world/on_initialise.mcfunction</CodeHeader>
```yaml
## Initialisation
### Add objective
scoreboard objectives add world dummy
### Register to objective
scoreboard players add Initialised world 0

## Your Commands Here (Example)
execute if score Initialised world matches 0 run say New world created!

## Mark as Initialised
scoreboard players set Initialised world 1
```

Here, we have used an `/execute - say` command as an example, but you can use any command you prefer and as many as you need.

Just make sure to follow the given order and properly apply the `/execute if score` condition as shown for your desired commands.

## Explanation

- **` Initialised=0 `** world has just initialised and we are yet to run the initialisation commands we need.
- **` Initialised=1 `** world has been initialised and we have executed the initialisation commands.

An objective of the name `world` is added for us to save scores to it so that we can track whether the world has been initialised or not. This also allows us to structure our commands to only execute at world initialisation.

Following the creation of the objective, a score of `0` is added to the fake-player-name 'initialised'. This will register it to the objective and enable us to use the `/execute if score` condition to run our desired commands.

Finally, the score for fake-player-name 'initialised' is set to `1` after all the commands are executed. This is to prevent it from entering a loop and executing more than once.

## Folder Structure

<FolderView
	:paths="[
    'BP',
    'BP/functions',
    'BP/pack_icon.png',
    'BP/manifest.json',
    'BP/functions/events',
    'BP/functions/events/world',
    'BP/functions/events/world/on_initialise.mcfunction',
    'BP/functions/tick.json'
]"
></FolderView>

:::info NOTE:

The scoreboard names (in this case: 'world') may end up being used by other people. Appending ` _ ` and a set of randomly generated characters after would be a choice that reduces the probability of collisions. Similar technique can be employed for the ` .mcfunction ` filenames. Ex:
- ` world_0fe678 `
- ` on_initialise_0fe678.mcfunction `

:::
