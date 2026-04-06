---
title: 自定义食物
description: 学习如何制作自定义食物，使其在食用后为玩家提供效果（如金苹果）。
category: 教程
tags:
    - easy
    - scripting
license: true
mentions:
    - KawEduh-dv
    - QuazChick
---

:::tip 格式版本 1.26.10
本文档需要对自定义物品有基本了解。
开始之前请查看[物品指南](/items/items-intro)!
:::

在本页面，你将学习如何制作自定义食物，使其在食用后为玩家提供效果（如金苹果）。

## 基本物品JSON

<CodeHeader>BP/items/custom_food.json</CodeHeader>

```json
{
    "format_version": "1.26.10",
    "minecraft:item": {
        "description": {
            "identifier": "wiki:custom_food",
            "menu_category": {
                "category": "equipment",
                "group": "minecraft:itemGroup.name.miscFood"
            }
        },
        "components": {
            "minecraft:icon": "wiki:custom_food",
            "minecraft:food": {
                "nutrition": 4,
                "saturation_modifier": 0.6
            },
            "minecraft:use_animation": "eat",
            "minecraft:use_modifiers": {
                "use_duration": 1.6,
                "movement_modifier": 0.35
            },
            "minecraft:tags": {
                "tags": [
                    "minecraft:is_food",
                    "minecraft:is_fish", // Only include if the food is fish
                    "minecraft:is_meat", // Only include if the food is meat (not including fish)
                    "minecraft:is_cooked" // Only include if the food is cooked
                ]
            }
        }
    }
}
```

如果你已经知道如何将纹理放置在正确的路径中，可以跳过下文，但如果你不知道，仅仅将纹理文件放在`RP/textures/items`文件夹中是不够的。

我们现在需要在资源包的`RP/textures/item_texture.json`文件中创建一个对象，其名称与上述`minecraft:icon`组件中定义的名称相同。

<CodeHeader>RP/textures/item_texture.json</CodeHeader>

```json
{
    "texture_data": {
        "wiki:custom_food": {
            "textures": "textures/wiki/items/custom_food"
        }
    }
}
```

## 应用效果

为了在食物被食用后为玩家应用效果，我们需要使用[自定义组件](/items/item-events)。

在本教程中，我们的自定义组件是`wiki:food_effects`。
请确保将命名空间更改为你唯一定义你的附加包的名称。

<CodeHeader>minecraft:item > components</CodeHeader>

```json
"wiki:food_effects": [
    {
        "name": "wither",
        "duration": 600, // 30 seconds in ticks.
        "amplifier": 1
    },
    {
        "name": "slowness",
        "duration": 600,
        "amplifier": 2
    }
]
```

### 自定义组件脚本

在脚本文件中，只需在使用特定物品后使用一个事件，使用该物品后玩家将获得一个或多个效果，如下所示。

<CodeHeader>BP/scripts/main.js</CodeHeader>

```js
import { system } from "@minecraft/server";

const ItemFoodEffectsComponent = {
    onConsume({ source }, { params }) {
        // Iterates over each object in the component's array.
        for (const { name, duration, amplifier } of params) {
            source.addEffect(name, duration, { amplifier });
        }
    },
};

system.beforeEvents.startup.subscribe(({ itemComponentRegistry }) => {
    // Register the custom component for use in the item JSON file:
    itemComponentRegistry.registerCustomComponent("wiki:food_effects", ItemFoodEffectsComponent);
});
```
