---
title: Assign Unique Scores
category: Scoreboard Systems
tags:
    - intermediate
license: true
mentions:
    - katsutosakae
    - akiponggg0119
description: Learn how to give every entity its own unique ID score so that commands can tell identical targets apart
---

## Introduction

Commands often need to tell two identical entities apart. A tag cannot do this, because a tag is only on or off. It holds no value, so every tagged entity looks the same.

A **unique ID** solves this. It is a score that only one entity has. That number can then be copied onto the entities it spawns, so a parent and all of its children carry the same value. [Comparing those scores](/commands/comparing-scores) tells you which entities belong to which parent, and which belong to someone else. This is what makes an entity based system work in multiplayer, where the same commands run for every player at once.

The system below hands out these IDs in one tick, however many entities appear at once, and is safe to run forever.

## Setup

_Type the following command in Chat:_

`/scoreboard objectives add wiki:unique_id dummy`

If you are working with functions and prefer to have the objective added automatically on world initialization, follow the process outlined in [On First World Load](/commands/on-first-world-load).

## System

<CodeHeader path="BP/functions/wiki/scoreboard/entities/assign_unique_id.mcfunction" />

```yaml
## Start Tracking Every Entity (Existing Scores Are Kept)
scoreboard players add @e wiki:unique_id 0

## Remember the Highest ID Handed Out So Far
scoreboard players operation .Max wiki:unique_id > * wiki:unique_id

## Number the Untagged Entities From 1 to n
execute as @e[tag=!wiki:set_unique_id,scores={wiki:unique_id=0}] at @e[tag=!wiki:set_unique_id,scores={wiki:unique_id=0}] run scoreboard players add @s wiki:unique_id 1

## Offset Them Past Every ID That Already Exists
scoreboard players operation @e[tag=!wiki:set_unique_id,scores={wiki:unique_id=0..}] wiki:unique_id += .Max wiki:unique_id

## Mark Them as Done
tag @e[tag=!wiki:set_unique_id,scores={wiki:unique_id=0..}] add wiki:set_unique_id
```

![Chain of 5 Command Blocks](/assets/images/commands/command-block-chain/5.png)

:::warning
The order matters. `.Max` must be read before any new ID is written, or the temporary values from command 3 would count as existing IDs.
:::

## Explanation

**Command 1:** Adding `0` starts tracking every entity and leaves existing scores alone. An entity that has never been seen starts at `0`, and that `0` is what marks it as new.

**Command 2:** The `>` operation keeps the larger of the two values, so running it against the wildcard (`*`) leaves `.Max` holding the highest score in the objective. `.Max` is compared with itself too, so it never goes down. An ID from a dead entity is never given out again.

:::info NOTE:
Wildcard (`*`) compares with all tracked scores, which includes offline players. That is what we want here, so a returning player cannot clash with an ID given out while they were away.
:::

**Command 3:** This uses [Execution Forking](/commands/execution-forking). The `as` subcommand splits the command into one run per new entity. The `at` subcommand splits it again, but its selector is checked separately for each run, after the previous run has already written its score. Each run therefore matches fewer entities than the last, and everyone ends up with a different number.

To illustrate, with three new entities A, B and C:

|  #  | Instance (`as`) | Entities still at `0` when `at` resolves | Times the `add` runs | Resulting score |
| :-: | :-------------: | :--------------------------------------: | :------------------: | :-------------: |
|  1  |        A        |                 A, B, C                  |          3           |     `A = 3`     |
|  2  |        B        |                   B, C                   |          2           |     `B = 2`     |
|  3  |        C        |                    C                     |          1           |     `C = 1`     |

_Once A has a score it no longer matches `scores={wiki:unique_id=0}`, which is why the second run only splits twice._

**Command 4:** Command 3 always starts counting from `1`, so those numbers would clash with entities that already exist. Adding `.Max` moves the whole batch above every ID in use. In the example above, with `.Max` at `12`, A, B and C become `15`, `14` and `13`.

**Command 5:** The tag keeps these entities out of commands 3 and 4 from now on, so an ID is given once and never changes.

## Using the ID

The ID can be copied into a second objective to link two entities together. In this example, each player claims the armor stand nearest to them.

```yaml
## Copy Your Own ID Into Another Objective to Store a Reference
execute as @a[tag=wiki:set_unique_id] at @s run scoreboard players operation @e[type=armor_stand,c=1] wiki:target_id = @s wiki:unique_id

## Compare the Scores
execute as @e[tag=wiki:set_unique_id] at @e[type=armor_stand,scores={wiki:target_id=1..}] if score @s wiki:unique_id = @e[type=armor_stand,scores={wiki:target_id=1..},c=1] wiki:target_id run say @e[type=armor_stand,scores={wiki:target_id=1..},c=1] is connected to @s
```

**Command 1:** Every tagged player copies their own ID onto the closest armor stand, into a second objective called `wiki:target_id`. The stand now stores who owns it.

**Command 2:** For each claimed stand, this looks for the entity whose `wiki:unique_id` matches the stand's `wiki:target_id`. That finds the owner again, without the two needing to be near each other.

:::warning
`c=1` picks the closest stand, so two players next to the same armor stand will both claim it and the second one wins. Add a check of your own if a target may only be claimed once.
:::

## Performance

Command 3 runs n² times for n new entities, because each of the n runs from `as` splits again at `at`. A few entities per tick is fine, but a mob farm or a `/summon` loop that spawns dozens at once can reach thousands of runs in a single tick.

:::tip
If you only need IDs for one kind of target, add `type=` to both selectors. Limiting the system to `@e[type=player]` or to your own custom entity keeps the cost low whatever else is happening on the world.
:::

> Note: `@e` does not match entities in unloaded chunks. This is fine, as a tagged entity keeps its score and tag while unloaded, and a new one gets its ID on the first tick after its chunk loads.

## Tick JSON

If you are using functions instead of command blocks, the `assign_unique_id` function must be added to the `tick.json` in order to loop and run it continuously. Multiple files can be added to the `tick.json` by placing a comma after each string. Refer to [Functions](/commands/mcfunctions#tick-json) documentation for further info.

<CodeHeader path="BP/functions/tick.json" />

```json
{
    "values": ["wiki/scoreboard/entities/assign_unique_id"]
}
```

If using functions, your pack folder structure will be as follows:

<FolderView :paths="[
    'BP/functions/wiki/scoreboard/entities/assign_unique_id.mcfunction',
    'BP/functions/wiki/main.mcfunction',
    'BP/functions/tick.json',
    'BP/manifest.json',
    'BP/pack_icon.png'
]" />

In this setup, the `assign_unique_id` function is called by `main.mcfunction`, which is executed every tick via `tick.json`.
