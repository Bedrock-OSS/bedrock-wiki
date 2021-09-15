---
title: Vanilla Like Ore

tags:
 - experimental
 - easy
mention:
 - MedicalJewel105
---

## Features

Custom ores are really easy to make by adding `"minecraft:loot"` component but they aren't vanilla-like.
In this small tutorial you will learn how to make vanilla-like custom ore.

Features:

- Can be mined using pickaxes only (vanilla ones included)
- Drops XP reward

Issues:

- When block mined using pickaxe with silk touch enchant, it will drop double loot

- Xp reward structure doesn't load under y=0 (Caves & Cliffs) - Minecraft bug

## Preparation

This structure will be needed later, [download it](https://wiki.bedrock.dev/assets/packs/tutorials/vanilla-like-ore/my_xp_structure.mcstructure)

## Making block

<CodeHeader>BP/blocks/silver_ore.json</CodeHeader>

```json
{
    "format_version": "1.16.100",
    "minecraft:block": {
        "description": {
            "identifier": "tut:silver_ore",
            "is_experimental": false
        },
        "components": {
            //Some basic components:
            "minecraft:destroy_time": 2.5,
            "minecraft:block_light_absorption": 15,
            "minecraft:explosion_resistance": 1,
            "minecraft:unit_cube": {},
            "minecraft:material_instances": {
                "*": {
                    "texture": "silver_ore",
                    "render_method": "opaque"
                }
            },
            "minecraft:on_player_destroyed": {
                "event": "block_destroyed_correctly",
                //This event happens only if block was destroyed by player and conditions met
                "condition": "query.equipped_item_any_tag('slot.weapon.mainhand', 'minecraft:is_pickaxe')"
                //This condition will turn (1.0) if player was holding item with "tag:minecraft:is_pickaxe" component
                //If you want to make your ore don't drop loot when destroyed using wooden pickaxe, you can add  && query.get_equipped_item_name('main_hand') != 'wooden_pickaxe' to your condition
            },
            "minecraft:loot": "loot_tables/empty.json"
            //This component is needed to make block drop nothing when broken and conditions doesn't met
        },
        "events": {
            "block_destroyed_correctly": {
                "sequence": [
                    //Sequence is needed to add more than one elements
                    {
                        "spawn_loot": {
                            //This part will spawn block's loot
                            "table": "loot_tables/blocks/silver_ore.json"
                            //Put path to your loot table here
                        }
                    },
                    {
                        "run_command": {
                            "command": [
                                "structure load my_xp_structure ~~~"
                                //You can't summon xp_orb due to some bugs so you need to load structure with them.
                                //This one contains xp orbs from lapis ore, download it from above
                            ]
                        }
                    }
                ]
            }
        }
    }
}
```

## Result

![](/assets/images/blocks/vanilla-like-ores/result.gif)
