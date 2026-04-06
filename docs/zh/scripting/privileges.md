---
title: 脚本权限
description: 了解脚本 API 权限，包括只读模式和提前执行模式。
category: 教程
tags:
    - beginner
license: true
mentions:
    - jaylydev
    - bot174
    - QuazChick
---

这是理解脚本 API 权限的指南。这包括了解只读模式，以及脚本编写 v2.0.0 中实现的新的提前执行模式。

你可能在运行脚本时遇到此错误，当调用原生函数或属性时没有所需的权限，如以下消息：

> ReferenceError: Native function [Class::method] does not have required privileges.

出现此消息有两个原因，一个是方法或属性在只读模式下被调用，或者是提前执行模式。

## 限制执行模式

这意味着处于此状态的脚本不允许在这些回调中改变世界状态。当 Minecraft 模拟开始并在事件触发之前，或在"脚本"刻开始之前，脚本处于限制执行状态。

当发生上述错误时，意味着你尝试在 before 事件上运行一个试图修改世界状态的函数。

### 逃离限制执行模式

解决此问题最简单的方法是将代码（包含所有在限制执行模式下无法调用的原生函数，以及所有在限制执行模式下无法编辑的原生属性）移动到 `system.run()`{lang=js} 回调中。以下是一个示例场景，我们试图在 before 事件回调中修改世界状态。

原生函数 `MessageFormData.show()`{lang=js} 无法在只读模式下调用，因此以下代码将抛出 ReferenceError，说明函数没有所需的权限。

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

为了使代码在只读模式下正常运行，上述代码更改如下：

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

区别

```diff
-    form.show(event.player);
+    // If event.player is used during script tick, declare
+    // it in a variable, otherwise you can't retrieve the
+    // player object, as event object turns into null
+    // after read-only state ends.
+    const player = event.player;
+
+    // Use system.run to queue for later in the current
+    // tick to bypass read-only state
+    system.run(() => {
+      // Show the player a message form in script tick.
+      // As MessageFormData.show() is marked so it can't
+      // be called in read-only mode
+      form.show(player);
+    });
```

我们强烈建议您检查 API 参考以查看方法或属性是否可以在只读状态下调用。每个无法在只读模式下调用的属性或方法都会在描述中提及以下文本：

> -   This function **can't be called** in read-only mode.
> -   This property **can't be edited** in read-only mode.

## 提前执行模式

这意味着脚本处于世界加载之前的环境，这意味着大多数 API（如常规世界游戏模式属性查询）尚未准备好访问和工作。

当发生权限错误时，意味着你尝试在加载世界之前运行一个需要世界加载的函数或编辑一个属性。

### 逃离提前执行模式

如果你有在脚本文件根上下文中运行的使用 API 的代码，它需要推迟到在 `world.afterEvents.worldLoad`{lang=js} 事件期间或之后运行，或使用传统的 `system.run()`{lang=js} 定时回调。

你还需要移动使用以下 API 的代码（如果它们之前在脚本文件的根上下文中运行），到 `world.afterEvents.worldLoad`{lang=js} 事件中，而不是根上下文，以避免某些事件未被触发，从而导致脚本故障。

以下是在脚本加载时发送消息的示例。在 v2.0.0 突破性更改之前，脚本以前是这样的：

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

为了适应脚本 v2.0.0 的更改，上述代码更改如下：

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

区别

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

#### 提前执行 API

以下是脚本 v2.0.0 中提前执行可用的初始 API：

-   `world.beforeEvents.*.subscribe`
-   `world.beforeEvents.*.unsubscribe`
-   `world.afterEvents.*.subscribe`
-   `world.afterEvents.*.unsubscribe`
-   `system.afterEvents.*.subscribe`
-   `system.afterEvents.*.unsubscribe`
-   `system.beforeEvents.*.subscribe`
-   `system.beforeEvents.*.unsubscribe`
-   `system.clearJob`
-   `system.clearRun`
-   `system.run`
-   `system.runInterval`
-   `system.runJob`
-   `system.runTimeout`
-   `system.waitTicks`
-   `BlockComponentRegistry.registerCustomComponent`
-   `ItemComponentRegistry.registerCustomComponent`

同样，请检查 API 参考以查看方法或属性是否可以在提前执行状态下调用。每个可以在提前执行模式下调用的属性或方法都会在描述中提及以下文本之一：

> -   This property **can be read** in early-execution mode.
> -   This function **can be called** in early-execution mode.