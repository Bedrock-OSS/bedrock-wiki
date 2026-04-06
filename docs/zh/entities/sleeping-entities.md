---
title: 睡眠实体
description: 了解如何让实体在床中睡觉或小睡。
category: 教程
tags:
    - intermediate
mentions:
    - MedicalJizard105
    - SirLich
---

本教程将解释如何让实体入睡。

## 在床中睡觉

此行为灵感来自村民。

### 特性

-   实体在夜间睡觉，在白天醒来。
-   与实体交互会将其唤醒，过一会儿它会再次入睡。
-   如果实体受到伤害，它会醒来。

### 行为包

本节将讨论行为包组件。

#### 组件

首先从一些需要添加到实体的基本组件开始。

<CodeHeader>BP/entities/sleeping_entity.json#components</CodeHeader>

```json
"minecraft:dweller": {
    "dwelling_type": "village",
    "dweller_role": "inhabitant",
    "can_find_poi": true
}
```

未文档化，需要此组件才能让实体入睡。

<CodeHeader>BP/entities/sleeping_entity.json#components</CodeHeader>

```json
"minecraft:environment_sensor": {
    "triggers": [
        {
            "filters": {
                "test": "is_daytime",
                "value": false
            },
            "event": "sleep"
        }
    ]
}
```

此组件是实体理解何时入睡所必需的。
如果不是在白天，它会运行事件。

:::warning
您需要一些基本的导航组件才能让您的实体移动到床上。
:::

#### 组件组

现在您的实体需要一些带有一些组件的组件组。

<CodeHeader>BP/entities/sleeping_entity.json#component_groups</CodeHeader>

```json
"sleeping": {
    "minecraft:behavior.sleep": {
        "priority": 0,
        "goal_radius": 1.5,
        "speed_multiplier": 1.25,
        "sleep_collider_height": 0.3,
        "sleep_collider_width": 1,
        "sleep_y_offset": 0.6,
        "timeout_cooldown": 10
    },
    "minecraft:damage_sensor": {
        "triggers": {
            "on_damage": {
                "event": "wake_up"
            }
        }
    },
    "minecraft:environment_sensor": {
        "triggers": [
            {
                "filters": {
                    "test": "is_daytime",
                    "value": true
                },
                "event": "wake_up"
            }
        ]
    },
    "minecraft:interact": {
        "interactions": [
            {
                "on_interact": {
                    "filters": {
                        "all_of": [
                            {
                                "test": "is_family",
                                "subject": "other",
                                "value": "player"
                            }
                        ]
                    },
                    "event": "woken_up"
                }
            }
        ]
    }
}
```

-   `minecraft:behavior.sleep`

确定睡眠详情，优先级需要为 `0`（最大权重）。

-   `minecraft:damage_sensor``

如果希望实体在受到攻击时醒来，请添加它。

-   `minecraft:environment_sensor`

当白天时运行 `wake_up` 事件。

-   `minecraft:interact`

这使玩家能够在不伤害实体的情况下唤醒实体。

<CodeHeader>BP/entities/sleeping_entity.json#component_groups</CodeHeader>

```json
"sleep_timer": {
    "minecraft:timer": {
        "time": 15,
        "time_down_event": {
            "event": "sleep_again"
        }
    }
}
```

此组件组是实体在醒来后（有延迟）再次入睡所需要的。

#### 事件

在这里您会找到所有需要的事件。
我认为它不需要解释。

<CodeHeader>BP/entities/sleeping_entity.json#events</CodeHeader>

```json
"sleep": {
    "add": {
        "component_groups": [
            "sleeping"
        ]
    }
},
"wake_up": {
    "remove": {
        "component_groups": [
            "sleeping"
        ]
    }
},
"woken_up": {
    "remove": {
        "component_groups": [
            "sleeping"
        ]
    },
    "add": {
        "component_groups": [
            "sleep_timer"
        ]
    }
},
"sleep_again": {
    "add": {
        "component_groups": [
            "sleeping"
        ]
    },
    "remove": {
        "component_groups": [
            "sleep_timer"
        ]
    }
}
```

### 资源包

别忘了您需要为实体添加睡眠动画和控制器！

#### 动画

只需复制粘贴即可。

<CodeHeader>RP/animations/sleeping_entity.animation.json</CodeHeader>

```json
{
    "format_version": "1.8.0",
    "animations": {
        "animation.sleeping_entity.sleep": {
            "loop": "hold_on_last_frame",
            "animation_length": 0.5,
            "bones": {
                "body": {
                    "rotation": {
                        "0.0": [0, 0, 0],
                        "0.5": [-90, 0, 0]
                    },
                    "position": [0, 2, -15]
                }
            }
        }
    }
}
```

#### 动画控制器

同样，如果您需要，只需复制粘贴即可。

<CodeHeader>RP/animations_controllers/ac.sleeping_entity.sleep.json</CodeHeader>

```json
{
    "format_version": "1.10.0",
    "animation_controllers": {
        "controller.animation.sleeping_entity.sleep": {
            "initial_state": "default",
            "states": {
                "default": {
                    "transitions": [
                        {
                            "sleep": "q.is_sleeping"
                        }
                    ]
                },
                "sleep": {
                    "animations": ["sleeping"],
                    "transitions": [
                        {
                            "default": "!q.is_sleeping"
                        }
                    ]
                }
            }
        }
    }
}
```

请注意，您需要像这样在客户端实体中定义动画：

`"sleeping": "animation.sleeping_entity.sleep"`

### 结果

![](result.png)

## 小睡

此行为灵感来自狐狸。

### 特性

-   实体在感到安全、远离生物或天气不是雷暴时入睡。
-   接近实体会使其醒来，除非它是受信任的玩家或潜行的玩家，或者是另一个具有 `sleeping_entity` 家族组的实体。
-   如果实体受到伤害，它会醒来。

### 行为包

本节将讨论行为包组件。

#### 组件

对于此行为，您只需要一个组件：

<CodeHeader>BP/entities/sleeping_entity.json#components</CodeHeader>

```json
"minecraft:behavior.nap": {
    "priority": 8,
    "cooldown_min": 2.0,
    "cooldown_max": 7.0,
    "mob_detect_dist": 12.0,
    "mob_detect_height": 6.0,
    "can_nap_filters": {
        "all_of": [
            {
                "test": "in_water",
                "subject": "self",
                "operator": "==",
                "value": false
            },
            {
                "test": "on_ground",
                "subject": "self",
                "operator": "==",
                "value": true
            },
            {
                "test": "is_underground",
                "subject": "self",
                "operator": "==",
                "value": true
            },
            {
                "test": "weather_at_position",
                "subject": "self",
                "operator": "!=",
                "value": "thunderstorm"
            }
        ]
    },
    "wake_mob_exceptions": {
        "any_of": [
            {
                "test": "trusts",
                "subject": "other",
                "operator": "==",
                "value": true
            },
            {
                "test": "is_family",
                "subject": "other",
                "operator": "==",
                "value": "sleeping_entity"
            },
            {
                "test": "is_sneaking",
                "subject": "other",
                "operator": "==",
                "value": true
            }
        ]
    }
}
```

如果您还想使用信任机制，请添加：

<CodeHeader>BP/entities/sleeping_entity.json#components</CodeHeader>

```json
"minecraft:trust": {}
```

### 资源包

在您的资源包中，您可以在实体开始入睡时运行动画。

<CodeHeader>RP/animations_controllers/ac.sleeping_entity.sleep.json</CodeHeader>

```json
{
    "format_version": "1.10.0",
    "animation_controllers": {
        "controller.animation.sleeping_entity.sleep": {
            "initial_state": "default",
            "states": {
                "default": {
                    "transitions": [
                        {
                            "sleep": "q.is_sleeping"
                        }
                    ]
                },
                "sleep": {
                    "animations": ["sleeping"],
                    "transitions": [
                        {
                            "default": "!q.is_sleeping"
                        }
                    ]
                }
            }
        }
    }
}
```

最后，您需要为实体创建并注册一个睡眠动画。如果您不知道如何操作，请查看 [BlockBench 页面](/guide/blockbench#animating)。
