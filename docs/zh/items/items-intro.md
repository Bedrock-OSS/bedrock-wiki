---
title: 物品入门
description: 一个"你好世界"式的物品制作指南。学习物品格式以及如何创建基本的自定义物品。
category: 通用
nav_order: 1
tags:
    - guide
    - beginner
mentions:
    - SirLich
    - solvedDev
    - Joelant05
    - yanasakana
    - destruc7ion
    - aexer0e
    - stirante
    - ChibiMango
    - MedicalJewel105
    - Sprunkles137
    - mark-wiemer
    - TheItsNameless
    - s1050613
    - SmokeyStack
    - QuazChick
---

Minecraft Bedrock允许我们在世界中添加具有各种类似原版属性的自定义物品。

本教程将介绍如何为Minecraft稳定版创建基本物品。

## 注册物品

物品定义的结构与实体类似：它们包含一个描述和定义物品行为的组件列表。

下面是进入创造模式物品栏的自定义物品所需的**最低**行为端代码。

<CodeHeader>BP/items/custom_item.json</CodeHeader>

```json
{
    "format_version": "1.26.10",
    "minecraft:item": {
        "description": {
            "identifier": "wiki:custom_item",
            "menu_category": {
                "category": "items"
            }
        },
        "components": {} // Must be here, even if empty!
    }
}
```

### 物品描述

-   定义物品的标识符 - 格式为`namespace:identifier`的唯一ID。
-   配置物品放入哪个`menu_category`。
    -   还接受可选参数`group`和`is_hidden_in_commands`。

## 添加组件

目前，我们的自定义物品正在使用默认组件值（可以在[这里](/items/item-components)找到）。

让我们配置我们自己的功能！

<CodeHeader>BP/items/custom_item.json</CodeHeader>

```json
{
    "format_version": "1.26.10",
    "minecraft:item": {
        "description": {
            "identifier": "wiki:custom_item",
            "menu_category": {
                "category": "construction"
            }
        },
        "components": {
            "minecraft:damage": 10,
            "minecraft:durability": {
                "max_durability": 36
            },
            "minecraft:hand_equipped": true
        }
    }
}
```

在此浏览更多物品组件[here](/items/item-components)！

## 应用纹理

我们需要在`RP/textures/item_texture.json`中创建纹理简称以将其链接到图像。

<CodeHeader>RP/textures/item_texture.json</CodeHeader>

```json
{
    "texture_data": {
        "wiki:custom_item": {
            "textures": "textures/items/custom_item"
        }
    }
}
```

在我们的物品文件中，我们将添加`minecraft:icon`组件来应用纹理。

<CodeHeader>BP/items/custom_item.json</CodeHeader>

```json
{
    "format_version": "1.26.10",
    "minecraft:item": {
        "description": {
            "identifier": "wiki:custom_item",
            "menu_category": {
                "category": "construction"
            }
        },
        "components": {
            "minecraft:icon": "wiki:custom_item"
        }
    }
}
```

:::tip 方块图标
或者，[方块放置器](/items/item-components#block-placer)物品可以省略`minecraft:icon`组件以使用方块的3D图标显示物品。
:::

## 定义名称

最后，让我们像这样定义物品的名称：

<CodeHeader>RP/texts/en_US.lang</CodeHeader>

```lang
item.wiki:custom_item=Custom Item
```

## 结果

在本页面中，你已了解以下内容：

-   [x] 物品的基本功能
-   [x] 如何应用纹理
-   [x] 如何在`item_texture.json`中使用简称链接纹理
-   [x] 如何在语言文件中定义名称
