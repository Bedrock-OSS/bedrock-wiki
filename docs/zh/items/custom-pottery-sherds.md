---
title: 自定义陶片
description: 学习如何制作自定义陶片。
category: 教程
tags:
    - easy
license: true
mentions:
    - SmokeyStack
    - QuazChick
---

:::tip 格式版本 1.26.10
本文档需要对自定义物品有基本了解。
开始之前请查看[物品指南](/items/items-intro)和[物品标签](/items/item-tags)!
:::

Minecraft Bedrock允许我们添加可用于合成装饰罐的自定义陶片。本文将介绍如何创建它们。

## 注册陶片

陶片由[物品标签](/items/item-tags)控制！要允许物品用于合成装饰罐，我们需要将`minecraft:decorated_pot_sherds`标签应用到我们的物品上。

:::warning 物品名称

显示用于合成装饰罐的陶片的工具提示将假定物品的本地化键格式为`item.<identifier>.name`{lang=xml}。因此，你需要将物品的显示名称更改为此格式。

<CodeHeader>RP/texts/en_US.lang</CodeHeader>

```lang
item.wiki:custom_pottery_sherd.name=Custom Pottery Sherd
```

:::

<CodeHeader>BP/items/custom_pottery_sherd.json</CodeHeader>

```json
{
    "format_version": "1.26.10",
    "minecraft:item": {
        "description": {
            "identifier": "wiki:custom_pottery_sherd",
            "menu_category": {
                "category": "items",
                "group": "minecraft:itemGroup.name.potterySherds"
            }
        },
        "components": {
            "minecraft:icon": "wiki:custom_pottery_sherd", // Shortname defined in "RP/textures/item_texture.json"
            "minecraft:tags": {
                "tags": ["minecraft:decorated_pot_sherds"] // Allows the item to be used to craft a Decorated Pot
            },
            "minecraft:display_name": {
                "value": "item.wiki:custom_pottery_sherd.name"
            }
        }
    }
}
```

现在我们已经注册了陶片，可以通过将陶片放入合成台来测试它。如果你正确应用了标签，合成台应该输出一个装饰罐！

![自定义陶片物品用于合成装饰罐](crafting.png)

然而，装饰罐仍然不会显示陶片本身。这是因为我们还没有告诉装饰罐要显示什么图像！

## 定义图案纹理

以下是我们将在本教程中使用的陶片图案纹理示例：

<WikiImage
    src="custom_pottery_pattern.png"
    caption="RP/textures/wiki/blocks/custom_pottery_pattern.png"
    pixelated
/>

为了告诉游戏显示纹理，我们需要编辑装饰罐的客户端实体文件。将以下JSON文件添加到你的资源包：

<CodeHeader>RP/entity/decorated_pot.json</CodeHeader>

```json
{
    "format_version": "1.8.0",
    "minecraft:client_entity": {
        "description": {
            "identifier": "minecraft:decorated_pot",
            "textures": {
                // Each shortname listed here should be the identifier of your item without its namespace.
                "custom_pottery_sherd": "textures/wiki/blocks/custom_pottery_pattern" // Path to custom pot texture
            }
        }
    }
}
```

如果你做的一切都正确，你的装饰罐现在将显示你的陶片，而不是一个空罐！

![装饰罐的一面带有自定义图案](decorated_pot.png)

## 附加说明

**问题**：编辑客户端实体文件会使我的附加包与添加陶片的其他附加包不兼容吗？

**答案**：不会！客户端实体文件实际上会合并定义。只要你的物品标识符是唯一的，其他附加包就不会覆盖它们！如果你担心没有命名空间的物品标识符不是唯一的，请为你的标识符添加命名空间前缀，例如`wiki:wiki_custom_pottery_sherd`。
