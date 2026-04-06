---
title: 创建自定义实体
category: 指南
description: 如何创建你的第一个自定义实体。
nav_order: 6
prefix: "6. "
mentions:
    - ThijsHankelMC
    - TheItsNameless
    - SmokeyStack
    - MedicalJewel105
    - SirLich
    - ChibiMango
    - smell-of-curry
    - Hatchibombotar
    - Sephodious
    - LeGend077
    - Ascent817
    - BaHuu
    - Sprunkles137
    - ThomasOrs
    - QuazChick
---

与自定义物品类似，我们也可以创建具有与游戏中原版实体许多类似机制的自定义实体。这些实体可以非常强大，允许你制作可以繁殖和驯服的自己的动物，或者攻击它看到的任何东西的敌对生物。

在这里，我们将制作一个鬼魂实体，它会漂浮、攻击玩家并在其死亡时掉落我们的灵质物品。

<WikiImage src="ghost_view.png" width="150" />

和物品一样，实体由两部分组成：

-   视觉外观（纹理、名称、动画、声音）
-   行为（移动、攻击）

但不同的是，我们需要为实体创建两个主要文件，称为_服务器_文件和_客户端_文件，它们分别位于我们的 BP 和 RP 中。
我们还需要额外的文件来描述我们实体的几何体及其动画，但我们将在后面的部分中介绍这些。

首先，我们将介绍如何创建实体并定义其行为。接下来，我们将看看如何添加视觉外观。

## 实体行为

和物品一样，我们需要一个文件来告诉我们的实体如何表现，该文件将标识符指向定义行为的某些组件。这个文件将与我们的物品行为文件非常相似，但包含更多组件。

我们在 BP 中的 `BP/entities/` 文件夹下定义我们的服务器文件。我们将这个文件称为 `ghost.se.json`。这里的 `.se` 代表 _server entity_。这是为了清晰起见，并在[样式指南](/meta/style-guide)中推荐。

这是文件的基本概述：

<CodeHeader>BP/entities/ghost.se.json</CodeHeader>

```json
{
    "format_version": "1.21.70",
    "minecraft:entity": {
        "description": { ... },
        "components": { ... }
    }
}
```

就像物品一样，我们有格式版本，这里我们有 `"minecraft:entity"`，因为这是一个实体文件。从现在开始，我们不会再对格式版本进行注释，并建议使用我们给出的版本示例。

对于实体，我们在 `description` 下有更多信息：

<CodeHeader>BP/entities/ghost.se.json#minecraft:entity</CodeHeader>

```json
"description": {
    "identifier": "wiki:ghost",
    "is_summonable": true,
    "is_spawnable": true
}
```

`identifier` 键的作用相同，用于指向我们正在讨论的实体。
其他键决定了我们可以将实体添加到世界的方式：

-   `is_summonable`：是否可以使用 `/summon` 命令召唤它。
-   `is_spawnable`：是否可以使用刷怪蛋或生成规则在世界生成它。

我们建议将设置保持原样，因为任何更改都会使在游戏中测试实体变得更加困难。

### 组件

实体比物品有更多的行为，所以我们需要为它定义更多的组件。
我们将把我们要使用的组件类型分解为类别，然后更仔细地查看它们。
有关实体组件的更多信息，你可以查看我们的页面[这里](/entities/entity-intro-bp)。

### 属性组件

这些是你通常在每个实体上都有的组件。这为你的实体定义了一些核心属性。

<CodeHeader>BP/entities/ghost.se.json#minecraft:entity#components</CodeHeader>

```json
"minecraft:type_family": {
    "family": ["ghost", "monster"]
},
"minecraft:health": {
    "value": 20,
    "max": 20
},
"minecraft:attack": {
    "damage": 3
},
"minecraft:movement": {
    "value": 0.2
},
"minecraft:collision_box": {
    "width": 0.8,
    "height": 1.8
},
"minecraft:loot": {
    "table": "loot_tables/entities/ghost.json"
},
```

组件 `minecraft:health`、`minecraft:attack` 和 `minecraft:movement` 简单明了，用于设置实体的生命值、攻击伤害和移动速度。实体的碰撞箱是实体与方块或其他实体交互或碰撞的箱子。这由 `minecraft:collision_box` 定义，它将使箱子以实体为中心。

`minecraft:type_family` 为实体添加家族标签。家族标签用于将实体归类到相似的类别中。例如 `monster` 包括僵尸、骷髅和苦力怕。这允许我们能够选择所有带有 `monster` 标签的实体。

`minecraft:loot` 定义实体死亡时掉落战利品表的路径。我们将在后面的部分中使用此路径创建这个战利品表。

### 移动组件

为了让实体能够移动，我们需要定义两件事，_如何_移动以及_到哪里_移动。这分别使用 `movement` 和 `navigation` 组件来定义。

如果希望实体能够移动，你将始终需要一个 `movement` 和 `navigation` 组件。

<CodeHeader>BP/entities/ghost.se.json#minecraft:entity#components</CodeHeader>

```json
"minecraft:physics": {},
"minecraft:jump.static": {},
"minecraft:movement.basic": {},
"minecraft:navigation.walk": {
    "can_walk": true,
    "avoid_sun": true,
    "can_pass_doors": true,
    "can_open_doors": true
}
```

`minecraft:physics` 用于为你的实体应用重力和碰撞。注意：你无法通过使用组件组更改此组件。
`minecraft:jump.static` 允许你的实体跳上方块以穿过障碍物。这两个组件几乎每个实体都会使用。

有几种不同类型的移动组件，允许不同类型的移动，例如海豚使用的 `minecraft:movement.swim`、鹦鹉使用的 `minecraft:movement.fly` 和蜜蜂使用的 `minecraft:movement.hover`。
`minecraft:movement.basic` 组件允许我们的实体通过在方块上移动来行走。为了让我们的实体看起来真的在漂浮，我们将使用我们的几何体。

导航组件是一个寻路者，定义我们允许实体遵循的路径。例如，骷髅会尽量不在阳光下行走，所以它们的寻路会阻止它们采取会将它们置于阳光下的路径。此外，鹦鹉可以飞，所以它们可以进入空中，这与行走的生物不同。

这些组件有许多不同的设置，允许有趣的寻路。我们选择的设置让我们的鬼魂沿着地面行走，避免踏入阳光，穿过门道并打开门。

### 行为组件

虽然我们已经定义了实体_如何_做事情，但我们还没有定义它们_什么时候_或_做什么_。这就是 `.behavior` 组件的用武之地。这些组件定义我们的实体将执行的特定操作。
例如，村民会尝试繁殖，所以他们有 `minecraft:behavior.breed` 组件，而被驯服的狼会跟随它们的主人，所以它们有 `minecraft:behavior.follow_owner` 组件。

我们希望我们的鬼魂能够闲逛和环顾四周，在附近时锁定玩家，然后攻击他们。以下是我们使用的组件：

<CodeHeader>BP/entities/ghost.se.json#minecraft:entity#components</CodeHeader>

```json
// 允许随机移动和环顾四周
"minecraft:behavior.random_stroll": {...},
"minecraft:behavior.random_look_around": {...},
"minecraft:behavior.look_at_player": {...},
// 允许锁定目标
"minecraft:behavior.hurt_by_target": {...},
"minecraft:behavior.nearest_attackable_target": {...},
// 允许攻击
"minecraft:behavior.delayed_attack": {...}
```

第一个组件 `minecraft:behavior.random_stroll` 允许我们的实体定期选择附近的随机点进行寻路。这个路径是用我们的 `navigation` 组件创建的，然后移动类型由我们的 `movement` 组件定义。

接下来的两个组件允许我们的实体随机环顾四周，以及如果玩家在范围内则注视玩家。

对于攻击，为了让我们的实体攻击，它需要一个 `target`。两种行为 `minecraft:behavior.hurt_by_target` 和 `minecraft:behavior.nearest_attackable_target` 将导致实体锁定任何伤害它的实体，以及在其范围内最近的敌人。

最后，`minecraft:behavior.delayed_attack` 是我们的实体实际攻击目标的方式。

这些行为中的每一个都有进一步的设置来调整我们想要的确切行为。

<CodeHeader>BP/entities/ghost.se.json#minecraft:entity#components</CodeHeader>

```json
"minecraft:behavior.random_stroll": {
    "priority": 6,
    "speed_multiplier": 1
},
"minecraft:behavior.random_look_around": {
    "priority": 7
},
"minecraft:behavior.look_at_player": {
    "priority": 7,
    "look_distance": 6,
    "probability": 0.02
},
"minecraft:behavior.hurt_by_target": {
    "priority": 1
},
"minecraft:behavior.nearest_attackable_target": {
    "priority": 2,
    "within_radius": 25,
    "reselect_targets": true,
    "entity_types": [
        {
            "filters": {
                "any_of": [
                    {
                        "test": "is_family",
                        "subject": "other",
                        "value": "player"
                    }
                ]
            },
            "max_dist": 35
        }
    ]
},
"minecraft:behavior.delayed_attack": {
    "priority": 0,
    "attack_once": false,
    "track_target": true,
    "require_complete_path": false,
    "random_stop_interval": 0,
    "reach_multiplier": 1.5,
    "speed_multiplier": 1,
    "attack_duration": 0.75,
    "hit_delay_pct": 0.5
}
```

有关这些选项的更多详细信息，你可以阅读官方文档 [bedrock.dev](https://bedrock.dev/docs/stable/Entities)。

#### 优先级

所有行为都包含一个 `"priority"` 字段。该字段用于决定在许多行为可以运行时运行哪个行为。

当实体选择要做什么时，它会从最低优先级到最高优先级搜索所有行为，并选择第一个可以做的行为。出于这个原因，你需要使重要的行为（如 `minecraft:behavior.nearest_attackable_target`）的优先级低于行为（如 `minecraft:behavior.look_at_player`）。如果 `look_at_player` 行为优先级更低，它将始终首先运行，实体将永远不会攻击。

通常，重要的行为将具有 `0` 或 `1` 的优先级。

### 完整的实体服务器文件

<Spoiler title="完整的 ghost.se.json">

<CodeHeader>BP/entities/ghost.se.json</CodeHeader>

```json
{
    "format_version": "1.21.70",
    "minecraft:entity": {
        "description": {
            "identifier": "wiki:ghost",
            "is_summonable": true,
            "is_spawnable": true
        },
        "components": {
            "minecraft:type_family": {
                "family": ["ghost", "monster"]
            },
            "minecraft:health": {
                "value": 20,
                "max": 20
            },
            "minecraft:attack": {
                "damage": 3
            },
            "minecraft:movement": {
                "value": 0.2
            },
            "minecraft:collision_box": {
                "width": 0.8,
                "height": 1.8
            },
            "minecraft:loot": {
                "table": "loot_tables/entities/ghost.json"
            },
            "minecraft:physics": {},
            "minecraft:jump.static": {},
            "minecraft:movement.basic": {},
            "minecraft:navigation.walk": {
                "can_walk": true,
                "avoid_sun": true,
                "can_pass_doors": true,
                "can_open_doors": true
            },

            "minecraft:behavior.random_stroll": {
                "priority": 6,
                "speed_multiplier": 1
            },
            "minecraft:behavior.random_look_around": {
                "priority": 7
            },
            "minecraft:behavior.look_at_player": {
                "priority": 7,
                "look_distance": 6,
                "probability": 0.02
            },
            "minecraft:behavior.hurt_by_target": {
                "priority": 1
            },
            "minecraft:behavior.nearest_attackable_target": {
                "priority": 2,
                "within_radius": 25,
                "reselect_targets": true,
                "entity_types": [
                    {
                        "filters": {
                            "any_of": [
                                {
                                    "test": "is_family",
                                    "subject": "other",
                                    "value": "player"
                                }
                            ]
                        },
                        "max_dist": 35
                    }
                ]
            },
            "minecraft:behavior.delayed_attack": {
                "priority": 0,
                "attack_once": false,
                "track_target": true,
                "require_complete_path": false,
                "random_stop_interval": 0,
                "reach_multiplier": 1.5,
                "speed_multiplier": 1,
                "attack_duration": 0.75,
                "hit_delay_pct": 0.5
            }
        }
    }
}
```

</Spoiler>

这样我们就完成了实体行为文件。

更复杂的实体也可以有不同的_状态_，在不同的状态下它们会有不同的行为。例如，野狼会自由走动，但一旦被驯服，它就会跟随玩家。一个_事件_（被驯服）导致狼改变了_状态_。这个功能允许我们创建动态实体，当不同事件发生时可以执行不同的操作。你可以在我们的指南[这里](/entities/entity-intro-bp)了解更多相关信息。

如果你打开你的世界并尝试使用 `/summon wiki:ghost` 召唤你的实体，它应该会像我们预期的那样表现，但地面上只有一个阴影。你可能还会看到它的名称是一个翻译键，类似于我们的物品发生的情况。

接下来我们将学习如何创建我们的资源或客户端文件，以及如何分配我们的纹理、几何体和动画。

## 实体资源

为实体应用视觉外观与物品截然不同。由于有更多的部分，我们有一个单独的文件专门用于定义资源。
这被称为实体_客户端_文件，我们将其命名为 `ghost.ce.json`。这些文件位于 `RP/entity/` 文件夹中。

在本节中，我们将使用为我们的鬼魂实体创建的示例资源来演示如何将它们添加到实体。在指南的下一节中，我们将解释如何使用 Blockbench（一个专用的 3D 编辑器）创建你自己的实体几何体和动画。

### 模型

我们实体的"模型"是我们实体的形状，也称为"几何体"。这描述了我们实体的形状，就像猪是一个有 4 条腿和一个头的方块，而鸡有 2 条腿、一个头和翅膀。几何体存储在 `RP/models/entity/` 中的 JSON 文件中，我们将命名为 `ghost.geo.json`。

此文件由 Blockbench 为我们自动生成，因此无需手动学习其语法。因此，在查看文件时，我们不会深入了解细节。它存储了我们模型中每个方块的数据，例如大小、位置和旋转。

<CodeHeader>RP/models/entity/ghost.geo.json</CodeHeader>

```json
{
    "format_version": "1.12.0",
    "minecraft:geometry": [
        {
            "description": {
                "identifier": "geometry.ghost",
                "texture_width": 64,
                "texture_height": 64,
                "visible_bounds_width": 3,
                "visible_bounds_height": 3.5,
                "visible_bounds_offset": [0, 1.25, 0]
            },
            "bones": [
                { "name": "root", "pivot": [0, 3, 0] },
                {
                    "name": "body",
                    "parent": "root",
                    "pivot": [0, 4.625, 0],
                    "cubes": [
                        {
                            "origin": [-4, 3, -4],
                            "size": [8, 13, 8],
                            "uv": [0, 20]
                        }
                    ]
                },
                {
                    "name": "leftArm",
                    "parent": "body",
                    "pivot": [4.6, 15.5, 0.5],
                    "cubes": [
                        {
                            "origin": [4.1, 7, -1],
                            "size": [3, 9, 3],
                            "uv": [32, 32]
                        }
                    ]
                },
                {
                    "name": "rightArm",
                    "parent": "body",
                    "pivot": [-4.5, 15.5, 0.5],
                    "cubes": [
                        {
                            "origin": [-7.1, 7, -1],
                            "size": [3, 9, 3],
                            "uv": [32, 20]
                        }
                    ]
                },
                {
                    "name": "head",
                    "parent": "body",
                    "pivot": [0, 16, 0],
                    "cubes": [
                        {
                            "origin": [-5, 16, -5],
                            "size": [10, 10, 10],
                            "uv": [0, 0]
                        }
                    ]
                }
            ]
        }
    ]
}
```

我们需要的重要信息是 `identifier`，我们将使用它来引用我们的几何体文件，这里是 `geometry.ghost`。

### 纹理

现在我们的实体有了形状，但它还需要一个纹理。这个纹理也可以在 Blockbench 中创建，只是一个 `.png` 文件。

`RP/textures/wiki/entity/ghost.png`

![ghost.png](https://raw.githubusercontent.com/Bedrock-OSS/bedrock-examples/main/resources/guide/rp/textures/wiki/entity/ghost.png)

<Button link="https://raw.githubusercontent.com/Bedrock-OSS/bedrock-examples/main/resources/guide/rp/textures/wiki/entity/ghost.png">
    在此处下载纹理
</Button>

你可能还记得，当我们制作物品时，我们为纹理分配了一个短名称以便稍后引用。我们将在实体文件中为实体做类似的事情，所以请确保你保留了对纹理的文件路径。

### 动画

动画允许我们的实体具有更多活力并以不同的方式移动。我们可以为实体拥有任意多的动画，我们也可以使用_动画控制器_在不同类型触发它们，这我们将在下一节介绍。

根据你的实体，你可能需要不同的动画。对于我们的鬼魂，我们将有一个 `idle`、`attack` 和 `move` 动画。这些文件也在 Blockbench 中自动创建，因此我们不会完整地研究它。

动画文件可以包含一个或多个动画。我们的动画都将在一个名为 `ghost.a.json` 的文件中，位于 `RP/animations/` 下。

<CodeHeader>RP/animations/ghost.a.json</CodeHeader>

```json
{
    "format_version": "1.8.0",
    "animations": {
        "animation.ghost.idle": {...},
        "animation.ghost.attack": {...},
        "animation.ghost.move": {...}
    }
}
```

每个动画都由键定义，所以这里我们的三个动画标识符是 `animation.ghost.idle`、`animation.ghost.attack` 和 `animation.ghost.move`。

:::tip 注意
如果你为一个实体有多个动画文件，考虑将它们全部放入一个文件中以保持你的文件夹易于阅读和导航。
如果不是，确保在实体文件中引用动画时，你使用的是动画标识符_而不是_文件名。
:::

<Spoiler title="完整的动画文件">

<CodeHeader>RP/animations/ghost.a.json</CodeHeader>

```json
{
    "format_version": "1.8.0",
    "animations": {
        "animation.ghost.idle": {
            "loop": true,
            "animation_length": 3,
            "bones": {
                "body": {
                    "rotation": { "0.0": [10, 0, 0], "3.0": [10, 0, 0] },
                    "position": {
                        "0.0": [0, 0, 0],
                        "1.5": [0, 1, 0],
                        "3.0": [0, 0, 0]
                    }
                },
                "leftArm": {
                    "rotation": {
                        "0.0": [-10, 0, 0],
                        "1.5": [-5, 0, 0],
                        "3.0": [-10, 0, 0]
                    }
                },
                "rightArm": {
                    "rotation": {
                        "0.0": [-10, 0, 0],
                        "1.5": [-5, 0, 0],
                        "3.0": [-10, 0, 0]
                    }
                },
                "head": {
                    "rotation": {
                        "0.0": [-7.5, 0, 0],
                        "1.5": [-2.5, 0, 0],
                        "3.0": [-7.5, 0, 0]
                    }
                }
            }
        },
        "animation.ghost.attack": {
            "animation_length": 0.75,
            "bones": {
                "body": {
                    "rotation": {
                        "0.0": [10, 0, 0],
                        "0.2917": [10, 15, 0],
                        "0.5": [22.5, -12.5, 0],
                        "0.75": [10, 0, 0]
                    },
                    "position": {
                        "0.0": [0, 0, 0],
                        "0.2917": [0, 0, 3],
                        "0.5": [0, 0, -3],
                        "0.75": [0, 0, 0]
                    }
                },
                "leftArm": {
                    "rotation": { "0.0": [-10, 0, 0], "0.75": [-10, 0, 0] }
                },
                "rightArm": {
                    "rotation": {
                        "0.0": [-10, 0, 0],
                        "0.2083": [-10, 0, 0],
                        "0.2917": [-10, 62.5, 117.5],
                        "0.5": [-80, -17.5, 22.5],
                        "0.75": [-10, 0, 0]
                    }
                },
                "head": {
                    "rotation": { "0.0": [-7.5, 0, 0], "0.75": [-7.5, 0, 0] }
                }
            }
        },
        "animation.ghost.move": {
            "loop": true,
            "animation_length": 1,
            "bones": {
                "body": {
                    "rotation": {
                        "0.0": [15, 0, 0],
                        "0.25": [15, -2.5, 0],
                        "0.5": [15, 0, 0],
                        "0.75": [15, 2.5, 0],
                        "1.0": [15, 0, 0]
                    },
                    "position": [0, 0, 0]
                },
                "leftArm": {
                    "rotation": {
                        "0.0": [15, 0, 0],
                        "0.5": [20, 0, 0],
                        "1.0": [15, 0, 0]
                    }
                },
                "rightArm": {
                    "rotation": {
                        "0.0": [15, 0, 0],
                        "0.5": [20, 0, 0],
                        "1.0": [15, 0, 0]
                    }
                },
                "head": {
                    "rotation": {
                        "0.0": [-12.5, 0, 0],
                        "0.5": [-15, 0, 0],
                        "1.0": [-12.5, 0, 0]
                    }
                }
            }
        }
    }
}
```

</Spoiler>

### 动画控制器

我们有动画，但我们的实体不会知道何时播放它们。这就是使用动画控制器的地方。这些控制器在核心上_控制_如何播放动画。
动画控制器由_状态_和_状态之间的转换_组成。这允许我们在实体处于某些状态时播放某些动画，我们可以在满足某些条件时在它们之间转换。

例如，当实体正在移动时，转换到播放 `move` 动画的移动状态。或者当实体正在攻击时，转换到播放 `attack` 动画的攻击状态。

让我们看看我们的攻击动画控制器。

<CodeHeader>RP/animation_controllers/ghost.ac.json#animation_controllers</CodeHeader>

```json
"controller.animation.ghost.attack": {
    "states": {
        "default": {
            "transitions": [
                {
                    "attacking": "q.is_delayed_attacking"
                }
            ]
        },
        "attacking": {
            "blend_transition": 0.2,
            "animations": ["attack"],
            "transitions": [
                {
                    "default": "!q.is_delayed_attacking"
                }
            ]
        }
    }
}
```

我们可以看到我们有两个状态，`default` 和 `attacking`。我们的实体从默认状态开始。

你可以在 `transitions` 下看到一个条件，当条件为真时，它将实体转换到某个状态。

<CodeHeader></CodeHeader>

```json
{
    "attacking": "q.is_delayed_attacking"
}
```

这里，`attacking` 是要转换到的状态，而 `q.is_delayed_attacking` 是需要为真才能发生转换的条件。
这个条件被称为_查询_。这些查询可以告诉我们关于实体的信息，比如它是否在攻击或移动。查询 `q.is_delayed_attacking` 将在实体执行攻击行为时返回 `true`。

当实体处于 `attacking` 状态时，它也有一个转换回默认状态的转换。现在条件是 `!q.is_delayed_attacking`。这里的 `!` 表示_非_，所以它将返回与 `q.is_delayed_attacking` 相反的结果（如果 `q.is_delayed_attacking` 返回 `true`，那么 `!q.is_delayed_attacking` 返回 false）。

这个状态也有 `animations`。这些是在此状态下始终播放的动画。请注意，我们在这里使用的是我们稍后将在实体文件中引用的动画的_短名称_。如果不这样做，动画将不会播放。
还有 `blend_transition` 键，允许动画缓慢地相互淡入。数字越高意味着混合时间越长。

我们也可以为我们的 `move` 和 `idle` 动画制作类似的控制器。

<CodeHeader>RP/animation_controllers/ghost.ac.json#animation_controllers</CodeHeader>

```json
"controller.animation.ghost.walk": {
    "initial_state": "standing",
    "states": {
        "standing": {
            "blend_transition": 0.2,
            "animations": ["idle"],
            "transitions": [
                {
                    "moving": "q.modified_move_speed > 0.1"
                }
            ]
        },
        "moving": {
            "blend_transition": 0.2,
            "animations": ["move"],
            "transitions": [
                {
                    "standing": "q.modified_move_speed < 0.1"
                }
            ]
        }
    }
}
```

这遵循类似的模式并有一些增加。
我们现在有 `initial_state` 告诉控制器从哪个状态开始。如果未列出，它将从 `default` 状态开始。
你还会注意到我们的查询看起来略有不同。这里的查询 `q.modified_move_speed` 返回一个值，因此为了返回布尔值（即 true 或 false），我们查看值是高于还是低于 `0.1`。有关动画控制器的更深入信息，你可以阅读[这里](/animation-controllers/animation-controllers-intro)。

现在我们有了动画控制器，我们可以将它们添加到我们的动画控制器文件中。与动画一样，键是我们动画控制器的标识符；`controller.animation.ghost.attack` 和 `controller.animation.ghost.walk`。

我们的文件将称为 `ghost.ac.json`，将放在 `RP/animation_controllers/` 中。

<CodeHeader>RP/animation_controllers/ghost.ac.json</CodeHeader>

```json
{
    "format_version": "1.12.0",
    "animation_controllers": {
        "controller.animation.ghost.attack": {
            "states": {
                "default": {
                    "transitions": [
                        {
                            "attacking": "q.is_delayed_attacking"
                        }
                    ]
                },
                "attacking": {
                    "blend_transition": 0.2,
                    "animations": ["attack"],
                    "transitions": [
                        {
                            "default": "!q.is_delayed_attacking"
                        }
                    ]
                }
            }
        },
        "controller.animation.ghost.walk": {
            "initial_state": "standing",
            "states": {
                "standing": {
                    "blend_transition": 0.2,
                    "animations": ["idle"],
                    "transitions": [
                        {
                            "moving": "q.modified_move_speed > 0.1"
                        }
                    ]
                },
                "moving": {
                    "blend_transition": 0.2,
                    "animations": ["move"],
                    "transitions": [
                        {
                            "standing": "q.modified_move_speed < 0.1"
                        }
                    ]
                }
            }
        }
    }
}
```

这样，我们就创建了实体所需的所有资源。我们现在将创建我们的实体文件。

### 实体客户端文件

客户端文件包含我们实体视觉组件的所有引用。
我们的客户端文件将放在 `RP/entity/` 中，我们将其命名为 `ghost.ce.json`。这个文件将在 `description` 键下包含我们所有的信息。我们从熟悉的格式开始：

<CodeHeader>RP/entity/ghost.ce.json</CodeHeader>

```json
{
    "format_version": "1.10.0",
    "minecraft:client_entity": {
        "description": {
            "identifier": "wiki:ghost"
        }
    }
}
```

我们使用与行为文件相同的标识符，以便指向正确的实体。

首先，我们需要定义文件中实体的视觉外观，这样我们就知道我们使用的是哪些模型和纹理。我们还需要对动画和动画控制器做同样的事情。

#### 渲染控制器

为了显示我们的实体，它需要被_渲染_。为此，它需要材质、纹理和几何体。我们已经制作了纹理和几何体。材质定义我们的纹理将如何显示。例如，骷髅使用材质允许透明度，末影人使用材质允许它的眼睛发光。

由于我们的鬼魂有一些透明度，我们需要一个能正确渲染它的材质。幸运的是，Minecraft 有许多预建的材质供我们使用，例如 `entity_alphatest` 可以让我们做到这一点。你可以创建自己的材质，但请注意这非常高级。如果你感兴趣，可以从[这里](/documentation/materials)开始。

为了现在使用这些资源，我们需要使用短名称定义对它们的引用。这类似于我们在 `item_texture.json` 文件中为物品做的那样，不同之处是我们这里在实体客户端文件中做。以下是布局。

<CodeHeader>RP/entity/ghost.ce.json</CodeHeader>

```json
{
    "format_version": "1.10.0",
    "minecraft:client_entity": {
        "description": {
            "identifier": "wiki:ghost",
            "materials": {
                "default": "entity_alphatest"
            },
            "textures": {
                "default": "textures/wiki/entity/ghost"
            },
            "geometry": {
                "default": "geometry.ghost"
            }
        }
    }
}
```

这里我们为每个类别分配了 `default` 作为我们每个资源的短名称，确保使用正确的路径和标识符。我们可以定义多个这些，尽管那更高级。现在我们可以使用这些短名称来引用我们的资源。

为了渲染这些资源，我们需要告诉游戏在什么环境中渲染它们。这由_渲染控制器_控制。控制器告诉游戏为实体渲染什么几何体、材质和纹理，以便我们在游戏中看到它。

渲染控制器在一个单独的文件中定义，并使用我们在实体文件中定义的短名称。
该文件称为 `ghost.rc.json`，位于 `RP/render_controllers/` 下：

<CodeHeader>RP/render_controllers/ghost.rc.json</CodeHeader>

```json
{
    "format_version": "1.10.0",
    "render_controllers": {
        "controller.render.ghost": {
            "geometry": "geometry.default",
            "materials": [
                {
                    "*": "material.default"
                }
            ],
            "textures": ["texture.default"]
        }
    }
}
```

这遵循与动画控制器和动画文件类似的结构，我们的渲染控制器标识符是 `controller.render.ghost`。
这告诉游戏应该渲染的是具有短名称 `default` 的资源。渲染控制器还可以让你显示不同的纹理或将不同的材质应用到我们模型的不同部分。在 `materials` 下，我们使用 `"*"` 来表示我们将此材质应用到我们模型中的所有_骨骼_（即我们模型中的每个方块）。有关渲染控制器的更多信息，你可以查看我们的页面[here](/entities/render-controllers)。

:::tip
如果保持你的短名称一致，你实际上可以为多个实体引用相同的渲染控制器。
:::

现在告诉你的实体使用这个渲染控制器，我们将其添加到我们的实体文件中，如下所示：

<CodeHeader>RP/entity/ghost.ce.json#description</CodeHeader>

```json
"render_controllers": ["controller.render.ghost"]
```

这样我们的实体文件应该看起来像这样。

<CodeHeader>RP/entity/ghost.ce.json</CodeHeader>

```json
{
    "format_version": "1.10.0",
    "minecraft:client_entity": {
        "description": {
            "identifier": "wiki:ghost",
            "materials": {
                "default": "entity_alphatest"
            },
            "textures": {
                "default": "textures/wiki/entity/ghost"
            },
            "geometry": {
                "default": "geometry.ghost"
            },
            "render_controllers": ["controller.render.ghost"]
        }
    }
}
```

现在如果我们将实体生成到世界中，我们应该能够看到它。

#### 脚本

现在让我们添加我们的动画。和我们其他资源一样，我们需要为它们定义短名称。请记住，我们还需要为动画控制器定义短名称。

<CodeHeader>RP/entity/ghost.ce.json#description</CodeHeader>

```json
"animations": {
    "walk_controller": "controller.animation.ghost.walk",
    "attack_controller": "controller.animation.ghost.attack",
    "attack": "animation.ghost.attack",
    "idle": "animation.ghost.idle",
    "move": "animation.ghost.move"
}
```

你可能还记得，这些是我们动画控制器中使用的短名称；我们想要在动画控制器中使用的任何动画都必须在实体客户端文件中用短名称定义。

现在我们有了动画和动画控制器的引用，我们需要决定实体何时运行它们。这是使用 `scripts` 完成的：

<CodeHeader>RP/entity/ghost.ce.json#description</CodeHeader>

```json
"scripts": {
    "animate": [
        "walk_controller",
        "attack_controller"
    ]
}
```

这里，`scripts` 告诉实体在特定时间执行某些操作。`animate` 键将运行每个 tick 引用的任何动画或控制器。这意味着每 tick 我们的动画控制器都会检查是否转换到新状态并执行它们所在状态的任何动画。

这样我们的动画应该正常工作。

#### 刷怪蛋

最终完成我们实体客户端文件的下一步是为我们的实体创建刷怪蛋。幸运的是，我们的文件可以使用 `spawn_egg` 键为我们生成一个。

<CodeHeader>RP/entity/ghost.ce.json#description</CodeHeader>

```json
"spawn_egg": {
    "overlay_color": "#bdd1d1",
    "base_color": "#9fb3b3"
}
```

这将生成一个刷怪蛋，使用时将召唤我们的实体。它使用 `base_color` 和 `overlay_color` 中的十六进制代码为蛋着色。如果你想要刷怪蛋的自定义图标，请改用 `texture` 键并输入你想要纹理的短名称。按照物品教程中关于如何为物品定义纹理短名称的方法。

```json
"spawn_egg": {
    "texture": "texture_shortname"
}
```

这样我们就完成了实体客户端文件。

<Spoiler title="完整的 ghost.ce.json">

<CodeHeader>RP/entity/ghost.ce.json</CodeHeader>

```json
{
    "format_version": "1.10.0",
    "minecraft:client_entity": {
        "description": {
            "identifier": "wiki:ghost",
            "materials": {
                "default": "entity_alphatest"
            },
            "textures": {
                "default": "textures/wiki/entity/ghost"
            },
            "geometry": {
                "default": "geometry.ghost"
            },
            "scripts": {
                "animate": ["walk_controller", "attack_controller"]
            },
            "animations": {
                "walk_controller": "controller.animation.ghost.walk",
                "attack_controller": "controller.animation.ghost.attack",
                "attack": "animation.ghost.attack",
                "idle": "animation.ghost.idle",
                "move": "animation.ghost.move"
            },
            "spawn_egg": {
                "overlay_color": "#bdd1d1",
                "base_color": "#9fb3b3"
            },
            "render_controllers": ["controller.render.ghost"]
        }
    }
}
```

</Spoiler>

### 实体名称

最后的步骤是将我们实体的名称添加到语言文件中。你可能还注意到如果你创建了刷怪蛋，它也会有一个名称的翻译键；我们也将添加这个。在 `en_US.lang` 中，确保为实体和实体刷怪蛋物品添加名称。它们应该看起来像这样：

<CodeHeader>RP/texts/en_US.lang</CodeHeader>

```lang
entity.wiki:ghost.name=Ghost
item.spawn_egg.entity.wiki:ghost.name=Ghost
```

## 概览

完成！你的实体现在应该显示在 Minecraft 中，包括所有行为和视觉外观，包括动画！你应该能够使用 `/summon` 召唤你的实体，或者在创造菜单中找到刷怪蛋。

你的文件夹结构应该如下所示：

<FolderView :paths="[
    'RP/animations/ghost.a.json',
    'RP/animation_controllers/ghost.ac.json',
    'RP/entity/ghost.ce.json',
    'RP/models/entity/ghost.geo.json',
    'RP/render_controllers/ghost.rc.json',
    'RP/textures/wiki/entity/ghost.png',
    'RP/textures/wiki/items/ectoplasm.png',
    'RP/textures/item_texture.json',
    'RP/texts/en_US.lang',
    'RP/texts/languages.json',
    'RP/manifest.json',
    'RP/pack_icon.png',
    'BP/entities/ghost.se.json',
    'BP/items/ectoplasm.json',
    'BP/texts/en_US.lang',
    'BP/texts/languages.json',
    'BP/manifest.json',
    'BP/pack_icon.png',
]" />

<Spoiler title="完整的 ghost.se.json">

<CodeHeader>BP/entities/ghost.se.json</CodeHeader>

```json
{
    "format_version": "1.21.70",
    "minecraft:entity": {
        "description": {
            "identifier": "wiki:ghost",
            "is_summonable": true,
            "is_spawnable": true
        },
        "components": {
            "minecraft:type_family": {
                "family": ["ghost", "monster"]
            },
            "minecraft:health": {
                "value": 20,
                "max": 20
            },
            "minecraft:attack": {
                "damage": 3
            },
            "minecraft:movement": {
                "value": 0.2
            },
            "minecraft:collision_box": {
                "width": 0.8,
                "height": 1.8
            },
            "minecraft:loot": {
                "table": "loot_tables/entities/ghost.json"
            },
            "minecraft:physics": {},
            "minecraft:jump.static": {},
            "minecraft:movement.basic": {},
            "minecraft:navigation.walk": {
                "can_walk": true,
                "avoid_sun": true,
                "can_pass_doors": true,
                "can_open_doors": true
            },
            "minecraft:behavior.random_stroll": {
                "priority": 6,
                "speed_multiplier": 1
            },
            "minecraft:behavior.random_look_around": {
                "priority": 7
            },
            "minecraft:behavior.look_at_player": {
                "priority": 7,
                "look_distance": 6,
                "probability": 0.02
            },
            "minecraft:behavior.hurt_by_target": {
                "priority": 1
            },
            "minecraft:behavior.nearest_attackable_target": {
                "priority": 2,
                "within_radius": 25,
                "reselect_targets": true,
                "entity_types": [
                    {
                        "filters": {
                            "any_of": [
                                {
                                    "test": "is_family",
                                    "subject": "other",
                                    "value": "player"
                                }
                            ]
                        },
                        "max_dist": 35
                    }
                ]
            },
            "minecraft:behavior.delayed_attack": {
                "priority": 0,
                "attack_once": false,
                "track_target": true,
                "require_complete_path": false,
                "random_stop_interval": 0,
                "reach_multiplier": 1.5,
                "speed_multiplier": 1,
                "attack_duration": 0.75,
                "hit_delay_pct": 0.5
            }
        }
    }
}
```

</Spoiler>

<Spoiler title="完整的 ghost.ce.json">

<CodeHeader>RP/entity/ghost.ce.json</CodeHeader>

```json
{
    "format_version": "1.10.0",
    "minecraft:client_entity": {
        "description": {
            "identifier": "wiki:ghost",
            "materials": {
                "default": "entity_alphatest"
            },
            "textures": {
                "default": "textures/wiki/entity/ghost"
            },
            "geometry": {
                "default": "geometry.ghost"
            },
            "scripts": {
                "animate": ["walk_controller", "attack_controller"]
            },
            "animations": {
                "walk_controller": "controller.animation.ghost.walk",
                "attack_controller": "controller.animation.ghost.attack",
                "attack": "animation.ghost.attack",
                "idle": "animation.ghost.idle",
                "move": "animation.ghost.move"
            },
            "spawn_egg": {
                "overlay_color": "#bdd1d1",
                "base_color": "#9fb3b3"
            },
            "render_controllers": ["controller.render.ghost"]
        }
    }
}
```

</Spoiler>

## 你目前的进度

:::tip 你已学到

-   [x] 设置你的包
-   [x] 创建自定义物品
-   [x] 创建自定义实体
-   [x] 如何为物品格式化行为和资源文件
-   [x] 如何设置实体的纹理
-   [x] 如何使用模型、动画和动画控制器让你的实体更加精彩
-   [ ] 创建实体的战利品、生成规则和自定义配方

:::

<Button link="/guide/loot-table">下一步：战利品表、生成规则和配方</Button>
