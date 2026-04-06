---
title: 投射物
category: 文档
mentions:
    - SirLich
    - stirante
    - aym-i
    - SmokeyStack
    - Lufurrius
    - ThomasOrs
description: 投射物组件文档。
---

## 概述

本页面旨在记录你可以在 `minecraft:projectile` 实体行为组件中使用的所有不同字段。

:::warning
_免责声明：此组件大多基于游戏中发现的投射物或逆向工程游戏的文档。_
_此信息最后在 **1.18.2** 上测试。_
:::

| 名称                      | 类型             | 默认值 | 描述                                                                                                                                       |
| ------------------------- | ---------------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| anchor                    | Integer          |               |                                                                                                                                                   |
| angle_offset              | Decimal          | 0             | 确定投射物被投掷的角度                                                                                            |
| catch_fire                | Boolean          | false         | 如果为true，被击中的实体将着火                                                                                                       |
| crit_particle_on_hurt     | Boolean          | false         | 如果为true，投射物在暴击时会产生暴击粒子                                                                             |
| destroy_on_hurt           | Boolean          | false         | 如果为true，此实体在击中时将被销毁                                                                                                   |
| filter                    | String           |               | 在此定义的实体定义不会被投射物伤害                                                                                   |
| fire_affected_by_griefing | Boolean          | false         | 如果为true，投射物是否引起火焰受生物 griefing 游戏规则影响                                                             |
| gravity                   | Decimal          | 0.05          | 投掷时应用于此实体的重力。值越高，实体下落越快                                                 |
| hit_ground_sound          | String           |               | 投射物击中地面时播放的声音                                                                                              |
| hit_sound                 | String           |               | 投射物击中实体时播放的声音                                                                                           |
| homing                    | Boolean          | false         | 如果为true，投射物会追踪最近的。**在1.18.2实体上不工作**                                                             |
| inertia                   | Decimal          | 0.99          | 投射物在空中飞行时每帧保持的速度分数                                                              |
| is_dangerous              | Boolean          | false         | 如果为true，投射物将被视为对玩家危险                                                                               |
| knockback                 | Boolean          | true          | 如果为true，投射物将击退它击中的实体                                                                                        |
| lightning                 | Boolean          | false         | 如果为true，被击中的实体将被闪电击中                                                                                               |
| liquid_inertia            | Decimal          | 0.6           | 投射物在水中飞行时每帧保持的速度分数                                                            |
| multiple_targets          | Boolean          | true          | 如果为true，投射物每次飞行可以击中多个实体                                                                                      |
| offset                    | Vector [a, b, c] | [0, 0.5, 0]   | 投射物将从实体的锚点偏移 spawn                                                                               |
| on_fire_time              | Decimal          | 5             | 被击中的实体着火的时间（秒）                                                                                           |
| on_fire_time              | Decimal          | 5             | 投射物击中时的行为。更多信息见[下文](#on_hit)                                                                                          |
| particle                  | String           | iconcrack     | 碰撞时使用的粒子                                                                                                                    |
| potion_effect             | Integer          | -1            | 定义箭将对击中的实体应用的效果                                                                                     |
| power                     | Decimal          | 1.3           | 确定投射物的速度                                                                                                         |
| reflect_on_hurt           | Boolean          | false         | 如果为true，此实体在击中时将被反弹                                                                                              |
| semi_random_diff_damage   | Boolean          | false         | 如果为true，伤害将根据伤害和速度随机化                                                                                      |
| shoot_sound               | String           |               | 投射物射击时播放的声音                                                                                                  |
| shoot_target              | Boolean          | true          | 如果为true，投射物将朝发射它的实体的目标射击                                                                   |
| should_bounce             | Boolean          | false         | 如果为true，投射物将在击中时弹跳                                                                                                      |
| splash_potion             | Boolean          | false         | 如果为true，投射物将像喷溅药水一样处理                                                                                      |
| splash_range              | Decimal          | 4             | "喷溅"效果的方块半径                                                                                                           |
| stop_on_hurt              | Boolean          |               |                                                                                                                                                   |
| uncertainty_base          | Decimal          | 0             | 基础命中率。命中率由公式 uncertaintyBase - difficultyLevel * uncertaintyMultiplier 确定                               |
| uncertainty_multiplier    | Decimal          | 0             | 决定难度对命中率的影响程度。命中率由公式 uncertaintyBase - difficultyLevel * uncertaintyMultiplier 确定 |
| hit_water                 | Boolean          | false         | 如果为true，液体方块将被视为固体。**需要"教育版"开关处于活动状态**                                                   |

## on_hit

此对象包含投射物击中某些东西时可执行的所有行为。

### arrow_effect

_确切行为未知_

### teleport_owner

将发射者传送至击中位置。

### catch_fire

_确切行为未知_

设置目标着火

### ignite

_确切行为未知_

设置目标着火

### remove_on_hit

在投射物击中东西时将其移除。

### douse_fire

_确切行为未知_

### impact_damage

击中时造成伤害。

| 名称                           | 类型                             | 描述                                                                                                                  |
| ------------------------------ | -------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| damage                         | Integer/Integer Array [min, max] | 击中时对实体造成的伤害                                                                                                |
| semi_random_diff_damage        | Boolean                          |                                                                                                                              |
| max_critical_damage            | Decimal                          |                                                                                                                              |
| min_critical_damage            | Decimal                          |                                                                                                                              |
| power_multiplier               | Decimal                          |                                                                                                                              |
| channeling                     | Boolean                          |                                                                                                                              |
| set_last_hurt_requires_damage  | Boolean                          |                                                                                                                              |
| destroy_on_hit_requires_damage | Boolean                          |                                                                                                                              |
| filter                         | String                           | 要影响的实体。与其他地方使用的过滤器更原始，因为它不能"测试"除标识符之外的任何东西 |
| destroy_on_hit                 | Boolean                          |                                                                                                                              |
| knockback                      | Boolean                          |                                                                                                                              |
| catch_fire                     | Boolean                          | 决定目标是否会被火焰吞噬                                                                    |

### definition_event

击中时调用事件。

| 名称               | 类型    | 描述                                         |
| ------------------ | ------- | --------------------------------------------------- |
| affect_projectile  | Boolean | 事件将为投射物实体触发       |
| affect_shooter     | Boolean | 事件将为发射者实体触发          |
| affect_target      | Boolean | 事件将为击中的实体触发              |
| affect_splash_area | Boolean | 事件将为区域内的所有实体触发 |
| splash_area        | Decimal | 实体区域                                    |
| event_trigger      | Object  | 要触发的事件。下面是结构。                  |

| 名称    | 类型   | 描述                           |
| ------- | ------ | ------------------------------------- |
| event   | String | 要触发的事件                      |
| target  | String | 事件目标                   |
| filters | Object | 触发所需的标准 |

### stick_in_ground

将投射物插入地面。

| 名称       | 类型    | 描述 |
| ---------- | ------- | ----------- |
| shake_time | Decimal |             |

### spawn_aoe_cloud

生成药水效果的范围效果云。

| 名称                | 类型                    | 描述                                                                                                                                                                      |
| ------------------- | ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| radius              | Decimal                 | 云半径                                                                                                                                                              |
| radius_on_use       | Decimal                 |                                                                                                                                                                                  |
| potion              | Integer                 | 滞留药水ID                                                                                                                                                              |
| particle            | String                  | [原版粒子](/particles/vanilla-particles) 云的发射器。只接受原版粒子。**dragonbreath** 启用使用瓶获得龙息的功能。 |
| duration            | Integer                 | 云持续时间（秒）                                                                                                                                                 |
| color               | Integer array [r, g, b] | 粒子颜色                                                                                                                                                           |
| affect_owner        | Boolean                 | 药水效果是否影响发射者。不适用于玩家                                                                                                   |
| reapplication_delay | Integer                 | 药水效果应用之间的时间（以tick为单位）                                                                                                                          |

#### 药水ID

| 药水                    | 普通 | 延长 | 增强（等级II） |
| ------------------------- | ------- | -------- | ------------------- |
| 水瓶              | 0       |          |                     |
| 平凡药水            | 1       | 2        |                     |
| 浓稠药水              | 3       |          |                     |
| 笨拙药水            | 4       |          |                     |
| 夜视药水    | 5       | 6        |                     |
| 隐身药水    | 7       | 8        |                     |
| 跳跃药水         | 9       | 10       | 11                  |
| 防火药水 | 12      | 13       |                     |
| 迅捷药水       | 14      | 15       | 16                  |
| 迟缓药水        | 17      | 18       |                     |
| 水下呼吸药水 | 19      | 20       |                     |
| 治疗药水         | 21      |          | 22                  |
| 伤害药水         | 23      |          | 24                  |
| 中毒药水          | 25      | 26       | 27                  |
| 再生药水    | 28      | 29       | 30                  |
| 力量药水        | 31      | 32       | 33                  |
| 虚弱药水        | 34      | 35       |                     |
| 衰变药水           | 36      |          |                     |
| 龟壳大师药水   | 37      | 38       | 39                  |
| 缓落药水    | 40      | 41       |                     |
| 迟缓IV药水     | 42      |          |                     |
| 破碎药水           | 43+     |          |                     |

### spawn_chance

击中时生成实体。

| 名称                        | 类型    | 描述                                 |
| --------------------------- | ------- | ------------------------------------------- |
| first_spawn_percent_chance  | Decimal |                                             |
| second_spawn_percent_chance | Decimal |                                             |
| first_spawn_count           | Integer |                                             |
| second_spawn_count          | Integer |                                             |
| spawn_definition            | String  | 要生成的实体ID                   |
| spawn_baby                  | Boolean | 生成的实体是否应该是幼体 |

### particle_on_hit

击中时生成粒子。

| 名称          | 类型    | 描述                                              |
| ------------- | ------- | -------------------------------------------------------- |
| particle_type | String  | 要使用的[原版粒子](/particles/vanilla-particles) |
| num_particles | Integer | 粒子数量                                      |
| on_entity_hit | Boolean | 是否应该在击中实体时生成粒子          |
| on_other_hit  | Boolean | 是否应该在击中其他东西时生成粒子           |

### mob_effect

对目标应用生物效果。

| 名称           | 类型    | 描述                                 |
| -------------- | ------- | ------------------------------------------- |
| effect         | String  | 效果                                      |
| duration       | Integer | 效果持续时间                      |
| durationeasy   | Integer | 简单难度下的效果持续时间   |
| durationnormal | Integer | 普通难度下的效果持续时间 |
| durationhard   | Integer | 困难难度下的效果持续时间   |
| amplifier      | Integer | 效果放大器                            |
| ambient        | Boolean |                                             |
| visible        | Boolean |                                             |

### grant_xp

尽管名称如此，这实际上是生成一定数量的经验球，值得所声明的数量。

| 名称  | 类型    | 描述                                                                                     |
| ----- | ------- | ----------------------------------------------------------------------------------------------- |
| minXP | Integer | 给予的最小经验值                                                            |
| maxXP | Integer | 给予的最大经验值                                                            |
| xp    | Integer | 给予的固定经验值。设置后，它将代替最小和最大值使用。 |

### freeze_on_hit

_确切行为未知_

_需要启用教育版开关。_
击中时冻结水。

| 名称          | 类型    | 描述                   |
| ------------- | ------- | ----------------------------- |
| shape         | String  | "sphere" 或 "cube"            |
| snap_to_block | Boolean |                               |
| size          | Integer | 冻结效果的大小 |

### hurt_owner

_确切行为未知。现在它可能会导致minecraft崩溃，可能是因为参数错误_

| 名称         | 类型    | 描述 |
| ------------ | ------- | ----------- |
| owner_damage | Integer |             |
| knockback    | Boolean |             |
| ignite       | Boolean |             |

### thrown_potion_effect

_确切行为未知。现在它可能会导致minecraft崩溃，因为它只对投掷的药水有效_

## 附加信息

在创建自定义投射物时，如箭或三叉戟变体，或完全你自己的东西，你可能需要考虑定义一个[运行时标识符](/entities/runtime-identifier)以确保其按预期运行。不这样做可能导致意外行为，从奇怪的视觉效果到错误的击退方向，以及你可以赤手杀死的箭。
