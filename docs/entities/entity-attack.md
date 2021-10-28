---
title: Entity Attack
---
# Overview

If you're making custom entities, chances are that you will want them to attack other entities. This page will cover the types of attack, their usages and advantages over one another.

## Dealing Damage
First things first. Entities can attack and casue damage to other entities through a multitude of different components and events. The amount of damage depends on many factors, such as the amount stated in `"damage": ...`, difficulty multiplier, [source](https://bedrock.dev/docs/stable/Addons#Entity%20Damage%20Source). It all makes a difference. Take into considderation the sources, as certain items in vanilla can protect from some, like armour enchantments, and you can also make mobs immune to specific sources.

The value defined can simply be a constant, or a string containing 2 numbers, for a range of possible values.

`"damage": 3` would result in 3 each time

`"damage": [ 2, 6 ]` would result in any intiger between 2 and 6

## Requirements
In order for a mob to attack a target, many things are required, such as pathfinding and targeting systems, othewise your entity will **not** be able to attack.

## Pathfinding
[Movement](https://wiki.bedrock.dev/entities/entity-movement.html) is required in most cases, so that mobs can change the distance between themselves and a potential target.
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

### Target selecting

Mobs find targets by using [filters](https://bedrock.dev/docs/stable/Entities#Filters) can be used to determine which entities are a valid target, through `test`s, `subject`s, `operator`s, and `values`.

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

# Types of Attack
WIP
These are the currently known types of attack:

- [Melee](#melee)
- [Ranged](#ranged)
- [Area](#area)
- [Knockback Roar](#knockback-roar)

## Melee
`minecraft:behavior.melee_attack` example, table, description
## Ranged
`minecraft:behavior.ranged_attack` example, table, description
## Area
`minecraft:area_attack` example, table, description
## Knockback Roar
`minecraft:behavior.knockback_roar` example, table, description


# More on Attacks



## Difficulty Dependant Attacks

Sometimes you may want your mob to be even more dangerous depending on game difficulty. Typically this is used to apply mob effects to targets WIP

## Switching Modes

You can use events to make your mob only attack under specific circumstances, or swap between the different types of attack. This can be achieved through simple usage of [events](https://wiki.bedrock.dev/entities/entity-events.html) and component groups. Two prime examples being `minecraft:environment_sensor` and `minecraft:target_nearby_sensor`. The two are pretty similar in regards of structure, difference being that one is for sensing environments and the other for testing for target distance.

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
      "wiki:melee_swap": {
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
      "wiki:ranged_swap": {
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

To trigger the events, another compenent group is used. Sensors . . . WIP

:::tip
You aren't limited to just 2 attack types, you can have as many as you want! Just make sure to have the event's and sensors to compensate for them.
:::
## Alternative Methods
WIP commands, mob effects, spawn, other