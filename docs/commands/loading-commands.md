---
title: Loading Commands

mention:
 - MedicalJewel105
 - Hatchibombotar
---

Sometimes when writing functions or creating addons it is useful to be able to run commands on a players first join or on the first time a world has been loaded. We will go through both.

![](/assets/images/commands/loading-commands/loading-commands-showcase.gif)

## Player Join
In order to check if a new player has joined the world we need to run commands every tick. For this we use [tick.json](/commands/mcfunction.html#creating-tick-json).

Here is what your file could look like: 

<CodeHeader>BP/functions/tick.json</CodeHeader>

```json
{
    "values": [
        "load_commands"
    ]
}
```
`load_commands` is what our function that is going to check for new players will be called.

<CodeHeader>BP/functions/load_commands.mcfunction</CodeHeader>

```
msg @a[tag=!joined] Welcome
tag @a add joined
```

In this example, the player gets a welcome message. You can swap it out for anything you'd like that targets a player without the joined tag such as teleporting them somewhere, giving them something or spawning an entity.

## World load
Unlike entities, worlds can not be applied tags. Instead we have to use scoreboards. Because of that, it is a bit more complicated.

<CodeHeader>BP/functions/tick.json</CodeHeader>

```json
{
    "values": [
        "load_check"
    ]
}
```

<CodeHeader>BP/functions/load_check.mcfunction</CodeHeader>

```
execute @a[c=1] ~ ~ ~ function load_commands
```

In this example, we are running it from one player, this could be from any **entity** though.

<CodeHeader>BP/functions/load_commands.mcfunction</CodeHeader>

```
scoreboard objectives add loaded dummy
scoreboard players add global loaded 0
scoreboard players operation @s loaded = global loaded
execute @s[scores={loaded=0}] ~ ~ ~ say The world is loaded!
scoreboard players set global loaded 1
```

The function above does appear rather complicated but it is actually quite simple. The first two lines make sure that a scoreboard called `loaded` is created and that a player on it called `global` exists. The third line copies the value that the `global` player has. The fourth line runs commands once the world is loaded and the last line sets loaded to 1.
