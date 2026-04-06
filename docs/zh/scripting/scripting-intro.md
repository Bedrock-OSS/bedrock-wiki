---
title: 脚本入门
category: 通用
nav_order: 1
mentions:
    - cda94581
    - Herobrine643928
    - JaylyDev
    - SmokeyStack
    - kumja1
    - realfeatherdev
    - QuazChick
    - jeanmajid
    - AndroAGENT
description: 学习如何通过使用 JavaScript 文件来修改你的世界。
---

::: tip
此脚本 API 页面假设你具有附加包包设置的基础知识。有关如何设置行为包的信息，请参阅[附加包入门](/guide/introduction)页面。
:::

::: warning
脚本 API 目前正在积极开发中，突破性更改很频繁。本页假设 Minecraft 1.21.114 的格式
:::

## 概述

脚本 API（原名 GameTest 框架）是一种允许创建新种类创作的功能，这些功能使用行为包文件夹中的 JavaScript 文件构建。脚本 API 的大部分内容不是实验性的。

本页面将向你介绍你每天都会使用的 Minecraft 创作者 API 概念的 80%。

## 创建你的第一个项目

目前，脚本只能用于行为包。

在行为包清单中，你需要添加一个 `script` 模块并为你的脚本项目设置一个 `entry` 点。目前，只有 "javascript" 是支持的有效语言。

<CodeHeader>BP/manifest.json#modules[0]</CodeHeader>

```json
{
    "uuid": "239c134f-67bf-4738-9bcc-8c69d31b1f72",
    "version": "1.0.0",
    "type": "script",
    "language": "javascript",
    "entry": "scripts/main.js"
}
```

此外，需要根据使用的模块设置依赖项。要导入和使用脚本 API 模块，必须使用 `module_name` 和 `version` 指定依赖项。在此示例中，使用了 `@minecraft/server` 模块。

<CodeHeader>BP/manifest.json</CodeHeader>

```json
{
    "format_version": 2,
    "header": {
        "name": "Bedrock Add-ons",
        "description": "Script API Template",
        "uuid": "<UUID>",
        "version": "1.0.0",
        "min_engine_version": [1, 21, 114]
    },
    "modules": [
        {
            "uuid": "<UUID>",
            "version": "1.0.0",
            "type": "script",
            "language": "javascript",
            // Your entry file; where Minecraft will read your code from.
            "entry": "scripts/main.js"
        }
    ],
    // Uncomment to use eval() and Function() inside your code (unrecommended), remove if not necessary
    // "capabilities": ["script_eval"],
    "dependencies": [
        {
            // Enables the use of @minecraft/server module, with a version of 2.2.0 (the latest stable version available).
            "module_name": "@minecraft/server",
            "version": "2.3.0"
        }
    ]
}
```

如果你的项目需要其他模块来运行你的代码，请添加遵循上述格式的其他依赖项。

**稳定 API 模块**，这些不需要开启 Beta API 实验。大部分功能都包含在稳定 API 中，在 Minecraft 更新时不会破坏或更改。

-   `@minecraft/server`:

    -   [`2.3.0`](https://www.npmjs.com/package/@minecraft/server/v/2.3.0)（最新版本）
    -   [`2.2.0`](https://www.npmjs.com/package/@minecraft/server/v/2.2.0)
    -   [`2.1.0`](https://www.npmjs.com/package/@minecraft/server/v/2.1.0)
    -   [`2.0.0`](https://www.npmjs.com/package/@minecraft/server/v/2.0.0)
    -   [`1.19.0`](https://www.npmjs.com/package/@minecraft/server/v/1.19.0)
    -   [`1.18.0`](https://www.npmjs.com/package/@minecraft/server/v/1.18.0)
    -   [`1.17.0`](https://www.npmjs.com/package/@minecraft/server/v/1.17.0)
    -   [`1.16.0`](https://www.npmjs.com/package/@minecraft/server/v/1.16.0)
    -   [`1.15.0`](https://www.npmjs.com/package/@minecraft/server/v/1.15.0)
    -   [`1.14.0`](https://www.npmjs.com/package/@minecraft/server/v/1.14.0)
    -   [`1.13.0`](https://www.npmjs.com/package/@minecraft/server/v/1.13.0)
    -   [`1.12.0`](https://www.npmjs.com/package/@minecraft/server/v/1.12.0)
    -   [`1.11.0`](https://www.npmjs.com/package/@minecraft/server/v/1.11.0)
    -   [`1.10.0`](https://www.npmjs.com/package/@minecraft/server/v/1.10.0)
    -   [`1.9.0`](https://www.npmjs.com/package/@minecraft/server/v/1.9.0)
    -   [`1.8.0`](https://www.npmjs.com/package/@minecraft/server/v/1.8.0)
    -   [`1.7.0`](https://www.npmjs.com/package/@minecraft/server/v/1.7.0)
    -   [`1.6.0`](https://www.npmjs.com/package/@minecraft/server/v/1.6.0)
    -   [`1.5.0`](https://www.npmjs.com/package/@minecraft/server/v/1.5.0)
    -   [`1.4.0`](https://www.npmjs.com/package/@minecraft/server/v/1.4.0)
    -   [`1.3.0`](https://www.npmjs.com/package/@minecraft/server/v/1.3.0)
    -   [`1.2.0`](https://www.npmjs.com/package/@minecraft/server/v/1.2.0)
    -   [`1.1.0`](https://www.npmjs.com/package/@minecraft/server/v/1.1.0)
    -   [`1.0.0`](https://www.npmjs.com/package/@minecraft/server/v/1.0.0)

-   `@minecraft/server-ui`:

    -   [`2.0.0`](https://www.npmjs.com/package/@minecraft/server-ui/v/2.0.0)（最新版本，需要 `@minecraft/server@2.0.0` 或更高版本）
    -   [`1.3.0`](https://www.npmjs.com/package/@minecraft/server-ui/v/1.3.0)（需要 `@minecraft/server@1.3.0` 或更高版本）
    -   [`1.2.0`](https://www.npmjs.com/package/@minecraft/server-ui/v/1.2.0)（需要 `@minecraft/server@1.2.0` 或更高版本）
    -   [`1.1.0`](https://www.npmjs.com/package/@minecraft/server-ui/v/1.1.0)（需要 `@minecraft/server@1.2.0` 或更高版本）
    -   [`1.0.0`](https://www.npmjs.com/package/@minecraft/server-ui/v/1.0.0)（需要 `@minecraft/server@1.2.0`）

**Beta API 模块**需要在世界设置中开启 "Beta APIs" 实验。这些 API 可能会发生非常少的警告就更改、删除或添加，而且很容易破坏。请注意！

::: tip
从 v1.21.120 开始，你可以将依赖项 `version` 属性设置为 `"beta"`{lang=json} 以始终选择每个原生模块的最新 beta 版本。
:::

-   `@minecraft/server`:

    -   [`2.3.0-beta`](https://www.npmjs.com/package/@minecraft/server/v/2.3.0-beta.1.21.114-stable) (1.21.114)
    -   [`2.2.0-beta`](https://www.npmjs.com/package/@minecraft/server/v/2.2.0-beta.1.21.102-stable) (1.21.102)
    -   [`2.1.0-beta`](https://www.npmjs.com/package/@minecraft/server/v/2.1.0-beta.1.21.95-stable) (1.21.95)
    -   [`2.0.0-beta`](https://www.npmjs.com/package/@minecraft/server/v/2.0.0-beta.1.21.84-stable) (1.21.84)
    -   [`1.18.0-beta`](https://www.npmjs.com/package/@minecraft/server/v/1.18.0-beta.1.21.62-stable) (1.21.62)
    -   [`1.17.0-beta`](https://www.npmjs.com/package/@minecraft/server/v/1.17.0-beta.1.21.51-stable) (1.21.51)
    -   [`1.16.0-beta`](https://www.npmjs.com/package/@minecraft/server/v/1.16.0-beta.1.21.44-stable) (1.21.44)
    -   [`1.15.0-beta`](https://www.npmjs.com/package/@minecraft/server/v/1.15.0-beta.1.21.31-stable) (1.21.31)
    -   [`1.14.0-beta`](https://www.npmjs.com/package/@minecraft/server/v/1.14.0-beta.1.21.23-stable) (1.21.23)
    -   [`1.12.0-beta`](https://www.npmjs.com/package/@minecraft/server/v/1.12.0-beta.1.21.3-stable) (1.21.3)
    -   [`1.11.0-beta`](https://www.npmjs.com/package/@minecraft/server/v/1.11.0-beta.1.20.80-stable) (1.21.80)
    -   [`1.10.0-beta`](https://www.npmjs.com/package/@minecraft/server/v/1.10.0-beta.1.20.70-stable) (1.20.70)
    -   [`1.9.0-beta`](https://www.npmjs.com/package/@minecraft/server/v/1.9.0-beta.1.20.60-stable) (1.20.60)
    -   [`1.8.0-beta`](https://www.npmjs.com/package/@minecraft/server/v/1.8.0-beta.1.20.50-stable) (1.20.50)
    -   [`1.7.0-beta`](https://www.npmjs.com/package/@minecraft/server/v/1.7.0-beta.1.20.40-stable) (1.20.40)
    -   [`1.6.0-beta`](https://www.npmjs.com/package/@minecraft/server/v/1.6.0-beta.1.20.30-stable) (1.20.30)
    -   [`1.4.0-beta`](https://www.npmjs.com/package/@minecraft/server/v/1.4.0-beta.1.20.10-stable) (1.20.10)
    -   [`1.3.0-beta`](https://www.npmjs.com/package/@minecraft/server/v/1.3.0-beta.1.20.0-stable) (1.20.0)
    -   [`1.2.0-beta`](https://www.npmjs.com/package/@minecraft/server/v/1.2.0-beta.1.19.80-stable) (1.19.80)
    -   [`1.1.0-beta`](https://www.npmjs.com/package/@minecraft/server/v/1.1.0-beta.1.19.70-stable) (1.19.70)
    -   [`1.0.0-beta`](https://www.npmjs.com/package/@minecraft/server/v/1.0.0-beta.1.19.40-stable) (1.19.40)

-   `@minecraft/server-ui`:

    -   [`2.1.0-beta`](https://www.npmjs.com/package/@minecraft/server-ui/v/2.1.0-beta.1.21.114-stable) (1.21.114)
    -   [`2.0.0-beta`](https://www.npmjs.com/package/@minecraft/server-ui/v/2.0.0-beta.1.21.84-stable) (1.21.84)
    -   [`1.4.0-beta`](https://www.npmjs.com/package/@minecraft/server-ui/v/1.4.0-beta.1.21.62-stable) (1.21.62)
    -   [`1.3.0-beta`](https://www.npmjs.com/package/@minecraft/server-ui/v/1.3.0-beta.1.21.23-stable) (1.21.23)
    -   [`1.2.0-beta`](https://www.npmjs.com/package/@minecraft/server-ui/v/1.2.0-beta.1.21.3-stable) (1.21.3)
    -   [`1.1.0-beta`](https://www.npmjs.com/package/@minecraft/server-ui/v/1.1.0-beta.1.20.0-stable) (1.20.0)
    -   [`1.0.0-beta`](https://www.npmjs.com/package/@minecraft/server-ui/v/1.0.0-beta.1.19.80-stable) (1.21.23)

-   `@minecraft/server-gametest`:

    -   [`1.0.0-beta`](https://www.npmjs.com/package/@minecraft/server-gametest/v/1.0.0-beta.1.21.114-stable) (1.21.114)

-   `@minecraft/server-net`:

    -   [`1.0.0-beta`](https://www.npmjs.com/package/@minecraft/server-net/v/1.0.0-beta.1.21.114-stable) (1.21.114；仅限 Bedrock 专用服务器模块，必须在 `permission.json` 中启用，因为它默认未启用)

-   `@minecraft/server-admin`:

    -   [`1.0.0-beta`](https://www.npmjs.com/package/@minecraft/server-admin/v/1.0.0-beta.1.21.114-stable) (1.21.114；仅限 Bedrock 专用服务器模块)

-   `@minecraft/debug-utilities`:

    -   [`1.0.0-beta`](https://www.npmjs.com/package/@minecraft/debug-utilities/v/1.0.0-beta.1.21.114-stable) (1.21.114)

为了在你的代码中使用 `eval()` 函数或 `Function()` 构造函数，你可以在清单 capabilities 中添加以下内容：

<CodeHeader>BP/manifest.json</CodeHeader>

```json
{
    "capabilities": ["script_eval"]
}
```

入口点文件可以包含脚本和/或导入其他脚本文件。只能指定一个入口点文件。

## 使用 JS 编写脚本

Minecraft 的脚本引擎只运行 JavaScript，与其他 JavaScript 项目一样。查看[使用 TypeScript 编写脚本](/scripting/typescript#script-api)以将 TS 直接编译为 JavaScript。

<CodeHeader>BP/scripts/main.js</CodeHeader>

```js
// This file demonstrates that the code is working by
// Spamming the chat with "Hello World"

// Import world & system component from "@minecraft/server", for world & game logic.
import { world, system } from "@minecraft/server";

// Create & run an interval that is called every Minecraft tick
system.runInterval(() => {
    // Spams the chat with "Hello World" with world.sendMessage function from the API
    world.sendMessage("Hello World");
}, 1);
```

## 脚本 API 2.0.0

使用脚本 API 版本 2，脚本默认在世界加载之前执行。这意味着我们现在必须等到世界加载后才能运行大多数函数。

<CodeHeader>BP/scripts/main.js</CodeHeader>

```js
import { world } from "@minecraft/server";

// wait until the world is loaded
world.afterEvents.worldLoad.subscribe(() => {
    // Send a message in chat
    world.sendMessage("World has loaded");

    // import other js files
    import("./path/to/file.js");
});
```

## 参考文档

官方文档托管在 Microsoft Learn 上，可以在这里找到：

-   [`@minecraft/server`](https://learn.microsoft.com/minecraft/creator/scriptapi/mojang-minecraft/mojang-minecraft)
-   [`@minecraft/server-gametest`](https://learn.microsoft.com/minecraft/creator/scriptapi/mojang-gametest/mojang-gametest)
-   [`@minecraft/server-ui`](https://learn.microsoft.com/minecraft/creator/scriptapi/minecraft/server-ui/minecraft-server-ui)
-   [`@minecraft/server-admin`](https://learn.microsoft.com/minecraft/creator/scriptapi/mojang-minecraft-server-admin/mojang-minecraft-server-admin)
-   [`@minecraft/server-net`](https://learn.microsoft.com/minecraft/creator/scriptapi/mojang-net/mojang-net)
-   [`@minecraft/debug-utilities`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/debug-utilities/minecraft-debug-utilities)

可以在以下位置找到 Minecraft 预览版中最新 Beta API 模块的官方 TypeScript 声明：

-   [`@minecraft/server`](https://www.npmjs.com/package/@minecraft/server/v/beta)
-   [`@minecraft/server-gametest`](https://www.npmjs.com/package/@minecraft/server-gametest/v/beta)
-   [`@minecraft/server-ui`](https://www.npmjs.com/package/@minecraft/server-ui/v/beta)
-   [`@minecraft/server-admin`](https://www.npmjs.com/package/@minecraft/server-admin/v/beta)
-   [`@minecraft/server-net`](https://www.npmjs.com/package/@minecraft/server-net/v/beta)
-   [`@minecraft/debug-utilities`](https://www.npmjs.com/package/@minecraft/debug-utilities/v/beta)

这些可以在编辑器中用于增强自动补全和验证。

-   bridge. v2：内置支持 GameTest。
-   Visual Studio Code：安装 Node.js 和 npm，然后在命令行中运行以下命令：

最新的 beta API 模块：

```bash
npm i @minecraft/server@2.3.0-beta.1.21.114-stable
npm i @minecraft/server-ui@2.1.0-beta.1.21.114-stable
npm i @minecraft/server-gametest@1.0.0-beta.1.21.114-stable
npm i @minecraft/server-admin@1.0.0-beta.1.21.114-stable
npm i @minecraft/server-net@1.0.0-beta.1.21.114-stable
npm i @minecraft/debug-utilities@1.0.0-beta.1.21.114-stable
```

最新的稳定 API 模块：

```bash
npm i @minecraft/server
npm i @minecraft/server-ui
```