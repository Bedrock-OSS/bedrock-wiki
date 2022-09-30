---
title: Game Tests
category: Game Tests
tags:
    - experimental
---

::: tip
The GameTest framework requires you to activate **"Enable GameTest Framework"** or **"GameTest Framework"** in your world settings, and you must be using **Minecraft 1.16.210.60 beta or above**.
:::
::: warning
As of Beta 1.19.40.23 the whole scripting APIs will receive some breaking changes. 
:::

GameTests are a new feature that allows developers to create unit tests to make it easier to test if game mechanics work. They are built with javascript files in the behavior pack folder, and each file can register multiple GameTests. Each registered GameTest must also have a .mcstructure file in the `BP/structures` folder.
The API can also be used for creations outside of creating unit tests by just using the `"mojang-minecraft"` module, though this is currently limited.

## Using GameTests

In the behavior pack manifest, you need to add a `javascript` module for Minecraft versions below 1.19.0 or `script` module for Minecraft version 1.19.0 or above for Minecraft to set an `entry` point for your GameTests.

<CodeHeader>Minecraft 1.19.0+</CodeHeader>

```json
{
	"description": "",
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
	"description": "",
	"uuid": "239c134f-67bf-4738-9bcc-8c69d31b1f72",
	"version": [1, 0, 0],
	"type": "javascript",
	"entry": "scripts/gametests/Main.js"
}
```

<CodeHeader>BP/manifest.json (for Minecraft version 1.19.0+)</CodeHeader>

```json
{
	"format_version": 2,
	"header": {
		"name": "Pack Name",
		"description": "Pack descripton",
		"min_engine_version": [1, 16, 210],
		"uuid": "604420b9-f4c3-4df2-9f09-4364486f1195",
		"version": [1, 0, 0]
	},
	"modules": [
		{
			"description": "",
			"type": "data",
			"uuid": "42651ba5-6619-4547-9d48-84a5a37cf2a3",
			"version": [1, 0, 0]
		},
		{
			"description": "",
			"uuid": "239c134f-67bf-4738-9bcc-8c69d31b1f72",
			"version": [1, 0, 0],
			"type": "script",
			"language": "javascript",
			"entry": "scripts/gametests/Main.js"
		}
	],
	"dependencies": [
		{
			// Minecraft native module - needed to use the "mojang-minecraft" module
			"description": "mojang-minecraft",
			"uuid": "b26a4d4c-afdf-4690-88f8-931846312678",
			"version": [0, 1, 0]
		},
		{
			// GameTest native module - needed to use the "mojang-gametest" module
			"description": "mojang-gametest",
			"uuid": "6f4b6893-1bb6-42fd-b458-7fa3d0c89616",
			"version": [0, 1, 0]
		},
		{
			// Minecraft UI native module - needed to use the "mojang-minecraft-ui" module
			// You must be using Minecraft versions above Beta 1.18.20.21 or Release 1.18.30
			"description": "mojang-minecraft-ui",
			"uuid": "2bd50a27-ab5f-4f40-a596-3641627c635e",
			"version": [0, 1, 0]
		},
		{
			// Bedrock Dedicated Server's module for executing HTTP-based requests.
			// Cannot be used on Minecraft clients.
			"description": "mojang-net",
			"uuid": "777b1798-13a6-401c-9cba-0cf17e31a81b",
			"version": [ 0, 1, 0 ]
		},
		{
			// Bedrock Dedicated Server's module for modifying configuration of 
			// variables and secrets in JSON files in the Bedrock Dedicated 
			// Server "config" folder. Cannot be used on Minecraft clients.
			"description": "mojang-minecraft-server-admin",
			"uuid": "53d7f2bf-bf9c-49c4-ad1f-7c803d947920",
			"version": [ 0, 1, 0 ]
		}
	]
}
```

The entry point should link to a file containing imports to your GameTest files.

<CodeHeader>BP/scripts/gametests/Main.js</CodeHeader>

```js
import 'scripts/gametests/MyGameTest.js'
import 'scripts/gametests/OtherGameTest.js'
```

<CodeHeader>BP/scripts/gametests/MyGameTest.js</CodeHeader>

```js
// This file use to demonstrate that the code is working by
// Spamming the chat with "Hello World"
 
// Import world component from "mojang-minecraft"
import { world } from "mojang-minecraft";
// import variables from my other javascript file
import defaultExport, { export1 } from "./OtherGameTest.js";

// Spams the chat with "Hello World"
world.events.tick.subscribe(() => {
	// runs command in overworld dimension
	world.getDimension("overworld").runCommand(`say Hello World`);
});
```

<CodeHeader>BP/scripts/gametests/OtherGameTest.js</CodeHeader>

```js
export default function defaultExport (param) {};
export const export1 = "export1";
```

GameTests can be used with the /gametest command.

-   `/gametest runthis`

Runs the nearest GameTest in range.

-   `/gametest runthese`

Runs all GameTests in range.

-   `/gametest pos`

It tells you the relative coordinates of the nearest GameTest.

-   `/gametest clearall [radius: int]`

Removes all GameTests in the specified radius.

-   `/gametest run <testName: GameTestName> [rotationSteps: int]`

Creates and runs the specified GameTest.

-   `/gametest runset [tagTag: GameTestTag] [rotationSteps: int]`

Creates and runs all GameTests with the specified tag.

-   `/gametest create <testName: string> [width: int] [height: int] [depth: int]`

Creates a blank GameTest area with the specified dimensions.

-   `/reload`

Reloads all function and script files from all behavior packs. (1.19+)

## Reference Documentation

Official documentation on are hosted on Microsoft Docs and can be found here:

-   [`mojang-gametest`](https://docs.microsoft.com/minecraft/creator/scriptapi/mojang-gametest/mojang-gametest)
-   [`mojang-minecraft`](https://docs.microsoft.com/minecraft/creator/scriptapi/mojang-minecraft/mojang-minecraft)
-   [`mojang-minecraft-ui`](https://docs.microsoft.com/minecraft/creator/scriptapi/mojang-minecraft-ui/mojang-minecraft-ui)
-   [`mojang-minecraft-server-admin`](https://docs.microsoft.com/minecraft/creator/scriptapi/mojang-minecraft-server-admin/mojang-minecraft-server-admin)
-   [`mojang-net`](https://docs.microsoft.com/minecraft/creator/scriptapi/mojang-net/mojang-net)

Official typescript declarations can be found here:

-   [`mojang-minecraft`](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/mojang-minecraft)
-   [`mojang-gametest`](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/mojang-gametest)
-   [`mojang-minecraft-ui`](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/mojang-minecraft-ui)
-   [`mojang-minecraft-server-admin`](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/mojang-minecraft-server-admin/mojang-minecraft-server-admin)
-   [`mojang-net`](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/mojang-net)

These allow for enhanced auto-completions and validation when used inside of your editor.

- bridge. v2: ships with GameTest support built-in.

- Visual Studio Code: install Node.js and npm, then run the following in command line:

```
npm install @types/mojang-minecraft
npm install @types/mojang-gametest
npm install @types/mojang-minecraft-ui
npm install @types/mojang-minecraft-server-admin
npm install @types/mojang-net
```