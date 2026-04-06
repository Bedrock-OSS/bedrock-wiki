---
title: 骑乘飞行实体
description: 学习如何制作玩家可控制的飞行实体。
category: 教程
tags:
    - intermediate
mentions:
    - SirLich
    - Joelant05
    - Dreamedc2015
    - MedicalJewel105
    - aexer0e
    - imsolucid
    - nebulacrab
    - Lufurrius
    - TheItsNameless
    - Halo333X
    - causal-guide
    - QuazChick
---

无论是制作飞机还是龙，添加飞行实体的可控制性从未如此简单！

## 空中输入控制

这是推荐的方式来实现飞行实体可被控制，原版快乐恶魂使用了这种方法。

通过使用玩家设备上的移动输入（如Windows上的WASD），`minecraft:input_air_controlled` 组件会导致实体在玩家面向的3D空间中移动。
该组件要求实体具有 `minecraft:movement.hover` 组件或者实体没有重力。

要使实体在玩家按住跳跃按钮时上升，你还需要向实体添加 `minecraft:vertical_movement_action` 组件。
如果此组件中定义的速度为负，实体将向下移动而不是向上移动。

<CodeHeader>minecraft:entity > components</CodeHeader>

```json
"minecraft:input_air_controlled": {
    "strafe_speed_modifier": 1,
    "backwards_movement_modifier": 0.5
},
"minecraft:vertical_movement_action": {
    "vertical_velocity": 0.5
}
```

### 未骑乘时应用重力

只在实体未被骑乘时应用重力，允许实体在被骑乘时飞行，而其余时间停留在地面上。

这可以通过使用组件组来实现！

#### 组件组

<CodeHeader>minecraft:entity > component_groups</CodeHeader>

```json
// 启用重力
"wiki:walking": {
    "minecraft:physics": {
        "has_gravity": true
    }
},
// 禁用重力
"wiki:flying": {
    "minecraft:physics": {
        "has_gravity": false
    },
    "minecraft:flying_speed": {
        "value": 0.08
    }
}
```

#### 组件

<CodeHeader>minecraft:entity > components</CodeHeader>

```json
// 允许实体被控制
"minecraft:input_air_controlled": {
    "strafe_speed_modifier": 1,
    "backwards_movement_modifier": 0.5
},
// 允许实体被玩家骑乘
"minecraft:rideable": {
    "seat_count": 1,
    "interact_text": "action.interact.ride.horse",
    "family_types": ["player"],
    "seats": {
        "position": [0.0, 0.63, 0.0]
    },
    "on_rider_enter_event": "wiki:start_flying",
    "on_rider_exit_event": "wiki:stop_flying"
},
// 禁用掉落伤害
"minecraft:damage_sensor": {
    "triggers": {
        "cause": "fall",
        "deals_damage": "no"
    }
}
```

#### 事件

<CodeHeader>minecraft:entity > events</CodeHeader>

```json
"wiki:start_flying": {
    "add": {
        "component_groups": ["wiki:flying"]
    },
    "remove": {
        "component_groups": ["wiki:walking"]
    }
},
"wiki:stop_flying": {
    "remove": {
        "component_groups": ["wiki:flying"]
    },
    "add": {
        "component_groups": ["wiki:walking"]
    }
}
```

## 大跳，慢落

虽然不完全是"飞行"，但将实体的跳跃能力设置得很高，并在下落时给予缓慢下落和速度效果，这可能是最直接的方法。

为此，我们需要将 `"minecraft:horse.jump_strength"` 组件添加到我们的实体中。添加此组件将允许你控制其跳跃能力，并在玩家按下跳跃按钮时禁用下马。

<CodeHeader></CodeHeader>

```json
"minecraft:horse.jump_strength": {
    "value": 7
}
```

我们也可以使用 `"value"` 作为对象来利用玩家按住跳跃按钮时将看到的**蓄力条**。

<CodeHeader></CodeHeader>

```json
"minecraft:horse.jump_strength": {
    "value": { "range_min": 0.6, "range_max": 1.2 }
}
```

现在我们将在它下落时给予缓慢下落和速度效果，这样它就不会立即下落。为此，我们将制作一个动画控制器，并在它不在地面时给予这些效果，如下所示：

（你可以在这里阅读有关如何使用动画控制器执行命令的教程[/animation-controllers/entity-commands]。）

<CodeHeader></CodeHeader>

```json
"controller.animation.dragon.flying": {
    "states": {
        "default": {
            "transitions": [
                {
                    "jumping": "!q.is_on_ground"
                }
            ]
        },
        "jumping": {
            "transitions": [
                {
                    "default": "q.is_on_ground"
                }
            ],
            "on_entry": [
                "/effect @s slow_falling 20000 0 true",
                "/effect @s speed 20000 10 true"
            ],
            "on_exit": [
                "/effect @s clear"
            ]
        }
    }
}
```

我们还需要将其连接到我们的实体，如下所示：

<CodeHeader></CodeHeader>

```json
"description": {
    "identifier": "wiki:dragon",
    "is_spawnable": true,
    "is_summonable": true,
    "scripts": {
        "animate": [
            "flying"
        ]
    },
    "animations": {
        "flying": "controller.animation.dragon.flying"
    }
}
```

现在，我们应该有一个类似于飞行的机制。你可以更改跳跃能力和速度等值，但使用这种方法，实体总是会下落。
