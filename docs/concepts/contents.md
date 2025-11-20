---
title: contents.json
description: A file that lists every file in your pack.
mentions:
    - MedicalJewel105
    - Osaxely
    - SirLich
    - solvedDev
    - Joelant05
    - Jorginhor
    - TheItsNameless
    - QuazChick
---

`contents.json` is a file that is _probably_ used for the game to process the pack files more easily.
It is not required to have this file in your pack for the pack to work properly.

Its main purpose is allowing files in Marketplace content to be encrypted, however it is also included in the vanilla packs which are not encrypted.

## JSON Format

The `contents.json` file is located at the root of the pack directory, in the same place as the pack's `manifest.json`.
It contains a list of the files that are included in the pack in the form of an array under the `content` parameter.

Each `content` entry can contain two parameters:

-   `path` — The path of the file relative to the pack's root directory. This must include the file extension.
-   `key` (optional) — The key used for decrypting a file that has been encrypted.

<CodeHeader>RP/contents.json</CodeHeader>

```json
{
    "content": [
        { "path": "animations/my_animation.animation.json" },
        { "path": "animation_controllers/my_ac.ac.json" },
        { "path": "entity/my_entity.entity.json" },
        { "path": "texts/en_US.lang" },
        { "path": "textures/textures_list.json" },
        { "path": "textures/blocks/my_block.png" },
        { "path": "contents.json" },
        { "path": "manifest.json" }
    ]
}
```

<FolderView :paths="[
    'RP/animations/my_animation.animation.json',
    'RP/animation_controllers/my_ac.ac.json',
    'RP/entity/my_entity.entity.json',
    'RP/texts/en_US.lang',
    'RP/textures/textures_list.json',
    'RP/textures/blocks/my_block.png',
    'RP/contents.json',
    'RP/manifest.json',
]" />

## Automating the Process

The `contents.json` file can be generated automatically by the game itself!
Allowing Minecraft to generate this file for you means that you won't make mistakes trying to create it.

However, the file must be prepared first. Create a new empty file called `contents.json` in the root directory of your add-on, and add empty brackets.

<CodeHeader>BP|RP/contents.json</CodeHeader>

```json
{}
```

The file content will be automatically written next time the game is launched.

## Additional Information

-   The automatic process can be achieved regardless of the location of the pack (development folders or normal folders).
-   Do not make a `contents.json` for each subpack, the file at the root of the pack is sufficient.
-   This file is not required for your packs to work properly.
