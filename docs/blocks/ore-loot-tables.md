---
title: Ore Loot Tables
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

:::tip FORMAT VERSION `1.21.0`
This tutorial assumes a basic understanding of blocks.
Check out the [blocks guide](/blocks/blocks-intro) before starting.
:::

This tutorial aims to show a new way of creating custom ore blocks with a proper loot table. The `minecraft:loot` component will run the specified loot table regardless of the tool used, but by adding the `match_tool` condition to your loot table you can specify what tools are required per pool.

In addition, through use of scripts and custom components, we can create the experience orb reward offered by vanilla ores if the correct tool is used to destroy the block.

-   Features:

    -   Can be mined using any given item (this tutorial covers the iron pickaxe)
    -   Can specify enchantments on items
    -   Also drops experience reward

-   Issues:

    -   All items must be specified individually
    -   Non-player methods of breaking the block (explosions, commands, etc.) will fail to drop the loot

## Loot Table

In the example below, you can see how the `match_tool` condition is used to test for a `minecraft:iron_pickaxe`:

<CodeHeader>BP/loot_tables/blocks/silver_ore.json</CodeHeader>

```json
{
    "pools": [
        {
            "rolls": 1,
            "conditions": [
                {
                    "condition": "match_tool",
                    "item": "minecraft:iron_pickaxe",
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
    "item": "minecraft:iron_pickaxe",
    "count": 1,
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

To spawn experience orbs when your ore block is destroyed, custom components can be used. Here, we use the [onPlayerDestroy](/blocks/block-events#player-destroy) event hook. If you don't want your block to spawn XP, this step can be ignored.

Similarly to the loot table, we check the item in the player's hand and then spawn a random number of XP orbs at the block's location.

<CodeHeader>BP/scripts/silver_ore.js</CodeHeader>

```js
import { world, EquipmentSlot } from "@minecraft/server";

/**
 * @param {number} min The minimum integer
 * @param {number} max The maximum integer
 * @returns {number} A random integer between the `min` and `max` parameters (inclusive)
 * */
const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// Register a custom component before the world is loaded
world.beforeEvents.worldInitialize.subscribe(({ blockComponentRegistry }) => {
    blockComponentRegistry.registerCustomComponent("wiki:silver_ore_xp_reward", {
        onPlayerDestroy({ block, dimension, player }) {
            // Check the tool in the player's hand
            const equippable = player?.getComponent("minecraft:equippable");
            if (!equippable) return; // Exit if the player or its equipment are undefined

            const itemStack = equippable.getEquipment(EquipmentSlot.Mainhand);
            if (itemStack?.typeId !== "minecraft:iron_pickaxe") return; // Exit if the player isn't holding an iron pickaxe

            // Specify enchantments
            const enchantable = itemStack.getComponent("minecraft:enchantable");
            const silkTouch = enchantable?.getEnchantment("silk_touch");
            if (silkTouch) return; // Exit if the iron pickaxe has the Silk Touch enchantment

            // Spawn the XP orbs
            const xpAmount = randomInt(0, 3); // Number of XP orbs to spawn

            for (let i = 0; i < xpAmount; i++) {
                dimension.spawnEntity("minecraft:xp_orb", block.location);
            }
        },
    });
});
```

## Block JSON

The following block behavior can be used as a template. Don't forget to set the block's texture using `terrain_texture.json`.

Here you need to do two things:

-   Point to the new loot table with the `minecraft:loot` component.
-   Add our experience reward custom component to the `minecraft:custom_components` array.

<CodeHeader>BP/blocks/silver_ore.json</CodeHeader>

```json
{
    "format_version": "1.21.0",
    "minecraft:block": {
        "description": {
            "identifier": "wiki:silver_ore",
            "menu_category": {
                "category": "nature",
                "group": "itemGroup.name.ore"
            }
        },
        "components": {
            "minecraft:loot": "loot_tables/blocks/silver_ore.json", // Won't be dropped if using Silk Touch.
            "minecraft:custom_components": ["wiki:silver_ore_xp_reward"]
        }
    }
}
```

## Result

![](/assets/images/blocks/ore-loot/result.gif)
