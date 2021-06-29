---
title: NBT Commands
---

NBT data for the Bedrock edition is minimal. Four of the only values we have access to are `CanPlaceOn`,`CanDestroy`, `KeepOnDeath`, and `ItemLock`. These are used as part of a `/give` or `replaceitem` command and can edit specific properties of the items with said NBT.

## CanPlaceOn and CanDestroy

Destroy: `/give @p diamond_pickaxe 1 0 {"minecraft:can_destroy":{"blocks":["planks", "skull"]}}`

Place on: `/give @p stone 1 0 {"minecraft:can_place_on":{"blocks":["stone"]}}`

You can add more blocks like this: `["stone", "dirt", "bedrock"]`

Note: The game interprets mob skulls as blocks that can be destroyed. These two NBT components only function in adventure mode.

## Can place on EVERYTHING

This is the code for a block that can be placed on everything in the game:

```
give @p stone 1 0 {"can_place_on":{"blocks":["tripwire_hook","air","noteblock","gravel","lit_redstone_lamp","stone","golden_rail","gold_block","bedrock","turtle_egg","element_72","oak_stairs","element_7","grass","detector_rail","planks","dark_oak_pressure_plate","dirt","coal_ore","diamond_block","cobblestone","element_12","lava","dark_oak_trapdoor","element_63","double_stone_slab2","slime","stonebrick","sapling","cauldron","flowing_water","spruce_pressure_plate","piston","stained_glass","water","flowing_lava","furnace","element_81","sand","gold_ore","wooden_door","tallgrass","iron_ore","underwater_torch","web","log","element_47","stripped_oak_log","leaves","ladder","yellow_flower","element_113","sponge","sweet_berry_bush","birch_fence_gate","standing_sign","monster_egg","glass","conduit","element_43","lapis_ore","spruce_button","bookshelf","bed","element_79","powered_comparator","wooden_pressure_plate","lapis_block","element_116","stripped_acacia_log","spruce_door","dispenser","wheat","diamond_ore","sandstone","obsidian","wool","brick_block","reeds","sticky_piston","deadbush","dried_kelp_block","pistonArmCollision","red_flower","green_glazed_terracotta","brown_mushroom","red_mushroom","spruce_fence_gate","iron_block","stone_slab","double_stone_slab","beehive","rail","tnt","mossy_cobblestone","quartz_stairs","torch","mob_spawner","lava_cauldron","element_82","chest","jungle_standing_sign","element_41","redstone_wire","crafting_table","element_39","dark_oak_door","farmland","lit_furnace","stone_stairs","wall_sign","lever","stone_pressure_plate","element_48","iron_door","redstone_ore","lectern","lit_redstone_ore","unlit_redstone_torch","red_nether_brick_stairs","redstone_torch","stone_button","snow_layer","brown_mushroom_block","ice","snow","cactus","element_88","command_block","clay","jukebox","fence","pumpkin","acacia_door","nether_brick_stairs","netherrack","log2","soul_sand","glowstone","portal","lit_pumpkin","beetroot","cake","unpowered_repeater","powered_repeater","invisibleBedrock","coral_fan_hang3","acacia_stairs","trapdoor","jungle_door","red_mushroom_block","iron_bars","coral","chain_command_block","glass_pane","element_114","melon_block","coral_fan_hang2","emerald_block","pumpkin_stem","chemical_heat","melon_stem","vine","element_84","standing_banner","fence_gate","element_106","brick_stairs","stone_brick_stairs","mycelium","waterlily","smooth_stone","nether_brick","sandstone_stairs","nether_brick_fence","element_107","nether_wart","element_94","enchanting_table","brewing_stand","purpur_block","end_portal","end_portal_frame","element_4","end_stone","fletching_table","element_13","dragon_egg","loom","granite_stairs","redstone_lamp","dropper","activator_rail","coral_block","cocoa","wood","emerald_ore","hard_stained_glass_pane","observer","ender_chest","info_update","unpowered_comparator","tripWire","spruce_stairs","birch_stairs","stonecutter_block","jungle_stairs","coral_fan_hang","element_90","beacon","cobblestone_wall","flower_pot","carrots","potatoes","wooden_button","grindstone","skull","anvil","stone_slab4","element_21","trapped_chest","light_weighted_pressure_plate","element_25","purple_glazed_terracotta","heavy_weighted_pressure_plate","daylight_detector","stripped_jungle_log","redstone_block","quartz_ore","hopper","element_97","quartz_block","wooden_slab","element_53","double_wooden_slab","leaves2","stained_hardened_clay","carved_pumpkin","stained_glass_pane","dark_oak_stairs","iron_trapdoor","prismarine","seaLantern","element_96","hay_block","element_37","carpet","hardened_clay","element_44","coal_block","packed_ice","element_118","chemistry_table","black_glazed_terracotta","purpur_stairs","double_plant","wall_banner","daylight_detector_inverted","red_sandstone","red_sandstone_stairs","spruce_trapdoor","element_27","stone_slab2","jungle_fence_gate","dark_oak_fence_gate","acacia_fence_gate","repeating_command_block","birch_door","grass_path","frame","normal_stone_stairs","element_1","chorus_flower","jungle_pressure_plate","undyed_shulker_box","element_10","end_bricks","smoker","frosted_ice","diorite_stairs","structure_block","end_rod","element_16","blue_glazed_terracotta","end_gateway","magma","bell","stone_slab3","element_26","movingBlock","nether_wart_block","red_nether_brick","bone_block","structure_void","shulker_box","white_glazed_terracotta","orange_glazed_terracotta","magenta_glazed_terracotta","light_blue_glazed_terracotta","colored_torch_bp","yellow_glazed_terracotta","element_59","lime_glazed_terracotta","pink_glazed_terracotta","barrier","gray_glazed_terracotta","silver_glazed_terracotta","cyan_glazed_terracotta","glowingobsidian","brown_glazed_terracotta","red_glazed_terracotta","concrete","acacia_trapdoor","concretePowder","scaffolding","element_54","chorus_plant","smooth_sandstone_stairs","camera","podzol","stonecutter","netherreactor","element_34","info_update2","element_3","reserved6","element_31","prismarine_stairs","bamboo","element_76","dark_prismarine_stairs","prismarine_bricks_stairs","stripped_spruce_log","stripped_birch_log","cartography_table","stripped_dark_oak_log","blue_ice","fire","hard_glass","acacia_standing_sign","hard_stained_glass","hard_glass_pane","colored_torch_rg","element_0","element_2","element_5","blast_furnace","element_6","element_8","element_9","mossy_cobblestone_stairs","element_11","andesite_stairs","element_14","element_15","element_17","element_18","element_19","element_20","acacia_button","element_22","element_23","element_24","element_28","element_29","element_30","element_32","element_33","element_35","element_36","element_38","element_40","element_42","element_45","smooth_red_sandstone_stairs","seagrass","element_46","element_49","element_50","element_51","sea_pickle","element_52","element_55","element_56","element_57","element_58","element_60","element_61","double_stone_slab3","element_62","element_64","double_stone_slab4","element_65","element_66","element_67","element_68","element_69","element_70","element_71","element_73","element_74","element_75","bamboo_sapling","element_77","element_78","element_80","element_83","element_85","element_86","jungle_button","element_87","element_89","birch_pressure_plate","element_91","element_92","element_93","birch_wall_sign","element_95","element_98","element_99","element_100","element_101","element_102","element_103","element_104","element_105","element_108","element_109","jungle_trapdoor","element_110","element_111","element_112","element_115","element_117","coral_fan","coral_fan_dead","kelp","birch_button","dark_oak_button","stickyPistonArmCollision","birch_trapdoor","acacia_pressure_plate","bubble_column","polished_granite_stairs","polished_diorite_stairs","polished_andesite_stairs","mossy_stone_brick_stairs","end_brick_stairs","smooth_quartz_stairs","spruce_standing_sign","spruce_wall_sign","birch_standing_sign","smithing_table","jungle_wall_sign","acacia_wall_sign","darkoak_standing_sign","darkoak_wall_sign","lit_smoker","barrel","lantern","campfire","jigsaw","composter","lit_blast_furnace","light_block","wither_rose","bee_nest","honey_block","honeycomb_block","lodestone","crimson_roots","warped_roots","crimson_fungus","warped_fungus","warped_wart_block","nether_wart","nether_wart_block","crimson_stem","warped_stem","stripped_crimson_stem","stripped_warped_stem","crimson_hyphae","warped_hyphae","stripped_crimson_hyphae","stripped_warped_hyphae","shroomlight","crimson_nylium","warped_nylium","vine","weeping_vines","twisting_vines","basalt","polished_basalt","soul_soil","soul_fire","nether_sprouts","target","soul_torch","soul_lantern","netherite_block","nether_gold_ore","ancient_debris","warped_standing_sign","crimson_standing_sign","warped_wall_sign","crimson_wall_sign","crimson_door","warped_door","crimson_planks","warped_planks","crimson_trapdoor","warped_trapdoor","crimson_fence","warped_fence","crimson_fence_gate","warped_fence_gate","crimson_double_slab","crimson_slab","warped_double_slab","warped_slab","crimson_stairs","warped_stairs","crimson_button","warped_button","crimson_pressure_plate","warped_pressure_plate","blackstone","polished_blackstone_bricks","polished_blackstone_brick_stairs","blackstone_stairs","blackstone_wall","polished_blackstone_brick_wall","chiseled_polished_blackstone","cracked_polished_blackstone_bricks","gilded_blackstone","respawn_anchor","crying_obsidian","blackstone_slab","blackstone_double_slab","polished_blackstone_brick_slab","polished_blackstone_brick_double_slab","chain","polished_blackstone","polished_blackstone_stairs","polished_blackstone_slab","polished_blackstone_double_slab","polished_blackstone_pressure_plate","polished_blackstone_button","polished_blackstone_wall","chiseled_nether_bricks","cracked_nether_bricks","quartz_bricks","soul_campfire"]}}
```

## ItemLock

Lock in any applicable slot in inventory: `/give @p iron_axe 1 100 {"minecraft:item_lock":{ "mode": "lock_in_inventory" }}`

Lock in a specific slot in inventory: `/give @p apple 1 0 {"minecraft:item_lock":{ "mode": "lock_in_slot" }}`

These two variations of ItemLock are mutually exclusive. Itemlock works in both adventure and survival.

These are the lang codes if you want to change how KeepOnDeath displays.

The texture to overwrite is `16x16`, and is located in `RP/ui/item_lock_red.png` and `RP/ui/item_lock_yellow.png`

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

## KeepOnDeath

Item will remain in an entity's inventory when it dies: `/replaceitem entity @e[type=zombie] slot.weapon.mainhand -1 cooked_beef 1 0 {"minecraft:keep_on_death":{}}`

For non-player entities, the item will not be present in their inventory after death as they do not respawn. This can be cleared from the entity's inventory using /clear or replaced with /replaceitem.

Gamerule /keepinventory set to true functions as if all items in a player's inventory had `"minecraft:keep_on_death":{}`. However, the NBT component is most helpful in filtering on specific items that one wishes for a player to remain in his or her inventory instead of all items.

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
