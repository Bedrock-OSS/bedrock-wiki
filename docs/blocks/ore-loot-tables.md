---
title: Ore Loot Tables
description: Learn how to prevent your block loot from dropping when mined with the wrong tool and drop an experience reward when mined successfully.
category: Tutorials
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

:::tip FORMAT VERSION `1.21.110`
This tutorial assumes a basic understanding of blocks.
Check out the [blocks guide](/blocks/blocks-intro) before starting.
:::

This tutorial aims to show a new way of creating custom ore blocks with a proper loot table.
The `minecraft:loot` component will run the specified loot table regardless of the tool used, but by adding the `match_tool` condition to your loot table you can specify what tools are required per pool.

In addition, through use of scripts and custom components, we can create the experience orb reward offered by vanilla ores if the correct tool is used to destroy the block.

-   Features:

    -   Can only be mined using an appropriate tool
    -   Can specify enchantments on items
    -   Also drops experience reward

-   Issues:

    -   Non-player methods of breaking the block (explosions, commands, etc.) will fail to drop the loot

## Loot Table

In the example below, you can see how the `match_tool` condition is used to test for a pickaxe item that is iron tier or higher:
:

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

### Specifying Enchantments

If needed you can add the enchantments section to your condition, but remember each tool and level must be listed as separate pools.

Also note that it can correctly detect only 1st and 2nd enchantment level.

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

## XP Reward Script

To spawn experience orbs when your ore block is destroyed, custom components can be used. Here, we use the [onPlayerBreak](/blocks/block-events#player-break) event hook. If you don't want your block to spawn XP, this step can be ignored.

Similarly to the loot table, we check the item in the player's hand and then spawn a random number of XP orbs at the block's location.

<CodeHeader>BP/scripts/silver_ore.js</CodeHeader>

```js
import { system, EquipmentSlot } from "@minecraft/server";

/**
 * @param {number} min The minimum integer
 * @param {number} max The maximum integer
 * @returns {number} A random integer between the `min` and `max` parameters (inclusive)
 * */
const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const BlockExperienceRewardComponent = {
    onPlayerBreak({ block, dimension, player }, { params }) {
        // Check the tool in the player's hand
        const equippable = player?.getComponent("minecraft:equippable");
        if (!equippable) return; // Exit if the player or its equipment are undefined

        const itemStack = equippable.getEquipment(EquipmentSlot.Mainhand);
        if (
            !itemStack ||
            !itemStack.hasTag("minecraft:is_tool") ||
            !itemStack.hasTag("minecraft:is_pickaxe") ||
            (!itemStack.hasTag("minecraft:iron_tier") &&
                !itemStack.hasTag("minecraft:diamond_tier") &&
                !itemStack.hasTag("minecraft:netherite_tier"))
        )
            return; // Exit if the player isn't holding a suitable pickaxe

        // Specify enchantments
        const enchantable = itemStack.getComponent("minecraft:enchantable");
        const silkTouch = enchantable?.getEnchantment("silk_touch");
        if (silkTouch) return; // Exit if the iron pickaxe has the Silk Touch enchantment

        // Spawn the XP orbs
        const xpAmount = randomInt(params.min, params.max); // Number of XP orbs to spawn

        for (let i = 0; i < xpAmount; i++) {
            dimension.spawnEntity("minecraft:xp_orb", block.location);
        }
    },
};

// Register a custom component before the world is loaded
system.beforeEvents.startup.subscribe(({ blockComponentRegistry }) => {
    blockComponentRegistry.registerCustomComponent(
        "wiki:experience_reward",
        BlockExperienceRewardComponent
    );
});
```

## Block JSON

The following block behavior can be used as a template. Don't forget to set the block's texture using `terrain_texture.json`.

Here you need to do two things:

-   Point to the new loot table with the `minecraft:loot` component.
-   Add our experience reward custom component to the block's `components`.

<CodeHeader>BP/blocks/silver_ore.json</CodeHeader>

```json
{
    "format_version": "1.21.110",
    "minecraft:block": {
        "description": {
            "identifier": "wiki:silver_ore",
            "menu_category": {
                "category": "nature",
                "group": "minecraft:itemGroup.name.ore"
            }
        },
        "components": {
            "minecraft:loot": "loot_tables/blocks/silver_ore.json", // Won't be dropped if using Silk Touch.
            "wiki:experience_reward": {
                "min": 0,
                "max": 3
            }
        }
    }
}
```

## Result

![](/assets/images/blocks/ore-loot/result.gif)
