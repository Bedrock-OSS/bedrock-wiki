---
title: Functions
category: General
mentions:
 - Bedrock Commands
 - cda94581
nav_order: 3
---
## Introduction
Functions are `.mcfunction` files which contain multiple lines of commands. They are run with the `/function` command in-game.

Functions are created in a **Behavior Pack**, nested within the **functions** folder. A function pack creates a system using solely function files.

## Function Pack Folder Structure

<FolderView
	:paths="[
    'BP',
    'BP/functions',
    'BP/functions/thiscode.mcfunction',
    'BP/functions/moreofthiscode.mcfunction',
    'BP/functions/tick.json',
    'BP/functions/nested',
    'BP/functions/nested/thiscodeisnested.mcfunction',
]"
></FolderView>

## Guidance

Each new line in a function file represents a new command. You may start a line with # to add comments. Commands in a function do not need to begin with a slash `/`, however doing so will not cause any errors.

All commands in a function are run in the *same tick*. Because of this, a function which causes large changes may cause a sudden lag spike and it is helpful to delegate some commands across multiple ticks, if possible.
Commands in a function are still run in the same order, however.

It is not possible to run conditional commands. Those will still need to utilize command blocks in some way, or could utilize the 1.19.50 execute syntax.

Running commands with a specified delay is difficult, but not entirely impossible. Setting a tick delay would involve using Command Timers to incrementally count up every tick (to a certain point), and executing at certain scores along the file.

## Creating a Function

1. Locate the com.mojang folder and navigate to development_behavior_packs

> The development folders are used for quick reloading of packs, as the packs aren't cached to a specified world.

2. Create a folder (of any name) for the function pack. This will be referred to as Behavior Pack or BP.

3. Create a functions folder. Any file within this folder that ends with .mcfunction will be registered as a function in-game, which can be run with `/function <function_name>`.

Nested functions are allowed, simply list the file path in relation to the functions folder as shown in the function pack folder structure.

Apply the behavior pack in-game and try out the functions. Function file changes can be reflected in the world by running `/reload` or by simply relogging.

> Note that functions are versioned; they will run in the version listed in the manifest.json

## Execution

Functions can be executed in-game by typing `/function name_of_function`. This will execute all the commands in the function file, all in a single tick. 

Nested functions, for example `BP/functions/folder/function1.mcfunction` can be run using the nested folder path, in this case `/function folder/function1`

## tick.json

The final file within a function is the **tick.json** file. This specifies functions to run server-side on every game tick, (similar to a repeating command block.) It is located in the `BP/functions` folder.

<CodeHeader>BP/functions/tick.json</CodeHeader>
```
{
  "values": [
    "function_1",
    "function_2"
  ]
}
```
> Be aware that functions in this file are run as soon as the world is *initialized*, regardless of whether or not the player has been *loaded*. This may cause unintended behavior if used incorrectly.

Functions are useful in many ways to reduce the time spent going from command block to command block debugging a system. They also help with packaging systems for use in multiple worlds and provide many functions that can change how everything works.


:::tip
Minecraft can **not** run more than 10,000 lines of functions in one function file. This includes any other function files that are executed inside of the original file.
:::


## Known Issues

While `tick.json` is a valuable file when you're trying to stray away from using repeating command blocks in-game, it may execute function files before the world has fully loaded in. This might cause unintended command behavior.

## Troubleshooting Functions
Your functions may not appear within the command suggestions when using `/function`. This is normally due to an error with one or more commands within the function. It is useful to enable [content log errors](https://wiki.bedrock.dev/guide/troubleshooting.html#content-log) to easily find these issues. 
