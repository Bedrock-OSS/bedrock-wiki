---
layout: guide
title: Beginners Guide
has_children: true
sitemap:
    priority: 0.73
    changefreq: 'weekly'
---

# Beginners Guide

## **What is this guide?**
This guide is a beginner tutorial, created to make it possible for more people to start 'modding' Minecraft Bedrock Edition. The guide is intended to be followed step by step, and will guide you from the very fundamentals, to being able to create advanced packs yourself.

## **What exactly are Add-ons?**
An addon is basically the Minecraft Bedrock Edition (*Windows 10, iOS, Android, Console*) equivalent to Java mods. However, in contrast to Java, the Bedrock Edition API is officially maintained by Mojang itself, instead of the community. 

In general, you can think of *mods* as *modifying* the game, and *addons* as *adding-onto* the game, following the development opportunities provided by Microsoft.

## **What do I need in order to create Add-ons?**
This guide be focused on creating addons on a Windows 10 PC for any Bedrock platform. However, the process is much the same when working on Android or iOS, although it is significantly more difficult. If something works differently on a mobile device, a note will state that.

## Is the guide up to date?
This guide is written for the most-recent *stable* release of Minecraft Bedrock Edition. Many things won't work in previous versions, and some will be changed in later ones. We will keep the guide as up-to-date is possible, so no need to worry.


# Table of Contents

## Software Preparation
Let's start by setting up your tools, which you will use throughout the development of your addons. This section will cover exactly what **software** is needed, where to **set up** your addons, how to create a **workspace** where you can create your addons.

[Software Preparation](/guide/software-preparation.html){: .btn .btn-green }

## Project Setup
You will make your first steps in creating an addon here, by learning to create **manifests** and **pack_icons** (a.k.a initializing an addon), as well as learn to use some of the `.mc` file extensions. No previous coding experience required. After you'll create a testing World where you'll be able to test the first feature of your addon - a custom **/function**. We'll also learn about **transpiling Add-ons** and other **`.mc` file extensions**.

[Getting Started](/guide/project-setup.html){: .btn .btn-green }

## Create Items
Now it's time to begin writing the first features of you addon. In this section you'll create a **simple** "Gem" **item**, and a **custom food**, as well as learn to link textures via **short names**.

[Custom Items](/guide/custom-items.html){: .btn .btn-green }

## Creating Blocks
Next up are **custom blocks**. You'll create a **simple block**, an **animated block** with a flipbook texture, a "Compass" block that has different textures for every direction and a block that imitates a Log.

[Custom Blocks](/guide/custom-blocks.html){: .btn .btn-green }

## Loot tables, recipes, and spawn rules

Since you can now easily create custom blocks and items, it's time to learn about their custom **Loot Tables** and **Recipes**. While we're about it, we'll take a short look on entity **Spawn Rules** too.

[Loot tables & Spawn Rules](/guide/loot_tables-recipes-spawn_rules.html){: .btn .btn-green }

Now we're finally ready to create... **Custom Entities**. Make sure to polish your existing knowledge a bit before starting this chapter, as it will be a bit more complicated. First, we'll be using Blockbench to create the visuals, and then we'll define the Behaviors!

## Creating Entities
[Creating entity visuals in Blockbench: Modelling, Texturing, Animating](/guide/creating-entity-visuals.html){: .btn .btn-green }

[Custom entity full Resource and Behavior definition: Attributes, Components](/guide/custom-entity-full.html){: .btn .btn-green }

[Custom trades & Trade Tables](/guide/custom_trades.html){: .btn .btn-green }

[Render controllers & Entity Texture Variations](/guide/render-controllers.html){: .btn .btn-green }

[Animation Controllers - Attack AI, Behavior animations - Entity Commands](/guide/animation-controllers.html){: .btn .btn-green }

## Creating Particles

The next sub-chapter: Here you'll create **custom particles** and sounds and learn to trigger them via animations are auto triggers.

[Custom Particles, Particles in Animation, Custom Sounds Definition](/guide/custom-particles.html){: .btn .btn-green }

## World Generation
Let's move to something way different now: **World generation**!

[Custom Generation: Biomes, Features, Feature Rules](/guide/custom-generation.html){: .btn .btn-green }

## Skin Packs
And, something way different from everything we've done before: the creation of **custom Skin packs**!

[Custom Skin Packs](/guide/custom-skin-packs.html){: .btn .btn-green }


<!--Insited to keep-->

<details> 

  <summary>

    Timeline

  </summary>

- 13.04.2020: The guide has been originally written and published by *KaiFireborn*#1551 on Discord [here](https://sites.google.com/view/mcbe-addon-tutorial/-?authuser=0).
 - 04.05.2020: Accessible by the domain/link [`guide.bedrock.dev`](https://guide.bedrock.dev) thanks to *destruc7i0n*.
 - 09.23.2020: Migration/porting of the Guide to the Wiki agreed upon and started with *SirLich*. Maintanence of the original website discountinued.
 - 18.10.2020: Migration officially finished mostly thanks to *ckhrysze* and *KaiFireborn*. Currently, the Guide is fully OSS and accepting contributions from *you*.
 - 27/03/2021: The wiki, including the guide, has been migrated to the Bedrock OSS Github Organization.

</details>

___
