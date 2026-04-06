---
title: 实体攻击
category: 教程
mentions:
    - Lufurrius
    - TheDoctor15
    - SirLich
    - MedicalJewel105
    - epxzzy
    - ThomasOrs
tags:
    - intermediate
description: 学习如何正确地创建实体攻击。
---

实体攻击是一个复杂的主题，需要许多不同的组件才能正常工作：

-   导航和移动能力，以接近目标
-   目标选择能力，以选择要攻击的实体
-   攻击类型，如近战或远程
-   攻击伤害和效果

## 选择目标

### 移动

在生物攻击之前，它需要各种[移动组件](/entities/entity-movement)。

在开始创建实体攻击之前，你应该确保你的实体能够行走并在其周围环境中导航。

:::warning
即使你创建的是一个不移动的实体（如炮台），你仍然需要添加导航组件，这样你的实体才能找到要射击的实体。
:::

### 触发敌对

有很多方法可以触发敌对。最常见的类型 `nearest_attackable_target` 在此展示。它通常允许你定义此实体感兴趣攻击的实体：

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.nearest_attackable_target": {
  "must_see": true, //如果为true，潜在目标必须在生物的视线内
  "reselect_targets": true, //允许生物选择新目标，如果有一个比当前更近
  "within_radius": 25.0, //潜在目标必须在此半径内
  "must_see_forget_duration": 17.0, //如果"must_see" = true，遗忘目标前的时间
  "entity_types": [
    {
      "filters": { //要攻击的实体
        "test": "is_family",
        "subject": "other",
        "value": "player"
      },
      "max_dist": 48.0
    }
  ]
}
```

为了更精细的控制，你也可以考虑使用以下组件之一：

| 组件                                                       | 说明                                                         |
| -------------------------------------------------------- | ------------------------------------------------------------ |
| minecraft:behavior.nearest_attackable_target             | 锁定满足给定要求的实体                                        |
| minecraft:behavior.nearest_prioritized_attackable_target | 允许在每个过滤器后设置"priority": [整数]                     |
| minecraft:behavior.defend_trusted_target                 | 锁定伤害过滤器中指定实体的实体                                 |

但还有另一个 - `minecraft:lookat`

这最后一个组件与前三个略有不同，因为它用于检测和锁定尝试进行眼神接触的实体。它的结构如下：

<CodeHeader>BP/entities/enderman.json</CodeHeader>

```json
"minecraft:lookat": {
  "search_radius": 64.0,
  "set_target": true, //如果为true，则成为有效目标
  "look_cooldown": 5.0,
  "filters": {
    "all_of": [
      {
        "subject": "other",
        "test": "is_family",
        "value": "player"
      },
      {
        "test": "has_equipment",
        "domain": "head",
        "subject": "other",
        "operator": "not",
        "value": "carved_pumpkin"  //所有未佩戴南瓜头的玩家
      }
    ]
  }
}
```

### 目标选择

:::tip
本节向你展示如何配置上述"目标选择"组件。
:::

生物通过使用[过滤器](https://bedrock.dev/docs/stable/Entities#Filters)来寻找目标，可以通过 `test`、`subject`、`operator` 和 `value` 来确定哪些实体是有效目标。

<CodeHeader></CodeHeader>

```json
"entity_types":[
    {
        "filters":{
            "any_of":[
                {
                    "test":"is_family",
                    "subject":"other",
                    "operator":"==",
                    "value":"snow_golem"
                },
                {
                    "test":"is_family",
                    "subject":"other",
                    "operator":"==",
                    "value":"iron_golem"
                }
                //任何等于"snow_golem"或"iron_golem"的实体
            ]
        },
        "max_dist":24
    },
    {
        "filters":{
            "all_of":[
                {
                    "test":"is_family",
                    "subject":"other",
                    "operator":"==",
                    "value":"player"
                },
                {
                    "test":"has_equipment",
                    "subject":"other",
                    "domain":"head",
                    "operator":"=!",
                    "value":"turtle_helmet"
                }
                //任何等于玩家且未佩戴"turtle_helmet"在头上
            ]
        },
        "max_dist":24
    }
]
```

这将只锁定 `snow_golem`、`iron_golem` 和**未佩戴** `turtle_helmet` 的 `player`。

## 攻击类型

以下是可用的攻击：

| 组件                                            | 说明                                                     |
| ---------------------------------------------------- | -------------------------------------------------------- |
| [minecraft:behavior.melee_attack](#melee)            | 对单个目标造成伤害                                        |
| [minecraft:behavior.ranged_attack](#ranged)          | 向目标发射投射物                                          |
| [minecraft:area_attack](#area)                       | 有效对范围内所有实体进行近战攻击                           |
| [minecraft:behavior.knockback_roar](#knockback-roar) | 与minecraft:area_attack类似，但更加灵活                  |

### 近战

近战攻击是最常见的攻击类型，它们会造成击退，并且有100%的命中率。

<CodeHeader></CodeHeader>

```json
"wiki:melee_attack": {
  "minecraft:attack": {
    "damage": 3,
    "effect_name": "slowness",
    "effect_duration": 20
  },
  "minecraft:behavior.melee_attack": {
    "priority": 3,
    "melee_fov": 90.0, //演员可用于确定是否可以进行有效近战攻击的允许FOV
    "speed_multiplier": 1,
    "track_target": false,
    "require_complete_path": true
  }
}
```

设置伤害，选择一个生物效果，并更改一些附加属性。

组件中定义整数伤害值可以是常量，也可以是包含2个数字的字符串，以获得可能的值范围。

`"damage": 3` 每次都会造成3点伤害

`"damage": [ 2, 6 ]` 会在2到6之间的任何整数

生物效果和持续时间都是可选的，但使用时，可用的效果如下：

| 效果名称       |
| --------------- |
| speed           |
| slowness        |
| haste           |
| mining_fatigue  |
| strength        |
| instant_health  |
| instant_damage  |
| jump_boost      |
| nausea          |
| regeneration    |
| resistance      |
| fire_resistance |
| water_breathing |
| invisibility    |
| blindness       |
| night_vision    |
| hunger          |
| weakness        |
| poison          |
| wither          |
| health_boost    |
| absorption      |
| saturation      |
| levitation      |
| fatal_poison    |
| slow_falling    |
| conduit_power   |
| bad_omen        |
| village_hero    |
| darkness        |

### 远程

按设定的时间间隔向目标发射指定的[投射物](/entities/projectiles)。

<CodeHeader></CodeHeader>

```json
"wiki:ranged_attack": {
  "minecraft:behavior.ranged_attack": {
    "priority": 2,
    "ranged_fov": 90.0, //演员可用于确定是否可以进行有效远程攻击的允许FOV
    "attack_interval_min": 1.0,
    "attack_interval_max": 3.0,
    "attack_radius": 15.0
  },
  "minecraft:shooter": {
    "def": "wiki:projectile"
  }
}
```

原版投射物列表：

| 原版投射物              |
| -------------------------------- |
| minecraft:arrow                  |
| minecraft:dragon_fireball        |
| minecraft:egg                    |
| minecraft:ender_pearl            |
| minecraft:fireball               |
| minecraft:fishing_hook           |
| minecraft:lingering_potion       |
| minecraft:llama_spit             |
| minecraft:skulker_bullet         |
| minecraft:small_fireball         |
| minecraft:snowball               |
| minecraft:splash_potion          |
| minecraft:thrown_trident         |
| minecraft:wither_skull           |
| minecraft:wither_skull_dangerous |
| minecraft:xp_bottle              |

只有一种物品会对实体的远程攻击产生影响——十字弓。如果装备了十字弓，首先需要为其"充电"，然后实体才能发射任何东西。无论 `minecraft:shooter` 中声明的投射物是什么，为十字弓充电的物品应该始终是 `minecraft:arrow`。

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.charge_held_item": {
  "priority": 2,
  "items": [
    "minecraft:arrow"
  ]
}
```

一旦实现了 `minecraft:behavior.charge_held_item`，实体将能够执行 `minecraft:behavior.ranged_attack` 过程，之后需要再次充电。

### 范围攻击

这些攻击会伤害设定半径内的所有实体。它与远程和近战不同，因为此组件实际上不需要目标。无论实体的行为如何，_所有_ 实体都会受到影响。它看起来与近战攻击类似，因为它以类似的方式造成击退，尽管以恒定速率造成伤害。

<CodeHeader></CodeHeader>

```json
"minecraft:area_attack" : {
  "damage_range": 1, //距离以方块计
  "damage_per_tick": 2,
  "cause": "contact",
  "entity_filter": {
     "any_of": [
      {
        "test": "is_family",
        "subject": "other",
        "value": "player"
      },
      {
        "test": "is_family",
        "subject": "other",
        "value": "monster"
      }
    ]
  }
}
```

[实体伤害来源](https://bedrock.dev/docs/stable/Addons#Entity%20Damage%20Source)。考虑这些是很重要的，因为原版中的某些物品可以保护免受一些伤害，如护甲附魔，你也可以使用 `minecraft:damage_sensor` 使生物对特定来源免疫。

### 击退咆哮

这与 `minecraft:area_attack` 有很多相似之处，但这个组件更加灵活。

<CodeHeader></CodeHeader>

```json
"wiki:roar_attack": {
  "minecraft:behavior.knockback_roar":{
    "priority":2,
    "duration":0.7,
    "attack_time":0.2,
    "knockback_damage":1,
    "knockback_horizontal_strength":1,
    "knockback_vertical_strength":1,
    "knockback_range":5,
    "knockback_filters":{
      "test":"is_family",
      "subject":"other",
      "operator":"==",
      "value":"player"
    },
    "damage_filters":{
      "test":"is_family",
      "subject":"other",
      "operator":"==",
      "value":"player"
    },
    "on_roar_end":{
      "event":"wiki:other_event"
    },
    "cooldown_time":10
  }
}
```

这更像是一波伤害的冲击。用法非常多样化。会产生粒子效果，可以通过向资源包的粒子文件夹添加修改版的 `knockback_roar.json` 来禁用。

## 攻击的更多内容

实体攻击不必像生物对X目标敌对、做X攻击、造成X伤害那样简单。

### 难度相关攻击

表示每个难度使用的组件和值。

<CodeHeader>BP/entities/bee.json</CodeHeader>

```json
"easy_attack": {
    "minecraft:attack": {
        "damage": 2
    }
},
"normal_attack": {
    "minecraft:attack": {
        "damage": 2,
        "effect_name": "poison",
        "effect_duration": 10
    }
},
"hard_attack": {
    "minecraft:attack": {
        "damage": 2,
        "effect_name": "poison",
        "effect_duration": 18
    }
}
```

### 切换模式

你可以使用事件让你的生物只在特定情况下攻击，或在不同类型的攻击之间切换。这可以通过简单地使用[事件](/entities/entity-events)和组件组来实现。两个很好的例子是 `minecraft:environment_sensor` 和 `minecraft:target_nearby_sensor`。两者在结构上非常相似，区别在于一个用于感知环境，另一个用于测试目标距离。

#### 攻击

需要组件组来定义不同的攻击模式，例如：

<CodeHeader></CodeHeader>

```json
"wiki:ranged_components": {
  "minecraft:shooter": {
    "def": "wiki:projectile"
  },
  "minecraft:behavior.ranged_attack": {
    "priority": 3,
    "ranged_fov": 90.0,
    "attack_interval_min": 1.0,
    "attack_interval_max": 3.0,
    "attack_radius": 15.0
  }
}
```

<CodeHeader></CodeHeader>

```json
"wiki:melee_components": {
  "minecraft:attack": {
    "damage": 6
  },
  "minecraft:behavior.melee_attack": {
    "priority": 3
  }
}
```

这些是你的攻击模式的示例，但它们不是你唯一可以使用的。`wiki:ranged_components` 和 `wiki:melee_components` 是其中包含组件的通用名称，它们可以有任何名称，但重要的是其中的嵌套内容。

#### 事件

这些组件组本身实际上不会做任何事情。还需要另一个组件组，以及一些事件来添加/删除攻击模式。

<CodeHeader></CodeHeader>

```json
"wiki:melee_swap": {    //触发时，添加远程组件组并移除近战组件组
  "remove": {
    "component_groups": [
      "wiki:ranged_components"
    ]
  },
  "add": {
    "component_groups": [
      "wiki:melee_components"
    ]
  }
}
```

<CodeHeader></CodeHeader>

```json
"wiki:ranged_swap": {   //触发时，添加近战组件组并移除远程组件组
  "remove": {
    "component_groups": [
      "wiki:melee_components"
    ]
  },
  "add": {
    "component_groups": [
      "wiki:ranged_components"
    ]
  }
}
```

这些事件实际上只是通过添加和删除不同的组件组来打开和关闭攻击模式。

#### 传感器

为了触发事件，使用了另一个组件组。传感器是可以在满足某些条件时触发事件的组件。这里有两个不同传感器的示例：

-   用于感知生物和目标之间的距离

<CodeHeader></CodeHeader>

```json
"wiki:switcher_range": {
  "minecraft:target_nearby_sensor": {
    "inside_range": 4.0,
    "outside_range": 5.0,
    "must_see":  true,
    "on_inside_range": { //当目标在4方块范围内时，触发"wiki:melee_swap"事件
      "event": "wiki:melee_swap",
      "target": "self"
    },
    "on_outside_range": { //当目标超出5方块范围时，触发"wiki:ranged_swap"事件
      "event": "wiki:ranged_swap",
      "target": "self"
    }
  }
}
```

-   用于感知生物所处环境的某些特征

<CodeHeader></CodeHeader>

```json
"wiki:switcher_environment": {
  "minecraft:environment_sensor": {
    "triggers": [
      {
        "filters": { //在水下时，触发"wiki:melee_swap"事件
          "test": "is_underwater",
          "subject": "self",
          "operator": "==",
          "value": true
        },
        "event": "wiki:melee_swap"
      },
      {
        "filters": { //不在水下时，触发"wiki:ranged_swap"事件
          "test": "is_underwater",
          "subject": "self",
          "operator": "==",
          "value": false
        },
        "event": "wiki:ranged_swap"
      }
    ]
  }
}
```

这使用了类似[目标最初选择](#target-selecting)的 `Filters`。

:::tip
你不仅限于2种攻击类型，你可以拥有任意多个！只要确保有事件和传感器来配合它们。
:::

## 视觉动画

攻击和动画密不可分。在资源包中，需要以下3个目录：

-   animations (entity_name.a.json)
-   animation_controllers (entity_name.ac.json)
-   entity (entity_name.ce.json)

或者只要你知道原版动画和动画控制器的名称，你就可以在后者的目录和文件夹中定义它们。

### 动画

动画不言自明。文件本身包含给定实体的所有特定动画。制作动画的推荐方法是使用 [blockbench](/guide/blockbench)。

尽管也可以在简单的文本编辑器中创建它们。

| 原版攻击动画                    |
| -------------------------------------------- |
| "animation.zombie.attack_bare_hand"          |
| "animation.skeleton.attack.v1.0"             |
| "animation.humanoid.bow_and_arrow.v1.0"      |
| "animation.humanoid.damage_nearby_mobs.v1.0" |

动画的几个示例。在 /vanilla_resource_pack/animations 中查找它们全部。

### 动画控制器

触发动画的状态列表。

| 原版攻击动画控制器           |
| ---------------------------------------------- |
| "controller.animation.zombie.attack_bare_hand" |
| "controller.animation.skeleton.attack"         |
| "controller.animation.humanoid.bow_and_arrow"  |
| "controller.animation.humanoid.attack"         |

动画控制器的一些示例。在 /vanilla_resource_pack/animation_controllers 中查找它们全部

可以在[此处](https://bedrock.dev/docs/stable/Animations)找到有关动画的更多信息。
