---
title: Addons Explained
category: Guide
nav_order: 2
prefix: '2. '
---

## What are addons?

Addons allow us to modify the contents of our Minecraft Experience by _modifying_ or _removing_ existing content and _adding_ our own. Addons are very powerful and allow us to create custom entities, items, and blocks, as well as things like custom loot tables and crafting recipes. Your imagination is the limit!

Addons are primarily written in [json](./understanding-json), which is a structured data-format. An addon is essentially a collection of json files, images, and sounds, which modify or add to the game in some way.

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

In most cases, you will have both a RP and a BP together. These packs can communicate with each other, in the sense that assets defined in one can be accessed in the other. For example, when creating a custom entity, you need two files:

-   An RP entity definition, which describes how your entity will _look_
-   A BP entity definition, which describes how your entity will _act_

## What you have learned

:::tip What you have learned:

-   Addons modify Minecraft content or add their own
-   Addons are written in json
-   An addon is split into the **Resource Pack** and the **Behavior Pack**: - Resource Packs contain Textures, Sounds, ... and control how the game looks - Behavior Packs contain entity-files, crafting recipes, ... and control the logic of your game
:::
