---
title: Block Sounds
description: Learn how to modify the sounds that blocks play after actions such as placement.
category: Documentation
mentions:
    - MedicalJewel105
    - TheItsNameless
    - QuazChick
---

## Applying Sounds

This `sounds` parameter in `RP/blocks.json` is used to determine general block sounds, such as the mining sound, step on sound, breaking sound, and placement sound.

You can apply a set of sounds to your block using this parameter:

<CodeHeader>RP/blocks.json</CodeHeader>

```json
{
    "format_version": "1.21.40",
    "wiki:custom_log": {
        "sound": "wood" // Define sound here
    }
}
```

## Adding Custom Sounds

:::danger UNSUPPORTED EVENTS
Only the `break`, `hit` and `place` block sound events can be modified by custom block sound definitions.

Defining sounds for other events, such as `step`, will have no effect.
:::

<CodeHeader>RP/sounds.json</CodeHeader>

```json
{
    "block_sounds": {
        "wiki:custom_wood": {
            "events": {
                "break": "random.levelup",
                "hit": "random.pop",
                "place": "random.pop"
            }
        }
    }
}
```

<CodeHeader>RP/blocks.json</CodeHeader>

```json
{
    "format_version": "1.21.40",
    "wiki:custom_log": {
        "sound": "wiki:custom_wood"
    }
}
```

## List of Vanilla Sounds

The following are valid values for the sound property:

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
