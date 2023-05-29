---
title: Starting Scripting
category: General
mentions:
    - cda94581
---

::: warning
The Script API is currently in active development, and breaking changes are frequent. This page assumes the format of Minecraft 1.19.80
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

Additionally, dependencies will need to be set based on modules used.

-	**`@minecraft/server`** - `b26a4d4c-afdf-4690-88f8-931846312678`
	-	Formerly known as "Minecraft", "mojang-minecraft"

-	**`@minecraft/server-gametest`** - `6f4b6893-1bb6-42fd-b458-7fa3d0c89616`
	-	Formerly known as "GameTest", "mojang-gametest"

-	**`@minecraft/server-ui`** - `2bd50a27-ab5f-4f40-a596-3641627c635e`
	-	Beta 1.18.20.21+ (Release 1.18.30+)
	-	Formerly known as "mojang-minecraft-ui"

-	**`@minecraft/server-admin`** - `53d7f2bf-bf9c-49c4-ad1f-7c803d947920`
	-	BDS module for configuration of variables and secrets. This module is only available in [Bedrock Dedicated Servers](https://www.minecraft.net/en-us/download/server/bedrock) and cannot be used on realms and worlds.
	-	Release 1.19.10+
	-	Formerly known as "mojang-minecraft-server-admin"

-	**`@minecraft/server-net`** - `777b1798-13a6-401c-9cba-0cf17e31a81b`
	-	BDS module for executing HTTP-based requests. This module is only available in [Bedrock Dedicated Servers](https://www.minecraft.net/en-us/download/server/bedrock) and cannot be used on realms and worlds.
	-	Release 1.19.10+
	-	Formerly known as "mojang-net"

Here's an example of dependencies in manifest:

:::warning
There is a bug where you cannot apply resource pack into dependencies with script modules.

This problem causes Minecraft to stop the scripts from running and throws error related to "Unknown dependency". 
:::

<CodeHeader>BP/manifest.json</CodeHeader>

```json
"dependencies": [
	{
		"module_name": "@minecraft/server",
		"version": "1.2.0-beta"
	},
	{
		"module_name": "@minecraft/server-ui",
		"version": "1.0.0-beta"
	}
]
```

## Script Versioning

Script API modules all have their own versions and since 1.19.20 they follow semantic versioning (which follows the format of X.Y.Z) to determine new features that have released into the API. You can learn how Minecraft script module versioning works [here](https://learn.microsoft.com/en-us/minecraft/creator/documents/scriptversioning)

-   Before 1.19.20
	
	All API modules use `[ 0, 1, 0 ]`. GameTest Framework experiment must be activated to use in world.

-	1.19.20+
	
	All API modules have their versions incremented to `"1.0.0-beta"`, new features/changes are available in the beta version, and `0.1.0` has old developments and features in the API. GameTest Framework experiment must be activated to use in world.

-   1.19.50+
	
	**Stable API modules**, these do not require the Beta APIs experiment to be turned on. The initial API set is narrow, but more features will be added over the coming months.

	-	`@minecraft/server`:
		-	`1.1.0`
		- `1.0.0`

	**Beta API modules**, requires the Beta APIs experiment to be turned on in world settings, with lots of experimental features in the API.
	
	-	`@minecraft/server`:
		-	`1.2.0-beta`
		-	`0.1.0` (use `mojang-minecraft`, NOT `@minecraft/server` when importing module for this version)

	-	`@minecraft/server-ui`:
		-	`1.0.0-beta`
		-	`0.1.0` (use `mojang-minecraft-ui`, NOT `@minecraft/server-ui` when importing module for this version)
		
	-	`@minecraft/server-gametest`:
		-	`1.0.0-beta`

	-	`@minecraft/server-net`:
		-	`1.0.0-beta` (Bedrock Dedicated Server module only, must enable in `permission.json`)

	-	`@minecraft/server-admin`:
		-	`1.0.0-beta` (Bedrock Dedicated Server module only)

As of release 1.19.30, you can also specify dependencies using the `module_name`:

::: warning
Do not add `"uuid"` and `"module_name"` properties into dependency, add one or the other.
:::

<CodeHeader>BP/manifest.json#dependencies[0]</CodeHeader>

```json
{
	"module_name": "@minecraft/server",
	"version": "1.2.0-beta"
}
```

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

Minecraft's scripting engine only runs JavaScript, like any other JavaScript projects. Check out [Scripting with TypeScript](./typescript#script-api) for compiling TS directly to JavaScript.

<CodeHeader>BP/scripts/Main.js</CodeHeader>

```js
// This file demonstrates that the code is working by
// Spamming the chat with "Hello World"

// Import world component from "@minecraft/server"
import { world } from '@minecraft/server';

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

-	[`@minecraft/server`](https://learn.microsoft.com/minecraft/creator/scriptapi/mojang-minecraft/mojang-minecraft)
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
npm install @minecraft/server@beta
npm install @minecraft/server-gametest@beta
npm install @minecraft/server-ui@beta
npm install @minecraft/server-admin@beta
npm install @minecraft/server-net@beta
```

Latest stable API modules:

```bash
npm install @minecraft/server
```
