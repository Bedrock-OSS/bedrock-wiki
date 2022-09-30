---
title: Throwable Items
category: Tutorials
tags:
- intermediate
---

Items like the Splash Potion or the Trident are special items that can be thrown. Currently, there are two ways to accomplish something similar in our add-on, one that can be done in the stable release and one that needs the `Holiday Creator Features` experimental toggle to be enabled.

# Stable method
This method lets you detect the usage of an item through the `minecraft:food` component from an animation controller, and modifying the player.json you can then spawn an entity when that happens.

## The Item
First, you'll want to make the actual item itself:
`BP/items/bottle_of_nails.item.json`
```json
{
    "format_version": "1.16.0",
    "minecraft:item": {
        "description": {
            "identifier": "wiki:throwable_item"
        },
        "components": {
            "minecraft:max_stack_size": 16,
            "minecraft:use_duration": 12000,
            "minecraft:food": {
                "can_always_eat": true
            }
        }
    }
}
```
We can notice several things here:
- `format_version` must be `1.16.0`
- `minecraft:use_duration` should be a high number, in order to stop the eating sound to play and to prevent the player from eating the item
- `minecraft:food` is used to allow player to actually "use" the item, so we can detect it

Because the format version is `1.16.0`, your item needs an RP definition too:
`RP/items/bottle_of_nails.item.json`
```json
{
    "format_version": "1.16.0",
    "minecraft:item": {
        "description": {
            "identifier": "wiki:throwable_item",
            "category": "Equipment"
        },
        "minecraft:icon": "throwable_item"
    }
}
```

## The Entity

The entity will be the actual thrown item, and it will behave like a projectile.

`behaviourpack/entities/bottle_of_nails.server_entity.json`
```json
{
	"format_version": "1.16.0",
	"minecraft:entity": {
		"description": {
			"identifier": "wiki:throwable_item_entity",
			"is_spawnable": false,
			"is_summonable": true,
			"is_experimental": false
		},
		"components": {
			"minecraft:collision_box": {
				"width": 0.25,
				"height": 0.25
			},
			"minecraft:projectile": {
				"on_hit": {
					"grant_xp": {
						"minXP": 3,
						"maxXP": 5
					},
					"impact_damage": {
						"damage": 16
					},
					"remove_on_hit": {}
				},
				"power": 0.7,
				"gravity": 0.03,
				"angle_offset": -20.0,
				"hit_sound": "glass"
			},
			"minecraft:physics": {},
			"minecraft:pushable": {
				"is_pushable": true,
				"is_pushable_by_piston": true
			},
			"minecraft:conditional_bandwidth_optimization": {
				"default_values": {
					"max_optimized_distance": 80.0,
					"max_dropped_ticks": 10,
					"use_motion_prediction_hints": true
				}
			}
		}
	}
}
```
You can then customize its behavior by editing the `minecraft:projectile` component, in this case the thrown item will grant some exp and will damage any entity it will hit.

## The Animation Controller

The animation controller is responsible for detecting the usage of the item and for telling the player entity to spawn or throwable entity.
`behaviourpack/animation_controllers/throwable.animation_controllers.json`
```json
{
	"format_version": "1.10.0",
	"animation_controllers": {
		"controller.animation.player.throwables": { // The ID we will reference in the player's entity description
			"initial_state": "default",
			"states": {
				"default": {
					"transitions": [
						{
                            // The 'name' to use is the item identifier without the namespace
							"throw_item": "q.get_equipped_item_name == 'throwable_item' && q.item_remaining_use_duration > 0.0"  
						}
					],
                    "on_entry": [
                        // Resets the player entity in order to be able to throw another item
                        "@s wiki:reset_player"
                    ]
				},
				"throw_item": {
					"transitions": [
						{
							"default": "1.0"
						}
					],
					"on_entry": [ 
                        // Call the event in the player entity responsible of throwing the item
                        "@s wiki:throw_item",
                        // Remove the item from player's inventory
						"/clear @s wiki:throwable_item 0 1"
					]
				}
			}
		}
	}
}
```

Now, you have to register the animation controller to the player.json file:
`BP/entities/player.json`
```json
{
  "format_version": "1.19.20",
  "minecraft:entity": {
    "description": {
        "identifier": "minecraft:player",
        "is_spawnable": false,
        "is_summonable": false,
        "is_experimental": false
    },
    "scripts": {
        "animate": [
            "throwables_controller" // This should exactly match the same as the one below
        ]
	},
	"animations": {
		"throwables_controller": "controller.animation.player.throwables" // ID as referenced in animation controller file
	}
    ...
}
```

You need to add all the Events and Component Groups to the player file:
```json
"component_groups": {
    "wiki:throw_entity": { // Contains a Component that will spawn the entity
        "minecraft:spawn_entity": {
            "entities": {
            "min_wait_time": 0,
            "max_wait_time": 0,
            "single_use": true,
            "spawn_entity": "wiki:throwable_item_entity",
            "num_to_spawn": 1
            }
        }
    }
}
```

```json
"events": {
    "wiki:reset_player": {
        "remove": {
            "component_groups": [
                "wiki:throw_entity"
            ]
        }
    },
    "wiki:throw_item": {
        "add": {
            "component_groups": [
                "wiki:throw_entity"
            ]
        }
    }
}
```