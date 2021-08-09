---
title: Entity Events
---

<Label color="green">Beginner</Label>

Entity events are one of the fundamental building blocks of behavior alongside components and component groups. They serve as the control center for component groups and can be called from components, animations, animation controllers, and other events. This tutorial aims to cover the basics of events and their more advanced usage.

## Basic Usage

This section covers the main feature of events and how to call them inside an entity.

### Adding/Removing Component Groups

The most essential and common use of events is directly adding and/or removing component groups. The following event named `shanewolf:ranged_attacker` adds the two component groups "attacker" and "ranged" and removes the groups "standby" and "melee".

<CodeHeader></CodeHeader>

```json
"shanewolf:ranged_attacker": {
  "add": {
    "component_groups": [ "attacker", "ranged" ]
  },
  "remove": {
    "component_groups": [ "standby", "melee" ]
  }
}
```

### Calling Events

Following are examples of calling an event on an entity using a component, an animation, an animation controller, and another event. Note that certain components can be used to call events on entities other than the entity within which the component exists, and this will be shown in the Advanced Usage section.

The `minecraft:environment_sensor` component is used in the zombie to call the event `minecraft:start_transforming` when the entity is underwater.

<CodeHeader></CodeHeader>

```json
"minecraft:environment_sensor": {
  "triggers": {
    "filters": {
      "test": "is_underwater",
      "operator": "==",
      "value": true
    },
    "event": "minecraft:start_transforming"
  }
}
```

This behavior-based animation is used to call the event `shanewolf:start_pouncing` after 10 seconds.

<CodeHeader></CodeHeader>

```json
"animation.entity.pounce_timer": {
  "timeline": {
    "10.0": "@s shanewolf:start_pouncing"
  },
  "animation_length": 15.0
}
```

This behavior-based animation controller is used to call the event `shanewolf:running` upon transition to the state "run".

<CodeHeader></CodeHeader>

```json
"controller.animation.entity.movement": {
  "initial_state": "walk",
  "states": {
    "walk": {
      "transitions": [ { "run": "query.is_sheared" } ]
    },
    "run": {
      "on_entry": [ "@s shanewolf:running" ],
      "transitions": [ { "walk": "!query.is_sheared" } ]
    }
  }
}
```

This event inside the piglin calls the event `spawn_baby` from the event `minecraft:entity_born`. This particular example does not showcase the most practical usage, but there will be better examples shown in the following section.

<CodeHeader></CodeHeader>

```json
"minecraft:entity_born": {
  "trigger": "spawn_baby"
}
```

## Advanced Usage

More complex and powerful usage of entity events consists of the `sequence` and `randomize` paramaters in addition to calling events on other entities.

### Calling Events on Other Entities

Some components, such as the damage sensor, can target entities other than "self" when calling events. One component in particular is specifically designed to call events in other entities: `minecraft:behavior.send_event`. Examples of each are shown below.

The component `minecraft:damage_sensor` inside the pillager calls the event `minecraft:gain_bad_omen` on the player which kills it. Note how the target of the event is set to "other".

<CodeHeader></CodeHeader>

```json
"minecraft:damage_sensor": {
  "triggers": {
    "on_damage": {
      "filters": {
        "all_of": [
          {
          "test": "has_damage",
          "value": "fatal"
          },
          {
          "test": "is_family",
          "subject": "other",
          "value": "player"
          }
        ]
      },
      "event": "minecraft:gain_bad_omen",
      "target": "other"
    }
  }
}
```

The `minecraft:behavior.send_event` component is used inside the evoker to call an event named `wololo` inside any blue sheep within its activation range.

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.send_event": {
  "priority": 3,
  "event_choices": [
    {
      "min_activation_range": 0.0,
      "max_activation_range": 16.0,
      "cooldown_time": 5.0,
      "cast_duration": 3.0,
      "particle_color": "#FFB38033",
      "weight": 3,
      "filters": {
        "all_of": [
          { "test" :  "is_family", "subject" : "other", "value" :  "sheep"},
          { "test" :  "is_color", "subject" : "other", "value" :  "blue"}
        ]
      },
      "start_sound_event": "cast.spell",
      "sequence": [
        {
          "base_delay": 2.0,
          "event": "wololo",
          "sound_event": "prepare.wololo"
        }
      ]
    }
  ]
}
```

### Sequence

Sequence is a parameter which can be used inside of an entity event to add or remove component groups based on filters. This is a very useful tool when different component groups should be dependent on varying conditions.

The `minecraft:convert_to_drowned` event inside the zombie uses the `sequence` parameter to add a different component group based on whether or not the zombie is a baby.

<CodeHeader></CodeHeader>

```json
"minecraft:convert_to_drowned": {
  "sequence": [
    {
      "filters": { "test": "has_component", "operator": "!=", "value": "minecraft:is_baby" },
      "add": { "component_groups": [ "minecraft:convert_to_drowned" ] },
      "remove": { "component_groups": [ "minecraft:start_drowned_transformation" ] }
    },
    {
      "filters": { "test": "has_component", "value": "minecraft:is_baby" },
      "add": { "component_groups": [ "minecraft:convert_to_baby_drowned" ] },
      "remove": { "component_groups": [ "minecraft:start_drowned_transformation" ] }
    }
  ]
}
```

In this particular case, it may be noted that both entries in the sequence remove the same component group. In practice, a more useful way to write this event may appear as follows:

<CodeHeader></CodeHeader>

```json
"minecraft:convert_to_drowned": {
  "sequence": [
    {
      "remove": { "component_groups": [ "minecraft:start_drowned_transformation" ] }
    },
    {
      "filters": { "test": "has_component", "operator": "!=", "value": "minecraft:is_baby" },
      "add": { "component_groups": [ "minecraft:convert_to_drowned" ] }
    },
    {
      "filters": { "test": "has_component", "value": "minecraft:is_baby" },
      "add": { "component_groups": [ "minecraft:convert_to_baby_drowned" ] }
    }
  ]
}
```

Note: Entries in a sequence are not exclusive; if a filter in one of them passes, it does not prevent the other entries from running. In the case above, there is no filter in the first entry and so it automatically runs. This does not stop the other entries from being checked and subsequently running if valid.

#### Randomize

Randomize is a parameter which can be used inside of an entity event to add or remove component groups based off weighted randomization. This is a very useful tool when different component groups should be added based on random chance.

The `minecraft:entity_spawned` event inside the cow uses randomize to give a 95% chance of the cow spawning as an adult and a 5% chance of spawning as a baby (component groups "minecraft:cow_adult" and "minecraft:cow_baby").

<CodeHeader></CodeHeader>

```json
"minecraft:entity_spawned": {
  "randomize": [
    {
      "weight": 95,
      "add": { "component_groups": [ "minecraft:cow_adult" ] }
    },
    {
      "weight": 5,
      "add": { "component_groups": [ "minecraft:cow_baby" ] }
    }
  ]
}
```

#### Sequence and Randomize Combination

The sequence and randomize parameters can be combined for more complex behavior inside an event. Below is an example which aims to be exhaustive in showing how these parameters can be combined and utilized.

This event is run when the entity is hit by a player or projectile. There is a 60% chance nothing will happen and a 40% chance an attack sequence will activate. This attack sequence chooses a random attack with weights determined both by the entity's current health (stronger attacks are given a higher chance when the entity is below half health) and the distance to the nearest player (ranged attacks have higher priority when the player is further away).

<CodeHeader></CodeHeader>

```json
"shanewolf:on_hit": {
  "randomize": [
    //60% chance nothing happens
    {
      "weight": 60
    },
    //40% chance this entry is run
    {
      "weight": 40,
      "sequence": [
        //runs separate event required for all attacks
        {
          "trigger": "attack_event"
        },
        //runs if entity is not sheared (entity becomes sheared if under half health)
        {
          "filters": { "test": "has_component", "operator": "!=", "value": "minecraft:is_sheared" },
          "sequence": [
            //runs if player is within 5 blocks
            {
              "filters": { "test": "distance_to_nearest_player", "operator": "<=", "value": 5.0 },
              "randomize": [
                {
                  "weight": 10,
                  "add": { "component_groups": [ "explode" ] }
                },
                {
                  "weight": 60
                  "add": { "component_groups": [ "attack" ] }
                },
                {
                  "weight": 20,
                  "add": { "component_groups": [ "range_attack" ] }
                },
                {
                  "weight": 10
                }
              ]
            },
            //runs if player is farther than 5 blocks and entity still has a target
            {
              "filters": {
                "all_of": [
                  { "test": "distance_to_nearest_player", "operator": ">", "value": 5.0 },
                  { "test": "has_target", "operator": "equals", "value": true }
                ]
              },
              "randomize": [
                {
                  "weight": 30,
                  "add": { "component_groups": [ "attack" ] }
                },
                {
                  "weight": 60,
                  "add": { "component_groups": [ "range_attack" ] }
                },
                {
                  "weight": 10
                }
              ]
            }
	  ]
        },
        //runs if entity is sheared (under half health)
        {
          "filters": { "test": "has_component", "value": "minecraft:is_sheared" },
          "sequence": [
            //runs if player is within 5 blocks
            {
              "filters": { "test": "distance_to_nearest_player", "operator": "<=", "value": 5.0 },
              "randomize": [
                {
                  "weight": 20,
                  "add": { "component_groups": [ "explode" ] }
                },
                {
                  "weight": 60,
                  "add": { "component_groups": [ "strong_attack" ] }
                },
                {
                  "weight": 20,
                  "add": { "component_groups": [ "strong_range_attack" ] }
                }
              ]
            },
            //runs if player is farther than 5 blocks and entity still has a target
            {
              "filters": {
                "all_of": [
                  { "test": "distance_to_nearest_player", "operator": ">", "value": 5.0 },
                  { "test": "has_target", "operator": "equals", "value": true }
                ]
              },
              "randomize": [
                {
                  "weight": 60,
                  "add": { "component_groups": [ "strong_range_attack" ] }
                },
                {
                  "weight": 40,
                  "randomize": [
                    {
                      "weight": 30,
                      "trigger": "rapid_fire"
                    },
                    {
                      "weight": 70,
                      "add": { "component_groups": [ "strong_blast" ] }
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}
```
