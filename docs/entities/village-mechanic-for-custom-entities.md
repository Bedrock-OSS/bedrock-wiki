---
title: Village Mechanic for Custom Entities
mentions:
 - AeroForta
---

This article is for anyone who wanted to try imitate the village mechanic to their entities

**WARNING:**
This only tested in beta 1.17.20.20


## Basic Behavior

First let's start with some basic navigation behavior.

### Pathing
```
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
                            "stone",
                        ]
                    },
                    {
                        "cost":50,
                        "blocks":[
                            "bed",
                            "lectern",
                        ]
                    }
                ]
            }
Used by Villager
"max_fall_blocks" determine how much fall in block the entity allowed to do.
"jump_cost" adding cost for jumping, higher number make the entity unlikely to jump.
"default_block_cost" the cost for every block that's not on "preferred_path_blocks".
"preferred_path_blocks" specify the cost for specific block. Entities will always try to walk on the lowest cost block.

"minecraft:behavior.random_stroll":{
                "priority":9,
                "speed_multiplier":0.55,
                "xz_dist":10,
                "y_dist":5
            }
Allow the entity to do random walk. This behavior is used by both Villager and Iron Golem.
"xz_dist" how far the entity walk in horizontal.
"y_dist" how far the entity climb up like hills.

"minecraft:behavior.move_through_village": {
				"priority": 3,
				"speed_multiplier": 0.6,
				"only_at_night": true
			}
Make an entity to navigate around a village by creating a path to patrol. Used by Iron Golem

"minecraft:behavior.move_indoors":{
                "priority":5
            }
Allow an entity to entering a building and also take shelter when raining. Need open door capabilities

"minecraft:behavior.restrict_open_door" allows an entity to stay indoors while the sun is down.
```
### Door
```
"minecraft:annotation.open_door" use in pair with 
"minecraft:navigation.walk":{
                "can_pass_doors":true,
                "can_open_doors":true
            }
To allows an entity to to open doors, assuming that that flags set up for the component to use in navigation.

 "minecraft:behavior.open_door":{
                "priority":6,
                "close_door_after":true
  }
allows an entity to interact and open a door.
```
## The Mechanic

### Main Behavior(Important)
```
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
"dwelling_type" this probably only worked for vanilla structure such as Mansion and Ocean Monument. However not tested yet so is not recomended to change it
"dweller_role"(useable by custom entities):
  "inhabitant" allow an entity to claim a bed and bell thus allowing the use of  "minecraft:behavior.sleep", same as Villager
  "defender" same as Iron Golem but currently has no effect but probably for "minecraft:behavior.defend_village_target"
  "passive" same as Cat but currently has no effect
  "Hostile" same as Illager, Witch, Ravager but currently has no effect
"preferred_profession" allowing entity to select job site block. Like Leatherworker will select cauldron as their job site(this is optional for "minecraft:behavior.work")
"update_interval_base": 60 currently unknown
"update_interval_variant": 40 currently unknown
"can_find_poi" allow the entity to find point of interest. e.g. Job site
"can_migrate" currently not tested but it may allow entity to claim new bed and bell when get to far from the first village
"first_founding_reward" currently unknown.
```
### Sleep

**NOTE:**
require "dweller_role" set to be "inhabitant" also Make sure your entity already had sleep animation otherwise they will just standing still on the bed

```
"minecraft:behavior.sleep":{
                    "priority":4,
                    "goal_radius":1.5,
                    "speed_multiplier":0.6,
                    "sleep_collider_height":0.3,
                    "sleep_collider_width":1,
                    "sleep_y_offset":0.6,
                    "timeout_cooldown":10
}
"goal_radius" in which block the entity will jump to the bed
"sleep_collider_height" collision box for sleeping entity
"sleep_collider_width" collision box for sleeping entity
"sleep_y_offset" set how height entity position when sleep
"timeout_cooldown" currently unknown yet but possibly similar to Villager unable to create path to the bed
```
### Work

**NOTE:**
require "dweller_role" set to be "inhabitant" also if "preferred_profession" doesn't exist the entity will try to move to the closest any job site

```
"minecraft:behavior.work": {
		"priority": 4,
		"active_time": 250,
		"speed_multiplier": 0.5,
		"goal_cooldown": 200,
		"sound_delay_min": 100,
		"sound_delay_max": 200,
		"can_work_in_rain": true,
		"work_in_rain_tolerance": 1000,
		"on_arrival": {
			"event": "minecraft:resupply_trades",
			"target": "self"
		}
}
"active_time" the amount of ticks the entity will stay in their the work location
"goal_cooldown" the amount of ticks the goal will be on cooldown before it can be used again
"sound_delay_min" the min interval in which a sound will play
"sound_delay_max" the max interval in which a sound will play
"can_work_in_rain" allow entity to work while they exposed to rain
"work_in_rain_tolerance" how much the entity tolerance to work in rain before stop the working
"on_arrival" what events to trigger when the entity arrive on their job site
```
### Scheduler

Now you know everything about the mechanic, let's try put all of this together in "minecraft:scheduler"
First let's do something simple
Put sleep behavior in component group sleep then put work behavior in component group work like this:
```
"component_groups":{
            "work_schedule": {
		"minecraft:behavior.work": {
			"priority": 4,
			"active_time": 250,
			"speed_multiplier": 0.5,
			"goal_cooldown": 200,
			"sound_delay_min": 100,
			"sound_delay_max": 200,
			"can_work_in_rain": true,
			"work_in_rain_tolerance": 1000,
			"on_arrival": {
				"event": "minecraft:resupply_trades",
				"target": "self"
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
},
```
Next, try to make your entities sleep whole day then work only at night
The put the code in components

**NOTE:**
If you put the schedule in component group then you need to set the events "minecraft:entity_spawned" to add the component group

In components
It looks something like this:
```
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
},
```
The events section looks something like this:
```
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
```
Open your world spawn you custom entity then put bed and bell, you should see green particle.
Your entity will sleep from morning to evening then work all night. Use /time set 6000 or /time set 18000.
Based on "preferred_profession", when the entity work it will move to the claimed job site.

## Other
```
All of this is useable by custom entities
"minecraft:behavior.move_to_village" is used by Pillager this may keep the entity to stay in the village.
"minecraft:behavior.stroll_towards_village" is used by fox to seach a village and go there.
"minecraft:behavior.inspect_bookshelf" used by librarian villager allows an entity to look at and inspect a bookshelf.
"minecraft:behavior.explore_outskirts" allowing the entity to explore beyond the bounds of village(use schedule and component group to keep the entity return to the village)
"minecraft:behavior.defend_village_target" only use this on melee entity, cause ranged entity will accidentally shoot villager or any entity with inhabitant dwelling role thus make the ranged entity attack each other
```
