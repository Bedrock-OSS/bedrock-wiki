---
title: Glowing Entity Texture
category: Tutorials
mentions:
	- LeGend077
---

In this tutorial, you will learn how to make a glowing texture, like enderman's eyes have for an entity by using materials and textures.

## Texture

To make your entity's texture glow, you need to open your texture in an advanced image editor (here, Blockbench) to half-erase the pixels alpha.

- Open your entity's texture file.

 _Don't mind strange bones rotation, Mojang likes to render models correctly through animations._

- Find the __Eraser__ tool and set its opacity/alpha to something low like 71 or 23.

![](/assets/images/visuals/glowing-texture/eraser.png)

![](/assets/images/visuals/glowing-texture/opacity.png)

- Then, erase the part of the texture you want it to glow. The less visible a pixel is the more it glows, but be sure it is not 100% erased.

![](/assets/images/visuals/glowing-texture/erase-pixels.png)

Example Pig texture:

![](/assets/images/visuals/glowing-texture/pig.png)

## Material

We need to modify the `RP/entity/my_entity.entity.json` file of the mob we want to glow. Now, find `"materials":{}` and set the values to `"entity_emissive_alpha"`. (Be sure to check if the textures are properly defined).

<CodeHeader>RP/entity/pig.entity.json#description</CodeHeader>

```json
"materials": {
    "default": "entity_emissive_alpha"
}
```

<Spoiler title="Example Pig Entity File">

<CodeHeader>RP/entity/pig.entity.json</CodeHeader>

```json
{
	"format_version": "1.10.0",
	"minecraft:client_entity": {
		"description": {
			"identifier": "minecraft:pig",
			"min_engine_version": "1.8.0",
			"materials": {
				"default": "entity_emissive_alpha" // replace "pig" with "entity_emissive_alpha"
			},
			"textures": {
				"default": "textures/entity/pig/pig",
				"saddled": "textures/entity/pig/pig_saddle"
			},
			"geometry": {
				"default": "geometry.pig.v1.8"
			},
			"animations": {
				"setup": "animation.pig.setup",
				"walk": "animation.quadruped.walk",
				"look_at_target": "animation.common.look_at_target",
				"baby_transform": "animation.pig.baby_transform"
			},
			"scripts": {
				"animate": [
					"setup",
					{
						"walk": "query.modified_move_speed"
					},
					"look_at_target",
					{
						"baby_transform": "query.is_baby"
					}
				]
			},
			"render_controllers": ["controller.render.pig"],
			"spawn_egg": {
				"texture": "spawn_egg",
				"texture_index": 2
			}
		}
	}
}
```

</Spoiler>

## Testing

Now, load up Minecraft and open a word with this resource pack enabled. Set the time to _midnight_ or find a nearby cave and test it out. The entity should glow as expected.

![](/assets/images/visuals/glowing-texture/result.png)
