---
title: Ore Loot Tables
category: Tutorials
tags:
    - easy
mentions:
    - SykoUSS
    - ExDrill
    - MedicalJewel105
    - SmokeyStack
    - Chikorita-Lover
    - SirLich
    - TheItsNameless
    - QuazChick
---

## Features

This tutorial aims to show a new way of creating custom ore blocks with a proper loot table. The `minecraft:loot` component will run the specified loot table regardless of the tool used, but by adding the `match_tool` condition to your loot table you can specify what tools are required per pool.

Features:

-   Can be mined using any given item (this tutorial covers the iron pickaxe)
-   Can specify enchantments on items
-   Also drops experience reward

Issues:

-   All items must be specified individually
-   Non-player methods of breaking the block (explosions, commands, etc.) will fail to drop the loot

## Block Behavior

The following block behavior can be used as a template. Don't forget to set the block's texture using `terrain_texture.json`.

<CodeHeader>BP/blocks/silver_ore.json</CodeHeader>

```json
{
  "format_version": "1.20.0",
  "minecraft:block": {
    "description": {
      "identifier": "wiki:silver_ore",
      "menu_category": {
        "category": "nature",
        "group": "itemGroup.name.ore"
      }
    },
    "components": {
      ...
      // Calls an event that loads structure with xp reward
      "minecraft:on_player_destroyed": {
        "event": "xp_reward"
      },
      "minecraft:loot": "loot_tables/blocks/silver_ore.json" // Won't be dropped if using Silk Touch.
    },
    "events": {
      "xp_reward": {
        "run_command": {
          "command": [
            "structure load ore_xp_reward ~~~" // You can download structure with saved xp orbs lower
          ]
        }
      }
    }
  }
}
```

## Loot Table

The example shown, displays the required components

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

## Specifying Enchantments

If needed you can add the enchantments section to your condition, but remember each tool and level must be listed as separate pools.

Also note that it can correctly detect only 1st and 2nd enchantment level.

<CodeHeader>BP/loot_tables/blocks/silver_ore.json#pools</CodeHeader>

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

## Download Structure

<BButton
  link="/assets/packs/tutorials/blocks/ore-loot-tables/ore_xp_reward.mcstructure" download
  color=blue
>Download MCSTRUCTURE</BButton>

## Result

![](/assets/images/blocks/ore-loot/result.gif)
