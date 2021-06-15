---
layout: guide
title: Blockbench: Modeling, Texturing, Animating
has_children: true
---

# Getting started with Blockbench & Modelling

Blockbench is a free software designed to make Minecraft modeling, texturing, and animating possible. It is available for mobile browsers, Windows 10, and macOS. Please install it at [blockbench.net/](https://blockbench.net/)

Let's get started.

1. Open Blockbench.
1. Choose _File>New>Bedrock Model_. This is important because Minecraft Bedrock will not be able to read Java models.
1. A screen like this will have popped up.
   ![](/assets/images/guide/create_entity_project_menu.png) - "File name:" Self-explanatory. My file will generate as "skele_yaklin.geo.json"; - "Model Identifier:" This is the model identifier (namespace not required), a shortname for this ID will be defined later; - "Box UV" has to be checked on for automatic UV editing and unwrapping for texturing. - "Texture Height" and "Texture Width" define the resolution of the model's textures;

1. Press confirm. You'll see a screen like this:
   ![](/assets/images/guide/create_entity_workspace.png) - You can see many tools here: move, resize, rotate, etc. - You can add bones and cubes in the menu on the right-bottom corner. Cubes can rotate on their own; the bones will carry everything in them along;

1. Now, you are ready to create your own model! For more in-depth tutorials on modeling, please check out the videos by Everbloom Studio below.

<YouTubeEmbed id="XqzxL_-XjA0" />

<YouTubeEmbed id="j7ISUImhgpc" />

# Texturing

Now that you have your model in place let's start texturing!

1. On the left-bottom panel, click "Create Texture"
1. Write down your image file name under "Name:". Mine will export as `ghost.png`. Check "Template:" to make a template texture - it'll be easier to work with.
   ![](/assets/images/guide/create_entity_texture_1.png)
1. Check everything and change your resolution to the one you set in the very first step.
   ![](/assets/images/guide/create_entity_texture_2.png)
1. Go to "Paint" in the upper right corner and paint your texture.

# Animating

Once your model and texture are done, you can start animating. Go to "Animate" in the upper right corner.

You might want to adjust one of the toolbars by adding "Export Animations" and "Import Animations" like this:
![](/assets/images/guide/create_entity_animation_1.png)

1. Click "Add Animation" [the plus icon on the top right side] and name it `animation.{yourEntityName}.move`.
   Create the first frame of your walking animation under 0 on the timeline by moving the legs.
   ![](/assets/images/guide/create_entity_animation_2.png)
1. Create the second frame under 0.5 on the timeline.
   ![](/assets/images/guide/create_entity_animation_3.png)
1. Finally, copy the first frame to the third frame by placing your timeline cursor on 1.0 and selecting the first frame, then ctrl+c, ctrl+v.
1. Right-click the animation and tick "Loop" for the animation to loop.
   ![](/assets/images/guide/create_entity_animation_4.png)

# Saving your work

Now that our model, texture, and walk animation are complete, you can save your work.

Go to _File>Save Model_ or _File>Export Bedrock Geometry_. Save the model in `RP/models/entity`, the texture in `RP/textures/entity/` and the animation in `RP/animations`. Congratulations! You've successfully created your first entity's visuals! You can see the file examples below.

_Meanwhile, why not upgrading the visuals of your own unique entities' or creating another one?_

`RP/models/entity/ghost.geo.json`

<CodeHeader>RP/models/entity/ghost.geo.json</CodeHeader>

```json
{
	"format_version": "1.12.0",
	"minecraft:geometry": [
		{
			"description": {
				"identifier": "geometry.ghost",
				"texture_width": 64,
				"texture_height": 64,
				"visible_bounds_width": 3,
				"visible_bounds_height": 3.5,
				"visible_bounds_offset": [0, 1.25, 0]
			},
			"bones": [
				{
					"name": "root",
					"pivot": [0, 3, 0]
				},
				{
					"name": "body",
					"parent": "root",
					"pivot": [0, 4.625, 0],
					"cubes": [
						{
							"origin": [-4, 3, -4],
							"size": [8, 13, 8],
							"uv": [0, 20]
						}
					]
				},
				{
					"name": "leftArm",
					"parent": "body",
					"pivot": [4.6, 15.5, 0.5],
					"cubes": [
						{
							"origin": [4.1, 7, -1],
							"size": [3, 9, 3],
							"uv": [32, 32]
						}
					]
				},
				{
					"name": "rightArm",
					"parent": "body",
					"pivot": [-4.5, 15.5, 0.5],
					"cubes": [
						{
							"origin": [-7.1, 7, -1],
							"size": [3, 9, 3],
							"uv": [32, 20]
						}
					]
				},
				{
					"name": "head",
					"parent": "body",
					"pivot": [0, 16, 0],
					"cubes": [
						{
							"origin": [-5, 16, -5],
							"size": [10, 10, 10],
							"uv": [0, 0]
						}
					]
				}
			]
		}
	]
}
```

<CodeHeader>RP/animations/ghost.a.animations.json</CodeHeader>

```json
{
	"format_version": "1.8.0",
	"animations": {
		"animation.ghost.idle": {
			"loop": true,
			"animation_length": 3,
			"bones": {
				"body": {
					"rotation": {
						"0.0": [10, 0, 0],
						"3.0": [10, 0, 0]
					},
					"position": {
						"0.0": [0, 0, 0],
						"1.5": [0, 1, 0],
						"3.0": [0, 0, 0]
					}
				},
				"leftArm": {
					"rotation": {
						"0.0": [-10, 0, 0],
						"1.5": [-5, 0, 0],
						"3.0": [-10, 0, 0]
					}
				},
				"rightArm": {
					"rotation": {
						"0.0": [-10, 0, 0],
						"1.5": [-5, 0, 0],
						"3.0": [-10, 0, 0]
					}
				},
				"head": {
					"rotation": {
						"0.0": [-7.5, 0, 0],
						"1.5": [-2.5, 0, 0],
						"3.0": [-7.5, 0, 0]
					}
				}
			}
		},
		"animation.ghost.attack": {
			"animation_length": 0.75,
			"bones": {
				"body": {
					"rotation": {
						"0.0": [10, 0, 0],
						"0.2917": [10, 15, 0],
						"0.5": [22.5, -12.5, 0],
						"0.75": [10, 0, 0]
					},
					"position": {
						"0.0": [0, 0, 0],
						"0.2917": [0, 0, 3],
						"0.5": [0, 0, -3],
						"0.75": [0, 0, 0]
					}
				},
				"leftArm": {
					"rotation": {
						"0.0": [-10, 0, 0],
						"0.75": [-10, 0, 0]
					}
				},
				"rightArm": {
					"rotation": {
						"0.0": [-10, 0, 0],
						"0.2083": [-10, 0, 0],
						"0.2917": [-10, 62.5, 117.5],
						"0.5": [-80, -17.5, 22.5],
						"0.75": [-10, 0, 0]
					}
				},
				"head": {
					"rotation": {
						"0.0": [-7.5, 0, 0],
						"0.75": [-7.5, 0, 0]
					}
				}
			}
		},
		"animation.ghost.move": {
			"loop": true,
			"animation_length": 1,
			"bones": {
				"body": {
					"rotation": {
						"0.0": [15, 0, 0],
						"0.25": [15, -2.5, 0],
						"0.5": [15, 0, 0],
						"0.75": [15, 2.5, 0],
						"1.0": [15, 0, 0]
					},
					"position": [0, 0, 0]
				},
				"leftArm": {
					"rotation": {
						"0.0": [15, 0, 0],
						"0.5": [20, 0, 0],
						"1.0": [15, 0, 0]
					}
				},
				"rightArm": {
					"rotation": {
						"0.0": [15, 0, 0],
						"0.5": [20, 0, 0],
						"1.0": [15, 0, 0]
					}
				},
				"head": {
					"rotation": {
						"0.0": [-12.5, 0, 0],
						"0.5": [-15, 0, 0],
						"1.0": [-12.5, 0, 0]
					}
				}
			}
		}
	}
}
```
