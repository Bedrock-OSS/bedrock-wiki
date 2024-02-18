---
title: Starting Scripting
category: General
mentions:
    - cda94581
    - Herobrine643928
    - JaylyDev
    - SmokeyStack
    - kumja1
---

::: warning
The Script API is currently in active development, and breaking changes are frequent. This page assumes the format of Minecraft 1.20.60
:::

## Overview

The Script API (formerly GameTests, and not to be confused with the [Legacy Scripting API](/scripting/scripting-intro)) is a feature that allows for a new variety of creations, these are built with JavaScript files in the behavior pack folder. Some parts of the Script API are not experimental.

This page will give you an introduction to the 80% of Minecraft's Creator API concepts that you will use on a daily basis.

## Create your first project

Currently, script can only be used in behavior packs.

In the behavior pack manifest, you need to add a `script` module (1.19.0+) or `javascript` module (below 1.19.0) and set an `entry` point for your script project.

<CodeHeader>BP/manifest.json#modules[0]</CodeHeader>

```json
{
	"uuid": "239c134f-67bf-4738-9bcc-8c69d31b1f72",
	"version": [1, 0, 0],
	"type": "script",
	"language": "javascript",
	"entry": "scripts/Main.js"
}
```

Additionally, dependencies will need to be set based on modules used. To import API modules, specify dependencies using the `module_name` and `version`. In this example, the `@minecraft/server` module is used.

:::warning
There is a bug where you cannot apply resource pack into dependencies with script modules.

This problem causes Minecraft to stop the scripts from running and throws error related to "Unknown dependency".
:::

::: warning
Do not add `"uuid"` and `"module_name"` properties into dependency, add one or the other.
:::

<CodeHeader>BP/manifest.json</CodeHeader>

```json
{
  "format_version": 2,
  "header": {
    "name": "Bedrock Addons",
    "description": "Script API Template",
    "uuid": "<UUID>",
    "version": [0, 1, 0],
    "min_engine_version": [1, 20, 0]
  },
  "modules": [
    {
      "type": "script",
      "language": "javascript",
      "uuid": "<UUID>",
			// Your entry file
      "entry": "scripts/Main.js",
      "version": [0, 1, 0]
    }
  ],
  // to use eval() and Function(), remove it if it's not neccessary
  "capabilities": ["script_eval"],
  "dependencies": [
    {
			// Enables the use of @minecraft/server module
			// note that version changes every monthly releases.
      "module_name": "@minecraft/server",
      "version": "1.9.0-beta"
    },
    {
			// Enables the use of @minecraft/server-ui module
      "module_name": "@minecraft/server-ui",
      "version": "1.2.0-beta"
    }
  ]
}

```

If your project needs other module to run your code, add another dependency that follows the format above.

**Stable API modules**, these do not require the Beta APIs experiment to be turned on. The initial API set is narrow, but more features will be added over the coming months.

-   `@minecraft/server`:
    -   [`1.8.0`](https://www.npmjs.com/package/@minecraft/server/v/1.8.0) (Latest version)
    -   [`1.7.0`](https://www.npmjs.com/package/@minecraft/server/v/1.7.0)
    -   [`1.6.0`](https://www.npmjs.com/package/@minecraft/server/v/1.6.0)
    -   [`1.5.0`](https://www.npmjs.com/package/@minecraft/server/v/1.5.0)
    -   [`1.4.0`](https://www.npmjs.com/package/@minecraft/server/v/1.4.0)
    -   [`1.3.0`](https://www.npmjs.com/package/@minecraft/server/v/1.3.0)
    -   [`1.2.0`](https://www.npmjs.com/package/@minecraft/server/v/1.2.0)
    -   [`1.1.0`](https://www.npmjs.com/package/@minecraft/server/v/1.1.0)
    -   [`1.0.0`](https://www.npmjs.com/package/@minecraft/server/v/1.0.0)

-   `@minecraft/server-ui`:
    -   [`1.1.0`](https://www.npmjs.com/package/@minecraft/server-ui/v/1.1.0) (Latest version, requires `@minecraft/server@1.3.0`)

**Beta API modules**, requires the Beta APIs experiment to be turned on in world settings, with lots of experimental features in the API.

-   `@minecraft/server`:

    -   [`1.9.0-beta`](https://www.npmjs.com/package/@minecraft/server/v/1.9.0-beta.1.20.60-stable) (Latest beta)

-   `@minecraft/server-ui`:
    -   [`1.2.0-beta`](https://www.npmjs.com/package/@minecraft/server-ui/v/1.2.0-beta.1.20.60-stable) (Latest beta)
-   `@minecraft/server-gametest`:

    -   [`1.0.0-beta`](https://www.npmjs.com/package/@minecraft/server-gametest/v/1.0.0-beta.1.20.60-stable) (Latest beta)

-   `@minecraft/server-net`:

    -   [`1.0.0-beta`](https://www.npmjs.com/package/@minecraft/server-net/v/1.0.0-beta.1.20.60-stable) (Latest beta, Bedrock Dedicated Server module only, must enable in `permission.json`)

-   `@minecraft/server-admin`:

    -   [`1.0.0-beta`](https://www.npmjs.com/package/@minecraft/server-admin) (Latest beta, Bedrock Dedicated Server module only)

(Beta 1.19.40.23+) In order to use the `eval()` function or `Function()` constructors, you can add the following in the manifest capabilities:

<CodeHeader>BP/manifest.json</CodeHeader>

```json
{
	"capabilities": [
		"script_eval"
	]
}
```

The entry point contains scripts and/or imports to other script files.

## Writing scripts with JS

Minecraft's scripting engine only runs JavaScript, like any other JavaScript projects. Check out [Scripting with TypeScript](/scripting/typescript#script-api) for compiling TS directly to JavaScript.

<CodeHeader>BP/scripts/Main.js</CodeHeader>

```js
// This file demonstrates that the code is working by
// Spamming the chat with "Hello World"

// Import world component from "@minecraft/server"
import { world, system } from '@minecraft/server';

// Subscribe to an event that calls every Minecraft tick
system.runInterval(() => {
	// Spams the chat with "Hello World" with world.sendMessage function in API
	world.sendMessage("Hello World");

	// or run a command in overworld dimension
	// using native API methods (such as world.sendMessage) are recommended whenever possible.
	world.getDimension("overworld").runCommand("say Hello World");
});
```

## Reference Documentation

Official documentation are hosted on Microsoft Learn and can be found here:

-   [`@minecraft/server`](https://learn.microsoft.com/minecraft/creator/scriptapi/mojang-minecraft/mojang-minecraft)
-   [`@minecraft/server-gametest`](https://learn.microsoft.com/minecraft/creator/scriptapi/mojang-gametest/mojang-gametest)
-   [`@minecraft/server-ui`](https://learn.microsoft.com/minecraft/creator/scriptapi/mojang-minecraft-ui/mojang-minecraft-ui)
-   [`@minecraft/server-admin`](https://learn.microsoft.com/minecraft/creator/scriptapi/mojang-minecraft-server-admin/mojang-minecraft-server-admin)
-   [`@minecraft/server-net`](https://learn.microsoft.com/minecraft/creator/scriptapi/mojang-net/mojang-net)

Official typescript declarations for the latest Beta API modules in Minecraft Preview can be found here:

-   [`@minecraft/server`](https://www.npmjs.com/package/@minecraft/server/v/beta)
-   [`@minecraft/server-gametest`](https://www.npmjs.com/package/@minecraft/server-gametest/v/beta)
-   [`@minecraft/server-ui`](https://www.npmjs.com/package/@minecraft/server-ui/v/beta)
-   [`@minecraft/server-admin`](https://www.npmjs.com/package/@minecraft/server-admin/v/beta)
-   [`@minecraft/server-net`](https://www.npmjs.com/package/@minecraft/server-net/v/beta)

These allow for enhanced auto-completions and validation when used inside of your editor.

-   bridge. v2: Ships with GameTest support built-in.
-   Visual Studio Code: Install Node.js and npm, then run the following in command line:

Latest beta API modules:

```bash
npm i @minecraft/server@beta
npm i @minecraft/server-ui@beta
npm i @minecraft/server-gametest@beta
npm i @minecraft/server-admin@beta
npm i @minecraft/server-net@beta
npm i @minecraft/vanilla-data
```

Latest stable API modules:

```bash
npm install @minecraft/server
npm install @minecraft/server-ui
```
