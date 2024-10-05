---
title: Multiplayer Position Rearrangement
category: Functions
mention:
    - BedrockCommands
    - zheaEvyline
    - jeanmajid
description: Randomly relocate all selected targets among each other, ensuring none remain in their original position.
---

## Introduction

[Sourced By Bedrock Commands Community Discord](https://discord.gg/SYstTYx5G5)

Multiplayer Position Rearrangement function, or more accurately Multiplayer Position Derangement function, created by @ZheaEvyline, allows you to randomly relocate all selected targets among each other, ensuring no target remains in its original position.

A derangement is a permutation of 'N' elements where no element appears in its original position.

For example, if Player1 was at `(0, 0, 1)`, Player2 at `(0, 0, 2)`, and Player3 at `(0, 0, 3)`, Player1 can only be relocated to `(0, 0, 2)`, or `(0, 0, 3)`. The same rule applies to all other players.

<br>

**Key Features of this Function Pack:**

1. Guaranteed derangement in a single game-tick.
2. Minimal number of iterations (repetitions/loops).
3. Cross Dimensional Compatibility.

To derange the positions of 100 targets, this function pack requires only 4-6 iterations, executing a total of 7 commands for the initiation, and 9 per iteration.

<br>

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

The number of derangement possibilities increases rapidly as the number of elements grows.

## Steps Involved in This Method

1. Relocate each target to the position of a random one (other than its original position).
2. If multiple targets are relocated to the same position, assign it to one of them and repeat the process for the remaining targets.
3. If final target is left with no available position except its original, relocate the target in it's current position to it's original position, assigning the now freed position to the final target.

**Example Visualization:**

![Position of Five Players Being Deranged](/assets/images/commands/rearrange-positions/MPDVisualRep.gif)

## Functions

An ID system is required to index the position of all targets from 1 to N, allowing us to track the original position of each target. We will run this file in the `tick.json` to automatically assign the IDs.

<CodeHeader>BP/functions/scoreboards/player/id.mcfunction</CodeHeader>

```yaml
## Register New Players to the ID Objective
scoreboard players add @a id 0

## Create New ID
execute if entity @a [scores={id=0}] run scoreboard players add Total id 1

## Assign the New ID
scoreboard players operation @r [scores={id=0}] id = Total id
```

<br>

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
### Relocate the allocated player to their colliding player's original position to free their position for the colliding player
execute as @a [tag=!posAllocated] at @s run tp @r [tag=posAllocated, r=0.01] @e [type=armor_stand, name="Position Marker", c=1]
### Remove colliding player's position marker and tag
kill @e [type=armor_stand, name="Position Marker"]
tag @a remove posAllocated
```

In case a single target is left with no available position except its original, the final 3 commands will resolve the collision. We call it a collision because when this occurs, the target will be at the allocated position of another target.

<br>

The actual randomized derangement process will be performed by this function below:

<CodeHeader>BP/functions/events/player/derange_position/process.mcfunction</CodeHeader>

```yaml
## Move to a Different Position
execute as @a [tag=!posAllocated] at @s run function events/player/derange_position/teleport

## Move Again if Returned to Original Position
execute as @a [tag=!posAllocated] at @s if score @s id = @e [type=armor_stand, name="Position Marker", r=0.01, c=1] id run function events/player/derange_position/teleport

## Add Tag to Ignore Players with a Position Allocated
execute as @e [type=armor_stand, name="Position Marker"] at @s run tag @a [tag=!posAllocated, r=0.01, c=1] add posAllocated

## Remove Allocated Position Markers
execute as @a [tag=posAllocated] at @s run kill @e [type=armor_stand, name="Position Marker", r=0.01, c=1]


# ENTITY COUNTER

## Get Player Count of Players Without a Position Allocated
scoreboard players set NonAllocatedPlayers count 0
execute as @a [tag=!posAllocated] run scoreboard players add NonAllocatedPlayers count 1

## Loop Function if 2+ Players Are Not Allocated a Position
execute if score NonAllocatedPlayers count matches 2.. run function events/player/derange_position/process
```

<br>

-   ❌️ `tp @s @r [type=armor_stand, name="Position Marker", rm=0.01]`

Directly using this command to teleport to a new position only works within the current dimension. Therefore, instead of that, we use the following three-command function for cross-dimensional compatibility:

<CodeHeader>BP/functions/events/player/derange_position/teleport.mcfunction</CodeHeader>

```yaml
tag @e [type=armor_stand, name="Position Marker", r=0.01, c=1] add ignoredPos
tp @s @r [type=armor_stand, name="Position Marker", tag=!ignoredPos]
tag @e remove ignoredPos
```

<br>

Now, for our functions to actually work, we will need to add the following objectives on our world:

<CodeHeader>BP/functions/scoreboards/objective/add_all.mcfunction</CodeHeader>

```yaml
scoreboard objectives add id dummy
scoreboard objectives add count dummy
```

<br>

If you wish to add the objectives automatically as soon as you load the world, you may create the function file below:

<CodeHeader>BP/functions/events/world/on_initialise.mcfunction</CodeHeader>

```yaml
## Initialisation
### Add objective
scoreboard objectives add world dummy
### Register to objective
scoreboard players add Initialised world 0

## Commands to Execute
execute if score Initialised world matches 0 run function scoreboards/objective/add_all

## Mark as Initialised
scoreboard players set Initialised world 1
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

## Folder Structure

<FolderView
	:paths="[
    'BP',
    'BP/functions',
    'BP/manifest.json',
    'BP/pack_icon.png',
    'BP/functions/scoreboards',
    'BP/functions/scoreboards/player',
    'BP/functions/scoreboards/player/id.mcfunction',
    'BP/functions/scoreboards/objective',
    'BP/functions/scoreboards/objective/add_all.mcfunction',
    'BP/functions/events',
    'BP/functions/events/world',
    'BP/functions/events/world/on_initialise.mcfunction',
    'BP/functions/events/player',
    'BP/functions/events/player/derange_position',
    'BP/functions/events/player/derange_position/initiate.mcfunction',
    'BP/functions/events/player/derange_position/process.mcfunction',
    'BP/functions/events/player/derange_position/teleport.mcfunction',
    'BP/functions/tick.json'
]"
></FolderView>

## Download Function Pack

For convenience, you can download the `.mcpack` for the Function Pack here:

<Card image="/assets/images/commands/BClogo.png" title="Download" link="https://github.com/BedrockCommands/developer-packs/releases/download/mpd/Multiplayer_Position_Derangement.FP.mcpack">

</Card>

Simply activate the pack on your world and run once (each time you need) the following command in multiplayer:

```yaml
/function events/player/derange_position/initiate
```
