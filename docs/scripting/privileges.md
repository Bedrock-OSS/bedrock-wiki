---
title: Script Privileges
description: Learn about Script API privileges, including read-only and early-execution modes.
category: Tutorials
tags:
    - beginner
license: true
mentions:
    - jaylydev
    - bot174
    - QuazChick
---

This is a guide on understanding what Script API privileges are. This includes going through what read-only mode, and the new early-execution mode implemented in Scripting v2.0.0 are about.

You might have encounted this error when running your scripts, about not having required privileges when calling a native function or a property such as the following mesasge:

> ReferenceError: Native function \[Class::method\] does not have required privileges.

There are two reasons this message occurs, one is that the method or property is called during read-only mode, or early-execution mode.

## Read-Only Mode

This means scripts that are in this state are not allowed to alter world state within these callbacks. The script is in read-only state when Minecraft simulation begins and before events are triggered, or before the start of the "script" tick.

When the error above occurs, that means you attempted to run a function that tries to modify the state of the world on before events.

### Escaping Read-Only Mode

The easiest way to resolve this issue is to move code, which contains all native functions that can't be called in read-only mode, and all native properties that can't be edited in read-only mode into a `system.run` callback. Here is an example scnerario where we're trying to modify the state of the world in a before event callback.

The native function `MessageFormData.show()` cannot be called in read-only mode, so the following code will throw a ReferenceError explaining that function does not have required privileges.

```javascript
import { system, world } from "@minecraft/server";
import { MessageFormData } from "@minecraft/server-ui";

// Subscribe to playerInteractWithBlock event to detect
// if a player interacts with a block
world.beforeEvents.playerInteractWithBlock.subscribe((event) => {
  // Check if player interacts with a crafter whilst holding diamonds
  if (
    event.block.typeId === "minecraft:crafter" &&
    event.itemStack &&
    event.itemStack.typeId === "minecraft:diamond"
  ) {
    // Cancel interaction
    event.cancel = true;

    const form = new MessageFormData()
      .title("Crafter")
      .body("This is a crafter!")
      .button1("Close");

    // Error throws as .show() requires privileges.
    form.show(event.player);

    // player.sendMessage is not limited by read-only mode,
    // so this function can be called here.
    player.sendMessage("Player is using the crafter.");
  }
});
```

To adapt the code so it runs properly in read-only mode, the code above is changed into this:

```javascript
import { system, world } from "@minecraft/server";
import { MessageFormData } from "@minecraft/server-ui";

// Subscribe to playerInteractWithBlock event to detect
// if a player interacts with a block
world.beforeEvents.playerInteractWithBlock.subscribe((event) => {
  // Check if player interacts with a crafter whilst holding diamonds
  if (
    event.block.typeId === "minecraft:crafter" &&
    event.itemStack &&
    event.itemStack.typeId === "minecraft:diamond"
  ) {
    // Cancel interaction
    event.cancel = true;

    // Creating a new MessageFormData object, calling title,
    // body, and button1 can be called within read-only mode.
    // This means they can be called within this
    // callback before script tick.
    const form = new MessageFormData()
      .title("Crafter")
      .body("This is a crafter!")
      .button1("Close");

    // If event.player is used during script tick, declare
    // it in a variable, otherwise you can't retrieve the
    // player object, as event object turns into null
    // after read-only state ends.
    const player = event.player;

    // Use system.run to queue for later in the current
    // tick to bypass read-only state
    system.run(() => {
      // Show the player a message form in script tick.
      // As MessageFormData.show() is marked so it can't
      // be called in read-only mode
      form.show(player);
    });

    // player.sendMessage is not limited by read-only mode,
    // so this function can be called here.
    player.sendMessage("Player is using the crafter.");
  }
});
```

Difference

```diff
-    form.show(event.player);
+    // If event.player is used during script tick, declare
+    // it in a variable, otherwise you can't retrieve the
+    // player object, as event object turns into null
+    // after read-only state ends.
+    const player = event.player;

+    // Use system.run to queue for later in the current
+    // tick to bypass read-only state
+    system.run(() => {
+      // Show the player a message form in script tick.
+      // As MessageFormData.show() is marked so it can't
+      // be called in read-only mode
+      form.show(player);
+    });
```

We highly recommend that you check the API reference to see if the method or property can be called in read-only state. Each property or method that can't be called in read-only mode is mentioned in the description with the following text:

> *   This function **can't be called** in read-only mode.
> *   This property **can't be edited** in read-only mode.

## Early-Execution Mode

This means the script is an environment before the world is loaded, which means most APIs like general world gamemode get property queries, are not ready to be accessed and worked with.

When the privilege error occurs, that means you attempted to run a function or edit a property that requires the world is loaded, before the world is loaded.

### Escaping Early-Execution Mode

If you have code using an API that is being run in the root context of a script file, it will need to be deferred to run either during or after the `world.afterEvents.worldLoad` event, or the traditional `system.run` timed callback.

You also need to move code that uses event the APIs below, if they were run in the root context of a script file previously, to root context instead of the `world.afterEvents.worldLoad` event, to avoid some events not being triggered, leading to script malfunction.

The following is an example of sending a message when script loads. Before v2.0.0 breaking changes, the script used to look like this:

```javascript
import { world } from "@minecraft/server";

// This procedure is placed in root context of a script file.
for (const player of world.getAllPlayers()) {
  player.sendMessage(`Hello ${player.name}!`);
}

world.afterEvents.playerSpawn.subscribe(({ player, initialSpawn }) => {
  if (!initialSpawn) return;
  player.sendMessage(`Hello ${player.name}!`);
});
```

To adapt to scripting v2.0.0 changes, the code above is changed into this:

```javascript
import { world } from "@minecraft/server";

// Keep the event subscription function that was in root
// context of a script file previously there.
world.afterEvents.playerSpawn.subscribe(({ player, initialSpawn }) => {
  if (!initialSpawn) return;
  player.sendMessage(`Hello ${player.name}!`);
});

world.afterEvents.worldLoad.subscribe(() => {
  // This procedure is moved inside the worldLoad callback,
  // since world.getAllPlayers() can't be called in
  // early-execution mode.
  for (const player of world.getAllPlayers()) {
    player.sendMessage(`Hello ${player.name}!`);
  }
});
```

Difference

```diff
- for (const player of world.getAllPlayers()) {
-   player.sendMessage(`Hello ${player.name}!`);
- }
+ world.afterEvents.worldLoad.subscribe(() => {
+   // This procedure is moved inside the worldLoad callback,
+   // since world.getAllPlayers() can't be called in
+   // early-execution mode.
+   for (const player of world.getAllPlayers()) {
+     player.sendMessage(`Hello ${player.name}!`);
+   }
+ });
```

#### Early-Execution APIs

The following are the initial APIs available in early execution mode for scripting v2.0.0-beta:

*   `world.beforeEvents.*.subscribe`
*   `world.beforeEvents.*.unsubscribe`
*   `world.afterEvents.*.subscribe`
*   `world.afterEvents.*.unsubscribe`
*   `system.afterEvents.*.subscribe`
*   `system.afterEvents.*.unsubscribe`
*   `system.beforeEvents.*.subscribe`
*   `system.beforeEvents.*.unsubscribe`
*   `system.clearJob`
*   `system.clearRun`
*   `system.run`
*   `system.runInterval`
*   `system.runJob`
*   `system.runTimeout`
*   `system.waitTicks`
*   `BlockComponentRegistry.registerCustomComponent`
*   `ItemComponentRegistry.registerCustomComponent`

Again, please check the API reference to see if the method or property can be called in early-execution state. Each property or method that can be called in early-execution mode is mentioned in the description with one of the following text:

> *   This property **can be read** in early-execution mode.
> *   This function **can be called** in early-execution mode.
