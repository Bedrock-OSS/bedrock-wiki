---
layout: guide
title: Custom Item
parent: Beginners Guide
badge: 2
badge_color: guide
badge_justification: left
nav_order: 2
---

# Creating a custom Entity: Ghost

Last time you created a custom item for this custom entity to drop. This time you will create the Ghot itself, as promised

## Behavior code

Just like with items, the main files of a custom entity are its RP and BP files. We'll start with the latter in the `BP/entities/` folder:

<CodeHeader>BP/entities/ghost.json</CodeHeader>

```json
{
    "format_version": "1.16.0",
    "minecraft:entity": {
        "description": {
            "identifier": "wiki:ghost",
            "is_summonable": true,
            "is_spawnable": true,
            "is_experimental": false
        },
        "components": {
            "minecraft:type_family": {
                "family": [
                    "ghost",
                    "monster"
                ]
            },
            "minecraft:jump.static": {},
            "minecraft:can_climb": {},
            "minecraft:physics": {},
            "minecraft:movement.basic": {},
            "minecraft:loot": {
                "table": "loot_tables/entities/ghost.json"
            },
            "minecraft:health": {
                "value": 20,
                "max": 20
            },
            "minecraft:collision_box": {
                "width": 1,
                "height": 2
            },
            "minecraft:movement": {
                "value": 0.2
            },
            "minecraft:behavior.delayed_attack": {
                "priority": 0,
                "attack_once": false,
                "track_target": true,
                "require_complete_path": false,
                "random_stop_interval": 0,
                "reach_multiplier": 1.5,
                "speed_multiplier": 1,
                "attack_duration": 0.75,
                "hit_delay_pct": 0.5
            },
            "minecraft:navigation.walk": {
                "can_walk": true,
                "avoid_sun": true,
                "can_pass_doors": true,
                "can_open_doors": true
            },
            "minecraft:attack": {
                "damage": 3
            },
            "minecraft:behavior.random_look_around": {
                "priority": 7
            },
            "minecraft:behavior.hurt_by_target": {
                "priority": 1
            },
            "minecraft:behavior.nearest_attackable_target": {
                "priority": 2,
                "within_radius": 25,
                "reselect_targets": true,
                "entity_types": [
                    {
                        "filters": {
                            "any_of": [
                                {
                                    "test": "is_family",
                                    "subject": "other",
                                    "value": "player"
                                }
                            ]
                        },
                        "max_dist": 35
                    }
                ]
            },
            "minecraft:behavior.random_stroll": {
                "priority": 6,
                "speed_multiplier": 1
            },
            "minecraft:behavior.look_at_player": {
                "priority": 7,
                "look_distance": 6,
                "probability": 0.02
            }
        }
    }
}
```

- You can already recognize parts of the file syntax from the custom item creation, such as `"format_version"` and `"description"/"identifier"`. We use the same _namespace_ in all files of the pack, in our exmple case the namespace is `wiki`. The entity's _id_ is `ghost`.
- The other keys in `"description"` all take Booleans (`true` or`false`) as their values. These are: `"is_summonable"` (whether you can spawn the entity with a `/summon` command), `"is_spawnable"` (whether you can spawn one with a spawn egg or naturally) and `"is_experimental"` (whether you need to turn on [EX] (Experimental mode) in a world for this entity to exist). Set the options to `true`, `true` and `false` respectively. We do not need [EX].
- The next section is `"components"`. Again, just like with items, components define the main traits of an entity. Let's go over every single one in this example:
    - `"minecraft:type_family"` lists the _family tags_ of your custom entity. These are used to interact with other entities. For example, Wolves will attack all entities from the `sheep` and `cow` families, while Villagers will flee from entities from the `monster` family.
    - `"minecraft:jump.static"` (the entity's jumps are of the static type), `"minecraft:can_climb"` (the entity can climb blocks), `"minecraft:physics"` (the entity is affected by gravity), `"minecraft:movement.basic"` (the entity's moves using basic patterns) all take nothing but an empty object `{}` as their values. This is because simply having a _attribute_ listed will ALWAYS apply its traits to the entity.  There is a way to temporarily enable and disable attributes using _`component_groups`_ and _`events`_, but that's for later.
    - `"minecraft_loot"` references a file int he pack, `"loot_tables/entities/ghost.json"` under it's `"table"` key. That file defines what items the entity will drop upon death, and we will create it right after finishing the Ghost.
    - `"minecraft:health"` gives the Ghost 20 healthpoints, which are equivalent to 10 hearts in-game.
    - `"minecraft:collision_box"` defines the size of the mob's hitbox in blocks.
    - `"minecraft:movement"` is, of course, the movement speed.
    - `"minecraft:behavior.delayed_attack"` is a _behavior attribute_, which allos the entity to execute some behavior patterns like, in this case, attacking. Its most important options are:
        - `"priority"` is actually often seen in components. If a mob can execute two actions at the same time, the action with the lower beahvior integer will get picked. `0` means the action is always preferre over everything else.
        - You can look up the rest of the options on the official Documentation, [bedrock.dev/r/Entities](https://bedrock.dev/r/Entities)
    - `"minecraft:navigation.walk"` allows the mob to use its `"movement.basic"` goal and `"movement"` to navigate by walking. The options inside define if the mob should _avoid sun_, _pass doors_ and if it can _walk_ and _open doors_ itself.
    - `"minecraft:attack"`/`"damage"` defines the amount of damage the mob deals upon an attack
    - `"minecraft:behavior.random_look_around"` allows the mob to sometimes look around itself;
    - `"minecraft:behavior.hurt_by_target"` makes the entity to immediately choose the entity that damages/_hurts_ them as their target. For example, a Zombie Pilin will act this way. 
    - `"minecraft:behavior.nearest_attackable_target"` allows the mob to select targets itself (within the radius of 25) as a hostile mob. The `"filters"` in `"entity_type"` will make sure the target belongs to the `player` _family_ in out case, but you could also make it attack villagers, for example, by changing everything inside `"filters": {}` to 

    ```json
    "any_of": [
                {
                    "test": "is_family",
                    "subject": "other",
                    "value": "player"
                }
            ]
    ```

    - `"minecraft:behavior.random_stroll"` makes the entity stroll around sometmes;
    - And, finally, `"minecraft:behavior.look_at_player"` makes the entity follow the player with its head.

## Resource code

## Model, Texture and Animations