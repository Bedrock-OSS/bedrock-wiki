---
title: Detecting Other Entities
tags:
    - intermediate
---

At some point in time you might have thought about making your entities do things when in the vicinity of a nearby entity. This article details the various known ways to do so.

## Using `minecraft:entity_sensor`
This is probably the most basic way to detect other entities. The main issues are that it only accepts one entry, and detecting if the entity you want to detect goes away can be very tricky to say the least. Because it's an entity component, you can just plug it into your entity behavior file and plug in Minecraft filters. Here's a demonstration.

<CodeHeader></CodeHeader>

```json
"minecraft:entity_sensor": {
    "sensor_range": 2.5, //this is for the radius in blocks it will detect other entities in
    "relative_range": false, //if true, the sensor range is additive on top of the entity's hitbox size
    "require_all": true, //if true, all nearby entities must pass the filter conditions for the event to send
    "minimum_count": 1, //minimum amount of entities required for the event to fire. by default it's 1
    "maximum_count": 4, //maximum amount of entities required for the event to fire. by default it's -1, which means infinity
    "event_filters": { //you can put any filter you want here, the one that's being used in this example just detects players
        "test": "is_family",
        "subject": "other",
        "value": "player"
    },
    "event": "event:on_player_detected" //the event that fires when all the conditions in event_filters are met
}

```

## Using BP Animations & Animation Controllers
The `for_each` function and `query.get_nearby_entities` or `query.get_nearby_entities_except_self` can also be used for detecting other entities. They are more effective than using `minecraft:entity_sensor` because they are better at detecting if the entity you want to detect goes away than with `minecraft:entity_sensor`. The only downside is that they're experimental.

This example you'll be following will make pigs say "oink oink" upon detecting players, though you can replace those with whatever you want. First of all, copy paste this BP animation:

<CodeHeader>BP/animations/detection animation.json</CodeHeader>

```json
{
	"format_version": "1.10.0",
	"animations": {
		"animation.pig.find_player": {
			"animation_length": 0.05,
			"loop": true,
			"timeline": {
				"300": [
					"v.x = 0.0; for_each(t.player, query.get_nearby_entities_except_self(16, 'minecraft:player'), { v.x = v.x + 1; }); return v.x > 0.0;"
				]
			}
		}
    }
}
```

The first parameter that `query.get_nearby_entities_except_self` needs in order to work is the radius in blocks it will detect other entities in. The other is the identifier of the mob you want to make it detect.

Now that's good and all, but in the offchance you want to make the pig detect players with some attribute that can be detected with MoLang, use this.

<CodeHeader>BP/animations/detection animation.json</CodeHeader>

```json
{
	"format_version": "1.10.0",
	"animations": {
		"animation.pig.find_player": {
			"animation_length": 0.05,
			"loop": true,
			"timeline": {
				"300": [
					"v.x = 0.0; for_each(t.player, query.get_nearby_entities_except_self(2, 'minecraft:player'), { v.x = v.x + (t.player -> query.is_sheared); }); return v.x > 0.0;"
				]
			}
		}
    }
}
```

Next of all, copy paste this BP animation controller:

<CodeHeader>BP/animation_controllers/pig animation controllers.json</CodeHeader>

```json
{
    "format_version": "1.10.0",
    "animation_controllers": {
        "controller.animation.pig_find_player": {
            "initial_state": "default",
            "states": {
                "default": {
                    "animations": [
                        "animFindPlayer"
                    ],
                    "transitions": [
                        {
                            "detected": "v.x > 0"
                        }
                    ]
                },
                "detected": {
                    "animations": [
                        "animFindPlayer"
                    ],
                    "transitions": [
                        {
                            "default": "v.x <= 0"
                        }
                    ],
                    "on_entry": [
                        "/say oink oink"
                    ]
                }
            }
        }
    }
}
```

Finally, copy paste this snippet into the behavior file for the pig like so. Make sure to insert this in `description`.
```json
"animations": {
	"contFindPlayer": "controller.animation.pig_find_player",
	"animFindPlayer": "animation.pig.find_player"
},
"scripts": {
    "animate": [
	    "contFindPlayer"
	]
}
```