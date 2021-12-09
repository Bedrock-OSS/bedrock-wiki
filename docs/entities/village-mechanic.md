---
title: Village Mechanic for Custom Entities
category: Tutorials
mention:
    - AeroForta
    - MedicalJewel105
---

This article is for anyone who wanted to try imitate the village mechanic for their entities

## Navigation Behavior

First let's start with some basic navigation behavior.

<CodeHeader></CodeHeader>

```json
"minecraft:preferred_path":{
    //Build the best path for entity walk
    "max_fall_blocks":1, //The entity will always try to fall 1 block when navigating through hills
    "jump_cost":5, //Jump cost defines how likely entity is going to jump. The higher the number, the less likely to jump
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
    "y_dist":5 //How far the entity walk up or down the hill
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

## Main Behavior

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
	"can_migrate": true, //Allows the entity to migrate like changing sleeping bed to the other village
	"first_founding_reward": 5
}
```

### Sleep

Requires "dweller_role" set to be "inhabitant" and make sure your entity already had sleep animation otherwise they will just standing still on the bed. Also this behavior doesn't have wake system like on the villager unless using damage sensor that will trigger the event for removing component group that contain this behavior.

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.sleep":{
    "priority":4,
    "goal_radius":1.5, //Radius, in which entity jumps to bed
    "speed_multiplier":0.6,
    "sleep_collider_height":0.3, //Collision for sleeping entity
    "sleep_collider_width":1, //Collision for sleeping entity
    "sleep_y_offset":0.6, //Sets at which height entity would sleep
    "timeout_cooldown":10, //Time in second before the goal reused after some failure like villager unable to reach the bed
    "cooldown_time":3 //Time before this goal active again
}
```

### Work

Requires "dweller_role" set to be "inhabitant" also if "preferred_profession" doesn't exist the entity will try to move to the closest any job site.

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
	"work_in_rain_tolerance": 1000, //How much entity would work in rain before stopping if  "can_work_in_rain": false
	"on_arrival": {
        //What events to trigger when entity arrives to its job site
		"event": "minecraft:resupply_trades",
		"target": "self"
	}
}
```

# <<<<<<< HEAD

### Gathering

Allowing the entity to gather.
Requires "dweller_role" set to be "inhabitant".

```json
"minecraft:behavior.mingle": {
  "priority": 4, //
  "speed_multiplier": 0.5, //Speed when move to the gathering
  "duration": 30, //How long the entity will gather with other
  "cooldown_time": 10, //Time in seconds the mob has to wait before using the goal again
  "mingle_partner_type": "my:custom_entity", //Must be the same entity identifier! if not, then the other entity will also need this behavior otherwise it won't worked
  "mingle_distance": 2.0 //Must be the same value if the mingle set for different entity!
}
```

> > > > > > > origin/wiki

### Scheduler

Now you know everything about needed mechanic, let's try to put all of this together in "minecraft:scheduler"
First let's do something simple:
Put sleep behavior in new component group then put work behavior in component group work like this.

<CodeHeader></CodeHeader>

```json
"component_groups":{
    "work_schedule":{ //this is the component group for work
        "minecraft:behavior.work":{ //this is the component for work
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
    "bed_schedule":{ //this is the component group for sleep
        "minecraft:behavior.sleep":{ //this is the component for sleep
            "priority":4,
            "goal_radius":1.5,
            "speed_multiplier":0.6,
            "sleep_collider_height":0.3,
            "sleep_collider_width":1,
            "sleep_y_offset":0.6,
            "timeout_cooldown":10
        }
    },
    "gather_schedule":{ //this is the component group for gather
        "minecraft:behavior.mingle":{ //this is the component for gather
            "priority": 5,
            "speed_multiplier": 0.8,
            "cooldown_time":10.0,
            "duration": 30.0,
            "mingle_dist": 1.5,
            "mingle_partner_type": "my:mob"
        }
    }
}
```

<<<<<<< HEAD

Next, try to make your entities sleep whole day then work only at night
The put the code in components
=======

> > > > > > > origin/wiki

Next, try to make your entities sleep whole day after gathering then work only at night
Then put the code in components.

If you put the schedule in component group then you need to set the events "minecraft:entity_spawned" to add the component group.

In components
It looks something like this:

<CodeHeader></CodeHeader>

```json
"minecraft:scheduler":{
    "min_delay_secs":0, //min delay before the event started
    "max_delay_secs":10, //max delay before the event started
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
            "event":"sleep" //this mean the entity will start the event "sleep" when time is same or more than 0(morning) and less than 12000(evening)
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
                        "value":20000
                    }
                ]
            },
            "event":"work" //this mean the entity will start the event "work" when time is same or more than 12000(evening) and less than 21000(between midnight and next morning)
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
            "event":"gather" //this mean the entity will start the event "gather" when time is same or more than 21000(between midnight and next morning) and less than 24000(morning)
        }
    ]
}
```

The events section looks something like this:

<CodeHeader></CodeHeader>

```json
"events":{
    "work":{ //event that started using the scheduler
        "remove":{
            "component_groups":[
                "bed_schedule",
                "gather_schedule" //component groups that removed when the event started
            ]
        },
        "add":{
            "component_groups":[
                "work_schedule" //component groups that added when the event started
            ]
        }
    },
    "sleep":{ //event that started using the scheduler
        "remove":{
            "component_groups":[
                "work_schedule",
                "gather_schedule" //component groups that removed when the event started
            ]
        },
        "add":{
            "component_groups":[
                "bed_schedule" //component groups that added when the event started
            ]
        }
    },
    "gather":{ //event that started using the scheduler
        "remove":{
            "component_groups":[
                "work_schedule",
                "bed_schedule" //component groups that removed when the event started
            ]
        },
        "add":{
            "component_groups":[
                "gather_schedule" //component groups that added when the event started
            ]
        }
    }
}
```

Open your world spawn you custom entity then put bed and bell, you should see green particle.

Your entity will sleep from morning to evening then work all night. Use /time set 6000(noon) or /time set 18000(midnight).

Based on "preferred_profession", when the entity work it will move to the claimed job site.

Always remember that sleeping, working, gathering doesn't properly working without the scheduler

## Other Behavior

<<<<<<< HEAD
All of this is useable by custom entities:
`"minecraft:behavior.move_to_village"` is used by Pillager this may keep the entity to stay in the village.
`"minecraft:behavior.stroll_towards_village"` is used by fox to seach a village and go there.
`"minecraft:behavior.inspect_bookshelf"` used by librarian villager allows an entity to look at and inspect a bookshelf.
`"minecraft:behavior.explore_outskirts"` allowing the entity to explore beyond the bounds of village(use schedule and component group to keep the entity return to the village)
`"minecraft:behavior.defend_village_target"` only use this on melee attack. Ranged attack can accidentally shoot any entity with inhabitant dwelling role making the ranged entity attack each other.
=======
All of this is useable by custom entities and have relation to the village or the villager:
| Behavior | Uses | Note |
| --------- | ------- | ------ |
| `"minecraft:behavior.defend_village_target"` | Allowing the entity to attack other entity that hurt the entity who had the "dweller_role": "inhabitant". | only use this on melee entity. Ranged entity can accidentally shoot and hurt any entity with "dweller_role": "inhabitant", making the other ranged entity attack the ranged entity that accidentally shoot or hurt it. |
| `"minecraft:behavior.explore_outskirts"` | Allowing the entity to explore beyond the bounds of village. | Use scheduler, otherwise the entity will staying outside the village. |
| `"minecraft:behavior.hide"` | Is used by villager to hide and stay at defined POI. | Currently, there is no documentation for the POI type thus I recommended not to change it other than "poi_type": "bed". |
| `"minecraft:behavior.inspect_bookshelf"` | Used by librarian villager allows an entity to look at and inspect a bookshelf. | Use scheduler, otherwise the entity will staying near the bookshelf. |
| `"minecraft:behavior.move_to_village"` | Used by Illager and also witch allows an entity to travel to a random x,y,z coordinate in a village. | - |
| `"minecraft:behavior.nap"` | Used by Fox to take a nap. | Similar with sleep but offer more flexibility also had built-in wake sytem by detecting specific entity. |

> > > > > > > origin/wiki
