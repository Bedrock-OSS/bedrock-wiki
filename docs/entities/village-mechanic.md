---
title: Village Mechanic for Custom Entities
mention:
 - AeroForta
 - MedicalJewel105
---

This article is for anyone who wanted to try imitate the village mechanic for their entities

:::warning
Already tested in multiple minecraft version, both release and beta
:::

## Navigation Behavior

First let's start with some basic navigation behavior.

<CodeHeader></CodeHeader>

```json
"minecraft:preferred_path":{
    //Build the best path wor entity walk
    "max_fall_blocks":1, //Determine how much fall in block the entity allowed to do
    "jump_cost":5, //Jump cost defines how likely entity is going to jump, higher number make the entity unlikely to jump
    "default_block_cost":1.5, //Cost for every block that's not on "preferred_path_blocks"
    "preferred_path_blocks":[
        //Specifies cost for specific block. Entities will always try to walk on the lowest cost block
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

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.random_stroll":{
    //Allows entity to do random walk
    "priority":9,
    "speed_multiplier":0.55,
    "xz_dist":10, //How far the entity walk in horizontal
    "y_dist":5 //How far the entity climb up
}
```
<CodeHeader></CodeHeader>

```json
"minecraft:behavior.move_through_village": {
    //Makes entity navigate around a village by creating a path to patrol. Used by Iron Golem
	"priority": 3,
	"speed_multiplier": 0.6,
	"only_at_night": true
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.move_indoors":{
    //Allows entity to enter a building and also take shelter when raining. Needs open door capabilities
    "priority":5
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.restrict_open_door":{
    //Allows entity to stay indoors while the sun is down
    "priority": 5
}
```

Use in pair with:

<CodeHeader></CodeHeader>

```json
"minecraft:annotation.open_door":{
    "priority": 5
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:navigation.walk":{
    "can_pass_doors":true,
    "can_open_doors":true
}
```

<CodeHeader></CodeHeader>

```json
 "minecraft:behavior.open_door":{
    "priority":6,
    "close_door_after":true
}
```

### Main Behavior

<CodeHeader></CodeHeader>

```json
"minecraft:dweller": {
	"dwelling_type": "village", //This will probably only work for vanilla structures such as Mansion and Ocean Monument. However not tested yet so is not recomended to change it
	"dweller_role": "inhabitant",
    //"inhabitant" allow  entity to claim a bed and bell, "minecraft:behavior.sleep" needed
    //"defender" same as Iron Golem, currently has no effect but probably for "minecraft:behavior.defend_village_target"
    //"passive" same as Cat, currently has no effect
    //"Hostile" same as Illager, Witch, Ravager, currently has no effect
	"preferred_profession": "farmer", //Sets the most likely profession, optional for "minecraft:behavior.work"
	"update_interval_base": 60,
	"update_interval_variant": 40,
	"can_find_poi": true, //Allows the entity to find point of interest. e.g. Job site
	"can_migrate": true, //Not tested yet but it may allow entity to claim new bed and bell when get too far from the first village
	"first_founding_reward": 5
}
```
### Sleep

:::note
Requires "dweller_role" set to be "inhabitant" also Make sure your entity already had sleep animation otherwise they will just standing still on the bed.
:::

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.sleep":{
    "priority":4,
    "goal_radius":1.5, //Radius, in which entity jumps to bed
    "speed_multiplier":0.6,
    "sleep_collider_height":0.3, //Collision for sleeping entity
    "sleep_collider_width":1, //Collision for sleeping entity
    "sleep_y_offset":0.6, //Sets at which height entity would sleep
    "timeout_cooldown":10 //Unknown yet but possibly similar to Villager unable to create path to the bed
}
```

### Work

:::note
Requires "dweller_role" set to be "inhabitant" also if "preferred_profession" doesn't exist the entity will try to move to the closest any job site.
:::

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.work": {
	"priority": 4,
	"active_time": 250, //Amount of ticks the entity will stay at work location
	"speed_multiplier": 0.5,
	"goal_cooldown": 200, //Amount of ticks the goal will be on cooldown before it can be used again
	"sound_delay_min": 100, //Interval in which a sound will play
	"sound_delay_max": 200, //Interval in which a sound will play
	"can_work_in_rain": true,
	"work_in_rain_tolerance": 1000, //How much entity would work in rain before stopping
	"on_arrival": {
        //What events to trigger when entity arrives to its job site
		"event": "minecraft:resupply_trades",
		"target": "self"
	}
}
```
### Scheduler

Now you know everything about needed mechanic, let's try to put all of this together in "minecraft:scheduler"
First let's do something simple:
Put sleep behavior in new component group then put work behavior in component group work like this:

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
    "bed_schedule":{
        "minecraft:behavior.sleep":{
            "priority":4,
            "goal_radius":1.5,
            "speed_multiplier":0.6,
            "sleep_collider_height":0.3,
            "sleep_collider_width":1,
            "sleep_y_offset":0.6,
            "timeout_cooldown":10
        }
    }
}
```
Next, try to make your entities sleep whole day then work only at night
The put the code in components

:::note
If you put the schedule in component group then you need to set the events "minecraft:entity_spawned" to add the component group
:::

In components
It looks something like this:

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
                        "value":0
                    },
                    {
                        "test":"hourly_clock_time",
                        "operator":"<",
                        "value":12000
                    }
                ]
            },
            "event":"sleep"
        },
        {
            "filters":{
                "all_of":[
                    {
                        "test":"hourly_clock_time",
                        "operator":">=",
                        "value":12000
                    },
                    {
                        "test":"hourly_clock_time",
                        "operator":"<",
                        "value":24000
                    }
                ]
            },
            "event":"work"
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
                "bed_schedule"
            ]
        },
        "add":{
            "component_groups":[
                "work_schedule"
            ]
        }
    },
    "sleep":{
        "remove":{
            "component_groups":[
                "work_schedule"
            ]
        },
        "add":{
            "component_groups":[
                "bed_schedule"
            ]
        }
    }
}
```
Open your world spawn you custom entity then put bed and bell, you should see green particle.
Your entity will sleep from morning to evening then work all night. Use /time set 6000 or /time set 18000.
Based on "preferred_profession", when the entity work it will move to the claimed job site.

## Other Behavior
All of this is useable by custom entities:
`"minecraft:behavior.move_to_village"` is used by Pillager this may keep the entity to stay in the village.
`"minecraft:behavior.stroll_towards_village"` is used by fox to seach a village and go there.
`"minecraft:behavior.inspect_bookshelf"` used by librarian villager allows an entity to look at and inspect a bookshelf.
`"minecraft:behavior.explore_outskirts"` allowing the entity to explore beyond the bounds of village(use schedule and component group to keep the entity return to the village)
`"minecraft:behavior.defend_village_target"` only use this on melee attack, cause ranged attack will accidentally shoot villager or any entity with inhabitant dwelling role thus make the ranged entity attack each other
