---
title: Intro to Scripting
category: General
nav_order: 1
mentions:
    - cda94581
    - Herobrine643928
    - JaylyDev
    - SmokeyStack
    - kumja1
    - realfeatherdev
    - QuazChick
    - jeanmajid
description: Learn how to modify your world through the use of JavaScript files.
---

::: tip
This script API page assumes basic knowledge of pack setup for add-ons. For information on how to set up behaviour packs, please see the [Introduction to Add-Ons](/guide/introduction) page.
:::

::: warning
The Script API is currently in active development, and breaking changes are frequent. This page assumes the format of Minecraft 1.21.90.
:::

## Overview

The Script API (formerly GameTest Framework) is a feature that allows for a new variety of creations, these are built with JavaScript files in the behavior pack folder. Most parts of the Script API are not experimental.

This page will give you an introduction to the 80% of Minecraft's Creator API concepts that you will use on a daily basis.

## Create Your First Project

Currently, scripts can only be used in behavior packs.

In the behavior pack manifest, you need to add a `script` module and set an `entry` point for your script project. Currently, only `"javascript"` is supported as a valid language.

<CodeHeader>BP/manifest.json#modules[0]</CodeHeader>

```json
{
    "uuid": "239c134f-67bf-4738-9bcc-8c69d31b1f72",
    "version": "1.0.0",
    "type": "script",
    "language": "javascript",
    "entry": "scripts/main.js"
}
```

Additionally, dependencies will need to be set based on modules used. To import and use script API modules, you must specify dependencies using the `module_name` and `version`. In this example, the `@minecraft/server` module is used.

<CodeHeader>BP/manifest.json</CodeHeader>

```json
{
    "format_version": 2,
    "header": {
        "name": "Bedrock Add-ons",
        "description": "Script API Template",
        "uuid": "<UUID>",
        "version": "1.0.0",
        "min_engine_version": [1, 21, 90]
    },
    "modules": [
        {
            "uuid": "<UUID>",
            "version": "1.0.0",
            "type": "script",
            "language": "javascript",
            // Your entry file; where Minecraft will read your code from.
            "entry": "scripts/main.js",
        }
    ],
    // Uncomment to use eval() and Function() inside your code (unrecommended), remove if not neccessary
    // "capabilities": ["script_eval"],
    "dependencies": [
        {
            // Enables the use of @minecraft/server module, with a version of 2.0.0 (the latest stable version available).
            "module_name": "@minecraft/server",
            "version": "2.0.0"
        }
    ]
}
```

If your project needs other module to run your code, add the other dependencies that follow the format above.

**Stable API modules**, these do not require the Beta APIs experiment to be turned on. Most features are included in stable APIs, and will not break or be changed when Minecraft is updated.

-   `@minecraft/server`:

    -   [`2.0.0`](https://www.npmjs.com/package/@minecraft/server/v/2.0.0) (Latest version)
    -   [`1.19.0`](https://www.npmjs.com/package/@minecraft/server/v/1.19.0)
    -   [`1.18.0`](https://www.npmjs.com/package/@minecraft/server/v/1.18.0)
    -   [`1.17.0`](https://www.npmjs.com/package/@minecraft/server/v/1.17.0)
    -   [`1.16.0`](https://www.npmjs.com/package/@minecraft/server/v/1.16.0)
    -   [`1.15.0`](https://www.npmjs.com/package/@minecraft/server/v/1.15.0)
    -   [`1.14.0`](https://www.npmjs.com/package/@minecraft/server/v/1.14.0)
    -   [`1.13.0`](https://www.npmjs.com/package/@minecraft/server/v/1.13.0)
    -   [`1.12.0`](https://www.npmjs.com/package/@minecraft/server/v/1.12.0)
    -   [`1.11.0`](https://www.npmjs.com/package/@minecraft/server/v/1.11.0)
    -   [`1.10.0`](https://www.npmjs.com/package/@minecraft/server/v/1.10.0)
    -   [`1.9.0`](https://www.npmjs.com/package/@minecraft/server/v/1.9.0)
    -   [`1.8.0`](https://www.npmjs.com/package/@minecraft/server/v/1.8.0)
    -   [`1.7.0`](https://www.npmjs.com/package/@minecraft/server/v/1.7.0)
    -   [`1.6.0`](https://www.npmjs.com/package/@minecraft/server/v/1.6.0)
    -   [`1.5.0`](https://www.npmjs.com/package/@minecraft/server/v/1.5.0)
    -   [`1.4.0`](https://www.npmjs.com/package/@minecraft/server/v/1.4.0)
    -   [`1.3.0`](https://www.npmjs.com/package/@minecraft/server/v/1.3.0)
    -   [`1.2.0`](https://www.npmjs.com/package/@minecraft/server/v/1.2.0)
    -   [`1.1.0`](https://www.npmjs.com/package/@minecraft/server/v/1.1.0)
    -   [`1.0.0`](https://www.npmjs.com/package/@minecraft/server/v/1.0.0)

-   `@minecraft/server-ui`:

    -   [`2.0.0`](https://www.npmjs.com/package/@minecraft/server-ui/v/2.0.0) (Latest version, requires `@minecraft/server@2.0.0`)
    -   [`1.3.0`](https://www.npmjs.com/package/@minecraft/server-ui/v/1.3.0)
    -   [`1.2.0`](https://www.npmjs.com/package/@minecraft/server-ui/v/1.2.0)
    -   [`1.1.0`](https://www.npmjs.com/package/@minecraft/server/v/1.1.0)
    -   [`1.0.0`](https://www.npmjs.com/package/@minecraft/server/v/1.0.0) (Requires `@minecraft/server@1.2.0`)

**Beta API modules**, requirs the Beta APIs experiment to be turned on in world settings, and add many of experimental features in the API. These APIs can be changed, removed, or added to with very little warning, and are prone to breaking. Be warned!

-   `@minecraft/server`:

    -   [`2.1.0-beta`](https://www.npmjs.com/package/@minecraft/server/v/2.1.0-beta.1.21.90-stable) (1.21.90)
    -   [`2.0.0-beta`](https://www.npmjs.com/package/@minecraft/server/v/2.0.0-beta.1.21.80-stable) (1.21.70)
    -   [`1.18.0-beta`](https://www.npmjs.com/package/@minecraft/server/v/1.18.0-beta.1.21.62-stable) (1.21.60)
    -   [`1.17.0-beta`](https://www.npmjs.com/package/@minecraft/server/v/1.17.0-beta.1.21.50-stable) (1.21.50)
    -   [`1.16.0-beta`](https://www.npmjs.com/package/@minecraft/server/v/1.16.0-beta.1.21.40-stable) (1.21.40)
    -   [`1.15.0-beta`](https://www.npmjs.com/package/@minecraft/server/v/1.15.0-beta.1.21.30-stable) (1.21.30)
    -   [`1.14.0-beta`](https://www.npmjs.com/package/@minecraft/server/v/1.14.0-beta.1.21.20-stable) (1.21.20)

-   `@minecraft/server-ui`:

    -   [`2.1.0-beta`](https://www.npmjs.com/package/@minecraft/server-ui/v/2.0.0-beta.1.21.90-stable) (1.21.90)
    -   [`2.0.0-beta`](https://www.npmjs.com/package/@minecraft/server-ui/v/2.0.0-beta.1.21.80-stable) (1.21.70)
    -   [`1.4.0-beta`](https://www.npmjs.com/package/@minecraft/server-ui/v/1.4.0-beta.1.21.50-stable) (1.21.30)
    -   [`1.3.0-beta`](https://www.npmjs.com/package/@minecraft/server-ui/v/1.3.0-beta.1.21.23-stable) (1.21.20)
    
-   `@minecraft/server-gametest`:

    -   [`1.0.0-beta`](https://www.npmjs.com/package/@minecraft/server-gametest/v/1.0.0-beta.1.21.90-stable)

-   `@minecraft/server-net`:

    -   [`1.0.0-beta`](https://www.npmjs.com/package/@minecraft/server-net/v/1.0.0-beta.1.21.90-stable) (Bedrock Dedicated Server module only, must be enabled in `permission.json` as it is not enabled by default)

-   `@minecraft/server-admin`:

    -   [`1.0.0-beta`](https://www.npmjs.com/package/@minecraft/server-admin/v/1.0.0-beta.1.21.90-stable) (Bedrock Dedicated Server module only)

-   `@minecraft/debug-utilities`:

    -   [`1.0.0-beta`](https://www.npmjs.com/package/@minecraft/debug-utilities/v/1.0.0-beta.1.21.90-stable)

In order to use the `eval()` function or `Function()` constructors within your code, you can add the following in the manifest capabilities:

<CodeHeader>BP/manifest.json</CodeHeader>

```json
{
    "capabilities": ["script_eval"]
}
```

The entry point file can contain scripts and/or imports to other script files. Only one entry point file can be specified.

## Writing Scripts with JS

Minecraft's scripting engine only runs JavaScript, like any other JavaScript projects. Check out [Scripting with TypeScript](/scripting/typescript#script-api) for compiling TS directly to JavaScript.

<CodeHeader>BP/scripts/main.js</CodeHeader>

```js
// This file demonstrates that the code is working by
// Spamming the chat with "Hello World"

// Import world & system component from "@minecraft/server", for world & game logic.
import { world, system } from "@minecraft/server";

// Create & run an interval that is called every Minecraft tick
system.runInterval(() => {
    // Spams the chat with "Hello World" with world.sendMessage function from the API
    world.sendMessage("Hello World");
}, 1);
```

## Script API 2.0.0

With Script API Version 2, scripts now by default execute before the world has loaded. This means that we now have to wait until the world is loaded to run most functions.

<CodeHeader>BP/scripts/main.js</CodeHeader>

```js
import { world } from "@minecraft/server";

// wait until the world is loaded
world.afterEvents.worldLoad.subscribe(() => {
    // Send a message in chat
    world.sendMessage("World has loaded");

    // import other js files
    import("./path/to/file.js");
});
```

## Reference Documentation

Official documentation are hosted on Microsoft Learn and can be found here:

-   [`@minecraft/server`](https://learn.microsoft.com/minecraft/creator/scriptapi/mojang-minecraft/mojang-minecraft)
-   [`@minecraft/server-gametest`](https://learn.microsoft.com/minecraft/creator/scriptapi/mojang-gametest/mojang-gametest)
-   [`@minecraft/server-ui`](https://learn.microsoft.com/minecraft/creator/scriptapi/minecraft/server-ui/minecraft-server-ui)
-   [`@minecraft/server-admin`](https://learn.microsoft.com/minecraft/creator/scriptapi/mojang-minecraft-server-admin/mojang-minecraft-server-admin)
-   [`@minecraft/server-net`](https://learn.microsoft.com/minecraft/creator/scriptapi/mojang-net/mojang-net)
-   [`@minecraft/debug-utilities`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/debug-utilities/minecraft-debug-utilities)

Official typescript declarations for the latest Beta API modules in Minecraft Preview can be found here:

-   [`@minecraft/server`](https://www.npmjs.com/package/@minecraft/server/v/beta)
-   [`@minecraft/server-gametest`](https://www.npmjs.com/package/@minecraft/server-gametest/v/beta)
-   [`@minecraft/server-ui`](https://www.npmjs.com/package/@minecraft/server-ui/v/beta)
-   [`@minecraft/server-admin`](https://www.npmjs.com/package/@minecraft/server-admin/v/beta)
-   [`@minecraft/server-net`](https://www.npmjs.com/package/@minecraft/server-net/v/beta)
-   [`@minecraft/debug-utilities`](https://www.npmjs.com/package/@minecraft/debug-utilities/v/beta)

These allow for enhanced auto-completions and validation when used inside of your editor.

-   bridge. v2: Ships with GameTest support built-in.
-   Visual Studio Code: Install Node.js and npm, then run the following in command line:

Latest beta API modules:

```bash
npm i @minecraft/server@2.1.0-beta.1.21.90-stable
npm i @minecraft/server-ui@2.1.0-beta.1.21.90-stable
npm i @minecraft/server-gametest@1.0.0-beta.1.21.90-stable
npm i @minecraft/server-admin@1.0.0-beta.1.21.90-stable
npm i @minecraft/server-net@1.0.0-beta.1.21.90-stable
npm i @minecraft/debug-utilities@1.0.0-beta.1.21.90-stable
```

Latest stable API modules:

```bash
npm i @minecraft/server
npm i @minecraft/server-ui
```
