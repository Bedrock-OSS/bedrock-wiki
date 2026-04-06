---
title: 玩家几何模型
tags:
    - beginner
category: 教程
mentions:
    - SirLich
    - MedicalJewel105
description: 玩家的客户端实体文件。
---

本教程将向你展示如何创建玩家NPC并将它们添加到你的世界中。这些玩家NPC将采用原版玩家皮肤，并包含行走动画、攻击动画等。

本教程是图形化教程。不涉及机制部分。

:::warning
这将是一份非常重的JSON文档。JSON是为复制粘贴而设计的。
:::

## 几何模型文件

此JSON包含Steve和Alex两个版本的几何模型：

`geometry.npc.steve`

`geometry.npc.alex`

<Spoiler title="几何模型">

<CodeHeader></CodeHeader>

```json
{
    "format_version": "1.12.0",
    "minecraft:geometry": [
        {
            "description": {
                "identifier": "geometry.cape",
                "texture_width": 64,
                "texture_height": 32
            },
            "bones": [
                {
                    "name": "body",
                    "pivot": [0.0, 24.0, 0.0],
                    "parent": "waist"
                },
                {
                    "name": "waist",
                    "pivot": [0.0, 12.0, 0.0]
                },
                {
                    "name": "cape",
                    "parent": "body",
                    "pivot": [0.0, 24.0, 3.0],
                    "rotation": [0.0, 180.0, 0.0],
                    "cubes": [
                        {
                            "origin": [-5.0, 8.0, 3.0],
                            "size": [10, 16, 1],
                            "uv": [0, 0]
                        }
                    ]
                }
            ]
        },

        {
            "description": {
                "identifier": "geometry.npc.steve",
                "visible_bounds_width": 1,
                "visible_bounds_height": 2,
                "visible_bounds_offset": [0, 1, 0],
                "texture_width": 64,
                "texture_height": 64
            },
            "bones": [
                {
                    "name": "root",
                    "pivot": [0.0, 0.0, 0.0]
                },
                {
                    "name": "body",
                    "parent": "waist",
                    "pivot": [0.0, 24.0, 0.0],
                    "cubes": [
                        {
                            "origin": [-4.0, 12.0, -2.0],
                            "size": [8, 12, 4],
                            "uv": [16, 16]
                        }
                    ]
                },

                {
                    "name": "waist",
                    "parent": "root",
                    "pivot": [0.0, 12.0, 0.0]
                },

                {
                    "name": "head",
                    "parent": "body",
                    "pivot": [0.0, 24.0, 0.0],
                    "cubes": [
                        {
                            "origin": [-4.0, 24.0, -4.0],
                            "size": [8, 8, 8],
                            "uv": [0, 0]
                        }
                    ]
                },

                {
                    "name": "cape",
                    "pivot": [0.0, 24, 3.0],
                    "parent": "body"
                },
                {
                    "name": "hat",
                    "parent": "head",
                    "pivot": [0.0, 24.0, 0.0],
                    "cubes": [
                        {
                            "origin": [-4.0, 24.0, -4.0],
                            "size": [8, 8, 8],
                            "uv": [32, 0],
                            "inflate": 0.5
                        }
                    ]
                },
                {
                    "name": "leftArm",
                    "parent": "body",
                    "pivot": [5.0, 22.0, 0.0],
                    "cubes": [
                        {
                            "origin": [4.0, 12.0, -2.0],
                            "size": [4, 12, 4],
                            "uv": [32, 48]
                        }
                    ]
                },
                {
                    "name": "leftSleeve",
                    "parent": "leftArm",
                    "pivot": [5.0, 22.0, 0.0],
                    "cubes": [
                        {
                            "origin": [4.0, 12.0, -2.0],
                            "size": [4, 12, 4],
                            "uv": [48, 48],
                            "inflate": 0.25
                        }
                    ]
                },
                {
                    "name": "leftItem",
                    "pivot": [6.0, 15.0, 1.0],
                    "parent": "leftArm"
                },
                {
                    "name": "rightArm",
                    "parent": "body",
                    "pivot": [-5.0, 22.0, 0.0],
                    "cubes": [
                        {
                            "origin": [-8.0, 12.0, -2.0],
                            "size": [4, 12, 4],
                            "uv": [40, 16]
                        }
                    ]
                },
                {
                    "name": "rightSleeve",
                    "parent": "rightArm",
                    "pivot": [-5.0, 22.0, 0.0],
                    "cubes": [
                        {
                            "origin": [-8.0, 12.0, -2.0],
                            "size": [4, 12, 4],
                            "uv": [40, 32],
                            "inflate": 0.25
                        }
                    ]
                },
                {
                    "name": "rightItem",
                    "pivot": [-6, 15, 1],
                    "locators": {
                        "lead_hold": [-6, 15, 1]
                    },
                    "parent": "rightArm"
                },

                {
                    "name": "leftLeg",
                    "parent": "root",
                    "pivot": [1.9, 12.0, 0.0],
                    "cubes": [
                        {
                            "origin": [-0.1, 0.0, -2.0],
                            "size": [4, 12, 4],
                            "uv": [16, 48]
                        }
                    ]
                },
                {
                    "name": "leftPants",
                    "parent": "leftLeg",
                    "pivot": [1.9, 12.0, 0.0],
                    "cubes": [
                        {
                            "origin": [-0.1, 0.0, -2.0],
                            "size": [4, 12, 4],
                            "uv": [0, 48],
                            "inflate": 0.25
                        }
                    ]
                },

                {
                    "name": "rightLeg",
                    "parent": "root",
                    "pivot": [-1.9, 12.0, 0.0],
                    "cubes": [
                        {
                            "origin": [-3.9, 0.0, -2.0],
                            "size": [4, 12, 4],
                            "uv": [0, 16]
                        }
                    ]
                },
                {
                    "name": "rightPants",
                    "parent": "rightLeg",
                    "pivot": [-1.9, 12.0, 0.0],
                    "cubes": [
                        {
                            "origin": [-3.9, 0.0, -2.0],
                            "size": [4, 12, 4],
                            "uv": [0, 32],
                            "inflate": 0.25
                        }
                    ]
                },

                {
                    "name": "jacket",
                    "parent": "body",
                    "pivot": [0.0, 24.0, 0.0],
                    "cubes": [
                        {
                            "origin": [-4.0, 12.0, -2.0],
                            "size": [8, 12, 4],
                            "uv": [16, 32],
                            "inflate": 0.25
                        }
                    ]
                }
            ]
        },

        {
            "description": {
                "identifier": "geometry.npc.alex",
                "visible_bounds_width": 1,
                "visible_bounds_height": 2,
                "visible_bounds_offset": [0, 1, 0],
                "texture_width": 64,
                "texture_height": 64
            },
            "bones": [
                {
                    "name": "root",
                    "pivot": [0.0, 0.0, 0.0]
                },
                {
                    "name": "waist",
                    "parent": "root",
                    "pivot": [0.0, 12.0, 0.0]
                },
                {
                    "name": "body",
                    "parent": "waist",
                    "pivot": [0.0, 24.0, 0.0],
                    "cubes": [
                        {
                            "origin": [-4.0, 12.0, -2.0],
                            "size": [8, 12, 4],
                            "uv": [16, 16]
                        }
                    ]
                },
                {
                    "name": "head",
                    "parent": "body",
                    "pivot": [0.0, 24.0, 0.0],
                    "cubes": [
                        {
                            "origin": [-4.0, 24.0, -4.0],
                            "size": [8, 8, 8],
                            "uv": [0, 0]
                        }
                    ]
                },
                {
                    "name": "hat",
                    "parent": "head",
                    "pivot": [0.0, 24.0, 0.0],
                    "cubes": [
                        {
                            "origin": [-4.0, 24.0, -4.0],
                            "size": [8, 8, 8],
                            "uv": [32, 0],
                            "inflate": 0.5
                        }
                    ]
                },
                {
                    "name": "rightLeg",
                    "parent": "root",
                    "pivot": [-1.9, 12.0, 0.0],
                    "cubes": [
                        {
                            "origin": [-3.9, 0.0, -2.0],
                            "size": [4, 12, 4],
                            "uv": [0, 16]
                        }
                    ]
                },
                {
                    "name": "rightPants",
                    "parent": "rightLeg",
                    "pivot": [-1.9, 12.0, 0.0],
                    "cubes": [
                        {
                            "origin": [-3.9, 0.0, -2.0],
                            "size": [4, 12, 4],
                            "uv": [0, 32],
                            "inflate": 0.25
                        }
                    ]
                },

                {
                    "name": "leftLeg",
                    "parent": "root",
                    "pivot": [1.9, 12.0, 0.0],
                    "cubes": [
                        {
                            "origin": [-0.1, 0.0, -2.0],
                            "size": [4, 12, 4],
                            "uv": [0, 16]
                        }
                    ],
                    "mirror": true
                },
                {
                    "name": "leftPants",
                    "parent": "leftLeg",
                    "pivot": [1.9, 12.0, 0.0],
                    "cubes": [
                        {
                            "origin": [-0.1, 0.0, -2.0],
                            "size": [4, 12, 4],
                            "uv": [0, 48],
                            "inflate": 0.25
                        }
                    ]
                },

                {
                    "name": "leftArm",
                    "parent": "body",
                    "pivot": [5.0, 21.5, 0.0],
                    "cubes": [
                        {
                            "origin": [4.0, 11.5, -2.0],
                            "size": [3, 12, 4],
                            "uv": [32, 48]
                        }
                    ]
                },
                {
                    "name": "leftSleeve",
                    "parent": "leftArm",
                    "pivot": [5.0, 21.5, 0.0],
                    "cubes": [
                        {
                            "origin": [4.0, 11.5, -2.0],
                            "size": [3, 12, 4],
                            "uv": [48, 48],
                            "inflate": 0.25
                        }
                    ]
                },
                {
                    "name": "leftItem",
                    "pivot": [6, 14.5, 1],
                    "parent": "leftArm"
                },
                {
                    "name": "rightArm",
                    "parent": "body",
                    "pivot": [-5.0, 21.5, 0.0],
                    "cubes": [
                        {
                            "origin": [-7.0, 11.5, -2.0],
                            "size": [3, 12, 4],
                            "uv": [40, 16]
                        }
                    ]
                },
                {
                    "name": "rightSleeve",
                    "parent": "rightArm",
                    "pivot": [-5.0, 21.5, 0.0],
                    "cubes": [
                        {
                            "origin": [-7.0, 11.5, -2.0],
                            "size": [3, 12, 4],
                            "uv": [40, 32],
                            "inflate": 0.25
                        }
                    ]
                },
                {
                    "name": "rightItem",
                    "pivot": [-6, 14.5, 1],
                    "locators": {
                        "lead_hold": [-6, 14.5, 1]
                    },
                    "parent": "rightArm"
                },

                {
                    "name": "jacket",
                    "parent": "body",
                    "pivot": [0.0, 24.0, 0.0],
                    "cubes": [
                        {
                            "origin": [-4.0, 12.0, -2.0],
                            "size": [8, 12, 4],
                            "uv": [16, 32],
                            "inflate": 0.25
                        }
                    ]
                },

                {
                    "name": "cape",
                    "pivot": [0.0, 24, -3.0],
                    "parent": "body"
                }
            ]
        }
    ]
}
```

</Spoiler>

## 实体文件

如果你想为你的几何模型添加动画，请使用此实体文件。该文件包含无错误的动画，用于：

- 行走
- 看向玩家
- 待机

如果你需要更完整的动画集，考虑复制默认的玩家RP实体文件，并尝试手动处理这些动画。

<Spoiler title="实体文件">

<CodeHeader></CodeHeader>

```json
{
    "format_version": "1.10.0",
    "minecraft:client_entity": {
        "description": {
            "identifier": "wiki:npc",
            "materials": {
                "default": "villager_v2"
            },
            "geometry": {
                "default": "geometry.npc.alex"
            },
            "render_controllers": ["controller.render.single_texture"],
            "textures": {
                "default": "textures/wiki/entity/npc/introduction"
            },
            "scripts": {
                "scale": "0.9375",
                "pre_animation": [
                    "v.tcos0 = (math.cos(q.modified_distance_moved * 38.17) * q.modified_move_speed / v.gliding_speed_value) * 57.3;"
                ],
                "animate": ["move.arms", "move.legs", "look_at_target_default", "bob"]
            },
            "animations": {
                "look_at_target_default": "animation.humanoid.look_at_target.default",
                "move.arms": "animation.player.move.arms",
                "move.legs": "animation.player.move.legs",
                "bob": "animation.player.bob"
            }
        }
    }
}
```

</Spoiler>
