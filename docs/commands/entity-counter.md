---
title: Entity Counter
category: Scoreboard Systems
mentions:
    - BedrockCommands
    - zheaEvyline
nav_order: 3
description: This system allows you to track the total number of players/entities on your world and subsequently execute your desired commands based on the values obtained.
---

## Introduction

[Sourced by the Bedrock Commands Community (BCC) Discord](https://bedrockcommands.org/)

This system allows you to track the total number of players/entities on your world and subsequently execute your desired commands based on the values obtained.

> Note: Entities in unloaded chunks will not be tracked. However, players can be tracked regardless.

## Setup

_To be typed in Chat:_

`/scoreboard objectives add wiki:count dummy`

If you are working with functions and prefer to have the objective added automatically on world initialisation, follow the process outlined in [On First World Load](/commands/on-first-world-load).

## System

<CodeHeader>BP/functions/wiki/scoreboard/players/tally_count.mcfunction</CodeHeader>

```yaml
## Reset Previous Count
scoreboard players set * wiki:count 0

## Get Current Count (Examples)
### Alive players
execute as @e[type=player] run scoreboard players add .Players.Alive wiki:count 1
### Creeper
execute as @e[type=creeper] run scoreboard players add .Creeper wiki:count 1

## Your Commands Here (Examples)
### Message if 4+ alive players
execute if score .Players.Alive wiki:count matches 4.. run title @a actionbar There are more than 4 players on the world.
### Message if 3 or less creeper
execute if score .Creeper wiki:count matches ..3 run title @a actionbar There are less than 3 creeper on the world.
```

![Chain of 5 Command Blocks](/assets/images/commands/command-block-chain/5.png)

Here, we are tracking alive players and creeper as examples, but you can track any entity you like and as many as you need. You may also alter the score holder names to your preference. Example: '.Players.Alive' to just 'Players'.

Similarly, we're running `/title` commands as examples:

-   a) when there are 4 or more players `4..`
-   b) when there are 3 .Creeper or less `..3`

You can modify/expand these as well. Example: a `/kill` command instead of a `/title` command.

## Explanation

1. **Command 1:** Sets the score to `0` for all score holder names in the `wiki:count` scoreboard objective, including that of any tracked players and entities.
2. **Command 2, 3:** From each target that you want to track the count of, a score will be added to their corresponding score holder name. Thus, obtaining their total count.
    - Example: Creeper mobs to '.Creeper' score holder name.
3. **Command 4, 5:** These are example commands which can be modified / expanded.
    - Based on the total count obtained, we can use the `/execute if score` condition to run our desired commands when certain values are met.
        - **`n`** any number _n_
        - **`n..`** any number _n_ and above
        - **`..n`** any number _n_ and below
        - **`n..n1`** any number _n_ to any number _n1_. (smaller number first)

:::info NOTE:
When working with numerous score holders across multiple objectives, it is advisable to reset previous score to zero for each score holder individually rather than using the wildcard (` * `), for better performance.
:::

## Tick JSON

If you are using functions instead of command blocks, the `tally_count` function must be added to the `tick.json` in order to loop and run it continuously. Multiple files can be added to the `tick.json` by placing a comma after each string. Refer to [Functions](/commands/mcfunctions#tick-json) documentation for further info.

<CodeHeader>BP/functions/tick.json</CodeHeader>
```json
{
  "values": [
    "wiki/scoreboard/players/tally_count"
  ]
}
```

If using functions, your pack folder structure will be as follows:

<FolderView
	:paths="[
    'BP',
    'BP/functions',
    'BP/pack_icon.png',
    'BP/manifest.json',
    'BP/functions/wiki',
    'BP/functions/wiki/scoreboard',
    'BP/functions/wiki/scoreboard/players',
    'BP/functions/wiki/scoreboard/players/tally_count.mcfunction',
    'BP/functions/tick.json'
]"
></FolderView>
