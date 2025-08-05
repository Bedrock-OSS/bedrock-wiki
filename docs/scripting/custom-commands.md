---
title: Custom Commands
description: Learn how to create your own commands that can be used in chat, command blocks and elsewhere using scripts.
category: Tutorials
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
The Script API is currently in active development, and breaking changes are frequent. This page assumes the format of Minecraft 1.21.100
:::

Who doesn't want cool custom commands? With the Script API, you can create your own. In this article, we will be creating them using the Script API.

## Pack Setup

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
        "min_engine_version": [1, 21, 90],
        "version": "1.0.0"
    },
    "modules": [
        {
            "type": "data",
            "uuid": "cd2cd41a-1849-410e-8f0a-5d30fde4bd9a",
            "version": "1.0.0!
        },
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

In our manifest, we have added a script module. The `entry` is where our script file is stored. This is typically within the `scripts` folder of the behavior pack. The dependency allows us to use that script module in our script.

<FolderView :paths="[
    'BP/scripts/main.js',
    'BP/manifest.json',
    'BP/pack_icon.png'
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
