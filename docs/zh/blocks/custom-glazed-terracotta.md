---
title: 自定义彩色陶瓦
description: 了解如何创建具有与 vanilla 彩色陶瓦相同旋转的自定义方块。
category: 原版重制
tags:
    - beginner
    - easy
license: true
mentions:
    - Kaioga5
    - QuazChick
---

::: tip 格式版本 1.26.10
本教程假设你对方块有基本了解。
在开始之前请查看[方块指南](/blocks/blocks-intro)。
:::

彩色陶瓦有自己的旋转机制，使玩家在从上方和下方放置方块时可以为墙壁、地板和天花板制作美观的图案。
本指南将教你如何创建与彩色陶瓦相似的自己的方块。

## 方块 JSON

<CodeHeader>BP/blocks/custom_glazed_terracotta.json</CodeHeader>

```json
{
    "format_version": "1.26.10",
    "minecraft:block": {
        "description": {
            "identifier": "wiki:custom_glazed_terracotta",
            "menu_category": {
                "category": "construction",
                "group": "minecraft:itemGroup.name.glazedTerracotta"
            },
            "traits": {
                "minecraft:placement_direction": {
                    "enabled_states": ["minecraft:cardinal_direction"],
                    "y_rotation_offset": 180
                }
            }
        },
        "components": {
            "minecraft:light_dampening": 15,
            "minecraft:material_instances": {
                "*": {
                    "texture": "wiki:custom_glazed_terracotta"
                }
            },
            "minecraft:geometry": {
                "identifier": "geometry.glazed_terracotta",
                "bone_visibility": {
                    "bottom_x": "q.block_state('minecraft:cardinal_direction') == 'west' || q.block_state('minecraft:cardinal_direction') == 'east'",
                    "bottom_z": "q.block_state('minecraft:cardinal_direction') == 'north' || q.block_state('minecraft:cardinal_direction') == 'south'"
                }
            },
            "minecraft:redstone_conductivity": {
                "redstone_conductor": true
            }
        },
        "permutations": [
            {
                "condition": "q.block_state('minecraft:cardinal_direction') == 'north'",
                "components": {
                    "minecraft:transformation": { "rotation": [0, 0, 0] }
                }
            },
            {
                "condition": "q.block_state('minecraft:cardinal_direction') == 'west'",
                "components": {
                    "minecraft:transformation": { "rotation": [0, 90, 0] }
                }
            },
            {
                "condition": "q.block_state('minecraft:cardinal_direction') == 'south'",
                "components": {
                    "minecraft:transformation": { "rotation": [0, 180, 0] }
                }
            },
            {
                "condition": "q.block_state('minecraft:cardinal_direction') == 'east'",
                "components": {
                    "minecraft:transformation": { "rotation": [0, -90, 0] }
                }
            }
        ]
    }
}
```

## 方块模型

Vanilla 彩色陶瓦以不同方式旋转其底面，这正是方块的神奇之处。
这需要两个具有不同旋转的单独底面。

<Spoiler title="几何 JSON">
  
<CodeHeader>RP/models/blocks/glazed_terracotta.geo.json</CodeHeader>

```json
{
    "format_version": "1.26.10",
    "minecraft:geometry": [
        {
            "description": {
                "identifier": "geometry.glazed_terracotta",
                "texture_width": 16,
                "texture_height": 16
            },
            "bones": [
                {
                    "name": "glazed_terracotta",
                    "pivot": [0, 0, 0],
                    "cubes": [
                        {
                            "origin": [-8, 0, -8],
                            "size": [16, 16, 16],
                            "uv": {
                                "north": {
                                    "uv": [0, 0],
                                    "uv_size": [16, 16],
                                    "uv_rotation": 270
                                },
                                "east": {
                                    "uv": [0, 0],
                                    "uv_size": [16, 16]
                                },
                                "south": {
                                    "uv": [0, 0],
                                    "uv_size": [16, 16],
                                    "uv_rotation": 90
                                },
                                "west": {
                                    "uv": [0, 0],
                                    "uv_size": [16, 16],
                                    "uv_rotation": 180
                                },
                                "up": {
                                    "uv": [0, 0],
                                    "uv_size": [16, 16]
                                }
                            }
                        }
                    ]
                },
                {
                    "name": "bottom_x",
                    "parent": "glazed_terracotta",
                    "pivot": [0, 0, 0],
                    "cubes": [
                        {
                            "origin": [-8, 0, -8],
                            "size": [16, 0, 16],
                            "uv": {
                                "down": {
                                    "uv": [0, 0],
                                    "uv_size": [16, 16],
                                    "uv_rotation": 180
                                }
                            }
                        }
                    ]
                },
                {
                    "name": "bottom_z",
                    "parent": "glazed_terracotta",
                    "pivot": [0, 0, 0],
                    "cubes": [
                        {
                            "origin": [-8, 0, -8],
                            "size": [16, 0, 16],
                            "uv": {
                                "down": {
                                    "uv": [0, 0],
                                    "uv_size": [16, 16]
                                }
                            }
                        }
                    ]
                }
            ]
        }
    ]
}
```

</Spoiler>