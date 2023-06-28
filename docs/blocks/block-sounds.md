---
title: Block Sounds
category: Documentation
mention:
    - MedicalJewel105
    - TheItsNameless
    - QuazChick
---

Block sounds refers to the sound property in your block entry inside `blocks.json`.
This property is used to determine general block sounds, such as the mining sound, step on sound, breaking sound, and placement sound. You can apply sound to your block this way:

<CodeHeader>RP/blocks.json</CodeHeader>

```json
{
  "format_version": [1, 1, 0],
  "acacia_button": {
    "sound": "wood", // Define sound here
    "textures": "acacia_planks"
  }
}
```

The following are valid values for the sound property:

<!-- page_dumper_start -->

```json
[
  "amethyst_block",
  "amethyst_cluster",
  "ancient_debris",
  "anvil",
  "azalea",
  "azalea_leaves",
  "bamboo",
  "bamboo_sapling",
  "bamboo_wood",
  "bamboo_wood_hanging_sign",
  "basalt",
  "big_dripleaf",
  "bone_block",
  "calcite",
  "candle",
  "cave_vines",
  "chain",
  "cherry_leaves",
  "cherry_wood",
  "cherry_wood_hanging_sign",
  "chiseled_bookshelf",
  "cloth",
  "comparator",
  "copper",
  "coral",
  "decorated_pot",
  "deepslate",
  "deepslate_bricks",
  "dirt_with_roots",
  "dripstone_block",
  "frog_spawn",
  "froglight",
  "fungus",
  "glass",
  "grass",
  "gravel",
  "hanging_roots",
  "hanging_sign",
  "honey_block",
  "itemframe",
  "ladder",
  "lantern",
  "large_amethyst_bud",
  "lever",
  "lodestone",
  "mangrove_roots",
  "medium_amethyst_bud",
  "metal",
  "moss_block",
  "moss_carpet",
  "mud",
  "mud_bricks",
  "muddy_mangrove_roots",
  "nether_brick",
  "nether_gold_ore",
  "nether_sprouts",
  "nether_wart",
  "nether_wood",
  "nether_wood_hanging_sign",
  "netherite",
  "netherrack",
  "nylium",
  "packed_mud",
  "pink_petals",
  "pointed_dripstone",
  "powder_snow",
  "roots",
  "sand",
  "scaffolding",
  "sculk",
  "sculk_catalyst",
  "sculk_sensor",
  "sculk_shrieker",
  "sculk_vein",
  "shroomlight",
  "slime",
  "small_amethyst_bud",
  "snow",
  "soul_sand",
  "soul_soil",
  "spore_blossom",
  "stem",
  "stone",
  "suspicious_gravel",
  "suspicious_sand",
  "sweet_berry_bush",
  "tuff",
  "vines",
  "wood"
]
```

_Last updated for 1.20.0_

<!-- page_dumper_end -->
