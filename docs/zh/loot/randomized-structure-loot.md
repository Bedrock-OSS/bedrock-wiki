---
title: 随机结构战利品
description: 了解如何向自定义结构中的容器添加战利品表。
category: 教程
mentions:
    - MedicalJewel105
    - SirLich
    - SmokeyStack
    - Ciosciaa
    - rebrainertv
    - Supernova3695
    - QuazChick
tags:
    - easy
---

向结构中的容器添加战利品表很容易，你需要有一台电脑以及 [NBT Studio](https://github.com/tryashtar/nbt-studio/releases/download/v1.14.1/NbtStudio.exe)（可执行文件）或 [Loot Tabler](https://mcbe-essentials.github.io/structure-editor/loot-tabler)（浏览器应用程序）。如果想要的战利品在拼图结构中，可以使用处理器。

## 设置

### 创建战利品表

首先，创建目录 `BP/loot_tables/chests` 并在此处创建你的战利品表文件。

你可以在[初学者指南](/guide/loot-table)中学习如何制作战利品表。

<CodeHeader>BP/loot_tables/chests/my_structure_loot.json</CodeHeader>

```json
{
    "pools": [
        {
            "rolls": {
                "min": 8,
                "max": 10
            },
            "entries": [
                {
                    "type": "item",
                    "name": "minecraft:glass_bottle",
                    "functions": [
                        {
                            "function": "set_count",
                            "count": {
                                "min": 4,
                                "max": 6
                            }
                        }
                    ],
                    "weight": 1
                },
                {
                    "type": "item",
                    "name": "minecraft:potion",
                    "functions": [
                        {
                            "function": "set_count",
                            "count": {
                                "min": 4,
                                "max": 6
                            }
                        }
                    ],
                    "weight": 1
                }
            ]
        }
    ]
}
```

### 导出结构

创建战利品表后，将结构导出到 `BP/structures`。然后按照 NBT Studio 或 Loot Tabler 的步骤操作。

![](export_structure.png)

## NBT Studio（可执行文件）

### 软件准备

下载并启动 [NBT Studio](https://github.com/tryashtar/nbt-studio/releases/download/v1.14.1/NbtStudio.exe)

### 添加战利品表

启动 NBT Studio 并打开文件（Ctrl + O）

![](open_file.png)

找到你的容器（Ctrl + F）

![](find_container.png)

导航到你的容器，`block_position_data` > `block_entity_data`。添加一个字符串标签

![](add_string_tag1.png)

添加 `LootTable` 和你的战利品表的文件路径

![](add_string_tag2.png)

保存更改（Ctrl + S）

## Loot Tabler（浏览器应用程序）

### 添加战利品表

打开网站并点击"上传"。选择你的结构文件。

![](LootTable-step1.png)

在容器列表中找到你的容器，利用"容器选项"下显示的信息

![](LootTable-step2.png)

在"战利品表"下，输入你的战利品表的路径。如果希望战利品随机生成，将"战利品表种子"留空或设为 `0`。如果希望战利品表一致生成，请输入特定值。

![](LootTable-step3.png)

下载你的结构文件并将其放入 `BP/structures`。

## 拼图处理器

[拼图结构处理器](/world-generation/jigsaw-structures#processors)可以设置可疑的沙子或箱子等方块具有战利品。

这可以使用带有 `block_entity_modifier` 规则的 `minecraft:rule` 处理器来完成。
`type` 字段应指定为 `minecraft:append_loot`，`loot_table` 设置为你的战利品表的路径。

将该规则与 `blockstate_match` 谓词结合使用将允许为方块提供战利品表。

处理器设置箱子具有战利品会将其设置为默认旋转，除非 `blockstate_match` 设置为匹配输入的箱子与战利品表，然后输出具有战利品表和相同旋转的箱子。
对于你要替换的方块的所有排列，都需要一个规则。例如，箱子有4个基本方向，所以需要4个规则。

具有应用处理器的结构模板中的所有指定方块都将具有战利品。
无法使用处理器在同一结构模板中的不同箱子中获得不同的战利品。

### 示例

一个可疑沙砾应用战利品表的示例。

<CodeHeader>minecraft:processor_list</CodeHeader>

```json
{
    "processor_type": "minecraft:rule",
    "rules": [
        {
            "block_entity_modifier": {
                "type": "minecraft:append_loot",
                "loot_table": "loot_tables/entities/trail_ruins_brushable_block_common.json"
            },
            "input_predicate": {
                "predicate_type": "minecraft:block_match",
                "block": "minecraft:suspicious_gravel"
            },
            "output_state": {
                "name": "minecraft:suspicious_gravel"
            }
        }
    ]
}
```

一个箱子应用战利品表到所有旋转的示例。

<CodeHeader>minecraft:processor_list</CodeHeader>

```json
{
    "processor_type": "minecraft:rule",
    "rules": [
        {
            "block_entity_modifier": {
                "type": "minecraft:append_loot",
                "loot_table": "loot_tables/entities/trail_ruins_brushable_block_common.json"
            },
            "input_predicate": {
                "predicate_type": "minecraft:blockstate_match",
                "block": "minecraft:chest",
                "states": {
                    "minecraft:cardinal_direction": "north"
                }
            },
            "output_state": {
                "name": "minecraft:chest",
                "states": {
                    "minecraft:cardinal_direction": "north"
                }
            }
        },
        {
            "block_entity_modifier": {
                "type": "minecraft:append_loot",
                "loot_table": "loot_tables/entities/trail_ruins_brushable_block_common.json"
            },
            "input_predicate": {
                "predicate_type": "minecraft:blockstate_match",
                "block": "minecraft:chest",
                "states": {
                    "minecraft:cardinal_direction": "south"
                }
            },
            "output_state": {
                "name": "minecraft:chest",
                "states": {
                    "minecraft:cardinal_direction": "south"
                }
            }
        },
        {
            "block_entity_modifier": {
                "type": "minecraft:append_loot",
                "loot_table": "loot_tables/entities/trail_ruins_brushable_block_common.json"
            },
            "input_predicate": {
                "predicate_type": "minecraft:blockstate_match",
                "block": "minecraft:chest",
                "states": {
                    "minecraft:cardinal_direction": "east"
                }
            },
            "output_state": {
                "name": "minecraft:chest",
                "states": {
                    "minecraft:cardinal_direction": "east"
                }
            }
        },
        {
            "block_entity_modifier": {
                "type": "minecraft:append_loot",
                "loot_table": "loot_tables/entities/trail_ruins_brushable_block_common.json"
            },
            "input_predicate": {
                "predicate_type": "minecraft:blockstate_match",
                "block": "minecraft:chest",
                "states": {
                    "minecraft:cardinal_direction": "west"
                }
            },
            "output_state": {
                "name": "minecraft:chest",
                "states": {
                    "minecraft:cardinal_direction": "west"
                }
            }
        }
    ]
}
```

## 测试

加载你的结构并打开容器。对于拼图，使用 `/place structure` 或 `/place jigsaw`。

![](test.png)
