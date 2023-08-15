---
title: What is Script API?
category: General
tags:
    - experimental
mentions:
    - ConsoleTerm
    - Herobrine643928
    - JaylyDev
    - SmokeyStack
    - ThomasOrs
    - gdm3
---

::: warning
The Script API is currently in active development, and breaking changes are frequent. This page assumes the format of Minecraft 1.19.80
:::

## API
API stands for (Application Programming Interface), and it is a way of establishing contacts between two applications. The term application contains a lot more than you might imagine. An application can be a simple script, a game, or an entire operating system.

An example of an API that you encounter all the time is right in front of you, and that API is between the application and your operating system. It is the cursor on the screen. Why is that related to an API? Because applications can find out through an API that your operating system provides where the cursor is on the screen without having to implement their own cursors. This allows a program such as Minecraft to use the API system so that we can see the application.

Summary: An API is a kind of mutual or one-sided interaction between two or more applications!

## Script API

Maybe you have already heard the term "Script API" somewhere. It is important to know what is hidden under this name.

When hearing this term, a lot of people imagine different things such as programs, scripts, or even programming languages, (`Mysterious Experiments in Minecraft? :]` ), but in reality, it is only an API. APIs are a set of functions that allow us to interact with Minecraft as such. We can receive events, read blocks, modify entities, create particles, and more! This API is also well documented on the [official web site](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/minecraft-server)!

## API Modules?

The API is divided into other sub-modules according to functionality. Some API functions may not be so safe for basic users, so they are only allowed on servers or they cannot work on some devices. For that we have different packages of API functions that we call Modules.

Modules should be named after the functionality they contain.

[Original Credits](https://github.com/JaylyDev/ScriptAPI/tree/main/docs/MinecraftApi#readme) - Written by [ConMaster2112](https://github.com/ConsoleTerm)
