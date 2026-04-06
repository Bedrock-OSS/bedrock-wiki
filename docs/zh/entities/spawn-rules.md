---
title: 生成规则
category: 通用
mentions:
    - SirLich
    - solvedDev
    - MedicalJewel105
    - aexer0e
    - Ciosciaa
    - fraysdev
    - Lufurrius
    - TheItsNameless
    - SmokeyStack
description: 生成规则定义实体如何生成到世界中。
---

生成规则定义实体如何生成到世界中。当您希望您的自定义实体像 vanilla 实体一样自然生成时，您应该使用生成规则。不同的组件允许您定义实体何时、何地以及如何生成。

一般来说，您可以使用与 vanilla 实体非常相似的方式生成您的自定义实体。例如，像牛一样成群生成，像 vanilla 僵尸一样只在晚上生成，或者像鱼一样只在水下生成。

## 示例生成规则

这是一个示例生成规则，并附有字段说明。

<CodeHeader>BP/spawn_rules/zombie.json</CodeHeader>

```json
{
    "format_version": "1.8.0",
    "minecraft:spawn_rules": {
        "description": {
            "identifier": "minecraft:zombie",
            "population_control": "monster"
        },
        "conditions": [
            {
                "minecraft:spawns_on_surface": {},
                "minecraft:spawns_underground": {},
                "minecraft:brightness_filter": {
                    "min": 0,
                    "max": 7,
                    "adjust_for_weather": true
                },
                "minecraft:difficulty_filter": {
                    "min": "easy",
                    "max": "hard"
                },
                "minecraft:weight": {
                    "default": 100
                },
                "minecraft:herd": {
                    "min_size": 2,
                    "max_size": 4
                },
                "minecraft:permute_type": [
                    {
                        "weight": 95
                    },
                    {
                        "weight": 5,
                        "entity_type": "minecraft:zombie_villager"
                    }
                ],
                "minecraft:biome_filter": {
                    "test": "has_biome_tag",
                    "operator": "==",
                    "value": "monster"
                }
            }
        ]
    }
}
```

-   "`description`">"`identifier`": 要生成的实体
-   "`population_control`": 控制生成和消失的数量。可以设置为 "`animal`"、"`underwater_animal`"、"`monster`" 和 "`ambient`"。
-   "`conditions"` 是必须满足的条件列表，以便生成尝试成功。
-   "`minecraft:spawns_on_surface`"、"`minecraft:spawns_underground`" 和 "`minecraft:spawns_underwater`" 控制实体生成的位置上限。
-   "`minecraft_brightness_filter`" 可以设置为 0 到 15，控制实体可以在什么亮度级别生成。- "`adjust_for_weather`" 定义在雨或雷暴天气时亮度级别是否被计为较低。
-   "`minecraft:difficulty_filter`" 设置启用此实体生成的游戏难度范围。
-   "`minecraft:herd"` 设置在同一生成规则下一起生成的实体数量。
-   "`minecraft:permute_type`" 与 "`weight`"s 和 "`entity_type`"s 设置生成的实体突变为不同实体的几率。
-   "`minecraft:biome_filter`" 测试某些生物群系标签。在文档中查找过滤器语法和生物群系标签列表，或在 vanilla 示例包中搜索示例。

## 所有已知组件

这是所有已知组件的列表。我们将在更好地理解它们的用法时添加文档。

```
minecraft:weight
minecraft:density_limit
minecraft:spawns_on_block_filter
minecraft:spawns_on_block_prevented_filter
minecraft:spawns_above_block_filter
minecraft:herd
minecraft:permute_type
minecraft:brightness_filter
minecraft:height_filter
minecraft:spawns_on_surface
minecraft:spawns_underground
minecraft:spawns_underwater
minecraft:disallow_spawns_in_bubble
minecraft:spawns_lava
minecraft:biome_filter
minecraft:difficulty_filter
minecraft:distance_filter
minecraft:is_experimental
minecraft:world_age_filter
minecraft:delay_filter
minecraft:mob_event_filter
minecraft:is_persistent
minecraft:player_in_village_filter
```

## 文档

### minecraft:herd

<CodeHeader></CodeHeader>

```json
"minecraft:herd": {
          "min_size": 1,
          "max_size": 2,
          "event":"minecraft:entity_born",
          "event_skip_count": 1
        },
```

-   "`minecraft:herd`" 也可以这样使用，使第二个实体在[此场景]中生成为["minecraft:entity_born"]（作为幼年体）。可用于任何事件。
    例如，`"event_skip_count": 2` 意味着前两个实体不会使用此事件生成，但所有后续实体都会。

### minecraft:spawns_above_block_filter

<CodeHeader></CodeHeader>

```json
        "minecraft:spawns_above_block_filter": {
          "blocks": "minecraft:stone",
          "distance": 10
        }
```

-   "`minecraft:spawns_above_block_filter`" 将垂直检测设置距离内的方块，如果条件满足，实体将成功生成。

### minecraft:spawns_on_block_prevented_filter

<CodeHeader></CodeHeader>

```json
        "minecraft:spawns_on_block_prevented_filter": [
          "minecraft:nether_wart_block",
          "minecraft:shroomlight"
        ]
```

-   最后，`"minecraft:spawns_on_block_prevented_filter"` 与上述相反。这是实体永远不能生成于上的方块标识符数组。
