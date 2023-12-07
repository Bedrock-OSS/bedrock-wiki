---
title: Format Versions
category: Extra
description: How to work with Format Versions
prefix: 'e. '
nav_order: 5
mentions:
    - SirLich
    - SmokeyStack
    - ThomasOrs
---

Format versions are an important part of Minecraft: Bedrock Edition's Addon System. They appear at the top of most files, formatted like this: `"format_version": "1.16.100"`. You can think of this as the "version number" of the file, and the number you select here is really important! The format version you select will define which syntax and features are available to you, in that particular file.

:::tip
Selecting the wrong format version is a common source of errors. When troubleshooting, people may ask you questions like 'what format version is your item'. Ensure that you know how to answer that question.
:::

## Why do format versions exist?

Format versions exist to *version* the Addon system, and allow Minecraft to introduce new features into the addon system, without breaking old Addons. For example, a `1.8.0` format version RP Entity file has very different syntax than a `1.10.0` format version RP Entity file. By using the 'format_version' key in the json *you* can decide which version you want to use.

By using format versions *per file*, Minecraft gives you a lot of control over how your addon will be interpreted by the game. It is completely possible and expected to mix different format versions in your addon.

## Experimental Format Versions

Format versions are also used for the purpose of versioning experimental features. Since Minecraft releases bedrock experiments directly into stable, some format versions will be 'locked' under experimental, unless you toggle the correct experiment.

A well known example is the item/blocks system, where `1.16.100` denotes experimental, and `1.10.0` denotes stable. If you want to make an item, it's important to select a format version early, as it will effect everything else you add to the files. If you are going with an experimental format version for your item/block you may want to go higher than `1.16.100` because some experimental features won't work properly in that format version, for example if you are making a custom spawn egg and you want it to be able to set the entity type of a monster spawner, then you need to the format version to `1.19.80` or higher. 

## Format Version is not Game Version

It is really important to understand that format version is *per subsystem*, and is generally not equal to the base game version. This simply means that every type of file (item, rp entity, bp entity, recipe) will use a different versioning system.

For example: `"format_version": "1.8.0"` in an RP entity file means "use version `1.8.0` of the *item system*". It does *not* mean "use version `1.8.0` of the *addon system*".

For this reason, some file types will have very "old" format versions. Do not be tempted to replace this version with the latest game version, such as `1.17.0`.

## Format Version Fixing

Minecraft has a system that will "fix" your format version if you've written it wrong. This system isn't well understood, isn't enabled for all systems, and shouldn't be relied upon. But it's important to note that an incorrect format version will often "regress" downwards until it hits a valid format version. For example a `1.11.0` RP entity file will simply be interpreted as `1.10.0`, and cause no errors.

This system is useful, as it means you are less likely to generate a broken file, by selecting the wrong format version.

## Picking a Format Version

Generally speaking, there is a cool tricky to pick the correct format version, for any file type.

For example, imagine you are creating a Recipe file:

 1) Install the [Vanilla Packs](/guide/download-packs).
 2) Look at some recipe files, to judge which format version is most used, or the most recent
 3) Use this format version in your file

This simple trick will help you select a valid format version for your file.

## Format Versions per Asset Type

This section will list the format versions used in the vanilla game, alongside how many times it appears.

    - The '⭐' is the recommended *stable* version.
    - The '🚀' is the recommended *experimental* version, where applicable.

### Resource Pack

**Entity**:
    - `1.10.0` : 82 ⭐
    - `1.8.0` : 74

**Animation Controller**:
    - `1.10.0` : 56 ⭐

**Animation**:
    - `1.8.0` : 120
    - `1.10.0` : 6 ⭐

**Attachables**:
    - `1.10.0` : 29 ⭐
    - `1.8.0` : 25
    - `1.10` : 1

**Models**:
    - `1.8.0` : 92
    - `1.12.0` : 19
    - `1.10.0` : 4
    - `1.16.0` : 7

**Particles**:
    - `1.10.0` : 131 ⭐

**Render Controllers**:
    - `1.10.0`: 83 ⭐

### Behavior Pack

**Entities**:
    - `1.8.0` : 2
    - `1.16.210` : 1
    - `1.13.0` : 7
    - `1.16.0` : 58 ⭐
    - `1.16.100` : 3
    - `1.12.0` : 21
    - `1.17.20` : 7
    - `1.17.10` : 4
    - `1.10.0` : 1
    - `1.14.0` : 1

**Items**:
    - `1.10` : 44 ⭐
    - `1.16.0` : 1
    - `1.16` : 1
    - `1.14` : 1
    - `1.16.100`: 0 🚀
    - `1.19.80`: 0
    - `1.20.40`: 0

**Recipes**:
    - `1.12` : 991
    - `1.16` : 194 ⭐
    - `1.14` : 2

**Spawn Rules**:
    - `1.8.0` : 48 ⭐
    - `1.17.0` : 1
    - `1.11.0` : 1
