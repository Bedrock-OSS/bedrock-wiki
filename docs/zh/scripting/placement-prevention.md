---
title: 阻止放置方块
description: 通过脚本阻止放置方块。
category: 教程
tags:
    - experimental
mentions:
    - JWForever5504
    - QuazChick
---

:::warning Beta API
脚本 API 的 Beta 版本正在积极开发中，突破性更改很频繁。本页假设 Minecraft 1.21.120 的格式
:::

你是否曾经需要阻止放置特定的方块？有时玩家可能会获得危险方块，你可以使用此脚本保护你的世界或服务器！

## 设置

与其他脚本一样，你需要在 `manifest.json` 中添加依赖项。我们使用 `@minecraft/server` 模块，具体是最新的 `-beta` 版本。

<CodeHeader>BP/manifest.json</CodeHeader>

```json
{
    "format_version": 2,
    "header": {
        "name": "Block Placement Prevention",
        "description": "Prevent Placing of Certain Blocks using Script API",
        "uuid": "6f3a4325-4ce5-42f5-b141-12641c8823c3",
        "min_engine_version": [1, 20, 10],
        "version": "1.0.0"
    },
    "modules": [
        {,
            "type": "data",
            "uuid": "5a080d1d-bef8-47ce-aae1-a2ec3e0010ab",
            "version": "1.0.0"
        },
        {
            "type": "script",
            "language": "javascript",
            "entry": "scripts/main.js",
            "uuid": "53a5804b-fb35-4f7d-a89e-e4a925fadb77",
            "version": [1, 0, 0]
        }
    ],
    "dependencies": [
        {
            // Minecraft native module - needed to use the "@minecraft/server" module
            "module_name": "@minecraft/server",
            "version": "beta"
        }
    ]
}
```

在我们的清单中，我们添加了脚本模块。`entry` 是我们脚本文件的位置。这位于行为包的 `scripts` 文件夹中。依赖允许我们在代码中使用所需的脚本模块。

<FolderView
    :paths="[
        'BP/manifest.json',
        'BP/pack_icon.png',
        'BP/scripts/main.js'
    ]"
/>

## 阻止放置

即使你要使用另一个方块，如果这是你第一次创建此脚本，请严格按照教程操作。确认脚本正确后，你可以更改方块。

这是因为方块的标识符通常与你想象的不同。例如，发光物品框在内部被称为 `minecraft:glow_frame`。

我们将从在代码中添加我们将使用的模块导入开始。

<CodeHeader>BP/scripts/main.js</CodeHeader>

```js
import { world, system } from "@minecraft/server";
```

::: tip
了解更多关于 `system` 的信息，请参阅[系统事件](/scripting/script-server#events)。
:::

添加模块后，我们将添加阻止方块放置的措施。

<CodeHeader>BP/scripts/main.js</CodeHeader>

```js
world.beforeEvents.playerPlaceBlock.subscribe((event) => {
    const player = event.source;

    if (event.permutationToPlace.type.id === "minecraft:bedrock") {
        event.cancel = true;
        system.run(() => {
            player.sendMessage("You cannot place Bedrock");
        });
    }
});
```

这是执行我们代码的主要函数。`world.beforeEvents.playerPlaceBlock.subscribe()` 将在任何方块被放置之前运行。

-   `const player = event.source`{lang=js} 将变量 `player` 定义为事件的来源（放置方块的人）。使用 `const` 而不是 `var` 或 `let` 来表示来源 _不能_ 被更改，是常量。
-   `if` 语句要求条件评估为 true 才能运行括号内的代码。
    -   `event.permutationToPlace.type.id === "minecraft:bedrock"`{lang=js} 验证被放置的方块是 'minecraft:bedrock'。
-   `event.cancel = true`{lang=js} 取消该事件将执行的放置操作。
-   `system.run()`{lang=js} 是一个系统调用，告诉 Minecraft 将运行的代码推迟到下一个刻。
    这是必要的，因为 before 事件无法修改世界的状态（在我们的情况下，向玩家发送消息），而使用 system run 使代码不受此限制。
    有关系统回调和循环的更多信息，请参阅[这里](https://learn.microsoft.com/minecraft/creator/documents/scripting/system-run-guide)。
-   `player.sendMessage()`{lang=js} 向玩家发送一条消息，告诉他们不能放置该方块。

## 结论

你可以根据需要修改或替换 "YouCannot place Bedrock" 消息以及你自己的逻辑。

你也可以更改 `event.permutationToPlace.type.id === "minecraft:bedrock"`{lang=js} 中要检查的方块的标识符。将标识符（带命名空间）放在 `minecraft:bedrock` 的位置。

要了解有关脚本 API 的更多信息，你可以查看 [wiki](/scripting/scripting-intro) 或 [Microsoft 文档](https://learn.microsoft.com/en-us/minecraft/creator/documents/scriptdevelopertools)