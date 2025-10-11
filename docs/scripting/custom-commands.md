---
title: Custom Commands
description: Learn how to create your own commands that can be used in chat, command blocks and elsewhere using scripts.
category: Tutorials
mentions:
    - cda94581
    - fraysdev
    - destruc7ion
    - jannik-de
    - riesters
    - Fabrimat
    - SmokeyStack
    - CrackedMatter
    - JaylyDev
    - Herobrine643928
    - conmaster2112
    - kumja1
    - modmaker101
    - SimpleDevMCBE
    - QuazChick
    - jeanmajid
---

Who doesn't want cool custom commands? In this tutorial, you will learn how to create your own commands that can be used in chat, command blocks and elsewhere using scripts.

## Pack Setup

:::tip
Before creating a script, it is recommended to learn the basics of JavaScript, add-ons, and the Script API.
To see what the Script API can do, see the [Microsoft Docs](https://learn.microsoft.com/minecraft/creator/scriptapi)
:::

Assuming you have understood the basics of scripting, let's start creating the pack.

Below is an example manifest, make sure that you **generate your own UUIDs**.

<CodeHeader>BP/manifest.json</CodeHeader>

```json
{
    "format_version": 2,
    "header": {
        "name": "Custom Commands",
        "description": "Custom Commands using the Script API",
        "min_engine_version": [1, 21, 100],
        "uuid": "c8c3239f-027f-4e80-890f-880eba65027d",
        "version": "1.0.0"
    },
    "modules": [
        {
            "type": "script",
            "language": "javascript",
            "entry": "scripts/main.js",
            "uuid": "f626740d-50a6-49f1-a24a-834983b72134",
            "version": "1.0.0"
        }
    ],
    "dependencies": [
        {
            "module_name": "@minecraft/server",
            "version": "2.1.0" // Needs to be at least 2.1.0
        }
    ]
}
```

In our manifest, we have added a script module.
The `entry` is the path of the script file within the `scripts` folder of the behavior pack.
The dependency allows us to import the native `@minecraft/server` module into our script.

<FolderView :paths="[
    'BP/scripts/main.js',
    'BP/manifest.json',
    'BP/pack_icon.png'
]" />

## Registering Custom Commands

Now comes the fun part — creating your custom command.

### Command Name

First, you'll need to come up with a name for your command.
This name must have a namespace and should only include lowercase letters e.g. `wiki:goto`.

:::danger NAMESPACES
Minecraft will automatically register a version of your custom command without the provided namespace (e.g. `/goto` as well as `/wiki:goto`).

This feature was added to make custom commands more convenient to type into chat quickly, however you should **never** use the version without the namespace outside of chat.

Doing so will cause command blocks, functions, etc. to stop working if another add-on adds a command with the same name (without the namespace).
:::

### Command Description

You also need to provide a description for the command which will appear next to the command's name in autocompletions.

<!--

This should be a translation key (preferably in the form `commands.<name>.description`) from a `.lang` file.

<CodeHeader>RP/texts/en_US.lang</CodeHeader>

```lang
commands.wiki:goto.description=Teleport to a specific location.
```

-->

### Command Permission Level

The permission level of your command is important as it ensures that players that should not have access to potentially dangerous commands cannot run them.

Below are the different permission levels that a command may be set to:

-   `Any` — allows the command to be ran from anywhere, even by non-operators.
-   `GameDirectors` — restricts the command to operators (including command blocks).
-   `Admin` — restricts the command to operators (excluding command blocks).
-   `Host` — restricts the command to the player hosting the world.
-   `Owner` — restricts the command to the server console.

### Command Parameters

Below are the different parameter types that can be used in custom commands:

-   `BlockType`
-   `Boolean`
-   `EntitySelector` — returns an array of selected entities (even if only one entity is selected).
-   `EntityType`
-   `Enum` — the parameter's `name` must be the name of a registered command enum.
-   `Float`
-   `Integer`
-   `ItemType`
-   `Location` — returns a `Vector3` object.
-   `PlayerSelector` — similar to `EntitySelector` but only returns players.
-   `String`

Custom commands can have a maximum of 8 parameters.

#### Mandatory Parameters

Mandatory parameters must be specified in order for the command to run.

#### Optional Parameters

Optional parameters do not need to be specified and will always follow mandatory parameters.

### Command Callback

This is the function that is called (in [read-only mode](/scripting/privileges#read-only-mode)) every time the command is executed.

The callback always gets the command origin as its first parameter, the rest of the parameters are based on the `mandatoryParameters` and `optionalParameters` you provide.
The number of parameters passed to the callback matches the number of parameters defined in the command, so if you have a command with 3 different parameters your callback would look like this:

<CodeHeader>BP/scripts/main.js</CodeHeader>

```js
customCommandRegistry.registerCommand(
    {
        name: "wiki:command",
        description: "A very useful command.",
        permissionLevel: CommandPermissionLevel.GameDirectors,
        mandatoryParameters: [
            { name: "param1", type: CustomCommandParamType.String },
            { name: "param2", type: CustomCommandParamType.Integer },
            { name: "param3", type: CustomCommandParamType.Boolean },
        ],
    },
    (origin, param1, param2, param3) => {
        // Handle the command logic here
    }
);
```

## Teleport Command Example

In this example, we will create a custom slash command `/wiki:goto` that allows players to teleport to predefined locations: `spawn`, `shop`, or `arena`.

In command autocompletions, its syntax is the following:

```
/wiki:goto <teleportLocation: string>
```

<CodeHeader>BP/scripts/main.js</CodeHeader>

```js
import { CommandPermissionLevel, CustomCommandParamType, CustomCommandStatus, system } from "@minecraft/server";

system.beforeEvents.startup.subscribe(({ customCommandRegistry }) => {
    // Register an enum for teleport locations
    customCommandRegistry.registerEnum("wiki:teleportLocation", ["spawn", "shop", "arena"]);

    // Register the custom command
    customCommandRegistry.registerCommand(
        {
            name: "wiki:goto",
            description: "Teleport to a specific location.",
            permissionLevel: CommandPermissionLevel.Any, // Allow all players to run the command
            cheatsRequired: false // Allow the command to be ran without enabling cheats
            mandatoryParameters: [
                {
                    // Use the enum by setting the name to the enum name
                    name: "wiki:teleportLocation",
                    type: CustomCommandParamType.Enum,
                },
            ],
        },
        (origin, teleportLocation) => {
            // Only run if executed by an entity
            if (!origin.sourceEntity) return {
                status: CustomCommandStatus.Failure,
            };

            let location;

            // Handle teleportation based on the location string
            if (teleportLocation === "spawn") {
                location = { x: 0, y: 100, z: 0 };
            } else if (teleportLocation === "shop") {
                location = { x: 100, y: 100, z: 100 };
            } else if (teleportLocation === "arena") {
                location = { x: 200, y: 100, z: 200 };
            }

            system.run(() => {
                origin.sourceEntity.teleport(location);
            });

            return {
                status: CustomCommandStatus.Success,
                message: "Teleporting to " + teleportLocation,
            }
        }
    );
});
```

For more details about custom commands, see the [Microsoft Docs on custom commands](https://learn.microsoft.com/minecraft/creator/documents/scripting/custom-commands).
