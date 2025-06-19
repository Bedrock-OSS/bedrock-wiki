---
title: Giving NBT Items
category: General
mentions:
    - MedicalJewel105
    - SirLich
    - Veka0
    - StuartDA
    - Sprunkles137
    - TheItsNameless
    - SmokeyStack
    - Mittens4All
    - zheaEvyline
description: Commands to give items with NBT components.
---

Named Binary Tag (NBT) components for items and blocks are used in the `/give` or `/replaceitem` commands. It is limited to: 

1. `minecraft:can_place_on`
2. `minecraft:can_destroy`
3. `minecraft:keep_on_death`
4. `minecraft:item_lock`

NBT components are written in JSON format. The vanilla namespace `minecraft` may be omitted. To hide NBT descriptions or the red/yellow triangle on locked items you may run the following command:
-    `/gamerule showtags false`

## CanPlaceOn and CanDestroy

These two components only affect players in adventure mode.

:::warning NOTE:
When a block with the `can_place_on` component is placed and then broken and picked up by the player, it will not retain its `can_place_on` component.
:::

<CodeHeader></CodeHeader>

```yaml
# Give player a Cobblestone block which can be placed on planks.
/give @p cobblestone 1 0 {"minecraft:can_place_on":{"blocks":["planks"]}}
```

To add more blocks use this format: `["planks","log","fence"]`

<CodeHeader></CodeHeader>

```yaml
# Give player a Diamond Axe which can destory planks and wood.
/give @p diamond_axe 1 0 {"minecraft:can_destroy":{"blocks":["planks","wood"]}}
```

Note: Some block categories include multiple blocks.

**Examples**:

| Wood              | Planks   | Fence    | Sapling  | Leaves | Log    | Log2     | Stone             | Skull                 |
| ----------------- | -------- | -------- | -------- | ------ | ------ | -------- | ----------------- | --------------------- |
| Acacia            | Acacia   | Acacia   | Acacia   | Birch  | Birch  | Acacia   | Andesite          | Creeper Head          |
| Birch             | Birch    | Birch    | Birch    | Jungle | Jungle | Dark Oak | Polished Diorite  | Dragon Head           |
| Dark Oak          | Dark Oak | Dark Oak | Dark Oak | Oak    | Oak    |          | Stone             | Piglin Head           |
| Jungle            | Jungle   | Jungle   | Jungle   | Spruce | Spruce |          | Diorite           | Player Head           |
| Oak               | Oak      | Oak      | Oak      |        |        |          | Granite           | Skeleton Skull        |
| Spruce            | Spruce   | Spruce   | Spruce   |        |        |          | Polished Andesite | Zombie Head           |
| Stripped Acacia   |          |          |          |        |        |          | Polished Granite  | Wither Skeleton Skull |
| Stripped Birch    |          |          |          |        |        |          |                   |                       |
| Stripped Dark Oak |          |          |          |        |        |          |                   |                       |
| Stripped Jungle   |          |          |          |        |        |          |                   |                       |
| Stripped Oak      |          |          |          |        |        |          |                   |                       |
| Stripped Spruce   |          |          |          |        |        |          |                   |                       |

Some of the blocks that include multiple blocks: `anvil`, `concrete_powder`, `dirt`, `fence`, `light_block`, `leaves`, `log`, `log2`, `planks`, `sapling`, `stone`, `skull`, `wood`. 

### Can Place on All Blocks

This is the code to give a block that can be placed on everything in the game:

**Please, note that if there is at least one _invalid_ block, this won't work!**

<CodeHeader></CodeHeader>

```json
give @p stone 1 0 {"minecraft:can_place_on": {"blocks": ["acacia_button", "acacia_door", "acacia_double_slab", "acacia_fence", "acacia_fence_gate", "acacia_hanging_sign", "acacia_leaves", "acacia_log", "acacia_pressure_plate", "acacia_sapling", "acacia_slab", "acacia_stairs", "acacia_standing_sign", "acacia_trapdoor", "acacia_wall_sign", "acacia_wood", "activator_rail", "air", "allium", "allow", "amethyst_block", "amethyst_cluster", "ancient_debris", "andesite", "andesite_double_slab", "andesite_slab", "andesite_stairs", "andesite_wall", "anvil", "azalea", "azalea_leaves", "azalea_leaves_flowered", "azure_bluet", "bamboo", "bamboo_block", "bamboo_button", "bamboo_door", "bamboo_double_slab", "bamboo_fence", "bamboo_fence_gate", "bamboo_hanging_sign", "bamboo_mosaic", "bamboo_mosaic_double_slab", "bamboo_mosaic_slab", "bamboo_mosaic_stairs", "bamboo_planks", "bamboo_pressure_plate", "bamboo_sapling", "bamboo_slab", "bamboo_stairs", "bamboo_standing_sign", "bamboo_trapdoor", "bamboo_wall_sign", "barrel", "barrier", "basalt", "beacon", "bed", "bedrock", "bee_nest", "beehive", "beetroot", "bell", "big_dripleaf", "birch_button", "birch_door", "birch_double_slab", "birch_fence", "birch_fence_gate", "birch_hanging_sign", "birch_leaves", "birch_log", "birch_pressure_plate", "birch_sapling", "birch_slab", "birch_stairs", "birch_standing_sign", "birch_trapdoor", "birch_wall_sign", "birch_wood", "black_candle", "black_candle_cake", "black_carpet", "black_concrete", "black_concrete_powder", "black_glazed_terracotta", "black_shulker_box", "black_stained_glass", "black_stained_glass_pane", "black_terracotta", "black_wool", "blackstone", "blackstone_double_slab", "blackstone_slab", "blackstone_stairs", "blackstone_wall", "blast_furnace", "blue_candle", "blue_candle_cake", "blue_carpet", "blue_concrete", "blue_concrete_powder", "blue_glazed_terracotta", "blue_ice", "blue_orchid", "blue_shulker_box", "blue_stained_glass", "blue_stained_glass_pane", "blue_terracotta", "blue_wool", "bone_block", "bookshelf", "border_block", "brain_coral", "brain_coral_block", "brain_coral_fan", "brain_coral_wall_fan", "brewing_stand", "brick_block", "brick_double_slab", "brick_slab", "brick_stairs", "brick_wall", "brown_candle", "brown_candle_cake", "brown_carpet", "brown_concrete", "brown_concrete_powder", "brown_glazed_terracotta", "brown_mushroom", "brown_mushroom_block", "brown_shulker_box", "brown_stained_glass", "brown_stained_glass_pane", "brown_terracotta", "brown_wool", "bubble_column", "bubble_coral", "bubble_coral_block", "bubble_coral_fan", "bubble_coral_wall_fan", "budding_amethyst", "cactus", "cake", "calcite", "calibrated_sculk_sensor", "camera", "campfire", "candle", "candle_cake", "carpet", "carrots", "cartography_table", "carved_pumpkin", "cauldron", "cave_vines", "cave_vines_body_with_berries", "cave_vines_head_with_berries", "chain", "chain_command_block", "cherry_button", "cherry_door", "cherry_double_slab", "cherry_fence", "cherry_fence_gate", "cherry_hanging_sign", "cherry_leaves", "cherry_log", "cherry_planks", "cherry_pressure_plate", "cherry_sapling", "cherry_slab", "cherry_stairs", "cherry_standing_sign", "cherry_trapdoor", "cherry_wall_sign", "cherry_wood", "chest", "chipped_anvil", "chiseled_bookshelf", "chiseled_copper", "chiseled_deepslate", "chiseled_nether_bricks", "chiseled_polished_blackstone", "chiseled_quartz_block", "chiseled_red_sandstone", "chiseled_resin_bricks", "chiseled_sandstone", "chiseled_stone_bricks", "chiseled_tuff", "chiseled_tuff_bricks", "chorus_flower", "chorus_plant", "clay", "closed_eyeblossom", "coal_block", "coal_ore", "coarse_dirt", "cobbled_deepslate", "cobbled_deepslate_double_slab", "cobbled_deepslate_slab", "cobbled_deepslate_stairs", "cobbled_deepslate_wall", "cobblestone", "cobblestone_double_slab", "cobblestone_slab", "cobblestone_wall", "cocoa", "command_block", "composter", "concrete", "concretePowder", "conduit", "copper_block", "copper_bulb", "copper_door", "copper_grate", "copper_ore", "copper_trapdoor", "coral", "coral_block", "coral_fan", "coral_fan_dead", "coral_fan_hang", "coral_fan_hang2", "coral_fan_hang3", "cornflower", "cracked_deepslate_bricks", "cracked_deepslate_tiles", "cracked_nether_bricks", "cracked_polished_blackstone_bricks", "cracked_stone_bricks", "crafter", "crafting_table", "creaking_heart", "creeper_head", "crimson_button", "crimson_door", "crimson_double_slab", "crimson_fence", "crimson_fence_gate", "crimson_fungus", "crimson_hanging_sign", "crimson_hyphae", "crimson_nylium", "crimson_planks", "crimson_pressure_plate", "crimson_roots", "crimson_slab", "crimson_stairs", "crimson_standing_sign", "crimson_stem", "crimson_trapdoor", "crimson_wall_sign", "crying_obsidian", "cut_copper", "cut_copper_slab", "cut_copper_stairs", "cut_red_sandstone", "cut_red_sandstone_slab", "cut_sandstone", "cut_sandstone_slab", "cyan_candle", "cyan_candle_cake", "cyan_carpet", "cyan_concrete", "cyan_concrete_powder", "cyan_glazed_terracotta", "cyan_shulker_box", "cyan_stained_glass", "cyan_stained_glass_pane", "cyan_terracotta", "cyan_wool", "damaged_anvil", "dandelion", "dark_oak_button", "dark_oak_door", "dark_oak_double_slab", "dark_oak_fence", "dark_oak_fence_gate", "dark_oak_hanging_sign", "dark_oak_leaves", "dark_oak_log", "dark_oak_pressure_plate", "dark_oak_sapling", "dark_oak_slab", "dark_oak_stairs", "dark_oak_trapdoor", "dark_oak_wood", "dark_prismarine", "dark_prismarine_double_slab", "dark_prismarine_slab", "dark_prismarine_stairs", "darkoak_standing_sign", "darkoak_wall_sign", "daylight_detector", "daylight_detector_inverted", "dead_brain_coral", "dead_brain_coral_block", "dead_brain_coral_fan", "dead_brain_coral_wall_fan", "dead_bubble_coral", "dead_bubble_coral_block", "dead_bubble_coral_fan", "dead_bubble_coral_wall_fan", "dead_fire_coral", "dead_fire_coral_block", "dead_fire_coral_fan", "dead_fire_coral_wall_fan", "dead_horn_coral", "dead_horn_coral_block", "dead_horn_coral_fan", "dead_horn_coral_wall_fan", "dead_tube_coral", "dead_tube_coral_block", "dead_tube_coral_fan", "dead_tube_coral_wall_fan", "deadbush", "decorated_pot", "deepslate", "deepslate_brick_double_slab", "deepslate_brick_slab", "deepslate_brick_stairs", "deepslate_brick_wall", "deepslate_bricks", "deepslate_coal_ore", "deepslate_copper_ore", "deepslate_diamond_ore", "deepslate_emerald_ore", "deepslate_gold_ore", "deepslate_iron_ore", "deepslate_lapis_ore", "deepslate_redstone_ore", "deepslate_tile_double_slab", "deepslate_tile_slab", "deepslate_tile_stairs", "deepslate_tile_wall", "deepslate_tiles", "deny", "deprecated_anvil", "deprecated_purpur_block_1", "deprecated_purpur_block_2", "detector_rail", "diamond_block", "diamond_ore", "diorite", "diorite_double_slab", "diorite_slab", "diorite_stairs", "diorite_wall", "dirt", "dirt_with_roots", "dispenser", "double_cut_copper_slab", "double_plant", "double_stone_slab", "double_stone_slab2", "double_stone_slab3", "double_stone_slab4", "double_wooden_slab", "dragon_egg", "dragon_head", "dried_kelp_block", "dripstone_block", "dropper", "emerald_block", "emerald_ore", "enchanting_table", "end_brick_stairs", "end_bricks", "end_gateway", "end_portal", "end_portal_frame", "end_rod", "end_stone", "end_stone_brick_double_slab", "end_stone_brick_slab", "end_stone_brick_wall", "ender_chest", "exposed_chiseled_copper", "exposed_copper", "exposed_copper_bulb", "exposed_copper_door", "exposed_copper_grate", "exposed_copper_trapdoor", "exposed_cut_copper", "exposed_cut_copper_slab", "exposed_cut_copper_stairs", "exposed_double_cut_copper_slab", "farmland", "fence", "fence_gate", "fern", "fire", "fire_coral", "fire_coral_block", "fire_coral_fan", "fire_coral_wall_fan", "fletching_table", "flower_pot", "flowering_azalea", "flowing_lava", "flowing_water", "frame", "frog_spawn", "frosted_ice", "furnace", "gilded_blackstone", "glass", "glass_pane", "glow_frame", "glow_lichen", "glowingobsidian", "glowstone", "gold_block", "gold_ore", "golden_rail", "granite", "granite_double_slab", "granite_slab", "granite_stairs", "granite_wall", "grass", "grass_path", "gravel", "gray_candle", "gray_candle_cake", "gray_carpet", "gray_concrete", "gray_concrete_powder", "gray_glazed_terracotta", "gray_shulker_box", "gray_stained_glass", "gray_stained_glass_pane", "gray_terracotta", "gray_wool", "green_candle", "green_candle_cake", "green_carpet", "green_concrete", "green_concrete_powder", "green_glazed_terracotta", "green_shulker_box", "green_stained_glass", "green_stained_glass_pane", "green_terracotta", "green_wool", "grindstone", "hanging_roots", "hardened_clay", "hay_block", "heavy_core", "heavy_weighted_pressure_plate", "honey_block", "honeycomb_block", "hopper", "horn_coral", "horn_coral_block", "horn_coral_fan", "horn_coral_wall_fan", "ice", "infested_chiseled_stone_bricks", "infested_cobblestone", "infested_cracked_stone_bricks", "infested_deepslate", "infested_mossy_stone_bricks", "infested_stone", "infested_stone_bricks", "info_update", "info_update2", "invisibleBedrock", "iron_bars", "iron_block", "iron_door", "iron_ore", "iron_trapdoor", "jigsaw", "jukebox", "jungle_button", "jungle_door", "jungle_double_slab", "jungle_fence", "jungle_fence_gate", "jungle_hanging_sign", "jungle_leaves", "jungle_log", "jungle_pressure_plate", "jungle_sapling", "jungle_slab", "jungle_stairs", "jungle_standing_sign", "jungle_trapdoor", "jungle_wall_sign", "jungle_wood", "kelp", "ladder", "lantern", "lapis_block", "lapis_ore", "large_amethyst_bud", "large_fern", "lava", "lava_cauldron", "leaves", "leaves2", "lectern", "lever", "light_block", "light_block_0", "light_block_1", "light_block_10", "light_block_11", "light_block_12", "light_block_13", "light_block_14", "light_block_15", "light_block_2", "light_block_3", "light_block_4", "light_block_5", "light_block_6", "light_block_7", "light_block_8", "light_block_9", "light_blue_candle", "light_blue_candle_cake", "light_blue_carpet", "light_blue_concrete", "light_blue_concrete_powder", "light_blue_glazed_terracotta", "light_blue_shulker_box", "light_blue_stained_glass", "light_blue_stained_glass_pane", "light_blue_terracotta", "light_blue_wool", "light_gray_candle", "light_gray_candle_cake", "light_gray_carpet", "light_gray_concrete", "light_gray_concrete_powder", "light_gray_shulker_box", "light_gray_stained_glass", "light_gray_stained_glass_pane", "light_gray_terracotta", "light_gray_wool", "light_weighted_pressure_plate", "lightning_rod", "lilac", "lily_of_the_valley", "lime_candle", "lime_candle_cake", "lime_carpet", "lime_concrete", "lime_concrete_powder", "lime_glazed_terracotta", "lime_shulker_box", "lime_stained_glass", "lime_stained_glass_pane", "lime_terracotta", "lime_wool", "lit_blast_furnace", "lit_deepslate_redstone_ore", "lit_furnace", "lit_pumpkin", "lit_redstone_lamp", "lit_redstone_ore", "lit_smoker", "lodestone", "log", "log2", "loom", "magenta_candle", "magenta_candle_cake", "magenta_carpet", "magenta_concrete", "magenta_concrete_powder", "magenta_glazed_terracotta", "magenta_shulker_box", "magenta_stained_glass", "magenta_stained_glass_pane", "magenta_terracotta", "magenta_wool", "magma", "mangrove_button", "mangrove_door", "mangrove_double_slab", "mangrove_fence", "mangrove_fence_gate", "mangrove_hanging_sign", "mangrove_leaves", "mangrove_log", "mangrove_planks", "mangrove_pressure_plate", "mangrove_propagule", "mangrove_roots", "mangrove_slab", "mangrove_stairs", "mangrove_standing_sign", "mangrove_trapdoor", "mangrove_wall_sign", "mangrove_wood", "medium_amethyst_bud", "melon_block", "melon_stem", "mob_spawner", "monster_egg", "moss_block", "moss_carpet", "mossy_cobblestone", "mossy_cobblestone_double_slab", "mossy_cobblestone_slab", "mossy_cobblestone_stairs", "mossy_cobblestone_wall", "mossy_stone_brick_slab", "mossy_stone_brick_stairs", "mossy_stone_brick_wall", "mossy_stone_bricks", "movingBlock", "mud", "mud_brick_double_slab", "mud_brick_slab", "mud_brick_stairs", "mud_brick_wall", "mud_bricks", "muddy_mangrove_roots", "mushroom_stem", "mycelium", "nether_brick", "nether_brick_double_slab", "nether_brick_fence", "nether_brick_slab", "nether_brick_stairs", "nether_brick_wall", "nether_gold_ore", "nether_sprouts", "nether_wart", "nether_wart_block", "netherite_block", "netherrack", "netherreactor", "normal_stone_slab", "normal_stone_stairs", "noteblock", "oak_double_slab", "oak_fence", "oak_hanging_sign", "oak_leaves", "oak_log", "oak_sapling", "oak_slab", "oak_stairs", "oak_wood", "observer", "obsidian", "ochre_froglight", "open_eyeblossom", "orange_candle", "orange_candle_cake", "orange_carpet", "orange_concrete", "orange_concrete_powder", "orange_glazed_terracotta", "orange_shulker_box", "orange_stained_glass", "orange_stained_glass_pane", "orange_terracotta", "orange_tulip", "orange_wool", "oxeye_daisy", "oxidized_chiseled_copper", "oxidized_copper", "oxidized_copper_bulb", "oxidized_copper_door", "oxidized_copper_grate", "oxidized_copper_trapdoor", "oxidized_cut_copper", "oxidized_cut_copper_slab", "oxidized_cut_copper_stairs", "oxidized_double_cut_copper_slab", "packed_ice", "packed_mud", "pale_hanging_moss", "pale_moss_block", "pale_moss_carpet", "pale_oak_button", "pale_oak_door", "pale_oak_double_slab", "pale_oak_fence", "pale_oak_fence_gate", "pale_oak_hanging_sign", "pale_oak_leaves", "pale_oak_log", "pale_oak_planks", "pale_oak_pressure_plate", "pale_oak_sapling", "pale_oak_slab", "pale_oak_stairs", "pale_oak_standing_sign", "pale_oak_trapdoor", "pale_oak_wall_sign", "pale_oak_wood", "pearlescent_froglight", "peony", "petrified_oak_double_slab", "petrified_oak_slab", "piglin_head", "pink_candle", "pink_candle_cake", "pink_carpet", "pink_concrete", "pink_concrete_powder", "pink_glazed_terracotta", "pink_petals", "pink_shulker_box", "pink_stained_glass", "pink_stained_glass_pane", "pink_terracotta", "pink_tulip", "pink_wool", "piston", "pistonArmCollision", "pitcher_crop", "pitcher_plant", "planks", "player_head", "podzol", "pointed_dripstone", "polished_andesite", "polished_andesite_double_slab", "polished_andesite_slab", "polished_andesite_stairs", "polished_basalt", "polished_blackstone", "polished_blackstone_brick_double_slab", "polished_blackstone_brick_slab", "polished_blackstone_brick_stairs", "polished_blackstone_brick_wall", "polished_blackstone_bricks", "polished_blackstone_button", "polished_blackstone_double_slab", "polished_blackstone_pressure_plate", "polished_blackstone_slab", "polished_blackstone_stairs", "polished_blackstone_wall", "polished_deepslate", "polished_deepslate_double_slab", "polished_deepslate_slab", "polished_deepslate_stairs", "polished_deepslate_wall", "polished_diorite", "polished_diorite_double_slab", "polished_diorite_slab", "polished_diorite_stairs", "polished_granite", "polished_granite_double_slab", "polished_granite_slab", "polished_granite_stairs", "polished_tuff", "polished_tuff_double_slab", "polished_tuff_slab", "polished_tuff_stairs", "polished_tuff_wall", "poppy", "portal", "potatoes", "powder_snow", "powered_comparator", "powered_repeater", "prismarine", "prismarine_brick_double_slab", "prismarine_brick_slab", "prismarine_bricks", "prismarine_bricks_stairs", "prismarine_double_slab", "prismarine_slab", "prismarine_stairs", "prismarine_wall", "pumpkin", "pumpkin_stem", "purple_candle", "purple_candle_cake", "purple_carpet", "purple_concrete", "purple_concrete_powder", "purple_glazed_terracotta", "purple_shulker_box", "purple_stained_glass", "purple_stained_glass_pane", "purple_terracotta", "purple_wool", "purpur_block", "purpur_double_slab", "purpur_pillar", "purpur_slab", "purpur_stairs", "quartz_block", "quartz_bricks", "quartz_double_slab", "quartz_ore", "quartz_pillar", "quartz_slab", "quartz_stairs", "rail", "raw_copper_block", "raw_gold_block", "raw_iron_block", "red_candle", "red_candle_cake", "red_carpet", "red_concrete", "red_concrete_powder", "red_flower", "red_glazed_terracotta", "red_mushroom", "red_mushroom_block", "red_nether_brick", "red_nether_brick_double_slab", "red_nether_brick_slab", "red_nether_brick_stairs", "red_nether_brick_wall", "red_sand", "red_sandstone", "red_sandstone_double_slab", "red_sandstone_slab", "red_sandstone_stairs", "red_sandstone_wall", "red_shulker_box", "red_stained_glass", "red_stained_glass_pane", "red_terracotta", "red_tulip", "red_wool", "redstone_block", "redstone_lamp", "redstone_ore", "redstone_torch", "redstone_wire", "reeds", "reinforced_deepslate", "repeating_command_block", "reserved6", "resin_block", "resin_brick_double_slab", "resin_brick_slab", "resin_brick_stairs", "resin_brick_wall", "resin_bricks", "resin_clump", "respawn_anchor", "rose_bush", "sand", "sandstone", "sandstone_double_slab", "sandstone_slab", "sandstone_stairs", "sandstone_wall", "sapling", "scaffolding", "sculk", "sculk_catalyst", "sculk_sensor", "sculk_shrieker", "sculk_vein", "seaLantern", "sea_pickle", "seagrass", "short_grass", "shroomlight", "shulker_box", "silver_glazed_terracotta", "skeleton_skull", "skull", "slime", "small_amethyst_bud", "small_dripleaf_block", "smithing_table", "smoker", "smooth_basalt", "smooth_quartz", "smooth_quartz_slab", "smooth_quartz_stairs", "smooth_red_sandstone", "smooth_red_sandstone_double_slab", "smooth_red_sandstone_slab", "smooth_red_sandstone_stairs", "smooth_sandstone", "smooth_sandstone_double_slab", "smooth_sandstone_slab", "smooth_sandstone_stairs", "smooth_stone", "smooth_stone_double_slab", "smooth_stone_slab", "sniffer_egg", "snow", "snow_layer", "soul_campfire", "soul_fire", "soul_lantern", "soul_sand", "soul_soil", "soul_torch", "sponge", "spore_blossom", "spruce_button", "spruce_door", "spruce_double_slab", "spruce_fence", "spruce_fence_gate", "spruce_hanging_sign", "spruce_leaves", "spruce_log", "spruce_pressure_plate", "spruce_sapling", "spruce_slab", "spruce_stairs", "spruce_standing_sign", "spruce_trapdoor", "spruce_wall_sign", "spruce_wood", "stained_glass", "stained_glass_pane", "stained_hardened_clay", "standing_banner", "standing_sign", "stickyPistonArmCollision", "sticky_piston", "stone", "stone_brick_double_slab", "stone_brick_slab", "stone_brick_stairs", "stone_brick_wall", "stone_bricks", "stone_button", "stone_pressure_plate", "stone_slab", "stone_slab2", "stone_slab3", "stone_slab4", "stone_stairs", "stonebrick", "stonecutter", "stonecutter_block", "stripped_acacia_log", "stripped_acacia_wood", "stripped_bamboo_block", "stripped_birch_log", "stripped_birch_wood", "stripped_cherry_log", "stripped_cherry_wood", "stripped_crimson_hyphae", "stripped_crimson_stem", "stripped_dark_oak_log", "stripped_dark_oak_wood", "stripped_jungle_log", "stripped_jungle_wood", "stripped_mangrove_log", "stripped_mangrove_wood", "stripped_oak_log", "stripped_oak_wood", "stripped_pale_oak_log", "stripped_pale_oak_wood", "stripped_spruce_log", "stripped_spruce_wood", "stripped_warped_hyphae", "stripped_warped_stem", "structure_block", "structure_void", "sunflower", "suspicious_gravel", "suspicious_sand", "sweet_berry_bush", "tall_grass", "tallgrass", "target", "tinted_glass", "tnt", "torch", "torchflower", "torchflower_crop", "trapdoor", "trapped_chest", "trial_spawner", "tripWire", "tripwire_hook", "tube_coral", "tube_coral_block", "tube_coral_fan", "tube_coral_wall_fan", "tuff", "tuff_brick_double_slab", "tuff_brick_slab", "tuff_brick_stairs", "tuff_brick_wall", "tuff_bricks", "tuff_double_slab", "tuff_slab", "tuff_stairs", "tuff_wall", "turtle_egg", "twisting_vines", "undyed_shulker_box", "unlit_redstone_torch", "unpowered_comparator", "unpowered_repeater", "vault", "verdant_froglight", "vine", "wall_banner", "wall_sign", "warped_button", "warped_door", "warped_double_slab", "warped_fence", "warped_fence_gate", "warped_fungus", "warped_hanging_sign", "warped_hyphae", "warped_nylium", "warped_planks", "warped_pressure_plate", "warped_roots", "warped_slab", "warped_stairs", "warped_standing_sign", "warped_stem", "warped_trapdoor", "warped_wall_sign", "warped_wart_block", "water", "waterlily", "waxed_chiseled_copper", "waxed_copper", "waxed_copper_bulb", "waxed_copper_door", "waxed_copper_grate", "waxed_copper_trapdoor", "waxed_cut_copper", "waxed_cut_copper_slab", "waxed_cut_copper_stairs", "waxed_double_cut_copper_slab", "waxed_exposed_chiseled_copper", "waxed_exposed_copper", "waxed_exposed_copper_bulb", "waxed_exposed_copper_door", "waxed_exposed_copper_grate", "waxed_exposed_copper_trapdoor", "waxed_exposed_cut_copper", "waxed_exposed_cut_copper_slab", "waxed_exposed_cut_copper_stairs", "waxed_exposed_double_cut_copper_slab", "waxed_oxidized_chiseled_copper", "waxed_oxidized_copper", "waxed_oxidized_copper_bulb", "waxed_oxidized_copper_door", "waxed_oxidized_copper_grate", "waxed_oxidized_copper_trapdoor", "waxed_oxidized_cut_copper", "waxed_oxidized_cut_copper_slab", "waxed_oxidized_cut_copper_stairs", "waxed_oxidized_double_cut_copper_slab", "waxed_weathered_chiseled_copper", "waxed_weathered_copper", "waxed_weathered_copper_bulb", "waxed_weathered_copper_door", "waxed_weathered_copper_grate", "waxed_weathered_copper_trapdoor", "waxed_weathered_cut_copper", "waxed_weathered_cut_copper_slab", "waxed_weathered_cut_copper_stairs", "waxed_weathered_double_cut_copper_slab", "weathered_chiseled_copper", "weathered_copper", "weathered_copper_bulb", "weathered_copper_door", "weathered_copper_grate", "weathered_copper_trapdoor", "weathered_cut_copper", "weathered_cut_copper_slab", "weathered_cut_copper_stairs", "weathered_double_cut_copper_slab", "web", "weeping_vines", "wet_sponge", "wheat", "white_candle", "white_candle_cake", "white_carpet", "white_concrete", "white_concrete_powder", "white_glazed_terracotta", "white_shulker_box", "white_stained_glass", "white_stained_glass_pane", "white_terracotta", "white_tulip", "white_wool", "wither_rose", "wither_skeleton_skull", "wood", "wooden_button", "wooden_door", "wooden_pressure_plate", "wooden_slab", "wool", "yellow_candle", "yellow_candle_cake", "yellow_carpet", "yellow_concrete", "yellow_concrete_powder", "yellow_flower", "yellow_glazed_terracotta", "yellow_shulker_box", "yellow_stained_glass", "yellow_stained_glass_pane", "yellow_terracotta", "yellow_wool", "zombie_head"]}}
```

*Last updated for 1.21.50*

## ItemLock

There are two modes of `item_lock`, an item can have either one or the other. `item_lock` works in adventure, survival, and creative.

The `lock_in_inventory` component prevents the item from being dropped, removed from the player's inventory, crafted with, placed in a bundle, or renamed in an anvil. The item texture will display a yellow triangle in the upper left corner.

<CodeHeader></CodeHeader>

```yaml
# Give player a diamond axe that locks in inventory: 
/give @p diamond_axe 1 0 {"minecraft:item_lock":{"mode":"lock_in_inventory"}}

# Replace the first hotbar slot with a diamond sword that locks in inventory: 
/replaceitem entity @p slot.hotbar 0 diamond_sword 1 0 {"minecraft:item_lock":{"mode":"lock_in_inventory"}}
```

The `lock_in_slot` component prevents the item from being dropped, moved or removed from its slot in the player's inventory, crafted with, placed in a bundle, or renamed in an anvil. The item texture will display a red triangle in the upper left corner.

<CodeHeader></CodeHeader>

```yaml
# Give player a wooden_pickaxe that locks in slot:
/give @p wooden_pickaxe 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"}}`

# Replace the first hotbar slot with an iron shovel that locks in slot:
/replaceitem entity @p slot.hotbar 0 iron_shovel 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"}}
```

:::info NOTE:
Players can place items with an `item_lock` component in Decorated Pots. When the pot is broken the item retains its nbt components.
:::

### Overriding How ItemLock Displays

The texture to overwrite is `16x16`, and is located in `RP/textures/ui/item_lock_red.png` and `RP/textures/ui/item_lock_yellow.png`

The following translation keys can be overwritten if you want to change how these components display:

<CodeHeader></CodeHeader>

```json
item.itemLock.cantDrop=:hollow_star: Can't Drop Items can't be:
item.itemLock.cantMove=:solid_star: Can't Move Items can't be:
item.itemLock.hoverText.cantBe.moved=moved
item.itemLock.hoverText.cantBe.dropped=dropped
item.itemLock.hoverText.cantBe.removed=removed
item.itemLock.hoverText.cantBe.craftedWith=crafted with
item.itemLock.keepOnDeath=This item is not lost on death
item.itemLock.popupNotice.cantDrop=:hollow_star: Can't Drop Items can't be: dropped, removed, crafted with
item.itemLock.popupNotice.cantMove=:solid_star: Can't Move Items can't be: moved, dropped, removed, crafted with
```

## KeepOnDeath

Item will remain in an entity's inventory when it dies:

<CodeHeader></CodeHeader>

```yaml
/replaceitem entity @e[type=zombie] slot.weapon.mainhand 0 cooked_beef 1 0 {"minecraft:keep_on_death":{}}
```

For non-player entities, the item will not be present in their inventory after death as they do not respawn. However, it can be cleared from the entity's inventory using `/clear` or replaced with `/replaceitem`.

:::info NOTE

The keep inventory cheat functions as if all items in a player's inventory had `"minecraft:keep_on_death":{}`. However, the NBT component is most helpful in filtering specific items that one wishes for a player to remain in their inventory instead of all items.

:::

`keep_on_death` functions identically in both adventure and survival mode.

## Combining NBT Components

A block with both the `can_place_on` component and `item_lock` component may be placed in adventure mode. The `item_lock` component prevents the block from being dropped, removed from the player's inventory into a container like a chest or furnace, crafted with, placed in a bundle, or renamed in an anvil.

<CodeHeader></CodeHeader>

```py
# Give all players a stack of oak planks that can be placed on dirt, grass, and cobblestone, and locks in inventory: 
/give @a oak_planks 64 0 {"minecraft:can_place_on":{"blocks":["dirt", "grass", "cobblestone"]},"minecraft:item_lock":{"mode":"lock_in_inventory"}}

# Give all players a bow that locks in a specific inventory slot and is kept on death: 
/give @a bow 1 0 {"minecraft:item_lock":{ "mode": "lock_in_slot" }, "minecraft:keep_on_death":{}}

# Give self a stone shovel that can only dig up gravel and sand, and locks in inventory: 
/give @s stone_shovel 1 0 {"minecraft:can_destroy":{"blocks":["dirt", "sand"]},"minecraft:item_lock":{ "mode": "lock_in_inventory" }}
```

## Additional Notes

Assigning specific blocks and items with specific data values using `"minecraft:can_place_on"` and `"minecraft:can_destroy"` will return an error stating the NBT "could not be updated", which seems to be an unintended bug in this case.

<CodeHeader></CodeHeader>

```yaml
/give @s cobblestone 64 0 {"minecraft:can_place_on":{"blocks":["stained_glass:2"]}}
/give @a wooden_axe 16 0 {"minecraft:can_destroy":{"blocks":["wool:5"]}}
```

Similarly to the issue above, specifying commands that generally do not make sense will also return a "could not be updated" error. Some examples include:

<CodeHeader></CodeHeader>

```yaml
/give @a diamond_sword 10 0 {"minecraft:can_place_on":{"blocks":["dirt"]}}
```
_Cannot place non-block items on blocks._

## Giving NBT Items with Structure Command

By saving named or enchanted items using the `/structure save` command, you can later use the `/structure load` command to give those exact items to players.

Note that this method does not place the item directly into the player's inventory. Instead, it spawns the item at their feet, allowing them to pick it up immediately.

### Saving the Item

1. Drop the desired item(s) on the ground.
2. Place a repeating command block ![Repeat Command Block](/assets/images/commands/intro-to-command-blocks/command-block.repeat.png) next to it with the following command:
   - `tp @e[type=item,c=1] ~~0.5~`
3. Run the following command in chat:

    <CodeHeader></CodeHeader>

    ```yaml
    /execute at @e[type=item,c=1] run structure save wiki:nbt_item ~~~ ~~~ true disk false
    ```

*The repeating command block and the dropped item(s) may now be removed as they are no longer required.*

### Giving the Item

Now, to give the saved item to a player, simply run:

<CodeHeader></CodeHeader>

```yaml
/execute at @p run structure load wiki:nbt_item ~~~
```

**Note:** The structure identifier (`wiki`) and name (`nbt_item`) can be changed to whatever suits your project.

## Giving NBT Shulker Boxes with Loot Command

Using this method, you can give — or directly place into a player's or container's inventory — named shulker boxes filled with items of your choice.

This is especially useful for adventure maps or servers — for example, giving players a 'Starter Kit' when they join the server for the first time.

> ***[Demo Video by @CornyFlex](https://youtu.be/SFCZ4zb8sHk)***

### Steps

1. Prepare your shulker box and place it in a secure area accessible only to operators.
2. Ensure this area remains loaded at all times using a **[ticking area](https://learn.microsoft.com/en-us/minecraft/creator/documents/tickingareacommand)**.
3. You can now give the prepared shulker box to players using the **[/loot](https://learn.microsoft.com/en-us/minecraft/creator/commands/commands/loot?view=minecraft-bedrock-stable)** command, as shown below:

   <CodeHeader>Example</CodeHeader>

   ```yaml
   /loot give @p mine <xyz:source>
   ```

   Replace `<xyz:source>` with the coordinates of the shulker box.

   To place the shulker box in a specific slot of a **player's** inventory, use:

   <CodeHeader>Example</CodeHeader>

   ```yaml
   /loot replace entity @p slot.hotbar 0 mine <xyz:source>
   ```

   To place it in a specific slot of a **container**, use:

   <CodeHeader>Example</CodeHeader>

   ```yaml
   /loot replace block <xyz:target> slot.container 0 mine <xyz:source>
   ```

:::info NOTE

This method also works with renamed **banners**, **chests**, **furnaces**, and **smokers**. However, any items stored inside these container blocks will not be preserved.

:::

## Giving NBT Items in Trade or Loot Tables

It is currently not possible to set NBT via loot tables or trade tables. If you want to sell items with NBT components, you will need to use a workaround of some kind or another, such as cloning chests containing items with pre-existing NBT.

## Item Editor MCBE

This project provides an add-on for Minecraft Bedrock Edition that allows direct editing of item properties in-game. It leverages the Script API and requires no additional toggles in your world settings.

GitHub repository link: https://github.com/Justash01/item-editor-mcbe
