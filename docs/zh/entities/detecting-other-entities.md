---
title: 检测其他实体
category: 教程
tags:
    - intermediate
mentions:
    - ANightDazingZoroark
    - SmokeyStack
    - MedicalJewel105
    - SirLich
    - Lufurrius
    - TheItsNameless
    - QuazChick
description: 当其他实体靠近时触发事件。
---

你可能想过让你的实体在其他实体靠近时触发事件。本文详细介绍了实现这一点的各种已知方法。

## 实体传感器

这可能是检测其他实体最基本的方法。主要问题在于它只接受一个条目，而且测试实体是否超出范围会非常棘手。因为它是一个实体组件，你可以直接将其放入实体行为文件中并编辑 Minecraft 过滤器。以下是一个演示：

<CodeHeader>BP/entities/my_entity.json#components</CodeHeader>

```json
"minecraft:entity_sensor": {
    "sensor_range": 2.5, //这是检测其他实体的半径（以方块为单位）
    "relative_range": false, //如果为 true，传感器范围会在实体碰撞箱大小的基础上累加
    "require_all": true, //如果为 true，所有附近实体都必须通过过滤条件才会发送事件
    "minimum_count": 1, //触发事件所需的最少实体数量。默认为 1
    "maximum_count": 4, //触发事件所需的最大实体数量。默认为 -1，表示无限
    "event_filters": { //你可以在这里放置任何过滤器，本例中使用的过滤器仅检测玩家
        "test": "is_family",
        "subject": "other",
        "value": "player"
    },
    "event": "event:on_player_detected" //当 event_filters 中的所有条件都满足时触发的事件
}
```

## 执行命令

使用 `/execute` 命令，你可以在其他实体靠近时执行命令。

接下来你将跟随的示例会让猪在检测到玩家时说"oink oink"，不过你可以将其替换为任何你想要的内容。首先，复制粘贴以下 BP 动画。

<CodeHeader>BP/animations/detection_animation.json</CodeHeader>

```json
{
    "format_version": "1.10.0",
    "animations": {
        "animation.pig.find_player": {
            "animation_length": 0.05,
            "loop": true,
            "timeline": {
                "0": [
                    "/execute as @s if entity @e[type=player, r=4] run event entity @s wiki:player_detected"
                ]
            }
        },
        "animation.pig.find_no_player": {
            "animation_length": 0.05,
            "loop": true,
            "timeline": {
                "0": [
                    "/execute as @s unless entity @e[type=player, r=4] run event entity @s wiki:no_player_detected"
                ]
            }
        }
    }
}
```

第一个用于检测实体是否存在，另一个用于检测实体是否不存在。`/execute` 命令中 `/event` 部分使用的事件可用于添加[虚拟组件](/entities/dummy-components)或更新[Actor 属性](https://learn.microsoft.com/en-us/minecraft/creator/documents/introductiontoentityproperties)。

接下来，复制粘贴以下 BP 动画控制器。这里假设你已将 `/execute` 命令中 `/event` 部分设置为添加或移除 `minecraft:is_sheared`。

<CodeHeader>BP/animation_controllers/pig_animation_controllers.json</CodeHeader>

```json
{
    "format_version": "1.10.0",
    "animation_controllers": {
        "controller.animation.pig_find_player": {
            "initial_state": "default",
            "states": {
                "default": {
                    "animations": ["find_player"],
                    "transitions": [
                        {
                            "detected": "q.is_sheared"
                        }
                    ]
                },
                "detected": {
                    "animations": ["find_no_player"],
                    "transitions": [
                        {
                            "default": "!q.is_sheared"
                        }
                    ],
                    "on_entry": ["/say oink oink"]
                }
            }
        }
    }
}
```

最后，将此代码片段复制粘贴到猪的行为文件中。确保将其插入到 `description` 中。

<CodeHeader>BP/entities/my_entity.json#description</CodeHeader>

```json
"animations": {
    "manage_find_player": "controller.animation.pig_find_player",
    "find_player": "animation.pig.find_player",
    "find_no_player": "animation.pig.find_no_player"
},
"scripts": {
    "animate": [
        "manage_find_player"
    ]
}
```
