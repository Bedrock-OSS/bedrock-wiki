---
title: Entity Attack
---
# Overview

If you're making custom entities, chances are that you will want them to attack other entities. This page will cover the types of attack, their usages and advantages over one another.

## Dealing Damage
Entities can attack and casue damage to other entities through a multitude of different components and events. The amount of damage depends on many factors, such as the amount stated in `"damage": ...`, difficulty multiplier, [source](https://bedrock.dev/docs/stable/Addons#Entity%20Damage%20Source). It all makes a difference. Take into considderation the sources, as certain items in vanilla can protect from some, like armour enchantments, and you can also make mobs immune to specific sources.

The value defined can simply be a constant, or a string containing 2 numbers, for a range of possible values.

`"damage": 3` would result in 3 each time

`"damage": [ 2, 6 ]` would result in any intiger between 2 and 6


# Types of Attack
These are the currently known types of attack:

- [Melee](#melee)
- [Ranged](#ranged)
- [Area](#area)
- [Knockback Roar](#knockback-roar)

But first, it's important to know that generally, attacks require a way of knowwing *how* to attack another entity.


## Pathfinding
[Movement](/entities/entity-movement) is required in most cases, so that mobs can change the distance between themselves and a potential target.
Mobs will pathfind to it's prey through `minecraft:behavior.nearest_attackable_target`.

```
      "minecraft:behavior.nearest_attackable_target": {
        "must_see": true,                       //If true, potential target must be in mob's line of sight
        "reselect_targets": true,               //Allows mob to select new target, if one is closer than current
        "within_radius": 25.0,                  //Radius that potential target must be withing
        "must_see_forget_duration": 17.0,       //If "must_see" = true, time before forgetting target
        "entity_types": [
          {
            "filters": {                        //Entities to target. Will go into it below
              "test": "is_family",
              "subject": "other",
              "value": "player"
            },
            "max_dist": 48.0                    
          }
        ]
      }
```

some more text

table showing other things you can define

must_reach, persist_time, 

### Target selecting

Mobs find targets by using [filters](https://bedrock.dev/docs/stable/Entities#Filters) can be used to determine which entities are a valid target, through `test`, `subject`, `operator`, and `value`.

```
          "entity_types": [
            {
              "filters": {
                "any_of": [
                  { "test": "is_family", "subject": "other", "operator": "==", "value": "snow_golem" },
                  { "test": "is_family", "subject": "other", "operator": "==", "value": "iron_golem" }
                ]                //anything that is equal to either "snow_golem" or "iron_golem"
              },
              "max_dist": 24
            },
            {
              "filters": {
                "all_of": [
                  { "test": "is_family", "subject": "other", "operator": "==", "value": "player" },
                  { "test": "has_equiptment", "subject": "other", "domain": "head", "operator": "=!", "value": "turtle_helmet" }
                ]                //anything equal to player AND not wearing "turtle_helmet" on head
              },
              "max_dist": 24
            }
          ]
```
This would only target `snow_golem`s, `iron_golem`s, and `player`s that are **not** wearing `turtle_helmet`s. There are a lot of things you could do with `filters`.

Now lets take a look at the different attacks.

## Melee

text

```
      "wiki:melee_attack": {
        "minecraft:attack": {
          "damage": 3,
          "effect_name": "slowness",
	        "effect_duration": 20
        },
        "minecraft:behavior.melee_attack": {
          "priority": 3,
          "speed_multiplier": 1,
          "track_target": false,
          "require_complete_path": true
        }
      },
```
text

table

text

## Ranged

text

```
      "wiki:ranged_attack": {
        "minecraft:behavior.ranged_attack": {
          "priority": 0,
          "attack_interval_min": 1.0,
          "attack_interval_max": 3.0,
          "attack_radius": 15.0
        },
        "minecraft:shooter": {
          "def": "wiki:projectile"
        }
      }
```

text

table

crossbow

texttext

```
    "minecraft:behavior.charge_held_item": {
    	"priority": 3,
    	"items": [
      	"minecraft:arrow"
      ]
    }
```

text

## Area

text

```
      "minecraft:area_attack" : {
        "damage_range": 0.2,
        "damage_per_tick": 2,
        "cause": "contact",
        "entity_filter": {
           "any_of": [
            { "test": "is_family", "subject": "other", "value": "player" },
            { "test": "is_family", "subject": "other", "value": "monster" }
          ]
        }
      }
```
text

## Knockback Roar

teXt

```
      "wiki:roar": {
        "minecraft:behavior.knockback_roar":{
          "priority":2,
          "duration":0.7,
          "attack_time":0.2,
          "knockback_damage":1,
          "knockback_horizontal_strength":1,
          "knockback_vertical_strength":1,
          "knockback_range":5,
          "knockback_filters":{
            "test":"is_family",
            "subject":"other",
            "operator":"==",
            "value":"player"
          },
          "damage_filters":{
            "test":"is_family",
            "subject":"other",
            "operator":"==",
            "value":"player"
          },
          "on_roar_end":{
            "event":"wiki:other_event"
          },
          "cooldown_time":10
        }
      }
```

text something text disable knockback text block damage emulation text dummy entity

# More on Attacks

Entity Attacks don't have to be as simple as Mob being hostile towards X target, doing X attack, dealing X damage.

## Difficulty Dependant Attacks

Sometimes you may want your mob to be even more dangerous depending on game difficulty. Typically this is used to apply mob effects to targets . . . WIP

## Switching Modes

You can use events to make your mob only attack under specific circumstances, or swap between the different types of attack. This can be achieved through simple usage of [events](/entities/entity-events) and component groups. Two prime examples being `minecraft:environment_sensor` and `minecraft:target_nearby_sensor`. The two are pretty similar in regards of structure, difference being that one is for sensing environments and the other for testing for target distance.

### Attacks 

Compenent groups are required to define the different modes of attack, such as:

```
      "wiki:ranged_components": {
        "minecraft:shooter": {
          "def": "wiki:projectile"
        },
        "minecraft:behavior.ranged_attack": {
          "priority": 3,
          "attack_interval_min": 1.0,
          "attack_interval_max": 3.0,
          "attack_radius": 15.0
        }
      }
```
```
      "wiki:melee_components": {
        "minecraft:attack": {
          "damage": 6
        },
        "minecraft:behavior.melee_attack": {
          "priority": 3
        }
      }
```

Those are examples of your attack modes, but they are not the only ones you can use. `wiki:ranged_components` and `wiki:melee_components` are generic names for the components within them, they can have any name, but it's what's nested inside them that counts.

### Events

These compenent groups won't actually do anything by themselves. Another component group is required, and some events to add/remove the attack modes.

```
      "wiki:melee_swap": {    //When triggered, adds component group for ranged and removes melee component group
        "remove": {
          "component_groups": [
            "wiki:ranged_components"
          ]
        },
        "add": {
          "component_groups": [
            "wiki:melee_components"
          ]
        }
      }
```
```
      "wiki:ranged_swap": {   //When triggered, adds component froup for melee and removes ranged component group
        "remove": {
          "component_groups": [
            "wiki:melee_components"
          ]
        },
        "add": {
          "component_groups": [
            "wiki:ranged_components"
          ]
        }
      }
```
The events are effectively for just turning attack modes on and off, by adding and removing different component groups.

### Sensors

To trigger the events, another compenent group is used. Sensors are components that can trigger events when certain conditions are fulfilled. Here are 2 examples of different sensors:

- For sensing the distance between the mob and target
```
      "wiki:switcher_range": {
        "minecraft:target_nearby_sensor": {
          "inside_range": 4.0,
          "outside_range": 5.0,
          "must_see":  true,
          "on_inside_range": {           //when target is within 4 blocks range, trigger "wiki:melee_swap" event
            "event": "wiki:melee_swap",
            "target": "self"
          },
          "on_outside_range": {          //when target is beyond 5 blocks range, trigger "wiki:ranged_swap" event
            "event": "wiki:ranged_swap",
            "target": "self"
          }
        }
      }
```

- For sensing certain features of the environment of wich the mob is exposed to
```
      "wiki:switcher_environment": {
        "minecraft:environment_sensor": {
          "triggers": [
            {
              "filters": {              //When underwater, trigger "wiki:melee_swap" event
                "test": "is_underwater",
                "subject": "self",
                "operator": "==",
                "value": true
              },
              "event": "wiki:melee_swap"
            },
            {
              "filters": {              //When not underwater, trigger "wiki:ranged_swap" event
                "test": "is_underwater",
                "subject": "self",
                "operator": "==",
                "value": false
              },
              "event": "wiki:ranged_swap"
            }
          ]
        }
      }
```
This uses `Filters`, similar to how the [target is initially selected](#target-selecting).


:::tip
You aren't limited to just 2 attack types, you can have as many as you want! Just make sure to have the event's and sensors to compensate for them.
:::

## Other Methods

There are also alternative, indirect ways of making entieties "attack", such as spawning dummy entities that can cause damage and act as a "special attack", or placing dangerous blocks, and even applying mob effects. These can be achieved through the entitie's file in the "entities" folder, and also though [Animation Controllers](/docs/animation-controllers/animation-controllers-intro).

### Mob Effects

ways of applying examples

### Summon Dummy Entity

summoning, 

### Commands

/summon, /kill, /mobeffect, /tp,

### Animation Controllers (Behaviour Pack)

explaination on what it is and on why to use

# Visual Animations

Inside resource packs are where it is decided what animations are played and when. This requires Animations, for the visuals, Animation Controllers, for triggers, and a way of defining the animations and controllers to use in the entity's dedicated `mobname.json`.

## Animations

structure of animations, mention blockbench, that kinda stuff. Maybe a brief explaination on how to make them and some links

## Animation Controllers

explain how theyre used and structured

## Defining Them

show and explain how the animations and controllers for the mob to use are defined

## Additional Information

timers, molang queries, etc. 