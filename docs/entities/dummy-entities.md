---
title: Dummy Entities
category: Tutorials
tags:
    - beginner
---

Dummy entities are invisible entities which are used behind the scenes for game-play purposes. Dummy entities are a very useful tool, and this document will cover some of the ways they are utilized, as well as showing how to set up the resource side of things.

## Using Dummies

This is a non-exhaustive list of how dummies can be used:

-   **For data storage**: by adding tags to the entity, we can use it as a "game manager", much like Armor Stands used to be used.
-   **As a named entity:** by name-tagging a dummy, and then using `execute` to select for it, you can make command-blocks `/say` with a pretty display name.
-   **As a location marker:** you can run `execute` commands located at a dummy to get relative coordinates at a location.
-   **As a waypoint:** by making entities which are aggressive to your dummy, you can pathfind entities to any location by placing a dummy there.

## Creating Dummies

### Behavior Entity

You can use whatever behaviors you like, but here is a good template. The important aspects are: no damage, and can't be pushed.

<CodeHeader>BP/entities/dummy.json</CodeHeader>

```json
{
	"format_version": "1.16.0",
	"minecraft:entity": {
		"description": {
			"identifier": "wiki:dummy",
			"is_summonable": true,
			"is_spawnable": false,
			"is_experimental": false
		},
		"components": {
			"minecraft:custom_hit_test": {
				"hitboxes": [
					{
						"pivot": [0, 100, 0],
						"width": 0,
						"height": 0
					}
				]
			},
			"minecraft:damage_sensor": {
				"triggers": {
					"deals_damage": false
				}
			},
			"minecraft:pushable": {
				"is_pushable": false,
				"is_pushable_by_piston": false
			},
			"minecraft:collision_box": {
				"width": 0.0001,
				"height": 0.0001
			}
		}
	}
}
```

If you want to disable collision at all (so you can place a block at it's position), you can use arrow runtime identifier, however, there can be some side effects.

### Resource Entity

<CodeHeader>RP/entity/dummy.json</CodeHeader>

```json
{
	"format_version": "1.10.0",
	"minecraft:client_entity": {
		"description": {
			"identifier": "wiki:dummy",
			"materials": {
				"default": "entity_alphatest"
			},
			"geometry": {
				"default": "geometry.dummy"
			},
			"render_controllers": ["controller.render.dummy"],
			"textures": {
				"default": "textures/entity/dummy"
			}
		}
	}
}
```

### Geometry

<CodeHeader>RP/models/entity/dummy.json</CodeHeader>

```json
{
	"format_version": "1.12.0",
	"minecraft:geometry": [
		{
			"description": {
				"identifier": "geometry.dummy",
				"texture_width": 16,
				"texture_height": 16
			}
		}
	]
}
```

### Render Controller (Optional)

<CodeHeader>RP/render_controllers/dummy.json</CodeHeader>

```json
{
	"format_version": "1.10.0",
	"render_controllers": {
		"controller.render.dummy": {
			"geometry": "Geometry.default",
			"textures": ["Texture.default"],
			"materials": [
				{
					"*": "Material.default"
				}
			]
		}
	}
}
```

### Texture (Optional)

You can either leave the texture location blank, or open the model in blockbench and create a blank texture.
