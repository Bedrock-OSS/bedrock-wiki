---
title: 物品目录
description: 学习如何指定物品在创造模式菜单和配方书中出现的位置，以及如何向创造模式菜单添加自己的可扩展组。
category: 通用
related:
    - /items/vanilla-item-groups
license: true
mentions:
    - Supernova3695
    - QuazChick
---

合成物品目录文件用于指定物品在创造模式菜单和配方书中出现的位置。

首先，你需要在行为包的`item_catalog`文件夹中创建一个名为`crafting_item_catalog.json`的文件。
下面是应该包含在文件中的基本JSON格式：

<CodeHeader>BP/item_catalog/crafting_item_catalog.json</CodeHeader>

```json
{
    "format_version": "1.26.10",
    "minecraft:crafting_items_catalog": {
        "categories": []
    }
}
```

## 添加物品

首先，你需要决定你的物品应该放在哪个类别中。
这决定了物品在创造模式菜单和配方书中位于哪个标签页。

四个可用的类别是：

-   `"construction"`{lang=json}
-   `"equipment"`{lang=json}
-   `"items"`{lang=json}
-   `"nature"`{lang=json}

例如，如果我们将物品添加到"自然"标签页，将在`categories`数组中创建一个新条目，指定`category_name`为`"nature"`{lang=json}：

<CodeHeader>BP/item_catalog/crafting_item_catalog.json</CodeHeader>

```json
{
    "format_version": "1.26.10",
    "minecraft:crafting_items_catalog": {
        "categories": [
            {
                "category_name": "nature",
                "groups": []
            }
        ]
    }
}
```

物品以组的形式添加到物品目录的每个类别中。要添加一组新物品，你需要在类别的`groups`数组中创建一个新条目。

以下示例将两个自定义矿石块添加到"自然"类别。
请注意，物品目录中的自定义组将出现在原版组之后。

<CodeHeader>minecraft:crafting_items_catalog > categories</CodeHeader>

```json
{
    "category_name": "nature",
    "groups": [
        {
            "items": ["wiki:silver_ore", "wiki:steel_ore"]
        }
    ]
}
```

### 可扩展组

对于创造模式玩家，你可以选择使物品组可展开和可折叠。
这可以通过为组添加`group_identifier`参数来实现。

-   `icon`决定显示为组图标的物品。
-   `name`是用作组名称的本地化键。它也可以用于在物品和方块的`menu_category`参数中引用该组。

让我们使用`group_identifier`参数使我们的自定义矿石组在创造模式菜单中占用更少的空间！

<CodeHeader>minecraft:crafting_items_catalog > categories</CodeHeader>

```json
{
    "category_name": "nature",
    "groups": [
        {
            "group_identifier": {
                "icon": "wiki:silver_ore",
                "name": "wiki:itemGroup.name.ore"
            },
            "items": ["wiki:silver_ore", "wiki:steel_ore"]
        }
    ]
}
```

<CodeHeader>RP/texts/en_US.lang</CodeHeader>

```lang
wiki:itemGroup.name.ore=Custom Ores
```

就是这样！你现在知道如何为你的物品在物品目录中添加自定义组了。
