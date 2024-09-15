---
title: Multiplayer Position Derangement
category: Functions
mention:
    - BedrockCommands
    - zheaEvyline
    - jeanmajid
description: Randomly relocate all selected targets among each other, ensuring none remain in their original position.
---

## Introduction

[Sourced Bedrock Commands Community Discord](https://discord.gg/SYstTYx5G5)

This function, created by @ZheaEvyline, allows you to randomly relocate all selected targets among each other, ensuring no target remains in its original position.

A derangement is a permutation of 'N' elements where no element appears in its original position.

For example, if Player1 was at `0,0,1`, Player2 at `0,0,2`, and Player3 at `0,0,3`, Player1 can only be relocated to `0,0,2` or `0,0,3`. The same rule applies to all other players.

---

**Key Features of this Function Pack:**

1. Guaranteed derangement in a single game-tick.
2. Minimal number of iterations (repetitions/loops).

To derange the positions of 100 targets, this function pack requires only 4-6 iterations, executing a total of 7 commands for the initiation, and 7 per iteration.

---

The number of iterations increases proportionally with the number of elements.

For reference, here is the number of derangements possible for elements ranging from 1 to 10:

| Number of Elements (N) | Number of Derangements Possible (D(N)) |
|------------------------|------------------------------|
| 1                      | 0                            |
| 2                      | 1                            |
| 3                      | 2                            |
| 4                      | 9                            |
| 5                      | 44                           |
| 6                      | 265                          |
| 7                      | 1,854                        |
| 8                      | 14,833                       |
| 9                      | 133,496                      |
| 10                     | 1,334,961                    |

The number of derangements increases rapidly as the number of elements grows.

## Steps Involved in This Method

1. Relocate each target to the position of a random one (other than its original position).
2. If multiple targets are relocated to the same position, assign it to one of them and repeat the process for the remaining targets.
3. If final target is left with no available position except its original, relocate the target in it's current position to it's original position, assigning the now freed position to the final target.

**Example Visualization:**

<video width="320" height="240" controls>
  <source src="/assets/images/commands/derangement-function/MPDVisualRep.mp4" type="video/mp4">
</video>

## Functions

An ID system is required to index the position of all targets from 1 to N, allowing us to track the original position of each target. We will run this file in the `tick.json` to automatically assign the IDs.

<CodeHeader>BP/functions/scoreboards/player/id.mcfunction</CodeHeader>

```yaml
## Register New Players to the ID Objective
scoreboard players add @e [name="Fake Player"] id 0

## Create New ID
execute if entity @e [name="Fake Player", scores={id=0}] run scoreboard players add Total id 1

## Assign the New ID
scoreboard players operation @r [type=armor_stand, name="Fake Player", scores={id=0}] id = Total id
```
---

This is the function you run (once) each time you need to derange the positions of all targets:

- `/function events/player/derange_position/initiate`

<CodeHeader>BP/functions/events/player/derange_position/initiate.mcfunction</CodeHeader>

```yaml
## Summon Position Marker
execute at @a run summon armor_stand "Position Marker" ~~~

## Save Original Position to Ignore
execute as @a at @s run scoreboard players operation @e [type=armor_stand, name="Position Marker", r=0.01, c=1] id = @s id

## Initiate Position Derangement Process
function events/player/derange_position/process

## Run Process One Last Time if Final Player Has a Valid Position Available
execute if score NonAllocatedPlayers count matches 1 unless score @a [tag=!posAllocated, c=1] id = @e [type=armor_stand, name="Position Marker", c=1] id run function events/player/derange_position/process

## Resolve Collision if Final Player Has No Valid Position Available
### relocate the allocated player to their colliding player's original position to free their position for the colliding player
execute as @a [tag=!posAllocated] at @s run tp @r [tag=posAllocated, r=0.01] @e [type=armor_stand, name="Position Marker", c=1]
### remove colliding player's position marker and tag
kill @e [type=armor_stand, name="Position Marker"]
tag @a remove posAllocated
```

In case a single target is left with no available position except its original, the final 3 commands will resolve the collision. We call it a collision because when this occurs, the target will be at the allocated position of another target.

---
The actual randomized derangement process will be performed by this function below:

<CodeHeader>BP/functions/events/player/derange_position/process.mcfunction</CodeHeader>

```yaml
## Move to a Different Position
execute as @a [tag=!posAllocated] at @s run tp @s @r [type=armor_stand, name="Position Marker", rm=0.01]

## Move Again if Returned to Original Position
execute as @a [tag=!posAllocated] at @s if score @s id = @e [type=armor_stand, name="Position Marker", r=0.01, c=1] id run tp @s @r [type=armor_stand, name="Position Marker", rm=0.01]

## Add Tag to Ignore Players with a Position Allocated
execute as @e [type=armor_stand, name="Position Marker"] at @s run tag @a [tag=!posAllocated, r=0.01, c=1] add posAllocated

## Remove Allocated Position Markers
execute as @a [tag=posAllocated] at @s run kill @e [type=armor_stand, name="Position Marker", r=0.01, c=1]


# ENTITY COUNTER

## Get Player Count of Players Without a Position Allocated
scoreboard players set * count 0
execute as @a [tag=!posAllocated] run scoreboard players add NonAllocatedPlayers count 1

## Loop Function if 2+ Players Are Not Allocated a Position
execute if score NonAllocatedPlayers count matches 2.. run function events/player/derange_position/process
```
---
Now, for our functions to actually work, we will need to add the following objectives on our world:

<CodeHeader>BP/functions/scoreboards/objective/add_all.mcfunction</CodeHeader>

```yaml
scoreboard objectives add id dummy
scoreboard objectives add count dummy
```
---
If you wish to add the objectives automatically as soon as you load the world, you may create the function file below:

<CodeHeader>BP/functions/events/world/on_initialise.mcfunction</CodeHeader>

```yaml
## Initialisation
### add objective
scoreboard objectives add world dummy
### register to objective
scoreboard players add initialised world 0

## Commands to Execute
execute if score initialised world matches 0 run function scoreboards/objective/add_all

## Mark As Initialised
scoreboard players set initialised world 1
```

## Tick JSON

Finally, create your `tick.json` file:

<CodeHeader>BP/functions/tick.json</CodeHeader>

```json
{
  "values": [
    "events/world/on_initialise",
    "scoreboards/player/id"
  ]
}
```

## Download Function Pack

For convenience, you can download the `.mcpack` for the Function Pack here:

<Card image="/assets/images/commands/BClogo.png" title="Download" link="https://github.com/BedrockCommands/developer-packs/releases/download/mpd/Multiplayer_Position_Derangement.FP.mcpack">

</Card>

Simply activate the pack on your world and run the following command in multiplayer:

```yaml
/function events/player/derange_position/initiate
```
