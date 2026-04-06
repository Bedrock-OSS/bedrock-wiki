---
title: 方块问题排查
description: 方块问题排查指南。
category: 通用
tags:
    - help
mentions:
    - SmokeyStack
    - SirLich
    - aexer0e
    - MedicalJewel105
    - Sprunkles137
    - QuazChick
---

:::tip
本页面包含关于**方块**的问题排查信息。在继续之前，你应该阅读我们的[全局问题排查](/guide/troubleshooting)文档。
:::

## 0.0 - 问题

> "我按照教程或尝试制作自己的方块，但有些地方不对！"

别担心！本页面将帮助你调试常见问题。

## 1.0 - 纹理问题排查

修复与方块纹理相关的问题。

## 1.1 - 纹理是黑色和洋红色

我将查看三种不同布局的方块：泥土状 ![](dirt.png)、原木状 ![](log.png)、草状 ![](grass.png)

导航到你的 `RP/textures/terrain_texture.json`。确保文件命名正确。

<CodeHeader>RP/textures/terrain_texture.json</CodeHeader>

```json
{
    "texture_data": {
        "wiki:dirt_like": {
            "textures": "textures/wiki/blocks/dirt_like" // 你可以替换这个，只要记住名字
        },
        "wiki:custom_log_top": {
            "textures": "textures/wiki/blocks/custom_log_top" // 你可以替换这个，只要记住名字
        },
        "wiki:custom_log_side": {
            "textures": "textures/wiki/blocks/custom_log_side" // 你可以替换这个，只要记住名字
        },
        "wiki:custom_grass_top": {
            "textures": "textures/wiki/blocks/custom_grass_top" // 你可以替换这个，只要记住名字
        },
        "wiki:custom_grass_bottom": {
            "textures": "textures/wiki/blocks/custom_grass_bottom" // 你可以替换这个，只要记住名字
        },
        "wiki:custom_grass_side": {
            "textures": "textures/wiki/blocks/custom_grass_side" // 你可以替换这个，只要记住名字
        }
    }
}
```

接下来，导航到你的方块文件。在你的方块文件中，确保你有 `material_instances` 组件。

泥土状方块示例：

<CodeHeader>BP/blocks/dirt_like.json</CodeHeader>

```json
{
    "format_version": "1.26.10",
    "minecraft:block": {
        "description": {
            "identifier": "wiki:dirt_like"
        },
        "components": {
            "minecraft:material_instances": {
                "*": {
                    "texture": "wiki:dirt_like"
                }
            }
        }
    }
}
```

原木状方块示例：

<CodeHeader>BP/blocks/custom_log.json</CodeHeader>

```json
{
    "format_version": "1.26.10",
    "minecraft:block": {
        "description": {
            "identifier": "wiki:custom_log"
        },
        "components": {
            "minecraft:material_instances": {
                "*": {
                    "texture": "wiki:custom_log_side"
                },
                "end": {
                    "texture": "wiki:custom_log_top"
                },
                "up": "end",
                "down": "end"
            }
        }
    }
}
```

草状方块示例：

<CodeHeader>BP/blocks/custom_grass.json</CodeHeader>

```json
{
    "format_version": "1.26.10",
    "minecraft:block": {
        "description": {
            "identifier": "wiki:custom_grass"
        },
        "components": {
            "minecraft:material_instances": {
                "*": {
                    "texture": "wiki:custom_grass_side"
                },
                "up": {
                    "texture": "wiki:custom_grass_top"
                },
                "down": {
                    "texture": "wiki:custom_grass_bottom"
                }
            }
        }
    }
}
```

如果你正确遵循了这些步骤，你的方块现在应该有正确的纹理。

## 1.2 - 纹理在泥土上显示"？"

问题：我的自定义方块变成了一个带有问号的泥土方块。

<WikiImage src="unknown.png" pixelated="true" width="128" class="my-4" />

这是一个 `unknown` 方块，当方块标识符更改或你的方块 JSON 无效时会出现。

解决方案：使用 JSON linter 并仔细检查你的标识符没有更改。确保你的方块有 `minecraft:geometry` 和 `minecraft:material_instances`，或 `RP/blocks.json` 纹理条目。

---

## 2.0 - 渲染问题排查

本节将描述常见的方块渲染问题以及如何修复它们。

## 2.1 - 透明度不工作

问题：你的纹理文件中有透明像素，但在游戏中应用时它们变成不透明。

解决方案：导航到你的方块文件。导航到你的 `material_instances` 组件。添加以下内容到你的组件：

<CodeHeader>BP/blocks/your_block.json</CodeHeader>

```json
{
    "format_version": "1.26.10",
    "minecraft:block": {
        ...
        "components": {
            "minecraft:material_instances": {
                "*": {
                    "render_method": "alpha_test"
                }
            }
        }
    }
}
```

## 2.2 - 方块产生阴影

问题：你有自定义几何的方块，但它有阴影。

解决方案：将以下组件添加到你的方块代码中：

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:light_dampening": 0
```

## 3.0 - 常见内容日志错误

本节将描述常见的内容日志错误以及如何调试它们。

## 3.1 - 碰撞/选择框错误

问题：你收到类似以下的内容错误：

> `[Blocks][error]-minecraft:collision_box: min can't be below (-8, 0, -8) and max can't be more than (8, 16, 8)`

解决方案：检查你的 `minecraft:collision_box` 或 `minecraft:selection_box` 组件并进行以下操作：

-   确保 X 和 Z 值从 `-8`{lang=json} 到 `8`{lang=json}。
-   确保 Y 值从 `0`{lang=json} 到 `16`{lang=json}。
-   确保盒子不超出方块的 16×16×16 单位区域。

## 3.2 - 模型错误

问题：你收到类似以下的内容错误：

> `geometry.your_block contains X boxes outside...`

解决方案：你的几何大于 Minecraft 允许的。你可以减小几何或将其拆分为多个方块。

---

## 接下来做什么？

如果尝试这些步骤后仍有问题，欢迎加入 discord 服务器并在那里提问。

如果你认为任何信息有误或过时，请通过 github 贡献！