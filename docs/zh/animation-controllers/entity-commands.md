---
title: 实体命令
nav_order: 2
tags:
    - intermediate
mentions:
    - SirLich
    - solvedDev
    - Joelant05
    - destruc7i0n
    - Dreamedc2015
    - MedicalJewel105
    - aexer0e
    - cda94581
    - ThijsHankelMC
    - QuazChick
description: 从实体触发斜杠命令。
---

:::tip 事件响应
通过 `queue_command` 实体事件响应来运行实体命令是更简单的方法。
:::

## 动画控制器

为了触发斜杠命令，我们将使用行为包动画控制器。动画控制器应放置在：`animation_controllers/some_controller.json`。你可以在 [bedrock.dev 的实体事件部分](https://bedrock.dev/docs/stable/Entity%20Events)了解更多关于动画控制器的信息。

简而言之，动画控制器允许我们从行为包触发事件。

- 斜杠命令（如 `/say`）
- Molang（`v.foo += 1;`）
- 实体事件（如 `@s wiki:my_event`）

这是一个示例动画控制器：

<CodeHeader>BP/animation_controllers/entity_commands.ac.json</CodeHeader>

```json
{
    "format_version": "1.10.0",
    "animation_controllers": {
        "controller.animation.sirlich_entity_commands": {
            "states": {
                "default": {
                    "transitions": [
                        {
                            "on_summon": "1" //1 evaluates as true
                        }
                    ]
                },
                "on_summon": {
                    "on_entry": ["/say I have been summoned"]
                }
            }
        }
    }
}
```

这个动画控制器将在实体被召唤到世界中的同时立即运行命令 `/say I have been summoned`。如果你对如何工作感到困惑，请查看 Molang、动画和实体事件。

简而言之，有`states`，它们可以在其 `on_entry` 子句中触发事件。我们使用查询在不同的状态之间移动。默认情况下，实体将处于 `default` 状态，除非定义了 `initial_state` 值。

::: warning
查询在世界/区块重新加载时会重新运行。这意味着 `"/say I have been summoned"` 实际上会在每次实体"加载"时运行，而不仅仅是在召唤时。
:::

如果你需要阻止这种情况发生，需要添加额外的查询，例如 `skin_id` 查询。实体首次生成时，检查 `skin_id = 0`，然后再添加一些更高的 `skin_id`，如 `skin_id = 1`。然后，当实体重新加载时，它将无法运行这些命令。文档下方会进一步展示这一点。

## 使用动画控制器

要将此动画控制器添加到我们的实体，我们可以在实体定义描述中使用以下代码：

<CodeHeader>BP/entities/entity_commands.se.json</CodeHeader>

```json
"description": {
    "identifier": "wiki:entity_commands",
    "scripts": {
        "animate": [
            "wiki:entity_commands"
        ]
    },
    "animations": {
        "wiki:entity_commands": "controller.animation.wiki_entity_commands"
    }
}
```

再次提醒，如果你对这一步的任何部分感到困惑，请查看 [实体事件文档](https://bedrock.dev/r/Entity%20Events)。

## 使用事件触发命令：

动画过渡是使用查询创建的。你可以在 [此处](https://bedrock.dev/docs/stable/MoLang#List%20of%20Entity%20Queries)了解查询。在我们的第一个示例中，我们的查询只是 `true`，这意味着命令会自动运行。我们可以使用更复杂的查询来创建更有趣的效果。一个非常方便的方法是使用组件作为 Molang 过滤器来触发命令。

我个人喜欢使用 [skin_id](https://docs.microsoft.com/en-us/minecraft/creator/reference/content/entityreference/examples/entityproperties/minecraftproperty_skin_id)。

我们可以更新动画控制器以基于 `skin_id` 触发：

<CodeHeader>BP/animation_controllers/entity_commands.ac.json</CodeHeader>

```json
{
    "format_version": "1.10.0",
    "animation_controllers": {
        "controller.animation.sirlich_entity_commands": {
            "states": {
                "default": {
                    "transitions": [
                        {
                            "command_example": "q.skin_id == 1"
                        },
                        {
                            "zombies": "q.skin_id == 2"
                        }
                    ]
                },
                "command_example": {
                    "transitions": [
                        {
                            "default": "q.skin_id != 1"
                        }
                    ],
                    "on_entry": ["/say Command One!", "@s execute_no_commands"]
                },
                "zombies": {
                    "transitions": [
                        {
                            "default": "q.skin_id != 2"
                        }
                    ],
                    "on_entry": [
                        "/say AHH! Zombies everywhere!",
                        "/summon minecraft:zombie",
                        "/summon minecraft:zombie",
                        "/summon minecraft:zombie",
                        "/summon minecraft:zombie",
                        "@s execute_no_commands"
                    ]
                }
            }
        }
    }
}
```

这个动画控制器现在有两个命令状态：第一个由 `skin_id = 1` 触发，第二个由 `skin_id = 2` 触发。请注意使用了 `==` 和 `!=`。`==` 用于测试相等性，切勿使用单个 `=`。`!` 表示 NOT，所以 `!=` 用于测试是否不等于特定值。另外，请注意我在每个命令列表末尾添加了 `@s execute_no_commands` 语法。我们稍后会创建 `execute_no_commands`。它将允许我们再次将 skin_id 设置为 0 并重复使用我们的命令。

语法是 `@s` 后跟实体事件的名称。这允许我们从动画控制器内添加/删除组件。

## 设置组件组

回到我们的实体文件，我们可以使用 `skin_id` 组件设置 `skin_id`。

`skin_id` 组件如下所示：

<CodeHeader></CodeHeader>

```json
"minecraft:skin_id": {
    "value": 1
}
```

我们可以添加包含 skin_ids 的组件组：

<CodeHeader>BP/entities/entity_commands.se.json</CodeHeader>

```json
"component_groups": {
    "execute_no_commands": {
        "minecraft:skin_id": {
            "value": 0
        }
    },
    "command_example": {
        "minecraft:skin_id": {
            "value": 1
        }
    },
    "command_zombies": {
        "minecraft:skin_id": {
            "value": 2
        }
    }
}
```

## 添加事件

现在让我们创建事件，以便轻松添加这些组：

<CodeHeader>BP/entities/entity_commands.se.json</CodeHeader>

```json
"events": {
    "minecraft:entity_spawned": {
        "add": {
            "component_groups": [
                "execute_no_commands"
            ]
        }
    },
    "execute_no_commands": {
        "add": {
            "component_groups": [
                "execute_no_commands"
            ]
        }
    },
    "command_example": {
        "add": {
            "component_groups": [
                "command_example"
            ]
        }
    },
    "command_zombies": {
        "add": {
            "component_groups": [
                "command_zombies"
            ]
        }
    }
}
```

## 触发事件

在 Minecraft 中有很多方法可以触发事件。如前所述，你可以使用动画控制器触发事件。另外，让我们看两个具体的例子：

### 交互组件：

这个组件将在你点击它时生成僵尸。

<CodeHeader>BP/entities/entity_commands.se.json</CodeHeader>

```json
"minecraft:interact": {
    "interactions": [{
        "on_interact": {
            "filters": {
                "all_of": [{
                        "test": "is_family",
                        "subject": "other",
                        "value": "player"
                    }
                ]
            },
            "event": "command_zombies"
        }
    }]
}
```

### 计时器

这个组件将每10秒触发一次示例命令：

<CodeHeader>BP/entities/entity_commands.se.json</CodeHeader>

```json
"minecraft:timer": {
    "looping": true,
    "time": 10,
    "time_down_event": {
        "event": "example_command"
    }
}
```

通过将这些（和类似的！）组件添加到我们的实体，我们可以控制何时 `skin_id` 发生变化，从而控制运行哪些事件。

## 总结

这就是整个工作流程：

- 使用交互或计时器等组件运行 `example_command`
- 这会添加 `example_command` 组件组
- 这会添加 `skin_id` 组件
- 这会设置实体的 `skin_id`，可以在动画控制器中查询
- 动画控制器注意到这个 `skin_id`，并移动到 `example_command` 状态
- 动画控制器运行 `/say` 命令
- 动画控制器运行实体事件 `@s execute_no_command`
- `execute_no_command` 事件将 `skin_id` 设置为 0
- 动画控制器看到这一点，并过渡到默认状态
- 现在动画控制器等待一个新的 `skin_id`