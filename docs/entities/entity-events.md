---
title: Entity Events
category: General
mentions:
    - ChibiMango
tags:
    - beginner
---

Entity events are one of the fundamental building blocks of behavior alongside components and component groups. They serve as the control center for component groups and can be called from components, animations, animation controllers, and other events. This page aims to cover how to call events within the entity and other entities as well as the format of an event.

## Event Layout

Events allow us to add and remove component groups from our entity allowing us to change the behavior of our entity when certain conditions are met. They are called events because we can activate them when events happen such as a timer running out, a player interacting with the entity or an environmental change occurring. When an event is activated it will read through the keys and determined whether to add or remove component groups.

An event can have six different keys which can add or remove component groups:
- add
- remove
- randomize
- sequence
- filters
- trigger

### Add/Remove

The most essential and common use of events is directly adding and/or removing component groups. These will almost always be used in your event and are used in conjunction with the other keys. The following event named `wiki:ranged_attacker` adds the two component groups "attacker" and "ranged" and removes the groups "standby" and "melee":

<CodeHeader></CodeHeader>

```json
"wiki:ranged_attacker":{
    "add":{
        "component_groups":[
            "attacker",
            "ranged"
        ]
    },
    "remove":{
        "component_groups":[
            "standby",
            "melee"
        ]
    }
}
```

:::tip
When you add a component group, if a currently active component group has the same component inside it, it will be overwritten by the group most recently added.
:::

### Randomize

Randomize is a parameter which can be used inside of an entity event to add or remove component groups based off weighted randomization. This is a very useful tool when different component groups should be added based on random chance.

The `minecraft:entity_spawned` event inside the cow uses randomize to give a 95% chance of the cow spawning as an adult and a 5% chance of spawning as a baby (component groups `minecraft:cow_adult` and `minecraft:cow_baby`).

<CodeHeader></CodeHeader>

```json
"minecraft:entity_spawned":{
    "randomize":[
        {
            "weight":95,
            "add":{
                "component_groups":[
                    "minecraft:cow_adult"
                ]
            }
        },
        {
            "weight":5,
            "add":{
                "component_groups":[
                    "minecraft:cow_baby"
                ]
            }
        }
    ]
}
```

Note that the `randomize` will only select one option out of the pool of options.

### Sequence/Filters

Sequence is a parameter which can be used inside of an entity event to add or remove component groups based on filters. Filters allow us to make conditional events which will only add/remove component groups if a condition is met. The `minecraft:convert_to_drowned` event inside the zombie uses the `sequence` parameter to add a different component group based on whether or not the zombie is a baby.

<CodeHeader></CodeHeader>

```json
"minecraft:convert_to_drowned":{
    "sequence":[
        {
            "filters":{
                "test":"has_component",
                "operator":"!=",
                "value":"minecraft:is_baby"
            },
            "add":{
                "component_groups":[
                    "minecraft:convert_to_drowned"
                ]
            },
            "remove":{
                "component_groups":[
                    "minecraft:start_drowned_transformation"
                ]
            }
        },
        {
            "filters":{
                "test":"has_component",
                "value":"minecraft:is_baby"
            },
            "add":{
                "component_groups":[
                    "minecraft:convert_to_baby_drowned"
                ]
            },
            "remove":{
                "component_groups":[
                    "minecraft:start_drowned_transformation"
                ]
            }
        }
    ]
}
```
Additionally, `sequence` allows us to run multiple parameters in sequence. It evaluates each section at a time and if valid, will apply it.

:::tip
Entries in a sequence are not exclusive; if a filter in one of them passes, it does not prevent the other entries from running. In the case above, there is no filter in the first entry and so it automatically runs. This does not stop the other entries from being checked and subsequently running if valid.
:::

Below is an extensive example of using the sequence to combine filters, randomizing and add & removing component groups:

<Spoiler title="Sequence Example">

This event is run when the entity is hit by a player or projectile. There is a 60% chance nothing will happen and a 40% chance an attack sequence will activate. This attack sequence chooses a random attack with weights determined both by the entity's current health (stronger attacks are given a higher chance when the entity is below half health) and the distance to the nearest player (ranged attacks have higher priority when the player is further away).

<CodeHeader></CodeHeader>

```json
"wiki:on_hit":{
    "randomize":[
        //60% chance nothing happens
        {
            "weight":60
        },
        //40% chance this entry is run
        {
            "weight":40,
            "sequence":[
                //runs separate event required for all attacks
                {
                    "trigger":"attack_event"
                },
                //runs if entity is not sheared (entity becomes sheared if under half health)
                {
                    "filters":{
                        "test":"has_component",
                        "operator":"!=",
                        "value":"minecraft:is_sheared"
                    },
                    "sequence":[
                        //runs if player is within 5 blocks
                        {
                            "filters":{
                                "test":"distance_to_nearest_player",
                                "operator":"<=",
                                "value":5.0
                            },
                            "randomize":[
                                {
                                    "weight":10,
                                    "add":{
                                        "component_groups":[
                                            "explode"
                                        ]
                                    }
                                },
                                {
                                    "weight":60,
                                    "add":{
                                        "component_groups":[
                                            "attack"
                                        ]
                                    }
                                },
                                {
                                    "weight":20,
                                    "add":{
                                        "component_groups":[
                                            "range_attack"
                                        ]
                                    }
                                },
                                {
                                    "weight":10
                                }
                            ]
                        },
                        //runs if player is farther than 5 blocks and entity still has a target
                        {
                            "filters":{
                                "all_of":[
                                    {
                                        "test":"distance_to_nearest_player",
                                        "operator":">",
                                        "value":5.0
                                    },
                                    {
                                        "test":"has_target",
                                        "operator":"equals",
                                        "value":true
                                    }
                                ]
                            },
                            "randomize":[
                                {
                                    "weight":30,
                                    "add":{
                                        "component_groups":[
                                            "attack"
                                        ]
                                    }
                                },
                                {
                                    "weight":60,
                                    "add":{
                                        "component_groups":[
                                            "range_attack"
                                        ]
                                    }
                                },
                                {
                                    "weight":10
                                }
                            ]
                        }
                    ]
                },
                //runs if entity is sheared (under half health)
                {
                    "filters":{
                        "test":"has_component",
                        "value":"minecraft:is_sheared"
                    },
                    "sequence":[
                        //runs if player is within 5 blocks
                        {
                            "filters":{
                                "test":"distance_to_nearest_player",
                                "operator":"<=",
                                "value":5.0
                            },
                            "randomize":[
                                {
                                    "weight":20,
                                    "add":{
                                        "component_groups":[
                                            "explode"
                                        ]
                                    }
                                },
                                {
                                    "weight":60,
                                    "add":{
                                        "component_groups":[
                                            "strong_attack"
                                        ]
                                    }
                                },
                                {
                                    "weight":20,
                                    "add":{
                                        "component_groups":[
                                            "strong_range_attack"
                                        ]
                                    }
                                }
                            ]
                        },
                        //runs if player is farther than 5 blocks and entity still has a target
                        {
                            "filters":{
                                "all_of":[
                                    {
                                        "test":"distance_to_nearest_player",
                                        "operator":">",
                                        "value":5.0
                                    },
                                    {
                                        "test":"has_target",
                                        "operator":"equals",
                                        "value":true
                                    }
                                ]
                            },
                            "randomize":[
                                {
                                    "weight":60,
                                    "add":{
                                        "component_groups":[
                                            "strong_range_attack"
                                        ]
                                    }
                                },
                                {
                                    "weight":40,
                                    "randomize":[
                                        {
                                            "weight":30,
                                            "trigger":"rapid_fire"
                                        },
                                        {
                                            "weight":70,
                                            "add":{
                                                "component_groups":[
                                                    "strong_blast"
                                                ]
                                            }
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

</Spoiler>


### Trigger

Trigger is a parameter which can be used inside of an entity event to run other events based on filters to a chosen target.
We can use this to trigger another event within the entity, and combining this with `sequence` can allow us to organize our events neatly.

We are also able to specify filters and a target for the event. The target parameter is discussed in depth later. If the following event is called by the `minecraft:interact` component, then if the entity interacted with has the family tag `pig`, it will run the event `wiki:interacted` in the player that interacted with the entity.

<CodeHeader></CodeHeader>

```json
"wiki:on_interact": {
    "trigger": {
        "filters": {
            "test": "is_family",
            "subject": "self",
            "value": "pig"
        },
        "event": "wiki:interacted",
        "target": "other"
    }
}
```
:::tip
Events are able to retain entity context from the component they were called in. For example, the if an event is triggered using a `minecraft:interact` component, we are able to apply the filter to the player who interacted with the entity. However, if the method that called the event does not have this context, using target will not work.
:::

Combining this with the sequence parameter, this allows us to run an event in multiple entities as long as there is a context for it. We discuss this more in the target section.

<CodeHeader></CodeHeader>

```json
"wiki:on_interact":{
    "sequence":[
        {
            "trigger": {
            "event": "wiki:interacted",
            "target": "other"
            }
        },
        {
            "trigger": {
            "event": "wiki:interacted_with",
            "target": "self"
            }
        }
    ]
}
```

## Calling Events

In order for an event to run we need to know to activate it, this is done by calling the event. There are five main ways to do this:
- within a component
- within an animation
- within an animation controller
- within another event
- using a command

Some components allow the player to call an event based on parameters set. Here we input the event we want to run when the parameters are met. For example, the `minecraft:environment_sensor` component is used in the zombie to call the event `minecraft:start_transforming` when the entity is underwater.

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

We are also able to run an event directly on the entity within animations and animation controllers.
This behavior-based animation is used to call the event `wiki:start_pouncing` after 10 seconds.

<CodeHeader></CodeHeader>

```json
"animation.entity.pounce_timer": {
    "timeline": {
        "10.0": "@s wiki:start_pouncing"
    },
    "animation_length": 10.1
}
```

This behavior-based animation controller is used to call the event `wiki:running` upon transition to the state "run".

<CodeHeader></CodeHeader>

```json
"controller.animation.entity.movement":{
    "initial_state":"walk",
    "states":{
        "walk":{
            "transitions":[
                {
                    "run":"query.is_sheared"
                }
            ]
        },
        "run":{
            "on_entry":[
                "@s wiki:running"
            ],
            "transitions":[
                {
                    "walk":"!query.is_sheared"
                }
            ]
        }
    }
}
```

Here the `@s` is used to apply the event onto the entities self. Animation controllers are incredibly powerful and can be used to create even more custom behavior, though they are more advanced. Check out our page [here](/animation-controllers/animation-controllers-intro) for more information

Within an event, as well as adding & removing component groups we can also `trigger` other events to occur.
This event inside the piglin calls the event `spawn_baby` from the event `minecraft:entity_born`.

<CodeHeader></CodeHeader>

```json
"minecraft:entity_born": {
  "trigger": "spawn_baby"
}
```

We can also use the command `/event` to activate an event on an entity. The following would add the component group `wiki:example` to all pigs.
`/event entity @e[type=minecraft:pig] wiki:example`.

### Calling Events in Other Entities

Some components, such as the damage sensor, can target entities other than "self" when calling events. One component in particular is specifically designed to call events in other entities: `minecraft:behavior.send_event`. We will discuss this component first.

The `minecraft:behavior.send_event` component is used inside the evoker to call an event named `wololo` inside any blue sheep within its activation range.

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.send_event":{
    "priority":3,
    "event_choices":[
        {
            "min_activation_range":0.0,
            "max_activation_range":16.0,
            "cooldown_time":5.0,
            "cast_duration":3.0,
            "particle_color":"#FFB38033",
            "weight":3,
            "filters":{
                "all_of":[
                    {
                        "test":"is_family",
                        "subject":"other",
                        "value":"sheep"
                    },
                    {
                        "test":"is_color",
                        "subject":"other",
                        "value":"blue"
                    }
                ]
            },
            "start_sound_event":"cast.spell",
            "sequence":[
                {
                    "base_delay":2.0,
                    "event":"wololo",
                    "sound_event":"prepare.wololo"
                }
            ]
        }
    ]
}
```


You can also call event when spawning entity. To do it, add `<my:event_name>` in the end of string that is in component that can summon entity.

<CodeHeader>BP/entities/zombie.json#component_groups/minecraft:convert_to_drowned</CodeHeader>

```json
"minecraft:transformation":{
    "into":"minecraft:drowned<minecraft:as_adult>",
    "transformation_sound":"convert_to_drowned",
    "drop_equipment":true,
    "delay":{
        "value":15
    }
}
```

### Targets

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

Some components have these `targets` and each has certain ones that can be used. For example, `minecraft:interact` can have the target as either `self` or `other` where other is the entity that interacted with the entity. All valid components should have `self` and `target` as options where target is the targeted entity.

### Built-in Events
In general, using the component groups from vanilla mobs will not work. For example, the `minecraft:convert_to_drowned` will not be called in your entity unless you use one of the methods above to call it. However, there are a few events that called automatically when the conditions are met:
-   `minecraft:entity_spawned` : called when the entity is spawned in. Useful for setting up initial component groups.
-   `minecraft:entity_born`    : called when the entity is spawned in through breeding.
-   `minecraft:entity_transformed` : called when another entity transforms into this one.
-   `minecraft:on_prime`        : called when the entity's fuse is lit and is ready to explode.

A good example of these in use is with the cow. This shows how we can always ensure the cow has either `minecraft:cow_adult` or `minecraft:cow_baby` as soon as it is spawned/transformed.

<CodeHeader>BP/entities/cow.json#events</CodeHeader>

```json
"events": {
    "minecraft:entity_spawned": {
        "randomize": [
            {
                "weight": 95,
                "add": {
                    "component_groups": ["minecraft:cow_adult"]
                }
            },
            {
                "weight": 5,
                "add": {
                    "component_groups": ["minecraft:cow_baby"]
                }
            }
    ]
    },
    "minecraft:entity_born": {
        "add": {
            "component_groups": ["minecraft:cow_baby"]
        }
    },
    "minecraft:entity_transformed": {
        "add": {
            "component_groups": ["minecraft:cow_adult"]
        }
    }
}
```
