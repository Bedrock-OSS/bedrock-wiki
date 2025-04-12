---
title: Block Placement Prevention
description: Prevent block placement via scripts.
category: Tutorials
mentions:
    - JWForever5504
    - QuazChick
---

The tutorial has been separated into two sections: one for stable methods and one for beta methods. You can now use these sections independently depending on which version of the Script API you are working with.

::: warning
The Script API is currently in active development, and breaking changes are frequent. This page assumes the format of Minecraft 1.21.20.
:::

Ever need to prevent a specific block from being placed? In 1.20.10, some dangerous unobtainable blocks can be acquired, so you can use this script to keep your world or server safe!

## Setup

::: tip
Before creating a script, it is recommended to learn the basics of JavaScript, Add-ons, and the Script API. To see what the Script API can do, see the [Microsoft Docs](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/).
:::

Just like other scripts, you need the dependency in your `manifest.json`. We are using the `@minecraft/server` module, specifically version `1.14.0-beta`.

<CodeHeader>BP/manifest.json</CodeHeader>

```json
{
    "format_version": 2,
    "header": {
        "name": "Block Placement Prevention",
        "description": "Prevent Placing of Certain Blocks using Script API",
        "uuid": "6f3a4325-4ce5-42f5-b141-12641c8823c3",
        "min_engine_version": [1, 20, 10],
        "version": [1, 0, 0]
    },
    "modules": [
        {
            "description": "Behavior Pack Module",
            "type": "data",
            "uuid": "5a080d1d-bef8-47ce-aae1-a2ec3e0010ab",
            "version": [1, 0, 0]
        },
        {
            "description": "Gametest Module",
            "type": "script",
            "language": "javascript",
            "entry": "scripts/main.js",
            "uuid": "53a5804b-fb35-4f7d-a89e-e4a925fadb77",
            "version": [1, 0, 0]
        }
    ],
    "dependencies": [
        {
            // Minecraft native module - needed to use the "@minecraft/server" module
            "module_name": "@minecraft/server",
            "version": "1.14.0-beta"
        }
    ]
}
```

In our manifest, we have added script module. The `entry` is where our script file is stored. This is within the `scripts` folder of the behavior pack. The dependency allows us to use the required script module in our code.

<FolderView
	:paths="[
		'BP/manifest.json',
		'BP/pack_icon.png',
        'BP/scripts/main.js'
	]"
/>

## First Preventative Measure (Stable)

Even if you are going to use another block, if this is your first time creating this script, follow the tutorial exactly. After you are sure you made the script correctly, you can change the block.

This is because blocks often have an identifier different from what you may think. For example, Glow Item Frames are known internally as `minecraft:glow_frame`.

We will start by adding the module imports we will be using in the code.

<CodeHeader>BP/scripts/main.js</CodeHeader>

```js
import { world, system } from "@minecraft/server";
```

::: tip
Learn more about `system` at [System Events](/scripting/script-server#events).
:::

After we have added the module, we will add the preventative measure for block placement.

<CodeHeader>BP/scripts/main.js</CodeHeader>

```js
world.beforeEvents.playerPlaceBlock.subscribe((event) => {
    const player = event.source;
    if (event.permutationBeingPlaced.type.id === "minecraft:bedrock") {
        event.cancel = true;
        system.run(() => {
            player.sendMessage("You cannot place Bedrock");
        });
    }
});
```

This is the main function to execute our code. `world.beforeEvents.playerPlaceBlock.subscribe()` will run before any block is placed.

-   `const player = event.source;` defines the variable `player` as whatever the source of the event is (the one who is placing the block). `const` is used over `var` or `let` to say that the source _cannot_ be changed, and is constant.
-   The `if()` statement requires the criteria to evaluate to true in order for the code within the brackets to run.
    -   `event.permutationBeingPlaced.type.id === 'minecraft:bedrock'` verifies that the block being placed is 'minecraft:bedrock'.
    -   `event.block.typeId != "minecraft:frame" && event.block.typeId != "minecraft:glow_frame"` checks that the block being targeted is not an item frame, so that the block whose placement is being canceled can still be placed in item frames.
-   `event.cancel = true;` cancels the placement action that would be performed by this event.
-   `system.run()` is a system call that tells minecraft to push the code being ran to the next tick. This is neccessary as before events cannot modify the state of the world (in our case, sending a message to the player), and using system run makes the code unbound by this limitation. More information on system callbacks & loops can be found [here](https://learn.microsoft.com/en-us/minecraft/creator/documents/systemrunguide).
-   `player.sendMessage()` sends a message to the player letting them know that they cannot place that block.

## Conclusion (Stable)

The message `You cannot place Bedrock` can be modified or replaced with your own logic as needed.

You can also change the typeId of the block being checked in `event.permutationBeingPlaced.type.id === 'minecraft:bedrock'`. Put the namespace and identifier in place of `minecraft:bedrock`.

To learn more about Script API, you can check out the [wiki](/scripting/scripting-intro) or the [Microsoft Docs](https://learn.microsoft.com/en-us/minecraft/creator/documents/scriptdevelopertools)
