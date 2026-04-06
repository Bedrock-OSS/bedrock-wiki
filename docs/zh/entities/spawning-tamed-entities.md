---
title: 生成已驯服实体
description: 了解可以通过哪些方法生成预驯服的实体。
category: 教程
tags:
    - scripting
    - intermediate
mentions:
    - Axelpvz2030
    - aexer0e
    - SirLich
    - MedicalJewel105
    - SmokeyStack
    - ThomasOrs
    - QuazChick
---

在本教程中，您将学习如何通过脚本生成预驯服的实体，通过在您希望实体被驯服的玩家身上运行事件，或者通过投掷一个在撞击时转变为已驯服实体的物品。

## 脚本方法

此示例将在玩家生成（或重生）时为每个玩家生成一只已驯服的狼，使用 [`EntityTameableComponent.tame`](https://learn.microsoft.com/minecraft/creator/scriptapi/minecraft/server/entitytameablecomponent#tame) 方法。

```js
import { world } from "@minecraft/server";

world.afterEvents.playerSpawn.subscribe(({ player }) => {
    const wolf = player.dimension.spawnEntity("minecraft:wolf", player.location);

    // 驯服狼给玩家
    const tameable = wolf.getComponent("minecraft:tameable");
    tameable.tame(player);
});
```

## 事件方法

:::danger 不推荐
此方法使用运行时标识符和玩家实体修改，可能导致兼容性问题。
优先使用脚本方法，因为它没有这些缺点。
:::

### 已驯服实体生成器

我们需要创建一个简单的自定义实体，它将具有 `minecraft:arrow` 运行时标识符（其他投射物运行时标识符也可以），一个空的投射物组件，以及一个转变组件来变成已驯服的狼。

<CodeHeader>BP/entities/pretamed_wolf.json</CodeHeader>

```json
{
    "format_version": "1.21.0",
    "minecraft:entity": {
        "description": {
            "identifier": "wiki:pretamed_wolf",
            "runtime_identifier": "minecraft:arrow",
            "is_spawnable": false,
            "is_summonable": true,
            "is_experimental": false
        },
        "components": {
            "minecraft:projectile": {},
            "minecraft:transformation": {
                "into": "minecraft:wolf<minecraft:on_tame>",
                "keep_owner": true
            }
        }
    }
}
```

您还可以通过将 `is_spawnable` 设置为 `true` 来使用 `wiki:pretamed_wolf` 生成蛋生成它！

:::warning 自定义宠物
如果您想使用此方法生成自定义实体而不是狼，您需要确保该实体具有 `minecraft:is_tamed` 组件才能正常工作。否则，某些行为将无法按预期为已驯服的实体发挥作用。
:::

### 玩家事件

在这里，我们需要一份玩家行为文件的副本，我们稍加修改。我们将添加一个简单的事件，该事件将添加一个组件组来生成我们的自定义中间实体。

您可以在 Mojang 提供的 vanilla 行为包中找到 BP 玩家实体文件[这里](https://aka.ms/behaviorpacktemplate)。

<CodeHeader>BP/entities/player.json</CodeHeader>

```json
{
    "format_version": "1.21.0",
    "minecraft:entity": {
        "description": {
            "identifier": "minecraft:player",
            "is_spawnable": false,
            "is_summonable": false,
            "is_experimental": false
        },
        "component_groups": {
            ...
            "wiki:spawn_tamed_wolf": {
                "minecraft:spawn_entity": {
                    "entities": {
                        "min_wait_time": 0,
                        "max_wait_time": 0,
                        "spawn_entity": "wiki:pretamed_wolf",
                        "single_use": true,
                        "num_to_spawn": 1
                    }
                }
            }
        },
        ...
        "events": {
            "wiki:spawn_tamed_wolf": {
                "add": {
                    "component_groups": ["wiki:spawn_tamed_wolf"]
                }
            }
        }
    }
}
```

### 投射物撞击时生成

为了让已驯服的狼只在投射物撞击某物时生成，我们首先需要创建一个可投掷的物品：

<CodeHeader>BP/items/throwable_pretamed_wolf.json</CodeHeader>

```json
{
    "format_version": "1.21.50",
    "minecraft:item": {
        "description": {
            "identifier": "wiki:throwable_pretamed_wolf"
        },
        "components": {
            "minecraft:icon": "wiki:my_icon",
            "minecraft:throwable": {
                "do_swing_animation": true
            },
            "minecraft:projectile": {
                "projectile_entity": "wiki:pretamed_wolf"
            }
        }
    }
}
```

我们还需要对我们的自定义投射物实体进行一些调整，使其不会在生成时立即转变。

<CodeHeader>BP/entities/pretamed_wolf.json</CodeHeader>

```json
{
    "format_version": "1.21.0",
    "minecraft:entity": {
        "description": {
            "identifier": "wiki:pretamed_wolf",
            "runtime_identifier": "minecraft:arrow",
            "is_spawnable": false,
            "is_summonable": true,
            "is_experimental": false
        },
        "component_groups": {
            "wiki:transform_to_entity": {
                "minecraft:transformation": {
                    "into": "minecraft:wolf<minecraft:on_tame>",
                    "keep_owner": true
                }
            }
        },
        "components": {
            "minecraft:projectile": {
                "on_hit": {
                    "impact_damage": {
                        "damage": 0
                    },
                    "stick_in_ground": {},
                    "definition_event": {
                        "event_trigger": {
                            "event": "wiki:on_hit"
                        }
                    }
                }
            }
        },
        "events": {
            "wiki:on_hit": {
                "add": {
                    "component_groups": ["wiki:transform_to_entity"]
                }
            }
        }
    }
}
```

特别感谢 [Zarkmend ZAN](https://twitter.com/Zarkmend_ZAN) 想出了这个方法 :)
