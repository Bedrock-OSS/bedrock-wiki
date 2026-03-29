---
title: Rain Detection
category: Detection Systems
mentions:
    - BedrockCommands
    - zheaEvyline
description: Detect rain using commands.
---

## Introduction

[Sourced from the Bedrock Commands Community (BCC) Discord](https://bedrockcommands.org/)

This system allows you to execute commands automatically whenever it begins raining in the Overworld.

:::warning Limitation:
This system relies on the mechanic where fire is immediately extinguished by rain. Therefore, the **Fire Spread** gamerule must be enabled for this system to function correctly.
:::

## Setup

_Type the following command in Chat:_

`/scoreboard objectives add wiki:q.is_raining dummy`

If you are using functions and prefer the objective to be added automatically during world initialization, follow the process outlined in [On First World Load](/commands/on-first-world-load).

**Next Steps:**
1. Choose a coordinate in the Overworld located within a ticking area or a chunk that remains permanently loaded.
2. Ensure there are no blocks above this coordinate obstructing it from the sky.
3. Secure the area so players cannot interfere with the detection block (fire).

## System

<CodeHeader>BP/functions/wiki/detect/weather/is_raining.mcfunction</CodeHeader>

```yaml
## State Machine
### If fire is gone and wasn't already raining, set to state 1 (Just Started)
execute unless block 0 0 0 fire unless score .Weather wiki:q.is_raining matches 2 run scoreboard players set .Weather wiki:q.is_raining 1
### If fire is still there, set to state 0 (Clear Weather)
execute if block 0 0 0 fire run scoreboard players set .Weather wiki:q.is_raining 0

## Maintain Fire
### Place new fire block at the coordinate for check, next game tick
setblock 0 0 0 fire

## Your Commands Here (Examples):
### Runs every tick while it is raining
execute if score .Weather wiki:q.is_raining matches 1.. run title @a actionbar It is raining.
### Runs only once when the rain first starts
execute if score .Weather wiki:q.is_raining matches 1 run say It has started raining.
### Runs every tick when it is not raining
execute if score .Weather wiki:q.is_raining matches 0 run title @a actionbar It's not raining.

## Update State
### Move from state 1 to state 2 to stop the "once" command from looping
execute if score .Weather wiki:q.is_raining matches 1 run scoreboard players set .Weather wiki:q.is_raining 2
```

It is a requirement to follow this same sequence and properly apply the `execute if score .Weather wiki:q.is_raining matches` structure as shown for your desired commands. Also, remember to replace the placeholder coordinates `(0, 0, 0)` with the actual detection coordinate used in your world.

## Folder Structure

If you are using functions, organize your behavior pack as follows:

<FolderView
	:paths="[
    'BP',
    'BP/functions',
    'BP/pack_icon.png',
    'BP/manifest.json',
    'BP/functions/wiki',
    'BP/functions/wiki/main',
    'BP/functions/wiki/detect',
    'BP/functions/wiki/detect/weather',
    'BP/functions/wiki/detect/weather/is_raining.mcfunction',
    'BP/functions/tick.json'
]"
></FolderView>

In this setup, the `is_raining` function is called by `main.mcfunction`, which is executed every tick via `tick.json`.