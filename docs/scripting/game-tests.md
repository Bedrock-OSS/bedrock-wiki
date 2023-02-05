---
title: Script API
category: Script API
tags:
    - experimental
mentions:
	- cda94581
---

::: tip
The Script API requires you to activate **"Beta APIs"**, **"Enable GameTest Framework"**, or **"GameTest Framework"** in your world settings, and you must be using **Minecraft 1.16.210.60 beta or above**.
:::
::: warning
The Script API is currently in active development, and breaking changes are frequent. This page assumes the format of Minecraft beta 1.19.40.23
:::

The Script API (formerly GameTests, and not to be confused with the [Legacy Scripting API](/scripting/scripting-intro)) is a beta feature that allows for a new variety of creations, as well as unit tests ("GameTests") to make it easier to test if game mechanics work. These are built with JavaScript files in the behavior pack folder.

## Using Scripts

In the behavior pack manifest, you need to add a `javascript` module (below 1.19.0) or `script` module (1.19.0+) and set an `entry` point for your GameTests.

<CodeHeader>Minecraft 1.19.0+</CodeHeader>

```json
{
	"uuid": "239c134f-67bf-4738-9bcc-8c69d31b1f72",
	"version": [1, 0, 0],
	"type": "script",
	"language": "javascript",
	"entry": "scripts/gametests/Main.js"
}
```

<CodeHeader>Minecraft version below 1.19.0</CodeHeader>

```json
{
	"uuid": "239c134f-67bf-4738-9bcc-8c69d31b1f72",
	"version": [1, 0, 0],
	"type": "javascript",
	"entry": "scripts/gametests/Main.js"
}
```

Additionally, dependencies will need to be set based on modules used

**@minecraft/server** - `b26a4d4c-afdf-4690-88f8-931846312678`  
AKA "Minecraft", "mojang-minecraft"

**@minecraft/server-gametest** - `6f4b6893-1bb6-42fd-b458-7fa3d0c89616`  
AKA "GameTest", "mojang-gametest"

**@minecraft/server-ui** - `2bd50a27-ab5f-4f40-a596-3641627c635e`  
Beta 1.18.20.21+ (Release 1.18.30+)  
AKA "mojang-minecraft-ui"

**@minecraft/server-admin** - `53d7f2bf-bf9c-49c4-ad1f-7c803d947920`  
BDS module for configuration of variables and secrets. Cannot be used on Minecraft clients.  
Release 1.19.10+  
AKA "mojang-minecraft-server-admin"

**@minecraft/server-net** - `777b1798-13a6-401c-9cba-0cf17e31a81b`  
BDS module for executing HTTP-based requests. Cannot be used on Minecraft clients.  
Release 1.19.10+  
AKA "mojang-net"

**Version**

- Before 1.19.20 - `[ 0, 1, 0 ]`
- 1.19.20+ - `"1.0.0-beta"`

As of release 1.19.30, you can also specify dependencies using `module_name`:

<CodeHeader>BP/manifest.json#dependencies[0]</CodeHeader>

```json
{
	"module_name": "@minecraft/server",
	"version": "1.0.0-beta"
}
```

(Beta 1.19.40.23+) In order to use the `eval()` function or `Function()` constructor, specify in the manifest capabilities:

<CodeHeader>BP/manifest.json</CodeHeader>

```json
{
	"capabilities": [
		"script_eval"
	]
}
```

The entry point contains scripts and/or imports to other script files.

<CodeHeader>BP/scripts/gametests/Main.js</CodeHeader>

```js
import './MyGameTest.js';
import './OtherGameTest.js';
```

<CodeHeader>BP/scripts/gametests/MyGameTest.js</CodeHeader>

```js
// This file demonstrates that the code is working by
// Spamming the chat with "Hello World"
 
// Import world component from "@minecraft/server"
import { world } from '@minecraft/server';
// Import variables from other javascript file
import defaultExport, { export1 } from "./OtherGameTest.js";

// Spams the chat with "Hello World"
world.events.tick.subscribe(() => {
	// Runs command in overworld dimension
	world.getDimension("overworld").runCommandAsync(`say Hello World`);
});
```

<CodeHeader>BP/scripts/gametests/OtherGameTest.js</CodeHeader>

```js
export default function defaultExport (param) {};
export const export1 = "export1";
```

GameTests can be used with the `/gametest` command.

-   `/gametest runthis` - Runs the nearest GameTest in range.
-   `/gametest runthese` - Runs all GameTests in range.
-   `/gametest pos` - It tells you the relative coordinates of the nearest GameTest.
-   `/gametest clearall [radius: int]` - Removes all GameTests in the specified radius.
-   `/gametest run <testName: GameTestName> [rotationSteps: int]` - Creates and runs the specified GameTest.
-   `/gametest runset [tagTag: GameTestTag] [rotationSteps: int]` - Creates and runs all GameTests with the specified tag.
-   `/gametest create <testName: string> [width: int] [height: int] [depth: int]` - Creates a blank GameTest area with the specified dimensions.
-   `/reload` - Reloads all function and script files from all behavior packs. (1.19+)

## Reference Documentation

Official documentation on are hosted on Microsoft Learn and can be found here:

-   [`@minecraft/server`](https://learn.microsoft.com/minecraft/creator/scriptapi/mojang-minecraft/mojang-minecraft)
-   [`@minecraft/server-gametest`](https://learn.microsoft.com/minecraft/creator/scriptapi/mojang-gametest/mojang-gametest)
-   [`@minecraft/server-ui`](https://learn.microsoft.com/minecraft/creator/scriptapi/mojang-minecraft-ui/mojang-minecraft-ui)
-   [`@minecraft/server-admin`](https://learn.microsoft.com/minecraft/creator/scriptapi/mojang-minecraft-server-admin/mojang-minecraft-server-admin)
-   [`@minecraft/server-net`](https://learn.microsoft.com/minecraft/creator/scriptapi/mojang-net/mojang-net)

Official typescript declarations can be found here:

-   [`@minecraft/server`](https://www.npmjs.com/package/@minecraft/server/v/1.0.0-beta.11940b23)
-   [`@minecraft/server-gametest`](https://www.npmjs.com/package/@minecraft/server-gametest/v/1.0.0-beta.11940b23)
-   [`@minecraft/server-ui`](https://www.npmjs.com/package/@minecraft/server-ui/v/1.0.0-beta.11940b23)
-   [`@minecraft/server-admin`](https://www.npmjs.com/package/@minecraft/server-admin/v/1.0.0-beta.11940b23)
-   [`@minecraft/server-net`](https://www.npmjs.com/package/@minecraft/server-net/v/1.0.0-beta.11940b23)

These allow for enhanced auto-completions and validation when used inside of your editor.
- bridge. v2: ships with GameTest support built-in.
- Visual Studio Code: install Node.js and npm, then run the following in command line:

```
npm install @minecraft/server
npm install @minecraft/server-gametest
npm install @minecraft/server-ui
npm install @minecraft/server-admin
npm install @minecraft/server-net
```

If you're having issues with the Script API, consider joining **Bedrock Add-Ons** for support, which you can find alongside a vast array of other resources on the [Useful Links](/meta/useful-links#discord-links) page!
