---
layout: page
title: Retexturing Spawn Eggs
parent: Tutorials
---

# Retexturing Spawn Eggs

<details id="toc" open markdown="block">
  <summary>
    Table of contents
  </summary>
  {: .text-delta }
1. TOC
{:toc}
</details>

Beginner
{: .label .label-green }

Custom entities will automatically be given a spawn egg. This spawn egg can be found inside of the creative menu, with a name like `item.spawn_egg.entity.sirlich:my_entity.name`. If you want to rename your spawn egg as well as set a texture, you can do so in the lang files. 

In this tutorial we are going to retexture the spawn egg so it looks more like your spawned item, and less like an egg. 

##  Creating the texture:

You can easily take a screenshot of your entity using the Blockbench software. Load the mode, and select export screenshot from the drop-down.

If you don't want an image like this, you can also create your own pixel art, or use any image you like.

## Adding the texture:

Add the texture file under `textures/items/`. I personally suggest creating an `eggs` folder to contain all the spawn egg textures. For example, `textures/items/eggs/my_entity.png`. The file itself should be square.

## Giving the texture a name:
Now we need to give our texture a short-name. This can be done by adding a new file: `textures/item_texture.json`.

```json
{
	"resource_pack_name": "My Map Name", //I don't actually know if this field does anything.
	"texture_name": "atlas.items",
	"texture_data": {
		"my_entity": { //"my_entity" is the short-name of the texture, which we can reference later
			"textures": "textures/items/egg/my_entity"
		}
        //Add more spawn egg textures here
    }
```

## Using the new texture:
Now we can use our new texture inside of the Resource Pack entity file:

```json
"spawn_egg": {
    "texture": "my_entity", //"my entity should match the texture short-name we created in step-1.
    "texture_index": 0
}
```

