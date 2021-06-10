---
title: Entity Commands
---

# Entity Commands

<Label color="yellow">Intermediate</Label>

A very common task is triggering slash commands (such as `/playsound`, or `/summon`) from inside Behavior Pack entities. This is a somewhat complicated topic, but once you get a handle on it, it isn't that bad!

# Animation Controllers

To trigger slash commands, we are going to use Behavior Pack animation controllers. Animation controllers should be placed like: `animation_controllers/some_controller.json`. You can [learn more about animation controllers on the entity events section of bedrock.dev](https://bedrock.dev/docs/stable/Entity%20Events).

In short, animation controllers allow us to trigger events from behavior packs.

-   Slash commands (like `/say`)
-   Molang
-   Entity Events (such as `namespace:my_event`)

Here is an example animation controller:

```json
{
	"format_version": "1.10.0",
	"animation_controllers": {
		"controller.animation.sirlich_entity_commands": {
			"states": {
				"default": {
					"transitions": [
						{
							"on_summon": "1" //1 evaluates as true
						}
					]
				},
				"on_summon": {
					"on_entry": ["/say I have been summoned"]
				}
			}
		}
	}
}
```

This animation controller will run the command `/say I have been summoned` as soon as the entity is summoned into the world. If you are confused about how this works, please review Molang, Animations, and Entity Events.

In short, there are `states`, which can trigger events in their `on_entry` clause. We use queries to move between different states. By default, entities will be inside of the `default` state.

::: warning
Queries are re-run when the world/chunk reloads. This means the line `"/say I have been summoned"` will actually run each time the entity "loads" -not only when it is summoned.
:::

If you need to stop this from happening, you need to add additional queries, such as a `skin_id` query. The first time the entity spawns, check for `skin_id = 0`, and then _also_ add some higher `skin_id`, such as `skin_id = 1`. Then, when the entity reloads, it won't be able to run those commands. This is shown further down in the document.

# Using Animation Controllers

To add this animation controller to our entity, we can use the following code in the entity definition description:

```json
"description": {
    "identifier": "sirlich:entity_commands",
    "scripts": {
        "animate": [
            "sirlich:entity_commands"
        ]
    },
    "animations": {
        "sirlich:entity_commands": "controller.animation.sirlich_entity_commands"
    }
}
```

Once again, if you are confused about any of this step, please review the Entity Events documentation.

# Triggering Commands using Events:

Animation transitions are created using queries. You can [read about queries here](https://bedrock.dev/docs/stable/MoLang#List%20of%20Entity%20Queries). In our first example, our query was simply `true`, which means the commands run automatically. We can use more complicate queries to create more interesting effect. A really convenient method is using components as Molang filters to trigger the commands.

I personally like using [skin_id](/entities/vanilla-usage-components#minecraft-skin-id).

We can update our animation controller to trigger based on `skin_id`:

```json
{
	"format_version": "1.10.0",
	"animation_controllers": {
		"controller.animation.sirlich_entity_commands": {
			"states": {
				"default": {
					"transitions": [
						{
							"command_example": "query.skin_id == 1"
						},
						{
							"zombies": "query.skin_id == 2"
						}
					]
				},
				"command_example": {
					"transitions": [
						{
							"default": "query.skin_id != 1"
						}
					],
					"on_entry": ["/say Command One!", "@s execute_no_commands"]
				},
				"zombies": {
					"transitions": [
						{
							"default": "query.skin_id != 2"
						}
					],
					"on_entry": [
						"/say AHH! Zombies everywhere!",
						"/summon minecraft:zombie",
						"/summon minecraft:zombie",
						"/summon minecraft:zombie",
						"/summon minecraft:zombie",
						"@s execute_no_commands"
					]
				}
			}
		}
	}
}
```

This animation controller has two command states now: The first is triggered by `skin_id = 1`, and the second by `skin_id = 2`. Note how I've added the `@s execute_no_commands` syntax at the end of each command list. We will create `execute_no_commands` later. It will allow us to set the skin_id back to 0, and re-use our commands.

The syntax is `@s` followed by the name of an entity event. This allows us to add/remove components from within the animation controller.

# Setting Component Groups

Back in our entity file, we can set the `skin_id` using the `skin_id` component.

The `skin_id` component looks like this:

```json
"minecraft:skin_id": {
    "value": 1
}
```

We can add component groups that contains skin_ids:

```json
"component_groups": {
    "execute_no_commands": {
        "minecraft:skin_id": {
            "value": 0
        }
    },
    "command_example": {
        "minecraft:skin_id": {
            "value": 1
        }
    },
    "command_zombies": {
        "minecraft:skin_id": {
            "value": 2
        }
    }
}
```

# Adding Events

Now lets create events so we can easily add these groups:

```json
"events": {
    "minecraft:entity_spawned": {
        "add": {
            "component_groups": [
                "execute_no_commands"
            ]
        }
    },
    "execute_no_commands": {
        "add": {
            "component_groups": [
                "execute_no_commands"
            ]
        }
    },
    "command_example": {
        "add": {
            "component_groups": [
                "command_example"
            ]
        }
    },
    "command_zombies": {
        "add": {
            "component_groups": [
                "command_zombies"
            ]
        }
    }
}
```

# Triggering Events

There are loads of ways to trigger events in Minecraft. Lets look at two specific examples:

## Interact Component:

This component will spawn zombies whenever you click on him.

```json
"minecraft:interact": {
    "interactions": [{
        "on_interact": {
            "filters": {
                "all_of": [{
                        "test": "is_family",
                        "subject": "other",
                        "value": "player"
                    }
                ]
            },
            "event": "command_zombies"
        }
    }]
}
```

## Timer

This component will trigger the example command every 10 seconds:

```json
"minecraft:timer": {
        "looping": true,
        "time": 1,
        "time_down_event": {
            "event": "example_command"
        }
    }
```

By adding these (and similar!) components to our entity, we can control when the `skin_id` changes, and therefor which events run.

# Review:

Here is how it all works:

-   Run `example_command` using a component like interact or timer.
-   This adds the `example_command` component group
-   This adds the `skin_id` component
-   This sets the entities `skin_id`, which can be queried in the animation controller
-   The animation controller notices this `skin_id`, and moves to the `example_command` state
-   The animation controller runs the `/say` command
-   The animation controller runs the entity event `@s execute_no_command`
-   `execute_no_command` event sets the `skin_id` to 0
-   The animation controllers sees this, and transitions to the default state
-   Now the animation controller waits for a new `skin_id`
