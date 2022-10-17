---
title: Simple Custom Commands
category: Script API
tags:
    - experimental
mentions:
	- cda94581
---
::: warning
The Script API is currently in active development, and breaking changes are frequent. This page assumes the format of Minecraft beta 1.19.40.23
:::

Who doesn't want any custom command? Me neither. With the Script API, you can create your custom command. In this article, we will create your own custom command using the Script API.

## Setup Pack

:::tip
Before creating a script, it is recommended to learn the basics of JavaScript, Addons, and the Script API. To see what the Script API can do, see the [Microsoft Docs](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/)
:::

We think you have understood all of these things, so create your pack

<CodeHeader>manifest.json</CodeHeader>

```json
{
	"format_version": 2,
	"header": {
		"name": "Custom Commands",
		"description": "Custom Commands using the Script API",
		"uuid": "c8c3239f-027f-4e80-890f-880eba65027d",
		"min_engine_version": [1, 19, 40],
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
			"entry": "scripts/index.js",
			"uuid": "f626740d-50a6-49f1-a24a-834983b72134",
			"version": [1, 0, 0]
		}
	],
	"dependencies": [
		{
			// Minecraft native module - needed to use the "@minecraft/server" module
			"module_name": "@minecraft/server",
			"version": "1.0.0-beta"
		}
    ]
}
```

On our manifest, we added script module. The `entry` is where our script is stored. This is typically within the `scripts` folder of the behavior pack. The dependency is for the module on our Script.

<FolderView
	:paths="[
		'BP/manifest.json',
		'BP/pack_icon.png',
        'BP/scripts/index.js'
	]"
/>

## Creating Custom Commands

Now this is the fun part, creating our custom commands. First, we gonna add the module

<CodeHeader>BP/scripts/index.js</CodeHeader>

```js
import { world } from '@minecraft/server';
```

First, we're gonna add simple commands, such as `!gmc` to change our Gamemode to Creative and `!gms` to change into Survival.

<CodeHeader>BP/scripts/index.js</CodeHeader>

```js
world.events.beforeChat.subscribe(async (eventData) => {
	const player = eventData.sender;
	switch (eventData.message) {
		case '!gmc': 
			await player.runCommandAsync('gamemode c');
			eventData.cancel = true;
			break;
		case '!gms':
			await player.runCommandAsync('gamemode s');
			eventData.cancel = true;
			break;
		default: break;
	}
});
```

This is the main function to listen our commands. `world.events.beforeChat.subscribe()` will check our message before it gets sent.
- A `switch` statement lists through the possible options for the value, and if it matches, runs the code until the `break` statement
- `eventData.cancel = true` will cancel the message to actually sended to another player
- `const player = eventData.sender` declares a variable `player` to be used later
- `await player.runCommandAsync('gamemode c')` runs the command on the sender. `runCommandAsync()` is recommended over `runCommand()` whenever possible

## Limited Command Usage by Tags

The function will always be checking if the player typed the special message to activate command, even if the player shouldn't have access. To prevent this, we can use tags to limit to specific people.

For example, let's make our commands usable only to the Admin that has the `Admin` tag.

<CodeHeader>BP/scripts/index.js</CodeHeader>

```js
world.events.beforeChat.subscribe(async (eventData) => {
	const player = eventData.sender;
	if (!player.hasTag('Admin')) return;
	switch (eventData.message) {
		case '!gmc': 
			await player.runCommandAsync('gamemode c');
			eventData.cancel = true;
			break;
		case '!gms':
			await player.runCommandAsync('gamemode s');
			eventData.cancel = true;
			break;
		default: break;
	}
});
```

In plain text, `if (!eventData.sender.hasTag('Admin')) return;` means: "If the player does NOT (`!`) have the 'Admin' tag, stop any further running of the script (`return`)"

For more information about the Script API, you can check on this [wiki](/scripting/game-tests.md) or from the [Microsoft Docs](https://docs.microsoft.com/en-us/minecraft/creator/documents/gametestgettingstarted)
