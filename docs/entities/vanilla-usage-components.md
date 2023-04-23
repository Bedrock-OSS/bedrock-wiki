---
title: Vanilla Usage Components
category: Documentation
mentions:
    - MedicalJewel105
---

This page was created with [Wiki Content Generator](https://github.com/Bedrock-OSS/bedrock-wiki-content-generator). If there are issues, contact us on [Bedrock OSS](https://discord.gg/XjV87YN) Discord server.
Note that to keep this page fast to load and informative, there are not more than 8 examples for each component and not more than 3 example(s) from each entity are shown. Namespace `minecraft` was also removed.
If you want to see full page, you can do it [here](/entities/vuc-full). *Last updated for 1.19.70*

## addrider

<Spoiler title="Show">

cave_spider

<CodeHeader>#component_groups/minecraft:spider_jockey</CodeHeader>

```json
"minecraft:addrider": {
    "entity_type": "minecraft:skeleton"
}
```

<CodeHeader>#component_groups/minecraft:spider_stray_jockey</CodeHeader>

```json
"minecraft:addrider": {
    "entity_type": "minecraft:skeleton.stray"
}
```

<CodeHeader>#component_groups/minecraft:spider_wither_jockey</CodeHeader>

```json
"minecraft:addrider": {
    "entity_type": "minecraft:skeleton.wither"
}
```

ravager

<CodeHeader>#component_groups/minecraft:pillager_rider</CodeHeader>

```json
"minecraft:addrider": {
    "entity_type": "minecraft:pillager"
}
```

<CodeHeader>#component_groups/minecraft:pillager_rider_for_raid</CodeHeader>

```json
"minecraft:addrider": {
    "entity_type": "minecraft:pillager",
    "spawn_event": "minecraft:spawn_for_raid"
}
```

<CodeHeader>#component_groups/minecraft:evoker_rider_for_raid</CodeHeader>

```json
"minecraft:addrider": {
    "entity_type": "minecraft:evocation_illager",
    "spawn_event": "minecraft:spawn_for_raid"
}
```

spider

<CodeHeader>#component_groups/minecraft:spider_jockey</CodeHeader>

```json
"minecraft:addrider": {
    "entity_type": "minecraft:skeleton"
}
```

<CodeHeader>#component_groups/minecraft:spider_stray_jockey</CodeHeader>

```json
"minecraft:addrider": {
    "entity_type": "minecraft:skeleton.stray"
}
```

</Spoiler>

## admire_item

<Spoiler title="Show">

piglin

<CodeHeader></CodeHeader>

```json
"minecraft:admire_item": {
    "duration": 8,
    "cooldown_after_being_attacked": 20
}
```

</Spoiler>

## ageable

<Spoiler title="Show">

axolotl

<CodeHeader>#component_groups/axolotl_baby</CodeHeader>

```json
"minecraft:ageable": {
    "duration": 1200,
    "feed_items": "tropical_fish_bucket",
    "transform_to_item": "water_bucket:0",
    "grow_up": {
        "event": "minecraft:ageable_grow_up",
        "target": "self"
    }
}
```

bee

<CodeHeader>#component_groups/bee_baby</CodeHeader>

```json
"minecraft:ageable": {
    "duration": 1200,
    "feed_items": [
        "minecraft:red_flower",
        "minecraft:yellow_flower",
        "minecraft:wither_rose",
        "minecraft:double_plant:0",
        "minecraft:double_plant:1",
        "minecraft:double_plant:4",
        "minecraft:double_plant:5",
        "minecraft:flowering_azalea",
        "minecraft:azalea_leaves_flowered",
        "minecraft:mangrove_propagule"
    ],
    "grow_up": {
        "event": "minecraft:ageable_grow_up",
        "target": "self"
    }
}
```

cat

<CodeHeader>#component_groups/minecraft:cat_baby</CodeHeader>

```json
"minecraft:ageable": {
    "duration": 1200,
    "feed_items": [
        "fish",
        "salmon"
    ],
    "grow_up": {
        "event": "minecraft:ageable_grow_up",
        "target": "self"
    }
}
```

chicken

<CodeHeader>#component_groups/minecraft:chicken_baby</CodeHeader>

```json
"minecraft:ageable": {
    "duration": 1200,
    "feed_items": [
        "wheat_seeds",
        "beetroot_seeds",
        "melon_seeds",
        "pumpkin_seeds"
    ],
    "grow_up": {
        "event": "minecraft:ageable_grow_up",
        "target": "self"
    }
}
```

cow

<CodeHeader>#component_groups/minecraft:cow_baby</CodeHeader>

```json
"minecraft:ageable": {
    "duration": 1200,
    "feed_items": "wheat",
    "grow_up": {
        "event": "minecraft:ageable_grow_up",
        "target": "self"
    }
}
```

dolphin

<CodeHeader>#component_groups/dolphin_baby</CodeHeader>

```json
"minecraft:ageable": {
    "duration": 1200,
    "feed_items": [
        "fish",
        "salmon"
    ],
    "grow_up": {
        "event": "ageable_grow_up",
        "target": "self"
    }
}
```

donkey

<CodeHeader>#component_groups/minecraft:donkey_baby</CodeHeader>

```json
"minecraft:ageable": {
    "duration": 1200,
    "feed_items": [
        {
            "item": "wheat",
            "growth": 0.016667
        },
        {
            "item": "sugar",
            "growth": 0.025
        },
        {
            "item": "hay_block",
            "growth": 0.15
        },
        {
            "item": "apple",
            "growth": 0.05
        },
        {
            "item": "golden_carrot",
            "growth": 0.05
        },
        {
            "item": "golden_apple",
            "growth": 0.2
        },
        {
            "item": "appleEnchanted",
            "growth": 0.2
        }
    ],
    "grow_up": {
        "event": "minecraft:ageable_grow_up",
        "target": "self"
    }
}
```

fox

<CodeHeader>#component_groups/minecraft:fox_baby</CodeHeader>

```json
"minecraft:ageable": {
    "duration": 1200,
    "feed_items": [
        "sweet_berries",
        "glow_berries"
    ],
    "grow_up": {
        "event": "minecraft:ageable_grow_up",
        "target": "self"
    }
}
```

</Spoiler>

## ambient_sound_interval

<Spoiler title="Show">

allay

<CodeHeader></CodeHeader>

```json
"minecraft:ambient_sound_interval": {
    "value": 5.0,
    "range": 5.0,
    "event_name": "ambient",
    "event_names": [
        {
            "event_name": "ambient.tame",
            "condition": "query.is_using_item"
        },
        {
            "event_name": "ambient",
            "condition": "!query.is_using_item"
        }
    ]
}
```

bee

<CodeHeader>#component_groups/look_for_food</CodeHeader>

```json
"minecraft:ambient_sound_interval": {
    "event_name": "ambient.pollinate",
    "range": 3.0,
    "value": 2.0
}
```

<CodeHeader>#component_groups/default_sound</CodeHeader>

```json
"minecraft:ambient_sound_interval": {
    "event_name": "ambient",
    "range": 0.0,
    "value": 0.0
}
```

evocation_illager

<CodeHeader>#component_groups/minecraft:raid_configuration</CodeHeader>

```json
"minecraft:ambient_sound_interval": {
    "value": 2.0,
    "range": 4.0,
    "event_name": "ambient.in.raid"
}
```

fox

<CodeHeader>#component_groups/minecraft:fox_ambient_normal</CodeHeader>

```json
"minecraft:ambient_sound_interval": {
    "event_name": "ambient"
}
```

<CodeHeader>#component_groups/minecraft:fox_ambient_sleep</CodeHeader>

```json
"minecraft:ambient_sound_interval": {
    "event_name": "sleep"
}
```

<CodeHeader>#component_groups/minecraft:fox_ambient_night</CodeHeader>

```json
"minecraft:ambient_sound_interval": {
    "event_name": "screech",
    "value": 80,
    "range": 160
}
```

pillager

<CodeHeader>#component_groups/minecraft:raid_configuration</CodeHeader>

```json
"minecraft:ambient_sound_interval": {
    "value": 2.0,
    "range": 4.0,
    "event_name": "ambient.in.raid"
}
```

</Spoiler>

## anger_level

<Spoiler title="Show">

warden

<CodeHeader></CodeHeader>

```json
"minecraft:anger_level": {
    "max_anger": 150,
    "angry_threshold": 80,
    "remove_targets_below_angry_threshold": true,
    "angry_boost": 20,
    "anger_decrement_interval": 1.0,
    "default_annoyingness": 35,
    "default_projectile_annoyingness": 10,
    "on_increase_sounds": [
        {
            "sound": "listening_angry",
            "condition": "query.anger_level(this) >= 40"
        },
        {
            "sound": "listening",
            "condition": "query.anger_level(this) >= 0"
        }
    ],
    "nuisance_filter": {
        "all_of": [
            {
                "test": "is_family",
                "subject": "other",
                "operator": "not",
                "value": "warden"
            },
            {
                "test": "is_family",
                "subject": "other",
                "operator": "not",
                "value": "inanimate"
            }
        ]
    }
}
```

</Spoiler>

## angry

<Spoiler title="Show">

bee

<CodeHeader>#component_groups/angry_bee</CodeHeader>

```json
"minecraft:angry": {
    "duration": 25,
    "broadcastAnger": true,
    "broadcastRange": 20,
    "broadcast_filters": {
        "test": "is_family",
        "operator": "!=",
        "value": "pacified"
    },
    "calm_event": {
        "event": "calmed_down",
        "target": "self"
    }
}
```

cave_spider

<CodeHeader>#component_groups/minecraft:spider_angry</CodeHeader>

```json
"minecraft:angry": {
    "duration": 10,
    "duration_delta": 3,
    "calm_event": {
        "event": "minecraft:on_calm",
        "target": "self"
    }
}
```

dolphin

<CodeHeader>#component_groups/dolphin_angry</CodeHeader>

```json
"minecraft:angry": {
    "duration": 25,
    "broadcast_anger": true,
    "broadcast_range": 16,
    "calm_event": {
        "event": "on_calm",
        "target": "self"
    }
}
```

enderman

<CodeHeader>#component_groups/minecraft:enderman_angry</CodeHeader>

```json
"minecraft:angry": {
    "duration": 25,
    "calm_event": {
        "event": "minecraft:on_calm",
        "target": "self"
    }
}
```

hoglin

<CodeHeader>#component_groups/angry_hoglin</CodeHeader>

```json
"minecraft:angry": {
    "duration": 10,
    "broadcast_anger": true,
    "broadcast_range": 16,
    "calm_event": {
        "event": "become_calm_event",
        "target": "self"
    },
    "angry_sound": "angry",
    "sound_interval": {
        "range_min": 2.0,
        "range_max": 5.0
    }
}
```

llama

<CodeHeader>#component_groups/minecraft:llama_angry</CodeHeader>

```json
"minecraft:angry": {
    "duration": 4,
    "broadcast_anger": false,
    "calm_event": {
        "event": "minecraft:on_calm",
        "target": "self"
    }
}
```

<CodeHeader>#component_groups/minecraft:llama_angry_wolf</CodeHeader>

```json
"minecraft:angry": {
    "duration": -1,
    "broadcast_anger": false,
    "calm_event": {
        "event": "minecraft:on_calm",
        "target": "self"
    }
}
```

panda

<CodeHeader>#component_groups/minecraft:panda_angry</CodeHeader>

```json
"minecraft:angry": {
    "duration": 500,
    "broadcast_anger": true,
    "broadcast_range": 41,
    "broadcast_filters": {
        "test": "is_family",
        "operator": "==",
        "value": "panda_aggressive"
    },
    "calm_event": {
        "event": "minecraft:on_calm",
        "target": "self"
    }
}
```

</Spoiler>

## annotation.break_door

<Spoiler title="Show">

drowned

<CodeHeader>#component_groups/minecraft:can_break_doors</CodeHeader>

```json
"minecraft:annotation.break_door": {}
```

husk

<CodeHeader>#component_groups/minecraft:can_break_doors</CodeHeader>

```json
"minecraft:annotation.break_door": {}
```

vindicator

<CodeHeader>#component_groups/minecraft:raid_configuration</CodeHeader>

```json
"minecraft:annotation.break_door": {
    "break_time": 30,
    "min_difficulty": "normal"
}
```

zombie

<CodeHeader>#component_groups/minecraft:can_break_doors</CodeHeader>

```json
"minecraft:annotation.break_door": {}
```

zombie_villager

<CodeHeader>#component_groups/can_break_doors</CodeHeader>

```json
"minecraft:annotation.break_door": {}
```

zombie_villager_v2

<CodeHeader>#component_groups/can_break_doors</CodeHeader>

```json
"minecraft:annotation.break_door": {}
```

</Spoiler>

## annotation.open_door

<Spoiler title="Show">

piglin

<CodeHeader></CodeHeader>

```json
"minecraft:annotation.open_door": {}
```

piglin_brute

<CodeHeader></CodeHeader>

```json
"minecraft:annotation.open_door": {}
```

villager

<CodeHeader></CodeHeader>

```json
"minecraft:annotation.open_door": {}
```

villager_v2

<CodeHeader></CodeHeader>

```json
"minecraft:annotation.open_door": {}
```

</Spoiler>

## area_attack

<Spoiler title="Show">

magma_cube

<CodeHeader>#component_groups/minecraft:slime_large</CodeHeader>

```json
"minecraft:area_attack": {
    "damage_range": 0.15,
    "damage_per_tick": 6,
    "damage_cooldown": 0.5,
    "cause": "entity_attack",
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
                "value": "irongolem"
            }
        ]
    }
}
```

<CodeHeader>#component_groups/minecraft:slime_medium</CodeHeader>

```json
"minecraft:area_attack": {
    "damage_range": 0.15,
    "damage_per_tick": 4,
    "damage_cooldown": 0.5,
    "cause": "entity_attack",
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
                "value": "irongolem"
            }
        ]
    }
}
```

<CodeHeader>#component_groups/minecraft:slime_small</CodeHeader>

```json
"minecraft:area_attack": {
    "damage_range": 0.15,
    "damage_per_tick": 3,
    "damage_cooldown": 0.5,
    "cause": "entity_attack",
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
                "value": "irongolem"
            }
        ]
    }
}
```

pufferfish

<CodeHeader>#component_groups/minecraft:full_puff</CodeHeader>

```json
"minecraft:area_attack": {
    "damage_range": 0.2,
    "damage_per_tick": 2,
    "damage_cooldown": 0.5,
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

slime

<CodeHeader>#component_groups/minecraft:slime_large</CodeHeader>

```json
"minecraft:area_attack": {
    "damage_range": 0.15,
    "damage_per_tick": 4,
    "damage_cooldown": 0.5,
    "cause": "entity_attack",
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
                "value": "irongolem"
            },
            {
                "test": "is_family",
                "subject": "other",
                "value": "snowgolem"
            }
        ]
    }
}
```

<CodeHeader>#component_groups/minecraft:slime_medium</CodeHeader>

```json
"minecraft:area_attack": {
    "damage_range": 0.15,
    "damage_per_tick": 2,
    "damage_cooldown": 0.5,
    "cause": "entity_attack",
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
                "value": "irongolem"
            },
            {
                "test": "is_family",
                "subject": "other",
                "value": "snowgolem"
            }
        ]
    }
}
```

</Spoiler>

## attack

<Spoiler title="Show">

axolotl

<CodeHeader></CodeHeader>

```json
"minecraft:attack": {
    "damage": 2
}
```

bee

<CodeHeader>#component_groups/easy_attack</CodeHeader>

```json
"minecraft:attack": {
    "damage": 2
}
```

<CodeHeader>#component_groups/normal_attack</CodeHeader>

```json
"minecraft:attack": {
    "damage": 2,
    "effect_name": "poison",
    "effect_duration": 10
}
```

<CodeHeader>#component_groups/hard_attack</CodeHeader>

```json
"minecraft:attack": {
    "damage": 2,
    "effect_name": "poison",
    "effect_duration": 18
}
```

blaze

<CodeHeader>#component_groups/melee_mode</CodeHeader>

```json
"minecraft:attack": {
    "damage": 6
}
```

cave_spider

<CodeHeader>#component_groups/minecraft:spider_poison_easy</CodeHeader>

```json
"minecraft:attack": {
    "damage": 2,
    "effect_name": "poison",
    "effect_duration": 0
}
```

<CodeHeader>#component_groups/minecraft:spider_poison_normal</CodeHeader>

```json
"minecraft:attack": {
    "damage": 2,
    "effect_name": "poison",
    "effect_duration": 7
}
```

<CodeHeader>#component_groups/minecraft:spider_poison_hard</CodeHeader>

```json
"minecraft:attack": {
    "damage": 2,
    "effect_name": "poison",
    "effect_duration": 15
}
```

</Spoiler>

## attack_cooldown

<Spoiler title="Show">

axolotl

<CodeHeader>#component_groups/attack_cooldown</CodeHeader>

```json
"minecraft:attack_cooldown": {
    "attack_cooldown_time": 120.0,
    "attack_cooldown_complete_event": {
        "event": "attack_cooldown_complete_event",
        "target": "self"
    }
}
```

goat

<CodeHeader>#component_groups/attack_cooldown</CodeHeader>

```json
"minecraft:attack_cooldown": {
    "attack_cooldown_time": [
        30,
        40
    ],
    "attack_cooldown_complete_event": {
        "event": "attack_cooldown_complete_event",
        "target": "self"
    }
}
```

hoglin

<CodeHeader>#component_groups/attack_cooldown</CodeHeader>

```json
"minecraft:attack_cooldown": {
    "attack_cooldown_time": [
        10.0,
        15.0
    ],
    "attack_cooldown_complete_event": {
        "event": "attack_cooldown_complete_event",
        "target": "self"
    }
}
```

piglin

<CodeHeader>#component_groups/attack_cooldown</CodeHeader>

```json
"minecraft:attack_cooldown": {
    "attack_cooldown_time": [
        30.0,
        120.0
    ],
    "attack_cooldown_complete_event": {
        "event": "attack_cooldown_complete_event",
        "target": "self"
    }
}
```

</Spoiler>

## attack_damage

<Spoiler title="Show">

cat

<CodeHeader></CodeHeader>

```json
"minecraft:attack_damage": {
    "value": 4
}
```

ocelot

<CodeHeader></CodeHeader>

```json
"minecraft:attack_damage": {
    "value": 3
}
```

</Spoiler>

## balloonable

<Spoiler title="Show">

allay

<CodeHeader></CodeHeader>

```json
"minecraft:balloonable": {
    "mass": 0.5
}
```

bee

<CodeHeader></CodeHeader>

```json
"minecraft:balloonable": {
    "mass": 0.5
}
```

boat

<CodeHeader></CodeHeader>

```json
"minecraft:balloonable": {}
```

cat

<CodeHeader></CodeHeader>

```json
"minecraft:balloonable": {
    "mass": 0.6
}
```

chest_boat

<CodeHeader></CodeHeader>

```json
"minecraft:balloonable": {}
```

chicken

<CodeHeader></CodeHeader>

```json
"minecraft:balloonable": {
    "mass": 0.5
}
```

cow

<CodeHeader></CodeHeader>

```json
"minecraft:balloonable": {}
```

dolphin

<CodeHeader></CodeHeader>

```json
"minecraft:balloonable": {}
```

</Spoiler>

## barter

<Spoiler title="Show">

piglin

<CodeHeader>#component_groups/piglin_adult</CodeHeader>

```json
"minecraft:barter": {
    "barter_table": "loot_tables/entities/piglin_barter.json",
    "cooldown_after_being_attacked": 20
}
```

</Spoiler>

## behavior.admire_item

<Spoiler title="Show">

piglin

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.admire_item": {
    "priority": 2,
    "admire_item_sound": "admire",
    "sound_interval": {
        "range_min": 2.0,
        "range_max": 5.0
    },
    "on_admire_item_start": {
        "event": "admire_item_started_event",
        "target": "self"
    },
    "on_admire_item_stop": {
        "event": "admire_item_stopped_event",
        "target": "self"
    }
}
```

</Spoiler>

## behavior.avoid_block

<Spoiler title="Show">

hoglin

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.avoid_block": {
    "priority": 1,
    "tick_interval": 5,
    "search_range": 8,
    "search_height": 4,
    "walk_speed_modifier": 1,
    "sprint_speed_modifier": 1,
    "avoid_block_sound": "retreat",
    "sound_interval": {
        "range_min": 2.0,
        "range_max": 5.0
    },
    "target_selection_method": "nearest",
    "target_blocks": [
        "minecraft:warped_fungus",
        "minecraft:portal",
        "minecraft:respawn_anchor"
    ],
    "on_escape": [
        {
            "event": "escaped_event",
            "target": "self"
        }
    ]
}
```

piglin

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.avoid_block": {
    "priority": 9,
    "tick_interval": 5,
    "search_range": 8,
    "search_height": 4,
    "sprint_speed_modifier": 1.1,
    "target_selection_method": "nearest",
    "target_blocks": [
        "minecraft:soul_fire",
        "minecraft:soul_lantern",
        "minecraft:soul_torch",
        "minecraft:item.soul_campfire"
    ],
    "avoid_block_sound": "retreat",
    "sound_interval": {
        "range_min": 2.0,
        "range_max": 5.0
    }
}
```

</Spoiler>

## behavior.avoid_mob_type

<Spoiler title="Show">

cat

<CodeHeader>#component_groups/minecraft:cat_wild</CodeHeader>

```json
"minecraft:behavior.avoid_mob_type": {
    "priority": 6,
    "entity_types": [
        {
            "filters": {
                "test": "is_family",
                "subject": "other",
                "value": "player"
            },
            "max_dist": 10,
            "walk_speed_multiplier": 0.8,
            "sprint_speed_multiplier": 1.33
        }
    ]
}
```

creeper

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.avoid_mob_type": {
    "priority": 3,
    "entity_types": [
        {
            "filters": {
                "any_of": [
                    {
                        "test": "is_family",
                        "subject": "other",
                        "value": "ocelot"
                    },
                    {
                        "test": "is_family",
                        "subject": "other",
                        "value": "cat"
                    }
                ]
            },
            "max_dist": 6,
            "sprint_speed_multiplier": 1.2
        }
    ]
}
```

dolphin

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.avoid_mob_type": {
    "priority": 2,
    "entity_types": [
        {
            "filters": {
                "any_of": [
                    {
                        "test": "is_family",
                        "subject": "other",
                        "value": "guardian_elder"
                    },
                    {
                        "test": "is_family",
                        "subject": "other",
                        "value": "guardian"
                    }
                ]
            },
            "max_dist": 8,
            "walk_speed_multiplier": 1.0,
            "sprint_speed_multiplier": 1.0
        }
    ],
    "probability_per_strength": 0.14
}
```

evocation_illager

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.avoid_mob_type": {
    "priority": 5,
    "entity_types": [
        {
            "filters": {
                "test": "is_family",
                "subject": "other",
                "value": "player"
            },
            "max_dist": 8,
            "walk_speed_multiplier": 0.6,
            "sprint_speed_multiplier": 1.0
        }
    ]
}
```

cod

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.avoid_mob_type": {
    "priority": 1,
    "entity_types": [
        {
            "filters": {
                "any_of": [
                    {
                        "test": "is_family",
                        "subject": "other",
                        "value": "player"
                    },
                    {
                        "test": "is_family",
                        "subject": "other",
                        "value": "axolotl"
                    }
                ]
            },
            "max_dist": 6,
            "walk_speed_multiplier": 1.5,
            "sprint_speed_multiplier": 2.0
        }
    ]
}
```

fox

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.avoid_mob_type": {
    "priority": 5,
    "entity_types": [
        {
            "filters": {
                "any_of": [
                    {
                        "all_of": [
                            {
                                "test": "is_family",
                                "subject": "other",
                                "value": "player"
                            },
                            {
                                "test": "trusts",
                                "subject": "other",
                                "operator": "!=",
                                "value": true
                            },
                            {
                                "test": "is_sneaking",
                                "subject": "other",
                                "operator": "!=",
                                "value": true
                            }
                        ]
                    },
                    {
                        "test": "is_family",
                        "subject": "other",
                        "value": "polarbear"
                    },
                    {
                        "test": "is_family",
                        "subject": "other",
                        "value": "wolf"
                    }
                ]
            },
            "max_dist": 10,
            "walk_speed_multiplier": 1.0,
            "sprint_speed_multiplier": 1.5
        }
    ]
}
```

guardian

<CodeHeader>#component_groups/minecraft:guardian_passive</CodeHeader>

```json
"minecraft:behavior.avoid_mob_type": {
    "priority": 1,
    "entity_types": [
        {
            "filters": {
                "test": "is_family",
                "subject": "other",
                "value": "player"
            },
            "max_dist": 8,
            "walk_speed_multiplier": 1,
            "sprint_speed_multiplier": 1
        }
    ]
}
```

hoglin

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.avoid_mob_type": {
    "priority": 0,
    "remove_target": true,
    "entity_types": [
        {
            "filters": {
                "all_of": [
                    {
                        "test": "has_target",
                        "subject": "other",
                        "value": true
                    },
                    {
                        "test": "is_family",
                        "subject": "other",
                        "value": "piglin"
                    }
                ]
            },
            "check_if_outnumbered": true,
            "max_dist": 10,
            "sprint_speed_multiplier": 1.2
        }
    ],
    "avoid_mob_sound": "retreat",
    "sound_interval": {
        "range_min": 2.0,
        "range_max": 5.0
    }
}
```

</Spoiler>

## behavior.barter

<Spoiler title="Show">

piglin

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.barter": {
    "priority": 3
}
```

</Spoiler>

## behavior.beg

<Spoiler title="Show">

wolf

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.beg": {
    "priority": 9,
    "look_distance": 8,
    "look_time": [
        2,
        4
    ],
    "items": [
        "bone",
        "porkchop",
        "cooked_porkchop",
        "chicken",
        "cooked_chicken",
        "beef",
        "cooked_beef",
        "rotten_flesh",
        "muttonraw",
        "muttoncooked",
        "rabbit",
        "cooked_rabbit"
    ]
}
```

</Spoiler>

## behavior.breed

<Spoiler title="Show">

axolotl

<CodeHeader>#component_groups/axolotl_adult</CodeHeader>

```json
"minecraft:behavior.breed": {
    "priority": 1,
    "speed_multiplier": 1.0
}
```

bee

<CodeHeader>#component_groups/bee_adult</CodeHeader>

```json
"minecraft:behavior.breed": {
    "priority": 4,
    "speed_multiplier": 1.0
}
```

cat

<CodeHeader>#component_groups/minecraft:cat_adult</CodeHeader>

```json
"minecraft:behavior.breed": {
    "priority": 3,
    "speed_multiplier": 1.0
}
```

chicken

<CodeHeader>#component_groups/minecraft:chicken_adult</CodeHeader>

```json
"minecraft:behavior.breed": {
    "priority": 3,
    "speed_multiplier": 1.0
}
```

cow

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.breed": {
    "priority": 3,
    "speed_multiplier": 1.0
}
```

<CodeHeader>#component_groups/minecraft:cow_adult</CodeHeader>

```json
"minecraft:behavior.breed": {
    "priority": 3,
    "speed_multiplier": 1.0
}
```

donkey

<CodeHeader>#component_groups/minecraft:donkey_adult</CodeHeader>

```json
"minecraft:behavior.breed": {
    "priority": 2,
    "speed_multiplier": 1.0
}
```

fox

<CodeHeader>#component_groups/minecraft:fox_adult</CodeHeader>

```json
"minecraft:behavior.breed": {
    "priority": 3,
    "speed_multiplier": 1.0
}
```

</Spoiler>

## behavior.celebrate

<Spoiler title="Show">

evocation_illager

<CodeHeader>#component_groups/minecraft:celebrate</CodeHeader>

```json
"minecraft:behavior.celebrate": {
    "priority": 5,
    "celebration_sound": "celebrate",
    "sound_interval": {
        "range_min": 2.0,
        "range_max": 7.0
    },
    "jump_interval": {
        "range_min": 1.0,
        "range_max": 3.5
    },
    "duration": 30.0,
    "on_celebration_end_event": {
        "event": "minecraft:stop_celebrating",
        "target": "self"
    }
}
```

pillager

<CodeHeader>#component_groups/minecraft:celebrate</CodeHeader>

```json
"minecraft:behavior.celebrate": {
    "priority": 5,
    "celebration_sound": "celebrate",
    "sound_interval": {
        "range_min": 2.0,
        "range_max": 7.0
    },
    "jump_interval": {
        "range_min": 1.0,
        "range_max": 3.5
    },
    "duration": 30.0,
    "on_celebration_end_event": {
        "event": "minecraft:stop_celebrating",
        "target": "self"
    }
}
```

ravager

<CodeHeader>#component_groups/minecraft:celebrate</CodeHeader>

```json
"minecraft:behavior.celebrate": {
    "priority": 5,
    "celebration_sound": "celebrate",
    "sound_interval": {
        "range_min": 2.0,
        "range_max": 7.0
    },
    "jump_interval": {
        "range_min": 1.0,
        "range_max": 3.5
    },
    "duration": 30.0,
    "on_celebration_end_event": {
        "event": "minecraft:stop_celebrating",
        "target": "self"
    }
}
```

vindicator

<CodeHeader>#component_groups/minecraft:celebrate</CodeHeader>

```json
"minecraft:behavior.celebrate": {
    "priority": 5,
    "celebration_sound": "celebrate",
    "sound_interval": {
        "range_min": 2.0,
        "range_max": 7.0
    },
    "jump_interval": {
        "range_min": 1.0,
        "range_max": 3.5
    },
    "duration": 30.0,
    "on_celebration_end_event": {
        "event": "minecraft:stop_celebrating",
        "target": "self"
    }
}
```

witch

<CodeHeader>#component_groups/minecraft:celebrate</CodeHeader>

```json
"minecraft:behavior.celebrate": {
    "priority": 5,
    "celebration_sound": "celebrate",
    "sound_interval": {
        "range_min": 2.0,
        "range_max": 7.0
    },
    "jump_interval": {
        "range_min": 1.0,
        "range_max": 3.5
    },
    "duration": 30.0,
    "on_celebration_end_event": {
        "event": "minecraft:stop_celebrating",
        "target": "self"
    }
}
```

</Spoiler>

## behavior.celebrate_survive

<Spoiler title="Show">

villager

<CodeHeader>#component_groups/minecraft:celebrate</CodeHeader>

```json
"minecraft:behavior.celebrate_survive": {
    "priority": 5,
    "fireworks_interval": {
        "range_min": 2.0,
        "range_max": 7.0
    },
    "duration": 30.0,
    "on_celebration_end_event": {
        "event": "minecraft:stop_celebrating",
        "target": "self"
    }
}
```

villager_v2

<CodeHeader>#component_groups/minecraft:celebrate</CodeHeader>

```json
"minecraft:behavior.celebrate_survive": {
    "priority": 5,
    "fireworks_interval": {
        "range_min": 2.0,
        "range_max": 7.0
    },
    "duration": 30.0,
    "on_celebration_end_event": {
        "event": "minecraft:stop_celebrating",
        "target": "self"
    }
}
```

</Spoiler>

## behavior.charge_attack

<Spoiler title="Show">

vex

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.charge_attack": {
    "priority": 4
}
```

</Spoiler>

## behavior.charge_held_item

<Spoiler title="Show">

piglin

<CodeHeader>#component_groups/ranged_unit</CodeHeader>

```json
"minecraft:behavior.charge_held_item": {
    "priority": 3,
    "items": [
        "minecraft:arrow"
    ]
}
```

pillager

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.charge_held_item": {
    "priority": 3,
    "items": [
        "minecraft:arrow"
    ]
}
```

</Spoiler>

## behavior.circle_around_anchor

<Spoiler title="Show">

phantom

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.circle_around_anchor": {
    "priority": 3,
    "radius_change": 1.0,
    "radius_adjustment_chance": 0.004,
    "height_adjustment_chance": 0.002857,
    "goal_radius": 1.0,
    "angle_change": 15.0,
    "radius_range": [
        5.0,
        15.0
    ],
    "height_offset_range": [
        -4.0,
        5.0
    ],
    "height_above_target_range": [
        20.0,
        40.0
    ]
}
```

</Spoiler>

## behavior.controlled_by_player

<Spoiler title="Show">

pig

<CodeHeader>#component_groups/minecraft:pig_saddled</CodeHeader>

```json
"minecraft:behavior.controlled_by_player": {
    "priority": 0
}
```

strider

<CodeHeader>#component_groups/minecraft:strider_saddled</CodeHeader>

```json
"minecraft:behavior.controlled_by_player": {
    "priority": 0,
    "mount_speed_multiplier": 1.45
}
```

</Spoiler>

## behavior.croak

<Spoiler title="Show">

frog

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.croak": {
    "priority": 9,
    "interval": [
        10,
        20
    ],
    "duration": 4.5,
    "filters": {
        "all_of": [
            {
                "test": "in_water",
                "value": false
            },
            {
                "test": "in_lava",
                "value": false
            }
        ]
    }
}
```

</Spoiler>

## behavior.defend_trusted_target

<Spoiler title="Show">

fox

<CodeHeader>#component_groups/minecraft:trusting_fox</CodeHeader>

```json
"minecraft:behavior.defend_trusted_target": {
    "priority": 0,
    "within_radius": 25,
    "must_see": false,
    "aggro_sound": "mad",
    "sound_chance": 0.05,
    "on_defend_start": {
        "event": "minecraft:fox_configure_defending",
        "target": "self"
    }
}
```

</Spoiler>

## behavior.defend_village_target

<Spoiler title="Show">

iron_golem

<CodeHeader>#component_groups/minecraft:village_created</CodeHeader>

```json
"minecraft:behavior.defend_village_target": {
    "priority": 1,
    "must_reach": true,
    "attack_chance": 0.05,
    "entity_types": {
        "filters": {
            "any_of": [
                {
                    "test": "is_family",
                    "subject": "other",
                    "value": "mob"
                },
                {
                    "test": "is_family",
                    "subject": "other",
                    "value": "player"
                }
            ]
        }
    }
}
```

</Spoiler>

## behavior.delayed_attack

<Spoiler title="Show">

ravager

<CodeHeader>#component_groups/minecraft:hostile</CodeHeader>

```json
"minecraft:behavior.delayed_attack": {
    "priority": 4,
    "attack_once": false,
    "track_target": true,
    "require_complete_path": false,
    "random_stop_interval": 0,
    "reach_multiplier": 1.5,
    "speed_multiplier": 1.0,
    "attack_duration": 0.75,
    "hit_delay_pct": 0.5
}
```

</Spoiler>

## behavior.dig

<Spoiler title="Show">

warden

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.dig": {
    "priority": 1,
    "duration": 5.5,
    "idle_time": 60.0,
    "vibration_is_disturbance": true,
    "suspicion_is_disturbance": true,
    "digs_in_daylight": false,
    "on_start": {
        "event": "on_digging_event",
        "target": "self"
    }
}
```

</Spoiler>

## behavior.dragonchargeplayer

<Spoiler title="Show">

ender_dragon

<CodeHeader>#component_groups/dragon_flying</CodeHeader>

```json
"minecraft:behavior.dragonchargeplayer": {
    "priority": 1
}
```

</Spoiler>

## behavior.dragondeath

<Spoiler title="Show">

ender_dragon

<CodeHeader>#component_groups/dragon_death</CodeHeader>

```json
"minecraft:behavior.dragondeath": {
    "priority": 0
}
```

</Spoiler>

## behavior.dragonflaming

<Spoiler title="Show">

ender_dragon

<CodeHeader>#component_groups/dragon_sitting</CodeHeader>

```json
"minecraft:behavior.dragonflaming": {
    "priority": 1
}
```

</Spoiler>

## behavior.dragonholdingpattern

<Spoiler title="Show">

ender_dragon

<CodeHeader>#component_groups/dragon_flying</CodeHeader>

```json
"minecraft:behavior.dragonholdingpattern": {
    "priority": 3
}
```

</Spoiler>

## behavior.dragonlanding

<Spoiler title="Show">

ender_dragon

<CodeHeader>#component_groups/dragon_sitting</CodeHeader>

```json
"minecraft:behavior.dragonlanding": {
    "priority": 0
}
```

</Spoiler>

## behavior.dragonscanning

<Spoiler title="Show">

ender_dragon

<CodeHeader>#component_groups/dragon_sitting</CodeHeader>

```json
"minecraft:behavior.dragonscanning": {
    "priority": 2
}
```

</Spoiler>

## behavior.dragonstrafeplayer

<Spoiler title="Show">

ender_dragon

<CodeHeader>#component_groups/dragon_flying</CodeHeader>

```json
"minecraft:behavior.dragonstrafeplayer": {
    "priority": 2
}
```

</Spoiler>

## behavior.dragontakeoff

<Spoiler title="Show">

ender_dragon

<CodeHeader>#component_groups/dragon_flying</CodeHeader>

```json
"minecraft:behavior.dragontakeoff": {
    "priority": 0
}
```

</Spoiler>

## behavior.drink_milk

<Spoiler title="Show">

wandering_trader

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.drink_milk": {
    "priority": 5,
    "filters": {
        "all_of": [
            {
                "test": "is_daytime",
                "value": true
            },
            {
                "test": "is_visible",
                "subject": "self",
                "value": false
            },
            {
                "test": "is_avoiding_mobs",
                "subject": "self",
                "value": false
            }
        ]
    }
}
```

</Spoiler>

## behavior.drink_potion

<Spoiler title="Show">

wandering_trader

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.drink_potion": {
    "priority": 1,
    "speed_modifier": -0.2,
    "potions": [
        {
            "id": 7,
            "chance": 1.0,
            "filters": {
                "all_of": [
                    {
                        "any_of": [
                            {
                                "test": "hourly_clock_time",
                                "operator": ">=",
                                "value": 18000
                            },
                            {
                                "test": "hourly_clock_time",
                                "operator": "<",
                                "value": 12000
                            }
                        ]
                    },
                    {
                        "test": "is_visible",
                        "subject": "self",
                        "value": true
                    },
                    {
                        "any_of": [
                            {
                                "test": "is_avoiding_mobs",
                                "subject": "self",
                                "value": true
                            },
                            {
                                "all_of": [
                                    {
                                        "test": "has_component",
                                        "subject": "self",
                                        "value": "minecraft:angry"
                                    },
                                    {
                                        "test": "is_family",
                                        "subject": "target",
                                        "operator": "!=",
                                        "value": "player"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        },
        {
            "id": 8,
            "chance": 1.0,
            "filters": {
                "all_of": [
                    {
                        "test": "hourly_clock_time",
                        "operator": ">=",
                        "value": 12000
                    },
                    {
                        "test": "hourly_clock_time",
                        "operator": "<",
                        "value": 18000
                    },
                    {
                        "test": "is_visible",
                        "subject": "self",
                        "value": true
                    },
                    {
                        "any_of": [
                            {
                                "test": "is_avoiding_mobs",
                                "subject": "self",
                                "value": true
                            },
                            {
                                "test": "has_component",
                                "subject": "self",
                                "value": "minecraft:angry"
                            }
                        ]
                    }
                ]
            }
        }
    ]
}
```

witch

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.drink_potion": {
    "priority": 1,
    "speed_modifier": -0.25,
    "potions": [
        {
            "id": 19,
            "chance": 0.15,
            "filters": {
                "all_of": [
                    {
                        "test": "is_underwater",
                        "subject": "self",
                        "value": true
                    },
                    {
                        "none_of": [
                            {
                                "test": "has_mob_effect",
                                "subject": "self",
                                "value": "water_breathing"
                            }
                        ]
                    }
                ]
            }
        },
        {
            "id": 12,
            "chance": 0.15,
            "filters": {
                "all_of": [
                    {
                        "any_of": [
                            {
                                "test": "on_fire",
                                "subject": "self",
                                "value": true
                            },
                            {
                                "test": "on_hot_block",
                                "subject": "self",
                                "value": true
                            }
                        ]
                    },
                    {
                        "none_of": [
                            {
                                "test": "has_mob_effect",
                                "subject": "self",
                                "value": "fire_resistance"
                            }
                        ]
                    }
                ]
            }
        },
        {
            "id": 21,
            "chance": 0.05,
            "filters": {
                "all_of": [
                    {
                        "test": "is_missing_health",
                        "subject": "self",
                        "value": true
                    }
                ]
            }
        },
        {
            "id": 14,
            "chance": 0.25,
            "filters": {
                "all_of": [
                    {
                        "test": "has_target",
                        "subject": "self",
                        "value": true
                    },
                    {
                        "none_of": [
                            {
                                "test": "has_mob_effect",
                                "subject": "self",
                                "value": "speed"
                            }
                        ]
                    },
                    {
                        "test": "target_distance",
                        "subject": "self",
                        "value": 11.0,
                        "operator": ">="
                    }
                ]
            }
        }
    ]
}
```

</Spoiler>

## behavior.drop_item_for

<Spoiler title="Show">

cat

<CodeHeader>#component_groups/minecraft:cat_gift_for_owner</CodeHeader>

```json
"minecraft:behavior.drop_item_for": {
    "priority": 1,
    "seconds_before_pickup": 0.0,
    "cooldown": 0.25,
    "drop_item_chance": 0.7,
    "offering_distance": 5.0,
    "minimum_teleport_distance": 2.0,
    "max_head_look_at_height": 10.0,
    "target_range": [
        5.0,
        5.0,
        5.0
    ],
    "teleport_offset": [
        0.0,
        1.0,
        0.0
    ],
    "time_of_day_range": [
        0.74999,
        0.8
    ],
    "speed_multiplier": 1.0,
    "search_range": 5,
    "search_height": 2,
    "search_count": 0,
    "goal_radius": 1.0,
    "entity_types": [
        {
            "filters": {
                "test": "is_family",
                "subject": "other",
                "value": "player"
            },
            "max_dist": 6
        }
    ],
    "loot_table": "loot_tables/entities/cat_gift.json",
    "on_drop_attempt": {
        "event": "minecraft:cat_gifted_owner",
        "target": "self"
    }
}
```

</Spoiler>

## behavior.eat_block

<Spoiler title="Show">

sheep

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.eat_block": {
    "priority": 6,
    "success_chance": "query.is_baby ? 0.02 : 0.001",
    "time_until_eat": 1.8,
    "eat_and_replace_block_pairs": [
        {
            "eat_block": "grass",
            "replace_block": "dirt"
        },
        {
            "eat_block": "tallgrass",
            "replace_block": "air"
        }
    ],
    "on_eat": {
        "event": "minecraft:on_eat_block",
        "target": "self"
    }
}
```

</Spoiler>

## behavior.eat_carried_item

<Spoiler title="Show">

fox

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.eat_carried_item": {
    "priority": 12,
    "delay_before_eating": 28
}
```

</Spoiler>

## behavior.eat_mob

<Spoiler title="Show">

frog

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.eat_mob": {
    "priority": 7,
    "run_speed": 2.0,
    "eat_animation_time": 0.3,
    "pull_in_force": 0.75,
    "reach_mob_distance": 1.75,
    "eat_mob_sound": "tongue",
    "loot_table": "loot_tables/entities/frog.json"
}
```

</Spoiler>

## behavior.emerge

<Spoiler title="Show">

warden

<CodeHeader>#component_groups/emerging</CodeHeader>

```json
"minecraft:behavior.emerge": {
    "duration": 7.0,
    "on_done": {
        "event": "minecraft:emerged",
        "target": "self"
    }
}
```

</Spoiler>

## behavior.enderman_leave_block

<Spoiler title="Show">

enderman

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.enderman_leave_block": {
    "priority": 10
}
```

</Spoiler>

## behavior.enderman_take_block

<Spoiler title="Show">

enderman

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.enderman_take_block": {
    "priority": 11
}
```

</Spoiler>

## behavior.equip_item

<Spoiler title="Show">

drowned

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.equip_item": {
    "priority": 3
}
```

fox

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.equip_item": {
    "priority": 2
}
```

husk

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.equip_item": {
    "priority": 2
}
```

piglin

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.equip_item": {
    "priority": 5
}
```

pillager

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.equip_item": {
    "priority": 3
}
```

skeleton

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.equip_item": {
    "priority": 3
}
```

stray

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.equip_item": {
    "priority": 3
}
```

wither_skeleton

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.equip_item": {
    "priority": 3
}
```

</Spoiler>

## behavior.explore_outskirts

<Spoiler title="Show">

villager_v2

<CodeHeader>#component_groups/job_specific_goals</CodeHeader>

```json
"minecraft:behavior.explore_outskirts": {}
```

<CodeHeader>#component_groups/wander_schedule_villager</CodeHeader>

```json
"minecraft:behavior.explore_outskirts": {
    "priority": 9,
    "next_xz": 5,
    "next_y": 3,
    "min_wait_time": 3.0,
    "max_wait_time": 10.0,
    "max_travel_time": 60.0,
    "speed_multiplier": 0.6,
    "explore_dist": 6.0,
    "min_perimeter": 1.0,
    "min_dist_from_target": 2.5,
    "timer_ratio": 2.0,
    "dist_from_boundary": [
        5.0,
        0.0,
        5.0
    ]
}
```

</Spoiler>

## behavior.fertilize_farm_block

<Spoiler title="Show">

villager_v2

<CodeHeader>#component_groups/work_schedule_farmer</CodeHeader>

```json
"minecraft:behavior.fertilize_farm_block": {
    "priority": 8
}
```

</Spoiler>

## behavior.find_cover

<Spoiler title="Show">

fox

<CodeHeader>#component_groups/minecraft:fox_thunderstorm</CodeHeader>

```json
"minecraft:behavior.find_cover": {
    "priority": 0,
    "speed_multiplier": 1,
    "cooldown_time": 0.0
}
```

<CodeHeader>#component_groups/minecraft:fox_day</CodeHeader>

```json
"minecraft:behavior.find_cover": {
    "priority": 9,
    "speed_multiplier": 1,
    "cooldown_time": 5.0
}
```

</Spoiler>

## behavior.find_mount

<Spoiler title="Show">

husk

<CodeHeader>#component_groups/minecraft:zombie_husk_jockey</CodeHeader>

```json
"minecraft:behavior.find_mount": {
    "priority": 1,
    "within_radius": 16
}
```

parrot

<CodeHeader>#component_groups/minecraft:parrot_tame</CodeHeader>

```json
"minecraft:behavior.find_mount": {
    "priority": 3,
    "within_radius": 16,
    "avoid_water": true,
    "start_delay": 100,
    "target_needed": false,
    "mount_distance": 2.0
}
```

piglin

<CodeHeader>#component_groups/piglin_jockey</CodeHeader>

```json
"minecraft:behavior.find_mount": {
    "priority": 1,
    "within_radius": 16,
    "start_delay": 15,
    "max_failed_attempts": 20
}
```

zombie

<CodeHeader>#component_groups/minecraft:zombie_jockey</CodeHeader>

```json
"minecraft:behavior.find_mount": {
    "priority": 1,
    "within_radius": 16,
    "start_delay": 15,
    "max_failed_attempts": 20
}
```

zombie_villager

<CodeHeader>#component_groups/jockey</CodeHeader>

```json
"minecraft:behavior.find_mount": {
    "priority": 1,
    "within_radius": 16
}
```

zombie_villager_v2

<CodeHeader>#component_groups/jockey</CodeHeader>

```json
"minecraft:behavior.find_mount": {
    "priority": 1,
    "within_radius": 16
}
```

</Spoiler>

## behavior.find_underwater_treasure

<Spoiler title="Show">

dolphin

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.find_underwater_treasure": {
    "priority": 2,
    "speed_multiplier": 2.0,
    "search_range": 30,
    "stop_distance": 50
}
```

</Spoiler>

## behavior.flee_sun

<Spoiler title="Show">

drowned

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.flee_sun": {
    "priority": 2,
    "speed_multiplier": 1
}
```

skeleton

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.flee_sun": {
    "priority": 2,
    "speed_multiplier": 1
}
```

stray

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.flee_sun": {
    "priority": 2,
    "speed_multiplier": 1
}
```

zombie_villager

<CodeHeader>#component_groups/from_abandoned_village</CodeHeader>

```json
"minecraft:behavior.flee_sun": {
    "priority": 4,
    "speed_multiplier": 1
}
```

zombie_villager_v2

<CodeHeader>#component_groups/from_abandoned_village</CodeHeader>

```json
"minecraft:behavior.flee_sun": {
    "priority": 4,
    "speed_multiplier": 1
}
```

</Spoiler>

## behavior.float

<Spoiler title="Show">

allay

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.float": {
    "priority": 7
}
```

bat

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.float": {
    "priority": 0
}
```

bee

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.float": {
    "priority": 19
}
```

blaze

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.float": {
    "priority": 0
}
```

cat

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.float": {
    "priority": 0
}
```

cave_spider

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.float": {
    "priority": 1
}
```

chicken

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.float": {
    "priority": 0
}
```

cow

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.float": {
    "priority": 0
}
```

</Spoiler>

## behavior.float_wander

<Spoiler title="Show">

bat

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.float_wander": {
    "xz_dist": 10,
    "y_dist": 7,
    "y_offset": -2.0,
    "random_reselect": true,
    "float_duration": [
        0.1,
        0.35
    ]
}
```

ghast

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.float_wander": {
    "priority": 2,
    "must_reach": true
}
```

</Spoiler>

## behavior.follow_caravan

<Spoiler title="Show">

llama

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.follow_caravan": {
    "priority": 3,
    "speed_multiplier": 2.1,
    "entity_count": 10,
    "entity_types": {
        "filters": {
            "test": "is_family",
            "subject": "other",
            "value": "llama"
        }
    }
}
```

trader_llama

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.follow_caravan": {
    "priority": 3,
    "speed_multiplier": 2.1,
    "entity_count": 10,
    "entity_types": {
        "filters": {
            "test": "is_family",
            "subject": "other",
            "value": "llama"
        }
    }
}
```

</Spoiler>

## behavior.follow_mob

<Spoiler title="Show">

parrot

<CodeHeader>#component_groups/minecraft:parrot_wild</CodeHeader>

```json
"minecraft:behavior.follow_mob": {
    "priority": 3,
    "speed_multiplier": 1.0,
    "stop_distance": 3,
    "search_range": 20
}
```

</Spoiler>

## behavior.follow_owner

<Spoiler title="Show">

allay

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.follow_owner": {
    "priority": 6,
    "speed_multiplier": 8,
    "start_distance": 16,
    "stop_distance": 4,
    "can_teleport": false,
    "ignore_vibration": false
}
```

cat

<CodeHeader>#component_groups/minecraft:cat_tame</CodeHeader>

```json
"minecraft:behavior.follow_owner": {
    "priority": 4,
    "speed_multiplier": 1.0,
    "start_distance": 10,
    "stop_distance": 2
}
```

ocelot

<CodeHeader>#component_groups/minecraft:ocelot_tame</CodeHeader>

```json
"minecraft:behavior.follow_owner": {
    "priority": 4,
    "speed_multiplier": 1.0,
    "start_distance": 10,
    "stop_distance": 2
}
```

parrot

<CodeHeader>#component_groups/minecraft:parrot_tame</CodeHeader>

```json
"minecraft:behavior.follow_owner": {
    "priority": 2,
    "speed_multiplier": 1.0,
    "start_distance": 5,
    "stop_distance": 1
}
```

wolf

<CodeHeader>#component_groups/minecraft:wolf_tame</CodeHeader>

```json
"minecraft:behavior.follow_owner": {
    "priority": 6,
    "speed_multiplier": 1.0,
    "start_distance": 10,
    "stop_distance": 2
}
```

</Spoiler>

## behavior.follow_parent

<Spoiler title="Show">

axolotl

<CodeHeader>#component_groups/axolotl_baby</CodeHeader>

```json
"minecraft:behavior.follow_parent": {
    "priority": 5,
    "speed_multiplier": 1.1
}
```

bee

<CodeHeader>#component_groups/bee_baby</CodeHeader>

```json
"minecraft:behavior.follow_parent": {
    "priority": 11,
    "speed_multiplier": 1.1
}
```

chicken

<CodeHeader>#component_groups/minecraft:chicken_baby</CodeHeader>

```json
"minecraft:behavior.follow_parent": {
    "priority": 5,
    "speed_multiplier": 1.1
}
```

cow

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.follow_parent": {
    "priority": 5,
    "speed_multiplier": 1.1
}
```

<CodeHeader>#component_groups/minecraft:cow_baby</CodeHeader>

```json
"minecraft:behavior.follow_parent": {
    "priority": 6,
    "speed_multiplier": 1.1
}
```

dolphin

<CodeHeader>#component_groups/dolphin_baby</CodeHeader>

```json
"minecraft:behavior.follow_parent": {
    "priority": 4,
    "speed_multiplier": 1.1
}
```

donkey

<CodeHeader>#component_groups/minecraft:donkey_baby</CodeHeader>

```json
"minecraft:behavior.follow_parent": {
    "priority": 4,
    "speed_multiplier": 1.0
}
```

fox

<CodeHeader>#component_groups/minecraft:fox_baby</CodeHeader>

```json
"minecraft:behavior.follow_parent": {
    "priority": 9,
    "speed_multiplier": 1.1
}
```

</Spoiler>

## behavior.follow_target_captain

<Spoiler title="Show">

pillager

<CodeHeader>#component_groups/minecraft:patrol_follower</CodeHeader>

```json
"minecraft:behavior.follow_target_captain": {
    "priority": 5,
    "speed_multiplier": 0.8,
    "within_radius": 64,
    "follow_distance": 5
}
```

vindicator

<CodeHeader>#component_groups/minecraft:patrol_follower</CodeHeader>

```json
"minecraft:behavior.follow_target_captain": {
    "priority": 5,
    "speed_multiplier": 0.8,
    "within_radius": 64,
    "follow_distance": 5
}
```

</Spoiler>

## behavior.go_and_give_items_to_noteblock

<Spoiler title="Show">

allay

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.go_and_give_items_to_noteblock": {
    "priority": 3,
    "run_speed": 8,
    "throw_sound": "item_thrown",
    "on_item_throw": [
        {
            "event": "pickup_item_delay",
            "target": "self"
        }
    ]
}
```

</Spoiler>

## behavior.go_and_give_items_to_owner

<Spoiler title="Show">

allay

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.go_and_give_items_to_owner": {
    "priority": 4,
    "run_speed": 8,
    "throw_sound": "item_thrown",
    "on_item_throw": [
        {
            "event": "pickup_item_delay",
            "target": "self"
        }
    ]
}
```

</Spoiler>

## behavior.go_home

<Spoiler title="Show">

bee

<CodeHeader>#component_groups/return_to_home</CodeHeader>

```json
"minecraft:behavior.go_home": {
    "priority": 4,
    "speed_multiplier": 1.0,
    "interval": 1,
    "goal_radius": 1.2,
    "on_home": [
        {
            "filters": {
                "any_of": [
                    {
                        "test": "is_block",
                        "subject": "block",
                        "value": "minecraft:bee_nest"
                    },
                    {
                        "test": "is_block",
                        "subject": "block",
                        "value": "minecraft:beehive"
                    }
                ]
            },
            "event": "minecraft:bee_returned_to_hive",
            "target": "block"
        },
        {
            "filters": {
                "all_of": [
                    {
                        "test": "is_block",
                        "subject": "block",
                        "operator": "!=",
                        "value": "minecraft:bee_nest"
                    },
                    {
                        "test": "is_block",
                        "subject": "block",
                        "operator": "!=",
                        "value": "minecraft:beehive"
                    }
                ]
            },
            "event": "find_hive_event",
            "target": "self"
        }
    ],
    "on_failed": [
        {
            "event": "find_hive_event",
            "target": "self"
        }
    ]
}
```

piglin_brute

<CodeHeader>#component_groups/go_back_to_spawn</CodeHeader>

```json
"minecraft:behavior.go_home": {
    "priority": 6,
    "interval": 200,
    "speed_multiplier": 0.6,
    "goal_radius": 4.0,
    "on_failed": [
        {
            "event": "go_back_to_spawn_failed",
            "target": "self"
        }
    ]
}
```

turtle

<CodeHeader>#component_groups/minecraft:pregnant</CodeHeader>

```json
"minecraft:behavior.go_home": {
    "priority": 1,
    "speed_multiplier": 1.0,
    "interval": 700,
    "goal_radius": 4.0,
    "on_home": [
        {
            "event": "minecraft:go_lay_egg",
            "target": "self"
        }
    ]
}
```

</Spoiler>

## behavior.guardian_attack

<Spoiler title="Show">

elder_guardian

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.guardian_attack": {
    "priority": 4
}
```

guardian

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.guardian_attack": {
    "priority": 4
}
```

<CodeHeader>#component_groups/minecraft:guardian_aggressive</CodeHeader>

```json
"minecraft:behavior.guardian_attack": {
    "priority": 4
}
```

</Spoiler>

## behavior.harvest_farm_block

<Spoiler title="Show">

villager

<CodeHeader>#component_groups/behavior_peasant</CodeHeader>

```json
"minecraft:behavior.harvest_farm_block": {
    "priority": 9,
    "speed_multiplier": 0.5
}
```

villager_v2

<CodeHeader>#component_groups/job_specific_goals</CodeHeader>

```json
"minecraft:behavior.harvest_farm_block": {}
```

<CodeHeader>#component_groups/work_schedule_farmer</CodeHeader>

```json
"minecraft:behavior.harvest_farm_block": {
    "priority": 7
}
```

</Spoiler>

## behavior.hide

<Spoiler title="Show">

villager_v2

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.hide": {
    "priority": 0,
    "speed_multiplier": 0.8,
    "poi_type": "bed",
    "duration": 30.0
}
```

</Spoiler>

## behavior.hold_ground

<Spoiler title="Show">

pillager

<CodeHeader>#component_groups/minecraft:patrol_captain</CodeHeader>

```json
"minecraft:behavior.hold_ground": {
    "priority": 5,
    "min_radius": 10,
    "broadcast": true,
    "broadcast_range": 8,
    "within_radius_event": {
        "event": "minecraft:ranged_mode",
        "target": "self"
    }
}
```

<CodeHeader>#component_groups/minecraft:patrol_follower</CodeHeader>

```json
"minecraft:behavior.hold_ground": {
    "priority": 6,
    "min_radius": 10,
    "broadcast": true,
    "broadcast_range": 8,
    "within_radius_event": {
        "event": "minecraft:ranged_mode",
        "target": "self"
    }
}
```

</Spoiler>

## behavior.hurt_by_target

<Spoiler title="Show">

bee

<CodeHeader>#component_groups/track_attacker</CodeHeader>

```json
"minecraft:behavior.hurt_by_target": {
    "priority": 1
}
```

blaze

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.hurt_by_target": {
    "priority": 1
}
```

cave_spider

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.hurt_by_target": {
    "priority": 1
}
```

creeper

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.hurt_by_target": {
    "priority": 2
}
```

dolphin

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.hurt_by_target": {
    "priority": 1
}
```

drowned

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.hurt_by_target": {
    "priority": 1
}
```

enderman

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.hurt_by_target": {
    "priority": 3
}
```

evocation_illager

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.hurt_by_target": {
    "priority": 1
}
```

</Spoiler>

## behavior.inspect_bookshelf

<Spoiler title="Show">

villager_v2

<CodeHeader>#component_groups/job_specific_goals</CodeHeader>

```json
"minecraft:behavior.inspect_bookshelf": {}
```

<CodeHeader>#component_groups/work_schedule_librarian</CodeHeader>

```json
"minecraft:behavior.inspect_bookshelf": {
    "priority": 8,
    "speed_multiplier": 0.6,
    "search_range": 4,
    "search_height": 3,
    "goal_radius": 0.8,
    "search_count": 0
}
```

</Spoiler>

## behavior.investigate_suspicious_location

<Spoiler title="Show">

warden

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.investigate_suspicious_location": {
    "priority": 5,
    "speed_multiplier": 0.7
}
```

</Spoiler>

## behavior.jump_to_block

<Spoiler title="Show">

frog

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.jump_to_block": {
    "priority": 10,
    "search_width": 8,
    "search_height": 4,
    "minimum_path_length": 2,
    "minimum_distance": 1,
    "scale_factor": 0.6,
    "max_velocity": 1,
    "cooldown_range": [
        5,
        7
    ],
    "preferred_blocks": [
        "minecraft:waterlily",
        "minecraft:big_dripleaf"
    ],
    "preferred_blocks_chance": 0.5,
    "forbidden_blocks": [
        "minecraft:water"
    ]
}
```

goat

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.jump_to_block": {
    "priority": 8,
    "search_width": 10,
    "search_height": 10,
    "minimum_path_length": 8,
    "minimum_distance": 1,
    "scale_factor": 0.6,
    "cooldown_range": [
        30,
        60
    ]
}
```

</Spoiler>

## behavior.knockback_roar

<Spoiler title="Show">

ravager

<CodeHeader>#component_groups/roaring</CodeHeader>

```json
"minecraft:behavior.knockback_roar": {
    "priority": 1,
    "duration": 1,
    "attack_time": 0.5,
    "knockback_damage": 6,
    "knockback_horizontal_strength": 3,
    "knockback_vertical_strength": 3,
    "knockback_range": 4,
    "knockback_filters": {
        "test": "is_family",
        "subject": "other",
        "operator": "!=",
        "value": "ravager"
    },
    "damage_filters": {
        "test": "is_family",
        "subject": "other",
        "operator": "!=",
        "value": "illager"
    },
    "on_roar_end": {
        "event": "minecraft:end_roar"
    },
    "cooldown_time": 0.1
}
```

</Spoiler>

## behavior.lay_down

<Spoiler title="Show">

panda

<CodeHeader>#component_groups/minecraft:panda_lazy</CodeHeader>

```json
"minecraft:behavior.lay_down": {
    "priority": 5,
    "interval": 400,
    "random_stop_interval": 2000
}
```

</Spoiler>

## behavior.lay_egg

<Spoiler title="Show">

frog

<CodeHeader>#component_groups/pregnant</CodeHeader>

```json
"minecraft:behavior.lay_egg": {
    "priority": 2,
    "speed_multiplier": 1.0,
    "search_range": 10,
    "search_height": 3,
    "goal_radius": 1.7,
    "target_blocks": [
        "minecraft:water"
    ],
    "target_materials_above_block": [
        "Air"
    ],
    "allow_laying_from_below": true,
    "use_default_animation": false,
    "lay_seconds": 2,
    "egg_type": "minecraft:frog_spawn",
    "lay_egg_sound": "lay_spawn",
    "on_lay": {
        "event": "laid_egg",
        "target": "self"
    }
}
```

turtle

<CodeHeader>#component_groups/minecraft:wants_to_lay_egg</CodeHeader>

```json
"minecraft:behavior.lay_egg": {
    "priority": 1,
    "speed_multiplier": 1.0,
    "search_range": 16,
    "search_height": 4,
    "goal_radius": 1.5,
    "on_lay": {
        "event": "minecraft:laid_egg",
        "target": "self"
    }
}
```

</Spoiler>

## behavior.leap_at_target

<Spoiler title="Show">

cat

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.leap_at_target": {
    "priority": 3,
    "target_dist": 0.3
}
```

cave_spider

<CodeHeader>#component_groups/minecraft:spider_hostile</CodeHeader>

```json
"minecraft:behavior.leap_at_target": {
    "priority": 4,
    "yd": 0.4,
    "must_be_on_ground": false
}
```

<CodeHeader>#component_groups/minecraft:spider_angry</CodeHeader>

```json
"minecraft:behavior.leap_at_target": {
    "priority": 4,
    "yd": 0.4,
    "must_be_on_ground": false
}
```

ocelot

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.leap_at_target": {
    "priority": 3,
    "target_dist": 0.3
}
```

spider

<CodeHeader>#component_groups/minecraft:spider_angry</CodeHeader>

```json
"minecraft:behavior.leap_at_target": {
    "priority": 4,
    "yd": 0.4,
    "must_be_on_ground": false
}
```

wolf

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.leap_at_target": {
    "priority": 4,
    "target_dist": 0.4
}
```

</Spoiler>

## behavior.look_at_entity

<Spoiler title="Show">

evocation_illager

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.look_at_entity": {
    "priority": 10,
    "look_distance": 8.0,
    "filters": {
        "test": "is_family",
        "subject": "other",
        "value": "mob"
    }
}
```

ravager

<CodeHeader>#component_groups/minecraft:hostile</CodeHeader>

```json
"minecraft:behavior.look_at_entity": {
    "priority": 10,
    "look_distance": 8,
    "angle_of_view_horizontal": 45,
    "filters": {
        "test": "is_family",
        "subject": "other",
        "value": "mob"
    }
}
```

vex

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.look_at_entity": {
    "priority": 9,
    "look_distance": 6.0,
    "probability": 0.02,
    "filters": {
        "test": "is_family",
        "subject": "other",
        "value": "mob"
    }
}
```

</Spoiler>

## behavior.look_at_player

<Spoiler title="Show">

allay

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.look_at_player": {
    "priority": 8,
    "target_distance": 6.0,
    "probability": 0.02
}
```

axolotl

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.look_at_player": {
    "priority": 10,
    "target_distance": 6.0,
    "probability": 0.02
}
```

cat

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.look_at_player": {
    "priority": 9
}
```

cave_spider

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.look_at_player": {
    "priority": 7,
    "look_distance": 6.0,
    "probability": 0.02
}
```

chicken

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.look_at_player": {
    "priority": 7,
    "look_distance": 6.0,
    "probability": 0.02
}
```

cow

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.look_at_player": {
    "priority": 7,
    "look_distance": 6.0,
    "probability": 0.02
}
```

creeper

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.look_at_player": {
    "priority": 6,
    "look_distance": 8
}
```

dolphin

<CodeHeader>#component_groups/dolphin_swimming_navigation</CodeHeader>

```json
"minecraft:behavior.look_at_player": {
    "priority": 8,
    "look_distance": 6
}
```

</Spoiler>

## behavior.look_at_target

<Spoiler title="Show">

wither

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.look_at_target": {
    "priority": 5
}
```

</Spoiler>

## behavior.look_at_trading_player

<Spoiler title="Show">

villager

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.look_at_trading_player": {
    "priority": 2
}
```

villager_v2

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.look_at_trading_player": {
    "priority": 7
}
```

wandering_trader

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.look_at_trading_player": {
    "priority": 4
}
```

</Spoiler>

## behavior.make_love

<Spoiler title="Show">

villager

<CodeHeader>#component_groups/adult</CodeHeader>

```json
"minecraft:behavior.make_love": {
    "priority": 6
}
```

villager_v2

<CodeHeader>#component_groups/make_and_receive_love</CodeHeader>

```json
"minecraft:behavior.make_love": {
    "priority": 5
}
```

</Spoiler>

## behavior.melee_attack

<Spoiler title="Show">

axolotl

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.melee_attack": {
    "priority": 4,
    "on_kill": {
        "event": "killed_enemy_event",
        "target": "self"
    }
}
```

bee

<CodeHeader>#component_groups/angry_bee</CodeHeader>

```json
"minecraft:behavior.melee_attack": {
    "priority": 2,
    "attack_once": true,
    "speed_multiplier": 1.4,
    "on_attack": {
        "event": "countdown_to_perish_event",
        "target": "self"
    }
}
```

blaze

<CodeHeader>#component_groups/melee_mode</CodeHeader>

```json
"minecraft:behavior.melee_attack": {
    "priority": 3
}
```

cave_spider

<CodeHeader>#component_groups/minecraft:spider_hostile</CodeHeader>

```json
"minecraft:behavior.melee_attack": {
    "priority": 3,
    "track_target": true,
    "random_stop_interval": 100,
    "reach_multiplier": 0.8
}
```

<CodeHeader>#component_groups/minecraft:spider_angry</CodeHeader>

```json
"minecraft:behavior.melee_attack": {
    "priority": 3,
    "track_target": true,
    "reach_multiplier": 1.4
}
```

creeper

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.melee_attack": {
    "priority": 4,
    "speed_multiplier": 1.25,
    "track_target": false,
    "reach_multiplier": 0.0
}
```

dolphin

<CodeHeader>#component_groups/dolphin_adult</CodeHeader>

```json
"minecraft:behavior.melee_attack": {
    "priority": 2,
    "track_target": true
}
```

drowned

<CodeHeader>#component_groups/minecraft:melee_mode</CodeHeader>

```json
"minecraft:behavior.melee_attack": {
    "priority": 3,
    "speed_multiplier": 1,
    "track_target": false,
    "require_complete_path": true
}
```

</Spoiler>

## behavior.mingle

<Spoiler title="Show">

villager_v2

<CodeHeader>#component_groups/job_specific_goals</CodeHeader>

```json
"minecraft:behavior.mingle": {}
```

<CodeHeader>#component_groups/gather_schedule_villager</CodeHeader>

```json
"minecraft:behavior.mingle": {
    "priority": 7,
    "speed_multiplier": 0.5,
    "duration": 30,
    "cooldown_time": 10,
    "mingle_partner_type": "minecraft:villager_v2",
    "mingle_distance": 2.0
}
```

</Spoiler>

## behavior.mount_pathing

<Spoiler title="Show">

cat

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.mount_pathing": {
    "priority": 1,
    "speed_multiplier": 1.25,
    "target_dist": 0,
    "track_target": true
}
```

cave_spider

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.mount_pathing": {
    "priority": 5,
    "speed_multiplier": 1.25,
    "target_dist": 0.0,
    "track_target": true
}
```

chicken

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.mount_pathing": {
    "priority": 2,
    "speed_multiplier": 1.5,
    "target_dist": 0.0,
    "track_target": true
}
```

cow

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.mount_pathing": {
    "priority": 2,
    "speed_multiplier": 1.5,
    "target_dist": 0.0,
    "track_target": true
}
```

donkey

<CodeHeader>#component_groups/minecraft:donkey_wild</CodeHeader>

```json
"minecraft:behavior.mount_pathing": {
    "priority": 2,
    "speed_multiplier": 1.5,
    "target_dist": 0.0,
    "track_target": true
}
```

horse

<CodeHeader>#component_groups/minecraft:horse_wild</CodeHeader>

```json
"minecraft:behavior.mount_pathing": {
    "priority": 2,
    "speed_multiplier": 1.5,
    "target_dist": 0.0,
    "track_target": true
}
```

husk

<CodeHeader>#component_groups/minecraft:zombie_husk_adult</CodeHeader>

```json
"minecraft:behavior.mount_pathing": {
    "priority": 2,
    "speed_multiplier": 1.25,
    "target_dist": 0.0,
    "track_target": true
}
```

llama

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.mount_pathing": {
    "priority": 1,
    "speed_multiplier": 1.25,
    "target_dist": 0.0,
    "track_target": true
}
```

</Spoiler>

## behavior.move_indoors

<Spoiler title="Show">

villager

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.move_indoors": {
    "priority": 4,
    "speed_multiplier": 0.8
}
```

villager_v2

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.move_indoors": {
    "priority": 6,
    "speed_multiplier": 0.8,
    "timeout_cooldown": 8.0
}
```

</Spoiler>

## behavior.move_outdoors

<Spoiler title="Show">

villager

<CodeHeader>#component_groups/minecraft:celebrate</CodeHeader>

```json
"minecraft:behavior.move_outdoors": {
    "priority": 2,
    "speed_multiplier": 0.8,
    "timeout_cooldown": 8.0
}
```

villager_v2

<CodeHeader>#component_groups/minecraft:celebrate</CodeHeader>

```json
"minecraft:behavior.move_outdoors": {
    "priority": 2,
    "speed_multiplier": 0.8,
    "timeout_cooldown": 8.0
}
```

</Spoiler>

## behavior.move_through_village

<Spoiler title="Show">

iron_golem

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.move_through_village": {
    "priority": 3,
    "speed_multiplier": 0.6,
    "only_at_night": true
}
```

</Spoiler>

## behavior.move_to_block

<Spoiler title="Show">

bee

<CodeHeader>#component_groups/look_for_food</CodeHeader>

```json
"minecraft:behavior.move_to_block": {
    "priority": 10,
    "tick_interval": 1,
    "start_chance": 0.5,
    "search_range": 6,
    "search_height": 4,
    "goal_radius": 1.0,
    "stay_duration": 20.0,
    "target_selection_method": "random",
    "target_offset": [
        0,
        0.25,
        0
    ],
    "target_block_filters": {
        "test": "is_waterlogged",
        "subject": "block",
        "operator": "==",
        "value": false
    },
    "target_blocks": [
        "minecraft:red_flower",
        "minecraft:yellow_flower",
        "minecraft:wither_rose",
        "minecraft:double_plant:8",
        "minecraft:double_plant:9",
        "minecraft:double_plant:12",
        "minecraft:double_plant:13",
        "minecraft:flowering_azalea",
        "minecraft:azalea_leaves_flowered",
        "minecraft:mangrove_propagule"
    ],
    "on_stay_completed": [
        {
            "event": "collected_nectar",
            "target": "self"
        }
    ]
}
```

<CodeHeader>#component_groups/find_hive</CodeHeader>

```json
"minecraft:behavior.move_to_block": {
    "priority": 10,
    "search_range": 16,
    "search_height": 10,
    "tick_interval": 1,
    "goal_radius": 0.633,
    "target_blocks": [
        "bee_nest",
        "beehive"
    ],
    "on_reach": [
        {
            "event": "minecraft:bee_returned_to_hive",
            "target": "block"
        }
    ]
}
```

</Spoiler>

## behavior.move_to_land

<Spoiler title="Show">

frog

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.move_to_land": {
    "priority": 6,
    "search_range": 30,
    "search_height": 8,
    "search_count": 80,
    "goal_radius": 2
}
```

turtle

<CodeHeader>#component_groups/minecraft:adult</CodeHeader>

```json
"minecraft:behavior.move_to_land": {
    "priority": 6,
    "search_range": 16,
    "search_height": 5,
    "goal_radius": 0.5
}
```

</Spoiler>

## behavior.move_to_liquid

<Spoiler title="Show">

strider

<CodeHeader>#component_groups/minecraft:strider_pathing_behaviors</CodeHeader>

```json
"minecraft:behavior.move_to_liquid": {
    "priority": 7,
    "search_range": 16,
    "search_height": 10,
    "goal_radius": 0.9,
    "material_type": "Lava",
    "search_count": 30
}
```

</Spoiler>

## behavior.move_to_random_block

<Spoiler title="Show">

pillager

<CodeHeader>#component_groups/minecraft:patrol_captain</CodeHeader>

```json
"minecraft:behavior.move_to_random_block": {
    "priority": 6,
    "speed_multiplier": 0.55,
    "within_radius": 8,
    "block_distance": 512
}
```

vindicator

<CodeHeader>#component_groups/minecraft:patrol_captain</CodeHeader>

```json
"minecraft:behavior.move_to_random_block": {
    "priority": 5,
    "speed_multiplier": 0.55,
    "within_radius": 8,
    "block_distance": 512
}
```

</Spoiler>

## behavior.move_to_village

<Spoiler title="Show">

evocation_illager

<CodeHeader>#component_groups/minecraft:raid_configuration</CodeHeader>

```json
"minecraft:behavior.move_to_village": {
    "priority": 6,
    "speed_multiplier": 0.7
}
```

pillager

<CodeHeader>#component_groups/minecraft:raid_configuration</CodeHeader>

```json
"minecraft:behavior.move_to_village": {
    "priority": 5,
    "speed_multiplier": 1.0,
    "goal_radius": 2.0
}
```

ravager

<CodeHeader>#component_groups/minecraft:raid_configuration</CodeHeader>

```json
"minecraft:behavior.move_to_village": {
    "priority": 5,
    "speed_multiplier": 1.0,
    "goal_radius": 2.0
}
```

vindicator

<CodeHeader>#component_groups/minecraft:raid_configuration</CodeHeader>

```json
"minecraft:behavior.move_to_village": {
    "priority": 4,
    "speed_multiplier": 1.0,
    "goal_radius": 2.0
}
```

witch

<CodeHeader>#component_groups/minecraft:raid_configuration</CodeHeader>

```json
"minecraft:behavior.move_to_village": {
    "priority": 3,
    "speed_multiplier": 1.2,
    "goal_radius": 2.0
}
```

</Spoiler>

## behavior.move_to_water

<Spoiler title="Show">

axolotl

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.move_to_water": {
    "priority": 6,
    "search_range": 16,
    "search_height": 5,
    "search_count": 1,
    "goal_radius": 0.1
}
```

dolphin

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.move_to_water": {
    "priority": 1,
    "search_range": 15,
    "search_height": 5
}
```

frog

<CodeHeader>#component_groups/pregnant</CodeHeader>

```json
"minecraft:behavior.move_to_water": {
    "priority": 3,
    "search_range": 20,
    "search_height": 5,
    "goal_radius": 1.5
}
```

turtle

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.move_to_water": {
    "priority": 4,
    "search_range": 16,
    "search_height": 5,
    "goal_radius": 1.5
}
```

<CodeHeader>#component_groups/minecraft:baby</CodeHeader>

```json
"minecraft:behavior.move_to_water": {
    "priority": 1,
    "search_range": 15,
    "search_height": 5,
    "goal_radius": 0.1
}
```

</Spoiler>

## behavior.move_towards_dwelling_restriction

<Spoiler title="Show">

cat

<CodeHeader>#component_groups/minecraft:cat_wild</CodeHeader>

```json
"minecraft:behavior.move_towards_dwelling_restriction": {
    "priority": 7
}
```

iron_golem

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.move_towards_dwelling_restriction": {
    "priority": 4,
    "speed_multiplier": 1
}
```

villager_v2

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.move_towards_dwelling_restriction": {
    "priority": 11,
    "speed_multiplier": 0.6
}
```

</Spoiler>

## behavior.move_towards_home_restriction

<Spoiler title="Show">

bee

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.move_towards_home_restriction": {
    "priority": 9
}
```

elder_guardian

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.move_towards_home_restriction": {
    "priority": 5,
    "speed_multiplier": 1.0
}
```

guardian

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.move_towards_home_restriction": {
    "priority": 5,
    "speed_multiplier": 1.0
}
```

wandering_trader

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.move_towards_home_restriction": {
    "priority": 6,
    "speed_multiplier": 0.6
}
```

</Spoiler>

## behavior.move_towards_target

<Spoiler title="Show">

iron_golem

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.move_towards_target": {
    "priority": 2,
    "speed_multiplier": 0.9,
    "within_radius": 32
}
```

</Spoiler>

## behavior.nap

<Spoiler title="Show">

fox

<CodeHeader>#component_groups/minecraft:fox_day</CodeHeader>

```json
"minecraft:behavior.nap": {
    "priority": 8,
    "cooldown_min": 2.0,
    "cooldown_max": 7.0,
    "mob_detect_dist": 12.0,
    "mob_detect_height": 6.0,
    "can_nap_filters": {
        "all_of": [
            {
                "test": "in_water",
                "subject": "self",
                "operator": "==",
                "value": false
            },
            {
                "test": "on_ground",
                "subject": "self",
                "operator": "==",
                "value": true
            },
            {
                "test": "is_underground",
                "subject": "self",
                "operator": "==",
                "value": true
            },
            {
                "test": "weather_at_position",
                "subject": "self",
                "operator": "!=",
                "value": "thunderstorm"
            }
        ]
    },
    "wake_mob_exceptions": {
        "any_of": [
            {
                "test": "trusts",
                "subject": "other",
                "operator": "==",
                "value": true
            },
            {
                "test": "is_family",
                "subject": "other",
                "operator": "==",
                "value": "fox"
            },
            {
                "test": "is_sneaking",
                "subject": "other",
                "operator": "==",
                "value": true
            }
        ]
    }
}
```

</Spoiler>

## behavior.nearest_attackable_target

<Spoiler title="Show">

axolotl

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.nearest_attackable_target": {
    "priority": 3,
    "must_see": true,
    "reselect_targets": true,
    "within_radius": 20.0,
    "must_see_forget_duration": 17.0,
    "entity_types": [
        {
            "filters": {
                "all_of": [
                    {
                        "test": "in_water",
                        "subject": "other",
                        "value": true
                    },
                    {
                        "test": "has_component",
                        "subject": "self",
                        "operator": "!=",
                        "value": "minecraft:attack_cooldown"
                    },
                    {
                        "any_of": [
                            {
                                "test": "is_family",
                                "subject": "other",
                                "value": "squid"
                            },
                            {
                                "test": "is_family",
                                "subject": "other",
                                "value": "fish"
                            },
                            {
                                "test": "is_family",
                                "subject": "other",
                                "value": "tadpole"
                            }
                        ]
                    }
                ]
            },
            "max_dist": 8
        },
        {
            "filters": {
                "all_of": [
                    {
                        "test": "in_water",
                        "subject": "other",
                        "value": true
                    },
                    {
                        "any_of": [
                            {
                                "test": "is_family",
                                "subject": "other",
                                "value": "drowned"
                            },
                            {
                                "test": "is_family",
                                "subject": "other",
                                "value": "guardian"
                            },
                            {
                                "test": "is_family",
                                "subject": "other",
                                "value": "guardian_elder"
                            }
                        ]
                    }
                ]
            },
            "max_dist": 8
        }
    ]
}
```

bee

<CodeHeader>#component_groups/take_nearest_target</CodeHeader>

```json
"minecraft:behavior.nearest_attackable_target": {
    "priority": 2,
    "entity_types": [
        {
            "filters": {
                "test": "is_family",
                "subject": "other",
                "value": "player"
            },
            "max_dist": 10
        }
    ]
}
```

blaze

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.nearest_attackable_target": {
    "priority": 2,
    "must_see": true,
    "entity_types": [
        {
            "filters": {
                "test": "is_family",
                "subject": "other",
                "value": "player"
            },
            "max_dist": 48.0
        }
    ]
}
```

cat

<CodeHeader>#component_groups/minecraft:cat_wild</CodeHeader>

```json
"minecraft:behavior.nearest_attackable_target": {
    "priority": 1,
    "reselect_targets": true,
    "within_radius": 16.0,
    "entity_types": [
        {
            "filters": {
                "test": "is_family",
                "subject": "other",
                "value": "rabbit"
            },
            "max_dist": 8
        },
        {
            "filters": {
                "all_of": [
                    {
                        "test": "is_family",
                        "subject": "other",
                        "value": "baby_turtle"
                    },
                    {
                        "test": "in_water",
                        "subject": "other",
                        "operator": "!=",
                        "value": true
                    }
                ]
            },
            "max_dist": 8
        }
    ]
}
```

cave_spider

<CodeHeader>#component_groups/minecraft:spider_hostile</CodeHeader>

```json
"minecraft:behavior.nearest_attackable_target": {
    "priority": 2,
    "must_see": true,
    "attack_interval": 5,
    "entity_types": [
        {
            "filters": {
                "any_of": [
                    {
                        "test": "is_family",
                        "subject": "other",
                        "value": "player"
                    },
                    {
                        "test": "is_family",
                        "subject": "other",
                        "value": "snowgolem"
                    },
                    {
                        "test": "is_family",
                        "subject": "other",
                        "value": "irongolem"
                    }
                ]
            },
            "max_dist": 16
        }
    ]
}
```

<CodeHeader>#component_groups/minecraft:spider_angry</CodeHeader>

```json
"minecraft:behavior.nearest_attackable_target": {
    "priority": 2,
    "must_see": true,
    "attack_interval": 10,
    "entity_types": [
        {
            "filters": {
                "any_of": [
                    {
                        "test": "is_family",
                        "subject": "other",
                        "value": "player"
                    },
                    {
                        "test": "is_family",
                        "subject": "other",
                        "value": "snowgolem"
                    },
                    {
                        "test": "is_family",
                        "subject": "other",
                        "value": "irongolem"
                    }
                ]
            },
            "max_dist": 16
        }
    ]
}
```

creeper

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.nearest_attackable_target": {
    "priority": 1,
    "must_see": true,
    "must_see_forget_duration": 3.0,
    "entity_types": [
        {
            "filters": {
                "test": "is_family",
                "subject": "other",
                "value": "player"
            },
            "max_dist": 16
        }
    ]
}
```

drowned

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.nearest_attackable_target": {
    "priority": 2,
    "reselect_targets": true,
    "must_see": true,
    "within_radius": 12.0,
    "must_see_forget_duration": 17.0,
    "persist_time": 0.5,
    "entity_types": [
        {
            "filters": {
                "all_of": [
                    {
                        "any_of": [
                            {
                                "test": "is_family",
                                "subject": "other",
                                "value": "player"
                            },
                            {
                                "test": "is_family",
                                "subject": "other",
                                "value": "snowgolem"
                            },
                            {
                                "test": "is_family",
                                "subject": "other",
                                "value": "irongolem"
                            },
                            {
                                "test": "is_family",
                                "subject": "other",
                                "value": "axolotl"
                            }
                        ]
                    },
                    {
                        "any_of": [
                            {
                                "test": "in_water",
                                "subject": "other",
                                "value": true
                            },
                            {
                                "test": "is_daytime",
                                "value": false
                            }
                        ]
                    }
                ]
            },
            "max_dist": 20
        },
        {
            "filters": {
                "all_of": [
                    {
                        "any_of": [
                            {
                                "test": "is_family",
                                "subject": "other",
                                "value": "villager"
                            },
                            {
                                "test": "is_family",
                                "subject": "other",
                                "value": "wandering_trader"
                            }
                        ]
                    },
                    {
                        "any_of": [
                            {
                                "test": "in_water",
                                "subject": "other",
                                "value": true
                            },
                            {
                                "test": "is_daytime",
                                "value": false
                            }
                        ]
                    }
                ]
            },
            "max_dist": 20,
            "must_see": false
        },
        {
            "filters": {
                "all_of": [
                    {
                        "test": "is_family",
                        "subject": "other",
                        "value": "baby_turtle"
                    },
                    {
                        "test": "in_water",
                        "subject": "other",
                        "operator": "!=",
                        "value": true
                    }
                ]
            },
            "max_dist": 20
        }
    ]
}
```

</Spoiler>

## behavior.nearest_prioritized_attackable_target

<Spoiler title="Show">

fox

<CodeHeader>#component_groups/minecraft:fox_red</CodeHeader>

```json
"minecraft:behavior.nearest_prioritized_attackable_target": {
    "priority": 6,
    "attack_interval": 2,
    "reselect_targets": true,
    "target_search_height": 5,
    "entity_types": [
        {
            "filters": {
                "test": "is_family",
                "subject": "other",
                "value": "rabbit"
            },
            "max_dist": 12,
            "priority": 0
        },
        {
            "filters": {
                "test": "is_family",
                "subject": "other",
                "value": "chicken"
            },
            "max_dist": 12,
            "priority": 0
        },
        {
            "filters": {
                "test": "is_family",
                "subject": "other",
                "value": "cod"
            },
            "max_dist": 12,
            "priority": 1
        },
        {
            "filters": {
                "test": "is_family",
                "subject": "other",
                "value": "salmon"
            },
            "max_dist": 12,
            "priority": 1
        },
        {
            "filters": {
                "test": "is_family",
                "subject": "other",
                "value": "tropicalfish"
            },
            "max_dist": 12,
            "priority": 1
        },
        {
            "filters": {
                "all_of": [
                    {
                        "test": "is_family",
                        "subject": "other",
                        "value": "baby_turtle"
                    },
                    {
                        "test": "in_water",
                        "subject": "other",
                        "operator": "!=",
                        "value": true
                    }
                ]
            },
            "max_dist": 12,
            "priority": 0
        }
    ]
}
```

<CodeHeader>#component_groups/minecraft:fox_arctic</CodeHeader>

```json
"minecraft:behavior.nearest_prioritized_attackable_target": {
    "priority": 6,
    "attack_interval": 2,
    "reselect_targets": true,
    "target_search_height": 5,
    "entity_types": [
        {
            "filters": {
                "test": "is_family",
                "subject": "other",
                "value": "rabbit"
            },
            "max_dist": 12,
            "priority": 1
        },
        {
            "filters": {
                "test": "is_family",
                "subject": "other",
                "value": "chicken"
            },
            "max_dist": 12,
            "priority": 1
        },
        {
            "filters": {
                "test": "is_family",
                "subject": "other",
                "value": "cod"
            },
            "max_dist": 12,
            "priority": 0
        },
        {
            "filters": {
                "test": "is_family",
                "subject": "other",
                "value": "salmon"
            },
            "max_dist": 12,
            "priority": 0
        },
        {
            "filters": {
                "test": "is_family",
                "subject": "other",
                "value": "tropicalfish"
            },
            "max_dist": 12,
            "priority": 0
        },
        {
            "filters": {
                "all_of": [
                    {
                        "test": "is_family",
                        "subject": "other",
                        "value": "baby_turtle"
                    },
                    {
                        "test": "in_water",
                        "subject": "other",
                        "operator": "!=",
                        "value": true
                    }
                ]
            },
            "max_dist": 12,
            "priority": 1
        }
    ]
}
```

piglin_brute

<CodeHeader>#component_groups/alert_for_attack_targets</CodeHeader>

```json
"minecraft:behavior.nearest_prioritized_attackable_target": {
    "priority": 3,
    "within_radius": 12.0,
    "persist_time": 2.0,
    "must_see": true,
    "entity_types": [
        {
            "filters": {
                "test": "is_family",
                "subject": "other",
                "value": "player"
            },
            "max_dist": 12,
            "priority": 0
        },
        {
            "filters": {
                "test": "is_family",
                "subject": "other",
                "value": "wither"
            },
            "max_dist": 12,
            "priority": 1
        }
    ]
}
```

</Spoiler>

## behavior.ocelot_sit_on_block

<Spoiler title="Show">

cat

<CodeHeader>#component_groups/minecraft:cat_tame</CodeHeader>

```json
"minecraft:behavior.ocelot_sit_on_block": {
    "priority": 7,
    "speed_multiplier": 1.0
}
```

ocelot

<CodeHeader>#component_groups/minecraft:ocelot_tame</CodeHeader>

```json
"minecraft:behavior.ocelot_sit_on_block": {
    "priority": 6,
    "speed_multiplier": 1.0
}
```

</Spoiler>

## behavior.ocelotattack

<Spoiler title="Show">

cat

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.ocelotattack": {
    "priority": 4,
    "cooldown_time": 1.0,
    "x_max_rotation": 30.0,
    "y_max_head_rotation": 30.0,
    "max_distance": 15.0,
    "max_sneak_range": 15.0,
    "max_sprint_range": 4.0,
    "reach_multiplier": 2.0,
    "sneak_speed_multiplier": 0.6,
    "sprint_speed_multiplier": 1.33,
    "walk_speed_multiplier": 0.8
}
```

ocelot

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.ocelotattack": {
    "priority": 4,
    "cooldown_time": 1.0,
    "x_max_rotation": 30.0,
    "y_max_head_rotation": 30.0,
    "max_distance": 15.0,
    "max_sneak_range": 15.0,
    "max_sprint_range": 4.0,
    "reach_multiplier": 2.0,
    "sneak_speed_multiplier": 0.6,
    "sprint_speed_multiplier": 1.33,
    "walk_speed_multiplier": 0.8
}
```

</Spoiler>

## behavior.offer_flower

<Spoiler title="Show">

iron_golem

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.offer_flower": {
    "priority": 5,
    "filters": {
        "all_of": [
            {
                "test": "is_daytime",
                "value": true
            }
        ]
    }
}
```

</Spoiler>

## behavior.open_door

<Spoiler title="Show">

villager

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.open_door": {
    "priority": 6,
    "close_door_after": true
}
```

</Spoiler>

## behavior.owner_hurt_by_target

<Spoiler title="Show">

wolf

<CodeHeader>#component_groups/minecraft:wolf_tame</CodeHeader>

```json
"minecraft:behavior.owner_hurt_by_target": {
    "priority": 1
}
```

</Spoiler>

## behavior.owner_hurt_target

<Spoiler title="Show">

wolf

<CodeHeader>#component_groups/minecraft:wolf_tame</CodeHeader>

```json
"minecraft:behavior.owner_hurt_target": {
    "priority": 2
}
```

</Spoiler>

## behavior.panic

<Spoiler title="Show">

allay

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.panic": {
    "priority": 1,
    "speed_multiplier": 2.0
}
```

bee

<CodeHeader>#component_groups/escape_fire</CodeHeader>

```json
"minecraft:behavior.panic": {
    "priority": 1,
    "speed_multiplier": 1.25,
    "force": true
}
```

<CodeHeader>#component_groups/countdown_to_perish</CodeHeader>

```json
"minecraft:behavior.panic": {
    "priority": 1,
    "speed_multiplier": 1.25,
    "force": true
}
```

cat

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.panic": {
    "priority": 1,
    "speed_multiplier": 1.25
}
```

chicken

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.panic": {
    "priority": 1,
    "speed_multiplier": 1.5
}
```

cow

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.panic": {
    "priority": 1,
    "speed_multiplier": 1.25
}
```

dolphin

<CodeHeader>#component_groups/dolphin_baby</CodeHeader>

```json
"minecraft:behavior.panic": {
    "priority": 1,
    "speed_multiplier": 1.25
}
```

donkey

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.panic": {
    "priority": 1,
    "speed_multiplier": 1.2
}
```

</Spoiler>

## behavior.pet_sleep_with_owner

<Spoiler title="Show">

cat

<CodeHeader>#component_groups/minecraft:cat_tame</CodeHeader>

```json
"minecraft:behavior.pet_sleep_with_owner": {
    "priority": 2,
    "speed_multiplier": 1.2,
    "search_radius": 10,
    "search_height": 10,
    "goal_radius": 1.0
}
```

</Spoiler>

## behavior.pickup_items

<Spoiler title="Show">

allay

<CodeHeader>#component_groups/pickup_item</CodeHeader>

```json
"minecraft:behavior.pickup_items": {
    "priority": 2,
    "max_dist": 32,
    "search_height": 32,
    "goal_radius": 2.2,
    "speed_multiplier": 6,
    "pickup_based_on_chance": false,
    "can_pickup_any_item": false,
    "can_pickup_to_hand_or_equipment": false,
    "pickup_same_items_as_in_hand": true
}
```

drowned

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.pickup_items": {
    "priority": 6,
    "max_dist": 3,
    "goal_radius": 2,
    "speed_multiplier": 1.0,
    "pickup_based_on_chance": true,
    "can_pickup_any_item": true,
    "excluded_items": [
        "minecraft:glow_ink_sac"
    ]
}
```

fox

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.pickup_items": {
    "priority": 11,
    "max_dist": 3,
    "goal_radius": 2,
    "speed_multiplier": 0.5
}
```

husk

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.pickup_items": {
    "priority": 6,
    "max_dist": 3,
    "goal_radius": 2,
    "speed_multiplier": 1.0,
    "pickup_based_on_chance": true,
    "can_pickup_any_item": true,
    "excluded_items": [
        "minecraft:glow_ink_sac"
    ]
}
```

piglin

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.pickup_items": {
    "priority": 6,
    "max_dist": 10,
    "goal_radius": 2,
    "speed_multiplier": 0.8,
    "pickup_based_on_chance": false,
    "can_pickup_any_item": false,
    "cooldown_after_being_attacked": 20.0
}
```

pillager

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.pickup_items": {
    "priority": 7,
    "max_dist": 3,
    "goal_radius": 2,
    "speed_multiplier": 1.0
}
```

skeleton

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.pickup_items": {
    "priority": 5,
    "max_dist": 3,
    "goal_radius": 2,
    "speed_multiplier": 1.0,
    "pickup_based_on_chance": true,
    "can_pickup_any_item": true
}
```

stray

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.pickup_items": {
    "priority": 5,
    "max_dist": 3,
    "goal_radius": 2,
    "speed_multiplier": 1.0,
    "pickup_based_on_chance": true,
    "can_pickup_any_item": true
}
```

</Spoiler>

## behavior.play

<Spoiler title="Show">

villager

<CodeHeader>#component_groups/baby</CodeHeader>

```json
"minecraft:behavior.play": {
    "priority": 8,
    "speed_multiplier": 0.32
}
```

villager_v2

<CodeHeader>#component_groups/play_schedule_villager</CodeHeader>

```json
"minecraft:behavior.play": {
    "priority": 8,
    "speed_multiplier": 0.6,
    "friend_types": [
        {
            "filters": {
                "all_of": [
                    {
                        "test": "is_family",
                        "subject": "other",
                        "value": "villager"
                    },
                    {
                        "test": "is_baby",
                        "subject": "other",
                        "operator": "==",
                        "value": true
                    }
                ]
            }
        }
    ]
}
```

</Spoiler>

## behavior.play_dead

<Spoiler title="Show">

axolotl

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.play_dead": {
    "priority": 0,
    "duration": 10,
    "force_below_health": 8,
    "random_start_chance": 0.33,
    "random_damage_range": [
        0,
        2
    ],
    "damage_sources": [
        "contact",
        "entity_attack",
        "entity_explosion",
        "magic",
        "projectile",
        "thorns",
        "wither"
    ],
    "apply_regeneration": true,
    "filters": {
        "test": "in_water",
        "operator": "==",
        "value": true
    }
}
```

</Spoiler>

## behavior.player_ride_tamed

<Spoiler title="Show">

donkey

<CodeHeader>#component_groups/minecraft:donkey_tamed</CodeHeader>

```json
"minecraft:behavior.player_ride_tamed": {}
```

horse

<CodeHeader>#component_groups/minecraft:horse_saddled</CodeHeader>

```json
"minecraft:behavior.player_ride_tamed": {}
```

mule

<CodeHeader>#component_groups/minecraft:mule_saddled</CodeHeader>

```json
"minecraft:behavior.player_ride_tamed": {}
```

skeleton_horse

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.player_ride_tamed": {}
```

zombie_horse

<CodeHeader>#component_groups/minecraft:horse_adult</CodeHeader>

```json
"minecraft:behavior.player_ride_tamed": {}
```

</Spoiler>

## behavior.raid_garden

<Spoiler title="Show">

fox

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.raid_garden": {
    "priority": 12,
    "blocks": [
        "minecraft:sweet_berry_bush",
        "minecraft:cave_vines_head_with_berries",
        "minecraft:cave_vines_body_with_berries"
    ],
    "speed_multiplier": 1.2,
    "search_range": 12,
    "search_height": 2,
    "goal_radius": 0.8,
    "max_to_eat": 0,
    "initial_eat_delay": 2
}
```

rabbit

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.raid_garden": {
    "priority": 5,
    "blocks": [
        "minecraft:carrots"
    ],
    "search_range": 16,
    "goal_radius": 0.8
}
```

</Spoiler>

## behavior.ram_attack

<Spoiler title="Show">

goat

<CodeHeader>#component_groups/ram_default</CodeHeader>

```json
"minecraft:behavior.ram_attack": {
    "priority": 5,
    "run_speed": 0.7,
    "ram_speed": 1.8,
    "min_ram_distance": 4,
    "ram_distance": 7,
    "knockback_force": 2.5,
    "knockback_height": 0.04,
    "pre_ram_sound": "pre_ram",
    "ram_impact_sound": "ram_impact",
    "cooldown_range": [
        30,
        300
    ],
    "on_start": [
        {
            "event": "start_event",
            "target": "self"
        }
    ]
}
```

<CodeHeader>#component_groups/ram_screamer</CodeHeader>

```json
"minecraft:behavior.ram_attack": {
    "priority": 5,
    "run_speed": 0.7,
    "ram_speed": 1.8,
    "min_ram_distance": 4,
    "ram_distance": 7,
    "knockback_force": 2.5,
    "knockback_height": 0.04,
    "pre_ram_sound": "pre_ram.screamer",
    "ram_impact_sound": "ram_impact.screamer",
    "cooldown_range": [
        5,
        15
    ],
    "on_start": [
        {
            "event": "start_event",
            "target": "self"
        }
    ]
}
```

</Spoiler>

## behavior.random_breach

<Spoiler title="Show">

dolphin

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.random_breach": {
    "priority": 6,
    "interval": 50,
    "xz_dist": 6,
    "cooldown_time": 2.0
}
```

</Spoiler>

## behavior.random_fly

<Spoiler title="Show">

parrot

<CodeHeader>#component_groups/minecraft:parrot_wild</CodeHeader>

```json
"minecraft:behavior.random_fly": {
    "priority": 2,
    "xz_dist": 15,
    "y_dist": 1,
    "y_offset": 0,
    "speed_multiplier": 1.0,
    "can_land_on_trees": true,
    "avoid_damage_blocks": true
}
```

</Spoiler>

## behavior.random_hover

<Spoiler title="Show">

allay

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.random_hover": {
    "priority": 9,
    "xz_dist": 8,
    "y_dist": 8,
    "y_offset": -1,
    "interval": 1,
    "hover_height": [
        1,
        4
    ]
}
```

bee

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.random_hover": {
    "priority": 12,
    "xz_dist": 8,
    "y_dist": 8,
    "y_offset": -1,
    "interval": 1,
    "hover_height": [
        1,
        4
    ]
}
```

</Spoiler>

## behavior.random_look_around

<Spoiler title="Show">

allay

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.random_look_around": {
    "priority": 8
}
```

blaze

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.random_look_around": {
    "priority": 5
}
```

cave_spider

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.random_look_around": {
    "priority": 7
}
```

chicken

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.random_look_around": {
    "priority": 8
}
```

cow

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.random_look_around": {
    "priority": 9
}
```

creeper

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.random_look_around": {
    "priority": 6
}
```

dolphin

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.random_look_around": {
    "priority": 7
}
```

donkey

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.random_look_around": {
    "priority": 8
}
```

</Spoiler>

## behavior.random_look_around_and_sit

<Spoiler title="Show">

fox

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.random_look_around_and_sit": {
    "priority": 12,
    "min_look_count": 2,
    "max_look_count": 5,
    "min_look_time": 80,
    "max_look_time": 100,
    "probability": 0.001
}
```

</Spoiler>

## behavior.random_sitting

<Spoiler title="Show">

panda

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.random_sitting": {
    "priority": 5,
    "start_chance": 0.01,
    "stop_chance": 0.3,
    "cooldown": 30,
    "min_sit_time": 10
}
```

<CodeHeader>#component_groups/minecraft:panda_lazy</CodeHeader>

```json
"minecraft:behavior.random_sitting": {
    "priority": 6,
    "start_chance": 0.02,
    "stop_chance": 0.2,
    "cooldown": 25,
    "min_sit_time": 15
}
```

</Spoiler>

## behavior.random_stroll

<Spoiler title="Show">

axolotl

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.random_stroll": {
    "priority": 9,
    "interval": 100
}
```

blaze

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.random_stroll": {
    "priority": 4,
    "speed_multiplier": 1.0
}
```

cat

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.random_stroll": {
    "priority": 8,
    "speed_multiplier": 0.8
}
```

cave_spider

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.random_stroll": {
    "priority": 6,
    "speed_multiplier": 0.8
}
```

chicken

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.random_stroll": {
    "priority": 6,
    "speed_multiplier": 1.0
}
```

cow

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.random_stroll": {
    "priority": 6,
    "speed_multiplier": 0.8
}
```

creeper

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.random_stroll": {
    "priority": 5,
    "speed_multiplier": 1
}
```

donkey

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.random_stroll": {
    "priority": 6,
    "speed_multiplier": 0.7
}
```

</Spoiler>

## behavior.random_swim

<Spoiler title="Show">

axolotl

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.random_swim": {
    "priority": 8,
    "interval": 0,
    "xz_dist": 30,
    "y_dist": 15
}
```

dolphin

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.random_swim": {
    "priority": 5,
    "interval": 0,
    "xz_dist": 20
}
```

elder_guardian

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.random_swim": {
    "priority": 7,
    "speed_multiplier": 0.5,
    "avoid_surface": false
}
```

cod

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.random_swim": {
    "priority": 3,
    "speed_multiplier": 1.0,
    "xz_dist": 16,
    "y_dist": 4,
    "interval": 0
}
```

guardian

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.random_swim": {
    "priority": 7,
    "speed_multiplier": 1.0,
    "interval": 80,
    "avoid_surface": false
}
```

pufferfish

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.random_swim": {
    "priority": 3,
    "speed_multiplier": 1.0,
    "xz_dist": 16,
    "y_dist": 4,
    "interval": 0
}
```

salmon

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.random_swim": {
    "speed_multiplier": 1.0,
    "priority": 3,
    "xz_dist": 16,
    "y_dist": 4,
    "interval": 0
}
```

tadpole

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.random_swim": {
    "priority": 2,
    "interval": 100
}
```

</Spoiler>

## behavior.ranged_attack

<Spoiler title="Show">

blaze

<CodeHeader>#component_groups/ranged_mode</CodeHeader>

```json
"minecraft:behavior.ranged_attack": {
    "priority": 3,
    "burst_shots": 3,
    "burst_interval": 0.3,
    "charge_charged_trigger": 0.0,
    "charge_shoot_trigger": 4.0,
    "attack_interval_min": 3.0,
    "attack_interval_max": 5.0,
    "attack_radius": 16.0
}
```

drowned

<CodeHeader>#component_groups/minecraft:ranged_mode</CodeHeader>

```json
"minecraft:behavior.ranged_attack": {
    "priority": 3,
    "attack_interval_min": 1.0,
    "attack_interval_max": 3.0,
    "attack_radius": 10.0,
    "swing": true
}
```

ghast

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.ranged_attack": {
    "priority": 1,
    "attack_radius": 64,
    "charge_shoot_trigger": 2,
    "charge_charged_trigger": 1
}
```

llama

<CodeHeader>#component_groups/minecraft:llama_angry</CodeHeader>

```json
"minecraft:behavior.ranged_attack": {
    "priority": 2,
    "attack_radius": 64,
    "charge_shoot_trigger": 2,
    "charge_charged_trigger": 1
}
```

<CodeHeader>#component_groups/minecraft:llama_angry_wolf</CodeHeader>

```json
"minecraft:behavior.ranged_attack": {
    "priority": 2,
    "attack_radius": 64,
    "charge_shoot_trigger": 2,
    "charge_charged_trigger": 1
}
```

piglin

<CodeHeader>#component_groups/ranged_unit</CodeHeader>

```json
"minecraft:behavior.ranged_attack": {
    "priority": 8,
    "attack_interval_min": 1,
    "attack_interval_max": 1,
    "attack_radius": 8,
    "attack_radius_min": 4,
    "speed_multiplier": 1.0,
    "target_in_sight_time": 0.1
}
```

pillager

<CodeHeader>#component_groups/minecraft:ranged_attack</CodeHeader>

```json
"minecraft:behavior.ranged_attack": {
    "priority": 4,
    "attack_interval_min": 1.0,
    "attack_interval_max": 1.0,
    "attack_radius": 8.0
}
```

shulker

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.ranged_attack": {
    "attack_interval_min": 1,
    "attack_interval_max": 3,
    "attack_radius": 15
}
```

</Spoiler>

## behavior.receive_love

<Spoiler title="Show">

villager

<CodeHeader>#component_groups/adult</CodeHeader>

```json
"minecraft:behavior.receive_love": {
    "priority": 7
}
```

villager_v2

<CodeHeader>#component_groups/make_and_receive_love</CodeHeader>

```json
"minecraft:behavior.receive_love": {
    "priority": 6
}
```

</Spoiler>

## behavior.restrict_open_door

<Spoiler title="Show">

villager

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.restrict_open_door": {
    "priority": 5
}
```

</Spoiler>

## behavior.rise_to_liquid_level

<Spoiler title="Show">

strider

<CodeHeader>#component_groups/minecraft:strider_pathing_behaviors</CodeHeader>

```json
"minecraft:behavior.rise_to_liquid_level": {
    "priority": 0,
    "liquid_y_offset": 0.25,
    "rise_delta": 0.01,
    "sink_delta": 0.01
}
```

</Spoiler>

## behavior.roar

<Spoiler title="Show">

warden

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.roar": {
    "priority": 2,
    "duration": 4.2
}
```

</Spoiler>

## behavior.roll

<Spoiler title="Show">

panda

<CodeHeader>#component_groups/minecraft:panda_baby</CodeHeader>

```json
"minecraft:behavior.roll": {
    "priority": 12,
    "probability": 0.0016
}
```

<CodeHeader>#component_groups/minecraft:panda_playful</CodeHeader>

```json
"minecraft:behavior.roll": {
    "priority": 12,
    "probability": 0.013
}
```

</Spoiler>

## behavior.run_around_like_crazy

<Spoiler title="Show">

donkey

<CodeHeader>#component_groups/minecraft:donkey_adult</CodeHeader>

```json
"minecraft:behavior.run_around_like_crazy": {
    "priority": 1,
    "speed_multiplier": 1.2
}
```

horse

<CodeHeader>#component_groups/minecraft:horse_adult</CodeHeader>

```json
"minecraft:behavior.run_around_like_crazy": {
    "priority": 1,
    "speed_multiplier": 1.2
}
```

llama

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.run_around_like_crazy": {
    "priority": 1,
    "speed_multiplier": 1.2
}
```

mule

<CodeHeader>#component_groups/minecraft:mule_adult</CodeHeader>

```json
"minecraft:behavior.run_around_like_crazy": {
    "priority": 1,
    "speed_multiplier": 1.2
}
```

trader_llama

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.run_around_like_crazy": {
    "priority": 1,
    "speed_multiplier": 1.2
}
```

</Spoiler>

## behavior.scared

<Spoiler title="Show">

panda

<CodeHeader>#component_groups/minecraft:panda_worried</CodeHeader>

```json
"minecraft:behavior.scared": {
    "priority": 1,
    "sound_interval": 20
}
```

</Spoiler>

## behavior.send_event

<Spoiler title="Show">

evocation_illager

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
                    {
                        "test": "is_family",
                        "subject": "other",
                        "value": "sheep"
                    },
                    {
                        "test": "is_color",
                        "subject": "other",
                        "value": "blue"
                    }
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

</Spoiler>

## behavior.share_items

<Spoiler title="Show">

villager

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.share_items": {
    "priority": 8,
    "max_dist": 3,
    "goal_radius": 2.0,
    "speed_multiplier": 0.5,
    "entity_types": [
        {
            "filters": {
                "test": "is_family",
                "subject": "other",
                "value": "villager"
            }
        }
    ]
}
```

villager_v2

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.share_items": {
    "priority": 10,
    "max_dist": 3,
    "goal_radius": 2.0,
    "speed_multiplier": 0.5,
    "entity_types": [
        {
            "filters": {
                "test": "is_family",
                "subject": "other",
                "value": "villager"
            }
        }
    ]
}
```

</Spoiler>

## behavior.silverfish_merge_with_stone

<Spoiler title="Show">

silverfish

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.silverfish_merge_with_stone": {
    "priority": 5
}
```

</Spoiler>

## behavior.silverfish_wake_up_friends

<Spoiler title="Show">

silverfish

<CodeHeader>#component_groups/minecraft:silverfish_angry</CodeHeader>

```json
"minecraft:behavior.silverfish_wake_up_friends": {
    "priority": 1
}
```

</Spoiler>

## behavior.skeleton_horse_trap

<Spoiler title="Show">

skeleton_horse

<CodeHeader>#component_groups/minecraft:skeleton_trap</CodeHeader>

```json
"minecraft:behavior.skeleton_horse_trap": {
    "within_radius": 10.0,
    "duration": 900.0,
    "priority": 2
}
```

</Spoiler>

## behavior.sleep

<Spoiler title="Show">

villager_v2

<CodeHeader>#component_groups/job_specific_goals</CodeHeader>

```json
"minecraft:behavior.sleep": {}
```

<CodeHeader>#component_groups/bed_schedule_villager</CodeHeader>

```json
"minecraft:behavior.sleep": {
    "priority": 3,
    "goal_radius": 1.5,
    "speed_multiplier": 0.6,
    "sleep_collider_height": 0.3,
    "sleep_collider_width": 1.0,
    "sleep_y_offset": 0.6,
    "timeout_cooldown": 10.0
}
```

</Spoiler>

## behavior.slime_attack

<Spoiler title="Show">

magma_cube

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.slime_attack": {
    "priority": 3
}
```

slime

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.slime_attack": {
    "priority": 3
}
```

</Spoiler>

## behavior.slime_float

<Spoiler title="Show">

magma_cube

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.slime_float": {
    "priority": 1,
    "jump_chance_percentage": 0.8,
    "speed_multiplier": 1.2
}
```

slime

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.slime_float": {
    "priority": 1,
    "jump_chance_percentage": 0.8,
    "speed_multiplier": 1.2
}
```

</Spoiler>

## behavior.slime_keep_on_jumping

<Spoiler title="Show">

magma_cube

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.slime_keep_on_jumping": {
    "priority": 5,
    "speed_multiplier": 1.0
}
```

slime

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.slime_keep_on_jumping": {
    "priority": 5,
    "speed_multiplier": 1.0
}
```

</Spoiler>

## behavior.slime_random_direction

<Spoiler title="Show">

magma_cube

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.slime_random_direction": {
    "priority": 4,
    "add_random_time_range": 3,
    "turn_range": 360,
    "min_change_direction_time": 2.0
}
```

slime

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.slime_random_direction": {
    "priority": 4,
    "add_random_time_range": 3,
    "turn_range": 360,
    "min_change_direction_time": 2.0
}
```

</Spoiler>

## behavior.snacking

<Spoiler title="Show">

panda

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.snacking": {
    "priority": 2,
    "snacking_cooldown": 22.5,
    "snacking_cooldown_min": 20,
    "snacking_stop_chance": 0.001334,
    "items": [
        "bamboo",
        "cake"
    ]
}
```

<CodeHeader>#component_groups/minecraft:panda_lazy</CodeHeader>

```json
"minecraft:behavior.snacking": {
    "priority": 3,
    "snacking_cooldown": 17.5,
    "snacking_cooldown_min": 10,
    "snacking_stop_chance": 0.0011,
    "items": [
        "bamboo",
        "cake"
    ]
}
```

</Spoiler>

## behavior.sneeze

<Spoiler title="Show">

panda

<CodeHeader>#component_groups/minecraft:panda_baby</CodeHeader>

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

<CodeHeader>#component_groups/minecraft:panda_sneezing</CodeHeader>

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

## behavior.sniff

<Spoiler title="Show">

warden

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.sniff": {
    "priority": 6,
    "duration": 4.16,
    "sniffing_radius": 24.0,
    "suspicion_radius_horizontal": 6.0,
    "suspicion_radius_vertical": 20.0,
    "cooldown_range": [
        5.0,
        10.0
    ]
}
```

</Spoiler>

## behavior.sonic_boom

<Spoiler title="Show">

warden

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.sonic_boom": {
    "priority": 3,
    "duration": 3.0,
    "speed_multiplier": 1.2,
    "attack_damage": 10,
    "attack_range_horizontal": 15,
    "attack_range_vertical": 20,
    "attack_cooldown": 2,
    "knockback_vertical_strength": 0.5,
    "knockback_horizontal_strength": 2.5,
    "knockback_height_cap": 0.5,
    "duration_until_attack_sound": 1.7,
    "charge_sound": "sonic_charge",
    "attack_sound": "sonic_boom"
}
```

</Spoiler>

## behavior.squid_dive

<Spoiler title="Show">

glow_squid

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.squid_dive": {
    "priority": 2
}
```

squid

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.squid_dive": {
    "priority": 2
}
```

</Spoiler>

## behavior.squid_flee

<Spoiler title="Show">

glow_squid

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.squid_flee": {
    "priority": 2
}
```

squid

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.squid_flee": {
    "priority": 2
}
```

</Spoiler>

## behavior.squid_idle

<Spoiler title="Show">

glow_squid

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.squid_idle": {
    "priority": 2
}
```

squid

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.squid_idle": {
    "priority": 2
}
```

</Spoiler>

## behavior.squid_move_away_from_ground

<Spoiler title="Show">

glow_squid

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.squid_move_away_from_ground": {
    "priority": 1
}
```

squid

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.squid_move_away_from_ground": {
    "priority": 1
}
```

</Spoiler>

## behavior.squid_out_of_water

<Spoiler title="Show">

glow_squid

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.squid_out_of_water": {
    "priority": 2
}
```

squid

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.squid_out_of_water": {
    "priority": 2
}
```

</Spoiler>

## behavior.stalk_and_pounce_on_target

<Spoiler title="Show">

fox

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

## behavior.stay_near_noteblock

<Spoiler title="Show">

allay

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.stay_near_noteblock": {
    "priority": 5,
    "speed": 8,
    "start_distance": 16,
    "stop_distance": 4
}
```

</Spoiler>

## behavior.stay_while_sitting

<Spoiler title="Show">

cat

<CodeHeader>#component_groups/minecraft:cat_tame</CodeHeader>

```json
"minecraft:behavior.stay_while_sitting": {
    "priority": 3
}
```

ocelot

<CodeHeader>#component_groups/minecraft:ocelot_tame</CodeHeader>

```json
"minecraft:behavior.stay_while_sitting": {
    "priority": 3
}
```

parrot

<CodeHeader>#component_groups/minecraft:parrot_tame</CodeHeader>

```json
"minecraft:behavior.stay_while_sitting": {
    "priority": 1
}
```

wolf

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.stay_while_sitting": {
    "priority": 3
}
```

</Spoiler>

## behavior.stomp_attack

<Spoiler title="Show">

polar_bear

<CodeHeader>#component_groups/minecraft:adult_hostile</CodeHeader>

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

<Spoiler title="Show">

drowned

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

husk

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

zombie

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

zombie_pigman

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

zombie_villager

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

zombie_villager_v2

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

<Spoiler title="Show">

fox

<CodeHeader>#component_groups/minecraft:fox_night</CodeHeader>

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

<Spoiler title="Show">

evocation_illager

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

<Spoiler title="Show">

creeper

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

<Spoiler title="Show">

axolotl

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.swim_idle": {
    "priority": 7,
    "idle_time": 5.0,
    "success_rate": 0.05
}
```

cod

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.swim_idle": {
    "priority": 5,
    "idle_time": 5.0,
    "success_rate": 0.1
}
```

salmon

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.swim_idle": {
    "priority": 5,
    "idle_time": 5.0,
    "success_rate": 0.1
}
```

tropicalfish

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

<Spoiler title="Show">

cod

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

pufferfish

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

salmon

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

tropicalfish

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

<Spoiler title="Show">

dolphin

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

<Spoiler title="Show">

phantom

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

<Spoiler title="Show">

villager

<CodeHeader>#component_groups/baby</CodeHeader>

```json
"minecraft:behavior.take_flower": {
    "priority": 7,
    "filters": {
        "all_of": [
            {
                "test": "is_daytime",
                "value": true
            }
        ]
    }
}
```

villager_v2

<CodeHeader>#component_groups/baby</CodeHeader>

```json
"minecraft:behavior.take_flower": {
    "priority": 9,
    "filters": {
        "all_of": [
            {
                "test": "is_daytime",
                "value": true
            }
        ]
    }
}
```

</Spoiler>

## behavior.target_when_pushed

<Spoiler title="Show">

iron_golem

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

<Spoiler title="Show">

axolotl

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

bee

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
        "minecraft:azalea_leaves_flowered",
        "minecraft:mangrove_propagule"
    ]
}
```

cat

<CodeHeader>#component_groups/minecraft:cat_wild</CodeHeader>

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

<CodeHeader>#component_groups/minecraft:cat_tame</CodeHeader>

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

chicken

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

cow

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

donkey

<CodeHeader>#component_groups/minecraft:donkey_tamed</CodeHeader>

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

fox

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

</Spoiler>

## behavior.trade_interest

<Spoiler title="Show">

villager_v2

<CodeHeader>#component_groups/trade_components</CodeHeader>

```json
"minecraft:behavior.trade_interest": {}
```

<CodeHeader>#component_groups/farmer</CodeHeader>

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

<CodeHeader>#component_groups/fisherman</CodeHeader>

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

wandering_trader

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

<Spoiler title="Show">

villager

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.trade_with_player": {
    "priority": 1,
    "filters": {
        "all_of": [
            {
                "all_of": [
                    {
                        "test": "in_water",
                        "value": false
                    }
                ]
            },
            {
                "any_of": [
                    {
                        "test": "on_ground",
                        "value": true
                    },
                    {
                        "test": "is_sleeping",
                        "value": true
                    }
                ]
            }
        ]
    }
}
```

villager_v2

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.trade_with_player": {
    "priority": 2,
    "filters": {
        "all_of": [
            {
                "all_of": [
                    {
                        "test": "in_water",
                        "value": false
                    }
                ]
            },
            {
                "any_of": [
                    {
                        "test": "on_ground",
                        "value": true
                    },
                    {
                        "test": "is_sleeping",
                        "value": true
                    }
                ]
            }
        ]
    }
}
```

wandering_trader

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.trade_with_player": {
    "priority": 1,
    "filters": {
        "all_of": [
            {
                "all_of": [
                    {
                        "test": "in_water",
                        "value": false
                    }
                ]
            },
            {
                "any_of": [
                    {
                        "test": "on_ground",
                        "value": true
                    },
                    {
                        "test": "is_sleeping",
                        "value": true
                    }
                ]
            }
        ]
    }
}
```

</Spoiler>

## behavior.wither_random_attack_pos_goal

<Spoiler title="Show">

wither

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.wither_random_attack_pos_goal": {
    "priority": 3
}
```

</Spoiler>

## behavior.wither_target_highest_damage

<Spoiler title="Show">

wither

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.wither_target_highest_damage": {
    "priority": 1
}
```

</Spoiler>

## behavior.work

<Spoiler title="Show">

villager_v2

<CodeHeader>#component_groups/job_specific_goals</CodeHeader>

```json
"minecraft:behavior.work": {}
```

<CodeHeader>#component_groups/work_schedule_villager</CodeHeader>

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

<CodeHeader>#component_groups/work_schedule_fisher</CodeHeader>

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

## behavior.work_composter

<Spoiler title="Show">

villager_v2

<CodeHeader>#component_groups/job_specific_goals</CodeHeader>

```json
"minecraft:behavior.work_composter": {}
```

<CodeHeader>#component_groups/work_schedule_farmer</CodeHeader>

```json
"minecraft:behavior.work_composter": {
    "priority": 9,
    "active_time": 250,
    "speed_multiplier": 0.5,
    "goal_cooldown": 200,
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

<Spoiler title="Show">

endermite

<CodeHeader></CodeHeader>

```json
"minecraft:block_climber": {}
```

fox

<CodeHeader></CodeHeader>

```json
"minecraft:block_climber": {}
```

player

<CodeHeader></CodeHeader>

```json
"minecraft:block_climber": {}
```

rabbit

<CodeHeader></CodeHeader>

```json
"minecraft:block_climber": {}
```

silverfish

<CodeHeader></CodeHeader>

```json
"minecraft:block_climber": {}
```

</Spoiler>

## block_sensor

<Spoiler title="Show">

bee

<CodeHeader></CodeHeader>

```json
"minecraft:block_sensor": {
    "sensor_radius": 16,
    "sources": [
        {
            "test": "has_silk_touch",
            "subject": "other",
            "value": false
        }
    ],
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

piglin

<CodeHeader>#component_groups/piglin_adult</CodeHeader>

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

<Spoiler title="Show">

pig

<CodeHeader>#component_groups/minecraft:pig_saddled</CodeHeader>

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

strider

<CodeHeader>#component_groups/minecraft:strider_saddled</CodeHeader>

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

<Spoiler title="Show">

ender_dragon

<CodeHeader></CodeHeader>

```json
"minecraft:boss": {
    "should_darken_sky": false,
    "hud_range": 125
}
```

wither

<CodeHeader></CodeHeader>

```json
"minecraft:boss": {
    "should_darken_sky": true,
    "hud_range": 55
}
```

</Spoiler>

## break_blocks

<Spoiler title="Show">

ravager

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
        "yellow_flower",
        "azalea",
        "flowering_azalea",
        "azalea_leaves",
        "azalea_leaves_flowered",
        "cave_vines",
        "cave_vines_body_with_berries",
        "cave_vines_head_with_berries",
        "small_dripleaf_block",
        "big_dripleaf",
        "spore_blossom",
        "hanging_roots",
        "mangrove_leaves"
    ]
}
```

</Spoiler>

## breathable

<Spoiler title="Show">

allay

<CodeHeader></CodeHeader>

```json
"minecraft:breathable": {
    "totalSupply": 15,
    "suffocateTime": 0
}
```

axolotl

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

bat

<CodeHeader></CodeHeader>

```json
"minecraft:breathable": {
    "total_supply": 15,
    "suffocate_time": 0
}
```

bee

<CodeHeader></CodeHeader>

```json
"minecraft:breathable": {
    "totalSupply": 15,
    "suffocateTime": 0
}
```

cat

<CodeHeader></CodeHeader>

```json
"minecraft:breathable": {
    "total_supply": 15,
    "suffocate_time": 0
}
```

cave_spider

<CodeHeader></CodeHeader>

```json
"minecraft:breathable": {
    "total_supply": 15,
    "suffocate_time": 0
}
```

chicken

<CodeHeader></CodeHeader>

```json
"minecraft:breathable": {
    "total_supply": 15,
    "suffocate_time": 0
}
```

cow

<CodeHeader></CodeHeader>

```json
"minecraft:breathable": {
    "total_supply": 15,
    "suffocate_time": 0
}
```

</Spoiler>

## breedable

<Spoiler title="Show">

axolotl

<CodeHeader>#component_groups/axolotl_adult</CodeHeader>

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

bee

<CodeHeader>#component_groups/bee_adult</CodeHeader>

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
        "minecraft:azalea_leaves_flowered",
        "minecraft:mangrove_propagule"
    ]
}
```

cat

<CodeHeader>#component_groups/minecraft:cat_adult</CodeHeader>

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

chicken

<CodeHeader>#component_groups/minecraft:chicken_adult</CodeHeader>

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

cow

<CodeHeader>#component_groups/minecraft:cow_adult</CodeHeader>

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

donkey

<CodeHeader>#component_groups/minecraft:donkey_tamed</CodeHeader>

```json
"minecraft:breedable": {
    "parent_centric_attribute_blending": [
        "minecraft:health"
    ],
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

fox

<CodeHeader>#component_groups/minecraft:fox_adult</CodeHeader>

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

frog

<CodeHeader></CodeHeader>

```json
"minecraft:breedable": {
    "require_tame": false,
    "causes_pregnancy": true,
    "breeds_with": {
        "mate_type": "minecraft:frog",
        "baby_type": "minecraft:tadpole",
        "breed_event": {
            "event": "become_pregnant"
        }
    },
    "breed_items": [
        "slime_ball"
    ]
}
```

</Spoiler>

## bribeable

<Spoiler title="Show">

dolphin

<CodeHeader>#component_groups/dolphin_adult</CodeHeader>

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

<Spoiler title="Show">

boat

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

<CodeHeader>#component_groups/minecraft:floating</CodeHeader>

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

<CodeHeader>#component_groups/minecraft:above_bubble_column_down</CodeHeader>

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

chest_boat

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

<CodeHeader>#component_groups/minecraft:floating</CodeHeader>

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

<CodeHeader>#component_groups/minecraft:above_bubble_column_down</CodeHeader>

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

xp_orb

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

<Spoiler title="Show">

drowned

<CodeHeader></CodeHeader>

```json
"minecraft:burns_in_daylight": {}
```

magma_cube

<CodeHeader></CodeHeader>

```json
"minecraft:burns_in_daylight": false
```

phantom

<CodeHeader></CodeHeader>

```json
"minecraft:burns_in_daylight": {}
```

skeleton

<CodeHeader></CodeHeader>

```json
"minecraft:burns_in_daylight": {}
```

stray

<CodeHeader></CodeHeader>

```json
"minecraft:burns_in_daylight": {}
```

zombie

<CodeHeader></CodeHeader>

```json
"minecraft:burns_in_daylight": {}
```

zombie_villager

<CodeHeader></CodeHeader>

```json
"minecraft:burns_in_daylight": {}
```

zombie_villager_v2

<CodeHeader></CodeHeader>

```json
"minecraft:burns_in_daylight": {}
```

</Spoiler>

## can_climb

<Spoiler title="Show">

blaze

<CodeHeader></CodeHeader>

```json
"minecraft:can_climb": {}
```

cat

<CodeHeader></CodeHeader>

```json
"minecraft:can_climb": {}
```

cave_spider

<CodeHeader></CodeHeader>

```json
"minecraft:can_climb": {}
```

chicken

<CodeHeader></CodeHeader>

```json
"minecraft:can_climb": {}
```

cow

<CodeHeader></CodeHeader>

```json
"minecraft:can_climb": {}
```

creeper

<CodeHeader></CodeHeader>

```json
"minecraft:can_climb": {}
```

dolphin

<CodeHeader></CodeHeader>

```json
"minecraft:can_climb": {}
```

drowned

<CodeHeader></CodeHeader>

```json
"minecraft:can_climb": {}
```

</Spoiler>

## can_fly

<Spoiler title="Show">

allay

<CodeHeader></CodeHeader>

```json
"minecraft:can_fly": {}
```

bat

<CodeHeader></CodeHeader>

```json
"minecraft:can_fly": {}
```

bee

<CodeHeader></CodeHeader>

```json
"minecraft:can_fly": {}
```

ghast

<CodeHeader></CodeHeader>

```json
"minecraft:can_fly": {}
```

parrot

<CodeHeader></CodeHeader>

```json
"minecraft:can_fly": {}
```

wither

<CodeHeader></CodeHeader>

```json
"minecraft:can_fly": {}
```

</Spoiler>

## can_power_jump

<Spoiler title="Show">

donkey

<CodeHeader>#component_groups/minecraft:donkey_saddled</CodeHeader>

```json
"minecraft:can_power_jump": {}
```

horse

<CodeHeader>#component_groups/minecraft:horse_saddled</CodeHeader>

```json
"minecraft:can_power_jump": {}
```

mule

<CodeHeader>#component_groups/minecraft:mule_saddled</CodeHeader>

```json
"minecraft:can_power_jump": {}
```

skeleton_horse

<CodeHeader></CodeHeader>

```json
"minecraft:can_power_jump": {}
```

</Spoiler>

## celebrate_hunt

<Spoiler title="Show">

piglin

<CodeHeader>#component_groups/piglin_adult</CodeHeader>

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

<Spoiler title="Show">

allay

<CodeHeader></CodeHeader>

```json
"minecraft:collision_box": {
    "width": 0.35,
    "height": 0.6
}
```

armor_stand

<CodeHeader></CodeHeader>

```json
"minecraft:collision_box": {
    "width": 0.5,
    "height": 1.975
}
```

arrow

<CodeHeader></CodeHeader>

```json
"minecraft:collision_box": {
    "width": 0.25,
    "height": 0.25
}
```

axolotl

<CodeHeader></CodeHeader>

```json
"minecraft:collision_box": {
    "width": 0.75,
    "height": 0.42
}
```

bat

<CodeHeader></CodeHeader>

```json
"minecraft:collision_box": {
    "width": 0.5,
    "height": 0.9
}
```

bee

<CodeHeader></CodeHeader>

```json
"minecraft:collision_box": {
    "width": 0.55,
    "height": 0.5
}
```

blaze

<CodeHeader></CodeHeader>

```json
"minecraft:collision_box": {
    "width": 0.5,
    "height": 1.8
}
```

boat

<CodeHeader></CodeHeader>

```json
"minecraft:collision_box": {
    "width": 1.4,
    "height": 0.455
}
```

</Spoiler>

## color

<Spoiler title="Show">

cat

<CodeHeader>#component_groups/minecraft:cat_tame</CodeHeader>

```json
"minecraft:color": {
    "value": 14
}
```

sheep

<CodeHeader>#component_groups/minecraft:sheep_white</CodeHeader>

```json
"minecraft:color": {
    "value": 0
}
```

<CodeHeader>#component_groups/minecraft:sheep_brown</CodeHeader>

```json
"minecraft:color": {
    "value": 12
}
```

<CodeHeader>#component_groups/minecraft:sheep_black</CodeHeader>

```json
"minecraft:color": {
    "value": 15
}
```

tropicalfish

<CodeHeader>#component_groups/minecraft:tropicalfish_base_white</CodeHeader>

```json
"minecraft:color": {
    "value": 0
}
```

<CodeHeader>#component_groups/minecraft:tropicalfish_base_orange</CodeHeader>

```json
"minecraft:color": {
    "value": 1
}
```

<CodeHeader>#component_groups/minecraft:tropicalfish_base_magenta</CodeHeader>

```json
"minecraft:color": {
    "value": 2
}
```

wolf

<CodeHeader>#component_groups/minecraft:wolf_tame</CodeHeader>

```json
"minecraft:color": {
    "value": 14
}
```

</Spoiler>

## color2

<Spoiler title="Show">

tropicalfish

<CodeHeader>#component_groups/minecraft:tropicalfish_pattern_white</CodeHeader>

```json
"minecraft:color2": {
    "value": 0
}
```

<CodeHeader>#component_groups/minecraft:tropicalfish_pattern_orange</CodeHeader>

```json
"minecraft:color2": {
    "value": 1
}
```

<CodeHeader>#component_groups/minecraft:tropicalfish_pattern_magenta</CodeHeader>

```json
"minecraft:color2": {
    "value": 2
}
```

</Spoiler>

## combat_regeneration

<Spoiler title="Show">

axolotl

<CodeHeader></CodeHeader>

```json
"minecraft:combat_regeneration": {}
```

</Spoiler>

## conditional_bandwidth_optimization

<Spoiler title="Show">

allay

<CodeHeader></CodeHeader>

```json
"minecraft:conditional_bandwidth_optimization": {}
```

area_effect_cloud

<CodeHeader></CodeHeader>

```json
"minecraft:conditional_bandwidth_optimization": {}
```

armor_stand

<CodeHeader></CodeHeader>

```json
"minecraft:conditional_bandwidth_optimization": {}
```

arrow

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

bat

<CodeHeader></CodeHeader>

```json
"minecraft:conditional_bandwidth_optimization": {}
```

bee

<CodeHeader></CodeHeader>

```json
"minecraft:conditional_bandwidth_optimization": {}
```

blaze

<CodeHeader></CodeHeader>

```json
"minecraft:conditional_bandwidth_optimization": {}
```

boat

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

</Spoiler>

## custom_hit_test

<Spoiler title="Show">

hoglin

<CodeHeader>#component_groups/minecraft:hoglin_baby</CodeHeader>

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

<CodeHeader>#component_groups/minecraft:hoglin_adult</CodeHeader>

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

zoglin

<CodeHeader>#component_groups/zoglin_baby</CodeHeader>

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

<CodeHeader>#component_groups/zoglin_adult</CodeHeader>

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

<Spoiler title="Show">

axolotl

<CodeHeader>#component_groups/axolotl_dried</CodeHeader>

```json
"minecraft:damage_over_time": {
    "damage_per_hurt": 1,
    "time_between_hurt": 0
}
```

dolphin

<CodeHeader>#component_groups/dolphin_dried</CodeHeader>

```json
"minecraft:damage_over_time": {
    "damage_per_hurt": 1,
    "time_between_hurt": 0
}
```

</Spoiler>

## damage_sensor

<Spoiler title="Show">

allay

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
                            "value": "player"
                        },
                        {
                            "test": "is_owner",
                            "subject": "other",
                            "value": true
                        }
                    ]
                }
            },
            "deals_damage": false
        }
    ]
}
```

axolotl

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

bat

<CodeHeader></CodeHeader>

```json
"minecraft:damage_sensor": {
    "triggers": {
        "cause": "fall",
        "deals_damage": false
    }
}
```

bee

<CodeHeader></CodeHeader>

```json
"minecraft:damage_sensor": {
    "triggers": {
        "cause": "fall",
        "deals_damage": false
    }
}
```

blaze

<CodeHeader></CodeHeader>

```json
"minecraft:damage_sensor": {
    "triggers": {
        "cause": "fall",
        "deals_damage": false
    }
}
```

cat

<CodeHeader></CodeHeader>

```json
"minecraft:damage_sensor": {
    "triggers": {
        "cause": "fall",
        "deals_damage": false
    }
}
```

chicken

<CodeHeader></CodeHeader>

```json
"minecraft:damage_sensor": {
    "triggers": {
        "cause": "fall",
        "deals_damage": false
    }
}
```

creeper

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

</Spoiler>

## despawn

<Spoiler title="Show">

axolotl

<CodeHeader></CodeHeader>

```json
"minecraft:despawn": {
    "despawn_from_distance": {}
}
```

bat

<CodeHeader></CodeHeader>

```json
"minecraft:despawn": {
    "despawn_from_distance": {}
}
```

blaze

<CodeHeader></CodeHeader>

```json
"minecraft:despawn": {
    "despawn_from_distance": {}
}
```

cat

<CodeHeader></CodeHeader>

```json
"minecraft:despawn": {
    "despawn_from_distance": {}
}
```

cave_spider

<CodeHeader></CodeHeader>

```json
"minecraft:despawn": {
    "despawn_from_distance": {}
}
```

chicken

<CodeHeader></CodeHeader>

```json
"minecraft:despawn": {
    "despawn_from_distance": {}
}
```

cow

<CodeHeader></CodeHeader>

```json
"minecraft:despawn": {
    "despawn_from_distance": {}
}
```

creeper

<CodeHeader></CodeHeader>

```json
"minecraft:despawn": {
    "despawn_from_distance": {}
}
```

</Spoiler>

## drying_out_timer

<Spoiler title="Show">

axolotl

<CodeHeader>#component_groups/axolotl_on_land</CodeHeader>

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

dolphin

<CodeHeader>#component_groups/dolphin_on_land</CodeHeader>

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

<Spoiler title="Show">

cat

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

evocation_illager

<CodeHeader>#component_groups/minecraft:raid_configuration</CodeHeader>

```json
"minecraft:dweller": {
    "dwelling_type": "village",
    "dweller_role": "hostile",
    "update_interval_base": 60,
    "update_interval_variant": 40,
    "can_find_poi": false,
    "can_migrate": true,
    "first_founding_reward": 0
}
```

iron_golem

<CodeHeader>#component_groups/minecraft:village_created</CodeHeader>

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

pillager

<CodeHeader>#component_groups/minecraft:raid_configuration</CodeHeader>

```json
"minecraft:dweller": {
    "dwelling_type": "village",
    "dweller_role": "hostile",
    "update_interval_base": 60,
    "update_interval_variant": 40,
    "can_find_poi": false,
    "can_migrate": true,
    "first_founding_reward": 0
}
```

ravager

<CodeHeader>#component_groups/minecraft:raid_configuration</CodeHeader>

```json
"minecraft:dweller": {
    "dwelling_type": "village",
    "dweller_role": "hostile",
    "update_interval_base": 60,
    "update_interval_variant": 40,
    "can_find_poi": false,
    "can_migrate": true,
    "first_founding_reward": 0
}
```

villager_v2

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

<CodeHeader>#component_groups/farmer</CodeHeader>

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

<CodeHeader>#component_groups/fisherman</CodeHeader>

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

</Spoiler>

## economy_trade_table

<Spoiler title="Show">

villager_v2

<CodeHeader>#component_groups/trade_components</CodeHeader>

```json
"minecraft:economy_trade_table": {}
```

<CodeHeader>#component_groups/farmer</CodeHeader>

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

<CodeHeader>#component_groups/fisherman</CodeHeader>

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

wandering_trader

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

<Spoiler title="Show">

parrot

<CodeHeader>#component_groups/minecraft:parrot_not_riding_player</CodeHeader>

```json
"minecraft:entity_sensor": {
    "sensor_range": 2.0,
    "relative_range": false,
    "event_filters": {
        "all_of": [
            {
                "test": "is_riding",
                "subject": "self",
                "operator": "equals",
                "value": true
            },
            {
                "test": "has_component",
                "subject": "self",
                "operator": "equals",
                "value": "minecraft:behavior.look_at_player"
            }
        ]
    },
    "event": "minecraft:on_riding_player"
}
```

<CodeHeader>#component_groups/minecraft:parrot_riding_player</CodeHeader>

```json
"minecraft:entity_sensor": {
    "sensor_range": 2.0,
    "relative_range": false,
    "event_filters": {
        "all_of": [
            {
                "test": "is_riding",
                "subject": "self",
                "operator": "equals",
                "value": false
            },
            {
                "test": "has_component",
                "subject": "self",
                "operator": "not",
                "value": "minecraft:behavior.look_at_player"
            }
        ]
    },
    "event": "minecraft:on_not_riding_player"
}
```

pufferfish

<CodeHeader>#component_groups/minecraft:normal_puff</CodeHeader>

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

<CodeHeader>#component_groups/minecraft:half_puff_secondary</CodeHeader>

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

<CodeHeader>#component_groups/minecraft:deflate_sensor</CodeHeader>

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

<Spoiler title="Show">

axolotl

<CodeHeader>#component_groups/axolotl_in_water</CodeHeader>

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

<CodeHeader>#component_groups/axolotl_on_land_in_rain</CodeHeader>

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

bee

<CodeHeader>#component_groups/shelter_detection</CodeHeader>

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
                        "test": "bool_property",
                        "domain": "minecraft:has_nectar",
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

<CodeHeader>#component_groups/abort_shelter_detection</CodeHeader>

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

cave_spider

<CodeHeader>#component_groups/minecraft:spider_neutral</CodeHeader>

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

<CodeHeader>#component_groups/minecraft:spider_hostile</CodeHeader>

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

dolphin

<CodeHeader>#component_groups/dolphin_swimming_navigation</CodeHeader>

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

<CodeHeader>#component_groups/dolphin_on_land_in_rain</CodeHeader>

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

</Spoiler>

## equip_item

<Spoiler title="Show">

drowned

<CodeHeader></CodeHeader>

```json
"minecraft:equip_item": {}
```

fox

<CodeHeader></CodeHeader>

```json
"minecraft:equip_item": {}
```

husk

<CodeHeader></CodeHeader>

```json
"minecraft:equip_item": {}
```

piglin

<CodeHeader></CodeHeader>

```json
"minecraft:equip_item": {}
```

pillager

<CodeHeader></CodeHeader>

```json
"minecraft:equip_item": {}
```

skeleton

<CodeHeader></CodeHeader>

```json
"minecraft:equip_item": {}
```

stray

<CodeHeader></CodeHeader>

```json
"minecraft:equip_item": {}
```

wither_skeleton

<CodeHeader></CodeHeader>

```json
"minecraft:equip_item": {}
```

</Spoiler>

## equipment

<Spoiler title="Show">

drowned

<CodeHeader>#component_groups/minecraft:ranged_equipment</CodeHeader>

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

<CodeHeader>#component_groups/minecraft:melee_equipment</CodeHeader>

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

fox

<CodeHeader>#component_groups/minecraft:fox_with_item</CodeHeader>

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

husk

<CodeHeader></CodeHeader>

```json
"minecraft:equipment": {
    "table": "loot_tables/entities/zombie_equipment.json"
}
```

piglin

<CodeHeader>#component_groups/ranged_unit</CodeHeader>

```json
"minecraft:equipment": {
    "table": "loot_tables/entities/piglin_gear_ranged.json"
}
```

<CodeHeader>#component_groups/melee_unit</CodeHeader>

```json
"minecraft:equipment": {
    "table": "loot_tables/entities/piglin_gear_melee.json"
}
```

piglin_brute

<CodeHeader>#component_groups/melee_unit</CodeHeader>

```json
"minecraft:equipment": {
    "table": "loot_tables/entities/piglin_brute_gear.json"
}
```

pillager

<CodeHeader></CodeHeader>

```json
"minecraft:equipment": {
    "table": "loot_tables/entities/pillager_gear.json"
}
```

</Spoiler>

## equippable

<Spoiler title="Show">

donkey

<CodeHeader>#component_groups/minecraft:donkey_tamed</CodeHeader>

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

horse

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

llama

<CodeHeader>#component_groups/minecraft:llama_tamed</CodeHeader>

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

mule

<CodeHeader>#component_groups/minecraft:mule_tamed</CodeHeader>

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

trader_llama

<CodeHeader>#component_groups/minecraft:llama_tamed</CodeHeader>

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

</Spoiler>

## exhaustion_values

<Spoiler title="Show">

player

<CodeHeader></CodeHeader>

```json
"minecraft:exhaustion_values": {
    "heal": 6,
    "jump": 0.05,
    "sprint_jump": 0.2,
    "mine": 0.005,
    "attack": 0.1,
    "damage": 0.1,
    "walk": 0.0,
    "sprint": 0.1,
    "swim": 0.01
}
```

</Spoiler>

## experience_reward

<Spoiler title="Show">

axolotl

<CodeHeader>#component_groups/axolotl_adult</CodeHeader>

```json
"minecraft:experience_reward": {
    "on_bred": "Math.Random(1,7)",
    "on_death": "query.last_hit_by_player ? Math.Random(1,3) : 0"
}
```

bee

<CodeHeader>#component_groups/bee_adult</CodeHeader>

```json
"minecraft:experience_reward": {
    "on_bred": "Math.Random(1,7)",
    "on_death": "query.last_hit_by_player ? Math.Random(1,3) : 0"
}
```

blaze

<CodeHeader></CodeHeader>

```json
"minecraft:experience_reward": {
    "on_death": "query.last_hit_by_player ? 10 : 0"
}
```

cat

<CodeHeader>#component_groups/minecraft:cat_adult</CodeHeader>

```json
"minecraft:experience_reward": {
    "on_bred": "Math.Random(1,7)",
    "on_death": "query.last_hit_by_player ? Math.Random(1,3) : 0"
}
```

cave_spider

<CodeHeader></CodeHeader>

```json
"minecraft:experience_reward": {
    "on_death": "query.last_hit_by_player ? 5 : 0"
}
```

chicken

<CodeHeader>#component_groups/minecraft:chicken_adult</CodeHeader>

```json
"minecraft:experience_reward": {
    "on_bred": "Math.Random(1,7)",
    "on_death": "query.last_hit_by_player ? Math.Random(1,3) : 0"
}
```

cow

<CodeHeader>#component_groups/minecraft:cow_adult</CodeHeader>

```json
"minecraft:experience_reward": {
    "on_bred": "Math.Random(1,7)",
    "on_death": "query.last_hit_by_player ? Math.Random(1,3) : 0"
}
```

creeper

<CodeHeader></CodeHeader>

```json
"minecraft:experience_reward": {
    "on_death": "query.last_hit_by_player ? 5 : 0"
}
```

</Spoiler>

## explode

<Spoiler title="Show">

creeper

<CodeHeader>#component_groups/minecraft:exploding</CodeHeader>

```json
"minecraft:explode": {
    "fuse_length": 1.5,
    "fuse_lit": true,
    "power": 3,
    "causes_fire": false,
    "destroy_affected_by_griefing": true
}
```

<CodeHeader>#component_groups/minecraft:charged_exploding</CodeHeader>

```json
"minecraft:explode": {
    "fuse_length": 1.5,
    "fuse_lit": true,
    "power": 6,
    "causes_fire": false,
    "destroy_affected_by_griefing": true
}
```

<CodeHeader>#component_groups/minecraft:forced_exploding</CodeHeader>

```json
"minecraft:explode": {
    "fuse_length": 1.5,
    "fuse_lit": true,
    "power": 3,
    "causes_fire": false,
    "destroy_affected_by_griefing": true
}
```

ender_crystal

<CodeHeader>#component_groups/crystal_exploding</CodeHeader>

```json
"minecraft:explode": {
    "fuse_length": 0,
    "fuse_lit": true,
    "power": 6,
    "causes_fire": false,
    "destroy_affected_by_griefing": true
}
```

fireball

<CodeHeader>#component_groups/minecraft:exploding</CodeHeader>

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

tnt

<CodeHeader></CodeHeader>

```json
"minecraft:explode": {
    "fuse_length": 4,
    "fuse_lit": true,
    "power": 4,
    "causes_fire": false
}
```

<CodeHeader>#component_groups/from_explosion</CodeHeader>

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

tnt_minecart

<CodeHeader>#component_groups/minecraft:primed_tnt</CodeHeader>

```json
"minecraft:explode": {
    "fuse_length": 4,
    "fuse_lit": true,
    "power": 3,
    "causes_fire": false
}
```

</Spoiler>

## fire_immune

<Spoiler title="Show">

blaze

<CodeHeader></CodeHeader>

```json
"minecraft:fire_immune": {}
```

ender_crystal

<CodeHeader></CodeHeader>

```json
"minecraft:fire_immune": true
```

ender_dragon

<CodeHeader></CodeHeader>

```json
"minecraft:fire_immune": true
```

ghast

<CodeHeader></CodeHeader>

```json
"minecraft:fire_immune": {}
```

magma_cube

<CodeHeader></CodeHeader>

```json
"minecraft:fire_immune": {}
```

npc

<CodeHeader></CodeHeader>

```json
"minecraft:fire_immune": true
```

shulker

<CodeHeader></CodeHeader>

```json
"minecraft:fire_immune": true
```

strider

<CodeHeader></CodeHeader>

```json
"minecraft:fire_immune": {}
```

</Spoiler>

## flocking

<Spoiler title="Show">

dolphin

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

cod

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

pufferfish

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

salmon

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

tropicalfish

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

<Spoiler title="Show">

allay

<CodeHeader></CodeHeader>

```json
"minecraft:flying_speed": {
    "value": 0.1
}
```

bee

<CodeHeader></CodeHeader>

```json
"minecraft:flying_speed": {
    "value": 0.15
}
```

ender_dragon

<CodeHeader></CodeHeader>

```json
"minecraft:flying_speed": {
    "value": 0.6
}
```

</Spoiler>

## follow_range

<Spoiler title="Show">

allay

<CodeHeader></CodeHeader>

```json
"minecraft:follow_range": {
    "value": 1024
}
```

bee

<CodeHeader></CodeHeader>

```json
"minecraft:follow_range": {
    "value": 1024
}
```

blaze

<CodeHeader></CodeHeader>

```json
"minecraft:follow_range": {
    "value": 48,
    "max": 48
}
```

dolphin

<CodeHeader></CodeHeader>

```json
"minecraft:follow_range": {
    "value": 48,
    "max": 48
}
```

elder_guardian

<CodeHeader></CodeHeader>

```json
"minecraft:follow_range": {
    "value": 16,
    "max": 16
}
```

enderman

<CodeHeader></CodeHeader>

```json
"minecraft:follow_range": {
    "value": 64,
    "max": 64
}
```

evocation_illager

<CodeHeader></CodeHeader>

```json
"minecraft:follow_range": {
    "value": 64
}
```

ghast

<CodeHeader></CodeHeader>

```json
"minecraft:follow_range": {
    "value": 64,
    "max": 64
}
```

</Spoiler>

## game_event_movement_tracking

<Spoiler title="Show">

allay

<CodeHeader></CodeHeader>

```json
"minecraft:game_event_movement_tracking": {
    "emit_flap": true
}
```

bat

<CodeHeader></CodeHeader>

```json
"minecraft:game_event_movement_tracking": {
    "emit_flap": true
}
```

bee

<CodeHeader></CodeHeader>

```json
"minecraft:game_event_movement_tracking": {
    "emit_flap": true
}
```

chicken

<CodeHeader></CodeHeader>

```json
"minecraft:game_event_movement_tracking": {
    "emit_flap": true
}
```

ender_dragon

<CodeHeader></CodeHeader>

```json
"minecraft:game_event_movement_tracking": {
    "emit_flap": true
}
```

parrot

<CodeHeader></CodeHeader>

```json
"minecraft:game_event_movement_tracking": {
    "emit_flap": true
}
```

phantom

<CodeHeader></CodeHeader>

```json
"minecraft:game_event_movement_tracking": {
    "emit_flap": true
}
```

vex

<CodeHeader></CodeHeader>

```json
"minecraft:game_event_movement_tracking": {
    "emit_move": false,
    "emit_swim": false
}
```

</Spoiler>

## genetics

<Spoiler title="Show">

goat

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

panda

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

<Spoiler title="Show">

panda

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

<Spoiler title="Show">

hoglin

<CodeHeader>#component_groups/minecraft:hoglin_adult</CodeHeader>

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

piglin

<CodeHeader>#component_groups/piglin_adult</CodeHeader>

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

<Spoiler title="Show">

bee

<CodeHeader>#component_groups/has_nectar</CodeHeader>

```json
"minecraft:grows_crop": {
    "charges": 10,
    "chance": 0.03
}
```

</Spoiler>

## healable

<Spoiler title="Show">

cat

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

donkey

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

horse

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

llama

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

mule

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

parrot

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

trader_llama

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

wolf

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

<Spoiler title="Show">

allay

<CodeHeader></CodeHeader>

```json
"minecraft:health": {
    "value": 20
}
```

armor_stand

<CodeHeader></CodeHeader>

```json
"minecraft:health": {
    "value": 6,
    "max": 6
}
```

axolotl

<CodeHeader></CodeHeader>

```json
"minecraft:health": {
    "value": 14
}
```

bat

<CodeHeader></CodeHeader>

```json
"minecraft:health": {
    "value": 6,
    "max": 6
}
```

bee

<CodeHeader></CodeHeader>

```json
"minecraft:health": {
    "value": 10,
    "max": 10
}
```

blaze

<CodeHeader></CodeHeader>

```json
"minecraft:health": {
    "value": 20,
    "max": 20
}
```

cat

<CodeHeader>#component_groups/minecraft:cat_wild</CodeHeader>

```json
"minecraft:health": {
    "value": 10,
    "max": 10
}
```

<CodeHeader>#component_groups/minecraft:cat_tame</CodeHeader>

```json
"minecraft:health": {
    "value": 20,
    "max": 20
}
```

</Spoiler>

## heartbeat

<Spoiler title="Show">

warden

<CodeHeader></CodeHeader>

```json
"minecraft:heartbeat": {
    "interval": "2.0 - math.clamp(query.anger_level / 80 * 1.5, 0, 1.5)"
}
```

</Spoiler>

## hide

<Spoiler title="Show">

villager_v2

<CodeHeader></CodeHeader>

```json
"minecraft:hide": {}
```

</Spoiler>

## home

<Spoiler title="Show">

bee

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

elder_guardian

<CodeHeader></CodeHeader>

```json
"minecraft:home": {
    "restriction_radius": 16
}
```

guardian

<CodeHeader></CodeHeader>

```json
"minecraft:home": {
    "restriction_radius": 16
}
```

piglin_brute

<CodeHeader></CodeHeader>

```json
"minecraft:home": {}
```

turtle

<CodeHeader></CodeHeader>

```json
"minecraft:home": {}
```

wandering_trader

<CodeHeader></CodeHeader>

```json
"minecraft:home": {
    "restriction_radius": 16
}
```

</Spoiler>

## horse.jump_strength

<Spoiler title="Show">

donkey

<CodeHeader></CodeHeader>

```json
"minecraft:horse.jump_strength": {
    "value": 0.5
}
```

horse

<CodeHeader></CodeHeader>

```json
"minecraft:horse.jump_strength": {
    "value": {
        "range_min": 0.4,
        "range_max": 1.0
    }
}
```

mule

<CodeHeader></CodeHeader>

```json
"minecraft:horse.jump_strength": {
    "value": 0.5
}
```

skeleton_horse

<CodeHeader></CodeHeader>

```json
"minecraft:horse.jump_strength": {
    "value": {
        "range_min": 0.4,
        "range_max": 1.0
    }
}
```

zombie_horse

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

<Spoiler title="Show">

allay

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

armor_stand

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

arrow

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

axolotl

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

bat

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

bee

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

<CodeHeader>#component_groups/perish</CodeHeader>

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

blaze

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

</Spoiler>

## input_ground_controlled

<Spoiler title="Show">

donkey

<CodeHeader>#component_groups/minecraft:donkey_saddled</CodeHeader>

```json
"minecraft:input_ground_controlled": {}
```

horse

<CodeHeader>#component_groups/minecraft:horse_saddled</CodeHeader>

```json
"minecraft:input_ground_controlled": {}
```

mule

<CodeHeader>#component_groups/minecraft:mule_saddled</CodeHeader>

```json
"minecraft:input_ground_controlled": {}
```

skeleton_horse

<CodeHeader></CodeHeader>

```json
"minecraft:input_ground_controlled": {}
```

</Spoiler>

## inside_block_notifier

<Spoiler title="Show">

boat

<CodeHeader></CodeHeader>

```json
"minecraft:inside_block_notifier": {
    "block_list": [
        {
            "block": {
                "name": "minecraft:bubble_column",
                "states": {
                    "drag_down": true
                }
            },
            "entered_block_event": {
                "event": "minecraft:entered_bubble_column_down",
                "target": "self"
            },
            "exited_block_event": {
                "event": "minecraft:exited_bubble_column",
                "target": "self"
            }
        },
        {
            "block": {
                "name": "minecraft:bubble_column",
                "states": {
                    "drag_down": false
                }
            },
            "entered_block_event": {
                "event": "minecraft:entered_bubble_column_up",
                "target": "self"
            },
            "exited_block_event": {
                "event": "minecraft:exited_bubble_column",
                "target": "self"
            }
        }
    ]
}
```

chest_boat

<CodeHeader></CodeHeader>

```json
"minecraft:inside_block_notifier": {
    "block_list": [
        {
            "block": {
                "name": "minecraft:bubble_column",
                "states": {
                    "drag_down": true
                }
            },
            "entered_block_event": {
                "event": "minecraft:entered_bubble_column_down",
                "target": "self"
            },
            "exited_block_event": {
                "event": "minecraft:exited_bubble_column",
                "target": "self"
            }
        },
        {
            "block": {
                "name": "minecraft:bubble_column",
                "states": {
                    "drag_down": false
                }
            },
            "entered_block_event": {
                "event": "minecraft:entered_bubble_column_up",
                "target": "self"
            },
            "exited_block_event": {
                "event": "minecraft:exited_bubble_column",
                "target": "self"
            }
        }
    ]
}
```

</Spoiler>

## insomnia

<Spoiler title="Show">

player

<CodeHeader></CodeHeader>

```json
"minecraft:insomnia": {
    "days_until_insomnia": 3
}
```

</Spoiler>

## interact

<Spoiler title="Show">

allay

<CodeHeader></CodeHeader>

```json
"minecraft:interact": {
    "interactions": [
        {
            "on_interact": {
                "filters": {
                    "all_of": [
                        {
                            "test": "is_family",
                            "subject": "other",
                            "value": "player"
                        }
                    ]
                }
            },
            "give_item": true,
            "take_item": true,
            "interact_text": "action.interact.allay"
        }
    ]
}
```

cow

<CodeHeader>#component_groups/minecraft:cow_adult</CodeHeader>

```json
"minecraft:interact": {
    "interactions": [
        {
            "on_interact": {
                "filters": {
                    "all_of": [
                        {
                            "test": "is_family",
                            "subject": "other",
                            "value": "player"
                        },
                        {
                            "test": "has_equipment",
                            "domain": "hand",
                            "subject": "other",
                            "value": "bucket:0"
                        }
                    ]
                }
            },
            "use_item": true,
            "transform_to_item": "bucket:1",
            "play_sounds": "milk",
            "interact_text": "action.interact.milk"
        }
    ]
}
```

creeper

<CodeHeader></CodeHeader>

```json
"minecraft:interact": {
    "interactions": {
        "on_interact": {
            "filters": {
                "all_of": [
                    {
                        "test": "is_family",
                        "subject": "other",
                        "value": "player"
                    },
                    {
                        "test": "has_equipment",
                        "domain": "hand",
                        "subject": "other",
                        "value": "flint_and_steel"
                    },
                    {
                        "test": "has_component",
                        "operator": "!=",
                        "value": "minecraft:explode"
                    }
                ]
            },
            "event": "minecraft:start_exploding_forced",
            "target": "self"
        },
        "hurt_item": 1,
        "swing": true,
        "play_sounds": "ignite",
        "interact_text": "action.interact.creeper"
    }
}
```

donkey

<CodeHeader>#component_groups/minecraft:donkey_tamed</CodeHeader>

```json
"minecraft:interact": {
    "interactions": [
        {
            "play_sounds": "armor.equip_generic",
            "on_interact": {
                "filters": {
                    "all_of": [
                        {
                            "test": "has_equipment",
                            "subject": "self",
                            "domain": "inventory",
                            "operator": "not",
                            "value": "saddle"
                        },
                        {
                            "test": "has_equipment",
                            "subject": "other",
                            "domain": "hand",
                            "value": "saddle"
                        },
                        {
                            "test": "is_family",
                            "subject": "other",
                            "value": "player"
                        },
                        {
                            "test": "is_sneaking",
                            "subject": "other",
                            "value": false
                        }
                    ]
                },
                "target": "self"
            },
            "equip_item_slot": 0,
            "interact_text": "action.interact.equip"
        }
    ]
}
```

<CodeHeader>#component_groups/minecraft:donkey_unchested</CodeHeader>

```json
"minecraft:interact": {
    "interactions": [
        {
            "play_sounds": "armor.equip_generic",
            "on_interact": {
                "filters": {
                    "all_of": [
                        {
                            "test": "has_equipment",
                            "subject": "self",
                            "domain": "inventory",
                            "operator": "not",
                            "value": "saddle"
                        },
                        {
                            "test": "has_equipment",
                            "subject": "other",
                            "domain": "hand",
                            "value": "saddle"
                        },
                        {
                            "test": "is_family",
                            "subject": "other",
                            "value": "player"
                        },
                        {
                            "test": "is_sneaking",
                            "subject": "other",
                            "value": false
                        }
                    ]
                },
                "target": "self"
            },
            "equip_item_slot": 0,
            "interact_text": "action.interact.saddle"
        },
        {
            "play_sounds": "armor.equip_generic",
            "on_interact": {
                "filters": {
                    "all_of": [
                        {
                            "test": "is_family",
                            "subject": "other",
                            "value": "player"
                        },
                        {
                            "test": "is_sneaking",
                            "subject": "other",
                            "value": false
                        },
                        {
                            "test": "has_equipment",
                            "domain": "hand",
                            "subject": "other",
                            "value": "chest"
                        }
                    ]
                },
                "event": "minecraft:on_chest",
                "target": "self"
            },
            "use_item": true,
            "interact_text": "action.interact.attachchest"
        }
    ]
}
```

<CodeHeader>#component_groups/minecraft:donkey_chested</CodeHeader>

```json
"minecraft:interact": {
    "interactions": [
        {
            "play_sounds": "armor.equip_generic",
            "on_interact": {
                "filters": {
                    "all_of": [
                        {
                            "test": "has_equipment",
                            "subject": "self",
                            "domain": "inventory",
                            "operator": "not",
                            "value": "saddle"
                        },
                        {
                            "test": "has_equipment",
                            "subject": "other",
                            "domain": "hand",
                            "value": "saddle"
                        },
                        {
                            "test": "is_family",
                            "subject": "other",
                            "value": "player"
                        },
                        {
                            "test": "is_sneaking",
                            "subject": "other",
                            "value": false
                        }
                    ]
                },
                "target": "self"
            },
            "equip_item_slot": 0,
            "interact_text": "action.interact.saddle"
        }
    ]
}
```

goat

<CodeHeader>#component_groups/interact_default</CodeHeader>

```json
"minecraft:interact": {
    "interactions": [
        {
            "on_interact": {
                "filters": {
                    "all_of": [
                        {
                            "test": "has_component",
                            "subject": "self",
                            "operator": "!=",
                            "value": "minecraft:is_baby"
                        },
                        {
                            "test": "is_family",
                            "subject": "other",
                            "value": "player"
                        },
                        {
                            "test": "has_equipment",
                            "domain": "hand",
                            "subject": "other",
                            "value": "bucket:0"
                        }
                    ]
                }
            },
            "use_item": true,
            "transform_to_item": "bucket:1",
            "play_sounds": "milk_suspiciously",
            "interact_text": "action.interact.milk"
        }
    ]
}
```

<CodeHeader>#component_groups/interact_screamer</CodeHeader>

```json
"minecraft:interact": {
    "interactions": [
        {
            "on_interact": {
                "filters": {
                    "all_of": [
                        {
                            "test": "has_component",
                            "subject": "self",
                            "operator": "!=",
                            "value": "minecraft:is_baby"
                        },
                        {
                            "test": "is_family",
                            "subject": "other",
                            "value": "player"
                        },
                        {
                            "test": "has_equipment",
                            "domain": "hand",
                            "subject": "other",
                            "value": "bucket:0"
                        }
                    ]
                }
            },
            "use_item": true,
            "transform_to_item": "bucket:1",
            "play_sounds": "milk.screamer",
            "interact_text": "action.interact.milk"
        }
    ]
}
```

</Spoiler>

## inventory

<Spoiler title="Show">

allay

<CodeHeader></CodeHeader>

```json
"minecraft:inventory": {
    "inventory_size": 1
}
```

chest_boat

<CodeHeader></CodeHeader>

```json
"minecraft:inventory": {
    "container_type": "chest_boat",
    "inventory_size": 27,
    "can_be_siphoned_from": true
}
```

chest_minecart

<CodeHeader></CodeHeader>

```json
"minecraft:inventory": {
    "container_type": "minecart_chest",
    "inventory_size": 27,
    "can_be_siphoned_from": true
}
```

command_block_minecart

<CodeHeader></CodeHeader>

```json
"minecraft:inventory": {}
```

donkey

<CodeHeader>#component_groups/minecraft:donkey_tamed</CodeHeader>

```json
"minecraft:inventory": {
    "inventory_size": 16,
    "container_type": "horse"
}
```

hopper_minecart

<CodeHeader></CodeHeader>

```json
"minecraft:inventory": {
    "container_type": "minecart_hopper",
    "inventory_size": 5,
    "can_be_siphoned_from": true
}
```

horse

<CodeHeader>#component_groups/minecraft:horse_tamed</CodeHeader>

```json
"minecraft:inventory": {
    "inventory_size": 2,
    "container_type": "horse"
}
```

llama

<CodeHeader>#component_groups/minecraft:llama_tamed</CodeHeader>

```json
"minecraft:inventory": {
    "inventory_size": 16,
    "container_type": "horse",
    "additional_slots_per_strength": 3
}
```

</Spoiler>

## is_baby

<Spoiler title="Show">

axolotl

<CodeHeader>#component_groups/axolotl_baby</CodeHeader>

```json
"minecraft:is_baby": {}
```

bee

<CodeHeader>#component_groups/bee_baby</CodeHeader>

```json
"minecraft:is_baby": {}
```

cat

<CodeHeader>#component_groups/minecraft:cat_baby</CodeHeader>

```json
"minecraft:is_baby": {}
```

chicken

<CodeHeader>#component_groups/minecraft:chicken_baby</CodeHeader>

```json
"minecraft:is_baby": {}
```

cow

<CodeHeader>#component_groups/minecraft:cow_baby</CodeHeader>

```json
"minecraft:is_baby": {}
```

dolphin

<CodeHeader>#component_groups/dolphin_baby</CodeHeader>

```json
"minecraft:is_baby": {}
```

donkey

<CodeHeader>#component_groups/minecraft:donkey_baby</CodeHeader>

```json
"minecraft:is_baby": {}
```

drowned

<CodeHeader>#component_groups/minecraft:baby_drowned</CodeHeader>

```json
"minecraft:is_baby": {}
```

</Spoiler>

## is_charged

<Spoiler title="Show">

creeper

<CodeHeader>#component_groups/minecraft:charged_creeper</CodeHeader>

```json
"minecraft:is_charged": {}
```

</Spoiler>

## is_chested

<Spoiler title="Show">

donkey

<CodeHeader>#component_groups/minecraft:donkey_chested</CodeHeader>

```json
"minecraft:is_chested": {}
```

llama

<CodeHeader>#component_groups/minecraft:llama_chested</CodeHeader>

```json
"minecraft:is_chested": {}
```

mule

<CodeHeader>#component_groups/minecraft:mule_chested</CodeHeader>

```json
"minecraft:is_chested": {}
```

trader_llama

<CodeHeader>#component_groups/minecraft:llama_chested</CodeHeader>

```json
"minecraft:is_chested": {}
```

</Spoiler>

## is_dyeable

<Spoiler title="Show">

cat

<CodeHeader>#component_groups/minecraft:cat_tame</CodeHeader>

```json
"minecraft:is_dyeable": {
    "interact_text": "action.interact.dye"
}
```

sheep

<CodeHeader>#component_groups/minecraft:sheep_dyeable</CodeHeader>

```json
"minecraft:is_dyeable": {
    "interact_text": "action.interact.dye"
}
```

wolf

<CodeHeader>#component_groups/minecraft:wolf_tame</CodeHeader>

```json
"minecraft:is_dyeable": {
    "interact_text": "action.interact.dye"
}
```

</Spoiler>

## is_hidden_when_invisible

<Spoiler title="Show">

allay

<CodeHeader></CodeHeader>

```json
"minecraft:is_hidden_when_invisible": {}
```

axolotl

<CodeHeader></CodeHeader>

```json
"minecraft:is_hidden_when_invisible": {}
```

bat

<CodeHeader></CodeHeader>

```json
"minecraft:is_hidden_when_invisible": {}
```

bee

<CodeHeader></CodeHeader>

```json
"minecraft:is_hidden_when_invisible": {}
```

blaze

<CodeHeader></CodeHeader>

```json
"minecraft:is_hidden_when_invisible": {}
```

cat

<CodeHeader></CodeHeader>

```json
"minecraft:is_hidden_when_invisible": {}
```

cave_spider

<CodeHeader></CodeHeader>

```json
"minecraft:is_hidden_when_invisible": {}
```

chicken

<CodeHeader></CodeHeader>

```json
"minecraft:is_hidden_when_invisible": {}
```

</Spoiler>

## is_ignited

<Spoiler title="Show">

tnt_minecart

<CodeHeader>#component_groups/minecraft:primed_tnt</CodeHeader>

```json
"minecraft:is_ignited": {}
```

<CodeHeader>#component_groups/minecraft:instant_explode_tnt</CodeHeader>

```json
"minecraft:is_ignited": {}
```

</Spoiler>

## is_illager_captain

<Spoiler title="Show">

pillager

<CodeHeader>#component_groups/minecraft:illager_squad_captain</CodeHeader>

```json
"minecraft:is_illager_captain": {}
```

<CodeHeader>#component_groups/minecraft:patrol_captain</CodeHeader>

```json
"minecraft:is_illager_captain": {}
```

vindicator

<CodeHeader>#component_groups/minecraft:illager_squad_captain</CodeHeader>

```json
"minecraft:is_illager_captain": {}
```

<CodeHeader>#component_groups/minecraft:patrol_captain</CodeHeader>

```json
"minecraft:is_illager_captain": {}
```

</Spoiler>

## is_saddled

<Spoiler title="Show">

donkey

<CodeHeader>#component_groups/minecraft:donkey_saddled</CodeHeader>

```json
"minecraft:is_saddled": {}
```

horse

<CodeHeader>#component_groups/minecraft:horse_saddled</CodeHeader>

```json
"minecraft:is_saddled": {}
```

mule

<CodeHeader>#component_groups/minecraft:mule_saddled</CodeHeader>

```json
"minecraft:is_saddled": {}
```

pig

<CodeHeader>#component_groups/minecraft:pig_saddled</CodeHeader>

```json
"minecraft:is_saddled": {}
```

strider

<CodeHeader>#component_groups/minecraft:strider_saddled</CodeHeader>

```json
"minecraft:is_saddled": {}
```

</Spoiler>

## is_shaking

<Spoiler title="Show">

hoglin

<CodeHeader>#component_groups/start_zombification</CodeHeader>

```json
"minecraft:is_shaking": {}
```

husk

<CodeHeader>#component_groups/minecraft:convert_to_zombie</CodeHeader>

```json
"minecraft:is_shaking": {}
```

<CodeHeader>#component_groups/minecraft:convert_to_baby_zombie</CodeHeader>

```json
"minecraft:is_shaking": {}
```

piglin

<CodeHeader>#component_groups/start_zombification</CodeHeader>

```json
"minecraft:is_shaking": {}
```

piglin_brute

<CodeHeader>#component_groups/start_zombification</CodeHeader>

```json
"minecraft:is_shaking": {}
```

skeleton

<CodeHeader>#component_groups/in_powder_snow</CodeHeader>

```json
"minecraft:is_shaking": {}
```

strider

<CodeHeader>#component_groups/minecraft:start_suffocating</CodeHeader>

```json
"minecraft:is_shaking": {}
```

zombie

<CodeHeader>#component_groups/minecraft:convert_to_drowned</CodeHeader>

```json
"minecraft:is_shaking": {}
```

</Spoiler>

## is_sheared

<Spoiler title="Show">

sheep

<CodeHeader>#component_groups/minecraft:sheep_sheared</CodeHeader>

```json
"minecraft:is_sheared": {}
```

snow_golem

<CodeHeader>#component_groups/minecraft:snowman_sheared</CodeHeader>

```json
"minecraft:is_sheared": {}
```

</Spoiler>

## is_stackable

<Spoiler title="Show">

boat

<CodeHeader></CodeHeader>

```json
"minecraft:is_stackable": {}
```

chest_boat

<CodeHeader></CodeHeader>

```json
"minecraft:is_stackable": {}
```

chest_minecart

<CodeHeader></CodeHeader>

```json
"minecraft:is_stackable": {
    "value": true
}
```

hopper_minecart

<CodeHeader></CodeHeader>

```json
"minecraft:is_stackable": {}
```

minecart

<CodeHeader></CodeHeader>

```json
"minecraft:is_stackable": {}
```

tnt_minecart

<CodeHeader></CodeHeader>

```json
"minecraft:is_stackable": {}
```

</Spoiler>

## is_stunned

<Spoiler title="Show">

ravager

<CodeHeader>#component_groups/stunned</CodeHeader>

```json
"minecraft:is_stunned": {}
```

</Spoiler>

## is_tamed

<Spoiler title="Show">

cat

<CodeHeader>#component_groups/minecraft:cat_tame</CodeHeader>

```json
"minecraft:is_tamed": {}
```

donkey

<CodeHeader>#component_groups/minecraft:donkey_tamed</CodeHeader>

```json
"minecraft:is_tamed": {}
```

horse

<CodeHeader>#component_groups/minecraft:horse_tamed</CodeHeader>

```json
"minecraft:is_tamed": {}
```

llama

<CodeHeader>#component_groups/minecraft:llama_tamed</CodeHeader>

```json
"minecraft:is_tamed": {}
```

mule

<CodeHeader>#component_groups/minecraft:mule_tamed</CodeHeader>

```json
"minecraft:is_tamed": {}
```

ocelot

<CodeHeader>#component_groups/minecraft:ocelot_tame</CodeHeader>

```json
"minecraft:is_tamed": {}
```

parrot

<CodeHeader>#component_groups/minecraft:parrot_tame</CodeHeader>

```json
"minecraft:is_tamed": {}
```

skeleton_horse

<CodeHeader></CodeHeader>

```json
"minecraft:is_tamed": {}
```

</Spoiler>

## item_controllable

<Spoiler title="Show">

pig

<CodeHeader>#component_groups/minecraft:pig_saddled</CodeHeader>

```json
"minecraft:item_controllable": {
    "control_items": "carrotOnAStick"
}
```

strider

<CodeHeader>#component_groups/minecraft:strider_saddled</CodeHeader>

```json
"minecraft:item_controllable": {
    "control_items": "warped_fungus_on_a_stick"
}
```

</Spoiler>

## item_hopper

<Spoiler title="Show">

hopper_minecart

<CodeHeader>#component_groups/minecraft:hopper_active</CodeHeader>

```json
"minecraft:item_hopper": {}
```

</Spoiler>

## jump.dynamic

<Spoiler title="Show">

rabbit

<CodeHeader></CodeHeader>

```json
"minecraft:jump.dynamic": {}
```

</Spoiler>

## jump.static

<Spoiler title="Show">

allay

<CodeHeader></CodeHeader>

```json
"minecraft:jump.static": {}
```

axolotl

<CodeHeader></CodeHeader>

```json
"minecraft:jump.static": {}
```

bat

<CodeHeader></CodeHeader>

```json
"minecraft:jump.static": {}
```

bee

<CodeHeader></CodeHeader>

```json
"minecraft:jump.static": {}
```

blaze

<CodeHeader></CodeHeader>

```json
"minecraft:jump.static": {}
```

cat

<CodeHeader></CodeHeader>

```json
"minecraft:jump.static": {}
```

cave_spider

<CodeHeader></CodeHeader>

```json
"minecraft:jump.static": {}
```

chicken

<CodeHeader></CodeHeader>

```json
"minecraft:jump.static": {}
```

</Spoiler>

## knockback_resistance

<Spoiler title="Show">

armor_stand

<CodeHeader></CodeHeader>

```json
"minecraft:knockback_resistance": {
    "value": 1.0
}
```

ender_dragon

<CodeHeader></CodeHeader>

```json
"minecraft:knockback_resistance": {
    "value": 100,
    "max": 100
}
```

hoglin

<CodeHeader></CodeHeader>

```json
"minecraft:knockback_resistance": {
    "value": 0.6
}
```

iron_golem

<CodeHeader></CodeHeader>

```json
"minecraft:knockback_resistance": {
    "value": 1.0
}
```

ravager

<CodeHeader></CodeHeader>

```json
"minecraft:knockback_resistance": {
    "value": 0.75
}
```

warden

<CodeHeader></CodeHeader>

```json
"minecraft:knockback_resistance": {
    "value": 1.0
}
```

zoglin

<CodeHeader></CodeHeader>

```json
"minecraft:knockback_resistance": {
    "value": 0.6
}
```

</Spoiler>

## lava_movement

<Spoiler title="Show">

strider

<CodeHeader></CodeHeader>

```json
"minecraft:lava_movement": {
    "value": 0.32
}
```

</Spoiler>

## leashable

<Spoiler title="Show">

allay

<CodeHeader></CodeHeader>

```json
"minecraft:leashable": {
    "soft_distance": 4.0,
    "hard_distance": 6.0,
    "max_distance": 10.0
}
```

axolotl

<CodeHeader></CodeHeader>

```json
"minecraft:leashable": {
    "soft_distance": 4.0,
    "hard_distance": 6.0,
    "max_distance": 10.0
}
```

bee

<CodeHeader></CodeHeader>

```json
"minecraft:leashable": {
    "soft_distance": 4.0,
    "hard_distance": 6.0,
    "max_distance": 10.0
}
```

boat

<CodeHeader></CodeHeader>

```json
"minecraft:leashable": {
    "soft_distance": 4.0,
    "hard_distance": 6.0,
    "max_distance": 10.0
}
```

cat

<CodeHeader></CodeHeader>

```json
"minecraft:leashable": {
    "soft_distance": 4.0,
    "hard_distance": 6.0,
    "max_distance": 10.0
}
```

chest_boat

<CodeHeader></CodeHeader>

```json
"minecraft:leashable": {
    "soft_distance": 4.0,
    "hard_distance": 6.0,
    "max_distance": 10.0
}
```

chicken

<CodeHeader></CodeHeader>

```json
"minecraft:leashable": {
    "soft_distance": 4.0,
    "hard_distance": 6.0,
    "max_distance": 10.0
}
```

cow

<CodeHeader></CodeHeader>

```json
"minecraft:leashable": {
    "soft_distance": 4.0,
    "hard_distance": 6.0,
    "max_distance": 10.0
}
```

</Spoiler>

## lookat

<Spoiler title="Show">

enderman

<CodeHeader></CodeHeader>

```json
"minecraft:lookat": {
    "search_radius": 64.0,
    "set_target": true,
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
                "value": "carved_pumpkin"
            }
        ]
    }
}
```

</Spoiler>

## loot

<Spoiler title="Show">

armor_stand

<CodeHeader></CodeHeader>

```json
"minecraft:loot": {
    "table": "loot_tables/entities/armor_stand.json"
}
```

blaze

<CodeHeader></CodeHeader>

```json
"minecraft:loot": {
    "table": "loot_tables/entities/blaze.json"
}
```

boat

<CodeHeader></CodeHeader>

```json
"minecraft:loot": {
    "table": "loot_tables/entities/boat.json"
}
```

cat

<CodeHeader>#component_groups/minecraft:cat_adult</CodeHeader>

```json
"minecraft:loot": {
    "table": "loot_tables/entities/cat.json"
}
```

cave_spider

<CodeHeader></CodeHeader>

```json
"minecraft:loot": {
    "table": "loot_tables/entities/spider.json"
}
```

chicken

<CodeHeader>#component_groups/minecraft:chicken_adult</CodeHeader>

```json
"minecraft:loot": {
    "table": "loot_tables/entities/chicken.json"
}
```

cow

<CodeHeader>#component_groups/minecraft:cow_adult</CodeHeader>

```json
"minecraft:loot": {
    "table": "loot_tables/entities/cow.json"
}
```

creeper

<CodeHeader></CodeHeader>

```json
"minecraft:loot": {
    "table": "loot_tables/entities/creeper.json"
}
```

</Spoiler>

## managed_wandering_trader

<Spoiler title="Show">

wandering_trader

<CodeHeader>#component_groups/managed</CodeHeader>

```json
"minecraft:managed_wandering_trader": {}
```

</Spoiler>

## mark_variant

<Spoiler title="Show">

bee

<CodeHeader>#component_groups/countdown_to_perish</CodeHeader>

```json
"minecraft:mark_variant": {
    "value": 1
}
```

horse

<CodeHeader>#component_groups/minecraft:markings_none</CodeHeader>

```json
"minecraft:mark_variant": {
    "value": 0
}
```

<CodeHeader>#component_groups/minecraft:markings_white_details</CodeHeader>

```json
"minecraft:mark_variant": {
    "value": 1
}
```

<CodeHeader>#component_groups/minecraft:markings_white_fields</CodeHeader>

```json
"minecraft:mark_variant": {
    "value": 2
}
```

llama

<CodeHeader></CodeHeader>

```json
"minecraft:mark_variant": {
    "value": 0
}
```

mooshroom

<CodeHeader></CodeHeader>

```json
"minecraft:mark_variant": {
    "value": -1
}
```

<CodeHeader>#component_groups/minecraft:mooshroom_fed_nothing</CodeHeader>

```json
"minecraft:mark_variant": {
    "value": -1
}
```

<CodeHeader>#component_groups/minecraft:mooshroom_brown_fed_poppy</CodeHeader>

```json
"minecraft:mark_variant": {
    "value": 0
}
```

</Spoiler>

## mob_effect

<Spoiler title="Show">

pufferfish

<CodeHeader>#component_groups/minecraft:full_puff</CodeHeader>

```json
"minecraft:mob_effect": {
    "effect_range": 0.2,
    "mob_effect": "poison",
    "effect_time": 10,
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

warden

<CodeHeader></CodeHeader>

```json
"minecraft:mob_effect": {
    "effect_range": 20,
    "effect_time": 13,
    "mob_effect": "darkness",
    "cooldown_time": 6,
    "entity_filter": {
        "all_of": [
            {
                "test": "is_family",
                "subject": "other",
                "value": "player"
            },
            {
                "operator": "not",
                "test": "has_ability",
                "subject": "other",
                "value": "invulnerable"
            }
        ]
    }
}
```

</Spoiler>

## movement

<Spoiler title="Show">

allay

<CodeHeader></CodeHeader>

```json
"minecraft:movement": {
    "value": 0.1
}
```

axolotl

<CodeHeader></CodeHeader>

```json
"minecraft:movement": {
    "value": 0.1
}
```

bat

<CodeHeader></CodeHeader>

```json
"minecraft:movement": {
    "value": 0.1
}
```

bee

<CodeHeader></CodeHeader>

```json
"minecraft:movement": {
    "value": 0.3
}
```

blaze

<CodeHeader></CodeHeader>

```json
"minecraft:movement": {
    "value": 0.23
}
```

cat

<CodeHeader></CodeHeader>

```json
"minecraft:movement": {
    "value": 0.3
}
```

cave_spider

<CodeHeader></CodeHeader>

```json
"minecraft:movement": {
    "value": 0.3
}
```

chicken

<CodeHeader></CodeHeader>

```json
"minecraft:movement": {
    "value": 0.25
}
```

</Spoiler>

## movement.amphibious

<Spoiler title="Show">

axolotl

<CodeHeader></CodeHeader>

```json
"minecraft:movement.amphibious": {
    "max_turn": 15.0
}
```

frog

<CodeHeader></CodeHeader>

```json
"minecraft:movement.amphibious": {}
```

turtle

<CodeHeader></CodeHeader>

```json
"minecraft:movement.amphibious": {
    "max_turn": 5.0
}
```

</Spoiler>

## movement.basic

<Spoiler title="Show">

bat

<CodeHeader></CodeHeader>

```json
"minecraft:movement.basic": {}
```

blaze

<CodeHeader></CodeHeader>

```json
"minecraft:movement.basic": {}
```

cat

<CodeHeader></CodeHeader>

```json
"minecraft:movement.basic": {}
```

cave_spider

<CodeHeader></CodeHeader>

```json
"minecraft:movement.basic": {}
```

chicken

<CodeHeader></CodeHeader>

```json
"minecraft:movement.basic": {}
```

cow

<CodeHeader></CodeHeader>

```json
"minecraft:movement.basic": {}
```

creeper

<CodeHeader></CodeHeader>

```json
"minecraft:movement.basic": {}
```

donkey

<CodeHeader></CodeHeader>

```json
"minecraft:movement.basic": {}
```

</Spoiler>

## movement.fly

<Spoiler title="Show">

parrot

<CodeHeader></CodeHeader>

```json
"minecraft:movement.fly": {}
```

</Spoiler>

## movement.generic

<Spoiler title="Show">

drowned

<CodeHeader></CodeHeader>

```json
"minecraft:movement.generic": {}
```

</Spoiler>

## movement.glide

<Spoiler title="Show">

phantom

<CodeHeader></CodeHeader>

```json
"minecraft:movement.glide": {
    "start_speed": 0.1,
    "speed_when_turning": 0.2
}
```

</Spoiler>

## movement.hover

<Spoiler title="Show">

allay

<CodeHeader></CodeHeader>

```json
"minecraft:movement.hover": {}
```

bee

<CodeHeader></CodeHeader>

```json
"minecraft:movement.hover": {}
```

</Spoiler>

## movement.jump

<Spoiler title="Show">

magma_cube

<CodeHeader></CodeHeader>

```json
"minecraft:movement.jump": {
    "jump_delay": [
        2.0,
        6.0
    ]
}
```

<CodeHeader>#component_groups/minecraft:slime_calm</CodeHeader>

```json
"minecraft:movement.jump": {
    "jump_delay": [
        2.0,
        6.0
    ]
}
```

<CodeHeader>#component_groups/minecraft:slime_aggressive</CodeHeader>

```json
"minecraft:movement.jump": {
    "jump_delay": [
        0.667,
        2.0
    ]
}
```

slime

<CodeHeader></CodeHeader>

```json
"minecraft:movement.jump": {
    "jump_delay": [
        0.5,
        1.5
    ]
}
```

<CodeHeader>#component_groups/minecraft:slime_calm</CodeHeader>

```json
"minecraft:movement.jump": {
    "jump_delay": [
        0.5,
        1.5
    ]
}
```

<CodeHeader>#component_groups/minecraft:slime_aggressive</CodeHeader>

```json
"minecraft:movement.jump": {
    "jump_delay": [
        0.16,
        0.5
    ]
}
```

</Spoiler>

## movement.skip

<Spoiler title="Show">

rabbit

<CodeHeader></CodeHeader>

```json
"minecraft:movement.skip": {}
```

</Spoiler>

## movement.sway

<Spoiler title="Show">

elder_guardian

<CodeHeader></CodeHeader>

```json
"minecraft:movement.sway": {}
```

cod

<CodeHeader></CodeHeader>

```json
"minecraft:movement.sway": {
    "sway_amplitude": 0.0
}
```

guardian

<CodeHeader></CodeHeader>

```json
"minecraft:movement.sway": {}
```

pufferfish

<CodeHeader></CodeHeader>

```json
"minecraft:movement.sway": {
    "sway_amplitude": 0.0
}
```

salmon

<CodeHeader></CodeHeader>

```json
"minecraft:movement.sway": {
    "sway_amplitude": 0.0
}
```

tadpole

<CodeHeader></CodeHeader>

```json
"minecraft:movement.sway": {
    "sway_amplitude": 0.0
}
```

tropicalfish

<CodeHeader></CodeHeader>

```json
"minecraft:movement.sway": {
    "sway_amplitude": 0.0
}
```

</Spoiler>

## movement_sound_distance_offset

<Spoiler title="Show">

warden

<CodeHeader></CodeHeader>

```json
"minecraft:movement_sound_distance_offset": {
    "value": 0.55
}
```

</Spoiler>

## nameable

<Spoiler title="Show">

allay

<CodeHeader></CodeHeader>

```json
"minecraft:nameable": {}
```

armor_stand

<CodeHeader></CodeHeader>

```json
"minecraft:nameable": {}
```

axolotl

<CodeHeader></CodeHeader>

```json
"minecraft:nameable": {}
```

bat

<CodeHeader></CodeHeader>

```json
"minecraft:nameable": {}
```

bee

<CodeHeader></CodeHeader>

```json
"minecraft:nameable": {}
```

blaze

<CodeHeader></CodeHeader>

```json
"minecraft:nameable": {}
```

cat

<CodeHeader></CodeHeader>

```json
"minecraft:nameable": {}
```

cave_spider

<CodeHeader></CodeHeader>

```json
"minecraft:nameable": {}
```

</Spoiler>

## navigation.climb

<Spoiler title="Show">

cave_spider

<CodeHeader></CodeHeader>

```json
"minecraft:navigation.climb": {
    "can_path_over_water": true
}
```

spider

<CodeHeader></CodeHeader>

```json
"minecraft:navigation.climb": {
    "can_path_over_water": true
}
```

</Spoiler>

## navigation.float

<Spoiler title="Show">

bat

<CodeHeader></CodeHeader>

```json
"minecraft:navigation.float": {
    "can_path_over_water": true
}
```

ghast

<CodeHeader></CodeHeader>

```json
"minecraft:navigation.float": {
    "can_path_over_water": true
}
```

</Spoiler>

## navigation.fly

<Spoiler title="Show">

parrot

<CodeHeader></CodeHeader>

```json
"minecraft:navigation.fly": {
    "can_path_over_water": true,
    "can_path_from_air": true
}
```

</Spoiler>

## navigation.generic

<Spoiler title="Show">

axolotl

<CodeHeader></CodeHeader>

```json
"minecraft:navigation.generic": {
    "is_amphibious": true,
    "can_path_over_water": true,
    "can_swim": true,
    "can_walk": true,
    "can_sink": false,
    "avoid_damage_blocks": true
}
```

dolphin

<CodeHeader></CodeHeader>

```json
"minecraft:navigation.generic": {
    "is_amphibious": true,
    "can_path_over_water": true,
    "can_swim": true,
    "can_walk": false,
    "can_breach": true,
    "can_sink": false
}
```

<CodeHeader>#component_groups/dolphin_swimming_navigation</CodeHeader>

```json
"minecraft:navigation.generic": {
    "is_amphibious": true,
    "can_path_over_water": false,
    "can_swim": true,
    "can_walk": false,
    "can_breach": true,
    "can_sink": false
}
```

<CodeHeader>#component_groups/dolphin_on_land</CodeHeader>

```json
"minecraft:navigation.generic": {
    "is_amphibious": true,
    "can_path_over_water": true,
    "can_swim": true,
    "can_walk": true,
    "can_breach": false,
    "can_jump": false
}
```

drowned

<CodeHeader></CodeHeader>

```json
"minecraft:navigation.generic": {
    "is_amphibious": true,
    "can_path_over_water": false,
    "can_break_doors": true,
    "can_swim": false,
    "can_walk": true,
    "avoid_sun": true
}
```

<CodeHeader>#component_groups/minecraft:hunter_mode</CodeHeader>

```json
"minecraft:navigation.generic": {
    "is_amphibious": true,
    "can_path_over_water": false,
    "can_break_doors": true,
    "can_swim": true,
    "can_walk": true,
    "avoid_sun": true
}
```

<CodeHeader>#component_groups/minecraft:wander_mode</CodeHeader>

```json
"minecraft:navigation.generic": {
    "is_amphibious": true,
    "can_path_over_water": false,
    "can_break_doors": true,
    "can_swim": false,
    "can_walk": true,
    "avoid_sun": true
}
```

elder_guardian

<CodeHeader></CodeHeader>

```json
"minecraft:navigation.generic": {
    "is_amphibious": true,
    "can_path_over_water": false,
    "can_swim": true,
    "can_walk": false,
    "can_breach": true
}
```

</Spoiler>

## navigation.hover

<Spoiler title="Show">

allay

<CodeHeader></CodeHeader>

```json
"minecraft:navigation.hover": {
    "can_path_over_water": true,
    "can_sink": false,
    "can_pass_doors": false,
    "can_path_from_air": true,
    "avoid_water": true,
    "avoid_damage_blocks": true,
    "avoid_sun": false
}
```

bee

<CodeHeader></CodeHeader>

```json
"minecraft:navigation.hover": {
    "can_path_over_water": true,
    "can_sink": false,
    "can_pass_doors": false,
    "can_path_from_air": true,
    "avoid_water": true,
    "avoid_damage_blocks": true,
    "avoid_sun": false
}
```

</Spoiler>

## navigation.walk

<Spoiler title="Show">

blaze

<CodeHeader></CodeHeader>

```json
"minecraft:navigation.walk": {
    "can_path_over_water": true,
    "avoid_water": true,
    "avoid_damage_blocks": true
}
```

cat

<CodeHeader></CodeHeader>

```json
"minecraft:navigation.walk": {
    "can_float": true,
    "avoid_water": true,
    "avoid_damage_blocks": true
}
```

chicken

<CodeHeader></CodeHeader>

```json
"minecraft:navigation.walk": {
    "can_path_over_water": true,
    "avoid_damage_blocks": true
}
```

cow

<CodeHeader></CodeHeader>

```json
"minecraft:navigation.walk": {
    "can_path_over_water": true,
    "avoid_water": true,
    "avoid_damage_blocks": true
}
```

creeper

<CodeHeader></CodeHeader>

```json
"minecraft:navigation.walk": {
    "can_path_over_water": true
}
```

donkey

<CodeHeader></CodeHeader>

```json
"minecraft:navigation.walk": {
    "can_path_over_water": true,
    "avoid_water": true,
    "avoid_damage_blocks": true
}
```

enderman

<CodeHeader></CodeHeader>

```json
"minecraft:navigation.walk": {
    "can_path_over_water": false,
    "avoid_water": true
}
```

endermite

<CodeHeader></CodeHeader>

```json
"minecraft:navigation.walk": {
    "can_path_over_water": true
}
```

</Spoiler>

## npc

<Spoiler title="Show">

npc

<CodeHeader></CodeHeader>

```json
"minecraft:npc": {
    "npc_data": {
        "portrait_offsets": {
            "translate": [
                -7,
                50,
                0
            ],
            "scale": [
                1.75,
                1.75,
                1.75
            ]
        },
        "picker_offsets": {
            "translate": [
                0,
                20,
                0
            ],
            "scale": [
                1.7,
                1.7,
                1.7
            ]
        },
        "skin_list": [
            {
                "variant": 0
            },
            {
                "variant": 1
            },
            {
                "variant": 2
            },
            {
                "variant": 3
            },
            {
                "variant": 4
            },
            {
                "variant": 5
            },
            {
                "variant": 6
            },
            {
                "variant": 7
            },
            {
                "variant": 8
            },
            {
                "variant": 9
            },
            {
                "variant": 10
            },
            {
                "variant": 11
            },
            {
                "variant": 12
            },
            {
                "variant": 13
            },
            {
                "variant": 14
            },
            {
                "variant": 15
            },
            {
                "variant": 16
            },
            {
                "variant": 17
            },
            {
                "variant": 18
            },
            {
                "variant": 19
            },
            {
                "variant": 25
            },
            {
                "variant": 26
            },
            {
                "variant": 27
            },
            {
                "variant": 28
            },
            {
                "variant": 29
            },
            {
                "variant": 30
            },
            {
                "variant": 31
            },
            {
                "variant": 32
            },
            {
                "variant": 33
            },
            {
                "variant": 34
            },
            {
                "variant": 20
            },
            {
                "variant": 21
            },
            {
                "variant": 22
            },
            {
                "variant": 23
            },
            {
                "variant": 24
            },
            {
                "variant": 35
            },
            {
                "variant": 36
            },
            {
                "variant": 37
            },
            {
                "variant": 38
            },
            {
                "variant": 39
            },
            {
                "variant": 40
            },
            {
                "variant": 41
            },
            {
                "variant": 42
            },
            {
                "variant": 43
            },
            {
                "variant": 44
            },
            {
                "variant": 50
            },
            {
                "variant": 51
            },
            {
                "variant": 52
            },
            {
                "variant": 53
            },
            {
                "variant": 54
            },
            {
                "variant": 45
            },
            {
                "variant": 46
            },
            {
                "variant": 47
            },
            {
                "variant": 48
            },
            {
                "variant": 49
            },
            {
                "variant": 55
            },
            {
                "variant": 56
            },
            {
                "variant": 57
            },
            {
                "variant": 58
            },
            {
                "variant": 59
            }
        ]
    }
}
```

</Spoiler>

## on_death

<Spoiler title="Show">

ender_dragon

<CodeHeader></CodeHeader>

```json
"minecraft:on_death": {
    "event": "minecraft:start_death",
    "target": "self"
}
```

</Spoiler>

## on_friendly_anger

<Spoiler title="Show">

panda

<CodeHeader>#component_groups/minecraft:panda_aggressive</CodeHeader>

```json
"minecraft:on_friendly_anger": {
    "event": "minecraft:on_anger",
    "target": "self"
}
```

polar_bear

<CodeHeader>#component_groups/minecraft:adult_wild</CodeHeader>

```json
"minecraft:on_friendly_anger": {
    "event": "minecraft:on_anger",
    "target": "self"
}
```

trader_llama

<CodeHeader>#component_groups/minecraft:llama_wandering_trader</CodeHeader>

```json
"minecraft:on_friendly_anger": {
    "event": "minecraft:defend_wandering_trader",
    "target": "self"
}
```

</Spoiler>

## on_hurt

<Spoiler title="Show">

blaze

<CodeHeader></CodeHeader>

```json
"minecraft:on_hurt": {
    "event": "minecraft:on_hurt_event",
    "target": "self"
}
```

ender_crystal

<CodeHeader></CodeHeader>

```json
"minecraft:on_hurt": {
    "event": "minecraft:crystal_explode",
    "target": "self"
}
```

pillager

<CodeHeader>#component_groups/minecraft:illager_squad_captain</CodeHeader>

```json
"minecraft:on_hurt": {
    "event": "minecraft:ranged_mode",
    "target": "self"
}
```

<CodeHeader>#component_groups/minecraft:patrol_captain</CodeHeader>

```json
"minecraft:on_hurt": {
    "event": "minecraft:ranged_mode",
    "target": "self"
}
```

<CodeHeader>#component_groups/minecraft:patrol_follower</CodeHeader>

```json
"minecraft:on_hurt": {
    "event": "minecraft:ranged_mode",
    "target": "self"
}
```

</Spoiler>

## on_hurt_by_player

<Spoiler title="Show">

blaze

<CodeHeader></CodeHeader>

```json
"minecraft:on_hurt_by_player": {
    "event": "minecraft:on_hurt_event",
    "target": "self"
}
```

pillager

<CodeHeader>#component_groups/minecraft:illager_squad_captain</CodeHeader>

```json
"minecraft:on_hurt_by_player": {
    "event": "minecraft:ranged_mode",
    "target": "self"
}
```

<CodeHeader>#component_groups/minecraft:patrol_captain</CodeHeader>

```json
"minecraft:on_hurt_by_player": {
    "event": "minecraft:ranged_mode",
    "target": "self"
}
```

<CodeHeader>#component_groups/minecraft:patrol_follower</CodeHeader>

```json
"minecraft:on_hurt_by_player": {
    "event": "minecraft:ranged_mode",
    "target": "self"
}
```

</Spoiler>

## on_start_landing

<Spoiler title="Show">

ender_dragon

<CodeHeader></CodeHeader>

```json
"minecraft:on_start_landing": {
    "event": "minecraft:start_land",
    "target": "self"
}
```

</Spoiler>

## on_start_takeoff

<Spoiler title="Show">

ender_dragon

<CodeHeader></CodeHeader>

```json
"minecraft:on_start_takeoff": {
    "event": "minecraft:start_fly",
    "target": "self"
}
```

</Spoiler>

## on_target_acquired

<Spoiler title="Show">

bee

<CodeHeader></CodeHeader>

```json
"minecraft:on_target_acquired": {
    "event": "attacked",
    "target": "self"
}
```

cave_spider

<CodeHeader>#component_groups/minecraft:spider_neutral</CodeHeader>

```json
"minecraft:on_target_acquired": {
    "event": "minecraft:become_angry"
}
```

dolphin

<CodeHeader></CodeHeader>

```json
"minecraft:on_target_acquired": {
    "event": "become_angry",
    "target": "self"
}
```

<CodeHeader>#component_groups/dolphin_angry</CodeHeader>

```json
"minecraft:on_target_acquired": {}
```

drowned

<CodeHeader></CodeHeader>

```json
"minecraft:on_target_acquired": {
    "event": "minecraft:has_target",
    "target": "self"
}
```

enderman

<CodeHeader>#component_groups/minecraft:enderman_calm</CodeHeader>

```json
"minecraft:on_target_acquired": {
    "event": "minecraft:become_angry",
    "target": "self"
}
```

hoglin

<CodeHeader>#component_groups/minecraft:hoglin_adult</CodeHeader>

```json
"minecraft:on_target_acquired": {
    "event": "become_angry_event",
    "target": "self"
}
```

llama

<CodeHeader></CodeHeader>

```json
"minecraft:on_target_acquired": {
    "filters": {
        "all_of": [
            {
                "test": "is_family",
                "subject": "target",
                "value": "wolf"
            },
            {
                "test": "has_component",
                "subject": "target",
                "operator": "!=",
                "value": "minecraft:is_tamed"
            }
        ]
    },
    "event": "minecraft:mad_at_wolf",
    "target": "self"
}
```

</Spoiler>

## on_target_escape

<Spoiler title="Show">

creeper

<CodeHeader></CodeHeader>

```json
"minecraft:on_target_escape": {
    "event": "minecraft:stop_exploding",
    "target": "self"
}
```

<CodeHeader>#component_groups/minecraft:forced_exploding</CodeHeader>

```json
"minecraft:on_target_escape": {}
```

<CodeHeader>#component_groups/minecraft:forced_charged_exploding</CodeHeader>

```json
"minecraft:on_target_escape": {}
```

dolphin

<CodeHeader></CodeHeader>

```json
"minecraft:on_target_escape": {
    "target": "self"
}
```

drowned

<CodeHeader></CodeHeader>

```json
"minecraft:on_target_escape": {
    "event": "minecraft:lost_target",
    "target": "self"
}
```

llama

<CodeHeader></CodeHeader>

```json
"minecraft:on_target_escape": {
    "filters": {
        "all_of": [
            {
                "test": "is_family",
                "subject": "target",
                "value": "wolf"
            },
            {
                "test": "has_component",
                "subject": "target",
                "operator": "!=",
                "value": "minecraft:is_tamed"
            }
        ]
    },
    "event": "minecraft:on_calm",
    "target": "self"
}
```

magma_cube

<CodeHeader></CodeHeader>

```json
"minecraft:on_target_escape": {
    "event": "minecraft:become_calm",
    "target": "self"
}
```

panda

<CodeHeader>#component_groups/minecraft:panda_adult</CodeHeader>

```json
"minecraft:on_target_escape": {
    "event": "minecraft:on_calm",
    "target": "self"
}
```

</Spoiler>

## on_wake_with_owner

<Spoiler title="Show">

cat

<CodeHeader>#component_groups/minecraft:cat_tame</CodeHeader>

```json
"minecraft:on_wake_with_owner": {
    "event": "minecraft:pet_slept_with_owner",
    "target": "self"
}
```

</Spoiler>

## out_of_control

<Spoiler title="Show">

boat

<CodeHeader>#component_groups/minecraft:above_bubble_column_down</CodeHeader>

```json
"minecraft:out_of_control": {}
```

<CodeHeader>#component_groups/minecraft:above_bubble_column_up</CodeHeader>

```json
"minecraft:out_of_control": {}
```

chest_boat

<CodeHeader>#component_groups/minecraft:above_bubble_column_down</CodeHeader>

```json
"minecraft:out_of_control": {}
```

<CodeHeader>#component_groups/minecraft:above_bubble_column_up</CodeHeader>

```json
"minecraft:out_of_control": {}
```

</Spoiler>

## peek

<Spoiler title="Show">

shulker

<CodeHeader></CodeHeader>

```json
"minecraft:peek": {
    "on_open": {
        "event": "minecraft:on_open"
    },
    "on_close": {
        "event": "minecraft:on_close"
    },
    "on_target_open": {
        "event": "minecraft:on_open"
    }
}
```

</Spoiler>

## persistent

<Spoiler title="Show">

armor_stand

<CodeHeader></CodeHeader>

```json
"minecraft:persistent": {}
```

ender_dragon

<CodeHeader></CodeHeader>

```json
"minecraft:persistent": {}
```

evocation_illager

<CodeHeader></CodeHeader>

```json
"minecraft:persistent": {}
```

<CodeHeader>#component_groups/minecraft:raid_persistence</CodeHeader>

```json
"minecraft:persistent": {}
```

iron_golem

<CodeHeader></CodeHeader>

```json
"minecraft:persistent": {}
```

npc

<CodeHeader></CodeHeader>

```json
"minecraft:persistent": {}
```

pillager

<CodeHeader>#component_groups/minecraft:raid_persistence</CodeHeader>

```json
"minecraft:persistent": {}
```

ravager

<CodeHeader>#component_groups/minecraft:raid_persistence</CodeHeader>

```json
"minecraft:persistent": {}
```

</Spoiler>

## physics

<Spoiler title="Show">

allay

<CodeHeader></CodeHeader>

```json
"minecraft:physics": {
    "has_gravity": false
}
```

area_effect_cloud

<CodeHeader></CodeHeader>

```json
"minecraft:physics": {
    "has_collision": false
}
```

armor_stand

<CodeHeader></CodeHeader>

```json
"minecraft:physics": {}
```

arrow

<CodeHeader></CodeHeader>

```json
"minecraft:physics": {}
```

axolotl

<CodeHeader></CodeHeader>

```json
"minecraft:physics": {}
```

bat

<CodeHeader></CodeHeader>

```json
"minecraft:physics": {}
```

bee

<CodeHeader></CodeHeader>

```json
"minecraft:physics": {}
```

blaze

<CodeHeader></CodeHeader>

```json
"minecraft:physics": {}
```

</Spoiler>

## player.exhaustion

<Spoiler title="Show">

player

<CodeHeader></CodeHeader>

```json
"minecraft:player.exhaustion": {
    "value": 0,
    "max": 20
}
```

</Spoiler>

## player.experience

<Spoiler title="Show">

player

<CodeHeader></CodeHeader>

```json
"minecraft:player.experience": {
    "value": 0,
    "max": 1
}
```

</Spoiler>

## player.level

<Spoiler title="Show">

player

<CodeHeader></CodeHeader>

```json
"minecraft:player.level": {
    "value": 0,
    "max": 24791
}
```

</Spoiler>

## player.saturation

<Spoiler title="Show">

player

<CodeHeader></CodeHeader>

```json
"minecraft:player.saturation": {
    "value": 5,
    "max": 20
}
```

</Spoiler>

## preferred_path

<Spoiler title="Show">

iron_golem

<CodeHeader></CodeHeader>

```json
"minecraft:preferred_path": {
    "max_fall_blocks": 1,
    "jump_cost": 5,
    "default_block_cost": 1.5,
    "preferred_path_blocks": [
        {
            "cost": 0,
            "blocks": [
                "grass_path"
            ]
        },
        {
            "cost": 1,
            "blocks": [
                "cobblestone",
                "stone",
                "stonebrick",
                "sandstone",
                "mossy_cobblestone",
                "stone_slab",
                "stone_slab2",
                "stone_slab3",
                "stone_slab4",
                "double_stone_slab",
                "double_stone_slab2",
                "double_stone_slab3",
                "double_stone_slab4",
                "wooden_slab",
                "double_wooden_slab",
                "planks",
                "brick_block",
                "nether_brick",
                "red_nether_brick",
                "end_bricks",
                "red_sandstone",
                "stained_glass",
                "glass",
                "glowstone",
                "prismarine",
                "emerald_block",
                "diamond_block",
                "lapis_block",
                "gold_block",
                "redstone_block",
                "purple_glazed_terracotta",
                "white_glazed_terracotta",
                "orange_glazed_terracotta",
                "magenta_glazed_terracotta",
                "light_blue_glazed_terracotta",
                "yellow_glazed_terracotta",
                "lime_glazed_terracotta",
                "pink_glazed_terracotta",
                "gray_glazed_terracotta",
                "silver_glazed_terracotta",
                "cyan_glazed_terracotta",
                "blue_glazed_terracotta",
                "brown_glazed_terracotta",
                "green_glazed_terracotta",
                "red_glazed_terracotta",
                "black_glazed_terracotta"
            ]
        },
        {
            "cost": 50,
            "blocks": [
                "bed",
                "lectern",
                "composter",
                "grindstone",
                "blast_furnace",
                "smoker",
                "fletching_table",
                "cartography_table",
                "brewing_stand",
                "smithing_table",
                "cauldron",
                "barrel",
                "loom",
                "stonecutter"
            ]
        }
    ]
}
```

villager_v2

<CodeHeader>#component_groups/baby</CodeHeader>

```json
"minecraft:preferred_path": {
    "max_fall_blocks": 1,
    "jump_cost": 5,
    "default_block_cost": 1.5,
    "preferred_path_blocks": [
        {
            "cost": 0,
            "blocks": [
                "grass_path"
            ]
        },
        {
            "cost": 1,
            "blocks": [
                "cobblestone",
                "stone",
                "stonebrick",
                "sandstone",
                "mossy_cobblestone",
                "stone_slab",
                "stone_slab2",
                "stone_slab3",
                "stone_slab4",
                "double_stone_slab",
                "double_stone_slab2",
                "double_stone_slab3",
                "double_stone_slab4",
                "wooden_slab",
                "double_wooden_slab",
                "planks",
                "brick_block",
                "nether_brick",
                "red_nether_brick",
                "end_bricks",
                "red_sandstone",
                "stained_glass",
                "glass",
                "glowstone",
                "prismarine",
                "emerald_block",
                "diamond_block",
                "lapis_block",
                "gold_block",
                "redstone_block",
                "purple_glazed_terracotta",
                "white_glazed_terracotta",
                "orange_glazed_terracotta",
                "magenta_glazed_terracotta",
                "light_blue_glazed_terracotta",
                "yellow_glazed_terracotta",
                "lime_glazed_terracotta",
                "pink_glazed_terracotta",
                "gray_glazed_terracotta",
                "silver_glazed_terracotta",
                "cyan_glazed_terracotta",
                "blue_glazed_terracotta",
                "brown_glazed_terracotta",
                "green_glazed_terracotta",
                "red_glazed_terracotta",
                "black_glazed_terracotta"
            ]
        },
        {
            "cost": 50,
            "blocks": [
                "bed",
                "lectern",
                "composter",
                "grindstone",
                "blast_furnace",
                "smoker",
                "fletching_table",
                "cartography_table",
                "brewing_stand",
                "smithing_table",
                "cauldron",
                "barrel",
                "loom",
                "stonecutter"
            ]
        }
    ]
}
```

<CodeHeader>#component_groups/adult</CodeHeader>

```json
"minecraft:preferred_path": {
    "max_fall_blocks": 1,
    "jump_cost": 20,
    "default_block_cost": 3,
    "preferred_path_blocks": [
        {
            "cost": 0,
            "blocks": [
                "grass_path"
            ]
        },
        {
            "cost": 1,
            "blocks": [
                "cobblestone",
                "stone",
                "stonebrick",
                "sandstone",
                "mossy_cobblestone",
                "stone_slab",
                "stone_slab2",
                "stone_slab3",
                "stone_slab4",
                "double_stone_slab",
                "double_stone_slab2",
                "double_stone_slab3",
                "double_stone_slab4",
                "wooden_slab",
                "double_wooden_slab",
                "planks",
                "brick_block",
                "nether_brick",
                "red_nether_brick",
                "end_bricks",
                "red_sandstone",
                "stained_glass",
                "glass",
                "glowstone",
                "prismarine",
                "emerald_block",
                "diamond_block",
                "lapis_block",
                "gold_block",
                "redstone_block",
                "purple_glazed_terracotta",
                "white_glazed_terracotta",
                "orange_glazed_terracotta",
                "magenta_glazed_terracotta",
                "light_blue_glazed_terracotta",
                "yellow_glazed_terracotta",
                "lime_glazed_terracotta",
                "pink_glazed_terracotta",
                "gray_glazed_terracotta",
                "silver_glazed_terracotta",
                "cyan_glazed_terracotta",
                "blue_glazed_terracotta",
                "brown_glazed_terracotta",
                "green_glazed_terracotta",
                "red_glazed_terracotta",
                "black_glazed_terracotta"
            ]
        },
        {
            "cost": 50,
            "blocks": [
                "bed",
                "lectern",
                "composter",
                "grindstone",
                "blast_furnace",
                "smoker",
                "fletching_table",
                "cartography_table",
                "brewing_stand",
                "smithing_table",
                "cauldron",
                "barrel",
                "loom",
                "stonecutter"
            ]
        }
    ]
}
```

warden

<CodeHeader></CodeHeader>

```json
"minecraft:preferred_path": {
    "max_fall_blocks": 20
}
```

</Spoiler>

## projectile

<Spoiler title="Show">

arrow

<CodeHeader></CodeHeader>

```json
"minecraft:projectile": {
    "on_hit": {
        "impact_damage": {
            "damage": [
                1,
                4
            ],
            "knockback": true,
            "semi_random_diff_damage": false,
            "destroy_on_hit": true
        },
        "stick_in_ground": {
            "shake_time": 0.35
        },
        "arrow_effect": {}
    },
    "hit_sound": "bow.hit",
    "power": 1.6,
    "gravity": 0.05,
    "uncertainty_base": 16,
    "uncertainty_multiplier": 4,
    "anchor": 1,
    "should_bounce": true,
    "offset": [
        0,
        -0.1,
        0
    ]
}
```

<CodeHeader>#component_groups/minecraft:hard_arrow</CodeHeader>

```json
"minecraft:projectile": {
    "on_hit": {
        "impact_damage": {
            "damage": [
                1,
                5
            ],
            "knockback": true,
            "semi_random_diff_damage": false,
            "destroy_on_hit": true
        },
        "stick_in_ground": {
            "shake_time": 0.35
        },
        "arrow_effect": {}
    },
    "hit_sound": "bow.hit",
    "power": 1.6,
    "gravity": 0.05,
    "uncertainty_base": 16,
    "uncertainty_multiplier": 4,
    "anchor": 1,
    "should_bounce": true,
    "offset": [
        0,
        -0.1,
        0
    ]
}
```

<CodeHeader>#component_groups/minecraft:player_arrow</CodeHeader>

```json
"minecraft:projectile": {
    "on_hit": {
        "impact_damage": {
            "damage": 1,
            "knockback": true,
            "semi_random_diff_damage": true,
            "destroy_on_hit": true,
            "max_critical_damage": 10,
            "min_critical_damage": 9,
            "power_multiplier": 0.97
        },
        "stick_in_ground": {
            "shake_time": 0.35
        },
        "arrow_effect": {}
    },
    "hit_sound": "bow.hit",
    "power": 5.0,
    "gravity": 0.05,
    "uncertainty_base": 1,
    "uncertainty_multiplier": 0,
    "anchor": 1,
    "should_bounce": true,
    "offset": [
        0,
        -0.1,
        0
    ]
}
```

dragon_fireball

<CodeHeader></CodeHeader>

```json
"minecraft:projectile": {
    "on_hit": {
        "spawn_aoe_cloud": {
            "radius": 6.0,
            "radius_on_use": 0,
            "potion": 23,
            "particle": "dragonbreath",
            "duration": 120,
            "color": [
                220,
                0,
                239
            ],
            "affect_owner": false,
            "reapplication_delay": 20
        },
        "remove_on_hit": {}
    },
    "power": 1.3,
    "gravity": 0.0,
    "inertia": 1,
    "anchor": 2,
    "offset": [
        0,
        0.5,
        0
    ],
    "semi_random_diff_damage": true,
    "uncertainty_base": 10.0,
    "reflect_on_hurt": true,
    "hit_sound": "explode"
}
```

egg

<CodeHeader></CodeHeader>

```json
"minecraft:projectile": {
    "on_hit": {
        "impact_damage": {
            "damage": 0,
            "knockback": true,
            "destroy_on_hit": true
        },
        "spawn_chance": {
            "first_spawn_chance": 8,
            "second_spawn_chance": 32,
            "first_spawn_count": 1,
            "second_spawn_count": 4,
            "spawn_definition": "minecraft:chicken",
            "spawn_baby": true
        },
        "remove_on_hit": {},
        "particle_on_hit": {
            "particle_type": "iconcrack",
            "num_particles": 6,
            "on_entity_hit": true,
            "on_other_hit": true
        }
    },
    "power": 1.5,
    "gravity": 0.03,
    "angle_offset": 0.0
}
```

ender_pearl

<CodeHeader></CodeHeader>

```json
"minecraft:projectile": {
    "on_hit": {
        "teleport_owner": {},
        "spawn_chance": {
            "first_spawn_percent_chance": 5.0,
            "first_spawn_count": 1,
            "spawn_definition": "minecraft:endermite"
        },
        "remove_on_hit": {}
    },
    "power": 1.5,
    "gravity": 0.025,
    "angle_offset": 0.0,
    "inertia": 1,
    "liquid_inertia": 1
}
```

<CodeHeader>#component_groups/minecraft:no_spawn</CodeHeader>

```json
"minecraft:projectile": {
    "on_hit": {
        "teleport_owner": {},
        "remove_on_hit": {}
    },
    "power": 1.5,
    "gravity": 0.025,
    "angle_offset": 0.0,
    "inertia": 1,
    "liquid_inertia": 1
}
```

fireball

<CodeHeader></CodeHeader>

```json
"minecraft:projectile": {
    "on_hit": {
        "impact_damage": {
            "damage": 6,
            "knockback": false,
            "semi_random_diff_damage": false
        },
        "definition_event": {
            "affect_projectile": true,
            "event_trigger": {
                "event": "minecraft:explode",
                "target": "self"
            }
        }
    },
    "power": 1.6,
    "gravity": 0.0,
    "inertia": 1,
    "liquid_inertia": 1,
    "uncertainty_base": 0,
    "uncertainty_multiplier": 0,
    "anchor": 1,
    "offset": [
        0,
        -0.1,
        0
    ],
    "reflect_on_hurt": true,
    "catch_fire": true
}
```

</Spoiler>

## pushable

<Spoiler title="Show">

allay

<CodeHeader></CodeHeader>

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

armor_stand

<CodeHeader></CodeHeader>

```json
"minecraft:pushable": {
    "is_pushable": false,
    "is_pushable_by_piston": true
}
```

arrow

<CodeHeader></CodeHeader>

```json
"minecraft:pushable": {
    "is_pushable": false,
    "is_pushable_by_piston": true
}
```

axolotl

<CodeHeader></CodeHeader>

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

bee

<CodeHeader></CodeHeader>

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

blaze

<CodeHeader></CodeHeader>

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

boat

<CodeHeader></CodeHeader>

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

cat

<CodeHeader></CodeHeader>

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

</Spoiler>

## raid_trigger

<Spoiler title="Show">

player

<CodeHeader>#component_groups/minecraft:raid_trigger</CodeHeader>

```json
"minecraft:raid_trigger": {
    "triggered_event": {
        "event": "minecraft:remove_raid_trigger",
        "target": "self"
    }
}
```

</Spoiler>

## rail_movement

<Spoiler title="Show">

chest_minecart

<CodeHeader></CodeHeader>

```json
"minecraft:rail_movement": {}
```

command_block_minecart

<CodeHeader></CodeHeader>

```json
"minecraft:rail_movement": {}
```

hopper_minecart

<CodeHeader></CodeHeader>

```json
"minecraft:rail_movement": {}
```

minecart

<CodeHeader></CodeHeader>

```json
"minecraft:rail_movement": {}
```

tnt_minecart

<CodeHeader></CodeHeader>

```json
"minecraft:rail_movement": {}
```

</Spoiler>

## rail_sensor

<Spoiler title="Show">

command_block_minecart

<CodeHeader>#component_groups/minecraft:command_block_active</CodeHeader>

```json
"minecraft:rail_sensor": {
    "check_block_types": true,
    "eject_on_activate": false,
    "eject_on_deactivate": false,
    "tick_command_block_on_activate": true,
    "tick_command_block_on_deactivate": false,
    "on_deactivate": {
        "event": "minecraft:command_block_deactivate"
    }
}
```

<CodeHeader>#component_groups/minecraft:command_block_inactive</CodeHeader>

```json
"minecraft:rail_sensor": {
    "check_block_types": false,
    "eject_on_activate": false,
    "eject_on_deactivate": false,
    "tick_command_block_on_activate": true,
    "tick_command_block_on_deactivate": false,
    "on_activate": {
        "event": "minecraft:command_block_activate"
    }
}
```

hopper_minecart

<CodeHeader>#component_groups/minecraft:hopper_active</CodeHeader>

```json
"minecraft:rail_sensor": {
    "on_activate": {
        "event": "minecraft:hopper_deactivate"
    }
}
```

<CodeHeader>#component_groups/minecraft:hopper_inactive</CodeHeader>

```json
"minecraft:rail_sensor": {
    "on_deactivate": {
        "event": "minecraft:hopper_activate"
    }
}
```

minecart

<CodeHeader></CodeHeader>

```json
"minecraft:rail_sensor": {
    "eject_on_activate": true
}
```

tnt_minecart

<CodeHeader>#component_groups/minecraft:primed_tnt</CodeHeader>

```json
"minecraft:rail_sensor": {}
```

<CodeHeader>#component_groups/minecraft:instant_explode_tnt</CodeHeader>

```json
"minecraft:rail_sensor": {}
```

<CodeHeader>#component_groups/minecraft:inactive</CodeHeader>

```json
"minecraft:rail_sensor": {
    "on_activate": {
        "filters": {
            "all_of": [
                {
                    "test": "is_game_rule",
                    "domain": "tntexplodes",
                    "operator": "==",
                    "value": true
                }
            ]
        },
        "event": "minecraft:on_prime"
    }
}
```

</Spoiler>

## ravager_blocked

<Spoiler title="Show">

ravager

<CodeHeader></CodeHeader>

```json
"minecraft:ravager_blocked": {
    "knockback_strength": 3.0,
    "reaction_choices": [
        {
            "weight": 1,
            "value": {
                "event": "minecraft:become_stunned",
                "target": "self"
            }
        },
        {
            "weight": 1
        }
    ]
}
```

</Spoiler>

## rideable

<Spoiler title="Show">

boat

<CodeHeader></CodeHeader>

```json
"minecraft:rideable": {
    "seat_count": 2,
    "interact_text": "action.interact.ride.boat",
    "pull_in_entities": true,
    "seats": [
        {
            "position": [
                0.0,
                -0.2,
                0.0
            ],
            "min_rider_count": 0,
            "max_rider_count": 1,
            "rotate_rider_by": -90,
            "lock_rider_rotation": 90
        },
        {
            "position": [
                0.2,
                -0.2,
                0.0
            ],
            "min_rider_count": 2,
            "max_rider_count": 2,
            "rotate_rider_by": "query.has_any_family('blaze', 'creeper', 'enderman', 'illager', 'magmacube', 'piglin', 'player', 'skeleton', 'slime', 'villager', 'wandering_trader', 'witch', 'zombie', 'zombie_pigman') ? -90 : 0",
            "lock_rider_rotation": 90
        },
        {
            "position": [
                -0.6,
                -0.2,
                0.0
            ],
            "min_rider_count": 2,
            "max_rider_count": 2,
            "rotate_rider_by": "query.has_any_family('blaze', 'creeper', 'enderman', 'illager', 'magmacube', 'piglin', 'player', 'skeleton', 'slime', 'villager', 'wandering_trader', 'witch', 'zombie', 'zombie_pigman') ? -90 : 0",
            "lock_rider_rotation": 90
        }
    ]
}
```

<CodeHeader>#component_groups/minecraft:can_ride</CodeHeader>

```json
"minecraft:rideable": {
    "seat_count": 2,
    "interact_text": "action.interact.ride.boat",
    "pull_in_entities": true,
    "seats": [
        {
            "position": [
                0.0,
                -0.2,
                0.0
            ],
            "min_rider_count": 0,
            "max_rider_count": 1,
            "rotate_rider_by": -90,
            "lock_rider_rotation": 90
        },
        {
            "position": [
                0.2,
                -0.2,
                0.0
            ],
            "min_rider_count": 2,
            "max_rider_count": 2,
            "rotate_rider_by": "query.has_any_family('blaze', 'creeper', 'enderman', 'illager', 'magmacube', 'piglin', 'player', 'skeleton', 'slime', 'villager', 'wandering_trader', 'witch', 'zombie', 'zombie_pigman') ? -90 : 0",
            "lock_rider_rotation": 90
        },
        {
            "position": [
                -0.6,
                -0.2,
                0.0
            ],
            "min_rider_count": 2,
            "max_rider_count": 2,
            "rotate_rider_by": "query.has_any_family('blaze', 'creeper', 'enderman', 'illager', 'magmacube', 'piglin', 'player', 'skeleton', 'slime', 'villager', 'wandering_trader', 'witch', 'zombie', 'zombie_pigman') ? -90 : 0",
            "lock_rider_rotation": 90
        }
    ]
}
```

cat

<CodeHeader>#component_groups/minecraft:cat_wild</CodeHeader>

```json
"minecraft:rideable": {
    "seat_count": 1,
    "family_types": [
        "zombie"
    ],
    "seats": {
        "position": [
            0.0,
            0.35,
            0.0
        ]
    }
}
```

cave_spider

<CodeHeader></CodeHeader>

```json
"minecraft:rideable": {
    "seat_count": 1,
    "family_types": [
        "zombie"
    ],
    "seats": {
        "position": [
            0.0,
            0.3,
            0.0
        ]
    }
}
```

<CodeHeader>#component_groups/minecraft:spider_jockey</CodeHeader>

```json
"minecraft:rideable": {
    "seat_count": 1,
    "family_types": [
        "skeleton"
    ],
    "seats": {
        "position": [
            0.0,
            0.3,
            -0.1
        ]
    }
}
```

<CodeHeader>#component_groups/minecraft:spider_stray_jockey</CodeHeader>

```json
"minecraft:rideable": {
    "seat_count": 1,
    "family_types": [
        "skeleton"
    ],
    "seats": {
        "position": [
            0.0,
            0.3,
            -0.1
        ]
    }
}
```

chest_boat

<CodeHeader></CodeHeader>

```json
"minecraft:rideable": {
    "seat_count": 1,
    "interact_text": "action.interact.ride.boat",
    "pull_in_entities": true,
    "seats": [
        {
            "position": [
                0.2,
                -0.2,
                0.0
            ],
            "min_rider_count": 0,
            "max_rider_count": 1,
            "rotate_rider_by": "query.has_any_family('blaze', 'creeper', 'enderman', 'illager', 'magmacube', 'piglin', 'player', 'skeleton', 'slime', 'villager', 'wandering_trader', 'witch', 'zombie', 'zombie_pigman') ? -90 : 0",
            "lock_rider_rotation": 90
        }
    ]
}
```

<CodeHeader>#component_groups/minecraft:can_ride</CodeHeader>

```json
"minecraft:rideable": {
    "seat_count": 1,
    "interact_text": "action.interact.ride.boat",
    "pull_in_entities": true,
    "seats": [
        {
            "position": [
                0.2,
                -0.2,
                0.0
            ],
            "min_rider_count": 0,
            "max_rider_count": 1,
            "rotate_rider_by": "query.has_any_family('blaze', 'creeper', 'enderman', 'illager', 'magmacube', 'piglin', 'player', 'skeleton', 'slime', 'villager', 'wandering_trader', 'witch', 'zombie', 'zombie_pigman') ? -90 : 0",
            "lock_rider_rotation": 90
        }
    ]
}
```

</Spoiler>

## scale

<Spoiler title="Show">

axolotl

<CodeHeader>#component_groups/axolotl_baby</CodeHeader>

```json
"minecraft:scale": {
    "value": 0.5
}
```

bee

<CodeHeader>#component_groups/bee_baby</CodeHeader>

```json
"minecraft:scale": {
    "value": 0.5
}
```

cat

<CodeHeader>#component_groups/minecraft:cat_baby</CodeHeader>

```json
"minecraft:scale": {
    "value": 0.4
}
```

<CodeHeader>#component_groups/minecraft:cat_adult</CodeHeader>

```json
"minecraft:scale": {
    "value": 0.8
}
```

chicken

<CodeHeader>#component_groups/minecraft:chicken_baby</CodeHeader>

```json
"minecraft:scale": {
    "value": 0.5
}
```

cow

<CodeHeader>#component_groups/minecraft:cow_baby</CodeHeader>

```json
"minecraft:scale": {
    "value": 0.5
}
```

dolphin

<CodeHeader>#component_groups/dolphin_baby</CodeHeader>

```json
"minecraft:scale": {
    "value": 0.65
}
```

drowned

<CodeHeader>#component_groups/minecraft:baby_drowned</CodeHeader>

```json
"minecraft:scale": {
    "value": 0.5
}
```

</Spoiler>

## scale_by_age

<Spoiler title="Show">

donkey

<CodeHeader>#component_groups/minecraft:donkey_baby</CodeHeader>

```json
"minecraft:scale_by_age": {
    "start_scale": 0.5,
    "end_scale": 1.0
}
```

horse

<CodeHeader>#component_groups/minecraft:horse_baby</CodeHeader>

```json
"minecraft:scale_by_age": {
    "start_scale": 0.5,
    "end_scale": 1.0
}
```

mule

<CodeHeader>#component_groups/minecraft:mule_baby</CodeHeader>

```json
"minecraft:scale_by_age": {
    "start_scale": 0.5,
    "end_scale": 1.0
}
```

skeleton_horse

<CodeHeader>#component_groups/minecraft:skeleton_horse_baby</CodeHeader>

```json
"minecraft:scale_by_age": {
    "start_scale": 0.5,
    "end_scale": 1.0
}
```

zombie_horse

<CodeHeader>#component_groups/minecraft:horse_baby</CodeHeader>

```json
"minecraft:scale_by_age": {
    "start_scale": 0.5,
    "end_scale": 1.0
}
```

</Spoiler>

## scheduler

<Spoiler title="Show">

fox

<CodeHeader></CodeHeader>

```json
"minecraft:scheduler": {
    "min_delay_secs": 0,
    "max_delay_secs": 0,
    "scheduled_events": [
        {
            "filters": [
                {
                    "test": "is_sleeping",
                    "value": true
                }
            ],
            "event": "minecraft:ambient_sleep"
        },
        {
            "filters": {
                "all_of": [
                    {
                        "test": "is_daytime",
                        "value": false
                    },
                    {
                        "test": "distance_to_nearest_player",
                        "operator": ">",
                        "value": 16
                    }
                ]
            },
            "event": "minecraft:ambient_night"
        },
        {
            "filters": {
                "all_of": [
                    {
                        "test": "is_sleeping",
                        "value": false
                    },
                    {
                        "any_of": [
                            {
                                "test": "is_daytime",
                                "value": true
                            },
                            {
                                "test": "distance_to_nearest_player",
                                "operator": "<=",
                                "value": 16
                            }
                        ]
                    }
                ]
            },
            "event": "minecraft:ambient_normal"
        }
    ]
}
```

villager_v2

<CodeHeader>#component_groups/work_schedule</CodeHeader>

```json
"minecraft:scheduler": {
    "min_delay_secs": 0,
    "max_delay_secs": 10,
    "scheduled_events": [
        {
            "filters": {
                "all_of": [
                    {
                        "test": "hourly_clock_time",
                        "operator": ">=",
                        "value": 0
                    },
                    {
                        "test": "hourly_clock_time",
                        "operator": "<",
                        "value": 8000
                    }
                ]
            },
            "event": "minecraft:schedule_work_pro_villager"
        },
        {
            "filters": {
                "all_of": [
                    {
                        "test": "hourly_clock_time",
                        "operator": ">=",
                        "value": 8000
                    },
                    {
                        "test": "hourly_clock_time",
                        "operator": "<",
                        "value": 10000
                    }
                ]
            },
            "event": "minecraft:schedule_gather_villager"
        },
        {
            "filters": {
                "all_of": [
                    {
                        "test": "hourly_clock_time",
                        "operator": ">=",
                        "value": 10000
                    },
                    {
                        "test": "hourly_clock_time",
                        "operator": "<",
                        "value": 11000
                    }
                ]
            },
            "event": "minecraft:schedule_work_pro_villager"
        },
        {
            "filters": {
                "all_of": [
                    {
                        "test": "hourly_clock_time",
                        "operator": ">=",
                        "value": 11000
                    },
                    {
                        "test": "hourly_clock_time",
                        "operator": "<",
                        "value": 12000
                    }
                ]
            },
            "event": "minecraft:schedule_home_villager"
        },
        {
            "filters": {
                "all_of": [
                    {
                        "test": "hourly_clock_time",
                        "operator": ">=",
                        "value": 12000
                    },
                    {
                        "test": "hourly_clock_time",
                        "operator": "<",
                        "value": 24000
                    }
                ]
            },
            "event": "minecraft:schedule_bed_villager"
        }
    ]
}
```

<CodeHeader>#component_groups/basic_schedule</CodeHeader>

```json
"minecraft:scheduler": {
    "min_delay_secs": 0,
    "max_delay_secs": 10,
    "scheduled_events": [
        {
            "filters": {
                "all_of": [
                    {
                        "test": "hourly_clock_time",
                        "operator": ">=",
                        "value": 0
                    },
                    {
                        "test": "hourly_clock_time",
                        "operator": "<",
                        "value": 8000
                    }
                ]
            },
            "event": "minecraft:schedule_wander_villager"
        },
        {
            "filters": {
                "all_of": [
                    {
                        "test": "hourly_clock_time",
                        "operator": ">=",
                        "value": 8000
                    },
                    {
                        "test": "hourly_clock_time",
                        "operator": "<",
                        "value": 10000
                    }
                ]
            },
            "event": "minecraft:schedule_gather_villager"
        },
        {
            "filters": {
                "all_of": [
                    {
                        "test": "hourly_clock_time",
                        "operator": ">=",
                        "value": 10000
                    },
                    {
                        "test": "hourly_clock_time",
                        "operator": "<",
                        "value": 11000
                    }
                ]
            },
            "event": "minecraft:schedule_wander_villager"
        },
        {
            "filters": {
                "all_of": [
                    {
                        "test": "hourly_clock_time",
                        "operator": ">=",
                        "value": 11000
                    },
                    {
                        "test": "hourly_clock_time",
                        "operator": "<",
                        "value": 12000
                    }
                ]
            },
            "event": "minecraft:schedule_home_villager"
        },
        {
            "filters": {
                "all_of": [
                    {
                        "test": "hourly_clock_time",
                        "operator": ">=",
                        "value": 12000
                    },
                    {
                        "test": "hourly_clock_time",
                        "operator": "<",
                        "value": 24000
                    }
                ]
            },
            "event": "minecraft:schedule_bed_villager"
        }
    ]
}
```

<CodeHeader>#component_groups/child_schedule</CodeHeader>

```json
"minecraft:scheduler": {
    "min_delay_secs": 0,
    "max_delay_secs": 10,
    "scheduled_events": [
        {
            "filters": {
                "all_of": [
                    {
                        "test": "hourly_clock_time",
                        "operator": ">=",
                        "value": 0
                    },
                    {
                        "test": "hourly_clock_time",
                        "operator": "<",
                        "value": 11000
                    }
                ]
            },
            "event": "minecraft:schedule_play_villager"
        },
        {
            "filters": {
                "all_of": [
                    {
                        "test": "hourly_clock_time",
                        "operator": ">=",
                        "value": 11000
                    },
                    {
                        "test": "hourly_clock_time",
                        "operator": "<",
                        "value": 12000
                    }
                ]
            },
            "event": "minecraft:schedule_home_villager"
        },
        {
            "filters": {
                "all_of": [
                    {
                        "test": "hourly_clock_time",
                        "operator": ">=",
                        "value": 12000
                    },
                    {
                        "test": "hourly_clock_time",
                        "operator": "<",
                        "value": 24000
                    }
                ]
            },
            "event": "minecraft:schedule_bed_villager"
        }
    ]
}
```

</Spoiler>

## shareables

<Spoiler title="Show">

drowned

<CodeHeader></CodeHeader>

```json
"minecraft:shareables": {
    "items": [
        {
            "item": "minecraft:nautilus_shell",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 0
        },
        {
            "item": "minecraft:trident",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 1
        },
        {
            "item": "minecraft:netherite_sword",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 2
        },
        {
            "item": "minecraft:diamond_sword",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 3
        },
        {
            "item": "minecraft:iron_sword",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 4
        },
        {
            "item": "minecraft:stone_sword",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 5
        },
        {
            "item": "minecraft:golden_sword",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 6
        },
        {
            "item": "minecraft:wooden_sword",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 7
        },
        {
            "item": "minecraft:netherite_helmet",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 0
        },
        {
            "item": "minecraft:diamond_helmet",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 1
        },
        {
            "item": "minecraft:iron_helmet",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 2
        },
        {
            "item": "minecraft:chainmail_helmet",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 3
        },
        {
            "item": "minecraft:golden_helmet",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 4
        },
        {
            "item": "minecraft:leather_helmet",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 5
        },
        {
            "item": "minecraft:turtle_helmet",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 6
        },
        {
            "item": "minecraft:skull:0",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 7
        },
        {
            "item": "minecraft:skull:1",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 7
        },
        {
            "item": "minecraft:carved_pumpkin",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 7
        },
        {
            "item": "minecraft:netherite_chestplate",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 0
        },
        {
            "item": "minecraft:diamond_chestplate",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 1
        },
        {
            "item": "minecraft:iron_chestplate",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 2
        },
        {
            "item": "minecraft:chainmail_chestplate",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 3
        },
        {
            "item": "minecraft:golden_chestplate",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 4
        },
        {
            "item": "minecraft:leather_chestplate",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 5
        },
        {
            "item": "minecraft:netherite_leggings",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 0
        },
        {
            "item": "minecraft:diamond_leggings",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 1
        },
        {
            "item": "minecraft:iron_leggings",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 2
        },
        {
            "item": "minecraft:chainmail_leggings",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 3
        },
        {
            "item": "minecraft:golden_leggings",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 4
        },
        {
            "item": "minecraft:leather_leggings",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 5
        },
        {
            "item": "minecraft:netherite_boots",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 0
        },
        {
            "item": "minecraft:diamond_boots",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 1
        },
        {
            "item": "minecraft:iron_boots",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 2
        },
        {
            "item": "minecraft:chainmail_boots",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 3
        },
        {
            "item": "minecraft:golden_boots",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 4
        },
        {
            "item": "minecraft:leather_boots",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 5
        }
    ]
}
```

fox

<CodeHeader></CodeHeader>

```json
"minecraft:shareables": {
    "all_items": true,
    "all_items_max_amount": 1,
    "items": [
        {
            "item": "minecraft:apple",
            "priority": 0,
            "max_amount": 1
        },
        {
            "item": "minecraft:appleEnchanted",
            "priority": 0,
            "max_amount": 1
        },
        {
            "item": "minecraft:baked_potato",
            "priority": 0,
            "max_amount": 1
        },
        {
            "item": "minecraft:beef",
            "priority": 0,
            "max_amount": 1
        },
        {
            "item": "minecraft:beetroot",
            "priority": 0,
            "max_amount": 1
        },
        {
            "item": "minecraft:beetroot_soup",
            "priority": 0,
            "max_amount": 1
        },
        {
            "item": "minecraft:bread",
            "priority": 0,
            "max_amount": 1
        },
        {
            "item": "minecraft:carrot",
            "priority": 0,
            "max_amount": 1
        },
        {
            "item": "minecraft:chicken",
            "priority": 0,
            "max_amount": 1
        },
        {
            "item": "minecraft:chorus_fruit",
            "priority": 0,
            "max_amount": 1
        },
        {
            "item": "minecraft:clownfish",
            "priority": 0,
            "max_amount": 1
        },
        {
            "item": "minecraft:cooked_beef",
            "priority": 0,
            "max_amount": 1
        },
        {
            "item": "minecraft:cooked_chicken",
            "priority": 0,
            "max_amount": 1
        },
        {
            "item": "minecraft:cooked_fish",
            "priority": 0,
            "max_amount": 1
        },
        {
            "item": "minecraft:cooked_porkchop",
            "priority": 0,
            "max_amount": 1
        },
        {
            "item": "minecraft:cooked_rabbit",
            "priority": 0,
            "max_amount": 1
        },
        {
            "item": "minecraft:cooked_salmon",
            "priority": 0,
            "max_amount": 1
        },
        {
            "item": "minecraft:cookie",
            "priority": 0,
            "max_amount": 1
        },
        {
            "item": "minecraft:dried_kelp",
            "priority": 0,
            "max_amount": 1
        },
        {
            "item": "minecraft:fish",
            "priority": 0,
            "max_amount": 1
        },
        {
            "item": "minecraft:golden_apple",
            "priority": 0,
            "max_amount": 1
        },
        {
            "item": "minecraft:golden_carrot",
            "priority": 0,
            "max_amount": 1
        },
        {
            "item": "minecraft:melon",
            "priority": 0,
            "max_amount": 1
        },
        {
            "item": "minecraft:mushroom_stew",
            "priority": 0,
            "max_amount": 1
        },
        {
            "item": "minecraft:muttonCooked",
            "priority": 0,
            "max_amount": 1
        },
        {
            "item": "minecraft:muttonRaw",
            "priority": 0,
            "max_amount": 1
        },
        {
            "item": "minecraft:poisonous_potato",
            "priority": 0,
            "max_amount": 1
        },
        {
            "item": "minecraft:porkchop",
            "priority": 0,
            "max_amount": 1
        },
        {
            "item": "minecraft:potato",
            "priority": 0,
            "max_amount": 1
        },
        {
            "item": "minecraft:pufferfish",
            "priority": 0,
            "max_amount": 1
        },
        {
            "item": "minecraft:pumpkin_pie",
            "priority": 0,
            "max_amount": 1
        },
        {
            "item": "minecraft:rabbit",
            "priority": 0,
            "max_amount": 1
        },
        {
            "item": "minecraft:rabbit_stew",
            "priority": 0,
            "max_amount": 1
        },
        {
            "item": "minecraft:rotten_flesh",
            "priority": 0,
            "max_amount": 1
        },
        {
            "item": "minecraft:salmon",
            "priority": 0,
            "max_amount": 1
        },
        {
            "item": "minecraft:spider_eye",
            "priority": 0,
            "max_amount": 1
        },
        {
            "item": "minecraft:sweet_berries",
            "priority": 0,
            "max_amount": 1
        },
        {
            "item": "minecraft:glow_berries",
            "priority": 0,
            "max_amount": 1
        },
        {
            "item": "minecraft:suspicious_stew",
            "priority": 0,
            "max_amount": 1
        }
    ]
}
```

husk

<CodeHeader></CodeHeader>

```json
"minecraft:shareables": {
    "items": [
        {
            "item": "minecraft:netherite_sword",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 0
        },
        {
            "item": "minecraft:diamond_sword",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 1
        },
        {
            "item": "minecraft:iron_sword",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 2
        },
        {
            "item": "minecraft:golden_sword",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 3
        },
        {
            "item": "minecraft:stone_sword",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 4
        },
        {
            "item": "minecraft:wooden_sword",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 5
        },
        {
            "item": "minecraft:netherite_helmet",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 0
        },
        {
            "item": "minecraft:diamond_helmet",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 1
        },
        {
            "item": "minecraft:iron_helmet",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 2
        },
        {
            "item": "minecraft:chainmail_helmet",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 3
        },
        {
            "item": "minecraft:golden_helmet",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 4
        },
        {
            "item": "minecraft:leather_helmet",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 5
        },
        {
            "item": "minecraft:turtle_helmet",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 6
        },
        {
            "item": "minecraft:skull:0",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 7
        },
        {
            "item": "minecraft:skull:1",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 7
        },
        {
            "item": "minecraft:carved_pumpkin",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 7
        },
        {
            "item": "minecraft:netherite_chestplate",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 0
        },
        {
            "item": "minecraft:diamond_chestplate",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 1
        },
        {
            "item": "minecraft:iron_chestplate",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 2
        },
        {
            "item": "minecraft:chainmail_chestplate",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 3
        },
        {
            "item": "minecraft:golden_chestplate",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 4
        },
        {
            "item": "minecraft:leather_chestplate",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 5
        },
        {
            "item": "minecraft:netherite_leggings",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 0
        },
        {
            "item": "minecraft:diamond_leggings",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 1
        },
        {
            "item": "minecraft:iron_leggings",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 2
        },
        {
            "item": "minecraft:chainmail_leggings",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 3
        },
        {
            "item": "minecraft:golden_leggings",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 4
        },
        {
            "item": "minecraft:leather_leggings",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 5
        },
        {
            "item": "minecraft:netherite_boots",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 0
        },
        {
            "item": "minecraft:diamond_boots",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 1
        },
        {
            "item": "minecraft:iron_boots",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 2
        },
        {
            "item": "minecraft:chainmail_boots",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 3
        },
        {
            "item": "minecraft:golden_boots",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 4
        },
        {
            "item": "minecraft:leather_boots",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 5
        }
    ]
}
```

piglin

<CodeHeader></CodeHeader>

```json
"minecraft:shareables": {
    "items": [
        {
            "item": "minecraft:golden_sword",
            "priority": 2,
            "admire": true,
            "pickup_limit": 1,
            "stored_in_inventory": true
        },
        {
            "item": "minecraft:golden_axe",
            "priority": 2,
            "admire": true,
            "pickup_limit": 1,
            "stored_in_inventory": true
        },
        {
            "item": "minecraft:golden_hoe",
            "priority": 2,
            "admire": true,
            "pickup_limit": 1,
            "stored_in_inventory": true
        },
        {
            "item": "minecraft:golden_pickaxe",
            "priority": 2,
            "admire": true,
            "pickup_limit": 1,
            "stored_in_inventory": true
        },
        {
            "item": "minecraft:golden_shovel",
            "priority": 2,
            "admire": true,
            "pickup_limit": 1,
            "stored_in_inventory": true
        },
        {
            "item": "minecraft:golden_rail",
            "priority": 2,
            "admire": true,
            "pickup_limit": 1,
            "stored_in_inventory": true
        },
        {
            "item": "minecraft:golden_helmet",
            "priority": 2,
            "admire": true,
            "pickup_limit": 1,
            "stored_in_inventory": true
        },
        {
            "item": "minecraft:golden_chestplate",
            "priority": 2,
            "admire": true,
            "pickup_limit": 1,
            "stored_in_inventory": true
        },
        {
            "item": "minecraft:golden_leggings",
            "priority": 2,
            "admire": true,
            "pickup_limit": 1,
            "stored_in_inventory": true
        },
        {
            "item": "minecraft:golden_boots",
            "priority": 2,
            "admire": true,
            "pickup_limit": 1,
            "stored_in_inventory": true
        },
        {
            "item": "minecraft:golden_apple",
            "priority": 2,
            "admire": true,
            "pickup_limit": 1,
            "stored_in_inventory": true
        },
        {
            "item": "minecraft:appleEnchanted",
            "priority": 2,
            "admire": true,
            "pickup_limit": 1,
            "stored_in_inventory": true
        },
        {
            "item": "minecraft:golden_carrot",
            "priority": 2,
            "admire": true,
            "pickup_limit": 1,
            "stored_in_inventory": true
        },
        {
            "item": "minecraft:gold_block",
            "priority": 2,
            "admire": true,
            "pickup_limit": 1,
            "stored_in_inventory": true
        },
        {
            "item": "minecraft:gold_nugget",
            "priority": 2,
            "stored_in_inventory": true
        },
        {
            "item": "minecraft:raw_gold",
            "priority": 2,
            "admire": true,
            "pickup_limit": 1,
            "stored_in_inventory": true
        },
        {
            "item": "minecraft:gold_ore",
            "priority": 2,
            "admire": true,
            "pickup_limit": 1,
            "stored_in_inventory": true
        },
        {
            "item": "minecraft:nether_gold_ore",
            "priority": 2,
            "admire": true,
            "pickup_limit": 1,
            "stored_in_inventory": true
        },
        {
            "item": "minecraft:deepslate_gold_ore",
            "priority": 2,
            "admire": true,
            "pickup_limit": 1,
            "stored_in_inventory": true
        },
        {
            "item": "minecraft:raw_gold_block",
            "priority": 2,
            "admire": true,
            "pickup_limit": 1,
            "stored_in_inventory": true
        },
        {
            "item": "minecraft:gilded_blackstone",
            "priority": 2,
            "admire": true,
            "pickup_limit": 1,
            "stored_in_inventory": true
        },
        {
            "item": "minecraft:horsearmorgold",
            "priority": 2,
            "admire": true,
            "pickup_limit": 1,
            "stored_in_inventory": true
        },
        {
            "item": "minecraft:crossbow",
            "priority": 2
        },
        {
            "item": "minecraft:porkchop",
            "consume_item": true,
            "priority": 3,
            "max_amount": 64
        },
        {
            "item": "minecraft:cooked_porkchop",
            "consume_item": true,
            "priority": 3,
            "max_amount": 64
        },
        {
            "item": "minecraft:netherite_helmet",
            "priority": 3
        },
        {
            "item": "minecraft:diamond_helmet",
            "priority": 4
        },
        {
            "item": "minecraft:iron_helmet",
            "priority": 5
        },
        {
            "item": "minecraft:chainmail_helmet",
            "priority": 6
        },
        {
            "item": "minecraft:leather_helmet",
            "priority": 7
        },
        {
            "item": "minecraft:skull:0",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 8
        },
        {
            "item": "minecraft:skull:1",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 8
        },
        {
            "item": "minecraft:skull:2",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 8
        },
        {
            "item": "minecraft:skull:3",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 8
        },
        {
            "item": "minecraft:skull:4",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 8
        },
        {
            "item": "minecraft:skull:5",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 8
        },
        {
            "item": "minecraft:carved_pumpkin",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 8
        },
        {
            "item": "minecraft:turtle_helmet",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 8
        },
        {
            "item": "minecraft:netherite_chestplate",
            "priority": 3
        },
        {
            "item": "minecraft:diamond_chestplate",
            "priority": 4
        },
        {
            "item": "minecraft:iron_chestplate",
            "priority": 5
        },
        {
            "item": "minecraft:chainmail_chestplate",
            "priority": 6
        },
        {
            "item": "minecraft:leather_chestplate",
            "priority": 7
        },
        {
            "item": "minecraft:elytra",
            "priority": 7
        },
        {
            "item": "minecraft:netherite_leggings",
            "priority": 3
        },
        {
            "item": "minecraft:diamond_leggings",
            "priority": 4
        },
        {
            "item": "minecraft:iron_leggings",
            "priority": 5
        },
        {
            "item": "minecraft:chainmail_leggings",
            "priority": 6
        },
        {
            "item": "minecraft:leather_leggings",
            "priority": 7
        },
        {
            "item": "minecraft:netherite_boots",
            "priority": 3
        },
        {
            "item": "minecraft:diamond_boots",
            "priority": 4
        },
        {
            "item": "minecraft:iron_boots",
            "priority": 5
        },
        {
            "item": "minecraft:chainmail_boots",
            "priority": 6
        },
        {
            "item": "minecraft:bell",
            "priority": 2,
            "admire": true,
            "pickup_limit": 1,
            "stored_in_inventory": true
        },
        {
            "item": "minecraft:clock",
            "priority": 2,
            "admire": true,
            "pickup_limit": 1,
            "stored_in_inventory": true
        },
        {
            "item": "minecraft:speckled_melon",
            "priority": 2,
            "admire": true,
            "pickup_limit": 1,
            "stored_in_inventory": true
        },
        {
            "item": "minecraft:light_weighted_pressure_plate",
            "priority": 2,
            "admire": true,
            "pickup_limit": 1,
            "stored_in_inventory": true
        },
        {
            "item": "minecraft:leather_boots",
            "priority": 7
        },
        {
            "item": "minecraft:netherite_sword",
            "priority": 3
        },
        {
            "item": "minecraft:diamond_sword",
            "priority": 4
        },
        {
            "item": "minecraft:iron_sword",
            "priority": 5
        },
        {
            "item": "minecraft:stone_sword",
            "priority": 6
        },
        {
            "item": "minecraft:wooden_sword",
            "priority": 7
        },
        {
            "item": "minecraft:shield",
            "priority": 7
        },
        {
            "item": "minecraft:gold_ingot",
            "priority": 1,
            "pickup_limit": 1,
            "admire": true,
            "barter": true
        }
    ]
}
```

pillager

<CodeHeader></CodeHeader>

```json
"minecraft:shareables": {
    "items": [
        {
            "item": "minecraft:banner:15",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 0
        }
    ]
}
```

skeleton

<CodeHeader></CodeHeader>

```json
"minecraft:shareables": {
    "items": [
        {
            "item": "minecraft:netherite_sword",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 0
        },
        {
            "item": "minecraft:diamond_sword",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 1
        },
        {
            "item": "minecraft:iron_sword",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 2
        },
        {
            "item": "minecraft:stone_sword",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 3
        },
        {
            "item": "minecraft:golden_sword",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 4
        },
        {
            "item": "minecraft:wooden_sword",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 5
        },
        {
            "item": "minecraft:bow",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 6
        },
        {
            "item": "minecraft:netherite_helmet",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 0
        },
        {
            "item": "minecraft:diamond_helmet",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 1
        },
        {
            "item": "minecraft:iron_helmet",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 2
        },
        {
            "item": "minecraft:chainmail_helmet",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 3
        },
        {
            "item": "minecraft:golden_helmet",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 4
        },
        {
            "item": "minecraft:leather_helmet",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 5
        },
        {
            "item": "minecraft:turtle_helmet",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 6
        },
        {
            "item": "minecraft:skull:0",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 7
        },
        {
            "item": "minecraft:skull:1",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 7
        },
        {
            "item": "minecraft:carved_pumpkin",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 7
        },
        {
            "item": "minecraft:netherite_chestplate",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 0
        },
        {
            "item": "minecraft:diamond_chestplate",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 1
        },
        {
            "item": "minecraft:iron_chestplate",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 2
        },
        {
            "item": "minecraft:chainmail_chestplate",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 3
        },
        {
            "item": "minecraft:golden_chestplate",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 4
        },
        {
            "item": "minecraft:leather_chestplate",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 5
        },
        {
            "item": "minecraft:netherite_leggings",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 0
        },
        {
            "item": "minecraft:diamond_leggings",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 1
        },
        {
            "item": "minecraft:iron_leggings",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 2
        },
        {
            "item": "minecraft:chainmail_leggings",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 3
        },
        {
            "item": "minecraft:golden_leggings",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 4
        },
        {
            "item": "minecraft:leather_leggings",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 5
        },
        {
            "item": "minecraft:netherite_boots",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 0
        },
        {
            "item": "minecraft:diamond_boots",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 1
        },
        {
            "item": "minecraft:iron_boots",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 2
        },
        {
            "item": "minecraft:chainmail_boots",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 3
        },
        {
            "item": "minecraft:golden_boots",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 4
        },
        {
            "item": "minecraft:leather_boots",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 5
        }
    ]
}
```

stray

<CodeHeader></CodeHeader>

```json
"minecraft:shareables": {
    "items": [
        {
            "item": "minecraft:netherite_sword",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 0
        },
        {
            "item": "minecraft:diamond_sword",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 1
        },
        {
            "item": "minecraft:iron_sword",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 2
        },
        {
            "item": "minecraft:stone_sword",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 3
        },
        {
            "item": "minecraft:golden_sword",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 4
        },
        {
            "item": "minecraft:wooden_sword",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 5
        },
        {
            "item": "minecraft:bow",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 6
        },
        {
            "item": "minecraft:netherite_helmet",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 0
        },
        {
            "item": "minecraft:diamond_helmet",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 1
        },
        {
            "item": "minecraft:iron_helmet",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 2
        },
        {
            "item": "minecraft:chainmail_helmet",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 3
        },
        {
            "item": "minecraft:golden_helmet",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 4
        },
        {
            "item": "minecraft:leather_helmet",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 5
        },
        {
            "item": "minecraft:turtle_helmet",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 6
        },
        {
            "item": "minecraft:skull:0",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 7
        },
        {
            "item": "minecraft:skull:1",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 7
        },
        {
            "item": "minecraft:carved_pumpkin",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 7
        },
        {
            "item": "minecraft:netherite_chestplate",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 0
        },
        {
            "item": "minecraft:diamond_chestplate",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 1
        },
        {
            "item": "minecraft:iron_chestplate",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 2
        },
        {
            "item": "minecraft:chainmail_chestplate",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 3
        },
        {
            "item": "minecraft:golden_chestplate",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 4
        },
        {
            "item": "minecraft:leather_chestplate",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 5
        },
        {
            "item": "minecraft:netherite_leggings",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 0
        },
        {
            "item": "minecraft:diamond_leggings",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 1
        },
        {
            "item": "minecraft:iron_leggings",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 2
        },
        {
            "item": "minecraft:chainmail_leggings",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 3
        },
        {
            "item": "minecraft:golden_leggings",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 4
        },
        {
            "item": "minecraft:leather_leggings",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 5
        },
        {
            "item": "minecraft:netherite_boots",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 0
        },
        {
            "item": "minecraft:diamond_boots",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 1
        },
        {
            "item": "minecraft:iron_boots",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 2
        },
        {
            "item": "minecraft:chainmail_boots",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 3
        },
        {
            "item": "minecraft:golden_boots",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 4
        },
        {
            "item": "minecraft:leather_boots",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 5
        }
    ]
}
```

villager

<CodeHeader>#component_groups/behavior_peasant</CodeHeader>

```json
"minecraft:shareables": {
    "items": [
        {
            "item": "minecraft:bread",
            "want_amount": 3,
            "surplus_amount": 6,
            "stored_in_inventory": true
        },
        {
            "item": "minecraft:carrot",
            "want_amount": 60,
            "surplus_amount": 4,
            "stored_in_inventory": true
        },
        {
            "item": "minecraft:potato",
            "want_amount": 60,
            "surplus_amount": 24,
            "stored_in_inventory": true
        },
        {
            "item": "minecraft:beetroot",
            "want_amount": 60,
            "surplus_amount": 24,
            "stored_in_inventory": true
        },
        {
            "item": "minecraft:wheat_seeds",
            "want_amount": 64,
            "surplus_amount": 64,
            "stored_in_inventory": true,
            "pickup_only": true
        },
        {
            "item": "minecraft:beetroot_seeds",
            "want_amount": 64,
            "surplus_amount": 64,
            "stored_in_inventory": true,
            "pickup_only": true
        },
        {
            "item": "minecraft:wheat",
            "want_amount": 45,
            "surplus_amount": 18,
            "craft_into": "minecraft:bread",
            "stored_in_inventory": true
        }
    ]
}
```

</Spoiler>

## shooter

<Spoiler title="Show">

blaze

<CodeHeader>#component_groups/ranged_mode</CodeHeader>

```json
"minecraft:shooter": {
    "def": "minecraft:small_fireball"
}
```

drowned

<CodeHeader>#component_groups/minecraft:ranged_mode</CodeHeader>

```json
"minecraft:shooter": {
    "def": "minecraft:thrown_trident"
}
```

ender_dragon

<CodeHeader>#component_groups/dragon_flying</CodeHeader>

```json
"minecraft:shooter": {
    "type": "dragonfireball",
    "def": "minecraft:dragon_fireball"
}
```

ghast

<CodeHeader></CodeHeader>

```json
"minecraft:shooter": {
    "def": "minecraft:fireball"
}
```

llama

<CodeHeader></CodeHeader>

```json
"minecraft:shooter": {
    "def": "minecraft:llama_spit"
}
```

piglin

<CodeHeader>#component_groups/ranged_unit</CodeHeader>

```json
"minecraft:shooter": {
    "def": "minecraft:arrow"
}
```

pillager

<CodeHeader>#component_groups/minecraft:ranged_attack</CodeHeader>

```json
"minecraft:shooter": {
    "def": "minecraft:arrow"
}
```

shulker

<CodeHeader></CodeHeader>

```json
"minecraft:shooter": {
    "def": "minecraft:shulker_bullet"
}
```

</Spoiler>

## sittable

<Spoiler title="Show">

cat

<CodeHeader>#component_groups/minecraft:cat_tame</CodeHeader>

```json
"minecraft:sittable": {}
```

ocelot

<CodeHeader>#component_groups/minecraft:ocelot_tame</CodeHeader>

```json
"minecraft:sittable": {}
```

parrot

<CodeHeader>#component_groups/minecraft:parrot_tame</CodeHeader>

```json
"minecraft:sittable": {}
```

wolf

<CodeHeader>#component_groups/minecraft:wolf_tame</CodeHeader>

```json
"minecraft:sittable": {}
```

</Spoiler>

## skin_id

<Spoiler title="Show">

villager_v2

<CodeHeader>#component_groups/villager_skin_0</CodeHeader>

```json
"minecraft:skin_id": {
    "value": 0
}
```

<CodeHeader>#component_groups/villager_skin_1</CodeHeader>

```json
"minecraft:skin_id": {
    "value": 1
}
```

<CodeHeader>#component_groups/villager_skin_2</CodeHeader>

```json
"minecraft:skin_id": {
    "value": 2
}
```

zombie_villager_v2

<CodeHeader>#component_groups/villager_skin_0</CodeHeader>

```json
"minecraft:skin_id": {
    "value": 0
}
```

<CodeHeader>#component_groups/villager_skin_1</CodeHeader>

```json
"minecraft:skin_id": {
    "value": 1
}
```

<CodeHeader>#component_groups/villager_skin_2</CodeHeader>

```json
"minecraft:skin_id": {
    "value": 2
}
```

</Spoiler>

## spawn_entity

<Spoiler title="Show">

chicken

<CodeHeader>#component_groups/minecraft:chicken_adult</CodeHeader>

```json
"minecraft:spawn_entity": {
    "entities": {
        "min_wait_time": 300,
        "max_wait_time": 600,
        "spawn_sound": "plop",
        "spawn_item": "egg",
        "filters": {
            "test": "rider_count",
            "subject": "self",
            "operator": "==",
            "value": 0
        }
    }
}
```

ocelot

<CodeHeader>#component_groups/minecraft:wild_child_ocelot_spawn</CodeHeader>

```json
"minecraft:spawn_entity": {
    "entities": {
        "filters": [
            {
                "test": "random_chance",
                "value": 7
            }
        ],
        "min_wait_time": 0,
        "max_wait_time": 0,
        "num_to_spawn": 2,
        "single_use": true,
        "spawn_entity": "minecraft:ocelot",
        "spawn_event": "minecraft:entity_born",
        "spawn_method": "born",
        "spawn_sound": ""
    }
}
```

wandering_trader

<CodeHeader></CodeHeader>

```json
"minecraft:spawn_entity": {
    "entities": [
        {
            "min_wait_time": 0,
            "max_wait_time": 0,
            "spawn_entity": "trader_llama",
            "spawn_event": "minecraft:from_wandering_trader",
            "single_use": true,
            "num_to_spawn": 2,
            "should_leash": true
        }
    ]
}
```

</Spoiler>

## spell_effects

<Spoiler title="Show">

player

<CodeHeader>#component_groups/minecraft:add_bad_omen</CodeHeader>

```json
"minecraft:spell_effects": {
    "add_effects": [
        {
            "effect": "bad_omen",
            "duration": 6000,
            "visible": false,
            "display_on_screen_animation": true
        }
    ]
}
```

<CodeHeader>#component_groups/minecraft:clear_bad_omen_spell_effect</CodeHeader>

```json
"minecraft:spell_effects": {}
```

<CodeHeader>#component_groups/minecraft:raid_trigger</CodeHeader>

```json
"minecraft:spell_effects": {
    "remove_effects": "bad_omen"
}
```

zombie_villager

<CodeHeader>#component_groups/to_villager</CodeHeader>

```json
"minecraft:spell_effects": {
    "add_effects": [
        {
            "effect": "strength",
            "duration": 100
        },
        {
            "effect": "heal",
            "duration": 100
        }
    ],
    "remove_effects": "weakness"
}
```

zombie_villager_v2

<CodeHeader>#component_groups/to_villager</CodeHeader>

```json
"minecraft:spell_effects": {
    "add_effects": [
        {
            "effect": "strength",
            "duration": 100
        },
        {
            "effect": "heal",
            "duration": 100
        }
    ],
    "remove_effects": "weakness"
}
```

</Spoiler>

## strength

<Spoiler title="Show">

llama

<CodeHeader>#component_groups/minecraft:strength_1</CodeHeader>

```json
"minecraft:strength": {
    "value": 1,
    "max": 5
}
```

<CodeHeader>#component_groups/minecraft:strength_2</CodeHeader>

```json
"minecraft:strength": {
    "value": 2,
    "max": 5
}
```

<CodeHeader>#component_groups/minecraft:strength_3</CodeHeader>

```json
"minecraft:strength": {
    "value": 3,
    "max": 5
}
```

trader_llama

<CodeHeader>#component_groups/minecraft:strength_1</CodeHeader>

```json
"minecraft:strength": {
    "value": 1,
    "max": 5
}
```

<CodeHeader>#component_groups/minecraft:strength_2</CodeHeader>

```json
"minecraft:strength": {
    "value": 2,
    "max": 5
}
```

<CodeHeader>#component_groups/minecraft:strength_3</CodeHeader>

```json
"minecraft:strength": {
    "value": 3,
    "max": 5
}
```

</Spoiler>

## suspect_tracking

<Spoiler title="Show">

warden

<CodeHeader></CodeHeader>

```json
"minecraft:suspect_tracking": {}
```

</Spoiler>

## tameable

<Spoiler title="Show">

cat

<CodeHeader>#component_groups/minecraft:cat_wild</CodeHeader>

```json
"minecraft:tameable": {
    "probability": 0.33,
    "tame_items": [
        "fish",
        "salmon"
    ],
    "tame_event": {
        "event": "minecraft:on_tame",
        "target": "self"
    }
}
```

parrot

<CodeHeader>#component_groups/minecraft:parrot_wild</CodeHeader>

```json
"minecraft:tameable": {
    "probability": 0.33,
    "tame_items": [
        "wheat_seeds",
        "pumpkin_seeds",
        "melon_seeds",
        "beetroot_seeds"
    ],
    "tame_event": {
        "event": "minecraft:on_tame",
        "target": "self"
    }
}
```

wolf

<CodeHeader>#component_groups/minecraft:wolf_wild</CodeHeader>

```json
"minecraft:tameable": {
    "probability": 0.33,
    "tame_items": "bone",
    "tame_event": {
        "event": "minecraft:on_tame",
        "target": "self"
    }
}
```

</Spoiler>

## tamemount

<Spoiler title="Show">

donkey

<CodeHeader>#component_groups/minecraft:donkey_wild</CodeHeader>

```json
"minecraft:tamemount": {
    "min_temper": 0,
    "max_temper": 100,
    "feed_text": "action.interact.feed",
    "ride_text": "action.interact.mount",
    "feed_items": [
        {
            "item": "wheat",
            "temper_mod": 3
        },
        {
            "item": "sugar",
            "temper_mod": 3
        },
        {
            "item": "apple",
            "temper_mod": 3
        },
        {
            "item": "golden_carrot",
            "temper_mod": 5
        },
        {
            "item": "golden_apple",
            "temper_mod": 10
        },
        {
            "item": "appleEnchanted",
            "temper_mod": 10
        }
    ],
    "auto_reject_items": [
        {
            "item": "horsearmorleather"
        },
        {
            "item": "horsearmoriron"
        },
        {
            "item": "horsearmorgold"
        },
        {
            "item": "horsearmordiamond"
        },
        {
            "item": "saddle"
        }
    ],
    "tame_event": {
        "event": "minecraft:on_tame",
        "target": "self"
    }
}
```

horse

<CodeHeader>#component_groups/minecraft:horse_wild</CodeHeader>

```json
"minecraft:tamemount": {
    "min_temper": 0,
    "max_temper": 100,
    "feed_text": "action.interact.feed",
    "ride_text": "action.interact.mount",
    "feed_items": [
        {
            "item": "wheat",
            "temper_mod": 3
        },
        {
            "item": "sugar",
            "temper_mod": 3
        },
        {
            "item": "apple",
            "temper_mod": 3
        },
        {
            "item": "golden_carrot",
            "temper_mod": 5
        },
        {
            "item": "golden_apple",
            "temper_mod": 10
        },
        {
            "item": "appleEnchanted",
            "temper_mod": 10
        }
    ],
    "auto_reject_items": [
        {
            "item": "horsearmorleather"
        },
        {
            "item": "horsearmoriron"
        },
        {
            "item": "horsearmorgold"
        },
        {
            "item": "horsearmordiamond"
        },
        {
            "item": "saddle"
        }
    ],
    "tame_event": {
        "event": "minecraft:on_tame",
        "target": "self"
    }
}
```

llama

<CodeHeader>#component_groups/minecraft:llama_wild</CodeHeader>

```json
"minecraft:tamemount": {
    "min_temper": 0,
    "max_temper": 30,
    "feed_text": "action.interact.feed",
    "ride_text": "action.interact.mount",
    "feed_items": [
        {
            "item": "wheat",
            "temper_mod": 3
        },
        {
            "item": "hay_block",
            "temper_mod": 6
        }
    ],
    "tame_event": {
        "event": "minecraft:on_tame",
        "target": "self"
    }
}
```

mule

<CodeHeader>#component_groups/minecraft:mule_wild</CodeHeader>

```json
"minecraft:tamemount": {
    "min_temper": 0,
    "max_temper": 100,
    "feed_text": "action.interact.feed",
    "ride_text": "action.interact.mount",
    "feed_items": [
        {
            "item": "wheat",
            "temper_mod": 3
        },
        {
            "item": "sugar",
            "temper_mod": 3
        },
        {
            "item": "apple",
            "temper_mod": 3
        },
        {
            "item": "golden_carrot",
            "temper_mod": 5
        },
        {
            "item": "golden_apple",
            "temper_mod": 10
        },
        {
            "item": "appleEnchanted",
            "temper_mod": 10
        }
    ],
    "auto_reject_items": [
        {
            "item": "horsearmorleather"
        },
        {
            "item": "horsearmoriron"
        },
        {
            "item": "horsearmorgold"
        },
        {
            "item": "horsearmordiamond"
        },
        {
            "item": "saddle"
        }
    ],
    "tame_event": {
        "event": "minecraft:on_tame",
        "target": "self"
    }
}
```

trader_llama

<CodeHeader>#component_groups/minecraft:llama_wild</CodeHeader>

```json
"minecraft:tamemount": {
    "min_temper": 0,
    "max_temper": 30,
    "feed_text": "action.interact.feed",
    "ride_text": "action.interact.mount",
    "feed_items": [
        {
            "item": "wheat",
            "temper_mod": 3
        },
        {
            "item": "hay_block",
            "temper_mod": 6
        }
    ],
    "auto_reject_items": [
        {
            "item": "horsearmorleather"
        },
        {
            "item": "horsearmoriron"
        },
        {
            "item": "horsearmorgold"
        },
        {
            "item": "horsearmordiamond"
        },
        {
            "item": "saddle"
        }
    ],
    "tame_event": {
        "event": "minecraft:on_tame",
        "target": "self"
    }
}
```

</Spoiler>

## target_nearby_sensor

<Spoiler title="Show">

blaze

<CodeHeader>#component_groups/mode_switcher</CodeHeader>

```json
"minecraft:target_nearby_sensor": {
    "inside_range": 2.0,
    "outside_range": 3.0,
    "must_see": true,
    "on_inside_range": {
        "event": "switch_to_melee",
        "target": "self"
    },
    "on_outside_range": {
        "event": "switch_to_ranged",
        "target": "self"
    }
}
```

creeper

<CodeHeader></CodeHeader>

```json
"minecraft:target_nearby_sensor": {
    "inside_range": 2.5,
    "outside_range": 6.0,
    "must_see": true,
    "on_inside_range": {
        "event": "minecraft:start_exploding",
        "target": "self"
    },
    "on_outside_range": {
        "event": "minecraft:stop_exploding",
        "target": "self"
    },
    "on_vision_lost_inside_range": {
        "event": "minecraft:stop_exploding",
        "target": "self"
    }
}
```

<CodeHeader>#component_groups/minecraft:forced_exploding</CodeHeader>

```json
"minecraft:target_nearby_sensor": {}
```

<CodeHeader>#component_groups/minecraft:forced_charged_exploding</CodeHeader>

```json
"minecraft:target_nearby_sensor": {}
```

drowned

<CodeHeader>#component_groups/minecraft:mode_switcher</CodeHeader>

```json
"minecraft:target_nearby_sensor": {
    "inside_range": 3.0,
    "outside_range": 5.0,
    "on_inside_range": {
        "event": "minecraft:switch_to_melee",
        "target": "self"
    },
    "on_outside_range": {
        "event": "minecraft:switch_to_ranged",
        "target": "self"
    }
}
```

guardian

<CodeHeader></CodeHeader>

```json
"minecraft:target_nearby_sensor": {
    "inside_range": 3.0,
    "outside_range": 4.0,
    "on_inside_range": {
        "event": "minecraft:target_too_close",
        "target": "self"
    }
}
```

<CodeHeader>#component_groups/minecraft:guardian_aggressive</CodeHeader>

```json
"minecraft:target_nearby_sensor": {
    "inside_range": 3.0,
    "outside_range": 4.0,
    "on_inside_range": {
        "event": "minecraft:target_too_close",
        "target": "self"
    }
}
```

</Spoiler>

## teleport

<Spoiler title="Show">

enderman

<CodeHeader></CodeHeader>

```json
"minecraft:teleport": {
    "random_teleports": true,
    "max_random_teleport_time": 30,
    "random_teleport_cube": [
        32,
        32,
        32
    ],
    "target_distance": 16,
    "target_teleport_chance": 0.05,
    "light_teleport_chance": 0.05
}
```

</Spoiler>

## timer

<Spoiler title="Show">

allay

<CodeHeader>#component_groups/pickup_item_delay</CodeHeader>

```json
"minecraft:timer": {
    "looping": false,
    "time": 3,
    "time_down_event": {
        "event": "pickup_item_delay_complete"
    }
}
```

bee

<CodeHeader>#component_groups/escape_fire</CodeHeader>

```json
"minecraft:timer": {
    "looping": false,
    "time": [
        20,
        50
    ],
    "randomInterval": true,
    "time_down_event": {
        "event": "stop_panicking_after_fire",
        "target": "self"
    }
}
```

<CodeHeader>#component_groups/countdown_to_perish</CodeHeader>

```json
"minecraft:timer": {
    "looping": false,
    "time": [
        10,
        60
    ],
    "randomInterval": true,
    "time_down_event": {
        "event": "perish_event",
        "target": "self"
    }
}
```

<CodeHeader>#component_groups/take_nearest_target</CodeHeader>

```json
"minecraft:timer": {
    "looping": true,
    "time": 5,
    "time_down_event": {
        "event": "calmed_down",
        "target": "self"
    }
}
```

boat

<CodeHeader>#component_groups/minecraft:above_bubble_column_down</CodeHeader>

```json
"minecraft:timer": {
    "looping": false,
    "time": 3,
    "time_down_event": {
        "event": "minecraft:sink",
        "target": "self"
    }
}
```

chest_boat

<CodeHeader>#component_groups/minecraft:above_bubble_column_down</CodeHeader>

```json
"minecraft:timer": {
    "looping": false,
    "time": 3,
    "time_down_event": {
        "event": "minecraft:sink",
        "target": "self"
    }
}
```

guardian

<CodeHeader>#component_groups/minecraft:guardian_passive</CodeHeader>

```json
"minecraft:timer": {
    "time": [
        1,
        3
    ],
    "looping": false,
    "time_down_event": {
        "event": "minecraft:target_far_enough",
        "target": "self"
    }
}
```

hoglin

<CodeHeader>#component_groups/start_zombification</CodeHeader>

```json
"minecraft:timer": {
    "looping": false,
    "time": 15,
    "time_down_event": {
        "event": "become_zombie_event"
    }
}
```

</Spoiler>

## trade_resupply

<Spoiler title="Show">

villager_v2

<CodeHeader>#component_groups/trade_resupply_component_group</CodeHeader>

```json
"minecraft:trade_resupply": {}
```

</Spoiler>

## trade_table

<Spoiler title="Show">

villager

<CodeHeader>#component_groups/farmer</CodeHeader>

```json
"minecraft:trade_table": {
    "display_name": "entity.villager.farmer",
    "table": "trading/farmer_trades.json",
    "convert_trades_economy": true
}
```

<CodeHeader>#component_groups/fisherman</CodeHeader>

```json
"minecraft:trade_table": {
    "display_name": "entity.villager.fisherman",
    "table": "trading/fisherman_trades.json",
    "convert_trades_economy": true
}
```

<CodeHeader>#component_groups/shepherd</CodeHeader>

```json
"minecraft:trade_table": {
    "display_name": "entity.villager.shepherd",
    "table": "trading/shepherd_trades.json",
    "convert_trades_economy": true
}
```

</Spoiler>

## trail

<Spoiler title="Show">

snow_golem

<CodeHeader></CodeHeader>

```json
"minecraft:trail": {
    "block_type": "minecraft:snow_layer",
    "spawn_filter": {
        "test": "is_temperature_value",
        "operator": "<",
        "value": 0.81
    }
}
```

</Spoiler>

## transformation

<Spoiler title="Show">

hoglin

<CodeHeader>#component_groups/become_zombie</CodeHeader>

```json
"minecraft:transformation": {
    "into": "minecraft:zoglin",
    "transformation_sound": "converted_to_zombified",
    "keep_level": true
}
```

husk

<CodeHeader>#component_groups/minecraft:convert_to_zombie</CodeHeader>

```json
"minecraft:transformation": {
    "into": "minecraft:zombie<minecraft:as_adult>",
    "transformation_sound": "convert_to_drowned",
    "drop_equipment": true,
    "delay": {
        "value": 15
    }
}
```

<CodeHeader>#component_groups/minecraft:convert_to_baby_zombie</CodeHeader>

```json
"minecraft:transformation": {
    "into": "minecraft:zombie<minecraft:as_baby>",
    "transformation_sound": "convert_to_drowned",
    "drop_equipment": true,
    "delay": {
        "value": 15
    }
}
```

mooshroom

<CodeHeader>#component_groups/minecraft:mooshroom_become_cow</CodeHeader>

```json
"minecraft:transformation": {
    "into": "minecraft:cow"
}
```

pig

<CodeHeader>#component_groups/minecraft:pig_transform</CodeHeader>

```json
"minecraft:transformation": {
    "into": "minecraft:pig_zombie",
    "delay": 0.5
}
```

piglin

<CodeHeader>#component_groups/become_zombie</CodeHeader>

```json
"minecraft:transformation": {
    "into": "minecraft:zombie_pigman",
    "transformation_sound": "converted_to_zombified",
    "keep_level": true,
    "drop_inventory": true,
    "preserve_equipment": true
}
```

piglin_brute

<CodeHeader>#component_groups/become_zombie</CodeHeader>

```json
"minecraft:transformation": {
    "into": "minecraft:zombie_pigman",
    "transformation_sound": "converted_to_zombified",
    "keep_level": true,
    "preserve_equipment": true
}
```

skeleton

<CodeHeader>#component_groups/become_stray</CodeHeader>

```json
"minecraft:transformation": {
    "into": "minecraft:stray",
    "transformation_sound": "convert_to_stray",
    "keep_level": true,
    "drop_inventory": true,
    "preserve_equipment": true
}
```

</Spoiler>

## trust

<Spoiler title="Show">

fox

<CodeHeader>#component_groups/minecraft:trusting_fox</CodeHeader>

```json
"minecraft:trust": {}
```

</Spoiler>

## trusting

<Spoiler title="Show">

ocelot

<CodeHeader>#component_groups/minecraft:ocelot_wild</CodeHeader>

```json
"minecraft:trusting": {
    "probability": 0.33,
    "trust_items": [
        "fish",
        "salmon"
    ],
    "trust_event": {
        "event": "minecraft:on_trust",
        "target": "self"
    }
}
```

</Spoiler>

## type_family

<Spoiler title="Show">

allay

<CodeHeader></CodeHeader>

```json
"minecraft:type_family": {
    "family": [
        "allay",
        "mob"
    ]
}
```

armor_stand

<CodeHeader></CodeHeader>

```json
"minecraft:type_family": {
    "family": [
        "armor_stand",
        "inanimate",
        "mob"
    ]
}
```

axolotl

<CodeHeader></CodeHeader>

```json
"minecraft:type_family": {
    "family": [
        "axolotl",
        "mob"
    ]
}
```

bat

<CodeHeader></CodeHeader>

```json
"minecraft:type_family": {
    "family": [
        "bat",
        "mob"
    ]
}
```

bee

<CodeHeader></CodeHeader>

```json
"minecraft:type_family": {
    "family": [
        "bee",
        "mob",
        "arthropod"
    ]
}
```

<CodeHeader>#component_groups/countdown_to_perish</CodeHeader>

```json
"minecraft:type_family": {
    "family": [
        "bee",
        "mob",
        "arthropod",
        "pacified"
    ]
}
```

blaze

<CodeHeader></CodeHeader>

```json
"minecraft:type_family": {
    "family": [
        "blaze",
        "monster",
        "mob"
    ]
}
```

boat

<CodeHeader></CodeHeader>

```json
"minecraft:type_family": {
    "family": [
        "boat",
        "inanimate"
    ]
}
```

</Spoiler>

## underwater_movement

<Spoiler title="Show">

axolotl

<CodeHeader></CodeHeader>

```json
"minecraft:underwater_movement": {
    "value": 0.2
}
```

dolphin

<CodeHeader></CodeHeader>

```json
"minecraft:underwater_movement": {
    "value": 0.15
}
```

drowned

<CodeHeader></CodeHeader>

```json
"minecraft:underwater_movement": {
    "value": 0.06
}
```

<CodeHeader>#component_groups/minecraft:baby_drowned</CodeHeader>

```json
"minecraft:underwater_movement": {
    "value": 0.08
}
```

elder_guardian

<CodeHeader></CodeHeader>

```json
"minecraft:underwater_movement": {
    "value": 0.3
}
```

cod

<CodeHeader></CodeHeader>

```json
"minecraft:underwater_movement": {
    "value": 0.1
}
```

frog

<CodeHeader></CodeHeader>

```json
"minecraft:underwater_movement": {
    "value": 0.15
}
```

guardian

<CodeHeader></CodeHeader>

```json
"minecraft:underwater_movement": {
    "value": 0.12
}
```

</Spoiler>

## variable_max_auto_step

<Spoiler title="Show">

enderman

<CodeHeader></CodeHeader>

```json
"minecraft:variable_max_auto_step": {
    "base_value": 1.0625,
    "jump_prevented_value": 0.5625
}
```

</Spoiler>

## variant

<Spoiler title="Show">

axolotl

<CodeHeader>#component_groups/axolotl_lucy</CodeHeader>

```json
"minecraft:variant": {
    "value": 0
}
```

<CodeHeader>#component_groups/axolotl_cyan</CodeHeader>

```json
"minecraft:variant": {
    "value": 1
}
```

<CodeHeader>#component_groups/axolotl_gold</CodeHeader>

```json
"minecraft:variant": {
    "value": 2
}
```

cat

<CodeHeader>#component_groups/minecraft:cat_white</CodeHeader>

```json
"minecraft:variant": {
    "value": 0
}
```

<CodeHeader>#component_groups/minecraft:cat_tuxedo</CodeHeader>

```json
"minecraft:variant": {
    "value": 1
}
```

<CodeHeader>#component_groups/minecraft:cat_red</CodeHeader>

```json
"minecraft:variant": {
    "value": 2
}
```

fox

<CodeHeader>#component_groups/minecraft:fox_red</CodeHeader>

```json
"minecraft:variant": {
    "value": 0
}
```

<CodeHeader>#component_groups/minecraft:fox_arctic</CodeHeader>

```json
"minecraft:variant": {
    "value": 1
}
```

</Spoiler>

## vibration_damper

<Spoiler title="Show">

warden

<CodeHeader></CodeHeader>

```json
"minecraft:vibration_damper": {}
```

</Spoiler>

## vibration_listener

<Spoiler title="Show">

allay

<CodeHeader></CodeHeader>

```json
"minecraft:vibration_listener": {}
```

warden

<CodeHeader></CodeHeader>

```json
"minecraft:vibration_listener": {}
```

</Spoiler>

## water_movement

<Spoiler title="Show">

panda

<CodeHeader></CodeHeader>

```json
"minecraft:water_movement": {
    "drag_factor": 0.98
}
```

polar_bear

<CodeHeader></CodeHeader>

```json
"minecraft:water_movement": {
    "drag_factor": 0.98
}
```

turtle

<CodeHeader></CodeHeader>

```json
"minecraft:water_movement": {
    "drag_factor": 0.9
}
```

</Spoiler>

