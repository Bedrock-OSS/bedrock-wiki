---
title: Script Core Features
category: Tutorials
tags:
	- experimental
---

::: warning
The Script API is currently in active development, and breaking changes are frequent. This page assumes the format of Minecraft beta 1.19.70
:::

In Scripting API, most of the core feaures are implemented in the `@minecraft/server` module, with lots of methods to interact a Minecraft world, including entities, blocks, dimensions, and more programmatically. This article contains a basic introduction to some of the core API mechanics, for more detailed infomation please visit [Microsoft docs](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/minecraft-server).

## Setup
You will need to add the Script module as a dependency in your `manifest.json`.

<CodeHeader>BP/manifest.json</CodeHeader>

```json
{
	"dependencies": [
		{
			"module_name": "@minecraft/server",
			"version": "1.1.0-beta"
		}
	]
}
```

## Events

In Scripting API, the `@minecraft/server` module uses their own event-driven architecture, making it possible to execute code when a specific event occurs, by subscribing to a specific event listener.

**World Events**

World events API provides many event listeners that fires when a specific type of events happen in/to a Minecraft world, events such as `beforeChat`, `entityHurt`, `playerSpawn`, `worldInitialize` and many more.

::: tip
Check out Microsoft docs to see what world events are available in Minecraft: [Events documentation](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/events)
:::

In order to subscribe to an event, get the `events` property from world object. In this example we're subscribing to a blockBreak event.

```js
import { world } from "@minecraft/server";

// subscribing to a blockBreak event
// - fires when a player breaks a block
world.events.blockBreak.subscribe((event) => {
	const player = event.player; // Player that broke the block
	const block = event.block; // Block that's broken
	player.sendMessage(`You have broken ${block.typeId}`); // send a message to player
});
```

**System events**

System events fires when a specific type of event happens in the scope of the Minecraft add-on system.

::: tip
Check out Microsoft docs to see what system events are available in Minecraft: [SystemEvents documentation](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/systemevents)
:::

Just like world events, get the `events` property from system object. In this example we're subscribing to a beforeWatchdogTerminate event, where the API can cancel the performance watchdog terminates scripting execution due to exceeding a performance boundary, depending on the configuration of the runtime environment.

```js
import { system } from "@minecraft/server";

// subscribing to a beforeWatchdogTerminate event
system.events.beforeWatchdogTerminate.subscribe((event) => {
	event.cancel = true;
	console.warn('Canceled critical exception of type ' + event.terminateReason);
});
```

**ScriptEvents**

ScriptEvents, not to be confused with world events or system events, allows us to respond to inbound `/scriptevent` commands by registering `scriptEventReceive` event handler, which the event fires if a `/scriptevent` command is invoked by a player, NPC, or block.

`/scriptevent` - Triggers a script event with an ID and message.

```
/scriptevent <messageId: string> <message: string>
```

- `messageId` in scriptevent command can be received in API via `ScriptEventCommandMessageEvent.id`
- `message` in scriptevent command can be received in API via `ScriptEventCommandMessageEvent.message`

**Example**:

Command input:

```
/scriptevent wiki:test Hello World
```

What event listener returns:

```js
import { system } from "@minecraft/server";

system.events.scriptEventReceive.subscribe((event) => {
  const {
  	id,           // returns string (wiki:test)
  	initiator,    // returns Entity
    message,      // returns string (Hello World)
    sourceBlock,  // returns Block
    sourceEntity, // returns Entity
    sourceType,   // returns MessageSourceType
  } = event;
});
```

## Scheduling

We may decide to execute a function not right now, but at a certain time later. That’s called “scheduling a call”.

In Script API, basic methods like `setTimeout` and `setInterval` does not exist in the scripting engine, instead Minecraft implements their own scheduling methods.

These methods can be accessed from the `system` object obtained by:

```js
import { system } from "@minecraft/server";
```

There are two methods for it:

**Scheduling timers**

`system.run(callback)` - Runs a specified function at the tick after the current tick. This is frequently used to implement delayed behaviors and game loops.

```js
import { system, world } from "@minecraft/server";

system.run(() => {
	world.sendMessage("This runs a tick after the last tick");
});
```

`system.runInterval(callback, tickInterval?)` - Runs a function repeatedly, starting after the interval of time, then repeating continuously at that interval.

```js
import { system, world } from "@minecraft/server";

system.runInterval(() => {
	world.sendMessage("This message runs every 20 ticks");
}, 20);
```

`system.runTimeout(callback, tickDelay?)` - Runs a function once after the interval of time.

```js
import { system, world } from "@minecraft/server";

system.runTimeout(() => {
	world.sendMessage("This message runs once after 20 ticks has passed.");
}, 20);
```

**Clearing timers**

`system.clearRun(runId): void` - Cancels the execution of a function run that was previously scheduled via the `run`, `runTimeout` or `runInterval` function.

```js
import { system, world } from "@minecraft/server";

const callbackId = system.runInterval(() => {
	world.sendMessage("Running every tick");
});

system.runTimeout(() => {
	system.clearRun(callbackId); // stops system.runInterval callback from running after 20 ticks
	world.sendMessage("Stopped");
}, 20);
```

## Saving and Loading

Script API provides its own storage system called dynamic properties to save and load data in a world, specifically in the db folder using a behavior pack's module UUID.

![dynamic_properties](/assets/images/gametest/script-server/dynamic_properties.png)

In order to save data, the property must be initialised first. There are multiple ways to declare dynamic properties, either on an entity type or world, each option have their own limitation:

- Entity type: you can saved up to 1,000 bytes worth of text data in an entity of the entity type.
- World: you can saved up to 10,000 bytes worth of text data in a world.

These are the following methods to save and load dynamic properties:

**Loading dynamic properties from world**:

1. Declare dynamic properties

```js
import { DynamicPropertiesDefinition, world } from "@minecraft/server";

world.events.worldInitialize.subscribe((event) => {
  let def = new DynamicPropertiesDefinition();

  def.defineNumber("eventStrength");
  def.defineString("eventRoles", 40);
  def.defineBoolean("eventHasHero");

  event.propertyRegistry.registerWorldDynamicProperties(def);
});
```

::: warning
Registering a dynamic property does not set a value on the property. Unless the value of the property is saved in world already, when getting the property for the first time, the method returns nothing.
:::

2. Get or set the value of the dynamic property

```js
import { world } from "@minecraft/server";

// get dynamic property
world.getDynamicProperty("eventStrength");
// set dynamic property
world.setDynamicProperty("eventStrength", 10);
```

**Loading dynamic properties from an entity**:

1. Declare dynamic properties, but this time register properties to an entity type.

```js
import { DynamicPropertiesDefinition, world } from "@minecraft/server";

world.events.worldInitialize.subscribe((e) => {
	let def = new DynamicPropertiesDefinition();

	def.defineNumber("rpgStrength");
	def.defineString("rpgRole", 16);
	def.defineBoolean("rpgIsHero");

	// declare properties on skeletons
	e.propertyRegistry.registerEntityTypeDynamicProperties(def, MinecraftEntityTypes.skeleton);
});
```

::: warn
Registering a dynamic property does not set a value on the property. Unless the value of the property is saved in world already, when getting the property for the first time, the method returns nothing.
:::

2. Get or set the value of the dynamic property

```js
import { world } from "@minecraft/server";

// get the skeleton entity
const skeleton = world.getDimension('overworld')
                      .spawnEntity('minecraft:skeleton', { x: 0, y: 0, z: 0 });

// get dynamic property
skeleton.getDynamicProperty('rpgStrength');

// set dynamic property
skeleton.setDynamicProperty('rpgStrength', 50);
```     