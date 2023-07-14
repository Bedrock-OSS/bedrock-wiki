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
The scoreboard alive must be initilaized for this to funtion. to initialize this automatically without the need to have a a player with command previlages, follow the process outlined in [on first world load](/commands/on-first-world-load).

If you prefer to initialize manually this can be completed using the following command:

`/scoreboard objectives add total dummy`

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

Similarly we're running a `/title` command as an example;
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

## Tick Json
To get this funtion to run in a loop contuously it must be added to tick.json or a command block. Multiple files can  added to the tick.json by placing a ccommon after each string. See [Functions](/commands/mcfunctions#tick-json) for more details.

<CodeHeader>BP/functions/tick.json</CodeHeader>
```json
{
  "values": [
    "entity_counter"
  ]
}
```
## Folder Structure
The structure of this behavior pack would be as follows.

## Folder Structure

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
## notes on Compatibbility
The Scoreboard names (onlinePlayers in this case) may end up being used by other people. appending and _ and a set of randomly generated characters after onlinePlayers would be a choice that reduces the probability of colisions. Similar techniques can be employed for the filenames in the .mcfunction files.

