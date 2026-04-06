---
title: 自定义头颅
example: custom_heads
description: 了解如何创建可以佩戴、放置在不同方向并在充电爬行者爆炸后掉落的自定义生物头颅。
category: 原版重制
tags:
    - expert
    - scripting
license: true
mentions:
    - QuazChick
---

:::tip 格式版本 1.26.10
本教程假设你对方块、物品和脚本有高级理解。
在开始之前请查看[方块指南](/blocks/blocks-intro)、[方块状态](/blocks/block-states)和[方块事件](/blocks/block-events)。
:::

在本教程中，你将学习如何创建自己的生物头颅方块。

**功能：**

-   放置在地面上时可以面向16个方向中的任何一个，并附着到相邻方块的侧面上。
-   可以佩戴在实体头上，在定位栏和地图上隐藏玩家。
-   当适当的生物被充电爬行者爆炸时会作为物品掉落。

**问题：**

-   自定义头颅无法作为物品堆叠（[MCPE-176931](https://bugs.mojang.com/browse/MCPE-176931)）。
-   自定义头颅无法用于合成烟花之星。
-   附魔时，自定义头颅在用户界面外缺少附魔光泽。

在本教程结束时，你应该已经创建了类似这样的东西：

<WikiImage
    src="showcase.png"
    alt="A charged creeper, surrounded by husk heads, waiting eagerly outside a desert villager's house"
    width="500"
/>

## 初始方块 JSON

_请注意，方块描述没有 `menu_category` 参数，因为这将在后面的步骤中的物品JSON中定义。_

<CodeHeader>BP/blocks/custom_head.json</CodeHeader>

```json
{
    "format_version": "1.26.10",
    "minecraft:block": {
        "description": {
            "identifier": "wiki:custom_head"
        },
        "components": {
            // 碰撞和选择框
            "minecraft:collision_box": {
                "origin": [-4, 0, -4],
                "size": [8, 8, 8]
            },
            "minecraft:selection_box": {
                "origin": [-4, 0, -4],
                "size": [8, 8, 8]
            },
            // 阻止方块（如栅栏）连接到该方块
            "minecraft:connection_rule": {
                "accepts_connections_from": "none"
            },
            // 阻止方块放置在另一个方块的底面
            "minecraft:placement_filter": {
                "conditions": [{ "allowed_faces": ["up", "side"] }]
            },
            // 阻止雪在方块上方积累
            "minecraft:precipitation_interactions": {
                "precipitation_behavior": "none"
            },
            // 破坏
            "minecraft:destructible_by_explosion": {
                "explosion_resistance": 5
            },
            "minecraft:destructible_by_mining": {
                "seconds_to_destroy": 1
            },
            "minecraft:destruction_particles": {
                "particle_count": 48,
                "texture": "soul_sand"
            },
            // 被活塞推动时破坏并作为物品掉落
            "minecraft:movable": {
                "movement_type": "popped"
            },
            "minecraft:liquid_detection": {
                "detection_rules": [
                    {
                        "liquid_type": "water",
                        "can_contain_liquid": true, // 允许方块水体化
                        "on_liquid_touches": "popped" // 当水流入方块时破坏并作为物品掉落
                    }
                ]
            },
            // 视觉效果
            "minecraft:material_instances": {
                "down": {
                    "texture": "wiki:custom_head_bottom",
                    "ambient_occlusion": false
                },
                "up": {
                    "texture": "wiki:custom_head_top",
                    "ambient_occlusion": false
                },
                "north": {
                    "texture": "wiki:custom_head_front",
                    "ambient_occlusion": false
                },
                "south": {
                    "texture": "wiki:custom_head_back",
                    "ambient_occlusion": false
                },
                "west": {
                    "texture": "wiki:custom_head_left",
                    "ambient_occlusion": false
                },
                "east": {
                    "texture": "wiki:custom_head_right",
                    "ambient_occlusion": false
                }
            }
        }
    }
}
```

## 定义方向状态

生物头颅使用两种类型的[方块朝向](/blocks/block-orientation)。
它们可以附着在相邻方块的侧面，或放置在地面上面向斜向方向。

为此，我们需要在方块中添加两个方向状态：

-   对于方块面附着，我们将使用[放置位置](/blocks/block-traits#放置位置)特性启用 `minecraft:block_face` 状态。
-   对于放置在另一个方块顶部的斜向朝向，我们将添加一个 `wiki:intercardinal_direction` 状态，并使用 wiki 的[斜向朝向](/blocks/intercardinal-orientation)系统的修改版本。
    与往常一样，记得将 `wiki` 更改为你自己的命名空间！

将以下内容添加到你的方块 `description`：

<CodeHeader>minecraft:block > description</CodeHeader>

```json
"traits": {
    "minecraft:placement_position": {
        "enabled_states": ["minecraft:block_face"]
    }
},
"states": {
    "wiki:intercardinal_direction": {
        "values": { "min": 0, "max": 15 }
    }
}
```

## 设置方向状态

由于它是方块特性的一部分，`minecraft:block_face` 状态将自动设置。
但是，为了将 `wiki:intercardinal_direction` 状态设置为正确的值，我们需要使用自定义组件。

::: tip 了解更多
有关此自定义组件如何工作的更详细解释，请查看[斜向朝向](/blocks/intercardinal-orientation#设置方向状态)页面！
:::

将以下脚本添加到你的 `BP/scripts` 文件夹以注册 `wiki:intercardinal_orientation` 组件。

<Spoiler title="斜向朝向脚本">

<ExampleFile path="BP/scripts/intercardinalOrientation.js" />

</Spoiler>

现在我们可以在方块放置在另一个方块的 `up` 面时使用方块[`置换`](/blocks/block-permutations#条件应用组件)数组将组件应用到方块。

<CodeHeader>minecraft:block</CodeHeader>

```json
"permutations": [
    {
        "condition": "q.block_state('minecraft:block_face') == 'up'",
        "components": {
            // 在方块放置前将 "wiki:intercardinal_direction" 状态设置为正确的值
            "wiki:intercardinal_orientation": {
                "y_rotation_offset": 180 // 面向玩家
            }
        }
    }
]
```

## 方块模型

通常，[变换](/blocks/block-components#变换)组件用于旋转方块以匹配其方向，但是此组件仅支持90度倍数 的角度。
为了允许用于斜向旋转的22.5度间隔，你的方块模型需要一些额外的骨骼。

斜向朝向了需要四个骨骼，每个都有不同的Y轴旋转：

-   `0`{lang=json}
-   `22.5`{lang=json}
-   `45`{lang=json}
-   `67.5`{lang=json}

**这些旋转是从上方看模型时顺时针方向的。**

### 基本骨骼

首先，你需要创建一个没有旋转的骨骼，模型正面朝北。
在本教程中，每个骨骼以其Y旋转命名，意味着这个骨骼应该有名称 `0`，因为它旋转了0度。

当方块面向基本方向时（当 `wiki:intercardinal_direction` 是 `0`{lang=json}、`4`{lang=json}、`8`{lang=json} 或 `12`{lang=json}）或当头颅附着在相邻方块的侧面时，这个骨骼将是可见的。
在此阶段，你模型的所有立方体必须是此骨骼的直接子级，不能包含在子骨骼中。

![](model_bone_0.png)

### 斜向骨骼

现在你需要将此骨骼复制三次，剩余的旋转值（`22.5`{lang=json}、`45`{lang=json} 和 `67.5`{lang=json}）。
这些复制骨骼用于在方块旋转到斜向方向时使用。

:::tip
你可以在 Blockbench 中通过选择骨骼并按 Ctrl + D 来复制骨骼。

将每个骨骼的支点设置为 `[0, 0, 0]`{lang=json}，这样它的旋转就围绕方块中心。
:::

作为参考，以下是基本自定义头颅的最终模型外观。小心，它现在还不漂亮！

![](model_bones.png)

### 示例模型

以下是基本 8×8×8 头颅模型的 JSON 代码，其中每个方块面应有单独的 8×8 纹理，由材质实例定义。

<Spoiler title="示例头颅模型">

<ExampleFile path="RP/models/blocks/custom_head.geo.json" />

</Spoiler>

## 应用方块旋转

### 骨骼可见性

并非你模型中的所有骨骼都应该可见，因此我们使用[几何](/blocks/block-components#几何)组件中的 `bone_visibility` 参数来确保只渲染需要的骨骼。

将以下组件添加到你的方块：

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:geometry": {
    "identifier": "geometry.custom_head", // 上一步创建的模型
    "bone_visibility": {
        "0": "math.mod(q.block_state('wiki:intercardinal_direction'), 4) == 0",
        "22.5": "math.mod(q.block_state('wiki:intercardinal_direction'), 4) == 1",
        "45": "math.mod(q.block_state('wiki:intercardinal_direction'), 4) == 2",
        "67.5": "math.mod(q.block_state('wiki:intercardinal_direction'), 4) == 3"
    }
}
```

### 置换条目

现在，使用[`置换`](/blocks/block-permutations)数组通过将以下内容插入你的方块 `置换` 数组（按所示顺序）来定义方块的基本旋转：

<CodeHeader>minecraft:block > permutations</CodeHeader>

```json
// 斜向方向
{
    "condition": "q.block_state('wiki:intercardinal_direction') >= 0",
    "components": {
        "minecraft:transformation": { "rotation": [0, 180, 0] }
    }
},
{
    "condition": "q.block_state('wiki:intercardinal_direction') >= 4",
    "components": {
        "minecraft:transformation": { "rotation": [0, 90, 0] }
    }
},
{
    "condition": "q.block_state('wiki:intercardinal_direction') >= 8",
    "components": {
        "minecraft:transformation": { "rotation": [0, 0, 0] }
    }
},
{
    "condition": "q.block_state('wiki:intercardinal_direction') >= 12",
    "components": {
        "minecraft:transformation": { "rotation": [0, -90, 0] }
    }
},
// 方块面附着
{
    "condition": "q.block_state('minecraft:block_face') == 'north'",
    "components": {
        "minecraft:transformation": {
            "rotation": [0, 0, 0],
            "translation": [0, 0.25, 0.25]
        }
    }
},
{
    "condition": "q.block_state('minecraft:block_face') == 'west'",
    "components": {
        "minecraft:transformation": {
            "rotation": [0, 90, 0],
            "translation": [0.25, 0.25, 0]
        }
    }
},
{
    "condition": "q.block_state('minecraft:block_face') == 'south'",
    "components": {
        "minecraft:transformation": {
            "rotation": [0, 180, 0],
            "translation": [0, 0.25, -0.25]
        }
    }
},
{
    "condition": "q.block_state('minecraft:block_face') == 'east'",
    "components": {
        "minecraft:transformation": {
            "rotation": [0, -90, 0],
            "translation": [-0.25, 0.25, 0]
        }
    }
}
```

## 最终方块 JSON

<Spoiler title="自定义头颅方块 JSON">

<ExampleFile path="BP/blocks/custom_head.json" />

</Spoiler>

## 物品 JSON

为了使我们的自定义头颅可佩戴并可附魔，我们需要通过在包中添加新的物品定义来替换它的[方块物品](/blocks/blocks-as-items)：

<ExampleFile path="BP/items/custom_head.json" />

太棒了！现在我们可以将方块装备到头部槽位：

![](inventory.png)

## 充电爬行者掉落

如果 vanilla 生物有与之关联的生物头颅，当该实体被充电爬行者爆炸时，该头颅将作为物品掉落。

你可以使用以下脚本为任何自定义头颅添加掉落。

<ExampleFile path="BP/scripts/headDrops.js" />

记得将脚本导入到你的入口文件！

<ExampleFile path="BP/scripts/index.js" />

## 结果

你已创建的内容：

-   [x] 支持斜向方向的方块模型
-   [x] 放置在地面上时支持16个方向状态值的方块，以及4个侧面附着
-   [x] 可用于设置斜向方向状态的自定义组件
-   [x] 可佩戴和附魔的方块物品
-   [x] 充电爬行者爆炸的自定义头颅掉落系统

<WikiImage
    src="directions.png"
    alt="Custom head blocks in a square formation, each pointing towards the middle"
    width="500"
/>