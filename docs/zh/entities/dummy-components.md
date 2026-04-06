---
title: 虚拟组件
category: 文档
mentions:
    - SirLich
    - jigarbov
    - MedicalJewel105
    - StealthyExpertX
    - TheItsNameless
description: 虚拟组件是"无用"的组件，仅用于数据存储。
---

:::warning 弃用警告

"虚拟组件"是一个较旧的概念，主要已被[实体属性](https://learn.microsoft.com/en-us/minecraft/creator/documents/introductiontoentityproperties)取代。你应该尽可能使用实体属性。
:::

虚拟组件是"无用"的组件，仅用于数据存储。虚拟组件本身**不做**任何事情。它们需要与辅助 mechanics 配对才能有任何功能。虚拟组件很有用，因为它们允许我们在实体上存储信息，并使用这些信息来驱动图形/游戏机制。

很好的例子是 `variant` 和 `mark_variant`。这些组件可以用整数值设置。在原版资源包中，这个整数用于为猫和马选择纹理。另一个很好的例子是 `is_tamed`，马用它来处理它是否可以被骑乘。

虚拟组件很好，因为它们允许我们保存关于实体的数据，然后使用Molang查询这些数据。

## 整数虚拟组件

整数虚拟组件用整数值设置，允许你存储数字，如1、10或1423。这些整数可以使用查询读取。整数虚拟组件是最有用的。

## 位虚拟组件

位虚拟组件存储单个位的信息。即 `True` 或 `False`。例如 `is_tamed`，要么是 `False`（未添加到实体），要么是 `True`（已添加到实体）。

## 虚拟组件

| 类型      | 查询                                                         | 组件                    | 说明                                                                                                                             |
| --------- | ------------------------------------------------------------- | ---------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| **Int**   | q.variant                                                     | minecraft:variant            |                                                                                                                                   |
| **Int**   | q.mark_variant                                                | minecraft:mark_variant       |                                                                                                                                   |
| **Int**   | q.skin_id                                                     | minecraft:skin_id            |                                                                                                                                   |
| **Int\*** | 过滤器如：`"test": "is_color"`，颜色在下面提供。 | minecraft:color              | 也在材质中设置颜色。                                                                                                     |
| **Int\*** | 没有已知的过滤器，但可以与 `"has_component"` 一起使用       | minecraft:color2             | 也在材质中设置颜色。                                                                                                     |
| Bit       | q.is_illager_captain                                          | minecraft:is_illager_captain |                                                                                                                                   |
| Bit       | q.is_baby                                                     | minecraft:is_baby            | 禁用 `minecraft:breedable` 的使用                                                                                             |
| Bit       | q.is_sheared                                                  | minecraft:is_sheared         |                                                                                                                                   |
| Bit       | q.is_saddled                                                  | minecraft:is_saddled         |                                                                                                                                   |
| Bit       | q.is_tamed                                                    | minecraft:is_tamed           |                                                                                                                                   |
| Bit       | q.is_chested                                                  | minecraft:is_chested         | 死亡时会掉落箱子                                                                                                          |
| Bit       | q.is_powered                                                  | minecraft:is_charged         |                                                                                                                                   |
| Bit       | q.is_stunned                                                  | minecraft:is_stunned         |                                                                                                                                   |
| Bit       | q.can_climb                                                   | minecraft:can_climb          | 允许实体爬梯子                                                                                              |
| Bit       | q.can_fly                                                     | minecraft:can_fly            | 将实体标记为能够飞行，寻路不会被限制在需要 solid block 在其下方的路径上。 |
| Bit       | q.can_power_jump                                              | minecraft:can_power_jump     | 允许实体像原版马一样强力跳跃。                                                                   |
| Bit       | q.is_ignited                                                  | minecraft:is_ignited         |                                                                                                                                   |
| Bit       | q.out_of_control                                              | minecraft:out_of_control     | 新的，由代码用于硬编码的船移动/粒子东西，以及Molang q。可能安全                                     |
| Bit       | q.has_any_family('monster')                                   | minecraft:type_family        | 可以使用家族类型并从如'monster'的家族返回真或假的位值。                                    |

### color和color2组件的颜色

-   black
-   blue
-   brown
-   cyan
-   gray
-   green
-   light_blue
-   light_green
-   magenta
-   orange
-   pink
-   purple
-   red
-   silver
-   white
-   yellow
