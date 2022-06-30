---
title: contents.json
mentions:
    - MedicalJewel105
    - Osaxely
---

``contents.json`` is a file that is *probably* used for the game to process the pack files more easily. It is *probably* intended for marketplace content creators and Mojang, it is not required to have this file in the pack for the pack to work properly.

You will find there some instructions about the usage of this file.

## Structure of the file

`contents.json` is located at the root of the add-on directory. It contains a list of the files that are included in the pack.
Example:

<CodeHeader>RP/contents.json</CodeHeader>

```json
{
  "content": [
    {
      "path": "texts/en_US.lang"
    },
    {
      "path": "contents.json"
    },
    {
      "path": "manifest.json"
    },
    {
      "path": "animations/my_animation.animation.json"
    },
    {
      "path": "animation_controllers/my_ac.ac.json"
    },
    {
      "path": "entity/my_entity.entity.json"
    },
    {
      "path": "textures/textures_list.json"
    },
    {
      "path": "textures/blocks/my_block.png"
    }
  ]
}
```

<FolderView
	:paths="[

	'RP/texts/en_US.lang',
    'RP/manifest.json',
	'RP/contents.json',
    'RP/animations/my_animation.animation.json',
	'RP/animation_controllers/my_ac.ac.json',
	'RP/entity/my_entity.entity.json',
	'RP/textures/texture_list.json',
	'RP/textures/blocks/my_block.png'


]"
></FolderView>

## Automatizing the process
The ``contents.json`` file can be generated automatically by the game itself, it is very recommended to decrease the risks of making mistakes. However, the file must be prepared first. Create a new empty file called ``contents.json`` in the root directory of your add-on, and add empty brackets.

<CodeHeader>``BP|RP/contents.json``</CodeHeader>

```json
{}
```
The file content will be automatically written next time the game is launched.

## Additional information
-	The automatic process can be achieved no matter what is the location of the pack (Development folders or normal folders).
-	Do not make multiple ``contents.json`` for subpacks, the file at the root of the pack is sufficient.
-	This file is not required for the addon to work properly.
