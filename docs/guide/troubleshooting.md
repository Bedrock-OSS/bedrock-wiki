---
title: Troubleshooting
category: Extra
prefix: 'c. '
nav_order: 3
tags:
    - help
---

Creating Addons for Bedrock Minecraft is a relatively straightforward process _once you get the hang of it_. The first time is usually a frustrating, bug-prone process. This document contains some tips and tricks for fixing those dastardly bugs, as well as best practice information.

Please read the whole page, before jumping into troubleshooting tips for a specific domain.

## Reload

First, you should always reload Minecraft. That means fully closing the game and then reopening it. This can catch many errors, especially those related to assets that are accessed via a filepath, such as textures or loot tables.

## The Environment

The best way to prevent nasty bugs is by working in the right environment. You should review the [software preparation document](/guide/software-preparation) for editor recommendations. The most important part is getting a JSON-linter, ([or using an online json-linter](https://jsonlint.com/)), and storing your packs in `development_behavior_packs` and `development_resource_packs`.

If you have your addons in the normal folders, you can run into "pack caching" issues, where you edit the files in one location, but the game is still using the old files.

## Content Log

:::warning Use the Content Log!
Content log is the best tool you have for debugging your addons. Please don't skip this step!
:::

::: tip
Errors are not cleared between runs, so the errors you see in the content log may be _old_ errors from prior runs.
:::

The 'Content Log' is a list of issues found in your pack. Minecraft will generate this list every time your load your world. It can catch issues such as:
 - Wrong texture path
 - Wrong spelled component
 - Incorrect json structure

Content log can be turned on in in `Settings > Creator`. The content log will show in-game on load up, and if more errors occur during gameplay.

![](/assets/images/guide/content_log.png)


### Content Log File

The content log is saved in `.txt` format inside your files:

 - *Windows*: `C:\Users\USERNAME\AppData\Local\Packages\Microsoft.MinecraftUWP_8wekyb3d8bbwe\LocalState\logs`
 - *Android:* `/storage/emulated/0/Android/data/com.mojang.minecraftpe/files/games/com.mojang/logs`


## Using Vanilla Resources

You should download the vanilla resource and behavior pack. You can find the vanilla resource and behavior pack [here](https://www.minecraft.net/en-us/addons/). You can compare against the vanilla files if you have any issues!

## JSON-Schemas

JSON-Schemas are a valuable tool for file validation. You can learn more about JSON-Schemas [here](/meta/using-schemas).

# Troubleshooting your addon!

## Entities

<BButton link="/entities/troubleshooting-entities"> Troubleshoot your entities.</BButton>

## Items

<BButton link="/items/troubleshooting-items"> Troubleshoot your items.</BButton>

## Blocks

<BButton link="/blocks/troubleshooting-blocks"> Troubleshoot your blocks.</BButton>
