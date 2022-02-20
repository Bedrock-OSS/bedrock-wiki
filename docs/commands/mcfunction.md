---
title: Functions
mention:
	- SirLich
tags: 
	- easy
---

:::tip
Minecraft can **not** run more than 10,000 lines of functions in one function file. This includes any other function files that are executed inside of the original file.
:::

`mcfunction` files are stored in your BP as `BP/functions/my_function.mcfunction`. You can add as many functions as you like.

Functions are used to group multiple Minecraft Commands (such as `/say` or `/teleport`) into manageable chunks (or functions). Commands inside a function file do not begin with `/`.

Example:
<CodeHeader>BP/functions/my_function.mcfunction</CodeHeader>

```
tag @s add dev
gamemode creative
effect @s night_vision 100000 1 true

# You can write comments like this
say hey!
```

Functions can be executed in-game by typing `/function name_of_function`. This will execute all the commands in the function file, all in a single tick. Nested functions will also run in the same tick as the parent function.

Function files can be nested, for example: `BP/functions/teleport/home.mcfunction` will create a new function called `teleport/home`, which can be called in game like `/function teleport/home`.

Function files can be reloaded without leaving the game with the `/reload` command.

## Running functions through tick.json

`tick.json` is a server-side file located as `BP/functions/tick.json` that lets you execute function files.

Functions will be run for each tick as if placed in a repeating command block.

### Creating tick.json

Create a file called tick.json in your root function folder. The format is this:

<CodeHeader>BP/functions/tick.json</CodeHeader>

```json
{
	"values": ["function_file_name_one", "function_file_name_two"]
}
```

### Known Issues

While this is a valuable file when you're trying to stray away from using repeating command blocks in-game, it's known for executing function files before the world has fully loaded in. This might cause unintended command behavior and crashes, and it's recommended to wait for a more official release of this file.

### Useful tick.json Creations

In this section you can find useful creations by our community.

**Looping Timer**

Here you can find timer that executes function with name `my_function` on players with 10 sec delay.

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

**Hello World**

This function tellraws something to every player, who joined the game for the first time.
It also has a 4 seconds delay so world is fully loaded.

<CodeHeader>BP/functions/hello_world.mcfunction</CodeHeader>

```
# Setup
scoreboard objectives add hello_world dummy

# Loop
scoreboard players set @a[tag=!hello_world] hello_world 81
tag @a add hello_world
scoreboard players add @a[scores={hello_world=!0}] hello_world -1

# Main
execute @a[scores={hello_world=1}] ~~~ tellraw @s {"rawtext":[{"text":"Did you know that MJ105 made this Hello World function?"}]}
```