---
title: On First World Load
category: On Event Systems
mention:
    - BedrockCommands
    - zheaEvyline
nav_order: 0
tags:
    - system
---

## Introduction

[Sourced By Bedrock Commands Community Discord](https://discord.gg/SYstTYx5G5)

This system will run your desired commands on the event that the world is loaded for the first time.
> Note; a [Function](/commands/functions.html) Pack is required to achieve this system since it is the `tick.json` file which allows us to run commands as soon as the world is initialized.

## Folder Structure

<FolderView
	:paths="[
    'BP',
    'BP/functions',
    'BP/pack_icon.png',
    'BP/manifest.json',
    'BP/functions/initialise.mcfunction',
    'BP/functions/tick.json'
]"
></FolderView>

## Tick Json

<CodeHeader>BP/functions/tick.json</CodeHeader>
```json
{
  "values": [
    "initialise"
  ]
}
```

## System

<CodeHeader>BP/functions/initialise.mcfunction</CodeHeader>
```yaml
/scoreboard objectives add world dummy
/scoreboard players add world initialised 0 


#Your Commands Here (example)
/execute if score world initialised 0 run say New world created!


/scoreboard players set world initialised 1
```

Here we have used an `/execute - say` command as an example but you can use any command you prefer and as many as you require.

Just make sure to follow the given order and properly use the `/execute if score` command as shown to run the commands you need.

## Explanation

- **` initialised=0 `** this means the world has just initialised and we are yet to run the initlisation commands.
- **` initialised=1 `** this means the world has been initialised and we have already run the initialisation commands.

An objective of the name `world` is added for us to save scores to it so that we can track whether the world has been initialised or not. This also allows us to structure our commands to only execute at world initialisation.

Following the creation of the objective, a score of `0` is added to the FakePlayer name `initialised`. This will register it to the objective and enable us to use the `/execute if score` command structure to run our desired commands.

Finally the score for `initialised` is set to 1 after all the commands are run in order to prevent it from executing more than once.
