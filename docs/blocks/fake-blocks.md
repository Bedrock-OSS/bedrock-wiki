---
title: Fake Blocks
---

# Fake Blocks

<Label color="yellow">Intermediate</Label>

## Creating the Hitbox

Here is a tutorial of how to make a solid Hitbox in four different ways, with `runtime_identifiers`, blocks and components. [Solid Entities](https://wiki.bedrock.dev/tutorials/solid-entities)

## Basic Components

Those components below are required to make the entity act like a block, and also don't add the `"minecraft:physics": {}` component in there, because this will make your entity fall or have collision with some blocks like water or lava.

```json
{
	"minecraft:knockback_resistance": {
		//Knockback resistance is needed to make it not be Knocked off by an entity.
		"value": 1
	},
	"minecraft:pushable": {
		//Tells if the entity can be pushed or not.
		"is_pushable": false,
		"is_pushable_by_piston": true
	},
	"minecraft:push_through": {
		//Sets the distance through which the entity can push through.
		"value": 1
	},
	"minecraft:damage_sensor": {
		//Makes it invincible.
		"triggers": [
			{
				"deals_damage": false,
				"cause": "all"
			}
		]
	}
}
```

## Aligning the Entity Rotation

To align your entity in rotation, you will need some Math.

```json
"rotation": [ 0, "-query.body_y_rotation + (Math.round(query.body_y_rotation / 90) * 90)", 0 ]
```

Apply that code on the core folder(that has all the other groups inside) of your model in an animation, make sure the pivot point is 0 in the X and Z Axis, to avoid visual bugs. And also you don't need to add components like:

`"minecraft:behavior.look_at_entity": {} "minecraft:behavior.look_at_player": {} "minecraft:behavior.look_at_target": {} ...`

The reason why is because this will change the Target Y Rotation, causing it to move the Body Y Rotation so the Model will move. Don't add walk components too.

## Aligning the Entity Position

To align the position of the entity, this will be more tricky.

First, in the `minecraft:entity_spawned` event, make it places a custom block with a run_command, and make a new dummy-entity with a transformation event, to transform the dummy entity to the original entity so we avoid triggering the `minecraft:entity_spawned` again.

<CodeHeader>BP/entities/your_entity.json#minecraft:entity/events</CodeHeader>

```json
"minecraft:entity_spawned": {//Event in the original entity.
   "add": {
      "components_groups": [
         "despawn"//We will also need to despawn the first entity.
      ]
   },
   "run_command": {
      "command": [
         "setblock ~~~ thing:align"
      ]
   }
}
```

<CodeHeader>BP/entities/your_entity.json#minecraft:entity/component_groups</CodeHeader>

```json
"component_groups": {//Component Group in the original entity.
   "despawn": {
      "minecraft:despawn": {}
   }
}
```

<CodeHeader>BP/blocks/your_dummy_block.json</CodeHeader>

```json
{
	"format_version": "1.16.100",
	"minecraft:block": {
		"description": {
			"identifier": "thing:align" //Block used to summon the dummy entity right on the block, and as the block is centered, the entity will center too.
		},
		"components": {
			"minecraft:destroy_time": 2,
			"minecraft:block_light_emission": 0,
			"minecraft:block_light_absorption": 0,
			"minecraft:flammable": {
				"burn_odds": 0,
				"flame_odds": 0
			},
			"minecraft:unit_cube": {},
			"minecraft:entity_collision": {
				"origin": [0, 0, 0],
				"size": [0, 0, 0]
			},
			"minecraft:pick_collision": {
				"origin": [0, 0, 0],
				"size": [0, 0, 0]
			},
			"minecraft:on_placed": {
				"event": "my:event"
			},
			"minecraft:loot": "loot_tables/empty.json"
		},
		"events": {
			"my:event": {
				"run_command": {
					"command": [
						"setblock ~~~ air 0", //This will despawn the block
						"summon thing:dummy_align" //And this spawn the dummy entity.
					]
				}
			}
		}
	}
}
```

<CodeHeader>BP/entities/your_dummy_entity.json</CodeHeader>

```json
{
	"format_version": "1.13.0",
	"minecraft:entity": {
		"description": {
			"identifier": "thing:dummy_align", //The dummy entity used to avoid triggering the entity_spawned event in the original entity.
			"is_spawnable": false,
			"is_summonable": true,
			"is_experimental": false
		},
		"component_groups": {
			"transform": {
				"minecraft:transformation": {
					"into": "thing:your_entity",
					"delay": 0
				}
			}
		},
		"components": {
			"minecraft:physics": {
				"has_gravity": false
			},
			"minecraft:collision_box": {
				"width": 0.1,
				"height": 0.1
			},
			"minecraft:damage_sensor": {
				"triggers": {
					"cause": "all",
					"deals_damage": false
				}
			}
		},
		"events": {
			"minecraft:entity_spawned": {
				"add": {
					"component_groups": ["transform"]
				}
			}
		}
	}
}
```

## Cracking Texture

Vanilla blocks have a cracking-texture that appears when you break them. Here i will show you how to add this effect to your entity.

First we have to add some textures to your .entity file, make sure that you are using the vanilla textures instead of custom ones(this is to make it compatible with your resource packs)

```json
"textures": {
    "default": "textures/entity/your_texture",
    "destroy_stage_0": "textures/environment/destroy_stage_0",
    "destroy_stage_1": "textures/environment/destroy_stage_1",
    "destroy_stage_2": "textures/environment/destroy_stage_2",
    "destroy_stage_3": "textures/environment/destroy_stage_3",
    "destroy_stage_4": "textures/environment/destroy_stage_4",
    "destroy_stage_5": "textures/environment/destroy_stage_5",
    "destroy_stage_6": "textures/environment/destroy_stage_6",
    "destroy_stage_7": "textures/environment/destroy_stage_7",
    "destroy_stage_8": "textures/environment/destroy_stage_8",
    "destroy_stage_9": "textures/environment/destroy_stage_9"
}
```

And add a geometry that has inflate 0.1 in all their cubes, this to avoid Z-Fighting.

```json
"geometry": {
    "default": "geometry.your_geometry",
    "broken": "geometry.broken"
}
```

And now we have to add a new render controller. This is going to select different textures between the destroys stages.(Remember to not replace your actual controller, you need two controllers, the first one is just the one that adds model, textures and material to your normal entity, and the second one is this one, that defines the cracking texture)

```json
"controller.render.broken": {
    "arrays": {
        "textures": {
            "array.broken": [
                "texture.destroy_stage_9",
                "texture.destroy_stage_8",
                "texture.destroy_stage_7",
                "texture.destroy_stage_6",
                "texture.destroy_stage_5",
                "texture.destroy_stage_4",
                "texture.destroy_stage_3",
                "texture.destroy_stage_2",
                "texture.destroy_stage_1",
                "texture.destroy_stage_0",
                "texture.normal"
            ]
        }
    },
    "geometry": "Geometry.broken",
    "materials": [
        {
            "*": "Material.default"
        }
    ],
    "textures": [
        "array.broken[query.health * 1]"//Here you can caculate the health of your entity to make sure it isn't buggy, if your entity just have 10 health, leave it as it. If it has 20, it should be `[query.health * 0.5]`, if it is 40, it has to be 0.25, etc...
    ]
}
```
