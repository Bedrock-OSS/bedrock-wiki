---
title: Addons Explained
nav_order: 2
prefix: '2.'
---

## What are addons?

Addons allow us to modify the contents of our Minecraft Experience by _modifying_ or _removing_ existing content and _adding_ our own. Addons are very powerful and allow us create custom entities, items, and blocks, as well as things like custom loot tables and crafting recipes. Your imagination is the limit!

Addons are primarily written in [json](/guide/understanding-json), which is a structured data-format. An addon is essentially a collection of json files, images, and sounds, which modify or add to the game in some way.

## Behavior Pack Vs. Resource Pack

Addons are split into two pack types: Resource Packs, and Behavior Packs. Both can function independently, but they are most commonly used together. When you have both a Resource Pack and Behavior Pack, this is referred to as an _addon_.

### Resource Pack

The Resource Pack, also known as the _client_, or RP, is responsible for the _visuals_ and _sounds_ in your addon. This includes things like:

-   Textures
-   Sounds
-   Geometry
-   Animations
-   Particles

### Behavior Pack

The Behavior Pack, also known as the _server_, or BP, is responsible for the _logic_ of your addon. This can include things like:

-   How your entity acts
-   Crafting recipes
-   Loot tables
-   Custom functions

### Communication between packs

In most cases, you will have both an BP and a BP together. These packs can communicate with each other, in the sense that assets defined in one can be accessed in the other. For example, when creating a custom entity, you need two files:

-   An RP entity definition, which describes how your entity will _look_
-   A BP entity definition, which describes how your entity will _act_

## The com.mojang folder

The `com.mojang` folder is a special folder where we build our addons. Minecraft understand this location, and addon-files placed here will appear in-game. All files we access or create will be placed somewhere in this folder.

You should create a shortcut to the `com.mojang` folder on your Desktop, so you can easily access it at any time.

### Windows

`C:\Users\USERNAME\AppData\Local\Packages\Microsoft.MinecraftUWP_8wekyb3d8bbwe\LocalState\games\com.mojang`

### Android

`Phone>games>com.mojang`

### iOS

`My iDevice>Minecraft>games>com.mojang`

### Development Packs

We will develop our addon in `development_behavior_packs` and `development_resource_packs`. When you make changes within these folders, you can _exit and re-enter a world with the packs applied_, to automatically reload the content. This allows you to quickly test your addon without reloading minecraft.

`resource_packs` and `behavior_packs` on the other hand contain stable addons, including those imported via `.mcpack`. We can ignore these folders for now.
