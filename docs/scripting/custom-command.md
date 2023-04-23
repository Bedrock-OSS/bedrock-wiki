---
title: Simple Chat Commands
category: Tutorials
tags:
    - experimental
mentions:
	- cda94581
---
::: warning
The Script API is currently in active development, and breaking changes are frequent. This page assumes the format of Minecraft 1.19.80
:::

Who doesn't want cool custom commands? With the Script API, you can create your own. In this article, we will be creating them using the Script API.

## Setup Pack

:::tip
Before creating a script, it is recommended to learn the basics of JavaScript, Addons, and the Script API. To see what the Script API can do, see the [Microsoft Docs](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/)
:::

Assuming you have understood the basics of scripting, let's start creating the pack.

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
			"version": "1.2.0-beta"
		}
  ]
}
```

In our manifest, we have added script module. The `entry` is where our script file is stored. This is typically within the `scripts` folder of the behavior pack. The dependency allows us to use that script module in our script.

<FolderView
	:paths="[
		'BP/manifest.json',
		'BP/pack_icon.png',
        'BP/scripts/index.js'
	]"
/>

## Creating Custom Commands

Now comes the fun part - creating our custom commands. First, we will add the module.

<CodeHeader>BP/scripts/index.js</CodeHeader>

```js
import { world } from '@minecraft/server';
```

Next, we will add simple commands, such as `!gmc` to change our gamemode to creative and `!gms` to change into survival.

<CodeHeader>BP/scripts/index.js</CodeHeader>

```js
world.events.beforeChat.subscribe((eventData) => {
	const player = eventData.sender;
	switch (eventData.message) {
		case '!gmc':
			eventData.cancel = true;
			player.runCommand('gamemode c');
			break;
		case '!gms':
			eventData.cancel = true;
			player.runCommand('gamemode s');
			break;
		default: break;
	}
});
```

This is the main function to execute our commands. `world.events.beforeChat.subscribe()` will run before chat messages get sent.
- A `switch` statement runs through the possible options for the value, and if it matches, runs the code until the next `break` statement.
- `eventData.cancel = true` will cancel the chat message that will be sent- similar to how vanilla commands work.
- `const player = eventData.sender` declares the variable `player` to be used later.
- `player.runCommand('gamemode c')` runs the command on the sender of the message.

## Limited Command Usage by Tags

This function will always be checking if the player types the special message to activate the command, even if the player shouldn't have access. To prevent this, we can use tags to limit these commands to specific people.

For example, let's make our commands usable only to players that have the `Admin` tag.

<CodeHeader>BP/scripts/index.js</CodeHeader>

```js
world.events.beforeChat.subscribe((eventData) => {
	const player = eventData.sender;
	if (!player.hasTag('Admin')) return;
	switch (eventData.message) {
		case '!gmc':
			eventData.cancel = true;
			player.runCommand('gamemode c');
			break;
		case '!gms':
			eventData.cancel = true;
			player.runCommand('gamemode s');
			break;
		default: break;
	}
});
```

In plain text, `if (!eventData.sender.hasTag('Admin')) return;` means: "If the player does NOT (`!`) have the 'Admin' tag, stop the script from running past here (`return`)"

For more information about the Script API, you can reference the [wiki](/scripting/starting-scripts.md) or the [Microsoft Docs](https://docs.microsoft.com/en-us/minecraft/creator/documents/gametestgettingstarted)
