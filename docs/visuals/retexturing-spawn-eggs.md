---
title: Retexturing Spawn Eggs
description: Change the default texture of an entity's spawn egg.
category: Tutorials
tags:
    - beginner
mentions:
    - SirLich
    - Joelant05
    - MedicalJewel105
    - aexer0e
    - QuazChick
---

Custom entities will automatically be given a spawn egg.
This spawn egg can be found inside of the creative menu, with a name like `item.spawn_egg.entity.wiki:custom_entity.name`.
If you want to rename your spawn egg as well as set a texture, you can do so in the lang files.

In this tutorial we are going to retexture the spawn egg so it looks more like your spawned item, and less like an egg.

## Creating the Texture

You can easily take a screenshot of your entity using the Blockbench software. Load the mode, and select export screenshot from the drop-down.

If you don't want an image like this, you can also create your own pixel art, or use any image you like, as long as the image is square.

## Adding the Texture

Add the texture file under `RP/textures`.
It is highly recommended to have a dedicated folder for the textures in your add-on to avoid incompatibility with other add-ons.

On the wiki, we keep our textures in the `RP/textures/wiki` folder, so the texture could be located at `RP/textures/wiki/items/spawn_egg/custom_entity.png`.

## Giving the Texture a Name

Now we need to give our texture a short-name. This can be done in the item texture atlas file:

<CodeHeader>RP/textures/item_texture.json</CodeHeader>

```json
{
    "texture_data": {
        "wiki:custom_entity_spawn_egg": {
            // "wiki:custom_entity_spawn_egg" is the short-name of the texture, which we can reference later
            "textures": "textures/wiki/items/spawn_egg/custom_entity"
        }
        // Add more spawn egg textures here
    }
}
```

## Using the new texture:

Now we can use our new texture inside of the Resource Pack entity file:

<CodeHeader>RP/entity/custom_entity.json#description</CodeHeader>

```json
"spawn_egg": {
    "texture": "wiki:custom_entity_spawn_egg", // "wiki:custom_entity_spawn_egg" should match the texture short-name we created in step 1.
    "texture_index": 0
}
```

Go and test it now!
