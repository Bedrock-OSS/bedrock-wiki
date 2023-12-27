---
title: Entity Counter
category: Scoreboard Systems
mentions:
    - BedrockCommands
    - zheaEvyline
nav_order: 3
tags:
    - system
---

## Introduction

[Sourced By Bedrock Commands Community Discord](https://discord.gg/SYstTYx5G5)

This system allows you to track how many players/entities are there on your world and run your desired commands based on the values obtained.

> Note: you cannot track entities in unloaded chunks though players can still be tracked regardless.

## Setup

*To be typed in Chat:*

`/scoreboard objectives add total dummy`

If you prefer to have the objective added automatically on world initialisation, follow the process outlined in [On First World Load.](/commands/on-first-world-load)

## System

<CodeHeader>BP/functions/entity_counter.mcfunction</CodeHeader>

```yaml
scoreboard players set onlinePlayers total 0
execute as @e [type=player] run scoreboard players add onlinePlayers total 1

#Your Commands Here (examples)
execute if score onlinePlayers total matches 4.. run title @a actionbar Enough players to start game.
execute if score onlinePlayers total matches ..3 run title @a actionbar Not enough players.
```
![commandBlockChain3](/assets/images/commands/commandBlockChain/3.png)


Here we have used a FakePlayer name `onlinePlayers` and targeting `@e [type=player]` to track how many players are currently on the world. However you may use any FakePlayer name and target any entity you might need. Such as `@e [type=creeper]`

Similarly we're running a `/title` command as an example:
- a) when there are 4 or more players `4..`
- b) when there are 3 players or less `..3`

You can edit this as well to suit your need.

## Explanation

- The first two commands in the system sets the FakePlayer name's score to 0 (here `onlinePlayers`) and from each loaded entity we want to track (here `type=player`) it will add a score to the specified FakePlayer name (here `onlinePlayers`)

Now based on the values obtained we can use the `/execute if score` command to run our desired commands when certain values are met.
- **` n `** any number n
- **` n.. `** any number n and above
- **` ..n `** any number n and below
- **` n1..n2 `** any number n1 to any number n2.

## Tick JSON

If you are using functions instead of command blocks, the ` entity_counter ` function must be added to the ` tick.json ` in order to loop and run it continuously. Multiple files can be added to the ` tick.json ` by placing a comma after each string. Refer to [Functions](/commands/mcfunctions#tick-json) documentation for further info.

<CodeHeader>BP/functions/tick.json</CodeHeader>
```json
{
  "values": [
    "entity_counter"
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
    'BP/functions/entity_counter.mcfunction',
    'BP/functions/tick.json'
]"
></FolderView>

> **Note:** the scoreboard names (in this case: 'total') may end up being used by other people. Appending ` _ ` and a set of randomly generated characters after would be a choice that reduces the probability of collisions. Similar technique can be employed for the ` .mcfunction ` filenames. Ex:
> - ` total_0fe678 `
> - ` entity_counter_0fe678.mcfunction `
