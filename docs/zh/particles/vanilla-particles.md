---
title: 原版粒子
category: 文档
description: 原版粒子列表。
---

以下是从原版资源中获取的完整 Bedrock 粒子列表。请注意，这些粒子并非全部都能正常工作，因为其中许多需要来自其宿主实体的 molang 上下文。

:::tip 通过 /particle 命令游玩：
出于某种原因，Bedrock 需要 `minecraft` 命名空间前缀，以及 `/particle` 命令中的坐标。

粒子没有自动补全功能。
:::

### 可正常工作的粒子

这些粒子可以直接在世界中生成，不会产生任何问题。

| 可正常工作的粒子                           |
| ------------------------------------------- |
| minecraft:basic_flame_particle              |
| minecraft:basic_portal_particle             |
| minecraft:basic_smoke_particle              |
| minecraft:bleach                            |
| minecraft:blue_flame_particle               |
| minecraft:camera_shoot_explosion            |
| minecraft:campfire_smoke_particle           |
| minecraft:campfire_tall_smoke_particle      |
| minecraft:candle_flame_particle             |
| minecraft:critical_hit_emitter              |
| minecraft:crop_growth_emitter               |
| minecraft:dragon_breath_trail               |
| minecraft:dragon_death_explosion_emitter    |
| minecraft:dragon_destroy_block              |
| minecraft:dragon_dying_explosion            |
| minecraft:endrod                            |
| minecraft:end_chest                         |
| minecraft:evocation_fang_particle           |
| minecraft:evoker_spell                      |
| minecraft:cauldron_explosion_emitter        |
| minecraft:egg_destroy_emitter               |
| minecraft:falling_border_dust_particle      |
| minecraft:falling_dust_dragon_egg_particle  |
| minecraft:falling_dust_gravel_particle      |
| minecraft:falling_dust_red_sand_particle    |
| minecraft:falling_dust_sand_particle        |
| minecraft:falling_dust_scaffolding_particle |
| minecraft:falling_dust_top_snow_particle    |
| minecraft:heart_particle                    |
| minecraft:honey_drip_particle               |
| minecraft:huge_explosion_lab_misc_emitter   |
| minecraft:huge_explosion_emitter            |
| minecraft:ice_evaporation_emitter           |
| minecraft:knockback_roar_particle           |
| minecraft:lab_table_misc_mystical_particle  |
| minecraft:large_explosion                   |
| minecraft:lava_drip_particle                |
| minecraft:lava_particle                     |
| minecraft:llama_spit_smoke                  |
| minecraft:magnesium_salts_emitter           |
| minecraft:mob_portal                        |
| minecraft:mycelium_dust_particle            |
| minecraft:obsidian_glow_dust_particle       |
| minecraft:obsidian_tear_particle            |
| minecraft:redstone_ore_dust_particle        |
| minecraft:redstone_repeater_dust_particle   |
| minecraft:redstone_torch_dust_particle      |
| minecraft:redstone_wire_dust_particle       |
| minecraft:rising_border_dust_particle       |
| minecraft:sculk_sensor_redstone_particle    |
| minecraft:snowflake_particle                |
| minecraft:spore_blossom_ambient_particle    |
| minecraft:spore_blossom_shower_particle     |
| minecraft:stalactite_lava_drip_particle     |
| minecraft:stalactite_water_drip_particle    |
| minecraft:totem_particle                    |
| minecraft:villager_angry                    |
| minecraft:villager_happy                    |
| minecraft:water_drip_particle               |
| minecraft:water_evaporation_bucket_emitter  |
| minecraft:water_splash_particle_manual      |

### 有问题的粒子

以下粒子可以生成，但可能会在内容日志中刷屏报错，因为它们依赖于 `/particle` 命令无法设置的变量：

| 有问题的粒子                                 |
| ----------------------------------------------- |
| minecraft:arrow_spell_emitter                   |
| minecraft:balloon_gas_particle                  |
| minecraft:basic_crit_particle                   |
| minecraft:conduit_absorb_particle               |
| minecraft:conduit_attack_emitter                |
| minecraft:dragon_breath_fire                    |
| minecraft:dragon_breath_lingering               |
| minecraft:electric_spark_particle               |
| minecraft:enchanting_table_particle             |
| minecraft:elephant_tooth_paste_vapor_particle   |
| minecraft:death_explosion_emitter               |
| minecraft:eyeofender_death_explode_particle     |
| minecraft:explosion_particle                    |
| minecraft:falling_dust_concrete_powder_particle |
| minecraft:lab_table_heatblock_dust_particle     |
| minecraft:misc_fire_vapor_particle              |
| minecraft:mobspell_emitter                      |
| minecraft:mob_block_spawn_emitter               |
| minecraft:note_particle                         |
| minecraft:portal_directional                    |
| minecraft:portal_reverse_particle               |
| minecraft:rain_splash_particle                  |
| minecraft:shulker_bullet                        |
| minecraft:silverfish_grief_emitter              |
| minecraft:soul_particle                         |
| minecraft:sparkler_emitter                      |
| minecraft:splash_spell_emitter                  |
| minecraft:water_evaporation_actor_emitter       |
| minecraft:water_splash_particle                 |
| minecraft:water_wake_particle                   |
| minecraft:wax_particle                          |
| minecraft:wither_boss_invulnerable              |

### 气泡粒子

以下粒子是各种气泡，只在水中显示。其中一些会在内容日志中刷屏报错：

| 气泡粒子                           |
| -------------------------------------- |
| minecraft:basic_bubble_particle        |
| minecraft:basic_bubble_particle_manual |
| minecraft:bubble_column_bubble         |
| minecraft:bubble_column_down_particle  |
| minecraft:bubble_column_up_particle    |
| minecraft:cauldron_bubble_particle     |
| minecraft:cauldron_splash_particle     |
| minecraft:dolphin_move_particle        |
| minecraft:eye_of_ender_bubble_particle |
| minecraft:fish_hook_particle           |
| minecraft:fish_pos_particle            |
| minecraft:glow_particle                |
| minecraft:guardian_attack_particle     |
| minecraft:guardian_water_move_particle |
| minecraft:sponge_absorb_water_particle |
| minecraft:squid_flee_particle          |
| minecraft:squid_ink_bubble             |
| minecraft:squid_move_particle          |
| minecraft:underwater_torch_particle    |

### 永久粒子

以下粒子是永久性的，一旦生成后将不会被移除，直到你退出游戏：

| 永久粒子                    |
| -------------------------------- |
| minecraft:mobflame_emitter       |
| minecraft:nectar_drip_particle   |
| minecraft:phantom_trail_particle |
| minecraft:stunned_emitter        |

## 损坏的粒子

以下粒子存在于游戏中但无法生成，因为它们需要 `/particle` 命令无法提供的上下文，或者本身存在 bug：

| 损坏的粒子                 |
| -------------------------------- |
| minecraft:block_destruct         |
| minecraft:block_slide            |
| minecraft:breaking_item_icon     |
| minecraft:breaking_item_terrain  |
| minecraft:cauldron_spell_emitter |
| minecraft:ink_emitter            |
| minecraft:portal_east_west       |
| minecraft:portal_north_south     |
| minecraft:vibration_signal       |
| minecraft:colored_flame_particle |

---

[原始来源](https://www.reddit.com/r/MinecraftCommands/comments/cbd56p/i_need_a_list_of_bedrock_particles/etg8rt7/)

## 组件粒子

以下是可用于某些组件的原版粒子预定义短名称列表。**这些粒子已被证明基本都可以正常工作。这可能不是完整列表。**

| 短名称               | 备注                                                        |
| --------------------- | ---------------------------------------------------------- |
| mobspellambient       | 颜色由组件中存在的任何药水 ID 决定                          |
| villagerangry         |                                                            |
| bubble                | 仅在水中显示                                                |
| evaporation           |                                                            |
| crit                  |                                                            |
| dragonbreath          | 似乎仅在投射物的 AoE 组件中有效                            |
| driplava              |                                                            |
| dripwater             |                                                            |
| reddust               |                                                            |
| enchantingtable       |                                                            |
| endrod                |                                                            |
| mobspell              | 颜色由组件中存在的任何药水 ID 决定                          |
| largeexplode          |                                                            |
| hugeexplosion         |                                                            |
| fallingdust           | 颜色由组件中存在的任何药水 ID 决定                          |
| waterwake             |                                                            |
| flame                 |                                                            |
| villagerhappy         |                                                            |
| heart                 |                                                            |
| mobspellinstantaneous | 颜色由组件中存在的任何药水 ID 决定                          |
| iconcrack             |                                                            |
| slime                 |                                                            |
| snowballpoof          |                                                            |
| largesmoke            |                                                            |
| lava                  |                                                            |
| mobflame              |                                                            |
| townaura              |                                                            |
| note                  |                                                            |
| explode               |                                                            |
| portal                |                                                            |
| rainsplash            |                                                            |
| smoke                 |                                                            |
| watersplash           |                                                            |
| ink                   |                                                            |
| terrain               | 从 atlas.terrain 拉取纹理                                   |
| totem                 |                                                            |
| witchspell            |                                                            |
| soul                  |                                                            |
| spit                  |                                                            |
| sneeze                |                                                            |
