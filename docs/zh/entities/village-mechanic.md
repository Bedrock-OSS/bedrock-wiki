---
title: 村庄机制
category: 教程
mentions:
    - AeroForta
    - MedicalJewel105
    - stirante
    - SmokeyStack
    - SirLich
    - Ciosciaa
    - ThomasOrs
description: 本文面向任何想要为自己的实体模拟村庄机制的开发者。
---

本文面向任何想要为自己的实体模拟村庄机制的开发者。

## 导航行为

首先从一些基本的导航行为开始。

<CodeHeader>BP/entities/custom_villager.json#components</CodeHeader>

```json
"minecraft:preferred_path":{
    "max_fall_blocks":1,
    "jump_cost":5,
    "default_block_cost":1.5,
    "preferred_path_blocks":[
        {
            "cost":0,
            "blocks":[
                "grass_path"
            ]
        },
        {
            "cost":1,
            "blocks":[
                "cobblestone",
                "stone"
            ]
        },
        {
            "cost":50,
            "blocks":[
                "bed",
                "lectern"
            ]
        }
    ]
}
```

允许实体进行随机漫游。

<CodeHeader>BP/entities/custom_villager.json#components</CodeHeader>

```json
"minecraft:behavior.random_stroll":{
    "priority":9,
    "speed_multiplier":0.55,
    "xz_dist":10,
    "y_dist":5
}
```

使实体返回到居住区域边界内，在此情况下是村庄边界内。需要使用下方的 `minecraft:dweller` 组件。

<CodeHeader>BP/entities/custom_villager.json#components</CodeHeader>

```json
"minecraft:behavior.move_towards_dwelling_restriction": {
    "priority": 4,
    "speed_multiplier": 1.0
}
```

使实体在村庄内通过创建巡逻路径来导航。铁傀儡使用此行为。

<CodeHeader>BP/entities/custom_villager.json#components</CodeHeader>

```json
"minecraft:behavior.move_through_village": {
 	"priority": 3,
 	"speed_multiplier": 0.6,
 	"only_at_night": true
}
```

允许实体进入建筑物并在下雨时寻找庇护处。需要能够开门的能力。

<CodeHeader>BP/entities/custom_villager.json#components</CodeHeader>

```json
"minecraft:behavior.move_indoors":{
    "priority":5
}
```

使实体在太阳下山时停留在室内。

<CodeHeader>BP/entities/custom_villager.json#components</CodeHeader>

```json
"minecraft:behavior.restrict_open_door":{
    "priority": 5
}
```

配合以下组件使用：

<CodeHeader>BP/entities/custom_villager.json#components</CodeHeader>

```json
"minecraft:annotation.open_door":{
    "priority": 5
}
```

<CodeHeader>BP/entities/custom_villager.json#components</CodeHeader>

```json
"minecraft:navigation.walk":{
    "can_pass_doors":true,
    "can_open_doors":true
}
```

<CodeHeader>BP/entities/custom_villager.json#components</CodeHeader>

```json
 "minecraft:behavior.open_door":{
    "priority":6,
    "close_door_after":true
}
```

## 主要行为

<CodeHeader>BP/entities/custom_villager.json#components</CodeHeader>

```json
"minecraft:dweller": {
 	"dwelling_type": "village",
 	"dweller_role": "inhabitant",
 	"preferred_profession": "farmer",
 	"update_interval_base": 60,
 	"update_interval_variant": 40,
 	"can_find_poi": true,
 	"can_migrate": true,
 	"first_founding_reward": 5
}
```

-   `dweller_role: inhabitant`
    允许实体认领床位和钟。
    需要 `minecraft:behavior.sleep`。
-   `preferred_profession: farmer`
    用于 `minecraft:behavior.work`（可选）
-   `can_find_poi`
    添加此组件使实体能够找到兴趣点。
    已知的 POI 类型：

```
bed
jobsite
meeting_area
```

-   `can_migrate`
    定义实体是否能从一个村庄迁移到另一个村庄。

### 睡眠

您可以在这里了解如何让实体睡眠[睡眠实体](/entities/sleeping-entities)。

### 工作

需要将 "dweller_role" 设置为 "inhabitant"，如果 "preferred_profession" 不存在，实体将尝试移动到最近的任意工作站点。

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.work": {
 	"priority": 4,
 	"active_time": 250,
 	"speed_multiplier": 0.5,
 	"goal_cooldown": 200,
 	"sound_delay_min": 100,
 	"sound_delay_max": 200,
 	"can_work_in_rain": false,
 	"work_in_rain_tolerance": 1000,
 	"on_arrival": {
 		"event": "minecraft:resupply_trades",
 		"target": "self"
 	}
}
```

### 社交

允许实体进行社交活动。
需要将 "dweller_role" 设置为 "inhabitant"。

```json
"minecraft:behavior.mingle": {
  "priority": 4,
  "speed_multiplier": 0.5,
  "duration": 30,
  "cooldown_time": 10,
  "mingle_partner_type": "my:custom_entity",
  "mingle_distance": 2.0
}
```

### 调度器

现在您已经了解了所有需要的机制，让我们尝试将它们整合到 "minecraft:scheduler" 中。
首先让我们做些简单的。
将工作行为添加到组件组中，如下所示：

<CodeHeader></CodeHeader>

```json
"component_groups":{
    "work_schedule":{
        "minecraft:behavior.work":{
            "priority":4,
            "active_time":250,
            "speed_multiplier":0.5,
            "goal_cooldown":200,
            "sound_delay_min":100,
            "sound_delay_max":200,
            "can_work_in_rain":true,
            "work_in_rain_tolerance":1000,
            "on_arrival":{
                "event":"minecraft:resupply_trades",
                "target":"self"
            }
        }
    },
    "gather_schedule":{
        "minecraft:behavior.mingle":{
            "priority": 5,
            "speed_multiplier": 0.8,
            "cooldown_time":10.0,
            "duration": 30.0,
            "mingle_dist": 1.5,
            "mingle_partner_type": "my:custom_entity"
        }
    }
}
```

接下来，让您的实体工作。

<CodeHeader></CodeHeader>

```json
"minecraft:scheduler":{
    "min_delay_secs":0,
    "max_delay_secs":10,
    "scheduled_events":[
        {
            "filters":{
                "all_of":[
                    {
                        "test":"hourly_clock_time",
                        "operator":">=",
                        "value":0 //早晨
                    },
                    {
                        "test":"hourly_clock_time",
                        "operator":"<",
                        "value":12000 //傍晚
                    }
                ]
            },
            "event":"work"
        },
        {
            "filters":{
                "all_of":[
                    {
                        "test":"hourly_clock_time",
                        "operator":">=",
                        "value":21000
                    },
                    {
                        "test":"hourly_clock_time",
                        "operator":"<",
                        "value":24000
                    }
                ]
            },
            "event":"gather"
        }
    ]
}
```

事件部分看起来如下：

<CodeHeader></CodeHeader>

```json
"events":{
    "work":{
        "remove":{
            "component_groups":[
                "gather_schedule"
            ]
        },
        "add":{
            "component_groups":[
                "work_schedule"
            ]
        }
    },
    "gather":{
        "remove":{
            "component_groups":[
                "work_schedule"
            ]
        },
        "add":{
            "component_groups":[
                "gather_schedule"
            ]
        }
    }
}
```

打开您的世界，生成实体，然后放置一张床，您应该能看到绿色粒子。

## 其他行为

所有这些都可以被自定义实体使用：

-   `minecraft:behavior.move_to_village`
    掠夺者使用此行为，可以使实体保持在村庄内。
-   `minecraft:behavior.stroll_towards_village`
    狐狸使用此行为来搜索并前往村庄。
-   `minecraft:behavior.inspect_bookshelf`
    图书管理员村民使用此行为，允许实体查看和检查书架。
-   `minecraft:behavior.explore_outskirts`
    允许实体在村庄范围之外探索（使用调度器和组件组使实体返回村庄）。
-   `minecraft:behavior.defend_village_target`
    在近战攻击上使用此组件。远程攻击可能会意外射中任何具有 "inhabitant" 居住角色的实体。

所有这些都可以被自定义实体使用且与村民或村庄相关：
| 行为 | 用途 | 备注 |
|--------------------------------------------|----------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------|
| `minecraft:behavior.defend_village_target` | 允许实体攻击伤害了具有 "dweller_role": "inhabitant" 实体的其他实体。 | 建议仅在具有近战攻击的实体上使用。 |
| `minecraft:behavior.hide` | 村民使用此行为来隐藏并停留在定义的 POI 处。 | 目前没有关于 POI 类型的文档，这就是为什么我建议不更改 `"poi_type": "bed"`。 |
| `minecraft:behavior.move_to_village` | 唤魔者和女巫使用此行为。允许实体前往村庄中的随机 x,y,z 坐标。 | - |
| `"minecraft:behavior.nap"` | 狐狸使用此行为来小睡。 | 与睡眠类似，但提供更多灵活性，还具有通过检测特定实体来唤醒的内置系统。 |
