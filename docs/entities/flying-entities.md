---
title: Riding Flying Entities
description: Learn how to make a flying entity controllable by the player.
category: Tutorials
tags:
    - intermediate
mentions:
    - SirLich
    - Joelant05
    - Dreamedc2015
    - MedicalJewel105
    - aexer0e
    - imsolucid
    - nebulacrab
    - Lufurrius
    - TheItsNameless
    - Halo333X
    - causal-guide
    - QuazChick
---

Whether making a plane or a dragon, adding controllability to flying entities has never been simpler!

## Input Air Controlled

This is the recommended way to allow a flying entity to be controlled and is used for the vanilla Happy Ghast.

By using the movement inputs on their device (such as WASD on Windows), the `minecraft:input_air_controlled` component causes the entity to move in 3D space in the direction the player is facing.
This component requires the entity to have a `minecraft:movement.hover` component or that the entity doesn't have gravity.

This currently also includes jumping to ascend.

<CodeHeader></CodeHeader>

```json
"minecraft:input_air_controlled": {
  "strafe_speed_modifier": 1,
  "backwards_movement_modifier": 0.5
}
```

### Applying Gravity when not Ridden

Only applying gravity when the entity is not being ridden allows the entity to fly when it is being ridden, while staying on the ground the rest of the time.

This can be achieved by using component groups!

#### Component Groups

<CodeHeader>minecraft:entity > component_groups</CodeHeader>

```json
// Enables gravity
"wiki:walking": {
    "minecraft:physics": {
        "has_gravity": true
    }
},
// Disables gravity
"wiki:flying": {
    "minecraft:physics": {
        "has_gravity": false
    },
    "minecraft:flying_speed": {
        "value": 0.08
    }
}
```

#### Components

<CodeHeader>minecraft:entity > components</CodeHeader>

```json
// Allows the entity to be controlled
"minecraft:input_air_controlled": {
    "strafe_speed_modifier": 1,
    "backwards_movement_modifier": 0.5
},
// Allows the entity to be ridden by players
"minecraft:rideable": {
    "seat_count": 1,
    "interact_text": "action.interact.ride.horse",
    "family_types": ["player"],
    "seats": {
        "position": [0.0, 0.63, 0.0]
    },
    "on_rider_enter_event": "wiki:start_flying",
    "on_rider_exit_event": "wiki:stop_flying"
},
// Disables fall damage
"minecraft:damage_sensor": {
    "triggers": {
        "cause": "fall",
        "deals_damage": "no"
    }
}
```

#### Events

<CodeHeader>minecraft:entity > events</CodeHeader>

```json
"wiki:start_flying": {
    "add": {
        "component_groups": ["wiki:flying"]
    },
    "remove": {
        "component_groups": ["wiki:walking"]
    }
},
"wiki:stop_flying": {
    "remove": {
        "component_groups": ["wiki:flying"]
    },
    "add": {
        "component_groups": ["wiki:walking"]
    }
}
```


## Great Jump, Slow Fall

While not exactly "flying", setting the entity's jumping power high and giving it slow falling & speed effects as it falls is probably the most straightforward method.

To achieve this, we will need to add the `"minecraft:horse.jump_strength"` component to our entity. Adding this will allow you to control its jumping power and disable dismounting when the player presses the jump button.

<CodeHeader></CodeHeader>

```json
"minecraft:horse.jump_strength": {
    "value": 7
}
```

We can also use `"value"` as an object to utilize the **range bar** players will see when holding down the jump button.

<CodeHeader></CodeHeader>

```json
"minecraft:horse.jump_strength": {
    "value": { "range_min": 0.6, "range_max": 1.2 }
}
```

Now we will give it slow falling and speed as it's falling so that it doesn't instantly fall. To do this, we will make an animation controller and give it those effects when it's not on the ground as so:

(You can read a tutorial on how to use animation controllers to execute commands [here](/animation-controllers/entity-commands).)

<CodeHeader></CodeHeader>

```json
"controller.animation.dragon.flying": {
    "states": {
        "default": {
            "transitions": [
                {
                    "jumping": "!q.is_on_ground"
                }
            ]
        },
        "jumping": {
            "transitions": [
                {
                    "default": "q.is_on_ground"
                }
            ],
            "on_entry": [
                "/effect @s slow_falling 20000 0 true",
                "/effect @s speed 20000 10 true"
            ],
            "on_exit": [
                "/effect @s clear"
            ]
        }
    }
}
```

We'll also need to hook it up to our entity as so:

<CodeHeader></CodeHeader>

```json
"description": {
    "identifier": "wiki:dragon",
    "is_spawnable": true,
    "is_summonable": true,
    "scripts": {
        "animate": [
            "flying"
        ]
    },
    "animations": {
        "flying": "controller.animation.dragon.flying"
    }
}
```

Now, we should have a mechanic at least resemblant of flying. You can change the values like jump_strength and speed, but the entity will always fall using this method.
