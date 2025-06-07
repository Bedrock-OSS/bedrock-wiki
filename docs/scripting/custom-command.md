---
title: Simple Chat Commands
description: Custom commands using scripts.
category: Tutorials
tags:
    - experimental
mentions:
    - cda94581
    - FrankyRay
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

::: warning
The Script API is currently in active development, and breaking changes are frequent. This page assumes the format of Minecraft 1.21.80
:::

Who doesn't want cool custom commands? With the Script API, you can create your own. In this article, we will be creating them using the Script API.

## Setup Pack

:::tip
Before creating a script, it is recommended to learn the basics of JavaScript, Add-Ons, and the Script API. To see what the Script API can do, see the [Microsoft Docs](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/)
:::

Assuming you have understood the basics of scripting, let's start creating the pack.

<CodeHeader>BP/manifest.json</CodeHeader>

```json
{
    "format_version": 2,
    "header": {
        "name": "Custom Commands",
        "description": "Custom Commands using the Script API",
        "uuid": "c8c3239f-027f-4e80-890f-880eba65027d",
        "min_engine_version": [1, 20, 80],
        "version": [1, 0, 0]
    },
    "modules": [
        {
            "description": "Behavior Pack Module",
            "type": "data",
            "uuid": "cd2cd41a-1849-410e-8f0a-5d30fde4bd9a",
            "version": [1, 0, 0]
        },
        {
            "description": "Gametest Module",
            "type": "script",
            "language": "javascript",
            "entry": "scripts/main.js",
            "uuid": "f626740d-50a6-49f1-a24a-834983b72134",
            "version": [1, 0, 0]
        }
    ],
    "dependencies": [
        {
            "module_name": "@minecraft/server",
            "version": "2.0.0-beta" // needs to be the latest or it will break ( latest as of 1.21.80 )
        }
    ]
}
```

In our manifest, we have added a script module. The `entry` is where our script file is stored. This is typically within the `scripts` folder of the behavior pack. The dependency allows us to use that script module in our script.

<FolderView :paths="[
    'BP/manifest.json',
    'BP/pack_icon.png',
    'BP/scripts/main.js'
]" />

## Creating Custom Commands

Now comes the fun part - creating our custom commands. First, we will add the module.

### Example: Teleport Command

In this example, we will create a custom slash command `/wiki:goto` that allows players to teleport to predefined locations: `spawn`, `shop`, or `arena`.

<CodeHeader>BP/scripts/main.js</CodeHeader>

```js
import { CommandPermissionLevel, CustomCommandParamType, system } from "@minecraft/server";

system.beforeEvents.startup.subscribe(({ customCommandRegistry }) => {
    // Register an enum for teleport locations
    customCommandRegistry.registerEnum("wiki:teleportLocations", ["spawn", "shop", "arena"]);

    // Register the custom command
    customCommandRegistry.registerCommand(
        {
            name: "wiki:goto",
            description: "Teleport to a specific location",
            permissionLevel: CommandPermissionLevel.Any,
            mandatoryParameters: [
                {
                    // Use the enum, by setting the name to the enum name
                    name: "wiki:teleportLocations",
                    type: CustomCommandParamType.Enum,
                },
            ],
        },
        (origin, locationString) => {
            // Only run if executed by an entity
            if (!origin.sourceEntity) return;

            // Handle teleportation based on the location string
            if (locationString === "spawn") {
                system.run(() => {
                    origin.sourceEntity.teleport({ x: 0, y: 100, z: 0 });
                });
            } else if (locationString === "shop") {
                system.run(() => {
                    origin.sourceEntity.teleport({ x: 100, y: 100, z: 100 });
                });
            } else if (locationString === "arena") {
                system.run(() => {
                    origin.sourceEntity.teleport({ x: 200, y: 100, z: 200 });
                });
            }
        }
    );
});
```

To clarify the structure of custom slash commands in the Script API, you need to define several key properties when registering a command:

### CustomCommand data

-   **Command Name and Namespace:**  
    Every custom command must be defined with a unique namespace (for example, `wiki:goto`). Using a namespace ensures your command does not conflict with existing vanilla commands or those from other add-ons. The segment before the colon (`wiki:`) represents your chosen namespace, while the segment after the colon specifies the command's identifier.

-   **Description:**  
    The `description` property provides a short explanation of what your command does.

-   **Permission Level:**  
    The `permissionLevel` property controls who can use the command (e.g., `Any`, `Admin`, etc.). This helps restrict access to certain commands.

-   **Parameters:**  
    You can define both `mandatoryParameters` and `optionalParameters` for your command, with a maximum of 8 parameters.
    -   `mandatoryParameters` are required for the command to run.
    -   `optionalParameters` can be omitted by the player when using the command.

### Callback

The callback always gets the command origin as its first parameter, the rest of the parameters are based on the mandatoryParameters and optionalParameters you provide in the CustomCommand data. The number of parameters passed to the callback matches the number of parameters defined in the command, so if you have a command with 3 different parameters your callback would look like this:

<CodeHeader>BP/scripts/main.js</CodeHeader>

```js
customCommandRegistry.registerCommand(
    {
        name: "wiki:command",
        description: "An example command with three parameters",
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

For more details about custom commands, see the [Microsoft Docs on custom commands](https://learn.microsoft.com/en-us/minecraft/creator/documents/customcommands).

## Commands via chat send event

::: warning
Deprecated in favor of slash commands as of 1.20.80
:::

We will add simple commands, such as `!gmc` to change our gamemode to creative and `!gms` to change into survival.

<CodeHeader>BP/scripts/main.js</CodeHeader>

```js
import { GameMode, system, world } from "@minecraft/server";

world.beforeEvents.chatSend.subscribe((eventData) => {
    const player = eventData.sender;
    switch (eventData.message) {
        case "!gmc":
            eventData.cancel = true;
            system.run(() => {
                player.setGameMode(GameMode.creative);
            });
            break;
        case "!gms":
            eventData.cancel = true;
            system.run(() => {
                player.setGameMode(GameMode.survival);
            });
            break;
        default:
            break;
    }
});
```

This is the main function to execute our commands. `world.beforeEvents.chatSend.subscribe()` will run before chat messages get sent.

-   A `switch` statement runs through the possible options for the value, and if it matches, runs the code until the next `break` statement.
-   `system.run(() => {})` is used to delay the execution of the code inside the callback to the next tick. This is needed as we are in a "before" event, which prevents us from running certain functions, as they run before the actual tick.
-   `eventData.cancel = true` will cancel the chat message that will be sent - similar to how vanilla commands work.
-   `const player = eventData.sender` declares the variable `player` to be used later.
-   `player.setGameMode(GameMode.creative)` Sets the players gamemode to creative.

For more information about the Script API, you can reference the [wiki](/scripting/scripting-intro) or the [Microsoft Docs](https://learn.microsoft.com/en-us/minecraft/creator/documents/scriptingintroduction)
