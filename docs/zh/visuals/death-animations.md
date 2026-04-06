---
title: 自定义死亡动画
tags:
    - intermediate
category: 通用
mentions:
    - SirLich
    - Joelant05
    - Dreamedc2015
    - MedicalJewel105
    - aexer0e
    - Xterionix
    - ChibiMango
    - SmokeyStack
    - ThomasOrs
description: 更改或禁用实体死亡动画。
---

死亡动画是指实体死亡时的旋转。伴随而来的是红色着色，随后实体几何体会很快消失，并出现死亡粒子。

## 取消死亡动画

这一部分将解释如何完全移除死亡动画。

### 传送实体

一种非常常见的移除实体而不产生死亡效果的方法是将它们传送到虚空中。这可以通过在动画控制器中使用 `!q.is_alive` 来完成：
`/teleport @s ~ ~-1000 ~`

请注意，这将移除所有死亡效果，包括声音、粒子、战利品和实体的视觉死亡。

### minecraft:instant_despawn

如果你想让实体直接消失，可以添加一个包含 `"minecraft:instant_despawn":{}` 的组件组，并运行一个将添加此组件组的事件。

请注意，这将移除所有死亡效果，包括声音、粒子、战利品和实体的视觉死亡。

### 转换为另一个实体

与传送类似，实体在死亡时会触发实体转换。在动画控制器中使用 `!q.is_alive` 发送一个事件，该事件将添加包含 `"minecraft:transformation"` 组件的组件组。使用此组件，实体将转换为另一个实体：

<CodeHeader></CodeHeader>

```json
"minecraft:transformation": {
	"into": "wiki:death_animation_entity",
	"transformation_sound" : "converted_to_zombified",
	"keep_level": true,
	"drop_inventory": true,
	"preserve_equipment": false,
	"drop_equipment": true,
	"delay": {
		"block_assist_chance": 0.0,
		"block_radius": 0,
		"block_max": 0,
		"value": 10
	}
}
```

### 取消动画

我们也可以取消实体的旋转值，允许实体以更传统的方式死亡（粒子、红色着色、战利品），而无需90度旋转。

如果你需要更多关于从实体死亡触发动画的信息，请参阅关于死亡效果的[此文档](/animation-controllers/death-commands)。

旋转需要应用于所有其他骨骼的父骨骼，支点位于[0,0,0]，动画应该只在 `!q.is_alive` 时开始。

动画：

<CodeHeader></CodeHeader>

```json
"rotation" : [ 0, 0, "Math.min(Math.sqrt(Math.max(0, q.anim_time * 20 - 0.5) / 20 * 1.6), 1) * -90" ]
```

动画控制器：

（q.all_animations_finished仅对于需要复活的实体（如玩家）是必需的）

<CodeHeader>RP/animation_controllers/custom_death.animation.controllers.json</CodeHeader>

```json
{
    "format_version": "1.10.0",
    "animation_controllers": {
        "controller.animation.player.cancel_death_animation": {
            "initial_state": "default",
            "states": {
                "default": {
                    "transitions": [
                        {
                            "cancel_animation": "!q.is_alive"
                        }
                    ]
                },
                "cancel_animation": {
                    "animations": ["my.animation"],
                    "transitions": [
                        {
                            "default": "q.is_alive && q.all_animations_finished"
                        }
                    ]
                }
            }
        }
    }
}
```

请注意，你需要在资源包的 .entity.json 文件中附加动画和动画控制器。

## 自定义死亡动画

这一部分将解释如何自定义死亡动画。

### 更改伤害颜色叠加层

你可以移除/自定义实体受伤时的伤害颜色叠加层。

在开始之前，你必须了解渲染控制器的基础知识，所以请查看渲染控制器的[教程](/entities/render-controllers)。

要移除你想要的任何实体在受到伤害时的伤害叠加层颜色，我们将使用 `is_hurt_color`，并在实体受到岩浆或火焰伤害时使用 `on_fire_color` 移除伤害叠加层颜色。
首先，你需要将rgba值设为0
以下是移除伤害和火焰叠加层颜色的示例。

<CodeHeader>RP/render_controllers/custom_death.render_controllers.json</CodeHeader>

```json
{
    "format_version": "1.8.0",
    "render_controllers": {
        "controller.render.sample": {
            "geometry": "Geometry.default",
            "materials": [{ "*": "Material.default" }],
            "textures": ["Texture.default"],
            "is_hurt_color": {},
            "on_fire_color": {}
        }
    }
}
```

上面的代码将移除红色伤害叠加层颜色。

你也可以通过在rgba中放置不同的值来将伤害颜色叠加层更改为不同的颜色。你可以查看各种网站获取所有颜色的rgba值。
下面是另一个示例，其中伤害颜色叠加层变为粉红色。

<CodeHeader>RP/render_controllers/custom_death.render_controllers.json</CodeHeader>

```json
{
    "format_version": "1.8.0",
    "render_controllers": {
        "controller.render.kbg": {
            "geometry": "Geometry.default",
            "materials": [{ "*": "Material.default" }],
            "textures": ["Texture.default"],
            "is_hurt_color": {
                "r": "1.0",
                "g": "0.4",
                "b": "0.7",
                "a": "0.5"
            },
            "on_fire_color": {
                "r": "1.0",
                "g": "0.4",
                "b": "0.7",
                "a": "0.5"
            }
        }
    }
}
```

### 使用伤害传感器触发即时清除和单个物品掉落

你可以使用 damage_sensor 组件在致命伤害时触发一个事件；该事件添加一个包含 spawn_entity 和 instant_despawn 组件的特殊清除组件组。wait时间为0的 spawn_entity 将在实体被清除前掉落一个物品。对于只需要一个物品的简单实体（如家具），这非常方便。

当实体受到致命伤害时，会触发一个添加虚拟组件的事件。然后我们可以使用这个虚拟组件来播放动画，并使用 `minecraft:timer` 让它清除。

请注意，你需要为有库存的实体另找工作。你还应该确保在使用 entity_spawned 事件生成实体时不会添加清除组件组。如果你的实体执行其他动作（移动和攻击），你可能也想移除那些组件。

这是BP中的示例文件

<CodeHeader>BP/entities/entity.json</CodeHeader>

```json
{
    "format_version": "1.14.0",
    "min_engine_version": "1.16.100",
    "minecraft:entity": {
        "description": {
            "identifier": "wiki:entity",
            "is_spawnable": true,
            "is_summonable": true,
            "is_experimental": true
        },
        "component_groups": {
            "wiki:death": {
                "minecraft:spawn_entity": {
                    "max_wait_time": 0,
                    "min_wait_time": 0,
                    "spawn_item": "egg",
                    "single_use": true
                },
                "minecraft:is_sheared": {},
                "minecraft:timer": {
                    "looping": true,
                    "time": [2.56, 2.56], // 更改此值以匹配你的动画时间
                    "time_down_event": {
                        "event": "wiki:despawn"
                    }
                }
            },
            "wiki:despawn": {
                "minecraft:instant_despawn": {}
            }
        },
        "components": {
            "minecraft:type_family": {
                "family": ["cart", "inanimate"]
            },
            "minecraft:collision_box": {
                "width": 0.8,
                "height": 0.5
            },
            "minecraft:health": {
                "value": 8,
                "max": 8
            },
            "minecraft:physics": {},
            "minecraft:pushable": {
                "is_pushable": true,
                "is_pushable_by_piston": true
            },
            "minecraft:damage_sensor": {
                "triggers": {
                    "on_damage": {
                        "filters": {
                            "all_of": [
                                {
                                    "test": "has_damage",
                                    "value": "fatal"
                                }
                            ]
                        },
                        "target": "self",
                        "event": "wiki:death",
                        "deals_damage": false,
                        "cause": "fatal"
                    }
                }
            }
        },
        "events": {
            "wiki:death": {
                "add": {
                    "component_groups": ["wiki:death"]
                },
                "wiki:despawn": {
                    "add": {
                        "component_groups": ["wiki:despawn"]
                    }
                }
            }
        }
    }
}
```

这是动画控制器的示例文件。

<CodeHeader>RP/animation_controllers/animation_controller.entity.json</CodeHeader>

```json
{
    "format_version": "1.10.0",
    "animation_controllers": {
        "controller.animation.entity": {
            "states": {
                "default": {
                    "blend_transition": 0.2,
                    "transitions": [
                        {
                            "dead": "q.is_sheared"
                        }
                    ]
                },
                "death": {
                    "blend_transition": 0.2,
                    "animations": ["death"]
                }
            }
        }
    }
}
```

注意：你也可以通过将 `"spawn_item"` 设置为你的实体ID并加上 `spawn_egg` 后缀来使用 `minecraft:spawn_entity` 组件生成自定义生蛋物品，看起来会像这样。

<CodeHeader>BP/entities/my_entity.json#components</CodeHeader>

```json
{
    "minecraft:spawn_entity": [
        {
            "min_wait_time": 0,
            "max_wait_time": 0,
            "spawn_item": "wiki:custom_zombie_spawn_egg",
            "single_use": true
        }
    ]
}
```

如果你想掉落战利品表，你可以触发一个事件（如下所示）并召唤另一个具有此组件的实体：

<CodeHeader></CodeHeader>

```json
{
    "minecraft:behavior.drop_item_for": {
        "seconds_before_pickup": 0.0,
        "cooldown": 5,
        "drop_item_chance": 1,
        "offering_distance": 0.0,
        "minimum_teleport_distance": 1024.0,
        "target_range": [64.0, 64.0, 64.0],
        "teleport_offset": [0.0, 1.0, 0.0],
        "speed_multiplier": 1.0,
        "search_range": 64,
        "search_height": 64,
        "search_count": 0,
        "goal_radius": 64.0,
        "entity_types": [
            {
                "filters": {
                    "test": "is_family",
                    "subject": "other",
                    "value": "player"
                },
                "max_dist": 64
            }
        ],
        "priority": 1,
        "loot_table": "loot_tables/entities/example.loot_table.json",
        "time_of_day_range": [0.0, 1.0]
    },
    "minecraft:timer": {
        "time": 2,
        "time_down_event": {
            "event": "wiki:my_despawn_event"
        }
    }
}
```

然后通过 `wiki:my_despawn_event` 添加带有 instant_despawn 的组件组来清除它。

### 使用命令检测死亡

<Button link="/commands/tick_json-creations#death-detection">查看</Button>
