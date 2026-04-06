---
title: 虚拟实体
category: 教程
tags:
    - beginner
mentions:
    - SirLich
    - Joelant05
    - MedicalJewel105
    - aexer0e
description: 虚拟实体是用于游戏玩法目的的不可见实体。
---

虚拟实体是用于游戏玩法目的的不可见实体。虚拟实体是一个非常有用的工具，本文档将介绍它们的一些用法，以及如何设置资源端的内容。

## 使用虚拟实体

这不是虚拟实体使用方式的详尽列表：

-   **用于数据存储**：通过向实体添加标签，我们可以将其用作"游戏管理器"，就像护甲架以前的使用方式一样。
-   **作为命名实体**：通过给虚拟实体命名，然后使用 `execute` 选择它，你可以让命令方块 `/say` 使用漂亮的显示名称。
-   **作为位置标记**：你可以运行位于虚拟实体处的 `execute` 命令来获取相对坐标。
-   **作为路径点**：通过让对你虚拟实体敌对的实体，你可以通过在那里放置虚拟实体的方式来让实体寻找到任何位置。

## 创建虚拟实体

### 行为实体

你可以使用任何你想要的行为，但这里有一个很好的模板。重要的方面是：无伤害，且不能被推动。

<CodeHeader>BP/entities/dummy.json</CodeHeader>

```json
{
    "format_version": "1.21.50",
    "minecraft:entity": {
        "description": {
            "identifier": "wiki:dummy",
            "is_summonable": true,
            "is_spawnable": false,
            "is_experimental": false
        },
        "components": {
            "minecraft:cannot_be_attacked": {}, //可选，阻止实体攻击所有者实体，除非它们有"minecraft:ignore_cannot_be_attacked"组件。
            "minecraft:breathable": {
                //可选，允许实体在水中呼吸
                "breathes_water": true
            },
            "minecraft:physics": {
                "has_gravity": false, //可选，允许实体不受重力或水的影响
                "has_collision": false
            },
            "minecraft:custom_hit_test": {
                "hitboxes": [
                    {
                        "pivot": [0, 100, 0],
                        "width": 0,
                        "height": 0
                    }
                ]
            },
            "minecraft:damage_sensor": {
                "triggers": {
                    "deals_damage": false
                }
            },
            "minecraft:pushable": {
                "is_pushable": false,
                "is_pushable_by_piston": false
            },
            "minecraft:collision_box": {
                "width": 0.0001,
                "height": 0.0001
            }
        }
    }
}
```

如果你想完全禁用碰撞（这样你可以在它的位置放置一个方块），你可以使用arrow运行时标识符，但可能会有一些副作用。

### 资源实体

<CodeHeader>RP/entity/dummy.json</CodeHeader>

```json
{
    "format_version": "1.10.0",
    "minecraft:client_entity": {
        "description": {
            "identifier": "wiki:dummy",
            "materials": {
                "default": "entity_alphatest"
            },
            "geometry": {
                "default": "geometry.dummy"
            },
            "render_controllers": ["controller.render.dummy"],
            "textures": {
                "default": "textures/wiki/entity/dummy"
            }
        }
    }
}
```

### 几何体

<CodeHeader>RP/models/entity/dummy.json</CodeHeader>

```json
{
    "format_version": "1.12.0",
    "minecraft:geometry": [
        {
            "description": {
                "identifier": "geometry.dummy",
                "texture_width": 16,
                "texture_height": 16
            }
        }
    ]
}
```

### 渲染控制器（可选）

<CodeHeader>RP/render_controllers/dummy.json</CodeHeader>

```json
{
    "format_version": "1.10.0",
    "render_controllers": {
        "controller.render.dummy": {
            "geometry": "Geometry.default",
            "textures": ["Texture.default"],
            "materials": [
                {
                    "*": "Material.default"
                }
            ]
        }
    }
}
```

### 纹理（可选）

你可以将纹理位置留空，或者在blockbench中打开模型并创建空白纹理。
