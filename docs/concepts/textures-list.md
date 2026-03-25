---
title: textures_list.json
mentions:
    - SirLich
    - solvedDev
    - Joelant05
    - AFoxyToast
    - TheItsNameless
description: The textures_list file is Minecraft's way of caching each texture so that it can retrieve it faster than looking through each image in your textures folder.
---

## General Overview

The textures list is Minecraft's way of _caching_ each texture so that it can retrieve it faster than looking through each image in your textures folder.
This is especially important when you have an abundance of textures, where Minecraft could potentially mess up and swap textures or even not load them at all.

Minecraft may display a content log _warning_ if you don't have your textures listed in the file.
You can ignore it if you have a small amount, but it is recommended that you list the textures anyway.

## Which Textures Should Be Included?

Any texture! All textures can and _should_ be used in the `textures_list.json` file for best practice and performance.

## File Structure

The structure is simple. The file itself is in `RP/textures` and is named `textures_list.json`.
The file contains an array of texture paths (file paths in the `textures` folder excluding extensions such as `.texture_set.json` and `.png`):

<CodeHeader>RP/textures/textures_list.json</CodeHeader>

```json
[
    "textures/blocks/foo",
    "textures/blocks/bar",

    "textures/items/foo",
    "textures/items/bar",

    "textures/models/foo",
    "textures/models/bar",

    "textures/entity/foo",
    "textures/entity/bar"
]
```

## Automating

If you have a lot of textures, it will be tedious to go and list all the texture paths.
In this case you might prefer start to using [Regolith](https://regolith-docs.readthedocs.io) with its wonderful filters.
