---
title: 自定义活板门
description: Vanilla 活板门的再创作。
category: 原版重制
tags:
    - intermediate
    - scripting
license: true
mentions:
    - Kaioga5
    - QuazChick
    - SmokeyStack
---

::: tip 格式版本 1.26.10
本教程假设你对方块有很好的理解并具备脚本基础知识。
在开始之前请查看[方块指南](/blocks/blocks-intro)。
:::

活板门是多功能方块，作为门、栅栏、装饰品以及活板门效果很好。难怪你想制作自己的加入 Minecraft 收藏！以下是制作方法：

**问题：**

-   自定义活板门无法通过红石供电或通过风充能切换。

## 方块 JSON

这是你需要在基本活板门功能方面需要的方块JSON。
它包括每个置换的旋转，意味着它可以以与 vanilla 活板门相同的方向放置。

<CodeHeader>BP/blocks/custom_trapdoor.json</CodeHeader>

```json
{
    "format_version": "1.26.10",
    "minecraft:block": {
        "description": {
            "identifier": "wiki:custom_trapdoor",
            "menu_category": {
                "category": "construction",
                "group": "minecraft:itemGroup.name.trapdoor"
            },
            "states": {
                "wiki:open": [false, true]
            },
            "traits": {
                "minecraft:placement_direction": {
                    "enabled_states": ["minecraft:cardinal_direction"],
                    "y_rotation_offset": 180
                },
                "minecraft:placement_position": {
                    "enabled_states": ["minecraft:vertical_half"]
                }
            }
        },
        "components": {
            "tag:trapdoors": {},
            "wiki:toggleable": {
                "block_state": "wiki:open",
                "enable_sound": "open.wooden_trapdoor",
                "disable_sound": "close.wooden_trapdoor"
            },
            // 碰撞和选择框
            "tag:one_way_collidable": {}, // 阻止玩家被活板门碰撞推出去，就像 vanilla 一样
            "minecraft:collision_box": {
                "origin": [-8, 0, -8],
                "size": [16, 2.92, 16]
            },
            "minecraft:selection_box": {
                "origin": [-8, 0, -8],
                "size": [16, 2.92, 16]
            },
            // 视觉效果
            "minecraft:destruction_particles": {
                "particle_count": 48
            },
            "minecraft:geometry": {
                "identifier": "geometry.custom_trapdoor",
                "culling": "wiki:culling.custom_trapdoor"
            },
            "minecraft:material_instances": {
                "*": {
                    "texture": "wiki:custom_trapdoor",
                    "render_method": "alpha_test_single_sided"
                }
            },
            // 允许活板门水体化
            "minecraft:liquid_detection": {
                "detection_rules": [
                    {
                        "liquid_type": "water",
                        "can_contain_liquid": true
                    }
                ]
            },
            // 阻止雪在活板门上方积累
            "minecraft:precipitation_interactions": {
                "precipitation_behavior": "obstruct_rain"
            },
            // 阻止活板门关闭时相邻方块连接
            "minecraft:connection_rule": {
                "accepts_connections_from": "none"
            }
        },
        "permutations": [
            // 连接
            {
                "condition": "q.block_state('wiki:open') && q.block_state('minecraft:cardinal_direction') == 'north'",
                "components": {
                    "minecraft:connection_rule": { "enabled_directions": ["south"] }
                }
            },
            {
                "condition": "q.block_state('wiki:open') && q.block_state('minecraft:cardinal_direction') == 'south'",
                "components": {
                    "minecraft:connection_rule": { "enabled_directions": ["north"] }
                }
            },
            {
                "condition": "q.block_state('wiki:open') && q.block_state('minecraft:cardinal_direction') == 'west'",
                "components": {
                    "minecraft:connection_rule": { "enabled_directions": ["east"] }
                }
            },
            {
                "condition": "q.block_state('wiki:open') && q.block_state('minecraft:cardinal_direction') == 'east'",
                "components": {
                    "minecraft:connection_rule": { "enabled_directions": ["west"] }
                }
            },
            // 底部关闭
            {
                "condition": "q.block_state('minecraft:vertical_half') == 'bottom' && !q.block_state('wiki:open') && q.block_state('minecraft:cardinal_direction') == 'north'",
                "components": {
                    "minecraft:transformation": { "rotation": [0, 0, 0] }
                }
            },
            {
                "condition": "q.block_state('minecraft:vertical_half') == 'bottom' && !q.block_state('wiki:open') && q.block_state('minecraft:cardinal_direction') == 'south'",
                "components": {
                    "minecraft:transformation": { "rotation": [0, 180, 0] }
                }
            },
            {
                "condition": "q.block_state('minecraft:vertical_half') == 'bottom' && !q.block_state('wiki:open') && q.block_state('minecraft:cardinal_direction') == 'west'",
                "components": {
                    "minecraft:transformation": { "rotation": [0, 90, 0] }
                }
            },
            {
                "condition": "q.block_state('minecraft:vertical_half') == 'bottom' && !q.block_state('wiki:open') && q.block_state('minecraft:cardinal_direction') == 'east'",
                "components": {
                    "minecraft:transformation": { "rotation": [0, -90, 0] }
                }
            },
            // 底部打开
            {
                "condition": "q.block_state('minecraft:vertical_half') == 'bottom' && q.block_state('wiki:open') && q.block_state('minecraft:cardinal_direction') == 'north'",
                "components": {
                    "minecraft:transformation": { "rotation": [-90, 0, 180] }
                }
            },
            {
                "condition": "q.block_state('minecraft:vertical_half') == 'bottom' && q.block_state('wiki:open') && q.block_state('minecraft:cardinal_direction') == 'south'",
                "components": {
                    "minecraft:transformation": { "rotation": [90, 0, 0] }
                }
            },
            {
                "condition": "q.block_state('minecraft:vertical_half') == 'bottom' && q.block_state('wiki:open') && q.block_state('minecraft:cardinal_direction') == 'west'",
                "components": {
                    "minecraft:transformation": { "rotation": [0, -90, 90] }
                }
            },
            {
                "condition": "q.block_state('minecraft:vertical_half') == 'bottom' && q.block_state('wiki:open') && q.block_state('minecraft:cardinal_direction') == 'east'",
                "components": {
                    "minecraft:transformation": { "rotation": [180, 90, 90] }
                }
            },
            // 顶部关闭
            {
                "condition": "q.block_state('minecraft:vertical_half') == 'top' && !q.block_state('wiki:open') && q.block_state('minecraft:cardinal_direction') == 'north'",
                "components": {
                    "minecraft:transformation": { "rotation": [0, 0, 180] }
                }
            },
            {
                "condition": "q.block_state('minecraft:vertical_half') == 'top' && !q.block_state('wiki:open') && q.block_state('minecraft:cardinal_direction') == 'south'",
                "components": {
                    "minecraft:transformation": { "rotation": [180, 0, 0] }
                }
            },
            {
                "condition": "q.block_state('minecraft:vertical_half') == 'top' && !q.block_state('wiki:open') && q.block_state('minecraft:cardinal_direction') == 'west'",
                "components": {
                    "minecraft:transformation": { "rotation": [180, -90, 0] }
                }
            },
            {
                "condition": "q.block_state('minecraft:vertical_half') == 'top' && !q.block_state('wiki:open') && q.block_state('minecraft:cardinal_direction') == 'east'",
                "components": {
                    "minecraft:transformation": { "rotation": [180, 90, 0] }
                }
            },
            // 顶部打开
            {
                "condition": "q.block_state('minecraft:vertical_half') == 'top' && q.block_state('wiki:open') && q.block_state('minecraft:cardinal_direction') == 'north'",
                "components": {
                    "minecraft:transformation": { "rotation": [-90, 0, 0] }
                }
            },
            {
                "condition": "q.block_state('minecraft:vertical_half') == 'top' && q.block_state('wiki:open') && q.block_state('minecraft:cardinal_direction') == 'south'",
                "components": {
                    "minecraft:transformation": { "rotation": [90, 0, 180] }
                }
            },
            {
                "condition": "q.block_state('minecraft:vertical_half') == 'top' && q.block_state('wiki:open') && q.block_state('minecraft:cardinal_direction') == 'west'",
                "components": {
                    "minecraft:transformation": { "rotation": [0, 90, 90] }
                }
            },
            {
                "condition": "q.block_state('minecraft:vertical_half') == 'top' && q.block_state('wiki:open') && q.block_state('minecraft:cardinal_direction') == 'east'",
                "components": {
                    "minecraft:transformation": { "rotation": [180, -90, 90] }
                }
            }
        ]
    }
}
```

## 自定义组件脚本

现在，是时候使用这些置换了。以下脚本将允许玩家通过与其交互来打开和关闭活板门。别忘了将此脚本导入到你的主脚本入口。

<CodeHeader>BP/scripts/toggleable.js</CodeHeader>

```js
import { system } from "@minecraft/server";

/** @type {import("@minecraft/server").BlockCustomComponent} */
const BlockToggleableComponent = {
    onPlayerInteract({ block, dimension }, { params }) {
        const toggleableState = params.block_state;

        const currentValue = block.permutation.getState(toggleableState);
        const toggledValue = !currentValue;

        block.setPermutation(block.permutation.withState(toggleableState, toggledValue));

        const toggleSound = toggledValue ? params.enable_sound : params.disable_sound;
        dimension.playSound(toggleSound, block.center());
    },
};

system.beforeEvents.startup.subscribe(({ blockComponentRegistry }) => {
    blockComponentRegistry.registerCustomComponent("wiki:toggleable", BlockToggleableComponent);
});
```

## 方块模型与剔除

这将是你的自定义活板门使用的几何。

<Spoiler title="几何 JSON">
  
<CodeHeader>RP/models/blocks/trapdoor.geo.json</CodeHeader>

```json
{
    "format_version": "1.26.10",
    "minecraft:geometry": [
        {
            "description": {
                "identifier": "geometry.custom_trapdoor",
                "texture_width": 16,
                "texture_height": 16
            },
            "bones": [
                {
                    "name": "trapdoor",
                    "pivot": [0, 0, 0],
                    "cubes": [
                        {
                            "origin": [-8, 0, -8],
                            "size": [16, 2.9, 16],
                            "uv": {
                                "north": { "uv": [16, 3], "uv_size": [-16, -3] },
                                "east": { "uv": [16, 3], "uv_size": [-16, -3] },
                                "south": { "uv": [16, 3], "uv_size": [-16, -3] },
                                "west": { "uv": [16, 3], "uv_size": [-16, -3] },
                                "up": { "uv": [0, 0], "uv_size": [16, 16] },
                                "down": { "uv": [16, 16], "uv_size": [-16, -16] }
                            }
                        }
                    ]
                }
            ],
            "item_display_transforms": {
                "gui": {
                    "fit_to_frame": false,
                    "rotation": [30, 225, 0],
                    "scale": [0.625, 0.625, 0.625],
                    "translation": [0, -0.15, 0]
                },
                "firstperson_righthand": {
                    "translation": [0, 2.6, 0]
                },
                "thirdperson_righthand": {
                    "translation": [0, 3.35, 2.25]
                },
                "fixed": {
                    "translation": [0, 3.45, 0]
                },
                "ground": {
                    "translation": [0, 4.65, 0]
                }
            }
        }
    ]
}
```

</Spoiler>

<Spoiler title="方块剔除规则 JSON">

<CodeHeader>RP/block_culling/trapdoor.json</CodeHeader>

```json
{
    "format_version": "1.21.80",
    "minecraft:block_culling_rules": {
        "description": {
            "identifier": "wiki:culling.trapdoor"
        },
        "rules": [
            {
                "direction": "down",
                "geometry_part": {
                    "bone": "trapdoor",
                    "cube": 0,
                    "face": "down"
                }
            },
            {
                "direction": "north",
                "geometry_part": {
                    "bone": "trapdoor",
                    "cube": 0,
                    "face": "north"
                }
            },
            {
                "direction": "south",
                "geometry_part": {
                    "bone": "trapdoor",
                    "cube": 0,
                    "face": "south"
                }
            },
            {
                "direction": "west",
                "geometry_part": {
                    "bone": "trapdoor",
                    "cube": 0,
                    "face": "west"
                }
            },
            {
                "direction": "east",
                "geometry_part": {
                    "bone": "trapdoor",
                    "cube": 0,
                    "face": "east"
                }
            }
        ]
    }
}
```

</Spoiler>