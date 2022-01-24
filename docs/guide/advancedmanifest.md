---
title: Advanced Manifest
category: Extra
nav_order: 4
prefix: 'd.'
---

::: tip
This is an appendix page. You can start the guide from the beginning [here](/guide/index).
:::

This page is desgined to go into more detail about the manifest.json file, here we will cover what UUIDs are in more detail and how to add them. We will explain the use of dependencies, the different format versions, and how to include meta-data.

We will also go over the version differences between Behaviour packs, Resource packs, and Skin packs.

## UUIDs

UUID is an abbreviation for Universal Unique Identifier, there are 5 UUID versions plus one common unofficial version, A UUID is a 36 character string containing numbers, letters, and dashes.

Minecraft uses Version 4: Variant 1, which is completely random. This is what creates your pack's unique identity in Minecraft.

### How to Generate the correct UUID

You can use online sites such as [UUID Generator](https://www.uuidgenerator.net/version4/) and [UUID Tools](https://www.uuidtools.com/generate/v4) to generate the correct version required for Minecraft.

##

### UUID FAQ

-   **Are UUIDs Case-sensitive?**

    -   _No, UUIDs are written in base 16 which uses numbers 0-9 and characters a-f. There is no distinction between upper and lowercase letters._

-   **Can I use the same UUID for the header and the modules UUID?**
    -   _No, the UUID for the header and the module needs to be different._
