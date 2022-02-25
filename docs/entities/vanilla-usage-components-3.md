---
title: Vanilla Usage Components 3
category: Documentation
---

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

#### mule

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/mule.json)</small>

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
                            "test": "has_equipment",
                            "subject": "other",
                            "domain": "hand",
                            "value": "chest"
                        },
                        {
                            "test": "is_family",
                            "subject": "other",
                            "value": "player"
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

#### pig

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/pig.json)</small>

<CodeHeader></CodeHeader>

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

#### piglin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/piglin.json)</small>

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

#### sheep

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/sheep.json)</small>

<CodeHeader></CodeHeader>

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

#### shulker

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/shulker.json)</small>

<CodeHeader></CodeHeader>

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

#### snow_golem

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/snow_golem.json)</small>

<CodeHeader></CodeHeader>

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

#### strider

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/strider.json)</small>

<CodeHeader></CodeHeader>

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

#### tnt_minecart

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/tnt_minecart.json)</small>

<CodeHeader></CodeHeader>

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

#### zombie_villager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie_villager.json)</small>

<CodeHeader></CodeHeader>

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

#### zombie_villager_v2

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie_villager_v2.json)</small>

<CodeHeader></CodeHeader>

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

#### piglin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/piglin.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:inventory": {
    "inventory_size": 8
}
```

#### villager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/villager.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:inventory": {
    "inventory_size": 8,
    "private": true
}
```

#### villager_v2

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/villager_v2.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:inventory": {
    "inventory_size": 8,
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

#### fox

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/fox.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:is_baby": {}
```

#### glow_squid

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/glow_squid.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:is_baby": {}
```

#### goat

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/goat.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:is_baby": {}
```

#### hoglin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/hoglin.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:is_baby": {}
```

#### horse

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/horse.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:is_baby": {}
```

#### husk

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/husk.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:is_baby": {}
```

#### llama

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/llama.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:is_baby": {}
```

#### mooshroom

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/mooshroom.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:is_baby": {}
```

#### mule

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/mule.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:is_baby": {}
```

#### ocelot

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/ocelot.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:is_baby": {}
```

#### panda

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/panda.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:is_baby": {}
```

#### pig

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/pig.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:is_baby": {}
```

#### piglin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/piglin.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:is_baby": {}
```

#### polar_bear

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/polar_bear.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:is_baby": {}
```

#### rabbit

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/rabbit.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:is_baby": {}
```

#### sheep

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/sheep.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:is_baby": {}
```

#### skeleton_horse

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/skeleton_horse.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:is_baby": {}
```

#### squid

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/squid.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:is_baby": {}
```

#### strider

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/strider.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:is_baby": {}
```

#### turtle

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/turtle.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:is_baby": {}
```

#### villager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/villager.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:is_baby": {}
```

#### villager_v2

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/villager_v2.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:is_baby": {}
```

#### wolf

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/wolf.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:is_baby": {}
```

#### zoglin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zoglin.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:is_baby": {}
```

#### zombie

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:is_baby": {}
```

#### zombie_horse

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie_horse.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:is_baby": {}
```

#### zombie_pigman

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie_pigman.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:is_baby": {}
```

#### zombie_villager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie_villager.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:is_baby": {}
```

#### zombie_villager_v2

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie_villager_v2.json)</small>

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

#### creeper

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/creeper.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:is_hidden_when_invisible": {}
```

#### dolphin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/dolphin.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:is_hidden_when_invisible": {}
```

#### donkey

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/donkey.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:is_hidden_when_invisible": {}
```

#### elder_guardian

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/elder_guardian.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:is_hidden_when_invisible": {}
```

#### enderman

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/enderman.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:is_hidden_when_invisible": {}
```

#### endermite

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/endermite.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:is_hidden_when_invisible": {}
```

#### ender_dragon

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/ender_dragon.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:is_hidden_when_invisible": {}
```

#### evocation_illager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/evocation_illager.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:is_hidden_when_invisible": {}
```

#### fish

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/fish.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:is_hidden_when_invisible": {}
```

#### fox

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/fox.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:is_hidden_when_invisible": {}
```

#### ghast

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/ghast.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:is_hidden_when_invisible": {}
```

#### glow_squid

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/glow_squid.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:is_hidden_when_invisible": {}
```

#### goat

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/goat.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:is_hidden_when_invisible": {}
```

#### guardian

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/guardian.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:is_hidden_when_invisible": {}
```

#### hoglin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/hoglin.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:is_hidden_when_invisible": {}
```

#### horse

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/horse.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:is_hidden_when_invisible": {}
```

#### husk

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/husk.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:is_hidden_when_invisible": {}
```

#### iron_golem

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/iron_golem.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:is_hidden_when_invisible": {}
```

#### llama

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/llama.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:is_hidden_when_invisible": {}
```

#### magma_cube

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/magma_cube.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:is_hidden_when_invisible": {}
```

#### mooshroom

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/mooshroom.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:is_hidden_when_invisible": {}
```

#### mule

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/mule.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:is_hidden_when_invisible": {}
```

#### ocelot

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/ocelot.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:is_hidden_when_invisible": {}
```

#### panda

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/panda.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:is_hidden_when_invisible": {}
```

#### parrot

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/parrot.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:is_hidden_when_invisible": {}
```

#### phantom

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/phantom.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:is_hidden_when_invisible": {}
```

#### pig

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/pig.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:is_hidden_when_invisible": {}
```

#### piglin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/piglin.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:is_hidden_when_invisible": {}
```

#### piglin_brute

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/piglin_brute.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:is_hidden_when_invisible": {}
```

#### pillager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/pillager.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:is_hidden_when_invisible": {}
```

#### player

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/player.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:is_hidden_when_invisible": {}
```

#### polar_bear

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/polar_bear.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:is_hidden_when_invisible": {}
```

#### pufferfish

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/pufferfish.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:is_hidden_when_invisible": {}
```

#### rabbit

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/rabbit.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:is_hidden_when_invisible": {}
```

#### ravager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/ravager.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:is_hidden_when_invisible": {}
```

#### salmon

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/salmon.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:is_hidden_when_invisible": {}
```

#### sheep

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/sheep.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:is_hidden_when_invisible": {}
```

#### shulker

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/shulker.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:is_hidden_when_invisible": {}
```

#### silverfish

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/silverfish.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:is_hidden_when_invisible": {}
```

#### skeleton

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/skeleton.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:is_hidden_when_invisible": {}
```

#### skeleton_horse

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/skeleton_horse.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:is_hidden_when_invisible": {}
```

#### slime

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/slime.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:is_hidden_when_invisible": {}
```

#### snow_golem

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/snow_golem.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:is_hidden_when_invisible": {}
```

#### spider

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/spider.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:is_hidden_when_invisible": {}
```

#### squid

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/squid.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:is_hidden_when_invisible": {}
```

#### stray

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/stray.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:is_hidden_when_invisible": {}
```

#### strider

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/strider.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:is_hidden_when_invisible": {}
```

#### tropicalfish

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/tropicalfish.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:is_hidden_when_invisible": {}
```

#### turtle

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/turtle.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:is_hidden_when_invisible": {}
```

#### vex

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/vex.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:is_hidden_when_invisible": {}
```

#### villager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/villager.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:is_hidden_when_invisible": {}
```

#### villager_v2

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/villager_v2.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:is_hidden_when_invisible": {}
```

#### vindicator

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/vindicator.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:is_hidden_when_invisible": {}
```

#### wandering_trader

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/wandering_trader.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:is_hidden_when_invisible": {}
```

#### witch

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/witch.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:is_hidden_when_invisible": {}
```

#### wither

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/wither.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:is_hidden_when_invisible": {}
```

#### wither_skeleton

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/wither_skeleton.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:is_hidden_when_invisible": {}
```

#### wolf

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/wolf.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:is_hidden_when_invisible": {}
```

#### zoglin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zoglin.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:is_hidden_when_invisible": {}
```

#### zombie

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:is_hidden_when_invisible": {}
```

#### zombie_horse

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie_horse.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:is_hidden_when_invisible": {}
```

#### zombie_pigman

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie_pigman.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:is_hidden_when_invisible": {}
```

#### zombie_villager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie_villager.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:is_hidden_when_invisible": {}
```

#### zombie_villager_v2

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie_villager_v2.json)</small>

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

#### zombie_villager_v2

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie_villager_v2.json)</small>

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

#### wolf

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/wolf.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:is_tamed": {}
```

#### zombie_horse

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie_horse.json)</small>

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

#### creeper

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/creeper.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:jump.static": {}
```

#### dolphin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/dolphin.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:jump.static": {
    "jump_power": 0.6
}
```

#### donkey

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/donkey.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:jump.static": {}
```

#### drowned

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/drowned.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:jump.static": {}
```

#### elder_guardian

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/elder_guardian.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:jump.static": {}
```

#### enderman

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/enderman.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:jump.static": {}
```

#### endermite

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/endermite.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:jump.static": {}
```

#### evocation_illager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/evocation_illager.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:jump.static": {}
```

#### fox

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/fox.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:jump.static": {}
```

#### ghast

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/ghast.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:jump.static": {}
```

#### glow_squid

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/glow_squid.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:jump.static": {}
```

#### goat

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/goat.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:jump.static": {}
```

#### guardian

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/guardian.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:jump.static": {}
```

#### hoglin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/hoglin.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:jump.static": {}
```

#### horse

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/horse.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:jump.static": {}
```

#### husk

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/husk.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:jump.static": {}
```

#### iron_golem

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/iron_golem.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:jump.static": {}
```

#### llama

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/llama.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:jump.static": {}
```

#### magma_cube

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/magma_cube.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:jump.static": {}
```

#### mooshroom

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/mooshroom.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:jump.static": {}
```

#### mule

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/mule.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:jump.static": {}
```

#### ocelot

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/ocelot.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:jump.static": {}
```

#### panda

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/panda.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:jump.static": {}
```

#### parrot

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/parrot.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:jump.static": {}
```

#### pig

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/pig.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:jump.static": {}
```

#### piglin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/piglin.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:jump.static": {}
```

#### piglin_brute

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/piglin_brute.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:jump.static": {}
```

#### pillager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/pillager.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:jump.static": {}
```

#### polar_bear

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/polar_bear.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:jump.static": {}
```

#### ravager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/ravager.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:jump.static": {}
```

#### sheep

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/sheep.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:jump.static": {}
```

#### silverfish

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/silverfish.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:jump.static": {}
```

#### skeleton

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/skeleton.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:jump.static": {}
```

#### skeleton_horse

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/skeleton_horse.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:jump.static": {}
```

#### slime

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/slime.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:jump.static": {}
```

#### snow_golem

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/snow_golem.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:jump.static": {}
```

#### spider

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/spider.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:jump.static": {}
```

#### squid

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/squid.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:jump.static": {}
```

#### stray

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/stray.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:jump.static": {}
```

#### strider

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/strider.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:jump.static": {}
```

#### turtle

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/turtle.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:jump.static": {}
```

#### vex

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/vex.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:jump.static": {}
```

#### villager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/villager.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:jump.static": {}
```

#### villager_v2

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/villager_v2.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:jump.static": {}
```

#### vindicator

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/vindicator.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:jump.static": {}
```

#### wandering_trader

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/wandering_trader.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:jump.static": {}
```

#### witch

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/witch.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:jump.static": {}
```

#### wither

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/wither.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:jump.static": {}
```

#### wither_skeleton

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/wither_skeleton.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:jump.static": {}
```

#### wolf

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/wolf.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:jump.static": {}
```

#### zoglin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zoglin.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:jump.static": {}
```

#### zombie

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:jump.static": {}
```

#### zombie_horse

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie_horse.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:jump.static": {}
```

#### zombie_pigman

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie_pigman.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:jump.static": {}
```

#### zombie_villager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie_villager.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:jump.static": {}
```

#### zombie_villager_v2

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie_villager_v2.json)</small>

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

#### fox

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/fox.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:leashable": {
    "soft_distance": 4.0,
    "hard_distance": 6.0,
    "max_distance": 10.0
}
```

#### glow_squid

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/glow_squid.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:leashable": {
    "soft_distance": 4.0,
    "hard_distance": 6.0,
    "max_distance": 10.0
}
```

#### goat

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/goat.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:leashable": {
    "soft_distance": 4,
    "hard_distance": 6,
    "max_distance": 10
}
```

#### hoglin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/hoglin.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:leashable": {
    "soft_distance": 4.0,
    "hard_distance": 6.0,
    "max_distance": 10.0
}
```

#### horse

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/horse.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:leashable": {
    "soft_distance": 4.0,
    "hard_distance": 6.0,
    "max_distance": 10.0
}
```

#### iron_golem

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/iron_golem.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:leashable": {
    "soft_distance": 4.0,
    "hard_distance": 6.0,
    "max_distance": 10.0
}
```

#### llama

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/llama.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:leashable": {
    "soft_distance": 4.0,
    "hard_distance": 6.0,
    "max_distance": 10.0,
    "can_be_stolen": true
}
```

#### mooshroom

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/mooshroom.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:leashable": {
    "soft_distance": 4.0,
    "hard_distance": 6.0,
    "max_distance": 10.0
}
```

#### mule

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/mule.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:leashable": {
    "soft_distance": 4.0,
    "hard_distance": 6.0,
    "max_distance": 10.0
}
```

#### ocelot

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/ocelot.json)</small>

<CodeHeader></CodeHeader>

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

#### parrot

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/parrot.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:leashable": {
    "soft_distance": 4.0,
    "hard_distance": 6.0,
    "max_distance": 10.0
}
```

#### pig

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/pig.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:leashable": {
    "soft_distance": 4.0,
    "hard_distance": 6.0,
    "max_distance": 10.0
}
```

#### polar_bear

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/polar_bear.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:leashable": {
    "soft_distance": 4.0,
    "hard_distance": 6.0,
    "max_distance": 10.0
}
```

#### rabbit

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/rabbit.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:leashable": {
    "soft_distance": 4.0,
    "hard_distance": 6.0,
    "max_distance": 10.0
}
```

#### sheep

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/sheep.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:leashable": {
    "soft_distance": 4.0,
    "hard_distance": 6.0,
    "max_distance": 10.0
}
```

#### skeleton_horse

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/skeleton_horse.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:leashable": {
    "soft_distance": 4.0,
    "hard_distance": 6.0,
    "max_distance": 10.0
}
```

#### snow_golem

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/snow_golem.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:leashable": {
    "soft_distance": 4.0,
    "hard_distance": 6.0,
    "max_distance": 10.0
}
```

#### squid

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/squid.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:leashable": {
    "soft_distance": 4.0,
    "hard_distance": 6.0,
    "max_distance": 10.0
}
```

#### strider

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/strider.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:leashable": {
    "soft_distance": 4.0,
    "hard_distance": 6.0,
    "max_distance": 10.0
}
```

#### wolf

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/wolf.json)</small>

<CodeHeader></CodeHeader>

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

#### zoglin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zoglin.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:leashable": {
    "soft_distance": 4.0,
    "hard_distance": 6.0,
    "max_distance": 10.0
}
```

#### zombie_horse

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie_horse.json)</small>

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

#### dolphin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/dolphin.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:loot": {
    "table": "loot_tables/entities/dolphin.json"
}
```

#### donkey

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/donkey.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:loot": {
    "table": "loot_tables/entities/horse.json"
}
```

#### drowned

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/drowned.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:loot": {
    "table": "loot_tables/entities/drowned.json"
}
```

#### elder_guardian

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/elder_guardian.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:loot": {
    "table": "loot_tables/entities/elder_guardian.json"
}
```

#### enderman

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/enderman.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:loot": {
    "table": "loot_tables/entities/enderman.json"
}
```

#### evocation_illager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/evocation_illager.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:loot": {
    "table": "loot_tables/entities/evocation_illager.json"
}
```

#### fish

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/fish.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:loot": {
    "table": "loot_tables/entities/fish.json"
}
```

#### fishing_hook

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/fishing_hook.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:loot": {
    "table": "loot_tables/gameplay/fishing.json"
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:loot": {
    "table": "loot_tables/gameplay/jungle_fishing.json"
}
```

#### fox

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/fox.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:loot": {
    "table": "loot_tables/entities/fox.json"
}
```

#### ghast

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/ghast.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:loot": {
    "table": "loot_tables/entities/ghast.json"
}
```

#### glow_squid

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/glow_squid.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:loot": {
    "table": "loot_tables/entities/glow_squid.json"
}
```

#### goat

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/goat.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:loot": {
    "table": "loot_tables/entities/goat.json"
}
```

#### guardian

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/guardian.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:loot": {
    "table": "loot_tables/entities/guardian.json"
}
```

#### hoglin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/hoglin.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:loot": {
    "table": "loot_tables/entities/hoglin.json"
}
```

#### horse

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/horse.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:loot": {
    "table": "loot_tables/entities/horse.json"
}
```

#### husk

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/husk.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:loot": {
    "table": "loot_tables/entities/zombie.json"
}
```

#### iron_golem

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/iron_golem.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:loot": {
    "table": "loot_tables/entities/iron_golem.json"
}
```

#### llama

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/llama.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:loot": {
    "table": "loot_tables/entities/llama.json"
}
```

#### magma_cube

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/magma_cube.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:loot": {
    "table": "loot_tables/entities/magma_cube.json"
}
```

#### mooshroom

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/mooshroom.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:loot": {
    "table": "loot_tables/entities/mooshroom.json"
}
```

#### mule

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/mule.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:loot": {
    "table": "loot_tables/entities/horse.json"
}
```

#### npc

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/npc.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:loot": {
    "table": "loot_tables/empty.json"
}
```

#### ocelot

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/ocelot.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:loot": {
    "table": "loot_tables/entities/ocelot.json"
}
```

#### panda

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/panda.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:loot": {
    "table": "loot_tables/entities/panda.json"
}
```

#### parrot

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/parrot.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:loot": {
    "table": "loot_tables/entities/parrot.json"
}
```

#### phantom

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/phantom.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:loot": {
    "table": "loot_tables/entities/phantom.json"
}
```

#### pig

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/pig.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:loot": {
    "table": "loot_tables/entities/pig.json"
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:loot": {
    "table": "loot_tables/entities/pig_saddled.json"
}
```

#### piglin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/piglin.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:loot": {
    "table": "loot_tables/entities/piglin.json"
}
```

#### piglin_brute

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/piglin_brute.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:loot": {
    "table": "loot_tables/entities/piglin.json"
}
```

#### pillager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/pillager.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:loot": {
    "table": "loot_tables/entities/pillager.json"
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:loot": {
    "table": "loot_tables/entities/pillager_raid.json"
}
```

#### player

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/player.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:loot": {
    "table": "loot_tables/empty.json"
}
```

#### polar_bear

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/polar_bear.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:loot": {
    "table": "loot_tables/entities/polar_bear.json"
}
```

#### pufferfish

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/pufferfish.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:loot": {
    "table": "loot_tables/entities/pufferfish.json"
}
```

#### rabbit

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/rabbit.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:loot": {
    "table": "loot_tables/entities/rabbit.json"
}
```

#### ravager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/ravager.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:loot": {
    "table": "loot_tables/entities/ravager.json"
}
```

#### salmon

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/salmon.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:loot": {
    "table": "loot_tables/entities/salmon_normal.json"
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:loot": {
    "table": "loot_tables/entities/salmon_large.json"
}
```

#### sheep

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/sheep.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:loot": {
    "table": "loot_tables/entities/sheep_sheared.json"
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:loot": {
    "table": "loot_tables/entities/sheep.json"
}
```

#### shulker

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/shulker.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:loot": {
    "table": "loot_tables/entities/shulker.json"
}
```

#### silverfish

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/silverfish.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:loot": {
    "table": "loot_tables/entities/silverfish.json"
}
```

#### skeleton

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/skeleton.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:loot": {
    "table": "loot_tables/entities/skeleton.json"
}
```

#### skeleton_horse

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/skeleton_horse.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:loot": {
    "table": "loot_tables/entities/skeleton_horse.json"
}
```

#### slime

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/slime.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:loot": {
    "table": "loot_tables/entities/slime.json"
}
```

#### snow_golem

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/snow_golem.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:loot": {
    "table": "loot_tables/entities/snowman.json"
}
```

#### spider

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/spider.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:loot": {
    "table": "loot_tables/entities/spider.json"
}
```

#### squid

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/squid.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:loot": {
    "table": "loot_tables/entities/squid.json"
}
```

#### stray

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/stray.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:loot": {
    "table": "loot_tables/entities/stray.json"
}
```

#### strider

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/strider.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:loot": {
    "table": "loot_tables/entities/strider_saddled.json"
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:loot": {
    "table": "loot_tables/entities/strider.json"
}
```

#### tripod_camera

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/tripod_camera.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:loot": {
    "table": "loot_tables/empty.json"
}
```

#### tropicalfish

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/tropicalfish.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:loot": {
    "table": "loot_tables/entities/tropicalfish.json"
}
```

#### turtle

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/turtle.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:loot": {
    "table": "loot_tables/entities/sea_turtle.json"
}
```

#### vindicator

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/vindicator.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:loot": {
    "table": "loot_tables/entities/vindication_illager.json"
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:loot": {
    "table": "loot_tables/entities/vindicator_raid.json"
}
```

#### witch

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/witch.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:loot": {
    "table": "loot_tables/entities/witch.json"
}
```

#### wither

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/wither.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:loot": {
    "table": "loot_tables/entities/wither_boss.json"
}
```

#### wither_skeleton

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/wither_skeleton.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:loot": {
    "table": "loot_tables/entities/wither_skeleton.json"
}
```

#### wolf

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/wolf.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:loot": {
    "table": "loot_tables/entities/wolf.json"
}
```

#### zoglin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zoglin.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:loot": {
    "table": "loot_tables/entities/zoglin.json"
}
```

#### zombie

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:loot": {
    "table": "loot_tables/entities/zombie.json"
}
```

#### zombie_horse

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie_horse.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:loot": {
    "table": "loot_tables/entities/zombie_horse.json"
}
```

#### zombie_pigman

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie_pigman.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:loot": {
    "table": "loot_tables/entities/zombie_pigman.json"
}
```

#### zombie_villager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie_villager.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:loot": {
    "table": "loot_tables/entities/zombie.json"
}
```

#### zombie_villager_v2

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie_villager_v2.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:loot": {
    "table": "loot_tables/entities/zombie.json"
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

#### mooshroom

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/mooshroom.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:mark_variant": {
    "value": -1
}
```

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

<CodeHeader></CodeHeader>

```json
"minecraft:mark_variant": {
    "value": 5
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:mark_variant": {
    "value": 6
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:mark_variant": {
    "value": 7
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:mark_variant": {
    "value": 8
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:mark_variant": {
    "value": 9
}
```

#### tropicalfish

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/tropicalfish.json)</small>

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

<CodeHeader></CodeHeader>

```json
"minecraft:mark_variant": {
    "value": 5
}
```

#### villager_v2

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/villager_v2.json)</small>

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

<CodeHeader></CodeHeader>

```json
"minecraft:mark_variant": {
    "value": 5
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:mark_variant": {
    "value": 6
}
```

#### zombie_villager_v2

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie_villager_v2.json)</small>

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

<CodeHeader></CodeHeader>

```json
"minecraft:mark_variant": {
    "value": 5
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:mark_variant": {
    "value": 6
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

#### creeper

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/creeper.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:movement": {
    "value": 0.2
}
```

#### dolphin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/dolphin.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:movement": {
    "value": 0.1
}
```

#### donkey

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/donkey.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:movement": {
    "value": 0.175
}
```

#### drowned

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/drowned.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:movement": {
    "value": 0.23
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:movement": {
    "value": 0.25
}
```

#### elder_guardian

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/elder_guardian.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:movement": {
    "value": 0.3
}
```

#### enderman

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/enderman.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:movement": {
    "value": 0.3
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:movement": {
    "value": 0.45
}
```

#### endermite

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/endermite.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:movement": {
    "value": 0.25
}
```

#### ender_dragon

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/ender_dragon.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:movement": {
    "value": 0.3
}
```

#### evocation_illager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/evocation_illager.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:movement": {
    "value": 0.5
}
```

#### fish

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/fish.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:movement": {
    "value": 0.1
}
```

#### fox

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/fox.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:movement": {
    "value": 0.3
}
```

#### ghast

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/ghast.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:movement": {
    "value": 0.03
}
```

#### glow_squid

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/glow_squid.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:movement": {
    "value": 0.2
}
```

#### goat

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/goat.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:movement": {
    "value": 0.4
}
```

#### guardian

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/guardian.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:movement": {
    "value": 0.12
}
```

#### hoglin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/hoglin.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:movement": {
    "value": 0.36
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:movement": {
    "value": 0.3
}
```

#### horse

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/horse.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:movement": {
    "value": {
        "range_min": 0.1125,
        "range_max": 0.3375
    }
}
```

#### husk

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/husk.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:movement": {
    "value": 0.35
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:movement": {
    "value": 0.23
}
```

#### iron_golem

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/iron_golem.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:movement": {
    "value": 0.25
}
```

#### llama

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/llama.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:movement": {
    "value": 0.25
}
```

#### magma_cube

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/magma_cube.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:movement": {
    "value": 0.75
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:movement": {
    "value": 0.66
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:movement": {
    "value": 0.6
}
```

#### mooshroom

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/mooshroom.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:movement": {
    "value": 0.25
}
```

#### mule

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/mule.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:movement": {
    "value": 0.175
}
```

#### npc

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/npc.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:movement": {
    "value": 0.5
}
```

#### ocelot

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/ocelot.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:movement": {
    "value": 0.3
}
```

#### panda

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/panda.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:movement": {
    "value": 0.15
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:movement": {
    "value": 0.07
}
```

#### parrot

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/parrot.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:movement": {
    "value": 0.4
}
```

#### phantom

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/phantom.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:movement": {
    "value": 1.8
}
```

#### pig

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/pig.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:movement": {
    "value": 0.25
}
```

#### piglin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/piglin.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:movement": {
    "value": 0.42
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:movement": {
    "value": 0.35
}
```

#### piglin_brute

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/piglin_brute.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:movement": {
    "value": 0.35
}
```

#### pillager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/pillager.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:movement": {
    "value": 0.35
}
```

#### player

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/player.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:movement": {
    "value": 0.1
}
```

#### polar_bear

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/polar_bear.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:movement": {
    "value": 0.25
}
```

#### pufferfish

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/pufferfish.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:movement": {
    "value": 0.13
}
```

#### rabbit

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/rabbit.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:movement": {
    "value": 0.3
}
```

#### ravager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/ravager.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:movement": {
    "value": 0.0
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:movement": {
    "value": 0.3
}
```

#### salmon

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/salmon.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:movement": {
    "value": 0.12
}
```

#### sheep

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/sheep.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:movement": {
    "value": 0.25
}
```

#### shulker

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/shulker.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:movement": {
    "value": 0.0,
    "max": 0.0
}
```

#### silverfish

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/silverfish.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:movement": {
    "value": 0.25
}
```

#### skeleton

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/skeleton.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:movement": {
    "value": 0.25
}
```

#### skeleton_horse

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/skeleton_horse.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:movement": {
    "value": 0.2
}
```

#### slime

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/slime.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:movement": {
    "value": 0.6
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:movement": {
    "value": 0.4
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:movement": {
    "value": 0.3
}
```

#### snow_golem

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/snow_golem.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:movement": {
    "value": 0.2
}
```

#### spider

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/spider.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:movement": {
    "value": 0.3
}
```

#### squid

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/squid.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:movement": {
    "value": 0.2
}
```

#### stray

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/stray.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:movement": {
    "value": 0.25
}
```

#### strider

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/strider.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:movement": {
    "value": 0.16
}
```

#### tropicalfish

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/tropicalfish.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:movement": {
    "value": 0.12
}
```

#### turtle

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/turtle.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:movement": {
    "value": 0.1
}
```

#### vex

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/vex.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:movement": {
    "value": 1.0
}
```

#### villager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/villager.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:movement": {
    "value": 0.5
}
```

#### villager_v2

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/villager_v2.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:movement": {
    "value": 0.5
}
```

#### vindicator

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/vindicator.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:movement": {
    "value": 0.35
}
```

#### wandering_trader

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/wandering_trader.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:movement": {
    "value": 0.5
}
```

#### witch

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/witch.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:movement": {
    "value": 0.25
}
```

#### wither

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/wither.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:movement": {
    "value": 0.25
}
```

#### wither_skeleton

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/wither_skeleton.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:movement": {
    "value": 0.25
}
```

#### wolf

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/wolf.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:movement": {
    "value": 0.3
}
```

#### zoglin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zoglin.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:movement": {
    "value": 0.25
}
```

#### zombie

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:movement": {
    "value": 0.35
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:movement": {
    "value": 0.23
}
```

#### zombie_horse

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie_horse.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:movement": {
    "value": 0.2
}
```

#### zombie_pigman

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie_pigman.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:movement": {
    "value": 0.23
}
```

#### zombie_villager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie_villager.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:movement": {
    "value": 0.35
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:movement": {
    "value": 0.23
}
```

#### zombie_villager_v2

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie_villager_v2.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:movement": {
    "value": 0.35
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:movement": {
    "value": 0.23
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

#### enderman

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/enderman.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:movement.basic": {}
```

#### endermite

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/endermite.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:movement.basic": {}
```

#### evocation_illager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/evocation_illager.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:movement.basic": {}
```

#### fox

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/fox.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:movement.basic": {}
```

#### glow_squid

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/glow_squid.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:movement.basic": {}
```

#### goat

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/goat.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:movement.basic": {}
```

#### hoglin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/hoglin.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:movement.basic": {}
```

#### horse

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/horse.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:movement.basic": {}
```

#### husk

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/husk.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:movement.basic": {}
```

#### iron_golem

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/iron_golem.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:movement.basic": {}
```

#### llama

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/llama.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:movement.basic": {}
```

#### mooshroom

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/mooshroom.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:movement.basic": {}
```

#### mule

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/mule.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:movement.basic": {}
```

#### ocelot

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/ocelot.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:movement.basic": {}
```

#### panda

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/panda.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:movement.basic": {}
```

#### pig

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/pig.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:movement.basic": {}
```

#### piglin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/piglin.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:movement.basic": {}
```

#### piglin_brute

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/piglin_brute.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:movement.basic": {}
```

#### pillager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/pillager.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:movement.basic": {}
```

#### polar_bear

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/polar_bear.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:movement.basic": {}
```

#### ravager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/ravager.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:movement.basic": {}
```

#### sheep

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/sheep.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:movement.basic": {}
```

#### shulker

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/shulker.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:movement.basic": {}
```

#### silverfish

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/silverfish.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:movement.basic": {}
```

#### skeleton

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/skeleton.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:movement.basic": {}
```

#### skeleton_horse

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/skeleton_horse.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:movement.basic": {}
```

#### snow_golem

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/snow_golem.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:movement.basic": {}
```

#### spider

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/spider.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:movement.basic": {}
```

#### squid

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/squid.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:movement.basic": {}
```

#### stray

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/stray.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:movement.basic": {}
```

#### strider

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/strider.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:movement.basic": {}
```

#### vex

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/vex.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:movement.basic": {}
```

#### villager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/villager.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:movement.basic": {}
```

#### villager_v2

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/villager_v2.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:movement.basic": {}
```

#### vindicator

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/vindicator.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:movement.basic": {}
```

#### wandering_trader

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/wandering_trader.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:movement.basic": {}
```

#### witch

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/witch.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:movement.basic": {}
```

#### wither

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/wither.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:movement.basic": {
    "max_turn": 180.0
}
```

#### wither_skeleton

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/wither_skeleton.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:movement.basic": {}
```

#### wolf

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/wolf.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:movement.basic": {}
```

#### zoglin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zoglin.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:movement.basic": {}
```

#### zombie

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:movement.basic": {}
```

#### zombie_horse

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie_horse.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:movement.basic": {}
```

#### zombie_pigman

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie_pigman.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:movement.basic": {}
```

#### zombie_villager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie_villager.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:movement.basic": {}
```

#### zombie_villager_v2

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie_villager_v2.json)</small>

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

#### cow

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/cow.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:nameable": {}
```

#### creeper

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/creeper.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:nameable": {}
```

#### dolphin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/dolphin.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:nameable": {}
```

#### donkey

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/donkey.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:nameable": {}
```

#### drowned

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/drowned.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:nameable": {}
```

#### elder_guardian

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/elder_guardian.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:nameable": {}
```

#### enderman

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/enderman.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:nameable": {}
```

#### endermite

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/endermite.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:nameable": {}
```

#### evocation_illager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/evocation_illager.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:nameable": {}
```

#### fish

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/fish.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:nameable": {}
```

#### fox

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/fox.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:nameable": {}
```

#### ghast

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/ghast.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:nameable": {}
```

#### glow_squid

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/glow_squid.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:nameable": {}
```

#### goat

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/goat.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:nameable": {}
```

#### guardian

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/guardian.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:nameable": {}
```

#### hoglin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/hoglin.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:nameable": {}
```

#### horse

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/horse.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:nameable": {}
```

#### husk

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/husk.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:nameable": {}
```

#### iron_golem

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/iron_golem.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:nameable": {}
```

#### llama

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/llama.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:nameable": {}
```

#### magma_cube

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/magma_cube.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:nameable": {}
```

#### mooshroom

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/mooshroom.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:nameable": {}
```

#### mule

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/mule.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:nameable": {}
```

#### npc

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/npc.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:nameable": {
    "always_show": false,
    "allow_name_tag_renaming": false
}
```

#### ocelot

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/ocelot.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:nameable": {}
```

#### panda

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/panda.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:nameable": {}
```

#### parrot

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/parrot.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:nameable": {}
```

#### phantom

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/phantom.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:nameable": {}
```

#### pig

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/pig.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:nameable": {}
```

#### piglin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/piglin.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:nameable": {}
```

#### piglin_brute

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/piglin_brute.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:nameable": {}
```

#### pillager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/pillager.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:nameable": {}
```

#### player

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/player.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:nameable": {
    "always_show": true,
    "allow_name_tag_renaming": false
}
```

#### polar_bear

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/polar_bear.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:nameable": {}
```

#### pufferfish

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/pufferfish.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:nameable": {}
```

#### rabbit

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/rabbit.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:nameable": {}
```

#### ravager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/ravager.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:nameable": {}
```

#### salmon

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/salmon.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:nameable": {}
```

#### sheep

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/sheep.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:nameable": {}
```

#### shulker

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/shulker.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:nameable": {}
```

#### silverfish

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/silverfish.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:nameable": {}
```

#### skeleton

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/skeleton.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:nameable": {}
```

#### skeleton_horse

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/skeleton_horse.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:nameable": {}
```

#### slime

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/slime.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:nameable": {}
```

#### snow_golem

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/snow_golem.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:nameable": {}
```

#### spider

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/spider.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:nameable": {}
```

#### squid

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/squid.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:nameable": {}
```

#### stray

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/stray.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:nameable": {}
```

#### strider

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/strider.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:nameable": {}
```

#### tropicalfish

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/tropicalfish.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:nameable": {}
```

#### turtle

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/turtle.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:nameable": {}
```

#### vex

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/vex.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:nameable": {}
```

#### villager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/villager.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:nameable": {}
```

#### villager_v2

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/villager_v2.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:nameable": {}
```

#### vindicator

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/vindicator.json)</small>

<CodeHeader></CodeHeader>

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

#### witch

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/witch.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:nameable": {}
```

#### wither

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/wither.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:nameable": {}
```

#### wither_skeleton

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/wither_skeleton.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:nameable": {}
```

#### wolf

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/wolf.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:nameable": {}
```

#### zoglin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zoglin.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:nameable": {}
```

#### zombie

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:nameable": {}
```

#### zombie_horse

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie_horse.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:nameable": {}
```

#### zombie_pigman

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie_pigman.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:nameable": {}
```

#### zombie_villager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie_villager.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:nameable": {}
```

#### zombie_villager_v2

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie_villager_v2.json)</small>

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

#### guardian

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/guardian.json)</small>

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

#### pufferfish

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/pufferfish.json)</small>

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

#### salmon

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/salmon.json)</small>

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

#### tropicalfish

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/tropicalfish.json)</small>

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

#### turtle

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/turtle.json)</small>

<CodeHeader></CodeHeader>

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

#### evocation_illager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/evocation_illager.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:navigation.walk": {
    "can_path_over_water": true,
    "can_pass_doors": true,
    "can_open_doors": true,
    "avoid_water": true
}
```

#### fox

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/fox.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:navigation.walk": {
    "can_path_over_water": true,
    "avoid_water": true,
    "avoid_damage_blocks": true
}
```

#### glow_squid

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/glow_squid.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:navigation.walk": {
    "can_path_over_water": true,
    "can_sink": false
}
```

#### goat

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/goat.json)</small>

<CodeHeader></CodeHeader>

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

#### hoglin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/hoglin.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:navigation.walk": {
    "can_path_over_water": true,
    "avoid_water": true,
    "avoid_damage_blocks": true
}
```

#### horse

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/horse.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:navigation.walk": {
    "can_path_over_water": true,
    "avoid_water": true,
    "avoid_damage_blocks": true
}
```

#### husk

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/husk.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:navigation.walk": {
    "is_amphibious": true,
    "can_pass_doors": true,
    "can_break_doors": true,
    "avoid_portals": false
}
```

#### iron_golem

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/iron_golem.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:navigation.walk": {
    "can_path_over_water": false,
    "avoid_water": true,
    "avoid_damage_blocks": true
}
```

#### llama

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/llama.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:navigation.walk": {
    "can_path_over_water": true,
    "avoid_damage_blocks": true
}
```

#### magma_cube

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/magma_cube.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:navigation.walk": {
    "can_path_over_water": true,
    "avoid_water": true
}
```

#### mooshroom

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/mooshroom.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:navigation.walk": {
    "can_path_over_water": true,
    "avoid_water": true,
    "avoid_damage_blocks": true
}
```

#### mule

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/mule.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:navigation.walk": {
    "can_path_over_water": true,
    "avoid_water": true,
    "avoid_damage_blocks": true
}
```

#### ocelot

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/ocelot.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:navigation.walk": {
    "can_path_over_water": true,
    "avoid_water": true,
    "avoid_damage_blocks": true
}
```

#### panda

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/panda.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:navigation.walk": {
    "can_float": true,
    "avoid_water": true,
    "avoid_damage_blocks": true
}
```

#### pig

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/pig.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:navigation.walk": {
    "can_path_over_water": true,
    "avoid_water": true,
    "avoid_damage_blocks": true
}
```

#### piglin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/piglin.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:navigation.walk": {
    "can_path_over_water": true,
    "can_open_doors": true
}
```

#### piglin_brute

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/piglin_brute.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:navigation.walk": {
    "can_path_over_water": true,
    "can_open_doors": true
}
```

#### pillager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/pillager.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:navigation.walk": {
    "can_path_over_water": true
}
```

#### polar_bear

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/polar_bear.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:navigation.walk": {
    "can_path_over_water": true,
    "avoid_damage_blocks": true
}
```

#### rabbit

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/rabbit.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:navigation.walk": {
    "can_path_over_water": true,
    "avoid_water": true
}
```

#### ravager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/ravager.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:navigation.walk": {
    "avoid_damage_blocks": true,
    "can_path_over_water": true,
    "can_sink": false
}
```

#### sheep

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/sheep.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:navigation.walk": {
    "can_path_over_water": true,
    "avoid_water": true
}
```

#### shulker

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/shulker.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:navigation.walk": {}
```

#### silverfish

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/silverfish.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:navigation.walk": {
    "can_path_over_water": true
}
```

#### skeleton

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/skeleton.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:navigation.walk": {
    "is_amphibious": true,
    "avoid_sun": true,
    "avoid_water": true
}
```

#### skeleton_horse

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/skeleton_horse.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:navigation.walk": {
    "is_amphibious": true,
    "avoid_water": true
}
```

#### slime

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/slime.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:navigation.walk": {
    "can_path_over_water": true,
    "avoid_water": true
}
```

#### snow_golem

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/snow_golem.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:navigation.walk": {
    "avoid_water": true
}
```

#### squid

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/squid.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:navigation.walk": {
    "can_path_over_water": true,
    "can_sink": false
}
```

#### stray

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/stray.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:navigation.walk": {
    "is_amphibious": true,
    "avoid_sun": true,
    "avoid_water": true
}
```

#### strider

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/strider.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:navigation.walk": {
    "can_path_over_lava": true,
    "avoid_water": true,
    "can_sink": false,
    "can_walk_in_lava": true
}
```

#### vex

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/vex.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:navigation.walk": {
    "can_path_over_water": true
}
```

#### villager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/villager.json)</small>

<CodeHeader></CodeHeader>

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

#### villager_v2

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/villager_v2.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:navigation.walk": {
    "can_path_over_water": true,
    "can_pass_doors": true,
    "can_open_doors": true,
    "avoid_water": true
}
```

#### vindicator

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/vindicator.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:navigation.walk": {
    "can_path_over_water": true
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:navigation.walk": {
    "can_path_over_water": true,
    "can_pass_doors": true,
    "can_break_doors": true
}
```

#### wandering_trader

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/wandering_trader.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:navigation.walk": {
    "can_path_over_water": true,
    "can_pass_doors": true,
    "can_open_doors": true,
    "avoid_water": true
}
```

#### witch

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/witch.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:navigation.walk": {
    "can_path_over_water": true,
    "avoid_water": false
}
```

#### wither

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/wither.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:navigation.walk": {
    "can_path_over_water": true,
    "avoid_water": true
}
```

#### wither_skeleton

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/wither_skeleton.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:navigation.walk": {
    "is_amphibious": true,
    "avoid_sun": true,
    "avoid_water": true
}
```

#### wolf

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/wolf.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:navigation.walk": {
    "can_path_over_water": true,
    "avoid_damage_blocks": true
}
```

#### zoglin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zoglin.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:navigation.walk": {
    "is_amphibious": true,
    "can_path_over_water": false,
    "avoid_water": true,
    "avoid_damage_blocks": true
}
```

#### zombie

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:navigation.walk": {
    "is_amphibious": true,
    "can_pass_doors": true,
    "can_walk": true,
    "can_break_doors": true
}
```

#### zombie_horse

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie_horse.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:navigation.walk": {
    "is_amphibious": true,
    "avoid_water": true
}
```

#### zombie_pigman

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie_pigman.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:navigation.walk": {
    "is_amphibious": true,
    "can_pass_doors": true,
    "can_open_doors": true,
    "avoid_water": true,
    "avoid_portals": true
}
```

#### zombie_villager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie_villager.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:navigation.walk": {
    "is_amphibious": true,
    "can_pass_doors": true,
    "can_break_doors": true,
    "avoid_sun": false
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:navigation.walk": {
    "is_amphibious": true,
    "can_pass_doors": true,
    "can_open_doors": true,
    "avoid_water": true,
    "avoid_sun": true
}
```

#### zombie_villager_v2

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie_villager_v2.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:navigation.walk": {
    "is_amphibious": true,
    "can_pass_doors": true,
    "can_break_doors": true,
    "avoid_sun": false
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:navigation.walk": {
    "is_amphibious": true,
    "can_pass_doors": true,
    "can_open_doors": true,
    "avoid_water": true,
    "avoid_sun": true
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

#### magma_cube

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/magma_cube.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:on_target_acquired": {
    "event": "minecraft:become_aggressive",
    "target": "self"
}
```

#### panda

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/panda.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:on_target_acquired": {
    "event": "minecraft:on_scared",
    "target": "self"
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:on_target_acquired": {
    "event": "minecraft:become_angry",
    "target": "self"
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:on_target_acquired": {}
```

#### piglin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/piglin.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:on_target_acquired": {
    "event": "become_angry_event",
    "target": "self"
}
```

#### piglin_brute

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/piglin_brute.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:on_target_acquired": {
    "event": "become_angry_event",
    "target": "self"
}
```

#### polar_bear

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/polar_bear.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:on_target_acquired": {
    "event": "minecraft:on_scared",
    "target": "self"
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:on_target_acquired": {
    "event": "minecraft:on_anger",
    "target": "self"
}
```

#### silverfish

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/silverfish.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:on_target_acquired": {
    "event": "minecraft:become_angry",
    "target": "self"
}
```

#### slime

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/slime.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:on_target_acquired": {
    "event": "minecraft:become_aggressive",
    "target": "self"
}
```

#### spider

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/spider.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:on_target_acquired": {
    "event": "minecraft:become_angry"
}
```

#### vindicator

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/vindicator.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:on_target_acquired": {
    "event": "minecraft:become_aggro",
    "target": "self"
}
```

#### wolf

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/wolf.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:on_target_acquired": {}
```

<CodeHeader></CodeHeader>

```json
"minecraft:on_target_acquired": {
    "event": "minecraft:become_angry",
    "target": "self"
}
```

#### zombie_pigman

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie_pigman.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:on_target_acquired": {
    "event": "minecraft:become_angry",
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

#### slime

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/slime.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:on_target_escape": {
    "event": "minecraft:become_calm",
    "target": "self"
}
```

#### vindicator

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/vindicator.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:on_target_escape": {
    "event": "minecraft:stop_aggro",
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

#### snow_golem

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/snow_golem.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:persistent": {}
```

#### villager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/villager.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:persistent": {}
```

#### villager_v2

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/villager_v2.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:persistent": {}
```

#### vindicator

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/vindicator.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:persistent": {}
```

#### wither

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/wither.json)</small>

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

#### cat

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/cat.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:physics": {}
```

#### cave_spider

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/cave_spider.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:physics": {}
```

#### chest_minecart

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/chest_minecart.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:physics": {}
```

#### chicken

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/chicken.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:physics": {}
```

#### command_block_minecart

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/command_block_minecart.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:physics": {}
```

#### cow

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/cow.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:physics": {}
```

#### creeper

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/creeper.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:physics": {}
```

#### dolphin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/dolphin.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:physics": {}
```

#### donkey

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/donkey.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:physics": {}
```

#### drowned

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/drowned.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:physics": {}
```

#### egg

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/egg.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:physics": {}
```

#### elder_guardian

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/elder_guardian.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:physics": {}
```

#### enderman

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/enderman.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:physics": {}
```

#### endermite

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/endermite.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:physics": {}
```

#### ender_crystal

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/ender_crystal.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:physics": {}
```

#### ender_dragon

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/ender_dragon.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:physics": {
    "has_gravity": false,
    "has_collision": false
}
```

#### ender_pearl

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/ender_pearl.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:physics": {}
```

#### evocation_illager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/evocation_illager.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:physics": {}
```

#### eye_of_ender_signal

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/eye_of_ender_signal.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:physics": {}
```

#### fireball

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/fireball.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:physics": {}
```

#### fireworks_rocket

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/fireworks_rocket.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:physics": {}
```

#### fish

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/fish.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:physics": {
    "has_gravity": false
}
```

#### fishing_hook

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/fishing_hook.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:physics": {}
```

#### fox

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/fox.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:physics": {}
```

#### ghast

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/ghast.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:physics": {}
```

#### glow_squid

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/glow_squid.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:physics": {}
```

#### goat

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/goat.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:physics": {}
```

#### guardian

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/guardian.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:physics": {}
```

#### hoglin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/hoglin.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:physics": {}
```

#### hopper_minecart

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/hopper_minecart.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:physics": {}
```

#### horse

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/horse.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:physics": {}
```

#### husk

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/husk.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:physics": {}
```

#### iron_golem

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/iron_golem.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:physics": {}
```

#### lingering_potion

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/lingering_potion.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:physics": {}
```

#### llama

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/llama.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:physics": {}
```

#### llama_spit

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/llama_spit.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:physics": {}
```

#### magma_cube

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/magma_cube.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:physics": {}
```

#### minecart

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/minecart.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:physics": {}
```

#### mooshroom

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/mooshroom.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:physics": {}
```

#### mule

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/mule.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:physics": {}
```

#### npc

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/npc.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:physics": {}
```

#### ocelot

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/ocelot.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:physics": {}
```

#### panda

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/panda.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:physics": {}
```

#### parrot

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/parrot.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:physics": {}
```

#### phantom

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/phantom.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:physics": {
    "has_gravity": false
}
```

#### pig

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/pig.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:physics": {}
```

#### piglin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/piglin.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:physics": {}
```

#### piglin_brute

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/piglin_brute.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:physics": {}
```

#### pillager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/pillager.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:physics": {}
```

#### player

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/player.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:physics": {}
```

#### polar_bear

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/polar_bear.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:physics": {}
```

#### pufferfish

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/pufferfish.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:physics": {
    "has_gravity": false
}
```

#### rabbit

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/rabbit.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:physics": {}
```

#### ravager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/ravager.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:physics": {}
```

#### salmon

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/salmon.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:physics": {
    "has_gravity": false
}
```

#### sheep

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/sheep.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:physics": {}
```

#### shulker

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/shulker.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:physics": {}
```

#### shulker_bullet

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/shulker_bullet.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:physics": {
    "has_collision": false
}
```

#### silverfish

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/silverfish.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:physics": {}
```

#### skeleton

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/skeleton.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:physics": {}
```

#### skeleton_horse

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/skeleton_horse.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:physics": {}
```

#### slime

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/slime.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:physics": {}
```

#### small_fireball

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/small_fireball.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:physics": {}
```

#### snowball

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/snowball.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:physics": {}
```

#### snow_golem

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/snow_golem.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:physics": {}
```

#### spider

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/spider.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:physics": {}
```

#### splash_potion

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/splash_potion.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:physics": {}
```

#### squid

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/squid.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:physics": {}
```

#### stray

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/stray.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:physics": {}
```

#### strider

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/strider.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:physics": {}
```

#### thrown_trident

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/thrown_trident.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:physics": {}
```

#### tnt

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/tnt.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:physics": {}
```

#### tnt_minecart

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/tnt_minecart.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:physics": {}
```

#### tripod_camera

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/tripod_camera.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:physics": {}
```

#### tropicalfish

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/tropicalfish.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:physics": {
    "has_gravity": false
}
```

#### turtle

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/turtle.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:physics": {}
```

#### vex

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/vex.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:physics": {
    "has_gravity": false,
    "has_collision": false
}
```

#### villager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/villager.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:physics": {}
```

#### villager_v2

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/villager_v2.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:physics": {}
```

#### vindicator

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/vindicator.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:physics": {}
```

#### wandering_trader

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/wandering_trader.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:physics": {}
```

#### witch

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/witch.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:physics": {}
```

#### wither

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/wither.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:physics": {}
```

#### wither_skeleton

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/wither_skeleton.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:physics": {}
```

#### wither_skull

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/wither_skull.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:physics": {}
```

#### wither_skull_dangerous

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/wither_skull_dangerous.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:physics": {}
```

#### wolf

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/wolf.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:physics": {}
```

#### xp_bottle

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/xp_bottle.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:physics": {}
```

#### xp_orb

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/xp_orb.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:physics": {}
```

#### zoglin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zoglin.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:physics": {}
```

#### zombie

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:physics": {}
```

#### zombie_horse

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie_horse.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:physics": {}
```

#### zombie_pigman

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie_pigman.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:physics": {}
```

#### zombie_villager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie_villager.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:physics": {}
```

#### zombie_villager_v2

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie_villager_v2.json)</small>

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

#### fireball

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/fireball.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:projectile": {
    "on_hit": {
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

#### fishing_hook

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/fishing_hook.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:projectile": {
    "on_hit": {
        "stick_in_ground": {}
    }
}
```

#### lingering_potion

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/lingering_potion.json)</small>

<CodeHeader></CodeHeader>

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

#### llama_spit

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/llama_spit.json)</small>

<CodeHeader></CodeHeader>

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

#### shulker_bullet

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/shulker_bullet.json)</small>

<CodeHeader></CodeHeader>

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
            "amplifier": 1
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

#### small_fireball

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/small_fireball.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:projectile": {
    "on_hit": {
        "impact_damage": {
            "damage": 5,
            "knockback": false,
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

#### snowball

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/snowball.json)</small>

<CodeHeader></CodeHeader>

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

#### splash_potion

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/splash_potion.json)</small>

<CodeHeader></CodeHeader>

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

#### thrown_trident

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/thrown_trident.json)</small>

<CodeHeader></CodeHeader>

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

#### wither_skull

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/wither_skull.json)</small>

<CodeHeader></CodeHeader>

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

#### wither_skull_dangerous

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/wither_skull_dangerous.json)</small>

<CodeHeader></CodeHeader>

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

#### xp_bottle

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/xp_bottle.json)</small>

<CodeHeader></CodeHeader>

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

#### chest_minecart

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/chest_minecart.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

#### chicken

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/chicken.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

#### command_block_minecart

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/command_block_minecart.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

#### cow

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/cow.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

#### creeper

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/creeper.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

#### dolphin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/dolphin.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

#### donkey

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/donkey.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

#### drowned

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/drowned.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

#### egg

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/egg.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

#### elder_guardian

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/elder_guardian.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

#### enderman

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/enderman.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

#### endermite

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/endermite.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

#### ender_crystal

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/ender_crystal.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

#### ender_pearl

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/ender_pearl.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

#### evocation_illager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/evocation_illager.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

#### eye_of_ender_signal

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/eye_of_ender_signal.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

#### fireball

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/fireball.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

#### fireworks_rocket

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/fireworks_rocket.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

#### fish

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/fish.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

#### fishing_hook

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/fishing_hook.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:pushable": {
    "is_pushable": false,
    "is_pushable_by_piston": true
}
```

#### fox

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/fox.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

#### ghast

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/ghast.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

#### glow_squid

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/glow_squid.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

#### goat

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/goat.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

#### guardian

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/guardian.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

#### hoglin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/hoglin.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

#### hopper_minecart

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/hopper_minecart.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

#### horse

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/horse.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

#### husk

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/husk.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

#### iron_golem

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/iron_golem.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

#### lingering_potion

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/lingering_potion.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

#### llama

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/llama.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

#### llama_spit

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/llama_spit.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

#### magma_cube

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/magma_cube.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

#### minecart

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/minecart.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

#### mooshroom

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/mooshroom.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

#### mule

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/mule.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

#### ocelot

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/ocelot.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

#### panda

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/panda.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

#### parrot

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/parrot.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

#### phantom

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/phantom.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

#### pig

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/pig.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

#### piglin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/piglin.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

#### piglin_brute

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/piglin_brute.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

#### pillager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/pillager.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

#### player

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/player.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:pushable": {
    "is_pushable": false,
    "is_pushable_by_piston": true
}
```

#### polar_bear

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/polar_bear.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

#### pufferfish

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/pufferfish.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

#### rabbit

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/rabbit.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

#### ravager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/ravager.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

#### salmon

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/salmon.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

#### sheep

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/sheep.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

#### silverfish

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/silverfish.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

#### skeleton

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/skeleton.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

#### skeleton_horse

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/skeleton_horse.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

#### slime

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/slime.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

#### small_fireball

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/small_fireball.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

#### snowball

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/snowball.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

#### snow_golem

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/snow_golem.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

#### spider

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/spider.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

#### splash_potion

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/splash_potion.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

#### squid

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/squid.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

#### stray

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/stray.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

#### strider

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/strider.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

#### thrown_trident

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/thrown_trident.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

#### tnt

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/tnt.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:pushable": {
    "is_pushable": false,
    "is_pushable_by_piston": true
}
```

#### tnt_minecart

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/tnt_minecart.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

#### tropicalfish

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/tropicalfish.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

#### turtle

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/turtle.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

#### villager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/villager.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

#### villager_v2

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/villager_v2.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

#### vindicator

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/vindicator.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

#### wandering_trader

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/wandering_trader.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

#### witch

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/witch.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

#### wither

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/wither.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

#### wither_skeleton

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/wither_skeleton.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

#### wither_skull

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/wither_skull.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

#### wither_skull_dangerous

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/wither_skull_dangerous.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

#### wolf

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/wolf.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

#### xp_bottle

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/xp_bottle.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

#### xp_orb

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/xp_orb.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

#### zoglin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zoglin.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

#### zombie

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

#### zombie_horse

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie_horse.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

#### zombie_pigman

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie_pigman.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

#### zombie_villager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie_villager.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:pushable": {
    "is_pushable": true,
    "is_pushable_by_piston": true
}
```

#### zombie_villager_v2

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie_villager_v2.json)</small>

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

<CodeHeader></CodeHeader>

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

#### hoglin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/hoglin.json)</small>

<CodeHeader></CodeHeader>

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

#### horse

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/horse.json)</small>

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
            1.1,
            -0.2
        ]
    }
}
```

<CodeHeader></CodeHeader>

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

#### husk

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/husk.json)</small>

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
            1.1,
            -0.35
        ],
        "lock_rider_rotation": 0
    }
}
```

#### llama

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/llama.json)</small>

<CodeHeader></CodeHeader>

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

<CodeHeader></CodeHeader>

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

#### minecart

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/minecart.json)</small>

<CodeHeader></CodeHeader>

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

#### mooshroom

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/mooshroom.json)</small>

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

#### mule

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/mule.json)</small>

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
            0.975,
            -0.2
        ]
    }
}
```

<CodeHeader></CodeHeader>

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

#### ocelot

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/ocelot.json)</small>

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

#### panda

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/panda.json)</small>

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

#### pig

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/pig.json)</small>

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
            0.63,
            0.0
        ]
    }
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:rideable": {
    "seat_count": 1,
    "interact_text": "action.interact.mount",
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

#### player

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/player.json)</small>

<CodeHeader></CodeHeader>

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

#### ravager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/ravager.json)</small>

<CodeHeader></CodeHeader>

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

#### sheep

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/sheep.json)</small>

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
            0.9,
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

#### skeleton_horse

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/skeleton_horse.json)</small>

<CodeHeader></CodeHeader>

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

<CodeHeader></CodeHeader>

```json
"minecraft:rideable": {}
```

#### spider

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/spider.json)</small>

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
            0.54,
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
            0.54,
            0.0
        ]
    }
}
```

#### strider

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/strider.json)</small>

<CodeHeader></CodeHeader>

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

<CodeHeader></CodeHeader>

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

<CodeHeader></CodeHeader>

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

#### wolf

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/wolf.json)</small>

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
            0.675,
            -0.1
        ]
    }
}
```

#### zombie

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie.json)</small>

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
            1.1,
            -0.35
        ],
        "lock_rider_rotation": 0
    }
}
```

#### zombie_horse

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie_horse.json)</small>

<CodeHeader></CodeHeader>

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

#### zombie_pigman

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie_pigman.json)</small>

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
            1.1,
            -0.35
        ],
        "lock_rider_rotation": 0
    }
}
```

#### zombie_villager

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie_villager.json)</small>

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
            1.1,
            -0.35
        ]
    }
}
```

#### zombie_villager_v2

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/entities/zombie_villager_v2.json)</small>

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
            1.1,
            -0.35
        ]
    }
}
```

</Spoiler>
