---
title: 受伤动画
tags:
    - intermediate
mentions:
    - MedicalJewel105
    - stekdev17
category: 教程
description: 教程：如何在实体受伤时触发动画。
---

本指南将教你如何为实体触发生成的受伤动画。
目前没有真正好的方法来制作自定义受伤动画（至少据我所知）。

## BP实体部分

首先你需要设置实体文件。确保使用支持属性的文件版本。

将以下内容添加到实体描述中：

<CodeHeader>BP/entity/my_entity.json#description</CodeHeader>

```json
"properties": {
    "wiki:is_hurt": {
        "client_sync": true, // 这样我们就可以在RP中使用它
        "type": "bool",
        "default": false
    }
}
```

并在组件组中添加这个：

<CodeHeader>BP/entity/my_entity.json#component_groups</CodeHeader>

```json
"wiki:hurt_group": {
    "minecraft:timer": {
        "time": 0.1,
        "time_down_event": {
            "event": "wiki:on_not_hurt_event"
        }
    }
}
```

添加此组件组并切换属性事件：

<CodeHeader>BP/entity/my_entity.json#events</CodeHeader>

```json
"wiki:on_hurt_event": {
    "set_property": {
        "wiki:is_hurt": true
    },
    "add": {
        "component_groups": [
            "wiki:hurt_group"
        ]
    }
},
"wiki:on_not_hurt_event": {
    "remove": {
        "component_groups": [
            "wiki:hurt_group"
        ]
    },
    "set_property": {
        "wiki:is_hurt": false
    }
}
```

要触发此事件，请将 `damage_sensor` 添加到组件中：

<CodeHeader>BP/entity/my_entity.json#components</CodeHeader>

```json
"minecraft:damage_sensor": {
    "triggers": {
        "cause": "all",
        "on_damage": {
            "event": "wiki:on_hurt_event"
        }
    }
}
```

## RP AC部分

你可以用这种方式转换到带有受伤动画的状态：`"damage_state": "q.property('wiki:is_hurt')"`，然后从那里使用 `"default": "q.all_animations_finished"`。

这对于创建自定义船可能会有用。
