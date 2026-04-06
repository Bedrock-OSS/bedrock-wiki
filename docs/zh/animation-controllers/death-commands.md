---
title: 死亡命令
mentions:
    - SirLich
    - BlueFrog130
    - SmokeyStack
    - cda94581
    - MedicalJewel105
    - Kaioga5
    - TheItsNameless
    - QuazChick
description: 实体死亡时运行命令。
---

<Button link="animation-controllers-intro">了解更多关于动画控制器</Button>

我将"死亡效果"定义为"在实体死亡时执行某些操作"。有几种错误的实现方式应该避免：

- 在实体文件中检测死亡，添加组件，然后在动画控制器中尝试检测该组件。这是错误的，因为实体会在动画控制器有机会运行之前从世界中移除。
- 从外部来源检测实体死亡，例如使用计时命令方块。这种方法严格来说并不错误，在某些情况下甚至是首选的。但它成本高且容易出错。

## 使用 q.is_alive

创建死亡效果的最佳方法是使用 `is_alive` 查询。

只需创建一个基于 `is_alive` 的过渡的动画控制器。最后的 `on_entry` 会在实体从世界中移除之前运行，允许你运行命令。

这是一个示例动画控制器：

<CodeHeader>BP/animation_controllers/death.ac.json</CodeHeader>

```json
{
    "format_version": "1.10.0",
    "animation_controllers": {
        "controller.animation.death": {
            "initial_state": "default",
            "states": {
                "default": {
                    "transitions": [
                        {
                            "dead": "!q.is_alive"
                        }
                    ]
                },
                "dead": {
                    "on_entry": ["/say I am dead!"]
                }
            }
        }
    }
}
```

## 在玩家实体上使用

对于玩家实体，必须在第二个动画状态中添加额外的过渡，以确保状态在死亡之间重置：

<CodeHeader>BP/animation_controllers/death.ac.json</CodeHeader>

```json
{
    "format_version": "1.10.0",
    "animation_controllers": {
        "controller.animation.death": {
            "initial_state": "default",
            "states": {
                "default": {
                    "transitions": [
                        {
                            "dead": "!q.is_alive"
                        }
                    ]
                },
                "dead": {
                    "on_entry": ["/say I am dead!"],
                    "transitions": [
                        {
                            "default": "q.is_alive"
                        }
                    ]
                }
            }
        }
    }
}
```

## 使用 minecraft:on_death

你也可以在行为包的 `entity.json` 文件中使用 `minecraft:on_death` 组件，这是在死亡时运行命令的相当简单的方法。

首先将其添加到你的组件中，并使其对自己运行一个事件：

```json
"minecraft:on_death" : {
    "event": "wiki:on_death",
    "target": "self"
}
```

然后，在你的事件部分添加该事件：

```json
"wiki:on_death": {
    "queue_command": {
        "command": [
            "say I have died!"
        ]
    }
}
```

:::tip
使用这种方法，即使实体已死亡，你也可以向其添加分数和标签。
:::