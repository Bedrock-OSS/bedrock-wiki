---
title: Script Core Features
category: Tutorials
tags:
    - experimental
mentions:
    - JaylyDev
    - SmokeyStack
    - ThomasOrs
---

::: warning
The Script API is currently in active development, and breaking changes are frequent. This page assumes the format of Minecraft 1.19.80
:::

In Scripting API, most of the core features are implemented in the `@minecraft/server` module, with lots of methods to interact a Minecraft world, including entities, blocks, dimensions, and more programmatically. This article contains a basic introduction to some of the core API mechanics, for more detailed information please visit [Microsoft docs](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/minecraft-server).

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

World events API provides many event listeners that fires when a specific type of events happen in/to a Minecraft world, events such as `chatSend`, `entityHurt`, `playerSpawn`, `worldInitialize` and many more.

::: tip
Check out Microsoft docs to see what world events are available in Minecraft: [Events documentation](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/events)
:::

In order to subscribe to an event, get the `events` property from world object. In this example we're subscribing to a blockBreak event.

```js
import { world } from "@minecraft/server";
-
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

ScriptEvents, not to be confused with world events or system events, allows us to respond to inbound `/scriptevent` commands by registering `scriptEventReceive` event handler, which the event fires if a `/scriptevent` command is invoked by a player, NPC, or block.-
`/scriptevent` - Triggers a script event with an ID and message.

```
/scriptevent <messageId: string> <message: string>
```

-   `messageId` in scriptevent command can be received in API via `ScriptEventCommandMessageEvent.id`
-   `message` in scriptevent command can be received in API via `ScriptEventCommandMessageEvent.message`

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

With the @minecraft/server module, developers can define their own custom properties, known as dynamic properties, that can be used and stored within Minecraft. These data are stored specifically in the db folder using a behavior pack's module UUID.

![dynamic_properties](/assets/images/gametest/script-server/dynamic_properties.png)

In order to save data, the property must be initialised first. There are multiple ways to declare dynamic properties, either on an entity type or world. You can define as many numbers and booleans as you would like, however Minecraft API only allows each - behavior pack to save a limited bytes of string.-
-If you register property in EntityType, each entity can save up to 1,000 bytes of text data.

-   If you register property in World, each entity can save up to 10,000 bytes of text data.

The `DynamicPropertiesDefinition` class is used in conjunction with the `PropertyRegistry` class to define dynamic properties that can be used on entities of a specified type or at the global World-level. The `defineBoolean`, `defineNumber`, and `defineString` methods are used to define new boolean, number, and string dynamic properties, respectively.

To register dynamic properties in Minecraft, developers can subscribe to the `worldInitialize` event provided by the `world` object in the `@minecraft/server` module. Here's an example of how to do that:

```typescript
import { DynamicPropertiesDefinition, MinecraftEntityTypes, world } from "@minecraft/server";

world.events.worldInitialize.subscribe((event) => {
  const propertiesDefinition = new DynamicPropertiesDefinition();
  propertiesDefinition.defineBoolean('isAngry');
  event.propertyRegistry.registerEntityTypeDynamicProperties(propertiesDefinition, MinecraftEntityTypes.zombie);
});
```

In this example, we are defining a boolean dynamic property called `isAngry` and registering it for all zombie entities in the world. The registerEntityTypeDynamicProperties method is used to register the dynamic property for a particular entity type, in this case, `MinecraftEntityTypes.zombie`.

Similarly, you can use the `registerWorldDynamicProperties` method to register globally available dynamic properties for a world. Here's an example of how to register a number dynamic property called `playerScore` for the entire world:

```typescript
import { DynamicPropertiesDefinition, world } from "@minecraft/server";

world.events.worldInitialize.subscribe((event) => {
  const propertiesDefinition = new DynamicPropertiesDefinition();
  propertiesDefinition.defineNumber('playerScore');
  event.propertyRegistry.registerWorldDynamicProperties(propertiesDefinition);
});
```

In this example, we are defining a number dynamic property called `playerScore` and registering it globally for the entire world using the `registerWorldDynamicProperties` method.

**Get and Set Dynamic Properties**

To get and set dynamic properties, you can use the `getDynamicProperty` and `setDynamicProperty` methods.

:::tip
It is important to note that registering a dynamic property does not set a value on the property. Unless the value of the property is saved in the world already, when getting the property for the first time, the method returns nothing.
:::

With this in mind, here are some examples of how to get and set dynamic properties in Minecraft:

```typescript
import { MinecraftEntityTypes, world } from "@minecraft/server";

world.events.entityHit.subscribe(({ hitEntity }) => {
  if (hitEntity.typeId !== MinecraftEntityTypes.zombie.id) return; // only zombies that got hit
  hitEntity.setDynamicProperty('isAngry', true); // set boolean property with value
  const isAngry = hitEntity.getDynamicProperty<boolean>('isAngry'); // get boolean property
});
```

In this example, we are setting a boolean dynamic property called `isAngry` on a zombie entity that got hit. We then get the value of the `isAngry` property using the `getDynamicProperty` method.

Here is an example of how to get and set dynamic properties at the global World-level:

```typescript
import { world } from "@minecraft/server";

world.setDynamicProperty('playerScore', 100); // set number property with value
const playerScore = world.getDynamicProperty('playerScore'); // get number property
```

In this example, we are setting a number dynamic property called `playerScore` globally for the entire world using the `setDynamicProperty` method. We then get the value of the `playerScore` property using the `getDynamicProperty` method.

## Running Commands

`Entity.runCommandAsync()` or `Dimension.runCommandAsync()` allows the API to run a particular command asynchronously from the context of the broader dimension.
Note that there is a maximum queue of 128 asynchronous commands that can be run in a given tick.

Usually, it executes the command in the next tick.
To run command parallel with the script, you have to surround your code in a asynchronous function.

```js
import { world } from "@minecraft/server";

(async () => {
	await world.getDimension("overworld").runCommandAsync("say Using say command on dimension.");

	world.sendMessage("This runs after runCommandAsync is executed");
})();
```

Returns a `Promise<CommandResult>`. Throws an error **synchronously** if the queue is full.

**Avoid run commands in script**

Normally we recommend avoiding using commands because it's slow to run a command from Script API, and server performance starts to slow down as more commands are executed over time. However, the following command features are not implemented in scripting API, which leaves us no choice but to use `runCommand` or `runCommandAsync`.

**Ender chest and offhand slot**

Script API does not provide any methods to get/set information of player's ender chest and off hand slot. Commands such as `/replaceitem`, `/clear`, `@s[hasitem=]` may be used as a workaround.

**tickingarea**

Script API can't access ticking areas.

**kick**

Script API can't kick player.

**setblock**

Script API can't destroy block `/setblock ... destroy`

**titleraw**

Script API can't display translations in title, subtitle or actionbar in rawtext json. Consider using `%` (e.g. `%death.fell.accident.water%`)

**Player's abilities**

-   Script API you can't set abilities for each player.
-   You can't read player's abilities.

**execute**

Script API new execute can be useful to run command with lot of if/unless condition for simplicity or maybe performance.

Sometimes this `/execute` used to trigger `/loot` command, as `runCommandAsync` cannot trigger loots in the API.

**Minecraft functions**

Script API cannot run Minecraft function files without the use of `/function`.

**gamerule**

-   Script API cannot set any game rules.
-   Cannot read game rules' value.

**locate**

-   Script API cannot get structure's location.
-   Cannot get biome's location.

**loot**

Script API even though the loot is broken from the start, but it's useful for drop or set the item to players/world.

**weather**

-   Script API can't get weather directly.
-   Can't set weather.

**difficulty**

Script API can't set world difficulty.

**playanimation**

Script API can't play client entity animation.

**mobevent**

Script API can't enable/disable mobevent.

**camerashake**

Script API can't add/stop camera shake for player.

**fog**

Script API can't manage active fog settings for player.

**stopsound**

Script API can't stop playing a sound.

**dialogue**

-   Script API can't open the NPC dialogue to player.
-   Can't change the dialogue displayed by an NPC.

## BeforeEvents privilege system

::: tip
The developers may release an article discussing this topic in Microsoft Learn, for now these are the infomation the community  gathered.
:::

In 1.20.0, Minecraft Scripting API releases a privilege system for callbacks fired in before events (i.e. `ChatSendBeforeEvent`).

This limits the native functions that are allowed to be executed in the callback, which most of the functions are the native functions that modifies changes to Minecraft (like setting the world time with `World::setTime()`) in the same tick. The purpose of this implementation is to avoid cascading changes in the middle of a game tick.

```js
world.beforeEvents.chatSend.subscribe(event => {
	event.cancel = true;
	world.setTime(TimeOfDay.Night);
});
```

In the example code above, the world sets the time and cancels a message from being sent to the chat. It also changes the time of the world to night using `world.setTime()`, which throws error as the native function does not have the privilege to change the state of the world.

To migrate your code to this new system. You must run these native functions that requires privilege in the tick after the tick that fires the event, using the following methods:

1. Use `system.run`:

```js
world.beforeEvents.chatSend.subscribe(event => {
	event.cancel = true;
	system.run(() => {
		world.setTime(TimeOfDay.Night);
	});
});
```

To migrate code with the new privilege system, the `world.setTime()` function is wrapped inside the `system.run()` method, which delays its execution by a tick. This ensures that the function is not executed in the same tick that the before event fires.

2. Execute function asynchronously:

```js
world.beforeEvents.chatSend.subscribe(async (event) => {
	// synchronous code
	event.cancel = true;

	// asynchronous code
	await sleep(10); // Pretend you have a sleep function that returns a promise that resolves in 10 ticks
	world.setTime(TimeOfDay.Night);
});
```

The use of `await` is another way to cause the code to run asynchronously without the use of `system.run()`. As the code before `await` are run synchronously, so the event can be canceled with `event.cancel = true`.
