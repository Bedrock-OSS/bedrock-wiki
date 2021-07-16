---
title: Addons Explained
nav_order: 2
number: '2.'
---

## What are addons?

Addons allow us to modify the contents of our Minecraft Experience by _modifying_ or _removing_ existing content and _adding_ our own. Addons are very powerful and allow us create custom entities, items, and blocks, as well as things like custom loot tables and crafting recipes. Your imagination is the limit!

Addons are written in [json](/guide/understanding-json), and an addon is essentially just a collection of json config-files, which modify or add to the game in some way.

## Behavior Pack Vs. Resource Pack

Addons are split into two pack types: Resource Packs, and Behavior Packs. Both can function independently, but they are most commonly used together. When you have both a Resource Pack and Behavior Pack, this is referred to as an _addon_.

### Resource Pack

The Resource Pack, also known as the _client_, is responsible for the _visuals_ and _sounds_ in your addon. This can include things like:

-   Textures
-   Sounds
-   Geometry
-   Animations

### Behavior Pack

The Behavior Pack, also known as the _server_, is responsible for the _logic_ of your addon. This can include things like:

-   How your entity acts
-   Crafting recipes
-   Loot tables
-   Custom functions
