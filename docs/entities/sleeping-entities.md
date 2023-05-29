---
title: Sleeping Entities
category: Tutorials
tags:
    - intermediate
mentions:
    - MedicalJewel105
    - SirLich
---

This tutorial will explain how to make entity sleep.

## Features

-   Entity sleeps during the night and wakes up at day time
-   Interaction with entity will wake it up and after a while it goes sleeping again
-   If entity is hurt, it wakes up

## Behavior Pack

In this section behavior pack components will be discussed.

### Components

Let's start with some basic components that you need to add to your entity.

<CodeHeader>BP/entities/sleeping_entity.json#components</CodeHeader>

```json
"minecraft:dweller": {
    "dwelling_type": "village",
    "dweller_role": "inhabitant",
    "can_find_poi": true
}
```

Undocumented, needed for entity to be able to sleep.

<CodeHeader>BP/entities/sleeping_entity.json#components</CodeHeader>

```json
"minecraft:environment_sensor": {
    "triggers": [
        {
            "filters": {
                "test": "is_daytime",
                "value": false
            },
            "event": "sleep"
        }
    ]
}
```

This component is required for entity understand when to sleep.
It runs event if it isn't day time.

:::warning
You need some basic navigation components for your entity be able to move to bed.
:::

### Component Groups

Now you need some component groups for your entity with some components.

<CodeHeader>BP/entities/sleeping_entity.json#component_groups</CodeHeader>

```json
"sleeping": {
    "minecraft:behavior.sleep": {
        "priority": 0,
        "goal_radius": 1.5,
        "speed_multiplier": 1.25,
        "sleep_collider_height": 0.3,
        "sleep_collider_width": 1,
        "sleep_y_offset": 0.6,
        "timeout_cooldown": 10
    },
    "minecraft:damage_sensor": {
        "triggers": {
            "on_damage": {
                "event": "wake_up"
            }
        }
    },
    "minecraft:environment_sensor": {
        "triggers": [
            {
                "filters": {
                    "test": "is_daytime",
                    "value": true
                },
                "event": "wake_up"
            }
        ]
    },
    "minecraft:interact": {
        "interactions": [
            {
                "on_interact": {
                    "filters": {
                        "all_of": [
                            {
                                "test": "is_family",
                                "subject": "other",
                                "value": "player"
                            }
                        ]
                    },
                    "event": "woken_up"
                }
            }
        ]
    }
}
```

-   minecraft:behavior.sleep

Determines sleep details, priority needs to be at `0` (the biggest weight).

-   minecraft:damage_sensor

Add it if you want your entity wake up if it is being attacked.

-   minecraft:environment_sensor

Runs `wake_up` event when it is day time.

-   minecraft:interact

This makes player to be able wake up entity without hurting it.

<CodeHeader>BP/entities/sleeping_entity.json#component_groups</CodeHeader>

```json
"sleep_timer": {
    "minecraft:timer": {
        "time": 15,
        "time_down_event": {
            "event": "sleep_again"
        }
    }
}
```

This component group is required because entity will sleep again after delay when woken up.

### Events

Here you will find all events that you need.
I don't really think it needs explanation.

<CodeHeader>BP/entities/sleeping_entity.json#events</CodeHeader>

```json
"sleep": {
    "add": {
        "component_groups": [
            "sleeping"
        ]
    }
},
"wake_up": {
    "remove": {
        "component_groups": [
            "sleeping"
        ]
    }
},
"woken_up": {
    "remove": {
        "component_groups": [
            "sleeping"
        ]
    },
    "add": {
        "component_groups": [
            "sleep_timer"
        ]
    }
},
"sleep_again": {
    "add": {
        "component_groups": [
            "sleeping"
        ]
    },
    "remove": {
        "component_groups": [
            "sleep_timer"
        ]
    }
}
```

## Resource Pack

Don't forget that you need to add sleeping animation and controller for it to your entity!

### Animation

Just copy/paste it.

<CodeHeader>RP/animations/sleeping_entity.animation.json</CodeHeader>

```json
{
	"format_version": "1.8.0",
	"animations": {
		"animation.sleeping_entity.sleep": {
			"loop": "hold_on_last_frame",
			"animation_length": 0.5,
			"bones": {
				"body": {
					"rotation": {
						"0.0": [0, 0, 0],
						"0.5": [-90, 0, 0]
					},
					"position": [0, 2, -15]
				}
			}
		}
	}
}
```

### Animation Controller

Again just copy/paste it if you need.

<CodeHeader>RP/animations_controllers/ac.sleeping_entity.sleep.json</CodeHeader>

```json
{
	"format_version": "1.10.0",
	"animation_controllers": {
		"controller.animation.sleeping_entity.sleep": {
			"initial_state": "default",
			"states": {
				"default": {
					"transitions": [
						{
							"sleep": "query.is_sleeping"
						}
					]
				},
				"sleep": {
					"animations": ["sleeping"],
					"transitions": [
						{
							"default": "!query.is_sleeping"
						}
					]
				}
			}
		}
	}
}
```

Note that you will need to define animation in client entity like this:

`"sleeping": "animation.sleeping_entity.sleep"`

## Result

![](/assets/images/tutorials/sleeping-entities/result.png)
