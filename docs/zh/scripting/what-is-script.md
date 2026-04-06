---
title: 什么是脚本 API？
category: 通用
nav_order: 2
mentions:
    - conmaster2112
    - Herobrine643928
    - JaylyDev
    - SmokeyStack
    - ThomasOrs
    - gdm3
description: 脚本到底是什么鬼？
---

::: warning
脚本 API 目前正在积极开发中，突破性更改很频繁。本页假设 Minecraft 1.21.20 的格式
:::

## API

API 代表（应用程序编程接口），它是建立两个应用程序之间联系的方式。应用程序这个词包含的内容比你想象的要多得多。一个应用程序可以是一个简单的脚本、一个游戏，甚至一个操作系统。

你随时遇到的 API 示例就在你面前，那就是应用程序和操作系统之间的 API。那是屏幕上的光标。这与 API 有什么关系？因为应用程序可以通过操作系统提供的 API 找出光标在屏幕上的位置，而无需实现自己的光标。这允许像 Minecraft 这样的程序使用 API 系统，以便我们可以看到应用程序。

总结：API 是两个或多个应用程序之间的一种相互或单向交互！

## 脚本 API

你可能已经在某个地方听到过 "脚本 API" 这个术语。知道这个名字下面隐藏的是什么很重要。

当听到这个术语时，很多人会想象不同的事物，比如程序、脚本，甚至编程语言，（`Minecraft 中的神秘实验？:]`），但实际上，它只是一个 API。API 是一组允许我们与 Minecraft 交互的函数。我们可以接收事件、读取方块、修改实体、创建粒子等等！这个 API 也在[官方网站](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/minecraft-server)上有很好的文档！

## API 模块？

API 根据功能分为其他子模块。某些 API 函数对于基本用户来说可能不太安全，因此它们只允许在服务器上使用，或者它们无法在某些设备上工作。为此，我们有不同的 API 函数包，我们称之为模块。

模块应该以它们包含的功能命名。

[原始来源](https://github.com/JaylyDev/ScriptAPI/tree/main/docs/MinecraftApi#readme) - 由 [ConMaster2112](https://github.com/conmaster2112) 编写