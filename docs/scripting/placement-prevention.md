---
title: "Block Placement Prevention (Stable)"
mentions:
  - JWForever5504
category: Tutorials
tags:
  - stable
---


The tutorial has been separated into two sections: one for stable methods and one for beta methods. You can now use these sections independently depending on which version of the Script API you are working with.

::: warning
The Script API is currently in active development, and breaking changes are frequent. This page assumes the format of Minecraft 1.20.30.
:::

Ever need to prevent a specific block from being placed? In 1.20.10, some dangerous unobtainable blocks can be acquired, so you can use this script to keep your world or server safe!

## Setup

::: tip
Before creating a script, it is recommended to learn the basics of JavaScript, Add-ons, and the Script API. To see what the Script API can do, see the [Microsoft Docs](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/).
:::

Just like other scripts, you need the dependency in your `manifest.json`. We are using the `@minecraft/server` module, specifically version `1.5.0`.

```json
{
  "format_version": 2,
  "header": {
    "name": "Block Placement Prevention (Stable)",
    "description": "Prevent Placing of Certain Blocks using Script API",
    "uuid": "6f3a4325-4ce5-42f5-b141-12641c8823c3",
    "min_engine_version": [1, 20, 10],
    "version": [1, 0, 0]
  },
  "modules": [
    {
      "description": "Behavior Pack Module",
      "type": "data",
      "uuid": "5a080d1d-bef8-47ce-aae1-a2ec3e0010ab",
      "version": [1, 0, 0]
    },
    {
      "description": "Gametest Module",
      "type": "script",
      "language": "javascript",
      "entry": "scripts/index.js",
      "uuid": "53a5804b-fb35-4f7d-a89e-e4a925fadb77",
      "version": [1, 0, 0]
    }
  },
  "dependencies": [
    {
      "module_name": "@minecraft/server",
      "version": "1.5.0"
    }
  ]
}
```

In our manifest, we have added a script module. The `entry` is where our script file is stored. This is typically within the `scripts` folder of the behavior pack. The dependency allows us to use that script module in our script.

## First Preventative Measure (Stable)

Even if you are going to use another block, if this is your first time creating this script, follow the tutorial exactly. After you are sure you made the script correctly, you can change the block.

This is because blocks often have an identifier different from what you may think. For example, Glow Item Frames are known internally as `minecraft:glow_frame`.

We will start by adding the module.

```js
import { world, system } from '@minecraft/server';
```

::: tip
Learn more about `system` at [System Events](/scripting/script-server#events).
:::

After we have added the module, we will add the first preventative measure for our block placement.

```js
world.beforeEvents.itemUseOn.subscribe(event => {
  if (event.itemStack.typeId === "minecraft:bedrock" && event.block.typeId != "minecraft:frame" && event.block.typeId != "minecraft:glow_frame") {
    event.cancel = true;
    system.run(() => {
      const player = event.source;
      player.sendMessage(`You cannot place Bedrock`);
    });
  }
});
```

This is the main function to execute our commands. `world.beforeEvents.itemUseOn.subscribe()` will run before any item is used.

- The `if()` statement required criteria to be met for the next section of the script to run.
  - `event.itemStack.typeId === "minecraft:bedrock"` verifies that the item being used is `minecraft:bedrock`.
  - `event.block.typeId != "minecraft:frame" && event.block.typeId != "minecraft:glow_frame"` checks that the block being targeted is not an item frame, so that the block whose placement is being canceled can still be placed in item frames.
  - If you know what you are doing, you can skip this statement so that it can't be placed in item frames. That would also negate the need for the next preventative measure.
- `event.cancel = true` cancels the action that would be done with the item, whether placing the block, editing a sign, or opening a chest. It would be possible to allow interactions with all blocks in a similar way to item frames, but I skipped it for the sake of brevity.
- `const player = event.source` sets up the constant that `player` is whatever the source of the event is. Constants cannot be changed, unlike variables.
- `player.sendMessage()` sends a message to the player letting them know that they cannot place that block. The message `You cannot place Bedrock` can be modified as necessary.

## Second Preventative Measure (Stable)

This script will work fine in most cases, but it does have a flaw. Since it does not cancel that item use if the targeted block is an item frame, simply sneaking will allow the block to be placed on top or to the side of the frame. We need to prevent this.

We will use a very similar script.

```js
world.beforeEvents.itemUseOn.subscribe(event => {
  if (event.itemStack.typeId === "minecraft:bedrock" && event.source.isSneaking === true) {
    event.cancel = true;
    system.run(() => {
      const player = event.source;
      player.sendMessage(`You cannot place Bedrock`);
    });
  }
});
```

There is only one change to the script. Instead of detecting if you are not targeting an item frame, this `if()` statement checks if the source is sneaking. This prevents the specific block from being used while a player is sneaking, thus keeping them from placing it on item frames.

## Conclusion (Stable)

This should be your entire script:

```js
import { world, system } from "@minecraft/server";

world.beforeEvents.itemUseOn.subscribe(event => {
  if (event.itemStack.typeId === "minecraft:bedrock" && event.block.typeId != "minecraft:frame" && event.block.typeId != "minecraft:glow_frame") {
    event.cancel = true;
    system.run(() => {
      const player = event.source;
      player.sendMessage(`You cannot place Bedrock`);
    });
  }
});

world.beforeEvents.itemUseOn.subscribe(event => {
  if (event.itemStack.typeId === "minecraft:bedrock" && event.source.isSneaking === true) {
    event.cancel = true;
    system.run(() => {
      const player = event.source;
      player.sendMessage(`You cannot place Bedrock`);
    });
  }
});
```

You can now modify the message sent to the player in `player.sendMessage()`. Put your message between the two backticks.

You can also

 change the typeId of the block in `event.itemStack.typeId === "minecraft:bedrock"`. Put the namespace and identifier in place of `minecraft:bedrock`.



::: warning
-Made by kumja1

With the release of 1.20.30, we got a new beforeEvent that allows us to prevent block placement, negating the need to use other methods such as world.beforeEvents.itemUseOn. Note: this is only for those who want to use beta methods; if not, then look up for the stable methods tutorial.
:::

## Setup

::: tip
Before creating a script, it is recommended to learn the basics of JavaScript, Add-ons, and the Script API. To see what the Script API can do, see the [Microsoft Docs](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/).
:::

Just like other scripts, you need the dependency in your `manifest.json`. We are using the `@minecraft/server` module, specifically version `1.7.0-beta`.

```json
{
  "format_version": 2,
  "header": {
    "name": "Block Placement Prevention (Beta)",
    "description": "Prevent Placing of Certain Blocks using Script API",
    "uuid": "6f3a4325-4ce5-42f5-b141-12641c8823c3",
    "min_engine_version": [1, 20, 30],
    "version": [1, 0, 0]
  },
  "modules": [
    {
      "description": "Behavior Pack Module",
      "type": "data",
      "uuid": "5a080d1d-bef8-47ce-aae1-a2ec3e0010ab",
      "version": [1, 0, 0]
    },
    {
      "description": "Gametest Module",
      "type": "script",
      "language": "javascript",
      "entry": "scripts/index.js",
      "uuid": "53a5804b-fb35-4f7d-a89e-e4a925fadb77",
      "version": [1, 0, 0]
    }
  },
  "dependencies": [
    {
      "module_name": "@minecraft/server",
      "version": "1.8.0-beta"
    }
  ]
}
```

In our manifest, we have added a script module. The `entry` is where our script file is stored. This is typically within the `scripts` folder of the behavior pack. The dependency allows us to use that script module in our script.

## Preventative Measure (Beta)

Even if you are going to use another block, if this is your first time creating this script, follow the tutorial exactly. After you are sure you made the script correctly, you can change the block.

This is because blocks often have an identifier different from what you may think. For example, Glow Item Frames are known internally as `minecraft:glow_frame`.

We will start by adding the module.

```js
import { world, system } from '@minecraft/server';
```

::: tip
Learn more about `system` at [System Events](/scripting/script-server#events).
:::

```js
world.beforeEvents.playerPlaceBlock.subscribe(event => {
  if (event.block.typeId === 'minecraft:bedrock') {
    event.cancel = true;
    system.run(() => {
      const player = event.player;
      player.sendMessage(`You cannot place Bedrock`);
    });
  }
});
```

This is the main function to execute our commands. `world.beforeEvents.playerBreakBlock.subscribe()` will run before any block is placed.

- The `if()` statement required criteria to be met for the next section of the script to run.
  - `event.block.typeId === "minecraft:bedrock"` verifies that the block being placed is `minecraft:bedrock`.
- `event.cancel = true` cancels the placing of the block.
- `const player = event.player` sets up the constant that `player` is whatever the source/player of the event is. Constants cannot be changed, unlike variables.
- `player.sendMessage()` sends a message to the player letting them know that they cannot place that block. The message `You cannot place Bedrock` can be modified as necessary.

## Conclusion (Beta)

This should be your entire script:

```js
import { world, system } from "@minecraft/server";

world.beforeEvents.playerPlaceBlock.subscribe(event => {
  if (event.block.typeId === 'minecraft:bedrock') {
    event.cancel = true;
    system.run(() => {
      const player = event.player;
      player.sendMessage(`You cannot place Bedrock`);
    });
  }
});
```

You can now modify the message sent to the player in `player.sendMessage()`. Put your message between the two backticks.

You can also change the typeId of the block in `event.block.typeId === "minecraft:bedrock"`. Put the namespace and identifier in place of `minecraft:bedrock`.

To learn more about Script API, you can check out the [wiki](/scripting/starting-scripts) or the [Microsoft Docs](https://docs.microsoft.com/en-us/minecraft/creator/documents/gametestgettingstarted).

