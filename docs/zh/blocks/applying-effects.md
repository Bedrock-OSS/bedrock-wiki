---
title: 应用效果
description: 本教程旨在展示如何对位于方块特定半径内的实体施加状态效果。
category: 教程
tags:
    - easy
    - scripting
license: true
mentions:
    - MysticChair
    - SirLich
    - MedicalJewel105
    - QuazChick
    - SmokeyStack
---

::: tip 格式版本 1.26.10
本教程假设你对方块有基本了解，包括[方块事件](/blocks/block-events)。
开始前请先阅读[方块指南](/blocks/blocks-intro)。
:::

本教程旨在展示如何对位于方块特定半径内的实体施加状态效果。

## 方块 JSON

为了匹配原版的信标方块，我们的自定义方块应该每 4 秒施加一次效果。
这可以通过让方块每 80 tick "刻"一次来实现。

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:tick": {
    "interval_range": [80, 80], // 刻间隔不应随机，因此最小值和最大值使用相同的数值。
    "looping": true
}
```

接下来，我们需要注册自定义组件来挂钩[tick](/blocks/block-events#tick)事件。
这个组件应该对指定区域内的实体施加效果，所以我们将其命名为 `wiki:radial_effects`。

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"wiki:radial_effects": [
    {
        "radius": 64, // 对位于此半径内的实体施加以下效果。
        "name": "wither",
        "duration": 600, // 30 秒（以 tick 为单位）。
        "amplifier": 1
    },
    {
        "radius": 64,
        "name": "slowness",
        "duration": 600,
        "amplifier": 2
    }
]
```

## 自定义组件脚本

<CodeHeader>BP/scripts/radialEffects.js</CodeHeader>

```js
import { system } from "@minecraft/server";

/** @type {import("@minecraft/server").BlockCustomComponent} */
const BlockRadialEffectsComponent = {
    onTick({ block, dimension }, { params }) {
        const effects = params; // 我们在方块 JSON 中为组件分配的值。

        // 遍历数组中的每个对象。
        for (const { radius, name, duration, amplifier } of effects) {
            // 获取方块周围指定 "radius" 半径内的所有实体。
            const entities = dimension.getEntities({
                location: block.center(),
                maxDistance: radius,
            });

            for (const entity of entities) {
                entity.addEffect(name, duration, { amplifier });
            }
        }
    },
};

system.beforeEvents.startup.subscribe(({ blockComponentRegistry }) => {
    blockComponentRegistry.registerCustomComponent(
        "wiki:radial_effects",
        BlockRadialEffectsComponent
    );
});
```

## 示例 JSON

<Spoiler title="示例凋零方块">

<CodeHeader>BP/blocks/wither_block.json</CodeHeader>

```json
{
    "format_version": "1.26.10",
    "minecraft:block": {
        "description": {
            "identifier": "wiki:wither_block",
            "menu_category": {
                "category": "items"
            }
        },
        "components": {
            "minecraft:geometry": "geometry.wither_block",
            "minecraft:material_instances": {
                "*": {
                    "texture": "wiki:wither_block"
                }
            },
            "minecraft:tick": {
                "interval_range": [80, 80],
                "looping": true
            },
            "wiki:radial_effects": [
                {
                    "radius": 64,
                    "name": "wither",
                    "duration": 600,
                    "amplifier": 1
                },
                {
                    "radius": 64,
                    "name": "slowness",
                    "duration": 600,
                    "amplifier": 2
                }
            ]
        }
    }
}
```

</Spoiler>
