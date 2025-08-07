---
title: Script Core Features
description: Introduction to some of the core API mechanics.
category: Tutorials
mentions:
    - JaylyDev
    - SmokeyStack
    - ThomasOrs
    - kumja1
    - QuazChick
---

::: warning
The Script API is currently in active development, and breaking changes are frequent. This page assumes the format of Minecraft 1.21.20
:::

In Scripting API, most of the core features are implemented in the `@minecraft/server` module, which contains lots of methods to interact with Minecraft world, including entities, blocks, dimensions, and more. This article contains a basic introduction to some of the core API mechanics. For more detailed information please visit the [Microsoft documentation](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/minecraft-server) pages.

## Setup

You will need to add the script module as a dependency in your `manifest.json`.

<CodeHeader>BP/manifest.json</CodeHeader>

```json
{
    "dependencies": [
        {
            "module_name": "@minecraft/server",
            "version": "1.13.0"
        }
    ]
}
```

## Events

In script API, the `@minecraft/server` module uses its own event-driven architecture, making it possible to execute code when a specific event occurs by subscribing to an event listener.

**World Events**

World event APIs provides many event listeners that fires when a specific type of events happen in a Minecraft world, such as `chatSend`, `entityHurt`, `playerSpawn`, `worldInitialize` and many more.

::: tip
Check the Microsoft docs to see what world events are available within Minecraft.

-   Before events fire before an event happens and are read-only but can be canceled. [Before Event Documentation](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/worldbeforeevents).
-   After events fire after an event has run and cannot be canceled. [After Event Documentation](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/worldafterevents)
-   After events should always be used unless the event needs to be canceled.

:::

In order to subscribe to an event, get the `afterEvents` property from the world object. In this example we will subscribe to the block break event.

```js
import { world } from "@minecraft/server";

// subscribing to the block break event
// fires when a player breaks a block
world.afterEvents.playerBreakBlock.subscribe((event) => {
    const player = event.player; // Player that broke the block for this event.
    const block = event.block; // Block impacted by this event. Note that the typeId if this block will ALWAYS be air.
    const permutation = event.brokenBlockPermutation; // Returns permutation information about this block before it was broken.
    player.sendMessage(
        `You have broken ${permutation.type.id} at ${block.x}, ${block.y}, ${block.z}`
    ); // Sends a message to player.
});
```

**System events**

System events fires when a specific type of event happens in the scope of the Minecraft add-on system.

::: tip
Check the Microsoft docs to see what system events are available within Minecraft.

-   Before events fire before an event happens and are read-only but can be canceled. [Before Event Documentation](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/systembeforeevents).
-   After events fire after an event has run and cannot be canceled. [After Event Documentation](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/systemafterevents)
-   Both types of events are used for different purposes.

:::

Get the `beforeEvents` property from the system object. In this example we will subscribe to the watchdogTerminate event, allowing the API to cancel the performance watchdog from closing the world if the game exceedes a performance boundary, depending on the configuration of the script environment.

```js
import { system } from "@minecraft/server";

// subscribing to the watchdogTerminate event
system.beforeEvents.watchdogTerminate.subscribe((event) => {
    event.cancel = true; // Cancel the world from closing down. This will terminate the script engine instead.
    console.warn("Canceled critical exception of type " + event.terminateReason); // Print a message to the console if this event fires.
});
```

**ScriptEvents**

ScriptEvents, not to be confused with world events or system events, allows us to respond to inbound `/scriptevent` commands by registering the `scriptEventReceive` event handler, which the event fires if a `/scriptevent` command is invoked by a player, NPC, or block. More information on this event can be found on the [Script Event Documentaion](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/scripteventcommandmessageafterevent) page.

```
/scriptevent <messageId: string> <message: string>
```

-   `messageId` in the scriptevent command can be received in API via `ScriptEventCommandMessageEvent.id`
-   `message` in the scriptevent command can be received in API via `ScriptEventCommandMessageEvent.message`

**Example**:

Command input:

```
/scriptevent wiki:test Hello World
```

What the event listener returns:

```js
import { system } from "@minecraft/server";

system.afterEvents.scriptEventReceive.subscribe((event) => {
    const {
        id, // returns string (wiki:test)
        initiator, // returns Entity (or undefined if an NPC did not fire the command)
        message, // returns string (Hello World)
        sourceBlock, // returns Block (or undefined if a block did not fire the command)
        sourceEntity, // returns Entity (or undefined if an entity did not fire the command)
        sourceType, // returns MessageSourceType (can be 'Block', 'Entity', 'NPCDialogue', or 'Server')
    } = event;
});
```

## Scheduling

We may decide to execute a function at a certain time in the future. This is known as "scheduling a call".

In script API, native javascript methods like `setTimeout` and `setInterval` do not exist in the scripting engine. Minecraft has instead implemented their own scheduling methods that work using game ticks instead of real time.

These methods can be accessed from the `system` object obtained by importing:

```js
import { system } from "@minecraft/server";
```

There are two methods for it:

**Scheduling timers**
`system.run(callback)` - Runs a specified function at the next available future time. This is frequently used to implement delayed behaviors and game loops. When run within the context of an event handler, this will generally run the code at the end of the same tick where the event occurred. When run in other code (a system.run callout), this will run the function in the next tick. Note, however, that depending on load on the system, running in the same or next tick is not guaranteed.

```js
import { system, world } from "@minecraft/server";

system.run(() => {
    world.sendMessage("This runs one tick after the previous tick");
});
```

`system.runInterval(callback: () => void, tickInterval?: number): number` - Runs a set of code repeatedly, starting after the first interval of time and repeating continuously forever that interval.

```js
import { system, world } from "@minecraft/server";

system.runInterval(() => {
    world.sendMessage("This message runs every 20 ticks (once per second)");
}, 20);
```

`system.runTimeout(callback: () => void, tickDelay?: number): number` - Runs a function once after the interval of time has elapsed.

```js
import { system, world } from "@minecraft/server";

system.runTimeout(() => {
    world.sendMessage("This message runs once once 20 ticks has passed.");
}, 20);
```

`system.runJob(generator: Generator<void, void, void>): number` - Queues a generator function to run until completion. The generator will be given a time slice each tick, and will be run until it yields or completes. [Generator Function Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*).

```js
import { system, world, BlockPermutation } from "@minecraft/server";

function* blockPlacingGenerator(size, startX, startY, startZ) {
    const overworld = world.getDimension("overworld"); // gets the dimension of type overworld.
    for (let x = startX; x < startX + size; x++) {
        for (let y = startY; y < startY + size; y++) {
            for (let z = startZ; z < startZ + size; z++) {
                const block = overworld.getBlock({ x: x, y: y, z: z }); // get the block at the current loop coordinates.
                if (block) block.setType("minecraft:cobblestone"); // if the block is loaded, set it to cobblestone.
                // yield back to job coordinator after every block is placed
                yield;
            }
        }
    }
}
// builds a 10x10x10 cube of cobblestone starting at overworld location -2, -60, 1.
system.runJob(blockPlacingGenerator(10, -2, -60, 1));
```

**Clearing timers**

`system.clearRun(runId): void` - Cancels the execution of a function run that was previously scheduled via the `run`, `runTimeout` or `runInterval` function.

```js
import { system, world } from "@minecraft/server";

const callbackId = system.runInterval(() => {
    world.sendMessage("Running every tick");
});

system.runTimeout(() => {
    system.clearRun(callbackId); // stops the system.runInterval callback from running after 20 ticks
    world.sendMessage("Stopped");
}, 20);
```

`clearJob(jobId: number): void` - Cancels the execution of a job queued via the `runJob` function.

```js
import { system, world } from "@minecraft/server";

const callbackId = system.runInterval(() => {
    world.sendMessage("Running every tick");
});

system.runTimeout(() => {
    system.clearRun(callbackId); // stops the system.runInterval callback from running after 20 ticks
    world.sendMessage("Stopped");
}, 20);
```

More information on all the system methods can be found on the [Game Loops & Timed Callbacks](https://learn.microsoft.com/en-us/minecraft/creator/documents/systemrunguide) documentation page.

## Saving and Loading data

With the `@minecraft/server` module, developers can define their own custom properties, known as dynamic properties, that can be used and stored within Minecraft. This data is stored specifically in the world's `db` folder using the behavior pack header UUID.

![dynamic_properties](/assets/images/gametest/script-server/dynamic_properties.png)

In order to save data, the property must first be initialized. There are multiple ways to declare dynamic properties, either on an entity, world, or item. You can define as many numbers and booleans as you would like, however Minecraft API only allows each - behavior pack to save a limited amount of data per dynamic property.

-   String dynamic properties can be a maximum of 32767 characters in length.
-   Number dynamic properties can be a maximum of the 64-bit float limit (-1.7976931348623158e+308 to -2.2250738585072014e-308, or from 2.2250738585072014e-308 to 1.7976931348623158e+308).

**Get and Set Dynamic Properties**

To get and set dynamic properties, you can use the `getDynamicProperty` and `setDynamicProperty` methods.

:::tip
It is important to note that getting a dynamic property does not guarantee it has a value saved. When getting the property for the first time, the method returns `undefined`.
:::

With this in mind, here are some examples of how to get and set dynamic properties in Minecraft:

```js
import { system, world } from "@minecraft/server";

system.runInterval(() => {
    world.getPlayers().forEach((player) => {
        // run code for each player the array returns.
        // all three properties are unique to each player, similar to tags/scoreboard data.
        player.setDynamicProperty("number_value", 12); // sets a number property on the player.
        player.setDynamicProperty("string_value", "This is a string :)"); // string property
        player.setDynamicProperty("boolean_value", true); // boolean property
    });
}, 20); // run this interval once every 20 game ticks.

world.afterEvents.playerBreakBlock.subscribe((data) => {
    // subscribe to the block break event.
    const player = data.player; // define the player variable for use later.
    const numberProperty = player.getDynamicProperty("number_value"); // get the dynamic property that was saved.
    player.sendMessage(`You have a property of value ${numberProperty}!`); // print the players saved value to the chat.
});
```

Here is an example of how to get and set dynamic properties at the global level:

```js
import { world } from "@minecraft/server";

world.setDynamicProperty("player_score", 100); // set a property with a number value
const playerScore = world.getDynamicProperty("player_score"); // get the previously set property- will return 100.
```

## Running Commands

`Entity.runCommandAsync()` or `Dimension.runCommandAsync()` allows the API to run a particular command asynchronously from the context of the broader dimension.
Note that there is a maximum of 128 asynchronous commands that can be run in a given tick. Always try to avoid runCommandAsync calls wherever possible, and use built-in API methods instead.

The game executes the queued commands in the next tick of the world.
To run commands parallel with the script, you have to surround your code in a asynchronous function.

```js
import { world } from "@minecraft/server";

(async () => {
    await world.getDimension("overworld").runCommandAsync("say Using say command on dimension.");

    world.sendMessage("This runs after runCommandAsync is executed");
})();
```

Returns a `Promise<CommandResult>`. Throws an error **synchronously** if the queue is full.

**Avoid run commands in script**

Normally we recommend avoiding using commands because it's slow to run a command from the Script API, and server performance starts to slow down as more commands are executed over time. However, the following command features are not implemented in scripting API, which leaves us no choice but to use `runCommand` or `runCommandAsync`.

**Ender chest**

The Script API does not provide any methods to get/set information of player's ender chest. Commands such as `/replaceitem`, `/clear`, `@s[hasitem=]` may be used as a workaround.

**tickingarea**

Script API cannot access, set, or remove ticking areas.

**kick**

Script API cannot kick players.

**setblock**

Script API cannot destroy blocks `/setblock ... destroy`. It is possible to set a block, however.

**Player abilities**

-   Script API cannot set abilities for each player.
-   You cannot read player abilities.

**execute**

Script API can utilize new execute syntax to run commands with lots of if/unless conditions for simplicity or performance.

`/execute` can be used to trigger the `/loot` command, as `runCommandAsync` cannot access vanilla loot tables directly.

**Minecraft functions**

-   Script API cannot run Minecraft function files without the use of `/function`.

**locate**

-   Script API cannot get a structure location.
-   Cannot get a biome location.

**loot**

-   Script API even though the loot is broken from the start, but it's useful for drop or set the item to players/world.

**weather**

-   Script API cannot get/set the world weather.

**difficulty**

-   Script API cannot set the world difficulty.

**mobevent**

-   Script API cannot enable/disable mobevents.

**fog**

-   Script API cannot manage active fog settings for players.

**stopsound**

-   Script API cannot stop playing a sound. Music can be stopped using `World::stopMusic()` or `Player::stopMusic()`.

**dialogue**

-   The Script API can't open the NPC dialogue to the player.
-   It cannot change the dialogue displayed by an NPC.
