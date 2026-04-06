---
title: 实体移动
category: 教程
mentions:
    - SirLich
    - sermah
    - MedicalJewel105
    - TheDoctor15
description: 学习如何创建正确的实体移动行为。
---

在Minecraft中，实体有能力在世界移动，无论是行走、游泳还是飞行。要获得这些行为，你的实体通常需要相当多的行为组件，分为各种类型。

在阅读本教程时请记住，你的实体至少需要：

-   [一个设置实体移动速度的组件。](#移动速度)
-   [一个设置实体如何移动的组件（行走、飞行等）](#移动类型)
-   [一个设置实体导航能力的组件，以便它可以生成路径。](#导航能力)
-   [一个设置实体何时/何处移动的组件（AI目标）。](#ai)

:::tip
创建移动实体的最佳方法是从原版行为包中选择一个相似的实体，然后将其组件复制到你的实体中。

例如，像Phantom、Ghast或Parrot这样的实体都是飞行实体，但它们的游戏内行为非常不同！使用最匹配的实体作为模板。
:::

## 移动速度

你的实体需要的第一件事是一个速度组件。这设置了你的实体在世界移动的速度。

| 组件                                                                               | 说明                             |
| --------------------------------------------------------------------------------------- | -------------------------------- |
| [minecraft:movement](/entities/vanilla-usage-components#movement)                       | 设置移动速度（必需）    |
| [minecraft:underwater_movement](/entities/vanilla-usage-components#underwater-movement) | 设置在水中的移动速度。 |
| [minecraft:flying_speed](/entities/vanilla-usage-components#flying-speed)               | 设置空中的速度。        |

你应始终包含 `minecraft:movement`。根据需要添加其他两个。

所有原版"游泳"生物，如海豚，都包含 `underwater_movement`。只有一些飞行实体有 `flying_speed`。目前尚不清楚为什么会这样。

## 移动类型

你的实体还需要一个移动类型。移动类型为你的实体在世界如何移动设置硬编码的行为。

你只能在实体中包含一种移动类型。选择最符合你需求的组件。一般来说，`basic`、`amphibious` 和 `fly` 是很好的选择。

| 组件                                                                                                 | 说明                                                                                         |
| --------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| [minecraft:movement.amphibious](https://bedrock.dev/docs/stable/Entities#minecraft%3Amovement.amphibious) | 此移动控制允许生物在水中游泳和在陆地上行走。                      |
| [minecraft:movement.basic](https://bedrock.dev/docs/stable/Entities#minecraft%3Amovement.basic)           | 此组件强调实体的移动。                                            |
| [minecraft:movement.fly](https://bedrock.dev/docs/stable/Entities#minecraft%3Amovement.fly)               | 此移动控制导致生物飞行。                                                     |
| [minecraft:movement.generic](https://bedrock.dev/docs/stable/Entities#minecraft%3Amovement.generic)       | 此移动控制允许生物飞行、游泳、攀爬等。                                     |
| [minecraft:movement.hover](https://bedrock.dev/docs/stable/Entities#minecraft%3Amovement.hover)           | 此移动控制导致生物悬停。                                                   |
| [minecraft:movement.jump](https://bedrock.dev/docs/stable/Entities#minecraft%3Amovement.jump)             | 移动控制导致生物在移动时跳跃，跳跃之间有指定的延迟。        |
| [minecraft:movement.skip](https://bedrock.dev/docs/stable/Entities#minecraft%3Amovement.skip)             | 此移动控制导致生物在移动时跳跃。                                         |
| [minecraft:movement.sway](https://bedrock.dev/docs/stable/Entities#minecraft%3Amovement.sway)             | 此移动控制导致生物左右摆动，给人它在游泳的印象。 |

## 移动修饰符

移动修饰符提供有关实体如何在世界移动的附加信息。这些组件对于普通实体不是必需的，但你应该了解它们。

| 组件                                                                                             | 说明                                               |
| ----------------------------------------------------------------------------------------------------- | -------------------------------------------------- |
| [minecraft:water_movement](https://bedrock.dev/docs/stable/Entities#minecraft%3Awater_movement)       | 设置实体在水中体验的摩擦力。 |
| [minecraft:rail_movement](https://bedrock.dev/docs/stable/Entities#minecraft%3Arail_movement)         | 设置实体只能在铁轨上移动。     |
| [minecraft:friction_modifier](https://bedrock.dev/docs/stable/Entities#minecraft%3Afriction_modifier) | 设置实体在陆地上体验的摩擦力。  |

## 导航

你的实体需要的下一件事是导航组件。导航组件有很多字段，比如实体是否可以开门或避免阳光。你如何设置这些字段通常比你选择的导航组件更重要！

导航组件如此之多的原因是每个组件都提供略微不同的硬编码行为。选择名称/描述最符合实体导航类型的导航组件。

你一次只能有一个导航组件。

:::tip
这个组件非常重要。你应该检查原版示例以获取使用哪些字段和值的灵感。
:::

| 组件                                                                                               | 说明                                                                                                                    |
| ------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| [minecraft:navigation.climb](https://bedrock.dev/docs/stable/Entities#minecraft%3Anavigation.climb)     | 允许此实体生成包括垂直墙壁的路径，就像原版蜘蛛一样。                           |
| [minecraft:navigation.float](https://bedrock.dev/docs/stable/Entities#minecraft%3Anavigation.float)     | 允许此实体通过像普通恶魂一样在空气中飞行来生成路径。                                   |
| [minecraft:navigation.generic](https://bedrock.dev/docs/stable/Entities#minecraft%3Anavigation.generic) | 允许此实体通过行走、游泳、飞行和攀爬来生成路径，并跳上跳下一个方块。 |
| [minecraft:navigation.fly](https://bedrock.dev/docs/stable/Entities#minecraft%3Anavigation.fly)         | 允许此实体在空中生成路径，就像原版鹦鹉一样。                                              |
| [minecraft:navigation.swim](https://bedrock.dev/docs/stable/Entities#minecraft%3Anavigation.swim)       | 允许此实体生成包括水的路径。                                                                |
| [minecraft:navigation.walk](https://bedrock.dev/docs/stable/Entities#minecraft%3Anavigation.walk)       | 允许此实体通过行走来生成路径，并跳上跳下一个方块，就像普通生物一样。               |

## 导航能力

除了移动和导航组件外，还有许多额外的组件来增强实体在世界移动时的能力。

| 组件                                                                                                     | 说明                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| [minecraft:annotation.break_door](https://bedrock.dev/docs/stable/Entities#minecraft%3Aannotation.break_door) | 允许实体打破门。它也必须在导航组件中打开。                                              |
| [minecraft:annotation.open_door](https://bedrock.dev/docs/stable/Entities#minecraft%3Aannotation.open_door)   | 允许实体开门。它也必须在导航组件中打开。                                               |
| [minecraft:buoyant](https://bedrock.dev/docs/stable/Entities#minecraft%3Abuoyant)                             | 指定实体可以在哪些液体中漂浮。                                                                                  |
| [minecraft:can_climb](https://bedrock.dev/docs/stable/Entities#minecraft%3Acan_climb)                         | 允许此实体爬上梯子。                                                                                           |
| [minecraft:can_fly](https://bedrock.dev/docs/stable/Entities#minecraft%3Acan_fly)                             | 将实体标记为能够飞行。寻路不会被限制在需要 solid block 在其下方的路径上。 |
| [minecraft:can_power_jump](https://bedrock.dev/docs/stable/Entities#minecraft%3Acan_power_jump)               | 允许实体像原版马一样强力跳跃。                                                                   |
| [minecraft:floats_in_liquid](https://bedrock.dev/docs/stable/Entities#minecraft%3Afloats_in_liquid)           | 设置此实体可以在液体方块中漂浮。                                                                                 |
| [minecraft:jump.dynamic](https://bedrock.dev/docs/stable/Entities#minecraft%3Ajump.dynamic)                   | 定义动态类型的跳跃控制，将根据生物的速度修饰符改变跳跃属性。                      |
| [minecraft:jump.static](https://bedrock.dev/docs/stable/Entities#minecraft%3Ajump.static)                     | 赋予实体跳跃的能力。                                                                                             |

还有一些像 `minecraft:preferred_path` 这样的组件，它将基于方块的路径成本修改导航。

## AI目标

导航组件告诉实体如何生成路径，但不说什么时候或在哪里生成路径。这就是AI组件的用途。

AI目标以 `behavior` 为前缀，并遵循优先级系统来选择运行哪个行为。较低的优先级将首先被选择。

一般来说，你应该通常添加相当多的AI组件，具有不同的优先级。这些层叠在一起，将为你的实体创建逼真的移动和行为。和往常一样，原版实体提供了一个很好的模板，告诉你添加哪些组件，以及使用什么属性/优先级。

AI组件中有太多生成路径的组件，无法在此文档中列出。提供几个作为示例：

| 组件                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------------- |
| [minecraft:behavior.random_stroll](https://bedrock.dev/docs/stable/Entities#minecraft%3Abehavior.random_stroll)                   |
| [minecraft:behavior.follow_owner](https://bedrock.dev/docs/stable/Entities#minecraft%3Abehavior.follow_owner)                     |
| [minecraft:behavior.move_to_water](https://bedrock.dev/docs/stable/Entities#minecraft%3Abehavior.move_to_water)                   |
| [minecraft:behavior.stroll_towards_village](https://bedrock.dev/docs/stable/Entities#minecraft%3Abehavior.stroll_towards_village) |

完整列表请访问 [bedrock.dev](https://bedrock.dev/docs/stable/Entities#AI%20Goals)。

### 寻路

让实体前往特定地点是市场内容最常见的请求之一。
寻路的最佳方法是使用第二个实体，第一个实体会被它吸引。我将把这个辅助实体称为**标记**。如果你对如何创建标记感到困惑，请访问[虚拟实体](/entities/dummy-entities)页面。

#### 思路

我们做寻路的方法实际上相当简单：让我们的实体对我们的标记敌对，然后简单地把我们的标记放在我们希望实体路径到达的位置。困难的部分是知道要添加哪些组件以获得非常远程的寻路。

#### 组件

这些组件可以根据需要编辑以创建良好的寻路。确保更新 `nearest_attackable_target` 以指向你的标记实体。这需要一个 `family_type`，所以你应该在你的标记上设置一个。

别忘了添加一些基本的移动和导航组件，这样你的实体才能移动。

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.nearest_attackable_target": {
    "priority": 0,
    "reselect_targets": true,
    "target_search_height": 1000,
    "within_radius": 1000,
    "must_see": false,
    "entity_types": [
        {
            "filters": [
                {
                    "test": "is_family",
                    "subject": "other",
                    "value": "waypoint_1"
                }
            ],
            "max_dist": 1000
        }
    ]
},
"minecraft:attack": {
    "damage": 0
},
"minecraft:behavior.melee_attack": {
    "priority": 0,
    "require_complete_path": true,
    "track_target": true
},
"minecraft:follow_range": {
    "value": 1000,
    "max": 1000
}
```

#### 检测到达路径点

你可以使用 `minecraft:target_nearby_sensor` 来检测何时到达标记实体：

<CodeHeader></CodeHeader>

```json
"minecraft:target_nearby_sensor": {
    "inside_range": 2.0,
    "outside_range": 4.0,
    "must_see": true,
    "on_inside_range": {
        "event": "reached_waypoint"
    },
    "on_outside_range": {
        "event": "not_reached_waypoint"
    }
}
```

## 其他

:::tip
你可以通过命令触发生物行走动画。
`/execute as @e[type=...] at @s run tp @s ^^^0.1`
这种方式你可以控制实体去哪里，并使其看起来自然。
:::
