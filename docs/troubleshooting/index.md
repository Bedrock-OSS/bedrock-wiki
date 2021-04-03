---
layout: page
title: Troubleshooting
has_children: true
---

# Troubleshooting



Creating Addons for Minecraft is a fairly easy process *once you get a hang of it*. The first time is usually a difficult, bug-prone process. This document contains some tips and tricks for fixing those dastardly bugs, as well as best practice information.

## The Environment

The best way to prevent *invisible entity syndrome* and other nasty bugs is by setting yourself the correct environment. You should review [the software preparation document](/knowledge/software-preparation) for my editor recommendations. The most important part is getting a json-linter, ([or using an online json-linter](https://jsonlint.com/)).

## Content Log

The next thing you should do is turn on your content log. This can be done like: `Settings > Profile > Enable Content Log GUI`. Then press `ctrl+h` in-game to see any errors or output that might pop-up. Errors in the content log will show up every time you open the world, and also during gameplay if more errors occur.

<Panel type="info">Errors are not cleared between runs, so it is possible the errors you see in the content log are <i>old</i> errors, from prior runs.</Panel>

### Content log file

The content log is saved in `.txt` format at: `C:\Users\YOUR_USERNAME\AppData\Local\Packages\Microsoft.MinecraftUWP_8wekyb3d8bbwe\LocalState\logs`

## Using Vanilla Resources

You should download the vanilla resource and behavior pack. You can find [the vanilla resource and behavior pack here](https://www.minecraft.net/en-us/addons/). You can compare against the vanilla files if you have any issues.

## JSON-Schemas

JSON-Schemas are a valuable tool for file validation. You can learn more about [JSON-Schemas here](/knowledge/using-schemas).

## Reload

Reload MC. Just do it.
