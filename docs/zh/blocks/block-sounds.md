---
title: 方块声音
description: 了解如何修改方块在放置等操作后播放的声音。
category: 文档
license: true
mentions:
    - MedicalJewel105
    - TheItsNameless
    - QuazChick
---

## 应用声音

`RP/blocks.json` 中的 `sound` 参数用于确定一般方块声音，如挖掘声音、踩上声音、破坏声音和放置声音。

你可以使用此参数为你的方块应用一组声音：

<CodeHeader>RP/blocks.json</CodeHeader>

```json
{
    "format_version": "1.21.40",
    "wiki:chestnut_log": {
        "sound": "wood" // 在这里定义声音
    }
}
```

## 添加自定义声音

让你的自定义方块拥有一组独特的声音可以帮助你的方块产生独特感。

首先，让我们为自定义方块声音选择一个名称。
我们**强烈**建议为这个标识符添加命名空间，以避免与其他附加包不兼容。

例如，假设我们正在创建一个自定义栗木套件；我们将自定义方块声音命名为 `wiki:chestnut_wood`。
这是应在 `RP/blocks.json` 中使用的 `sound` 值。

<CodeHeader>RP/blocks.json</CodeHeader>

```json
{
    "format_version": "1.21.40",
    "wiki:chestnut_log": {
        "sound": "wiki:chestnut_wood"
    }
}
```

### 基础方块声音

-   `break` 在方块被破坏时触发。
-   `hit` 在方块被击中时触发，如玩家挖掘时。
-   `place` 在玩家放置方块时触发。

<CodeHeader>RP/sounds.json</CodeHeader>

```json
{
    "block_sounds": {
        "wiki:chestnut_wood": {
            "pitch": 1,
            "volume": 1,
            "events": {
                "break": "block.chestnut_wood.break", // 来自"RP/sounds/sound_definitions.json"的音效简称
                "hit": "block.chestnut_wood.hit",
                "place": "block.chestnut_wood.place"
            }
        }
    }
}
```

### 交互式方块声音

以下声音事件可以在 `RP/sounds.json` 的 `interactive_sounds` 部分定义。

-   `fall` 当实体从超过3个方块的高度落到方块上时触发。
-   `jump` 当玩家从方块上跳下时触发。
-   `land` 当实体从最多3个方块的高度落到方块上时触发。
-   `step` 当实体在方块顶部移动时触发。

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

## Vanilla 声音列表

以下是 `sound` 参数的有效值：

<!-- page_dumper_start -->

| _最后更新于 1.21.60_ |
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
| packed_mud                  |
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