---
title: 假方块
description: 了解如何创建复制方块特征的实体。
category: 教程
tags:
    - intermediate
    - scripting
mentions:
    - SirLich
    - solvedDev
    - Joelant05
    - MedicalJewel105
    - aexer0e
    - ThijsHankelMC
    - QuazChick
    - SmokeyStack
---

有时候你的方块需要具有 Minecraft 不允许的功能。一个可能的解决方案是创建一个复制方块特征的实体。

## 创建碰撞

[实体碰撞](/entities/solid-entities)教程概述了创建碰撞的四种不同方法，包括 `runtime_identifiers`、方块和组件。

## 基本组件

以下组件是使实体表现得像方块所必需的，而且不要在其中添加 `"minecraft:physics": {}` 组件，因为这会使你的实体下落或与水或熔岩等方块发生碰撞。

<CodeHeader>BP/entities/your_entity.json#minecraft:entity/components</CodeHeader>

```json
{
    // 需要击退阻力以防止被实体击落。
    "minecraft:knockback_resistance": {
        "value": 1
    },
    // 告诉实体是否可以推动。
    "minecraft:pushable": {
        "is_pushable": false,
        "is_pushable_by_piston": true
    },
    // 设置实体可以推动的距离。
    "minecraft:push_through": {
        "value": 1
    },
    // 使其无敌。
    "minecraft:damage_sensor": {
        "triggers": [
            {
                "deals_damage": "no",
                "cause": "all"
            }
        ]
    }
}
```

## 对齐实体旋转

为了对齐你的实体旋转，你需要一些数学。

<CodeHeader></CodeHeader>

```json
"rotation": [ 0, "-q.body_y_rotation + (Math.round(q.body_y_rotation / 90) * 90)", 0 ]
```

将代码应用到模型的中心文件夹（包含所有其他组）中，确保支点在 X 和 Z 轴上为 0，以避免视觉错误。而且你不需要添加以下组件：

-   `"minecraft:behavior.look_at_entity": {}`
-   `"minecraft:behavior.look_at_player": {}`
-   `"minecraft:behavior.look_at_target": {}`

原因是这将改变目标 Y 旋转，导致它移动身体 Y 旋转，从而移动模型。也不要添加移动组件。

## 对齐实体位置

对齐实体的位置会更复杂。

首先，在 `minecraft:entity_spawned` 事件中，使用 queue_command 创建一个自定义方块，并让一个新的虚拟实体通过 transformation 事件转换到原始实体，这样我们就避免再次触发 `minecraft:entity_spawned`。

<CodeHeader>BP/entities/your_entity.json#minecraft:entity/events</CodeHeader>

```json
// 原始实体中的事件。
"minecraft:entity_spawned": {
    "add": {
        "components_groups": [
            "despawn" // 我们还需要让第一个实体消失。
        ]
    },
    "queue_command": {
        "command": ["setblock ~~~ wiki:align"]
    }
}
```

<CodeHeader>BP/entities/your_entity.json#minecraft:entity/component_groups</CodeHeader>

```json
// 原始实体中的组件组。
"component_groups": {
    "despawn": {
        "minecraft:despawn": {}
    }
}
```

用于在方块位置生成虚拟实体的方块，由于方块居中，实体也会居中：

<CodeHeader>BP/blocks/your_dummy_block.json</CodeHeader>

```json
{
    "format_version": "1.26.10",
    "minecraft:block": {
        "description": {
            "identifier": "wiki:align"
        },
        "components": {
            "minecraft:light_dampening": 0,
            "minecraft:collision_box": false,
            "minecraft:selection_box": false,
            "minecraft:loot": "loot_tables/empty.json",
            "minecraft:geometry": "geometry.empty",
            "minecraft:material_instances": {
                "*": {
                    "texture": "wiki:empty"
                }
            },
            "minecraft:destructible_by_mining": {
                "seconds_to_destroy": 2
            },
            "wiki:align_entity": {}
        }
    }
}
```

对于我们的自定义组件脚本，我们将使用 `beforeOnPlayerPlace` 事件。我们使用此事件来阻止方块被放置，而只是生成我们的实体。

```js
import { system } from "@minecraft/server";

/** @type {import("@minecraft/server").BlockCustomComponent} */
const BlockAlignEntityComponent = {
    beforeOnPlayerPlace(event) {
        event.cancel = true;

        const location = event.block.center();
        event.dimension.spawnEntity("wiki:dummy_align", location);
    },
};

system.beforeEvents.startup.subscribe(({ blockComponentRegistry }) => {
    blockComponentRegistry.registerCustomComponent("wiki:align_entity", BlockAlignEntityComponent);
});
```

<CodeHeader>BP/entities/your_dummy_entity.json</CodeHeader>

```json
{
    "format_version": "1.26.10",
    "minecraft:entity": {
        "description": {
            "identifier": "wiki:dummy_align", // 虚拟实体用于避免在原始实体中触发 entity_spawned 事件。
            "is_spawnable": false,
            "is_summonable": true
        },
        "component_groups": {
            "transform": {
                "minecraft:transformation": {
                    "into": "wiki:your_entity",
                    "delay": 0
                }
            }
        },
        "components": {
            "minecraft:physics": {
                "has_gravity": false
            },
            "minecraft:collision_box": {
                "width": 0.1,
                "height": 0.1
            },
            "minecraft:damage_sensor": {
                "triggers": {
                    "cause": "all",
                    "deals_damage": "no"
                }
            }
        },
        "events": {
            "minecraft:entity_spawned": {
                "add": {
                    "component_groups": ["transform"]
                }
            }
        }
    }
}
```

## 裂纹纹理

Vanilla 方块在破坏时会出现裂纹纹理。这里我将向你展示如何将此效果添加到你的实体。

首先，我们必须在实体文件中添加一些纹理，确保你使用 vanilla 纹理而不是自定义纹理（这是为了使其与你的资源包兼容）

<CodeHeader>RP/entity/your_entity.json#description</CodeHeader>

```json
{
    "textures": {
        "default": "textures/wiki/entity/custom_entity",
        "destroy_stage_0": "textures/environment/destroy_stage_0",
        "destroy_stage_1": "textures/environment/destroy_stage_1",
        "destroy_stage_2": "textures/environment/destroy_stage_2",
        "destroy_stage_3": "textures/environment/destroy_stage_3",
        "destroy_stage_4": "textures/environment/destroy_stage_4",
        "destroy_stage_5": "textures/environment/destroy_stage_5",
        "destroy_stage_6": "textures/environment/destroy_stage_6",
        "destroy_stage_7": "textures/environment/destroy_stage_7",
        "destroy_stage_8": "textures/environment/destroy_stage_8",
        "destroy_stage_9": "textures/environment/destroy_stage_9"
    }
}
```

并添加一个几何体，其所有立方体必须膨胀 0.1 以避免 Z-fighting。

<CodeHeader>RP/entity/your_entity.json#description</CodeHeader>

```json
{
    "geometry": {
        "default": "geometry.your_geometry",
        "broken": "geometry.broken"
    }
}
```

现在我们必须添加一个新的渲染控制器。这将在破坏阶段之间选择不同的纹理。（记住不要替换你当前的控制器，你需要两个控制器，第一个只是向你的正常实体添加模型、纹理和材质，第二个定义裂纹纹理）

<CodeHeader>RP/render_controllers/my_entity.json</CodeHeader>

```json
{
    "controller.render.broken": {
        "arrays": {
            "textures": {
                "array.broken": [
                    "texture.destroy_stage_9",
                    "texture.destroy_stage_8",
                    "texture.destroy_stage_7",
                    "texture.destroy_stage_6",
                    "texture.destroy_stage_5",
                    "texture.destroy_stage_4",
                    "texture.destroy_stage_3",
                    "texture.destroy_stage_2",
                    "texture.destroy_stage_1",
                    "texture.destroy_stage_0",
                    "texture.default"
                ]
            }
        },
        "geometry": "Geometry.broken",
        "materials": [
            {
                "*": "Material.default"
            }
        ],
        "textures": [
            "array.broken[q.health * 1]" // 这里你可以计算你的实体的健康值以确保它没有错误。如果你的实体有10点健康，保持原样。如果有20点，应该是 q.health * 0.5。如果是40点，必须是0.25，等等...
        ]
    }
}
```