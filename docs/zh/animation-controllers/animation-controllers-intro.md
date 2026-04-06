---
title: 动画控制器入门
nav_order: 1
tags:
    - guide
mentions:
    - SirLich
    - solvedDev
    - Joelant05
    - MedicalJewel105
    - stirante
    - cda94581
    - ThijsHankelMC
    - MetalManeMc
    - ThomasOrs
description: 动画控制器入门简介。
---

动画控制器（AC）是状态机，可用于资源包和行为包。在资源包中，动画控制器（RPAC）用于播放动画，在行为包（BPAC）中，它们用于播放命令和"动画"命令。

## 什么是状态机？

状态机是一种特殊的逻辑管理方式，依赖于一系列状态。每个状态有两个属性：

- 当前状态下要做什么
- 如何转移到其他状态

状态机在很多地方都有使用，特别是在经典编程中。它们不仅存在于 Minecraft 中！你可以在 [此处](https://www.itemis.com/en/yakindu/state-machine/documentation/user-guide/overview_what_are_state_machines)了解更多关于状态机的信息。

状态机一次只能处于一个状态。当状态机"运行"时，你可以将其视为从一个状态移动到另一个状态，执行内部的逻辑，然后按照`过渡`转到其他状态。

## 状态机示例

状态机有用的原因是，它们允许我们将动画自然地分解为逻辑流程，其中每个状态处理自己的动画和逻辑。

例如，假设你想为直升机制作旋转叶片的动画，但仅在地面时播放。你有两个状态：

- `地面状态`
- `飞行状态`

我们可以使用上述两个信息为这些状态添加注释：

- `地面状态`：
  - 不播放动画
  - 如果在空中，转换到 `飞行状态`
- `飞行状态`：
  - 播放飞行动画
  - 如果在地面，转换到 `地面状态`

这是状态机的可视化流程图：

![](two_state_FSM.png)

在此流程图中，状态由矩形表示，箭头表示从一个状态到另一个状态的_过渡_。

流程图是可视化多状态有限状态机的好方法，它允许你跟随动画的逻辑_流程_。让我们看一个更详细的示例，它添加了第三个 `explode` 状态：

![](three_state_FSM.png)

如你所见，状态可以同时转到多个状态。状态也可以是终点（因为直升机已损毁，不需要进一步的动画）。动画控制器的分支流程是它们强大的主要原因之一。

## 什么是动画控制器？

动画控制器是 Minecraft 状态机，允许我们播放动画和运行命令。动画控制器始终位于 `animation_controllers` 文件夹中，位于 RP 或 BP 中。

### 将控制器附加到实体

动画控制器在它们自己的文件中定义，必须在它们能够执行任何操作之前"附加"到实体。要将 AC 附加到实体，你必须做两件事：

- 为动画控制器定义一个短名称
- 通过 `scripts` 运行动画控制器

这是一个示例 `description`，展示了如何首先在 `animations` 中定义 AC，然后在 `scripts/animate` 中播放。

<CodeHeader>RP/entity/helicopter.ce.json 或 BP/entities/helicopter.se.json</CodeHeader>

```json
"description": {
	"identifier": "wiki:helicopter",
	"animations": {
		"blade_controller": "controller.animation.helicopter.blade"
	},
	"scripts": {
		"animate": [
			"blade_controller"
		]
	}
}
```

如果你想有条件地播放动画控制器，可以提供一个可选的 Molang 参数。如果参数计算为 true，控制器将播放：

<CodeHeader>RP/entity/helicopter.ce.json 或 BP/entities/helicopter.se.json</CodeHeader>

```json
"scripts": {
	"animate": [
		{
			// Only play the blade_controller if the helicopter has a rider.
			"blade_controller": "q.has_rider"
		}
	]
}
```

### 资源包动画控制器

资源包动画控制器位于 RP 中，可以附加到 RP 实体。它们允许你播放骨骼动画。

### 行为包动画控制器

行为包动画控制器位于 BP 中，可以附加到 BP 实体。它们允许你播放命令并向实体发送事件。

## 动画控制器示例

让我们看看上面状态机示例中的一个简单动画控制器：

### 简单示例

<CodeHeader>RP/animation_controllers/helicopter.ac.json</CodeHeader>

```json
{
    "format_version": "1.10.0",
    "animation_controllers": {
        "controller.animation.helicopter.blade": {
            "initial_state": "ground",
            "states": {
                "ground": {
                    "transitions": [
                        {
                            "flying": "!q.is_on_ground"
                        }
                    ]
                },
                "flying": {
                    "animations": ["flying"],
                    "transitions": [
                        {
                            "ground": "q.is_on_ground"
                        }
                    ]
                }
            }
        }
    }
}
```

这里有很多内容。让我们一步一步来分解。请记住两件事：

- 动画控制器是_状态列表_
- 每个状态包含两条信息：_在给定状态下做什么_，以及_如何转换到新状态_。

因此，这个特定示例包含两个状态：

- `ground`
- `flying`

你可以注意到 `"initial_state": "ground"` 意味着我们的动画控制器将以 `ground` 状态开始。

<CodeHeader>
    RP/animation_controllers/helicopter.ac.json#animation_controllers/controller.animation.helicopter.blade/states
</CodeHeader>

```json
"ground": {
    "transitions": [
        {
            "flying": "!q.is_on_ground"
        }
    ]
}
```

`ground` 状态包含一个_过渡_列表，这就是我们到达其他状态的方式。在这个例子中，默认状态说：当 `q.is_on_ground` 为 NOT true 时，转换到 `flying` 状态。换句话说 - 当我们飞入空中时开始飞行动画！

<CodeHeader>
    RP/animation_controllers/helicopter.ac.json#animation_controllers/controller.animation.helicopter.blade/states
</CodeHeader>

```json
"flying": {
    "animations": [
        "flying"
    ],
    "transitions": [
        {
            "ground": "q.is_on_ground"
        }
    ]
}
```

`flying` 状态也包含一个过渡列表。在这种情况下，它包含相反的过渡：当 `q.is_on_ground` 为 true 时，转换到 `ground` 状态。换句话说 - 当我们降落在地面时回到默认状态！

除了 `transition` 列表外，还有一个在状态内播放的 `animations` 列表。在这种情况下，播放 `flying` 动画。此动画需要在实体的定义文件中定义。

### 完整示例

这是上面第二个状态机的代码，这次有三个状态。这个示例说明了一些新概念：

- 具有多个过渡的状态
- 没有过渡的状态

<CodeHeader>RP/animation_controllers/helicopter.ac.json</CodeHeader>

```json
{
    "format_version": "1.10.0",
    "animation_controllers": {
        "controller.animation.helicopter.blade": {
            "initial_state": "ground",
            "states": {
                "ground": {
                    "transitions": [
                        {
                            "flying": "!q.is_on_ground"
                        },
                        {
                            "explode": "!q.is_alive"
                        }
                    ]
                },
                "flying": {
                    "animations": ["flying"],
                    "transitions": [
                        {
                            "ground": "q.is_on_ground"
                        },
                        {
                            "explode": "!q.is_alive"
                        }
                    ]
                },
                "explode": {
                    "animations": ["explode"]
                }
            }
        }
    }
}
```

## 资源包动画控制器

资源包动画控制器也可以运行声音和粒子。
在动画控制器中调用声音或粒子之前，需要在客户端实体文件中定义它们。

<CodeHeader>RP/entities/custom_tnt.json#minecraft:client_entity/description</CodeHeader>

```json
"sound_effects": {
    "explosion": "wiki.custom_tnt.explosion" //where wiki.custom_tnt.explosion is a sound defined in sound_definitions just like animation sounds.
},
"particle_effects": {
    "fuse_lit": "wiki:tnt_fuse_lit_particle"
}
```

然后你才能在动画控制器中调用它们：

<CodeHeader>
    RP/animation_controllers/custom_tnt.animation_controllers.json#controller.animation.custom_tnt
</CodeHeader>

```json
"states":{
    "default":{
        "transitions":[
            {
                "explode_state":"q.mark_variant == 1"
            }
        ]
    },
    "explode_state":{
        "sound_effects":[
            {
                "effect":"explosion"
            }
        ],
		"particle_effects": [
			{
				"effect": "fuse_lit"
				// "locator": "<bone>" Locator can also go here too
			}
		],
        "transitions":[
            {
                "default":"q.mark_variant == 0"
            }
        ]
    }
}
```

:::warning 警告！并非所有粒子都能在那里工作。如果有问题，请考虑尝试另一个粒子。例如，使用来自 blaze 动画控制器的粒子。
:::

## 行为包动画控制器

行为包动画控制器使用与资源包动画控制器相同的一般格式，不同之处在于它们不是触发动画，而是允许你触发命令、事件或执行 Molang 代码。一般来说，它们引入了两个新字段：

- `on_entry`：进入状态时要播放的命令
- `on_exit`：退出状态时要播放的命令

此上下文中的命令有三种不同的含义：

- 斜杠命令，如 `/say Hello there!`
- 实体上的事件触发器，如：`@s wiki:transform_into_plane`
- 任意 Molang 表达式，如 `v.tickets += 1;`（这在资源包动画控制器中也适用）

这是一个展示这些行为的示例 BP 动画控制器：

<CodeHeader>BP/animation_controllers/helicopter.ac.json</CodeHeader>

```json
{
    "format_version": "1.10.0",
    "animation_controllers": {
        "controller.animation.helicopter.commands": {
            "initial_state": "ground",
            "states": {
                "ground": {
                    "on_entry": ["/say I am now on the ground!"],
                    "transitions": [
                        {
                            "flying": "!q.is_on_ground"
                        }
                    ]
                },
                "flying": {
                    "on_entry": ["/say I am now in the air!"],
                    "transitions": [
                        {
                            "ground": "q.is_on_ground"
                        }
                    ]
                }
            }
        }
    }
}
```

## 动画控制器流程

通过这些示例，希望你开始对动画控制器流程的工作原理有了一些概念。在本节中，我将更详细地解释它。

### 加载

当实体加载到世界时，它将在每个附加的动画控制器中进入默认动画控制器状态。如果没有定义 `initial_state`，则使用名为 `default` 的状态。如果缺少此状态，AC 将生成内容日志。

运行时，AC 将在每个刻执行以下操作：

1. 运行当前状态中的任何动画（如果设置为循环则循环，否则只播放一次）。如果刚进入状态，则运行 `on_entry` 中的任何命令。
2. 检查所有过渡，查看是否有任何有效的过渡。从列表顶部搜索到底部，然后移动到第一个有效的过渡。如果找到过渡，将播放 `on_exit` 命令。

由于动画控制器的设置方式，它每刻最多只能从一个状态转换到另一个状态。

### 重置

当实体重新加载（玩家加入/离开、区块重新加载等）时，动画控制器会"重置"。这意味着它将"跳回"默认状态。你应该在默认状态中始终有逻辑来处理任何关键动画的重新启动。

## 备注

你也可以在动画控制器中创建变量（并重映射它们的值）！

```json
{
    "format_version": "1.17.30",
    "animation_controllers": {
        "controller.animation.sheep.move": {
            "states": {
                "default": {
                    "variables": {
                        "ground_speed_curve": {
                            "input": "q.ground_speed",
                            "remap_curve": {
                                "0.0": 0.2,
                                "1.0": 0.7
                            }
                        }
                    },
                    "animations": [
                        "wiggle_nose",
                        {
                            "walk": "v.ground_speed_curve"
                        }
                    ]
                }
            }
        }
    }
}
```