---
layout: guide
title: 'Blockbench: Modeling, Texturing, Animating'
parent: Beginners Guide
nav_order: 6
badge: 6
badge_color: guide
badge_justification: left
---

# Getting started with Blockbench & Modelling

Blockbench is a free software, designed to make Minecraft modelling, texturing, and animating possible. You already installed it in [Tools and Software](/guide/software-preparation);

Let's get started.

1. Open Blockbench.
1. Choose _File>New>Bedrock Model_. This is important because Minecraft Bedrock will not be able to read Java models.
1. A screen like this will have popped up.
   ![](/assets/images/guide/create_entity_project_menu.png) - "File name:" Self-explanatory. My file will generate as "skele_yaklin.geo.json"; - "Model Identifier:" This is the model identifier (namespace not required), a shortname for this ID will be defined later; - "Box UV" has to be checked on for automatic UV editing and unwrapping for texturing. - "Texture Height" and "Texture Width" define the resolution of the Model's textures;

1. Press confirm. You'll see a screen like this:
   ![](/assets/images/guide/create_entity_workspace.png) - You can see many tools here: move, resize, rotate, etc. - You can add bones and cubes in the menu on the right-bottom corner. Cubes can rotate on their own, the bones will carry everything in them along;

1. Now you are ready to create your own model! For more in-depth tutorials on modeling please check out the videos by Everbloom Studio below.

<YouTubeEmbed id="XqzxL_-XjA0" />

<YouTubeEmbed id="j7ISUImhgpc" />

## Texturing

Now that you have your model in place, let's start texturing!

_Note: the model and texture showcased are the courtesy of Team Adamantine Forgery!_

1. On left-bottom panel click "Create Texture"
1. Write down your image file name under "Name:". Mine will export as `skele_yaklin.png`. Check "Template:" in order to make a template texture - it'll be easier to work with.
   ![](/assets/images/guide/create_entity_texture_1.png)
1. Check everything and change your resolution to the one you set in the very first step.
   ![](/assets/images/guide/create_entity_texture_2.png)
1. Go to "Paint" in the upper right corner and paint your texture.

# Animating

Once your model and texture are done, you can start animating. Go to "Animate" in the upper right corner.

You might want to adjust one of the toolbars by adding "Export Animations" and "Import Animations" like this:
![](/assets/images/guide/create_entity_animation_1.png)

1. Click "Add Animation" [the plus icon on the top right side] and name it `animation.yourModelname.walk`.
   Create the first frame of your walking animation under 0 on the timeline by moving the legs.
   ![](/assets/images/guide/create_entity_animation_2.png)
1. Create the second frame under 0.5 on the timeline.
   ![](/assets/images/guide/create_entity_animation_3.png)
1. Finally, copy the first frame to the third frame by placing your timeline cursor on 1.0 and selecting the first frame then ctrl+c, ctrl+v.
1. Right click the animation and tick "Loop" in order for the animation to loop.
   ![](/assets/images/guide/create_entity_animation_4.png)

# Saving your work

Now that our model, texture and walk animation are complete, you can save your work.

Simply go to _File>Save Model_ or _File>Export Bedrock Geometry_. Save the model in `RP/models/entity`, the texture in `RP/textures/entity/` and the animation in `RP/animations`. Congratulations! You've succesfully created your first entity's visuals! You can see the file examples below.

_Meanwhile, why not upgrading the visuals of your own unique entities' or creating another one?_

`RP/models/entity/skele_yaklin.geo.json`

<CodeHeader>RP/models/entity/skele_yaklin.geo.json</CodeHeader>

```json
{
	"format_version": "1.12.0",
	"minecraft:geometry": [
		{
			"description": {
				"identifier": "geometry.skele_yaklin",
				"texture_width": 128,
				"texture_height": 128,
				"visible_bounds_width": 3,
				"visible_bounds_height": 2,
				"visible_bounds_offset": [0, 1, 0]
			},
			"bones": [
				{
					"name": "body",
					"pivot": [0, 19, 2],
					"mirror": true,
					"cubes": [
						{
							"origin": [-5.875, -10, 12],
							"size": [11.75, 13, 9],
							"pivot": [0.125, 0, 0],
							"rotation": [90, 0, 0],
							"uv": [0, 23],
							"mirror": false
						},
						{
							"origin": [-4.9, -10, 13],
							"size": [10.75, 12, 7],
							"pivot": [0.125, 0, 0],
							"rotation": [90, 0, 0],
							"uv": [2, 70],
							"mirror": false
						},
						{
							"origin": [-5.6, -9, 12.85],
							"size": [10.75, 10, 8],
							"pivot": [0.125, 0, 0],
							"rotation": [90, 0, 0],
							"uv": [2, 70],
							"mirror": false
						},
						{
							"origin": [-4, 21, 6],
							"size": [9, 11, 0],
							"uv": [83, 46],
							"mirror": false
						},
						{
							"origin": [0, 21, 1],
							"size": [0, 8, 10],
							"uv": [82, 39],
							"mirror": false
						},
						{
							"origin": [-7, 3.98018, 9.88757],
							"size": [14, 12, 11],
							"pivot": [0, 0, 0],
							"rotation": [70, 0, 0],
							"uv": [0, 0],
							"mirror": false
						}
					]
				},
				{
					"name": "tail",
					"parent": "body",
					"pivot": [0, 17.5, 10.5],
					"rotation": [15, 0, 0],
					"cubes": [
						{
							"origin": [-1, 7, 10],
							"size": [2, 12, 2],
							"pivot": [0, 0, 0],
							"rotation": [5, 0, 0],
							"uv": [48, 53]
						},
						{
							"origin": [-1.5, 5, 9.5],
							"size": [3, 4, 3],
							"pivot": [0, 0, 0],
							"rotation": [5, 0, 0],
							"uv": [58, 60]
						}
					]
				},
				{
					"name": "head",
					"pivot": [0, 20, -8],
					"rotation": [30, 0, 0],
					"mirror": true,
					"cubes": [
						{
							"origin": [-4, 17, -19],
							"size": [8, 8, 10],
							"uv": [30, 35],
							"mirror": false
						},
						{
							"origin": [-2.25, 18.85, -18],
							"size": [6, 6, 8],
							"uv": [41, 74],
							"mirror": false
						},
						{
							"origin": [4, 21, -14],
							"size": [10, 3, 3],
							"pivot": [0, 0, 0],
							"rotation": [-5, 0, 0],
							"uv": [40, 29],
							"mirror": false
						},
						{
							"origin": [12, 24, -14],
							"size": [2, 2, 3],
							"pivot": [0, 0, 0],
							"rotation": [-5, 0, 0],
							"uv": [46, 29],
							"mirror": false
						},
						{
							"origin": [-13, 21, -14],
							"size": [2, 3, 3],
							"pivot": [0, 0, 0],
							"rotation": [-5, 0, 0],
							"uv": [0, 3],
							"mirror": false
						},
						{
							"origin": [-11, 21, -14],
							"size": [7, 3, 3],
							"pivot": [0, 0, 0],
							"rotation": [-5, 0, 0],
							"uv": [31, 23],
							"mirror": false
						}
					]
				},
				{
					"name": "leg0",
					"pivot": [4, 12, 7],
					"mirror": true,
					"cubes": [
						{
							"origin": [2, 0, 5],
							"size": [4, 12, 4],
							"uv": [32, 53],
							"mirror": false
						}
					]
				},
				{
					"name": "leg1",
					"pivot": [-4, 12, 7],
					"mirror": true,
					"cubes": [
						{
							"origin": [-6, 0, 5],
							"size": [4, 12, 4],
							"uv": [50, 0],
							"mirror": false
						}
					]
				},
				{
					"name": "leg2",
					"pivot": [4.125, 14, -5],
					"mirror": true,
					"cubes": [
						{
							"origin": [2, 0, -7],
							"size": [4.25, 16, 4],
							"uv": [16, 49],
							"mirror": false
						},
						{
							"origin": [3.75, 0, -6.85],
							"size": [2.25, 16, 3],
							"uv": [75, 69],
							"mirror": false
						}
					]
				},
				{
					"name": "leg3",
					"pivot": [-4, 16, -6],
					"mirror": true,
					"cubes": [
						{
							"origin": [-6.25, 0, -7],
							"size": [4.25, 16, 4],
							"uv": [0, 46],
							"mirror": false
						}
					]
				}
			]
		}
	]
}
```

<CodeHeader>RP/animations/skele_yaklin.animations.json</CodeHeader>

```json
{
	"format_version": "1.8.0",
	"animations": {
		"animation.skele_yaklin.walk": {
			"animation_length": 1,
			"bones": {
				"tail": {
					"rotation": [15, 0, 0]
				},
				"head": {
					"rotation": [-10, 0, 0]
				},
				"leg0": {
					"rotation": {
						"0.0": [-20, 0, 0],
						"0.5": [25, 0, 0],
						"1.0": [-20, 0, 0]
					}
				},
				"leg1": {
					"rotation": {
						"0.0": [35, 0, 0],
						"0.5": [-30, 0, 0],
						"1.0": [35, 0, 0]
					}
				},
				"leg2": {
					"rotation": {
						"0.0": [-40, 0, 0],
						"0.5": [25, 0, 0],
						"1.0": [-40, 0, 0]
					}
				},
				"leg3": {
					"rotation": {
						"0.0": [30, 0, 0],
						"0.5": [-55, 0, 0],
						"1.0": [30, 0, 0]
					}
				}
			}
		}
	}
}
```

\_\_

# Your progress so far:

**What you've done:**

-   Created a custom Entity Model
-   Created a custom Entity Texture
-   Created a custom Entity walking Animation

**What are you to do next:**

-   Define your custom entity's blank behaviors in BP/entites
-   Define your entity's visuals' shortnames and trigger the animation
