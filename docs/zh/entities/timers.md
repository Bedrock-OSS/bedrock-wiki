---
title: 实体定时器
category: 教程
tags:
    - intermediate
mentions:
    - SirLich
    - Joelant05
    - MedicalJewel105
    - aexer0e
    - Justash01
    - TheItsNameless
    - zheaEvyline
description: 本文旨在提供一份详尽的列表，详细说明制作实体定时器的多种方法。
---

基于时间的交互是地图制作中非常有用的工具。本文旨在提供一份详尽的列表，详细说明制作定时器的多种方法。为了方便起见，本文将分为两个主要部分：基于组件的定时器和基于动画的定时器。每个部分都有自己的优缺点，将在各自的章节中概述。
您可能还会发现[计分板定时器](/commands/scoreboard-timers)很有用。

## 基于组件的定时器

基于组件的定时器在行为包的 entity.json 文件中完成。它们具有在实体重新加载后仍然存在的明显优势，但受限于计时组件的数量（重复组件会相互替换，这意味着使用 `minecraft:timer` 组件定义多个定时器是不可能的）。

### minecraft:timer

这是触发经过一定时间后事件的最简单但最有效的组件。[minecraft:timer](https://bedrock.dev/docs/1.14.0.0/1.14.30.2/Entities#minecraft:timer) 组件提供了三种主要方式来定义事件触发前的时间：

-   精确计时：定义事件触发后经过的确切时间（例如 3.4 秒）
-   随机间隔：定义一个区间，事件将在该区间内的随机时间触发（例如 3 到 5 秒之间）
-   加权随机选择：定义次数并分配权重，其中之一将被选择用于事件触发（例如，事件在 5 秒时触发有 20% 的几率，在 20 秒时触发有 80% 的几率）

在 vanilla 行为包中，此组件用于各种情况。例如：

-   海豚只能在地上停留 20 秒，然后就会变干
-   蜜蜂在蜇人后 10 到 60 秒之间会死亡
-   流浪商贩只会停留 2400 或 3600 秒

以下是一个在 5.6 秒后触发事件的简单示例：

<CodeHeader></CodeHeader>

```json
"minecraft:timer": {
  "time": 5.6,
  "time_down_event": {
      "event": "wiki:my_event"
  }
}
```

以下是一个使用加权值在随机延迟后触发事件的更复杂示例：

<CodeHeader></CodeHeader>

```json
"minecraft:timer": {
  "looping": false, //true 每次执行后触发事件，false 只触发一次。
  "random_time_choices": [
    {
      "weight": 25,
      "value": 0.5 //延迟半秒
    },
    {
      "weight": 25,
      "value": 10 //十秒延迟
    },
    {
      "weight": 25,
      "value": 30 //三十秒延迟
    },
    {
      "weight": 25,
      "value": 120 //两分钟延迟
    }
  ],
  "time_down_event": {
    "event": "wiki:event",
    "target": "self"
  }
}
```

处理时间事件的一种特别有用的方式是使用单个循环 `minecraft:timer` 组件，并在每个 tick（或者您决定触发定时器的频率）处理事件。这是通过在事件中使用 `randomize` 参数来实现的，可以使用权重来确定其他事件运行的频率。这可以让您从单个定时器组件中获得更多用途。

<CodeHeader></CodeHeader>

```json
"wiki:do_event": {
  "randomize": [
    {
      "weight": 1,
      "add": {
        "component_groups": [
          "wiki:my_event"
        ]
      }
    },
    {
      "weight": 5,
      "add": {
        "component_groups": [
          "wiki:my_more_frequent_event"
        ]
      }
    },
    {
      "weight": 50 //不触发任何事件
    }
  ]
}
```

### minecraft:environment_sensor

另一个可以用于基于时间的事件的非常有用的组件是 `minecraft:environment_sensor`。将此传感器与 `hourly_clock_time` 或 `clock_time` 过滤器配对可用于根据游戏内时间触发事件。

以下是一个用于在一天开始后 800 tick 触发事件的示例（有效范围为 0 到 24000）：

<CodeHeader></CodeHeader>

```json
"minecraft:environment_sensor": {
  "triggers": [
    {
      "filters": {
        "test": "hourly_clock_time",
        "operator": "=",
        "value": 800
      },
      "event": "wiki:my_daily_event"
    }
  ]
}
```

### minecraft:ageable

如果此组件（[minecraft:ageable](https://bedrock.dev/docs/stable/Entities#minecraft:ageable)）未用于实体的其他目的，它可以作为额外的定时器使用。需要注意的是，它需要定义 `minecraft:is_baby` 组件才能起作用。

以下是一个在四秒后触发事件的示例：

<CodeHeader></CodeHeader>

```json
"minecraft:is_baby": {},
"minecraft:ageable": {
  "duration": 4,
  "grow_up": {
    "event": "wiki:my_other_event",
    "target": "self"
  }
}
```

### 其他虚拟定时器：

查看文档表明还有其他组件也可用于计时。本质上，您需要寻找任何带有 "time down event" 或 "duration" 的组件。

可能有前景的非详尽示例列表：

-   `minecraft:angry`（需要实体有目标，时间必须是整数）
-   `minecraft.behavior.hide`
-   `minecraft:behavior.celebrate`

## 基于动画的定时器

行为包动画是触发基于时间事件的非常强大的工具。它们具有提供"无限"数量定时器的明显优势，但在实体重新加载时会重新启动（离开并重新加入世界或包含实体的区块卸载将导致定时器在实体重新加载时重新启动）。

行为包中的动画操作方式与资源包中的不同。如果不熟悉它们的操作方式，建议通过查看官方文档或本 wiki 上的其他页面来了解更多。

### 简单定时器

通过从动画控制器或直接从脚本部分触发动画，您可以按时间顺序执行特定事件、命令或 molang 表达式，称为时间线。

您可以像这样设置时间线：

<CodeHeader></CodeHeader>

```json
{
    "format_version": "1.8.0",
    "animations": {
        "animation.command.example_timeline": {
            "timeline": {
                "0.0": "/say 这将立即触发",
                "3.0": "/say 这将在3秒后触发"
            },
            "animation_length": 3.1
        },
        "animation.command.example_timeline_2": {
            "timeline": {
                "100": "/say 这将在100秒后触发",
                "0.0": ["/say 你可以同时触发多个事件", "/say 使用时间线。"],
                "55.55": "/say 这将在55.55秒后触发。"
            },
            "animation_length": 100.1
        }
    }
}
```

### 随机间隔

定时器组件的一个非常有用的功能是定义事件将触发的随机间隔的能力。此功能也可以使用动画和控制器复制。下面是一个在向实体添加 `minecraft:is_sheared` 组件后触发动画的示例，该动画在激活后 2 到 7 秒之间的随机时间触发事件。动画和控制器版本 1.10.0。

<CodeHeader></CodeHeader>

```json
"controller.animation.shanewolf.random_interval": {
  "initial_state": "inactive",
  "states": {
    "inactive": {
      "transitions": [
        {
          "active": "q.is_sheared"
        }
      ]
    },
    "active": {
      "on_entry": [
        "v.random_interval = math.random(2, 7);",
        "/say 随机间隔已启动"
      ],
      "animations": [
        "wiki:animate_interval"
      ],
      "transitions": [
        {
          "inactive": "q.anim_time >= v.random_interval"
        }
      ],
      "on_exit": [
        "@s wiki:stop_random_interval",
        "/say 随机间隔已完成"
      ]
    }
  }
}
```

<CodeHeader></CodeHeader>

```json
"animation.shanewolf.random_interval": {
  "animation_length": 100
}
```

说明：进入开始动画的状态后，变量被赋予 2 到 7 之间的随机值。当当前动画时间大于或等于此 v 的值时，动画结束。

**注意**：

-   动画长度可以设置为大于时间范围最大值的任何值（100 作为通用模板使用）
-   math.random(a, b) 用于在范围 [a, b] 内触发事件
-   math.floor(math.random(a, b.99)) 可用于使定时器在整数值处结束（必须向 b 添加 0.99）
-   动画完成时要运行的任何事件或命令都放在 on_exit 中

### 加权随机选择

定时器组件的另一个有用功能是能够根据加权值列表在确定的时间触发事件。此功能也可以使用动画和控制器复制。下面是一个在向实体添加 `minecraft:is_charged` 组件后触发动画的示例，该动画在 2、5 或 9 秒时随机触发事件，权重分别为 30、60 和 10。动画和控制器版本 1.10.0。

<CodeHeader></CodeHeader>

```json
"controller.animation.shanewolf.random_choices": {
  "initial_state": "inactive",
  "states": {
    "inactive": {
      "transitions": [
        {
          "active": "q.is_powered"
        }
      ]
    },
    "active": {
      "on_entry": [
        "v.random_choices = math.random(0, 100);",
        "/say 随机间隔已启动"
      ],
      "animations": [
        "wiki:animate_choices"
      ],
      "transitions": [
        {
          "inactive": "q.anim_time >= 2.0 && v.random_choices < 30"
        },
        {
          "inactive": "q.anim_time >= 5.0 && v.random_choices < 90"
        },
        {
          "inactive": "q.anim_time >= 9.0 && v.random_choices <= 100"
        }
      ],
      "on_exit": [
        "@s wiki:stop_random_choices",
        "/say 随机选择已完成"
      ]
    }
  }
}
```

<CodeHeader></CodeHeader>

```json
"animation.shanewolf.random_choices": {
  "animation_length": 100
}
```

说明：进入开始动画的状态后，变量被赋予 0 到 100 之间的随机值（权重之和）。转换按照从最小时间到最大时间的顺序列出。这样做是为了避免在后面的转换中需要多个 && 运算符来定义变量的范围（最小时间的查询首先返回 true，并在此之前检查它们的权重——如果翻转 2 和 5，将导致 2 错误地获得 90 的权重而不是 30）。当当前动画时间大于列表中的某个时间且随机变量的值落在该时间的定义权重范围内时，动画结束。

**注意**：

-   动画长度可以设置为大于时间范围最大值的任何值（100 作为通用模板使用）
-   要使此特定格式正常工作，请将有效时间列表从最小到最大排序
-   要为列表中的时间分配权重，请将权重添加到列表中上一条目的随机变量必须小于的值（例如，5 秒的权重为 90 - 30 = 60）
-   动画完成时要运行的任何事件或命令都放在 on_exit 中

希望这能阐明在 Minecraft Bedrock 中处理时间的问题。如上所示，有许多不同的方法可以做到这一点，每个方法都有自己的优缺点。如果您有任何其他创建基于时间事件的有用方法，请[为 wiki 做贡献](/contribute)！
