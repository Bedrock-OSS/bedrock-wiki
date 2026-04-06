---
title: TypeScript
category: 文档
mentions:
    - BlueFrog130
    - sermah
    - SmokeyStack
    - SirLich
    - Fabrimat
    - JaylyDev
    - Herobrine643928
    - ThomasOrs
description: MCBE 附加包开发中的 TypeScript。
---

[TypeScript](https://www.typescriptlang.org/) 是由微软开发和维护的编程语言。它是 JavaScript 的严格语法超集，并为语言添加了可选的静态类型。TypeScript 旨在开发大型应用程序，并转编译为 JavaScript。由于 TypeScript 是 JavaScript 的超集，现有的 JavaScript 程序也是有效的 TypeScript 程序。

在为 Minecraft 附加包开发脚本时，使用 TypeScript 非常有益。现有的库可以帮助开发 Minecraft 附加包，为广播和监听事件提供智能感知和类型安全。

## 工作原理

TypeScript 是一种需要编译为 JavaScript 的语言。Minecraft 不知道如何处理 `.ts` 文件。因此，需要设置一些工具才能利用 TypeScript 构建附加包。

首先，TypeScript 文件需要编译为 JavaScript，这一切都通过使用 [TypeScript 编译器](https://www.npmjs.com/package/typescript) 完成。然后文件就可以被 Minecraft 的脚本系统使用了。

## 前提条件

1.  Minecraft Bedrock Edition（Windows 10）
2.  一个代码编辑器，如 Visual Studio Code（虽然记事本技术上也可以，但我们将假设在接下来使用 VSCode）
3.  JavaScript 的基础知识（本教程不会教你如何用 JavaScript 编写代码，并假定你有基础知识）
4.  [Node.js](https://nodejs.org/en/) 是安装工具和将 TypeScript 编译为 JavaScript 所必需的。
5.  TypeScript 的知识

## 设置指南

这是使用 TypeScript 编译器设置脚本 API TypeScript 项目的指南。

### 开始

打开一个终端（Windows 的命令提示符），然后导航到项目应该所在的位置。它可以在任何地方。对于 Windows 10，你也可以在文件资源管理器中 `Shift + 右键点击`，然后选择 `在 PowerShell 中打开`。

如果还没有。运行 `cd` 将终端运行的目录设置为项目所在的目录。

```bash
cd path/to/project
```

接下来我们需要安装用于创建附加包的 TypeScript。为此，请输入以下命令。

以下命令全局安装 TypeScript。

```bash
npm install -g typescript
```

以下命令在当前目录中创建 package.json 文件。

```bash
npm init -y
```

以下命令安装脚本 API 模块。本示例中使用 Beta API。

```bash
npm install @minecraft/server@beta
npm install @minecraft/server-ui@beta
npm install @minecraft/server-gametest@beta
npm install @minecraft/server-admin@beta
npm install @minecraft/server-net@beta
```

现在你的文件夹结构应该包含以下目录：

<FolderView :paths="[
    'node_modules',
    'package-lock.json',
    'package.json',
]"></FolderView>

::: tip

如果收到诸如 `command npm not found` 的错误，请确保你已安装 Node.js 并将其添加到 PATH 中。

:::

现在可以初始化项目。下一步是创建 TypeScript 项目，通过在当前目录中创建 `tsconfig.json` 文件，详情如下，模拟 Minecraft 脚本 API 文件系统。

<CodeHeader>tsconfig.json</CodeHeader>

```json
{
    "compilerOptions": {
        "module": "ES2020",
        "target": "ES2021",
        "moduleResolution": "Node",
        "allowSyntheticDefaultImports": true,
        "baseUrl": "./src",
        "rootDir": "./src",
        "outDir": "./scripts"
    },
    "exclude": ["node_modules"],
    "include": ["src"]
}
```

现在你已经创建了项目，它可以在你选择的 IDE 中打开。如果你正在使用 VSCode，你可以 `cd` 进入你的项目目录并运行 `code .` 来打开你的项目。

### 项目结构

<FolderView :paths="[
    'node_modules',
    'src/Main.ts',
    'manifest.json',
    'pack_icon.png',
    'package-lock.json',
    'package.json',
    'tsconfig.json',
]"></FolderView>

除非你知道自己在做什么，否则项目中唯一需要关心的部分是 `src` 文件夹。所有开发都应该在其中进行。

### 编写脚本

现在在你的 `src` 目录中编写你的第一个 TypeScript 代码，例如：

<CodeHeader>BP/src/Main.ts</CodeHeader>

```ts
import { Player, EntityQueryOptions, GameMode, Vector3, world } from "@minecraft/server";

// Example function that uses the provided types
function findPlayersInSurvivalMode(location: Vector3): Player[] {
    const options: EntityQueryOptions = {
        gameMode: GameMode.survival,
        location: location,
    };

    const players: Player[] = world.getPlayers(options);
    return players;
}

// Example usage
const playerLocation: Vector3 = { x: 10, y: 20, z: 30 };
const playersInSurvivalMode: Player[] = findPlayersInSurvivalMode(playerLocation);
console.log(playersInSurvivalMode);
```

### 命令

开发项目时最常用的命令如下：

```bash
tsc
```

`tsc` 会将 scripts 文件夹中的所有 TS 文件编译到你的行为包文件夹中。

```bash
tsc --watch
```

`--watch` 会监视 `src` 目录中的任何更改，并自动重新安装附加包。

<FolderView :paths="[
    'node_modules',
    'scripts/Main.js',
    'src/Main.ts',
    'manifest.json',
    'pack_icon.png',
    'package-lock.json',
    'package.json',
    'tsconfig.json',
]"></FolderView>

现在 `src/Main.ts` 文件应该已被转译为 `scripts/Main.js`，代码如下：

<CodeHeader>BP/scripts/Main.js</CodeHeader>

```js
import { GameMode, world } from "@minecraft/server";
// Example function that uses the provided types
function findPlayersInSurvivalMode(location) {
    const options = {
        gameMode: GameMode.survival,
        location: location,
    };
    const players = world.getPlayers(options);
    return players;
}
// Example usage
const playerLocation = { x: 10, y: 20, z: 30 };
const playersInSurvivalMode = findPlayersInSurvivalMode(playerLocation);
console.log(playersInSurvivalMode);
```

### 打包

为了在 Minecraft 中运行代码，将行为包压缩并导入到 Minecraft 世界中。你的行为包应该只包含以下文件，其余文件不需要包含在 `.mcpack` 压缩文件中。

<FolderView :paths="[
  'scripts/Main.js',
    'manifest.json',
    'pack_icon.png',
]"></FolderView>

恭喜，你已经为脚本 API 创建了你的第一个 TypeScript 项目！