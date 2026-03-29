---
title: On First World Load
category: On Event Systems
mentions:
    - BedrockCommands
    - zheaEvyline
    - SmokeyStack
    - cda94581
nav_order: 0
tags:
    - function
description: This system executes specific commands when a world is loaded for the first time after applying your pack.
---

## Introduction

[Sourced by the Bedrock Commands Community (BCC) Discord](https://bedrockcommands.org/)

This system allows you to run specific commands the very first time a world is loaded after your pack has been applied.

> **Note:** A [Function](/commands/mcfunctions) Pack is required for this system. The `tick.json` file is necessary to trigger the logic as soon as the world initializes.

## Tick JSON

<CodeHeader>BP/functions/tick.json</CodeHeader>
```json
{
  "values": [
    "wiki/main"
  ]
}
````

## Main MCFUNCTION

<CodeHeader>BP/functions/wiki/main.mcfunction</CodeHeader>

```yaml
# ON FIRST WORLD LOAD
## Execute Function if World Not Initialized
execute unless score .World wiki:q.is_initialised matches 1 run function wiki/event/worlds/on_initialise
```

## System

<CodeHeader>BP/functions/wiki/event/worlds/on_initialise.mcfunction</CodeHeader>

```yaml
## Your Commands Here (Example)
say World initialized! Pack loaded for the first time.

## Initialization
### Add objective
scoreboard objectives add wiki:q.is_initialised dummy
### Mark as Initialized
scoreboard players set .World wiki:q.is_initialised 1
```

Once your desired commands have been executed, the system creates a scoreboard objective titled `wiki:q.is_initialised`. This objective tracks the world's initialization state via a specific score holder named `.World`. By immediately setting the score for `.World` to `1`, the system ensures the initialization logic is "locked," preventing it from re-running during subsequent ticks or world reloads.

## Folder Structure

<FolderView
	:paths="[
    'BP',
    'BP/functions',
    'BP/functions/wiki',
    'BP/functions/wiki/main.mcfunction',
    'BP/pack_icon.png',
    'BP/manifest.json',
    'BP/functions/wiki/event',
    'BP/functions/wiki/event/wolrds',
    'BP/functions/wiki/event/worlds/on_initialise.mcfunction',
    'BP/functions/tick.json'
]"
></FolderView>

In this setup, the `on_initialise` function is called by `main.mcfunction`, which is executed every tick via `tick.json`.