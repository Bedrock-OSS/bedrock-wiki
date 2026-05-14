---
title: Script Core Features
description: Introduction to some of the core API mechanics.
category: Tutorials
nav_order: 4
mentions:
    - JaylyDev
    - SmokeyStack
    - ThomasOrs
    - kumja1
    - QuazChick
    - MindfulLearner
    - Aevarkan
---

::: warning
The Script API is currently in active development, and breaking changes are frequent. This page assumes the format of Minecraft 1.26.20
:::

The Script API, with most core features being implemented in the `@minecraft/server` module, contains many methods to interact with Minecraft world, including entities, blocks, dimensions, and more. This article contains a basic introduction to some of the core API mechanics. For more detailed information, please visit the [Microsoft Learn documentation pages](https://learn.microsoft.com/minecraft/creator/scriptapi/minecraft/server/minecraft-server).

## Setup

You will need to add the script module as a dependency in your `manifest.json`.

<CodeHeader>BP/manifest.json</CodeHeader>

```json
{
    "dependencies": [
        {
            "module_name": "@minecraft/server",
            "version": "2.7.0"
        }
    ]
}
```

## Events

The Script API's `@minecraft/server` module uses its own event-driven architecture, making it possible to execute code when a specific event occurs by subscribing to an event listener.

There are generally two types of events: before events, and after events.

-   Before events fire **before** an action happens in [`read-only`](/scripting/privileges#restricted-execution-mode) mode, and are cancellable (with a few exceptions).
-   After events fire **after** an action happens, and are not cancellable.

### World Events

World event APIs provides many event listeners that fire when a specific type of event happen in a Minecraft world, such as `chatSend`, `entityHurt`, `playerSpawn`, `worldLoad` and more.

<Spoiler title="Further information">

Check the Microsoft Learn documentation to see what `world` events are available within Minecraft:

-   Before events fire before an event happens and are [`read-only`](/scripting/privileges#restricted-execution-mode), but can be canceled. See the [`beforeEvent` documentation](https://learn.microsoft.com/minecraft/creator/scriptapi/minecraft/server/worldbeforeevents).
-   After events fire after an event has run and cannot be canceled. See the [`afterEvent` documentation](https://learn.microsoft.com/minecraft/creator/scriptapi/minecraft/server/worldafterevents).
-   It is good practice to always use after events, unless if there is a good reason not to, such as needing to cancel them.

</Spoiler>

In this example, we aim to send the player a message each time they break a block. We do this by subscribing to the [`playerBreakBlock`](https://learn.microsoft.com/minecraft/creator/scriptapi/minecraft/server/worldafterevents#playerbreakblock) after event, extracting its data, and then sending the player a message with that extracted data.

```js
import { world } from "@minecraft/server";

// subscribing to the block break event
// fires when a player breaks a block
world.afterEvents.playerBreakBlock.subscribe((event) => {
    const player = event.player; // Player that broke the block for this event.
    const block = event.block; // Block impacted by this event. Note that the typeId of this block will ALWAYS be air, as the player has just broken it.
    const permutation = event.brokenBlockPermutation; // Returns permutation information about this block before it was broken.
    player.sendMessage(
        `You have broken ${permutation.type.id} at ${block.x}, ${block.y}, ${block.z}`
    ); // Sends a message to player.
});
```

### System Events

System events fire when a specific type of event happens in the broader scope of the Minecraft add-on system, as opposed to events that happen in the game world itself.

<Spoiler title="Further information">

Check the Microsoft Learn documentation to see what `system` events are available within Minecraft:

-   Before events fire before an event happens and are [`read-only`](/scripting/privileges#restricted-execution-mode), but can be canceled. See the [`beforeEvent` documentation](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/systembeforeevents).
-   After events fire after an event has run and cannot be canceled. See the [`afterEvent` documentation](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/systemafterevents)
-   Both types of events are used for different purposes.

</Spoiler>

In this example, we got tired of our add-on being shutdown by the scripting watchdog. To resolve this, we'll cancel its shutdown order.

We first get the `beforeEvents` property of the `system` object, then we subscribe to the `watchdogTerminate` event. This allows us to use the API to stop the performance watchdog from closing the world when its running scripts exceed performance boundaries, which are dependent on the configuration of the script environment.

```js
import { system } from "@minecraft/server";

// subscribing to the watchdogTerminate event
system.beforeEvents.watchdogTerminate.subscribe((event) => {
    event.cancel = true; // Cancel the world from closing down. This will terminate the script engine instead.
    console.warn("Canceled critical exception of type " + event.terminateReason); // Print a message to the console if this event fires.
}); // Take that watchdog, no shutting us down now!!
```

### Script Events

Script events, not to be confused with world events or system events, allow us to respond to inbound [`/scriptevent`](https://learn.microsoft.com/minecraft/creator/reference/content/commandsreference/examples/commands/scriptevent) commands by subscribing to the `scriptEventReceive` event handler. This event fires when the `/scriptevent` command is invoked by a player, NPC, or block. More information on this event can be found in the [Script Event Documentation](https://learn.microsoft.com/minecraft/creator/scriptapi/minecraft/server/scripteventcommandmessageafterevent) page.

The `/scriptevent` command has the following syntax:

```
/scriptevent <messageId: string> <message: string>
```

-   `messageId` in the `/scriptevent` command can be received in API via `ScriptEventCommandMessageEvent.id`
-   `message` in the `/scriptevent` command can be received in API via `ScriptEventCommandMessageEvent.message`

**Example**

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

:::tip
When a `/scriptevent` is fired from an NPC dialogue button, `sourceType` will be `"NPCDialogue"`. In this case:

-   `initiator` is the **player** who clicked the button.
-   `sourceEntity` is the **NPC** entity that ran the command.

Always use `initiator` to get the player in NPC-triggered events. `sourceEntity` will not be a player in this context.

```js
system.afterEvents.scriptEventReceive.subscribe((event) => {
    const player = event.initiator; // the player, when fired from an NPC button
    if (!player || player.typeId !== "minecraft:player") return;
    // ...
});
```

When the event comes from a command block, both `initiator` and `sourceEntity` will be `undefined`. If you need to target a specific player from a command block, pass the player name inside `message` and look them up:

```js
const player = world.getAllPlayers().find((p) => p.name === event.message.trim());
```

:::

:::tip
You can filter which namespaces a subscriber receives by passing a `namespaces` option. This avoids one large handler processing every scriptevent in your pack:

```js
system.afterEvents.scriptEventReceive.subscribe(
    (event) => {
        /* only receives wiki:shop events */
    },
    { namespaces: ["wiki_shop"] }
);
```

:::

## Scheduling

We may decide to execute a function at a certain time in the future. This is known as "scheduling a call".

When using the Script API, native JavaScript functions like `setTimeout` and `setInterval` do not exist in the scripting runtime. Minecraft instead has its own scheduling methods, which work using game ticks instead of real time.

These methods can be accessed from the `system` object obtained by importing.

```js
import { system } from "@minecraft/server";
```

### Scheduling Timers

`system.run(callback: () => void): number` - Runs a specified function at the next available future time. This is frequently used to implement delayed behaviors and game loops. When run within the context of an event handler, this will generally run the code at the end of the same tick where the event occurred. When run in other code (a `system.run` callout), this will run the function in the next tick. Note that, depending on the load of the system, running in the same or next tick is not guaranteed.

```js
import { system, world } from "@minecraft/server";

system.run(() => {
    world.sendMessage("This runs one tick after the previous tick");
});
```

`system.runInterval(callback: () => void, tickInterval?: number): number` - Runs a set of code repeatedly, starting after the first interval of time, and then repeating continuously forever with that interval.

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

`system.runJob(generator: Generator<void, void, void>): number` - Queues a generator function to run until completion. The generator will be given a time slice each tick, and will be run until it yields or completes. For more information, see the [MDN generator function reference](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function*).

```js
import { system, world } from "@minecraft/server";

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

### Clearing Timers

`system.clearRun(runId: number): void` - Cancels the execution of a function run that was previously scheduled via the `run`, `runTimeout` or `runInterval` function.

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

`system.clearJob(jobId: number): void` - Cancels the execution of a job queued via the `runJob` function.

```js
import { system, world } from "@minecraft/server";

function* blockPlacingGenerator(size, startX, startY, startZ) {
    const overworld = world.getDimension("overworld");
    for (let x = startX; x < startX + size; x++) {
        for (let y = startY; y < startY + size; y++) {
            for (let z = startZ; z < startZ + size; z++) {
                const block = overworld.getBlock({ x: x, y: y, z: z });
                if (block) block.setType("minecraft:cobblestone");
                yield;
            }
        }
    }
}

const callbackId = system.runJob(blockPlacingGenerator(10, -2, -60, 1));

system.runTimeout(() => {
    system.clearJob(callbackId); // stops the system.runJob callback from running after 20 ticks
    world.sendMessage("Stopped");
}, 20);
```

More information regarding the inner functionality of the `system` scheduling methods can be found on the Microsoft Learn [_Game Loops & Timed Callbacks_](https://learn.microsoft.com/minecraft/creator/documents/systemrunguide) page.

## Saving and Loading data

With the `@minecraft/server` module, developers can define their own custom properties, known as dynamic properties, that can be used and stored within Minecraft. This data is stored specifically in the world's `db` folder using the behavior pack header UUID.

[byte]: /assets/images/nbt/byte.png
[compound]: /assets/images/nbt/compound.png
[string]: /assets/images/nbt/string.png

![Compound][compound] `DynamicProperties`

> ![Compound][compound] `8a121475-6f9f-4780-a746-2bf25f732204` — Header UUID of the behavior pack
>
> > ![String][string] `myColorProperty: "orange"`{lang=js}
>
> > ![Byte][byte] `hasOwnerDied: false`{lang=js}

In order to save data, the property must first be initialized. There are multiple ways to declare dynamic properties, either on an entity, world, or item. You can define as many numbers and booleans as you would like, however Minecraft API only allows each - behavior pack to save a limited amount of data per dynamic property.

-   String dynamic properties can be a maximum of 32767 characters in length.
-   Number dynamic properties can be a maximum of the 64-bit float limit (-1.7976931348623158e+308 to -2.2250738585072014e-308, or from 2.2250738585072014e-308 to 1.7976931348623158e+308).

### Get & Set Dynamic Properties

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

## Removing Entities

The Script API provides two ways to remove an entity, which behave differently:

-   `entity.kill()` — triggers the entity's death sequence. It fires the `entityDie` event, causes drops, plays the death animation, and counts as a kill for scoreboard objectives.
-   `entity.remove()` — removes the entity immediately and silently. No death event, no drops, no animation.

```js
// Use kill() when you want the full death behavior (drops, events, kill credit)
zombie.kill();

// Use remove() when you want silent cleanup with no side effects
// For example, removing dropped item entities from the ground
for (const item of dimension.getEntities({ type: "minecraft:item" })) {
    item.remove();
}
```

:::tip
Using `kill()` on dropped item entities will fire `entityDie` for each one and may trigger unintended listeners. Always use `remove()` for item cleanup.
:::

## Running Commands

`Entity::runCommand()` and `Dimension::runCommand()` allows the API to run a particular command synchronously from the context of the broader dimension. Always try to avoid `runCommand` calls wherever possible, and use built-in API methods instead. As `runCommand` fires synchronously, you'll need to [schedule](#scheduling) its call if you are in [`read-only`](/scripting/privileges#restricted-execution-mode) mode.

In this example, we're sending a message that foreshadows how an entity is about to get damaged. As `runCommand` cannot be called in `read-only` mode, we will need to defer its execution using `system.run()`. The entity will run the command **after** it gets damaged, saying "OWW!!".

```js
import { system, world } from "@minecraft/server";

// callbacks for a before event run in read-only mode
world.beforeEvents.entityHurt.subscribe((event) => {
    const { hurtEntity, cancel } = event;

    // send a message foreshadowing impending damage
    world.sendMessage(`${hurtEntity.nameTag} is about to get hurt!`);

    // only you, reader, can save this entity from getting hurt
    // your heroic action: uncommenting the next two lines
    // cancel = true;
    // return;

    // defer the command to run outside of read-only mode
    system.run(() => {
        // sadly, once this command runs, it will be too late to stop the entity from being hurt
        hurtEntity.runCommand("say OWW!!");
    });
});
```

### Avoid Running Commands in Script

Normally we recommend that you avoid using commands in script, because it's slow to run a command from the Script API, and server performance starts to slow down as more commands are executed over time. The following command features, however, are not implemented in the scripting API, which leaves us with no choice but to use `runCommand` instead.

**kick**

To kick players, the [`@minecraft/server-admin`](https://learn.microsoft.com/minecraft/creator/scriptapi/mojang-minecraft-server-admin/mojang-minecraft-server-admin) module must be used. This module, however, is only available on Bedrock Dedicated Servers.

-   Outside of Bedrock Dedicated Servers, the `/kick` command must be used

**setblock**

-   Script API cannot destroy blocks like `/setblock ... destroy`.
-   It is possible to set a block, however
-   Getting the loot from a block if it were to be mined can be done with the [`LootTableManager`](https://learn.microsoft.com/minecraft/creator/scriptapi/minecraft/server/loottablemanager).

**Player abilities**

-   Script API cannot set abilities for each player.
-   You cannot read player abilities.

**execute**

-   Script API can utilize new execute syntax to run commands with lots of if/unless conditions for simplicity or performance.

**Minecraft functions**

-   Script API cannot run Minecraft function files without the use of `/function`.

**locate**

-   Script API cannot get a structure location.
-   Cannot get a biome location.

**weather**

-   Script API cannot get/set the world weather.

**mobevent**

-   Script API cannot enable/disable mobevents.

**fog**

-   Script API cannot manage active fog settings for players.

**stopsound**

::: info
At time of writing, the [`Player::stopSound`](https://learn.microsoft.com/minecraft/creator/scriptapi/minecraft/server/player?view=minecraft-bedrock-experimental#stopsound) method is in experimental. <!-- ?view=minecraft-bedrock-experimental is needed here. delete this whole thing once it's out of experimental -->
:::

-   Script API cannot stop playing a sound. Music can be stopped using [`World::stopMusic()`](https://learn.microsoft.com/minecraft/creator/scriptapi/minecraft/server/world#stopmusic) or [`Player::stopMusic()`](https://learn.microsoft.com/minecraft/creator/scriptapi/minecraft/server/player#stopmusic).

**dialogue**

::: info
At time of writing, the [`EntityNpcComponent`](https://learn.microsoft.com/minecraft/creator/scriptapi/minecraft/server/entitynpccomponent) class is in experimental.
:::

-   There is no dedicated Script API method for NPC dialogues, however you can use `player.runCommand("dialogue open @e[tag=npc,r=5] @s scene_tag")` or `dimension.runCommand(...)` as a workaround to open and change NPC dialogues from script.
-   The Script API can't open the NPC dialogue to the player.
-   It cannot change the dialogue displayed by an NPC.
