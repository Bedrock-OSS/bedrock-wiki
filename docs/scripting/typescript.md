---
layout: page
title: TypeScript
parent: Scripting
---

[//]: # (Documentation is heavily based on https://minecraft-addon-tools.github.io/tutorials/getting-started)

# TypeScript

[TypeScript](https://www.typescriptlang.org/) is a programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript and adds optional static typing to the language. TypeScript is designed for the development of large applications and transcompiles to JavaScript. As TypeScript is a superset of JavaScript, existing JavaScript programs are also valid TypeScript programs.

Typescript is very beneficial to use when developing scripts for Minecraft addons. There exist libraries to aid in the development of Minecraft addons to provide intellisense and type-safety for broadcasting and listening to events.

## How it Works

TypeScript is a language which requires compilation into JavaScript. Minecraft has no idea what to do with a `.ts` file. Therefore some tooling needs to be set up in order to utilize TypeScript to build addons.

First, the TypeScript files need to be compiled into JavaScript, which is all accomplished by utilizing the [TypeScript Compiler](https://www.npmjs.com/package/typescript). Then the files can be utilized by Minecraft's scripting system.

Since there is already a build step, we might as well incorporate some other systems to allow for file separation and code sharing between the `client` and `server`. Minecraft's scripting system will only act on the `server.js` and `client.js` scripts within their respective folders utilizing what is assumed to be, Mojang's own JavaScript interpreter. Therefore, any logic split across multiple files must be merged into a single large file. This is where tooling such as [webpack](https://webpack.js.org/) and [browserify](https://browserify.org/) come in handy.

You do not need to know how to utilize these tools since there are already [libraries](#typescript-supported-libraries) that utilize them for you without any effort on your behalf. It is just important to understand the tooling making these sorts of libraries possible.

## Prerequisites

1. [Beginners Guide Prerequisites](/scripting/beginners-guide#prerequisites)
2. [Node.js](https://nodejs.org/en/) is required for installing tooling and compiling TypeScript into JavaScript.
3. Knowledge of TypeScript and read through the [Beginners Guide](/scripting/beginners-guide)

## TypeScript-Supported Libraries

| Author          | Package     |
|-----------------|-------------|
| [minecraft-addon-tools](https://github.com/minecraft-addon-tools) | [minecraft-addon-toolchain](https://github.com/minecraft-addon-tools/minecraft-addon-toolchain) |
| [karikera](https://github.com/karikera) | [minecraft-addon](https://github.com/karikera/mcaddon-start) |

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

{% include info.html
  contents='If you receive an error such as "command npm not found", ensure you have Node.js installed and added to the PATH.'
%}

Now the project can be initialized. The next step is to generate the project with all the information you define.

```bash
yo minecraft-addon
```

![Creating a project](/assets/images/scripting/typescript/project-create.gif)

Now that you created the project, it can be opened in your IDE of choice. If you are utilizing VS Code, you can `cd` into your project directory and run `code .` to open your project.

### Project Structure

<div markdown="0" class="folder-structure">
    <ul>
        <li><span class="folder">node_modules</span></li>
        <li><span class="folder">packs</span>
            <ul>
                <li><span class="folder"><a href="/schemas/behavior-folder" target="__blank">behaviors</a></span>
                    <ul>
                        <li><span class="file">manifest.json</span></li>
                        <li><span class="image">pack_icon.png</span></li>
                        <li><span class="folder">scripts</span>
                            <ul>
                                <li><span class="folder">client</span>
                                    <ul>
                                        <li><span class="file">client.ts</span></li>
                                    </ul>
                                </li>
                                <li><span class="folder">server</span>
                                    <ul>
                                        <li><span class="file">server.ts</span></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li><span class="folder"><a href="/schemas/resource-folder" target="__blank">resources</a></span>
                    <ul>
                        <li><span class="file">manifest.json</span></li>
                        <li><span class="image">pack_icon.png</span></li>
                    </ul>
                </li>
            </ul>
        </li>
        <li><span class="file">gulpfile.js</span></li>
        <li><span class="file">package-lock.json</span></li>
        <li><span class="file">package.json</span></li>
        <li><span class="file">tsconfig.json</span></li>
    </ul>
</div>

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
