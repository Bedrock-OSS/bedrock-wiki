---
title: Vanilla Usage Components
category: Documentation
---

This documentation is stripped from the vanilla files using an automated script. If there is an issue, you can tell us about it in [Bedrock OSS](https://discord.gg/XjV87YN) Discord server.

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

<CodeHeader></CodeHeader>

```json
"minecraft:addrider": {
    "entity_type": "minecraft:vindicator",
    "spawn_event": "minecraft:spawn_as_illager_captain"
}
```

#### spider

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/spider.json)</small>

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

#### strider

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/strider.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:addrider": {
    "entity_type": "minecraft:zombie_pigman",
    "spawn_event": "minecraft:spawn_as_strider_jockey"
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:addrider": {
    "entity_type": "minecraft:strider",
    "spawn_event": "spawn_baby"
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

#### goat

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/goat.json)</small>

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

#### hoglin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/hoglin.json)</small>

<CodeHeader></CodeHeader>

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

#### horse

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/horse.json)</small>

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

#### llama

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/llama.json)</small>

<CodeHeader></CodeHeader>

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

#### mooshroom

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/mooshroom.json)</small>

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

#### mule

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/mule.json)</small>

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

#### ocelot

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/ocelot.json)</small>

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

#### panda

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/panda.json)</small>

<CodeHeader></CodeHeader>

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

#### pig

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/pig.json)</small>

<CodeHeader></CodeHeader>

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

#### polar_bear

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/polar_bear.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:ageable": {
    "duration": 1200,
    "grow_up": {
        "event": "minecraft:ageable_grow_up",
        "target": "self"
    }
}
```

#### rabbit

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/rabbit.json)</small>

<CodeHeader></CodeHeader>

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

#### sheep

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/sheep.json)</small>

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

#### skeleton_horse

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/skeleton_horse.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:ageable": {
    "duration": 1200,
    "grow_up": {
        "event": "minecraft:ageable_grow_up",
        "target": "self"
    }
}
```

#### strider

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/strider.json)</small>

<CodeHeader></CodeHeader>

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

#### turtle

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/turtle.json)</small>

<CodeHeader></CodeHeader>

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

#### villager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/villager.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:ageable": {
    "duration": 1200,
    "grow_up": {
        "event": "minecraft:ageable_grow_up",
        "target": "self"
    }
}
```

#### villager_v2

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/villager_v2.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:ageable": {
    "duration": 1200,
    "grow_up": {
        "event": "minecraft:ageable_grow_up",
        "target": "self"
    }
}
```

#### wolf

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/wolf.json)</small>

<CodeHeader></CodeHeader>

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

#### zombie_horse

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie_horse.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:ageable": {
    "duration": 1200,
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

#### vindicator

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/vindicator.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:ambient_sound_interval": {
    "value": 2.0,
    "range": 4.0,
    "event_name": "ambient.in.raid"
}
```

#### witch

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/witch.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:ambient_sound_interval": {
    "value": 2.0,
    "range": 4.0,
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

#### panda

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/panda.json)</small>

<CodeHeader></CodeHeader>

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

<CodeHeader></CodeHeader>

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

#### piglin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/piglin.json)</small>

<CodeHeader></CodeHeader>

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

#### piglin_brute

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/piglin_brute.json)</small>

<CodeHeader></CodeHeader>

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

#### polar_bear

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/polar_bear.json)</small>

<CodeHeader></CodeHeader>

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

<CodeHeader></CodeHeader>

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

#### silverfish

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/silverfish.json)</small>

<CodeHeader></CodeHeader>

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

#### spider

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/spider.json)</small>

<CodeHeader></CodeHeader>

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

#### vindicator

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/vindicator.json)</small>

<CodeHeader></CodeHeader>

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

#### wandering_trader

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/wandering_trader.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:angry": {
    "duration": 5,
    "broadcastAnger": true,
    "broadcastRange": 10,
    "broadcast_targets": [
        "llama"
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

#### wolf

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/wolf.json)</small>

<CodeHeader></CodeHeader>

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

#### zombie_pigman

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie_pigman.json)</small>

<CodeHeader></CodeHeader>

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

#### creeper

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/creeper.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:attack": {
    "damage": 3
}
```

#### dolphin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/dolphin.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:attack": {
    "damage": 3
}
```

#### drowned

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/drowned.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:attack": {
    "damage": 3
}
```

#### elder_guardian

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/elder_guardian.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:attack": {
    "damage": 5
}
```

#### enderman

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/enderman.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:attack": {
    "damage": 7
}
```

#### endermite

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/endermite.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:attack": {
    "damage": 2
}
```

#### ender_dragon

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/ender_dragon.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:attack": {
    "damage": 3
}
```

#### fox

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/fox.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:attack": {
    "damage": 2
}
```

#### goat

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/goat.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:attack": {
    "damage": 1
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:attack": {
    "damage": 2
}
```

#### guardian

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/guardian.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:attack": {
    "damage": 5
}
```

#### hoglin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/hoglin.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:attack": {
    "damage": 1.0
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:attack": {
    "damage": [
        3,
        9
    ]
}
```

#### husk

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/husk.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:attack": {
    "damage": 3,
    "effect_name": "hunger",
    "effect_duration": 30
}
```

#### iron_golem

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/iron_golem.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:attack": {
    "damage": {
        "range_min": 7,
        "range_max": 21
    }
}
```

#### magma_cube

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/magma_cube.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:attack": {
    "damage": 6
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:attack": {
    "damage": 4
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:attack": {
    "damage": 2
}
```

#### panda

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/panda.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:attack": {
    "damage": 2.0
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:attack": {
    "damage": 6.0
}
```

#### phantom

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/phantom.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:attack": {
    "damage": 6
}
```

#### piglin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/piglin.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:attack": {
    "damage": 5
}
```

#### piglin_brute

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/piglin_brute.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:attack": {
    "damage": 7
}
```

#### pillager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/pillager.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:attack": {
    "damage": 3
}
```

#### player

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/player.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:attack": {
    "damage": 1
}
```

#### polar_bear

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/polar_bear.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:attack": {
    "damage": 6.0
}
```

#### ravager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/ravager.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:attack": {
    "damage": 12.0
}
```

#### silverfish

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/silverfish.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:attack": {
    "damage": 1
}
```

#### skeleton

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/skeleton.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:attack": {
    "damage": 3
}
```

#### slime

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/slime.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:attack": {
    "damage": 4
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:attack": {
    "damage": 2
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:attack": {
    "damage": 0
}
```

#### snow_golem

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/snow_golem.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:attack": {
    "damage": 2
}
```

#### spider

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/spider.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:attack": {
    "damage": 3
}
```

#### stray

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/stray.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:attack": {
    "damage": 3,
    "effect_name": "slowness",
    "effect_duration": 10
}
```

#### vex

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/vex.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:attack": {
    "damage": 3
}
```

#### vindicator

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/vindicator.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:attack": {
    "damage": 8
}
```

#### wither_skeleton

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/wither_skeleton.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:attack": {
    "damage": 4,
    "effect_name": "wither",
    "effect_duration": 10
}
```

#### wolf

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/wolf.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:attack": {
    "damage": 3
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:attack": {
    "damage": 4
}
```

#### zoglin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zoglin.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:attack": {
    "damage": 1
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:attack": {
    "damage": [
        3,
        8
    ]
}
```

#### zombie

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:attack": {
    "damage": 3
}
```

#### zombie_pigman

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie_pigman.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:attack": {
    "damage": 5
}
```

#### zombie_villager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie_villager.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:attack": {
    "damage": 3
}
```

#### zombie_villager_v2

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie_villager_v2.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:attack": {
    "damage": 3
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

#### fox

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/fox.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:balloonable": {
    "mass": 0.6
}
```

#### glow_squid

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/glow_squid.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:balloonable": {
    "mass": 0.5
}
```

#### goat

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/goat.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:balloonable": {}
```

#### hoglin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/hoglin.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:balloonable": {}
```

#### horse

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/horse.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:balloonable": {}
```

#### iron_golem

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/iron_golem.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:balloonable": {
    "mass": 2.0
}
```

#### llama

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/llama.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:balloonable": {}
```

#### mooshroom

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/mooshroom.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:balloonable": {}
```

#### mule

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/mule.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:balloonable": {}
```

#### ocelot

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/ocelot.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:balloonable": {
    "mass": 0.7
}
```

#### panda

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/panda.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:balloonable": {}
```

#### parrot

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/parrot.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:balloonable": {}
```

#### pig

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/pig.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:balloonable": {
    "mass": 0.9
}
```

#### polar_bear

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/polar_bear.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:balloonable": {}
```

#### rabbit

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/rabbit.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:balloonable": {
    "mass": 0.4
}
```

#### sheep

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/sheep.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:balloonable": {
    "mass": 0.75
}
```

#### skeleton_horse

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/skeleton_horse.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:balloonable": {}
```

#### snow_golem

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/snow_golem.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:balloonable": {}
```

#### squid

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/squid.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:balloonable": {
    "mass": 0.5
}
```

#### strider

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/strider.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:balloonable": {}
```

#### wolf

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/wolf.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:balloonable": {
    "mass": 0.8
}
```

#### zoglin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zoglin.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:balloonable": {}
```

#### zombie_horse

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie_horse.json)</small>

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

#### ocelot

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/ocelot.json)</small>

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
            "max_dist": 10,
            "walk_speed_multiplier": 0.8,
            "sprint_speed_multiplier": 1.33
        }
    ]
}
```

#### panda

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/panda.json)</small>

<CodeHeader></CodeHeader>

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

#### phantom

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/phantom.json)</small>

<CodeHeader></CodeHeader>

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

#### piglin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/piglin.json)</small>

<CodeHeader></CodeHeader>

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

#### pufferfish

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/pufferfish.json)</small>

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

#### rabbit

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/rabbit.json)</small>

<CodeHeader></CodeHeader>

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

#### salmon

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/salmon.json)</small>

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
            "max_dist": 3,
            "max_flee": 10,
            "walk_speed_multiplier": 1.5,
            "sprint_speed_multiplier": 2.0
        }
    ]
}
```

#### skeleton

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/skeleton.json)</small>

<CodeHeader></CodeHeader>

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

#### stray

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/stray.json)</small>

<CodeHeader></CodeHeader>

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

#### tropicalfish

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/tropicalfish.json)</small>

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

#### villager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/villager.json)</small>

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

#### villager_v2

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/villager_v2.json)</small>

<CodeHeader></CodeHeader>

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

#### wandering_trader

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/wandering_trader.json)</small>

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

#### wolf

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/wolf.json)</small>

<CodeHeader></CodeHeader>

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

#### hoglin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/hoglin.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.breed": {
    "priority": 3,
    "speed_multiplier": 0.6
}
```

#### horse

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/horse.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.breed": {
    "priority": 2,
    "speed_multiplier": 1.0
}
```

#### llama

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/llama.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.breed": {
    "priority": 4,
    "speed_multiplier": 1.0
}
```

#### mooshroom

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/mooshroom.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.breed": {
    "priority": 3,
    "speed_multiplier": 1.0
}
```

#### ocelot

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/ocelot.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.breed": {
    "priority": 3,
    "speed_multiplier": 1.0
}
```

#### panda

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/panda.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.breed": {
    "priority": 3,
    "speed_multiplier": 1.0
}
```

#### pig

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/pig.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.breed": {
    "priority": 4,
    "speed_multiplier": 1.0
}
```

#### rabbit

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/rabbit.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.breed": {
    "priority": 2,
    "speed_multiplier": 0.8
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.breed": {
    "priority": 2,
    "speed_multiplier": 1.0
}
```

#### sheep

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/sheep.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.breed": {
    "priority": 3,
    "speed_multiplier": 1.0
}
```

#### strider

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/strider.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.breed": {
    "priority": 4,
    "speed_multiplier": 1.0
}
```

#### turtle

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/turtle.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.breed": {
    "priority": 2,
    "speed_multiplier": 1.0
}
```

#### wolf

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/wolf.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.breed": {
    "priority": 2,
    "speed_multiplier": 1.0
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

#### zombie

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.equip_item": {
    "priority": 2
}
```

#### zombie_pigman

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie_pigman.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.equip_item": {
    "priority": 3
}
```

#### zombie_villager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie_villager.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.equip_item": {
    "priority": 3
}
```

#### zombie_villager_v2

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie_villager_v2.json)</small>

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

#### donkey

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/donkey.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.float": {
    "priority": 0
}
```

#### enderman

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/enderman.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.float": {
    "priority": 0
}
```

#### endermite

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/endermite.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.float": {
    "priority": 0
}
```

#### evocation_illager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/evocation_illager.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.float": {
    "priority": 0
}
```

#### fox

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/fox.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.float": {
    "priority": 0
}
```

#### ghast

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/ghast.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.float": {
    "priority": 0
}
```

#### goat

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/goat.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.float": {
    "priority": 0
}
```

#### horse

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/horse.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.float": {
    "priority": 0
}
```

#### llama

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/llama.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.float": {
    "priority": 0
}
```

#### mooshroom

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/mooshroom.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.float": {
    "priority": 0
}
```

#### mule

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/mule.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.float": {
    "priority": 0
}
```

#### ocelot

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/ocelot.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.float": {
    "priority": 0
}
```

#### panda

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/panda.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.float": {
    "priority": 0
}
```

#### parrot

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/parrot.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.float": {
    "priority": 0
}
```

#### pig

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/pig.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.float": {
    "priority": 2
}
```

#### pillager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/pillager.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.float": {
    "priority": 0
}
```

#### polar_bear

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/polar_bear.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.float": {
    "priority": 0
}
```

#### rabbit

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/rabbit.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.float": {
    "priority": 0
}
```

#### ravager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/ravager.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.float": {
    "priority": 0
}
```

#### sheep

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/sheep.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.float": {
    "priority": 0
}
```

#### silverfish

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/silverfish.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.float": {
    "priority": 1
}
```

#### spider

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/spider.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.float": {
    "priority": 1
}
```

#### vex

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/vex.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.float": {
    "priority": 0
}
```

#### villager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/villager.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.float": {
    "priority": 0
}
```

#### villager_v2

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/villager_v2.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.float": {
    "priority": 0
}
```

#### vindicator

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/vindicator.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.float": {
    "priority": 0
}
```

#### wandering_trader

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/wandering_trader.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.float": {
    "priority": 0
}
```

#### witch

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/witch.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.float": {
    "priority": 1
}
```

#### wither

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/wither.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.float": {
    "priority": 1
}
```

#### wolf

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/wolf.json)</small>

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

#### goat

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/goat.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.follow_parent": {
    "priority": 6,
    "speed_multiplier": 1
}
```

#### hoglin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/hoglin.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.follow_parent": {
    "priority": 6,
    "speed_multiplier": 1
}
```

#### horse

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/horse.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.follow_parent": {
    "priority": 4,
    "speed_multiplier": 1.0
}
```

#### llama

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/llama.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.follow_parent": {
    "priority": 5,
    "speed_multiplier": 1.0
}
```

#### mooshroom

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/mooshroom.json)</small>

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

#### mule

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/mule.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.follow_parent": {
    "priority": 4,
    "speed_multiplier": 1.0
}
```

#### panda

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/panda.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.follow_parent": {
    "priority": 13,
    "speed_multiplier": 1.1
}
```

#### pig

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/pig.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.follow_parent": {
    "priority": 6,
    "speed_multiplier": 1.1
}
```

#### polar_bear

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/polar_bear.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.follow_parent": {
    "priority": 4,
    "speed_multiplier": 1.25
}
```

#### rabbit

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/rabbit.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.follow_parent": {
    "priority": 6,
    "speed_multiplier": 1.1
}
```

#### sheep

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/sheep.json)</small>

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

#### skeleton_horse

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/skeleton_horse.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.follow_parent": {
    "priority": 4,
    "speed_multiplier": 1.0
}
```

#### strider

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/strider.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.follow_parent": {
    "priority": 6,
    "speed_multiplier": 1.1
}
```

#### zombie_horse

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie_horse.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.follow_parent": {
    "priority": 4,
    "speed_multiplier": 1.0
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

#### ghast

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/ghast.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.hurt_by_target": {
    "priority": 1
}
```

#### hoglin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/hoglin.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.hurt_by_target": {
    "priority": 2
}
```

#### husk

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/husk.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.hurt_by_target": {
    "priority": 1
}
```

#### iron_golem

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/iron_golem.json)</small>

<CodeHeader></CodeHeader>

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

<CodeHeader></CodeHeader>

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

#### llama

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/llama.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.hurt_by_target": {
    "priority": 1,
    "hurt_owner": true
}
```

#### panda

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/panda.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.hurt_by_target": {
    "priority": 1
}
```

#### piglin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/piglin.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.hurt_by_target": {
    "priority": 1
}
```

#### piglin_brute

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/piglin_brute.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.hurt_by_target": {
    "priority": 1
}
```

#### pillager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/pillager.json)</small>

<CodeHeader></CodeHeader>

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

#### polar_bear

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/polar_bear.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.hurt_by_target": {
    "priority": 1
}
```

#### ravager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/ravager.json)</small>

<CodeHeader></CodeHeader>

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

#### shulker

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/shulker.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.hurt_by_target": {
    "priority": 2
}
```

#### silverfish

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/silverfish.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.hurt_by_target": {
    "priority": 1,
    "alert_same_type": true
}
```

#### skeleton

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/skeleton.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.hurt_by_target": {
    "priority": 1
}
```

#### spider

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/spider.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.hurt_by_target": {
    "priority": 1
}
```

#### stray

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/stray.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.hurt_by_target": {
    "priority": 1
}
```

#### turtle

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/turtle.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.hurt_by_target": {
    "priority": 1
}
```

#### vex

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/vex.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.hurt_by_target": {
    "priority": 1
}
```

#### vindicator

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/vindicator.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.hurt_by_target": {
    "priority": 1
}
```

#### witch

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/witch.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.hurt_by_target": {
    "priority": 1
}
```

#### wither

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/wither.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.hurt_by_target": {
    "priority": 2
}
```

#### wither_skeleton

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/wither_skeleton.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.hurt_by_target": {
    "priority": 1
}
```

#### wolf

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/wolf.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.hurt_by_target": {
    "priority": 3
}
```

#### zoglin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zoglin.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.hurt_by_target": {
    "priority": 1
}
```

#### zombie

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.hurt_by_target": {
    "priority": 1
}
```

#### zombie_pigman

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie_pigman.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.hurt_by_target": {
    "priority": 1
}
```

#### zombie_villager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie_villager.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.hurt_by_target": {
    "priority": 1
}
```

#### zombie_villager_v2

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie_villager_v2.json)</small>

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

#### drowned

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/drowned.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.look_at_player": {
    "priority": 8,
    "look_distance": 6,
    "probability": 0.02
}
```

#### elder_guardian

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/elder_guardian.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.look_at_player": {
    "priority": 8,
    "look_distance": 12.0,
    "probability": 0.01
}
```

#### enderman

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/enderman.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.look_at_player": {
    "priority": 8,
    "look_distance": 8.0,
    "probability": 8.0
}
```

#### evocation_illager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/evocation_illager.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.look_at_player": {
    "priority": 9,
    "look_distance": 3.0,
    "probability": 1.0
}
```

#### fox

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/fox.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.look_at_player": {
    "priority": 14,
    "look_distance": 6.0,
    "probability": 0.02
}
```

#### goat

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/goat.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.look_at_player": {
    "priority": 10,
    "look_distance": 6,
    "probability": 0.02
}
```

#### guardian

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/guardian.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.look_at_player": {
    "priority": 8,
    "look_distance": 12.0,
    "probability": 0.01
}
```

#### hoglin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/hoglin.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.look_at_player": {
    "priority": 8,
    "look_distance": 6.0,
    "probability": 0.02
}
```

#### horse

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/horse.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.look_at_player": {
    "priority": 7,
    "look_distance": 6.0,
    "probability": 0.02
}
```

#### husk

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/husk.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.look_at_player": {
    "priority": 8,
    "look_distance": 6,
    "probability": 0.02
}
```

#### iron_golem

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/iron_golem.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.look_at_player": {
    "priority": 7,
    "look_distance": 6.0,
    "probability": 0.02
}
```

#### llama

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/llama.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.look_at_player": {
    "priority": 7,
    "look_distance": 6.0,
    "probability": 0.02
}
```

#### mooshroom

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/mooshroom.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.look_at_player": {
    "priority": 7,
    "look_distance": 6.0,
    "probability": 0.02
}
```

#### mule

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/mule.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.look_at_player": {
    "priority": 7,
    "look_distance": 6.0,
    "probability": 0.02
}
```

#### npc

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/npc.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.look_at_player": {
    "priority": 0,
    "look_distance": 6.0,
    "probability": 0.02
}
```

#### ocelot

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/ocelot.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.look_at_player": {
    "priority": 9
}
```

#### panda

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/panda.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.look_at_player": {
    "priority": 8,
    "look_distance": 6.0,
    "probability": 0.02
}
```

#### parrot

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/parrot.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.look_at_player": {
    "priority": 1,
    "look_distance": 8.0
}
```

#### pig

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/pig.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.look_at_player": {
    "priority": 8,
    "look_distance": 6.0,
    "probability": 0.02
}
```

#### piglin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/piglin.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.look_at_player": {
    "priority": 11,
    "look_distance": 8
}
```

#### piglin_brute

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/piglin_brute.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.look_at_player": {
    "priority": 8,
    "look_distance": 8
}
```

#### pillager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/pillager.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.look_at_player": {
    "priority": 9,
    "look_distance": 8
}
```

#### polar_bear

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/polar_bear.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.look_at_player": {
    "priority": 6,
    "target_distance": 6.0,
    "probability": 0.02
}
```

#### rabbit

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/rabbit.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.look_at_player": {
    "priority": 11
}
```

#### ravager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/ravager.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.look_at_player": {
    "priority": 7,
    "look_distance": 6,
    "angle_of_view_horizontal": 45,
    "probability": 1
}
```

#### sheep

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/sheep.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.look_at_player": {
    "priority": 8,
    "look_distance": 6.0,
    "probability": 0.02
}
```

#### shulker

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/shulker.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.look_at_player": {
    "priority": 1,
    "look_distance": 6.0,
    "probability": 0.02
}
```

#### skeleton

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/skeleton.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.look_at_player": {
    "priority": 7,
    "look_distance": 8
}
```

#### skeleton_horse

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/skeleton_horse.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.look_at_player": {
    "priority": 7,
    "look_distance": 6.0,
    "probability": 0.02
}
```

#### snow_golem

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/snow_golem.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.look_at_player": {
    "priority": 3,
    "look_distance": 6.0
}
```

#### spider

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/spider.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.look_at_player": {
    "priority": 7,
    "look_distance": 6.0,
    "probability": 0.02
}
```

#### stray

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/stray.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.look_at_player": {
    "priority": 7,
    "look_distance": 8
}
```

#### strider

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/strider.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.look_at_player": {
    "priority": 9,
    "look_distance": 6.0,
    "probability": 0.02
}
```

#### turtle

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/turtle.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.look_at_player": {
    "priority": 8,
    "target_distance": 6.0,
    "probability": 0.02
}
```

#### vex

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/vex.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.look_at_player": {
    "priority": 9,
    "look_distance": 6.0,
    "probability": 0.02
}
```

#### villager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/villager.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.look_at_player": {
    "priority": 12,
    "look_distance": 8,
    "probability": 0.02
}
```

#### villager_v2

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/villager_v2.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.look_at_player": {
    "priority": 8,
    "look_distance": 8,
    "probability": 0.02
}
```

#### vindicator

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/vindicator.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.look_at_player": {
    "priority": 10,
    "look_distance": 8,
    "probability": 0.02
}
```

#### wandering_trader

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/wandering_trader.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.look_at_player": {
    "priority": 8,
    "look_distance": 8,
    "probability": 0.02
}
```

#### witch

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/witch.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.look_at_player": {
    "priority": 5,
    "look_distance": 8.0
}
```

#### wither

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/wither.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.look_at_player": {
    "priority": 6,
    "look_distance": 8
}
```

#### wither_skeleton

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/wither_skeleton.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.look_at_player": {
    "priority": 7,
    "look_distance": 8
}
```

#### wolf

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/wolf.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.look_at_player": {
    "priority": 6,
    "target_distance": 6.0,
    "probability": 0.02
}
```

#### zoglin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zoglin.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.look_at_player": {
    "priority": 8,
    "look_distance": 6.0,
    "probability": 0.02
}
```

#### zombie

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.look_at_player": {
    "priority": 8,
    "look_distance": 6,
    "probability": 0.02
}
```

#### zombie_horse

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie_horse.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.look_at_player": {
    "priority": 7,
    "look_distance": 6.0,
    "probability": 0.02
}
```

#### zombie_pigman

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie_pigman.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.look_at_player": {
    "priority": 8,
    "look_distance": 6.0,
    "probability": 0.02
}
```

#### zombie_villager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie_villager.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.look_at_player": {
    "priority": 10,
    "look_distance": 6,
    "probability": 0.02
}
```

#### zombie_villager_v2

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie_villager_v2.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.look_at_player": {
    "priority": 10,
    "look_distance": 6,
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

#### enderman

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/enderman.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.melee_attack": {
    "priority": 2
}
```

#### endermite

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/endermite.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.melee_attack": {
    "priority": 3,
    "track_target": true
}
```

#### fox

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/fox.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.melee_attack": {
    "priority": 10,
    "track_target": true,
    "require_complete_path": true,
    "reach_multiplier": 1.5
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.melee_attack": {
    "priority": 1,
    "track_target": true,
    "require_complete_path": true,
    "reach_multiplier": 1.5
}
```

#### hoglin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/hoglin.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.melee_attack": {
    "priority": 4,
    "speed_multiplier": 1,
    "track_target": true,
    "reach_multiplier": 1.0,
    "cooldown_time": 0.75
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.melee_attack": {
    "priority": 4,
    "speed_multiplier": 1,
    "track_target": true,
    "reach_multiplier": 2.5,
    "cooldown_time": 2
}
```

#### husk

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/husk.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.melee_attack": {
    "priority": 3
}
```

#### iron_golem

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/iron_golem.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.melee_attack": {
    "priority": 1,
    "track_target": true
}
```

#### panda

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/panda.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.melee_attack": {
    "priority": 2,
    "attack_once": true,
    "track_target": true,
    "reach_multiplier": 1.0
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.melee_attack": {
    "priority": 2,
    "track_target": true,
    "reach_multiplier": 1.0
}
```

#### piglin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/piglin.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.melee_attack": {
    "priority": 8,
    "speed_multiplier": 1.0,
    "track_target": true
}
```

#### piglin_brute

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/piglin_brute.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.melee_attack": {
    "priority": 4,
    "speed_multiplier": 1,
    "track_target": true
}
```

#### pillager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/pillager.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.melee_attack": {
    "priority": 4,
    "track_target": true
}
```

#### silverfish

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/silverfish.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.melee_attack": {
    "priority": 4,
    "track_target": true
}
```

#### skeleton

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/skeleton.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.melee_attack": {
    "priority": 4,
    "track_target": true,
    "speed_multiplier": 1.25
}
```

#### spider

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/spider.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.melee_attack": {
    "priority": 3,
    "track_target": true,
    "reach_multiplier": 0.8
}
```

#### stray

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/stray.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.melee_attack": {
    "priority": 4,
    "track_target": true,
    "speed_multiplier": 1.25
}
```

#### vindicator

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/vindicator.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.melee_attack": {
    "priority": 3
}
```

#### wither_skeleton

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/wither_skeleton.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.melee_attack": {
    "priority": 4,
    "track_target": true,
    "speed_multiplier": 1.25
}
```

#### wolf

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/wolf.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.melee_attack": {
    "priority": 5
}
```

#### zoglin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zoglin.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.melee_attack": {
    "priority": 4,
    "speed_multiplier": 1.4,
    "track_target": true
}
```

#### zombie

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.melee_attack": {
    "priority": 3
}
```

#### zombie_pigman

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie_pigman.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.melee_attack": {
    "priority": 4,
    "speed_multiplier": 1.5
}
```

#### zombie_villager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie_villager.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.melee_attack": {
    "priority": 6
}
```

#### zombie_villager_v2

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie_villager_v2.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.melee_attack": {
    "priority": 6
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

#### mooshroom

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/mooshroom.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.mount_pathing": {
    "priority": 2,
    "speed_multiplier": 1.5,
    "target_dist": 0.0,
    "track_target": true
}
```

#### mule

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/mule.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.mount_pathing": {
    "priority": 2,
    "speed_multiplier": 1.5,
    "target_dist": 0.0,
    "track_target": true
}
```

#### ocelot

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/ocelot.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.mount_pathing": {
    "priority": 1,
    "speed_multiplier": 1.25,
    "target_dist": 0,
    "track_target": true
}
```

#### panda

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/panda.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.mount_pathing": {
    "priority": 5,
    "speed_multiplier": 1.5,
    "target_dist": 0.0,
    "track_target": true
}
```

#### pig

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/pig.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.mount_pathing": {
    "priority": 1,
    "speed_multiplier": 1.25,
    "target_dist": 0.0,
    "track_target": true
}
```

#### ravager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/ravager.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.mount_pathing": {
    "priority": 5,
    "speed_multiplier": 1.25,
    "target_dist": 0.0,
    "track_target": true
}
```

#### sheep

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/sheep.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.mount_pathing": {
    "priority": 2,
    "speed_multiplier": 1.5,
    "target_dist": 0.0,
    "track_target": true
}
```

#### skeleton_horse

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/skeleton_horse.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.mount_pathing": {
    "priority": 2,
    "speed_multiplier": 1.5,
    "target_dist": 4.0,
    "track_target": true
}
```

#### spider

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/spider.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.mount_pathing": {
    "priority": 5,
    "speed_multiplier": 1.25,
    "target_dist": 0.0,
    "track_target": true
}
```

#### wolf

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/wolf.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.mount_pathing": {
    "priority": 1,
    "speed_multiplier": 1.25,
    "target_dist": 0,
    "track_target": true
}
```

#### zombie

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.mount_pathing": {
    "priority": 2,
    "speed_multiplier": 1.25,
    "target_dist": 0.0,
    "track_target": true
}
```

#### zombie_horse

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie_horse.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.mount_pathing": {
    "priority": 2,
    "speed_multiplier": 1.5,
    "target_dist": 0.0,
    "track_target": true
}
```

#### zombie_pigman

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie_pigman.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.mount_pathing": {
    "priority": 2,
    "speed_multiplier": 1.25,
    "target_dist": 0,
    "track_target": true
}
```

#### zombie_villager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie_villager.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.mount_pathing": {
    "priority": 5,
    "speed_multiplier": 1.25,
    "target_dist": 0.0,
    "track_target": true
}
```

#### zombie_villager_v2

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie_villager_v2.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.mount_pathing": {
    "priority": 5,
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

#### elder_guardian

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/elder_guardian.json)</small>

<CodeHeader></CodeHeader>

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

#### enderman

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/enderman.json)</small>

<CodeHeader></CodeHeader>

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

#### endermite

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/endermite.json)</small>

<CodeHeader></CodeHeader>

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

#### evocation_illager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/evocation_illager.json)</small>

<CodeHeader></CodeHeader>

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

#### ghast

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/ghast.json)</small>

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
            "max_dist": 28
        }
    ],
    "must_see": true
}
```

#### goat

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/goat.json)</small>

<CodeHeader></CodeHeader>

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

#### guardian

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/guardian.json)</small>

<CodeHeader></CodeHeader>

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

#### hoglin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/hoglin.json)</small>

<CodeHeader></CodeHeader>

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

#### husk

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/husk.json)</small>

<CodeHeader></CodeHeader>

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

#### iron_golem

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/iron_golem.json)</small>

<CodeHeader></CodeHeader>

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

#### llama

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/llama.json)</small>

<CodeHeader></CodeHeader>

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

#### magma_cube

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/magma_cube.json)</small>

<CodeHeader></CodeHeader>

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

#### ocelot

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/ocelot.json)</small>

<CodeHeader></CodeHeader>

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

#### phantom

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/phantom.json)</small>

<CodeHeader></CodeHeader>

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

#### piglin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/piglin.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.nearest_attackable_target": {
    "priority": 7,
    "within_radius": 16.0,
    "persist_time": 2.0,
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
            "max_dist": 16
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

<CodeHeader></CodeHeader>

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

#### piglin_brute

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/piglin_brute.json)</small>

<CodeHeader></CodeHeader>

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

#### pillager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/pillager.json)</small>

<CodeHeader></CodeHeader>

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

#### polar_bear

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/polar_bear.json)</small>

<CodeHeader></CodeHeader>

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

<CodeHeader></CodeHeader>

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

#### ravager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/ravager.json)</small>

<CodeHeader></CodeHeader>

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

#### shulker

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/shulker.json)</small>

<CodeHeader></CodeHeader>

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

#### silverfish

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/silverfish.json)</small>

<CodeHeader></CodeHeader>

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

#### skeleton

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/skeleton.json)</small>

<CodeHeader></CodeHeader>

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

#### slime

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/slime.json)</small>

<CodeHeader></CodeHeader>

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

#### snow_golem

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/snow_golem.json)</small>

<CodeHeader></CodeHeader>

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

#### spider

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/spider.json)</small>

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

#### stray

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/stray.json)</small>

<CodeHeader></CodeHeader>

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

#### vex

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/vex.json)</small>

<CodeHeader></CodeHeader>

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

#### vindicator

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/vindicator.json)</small>

<CodeHeader></CodeHeader>

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

<CodeHeader></CodeHeader>

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

#### witch

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/witch.json)</small>

<CodeHeader></CodeHeader>

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

#### wither

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/wither.json)</small>

<CodeHeader></CodeHeader>

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

#### wither_skeleton

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/wither_skeleton.json)</small>

<CodeHeader></CodeHeader>

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

#### wolf

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/wolf.json)</small>

<CodeHeader></CodeHeader>

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

<CodeHeader></CodeHeader>

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

#### zoglin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zoglin.json)</small>

<CodeHeader></CodeHeader>

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

#### zombie

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie.json)</small>

<CodeHeader></CodeHeader>

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

#### zombie_villager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie_villager.json)</small>

<CodeHeader></CodeHeader>

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

#### zombie_villager_v2

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie_villager_v2.json)</small>

<CodeHeader></CodeHeader>

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

#### goat

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/goat.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.panic": {
    "priority": 1,
    "speed_multiplier": 1
}
```

#### hoglin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/hoglin.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.panic": {
    "priority": 1,
    "speed_multiplier": 1
}
```

#### horse

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/horse.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.panic": {
    "priority": 3,
    "speed_multiplier": 1.2
}
```

#### llama

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/llama.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.panic": {
    "priority": 4,
    "speed_multiplier": 1.2
}
```

#### mooshroom

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/mooshroom.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.panic": {
    "priority": 1,
    "speed_multiplier": 1.25
}
```

#### mule

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/mule.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.panic": {
    "priority": 1,
    "speed_multiplier": 1.2
}
```

#### ocelot

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/ocelot.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.panic": {
    "priority": 1,
    "speed_multiplier": 1.25
}
```

#### panda

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/panda.json)</small>

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
    "priority": 1,
    "speed_multiplier": 2.5
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.panic": {
    "priority": 1,
    "speed_multiplier": 1.25,
    "ignore_mob_damage": true
}
```

#### parrot

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/parrot.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.panic": {
    "priority": 0,
    "speed_multiplier": 1.25
}
```

#### pig

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/pig.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.panic": {
    "priority": 3,
    "speed_multiplier": 1.25
}
```

#### piglin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/piglin.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.panic": {
    "priority": 1,
    "speed_multiplier": 1.1
}
```

#### polar_bear

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/polar_bear.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.panic": {
    "priority": 2,
    "speed_multiplier": 2.0
}
```

#### rabbit

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/rabbit.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.panic": {
    "priority": 1,
    "speed_multiplier": 2.2
}
```

#### sheep

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/sheep.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.panic": {
    "priority": 1,
    "speed_multiplier": 1.25
}
```

#### skeleton_horse

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/skeleton_horse.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.panic": {
    "priority": 1,
    "speed_multiplier": 1.2
}
```

#### strider

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/strider.json)</small>

<CodeHeader></CodeHeader>

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

#### turtle

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/turtle.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.panic": {
    "priority": 0,
    "prefer_water": true,
    "speed_multiplier": 1.2
}
```

#### villager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/villager.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.panic": {
    "priority": 3,
    "speed_multiplier": 0.6
}
```

#### villager_v2

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/villager_v2.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.panic": {
    "priority": 1,
    "speed_multiplier": 0.6
}
```

#### wandering_trader

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/wandering_trader.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.panic": {
    "priority": 1,
    "speed_multiplier": 0.6
}
```

#### zombie_horse

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie_horse.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.panic": {
    "priority": 1,
    "speed_multiplier": 1.2
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

#### villager_v2

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/villager_v2.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.pickup_items": {
    "priority": 4,
    "max_dist": 3,
    "goal_radius": 2,
    "speed_multiplier": 0.5,
    "can_pickup_to_hand_or_equipment": false
}
```

#### wither_skeleton

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/wither_skeleton.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.pickup_items": {
    "priority": 5,
    "max_dist": 3,
    "goal_radius": 2,
    "speed_multiplier": 1.0,
    "pickup_based_on_chance": true
}
```

#### zombie

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie.json)</small>

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

#### zombie_pigman

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie_pigman.json)</small>

<CodeHeader></CodeHeader>

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

#### zombie_villager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie_villager.json)</small>

<CodeHeader></CodeHeader>

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

#### zombie_villager_v2

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie_villager_v2.json)</small>

<CodeHeader></CodeHeader>

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

</Spoiler>

## behavior.play

<small>[View docs](https://bedrock.dev/docs/stable/Entities#minecraft%3Abehavior.play)</small>

<Spoiler title="Show">

#### villager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/villager.json)</small>

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

#### elder_guardian

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/elder_guardian.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.random_look_around": {
    "priority": 9
}
```

#### enderman

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/enderman.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.random_look_around": {
    "priority": 8
}
```

#### fox

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/fox.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.random_look_around": {
    "priority": 15
}
```

#### goat

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/goat.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.random_look_around": {
    "priority": 11
}
```

#### guardian

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/guardian.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.random_look_around": {
    "priority": 9
}
```

#### hoglin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/hoglin.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.random_look_around": {
    "priority": 9
}
```

#### horse

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/horse.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.random_look_around": {
    "priority": 8
}
```

#### husk

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/husk.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.random_look_around": {
    "priority": 9
}
```

#### iron_golem

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/iron_golem.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.random_look_around": {
    "priority": 8
}
```

#### llama

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/llama.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.random_look_around": {
    "priority": 8
}
```

#### mooshroom

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/mooshroom.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.random_look_around": {
    "priority": 9
}
```

#### mule

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/mule.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.random_look_around": {
    "priority": 8
}
```

#### panda

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/panda.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.random_look_around": {
    "priority": 9
}
```

#### pig

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/pig.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.random_look_around": {
    "priority": 9
}
```

#### piglin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/piglin.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.random_look_around": {
    "priority": 12
}
```

#### piglin_brute

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/piglin_brute.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.random_look_around": {
    "priority": 9
}
```

#### pillager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/pillager.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.random_look_around": {
    "priority": 10
}
```

#### polar_bear

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/polar_bear.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.random_look_around": {
    "priority": 7
}
```

#### sheep

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/sheep.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.random_look_around": {
    "priority": 9
}
```

#### shulker

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/shulker.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.random_look_around": {
    "priority": 8
}
```

#### skeleton

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/skeleton.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.random_look_around": {
    "priority": 8
}
```

#### skeleton_horse

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/skeleton_horse.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.random_look_around": {
    "priority": 8
}
```

#### snow_golem

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/snow_golem.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.random_look_around": {
    "priority": 4
}
```

#### spider

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/spider.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.random_look_around": {
    "priority": 7
}
```

#### stray

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/stray.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.random_look_around": {
    "priority": 8
}
```

#### strider

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/strider.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.random_look_around": {
    "priority": 10
}
```

#### wandering_trader

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/wandering_trader.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.random_look_around": {
    "priority": 9
}
```

#### witch

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/witch.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.random_look_around": {
    "priority": 5,
    "look_distance": 8.0
}
```

#### wither

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/wither.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.random_look_around": {
    "priority": 7
}
```

#### wither_skeleton

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/wither_skeleton.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.random_look_around": {
    "priority": 8
}
```

#### zoglin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zoglin.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.random_look_around": {
    "priority": 9
}
```

#### zombie

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.random_look_around": {
    "priority": 9
}
```

#### zombie_horse

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie_horse.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.random_look_around": {
    "priority": 8
}
```

#### zombie_pigman

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie_pigman.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.random_look_around": {
    "priority": 9
}
```

#### zombie_villager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie_villager.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.random_look_around": {
    "priority": 11
}
```

#### zombie_villager_v2

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie_villager_v2.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.random_look_around": {
    "priority": 11
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

#### drowned

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/drowned.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.random_stroll": {
    "priority": 7,
    "speed_multiplier": 1
}
```

#### enderman

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/enderman.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.random_stroll": {
    "priority": 7,
    "speed_multiplier": 1.0
}
```

#### endermite

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/endermite.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.random_stroll": {
    "priority": 6,
    "speed_multiplier": 1
}
```

#### evocation_illager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/evocation_illager.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.random_stroll": {
    "priority": 8,
    "speed_multiplier": 0.6
}
```

#### fox

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/fox.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.random_stroll": {
    "priority": 13,
    "speed_multiplier": 0.8
}
```

#### goat

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/goat.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.random_stroll": {
    "priority": 9,
    "speed_multiplier": 0.6
}
```

#### hoglin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/hoglin.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.random_stroll": {
    "priority": 7,
    "speed_multiplier": 0.4
}
```

#### horse

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/horse.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.random_stroll": {
    "priority": 6,
    "speed_multiplier": 0.7
}
```

#### husk

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/husk.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.random_stroll": {
    "priority": 7,
    "speed_multiplier": 1
}
```

#### iron_golem

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/iron_golem.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.random_stroll": {
    "priority": 6,
    "speed_multiplier": 0.6,
    "xz_dist": 16
}
```

#### llama

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/llama.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.random_stroll": {
    "priority": 6,
    "speed_multiplier": 0.7
}
```

#### mooshroom

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/mooshroom.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.random_stroll": {
    "priority": 6,
    "speed_multiplier": 0.8
}
```

#### mule

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/mule.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.random_stroll": {
    "priority": 6,
    "speed_multiplier": 0.7
}
```

#### ocelot

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/ocelot.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.random_stroll": {
    "priority": 8,
    "speed_multiplier": 0.8
}
```

#### panda

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/panda.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.random_stroll": {
    "priority": 14,
    "speed_multiplier": 0.8
}
```

#### pig

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/pig.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.random_stroll": {
    "priority": 7,
    "speed_multiplier": 1.0
}
```

#### piglin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/piglin.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.random_stroll": {
    "priority": 10,
    "speed_multiplier": 0.6
}
```

#### piglin_brute

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/piglin_brute.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.random_stroll": {
    "priority": 7,
    "speed_multiplier": 0.6
}
```

#### pillager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/pillager.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.random_stroll": {
    "priority": 8,
    "speed_multiplier": 1
}
```

#### polar_bear

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/polar_bear.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.random_stroll": {
    "priority": 5
}
```

#### rabbit

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/rabbit.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.random_stroll": {
    "priority": 6,
    "speed_multiplier": 0.6,
    "xz_dist": 2,
    "y_dist": 1
}
```

#### ravager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/ravager.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.random_stroll": {
    "priority": 6,
    "speed_multiplier": 1.0
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.random_stroll": {
    "priority": 6,
    "speed_multiplier": 0.4
}
```

#### sheep

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/sheep.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.random_stroll": {
    "priority": 7,
    "speed_multiplier": 0.8
}
```

#### skeleton

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/skeleton.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.random_stroll": {
    "priority": 6,
    "speed_multiplier": 1
}
```

#### skeleton_horse

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/skeleton_horse.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.random_stroll": {
    "priority": 6,
    "speed_multiplier": 0.7
}
```

#### snow_golem

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/snow_golem.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.random_stroll": {
    "priority": 2,
    "speed_multiplier": 1
}
```

#### spider

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/spider.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.random_stroll": {
    "priority": 6,
    "speed_multiplier": 0.8
}
```

#### stray

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/stray.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.random_stroll": {
    "priority": 6,
    "speed_multiplier": 1
}
```

#### strider

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/strider.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.random_stroll": {
    "priority": 8,
    "speed_multiplier": 0.8
}
```

#### turtle

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/turtle.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.random_stroll": {
    "priority": 9,
    "interval": 100
}
```

#### villager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/villager.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.random_stroll": {
    "priority": 11,
    "speed_multiplier": 0.6
}
```

#### villager_v2

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/villager_v2.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.random_stroll": {
    "priority": 10,
    "speed_multiplier": 0.6
}
```

#### vindicator

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/vindicator.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.random_stroll": {
    "priority": 9,
    "speed_multiplier": 1
}
```

#### witch

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/witch.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.random_stroll": {
    "priority": 4,
    "speed_multiplier": 1.0
}
```

#### wither

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/wither.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.random_stroll": {
    "priority": 5,
    "speed_multiplier": 1
}
```

#### wither_skeleton

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/wither_skeleton.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.random_stroll": {
    "priority": 6,
    "speed_multiplier": 1
}
```

#### wolf

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/wolf.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.random_stroll": {
    "priority": 8,
    "speed_multiplier": 1.0
}
```

#### zoglin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zoglin.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.random_stroll": {
    "priority": 7,
    "speed_multiplier": 1.0
}
```

#### zombie

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.random_stroll": {
    "priority": 7,
    "speed_multiplier": 1
}
```

#### zombie_horse

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie_horse.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.random_stroll": {
    "priority": 6,
    "speed_multiplier": 0.7
}
```

#### zombie_pigman

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie_pigman.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.random_stroll": {
    "priority": 7,
    "speed_multiplier": 1.0
}
```

#### zombie_villager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie_villager.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.random_stroll": {
    "priority": 9,
    "speed_multiplier": 1
}
```

#### zombie_villager_v2

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie_villager_v2.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.random_stroll": {
    "priority": 9,
    "speed_multiplier": 1
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

#### turtle

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/turtle.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.random_swim": {
    "priority": 7,
    "interval": 0,
    "xz_dist": 30,
    "y_dist": 15
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

#### snow_golem

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/snow_golem.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.ranged_attack": {
    "priority": 1,
    "speed_multiplier": 1.25,
    "attack_interval": 1,
    "attack_radius": 10
}
```

#### stray

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/stray.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.ranged_attack": {
    "priority": 0,
    "attack_interval_min": 1.0,
    "attack_interval_max": 3.0,
    "attack_radius": 15.0
}
```

#### witch

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/witch.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.ranged_attack": {
    "priority": 2,
    "speed_multiplier": 1.0,
    "attack_interval_min": 3,
    "attack_interval_max": 3,
    "attack_radius": 10.0
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
