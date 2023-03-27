---
title: What is Script API?
category: General
tags:
    - experimental
mentions:
    - ConsoleTerm
---

::: warning
The Script API is currently in active development, and breaking changes are frequent. This page assumes the format of Minecraft beta 1.19.70
:::

## API
API is stands for (Application Programming Interface), it is a kind of establishing contacts between two applications, the term application contains a lot more than you might imagine under the term application, it can be a simple script or a game or an entire operating system.

The API that you encounter the most is right in front of you, and that API is between the application and your operating system, for example with the cursor on the screen, why is it related to the API? Because your application can find out through the API where the cursor is on the screen without having to implement its own cursor, this means that Minecraft also uses a lot of Wrappers and they then use the API system directly so that we can see the application.

Summary: An API is a kind of mutual or one-sided interaction between two or more Applications!

## Script API

Maybe you have already heard Script API somewhere, it is important to know what is hidden under this name.

A lot of people imagine different things like Codes, Scripts, Programming Languages, (`Mysterious Experiments in Minecraft? :]` ), but in reality it is only an API. APIs are a set of functions that allow us to interact with Minecraft as such. We can receive events, read blocks, entities, create particles, and more! This API is also well documented in [official web site](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/minecraft-server)!

## API Modules?

The API is divided into other sub-modules according to functionality, some API functions may not be so safe for basic users, so they are only allowed on servers or they cannot work on some devices, for that we have different packages of API functions that we can call Modules.

Modules should be named after the functionality they contain.

[Original Credits](https://github.com/JaylyDev/ScriptAPI/tree/main/docs/MinecraftApi#readme) - Written by [ConMaster2112](https://github.com/ConsoleTerm)