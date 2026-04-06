---
title: 矿石战利品表
description: 了解如何防止使用错误工具挖掘时掉落方块战利品，并在成功挖掘时获得经验奖励。
category: 教程
tags:
    - easy
    - scripting
mentions:
    - SykoUSS
    - ExDrill
    - MedicalJewel105
    - SmokeyStack
    - Chikorita-Lover
    - SirLich
    - TheItsNameless
    - QuazChick
    - Keyyard
---

:::tip 格式版本 1.26.10
本教程假设你对方块有基本理解。
在开始之前请查看[方块指南](/blocks/blocks-intro)。
:::

本教程旨在展示一种创建具有正确战利品表的自定义矿石方块的新方法。
`minecraft:loot` 组件将运行指定的战利品表，不管使用什么工具，但是通过将 `match_tool` 条件添加到你的战利品表，你可以指定每个池需要什么工具。

此外，通过使用脚本和自定义组件，我们可以创建使用正确工具破坏方块时提供的 vanilla 矿石经验球奖励。

-   功能：

    -   只能使用适当的工具挖掘
    -   可以指定物品上的附魔
    -   也会掉落经验奖励

-   问题：

    -   非玩家方法破坏方块（爆炸、命令等）将无法掉落战利品

## 战利品表

在下面的示例中，你可以看到如何使用 `match_tool` 条件测试铁等级或更高的镐：

<CodeHeader>BP/loot_tables/blocks/silver_ore.json</CodeHeader>

```json
{
    "pools": [
        {
            "rolls": 1,
            "conditions": [
                {
                    "condition": "match_tool",
                    "minecraft:match_tool_filter_all": [
                        "minecraft:is_tool",
                        "minecraft:is_pickaxe"
                    ],
                    "minecraft:match_tool_filter_any": [
                        "minecraft:iron_tier",
                        "minecraft:diamond_tier",
                        "minecraft:netherite_tier"
                    ],
                    "count": 1
                }
            ],
            "entries": [
                {
                    "type": "item",
                    "name": "wiki:raw_silver"
                }
            ]
        }
    ]
}
```

### 指定附魔

如果需要，你可以将附魔部分添加到你的条件中，但请记住每个工具和等级必须作为单独的池列出。

 также note that it can correctly detect only 1st and 2nd enchantment level.

<CodeHeader>BP/loot_tables/blocks/silver_ore.json > pools</CodeHeader>

```json
"conditions": [
    {
        "condition": "match_tool",
        ...
        "enchantments": [
            {
                "fortune": {
                    "level": 1
                }
            }
        ]
    }
]
```

## 经验奖励脚本

为了在你的矿石方块被破坏时生成经验球，可以使用自定义组件。这里，我们使用[玩家破坏](/blocks/block-events#玩家破坏)事件钩子。如果你不希望你的方块生成 XP，可以忽略此步骤。

与战利品表类似，我们检查玩家手中的物品，然后在方块位置生成随机数量的经验球。

<CodeHeader>BP/scripts/silver_ore.js</CodeHeader>

```js
import { system, EquipmentSlot } from "@minecraft/server";

/**
 * @param {number} min 最小整数
 * @param {number} max 最大整数
 * @returns {number} `min` 和 `max` 参数之间的随机整数（包括）
 * */
const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const BlockExperienceRewardComponent = {
    onPlayerBreak({ block, dimension, player }, { params }) {
        // 检查玩家手中的工具
        const equippable = player?.getComponent("minecraft:equippable");
        if (!equippable) return; // 如果玩家或其装备未定义则退出

        const itemStack = equippable.getEquipment(EquipmentSlot.Mainhand);
        if (
            !itemStack ||
            !itemStack.hasTag("minecraft:is_tool") ||
            !itemStack.hasTag("minecraft:is_pickaxe") ||
            (!itemStack.hasTag("minecraft:iron_tier") &&
                !itemStack.hasTag("minecraft:diamond_tier") &&
                !itemStack.hasTag("minecraft:netherite_tier"))
        )
            return; // 如果玩家没有持有合适的镐则退出

        // 指定附魔
        const enchantable = itemStack.getComponent("minecraft:enchantable");
        const silkTouch = enchantable?.getEnchantment("silk_touch");
        if (silkTouch) return; // 如果铁镐有精准采集附魔则退出

        // 生成经验球
        const xpAmount = randomInt(params.min, params.max); // 要生成的经验球数量

        for (let i = 0; i < xpAmount; i++) {
            dimension.spawnEntity("minecraft:xp_orb", block.location);
        }
    },
};

// 在世界加载前注册自定义组件
system.beforeEvents.startup.subscribe(({ blockComponentRegistry }) => {
    blockComponentRegistry.registerCustomComponent(
        "wiki:experience_reward",
        BlockExperienceRewardComponent
    );
});
```

## 方块 JSON

以下方块行为可用作模板。别忘了使用 `terrain_texture.json` 设置方块的纹理。

这里你需要做两件事：

-   用 `minecraft:loot` 组件指向新的战利品表。
-   将我们的经验奖励自定义组件添加到方块的 `components`。

<CodeHeader>BP/blocks/silver_ore.json</CodeHeader>

```json
{
    "format_version": "1.26.10",
    "minecraft:block": {
        "description": {
            "identifier": "wiki:silver_ore",
            "menu_category": {
                "category": "nature",
                "group": "minecraft:itemGroup.name.ore"
            }
        },
        "components": {
            "minecraft:loot": "loot_tables/blocks/silver_ore.json", // 使用精准采集不会掉落。
            "wiki:experience_reward": {
                "min": 0,
                "max": 3
            }
        }
    }
}
```

## 结果

![](result.gif)