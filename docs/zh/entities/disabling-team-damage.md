---
title: 禁用团队伤害
description: 学习如何禁用同一团队玩家之间的伤害。
category: 教程
tags:
    - intermediate
mentions:
    - SirLich
    - solvedDev
    - Joelant05
    - MedicalJewel105
    - Lufurrius
    - TCLynx
    - QuazChick
---

:::warning REALMS

这在 realm 上无效，原因是在 realm 上存在一个错误，即行为包中修改的 `player.json` 文件不起作用，游戏只是忽略它们。

这可能在未来被修复，但在 1.20.15 时尚未修复。这也适用于较旧版本的 minecraft。

:::

## 来自玩家的伤害

如果你想禁用团队伤害（这样队友就不能互相伤害），给每个队友分配一个带有团队名称的标签（我将使用 `team1`、`team2`、`team3` 和 `team4` 作为示例）。

现在将这个伤害传感器组件添加到你的 `player.json` 的 `"components": {}` 中。请参阅注释以了解解释。

<CodeHeader>BP/entities/player.json > minecraft:entity > components</CodeHeader>

```json
"minecraft:damage_sensor": {
    "triggers": [
        {
            // 如果你已经有伤害传感器，只需将此对象复制到"triggers"数组中
            "on_damage": {
                "filters": {
                    "any_of": [
                        {
                            "all_of": [
                                { "test": "has_tag", "value": "team1" }, // 玩家有这个标签吗？
                                { "test": "has_tag", "subject": "other", "value": "team1" } // 如果是，他们试图伤害的实体有这个标签吗？
                            ]
                        },
                        {
                            "all_of": [
                                { "test": "has_tag", "value": "team2" }, // 对每个团队重复
                                { "test": "has_tag", "subject": "other", "value": "team2" }
                            ]
                        },
                        {
                            "all_of": [
                                { "test": "has_tag", "value": "team3" },
                                { "test": "has_tag", "subject": "other", "value": "team3" }
                            ]
                        },
                        {
                            "all_of": [
                                { "test": "has_tag", "value": "team4" },
                                { "test": "has_tag", "subject": "other", "value": "team4" }
                            ]
                        },
                        {
                            "all_of": [
                                { "test": "has_tag", "value": "team5" },
                                { "test": "has_tag", "subject": "other", "value": "team5" }
                            ]
                        }
                    ]
                }
            },
            "deals_damage": "no" // 如果这些过滤器在当前攻击交互中评估为 true，目标将不会受到伤害。
        }
    ]
}
```

## 来自投射物的伤害

由于投射物实体使用的过滤器非常原始，你必须使用完全不同的方法来实现这一点。

该过程使用：

-   标签
-   计时
-   条件受伤
-   函数

<CodeHeader>BP/entities/player.json</CodeHeader>

```json
"components": {
    "minecraft:timer": { // 这是用于通过事件将团队应用于附近的
        "time": [0, 0],  // 未标记的投射物。
        "looping": true,
        "time_down_event": {
            "event": "wiki:projectile_team",
            "target": "self"
        }
    },
    "minecraft:hurt_on_condition": { // 投射物将无法直接造成
        "damage_conditions": [       // 伤害，所以我们将应用标签到
            {                        // 玩家，这将触发这个...
                "filters": {
                    "test": "has_tag",
                    "value": "damage"
                },
                "cause": "projectile",
                "damage_per_tick": 4
            }
        ]
    },
    "minecraft:damage_sensor": {     // ...这反过来将触发一个事件
        "triggers": {                // 来移除这个标签，所以伤害只会
            "cause": "projectile",   // 发生一次。
            "deals_damage": true,
            "on_damage": {
                "filters": {
                    "test": "has_tag",
                    "value": "damage"
                },
                "event": "wiki:stop_damage"
            }
        }
    }
},
"events": {
    "wiki:projectile_team": {  // 这里的功能将根据玩家拥有的
        "queue_command": {     // 团队标签来应用标签。
            "command": ["function wiki-apply_team"]
        }
    },
    "wiki:stop_damage": {      // 简单移除伤害标签的事件。
        "queue_command": {
            "command": ["tag @s remove damage"]
        }
    }
}
```

<CodeHeader>BP/functions/wiki-apply_team.mcfunction</CodeHeader>

```
execute as @s[tag=team1] at @s run tag @e[rm=0,r=1,c=1,type=arrow,tag=] add team1
execute as @s[tag=team2] at @s run tag @e[rm=0,r=1,c=1,type=arrow,tag=] add team2
execute as @s[tag=team3] at @s run tag @e[rm=0,r=1,c=1,type=arrow,tag=] add team3
execute as @s[tag=team4] at @s run tag @e[rm=0,r=1,c=1,type=arrow,tag=] add team4
```

<CodeHeader>BP/entities/arrow.json</CodeHeader>

```json
"components": {
    "minecraft:projectile": {
        "on_hit": {           // 击中时触发一个事件...
           "definition_event": {
                "affect_projectile": true,
                "event_trigger": {
                    "event": "wiki:hit",
                    "target": "self"
                }
            },
            "remove_on_hit": {}
         }
    }
},
"events": {
    "wiki:hit": {            // ...它执行一个函数，对不同团队的玩家应用伤害标签！
       "queue_command": {    // 
            "command": ["function wiki-apply_damage"]
       }
    }
}
```

<CodeHeader>BP/functions/wiki-apply_damage.mcfunction</CodeHeader>

```
execute as @s[tag=team1] at @s run tag @p[rm=0,r=1,tag=!team1] add damage
execute as @s[tag=team2] at @s run tag @p[rm=0,r=1,tag=!team2] add damage
execute as @s[tag=team3] at @s run tag @p[rm=0,r=1,tag=!team3] add damage
execute as @s[tag=team4] at @s run tag @p[rm=0,r=1,tag=!team4] add damage
```

如果你修改 `arrow.json`，请考虑组件组。
