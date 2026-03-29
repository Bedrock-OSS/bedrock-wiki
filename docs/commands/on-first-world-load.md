---
title: On First World Load
category: On Event Systems
mentions:
    - BedrockCommands
    - zheaEvyline
    - SmokeyStack
    - cda94581
nav_order: 0
description: This system will run your desired commands on the event that the world is loaded for the first time after applying your pack.
---

## Introduction

[Sourced by the Bedrock Commands Community (BCC) Discord](https://bedrockcommands.org/)

This system will run your desired commands on the event that the world is loaded for the first time after applying your pack.

> Note: A [Function](/commands/mcfunctions) Pack is required to achieve this system, since it is the `tick.json` file which allows us to run commands as soon as the world is initialized.

## Tick JSON

<CodeHeader>BP/functions/tick.json</CodeHeader>
```json
{
  "values": [
    "wiki/event/worlds/on_initialize"
  ]
}
```

## System

<CodeHeader>BP/functions/wiki/event/worlds/on_initialize.mcfunction</CodeHeader>
```yaml ## Initialization ### Add objective scoreboard objectives add wiki:world dummy ### Register
to objective scoreboard players add .Initialized wiki:world 0

## Your Commands Here (Example)

execute if score .Initialized wiki:world matches 0 run say World initialized! Pack loaded for the first time.

## Mark as Initialized

scoreboard players set .Initialized wiki:world 1

```

Here, we have used an `/execute - say` command as an example, but you can use any command you prefer and as many as you need.

Just make sure to follow the given order and properly apply the `/execute if score` condition as shown for your desired commands.

## Explanation

- **` .Initialized=0 `** world has just initialized and we are yet to run the initialization commands we need.
- **` .Initialized=1 `** world has been initialized and we have executed the initialization commands.

An objective of the name `wiki:world` is added for us to save scores to it so that we can track whether the world has been initialized or not. This also allows us to structure our commands to only execute at world initialization.

Following the creation of the objective, a score of `0` is added to the score holder '.Initialized'. This will register it to the objective and enable us to use the `/execute if score` condition to run our desired commands.

Finally, the score for the score holder '.Initialized' is set to `1` after all the commands are executed. This prevents it from executing more than once.

## Folder Structure

<FolderView
	:paths="[
    'BP',
    'BP/functions',
    'BP/functions/wiki',
    'BP/pack_icon.png',
    'BP/manifest.json',
    'BP/functions/wiki/event',
    'BP/functions/wiki/event/worlds',
    'BP/functions/wiki/event/worlds/on_initialize.mcfunction',
    'BP/functions/tick.json'
]"
></FolderView>
```
