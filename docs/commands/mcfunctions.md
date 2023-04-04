---
title: Functions
category: General
mentions:
 - Bedrock Commands
 - cda94581
 - zheaEvyline
 - jordanparki7
nav_order: 3
tags:
 - info
---
## Introduction
Functions are `.mcfunction` files which contain multiple lines of commands. They are run with the `/function` command in-game.

Functions are created in a **Behavior Pack**, nested within the **functions** folder. A function pack creates a system using solely function files.

Functions are useful in many ways to reduce the time spent going from command block to command block debugging a system. They also help with packaging systems for use in multiple worlds and provide many functions that can change how everything works.

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

## Notes For Beginners

- Each new line in a function file represents a new command. You may start a line with # to add comments. Commands in a function do not need to begin with a slash `/`, however doing so will not cause any errors.
![functionFile](/assets/images/commands/functionFile.png)

- All commands in a function are run in the *same tick*. Because of this, a function which causes large changes may cause a sudden lag spike and it is helpful to delegate some commands across multiple ticks, if possible.
Commands in a function are still run in the same order, however.

- Minecraft can **not** run more than 10,000 lines of functions in one function file. This includes any other function files that are executed inside of the original file.

- It is not possible to run conditional commands. Those will still need to utilize command blocks in some way, or could utilize the 1.19.50 execute syntax.

Running commands with a specified delay in a function would involve using scoreboard timers to incrementally count up every tick (to a certain point), and executing at certain scores along the file. You may refer to [Scoreboard Timers](https://wiki.bedrock.dev/commands/scoreboard-timers.html) system to learn how to set it up.

## Creating a Function

1. Locate the `📁 com.mojang` folder and navigate to `📁 development_behavior_packs`
    - The development folders are used for quick reloading of packs, as the packs aren't cached to a specified world.

2. Create a folder (of any name) for the function pack. This will be referred to as Behavior Pack or BP.

3. Create a `📄 manifest.json` file and a `🖼 pack_icon.png` file (optional) within the BP folder.
    - A manifest file contains all the information needed to register a pack, while a pack icon displays visually in the pack menu. A pack icon is typically a 128x128 or a 256x256 image, though any power-of-2 resolution will do, they will be upscaled and downscaled accordingly.

<Spoiler title="Sample 📄 manifest.json">

<CodeHeader>BP/manifest.json</CodeHeader>

```json
{
    "format_version": 2,
    "header": {
        "description": "Write Your Pack Description Here",
        "name": "Write Your Pack Name Here",
        "uuid": "00000000-0000-0000-0000-000000000000",
        "version": [ 1, 0, 0 ],
        "min_engine_version": [ 1, 19, 73 ]
    },
    "modules": [
        {
            "description": "§r",
            "type": "data",
            "uuid": "00000000-0000-0000-0000-000000000000",
            "version": [1, 0, 0 ]
        }
    ]
}
```

Note that the uuid field needs to be replaced with an actual uuid, and the two generated must be different from one another. You can generate a uuid at https://uuidgenerator.net/

</Spoiler>
<Spoiler title="Sample 🖼 pack_icon.png">
	
![pack_icon.png](/assets/images/commands/pack_icon.png)

</Spoiler>

4. Create a `📁 functions` folder. Any file within this folder that ends with **.mcfunction** will be registered as a function in-game, which can be run with `/function <function_name>`.
    - Nested functions are allowed, simply list the file path in relation to the functions folder as shown in the function pack folder structure.

5. Apply the behavior pack in-game and try out the functions. Function file changes can be reflected in the world by running `/reload` or by simply relogging.

:::tip NOTE
Note that functions are versioned; they will run in the version listed in the `📄 manifest.json`
:::

## Execution

Functions can be executed in-game by typing `/function name_of_function`. This will execute all the commands in the function file, all in a single tick. 

Nested functions, for example `BP/functions/Lobby/items/1.mcfunction` can be run using the nested folder path, in this case `/function Lobby/items/1`

## tick.json

The final file within a function is the **tick.json** file. This specifies functions to run server-side on every game tick, (similar to a repeating command block.) It is located in the `BP/functions` folder. By default, functions running in this file execute at origin `0, 0, 0` in the overworld.

<CodeHeader>BP/functions/tick.json</CodeHeader>
```
{
  "values": [
    "function_1",
    "function_2"
  ]
}
```
> Note; functions in this file are run as soon as the world is *initialized*, regardless of whether or not the player has been *loaded*. This may cause unintended behavior if used incorrectly.

## Troubleshooting Functions

Your functions may not appear within the command suggestions when using `/function`. This is normally due to an error with one or more commands in the function.

Enabling the [Content Log](https://wiki.bedrock.dev/guide/troubleshooting.html#content-log) in creator settings will allow you to see if there are any errors in your function pack, in which function the error is in, at which line and exactly what the syntax error for that command is.

The list of errors will be generated every time you load a world or run `/reload` to reflect changes after editing files. The list can be viewed on-screen for a few seconds as well as in the content log history in settings.

![contentLogToggles](/assets/images/commands/contentLogToggles.png)

![contentLogHistory](/assets/images/commands/contentLogHistory.png)
