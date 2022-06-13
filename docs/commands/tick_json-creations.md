---
title: Useful tick.json Creations
mentions:
    - MedicalJewel105
    - Hatchibombotar
category: General
---

On this page you can find some of the tick.json creations by our community.
You can read about tick.json [here](/commands/mcfunction#creating-tick-json)

## Death Detection

Death detection with commands that does not use `player.json`

<CodeHeader>BP/functions/death_detection.mcfunction</CodeHeader>

```
tag @a add dead
tag @e[type=player] remove dead # Removes dead tag from alive players.

execute @a[tag=dead, tag=!already_dead] ~~~ function my_function

tag @a[tag=dead, tag=!already_dead] add already_dead
tag @a[tag=!dead, tag=already_dead] remove already_dead
```
This works because @a targets all players whereas `@e[type=player]` only targets alive players.
You can do whatever you want with the output command, in the above example, it runs the `my_function` function.

Example: [Graves Addon by Hatchibombotar](https://github.com/Hatchibombotar/graves-addon/blob/main/Graves_BP/functions/graves/death_detection.mcfunction).

## Looping Timer

Here you can find timer that executes function with name `my_function` on players with a 10 sec delay.

<CodeHeader>BP/functions/timer.mcfunction</CodeHeader>

```
# Setup
scoreboard objectives add timer dummy
# Loop
scoreboard players add @a timer 1
# Main
execute @a[scores={timer=200}] ~~~ function my_function
# Timer Update
scoreboard players set @a[scores={timer=200..}] timer 0
```

Note that the order of loop and timer update is important.

## Hello World

This function tellraws something to every player, who joined the game for the first time.
It also has a 4 seconds delay so world is fully loaded.

<CodeHeader>BP/functions/hello_world.mcfunction</CodeHeader>

```
# Setup
scoreboard objectives add hello_world dummy

scoreboard players set @a[tag=!hello_world] hello_world 81
tag @a add hello_world
scoreboard players add @a[scores={hello_world=!0}] hello_world -1
execute @a[scores={hello_world=1}] ~~~ tellraw @s {"rawtext":[{"text":"Did you know that MJ105 made this Hello World function?"}]}
```

## First World Load

Unlike entities, worlds can not be applied tags. Instead we have to use scoreboards. Because of that, it is a bit more complicated.

<CodeHeader>BP/functions/load_check.mcfunction</CodeHeader>

```
execute @a[c=1] ~ ~ ~ function load_commands
```

Here, we are running it from one player, this could be from any **entity** though.

<CodeHeader>BP/functions/load_commands.mcfunction</CodeHeader>

```
# setup
scoreboard objectives add loaded dummy

# check if the value that the player value has is set to 1, otherwise runs commands
scoreboard players operation @s loaded = value loaded
execute @s[scores={loaded=0}] ~ ~ ~ say The world is loaded!

scoreboard players set value loaded 1
```

The above function checks if the player value has the loaded score set to 0, then runs functions if that is true. It sets it to 1 afterwards to make sure it does not run again.
