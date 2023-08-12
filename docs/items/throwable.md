---
title: Throwable Items
category: Tutorials
tags:
    - intermediate
mentions:
    - Fabrimat
    - MedicalJewel105
    - Luthorius
    - IlkinQafarov
    - seeit360
    - TheItsNameless
    - SmokeyStack
    - ThomasOrs
---

::: tip
This tutorial assumes you have a basic understanding of Molang, animation controllers and entity definitions.
:::

Items like the Splash Potion or the Trident are special items that can be thrown. Currently, there are two ways to accomplish something similar in your add-on, one that can be done in the stable release and one that needs the `Holiday Creator Features` experimental toggle to be enabled.

## Stable method

This method lets you detect the usage of an item through the `minecraft:food` component from an animation controller, and modifying the `player.json` you can then spawn an entity when that happens.

### The Item

First, you'll want to make the actual item:

<CodeHeader>BP/items/throwable_item.item.json</CodeHeader>

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

<CodeHeader>RP/items/throwable_item.item.json</CodeHeader>

```json
{
  "format_version": "1.16.0",
  "minecraft:item": {
    "description": {
      "identifier": "wiki:throwable_item",
      "category": "Equipment"
    },
    "components": {
      "minecraft:icon": "throwable_item"
    }
  }
}
```

### The Entity

The entity will be the actual thrown item, and it will behave like a projectile.
Make sure to add snowball runtime identifier to make your projectile to actually be shoot, not spawned. You can also experiment with other projectile runtime id's.

<CodeHeader>BP/entities/throwable_item_entity.se.json</CodeHeader>

```json
{
	"format_version": "1.16.0",
	"minecraft:entity": {
		"description": {
			"identifier": "wiki:throwable_item_entity",
			"is_spawnable": false,
			"is_summonable": true,
			"is_experimental": false,
                        "runtime_identifier": "minecraft:snowball"
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

This entity is based on the Vanilla splash potion.

You can then customize its behavior by editing the `minecraft:projectile` component, in this case the thrown item will grant some exp and will damage any entity it will hit.

### The Animation Controller

The animation controller is responsible for detecting the usage of the item and for telling the player entity to spawn a throwable entity.

<CodeHeader>BP/animation_controllers/throwables.ac.json</CodeHeader>

```json
{
  "format_version": "1.10.0",
  "animation_controllers": {
    "controller.animation.player.throwables": { // The ID we will reference in the player's entity description
      "states": {
        "default": {
          "transitions": [
            {
              // Current "q.is_item_name_any" takes 3 arguments, first is slot name, second is slot id, third is the item we want to check for
              "throw_item": "q.is_item_name_any('slot.weapon.mainhand', 0, 'wiki:throwable_item') && q.is_using_item"
	      // "q.is_using_item" returns 'true' or 'false', in our case if player uses item it is going to return 'true'
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
            "/clear @s wiki:throwable_item -1 1"
          ]
        }
      }
    }
  }
}
```

#### player.json

:::tip
Always make sure that your `player.json` file is updated to the latest version available, depending on the game version you are working on.
You can do that [here](https://bedrock.dev/packs).
:::

:::warning
Do not edit/remove existing parts of the `player.json` file unless you know what you are doing, as it could (and probably will) break the game.
:::

Now, you have to register the animation controller to the `player.json` file:

<CodeHeader>BP/entities/player.json</CodeHeader>

```json
{
  "format_version": "1.18.20",
  "minecraft:entity": {
    "description": {
      "identifier": "minecraft:player",
      "is_spawnable": false,
      "is_summonable": false,
      "is_experimental": false,
      "scripts": {
        "animate": [
          "throwables_controller" // This should exactly match the same as the one below
        ]
      },
      "animations": {
        "throwables_controller": "controller.animation.player.throwables" // ID as referenced in animation controller file
      }
    },
    "components": {
        "minecraft:breathable": { // keeps breath timer bubbles from appearing
          "total_supply": 15,
          "suffocate_time": -1,
          "inhale_time": 3.75,
          "generates_bubbles": false
    	}
    },
    ...
  }
```

Then, you need to add all the events and component groups to the `player.json` file:

<CodeHeader>BP/entities/player.json#minecraft:entity</CodeHeader>

```json
"component_groups": {
  "wiki:throw_entity": { // Contains a component that will spawn the entity
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
},
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

## Experimental method

This method requires the `Holiday Creator Features` experimental toggle to be enabled.

### The Item

<CodeHeader>BP/items/throwable_item.item.json</CodeHeader>

```json
{
    "format_version": "1.16.100",
    "minecraft:item": {
        "description": {
            "identifier": "wiki:throwable_item"
        },
        "components": {
            "minecraft:max_stack_size": 16,
            "minecraft:on_use": {
                "on_use": {
                    "event": "throw"
                }
            },
            "minecraft:icon": {
                "texture": "apple"
            }
        },
        "events": {
            "throw": {
                "shoot": {
                    "projectile": "wiki:throwable_item_entity",
                    "launch_power": 2,
                    "angle_offset": 1
                },
                "swing": {},
                "decrement_stack": {},
                "run_command": {
                    "command": [
                        "playsound fire.ignite",
                        "playsound mob.witch.throw"
                    ]
                }
            }
        }
    }
}
```

We can notice several things here:

- `format_version` must be `1.16.100`
- `minecraft:on_use` will call an event every time the item is used (right-clicked)

In the event:

- `shoot` will shoot our entity
- `swing` will run the swing animation on the player
- `decrement_stack` will remove one item from the player's inventory
- `run_command` will execute commands when the item is shot, like playing sounds


### The Entity

The entity file is the same as the Stable version.

<Spoiler title="BP/entities/throwable_item_entity.se.json">

<CodeHeader>BP/entities/throwable_item_entity.se.json</CodeHeader>

```json
{
	"format_version": "1.16.0",
	"minecraft:entity": {
		"description": {
			"identifier": "wiki:throwable_item_entity",
			"is_spawnable": false,
			"is_summonable": true,
			"is_experimental": false,
                        "runtime_identifier": "minecraft:snowball"
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

</Spoiler>

## Conclusion

Once you have your throwable item you can start trying several things, like playing with its power, effects, animations or combining it with an [AOE Cloud](/entities/introduction-to-aec). The only limit is your imagination.
