---
title: Block Ticking
description: A block tick is a type of event that triggers for a block after a period of time.
category: General
tags:
    - scripting
    - intermediate
license: true
mentions:
    - QuazChick
---

A block tick is a type of event that triggers for a block after a period of time.
There are two main types of block tick:

-   [Random ticks](#random-ticks) are events which occur for all blocks at a random interval in ticking chunks.
    -   These are used for vanilla functionality such as crop growth.
    -   They are better for performance than scheduled ticks as no data has to be saved for the block.
-   [Scheduled ticks](#scheduled-ticks) are events which occur after a specific duration of time.
    -   These are used for vanilla functionality such as geyser eruptions.
    -   They are worse for performance than random ticks as the delay until the next tick has to be saved.

Where possible, random ticks should be used instead of scheduled ticks to avoid performance issues.

Now that you have a basic understanding of what each type of block tick is, let's explore how you can hook into these ticks!

:::tip CUSTOM COMPONENTS REQUIRED
There are no global world events for block ticking, only custom components are able to hook into tick events.
Therefore, there is no way to hook into ticks that occur for vanilla blocks.
:::

## Random Ticks

Each game tick, a number of blocks in each chunk is randomly selected to receive a **random tick**.

The `randomTickSpeed` game rule multiplies this number of blocks.
By default, random tick speed is set to 1.
Increasing it to 2 results in twice as many blocks per chunk receiving a random tick each game tick.

Any block can receive a random tick, but most don't do anything in response.
If you would like your block to hook into random ticks, you'll need to make a [custom component](/blocks/block-events) with the [`onRandomTick()`{lang=js}](/blocks/block-events#random-tick) hook.
As an example, let's make a custom TNT block that explodes whenever it randomly ticks.

<CodeHeader path="BP/scripts/main.js" />

```js
import { system } from "minecraft/server";

/** @type {import("@minecraft/server").BlockCustomComponent} */
const BlockExplodeOnRandomTickComponent = {
    onRandomTick({ block, dimension }, { params }) {
        dimension.createExplosion(block, params.power);
    },
};

system.beforeEvents.startup.subscribe(({ blockComponentRegistry }) => {
    blockComponentRegistry.registerCustomComponent(
        "wiki:explode_on_random_tick",
        BlockExplodeOnRandomTickComponent
    );
});
```

<CodeHeader path="BP/blocks/spontaneous_tnt.js" breadcrumbs="minecraft:block/components" />

```json
"wiki:explode_on_random_tick": {
    "power": 4
}
```

## Scheduled Ticks

Scheduled ticks (also known as pending ticks or queued ticks) are ticks that occur after a specified duration of time.

Custom blocks can only have 1 [unnamed tick](#block-ticks) scheduled at once, whereas up to 4 [named ticks](#named-block-ticks) can be scheduled for the same game tick.

Unlike methods such as `system.runTimeout()`{lang=js}, scheduled ticks are saved into the world and persist even after the block has been moved by a piston.

### Block Ticks

Regular (unnamed) scheduled ticks are triggered by the [`minecraft:tick`](/blocks/block-components#tick) component which schedules a tick with the specified duration when the block is placed.

The period of time until the tick occurs is determined by the `interval_range` parameter which accepts an array of two integer values: a minimum and maximum duration in game ticks.
The game will then choose a random duration between the minimum and maximum each time the tick is scheduled.

Given that there are 20 game ticks in a second, the following code would schedule the tick for 1-2 seconds after the block is placed.
To have a non-random delay, simply set the minimum and maximum to the same value.

<CodeHeader breadcrumbs="minecraft:block/components" />

```json
"minecraft:tick": {
    "interval_range": [20, 40]
}
```

Optionally, the `looping` parameter can be specified to cause a new tick to be scheduled after the previous one has executed.

<CodeHeader breadcrumbs="minecraft:block/components" />

```json
"minecraft:tick": {
    "interval_range": [20, 40],
    "looping": true
}
```

Now, let's do something when the block ticks.
How about some more explosions?

We can amend the `wiki:explode_on_random_tick` component to instead make use of the [`onTick()`{lang=js}](/blocks/block-events#tick) hook which triggers on (unnamed) block ticks.
Here's our new `wiki:explode_on_tick`

<CodeHeader path="BP/scripts/main.js" />

```js
import { system } from "minecraft/server";

/** @type {import("@minecraft/server").BlockCustomComponent} */
const BlockExplodeOnTickComponent = {
    onTick({ block, dimension }, { params }) {
        dimension.createExplosion(block, params.power);
    },
};

system.beforeEvents.startup.subscribe(({ blockComponentRegistry }) => {
    blockComponentRegistry.registerCustomComponent(
        "wiki:explode_on_tick",
        BlockExplodeOnTickComponent
    );
});
```

<CodeHeader path="BP/blocks/spontaneous_tnt.js" breadcrumbs="minecraft:block/components" />

```json
"minecraft:tick": {
    "interval_range": [20, 40]
},
"wiki:explode_on_tick": {
    "power": 4
}
```

### Named Block Ticks

:::warning EXPERIMENTAL 1.26.60
Named scheduled ticks are experimental and require the Beta APIs experiment to be enabled.
:::

Named scheduled ticks are similar to unnamed ticks with two main differences:

-   Named ticks are manually scheduled using scripts, there is no vanilla component that schedules them.
-   Named ticks (as the name implies) have a name attached which makes it easier to differentiate between ticks when multiple are scheduled.

To schedule a named tick on a block, you'll need to use the [`Block.scheduleNamedTick()`{lang=js}]() method.

-   The first parameter of this method is the name of the tick (max 31 characters).
    This name should not have a namespace given that the pack UUID is internally used to namespace the tick.
-   The second parameter of this method is the duration of time (in game ticks) until the tick should occur.

```js
block.scheduleNamedTick("my_tick", 20);
```

In order to hook into named ticks, you'll need to use the [`onNamedTick()`{lang=js}](/blocks/block-events#named-tick) custom component event hook.
The event object passed to this hook includes an `isName()`{lang=js} method which can be used to check the name of the tick.
This method only returns true if both the name provided and pack UUID of the script match those of the scheduled tick.

Let's create a custom component that causes the block to explode after certain events occur, giving the reason for the explosion in chat.

<CodeHeader path="BP/scripts/main.js" />

```js
import { system, world } from "minecraft/server";

/** @type {import("@minecraft/server").BlockCustomComponent} */
const BlockExplodeAfterEventsComponent = {
    onPlayerInteract({ block }) {
        // Schedule an explosion for 0.5 seconds after a player interaction
        block.scheduleNamedTick("player_interact", 10);
    },
    onStepOn({ block }) {
        // Schedule an explosion for 2 seconds after an entity steps onto the block
        block.scheduleNamedTick("step_on", 40);
    },
    onNamedTick(event, { params }) {
        const { block, dimension } = event;

        // Explode the block when the named tick occurs
        dimension.createExplosion(block, params.power);

        // State the reason for the explosion in chat
        if (event.isName("player_interact")) {
            world.sendMessage("Block exploded because a player interacted with it.");
        } else if (event.isName("step_on")) {
            world.sendMessage("Block exploded because an entity stepped onto it.");
        }
    },
};

system.beforeEvents.startup.subscribe(({ blockComponentRegistry }) => {
    blockComponentRegistry.registerCustomComponent(
        "wiki:explode_after_events",
        BlockExplodeAfterEventsComponent
    );
});
```

<CodeHeader path="BP/blocks/spontaneous_tnt.js" breadcrumbs="minecraft:block/components" />

```json
"wiki:explode_after_events": {
    "power": 4
}
```
