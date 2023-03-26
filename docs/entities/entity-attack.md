---
title: Entity Attacks
category: Tutorials
mention:
    - Luthorius
tags:
    - intermediate
---

Entity attacks are a complex subject that require many different things to work correctly:

-   Navigation and movement abilities to move towards its target
-   Targeting abilities to pick which entity to attack
-   Attack type, such as melee or ranged
-   Attack damage and effects

## Selecting Targets

### Movement

Before a mob can attack, it will need various [movement components](/entities/entity-movement).

Before starting to create your entity attacks, you should ensure that your entity can walk around, and navigate its surroundings.

:::warning
Even if you are making an unmoving entity (like turret), you still need to add navigation component, so your entity can find the entity to shoot.
:::

### Triggering Hostility

There are many ways to trigger hostility. The most common type `nearest_attackable_target`, is shown here. It generally allows you to define which entities this entity is interested in attacking:

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.nearest_attackable_target": {
  "must_see": true, //If true, potential target must be in mob's line of sight
  "reselect_targets": true, //Allows mob to select new target, if one is closer than current
  "within_radius": 25.0, //Radius that potential target must be withing
  "must_see_forget_duration": 17.0, //If "must_see" = true, time before forgetting target
  "entity_types": [
    {
      "filters": { //Entities to attack
        "test": "is_family",
        "subject": "other",
        "value": "player"
      },
      "max_dist": 48.0
    }
  ]
}
```

For more fine control, you may also consider using one of the following components:

| Component                                                | Note                                                         |
| -------------------------------------------------------- | ------------------------------------------------------------ |
| minecraft:behavior.nearest_attackable_target             | Targets entity meeting the given requirements                |
| minecraft:behavior.nearest_prioritized_attackable_target | Allows for "priority": [integer] to be set after each filter |
| minecraft:behavior.defend_trusted_target                 | Targets entity that hurts any entities specified in filters  |

But there is also one more - `minecraft:lookat`

This last component is slightly different to the other three, as it is for detecting and targeting entities that attempt eye contact. It is structured like so:

<CodeHeader>BP/entities/enderman.json</CodeHeader>

```json
"minecraft:lookat": {
  "search_radius": 64.0,
  "set_target": true, //Becomes a valid target if true
  "look_cooldown": 5.0,
  "filters": {
    "all_of": [
      {
        "subject": "other",
        "test": "is_family",
        "value": "player"
      },
      {
        "test": "has_equipment",
        "domain": "head",
        "subject": "other",
        "operator": "not",
        "value": "carved_pumpkin"  //All players not with carved_pumpkin equipped on head
      }
    ]
  }
}
```

### Target selecting

:::tip
This section shows you how to configure the "Targeting" components, explained above.
:::

Mobs find targets by using [filters](https://bedrock.dev/docs/stable/Entities#Filters) can be used to determine which entities are a valid target, through `test`, `subject`, `operator`, and `value`.

<CodeHeader></CodeHeader>

```json
"entity_types":[
    {
        "filters":{
            "any_of":[
                {
                    "test":"is_family",
                    "subject":"other",
                    "operator":"==",
                    "value":"snow_golem"
                },
                {
                    "test":"is_family",
                    "subject":"other",
                    "operator":"==",
                    "value":"iron_golem"
                }
                //anything that is equal to either" snow_golem" or "iron_golem"
            ]
        },
        "max_dist":24
    },
    {
        "filters":{
            "all_of":[
                {
                    "test":"is_family",
                    "subject":"other",
                    "operator":"==",
                    "value":"player"
                },
                {
                    "test":"has_equipment",
                    "subject":"other",
                    "domain":"head",
                    "operator":"=!",
                    "value":"turtle_helmet"
                }
                //anything equal to player AND not wearing "turtle_helmet" on head
            ]
        },
        "max_dist":24
    }
]
```

This would only target `snow_golem`s, `iron_golem`s, and `player`s that are **not** wearing `turtle_helmet`s.

## Types of Attack

Here are the available attacks:

| Component                                            | Note                                                     |
| ---------------------------------------------------- | -------------------------------------------------------- |
| [minecraft:behavior.melee_attack](#melee)            | Deals damage to a single target                          |
| [minecraft:behavior.ranged_attack](#ranged)          | Fires a projectile towards a target                      |
| [minecraft:area_attack](#area)                       | Effectively melee attacks on anything withing range      |
| [minecraft:behavior.knockback_roar](#knockback-roar) | Similar to minecraft:area_attack, but much more flexible |

### Melee

Melee attacks are the most common type of attack, they cause knockback, and have a 100% success rate at accuracy.

<CodeHeader></CodeHeader>

```json
"wiki:melee_attack": {
  "minecraft:attack": {
    "damage": 3,
    "effect_name": "slowness",
    "effect_duration": 20
  },
  "minecraft:behavior.melee_attack": {
    "priority": 3,
    "melee_fov": 90.0, //The allowable FOV the actor will use to determine if it can make a valid melee attack
    "speed_multiplier": 1,
    "track_target": false,
    "require_complete_path": true
  }
}
```

Set the damage, choose a mob effect, and change some additional properties.

The value defined in components stating integers of damage can simply be a constant, or a string containing 2 numbers, for a range of possible values.

`"damage": 3` would result in 3 each time

`"damage": [ 2, 6 ]` would result in any integer between 2 and 6

Both the mob effect and duration timer are optional, but when they are used, the available effects are as following:

| Effect Name     |
| --------------- |
| speed           |
| slowness        |
| haste           |
| mining_fatigue  |
| strength        |
| instant_health  |
| instant_damage  |
| jump_boost      |
| nausea          |
| regeneration    |
| resistance      |
| fire_resistance |
| water_breathing |
| invisibility    |
| blindness       |
| night_vision    |
| hunger          |
| weakness        |
| poison          |
| wither          |
| health_boost    |
| absorption      |
| saturation      |
| levitation      |
| fatal_poison    |
| slow_falling    |
| conduit_power   |
| bad_omen        |
| village_hero    |
| darkness        |

### Ranged

Fires specified [projectiles](/documentation/projectiles) towards target at set intervals.

<CodeHeader></CodeHeader>

```json
"wiki:ranged_attack": {
  "minecraft:behavior.ranged_attack": {
    "priority": 2,
    "ranged_fov": 90.0, //The allowable FOV the actor will use to determine if it can make a valid ranged attack
    "attack_interval_min": 1.0,
    "attack_interval_max": 3.0,
    "attack_radius": 15.0
  },
  "minecraft:shooter": {
    "def": "wiki:projectile"
  }
}
```

List of vanilla projectiles:

| Vanilla Projectiles              |
| -------------------------------- |
| minecraft:arrow                  |
| minecraft:dragon_fireball        |
| minecraft:egg                    |
| minecraft:ender_pearl            |
| minecraft:fireball               |
| minecraft:fishing_hook           |
| minecraft:lingering_potion       |
| minecraft:llama_spit             |
| minecraft:skulker_bullet         |
| minecraft:small_fireball         |
| minecraft:snowball               |
| minecraft:splash_potion          |
| minecraft:thrown_trident         |
| minecraft:wither_skull           |
| minecraft:wither_skull_dangerous |
| minecraft:xp_bottle              |

Only one item has an effect on an entity's ranged attacks. Crossbows. If one is equipped, it is first required for it to be "charged" before the entity can fire anything. Regardless of the projectile stated in `minecraft:shooter`, the item to charge the crossbow with should always be `minecraft:arrow`.

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.charge_held_item": {
  "priority": 2,
  "items": [
    "minecraft:arrow"
  ]
}
```

Once `minecraft:behavior.charge_held_item` has been achieved, the entity will be able to execute the process of `minecraft:behavior.ranged_attack`, and will then need to charge again.

### Area

These attacks damage all entities within a set radius. It is different to both ranged and melee in that this component doesn’t actually require a target. Regardless of the entities behaviour, _all_ entities will be affected by this. It appears to be similar to melee attacks, as it deals knockback in a similar manner, though dealing damage at a constant rate.

<CodeHeader></CodeHeader>

```json
"minecraft:area_attack" : {
  "damage_range": 1, //distance in blocks
  "damage_per_tick": 2,
  "cause": "contact",
  "entity_filter": {
     "any_of": [
      {
        "test": "is_family",
        "subject": "other",
        "value": "player"
      },
      {
        "test": "is_family",
        "subject": "other",
        "value": "monster"
      }
    ]
  }
}
```

[Entity damage sources](https://bedrock.dev/docs/stable/Addons#Entity%20Damage%20Source). It is important to take these into consideration, as certain items in vanilla can protect from some, like armour enchantments, and you can also make mobs immune to specific sources using `minecraft:damage_sensor`.

### Knockback Roar

Many similarities between this and `minecraft:area_attack`, this component though having much more flexibility.

<CodeHeader></CodeHeader>

```json
"wiki:roar_attack": {
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

This is more like a shockwave of damage. Extremely versatile in uses. Produces a particle effect, which can be disabled by adding a modified version of `knockback_roar.json` to a resource pack's particles folder.

## More on Attacks

Entity Attacks don't have to be as simple as Mob being hostile towards X target, doing X attack, dealing X damage.

### Difficulty Dependant Attacks

Express components and values to use for each difficulty.

<CodeHeader>BP/entities/bee.json</CodeHeader>

```json
"easy_attack": {
    "minecraft:attack": {
        "damage": 2
    }
},
"normal_attack": {
    "minecraft:attack": {
        "damage": 2,
        "effect_name": "poison",
        "effect_duration": 10
    }
},
"hard_attack": {
    "minecraft:attack": {
        "damage": 2,
        "effect_name": "poison",
        "effect_duration": 18
    }
}
```

### Switching Modes

You can use events to make your mob only attack under specific circumstances, or swap between the different types of attack. This can be achieved through simple usage of [events](/entities/entity-events) and component groups. Two prime examples being `minecraft:environment_sensor` and `minecraft:target_nearby_sensor`. The two are pretty similar in regards of structure, difference being that one is for sensing environments and the other for testing for target distance.

#### Attacks

Component groups are required to define the different modes of attack, such as:

<CodeHeader></CodeHeader>

```json
"wiki:ranged_components": {
  "minecraft:shooter": {
    "def": "wiki:projectile"
  },
  "minecraft:behavior.ranged_attack": {
    "priority": 3,
    "ranged_fov": 90.0,
    "attack_interval_min": 1.0,
    "attack_interval_max": 3.0,
    "attack_radius": 15.0
  }
}
```

<CodeHeader></CodeHeader>

```json
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

#### Events

These component groups won't actually do anything by themselves. Another component group is required, and some events to add/remove the attack modes.

<CodeHeader></CodeHeader>

```json
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

<CodeHeader></CodeHeader>

```json
"wiki:ranged_swap": {   //When triggered, adds component group for melee and removes ranged component group
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

#### Sensors

To trigger the events, another component group is used. Sensors are components that can trigger events when certain conditions are fulfilled. Here are 2 examples of different sensors:

-   For sensing the distance between the mob and target

<CodeHeader></CodeHeader>

```json
"wiki:switcher_range": {
  "minecraft:target_nearby_sensor": {
    "inside_range": 4.0,
    "outside_range": 5.0,
    "must_see":  true,
    "on_inside_range": { //When target is within 4 blocks range, trigger "wiki:melee_swap" event
      "event": "wiki:melee_swap",
      "target": "self"
    },
    "on_outside_range": { //When target is beyond 5 blocks range, trigger "wiki:ranged_swap" event
      "event": "wiki:ranged_swap",
      "target": "self"
    }
  }
}
```

-   For sensing certain features of the environment of which the mob is exposed to

<CodeHeader></CodeHeader>

```json
"wiki:switcher_environment": {
  "minecraft:environment_sensor": {
    "triggers": [
      {
        "filters": { //When underwater, trigger "wiki:melee_swap" event
          "test": "is_underwater",
          "subject": "self",
          "operator": "==",
          "value": true
        },
        "event": "wiki:melee_swap"
      },
      {
        "filters": { //When not underwater, trigger "wiki:ranged_swap" event
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

## Visual Animations

Attacks and animations go hand in hand. Within resource packs, the following 3 directories are required:

-   animations (entityname.animation.json)
-   animation_controllers (entityname.animation_controller.json)
-   entity (entityname.json)

Or as long as you know the names of vanilla animations and animation controllers, you can define them in the latter directory and folder.

### Animations

Animations are self explanatory. The files themselves contain all specific animations for the given entity. The recommended way to make animations is by using [blockbench](/guide/blockbench).

Though it is possible to create them in a simple text editor.

| Vanilla Attack Animations                    |
| -------------------------------------------- |
| "animation.zombie.attack_bare_hand"          |
| "animation.skeleton.attack.v1.0"             |
| "animation.humanoid.bow_and_arrow.v1.0"      |
| "animation.humanoid.damage_nearby_mobs.v1.0" |

A few examples of Animations. Locate /vanilla_resource_pack/animations for all of them.

### Animation Controllers

List of states that trigger animations.

| Vanilla Attack Animation Controllers           |
| ---------------------------------------------- |
| "controller.animation.zombie.attack_bare_hand" |
| "controller.animation.skeleton.attack"         |
| "controller.animation.humanoid.bow_and_arrow"  |
| "controller.animation.humanoid.attack"         |

A few examples of Animation Controllers. Locate /vanilla_resource_pack/animation_controllers for all of them

More information on animations can be found [here](https://bedrock.dev/docs/stable/Animations).
