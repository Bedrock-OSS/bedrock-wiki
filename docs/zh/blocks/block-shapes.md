---
title: 方块形状
description: 方块形状本质上是内置于 vanilla 中的方块几何，意味着它们存在但没有可访问的文件。
category: 文档
tags:
    - deprecated
mentions:
    - SirLich
    - yanasakana
    - MedicalJewel105
    - aexer0e
    - Lufurrius
    - Fabrimat
    - TheItsNameless
    - QuazChick
---

方块形状本质上是内置于 vanilla 中的方块几何，意味着它们存在但没有可访问的文件。几何本身无法覆盖，也无法创建新的，但可以通过资源包将其分配给**大多数** vanilla 方块。

:::danger 已弃用
方块形状不再被官方支持，不能与自定义方块一起使用，但可以与 vanilla 方块一起使用。

支持在 **1.0.19** 后被放弃，意味着" Trails & Tales"及之后引入的方块没有可用的方块形状。
:::

## 应用

它们在 `blocks.json` 中分配，在方块对象的 `"blockshape"` 子项下作为字符串。

<CodeHeader>RP/blocks.json</CodeHeader>

```json
"minecraft:dirt": {
    "blockshape": "block",
    "sound": "gravel",
    "textures": "flattened_dirt"
}
```

## 已知方块形状列表

| ID  | 方块形状                 |
| --- | ------------------------- |
| -1  | invisible                 |
| 0   | block                     |
| 1   | cross_texture             |
| 2   | torch                     |
| 3   | fire                      |
| 4   | water                     |
| 5   | red_dust                  |
| 6   | rows                      |
| 7   | door                      |
| 8   | ladder                    |
| 9   | rail                      |
| 10  | stairs                    |
| 11  | fence                     |
| 12  | lever                     |
| 13  | cactus                    |
| 14  | bed                       |
| 15  | diode                     |
| 18  | iron_fence                |
| 19  | stem                      |
| 20  | vine                      |
| 21  | fence_gate                |
| 22  | chest                     |
| 23  | lilypad                   |
| 25  | brewing_stand             |
| 26  | portal_frame              |
| 28  | cocoa                     |
| 31  | tree                      |
| 32  | cobblestone_wall          |
| 40  | double_plant              |
| 42  | flower_pot                |
| 43  | anvil                     |
| 44  | dragon_egg                |
| 48  | structure_void            |
| 67  | block_half                |
| 68  | top_snow                  |
| 69  | tripwire                  |
| 70  | tripwire_hook             |
| 71  | cauldron                  |
| 72  | repeater                  |
| 73  | comparator                |
| 74  | hopper                    |
| 75  | slime_block               |
| 76  | piston                    |
| 77  | beacon                    |
| 78  | chorus_plant              |
| 79  | chorus_flower             |
| 80  | end_portal                |
| 81  | end_rod                   |
| 83  | skull                     |
| 84  | facing_block              |
| 85  | command_block             |
| 86  | terracotta                |
| 87  | double_side_fence         |
| 88  | frame                     |
| 89  | shulker_box               |
| 90  | doublesided_cross_texture |
| 91  | doublesided_double_plant  |
| 92  | doublesided_rows          |
| 93  | element_block             |
| 94  | chemistry_table           |
| 96  | coral_fan                 |
| 97  | seagrass                  |
| 98  | kelp                      |
| 99  | trapdoor                  |
| 100 | sea_pickle                |
| 101 | conduit                   |
| 102 | turtle_egg                |
| 105 | bubble_column             |
| 106 | barrier                   |
| 107 | sign                      |
| 108 | bamboo                    |
| 109 | bamboo_sapling            |
| 110 | scaffolding               |
| 111 | grindstone                |
| 112 | bell                      |
| 113 | lantern                   |
| 114 | campfire                  |
| 115 | lectern                   |
| 116 | sweet_berry_bush          |
| 117 | cartography_table         |
| 119 | stonecutter_block         |
| 123 | chain                     |
| 126 | sculk_sensor              |
| 133 | azalea                    |
| 133 | flowering_azalea          |
| 134 | glow_frame                |
| 135 | glow_lichen               |
| 136 | redstone_wire             |

[ 原始鸣谢 ](https://gist.github.com/toka7290/3bef704d2f57c775bb9ac84443a6df1c)