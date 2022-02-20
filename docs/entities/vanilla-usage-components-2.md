---
title: Vanilla Usage Components 2
category: Documentation
---

## behavior.sneeze

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Abehavior.sneeze)</small>

<Spoiler title="Show">

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.sneeze": {
    "priority": 7,
    "probability": 0.0001666,
    "cooldown_time": 1.0,
    "within_radius": 10.0,
    "entity_types": [
        {
            "filters": {
                "all_of": [
                    {
                        "test": "has_component",
                        "subject": "other",
                        "operator": "!=",
                        "value": "minecraft:is_baby"
                    },
                    {
                        "test": "is_family",
                        "subject": "other",
                        "value": "panda"
                    },
                    {
                        "test": "in_water",
                        "subject": "other",
                        "operator": "!=",
                        "value": true
                    },
                    {
                        "test": "on_ground",
                        "operator": "==",
                        "value": true
                    }
                ]
            },
            "max_dist": 10
        }
    ],
    "drop_item_chance": 0.001,
    "loot_table": "loot_tables/entities/panda_sneeze.json",
    "prepare_sound": "presneeze",
    "prepare_time": 1.0,
    "sound": "sneeze"
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.sneeze": {
    "priority": 7,
    "probability": 0.002,
    "cooldown_time": 1.0,
    "within_radius": 10.0,
    "entity_types": [
        {
            "filters": {
                "all_of": [
                    {
                        "test": "has_component",
                        "subject": "other",
                        "operator": "!=",
                        "value": "minecraft:is_baby"
                    },
                    {
                        "test": "is_family",
                        "subject": "other",
                        "value": "panda"
                    },
                    {
                        "test": "in_water",
                        "subject": "other",
                        "operator": "!=",
                        "value": true
                    },
                    {
                        "test": "on_ground",
                        "operator": "==",
                        "value": true
                    }
                ]
            },
            "max_dist": 10
        }
    ],
    "drop_item_chance": 0.001,
    "loot_table": "loot_tables/entities/panda_sneeze.json",
    "prepare_sound": "presneeze",
    "prepare_time": 1.0,
    "sound": "sneeze"
}
```

</Spoiler>

## behavior.squid_dive

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Abehavior.squid_dive)</small>

<Spoiler title="Show">

#### glow_squid

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/glow_squid.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.squid_dive": {
    "priority": 2
}
```

#### squid

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/squid.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.squid_dive": {
    "priority": 2
}
```

</Spoiler>

## behavior.squid_flee

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Abehavior.squid_flee)</small>

<Spoiler title="Show">

#### glow_squid

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/glow_squid.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.squid_flee": {
    "priority": 2
}
```

#### squid

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/squid.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.squid_flee": {
    "priority": 2
}
```

</Spoiler>

## behavior.squid_idle

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Abehavior.squid_idle)</small>

<Spoiler title="Show">

#### glow_squid

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/glow_squid.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.squid_idle": {
    "priority": 2
}
```

#### squid

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/squid.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.squid_idle": {
    "priority": 2
}
```

</Spoiler>

## behavior.squid_move_away_from_ground

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Abehavior.squid_move_away_from_ground)</small>

<Spoiler title="Show">

#### glow_squid

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/glow_squid.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.squid_move_away_from_ground": {
    "priority": 1
}
```

#### squid

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/squid.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.squid_move_away_from_ground": {
    "priority": 1
}
```

</Spoiler>

## behavior.squid_out_of_water

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Abehavior.squid_out_of_water)</small>

<Spoiler title="Show">

#### glow_squid

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/glow_squid.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.squid_out_of_water": {
    "priority": 2
}
```

#### squid

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/squid.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.squid_out_of_water": {
    "priority": 2
}
```

</Spoiler>

## behavior.stalk_and_pounce_on_target

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Abehavior.stalk_and_pounce_on_target)</small>

<Spoiler title="Show">

#### fox

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/fox.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.stalk_and_pounce_on_target": {
    "priority": 7,
    "stalk_speed": 1.2,
    "max_stalk_dist": 12.0,
    "leap_height": 0.9,
    "leap_dist": 0.8,
    "pounce_max_dist": 5.0,
    "interest_time": 2.0,
    "stuck_time": 2.0,
    "strike_dist": 2.0,
    "stuck_blocks": {
        "test": "is_block",
        "subject": "block",
        "operator": "==",
        "value": "snow_layer"
    }
}
```

</Spoiler>

## behavior.stay_while_sitting

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Abehavior.stay_while_sitting)</small>

<Spoiler title="Show">

#### cat

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/cat.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.stay_while_sitting": {
    "priority": 3
}
```

#### ocelot

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/ocelot.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.stay_while_sitting": {
    "priority": 3
}
```

#### parrot

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/parrot.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.stay_while_sitting": {
    "priority": 1
}
```

#### wolf

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/wolf.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.stay_while_sitting": {
    "priority": 3
}
```

</Spoiler>

## behavior.stomp_attack

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Abehavior.stomp_attack)</small>

<Spoiler title="Show">

#### polar_bear

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/polar_bear.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.stomp_attack": {
    "priority": 1,
    "track_target": true,
    "require_complete_path": true,
    "stomp_range_multiplier": 2.0,
    "no_damage_range_multiplier": 2.0
}
```

</Spoiler>

## behavior.stomp_turtle_egg

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Abehavior.stomp_turtle_egg)</small>

<Spoiler title="Show">

#### drowned

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/drowned.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.stomp_turtle_egg": {
    "priority": 4,
    "speed_multiplier": 1,
    "search_range": 10,
    "search_height": 2,
    "goal_radius": 1.14,
    "interval": 20
}
```

#### husk

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/husk.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.stomp_turtle_egg": {
    "priority": 4,
    "speed_multiplier": 1,
    "search_range": 10,
    "search_height": 2,
    "goal_radius": 1.14,
    "interval": 20
}
```

#### zombie

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.stomp_turtle_egg": {
    "priority": 4,
    "speed_multiplier": 1,
    "search_range": 10,
    "search_height": 2,
    "goal_radius": 1.14,
    "interval": 20
}
```

#### zombie_pigman

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie_pigman.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.stomp_turtle_egg": {
    "priority": 5,
    "speed_multiplier": 1,
    "search_range": 10,
    "search_height": 2,
    "goal_radius": 1.14,
    "interval": 20
}
```

#### zombie_villager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie_villager.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.stomp_turtle_egg": {
    "priority": 4,
    "speed_multiplier": 1,
    "search_range": 10,
    "search_height": 2,
    "goal_radius": 1.14,
    "interval": 20
}
```

#### zombie_villager_v2

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie_villager_v2.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.stomp_turtle_egg": {
    "priority": 4,
    "speed_multiplier": 1,
    "search_range": 10,
    "search_height": 2,
    "goal_radius": 1.14,
    "interval": 20
}
```

</Spoiler>

## behavior.stroll_towards_village

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Abehavior.stroll_towards_village)</small>

<Spoiler title="Show">

#### fox

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/fox.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.stroll_towards_village": {
    "priority": 11,
    "speed_multiplier": 1.0,
    "goal_radius": 3.0,
    "cooldown_time": 10.0,
    "search_range": 32,
    "start_chance": 0.005
}
```

</Spoiler>

## behavior.summon_entity

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Abehavior.summon_entity)</small>

<Spoiler title="Show">

#### evocation_illager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/evocation_illager.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.summon_entity": {
    "priority": 2,
    "summon_choices": [
        {
            "min_activation_range": 0.0,
            "max_activation_range": 3.0,
            "cooldown_time": 5.0,
            "weight": 3,
            "cast_duration": 2.0,
            "particle_color": "#FF664D59",
            "start_sound_event": "cast.spell",
            "sequence": [
                {
                    "shape": "circle",
                    "target": "self",
                    "base_delay": 1.0,
                    "delay_per_summon": 0.0,
                    "num_entities_spawned": 5,
                    "entity_type": "minecraft:evocation_fang",
                    "size": 1.5,
                    "entity_lifespan": 1.1,
                    "sound_event": "prepare.attack"
                },
                {
                    "shape": "circle",
                    "target": "self",
                    "base_delay": 0.15,
                    "delay_per_summon": 0.0,
                    "num_entities_spawned": 8,
                    "entity_type": "minecraft:evocation_fang",
                    "size": 2.5,
                    "entity_lifespan": 1.1
                }
            ]
        },
        {
            "min_activation_range": 3.0,
            "weight": 3,
            "cooldown_time": 5.0,
            "cast_duration": 2.0,
            "particle_color": "#FF664D59",
            "start_sound_event": "cast.spell",
            "sequence": [
                {
                    "shape": "line",
                    "target": "self",
                    "base_delay": 1.0,
                    "delay_per_summon": 0.05,
                    "num_entities_spawned": 16,
                    "entity_type": "minecraft:evocation_fang",
                    "size": 20,
                    "entity_lifespan": 1.1
                }
            ]
        },
        {
            "weight": 1,
            "cooldown_time": 17.0,
            "cast_duration": 5.0,
            "particle_color": "#FFB3B3CC",
            "sequence": [
                {
                    "shape": "circle",
                    "target": "self",
                    "base_delay": 5.0,
                    "num_entities_spawned": 3,
                    "entity_type": "minecraft:vex",
                    "summon_cap": 8,
                    "summon_cap_radius": 16.0,
                    "size": 1.0,
                    "sound_event": "prepare.summon"
                }
            ]
        }
    ]
}
```

</Spoiler>

## behavior.swell

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Abehavior.swell)</small>

<Spoiler title="Show">

#### creeper

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/creeper.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.swell": {
    "start_distance": 2.5,
    "stop_distance": 6.0,
    "priority": 2
}
```

</Spoiler>

## behavior.swim_idle

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Abehavior.swim_idle)</small>

<Spoiler title="Show">

#### axolotl

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/axolotl.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.swim_idle": {
    "priority": 7,
    "idle_time": 5.0,
    "success_rate": 0.05
}
```

#### fish

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/fish.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.swim_idle": {
    "priority": 5,
    "idle_time": 5.0,
    "success_rate": 0.1
}
```

#### salmon

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/salmon.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.swim_idle": {
    "priority": 5,
    "idle_time": 5.0,
    "success_rate": 0.1
}
```

#### tropicalfish

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/tropicalfish.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.swim_idle": {
    "priority": 5,
    "idle_time": 5.0,
    "success_rate": 0.1
}
```

</Spoiler>

## behavior.swim_wander

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Abehavior.swim_wander)</small>

<Spoiler title="Show">

#### fish

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/fish.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.swim_wander": {
    "priority": 4,
    "interval": 0.1,
    "look_ahead": 2.0,
    "speed_multiplier": 1.0,
    "wander_time": 5.0
}
```

#### pufferfish

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/pufferfish.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.swim_wander": {
    "priority": 5,
    "interval": 1.0,
    "look_ahead": 2.0,
    "speed_multiplier": 1.0,
    "wander_time": 5.0
}
```

#### salmon

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/salmon.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.swim_wander": {
    "priority": 4,
    "interval": 0.0166,
    "look_ahead": 5.0,
    "speed_multiplier": 0.014,
    "wander_time": 5.0
}
```

#### tropicalfish

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/tropicalfish.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.swim_wander": {
    "priority": 4,
    "interval": 0.1,
    "look_ahead": 2.0,
    "speed_multiplier": 1.0,
    "wander_time": 5.0
}
```

</Spoiler>

## behavior.swim_with_entity

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Abehavior.swim_with_entity)</small>

<Spoiler title="Show">

#### dolphin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/dolphin.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.swim_with_entity": {
    "priority": 4,
    "success_rate": 0.1,
    "chance_to_stop": 0.0333,
    "state_check_interval": 0.5,
    "catch_up_threshold": 12.0,
    "match_direction_threshold": 2.0,
    "catch_up_multiplier": 2.5,
    "speed_multiplier": 1.5,
    "search_range": 20.0,
    "stop_distance": 5.0,
    "entity_types": [
        {
            "filters": {
                "test": "is_family",
                "subject": "other",
                "value": "player"
            }
        }
    ]
}
```

</Spoiler>

## behavior.swoop_attack

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Abehavior.swoop_attack)</small>

<Spoiler title="Show">

#### phantom

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/phantom.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.swoop_attack": {
    "priority": 2,
    "damage_reach": 0.2,
    "speed_multiplier": 1.0,
    "delay_range": [
        10.0,
        20.0
    ]
}
```

</Spoiler>

## behavior.take_flower

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Abehavior.take_flower)</small>

<Spoiler title="Show">

#### villager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/villager.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.take_flower": {
    "priority": 7
}
```

#### villager_v2

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/villager_v2.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.take_flower": {
    "priority": 9
}
```

</Spoiler>

## behavior.target_when_pushed

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Abehavior.target_when_pushed)</small>

<Spoiler title="Show">

#### iron_golem

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/iron_golem.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.target_when_pushed": {
    "priority": 1,
    "percent_chance": 5.0,
    "entity_types": [
        {
            "filters": {
                "all_of": [
                    {
                        "test": "is_family",
                        "subject": "other",
                        "value": "monster"
                    },
                    {
                        "test": "is_family",
                        "subject": "other",
                        "operator": "!=",
                        "value": "creeper"
                    }
                ]
            }
        }
    ]
}
```

</Spoiler>

## behavior.tempt

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Abehavior.tempt)</small>

<Spoiler title="Show">

#### axolotl

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/axolotl.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.tempt": {
    "priority": 2,
    "speed_multiplier": 1.1,
    "can_tempt_vertically": true,
    "items": [
        "tropical_fish_bucket"
    ]
}
```

#### bee

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/bee.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.tempt": {
    "priority": 5,
    "speed_multiplier": 1.25,
    "within_radius": 8,
    "can_tempt_vertically": true,
    "items": [
        "minecraft:red_flower",
        "minecraft:yellow_flower",
        "minecraft:wither_rose",
        "minecraft:double_plant:0",
        "minecraft:double_plant:1",
        "minecraft:double_plant:4",
        "minecraft:double_plant:5",
        "minecraft:flowering_azalea",
        "minecraft:azalea_leaves_flowered"
    ]
}
```

#### cat

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/cat.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.tempt": {
    "priority": 5,
    "speed_multiplier": 0.5,
    "within_radius": 16,
    "can_get_scared": true,
    "items": [
        "fish",
        "salmon"
    ]
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.tempt": {
    "priority": 5,
    "speed_multiplier": 0.5,
    "within_radius": 16,
    "items": [
        "fish",
        "salmon"
    ]
}
```

#### chicken

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/chicken.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.tempt": {
    "priority": 4,
    "speed_multiplier": 1.0,
    "items": [
        "wheat_seeds",
        "beetroot_seeds",
        "melon_seeds",
        "pumpkin_seeds"
    ]
}
```

#### cow

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/cow.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.tempt": {
    "priority": 4,
    "speed_multiplier": 1.25,
    "items": [
        "wheat"
    ]
}
```

#### donkey

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/donkey.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.tempt": {
    "priority": 5,
    "speed_multiplier": 1.2,
    "items": [
        "apple",
        "carrot",
        "golden_apple",
        "appleEnchanted",
        "golden_carrot",
        "carrotOnAStick",
        "hay_block",
        "sugar",
        "bread",
        "wheat"
    ]
}
```

#### fox

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/fox.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.tempt": {
    "priority": 3,
    "speed_multiplier": 0.5,
    "within_radius": 16,
    "can_get_scared": true,
    "items": [
        "sweet_berries",
        "glow_berries"
    ]
}
```

#### goat

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/goat.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.tempt": {
    "priority": 4,
    "speed_multiplier": 0.75,
    "items": [
        "wheat"
    ]
}
```

#### horse

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/horse.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.tempt": {
    "priority": 5,
    "speed_multiplier": 1.2,
    "items": [
        "golden_apple",
        "appleEnchanted",
        "golden_carrot"
    ]
}
```

#### mooshroom

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/mooshroom.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.tempt": {
    "priority": 4,
    "speed_multiplier": 1.25,
    "items": [
        "wheat"
    ]
}
```

#### mule

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/mule.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.tempt": {
    "priority": 5,
    "speed_multiplier": 1.2,
    "items": [
        "apple",
        "carrot",
        "golden_apple",
        "appleEnchanted",
        "golden_carrot",
        "carrotOnAStick",
        "hay_block",
        "sugar",
        "bread",
        "wheat"
    ]
}
```

#### ocelot

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/ocelot.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.tempt": {
    "priority": 4,
    "speed_multiplier": 0.5,
    "within_radius": 16,
    "can_get_scared": true,
    "items": [
        "fish",
        "salmon"
    ]
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.tempt": {
    "priority": 4,
    "speed_multiplier": 0.5,
    "within_radius": 16,
    "items": [
        "fish",
        "salmon"
    ]
}
```

#### panda

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/panda.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.tempt": {
    "priority": 4,
    "speed_multiplier": 1.25,
    "items": [
        "bamboo"
    ]
}
```

#### pig

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/pig.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.tempt": {
    "priority": 5,
    "speed_multiplier": 1.2,
    "items": [
        "potato",
        "carrot",
        "beetroot",
        "carrotOnAStick"
    ]
}
```

#### rabbit

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/rabbit.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.tempt": {
    "priority": 3,
    "speed_multiplier": 1,
    "items": [
        "golden_carrot",
        "carrot",
        "yellow_flower"
    ]
}
```

#### sheep

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/sheep.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.tempt": {
    "priority": 4,
    "speed_multiplier": 1.25,
    "items": [
        "wheat"
    ]
}
```

#### strider

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/strider.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.tempt": {
    "priority": 5,
    "speed_multiplier": 1.2,
    "items": [
        "warped_fungus",
        "warped_fungus_on_a_stick"
    ],
    "can_tempt_while_ridden": true,
    "tempt_sound": "tempt",
    "sound_interval": {
        "range_min": 2.0,
        "range_max": 5.0
    }
}
```

#### turtle

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/turtle.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.tempt": {
    "priority": 3,
    "speed_multiplier": 1.1,
    "items": [
        "seagrass"
    ]
}
```

</Spoiler>

## behavior.trade_interest

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Abehavior.trade_interest)</small>

<Spoiler title="Show">

#### villager_v2

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/villager_v2.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.trade_interest": {}
```

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.trade_interest": {
    "priority": 5,
    "within_radius": 6.0,
    "interest_time": 45.0,
    "remove_item_time": 1.0,
    "carried_item_switch_time": 2.0,
    "cooldown": 2.0
}
```

#### wandering_trader

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/wandering_trader.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.trade_interest": {
    "priority": 3,
    "within_radius": 6.0,
    "interest_time": 45.0,
    "remove_item_time": 1.0,
    "carried_item_switch_time": 2.0,
    "cooldown": 2.0
}
```

</Spoiler>

## behavior.trade_with_player

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Abehavior.trade_with_player)</small>

<Spoiler title="Show">

#### villager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/villager.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.trade_with_player": {
    "priority": 1
}
```

#### villager_v2

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/villager_v2.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.trade_with_player": {
    "priority": 2
}
```

#### wandering_trader

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/wandering_trader.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.trade_with_player": {
    "priority": 1
}
```

</Spoiler>

## behavior.wither_random_attack_pos_goal

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Abehavior.wither_random_attack_pos_goal)</small>

<Spoiler title="Show">

#### wither

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/wither.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.wither_random_attack_pos_goal": {
    "priority": 3
}
```

</Spoiler>

## behavior.wither_target_highest_damage

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Abehavior.wither_target_highest_damage)</small>

<Spoiler title="Show">

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.wither_target_highest_damage": {
    "priority": 1
}
```

</Spoiler>

## behavior.work

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Abehavior.work)</small>

<Spoiler title="Show">

#### villager_v2

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/villager_v2.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.work": {}
```

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.work": {
    "priority": 7,
    "active_time": 250,
    "speed_multiplier": 0.5,
    "goal_cooldown": 200,
    "sound_delay_min": 100,
    "sound_delay_max": 200,
    "can_work_in_rain": false,
    "work_in_rain_tolerance": 100,
    "on_arrival": {
        "event": "minecraft:resupply_trades",
        "target": "self"
    }
}
```

</Spoiler>

## block_climber

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Ablock_climber)</small>

<Spoiler title="Show">

#### endermite

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/endermite.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:block_climber": {}
```

#### fox

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/fox.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:block_climber": {}
```

#### player

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/player.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:block_climber": {}
```

#### rabbit

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/rabbit.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:block_climber": {}
```

#### silverfish

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/silverfish.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:block_climber": {}
```

</Spoiler>

## block_sensor

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Ablock_sensor)</small>

<Spoiler title="Show">

#### bee

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/bee.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:block_sensor": {
    "sensor_radius": 16,
    "on_break": [
        {
            "block_list": [
                "minecraft:beehive",
                "minecraft:bee_nest"
            ],
            "on_block_broken": "hive_destroyed"
        }
    ]
}
```

#### piglin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/piglin.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:block_sensor": {
    "sensor_radius": 16,
    "on_break": [
        {
            "block_list": [
                "minecraft:gold_block",
                "minecraft:gilded_blackstone",
                "minecraft:nether_gold_ore",
                "minecraft:deepslate_gold_ore",
                "minecraft:raw_gold_block",
                "minecraft:gold_ore",
                "minecraft:chest",
                "minecraft:trapped_chest",
                "minecraft:ender_chest",
                "minecraft:barrel",
                "minecraft:shulker_box",
                "minecraft:undyed_shulker_box"
            ],
            "on_block_broken": "important_block_destroyed_event"
        }
    ]
}
```

</Spoiler>

## boostable

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Aboostable)</small>

<Spoiler title="Show">

#### pig

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/pig.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:boostable": {
    "speed_multiplier": 2.0,
    "duration": 3.0,
    "boost_items": [
        {
            "item": "carrotOnAStick",
            "damage": 2,
            "replace_item": "fishing_rod"
        }
    ]
}
```

#### strider

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/strider.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:boostable": {
    "speed_multiplier": 2.0,
    "duration": 16.0,
    "boost_items": [
        {
            "item": "warped_fungus_on_a_stick",
            "damage": 1,
            "replace_item": "fishing_rod"
        }
    ]
}
```

</Spoiler>

## boss

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Aboss)</small>

<Spoiler title="Show">

#### ender_dragon

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/ender_dragon.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:boss": {
    "should_darken_sky": false,
    "hud_range": 125
}
```

#### wither

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/wither.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:boss": {
    "should_darken_sky": true,
    "hud_range": 55
}
```

</Spoiler>

## break_blocks

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Abreak_blocks)</small>

<Spoiler title="Show">

#### ravager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/ravager.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:break_blocks": {
    "breakable_blocks": [
        "bamboo",
        "bamboo_sapling",
        "beetroot",
        "brown_mushroom",
        "carrots",
        "carved_pumpkin",
        "chorus_flower",
        "chorus_plant",
        "deadbush",
        "double_plant",
        "leaves",
        "leaves2",
        "lit_pumpkin",
        "melon_block",
        "melon_stem",
        "potatoes",
        "pumpkin",
        "pumpkin_stem",
        "red_flower",
        "red_mushroom",
        "crimson_fungus",
        "warped_fungus",
        "reeds",
        "sapling",
        "snow_layer",
        "sweet_berry_bush",
        "tallgrass",
        "turtle_egg",
        "vine",
        "waterlily",
        "wheat",
        "yellow_flower"
    ]
}
```

</Spoiler>

## breathable

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Abreathable)</small>

<Spoiler title="Show">

#### axolotl

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/axolotl.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:breathable": {
    "total_supply": 15,
    "suffocate_time": 0,
    "breathes_water": true,
    "breathes_air": true,
    "generates_bubbles": false
}
```

#### bat

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/bat.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:breathable": {
    "total_supply": 15,
    "suffocate_time": 0
}
```

#### bee

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/bee.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:breathable": {
    "totalSupply": 15,
    "suffocateTime": 0
}
```

#### cat

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/cat.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:breathable": {
    "total_supply": 15,
    "suffocate_time": 0
}
```

#### cave_spider

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/cave_spider.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:breathable": {
    "total_supply": 15,
    "suffocate_time": 0
}
```

#### chicken

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/chicken.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:breathable": {
    "total_supply": 15,
    "suffocate_time": 0
}
```

#### cow

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/cow.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:breathable": {
    "total_supply": 15,
    "suffocate_time": 0
}
```

#### creeper

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/creeper.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:breathable": {
    "total_supply": 15,
    "suffocate_time": 0
}
```

#### dolphin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/dolphin.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:breathable": {
    "total_supply": 240,
    "suffocate_time": 0,
    "breathes_air": true,
    "breathes_water": false,
    "generates_bubbles": false
}
```

#### donkey

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/donkey.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:breathable": {
    "total_supply": 15,
    "suffocate_time": 0
}
```

#### drowned

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/drowned.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:breathable": {
    "total_supply": 15,
    "suffocate_time": 0,
    "breathes_air": true,
    "breathes_water": true
}
```

#### elder_guardian

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/elder_guardian.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:breathable": {
    "breathes_water": true
}
```

#### enderman

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/enderman.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:breathable": {
    "total_supply": 15,
    "suffocate_time": 0
}
```

#### endermite

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/endermite.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:breathable": {
    "total_supply": 15,
    "suffocate_time": 0
}
```

#### evocation_illager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/evocation_illager.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:breathable": {
    "total_supply": 15,
    "suffocate_time": 0
}
```

#### fish

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/fish.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:breathable": {
    "total_supply": 15,
    "suffocate_time": 0,
    "breathes_air": false,
    "breathes_water": true
}
```

#### fox

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/fox.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:breathable": {
    "totalSupply": 15,
    "suffocateTime": 0
}
```

#### ghast

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/ghast.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:breathable": {
    "total_supply": 15,
    "suffocate_time": 0
}
```

#### glow_squid

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/glow_squid.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:breathable": {
    "total_supply": 15,
    "suffocate_time": 0,
    "breathes_air": false,
    "breathes_water": true
}
```

#### goat

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/goat.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:breathable": {
    "total_supply": 15,
    "suffocate_time": 0
}
```

#### guardian

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/guardian.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:breathable": {
    "breathes_water": true
}
```

#### hoglin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/hoglin.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:breathable": {
    "total_supply": 15,
    "suffocate_time": 0
}
```

#### horse

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/horse.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:breathable": {
    "total_supply": 15,
    "suffocate_time": 0
}
```

#### husk

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/husk.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:breathable": {
    "total_supply": 15,
    "suffocate_time": 0,
    "breathes_water": true
}
```

#### llama

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/llama.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:breathable": {
    "total_supply": 15,
    "suffocate_time": 0
}
```

#### magma_cube

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/magma_cube.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:breathable": {
    "total_supply": 15,
    "suffocate_time": 0,
    "breathes_lava": true
}
```

#### mooshroom

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/mooshroom.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:breathable": {
    "total_supply": 15,
    "suffocate_time": 0
}
```

#### mule

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/mule.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:breathable": {
    "total_supply": 15,
    "suffocate_time": 0
}
```

#### ocelot

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/ocelot.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:breathable": {
    "total_supply": 15,
    "suffocate_time": 0
}
```

#### panda

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/panda.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:breathable": {
    "total_supply": 15,
    "suffocate_time": 0
}
```

#### parrot

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/parrot.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:breathable": {
    "total_supply": 15,
    "suffocate_time": 0
}
```

#### phantom

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/phantom.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:breathable": {
    "total_supply": 15,
    "suffocate_time": 0,
    "breathes_air": true,
    "breathes_water": false
}
```

#### pig

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/pig.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:breathable": {
    "total_supply": 15,
    "suffocate_time": 0
}
```

#### piglin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/piglin.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:breathable": {
    "total_supply": 15,
    "suffocate_time": 0
}
```

#### piglin_brute

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/piglin_brute.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:breathable": {
    "total_supply": 15,
    "suffocate_time": 0
}
```

#### pillager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/pillager.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:breathable": {
    "total_supply": 15,
    "suffocate_time": 0
}
```

#### player

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/player.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:breathable": {
    "total_supply": 15,
    "suffocate_time": -1,
    "inhale_time": 3.75,
    "generates_bubbles": false
}
```

#### polar_bear

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/polar_bear.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:breathable": {
    "total_supply": 15,
    "suffocate_time": 0
}
```

#### pufferfish

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/pufferfish.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:breathable": {
    "total_supply": 15,
    "suffocate_time": 0,
    "breathes_air": false,
    "breathes_water": true
}
```

#### rabbit

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/rabbit.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:breathable": {
    "total_supply": 15,
    "suffocate_time": 0
}
```

#### ravager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/ravager.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:breathable": {
    "suffocate_time": 0,
    "total_supply": 15
}
```

#### salmon

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/salmon.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:breathable": {
    "total_supply": 15,
    "suffocate_time": 0,
    "breathes_air": false,
    "breathes_water": true
}
```

#### sheep

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/sheep.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:breathable": {
    "total_supply": 15,
    "suffocate_time": 0
}
```

#### shulker

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/shulker.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:breathable": {
    "total_supply": 15,
    "suffocate_time": 0
}
```

#### silverfish

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/silverfish.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:breathable": {
    "total_supply": 15,
    "suffocate_time": 0
}
```

#### skeleton

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/skeleton.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:breathable": {
    "total_supply": 15,
    "suffocate_time": 0,
    "breathes_water": true
}
```

#### skeleton_horse

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/skeleton_horse.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:breathable": {
    "total_supply": 15,
    "suffocate_time": 0,
    "breathes_water": true
}
```

#### slime

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/slime.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:breathable": {
    "total_supply": 15,
    "suffocate_time": 0
}
```

#### snow_golem

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/snow_golem.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:breathable": {
    "total_supply": 15,
    "suffocate_time": 0
}
```

#### spider

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/spider.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:breathable": {
    "total_supply": 15,
    "suffocate_time": 0
}
```

#### squid

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/squid.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:breathable": {
    "total_supply": 15,
    "suffocate_time": 0,
    "breathes_air": false,
    "breathes_water": true
}
```

#### stray

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/stray.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:breathable": {
    "total_supply": 15,
    "suffocate_time": 0,
    "breathes_water": true
}
```

#### tropicalfish

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/tropicalfish.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:breathable": {
    "total_supply": 15,
    "suffocate_time": 0,
    "breathes_air": false,
    "breathes_water": true
}
```

#### turtle

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/turtle.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:breathable": {
    "total_supply": 15,
    "suffocate_time": 0,
    "breathes_water": true,
    "breathes_air": true,
    "generates_bubbles": false
}
```

#### villager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/villager.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:breathable": {
    "total_supply": 15,
    "suffocate_time": 0
}
```

#### villager_v2

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/villager_v2.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:breathable": {
    "total_supply": 15,
    "suffocate_time": 0
}
```

#### vindicator

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/vindicator.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:breathable": {
    "total_supply": 15,
    "suffocate_time": 0
}
```

#### wandering_trader

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/wandering_trader.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:breathable": {
    "total_supply": 15,
    "suffocate_time": 0
}
```

#### witch

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/witch.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:breathable": {
    "total_supply": 15,
    "suffocate_time": 0
}
```

#### wither

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/wither.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:breathable": {
    "total_supply": 15,
    "suffocate_time": 0
}
```

#### wither_skeleton

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/wither_skeleton.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:breathable": {
    "total_supply": 15,
    "suffocate_time": 0,
    "breathes_water": true
}
```

#### wolf

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/wolf.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:breathable": {
    "total_supply": 15,
    "suffocate_time": 0
}
```

#### zoglin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zoglin.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:breathable": {
    "total_supply": 15,
    "suffocate_time": 0,
    "breathes_water": true
}
```

#### zombie

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:breathable": {
    "total_supply": 15,
    "suffocate_time": 0,
    "breathes_air": true,
    "breathes_water": true
}
```

#### zombie_horse

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie_horse.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:breathable": {
    "total_supply": 15,
    "suffocate_time": 0,
    "breathes_water": true
}
```

#### zombie_pigman

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie_pigman.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:breathable": {
    "total_supply": 15,
    "suffocate_time": 0,
    "breathes_water": true
}
```

#### zombie_villager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie_villager.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:breathable": {
    "total_supply": 15,
    "suffocate_time": 0,
    "breathes_water": true
}
```

#### zombie_villager_v2

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie_villager_v2.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:breathable": {
    "total_supply": 15,
    "suffocate_time": 0,
    "breathes_water": true
}
```

</Spoiler>

## breedable

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Abreedable)</small>

<Spoiler title="Show">

#### axolotl

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/axolotl.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:breedable": {
    "require_tame": false,
    "breed_items": "tropical_fish_bucket",
    "transform_to_item": "water_bucket:0",
    "breeds_with": {
        "mate_type": "minecraft:axolotl",
        "baby_type": "minecraft:axolotl",
        "breed_event": {
            "event": "minecraft:entity_born",
            "target": "baby"
        }
    },
    "mutation_factor": {
        "variant": 0.00083
    }
}
```

#### bee

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/bee.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:breedable": {
    "require_tame": false,
    "breeds_with": {
        "mate_type": "minecraft:bee",
        "baby_type": "minecraft:bee",
        "breed_event": {
            "event": "minecraft:entity_born",
            "target": "baby"
        }
    },
    "breed_items": [
        "minecraft:red_flower",
        "minecraft:yellow_flower",
        "minecraft:wither_rose",
        "minecraft:double_plant:0",
        "minecraft:double_plant:1",
        "minecraft:double_plant:4",
        "minecraft:double_plant:5",
        "minecraft:flowering_azalea",
        "minecraft:azalea_leaves_flowered"
    ]
}
```

#### cat

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/cat.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:breedable": {
    "require_tame": true,
    "require_full_health": true,
    "allow_sitting": true,
    "breeds_with": {
        "mate_type": "minecraft:cat",
        "baby_type": "minecraft:cat",
        "breed_event": {
            "event": "minecraft:entity_born",
            "target": "baby"
        }
    },
    "breed_items": [
        "fish",
        "salmon"
    ]
}
```

#### chicken

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/chicken.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:breedable": {
    "require_tame": false,
    "breeds_with": {
        "mate_type": "minecraft:chicken",
        "baby_type": "minecraft:chicken",
        "breed_event": {
            "event": "minecraft:entity_born",
            "target": "baby"
        }
    },
    "breed_items": [
        "wheat_seeds",
        "beetroot_seeds",
        "melon_seeds",
        "pumpkin_seeds"
    ]
}
```

#### cow

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/cow.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:breedable": {
    "require_tame": false,
    "breed_items": "wheat",
    "breeds_with": {
        "mate_type": "minecraft:cow",
        "baby_type": "minecraft:cow",
        "breed_event": {
            "event": "minecraft:entity_born",
            "target": "baby"
        }
    }
}
```

#### donkey

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/donkey.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:breedable": {
    "require_tame": true,
    "inherit_tamed": false,
    "breeds_with": [
        {
            "mate_type": "minecraft:donkey",
            "baby_type": "minecraft:donkey",
            "breed_event": {
                "event": "minecraft:entity_born",
                "target": "baby"
            }
        },
        {
            "mate_type": "minecraft:horse",
            "baby_type": "minecraft:mule",
            "breed_event": {
                "event": "minecraft:entity_born",
                "target": "baby"
            }
        }
    ],
    "breed_items": [
        "golden_carrot",
        "golden_apple",
        "appleEnchanted"
    ]
}
```

#### fox

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/fox.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:breedable": {
    "require_tame": false,
    "breed_items": [
        "sweet_berries",
        "glow_berries"
    ],
    "breeds_with": {
        "mate_type": "minecraft:fox",
        "baby_type": "minecraft:fox",
        "breed_event": {
            "event": "minecraft:entity_born",
            "target": "baby"
        }
    }
}
```

#### goat

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/goat.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:breedable": {
    "require_tame": false,
    "breed_items": "wheat",
    "breeds_with": {
        "mate_type": "minecraft:goat",
        "baby_type": "minecraft:goat",
        "breed_event": {
            "event": "minecraft:entity_born",
            "target": "baby"
        }
    },
    "mutation_factor": {
        "variant": 0
    }
}
```

#### hoglin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/hoglin.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:breedable": {
    "require_tame": false,
    "love_filters": {
        "test": "has_component",
        "subject": "self",
        "operator": "!=",
        "value": "minecraft:attack_cooldown"
    },
    "breeds_with": {
        "mate_type": "minecraft:hoglin",
        "baby_type": "minecraft:hoglin",
        "breed_event": {
            "event": "minecraft:entity_born",
            "target": "baby"
        }
    },
    "breed_items": [
        "crimson_fungus"
    ]
}
```

#### horse

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/horse.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:breedable": {
    "require_tame": true,
    "inherit_tamed": false,
    "breeds_with": [
        {
            "mate_type": "minecraft:horse",
            "baby_type": "minecraft:horse",
            "breed_event": {
                "event": "minecraft:entity_born",
                "target": "baby"
            }
        },
        {
            "mate_type": "minecraft:donkey",
            "baby_type": "minecraft:mule",
            "breed_event": {
                "event": "minecraft:entity_born",
                "target": "baby"
            }
        }
    ],
    "breed_items": [
        "golden_carrot",
        "golden_apple",
        "appleEnchanted"
    ]
}
```

#### llama

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/llama.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:breedable": {
    "require_tame": true,
    "inherit_tamed": false,
    "love_filters": {
        "test": "is_mark_variant",
        "subject": "self",
        "operator": "!=",
        "value": 1
    },
    "breeds_with": {
        "mate_type": "minecraft:llama",
        "baby_type": "minecraft:llama",
        "breed_event": {
            "event": "minecraft:entity_born",
            "target": "baby"
        }
    },
    "breed_items": [
        "hay_block"
    ]
}
```

#### mooshroom

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/mooshroom.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:breedable": {
    "require_tame": false,
    "breed_items": "wheat",
    "breeds_with": {
        "mate_type": "minecraft:mooshroom",
        "baby_type": "minecraft:mooshroom",
        "breed_event": {
            "event": "minecraft:entity_born",
            "target": "baby"
        }
    },
    "deny_parents_variant": {
        "chance": 0.00098,
        "min_variant": 0,
        "max_variant": 1
    }
}
```

#### ocelot

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/ocelot.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:breedable": {
    "require_tame": false,
    "breeds_with": {
        "mate_type": "minecraft:ocelot",
        "baby_type": "minecraft:ocelot",
        "breed_event": {
            "event": "minecraft:entity_born",
            "target": "baby"
        }
    },
    "breed_items": [
        "fish",
        "salmon"
    ]
}
```

#### panda

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/panda.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:breedable": {
    "require_tame": false,
    "blend_attributes": false,
    "environment_requirements": {
        "blocks": "bamboo",
        "count": 8,
        "radius": 5
    },
    "breed_items": "bamboo",
    "breeds_with": {
        "mate_type": "minecraft:panda",
        "baby_type": "minecraft:panda",
        "breed_event": {
            "event": "minecraft:entity_born",
            "target": "baby"
        }
    },
    "mutation_factor": {
        "variant": 1.0
    }
}
```

#### pig

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/pig.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:breedable": {
    "require_tame": false,
    "breeds_with": {
        "mate_type": "minecraft:pig",
        "baby_type": "minecraft:pig",
        "breed_event": {
            "event": "minecraft:entity_born",
            "target": "baby"
        }
    },
    "breed_items": [
        "carrot",
        "beetroot",
        "potato"
    ]
}
```

#### rabbit

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/rabbit.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:breedable": {
    "breed_items": [
        "golden_carrot",
        "carrot",
        "yellow_flower"
    ],
    "breeds_with": {
        "mate_type": "minecraft:rabbit",
        "baby_type": "minecraft:rabbit"
    },
    "require_tame": false,
    "mutation_factor": {
        "variant": 0.2
    }
}
```

#### sheep

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/sheep.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:breedable": {
    "require_tame": false,
    "breeds_with": {
        "mate_type": "minecraft:sheep",
        "baby_type": "minecraft:sheep"
    },
    "breed_items": "wheat"
}
```

#### strider

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/strider.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:breedable": {
    "require_tame": false,
    "breeds_with": {
        "mate_type": "minecraft:strider",
        "baby_type": "minecraft:strider",
        "breed_event": {
            "event": "minecraft:entity_born",
            "target": "baby"
        }
    },
    "breed_items": [
        "warped_fungus"
    ]
}
```

#### turtle

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/turtle.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:breedable": {
    "require_tame": false,
    "causes_pregnancy": true,
    "breeds_with": {
        "mate_type": "minecraft:turtle",
        "baby_type": "minecraft:turtle",
        "breed_event": {
            "event": "minecraft:become_pregnant",
            "target": "self"
        }
    },
    "breed_items": [
        "seagrass"
    ]
}
```

#### wolf

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/wolf.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:breedable": {
    "require_tame": true,
    "require_full_health": true,
    "breeds_with": {
        "mate_type": "minecraft:wolf",
        "baby_type": "minecraft:wolf",
        "breed_event": {
            "event": "minecraft:entity_born",
            "target": "baby"
        }
    },
    "breed_items": [
        "chicken",
        "cooked_chicken",
        "beef",
        "cooked_beef",
        "muttonRaw",
        "muttonCooked",
        "porkchop",
        "cooked_porkchop",
        "rabbit",
        "cooked_rabbit",
        "rotten_flesh"
    ]
}
```

</Spoiler>

## bribeable

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Abribeable)</small>

<Spoiler title="Show">

#### dolphin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/dolphin.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:bribeable": {
    "bribe_items": [
        "fish",
        "salmon"
    ]
}
```

</Spoiler>

## buoyant

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Abuoyant)</small>

<Spoiler title="Show">

#### boat

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/boat.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:buoyant": {
    "base_buoyancy": 1.0,
    "apply_gravity": true,
    "simulate_waves": true,
    "big_wave_probability": 0.03,
    "big_wave_speed": 10.0,
    "liquid_blocks": [
        "minecraft:water",
        "minecraft:flowing_water"
    ]
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:buoyant": {
    "base_buoyancy": 1.0,
    "apply_gravity": true,
    "simulate_waves": false,
    "liquid_blocks": [
        "minecraft:water",
        "minecraft:flowing_water"
    ],
    "drag_down_on_buoyancy_removed": 0.7
}
```

#### xp_orb

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/xp_orb.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:buoyant": {
    "apply_gravity": false,
    "liquid_blocks": [
        "minecraft:flowing_water",
        "minecraft:water"
    ]
}
```

</Spoiler>

## burns_in_daylight

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Aburns_in_daylight)</small>

<Spoiler title="Show">

#### drowned

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/drowned.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:burns_in_daylight": {}
```

#### magma_cube

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/magma_cube.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:burns_in_daylight": false
```

#### phantom

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/phantom.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:burns_in_daylight": {}
```

#### skeleton

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/skeleton.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:burns_in_daylight": {}
```

#### stray

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/stray.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:burns_in_daylight": {}
```

#### zombie

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:burns_in_daylight": {}
```

#### zombie_villager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie_villager.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:burns_in_daylight": {}
```

#### zombie_villager_v2

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie_villager_v2.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:burns_in_daylight": {}
```

</Spoiler>

## can_climb

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Acan_climb)</small>

<Spoiler title="Show">

#### blaze

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/blaze.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:can_climb": {}
```

#### cat

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/cat.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:can_climb": {}
```

#### cave_spider

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/cave_spider.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:can_climb": {}
```

#### chicken

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/chicken.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:can_climb": {}
```

#### cow

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/cow.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:can_climb": {}
```

#### creeper

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/creeper.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:can_climb": {}
```

#### dolphin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/dolphin.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:can_climb": {}
```

#### drowned

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/drowned.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:can_climb": {}
```

#### enderman

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/enderman.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:can_climb": {}
```

#### endermite

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/endermite.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:can_climb": {}
```

#### evocation_illager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/evocation_illager.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:can_climb": {}
```

#### fox

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/fox.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:can_climb": {}
```

#### glow_squid

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/glow_squid.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:can_climb": {}
```

#### goat

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/goat.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:can_climb": {}
```

#### hoglin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/hoglin.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:can_climb": {}
```

#### husk

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/husk.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:can_climb": {}
```

#### iron_golem

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/iron_golem.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:can_climb": {}
```

#### magma_cube

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/magma_cube.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:can_climb": {}
```

#### mooshroom

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/mooshroom.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:can_climb": {}
```

#### ocelot

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/ocelot.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:can_climb": {}
```

#### panda

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/panda.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:can_climb": {}
```

#### pig

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/pig.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:can_climb": {}
```

#### player

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/player.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:can_climb": {}
```

#### polar_bear

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/polar_bear.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:can_climb": {}
```

#### rabbit

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/rabbit.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:can_climb": {}
```

#### sheep

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/sheep.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:can_climb": {}
```

#### silverfish

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/silverfish.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:can_climb": {}
```

#### skeleton

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/skeleton.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:can_climb": {}
```

#### slime

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/slime.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:can_climb": {}
```

#### snow_golem

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/snow_golem.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:can_climb": {}
```

#### spider

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/spider.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:can_climb": {}
```

#### squid

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/squid.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:can_climb": {}
```

#### stray

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/stray.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:can_climb": {}
```

#### vex

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/vex.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:can_climb": {}
```

#### villager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/villager.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:can_climb": {}
```

#### villager_v2

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/villager_v2.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:can_climb": {}
```

#### wandering_trader

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/wandering_trader.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:can_climb": {}
```

#### witch

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/witch.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:can_climb": {}
```

#### wither

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/wither.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:can_climb": {}
```

#### wither_skeleton

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/wither_skeleton.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:can_climb": {}
```

#### wolf

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/wolf.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:can_climb": {}
```

#### zoglin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zoglin.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:can_climb": {}
```

#### zombie

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:can_climb": {}
```

#### zombie_pigman

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie_pigman.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:can_climb": {}
```

#### zombie_villager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie_villager.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:can_climb": {}
```

#### zombie_villager_v2

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie_villager_v2.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:can_climb": {}
```

</Spoiler>

## can_fly

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Acan_fly)</small>

<Spoiler title="Show">

#### bat

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/bat.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:can_fly": {}
```

#### bee

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/bee.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:can_fly": {}
```

#### ghast

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/ghast.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:can_fly": {}
```

#### parrot

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/parrot.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:can_fly": {}
```

#### wither

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/wither.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:can_fly": {}
```

</Spoiler>

## can_power_jump

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Acan_power_jump)</small>

<Spoiler title="Show">

#### donkey

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/donkey.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:can_power_jump": {}
```

#### horse

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/horse.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:can_power_jump": {}
```

#### mule

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/mule.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:can_power_jump": {}
```

#### skeleton_horse

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/skeleton_horse.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:can_power_jump": {}
```

</Spoiler>

## celebrate_hunt

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Acelebrate_hunt)</small>

<Spoiler title="Show">

#### piglin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/piglin.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:celebrate_hunt": {
    "celebration_targets": {
        "all_of": [
            {
                "test": "is_family",
                "value": "hoglin"
            }
        ]
    },
    "broadcast": true,
    "duration": 10,
    "celebrate_sound": "celebrate",
    "sound_interval": {
        "range_min": 2.0,
        "range_max": 5.0
    },
    "radius": 16
}
```

</Spoiler>

## collision_box

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Acollision_box)</small>

<Spoiler title="Show">

#### armor_stand

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/armor_stand.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:collision_box": {
    "width": 0.5,
    "height": 1.975
}
```

#### arrow

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/arrow.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:collision_box": {
    "width": 0.25,
    "height": 0.25
}
```

#### axolotl

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/axolotl.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:collision_box": {
    "width": 0.75,
    "height": 0.42
}
```

#### bat

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/bat.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:collision_box": {
    "width": 0.5,
    "height": 0.9
}
```

#### bee

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/bee.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:collision_box": {
    "width": 0.55,
    "height": 0.5
}
```

#### blaze

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/blaze.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:collision_box": {
    "width": 0.5,
    "height": 1.8
}
```

#### boat

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/boat.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:collision_box": {
    "width": 1.4,
    "height": 0.455
}
```

#### cat

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/cat.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:collision_box": {
    "width": 0.6,
    "height": 0.7
}
```

#### cave_spider

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/cave_spider.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:collision_box": {
    "width": 0.7,
    "height": 0.5
}
```

#### chest_minecart

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/chest_minecart.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:collision_box": {
    "width": 0.98,
    "height": 0.7
}
```

#### chicken

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/chicken.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:collision_box": {
    "width": 0.6,
    "height": 0.8
}
```

#### command_block_minecart

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/command_block_minecart.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:collision_box": {
    "width": 0.98,
    "height": 0.7
}
```

#### cow

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/cow.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:collision_box": {
    "width": 0.9,
    "height": 1.3
}
```

#### creeper

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/creeper.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:collision_box": {
    "width": 0.6,
    "height": 1.8
}
```

#### dolphin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/dolphin.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:collision_box": {
    "width": 0.9,
    "height": 0.6
}
```

#### donkey

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/donkey.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:collision_box": {
    "width": 1.4,
    "height": 1.6
}
```

#### dragon_fireball

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/dragon_fireball.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:collision_box": {
    "width": 0.31,
    "height": 0.31
}
```

#### drowned

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/drowned.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:collision_box": {
    "width": 0.6,
    "height": 1.9
}
```

#### egg

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/egg.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:collision_box": {
    "width": 0.25,
    "height": 0.25
}
```

#### elder_guardian

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/elder_guardian.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:collision_box": {
    "width": 1.99,
    "height": 1.99
}
```

#### enderman

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/enderman.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:collision_box": {
    "width": 0.6,
    "height": 2.9
}
```

#### endermite

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/endermite.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:collision_box": {
    "width": 0.4,
    "height": 0.3
}
```

#### ender_crystal

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/ender_crystal.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:collision_box": {
    "width": 0.98,
    "height": 0.98
}
```

#### ender_dragon

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/ender_dragon.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:collision_box": {
    "width": 13,
    "height": 4
}
```

#### ender_pearl

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/ender_pearl.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:collision_box": {
    "width": 0.25,
    "height": 0.25
}
```

#### evocation_illager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/evocation_illager.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:collision_box": {
    "width": 0.6,
    "height": 1.9
}
```

#### eye_of_ender_signal

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/eye_of_ender_signal.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:collision_box": {
    "width": 0.25,
    "height": 0.25
}
```

#### fireball

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/fireball.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:collision_box": {
    "width": 0.31,
    "height": 0.31
}
```

#### fireworks_rocket

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/fireworks_rocket.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:collision_box": {
    "width": 0.25,
    "height": 0.25
}
```

#### fish

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/fish.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:collision_box": {
    "width": 0.6,
    "height": 0.3
}
```

#### fishing_hook

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/fishing_hook.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:collision_box": {
    "width": 0.15,
    "height": 0.15
}
```

#### fox

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/fox.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:collision_box": {
    "width": 0.6,
    "height": 0.7
}
```

#### ghast

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/ghast.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:collision_box": {
    "width": 4.02,
    "height": 4
}
```

#### glow_squid

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/glow_squid.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:collision_box": {
    "width": 0.95,
    "height": 0.95
}
```

#### goat

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/goat.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:collision_box": {
    "width": 0.9,
    "height": 1.3
}
```

#### guardian

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/guardian.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:collision_box": {
    "width": 0.85,
    "height": 0.85
}
```

#### hoglin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/hoglin.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:collision_box": {
    "width": 0.85,
    "height": 0.85
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:collision_box": {
    "width": 0.9,
    "height": 0.9
}
```

#### hopper_minecart

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/hopper_minecart.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:collision_box": {
    "width": 0.98,
    "height": 0.7
}
```

#### horse

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/horse.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:collision_box": {
    "width": 1.4,
    "height": 1.6
}
```

#### husk

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/husk.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:collision_box": {
    "width": 0.6,
    "height": 1.9
}
```

#### iron_golem

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/iron_golem.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:collision_box": {
    "width": 1.4,
    "height": 2.9
}
```

#### lingering_potion

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/lingering_potion.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:collision_box": {
    "width": 0.25,
    "height": 0.25
}
```

#### llama

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/llama.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:collision_box": {
    "width": 0.9,
    "height": 1.87
}
```

#### llama_spit

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/llama_spit.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:collision_box": {
    "width": 0.31,
    "height": 0.31
}
```

#### magma_cube

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/magma_cube.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:collision_box": {
    "width": 2.08,
    "height": 2.08
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:collision_box": {
    "width": 1.04,
    "height": 1.02
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:collision_box": {
    "width": 0.52,
    "height": 0.52
}
```

#### minecart

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/minecart.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:collision_box": {
    "width": 0.98,
    "height": 0.7
}
```

#### mooshroom

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/mooshroom.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:collision_box": {
    "width": 0.9,
    "height": 1.3
}
```

#### mule

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/mule.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:collision_box": {
    "width": 1.4,
    "height": 1.6
}
```

#### npc

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/npc.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:collision_box": {
    "width": 0.6,
    "height": 2.1
}
```

#### ocelot

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/ocelot.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:collision_box": {
    "width": 0.6,
    "height": 0.7
}
```

#### panda

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/panda.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:collision_box": {
    "width": 1.7,
    "height": 1.5
}
```

#### parrot

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/parrot.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:collision_box": {
    "width": 0.5,
    "height": 1
}
```

#### phantom

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/phantom.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:collision_box": {
    "width": 0.9,
    "height": 0.5
}
```

#### pig

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/pig.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:collision_box": {
    "width": 0.9,
    "height": 0.9
}
```

#### piglin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/piglin.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:collision_box": {
    "width": 0.6,
    "height": 1.9
}
```

#### piglin_brute

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/piglin_brute.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:collision_box": {
    "width": 0.6,
    "height": 1.9
}
```

#### pillager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/pillager.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:collision_box": {
    "width": 0.6,
    "height": 1.9
}
```

#### player

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/player.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:collision_box": {
    "width": 0.6,
    "height": 1.8
}
```

#### polar_bear

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/polar_bear.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:collision_box": {
    "width": 1.3,
    "height": 1.4
}
```

#### pufferfish

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/pufferfish.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:collision_box": {
    "width": 0.8,
    "height": 0.8
}
```

#### rabbit

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/rabbit.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:collision_box": {
    "width": 0.67,
    "height": 0.67
}
```

#### ravager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/ravager.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:collision_box": {
    "height": 1.9,
    "width": 1.2
}
```

#### salmon

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/salmon.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:collision_box": {
    "width": 0.5,
    "height": 0.5
}
```

#### sheep

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/sheep.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:collision_box": {
    "width": 0.9,
    "height": 1.3
}
```

#### shulker_bullet

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/shulker_bullet.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:collision_box": {
    "width": 0.625,
    "height": 0.625
}
```

#### silverfish

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/silverfish.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:collision_box": {
    "width": 0.4,
    "height": 0.3
}
```

#### skeleton

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/skeleton.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:collision_box": {
    "width": 0.6,
    "height": 1.9
}
```

#### skeleton_horse

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/skeleton_horse.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:collision_box": {
    "width": 1.4,
    "height": 1.6
}
```

#### slime

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/slime.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:collision_box": {
    "width": 2.08,
    "height": 2.08
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:collision_box": {
    "width": 1.04,
    "height": 1.04
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:collision_box": {
    "width": 0.52,
    "height": 0.52
}
```

#### small_fireball

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/small_fireball.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:collision_box": {
    "width": 0.31,
    "height": 0.31
}
```

#### snowball

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/snowball.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:collision_box": {
    "width": 0.25,
    "height": 0.25
}
```

#### snow_golem

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/snow_golem.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:collision_box": {
    "width": 0.4,
    "height": 1.8
}
```

#### spider

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/spider.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:collision_box": {
    "width": 1.4,
    "height": 0.9
}
```

#### splash_potion

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/splash_potion.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:collision_box": {
    "width": 0.25,
    "height": 0.25
}
```

#### squid

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/squid.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:collision_box": {
    "width": 0.95,
    "height": 0.95
}
```

#### stray

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/stray.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:collision_box": {
    "width": 0.6,
    "height": 1.9
}
```

#### strider

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/strider.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:collision_box": {
    "width": 0.9,
    "height": 1.7
}
```

#### thrown_trident

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/thrown_trident.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:collision_box": {
    "width": 0.25,
    "height": 0.35
}
```

#### tnt

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/tnt.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:collision_box": {
    "width": 0.98,
    "height": 0.98
}
```

#### tnt_minecart

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/tnt_minecart.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:collision_box": {
    "width": 0.98,
    "height": 0.7
}
```

#### tripod_camera

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/tripod_camera.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:collision_box": {
    "width": 0.75,
    "height": 1.8
}
```

#### tropicalfish

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/tropicalfish.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:collision_box": {
    "width": 0.4,
    "height": 0.4
}
```

#### turtle

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/turtle.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:collision_box": {
    "width": 0.6,
    "height": 0.2
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:collision_box": {
    "width": 1.2,
    "height": 0.4
}
```

#### vex

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/vex.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:collision_box": {
    "width": 0.4,
    "height": 0.8
}
```

#### villager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/villager.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:collision_box": {
    "width": 0.6,
    "height": 1.9
}
```

#### villager_v2

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/villager_v2.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:collision_box": {
    "width": 0.6,
    "height": 1.9
}
```

#### vindicator

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/vindicator.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:collision_box": {
    "width": 0.6,
    "height": 1.9
}
```

#### wandering_trader

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/wandering_trader.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:collision_box": {
    "width": 0.6,
    "height": 1.9
}
```

#### witch

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/witch.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:collision_box": {
    "width": 0.6,
    "height": 1.9
}
```

#### wither

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/wither.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:collision_box": {
    "width": 1,
    "height": 3
}
```

#### wither_skeleton

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/wither_skeleton.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:collision_box": {
    "width": 0.72,
    "height": 2.01
}
```

#### wither_skull

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/wither_skull.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:collision_box": {
    "width": 0.15,
    "height": 0.15
}
```

#### wither_skull_dangerous

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/wither_skull_dangerous.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:collision_box": {
    "width": 0.15,
    "height": 0.15
}
```

#### wolf

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/wolf.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:collision_box": {
    "width": 0.6,
    "height": 0.8
}
```

#### xp_bottle

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/xp_bottle.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:collision_box": {
    "width": 0.25,
    "height": 0.25
}
```

#### xp_orb

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/xp_orb.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:collision_box": {
    "width": 0.25,
    "height": 0.25
}
```

#### zoglin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zoglin.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:collision_box": {
    "width": 0.85,
    "height": 0.85
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:collision_box": {
    "width": 0.9,
    "height": 0.9
}
```

#### zombie

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:collision_box": {
    "width": 0.6,
    "height": 1.9
}
```

#### zombie_horse

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie_horse.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:collision_box": {
    "width": 1.4,
    "height": 1.6
}
```

#### zombie_pigman

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie_pigman.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:collision_box": {
    "width": 0.6,
    "height": 1.9
}
```

#### zombie_villager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie_villager.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:collision_box": {
    "width": 0.6,
    "height": 1.9
}
```

#### zombie_villager_v2

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie_villager_v2.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:collision_box": {
    "width": 0.6,
    "height": 1.9
}
```

</Spoiler>

## color

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Acolor)</small>

<Spoiler title="Show">

#### cat

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/cat.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:color": {
    "value": 14
}
```

#### sheep

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/sheep.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:color": {
    "value": 0
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:color": {
    "value": 12
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:color": {
    "value": 15
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:color": {
    "value": 8
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:color": {
    "value": 7
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:color": {
    "value": 6
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:color": {
    "value": 14
}
```

#### tropicalfish

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/tropicalfish.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:color": {
    "value": 0
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:color": {
    "value": 1
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:color": {
    "value": 2
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:color": {
    "value": 3
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:color": {
    "value": 4
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:color": {
    "value": 5
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:color": {
    "value": 6
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:color": {
    "value": 7
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:color": {
    "value": 8
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:color": {
    "value": 9
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:color": {
    "value": 10
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:color": {
    "value": 11
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:color": {
    "value": 12
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:color": {
    "value": 13
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:color": {
    "value": 14
}
```

#### wolf

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/wolf.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:color": {
    "value": 14
}
```

</Spoiler>

## color2

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Acolor2)</small>

<Spoiler title="Show">

#### tropicalfish

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/tropicalfish.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:color2": {
    "value": 0
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:color2": {
    "value": 1
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:color2": {
    "value": 2
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:color2": {
    "value": 3
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:color2": {
    "value": 4
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:color2": {
    "value": 5
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:color2": {
    "value": 6
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:color2": {
    "value": 7
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:color2": {
    "value": 8
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:color2": {
    "value": 9
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:color2": {
    "value": 10
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:color2": {
    "value": 11
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:color2": {
    "value": 12
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:color2": {
    "value": 13
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:color2": {
    "value": 14
}
```

</Spoiler>

## combat_regeneration

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Acombat_regeneration)</small>

<Spoiler title="Show">

#### axolotl

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/axolotl.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:combat_regeneration": {}
```

</Spoiler>

## conditional_bandwidth_optimization

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Aconditional_bandwidth_optimization)</small>

<Spoiler title="Show">

#### area_effect_cloud

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/area_effect_cloud.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:conditional_bandwidth_optimization": {}
```

#### armor_stand

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/armor_stand.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:conditional_bandwidth_optimization": {}
```

#### arrow

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/arrow.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:conditional_bandwidth_optimization": {
    "default_values": {
        "max_optimized_distance": 80.0,
        "max_dropped_ticks": 7,
        "use_motion_prediction_hints": true
    }
}
```

#### bat

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/bat.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:conditional_bandwidth_optimization": {}
```

#### bee

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/bee.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:conditional_bandwidth_optimization": {}
```

#### blaze

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/blaze.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:conditional_bandwidth_optimization": {}
```

#### boat

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/boat.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:conditional_bandwidth_optimization": {
    "default_values": {
        "max_optimized_distance": 60.0,
        "max_dropped_ticks": 20,
        "use_motion_prediction_hints": true
    },
    "conditional_values": [
        {
            "max_optimized_distance": 0.0,
            "max_dropped_ticks": 0,
            "use_motion_prediction_hints": true,
            "conditional_values": [
                {
                    "test": "is_moving",
                    "subject": "self",
                    "operator": "==",
                    "value": true
                }
            ]
        }
    ]
}
```

#### cat

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/cat.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:conditional_bandwidth_optimization": {}
```

#### cave_spider

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/cave_spider.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:conditional_bandwidth_optimization": {}
```

#### chest_minecart

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/chest_minecart.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:conditional_bandwidth_optimization": {
    "default_values": {
        "max_optimized_distance": 60.0,
        "max_dropped_ticks": 20,
        "use_motion_prediction_hints": true
    },
    "conditional_values": [
        {
            "max_optimized_distance": 0.0,
            "max_dropped_ticks": 0,
            "conditional_values": [
                {
                    "test": "is_moving",
                    "subject": "self",
                    "operator": "==",
                    "value": true
                }
            ]
        }
    ]
}
```

#### chicken

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/chicken.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:conditional_bandwidth_optimization": {}
```

#### command_block_minecart

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/command_block_minecart.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:conditional_bandwidth_optimization": {
    "default_values": {
        "max_optimized_distance": 60.0,
        "max_dropped_ticks": 20,
        "use_motion_prediction_hints": true
    },
    "conditional_values": [
        {
            "max_optimized_distance": 0.0,
            "max_dropped_ticks": 0,
            "conditional_values": [
                {
                    "test": "is_moving",
                    "subject": "self",
                    "operator": "==",
                    "value": true
                }
            ]
        }
    ]
}
```

#### cow

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/cow.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:conditional_bandwidth_optimization": {}
```

#### creeper

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/creeper.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:conditional_bandwidth_optimization": {}
```

#### dolphin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/dolphin.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:conditional_bandwidth_optimization": {}
```

#### donkey

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/donkey.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:conditional_bandwidth_optimization": {}
```

#### drowned

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/drowned.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:conditional_bandwidth_optimization": {}
```

#### egg

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/egg.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:conditional_bandwidth_optimization": {
    "default_values": {
        "max_optimized_distance": 80.0,
        "max_dropped_ticks": 7,
        "use_motion_prediction_hints": true
    }
}
```

#### elder_guardian

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/elder_guardian.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:conditional_bandwidth_optimization": {}
```

#### enderman

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/enderman.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:conditional_bandwidth_optimization": {
    "default_values": {
        "max_optimized_distance": 80.0,
        "max_dropped_ticks": 10,
        "use_motion_prediction_hints": true
    }
}
```

#### endermite

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/endermite.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:conditional_bandwidth_optimization": {}
```

#### ender_crystal

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/ender_crystal.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:conditional_bandwidth_optimization": {}
```

#### ender_pearl

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/ender_pearl.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:conditional_bandwidth_optimization": {
    "default_values": {
        "max_optimized_distance": 80.0,
        "max_dropped_ticks": 7,
        "use_motion_prediction_hints": true
    }
}
```

#### evocation_illager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/evocation_illager.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:conditional_bandwidth_optimization": {}
```

#### eye_of_ender_signal

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/eye_of_ender_signal.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:conditional_bandwidth_optimization": {
    "default_values": {
        "max_optimized_distance": 80.0,
        "max_dropped_ticks": 10,
        "use_motion_prediction_hints": true
    }
}
```

#### fireball

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/fireball.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:conditional_bandwidth_optimization": {
    "default_values": {
        "max_optimized_distance": 80.0,
        "max_dropped_ticks": 7,
        "use_motion_prediction_hints": true
    }
}
```

#### fireworks_rocket

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/fireworks_rocket.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:conditional_bandwidth_optimization": {
    "default_values": {
        "max_optimized_distance": 80.0,
        "max_dropped_ticks": 10,
        "use_motion_prediction_hints": true
    }
}
```

#### fish

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/fish.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:conditional_bandwidth_optimization": {}
```

#### fishing_hook

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/fishing_hook.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:conditional_bandwidth_optimization": {
    "default_values": {
        "max_optimized_distance": 80.0,
        "max_dropped_ticks": 7,
        "use_motion_prediction_hints": true
    }
}
```

#### fox

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/fox.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:conditional_bandwidth_optimization": {}
```

#### ghast

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/ghast.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:conditional_bandwidth_optimization": {}
```

#### guardian

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/guardian.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:conditional_bandwidth_optimization": {}
```

#### hoglin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/hoglin.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:conditional_bandwidth_optimization": {}
```

#### hopper_minecart

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/hopper_minecart.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:conditional_bandwidth_optimization": {
    "default_values": {
        "max_optimized_distance": 60.0,
        "max_dropped_ticks": 20,
        "use_motion_prediction_hints": true
    },
    "conditional_values": [
        {
            "max_optimized_distance": 0.0,
            "max_dropped_ticks": 0,
            "conditional_values": [
                {
                    "test": "is_moving",
                    "subject": "self",
                    "operator": "==",
                    "value": true
                }
            ]
        }
    ]
}
```

#### horse

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/horse.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:conditional_bandwidth_optimization": {}
```

#### husk

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/husk.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:conditional_bandwidth_optimization": {}
```

#### iron_golem

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/iron_golem.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:conditional_bandwidth_optimization": {}
```

#### lightning_bolt

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/lightning_bolt.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:conditional_bandwidth_optimization": {
    "default_values": {
        "max_optimized_distance": 80.0,
        "max_dropped_ticks": 10,
        "use_motion_prediction_hints": true
    }
}
```

#### lingering_potion

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/lingering_potion.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:conditional_bandwidth_optimization": {
    "default_values": {
        "max_optimized_distance": 80.0,
        "max_dropped_ticks": 5,
        "use_motion_prediction_hints": true
    }
}
```

#### llama

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/llama.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:conditional_bandwidth_optimization": {}
```

#### llama_spit

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/llama_spit.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:conditional_bandwidth_optimization": {
    "default_values": {
        "max_optimized_distance": 80.0,
        "max_dropped_ticks": 7,
        "use_motion_prediction_hints": true
    }
}
```

#### magma_cube

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/magma_cube.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:conditional_bandwidth_optimization": {}
```

#### minecart

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/minecart.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:conditional_bandwidth_optimization": {
    "default_values": {
        "max_optimized_distance": 60.0,
        "max_dropped_ticks": 20,
        "use_motion_prediction_hints": true
    },
    "conditional_values": [
        {
            "max_optimized_distance": 0.0,
            "max_dropped_ticks": 0,
            "conditional_values": [
                {
                    "test": "is_moving",
                    "subject": "self",
                    "operator": "==",
                    "value": true
                }
            ]
        }
    ]
}
```

#### mooshroom

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/mooshroom.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:conditional_bandwidth_optimization": {}
```

#### mule

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/mule.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:conditional_bandwidth_optimization": {}
```

#### npc

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/npc.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:conditional_bandwidth_optimization": {}
```

#### ocelot

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/ocelot.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:conditional_bandwidth_optimization": {}
```

#### panda

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/panda.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:conditional_bandwidth_optimization": {}
```

#### parrot

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/parrot.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:conditional_bandwidth_optimization": {}
```

#### phantom

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/phantom.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:conditional_bandwidth_optimization": {}
```

#### pig

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/pig.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:conditional_bandwidth_optimization": {}
```

#### piglin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/piglin.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:conditional_bandwidth_optimization": {}
```

#### piglin_brute

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/piglin_brute.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:conditional_bandwidth_optimization": {}
```

#### pillager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/pillager.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:conditional_bandwidth_optimization": {}
```

#### player

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/player.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:conditional_bandwidth_optimization": {}
```

#### polar_bear

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/polar_bear.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:conditional_bandwidth_optimization": {}
```

#### pufferfish

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/pufferfish.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:conditional_bandwidth_optimization": {}
```

#### rabbit

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/rabbit.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:conditional_bandwidth_optimization": {}
```

#### ravager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/ravager.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:conditional_bandwidth_optimization": {}
```

#### salmon

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/salmon.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:conditional_bandwidth_optimization": {}
```

#### sheep

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/sheep.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:conditional_bandwidth_optimization": {}
```

#### shulker

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/shulker.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:conditional_bandwidth_optimization": {
    "default_values": {
        "max_optimized_distance": 80.0,
        "max_dropped_ticks": 10,
        "use_motion_prediction_hints": true
    }
}
```

#### shulker_bullet

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/shulker_bullet.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:conditional_bandwidth_optimization": {
    "default_values": {
        "max_optimized_distance": 80.0,
        "max_dropped_ticks": 7,
        "use_motion_prediction_hints": true
    }
}
```

#### silverfish

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/silverfish.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:conditional_bandwidth_optimization": {}
```

#### skeleton

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/skeleton.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:conditional_bandwidth_optimization": {}
```

#### skeleton_horse

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/skeleton_horse.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:conditional_bandwidth_optimization": {}
```

#### slime

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/slime.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:conditional_bandwidth_optimization": {}
```

#### small_fireball

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/small_fireball.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:conditional_bandwidth_optimization": {
    "default_values": {
        "max_optimized_distance": 80.0,
        "max_dropped_ticks": 7,
        "use_motion_prediction_hints": true
    }
}
```

#### snowball

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/snowball.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:conditional_bandwidth_optimization": {
    "default_values": {
        "max_optimized_distance": 100.0,
        "max_dropped_ticks": 7,
        "use_motion_prediction_hints": true
    }
}
```

#### snow_golem

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/snow_golem.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:conditional_bandwidth_optimization": {}
```

#### spider

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/spider.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:conditional_bandwidth_optimization": {}
```

#### splash_potion

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/splash_potion.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:conditional_bandwidth_optimization": {
    "default_values": {
        "max_optimized_distance": 80.0,
        "max_dropped_ticks": 5,
        "use_motion_prediction_hints": true
    }
}
```

#### squid

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/squid.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:conditional_bandwidth_optimization": {}
```

#### stray

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/stray.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:conditional_bandwidth_optimization": {}
```

#### strider

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/strider.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:conditional_bandwidth_optimization": {}
```

#### thrown_trident

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/thrown_trident.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:conditional_bandwidth_optimization": {
    "default_values": {
        "max_optimized_distance": 80.0,
        "max_dropped_ticks": 7,
        "use_motion_prediction_hints": true
    }
}
```

#### tnt

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/tnt.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:conditional_bandwidth_optimization": {
    "default_values": {
        "max_optimized_distance": 80.0,
        "max_dropped_ticks": 5,
        "use_motion_prediction_hints": true
    }
}
```

#### tnt_minecart

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/tnt_minecart.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:conditional_bandwidth_optimization": {
    "default_values": {
        "max_optimized_distance": 60.0,
        "max_dropped_ticks": 20,
        "use_motion_prediction_hints": true
    },
    "conditional_values": [
        {
            "max_optimized_distance": 0.0,
            "max_dropped_ticks": 0,
            "conditional_values": [
                {
                    "test": "is_moving",
                    "subject": "self",
                    "operator": "==",
                    "value": true
                }
            ]
        }
    ]
}
```

#### tripod_camera

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/tripod_camera.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:conditional_bandwidth_optimization": {}
```

#### tropicalfish

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/tropicalfish.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:conditional_bandwidth_optimization": {}
```

#### turtle

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/turtle.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:conditional_bandwidth_optimization": {}
```

#### vex

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/vex.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:conditional_bandwidth_optimization": {}
```

#### villager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/villager.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:conditional_bandwidth_optimization": {}
```

#### villager_v2

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/villager_v2.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:conditional_bandwidth_optimization": {}
```

#### vindicator

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/vindicator.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:conditional_bandwidth_optimization": {}
```

#### wandering_trader

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/wandering_trader.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:conditional_bandwidth_optimization": {}
```

#### witch

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/witch.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:conditional_bandwidth_optimization": {}
```

#### wither

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/wither.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:conditional_bandwidth_optimization": {}
```

#### wither_skeleton

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/wither_skeleton.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:conditional_bandwidth_optimization": {}
```

#### wither_skull

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/wither_skull.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:conditional_bandwidth_optimization": {
    "default_values": {
        "max_optimized_distance": 80.0,
        "max_dropped_ticks": 7,
        "use_motion_prediction_hints": true
    }
}
```

#### wither_skull_dangerous

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/wither_skull_dangerous.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:conditional_bandwidth_optimization": {
    "default_values": {
        "max_optimized_distance": 80.0,
        "max_dropped_ticks": 7,
        "use_motion_prediction_hints": true
    }
}
```

#### wolf

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/wolf.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:conditional_bandwidth_optimization": {}
```

#### xp_bottle

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/xp_bottle.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:conditional_bandwidth_optimization": {
    "default_values": {
        "max_optimized_distance": 80.0,
        "max_dropped_ticks": 5,
        "use_motion_prediction_hints": true
    }
}
```

#### xp_orb

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/xp_orb.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:conditional_bandwidth_optimization": {
    "default_values": {
        "max_optimized_distance": 80.0,
        "max_dropped_ticks": 10,
        "use_motion_prediction_hints": true
    }
}
```

#### zoglin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zoglin.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:conditional_bandwidth_optimization": {}
```

#### zombie

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:conditional_bandwidth_optimization": {}
```

#### zombie_horse

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie_horse.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:conditional_bandwidth_optimization": {}
```

#### zombie_pigman

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie_pigman.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:conditional_bandwidth_optimization": {}
```

#### zombie_villager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie_villager.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:conditional_bandwidth_optimization": {}
```

#### zombie_villager_v2

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie_villager_v2.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:conditional_bandwidth_optimization": {}
```

</Spoiler>

## custom_hit_test

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Acustom_hit_test)</small>

<Spoiler title="Show">

#### hoglin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/hoglin.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:custom_hit_test": {
    "hitboxes": [
        {
            "width": 1.0,
            "height": 0.85,
            "pivot": [
                0,
                0.5,
                0
            ]
        }
    ]
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:custom_hit_test": {
    "hitboxes": [
        {
            "width": 2.0,
            "height": 1.75,
            "pivot": [
                0,
                1,
                0
            ]
        }
    ]
}
```

#### zoglin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zoglin.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:custom_hit_test": {
    "hitboxes": [
        {
            "width": 1.0,
            "height": 0.85,
            "pivot": [
                0,
                0.5,
                0
            ]
        }
    ]
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:custom_hit_test": {
    "hitboxes": [
        {
            "width": 2.0,
            "height": 1.75,
            "pivot": [
                0,
                1,
                0
            ]
        }
    ]
}
```

</Spoiler>

## damage_over_time

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Adamage_over_time)</small>

<Spoiler title="Show">

#### axolotl

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/axolotl.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:damage_over_time": {
    "damage_per_hurt": 1,
    "time_between_hurt": 0
}
```

#### dolphin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/dolphin.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:damage_over_time": {
    "damage_per_hurt": 1,
    "time_between_hurt": 0
}
```

</Spoiler>

## damage_sensor

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Adamage_sensor)</small>

<Spoiler title="Show">

#### axolotl

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/axolotl.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:damage_sensor": {
    "triggers": {
        "cause": "lightning",
        "deals_damage": true,
        "damage_multiplier": 2000.0
    }
}
```

#### bat

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/bat.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:damage_sensor": {
    "triggers": {
        "cause": "fall",
        "deals_damage": false
    }
}
```

#### bee

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/bee.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:damage_sensor": {
    "triggers": {
        "cause": "fall",
        "deals_damage": false
    }
}
```

#### blaze

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/blaze.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:damage_sensor": {
    "triggers": {
        "cause": "fall",
        "deals_damage": false
    }
}
```

#### cat

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/cat.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:damage_sensor": {
    "triggers": {
        "cause": "fall",
        "deals_damage": false
    }
}
```

#### chicken

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/chicken.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:damage_sensor": {
    "triggers": {
        "cause": "fall",
        "deals_damage": false
    }
}
```

#### creeper

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/creeper.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:damage_sensor": {
    "triggers": {
        "on_damage": {
            "filters": {
                "test": "is_family",
                "subject": "other",
                "value": "lightning"
            },
            "event": "minecraft:become_charged"
        },
        "deals_damage": false
    }
}
```

#### ender_dragon

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/ender_dragon.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:damage_sensor": {
    "triggers": {
        "cause": "fall",
        "deals_damage": false
    }
}
```

#### fox

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/fox.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:damage_sensor": {
    "triggers": [
        {
            "on_damage": {
                "filters": {
                    "test": "is_block",
                    "subject": "block",
                    "value": "minecraft:sweet_berry_bush"
                }
            },
            "deals_damage": false
        }
    ]
}
```

#### ghast

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/ghast.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:damage_sensor": {
    "triggers": {
        "cause": "fall",
        "deals_damage": false
    }
}
```

#### goat

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/goat.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:damage_sensor": {
    "triggers": {
        "cause": "fall",
        "deals_damage": true,
        "damage_modifier": -10
    }
}
```

#### iron_golem

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/iron_golem.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:damage_sensor": {
    "triggers": {
        "cause": "fall",
        "deals_damage": false
    }
}
```

#### llama

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/llama.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:damage_sensor": {
    "triggers": {
        "cause": "all",
        "deals_damage": true,
        "on_damage": {
            "filters": {
                "test": "in_caravan",
                "value": false
            },
            "event": "minecraft:become_angry"
        }
    }
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:damage_sensor": {
    "triggers": {
        "cause": "all",
        "deals_damage": true
    }
}
```

#### magma_cube

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/magma_cube.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:damage_sensor": {
    "triggers": {
        "cause": "fall",
        "deals_damage": false
    }
}
```

#### mooshroom

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/mooshroom.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:damage_sensor": {
    "triggers": [
        {
            "on_damage": {
                "filters": {
                    "all_of": [
                        {
                            "test": "is_family",
                            "subject": "other",
                            "value": "lightning"
                        },
                        {
                            "test": "is_variant",
                            "subject": "self",
                            "operator": "==",
                            "value": 0
                        }
                    ]
                },
                "event": "minecraft:become_brown"
            },
            "deals_damage": false,
            "on_damage_sound_event": "convert_mooshroom"
        },
        {
            "on_damage": {
                "filters": {
                    "all_of": [
                        {
                            "test": "is_family",
                            "subject": "other",
                            "value": "lightning"
                        },
                        {
                            "test": "is_variant",
                            "subject": "self",
                            "operator": "==",
                            "value": 1
                        }
                    ]
                },
                "event": "minecraft:become_red"
            },
            "deals_damage": false,
            "on_damage_sound_event": "convert_mooshroom"
        }
    ]
}
```

#### npc

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/npc.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:damage_sensor": {
    "triggers": {
        "cause": "all",
        "deals_damage": false
    }
}
```

#### ocelot

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/ocelot.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:damage_sensor": {
    "triggers": {
        "cause": "fall",
        "deals_damage": false
    }
}
```

#### parrot

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/parrot.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:damage_sensor": {
    "triggers": {
        "cause": "fall",
        "deals_damage": false
    }
}
```

#### pig

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/pig.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:damage_sensor": {
    "triggers": {
        "on_damage": {
            "filters": [
                {
                    "test": "is_family",
                    "subject": "other",
                    "value": "lightning"
                },
                {
                    "test": "is_difficulty",
                    "operator": "!=",
                    "value": "peaceful"
                }
            ],
            "event": "become_zombie"
        },
        "deals_damage": false
    }
}
```

#### pillager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/pillager.json)</small>

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

#### skeleton

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/skeleton.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:damage_sensor": {
    "triggers": {
        "on_damage": {
            "filters": {
                "other_with_families": "lightning"
            }
        },
        "deals_damage": false
    }
}
```

#### skeleton_horse

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/skeleton_horse.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:damage_sensor": {
    "triggers": {
        "on_damage": {
            "filters": {
                "test": "is_family",
                "subject": "other",
                "value": "lightning"
            }
        },
        "deals_damage": false
    }
}
```

#### snow_golem

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/snow_golem.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:damage_sensor": {
    "triggers": {
        "cause": "fall",
        "deals_damage": false
    }
}
```

#### turtle

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/turtle.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:damage_sensor": {
    "triggers": {
        "cause": "lightning",
        "deals_damage": true,
        "damage_multiplier": 2000.0
    }
}
```

#### villager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/villager.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:damage_sensor": {
    "triggers": [
        {
            "on_damage": {
                "filters": {
                    "test": "is_family",
                    "subject": "other",
                    "value": "lightning"
                },
                "event": "become_witch"
            },
            "deals_damage": false
        },
        {
            "on_damage": {
                "filters": {
                    "any_of": [
                        {
                            "test": "is_family",
                            "subject": "other",
                            "value": "zombie"
                        },
                        {
                            "test": "is_family",
                            "subject": "other",
                            "value": "husk"
                        }
                    ],
                    "all_of": [
                        {
                            "test": "has_damage",
                            "value": "fatal"
                        }
                    ]
                },
                "event": "become_zombie"
            }
        }
    ]
}
```

#### villager_v2

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/villager_v2.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:damage_sensor": {
    "triggers": [
        {
            "on_damage": {
                "filters": [
                    {
                        "test": "is_family",
                        "subject": "other",
                        "value": "lightning"
                    },
                    {
                        "test": "is_difficulty",
                        "operator": "!=",
                        "value": "peaceful"
                    }
                ],
                "event": "become_witch"
            },
            "deals_damage": false
        },
        {
            "on_damage": {
                "filters": {
                    "any_of": [
                        {
                            "test": "is_family",
                            "subject": "other",
                            "value": "zombie"
                        },
                        {
                            "test": "is_family",
                            "subject": "other",
                            "value": "husk"
                        }
                    ],
                    "all_of": [
                        {
                            "test": "has_damage",
                            "value": "fatal"
                        }
                    ]
                },
                "event": "become_zombie"
            }
        }
    ]
}
```

#### vindicator

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/vindicator.json)</small>

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

#### wandering_trader

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/wandering_trader.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:damage_sensor": {
    "triggers": [
        {
            "cause": "entity_attack",
            "deals_damage": true,
            "on_damage": {
                "event": "minecraft:become_scared"
            }
        },
        {
            "cause": "projectile",
            "deals_damage": true,
            "on_damage": {
                "event": "minecraft:become_scared"
            }
        },
        {
            "cause": "magic",
            "deals_damage": true,
            "on_damage": {
                "event": "minecraft:become_scared"
            }
        }
    ]
}
```

#### wither

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/wither.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:damage_sensor": {
    "triggers": {
        "on_damage": {
            "filters": {
                "test": "is_family",
                "subject": "other",
                "value": "undead"
            }
        },
        "deals_damage": false
    }
}
```

</Spoiler>

## despawn

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Adespawn)</small>

<Spoiler title="Show">

#### axolotl

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/axolotl.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:despawn": {
    "despawn_from_distance": {}
}
```

#### bat

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/bat.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:despawn": {
    "despawn_from_distance": {}
}
```

#### blaze

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/blaze.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:despawn": {
    "despawn_from_distance": {}
}
```

#### cat

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/cat.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:despawn": {
    "despawn_from_distance": {}
}
```

#### cave_spider

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/cave_spider.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:despawn": {
    "despawn_from_distance": {}
}
```

#### chicken

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/chicken.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:despawn": {
    "despawn_from_distance": {}
}
```

#### cow

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/cow.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:despawn": {
    "despawn_from_distance": {}
}
```

#### creeper

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/creeper.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:despawn": {
    "despawn_from_distance": {}
}
```

#### dolphin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/dolphin.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:despawn": {
    "despawn_from_distance": {}
}
```

#### donkey

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/donkey.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:despawn": {
    "despawn_from_distance": {}
}
```

#### drowned

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/drowned.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:despawn": {
    "despawn_from_distance": {}
}
```

#### enderman

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/enderman.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:despawn": {
    "despawn_from_distance": {}
}
```

#### endermite

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/endermite.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:despawn": {
    "despawn_from_distance": {}
}
```

#### evocation_illager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/evocation_illager.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:despawn": {
    "despawn_from_distance": {}
}
```

#### fish

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/fish.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:despawn": {
    "despawn_from_distance": {
        "min_distance": 32,
        "max_distance": 40
    }
}
```

#### fox

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/fox.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:despawn": {
    "despawn_from_distance": {}
}
```

#### ghast

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/ghast.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:despawn": {
    "despawn_from_distance": {}
}
```

#### glow_squid

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/glow_squid.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:despawn": {
    "despawn_from_distance": {}
}
```

#### goat

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/goat.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:despawn": {
    "despawn_from_distance": {}
}
```

#### guardian

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/guardian.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:despawn": {
    "despawn_from_distance": {}
}
```

#### hoglin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/hoglin.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:despawn": {
    "despawn_from_distance": {}
}
```

#### horse

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/horse.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:despawn": {
    "despawn_from_distance": {}
}
```

#### husk

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/husk.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:despawn": {
    "despawn_from_distance": {}
}
```

#### llama

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/llama.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:despawn": {
    "despawn_from_distance": {}
}
```

#### magma_cube

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/magma_cube.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:despawn": {
    "despawn_from_distance": {}
}
```

#### mooshroom

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/mooshroom.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:despawn": {
    "despawn_from_distance": {}
}
```

#### mule

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/mule.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:despawn": {
    "despawn_from_distance": {}
}
```

#### ocelot

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/ocelot.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:despawn": {
    "despawn_from_distance": {}
}
```

#### panda

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/panda.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:despawn": {
    "despawn_from_distance": {}
}
```

#### parrot

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/parrot.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:despawn": {
    "despawn_from_distance": {}
}
```

#### phantom

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/phantom.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:despawn": {
    "despawn_from_distance": {}
}
```

#### pig

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/pig.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:despawn": {
    "despawn_from_distance": {}
}
```

#### piglin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/piglin.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:despawn": {
    "despawn_from_distance": {}
}
```

#### piglin_brute

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/piglin_brute.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:despawn": {
    "filters": {
        "any_of": [
            {
                "all_of": [
                    {
                        "test": "is_persistent",
                        "value": false
                    },
                    {
                        "test": "distance_to_nearest_player",
                        "operator": ">",
                        "value": 54
                    }
                ]
            },
            {
                "all_of": [
                    {
                        "test": "is_persistent",
                        "value": false
                    },
                    {
                        "test": "inactivity_timer",
                        "subject": "self",
                        "value": 30
                    },
                    {
                        "test": "random_chance",
                        "value": 800
                    },
                    {
                        "test": "distance_to_nearest_player",
                        "operator": ">",
                        "value": 32
                    }
                ]
            }
        ]
    }
}
```

#### pillager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/pillager.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:despawn": {
    "despawn_from_distance": {}
}
```

#### polar_bear

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/polar_bear.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:despawn": {
    "despawn_from_distance": {}
}
```

#### pufferfish

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/pufferfish.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:despawn": {
    "despawn_from_distance": {
        "min_distance": 32,
        "max_distance": 40
    }
}
```

#### rabbit

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/rabbit.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:despawn": {
    "despawn_from_distance": {}
}
```

#### ravager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/ravager.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:despawn": {
    "despawn_from_distance": {}
}
```

#### salmon

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/salmon.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:despawn": {
    "despawn_from_distance": {
        "min_distance": 32,
        "max_distance": 40
    }
}
```

#### sheep

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/sheep.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:despawn": {
    "despawn_from_distance": {}
}
```

#### silverfish

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/silverfish.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:despawn": {
    "despawn_from_distance": {}
}
```

#### skeleton

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/skeleton.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:despawn": {
    "despawn_from_distance": {}
}
```

#### skeleton_horse

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/skeleton_horse.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:despawn": {
    "despawn_from_distance": {}
}
```

#### slime

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/slime.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:despawn": {
    "despawn_from_distance": {}
}
```

#### spider

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/spider.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:despawn": {
    "despawn_from_distance": {}
}
```

#### squid

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/squid.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:despawn": {
    "despawn_from_distance": {}
}
```

#### stray

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/stray.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:despawn": {
    "despawn_from_distance": {}
}
```

#### strider

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/strider.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:despawn": {
    "despawn_from_distance": {}
}
```

#### tropicalfish

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/tropicalfish.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:despawn": {
    "despawn_from_distance": {
        "min_distance": 32,
        "max_distance": 40
    }
}
```

#### turtle

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/turtle.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:despawn": {
    "despawn_from_distance": {}
}
```

#### vex

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/vex.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:despawn": {
    "despawn_from_distance": {}
}
```

#### vindicator

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/vindicator.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:despawn": {
    "despawn_from_distance": {}
}
```

#### wandering_trader

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/wandering_trader.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:despawn": {
    "remove_child_entities": true,
    "filters": {
        "all_of": [
            {
                "any_of": [
                    {
                        "test": "is_family",
                        "subject": "self",
                        "value": "wandering_trader_despawning"
                    },
                    {
                        "test": "has_trade_supply",
                        "subject": "self",
                        "value": false
                    }
                ]
            },
            {
                "test": "distance_to_nearest_player",
                "operator": ">",
                "value": 24
            }
        ]
    }
}
```

#### witch

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/witch.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:despawn": {
    "despawn_from_distance": {}
}
```

#### wither_skeleton

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/wither_skeleton.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:despawn": {
    "despawn_from_distance": {}
}
```

#### wolf

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/wolf.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:despawn": {
    "despawn_from_distance": {}
}
```

#### zoglin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zoglin.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:despawn": {
    "filters": {
        "any_of": [
            {
                "all_of": [
                    {
                        "test": "is_persistent",
                        "value": false
                    },
                    {
                        "test": "distance_to_nearest_player",
                        "operator": ">",
                        "value": 54
                    }
                ]
            },
            {
                "all_of": [
                    {
                        "test": "is_persistent",
                        "value": false
                    },
                    {
                        "test": "inactivity_timer",
                        "subject": "self",
                        "value": 30
                    },
                    {
                        "test": "random_chance",
                        "value": 800
                    },
                    {
                        "test": "distance_to_nearest_player",
                        "operator": ">",
                        "value": 32
                    }
                ]
            }
        ]
    }
}
```

#### zombie

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:despawn": {
    "despawn_from_distance": {}
}
```

#### zombie_horse

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie_horse.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:despawn": {
    "despawn_from_distance": {}
}
```

#### zombie_pigman

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie_pigman.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:despawn": {
    "despawn_from_distance": {}
}
```

#### zombie_villager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie_villager.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:despawn": {
    "despawn_from_distance": {}
}
```

#### zombie_villager_v2

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie_villager_v2.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:despawn": {
    "despawn_from_distance": {}
}
```

</Spoiler>

## drying_out_timer

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Adrying_out_timer)</small>

<Spoiler title="Show">

#### axolotl

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/axolotl.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:drying_out_timer": {
    "total_time": 300,
    "water_bottle_refill_time": 90,
    "dried_out_event": {
        "event": "dried_out"
    },
    "stopped_drying_out_event": {
        "event": "stop_drying_out"
    },
    "recover_after_dried_out_event": {
        "event": "recover_after_dried_out"
    }
}
```

#### dolphin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/dolphin.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:drying_out_timer": {
    "total_time": 120,
    "water_bottle_refill_time": 0,
    "dried_out_event": {
        "event": "dried_out"
    },
    "stopped_drying_out_event": {
        "event": "stop_dryingout"
    },
    "recover_after_dried_out_event": {
        "event": "recover_after_dried_out"
    }
}
```

</Spoiler>

## dweller

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Adweller)</small>

<Spoiler title="Show">

#### cat

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/cat.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:dweller": {
    "dwelling_type": "village",
    "dweller_role": "passive",
    "update_interval_base": 60,
    "update_interval_variant": 40,
    "can_find_poi": false,
    "can_migrate": true,
    "first_founding_reward": 0
}
```

#### evocation_illager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/evocation_illager.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:dweller": {
    "dwelling_type": "village",
    "dweller_role": "hostile",
    "update_interval_base": 60,
    "update_interval_variant": 40,
    "can_find_poi": false,
    "can_migrate": false,
    "first_founding_reward": 0
}
```

#### iron_golem

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/iron_golem.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:dweller": {
    "dwelling_type": "village",
    "dweller_role": "defender",
    "update_interval_base": 60,
    "update_interval_variant": 40,
    "can_find_poi": false,
    "can_migrate": true,
    "first_founding_reward": 0
}
```

#### pillager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/pillager.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:dweller": {
    "dwelling_type": "village",
    "dweller_role": "hostile",
    "update_interval_base": 60,
    "update_interval_variant": 40,
    "can_find_poi": false,
    "can_migrate": false,
    "first_founding_reward": 0
}
```

#### ravager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/ravager.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:dweller": {
    "dwelling_type": "village",
    "dweller_role": "hostile",
    "update_interval_base": 60,
    "update_interval_variant": 40,
    "can_find_poi": false,
    "can_migrate": false,
    "first_founding_reward": 0
}
```

#### villager_v2

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/villager_v2.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:dweller": {
    "dwelling_type": "village",
    "dweller_role": "inhabitant",
    "update_interval_base": 60,
    "update_interval_variant": 40,
    "can_find_poi": true,
    "can_migrate": true,
    "first_founding_reward": 5
}
```

<CodeHeader></CodeHeader>

```json
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
```

<CodeHeader></CodeHeader>

```json
"minecraft:dweller": {
    "dwelling_type": "village",
    "dweller_role": "inhabitant",
    "preferred_profession": "fisherman",
    "update_interval_base": 60,
    "update_interval_variant": 40,
    "can_find_poi": true,
    "can_migrate": true,
    "first_founding_reward": 5
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:dweller": {
    "dwelling_type": "village",
    "dweller_role": "inhabitant",
    "preferred_profession": "shepherd",
    "update_interval_base": 60,
    "update_interval_variant": 40,
    "can_find_poi": true,
    "can_migrate": true,
    "first_founding_reward": 5
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:dweller": {
    "dwelling_type": "village",
    "dweller_role": "inhabitant",
    "preferred_profession": "fletcher",
    "update_interval_base": 60,
    "update_interval_variant": 40,
    "can_find_poi": true,
    "can_migrate": true,
    "first_founding_reward": 5
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:dweller": {
    "dwelling_type": "village",
    "dweller_role": "inhabitant",
    "preferred_profession": "librarian",
    "update_interval_base": 60,
    "update_interval_variant": 40,
    "can_find_poi": true,
    "can_migrate": true,
    "first_founding_reward": 5
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:dweller": {
    "dwelling_type": "village",
    "dweller_role": "inhabitant",
    "preferred_profession": "cartographer",
    "update_interval_base": 60,
    "update_interval_variant": 40,
    "can_find_poi": true,
    "can_migrate": true,
    "first_founding_reward": 5
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:dweller": {
    "dwelling_type": "village",
    "dweller_role": "inhabitant",
    "preferred_profession": "cleric",
    "update_interval_base": 60,
    "update_interval_variant": 40,
    "can_find_poi": true,
    "can_migrate": true,
    "first_founding_reward": 5
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:dweller": {
    "dwelling_type": "village",
    "dweller_role": "inhabitant",
    "preferred_profession": "armorer",
    "update_interval_base": 60,
    "update_interval_variant": 40,
    "can_find_poi": true,
    "can_migrate": true,
    "first_founding_reward": 5
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:dweller": {
    "dwelling_type": "village",
    "dweller_role": "inhabitant",
    "preferred_profession": "weaponsmith",
    "update_interval_base": 60,
    "update_interval_variant": 40,
    "can_find_poi": true,
    "can_migrate": true,
    "first_founding_reward": 5
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:dweller": {
    "dwelling_type": "village",
    "dweller_role": "inhabitant",
    "preferred_profession": "toolsmith",
    "update_interval_base": 60,
    "update_interval_variant": 40,
    "can_find_poi": true,
    "can_migrate": true,
    "first_founding_reward": 5
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:dweller": {
    "dwelling_type": "village",
    "dweller_role": "inhabitant",
    "preferred_profession": "butcher",
    "update_interval_base": 60,
    "update_interval_variant": 40,
    "can_find_poi": true,
    "can_migrate": true,
    "first_founding_reward": 5
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:dweller": {
    "dwelling_type": "village",
    "dweller_role": "inhabitant",
    "preferred_profession": "leatherworker",
    "update_interval_base": 60,
    "update_interval_variant": 40,
    "can_find_poi": true,
    "can_migrate": true,
    "first_founding_reward": 5
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:dweller": {
    "dwelling_type": "village",
    "dweller_role": "inhabitant",
    "preferred_profession": "mason",
    "update_interval_base": 60,
    "update_interval_variant": 40,
    "can_find_poi": true,
    "can_migrate": true,
    "first_founding_reward": 5
}
```

#### vindicator

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/vindicator.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:dweller": {
    "dwelling_type": "village",
    "dweller_role": "hostile",
    "update_interval_base": 60,
    "update_interval_variant": 40,
    "can_find_poi": false,
    "can_migrate": false,
    "first_founding_reward": 0
}
```

#### witch

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/witch.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:dweller": {
    "dwelling_type": "village",
    "dweller_role": "hostile",
    "update_interval_base": 60,
    "update_interval_variant": 40,
    "can_find_poi": false,
    "can_migrate": false,
    "first_founding_reward": 0
}
```

</Spoiler>

## economy_trade_table

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Aeconomy_trade_table)</small>

<Spoiler title="Show">

#### villager_v2

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/villager_v2.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:economy_trade_table": {}
```

<CodeHeader></CodeHeader>

```json
"minecraft:economy_trade_table": {
    "display_name": "entity.villager.farmer",
    "table": "trading/economy_trades/farmer_trades.json",
    "new_screen": true,
    "persist_trades": true,
    "cured_discount": [
        -100,
        -100
    ],
    "max_cured_discount": [
        -500,
        -500
    ]
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:economy_trade_table": {
    "display_name": "entity.villager.fisherman",
    "table": "trading/economy_trades/fisherman_trades.json",
    "new_screen": true,
    "persist_trades": true,
    "cured_discount": [
        -100,
        -100
    ],
    "max_cured_discount": [
        -500,
        -500
    ]
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:economy_trade_table": {
    "display_name": "entity.villager.shepherd",
    "table": "trading/economy_trades/shepherd_trades.json",
    "new_screen": true,
    "persist_trades": true,
    "cured_discount": [
        -100,
        -100
    ],
    "max_cured_discount": [
        -500,
        -500
    ]
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:economy_trade_table": {
    "display_name": "entity.villager.fletcher",
    "table": "trading/economy_trades/fletcher_trades.json",
    "new_screen": true,
    "persist_trades": true,
    "cured_discount": [
        -100,
        -100
    ],
    "max_cured_discount": [
        -500,
        -500
    ]
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:economy_trade_table": {
    "display_name": "entity.villager.librarian",
    "table": "trading/economy_trades/librarian_trades.json",
    "new_screen": true,
    "persist_trades": true,
    "cured_discount": [
        -100,
        -100
    ],
    "max_cured_discount": [
        -500,
        -500
    ]
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:economy_trade_table": {
    "display_name": "entity.villager.cartographer",
    "table": "trading/economy_trades/cartographer_trades.json",
    "new_screen": true,
    "persist_trades": true,
    "cured_discount": [
        -100,
        -100
    ],
    "max_cured_discount": [
        -500,
        -500
    ]
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:economy_trade_table": {
    "display_name": "entity.villager.cleric",
    "table": "trading/economy_trades/cleric_trades.json",
    "new_screen": true,
    "persist_trades": true,
    "cured_discount": [
        -100,
        -100
    ],
    "max_cured_discount": [
        -500,
        -500
    ]
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:economy_trade_table": {
    "display_name": "entity.villager.armor",
    "table": "trading/economy_trades/armorer_trades.json",
    "new_screen": true,
    "persist_trades": true,
    "cured_discount": [
        -100,
        -100
    ],
    "max_cured_discount": [
        -500,
        -500
    ]
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:economy_trade_table": {
    "display_name": "entity.villager.weapon",
    "table": "trading/economy_trades/weapon_smith_trades.json",
    "new_screen": true,
    "persist_trades": true,
    "cured_discount": [
        -100,
        -100
    ],
    "max_cured_discount": [
        -500,
        -500
    ]
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:economy_trade_table": {
    "display_name": "entity.villager.tool",
    "table": "trading/economy_trades/tool_smith_trades.json",
    "new_screen": true,
    "persist_trades": true,
    "cured_discount": [
        -100,
        -100
    ],
    "max_cured_discount": [
        -500,
        -500
    ]
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:economy_trade_table": {
    "display_name": "entity.villager.butcher",
    "table": "trading/economy_trades/butcher_trades.json",
    "new_screen": true,
    "persist_trades": true,
    "cured_discount": [
        -100,
        -100
    ],
    "max_cured_discount": [
        -500,
        -500
    ]
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:economy_trade_table": {
    "display_name": "entity.villager.leather",
    "table": "trading/economy_trades/leather_worker_trades.json",
    "new_screen": true,
    "persist_trades": true,
    "cured_discount": [
        -100,
        -100
    ],
    "max_cured_discount": [
        -500,
        -500
    ]
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:economy_trade_table": {
    "display_name": "entity.villager.mason",
    "table": "trading/economy_trades/stone_mason_trades.json",
    "new_screen": true,
    "persist_trades": true,
    "cured_discount": [
        -100,
        -100
    ],
    "max_cured_discount": [
        -500,
        -500
    ]
}
```

#### wandering_trader

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/wandering_trader.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:economy_trade_table": {
    "display_name": "entity.wandering_trader.name",
    "table": "trading/economy_trades/wandering_trader_trades.json",
    "new_screen": true
}
```

</Spoiler>

## entity_sensor

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Aentity_sensor)</small>

<Spoiler title="Show">

#### pufferfish

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/pufferfish.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:entity_sensor": {
    "sensor_range": 2.5,
    "relative_range": false,
    "minimum_count": 1,
    "event_filters": {
        "any_of": [
            {
                "test": "is_family",
                "subject": "other",
                "value": "mob"
            },
            {
                "all_of": [
                    {
                        "test": "is_family",
                        "subject": "other",
                        "value": "player"
                    },
                    {
                        "none_of": {
                            "test": "has_ability",
                            "subject": "other",
                            "value": "instabuild"
                        }
                    }
                ]
            }
        ]
    },
    "event": "minecraft:start_half_puff"
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:entity_sensor": {
    "sensor_range": 2.5,
    "relative_range": false,
    "minimum_count": 1,
    "event_filters": {
        "any_of": [
            {
                "test": "is_family",
                "subject": "other",
                "value": "mob"
            },
            {
                "all_of": [
                    {
                        "test": "is_family",
                        "subject": "other",
                        "value": "player"
                    },
                    {
                        "none_of": {
                            "test": "has_ability",
                            "subject": "other",
                            "value": "instabuild"
                        }
                    }
                ]
            }
        ]
    },
    "event": "minecraft:start_full_puff"
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:entity_sensor": {
    "sensor_range": 2.9,
    "relative_range": false,
    "require_all": true,
    "event_filters": {
        "none_of": [
            {
                "test": "is_family",
                "subject": "other",
                "value": "mob"
            },
            {
                "all_of": [
                    {
                        "test": "is_family",
                        "subject": "other",
                        "value": "player"
                    },
                    {
                        "none_of": {
                            "test": "has_ability",
                            "subject": "other",
                            "value": "instabuild"
                        }
                    }
                ]
            }
        ],
        "test": "distance_to_nearest_player",
        "operator": ">",
        "value": 2.9
    },
    "event": "minecraft:from_full_puff"
}
```

</Spoiler>

## environment_sensor

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Aenvironment_sensor)</small>

<Spoiler title="Show">

#### axolotl

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/axolotl.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:environment_sensor": {
    "triggers": [
        {
            "filters": {
                "test": "in_water",
                "operator": "!=",
                "value": true
            },
            "event": "start_drying_out"
        }
    ]
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:environment_sensor": {
    "triggers": [
        {
            "filters": {
                "test": "in_water_or_rain",
                "operator": "!=",
                "value": true
            },
            "event": "start_drying_out"
        },
        {
            "filters": {
                "test": "in_water",
                "operator": "==",
                "value": true
            },
            "event": "enter_water"
        }
    ]
}
```

#### bee

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/bee.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:environment_sensor": {
    "triggers": [
        {
            "event": "seek_shelter",
            "filters": {
                "all_of": [
                    {
                        "any_of": [
                            {
                                "test": "is_daytime",
                                "value": false
                            },
                            {
                                "test": "weather",
                                "operator": "==",
                                "value": "precipitation"
                            }
                        ]
                    },
                    {
                        "test": "has_component",
                        "value": "minecraft:is_charged",
                        "operator": "!="
                    },
                    {
                        "test": "has_biome_tag",
                        "value": "overworld"
                    }
                ]
            }
        }
    ]
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:environment_sensor": {
    "triggers": [
        {
            "event": "abort_sheltering",
            "filters": {
                "all_of": [
                    {
                        "test": "weather",
                        "operator": "==",
                        "value": "clear"
                    },
                    {
                        "test": "is_daytime",
                        "value": true
                    }
                ]
            }
        }
    ]
}
```

#### cave_spider

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/cave_spider.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:environment_sensor": {
    "triggers": {
        "filters": {
            "test": "is_brightness",
            "operator": "<",
            "value": 0.49
        },
        "event": "minecraft:become_hostile"
    }
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:environment_sensor": {
    "triggers": {
        "filters": {
            "test": "is_brightness",
            "operator": ">",
            "value": 0.49
        },
        "event": "minecraft:become_neutral"
    }
}
```

#### dolphin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/dolphin.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:environment_sensor": {
    "triggers": [
        {
            "filters": {
                "all_of": [
                    {
                        "test": "on_ground",
                        "operator": "==",
                        "value": true
                    },
                    {
                        "test": "in_water",
                        "operator": "!=",
                        "value": true
                    }
                ]
            },
            "event": "navigation_on_land"
        }
    ]
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:environment_sensor": {
    "triggers": [
        {
            "filters": {
                "test": "in_water",
                "operator": "==",
                "value": true
            },
            "event": "navigation_off_land"
        },
        {
            "filters": {
                "test": "in_water_or_rain",
                "operator": "!=",
                "value": true
            },
            "event": "start_dryingout"
        }
    ]
}
```

#### fox

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/fox.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:environment_sensor": {
    "triggers": [
        {
            "filters": {
                "test": "is_daytime",
                "value": false
            },
            "event": "minecraft:fox_configure_night"
        },
        {
            "filters": {
                "test": "is_daytime",
                "value": true
            },
            "event": "minecraft:fox_configure_day"
        }
    ]
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:environment_sensor": {
    "triggers": [
        {
            "filters": {
                "all_of": [
                    {
                        "test": "is_daytime",
                        "value": true
                    },
                    {
                        "test": "has_target",
                        "operator": "==",
                        "value": false
                    }
                ]
            },
            "event": "minecraft:fox_configure_docile_day"
        },
        {
            "filters": {
                "all_of": [
                    {
                        "test": "is_daytime",
                        "value": false
                    },
                    {
                        "test": "has_target",
                        "operator": "==",
                        "value": false
                    }
                ]
            },
            "event": "minecraft:fox_configure_docile_night"
        }
    ]
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:environment_sensor": {
    "triggers": [
        {
            "filters": {
                "all_of": [
                    {
                        "test": "weather_at_position",
                        "operator": "!=",
                        "value": "thunderstorm"
                    },
                    {
                        "test": "is_daytime",
                        "value": true
                    }
                ]
            },
            "event": "minecraft:fox_configure_day"
        },
        {
            "filters": {
                "all_of": [
                    {
                        "test": "weather_at_position",
                        "operator": "!=",
                        "value": "thunderstorm"
                    },
                    {
                        "test": "is_daytime",
                        "value": false
                    }
                ]
            },
            "event": "minecraft:fox_configure_night"
        }
    ]
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:environment_sensor": {
    "triggers": [
        {
            "filters": {
                "test": "weather_at_position",
                "value": "thunderstorm"
            },
            "event": "minecraft:fox_configure_thunderstorm"
        },
        {
            "filters": {
                "test": "is_daytime",
                "value": false
            },
            "event": "minecraft:fox_configure_night"
        }
    ]
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:environment_sensor": {
    "triggers": [
        {
            "filters": {
                "test": "weather_at_position",
                "value": "thunderstorm"
            },
            "event": "minecraft:fox_configure_thunderstorm"
        },
        {
            "filters": {
                "test": "is_daytime",
                "value": true
            },
            "event": "minecraft:fox_configure_day"
        }
    ]
}
```

#### hoglin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/hoglin.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:environment_sensor": {
    "triggers": {
        "filters": {
            "test": "in_nether",
            "subject": "self",
            "operator": "==",
            "value": false
        },
        "event": "start_zombification_event"
    }
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:environment_sensor": {
    "triggers": {
        "filters": {
            "test": "in_nether",
            "subject": "self",
            "operator": "==",
            "value": true
        },
        "event": "stop_zombification_event"
    }
}
```

#### husk

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/husk.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:environment_sensor": {
    "triggers": [
        {
            "filters": {
                "test": "is_underwater",
                "subject": "self",
                "operator": "==",
                "value": true
            },
            "event": "minecraft:start_transforming"
        }
    ]
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:environment_sensor": {
    "triggers": {
        "filters": {
            "test": "is_underwater",
            "subject": "self",
            "operator": "==",
            "value": true
        },
        "event": "minecraft:start_transforming"
    }
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:environment_sensor": {
    "triggers": {
        "filters": {
            "test": "is_underwater",
            "subject": "self",
            "operator": "==",
            "value": false
        },
        "event": "minecraft:stop_transforming"
    }
}
```

#### llama

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/llama.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:environment_sensor": {
    "triggers": {
        "filters": {
            "all_of": [
                {
                    "test": "is_leashed",
                    "subject": "self",
                    "value": false
                },
                {
                    "test": "has_component",
                    "subject": "self",
                    "operator": "!=",
                    "value": "minecraft:is_tamed"
                }
            ]
        },
        "event": "minecraft:on_tame"
    }
}
```

#### piglin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/piglin.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:environment_sensor": {
    "triggers": {
        "filters": {
            "test": "in_nether",
            "subject": "self",
            "operator": "==",
            "value": false
        },
        "event": "start_zombification_event"
    }
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:environment_sensor": {
    "triggers": {
        "filters": {
            "test": "in_nether",
            "subject": "self",
            "operator": "==",
            "value": true
        },
        "event": "stop_zombification_event"
    }
}
```

#### piglin_brute

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/piglin_brute.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:environment_sensor": {
    "triggers": {
        "filters": {
            "test": "in_nether",
            "subject": "self",
            "operator": "==",
            "value": false
        },
        "event": "start_zombification_event"
    }
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:environment_sensor": {
    "triggers": {
        "filters": {
            "test": "in_nether",
            "subject": "self",
            "operator": "==",
            "value": true
        },
        "event": "stop_zombification_event"
    }
}
```

#### pillager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/pillager.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:environment_sensor": {
    "triggers": {
        "filters": {
            "test": "is_underwater",
            "subject": "self",
            "operator": "==",
            "value": true
        },
        "event": "minecraft:melee_mode"
    }
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:environment_sensor": {
    "triggers": {
        "filters": {
            "test": "in_water",
            "subject": "self",
            "operator": "==",
            "value": false
        },
        "event": "minecraft:ranged_mode"
    }
}
```

#### player

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/player.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:environment_sensor": {
    "triggers": {
        "filters": {
            "all_of": [
                {
                    "test": "has_mob_effect",
                    "subject": "self",
                    "value": "bad_omen"
                },
                {
                    "test": "is_in_village",
                    "subject": "self",
                    "value": true
                }
            ]
        },
        "event": "minecraft:trigger_raid"
    }
}
```

#### skeleton

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/skeleton.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:environment_sensor": {
    "triggers": [
        {
            "filters": {
                "test": "is_underwater",
                "subject": "self",
                "operator": "==",
                "value": true
            },
            "event": "minecraft:melee_mode"
        },
        {
            "filters": {
                "test": "has_ranged_weapon",
                "subject": "self",
                "operator": "==",
                "value": false
            },
            "event": "minecraft:melee_mode"
        },
        {
            "filters": {
                "test": "in_block",
                "subject": "self",
                "operator": "==",
                "value": "minecraft:powder_snow"
            },
            "event": "got_in_powder_snow"
        }
    ]
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:environment_sensor": {
    "triggers": [
        {
            "filters": {
                "test": "in_block",
                "subject": "self",
                "operator": "!=",
                "value": "minecraft:powder_snow"
            },
            "event": "got_out_of_powder_snow"
        }
    ]
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:environment_sensor": {
    "triggers": [
        {
            "filters": {
                "test": "is_underwater",
                "subject": "self",
                "operator": "==",
                "value": true
            },
            "event": "minecraft:melee_mode"
        },
        {
            "filters": {
                "test": "has_ranged_weapon",
                "subject": "self",
                "operator": "==",
                "value": false
            },
            "event": "minecraft:melee_mode"
        },
        {
            "filters": {
                "all_of": [
                    {
                        "test": "in_water",
                        "subject": "self",
                        "operator": "==",
                        "value": false
                    },
                    {
                        "test": "has_ranged_weapon",
                        "subject": "self",
                        "operator": "==",
                        "value": true
                    }
                ]
            },
            "event": "minecraft:ranged_mode"
        }
    ]
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:environment_sensor": {
    "triggers": [
        {
            "filters": {
                "all_of": [
                    {
                        "test": "in_water",
                        "subject": "self",
                        "operator": "==",
                        "value": false
                    },
                    {
                        "test": "has_ranged_weapon",
                        "subject": "self",
                        "operator": "==",
                        "value": true
                    }
                ]
            },
            "event": "minecraft:ranged_mode"
        },
        {
            "filters": {
                "test": "in_block",
                "subject": "self",
                "operator": "==",
                "value": "minecraft:powder_snow"
            },
            "event": "got_in_powder_snow"
        }
    ]
}
```

#### spider

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/spider.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:environment_sensor": {
    "triggers": {
        "filters": {
            "test": "is_brightness",
            "operator": "<",
            "value": 0.49
        },
        "event": "minecraft:become_hostile"
    }
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:environment_sensor": {
    "triggers": {
        "filters": {
            "test": "is_brightness",
            "operator": ">",
            "value": 0.49
        },
        "event": "minecraft:become_neutral"
    }
}
```

#### stray

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/stray.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:environment_sensor": {
    "triggers": [
        {
            "filters": {
                "test": "is_underwater",
                "subject": "self",
                "operator": "==",
                "value": true
            },
            "event": "minecraft:melee_mode"
        },
        {
            "filters": {
                "test": "has_ranged_weapon",
                "subject": "self",
                "operator": "==",
                "value": false
            },
            "event": "minecraft:melee_mode"
        }
    ]
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:environment_sensor": {
    "triggers": [
        {
            "filters": {
                "all_of": [
                    {
                        "test": "in_water",
                        "subject": "self",
                        "operator": "==",
                        "value": false
                    },
                    {
                        "test": "has_ranged_weapon",
                        "subject": "self",
                        "operator": "==",
                        "value": true
                    }
                ]
            },
            "event": "minecraft:ranged_mode"
        }
    ]
}
```

#### strider

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/strider.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:environment_sensor": {
    "triggers": {
        "filters": {
            "any_of": [
                {
                    "test": "in_lava",
                    "subject": "self",
                    "operator": "==",
                    "value": true
                },
                {
                    "test": "in_lava",
                    "subject": "other",
                    "operator": "==",
                    "value": true
                }
            ]
        },
        "event": "stop_suffocating"
    }
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:environment_sensor": {
    "triggers": {
        "filters": {
            "all_of": [
                {
                    "test": "in_lava",
                    "subject": "self",
                    "operator": "==",
                    "value": false
                },
                {
                    "any_of": [
                        {
                            "test": "is_riding",
                            "subject": "self",
                            "operator": "==",
                            "value": false
                        },
                        {
                            "test": "in_lava",
                            "subject": "other",
                            "operator": "==",
                            "value": false
                        }
                    ]
                }
            ]
        },
        "event": "start_suffocating"
    }
}
```

#### zombie

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie.json)</small>

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

<CodeHeader></CodeHeader>

```json
"minecraft:environment_sensor": {
    "triggers": {
        "filters": {
            "test": "is_underwater",
            "subject": "self",
            "operator": "==",
            "value": true
        },
        "event": "minecraft:start_transforming"
    }
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:environment_sensor": {
    "triggers": {
        "filters": {
            "test": "is_underwater",
            "subject": "self",
            "operator": "==",
            "value": false
        },
        "event": "minecraft:stop_transforming"
    }
}
```

</Spoiler>

## equip_item

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Aequip_item)</small>

<Spoiler title="Show">

#### drowned

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/drowned.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:equip_item": {}
```

#### fox

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/fox.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:equip_item": {}
```

#### husk

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/husk.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:equip_item": {}
```

#### piglin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/piglin.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:equip_item": {}
```

#### pillager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/pillager.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:equip_item": {}
```

#### skeleton

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/skeleton.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:equip_item": {}
```

#### stray

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/stray.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:equip_item": {}
```

#### wither_skeleton

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/wither_skeleton.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:equip_item": {}
```

#### zombie

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:equip_item": {}
```

#### zombie_pigman

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie_pigman.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:equip_item": {}
```

#### zombie_villager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie_villager.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:equip_item": {}
```

#### zombie_villager_v2

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie_villager_v2.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:equip_item": {}
```

</Spoiler>

## equipment

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Aequipment)</small>

<Spoiler title="Show">

#### drowned

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/drowned.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:equipment": {
    "table": "loot_tables/entities/drowned_ranged_equipment.json",
    "slot_drop_chance": [
        {
            "slot": "slot.weapon.offhand",
            "drop_chance": 1.0
        }
    ]
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:equipment": {
    "table": "loot_tables/entities/drowned_equipment.json",
    "slot_drop_chance": [
        {
            "slot": "slot.weapon.offhand",
            "drop_chance": 1.0
        }
    ]
}
```

#### fox

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/fox.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:equipment": {
    "table": "loot_tables/entities/fox_equipment.json",
    "slot_drop_chance": [
        {
            "slot": "slot.weapon.mainhand",
            "drop_chance": 1.0
        }
    ]
}
```

#### husk

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/husk.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:equipment": {
    "table": "loot_tables/entities/zombie_equipment.json"
}
```

#### piglin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/piglin.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:equipment": {
    "table": "loot_tables/entities/piglin_gear_ranged.json"
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:equipment": {
    "table": "loot_tables/entities/piglin_gear_melee.json"
}
```

#### piglin_brute

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/piglin_brute.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:equipment": {
    "table": "loot_tables/entities/piglin_brute_gear.json"
}
```

#### pillager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/pillager.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:equipment": {
    "table": "loot_tables/entities/pillager_gear.json"
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:equipment": {
    "table": "loot_tables/entities/pillager_captain_equipment.json",
    "slot_drop_chance": [
        {
            "slot": "slot.armor.chest",
            "drop_chance": 1.0
        }
    ]
}
```

#### skeleton

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/skeleton.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:equipment": {
    "table": "loot_tables/entities/skeleton_gear.json"
}
```

#### stray

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/stray.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:equipment": {
    "table": "loot_tables/entities/skeleton_gear.json"
}
```

#### vex

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/vex.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:equipment": {
    "table": "loot_tables/entities/vex_gear.json"
}
```

#### vindicator

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/vindicator.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:equipment": {
    "table": "loot_tables/entities/vindicator_gear.json"
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:equipment": {
    "table": "loot_tables/entities/vindicator_captain_equipment.json",
    "slot_drop_chance": [
        {
            "slot": "slot.armor.chest",
            "drop_chance": 1.0
        }
    ]
}
```

#### wither_skeleton

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/wither_skeleton.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:equipment": {
    "table": "loot_tables/entities/wither_skeleton_gear.json"
}
```

#### zombie

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:equipment": {
    "table": "loot_tables/entities/zombie_equipment.json"
}
```

#### zombie_pigman

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie_pigman.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:equipment": {
    "table": "loot_tables/entities/zombie_pigman_gear.json"
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:equipment": {
    "table": "loot_tables/entities/zombified_piglin_rider_gear.json"
}
```

</Spoiler>

## equippable

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Aequippable)</small>

<Spoiler title="Show">

#### donkey

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/donkey.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:equippable": {
    "slots": [
        {
            "slot": 0,
            "item": "saddle",
            "accepted_items": [
                "saddle"
            ],
            "on_equip": {
                "event": "minecraft:donkey_saddled"
            },
            "on_unequip": {
                "event": "minecraft:donkey_unsaddled"
            }
        }
    ]
}
```

#### horse

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/horse.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:equippable": {
    "slots": [
        {
            "slot": 0,
            "item": "saddle",
            "accepted_items": [
                "saddle"
            ],
            "on_equip": {
                "event": "minecraft:horse_saddled"
            },
            "on_unequip": {
                "event": "minecraft:horse_unsaddled"
            }
        },
        {
            "slot": 1,
            "item": "horsearmoriron",
            "accepted_items": [
                "horsearmorleather",
                "horsearmoriron",
                "horsearmorgold",
                "horsearmordiamond"
            ]
        }
    ]
}
```

#### llama

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/llama.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:equippable": {
    "slots": [
        {
            "slot": 1,
            "item": "carpet",
            "accepted_items": [
                "carpet"
            ]
        }
    ]
}
```

#### mule

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/mule.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:equippable": {
    "slots": [
        {
            "slot": 0,
            "item": "saddle",
            "accepted_items": [
                "saddle"
            ],
            "on_equip": {
                "event": "minecraft:mule_saddled"
            },
            "on_unequip": {
                "event": "minecraft:mule_unsaddled"
            }
        }
    ]
}
```

</Spoiler>

## experience_reward

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Aexperience_reward)</small>

<Spoiler title="Show">

#### axolotl

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/axolotl.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:experience_reward": {
    "on_bred": "Math.Random(1,7)",
    "on_death": "query.last_hit_by_player ? Math.Random(1,3) : 0"
}
```

#### bee

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/bee.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:experience_reward": {
    "on_bred": "Math.Random(1,7)",
    "on_death": "query.last_hit_by_player ? Math.Random(1,3) : 0"
}
```

#### blaze

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/blaze.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:experience_reward": {
    "on_death": "query.last_hit_by_player ? 10 : 0"
}
```

#### cat

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/cat.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:experience_reward": {
    "on_bred": "Math.Random(1,7)",
    "on_death": "query.last_hit_by_player ? Math.Random(1,3) : 0"
}
```

#### cave_spider

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/cave_spider.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:experience_reward": {
    "on_death": "query.last_hit_by_player ? 5 : 0"
}
```

#### chicken

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/chicken.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:experience_reward": {
    "on_bred": "Math.Random(1,7)",
    "on_death": "query.last_hit_by_player ? Math.Random(1,3) : 0"
}
```

#### cow

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/cow.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:experience_reward": {
    "on_bred": "Math.Random(1,7)",
    "on_death": "query.last_hit_by_player ? Math.Random(1,3) : 0"
}
```

#### creeper

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/creeper.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:experience_reward": {
    "on_death": "query.last_hit_by_player ? 5 : 0"
}
```

#### dolphin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/dolphin.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:experience_reward": {
    "on_death": "query.last_hit_by_player ? Math.Random(1,3) : 0"
}
```

#### donkey

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/donkey.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:experience_reward": {
    "on_bred": "Math.Random(1,7)",
    "on_death": "query.last_hit_by_player ? Math.Random(1,3) : 0"
}
```

#### drowned

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/drowned.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:experience_reward": {
    "on_death": "query.last_hit_by_player ? 12 + (query.equipment_count * Math.Random(1,3)) : 0"
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:experience_reward": {
    "on_death": "query.last_hit_by_player ? 5 + (query.equipment_count * Math.Random(1,3)) : 0"
}
```

#### elder_guardian

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/elder_guardian.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:experience_reward": {
    "on_death": "query.last_hit_by_player ? 10 : 0"
}
```

#### enderman

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/enderman.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:experience_reward": {
    "on_death": "query.last_hit_by_player ? 5 : 0"
}
```

#### endermite

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/endermite.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:experience_reward": {
    "on_death": "query.last_hit_by_player ? 3 : 0"
}
```

#### evocation_illager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/evocation_illager.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:experience_reward": {
    "on_death": "10"
}
```

#### fish

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/fish.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:experience_reward": {
    "on_death": "query.last_hit_by_player ? Math.Random(1,3) : 0"
}
```

#### fox

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/fox.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:experience_reward": {
    "on_bred": "Math.Random(1,7)",
    "on_death": "query.last_hit_by_player ? Math.Random(1,3) : 0"
}
```

#### ghast

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/ghast.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:experience_reward": {
    "on_death": "query.last_hit_by_player ? 5 + (query.equipment_count * Math.Random(1,3)) : 0"
}
```

#### glow_squid

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/glow_squid.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:experience_reward": {
    "on_death": "!query.is_baby && query.last_hit_by_player ? Math.Random(1,3) : 0"
}
```

#### goat

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/goat.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:experience_reward": {
    "on_bred": "Math.Random(1,7)",
    "on_death": "query.last_hit_by_player ? Math.Random(1,3) : 0"
}
```

#### guardian

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/guardian.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:experience_reward": {
    "on_death": "query.last_hit_by_player ? 10 : 0"
}
```

#### hoglin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/hoglin.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:experience_reward": {
    "on_bred": "Math.Random(1,7)",
    "on_death": "query.last_hit_by_player ? 5 : 0"
}
```

#### horse

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/horse.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:experience_reward": {
    "on_bred": "Math.Random(1,7)",
    "on_death": "query.last_hit_by_player ? Math.Random(1,3) : 0"
}
```

#### husk

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/husk.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:experience_reward": {
    "on_death": "query.last_hit_by_player ? 12 + (query.equipment_count * Math.Random(1,3)) : 0"
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:experience_reward": {
    "on_death": "query.last_hit_by_player ? 5 + (query.equipment_count * Math.Random(1,3)) : 0"
}
```

#### llama

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/llama.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:experience_reward": {
    "on_bred": "Math.Random(1,7)",
    "on_death": "query.last_hit_by_player ? Math.Random(1,3) : 0"
}
```

#### magma_cube

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/magma_cube.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:experience_reward": {
    "on_death": "query.last_hit_by_player ? query.variant : 0"
}
```

#### mooshroom

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/mooshroom.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:experience_reward": {
    "on_bred": "Math.Random(1,7)",
    "on_death": "query.last_hit_by_player ? Math.Random(1,3) : 0"
}
```

#### mule

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/mule.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:experience_reward": {
    "on_death": "query.last_hit_by_player ? Math.Random(1,3) : 0"
}
```

#### ocelot

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/ocelot.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:experience_reward": {
    "on_bred": "Math.Random(1,7)",
    "on_death": "query.last_hit_by_player ? Math.Random(1,3) : 0"
}
```

#### panda

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/panda.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:experience_reward": {
    "on_bred": "Math.Random(1,7)",
    "on_death": "query.last_hit_by_player ? Math.Random(1,3) : 0"
}
```

#### parrot

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/parrot.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:experience_reward": {
    "on_death": "query.last_hit_by_player ? Math.Random(1,3) : 0"
}
```

#### phantom

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/phantom.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:experience_reward": {
    "on_death": "query.last_hit_by_player ? 5 : 0"
}
```

#### pig

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/pig.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:experience_reward": {
    "on_bred": "Math.Random(1,7)",
    "on_death": "query.last_hit_by_player ? Math.Random(1,3) : 0"
}
```

#### piglin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/piglin.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:experience_reward": {
    "on_death": "query.last_hit_by_player ? 1 + (query.equipment_count * Math.Random(1,2)) : 0"
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:experience_reward": {
    "on_death": "query.last_hit_by_player ? 5 + (query.equipment_count * Math.Random(1,3)) : 0"
}
```

#### piglin_brute

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/piglin_brute.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:experience_reward": {
    "on_death": "query.last_hit_by_player ? 20 : 0"
}
```

#### pillager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/pillager.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:experience_reward": {
    "on_death": "query.last_hit_by_player ? (query.is_baby ? 12 : 5) + (Math.die_roll(query.equipment_count,1,3)) : 0"
}
```

#### player

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/player.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:experience_reward": {
    "on_death": "Math.Min(query.player_level * 7, 100)"
}
```

#### polar_bear

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/polar_bear.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:experience_reward": {
    "on_death": "query.last_hit_by_player ? Math.Random(1,3) : 0"
}
```

#### pufferfish

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/pufferfish.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:experience_reward": {
    "on_death": "query.last_hit_by_player ? Math.Random(1,3) : 0"
}
```

#### rabbit

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/rabbit.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:experience_reward": {
    "on_bred": "Math.Random(1,7)",
    "on_death": "query.last_hit_by_player ? Math.Random(1,3) : 0"
}
```

#### ravager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/ravager.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:experience_reward": {
    "on_death": "query.last_hit_by_player ? 20 : 0"
}
```

#### salmon

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/salmon.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:experience_reward": {
    "on_death": "query.last_hit_by_player ? Math.Random(1,3) : 0"
}
```

#### sheep

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/sheep.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:experience_reward": {
    "on_bred": "Math.Random(1,7)",
    "on_death": "query.last_hit_by_player ? Math.Random(1,3) : 0"
}
```

#### shulker

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/shulker.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:experience_reward": {
    "on_death": "query.last_hit_by_player ? 5 : 0"
}
```

#### silverfish

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/silverfish.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:experience_reward": {
    "on_death": "query.last_hit_by_player ? 5 : 0"
}
```

#### skeleton

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/skeleton.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:experience_reward": {
    "on_death": "query.last_hit_by_player ? 5 + (query.equipment_count * Math.Random(1,3)) : 0"
}
```

#### skeleton_horse

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/skeleton_horse.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:experience_reward": {
    "on_death": "query.last_hit_by_player ? Math.Random(1,3) : 0"
}
```

#### slime

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/slime.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:experience_reward": {
    "on_death": "query.last_hit_by_player ? query.variant : 0"
}
```

#### spider

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/spider.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:experience_reward": {
    "on_death": "query.last_hit_by_player ? 5 : 0"
}
```

#### squid

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/squid.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:experience_reward": {
    "on_death": "!query.is_baby && query.last_hit_by_player ? Math.Random(1,3) : 0"
}
```

#### stray

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/stray.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:experience_reward": {
    "on_death": "query.last_hit_by_player ? 5 + (query.equipment_count * Math.Random(1,3)) : 0"
}
```

#### strider

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/strider.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:experience_reward": {
    "on_bred": "Math.Random(1,7)",
    "on_death": "query.last_hit_by_player ? Math.Random(1,3) : 0"
}
```

#### tropicalfish

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/tropicalfish.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:experience_reward": {
    "on_death": "query.last_hit_by_player ? Math.Random(1,3) : 0"
}
```

#### turtle

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/turtle.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:experience_reward": {
    "on_bred": "Math.Random(1,7)",
    "on_death": "query.last_hit_by_player ? Math.Random(1,3) : 0"
}
```

#### vex

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/vex.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:experience_reward": {
    "on_death": "query.last_hit_by_player ? 5 + (query.equipment_count * Math.Random(1,3)) : 0"
}
```

#### vindicator

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/vindicator.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:experience_reward": {
    "on_death": "query.last_hit_by_player ? (query.is_baby ? 12 : 5) + (Math.die_roll(query.equipment_count,1,3)) : 0"
}
```

#### witch

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/witch.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:experience_reward": {
    "on_death": "query.last_hit_by_player ? (query.is_baby ? 12 : 5) + (Math.die_roll(query.equipment_count,1,3)) : 0"
}
```

#### wither

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/wither.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:experience_reward": {
    "on_death": "50"
}
```

#### wither_skeleton

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/wither_skeleton.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:experience_reward": {
    "on_death": "query.last_hit_by_player ? 5 + (query.equipment_count * Math.Random(1,3)) : 0"
}
```

#### wolf

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/wolf.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:experience_reward": {
    "on_bred": "Math.Random(1,7)",
    "on_death": "query.last_hit_by_player ? Math.Random(1,3) : 0"
}
```

#### zoglin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zoglin.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:experience_reward": {
    "on_bred": "Math.Random(1,7)",
    "on_death": "query.last_hit_by_player ? 5 : 0"
}
```

#### zombie

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:experience_reward": {
    "on_death": "query.last_hit_by_player ? 12 + (query.equipment_count * Math.Random(1,3)) : 0"
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:experience_reward": {
    "on_death": "query.last_hit_by_player ? 5 + (query.equipment_count * Math.Random(1,3)) : 0"
}
```

#### zombie_horse

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie_horse.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:experience_reward": {
    "on_death": "query.last_hit_by_player ? Math.Random(1,3) : 0"
}
```

#### zombie_pigman

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie_pigman.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:experience_reward": {
    "on_death": "query.last_hit_by_player ? 12 + (query.equipment_count * Math.Random(1,3)) : 0"
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:experience_reward": {
    "on_death": "query.last_hit_by_player ? 5 + (query.equipment_count * Math.Random(1,3)) : 0"
}
```

#### zombie_villager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie_villager.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:experience_reward": {
    "on_death": "query.last_hit_by_player ? 12 + (query.equipment_count * Math.Random(1,3)) : 0"
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:experience_reward": {
    "on_death": "query.last_hit_by_player ? 5 + (query.equipment_count * Math.Random(1,3)) : 0"
}
```

#### zombie_villager_v2

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie_villager_v2.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:experience_reward": {
    "on_death": "query.last_hit_by_player ? 12 + (query.equipment_count * Math.Random(1,3)) : 0"
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:experience_reward": {
    "on_death": "query.last_hit_by_player ? 5 + (query.equipment_count * Math.Random(1,3)) : 0"
}
```

</Spoiler>

## explode

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Aexplode)</small>

<Spoiler title="Show">

#### creeper

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/creeper.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:explode": {
    "fuse_length": 1.5,
    "fuse_lit": true,
    "power": 3,
    "causes_fire": false,
    "destroy_affected_by_griefing": true
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:explode": {
    "fuse_length": 1.5,
    "fuse_lit": true,
    "power": 6,
    "causes_fire": false,
    "destroy_affected_by_griefing": true
}
```

#### ender_crystal

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/ender_crystal.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:explode": {
    "fuse_length": 0,
    "fuse_lit": true,
    "power": 6,
    "causes_fire": false,
    "destroy_affected_by_griefing": true
}
```

#### fireball

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/fireball.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:explode": {
    "fuse_length": 0,
    "fuse_lit": true,
    "power": 1,
    "causes_fire": true,
    "fire_affected_by_griefing": true,
    "destroy_affected_by_griefing": true
}
```

#### tnt

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/tnt.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:explode": {
    "fuse_length": 4,
    "fuse_lit": true,
    "power": 4,
    "causes_fire": false
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:explode": {
    "fuse_length": {
        "range_min": 0.5,
        "range_max": 2.0
    },
    "fuse_lit": true,
    "power": 4,
    "causes_fire": false
}
```

#### tnt_minecart

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/tnt_minecart.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:explode": {
    "fuse_length": 4,
    "fuse_lit": true,
    "power": 3,
    "causes_fire": false
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:explode": {
    "fuse_length": 0,
    "fuse_lit": true,
    "power": 3,
    "causes_fire": false
}
```

#### wither_skull

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/wither_skull.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:explode": {
    "fuse_length": 0,
    "fuse_lit": true,
    "power": 1,
    "causes_fire": false,
    "destroy_affected_by_griefing": true
}
```

#### wither_skull_dangerous

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/wither_skull_dangerous.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:explode": {
    "fuse_length": 0,
    "fuse_lit": true,
    "power": 1,
    "causes_fire": false,
    "max_resistance": 4.0,
    "destroy_affected_by_griefing": true
}
```

</Spoiler>

## fire_immune

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Afire_immune)</small>

<Spoiler title="Show">

#### blaze

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/blaze.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:fire_immune": {}
```

#### ender_crystal

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/ender_crystal.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:fire_immune": true
```

#### ender_dragon

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/ender_dragon.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:fire_immune": true
```

#### ghast

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/ghast.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:fire_immune": {}
```

#### magma_cube

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/magma_cube.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:fire_immune": {}
```

#### npc

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/npc.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:fire_immune": true
```

#### strider

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/strider.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:fire_immune": {}
```

#### vex

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/vex.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:fire_immune": {}
```

#### wither

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/wither.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:fire_immune": {}
```

#### wither_skeleton

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/wither_skeleton.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:fire_immune": {}
```

#### zoglin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zoglin.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:fire_immune": {}
```

#### zombie_pigman

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie_pigman.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:fire_immune": {}
```

</Spoiler>

## flocking

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Aflocking)</small>

<Spoiler title="Show">

#### dolphin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/dolphin.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:flocking": {
    "in_water": false,
    "match_variants": false,
    "use_center_of_mass": false,
    "low_flock_limit": 4,
    "high_flock_limit": 8,
    "goal_weight": 2.0,
    "loner_chance": 0.1,
    "influence_radius": 6.0,
    "breach_influence": 0.0,
    "separation_weight": 1.75,
    "separation_threshold": 3.0,
    "cohesion_weight": 1.85,
    "cohesion_threshold": 6.5,
    "innner_cohesion_threshold": 3.5,
    "min_height": 4.0,
    "max_height": 4.0,
    "block_distance": 1.0,
    "block_weight": 0.0
}
```

#### fish

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/fish.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:flocking": {
    "in_water": true,
    "match_variants": false,
    "use_center_of_mass": true,
    "low_flock_limit": 4,
    "high_flock_limit": 8,
    "goal_weight": 2.0,
    "loner_chance": 0.1,
    "influence_radius": 3.0,
    "breach_influence": 7.0,
    "separation_weight": 1.75,
    "separation_threshold": 0.95,
    "cohesion_weight": 2.0,
    "cohesion_threshold": 1.95,
    "innner_cohesion_threshold": 1.25,
    "min_height": 1.5,
    "max_height": 6.0,
    "block_distance": 2.0,
    "block_weight": 0.85
}
```

#### pufferfish

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/pufferfish.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:flocking": {
    "in_water": true,
    "match_variants": false,
    "use_center_of_mass": true,
    "low_flock_limit": 4,
    "high_flock_limit": 8,
    "goal_weight": 2.0,
    "loner_chance": 0.1,
    "influence_radius": 3.0,
    "breach_influence": 7.0,
    "separation_weight": 1.75,
    "separation_threshold": 0.95,
    "cohesion_weight": 2.0,
    "cohesion_threshold": 1.95,
    "innner_cohesion_threshold": 1.25,
    "min_height": 1.5,
    "max_height": 6.0,
    "block_distance": 2.0,
    "block_weight": 0.85
}
```

#### salmon

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/salmon.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:flocking": {
    "in_water": true,
    "match_variants": false,
    "use_center_of_mass": false,
    "low_flock_limit": 4,
    "high_flock_limit": 8,
    "goal_weight": 2.0,
    "loner_chance": 0.1,
    "influence_radius": 3.0,
    "breach_influence": 7.0,
    "separation_weight": 0.65,
    "separation_threshold": 0.15,
    "cohesion_weight": 2.25,
    "cohesion_threshold": 1.5,
    "innner_cohesion_threshold": 1.5,
    "min_height": 4.0,
    "max_height": 4.0,
    "block_distance": 1.0,
    "block_weight": 0.75
}
```

#### tropicalfish

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/tropicalfish.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:flocking": {
    "in_water": true,
    "match_variants": true,
    "use_center_of_mass": false,
    "low_flock_limit": 4,
    "high_flock_limit": 8,
    "goal_weight": 2.0,
    "loner_chance": 0.1,
    "influence_radius": 3.0,
    "breach_influence": 7.0,
    "separation_weight": 0.65,
    "separation_threshold": 0.15,
    "cohesion_weight": 2.75,
    "cohesion_threshold": 1.5,
    "innner_cohesion_threshold": 1.5,
    "min_height": 1.5,
    "max_height": 6.0,
    "block_distance": 2.0,
    "block_weight": 0.85
}
```

</Spoiler>

## flying_speed

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Aflying_speed)</small>

<Spoiler title="Show">

#### bee

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/bee.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:flying_speed": {
    "value": 0.15
}
```

#### ender_dragon

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/ender_dragon.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:flying_speed": {
    "value": 0.6
}
```

</Spoiler>

## follow_range

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Afollow_range)</small>

<Spoiler title="Show">

#### bee

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/bee.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:follow_range": {
    "value": 1024
}
```

#### blaze

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/blaze.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:follow_range": {
    "value": 48,
    "max": 48
}
```

#### dolphin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/dolphin.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:follow_range": {
    "value": 48,
    "max": 48
}
```

#### elder_guardian

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/elder_guardian.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:follow_range": {
    "value": 16,
    "max": 16
}
```

#### enderman

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/enderman.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:follow_range": {
    "value": 32,
    "max": 32
}
```

#### evocation_illager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/evocation_illager.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:follow_range": {
    "value": 64
}
```

#### ghast

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/ghast.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:follow_range": {
    "value": 64,
    "max": 64
}
```

#### guardian

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/guardian.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:follow_range": {
    "value": 16,
    "max": 16
}
```

#### iron_golem

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/iron_golem.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:follow_range": {
    "value": 64
}
```

#### llama

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/llama.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:follow_range": {
    "value": 40,
    "max": 40
}
```

#### phantom

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/phantom.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:follow_range": {
    "value": 64,
    "max": 64
}
```

#### piglin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/piglin.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:follow_range": {
    "value": 64
}
```

#### piglin_brute

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/piglin_brute.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:follow_range": {
    "value": 64
}
```

#### pillager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/pillager.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:follow_range": {
    "value": 64
}
```

#### polar_bear

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/polar_bear.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:follow_range": {
    "value": 48
}
```

#### ravager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/ravager.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:follow_range": {
    "value": 64
}
```

#### turtle

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/turtle.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:follow_range": {
    "value": 1024
}
```

#### villager_v2

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/villager_v2.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:follow_range": {
    "value": 128
}
```

#### vindicator

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/vindicator.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:follow_range": {
    "value": 64
}
```

#### witch

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/witch.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:follow_range": {
    "value": 64
}
```

</Spoiler>

## genetics

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Agenetics)</small>

<Spoiler title="Show">

#### goat

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/goat.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:genetics": {
    "mutation_rate": 0.02,
    "genes": [
        {
            "name": "goat_variant",
            "use_simplified_breeding": true,
            "allele_range": {
                "range_min": 1,
                "range_max": 100
            },
            "genetic_variants": [
                {
                    "main_allele": {
                        "range_min": 1,
                        "range_max": 2
                    },
                    "birth_event": {
                        "event": "minecraft:born_screamer",
                        "target": "self"
                    }
                },
                {
                    "main_allele": {
                        "range_min": 3,
                        "range_max": 100
                    },
                    "birth_event": {
                        "event": "minecraft:born_default",
                        "target": "self"
                    }
                }
            ]
        }
    ]
}
```

#### panda

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/panda.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:genetics": {
    "mutation_rate": 0.03125,
    "genes": [
        {
            "name": "panda_variant",
            "allele_range": {
                "range_min": 0,
                "range_max": 15
            },
            "genetic_variants": [
                {
                    "main_allele": 0,
                    "birth_event": {
                        "event": "minecraft:panda_lazy",
                        "target": "self"
                    }
                },
                {
                    "main_allele": 1,
                    "birth_event": {
                        "event": "minecraft:panda_worried",
                        "target": "self"
                    }
                },
                {
                    "main_allele": 2,
                    "birth_event": {
                        "event": "minecraft:panda_playful",
                        "target": "self"
                    }
                },
                {
                    "main_allele": 3,
                    "birth_event": {
                        "event": "minecraft:panda_aggressive",
                        "target": "self"
                    }
                },
                {
                    "both_allele": {
                        "range_min": 4,
                        "range_max": 7
                    },
                    "birth_event": {
                        "event": "minecraft:panda_weak",
                        "target": "self"
                    }
                },
                {
                    "both_allele": {
                        "range_min": 8,
                        "range_max": 9
                    },
                    "birth_event": {
                        "event": "minecraft:panda_brown",
                        "target": "self"
                    }
                }
            ]
        }
    ]
}
```

</Spoiler>

## giveable

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Agiveable)</small>

<Spoiler title="Show">

<CodeHeader></CodeHeader>

```json
"minecraft:giveable": {
    "triggers": {
        "cooldown": 3.0,
        "items": [
            "bamboo",
            "cake"
        ],
        "on_give": {
            "event": "minecraft:on_calm",
            "target": "self"
        }
    }
}
```

</Spoiler>

## group_size

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Agroup_size)</small>

<Spoiler title="Show">

#### hoglin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/hoglin.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:group_size": {
    "radius": 32,
    "filters": {
        "all_of": [
            {
                "test": "has_component",
                "operator": "!=",
                "value": "minecraft:is_baby"
            },
            {
                "test": "is_family",
                "value": "hoglin"
            }
        ]
    }
}
```

#### piglin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/piglin.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:group_size": {
    "radius": 32,
    "filters": {
        "all_of": [
            {
                "test": "has_component",
                "operator": "!=",
                "value": "minecraft:is_baby"
            },
            {
                "test": "is_family",
                "value": "piglin"
            }
        ]
    }
}
```

</Spoiler>

## grows_crop

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Agrows_crop)</small>

<Spoiler title="Show">

#### bee

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/bee.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:grows_crop": {
    "charges": 10,
    "chance": 0.03
}
```

</Spoiler>

## healable

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Ahealable)</small>

<Spoiler title="Show">

#### cat

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/cat.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:healable": {
    "items": [
        {
            "item": "fish",
            "heal_amount": 2
        },
        {
            "item": "salmon",
            "heal_amount": 2
        }
    ]
}
```

#### donkey

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/donkey.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:healable": {
    "items": [
        {
            "item": "wheat",
            "heal_amount": 2
        },
        {
            "item": "sugar",
            "heal_amount": 1
        },
        {
            "item": "hay_block",
            "heal_amount": 20
        },
        {
            "item": "apple",
            "heal_amount": 3
        },
        {
            "item": "golden_carrot",
            "heal_amount": 4
        },
        {
            "item": "golden_apple",
            "heal_amount": 10
        },
        {
            "item": "appleEnchanted",
            "heal_amount": 10
        }
    ]
}
```

#### horse

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/horse.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:healable": {
    "items": [
        {
            "item": "wheat",
            "heal_amount": 2
        },
        {
            "item": "sugar",
            "heal_amount": 1
        },
        {
            "item": "hay_block",
            "heal_amount": 20
        },
        {
            "item": "apple",
            "heal_amount": 3
        },
        {
            "item": "golden_carrot",
            "heal_amount": 4
        },
        {
            "item": "golden_apple",
            "heal_amount": 10
        },
        {
            "item": "appleEnchanted",
            "heal_amount": 10
        }
    ]
}
```

#### llama

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/llama.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:healable": {
    "items": [
        {
            "item": "wheat",
            "heal_amount": 2
        },
        {
            "item": "hay_block",
            "heal_amount": 10
        }
    ]
}
```

#### mule

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/mule.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:healable": {
    "items": [
        {
            "item": "wheat",
            "heal_amount": 2
        },
        {
            "item": "sugar",
            "heal_amount": 1
        },
        {
            "item": "hay_block",
            "heal_amount": 20
        },
        {
            "item": "apple",
            "heal_amount": 3
        },
        {
            "item": "golden_carrot",
            "heal_amount": 4
        },
        {
            "item": "golden_apple",
            "heal_amount": 10
        },
        {
            "item": "appleEnchanted",
            "heal_amount": 10
        }
    ]
}
```

#### parrot

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/parrot.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:healable": {
    "force_use": true,
    "filters": {
        "test": "is_riding",
        "operator": "!=",
        "value": true
    },
    "items": [
        {
            "item": "cookie",
            "heal_amount": 0,
            "effects": [
                {
                    "name": "fatal_poison",
                    "chance": 1.0,
                    "duration": 1000,
                    "amplifier": 0
                }
            ]
        }
    ]
}
```

#### wolf

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/wolf.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:healable": {
    "items": [
        {
            "item": "porkchop",
            "heal_amount": 3
        },
        {
            "item": "cooked_porkchop",
            "heal_amount": 8
        },
        {
            "item": "fish",
            "heal_amount": 2
        },
        {
            "item": "salmon",
            "heal_amount": 2
        },
        {
            "item": "clownfish",
            "heal_amount": 1
        },
        {
            "item": "pufferfish",
            "heal_amount": 1
        },
        {
            "item": "cooked_fish",
            "heal_amount": 5
        },
        {
            "item": "cooked_salmon",
            "heal_amount": 6
        },
        {
            "item": "beef",
            "heal_amount": 3
        },
        {
            "item": "cooked_beef",
            "heal_amount": 8
        },
        {
            "item": "chicken",
            "heal_amount": 2
        },
        {
            "item": "cooked_chicken",
            "heal_amount": 6
        },
        {
            "item": "muttonRaw",
            "heal_amount": 2
        },
        {
            "item": "muttonCooked",
            "heal_amount": 6
        },
        {
            "item": "rotten_flesh",
            "heal_amount": 4
        },
        {
            "item": "rabbit",
            "heal_amount": 3
        },
        {
            "item": "cooked_rabbit",
            "heal_amount": 5
        },
        {
            "item": "rabbit_stew",
            "heal_amount": 10
        }
    ]
}
```

</Spoiler>

## health

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Ahealth)</small>

<Spoiler title="Show">

#### armor_stand

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/armor_stand.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:health": {
    "value": 6,
    "max": 6
}
```

#### axolotl

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/axolotl.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:health": {
    "value": 14
}
```

#### bat

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/bat.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:health": {
    "value": 6,
    "max": 6
}
```

#### bee

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/bee.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:health": {
    "value": 10,
    "max": 10
}
```

#### blaze

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/blaze.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:health": {
    "value": 20,
    "max": 20
}
```

#### cat

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/cat.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:health": {
    "value": 10,
    "max": 10
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:health": {
    "value": 20,
    "max": 20
}
```

#### cave_spider

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/cave_spider.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:health": {
    "value": 12,
    "max": 12
}
```

#### chicken

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/chicken.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:health": {
    "value": 4,
    "max": 4
}
```

#### cow

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/cow.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:health": {
    "value": 10,
    "max": 10
}
```

#### creeper

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/creeper.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:health": {
    "value": 20,
    "max": 20
}
```

#### dolphin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/dolphin.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:health": {
    "value": 10,
    "max": 10
}
```

#### donkey

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/donkey.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:health": {
    "value": {
        "range_min": 15,
        "range_max": 30
    }
}
```

#### drowned

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/drowned.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:health": {
    "value": 20,
    "max": 20
}
```

#### elder_guardian

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/elder_guardian.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:health": {
    "value": 80,
    "max": 80
}
```

#### enderman

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/enderman.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:health": {
    "value": 40,
    "max": 40
}
```

#### endermite

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/endermite.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:health": {
    "value": 8,
    "max": 8
}
```

#### ender_crystal

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/ender_crystal.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:health": {
    "value": 1,
    "max": 1
}
```

#### ender_dragon

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/ender_dragon.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:health": {
    "value": 200,
    "max": 200
}
```

#### evocation_illager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/evocation_illager.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:health": {
    "value": 24,
    "max": 24
}
```

#### fish

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/fish.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:health": {
    "value": 6,
    "max": 6
}
```

#### fox

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/fox.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:health": {
    "value": 20,
    "max": 20
}
```

#### ghast

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/ghast.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:health": {
    "value": 10,
    "max": 10
}
```

#### glow_squid

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/glow_squid.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:health": {
    "value": 10,
    "max": 10
}
```

#### goat

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/goat.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:health": {
    "value": 10,
    "max": 10
}
```

#### guardian

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/guardian.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:health": {
    "value": 30,
    "max": 30
}
```

#### hoglin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/hoglin.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:health": {
    "value": 40,
    "max": 40
}
```

#### horse

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/horse.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:health": {
    "value": {
        "range_min": 15,
        "range_max": 30
    }
}
```

#### husk

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/husk.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:health": {
    "value": 20,
    "max": 20
}
```

#### iron_golem

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/iron_golem.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:health": {
    "value": 100,
    "max": 100
}
```

#### llama

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/llama.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:health": {
    "value": {
        "range_min": 15,
        "range_max": 30
    }
}
```

#### magma_cube

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/magma_cube.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:health": {
    "value": 16,
    "max": 16
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:health": {
    "value": 4,
    "max": 4
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:health": {
    "value": 1,
    "max": 1
}
```

#### mooshroom

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/mooshroom.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:health": {
    "value": 10,
    "max": 10
}
```

#### mule

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/mule.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:health": {
    "value": {
        "range_min": 15,
        "range_max": 30
    }
}
```

#### ocelot

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/ocelot.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:health": {
    "value": 10,
    "max": 10
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:health": {
    "value": 20,
    "max": 20
}
```

#### panda

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/panda.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:health": {
    "value": 20,
    "max": 20
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:health": {
    "value": 10,
    "max": 10
}
```

#### parrot

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/parrot.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:health": {
    "value": 6,
    "max": 6
}
```

#### phantom

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/phantom.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:health": {
    "value": 20,
    "max": 20
}
```

#### pig

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/pig.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:health": {
    "value": 10,
    "max": 10
}
```

#### piglin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/piglin.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:health": {
    "value": 16,
    "max": 16
}
```

#### piglin_brute

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/piglin_brute.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:health": {
    "value": 50,
    "max": 50
}
```

#### pillager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/pillager.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:health": {
    "value": 24,
    "max": 24
}
```

#### polar_bear

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/polar_bear.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:health": {
    "value": 30
}
```

#### pufferfish

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/pufferfish.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:health": {
    "value": 6,
    "max": 6
}
```

#### rabbit

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/rabbit.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:health": {
    "value": 3,
    "max": 3
}
```

#### ravager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/ravager.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:health": {
    "max": 100,
    "value": 100
}
```

#### salmon

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/salmon.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:health": {
    "value": 6,
    "max": 6
}
```

#### sheep

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/sheep.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:health": {
    "value": 8,
    "max": 8
}
```

#### shulker

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/shulker.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:health": {
    "value": 30,
    "max": 30
}
```

#### silverfish

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/silverfish.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:health": {
    "value": 8,
    "max": 8
}
```

#### skeleton

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/skeleton.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:health": {
    "value": 20,
    "max": 20
}
```

#### skeleton_horse

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/skeleton_horse.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:health": {
    "value": 15,
    "max": 15
}
```

#### slime

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/slime.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:health": {
    "value": 16,
    "max": 16
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:health": {
    "value": 4,
    "max": 4
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:health": {
    "value": 1,
    "max": 1
}
```

#### snow_golem

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/snow_golem.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:health": {
    "value": 4,
    "max": 4
}
```

#### spider

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/spider.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:health": {
    "value": 16,
    "max": 16
}
```

#### squid

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/squid.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:health": {
    "value": 10,
    "max": 10
}
```

#### stray

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/stray.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:health": {
    "value": 20,
    "max": 20
}
```

#### strider

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/strider.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:health": {
    "value": 20,
    "max": 20
}
```

#### tripod_camera

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/tripod_camera.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:health": {
    "value": 4,
    "max": 4
}
```

#### tropicalfish

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/tropicalfish.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:health": {
    "value": 6,
    "max": 6
}
```

#### turtle

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/turtle.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:health": {
    "value": 30
}
```

#### vex

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/vex.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:health": {
    "value": 14,
    "max": 14
}
```

#### villager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/villager.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:health": {
    "value": 20,
    "max": 20
}
```

#### villager_v2

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/villager_v2.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:health": {
    "value": 20,
    "max": 20
}
```

#### vindicator

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/vindicator.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:health": {
    "value": 24,
    "max": 24
}
```

#### wandering_trader

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/wandering_trader.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:health": {
    "value": 20,
    "max": 20
}
```

#### witch

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/witch.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:health": {
    "value": 26,
    "max": 26
}
```

#### wither

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/wither.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:health": {
    "value": 600,
    "max": 600
}
```

#### wither_skeleton

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/wither_skeleton.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:health": {
    "value": 20,
    "max": 20
}
```

#### wolf

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/wolf.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:health": {
    "value": 8,
    "max": 8
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:health": {
    "value": 20,
    "max": 20
}
```

#### xp_orb

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/xp_orb.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:health": {
    "value": 5,
    "max": 5
}
```

#### zoglin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zoglin.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:health": {
    "value": 40,
    "max": 40
}
```

#### zombie

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:health": {
    "value": 20,
    "max": 20
}
```

#### zombie_horse

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie_horse.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:health": {
    "value": 15,
    "max": 15
}
```

#### zombie_pigman

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie_pigman.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:health": {
    "value": 20,
    "max": 20
}
```

#### zombie_villager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie_villager.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:health": {
    "value": 20,
    "max": 20
}
```

#### zombie_villager_v2

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie_villager_v2.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:health": {
    "value": 20,
    "max": 20
}
```

</Spoiler>

## hide

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Ahide)</small>

<Spoiler title="Show">

#### villager_v2

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/villager_v2.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:hide": {}
```

</Spoiler>

## home

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Ahome)</small>

<Spoiler title="Show">

#### bee

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/bee.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:home": {
    "restriction_radius": 22,
    "home_block_list": [
        "minecraft:bee_nest",
        "minecraft:beehive"
    ]
}
```

#### elder_guardian

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/elder_guardian.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:home": {
    "restriction_radius": 16
}
```

#### guardian

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/guardian.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:home": {
    "restriction_radius": 16
}
```

#### piglin_brute

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/piglin_brute.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:home": {}
```

#### turtle

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/turtle.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:home": {}
```

</Spoiler>

## horse.jump_strength

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Ahorse.jump_strength)</small>

<Spoiler title="Show">

#### donkey

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/donkey.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:horse.jump_strength": {
    "value": 0.5
}
```

#### horse

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/horse.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:horse.jump_strength": {
    "value": {
        "range_min": 0.4,
        "range_max": 1.0
    }
}
```

#### mule

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/mule.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:horse.jump_strength": {
    "value": 0.5
}
```

#### skeleton_horse

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/skeleton_horse.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:horse.jump_strength": {
    "value": {
        "range_min": 0.4,
        "range_max": 1.0
    }
}
```

#### zombie_horse

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie_horse.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:horse.jump_strength": {
    "value": {
        "range_min": 0.4,
        "range_max": 1.0
    }
}
```

</Spoiler>

## hurt_on_condition

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Ahurt_on_condition)</small>

<Spoiler title="Show">

#### armor_stand

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/armor_stand.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:hurt_on_condition": {
    "damage_conditions": [
        {
            "filters": {
                "test": "in_lava",
                "subject": "self",
                "operator": "==",
                "value": true
            },
            "cause": "lava",
            "damage_per_tick": 4
        }
    ]
}
```

#### arrow

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/arrow.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:hurt_on_condition": {
    "damage_conditions": [
        {
            "filters": {
                "test": "in_lava",
                "subject": "self",
                "operator": "==",
                "value": true
            },
            "cause": "lava",
            "damage_per_tick": 4
        }
    ]
}
```

#### axolotl

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/axolotl.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:hurt_on_condition": {
    "damage_conditions": [
        {
            "filters": {
                "test": "in_lava",
                "subject": "self",
                "operator": "==",
                "value": true
            },
            "cause": "lava",
            "damage_per_tick": 4
        }
    ]
}
```

#### bat

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/bat.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:hurt_on_condition": {
    "damage_conditions": [
        {
            "filters": {
                "test": "in_lava",
                "subject": "self",
                "operator": "==",
                "value": true
            },
            "cause": "lava",
            "damage_per_tick": 4
        }
    ]
}
```

#### bee

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/bee.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:hurt_on_condition": {
    "damage_conditions": [
        {
            "filters": {
                "test": "in_lava",
                "subject": "self",
                "operator": "==",
                "value": true
            },
            "cause": "lava",
            "damage_per_tick": 4
        }
    ]
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:hurt_on_condition": {
    "damage_conditions": [
        {
            "cause": "none",
            "damage_per_tick": 999
        }
    ]
}
```

#### blaze

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/blaze.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:hurt_on_condition": {
    "damage_conditions": [
        {
            "filters": {
                "test": "in_contact_with_water",
                "operator": "==",
                "value": true
            },
            "cause": "drowning",
            "damage_per_tick": 1
        }
    ]
}
```

#### boat

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/boat.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:hurt_on_condition": {
    "damage_conditions": [
        {
            "filters": {
                "test": "in_lava",
                "subject": "self",
                "operator": "==",
                "value": true
            },
            "cause": "lava",
            "damage_per_tick": 4
        }
    ]
}
```

#### cat

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/cat.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:hurt_on_condition": {
    "damage_conditions": [
        {
            "filters": {
                "test": "in_lava",
                "subject": "self",
                "operator": "==",
                "value": true
            },
            "cause": "lava",
            "damage_per_tick": 4
        }
    ]
}
```

#### cave_spider

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/cave_spider.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:hurt_on_condition": {
    "damage_conditions": [
        {
            "filters": {
                "test": "in_lava",
                "subject": "self",
                "operator": "==",
                "value": true
            },
            "cause": "lava",
            "damage_per_tick": 4
        }
    ]
}
```

#### chicken

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/chicken.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:hurt_on_condition": {
    "damage_conditions": [
        {
            "filters": {
                "test": "in_lava",
                "subject": "self",
                "operator": "==",
                "value": true
            },
            "cause": "lava",
            "damage_per_tick": 4
        }
    ]
}
```

#### cow

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/cow.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:hurt_on_condition": {
    "damage_conditions": [
        {
            "filters": {
                "test": "in_lava",
                "subject": "self",
                "operator": "==",
                "value": true
            },
            "cause": "lava",
            "damage_per_tick": 4
        }
    ]
}
```

#### creeper

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/creeper.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:hurt_on_condition": {
    "damage_conditions": [
        {
            "filters": {
                "test": "in_lava",
                "subject": "self",
                "operator": "==",
                "value": true
            },
            "cause": "lava",
            "damage_per_tick": 4
        }
    ]
}
```

#### dolphin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/dolphin.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:hurt_on_condition": {
    "damage_conditions": [
        {
            "filters": {
                "test": "in_lava",
                "subject": "self",
                "operator": "==",
                "value": true
            },
            "cause": "lava",
            "damage_per_tick": 4
        }
    ]
}
```

#### donkey

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/donkey.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:hurt_on_condition": {
    "damage_conditions": [
        {
            "filters": {
                "test": "in_lava",
                "subject": "self",
                "operator": "==",
                "value": true
            },
            "cause": "lava",
            "damage_per_tick": 4
        }
    ]
}
```

#### drowned

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/drowned.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:hurt_on_condition": {
    "damage_conditions": [
        {
            "filters": {
                "test": "in_lava",
                "subject": "self",
                "operator": "==",
                "value": true
            },
            "cause": "lava",
            "damage_per_tick": 4
        }
    ]
}
```

#### elder_guardian

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/elder_guardian.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:hurt_on_condition": {
    "damage_conditions": [
        {
            "filters": {
                "test": "in_lava",
                "subject": "self",
                "operator": "==",
                "value": true
            },
            "cause": "lava",
            "damage_per_tick": 4
        }
    ]
}
```

#### enderman

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/enderman.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:hurt_on_condition": {
    "damage_conditions": [
        {
            "filters": {
                "test": "in_lava",
                "subject": "self",
                "operator": "==",
                "value": true
            },
            "cause": "lava",
            "damage_per_tick": 4
        },
        {
            "filters": {
                "test": "in_contact_with_water",
                "operator": "==",
                "value": true
            },
            "cause": "drowning",
            "damage_per_tick": 1
        }
    ]
}
```

#### endermite

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/endermite.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:hurt_on_condition": {
    "damage_conditions": [
        {
            "filters": {
                "test": "in_lava",
                "subject": "self",
                "operator": "==",
                "value": true
            },
            "cause": "lava",
            "damage_per_tick": 4
        }
    ]
}
```

#### evocation_illager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/evocation_illager.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:hurt_on_condition": {
    "damage_conditions": [
        {
            "filters": {
                "test": "in_lava",
                "subject": "self",
                "operator": "==",
                "value": true
            },
            "cause": "lava",
            "damage_per_tick": 4
        }
    ]
}
```

#### fish

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/fish.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:hurt_on_condition": {
    "damage_conditions": [
        {
            "filters": {
                "test": "in_lava",
                "subject": "self",
                "operator": "==",
                "value": true
            },
            "cause": "lava",
            "damage_per_tick": 4
        }
    ]
}
```

#### glow_squid

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/glow_squid.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:hurt_on_condition": {
    "damage_conditions": [
        {
            "filters": {
                "test": "in_lava",
                "subject": "self",
                "operator": "==",
                "value": true
            },
            "cause": "lava",
            "damage_per_tick": 4
        }
    ]
}
```

#### goat

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/goat.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:hurt_on_condition": {
    "damage_conditions": [
        {
            "filters": {
                "test": "in_lava",
                "subject": "self",
                "operator": "==",
                "value": true
            },
            "cause": "lava",
            "damage_per_tick": 4
        }
    ]
}
```

#### guardian

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/guardian.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:hurt_on_condition": {
    "damage_conditions": [
        {
            "filters": {
                "test": "in_lava",
                "subject": "self",
                "operator": "==",
                "value": true
            },
            "cause": "lava",
            "damage_per_tick": 4
        }
    ]
}
```

#### hoglin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/hoglin.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:hurt_on_condition": {
    "damage_conditions": [
        {
            "filters": {
                "test": "in_lava",
                "subject": "self",
                "operator": "==",
                "value": true
            },
            "cause": "lava",
            "damage_per_tick": 4
        }
    ]
}
```

#### horse

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/horse.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:hurt_on_condition": {
    "damage_conditions": [
        {
            "filters": {
                "test": "in_lava",
                "subject": "self",
                "operator": "==",
                "value": true
            },
            "cause": "lava",
            "damage_per_tick": 4
        }
    ]
}
```

#### husk

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/husk.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:hurt_on_condition": {
    "damage_conditions": [
        {
            "filters": {
                "test": "in_lava",
                "subject": "self",
                "operator": "==",
                "value": true
            },
            "cause": "lava",
            "damage_per_tick": 4
        }
    ]
}
```

#### iron_golem

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/iron_golem.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:hurt_on_condition": {
    "damage_conditions": [
        {
            "filters": {
                "test": "in_lava",
                "subject": "self",
                "operator": "==",
                "value": true
            },
            "cause": "lava",
            "damage_per_tick": 4
        }
    ]
}
```

#### llama

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/llama.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:hurt_on_condition": {
    "damage_conditions": [
        {
            "filters": {
                "test": "in_lava",
                "subject": "self",
                "operator": "==",
                "value": true
            },
            "cause": "lava",
            "damage_per_tick": 4
        }
    ]
}
```

#### mooshroom

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/mooshroom.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:hurt_on_condition": {
    "damage_conditions": [
        {
            "filters": {
                "test": "in_lava",
                "subject": "self",
                "operator": "==",
                "value": true
            },
            "cause": "lava",
            "damage_per_tick": 4
        }
    ]
}
```

#### mule

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/mule.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:hurt_on_condition": {
    "damage_conditions": [
        {
            "filters": {
                "test": "in_lava",
                "subject": "self",
                "operator": "==",
                "value": true
            },
            "cause": "lava",
            "damage_per_tick": 4
        }
    ]
}
```

#### ocelot

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/ocelot.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:hurt_on_condition": {
    "damage_conditions": [
        {
            "filters": {
                "test": "in_lava",
                "subject": "self",
                "operator": "==",
                "value": true
            },
            "cause": "lava",
            "damage_per_tick": 4
        }
    ]
}
```

#### panda

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/panda.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:hurt_on_condition": {
    "damage_conditions": [
        {
            "filters": {
                "test": "in_lava",
                "subject": "self",
                "operator": "==",
                "value": true
            },
            "cause": "lava",
            "damage_per_tick": 4
        }
    ]
}
```

#### parrot

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/parrot.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:hurt_on_condition": {
    "damage_conditions": [
        {
            "filters": {
                "test": "in_lava",
                "subject": "self",
                "operator": "==",
                "value": true
            },
            "cause": "lava",
            "damage_per_tick": 4
        }
    ]
}
```

#### phantom

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/phantom.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:hurt_on_condition": {
    "damage_conditions": [
        {
            "filters": {
                "test": "in_lava",
                "subject": "self",
                "operator": "==",
                "value": true
            },
            "cause": "lava",
            "damage_per_tick": 4
        }
    ]
}
```

#### pig

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/pig.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:hurt_on_condition": {
    "damage_conditions": [
        {
            "filters": {
                "test": "in_lava",
                "subject": "self",
                "operator": "==",
                "value": true
            },
            "cause": "lava",
            "damage_per_tick": 4
        }
    ]
}
```

#### piglin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/piglin.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:hurt_on_condition": {
    "damage_conditions": [
        {
            "filters": {
                "test": "in_lava",
                "subject": "self",
                "operator": "==",
                "value": true
            },
            "cause": "lava",
            "damage_per_tick": 4
        }
    ]
}
```

#### piglin_brute

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/piglin_brute.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:hurt_on_condition": {
    "damage_conditions": [
        {
            "filters": {
                "test": "in_lava",
                "subject": "self",
                "operator": "==",
                "value": true
            },
            "cause": "lava",
            "damage_per_tick": 4
        }
    ]
}
```

#### pillager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/pillager.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:hurt_on_condition": {
    "damage_conditions": [
        {
            "filters": {
                "test": "in_lava",
                "subject": "self",
                "operator": "==",
                "value": true
            },
            "cause": "lava",
            "damage_per_tick": 4
        }
    ]
}
```

#### player

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/player.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:hurt_on_condition": {
    "damage_conditions": [
        {
            "filters": {
                "test": "in_lava",
                "subject": "self",
                "operator": "==",
                "value": true
            },
            "cause": "lava",
            "damage_per_tick": 4
        }
    ]
}
```

#### polar_bear

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/polar_bear.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:hurt_on_condition": {
    "damage_conditions": [
        {
            "filters": {
                "test": "in_lava",
                "subject": "self",
                "operator": "==",
                "value": true
            },
            "cause": "lava",
            "damage_per_tick": 4
        }
    ]
}
```

#### pufferfish

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/pufferfish.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:hurt_on_condition": {
    "damage_conditions": [
        {
            "filters": {
                "test": "in_lava",
                "subject": "self",
                "operator": "==",
                "value": true
            },
            "cause": "lava",
            "damage_per_tick": 4
        }
    ]
}
```

#### rabbit

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/rabbit.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:hurt_on_condition": {
    "damage_conditions": [
        {
            "filters": {
                "test": "in_lava",
                "subject": "self",
                "operator": "==",
                "value": true
            },
            "cause": "lava",
            "damage_per_tick": 4
        }
    ]
}
```

#### ravager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/ravager.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:hurt_on_condition": {
    "damage_conditions": [
        {
            "filters": {
                "test": "in_lava",
                "subject": "self",
                "operator": "==",
                "value": true
            },
            "cause": "lava",
            "damage_per_tick": 4
        }
    ]
}
```

#### salmon

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/salmon.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:hurt_on_condition": {
    "damage_conditions": [
        {
            "filters": {
                "test": "in_lava",
                "subject": "self",
                "operator": "==",
                "value": true
            },
            "cause": "lava",
            "damage_per_tick": 4
        }
    ]
}
```

#### sheep

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/sheep.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:hurt_on_condition": {
    "damage_conditions": [
        {
            "filters": {
                "test": "in_lava",
                "subject": "self",
                "operator": "==",
                "value": true
            },
            "cause": "lava",
            "damage_per_tick": 4
        }
    ]
}
```

#### shulker

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/shulker.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:hurt_on_condition": {
    "damage_conditions": [
        {
            "filters": {
                "test": "in_lava",
                "subject": "self",
                "operator": "==",
                "value": true
            },
            "cause": "lava",
            "damage_per_tick": 4
        }
    ]
}
```

#### silverfish

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/silverfish.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:hurt_on_condition": {
    "damage_conditions": [
        {
            "filters": {
                "test": "in_lava",
                "subject": "self",
                "operator": "==",
                "value": true
            },
            "cause": "lava",
            "damage_per_tick": 4
        }
    ]
}
```

#### skeleton

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/skeleton.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:hurt_on_condition": {
    "damage_conditions": [
        {
            "filters": {
                "test": "in_lava",
                "subject": "self",
                "operator": "==",
                "value": true
            },
            "cause": "lava",
            "damage_per_tick": 4
        }
    ]
}
```

#### skeleton_horse

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/skeleton_horse.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:hurt_on_condition": {
    "damage_conditions": [
        {
            "filters": {
                "test": "in_lava",
                "subject": "self",
                "operator": "==",
                "value": true
            },
            "cause": "lava",
            "damage_per_tick": 4
        }
    ]
}
```

#### slime

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/slime.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:hurt_on_condition": {
    "damage_conditions": [
        {
            "filters": {
                "test": "in_lava",
                "subject": "self",
                "operator": "==",
                "value": true
            },
            "cause": "lava",
            "damage_per_tick": 4
        }
    ]
}
```

#### snow_golem

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/snow_golem.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:hurt_on_condition": {
    "damage_conditions": [
        {
            "filters": {
                "test": "in_lava",
                "subject": "self",
                "operator": "==",
                "value": true
            },
            "cause": "lava",
            "damage_per_tick": 4
        },
        {
            "filters": {
                "test": "is_temperature_value",
                "operator": ">",
                "value": 1.0
            },
            "cause": "temperature",
            "damage_per_tick": 1
        },
        {
            "filters": {
                "test": "in_contact_with_water",
                "operator": "==",
                "value": true
            },
            "cause": "drowning",
            "damage_per_tick": 1
        }
    ]
}
```

#### spider

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/spider.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:hurt_on_condition": {
    "damage_conditions": [
        {
            "filters": {
                "test": "in_lava",
                "subject": "self",
                "operator": "==",
                "value": true
            },
            "cause": "lava",
            "damage_per_tick": 4
        }
    ]
}
```

#### squid

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/squid.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:hurt_on_condition": {
    "damage_conditions": [
        {
            "filters": {
                "test": "in_lava",
                "subject": "self",
                "operator": "==",
                "value": true
            },
            "cause": "lava",
            "damage_per_tick": 4
        }
    ]
}
```

#### stray

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/stray.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:hurt_on_condition": {
    "damage_conditions": [
        {
            "filters": {
                "test": "in_lava",
                "subject": "self",
                "operator": "==",
                "value": true
            },
            "cause": "lava",
            "damage_per_tick": 4
        }
    ]
}
```

#### strider

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/strider.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:hurt_on_condition": {
    "damage_conditions": [
        {
            "filters": {
                "test": "in_contact_with_water",
                "operator": "==",
                "value": true
            },
            "cause": "drowning",
            "damage_per_tick": 1
        }
    ]
}
```

#### tripod_camera

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/tripod_camera.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:hurt_on_condition": {
    "damage_conditions": [
        {
            "filters": {
                "test": "in_lava",
                "subject": "self",
                "operator": "==",
                "value": true
            },
            "cause": "lava",
            "damage_per_tick": 4
        }
    ]
}
```

#### tropicalfish

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/tropicalfish.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:hurt_on_condition": {
    "damage_conditions": [
        {
            "filters": {
                "test": "in_lava",
                "subject": "self",
                "operator": "==",
                "value": true
            },
            "cause": "lava",
            "damage_per_tick": 4
        }
    ]
}
```

#### turtle

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/turtle.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:hurt_on_condition": {
    "damage_conditions": [
        {
            "filters": {
                "test": "in_lava",
                "subject": "self",
                "operator": "==",
                "value": true
            },
            "cause": "lava",
            "damage_per_tick": 4
        }
    ]
}
```

#### villager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/villager.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:hurt_on_condition": {
    "damage_conditions": [
        {
            "filters": {
                "test": "in_lava",
                "subject": "self",
                "operator": "==",
                "value": true
            },
            "cause": "lava",
            "damage_per_tick": 4
        }
    ]
}
```

#### villager_v2

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/villager_v2.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:hurt_on_condition": {
    "damage_conditions": [
        {
            "filters": {
                "test": "in_lava",
                "subject": "self",
                "operator": "==",
                "value": true
            },
            "cause": "lava",
            "damage_per_tick": 4
        }
    ]
}
```

#### vindicator

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/vindicator.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:hurt_on_condition": {
    "damage_conditions": [
        {
            "filters": {
                "test": "in_lava",
                "subject": "self",
                "operator": "==",
                "value": true
            },
            "cause": "lava",
            "damage_per_tick": 4
        }
    ]
}
```

#### wandering_trader

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/wandering_trader.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:hurt_on_condition": {
    "damage_conditions": [
        {
            "filters": {
                "test": "in_lava",
                "subject": "self",
                "operator": "==",
                "value": true
            },
            "cause": "lava",
            "damage_per_tick": 4
        }
    ]
}
```

#### witch

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/witch.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:hurt_on_condition": {
    "damage_conditions": [
        {
            "filters": {
                "test": "in_lava",
                "subject": "self",
                "operator": "==",
                "value": true
            },
            "cause": "lava",
            "damage_per_tick": 4
        }
    ]
}
```

#### wolf

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/wolf.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:hurt_on_condition": {
    "damage_conditions": [
        {
            "filters": {
                "test": "in_lava",
                "subject": "self",
                "operator": "==",
                "value": true
            },
            "cause": "lava",
            "damage_per_tick": 4
        }
    ]
}
```

#### zombie

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:hurt_on_condition": {
    "damage_conditions": [
        {
            "filters": {
                "test": "in_lava",
                "subject": "self",
                "operator": "==",
                "value": true
            },
            "cause": "lava",
            "damage_per_tick": 4
        }
    ]
}
```

#### zombie_horse

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie_horse.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:hurt_on_condition": {
    "damage_conditions": [
        {
            "filters": {
                "test": "in_lava",
                "subject": "self",
                "operator": "==",
                "value": true
            },
            "cause": "lava",
            "damage_per_tick": 4
        }
    ]
}
```

#### zombie_villager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie_villager.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:hurt_on_condition": {
    "damage_conditions": [
        {
            "filters": {
                "test": "in_lava",
                "subject": "self",
                "operator": "==",
                "value": true
            },
            "cause": "lava",
            "damage_per_tick": 4
        }
    ]
}
```

#### zombie_villager_v2

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie_villager_v2.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:hurt_on_condition": {
    "damage_conditions": [
        {
            "filters": {
                "test": "in_lava",
                "subject": "self",
                "operator": "==",
                "value": true
            },
            "cause": "lava",
            "damage_per_tick": 4
        }
    ]
}
```

</Spoiler>
