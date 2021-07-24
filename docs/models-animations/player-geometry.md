---
title: Player Geometry
---

<Label color="green">Beginner</Label>

This tutorial will show you how to create player NPCs and add them into your world. These player NPCs will take vanilla player skins, and come included with walk-animations, attack animations, etc.

This tutorial is a _graphical_ tutorial. Mechanics are not covered.

`Note:` This will be a very json-heavy document. The json is intended for copy-pasting.

## Geometry File

This json contains geometry for both the Steve and Alex versions:

`geometry.npc.steve`

`geometry.npc.alex`

<Spoiler title="Geometry">

```json
{
	"format_version": "1.12.0",
	"minecraft:geometry": [
		{
			"description": {
				"identifier": "geometry.cape",
				"texture_width": 64,
				"texture_height": 32
			},
			"bones": [
				{
					"name": "body",
					"pivot": [0.0, 24.0, 0.0],
					"parent": "waist"
				},
				{
					"name": "waist",
					"pivot": [0.0, 12.0, 0.0]
				},
				{
					"name": "cape",
					"parent": "body",
					"pivot": [0.0, 24.0, 3.0],
					"rotation": [0.0, 180.0, 0.0],
					"cubes": [
						{
							"origin": [-5.0, 8.0, 3.0],
							"size": [10, 16, 1],
							"uv": [0, 0]
						}
					]
				}
			]
		},

		{
			"description": {
				"identifier": "geometry.npc.steve",
				"visible_bounds_width": 1,
				"visible_bounds_height": 2,
				"visible_bounds_offset": [0, 1, 0],
				"texture_width": 64,
				"texture_height": 64
			},
			"bones": [
				{
					"name": "root",
					"pivot": [0.0, 0.0, 0.0]
				},
				{
					"name": "body",
					"parent": "waist",
					"pivot": [0.0, 24.0, 0.0],
					"cubes": [
						{
							"origin": [-4.0, 12.0, -2.0],
							"size": [8, 12, 4],
							"uv": [16, 16]
						}
					]
				},

				{
					"name": "waist",
					"parent": "root",
					"pivot": [0.0, 12.0, 0.0]
				},

				{
					"name": "head",
					"parent": "body",
					"pivot": [0.0, 24.0, 0.0],
					"cubes": [
						{
							"origin": [-4.0, 24.0, -4.0],
							"size": [8, 8, 8],
							"uv": [0, 0]
						}
					]
				},

				{
					"name": "cape",
					"pivot": [0.0, 24, 3.0],
					"parent": "body"
				},
				{
					"name": "hat",
					"parent": "head",
					"pivot": [0.0, 24.0, 0.0],
					"cubes": [
						{
							"origin": [-4.0, 24.0, -4.0],
							"size": [8, 8, 8],
							"uv": [32, 0],
							"inflate": 0.5
						}
					]
				},
				{
					"name": "leftArm",
					"parent": "body",
					"pivot": [5.0, 22.0, 0.0],
					"cubes": [
						{
							"origin": [4.0, 12.0, -2.0],
							"size": [4, 12, 4],
							"uv": [32, 48]
						}
					]
				},
				{
					"name": "leftSleeve",
					"parent": "leftArm",
					"pivot": [5.0, 22.0, 0.0],
					"cubes": [
						{
							"origin": [4.0, 12.0, -2.0],
							"size": [4, 12, 4],
							"uv": [48, 48],
							"inflate": 0.25
						}
					]
				},
				{
					"name": "leftItem",
					"pivot": [6.0, 15.0, 1.0],
					"parent": "leftArm"
				},
				{
					"name": "rightArm",
					"parent": "body",
					"pivot": [-5.0, 22.0, 0.0],
					"cubes": [
						{
							"origin": [-8.0, 12.0, -2.0],
							"size": [4, 12, 4],
							"uv": [40, 16]
						}
					]
				},
				{
					"name": "rightSleeve",
					"parent": "rightArm",
					"pivot": [-5.0, 22.0, 0.0],
					"cubes": [
						{
							"origin": [-8.0, 12.0, -2.0],
							"size": [4, 12, 4],
							"uv": [40, 32],
							"inflate": 0.25
						}
					]
				},
				{
					"name": "rightItem",
					"pivot": [-6, 15, 1],
					"locators": {
						"lead_hold": [-6, 15, 1]
					},
					"parent": "rightArm"
				},

				{
					"name": "leftLeg",
					"parent": "root",
					"pivot": [1.9, 12.0, 0.0],
					"cubes": [
						{
							"origin": [-0.1, 0.0, -2.0],
							"size": [4, 12, 4],
							"uv": [16, 48]
						}
					]
				},
				{
					"name": "leftPants",
					"parent": "leftLeg",
					"pivot": [1.9, 12.0, 0.0],
					"cubes": [
						{
							"origin": [-0.1, 0.0, -2.0],
							"size": [4, 12, 4],
							"uv": [0, 48],
							"inflate": 0.25
						}
					]
				},

				{
					"name": "rightLeg",
					"parent": "root",
					"pivot": [-1.9, 12.0, 0.0],
					"cubes": [
						{
							"origin": [-3.9, 0.0, -2.0],
							"size": [4, 12, 4],
							"uv": [0, 16]
						}
					]
				},
				{
					"name": "rightPants",
					"parent": "rightLeg",
					"pivot": [-1.9, 12.0, 0.0],
					"cubes": [
						{
							"origin": [-3.9, 0.0, -2.0],
							"size": [4, 12, 4],
							"uv": [0, 32],
							"inflate": 0.25
						}
					]
				},

				{
					"name": "jacket",
					"parent": "body",
					"pivot": [0.0, 24.0, 0.0],
					"cubes": [
						{
							"origin": [-4.0, 12.0, -2.0],
							"size": [8, 12, 4],
							"uv": [16, 32],
							"inflate": 0.25
						}
					]
				}
			]
		},

		{
			"description": {
				"identifier": "geometry.npc.alex",
				"visible_bounds_width": 1,
				"visible_bounds_height": 2,
				"visible_bounds_offset": [0, 1, 0],
				"texture_width": 64,
				"texture_height": 64
			},
			"bones": [
				{
					"name": "root",
					"pivot": [0.0, 0.0, 0.0]
				},
				{
					"name": "waist",
					"parent": "root",
					"pivot": [0.0, 12.0, 0.0]
				},
				{
					"name": "body",
					"parent": "waist",
					"pivot": [0.0, 24.0, 0.0],
					"cubes": [
						{
							"origin": [-4.0, 12.0, -2.0],
							"size": [8, 12, 4],
							"uv": [16, 16]
						}
					]
				},
				{
					"name": "head",
					"parent": "body",
					"pivot": [0.0, 24.0, 0.0],
					"cubes": [
						{
							"origin": [-4.0, 24.0, -4.0],
							"size": [8, 8, 8],
							"uv": [0, 0]
						}
					]
				},
				{
					"name": "hat",
					"parent": "head",
					"pivot": [0.0, 24.0, 0.0],
					"cubes": [
						{
							"origin": [-4.0, 24.0, -4.0],
							"size": [8, 8, 8],
							"uv": [32, 0],
							"inflate": 0.5
						}
					]
				},
				{
					"name": "rightLeg",
					"parent": "root",
					"pivot": [-1.9, 12.0, 0.0],
					"cubes": [
						{
							"origin": [-3.9, 0.0, -2.0],
							"size": [4, 12, 4],
							"uv": [0, 16]
						}
					]
				},
				{
					"name": "rightPants",
					"parent": "rightLeg",
					"pivot": [-1.9, 12.0, 0.0],
					"cubes": [
						{
							"origin": [-3.9, 0.0, -2.0],
							"size": [4, 12, 4],
							"uv": [0, 32],
							"inflate": 0.25
						}
					]
				},

				{
					"name": "leftLeg",
					"parent": "root",
					"pivot": [1.9, 12.0, 0.0],
					"cubes": [
						{
							"origin": [-0.1, 0.0, -2.0],
							"size": [4, 12, 4],
							"uv": [0, 16]
						}
					],
					"mirror": true
				},
				{
					"name": "leftPants",
					"parent": "leftLeg",
					"pivot": [1.9, 12.0, 0.0],
					"cubes": [
						{
							"origin": [-0.1, 0.0, -2.0],
							"size": [4, 12, 4],
							"uv": [0, 48],
							"inflate": 0.25
						}
					]
				},

				{
					"name": "leftArm",
					"parent": "body",
					"pivot": [5.0, 21.5, 0.0],
					"cubes": [
						{
							"origin": [4.0, 11.5, -2.0],
							"size": [3, 12, 4],
							"uv": [32, 48]
						}
					]
				},
				{
					"name": "leftSleeve",
					"parent": "leftArm",
					"pivot": [5.0, 21.5, 0.0],
					"cubes": [
						{
							"origin": [4.0, 11.5, -2.0],
							"size": [3, 12, 4],
							"uv": [48, 48],
							"inflate": 0.25
						}
					]
				},
				{
					"name": "leftItem",
					"pivot": [6, 14.5, 1],
					"parent": "leftArm"
				},
				{
					"name": "rightArm",
					"parent": "body",
					"pivot": [-5.0, 21.5, 0.0],
					"cubes": [
						{
							"origin": [-7.0, 11.5, -2.0],
							"size": [3, 12, 4],
							"uv": [40, 16]
						}
					]
				},
				{
					"name": "rightSleeve",
					"parent": "rightArm",
					"pivot": [-5.0, 21.5, 0.0],
					"cubes": [
						{
							"origin": [-7.0, 11.5, -2.0],
							"size": [3, 12, 4],
							"uv": [40, 32],
							"inflate": 0.25
						}
					]
				},
				{
					"name": "rightItem",
					"pivot": [-6, 14.5, 1],
					"locators": {
						"lead_hold": [-6, 14.5, 1]
					},
					"parent": "rightArm"
				},

				{
					"name": "jacket",
					"parent": "body",
					"pivot": [0.0, 24.0, 0.0],
					"cubes": [
						{
							"origin": [-4.0, 12.0, -2.0],
							"size": [8, 12, 4],
							"uv": [16, 32],
							"inflate": 0.25
						}
					]
				},

				{
					"name": "cape",
					"pivot": [0.0, 24, -3.0],
					"parent": "body"
				}
			]
		}
	]
}
```

</Spoiler>

## Entity File

Use this entity file if you would like to have animatinos for your geometry. This file includes error-free animations for:

-   walking
-   looking at player
-   idle animation

If you need a more complete set of animations, consider copying the default player RP-entity file, and trying to work with the animations by hand.

<Spoiler title="Entity File">

```json
{
	"format_version": "1.10.0",
	"minecraft:client_entity": {
		"description": {
			"identifier": "wiki:npc",
			"materials": {
				"default": "villager_v2"
			},
			"geometry": {
				"default": "geometry.npc.alex"
			},
			"render_controllers": ["controller.render.single_texture"],
			"textures": {
				"default": "textures/entity/npc/introduction"
			},
			"scripts": {
				"scale": "0.9375",
				"pre_animation": [
					"variable.tcos0 = (math.cos(query.modified_distance_moved * 38.17) * query.modified_move_speed / variable.gliding_speed_value) * 57.3;"
				],
				"animate": [
					"move.arms",
					"move.legs",
					"look_at_target_default",
					"bob"
				]
			},
			"animations": {
				"look_at_target_default": "animation.humanoid.look_at_target.default",
				"move.arms": "animation.player.move.arms",
				"move.legs": "animation.player.move.legs",
				"bob": "animation.player.bob"
			}
		}
	}
}
```

</Spoiler>
