---
title: 基于数学的动画
tags:
    - intermediate
category: 通用
mentions:
    - SirLich
    - solvedDev
    - Joelant05
    - MedicalJewel105
    - yanasakana
    - Lufurrius
    - TheItsNameless
    - SmokeyStack
    - ThomasOrs
description: 使用数学创建流畅且令人惊叹的动画。
---

数学动画是关键帧动画的强大替代方案。一般来说，`基于数学的动画`是使用Molang表达式为实体几何模型制作动画的概念。所有原版动画都是基于数学的，这里有一个例子：

<CodeHeader></CodeHeader>

```json
"leftarm" : {
    "rotation" : [ "((-0.2 + 1.5 * (math.abs(math.mod(q.modified_distance_moved, 13) - 6.5) - 3.25) / 3.25) * q.modified_move_speed) * 57.3 - v.agent.armxrotationfactor", 0.0, "-v.agent.armzrotation" ]
},
```

如你所见，基于数学的动画可能相当复杂且难以理解。因此，它们应该被视为使用关键帧的_专门替代方案_，而不是_完全替代_。

这就是动画流畅且完美循环的代价。

![](animation-1.gif)

## 编写数学动画

### 手动编写

要手动编写这样的动画，只需创建一个动画文件，并将关键帧替换为单一的值数组；字符串值是可以接受的，正是在字符串中可以放置数学表达式。原版文件可以作为这类动画的宝贵参考，**强烈**建议你下载并预览它们！

对于希望_可视化_其过程的重要提示，[Jannis](https://twitter.com/jannisx11)的工具[Molang Grapher](https://jannisx11.github.io/molang-grapher/)可以在正确的图表上模拟表达式！

### 在Blockbench中

Blockbench允许在一定程度上创建和实时预览大多数基于数学的动画。
首先，在时间线的第0帧创建一个新的关键帧。然后，你可以在左侧边栏的关键帧面板中添加和编辑Molang表达式。支持混合关键帧和数学。
**请记住**，你应该始终省略表达式周围的引号；它们只在原始JSON编辑中是必需的！

请注意，并非所有Molang查询都在Blockbench中得到支持，部分原因是缺少游戏上下文。如果你希望预览使用上下文特定查询的动画，可以将其添加到关键帧面板下方的变量占位符部分，以模拟一个值。
例如，添加 `q.modified_distance_moved = time*8` 可以用每秒8格的速度模拟 `modified_distance_moved` 查询。

## 使用查询

我们数学工具库中最大最有用的工具是广泛的Molang“查询”。查询可以用来将外部信息添加到你的数学表达式中。

常用查询包括：

-   `q.modified_distance_moved`
-   `q.modified_move_speed`
-   `q.anim_time`
-   `q.life_time`

这些用于动画中，以从游戏世界中获取诸如攻击时间或移动距离之类的东西，从而提供更动态和同步的效果。

### 避免使用动画控制器

通过使用查询，你可以避免创建动画控制器。如果实体的速度与行走动画的速度直接相关，那么默认情况下，不移动的实体将不会播放动画。

## 示例

下面是一个基于数学的动画的具体应用示例。该示例使用了Molang查询 `"q.modified_distance_moved"`：

<CodeHeader></CodeHeader>

```json
{
    "format_version": "1.12.0",
    "animations": {
        "animation.car.wheel_spin": {
            "loop": true,
            "bones": {
                "front_wheels": {
                    "rotation": ["q.modified_distance_moved * -30", 0, 0]
                },

                "back_wheels": {
                    "rotation": ["q.modified_distance_moved * -30", 0, 0]
                }
            }
        }
    }
}
```

在这个示例中，模型的骨骼 `front_wheels` 和 `back_wheels` 基于从 `q.modified_distance_moved` 传递的信息绕X轴旋转，然后乘以-30。

这意味着静止状态的汽车不会旋转，而行驶中的汽车会旋转，且旋转速度与汽车的移动速度成正比。
