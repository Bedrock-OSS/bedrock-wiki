```yaml
title: On Dimension Enter
category: On Event Systems
tags:
    - easy
mentions:
    - xyztoast
nav_order: 5
description: This system will run your desired commands when a player enters a different dimension.
```

## Introduction

[Sourced by the Bedrock Commands Community (BCC) Discord](https://bedrockcommands.org/)

This system checks which dimension each player is in and runs commands when that dimension changes. It checks the Overworld, Nether, and End once per tick.

## Setup

*Type the following command in Chat:*

`/scoreboard objectives add wiki:dimension dummy`

If you are working with functions and prefer to have the objective added automatically on world initialization, follow the process outlined in [On First World Load](/commands/on-first-world-load).

## System

The dimension checks use `/execute in` with a position below the normal playable area and a distance selector. This lets each check target players in that dimension. See the [Bedrock Wiki execute guide](https://wiki.bedrock.dev/commands/new-execute) for the dimension execution context and example.

<CodeHeader path="BP/functions/wiki/event/dimensions/on_enter.mcfunction" />

```yaml
## Give untracked players a score of 0
scoreboard players add @a wiki:dimension 0

## Dimension IDs: 1 = Overworld, 2 = Nether, 3 = The End
## Run the matching event function when a player's saved dimension is different
execute in overworld positioned 0 -100 0 as @a[rm=1] unless score @s wiki:dimension matches 1 run give @a dirt
execute in nether positioned 0 -100 0 as @a[rm=1] unless score @s wiki:dimension matches 2 run give @a netherrack
execute in the_end positioned 0 -100 0 as @a[rm=1] unless score @s wiki:dimension matches 3 run give @a end_stone
```

The commands above use the normal Bedrock dimension identifiers: `overworld`, `nether`, and `the_end`. This checks those three dimensions only.

## Explanation

The `wiki:dimension` objective stores each player's last detected dimension. The system assigns `1` to the Overworld, `2` to the Nether, and `3` to The End.

Each tick, the system checks each dimension. If a player's stored value does not match the dimension they are currently in, it calls that dimension's event function. That function updates the score and then runs your commands.

A player without a saved score is treated as untracked. Their first dimension check will run that dimension's event function, including when the pack starts while they are already in the world. If you do not want that first check to count as an entry, initialize their score another way before enabling the loop.

Because this is a polling system, it detects the change on the next tick rather than at the exact instant the player crosses dimensions.
