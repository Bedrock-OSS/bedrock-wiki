---
title: Vanilla-Like Ore

tags:
 - experimental
 - easy
mention:
 - MedicalJewel105
---

## Features

One problem encountered when creating custom ore blocks is the loot. The `minecraft:loot` component will drop the items given regardless of the tool used. Using `minecraft:on_player_destroyed` and events, the loot behavior of vanilla ore can be simulated.

Features:
- Can be mined using any given item (this tutorial covers pickaxes)
- Drops XP reward upon mining

Issues:
- When the block is mined with a pickaxe enchanted with Silk Touch, it will drop the loot twice
- XP reward structure doesn't load under y=0 (Caves & Cliffs) due to a _Minecraft_ bug
- Non-player methods of breaking the block (explosions, commands, etc.) will fail to drop the loot

## Preparation

For spawning XP orbs, a structure with those from lapis lazuli ore will be loaded in. You can [download it](https://wiki.bedrock.dev/assets/packs/tutorials/vanilla-like-ore/my_xp_structure.mcstructure) if you choose to use it, and save it in `BP/structures/`.

## Block behavior

The following block behavior can be used as a template. Don't forget to set the block's texture using `blocks.json` and `terrain_texture.json`.

<CodeHeader>BP/blocks/silver_ore.json</CodeHeader>

```json
{
    "format_version": "1.16.100",
    "minecraft:block": {
        "description": {
            "identifier": "tut:silver_ore"
        },
        "components": {
            //Basic components
            "minecraft:destroy_time": 2.5,
            "minecraft:explosion_resistance": 3,
            "minecraft:on_player_destroyed": {
                "event": "block_destroyed_correctly", //The event runs only if the block was destroyed by a player and the conditions were met
                "condition": "query.equipped_item_any_tag('slot.weapon.mainhand', 'minecraft:is_pickaxe')" //The condition will return true if the player breaking the block is holding an item with the `minecraft:is_pickaxe` tag in their main hand
            },
            "minecraft:loot": "loot_tables/empty.json" //The component is set to not drop loot, as the intended loot is handled via event; if the correct tool isn't used, then the event isn't run, and nothing drops
        },
        "events": {
            "block_destroyed_correctly": {
                "spawn_loot": {
                    "table": "loot_tables/blocks/silver_ore.json" //"spawn_loot" spawns the intended loot; replace the value of "table" with the file path of the block's loot table
                },
                "run_command": {
                    "command": [
                        "structure load my_xp_structure ~ ~ ~" //XP orbs can't be summoned via `/summon` due to a Minecraft bug, so a structure is used instead
                    ]
                }
            }
        }
    }
}
```

### Excluding valid tools

By extending the MoLang condition in `minecraft:on_player_destroyed`, specific items with the `minecraft:is_pickaxe` tag can be excluded. For example, excluding the wooden pickaxe:

```json
{
    "minecraft:on_player_destroyed": {
        "event": "block_destroyed_correctly",
        "condition": "query.equipped_item_any_tag('slot.weapon.mainhand', 'minecraft:is_pickaxe') && query.get_equipped_item_name(0) != 'wooden_pickaxe'"
    }
}
```

## Result

![](/assets/images/blocks/vanilla-like-ores/result.gif)
