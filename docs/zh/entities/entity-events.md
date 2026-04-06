---
title: 实体事件
category: 通用
mentions:
    - ChibiMango
    - SirLich
    - Joelant05
    - MedicalJewel105
    - aexer0e
    - SmokeyStack
    - ThomasOrs
    - QuazChick
tags:
    - beginner
description: 学习实体最重要的东西之一 - 事件。
---

实体事件是组件和组件组的基本构建块之一。它们作为组件组的控制中心，可以从组件、动画、动画控制器和其他事件调用。本页面旨在涵盖如何在实体和其他实体中调用事件以及事件的格式。

## 事件响应

事件允许我们执行操作，例如从我们的实体添加和删除组件组，使我们能够在满足某些条件时改变实体的行为。它们被称为事件，因为我们可以在事件发生时激活它们，例如计时器用完、玩家与实体交互或环境发生变化时。触发事件时，它将执行所有列出的事件响应。

### 添加/删除

事件最基本和最常见的用途是直接添加和/或删除组件组。这些几乎总是在你的事件中使用，并与其他键结合使用。以下名为 `wiki:ranged_attacker` 的事件添加了两个组件组"attacker"和"ranged"，并删除了组"standby"和"melee"：

<CodeHeader>minecraft:entity > events</CodeHeader>

```json
"wiki:ranged_attacker": {
    "add": {
        "component_groups": [
            "attacker",
            "ranged"
        ]
    },
    "remove":{
        "component_groups": [
            "standby",
            "melee"
        ]
    }
}
```

:::tip
当你添加一个组件组时，如果当前活动的组件组其中包含相同的组件，它将被最近添加的组覆盖。
:::

### 队列命令

将命令排队到tick结束时由目标执行。

<CodeHeader>minecraft:entity > events</CodeHeader>

```json
"wiki:execute_event": {
    "queue_command": {
        "target": "self", // 可选 - 默认为'self'（目标为实体）
        "command": "summon pig"
    }
}
```

可以使用数组来排队多个命令：

<CodeHeader>minecraft:entity > events</CodeHeader>

```json
"wiki:execute_event": {
    "queue_command": {
        "target": "self", // 可选 - 默认为'self'（目标为实体）
        "command": [
            "summon pig",
            "say Everybody welcome the pig!"
        ]
    }
}
```

### 随机化

随机化是一个参数，可用于实体事件中，基于加权随机化来添加或删除组件组。当应该根据随机概率添加不同的组件组时，这是一个非常有用的工具。

牛内部的 `minecraft:entity_spawned` 事件使用随机化，给牛95%的几率生成成年牛，5%的几率生成牛宝宝（组件组 `minecraft:cow_adult` 和 `minecraft:cow_baby`）。

<CodeHeader>minecraft:entity > events</CodeHeader>

```json
"minecraft:entity_spawned": {
    "randomize": [
        {
            "weight": 95,
            "add": {
                "component_groups": [
                    "minecraft:cow_adult"
                ]
            }
        },
        {
            "weight": 5,
            "add": {
                "component_groups": [
                    "minecraft:cow_baby"
                ]
            }
        }
    ]
}
```

请注意，`randomize` 将只从选项池中选择一个选项。

### 序列/过滤器

序列是一个参数，可用于实体事件中，基于过滤器来添加或删除组件组。过滤器允许我们创建条件事件，只有满足条件时才会添加/删除组件组。僵尸内部的 `minecraft:convert_to_drowned` 事件使用 `sequence` 参数，根据僵尸是否是婴儿添加不同的组件组。

<CodeHeader>minecraft:entity > events</CodeHeader>

```json
"minecraft:convert_to_drowned": {
    "sequence": [
        {
            "filters": {
                "test": "has_component",
                "operator": "!=",
                "value": "minecraft:is_baby"
            },
            "add": {
                "component_groups": [
                    "minecraft:convert_to_drowned"
                ]
            },
            "remove": {
                "component_groups": [
                    "minecraft:start_drowned_transformation"
                ]
            }
        },
        {
            "filters": {
                "test":"has_component",
                "value":"minecraft:is_baby"
            },
            "add": {
                "component_groups": [
                    "minecraft:convert_to_baby_drowned"
                ]
            },
            "remove": {
                "component_groups": [
                    "minecraft:start_drowned_transformation"
                ]
            }
        }
    ]
}
```

此外，`sequence` 允许我们按顺序运行多个参数。它逐个评估每个部分，如果有效，则应用它。

:::tip
序列中的条目不是互斥的；如果其中一个过滤器通过，它不会阻止其他条目运行。在上述情况下，第一个条目中没有过滤器，因此它会自动运行。这不会阻止其他条目被检查，然后如果有效则运行。
:::

以下是使用序列结合过滤器、随机化和添加/删除组件组的详细示例：

<Spoiler title="序列示例">

此事件在实体被玩家或投射物击中时运行。有60%的几率什么都不发生，40%的几率激活攻击序列。此攻击序列根据实体的当前生命值（实体低于半血时给予较强攻击较高的几率）和到最近玩家的距离（玩家距离较远时远程攻击有较高优先级）选择随机攻击。

<CodeHeader>minecraft:entity > events</CodeHeader>

```json
"wiki:on_hit": {
    "randomize":[
        // 60%几率什么都不发生
        {
            "weight": 60
        },
        // 40%几率运行此条目
        {
            "weight": 40,
            "sequence": [
                // 运行所有攻击所需的事件
                {
                    "trigger": "attack_event"
                },
                // 如果实体未剪毛则运行（实体在半血以下时会被剪毛）
                {
                    "filters": {
                        "test": "has_component",
                        "operator": "!=",
                        "value": "minecraft:is_sheared"
                    },
                    "sequence": [
                        // 如果玩家在5方块内则运行
                        {
                            "filters": {
                                "test": "distance_to_nearest_player",
                                "operator": "<=",
                                "value": 5.0
                            },
                            "randomize": [
                                {
                                    "weight": 10,
                                    "add": {
                                        "component_groups": [
                                            "explode"
                                        ]
                                    }
                                },
                                {
                                    "weight": 60,
                                    "add": {
                                        "component_groups": [
                                            "attack"
                                        ]
                                    }
                                },
                                {
                                    "weight": 20,
                                    "add": {
                                        "component_groups": [
                                            "range_attack"
                                        ]
                                    }
                                },
                                {
                                    "weight": 10
                                }
                            ]
                        },
                        // 如果玩家超过5方块且实体仍有目标则运行
                        {
                            "filters": {
                                "all_of": [
                                    {
                                        "test": "distance_to_nearest_player",
                                        "operator": ">",
                                        "value": 5.0
                                    },
                                    {
                                        "test": "has_target",
                                        "operator": "equals",
                                        "value": true
                                    }
                                ]
                            },
                            "randomize": [
                                {
                                    "weight": 30,
                                    "add": {
                                        "component_groups": [
                                            "attack"
                                        ]
                                    }
                                },
                                {
                                    "weight": 60,
                                    "add":{
                                        "component_groups": [
                                            "range_attack"
                                        ]
                                    }
                                },
                                {
                                    "weight": 10
                                }
                            ]
                        }
                    ]
                },
                // 如果实体已剪毛（半血以下）则运行
                {
                    "filters": {
                        "test": "has_component",
                        "value": "minecraft:is_sheared"
                    },
                    "sequence": [
                        // 如果玩家在5方块内则运行
                        {
                            "filters": {
                                "test": "distance_to_nearest_player",
                                "operator": "<=",
                                "value": 5.0
                            },
                            "randomize": [
                                {
                                    "weight": 20,
                                    "add":{
                                        "component_groups": [
                                            "explode"
                                        ]
                                    }
                                },
                                {
                                    "weight": 60,
                                    "add": {
                                        "component_groups": [
                                            "strong_attack"
                                        ]
                                    }
                                },
                                {
                                    "weight": 20,
                                    "add": {
                                        "component_groups": [
                                            "strong_range_attack"
                                        ]
                                    }
                                }
                            ]
                        },
                        // 如果玩家超过5方块且实体仍有目标则运行
                        {
                            "filters": {
                                "all_of": [
                                    {
                                        "test": "distance_to_nearest_player",
                                        "operator": ">",
                                        "value": 5.0
                                    },
                                    {
                                        "test": "has_target",
                                        "operator": "equals",
                                        "value": true
                                    }
                                ]
                            },
                            "randomize": [
                                {
                                    "weight": 60,
                                    "add": {
                                        "component_groups": [
                                            "strong_range_attack"
                                        ]
                                    }
                                },
                                {
                                    "weight": 40,
                                    "randomize": [
                                        {
                                            "weight": 30,
                                            "trigger": "rapid_fire"
                                        },
                                        {
                                            "weight": 70,
                                            "add": {
                                                "component_groups": [
                                                    "strong_blast"
                                                ]
                                            }
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
}
```

</Spoiler>

### 设置属性

设置实体属性值（每个值可以设置为Molang表达式字符串的返回值）。

<CodeHeader>minecraft:block > events</CodeHeader>

<CodeHeader>minecraft:entity > events</CodeHeader>

```json
"wiki:change_properties": {
    "set_property": {
        "wiki:boolean_property_example": false,
        "wiki:integer_property_example": "q.property('wiki:integer_property_example') + 1",
        "wiki:string_property_example": "red"
    }
}
```

### 触发

触发是一个参数，可用于实体事件中，基于过滤器对选定目标运行其他事件。
我们可以使用它在实体中触发另一个事件，结合 `sequence` 可以让我们整齐地组织事件。

我们还可以为事件指定过滤器和目标。目标参数将在后面详细讨论。如果以下事件由 `minecraft:interact` 组件调用，那么如果与实体交互的实体具有家庭标签 `pig`，它将在与实体交互的播放器中运行事件 `wiki:interacted`。

<CodeHeader>minecraft:entity > events</CodeHeader>

```json
"wiki:on_interact": {
    "trigger": {
        "filters": {
            "test": "is_family",
            "subject": "self",
            "value": "pig"
        },
        "event": "wiki:interacted",
        "target": "other"
    }
}
```

:::tip
事件能够从调用它们的组件中保留实体上下文。例如，如果事件是使用 `minecraft:interact` 组件触发的，我们能够将过滤器应用到与实体交互的玩家。但是，如果调用事件的方法没有此上下文，使用目标将不起作用。
:::

结合序列参数，这允许我们在只要有上下文的情况下在多个实体中运行事件。我们将在目标部分更详细地讨论这个问题。

<CodeHeader>minecraft:entity > events</CodeHeader>

```json
"wiki:on_interact": {
    "sequence": [
        {
            "trigger": {
                "event": "wiki:interacted",
                "target": "other"
            }
        },
        {
            "trigger": {
                "event": "wiki:interacted_with",
                "target": "self"
            }
        }
    ]
}
```

## 调用事件

为了让事件运行，我们需要知道如何激活它，这是通过调用事件来完成的。有五种主要方式可以做到这一点：

-   在组件中
-   在动画中
-   在动画控制器中
-   在另一个事件中
-   使用命令

一些组件允许玩家根据设置的参数调用事件。在此输入我们希望在参数满足时运行的事件。例如，`minecraft:environment_sensor` 组件在僵尸中使用，当实体在水下时调用事件 `minecraft:start_transforming`。

<CodeHeader>minecraft:entity > components</CodeHeader>

```json
"minecraft:environment_sensor": {
    "triggers": {
        "filters": {
            "test": "is_underwater",
            "operator": "==",
            "value": true
        },
        "event": "minecraft:start_transforming"
    }
}
```

我们还可以在动画和动画控制器中直接在实体上运行事件。
这种基于行为的动画用于在10秒后调用事件 `wiki:start_pouncing`。

<CodeHeader></CodeHeader>

```json
"animation.entity.pounce_timer": {
    "timeline": {
        "10.0": "@s wiki:start_pouncing"
    },
    "animation_length": 10.1
}
```

这种基于行为的动画控制器用于在转换到"run"状态时调用事件 `wiki:running`。

<CodeHeader></CodeHeader>

```json
"controller.animation.entity.movement":{
    "initial_state":"walk",
    "states":{
        "walk":{
            "transitions":[
                {
                    "run":"q.is_sheared"
                }
            ]
        },
        "run":{
            "on_entry":[
                "@s wiki:running"
            ],
            "transitions":[
                {
                    "walk":"!q.is_sheared"
                }
            ]
        }
    }
}
```

这里的 `@s` 用于将事件应用到实体本身。动画控制器非常强大，可用于创建更自定义的行为，尽管它们更高级。在[此处](/animation-controllers/animation-controllers-intro)查看我们的页面了解更多信息

在事件中，除了添加和删除组件组，我们还可以 `trigger` 其他事件发生。
猪灵内部的事件从事件 `minecraft:entity_born` 调用事件 `spawn_baby`。

<CodeHeader>minecraft:entity > events</CodeHeader>

```json
"minecraft:entity_born": {
    "trigger": "spawn_baby"
}
```

我们还可以使用命令 `/event` 在实体上激活事件。以下会将组件组 `wiki:example` 添加到所有猪。
`/event entity @e[type=minecraft:pig] wiki:example`。

### 在其他实体中调用事件

某些组件（如伤害传感器）在调用事件时可以针对"self"以外的实体。一个特别设计的组件是用于在其他实体中调用事件：`minecraft:behavior.send_event`。我们将首先讨论这个组件。

`minecraft:behavior.send_event` 组件用于在唤魔师内部，在其激活范围内的任何蓝色绵羊中调用名为 `wololo` 的事件。

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.send_event": {
    "priority": 3,
    "event_choices": [
        {
            "min_activation_range": 0.0,
            "max_activation_range": 16.0,
            "cooldown_time": 5.0,
            "cast_duration": 3.0,
            "particle_color": "#FFB38033",
            "weight": 3,
            "filters": {
                "all_of": [
                    {
                        "test": "is_family",
                        "subject": "other",
                        "value": "sheep"
                    },
                    {
                        "test": "is_color",
                        "subject": "other",
                        "value": "blue"
                    }
                ]
            },
            "start_sound_event": "cast.spell",
            "sequence": [
                {
                    "base_delay": 2.0,
                    "event": "wololo",
                    "sound_event": "prepare.wololo"
                }
            ]
        }
    ]
}
```

你也可以在生成实体时调用事件。为此，在可以召唤实体的组件的字符串末尾添加 `<my:event_name>`。

<CodeHeader>BP/entities/zombie.json#component_groups/minecraft:convert_to_drowned</CodeHeader>

```json
"minecraft:transformation": {
    "into": "minecraft:drowned<minecraft:as_adult>",
    "transformation_sound": "convert_to_drowned",
    "drop_equipment": true,
    "delay": {
        "value":15
    }
}
```

### 目标

劫盗者内部的组件 `minecraft:damage_sensor` 在杀死它的玩家身上调用事件 `minecraft:gain_bad_omen`。注意事件的目标如何设置为"other"。

<CodeHeader></CodeHeader>

```json
"minecraft:damage_sensor": {
    "triggers": {
        "on_damage": {
            "filters": {
                "all_of": [
                    {
                        "test": "has_damage",
                        "value": "fatal"
                    },
                    {
                        "test": "is_family",
                        "subject": "other",
                        "value": "player"
                    }
                ]
            },
            "event": "minecraft:gain_bad_omen",
            "target": "other"
        }
    }
}
```

一些组件有这些 `targets`，每个都有某些可以使用的。例如，`minecraft:interact` 的目标可以是 `self` 或 `other`，其中 other 是与实体交互的实体。所有有效的组件都应该有 `self` 和 `target` 作为选项，其中 target 是目标实体。

### 内置事件

一般来说，使用原版生物的组件组将不起作用。例如，`minecraft:convert_to_drowned` 不会在你的实体中被调用，除非你使用上述方法之一调用它。但是，有少数事件在满足条件时会自动调用：

-   `minecraft:entity_spawned` : 在实体生成时调用。用于设置初始组件组。
-   `minecraft:entity_born` : 通过繁殖生成实体时调用。
-   `minecraft:entity_transformed` : 当另一个实体转换为此实体时调用。
-   `minecraft:on_prime` : 在实体的引信被点燃并准备好爆炸时调用。

这些使用的一个很好的例子是牛。这展示了如何确保牛在生成/转换时总是有 `minecraft:cow_adult` 或 `minecraft:cow_baby`。

<CodeHeader>BP/entities/cow.json#events</CodeHeader>

```json
"events": {
    "minecraft:entity_spawned": {
        "randomize": [
            {
                "weight": 95,
                "add": {
                    "component_groups": ["minecraft:cow_adult"]
                }
            },
            {
                "weight": 5,
                "add": {
                    "component_groups": ["minecraft:cow_baby"]
                }
        }
    },
    "minecraft:entity_born": {
        "add": {
            "component_groups": ["minecraft:cow_baby"]
        }
    },
    "minecraft:entity_transformed": {
        "add": {
            "component_groups": ["minecraft:cow_adult"]
        }
    }
}
```
