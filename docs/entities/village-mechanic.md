---
title: Village Mechanic
category: Tutorials
mention:
    - AeroForta
    - MedicalJewel105
---

This article is for anyone who wants to try imitate the village mechanic for their entities

## Navigation Behavior

First let's start with some basic navigation behavior.

<CodeHeader>BP/entities/custom_villager.json#components</CodeHeader>

```json
"minecraft:preferred_path":{
    "max_fall_blocks":1,
    "jump_cost":5,
    "default_block_cost":1.5,
    "preferred_path_blocks":[
        {
            "cost":0,
            "blocks":[
                "grass_path"
            ]
        },
        {
            "cost":1,
            "blocks":[
                "cobblestone",
                "stone"
            ]
        },
        {
            "cost":50,
            "blocks":[
                "bed",
                "lectern"
            ]
        }
    ]
}
```

Allows entity to do random walk.

<CodeHeader>BP/entities/custom_villager.json#components</CodeHeader>

```json
"minecraft:behavior.random_stroll":{
    "priority":9,
    "speed_multiplier":0.55,
    "xz_dist":10,
    "y_dist":5
}
```

Makes entity navigate around a village by creating a path to patrol. Used by Iron Golem.

<CodeHeader>BP/entities/custom_villager.json#components</CodeHeader>

```json
"minecraft:behavior.move_through_village": {
	"priority": 3,
	"speed_multiplier": 0.6,
	"only_at_night": true
}
```

Allows entity to enter a building and also take shelter when raining. Needs open door capabilities.

<CodeHeader>BP/entities/custom_villager.json#components</CodeHeader>

```json
"minecraft:behavior.move_indoors":{
    "priority":5
}
```

Makes entity stay indoors while sun is down.

<CodeHeader>BP/entities/custom_villager.json#components</CodeHeader>

```json
"minecraft:behavior.restrict_open_door":{
    "priority": 5
}
```

Use in pair with:

<CodeHeader>BP/entities/custom_villager.json#components</CodeHeader>

```json
"minecraft:annotation.open_door":{
    "priority": 5
}
```

<CodeHeader>BP/entities/custom_villager.json#components</CodeHeader>

```json
"minecraft:navigation.walk":{
    "can_pass_doors":true,
    "can_open_doors":true
}
```

<CodeHeader>BP/entities/custom_villager.json#components</CodeHeader>

```json
 "minecraft:behavior.open_door":{
    "priority":6,
    "close_door_after":true
}
```

## Main Behavior

<CodeHeader>BP/entities/custom_villager.json#components</CodeHeader>

```json
"minecraft:dweller": {
	"dwelling_type": "village",
	"dweller_role": "inhabitant",
	"preferred_profession": "farmer",
	"update_interval_base": 60,
	"update_interval_variant": 40,
	"can_find_poi": true,
	"can_migrate": true,
	"first_founding_reward": 5
}
```

- `dweller_role: inhabitant`
Allows entity claim a bed and bell.
`minecraft:behavior.sleep` needed.
- `preferred_profession: farmer`
Optional for `minecraft:behavior.work`
- `can_find_poi`
Add it so entity is able to find point of interest.
E.g. job site, bed.
- `can_migrate`
Defines if entity can migrate from one village to another or not.

### Sleep

You can find out how to make your entity sleep [here](/entities/sleeping-entities).

### Work

Requires "dweller_role" set to be "inhabitant" also if "preferred_profession" doesn't exist the entity will try to move to the closest any job site.

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.work": {
	"priority": 4,
	"active_time": 250,
	"speed_multiplier": 0.5,
	"goal_cooldown": 200,
	"sound_delay_min": 100,
	"sound_delay_max": 200,
	"can_work_in_rain": false,
	"work_in_rain_tolerance": 1000,
	"on_arrival": {
		"event": "minecraft:resupply_trades",
		"target": "self"
	}
}
```


### Gathering

Allows the entity to gather.
Requires "dweller_role" set to be "inhabitant".

```json
"minecraft:behavior.mingle": {
  "priority": 4,
  "speed_multiplier": 0.5,
  "duration": 30,
  "cooldown_time": 10,
  "mingle_partner_type": "my:custom_entity",
  "mingle_distance": 2.0
}
```


### Scheduler

Now you know everything about needed mechanic, let's try to put all of this together in "minecraft:scheduler"
First let's do something simple.
Put work behavior in component group work like this:

<CodeHeader></CodeHeader>

```json
"component_groups":{
    "work_schedule":{
        "minecraft:behavior.work":{
            "priority":4,
            "active_time":250,
            "speed_multiplier":0.5,
            "goal_cooldown":200,
            "sound_delay_min":100,
            "sound_delay_max":200,
            "can_work_in_rain":true,
            "work_in_rain_tolerance":1000,
            "on_arrival":{
                "event":"minecraft:resupply_trades",
                "target":"self"
            }
        }
    },
    "gather_schedule":{
        "minecraft:behavior.mingle":{
            "priority": 5,
            "speed_multiplier": 0.8,
            "cooldown_time":10.0,
            "duration": 30.0,
            "mingle_dist": 1.5,
            "mingle_partner_type": "my:custom_entity"
        }
    }
}
```

Next, make your entity work.

<CodeHeader></CodeHeader>

```json
"minecraft:scheduler":{
    "min_delay_secs":0,
    "max_delay_secs":10,
    "scheduled_events":[
        {
            "filters":{
                "all_of":[
                    {
                        "test":"hourly_clock_time",
                        "operator":">=",
                        "value":0 //Morning
                    },
                    {
                        "test":"hourly_clock_time",
                        "operator":"<",
                        "value":12000 //Evening
                    }
                ]
            },
            "event":"work"
        },
        {
            "filters":{
                "all_of":[
                    {
                        "test":"hourly_clock_time",
                        "operator":">=",
                        "value":21000
                    },
                    {
                        "test":"hourly_clock_time",
                        "operator":"<",
                        "value":24000
                    }
                ]
            },
            "event":"gather"
        }
    ]
}
```

The events section looks something like this:

<CodeHeader></CodeHeader>

```json
"events":{
    "work":{
        "remove":{
            "component_groups":[
                "gather_schedule"
            ]
        },
        "add":{
            "component_groups":[
                "work_schedule"
            ]
        }
    },
    "gather":{
        "remove":{
            "component_groups":[
                "work_schedule"
            ]
        },
        "add":{
            "component_groups":[
                "gather_schedule"
            ]
        }
    }
}
```

Open your world, spawn entity then put a bed and you should see green particle.

## Other Behavior

All of this is usable by custom entities:
- `minecraft:behavior.move_to_village`
Used by Pillager this may keep the entity to stay in the village.
- `minecraft:behavior.stroll_towards_village`
Used by fox to seach a village and go there.
- `minecraft:behavior.inspect_bookshelf`
Used by librarian villager allows an entity to look at and inspect a bookshelf.
- `minecraft:behavior.explore_outskirts`
Allows entity to explore beyond the bounds of village (use schedule and component group to keep the entity return to the village).
- `minecraft:behavior.defend_village_target`
Use this on melee attack. Ranged attack can accidently shoot any entity with inhabitant dwelling role.

All of this can be used by custom entities and have relation to villager or village:
| Behavior | Uses | Note |
| --------- | ------- | ------ |
| `minecraft:behavior.defend_village_target` | Allows entity to attack other entity that hurt the entity who had "dweller_role": "inhabitant". | Recommended to use only on entities with melee attack.|
| `minecraft:behavior.hide` | Used by villager to hide and stay at defined POI. | Currently, there is no documentation for the POI type that's why I recommend not to change `"poi_type": "bed"`. |
| `minecraft:behavior.move_to_village` | Used by Illager and also witch. Allows entity to travel to a random x,y,z coordinate in a village. | - |
| `"minecraft:behavior.nap"` | Used by Fox to take a nap. | Similar with sleep but offers more flexibility also has built-in wake up system by detecting specific entity. |