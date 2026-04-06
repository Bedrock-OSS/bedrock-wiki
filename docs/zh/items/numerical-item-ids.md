---
title: 数值物品ID
category: 文档
description: 数值物品ID。
---

::: tip
本页是[此页面](https://learn.microsoft.com/en-us/minecraft/creator/reference/content/addonsreference/examples/addonitems)的更准确版本，截至版本1.21.100。
:::

## 概述

物品ID（不要与类型ID混淆）是一个较旧的系统，现在主要用于使用[JSON UI](/json-ui/json-ui-documentation#item-id-aux-item-id-aux)渲染物品。所有物品和方块（包括自定义的！）都有自己的唯一ID。

## ID格式

-   原版物品和方块的ID范围为`-1038`到`828`。
-   所有自定义方块具有_越来越负_的ID，从ID`-1039`开始。这些不会以任何方式干扰原版ID。请注意，自定义方块目前不会使用其ID渲染。不知道这是bug还是不是。
-   所有旧自定义物品（1.10格式）具有_越来越正_的ID，从ID`829`开始。这些不会以任何方式干扰原版ID。
-   所有新自定义物品（1.16.100、1.20.80+格式）具有_越来越正_的ID，从ID`256`开始。这些**将移动**高于256的原版ID。例如，如果你有一个这样的自定义物品，`'minecraft:golden_apple'`（ID为`280`）将被移动到ID`281`。

## 原版ID列表

请注意，对于此列表，所有物品和方块都假定使用`minecraft:`命名空间。

由于此列表非常长，下面仅显示前1000行作为示例。完整列表请参考英文版本。

| Name                                   |  ID   |
| -------------------------------------- | :---: |
| waxed_oxidized_copper_chest            | -1038 |
| waxed_weathered_copper_chest           | -1037 |
| waxed_exposed_copper_chest             | -1036 |
| waxed_copper_chest                     | -1035 |
| oxidized_copper_chest                  | -1034 |
| weathered_copper_chest                 | -1033 |
| exposed_copper_chest                   | -1032 |
| copper_chest                           | -1031 |
| cactus_flower                          | -1030 |
| tall_dry_grass                         | -1029 |
| short_dry_grass                        | -1028 |
| dried_ghast                            | -1027 |
| leaf_litter                            | -1026 |
| firefly_bush                           | -1025 |
| wildflowers                            | -1024 |
| bush                                   | -1023 |
| resin_clump                            | -1022 |
| resin_block                            | -1021 |
| chiseled_resin_bricks                  | -1020 |
| closed_eyeblossom                      | -1019 |
| open_eyeblossom                        | -1018 |
| resin_brick_wall                       | -1017 |
| resin_brick_stairs                     | -1016 |
| resin_brick_slab                       | -1014 |
| resin_bricks                           | -1013 |
| creaking_heart                         | -1012 |
| pale_hanging_moss                      | -1011 |
| pale_moss_carpet                       | -1010 |
| pale_moss_block                        | -1009 |
| mushroom_stem                          | -1008 |
| pale_oak_leaves                        | -1007 |
| pale_oak_sapling                       | -1006 |
| pale_oak_wood                          | -1005 |
| stripped_pale_oak_wood                 | -1004 |
| pale_oak_trapdoor                      | -1002 |
| pale_oak_stairs                        | -1000 |
| pale_oak_slab                          | -998  |
| pale_oak_pressure_plate                | -997  |
| pale_oak_planks                        | -996  |
| pale_oak_log                           | -995  |
| stripped_pale_oak_log                  | -994  |
| pale_oak_hanging_sign                  | -993  |
| pale_oak_fence_gate                    | -992  |
| pale_oak_fence                         | -991  |
| pale_oak_door                          | -990  |
| pale_oak_button                        | -989  |
| lab_table                              | -988  |
| element_constructor                    | -987  |
| material_reducer                       | -986  |
| underwater_tnt                         | -985  |
| wet_sponge                             | -984  |
| red_nether_brick_wall                  | -983  |
| red_sandstone_wall                     | -982  |
| prismarine_wall                        | -981  |
| end_stone_brick_wall                   | -980  |
| nether_brick_wall                      | -979  |
| mossy_stone_brick_wall                 | -978  |
| stone_brick_wall                       | -977  |
| brick_wall                             | -976  |
| sandstone_wall                         | -975  |
| andesite_wall                          | -974  |
| diorite_wall                           | -973  |
| granite_wall                           | -972  |
| mossy_cobblestone_wall                 | -971  |
| piglin_head                            | -970  |
| dragon_head                            | -969  |
| creeper_head                           | -968  |
| player_head                            | -967  |
| zombie_head                            | -966  |
| wither_skeleton_skull                  | -965  |
| colored_torch_purple                   | -964  |
| colored_torch_green                    | -963  |
| coarse_dirt                            | -962  |
| deprecated_anvil                       | -961  |
| damaged_anvil                          | -960  |
| chipped_anvil                          | -959  |
| smooth_red_sandstone                   | -958  |
| cut_red_sandstone                      | -957  |
| chiseled_red_sandstone                 | -956  |
| smooth_quartz                          | -955  |
| quartz_pillar                          | -954  |
| chiseled_quartz_block                  | -953  |
| deprecated_purpur_block_2              | -952  |
| purpur_pillar                          | -951  |
| deprecated_purpur_block_1              | -950  |
| red_sand                               | -949  |
| prismarine_bricks                      | -948  |
| dark_prismarine                        | -947  |
| smooth_sandstone                       | -946  |
| cut_sandstone                          | -945  |
| chiseled_sandstone                     | -944  |
| light_block_15                         | -943  |
| light_block_14                         | -942  |
| light_block_13                         | -941  |
| light_block_12                         | -940  |
| light_block_11                         | -939  |
| light_block_10                         | -938  |
| light_block_9                          | -937  |
| light_block_8                          | -936  |
| light_block_7                          | -935  |
| light_block_6                          | -934  |
| light_block_5                          | -933  |
| light_block_4                          | -932  |
| light_block_3                          | -931  |
| light_block_2                          | -930  |
| light_block_1                          | -929  |
| cut_red_sandstone_double_slab          | -928  |
| cut_sandstone_double_slab              | -927  |
| normal_stone_double_slab               | -926  |
| smooth_quartz_double_slab              | -925  |
| polished_granite_double_slab           | -924  |
| granite_double_slab                    | -923  |
| polished_diorite_double_slab           | -922  |
| diorite_double_slab                    | -921  |
| andesite_double_slab                   | -920  |
| polished_andesite_double_slab          | -919  |
| smooth_red_sandstone_double_slab       | -918  |
| red_nether_brick_double_slab           | -917  |
| smooth_sandstone_double_slab           | -916  |
| mossy_cobblestone_double_slab          | -915  |
| prismarine_brick_double_slab           | -914  |
| dark_prismarine_double_slab            | -913  |
| prismarine_double_slab                 | -912  |
| purpur_double_slab                     | -911  |
| dead_horn_coral_wall_fan               | -910  |
| dead_fire_coral_wall_fan               | -909  |
| dead_bubble_coral_wall_fan             | -908  |
| fire_coral_wall_fan                    | -907  |
| dead_brain_coral_wall_fan              | -906  |
| dead_tube_coral_wall_fan               | -905  |
| brain_coral_wall_fan                   | -904  |
| petrified_oak_double_slab              | -903  |
| petrified_oak_slab                     | -902  |
| cut_red_sandstone_slab                 | -901  |
| cut_sandstone_slab                     | -900  |
| normal_stone_slab                      | -899  |
| smooth_quartz_slab                     | -898  |
| polished_granite_slab                  | -897  |
| granite_slab                           | -896  |
| polished_diorite_slab                  | -895  |
| diorite_slab                           | -894  |
| andesite_slab                          | -893  |
| polished_andesite_slab                  | -892  |
| smooth_red_sandstone_slab              | -891  |
| red_nether_brick_slab                  | -890  |
| smooth_sandstone_slab                  | -889  |
| mossy_cobblestone_slab                 | -888  |
| prismarine_brick_slab                   | -887  |
| dark_prismarine_slab                    | -886  |
| prismarine_slab                        | -885  |
| purpur_slab                            | -884  |
| nether_brick_double_slab               | -883  |
| quartz_double_slab                     | -882  |
| stone_brick_double_slab                | -881  |
| brick_double_slab                      | -880  |
| cobblestone_double_slab                | -879  |
| sandstone_double_slab                  | -878  |
| nether_brick_slab                      | -877  |
| quartz_slab                            | -876  |
| stone_brick_slab                        | -875  |
| brick_slab                             | -874  |
| cobblestone_slab                        | -873  |
| sandstone_slab                         | -872  |
| chiseled_stone_bricks                  | -870  |
| cracked_stone_bricks                   | -869  |
| mossy_stone_bricks                     | -868  |
| peony                                  | -867  |
| rose_bush                              | -866  |
| large_fern                             | -865  |
| tall_grass                             | -864  |
| lilac                                  | -863  |
| infested_chiseled_stone_bricks         | -862  |
| infested_cracked_stone_bricks          | -861  |
| infested_mossy_stone_bricks            | -860  |
| infested_stone_bricks                  | -859  |
| infested_cobblestone                   | -858  |
| dead_horn_coral_block                  | -857  |
| dead_fire_coral_block                  | -856  |
| dead_bubble_coral_block                 | -855  |
| dead_brain_coral_block                 | -854  |
| dead_tube_coral_block                  | -853  |
| horn_coral_block                       | -852  |
| fire_coral_block                       | -851  |
| bubble_coral_block                     | -850  |
| brain_coral_block                      | -849  |
| fern                                   | -848  |
| dead_horn_coral_fan                    | -847  |
| dead_fire_coral_fan                    | -846  |
| dead_bubble_coral_fan                  | -845  |
| dead_brain_coral_fan                   | -844  |
| horn_coral_fan                         | -843  |
| fire_coral_fan                         | -842  |
| bubble_coral_fan                       | -841  |
| brain_coral_fan                        | -840  |
| lily_of_the_valley                     | -839  |
| cornflower                             | -838  |
| oxeye_daisy                            | -837  |
| pink_tulip                             | -836  |
| white_tulip                            | -835  |
| orange_tulip                           | -834  |
| red_tulip                              | -833  |
| azure_bluet                            | -832  |
| allium                                 | -831  |
| blue_orchid                            | -830  |
| dark_oak_sapling                       | -829  |
| acacia_sapling                         | -828  |
| jungle_sapling                         | -827  |
| birch_sapling                          | -826  |
| spruce_sapling                         | -825  |
| stripped_dark_oak_wood                 | -824  |
| stripped_acacia_wood                   | -823  |
| stripped_jungle_wood                   | -822  |
| stripped_birch_wood                    | -821  |
| stripped_spruce_wood                    | -820  |
| stripped_oak_wood                      | -819  |
| dark_oak_wood                          | -818  |
| acacia_wood                            | -817  |
| jungle_wood                            | -816  |
| birch_wood                             | -815  |
| spruce_wood                            | -814  |
| dark_oak_double_slab                   | -813  |
| acacia_double_slab                     | -812  |
| jungle_double_slab                     | -811  |
| birch_double_slab                      | -810  |
| spruce_double_slab                     | -809  |
| dark_oak_slab                          | -808  |
| acacia_slab                            | -807  |
| jungle_slab                            | -806  |
| birch_slab                             | -805  |
| spruce_slab                            | -804  |
| dark_oak_leaves                        | -803  |
| jungle_leaves                          | -802  |
| birch_leaves                           | -801  |
| spruce_leaves                          | -800  |

（完整列表请参考英文版本，因为此表格有1800多行）
