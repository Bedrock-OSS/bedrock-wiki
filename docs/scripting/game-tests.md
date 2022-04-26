---
title: Game Tests
category: Game Tests
tags:
    - experimental
---

::: tip
The GameTest framework requires you to activate **"Enable GameTest Framework"** in your world settings, and you must be using **Minecraft 1.16.210.60 beta or above**.
:::

GameTests are a new feature that allows developers to create unit tests to make it easier to test if game mechanics work. They are built with javascript files in the behavior pack folder, and each file can register multiple GameTests. Each registered GameTest must also have a .mcstructure file in the `BP/structures` folder.
The API can also be used for creations outside of creating unit tests by just using the `"mojang-minecraft"` module, though this is currently limited.

## Using GameTests

In the behavior pack manifest, you need to add a `javascript` module to set an `entry` point for your GameTests.

<CodeHeader>BP/manifest.json</CodeHeader>

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
			"type": "javascript",
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

## Reference Documentation

Official documentation on the `"mojang-gametest"` module can be found [here](https://docs.microsoft.com/minecraft/creator/scriptapi/mojang-gametest/mojang-gametest) and found [here](https://docs.microsoft.com/minecraft/creator/scriptapi/mojang-minecraft/mojang-minecraft) for the `'mojang-minecraft'` module.

Official typescript declarations can be found here:

-   [mojang-minecraft](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/mojang-minecraft)
-   [mojang-gametest](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/mojang-gametest)

These allow for enhanced auto-completions and validation when used inside of your editor. bridge. v2 ships with GameTest support built-in.
