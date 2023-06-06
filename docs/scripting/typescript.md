---
title: TypeScript
category: Documentation
mentions:
    - BlueFrog130
    - sermah
    - SmokeyStack
    - SirLich
    - Fabrimat
    - JaylyDev
    - Herobrine643928
    - ThomasOrs
---

[TypeScript](https://www.typescriptlang.org/) is a programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript and adds optional static typing to the language. TypeScript is designed for the development of large applications and transcompiles to JavaScript. As TypeScript is a superset of JavaScript, existing JavaScript programs are also valid TypeScript programs.

Typescript is very beneficial to use when developing scripts for Minecraft addons. There exist libraries to aid in the development of Minecraft addons to provide intellisense and type-safety for broadcasting and listening to events.

## How it Works

TypeScript is a language which requires compilation into JavaScript. Minecraft has no idea what to do with a `.ts` file. Therefore some tooling needs to be set up in order to utilize TypeScript to build addons.

First, the TypeScript files need to be compiled into JavaScript, which is all accomplished by utilizing the [TypeScript Compiler](https://www.npmjs.com/package/typescript). Then the files can be utilized by Minecraft's scripting system.

Since there is already a build step, we might as well incorporate some other systems to allow for file separation and code sharing. Minecraft's scripting system will only act on the script files within their respective folders utilizing what is assumed to be, Mojang's own JavaScript interpreter. Therefore, any logic split across multiple files must be merged into a single large file. This is where tooling such as [webpack](https://webpack.js.org/) and [browserify](https://browserify.org/) come in handy.

## Script API

## Prerequisites

1. Minecraft Bedrock Edition (Windows 10)
2. A code editor like Visual Studio Code (although Notepad will technically be sufficient, we will be assuming the usage of VSCode going forward)
3. basic knowledge of Javascript (this tutorial will not be teaching you how to code in Javascript and presumes a baseline knowledge of it)
4. [Node.js](https://nodejs.org/en/) is required for installing tooling and compiling TypeScript into JavaScript.
5. Knowledge of TypeScript

## Setup Guide

This guide is for setting up a Script API TypeScript project using TypeScript compiler.

### Getting Started

Open a terminal (Command Prompt for Windows) and navigate to where the project should be located. It can be anywhere. For Windows 10 you can also `Shift + RClick` in file explorer and select `Open in PowerShell`.

Next we need to install the template generator for creating the addon. To do this, enter the following commands.

The following command install TypeScript globally.

```bash
npm install -g typescript
```

The following command creates a package.json file in current directory. See [here](https://docs.npmjs.com/cli/v9/commands/npm-init) for more information.

```bash
npm init -y
```

The following commands install Script API modules. Beta APIs is used in this example.

```bash
npm install @minecraft/server@beta
npm install @minecraft/server-ui@beta
npm install @minecraft/server-gametest@beta
npm install @minecraft/server-admin@beta
npm install @minecraft/server-net@beta
```

::: tip

If you receive an error such as `command npm not found`, ensure you have Node.js installed and added to the PATH.

:::

Now the project can be initialized. The next step is to create a TypeScript project by creating a `tsconfig.json` file in your current directory, with the following details which simulates the Minecraft Scripting API file system.

<CodeHeader>tsconfig.json</CodeHeader>

```json
{
  "compilerOptions": {
    // Specify what type of code is generated.
    "module": "ES2020",
    "target": "ES2021",
    "moduleResolution": "Node",
    "allowSyntheticDefaultImports": true,
    // Specify the folder entry for your TS files
    "baseUrl": "./src",
    "rootDir": "./src",
    // Specify the folder output for generated JS files.
    "outDir": "./scripts"
  },
  "exclude": [ "node_modules" ],
  "include": [ "src" ]
}
```

Now that you created the project, it can be opened in your IDE of choice. If you are utilizing VS Code, you can `cd` into your project directory and run `code .` to open your project.

### Project Structure

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

Unless you know what you are doing, the only part of the project to be concerned with is everything within the `src` folder. That is where all the development should take place.

### Commands

The following commands are most utilized when developing a project.

```bash
tsc
```

`tsc` will compile all your TS files in scripts folder to your behavior packs folder.

```bash
tsc --watch
```

`--watch` will watch for any changes you make within the `src` directory and automatically reinstall the addon.

To run the code in Minecraft, zip the behavior pack and import it to a Minecraft world. In your behavior pack should only include these files in the following, and the rest of the files do not have to be included in `.mcpack` compressed file.

<FolderView :paths="[
  'scripts/Main.js',
	'manifest.json',
	'pack_icon.png',
]"></FolderView>

## Legacy Scripting

:::danger Stop!

This scripting API is no longer supported. Refer to the new [Scripting API](/scripting/starting-scripts.html).

:::

[//]: # 'Documentation is heavily based on https://minecraft-addon-tools.github.io/tutorials/getting-started'

You do not need to know how to utilize these tools since there are already [libraries](#typescript-supported-libraries) that utilize them for you without any effort on your behalf. It is just important to understand the tooling making these sorts of libraries possible.

## Prerequisites

1. [Beginners Guide Prerequisites](/scripting/scripting-intro)
2. [Node.js](https://nodejs.org/en/) is required for installing tooling and compiling TypeScript into JavaScript.
3. Knowledge of TypeScript and read through the [Beginners Guide](/scripting/scripting-intro)

## TypeScript-Supported Libraries

| Author                                                            | Package                                                                                         |
| ----------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| [minecraft-addon-tools](https://github.com/minecraft-addon-tools) | [minecraft-addon-toolchain](https://github.com/minecraft-addon-tools/minecraft-addon-toolchain) |
| [karikera](https://github.com/karikera)                           | [minecraft-addon](https://github.com/karikera/mcaddon-start)                                    |

## Setup Guide

This guide is for setting up and using the [minecraft-addon-toolchain](https://github.com/minecraft-addon-tools/minecraft-addon-toolchain) as it currently provides the most tooling with the easiest setup.

### Getting Started

Open a terminal (Command Prompt for Windows) and navigate to where the project should be located. It can be anywhere. For Windows 10 you can also `Shift + RClick` in file explorer and select `Open in PowerShell`.

Next we need to install the template generator for creating the addon. To do this, enter the following commands.

```bash
npm install -g yeoman
```

```bash
npm install -g generator-minecraft-addon
```

::: tip

If you receive an error such as `command npm not found`, ensure you have Node.js installed and added to the PATH.

:::

Now the project can be initialized. The next step is to generate the project with all the information you define.

```bash
yo minecraft-addon
```

![Creating a project](/assets/images/scripting/typescript/project-create.gif)

Now that you created the project, it can be opened in your IDE of choice. If you are utilizing VS Code, you can `cd` into your project directory and run `code .` to open your project.

### Project Structure

<FolderView :paths="[
	'node_modules',
	'packs/behaviors/manifest.json',
	'packs/behaviors/pack_icon.png',
  'packs/behaviors/scripts/client/client.ts',
  'packs/behaviors/scripts/server/server.ts',
  'packs/resources/pack_icon.png',
  'packs/resources/pack_icon.png',
  'gulpfile.js',
  'package-lock.json',
  'package.json',
  'tsconfig.json',
]"></FolderView>

Unless you know what you are doing, the only part of the project to be concerned with is everything within the `packs` folder. That is where all the development should take place.

### Commands

The following commands are most utilized when developing a project using `minecraft-addon-toolchain`.

```bash
npm run installaddon
```

`installaddon` will, as it says, install the addon into the `development` resource/behaviors folders. The pack can then be utilized like any other addon.

```bash
npm run watch
```

`watch` will watch for any changes you make within the `packs` directory and automatically reinstall the addon.

```bash
npm run packageaddon
```

`packageaddon` will build, package, and zip the addon in a connivent manner. By default, outputs to `out/packaged` directory.
