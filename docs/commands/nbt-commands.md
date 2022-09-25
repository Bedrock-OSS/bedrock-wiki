---
title: NBT Commands
category: General
mention:
    - MedicalJewel105
---

NBT data for the Bedrock edition is minimal. The only values we have access to are:

1. `CanPlaceOn`
2. `CanDestroy`
3. `KeepOnDeath`
4. `ItemLock`.

These are used as part of a `/give` or `replaceitem` command and can edit specific properties of the items with said NBT.

## CanPlaceOn and CanDestroy

Destroy: `/give @p diamond_pickaxe 1 0 {"minecraft:can_destroy":{"blocks":["planks", "skull"]}}`

Place on: `/give @p stone 1 0 {"minecraft:can_place_on":{"blocks":["stone"]}}`

You can add more blocks like this: `["stone", "dirt", "bedrock"]`

Note: The game interprets mob skulls as blocks that can be destroyed. These two NBT components only function in adventure mode.

### CanPlaceOn Everything

This is the code for a block that can be placed on everything in the game:

**Please, note that if there is at least one invalid block, this won't work!**

<!-- page_dumper_start -->
<CodeHeader></CodeHeader>

```json
give @p stone 1 0 {"minecraft:can_place_on": {"blocks": ["acacia_button", "acacia_door", "acacia_fence_gate", "acacia_pressure_plate", "acacia_stairs", "acacia_standing_sign", "acacia_trapdoor", "acacia_wall_sign", "activator_rail", "air", "allow", "amethyst_block", "amethyst_cluster", "ancient_debris", "andesite_stairs", "anvil", "azalea", "azalea_leaves", "azalea_leaves_flowered", "bamboo", "bamboo_sapling", "barrel", "barrier", "basalt", "beacon", "bed", "bedrock", "bee_nest", "beehive", "beetroot", "bell", "big_dripleaf", "birch_button", "birch_door", "birch_fence_gate", "birch_pressure_plate", "birch_stairs", "birch_standing_sign", "birch_trapdoor", "birch_wall_sign", "black_candle", "black_candle_cake", "black_glazed_terracotta", "blackstone", "blackstone_double_slab", "blackstone_slab", "blackstone_stairs", "blackstone_wall", "blast_furnace", "blue_candle", "blue_candle_cake", "blue_glazed_terracotta", "blue_ice", "bone_block", "bookshelf", "border_block", "brewing_stand", "brick_block", "brick_stairs", "brown_candle", "brown_candle_cake", "brown_glazed_terracotta", "brown_mushroom", "brown_mushroom_block", "bubble_column", "budding_amethyst", "cactus", "cake", "calcite", "camera", "campfire", "candle", "candle_cake", "carpet", "carrots", "cartography_table", "carved_pumpkin", "cauldron", "cave_vines", "cave_vines_body_with_berries", "cave_vines_head_with_berries", "chain", "chain_command_block", "chest", "chiseled_deepslate", "chiseled_nether_bricks", "chiseled_polished_blackstone", "chorus_flower", "chorus_plant", "clay", "coal_block", "coal_ore", "cobbled_deepslate", "cobbled_deepslate_double_slab", "cobbled_deepslate_slab", "cobbled_deepslate_stairs", "cobbled_deepslate_wall", "cobblestone", "cobblestone_wall", "cocoa", "command_block", "composter", "concrete", "concretePowder", "conduit", "copper_block", "copper_ore", "coral", "coral_block", "coral_fan", "coral_fan_dead", "coral_fan_hang", "coral_fan_hang2", "coral_fan_hang3", "cracked_deepslate_bricks", "cracked_deepslate_tiles", "cracked_nether_bricks", "cracked_polished_blackstone_bricks", "crafting_table", "crimson_button", "crimson_door", "crimson_double_slab", "crimson_fence", "crimson_fence_gate", "crimson_fungus", "crimson_hyphae", "crimson_nylium", "crimson_planks", "crimson_pressure_plate", "crimson_roots", "crimson_slab", "crimson_stairs", "crimson_standing_sign", "crimson_stem", "crimson_trapdoor", "crimson_wall_sign", "crying_obsidian", "cut_copper", "cut_copper_slab", "cut_copper_stairs", "cyan_candle", "cyan_candle_cake", "cyan_glazed_terracotta", "dark_oak_button", "dark_oak_door", "dark_oak_fence_gate", "dark_oak_pressure_plate", "dark_oak_stairs", "dark_oak_trapdoor", "dark_prismarine_stairs", "darkoak_standing_sign", "darkoak_wall_sign", "daylight_detector", "daylight_detector_inverted", "deadbush", "deepslate", "deepslate_brick_double_slab", "deepslate_brick_slab", "deepslate_brick_stairs", "deepslate_brick_wall", "deepslate_bricks", "deepslate_coal_ore", "deepslate_copper_ore", "deepslate_diamond_ore", "deepslate_emerald_ore", "deepslate_gold_ore", "deepslate_iron_ore", "deepslate_lapis_ore", "deepslate_redstone_ore", "deepslate_tile_double_slab", "deepslate_tile_slab", "deepslate_tile_stairs", "deepslate_tile_wall", "deepslate_tiles", "deny", "detector_rail", "diamond_block", "diamond_ore", "diorite_stairs", "dirt", "dirt_with_roots", "dispenser", "double_cut_copper_slab", "double_plant", "double_stone_slab", "double_stone_slab2", "double_stone_slab3", "double_stone_slab4", "double_wooden_slab", "dragon_egg", "dried_kelp_block", "dripstone_block", "dropper", "emerald_block", "emerald_ore", "enchanting_table", "end_brick_stairs", "end_bricks", "end_gateway", "end_portal", "end_portal_frame", "end_rod", "end_stone", "ender_chest", "exposed_copper", "exposed_cut_copper", "exposed_cut_copper_slab", "exposed_cut_copper_stairs", "exposed_double_cut_copper_slab", "farmland", "fence", "fence_gate", "fire", "fletching_table", "flower_pot", "flowering_azalea", "flowing_lava", "flowing_water", "frame", "frog_spawn", "frosted_ice", "furnace", "gilded_blackstone", "glass", "glass_pane", "glow_frame", "glow_lichen", "glowingobsidian", "glowstone", "gold_block", "gold_ore", "golden_rail", "granite_stairs", "grass", "grass_path", "gravel", "gray_candle", "gray_candle_cake", "gray_glazed_terracotta", "green_candle", "green_candle_cake", "green_glazed_terracotta", "grindstone", "hanging_roots", "hardened_clay", "hay_block", "heavy_weighted_pressure_plate", "honey_block", "honeycomb_block", "hopper", "ice", "infested_deepslate", "info_update", "info_update2", "invisibleBedrock", "iron_bars", "iron_block", "iron_door", "iron_ore", "iron_trapdoor", "jigsaw", "jukebox", "jungle_button", "jungle_door", "jungle_fence_gate", "jungle_pressure_plate", "jungle_stairs", "jungle_standing_sign", "jungle_trapdoor", "jungle_wall_sign", "kelp", "ladder", "lantern", "lapis_block", "lapis_ore", "large_amethyst_bud", "lava", "lava_cauldron", "leaves", "leaves2", "lectern", "lever", "light_block", "light_blue_candle", "light_blue_candle_cake", "light_blue_glazed_terracotta", "light_gray_candle", "light_gray_candle_cake", "light_weighted_pressure_plate", "lightning_rod", "lime_candle", "lime_candle_cake", "lime_glazed_terracotta", "lit_blast_furnace", "lit_deepslate_redstone_ore", "lit_furnace", "lit_pumpkin", "lit_redstone_lamp", "lit_redstone_ore", "lit_smoker", "lodestone", "log", "log2", "loom", "magenta_candle", "magenta_candle_cake", "magenta_glazed_terracotta", "magma", "mangrove_button", "mangrove_door", "mangrove_double_slab", "mangrove_fence", "mangrove_fence_gate", "mangrove_leaves", "mangrove_log", "mangrove_planks", "mangrove_pressure_plate", "mangrove_propagule", "mangrove_roots", "mangrove_slab", "mangrove_stairs", "mangrove_standing_sign", "mangrove_trapdoor", "mangrove_wall_sign", "mangrove_wood", "medium_amethyst_bud", "melon_block", "melon_stem", "mob_spawner", "monster_egg", "moss_block", "moss_carpet", "mossy_cobblestone", "mossy_cobblestone_stairs", "mossy_stone_brick_stairs", "movingBlock", "mud", "mud_brick_double_slab", "mud_brick_slab", "mud_brick_stairs", "mud_brick_wall", "mud_bricks", "muddy_mangrove_roots", "mycelium", "nether_brick", "nether_brick_fence", "nether_brick_stairs", "nether_gold_ore", "nether_sprouts", "nether_wart", "nether_wart_block", "netherite_block", "netherrack", "netherreactor", "normal_stone_stairs", "noteblock", "oak_stairs", "observer", "obsidian", "ochre_froglight", "orange_candle", "orange_candle_cake", "orange_glazed_terracotta", "oxidized_copper", "oxidized_cut_copper", "oxidized_cut_copper_slab", "oxidized_cut_copper_stairs", "oxidized_double_cut_copper_slab", "packed_ice", "packed_mud", "pearlescent_froglight", "pink_candle", "pink_candle_cake", "pink_glazed_terracotta", "piston", "pistonArmCollision", "planks", "podzol", "pointed_dripstone", "polished_andesite_stairs", "polished_basalt", "polished_blackstone", "polished_blackstone_brick_double_slab", "polished_blackstone_brick_slab", "polished_blackstone_brick_stairs", "polished_blackstone_brick_wall", "polished_blackstone_bricks", "polished_blackstone_button", "polished_blackstone_double_slab", "polished_blackstone_pressure_plate", "polished_blackstone_slab", "polished_blackstone_stairs", "polished_blackstone_wall", "polished_deepslate", "polished_deepslate_double_slab", "polished_deepslate_slab", "polished_deepslate_stairs", "polished_deepslate_wall", "polished_diorite_stairs", "polished_granite_stairs", "portal", "potatoes", "powder_snow", "powered_comparator", "powered_repeater", "prismarine", "prismarine_bricks_stairs", "prismarine_stairs", "pumpkin", "pumpkin_stem", "purple_candle", "purple_candle_cake", "purple_glazed_terracotta", "purpur_block", "purpur_stairs", "quartz_block", "quartz_bricks", "quartz_ore", "quartz_stairs", "rail", "raw_copper_block", "raw_gold_block", "raw_iron_block", "red_candle", "red_candle_cake", "red_flower", "red_glazed_terracotta", "red_mushroom", "red_mushroom_block", "red_nether_brick", "red_nether_brick_stairs", "red_sandstone", "red_sandstone_stairs", "redstone_block", "redstone_lamp", "redstone_ore", "redstone_torch", "redstone_wire", "reeds", "reinforced_deepslate", "repeating_command_block", "reserved6", "respawn_anchor", "sand", "sandstone", "sandstone_stairs", "sapling", "scaffolding", "sculk", "sculk_catalyst", "sculk_sensor", "sculk_shrieker", "sculk_vein", "seaLantern", "sea_pickle", "seagrass", "shroomlight", "shulker_box", "silver_glazed_terracotta", "skull", "slime", "small_amethyst_bud", "small_dripleaf_block", "smithing_table", "smoker", "smooth_basalt", "smooth_quartz_stairs", "smooth_red_sandstone_stairs", "smooth_sandstone_stairs", "smooth_stone", "snow", "snow_layer", "soul_campfire", "soul_fire", "soul_lantern", "soul_sand", "soul_soil", "soul_torch", "sponge", "spore_blossom", "spruce_button", "spruce_door", "spruce_fence_gate", "spruce_pressure_plate", "spruce_stairs", "spruce_standing_sign", "spruce_trapdoor", "spruce_wall_sign", "stained_glass", "stained_glass_pane", "stained_hardened_clay", "standing_banner", "standing_sign", "stickyPistonArmCollision", "sticky_piston", "stone", "stone_brick_stairs", "stone_button", "stone_pressure_plate", "stone_slab", "stone_slab2", "stone_slab3", "stone_slab4", "stone_stairs", "stonebrick", "stonecutter", "stonecutter_block", "stripped_acacia_log", "stripped_birch_log", "stripped_crimson_hyphae", "stripped_crimson_stem", "stripped_dark_oak_log", "stripped_jungle_log", "stripped_mangrove_log", "stripped_mangrove_wood", "stripped_oak_log", "stripped_spruce_log", "stripped_warped_hyphae", "stripped_warped_stem", "structure_block", "structure_void", "sweet_berry_bush", "tallgrass", "target", "tinted_glass", "tnt", "torch", "trapdoor", "trapped_chest", "tripWire", "tripwire_hook", "tuff", "turtle_egg", "twisting_vines", "undyed_shulker_box", "unlit_redstone_torch", "unpowered_comparator", "unpowered_repeater", "verdant_froglight", "vine", "wall_banner", "wall_sign", "warped_button", "warped_door", "warped_double_slab", "warped_fence", "warped_fence_gate", "warped_fungus", "warped_hyphae", "warped_nylium", "warped_planks", "warped_pressure_plate", "warped_roots", "warped_slab", "warped_stairs", "warped_standing_sign", "warped_stem", "warped_trapdoor", "warped_wall_sign", "warped_wart_block", "water", "waterlily", "waxed_copper", "waxed_cut_copper", "waxed_cut_copper_slab", "waxed_cut_copper_stairs", "waxed_double_cut_copper_slab", "waxed_exposed_copper", "waxed_exposed_cut_copper", "waxed_exposed_cut_copper_slab", "waxed_exposed_cut_copper_stairs", "waxed_exposed_double_cut_copper_slab", "waxed_oxidized_copper", "waxed_oxidized_cut_copper", "waxed_oxidized_cut_copper_slab", "waxed_oxidized_cut_copper_stairs", "waxed_oxidized_double_cut_copper_slab", "waxed_weathered_copper", "waxed_weathered_cut_copper", "waxed_weathered_cut_copper_slab", "waxed_weathered_cut_copper_stairs", "waxed_weathered_double_cut_copper_slab", "weathered_copper", "weathered_cut_copper", "weathered_cut_copper_slab", "weathered_cut_copper_stairs", "weathered_double_cut_copper_slab", "web", "weeping_vines", "wheat", "white_candle", "white_candle_cake", "white_glazed_terracotta", "wither_rose", "wood", "wooden_button", "wooden_door", "wooden_pressure_plate", "wooden_slab", "wool", "yellow_candle", "yellow_candle_cake", "yellow_flower", "yellow_glazed_terracotta"]}}
```

*Last updated for 1.19.30*
<!-- page_dumper_end -->

## ItemLock

Lock in any applicable slot in inventory: `/give @p iron_axe 1 100 {"minecraft:item_lock":{ "mode": "lock_in_inventory" }}`

Lock in a specific slot in inventory: `/give @p apple 1 0 {"minecraft:item_lock":{ "mode": "lock_in_slot" }}`

These two variations of ItemLock are mutually exclusive. Itemlock works in both adventure and survival.

### Overriding how ItemLock displays

The texture to overwrite is `16x16`, and is located in `RP/textures/ui/item_lock_red.png` and `RP/textures/ui/item_lock_yellow.png`

The following translation keys can be overwritten if you want to change how these components display:

```
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
If you want to hide description and red/yellow triangle, you can simply do:
`/gamerule showtags false` 

## KeepOnDeath

Item will remain in an entity's inventory when it dies: `/replaceitem entity @e[type=zombie] slot.weapon.mainhand -1 cooked_beef 1 0 {"minecraft:keep_on_death":{}}`

For non-player entities, the item will not be present in their inventory after death as they do not respawn. This can be cleared from the entity's inventory using /clear or replaced with /replaceitem.
> Gamerule /keepinventory set to true functions as if all items in a player's inventory had `"minecraft:keep_on_death":{}`. However, the NBT component is most helpful in filtering on specific items that one wishes for a player to remain in his or her inventory instead of all items.

KeepOnDeath functions identically in both adventure and survival mode.

## Combining NBT components

Give all players a bow that locks in a specific inventory slot and is kept on death: `/give @a bow 1 0 {"minecraft:item_lock":{ "mode": "lock_in_slot" }, "minecraft:keep_on_death":{}}`

Give self a stone shovel that can only dig up gravel and sand, and locks in inventory: `/give @s stone_shovel 1 0 {"minecraft:can_destroy":{"blocks":["dirt", "sand"]},"minecraft:item_lock":{ "mode": "lock_in_inventory" }}`

## Additional Notes

Assigning specific blocks and items with specific data values using `"minecraft:can_place_on"` and `"minecraft:can_destroy"` will return an error stating the NBT "could not be updated, which seems to be an unintended bug in this case.

`/give @s cobblestone 64 0 {"minecraft:can_place_on":{"blocks":["stained_glass:2"]}}`

`/give @a wooden_axe 16 0 {"minecraft:can_destroy":{"blocks":["wool:5"]}}`

Similarly to the issue above, specifying commands that generally do not make sense will also return a "could not be updated" error. Some examples include:

`/give @a diamond 10 0 {"minecraft:can_place_on":{"blocks":["dirt"]}}`

(cannot place items on blocks)

## Giving in trade/Loot-tables

It is currently not possible to set NBT via loot tables or trade tables. If you want to sell NBT-powered items, you will need to use a workaround of some kind or another, such as cloning chests containing items with pre-existing NBT.
