---
title: 脚本核心功能
description: 一些核心 API 机制的介绍。
category: 教程
mentions:
    - JaylyDev
    - SmokeyStack
    - ThomasOrs
    - kumja1
    - QuazChick
---

::: warning
脚本 API 目前正在积极开发中，突破性更改很频繁。本页假设 Minecraft 1.21.20 的格式
:::

在脚本 API 中，大多数核心功能都实现在 `@minecraft/server` 模块中，该模块包含大量与 Minecraft 世界交互的方法，包括实体、方块、维度等。本文包含一些核心 API 机制的基本介绍。更详细的信息请访问 [Microsoft 文档](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/minecraft-server) 页面。

## 设置

你需要在 `manifest.json` 中添加脚本模块作为依赖项。

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

## 事件

在脚本 API 中，`@minecraft/server` 模块使用自己的事件驱动架构，通过订阅事件监听器可以在特定事件发生时执行代码。

**世界事件**

世界事件 API 提供了许多事件监听器，当 Minecraft 世界中发生特定类型的事件时触发，如 `chatSend`、`entityHurt`、`playerSpawn`、`worldInitialize` 等等。

::: tip
查看 Microsoft 文档以了解 Minecraft 中有哪些世界事件可用。

-   Before 事件在事件发生之前触发，是只读的但可以取消。[Before 事件文档](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/worldbeforeevents)。
-   After 事件在事件运行后触发，无法取消。[After 事件文档](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/worldafterevents)。
-   除非需要取消事件，否则应始终使用 After 事件。

:::

要订阅事件，请从 world 对象获取 `afterEvents` 属性。在这个示例中，我们将订阅方块破坏事件。

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

**系统事件**

系统事件在 Minecraft 附加包系统范围内发生特定类型的事件时触发。

::: tip
查看 Microsoft 文档以了解 Minecraft 中有哪些系统事件可用。

-   Before 事件在事件发生之前触发，是只读的但可以取消。[Before 事件文档](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/systembeforeevents)。
-   After 事件在事件运行后触发，无法取消。[After 事件文档](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/systemafterevents)。
-   两种类型的事件用于不同的目的。

:::

从 system 对象获取 `beforeEvents` 属性。在这个示例中，我们将订阅 watchdogTerminate 事件，允许 API 取消性能看门狗关闭世界（如果游戏超过性能边界，取决于脚本环境的配置）。

```js
import { system } from "@minecraft/server";

// subscribing to the watchdogTerminate event
system.beforeEvents.watchdogTerminate.subscribe((event) => {
    event.cancel = true; // Cancel the world from closing down. This will terminate the script engine instead.
    console.warn("Canceled critical exception of type " + event.terminateReason); // Print a message to the console if this event fires.
});
```

**脚本事件**

脚本事件，不要与世界事件或系统事件混淆，它允许我们通过注册 `scriptEventReceive` 事件处理器来响应传入的 `/scriptevent` 命令，如果玩家、NPC 或方块调用了 `/scriptevent` 命令，此事件就会触发。可以在[脚本事件文档](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/scripteventcommandmessageafterevent)页面找到有关此事件的更多信息。

```
/scriptevent <messageId: string> <message: string>
```

-   scriptevent 命令中的 `messageId` 可以通过 API 中的 `ScriptEventCommandMessageEvent.id` 获取
-   scriptevent 命令中的 `message` 可以通过 API 中的 `ScriptEventCommandMessageEvent.message` 获取

**示例**：

命令输入：

```
/scriptevent wiki:test Hello World
```

事件监听器返回的内容：

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

## 调度

我们可能决定在未来的某个时间执行一个函数。这称为"调度调用"。

在脚本 API 中，原生 javascript 方法如 `setTimeout` 和 `setInterval` 在脚本引擎中不存在。Minecraft 改为实现了自己的调度方法，使用游戏刻而不是实时时间。

这些方法可以从通过导入获得的 `system` 对象访问：

```js
import { system } from "@minecraft/server";
```

有两种方法：

**调度定时器**
`system.run(callback)` - 在下一个可用的未来时间运行指定的函数。这常用于实现延迟行为和游戏循环。当在事件处理器的上下文中运行时，这通常会在事件发生的同一刻结束时运行代码。当在其他代码中运行时（system.run 调用），它将在下一个刻中运行函数。但是，请注意，根据系统负载，不能保证在同一刻或下一刻运行。

```js
import { system, world } from "@minecraft/server";

system.run(() => {
    world.sendMessage("This runs one tick after the previous tick");
});
```

`system.runInterval(callback: () => void, tickInterval?: number): number` - 重复运行一组代码，从第一个时间间隔后开始，然后永久连续重复该间隔。

```js
import { system, world } from "@minecraft/server";

system.runInterval(() => {
    world.sendMessage("This message runs every 20 ticks (once per second)");
}, 20);
```

`system.runTimeout(callback: () => void, tickDelay?: number): number` - 在时间间隔过去后运行一次函数。

```js
import { system, world } from "@minecraft/server";

system.runTimeout(() => {
    world.sendMessage("This message runs once once 20 ticks has passed.");
}, 20);
```

`system.runJob(generator: Generator<void, void, void>): number` - 将生成器函数排队运行直到完成。生成器将在每个刻中获得一个时间片，并将运行直到它产生或完成。[生成器函数参考](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*)。

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

**清除定时器**

`system.clearRun(runId): void` - 取消先前通过 `run`、`runTimeout` 或 `runInterval` 函数调度的函数运行。

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

`clearJob(jobId: number): void` - 取消通过 `runJob` 函数排队的作业的执行。

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

有关所有系统方法的更多信息，请参阅[游戏循环和定时回调](https://learn.microsoft.com/en-us/minecraft/creator/documents/systemrunguide)文档页面。

## 保存和加载数据

使用 `@minecraft/server` 模块，开发者可以定义自己的自定义属性，称为动态属性，可以在 Minecraft 中使用和存储。此数据专门使用行为包头 UUID 存储在世界的 `db` 文件夹中。

[byte]: /assets/images/nbt/byte.png
[compound]: /assets/images/nbt/compound.png
[string]: /assets/images/nbt/string.png

![Compound][compound] `DynamicProperties`

> ![Compound][compound] `8a121475-6f9f-4780-a746-2bf25f732204` — 行为包的头部 UUID
>
> > ![String][string] `myColorProperty: "orange"`{lang=js}
> >
> > ![Byte][byte] `hasOwnerDied: false`{lang=js}

为了保存数据，属性必须首先被初始化。有多种方式声明动态属性，可以在实体、世界或物品上定义。你可以定义任意数量的数字和布尔值，但是 Minecraft API 只允许每个行为包在每个动态属性上保存有限的数据。

-   字符串动态属性最多可以是 32767 个字符。
-   数字动态属性可以达到 64 位浮点数限制（-1.7976931348623158e+308 到 -2.2250738585072014e+308，或从 2.2250738585072014e+308 到 1.7976931348623158e+308）。

**获取和设置动态属性**

要获取和设置动态属性，你可以使用 `getDynamicProperty` 和 `setDynamicProperty` 方法。

:::tip
请注意，获取动态属性并不能保证它已保存值。首次获取属性时，该方法返回 `undefined`。
:::

考虑到这一点，这里有一些在 Minecraft 中获取和设置动态属性的示例：

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

以下是在全局级别获取和设置动态属性的示例：

```js
import { world } from "@minecraft/server";

world.setDynamicProperty("player_score", 100); // set a property with a number value
const playerScore = world.getDynamicProperty("player_score"); // get the previously set property- will return 100.
```

## 运行命令

`Entity.runCommandAsync()` 或 `Dimension.runCommandAsync()` 允许 API 从更广泛维度的上下文中异步运行特定命令。
请注意，在任意给定的刻中最多可以运行 128 个异步命令。尽可能避免使用 runCommandAsync 调用，而是使用内置的 API 方法。

游戏在下一刻执行排队的命令。
要与脚本并行运行命令，你必须将代码包装在异步函数中。

```js
import { world } from "@minecraft/server";

(async () => {
    await world.getDimension("overworld").runCommandAsync("say Using say command on dimension.");

    world.sendMessage("This runs after runCommandAsync is executed");
})();
```

返回 `Promise<CommandResult>`。如果队列已满，则**同步**抛出错误。

**避免在脚本中运行命令**

通常我们建议避免使用命令，因为从脚本 API 运行命令很慢，随着时间推移执行的命令越来越多，服务器性能会开始变慢。然而，以下命令功能未在脚本 API 中实现，因此我们别无选择只能使用 `runCommand` 或 `runCommandAsync`。

**末影箱**

脚本 API 没有获取/设置玩家末影箱信息的方法。可以使用 `/replaceitem`、`/clear`、`@s[hasitem=]` 等命令作为变通方案。

**tickingarea**

脚本 API 无法访问、设置或移除加载区域。

**kick**

脚本 API 无法踢出玩家。

**setblock**

脚本 API 无法破坏方块 `/setblock ... destroy`。但是可以设置方块。

**玩家能力**

-   脚本 API 无法为每个玩家设置能力。
-   你无法读取玩家能力。

**execute**

脚本 API 可以利用新的 execute 语法运行带有大量 if/unless 条件的命令，以简化或提高性能。

`/execute` 可以用来触发 `/loot` 命令，因为 `runCommandAsync` 无法直接访问原版战利品表。

**Minecraft 函数**

-   脚本 API 无法在不使用 `/function` 的情况下运行 Minecraft 函数文件。

**locate**

-   脚本 API 无法获取结构位置。
-   无法获取生物群系位置。

**loot**

-   脚本 API 虽然战利品从一开始就是坏的，但对于向玩家/世界放置或设置物品很有用。

**weather**

-   脚本 API 无法获取/设置世界天气。

**difficulty**

-   脚本 API 无法设置世界难度。

**mobevent**

-   脚本 API 无法启用/禁用生物事件。

**fog**

-   脚本 API 无法管理玩家的活跃雾设置。

**stopsound**

-   脚本 API 无法停止播放声音。音乐可以使用 `World::stopMusic()` 或 `Player::stopMusic()` 停止。

**dialogue**

-   脚本 API 无法向玩家打开 NPC 对话框。
-   它无法更改 NPC 显示的对话。