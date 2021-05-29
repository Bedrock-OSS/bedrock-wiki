---
layout: page
title: Render Controllers
parent: Concepts
---

# Render Controllers

<Label color="green">Beginner</Label>

Render controllers are an often-misunderstood part of the `Resource Pack`. But you don't need to be afraid! You should think of render-controllers as logic packs that take `short-name` definitions from the RP Entity File, and determine how they will be combined/layered/rendered in-game.

# Defining short-names

Render controllers work based on the short-name definitions of the RP entity file. Short-names are local identifiers, which we define in the RP entity file, and can then use in the render controller (and other places!). Variables such as `geometry`, `materials`, and `textures` can be defined in the entity,

Lets look at a simplified version of the spider RP entity file:

<CodeHeader>RP/entity/spider.json</CodeHeader>

```json
{
	"format_version": "1.8.0",
	"minecraft:client_entity": {
		"description": {
			"identifier": "minecraft:cave_spider",
			"materials": {
				"default": "spider",
				"invisible": "spider_invisible"
			},
			"textures": {
				"default": "textures/entity/spider/cave_spider"
			},
			"geometry": {
				"default": "geometry.spider.v1.8"
			},
			"render_controllers": ["controller.render.spider"]
		}
	}
}
```

In this case, four short-name definitions have been created:

-   `default`, in the materials array
-   `invisible`, in the materials array
-   `default`, in the textures array
-   `default`, in the geometry array

You can define multiple short-names in each array, such as in the `materials` example above.

You should think of short-name definitions as `importing` the assets you want. At this state, you are defining the textures, geometry, and materials that you want to use in your entity. In the render-controller stage, you won't import anything. You will simply use the assets you already imported to create the rendered entity.

# Simple render-controller

A simple render controller looks like this:

<CodeHeader>RP/render_controllers/cow.render.json</CodeHeader>

```json
{
	"format_version": "1.8.0",
	"render_controllers": {
		"controller.render.cow": {
			"geometry": "Geometry.default",
			"materials": [
				{
					"*": "Material.default"
				}
			],
			"textures": ["Texture.default"]
		}
	}
}
```

This controller is taking the short-name definitions from the entity file, and `rendering` them. For example the line: `"textures": [ "Texture.default"]` says: "Take the default texture, and apply it to the entity". The render controller doesn't know what the default texture is, it simply applies it.

# Re-using render controllers

Since render controllers work based on short-names, it is possible to re-use the same render controller for all of your entities. For simple entities with one material, one texture, and one geometry, custom render controllers are not necessary.

For example, the render controller above is used for the `minecraft:cow` entity. If you want to use this render controller in your own pack, simple define like: `"render_controllers": [ "controller.render.cow" ]` in your entity file.

<p class="panel-warning" markdown="1"> 
  Remember! Render controllers work based on short-names. If you want to use the cow render controller, you need to provide the short-names it is using. In this case, you will need to provide:<br>
    - `default` geometry<br>
    - `default` texture<br>
    - `default` material
</p>

# Creating custom render controllers

Often we want more power over the rendering of our entities, such as rendering layered textures, multiple geometries, or applying different materials to different bones. To create a custom render controller, simply copy and paste a vanilla render controller into the `render_controllers` folder, and edit to your liking!

# Texture layering

sometimes, it is useful to create layered textures for custom entities. Layered in this context simply means multiple textures overlayed on top of each other, where the top texture has alpha pixels, and allows the bottom texture to show through.

As a very simple example, imagine a **painting** entity. The frame of the painting is always the same, but the picture itself can change. While you _could_ duplicate the frame 10 times, and paint in 10 paintings, you now created a problem: What if you want to change the frame? Now you need to edit 10 textures.

This can be solved by layering textures. Simply place the frame texture on first, and then add the different paintings on top. You can now edit the frame in one, simple location.

Or, you could even create multiple frames for each painting! This allows you to create more variety in your panting entity, since the player can independently change two textures.

## Render Controllers

Texture layering is achieved through the use of render controllers. If you aren't comfortable with render controllers, you should do some looking through the vanilla usages. Entities such as the `horse`, which contain multiple textures, are especially good to look at.

## Texture Layering

### Render Controller

```json
{
	"format_version": "1.10.0",
	"render_controllers": {
		"controller.render.texture_layering": {
			"geometry": "Geometry.default",
			"materials": [
				{
					"*": "Material.default"
				}
			],
			"textures": [
				//You can add as many layers as you like. Layers are added top to bottom.
				"Texture.bottom_layer",
				"Texture.top_layer"
			]
		}
	}
}
```

### Entity

You need to define all textures in the entity, and also use `villager_v2_masked` material.

```json
"materials": {
  "default": "villager_v2_masked"
},
"textures": {
  "top_layer": "textures/top",
  "bottom_layer": "textures/bottom"
  //Add more texture short-name definitions here.
}
```

## Texture Layering with Variance

While I guess hard-coding layered textures is cool, the real fun comes when you make the textures dynamic:

### Entity

Set multiple top textures, which we will index into later.

```json
"textures": {
  "top_1": "textures/top_1",
  "top_2": "textures/top_2",
  "top_3": "textures/top_3",
  "bottom_layer": "textures/bottom"
}
```

### Render Controller

```json
{
	"format_version": "1.10.0",
	"render_controllers": {
		"controller.render.wool_only": {
			"arrays": {
				"textures": {
					"Array.top": [
						"Texture.top_1",
						"Texture.top_2",
						"Texture.top_3"
					]
				}
			},
			"geometry": "Geometry.default",
			"materials": [
				{
					"*": "Material.default"
				}
			],
			"textures": [
				"Texture.bottom", //static bottom texture
				"Array.top[query.variant]" //pick top texture based on entity variant.
			]
		}
	}
}
```

By using arrays, and then `query.variant`, we are able to select the top texture based on the `variant` of the entity.

### Setting variant

Now, to select which layer will show up, we can simply set the variant component in the entity:

Remember that components like variant are zero-indexed, which means `0` is our first texture, and then `1` and `2` point to the second and third.

```json
"minecraft:variant": {
  "value": 0
}
```

### Dynamically Changing Texture

If you want to dynamically change the texture of an entity during gameplay, you simply need to change the `variant`. This can be done using component groups and events.

### Dynamic Layered Textures

Dynamic layered textures can be achieved by adding more lists of textures, and other dummy components as indexes. You can [read about dummy components here](/tutorials/dummy-entities)
