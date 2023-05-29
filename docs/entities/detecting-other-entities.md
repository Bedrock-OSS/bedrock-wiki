---
title: Detecting Other Entities
category: Tutorials
tags:
    - intermediate
mentions:
    - ANightDazingZoroark
    - SmokeyStack
    - MedicalJewel105
    - SirLich
    - Luthorius
    - TheItsNameless
---

You might have thought about making your entities fire an event when other entities are nearby. This article details the various known ways to do so.

## minecraft:entity_sensor

This is probably the most basic way to detect other entities. The main issues is it only accepts one entry and testing if the entity is out of range can be very tricky. Because it's an entity component, you can just place into your entity behavior file and edit the Minecraft filters. Here's a demonstration:

<CodeHeader>BP/entities/my_entity.json#components</CodeHeader>

```json
"minecraft:entity_sensor": {
    "sensor_range": 2.5, //this is for the radius in blocks it will detect other entities in
    "relative_range": false, //if true, the sensor range is additive on top of the entity's hitbox size
    "require_all": true, //if true, all nearby entities must pass the filter conditions for the event to send
    "minimum_count": 1, //minimum amount of entities required for the event to fire. by default, it's 1
    "maximum_count": 4, //maximum amount of entities required for the event to fire. by default it's -1, which means infinity
    "event_filters": { //you can put any filter you want here, the one that's being used in this example just detects players
        "test": "is_family",
        "subject": "other",
        "value": "player"
    },
    "event": "event:on_player_detected" //the event that fires when all the conditions in event_filters are met
}
```

## `/execute`

Using the new `/execute` command that has been introduced since 1.19.50, you can execute commands as long as another entity is nearby. 

This example you'll be following will make pigs say "oink oink" upon detecting players, though you can replace those with whatever you want. First of all, copy-paste these BP animations.

<CodeHeader>BP/animations/detection_animation.json</CodeHeader>

```json
{
        "format_version": "1.10.0",
        "animations": {
                "animation.pig.find_player": {
                        "animation_length": 0.05,
                        "loop": true,
                        "timeline": {
                                "0": [
                                        "/execute as @s if entity @e[type=player, r=4] run event entity @s wiki:player_detected"
                                ]
                        }
                },
                "animation.pig.find_no_player": {
                        "animation_length": 0.05,
                        "loop": true,
                        "timeline": {
                                "0": [
                                        "/execute as @s unless entity @e[type=player, r=4] run event entity @s wiki:no_player_detected"
                                ]
                        }
                }
        }
}
```

The first one is for detecting if the entity is present, and the other for detecting if the entity is not present. The events used in the `/event` part of the `/execute` commands can be used for adding a [dummy component](https://wiki.bedrock.dev/entities/dummy-components) or updating an [actor property](https://learn.microsoft.com/en-us/minecraft/creator/documents/introductiontoentityproperties).

Next of all, copy paste this BP animation controller. This assumes that you set up the `/event` parts of the `/execute` commands to add or remove `minecraft:is_sheared`. 

<CodeHeader>BP/animation_controllers/pig_animation_controllers.json</CodeHeader>

```json
{
        "format_version": "1.10.0",
        "animation_controllers": {
                "controller.animation.pig_find_player": {
                        "initial_state": "default",
                        "states": {
                                "default": {
                                        "animations": ["find_player"],
                                        "transitions": [
                                                {
                                                        "detected": "query.is_sheared"
                                                }
                                        ]
                                },
                                "detected": {
                                        "animations": ["find_no_player"],
                                        "transitions": [
                                                {
                                                        "default": "!query.is_sheared"
                                                }
                                        ],
                                        "on_entry": ["/say oink oink"]
                                }
                        }
                }
        }
}
```
Finally, copy-paste this snippet into the behavior file for the pig-like so. Make sure to insert this in `description`.

<CodeHeader>BP/entities/my_entity.json#description</CodeHeader>

```json
"animations": {
        "manage_find_player": "controller.animation.pig_find_player",
        "find_player": "animation.pig.find_player",
        "find_no_player": "animation.pig.find_no_player"
},
"scripts": {
    "animate": [
            "manage_find_player"
        ]
}
```

## Molang, BP Animations & Animation Controllers

The `for_each` function and `query.get_nearby_entities` or `query.get_nearby_entities_except_self` can also be used for detecting other entities. They are more effective than using `minecraft:entity_sensor` because they are better at detecting if the entity you want to detect goes away than with `minecraft:entity_sensor`. The only downside is that they're experimental.

Just like in the previous method we will make pigs say "oink oink" upon detecting players, though you can replace those with whatever you want. First of all, copy-paste this BP animation:

<CodeHeader>BP/animations/detection_animation.json</CodeHeader>

```json
{
	"format_version": "1.10.0",
	"animations": {
		"animation.pig.find_player": {
			"animation_length": 0.05,
			"loop": true,
			"timeline": {
				"0": [
					"v.x = 0.0; for_each(t.player, query.get_nearby_entities_except_self(16, 'minecraft:player'), { v.x = v.x + 1; }); return v.x > 0.0;"
				]
			}
		}
	}
}
```

The first parameter that `query.get_nearby_entities_except_self` needs to work is the radius in blocks it will detect other entities in. The other is the identifier of the mob you want to make it detect.

Now that's good and all, but on the off chance, you want to make the pig detect players with some attribute that can be detected with Molang, use this.

<CodeHeader>BP/animations/detection_animation.json</CodeHeader>

```json
{
	"format_version": "1.10.0",
	"animations": {
		"animation.pig.find_player": {
			"animation_length": 0.05,
			"loop": true,
			"timeline": {
				"0": [
					"v.x = 0.0; for_each(t.player, query.get_nearby_entities_except_self(2, 'minecraft:player'), { v.x = v.x + (t.player -> query.is_sheared); }); return v.x > 0.0;"
				]
			}
		}
	}
}
```

Next of all, copy paste this BP animation controller:

<CodeHeader>BP/animation_controllers/pig_animation_controllers.json</CodeHeader>

```json
{
	"format_version": "1.10.0",
	"animation_controllers": {
		"controller.animation.pig_find_player": {
			"initial_state": "default",
			"states": {
				"default": {
					"animations": ["find_player"],
					"transitions": [
						{
							"detected": "v.x > 0"
						}
					]
				},
				"detected": {
					"animations": ["find_player"],
					"transitions": [
						{
							"default": "v.x <= 0"
						}
					],
					"on_entry": ["/say oink oink"]
				}
			}
		}
	}
}
```

Finally, copy-paste this snippet into the behavior file for the pig-like so. Make sure to insert this in `description`.

<CodeHeader>BP/entities/my_entity.json#description</CodeHeader>

```json
"animations": {
	"manage_find_player": "controller.animation.pig_find_player",
	"find_player": "animation.pig.find_player"
},
"scripts": {
    "animate": [
	    "manage_find_player"
	]
}
```
