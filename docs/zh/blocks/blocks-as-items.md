---
title: 方块作为物品
description: 了解在UI中、容器中和掉落在地上时代表方块的物品。
category: 通用
tags:
    - intermediate
license: true
mentions:
    - QuazChick
---

## 自动方块物品

当你手中拿着一个方块时，你实际拿的是一个放置该方块的物品。当自定义方块注册到游戏中时，Minecraft 也会自动注册一个新的物品来在物品栏中代表该方块。

此物品使用方块定义的菜单类别和显示名称，但无法修改自动方块物品的其他组件。
为了应用其他组件（如方块的2D图标），你需要用你自己的物品替换方块的物品。

## 替换方块物品

为了替换方块物品，你需要创建一个与方块具有相同标识符的新物品JSON文件。

你的新物品还需要 [方块放置器](/items/item-components#方块放置器) 组件，允许物品放置该方块。
方块放置器还会默认给物品带来方块的3D外观，但可以用 [图标](/items/item-components#图标) 组件覆盖它以显示2D精灵。

### 自定义花朵示例

替换方块物品必要的情况之一是花朵方块，它们在作为物品形式时应显示为图标而不是3D。

<CodeHeader>BP/blocks/daffodil.json</CodeHeader>

```json
{
    "format_version": "1.26.10",
    "minecraft:block": {
        "description": {
            "identifier": "wiki:daffodil"
        },
        "components": {
            "minecraft:flower_pottable": {},
            "minecraft:geometry": "minecraft:geometry.cross",
            "minecraft:material_instances": {
                "*": {
                    "texture": "wiki:daffodil",
                    "render_method": "alpha_test"
                }
            }
        }
    }
}
```

<CodeHeader>BP/items/daffodil.json</CodeHeader>

```json
{
    "format_version": "1.26.10",
    "minecraft:item": {
        "description": {
            "identifier": "wiki:daffodil", // 与方块的ID相同
            "menu_category": {
                "category": "nature",
                "group": "minecraft:itemGroup.name.flower"
            }
        },
        "components": {
            "minecraft:icon": "wiki:daffodil",
            "minecraft:block_placer": {
                "block": "wiki:daffodil",
                "aligned_placement": false, // 大多数建筑方块应为true，大多数植物方块应为false
                "replace_block_item": true
            }
        }
    }
}
```