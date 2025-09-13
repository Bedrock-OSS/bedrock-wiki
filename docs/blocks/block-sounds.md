---
title: Block Sounds
description: Learn how to modify the sounds that blocks play after actions such as placement.
category: Documentation
license: true
mentions:
    - MedicalJewel105
    - TheItsNameless
    - QuazChick
---

## Applying Sounds

The `sounds` parameter in `RP/blocks.json` is used to determine general block sounds, such as the mining sound, step on sound, breaking sound, and placement sound.

You can apply a set of sounds to your block using this parameter:

<CodeHeader>RP/blocks.json</CodeHeader>

```json
{
    "format_version": "1.21.40",
    "wiki:chestnut_log": {
        "sound": "wood" // Define sound here
    }
}
```

## Adding Custom Sounds

Giving your custom block its own set of sounds can help your block feel unique.

First, let's choose a name for the custom block sounds.
We **strongly** recommend giving this identifier a namespace to avoid incompatibilities with other add-ons.

For example, let's imagine we were creating a custom chestnut woodset; we would name the custom block sound `wiki:chestnut_wood`.
This is the `sound` value that should be used in `RP/blocks.json`.

<CodeHeader>RP/blocks.json</CodeHeader>

```json
{
    "format_version": "1.21.40",
    "wiki:chestnut_log": {
        "sound": "wiki:chestnut_wood"
    }
}
```

### Base Block Sounds

-   `break` is triggered when the block is broken.
-   `hit` is triggered when the block is hit, such as when being mined by a player.
-   `place` is triggered when the block is placed by a player.

<CodeHeader>RP/sounds.json</CodeHeader>

```json
{
    "block_sounds": {
        "wiki:chestnut_wood": {
            "pitch": 1,
            "volume": 1,
            "events": {
                "break": "block.chestnut_wood.break", // Sound shortname from "RP/sounds/sound_definitions.json"
                "hit": "block.chestnut_wood.hit",
                "place": "block.chestnut_wood.place"
            }
        }
    }
}
```

### Interactive Block Sounds

The following sound events can be defined in the `interactive_sounds` section of `RP/sounds.json`.

-   `fall` is triggered when an entity falls onto the block from more than 3 blocks above.
-   `jump` is triggered when a player jumps off the block.
-   `land` is triggered when an entity falls onto the block from up to 3 blocks above.
-   `step` is triggered when an entity moves on top of the block.

<CodeHeader>RP/sounds.json</CodeHeader>

```json
{
    "block_sounds": {
        "wiki:chestnut_wood": {
            ...
        }
    },
    "interactive_sounds": {
        "block_sounds": {
            "wiki:chestnut_wood": {
                "pitch": 1,
                "volume": 1,
                "events": {
                    "fall": "block.chestnut_wood.fall",
                    "jump": "block.chestnut_wood.jump",
                    "step": "block.chestnut_wood.step",
                    "land": "block.chestnut_wood.land"
                }
            }
        }
    }
}
```

## List of Vanilla Sounds

The following are valid values for the `sound` parameter:

<!-- page_dumper_start -->
| *Last updated for 1.21.60* |
| -------------------------- |
| amethyst_block             |
| amethyst_cluster           |
| ancient_debris             |
| anvil                      |
| azalea                     |
| azalea_leaves              |
| bamboo                     |
| bamboo_sapling             |
| bamboo_wood                |
| bamboo_wood_hanging_sign   |
| basalt                     |
| big_dripleaf               |
| bone_block                 |
| calcite                    |
| candle                     |
| cave_vines                 |
| chain                      |
| cherry_leaves              |
| cherry_wood                |
| cherry_wood_hanging_sign   |
| chiseled_bookshelf         |
| cloth                      |
| comparator                 |
| copper                     |
| copper_bulb                |
| copper_grate               |
| coral                      |
| creaking_heart             |
| decorated_pot              |
| deepslate                  |
| deepslate_bricks           |
| dirt_with_roots            |
| dripstone_block            |
| eyeblossom                 |
| frog_spawn                 |
| froglight                  |
| fungus                     |
| glass                      |
| glow_lichen                |
| grass                      |
| gravel                     |
| hanging_roots              |
| hanging_sign               |
| heavy_core                 |
| honey_block                |
| iron                       |
| itemframe                  |
| ladder                     |
| lantern                    |
| large_amethyst_bud         |
| lever                      |
| lodestone                  |
| mangrove_roots             |
| medium_amethyst_bud        |
| metal                      |
| mob_spawner                |
| moss_block                 |
| moss_carpet                |
| mud                        |
| mud_bricks                 |
| muddy_mangrove_roots       |
| nether_brick               |
| nether_gold_ore            |
| nether_sprouts             |
| nether_wart                |
| nether_wood                |
| nether_wood_hanging_sign   |
| netherite                  |
| netherrack                 |
| nylium                     |
| packed_mud                 |
| pale_hanging_moss          |
| pink_petals                |
| pointed_dripstone          |
| polished_tuff              |
| powder_snow                |
| resin                      |
| resin_brick                |
| roots                      |
| sand                       |
| scaffolding                |
| sculk                      |
| sculk_catalyst             |
| sculk_sensor               |
| sculk_shrieker             |
| sculk_vein                 |
| shroomlight                |
| slime                      |
| small_amethyst_bud         |
| snow                       |
| soul_sand                  |
| soul_soil                  |
| sponge                     |
| spore_blossom              |
| stem                       |
| stone                      |
| suspicious_gravel          |
| suspicious_sand            |
| sweet_berry_bush           |
| trial_spawner              |
| tuff                       |
| tuff_bricks                |
| turtle_egg                 |
| vault                      |
| vines                      |
| web                        |
| weeping_vines              |
| wet_sponge                 |
| wood                       |
<!-- page_dumper_end -->
