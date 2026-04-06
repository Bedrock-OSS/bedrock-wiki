---
title: 物品故障排除
description: 物品故障排除指南。
category: 通用
tags:
    - help
mentions:
    - SmokeyStack
    - yanasakana
    - SirLich
    - MedicalJewel105
    - TheDoctor15
    - ThomasOrs
    - QuazChick
---

:::tip
本页面包含关于_物品_的故障排除信息。在继续之前，你应该阅读我们的[全局故障排除](/guide/troubleshooting)文档。
:::

## 从这里开始

> "我按照教程或尝试制作自己的物品，但出了点问题！"

不需要惊慌！本页面将帮助你调试常见问题。

### 物品不存在

-   确认你的包确实已应用到你的世界
-   确认你的物品在`BP/items/`文件夹中
-   确认你的物品是有效的，根据[jsonlint](https://jsonlint.com/)。
-   确认你的标识符全部是小写，看起来类似于：`wiki:my_item`

### 缺失纹理

导航到你的`item_texture.json`文件。确保它命名正确，并在正确的文件夹中。以下是一些错误名称的示例：

-   ⚠️ `texture/item_texture.json`
-   ⚠️ `textures/Item_texture.json`
-   ⚠️ `textures/item_textures.json`

以下是用于比较的示例文件：

<CodeHeader>RP/textures/item_texture.json</CodeHeader>

```json
{
    "texture_data": {
        "wiki:your_item_icon": {
            "textures": "textures/items/your_item_icon"
        }
    }
}
```

接下来，导航到你的物品BP文件。将`minecraft:icon`组件放在物品文件中组件部分下方。确保它命名正确。

<CodeHeader>BP/items/your_item.json</CodeHeader>

```json
{
    "format_version": "1.26.10",
    "minecraft:item": {
        "description": {
            "identifier": "wiki:your_item",
            "menu_category": {
                "category": "items"
            }
        },
        "components": {
            "minecraft:icon": "wiki:your_item_icon" // Make sure this string matches the shortname you put in item_texture.json
        }
    }
}
```

如果正确执行了这些步骤，你的物品现在应该有纹理了。

## 现在怎么办？

你已经完成了指南的结尾。如果你仍然有任何问题，欢迎[加入Discord服务器](/discord)并在那里提问。
