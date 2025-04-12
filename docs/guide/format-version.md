---
title: Format Versions
description: Learn what format versions are and how to choose the right one for each of your files.
category: Extra
prefix: "e. "
nav_order: 5
mentions:
    - SirLich
    - SmokeyStack
    - ThomasOrs
    - Xterionix
    - QuazChick
---

Format versions are an important part of Minecraft: Bedrock Edition's add-on system. They appear at the top of most files, formatted like this: `"format_version": "1.21.0"`. You can think of this as the "version number" of the file, and the number you select here is really important! The format version you select will define which syntax and features are available to you, in that particular file.

:::tip
Selecting the wrong format version is a common source of errors. When troubleshooting, people may ask you questions like 'what format version is your item'. Ensure that you know how to answer that question.
:::

## Why Do Format Versions Exist?

Format versions exist to _version_ the Add-on system, and allow Minecraft to introduce new features into the add-on system, without breaking old Add-ons. For example, a `1.8.0` format version RP Entity file has very different syntax than a `1.10.0` format version RP Entity file. By using the 'format*version' key in the json \_you* can decide which version you want to use.

By using format versions _per file_, Minecraft gives you a lot of control over how your add-on will be interpreted by the game. It is completely possible and expected to mix different format versions in your add-on.

## Format Version Is Not Game Version

It is really important to understand that format version is _per subsystem_, and is generally not equal to the base game version. This simply means that every type of file (item, rp entity, bp entity, recipe) will use a different versioning system.

For example: `"format_version": "1.8.0"` in an RP entity file means "use version `1.8.0` of the _item system_". It does _not_ mean "use version `1.8.0` of the _add-on system_".

For this reason, some file types will have very "old" format versions. Do not be tempted to replace this version with the latest game version, such as `1.17.0`.

## Format Version Fixing

Minecraft has a system that will "fix" your format version if you've written it wrong. This system isn't well understood, isn't enabled for all systems, and shouldn't be relied upon. But it's important to note that an incorrect format version will often "regress" downwards until it hits a valid format version. For example a `1.11.0` RP entity file will simply be interpreted as `1.10.0`, and cause no errors.

This system is useful, as it means you are less likely to generate a broken file, by selecting the wrong format version.

## Picking a Format Version

Generally speaking, there is a cool tricky to pick the correct format version, for any file type.

For example, imagine you are creating a Recipe file:

1.  Install the [Vanilla Packs](/guide/download-packs).
2.  Look at some recipe files, to judge which format version is most used, or the most recent
3.  Use this format version in your file

This simple trick will help you select a valid format version for your file.

## Format Versions per Asset Type

This section will list the format versions used in the vanilla game, alongside how many times it appears.

-   The '⭐' marks the recommended version.

_Last Updated for 1.21.50_

### Resource Pack

| Format                | Version     | Count |
| --------------------- | ----------- | ----: |
| Animation Controllers | 1.10.0 ⭐   |    65 |
| Animations            | 1.10.0 ⭐   |     6 |
| Animations            | 1.8.0       |   130 |
| Attachable            | 1.10.0 ⭐   |    30 |
| Attachable            | 1.10        |     1 |
| Attachable            | 1.8.0       |    25 |
| Blocks Catalog        | 1.20.40 ⭐  |     1 |
| Client Entity         | 1.10.0 ⭐   |    88 |
| Client Entity         | 1.8.0       |    84 |
| Fog Settings          | 1.16.100 ⭐ |    73 |
| Geometry              | 1.16.0      |     6 |
| Geometry              | 1.12.0      |    30 |
| Geometry              | 1.10.0      |     5 |
| Geometry              | 1.8.0       |    91 |
| Particle Effect       | 1.10.0 ⭐   |   176 |
| Render Controllers    | 1.10.0 ⭐   |    24 |
| Render Controllers    | 1.8.0       |    98 |
| Sound Definitions     | 1.20.20 ⭐  |     1 |

### Behavior Pack

| Format      | Version    | Count |
| ----------- | ---------- | ----: |
| Entity      | 1.21.50 ⭐ |     9 |
| Entity      | 1.21.60    |    17 |
| Entity      | 1.21.30    |     1 |
| Entity      | 1.21.20    |     2 |
| Entity      | 1.21.10    |     9 |
| Entity      | 1.21.0     |    28 |
| Entity      | 1.19.80    |     1 |
| Entity      | 1.19.60    |     1 |
| Entity      | 1.19.50    |     1 |
| Entity      | 1.19.30    |     1 |
| Entity      | 1.18.20    |     1 |
| Entity      | 1.18.10    |     3 |
| Entity      | 1.17.10    |     1 |
| Entity      | 1.16.210   |     1 |
| Entity      | 1.16.0     |    19 |
| Entity      | 1.14.0     |     6 |
| Entity      | 1.13.0     |     2 |
| Entity      | 1.12.0     |    14 |
| Entity      | 1.10.0     |     1 |
| Entity      | 1.8.0      |     2 |
| Item        | 1.21.30 ⭐ |    17 |
| Item        | 1.20.50    |     5 |
| Item        | 1.16.0     |     1 |
| Item        | 1.16       |     1 |
| Item        | 1.14       |     1 |
| Item        | 1.10       |    45 |
| Recipe      | 1.21.50 ⭐ |    13 |
| Recipe      | 1.21.60    |     4 |
| Recipe      | 1.21.30    |     2 |
| Recipe      | 1.20.60    |     3 |
| Recipe      | 1.20.30    |    19 |
| Recipe      | 1.20.10    |  1315 |
| Recipe      | 1.16       |   139 |
| Recipe      | 1.12       |    67 |
| Spawn Rules | 1.17.0 ⭐  |     1 |
| Spawn Rules | 1.11.0     |     1 |
| Spawn Rules | 1.8.0      |    51 |
| Trade Table | 1.18.10    |     1 |
