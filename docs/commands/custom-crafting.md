---
title: Custom Crafter
description: How to make a mock custom crafting systom with commands
category: Guides
tags: [easy, guide]
---

## Introduction

This is a guide on how to make a custom crafting systom with jest two command blocks. Some use cases could be a way to "craft" tools or weapons with a custom name and enchantments for a server or for a adventure map.

_**This systom was originally created by CrunchyCookie. All credit for this systom goes to him. You can find his video [here](https://www.youtube.com/watch?v=pzQzldaSORs).**_

:::warning
This is not an actual way to make custom crafting recipes. This is a creative and roundabout way to make custom crafting using the clone command and droppers. For custom crafting recipes that use the crafting table, [see this wiki page](../loot/recipes).
:::

## System

:::info Note
Every time we use the word `<crafter>`, we imply the coordinates of the dropper that is uesd as a crafter. If you see the word `<crafterX>`, `<crafterY>`, or `<crafterZ>` we imply the X.Y.Z coordinates of your dropper.
:::

1. Place a dropper facing down. This will be used to impersonate the vanilla crafter and will be refer to in the rest of this page as "crafter".
2. Place a repeating command block sideways and paste this command in: `execute if blocks ~ ~1 ~ ~ ~1 ~ <crafter> masked run playsound random.orb @a[x=<crafterX>, y=<crafterY>, z=<crafterZ>, r=6]`
3. Place a chain command block in front of the repeating command block and set it to conditional. Then paste this command in: `clone ~ ~1 ~ ~ ~1 ~ <crafter>`
4. Place 2 droppers above the command blocks facing down. Fill the dropper above the repeating command block with the custom recipe you've made. Then fill the second dropper with the crafted item. (Tip: place the crafted item in the middle slot in the second dropper. Makes it look nice.)

At the end of this you should have some thing like this:

<WikiImage
    src="/assets/images/commands/customCrafterEnd.png"
    alt="alternative text"
    width=800
/>

## Explanation

Command 1: `execute if blocks ~ ~1 ~ ~ ~1 ~ <crafter> masked run playsound random.orb @a[x=<crafterX>, y=<crafterY>, z=<crafterZ>, r=6]`

Every single in game tick the repeating command block is checking if the dropper one block above it has the same state and content as the dropper the player interacts with. If the 2 blocks are the same, the playsound command is run and we move on to the next commmand block.

Command 2: `clone ~ ~1 ~ ~ ~1 ~ <crafter>`

Because this command block is conditional, it won't activate until the command block behind it succeeds. When this command block activate it runs a clone command that clones the block that is one block above it to the position of the other dropper.

Here is an example structure:

<Button link="/assets/packs/structures/customCrafter/customCrafterExample.mcstructure" download>
    Download MCSTRUCTURE
</Button>

:::info Note
You still have to replace the `<crafter>` in the commands with the coordinates of the input dropper that the player will be interacting with.
:::
