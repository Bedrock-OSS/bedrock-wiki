---
title: GameTests
description: Learn how to use the GameTest Framework to test whether game mechanics from your map or add-on work.
category: Tutorials
tags:
    - experimental
mentions:
    - cda94581
    - SirLich
    - Joelant05
    - solvedDev
    - sermah
    - stirante
    - Paty007gr
    - JaylyDev
    - Fabrimat
    - Herobrine643928
    - kumja1
    - QuazChick
---

:::warning BETA APIS
The Script API is currently in active development, and breaking changes are frequent. This page assumes the format of Minecraft 1.20.40
:::

The GameTest Framework allows us to create unit tests ("GameTests") which make it easier to test if game mechanics work.

GameTests can be used with the `/gametest` command.

-   `/gametest runthis` - Runs the nearest GameTest in range.
-   `/gametest runthese` - Runs all GameTests in range.
-   `/gametest pos` - It tells you the relative coordinates of the nearest GameTest.
-   `/gametest clearall [radius: int]` - Removes all GameTests in the specified radius.
-   `/gametest run <testName: GameTestName> [rotationSteps: int]` - Creates and runs the specified GameTest.
-   `/gametest runset [tagTag: GameTestTag] [rotationSteps: int]` - Creates and runs all GameTests with the specified tag.
-   `/gametest create <testName: string> [width: int] [height: int] [depth: int]` - Creates a blank GameTest area with the specified dimensions.
-   `/reload` - Reloads all function and script files from all behavior packs. (1.19+)

Since 1.19.40, vanilla GameTests have not been included in the Minecraft game files, so you cannot run any GameTests without adding your own custom behavior pack.
You can find vanilla GameTests in the [minecraft-gametests](https://github.com/microsoft/minecraft-gametests/tree/main/js-gametests/behavior_packs/JsGameTests) GitHub repository.

## Getting Started with GameTest

To get started, you'll want to begin with your own behavior pack and decent knowledge of scripting and API. If you're getting started check out [this article](/scripting/scripting-intro).

To use the GameTest Framework, the `@minecraft/server-gametest` module is required. The GameTest API module also requires the `@minecraft/server` module, so in your dependency in your manifest.json requires the following:

<CodeHeader>BP/manifest.json/</CodeHeader>

```json
"dependencies": [
    {
        "module_name": "@minecraft/server",
        "version": "1.7.0-beta"
    },
    {
        "module_name": "@minecraft/server-gametest",
        "version": "1.0.0-beta"
    }
]
```

To run a GameTest, a structure file is required on your behavior pack and the command needs to be registered via `register` function.

<CodeHeader>BP/scripts/Main.js</CodeHeader>

```js
import * as GameTest from "@minecraft/server-gametest";

// Registration code for our test
GameTest.register(
    "wiki", // Name of the class of tests.
    "simpleTest", // Name of this test.
    (test) => {
        // Implementation of the test
        /**
         * @type {import("@minecraft/server").Vector3}
         * location from the test of where the cow should spawn in
         */
        const location = { x: 0, y: 0, z: 0 };
        const cow = test.spawn("minecraft:cow", location); // Returns an Entity instance

        test.succeedWhen(() => {
            test.assertEntityPresentInArea("minecraft:cow", true);
        });
    }
)
    .maxTicks(410)
    .structureName("wiki:test"); // References "BP/structures/wiki/test.mcstructure"
```

The test function is locked when the command is registered, meaning the test function can not access to variables outside the test function after the command is registered.

If you're having issues with the Script API, consider checking out the [Building your first GameTest](https://learn.microsoft.com/minecraft/creator/documents/gametestbuildyourfirstgametest) guide on Microsoft Learn, or joining the **Bedrock Add-Ons** Discord server for support, which you can find alongside a vast array of other resources on the [Useful Links](/meta/useful-links#discord-links) page!
