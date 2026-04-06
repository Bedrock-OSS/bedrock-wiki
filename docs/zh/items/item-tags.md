---
title: 物品标签
description: 物品标签在检查多种类型的物品时使用，可以启用原版功能。
category: 通用
related:
    - /items/vanilla-item-tags
nav_order: 3
license: true
mentions:
    - Xterionix
    - SmokeyStack
    - QuazChick
---

物品标签在检查多种类型的物品时使用，可以启用原版功能。
有关原版物品标签及其功能的列表，请访问[此页面](/items/vanilla-item-tags)。

## 应用标签

<CodeHeader>BP/items/example_item.json</CodeHeader>

```json
{
    "format_version": "1.26.10",
    "minecraft:item": {
        "description": {
            "identifier": "wiki:example_item"
        },
        "components": {
            "minecraft:tags": {
                "tags": ["wiki:example_tag"]
            }
        }
    }
}
```

## 测试标签

### 从实体

-   `q.equipped_item_all_tags(slot, ...tags)`{lang=molang}
    -   返回指定位置的物品是否具有所有列出的标签。
-   `q.equipped_item_any_tag(slot, ...tags)`{lang=molang}
    -   返回指定位置的物品是否至少具有列出的标签之一。

<CodeHeader>minecraft:client_entity > description</CodeHeader>

```json
"scripts": {
    "pre_animation": [
        "v.is_holding_pickaxe = q.equipped_item_all_tags('slot.weapon.mainhand', 'minecraft:is_tool', 'minecraft:is_pickaxe');"
    ]
}
```

### 从物品描述符

-   `q.all_tags(...tags)`{lang=molang}
    -   返回物品是否具有所有列出的标签。
-   `q.any_tag(...tags)`{lang=molang}
    -   返回物品是否至少具有列出的标签之一。

<CodeHeader>物品描述符</CodeHeader>

```json
{
    "tags": "q.all_tags('minecraft:is_tool', 'minecraft:is_pickaxe') && q.any_tag('minecraft:diamond_tier', 'minecraft:netherite_tier')"
}
```

### 从配方

<CodeHeader>minecraft:recipe_shapeless</CodeHeader>

```json
"ingredients": [
    {
        "item": { "tag": "minecraft:planks" }
    }
]
```
