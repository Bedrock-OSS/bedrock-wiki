---
title: Vanilla Usage Components - Full
category: Documentation
mentions:
    - MedicalJewel105
hidden: true
---

This page was created with [Wiki Content Generator](https://github.com/Bedrock-OSS/bedrock-wiki-content-generator). If there are issues, contact us on [Bedrock OSS](https://discord.gg/XjV87YN) Discord server.
Includes all examples. Namespace `minecraft` and some formatting have been removed to make the page load quickly. *Last updated for 1.19.70*

## addrider

cave_spider

```json
"minecraft:addrider": {
    "entity_type": "minecraft:skeleton"
}
```

```json
"minecraft:addrider": {
    "entity_type": "minecraft:skeleton.stray"
}
```

```json
"minecraft:addrider": {
    "entity_type": "minecraft:skeleton.wither"
}
```

ravager

```json
"minecraft:addrider": {
    "entity_type": "minecraft:pillager"
}
```

```json
"minecraft:addrider": {
    "entity_type": "minecraft:pillager",
    "spawn_event": "minecraft:spawn_for_raid"
}
```

```json
"minecraft:addrider": {
    "entity_type": "minecraft:evocation_illager",
    "spawn_event": "minecraft:spawn_for_raid"
}
```

```json
"minecraft:addrider": {
    "entity_type": "minecraft:pillager",
    "spawn_event": "minecraft:spawn_as_illager_captain"
}
```

```json
"minecraft:addrider": {
    "entity_type": "minecraft:vindicator"
}
```

```json
"minecraft:addrider": {
    "entity_type": "minecraft:vindicator",
    "spawn_event": "minecraft:spawn_as_illager_captain"
}
```

spider

```json
"minecraft:addrider": {
    "entity_type": "minecraft:skeleton"
}
```

```json
"minecraft:addrider": {
    "entity_type": "minecraft:skeleton.stray"
}
```

```json
"minecraft:addrider": {
    "entity_type": "minecraft:skeleton.wither"
}
```

strider

```json
"minecraft:addrider": {
    "entity_type": "minecraft:zombie_pigman",
    "spawn_event": "minecraft:spawn_as_strider_jockey"
}
```

```json
"minecraft:addrider": {
    "entity_type": "minecraft:strider",
    "spawn_event": "minecraft:spawn_baby_strider_jockey"
}
```

## admire_item

piglin

```json
"minecraft:admire_item": {
    "duration": 8,
    "cooldown_after_being_attacked": 20
}
```

## ageable

axolotl

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

goat

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

hoglin

```json
"minecraft:ageable": {
    "duration": 1200,
    "feed_items": [
        "crimson_fungus"
    ],
    "grow_up": {
        "event": "minecraft:ageable_grow_up",
        "target": "self"
    }
}
```

horse

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

llama

```json
"minecraft:ageable": {
    "duration": 1200,
    "feed_items": [
        {
            "item": "wheat",
            "growth": 0.1
        },
        {
            "item": "hay_block",
            "growth": 0.9
        }
    ],
    "grow_up": {
        "event": "minecraft:ageable_grow_up",
        "target": "self"
    }
}
```

mooshroom

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

mule

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

ocelot

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

panda

```json
"minecraft:ageable": {
    "duration": 1200,
    "feed_items": "bamboo",
    "grow_up": {
        "event": "minecraft:ageable_grow_up",
        "target": "self"
    }
}
```

pig

```json
"minecraft:ageable": {
    "duration": 1200,
    "feed_items": [
        "carrot",
        "beetroot",
        "potato"
    ],
    "grow_up": {
        "event": "minecraft:ageable_grow_up",
        "target": "self"
    }
}
```

polar_bear

```json
"minecraft:ageable": {
    "duration": 1200,
    "grow_up": {
        "event": "minecraft:ageable_grow_up",
        "target": "self"
    }
}
```

rabbit

```json
"minecraft:ageable": {
    "duration": 1200,
    "feed_items": [
        "golden_carrot",
        "carrot",
        "yellow_flower"
    ],
    "grow_up": {
        "event": "grow_up",
        "target": "self"
    }
}
```

sheep

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

skeleton_horse

```json
"minecraft:ageable": {
    "duration": 1200,
    "grow_up": {
        "event": "minecraft:ageable_grow_up",
        "target": "self"
    }
}
```

strider

```json
"minecraft:ageable": {
    "duration": 1200,
    "feed_items": [
        "warped_fungus"
    ],
    "grow_up": {
        "event": "minecraft:ageable_grow_up",
        "target": "self"
    }
}
```

tadpole

```json
"minecraft:ageable": {
    "duration": 1200,
    "feed_items": [
        "slime_ball"
    ],
    "grow_up": {
        "event": "ageable_grow_up",
        "target": "self"
    }
}
```

trader_llama

```json
"minecraft:ageable": {
    "duration": 1200,
    "feed_items": [
        {
            "item": "wheat",
            "growth": 0.1
        },
        {
            "item": "hay_block",
            "growth": 0.9
        }
    ],
    "grow_up": {
        "event": "minecraft:ageable_grow_up",
        "target": "self"
    }
}
```

turtle

```json
"minecraft:ageable": {
    "duration": 1200,
    "feed_items": [
        "seagrass"
    ],
    "drop_items": [
        "turtle_shell_piece"
    ],
    "grow_up": {
        "event": "minecraft:ageable_grow_up",
        "target": "self"
    }
}
```

villager

```json
"minecraft:ageable": {
    "duration": 1200,
    "grow_up": {
        "event": "minecraft:ageable_grow_up",
        "target": "self"
    }
}
```

villager_v2

```json
"minecraft:ageable": {
    "duration": 1200,
    "grow_up": {
        "event": "minecraft:ageable_grow_up",
        "target": "self"
    }
}
```

wolf

```json
"minecraft:ageable": {
    "duration": 1200,
    "feed_items": [
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
    ],
    "grow_up": {
        "event": "minecraft:ageable_grow_up",
        "target": "self"
    }
}
```

zombie_horse

```json
"minecraft:ageable": {
    "duration": 1200,
    "grow_up": {
        "event": "minecraft:ageable_grow_up",
        "target": "self"
    }
}
```

## ambient_sound_interval

allay

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

```json
"minecraft:ambient_sound_interval": {
    "event_name": "ambient.pollinate",
    "range": 3.0,
    "value": 2.0
}
```

```json
"minecraft:ambient_sound_interval": {
    "event_name": "ambient",
    "range": 0.0,
    "value": 0.0
}
```

evocation_illager

```json
"minecraft:ambient_sound_interval": {
    "value": 2.0,
    "range": 4.0,
    "event_name": "ambient.in.raid"
}
```

fox

```json
"minecraft:ambient_sound_interval": {
    "event_name": "ambient"
}
```

```json
"minecraft:ambient_sound_interval": {
    "event_name": "sleep"
}
```

```json
"minecraft:ambient_sound_interval": {
    "event_name": "screech",
    "value": 80,
    "range": 160
}
```

pillager

```json
"minecraft:ambient_sound_interval": {
    "value": 2.0,
    "range": 4.0,
    "event_name": "ambient.in.raid"
}
```

ravager

```json
"minecraft:ambient_sound_interval": {
    "value": 4.0,
    "range": 8.0,
    "event_name": "ambient.in.raid"
}
```

vindicator

```json
"minecraft:ambient_sound_interval": {
    "value": 2.0,
    "range": 4.0,
    "event_name": "ambient.in.raid"
}
```

warden

```json
"minecraft:ambient_sound_interval": {
    "value": 2.0,
    "range": 4.0,
    "event_name": "ambient",
    "event_names": [
        {
            "event_name": "angry",
            "condition": "query.anger_level(this) >= 80"
        },
        {
            "event_name": "agitated",
            "condition": "query.anger_level(this) >= 40"
        }
    ]
}
```

witch

```json
"minecraft:ambient_sound_interval": {
    "value": 2.0,
    "range": 4.0,
    "event_name": "ambient.in.raid"
}
```

## anger_level

warden

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

## angry

bee

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

```json
"minecraft:angry": {
    "duration": 1,
    "broadcast_anger": true,
    "broadcast_range": 41,
    "broadcast_filters": {
        "test": "is_family",
        "operator": "==",
        "value": "panda_aggressive"
    },
    "calm_event": {
        "event": "minecraft:baby_on_calm",
        "target": "self"
    }
}
```

piglin

```json
"minecraft:angry": {
    "duration": 30,
    "broadcast_anger": true,
    "broadcast_anger_on_attack": true,
    "broadcast_anger_on_being_attacked": true,
    "broadcast_range": 16,
    "broadcast_targets": [
        "piglin"
    ],
    "calm_event": {
        "event": "become_calm_event",
        "target": "self"
    },
    "filters": {
        "all_of": [
            {
                "test": "is_family",
                "subject": "other",
                "operator": "!=",
                "value": "piglin"
            },
            {
                "test": "has_component",
                "subject": "self",
                "operator": "!=",
                "value": "minecraft:attack_cooldown"
            }
        ]
    },
    "angry_sound": "angry",
    "sound_interval": {
        "range_min": 2.0,
        "range_max": 5.0
    }
}
```

piglin_brute

```json
"minecraft:angry": {
    "duration": 30,
    "broadcast_anger": false,
    "broadcast_anger_on_attack": false,
    "broadcast_anger_on_being_attacked": true,
    "broadcast_range": 16,
    "broadcast_targets": [
        "piglin"
    ],
    "calm_event": {
        "event": "become_calm_event",
        "target": "self"
    },
    "filters": {
        "all_of": [
            {
                "test": "is_family",
                "subject": "other",
                "operator": "!=",
                "value": "piglin"
            }
        ]
    },
    "angry_sound": "angry",
    "sound_interval": {
        "range_min": 2.0,
        "range_max": 5.0
    }
}
```

polar_bear

```json
"minecraft:angry": {
    "duration": 1,
    "broadcast_anger": true,
    "broadcast_range": 41,
    "calm_event": {
        "event": "minecraft:baby_on_calm",
        "target": "self"
    }
}
```

```json
"minecraft:angry": {
    "duration": 500,
    "broadcast_anger": false,
    "broadcast_range": 20,
    "calm_event": {
        "event": "minecraft:on_calm",
        "target": "self"
    }
}
```

silverfish

```json
"minecraft:angry": {
    "duration": -1,
    "broadcast_anger": true,
    "broadcast_range": 20,
    "calm_event": {
        "event": "minecraft:on_calm",
        "target": "self"
    }
}
```

spider

```json
"minecraft:angry": {
    "duration": 10,
    "duration_delta": 3,
    "calm_event": {
        "event": "minecraft:become_calm",
        "target": "self"
    }
}
```

trader_llama

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

```json
"minecraft:angry": {
    "duration": 10,
    "calm_event": {
        "event": "minecraft:on_calm",
        "target": "self"
    }
}
```

vindicator

```json
"minecraft:angry": {
    "duration": -1,
    "broadcast_anger": false,
    "calm_event": {
        "event": "minecraft:stop_aggro",
        "target": "self"
    }
}
```

wandering_trader

```json
"minecraft:angry": {
    "duration": 5,
    "broadcastAnger": true,
    "broadcastRange": 10,
    "broadcast_targets": [
        "llama",
        "trader_llama"
    ],
    "broadcast_filters": {
        "test": "is_leashed_to",
        "subject": "other",
        "value": true
    },
    "calm_event": {
        "event": "minecraft:become_calm",
        "target": "self"
    }
}
```

wolf

```json
"minecraft:angry": {
    "duration": 25,
    "broadcast_anger": true,
    "broadcast_range": 20,
    "calm_event": {
        "event": "minecraft:on_calm",
        "target": "self"
    }
}
```

zombie_pigman

```json
"minecraft:angry": {
    "duration": 25,
    "broadcast_anger": true,
    "broadcast_range": 20,
    "calm_event": {
        "event": "minecraft:on_calm",
        "target": "self"
    }
}
```

## annotation.break_door

drowned

```json
"minecraft:annotation.break_door": {}
```

husk

```json
"minecraft:annotation.break_door": {}
```

vindicator

```json
"minecraft:annotation.break_door": {
    "break_time": 30,
    "min_difficulty": "normal"
}
```

zombie

```json
"minecraft:annotation.break_door": {}
```

zombie_villager

```json
"minecraft:annotation.break_door": {}
```

zombie_villager_v2

```json
"minecraft:annotation.break_door": {}
```

## annotation.open_door

piglin

```json
"minecraft:annotation.open_door": {}
```

piglin_brute

```json
"minecraft:annotation.open_door": {}
```

villager

```json
"minecraft:annotation.open_door": {}
```

villager_v2

```json
"minecraft:annotation.open_door": {}
```

## area_attack

magma_cube

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

## attack

axolotl

```json
"minecraft:attack": {
    "damage": 2
}
```

bee

```json
"minecraft:attack": {
    "damage": 2
}
```

```json
"minecraft:attack": {
    "damage": 2,
    "effect_name": "poison",
    "effect_duration": 10
}
```

```json
"minecraft:attack": {
    "damage": 2,
    "effect_name": "poison",
    "effect_duration": 18
}
```

blaze

```json
"minecraft:attack": {
    "damage": 6
}
```

cave_spider

```json
"minecraft:attack": {
    "damage": 2,
    "effect_name": "poison",
    "effect_duration": 0
}
```

```json
"minecraft:attack": {
    "damage": 2,
    "effect_name": "poison",
    "effect_duration": 7
}
```

```json
"minecraft:attack": {
    "damage": 2,
    "effect_name": "poison",
    "effect_duration": 15
}
```

creeper

```json
"minecraft:attack": {
    "damage": 3
}
```

dolphin

```json
"minecraft:attack": {
    "damage": 3
}
```

drowned

```json
"minecraft:attack": {
    "damage": 3
}
```

elder_guardian

```json
"minecraft:attack": {
    "damage": 5
}
```

enderman

```json
"minecraft:attack": {
    "damage": 7
}
```

endermite

```json
"minecraft:attack": {
    "damage": 2
}
```

ender_dragon

```json
"minecraft:attack": {
    "damage": 3
}
```

fox

```json
"minecraft:attack": {
    "damage": 2
}
```

goat

```json
"minecraft:attack": {
    "damage": 1
}
```

```json
"minecraft:attack": {
    "damage": 2
}
```

guardian

```json
"minecraft:attack": {
    "damage": 5
}
```

hoglin

```json
"minecraft:attack": {
    "damage": 1.0
}
```

```json
"minecraft:attack": {
    "damage": [
        3,
        9
    ]
}
```

husk

```json
"minecraft:attack": {
    "damage": 3,
    "effect_name": "hunger",
    "effect_duration": 30
}
```

iron_golem

```json
"minecraft:attack": {
    "damage": {
        "range_min": 7,
        "range_max": 21
    }
}
```

magma_cube

```json
"minecraft:attack": {
    "damage": 6
}
```

```json
"minecraft:attack": {
    "damage": 4
}
```

```json
"minecraft:attack": {
    "damage": 3
}
```

panda

```json
"minecraft:attack": {
    "damage": 2.0
}
```

```json
"minecraft:attack": {
    "damage": 6.0
}
```

phantom

```json
"minecraft:attack": {
    "damage": 6
}
```

piglin

```json
"minecraft:attack": {
    "damage": 5
}
```

piglin_brute

```json
"minecraft:attack": {
    "damage": 7
}
```

pillager

```json
"minecraft:attack": {
    "damage": 3
}
```

player

```json
"minecraft:attack": {
    "damage": 1
}
```

polar_bear

```json
"minecraft:attack": {
    "damage": 6.0
}
```

ravager

```json
"minecraft:attack": {
    "damage": 12.0
}
```

silverfish

```json
"minecraft:attack": {
    "damage": 1
}
```

skeleton

```json
"minecraft:attack": {
    "damage": 2
}
```

slime

```json
"minecraft:attack": {
    "damage": 4
}
```

```json
"minecraft:attack": {
    "damage": 2
}
```

```json
"minecraft:attack": {
    "damage": 0
}
```

snow_golem

```json
"minecraft:attack": {
    "damage": 2
}
```

spider

```json
"minecraft:attack": {
    "damage": 2
}
```

stray

```json
"minecraft:attack": {
    "damage": 3,
    "effect_name": "slowness",
    "effect_duration": 10
}
```

vex

```json
"minecraft:attack": {
    "damage": 3
}
```

vindicator

```json
"minecraft:attack": {
    "damage": 8
}
```

warden

```json
"minecraft:attack": {
    "damage": 30
}
```

wither_skeleton

```json
"minecraft:attack": {
    "damage": 4,
    "effect_name": "wither",
    "effect_duration": 10
}
```

wolf

```json
"minecraft:attack": {
    "damage": 3
}
```

```json
"minecraft:attack": {
    "damage": 4
}
```

zoglin

```json
"minecraft:attack": {
    "damage": 0.5
}
```

```json
"minecraft:attack": {
    "damage": [
        3,
        8
    ]
}
```

zombie

```json
"minecraft:attack": {
    "damage": 3
}
```

zombie_pigman

```json
"minecraft:attack": {
    "damage": 5
}
```

zombie_villager

```json
"minecraft:attack": {
    "damage": 3
}
```

zombie_villager_v2

```json
"minecraft:attack": {
    "damage": 3
}
```

## attack_cooldown

axolotl

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

## attack_damage

cat

```json
"minecraft:attack_damage": {
    "value": 4
}
```

ocelot

```json
"minecraft:attack_damage": {
    "value": 3
}
```

## balloonable

allay

```json
"minecraft:balloonable": {
    "mass": 0.5
}
```

bee

```json
"minecraft:balloonable": {
    "mass": 0.5
}
```

boat

```json
"minecraft:balloonable": {}
```

cat

```json
"minecraft:balloonable": {
    "mass": 0.6
}
```

chest_boat

```json
"minecraft:balloonable": {}
```

chicken

```json
"minecraft:balloonable": {
    "mass": 0.5
}
```

cow

```json
"minecraft:balloonable": {}
```

dolphin

```json
"minecraft:balloonable": {}
```

donkey

```json
"minecraft:balloonable": {}
```

fox

```json
"minecraft:balloonable": {
    "mass": 0.6
}
```

glow_squid

```json
"minecraft:balloonable": {
    "mass": 0.5
}
```

goat

```json
"minecraft:balloonable": {}
```

hoglin

```json
"minecraft:balloonable": {}
```

horse

```json
"minecraft:balloonable": {}
```

iron_golem

```json
"minecraft:balloonable": {
    "mass": 2.0
}
```

llama

```json
"minecraft:balloonable": {}
```

mooshroom

```json
"minecraft:balloonable": {}
```

mule

```json
"minecraft:balloonable": {}
```

ocelot

```json
"minecraft:balloonable": {
    "mass": 0.7
}
```

panda

```json
"minecraft:balloonable": {}
```

parrot

```json
"minecraft:balloonable": {}
```

pig

```json
"minecraft:balloonable": {
    "mass": 0.9
}
```

polar_bear

```json
"minecraft:balloonable": {}
```

rabbit

```json
"minecraft:balloonable": {
    "mass": 0.4
}
```

sheep

```json
"minecraft:balloonable": {
    "mass": 0.75
}
```

skeleton_horse

```json
"minecraft:balloonable": {}
```

snow_golem

```json
"minecraft:balloonable": {}
```

squid

```json
"minecraft:balloonable": {
    "mass": 0.5
}
```

strider

```json
"minecraft:balloonable": {}
```

trader_llama

```json
"minecraft:balloonable": {}
```

wolf

```json
"minecraft:balloonable": {
    "mass": 0.8
}
```

zoglin

```json
"minecraft:balloonable": {}
```

zombie_horse

```json
"minecraft:balloonable": {}
```

## barter

piglin

```json
"minecraft:barter": {
    "barter_table": "loot_tables/entities/piglin_barter.json",
    "cooldown_after_being_attacked": 20
}
```

## behavior.admire_item

piglin

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

## behavior.avoid_block

hoglin

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

## behavior.avoid_mob_type

cat

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

ocelot

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
            "max_dist": 10,
            "walk_speed_multiplier": 0.8,
            "sprint_speed_multiplier": 1.33
        }
    ]
}
```

panda

```json
"minecraft:behavior.avoid_mob_type": {
    "priority": 5,
    "max_dist": 16,
    "max_flee": 20,
    "entity_types": [
        {
            "filters": {
                "test": "is_family",
                "operator": "!=",
                "subject": "other",
                "value": "panda"
            },
            "max_dist": 16,
            "sprint_speed_multiplier": 1.5
        }
    ]
}
```

phantom

```json
"minecraft:behavior.avoid_mob_type": {
    "priority": 0,
    "max_dist": 16.0,
    "ignore_visibility": true,
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
            "max_dist": 16
        }
    ]
}
```

piglin

```json
"minecraft:behavior.avoid_mob_type": {
    "priority": 4,
    "remove_target": true,
    "entity_types": [
        {
            "filters": {
                "any_of": [
                    {
                        "test": "is_family",
                        "subject": "other",
                        "value": "zombie_pigman"
                    }
                ]
            },
            "max_dist": 6
        },
        {
            "filters": {
                "any_of": [
                    {
                        "test": "is_family",
                        "subject": "other",
                        "value": "zoglin"
                    }
                ]
            },
            "max_dist": 6
        },
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
                        "value": "hoglin"
                    }
                ]
            },
            "sprint_speed_multiplier": 1.2,
            "check_if_outnumbered": true
        }
    ],
    "on_escape_event": {
        "event": "become_calm_event",
        "target": "self"
    },
    "avoid_mob_sound": "retreat",
    "sound_interval": {
        "range_min": 2.0,
        "range_max": 5.0
    }
}
```

pufferfish

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

rabbit

```json
"minecraft:behavior.avoid_mob_type": {
    "priority": 4,
    "entity_types": [
        {
            "filters": {
                "test": "is_family",
                "subject": "other",
                "value": "player"
            },
            "max_dist": 8,
            "walk_speed_multiplier": 1.5,
            "sprint_speed_multiplier": 1.8
        },
        {
            "filters": {
                "test": "is_family",
                "subject": "other",
                "value": "wolf"
            },
            "max_dist": 4,
            "walk_speed_multiplier": 1.5,
            "sprint_speed_multiplier": 1.8
        },
        {
            "filters": {
                "test": "is_family",
                "subject": "other",
                "value": "monster"
            },
            "max_dist": 4,
            "walk_speed_multiplier": 1.5,
            "sprint_speed_multiplier": 1.5
        }
    ]
}
```

salmon

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
            "max_dist": 3,
            "max_flee": 10,
            "walk_speed_multiplier": 1.5,
            "sprint_speed_multiplier": 2.0
        }
    ]
}
```

skeleton

```json
"minecraft:behavior.avoid_mob_type": {
    "priority": 4,
    "entity_types": [
        {
            "filters": {
                "test": "is_family",
                "subject": "other",
                "value": "wolf"
            },
            "max_dist": 6,
            "walk_speed_multiplier": 1.2,
            "sprint_speed_multiplier": 1.2
        }
    ]
}
```

stray

```json
"minecraft:behavior.avoid_mob_type": {
    "priority": 4,
    "entity_types": [
        {
            "filters": {
                "test": "is_family",
                "subject": "other",
                "value": "wolf"
            },
            "max_dist": 6,
            "walk_speed_multiplier": 1.2,
            "sprint_speed_multiplier": 1.2
        }
    ]
}
```

tropicalfish

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

villager

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
                        "value": "zombie"
                    },
                    {
                        "test": "is_family",
                        "subject": "other",
                        "value": "zombie_villager"
                    },
                    {
                        "test": "is_family",
                        "subject": "other",
                        "value": "illager"
                    },
                    {
                        "test": "is_family",
                        "subject": "other",
                        "value": "vex"
                    }
                ]
            },
            "max_dist": 8,
            "walk_speed_multiplier": 0.6,
            "sprint_speed_multiplier": 0.6
        }
    ]
}
```

villager_v2

```json
"minecraft:behavior.avoid_mob_type": {
    "priority": 4,
    "entity_types": [
        {
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
                        "value": "zombie_villager"
                    },
                    {
                        "test": "is_family",
                        "subject": "other",
                        "value": "illager"
                    },
                    {
                        "test": "is_family",
                        "subject": "other",
                        "value": "vex"
                    },
                    {
                        "test": "is_family",
                        "subject": "other",
                        "value": "zoglin"
                    }
                ]
            },
            "max_dist": 8,
            "walk_speed_multiplier": 0.6,
            "sprint_speed_multiplier": 0.6
        }
    ]
}
```

wandering_trader

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
                        "value": "zombie"
                    },
                    {
                        "test": "is_family",
                        "subject": "other",
                        "value": "zombie_villager"
                    },
                    {
                        "test": "is_family",
                        "subject": "other",
                        "value": "zombie_pigman"
                    },
                    {
                        "test": "is_family",
                        "subject": "other",
                        "value": "illager"
                    },
                    {
                        "test": "is_family",
                        "subject": "other",
                        "value": "vex"
                    },
                    {
                        "test": "is_family",
                        "subject": "other",
                        "value": "zoglin"
                    }
                ]
            },
            "walk_speed_multiplier": 0.6,
            "sprint_speed_multiplier": 0.6
        }
    ],
    "max_dist": 6
}
```

wolf

```json
"minecraft:behavior.avoid_mob_type": {
    "priority": 3,
    "entity_types": [
        {
            "filters": {
                "test": "is_family",
                "subject": "other",
                "value": "llama"
            },
            "max_dist": 24,
            "walk_speed_multiplier": 1.5,
            "sprint_speed_multiplier": 1.5
        }
    ],
    "probability_per_strength": 0.14
}
```

## behavior.barter

piglin

```json
"minecraft:behavior.barter": {
    "priority": 3
}
```

## behavior.beg

wolf

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

## behavior.breed

axolotl

```json
"minecraft:behavior.breed": {
    "priority": 1,
    "speed_multiplier": 1.0
}
```

bee

```json
"minecraft:behavior.breed": {
    "priority": 4,
    "speed_multiplier": 1.0
}
```

cat

```json
"minecraft:behavior.breed": {
    "priority": 3,
    "speed_multiplier": 1.0
}
```

chicken

```json
"minecraft:behavior.breed": {
    "priority": 3,
    "speed_multiplier": 1.0
}
```

cow

```json
"minecraft:behavior.breed": {
    "priority": 3,
    "speed_multiplier": 1.0
}
```

```json
"minecraft:behavior.breed": {
    "priority": 3,
    "speed_multiplier": 1.0
}
```

donkey

```json
"minecraft:behavior.breed": {
    "priority": 2,
    "speed_multiplier": 1.0
}
```

fox

```json
"minecraft:behavior.breed": {
    "priority": 3,
    "speed_multiplier": 1.0
}
```

frog

```json
"minecraft:behavior.breed": {
    "priority": 4
}
```

goat

```json
"minecraft:behavior.breed": {
    "priority": 3,
    "speed_multiplier": 0.6
}
```

hoglin

```json
"minecraft:behavior.breed": {
    "priority": 3,
    "speed_multiplier": 0.6
}
```

horse

```json
"minecraft:behavior.breed": {
    "priority": 2,
    "speed_multiplier": 1.0
}
```

llama

```json
"minecraft:behavior.breed": {
    "priority": 4,
    "speed_multiplier": 1.0
}
```

mooshroom

```json
"minecraft:behavior.breed": {
    "priority": 3,
    "speed_multiplier": 1.0
}
```

```json
"minecraft:behavior.breed": {
    "priority": 3,
    "speed_multiplier": 1.0
}
```

ocelot

```json
"minecraft:behavior.breed": {
    "priority": 3,
    "speed_multiplier": 1.0
}
```

panda

```json
"minecraft:behavior.breed": {
    "priority": 3,
    "speed_multiplier": 1.0
}
```

```json
"minecraft:behavior.breed": {
    "priority": 3,
    "speed_multiplier": 1.0
}
```

pig

```json
"minecraft:behavior.breed": {
    "priority": 4,
    "speed_multiplier": 1.0
}
```

rabbit

```json
"minecraft:behavior.breed": {
    "priority": 2,
    "speed_multiplier": 0.8
}
```

```json
"minecraft:behavior.breed": {
    "priority": 2,
    "speed_multiplier": 1.0
}
```

sheep

```json
"minecraft:behavior.breed": {
    "priority": 3,
    "speed_multiplier": 1.0
}
```

strider

```json
"minecraft:behavior.breed": {
    "priority": 4,
    "speed_multiplier": 1.0
}
```

trader_llama

```json
"minecraft:behavior.breed": {
    "priority": 4,
    "speed_multiplier": 1.0
}
```

turtle

```json
"minecraft:behavior.breed": {
    "priority": 2,
    "speed_multiplier": 1.0
}
```

wolf

```json
"minecraft:behavior.breed": {
    "priority": 2,
    "speed_multiplier": 1.0
}
```

## behavior.celebrate

evocation_illager

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

## behavior.celebrate_survive

villager

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

## behavior.charge_attack

vex

```json
"minecraft:behavior.charge_attack": {
    "priority": 4
}
```

## behavior.charge_held_item

piglin

```json
"minecraft:behavior.charge_held_item": {
    "priority": 3,
    "items": [
        "minecraft:arrow"
    ]
}
```

pillager

```json
"minecraft:behavior.charge_held_item": {
    "priority": 3,
    "items": [
        "minecraft:arrow"
    ]
}
```

## behavior.circle_around_anchor

phantom

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

## behavior.controlled_by_player

pig

```json
"minecraft:behavior.controlled_by_player": {
    "priority": 0
}
```

strider

```json
"minecraft:behavior.controlled_by_player": {
    "priority": 0,
    "mount_speed_multiplier": 1.45
}
```

## behavior.croak

frog

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

## behavior.defend_trusted_target

fox

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

## behavior.defend_village_target

iron_golem

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

## behavior.delayed_attack

ravager

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

## behavior.dig

warden

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

## behavior.dragonchargeplayer

ender_dragon

```json
"minecraft:behavior.dragonchargeplayer": {
    "priority": 1
}
```

## behavior.dragondeath

ender_dragon

```json
"minecraft:behavior.dragondeath": {
    "priority": 0
}
```

## behavior.dragonflaming

ender_dragon

```json
"minecraft:behavior.dragonflaming": {
    "priority": 1
}
```

## behavior.dragonholdingpattern

ender_dragon

```json
"minecraft:behavior.dragonholdingpattern": {
    "priority": 3
}
```

## behavior.dragonlanding

ender_dragon

```json
"minecraft:behavior.dragonlanding": {
    "priority": 0
}
```

## behavior.dragonscanning

ender_dragon

```json
"minecraft:behavior.dragonscanning": {
    "priority": 2
}
```

## behavior.dragonstrafeplayer

ender_dragon

```json
"minecraft:behavior.dragonstrafeplayer": {
    "priority": 2
}
```

## behavior.dragontakeoff

ender_dragon

```json
"minecraft:behavior.dragontakeoff": {
    "priority": 0
}
```

## behavior.drink_milk

wandering_trader

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

## behavior.drink_potion

wandering_trader

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

## behavior.drop_item_for

cat

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

## behavior.eat_block

sheep

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

## behavior.eat_carried_item

fox

```json
"minecraft:behavior.eat_carried_item": {
    "priority": 12,
    "delay_before_eating": 28
}
```

## behavior.eat_mob

frog

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

## behavior.emerge

warden

```json
"minecraft:behavior.emerge": {
    "duration": 7.0,
    "on_done": {
        "event": "minecraft:emerged",
        "target": "self"
    }
}
```

## behavior.enderman_leave_block

enderman

```json
"minecraft:behavior.enderman_leave_block": {
    "priority": 10
}
```

## behavior.enderman_take_block

enderman

```json
"minecraft:behavior.enderman_take_block": {
    "priority": 11
}
```

## behavior.equip_item

drowned

```json
"minecraft:behavior.equip_item": {
    "priority": 3
}
```

fox

```json
"minecraft:behavior.equip_item": {
    "priority": 2
}
```

husk

```json
"minecraft:behavior.equip_item": {
    "priority": 2
}
```

piglin

```json
"minecraft:behavior.equip_item": {
    "priority": 5
}
```

pillager

```json
"minecraft:behavior.equip_item": {
    "priority": 3
}
```

skeleton

```json
"minecraft:behavior.equip_item": {
    "priority": 3
}
```

stray

```json
"minecraft:behavior.equip_item": {
    "priority": 3
}
```

wither_skeleton

```json
"minecraft:behavior.equip_item": {
    "priority": 3
}
```

zombie

```json
"minecraft:behavior.equip_item": {
    "priority": 2
}
```

zombie_pigman

```json
"minecraft:behavior.equip_item": {
    "priority": 3
}
```

zombie_villager

```json
"minecraft:behavior.equip_item": {
    "priority": 3
}
```

zombie_villager_v2

```json
"minecraft:behavior.equip_item": {
    "priority": 3
}
```

## behavior.explore_outskirts

villager_v2

```json
"minecraft:behavior.explore_outskirts": {}
```

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

## behavior.fertilize_farm_block

villager_v2

```json
"minecraft:behavior.fertilize_farm_block": {
    "priority": 8
}
```

## behavior.find_cover

fox

```json
"minecraft:behavior.find_cover": {
    "priority": 0,
    "speed_multiplier": 1,
    "cooldown_time": 0.0
}
```

```json
"minecraft:behavior.find_cover": {
    "priority": 9,
    "speed_multiplier": 1,
    "cooldown_time": 5.0
}
```

## behavior.find_mount

husk

```json
"minecraft:behavior.find_mount": {
    "priority": 1,
    "within_radius": 16
}
```

parrot

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

```json
"minecraft:behavior.find_mount": {
    "priority": 1,
    "within_radius": 16,
    "start_delay": 15,
    "max_failed_attempts": 20
}
```

zombie

```json
"minecraft:behavior.find_mount": {
    "priority": 1,
    "within_radius": 16,
    "start_delay": 15,
    "max_failed_attempts": 20
}
```

zombie_villager

```json
"minecraft:behavior.find_mount": {
    "priority": 1,
    "within_radius": 16
}
```

zombie_villager_v2

```json
"minecraft:behavior.find_mount": {
    "priority": 1,
    "within_radius": 16
}
```

## behavior.find_underwater_treasure

dolphin

```json
"minecraft:behavior.find_underwater_treasure": {
    "priority": 2,
    "speed_multiplier": 2.0,
    "search_range": 30,
    "stop_distance": 50
}
```

## behavior.flee_sun

drowned

```json
"minecraft:behavior.flee_sun": {
    "priority": 2,
    "speed_multiplier": 1
}
```

skeleton

```json
"minecraft:behavior.flee_sun": {
    "priority": 2,
    "speed_multiplier": 1
}
```

stray

```json
"minecraft:behavior.flee_sun": {
    "priority": 2,
    "speed_multiplier": 1
}
```

zombie_villager

```json
"minecraft:behavior.flee_sun": {
    "priority": 4,
    "speed_multiplier": 1
}
```

zombie_villager_v2

```json
"minecraft:behavior.flee_sun": {
    "priority": 4,
    "speed_multiplier": 1
}
```

## behavior.float

allay

```json
"minecraft:behavior.float": {
    "priority": 7
}
```

bat

```json
"minecraft:behavior.float": {
    "priority": 0
}
```

bee

```json
"minecraft:behavior.float": {
    "priority": 19
}
```

blaze

```json
"minecraft:behavior.float": {
    "priority": 0
}
```

cat

```json
"minecraft:behavior.float": {
    "priority": 0
}
```

cave_spider

```json
"minecraft:behavior.float": {
    "priority": 1
}
```

chicken

```json
"minecraft:behavior.float": {
    "priority": 0
}
```

cow

```json
"minecraft:behavior.float": {
    "priority": 0
}
```

creeper

```json
"minecraft:behavior.float": {
    "priority": 0
}
```

donkey

```json
"minecraft:behavior.float": {
    "priority": 0
}
```

enderman

```json
"minecraft:behavior.float": {
    "priority": 0
}
```

endermite

```json
"minecraft:behavior.float": {
    "priority": 0
}
```

evocation_illager

```json
"minecraft:behavior.float": {
    "priority": 0
}
```

fox

```json
"minecraft:behavior.float": {
    "priority": 0
}
```

ghast

```json
"minecraft:behavior.float": {
    "priority": 0
}
```

goat

```json
"minecraft:behavior.float": {
    "priority": 0
}
```

horse

```json
"minecraft:behavior.float": {
    "priority": 0
}
```

llama

```json
"minecraft:behavior.float": {
    "priority": 0
}
```

mooshroom

```json
"minecraft:behavior.float": {
    "priority": 0
}
```

mule

```json
"minecraft:behavior.float": {
    "priority": 0
}
```

ocelot

```json
"minecraft:behavior.float": {
    "priority": 0
}
```

panda

```json
"minecraft:behavior.float": {
    "priority": 0
}
```

parrot

```json
"minecraft:behavior.float": {
    "priority": 0
}
```

pig

```json
"minecraft:behavior.float": {
    "priority": 2
}
```

pillager

```json
"minecraft:behavior.float": {
    "priority": 0
}
```

polar_bear

```json
"minecraft:behavior.float": {
    "priority": 0
}
```

rabbit

```json
"minecraft:behavior.float": {
    "priority": 0
}
```

ravager

```json
"minecraft:behavior.float": {
    "priority": 0
}
```

sheep

```json
"minecraft:behavior.float": {
    "priority": 0
}
```

silverfish

```json
"minecraft:behavior.float": {
    "priority": 1
}
```

spider

```json
"minecraft:behavior.float": {
    "priority": 1
}
```

trader_llama

```json
"minecraft:behavior.float": {
    "priority": 0
}
```

vex

```json
"minecraft:behavior.float": {
    "priority": 0
}
```

villager

```json
"minecraft:behavior.float": {
    "priority": 0
}
```

villager_v2

```json
"minecraft:behavior.float": {
    "priority": 0
}
```

vindicator

```json
"minecraft:behavior.float": {
    "priority": 0
}
```

wandering_trader

```json
"minecraft:behavior.float": {
    "priority": 0
}
```

warden

```json
"minecraft:behavior.float": {
    "priority": 0
}
```

witch

```json
"minecraft:behavior.float": {
    "priority": 1
}
```

wither

```json
"minecraft:behavior.float": {
    "priority": 1
}
```

wolf

```json
"minecraft:behavior.float": {
    "priority": 0
}
```

## behavior.float_wander

bat

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

```json
"minecraft:behavior.float_wander": {
    "priority": 2,
    "must_reach": true
}
```

## behavior.follow_caravan

llama

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

## behavior.follow_mob

parrot

```json
"minecraft:behavior.follow_mob": {
    "priority": 3,
    "speed_multiplier": 1.0,
    "stop_distance": 3,
    "search_range": 20
}
```

## behavior.follow_owner

allay

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

```json
"minecraft:behavior.follow_owner": {
    "priority": 4,
    "speed_multiplier": 1.0,
    "start_distance": 10,
    "stop_distance": 2
}
```

ocelot

```json
"minecraft:behavior.follow_owner": {
    "priority": 4,
    "speed_multiplier": 1.0,
    "start_distance": 10,
    "stop_distance": 2
}
```

parrot

```json
"minecraft:behavior.follow_owner": {
    "priority": 2,
    "speed_multiplier": 1.0,
    "start_distance": 5,
    "stop_distance": 1
}
```

wolf

```json
"minecraft:behavior.follow_owner": {
    "priority": 6,
    "speed_multiplier": 1.0,
    "start_distance": 10,
    "stop_distance": 2
}
```

## behavior.follow_parent

axolotl

```json
"minecraft:behavior.follow_parent": {
    "priority": 5,
    "speed_multiplier": 1.1
}
```

bee

```json
"minecraft:behavior.follow_parent": {
    "priority": 11,
    "speed_multiplier": 1.1
}
```

chicken

```json
"minecraft:behavior.follow_parent": {
    "priority": 5,
    "speed_multiplier": 1.1
}
```

cow

```json
"minecraft:behavior.follow_parent": {
    "priority": 5,
    "speed_multiplier": 1.1
}
```

```json
"minecraft:behavior.follow_parent": {
    "priority": 6,
    "speed_multiplier": 1.1
}
```

dolphin

```json
"minecraft:behavior.follow_parent": {
    "priority": 4,
    "speed_multiplier": 1.1
}
```

donkey

```json
"minecraft:behavior.follow_parent": {
    "priority": 4,
    "speed_multiplier": 1.0
}
```

fox

```json
"minecraft:behavior.follow_parent": {
    "priority": 9,
    "speed_multiplier": 1.1
}
```

goat

```json
"minecraft:behavior.follow_parent": {
    "priority": 6,
    "speed_multiplier": 1
}
```

hoglin

```json
"minecraft:behavior.follow_parent": {
    "priority": 6,
    "speed_multiplier": 1
}
```

horse

```json
"minecraft:behavior.follow_parent": {
    "priority": 4,
    "speed_multiplier": 1.0
}
```

llama

```json
"minecraft:behavior.follow_parent": {
    "priority": 5,
    "speed_multiplier": 1.0
}
```

mooshroom

```json
"minecraft:behavior.follow_parent": {
    "priority": 5,
    "speed_multiplier": 1.1
}
```

```json
"minecraft:behavior.follow_parent": {
    "priority": 6,
    "speed_multiplier": 1.1
}
```

mule

```json
"minecraft:behavior.follow_parent": {
    "priority": 4,
    "speed_multiplier": 1.0
}
```

panda

```json
"minecraft:behavior.follow_parent": {
    "priority": 13,
    "speed_multiplier": 1.1
}
```

pig

```json
"minecraft:behavior.follow_parent": {
    "priority": 6,
    "speed_multiplier": 1.1
}
```

polar_bear

```json
"minecraft:behavior.follow_parent": {
    "priority": 4,
    "speed_multiplier": 1.25
}
```

rabbit

```json
"minecraft:behavior.follow_parent": {
    "priority": 6,
    "speed_multiplier": 1.1
}
```

sheep

```json
"minecraft:behavior.follow_parent": {
    "priority": 5,
    "speed_multiplier": 1.1
}
```

```json
"minecraft:behavior.follow_parent": {
    "priority": 6,
    "speed_multiplier": 1.1
}
```

skeleton_horse

```json
"minecraft:behavior.follow_parent": {
    "priority": 4,
    "speed_multiplier": 1.0
}
```

strider

```json
"minecraft:behavior.follow_parent": {
    "priority": 6,
    "speed_multiplier": 1.1
}
```

trader_llama

```json
"minecraft:behavior.follow_parent": {
    "priority": 5,
    "speed_multiplier": 1.0
}
```

zombie_horse

```json
"minecraft:behavior.follow_parent": {
    "priority": 4,
    "speed_multiplier": 1.0
}
```

## behavior.follow_target_captain

pillager

```json
"minecraft:behavior.follow_target_captain": {
    "priority": 5,
    "speed_multiplier": 0.8,
    "within_radius": 64,
    "follow_distance": 5
}
```

vindicator

```json
"minecraft:behavior.follow_target_captain": {
    "priority": 5,
    "speed_multiplier": 0.8,
    "within_radius": 64,
    "follow_distance": 5
}
```

## behavior.go_and_give_items_to_noteblock

allay

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

## behavior.go_and_give_items_to_owner

allay

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

## behavior.go_home

bee

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

## behavior.guardian_attack

elder_guardian

```json
"minecraft:behavior.guardian_attack": {
    "priority": 4
}
```

guardian

```json
"minecraft:behavior.guardian_attack": {
    "priority": 4
}
```

```json
"minecraft:behavior.guardian_attack": {
    "priority": 4
}
```

## behavior.harvest_farm_block

villager

```json
"minecraft:behavior.harvest_farm_block": {
    "priority": 9,
    "speed_multiplier": 0.5
}
```

villager_v2

```json
"minecraft:behavior.harvest_farm_block": {}
```

```json
"minecraft:behavior.harvest_farm_block": {
    "priority": 7
}
```

## behavior.hide

villager_v2

```json
"minecraft:behavior.hide": {
    "priority": 0,
    "speed_multiplier": 0.8,
    "poi_type": "bed",
    "duration": 30.0
}
```

## behavior.hold_ground

pillager

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

## behavior.hurt_by_target

bee

```json
"minecraft:behavior.hurt_by_target": {
    "priority": 1
}
```

blaze

```json
"minecraft:behavior.hurt_by_target": {
    "priority": 1
}
```

cave_spider

```json
"minecraft:behavior.hurt_by_target": {
    "priority": 1
}
```

creeper

```json
"minecraft:behavior.hurt_by_target": {
    "priority": 2
}
```

dolphin

```json
"minecraft:behavior.hurt_by_target": {
    "priority": 1
}
```

drowned

```json
"minecraft:behavior.hurt_by_target": {
    "priority": 1
}
```

enderman

```json
"minecraft:behavior.hurt_by_target": {
    "priority": 3
}
```

evocation_illager

```json
"minecraft:behavior.hurt_by_target": {
    "priority": 1
}
```

ghast

```json
"minecraft:behavior.hurt_by_target": {
    "priority": 1
}
```

hoglin

```json
"minecraft:behavior.hurt_by_target": {
    "priority": 2
}
```

husk

```json
"minecraft:behavior.hurt_by_target": {
    "priority": 1
}
```

iron_golem

```json
"minecraft:behavior.hurt_by_target": {
    "priority": 2,
    "entity_types": {
        "filters": {
            "test": "is_family",
            "subject": "other",
            "operator": "!=",
            "value": "creeper"
        }
    }
}
```

```json
"minecraft:behavior.hurt_by_target": {
    "priority": 2,
    "entity_types": {
        "filters": {
            "all_of": [
                {
                    "test": "is_family",
                    "subject": "other",
                    "operator": "!=",
                    "value": "player"
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
}
```

llama

```json
"minecraft:behavior.hurt_by_target": {
    "priority": 1,
    "hurt_owner": true
}
```

panda

```json
"minecraft:behavior.hurt_by_target": {
    "priority": 1
}
```

piglin

```json
"minecraft:behavior.hurt_by_target": {
    "priority": 1
}
```

piglin_brute

```json
"minecraft:behavior.hurt_by_target": {
    "priority": 1
}
```

pillager

```json
"minecraft:behavior.hurt_by_target": {
    "priority": 1,
    "entity_types": {
        "filters": {
            "test": "is_family",
            "subject": "other",
            "operator": "!=",
            "value": "illager"
        },
        "max_dist": 64
    }
}
```

polar_bear

```json
"minecraft:behavior.hurt_by_target": {
    "priority": 1
}
```

ravager

```json
"minecraft:behavior.hurt_by_target": {
    "priority": 2,
    "entity_types": {
        "filters": {
            "test": "is_family",
            "subject": "other",
            "operator": "!=",
            "value": "illager"
        },
        "max_dist": 64
    }
}
```

shulker

```json
"minecraft:behavior.hurt_by_target": {
    "priority": 2,
    "entity_types": {
        "filters": {
            "test": "is_family",
            "subject": "other",
            "operator": "!=",
            "value": "shulker"
        }
    }
}
```

silverfish

```json
"minecraft:behavior.hurt_by_target": {
    "priority": 1,
    "alert_same_type": true
}
```

skeleton

```json
"minecraft:behavior.hurt_by_target": {
    "priority": 1
}
```

spider

```json
"minecraft:behavior.hurt_by_target": {
    "priority": 1
}
```

stray

```json
"minecraft:behavior.hurt_by_target": {
    "priority": 1
}
```

trader_llama

```json
"minecraft:behavior.hurt_by_target": {
    "priority": 1,
    "hurt_owner": true,
    "entity_types": {
        "filters": {
            "test": "is_family",
            "subject": "other",
            "operator": "!=",
            "value": "trader_llama"
        }
    }
}
```

turtle

```json
"minecraft:behavior.hurt_by_target": {
    "priority": 1
}
```

vex

```json
"minecraft:behavior.hurt_by_target": {
    "priority": 1
}
```

vindicator

```json
"minecraft:behavior.hurt_by_target": {
    "priority": 1
}
```

witch

```json
"minecraft:behavior.hurt_by_target": {
    "priority": 1
}
```

wither

```json
"minecraft:behavior.hurt_by_target": {
    "priority": 2
}
```

wither_skeleton

```json
"minecraft:behavior.hurt_by_target": {
    "priority": 1
}
```

wolf

```json
"minecraft:behavior.hurt_by_target": {
    "priority": 3
}
```

zoglin

```json
"minecraft:behavior.hurt_by_target": {
    "priority": 1
}
```

zombie

```json
"minecraft:behavior.hurt_by_target": {
    "priority": 1
}
```

zombie_pigman

```json
"minecraft:behavior.hurt_by_target": {
    "priority": 1
}
```

zombie_villager

```json
"minecraft:behavior.hurt_by_target": {
    "priority": 1
}
```

zombie_villager_v2

```json
"minecraft:behavior.hurt_by_target": {
    "priority": 1
}
```

## behavior.inspect_bookshelf

villager_v2

```json
"minecraft:behavior.inspect_bookshelf": {}
```

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

## behavior.investigate_suspicious_location

warden

```json
"minecraft:behavior.investigate_suspicious_location": {
    "priority": 5,
    "speed_multiplier": 0.7
}
```

## behavior.jump_to_block

frog

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

## behavior.knockback_roar

ravager

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

## behavior.lay_down

panda

```json
"minecraft:behavior.lay_down": {
    "priority": 5,
    "interval": 400,
    "random_stop_interval": 2000
}
```

## behavior.lay_egg

frog

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

## behavior.leap_at_target

cat

```json
"minecraft:behavior.leap_at_target": {
    "priority": 3,
    "target_dist": 0.3
}
```

cave_spider

```json
"minecraft:behavior.leap_at_target": {
    "priority": 4,
    "yd": 0.4,
    "must_be_on_ground": false
}
```

```json
"minecraft:behavior.leap_at_target": {
    "priority": 4,
    "yd": 0.4,
    "must_be_on_ground": false
}
```

ocelot

```json
"minecraft:behavior.leap_at_target": {
    "priority": 3,
    "target_dist": 0.3
}
```

spider

```json
"minecraft:behavior.leap_at_target": {
    "priority": 4,
    "yd": 0.4,
    "must_be_on_ground": false
}
```

wolf

```json
"minecraft:behavior.leap_at_target": {
    "priority": 4,
    "target_dist": 0.4
}
```

## behavior.look_at_entity

evocation_illager

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

## behavior.look_at_player

allay

```json
"minecraft:behavior.look_at_player": {
    "priority": 8,
    "target_distance": 6.0,
    "probability": 0.02
}
```

axolotl

```json
"minecraft:behavior.look_at_player": {
    "priority": 10,
    "target_distance": 6.0,
    "probability": 0.02
}
```

cat

```json
"minecraft:behavior.look_at_player": {
    "priority": 9
}
```

cave_spider

```json
"minecraft:behavior.look_at_player": {
    "priority": 7,
    "look_distance": 6.0,
    "probability": 0.02
}
```

chicken

```json
"minecraft:behavior.look_at_player": {
    "priority": 7,
    "look_distance": 6.0,
    "probability": 0.02
}
```

cow

```json
"minecraft:behavior.look_at_player": {
    "priority": 7,
    "look_distance": 6.0,
    "probability": 0.02
}
```

creeper

```json
"minecraft:behavior.look_at_player": {
    "priority": 6,
    "look_distance": 8
}
```

dolphin

```json
"minecraft:behavior.look_at_player": {
    "priority": 8,
    "look_distance": 6
}
```

donkey

```json
"minecraft:behavior.look_at_player": {
    "priority": 7,
    "look_distance": 6.0,
    "probability": 0.02
}
```

drowned

```json
"minecraft:behavior.look_at_player": {
    "priority": 8,
    "look_distance": 6,
    "probability": 0.02
}
```

elder_guardian

```json
"minecraft:behavior.look_at_player": {
    "priority": 8,
    "look_distance": 12.0,
    "probability": 0.01
}
```

enderman

```json
"minecraft:behavior.look_at_player": {
    "priority": 8,
    "look_distance": 8.0,
    "probability": 8.0
}
```

evocation_illager

```json
"minecraft:behavior.look_at_player": {
    "priority": 9,
    "look_distance": 3.0,
    "probability": 1.0
}
```

fox

```json
"minecraft:behavior.look_at_player": {
    "priority": 14,
    "look_distance": 6.0,
    "probability": 0.02
}
```

frog

```json
"minecraft:behavior.look_at_player": {
    "priority": 12,
    "target_distance": 6.0,
    "probability": 0.02
}
```

goat

```json
"minecraft:behavior.look_at_player": {
    "priority": 10,
    "look_distance": 6,
    "probability": 0.02
}
```

guardian

```json
"minecraft:behavior.look_at_player": {
    "priority": 8,
    "look_distance": 12.0,
    "probability": 0.01
}
```

hoglin

```json
"minecraft:behavior.look_at_player": {
    "priority": 8,
    "look_distance": 6.0,
    "probability": 0.02
}
```

horse

```json
"minecraft:behavior.look_at_player": {
    "priority": 7,
    "look_distance": 6.0,
    "probability": 0.02
}
```

husk

```json
"minecraft:behavior.look_at_player": {
    "priority": 8,
    "look_distance": 6,
    "probability": 0.02
}
```

iron_golem

```json
"minecraft:behavior.look_at_player": {
    "priority": 7,
    "look_distance": 6.0,
    "probability": 0.02
}
```

llama

```json
"minecraft:behavior.look_at_player": {
    "priority": 7,
    "look_distance": 6.0,
    "probability": 0.02
}
```

mooshroom

```json
"minecraft:behavior.look_at_player": {
    "priority": 7,
    "look_distance": 6.0,
    "probability": 0.02
}
```

mule

```json
"minecraft:behavior.look_at_player": {
    "priority": 7,
    "look_distance": 6.0,
    "probability": 0.02
}
```

npc

```json
"minecraft:behavior.look_at_player": {
    "priority": 0,
    "look_distance": 6.0,
    "probability": 0.02
}
```

ocelot

```json
"minecraft:behavior.look_at_player": {
    "priority": 9
}
```

panda

```json
"minecraft:behavior.look_at_player": {
    "priority": 8,
    "look_distance": 6.0,
    "probability": 0.02
}
```

parrot

```json
"minecraft:behavior.look_at_player": {
    "priority": 1,
    "look_distance": 8.0
}
```

pig

```json
"minecraft:behavior.look_at_player": {
    "priority": 8,
    "look_distance": 6.0,
    "probability": 0.02
}
```

piglin

```json
"minecraft:behavior.look_at_player": {
    "priority": 11,
    "look_distance": 8
}
```

piglin_brute

```json
"minecraft:behavior.look_at_player": {
    "priority": 8,
    "look_distance": 8
}
```

pillager

```json
"minecraft:behavior.look_at_player": {
    "priority": 9,
    "look_distance": 8
}
```

polar_bear

```json
"minecraft:behavior.look_at_player": {
    "priority": 6,
    "target_distance": 6.0,
    "probability": 0.02
}
```

rabbit

```json
"minecraft:behavior.look_at_player": {
    "priority": 11
}
```

ravager

```json
"minecraft:behavior.look_at_player": {
    "priority": 7,
    "look_distance": 6,
    "angle_of_view_horizontal": 45,
    "probability": 1
}
```

sheep

```json
"minecraft:behavior.look_at_player": {
    "priority": 8,
    "look_distance": 6.0,
    "probability": 0.02
}
```

shulker

```json
"minecraft:behavior.look_at_player": {
    "priority": 1,
    "look_distance": 6.0,
    "probability": 0.02
}
```

skeleton

```json
"minecraft:behavior.look_at_player": {
    "priority": 7,
    "look_distance": 8
}
```

skeleton_horse

```json
"minecraft:behavior.look_at_player": {
    "priority": 7,
    "look_distance": 6.0,
    "probability": 0.02
}
```

snow_golem

```json
"minecraft:behavior.look_at_player": {
    "priority": 3,
    "look_distance": 6.0
}
```

spider

```json
"minecraft:behavior.look_at_player": {
    "priority": 7,
    "look_distance": 6.0,
    "probability": 0.02
}
```

stray

```json
"minecraft:behavior.look_at_player": {
    "priority": 7,
    "look_distance": 8
}
```

strider

```json
"minecraft:behavior.look_at_player": {
    "priority": 9,
    "look_distance": 6.0,
    "probability": 0.02
}
```

tadpole

```json
"minecraft:behavior.look_at_player": {
    "priority": 3,
    "target_distance": 6.0,
    "probability": 0.02
}
```

trader_llama

```json
"minecraft:behavior.look_at_player": {
    "priority": 7,
    "look_distance": 6.0,
    "probability": 0.02
}
```

turtle

```json
"minecraft:behavior.look_at_player": {
    "priority": 8,
    "target_distance": 6.0,
    "probability": 0.02
}
```

vex

```json
"minecraft:behavior.look_at_player": {
    "priority": 9,
    "look_distance": 6.0,
    "probability": 0.02
}
```

villager

```json
"minecraft:behavior.look_at_player": {
    "priority": 12,
    "look_distance": 8,
    "probability": 0.02
}
```

villager_v2

```json
"minecraft:behavior.look_at_player": {
    "priority": 9,
    "look_distance": 8,
    "probability": 0.02
}
```

vindicator

```json
"minecraft:behavior.look_at_player": {
    "priority": 10,
    "look_distance": 8,
    "probability": 0.02
}
```

wandering_trader

```json
"minecraft:behavior.look_at_player": {
    "priority": 8,
    "look_distance": 8,
    "probability": 0.02
}
```

witch

```json
"minecraft:behavior.look_at_player": {
    "priority": 5,
    "look_distance": 8.0
}
```

wither

```json
"minecraft:behavior.look_at_player": {
    "priority": 6,
    "look_distance": 8
}
```

wither_skeleton

```json
"minecraft:behavior.look_at_player": {
    "priority": 7,
    "look_distance": 8
}
```

wolf

```json
"minecraft:behavior.look_at_player": {
    "priority": 6,
    "target_distance": 6.0,
    "probability": 0.02
}
```

zoglin

```json
"minecraft:behavior.look_at_player": {
    "priority": 8,
    "look_distance": 6.0,
    "probability": 0.02
}
```

zombie

```json
"minecraft:behavior.look_at_player": {
    "priority": 8,
    "look_distance": 6,
    "probability": 0.02
}
```

zombie_horse

```json
"minecraft:behavior.look_at_player": {
    "priority": 7,
    "look_distance": 6.0,
    "probability": 0.02
}
```

zombie_pigman

```json
"minecraft:behavior.look_at_player": {
    "priority": 8,
    "look_distance": 6.0,
    "probability": 0.02
}
```

zombie_villager

```json
"minecraft:behavior.look_at_player": {
    "priority": 10,
    "look_distance": 6,
    "probability": 0.02
}
```

zombie_villager_v2

```json
"minecraft:behavior.look_at_player": {
    "priority": 10,
    "look_distance": 6,
    "probability": 0.02
}
```

## behavior.look_at_target

wither

```json
"minecraft:behavior.look_at_target": {
    "priority": 5
}
```

## behavior.look_at_trading_player

villager

```json
"minecraft:behavior.look_at_trading_player": {
    "priority": 2
}
```

villager_v2

```json
"minecraft:behavior.look_at_trading_player": {
    "priority": 7
}
```

wandering_trader

```json
"minecraft:behavior.look_at_trading_player": {
    "priority": 4
}
```

## behavior.make_love

villager

```json
"minecraft:behavior.make_love": {
    "priority": 6
}
```

villager_v2

```json
"minecraft:behavior.make_love": {
    "priority": 5
}
```

## behavior.melee_attack

axolotl

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

```json
"minecraft:behavior.melee_attack": {
    "priority": 3
}
```

cave_spider

```json
"minecraft:behavior.melee_attack": {
    "priority": 3,
    "track_target": true,
    "random_stop_interval": 100,
    "reach_multiplier": 0.8
}
```

```json
"minecraft:behavior.melee_attack": {
    "priority": 3,
    "track_target": true,
    "reach_multiplier": 1.4
}
```

creeper

```json
"minecraft:behavior.melee_attack": {
    "priority": 4,
    "speed_multiplier": 1.25,
    "track_target": false,
    "reach_multiplier": 0.0
}
```

dolphin

```json
"minecraft:behavior.melee_attack": {
    "priority": 2,
    "track_target": true
}
```

drowned

```json
"minecraft:behavior.melee_attack": {
    "priority": 3,
    "speed_multiplier": 1,
    "track_target": false,
    "require_complete_path": true
}
```

enderman

```json
"minecraft:behavior.melee_attack": {
    "priority": 2
}
```

endermite

```json
"minecraft:behavior.melee_attack": {
    "priority": 3,
    "track_target": true
}
```

fox

```json
"minecraft:behavior.melee_attack": {
    "priority": 10,
    "track_target": true,
    "require_complete_path": true,
    "reach_multiplier": 1.5
}
```

```json
"minecraft:behavior.melee_attack": {
    "priority": 1,
    "track_target": true,
    "require_complete_path": true,
    "reach_multiplier": 1.5
}
```

hoglin

```json
"minecraft:behavior.melee_attack": {
    "priority": 4,
    "speed_multiplier": 1,
    "track_target": true,
    "reach_multiplier": 1.0,
    "cooldown_time": 0.75
}
```

```json
"minecraft:behavior.melee_attack": {
    "priority": 4,
    "speed_multiplier": 1,
    "track_target": true,
    "reach_multiplier": 2.15,
    "cooldown_time": 2
}
```

husk

```json
"minecraft:behavior.melee_attack": {
    "priority": 3
}
```

iron_golem

```json
"minecraft:behavior.melee_attack": {
    "priority": 1,
    "track_target": true
}
```

panda

```json
"minecraft:behavior.melee_attack": {
    "priority": 2,
    "attack_once": true,
    "track_target": true,
    "reach_multiplier": 1.0
}
```

```json
"minecraft:behavior.melee_attack": {
    "priority": 2,
    "track_target": true,
    "reach_multiplier": 1.0
}
```

piglin

```json
"minecraft:behavior.melee_attack": {
    "priority": 8,
    "speed_multiplier": 1.0,
    "track_target": true
}
```

piglin_brute

```json
"minecraft:behavior.melee_attack": {
    "priority": 4,
    "speed_multiplier": 1,
    "track_target": true
}
```

pillager

```json
"minecraft:behavior.melee_attack": {
    "priority": 4,
    "track_target": true
}
```

silverfish

```json
"minecraft:behavior.melee_attack": {
    "priority": 4,
    "track_target": true
}
```

skeleton

```json
"minecraft:behavior.melee_attack": {
    "priority": 4,
    "track_target": true,
    "speed_multiplier": 1.25
}
```

spider

```json
"minecraft:behavior.melee_attack": {
    "priority": 3,
    "track_target": true,
    "reach_multiplier": 0.8
}
```

stray

```json
"minecraft:behavior.melee_attack": {
    "priority": 4,
    "track_target": true,
    "speed_multiplier": 1.25
}
```

vindicator

```json
"minecraft:behavior.melee_attack": {
    "priority": 3
}
```

warden

```json
"minecraft:behavior.melee_attack": {
    "priority": 4,
    "speed_multiplier": 1.2,
    "melee_fov": 360
}
```

wither_skeleton

```json
"minecraft:behavior.melee_attack": {
    "priority": 4,
    "track_target": true,
    "speed_multiplier": 1.25
}
```

wolf

```json
"minecraft:behavior.melee_attack": {
    "priority": 5
}
```

zoglin

```json
"minecraft:behavior.melee_attack": {
    "priority": 4,
    "reach_multiplier": 2.15,
    "speed_multiplier": 1.4,
    "track_target": true
}
```

zombie

```json
"minecraft:behavior.melee_attack": {
    "priority": 3
}
```

zombie_pigman

```json
"minecraft:behavior.melee_attack": {
    "priority": 4,
    "speed_multiplier": 1.5
}
```

zombie_villager

```json
"minecraft:behavior.melee_attack": {
    "priority": 6
}
```

zombie_villager_v2

```json
"minecraft:behavior.melee_attack": {
    "priority": 6
}
```

## behavior.mingle

villager_v2

```json
"minecraft:behavior.mingle": {}
```

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

## behavior.mount_pathing

cat

```json
"minecraft:behavior.mount_pathing": {
    "priority": 1,
    "speed_multiplier": 1.25,
    "target_dist": 0,
    "track_target": true
}
```

cave_spider

```json
"minecraft:behavior.mount_pathing": {
    "priority": 5,
    "speed_multiplier": 1.25,
    "target_dist": 0.0,
    "track_target": true
}
```

chicken

```json
"minecraft:behavior.mount_pathing": {
    "priority": 2,
    "speed_multiplier": 1.5,
    "target_dist": 0.0,
    "track_target": true
}
```

cow

```json
"minecraft:behavior.mount_pathing": {
    "priority": 2,
    "speed_multiplier": 1.5,
    "target_dist": 0.0,
    "track_target": true
}
```

donkey

```json
"minecraft:behavior.mount_pathing": {
    "priority": 2,
    "speed_multiplier": 1.5,
    "target_dist": 0.0,
    "track_target": true
}
```

horse

```json
"minecraft:behavior.mount_pathing": {
    "priority": 2,
    "speed_multiplier": 1.5,
    "target_dist": 0.0,
    "track_target": true
}
```

husk

```json
"minecraft:behavior.mount_pathing": {
    "priority": 2,
    "speed_multiplier": 1.25,
    "target_dist": 0.0,
    "track_target": true
}
```

llama

```json
"minecraft:behavior.mount_pathing": {
    "priority": 1,
    "speed_multiplier": 1.25,
    "target_dist": 0.0,
    "track_target": true
}
```

mooshroom

```json
"minecraft:behavior.mount_pathing": {
    "priority": 2,
    "speed_multiplier": 1.5,
    "target_dist": 0.0,
    "track_target": true
}
```

mule

```json
"minecraft:behavior.mount_pathing": {
    "priority": 2,
    "speed_multiplier": 1.5,
    "target_dist": 0.0,
    "track_target": true
}
```

ocelot

```json
"minecraft:behavior.mount_pathing": {
    "priority": 1,
    "speed_multiplier": 1.25,
    "target_dist": 0,
    "track_target": true
}
```

panda

```json
"minecraft:behavior.mount_pathing": {
    "priority": 5,
    "speed_multiplier": 1.5,
    "target_dist": 0.0,
    "track_target": true
}
```

pig

```json
"minecraft:behavior.mount_pathing": {
    "priority": 1,
    "speed_multiplier": 1.25,
    "target_dist": 0.0,
    "track_target": true
}
```

ravager

```json
"minecraft:behavior.mount_pathing": {
    "priority": 5,
    "speed_multiplier": 1.25,
    "target_dist": 0.0,
    "track_target": true
}
```

sheep

```json
"minecraft:behavior.mount_pathing": {
    "priority": 2,
    "speed_multiplier": 1.5,
    "target_dist": 0.0,
    "track_target": true
}
```

skeleton_horse

```json
"minecraft:behavior.mount_pathing": {
    "priority": 2,
    "speed_multiplier": 1.5,
    "target_dist": 4.0,
    "track_target": true
}
```

spider

```json
"minecraft:behavior.mount_pathing": {
    "priority": 5,
    "speed_multiplier": 1.25,
    "target_dist": 0.0,
    "track_target": true
}
```

trader_llama

```json
"minecraft:behavior.mount_pathing": {
    "priority": 1,
    "speed_multiplier": 1.25,
    "target_dist": 0.0,
    "track_target": true
}
```

wolf

```json
"minecraft:behavior.mount_pathing": {
    "priority": 1,
    "speed_multiplier": 1.25,
    "target_dist": 0,
    "track_target": true
}
```

zombie

```json
"minecraft:behavior.mount_pathing": {
    "priority": 2,
    "speed_multiplier": 1.25,
    "target_dist": 0.0,
    "track_target": true
}
```

zombie_horse

```json
"minecraft:behavior.mount_pathing": {
    "priority": 2,
    "speed_multiplier": 1.5,
    "target_dist": 0.0,
    "track_target": true
}
```

zombie_pigman

```json
"minecraft:behavior.mount_pathing": {
    "priority": 2,
    "speed_multiplier": 1.25,
    "target_dist": 0,
    "track_target": true
}
```

zombie_villager

```json
"minecraft:behavior.mount_pathing": {
    "priority": 5,
    "speed_multiplier": 1.25,
    "target_dist": 0.0,
    "track_target": true
}
```

zombie_villager_v2

```json
"minecraft:behavior.mount_pathing": {
    "priority": 5,
    "speed_multiplier": 1.25,
    "target_dist": 0.0,
    "track_target": true
}
```

## behavior.move_indoors

villager

```json
"minecraft:behavior.move_indoors": {
    "priority": 4,
    "speed_multiplier": 0.8
}
```

villager_v2

```json
"minecraft:behavior.move_indoors": {
    "priority": 6,
    "speed_multiplier": 0.8,
    "timeout_cooldown": 8.0
}
```

## behavior.move_outdoors

villager

```json
"minecraft:behavior.move_outdoors": {
    "priority": 2,
    "speed_multiplier": 0.8,
    "timeout_cooldown": 8.0
}
```

villager_v2

```json
"minecraft:behavior.move_outdoors": {
    "priority": 2,
    "speed_multiplier": 0.8,
    "timeout_cooldown": 8.0
}
```

## behavior.move_through_village

iron_golem

```json
"minecraft:behavior.move_through_village": {
    "priority": 3,
    "speed_multiplier": 0.6,
    "only_at_night": true
}
```

## behavior.move_to_block

bee

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

## behavior.move_to_land

frog

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

```json
"minecraft:behavior.move_to_land": {
    "priority": 6,
    "search_range": 16,
    "search_height": 5,
    "goal_radius": 0.5
}
```

## behavior.move_to_liquid

strider

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

## behavior.move_to_random_block

pillager

```json
"minecraft:behavior.move_to_random_block": {
    "priority": 6,
    "speed_multiplier": 0.55,
    "within_radius": 8,
    "block_distance": 512
}
```

vindicator

```json
"minecraft:behavior.move_to_random_block": {
    "priority": 5,
    "speed_multiplier": 0.55,
    "within_radius": 8,
    "block_distance": 512
}
```

## behavior.move_to_village

evocation_illager

```json
"minecraft:behavior.move_to_village": {
    "priority": 6,
    "speed_multiplier": 0.7
}
```

pillager

```json
"minecraft:behavior.move_to_village": {
    "priority": 5,
    "speed_multiplier": 1.0,
    "goal_radius": 2.0
}
```

ravager

```json
"minecraft:behavior.move_to_village": {
    "priority": 5,
    "speed_multiplier": 1.0,
    "goal_radius": 2.0
}
```

vindicator

```json
"minecraft:behavior.move_to_village": {
    "priority": 4,
    "speed_multiplier": 1.0,
    "goal_radius": 2.0
}
```

witch

```json
"minecraft:behavior.move_to_village": {
    "priority": 3,
    "speed_multiplier": 1.2,
    "goal_radius": 2.0
}
```

## behavior.move_to_water

axolotl

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

```json
"minecraft:behavior.move_to_water": {
    "priority": 1,
    "search_range": 15,
    "search_height": 5
}
```

frog

```json
"minecraft:behavior.move_to_water": {
    "priority": 3,
    "search_range": 20,
    "search_height": 5,
    "goal_radius": 1.5
}
```

turtle

```json
"minecraft:behavior.move_to_water": {
    "priority": 4,
    "search_range": 16,
    "search_height": 5,
    "goal_radius": 1.5
}
```

```json
"minecraft:behavior.move_to_water": {
    "priority": 1,
    "search_range": 15,
    "search_height": 5,
    "goal_radius": 0.1
}
```

## behavior.move_towards_dwelling_restriction

cat

```json
"minecraft:behavior.move_towards_dwelling_restriction": {
    "priority": 7
}
```

iron_golem

```json
"minecraft:behavior.move_towards_dwelling_restriction": {
    "priority": 4,
    "speed_multiplier": 1
}
```

villager_v2

```json
"minecraft:behavior.move_towards_dwelling_restriction": {
    "priority": 11,
    "speed_multiplier": 0.6
}
```

## behavior.move_towards_home_restriction

bee

```json
"minecraft:behavior.move_towards_home_restriction": {
    "priority": 9
}
```

elder_guardian

```json
"minecraft:behavior.move_towards_home_restriction": {
    "priority": 5,
    "speed_multiplier": 1.0
}
```

guardian

```json
"minecraft:behavior.move_towards_home_restriction": {
    "priority": 5,
    "speed_multiplier": 1.0
}
```

wandering_trader

```json
"minecraft:behavior.move_towards_home_restriction": {
    "priority": 6,
    "speed_multiplier": 0.6
}
```

## behavior.move_towards_target

iron_golem

```json
"minecraft:behavior.move_towards_target": {
    "priority": 2,
    "speed_multiplier": 0.9,
    "within_radius": 32
}
```

## behavior.nap

fox

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

## behavior.nearest_attackable_target

axolotl

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

elder_guardian

```json
"minecraft:behavior.nearest_attackable_target": {
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
                        "value": "squid"
                    },
                    {
                        "test": "is_family",
                        "subject": "other",
                        "value": "axolotl"
                    }
                ]
            },
            "max_dist": 16
        }
    ],
    "attack_interval_min": 1.0,
    "must_see": true
}
```

enderman

```json
"minecraft:behavior.nearest_attackable_target": {
    "priority": 5,
    "must_see": true,
    "attack_interval": 10,
    "entity_types": [
        {
            "filters": {
                "test": "is_family",
                "subject": "other",
                "value": "endermite"
            },
            "max_dist": 64
        }
    ]
}
```

endermite

```json
"minecraft:behavior.nearest_attackable_target": {
    "priority": 5,
    "must_see": true,
    "within_radius": 16.0,
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
                        "value": "enderman"
                    }
                ]
            },
            "max_dist": 16
        }
    ]
}
```

evocation_illager

```json
"minecraft:behavior.nearest_attackable_target": {
    "priority": 2,
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
                    },
                    {
                        "test": "is_family",
                        "subject": "other",
                        "value": "wandering_trader"
                    }
                ]
            },
            "max_dist": 20
        },
        {
            "filters": {
                "all_of": [
                    {
                        "test": "is_family",
                        "subject": "other",
                        "value": "villager"
                    },
                    {
                        "test": "has_component",
                        "subject": "other",
                        "operator": "!=",
                        "value": "minecraft:is_baby"
                    }
                ]
            },
            "max_dist": 20
        }
    ],
    "must_see": true
}
```

frog

```json
"minecraft:behavior.nearest_attackable_target": {
    "priority": 8,
    "within_radius": 16,
    "entity_types": [
        {
            "filters": {
                "all_of": [
                    {
                        "test": "is_family",
                        "subject": "other",
                        "value": "slime"
                    },
                    {
                        "test": "is_variant",
                        "subject": "other",
                        "operator": "==",
                        "value": 1
                    }
                ]
            },
            "max_dist": 16
        },
        {
            "filters": {
                "all_of": [
                    {
                        "test": "is_family",
                        "subject": "other",
                        "value": "magmacube"
                    },
                    {
                        "test": "is_variant",
                        "subject": "other",
                        "operator": "==",
                        "value": 1
                    }
                ]
            },
            "max_dist": 16
        }
    ],
    "must_see": true
}
```

ghast

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
            "max_dist": 28
        }
    ],
    "must_see": true
}
```

goat

```json
"minecraft:behavior.nearest_attackable_target": {
    "priority": 6,
    "within_radius": 16,
    "entity_types": [
        {
            "filters": {
                "all_of": [
                    {
                        "test": "is_family",
                        "subject": "other",
                        "operator": "!=",
                        "value": "goat"
                    },
                    {
                        "test": "has_component",
                        "subject": "self",
                        "operator": "!=",
                        "value": "minecraft:attack_cooldown"
                    }
                ]
            },
            "max_dist": 16
        }
    ],
    "must_see": true
}
```

guardian

```json
"minecraft:behavior.nearest_attackable_target": {
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
                        "value": "squid"
                    },
                    {
                        "test": "is_family",
                        "subject": "other",
                        "value": "axolotl"
                    }
                ]
            },
            "max_dist": 16
        }
    ],
    "attack_interval_min": 1.0,
    "must_see": true
}
```

```json
"minecraft:behavior.nearest_attackable_target": {
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
                        "value": "squid"
                    },
                    {
                        "test": "is_family",
                        "subject": "other",
                        "value": "axolotl"
                    }
                ]
            },
            "max_dist": 16
        }
    ],
    "attack_interval_min": 1.0,
    "must_see": true
}
```

hoglin

```json
"minecraft:behavior.nearest_attackable_target": {
    "priority": 4,
    "within_radius": 16.0,
    "entity_types": [
        {
            "filters": {
                "all_of": [
                    {
                        "test": "is_family",
                        "subject": "other",
                        "value": "player"
                    },
                    {
                        "test": "has_component",
                        "subject": "self",
                        "operator": "!=",
                        "value": "minecraft:attack_cooldown"
                    }
                ]
            },
            "max_dist": 16
        }
    ],
    "must_see": true
}
```

husk

```json
"minecraft:behavior.nearest_attackable_target": {
    "priority": 2,
    "must_see": true,
    "reselect_targets": true,
    "within_radius": 25.0,
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
            "max_dist": 35
        },
        {
            "filters": {
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
            "max_dist": 35,
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
            "max_dist": 35
        }
    ]
}
```

iron_golem

```json
"minecraft:behavior.nearest_attackable_target": {
    "priority": 3,
    "must_reach": true,
    "must_see": true,
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
            },
            "within_default": 10
        },
        {
            "filters": {
                "all_of": [
                    {
                        "test": "is_family",
                        "subject": "other",
                        "value": "hoglin"
                    },
                    {
                        "test": "is_difficulty",
                        "operator": "!=",
                        "value": "peaceful"
                    }
                ]
            },
            "max_dist": 16
        },
        {
            "filters": {
                "all_of": [
                    {
                        "test": "is_family",
                        "subject": "other",
                        "value": "zoglin"
                    },
                    {
                        "test": "is_difficulty",
                        "operator": "!=",
                        "value": "peaceful"
                    }
                ]
            },
            "max_dist": 16
        }
    ]
}
```

llama

```json
"minecraft:behavior.nearest_attackable_target": {
    "priority": 2,
    "attack_interval": 16,
    "entity_types": [
        {
            "filters": {
                "all_of": [
                    {
                        "test": "is_family",
                        "subject": "other",
                        "value": "wolf"
                    },
                    {
                        "test": "has_component",
                        "subject": "other",
                        "operator": "!=",
                        "value": "minecraft:is_tamed"
                    }
                ]
            },
            "max_dist": 10
        }
    ],
    "must_see": false,
    "must_reach": true
}
```

magma_cube

```json
"minecraft:behavior.nearest_attackable_target": {
    "priority": 2,
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
                        "value": "irongolem"
                    }
                ]
            },
            "max_dist": 16
        }
    ],
    "must_see": true
}
```

ocelot

```json
"minecraft:behavior.nearest_attackable_target": {
    "priority": 1,
    "reselect_targets": true,
    "entity_types": [
        {
            "filters": {
                "test": "is_family",
                "subject": "other",
                "value": "chicken"
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

phantom

```json
"minecraft:behavior.nearest_attackable_target": {
    "priority": 1,
    "reselect_targets": true,
    "scan_interval": 20,
    "within_radius": 64.0,
    "must_see_forget_duration": 0.5,
    "target_search_height": 80.0,
    "entity_types": [
        {
            "filters": {
                "test": "is_family",
                "subject": "other",
                "value": "player"
            },
            "max_dist": 64
        }
    ]
}
```

piglin

```json
"minecraft:behavior.nearest_attackable_target": {
    "priority": 7,
    "within_radius": 16.0,
    "persist_time": 0.0,
    "entity_types": [
        {
            "filters": {
                "any_of": [
                    {
                        "test": "is_family",
                        "subject": "other",
                        "value": "wither"
                    }
                ]
            },
            "max_dist": 16
        },
        {
            "filters": {
                "all_of": [
                    {
                        "test": "is_family",
                        "subject": "self",
                        "value": "piglin_hunter"
                    },
                    {
                        "test": "is_family",
                        "subject": "other",
                        "value": "hoglin_huntable"
                    },
                    {
                        "test": "has_component",
                        "subject": "other",
                        "operator": "!=",
                        "value": "minecraft:is_baby"
                    },
                    {
                        "test": "has_component",
                        "subject": "self",
                        "operator": "!=",
                        "value": "minecraft:attack_cooldown"
                    }
                ]
            },
            "max_dist": 16
        },
        {
            "filters": {
                "all_of": [
                    {
                        "test": "is_family",
                        "subject": "other",
                        "value": "player"
                    },
                    {
                        "test": "has_equipment",
                        "subject": "other",
                        "domain": "head",
                        "operator": "!=",
                        "value": "golden_helmet"
                    },
                    {
                        "test": "has_equipment",
                        "subject": "other",
                        "domain": "torso",
                        "operator": "!=",
                        "value": "golden_chestplate"
                    },
                    {
                        "test": "has_equipment",
                        "subject": "other",
                        "domain": "leg",
                        "operator": "!=",
                        "value": "golden_leggings"
                    },
                    {
                        "test": "has_equipment",
                        "subject": "other",
                        "domain": "feet",
                        "operator": "!=",
                        "value": "golden_boots"
                    }
                ]
            },
            "max_dist": 16,
            "reevaluate_description": true
        },
        {
            "filters": {
                "any_of": [
                    {
                        "test": "has_container_open",
                        "subject": "other",
                        "operator": "==",
                        "value": true
                    }
                ]
            },
            "max_dist": 16
        }
    ],
    "must_see": true
}
```

```json
"minecraft:behavior.nearest_attackable_target": {
    "priority": 7,
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

piglin_brute

```json
"minecraft:behavior.nearest_attackable_target": {
    "priority": 3,
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

pillager

```json
"minecraft:behavior.nearest_attackable_target": {
    "priority": 2,
    "must_see": true,
    "reselect_targets": true,
    "within_radius": 16.0,
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
                        "value": "irongolem"
                    },
                    {
                        "test": "is_family",
                        "subject": "other",
                        "value": "wandering_trader"
                    }
                ]
            },
            "max_dist": 16
        },
        {
            "filters": {
                "all_of": [
                    {
                        "test": "is_family",
                        "subject": "other",
                        "value": "villager"
                    },
                    {
                        "test": "has_component",
                        "subject": "other",
                        "operator": "!=",
                        "value": "minecraft:is_baby"
                    }
                ]
            },
            "max_dist": 16
        }
    ]
}
```

polar_bear

```json
"minecraft:behavior.nearest_attackable_target": {
    "priority": 4,
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

```json
"minecraft:behavior.nearest_attackable_target": {
    "priority": 4,
    "entity_types": [
        {
            "filters": {
                "test": "is_family",
                "subject": "other",
                "value": "fox"
            },
            "max_dist": 16
        }
    ],
    "must_see": false
}
```

ravager

```json
"minecraft:behavior.nearest_attackable_target": {
    "priority": 3,
    "must_see": true,
    "within_radius": 16.0,
    "entity_types": [
        {
            "filters": {
                "any_of": [
                    {
                        "subject": "other",
                        "test": "is_family",
                        "value": "player"
                    },
                    {
                        "subject": "other",
                        "test": "is_family",
                        "value": "irongolem"
                    },
                    {
                        "test": "is_family",
                        "subject": "other",
                        "value": "wandering_trader"
                    }
                ]
            },
            "max_dist": 16
        },
        {
            "filters": {
                "all_of": [
                    {
                        "test": "is_family",
                        "subject": "other",
                        "value": "villager"
                    },
                    {
                        "test": "has_component",
                        "subject": "other",
                        "operator": "!=",
                        "value": "minecraft:is_baby"
                    }
                ]
            },
            "max_dist": 16
        }
    ]
}
```

shulker

```json
"minecraft:behavior.nearest_attackable_target": {
    "priority": 3,
    "entity_types": {
        "filters": {
            "test": "is_family",
            "subject": "other",
            "value": "player"
        },
        "max_dist": 16
    },
    "must_see": true
}
```

silverfish

```json
"minecraft:behavior.nearest_attackable_target": {
    "priority": 2,
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
            "max_dist": 8
        }
    ]
}
```

skeleton

```json
"minecraft:behavior.nearest_attackable_target": {
    "priority": 2,
    "must_see": true,
    "reselect_targets": true,
    "entity_types": [
        {
            "filters": {
                "test": "is_family",
                "subject": "other",
                "value": "player"
            },
            "max_dist": 16
        },
        {
            "filters": {
                "test": "is_family",
                "subject": "other",
                "value": "irongolem"
            },
            "max_dist": 16
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
            "max_dist": 16
        }
    ]
}
```

slime

```json
"minecraft:behavior.nearest_attackable_target": {
    "priority": 2,
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
    ],
    "must_see": true
}
```

snow_golem

```json
"minecraft:behavior.nearest_attackable_target": {
    "priority": 1,
    "entity_types": [
        {
            "filters": {
                "test": "is_family",
                "subject": "other",
                "value": "monster"
            },
            "within_default": 6
        }
    ]
}
```

spider

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

stray

```json
"minecraft:behavior.nearest_attackable_target": {
    "priority": 2,
    "must_see": true,
    "reselect_targets": true,
    "entity_types": [
        {
            "filters": {
                "test": "is_family",
                "subject": "other",
                "value": "player"
            },
            "max_dist": 16
        },
        {
            "filters": {
                "test": "is_family",
                "subject": "other",
                "value": "irongolem"
            },
            "max_dist": 16
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
            "max_dist": 16
        }
    ]
}
```

trader_llama

```json
"minecraft:behavior.nearest_attackable_target": {
    "priority": 2,
    "attack_interval": 16,
    "entity_types": [
        {
            "filters": {
                "all_of": [
                    {
                        "test": "is_family",
                        "subject": "other",
                        "value": "wolf"
                    },
                    {
                        "test": "has_component",
                        "subject": "other",
                        "operator": "!=",
                        "value": "minecraft:is_tamed"
                    }
                ]
            },
            "max_dist": 10
        }
    ],
    "must_see": false,
    "must_reach": true
}
```

vex

```json
"minecraft:behavior.nearest_attackable_target": {
    "priority": 3,
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
                        "value": "irongolem"
                    },
                    {
                        "test": "is_family",
                        "subject": "other",
                        "value": "wandering_trader"
                    }
                ]
            },
            "max_dist": 70
        },
        {
            "filters": {
                "all_of": [
                    {
                        "test": "is_family",
                        "subject": "other",
                        "value": "villager"
                    },
                    {
                        "test": "has_component",
                        "subject": "other",
                        "operator": "!=",
                        "value": "minecraft:is_baby"
                    }
                ]
            },
            "max_dist": 70
        }
    ],
    "must_see": true
}
```

vindicator

```json
"minecraft:behavior.nearest_attackable_target": {
    "priority": 2,
    "must_see": true,
    "within_radius": 12.0,
    "must_see_forget_duration": 40.0,
    "entity_types": [
        {
            "filters": {
                "all_of": [
                    {
                        "test": "is_family",
                        "subject": "other",
                        "operator": "!=",
                        "value": "illager"
                    }
                ]
            },
            "max_dist": 12
        }
    ]
}
```

```json
"minecraft:behavior.nearest_attackable_target": {
    "priority": 2,
    "must_see": true,
    "within_radius": 12.0,
    "must_see_forget_duration": 40.0,
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
                    },
                    {
                        "test": "is_family",
                        "subject": "other",
                        "value": "wandering_trader"
                    }
                ]
            },
            "max_dist": 12
        },
        {
            "filters": {
                "all_of": [
                    {
                        "test": "is_family",
                        "subject": "other",
                        "value": "villager"
                    },
                    {
                        "test": "has_component",
                        "subject": "other",
                        "operator": "!=",
                        "value": "minecraft:is_baby"
                    }
                ]
            },
            "max_dist": 12
        }
    ]
}
```

witch

```json
"minecraft:behavior.nearest_attackable_target": {
    "priority": 2,
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
            "max_dist": 10
        }
    ],
    "must_reach": true
}
```

wither

```json
"minecraft:behavior.nearest_attackable_target": {
    "priority": 3,
    "entity_types": [
        {
            "filters": {
                "test": "is_family",
                "subject": "other",
                "value": "player"
            },
            "max_dist": 70
        },
        {
            "filters": {
                "all_of": [
                    {
                        "test": "is_family",
                        "subject": "other",
                        "operator": "!=",
                        "value": "undead"
                    },
                    {
                        "test": "is_family",
                        "subject": "other",
                        "operator": "!=",
                        "value": "inanimate"
                    }
                ]
            },
            "max_dist": 70
        }
    ],
    "must_see": true
}
```

wither_skeleton

```json
"minecraft:behavior.nearest_attackable_target": {
    "priority": 2,
    "reselect_targets": true,
    "must_see": true,
    "entity_types": [
        {
            "filters": {
                "test": "is_family",
                "subject": "other",
                "value": "player"
            },
            "max_dist": 16
        },
        {
            "filters": {
                "all_of": [
                    {
                        "test": "is_family",
                        "subject": "other",
                        "value": "piglin"
                    },
                    {
                        "test": "is_difficulty",
                        "operator": "!=",
                        "value": "peaceful"
                    }
                ]
            },
            "max_dist": 16
        },
        {
            "filters": {
                "test": "is_family",
                "subject": "other",
                "value": "irongolem"
            },
            "max_dist": 16
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
            "max_dist": 16
        }
    ]
}
```

wolf

```json
"minecraft:behavior.nearest_attackable_target": {
    "priority": 4,
    "reselect_targets": true,
    "must_see": true,
    "entity_types": [
        {
            "filters": {
                "any_of": [
                    {
                        "test": "is_family",
                        "subject": "other",
                        "value": "skeleton"
                    },
                    {
                        "test": "is_family",
                        "subject": "other",
                        "value": "sheep"
                    },
                    {
                        "test": "is_family",
                        "subject": "other",
                        "value": "rabbit"
                    },
                    {
                        "test": "is_family",
                        "subject": "other",
                        "value": "fox"
                    }
                ]
            },
            "max_dist": 16
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
            "max_dist": 16
        },
        {
            "filters": {
                "all_of": [
                    {
                        "test": "is_family",
                        "subject": "other",
                        "value": "skeleton"
                    },
                    {
                        "test": "is_underwater",
                        "subject": "other",
                        "operator": "!=",
                        "value": true
                    }
                ]
            },
            "max_dist": 16
        }
    ]
}
```

```json
"minecraft:behavior.nearest_attackable_target": {
    "priority": 5,
    "must_see": true,
    "entity_types": [
        {
            "filters": {
                "test": "is_family",
                "subject": "other",
                "value": "skeleton"
            },
            "max_dist": 16
        }
    ]
}
```

zoglin

```json
"minecraft:behavior.nearest_attackable_target": {
    "priority": 3,
    "within_radius": 16.0,
    "entity_types": [
        {
            "filters": {
                "all_of": [
                    {
                        "test": "is_family",
                        "subject": "other",
                        "operator": "!=",
                        "value": "zoglin"
                    },
                    {
                        "test": "is_family",
                        "subject": "other",
                        "operator": "!=",
                        "value": "creeper"
                    }
                ]
            },
            "max_dist": 16
        }
    ],
    "must_see": true
}
```

zombie

```json
"minecraft:behavior.nearest_attackable_target": {
    "priority": 2,
    "must_see": true,
    "reselect_targets": true,
    "within_radius": 25.0,
    "must_see_forget_duration": 17.0,
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
            "max_dist": 35
        },
        {
            "filters": {
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
            "max_dist": 35,
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
            "max_dist": 35
        }
    ]
}
```

zombie_villager

```json
"minecraft:behavior.nearest_attackable_target": {
    "priority": 2,
    "must_see": true,
    "reselect_targets": true,
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
            "max_dist": 35
        },
        {
            "filters": {
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
            "max_dist": 35,
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
            "max_dist": 35
        }
    ]
}
```

zombie_villager_v2

```json
"minecraft:behavior.nearest_attackable_target": {
    "priority": 2,
    "must_see": true,
    "reselect_targets": true,
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
                    },
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
            "max_dist": 35
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
            "max_dist": 35
        }
    ]
}
```

## behavior.nearest_prioritized_attackable_target

fox

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

## behavior.ocelot_sit_on_block

cat

```json
"minecraft:behavior.ocelot_sit_on_block": {
    "priority": 7,
    "speed_multiplier": 1.0
}
```

ocelot

```json
"minecraft:behavior.ocelot_sit_on_block": {
    "priority": 6,
    "speed_multiplier": 1.0
}
```

## behavior.ocelotattack

cat

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

## behavior.offer_flower

iron_golem

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

## behavior.open_door

villager

```json
"minecraft:behavior.open_door": {
    "priority": 6,
    "close_door_after": true
}
```

## behavior.owner_hurt_by_target

wolf

```json
"minecraft:behavior.owner_hurt_by_target": {
    "priority": 1
}
```

## behavior.owner_hurt_target

wolf

```json
"minecraft:behavior.owner_hurt_target": {
    "priority": 2
}
```

## behavior.panic

allay

```json
"minecraft:behavior.panic": {
    "priority": 1,
    "speed_multiplier": 2.0
}
```

bee

```json
"minecraft:behavior.panic": {
    "priority": 1,
    "speed_multiplier": 1.25,
    "force": true
}
```

```json
"minecraft:behavior.panic": {
    "priority": 1,
    "speed_multiplier": 1.25,
    "force": true
}
```

cat

```json
"minecraft:behavior.panic": {
    "priority": 1,
    "speed_multiplier": 1.25
}
```

chicken

```json
"minecraft:behavior.panic": {
    "priority": 1,
    "speed_multiplier": 1.5
}
```

cow

```json
"minecraft:behavior.panic": {
    "priority": 1,
    "speed_multiplier": 1.25
}
```

dolphin

```json
"minecraft:behavior.panic": {
    "priority": 1,
    "speed_multiplier": 1.25
}
```

donkey

```json
"minecraft:behavior.panic": {
    "priority": 1,
    "speed_multiplier": 1.2
}
```

fox

```json
"minecraft:behavior.panic": {
    "priority": 1,
    "speed_multiplier": 1.25
}
```

```json
"minecraft:behavior.panic": {
    "priority": 2,
    "speed_multiplier": 1.25
}
```

frog

```json
"minecraft:behavior.panic": {
    "priority": 1,
    "speed_multiplier": 2.0
}
```

goat

```json
"minecraft:behavior.panic": {
    "priority": 1,
    "speed_multiplier": 1
}
```

hoglin

```json
"minecraft:behavior.panic": {
    "priority": 1,
    "speed_multiplier": 1
}
```

horse

```json
"minecraft:behavior.panic": {
    "priority": 3,
    "speed_multiplier": 1.2
}
```

llama

```json
"minecraft:behavior.panic": {
    "priority": 4,
    "speed_multiplier": 1.2
}
```

mooshroom

```json
"minecraft:behavior.panic": {
    "priority": 1,
    "speed_multiplier": 1.25
}
```

mule

```json
"minecraft:behavior.panic": {
    "priority": 1,
    "speed_multiplier": 1.2
}
```

ocelot

```json
"minecraft:behavior.panic": {
    "priority": 1,
    "speed_multiplier": 1.25
}
```

panda

```json
"minecraft:behavior.panic": {
    "priority": 1,
    "speed_multiplier": 1.25
}
```

```json
"minecraft:behavior.panic": {
    "priority": 1,
    "speed_multiplier": 2.5
}
```

```json
"minecraft:behavior.panic": {
    "priority": 1,
    "speed_multiplier": 1.25,
    "ignore_mob_damage": true
}
```

parrot

```json
"minecraft:behavior.panic": {
    "priority": 0,
    "speed_multiplier": 1.25
}
```

pig

```json
"minecraft:behavior.panic": {
    "priority": 3,
    "speed_multiplier": 1.25
}
```

piglin

```json
"minecraft:behavior.panic": {
    "priority": 1,
    "speed_multiplier": 1.1
}
```

rabbit

```json
"minecraft:behavior.panic": {
    "priority": 1,
    "speed_multiplier": 2.2
}
```

sheep

```json
"minecraft:behavior.panic": {
    "priority": 1,
    "speed_multiplier": 1.25
}
```

skeleton_horse

```json
"minecraft:behavior.panic": {
    "priority": 1,
    "speed_multiplier": 1.2
}
```

strider

```json
"minecraft:behavior.panic": {
    "priority": 3,
    "speed_multiplier": 1.1,
    "panic_sound": "panic",
    "sound_interval": {
        "range_min": 1.0,
        "range_max": 3.0
    }
}
```

tadpole

```json
"minecraft:behavior.panic": {
    "priority": 1,
    "speed_multiplier": 2.0
}
```

trader_llama

```json
"minecraft:behavior.panic": {
    "priority": 4,
    "speed_multiplier": 1.2
}
```

turtle

```json
"minecraft:behavior.panic": {
    "priority": 0,
    "prefer_water": true,
    "speed_multiplier": 1.2
}
```

villager

```json
"minecraft:behavior.panic": {
    "priority": 3,
    "speed_multiplier": 0.6
}
```

villager_v2

```json
"minecraft:behavior.panic": {
    "priority": 1,
    "speed_multiplier": 0.6
}
```

wandering_trader

```json
"minecraft:behavior.panic": {
    "priority": 1,
    "speed_multiplier": 0.6
}
```

zombie_horse

```json
"minecraft:behavior.panic": {
    "priority": 1,
    "speed_multiplier": 1.2
}
```

## behavior.pet_sleep_with_owner

cat

```json
"minecraft:behavior.pet_sleep_with_owner": {
    "priority": 2,
    "speed_multiplier": 1.2,
    "search_radius": 10,
    "search_height": 10,
    "goal_radius": 1.0
}
```

## behavior.pickup_items

allay

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

```json
"minecraft:behavior.pickup_items": {
    "priority": 11,
    "max_dist": 3,
    "goal_radius": 2,
    "speed_multiplier": 0.5
}
```

husk

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

```json
"minecraft:behavior.pickup_items": {
    "priority": 7,
    "max_dist": 3,
    "goal_radius": 2,
    "speed_multiplier": 1.0
}
```

skeleton

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

villager

```json
"minecraft:behavior.pickup_items": {
    "priority": 9,
    "max_dist": 3,
    "goal_radius": 2,
    "speed_multiplier": 0.5,
    "can_pickup_to_hand_or_equipment": false
}
```

villager_v2

```json
"minecraft:behavior.pickup_items": {
    "priority": 4,
    "max_dist": 3,
    "goal_radius": 2,
    "speed_multiplier": 0.5,
    "can_pickup_to_hand_or_equipment": false
}
```

wither_skeleton

```json
"minecraft:behavior.pickup_items": {
    "priority": 5,
    "max_dist": 3,
    "goal_radius": 2,
    "speed_multiplier": 1.0,
    "pickup_based_on_chance": true
}
```

zombie

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

zombie_pigman

```json
"minecraft:behavior.pickup_items": {
    "priority": 6,
    "max_dist": 3,
    "goal_radius": 2,
    "speed_multiplier": 1.0,
    "pickup_based_on_chance": true,
    "can_pickup_any_item": true
}
```

zombie_villager

```json
"minecraft:behavior.pickup_items": {
    "priority": 8,
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

zombie_villager_v2

```json
"minecraft:behavior.pickup_items": {
    "priority": 8,
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

## behavior.play

villager

```json
"minecraft:behavior.play": {
    "priority": 8,
    "speed_multiplier": 0.32
}
```

villager_v2

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

## behavior.play_dead

axolotl

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

## behavior.player_ride_tamed

donkey

```json
"minecraft:behavior.player_ride_tamed": {}
```

horse

```json
"minecraft:behavior.player_ride_tamed": {}
```

mule

```json
"minecraft:behavior.player_ride_tamed": {}
```

skeleton_horse

```json
"minecraft:behavior.player_ride_tamed": {}
```

zombie_horse

```json
"minecraft:behavior.player_ride_tamed": {}
```

## behavior.raid_garden

fox

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

## behavior.ram_attack

goat

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

## behavior.random_breach

dolphin

```json
"minecraft:behavior.random_breach": {
    "priority": 6,
    "interval": 50,
    "xz_dist": 6,
    "cooldown_time": 2.0
}
```

## behavior.random_fly

parrot

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

## behavior.random_hover

allay

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

## behavior.random_look_around

allay

```json
"minecraft:behavior.random_look_around": {
    "priority": 8
}
```

blaze

```json
"minecraft:behavior.random_look_around": {
    "priority": 5
}
```

cave_spider

```json
"minecraft:behavior.random_look_around": {
    "priority": 7
}
```

chicken

```json
"minecraft:behavior.random_look_around": {
    "priority": 8
}
```

cow

```json
"minecraft:behavior.random_look_around": {
    "priority": 9
}
```

creeper

```json
"minecraft:behavior.random_look_around": {
    "priority": 6
}
```

dolphin

```json
"minecraft:behavior.random_look_around": {
    "priority": 7
}
```

donkey

```json
"minecraft:behavior.random_look_around": {
    "priority": 8
}
```

drowned

```json
"minecraft:behavior.random_look_around": {
    "priority": 9
}
```

elder_guardian

```json
"minecraft:behavior.random_look_around": {
    "priority": 9
}
```

enderman

```json
"minecraft:behavior.random_look_around": {
    "priority": 8
}
```

fox

```json
"minecraft:behavior.random_look_around": {
    "priority": 15
}
```

goat

```json
"minecraft:behavior.random_look_around": {
    "priority": 11
}
```

guardian

```json
"minecraft:behavior.random_look_around": {
    "priority": 9
}
```

hoglin

```json
"minecraft:behavior.random_look_around": {
    "priority": 9
}
```

horse

```json
"minecraft:behavior.random_look_around": {
    "priority": 8
}
```

husk

```json
"minecraft:behavior.random_look_around": {
    "priority": 9
}
```

iron_golem

```json
"minecraft:behavior.random_look_around": {
    "priority": 8
}
```

llama

```json
"minecraft:behavior.random_look_around": {
    "priority": 8
}
```

mooshroom

```json
"minecraft:behavior.random_look_around": {
    "priority": 9
}
```

mule

```json
"minecraft:behavior.random_look_around": {
    "priority": 8
}
```

panda

```json
"minecraft:behavior.random_look_around": {
    "priority": 9
}
```

pig

```json
"minecraft:behavior.random_look_around": {
    "priority": 9
}
```

piglin

```json
"minecraft:behavior.random_look_around": {
    "priority": 12
}
```

piglin_brute

```json
"minecraft:behavior.random_look_around": {
    "priority": 9
}
```

pillager

```json
"minecraft:behavior.random_look_around": {
    "priority": 10
}
```

polar_bear

```json
"minecraft:behavior.random_look_around": {
    "priority": 7
}
```

sheep

```json
"minecraft:behavior.random_look_around": {
    "priority": 9
}
```

shulker

```json
"minecraft:behavior.random_look_around": {
    "priority": 8
}
```

skeleton

```json
"minecraft:behavior.random_look_around": {
    "priority": 8
}
```

skeleton_horse

```json
"minecraft:behavior.random_look_around": {
    "priority": 8
}
```

snow_golem

```json
"minecraft:behavior.random_look_around": {
    "priority": 4
}
```

spider

```json
"minecraft:behavior.random_look_around": {
    "priority": 7
}
```

stray

```json
"minecraft:behavior.random_look_around": {
    "priority": 8
}
```

strider

```json
"minecraft:behavior.random_look_around": {
    "priority": 10
}
```

trader_llama

```json
"minecraft:behavior.random_look_around": {
    "priority": 8
}
```

wandering_trader

```json
"minecraft:behavior.random_look_around": {
    "priority": 9
}
```

warden

```json
"minecraft:behavior.random_look_around": {
    "priority": 11
}
```

witch

```json
"minecraft:behavior.random_look_around": {
    "priority": 5,
    "look_distance": 8.0
}
```

wither

```json
"minecraft:behavior.random_look_around": {
    "priority": 7
}
```

wither_skeleton

```json
"minecraft:behavior.random_look_around": {
    "priority": 8
}
```

zoglin

```json
"minecraft:behavior.random_look_around": {
    "priority": 9
}
```

zombie

```json
"minecraft:behavior.random_look_around": {
    "priority": 9
}
```

zombie_horse

```json
"minecraft:behavior.random_look_around": {
    "priority": 8
}
```

zombie_pigman

```json
"minecraft:behavior.random_look_around": {
    "priority": 9
}
```

zombie_villager

```json
"minecraft:behavior.random_look_around": {
    "priority": 11
}
```

zombie_villager_v2

```json
"minecraft:behavior.random_look_around": {
    "priority": 11
}
```

## behavior.random_look_around_and_sit

fox

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

## behavior.random_sitting

panda

```json
"minecraft:behavior.random_sitting": {
    "priority": 5,
    "start_chance": 0.01,
    "stop_chance": 0.3,
    "cooldown": 30,
    "min_sit_time": 10
}
```

```json
"minecraft:behavior.random_sitting": {
    "priority": 6,
    "start_chance": 0.02,
    "stop_chance": 0.2,
    "cooldown": 25,
    "min_sit_time": 15
}
```

## behavior.random_stroll

axolotl

```json
"minecraft:behavior.random_stroll": {
    "priority": 9,
    "interval": 100
}
```

blaze

```json
"minecraft:behavior.random_stroll": {
    "priority": 4,
    "speed_multiplier": 1.0
}
```

cat

```json
"minecraft:behavior.random_stroll": {
    "priority": 8,
    "speed_multiplier": 0.8
}
```

cave_spider

```json
"minecraft:behavior.random_stroll": {
    "priority": 6,
    "speed_multiplier": 0.8
}
```

chicken

```json
"minecraft:behavior.random_stroll": {
    "priority": 6,
    "speed_multiplier": 1.0
}
```

cow

```json
"minecraft:behavior.random_stroll": {
    "priority": 6,
    "speed_multiplier": 0.8
}
```

creeper

```json
"minecraft:behavior.random_stroll": {
    "priority": 5,
    "speed_multiplier": 1
}
```

donkey

```json
"minecraft:behavior.random_stroll": {
    "priority": 6,
    "speed_multiplier": 0.7
}
```

drowned

```json
"minecraft:behavior.random_stroll": {
    "priority": 7,
    "speed_multiplier": 1
}
```

enderman

```json
"minecraft:behavior.random_stroll": {
    "priority": 7,
    "speed_multiplier": 1.0
}
```

endermite

```json
"minecraft:behavior.random_stroll": {
    "priority": 6,
    "speed_multiplier": 1
}
```

evocation_illager

```json
"minecraft:behavior.random_stroll": {
    "priority": 8,
    "speed_multiplier": 0.6
}
```

fox

```json
"minecraft:behavior.random_stroll": {
    "priority": 13,
    "speed_multiplier": 0.8
}
```

frog

```json
"minecraft:behavior.random_stroll": {
    "priority": 11
}
```

goat

```json
"minecraft:behavior.random_stroll": {
    "priority": 9,
    "speed_multiplier": 0.6
}
```

hoglin

```json
"minecraft:behavior.random_stroll": {
    "priority": 7,
    "speed_multiplier": 0.4
}
```

horse

```json
"minecraft:behavior.random_stroll": {
    "priority": 6,
    "speed_multiplier": 0.7
}
```

husk

```json
"minecraft:behavior.random_stroll": {
    "priority": 7,
    "speed_multiplier": 1
}
```

iron_golem

```json
"minecraft:behavior.random_stroll": {
    "priority": 6,
    "speed_multiplier": 0.6,
    "xz_dist": 16
}
```

llama

```json
"minecraft:behavior.random_stroll": {
    "priority": 6,
    "speed_multiplier": 0.7
}
```

mooshroom

```json
"minecraft:behavior.random_stroll": {
    "priority": 6,
    "speed_multiplier": 0.8
}
```

mule

```json
"minecraft:behavior.random_stroll": {
    "priority": 6,
    "speed_multiplier": 0.7
}
```

ocelot

```json
"minecraft:behavior.random_stroll": {
    "priority": 8,
    "speed_multiplier": 0.8
}
```

panda

```json
"minecraft:behavior.random_stroll": {
    "priority": 14,
    "speed_multiplier": 0.8
}
```

pig

```json
"minecraft:behavior.random_stroll": {
    "priority": 7,
    "speed_multiplier": 1.0
}
```

piglin

```json
"minecraft:behavior.random_stroll": {
    "priority": 10,
    "speed_multiplier": 0.6
}
```

piglin_brute

```json
"minecraft:behavior.random_stroll": {
    "priority": 7,
    "speed_multiplier": 0.6
}
```

pillager

```json
"minecraft:behavior.random_stroll": {
    "priority": 8,
    "speed_multiplier": 1
}
```

polar_bear

```json
"minecraft:behavior.random_stroll": {
    "priority": 5
}
```

rabbit

```json
"minecraft:behavior.random_stroll": {
    "priority": 6,
    "speed_multiplier": 0.6,
    "xz_dist": 2,
    "y_dist": 1
}
```

ravager

```json
"minecraft:behavior.random_stroll": {
    "priority": 6,
    "speed_multiplier": 1.0
}
```

```json
"minecraft:behavior.random_stroll": {
    "priority": 6,
    "speed_multiplier": 0.4
}
```

sheep

```json
"minecraft:behavior.random_stroll": {
    "priority": 7,
    "speed_multiplier": 0.8
}
```

skeleton

```json
"minecraft:behavior.random_stroll": {
    "priority": 6,
    "speed_multiplier": 1
}
```

skeleton_horse

```json
"minecraft:behavior.random_stroll": {
    "priority": 6,
    "speed_multiplier": 0.7
}
```

snow_golem

```json
"minecraft:behavior.random_stroll": {
    "priority": 2,
    "speed_multiplier": 1
}
```

spider

```json
"minecraft:behavior.random_stroll": {
    "priority": 6,
    "speed_multiplier": 0.8
}
```

stray

```json
"minecraft:behavior.random_stroll": {
    "priority": 6,
    "speed_multiplier": 1
}
```

strider

```json
"minecraft:behavior.random_stroll": {
    "priority": 8,
    "speed_multiplier": 0.8
}
```

trader_llama

```json
"minecraft:behavior.random_stroll": {
    "priority": 6,
    "speed_multiplier": 0.7
}
```

turtle

```json
"minecraft:behavior.random_stroll": {
    "priority": 9,
    "interval": 100
}
```

villager

```json
"minecraft:behavior.random_stroll": {
    "priority": 11,
    "speed_multiplier": 0.6
}
```

villager_v2

```json
"minecraft:behavior.random_stroll": {
    "priority": 11,
    "speed_multiplier": 0.6
}
```

vindicator

```json
"minecraft:behavior.random_stroll": {
    "priority": 9,
    "speed_multiplier": 1
}
```

wandering_trader

```json
"minecraft:behavior.random_stroll": {
    "priority": 7,
    "speed_multiplier": 0.6
}
```

warden

```json
"minecraft:behavior.random_stroll": {
    "priority": 9,
    "speed_multiplier": 0.5
}
```

witch

```json
"minecraft:behavior.random_stroll": {
    "priority": 4,
    "speed_multiplier": 1.0
}
```

wither

```json
"minecraft:behavior.random_stroll": {
    "priority": 5,
    "speed_multiplier": 1
}
```

wither_skeleton

```json
"minecraft:behavior.random_stroll": {
    "priority": 6,
    "speed_multiplier": 1
}
```

wolf

```json
"minecraft:behavior.random_stroll": {
    "priority": 8,
    "speed_multiplier": 1.0
}
```

zoglin

```json
"minecraft:behavior.random_stroll": {
    "priority": 7,
    "speed_multiplier": 1.0
}
```

zombie

```json
"minecraft:behavior.random_stroll": {
    "priority": 7,
    "speed_multiplier": 1
}
```

zombie_horse

```json
"minecraft:behavior.random_stroll": {
    "priority": 6,
    "speed_multiplier": 0.7
}
```

zombie_pigman

```json
"minecraft:behavior.random_stroll": {
    "priority": 7,
    "speed_multiplier": 1.0
}
```

zombie_villager

```json
"minecraft:behavior.random_stroll": {
    "priority": 9,
    "speed_multiplier": 1
}
```

zombie_villager_v2

```json
"minecraft:behavior.random_stroll": {
    "priority": 9,
    "speed_multiplier": 1
}
```

## behavior.random_swim

axolotl

```json
"minecraft:behavior.random_swim": {
    "priority": 8,
    "interval": 0,
    "xz_dist": 30,
    "y_dist": 15
}
```

dolphin

```json
"minecraft:behavior.random_swim": {
    "priority": 5,
    "interval": 0,
    "xz_dist": 20
}
```

elder_guardian

```json
"minecraft:behavior.random_swim": {
    "priority": 7,
    "speed_multiplier": 0.5,
    "avoid_surface": false
}
```

cod

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

```json
"minecraft:behavior.random_swim": {
    "priority": 7,
    "speed_multiplier": 1.0,
    "interval": 80,
    "avoid_surface": false
}
```

pufferfish

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

```json
"minecraft:behavior.random_swim": {
    "priority": 2,
    "interval": 100
}
```

tropicalfish

```json
"minecraft:behavior.random_swim": {
    "priority": 3,
    "speed_multiplier": 1.0,
    "xz_dist": 16,
    "y_dist": 4,
    "interval": 0
}
```

turtle

```json
"minecraft:behavior.random_swim": {
    "priority": 7,
    "interval": 0,
    "xz_dist": 30,
    "y_dist": 15
}
```

## behavior.ranged_attack

blaze

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

```json
"minecraft:behavior.ranged_attack": {
    "priority": 1,
    "attack_radius": 64,
    "charge_shoot_trigger": 2,
    "charge_charged_trigger": 1
}
```

llama

```json
"minecraft:behavior.ranged_attack": {
    "priority": 2,
    "attack_radius": 64,
    "charge_shoot_trigger": 2,
    "charge_charged_trigger": 1
}
```

```json
"minecraft:behavior.ranged_attack": {
    "priority": 2,
    "attack_radius": 64,
    "charge_shoot_trigger": 2,
    "charge_charged_trigger": 1
}
```

piglin

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

```json
"minecraft:behavior.ranged_attack": {
    "priority": 4,
    "attack_interval_min": 1.0,
    "attack_interval_max": 1.0,
    "attack_radius": 8.0
}
```

shulker

```json
"minecraft:behavior.ranged_attack": {
    "attack_interval_min": 1,
    "attack_interval_max": 3,
    "attack_radius": 15
}
```

skeleton

```json
"minecraft:behavior.ranged_attack": {
    "priority": 0,
    "attack_interval_min": 1.0,
    "attack_interval_max": 3.0,
    "attack_radius": 15.0
}
```

```json
"minecraft:behavior.ranged_attack": {
    "priority": 0,
    "attack_interval_min": 1.0,
    "attack_interval_max": 3.0,
    "attack_radius": 15.0
}
```

snow_golem

```json
"minecraft:behavior.ranged_attack": {
    "priority": 1,
    "speed_multiplier": 1.25,
    "attack_interval": 1,
    "attack_radius": 10
}
```

stray

```json
"minecraft:behavior.ranged_attack": {
    "priority": 0,
    "attack_interval_min": 1.0,
    "attack_interval_max": 3.0,
    "attack_radius": 15.0
}
```

```json
"minecraft:behavior.ranged_attack": {
    "priority": 0,
    "attack_interval_min": 1.0,
    "attack_interval_max": 3.0,
    "attack_radius": 15.0
}
```

trader_llama

```json
"minecraft:behavior.ranged_attack": {
    "priority": 2,
    "attack_radius": 64,
    "charge_shoot_trigger": 2,
    "charge_charged_trigger": 1
}
```

```json
"minecraft:behavior.ranged_attack": {
    "priority": 2,
    "attack_radius": 64,
    "charge_shoot_trigger": 2,
    "charge_charged_trigger": 1
}
```

```json
"minecraft:behavior.ranged_attack": {
    "priority": 2,
    "attack_radius": 64,
    "charge_shoot_trigger": 2,
    "charge_charged_trigger": 1
}
```

witch

```json
"minecraft:behavior.ranged_attack": {
    "priority": 2,
    "speed_multiplier": 1.0,
    "attack_interval_min": 3,
    "attack_interval_max": 3,
    "attack_radius": 10.0
}
```

## behavior.receive_love

villager

```json
"minecraft:behavior.receive_love": {
    "priority": 7
}
```

villager_v2

```json
"minecraft:behavior.receive_love": {
    "priority": 6
}
```

## behavior.restrict_open_door

villager

```json
"minecraft:behavior.restrict_open_door": {
    "priority": 5
}
```

## behavior.rise_to_liquid_level

strider

```json
"minecraft:behavior.rise_to_liquid_level": {
    "priority": 0,
    "liquid_y_offset": 0.25,
    "rise_delta": 0.01,
    "sink_delta": 0.01
}
```

## behavior.roar

warden

```json
"minecraft:behavior.roar": {
    "priority": 2,
    "duration": 4.2
}
```

## behavior.roll

panda

```json
"minecraft:behavior.roll": {
    "priority": 12,
    "probability": 0.0016
}
```

```json
"minecraft:behavior.roll": {
    "priority": 12,
    "probability": 0.013
}
```

## behavior.run_around_like_crazy

donkey

```json
"minecraft:behavior.run_around_like_crazy": {
    "priority": 1,
    "speed_multiplier": 1.2
}
```

horse

```json
"minecraft:behavior.run_around_like_crazy": {
    "priority": 1,
    "speed_multiplier": 1.2
}
```

llama

```json
"minecraft:behavior.run_around_like_crazy": {
    "priority": 1,
    "speed_multiplier": 1.2
}
```

mule

```json
"minecraft:behavior.run_around_like_crazy": {
    "priority": 1,
    "speed_multiplier": 1.2
}
```

trader_llama

```json
"minecraft:behavior.run_around_like_crazy": {
    "priority": 1,
    "speed_multiplier": 1.2
}
```

## behavior.scared

panda

```json
"minecraft:behavior.scared": {
    "priority": 1,
    "sound_interval": 20
}
```

## behavior.send_event

evocation_illager

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

## behavior.share_items

villager

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

## behavior.silverfish_merge_with_stone

silverfish

```json
"minecraft:behavior.silverfish_merge_with_stone": {
    "priority": 5
}
```

## behavior.silverfish_wake_up_friends

silverfish

```json
"minecraft:behavior.silverfish_wake_up_friends": {
    "priority": 1
}
```

## behavior.skeleton_horse_trap

skeleton_horse

```json
"minecraft:behavior.skeleton_horse_trap": {
    "within_radius": 10.0,
    "duration": 900.0,
    "priority": 2
}
```

## behavior.sleep

villager_v2

```json
"minecraft:behavior.sleep": {}
```

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

## behavior.slime_attack

magma_cube

```json
"minecraft:behavior.slime_attack": {
    "priority": 3
}
```

slime

```json
"minecraft:behavior.slime_attack": {
    "priority": 3
}
```

## behavior.slime_float

magma_cube

```json
"minecraft:behavior.slime_float": {
    "priority": 1,
    "jump_chance_percentage": 0.8,
    "speed_multiplier": 1.2
}
```

slime

```json
"minecraft:behavior.slime_float": {
    "priority": 1,
    "jump_chance_percentage": 0.8,
    "speed_multiplier": 1.2
}
```

## behavior.slime_keep_on_jumping

magma_cube

```json
"minecraft:behavior.slime_keep_on_jumping": {
    "priority": 5,
    "speed_multiplier": 1.0
}
```

slime

```json
"minecraft:behavior.slime_keep_on_jumping": {
    "priority": 5,
    "speed_multiplier": 1.0
}
```

## behavior.slime_random_direction

magma_cube

```json
"minecraft:behavior.slime_random_direction": {
    "priority": 4,
    "add_random_time_range": 3,
    "turn_range": 360,
    "min_change_direction_time": 2.0
}
```

slime

```json
"minecraft:behavior.slime_random_direction": {
    "priority": 4,
    "add_random_time_range": 3,
    "turn_range": 360,
    "min_change_direction_time": 2.0
}
```

## behavior.snacking

panda

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

## behavior.sneeze

panda

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

## behavior.sniff

warden

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

## behavior.sonic_boom

warden

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

## behavior.squid_dive

glow_squid

```json
"minecraft:behavior.squid_dive": {
    "priority": 2
}
```

squid

```json
"minecraft:behavior.squid_dive": {
    "priority": 2
}
```

## behavior.squid_flee

glow_squid

```json
"minecraft:behavior.squid_flee": {
    "priority": 2
}
```

squid

```json
"minecraft:behavior.squid_flee": {
    "priority": 2
}
```

## behavior.squid_idle

glow_squid

```json
"minecraft:behavior.squid_idle": {
    "priority": 2
}
```

squid

```json
"minecraft:behavior.squid_idle": {
    "priority": 2
}
```

## behavior.squid_move_away_from_ground

glow_squid

```json
"minecraft:behavior.squid_move_away_from_ground": {
    "priority": 1
}
```

squid

```json
"minecraft:behavior.squid_move_away_from_ground": {
    "priority": 1
}
```

## behavior.squid_out_of_water

glow_squid

```json
"minecraft:behavior.squid_out_of_water": {
    "priority": 2
}
```

squid

```json
"minecraft:behavior.squid_out_of_water": {
    "priority": 2
}
```

## behavior.stalk_and_pounce_on_target

fox

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

## behavior.stay_near_noteblock

allay

```json
"minecraft:behavior.stay_near_noteblock": {
    "priority": 5,
    "speed": 8,
    "start_distance": 16,
    "stop_distance": 4
}
```

## behavior.stay_while_sitting

cat

```json
"minecraft:behavior.stay_while_sitting": {
    "priority": 3
}
```

ocelot

```json
"minecraft:behavior.stay_while_sitting": {
    "priority": 3
}
```

parrot

```json
"minecraft:behavior.stay_while_sitting": {
    "priority": 1
}
```

wolf

```json
"minecraft:behavior.stay_while_sitting": {
    "priority": 3
}
```

## behavior.stomp_attack

polar_bear

```json
"minecraft:behavior.stomp_attack": {
    "priority": 1,
    "track_target": true,
    "require_complete_path": true,
    "stomp_range_multiplier": 2.0,
    "no_damage_range_multiplier": 2.0
}
```

## behavior.stomp_turtle_egg

drowned

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

## behavior.stroll_towards_village

fox

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

## behavior.summon_entity

evocation_illager

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

## behavior.swell

creeper

```json
"minecraft:behavior.swell": {
    "start_distance": 2.5,
    "stop_distance": 6.0,
    "priority": 2
}
```

## behavior.swim_idle

axolotl

```json
"minecraft:behavior.swim_idle": {
    "priority": 7,
    "idle_time": 5.0,
    "success_rate": 0.05
}
```

cod

```json
"minecraft:behavior.swim_idle": {
    "priority": 5,
    "idle_time": 5.0,
    "success_rate": 0.1
}
```

salmon

```json
"minecraft:behavior.swim_idle": {
    "priority": 5,
    "idle_time": 5.0,
    "success_rate": 0.1
}
```

tropicalfish

```json
"minecraft:behavior.swim_idle": {
    "priority": 5,
    "idle_time": 5.0,
    "success_rate": 0.1
}
```

## behavior.swim_wander

cod

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

```json
"minecraft:behavior.swim_wander": {
    "priority": 4,
    "interval": 0.1,
    "look_ahead": 2.0,
    "speed_multiplier": 1.0,
    "wander_time": 5.0
}
```

## behavior.swim_with_entity

dolphin

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

## behavior.swoop_attack

phantom

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

## behavior.take_flower

villager

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

## behavior.target_when_pushed

iron_golem

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

## behavior.tempt

axolotl

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

frog

```json
"minecraft:behavior.tempt": {
    "priority": 5,
    "speed_multiplier": 1.25,
    "can_tempt_vertically": true,
    "items": [
        "slime_ball"
    ]
}
```

goat

```json
"minecraft:behavior.tempt": {
    "priority": 4,
    "speed_multiplier": 0.75,
    "items": [
        "wheat"
    ]
}
```

horse

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

mooshroom

```json
"minecraft:behavior.tempt": {
    "priority": 4,
    "speed_multiplier": 1.25,
    "items": [
        "wheat"
    ]
}
```

mule

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

ocelot

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

panda

```json
"minecraft:behavior.tempt": {
    "priority": 4,
    "speed_multiplier": 1.25,
    "items": [
        "bamboo"
    ]
}
```

pig

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

rabbit

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

sheep

```json
"minecraft:behavior.tempt": {
    "priority": 4,
    "speed_multiplier": 1.25,
    "items": [
        "wheat"
    ]
}
```

strider

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

tadpole

```json
"minecraft:behavior.tempt": {
    "priority": 5,
    "speed_multiplier": 1.25,
    "can_tempt_vertically": true,
    "items": [
        "slime_ball"
    ]
}
```

turtle

```json
"minecraft:behavior.tempt": {
    "priority": 3,
    "speed_multiplier": 1.1,
    "can_tempt_vertically": true,
    "items": [
        "seagrass"
    ]
}
```

## behavior.trade_interest

villager_v2

```json
"minecraft:behavior.trade_interest": {}
```

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

## behavior.trade_with_player

villager

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

## behavior.wither_random_attack_pos_goal

wither

```json
"minecraft:behavior.wither_random_attack_pos_goal": {
    "priority": 3
}
```

## behavior.wither_target_highest_damage

wither

```json
"minecraft:behavior.wither_target_highest_damage": {
    "priority": 1
}
```

## behavior.work

villager_v2

```json
"minecraft:behavior.work": {}
```

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

## behavior.work_composter

villager_v2

```json
"minecraft:behavior.work_composter": {}
```

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

## block_climber

endermite

```json
"minecraft:block_climber": {}
```

fox

```json
"minecraft:block_climber": {}
```

player

```json
"minecraft:block_climber": {}
```

rabbit

```json
"minecraft:block_climber": {}
```

silverfish

```json
"minecraft:block_climber": {}
```

## block_sensor

bee

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

## boostable

pig

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

## boss

ender_dragon

```json
"minecraft:boss": {
    "should_darken_sky": false,
    "hud_range": 125
}
```

wither

```json
"minecraft:boss": {
    "should_darken_sky": true,
    "hud_range": 55
}
```

## break_blocks

ravager

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

## breathable

allay

```json
"minecraft:breathable": {
    "totalSupply": 15,
    "suffocateTime": 0
}
```

axolotl

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

```json
"minecraft:breathable": {
    "total_supply": 15,
    "suffocate_time": 0
}
```

bee

```json
"minecraft:breathable": {
    "totalSupply": 15,
    "suffocateTime": 0
}
```

cat

```json
"minecraft:breathable": {
    "total_supply": 15,
    "suffocate_time": 0
}
```

cave_spider

```json
"minecraft:breathable": {
    "total_supply": 15,
    "suffocate_time": 0
}
```

chicken

```json
"minecraft:breathable": {
    "total_supply": 15,
    "suffocate_time": 0
}
```

cow

```json
"minecraft:breathable": {
    "total_supply": 15,
    "suffocate_time": 0
}
```

creeper

```json
"minecraft:breathable": {
    "total_supply": 15,
    "suffocate_time": 0
}
```

dolphin

```json
"minecraft:breathable": {
    "total_supply": 240,
    "suffocate_time": 0,
    "breathes_air": true,
    "breathes_water": false,
    "generates_bubbles": false
}
```

donkey

```json
"minecraft:breathable": {
    "total_supply": 15,
    "suffocate_time": 0
}
```

drowned

```json
"minecraft:breathable": {
    "total_supply": 15,
    "suffocate_time": 0,
    "breathes_air": true,
    "breathes_water": true
}
```

elder_guardian

```json
"minecraft:breathable": {
    "breathes_water": true
}
```

enderman

```json
"minecraft:breathable": {
    "total_supply": 15,
    "suffocate_time": 0
}
```

endermite

```json
"minecraft:breathable": {
    "total_supply": 15,
    "suffocate_time": 0
}
```

evocation_illager

```json
"minecraft:breathable": {
    "total_supply": 15,
    "suffocate_time": 0
}
```

cod

```json
"minecraft:breathable": {
    "total_supply": 15,
    "suffocate_time": 0,
    "breathes_air": false,
    "breathes_water": true
}
```

fox

```json
"minecraft:breathable": {
    "totalSupply": 15,
    "suffocateTime": 0
}
```

frog

```json
"minecraft:breathable": {
    "total_supply": 15,
    "suffocate_time": 0,
    "breathes_water": true,
    "breathes_air": true,
    "generates_bubbles": false
}
```

ghast

```json
"minecraft:breathable": {
    "total_supply": 15,
    "suffocate_time": 0
}
```

glow_squid

```json
"minecraft:breathable": {
    "total_supply": 15,
    "suffocate_time": 0,
    "breathes_air": false,
    "breathes_water": true
}
```

goat

```json
"minecraft:breathable": {
    "total_supply": 15,
    "suffocate_time": 0
}
```

guardian

```json
"minecraft:breathable": {
    "breathes_water": true
}
```

hoglin

```json
"minecraft:breathable": {
    "total_supply": 15,
    "suffocate_time": 0
}
```

horse

```json
"minecraft:breathable": {
    "total_supply": 15,
    "suffocate_time": 0
}
```

husk

```json
"minecraft:breathable": {
    "total_supply": 15,
    "suffocate_time": 0,
    "breathes_water": true
}
```

llama

```json
"minecraft:breathable": {
    "total_supply": 15,
    "suffocate_time": 0
}
```

magma_cube

```json
"minecraft:breathable": {
    "total_supply": 15,
    "suffocate_time": 0,
    "breathes_lava": true
}
```

mooshroom

```json
"minecraft:breathable": {
    "total_supply": 15,
    "suffocate_time": 0
}
```

mule

```json
"minecraft:breathable": {
    "total_supply": 15,
    "suffocate_time": 0
}
```

ocelot

```json
"minecraft:breathable": {
    "total_supply": 15,
    "suffocate_time": 0
}
```

panda

```json
"minecraft:breathable": {
    "total_supply": 15,
    "suffocate_time": 0
}
```

parrot

```json
"minecraft:breathable": {
    "total_supply": 15,
    "suffocate_time": 0
}
```

phantom

```json
"minecraft:breathable": {
    "total_supply": 15,
    "suffocate_time": 0,
    "breathes_air": true,
    "breathes_water": false
}
```

pig

```json
"minecraft:breathable": {
    "total_supply": 15,
    "suffocate_time": 0
}
```

piglin

```json
"minecraft:breathable": {
    "total_supply": 15,
    "suffocate_time": 0
}
```

piglin_brute

```json
"minecraft:breathable": {
    "total_supply": 15,
    "suffocate_time": 0
}
```

pillager

```json
"minecraft:breathable": {
    "total_supply": 15,
    "suffocate_time": 0
}
```

player

```json
"minecraft:breathable": {
    "total_supply": 15,
    "suffocate_time": -1,
    "inhale_time": 3.75,
    "generates_bubbles": false
}
```

polar_bear

```json
"minecraft:breathable": {
    "total_supply": 15,
    "suffocate_time": 0
}
```

pufferfish

```json
"minecraft:breathable": {
    "total_supply": 15,
    "suffocate_time": 0,
    "breathes_air": false,
    "breathes_water": true
}
```

rabbit

```json
"minecraft:breathable": {
    "total_supply": 15,
    "suffocate_time": 0
}
```

ravager

```json
"minecraft:breathable": {
    "suffocate_time": 0,
    "total_supply": 15
}
```

salmon

```json
"minecraft:breathable": {
    "total_supply": 15,
    "suffocate_time": 0,
    "breathes_air": false,
    "breathes_water": true
}
```

sheep

```json
"minecraft:breathable": {
    "total_supply": 15,
    "suffocate_time": 0
}
```

shulker

```json
"minecraft:breathable": {
    "total_supply": 15,
    "suffocate_time": 0,
    "breathes_lava": false,
    "breathes_water": false
}
```

silverfish

```json
"minecraft:breathable": {
    "total_supply": 15,
    "suffocate_time": 0
}
```

skeleton

```json
"minecraft:breathable": {
    "total_supply": 15,
    "suffocate_time": 0,
    "breathes_water": true
}
```

skeleton_horse

```json
"minecraft:breathable": {
    "total_supply": 15,
    "suffocate_time": 0,
    "breathes_water": true
}
```

slime

```json
"minecraft:breathable": {
    "total_supply": 15,
    "suffocate_time": 0
}
```

snow_golem

```json
"minecraft:breathable": {
    "total_supply": 15,
    "suffocate_time": 0
}
```

spider

```json
"minecraft:breathable": {
    "total_supply": 15,
    "suffocate_time": 0
}
```

squid

```json
"minecraft:breathable": {
    "total_supply": 15,
    "suffocate_time": 0,
    "breathes_air": false,
    "breathes_water": true
}
```

stray

```json
"minecraft:breathable": {
    "total_supply": 15,
    "suffocate_time": 0,
    "breathes_water": true
}
```

tadpole

```json
"minecraft:breathable": {
    "total_supply": 8,
    "suffocate_time": 0,
    "breathes_water": true,
    "breathes_air": false,
    "generates_bubbles": false
}
```

trader_llama

```json
"minecraft:breathable": {
    "total_supply": 15,
    "suffocate_time": 0
}
```

tropicalfish

```json
"minecraft:breathable": {
    "total_supply": 15,
    "suffocate_time": 0,
    "breathes_air": false,
    "breathes_water": true
}
```

turtle

```json
"minecraft:breathable": {
    "total_supply": 15,
    "suffocate_time": 0,
    "breathes_water": true,
    "breathes_air": true,
    "generates_bubbles": false
}
```

villager

```json
"minecraft:breathable": {
    "total_supply": 15,
    "suffocate_time": 0
}
```

villager_v2

```json
"minecraft:breathable": {
    "total_supply": 15,
    "suffocate_time": 0
}
```

vindicator

```json
"minecraft:breathable": {
    "total_supply": 15,
    "suffocate_time": 0
}
```

wandering_trader

```json
"minecraft:breathable": {
    "total_supply": 15,
    "suffocate_time": 0
}
```

warden

```json
"minecraft:breathable": {
    "total_supply": 15,
    "suffocate_time": 0
}
```

witch

```json
"minecraft:breathable": {
    "total_supply": 15,
    "suffocate_time": 0
}
```

wither

```json
"minecraft:breathable": {
    "total_supply": 15,
    "suffocate_time": 0
}
```

wither_skeleton

```json
"minecraft:breathable": {
    "total_supply": 15,
    "suffocate_time": 0,
    "breathes_water": true
}
```

wolf

```json
"minecraft:breathable": {
    "total_supply": 15,
    "suffocate_time": 0
}
```

zoglin

```json
"minecraft:breathable": {
    "total_supply": 15,
    "suffocate_time": 0,
    "breathes_water": true
}
```

zombie

```json
"minecraft:breathable": {
    "total_supply": 15,
    "suffocate_time": 0,
    "breathes_air": true,
    "breathes_water": true
}
```

zombie_horse

```json
"minecraft:breathable": {
    "total_supply": 15,
    "suffocate_time": 0,
    "breathes_water": true
}
```

zombie_pigman

```json
"minecraft:breathable": {
    "total_supply": 15,
    "suffocate_time": 0,
    "breathes_water": true
}
```

zombie_villager

```json
"minecraft:breathable": {
    "total_supply": 15,
    "suffocate_time": 0,
    "breathes_water": true
}
```

zombie_villager_v2

```json
"minecraft:breathable": {
    "total_supply": 15,
    "suffocate_time": 0,
    "breathes_water": true
}
```

## breedable

axolotl

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

goat

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

hoglin

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

horse

```json
"minecraft:breedable": {
    "parent_centric_attribute_blending": [
        "minecraft:health",
        "minecraft:movement",
        "minecraft:horse.jump_strength"
    ],
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
    ],
    "mutation_factor": {
        "extra_variant": 0.2,
        "variant": 0.111
    },
    "mutation_strategy": "random",
    "random_variant_mutation_interval": [
        0,
        7
    ],
    "random_extra_variant_mutation_interval": [
        0,
        5
    ]
}
```

llama

```json
"minecraft:breedable": {
    "parent_centric_attribute_blending": [
        "minecraft:health"
    ],
    "require_tame": true,
    "inherit_tamed": false,
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

mooshroom

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

ocelot

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

panda

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

pig

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

rabbit

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

sheep

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

strider

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

trader_llama

```json
"minecraft:breedable": {
    "require_tame": true,
    "inherit_tamed": false,
    "breeds_with": [
        {
            "mate_type": "minecraft:llama",
            "baby_type": "minecraft:llama",
            "breed_event": {
                "event": "minecraft:entity_born",
                "target": "baby"
            }
        },
        {
            "mate_type": "minecraft:trader_llama",
            "baby_type": "minecraft:trader_llama",
            "breed_event": {
                "event": "minecraft:entity_born",
                "target": "baby"
            }
        }
    ],
    "breed_items": [
        "hay_block"
    ]
}
```

turtle

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

wolf

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

## bribeable

dolphin

```json
"minecraft:bribeable": {
    "bribe_items": [
        "fish",
        "salmon"
    ]
}
```

## buoyant

boat

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

```json
"minecraft:buoyant": {
    "apply_gravity": false,
    "liquid_blocks": [
        "minecraft:flowing_water",
        "minecraft:water"
    ]
}
```

## burns_in_daylight

drowned

```json
"minecraft:burns_in_daylight": {}
```

magma_cube

```json
"minecraft:burns_in_daylight": false
```

phantom

```json
"minecraft:burns_in_daylight": {}
```

skeleton

```json
"minecraft:burns_in_daylight": {}
```

stray

```json
"minecraft:burns_in_daylight": {}
```

zombie

```json
"minecraft:burns_in_daylight": {}
```

zombie_villager

```json
"minecraft:burns_in_daylight": {}
```

zombie_villager_v2

```json
"minecraft:burns_in_daylight": {}
```

## can_climb

blaze

```json
"minecraft:can_climb": {}
```

cat

```json
"minecraft:can_climb": {}
```

cave_spider

```json
"minecraft:can_climb": {}
```

chicken

```json
"minecraft:can_climb": {}
```

cow

```json
"minecraft:can_climb": {}
```

creeper

```json
"minecraft:can_climb": {}
```

dolphin

```json
"minecraft:can_climb": {}
```

drowned

```json
"minecraft:can_climb": {}
```

enderman

```json
"minecraft:can_climb": {}
```

endermite

```json
"minecraft:can_climb": {}
```

evocation_illager

```json
"minecraft:can_climb": {}
```

fox

```json
"minecraft:can_climb": {}
```

glow_squid

```json
"minecraft:can_climb": {}
```

goat

```json
"minecraft:can_climb": {}
```

hoglin

```json
"minecraft:can_climb": {}
```

husk

```json
"minecraft:can_climb": {}
```

iron_golem

```json
"minecraft:can_climb": {}
```

magma_cube

```json
"minecraft:can_climb": {}
```

mooshroom

```json
"minecraft:can_climb": {}
```

ocelot

```json
"minecraft:can_climb": {}
```

panda

```json
"minecraft:can_climb": {}
```

pig

```json
"minecraft:can_climb": {}
```

player

```json
"minecraft:can_climb": {}
```

polar_bear

```json
"minecraft:can_climb": {}
```

rabbit

```json
"minecraft:can_climb": {}
```

sheep

```json
"minecraft:can_climb": {}
```

silverfish

```json
"minecraft:can_climb": {}
```

skeleton

```json
"minecraft:can_climb": {}
```

slime

```json
"minecraft:can_climb": {}
```

snow_golem

```json
"minecraft:can_climb": {}
```

spider

```json
"minecraft:can_climb": {}
```

squid

```json
"minecraft:can_climb": {}
```

stray

```json
"minecraft:can_climb": {}
```

vex

```json
"minecraft:can_climb": {}
```

villager

```json
"minecraft:can_climb": {}
```

villager_v2

```json
"minecraft:can_climb": {}
```

wandering_trader

```json
"minecraft:can_climb": {}
```

warden

```json
"minecraft:can_climb": {}
```

witch

```json
"minecraft:can_climb": {}
```

wither

```json
"minecraft:can_climb": {}
```

wither_skeleton

```json
"minecraft:can_climb": {}
```

wolf

```json
"minecraft:can_climb": {}
```

zoglin

```json
"minecraft:can_climb": {}
```

zombie

```json
"minecraft:can_climb": {}
```

zombie_pigman

```json
"minecraft:can_climb": {}
```

zombie_villager

```json
"minecraft:can_climb": {}
```

zombie_villager_v2

```json
"minecraft:can_climb": {}
```

## can_fly

allay

```json
"minecraft:can_fly": {}
```

bat

```json
"minecraft:can_fly": {}
```

bee

```json
"minecraft:can_fly": {}
```

ghast

```json
"minecraft:can_fly": {}
```

parrot

```json
"minecraft:can_fly": {}
```

wither

```json
"minecraft:can_fly": {}
```

## can_power_jump

donkey

```json
"minecraft:can_power_jump": {}
```

horse

```json
"minecraft:can_power_jump": {}
```

mule

```json
"minecraft:can_power_jump": {}
```

skeleton_horse

```json
"minecraft:can_power_jump": {}
```

## celebrate_hunt

piglin

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

## collision_box

allay

```json
"minecraft:collision_box": {
    "width": 0.35,
    "height": 0.6
}
```

armor_stand

```json
"minecraft:collision_box": {
    "width": 0.5,
    "height": 1.975
}
```

arrow

```json
"minecraft:collision_box": {
    "width": 0.25,
    "height": 0.25
}
```

axolotl

```json
"minecraft:collision_box": {
    "width": 0.75,
    "height": 0.42
}
```

bat

```json
"minecraft:collision_box": {
    "width": 0.5,
    "height": 0.9
}
```

bee

```json
"minecraft:collision_box": {
    "width": 0.55,
    "height": 0.5
}
```

blaze

```json
"minecraft:collision_box": {
    "width": 0.5,
    "height": 1.8
}
```

boat

```json
"minecraft:collision_box": {
    "width": 1.4,
    "height": 0.455
}
```

cat

```json
"minecraft:collision_box": {
    "width": 0.6,
    "height": 0.7
}
```

cave_spider

```json
"minecraft:collision_box": {
    "width": 0.7,
    "height": 0.5
}
```

chest_boat

```json
"minecraft:collision_box": {
    "width": 1.4,
    "height": 0.455
}
```

chest_minecart

```json
"minecraft:collision_box": {
    "width": 0.98,
    "height": 0.7
}
```

chicken

```json
"minecraft:collision_box": {
    "width": 0.6,
    "height": 0.8
}
```

command_block_minecart

```json
"minecraft:collision_box": {
    "width": 0.98,
    "height": 0.7
}
```

cow

```json
"minecraft:collision_box": {
    "width": 0.9,
    "height": 1.3
}
```

creeper

```json
"minecraft:collision_box": {
    "width": 0.6,
    "height": 1.8
}
```

dolphin

```json
"minecraft:collision_box": {
    "width": 0.9,
    "height": 0.6
}
```

donkey

```json
"minecraft:collision_box": {
    "width": 1.4,
    "height": 1.6
}
```

dragon_fireball

```json
"minecraft:collision_box": {
    "width": 0.31,
    "height": 0.31
}
```

drowned

```json
"minecraft:collision_box": {
    "width": 0.6,
    "height": 1.9
}
```

egg

```json
"minecraft:collision_box": {
    "width": 0.25,
    "height": 0.25
}
```

elder_guardian

```json
"minecraft:collision_box": {
    "width": 1.99,
    "height": 1.99
}
```

enderman

```json
"minecraft:collision_box": {
    "width": 0.6,
    "height": 2.9
}
```

endermite

```json
"minecraft:collision_box": {
    "width": 0.4,
    "height": 0.3
}
```

ender_crystal

```json
"minecraft:collision_box": {
    "width": 2,
    "height": 2
}
```

ender_dragon

```json
"minecraft:collision_box": {
    "width": 13,
    "height": 4
}
```

ender_pearl

```json
"minecraft:collision_box": {
    "width": 0.25,
    "height": 0.25
}
```

evocation_illager

```json
"minecraft:collision_box": {
    "width": 0.6,
    "height": 1.9
}
```

eye_of_ender_signal

```json
"minecraft:collision_box": {
    "width": 0.25,
    "height": 0.25
}
```

fireball

```json
"minecraft:collision_box": {
    "width": 1.0,
    "height": 1.0
}
```

fireworks_rocket

```json
"minecraft:collision_box": {
    "width": 0.25,
    "height": 0.25
}
```

cod

```json
"minecraft:collision_box": {
    "width": 0.6,
    "height": 0.3
}
```

fishing_hook

```json
"minecraft:collision_box": {
    "width": 0.15,
    "height": 0.15
}
```

fox

```json
"minecraft:collision_box": {
    "width": 0.6,
    "height": 0.7
}
```

frog

```json
"minecraft:collision_box": {
    "width": 0.5,
    "height": 0.55
}
```

ghast

```json
"minecraft:collision_box": {
    "width": 4.02,
    "height": 4
}
```

glow_squid

```json
"minecraft:collision_box": {
    "width": 0.95,
    "height": 0.95
}
```

goat

```json
"minecraft:collision_box": {
    "width": 0.9,
    "height": 1.3
}
```

guardian

```json
"minecraft:collision_box": {
    "width": 0.85,
    "height": 0.85
}
```

hoglin

```json
"minecraft:collision_box": {
    "width": 0.85,
    "height": 0.85
}
```

```json
"minecraft:collision_box": {
    "width": 1.4,
    "height": 1.4
}
```

hopper_minecart

```json
"minecraft:collision_box": {
    "width": 0.98,
    "height": 0.7
}
```

horse

```json
"minecraft:collision_box": {
    "width": 1.4,
    "height": 1.6
}
```

husk

```json
"minecraft:collision_box": {
    "width": 0.6,
    "height": 1.9
}
```

iron_golem

```json
"minecraft:collision_box": {
    "width": 1.4,
    "height": 2.9
}
```

lingering_potion

```json
"minecraft:collision_box": {
    "width": 0.25,
    "height": 0.25
}
```

llama

```json
"minecraft:collision_box": {
    "width": 0.9,
    "height": 1.87
}
```

llama_spit

```json
"minecraft:collision_box": {
    "width": 0.31,
    "height": 0.31
}
```

magma_cube

```json
"minecraft:collision_box": {
    "width": 2.08,
    "height": 2.08
}
```

```json
"minecraft:collision_box": {
    "width": 2.08,
    "height": 2.08
}
```

```json
"minecraft:collision_box": {
    "width": 1.04,
    "height": 1.02
}
```

```json
"minecraft:collision_box": {
    "width": 0.52,
    "height": 0.52
}
```

minecart

```json
"minecraft:collision_box": {
    "width": 0.98,
    "height": 0.7
}
```

mooshroom

```json
"minecraft:collision_box": {
    "width": 0.9,
    "height": 1.3
}
```

mule

```json
"minecraft:collision_box": {
    "width": 1.4,
    "height": 1.6
}
```

npc

```json
"minecraft:collision_box": {
    "width": 0.6,
    "height": 2.1
}
```

ocelot

```json
"minecraft:collision_box": {
    "width": 0.6,
    "height": 0.7
}
```

panda

```json
"minecraft:collision_box": {
    "width": 1.7,
    "height": 1.5
}
```

parrot

```json
"minecraft:collision_box": {
    "width": 0.5,
    "height": 1
}
```

phantom

```json
"minecraft:collision_box": {
    "width": 0.9,
    "height": 0.5
}
```

pig

```json
"minecraft:collision_box": {
    "width": 0.9,
    "height": 0.9
}
```

piglin

```json
"minecraft:collision_box": {
    "width": 0.6,
    "height": 1.9
}
```

piglin_brute

```json
"minecraft:collision_box": {
    "width": 0.6,
    "height": 1.9
}
```

pillager

```json
"minecraft:collision_box": {
    "width": 0.6,
    "height": 1.9
}
```

player

```json
"minecraft:collision_box": {
    "width": 0.6,
    "height": 1.8
}
```

polar_bear

```json
"minecraft:collision_box": {
    "width": 1.3,
    "height": 1.4
}
```

pufferfish

```json
"minecraft:collision_box": {
    "width": 0.8,
    "height": 0.8
}
```

rabbit

```json
"minecraft:collision_box": {
    "width": 0.67,
    "height": 0.67
}
```

ravager

```json
"minecraft:collision_box": {
    "height": 2.2,
    "width": 1.95
}
```

salmon

```json
"minecraft:collision_box": {
    "width": 0.5,
    "height": 0.5
}
```

sheep

```json
"minecraft:collision_box": {
    "width": 0.9,
    "height": 1.3
}
```

shulker_bullet

```json
"minecraft:collision_box": {
    "width": 0.625,
    "height": 0.625
}
```

silverfish

```json
"minecraft:collision_box": {
    "width": 0.4,
    "height": 0.3
}
```

skeleton

```json
"minecraft:collision_box": {
    "width": 0.6,
    "height": 1.9
}
```

skeleton_horse

```json
"minecraft:collision_box": {
    "width": 1.4,
    "height": 1.6
}
```

slime

```json
"minecraft:collision_box": {
    "width": 2.08,
    "height": 2.08
}
```

```json
"minecraft:collision_box": {
    "width": 2.08,
    "height": 2.08
}
```

```json
"minecraft:collision_box": {
    "width": 1.04,
    "height": 1.04
}
```

```json
"minecraft:collision_box": {
    "width": 0.52,
    "height": 0.52
}
```

small_fireball

```json
"minecraft:collision_box": {
    "width": 0.31,
    "height": 0.31
}
```

snowball

```json
"minecraft:collision_box": {
    "width": 0.25,
    "height": 0.25
}
```

snow_golem

```json
"minecraft:collision_box": {
    "width": 0.4,
    "height": 1.8
}
```

spider

```json
"minecraft:collision_box": {
    "width": 1.4,
    "height": 0.9
}
```

splash_potion

```json
"minecraft:collision_box": {
    "width": 0.25,
    "height": 0.25
}
```

squid

```json
"minecraft:collision_box": {
    "width": 0.95,
    "height": 0.95
}
```

stray

```json
"minecraft:collision_box": {
    "width": 0.6,
    "height": 1.9
}
```

strider

```json
"minecraft:collision_box": {
    "width": 0.9,
    "height": 1.7
}
```

tadpole

```json
"minecraft:collision_box": {
    "width": 0.8,
    "height": 0.6
}
```

thrown_trident

```json
"minecraft:collision_box": {
    "width": 0.25,
    "height": 0.35
}
```

tnt

```json
"minecraft:collision_box": {
    "width": 0.98,
    "height": 0.98
}
```

tnt_minecart

```json
"minecraft:collision_box": {
    "width": 0.98,
    "height": 0.7
}
```

trader_llama

```json
"minecraft:collision_box": {
    "width": 0.9,
    "height": 1.87
}
```

tripod_camera

```json
"minecraft:collision_box": {
    "width": 0.75,
    "height": 1.8
}
```

tropicalfish

```json
"minecraft:collision_box": {
    "width": 0.4,
    "height": 0.4
}
```

turtle

```json
"minecraft:collision_box": {
    "width": 0.6,
    "height": 0.2
}
```

```json
"minecraft:collision_box": {
    "width": 1.2,
    "height": 0.4
}
```

vex

```json
"minecraft:collision_box": {
    "width": 0.4,
    "height": 0.8
}
```

villager

```json
"minecraft:collision_box": {
    "width": 0.6,
    "height": 1.9
}
```

villager_v2

```json
"minecraft:collision_box": {
    "width": 0.6,
    "height": 1.9
}
```

vindicator

```json
"minecraft:collision_box": {
    "width": 0.6,
    "height": 1.9
}
```

wandering_trader

```json
"minecraft:collision_box": {
    "width": 0.6,
    "height": 1.9
}
```

warden

```json
"minecraft:collision_box": {
    "width": 0.9,
    "height": 2.9
}
```

witch

```json
"minecraft:collision_box": {
    "width": 0.6,
    "height": 1.9
}
```

wither

```json
"minecraft:collision_box": {
    "width": 1,
    "height": 3
}
```

wither_skeleton

```json
"minecraft:collision_box": {
    "width": 0.72,
    "height": 2.01
}
```

wither_skull

```json
"minecraft:collision_box": {
    "width": 0.15,
    "height": 0.15
}
```

wither_skull_dangerous

```json
"minecraft:collision_box": {
    "width": 0.15,
    "height": 0.15
}
```

wolf

```json
"minecraft:collision_box": {
    "width": 0.6,
    "height": 0.8
}
```

xp_bottle

```json
"minecraft:collision_box": {
    "width": 0.25,
    "height": 0.25
}
```

xp_orb

```json
"minecraft:collision_box": {
    "width": 0.25,
    "height": 0.25
}
```

zoglin

```json
"minecraft:collision_box": {
    "width": 0.85,
    "height": 0.85
}
```

```json
"minecraft:collision_box": {
    "width": 1.4,
    "height": 1.4
}
```

zombie

```json
"minecraft:collision_box": {
    "width": 0.6,
    "height": 1.9
}
```

zombie_horse

```json
"minecraft:collision_box": {
    "width": 1.4,
    "height": 1.6
}
```

zombie_pigman

```json
"minecraft:collision_box": {
    "width": 0.6,
    "height": 1.9
}
```

zombie_villager

```json
"minecraft:collision_box": {
    "width": 0.6,
    "height": 1.9
}
```

zombie_villager_v2

```json
"minecraft:collision_box": {
    "width": 0.6,
    "height": 1.9
}
```

## color

cat

```json
"minecraft:color": {
    "value": 14
}
```

sheep

```json
"minecraft:color": {
    "value": 0
}
```

```json
"minecraft:color": {
    "value": 12
}
```

```json
"minecraft:color": {
    "value": 15
}
```

```json
"minecraft:color": {
    "value": 8
}
```

```json
"minecraft:color": {
    "value": 7
}
```

```json
"minecraft:color": {
    "value": 6
}
```

```json
"minecraft:color": {
    "value": 14
}
```

tropicalfish

```json
"minecraft:color": {
    "value": 0
}
```

```json
"minecraft:color": {
    "value": 1
}
```

```json
"minecraft:color": {
    "value": 2
}
```

```json
"minecraft:color": {
    "value": 3
}
```

```json
"minecraft:color": {
    "value": 4
}
```

```json
"minecraft:color": {
    "value": 5
}
```

```json
"minecraft:color": {
    "value": 6
}
```

```json
"minecraft:color": {
    "value": 7
}
```

```json
"minecraft:color": {
    "value": 8
}
```

```json
"minecraft:color": {
    "value": 9
}
```

```json
"minecraft:color": {
    "value": 10
}
```

```json
"minecraft:color": {
    "value": 11
}
```

```json
"minecraft:color": {
    "value": 12
}
```

```json
"minecraft:color": {
    "value": 13
}
```

```json
"minecraft:color": {
    "value": 14
}
```

```json
"minecraft:color": {
    "value": 1
}
```

```json
"minecraft:color": {
    "value": 7
}
```

```json
"minecraft:color": {
    "value": 7
}
```

```json
"minecraft:color": {
    "value": 0
}
```

```json
"minecraft:color": {
    "value": 11
}
```

```json
"minecraft:color": {
    "value": 1
}
```

```json
"minecraft:color": {
    "value": 6
}
```

```json
"minecraft:color": {
    "value": 10
}
```

```json
"minecraft:color": {
    "value": 0
}
```

```json
"minecraft:color": {
    "value": 0
}
```

```json
"minecraft:color": {
    "value": 0
}
```

```json
"minecraft:color": {
    "value": 0
}
```

```json
"minecraft:color": {
    "value": 9
}
```

```json
"minecraft:color": {
    "value": 5
}
```

```json
"minecraft:color": {
    "value": 14
}
```

```json
"minecraft:color": {
    "value": 7
}
```

```json
"minecraft:color": {
    "value": 14
}
```

```json
"minecraft:color": {
    "value": 0
}
```

```json
"minecraft:color": {
    "value": 14
}
```

```json
"minecraft:color": {
    "value": 7
}
```

```json
"minecraft:color": {
    "value": 4
}
```

```json
"minecraft:color": {
    "value": 9
}
```

wolf

```json
"minecraft:color": {
    "value": 14
}
```

## color2

tropicalfish

```json
"minecraft:color2": {
    "value": 0
}
```

```json
"minecraft:color2": {
    "value": 1
}
```

```json
"minecraft:color2": {
    "value": 2
}
```

```json
"minecraft:color2": {
    "value": 3
}
```

```json
"minecraft:color2": {
    "value": 4
}
```

```json
"minecraft:color2": {
    "value": 5
}
```

```json
"minecraft:color2": {
    "value": 6
}
```

```json
"minecraft:color2": {
    "value": 7
}
```

```json
"minecraft:color2": {
    "value": 8
}
```

```json
"minecraft:color2": {
    "value": 9
}
```

```json
"minecraft:color2": {
    "value": 10
}
```

```json
"minecraft:color2": {
    "value": 11
}
```

```json
"minecraft:color2": {
    "value": 12
}
```

```json
"minecraft:color2": {
    "value": 13
}
```

```json
"minecraft:color2": {
    "value": 14
}
```

```json
"minecraft:color2": {
    "value": 7
}
```

```json
"minecraft:color2": {
    "value": 7
}
```

```json
"minecraft:color2": {
    "value": 3
}
```

```json
"minecraft:color2": {
    "value": 7
}
```

```json
"minecraft:color2": {
    "value": 7
}
```

```json
"minecraft:color2": {
    "value": 0
}
```

```json
"minecraft:color2": {
    "value": 3
}
```

```json
"minecraft:color2": {
    "value": 4
}
```

```json
"minecraft:color2": {
    "value": 14
}
```

```json
"minecraft:color2": {
    "value": 4
}
```

```json
"minecraft:color2": {
    "value": 7
}
```

```json
"minecraft:color2": {
    "value": 1
}
```

```json
"minecraft:color2": {
    "value": 6
}
```

```json
"minecraft:color2": {
    "value": 3
}
```

```json
"minecraft:color2": {
    "value": 0
}
```

```json
"minecraft:color2": {
    "value": 14
}
```

```json
"minecraft:color2": {
    "value": 0
}
```

```json
"minecraft:color2": {
    "value": 4
}
```

```json
"minecraft:color2": {
    "value": 0
}
```

```json
"minecraft:color2": {
    "value": 0
}
```

```json
"minecraft:color2": {
    "value": 4
}
```

```json
"minecraft:color2": {
    "value": 4
}
```

## combat_regeneration

axolotl

```json
"minecraft:combat_regeneration": {}
```

## conditional_bandwidth_optimization

allay

```json
"minecraft:conditional_bandwidth_optimization": {}
```

area_effect_cloud

```json
"minecraft:conditional_bandwidth_optimization": {}
```

armor_stand

```json
"minecraft:conditional_bandwidth_optimization": {}
```

arrow

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

```json
"minecraft:conditional_bandwidth_optimization": {}
```

bee

```json
"minecraft:conditional_bandwidth_optimization": {}
```

blaze

```json
"minecraft:conditional_bandwidth_optimization": {}
```

boat

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

cat

```json
"minecraft:conditional_bandwidth_optimization": {}
```

cave_spider

```json
"minecraft:conditional_bandwidth_optimization": {}
```

chest_boat

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

chest_minecart

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

chicken

```json
"minecraft:conditional_bandwidth_optimization": {}
```

command_block_minecart

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

cow

```json
"minecraft:conditional_bandwidth_optimization": {}
```

creeper

```json
"minecraft:conditional_bandwidth_optimization": {}
```

dolphin

```json
"minecraft:conditional_bandwidth_optimization": {}
```

donkey

```json
"minecraft:conditional_bandwidth_optimization": {}
```

drowned

```json
"minecraft:conditional_bandwidth_optimization": {}
```

egg

```json
"minecraft:conditional_bandwidth_optimization": {
    "default_values": {
        "max_optimized_distance": 80.0,
        "max_dropped_ticks": 7,
        "use_motion_prediction_hints": true
    }
}
```

elder_guardian

```json
"minecraft:conditional_bandwidth_optimization": {}
```

enderman

```json
"minecraft:conditional_bandwidth_optimization": {
    "default_values": {
        "max_optimized_distance": 80.0,
        "max_dropped_ticks": 10,
        "use_motion_prediction_hints": true
    }
}
```

endermite

```json
"minecraft:conditional_bandwidth_optimization": {}
```

ender_crystal

```json
"minecraft:conditional_bandwidth_optimization": {}
```

ender_pearl

```json
"minecraft:conditional_bandwidth_optimization": {
    "default_values": {
        "max_optimized_distance": 80.0,
        "max_dropped_ticks": 7,
        "use_motion_prediction_hints": true
    }
}
```

evocation_illager

```json
"minecraft:conditional_bandwidth_optimization": {}
```

eye_of_ender_signal

```json
"minecraft:conditional_bandwidth_optimization": {
    "default_values": {
        "max_optimized_distance": 80.0,
        "max_dropped_ticks": 10,
        "use_motion_prediction_hints": true
    }
}
```

fireball

```json
"minecraft:conditional_bandwidth_optimization": {
    "default_values": {
        "max_optimized_distance": 80.0,
        "max_dropped_ticks": 7,
        "use_motion_prediction_hints": true
    }
}
```

fireworks_rocket

```json
"minecraft:conditional_bandwidth_optimization": {
    "default_values": {
        "max_optimized_distance": 80.0,
        "max_dropped_ticks": 10,
        "use_motion_prediction_hints": true
    }
}
```

cod

```json
"minecraft:conditional_bandwidth_optimization": {}
```

fishing_hook

```json
"minecraft:conditional_bandwidth_optimization": {
    "default_values": {
        "max_optimized_distance": 80.0,
        "max_dropped_ticks": 7,
        "use_motion_prediction_hints": true
    }
}
```

fox

```json
"minecraft:conditional_bandwidth_optimization": {}
```

ghast

```json
"minecraft:conditional_bandwidth_optimization": {}
```

guardian

```json
"minecraft:conditional_bandwidth_optimization": {}
```

hoglin

```json
"minecraft:conditional_bandwidth_optimization": {}
```

hopper_minecart

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

horse

```json
"minecraft:conditional_bandwidth_optimization": {}
```

husk

```json
"minecraft:conditional_bandwidth_optimization": {}
```

iron_golem

```json
"minecraft:conditional_bandwidth_optimization": {}
```

lightning_bolt

```json
"minecraft:conditional_bandwidth_optimization": {
    "default_values": {
        "max_optimized_distance": 80.0,
        "max_dropped_ticks": 10,
        "use_motion_prediction_hints": true
    }
}
```

lingering_potion

```json
"minecraft:conditional_bandwidth_optimization": {
    "default_values": {
        "max_optimized_distance": 80.0,
        "max_dropped_ticks": 5,
        "use_motion_prediction_hints": true
    }
}
```

llama

```json
"minecraft:conditional_bandwidth_optimization": {}
```

llama_spit

```json
"minecraft:conditional_bandwidth_optimization": {
    "default_values": {
        "max_optimized_distance": 80.0,
        "max_dropped_ticks": 7,
        "use_motion_prediction_hints": true
    }
}
```

magma_cube

```json
"minecraft:conditional_bandwidth_optimization": {}
```

minecart

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

mooshroom

```json
"minecraft:conditional_bandwidth_optimization": {}
```

mule

```json
"minecraft:conditional_bandwidth_optimization": {}
```

ocelot

```json
"minecraft:conditional_bandwidth_optimization": {}
```

panda

```json
"minecraft:conditional_bandwidth_optimization": {}
```

parrot

```json
"minecraft:conditional_bandwidth_optimization": {}
```

phantom

```json
"minecraft:conditional_bandwidth_optimization": {}
```

pig

```json
"minecraft:conditional_bandwidth_optimization": {}
```

piglin

```json
"minecraft:conditional_bandwidth_optimization": {}
```

piglin_brute

```json
"minecraft:conditional_bandwidth_optimization": {}
```

pillager

```json
"minecraft:conditional_bandwidth_optimization": {}
```

player

```json
"minecraft:conditional_bandwidth_optimization": {}
```

polar_bear

```json
"minecraft:conditional_bandwidth_optimization": {}
```

pufferfish

```json
"minecraft:conditional_bandwidth_optimization": {}
```

rabbit

```json
"minecraft:conditional_bandwidth_optimization": {}
```

ravager

```json
"minecraft:conditional_bandwidth_optimization": {}
```

salmon

```json
"minecraft:conditional_bandwidth_optimization": {}
```

sheep

```json
"minecraft:conditional_bandwidth_optimization": {}
```

shulker

```json
"minecraft:conditional_bandwidth_optimization": {
    "default_values": {
        "max_optimized_distance": 80.0,
        "max_dropped_ticks": 10,
        "use_motion_prediction_hints": true
    }
}
```

shulker_bullet

```json
"minecraft:conditional_bandwidth_optimization": {
    "default_values": {
        "max_optimized_distance": 80.0,
        "max_dropped_ticks": 7,
        "use_motion_prediction_hints": true
    }
}
```

silverfish

```json
"minecraft:conditional_bandwidth_optimization": {}
```

skeleton

```json
"minecraft:conditional_bandwidth_optimization": {}
```

skeleton_horse

```json
"minecraft:conditional_bandwidth_optimization": {}
```

slime

```json
"minecraft:conditional_bandwidth_optimization": {}
```

small_fireball

```json
"minecraft:conditional_bandwidth_optimization": {
    "default_values": {
        "max_optimized_distance": 80.0,
        "max_dropped_ticks": 7,
        "use_motion_prediction_hints": true
    }
}
```

snowball

```json
"minecraft:conditional_bandwidth_optimization": {
    "default_values": {
        "max_optimized_distance": 100.0,
        "max_dropped_ticks": 7,
        "use_motion_prediction_hints": true
    }
}
```

snow_golem

```json
"minecraft:conditional_bandwidth_optimization": {}
```

spider

```json
"minecraft:conditional_bandwidth_optimization": {}
```

splash_potion

```json
"minecraft:conditional_bandwidth_optimization": {
    "default_values": {
        "max_optimized_distance": 80.0,
        "max_dropped_ticks": 5,
        "use_motion_prediction_hints": true
    }
}
```

squid

```json
"minecraft:conditional_bandwidth_optimization": {}
```

stray

```json
"minecraft:conditional_bandwidth_optimization": {}
```

strider

```json
"minecraft:conditional_bandwidth_optimization": {}
```

thrown_trident

```json
"minecraft:conditional_bandwidth_optimization": {
    "default_values": {
        "max_optimized_distance": 80.0,
        "max_dropped_ticks": 7,
        "use_motion_prediction_hints": true
    }
}
```

tnt

```json
"minecraft:conditional_bandwidth_optimization": {
    "default_values": {
        "max_optimized_distance": 80.0,
        "max_dropped_ticks": 5,
        "use_motion_prediction_hints": true
    }
}
```

tnt_minecart

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

trader_llama

```json
"minecraft:conditional_bandwidth_optimization": {}
```

tripod_camera

```json
"minecraft:conditional_bandwidth_optimization": {}
```

tropicalfish

```json
"minecraft:conditional_bandwidth_optimization": {}
```

turtle

```json
"minecraft:conditional_bandwidth_optimization": {}
```

vex

```json
"minecraft:conditional_bandwidth_optimization": {}
```

villager

```json
"minecraft:conditional_bandwidth_optimization": {}
```

villager_v2

```json
"minecraft:conditional_bandwidth_optimization": {}
```

vindicator

```json
"minecraft:conditional_bandwidth_optimization": {}
```

wandering_trader

```json
"minecraft:conditional_bandwidth_optimization": {}
```

witch

```json
"minecraft:conditional_bandwidth_optimization": {}
```

wither

```json
"minecraft:conditional_bandwidth_optimization": {}
```

wither_skeleton

```json
"minecraft:conditional_bandwidth_optimization": {}
```

wither_skull

```json
"minecraft:conditional_bandwidth_optimization": {
    "default_values": {
        "max_optimized_distance": 80.0,
        "max_dropped_ticks": 7,
        "use_motion_prediction_hints": true
    }
}
```

wither_skull_dangerous

```json
"minecraft:conditional_bandwidth_optimization": {
    "default_values": {
        "max_optimized_distance": 80.0,
        "max_dropped_ticks": 7,
        "use_motion_prediction_hints": true
    }
}
```

wolf

```json
"minecraft:conditional_bandwidth_optimization": {}
```

xp_bottle

```json
"minecraft:conditional_bandwidth_optimization": {
    "default_values": {
        "max_optimized_distance": 80.0,
        "max_dropped_ticks": 5,
        "use_motion_prediction_hints": true
    }
}
```

xp_orb

```json
"minecraft:conditional_bandwidth_optimization": {
    "default_values": {
        "max_optimized_distance": 80.0,
        "max_dropped_ticks": 10,
        "use_motion_prediction_hints": true
    }
}
```

zoglin

```json
"minecraft:conditional_bandwidth_optimization": {}
```

zombie

```json
"minecraft:conditional_bandwidth_optimization": {}
```

zombie_horse

```json
"minecraft:conditional_bandwidth_optimization": {}
```

zombie_pigman

```json
"minecraft:conditional_bandwidth_optimization": {}
```

zombie_villager

```json
"minecraft:conditional_bandwidth_optimization": {}
```

zombie_villager_v2

```json
"minecraft:conditional_bandwidth_optimization": {}
```

## custom_hit_test

hoglin

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

## damage_over_time

axolotl

```json
"minecraft:damage_over_time": {
    "damage_per_hurt": 1,
    "time_between_hurt": 0
}
```

dolphin

```json
"minecraft:damage_over_time": {
    "damage_per_hurt": 1,
    "time_between_hurt": 0
}
```

## damage_sensor

allay

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

```json
"minecraft:damage_sensor": {
    "triggers": {
        "cause": "fall",
        "deals_damage": false
    }
}
```

bee

```json
"minecraft:damage_sensor": {
    "triggers": {
        "cause": "fall",
        "deals_damage": false
    }
}
```

blaze

```json
"minecraft:damage_sensor": {
    "triggers": {
        "cause": "fall",
        "deals_damage": false
    }
}
```

cat

```json
"minecraft:damage_sensor": {
    "triggers": {
        "cause": "fall",
        "deals_damage": false
    }
}
```

chicken

```json
"minecraft:damage_sensor": {
    "triggers": {
        "cause": "fall",
        "deals_damage": false
    }
}
```

creeper

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

ender_dragon

```json
"minecraft:damage_sensor": {
    "triggers": {
        "cause": "fall",
        "deals_damage": false
    }
}
```

fox

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

frog

```json
"minecraft:damage_sensor": {
    "triggers": {
        "cause": "fall",
        "deals_damage": true,
        "damage_modifier": -5
    }
}
```

ghast

```json
"minecraft:damage_sensor": {
    "triggers": {
        "cause": "fall",
        "deals_damage": false
    }
}
```

goat

```json
"minecraft:damage_sensor": {
    "triggers": {
        "cause": "fall",
        "deals_damage": true,
        "damage_modifier": -10
    }
}
```

iron_golem

```json
"minecraft:damage_sensor": {
    "triggers": {
        "cause": "fall",
        "deals_damage": false
    }
}
```

llama

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

```json
"minecraft:damage_sensor": {
    "triggers": {
        "cause": "all",
        "deals_damage": true
    }
}
```

magma_cube

```json
"minecraft:damage_sensor": {
    "triggers": {
        "cause": "fall",
        "deals_damage": false
    }
}
```

mooshroom

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

npc

```json
"minecraft:damage_sensor": {
    "triggers": {
        "cause": "all",
        "deals_damage": false
    }
}
```

ocelot

```json
"minecraft:damage_sensor": {
    "triggers": {
        "cause": "fall",
        "deals_damage": false
    }
}
```

parrot

```json
"minecraft:damage_sensor": {
    "triggers": {
        "cause": "fall",
        "deals_damage": false
    }
}
```

pig

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

pillager

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

skeleton

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

skeleton_horse

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

snow_golem

```json
"minecraft:damage_sensor": {
    "triggers": {
        "cause": "fall",
        "deals_damage": false
    }
}
```

trader_llama

```json
"minecraft:damage_sensor": {
    "triggers": {
        "cause": "all",
        "deals_damage": true,
        "on_damage": {
            "filters": {
                "all_of": [
                    {
                        "test": "is_family",
                        "subject": "other",
                        "operator": "!=",
                        "value": "trader_llama"
                    },
                    {
                        "test": "in_caravan",
                        "value": false
                    }
                ]
            },
            "event": "minecraft:become_angry"
        }
    }
}
```

```json
"minecraft:damage_sensor": {
    "triggers": {
        "cause": "all",
        "deals_damage": true
    }
}
```

turtle

```json
"minecraft:damage_sensor": {
    "triggers": {
        "cause": "lightning",
        "deals_damage": true,
        "damage_multiplier": 2000.0
    }
}
```

villager

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

villager_v2

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

vindicator

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

wandering_trader

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

wither

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

## despawn

axolotl

```json
"minecraft:despawn": {
    "despawn_from_distance": {}
}
```

bat

```json
"minecraft:despawn": {
    "despawn_from_distance": {}
}
```

blaze

```json
"minecraft:despawn": {
    "despawn_from_distance": {}
}
```

cat

```json
"minecraft:despawn": {
    "despawn_from_distance": {}
}
```

cave_spider

```json
"minecraft:despawn": {
    "despawn_from_distance": {}
}
```

chicken

```json
"minecraft:despawn": {
    "despawn_from_distance": {}
}
```

cow

```json
"minecraft:despawn": {
    "despawn_from_distance": {}
}
```

creeper

```json
"minecraft:despawn": {
    "despawn_from_distance": {}
}
```

dolphin

```json
"minecraft:despawn": {
    "despawn_from_distance": {}
}
```

donkey

```json
"minecraft:despawn": {
    "despawn_from_distance": {}
}
```

drowned

```json
"minecraft:despawn": {
    "despawn_from_distance": {}
}
```

enderman

```json
"minecraft:despawn": {
    "despawn_from_distance": {}
}
```

endermite

```json
"minecraft:despawn": {
    "despawn_from_distance": {}
}
```

evocation_illager

```json
"minecraft:despawn": {
    "despawn_from_distance": {}
}
```

cod

```json
"minecraft:despawn": {
    "despawn_from_distance": {
        "min_distance": 32,
        "max_distance": 40
    }
}
```

fox

```json
"minecraft:despawn": {
    "despawn_from_distance": {}
}
```

frog

```json
"minecraft:despawn": {
    "despawn_from_distance": {}
}
```

ghast

```json
"minecraft:despawn": {
    "despawn_from_distance": {}
}
```

glow_squid

```json
"minecraft:despawn": {
    "despawn_from_distance": {}
}
```

goat

```json
"minecraft:despawn": {
    "despawn_from_distance": {}
}
```

guardian

```json
"minecraft:despawn": {
    "despawn_from_distance": {}
}
```

hoglin

```json
"minecraft:despawn": {
    "despawn_from_distance": {}
}
```

horse

```json
"minecraft:despawn": {
    "despawn_from_distance": {}
}
```

husk

```json
"minecraft:despawn": {
    "despawn_from_distance": {}
}
```

llama

```json
"minecraft:despawn": {
    "despawn_from_distance": {}
}
```

magma_cube

```json
"minecraft:despawn": {
    "despawn_from_distance": {}
}
```

mooshroom

```json
"minecraft:despawn": {
    "despawn_from_distance": {}
}
```

mule

```json
"minecraft:despawn": {
    "despawn_from_distance": {}
}
```

ocelot

```json
"minecraft:despawn": {
    "despawn_from_distance": {}
}
```

panda

```json
"minecraft:despawn": {
    "despawn_from_distance": {}
}
```

parrot

```json
"minecraft:despawn": {
    "despawn_from_distance": {}
}
```

phantom

```json
"minecraft:despawn": {
    "despawn_from_distance": {}
}
```

pig

```json
"minecraft:despawn": {
    "despawn_from_distance": {}
}
```

piglin

```json
"minecraft:despawn": {
    "despawn_from_distance": {}
}
```

piglin_brute

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

pillager

```json
"minecraft:despawn": {
    "despawn_from_distance": {}
}
```

polar_bear

```json
"minecraft:despawn": {
    "despawn_from_distance": {}
}
```

pufferfish

```json
"minecraft:despawn": {
    "despawn_from_distance": {
        "min_distance": 32,
        "max_distance": 40
    }
}
```

rabbit

```json
"minecraft:despawn": {
    "despawn_from_distance": {}
}
```

ravager

```json
"minecraft:despawn": {
    "despawn_from_distance": {}
}
```

salmon

```json
"minecraft:despawn": {
    "despawn_from_distance": {
        "min_distance": 32,
        "max_distance": 40
    }
}
```

sheep

```json
"minecraft:despawn": {
    "despawn_from_distance": {}
}
```

silverfish

```json
"minecraft:despawn": {
    "despawn_from_distance": {}
}
```

skeleton

```json
"minecraft:despawn": {
    "despawn_from_distance": {}
}
```

skeleton_horse

```json
"minecraft:despawn": {
    "despawn_from_distance": {}
}
```

slime

```json
"minecraft:despawn": {
    "despawn_from_distance": {}
}
```

spider

```json
"minecraft:despawn": {
    "despawn_from_distance": {}
}
```

squid

```json
"minecraft:despawn": {
    "despawn_from_distance": {}
}
```

stray

```json
"minecraft:despawn": {
    "despawn_from_distance": {}
}
```

strider

```json
"minecraft:despawn": {
    "despawn_from_distance": {}
}
```

tadpole

```json
"minecraft:despawn": {
    "despawn_from_distance": {}
}
```

trader_llama

```json
"minecraft:despawn": {
    "despawn_from_distance": {}
}
```

tropicalfish

```json
"minecraft:despawn": {
    "despawn_from_distance": {
        "min_distance": 32,
        "max_distance": 40
    }
}
```

turtle

```json
"minecraft:despawn": {
    "despawn_from_distance": {}
}
```

vex

```json
"minecraft:despawn": {
    "despawn_from_distance": {}
}
```

vindicator

```json
"minecraft:despawn": {
    "despawn_from_distance": {}
}
```

wandering_trader

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

witch

```json
"minecraft:despawn": {
    "despawn_from_distance": {}
}
```

wither_skeleton

```json
"minecraft:despawn": {
    "despawn_from_distance": {}
}
```

wolf

```json
"minecraft:despawn": {
    "despawn_from_distance": {}
}
```

zoglin

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

zombie

```json
"minecraft:despawn": {
    "despawn_from_distance": {}
}
```

zombie_horse

```json
"minecraft:despawn": {
    "despawn_from_distance": {}
}
```

zombie_pigman

```json
"minecraft:despawn": {
    "despawn_from_distance": {}
}
```

zombie_villager

```json
"minecraft:despawn": {
    "despawn_from_distance": {}
}
```

zombie_villager_v2

```json
"minecraft:despawn": {
    "despawn_from_distance": {}
}
```

## drying_out_timer

axolotl

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

## dweller

cat

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

vindicator

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

witch

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

## economy_trade_table

villager_v2

```json
"minecraft:economy_trade_table": {}
```

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

wandering_trader

```json
"minecraft:economy_trade_table": {
    "display_name": "entity.wandering_trader.name",
    "table": "trading/economy_trades/wandering_trader_trades.json",
    "new_screen": true
}
```

## entity_sensor

parrot

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

## environment_sensor

axolotl

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

fox

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

hoglin

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

husk

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

piglin

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

piglin_brute

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

pillager

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

player

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

skeleton

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

spider

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

stray

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

strider

```json
"minecraft:environment_sensor": {
    "triggers": [
        {
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
        },
        {
            "filters": {
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
                        "value": "minecraft:behavior.move_to_liquid"
                    }
                ]
            },
            "event": "on_not_riding_parent"
        }
    ]
}
```

```json
"minecraft:environment_sensor": {
    "triggers": [
        {
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
        },
        {
            "filters": {
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
                        "value": "minecraft:behavior.move_to_liquid"
                    }
                ]
            },
            "event": "on_not_riding_parent"
        }
    ]
}
```

trader_llama

```json
"minecraft:environment_sensor": {
    "triggers": [
        {
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
        },
        {
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
                        "operator": "==",
                        "value": "minecraft:persistent"
                    }
                ]
            },
            "event": "minecraft:remove_persistence"
        }
    ]
}
```

zombie

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

## equip_item

drowned

```json
"minecraft:equip_item": {}
```

fox

```json
"minecraft:equip_item": {}
```

husk

```json
"minecraft:equip_item": {}
```

piglin

```json
"minecraft:equip_item": {}
```

pillager

```json
"minecraft:equip_item": {}
```

skeleton

```json
"minecraft:equip_item": {}
```

stray

```json
"minecraft:equip_item": {}
```

wither_skeleton

```json
"minecraft:equip_item": {}
```

zombie

```json
"minecraft:equip_item": {}
```

zombie_pigman

```json
"minecraft:equip_item": {}
```

zombie_villager

```json
"minecraft:equip_item": {}
```

zombie_villager_v2

```json
"minecraft:equip_item": {}
```

## equipment

drowned

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

```json
"minecraft:equipment": {
    "table": "loot_tables/entities/zombie_equipment.json"
}
```

piglin

```json
"minecraft:equipment": {
    "table": "loot_tables/entities/piglin_gear_ranged.json"
}
```

```json
"minecraft:equipment": {
    "table": "loot_tables/entities/piglin_gear_melee.json"
}
```

piglin_brute

```json
"minecraft:equipment": {
    "table": "loot_tables/entities/piglin_brute_gear.json"
}
```

pillager

```json
"minecraft:equipment": {
    "table": "loot_tables/entities/pillager_gear.json"
}
```

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

skeleton

```json
"minecraft:equipment": {
    "table": "loot_tables/entities/skeleton_gear.json"
}
```

stray

```json
"minecraft:equipment": {
    "table": "loot_tables/entities/skeleton_gear.json"
}
```

vex

```json
"minecraft:equipment": {
    "table": "loot_tables/entities/vex_gear.json"
}
```

vindicator

```json
"minecraft:equipment": {
    "table": "loot_tables/entities/vindicator_gear.json"
}
```

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

wither_skeleton

```json
"minecraft:equipment": {
    "table": "loot_tables/entities/wither_skeleton_gear.json"
}
```

zombie

```json
"minecraft:equipment": {
    "table": "loot_tables/entities/zombie_equipment.json"
}
```

zombie_pigman

```json
"minecraft:equipment": {
    "table": "loot_tables/entities/zombie_pigman_gear.json"
}
```

```json
"minecraft:equipment": {
    "table": "loot_tables/entities/zombified_piglin_rider_gear.json"
}
```

## equippable

donkey

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

## exhaustion_values

player

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

## experience_reward

axolotl

```json
"minecraft:experience_reward": {
    "on_bred": "Math.Random(1,7)",
    "on_death": "query.last_hit_by_player ? Math.Random(1,3) : 0"
}
```

bee

```json
"minecraft:experience_reward": {
    "on_bred": "Math.Random(1,7)",
    "on_death": "query.last_hit_by_player ? Math.Random(1,3) : 0"
}
```

blaze

```json
"minecraft:experience_reward": {
    "on_death": "query.last_hit_by_player ? 10 : 0"
}
```

cat

```json
"minecraft:experience_reward": {
    "on_bred": "Math.Random(1,7)",
    "on_death": "query.last_hit_by_player ? Math.Random(1,3) : 0"
}
```

cave_spider

```json
"minecraft:experience_reward": {
    "on_death": "query.last_hit_by_player ? 5 : 0"
}
```

chicken

```json
"minecraft:experience_reward": {
    "on_bred": "Math.Random(1,7)",
    "on_death": "query.last_hit_by_player ? Math.Random(1,3) : 0"
}
```

cow

```json
"minecraft:experience_reward": {
    "on_bred": "Math.Random(1,7)",
    "on_death": "query.last_hit_by_player ? Math.Random(1,3) : 0"
}
```

creeper

```json
"minecraft:experience_reward": {
    "on_death": "query.last_hit_by_player ? 5 : 0"
}
```

dolphin

```json
"minecraft:experience_reward": {
    "on_death": "query.last_hit_by_player ? Math.Random(1,3) : 0"
}
```

donkey

```json
"minecraft:experience_reward": {
    "on_bred": "Math.Random(1,7)",
    "on_death": "query.last_hit_by_player ? Math.Random(1,3) : 0"
}
```

drowned

```json
"minecraft:experience_reward": {
    "on_death": "query.last_hit_by_player ? 12 + (query.equipment_count * Math.Random(1,3)) : 0"
}
```

```json
"minecraft:experience_reward": {
    "on_death": "query.last_hit_by_player ? 5 + (query.equipment_count * Math.Random(1,3)) : 0"
}
```

elder_guardian

```json
"minecraft:experience_reward": {
    "on_death": "query.last_hit_by_player ? 10 : 0"
}
```

enderman

```json
"minecraft:experience_reward": {
    "on_death": "query.last_hit_by_player ? 5 : 0"
}
```

endermite

```json
"minecraft:experience_reward": {
    "on_death": "query.last_hit_by_player ? 3 : 0"
}
```

evocation_illager

```json
"minecraft:experience_reward": {
    "on_death": "10"
}
```

cod

```json
"minecraft:experience_reward": {
    "on_death": "query.last_hit_by_player ? Math.Random(1,3) : 0"
}
```

fox

```json
"minecraft:experience_reward": {
    "on_bred": "Math.Random(1,7)",
    "on_death": "query.last_hit_by_player ? Math.Random(1,3) : 0"
}
```

frog

```json
"minecraft:experience_reward": {
    "on_bred": "Math.Random(1,7)",
    "on_death": "query.last_hit_by_player ? Math.Random(1,3) : 0"
}
```

ghast

```json
"minecraft:experience_reward": {
    "on_death": "query.last_hit_by_player ? 5 + (query.equipment_count * Math.Random(1,3)) : 0"
}
```

glow_squid

```json
"minecraft:experience_reward": {
    "on_death": "!query.is_baby && query.last_hit_by_player ? Math.Random(1,3) : 0"
}
```

goat

```json
"minecraft:experience_reward": {
    "on_bred": "Math.Random(1,7)",
    "on_death": "query.last_hit_by_player ? Math.Random(1,3) : 0"
}
```

guardian

```json
"minecraft:experience_reward": {
    "on_death": "query.last_hit_by_player ? 10 : 0"
}
```

hoglin

```json
"minecraft:experience_reward": {
    "on_bred": "Math.Random(1,7)",
    "on_death": "query.last_hit_by_player ? 5 : 0"
}
```

horse

```json
"minecraft:experience_reward": {
    "on_bred": "Math.Random(1,7)",
    "on_death": "query.last_hit_by_player ? Math.Random(1,3) : 0"
}
```

husk

```json
"minecraft:experience_reward": {
    "on_death": "query.last_hit_by_player ? 12 + (query.equipment_count * Math.Random(1,3)) : 0"
}
```

```json
"minecraft:experience_reward": {
    "on_death": "query.last_hit_by_player ? 5 + (query.equipment_count * Math.Random(1,3)) : 0"
}
```

llama

```json
"minecraft:experience_reward": {
    "on_bred": "Math.Random(1,7)",
    "on_death": "query.last_hit_by_player ? Math.Random(1,3) : 0"
}
```

magma_cube

```json
"minecraft:experience_reward": {
    "on_death": "query.last_hit_by_player ? query.variant : 0"
}
```

mooshroom

```json
"minecraft:experience_reward": {
    "on_bred": "Math.Random(1,7)",
    "on_death": "query.last_hit_by_player ? Math.Random(1,3) : 0"
}
```

mule

```json
"minecraft:experience_reward": {
    "on_death": "query.last_hit_by_player ? Math.Random(1,3) : 0"
}
```

ocelot

```json
"minecraft:experience_reward": {
    "on_bred": "Math.Random(1,7)",
    "on_death": "query.last_hit_by_player ? Math.Random(1,3) : 0"
}
```

panda

```json
"minecraft:experience_reward": {
    "on_bred": "Math.Random(1,7)",
    "on_death": "query.last_hit_by_player ? Math.Random(1,3) : 0"
}
```

parrot

```json
"minecraft:experience_reward": {
    "on_death": "query.last_hit_by_player ? Math.Random(1,3) : 0"
}
```

phantom

```json
"minecraft:experience_reward": {
    "on_death": "query.last_hit_by_player ? 5 : 0"
}
```

pig

```json
"minecraft:experience_reward": {
    "on_bred": "Math.Random(1,7)",
    "on_death": "query.last_hit_by_player ? Math.Random(1,3) : 0"
}
```

piglin

```json
"minecraft:experience_reward": {
    "on_death": "query.last_hit_by_player ? 1 + (query.equipment_count * Math.Random(1,2)) : 0"
}
```

```json
"minecraft:experience_reward": {
    "on_death": "query.last_hit_by_player ? 5 + (query.equipment_count * Math.Random(1,3)) : 0"
}
```

piglin_brute

```json
"minecraft:experience_reward": {
    "on_death": "query.last_hit_by_player ? 20 : 0"
}
```

pillager

```json
"minecraft:experience_reward": {
    "on_death": "query.last_hit_by_player ? (query.is_baby ? 12 : 5) + (Math.die_roll(query.equipment_count,1,3)) : 0"
}
```

player

```json
"minecraft:experience_reward": {
    "on_death": "Math.Min(query.player_level * 7, 100)"
}
```

polar_bear

```json
"minecraft:experience_reward": {
    "on_death": "query.last_hit_by_player ? Math.Random(1,3) : 0"
}
```

pufferfish

```json
"minecraft:experience_reward": {
    "on_death": "query.last_hit_by_player ? Math.Random(1,3) : 0"
}
```

rabbit

```json
"minecraft:experience_reward": {
    "on_bred": "Math.Random(1,7)",
    "on_death": "query.last_hit_by_player ? Math.Random(1,3) : 0"
}
```

ravager

```json
"minecraft:experience_reward": {
    "on_death": "query.last_hit_by_player ? 20 : 0"
}
```

salmon

```json
"minecraft:experience_reward": {
    "on_death": "query.last_hit_by_player ? Math.Random(1,3) : 0"
}
```

sheep

```json
"minecraft:experience_reward": {
    "on_bred": "Math.Random(1,7)",
    "on_death": "query.last_hit_by_player ? Math.Random(1,3) : 0"
}
```

shulker

```json
"minecraft:experience_reward": {
    "on_death": "query.last_hit_by_player ? 5 : 0"
}
```

silverfish

```json
"minecraft:experience_reward": {
    "on_death": "query.last_hit_by_player ? 5 : 0"
}
```

skeleton

```json
"minecraft:experience_reward": {
    "on_death": "query.last_hit_by_player ? 5 + (query.equipment_count * Math.Random(1,3)) : 0"
}
```

skeleton_horse

```json
"minecraft:experience_reward": {
    "on_death": "query.last_hit_by_player ? Math.Random(1,3) : 0"
}
```

slime

```json
"minecraft:experience_reward": {
    "on_death": "query.last_hit_by_player ? query.variant : 0"
}
```

spider

```json
"minecraft:experience_reward": {
    "on_death": "query.last_hit_by_player ? 5 : 0"
}
```

squid

```json
"minecraft:experience_reward": {
    "on_death": "!query.is_baby && query.last_hit_by_player ? Math.Random(1,3) : 0"
}
```

stray

```json
"minecraft:experience_reward": {
    "on_death": "query.last_hit_by_player ? 5 + (query.equipment_count * Math.Random(1,3)) : 0"
}
```

strider

```json
"minecraft:experience_reward": {
    "on_bred": "Math.Random(1,7)",
    "on_death": "query.last_hit_by_player ? Math.Random(1,3) : 0"
}
```

trader_llama

```json
"minecraft:experience_reward": {
    "on_bred": "Math.Random(1,7)",
    "on_death": "query.last_hit_by_player ? Math.Random(1,3) : 0"
}
```

tropicalfish

```json
"minecraft:experience_reward": {
    "on_death": "query.last_hit_by_player ? Math.Random(1,3) : 0"
}
```

turtle

```json
"minecraft:experience_reward": {
    "on_bred": "Math.Random(1,7)",
    "on_death": "query.last_hit_by_player ? Math.Random(1,3) : 0"
}
```

vex

```json
"minecraft:experience_reward": {
    "on_death": "query.last_hit_by_player ? 5 + (query.equipment_count * Math.Random(1,3)) : 0"
}
```

vindicator

```json
"minecraft:experience_reward": {
    "on_death": "query.last_hit_by_player ? (query.is_baby ? 12 : 5) + (Math.die_roll(query.equipment_count,1,3)) : 0"
}
```

warden

```json
"minecraft:experience_reward": {
    "on_bred": "Math.Random(1,7)",
    "on_death": "query.last_hit_by_player ? 5 : 0"
}
```

witch

```json
"minecraft:experience_reward": {
    "on_death": "query.last_hit_by_player ? (query.is_baby ? 12 : 5) + (Math.die_roll(query.equipment_count,1,3)) : 0"
}
```

wither

```json
"minecraft:experience_reward": {
    "on_death": "50"
}
```

wither_skeleton

```json
"minecraft:experience_reward": {
    "on_death": "query.last_hit_by_player ? 5 + (query.equipment_count * Math.Random(1,3)) : 0"
}
```

wolf

```json
"minecraft:experience_reward": {
    "on_bred": "Math.Random(1,7)",
    "on_death": "query.last_hit_by_player ? Math.Random(1,3) : 0"
}
```

zoglin

```json
"minecraft:experience_reward": {
    "on_bred": "Math.Random(1,7)",
    "on_death": "query.last_hit_by_player ? 5 : 0"
}
```

zombie

```json
"minecraft:experience_reward": {
    "on_death": "query.last_hit_by_player ? 12 + (query.equipment_count * Math.Random(1,3)) : 0"
}
```

```json
"minecraft:experience_reward": {
    "on_death": "query.last_hit_by_player ? 5 + (query.equipment_count * Math.Random(1,3)) : 0"
}
```

zombie_horse

```json
"minecraft:experience_reward": {
    "on_death": "query.last_hit_by_player ? Math.Random(1,3) : 0"
}
```

zombie_pigman

```json
"minecraft:experience_reward": {
    "on_death": "query.last_hit_by_player ? 12 + (query.equipment_count * Math.Random(1,3)) : 0"
}
```

```json
"minecraft:experience_reward": {
    "on_death": "query.last_hit_by_player ? 5 + (query.equipment_count * Math.Random(1,3)) : 0"
}
```

zombie_villager

```json
"minecraft:experience_reward": {
    "on_death": "query.last_hit_by_player ? 12 + (query.equipment_count * Math.Random(1,3)) : 0"
}
```

```json
"minecraft:experience_reward": {
    "on_death": "query.last_hit_by_player ? 5 + (query.equipment_count * Math.Random(1,3)) : 0"
}
```

zombie_villager_v2

```json
"minecraft:experience_reward": {
    "on_death": "query.last_hit_by_player ? 12 + (query.equipment_count * Math.Random(1,3)) : 0"
}
```

```json
"minecraft:experience_reward": {
    "on_death": "query.last_hit_by_player ? 5 + (query.equipment_count * Math.Random(1,3)) : 0"
}
```

## explode

creeper

```json
"minecraft:explode": {
    "fuse_length": 1.5,
    "fuse_lit": true,
    "power": 3,
    "causes_fire": false,
    "destroy_affected_by_griefing": true
}
```

```json
"minecraft:explode": {
    "fuse_length": 1.5,
    "fuse_lit": true,
    "power": 6,
    "causes_fire": false,
    "destroy_affected_by_griefing": true
}
```

```json
"minecraft:explode": {
    "fuse_length": 1.5,
    "fuse_lit": true,
    "power": 3,
    "causes_fire": false,
    "destroy_affected_by_griefing": true
}
```

```json
"minecraft:explode": {
    "fuse_length": 1.5,
    "fuse_lit": true,
    "power": 6,
    "causes_fire": false,
    "destroy_affected_by_griefing": true
}
```

ender_crystal

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

```json
"minecraft:explode": {
    "fuse_length": 4,
    "fuse_lit": true,
    "power": 4,
    "causes_fire": false
}
```

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

```json
"minecraft:explode": {
    "fuse_length": 4,
    "fuse_lit": true,
    "power": 3,
    "causes_fire": false
}
```

```json
"minecraft:explode": {
    "fuse_length": 0,
    "fuse_lit": true,
    "power": 3,
    "causes_fire": false
}
```

wither_skull

```json
"minecraft:explode": {
    "fuse_length": 0,
    "fuse_lit": true,
    "power": 1,
    "causes_fire": false,
    "destroy_affected_by_griefing": true
}
```

wither_skull_dangerous

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

## fire_immune

blaze

```json
"minecraft:fire_immune": {}
```

ender_crystal

```json
"minecraft:fire_immune": true
```

ender_dragon

```json
"minecraft:fire_immune": true
```

ghast

```json
"minecraft:fire_immune": {}
```

magma_cube

```json
"minecraft:fire_immune": {}
```

npc

```json
"minecraft:fire_immune": true
```

shulker

```json
"minecraft:fire_immune": true
```

strider

```json
"minecraft:fire_immune": {}
```

vex

```json
"minecraft:fire_immune": {}
```

warden

```json
"minecraft:fire_immune": {}
```

wither

```json
"minecraft:fire_immune": {}
```

wither_skeleton

```json
"minecraft:fire_immune": {}
```

zoglin

```json
"minecraft:fire_immune": {}
```

zombie_pigman

```json
"minecraft:fire_immune": {}
```

## flocking

dolphin

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

## flying_speed

allay

```json
"minecraft:flying_speed": {
    "value": 0.1
}
```

bee

```json
"minecraft:flying_speed": {
    "value": 0.15
}
```

ender_dragon

```json
"minecraft:flying_speed": {
    "value": 0.6
}
```

## follow_range

allay

```json
"minecraft:follow_range": {
    "value": 1024
}
```

bee

```json
"minecraft:follow_range": {
    "value": 1024
}
```

blaze

```json
"minecraft:follow_range": {
    "value": 48,
    "max": 48
}
```

dolphin

```json
"minecraft:follow_range": {
    "value": 48,
    "max": 48
}
```

elder_guardian

```json
"minecraft:follow_range": {
    "value": 16,
    "max": 16
}
```

enderman

```json
"minecraft:follow_range": {
    "value": 64,
    "max": 64
}
```

evocation_illager

```json
"minecraft:follow_range": {
    "value": 64
}
```

ghast

```json
"minecraft:follow_range": {
    "value": 64,
    "max": 64
}
```

guardian

```json
"minecraft:follow_range": {
    "value": 16,
    "max": 16
}
```

iron_golem

```json
"minecraft:follow_range": {
    "value": 64
}
```

llama

```json
"minecraft:follow_range": {
    "value": 40,
    "max": 40
}
```

phantom

```json
"minecraft:follow_range": {
    "value": 64,
    "max": 64
}
```

piglin

```json
"minecraft:follow_range": {
    "value": 64
}
```

piglin_brute

```json
"minecraft:follow_range": {
    "value": 64
}
```

pillager

```json
"minecraft:follow_range": {
    "value": 64
}
```

polar_bear

```json
"minecraft:follow_range": {
    "value": 48
}
```

ravager

```json
"minecraft:follow_range": {
    "value": 64
}
```

trader_llama

```json
"minecraft:follow_range": {
    "value": 40,
    "max": 40
}
```

turtle

```json
"minecraft:follow_range": {
    "value": 1024
}
```

villager_v2

```json
"minecraft:follow_range": {
    "value": 128
}
```

vindicator

```json
"minecraft:follow_range": {
    "value": 64
}
```

warden

```json
"minecraft:follow_range": 30
```

witch

```json
"minecraft:follow_range": {
    "value": 64
}
```

## game_event_movement_tracking

allay

```json
"minecraft:game_event_movement_tracking": {
    "emit_flap": true
}
```

bat

```json
"minecraft:game_event_movement_tracking": {
    "emit_flap": true
}
```

bee

```json
"minecraft:game_event_movement_tracking": {
    "emit_flap": true
}
```

chicken

```json
"minecraft:game_event_movement_tracking": {
    "emit_flap": true
}
```

ender_dragon

```json
"minecraft:game_event_movement_tracking": {
    "emit_flap": true
}
```

parrot

```json
"minecraft:game_event_movement_tracking": {
    "emit_flap": true
}
```

phantom

```json
"minecraft:game_event_movement_tracking": {
    "emit_flap": true
}
```

vex

```json
"minecraft:game_event_movement_tracking": {
    "emit_move": false,
    "emit_swim": false
}
```

## genetics

goat

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

## giveable

panda

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

## group_size

hoglin

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

## grows_crop

bee

```json
"minecraft:grows_crop": {
    "charges": 10,
    "chance": 0.03
}
```

## healable

cat

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

## health

allay

```json
"minecraft:health": {
    "value": 20
}
```

armor_stand

```json
"minecraft:health": {
    "value": 6,
    "max": 6
}
```

axolotl

```json
"minecraft:health": {
    "value": 14
}
```

bat

```json
"minecraft:health": {
    "value": 6,
    "max": 6
}
```

bee

```json
"minecraft:health": {
    "value": 10,
    "max": 10
}
```

blaze

```json
"minecraft:health": {
    "value": 20,
    "max": 20
}
```

cat

```json
"minecraft:health": {
    "value": 10,
    "max": 10
}
```

```json
"minecraft:health": {
    "value": 20,
    "max": 20
}
```

cave_spider

```json
"minecraft:health": {
    "value": 12,
    "max": 12
}
```

chicken

```json
"minecraft:health": {
    "value": 4,
    "max": 4
}
```

cow

```json
"minecraft:health": {
    "value": 10,
    "max": 10
}
```

creeper

```json
"minecraft:health": {
    "value": 20,
    "max": 20
}
```

dolphin

```json
"minecraft:health": {
    "value": 10,
    "max": 10
}
```

donkey

```json
"minecraft:health": {
    "value": {
        "range_min": 15,
        "range_max": 30
    }
}
```

drowned

```json
"minecraft:health": {
    "value": 20,
    "max": 20
}
```

elder_guardian

```json
"minecraft:health": {
    "value": 80,
    "max": 80
}
```

enderman

```json
"minecraft:health": {
    "value": 40,
    "max": 40
}
```

endermite

```json
"minecraft:health": {
    "value": 8,
    "max": 8
}
```

ender_crystal

```json
"minecraft:health": {
    "value": 1,
    "max": 1
}
```

ender_dragon

```json
"minecraft:health": {
    "value": 200,
    "max": 200
}
```

evocation_illager

```json
"minecraft:health": {
    "value": 24,
    "max": 24
}
```

cod

```json
"minecraft:health": {
    "value": 3,
    "max": 3
}
```

fox

```json
"minecraft:health": {
    "value": 20,
    "max": 20
}
```

frog

```json
"minecraft:health": {
    "value": 10
}
```

ghast

```json
"minecraft:health": {
    "value": 10,
    "max": 10
}
```

glow_squid

```json
"minecraft:health": {
    "value": 10,
    "max": 10
}
```

goat

```json
"minecraft:health": {
    "value": 10,
    "max": 10
}
```

guardian

```json
"minecraft:health": {
    "value": 30,
    "max": 30
}
```

hoglin

```json
"minecraft:health": {
    "value": 40,
    "max": 40
}
```

horse

```json
"minecraft:health": {
    "value": {
        "range_min": 15,
        "range_max": 30
    }
}
```

husk

```json
"minecraft:health": {
    "value": 20,
    "max": 20
}
```

iron_golem

```json
"minecraft:health": {
    "value": 100,
    "max": 100
}
```

llama

```json
"minecraft:health": {
    "value": {
        "range_min": 15,
        "range_max": 30
    }
}
```

magma_cube

```json
"minecraft:health": {
    "value": 16,
    "max": 16
}
```

```json
"minecraft:health": {
    "value": 4,
    "max": 4
}
```

```json
"minecraft:health": {
    "value": 1,
    "max": 1
}
```

mooshroom

```json
"minecraft:health": {
    "value": 10,
    "max": 10
}
```

mule

```json
"minecraft:health": {
    "value": {
        "range_min": 15,
        "range_max": 30
    }
}
```

ocelot

```json
"minecraft:health": {
    "value": 10,
    "max": 10
}
```

```json
"minecraft:health": {
    "value": 20,
    "max": 20
}
```

panda

```json
"minecraft:health": {
    "value": 20,
    "max": 20
}
```

```json
"minecraft:health": {
    "value": 10,
    "max": 10
}
```

parrot

```json
"minecraft:health": {
    "value": 6,
    "max": 6
}
```

phantom

```json
"minecraft:health": {
    "value": 20,
    "max": 20
}
```

pig

```json
"minecraft:health": {
    "value": 10,
    "max": 10
}
```

piglin

```json
"minecraft:health": {
    "value": 16,
    "max": 16
}
```

piglin_brute

```json
"minecraft:health": {
    "value": 50,
    "max": 50
}
```

pillager

```json
"minecraft:health": {
    "value": 24,
    "max": 24
}
```

polar_bear

```json
"minecraft:health": {
    "value": 30
}
```

pufferfish

```json
"minecraft:health": {
    "value": 3,
    "max": 3
}
```

rabbit

```json
"minecraft:health": {
    "value": 3,
    "max": 3
}
```

ravager

```json
"minecraft:health": {
    "max": 100,
    "value": 100
}
```

salmon

```json
"minecraft:health": {
    "value": 3,
    "max": 3
}
```

sheep

```json
"minecraft:health": {
    "value": 8,
    "max": 8
}
```

shulker

```json
"minecraft:health": {
    "value": 30,
    "max": 30
}
```

silverfish

```json
"minecraft:health": {
    "value": 8,
    "max": 8
}
```

skeleton

```json
"minecraft:health": {
    "value": 20,
    "max": 20
}
```

skeleton_horse

```json
"minecraft:health": {
    "value": 15,
    "max": 15
}
```

slime

```json
"minecraft:health": {
    "value": 16,
    "max": 16
}
```

```json
"minecraft:health": {
    "value": 4,
    "max": 4
}
```

```json
"minecraft:health": {
    "value": 1,
    "max": 1
}
```

snow_golem

```json
"minecraft:health": {
    "value": 4,
    "max": 4
}
```

spider

```json
"minecraft:health": {
    "value": 16,
    "max": 16
}
```

squid

```json
"minecraft:health": {
    "value": 10,
    "max": 10
}
```

stray

```json
"minecraft:health": {
    "value": 20,
    "max": 20
}
```

strider

```json
"minecraft:health": {
    "value": 20,
    "max": 20
}
```

tadpole

```json
"minecraft:health": {
    "value": 6
}
```

trader_llama

```json
"minecraft:health": {
    "value": {
        "range_min": 15,
        "range_max": 30
    }
}
```

tripod_camera

```json
"minecraft:health": {
    "value": 4,
    "max": 4
}
```

tropicalfish

```json
"minecraft:health": {
    "value": 3,
    "max": 3
}
```

turtle

```json
"minecraft:health": {
    "value": 30
}
```

vex

```json
"minecraft:health": {
    "value": 14,
    "max": 14
}
```

villager

```json
"minecraft:health": {
    "value": 20,
    "max": 20
}
```

villager_v2

```json
"minecraft:health": {
    "value": 20,
    "max": 20
}
```

vindicator

```json
"minecraft:health": {
    "value": 24,
    "max": 24
}
```

wandering_trader

```json
"minecraft:health": {
    "value": 20,
    "max": 20
}
```

warden

```json
"minecraft:health": {
    "value": 500,
    "max": 500
}
```

witch

```json
"minecraft:health": {
    "value": 26,
    "max": 26
}
```

wither

```json
"minecraft:health": {
    "value": 600,
    "max": 600
}
```

wither_skeleton

```json
"minecraft:health": {
    "value": 20,
    "max": 20
}
```

wolf

```json
"minecraft:health": {
    "value": 8,
    "max": 8
}
```

```json
"minecraft:health": {
    "value": 20,
    "max": 20
}
```

xp_orb

```json
"minecraft:health": {
    "value": 5,
    "max": 5
}
```

zoglin

```json
"minecraft:health": {
    "value": 40,
    "max": 40
}
```

zombie

```json
"minecraft:health": {
    "value": 20,
    "max": 20
}
```

zombie_horse

```json
"minecraft:health": {
    "value": 15,
    "max": 15
}
```

zombie_pigman

```json
"minecraft:health": {
    "value": 20,
    "max": 20
}
```

zombie_villager

```json
"minecraft:health": {
    "value": 20,
    "max": 20
}
```

zombie_villager_v2

```json
"minecraft:health": {
    "value": 20,
    "max": 20
}
```

## heartbeat

warden

```json
"minecraft:heartbeat": {
    "interval": "2.0 - math.clamp(query.anger_level / 80 * 1.5, 0, 1.5)"
}
```

## hide

villager_v2

```json
"minecraft:hide": {}
```

## home

bee

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

```json
"minecraft:home": {
    "restriction_radius": 16
}
```

guardian

```json
"minecraft:home": {
    "restriction_radius": 16
}
```

piglin_brute

```json
"minecraft:home": {}
```

turtle

```json
"minecraft:home": {}
```

wandering_trader

```json
"minecraft:home": {
    "restriction_radius": 16
}
```

## horse.jump_strength

donkey

```json
"minecraft:horse.jump_strength": {
    "value": 0.5
}
```

horse

```json
"minecraft:horse.jump_strength": {
    "value": {
        "range_min": 0.4,
        "range_max": 1.0
    }
}
```

mule

```json
"minecraft:horse.jump_strength": {
    "value": 0.5
}
```

skeleton_horse

```json
"minecraft:horse.jump_strength": {
    "value": {
        "range_min": 0.4,
        "range_max": 1.0
    }
}
```

zombie_horse

```json
"minecraft:horse.jump_strength": {
    "value": {
        "range_min": 0.4,
        "range_max": 1.0
    }
}
```

## hurt_on_condition

allay

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

boat

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

cat

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

cave_spider

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

chest_boat

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

chicken

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

cow

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

creeper

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

dolphin

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

donkey

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

drowned

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

elder_guardian

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

enderman

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

endermite

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

evocation_illager

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

cod

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

frog

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

glow_squid

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

goat

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

guardian

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

hoglin

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

horse

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

husk

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

iron_golem

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

llama

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

mooshroom

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

mule

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

ocelot

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

panda

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

parrot

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

phantom

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

pig

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

piglin

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

piglin_brute

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

pillager

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

player

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

polar_bear

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

pufferfish

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

rabbit

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

ravager

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

salmon

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

sheep

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

silverfish

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

skeleton

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

skeleton_horse

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

slime

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

snow_golem

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

spider

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

squid

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

stray

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

strider

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

tadpole

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

trader_llama

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

tripod_camera

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

tropicalfish

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

turtle

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

villager

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

villager_v2

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

vindicator

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

wandering_trader

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

witch

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

wolf

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

zombie

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

zombie_horse

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

zombie_villager

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

zombie_villager_v2

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

## input_ground_controlled

donkey

```json
"minecraft:input_ground_controlled": {}
```

horse

```json
"minecraft:input_ground_controlled": {}
```

mule

```json
"minecraft:input_ground_controlled": {}
```

skeleton_horse

```json
"minecraft:input_ground_controlled": {}
```

## inside_block_notifier

boat

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

## insomnia

player

```json
"minecraft:insomnia": {
    "days_until_insomnia": 3
}
```

## interact

allay

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

horse

```json
"minecraft:interact": {
    "interactions": [
        {
            "play_sounds": "armor.equip_generic",
            "on_interact": {
                "filters": {
                    "all_of": [
                        {
                            "none_of": [
                                {
                                    "test": "has_equipment",
                                    "subject": "self",
                                    "domain": "inventory",
                                    "value": "leather_horse_armor"
                                },
                                {
                                    "test": "has_equipment",
                                    "subject": "self",
                                    "domain": "inventory",
                                    "value": "iron_horse_armor"
                                },
                                {
                                    "test": "has_equipment",
                                    "subject": "self",
                                    "domain": "inventory",
                                    "value": "golden_horse_armor"
                                },
                                {
                                    "test": "has_equipment",
                                    "subject": "self",
                                    "domain": "inventory",
                                    "value": "diamond_horse_armor"
                                }
                            ]
                        },
                        {
                            "any_of": [
                                {
                                    "test": "has_equipment",
                                    "subject": "player",
                                    "domain": "hand",
                                    "value": "leather_horse_armor"
                                },
                                {
                                    "test": "has_equipment",
                                    "subject": "player",
                                    "domain": "hand",
                                    "value": "iron_horse_armor"
                                },
                                {
                                    "test": "has_equipment",
                                    "subject": "player",
                                    "domain": "hand",
                                    "value": "golden_horse_armor"
                                },
                                {
                                    "test": "has_equipment",
                                    "subject": "player",
                                    "domain": "hand",
                                    "value": "diamond_horse_armor"
                                }
                            ]
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
            "equip_item_slot": 1,
            "interact_text": "action.interact.equiphorsearmor"
        },
        {
            "play_sounds": "saddle",
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

iron_golem

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
                            "value": "iron_ingot"
                        },
                        {
                            "test": "is_missing_health",
                            "value": true
                        }
                    ]
                }
            },
            "use_item": true,
            "health_amount": 25,
            "play_sounds": "irongolem.repair",
            "interact_text": "action.interact.repair"
        }
    ]
}
```

llama

```json
"minecraft:interact": {
    "interactions": [
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
        },
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
                            "value": "carpet"
                        },
                        {
                            "test": "has_equipment",
                            "subject": "other",
                            "domain": "hand",
                            "value": "carpet"
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
            "interact_text": "action.interact.equipcarpet"
        }
    ]
}
```

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
                            "value": "carpet"
                        },
                        {
                            "test": "has_equipment",
                            "subject": "other",
                            "domain": "hand",
                            "value": "carpet"
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
            "interact_text": "action.interact.equipcarpet"
        }
    ]
}
```

mooshroom

```json
"minecraft:interact": {
    "interactions": [
        {
            "on_interact": {
                "filters": {
                    "all_of": [
                        {
                            "test": "has_equipment",
                            "subject": "other",
                            "domain": "hand",
                            "value": "bowl"
                        },
                        {
                            "test": "is_family",
                            "subject": "other",
                            "value": "player"
                        },
                        {
                            "test": "has_component",
                            "operator": "!=",
                            "value": "minecraft:transformation"
                        }
                    ]
                },
                "event": "minecraft:flowerless",
                "target": "self"
            },
            "add_items": {
                "table": "loot_tables/gameplay/entities/mooshroom_milking.json"
            },
            "use_item": true,
            "play_sounds": "milk_suspiciously",
            "interact_text": "action.interact.moostew"
        },
        {
            "on_interact": {
                "filters": {
                    "all_of": [
                        {
                            "test": "has_equipment",
                            "subject": "other",
                            "domain": "hand",
                            "value": "red_flower:2"
                        },
                        {
                            "test": "is_family",
                            "subject": "other",
                            "value": "player"
                        },
                        {
                            "test": "is_variant",
                            "subject": "self",
                            "operator": "==",
                            "value": 1
                        },
                        {
                            "test": "is_mark_variant",
                            "subject": "self",
                            "operator": "!=",
                            "value": 7
                        }
                    ]
                },
                "event": "minecraft:ate_allium",
                "target": "self"
            },
            "use_item": true,
            "play_sounds": "eat",
            "particle_on_start": {
                "particle_type": "smoke",
                "particle_y_offset": 0.25,
                "particle_offset_towards_interactor": true
            },
            "interact_text": "action.interact.feed"
        },
        {
            "on_interact": {
                "filters": {
                    "all_of": [
                        {
                            "test": "has_equipment",
                            "subject": "other",
                            "domain": "hand",
                            "value": "red_flower:3"
                        },
                        {
                            "test": "is_family",
                            "subject": "other",
                            "value": "player"
                        },
                        {
                            "test": "is_variant",
                            "subject": "self",
                            "operator": "==",
                            "value": 1
                        },
                        {
                            "test": "is_mark_variant",
                            "subject": "self",
                            "operator": "!=",
                            "value": 3
                        }
                    ]
                },
                "event": "minecraft:ate_bluet",
                "target": "self"
            },
            "use_item": true,
            "play_sounds": "eat",
            "particle_on_start": {
                "particle_type": "smoke",
                "particle_y_offset": 0.25,
                "particle_offset_towards_interactor": true
            },
            "interact_text": "action.interact.feed"
        },
        {
            "on_interact": {
                "filters": {
                    "all_of": [
                        {
                            "test": "has_equipment",
                            "subject": "other",
                            "domain": "hand",
                            "value": "red_flower:1"
                        },
                        {
                            "test": "is_family",
                            "subject": "other",
                            "value": "player"
                        },
                        {
                            "test": "is_variant",
                            "subject": "self",
                            "operator": "==",
                            "value": 1
                        },
                        {
                            "test": "is_mark_variant",
                            "subject": "self",
                            "operator": "!=",
                            "value": 6
                        }
                    ]
                },
                "event": "minecraft:ate_orchid",
                "target": "self"
            },
            "use_item": true,
            "play_sounds": "eat",
            "particle_on_start": {
                "particle_type": "smoke",
                "particle_y_offset": 0.25,
                "particle_offset_towards_interactor": true
            },
            "interact_text": "action.interact.feed"
        },
        {
            "on_interact": {
                "filters": {
                    "all_of": [
                        {
                            "test": "has_equipment",
                            "subject": "other",
                            "domain": "hand",
                            "value": "red_flower:9"
                        },
                        {
                            "test": "is_family",
                            "subject": "other",
                            "value": "player"
                        },
                        {
                            "test": "is_variant",
                            "subject": "self",
                            "operator": "==",
                            "value": 1
                        },
                        {
                            "test": "is_mark_variant",
                            "subject": "self",
                            "operator": "!=",
                            "value": 1
                        }
                    ]
                },
                "event": "minecraft:ate_cornflower",
                "target": "self"
            },
            "use_item": true,
            "play_sounds": "eat",
            "particle_on_start": {
                "particle_type": "smoke",
                "particle_y_offset": 0.25,
                "particle_offset_towards_interactor": true
            },
            "interact_text": "action.interact.feed"
        },
        {
            "on_interact": {
                "filters": {
                    "all_of": [
                        {
                            "test": "has_equipment",
                            "subject": "other",
                            "domain": "hand",
                            "value": "yellow_flower"
                        },
                        {
                            "test": "is_family",
                            "subject": "other",
                            "value": "player"
                        },
                        {
                            "test": "is_variant",
                            "subject": "self",
                            "operator": "==",
                            "value": 1
                        },
                        {
                            "test": "is_mark_variant",
                            "subject": "self",
                            "operator": "!=",
                            "value": 5
                        }
                    ]
                },
                "event": "minecraft:ate_dandelion",
                "target": "self"
            },
            "use_item": true,
            "play_sounds": "eat",
            "particle_on_start": {
                "particle_type": "smoke",
                "particle_y_offset": 0.25,
                "particle_offset_towards_interactor": true
            },
            "interact_text": "action.interact.feed"
        },
        {
            "on_interact": {
                "filters": {
                    "all_of": [
                        {
                            "test": "has_equipment",
                            "subject": "other",
                            "domain": "hand",
                            "value": "red_flower:10"
                        },
                        {
                            "test": "is_family",
                            "subject": "other",
                            "value": "player"
                        },
                        {
                            "test": "is_variant",
                            "subject": "self",
                            "operator": "==",
                            "value": 1
                        },
                        {
                            "test": "is_mark_variant",
                            "subject": "self",
                            "operator": "!=",
                            "value": 4
                        }
                    ]
                },
                "event": "minecraft:ate_lily",
                "target": "self"
            },
            "use_item": true,
            "play_sounds": "eat",
            "particle_on_start": {
                "particle_type": "smoke",
                "particle_y_offset": 0.25,
                "particle_offset_towards_interactor": true
            },
            "interact_text": "action.interact.feed"
        },
        {
            "on_interact": {
                "filters": {
                    "all_of": [
                        {
                            "test": "has_equipment",
                            "subject": "other",
                            "domain": "hand",
                            "value": "red_flower:8"
                        },
                        {
                            "test": "is_family",
                            "subject": "other",
                            "value": "player"
                        },
                        {
                            "test": "is_variant",
                            "subject": "self",
                            "operator": "==",
                            "value": 1
                        },
                        {
                            "test": "is_mark_variant",
                            "subject": "self",
                            "operator": "!=",
                            "value": 8
                        }
                    ]
                },
                "event": "minecraft:ate_daisy",
                "target": "self"
            },
            "use_item": true,
            "play_sounds": "eat",
            "particle_on_start": {
                "particle_type": "smoke",
                "particle_y_offset": 0.25,
                "particle_offset_towards_interactor": true
            },
            "interact_text": "action.interact.feed"
        },
        {
            "on_interact": {
                "filters": {
                    "all_of": [
                        {
                            "test": "has_equipment",
                            "subject": "other",
                            "domain": "hand",
                            "value": "red_flower:0"
                        },
                        {
                            "test": "is_family",
                            "subject": "other",
                            "value": "player"
                        },
                        {
                            "test": "is_variant",
                            "subject": "self",
                            "operator": "==",
                            "value": 1
                        },
                        {
                            "test": "is_mark_variant",
                            "subject": "self",
                            "operator": "!=",
                            "value": 0
                        }
                    ]
                },
                "event": "minecraft:ate_poppy",
                "target": "self"
            },
            "use_item": true,
            "play_sounds": "eat",
            "particle_on_start": {
                "particle_type": "smoke",
                "particle_y_offset": 0.25,
                "particle_offset_towards_interactor": true
            },
            "interact_text": "action.interact.feed"
        },
        {
            "on_interact": {
                "filters": {
                    "any_of": [
                        {
                            "test": "has_equipment",
                            "subject": "other",
                            "domain": "hand",
                            "value": "red_flower:4"
                        },
                        {
                            "test": "has_equipment",
                            "subject": "other",
                            "domain": "hand",
                            "value": "red_flower:5"
                        },
                        {
                            "test": "has_equipment",
                            "subject": "other",
                            "domain": "hand",
                            "value": "red_flower:6"
                        },
                        {
                            "test": "has_equipment",
                            "subject": "other",
                            "domain": "hand",
                            "value": "red_flower:7"
                        }
                    ],
                    "all_of": [
                        {
                            "test": "is_family",
                            "subject": "other",
                            "value": "player"
                        },
                        {
                            "test": "is_variant",
                            "subject": "self",
                            "operator": "==",
                            "value": 1
                        },
                        {
                            "test": "is_mark_variant",
                            "subject": "self",
                            "operator": "!=",
                            "value": 2
                        }
                    ]
                },
                "event": "minecraft:ate_tulip",
                "target": "self"
            },
            "use_item": true,
            "play_sounds": "eat",
            "particle_on_start": {
                "particle_type": "smoke",
                "particle_y_offset": 0.25,
                "particle_offset_towards_interactor": true
            },
            "interact_text": "action.interact.feed"
        },
        {
            "on_interact": {
                "filters": {
                    "all_of": [
                        {
                            "test": "has_equipment",
                            "subject": "other",
                            "domain": "hand",
                            "value": "wither_rose"
                        },
                        {
                            "test": "is_family",
                            "subject": "other",
                            "value": "player"
                        },
                        {
                            "test": "is_variant",
                            "subject": "self",
                            "operator": "==",
                            "value": 1
                        },
                        {
                            "test": "is_mark_variant",
                            "subject": "self",
                            "operator": "!=",
                            "value": 9
                        }
                    ]
                },
                "event": "minecraft:ate_rose",
                "target": "self"
            },
            "use_item": true,
            "play_sounds": "eat",
            "particle_on_start": {
                "particle_type": "smoke",
                "particle_y_offset": 0.25,
                "particle_offset_towards_interactor": true
            },
            "interact_text": "action.interact.feed"
        },
        {
            "on_interact": {
                "filters": {
                    "all_of": [
                        {
                            "test": "has_equipment",
                            "subject": "other",
                            "domain": "hand",
                            "value": "shears"
                        },
                        {
                            "test": "has_component",
                            "operator": "!=",
                            "value": "minecraft:transformation"
                        },
                        {
                            "test": "is_variant",
                            "subject": "self",
                            "operator": "==",
                            "value": 0
                        }
                    ]
                },
                "event": "become_cow",
                "target": "self"
            },
            "use_item": false,
            "hurt_item": 1,
            "play_sounds": "shear",
            "spawn_items": {
                "table": "loot_tables/entities/mooshroom_shear.json"
            },
            "particle_on_start": {
                "particle_type": "largeexplode",
                "particle_y_offset": 0.25,
                "particle_offset_towards_interactor": true
            },
            "interact_text": "action.interact.mooshear",
            "vibration": "shear"
        },
        {
            "on_interact": {
                "filters": {
                    "all_of": [
                        {
                            "test": "has_equipment",
                            "subject": "other",
                            "domain": "hand",
                            "value": "shears"
                        },
                        {
                            "test": "has_component",
                            "operator": "!=",
                            "value": "minecraft:transformation"
                        },
                        {
                            "test": "is_variant",
                            "subject": "self",
                            "operator": "==",
                            "value": 1
                        }
                    ]
                },
                "event": "become_cow",
                "target": "self"
            },
            "use_item": false,
            "hurt_item": 1,
            "play_sounds": "shear",
            "spawn_items": {
                "table": "loot_tables/entities/brown_mooshroom_shear.json"
            },
            "particle_on_start": {
                "particle_type": "largeexplode",
                "particle_y_offset": 0.25,
                "particle_offset_towards_interactor": true
            },
            "interact_text": "action.interact.mooshear",
            "vibration": "shear"
        },
        {
            "on_interact": {
                "filters": {
                    "all_of": [
                        {
                            "test": "has_equipment",
                            "subject": "other",
                            "domain": "hand",
                            "value": "bucket:0"
                        },
                        {
                            "test": "is_family",
                            "subject": "other",
                            "value": "player"
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

mule

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
                            "subject": "other",
                            "domain": "hand",
                            "value": "chest"
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
                "event": "minecraft:on_chest",
                "target": "self"
            },
            "use_item": true,
            "interact_text": "action.interact.attachchest"
        },
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

pig

```json
"minecraft:interact": {
    "interactions": [
        {
            "on_interact": {
                "filters": {
                    "test": "has_equipment",
                    "subject": "other",
                    "domain": "hand",
                    "value": "saddle"
                },
                "event": "minecraft:on_saddled"
            },
            "use_item": true,
            "play_sounds": "saddle",
            "interact_text": "action.interact.saddle"
        }
    ]
}
```

piglin

```json
"minecraft:interact": {
    "interactions": [
        {
            "on_interact": {
                "filters": {
                    "all_of": [
                        {
                            "test": "has_equipment",
                            "subject": "other",
                            "domain": "hand",
                            "value": "gold_ingot"
                        },
                        {
                            "test": "is_family",
                            "subject": "other",
                            "value": "player"
                        },
                        {
                            "test": "has_component",
                            "subject": "self",
                            "operator": "!=",
                            "value": "minecraft:is_baby"
                        }
                    ]
                }
            },
            "barter": true,
            "admire": true,
            "use_item": true,
            "cooldown_after_being_attacked": 20,
            "interact_text": "action.interact.barter"
        }
    ]
}
```

sheep

```json
"minecraft:interact": {
    "interactions": [
        {
            "cooldown": 2.5,
            "use_item": false,
            "hurt_item": 1,
            "spawn_items": {
                "table": "loot_tables/entities/sheep_shear.json"
            },
            "play_sounds": "shear",
            "interact_text": "action.interact.shear",
            "vibration": "shear",
            "on_interact": {
                "filters": {
                    "all_of": [
                        {
                            "test": "has_equipment",
                            "subject": "other",
                            "domain": "hand",
                            "value": "shears"
                        },
                        {
                            "test": "is_family",
                            "subject": "other",
                            "value": "player"
                        },
                        {
                            "test": "has_component",
                            "operator": "!=",
                            "value": "minecraft:is_baby"
                        },
                        {
                            "test": "has_component",
                            "value": "minecraft:is_dyeable"
                        }
                    ]
                },
                "event": "minecraft:on_sheared",
                "target": "self"
            }
        }
    ]
}
```

shulker

```json
"minecraft:interact": {
    "interactions": [
        {
            "on_interact": {
                "filters": {
                    "all_of": [
                        {
                            "any_of": [
                                {
                                    "test": "has_equipment",
                                    "subject": "other",
                                    "domain": "hand",
                                    "value": "dye:0"
                                },
                                {
                                    "test": "has_equipment",
                                    "subject": "other",
                                    "domain": "hand",
                                    "value": "dye:16"
                                }
                            ]
                        },
                        {
                            "test": "is_family",
                            "subject": "other",
                            "value": "player"
                        },
                        {
                            "test": "has_ability",
                            "subject": "other",
                            "value": "instabuild"
                        }
                    ]
                },
                "event": "minecraft:turn_black"
            },
            "use_item": true
        },
        {
            "on_interact": {
                "filters": {
                    "all_of": [
                        {
                            "test": "has_equipment",
                            "subject": "other",
                            "domain": "hand",
                            "value": "dye:8"
                        },
                        {
                            "test": "is_family",
                            "subject": "other",
                            "value": "player"
                        },
                        {
                            "test": "has_ability",
                            "subject": "other",
                            "value": "instabuild"
                        }
                    ]
                },
                "event": "minecraft:turn_gray"
            },
            "use_item": true
        },
        {
            "on_interact": {
                "filters": {
                    "all_of": [
                        {
                            "test": "has_equipment",
                            "subject": "other",
                            "domain": "hand",
                            "value": "dye:7"
                        },
                        {
                            "test": "is_family",
                            "subject": "other",
                            "value": "player"
                        },
                        {
                            "test": "has_ability",
                            "subject": "other",
                            "value": "instabuild"
                        }
                    ]
                },
                "event": "minecraft:turn_silver"
            },
            "use_item": true
        },
        {
            "on_interact": {
                "filters": {
                    "all_of": [
                        {
                            "any_of": [
                                {
                                    "test": "has_equipment",
                                    "subject": "other",
                                    "domain": "hand",
                                    "value": "dye:15"
                                },
                                {
                                    "test": "has_equipment",
                                    "subject": "other",
                                    "domain": "hand",
                                    "value": "dye:19"
                                }
                            ]
                        },
                        {
                            "test": "is_family",
                            "subject": "other",
                            "value": "player"
                        },
                        {
                            "test": "has_ability",
                            "subject": "other",
                            "value": "instabuild"
                        }
                    ]
                },
                "event": "minecraft:turn_white"
            },
            "use_item": true
        },
        {
            "on_interact": {
                "filters": {
                    "all_of": [
                        {
                            "test": "has_equipment",
                            "subject": "other",
                            "domain": "hand",
                            "value": "dye:12"
                        },
                        {
                            "test": "is_family",
                            "subject": "other",
                            "value": "player"
                        },
                        {
                            "test": "has_ability",
                            "subject": "other",
                            "value": "instabuild"
                        }
                    ]
                },
                "event": "minecraft:turn_light_blue"
            },
            "use_item": true
        },
        {
            "on_interact": {
                "filters": {
                    "all_of": [
                        {
                            "test": "has_equipment",
                            "subject": "other",
                            "domain": "hand",
                            "value": "dye:14"
                        },
                        {
                            "test": "is_family",
                            "subject": "other",
                            "value": "player"
                        },
                        {
                            "test": "has_ability",
                            "subject": "other",
                            "value": "instabuild"
                        }
                    ]
                },
                "event": "minecraft:turn_orange"
            },
            "use_item": true
        },
        {
            "on_interact": {
                "filters": {
                    "all_of": [
                        {
                            "test": "has_equipment",
                            "subject": "other",
                            "domain": "hand",
                            "value": "dye:1"
                        },
                        {
                            "test": "is_family",
                            "subject": "other",
                            "value": "player"
                        },
                        {
                            "test": "has_ability",
                            "subject": "other",
                            "value": "instabuild"
                        }
                    ]
                },
                "event": "minecraft:turn_red"
            },
            "use_item": true
        },
        {
            "on_interact": {
                "filters": {
                    "all_of": [
                        {
                            "any_of": [
                                {
                                    "test": "has_equipment",
                                    "subject": "other",
                                    "domain": "hand",
                                    "value": "dye:4"
                                },
                                {
                                    "test": "has_equipment",
                                    "subject": "other",
                                    "domain": "hand",
                                    "value": "dye:18"
                                }
                            ]
                        },
                        {
                            "test": "is_family",
                            "subject": "other",
                            "value": "player"
                        },
                        {
                            "test": "has_ability",
                            "subject": "other",
                            "value": "instabuild"
                        }
                    ]
                },
                "event": "minecraft:turn_blue"
            },
            "use_item": true
        },
        {
            "on_interact": {
                "filters": {
                    "all_of": [
                        {
                            "test": "has_equipment",
                            "subject": "other",
                            "domain": "hand",
                            "value": "dye:5"
                        },
                        {
                            "test": "is_family",
                            "subject": "other",
                            "value": "player"
                        },
                        {
                            "test": "has_ability",
                            "subject": "other",
                            "value": "instabuild"
                        }
                    ]
                },
                "event": "minecraft:turn_purple"
            },
            "use_item": true
        },
        {
            "on_interact": {
                "filters": {
                    "all_of": [
                        {
                            "test": "has_equipment",
                            "subject": "other",
                            "domain": "hand",
                            "value": "dye:13"
                        },
                        {
                            "test": "is_family",
                            "subject": "other",
                            "value": "player"
                        },
                        {
                            "test": "has_ability",
                            "subject": "other",
                            "value": "instabuild"
                        }
                    ]
                },
                "event": "minecraft:turn_magenta"
            },
            "use_item": true
        },
        {
            "on_interact": {
                "filters": {
                    "all_of": [
                        {
                            "test": "has_equipment",
                            "subject": "other",
                            "domain": "hand",
                            "value": "dye:9"
                        },
                        {
                            "test": "is_family",
                            "subject": "other",
                            "value": "player"
                        },
                        {
                            "test": "has_ability",
                            "subject": "other",
                            "value": "instabuild"
                        }
                    ]
                },
                "event": "minecraft:turn_pink"
            },
            "use_item": true
        },
        {
            "on_interact": {
                "filters": {
                    "all_of": [
                        {
                            "any_of": [
                                {
                                    "test": "has_equipment",
                                    "subject": "other",
                                    "domain": "hand",
                                    "value": "dye:3"
                                },
                                {
                                    "test": "has_equipment",
                                    "subject": "other",
                                    "domain": "hand",
                                    "value": "dye:17"
                                }
                            ]
                        },
                        {
                            "test": "is_family",
                            "subject": "other",
                            "value": "player"
                        },
                        {
                            "test": "has_ability",
                            "subject": "other",
                            "value": "instabuild"
                        }
                    ]
                },
                "event": "minecraft:turn_brown"
            },
            "use_item": true
        },
        {
            "on_interact": {
                "filters": {
                    "all_of": [
                        {
                            "test": "has_equipment",
                            "subject": "other",
                            "domain": "hand",
                            "value": "dye:11"
                        },
                        {
                            "test": "is_family",
                            "subject": "other",
                            "value": "player"
                        },
                        {
                            "test": "has_ability",
                            "subject": "other",
                            "value": "instabuild"
                        }
                    ]
                },
                "event": "minecraft:turn_yellow"
            },
            "use_item": true
        },
        {
            "on_interact": {
                "filters": {
                    "all_of": [
                        {
                            "test": "has_equipment",
                            "subject": "other",
                            "domain": "hand",
                            "value": "dye:10"
                        },
                        {
                            "test": "is_family",
                            "subject": "other",
                            "value": "player"
                        },
                        {
                            "test": "has_ability",
                            "subject": "other",
                            "value": "instabuild"
                        }
                    ]
                },
                "event": "minecraft:turn_lime"
            },
            "use_item": true
        },
        {
            "on_interact": {
                "filters": {
                    "all_of": [
                        {
                            "test": "has_equipment",
                            "subject": "other",
                            "domain": "hand",
                            "value": "dye:2"
                        },
                        {
                            "test": "is_family",
                            "subject": "other",
                            "value": "player"
                        },
                        {
                            "test": "has_ability",
                            "subject": "other",
                            "value": "instabuild"
                        }
                    ]
                },
                "event": "minecraft:turn_green"
            },
            "use_item": true
        },
        {
            "on_interact": {
                "filters": {
                    "all_of": [
                        {
                            "test": "has_equipment",
                            "subject": "other",
                            "domain": "hand",
                            "value": "dye:6"
                        },
                        {
                            "test": "is_family",
                            "subject": "other",
                            "value": "player"
                        },
                        {
                            "test": "has_ability",
                            "subject": "other",
                            "value": "instabuild"
                        }
                    ]
                },
                "event": "minecraft:turn_cyan"
            },
            "use_item": true
        }
    ]
}
```

snow_golem

```json
"minecraft:interact": {
    "interactions": [
        {
            "cooldown": 2.5,
            "use_item": false,
            "hurt_item": 1,
            "spawn_items": {
                "table": "loot_tables/entities/snow_golem_shear.json"
            },
            "play_sounds": "shear",
            "interact_text": "action.interact.shear",
            "vibration": "shear",
            "on_interact": {
                "filters": {
                    "all_of": [
                        {
                            "test": "has_equipment",
                            "subject": "other",
                            "domain": "hand",
                            "value": "shears"
                        },
                        {
                            "test": "is_family",
                            "subject": "other",
                            "value": "player"
                        },
                        {
                            "test": "has_component",
                            "operator": "!=",
                            "value": "minecraft:is_sheared"
                        }
                    ]
                },
                "event": "minecraft:on_sheared",
                "target": "self"
            }
        }
    ]
}
```

strider

```json
"minecraft:interact": {
    "interactions": [
        {
            "on_interact": {
                "filters": {
                    "test": "has_equipment",
                    "subject": "other",
                    "domain": "hand",
                    "value": "saddle"
                },
                "event": "minecraft:on_saddled"
            },
            "use_item": true,
            "play_sounds": "saddle",
            "interact_text": "action.interact.saddle"
        }
    ]
}
```

tnt_minecart

```json
"minecraft:interact": {
    "interactions": [
        {
            "on_interact": {
                "filters": {
                    "any_of": [
                        {
                            "test": "has_equipment",
                            "subject": "other",
                            "domain": "hand",
                            "value": "fireball:0"
                        },
                        {
                            "test": "has_equipment",
                            "subject": "other",
                            "domain": "hand",
                            "value": "flint_and_steel"
                        }
                    ],
                    "all_of": [
                        {
                            "test": "is_family",
                            "subject": "other",
                            "value": "player"
                        },
                        {
                            "test": "is_game_rule",
                            "domain": "tntexplodes",
                            "operator": "==",
                            "value": true
                        }
                    ]
                },
                "event": "minecraft:on_prime",
                "target": "self"
            },
            "swing": true,
            "play_sounds": "ignite",
            "interact_text": "action.interact.creeper"
        },
        {
            "on_interact": {
                "filters": {
                    "any_of": [
                        {
                            "test": "has_component",
                            "subject": "other",
                            "value": "fire_aspect"
                        }
                    ],
                    "all_of": [
                        {
                            "test": "is_game_rule",
                            "domain": "tntexplodes",
                            "operator": "==",
                            "value": true
                        }
                    ]
                },
                "event": "minecraft:on_prime",
                "target": "self"
            },
            "swing": true,
            "interact_text": "action.interact.creeper"
        }
    ]
}
```

trader_llama

```json
"minecraft:interact": {
    "interactions": [
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

zombie_villager

```json
"minecraft:interact": {
    "interactions": {
        "on_interact": {
            "filters": {
                "all_of": [
                    {
                        "test": "has_equipment",
                        "domain": "hand",
                        "subject": "other",
                        "value": "golden_apple"
                    },
                    {
                        "test": "has_component",
                        "subject": "self",
                        "value": "minecraft:effect.weakness"
                    }
                ]
            },
            "event": "villager_converted",
            "target": "self"
        },
        "use_item": true,
        "interact_text": "action.interact.cure"
    }
}
```

zombie_villager_v2

```json
"minecraft:interact": {
    "interactions": {
        "on_interact": {
            "filters": {
                "all_of": [
                    {
                        "test": "has_equipment",
                        "domain": "hand",
                        "subject": "other",
                        "value": "golden_apple"
                    },
                    {
                        "test": "has_component",
                        "subject": "self",
                        "value": "minecraft:effect.weakness"
                    }
                ]
            },
            "event": "villager_converted",
            "target": "self"
        },
        "use_item": true,
        "interact_text": "action.interact.cure"
    }
}
```

## inventory

allay

```json
"minecraft:inventory": {
    "inventory_size": 1
}
```

chest_boat

```json
"minecraft:inventory": {
    "container_type": "chest_boat",
    "inventory_size": 27,
    "can_be_siphoned_from": true
}
```

chest_minecart

```json
"minecraft:inventory": {
    "container_type": "minecart_chest",
    "inventory_size": 27,
    "can_be_siphoned_from": true
}
```

command_block_minecart

```json
"minecraft:inventory": {}
```

donkey

```json
"minecraft:inventory": {
    "inventory_size": 16,
    "container_type": "horse"
}
```

hopper_minecart

```json
"minecraft:inventory": {
    "container_type": "minecart_hopper",
    "inventory_size": 5,
    "can_be_siphoned_from": true
}
```

horse

```json
"minecraft:inventory": {
    "inventory_size": 2,
    "container_type": "horse"
}
```

llama

```json
"minecraft:inventory": {
    "inventory_size": 16,
    "container_type": "horse",
    "additional_slots_per_strength": 3
}
```

mule

```json
"minecraft:inventory": {
    "inventory_size": 16,
    "container_type": "horse"
}
```

panda

```json
"minecraft:inventory": {
    "inventory_size": 1,
    "private": true
}
```

piglin

```json
"minecraft:inventory": {
    "inventory_size": 8
}
```

trader_llama

```json
"minecraft:inventory": {
    "inventory_size": 16,
    "container_type": "horse",
    "additional_slots_per_strength": 3
}
```

villager

```json
"minecraft:inventory": {
    "inventory_size": 8,
    "private": true
}
```

villager_v2

```json
"minecraft:inventory": {
    "inventory_size": 8,
    "private": true
}
```

## is_baby

axolotl

```json
"minecraft:is_baby": {}
```

bee

```json
"minecraft:is_baby": {}
```

cat

```json
"minecraft:is_baby": {}
```

chicken

```json
"minecraft:is_baby": {}
```

cow

```json
"minecraft:is_baby": {}
```

dolphin

```json
"minecraft:is_baby": {}
```

donkey

```json
"minecraft:is_baby": {}
```

drowned

```json
"minecraft:is_baby": {}
```

fox

```json
"minecraft:is_baby": {}
```

glow_squid

```json
"minecraft:is_baby": {}
```

goat

```json
"minecraft:is_baby": {}
```

hoglin

```json
"minecraft:is_baby": {}
```

horse

```json
"minecraft:is_baby": {}
```

husk

```json
"minecraft:is_baby": {}
```

llama

```json
"minecraft:is_baby": {}
```

mooshroom

```json
"minecraft:is_baby": {}
```

mule

```json
"minecraft:is_baby": {}
```

ocelot

```json
"minecraft:is_baby": {}
```

panda

```json
"minecraft:is_baby": {}
```

pig

```json
"minecraft:is_baby": {}
```

piglin

```json
"minecraft:is_baby": {}
```

polar_bear

```json
"minecraft:is_baby": {}
```

rabbit

```json
"minecraft:is_baby": {}
```

sheep

```json
"minecraft:is_baby": {}
```

skeleton_horse

```json
"minecraft:is_baby": {}
```

squid

```json
"minecraft:is_baby": {}
```

strider

```json
"minecraft:is_baby": {}
```

tadpole

```json
"minecraft:is_baby": {}
```

trader_llama

```json
"minecraft:is_baby": {}
```

turtle

```json
"minecraft:is_baby": {}
```

villager

```json
"minecraft:is_baby": {}
```

villager_v2

```json
"minecraft:is_baby": {}
```

wolf

```json
"minecraft:is_baby": {}
```

zoglin

```json
"minecraft:is_baby": {}
```

zombie

```json
"minecraft:is_baby": {}
```

zombie_horse

```json
"minecraft:is_baby": {}
```

zombie_pigman

```json
"minecraft:is_baby": {}
```

zombie_villager

```json
"minecraft:is_baby": {}
```

zombie_villager_v2

```json
"minecraft:is_baby": {}
```

## is_charged

creeper

```json
"minecraft:is_charged": {}
```

## is_chested

donkey

```json
"minecraft:is_chested": {}
```

llama

```json
"minecraft:is_chested": {}
```

mule

```json
"minecraft:is_chested": {}
```

trader_llama

```json
"minecraft:is_chested": {}
```

## is_dyeable

cat

```json
"minecraft:is_dyeable": {
    "interact_text": "action.interact.dye"
}
```

sheep

```json
"minecraft:is_dyeable": {
    "interact_text": "action.interact.dye"
}
```

wolf

```json
"minecraft:is_dyeable": {
    "interact_text": "action.interact.dye"
}
```

## is_hidden_when_invisible

allay

```json
"minecraft:is_hidden_when_invisible": {}
```

axolotl

```json
"minecraft:is_hidden_when_invisible": {}
```

bat

```json
"minecraft:is_hidden_when_invisible": {}
```

bee

```json
"minecraft:is_hidden_when_invisible": {}
```

blaze

```json
"minecraft:is_hidden_when_invisible": {}
```

cat

```json
"minecraft:is_hidden_when_invisible": {}
```

cave_spider

```json
"minecraft:is_hidden_when_invisible": {}
```

chicken

```json
"minecraft:is_hidden_when_invisible": {}
```

cow

```json
"minecraft:is_hidden_when_invisible": {}
```

creeper

```json
"minecraft:is_hidden_when_invisible": {}
```

dolphin

```json
"minecraft:is_hidden_when_invisible": {}
```

donkey

```json
"minecraft:is_hidden_when_invisible": {}
```

elder_guardian

```json
"minecraft:is_hidden_when_invisible": {}
```

enderman

```json
"minecraft:is_hidden_when_invisible": {}
```

endermite

```json
"minecraft:is_hidden_when_invisible": {}
```

ender_dragon

```json
"minecraft:is_hidden_when_invisible": {}
```

evocation_illager

```json
"minecraft:is_hidden_when_invisible": {}
```

cod

```json
"minecraft:is_hidden_when_invisible": {}
```

fox

```json
"minecraft:is_hidden_when_invisible": {}
```

frog

```json
"minecraft:is_hidden_when_invisible": {}
```

ghast

```json
"minecraft:is_hidden_when_invisible": {}
```

glow_squid

```json
"minecraft:is_hidden_when_invisible": {}
```

goat

```json
"minecraft:is_hidden_when_invisible": {}
```

guardian

```json
"minecraft:is_hidden_when_invisible": {}
```

hoglin

```json
"minecraft:is_hidden_when_invisible": {}
```

horse

```json
"minecraft:is_hidden_when_invisible": {}
```

husk

```json
"minecraft:is_hidden_when_invisible": {}
```

iron_golem

```json
"minecraft:is_hidden_when_invisible": {}
```

llama

```json
"minecraft:is_hidden_when_invisible": {}
```

magma_cube

```json
"minecraft:is_hidden_when_invisible": {}
```

mooshroom

```json
"minecraft:is_hidden_when_invisible": {}
```

mule

```json
"minecraft:is_hidden_when_invisible": {}
```

ocelot

```json
"minecraft:is_hidden_when_invisible": {}
```

panda

```json
"minecraft:is_hidden_when_invisible": {}
```

parrot

```json
"minecraft:is_hidden_when_invisible": {}
```

phantom

```json
"minecraft:is_hidden_when_invisible": {}
```

pig

```json
"minecraft:is_hidden_when_invisible": {}
```

piglin

```json
"minecraft:is_hidden_when_invisible": {}
```

piglin_brute

```json
"minecraft:is_hidden_when_invisible": {}
```

pillager

```json
"minecraft:is_hidden_when_invisible": {}
```

player

```json
"minecraft:is_hidden_when_invisible": {}
```

polar_bear

```json
"minecraft:is_hidden_when_invisible": {}
```

pufferfish

```json
"minecraft:is_hidden_when_invisible": {}
```

rabbit

```json
"minecraft:is_hidden_when_invisible": {}
```

ravager

```json
"minecraft:is_hidden_when_invisible": {}
```

salmon

```json
"minecraft:is_hidden_when_invisible": {}
```

sheep

```json
"minecraft:is_hidden_when_invisible": {}
```

shulker

```json
"minecraft:is_hidden_when_invisible": {}
```

silverfish

```json
"minecraft:is_hidden_when_invisible": {}
```

skeleton

```json
"minecraft:is_hidden_when_invisible": {}
```

skeleton_horse

```json
"minecraft:is_hidden_when_invisible": {}
```

slime

```json
"minecraft:is_hidden_when_invisible": {}
```

snow_golem

```json
"minecraft:is_hidden_when_invisible": {}
```

spider

```json
"minecraft:is_hidden_when_invisible": {}
```

squid

```json
"minecraft:is_hidden_when_invisible": {}
```

stray

```json
"minecraft:is_hidden_when_invisible": {}
```

strider

```json
"minecraft:is_hidden_when_invisible": {}
```

tadpole

```json
"minecraft:is_hidden_when_invisible": {}
```

trader_llama

```json
"minecraft:is_hidden_when_invisible": {}
```

tropicalfish

```json
"minecraft:is_hidden_when_invisible": {}
```

turtle

```json
"minecraft:is_hidden_when_invisible": {}
```

vex

```json
"minecraft:is_hidden_when_invisible": {}
```

villager

```json
"minecraft:is_hidden_when_invisible": {}
```

villager_v2

```json
"minecraft:is_hidden_when_invisible": {}
```

vindicator

```json
"minecraft:is_hidden_when_invisible": {}
```

wandering_trader

```json
"minecraft:is_hidden_when_invisible": {}
```

warden

```json
"minecraft:is_hidden_when_invisible": {}
```

witch

```json
"minecraft:is_hidden_when_invisible": {}
```

wither

```json
"minecraft:is_hidden_when_invisible": {}
```

wither_skeleton

```json
"minecraft:is_hidden_when_invisible": {}
```

wolf

```json
"minecraft:is_hidden_when_invisible": {}
```

zoglin

```json
"minecraft:is_hidden_when_invisible": {}
```

zombie

```json
"minecraft:is_hidden_when_invisible": {}
```

zombie_horse

```json
"minecraft:is_hidden_when_invisible": {}
```

zombie_pigman

```json
"minecraft:is_hidden_when_invisible": {}
```

zombie_villager

```json
"minecraft:is_hidden_when_invisible": {}
```

zombie_villager_v2

```json
"minecraft:is_hidden_when_invisible": {}
```

## is_ignited

tnt_minecart

```json
"minecraft:is_ignited": {}
```

```json
"minecraft:is_ignited": {}
```

## is_illager_captain

pillager

```json
"minecraft:is_illager_captain": {}
```

```json
"minecraft:is_illager_captain": {}
```

vindicator

```json
"minecraft:is_illager_captain": {}
```

```json
"minecraft:is_illager_captain": {}
```

## is_saddled

donkey

```json
"minecraft:is_saddled": {}
```

horse

```json
"minecraft:is_saddled": {}
```

mule

```json
"minecraft:is_saddled": {}
```

pig

```json
"minecraft:is_saddled": {}
```

strider

```json
"minecraft:is_saddled": {}
```

## is_shaking

hoglin

```json
"minecraft:is_shaking": {}
```

husk

```json
"minecraft:is_shaking": {}
```

```json
"minecraft:is_shaking": {}
```

piglin

```json
"minecraft:is_shaking": {}
```

piglin_brute

```json
"minecraft:is_shaking": {}
```

skeleton

```json
"minecraft:is_shaking": {}
```

strider

```json
"minecraft:is_shaking": {}
```

zombie

```json
"minecraft:is_shaking": {}
```

```json
"minecraft:is_shaking": {}
```

zombie_villager

```json
"minecraft:is_shaking": {}
```

zombie_villager_v2

```json
"minecraft:is_shaking": {}
```

## is_sheared

sheep

```json
"minecraft:is_sheared": {}
```

snow_golem

```json
"minecraft:is_sheared": {}
```

## is_stackable

boat

```json
"minecraft:is_stackable": {}
```

chest_boat

```json
"minecraft:is_stackable": {}
```

chest_minecart

```json
"minecraft:is_stackable": {
    "value": true
}
```

hopper_minecart

```json
"minecraft:is_stackable": {}
```

minecart

```json
"minecraft:is_stackable": {}
```

tnt_minecart

```json
"minecraft:is_stackable": {}
```

## is_stunned

ravager

```json
"minecraft:is_stunned": {}
```

## is_tamed

cat

```json
"minecraft:is_tamed": {}
```

donkey

```json
"minecraft:is_tamed": {}
```

horse

```json
"minecraft:is_tamed": {}
```

llama

```json
"minecraft:is_tamed": {}
```

mule

```json
"minecraft:is_tamed": {}
```

ocelot

```json
"minecraft:is_tamed": {}
```

parrot

```json
"minecraft:is_tamed": {}
```

skeleton_horse

```json
"minecraft:is_tamed": {}
```

trader_llama

```json
"minecraft:is_tamed": {}
```

wolf

```json
"minecraft:is_tamed": {}
```

zombie_horse

```json
"minecraft:is_tamed": {}
```

## item_controllable

pig

```json
"minecraft:item_controllable": {
    "control_items": "carrotOnAStick"
}
```

strider

```json
"minecraft:item_controllable": {
    "control_items": "warped_fungus_on_a_stick"
}
```

## item_hopper

hopper_minecart

```json
"minecraft:item_hopper": {}
```

## jump.dynamic

rabbit

```json
"minecraft:jump.dynamic": {}
```

## jump.static

allay

```json
"minecraft:jump.static": {}
```

axolotl

```json
"minecraft:jump.static": {}
```

bat

```json
"minecraft:jump.static": {}
```

bee

```json
"minecraft:jump.static": {}
```

blaze

```json
"minecraft:jump.static": {}
```

cat

```json
"minecraft:jump.static": {}
```

cave_spider

```json
"minecraft:jump.static": {}
```

chicken

```json
"minecraft:jump.static": {}
```

cow

```json
"minecraft:jump.static": {}
```

creeper

```json
"minecraft:jump.static": {}
```

dolphin

```json
"minecraft:jump.static": {
    "jump_power": 0.6
}
```

donkey

```json
"minecraft:jump.static": {}
```

drowned

```json
"minecraft:jump.static": {}
```

elder_guardian

```json
"minecraft:jump.static": {}
```

enderman

```json
"minecraft:jump.static": {}
```

endermite

```json
"minecraft:jump.static": {}
```

evocation_illager

```json
"minecraft:jump.static": {}
```

fox

```json
"minecraft:jump.static": {}
```

frog

```json
"minecraft:jump.static": {}
```

ghast

```json
"minecraft:jump.static": {}
```

glow_squid

```json
"minecraft:jump.static": {}
```

goat

```json
"minecraft:jump.static": {}
```

guardian

```json
"minecraft:jump.static": {}
```

hoglin

```json
"minecraft:jump.static": {}
```

horse

```json
"minecraft:jump.static": {}
```

husk

```json
"minecraft:jump.static": {}
```

iron_golem

```json
"minecraft:jump.static": {}
```

llama

```json
"minecraft:jump.static": {}
```

magma_cube

```json
"minecraft:jump.static": {}
```

mooshroom

```json
"minecraft:jump.static": {}
```

mule

```json
"minecraft:jump.static": {}
```

ocelot

```json
"minecraft:jump.static": {}
```

panda

```json
"minecraft:jump.static": {}
```

parrot

```json
"minecraft:jump.static": {}
```

pig

```json
"minecraft:jump.static": {}
```

piglin

```json
"minecraft:jump.static": {}
```

piglin_brute

```json
"minecraft:jump.static": {}
```

pillager

```json
"minecraft:jump.static": {}
```

polar_bear

```json
"minecraft:jump.static": {}
```

ravager

```json
"minecraft:jump.static": {}
```

sheep

```json
"minecraft:jump.static": {}
```

silverfish

```json
"minecraft:jump.static": {}
```

skeleton

```json
"minecraft:jump.static": {}
```

skeleton_horse

```json
"minecraft:jump.static": {}
```

slime

```json
"minecraft:jump.static": {}
```

snow_golem

```json
"minecraft:jump.static": {}
```

spider

```json
"minecraft:jump.static": {}
```

squid

```json
"minecraft:jump.static": {}
```

stray

```json
"minecraft:jump.static": {}
```

strider

```json
"minecraft:jump.static": {}
```

trader_llama

```json
"minecraft:jump.static": {}
```

turtle

```json
"minecraft:jump.static": {}
```

vex

```json
"minecraft:jump.static": {}
```

villager

```json
"minecraft:jump.static": {}
```

villager_v2

```json
"minecraft:jump.static": {}
```

vindicator

```json
"minecraft:jump.static": {}
```

wandering_trader

```json
"minecraft:jump.static": {}
```

warden

```json
"minecraft:jump.static": {}
```

witch

```json
"minecraft:jump.static": {}
```

wither

```json
"minecraft:jump.static": {}
```

wither_skeleton

```json
"minecraft:jump.static": {}
```

wolf

```json
"minecraft:jump.static": {}
```

zoglin

```json
"minecraft:jump.static": {}
```

zombie

```json
"minecraft:jump.static": {}
```

zombie_horse

```json
"minecraft:jump.static": {}
```

zombie_pigman

```json
"minecraft:jump.static": {}
```

zombie_villager

```json
"minecraft:jump.static": {}
```

zombie_villager_v2

```json
"minecraft:jump.static": {}
```

## knockback_resistance

armor_stand

```json
"minecraft:knockback_resistance": {
    "value": 1.0
}
```

ender_dragon

```json
"minecraft:knockback_resistance": {
    "value": 100,
    "max": 100
}
```

hoglin

```json
"minecraft:knockback_resistance": {
    "value": 0.6
}
```

iron_golem

```json
"minecraft:knockback_resistance": {
    "value": 1.0
}
```

ravager

```json
"minecraft:knockback_resistance": {
    "value": 0.75
}
```

warden

```json
"minecraft:knockback_resistance": {
    "value": 1.0
}
```

zoglin

```json
"minecraft:knockback_resistance": {
    "value": 0.6
}
```

## lava_movement

strider

```json
"minecraft:lava_movement": {
    "value": 0.32
}
```

## leashable

allay

```json
"minecraft:leashable": {
    "soft_distance": 4.0,
    "hard_distance": 6.0,
    "max_distance": 10.0
}
```

axolotl

```json
"minecraft:leashable": {
    "soft_distance": 4.0,
    "hard_distance": 6.0,
    "max_distance": 10.0
}
```

bee

```json
"minecraft:leashable": {
    "soft_distance": 4.0,
    "hard_distance": 6.0,
    "max_distance": 10.0
}
```

boat

```json
"minecraft:leashable": {
    "soft_distance": 4.0,
    "hard_distance": 6.0,
    "max_distance": 10.0
}
```

cat

```json
"minecraft:leashable": {
    "soft_distance": 4.0,
    "hard_distance": 6.0,
    "max_distance": 10.0
}
```

chest_boat

```json
"minecraft:leashable": {
    "soft_distance": 4.0,
    "hard_distance": 6.0,
    "max_distance": 10.0
}
```

chicken

```json
"minecraft:leashable": {
    "soft_distance": 4.0,
    "hard_distance": 6.0,
    "max_distance": 10.0
}
```

cow

```json
"minecraft:leashable": {
    "soft_distance": 4.0,
    "hard_distance": 6.0,
    "max_distance": 10.0
}
```

dolphin

```json
"minecraft:leashable": {
    "soft_distance": 4.0,
    "hard_distance": 6.0,
    "max_distance": 10.0
}
```

donkey

```json
"minecraft:leashable": {
    "soft_distance": 4.0,
    "hard_distance": 6.0,
    "max_distance": 10.0
}
```

fox

```json
"minecraft:leashable": {
    "soft_distance": 4.0,
    "hard_distance": 6.0,
    "max_distance": 10.0
}
```

frog

```json
"minecraft:leashable": {}
```

glow_squid

```json
"minecraft:leashable": {
    "soft_distance": 4.0,
    "hard_distance": 6.0,
    "max_distance": 10.0
}
```

goat

```json
"minecraft:leashable": {
    "soft_distance": 4,
    "hard_distance": 6,
    "max_distance": 10
}
```

hoglin

```json
"minecraft:leashable": {
    "soft_distance": 4.0,
    "hard_distance": 6.0,
    "max_distance": 10.0
}
```

horse

```json
"minecraft:leashable": {
    "soft_distance": 4.0,
    "hard_distance": 6.0,
    "max_distance": 10.0
}
```

iron_golem

```json
"minecraft:leashable": {
    "soft_distance": 4.0,
    "hard_distance": 6.0,
    "max_distance": 10.0
}
```

llama

```json
"minecraft:leashable": {
    "soft_distance": 4.0,
    "hard_distance": 6.0,
    "max_distance": 10.0,
    "can_be_stolen": true
}
```

mooshroom

```json
"minecraft:leashable": {
    "soft_distance": 4.0,
    "hard_distance": 6.0,
    "max_distance": 10.0
}
```

mule

```json
"minecraft:leashable": {
    "soft_distance": 4.0,
    "hard_distance": 6.0,
    "max_distance": 10.0
}
```

ocelot

```json
"minecraft:leashable": {
    "soft_distance": 4.0,
    "hard_distance": 6.0,
    "max_distance": 10.0,
    "on_leash": {
        "event": "minecraft:on_leash",
        "target": "self"
    },
    "on_unleash": {
        "event": "minecraft:on_unleash",
        "target": "self"
    }
}
```

parrot

```json
"minecraft:leashable": {
    "soft_distance": 4.0,
    "hard_distance": 6.0,
    "max_distance": 10.0
}
```

pig

```json
"minecraft:leashable": {
    "soft_distance": 4.0,
    "hard_distance": 6.0,
    "max_distance": 10.0
}
```

polar_bear

```json
"minecraft:leashable": {
    "soft_distance": 4.0,
    "hard_distance": 6.0,
    "max_distance": 10.0
}
```

rabbit

```json
"minecraft:leashable": {
    "soft_distance": 4.0,
    "hard_distance": 6.0,
    "max_distance": 10.0
}
```

sheep

```json
"minecraft:leashable": {
    "soft_distance": 4.0,
    "hard_distance": 6.0,
    "max_distance": 10.0
}
```

skeleton_horse

```json
"minecraft:leashable": {
    "soft_distance": 4.0,
    "hard_distance": 6.0,
    "max_distance": 10.0
}
```

snow_golem

```json
"minecraft:leashable": {
    "soft_distance": 4.0,
    "hard_distance": 6.0,
    "max_distance": 10.0
}
```

squid

```json
"minecraft:leashable": {
    "soft_distance": 4.0,
    "hard_distance": 6.0,
    "max_distance": 10.0
}
```

strider

```json
"minecraft:leashable": {
    "soft_distance": 4.0,
    "hard_distance": 6.0,
    "max_distance": 10.0
}
```

trader_llama

```json
"minecraft:leashable": {
    "soft_distance": 4.0,
    "hard_distance": 6.0,
    "max_distance": 10.0,
    "can_be_stolen": true
}
```

wolf

```json
"minecraft:leashable": {
    "soft_distance": 4.0,
    "hard_distance": 6.0,
    "max_distance": 10.0,
    "on_leash": {
        "event": "minecraft:on_leash",
        "target": "self"
    },
    "on_unleash": {
        "event": "minecraft:on_unleash",
        "target": "self"
    }
}
```

zoglin

```json
"minecraft:leashable": {
    "soft_distance": 4.0,
    "hard_distance": 6.0,
    "max_distance": 10.0
}
```

zombie_horse

```json
"minecraft:leashable": {
    "soft_distance": 4.0,
    "hard_distance": 6.0,
    "max_distance": 10.0
}
```

## lookat

enderman

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

## loot

armor_stand

```json
"minecraft:loot": {
    "table": "loot_tables/entities/armor_stand.json"
}
```

blaze

```json
"minecraft:loot": {
    "table": "loot_tables/entities/blaze.json"
}
```

boat

```json
"minecraft:loot": {
    "table": "loot_tables/entities/boat.json"
}
```

cat

```json
"minecraft:loot": {
    "table": "loot_tables/entities/cat.json"
}
```

cave_spider

```json
"minecraft:loot": {
    "table": "loot_tables/entities/spider.json"
}
```

chicken

```json
"minecraft:loot": {
    "table": "loot_tables/entities/chicken.json"
}
```

cow

```json
"minecraft:loot": {
    "table": "loot_tables/entities/cow.json"
}
```

creeper

```json
"minecraft:loot": {
    "table": "loot_tables/entities/creeper.json"
}
```

dolphin

```json
"minecraft:loot": {
    "table": "loot_tables/entities/dolphin.json"
}
```

donkey

```json
"minecraft:loot": {
    "table": "loot_tables/entities/horse.json"
}
```

drowned

```json
"minecraft:loot": {
    "table": "loot_tables/entities/drowned.json"
}
```

elder_guardian

```json
"minecraft:loot": {
    "table": "loot_tables/entities/elder_guardian.json"
}
```

enderman

```json
"minecraft:loot": {
    "table": "loot_tables/entities/enderman.json"
}
```

evocation_illager

```json
"minecraft:loot": {
    "table": "loot_tables/entities/evocation_illager.json"
}
```

cod

```json
"minecraft:loot": {
    "table": "loot_tables/entities/fish.json"
}
```

fishing_hook

```json
"minecraft:loot": {
    "table": "loot_tables/gameplay/fishing.json"
}
```

```json
"minecraft:loot": {
    "table": "loot_tables/gameplay/jungle_fishing.json"
}
```

fox

```json
"minecraft:loot": {
    "table": "loot_tables/entities/fox.json"
}
```

ghast

```json
"minecraft:loot": {
    "table": "loot_tables/entities/ghast.json"
}
```

glow_squid

```json
"minecraft:loot": {
    "table": "loot_tables/entities/glow_squid.json"
}
```

goat

```json
"minecraft:loot": {
    "table": "loot_tables/entities/goat.json"
}
```

guardian

```json
"minecraft:loot": {
    "table": "loot_tables/entities/guardian.json"
}
```

hoglin

```json
"minecraft:loot": {
    "table": "loot_tables/entities/hoglin.json"
}
```

horse

```json
"minecraft:loot": {
    "table": "loot_tables/entities/horse.json"
}
```

husk

```json
"minecraft:loot": {
    "table": "loot_tables/entities/zombie.json"
}
```

iron_golem

```json
"minecraft:loot": {
    "table": "loot_tables/entities/iron_golem.json"
}
```

llama

```json
"minecraft:loot": {
    "table": "loot_tables/entities/llama.json"
}
```

magma_cube

```json
"minecraft:loot": {
    "table": "loot_tables/entities/magma_cube.json"
}
```

```json
"minecraft:loot": {
    "table": "loot_tables/entities/magma_cube.json"
}
```

mooshroom

```json
"minecraft:loot": {
    "table": "loot_tables/entities/mooshroom.json"
}
```

mule

```json
"minecraft:loot": {
    "table": "loot_tables/entities/horse.json"
}
```

npc

```json
"minecraft:loot": {
    "table": "loot_tables/empty.json"
}
```

ocelot

```json
"minecraft:loot": {
    "table": "loot_tables/entities/ocelot.json"
}
```

panda

```json
"minecraft:loot": {
    "table": "loot_tables/entities/panda.json"
}
```

parrot

```json
"minecraft:loot": {
    "table": "loot_tables/entities/parrot.json"
}
```

phantom

```json
"minecraft:loot": {
    "table": "loot_tables/entities/phantom.json"
}
```

pig

```json
"minecraft:loot": {
    "table": "loot_tables/entities/pig.json"
}
```

```json
"minecraft:loot": {
    "table": "loot_tables/entities/pig_saddled.json"
}
```

piglin

```json
"minecraft:loot": {
    "table": "loot_tables/entities/piglin.json"
}
```

piglin_brute

```json
"minecraft:loot": {
    "table": "loot_tables/entities/piglin.json"
}
```

pillager

```json
"minecraft:loot": {
    "table": "loot_tables/entities/pillager.json"
}
```

```json
"minecraft:loot": {
    "table": "loot_tables/entities/pillager_raid.json"
}
```

player

```json
"minecraft:loot": {
    "table": "loot_tables/empty.json"
}
```

polar_bear

```json
"minecraft:loot": {
    "table": "loot_tables/entities/polar_bear.json"
}
```

pufferfish

```json
"minecraft:loot": {
    "table": "loot_tables/entities/pufferfish.json"
}
```

rabbit

```json
"minecraft:loot": {
    "table": "loot_tables/entities/rabbit.json"
}
```

ravager

```json
"minecraft:loot": {
    "table": "loot_tables/entities/ravager.json"
}
```

salmon

```json
"minecraft:loot": {
    "table": "loot_tables/entities/salmon_normal.json"
}
```

```json
"minecraft:loot": {
    "table": "loot_tables/entities/salmon_normal.json"
}
```

```json
"minecraft:loot": {
    "table": "loot_tables/entities/salmon_large.json"
}
```

sheep

```json
"minecraft:loot": {
    "table": "loot_tables/entities/sheep_sheared.json"
}
```

```json
"minecraft:loot": {
    "table": "loot_tables/entities/sheep.json"
}
```

shulker

```json
"minecraft:loot": {
    "table": "loot_tables/entities/shulker.json"
}
```

silverfish

```json
"minecraft:loot": {
    "table": "loot_tables/entities/silverfish.json"
}
```

skeleton

```json
"minecraft:loot": {
    "table": "loot_tables/entities/skeleton.json"
}
```

skeleton_horse

```json
"minecraft:loot": {
    "table": "loot_tables/entities/skeleton_horse.json"
}
```

slime

```json
"minecraft:loot": {
    "table": "loot_tables/entities/slime.json"
}
```

snow_golem

```json
"minecraft:loot": {
    "table": "loot_tables/entities/snowman.json"
}
```

spider

```json
"minecraft:loot": {
    "table": "loot_tables/entities/spider.json"
}
```

squid

```json
"minecraft:loot": {
    "table": "loot_tables/entities/squid.json"
}
```

stray

```json
"minecraft:loot": {
    "table": "loot_tables/entities/stray.json"
}
```

strider

```json
"minecraft:loot": {
    "table": "loot_tables/entities/strider_saddled.json"
}
```

```json
"minecraft:loot": {
    "table": "loot_tables/entities/strider.json"
}
```

trader_llama

```json
"minecraft:loot": {
    "table": "loot_tables/entities/llama.json"
}
```

tripod_camera

```json
"minecraft:loot": {
    "table": "loot_tables/empty.json"
}
```

tropicalfish

```json
"minecraft:loot": {
    "table": "loot_tables/entities/tropicalfish.json"
}
```

turtle

```json
"minecraft:loot": {
    "table": "loot_tables/entities/sea_turtle.json"
}
```

vindicator

```json
"minecraft:loot": {
    "table": "loot_tables/entities/vindication_illager.json"
}
```

```json
"minecraft:loot": {
    "table": "loot_tables/entities/vindicator_raid.json"
}
```

warden

```json
"minecraft:loot": {
    "table": "loot_tables/entities/warden.json"
}
```

witch

```json
"minecraft:loot": {
    "table": "loot_tables/entities/witch.json"
}
```

wither

```json
"minecraft:loot": {
    "table": "loot_tables/entities/wither_boss.json"
}
```

wither_skeleton

```json
"minecraft:loot": {
    "table": "loot_tables/entities/wither_skeleton.json"
}
```

wolf

```json
"minecraft:loot": {
    "table": "loot_tables/entities/wolf.json"
}
```

zoglin

```json
"minecraft:loot": {
    "table": "loot_tables/entities/zoglin.json"
}
```

zombie

```json
"minecraft:loot": {
    "table": "loot_tables/entities/zombie.json"
}
```

zombie_horse

```json
"minecraft:loot": {
    "table": "loot_tables/entities/zombie_horse.json"
}
```

zombie_pigman

```json
"minecraft:loot": {
    "table": "loot_tables/entities/zombie_pigman.json"
}
```

zombie_villager

```json
"minecraft:loot": {
    "table": "loot_tables/entities/zombie.json"
}
```

zombie_villager_v2

```json
"minecraft:loot": {
    "table": "loot_tables/entities/zombie.json"
}
```

## managed_wandering_trader

wandering_trader

```json
"minecraft:managed_wandering_trader": {}
```

## mark_variant

bee

```json
"minecraft:mark_variant": {
    "value": 1
}
```

horse

```json
"minecraft:mark_variant": {
    "value": 0
}
```

```json
"minecraft:mark_variant": {
    "value": 1
}
```

```json
"minecraft:mark_variant": {
    "value": 2
}
```

```json
"minecraft:mark_variant": {
    "value": 3
}
```

```json
"minecraft:mark_variant": {
    "value": 4
}
```

llama

```json
"minecraft:mark_variant": {
    "value": 0
}
```

mooshroom

```json
"minecraft:mark_variant": {
    "value": -1
}
```

```json
"minecraft:mark_variant": {
    "value": -1
}
```

```json
"minecraft:mark_variant": {
    "value": 0
}
```

```json
"minecraft:mark_variant": {
    "value": 1
}
```

```json
"minecraft:mark_variant": {
    "value": 2
}
```

```json
"minecraft:mark_variant": {
    "value": 3
}
```

```json
"minecraft:mark_variant": {
    "value": 4
}
```

```json
"minecraft:mark_variant": {
    "value": 5
}
```

```json
"minecraft:mark_variant": {
    "value": 6
}
```

```json
"minecraft:mark_variant": {
    "value": 7
}
```

```json
"minecraft:mark_variant": {
    "value": 8
}
```

```json
"minecraft:mark_variant": {
    "value": 9
}
```

trader_llama

```json
"minecraft:mark_variant": {
    "value": 1
}
```

tropicalfish

```json
"minecraft:mark_variant": {
    "value": 0
}
```

```json
"minecraft:mark_variant": {
    "value": 1
}
```

```json
"minecraft:mark_variant": {
    "value": 2
}
```

```json
"minecraft:mark_variant": {
    "value": 3
}
```

```json
"minecraft:mark_variant": {
    "value": 4
}
```

```json
"minecraft:mark_variant": {
    "value": 5
}
```

```json
"minecraft:mark_variant": {
    "value": 1
}
```

```json
"minecraft:mark_variant": {
    "value": 0
}
```

```json
"minecraft:mark_variant": {
    "value": 1
}
```

```json
"minecraft:mark_variant": {
    "value": 4
}
```

```json
"minecraft:mark_variant": {
    "value": 1
}
```

```json
"minecraft:mark_variant": {
    "value": 0
}
```

```json
"minecraft:mark_variant": {
    "value": 5
}
```

```json
"minecraft:mark_variant": {
    "value": 3
}
```

```json
"minecraft:mark_variant": {
    "value": 5
}
```

```json
"minecraft:mark_variant": {
    "value": 5
}
```

```json
"minecraft:mark_variant": {
    "value": 2
}
```

```json
"minecraft:mark_variant": {
    "value": 5
}
```

```json
"minecraft:mark_variant": {
    "value": 3
}
```

```json
"minecraft:mark_variant": {
    "value": 4
}
```

```json
"minecraft:mark_variant": {
    "value": 4
}
```

```json
"minecraft:mark_variant": {
    "value": 2
}
```

```json
"minecraft:mark_variant": {
    "value": 3
}
```

```json
"minecraft:mark_variant": {
    "value": 0
}
```

```json
"minecraft:mark_variant": {
    "value": 1
}
```

```json
"minecraft:mark_variant": {
    "value": 1
}
```

```json
"minecraft:mark_variant": {
    "value": 1
}
```

```json
"minecraft:mark_variant": {
    "value": 3
}
```

villager_v2

```json
"minecraft:mark_variant": {
    "value": 0
}
```

```json
"minecraft:mark_variant": {
    "value": 1
}
```

```json
"minecraft:mark_variant": {
    "value": 2
}
```

```json
"minecraft:mark_variant": {
    "value": 3
}
```

```json
"minecraft:mark_variant": {
    "value": 4
}
```

```json
"minecraft:mark_variant": {
    "value": 5
}
```

```json
"minecraft:mark_variant": {
    "value": 6
}
```

zombie_villager_v2

```json
"minecraft:mark_variant": {
    "value": 1
}
```

```json
"minecraft:mark_variant": {
    "value": 2
}
```

```json
"minecraft:mark_variant": {
    "value": 3
}
```

```json
"minecraft:mark_variant": {
    "value": 4
}
```

```json
"minecraft:mark_variant": {
    "value": 5
}
```

```json
"minecraft:mark_variant": {
    "value": 6
}
```

## mob_effect

pufferfish

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

## movement

allay

```json
"minecraft:movement": {
    "value": 0.1
}
```

axolotl

```json
"minecraft:movement": {
    "value": 0.1
}
```

bat

```json
"minecraft:movement": {
    "value": 0.1
}
```

bee

```json
"minecraft:movement": {
    "value": 0.3
}
```

blaze

```json
"minecraft:movement": {
    "value": 0.23
}
```

cat

```json
"minecraft:movement": {
    "value": 0.3
}
```

cave_spider

```json
"minecraft:movement": {
    "value": 0.3
}
```

chicken

```json
"minecraft:movement": {
    "value": 0.25
}
```

cow

```json
"minecraft:movement": {
    "value": 0.25
}
```

creeper

```json
"minecraft:movement": {
    "value": 0.2
}
```

dolphin

```json
"minecraft:movement": {
    "value": 0.1
}
```

donkey

```json
"minecraft:movement": {
    "value": 0.175
}
```

drowned

```json
"minecraft:movement": {
    "value": 0.23
}
```

```json
"minecraft:movement": {
    "value": 0.25
}
```

elder_guardian

```json
"minecraft:movement": {
    "value": 0.3
}
```

enderman

```json
"minecraft:movement": {
    "value": 0.3
}
```

```json
"minecraft:movement": {
    "value": 0.45
}
```

endermite

```json
"minecraft:movement": {
    "value": 0.25
}
```

ender_dragon

```json
"minecraft:movement": {
    "value": 0.3
}
```

evocation_illager

```json
"minecraft:movement": {
    "value": 0.5
}
```

cod

```json
"minecraft:movement": {
    "value": 0.1
}
```

fox

```json
"minecraft:movement": {
    "value": 0.3
}
```

frog

```json
"minecraft:movement": {
    "value": 0.1
}
```

ghast

```json
"minecraft:movement": {
    "value": 0.03
}
```

glow_squid

```json
"minecraft:movement": {
    "value": 0.2
}
```

goat

```json
"minecraft:movement": {
    "value": 0.4
}
```

guardian

```json
"minecraft:movement": {
    "value": 0.12
}
```

hoglin

```json
"minecraft:movement": {
    "value": 0.36
}
```

```json
"minecraft:movement": {
    "value": 0.3
}
```

horse

```json
"minecraft:movement": {
    "value": {
        "range_min": 0.1125,
        "range_max": 0.3375
    }
}
```

husk

```json
"minecraft:movement": {
    "value": 0.35
}
```

```json
"minecraft:movement": {
    "value": 0.23
}
```

iron_golem

```json
"minecraft:movement": {
    "value": 0.25
}
```

llama

```json
"minecraft:movement": {
    "value": 0.25
}
```

magma_cube

```json
"minecraft:movement": {
    "value": 0.75
}
```

```json
"minecraft:movement": {
    "value": 0.66
}
```

```json
"minecraft:movement": {
    "value": 0.6
}
```

mooshroom

```json
"minecraft:movement": {
    "value": 0.25
}
```

mule

```json
"minecraft:movement": {
    "value": 0.175
}
```

npc

```json
"minecraft:movement": {
    "value": 0.5
}
```

ocelot

```json
"minecraft:movement": {
    "value": 0.3
}
```

panda

```json
"minecraft:movement": {
    "value": 0.15
}
```

```json
"minecraft:movement": {
    "value": 0.07
}
```

parrot

```json
"minecraft:movement": {
    "value": 0.4
}
```

phantom

```json
"minecraft:movement": {
    "value": 1.8
}
```

pig

```json
"minecraft:movement": {
    "value": 0.25
}
```

piglin

```json
"minecraft:movement": {
    "value": 0.42
}
```

```json
"minecraft:movement": {
    "value": 0.35
}
```

piglin_brute

```json
"minecraft:movement": {
    "value": 0.35
}
```

pillager

```json
"minecraft:movement": {
    "value": 0.35
}
```

player

```json
"minecraft:movement": {
    "value": 0.1
}
```

polar_bear

```json
"minecraft:movement": {
    "value": 0.25
}
```

pufferfish

```json
"minecraft:movement": {
    "value": 0.13
}
```

rabbit

```json
"minecraft:movement": {
    "value": 0.3
}
```

ravager

```json
"minecraft:movement": {
    "value": 0.0
}
```

```json
"minecraft:movement": {
    "value": 0.4
}
```

salmon

```json
"minecraft:movement": {
    "value": 0.12
}
```

sheep

```json
"minecraft:movement": {
    "value": 0.25
}
```

shulker

```json
"minecraft:movement": {
    "value": 0.0,
    "max": 0.0
}
```

silverfish

```json
"minecraft:movement": {
    "value": 0.25
}
```

skeleton

```json
"minecraft:movement": {
    "value": 0.25
}
```

skeleton_horse

```json
"minecraft:movement": {
    "value": 0.2
}
```

slime

```json
"minecraft:movement": {
    "value": 0.6
}
```

```json
"minecraft:movement": {
    "value": 0.4
}
```

```json
"minecraft:movement": {
    "value": 0.3
}
```

snow_golem

```json
"minecraft:movement": {
    "value": 0.2
}
```

spider

```json
"minecraft:movement": {
    "value": 0.3
}
```

squid

```json
"minecraft:movement": {
    "value": 0.2
}
```

stray

```json
"minecraft:movement": {
    "value": 0.25
}
```

strider

```json
"minecraft:movement": {
    "value": 0.16
}
```

tadpole

```json
"minecraft:movement": {
    "value": 0.1
}
```

trader_llama

```json
"minecraft:movement": {
    "value": 0.25
}
```

tropicalfish

```json
"minecraft:movement": {
    "value": 0.12
}
```

turtle

```json
"minecraft:movement": {
    "value": 0.1
}
```

vex

```json
"minecraft:movement": {
    "value": 1.0
}
```

villager

```json
"minecraft:movement": {
    "value": 0.5
}
```

villager_v2

```json
"minecraft:movement": {
    "value": 0.5
}
```

vindicator

```json
"minecraft:movement": {
    "value": 0.35
}
```

wandering_trader

```json
"minecraft:movement": {
    "value": 0.5
}
```

warden

```json
"minecraft:movement": {
    "value": 0.3
}
```

witch

```json
"minecraft:movement": {
    "value": 0.25
}
```

wither

```json
"minecraft:movement": {
    "value": 0.25
}
```

wither_skeleton

```json
"minecraft:movement": {
    "value": 0.25
}
```

wolf

```json
"minecraft:movement": {
    "value": 0.3
}
```

zoglin

```json
"minecraft:movement": {
    "value": 0.25
}
```

zombie

```json
"minecraft:movement": {
    "value": 0.35
}
```

```json
"minecraft:movement": {
    "value": 0.23
}
```

zombie_horse

```json
"minecraft:movement": {
    "value": 0.2
}
```

zombie_pigman

```json
"minecraft:movement": {
    "value": 0.23
}
```

zombie_villager

```json
"minecraft:movement": {
    "value": 0.35
}
```

```json
"minecraft:movement": {
    "value": 0.23
}
```

zombie_villager_v2

```json
"minecraft:movement": {
    "value": 0.35
}
```

```json
"minecraft:movement": {
    "value": 0.23
}
```

## movement.amphibious

axolotl

```json
"minecraft:movement.amphibious": {
    "max_turn": 15.0
}
```

frog

```json
"minecraft:movement.amphibious": {}
```

turtle

```json
"minecraft:movement.amphibious": {
    "max_turn": 5.0
}
```

## movement.basic

bat

```json
"minecraft:movement.basic": {}
```

blaze

```json
"minecraft:movement.basic": {}
```

cat

```json
"minecraft:movement.basic": {}
```

cave_spider

```json
"minecraft:movement.basic": {}
```

chicken

```json
"minecraft:movement.basic": {}
```

cow

```json
"minecraft:movement.basic": {}
```

creeper

```json
"minecraft:movement.basic": {}
```

donkey

```json
"minecraft:movement.basic": {}
```

enderman

```json
"minecraft:movement.basic": {}
```

endermite

```json
"minecraft:movement.basic": {}
```

evocation_illager

```json
"minecraft:movement.basic": {}
```

fox

```json
"minecraft:movement.basic": {}
```

glow_squid

```json
"minecraft:movement.basic": {}
```

goat

```json
"minecraft:movement.basic": {}
```

hoglin

```json
"minecraft:movement.basic": {}
```

horse

```json
"minecraft:movement.basic": {}
```

husk

```json
"minecraft:movement.basic": {}
```

iron_golem

```json
"minecraft:movement.basic": {}
```

llama

```json
"minecraft:movement.basic": {}
```

mooshroom

```json
"minecraft:movement.basic": {}
```

mule

```json
"minecraft:movement.basic": {}
```

ocelot

```json
"minecraft:movement.basic": {}
```

panda

```json
"minecraft:movement.basic": {}
```

pig

```json
"minecraft:movement.basic": {}
```

piglin

```json
"minecraft:movement.basic": {}
```

piglin_brute

```json
"minecraft:movement.basic": {}
```

pillager

```json
"minecraft:movement.basic": {}
```

polar_bear

```json
"minecraft:movement.basic": {}
```

ravager

```json
"minecraft:movement.basic": {}
```

sheep

```json
"minecraft:movement.basic": {}
```

shulker

```json
"minecraft:movement.basic": {}
```

silverfish

```json
"minecraft:movement.basic": {}
```

skeleton

```json
"minecraft:movement.basic": {}
```

skeleton_horse

```json
"minecraft:movement.basic": {}
```

snow_golem

```json
"minecraft:movement.basic": {}
```

spider

```json
"minecraft:movement.basic": {}
```

squid

```json
"minecraft:movement.basic": {}
```

stray

```json
"minecraft:movement.basic": {}
```

strider

```json
"minecraft:movement.basic": {}
```

trader_llama

```json
"minecraft:movement.basic": {}
```

vex

```json
"minecraft:movement.basic": {}
```

villager

```json
"minecraft:movement.basic": {}
```

villager_v2

```json
"minecraft:movement.basic": {}
```

vindicator

```json
"minecraft:movement.basic": {}
```

wandering_trader

```json
"minecraft:movement.basic": {}
```

warden

```json
"minecraft:movement.basic": {}
```

witch

```json
"minecraft:movement.basic": {}
```

wither

```json
"minecraft:movement.basic": {
    "max_turn": 180.0
}
```

wither_skeleton

```json
"minecraft:movement.basic": {}
```

wolf

```json
"minecraft:movement.basic": {}
```

zoglin

```json
"minecraft:movement.basic": {}
```

zombie

```json
"minecraft:movement.basic": {}
```

zombie_horse

```json
"minecraft:movement.basic": {}
```

zombie_pigman

```json
"minecraft:movement.basic": {}
```

zombie_villager

```json
"minecraft:movement.basic": {}
```

zombie_villager_v2

```json
"minecraft:movement.basic": {}
```

## movement.fly

parrot

```json
"minecraft:movement.fly": {}
```

## movement.generic

drowned

```json
"minecraft:movement.generic": {}
```

## movement.glide

phantom

```json
"minecraft:movement.glide": {
    "start_speed": 0.1,
    "speed_when_turning": 0.2
}
```

## movement.hover

allay

```json
"minecraft:movement.hover": {}
```

bee

```json
"minecraft:movement.hover": {}
```

## movement.jump

magma_cube

```json
"minecraft:movement.jump": {
    "jump_delay": [
        2.0,
        6.0
    ]
}
```

```json
"minecraft:movement.jump": {
    "jump_delay": [
        2.0,
        6.0
    ]
}
```

```json
"minecraft:movement.jump": {
    "jump_delay": [
        0.667,
        2.0
    ]
}
```

slime

```json
"minecraft:movement.jump": {
    "jump_delay": [
        0.5,
        1.5
    ]
}
```

```json
"minecraft:movement.jump": {
    "jump_delay": [
        0.5,
        1.5
    ]
}
```

```json
"minecraft:movement.jump": {
    "jump_delay": [
        0.16,
        0.5
    ]
}
```

## movement.skip

rabbit

```json
"minecraft:movement.skip": {}
```

## movement.sway

elder_guardian

```json
"minecraft:movement.sway": {}
```

cod

```json
"minecraft:movement.sway": {
    "sway_amplitude": 0.0
}
```

guardian

```json
"minecraft:movement.sway": {}
```

pufferfish

```json
"minecraft:movement.sway": {
    "sway_amplitude": 0.0
}
```

salmon

```json
"minecraft:movement.sway": {
    "sway_amplitude": 0.0
}
```

tadpole

```json
"minecraft:movement.sway": {
    "sway_amplitude": 0.0
}
```

tropicalfish

```json
"minecraft:movement.sway": {
    "sway_amplitude": 0.0
}
```

## movement_sound_distance_offset

warden

```json
"minecraft:movement_sound_distance_offset": {
    "value": 0.55
}
```

## nameable

allay

```json
"minecraft:nameable": {}
```

armor_stand

```json
"minecraft:nameable": {}
```

axolotl

```json
"minecraft:nameable": {}
```

bat

```json
"minecraft:nameable": {}
```

bee

```json
"minecraft:nameable": {}
```

blaze

```json
"minecraft:nameable": {}
```

cat

```json
"minecraft:nameable": {}
```

cave_spider

```json
"minecraft:nameable": {}
```

chicken

```json
"minecraft:nameable": {}
```

cow

```json
"minecraft:nameable": {}
```

creeper

```json
"minecraft:nameable": {}
```

dolphin

```json
"minecraft:nameable": {}
```

donkey

```json
"minecraft:nameable": {}
```

drowned

```json
"minecraft:nameable": {}
```

elder_guardian

```json
"minecraft:nameable": {}
```

enderman

```json
"minecraft:nameable": {}
```

endermite

```json
"minecraft:nameable": {}
```

evocation_illager

```json
"minecraft:nameable": {}
```

cod

```json
"minecraft:nameable": {}
```

fox

```json
"minecraft:nameable": {}
```

frog

```json
"minecraft:nameable": {}
```

ghast

```json
"minecraft:nameable": {}
```

glow_squid

```json
"minecraft:nameable": {}
```

goat

```json
"minecraft:nameable": {}
```

guardian

```json
"minecraft:nameable": {}
```

hoglin

```json
"minecraft:nameable": {}
```

horse

```json
"minecraft:nameable": {}
```

husk

```json
"minecraft:nameable": {}
```

iron_golem

```json
"minecraft:nameable": {}
```

llama

```json
"minecraft:nameable": {}
```

magma_cube

```json
"minecraft:nameable": {}
```

mooshroom

```json
"minecraft:nameable": {}
```

mule

```json
"minecraft:nameable": {}
```

npc

```json
"minecraft:nameable": {
    "always_show": false,
    "allow_name_tag_renaming": false
}
```

ocelot

```json
"minecraft:nameable": {}
```

panda

```json
"minecraft:nameable": {}
```

parrot

```json
"minecraft:nameable": {}
```

phantom

```json
"minecraft:nameable": {}
```

pig

```json
"minecraft:nameable": {}
```

piglin

```json
"minecraft:nameable": {}
```

piglin_brute

```json
"minecraft:nameable": {}
```

pillager

```json
"minecraft:nameable": {}
```

player

```json
"minecraft:nameable": {
    "always_show": true,
    "allow_name_tag_renaming": false
}
```

polar_bear

```json
"minecraft:nameable": {}
```

pufferfish

```json
"minecraft:nameable": {}
```

rabbit

```json
"minecraft:nameable": {}
```

ravager

```json
"minecraft:nameable": {}
```

salmon

```json
"minecraft:nameable": {}
```

sheep

```json
"minecraft:nameable": {}
```

shulker

```json
"minecraft:nameable": {}
```

silverfish

```json
"minecraft:nameable": {}
```

skeleton

```json
"minecraft:nameable": {}
```

skeleton_horse

```json
"minecraft:nameable": {}
```

slime

```json
"minecraft:nameable": {}
```

snow_golem

```json
"minecraft:nameable": {}
```

spider

```json
"minecraft:nameable": {}
```

squid

```json
"minecraft:nameable": {}
```

stray

```json
"minecraft:nameable": {}
```

strider

```json
"minecraft:nameable": {}
```

tadpole

```json
"minecraft:nameable": {}
```

trader_llama

```json
"minecraft:nameable": {}
```

tropicalfish

```json
"minecraft:nameable": {}
```

turtle

```json
"minecraft:nameable": {}
```

vex

```json
"minecraft:nameable": {}
```

villager

```json
"minecraft:nameable": {}
```

villager_v2

```json
"minecraft:nameable": {}
```

vindicator

```json
"minecraft:nameable": {
    "default_trigger": {
        "event": "minecraft:stop_johnny",
        "target": "self"
    },
    "name_actions": [
        {
            "name_filter": "Johnny",
            "on_named": {
                "event": "minecraft:start_johnny",
                "target": "self"
            }
        }
    ]
}
```

wandering_trader

```json
"minecraft:nameable": {}
```

warden

```json
"minecraft:nameable": {}
```

witch

```json
"minecraft:nameable": {}
```

wither

```json
"minecraft:nameable": {}
```

wither_skeleton

```json
"minecraft:nameable": {}
```

wolf

```json
"minecraft:nameable": {}
```

zoglin

```json
"minecraft:nameable": {}
```

zombie

```json
"minecraft:nameable": {}
```

zombie_horse

```json
"minecraft:nameable": {}
```

zombie_pigman

```json
"minecraft:nameable": {}
```

zombie_villager

```json
"minecraft:nameable": {}
```

zombie_villager_v2

```json
"minecraft:nameable": {}
```

## navigation.climb

cave_spider

```json
"minecraft:navigation.climb": {
    "can_path_over_water": true
}
```

spider

```json
"minecraft:navigation.climb": {
    "can_path_over_water": true
}
```

## navigation.float

bat

```json
"minecraft:navigation.float": {
    "can_path_over_water": true
}
```

ghast

```json
"minecraft:navigation.float": {
    "can_path_over_water": true
}
```

## navigation.fly

parrot

```json
"minecraft:navigation.fly": {
    "can_path_over_water": true,
    "can_path_from_air": true
}
```

## navigation.generic

axolotl

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

```json
"minecraft:navigation.generic": {
    "is_amphibious": true,
    "can_path_over_water": false,
    "can_swim": true,
    "can_walk": false,
    "can_breach": true
}
```

cod

```json
"minecraft:navigation.generic": {
    "is_amphibious": false,
    "can_path_over_water": false,
    "can_swim": true,
    "can_walk": false,
    "can_breach": false,
    "can_sink": false
}
```

frog

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

guardian

```json
"minecraft:navigation.generic": {
    "is_amphibious": true,
    "can_path_over_water": false,
    "can_swim": true,
    "can_walk": false,
    "can_breach": true
}
```

pufferfish

```json
"minecraft:navigation.generic": {
    "is_amphibious": false,
    "can_path_over_water": false,
    "can_swim": true,
    "can_walk": false,
    "can_breach": false,
    "can_sink": false
}
```

salmon

```json
"minecraft:navigation.generic": {
    "is_amphibious": false,
    "can_path_over_water": false,
    "can_swim": true,
    "can_walk": false,
    "can_breach": false,
    "can_sink": false
}
```

tadpole

```json
"minecraft:navigation.generic": {
    "can_path_over_water": true,
    "can_swim": true,
    "can_walk": false,
    "can_sink": false,
    "avoid_damage_blocks": true
}
```

tropicalfish

```json
"minecraft:navigation.generic": {
    "is_amphibious": false,
    "can_path_over_water": false,
    "can_swim": true,
    "can_walk": false,
    "can_breach": false,
    "can_sink": false
}
```

turtle

```json
"minecraft:navigation.generic": {
    "is_amphibious": true,
    "can_path_over_water": false,
    "can_swim": true,
    "can_walk": true,
    "can_sink": false,
    "avoid_damage_blocks": true
}
```

## navigation.hover

allay

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

## navigation.walk

blaze

```json
"minecraft:navigation.walk": {
    "can_path_over_water": true,
    "avoid_water": true,
    "avoid_damage_blocks": true
}
```

cat

```json
"minecraft:navigation.walk": {
    "can_float": true,
    "avoid_water": true,
    "avoid_damage_blocks": true
}
```

chicken

```json
"minecraft:navigation.walk": {
    "can_path_over_water": true,
    "avoid_damage_blocks": true
}
```

cow

```json
"minecraft:navigation.walk": {
    "can_path_over_water": true,
    "avoid_water": true,
    "avoid_damage_blocks": true
}
```

creeper

```json
"minecraft:navigation.walk": {
    "can_path_over_water": true
}
```

donkey

```json
"minecraft:navigation.walk": {
    "can_path_over_water": true,
    "avoid_water": true,
    "avoid_damage_blocks": true
}
```

enderman

```json
"minecraft:navigation.walk": {
    "can_path_over_water": false,
    "avoid_water": true
}
```

endermite

```json
"minecraft:navigation.walk": {
    "can_path_over_water": true
}
```

evocation_illager

```json
"minecraft:navigation.walk": {
    "can_path_over_water": true,
    "can_pass_doors": true,
    "can_open_doors": true,
    "avoid_water": true
}
```

fox

```json
"minecraft:navigation.walk": {
    "can_path_over_water": true,
    "avoid_water": true,
    "avoid_damage_blocks": true
}
```

glow_squid

```json
"minecraft:navigation.walk": {
    "can_path_over_water": true,
    "can_sink": false
}
```

goat

```json
"minecraft:navigation.walk": {
    "can_path_over_water": true,
    "avoid_water": true,
    "avoid_damage_blocks": true,
    "blocks_to_avoid": [
        {
            "name": "minecraft:powder_snow"
        }
    ]
}
```

hoglin

```json
"minecraft:navigation.walk": {
    "can_path_over_water": true,
    "avoid_water": true,
    "avoid_damage_blocks": true
}
```

horse

```json
"minecraft:navigation.walk": {
    "can_path_over_water": true,
    "avoid_water": true,
    "avoid_damage_blocks": true
}
```

husk

```json
"minecraft:navigation.walk": {
    "is_amphibious": true,
    "can_pass_doors": true,
    "can_break_doors": true,
    "avoid_portals": false
}
```

iron_golem

```json
"minecraft:navigation.walk": {
    "can_path_over_water": false,
    "avoid_water": true,
    "avoid_damage_blocks": true
}
```

llama

```json
"minecraft:navigation.walk": {
    "can_path_over_water": true,
    "avoid_damage_blocks": true
}
```

magma_cube

```json
"minecraft:navigation.walk": {
    "can_path_over_water": true,
    "avoid_water": true
}
```

mooshroom

```json
"minecraft:navigation.walk": {
    "can_path_over_water": true,
    "avoid_water": true,
    "avoid_damage_blocks": true
}
```

mule

```json
"minecraft:navigation.walk": {
    "can_path_over_water": true,
    "avoid_water": true,
    "avoid_damage_blocks": true
}
```

ocelot

```json
"minecraft:navigation.walk": {
    "can_path_over_water": true,
    "avoid_water": true,
    "avoid_damage_blocks": true
}
```

panda

```json
"minecraft:navigation.walk": {
    "can_float": true,
    "avoid_water": true,
    "avoid_damage_blocks": true
}
```

pig

```json
"minecraft:navigation.walk": {
    "can_path_over_water": true,
    "avoid_water": true,
    "avoid_damage_blocks": true
}
```

piglin

```json
"minecraft:navigation.walk": {
    "can_path_over_water": true,
    "can_open_doors": true
}
```

piglin_brute

```json
"minecraft:navigation.walk": {
    "can_path_over_water": true,
    "can_open_doors": true
}
```

pillager

```json
"minecraft:navigation.walk": {
    "can_path_over_water": true
}
```

polar_bear

```json
"minecraft:navigation.walk": {
    "can_path_over_water": true,
    "avoid_damage_blocks": true
}
```

rabbit

```json
"minecraft:navigation.walk": {
    "can_path_over_water": true,
    "avoid_water": true
}
```

ravager

```json
"minecraft:navigation.walk": {
    "avoid_damage_blocks": true,
    "can_path_over_water": true,
    "can_sink": false
}
```

sheep

```json
"minecraft:navigation.walk": {
    "can_path_over_water": true,
    "avoid_water": true
}
```

shulker

```json
"minecraft:navigation.walk": {}
```

silverfish

```json
"minecraft:navigation.walk": {
    "can_path_over_water": true
}
```

skeleton

```json
"minecraft:navigation.walk": {
    "is_amphibious": true,
    "avoid_sun": true,
    "avoid_water": true
}
```

skeleton_horse

```json
"minecraft:navigation.walk": {
    "is_amphibious": true,
    "avoid_water": true
}
```

slime

```json
"minecraft:navigation.walk": {
    "can_path_over_water": true,
    "avoid_water": true
}
```

snow_golem

```json
"minecraft:navigation.walk": {
    "avoid_water": true
}
```

squid

```json
"minecraft:navigation.walk": {
    "can_path_over_water": true,
    "can_sink": false
}
```

stray

```json
"minecraft:navigation.walk": {
    "is_amphibious": true,
    "avoid_sun": true,
    "avoid_water": true
}
```

strider

```json
"minecraft:navigation.walk": {
    "can_path_over_lava": true,
    "avoid_water": true,
    "can_sink": false,
    "can_walk_in_lava": true
}
```

trader_llama

```json
"minecraft:navigation.walk": {
    "can_path_over_water": true,
    "avoid_damage_blocks": true
}
```

vex

```json
"minecraft:navigation.walk": {
    "can_path_over_water": true
}
```

villager

```json
"minecraft:navigation.walk": {
    "is_amphibious": true,
    "can_path_over_water": true,
    "can_pass_doors": true,
    "can_open_doors": true,
    "can_walk": true,
    "avoid_water": true
}
```

villager_v2

```json
"minecraft:navigation.walk": {
    "can_path_over_water": true,
    "can_pass_doors": true,
    "can_open_doors": true,
    "avoid_water": true
}
```

vindicator

```json
"minecraft:navigation.walk": {
    "can_path_over_water": true
}
```

```json
"minecraft:navigation.walk": {
    "can_path_over_water": true,
    "can_pass_doors": true,
    "can_break_doors": true
}
```

wandering_trader

```json
"minecraft:navigation.walk": {
    "can_path_over_water": true,
    "can_pass_doors": true,
    "can_open_doors": false,
    "avoid_water": true
}
```

warden

```json
"minecraft:navigation.walk": {
    "can_path_over_water": true,
    "can_path_over_lava": true,
    "avoid_damage_blocks": true
}
```

witch

```json
"minecraft:navigation.walk": {
    "can_path_over_water": true,
    "avoid_water": false
}
```

wither

```json
"minecraft:navigation.walk": {
    "can_path_over_water": true,
    "avoid_water": true
}
```

wither_skeleton

```json
"minecraft:navigation.walk": {
    "is_amphibious": true,
    "avoid_sun": true,
    "avoid_water": true
}
```

wolf

```json
"minecraft:navigation.walk": {
    "can_path_over_water": true,
    "avoid_damage_blocks": true
}
```

zoglin

```json
"minecraft:navigation.walk": {
    "is_amphibious": true,
    "can_path_over_water": false,
    "avoid_water": true,
    "avoid_damage_blocks": true
}
```

zombie

```json
"minecraft:navigation.walk": {
    "is_amphibious": true,
    "can_pass_doors": true,
    "can_walk": true,
    "can_break_doors": true
}
```

zombie_horse

```json
"minecraft:navigation.walk": {
    "is_amphibious": true,
    "avoid_water": true
}
```

zombie_pigman

```json
"minecraft:navigation.walk": {
    "is_amphibious": true,
    "can_pass_doors": true,
    "can_open_doors": true,
    "avoid_water": true,
    "avoid_portals": true
}
```

zombie_villager

```json
"minecraft:navigation.walk": {
    "is_amphibious": true,
    "can_pass_doors": true,
    "can_break_doors": true,
    "avoid_sun": false
}
```

```json
"minecraft:navigation.walk": {
    "is_amphibious": true,
    "can_pass_doors": true,
    "can_open_doors": true,
    "avoid_water": true,
    "avoid_sun": true
}
```

zombie_villager_v2

```json
"minecraft:navigation.walk": {
    "is_amphibious": true,
    "can_pass_doors": true,
    "can_break_doors": true,
    "avoid_sun": false
}
```

```json
"minecraft:navigation.walk": {
    "is_amphibious": true,
    "can_pass_doors": true,
    "can_open_doors": true,
    "avoid_water": true,
    "avoid_sun": true
}
```

## npc

npc

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

## on_death

ender_dragon

```json
"minecraft:on_death": {
    "event": "minecraft:start_death",
    "target": "self"
}
```

## on_friendly_anger

panda

```json
"minecraft:on_friendly_anger": {
    "event": "minecraft:on_anger",
    "target": "self"
}
```

polar_bear

```json
"minecraft:on_friendly_anger": {
    "event": "minecraft:on_anger",
    "target": "self"
}
```

trader_llama

```json
"minecraft:on_friendly_anger": {
    "event": "minecraft:defend_wandering_trader",
    "target": "self"
}
```

## on_hurt

blaze

```json
"minecraft:on_hurt": {
    "event": "minecraft:on_hurt_event",
    "target": "self"
}
```

ender_crystal

```json
"minecraft:on_hurt": {
    "event": "minecraft:crystal_explode",
    "target": "self"
}
```

pillager

```json
"minecraft:on_hurt": {
    "event": "minecraft:ranged_mode",
    "target": "self"
}
```

```json
"minecraft:on_hurt": {
    "event": "minecraft:ranged_mode",
    "target": "self"
}
```

```json
"minecraft:on_hurt": {
    "event": "minecraft:ranged_mode",
    "target": "self"
}
```

## on_hurt_by_player

blaze

```json
"minecraft:on_hurt_by_player": {
    "event": "minecraft:on_hurt_event",
    "target": "self"
}
```

pillager

```json
"minecraft:on_hurt_by_player": {
    "event": "minecraft:ranged_mode",
    "target": "self"
}
```

```json
"minecraft:on_hurt_by_player": {
    "event": "minecraft:ranged_mode",
    "target": "self"
}
```

```json
"minecraft:on_hurt_by_player": {
    "event": "minecraft:ranged_mode",
    "target": "self"
}
```

## on_start_landing

ender_dragon

```json
"minecraft:on_start_landing": {
    "event": "minecraft:start_land",
    "target": "self"
}
```

## on_start_takeoff

ender_dragon

```json
"minecraft:on_start_takeoff": {
    "event": "minecraft:start_fly",
    "target": "self"
}
```

## on_target_acquired

bee

```json
"minecraft:on_target_acquired": {
    "event": "attacked",
    "target": "self"
}
```

cave_spider

```json
"minecraft:on_target_acquired": {
    "event": "minecraft:become_angry"
}
```

dolphin

```json
"minecraft:on_target_acquired": {
    "event": "become_angry",
    "target": "self"
}
```

```json
"minecraft:on_target_acquired": {}
```

drowned

```json
"minecraft:on_target_acquired": {
    "event": "minecraft:has_target",
    "target": "self"
}
```

enderman

```json
"minecraft:on_target_acquired": {
    "event": "minecraft:become_angry",
    "target": "self"
}
```

hoglin

```json
"minecraft:on_target_acquired": {
    "event": "become_angry_event",
    "target": "self"
}
```

llama

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

magma_cube

```json
"minecraft:on_target_acquired": {
    "event": "minecraft:become_aggressive",
    "target": "self"
}
```

panda

```json
"minecraft:on_target_acquired": {
    "event": "minecraft:on_scared",
    "target": "self"
}
```

```json
"minecraft:on_target_acquired": {
    "event": "minecraft:become_angry",
    "target": "self"
}
```

```json
"minecraft:on_target_acquired": {}
```

piglin

```json
"minecraft:on_target_acquired": {
    "event": "become_angry_event",
    "target": "self"
}
```

piglin_brute

```json
"minecraft:on_target_acquired": {
    "event": "become_angry_event",
    "target": "self"
}
```

polar_bear

```json
"minecraft:on_target_acquired": {
    "event": "minecraft:on_scared",
    "target": "self"
}
```

```json
"minecraft:on_target_acquired": {
    "event": "minecraft:on_anger",
    "target": "self"
}
```

silverfish

```json
"minecraft:on_target_acquired": {
    "event": "minecraft:become_angry",
    "target": "self"
}
```

slime

```json
"minecraft:on_target_acquired": {
    "event": "minecraft:become_aggressive",
    "target": "self"
}
```

spider

```json
"minecraft:on_target_acquired": {
    "event": "minecraft:become_angry"
}
```

```json
"minecraft:on_target_acquired": {
    "event": "minecraft:become_angry"
}
```

trader_llama

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

vindicator

```json
"minecraft:on_target_acquired": {
    "event": "minecraft:become_aggro",
    "target": "self"
}
```

wolf

```json
"minecraft:on_target_acquired": {}
```

```json
"minecraft:on_target_acquired": {
    "event": "minecraft:become_angry",
    "target": "self"
}
```

zombie_pigman

```json
"minecraft:on_target_acquired": {
    "event": "minecraft:become_angry",
    "target": "self"
}
```

## on_target_escape

creeper

```json
"minecraft:on_target_escape": {
    "event": "minecraft:stop_exploding",
    "target": "self"
}
```

```json
"minecraft:on_target_escape": {}
```

```json
"minecraft:on_target_escape": {}
```

dolphin

```json
"minecraft:on_target_escape": {
    "target": "self"
}
```

drowned

```json
"minecraft:on_target_escape": {
    "event": "minecraft:lost_target",
    "target": "self"
}
```

llama

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

```json
"minecraft:on_target_escape": {
    "event": "minecraft:become_calm",
    "target": "self"
}
```

panda

```json
"minecraft:on_target_escape": {
    "event": "minecraft:on_calm",
    "target": "self"
}
```

pillager

```json
"minecraft:on_target_escape": {
    "event": "minecraft:calm",
    "target": "self"
}
```

```json
"minecraft:on_target_escape": {
    "event": "minecraft:calm",
    "target": "self"
}
```

slime

```json
"minecraft:on_target_escape": {
    "event": "minecraft:become_calm",
    "target": "self"
}
```

trader_llama

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

vindicator

```json
"minecraft:on_target_escape": {
    "event": "minecraft:stop_aggro",
    "target": "self"
}
```

## on_wake_with_owner

cat

```json
"minecraft:on_wake_with_owner": {
    "event": "minecraft:pet_slept_with_owner",
    "target": "self"
}
```

## out_of_control

boat

```json
"minecraft:out_of_control": {}
```

```json
"minecraft:out_of_control": {}
```

chest_boat

```json
"minecraft:out_of_control": {}
```

```json
"minecraft:out_of_control": {}
```

## peek

shulker

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

## persistent

armor_stand

```json
"minecraft:persistent": {}
```

ender_dragon

```json
"minecraft:persistent": {}
```

evocation_illager

```json
"minecraft:persistent": {}
```

```json
"minecraft:persistent": {}
```

iron_golem

```json
"minecraft:persistent": {}
```

npc

```json
"minecraft:persistent": {}
```

pillager

```json
"minecraft:persistent": {}
```

ravager

```json
"minecraft:persistent": {}
```

snow_golem

```json
"minecraft:persistent": {}
```

trader_llama

```json
"minecraft:persistent": {}
```

villager

```json
"minecraft:persistent": {}
```

villager_v2

```json
"minecraft:persistent": {}
```

vindicator

```json
"minecraft:persistent": {}
```

witch

```json
"minecraft:persistent": {}
```

wither

```json
"minecraft:persistent": {}
```

## physics

allay

```json
"minecraft:physics": {
    "has_gravity": false
}
```

area_effect_cloud

```json
"minecraft:physics": {
    "has_collision": false
}
```

armor_stand

```json
"minecraft:physics": {}
```

arrow

```json
"minecraft:physics": {}
```

axolotl

```json
"minecraft:physics": {}
```

bat

```json
"minecraft:physics": {}
```

bee

```json
"minecraft:physics": {}
```

blaze

```json
"minecraft:physics": {}
```

boat

```json
"minecraft:physics": {}
```

cat

```json
"minecraft:physics": {}
```

cave_spider

```json
"minecraft:physics": {}
```

chest_boat

```json
"minecraft:physics": {}
```

chest_minecart

```json
"minecraft:physics": {}
```

chicken

```json
"minecraft:physics": {}
```

command_block_minecart

```json
"minecraft:physics": {}
```

cow

```json
"minecraft:physics": {}
```

creeper

```json
"minecraft:physics": {}
```

dolphin

```json
"minecraft:physics": {}
```

donkey

```json
"minecraft:physics": {}
```

drowned

```json
"minecraft:physics": {}
```

egg

```json
"minecraft:physics": {}
```

elder_guardian

```json
"minecraft:physics": {}
```

enderman

```json
"minecraft:physics": {}
```

endermite

```json
"minecraft:physics": {}
```

ender_crystal

```json
"minecraft:physics": {}
```

ender_dragon

```json
"minecraft:physics": {
    "has_gravity": false,
    "has_collision": false
}
```

ender_pearl

```json
"minecraft:physics": {}
```

evocation_illager

```json
"minecraft:physics": {}
```

eye_of_ender_signal

```json
"minecraft:physics": {}
```

fireball

```json
"minecraft:physics": {}
```

fireworks_rocket

```json
"minecraft:physics": {}
```

cod

```json
"minecraft:physics": {
    "has_gravity": false
}
```

fishing_hook

```json
"minecraft:physics": {}
```

fox

```json
"minecraft:physics": {}
```

frog

```json
"minecraft:physics": {}
```

ghast

```json
"minecraft:physics": {}
```

glow_squid

```json
"minecraft:physics": {}
```

goat

```json
"minecraft:physics": {}
```

guardian

```json
"minecraft:physics": {}
```

hoglin

```json
"minecraft:physics": {}
```

hopper_minecart

```json
"minecraft:physics": {}
```

horse

```json
"minecraft:physics": {}
```

husk

```json
"minecraft:physics": {}
```

iron_golem

```json
"minecraft:physics": {}
```

lingering_potion

```json
"minecraft:physics": {}
```

llama

```json
"minecraft:physics": {}
```

llama_spit

```json
"minecraft:physics": {}
```

magma_cube

```json
"minecraft:physics": {}
```

minecart

```json
"minecraft:physics": {}
```

mooshroom

```json
"minecraft:physics": {}
```

mule

```json
"minecraft:physics": {}
```

npc

```json
"minecraft:physics": {}
```

ocelot

```json
"minecraft:physics": {}
```

panda

```json
"minecraft:physics": {}
```

parrot

```json
"minecraft:physics": {}
```

phantom

```json
"minecraft:physics": {
    "has_gravity": false
}
```

pig

```json
"minecraft:physics": {}
```

piglin

```json
"minecraft:physics": {}
```

piglin_brute

```json
"minecraft:physics": {}
```

pillager

```json
"minecraft:physics": {}
```

player

```json
"minecraft:physics": {
    "push_towards_closest_space": true
}
```

polar_bear

```json
"minecraft:physics": {}
```

pufferfish

```json
"minecraft:physics": {
    "has_gravity": false
}
```

rabbit

```json
"minecraft:physics": {}
```

ravager

```json
"minecraft:physics": {}
```

salmon

```json
"minecraft:physics": {
    "has_gravity": false
}
```

sheep

```json
"minecraft:physics": {}
```

shulker

```json
"minecraft:physics": {}
```

shulker_bullet

```json
"minecraft:physics": {
    "has_collision": false
}
```

silverfish

```json
"minecraft:physics": {}
```

skeleton

```json
"minecraft:physics": {}
```

skeleton_horse

```json
"minecraft:physics": {}
```

slime

```json
"minecraft:physics": {}
```

small_fireball

```json
"minecraft:physics": {}
```

snowball

```json
"minecraft:physics": {}
```

snow_golem

```json
"minecraft:physics": {}
```

spider

```json
"minecraft:physics": {}
```

splash_potion

```json
"minecraft:physics": {}
```

squid

```json
"minecraft:physics": {}
```

stray

```json
"minecraft:physics": {}
```

strider

```json
"minecraft:physics": {}
```

tadpole

```json
"minecraft:physics": {}
```

thrown_trident

```json
"minecraft:physics": {}
```

tnt

```json
"minecraft:physics": {}
```

tnt_minecart

```json
"minecraft:physics": {}
```

trader_llama

```json
"minecraft:physics": {}
```

tripod_camera

```json
"minecraft:physics": {}
```

tropicalfish

```json
"minecraft:physics": {
    "has_gravity": false
}
```

turtle

```json
"minecraft:physics": {}
```

vex

```json
"minecraft:physics": {
    "has_gravity": false,
    "has_collision": false
}
```

villager

```json
"minecraft:physics": {}
```

villager_v2

```json
"minecraft:physics": {}
```

vindicator

```json
"minecraft:physics": {}
```

wandering_trader

```json
"minecraft:physics": {}
```

warden

```json
"minecraft:physics": {}
```

witch

```json
"minecraft:physics": {}
```

wither

```json
"minecraft:physics": {}
```

wither_skeleton

```json
"minecraft:physics": {}
```

wither_skull

```json
"minecraft:physics": {}
```

wither_skull_dangerous

```json
"minecraft:physics": {}
```

wolf

```json
"minecraft:physics": {}
```

xp_bottle

```json
"minecraft:physics": {}
```

xp_orb

```json
"minecraft:physics": {}
```

zoglin

```json
"minecraft:physics": {}
```

zombie

```json
"minecraft:physics": {}
```

zombie_horse

```json
"minecraft:physics": {}
```

zombie_pigman

```json
"minecraft:physics": {}
```

zombie_villager

```json
"minecraft:physics": {}
```

zombie_villager_v2

```json
"minecraft:physics": {}
```

## player.exhaustion

player

```json
"minecraft:player.exhaustion": {
    "value": 0,
    "max": 20
}
```

## player.experience

player

```json
"minecraft:player.experience": {
    "value": 0,
    "max": 1
}
```

## player.level

player

```json
"minecraft:player.level": {
    "value": 0,
    "max": 24791
}
```

## player.saturation

player

```json
"minecraft:player.saturation": {
    "value": 5,
    "max": 20
}
```

## preferred_path

iron_golem

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

```json
"minecraft:preferred_path": {
    "max_fall_blocks": 20
}
```

## projectile

arrow

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

```json
"minecraft:projectile": {
    "on_hit": {
        "impact_damage": {
            "damage": [
                3,
                6
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

dragon_fireball

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

fishing_hook

```json
"minecraft:projectile": {
    "on_hit": {
        "stick_in_ground": {}
    }
}
```

lingering_potion

```json
"minecraft:projectile": {
    "on_hit": {
        "douse_fire": {},
        "spawn_aoe_cloud": {
            "radius": 3.0,
            "radius_on_use": -0.5,
            "duration": 30,
            "reapplication_delay": 40
        },
        "remove_on_hit": {}
    },
    "power": 0.5,
    "gravity": 0.05,
    "angle_offset": -20.0,
    "hit_sound": "glass"
}
```

llama_spit

```json
"minecraft:projectile": {
    "on_hit": {
        "impact_damage": {
            "damage": 1,
            "knockback": false
        },
        "remove_on_hit": {}
    },
    "power": 1.5,
    "gravity": 0.06,
    "inertia": 1,
    "uncertainty_base": 10,
    "uncertainty_multiplier": 4,
    "anchor": 1,
    "offset": [
        0,
        -0.1,
        0
    ],
    "reflect_on_hurt": true
}
```

shulker_bullet

```json
"minecraft:projectile": {
    "on_hit": {
        "impact_damage": {
            "damage": 4,
            "knockback": true,
            "should_bounce": true
        },
        "mob_effect": {
            "effect": "levitation",
            "durationeasy": 200,
            "durationnormal": 200,
            "durationhard": 200,
            "amplifier": 0
        },
        "remove_on_hit": {},
        "particle_on_hit": {
            "particle_type": "largeexplode",
            "on_other_hit": true
        }
    },
    "hit_sound": "bullet.hit",
    "destroyOnHurt": true,
    "crit_particle_on_hurt": true,
    "power": 1.6,
    "gravity": 0.05,
    "uncertainty_base": 16,
    "uncertainty_multiplier": 4,
    "anchor": 1,
    "offset": [
        0,
        -0.1,
        0
    ],
    "homing": true
}
```

small_fireball

```json
"minecraft:projectile": {
    "on_hit": {
        "impact_damage": {
            "damage": 5,
            "knockback": true,
            "catch_fire": true,
            "semi_random_diff_damage": false
        },
        "catch_fire": {
            "fire_affected_by_griefing": true
        },
        "remove_on_hit": {}
    },
    "power": 1.3,
    "gravity": 0.0,
    "inertia": 1,
    "liquid_inertia": 1,
    "anchor": 2,
    "offset": [
        0,
        0.5,
        0
    ],
    "semi_random_diff_damage": true,
    "uncertainty_base": 10.0,
    "reflect_on_hurt": true
}
```

snowball

```json
"minecraft:projectile": {
    "on_hit": {
        "impact_damage": {
            "filter": "blaze",
            "damage": 3,
            "knockback": true
        },
        "remove_on_hit": {},
        "particle_on_hit": {
            "particle_type": "snowballpoof",
            "num_particles": 6,
            "on_entity_hit": true,
            "on_other_hit": true
        }
    },
    "anchor": 1,
    "power": 1.5,
    "gravity": 0.03,
    "angle_offset": 0.0,
    "offset": [
        0,
        -0.1,
        0
    ]
}
```

splash_potion

```json
"minecraft:projectile": {
    "on_hit": {
        "douse_fire": {},
        "thrown_potion_effect": {},
        "remove_on_hit": {}
    },
    "power": 0.5,
    "gravity": 0.05,
    "angle_offset": -20.0,
    "hit_sound": "glass"
}
```

thrown_trident

```json
"minecraft:projectile": {
    "on_hit": {
        "impact_damage": {
            "damage": 8,
            "knockback": true,
            "semi_random_diff_damage": false,
            "destroy_on_hit": false
        },
        "stick_in_ground": {
            "shake_time": 0
        }
    },
    "liquid_inertia": 0.99,
    "hit_sound": "item.trident.hit",
    "hit_ground_sound": "item.trident.hit_ground",
    "power": 4,
    "gravity": 0.1,
    "uncertainty_base": 1,
    "uncertainty_multiplier": 0,
    "stop_on_hurt": true,
    "anchor": 1,
    "should_bounce": true,
    "multiple_targets": false,
    "offset": [
        0,
        -0.1,
        0
    ]
}
```

wither_skull

```json
"minecraft:projectile": {
    "on_hit": {
        "definition_event": {
            "affect_projectile": true,
            "event_trigger": {
                "event": "minecraft:explode",
                "target": "self"
            }
        },
        "mob_effect": {
            "effect": "wither",
            "durationeasy": 0,
            "durationnormal": 200,
            "durationhard": 800,
            "amplifier": 1
        }
    },
    "power": 1.2,
    "gravity": 0.0,
    "uncertainty_base": 7.5,
    "uncertainty_multiplier": 1,
    "shoot_sound": "bow",
    "hit_sound": "bow.hit",
    "anchor": 1,
    "offset": [
        0,
        -0.1,
        0
    ],
    "inertia": 1.0,
    "liquid_inertia": 1.0,
    "shoot_target": false
}
```

wither_skull_dangerous

```json
"minecraft:projectile": {
    "on_hit": {
        "definition_event": {
            "affect_projectile": true,
            "event_trigger": {
                "event": "minecraft:explode",
                "target": "self"
            }
        },
        "mob_effect": {
            "effect": "wither",
            "durationeasy": 0,
            "durationnormal": 200,
            "durationhard": 800,
            "amplifier": 1
        }
    },
    "power": 0.6,
    "gravity": 0.0,
    "uncertainty_base": 7.5,
    "uncertainty_multiplier": 1,
    "shoot_sound": "bow",
    "hit_sound": "bow.hit",
    "anchor": 1,
    "offset": [
        0,
        -0.1,
        0
    ],
    "is_dangerous": true,
    "inertia": 1.0,
    "liquid_inertia": 1.0,
    "shoot_target": false,
    "reflect_on_hurt": true
}
```

xp_bottle

```json
"minecraft:projectile": {
    "on_hit": {
        "grant_xp": {
            "minXP": 3,
            "maxXP": 11
        },
        "remove_on_hit": {}
    },
    "power": 0.5,
    "gravity": 0.05,
    "angle_offset": -20.0,
    "hit_sound": "glass"
}
```

## pushable

allay

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

armor_stand

```json
"minecraft:pushable": {
    "is_pushable": false,
    "is_pushable_by_piston": true
}
```

arrow

```json
"minecraft:pushable": {
    "is_pushable": false,
    "is_pushable_by_piston": true
}
```

axolotl

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

bee

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

blaze

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

boat

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

cat

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

cave_spider

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

chest_boat

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

chest_minecart

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

chicken

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

command_block_minecart

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

cow

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

creeper

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

dolphin

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

donkey

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

drowned

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

egg

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

elder_guardian

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

enderman

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

endermite

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

ender_crystal

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

ender_pearl

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

evocation_illager

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

eye_of_ender_signal

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

fireball

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

fireworks_rocket

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

cod

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

fishing_hook

```json
"minecraft:pushable": {
    "is_pushable": false,
    "is_pushable_by_piston": true
}
```

fox

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

frog

```json
"minecraft:pushable": {}
```

ghast

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

glow_squid

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

goat

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

guardian

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

hoglin

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

hopper_minecart

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

horse

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

husk

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

iron_golem

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

lingering_potion

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

llama

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

llama_spit

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

magma_cube

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

minecart

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

mooshroom

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

mule

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

ocelot

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

panda

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

parrot

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

phantom

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

pig

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

piglin

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

piglin_brute

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

pillager

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

player

```json
"minecraft:pushable": {
    "is_pushable": false,
    "is_pushable_by_piston": true
}
```

polar_bear

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

pufferfish

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

rabbit

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

ravager

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

salmon

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

sheep

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

silverfish

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

skeleton

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

skeleton_horse

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

slime

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

small_fireball

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

snowball

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

snow_golem

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

spider

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

splash_potion

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

squid

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

stray

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

strider

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

tadpole

```json
"minecraft:pushable": {}
```

thrown_trident

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

tnt

```json
"minecraft:pushable": {
    "is_pushable": false,
    "is_pushable_by_piston": true
}
```

tnt_minecart

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

trader_llama

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

tropicalfish

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

turtle

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

villager

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

villager_v2

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

vindicator

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

wandering_trader

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

warden

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

witch

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

wither

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

wither_skeleton

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

wither_skull

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

wither_skull_dangerous

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

wolf

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

xp_bottle

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

xp_orb

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

zoglin

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

zombie

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

zombie_horse

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

zombie_pigman

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

zombie_villager

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

zombie_villager_v2

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

## raid_trigger

player

```json
"minecraft:raid_trigger": {
    "triggered_event": {
        "event": "minecraft:remove_raid_trigger",
        "target": "self"
    }
}
```

## rail_movement

chest_minecart

```json
"minecraft:rail_movement": {}
```

command_block_minecart

```json
"minecraft:rail_movement": {}
```

hopper_minecart

```json
"minecraft:rail_movement": {}
```

minecart

```json
"minecraft:rail_movement": {}
```

tnt_minecart

```json
"minecraft:rail_movement": {}
```

## rail_sensor

command_block_minecart

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

```json
"minecraft:rail_sensor": {
    "on_activate": {
        "event": "minecraft:hopper_deactivate"
    }
}
```

```json
"minecraft:rail_sensor": {
    "on_deactivate": {
        "event": "minecraft:hopper_activate"
    }
}
```

minecart

```json
"minecraft:rail_sensor": {
    "eject_on_activate": true
}
```

tnt_minecart

```json
"minecraft:rail_sensor": {}
```

```json
"minecraft:rail_sensor": {}
```

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

## ravager_blocked

ravager

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

## rideable

boat

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

```json
"minecraft:rideable": {
    "seat_count": 1,
    "family_types": [
        "skeleton"
    ],
    "seats": {
        "position": [
            0.0,
            0.25,
            -0.1
        ]
    }
}
```

chest_boat

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

chicken

```json
"minecraft:rideable": {
    "seat_count": 1,
    "family_types": [
        "zombie"
    ],
    "seats": {
        "position": [
            0.0,
            0.4,
            0.0
        ]
    }
}
```

cow

```json
"minecraft:rideable": {
    "seat_count": 1,
    "family_types": [
        "zombie"
    ],
    "seats": {
        "position": [
            0.0,
            1.105,
            0.0
        ]
    }
}
```

donkey

```json
"minecraft:rideable": {
    "seat_count": 1,
    "family_types": [
        "player",
        "zombie"
    ],
    "interact_text": "action.interact.mount",
    "seats": {
        "position": [
            0.0,
            0.925,
            -0.2
        ]
    }
}
```

```json
"minecraft:rideable": {
    "seat_count": 1,
    "crouching_skip_interact": true,
    "family_types": [
        "player"
    ],
    "interact_text": "action.interact.ride.horse",
    "seats": {
        "position": [
            0.0,
            0.925,
            -0.2
        ]
    }
}
```

hoglin

```json
"minecraft:rideable": {
    "seat_count": 3,
    "family_types": [
        "piglin"
    ],
    "seats": [
        {
            "position": [
                0.0,
                0.9,
                -0.3
            ],
            "lock_rider_rotation": 0
        },
        {
            "position": [
                0.0,
                2.4,
                -0.3
            ],
            "lock_rider_rotation": 0
        },
        {
            "position": [
                0.0,
                3.9,
                -0.3
            ],
            "lock_rider_rotation": 0
        }
    ]
}
```

horse

```json
"minecraft:rideable": {
    "seat_count": 1,
    "family_types": [
        "player",
        "zombie"
    ],
    "interact_text": "action.interact.mount",
    "seats": {
        "position": [
            0.0,
            1.1,
            -0.2
        ]
    }
}
```

```json
"minecraft:rideable": {
    "seat_count": 1,
    "crouching_skip_interact": true,
    "family_types": [
        "player"
    ],
    "interact_text": "action.interact.ride.horse",
    "seats": {
        "position": [
            0.0,
            1.1,
            -0.2
        ]
    }
}
```

husk

```json
"minecraft:rideable": {
    "seat_count": 1,
    "family_types": [
        "zombie"
    ],
    "seats": {
        "position": [
            0.0,
            1.1,
            -0.35
        ],
        "lock_rider_rotation": 0
    }
}
```

llama

```json
"minecraft:rideable": {
    "seat_count": 1,
    "family_types": [
        "player"
    ],
    "interact_text": "action.interact.mount",
    "seats": {
        "position": [
            0.0,
            1.17,
            -0.3
        ]
    }
}
```

```json
"minecraft:rideable": {
    "seat_count": 1,
    "crouching_skip_interact": true,
    "family_types": [
        "player"
    ],
    "interact_text": "action.interact.ride.horse",
    "seats": {
        "position": [
            0.0,
            1.17,
            -0.3
        ]
    }
}
```

minecart

```json
"minecraft:rideable": {
    "seat_count": 1,
    "interact_text": "action.interact.ride.minecart",
    "pull_in_entities": true,
    "seats": {
        "position": [
            0.0,
            -0.2,
            0.0
        ]
    }
}
```

mooshroom

```json
"minecraft:rideable": {
    "seat_count": 1,
    "family_types": [
        "zombie"
    ],
    "seats": {
        "position": [
            0.0,
            1.105,
            0.0
        ]
    }
}
```

mule

```json
"minecraft:rideable": {
    "seat_count": 1,
    "family_types": [
        "player",
        "zombie"
    ],
    "interact_text": "action.interact.mount",
    "seats": {
        "position": [
            0.0,
            0.975,
            -0.2
        ]
    }
}
```

```json
"minecraft:rideable": {
    "seat_count": 1,
    "crouching_skip_interact": true,
    "family_types": [
        "player"
    ],
    "interact_text": "action.interact.ride.horse",
    "seats": {
        "position": [
            0.0,
            0.975,
            -0.2
        ]
    }
}
```

ocelot

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

panda

```json
"minecraft:rideable": {
    "seat_count": 1,
    "family_types": [
        "zombie"
    ],
    "seats": {
        "position": [
            0.0,
            1.105,
            0.0
        ]
    }
}
```

pig

```json
"minecraft:rideable": {
    "seat_count": 1,
    "family_types": [
        "zombie"
    ],
    "seats": {
        "position": [
            0.0,
            0.63,
            0.0
        ]
    }
}
```

```json
"minecraft:rideable": {
    "seat_count": 1,
    "interact_text": "action.interact.ride.horse",
    "family_types": [
        "player"
    ],
    "seats": {
        "position": [
            0.0,
            0.63,
            0.0
        ]
    }
}
```

player

```json
"minecraft:rideable": {
    "seat_count": 2,
    "family_types": [
        "parrot_tame"
    ],
    "pull_in_entities": true,
    "seats": [
        {
            "position": [
                0.4,
                -0.2,
                -0.1
            ],
            "min_rider_count": 0,
            "max_rider_count": 0,
            "lock_rider_rotation": 0
        },
        {
            "position": [
                -0.4,
                -0.2,
                -0.1
            ],
            "min_rider_count": 1,
            "max_rider_count": 2,
            "lock_rider_rotation": 0
        }
    ]
}
```

ravager

```json
"minecraft:rideable": {
    "seat_count": 1,
    "family_types": [
        "pillager",
        "vindicator",
        "evocation_illager"
    ],
    "seats": {
        "position": [
            0.0,
            2.1,
            -0.3
        ]
    }
}
```

sheep

```json
"minecraft:rideable": {
    "seat_count": 1,
    "family_types": [
        "zombie"
    ],
    "seats": {
        "position": [
            0.0,
            0.9,
            0.0
        ]
    }
}
```

```json
"minecraft:rideable": {
    "seat_count": 1,
    "family_types": [
        "zombie"
    ],
    "seats": {
        "position": [
            0.0,
            0.975,
            0.0
        ]
    }
}
```

skeleton_horse

```json
"minecraft:rideable": {
    "seat_count": 1,
    "family_types": [
        "player",
        "skeleton",
        "zombie"
    ],
    "interact_text": "action.interact.ride.horse",
    "seats": {
        "position": [
            0.0,
            1.2,
            -0.2
        ]
    }
}
```

```json
"minecraft:rideable": {}
```

```json
"minecraft:rideable": {
    "seat_count": 1,
    "family_types": [
        "player",
        "skeleton",
        "zombie"
    ],
    "interact_text": "action.interact.ride.horse",
    "seats": {
        "position": [
            0.0,
            1.2,
            -0.2
        ]
    }
}
```

spider

```json
"minecraft:rideable": {
    "seat_count": 1,
    "family_types": [
        "zombie"
    ],
    "seats": {
        "position": [
            0.0,
            0.54,
            -0.1
        ]
    }
}
```

```json
"minecraft:rideable": {
    "seat_count": 1,
    "family_types": [
        "skeleton"
    ],
    "seats": {
        "position": [
            0.0,
            0.54,
            0.0
        ]
    }
}
```

```json
"minecraft:rideable": {
    "seat_count": 1,
    "family_types": [
        "skeleton"
    ],
    "seats": {
        "position": [
            0.0,
            0.54,
            0.0
        ]
    }
}
```

```json
"minecraft:rideable": {
    "seat_count": 1,
    "family_types": [
        "skeleton"
    ],
    "seats": {
        "position": [
            0.0,
            0.54,
            0.0
        ]
    }
}
```

strider

```json
"minecraft:rideable": {
    "seat_count": 1,
    "crouching_skip_interact": true,
    "family_types": [
        "player"
    ],
    "interact_text": "action.interact.ride.strider",
    "seats": {
        "position": [
            0.0,
            1.6,
            -0.2
        ]
    }
}
```

```json
"minecraft:rideable": {
    "seat_count": 1,
    "crouching_skip_interact": true,
    "family_types": [
        "player",
        "zombie_pigman"
    ],
    "interact_text": "action.interact.ride.strider",
    "seats": {
        "position": [
            0.0,
            1.65,
            -0.2
        ]
    }
}
```

```json
"minecraft:rideable": {
    "seat_count": 1,
    "family_types": [
        "strider"
    ],
    "seats": {
        "position": [
            0.0,
            1.6,
            0.0
        ]
    }
}
```

trader_llama

```json
"minecraft:rideable": {
    "seat_count": 1,
    "family_types": [
        "player"
    ],
    "interact_text": "action.interact.mount",
    "seats": {
        "position": [
            0.0,
            1.17,
            -0.3
        ]
    }
}
```

```json
"minecraft:rideable": {
    "seat_count": 1,
    "crouching_skip_interact": true,
    "family_types": [
        "player"
    ],
    "interact_text": "action.interact.ride.horse",
    "seats": {
        "position": [
            0.0,
            1.17,
            -0.3
        ]
    }
}
```

wolf

```json
"minecraft:rideable": {
    "seat_count": 1,
    "family_types": [
        "zombie"
    ],
    "seats": {
        "position": [
            0.0,
            0.675,
            -0.1
        ]
    }
}
```

```json
"minecraft:rideable": {
    "seat_count": 1,
    "family_types": [
        "zombie"
    ],
    "seats": {
        "position": [
            0.0,
            0.675,
            -0.1
        ]
    }
}
```

zombie

```json
"minecraft:rideable": {
    "seat_count": 1,
    "family_types": [
        "zombie"
    ],
    "seats": {
        "position": [
            0.0,
            1.1,
            -0.35
        ],
        "lock_rider_rotation": 0
    }
}
```

zombie_horse

```json
"minecraft:rideable": {
    "seat_count": 1,
    "family_types": [
        "zombie"
    ],
    "interact_text": "action.interact.ride.horse",
    "seats": {
        "position": [
            0.0,
            1.2,
            -0.2
        ]
    }
}
```

zombie_pigman

```json
"minecraft:rideable": {
    "seat_count": 1,
    "family_types": [
        "zombie"
    ],
    "seats": {
        "position": [
            0.0,
            1.1,
            -0.35
        ],
        "lock_rider_rotation": 0
    }
}
```

zombie_villager

```json
"minecraft:rideable": {
    "seat_count": 1,
    "family_types": [
        "zombie"
    ],
    "seats": {
        "position": [
            0.0,
            1.1,
            -0.35
        ]
    }
}
```

zombie_villager_v2

```json
"minecraft:rideable": {
    "seat_count": 1,
    "family_types": [
        "zombie"
    ],
    "seats": {
        "position": [
            0.0,
            1.1,
            -0.35
        ]
    }
}
```

## scale

axolotl

```json
"minecraft:scale": {
    "value": 0.5
}
```

bee

```json
"minecraft:scale": {
    "value": 0.5
}
```

cat

```json
"minecraft:scale": {
    "value": 0.4
}
```

```json
"minecraft:scale": {
    "value": 0.8
}
```

chicken

```json
"minecraft:scale": {
    "value": 0.5
}
```

cow

```json
"minecraft:scale": {
    "value": 0.5
}
```

dolphin

```json
"minecraft:scale": {
    "value": 0.65
}
```

drowned

```json
"minecraft:scale": {
    "value": 0.5
}
```

cod

```json
"minecraft:scale": {
    "value": 1.0
}
```

fox

```json
"minecraft:scale": {
    "value": 0.5
}
```

glow_squid

```json
"minecraft:scale": {
    "value": 0.5
}
```

goat

```json
"minecraft:scale": {
    "value": 0.5
}
```

hoglin

```json
"minecraft:scale": {
    "value": 0.5
}
```

husk

```json
"minecraft:scale": {
    "value": 0.5
}
```

llama

```json
"minecraft:scale": {
    "value": 0.5
}
```

mooshroom

```json
"minecraft:scale": {
    "value": 0.5
}
```

ocelot

```json
"minecraft:scale": {
    "value": 0.5
}
```

```json
"minecraft:scale": {
    "value": 1
}
```

panda

```json
"minecraft:scale": {
    "value": 1.0
}
```

```json
"minecraft:scale": {
    "value": 0.4
}
```

pig

```json
"minecraft:scale": {
    "value": 0.5
}
```

piglin

```json
"minecraft:scale": {
    "value": 0.5
}
```

polar_bear

```json
"minecraft:scale": {
    "value": 0.5
}
```

pufferfish

```json
"minecraft:scale": {
    "value": 1.2
}
```

rabbit

```json
"minecraft:scale": {
    "value": 0.6
}
```

```json
"minecraft:scale": {
    "value": 0.4
}
```

```json
"minecraft:scale": {
    "value": 0.6
}
```

salmon

```json
"minecraft:scale": {
    "value": 0.5
}
```

```json
"minecraft:scale": {
    "value": 1
}
```

```json
"minecraft:scale": {
    "value": 1.5
}
```

sheep

```json
"minecraft:scale": {
    "value": 0.5
}
```

squid

```json
"minecraft:scale": {
    "value": 0.5
}
```

strider

```json
"minecraft:scale": {
    "value": 0.5
}
```

trader_llama

```json
"minecraft:scale": {
    "value": 0.5
}
```

tropicalfish

```json
"minecraft:scale": {
    "value": 1.3
}
```

turtle

```json
"minecraft:scale": {
    "value": 0.16
}
```

villager

```json
"minecraft:scale": {
    "value": 0.5
}
```

villager_v2

```json
"minecraft:scale": {
    "value": 0.5
}
```

wither_skeleton

```json
"minecraft:scale": {
    "value": 1.2
}
```

wolf

```json
"minecraft:scale": {
    "value": 0.5
}
```

zoglin

```json
"minecraft:scale": {
    "value": 0.5
}
```

zombie

```json
"minecraft:scale": {
    "value": 0.5
}
```

zombie_pigman

```json
"minecraft:scale": {
    "value": 0.5
}
```

zombie_villager

```json
"minecraft:scale": {
    "value": 0.5
}
```

zombie_villager_v2

```json
"minecraft:scale": {
    "value": 0.5
}
```

## scale_by_age

donkey

```json
"minecraft:scale_by_age": {
    "start_scale": 0.5,
    "end_scale": 1.0
}
```

horse

```json
"minecraft:scale_by_age": {
    "start_scale": 0.5,
    "end_scale": 1.0
}
```

mule

```json
"minecraft:scale_by_age": {
    "start_scale": 0.5,
    "end_scale": 1.0
}
```

skeleton_horse

```json
"minecraft:scale_by_age": {
    "start_scale": 0.5,
    "end_scale": 1.0
}
```

zombie_horse

```json
"minecraft:scale_by_age": {
    "start_scale": 0.5,
    "end_scale": 1.0
}
```

## scheduler

fox

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
                        "value": 2000
                    },
                    {
                        "test": "hourly_clock_time",
                        "operator": "<",
                        "value": 13000
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
                        "value": 13000
                    },
                    {
                        "test": "hourly_clock_time",
                        "operator": "<",
                        "value": 14000
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
                        "value": 14000
                    },
                    {
                        "test": "hourly_clock_time",
                        "operator": "<",
                        "value": 24000
                    }
                ]
            },
            "event": "minecraft:schedule_bed_villager"
        },
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
                        "value": 2000
                    }
                ]
            },
            "event": "minecraft:schedule_bed_villager"
        }
    ]
}
```

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
            "event": "minecraft:schedule_work_fisher"
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
            "event": "minecraft:schedule_work_fisher"
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
            "event": "minecraft:schedule_work_librarian"
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
            "event": "minecraft:schedule_work_librarian"
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
            "event": "minecraft:schedule_work_farmer"
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
            "event": "minecraft:schedule_work_farmer"
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

## shareables

drowned

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
            "want_amount": 12,
            "surplus_amount": 24,
            "stored_in_inventory": true
        },
        {
            "item": "minecraft:potato",
            "want_amount": 12,
            "surplus_amount": 24,
            "stored_in_inventory": true
        },
        {
            "item": "minecraft:beetroot",
            "want_amount": 12,
            "surplus_amount": 24,
            "stored_in_inventory": true
        }
    ]
}
```

villager_v2

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
            "surplus_amount": 24,
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
            "item": "minecraft:bone_meal",
            "want_amount": 64,
            "surplus_amount": 64,
            "stored_in_inventory": true
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
            "surplus_amount": 24,
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
            "want_amount": 12,
            "surplus_amount": 24,
            "stored_in_inventory": true
        },
        {
            "item": "minecraft:potato",
            "want_amount": 12,
            "surplus_amount": 24,
            "stored_in_inventory": true
        },
        {
            "item": "minecraft:beetroot",
            "want_amount": 12,
            "surplus_amount": 24,
            "stored_in_inventory": true
        }
    ]
}
```

wither_skeleton

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
            "item": "minecraft:wooden_shovel",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 6
        },
        {
            "item": "minecraft:stone_shovel",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 6
        },
        {
            "item": "minecraft:golden_shovel",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 6
        },
        {
            "item": "minecraft:iron_shovel",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 6
        },
        {
            "item": "minecraft:diamond_shovel",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 6
        },
        {
            "item": "minecraft:netherite_shovel",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 6
        },
        {
            "item": "minecraft:wooden_pickaxe",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 6
        },
        {
            "item": "minecraft:stone_pickaxe",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 6
        },
        {
            "item": "minecraft:golden_pickaxe",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 6
        },
        {
            "item": "minecraft:iron_pickaxe",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 6
        },
        {
            "item": "minecraft:diamond_pickaxe",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 6
        },
        {
            "item": "minecraft:netherite_pickaxe",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 6
        },
        {
            "item": "minecraft:wooden_axe",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 6
        },
        {
            "item": "minecraft:stone_axe",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 6
        },
        {
            "item": "minecraft:golden_axe",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 6
        },
        {
            "item": "minecraft:iron_axe",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 6
        },
        {
            "item": "minecraft:diamond_axe",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 6
        },
        {
            "item": "minecraft:netherite_axe",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 6
        },
        {
            "item": "minecraft:wooden_hoe",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 6
        },
        {
            "item": "minecraft:stone_hoe",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 6
        },
        {
            "item": "minecraft:golden_hoe",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 6
        },
        {
            "item": "minecraft:iron_hoe",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 6
        },
        {
            "item": "minecraft:diamond_hoe",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 6
        },
        {
            "item": "minecraft:netherite_hoe",
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

zombie

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

zombie_pigman

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
            "priority": 0
        },
        {
            "item": "minecraft:iron_sword",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 1
        },
        {
            "item": "minecraft:stone_sword",
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
            "item": "minecraft:wooden_sword",
            "want_amount": 1,
            "surplus_amount": 1,
            "priority": 4
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

zombie_villager

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

zombie_villager_v2

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

## shooter

blaze

```json
"minecraft:shooter": {
    "def": "minecraft:small_fireball"
}
```

drowned

```json
"minecraft:shooter": {
    "def": "minecraft:thrown_trident"
}
```

ender_dragon

```json
"minecraft:shooter": {
    "type": "dragonfireball",
    "def": "minecraft:dragon_fireball"
}
```

ghast

```json
"minecraft:shooter": {
    "def": "minecraft:fireball"
}
```

llama

```json
"minecraft:shooter": {
    "def": "minecraft:llama_spit"
}
```

piglin

```json
"minecraft:shooter": {
    "def": "minecraft:arrow"
}
```

pillager

```json
"minecraft:shooter": {
    "def": "minecraft:arrow"
}
```

shulker

```json
"minecraft:shooter": {
    "def": "minecraft:shulker_bullet"
}
```

skeleton

```json
"minecraft:shooter": {
    "def": "minecraft:arrow"
}
```

```json
"minecraft:shooter": {
    "def": "minecraft:arrow"
}
```

snow_golem

```json
"minecraft:shooter": {
    "def": "minecraft:snowball"
}
```

stray

```json
"minecraft:shooter": {
    "def": "minecraft:arrow",
    "aux_val": 19
}
```

```json
"minecraft:shooter": {
    "def": "minecraft:arrow",
    "aux_val": 19
}
```

trader_llama

```json
"minecraft:shooter": {
    "def": "minecraft:llama_spit"
}
```

witch

```json
"minecraft:shooter": {
    "power": 0.75,
    "def": "minecraft:splash_potion",
    "aux_val": 23,
    "sound": "throw",
    "projectiles": [
        {
            "def": "minecraft:splash_potion",
            "aux_val": 17,
            "filters": {
                "all_of": [
                    {
                        "test": "target_distance",
                        "subject": "self",
                        "value": 8.0,
                        "operator": ">="
                    },
                    {
                        "none_of": [
                            {
                                "test": "has_mob_effect",
                                "subject": "other",
                                "value": "slowness"
                            }
                        ]
                    }
                ]
            }
        },
        {
            "def": "minecraft:splash_potion",
            "aux_val": 25,
            "filters": {
                "all_of": [
                    {
                        "test": "actor_health",
                        "subject": "other",
                        "value": 8,
                        "operator": ">="
                    },
                    {
                        "none_of": [
                            {
                                "test": "has_mob_effect",
                                "subject": "other",
                                "value": "poison"
                            }
                        ]
                    }
                ]
            }
        },
        {
            "def": "minecraft:splash_potion",
            "aux_val": 34,
            "filters": {
                "all_of": [
                    {
                        "test": "target_distance",
                        "subject": "self",
                        "value": 3,
                        "operator": "<="
                    },
                    {
                        "none_of": [
                            {
                                "test": "has_mob_effect",
                                "subject": "other",
                                "value": "weakness"
                            }
                        ]
                    }
                ]
            },
            "chance": 0.25
        }
    ],
    "magic": true
}
```

## sittable

cat

```json
"minecraft:sittable": {}
```

ocelot

```json
"minecraft:sittable": {}
```

parrot

```json
"minecraft:sittable": {}
```

wolf

```json
"minecraft:sittable": {}
```

## skin_id

villager_v2

```json
"minecraft:skin_id": {
    "value": 0
}
```

```json
"minecraft:skin_id": {
    "value": 1
}
```

```json
"minecraft:skin_id": {
    "value": 2
}
```

```json
"minecraft:skin_id": {
    "value": 3
}
```

```json
"minecraft:skin_id": {
    "value": 4
}
```

```json
"minecraft:skin_id": {
    "value": 5
}
```

zombie_villager_v2

```json
"minecraft:skin_id": {
    "value": 0
}
```

```json
"minecraft:skin_id": {
    "value": 1
}
```

```json
"minecraft:skin_id": {
    "value": 2
}
```

```json
"minecraft:skin_id": {
    "value": 3
}
```

```json
"minecraft:skin_id": {
    "value": 4
}
```

```json
"minecraft:skin_id": {
    "value": 5
}
```

## spawn_entity

chicken

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

## spell_effects

player

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

```json
"minecraft:spell_effects": {}
```

```json
"minecraft:spell_effects": {
    "remove_effects": "bad_omen"
}
```

zombie_villager

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

## strength

llama

```json
"minecraft:strength": {
    "value": 1,
    "max": 5
}
```

```json
"minecraft:strength": {
    "value": 2,
    "max": 5
}
```

```json
"minecraft:strength": {
    "value": 3,
    "max": 5
}
```

```json
"minecraft:strength": {
    "value": 4,
    "max": 5
}
```

```json
"minecraft:strength": {
    "value": 5,
    "max": 5
}
```

trader_llama

```json
"minecraft:strength": {
    "value": 1,
    "max": 5
}
```

```json
"minecraft:strength": {
    "value": 2,
    "max": 5
}
```

```json
"minecraft:strength": {
    "value": 3,
    "max": 5
}
```

```json
"minecraft:strength": {
    "value": 4,
    "max": 5
}
```

```json
"minecraft:strength": {
    "value": 5,
    "max": 5
}
```

## suspect_tracking

warden

```json
"minecraft:suspect_tracking": {}
```

## tameable

cat

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

## tamemount

donkey

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

## target_nearby_sensor

blaze

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

```json
"minecraft:target_nearby_sensor": {}
```

```json
"minecraft:target_nearby_sensor": {}
```

drowned

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

## teleport

enderman

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

## timer

allay

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

```json
"minecraft:timer": {
    "looping": true,
    "time": 180,
    "time_down_event": {
        "event": "find_flower_timeout"
    }
}
```

```json
"minecraft:timer": {
    "looping": false,
    "time": 180,
    "time_down_event": {
        "event": "find_hive_timeout",
        "target": "self"
    }
}
```

```json
"minecraft:timer": {
    "looping": false,
    "time": [
        5,
        20
    ],
    "randomInterval": true,
    "time_down_event": {
        "event": "find_hive_event",
        "target": "self"
    }
}
```

boat

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

```json
"minecraft:timer": {
    "looping": false,
    "time": 15,
    "time_down_event": {
        "event": "become_zombie_event"
    }
}
```

husk

```json
"minecraft:timer": {
    "looping": false,
    "time": 30,
    "time_down_event": {
        "event": "minecraft:convert_to_zombie"
    }
}
```

piglin

```json
"minecraft:timer": {
    "looping": false,
    "time": 15,
    "time_down_event": {
        "event": "become_zombie_event"
    }
}
```

piglin_brute

```json
"minecraft:timer": {
    "looping": false,
    "time": 15,
    "time_down_event": {
        "event": "become_zombie_event"
    }
}
```

player

```json
"minecraft:timer": {
    "time": [
        0.0,
        0.0
    ],
    "looping": false,
    "time_down_event": {
        "event": "minecraft:clear_add_bad_omen",
        "target": "self"
    }
}
```

pufferfish

```json
"minecraft:timer": {
    "looping": false,
    "time": 2,
    "randomInterval": false,
    "time_down_event": {
        "event": "minecraft:on_half_puff"
    }
}
```

```json
"minecraft:timer": {
    "looping": false,
    "time": 2,
    "randomInterval": false,
    "time_down_event": {
        "event": "minecraft:on_normal_puff"
    }
}
```

```json
"minecraft:timer": {
    "looping": false,
    "time": 0.01,
    "randomInterval": false,
    "time_down_event": {
        "event": "minecraft:on_full_puff"
    }
}
```

```json
"minecraft:timer": {
    "looping": false,
    "time": 3,
    "randomInterval": false,
    "time_down_event": {
        "event": "minecraft:on_deflate"
    }
}
```

ravager

```json
"minecraft:timer": {
    "looping": false,
    "time": 2,
    "time_down_event": {
        "event": "minecraft:start_roar"
    }
}
```

skeleton

```json
"minecraft:timer": {
    "looping": false,
    "time": 20,
    "time_down_event": {
        "event": "become_stray_event"
    }
}
```

wandering_trader

```json
"minecraft:timer": {
    "looping": false,
    "random_time_choices": [
        {
            "weight": 50,
            "value": 2400
        },
        {
            "weight": 50,
            "value": 3600
        }
    ],
    "time_down_event": {
        "event": "minecraft:start_despawn",
        "target": "self"
    }
}
```

zombie

```json
"minecraft:timer": {
    "looping": false,
    "time": 30,
    "time_down_event": {
        "event": "minecraft:convert_to_drowned"
    }
}
```

## trade_resupply

villager_v2

```json
"minecraft:trade_resupply": {}
```

## trade_table

villager

```json
"minecraft:trade_table": {
    "display_name": "entity.villager.farmer",
    "table": "trading/farmer_trades.json",
    "convert_trades_economy": true
}
```

```json
"minecraft:trade_table": {
    "display_name": "entity.villager.fisherman",
    "table": "trading/fisherman_trades.json",
    "convert_trades_economy": true
}
```

```json
"minecraft:trade_table": {
    "display_name": "entity.villager.shepherd",
    "table": "trading/shepherd_trades.json",
    "convert_trades_economy": true
}
```

```json
"minecraft:trade_table": {
    "display_name": "entity.villager.fletcher",
    "table": "trading/fletcher_trades.json",
    "convert_trades_economy": true
}
```

```json
"minecraft:trade_table": {
    "display_name": "entity.villager.librarian",
    "table": "trading/librarian_trades.json",
    "convert_trades_economy": true
}
```

```json
"minecraft:trade_table": {
    "display_name": "entity.villager.cartographer",
    "table": "trading/cartographer_trades.json",
    "convert_trades_economy": true
}
```

```json
"minecraft:trade_table": {
    "display_name": "entity.villager.cleric",
    "table": "trading/cleric_trades.json",
    "convert_trades_economy": true
}
```

```json
"minecraft:trade_table": {
    "display_name": "entity.villager.armor",
    "table": "trading/armorer_trades.json",
    "convert_trades_economy": true
}
```

```json
"minecraft:trade_table": {
    "display_name": "entity.villager.weapon",
    "table": "trading/weapon_smith_trades.json",
    "convert_trades_economy": true
}
```

```json
"minecraft:trade_table": {
    "display_name": "entity.villager.tool",
    "table": "trading/tool_smith_trades.json",
    "convert_trades_economy": true
}
```

```json
"minecraft:trade_table": {
    "display_name": "entity.villager.butcher",
    "table": "trading/butcher_trades.json",
    "convert_trades_economy": true
}
```

```json
"minecraft:trade_table": {
    "display_name": "entity.villager.leather",
    "table": "trading/leather_worker_trades.json",
    "convert_trades_economy": true
}
```

## trail

snow_golem

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

## transformation

hoglin

```json
"minecraft:transformation": {
    "into": "minecraft:zoglin",
    "transformation_sound": "converted_to_zombified",
    "keep_level": true
}
```

husk

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

```json
"minecraft:transformation": {
    "into": "minecraft:cow"
}
```

pig

```json
"minecraft:transformation": {
    "into": "minecraft:pig_zombie",
    "delay": 0.5
}
```

piglin

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

```json
"minecraft:transformation": {
    "into": "minecraft:zombie_pigman",
    "transformation_sound": "converted_to_zombified",
    "keep_level": true,
    "preserve_equipment": true
}
```

skeleton

```json
"minecraft:transformation": {
    "into": "minecraft:stray",
    "transformation_sound": "convert_to_stray",
    "keep_level": true,
    "drop_inventory": true,
    "preserve_equipment": true
}
```

stray

```json
"minecraft:transformation": {
    "into": "minecraft:skeleton",
    "delay": 0.5
}
```

tadpole

```json
"minecraft:transformation": {
    "into": "minecraft:frog",
    "transformation_sound": "convert_to_frog"
}
```

villager

```json
"minecraft:transformation": {
    "into": "minecraft:witch",
    "delay": 0.5
}
```

```json
"minecraft:transformation": {
    "into": "minecraft:villager_v2",
    "keep_level": true
}
```

```json
"minecraft:transformation": {
    "into": "minecraft:zombie_villager"
}
```

villager_v2

```json
"minecraft:transformation": {
    "into": "minecraft:witch",
    "delay": 0.5
}
```

```json
"minecraft:transformation": {
    "into": "minecraft:zombie_villager_v2",
    "keep_level": true
}
```

zombie

```json
"minecraft:transformation": {
    "into": "minecraft:drowned<minecraft:as_adult>",
    "transformation_sound": "convert_to_drowned",
    "drop_equipment": true,
    "delay": {
        "value": 15
    }
}
```

```json
"minecraft:transformation": {
    "into": "minecraft:drowned<minecraft:as_baby>",
    "transformation_sound": "convert_to_drowned",
    "drop_equipment": true,
    "delay": {
        "value": 15
    }
}
```

zombie_villager

```json
"minecraft:transformation": {
    "into": "minecraft:zombie_villager_v2",
    "keep_level": false
}
```

```json
"minecraft:transformation": {
    "into": "minecraft:villager",
    "begin_transform_sound": "remedy",
    "transformation_sound": "unfect",
    "delay": {
        "value": 100,
        "block_assist_chance": 0.01,
        "block_radius": 4,
        "block_chance": 0.3,
        "block_types": [
            "minecraft:bed",
            "minecraft:iron_bars"
        ]
    }
}
```

zombie_villager_v2

```json
"minecraft:transformation": {
    "into": "minecraft:villager_v2",
    "begin_transform_sound": "remedy",
    "transformation_sound": "unfect",
    "keep_level": true,
    "delay": {
        "value": 100,
        "block_assist_chance": 0.01,
        "block_radius": 4,
        "block_chance": 0.3,
        "block_types": [
            "minecraft:bed",
            "minecraft:iron_bars"
        ]
    }
}
```

## trust

fox

```json
"minecraft:trust": {}
```

## trusting

ocelot

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

## type_family

allay

```json
"minecraft:type_family": {
    "family": [
        "allay",
        "mob"
    ]
}
```

armor_stand

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

```json
"minecraft:type_family": {
    "family": [
        "axolotl",
        "mob"
    ]
}
```

bat

```json
"minecraft:type_family": {
    "family": [
        "bat",
        "mob"
    ]
}
```

bee

```json
"minecraft:type_family": {
    "family": [
        "bee",
        "mob",
        "arthropod"
    ]
}
```

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

```json
"minecraft:type_family": {
    "family": [
        "boat",
        "inanimate"
    ]
}
```

cat

```json
"minecraft:type_family": {
    "family": [
        "cat",
        "mob"
    ]
}
```

cave_spider

```json
"minecraft:type_family": {
    "family": [
        "cavespider",
        "monster",
        "arthropod",
        "mob"
    ]
}
```

chest_boat

```json
"minecraft:type_family": {
    "family": [
        "boat",
        "inanimate"
    ]
}
```

chest_minecart

```json
"minecraft:type_family": {
    "family": [
        "minecart",
        "inanimate"
    ]
}
```

chicken

```json
"minecraft:type_family": {
    "family": [
        "chicken",
        "mob"
    ]
}
```

command_block_minecart

```json
"minecraft:type_family": {
    "family": [
        "minecart",
        "inanimate"
    ]
}
```

cow

```json
"minecraft:type_family": {
    "family": [
        "cow",
        "mob"
    ]
}
```

creeper

```json
"minecraft:type_family": {
    "family": [
        "creeper",
        "monster",
        "mob"
    ]
}
```

dolphin

```json
"minecraft:type_family": {
    "family": [
        "dolphin",
        "mob"
    ]
}
```

donkey

```json
"minecraft:type_family": {
    "family": [
        "donkey",
        "mob"
    ]
}
```

drowned

```json
"minecraft:type_family": {
    "family": [
        "drowned",
        "zombie",
        "undead",
        "monster",
        "mob"
    ]
}
```

elder_guardian

```json
"minecraft:type_family": {
    "family": [
        "guardian_elder",
        "monster",
        "mob"
    ]
}
```

enderman

```json
"minecraft:type_family": {
    "family": [
        "enderman",
        "monster",
        "mob"
    ]
}
```

endermite

```json
"minecraft:type_family": {
    "family": [
        "endermite",
        "arthropod",
        "monster",
        "lightweight",
        "mob"
    ]
}
```

ender_dragon

```json
"minecraft:type_family": {
    "family": [
        "dragon",
        "mob"
    ]
}
```

evocation_illager

```json
"minecraft:type_family": {
    "family": [
        "evocation_illager",
        "monster",
        "illager",
        "mob"
    ]
}
```

cod

```json
"minecraft:type_family": {
    "family": [
        "cod",
        "fish"
    ]
}
```

fox

```json
"minecraft:type_family": {
    "family": [
        "fox",
        "lightweight",
        "mob"
    ]
}
```

frog

```json
"minecraft:type_family": {
    "family": [
        "frog",
        "mob"
    ]
}
```

ghast

```json
"minecraft:type_family": {
    "family": [
        "ghast",
        "monster",
        "mob"
    ]
}
```

glow_squid

```json
"minecraft:type_family": {
    "family": [
        "squid",
        "mob"
    ]
}
```

goat

```json
"minecraft:type_family": {
    "family": [
        "goat",
        "animal"
    ]
}
```

guardian

```json
"minecraft:type_family": {
    "family": [
        "guardian",
        "monster",
        "mob"
    ]
}
```

hoglin

```json
"minecraft:type_family": {
    "family": [
        "hoglin",
        "hoglin_baby",
        "mob"
    ]
}
```

```json
"minecraft:type_family": {
    "family": [
        "hoglin",
        "hoglin_adult",
        "mob"
    ]
}
```

```json
"minecraft:type_family": {
    "family": [
        "hoglin",
        "hoglin_adult",
        "hoglin_huntable",
        "mob"
    ]
}
```

hopper_minecart

```json
"minecraft:type_family": {
    "family": [
        "minecart",
        "inanimate"
    ]
}
```

horse

```json
"minecraft:type_family": {
    "family": [
        "horse",
        "mob"
    ]
}
```

husk

```json
"minecraft:type_family": {
    "family": [
        "husk",
        "zombie",
        "undead",
        "monster",
        "mob"
    ]
}
```

iron_golem

```json
"minecraft:type_family": {
    "family": [
        "irongolem",
        "mob"
    ]
}
```

lightning_bolt

```json
"minecraft:type_family": {
    "family": [
        "lightning"
    ]
}
```

llama

```json
"minecraft:type_family": {
    "family": [
        "llama",
        "mob"
    ]
}
```

magma_cube

```json
"minecraft:type_family": {
    "family": [
        "magmacube",
        "monster",
        "mob"
    ]
}
```

minecart

```json
"minecraft:type_family": {
    "family": [
        "minecart",
        "inanimate"
    ]
}
```

mooshroom

```json
"minecraft:type_family": {
    "family": [
        "mushroomcow",
        "mob"
    ]
}
```

mule

```json
"minecraft:type_family": {
    "family": [
        "mule",
        "mob"
    ]
}
```

npc

```json
"minecraft:type_family": {
    "family": [
        "npc",
        "mob"
    ]
}
```

ocelot

```json
"minecraft:type_family": {
    "family": [
        "ocelot",
        "mob"
    ]
}
```

panda

```json
"minecraft:type_family": {
    "family": [
        "panda"
    ]
}
```

```json
"minecraft:type_family": {
    "family": [
        "panda",
        "panda_aggressive",
        "mob"
    ]
}
```

parrot

```json
"minecraft:type_family": {
    "family": [
        "parrot_wild",
        "mob"
    ]
}
```

```json
"minecraft:type_family": {
    "family": [
        "parrot_tame",
        "mob"
    ]
}
```

phantom

```json
"minecraft:type_family": {
    "family": [
        "phantom",
        "undead",
        "monster",
        "mob"
    ]
}
```

pig

```json
"minecraft:type_family": {
    "family": [
        "pig",
        "mob"
    ]
}
```

piglin

```json
"minecraft:type_family": {
    "family": [
        "piglin",
        "piglin_hunter",
        "monster"
    ]
}
```

```json
"minecraft:type_family": {
    "family": [
        "piglin",
        "monster"
    ]
}
```

piglin_brute

```json
"minecraft:type_family": {
    "family": [
        "piglin",
        "adult_piglin",
        "piglin_brute",
        "monster"
    ]
}
```

pillager

```json
"minecraft:type_family": {
    "family": [
        "pillager",
        "monster",
        "illager",
        "mob"
    ]
}
```

player

```json
"minecraft:type_family": {
    "family": [
        "player"
    ]
}
```

polar_bear

```json
"minecraft:type_family": {
    "family": [
        "polarbear",
        "mob"
    ]
}
```

pufferfish

```json
"minecraft:type_family": {
    "family": [
        "pufferfish",
        "fish"
    ]
}
```

rabbit

```json
"minecraft:type_family": {
    "family": [
        "rabbit",
        "lightweight",
        "mob"
    ]
}
```

ravager

```json
"minecraft:type_family": {
    "family": [
        "monster",
        "ravager",
        "mob"
    ]
}
```

salmon

```json
"minecraft:type_family": {
    "family": [
        "salmon",
        "fish"
    ]
}
```

sheep

```json
"minecraft:type_family": {
    "family": [
        "sheep",
        "mob"
    ]
}
```

shulker

```json
"minecraft:type_family": {
    "family": [
        "shulker",
        "monster",
        "mob"
    ]
}
```

silverfish

```json
"minecraft:type_family": {
    "family": [
        "silverfish",
        "monster",
        "lightweight",
        "mob",
        "arthropod"
    ]
}
```

skeleton

```json
"minecraft:type_family": {
    "family": [
        "skeleton",
        "undead",
        "monster",
        "mob"
    ]
}
```

skeleton_horse

```json
"minecraft:type_family": {
    "family": [
        "skeletonhorse",
        "undead",
        "mob"
    ]
}
```

slime

```json
"minecraft:type_family": {
    "family": [
        "slime",
        "monster",
        "mob"
    ]
}
```

snow_golem

```json
"minecraft:type_family": {
    "family": [
        "snowgolem",
        "mob"
    ]
}
```

spider

```json
"minecraft:type_family": {
    "family": [
        "spider",
        "monster",
        "mob",
        "arthropod"
    ]
}
```

squid

```json
"minecraft:type_family": {
    "family": [
        "squid",
        "mob"
    ]
}
```

stray

```json
"minecraft:type_family": {
    "family": [
        "stray",
        "skeleton",
        "monster",
        "mob",
        "undead"
    ]
}
```

strider

```json
"minecraft:type_family": {
    "family": [
        "strider",
        "mob"
    ]
}
```

```json
"minecraft:type_family": {
    "family": [
        "strider",
        "strider_baby",
        "mob"
    ]
}
```

```json
"minecraft:type_family": {
    "family": [
        "strider",
        "strider_adult",
        "mob"
    ]
}
```

tadpole

```json
"minecraft:type_family": {
    "family": [
        "tadpole",
        "mob"
    ]
}
```

tnt

```json
"minecraft:type_family": {
    "family": [
        "tnt",
        "inanimate"
    ]
}
```

tnt_minecart

```json
"minecraft:type_family": {
    "family": [
        "minecart",
        "inanimate"
    ]
}
```

trader_llama

```json
"minecraft:type_family": {
    "family": [
        "trader_llama",
        "llama",
        "mob"
    ]
}
```

tripod_camera

```json
"minecraft:type_family": {
    "family": [
        "tripodcamera",
        "inanimate",
        "mob"
    ]
}
```

tropicalfish

```json
"minecraft:type_family": {
    "family": [
        "tropicalfish",
        "fish"
    ]
}
```

turtle

```json
"minecraft:type_family": {
    "family": [
        "turtle",
        "baby_turtle",
        "mob"
    ]
}
```

```json
"minecraft:type_family": {
    "family": [
        "turtle",
        "mob"
    ]
}
```

vex

```json
"minecraft:type_family": {
    "family": [
        "vex",
        "monster",
        "mob"
    ]
}
```

villager

```json
"minecraft:type_family": {
    "family": [
        "villager",
        "mob"
    ]
}
```

```json
"minecraft:type_family": {
    "family": [
        "villager",
        "peasant",
        "farmer",
        "mob"
    ]
}
```

```json
"minecraft:type_family": {
    "family": [
        "villager",
        "peasant",
        "fisherman",
        "mob"
    ]
}
```

```json
"minecraft:type_family": {
    "family": [
        "villager",
        "peasant",
        "shepherd",
        "mob"
    ]
}
```

```json
"minecraft:type_family": {
    "family": [
        "villager",
        "peasant",
        "fletcher",
        "mob"
    ]
}
```

```json
"minecraft:type_family": {
    "family": [
        "villager",
        "librarian",
        "mob"
    ]
}
```

```json
"minecraft:type_family": {
    "family": [
        "villager",
        "cartographer",
        "mob"
    ]
}
```

```json
"minecraft:type_family": {
    "family": [
        "villager",
        "priest",
        "cleric",
        "mob"
    ]
}
```

```json
"minecraft:type_family": {
    "family": [
        "villager",
        "blacksmith",
        "armorer",
        "mob"
    ]
}
```

```json
"minecraft:type_family": {
    "family": [
        "villager",
        "blacksmith",
        "weaponsmith",
        "mob"
    ]
}
```

```json
"minecraft:type_family": {
    "family": [
        "villager",
        "blacksmith",
        "toolsmith",
        "mob"
    ]
}
```

```json
"minecraft:type_family": {
    "family": [
        "villager",
        "artisan",
        "butcher",
        "mob"
    ]
}
```

```json
"minecraft:type_family": {
    "family": [
        "villager",
        "artisan",
        "leatherworker",
        "mob"
    ]
}
```

villager_v2

```json
"minecraft:type_family": {
    "family": [
        "villager",
        "mob"
    ]
}
```

```json
"minecraft:type_family": {
    "family": [
        "villager",
        "peasant",
        "unskilled",
        "mob"
    ]
}
```

```json
"minecraft:type_family": {
    "family": [
        "villager",
        "peasant",
        "farmer",
        "mob"
    ]
}
```

```json
"minecraft:type_family": {
    "family": [
        "villager",
        "peasant",
        "fisherman",
        "mob"
    ]
}
```

```json
"minecraft:type_family": {
    "family": [
        "villager",
        "peasant",
        "shepherd",
        "mob"
    ]
}
```

```json
"minecraft:type_family": {
    "family": [
        "villager",
        "peasant",
        "fletcher",
        "mob"
    ]
}
```

```json
"minecraft:type_family": {
    "family": [
        "villager",
        "librarian",
        "mob"
    ]
}
```

```json
"minecraft:type_family": {
    "family": [
        "villager",
        "cartographer",
        "mob"
    ]
}
```

```json
"minecraft:type_family": {
    "family": [
        "villager",
        "priest",
        "cleric",
        "mob"
    ]
}
```

```json
"minecraft:type_family": {
    "family": [
        "villager",
        "blacksmith",
        "armorer",
        "mob"
    ]
}
```

```json
"minecraft:type_family": {
    "family": [
        "villager",
        "blacksmith",
        "weaponsmith",
        "mob"
    ]
}
```

```json
"minecraft:type_family": {
    "family": [
        "villager",
        "blacksmith",
        "toolsmith",
        "mob"
    ]
}
```

```json
"minecraft:type_family": {
    "family": [
        "villager",
        "artisan",
        "butcher",
        "mob"
    ]
}
```

```json
"minecraft:type_family": {
    "family": [
        "villager",
        "artisan",
        "leatherworker",
        "mob"
    ]
}
```

```json
"minecraft:type_family": {
    "family": [
        "villager",
        "artisan",
        "stone_mason",
        "mob"
    ]
}
```

```json
"minecraft:type_family": {
    "family": [
        "villager",
        "peasant",
        "nitwit",
        "mob"
    ]
}
```

vindicator

```json
"minecraft:type_family": {
    "family": [
        "vindicator",
        "monster",
        "illager",
        "mob"
    ]
}
```

wandering_trader

```json
"minecraft:type_family": {
    "family": [
        "wandering_trader",
        "mob"
    ]
}
```

```json
"minecraft:type_family": {
    "family": [
        "wandering_trader",
        "wandering_trader_despawning",
        "mob"
    ]
}
```

warden

```json
"minecraft:type_family": {
    "family": [
        "warden",
        "monster",
        "mob"
    ]
}
```

witch

```json
"minecraft:type_family": {
    "family": [
        "witch",
        "monster",
        "mob"
    ]
}
```

wither

```json
"minecraft:type_family": {
    "family": [
        "wither",
        "skeleton",
        "monster",
        "undead",
        "mob"
    ]
}
```

wither_skeleton

```json
"minecraft:type_family": {
    "family": [
        "wither",
        "monster",
        "undead",
        "skeleton",
        "mob"
    ]
}
```

wolf

```json
"minecraft:type_family": {
    "family": [
        "wolf",
        "mob"
    ]
}
```

xp_orb

```json
"minecraft:type_family": {
    "family": [
        "inanimate"
    ]
}
```

zoglin

```json
"minecraft:type_family": {
    "family": [
        "zoglin",
        "zoglin_baby",
        "undead",
        "mob"
    ]
}
```

```json
"minecraft:type_family": {
    "family": [
        "zoglin",
        "zoglin_adult",
        "undead",
        "mob"
    ]
}
```

zombie

```json
"minecraft:type_family": {
    "family": [
        "zombie",
        "undead",
        "monster",
        "mob"
    ]
}
```

zombie_horse

```json
"minecraft:type_family": {
    "family": [
        "zombiehorse",
        "undead",
        "mob"
    ]
}
```

zombie_pigman

```json
"minecraft:type_family": {
    "family": [
        "zombie_pigman",
        "undead",
        "monster",
        "mob"
    ]
}
```

zombie_villager

```json
"minecraft:type_family": {
    "family": [
        "farmer",
        "zombie",
        "zombie_villager",
        "undead",
        "monster",
        "mob"
    ]
}
```

```json
"minecraft:type_family": {
    "family": [
        "fisherman",
        "zombie_villager",
        "zombie",
        "undead",
        "monster",
        "mob"
    ]
}
```

```json
"minecraft:type_family": {
    "family": [
        "shepherd",
        "zombie_villager",
        "zombie",
        "undead",
        "monster",
        "mob"
    ]
}
```

```json
"minecraft:type_family": {
    "family": [
        "fletcher",
        "zombie_villager",
        "zombie",
        "undead",
        "monster",
        "mob"
    ]
}
```

```json
"minecraft:type_family": {
    "family": [
        "librarian",
        "zombie_villager",
        "zombie",
        "undead",
        "monster",
        "mob"
    ]
}
```

```json
"minecraft:type_family": {
    "family": [
        "cartographer",
        "zombie_villager",
        "zombie",
        "undead",
        "monster",
        "mob"
    ]
}
```

```json
"minecraft:type_family": {
    "family": [
        "cleric",
        "zombie_villager",
        "zombie",
        "undead",
        "monster",
        "mob"
    ]
}
```

```json
"minecraft:type_family": {
    "family": [
        "armorer",
        "zombie_villager",
        "zombie",
        "undead",
        "monster",
        "mob"
    ]
}
```

```json
"minecraft:type_family": {
    "family": [
        "weaponsmith",
        "zombie_villager",
        "zombie",
        "undead",
        "monster",
        "mob"
    ]
}
```

```json
"minecraft:type_family": {
    "family": [
        "toolsmith",
        "zombie_villager",
        "zombie",
        "undead",
        "monster",
        "mob"
    ]
}
```

```json
"minecraft:type_family": {
    "family": [
        "butcher",
        "zombie_villager",
        "zombie",
        "undead",
        "monster",
        "mob"
    ]
}
```

```json
"minecraft:type_family": {
    "family": [
        "leatherworker",
        "zombie_villager",
        "zombie",
        "undead",
        "monster",
        "mob"
    ]
}
```

zombie_villager_v2

```json
"minecraft:type_family": {
    "family": [
        "unskilled",
        "zombie",
        "zombie_villager",
        "undead",
        "monster",
        "mob"
    ]
}
```

```json
"minecraft:type_family": {
    "family": [
        "nitwit",
        "zombie",
        "zombie_villager",
        "undead",
        "monster",
        "mob"
    ]
}
```

```json
"minecraft:type_family": {
    "family": [
        "farmer",
        "zombie",
        "zombie_villager",
        "undead",
        "monster",
        "mob"
    ]
}
```

```json
"minecraft:type_family": {
    "family": [
        "fisherman",
        "zombie_villager",
        "zombie",
        "undead",
        "monster",
        "mob"
    ]
}
```

```json
"minecraft:type_family": {
    "family": [
        "shepherd",
        "zombie_villager",
        "zombie",
        "undead",
        "monster",
        "mob"
    ]
}
```

```json
"minecraft:type_family": {
    "family": [
        "fletcher",
        "zombie_villager",
        "zombie",
        "undead",
        "monster",
        "mob"
    ]
}
```

```json
"minecraft:type_family": {
    "family": [
        "librarian",
        "zombie_villager",
        "zombie",
        "undead",
        "monster",
        "mob"
    ]
}
```

```json
"minecraft:type_family": {
    "family": [
        "cartographer",
        "zombie_villager",
        "zombie",
        "undead",
        "monster",
        "mob"
    ]
}
```

```json
"minecraft:type_family": {
    "family": [
        "cleric",
        "zombie_villager",
        "zombie",
        "undead",
        "monster",
        "mob"
    ]
}
```

```json
"minecraft:type_family": {
    "family": [
        "armorer",
        "zombie_villager",
        "zombie",
        "undead",
        "monster",
        "mob"
    ]
}
```

```json
"minecraft:type_family": {
    "family": [
        "weaponsmith",
        "zombie_villager",
        "zombie",
        "undead",
        "monster",
        "mob"
    ]
}
```

```json
"minecraft:type_family": {
    "family": [
        "toolsmith",
        "zombie_villager",
        "zombie",
        "undead",
        "monster",
        "mob"
    ]
}
```

```json
"minecraft:type_family": {
    "family": [
        "butcher",
        "zombie_villager",
        "zombie",
        "undead",
        "monster",
        "mob"
    ]
}
```

```json
"minecraft:type_family": {
    "family": [
        "leatherworker",
        "zombie_villager",
        "zombie",
        "undead",
        "monster",
        "mob"
    ]
}
```

```json
"minecraft:type_family": {
    "family": [
        "stone_mason",
        "zombie_villager",
        "zombie",
        "undead",
        "monster",
        "mob"
    ]
}
```

## underwater_movement

axolotl

```json
"minecraft:underwater_movement": {
    "value": 0.2
}
```

dolphin

```json
"minecraft:underwater_movement": {
    "value": 0.15
}
```

drowned

```json
"minecraft:underwater_movement": {
    "value": 0.06
}
```

```json
"minecraft:underwater_movement": {
    "value": 0.08
}
```

elder_guardian

```json
"minecraft:underwater_movement": {
    "value": 0.3
}
```

cod

```json
"minecraft:underwater_movement": {
    "value": 0.1
}
```

frog

```json
"minecraft:underwater_movement": {
    "value": 0.15
}
```

guardian

```json
"minecraft:underwater_movement": {
    "value": 0.12
}
```

pufferfish

```json
"minecraft:underwater_movement": {
    "value": 0.13
}
```

salmon

```json
"minecraft:underwater_movement": {
    "value": 0.12
}
```

skeleton_horse

```json
"minecraft:underwater_movement": {
    "value": 0.08
}
```

tadpole

```json
"minecraft:underwater_movement": {
    "value": 0.1
}
```

tropicalfish

```json
"minecraft:underwater_movement": {
    "value": 0.12
}
```

turtle

```json
"minecraft:underwater_movement": {
    "value": 0.06
}
```

```json
"minecraft:underwater_movement": {
    "value": 0.12
}
```

## variable_max_auto_step

enderman

```json
"minecraft:variable_max_auto_step": {
    "base_value": 1.0625,
    "jump_prevented_value": 0.5625
}
```

## variant

axolotl

```json
"minecraft:variant": {
    "value": 0
}
```

```json
"minecraft:variant": {
    "value": 1
}
```

```json
"minecraft:variant": {
    "value": 2
}
```

```json
"minecraft:variant": {
    "value": 3
}
```

```json
"minecraft:variant": {
    "value": 4
}
```

cat

```json
"minecraft:variant": {
    "value": 0
}
```

```json
"minecraft:variant": {
    "value": 1
}
```

```json
"minecraft:variant": {
    "value": 2
}
```

```json
"minecraft:variant": {
    "value": 3
}
```

```json
"minecraft:variant": {
    "value": 4
}
```

```json
"minecraft:variant": {
    "value": 5
}
```

```json
"minecraft:variant": {
    "value": 6
}
```

```json
"minecraft:variant": {
    "value": 7
}
```

```json
"minecraft:variant": {
    "value": 8
}
```

```json
"minecraft:variant": {
    "value": 9
}
```

```json
"minecraft:variant": {
    "value": 10
}
```

fox

```json
"minecraft:variant": {
    "value": 0
}
```

```json
"minecraft:variant": {
    "value": 1
}
```

frog

```json
"minecraft:variant": {
    "value": 0
}
```

```json
"minecraft:variant": {
    "value": 1
}
```

```json
"minecraft:variant": {
    "value": 2
}
```

goat

```json
"minecraft:variant": {
    "value": 0
}
```

```json
"minecraft:variant": {
    "value": 1
}
```

horse

```json
"minecraft:variant": {
    "value": 0
}
```

```json
"minecraft:variant": {
    "value": 1
}
```

```json
"minecraft:variant": {
    "value": 2
}
```

```json
"minecraft:variant": {
    "value": 3
}
```

```json
"minecraft:variant": {
    "value": 4
}
```

```json
"minecraft:variant": {
    "value": 5
}
```

```json
"minecraft:variant": {
    "value": 6
}
```

husk

```json
"minecraft:variant": {
    "value": 2
}
```

llama

```json
"minecraft:variant": {
    "value": 0
}
```

```json
"minecraft:variant": {
    "value": 1
}
```

```json
"minecraft:variant": {
    "value": 2
}
```

```json
"minecraft:variant": {
    "value": 3
}
```

magma_cube

```json
"minecraft:variant": {
    "value": 4
}
```

```json
"minecraft:variant": {
    "value": 2
}
```

```json
"minecraft:variant": {
    "value": 1
}
```

mooshroom

```json
"minecraft:variant": {
    "value": 0
}
```

```json
"minecraft:variant": {
    "value": 1
}
```

panda

```json
"minecraft:variant": {
    "value": 0
}
```

```json
"minecraft:variant": {
    "value": 1
}
```

```json
"minecraft:variant": {
    "value": 2
}
```

```json
"minecraft:variant": {
    "value": 3
}
```

```json
"minecraft:variant": {
    "value": 4
}
```

```json
"minecraft:variant": {
    "value": 5
}
```

```json
"minecraft:variant": {
    "value": 6
}
```

parrot

```json
"minecraft:variant": {
    "value": 0
}
```

```json
"minecraft:variant": {
    "value": 1
}
```

```json
"minecraft:variant": {
    "value": 2
}
```

```json
"minecraft:variant": {
    "value": 3
}
```

```json
"minecraft:variant": {
    "value": 4
}
```

piglin

```json
"minecraft:variant": {
    "value": 0
}
```

```json
"minecraft:variant": {
    "value": 1
}
```

piglin_brute

```json
"minecraft:variant": {
    "value": 1
}
```

pillager

```json
"minecraft:variant": {
    "value": 0
}
```

```json
"minecraft:variant": {
    "value": 1
}
```

```json
"minecraft:variant": {
    "value": 1
}
```

pufferfish

```json
"minecraft:variant": {
    "value": 0
}
```

```json
"minecraft:variant": {
    "value": 1
}
```

```json
"minecraft:variant": {
    "value": 1
}
```

```json
"minecraft:variant": {
    "value": 2
}
```

rabbit

```json
"minecraft:variant": {
    "value": 0
}
```

```json
"minecraft:variant": {
    "value": 1
}
```

```json
"minecraft:variant": {
    "value": 2
}
```

```json
"minecraft:variant": {
    "value": 3
}
```

```json
"minecraft:variant": {
    "value": 4
}
```

```json
"minecraft:variant": {
    "value": 5
}
```

shulker

```json
"minecraft:variant": {
    "value": 5
}
```

```json
"minecraft:variant": {
    "value": 0
}
```

```json
"minecraft:variant": {
    "value": 4
}
```

```json
"minecraft:variant": {
    "value": 3
}
```

```json
"minecraft:variant": {
    "value": 6
}
```

```json
"minecraft:variant": {
    "value": 8
}
```

```json
"minecraft:variant": {
    "value": 2
}
```

```json
"minecraft:variant": {
    "value": 12
}
```

```json
"minecraft:variant": {
    "value": 10
}
```

```json
"minecraft:variant": {
    "value": 13
}
```

```json
"minecraft:variant": {
    "value": 14
}
```

```json
"minecraft:variant": {
    "value": 9
}
```

```json
"minecraft:variant": {
    "value": 1
}
```

```json
"minecraft:variant": {
    "value": 7
}
```

```json
"minecraft:variant": {
    "value": 16
}
```

```json
"minecraft:variant": {
    "value": 15
}
```

```json
"minecraft:variant": {
    "value": 11
}
```

slime

```json
"minecraft:variant": {
    "value": 4
}
```

```json
"minecraft:variant": {
    "value": 2
}
```

```json
"minecraft:variant": {
    "value": 1
}
```

trader_llama

```json
"minecraft:variant": {
    "value": 0
}
```

```json
"minecraft:variant": {
    "value": 1
}
```

```json
"minecraft:variant": {
    "value": 2
}
```

```json
"minecraft:variant": {
    "value": 3
}
```

tropicalfish

```json
"minecraft:variant": {
    "value": 0
}
```

```json
"minecraft:variant": {
    "value": 1
}
```

```json
"minecraft:variant": {
    "value": 1
}
```

```json
"minecraft:variant": {
    "value": 1
}
```

```json
"minecraft:variant": {
    "value": 0
}
```

```json
"minecraft:variant": {
    "value": 0
}
```

```json
"minecraft:variant": {
    "value": 0
}
```

```json
"minecraft:variant": {
    "value": 0
}
```

```json
"minecraft:variant": {
    "value": 0
}
```

```json
"minecraft:variant": {
    "value": 1
}
```

```json
"minecraft:variant": {
    "value": 1
}
```

```json
"minecraft:variant": {
    "value": 0
}
```

```json
"minecraft:variant": {
    "value": 1
}
```

```json
"minecraft:variant": {
    "value": 1
}
```

```json
"minecraft:variant": {
    "value": 0
}
```

```json
"minecraft:variant": {
    "value": 0
}
```

```json
"minecraft:variant": {
    "value": 1
}
```

```json
"minecraft:variant": {
    "value": 0
}
```

```json
"minecraft:variant": {
    "value": 1
}
```

```json
"minecraft:variant": {
    "value": 1
}
```

```json
"minecraft:variant": {
    "value": 0
}
```

```json
"minecraft:variant": {
    "value": 0
}
```

```json
"minecraft:variant": {
    "value": 1
}
```

```json
"minecraft:variant": {
    "value": 0
}
```

villager

```json
"minecraft:variant": {
    "value": 0
}
```

```json
"minecraft:variant": {
    "value": 0
}
```

```json
"minecraft:variant": {
    "value": 0
}
```

```json
"minecraft:variant": {
    "value": 0
}
```

```json
"minecraft:variant": {
    "value": 1
}
```

```json
"minecraft:variant": {
    "value": 1
}
```

```json
"minecraft:variant": {
    "value": 2
}
```

```json
"minecraft:variant": {
    "value": 3
}
```

```json
"minecraft:variant": {
    "value": 3
}
```

```json
"minecraft:variant": {
    "value": 3
}
```

```json
"minecraft:variant": {
    "value": 4
}
```

```json
"minecraft:variant": {
    "value": 4
}
```

villager_v2

```json
"minecraft:variant": {
    "value": 0
}
```

```json
"minecraft:variant": {
    "value": 1
}
```

```json
"minecraft:variant": {
    "value": 2
}
```

```json
"minecraft:variant": {
    "value": 3
}
```

```json
"minecraft:variant": {
    "value": 4
}
```

```json
"minecraft:variant": {
    "value": 5
}
```

```json
"minecraft:variant": {
    "value": 6
}
```

```json
"minecraft:variant": {
    "value": 7
}
```

```json
"minecraft:variant": {
    "value": 8
}
```

```json
"minecraft:variant": {
    "value": 9
}
```

```json
"minecraft:variant": {
    "value": 10
}
```

```json
"minecraft:variant": {
    "value": 11
}
```

```json
"minecraft:variant": {
    "value": 12
}
```

```json
"minecraft:variant": {
    "value": 13
}
```

```json
"minecraft:variant": {
    "value": 14
}
```

vindicator

```json
"minecraft:variant": {
    "value": 0
}
```

```json
"minecraft:variant": {
    "value": 1
}
```

```json
"minecraft:variant": {
    "value": 1
}
```

zombie_villager

```json
"minecraft:variant": {
    "value": 0
}
```

```json
"minecraft:variant": {
    "value": 0
}
```

```json
"minecraft:variant": {
    "value": 0
}
```

```json
"minecraft:variant": {
    "value": 0
}
```

```json
"minecraft:variant": {
    "value": 1
}
```

```json
"minecraft:variant": {
    "value": 1
}
```

```json
"minecraft:variant": {
    "value": 2
}
```

```json
"minecraft:variant": {
    "value": 3
}
```

```json
"minecraft:variant": {
    "value": 3
}
```

```json
"minecraft:variant": {
    "value": 3
}
```

```json
"minecraft:variant": {
    "value": 4
}
```

```json
"minecraft:variant": {
    "value": 4
}
```

zombie_villager_v2

```json
"minecraft:variant": {
    "value": 0
}
```

```json
"minecraft:variant": {
    "value": 0
}
```

```json
"minecraft:variant": {
    "value": 0
}
```

```json
"minecraft:variant": {
    "value": 0
}
```

```json
"minecraft:variant": {
    "value": 0
}
```

```json
"minecraft:variant": {
    "value": 0
}
```

```json
"minecraft:variant": {
    "value": 0
}
```

```json
"minecraft:variant": {
    "value": 0
}
```

```json
"minecraft:variant": {
    "value": 0
}
```

```json
"minecraft:variant": {
    "value": 0
}
```

```json
"minecraft:variant": {
    "value": 0
}
```

```json
"minecraft:variant": {
    "value": 0
}
```

```json
"minecraft:variant": {
    "value": 0
}
```

```json
"minecraft:variant": {
    "value": 0
}
```

```json
"minecraft:variant": {
    "value": 0
}
```

## vibration_damper

warden

```json
"minecraft:vibration_damper": {}
```

## vibration_listener

allay

```json
"minecraft:vibration_listener": {}
```

warden

```json
"minecraft:vibration_listener": {}
```

## water_movement

panda

```json
"minecraft:water_movement": {
    "drag_factor": 0.98
}
```

polar_bear

```json
"minecraft:water_movement": {
    "drag_factor": 0.98
}
```

turtle

```json
"minecraft:water_movement": {
    "drag_factor": 0.9
}
```

