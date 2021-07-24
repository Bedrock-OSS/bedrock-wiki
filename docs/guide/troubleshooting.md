---
title: Troubleshooting
prefix: 'c.'
nav_order: 102
---

Creating Addons for Minecraft is a relatively straightforward process _once you get the hang of it_. The first time is usually a complicated, bug-prone process. This document contains some tips and tricks for fixing those dastardly bugs, as well as best practice information.

## General Troubleshooting Tips

### Reload

Reload MC. Just do it.

### The Environment

The best way to prevent nasty bugs is by working in the right environment. You should review [the software preparation document](/guide/software-preparation) for editor recommendations. The most important part is getting a JSON-linter, ([or using an online json-linter](https://jsonlint.com/)).

### Content Log

The next thing you should do is turn on your content log. This can be done like: `Settings > Profile > Enable Content Log GUI`. Then press `ctrl+h` in-game to see any errors or output that might pop up. Errors in the content log will show up every time you open the world and also during gameplay if more errors occur.

::: tip
Errors are not cleared between runs, so the errors you see in the content log may be _old_ errors from prior runs.
:::

#### Content log file

The content log is saved in `.txt` format at: `C:\Users\YOUR_USERNAME\AppData\Local\Packages\Microsoft.MinecraftUWP_8wekyb3d8bbwe\LocalState\logs`

### Using Vanilla Resources

You should download the vanilla resource and behavior pack. You can find [the vanilla resource and behavior pack here](https://www.minecraft.net/en-us/addons/). You can compare against the vanilla files if you have any issues.

### JSON-Schemas

JSON-Schemas are a valuable tool for file validation. You can learn more about [JSON-Schemas here](/meta/using-schemas).

## Entities

<BButton link="/entities/troubleshooting-entities"> Troubleshoot your entities.</BButton>

## Items

<BButton link="/items/troubleshooting-items"> Troubleshoot your items.</BButton>

## Blocks

<BButton link="/blocks/troubleshooting-blocks"> Troubleshoot your blocks.</BButton>
