---
title: Disabling Team Damage
description: Learn how to disable damage between players that are in the same team.
category: Tutorials
tags:
    - intermediate
mentions:
    - SirLich
    - solvedDev
    - Joelant05
    - MedicalJewel105
    - Lufurrius
    - TCLynx
    - QuazChick
---

:::warning REALMS

This will NOT work on realms, the reason for this is that on realms there is a bug where modified `player.json` files in the behavior packs do not work, and the game just ignores them.

This may be fixed in the future but as of 1.20.15 it is not fixed. This also applies to older version of minecraft as well.

:::

## Damage from Players

If you wish to disable team damage (so one cannot hurt their teammates), assign a tag with the team name to every teammate (I'm going to use `team1`, `team2`, `team3` and `team4` for this example).

Now add this damage sensor component into your `player.json` `"components": {}`. See comments for explanation.

<CodeHeader>BP/entities/player.json > minecraft:entity > components</CodeHeader>

```json
"minecraft:damage_sensor": {
    "triggers": [
        {
            // If you already have a damage sensor, simply copy this object into the "triggers" array
            "on_damage": {
                "filters": {
                    "any_of": [
                        {
                            "all_of": [
                                { "test": "has_tag", "value": "team1" }, // Does the player have this tag?
                                { "test": "has_tag", "subject": "other", "value": "team1" } // If so, does the entity they're trying to hurt have this tag?
                            ]
                        },
                        {
                            "all_of": [
                                { "test": "has_tag", "value": "team2" }, // Repeated for every team
                                { "test": "has_tag", "subject": "other", "value": "team2" }
                            ]
                        },
                        {
                            "all_of": [
                                { "test": "has_tag", "value": "team3" },
                                { "test": "has_tag", "subject": "other", "value": "team3" }
                            ]
                        },
                        {
                            "all_of": [
                                { "test": "has_tag", "value": "team4" },
                                { "test": "has_tag", "subject": "other", "value": "team4" }
                            ]
                        },
                        {
                            "all_of": [
                                { "test": "has_tag", "value": "team5" },
                                { "test": "has_tag", "subject": "other", "value": "team5" }
                            ]
                        }
                    ]
                }
            },
            "deals_damage": "no" // If any of these filters evaluate to true in the current attack interaction, the target will not be hurt.
        }
    ]
}
```

## Damage from Projectiles

Due to the primitive filters used by projectile entities, you have to use a completely different method to achieve this.

The process uses:

-   Tags
-   Ticking
-   Hurt on condition
-   Functions

<CodeHeader>BP/entities/player.json</CodeHeader>

```json
"components": {
    "minecraft:timer": { // This is for applying teams to a projectile to nearby
        "time": [0, 0],  // untagged projectiles, through an event.
        "looping": true,
        "time_down_event": {
            "event": "wiki:projectile_team",
            "target": "self"
        }
    },
    "minecraft:hurt_on_condition": { // The projectile will be unable to directly deal
        "damage_conditions": [       // damage, so instead we'll apply tags to the
            {                        // player, which will trigger this...
                "filters": {
                    "test": "has_tag",
                    "value": "damage"
                },
                "cause": "projectile",
                "damage_per_tick": 4
            }
        ]
    },
    "minecraft:damage_sensor": {     // ...which in turn, will trigger an event
        "triggers": {                // to remove this tag, so the damage only
            "cause": "projectile",   // happens once.
            "deals_damage": true,
            "on_damage": {
                "filters": {
                    "test": "has_tag",
                    "value": "damage"
                },
                "event": "wiki:stop_damage"
            }
        }
    }
},
"events": {
    "wiki:projectile_team": {  // The function here will apply tags depending on
        "queue_command": {     // which team tags the player has.
            "command": ["function wiki-apply_team"]
        }
    },
    "wiki:stop_damage": {      // The event that simply removes the damage tag.
        "queue_command": {
            "command": ["tag @s remove damage"]
        }
    }
}
```

<CodeHeader>BP/functions/wiki-apply_team.mcfunction</CodeHeader>

```
execute as @s[tag=team1] at @s run tag @e[rm=0,r=1,c=1,type=arrow,tag=] add team1
execute as @s[tag=team2] at @s run tag @e[rm=0,r=1,c=1,type=arrow,tag=] add team2
execute as @s[tag=team3] at @s run tag @e[rm=0,r=1,c=1,type=arrow,tag=] add team3
execute as @s[tag=team4] at @s run tag @e[rm=0,r=1,c=1,type=arrow,tag=] add team4
```

<CodeHeader>BP/entities/arrow.json</CodeHeader>

```json
"components": {
    "minecraft:projectile": {
        "on_hit": {           // On hit, trigger an event...
           "definition_event": {
                "affect_projectile": true,
                "event_trigger": {
                    "event": "wiki:hit",
                    "target": "self"
                }
           },
           "remove_on_hit": {}
        }
    }
},
"events": {
    "wiki:hit": {            // ...which executes a function, applying
       "queue_command": {    // the damage tag to any players of a different team!
            "command": ["function wiki-apply_damage"]
       }
    }
}
```

<CodeHeader>BP/functions/wiki-apply_damage.mcfunction</CodeHeader>

```
execute as @s[tag=team1] at @s run tag @p[rm=0,r=1,tag=!team1] add damage
execute as @s[tag=team2] at @s run tag @p[rm=0,r=1,tag=!team2] add damage
execute as @s[tag=team3] at @s run tag @p[rm=0,r=1,tag=!team3] add damage
execute as @s[tag=team4] at @s run tag @p[rm=0,r=1,tag=!team4] add damage
```

If you modify `arrow.json`, take into consideration the component groups.
