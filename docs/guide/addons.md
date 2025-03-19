---
title: Add-Ons Explained
category: Guide
description: The basics of Add-Ons
nav_order: 2
prefix: "2. "
mentions:
    - SirLich
    - Dreamedc2015
    - sermah
    - cda94581
    - RedSmarty
    - TheItsNameless
    - MedicalJewel105
    - ChibiMango
    - profeplaysminecraft
    - retr0cube
    - SmokeyStack
    - QuazChick
---

## What are add-ons?

Add-ons allow us to modify the contents of our Minecraft Experience by _modifying_ or _removing_ existing content and _adding_ our own. Add-ons are very powerful and allow us to create custom entities, items, and blocks, as well as things like custom loot tables and crafting recipes. Your imagination is the limit!

Add-ons are primarily written in [json](/guide/understanding-json), which is a structured data-format. An add-on is essentially a collection of json files, images, and sounds, which modify or add to the game in some way.

:::tip Javascripting
Since this guide was written, the definition of 'Add-On' has expanded to include the Javascript scripting API. You can learn more about this API elsewhere on this site.
:::

## What's the difference between a Behavior Pack & a Resource Pack?

Add-ons are split into two pack types: Resource Packs, and Behavior Packs. Both can function independently, but they are most commonly used together. When you have both a Resource Pack and Behavior Pack, this is referred to as an _add-on_.

### Resource Pack

The Resource Pack, also known as the _client_, or RP, is responsible for the _visuals_ and _sounds_ in your add-on. This includes things like:

-   Textures
-   Sounds
-   Geometry
-   Animations
-   Particles

### Behavior Pack

The Behavior Pack, also known as the _server_, or BP, is responsible for the _logic_ of your add-on. This can include things like:

-   How your entity acts
-   Crafting recipes
-   Loot tables
-   Custom functions

### Communication between packs

In most cases, you will have both a RP and a BP together. These packs can communicate with or will require each other for them to function properly, in the sense that assets defined in one can be accessed in the other. For example, when creating a custom entity, you need two files:

-   An RP entity definition, which describes how your entity will _look_
-   A BP entity definition, which describes how your entity will _act_

## Next

:::tip What you have learned

-   [x] Add-ons modify Minecraft content or add their own
-   [x] Add-ons are mostly written in JSON
-   [x] An add-on is split into the **Resource Pack** and the **Behavior Pack**:
    -   Resource Packs contain textures, sounds, … and control how the game looks
    -   Behavior Packs contain entity behavior, crafting recipes, … and control the logic of your game

:::

<Button link="/guide/software-preparation">Next: Software & Preparation</Button>
