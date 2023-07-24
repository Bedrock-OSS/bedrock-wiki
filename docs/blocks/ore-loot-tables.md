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
    - Keyyard
---

::: tip FORMAT VERSION `1.20.10`
This tutorial assumes a basic understanding of blocks.
Check out the [blocks guide](/blocks/blocks-intro) before starting.
:::

::: warning EXPERIMENTAL
Requires `Holiday Creator Features` to trigger events.
:::

This tutorial aims to show a new way of creating custom ore blocks with a proper loot table. The `minecraft:loot` component will run the specified loot table regardless of the tool used, but by adding the `match_tool` condition to your loot table you can specify what tools are required per pool.

- Features:

  -   Can be mined using any given item (this tutorial covers the iron pickaxe)
  -   Can specify enchantments on items
  -   Also drops experience reward

- Issues:

  -   All items must be specified individually
  -   Non-player methods of breaking the block (explosions, commands, etc.) will fail to drop the loot

## Block JSON

The following block behavior can be used as a template. Don't forget to set the block's texture using `terrain_texture.json`.

<CodeHeader>BP/blocks/silver_ore.json</CodeHeader>

```json
{
  "format_version": "1.20.10",
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

## Non-Experimental Methods

Rather than triggering a block event to summon reward experience, you could use one of the methods described below.

Please note that you need to download the "ore_xp_reward" structure file, which contains the XP orbs, from the [here](#download-structure).

### Method 1: Dummy Items and Function Loop

**Step 1**: Create a loot table for the block you want to drop XP. Let's drop the "minecraft:redstone" block as an example:

```json
{
  "pools": [
    {
      "rolls": 1,
      "entries": [
        {
          "type": "item",
          "name": "minecraft:redstone"
        }
      ]
    },
    {
      "rolls": 1,
      "entries": [
        {
          "type": "item",
          "name": "minecraft:barrier" // Dummy Item
        }
      ]
    }
  ]
}
```

In this case, we add an existing item called "minecraft:barrier" as a dummy item to trigger the XP drop. Alternatively, you could create a new item to use as a dummy if you want.

**Step 2**: Create a looping function to process the dropped items. This function should also be defined in a `BP/functions/tick.json` file to trigger it each tick.

```
execute as @e[type=item, name="Barrier"] at @s run structure load ore_xp_reward ~~~
execute as @e[type=item, name="Barrier"] run kill
```

This function will execute for any item entity with the name "Barrier" (our dummy item). It loads the "ore_xp_reward" structure at the item's location and then kills the item.

### Method 2: Function Loop Only

**Step 1**: Create a loot table for the block you want to drop XP, similar to the previous method. For example, let's use a "wiki:raw_silver" block:

```json
{
  "pools": [
    {
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

**Step 2**: Create a looping function to process the dropped items. This function should also be defined in a `BP/functions/tick.json` file to trigger it each tick.

```
execute as @e[type=item, name="Raw Silver", tag=!xp] at @s run structure load ore_xp_reward ~~~
execute as @e[type=item, name="Raw Silver", tag=!xp] run tag @s add xp
```

This function will execute for any item entity with the name "Raw Silver", which does not have the "xp" tag. It loads the "ore_xp_reward" at the item's location and then adds the "xp" tag to the item.

Remember to replace the item IDs, tags, and other specific details according to your needs.

## Download Structure

<BButton
  link="/assets/packs/tutorials/blocks/ore-loot-tables/ore_xp_reward.mcstructure" download
  color=blue
>Download MCSTRUCTURE</BButton>

## Result

![](/assets/images/blocks/ore-loot/result.gif)
