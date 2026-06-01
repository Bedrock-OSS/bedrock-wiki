---
title: Multiplayer Position Rearrangement
category: Useful Creations
mentions:
    - BedrockCommands
    - zheaEvyline
    - jeanmajid
tags:
    - function
description: Randomly relocate all selected targets among each other, ensuring none remain in their original position.
---

## Introduction

[Sourced by the Bedrock Commands Community (BCC) Discord](https://bedrockcommands.org/)

Multiplayer Position Rearrangement function, or more accurately Multiplayer Position Derangement function, created by @ZheaEvyline, allows you to randomly relocate all selected targets among each other, ensuring no target remains in its original position.

A derangement is a permutation of 'N' elements where no element appears in its original position.

For example, if Player1 was at `(0, 0, 1)`, Player2 at `(0, 0, 2)`, and Player3 at `(0, 0, 3)`, Player1 can only be relocated to `(0, 0, 2)`, or `(0, 0, 3)`. The same rule applies to all other players.

<br>

**Key Features of this Function Pack:**

1. Guaranteed derangement in a single game-tick.
2. Minimal number of iterations (repetitions/loops).
3. Cross Dimensional Compatibility.

This function pack is designed to support an unlimited number of targets. However, due to Bedrock limitations, it will halt once the `10,000` function execution limit is reached.

For instance, deranging the positions of 100 targets requires only 4-6 iterations, with 7 commands executed during initialization and 9 per iteration. This totals approximately 60 commands, significantly below the function limit.

<br>

The number of iterations increases proportionally with the number of elements.

For reference, here is the number of derangements possible for elements ranging from 1 to 10:

| Number of Elements (N) | Number of Derangements Possible (D(N)) |
| ---------------------- | -------------------------------------- |
| 1                      | 0                                      |
| 2                      | 1                                      |
| 3                      | 2                                      |
| 4                      | 9                                      |
| 5                      | 44                                     |
| 6                      | 265                                    |
| 7                      | 1,854                                  |
| 8                      | 14,833                                 |
| 9                      | 133,496                                |
| 10                     | 1,334,961                              |

The number of derangement possibilities increases rapidly as the number of elements grows.

## Steps Involved in This Method

1. Relocate each target to the position of a random one (other than its original position).
2. If multiple targets are relocated to the same position, assign it to one of them and repeat the process for the remaining targets.
3. If final target is left with no available position except its original, relocate the target in it's current position to it's original position, assigning the now freed position to the final target.

**Example Visualization:**

![Position of Five Players Being Deranged](2d-visualization.gif)

## Functions

An ID system is required to index the position of all targets from 1 to N, allowing us to track the original position of each target. We will run this function whenever a player joins the world for the first time to automatically assign the IDs.

<CodeHeader>BP/functions/wiki/event/players/on_first_join.mcfunction</CodeHeader>

```yaml
## Player ID System
### Create a new ID
scoreboard players add .Total wiki:id 1
### Assign the new ID
scoreboard players operation @s wiki:id = .Total wiki:id

## Tag player to be ignored
tag @s add wiki:joined
```

<br>

This is the function you run (once) each time you need to derange the positions of all targets:

-   `/function wiki/derange_position/initiate`

<CodeHeader path="BP/functions/wiki/derange_position/initiate.mcfunction" />

```yaml
## Summon Position Marker
execute at @a run summon armor_stand "wiki:position_marker" ~~~

## Save Original Position to Ignore
execute as @a at @s run scoreboard players operation @e[type=armor_stand,name="wiki:position_marker",r=0.01,c=1] wiki:id = @s wiki:id

## Initiate Position Derangement Process for All Targets
function wiki/derange_position/process

## Run Process One Last Time if Final Player Has a Valid Position Available
execute if score .Players.NotAllocated wiki:count matches 1 unless score @a[tag=!wiki:pos.allocated,c=1] wiki:id = @e[type=armor_stand,name="wiki:position_marker",c=1] wiki:id run function wiki/derange_position/process

## Resolve Collision if Final Player Has No Valid Position Available
### relocate the allocated player to their colliding player's original position to free their position for the colliding player
execute as @a[tag=!wiki:pos.allocated] at @s run tp @r[tag=wiki:pos.allocated,r=0.01] @e[type=armor_stand,name="wiki:position_marker",c=1]
### remove colliding player's position marker and tag
kill @e[type=armor_stand,name="wiki:position_marker"]
tag @a[tag=wiki:pos.allocated] remove wiki:pos.allocated
```

In case a single target is left with no available position except its original, the final 3 commands will resolve the collision. We call it a collision because when this occurs, the target will be at the allocated position of another target.

<br>

The actual randomized derangement process will be performed by this function below:

<CodeHeader path="BP/functions/wiki/derange_position/process.mcfunction" />

```yaml
## Move to a Different Position
execute as @a[tag=!wiki:pos.allocated] at @s run function wiki/derange_position/teleport

## If Returned to Original Position: Move Again
execute as @a[tag=!wiki:pos.allocated] at @s if score @s wiki:id = @e[type=armor_stand,name="wiki:position_marker",r=0.01,c=1] wiki:id run function wiki/derange_position/teleport

## Add Tag to Ignore Players with a Position Allocated
execute as @e[type=armor_stand,name="wiki:position_marker"] at @s run tag @a[tag=!wiki:pos.allocated,r=0.01,c=1] add wiki:pos.allocated

## Remove Allocated Position Markers
execute as @a[tag=wiki:pos.allocated] at @s run kill @e[type=armor_stand,name="wiki:position_marker",r=0.01,c=1]


# ENTITY COUNTER

## Get Player Count of Players Without a Position Allocated
scoreboard players set .Players.NotAllocated wiki:count 0
execute as @a[tag=!wiki:pos.allocated] run scoreboard players add .Players.NotAllocated wiki:count 1

## If 2+ Players Are Not Allocated a Position: Loop Function
execute if score .Players.NotAllocated wiki:count matches 2.. run function wiki/derange_position/process
```

<br>

-   ❌️ `tp @s @r[type=armor_stand,name="wiki:position_marker",rm=0.01]`

Directly using this command to teleport to a new position only works within the current dimension. Therefore, instead of that, we use the following three-command function for cross-dimensional compatibility:

<CodeHeader path="BP/functions/wiki/derange_position/teleport.mcfunction" />

```yaml
tag @e[type=armor_stand,name="wiki:position_marker",r=0.01] add wiki:pos.ignored
tp @s @r[type=armor_stand,name="wiki:position_marker",tag=!wiki:pos.ignored]
tag @e remove wiki:pos.ignored
```

<br>

Now, for our functions to actually work, we will need to add the following objectives on our world:

<CodeHeader path="BP/functions/wiki/scoreboard/objectives/add_all.mcfunction" />

```yaml
scoreboard objectives add wiki:id dummy
scoreboard objectives add wiki:count dummy
```

<br>

If you wish to add the objectives automatically as soon as you load the world, you may create the function file below:

<CodeHeader path="BP/functions/wiki/event/worlds/on_initialize.mcfunction" />

```yaml
## Add Objectives
function wiki/scoreboard/objectives/add_all

## Initialization
### Add objective
scoreboard objectives add wiki:q.is_initialised dummy
### Mark as Initialized
scoreboard players set .World wiki:q.is_initialised 1
```

## Tick JSON

Finally, create your `main.mcfunction` and `tick.json` files:

<CodeHeader>BP/functions/wiki/main.mcfunction</CodeHeader>

```yaml
# ON FIRST WORLD LOAD
## Execute Function if World Not Initialized
execute unless score .World wiki:q.is_initialised matches 1 run function wiki/event/worlds/on_initialise


# ON PLAYER FIRST JOIN
## Execute Function for All Players Without the 'wiki:joined' Tag
execute as @a[tag=!wiki:joined] run function wiki/event/players/on_first_join
```

<CodeHeader>BP/functions/tick.json</CodeHeader>

```json
{
    "values": ["wiki/main"]
}
```

## Folder Structure

<FolderView :paths="[
    'BP/functions/wiki/derange_position/initiate.mcfunction',
    'BP/functions/wiki/derange_position/process.mcfunction',
    'BP/functions/wiki/derange_position/teleport.mcfunction',
    'BP/functions/wiki/event/worlds/on_initialize.mcfunction',
    'BP/functions/wiki/event/players/on_first_join.mcfunction',
    'BP/functions/wiki/scoreboard/objectives/add_all.mcfunction',
    'BP/functions/wiki/main.mcfunction',
    'BP/functions/tick.json',
    'BP/manifest.json',
    'BP/pack_icon.png',
]" />

## Download Function Pack

For convenience, you can download the `.mcpack` for the Function Pack here:

<Card
    image="/assets/images/discord/bcc.png"
    title="Download"
    link="https://github.com/BedrockCommands/developer-packs/releases/download/mpd/Multiplayer_Position_Derangement.FP.mcpack"
/>

Simply activate the pack on your world and run once (each time you need) the following command in multiplayer:

```yaml
/function wiki/derange_position/initiate
```
