---
title: Vanilla Usage Components
category: Documentation
---

This documentation is stripped from the vanilla files using an [automated script](https://github.com/Bedrock-OSS/bedrock-harvester). If there is an issue, you can tell us about it in [Bedrock OSS](https://discord.gg/XjV87YN) Discord server. Please not that examples are shown from not more than 8 files to keep the page fast to load.

## addrider

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Aaddrider)</small>

<Spoiler title="Show">

#### cave_spider

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/cave_spider.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:addrider": {
    "entity_type": "minecraft:skeleton"
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:addrider": {
    "entity_type": "minecraft:skeleton.stray"
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:addrider": {
    "entity_type": "minecraft:skeleton.wither"
}
```

#### ravager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/ravager.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:addrider": {
    "entity_type": "minecraft:pillager"
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:addrider": {
    "entity_type": "minecraft:pillager",
    "spawn_event": "minecraft:spawn_for_raid"
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:addrider": {
    "entity_type": "minecraft:evocation_illager",
    "spawn_event": "minecraft:spawn_for_raid"
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:addrider": {
    "entity_type": "minecraft:pillager",
    "spawn_event": "minecraft:spawn_as_illager_captain"
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:addrider": {
    "entity_type": "minecraft:vindicator"
}
```

</Spoiler>

## admire_item

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Aadmire_item)</small>

<Spoiler title="Show">

#### piglin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/piglin.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:admire_item": {
    "duration": 8,
    "cooldown_after_being_attacked": 20
}
```

</Spoiler>

## ageable

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Aageable)</small>

<Spoiler title="Show">

#### axolotl

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/axolotl.json)</small>

<CodeHeader></CodeHeader>

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

#### bee

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/bee.json)</small>

<CodeHeader></CodeHeader>

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
        "minecraft:azalea_leaves_flowered"
    ],
    "grow_up": {
        "event": "minecraft:ageable_grow_up",
        "target": "self"
    }
}
```

#### cat

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/cat.json)</small>

<CodeHeader></CodeHeader>

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

#### chicken

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/chicken.json)</small>

<CodeHeader></CodeHeader>

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

#### cow

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/cow.json)</small>

<CodeHeader></CodeHeader>

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

#### dolphin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/dolphin.json)</small>

<CodeHeader></CodeHeader>

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

#### donkey

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/donkey.json)</small>

<CodeHeader></CodeHeader>

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

#### fox

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/fox.json)</small>

<CodeHeader></CodeHeader>

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

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Aambient_sound_interval)</small>

<Spoiler title="Show">

#### bee

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/bee.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:ambient_sound_interval": {
    "event_name": "ambient.pollinate",
    "range": 3.0,
    "value": 2.0
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:ambient_sound_interval": {
    "event_name": "ambient",
    "range": 0.0,
    "value": 0.0
}
```

#### evocation_illager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/evocation_illager.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:ambient_sound_interval": {
    "value": 2.0,
    "range": 4.0,
    "event_name": "ambient.in.raid"
}
```

#### fox

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/fox.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:ambient_sound_interval": {
    "event_name": "ambient"
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:ambient_sound_interval": {
    "event_name": "sleep"
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:ambient_sound_interval": {
    "event_name": "screech",
    "value": 80,
    "range": 160
}
```

#### pillager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/pillager.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:ambient_sound_interval": {
    "value": 2.0,
    "range": 4.0,
    "event_name": "ambient.in.raid"
}
```

#### ravager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/ravager.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:ambient_sound_interval": {
    "value": 4.0,
    "range": 8.0,
    "event_name": "ambient.in.raid"
}
```

</Spoiler>

## angry

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Aangry)</small>

<Spoiler title="Show">

#### bee

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/bee.json)</small>

<CodeHeader></CodeHeader>

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

#### cave_spider

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/cave_spider.json)</small>

<CodeHeader></CodeHeader>

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

#### dolphin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/dolphin.json)</small>

<CodeHeader></CodeHeader>

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

#### enderman

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/enderman.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:angry": {
    "duration": 25,
    "calm_event": {
        "event": "minecraft:on_calm",
        "target": "self"
    }
}
```

#### hoglin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/hoglin.json)</small>

<CodeHeader></CodeHeader>

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

#### llama

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/llama.json)</small>

<CodeHeader></CodeHeader>

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

<CodeHeader></CodeHeader>

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

<CodeHeader></CodeHeader>

```json
"minecraft:angry": {
    "duration": 10,
    "calm_event": {
        "event": "minecraft:on_calm",
        "target": "self"
    }
}
```

</Spoiler>

## annotation.break_door

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Aannotation.break_door)</small>

<Spoiler title="Show">

#### drowned

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/drowned.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:annotation.break_door": {}
```

#### husk

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/husk.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:annotation.break_door": {}
```

#### vindicator

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/vindicator.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:annotation.break_door": {
    "break_time": 30,
    "min_difficulty": "normal"
}
```

#### zombie

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:annotation.break_door": {}
```

#### zombie_villager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie_villager.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:annotation.break_door": {}
```

#### zombie_villager_v2

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie_villager_v2.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:annotation.break_door": {}
```

</Spoiler>

## annotation.open_door

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Aannotation.open_door)</small>

<Spoiler title="Show">

#### piglin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/piglin.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:annotation.open_door": {}
```

#### piglin_brute

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/piglin_brute.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:annotation.open_door": {}
```

#### villager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/villager.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:annotation.open_door": {}
```

#### villager_v2

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/villager_v2.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:annotation.open_door": {}
```

</Spoiler>

## area_attack

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Aarea_attack)</small>

<Spoiler title="Show">

#### pufferfish

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/pufferfish.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:area_attack": {
    "damage_range": 0.2,
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

</Spoiler>

## attack

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Aattack)</small>

<Spoiler title="Show">

#### axolotl

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/axolotl.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:attack": {
    "damage": 2
}
```

#### bee

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/bee.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:attack": {
    "damage": 2
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:attack": {
    "damage": 2,
    "effect_name": "poison",
    "effect_duration": 10
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:attack": {
    "damage": 2,
    "effect_name": "poison",
    "effect_duration": 18
}
```

#### blaze

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/blaze.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:attack": {
    "damage": 6
}
```

#### cave_spider

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/cave_spider.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:attack": {
    "damage": 2,
    "effect_name": "poison",
    "effect_duration": 0
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:attack": {
    "damage": 2,
    "effect_name": "poison",
    "effect_duration": 7
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:attack": {
    "damage": 2,
    "effect_name": "poison",
    "effect_duration": 15
}
```

</Spoiler>

## attack_cooldown

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Aattack_cooldown)</small>

<Spoiler title="Show">

#### axolotl

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/axolotl.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:attack_cooldown": {
    "attack_cooldown_time": 120.0,
    "attack_cooldown_complete_event": {
        "event": "attack_cooldown_complete_event",
        "target": "self"
    }
}
```

#### goat

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/goat.json)</small>

<CodeHeader></CodeHeader>

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

#### hoglin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/hoglin.json)</small>

<CodeHeader></CodeHeader>

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

#### piglin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/piglin.json)</small>

<CodeHeader></CodeHeader>

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

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Aattack_damage)</small>

<Spoiler title="Show">

#### cat

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/cat.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:attack_damage": {
    "value": 4
}
```

#### ocelot

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/ocelot.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:attack_damage": {
    "value": 4
}
```

</Spoiler>

## balloonable

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Aballoonable)</small>

<Spoiler title="Show">

#### axolotl

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/axolotl.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:balloonable": {
    "mass": 0.5
}
```

#### bee

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/bee.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:balloonable": {
    "mass": 0.5
}
```

#### boat

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/boat.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:balloonable": {}
```

#### cat

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/cat.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:balloonable": {
    "mass": 0.6
}
```

#### chicken

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/chicken.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:balloonable": {
    "mass": 0.5
}
```

#### cow

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/cow.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:balloonable": {}
```

#### dolphin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/dolphin.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:balloonable": {}
```

#### donkey

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/donkey.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:balloonable": {}
```

</Spoiler>

## barter

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Abarter)</small>

<Spoiler title="Show">

#### piglin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/piglin.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:barter": {
    "barter_table": "loot_tables/entities/piglin_barter.json",
    "cooldown_after_being_attacked": 20
}
```

</Spoiler>

## behavior.admire_item

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Abehavior.admire_item)</small>

<Spoiler title="Show">

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

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Abehavior.avoid_block)</small>

<Spoiler title="Show">

#### hoglin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/hoglin.json)</small>

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

#### piglin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/piglin.json)</small>

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

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Abehavior.avoid_mob_type)</small>

<Spoiler title="Show">

#### cat

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/cat.json)</small>

<CodeHeader></CodeHeader>

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

#### creeper

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/creeper.json)</small>

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

#### dolphin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/dolphin.json)</small>

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

#### evocation_illager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/evocation_illager.json)</small>

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

#### fish

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/fish.json)</small>

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

#### fox

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/fox.json)</small>

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

#### guardian

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/guardian.json)</small>

<CodeHeader></CodeHeader>

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

#### hoglin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/hoglin.json)</small>

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

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Abehavior.barter)</small>

<Spoiler title="Show">

#### piglin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/piglin.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.barter": {
    "priority": 3
}
```

</Spoiler>

## behavior.beg

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Abehavior.beg)</small>

<Spoiler title="Show">

#### wolf

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/wolf.json)</small>

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

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Abehavior.breed)</small>

<Spoiler title="Show">

#### axolotl

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/axolotl.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.breed": {
    "priority": 1,
    "speed_multiplier": 1.0
}
```

#### bee

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/bee.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.breed": {
    "priority": 4,
    "speed_multiplier": 1.0
}
```

#### cat

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/cat.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.breed": {
    "priority": 3,
    "speed_multiplier": 1.0
}
```

#### chicken

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/chicken.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.breed": {
    "priority": 3,
    "speed_multiplier": 1.0
}
```

#### cow

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/cow.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.breed": {
    "priority": 3,
    "speed_multiplier": 1.0
}
```

#### donkey

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/donkey.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.breed": {
    "priority": 2,
    "speed_multiplier": 1.0
}
```

#### fox

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/fox.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.breed": {
    "priority": 3,
    "speed_multiplier": 1.0
}
```

#### goat

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/goat.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.breed": {
    "priority": 3,
    "speed_multiplier": 0.6
}
```

</Spoiler>

## behavior.celebrate

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Abehavior.celebrate)</small>

<Spoiler title="Show">

#### evocation_illager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/evocation_illager.json)</small>

<CodeHeader></CodeHeader>

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

#### pillager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/pillager.json)</small>

<CodeHeader></CodeHeader>

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

#### ravager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/ravager.json)</small>

<CodeHeader></CodeHeader>

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

#### vindicator

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/vindicator.json)</small>

<CodeHeader></CodeHeader>

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

#### witch

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/witch.json)</small>

<CodeHeader></CodeHeader>

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

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Abehavior.celebrate_survive)</small>

<Spoiler title="Show">

#### villager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/villager.json)</small>

<CodeHeader></CodeHeader>

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

#### villager_v2

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/villager_v2.json)</small>

<CodeHeader></CodeHeader>

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

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Abehavior.charge_attack)</small>

<Spoiler title="Show">

#### vex

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/vex.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.charge_attack": {
    "priority": 4
}
```

</Spoiler>

## behavior.charge_held_item

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Abehavior.charge_held_item)</small>

<Spoiler title="Show">

#### piglin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/piglin.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.charge_held_item": {
    "priority": 3,
    "items": [
        "minecraft:arrow"
    ]
}
```

#### pillager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/pillager.json)</small>

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

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Abehavior.circle_around_anchor)</small>

<Spoiler title="Show">

#### phantom

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/phantom.json)</small>

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

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Abehavior.controlled_by_player)</small>

<Spoiler title="Show">

#### pig

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/pig.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.controlled_by_player": {
    "priority": 0
}
```

#### strider

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/strider.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.controlled_by_player": {
    "priority": 0,
    "mount_speed_multiplier": 1.45
}
```

</Spoiler>

## behavior.defend_trusted_target

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Abehavior.defend_trusted_target)</small>

<Spoiler title="Show">

#### fox

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/fox.json)</small>

<CodeHeader></CodeHeader>

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

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Abehavior.defend_village_target)</small>

<Spoiler title="Show">

#### iron_golem

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/iron_golem.json)</small>

<CodeHeader></CodeHeader>

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

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Abehavior.delayed_attack)</small>

<Spoiler title="Show">

#### ravager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/ravager.json)</small>

<CodeHeader></CodeHeader>

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

## behavior.dragonchargeplayer

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Abehavior.dragonchargeplayer)</small>

<Spoiler title="Show">

#### ender_dragon

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/ender_dragon.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.dragonchargeplayer": {
    "priority": 1
}
```

</Spoiler>

## behavior.dragondeath

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Abehavior.dragondeath)</small>

<Spoiler title="Show">

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.dragondeath": {
    "priority": 0
}
```

</Spoiler>

## behavior.dragonflaming

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Abehavior.dragonflaming)</small>

<Spoiler title="Show">

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.dragonflaming": {
    "priority": 1
}
```

</Spoiler>

## behavior.dragonholdingpattern

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Abehavior.dragonholdingpattern)</small>

<Spoiler title="Show">

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.dragonholdingpattern": {
    "priority": 3
}
```

</Spoiler>

## behavior.dragonlanding

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Abehavior.dragonlanding)</small>

<Spoiler title="Show">

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.dragonlanding": {
    "priority": 0
}
```

</Spoiler>

## behavior.dragonscanning

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Abehavior.dragonscanning)</small>

<Spoiler title="Show">

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.dragonscanning": {
    "priority": 2
}
```

</Spoiler>

## behavior.dragonstrafeplayer

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Abehavior.dragonstrafeplayer)</small>

<Spoiler title="Show">

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.dragonstrafeplayer": {
    "priority": 2
}
```

</Spoiler>

## behavior.dragontakeoff

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Abehavior.dragontakeoff)</small>

<Spoiler title="Show">

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.dragontakeoff": {
    "priority": 0
}
```

</Spoiler>

## behavior.drink_potion

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Abehavior.drink_potion)</small>

<Spoiler title="Show">

#### wandering_trader

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/wandering_trader.json)</small>

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

</Spoiler>

## behavior.drop_item_for

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Abehavior.drop_item_for)</small>

<Spoiler title="Show">

#### cat

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/cat.json)</small>

<CodeHeader></CodeHeader>

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

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Abehavior.eat_block)</small>

<Spoiler title="Show">

#### sheep

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/sheep.json)</small>

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

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Abehavior.eat_carried_item)</small>

<Spoiler title="Show">

#### fox

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/fox.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.eat_carried_item": {
    "priority": 12,
    "delay_before_eating": 28
}
```

</Spoiler>

## behavior.enderman_leave_block

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Abehavior.enderman_leave_block)</small>

<Spoiler title="Show">

#### enderman

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/enderman.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.enderman_leave_block": {
    "priority": 10
}
```

</Spoiler>

## behavior.enderman_take_block

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Abehavior.enderman_take_block)</small>

<Spoiler title="Show">

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.enderman_take_block": {
    "priority": 11
}
```

</Spoiler>

## behavior.equip_item

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Abehavior.equip_item)</small>

<Spoiler title="Show">

#### drowned

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/drowned.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.equip_item": {
    "priority": 3
}
```

#### fox

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/fox.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.equip_item": {
    "priority": 2
}
```

#### husk

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/husk.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.equip_item": {
    "priority": 2
}
```

#### piglin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/piglin.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.equip_item": {
    "priority": 5
}
```

#### pillager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/pillager.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.equip_item": {
    "priority": 3
}
```

#### skeleton

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/skeleton.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.equip_item": {
    "priority": 3
}
```

#### stray

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/stray.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.equip_item": {
    "priority": 3
}
```

#### wither_skeleton

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/wither_skeleton.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.equip_item": {
    "priority": 3
}
```

</Spoiler>

## behavior.explore_outskirts

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Abehavior.explore_outskirts)</small>

<Spoiler title="Show">

#### villager_v2

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/villager_v2.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.explore_outskirts": {}
```

<CodeHeader></CodeHeader>

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

## behavior.find_cover

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Abehavior.find_cover)</small>

<Spoiler title="Show">

#### fox

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/fox.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.find_cover": {
    "priority": 0,
    "speed_multiplier": 1,
    "cooldown_time": 0.0
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.find_cover": {
    "priority": 9,
    "speed_multiplier": 1,
    "cooldown_time": 5.0
}
```

</Spoiler>

## behavior.find_mount

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Abehavior.find_mount)</small>

<Spoiler title="Show">

#### husk

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/husk.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.find_mount": {
    "priority": 1,
    "within_radius": 16
}
```

#### parrot

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/parrot.json)</small>

<CodeHeader></CodeHeader>

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

#### piglin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/piglin.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.find_mount": {
    "priority": 1,
    "within_radius": 16,
    "start_delay": 15,
    "max_failed_attempts": 20
}
```

#### zombie

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.find_mount": {
    "priority": 1,
    "within_radius": 16,
    "start_delay": 15,
    "max_failed_attempts": 20
}
```

#### zombie_villager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie_villager.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.find_mount": {
    "priority": 1,
    "within_radius": 16
}
```

#### zombie_villager_v2

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie_villager_v2.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.find_mount": {
    "priority": 1,
    "within_radius": 16
}
```

</Spoiler>

## behavior.find_underwater_treasure

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Abehavior.find_underwater_treasure)</small>

<Spoiler title="Show">

#### dolphin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/dolphin.json)</small>

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

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Abehavior.flee_sun)</small>

<Spoiler title="Show">

#### drowned

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/drowned.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.flee_sun": {
    "priority": 2,
    "speed_multiplier": 1
}
```

#### skeleton

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/skeleton.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.flee_sun": {
    "priority": 2,
    "speed_multiplier": 1
}
```

#### stray

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/stray.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.flee_sun": {
    "priority": 2,
    "speed_multiplier": 1
}
```

#### zombie_villager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie_villager.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.flee_sun": {
    "priority": 4,
    "speed_multiplier": 1
}
```

#### zombie_villager_v2

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie_villager_v2.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.flee_sun": {
    "priority": 4,
    "speed_multiplier": 1
}
```

</Spoiler>

## behavior.float

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Abehavior.float)</small>

<Spoiler title="Show">

#### bat

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/bat.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.float": {
    "priority": 0
}
```

#### bee

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/bee.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.float": {
    "priority": 19
}
```

#### blaze

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/blaze.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.float": {
    "priority": 0
}
```

#### cat

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/cat.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.float": {
    "priority": 0
}
```

#### cave_spider

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/cave_spider.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.float": {
    "priority": 1
}
```

#### chicken

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/chicken.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.float": {
    "priority": 0
}
```

#### cow

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/cow.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.float": {
    "priority": 0
}
```

#### creeper

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/creeper.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.float": {
    "priority": 0
}
```

</Spoiler>

## behavior.float_wander

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Abehavior.float_wander)</small>

<Spoiler title="Show">

#### bat

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/bat.json)</small>

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

#### ghast

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/ghast.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.float_wander": {
    "priority": 2,
    "must_reach": true
}
```

</Spoiler>

## behavior.follow_caravan

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Abehavior.follow_caravan)</small>

<Spoiler title="Show">

#### llama

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/llama.json)</small>

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

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Abehavior.follow_mob)</small>

<Spoiler title="Show">

#### parrot

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/parrot.json)</small>

<CodeHeader></CodeHeader>

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

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Abehavior.follow_owner)</small>

<Spoiler title="Show">

#### cat

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/cat.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.follow_owner": {
    "priority": 4,
    "speed_multiplier": 1.0,
    "start_distance": 10,
    "stop_distance": 2
}
```

#### ocelot

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/ocelot.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.follow_owner": {
    "priority": 4,
    "speed_multiplier": 1.0,
    "start_distance": 10,
    "stop_distance": 2
}
```

#### parrot

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/parrot.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.follow_owner": {
    "priority": 2,
    "speed_multiplier": 1.0,
    "start_distance": 5,
    "stop_distance": 1
}
```

#### wolf

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/wolf.json)</small>

<CodeHeader></CodeHeader>

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

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Abehavior.follow_parent)</small>

<Spoiler title="Show">

#### axolotl

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/axolotl.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.follow_parent": {
    "priority": 5,
    "speed_multiplier": 1.1
}
```

#### bee

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/bee.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.follow_parent": {
    "priority": 11,
    "speed_multiplier": 1.1
}
```

#### chicken

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/chicken.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.follow_parent": {
    "priority": 5,
    "speed_multiplier": 1.1
}
```

#### cow

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/cow.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.follow_parent": {
    "priority": 5,
    "speed_multiplier": 1.1
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.follow_parent": {
    "priority": 6,
    "speed_multiplier": 1.1
}
```

#### dolphin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/dolphin.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.follow_parent": {
    "priority": 4,
    "speed_multiplier": 1.1
}
```

#### donkey

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/donkey.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.follow_parent": {
    "priority": 4,
    "speed_multiplier": 1.0
}
```

#### fox

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/fox.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.follow_parent": {
    "priority": 9,
    "speed_multiplier": 1.1
}
```

</Spoiler>

## behavior.follow_target_captain

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Abehavior.follow_target_captain)</small>

<Spoiler title="Show">

#### pillager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/pillager.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.follow_target_captain": {
    "priority": 5,
    "speed_multiplier": 0.8,
    "within_radius": 64,
    "follow_distance": 5
}
```

#### vindicator

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/vindicator.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.follow_target_captain": {
    "priority": 5,
    "speed_multiplier": 0.8,
    "within_radius": 64,
    "follow_distance": 5
}
```

</Spoiler>

## behavior.go_home

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Abehavior.go_home)</small>

<Spoiler title="Show">

#### bee

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/bee.json)</small>

<CodeHeader></CodeHeader>

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
    "on_failed": {
        "event": "find_hive_event",
        "target": "self"
    }
}
```

#### piglin_brute

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/piglin_brute.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.go_home": {
    "priority": 6,
    "interval": 200,
    "speed_multiplier": 0.6,
    "goal_radius": 4.0,
    "on_failed": {
        "event": "go_back_to_spawn_failed",
        "target": "self"
    }
}
```

#### turtle

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/turtle.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.go_home": {
    "priority": 1,
    "speed_multiplier": 1.0,
    "interval": 700,
    "goal_radius": 4.0,
    "on_home": {
        "event": "minecraft:go_lay_egg",
        "target": "self"
    }
}
```

</Spoiler>

## behavior.guardian_attack

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Abehavior.guardian_attack)</small>

<Spoiler title="Show">

#### elder_guardian

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/elder_guardian.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.guardian_attack": {
    "priority": 4
}
```

#### guardian

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/guardian.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.guardian_attack": {
    "priority": 4
}
```

</Spoiler>

## behavior.harvest_farm_block

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Abehavior.harvest_farm_block)</small>

<Spoiler title="Show">

#### villager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/villager.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.harvest_farm_block": {
    "priority": 9,
    "speed_multiplier": 0.5
}
```

#### villager_v2

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/villager_v2.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.harvest_farm_block": {}
```

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.harvest_farm_block": {
    "priority": 8,
    "max_seconds_before_search": 1.0,
    "search_cooldown_max_seconds": 8.0,
    "seconds_until_new_task": 0.5,
    "speed_multiplier": 0.5
}
```

</Spoiler>

## behavior.hide

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Abehavior.hide)</small>

<Spoiler title="Show">

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

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Abehavior.hold_ground)</small>

<Spoiler title="Show">

#### pillager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/pillager.json)</small>

<CodeHeader></CodeHeader>

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

<CodeHeader></CodeHeader>

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

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Abehavior.hurt_by_target)</small>

<Spoiler title="Show">

#### bee

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/bee.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.hurt_by_target": {
    "priority": 1
}
```

#### blaze

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/blaze.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.hurt_by_target": {
    "priority": 1
}
```

#### cave_spider

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/cave_spider.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.hurt_by_target": {
    "priority": 1
}
```

#### creeper

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/creeper.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.hurt_by_target": {
    "priority": 2
}
```

#### dolphin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/dolphin.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.hurt_by_target": {
    "priority": 1
}
```

#### drowned

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/drowned.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.hurt_by_target": {
    "priority": 1
}
```

#### enderman

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/enderman.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.hurt_by_target": {
    "priority": 3
}
```

#### evocation_illager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/evocation_illager.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.hurt_by_target": {
    "priority": 1
}
```

</Spoiler>

## behavior.inspect_bookshelf

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Abehavior.inspect_bookshelf)</small>

<Spoiler title="Show">

#### villager_v2

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/villager_v2.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.inspect_bookshelf": {}
```

<CodeHeader></CodeHeader>

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

## behavior.jump_to_block

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Abehavior.jump_to_block)</small>

<Spoiler title="Show">

#### goat

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/goat.json)</small>

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

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Abehavior.knockback_roar)</small>

<Spoiler title="Show">

#### ravager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/ravager.json)</small>

<CodeHeader></CodeHeader>

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

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Abehavior.lay_down)</small>

<Spoiler title="Show">

#### panda

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/panda.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.lay_down": {
    "priority": 5,
    "interval": 400,
    "random_stop_interval": 2000
}
```

</Spoiler>

## behavior.lay_egg

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Abehavior.lay_egg)</small>

<Spoiler title="Show">

#### turtle

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/turtle.json)</small>

<CodeHeader></CodeHeader>

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

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Abehavior.leap_at_target)</small>

<Spoiler title="Show">

#### cat

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/cat.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.leap_at_target": {
    "priority": 3,
    "target_dist": 0.3
}
```

#### cave_spider

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/cave_spider.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.leap_at_target": {
    "priority": 4,
    "yd": 0.4,
    "must_be_on_ground": false
}
```

#### ocelot

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/ocelot.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.leap_at_target": {
    "priority": 3,
    "target_dist": 0.3
}
```

#### spider

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/spider.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.leap_at_target": {
    "priority": 4,
    "yd": 0.4,
    "must_be_on_ground": false
}
```

#### wolf

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/wolf.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.leap_at_target": {
    "priority": 4,
    "target_dist": 0.4
}
```

</Spoiler>

## behavior.look_at_entity

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Abehavior.look_at_entity)</small>

<Spoiler title="Show">

#### evocation_illager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/evocation_illager.json)</small>

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

#### ravager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/ravager.json)</small>

<CodeHeader></CodeHeader>

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

#### vex

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/vex.json)</small>

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

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Abehavior.look_at_player)</small>

<Spoiler title="Show">

#### axolotl

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/axolotl.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.look_at_player": {
    "priority": 10,
    "target_distance": 6.0,
    "probability": 0.02
}
```

#### cat

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/cat.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.look_at_player": {
    "priority": 9
}
```

#### cave_spider

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/cave_spider.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.look_at_player": {
    "priority": 7,
    "look_distance": 6.0,
    "probability": 0.02
}
```

#### chicken

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/chicken.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.look_at_player": {
    "priority": 7,
    "look_distance": 6.0,
    "probability": 0.02
}
```

#### cow

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/cow.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.look_at_player": {
    "priority": 7,
    "look_distance": 6.0,
    "probability": 0.02
}
```

#### creeper

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/creeper.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.look_at_player": {
    "priority": 6,
    "look_distance": 8
}
```

#### dolphin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/dolphin.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.look_at_player": {
    "priority": 8,
    "look_distance": 6
}
```

#### donkey

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/donkey.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.look_at_player": {
    "priority": 7,
    "look_distance": 6.0,
    "probability": 0.02
}
```

</Spoiler>

## behavior.look_at_target

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Abehavior.look_at_target)</small>

<Spoiler title="Show">

#### wither

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/wither.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.look_at_target": {
    "priority": 5
}
```

</Spoiler>

## behavior.look_at_trading_player

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Abehavior.look_at_trading_player)</small>

<Spoiler title="Show">

#### villager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/villager.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.look_at_trading_player": {
    "priority": 2
}
```

#### villager_v2

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/villager_v2.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.look_at_trading_player": {
    "priority": 7
}
```

#### wandering_trader

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/wandering_trader.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.look_at_trading_player": {
    "priority": 4
}
```

</Spoiler>

## behavior.make_love

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Abehavior.make_love)</small>

<Spoiler title="Show">

#### villager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/villager.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.make_love": {
    "priority": 6
}
```

#### villager_v2

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/villager_v2.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.make_love": {
    "priority": 5
}
```

</Spoiler>

## behavior.melee_attack

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Abehavior.melee_attack)</small>

<Spoiler title="Show">

#### axolotl

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/axolotl.json)</small>

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

#### bee

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/bee.json)</small>

<CodeHeader></CodeHeader>

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

#### blaze

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/blaze.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.melee_attack": {
    "priority": 3
}
```

#### cave_spider

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/cave_spider.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.melee_attack": {
    "priority": 3,
    "track_target": true,
    "random_stop_interval": 100,
    "reach_multiplier": 0.8
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.melee_attack": {
    "priority": 3,
    "track_target": true,
    "reach_multiplier": 1.4
}
```

#### creeper

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/creeper.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.melee_attack": {
    "priority": 4,
    "speed_multiplier": 1.25,
    "track_target": false,
    "reach_multiplier": 0.0
}
```

#### dolphin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/dolphin.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.melee_attack": {
    "priority": 2,
    "track_target": true
}
```

#### drowned

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/drowned.json)</small>

<CodeHeader></CodeHeader>

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

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Abehavior.mingle)</small>

<Spoiler title="Show">

#### villager_v2

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/villager_v2.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.mingle": {}
```

<CodeHeader></CodeHeader>

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

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Abehavior.mount_pathing)</small>

<Spoiler title="Show">

#### cat

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/cat.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.mount_pathing": {
    "priority": 1,
    "speed_multiplier": 1.25,
    "target_dist": 0,
    "track_target": true
}
```

#### cave_spider

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/cave_spider.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.mount_pathing": {
    "priority": 5,
    "speed_multiplier": 1.25,
    "target_dist": 0.0,
    "track_target": true
}
```

#### chicken

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/chicken.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.mount_pathing": {
    "priority": 2,
    "speed_multiplier": 1.5,
    "target_dist": 0.0,
    "track_target": true
}
```

#### cow

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/cow.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.mount_pathing": {
    "priority": 2,
    "speed_multiplier": 1.5,
    "target_dist": 0.0,
    "track_target": true
}
```

#### donkey

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/donkey.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.mount_pathing": {
    "priority": 2,
    "speed_multiplier": 1.5,
    "target_dist": 0.0,
    "track_target": true
}
```

#### horse

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/horse.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.mount_pathing": {
    "priority": 2,
    "speed_multiplier": 1.5,
    "target_dist": 0.0,
    "track_target": true
}
```

#### husk

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/husk.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.mount_pathing": {
    "priority": 2,
    "speed_multiplier": 1.25,
    "target_dist": 0.0,
    "track_target": true
}
```

#### llama

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/llama.json)</small>

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

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Abehavior.move_indoors)</small>

<Spoiler title="Show">

#### villager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/villager.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.move_indoors": {
    "priority": 4,
    "speed_multiplier": 0.8
}
```

#### villager_v2

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/villager_v2.json)</small>

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

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Abehavior.move_outdoors)</small>

<Spoiler title="Show">

#### villager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/villager.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.move_outdoors": {
    "priority": 2,
    "speed_multiplier": 0.8,
    "timeout_cooldown": 8.0
}
```

#### villager_v2

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/villager_v2.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.move_outdoors": {
    "priority": 2,
    "speed_multiplier": 0.8,
    "timeout_cooldown": 8.0
}
```

</Spoiler>

## behavior.move_through_village

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Abehavior.move_through_village)</small>

<Spoiler title="Show">

#### iron_golem

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/iron_golem.json)</small>

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

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Abehavior.move_to_block)</small>

<Spoiler title="Show">

#### bee

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/bee.json)</small>

<CodeHeader></CodeHeader>

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
    "target_blocks": [
        "minecraft:red_flower",
        "minecraft:yellow_flower",
        "minecraft:wither_rose",
        "minecraft:double_plant:8",
        "minecraft:double_plant:9",
        "minecraft:double_plant:12",
        "minecraft:double_plant:13",
        "minecraft:flowering_azalea",
        "minecraft:azalea_leaves_flowered"
    ],
    "on_stay_completed": [
        {
            "event": "collected_nectar",
            "target": "self"
        }
    ]
}
```

<CodeHeader></CodeHeader>

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

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Abehavior.move_to_land)</small>

<Spoiler title="Show">

#### turtle

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/turtle.json)</small>

<CodeHeader></CodeHeader>

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

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Abehavior.move_to_liquid)</small>

<Spoiler title="Show">

#### strider

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/strider.json)</small>

<CodeHeader></CodeHeader>

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

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Abehavior.move_to_random_block)</small>

<Spoiler title="Show">

#### pillager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/pillager.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.move_to_random_block": {
    "priority": 6,
    "speed_multiplier": 0.55,
    "within_radius": 8,
    "block_distance": 512
}
```

#### vindicator

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/vindicator.json)</small>

<CodeHeader></CodeHeader>

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

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Abehavior.move_to_village)</small>

<Spoiler title="Show">

#### evocation_illager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/evocation_illager.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.move_to_village": {
    "priority": 6,
    "speed_multiplier": 0.7
}
```

#### pillager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/pillager.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.move_to_village": {
    "priority": 5,
    "speed_multiplier": 1.0,
    "goal_radius": 2.0
}
```

#### ravager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/ravager.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.move_to_village": {
    "priority": 5,
    "speed_multiplier": 1.0,
    "goal_radius": 2.0
}
```

#### vindicator

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/vindicator.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.move_to_village": {
    "priority": 4,
    "speed_multiplier": 1.0,
    "goal_radius": 2.0
}
```

#### witch

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/witch.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.move_to_village": {
    "priority": 3,
    "speed_multiplier": 1.2,
    "goal_radius": 2.0
}
```

</Spoiler>

## behavior.move_to_water

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Abehavior.move_to_water)</small>

<Spoiler title="Show">

#### axolotl

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/axolotl.json)</small>

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

#### dolphin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/dolphin.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.move_to_water": {
    "priority": 1,
    "search_range": 15,
    "search_height": 5
}
```

#### turtle

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/turtle.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.move_to_water": {
    "priority": 4,
    "search_range": 16,
    "search_height": 5,
    "goal_radius": 1.5
}
```

<CodeHeader></CodeHeader>

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

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Abehavior.move_towards_dwelling_restriction)</small>

<Spoiler title="Show">

#### cat

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/cat.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.move_towards_dwelling_restriction": {
    "priority": 7
}
```

#### iron_golem

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/iron_golem.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.move_towards_dwelling_restriction": {
    "priority": 4,
    "speed_multiplier": 1
}
```

#### villager_v2

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/villager_v2.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.move_towards_dwelling_restriction": {
    "priority": 10,
    "speed_multiplier": 0.6
}
```

</Spoiler>

## behavior.move_towards_home_restriction

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Abehavior.move_towards_home_restriction)</small>

<Spoiler title="Show">

#### bee

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/bee.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.move_towards_home_restriction": {
    "priority": 9
}
```

#### elder_guardian

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/elder_guardian.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.move_towards_home_restriction": {
    "priority": 5,
    "speed_multiplier": 1.0
}
```

#### guardian

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/guardian.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.move_towards_home_restriction": {
    "priority": 5,
    "speed_multiplier": 1.0
}
```

</Spoiler>

## behavior.move_towards_target

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Abehavior.move_towards_target)</small>

<Spoiler title="Show">

#### iron_golem

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/iron_golem.json)</small>

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

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Abehavior.nap)</small>

<Spoiler title="Show">

#### fox

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/fox.json)</small>

<CodeHeader></CodeHeader>

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

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Abehavior.nearest_attackable_target)</small>

<Spoiler title="Show">

#### axolotl

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/axolotl.json)</small>

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

#### bee

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/bee.json)</small>

<CodeHeader></CodeHeader>

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

#### blaze

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/blaze.json)</small>

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

#### cat

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/cat.json)</small>

<CodeHeader></CodeHeader>

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

#### cave_spider

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/cave_spider.json)</small>

<CodeHeader></CodeHeader>

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

<CodeHeader></CodeHeader>

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

#### creeper

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/creeper.json)</small>

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

#### drowned

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/drowned.json)</small>

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

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Abehavior.nearest_prioritized_attackable_target)</small>

<Spoiler title="Show">

#### fox

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/fox.json)</small>

<CodeHeader></CodeHeader>

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

<CodeHeader></CodeHeader>

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

#### piglin_brute

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/piglin_brute.json)</small>

<CodeHeader></CodeHeader>

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

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Abehavior.ocelot_sit_on_block)</small>

<Spoiler title="Show">

#### cat

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/cat.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.ocelot_sit_on_block": {
    "priority": 7,
    "speed_multiplier": 1.0
}
```

#### ocelot

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/ocelot.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.ocelot_sit_on_block": {
    "priority": 6,
    "speed_multiplier": 1.0
}
```

</Spoiler>

## behavior.ocelotattack

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Abehavior.ocelotattack)</small>

<Spoiler title="Show">

#### cat

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/cat.json)</small>

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

#### ocelot

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/ocelot.json)</small>

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

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Abehavior.offer_flower)</small>

<Spoiler title="Show">

#### iron_golem

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/iron_golem.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.offer_flower": {
    "priority": 5
}
```

</Spoiler>

## behavior.open_door

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Abehavior.open_door)</small>

<Spoiler title="Show">

#### villager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/villager.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.open_door": {
    "priority": 6,
    "close_door_after": true
}
```

#### wandering_trader

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/wandering_trader.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.open_door": {
    "priority": 6,
    "close_door_after": true
}
```

</Spoiler>

## behavior.owner_hurt_by_target

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Abehavior.owner_hurt_by_target)</small>

<Spoiler title="Show">

#### wolf

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/wolf.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.owner_hurt_by_target": {
    "priority": 1
}
```

</Spoiler>

## behavior.owner_hurt_target

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Abehavior.owner_hurt_target)</small>

<Spoiler title="Show">

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.owner_hurt_target": {
    "priority": 2
}
```

</Spoiler>

## behavior.panic

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Abehavior.panic)</small>

<Spoiler title="Show">

#### bee

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/bee.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.panic": {
    "priority": 1,
    "speed_multiplier": 1.25,
    "force": true
}
```

#### cat

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/cat.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.panic": {
    "priority": 1,
    "speed_multiplier": 1.25
}
```

#### chicken

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/chicken.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.panic": {
    "priority": 1,
    "speed_multiplier": 1.5
}
```

#### cow

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/cow.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.panic": {
    "priority": 1,
    "speed_multiplier": 1.25
}
```

#### dolphin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/dolphin.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.panic": {
    "priority": 1,
    "speed_multiplier": 1.25
}
```

#### donkey

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/donkey.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.panic": {
    "priority": 1,
    "speed_multiplier": 1.2
}
```

#### fox

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/fox.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.panic": {
    "priority": 1,
    "speed_multiplier": 1.25
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.panic": {
    "priority": 2,
    "speed_multiplier": 1.25
}
```

</Spoiler>

## behavior.pet_sleep_with_owner

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Abehavior.pet_sleep_with_owner)</small>

<Spoiler title="Show">

#### cat

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/cat.json)</small>

<CodeHeader></CodeHeader>

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

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Abehavior.pickup_items)</small>

<Spoiler title="Show">

#### drowned

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/drowned.json)</small>

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

#### fox

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/fox.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.pickup_items": {
    "priority": 11,
    "max_dist": 3,
    "goal_radius": 2,
    "speed_multiplier": 0.5
}
```

#### husk

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/husk.json)</small>

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

#### piglin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/piglin.json)</small>

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

#### pillager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/pillager.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.pickup_items": {
    "priority": 7,
    "max_dist": 3,
    "goal_radius": 2,
    "speed_multiplier": 1.0
}
```

#### skeleton

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/skeleton.json)</small>

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

#### stray

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/stray.json)</small>

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

#### villager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/villager.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.pickup_items": {
    "priority": 9,
    "max_dist": 3,
    "goal_radius": 2,
    "speed_multiplier": 0.5,
    "can_pickup_to_hand_or_equipment": false
}
```

</Spoiler>

## behavior.play

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Abehavior.play)</small>

<Spoiler title="Show">

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.play": {
    "priority": 8,
    "speed_multiplier": 0.32
}
```

#### villager_v2

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/villager_v2.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.play": {
    "priority": 8,
    "speed_multiplier": 0.32
}
```

</Spoiler>

## behavior.play_dead

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Abehavior.play_dead)</small>

<Spoiler title="Show">

#### axolotl

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/axolotl.json)</small>

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

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Abehavior.player_ride_tamed)</small>

<Spoiler title="Show">

#### donkey

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/donkey.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.player_ride_tamed": {}
```

#### horse

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/horse.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.player_ride_tamed": {}
```

#### mule

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/mule.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.player_ride_tamed": {}
```

#### skeleton_horse

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/skeleton_horse.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.player_ride_tamed": {}
```

#### zombie_horse

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie_horse.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.player_ride_tamed": {}
```

</Spoiler>

## behavior.raid_garden

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Abehavior.raid_garden)</small>

<Spoiler title="Show">

#### fox

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/fox.json)</small>

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

#### rabbit

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/rabbit.json)</small>

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

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Abehavior.ram_attack)</small>

<Spoiler title="Show">

#### goat

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/goat.json)</small>

<CodeHeader></CodeHeader>

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

<CodeHeader></CodeHeader>

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

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Abehavior.random_breach)</small>

<Spoiler title="Show">

#### dolphin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/dolphin.json)</small>

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

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Abehavior.random_fly)</small>

<Spoiler title="Show">

#### parrot

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/parrot.json)</small>

<CodeHeader></CodeHeader>

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

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Abehavior.random_hover)</small>

<Spoiler title="Show">

#### bee

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/bee.json)</small>

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

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Abehavior.random_look_around)</small>

<Spoiler title="Show">

#### blaze

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/blaze.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.random_look_around": {
    "priority": 5
}
```

#### cave_spider

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/cave_spider.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.random_look_around": {
    "priority": 7
}
```

#### chicken

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/chicken.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.random_look_around": {
    "priority": 8
}
```

#### cow

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/cow.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.random_look_around": {
    "priority": 9
}
```

#### creeper

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/creeper.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.random_look_around": {
    "priority": 6
}
```

#### dolphin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/dolphin.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.random_look_around": {
    "priority": 7
}
```

#### donkey

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/donkey.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.random_look_around": {
    "priority": 8
}
```

#### drowned

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/drowned.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.random_look_around": {
    "priority": 9
}
```

</Spoiler>

## behavior.random_look_around_and_sit

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Abehavior.random_look_around_and_sit)</small>

<Spoiler title="Show">

#### fox

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/fox.json)</small>

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

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Abehavior.random_sitting)</small>

<Spoiler title="Show">

#### panda

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/panda.json)</small>

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

<CodeHeader></CodeHeader>

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

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Abehavior.random_stroll)</small>

<Spoiler title="Show">

#### axolotl

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/axolotl.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.random_stroll": {
    "priority": 9,
    "interval": 100
}
```

#### blaze

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/blaze.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.random_stroll": {
    "priority": 4,
    "speed_multiplier": 1.0
}
```

#### cat

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/cat.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.random_stroll": {
    "priority": 8,
    "speed_multiplier": 0.8
}
```

#### cave_spider

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/cave_spider.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.random_stroll": {
    "priority": 6,
    "speed_multiplier": 0.8
}
```

#### chicken

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/chicken.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.random_stroll": {
    "priority": 6,
    "speed_multiplier": 1.0
}
```

#### cow

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/cow.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.random_stroll": {
    "priority": 6,
    "speed_multiplier": 0.8
}
```

#### creeper

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/creeper.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.random_stroll": {
    "priority": 5,
    "speed_multiplier": 1
}
```

#### donkey

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/donkey.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.random_stroll": {
    "priority": 6,
    "speed_multiplier": 0.7
}
```

</Spoiler>

## behavior.random_swim

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Abehavior.random_swim)</small>

<Spoiler title="Show">

#### axolotl

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/axolotl.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.random_swim": {
    "priority": 8,
    "interval": 0,
    "xz_dist": 30,
    "y_dist": 15
}
```

#### dolphin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/dolphin.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.random_swim": {
    "priority": 5,
    "interval": 0,
    "xz_dist": 20
}
```

#### elder_guardian

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/elder_guardian.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.random_swim": {
    "priority": 7,
    "speed_multiplier": 0.5,
    "avoid_surface": false
}
```

#### fish

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/fish.json)</small>

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

#### guardian

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/guardian.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.random_swim": {
    "priority": 7,
    "speed_multiplier": 1.0,
    "interval": 80,
    "avoid_surface": false
}
```

#### pufferfish

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/pufferfish.json)</small>

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

#### salmon

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/salmon.json)</small>

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

#### tropicalfish

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/tropicalfish.json)</small>

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

</Spoiler>

## behavior.ranged_attack

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Abehavior.ranged_attack)</small>

<Spoiler title="Show">

#### blaze

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/blaze.json)</small>

<CodeHeader></CodeHeader>

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

#### drowned

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/drowned.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.ranged_attack": {
    "priority": 3,
    "attack_interval_min": 1.0,
    "attack_interval_max": 3.0,
    "attack_radius": 10.0,
    "swing": true
}
```

#### ghast

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/ghast.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.ranged_attack": {
    "priority": 1,
    "attack_radius": 64,
    "charge_shoot_trigger": 2,
    "charge_charged_trigger": 1
}
```

#### llama

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/llama.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.ranged_attack": {
    "priority": 2,
    "attack_radius": 64,
    "charge_shoot_trigger": 2,
    "charge_charged_trigger": 1
}
```

#### piglin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/piglin.json)</small>

<CodeHeader></CodeHeader>

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

#### pillager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/pillager.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.ranged_attack": {
    "priority": 4,
    "attack_interval_min": 1.0,
    "attack_interval_max": 1.0,
    "attack_radius": 8.0
}
```

#### shulker

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/shulker.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.ranged_attack": {
    "attack_interval_min": 1,
    "attack_interval_max": 3,
    "attack_radius": 15
}
```

#### skeleton

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/skeleton.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.ranged_attack": {
    "priority": 0,
    "attack_interval_min": 1.0,
    "attack_interval_max": 3.0,
    "attack_radius": 15.0
}
```

</Spoiler>

## behavior.receive_love

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Abehavior.receive_love)</small>

<Spoiler title="Show">

#### villager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/villager.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.receive_love": {
    "priority": 7
}
```

#### villager_v2

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/villager_v2.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.receive_love": {
    "priority": 6
}
```

</Spoiler>

## behavior.restrict_open_door

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Abehavior.restrict_open_door)</small>

<Spoiler title="Show">

#### villager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/villager.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.restrict_open_door": {
    "priority": 5
}
```

#### wandering_trader

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/wandering_trader.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.restrict_open_door": {
    "priority": 5
}
```

</Spoiler>

## behavior.rise_to_liquid_level

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Abehavior.rise_to_liquid_level)</small>

<Spoiler title="Show">

#### strider

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/strider.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.rise_to_liquid_level": {
    "priority": 0,
    "liquid_y_offset": 0.25,
    "rise_delta": 0.01,
    "sink_delta": 0.01
}
```

</Spoiler>

## behavior.roll

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Abehavior.roll)</small>

<Spoiler title="Show">

#### panda

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/panda.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.roll": {
    "priority": 12,
    "probability": 0.0016
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.roll": {
    "priority": 12,
    "probability": 0.013
}
```

</Spoiler>

## behavior.run_around_like_crazy

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Abehavior.run_around_like_crazy)</small>

<Spoiler title="Show">

#### donkey

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/donkey.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.run_around_like_crazy": {
    "priority": 1,
    "speed_multiplier": 1.2
}
```

#### horse

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/horse.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.run_around_like_crazy": {
    "priority": 1,
    "speed_multiplier": 1.2
}
```

#### llama

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/llama.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.run_around_like_crazy": {
    "priority": 1,
    "speed_multiplier": 1.2
}
```

#### mule

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/mule.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.run_around_like_crazy": {
    "priority": 1,
    "speed_multiplier": 1.2
}
```

</Spoiler>

## behavior.scared

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Abehavior.scared)</small>

<Spoiler title="Show">

#### panda

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/panda.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.scared": {
    "priority": 1,
    "sound_interval": 20
}
```

</Spoiler>

## behavior.send_event

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Abehavior.send_event)</small>

<Spoiler title="Show">

#### evocation_illager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/evocation_illager.json)</small>

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

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Abehavior.share_items)</small>

<Spoiler title="Show">

#### villager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/villager.json)</small>

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

#### villager_v2

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/villager_v2.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.share_items": {
    "priority": 9,
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

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Abehavior.silverfish_merge_with_stone)</small>

<Spoiler title="Show">

#### silverfish

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/silverfish.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.silverfish_merge_with_stone": {
    "priority": 5
}
```

</Spoiler>

## behavior.silverfish_wake_up_friends

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Abehavior.silverfish_wake_up_friends)</small>

<Spoiler title="Show">

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.silverfish_wake_up_friends": {
    "priority": 1
}
```

</Spoiler>

## behavior.skeleton_horse_trap

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Abehavior.skeleton_horse_trap)</small>

<Spoiler title="Show">

#### skeleton_horse

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/skeleton_horse.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.skeleton_horse_trap": {
    "within_radius": 10.0,
    "duration": 900.0,
    "priority": 2
}
```

</Spoiler>

## behavior.sleep

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Abehavior.sleep)</small>

<Spoiler title="Show">

#### villager_v2

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/villager_v2.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.sleep": {}
```

<CodeHeader></CodeHeader>

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

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Abehavior.slime_attack)</small>

<Spoiler title="Show">

#### magma_cube

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/magma_cube.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.slime_attack": {
    "priority": 3
}
```

#### slime

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/slime.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.slime_attack": {
    "priority": 3
}
```

</Spoiler>

## behavior.slime_float

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Abehavior.slime_float)</small>

<Spoiler title="Show">

#### magma_cube

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/magma_cube.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.slime_float": {
    "priority": 1,
    "jump_chance_percentage": 0.8,
    "speed_multiplier": 1.2
}
```

#### slime

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/slime.json)</small>

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

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Abehavior.slime_keep_on_jumping)</small>

<Spoiler title="Show">

#### magma_cube

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/magma_cube.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.slime_keep_on_jumping": {
    "priority": 5,
    "speed_multiplier": 1.0
}
```

#### slime

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/slime.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.slime_keep_on_jumping": {
    "priority": 5,
    "speed_multiplier": 1.0
}
```

</Spoiler>

## behavior.slime_random_direction

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Abehavior.slime_random_direction)</small>

<Spoiler title="Show">

#### magma_cube

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/magma_cube.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.slime_random_direction": {
    "priority": 4,
    "add_random_time_range": 3,
    "turn_range": 360,
    "min_change_direction_time": 2.0
}
```

#### slime

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/slime.json)</small>

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

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Abehavior.snacking)</small>

<Spoiler title="Show">

#### panda

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/panda.json)</small>

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

<CodeHeader></CodeHeader>

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

</Spoiler>

## color

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Acolor)</small>

<Spoiler title="Show">

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

</Spoiler>

## economy_trade_table

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Aeconomy_trade_table)</small>

<Spoiler title="Show">

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

</Spoiler>

## explode

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Aexplode)</small>

<Spoiler title="Show">

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

</Spoiler>

## input_ground_controlled

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Ainput_ground_controlled)</small>

<Spoiler title="Show">

#### donkey

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/donkey.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:input_ground_controlled": {}
```

#### horse

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/horse.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:input_ground_controlled": {}
```

#### mule

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/mule.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:input_ground_controlled": {}
```

#### skeleton_horse

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/skeleton_horse.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:input_ground_controlled": {}
```

</Spoiler>

## inside_block_notifier

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Ainside_block_notifier)</small>

<Spoiler title="Show">

#### boat

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/boat.json)</small>

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

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Ainsomnia)</small>

<Spoiler title="Show">

#### player

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/player.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:insomnia": {
    "days_until_insomnia": 3
}
```

</Spoiler>

## interact

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Ainteract)</small>

<Spoiler title="Show">

#### cow

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/cow.json)</small>

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

#### creeper

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/creeper.json)</small>

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

#### donkey

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/donkey.json)</small>

<CodeHeader></CodeHeader>

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

#### goat

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/goat.json)</small>

<CodeHeader></CodeHeader>

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

<CodeHeader></CodeHeader>

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

#### iron_golem

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/iron_golem.json)</small>

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

#### llama

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/llama.json)</small>

<CodeHeader></CodeHeader>

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

#### mooshroom

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/mooshroom.json)</small>

<CodeHeader></CodeHeader>

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
            "interact_text": "action.interact.mooshear"
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
            "interact_text": "action.interact.mooshear"
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

</Spoiler>

## inventory

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Ainventory)</small>

<Spoiler title="Show">

#### chest_minecart

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/chest_minecart.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:inventory": {
    "container_type": "minecart_chest",
    "inventory_size": 27,
    "can_be_siphoned_from": true
}
```

#### command_block_minecart

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/command_block_minecart.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:inventory": {}
```

#### donkey

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/donkey.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:inventory": {
    "inventory_size": 16,
    "container_type": "horse"
}
```

#### hopper_minecart

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/hopper_minecart.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:inventory": {
    "container_type": "minecart_hopper",
    "inventory_size": 5,
    "can_be_siphoned_from": true
}
```

#### horse

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/horse.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:inventory": {
    "inventory_size": 2,
    "container_type": "horse"
}
```

#### llama

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/llama.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:inventory": {
    "inventory_size": 16,
    "container_type": "horse",
    "additional_slots_per_strength": 3
}
```

#### mule

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/mule.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:inventory": {
    "inventory_size": 16,
    "container_type": "horse"
}
```

#### panda

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/panda.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:inventory": {
    "inventory_size": 1,
    "private": true
}
```

</Spoiler>

## is_baby

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Ais_baby)</small>

<Spoiler title="Show">

#### axolotl

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/axolotl.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:is_baby": {}
```

#### bee

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/bee.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:is_baby": {}
```

#### cat

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/cat.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:is_baby": {}
```

#### chicken

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/chicken.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:is_baby": {}
```

#### cow

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/cow.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:is_baby": {}
```

#### dolphin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/dolphin.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:is_baby": {}
```

#### donkey

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/donkey.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:is_baby": {}
```

#### drowned

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/drowned.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:is_baby": {}
```

</Spoiler>

## is_charged

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Ais_charged)</small>

<Spoiler title="Show">

#### bee

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/bee.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:is_charged": {}
```

#### creeper

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/creeper.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:is_charged": {}
```

</Spoiler>

## is_chested

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Ais_chested)</small>

<Spoiler title="Show">

#### donkey

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/donkey.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:is_chested": {}
```

#### llama

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/llama.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:is_chested": {}
```

#### mule

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/mule.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:is_chested": {}
```

</Spoiler>

## is_dyeable

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Ais_dyeable)</small>

<Spoiler title="Show">

#### cat

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/cat.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:is_dyeable": {
    "interact_text": "action.interact.dye"
}
```

#### sheep

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/sheep.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:is_dyeable": {
    "interact_text": "action.interact.dye"
}
```

#### wolf

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/wolf.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:is_dyeable": {
    "interact_text": "action.interact.dye"
}
```

</Spoiler>

## is_hidden_when_invisible

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Ais_hidden_when_invisible)</small>

<Spoiler title="Show">

#### axolotl

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/axolotl.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:is_hidden_when_invisible": {}
```

#### bat

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/bat.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:is_hidden_when_invisible": {}
```

#### bee

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/bee.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:is_hidden_when_invisible": {}
```

#### blaze

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/blaze.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:is_hidden_when_invisible": {}
```

#### cat

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/cat.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:is_hidden_when_invisible": {}
```

#### cave_spider

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/cave_spider.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:is_hidden_when_invisible": {}
```

#### chicken

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/chicken.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:is_hidden_when_invisible": {}
```

#### cow

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/cow.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:is_hidden_when_invisible": {}
```

</Spoiler>

## is_ignited

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Ais_ignited)</small>

<Spoiler title="Show">

#### tnt_minecart

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/tnt_minecart.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:is_ignited": {}
```

</Spoiler>

## is_illager_captain

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Ais_illager_captain)</small>

<Spoiler title="Show">

#### pillager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/pillager.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:is_illager_captain": {}
```

#### vindicator

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/vindicator.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:is_illager_captain": {}
```

</Spoiler>

## is_saddled

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Ais_saddled)</small>

<Spoiler title="Show">

#### donkey

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/donkey.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:is_saddled": {}
```

#### horse

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/horse.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:is_saddled": {}
```

#### mule

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/mule.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:is_saddled": {}
```

#### pig

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/pig.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:is_saddled": {}
```

#### strider

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/strider.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:is_saddled": {}
```

</Spoiler>

## is_shaking

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Ais_shaking)</small>

<Spoiler title="Show">

#### hoglin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/hoglin.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:is_shaking": {}
```

#### husk

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/husk.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:is_shaking": {}
```

#### piglin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/piglin.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:is_shaking": {}
```

#### piglin_brute

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/piglin_brute.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:is_shaking": {}
```

#### skeleton

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/skeleton.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:is_shaking": {}
```

#### strider

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/strider.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:is_shaking": {}
```

#### zombie

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:is_shaking": {}
```

#### zombie_villager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie_villager.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:is_shaking": {}
```

</Spoiler>

## is_sheared

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Ais_sheared)</small>

<Spoiler title="Show">

#### sheep

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/sheep.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:is_sheared": {}
```

#### snow_golem

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/snow_golem.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:is_sheared": {}
```

</Spoiler>

## is_stackable

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Ais_stackable)</small>

<Spoiler title="Show">

#### boat

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/boat.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:is_stackable": {}
```

#### chest_minecart

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/chest_minecart.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:is_stackable": {
    "value": true
}
```

#### hopper_minecart

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/hopper_minecart.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:is_stackable": {}
```

#### minecart

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/minecart.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:is_stackable": {}
```

#### tnt_minecart

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/tnt_minecart.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:is_stackable": {}
```

</Spoiler>

## is_stunned

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Ais_stunned)</small>

<Spoiler title="Show">

#### ravager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/ravager.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:is_stunned": {}
```

</Spoiler>

## is_tamed

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Ais_tamed)</small>

<Spoiler title="Show">

#### cat

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/cat.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:is_tamed": {}
```

#### donkey

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/donkey.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:is_tamed": {}
```

#### horse

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/horse.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:is_tamed": {}
```

#### llama

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/llama.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:is_tamed": {}
```

#### mule

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/mule.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:is_tamed": {}
```

#### ocelot

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/ocelot.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:is_tamed": {}
```

#### parrot

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/parrot.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:is_tamed": {}
```

#### skeleton_horse

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/skeleton_horse.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:is_tamed": {}
```

</Spoiler>

## item_controllable

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Aitem_controllable)</small>

<Spoiler title="Show">

#### pig

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/pig.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:item_controllable": {
    "control_items": "carrotOnAStick"
}
```

#### strider

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/strider.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:item_controllable": {
    "control_items": "warped_fungus_on_a_stick"
}
```

</Spoiler>

## item_hopper

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Aitem_hopper)</small>

<Spoiler title="Show">

#### hopper_minecart

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/hopper_minecart.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:item_hopper": {}
```

</Spoiler>

## jump.dynamic

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Ajump.dynamic)</small>

<Spoiler title="Show">

#### rabbit

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/rabbit.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:jump.dynamic": {}
```

</Spoiler>

## jump.static

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Ajump.static)</small>

<Spoiler title="Show">

#### axolotl

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/axolotl.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:jump.static": {}
```

#### bat

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/bat.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:jump.static": {}
```

#### bee

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/bee.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:jump.static": {}
```

#### blaze

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/blaze.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:jump.static": {}
```

#### cat

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/cat.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:jump.static": {}
```

#### cave_spider

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/cave_spider.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:jump.static": {}
```

#### chicken

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/chicken.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:jump.static": {}
```

#### cow

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/cow.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:jump.static": {}
```

</Spoiler>

## knockback_resistance

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Aknockback_resistance)</small>

<Spoiler title="Show">

#### armor_stand

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/armor_stand.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:knockback_resistance": {
    "value": 1.0
}
```

#### ender_dragon

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/ender_dragon.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:knockback_resistance": {
    "value": 100,
    "max": 100
}
```

#### hoglin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/hoglin.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:knockback_resistance": {
    "value": 0.5
}
```

#### iron_golem

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/iron_golem.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:knockback_resistance": {
    "value": 1.0
}
```

#### ravager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/ravager.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:knockback_resistance": {
    "value": 0.5
}
```

#### zoglin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zoglin.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:knockback_resistance": {
    "value": 0.5
}
```

</Spoiler>

## lava_movement

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Alava_movement)</small>

<Spoiler title="Show">

#### strider

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/strider.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:lava_movement": {
    "value": 0.32
}
```

</Spoiler>

## leashable

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Aleashable)</small>

<Spoiler title="Show">

#### axolotl

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/axolotl.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:leashable": {
    "soft_distance": 4.0,
    "hard_distance": 6.0,
    "max_distance": 10.0
}
```

#### bee

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/bee.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:leashable": {
    "soft_distance": 4.0,
    "hard_distance": 6.0,
    "max_distance": 10.0
}
```

#### boat

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/boat.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:leashable": {
    "soft_distance": 4.0,
    "hard_distance": 6.0,
    "max_distance": 10.0
}
```

#### cat

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/cat.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:leashable": {
    "soft_distance": 4.0,
    "hard_distance": 6.0,
    "max_distance": 10.0
}
```

#### chicken

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/chicken.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:leashable": {
    "soft_distance": 4.0,
    "hard_distance": 6.0,
    "max_distance": 10.0
}
```

#### cow

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/cow.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:leashable": {
    "soft_distance": 4.0,
    "hard_distance": 6.0,
    "max_distance": 10.0
}
```

#### dolphin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/dolphin.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:leashable": {
    "soft_distance": 4.0,
    "hard_distance": 6.0,
    "max_distance": 10.0
}
```

#### donkey

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/donkey.json)</small>

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

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Alookat)</small>

<Spoiler title="Show">

#### enderman

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/enderman.json)</small>

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

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Aloot)</small>

<Spoiler title="Show">

#### armor_stand

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/armor_stand.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:loot": {
    "table": "loot_tables/entities/armor_stand.json"
}
```

#### blaze

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/blaze.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:loot": {
    "table": "loot_tables/entities/blaze.json"
}
```

#### boat

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/boat.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:loot": {
    "table": "loot_tables/entities/boat.json"
}
```

#### cat

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/cat.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:loot": {
    "table": "loot_tables/entities/cat.json"
}
```

#### cave_spider

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/cave_spider.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:loot": {
    "table": "loot_tables/entities/spider.json"
}
```

#### chicken

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/chicken.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:loot": {
    "table": "loot_tables/entities/chicken.json"
}
```

#### cow

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/cow.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:loot": {
    "table": "loot_tables/entities/cow.json"
}
```

#### creeper

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/creeper.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:loot": {
    "table": "loot_tables/entities/creeper.json"
}
```

</Spoiler>

## managed_wandering_trader

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Amanaged_wandering_trader)</small>

<Spoiler title="Show">

#### wandering_trader

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/wandering_trader.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:managed_wandering_trader": {}
```

</Spoiler>

## mark_variant

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Amark_variant)</small>

<Spoiler title="Show">

#### bee

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/bee.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:mark_variant": {
    "value": 1
}
```

#### horse

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/horse.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:mark_variant": {
    "value": 0
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:mark_variant": {
    "value": 1
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:mark_variant": {
    "value": 2
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:mark_variant": {
    "value": 3
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:mark_variant": {
    "value": 4
}
```

#### llama

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/llama.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:mark_variant": {
    "value": 0
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:mark_variant": {
    "value": 1
}
```

</Spoiler>

## mob_effect

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Amob_effect)</small>

<Spoiler title="Show">

#### pufferfish

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/pufferfish.json)</small>

<CodeHeader></CodeHeader>

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

</Spoiler>

## movement

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Amovement)</small>

<Spoiler title="Show">

#### axolotl

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/axolotl.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:movement": {
    "value": 0.1
}
```

#### bat

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/bat.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:movement": {
    "value": 0.1
}
```

#### bee

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/bee.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:movement": {
    "value": 0.3
}
```

#### blaze

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/blaze.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:movement": {
    "value": 0.23
}
```

#### cat

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/cat.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:movement": {
    "value": 0.3
}
```

#### cave_spider

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/cave_spider.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:movement": {
    "value": 0.3
}
```

#### chicken

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/chicken.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:movement": {
    "value": 0.25
}
```

#### cow

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/cow.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:movement": {
    "value": 0.25
}
```

</Spoiler>

## movement.amphibious

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Amovement.amphibious)</small>

<Spoiler title="Show">

#### axolotl

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/axolotl.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:movement.amphibious": {
    "max_turn": 15.0
}
```

#### turtle

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/turtle.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:movement.amphibious": {
    "max_turn": 5.0
}
```

</Spoiler>

## movement.basic

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Amovement.basic)</small>

<Spoiler title="Show">

#### bat

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/bat.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:movement.basic": {}
```

#### blaze

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/blaze.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:movement.basic": {}
```

#### cat

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/cat.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:movement.basic": {}
```

#### cave_spider

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/cave_spider.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:movement.basic": {}
```

#### chicken

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/chicken.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:movement.basic": {}
```

#### cow

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/cow.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:movement.basic": {}
```

#### creeper

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/creeper.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:movement.basic": {}
```

#### donkey

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/donkey.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:movement.basic": {}
```

</Spoiler>

## movement.fly

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Amovement.fly)</small>

<Spoiler title="Show">

#### parrot

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/parrot.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:movement.fly": {}
```

</Spoiler>

## movement.generic

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Amovement.generic)</small>

<Spoiler title="Show">

#### drowned

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/drowned.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:movement.generic": {}
```

</Spoiler>

## movement.glide

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Amovement.glide)</small>

<Spoiler title="Show">

#### phantom

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/phantom.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:movement.glide": {
    "start_speed": 0.1,
    "speed_when_turning": 0.2
}
```

</Spoiler>

## movement.hover

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Amovement.hover)</small>

<Spoiler title="Show">

#### bee

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/bee.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:movement.hover": {}
```

</Spoiler>

## movement.jump

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Amovement.jump)</small>

<Spoiler title="Show">

#### magma_cube

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/magma_cube.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:movement.jump": {
    "jump_delay": [
        2.0,
        6.0
    ]
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:movement.jump": {
    "jump_delay": [
        0.667,
        2.0
    ]
}
```

#### slime

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/slime.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:movement.jump": {
    "jump_delay": [
        0.5,
        1.5
    ]
}
```

<CodeHeader></CodeHeader>

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

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Amovement.skip)</small>

<Spoiler title="Show">

#### rabbit

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/rabbit.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:movement.skip": {}
```

</Spoiler>

## movement.sway

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Amovement.sway)</small>

<Spoiler title="Show">

#### elder_guardian

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/elder_guardian.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:movement.sway": {}
```

#### fish

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/fish.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:movement.sway": {
    "sway_amplitude": 0.0
}
```

#### guardian

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/guardian.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:movement.sway": {}
```

#### pufferfish

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/pufferfish.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:movement.sway": {
    "sway_amplitude": 0.0
}
```

#### salmon

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/salmon.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:movement.sway": {
    "sway_amplitude": 0.0
}
```

#### tropicalfish

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/tropicalfish.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:movement.sway": {
    "sway_amplitude": 0.0
}
```

</Spoiler>

## nameable

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Anameable)</small>

<Spoiler title="Show">

#### armor_stand

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/armor_stand.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:nameable": {}
```

#### axolotl

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/axolotl.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:nameable": {}
```

#### bat

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/bat.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:nameable": {}
```

#### bee

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/bee.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:nameable": {}
```

#### blaze

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/blaze.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:nameable": {}
```

#### cat

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/cat.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:nameable": {}
```

#### cave_spider

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/cave_spider.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:nameable": {}
```

#### chicken

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/chicken.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:nameable": {}
```

</Spoiler>

## navigation.climb

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Anavigation.climb)</small>

<Spoiler title="Show">

#### cave_spider

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/cave_spider.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:navigation.climb": {
    "can_path_over_water": true
}
```

#### spider

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/spider.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:navigation.climb": {
    "can_path_over_water": true
}
```

</Spoiler>

## navigation.float

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Anavigation.float)</small>

<Spoiler title="Show">

#### bat

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/bat.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:navigation.float": {
    "can_path_over_water": true
}
```

#### ghast

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/ghast.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:navigation.float": {
    "can_path_over_water": true
}
```

</Spoiler>

## navigation.fly

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Anavigation.fly)</small>

<Spoiler title="Show">

#### parrot

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/parrot.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:navigation.fly": {
    "can_path_over_water": true,
    "can_path_from_air": true
}
```

</Spoiler>

## navigation.generic

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Anavigation.generic)</small>

<Spoiler title="Show">

#### axolotl

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/axolotl.json)</small>

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

#### dolphin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/dolphin.json)</small>

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

<CodeHeader></CodeHeader>

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

<CodeHeader></CodeHeader>

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

#### drowned

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/drowned.json)</small>

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

<CodeHeader></CodeHeader>

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

#### elder_guardian

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/elder_guardian.json)</small>

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

#### fish

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/fish.json)</small>

<CodeHeader></CodeHeader>

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

</Spoiler>

## navigation.hover

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Anavigation.hover)</small>

<Spoiler title="Show">

#### bee

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/bee.json)</small>

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

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Anavigation.walk)</small>

<Spoiler title="Show">

#### blaze

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/blaze.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:navigation.walk": {
    "can_path_over_water": true,
    "avoid_water": true,
    "avoid_damage_blocks": true
}
```

#### cat

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/cat.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:navigation.walk": {
    "can_float": true,
    "avoid_water": true,
    "avoid_damage_blocks": true
}
```

#### chicken

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/chicken.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:navigation.walk": {
    "can_path_over_water": true,
    "avoid_damage_blocks": true
}
```

#### cow

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/cow.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:navigation.walk": {
    "can_path_over_water": true,
    "avoid_water": true,
    "avoid_damage_blocks": true
}
```

#### creeper

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/creeper.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:navigation.walk": {
    "can_path_over_water": true
}
```

#### donkey

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/donkey.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:navigation.walk": {
    "can_path_over_water": true,
    "avoid_water": true,
    "avoid_damage_blocks": true
}
```

#### enderman

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/enderman.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:navigation.walk": {
    "can_path_over_water": false,
    "avoid_water": true
}
```

#### endermite

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/endermite.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:navigation.walk": {
    "can_path_over_water": true
}
```

</Spoiler>

## npc

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Anpc)</small>

<Spoiler title="Show">

#### npc

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/npc.json)</small>

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
            }
        ]
    }
}
```

</Spoiler>

## on_death

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Aon_death)</small>

<Spoiler title="Show">

#### ender_dragon

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/ender_dragon.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:on_death": {
    "event": "minecraft:start_death",
    "target": "self"
}
```

</Spoiler>

## on_friendly_anger

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Aon_friendly_anger)</small>

<Spoiler title="Show">

#### llama

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/llama.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:on_friendly_anger": {
    "event": "minecraft:defend_wandering_trader",
    "target": "self"
}
```

#### panda

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/panda.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:on_friendly_anger": {
    "event": "minecraft:on_anger",
    "target": "self"
}
```

#### polar_bear

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/polar_bear.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:on_friendly_anger": {
    "event": "minecraft:on_anger",
    "target": "self"
}
```

</Spoiler>

## on_hurt

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Aon_hurt)</small>

<Spoiler title="Show">

#### blaze

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/blaze.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:on_hurt": {
    "event": "minecraft:on_hurt_event",
    "target": "self"
}
```

#### ender_crystal

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/ender_crystal.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:on_hurt": {
    "event": "minecraft:crystal_explode",
    "target": "self"
}
```

#### pillager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/pillager.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:on_hurt": {
    "event": "minecraft:ranged_mode",
    "target": "self"
}
```

</Spoiler>

## on_hurt_by_player

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Aon_hurt_by_player)</small>

<Spoiler title="Show">

#### blaze

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/blaze.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:on_hurt_by_player": {
    "event": "minecraft:on_hurt_event",
    "target": "self"
}
```

#### pillager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/pillager.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:on_hurt_by_player": {
    "event": "minecraft:ranged_mode",
    "target": "self"
}
```

</Spoiler>

## on_start_landing

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Aon_start_landing)</small>

<Spoiler title="Show">

#### ender_dragon

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/ender_dragon.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:on_start_landing": {
    "event": "minecraft:start_land",
    "target": "self"
}
```

</Spoiler>

## on_start_takeoff

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Aon_start_takeoff)</small>

<Spoiler title="Show">

<CodeHeader></CodeHeader>

```json
"minecraft:on_start_takeoff": {
    "event": "minecraft:start_fly",
    "target": "self"
}
```

</Spoiler>

## on_target_acquired

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Aon_target_acquired)</small>

<Spoiler title="Show">

#### bee

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/bee.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:on_target_acquired": {
    "event": "attacked",
    "target": "self"
}
```

#### cave_spider

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/cave_spider.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:on_target_acquired": {
    "event": "minecraft:become_angry"
}
```

#### dolphin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/dolphin.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:on_target_acquired": {
    "event": "become_angry",
    "target": "self"
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:on_target_acquired": {}
```

#### drowned

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/drowned.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:on_target_acquired": {
    "event": "minecraft:has_target",
    "target": "self"
}
```

#### enderman

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/enderman.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:on_target_acquired": {
    "event": "minecraft:become_angry",
    "target": "self"
}
```

#### hoglin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/hoglin.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:on_target_acquired": {
    "event": "become_angry_event",
    "target": "self"
}
```

#### llama

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/llama.json)</small>

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

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Aon_target_escape)</small>

<Spoiler title="Show">

#### creeper

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/creeper.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:on_target_escape": {
    "event": "minecraft:stop_exploding",
    "target": "self"
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:on_target_escape": {}
```

#### dolphin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/dolphin.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:on_target_escape": {
    "target": "self"
}
```

#### drowned

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/drowned.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:on_target_escape": {
    "event": "minecraft:lost_target",
    "target": "self"
}
```

#### llama

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/llama.json)</small>

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

#### magma_cube

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/magma_cube.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:on_target_escape": {
    "event": "minecraft:become_calm",
    "target": "self"
}
```

#### panda

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/panda.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:on_target_escape": {
    "event": "minecraft:on_calm",
    "target": "self"
}
```

#### pillager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/pillager.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:on_target_escape": {
    "event": "minecraft:calm",
    "target": "self"
}
```

</Spoiler>

## on_wake_with_owner

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Aon_wake_with_owner)</small>

<Spoiler title="Show">

#### cat

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/cat.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:on_wake_with_owner": {
    "event": "minecraft:pet_slept_with_owner",
    "target": "self"
}
```

</Spoiler>

## out_of_control

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Aout_of_control)</small>

<Spoiler title="Show">

#### boat

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/boat.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:out_of_control": {}
```

</Spoiler>

## peek

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Apeek)</small>

<Spoiler title="Show">

#### shulker

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/shulker.json)</small>

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

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Apersistent)</small>

<Spoiler title="Show">

#### armor_stand

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/armor_stand.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:persistent": {}
```

#### ender_dragon

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/ender_dragon.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:persistent": {}
```

#### evocation_illager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/evocation_illager.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:persistent": {}
```

#### iron_golem

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/iron_golem.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:persistent": {}
```

#### llama

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/llama.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:persistent": {}
```

#### npc

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/npc.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:persistent": {}
```

#### pillager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/pillager.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:persistent": {}
```

#### ravager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/ravager.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:persistent": {}
```

</Spoiler>

## physics

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Aphysics)</small>

<Spoiler title="Show">

#### area_effect_cloud

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/area_effect_cloud.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:physics": {
    "has_collision": false
}
```

#### armor_stand

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/armor_stand.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:physics": {}
```

#### arrow

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/arrow.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:physics": {}
```

#### axolotl

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/axolotl.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:physics": {}
```

#### bat

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/bat.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:physics": {}
```

#### bee

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/bee.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:physics": {}
```

#### blaze

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/blaze.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:physics": {}
```

#### boat

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/boat.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:physics": {}
```

</Spoiler>

## player.exhaustion

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Aplayer.exhaustion)</small>

<Spoiler title="Show">

#### player

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/player.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:player.exhaustion": {
    "value": 0,
    "max": 4
}
```

</Spoiler>

## player.experience

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Aplayer.experience)</small>

<Spoiler title="Show">

<CodeHeader></CodeHeader>

```json
"minecraft:player.experience": {
    "value": 0,
    "max": 1
}
```

</Spoiler>

## player.level

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Aplayer.level)</small>

<Spoiler title="Show">

<CodeHeader></CodeHeader>

```json
"minecraft:player.level": {
    "value": 0,
    "max": 24791
}
```

</Spoiler>

## player.saturation

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Aplayer.saturation)</small>

<Spoiler title="Show">

<CodeHeader></CodeHeader>

```json
"minecraft:player.saturation": {
    "value": 20
}
```

</Spoiler>

## preferred_path

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Apreferred_path)</small>

<Spoiler title="Show">

#### iron_golem

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/iron_golem.json)</small>

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

#### villager_v2

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/villager_v2.json)</small>

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

<CodeHeader></CodeHeader>

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

</Spoiler>

## projectile

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Aprojectile)</small>

<Spoiler title="Show">

#### arrow

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/arrow.json)</small>

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

<CodeHeader></CodeHeader>

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

<CodeHeader></CodeHeader>

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

<CodeHeader></CodeHeader>

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

#### dragon_fireball

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/dragon_fireball.json)</small>

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

#### egg

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/egg.json)</small>

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

#### ender_pearl

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/ender_pearl.json)</small>

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

<CodeHeader></CodeHeader>

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

</Spoiler>

## pushable

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Apushable)</small>

<Spoiler title="Show">

#### armor_stand

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/armor_stand.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:pushable": {
    "is_pushable": false,
    "is_pushable_by_piston": true
}
```

#### arrow

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/arrow.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:pushable": {
    "is_pushable": false,
    "is_pushable_by_piston": true
}
```

#### axolotl

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/axolotl.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

#### bee

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/bee.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

#### blaze

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/blaze.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

#### boat

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/boat.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

#### cat

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/cat.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

#### cave_spider

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/cave_spider.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

</Spoiler>

## raid_trigger

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Araid_trigger)</small>

<Spoiler title="Show">

#### player

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/player.json)</small>

<CodeHeader></CodeHeader>

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

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Arail_movement)</small>

<Spoiler title="Show">

#### chest_minecart

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/chest_minecart.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:rail_movement": {}
```

#### command_block_minecart

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/command_block_minecart.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:rail_movement": {}
```

#### hopper_minecart

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/hopper_minecart.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:rail_movement": {}
```

#### minecart

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/minecart.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:rail_movement": {}
```

#### tnt_minecart

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/tnt_minecart.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:rail_movement": {}
```

</Spoiler>

## rail_sensor

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Arail_sensor)</small>

<Spoiler title="Show">

#### command_block_minecart

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/command_block_minecart.json)</small>

<CodeHeader></CodeHeader>

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

<CodeHeader></CodeHeader>

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

#### hopper_minecart

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/hopper_minecart.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:rail_sensor": {
    "on_activate": {
        "event": "minecraft:hopper_deactivate"
    }
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:rail_sensor": {
    "on_deactivate": {
        "event": "minecraft:hopper_activate"
    }
}
```

#### minecart

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/minecart.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:rail_sensor": {
    "eject_on_activate": true
}
```

#### tnt_minecart

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/tnt_minecart.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:rail_sensor": {}
```

<CodeHeader></CodeHeader>

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

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Aravager_blocked)</small>

<Spoiler title="Show">

#### ravager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/ravager.json)</small>

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

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Arideable)</small>

<Spoiler title="Show">

#### boat

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/boat.json)</small>

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

#### cat

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/cat.json)</small>

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
            0.35,
            0.0
        ]
    }
}
```

#### cave_spider

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/cave_spider.json)</small>

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

<CodeHeader></CodeHeader>

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

<CodeHeader></CodeHeader>

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

#### chicken

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/chicken.json)</small>

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
            0.4,
            0.0
        ]
    }
}
```

#### cow

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/cow.json)</small>

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
            1.105,
            0.0
        ]
    }
}
```

#### donkey

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/donkey.json)</small>

<CodeHeader></CodeHeader>

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

</Spoiler>

## scale

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Ascale)</small>

<Spoiler title="Show">

#### axolotl

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/axolotl.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:scale": {
    "value": 0.5
}
```

#### bee

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/bee.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:scale": {
    "value": 0.5
}
```

#### cat

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/cat.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:scale": {
    "value": 0.4
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:scale": {
    "value": 0.8
}
```

#### chicken

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/chicken.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:scale": {
    "value": 0.5
}
```

#### cow

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/cow.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:scale": {
    "value": 0.5
}
```

#### dolphin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/dolphin.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:scale": {
    "value": 0.65
}
```

#### drowned

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/drowned.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:scale": {
    "value": 0.5
}
```

</Spoiler>

## scale_by_age

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Ascale_by_age)</small>

<Spoiler title="Show">

#### donkey

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/donkey.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:scale_by_age": {
    "start_scale": 0.5,
    "end_scale": 1.0
}
```

#### horse

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/horse.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:scale_by_age": {
    "start_scale": 0.5,
    "end_scale": 1.0
}
```

#### mule

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/mule.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:scale_by_age": {
    "start_scale": 0.5,
    "end_scale": 1.0
}
```

#### skeleton_horse

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/skeleton_horse.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:scale_by_age": {
    "start_scale": 0.5,
    "end_scale": 1.0
}
```

#### zombie_horse

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie_horse.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:scale_by_age": {
    "start_scale": 0.5,
    "end_scale": 1.0
}
```

</Spoiler>

## scheduler

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Ascheduler)</small>

<Spoiler title="Show">

#### fox

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/fox.json)</small>

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

#### villager_v2

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/villager_v2.json)</small>

<CodeHeader></CodeHeader>

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

<CodeHeader></CodeHeader>

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

<CodeHeader></CodeHeader>

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

<CodeHeader></CodeHeader>

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

<CodeHeader></CodeHeader>

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

<CodeHeader></CodeHeader>

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

<CodeHeader></CodeHeader>

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

</Spoiler>

## shareables

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Ashareables)</small>

<Spoiler title="Show">

#### drowned

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/drowned.json)</small>

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

#### fox

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/fox.json)</small>

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

#### husk

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/husk.json)</small>

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

#### piglin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/piglin.json)</small>

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

#### pillager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/pillager.json)</small>

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

#### skeleton

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/skeleton.json)</small>

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

#### stray

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/stray.json)</small>

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

#### villager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/villager.json)</small>

<CodeHeader></CodeHeader>

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
            "stored_in_inventory": true
        },
        {
            "item": "minecraft:beetroot_seeds",
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

</Spoiler>

## shooter

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Ashooter)</small>

<Spoiler title="Show">

#### blaze

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/blaze.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:shooter": {
    "def": "minecraft:small_fireball"
}
```

#### drowned

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/drowned.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:shooter": {
    "def": "minecraft:thrown_trident"
}
```

#### ender_dragon

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/ender_dragon.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:shooter": {
    "type": "dragonfireball",
    "def": "minecraft:dragon_fireball"
}
```

#### ghast

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/ghast.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:shooter": {
    "def": "minecraft:fireball"
}
```

#### llama

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/llama.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:shooter": {
    "def": "minecraft:llama_spit"
}
```

#### piglin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/piglin.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:shooter": {
    "def": "minecraft:arrow"
}
```

#### pillager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/pillager.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:shooter": {
    "def": "minecraft:arrow"
}
```

#### shulker

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/shulker.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:shooter": {
    "def": "minecraft:shulker_bullet"
}
```

</Spoiler>

## sittable

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Asittable)</small>

<Spoiler title="Show">

#### cat

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/cat.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:sittable": {}
```

#### ocelot

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/ocelot.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:sittable": {}
```

#### parrot

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/parrot.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:sittable": {}
```

#### wolf

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/wolf.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:sittable": {}
```

</Spoiler>

## skin_id

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Askin_id)</small>

<Spoiler title="Show">

#### villager_v2

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/villager_v2.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:skin_id": {
    "value": 0
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:skin_id": {
    "value": 1
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:skin_id": {
    "value": 2
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:skin_id": {
    "value": 3
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:skin_id": {
    "value": 4
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:skin_id": {
    "value": 5
}
```

#### zombie_villager_v2

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie_villager_v2.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:skin_id": {
    "value": 0
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:skin_id": {
    "value": 1
}
```

</Spoiler>

## spawn_entity

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Aspawn_entity)</small>

<Spoiler title="Show">

#### chicken

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/chicken.json)</small>

<CodeHeader></CodeHeader>

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

#### ocelot

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/ocelot.json)</small>

<CodeHeader></CodeHeader>

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

#### wandering_trader

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/wandering_trader.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:spawn_entity": {
    "entities": [
        {
            "min_wait_time": 0,
            "max_wait_time": 0,
            "spawn_entity": "llama",
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

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Aspell_effects)</small>

<Spoiler title="Show">

#### player

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/player.json)</small>

<CodeHeader></CodeHeader>

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

<CodeHeader></CodeHeader>

```json
"minecraft:spell_effects": {}
```

<CodeHeader></CodeHeader>

```json
"minecraft:spell_effects": {
    "remove_effects": "bad_omen"
}
```

#### zombie_villager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie_villager.json)</small>

<CodeHeader></CodeHeader>

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

#### zombie_villager_v2

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie_villager_v2.json)</small>

<CodeHeader></CodeHeader>

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

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Astrength)</small>

<Spoiler title="Show">

#### llama

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/llama.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:strength": {
    "value": 1,
    "max": 5
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:strength": {
    "value": 2,
    "max": 5
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:strength": {
    "value": 3,
    "max": 5
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:strength": {
    "value": 4,
    "max": 5
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:strength": {
    "value": 5,
    "max": 5
}
```

</Spoiler>

## tameable

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Atameable)</small>

<Spoiler title="Show">

#### cat

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/cat.json)</small>

<CodeHeader></CodeHeader>

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

#### parrot

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/parrot.json)</small>

<CodeHeader></CodeHeader>

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

#### wolf

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/wolf.json)</small>

<CodeHeader></CodeHeader>

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

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Atamemount)</small>

<Spoiler title="Show">

#### donkey

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/donkey.json)</small>

<CodeHeader></CodeHeader>

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

#### horse

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/horse.json)</small>

<CodeHeader></CodeHeader>

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

#### llama

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/llama.json)</small>

<CodeHeader></CodeHeader>

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

#### mule

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/mule.json)</small>

<CodeHeader></CodeHeader>

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

</Spoiler>

## target_nearby_sensor

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Atarget_nearby_sensor)</small>

<Spoiler title="Show">

#### blaze

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/blaze.json)</small>

<CodeHeader></CodeHeader>

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

#### creeper

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/creeper.json)</small>

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

<CodeHeader></CodeHeader>

```json
"minecraft:target_nearby_sensor": {}
```

#### drowned

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/drowned.json)</small>

<CodeHeader></CodeHeader>

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

#### guardian

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/guardian.json)</small>

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

</Spoiler>

## teleport

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Ateleport)</small>

<Spoiler title="Show">

#### enderman

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/enderman.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:teleport": {
    "random_teleports": true,
    "max_random_teleport_time": 30,
    "random_teleport_cube": [
        64,
        32,
        64
    ],
    "target_distance": 16,
    "target_teleport_chance": 0.05,
    "light_teleport_chance": 0.05
}
```

</Spoiler>

## timer

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Atimer)</small>

<Spoiler title="Show">

#### bee

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/bee.json)</small>

<CodeHeader></CodeHeader>

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

<CodeHeader></CodeHeader>

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

<CodeHeader></CodeHeader>

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

<CodeHeader></CodeHeader>

```json
"minecraft:timer": {
    "looping": true,
    "time": 180,
    "time_down_event": {
        "event": "find_flower_timeout"
    }
}
```

<CodeHeader></CodeHeader>

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

<CodeHeader></CodeHeader>

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

#### boat

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/boat.json)</small>

<CodeHeader></CodeHeader>

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

#### guardian

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/guardian.json)</small>

<CodeHeader></CodeHeader>

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

</Spoiler>

## trade_resupply

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Atrade_resupply)</small>

<Spoiler title="Show">

#### villager_v2

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/villager_v2.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:trade_resupply": {}
```

</Spoiler>

## trade_table

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Atrade_table)</small>

<Spoiler title="Show">

#### villager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/villager.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:trade_table": {
    "display_name": "entity.villager.farmer",
    "table": "trading/farmer_trades.json",
    "convert_trades_economy": true
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:trade_table": {
    "display_name": "entity.villager.fisherman",
    "table": "trading/fisherman_trades.json",
    "convert_trades_economy": true
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:trade_table": {
    "display_name": "entity.villager.shepherd",
    "table": "trading/shepherd_trades.json",
    "convert_trades_economy": true
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:trade_table": {
    "display_name": "entity.villager.fletcher",
    "table": "trading/fletcher_trades.json",
    "convert_trades_economy": true
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:trade_table": {
    "display_name": "entity.villager.librarian",
    "table": "trading/librarian_trades.json",
    "convert_trades_economy": true
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:trade_table": {
    "display_name": "entity.villager.cartographer",
    "table": "trading/cartographer_trades.json",
    "convert_trades_economy": true
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:trade_table": {
    "display_name": "entity.villager.cleric",
    "table": "trading/cleric_trades.json",
    "convert_trades_economy": true
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:trade_table": {
    "display_name": "entity.villager.armor",
    "table": "trading/armorer_trades.json",
    "convert_trades_economy": true
}
```

</Spoiler>

## trail

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Atrail)</small>

<Spoiler title="Show">

#### snow_golem

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/snow_golem.json)</small>

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

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Atransformation)</small>

<Spoiler title="Show">

#### hoglin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/hoglin.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:transformation": {
    "into": "minecraft:zoglin",
    "transformation_sound": "converted_to_zombified",
    "keep_level": true
}
```

#### husk

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/husk.json)</small>

<CodeHeader></CodeHeader>

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

<CodeHeader></CodeHeader>

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

#### mooshroom

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/mooshroom.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:transformation": {
    "into": "minecraft:cow"
}
```

#### pig

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/pig.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:transformation": {
    "into": "minecraft:pig_zombie",
    "delay": 0.5
}
```

#### piglin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/piglin.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:transformation": {
    "into": "minecraft:zombie_pigman",
    "transformation_sound": "converted_to_zombified",
    "keep_level": true,
    "drop_inventory": true,
    "preserve_equipment": true
}
```

#### piglin_brute

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/piglin_brute.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:transformation": {
    "into": "minecraft:zombie_pigman",
    "transformation_sound": "converted_to_zombified",
    "keep_level": true,
    "preserve_equipment": true
}
```

#### skeleton

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/skeleton.json)</small>

<CodeHeader></CodeHeader>

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

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Atrust)</small>

<Spoiler title="Show">

#### fox

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/fox.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:trust": {}
```

</Spoiler>

## trusting

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Atrusting)</small>

<Spoiler title="Show">

#### ocelot

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/ocelot.json)</small>

<CodeHeader></CodeHeader>

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

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Atype_family)</small>

<Spoiler title="Show">

#### armor_stand

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/armor_stand.json)</small>

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

#### axolotl

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/axolotl.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:type_family": {
    "family": [
        "axolotl",
        "mob"
    ]
}
```

#### bat

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/bat.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:type_family": {
    "family": [
        "bat",
        "mob"
    ]
}
```

#### bee

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/bee.json)</small>

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

<CodeHeader></CodeHeader>

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

#### blaze

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/blaze.json)</small>

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

#### boat

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/boat.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:type_family": {
    "family": [
        "boat",
        "inanimate"
    ]
}
```

#### cat

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/cat.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:type_family": {
    "family": [
        "cat",
        "mob"
    ]
}
```

</Spoiler>

## underwater_movement

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Aunderwater_movement)</small>

<Spoiler title="Show">

#### axolotl

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/axolotl.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:underwater_movement": {
    "value": 0.2
}
```

#### dolphin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/dolphin.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:underwater_movement": {
    "value": 0.15
}
```

#### drowned

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/drowned.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:underwater_movement": {
    "value": 0.06
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:underwater_movement": {
    "value": 0.08
}
```

#### elder_guardian

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/elder_guardian.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:underwater_movement": {
    "value": 0.3
}
```

#### fish

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/fish.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:underwater_movement": {
    "value": 0.1
}
```

#### guardian

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/guardian.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:underwater_movement": {
    "value": 0.12
}
```

#### pufferfish

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/pufferfish.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:underwater_movement": {
    "value": 0.13
}
```

</Spoiler>

## variant

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Avariant)</small>

<Spoiler title="Show">

#### axolotl

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/axolotl.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:variant": {
    "value": 0
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:variant": {
    "value": 1
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:variant": {
    "value": 2
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:variant": {
    "value": 3
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:variant": {
    "value": 4
}
```

#### cat

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/cat.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:variant": {
    "value": 0
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:variant": {
    "value": 1
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:variant": {
    "value": 2
}
```

</Spoiler>

## water_movement

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Awater_movement)</small>

<Spoiler title="Show">

#### panda

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/panda.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:water_movement": {
    "drag_factor": 0.98
}
```

#### polar_bear

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/polar_bear.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:water_movement": {
    "drag_factor": 0.98
}
```

#### turtle

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/turtle.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:water_movement": {
    "drag_factor": 0.9
}
```

</Spoiler>