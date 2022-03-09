---
title: Simple Custom Commands
category: Game Tests
---

Who doesn't want any custom command? Me neither. With Gametest, you can create your custom command. This article, we will create your own custom command using Gametest.

## Setup Pack

:::tip
Before creating GameTest Script, it is recommended to learn the basic of JavaScript, Addons, or some Gametest. To see what the feature of Gametest can do, see the [Microsoft Docs](https://docs.microsoft.com/en-us/minecraft/creator/scriptapi/mojang-minecraft/mojang-minecraft)
:::

We think you have understood all of these things, so create own pack

<CodeHeader>manifest.json</CodeHeader>

```json
{
	"format_version": 2,
	"header": {
		"name": "Custom Commands",
		"description": "Custom Commands using Gametest",
		"uuid": "c8c3239f-027f-4e80-890f-880eba65027d",
		"min_engine_version": [1, 18, 10],
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
			"type": "javascript",
			"entry": "scripts/Index.js",
			"uuid": "f626740d-50a6-49f1-a24a-834983b72134",
			"version": [1, 0, 0]
		}
	],
	"dependencies": [
		{
			// Minecraft native module - needed to use the "mojang-minecraft" module
			"uuid": "b26a4d4c-afdf-4690-88f8-931846312678",
			"version": [0, 1, 0]
		}
    ]
}
```

On our manifest, we add Javascript Module for our Gametest. The `entry` is where our script is use. You can save it somewhere, but let it where it be. The dependency is for the module on our Script.

<FolderView
	:paths="[
		'BP/manifest.json',
		'BP/pack_icon.png',
        'BP/scripts/Index.js'
	]"
/>

## Creating Custom Commands

Now this is the fun part, creating our custom commands. First, we gonna add the module

<CodeHeader>BP/scripts/Index.js</CodeHeader>

```js
import { world } from 'mojang-minecraft'
```

First, we gonna add simple commands, such as `!gmc` to change our Gamemode to Creative and `!gms` to change into Survival.

<CodeHeader>BP/scripts/Index.js</CodeHeader>

```js
function GamemodeChanger() {
  world.events.beforeChat.subscribe((eventData) => {
    if (eventData.message === `!gmc`) {
      eventData.cancel = true
      var Player = eventData.sender.name
      world.getDimension('overworld').runCommands(`gamemode creative ${Player}`)
    } else if (eventData.message === `!gms`) {
      var Player = eventData.sender.name
      world.getDimension('overworld').runCommands(`gamemode survival ${Player}`)
    }
  })
}
```

This part we create function to listen our commands. `world.events.beforeChat.subscribe` will check our message before it get send.

- Inside if statement `(eventData.message === '!gmc')`, checking if player type the `!gmc`, which is our custom command identifier
- `eventData.cancel = true`. This will cancel the message to actually sended to another player
- `var Player = eventData.sender.name`. Decliare a variable "`Player`" as the Player name
- ``world.getDimension('overworld').runCommands(`gamemode creative ${Player}`)``. Run the commands


## Limited Command Usage by Tags

The function will always checking if player typing the special message to activate command, even the player that not access to the command itself or not OP. To prevent this, we can use tags to limited to the person that have the tags can run the commands.

For example, let our commands can be use only to the Admin that has `Admin` tags.

<CodeHeader>BP/scripts/Index.js</CodeHeader>

```js
function GamemodeChanger() {
  world.events.beforeChat.subscribe((eventData) => {
    if (eventData.message === `!gmc` && eventData.sender.hasTag('Admin')) {
      eventData.cancel = true
      var Player = eventData.sender.name
      world.getDimension('overworld').runCommands(`gamemode creative ${Player}`)
    } else if (eventData.message === `!gms` && eventData.sender.hasTag('Admin')) {
      var Player = eventData.sender.name
      world.getDimension('overworld').runCommands(`gamemode survival ${Player}`)
    }
  })
}
```

Inside ``if (eventData.message === `!gmc` && eventData.sender.hasTag('Admin'))``, it checking if player send the command and has "Admin" tag. If both condition met, then the command will running

For more information about Gametest, you can check on this [wiki](/docs/scripting/game-tests.md) or from the [Microsoft Docs](https://docs.microsoft.com/en-us/minecraft/creator/documents/gametestgettingstarted)