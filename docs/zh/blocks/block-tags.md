---
title: 方块标签
description: 方块标签在检查多种类型的方块时使用，可以启用 vanilla 功能。
category: 通用
nav_order: 3
related:
    - /blocks/vanilla-block-tags
license: true
mentions:
    - SirLich
    - yanasakana
    - aexer0e
    - SmokeyStack
    - MedicalJewel105
    - Lufurrius
    - Chikorita-Lover
    - victorsigma
    - TheItsNameless
    - QuazChick
    - Kaioga5
    - Xterionix
---

方块标签在检查多种类型的方块时使用，可以启用 vanilla 功能。
有关 vanilla 方块标签及其功能的列表，请访问[此页面](/blocks/vanilla-block-tags)。

## 应用标签

方块标签可以在方块的 `components` 中应用，前缀为 `tag:`，如下所示：

<CodeHeader>BP/blocks/tree_stump.json</CodeHeader>

```json
{
    "format_version": "1.26.10",
    "minecraft:block": {
        "description": {
            "identifier": "wiki:tree_stump",
            "menu_category": {
                "category": "nature"
            }
        },
        "components": {
            "tag:wood": {},
            "tag:minecraft:is_axe_item_destructible": {},
            "tag:wiki:very_useless": {}
        }
    }
}
```

## 测试标签

### 从方块描述符

-   `q.all_tags(...tags)`{lang=molang}
    -   返回方块是否具有所有列出的标签。
-   `q.any_tag(...tags)`{lang=molang}
    -   返回方块是否至少具有列出的标签之一。

<CodeHeader>方块描述符</CodeHeader>

```json
{
    "tags": "q.any_tag('wiki:glowing') && q.all_tags('wiki:custom_ore', 'stone')"
}
```

### 从实体

-   `q.block_has_all_tags(x, y, z, ...tags)`{lang=molang}
    -   返回指定坐标处的方块是否具有所有列出的标签。
-   `q.block_has_any_tag(x, y, z, ...tags)`{lang=molang}
    -   返回指定坐标处的方块是否至少具有列出的标签之一。
-   `q.relative_block_has_all_tags(x, y, z, ...tags)`{lang=molang}
    -   返回相对于实体的偏移处的方块是否具有所有列出的标签。
-   `q.relative_block_has_any_tag(x, y, z, ...tags)`{lang=molang}
    -   返回相对于实体的偏移处的方块是否至少具有列出的标签之一。

<CodeHeader>minecraft:client_entity > description</CodeHeader>

```json
"scripts": {
    "pre_animation": [
        "v.is_on_sand = q.relative_block_has_any_tag(0, -1, 0, 'sand');"
    ]
}
```

### 其他查询

**注意：** 以下查询函数没有已知的用例。

-   `q.block_neighbor_has_all_tags(x, y, z, ...tags)`{lang=molang}
-   `q.block_neighbor_has_any_tag(x, y, z, ...tags)`{lang=molang}

### 镐子示例

物品查询方块标签的示例：

<CodeHeader>BP/items/custom_pickaxe.json</CodeHeader>

```json
{
    "format_version": "1.26.10",
    "minecraft:item": {
        "description": {
            "identifier": "wiki:custom_pickaxe",
            "menu_category": {
                "category": "equipment",
                "group": "minecraft:itemGroup.name.pickaxe"
            }
        },
        "components": {
            "minecraft:digger": {
                "use_efficiency": true,
                "destroy_speeds": [
                    {
                        "speed": 5,
                        "block": {
                            "tags": "q.any_tag('minecraft:is_pickaxe_item_destructible')"
                        }
                    }
                ]
            }
        }
    }
}
```