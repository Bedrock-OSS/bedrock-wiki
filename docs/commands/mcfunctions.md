---
title: Functions
category: General
mentions:
    - Bedrock Commands
    - cda94581
    - zheaEvyline
    - jordanparki7
nav_order: 3
description: Learn about functions in MCBE.
---

## Introduction

[Sourced By Bedrock Commands Community Discord](https://discord.gg/SYstTYx5G5)

Functions are `.mcfunction` files which contain multiple lines of commands. They are run with the `/function` command in-game.

Functions are created in a **Behavior Pack**, nested within the **functions** folder. A function pack creates a system using solely function files.

Functions are useful in many ways to reduce the time spent going from command block to command block debugging a system. They also help with packaging systems for use in multiple worlds and provide many functions that can change how everything works.

## Function Pack Folder Structure

<FolderView
	:paths="[
    'BP',
    'BP/functions',
    'BP/functions/this_code.mcfunction',
    'BP/functions/more_of_this_code.mcfunction',
    'BP/functions/tick.json',
    'BP/functions/nested',
    'BP/functions/nested/this_code_is_nested.mcfunction',
]"
></FolderView>

To help create a consistent format, make it easier for everyone to follow, and to maintain uniformity across your functions, it is advised to follow these best-practices for your folder structure:

1. Folders and files in a pack must be named using `snake_case`
    - This means only **lowercase** alphanumeric characters and underscores (`_`) are allowed.
    - ✅️ `BP/functions/scoreboards/objective/add_all.mcfunction`
    - ❌️ `BP/functions/SCOREBOARDS/Objective/Add-all.mcfunction`
2. They must be properly nested:
    - ✅️ `function teleport/zone/hell`
    - ❌ `function teleport_hellzone`
3. The names must follow an `action_object` structure. Meaning verbs should come before subjects.
    - ✅️ `add_all`
    - ✅️ `shuffle_position`
    - ❌️ `all_add`
    - ❌️ `position_shuffle`
4. The total character length of any path must not exceed 80 characters (console limitation).
5. Content folders should use consistent pluralization: Stick with names that are either all plural or all singular, don't mix and match. Example:

✅️ Consistent:

```
BP/functions/abilities/ice_blast.mcfunction
BP/functions/events/player/on_death.mcfunction
BP/functions/events/world/on_initialise.mcfunction
BP/functions/quests/jungle/1.mcfunction
```

-   All content folders `abilities`, `events`, and `quests` are consistently pluralized.
-   The content folders in `events` are also consistent, as both `player` and `world` are singular.

❌️ Inconsistent:

```
BP/functions/ability/ice_blast.mcfunction
BP/functions/event/players/on_death.mcfunction
BP/functions/event/world/on_initialise.mcfunction
BP/functions/quests/jungle/1.mcfunction
```

-   Only `quests` content folder is pluralized while `ability`, and `event` are singular.
-   Also, in the `event` folder, the `players` folder is plural while `world` is singular.

## Notes For Beginners

_Below is an example function file for beginners reference:_

<CodeHeader>BP/functions/effects.mcfunction</CodeHeader>

```yaml
# These effects are for the spawn
effect @a [tag=atSpawn] regeneration 12 255 true
effect @a [tag=atSpawn] saturation 12 255 true
effect @a [tag=atSpawn] weakness 12 255 true

# These effects are for the nether
effect @a [tag=inNether] fire_resistance 12 255 true
```

-   Commands in a function may not begin with a slash (`/`). Each new line in a function file represents a new command (ignored if left blank). You may start a line with a hashtag ( `#`) to add comments — the space after `#` is only a format preference. For comments style guide for functions, see the section **[below](#comments-style-guide)**.

-   All commands in a function are run in the _same tick_. Because of this, a function which causes large changes may cause a sudden lag spike and it is helpful to delegate some commands across multiple ticks, if possible. Commands in a function are still run in the same sequence, however.

-   In Minecraft Bedrock, functions cannot run more than 10,000 commands in a function file. This includes any other function files that are executed inside of the original file.

-   It is not possible to run conditional commands. Those will still need to utilize command blocks in some way, or could utilize the 1.19.50 execute syntax.

-   Running commands with a specified delay in a function involves using scoreboard timers to incrementally count up each tick until a certain point, and executing commands at specific scores within the file. See [Scoreboard Timers](/commands/scoreboard-timers) page to learn it's setup.

## Comments Style Guide

-   When working with functions that contain many commands, it's helpful to keep them organized by using multiple hashtags in comments to indicate different header levels.
-   _Optionally_, to further distinguish these levels, you can apply different styles:
    -   level 1 headers - **# UPPERCASE**
    -   level 2 headers - **## Title Case**
    -   level 3 headers - **### Sentence Case**
-   Try to avoid the use of more than three header levels or too many headers overall, as this can make the code look cluttered. For your reference, see the example file below:

<Spoiler title="Example Function File">

<CodeHeader>BP/functions/abilities/fire_trail.mcfunction</CodeHeader>

```yaml
# ON PLAYER ITEM DROP

## Give Effects
### Fire resistance
execute at @e [type=item, name="Fire Trail Ability"] run effect @p [r=3] fire_resistance 10 255
### Speed
execute at @e [type=item, name="Fire Trail Ability"] run effect @p [r=3] speed 10 1 true

## Add Particle Time (10s)
execute at @e [type=item, name="Fire Trail Ability"] run scoreboard players set @p [r=3] abilities.fire_trail 200

## Delete Item
kill @e [type=item, name="Fire Trail Ability"]


# ENTITY TIMER

## Emit Particle Trail
execute at @a [scores={abilities.fire_trail=1..}] run particle minecraft:basic_flame_particle ~~~

## Countdown Timer
scoreboard players remove @a [scores={abilities.fire_trail=1..}] abilities.fire_trail 1
```

</Spoiler>

Note the use of two lines of spacing before level 1 headers and one line of spacing before level 2 headers for improved readability.

This practice helps create a consistent format, making it easier for everyone to follow, and maintain uniformity across your functions.

For Scoreboard and Tags style guide, see **[here](/meta/style-guide#scoreboard-and-tags)**.

## Creating a Function

1. Locate the `📁 com.mojang` folder and navigate to `📁 development_behavior_packs`

    - The development folders are used for quick reloading of packs, as the packs aren't cached to the world files.

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
        "version": [1, 0, 0],
        "min_engine_version": [1, 19, 73]
    },
    "modules": [
        {
            "description": "§r",
            "type": "data",
            "uuid": "00000000-0000-0000-0000-000000000000",
            "version": [1, 0, 0]
        }
    ]
}
```

Note that the uuid field needs to be replaced with an actual uuid, and the two generated must be different from one another. You can generate a uuid at **[uuidgenerator.net](https://uuidgenerator.net/)**

</Spoiler>
<Spoiler title="Sample 🖼 pack_icon.png">

Sample A:
![pack_icon.png](/assets/images/commands/pack_icon.png)

Sample B:

![pack_icon.png](/assets/images/guide/project-setup/pack_icon.png)

</Spoiler>

4. Create a `📁 functions` folder. Any file within this folder that ends with **.mcfunction** will be registered as a function in-game, which can be run with `/function <function_name>`.

    - Nested functions are allowed, simply list the file path in relation to the functions folder as shown in the function pack folder structure.

5. Apply the behavior pack in-game and try out the functions. Function file changes can be reflected in the world by running `/reload` or by simply relogging.

:::tip NOTE:

Functions are versioned; therefore, they will run in the version listed in the `📄 manifest.json`, such as:

-   `min_engine_version` 1.19.50 or above will adopt the new execute syntax.
-   `min_engine_version` 1.19.70 or above will require aux values be replaced with block states.

:::

## Execution

Functions can be executed in-game by typing `/function name_of_function`. This will execute all the commands in the function file, all in a single tick.

Nested functions, for example `BP/functions/lobby/items/1.mcfunction` can be run using the nested folder path, in this case `/function lobby/items/1`

## Tick JSON

The final file within a function is the **tick.json** file. This specifies functions to run server-side on every game tick, (similar to a repeating command block). It is located in the `BP/functions` folder. By default, functions running in this file execute at origin `0, 0, 0` in the overworld.

<CodeHeader>BP/functions/tick.json</CodeHeader>
```json
{
  "values": [
    "function_1",
    "function_2"
  ]
}
```
> Note: Functions in this file are run as soon as the world is *initialized*, regardless of whether or not the player has been *loaded*. This may cause unintended behavior if used incorrectly.

## Sample Function Pack

<Card image="/assets/images/commands/BClogo.png" title="Download" link="https://github.com/Bedrock-OSS/wiki-addon/releases/download/download/functions_sample.mcpack">

</Card>

## Troubleshooting Functions

Your functions may not appear within the command suggestions when using `/function`. This is normally due to an error with one or more commands in the function.

Enabling the [Content Log](/guide/troubleshooting#content-log) in the creator settings allows you to see if there are any errors in your function pack, which function the error is in, on which line, and exactly what the syntax error is for that command.

The list of errors will be generated every time you load a world or run `/reload` to reflect changes after editing files. The list can be viewed on-screen for a few seconds, as well as in the content log history in settings.

![contentLogToggles](/assets/images/commands/contentLogToggles.png)

![contentLogHistory](/assets/images/commands/contentLogHistory.png)
