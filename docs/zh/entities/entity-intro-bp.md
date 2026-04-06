---
title: 实体BP入门
category: 通用
nav_order: 1
tags:
    - guide
    - beginner
mentions:
    - SirLich
    - solvedDev
    - stirante
    - Joelant05
    - destruc7ion
    - MedicalJewel105
    - ChibiMango
    - SmokeyStack
    - ThomasOrs
description: 实体行为包简介。
---

三个主要结构构成了行为包实体文件的基础。本文档将解释它们各自的含义以及如何使用它们。

将组件组与组件混淆是错误的常见来源。请密切注意以理解它们之间的区别。

## 组件

组件是构成Minecraft实体的逻辑构建块。所有组件均由Mojang编写并提供给我们使用。组件可以做各种事情，如设置实体的大小或赋予它游泳的能力。组件的完整列表可以在[此处](https://bedrock.dev/docs/stable/Entities)找到。

创建自己的组件是_不可能的_。整个组件列表是硬编码的，由Microsoft提供。

当你想为实体添加行为时，你将 `components` 添加到 `minecraft:entity` 对象的 `components` 对象中。例如，如果我们想赋予实体攀爬的能力，我们可以通过添加这个组件来实现：`"minecraft:can_climb": {}`。

所有组件的格式都是 `"minecraft:<name>": { <setting> }`。每个组件接受不同类型的设置。

以下是实体中一些组件的示例：

<CodeHeader>BP/entities/example.json#minecraft:entity</CodeHeader>

```json
"components": {
    "minecraft:type_family": {
        "family": [
            "player"
        ]
    },
    "minecraft:collision_box": {
        "width": 0.6,
        "height": 1.8
    },
    "minecraft:can_climb": {}
}
```

注意 `components` 列表_只_包含组件。

## 组件组

组件组是组件的"文件夹"。它们对组件进行分组，可以使用 `events` 添加或删除以创建自定义游戏玩法。

这是一个示例：

<CodeHeader>BP/entities/example.json#minecraft:entity</CodeHeader>

```json
"component_groups": {

    //组件组的名称
    "minecraft:cat_persian": {

        //有效组件列表。添加任意数量。
        "minecraft:variant": {
            "value": 6
        },
        "minecraft:physics": {}
    },

    //第二个组件组的名称
    "wiki:example_group": {
        "minecraft:type_family": {
            "family": [
                "wiki_is_awesome!"
            ]
        }
    }
}
```

所有组件组都是自定义创建的。你不能在你的实体中使用其他实体的组件组。

在原版Minecraft实体中，组件组使用 `minecraft:` 命名空间命名，如上面的 `minecraft:cat_persian`。但重要的是要记住它们_不是组件_。当你创建组件组时，你可以使用任何你想要的名称/命名空间:名称组合。例如，上面的 `wiki:example_group`。[此处](/concepts/namespaces)有关于命名空间的更多信息。

当组件放入组中时，它_不会_自动添加到你的实体中。在组被添加之前，它什么也不会做。当组被添加时，组件将变为活动状态并开始影响实体的行为。你也可以同时添加多个组件组。

## 事件

事件是一种特殊的语法，用于添加和删除组件组，当满足某些条件时可以由组件调用。通过添加/删除组，我们可以为实体创建动态行为。

一个示例：

<CodeHeader>BP/entities/example.json#minecraft:entity#events</CodeHeader>

```json
"minecraft:ageable_grow_up": { //事件的名称
    "remove": { //要删除的组件组列表
        "component_groups": [
            "minecraft:cat_baby"
        ]
    },
    "add": {
        "component_groups": [
            "minecraft:cat_adult" //要添加的组件组列表。
        ]
    }
},
```

与组件组一样，事件是在每个实体内部100%自定义创建的。你不能在自己的实体上使用其他实体的事件。不要试图在你自己的实体中使用 `"minecraft:ageable_grow_up"`。如果你想要成长功能，你需要自己定义组件组和事件。

你只能从实体添加/删除 `component groups`。尽管尝试直接添加/删除组件很诱人，但这是不可能的。

事件在某些组件内部满足某些条件时激活。以下是一个示例：

<CodeHeader>BP/entities/example.json#minecraft:entity</CodeHeader>

```json
"components": {
    "minecraft:interact": {
        "interactions": [
            {
                "on_interact": {
                    "filters": [
                        {
                            "test":"is_family",
                            "subject": "other",
                            "value": "player"
                        }
                    ],
                    "target": "self",
                    "event": "wiki:on_interact"
                }
            }
        ]
    }
},
"component_groups": {
    "wiki:interacted": {
        "minecraft:scale": {
            "value": 2
        }
    }
},
"events":{
    "wiki:on_interact":{
        "add": {
            "component_groups": [ "wiki:interacted" ]
        }
    }
}
```

在这里，当玩家与实体交互时，它将激活 `"wiki:on_interact"` 事件。然后该事件将添加组件组 `"wiki:interacted"`。然后这将应用组件 `"minecraft:scale"`。

有关事件功能的更深入教程，请查看我们的实体事件页面。

<Button link="/entities/entity-events">实体事件</Button>

## 原版用法

组件组和事件是原版实体用于创建自定义和适应性行为的主要工具。以下是使用组件组和事件创建的一些原版功能：

-   僵尸被编程为在水下停留时间过长时变成 `drowned`。

-   狐狸有两个组件组 `minecraft:fox_red` 和 `minecraft:fox_active`，以根据它们的生成位置具有两种颜色变体。

-   末影人在被玩家注视时会变得具有攻击性。
