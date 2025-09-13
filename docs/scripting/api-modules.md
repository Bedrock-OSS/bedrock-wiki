---
title: API Modules
category: General
nav_order: 3
mentions:
    - cda94581
    - conmaster2112
---

## Overview

Script API has modules for developers to interact with Minecraft. Additionally, manifest dependencies will need to be set based on the modules used within your add-on.

| Module Name                         | UUID                                   | Previous Names Aliases          | First Module Version |
| ----------------------------------- | -------------------------------------- | ------------------------------- | -------------------- |
| `@minecraft/common`                 | `77ec12b4-1b2b-4c98-8d34-d1cd63f849d5` |                                 | `Engine 1.20.40`     |
| `@minecraft/debug-utilities`        | `1796ea86-0daf-4409-99ee-fd6467cf1203` |                                 | `Engine 1.20.70`     |
| `@minecraft/server`                 | `b26a4d4c-afdf-4690-88f8-931846312678` | `Minecraft`, `mojang-minecraft` | `Engine 1.16.210`    |
| `@minecraft/server-ui`              | `2bd50a27-ab5f-4f40-a596-3641627c635e` | `mojang-minecraft-ui`           | `Engine 1.18.20`     |
| `@minecraft/server-gametest`        | `6f4b6893-1bb6-42fd-b458-7fa3d0c89616` | `GameTest`, `mojang-gametest`   | `Engine 1.16.210`    |
| `@minecraft/server-net`             | `777b1798-13a6-401c-9cba-0cf17e31a81b` | `mojang-net`                    | `Engine 1.19.10`     |
| `@minecraft/server-admin`           | `53d7f2bf-bf9c-49c4-ad1f-7c803d947920` | `mojang-minecraft-server-admin` | `Engine 1.19.10`     |
| `@minecraft/server-editor-bindings` | `8518d9c7-a1f5-4bf3-acc7-78e87df595fc` |                                 | `Engine 1.19.80`     |
| `@minecraft/server-editor`          | `1d565354-296d-11ed-a261-0242ac120002` |                                 | `Engine 1.19.80`     |

## Module Descriptions

### `@minecraft/common`

Has few stable releases, this module can be imported without being mentioned in dependencies. It is a module with basic sources such as error classes or interfaces.

### `@minecraft/debug-utilities`

An experimental module. This module provides debugging tools but should not be used in the public release of the addon.

### `@minecraft/server`

Has a lot of stable releases, but is still being actively developed. The cornerstone for addons scripting on the server side, it is intended for interaction between the script engine and your world, such as blocks, entities, items, players, and other world resources.

### `@minecraft/server-ui`

A somewhat smaller module, but very useful for the interaction between the server and the end user of your package. This is a module that provides the possibility of sending data to the player through customizable forms.

### `@minecraft/server-gametest`

This is the oldest module that currently exists, yet there is not a single stable version of this module. This module is used to test vanilla experiments, for compatibility with other custom content, catching edge cases, or making sure repeatability is possible. This module is not intended for content creators and there is no need to guarantee backward compatibility with stable versions.

### `@minecraft/server-net`

This is a module that is only allowed on [Bedrock Dedicated Servers](https://www.minecraft.net/en-us/download/server/bedrock) because it could threaten the safety of the user of common addon packages. This is a module has access to the internet through web requests such as GET, SET, POST and others. This module exists only in experimental form.

### `@minecraft/server-admin`

This module is also only allowed on [Bedrock Dedicated Servers](https://www.minecraft.net/en-us/download/server/bedrock). this module is responsible for processing basic data stored in JSON admin files, which is intended for setting the behavior of a pack without interfering with the original pack. This module exists only in experimental form.

### `@minecraft/server-editor-bindings`

This is a special set of native functions for the editor module, this module is undocumented and should not be used by creators, however this module can be imported if you reference it in dependencies but it can only be used in worlds that are created as editor projects.

### `@minecraft/server-editor`

This module is exceptional because its implementation is not native but it is a JS module, although it is implemented in JS so its existence is hardcoded, it can be referenced in dependencies but it can only be used in worlds that are created as editor projects.

## Alpha Versions

Alpha version is an outdated version of modules, this version should not be used in current addons and is marked as experimental, only two modules have this alpha version, `@minecraft/server` then known as `mojang-minecraft` and `@minecraft/server` -gametest`then known as`mojang-gametest`. If you want to try to use this version, keep in mind that they should only be imported under these names.

### Alpha 2.X

Now you can also notice the new alpha `2.X` series, but this is different from the original alpha version, but it is also an experimental version, but it can easily be imported under the names known today, keep in mind that this version breaks compatibility with the previous serial `1.X` .

## Module Referencing

Module referencing is required for ability to import module in your JS code.

::: warning
Do not use both `"uuid"` and `"module_name"` properties into dependency, pick one or the other.
:::

Example for `@minecraft/server` with version of `1.13.0`.

<CodeHeader>BP/manifest.json#dependencies[0]</CodeHeader>

```json
{
    "module_name": "@minecraft/server",
    "version": "1.13.0"
}
```

Required capability to mark your pack as Editor Extension, in that case editor modules are allowed.

<CodeHeader>BP/manifest.json</CodeHeader>

```json
{
    "capabilities": ["editorExtension"]
}
```
