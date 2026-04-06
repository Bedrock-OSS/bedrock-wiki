---
title: GameTests
description: 学习如何使用 GameTest 框架来测试你的地图或附加包中的游戏机制是否正常工作。
category: 教程
tags:
    - experimental
mentions:
    - cda94581
    - SirLich
    - Joelant05
    - solvedDev
    - sermah
    - stirante
    - Paty007gr
    - JaylyDev
    - Fabrimat
    - Herobrine643928
    - kumja1
    - QuazChick
---

:::warning _beta API
脚本 API 目前正在积极开发中，突破性更改很频繁。本页假设 Minecraft 1.20.40 的格式
:::

GameTest 框架允许我们创建单元测试（"GameTests"），以便更轻松地测试游戏机制是否正常工作。

GameTests 可以与 `/gametest` 命令一起使用。

-   `/gametest runthis` - 在范围内运行最近的 GameTest。
-   `/gametest runthese` - 运行范围内的所有 GameTests。
-   `/gametest pos` - 告诉你最近 GameTest 的相对坐标。
-   `/gametest clearall [radius: int]` - 移除指定半径内的所有 GameTests。
-   `/gametest run <testName: GameTestName> [rotationSteps: int]` - 创建并运行指定的 GameTest。
-   `/gametest runset [tagTag: GameTestTag] [rotationSteps: int]` - 创建并运行所有带有指定标签的 GameTests。
-   `/gametest create <testName: string> [width: int] [height: int] [depth: int]` - 创建具有指定尺寸的空白 GameTest 区域。
-   `/reload` - 重新加载所有行为包中的函数和脚本文件。（1.19+）

自 1.19.40 以来，原版 GameTests 未包含在 Minecraft 游戏文件中，因此你无法在不添加自己的自定义行为包的情况下运行任何 GameTests。
你可以在 [minecraft-gametests](https://github.com/microsoft/minecraft-gametests/tree/main/js-gametests/behavior_packs/JsGameTests) GitHub 仓库中找到原版 GameTests。

## 开始使用 GameTest

首先，你需要有自己的行为包以及对脚本和 API 的良好理解。如果你刚开始入门，请查看[这篇文章](/scripting/scripting-intro)。

要使用 GameTest 框架，需要 `@minecraft/server-gametest` 模块。GameTest API 模块还需要 `@minecraft/server` 模块，因此在你的 manifest.json 依赖项中需要以下内容：

<CodeHeader>BP/manifest.json/</CodeHeader>

```json
"dependencies": [
    {
        "module_name": "@minecraft/server",
        "version": "1.7.0-beta"
    },
    {
        "module_name": "@minecraft/server-gametest",
        "version": "1.0.0-beta"
    }
]
```

要运行 GameTest，需要行为包中的结构文件，并且需要通过 `register` 函数注册命令。

<CodeHeader>BP/scripts/Main.js</CodeHeader>

```js
import * as GameTest from "@minecraft/server-gametest";

// Registration code for our test
GameTest.register(
    "wiki", // Name of the class of tests.
    "simpleTest", // Name of this test.
    (test) => {
        // Implementation of the test
        /**
         * @type {import("@minecraft/server").Vector3}
         * location from the test of where the cow should spawn in
         */
        const location = { x: 0, y: 0, z: 0 };
        const cow = test.spawn("minecraft:cow", location); // Returns an Entity instance

        test.succeedWhen(() => {
            test.assertEntityPresentInArea("minecraft:cow", true);
        });
    }
)
    .maxTicks(410)
    .structureName("wiki:test"); // References "BP/structures/wiki/test.mcstructure"
```

注册命令时，测试函数会被锁定，这意味着测试函数在命令注册后无法访问测试函数外部的变量。

如果你遇到脚本 API 问题，请考虑查看 Microsoft Learn 上的[构建你的第一个 GameTest](https://learn.microsoft.com/minecraft/creator/documents/gametestbuildyourfirstgametest) 指南，或加入 **Bedrock Add-Ons** Discord 服务器寻求支持，你可以在[有用链接](/meta/useful-links#discord-links) 页面上找到它以及大量其他资源！