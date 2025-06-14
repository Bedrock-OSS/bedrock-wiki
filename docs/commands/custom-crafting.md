---
title: Custom Crafter
category: Useful Creations
tags:
    - easy
mentions:
    - TwigYT
    - zheaEvyline
description: Command to simulate a crafting table using droppers.
---

## Introduction

In this guide, you will learn how to simulate a crafting table using droppers to essentially create a "custom crafting" system with only one command! Some use cases include: A way to craft weapons with enchantments or a custom name for a server or an adventure map.

Note: The position of the custom crafter in this guide is fixed. For a more dynamic approach which allows you to place it anywhere in the world, you may check out @CrunchyCookie's video on [Custom Crafting](https://www.youtube.com/watch?v=pzQzldaSORs) on YouTube.

:::tip
To create custom crafting recipes that use the crafting table, see this wiki page [here](../loot/recipes).
:::

## Setup

For this system, you will require two droppers per custom recipe item you want to add:

1. Dropper containing the Recipe.
2. Dropper containing the Recipe Output.

Example:
<WikiImage
    src="/assets/images/commands/custom-crafter/recipe.png"
    alt="Custom Recipe"
    width="200"
    pixelated
/> <WikiImage
    src="/assets/images/commands/custom-crafter/recipe-output.png"
    alt="Custom Recipe Output"
    width="200"
    pixelated
/>

These two droppers are normally placed near your command blocks, or in a place which cannot be accessed by players other than operators.

To complete the setup, place down one final dropper where you want players to be able to perform custom crafting. This will be used as your custom **crafter**.

## System

<CodeHeader>BP/functions/wiki/custom_crafting.mcfunction</CodeHeader>

```yaml
## If Recipe Matches Crafter: Clone Recipe Output to Crafter
execute if blocks <recipe> <recipe> <crafter> masked run clone <recipe_output> <recipe_output> <crafter>
```
![One repeating Command Block](/assets/images/commands/command-block-chain/1.png)

**Definitions:**
- `<crafter>` — input (x,y,z) coordinates for the dropper that will be used as the **crafter**.
- `<recipe>` — input (x,y,z) coordinates for the dropper which contains your **recipe**.
- `<recipe_output>` — input (x,y,z) coordinates for the dropper which contains the **output** for your recipe.

For convenience, you may download the .mcstructure sample shared by @TwigYT:

<Button link="/assets/packs/structures/customCrafter/customCrafterExample.mcstructure" download>
    Download Sample MCSTRUCTURE
</Button>

<WikiImage
    src="/assets/images/commands/custom-crafter/completed-setup.png"
    alt="Completed Setup"
    width=800
/>

> Note: After importing the structure using a structure block, you will still need to replace the values in the command blocks as defined above.

## Tips

You may add a playsound command to slightly enhance the crafting experience like so:

<CodeHeader>BP/functions/wiki/custom_crafting.mcfunction</CodeHeader>

```yaml
## If Recipe Matches Crafter: Play Sound Upon Crafting (optional)
execute if blocks <recipe> <recipe> <crafter> masked positioned <crafter> run playsound smithing_table.use @a[r=7]
## If Recipe Matches Crafter: Clone Recipe Output to Crafter
execute if blocks <recipe> <recipe> <crafter> masked run clone <recipe_out> <recipe_output> <crafter>
```
![commandChain of Two Command Blocks](/assets/images/commands/command-block-chain/2.png)

To take it a step further, you may also use [MBE](/commands/block-entities) or [Fox MBE](/commands/display-entities) to give the dropper the texture of a crafting table or a smithing table as an overlay.
