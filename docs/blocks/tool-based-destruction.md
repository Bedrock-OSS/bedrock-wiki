---
title: Tool-Based Destruction
description: Learn how to specify which types of tool should be used to mine your block.
category: Tutorials
tags:
    - intermediate
license: true
mentions:
    - QuazChick
---

:::tip FORMAT VERSION 1.21.130
This tutorial assumes a basic understanding of blocks and [block tags](/blocks/block-tags).
Check out the [blocks guide](/blocks/blocks-intro) before starting.
:::

## Before You Start

Unfortunately, the [destructible by mining](/blocks/block-components#destructible-by-mining) component has extremely inaccurate parameter names which makes tool-based destruction (and block destruction overall) especially confusing.

For you to follow this tutorial properly, make sure you understand the following:

-   The `seconds_to_destroy` parameter does not represent the number of _seconds_ it takes to destroy the block.

    This parameter actually defines the block's _hardness_ value, which is used as the base value to determine a block's mining duration.

-   The `destroy_speed` parameter of `item_specific_speeds` does not represent the speed of the block's destruction.

    If it were the measure of speed that its name implies, higher values (indicating a faster speed) would result in shorter mining durations, however higher values instead increase mining duration.

    This parameter actually defines the block's _hardness_ value (the same as `seconds_to_destroy`) when it is being mined by the specified `item`.

On this page, we will be referring to the value that `seconds_to_destroy` and `destroy_speed` represent using the word _hardness_ (which is the correct terminology).

## Block Hardness

### Defining Block Hardness

A block's _hardness_ value is set using the [destructible by mining](/blocks/block-components#destructible-by-mining) component.
By default a block's hardness is `0`{lang=json}, meaning it can be mined instantly.

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:destructible_by_mining": {
    "seconds_to_destroy": 2 // Sets the block's hardness to 2
}
```

Here are some hardness values used by vanilla blocks:

-   Dirt: `0.5`{lang=json}
-   Stone: `1.5`{lang=json}
-   Planks: `2`{lang=json}

_You can find other hardness values on the [Minecraft Wiki](https://minecraft.wiki/w/Breaking#Blocks_by_hardness)._

### Defining Suitable Tools

There are currently 6 item destructible [vanilla block tags](/blocks/vanilla-block-tags):

-   Axes: `minecraft:is_axe_item_destructible`
-   Hoes: `minecraft:is_hoe_item_destructible`
-   Pickaxes: `minecraft:is_pickaxe_item_destructible`
-   Shears: ~~`minecraft:is_shears_item_destructible`~~ (not functional, see [MCPE-189586](https://bugs.mojang.com/browse/MCPE-189586))
-   Shovels: `minecraft:is_shovel_item_destructible`
-   Swords: ~~`minecraft:is_sword_item_destructible`~~ (not functional, see [MCPE-189586](https://bugs.mojang.com/browse/MCPE-189586))

Applying one of these tags to your block will instruct the relevant tools to mine the block faster.

:::tip MULTIPLE TOOLS
Blocks aren't limited to just one item destructible tag, it's possible to let your block be mined faster by multiple types of tool!

This can be seen in vanilla Cobwebs which have both `minecraft:is_shears_item_destructible` and `minecraft:is_sword_item_destructible`.
:::

These tags can be applied to your block in its `components`:

<CodeHeader>BP/blocks/custom_stone.json</CodeHeader>

```json
{
    "format_version": "1.21.130",
    "minecraft:block": {
        "description": {
            "identifier": "wiki:limestone",
            "menu_category": {
                "category": "nature",
                "group": "minecraft:itemGroup.name.stone"
            }
        },
        "components": {
            "minecraft:destructible_by_mining": {
                "seconds_to_destroy": 1.5
            },
            // Allows pickaxes to mine this block faster
            "tag:minecraft:is_pickaxe_item_destructible": {}
        }
    }
}
```

## Tool-Based Drops

:::danger UNSUPPORTED
There is no proper way to specify which tools are required for a block to drop loot.
The following section describes workarounds that can be used to replicate vanilla drop mechanics as well as possible.
:::
:::danger EXPLOSIONS
The following workaround prevents block loot from dropping when destroyed by explosions, whereas vanilla blocks that require a tool will drop when exploded.
:::
:::danger SILK TOUCH
It is impossible to prevent a block from dropping itself when mined using an item with the Silk Touch enchantment.
:::

In order to prevent your block from dropping when destroyed without the required tool, you'll need to create a new loot table.

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:loot": "loot_tables/wiki/blocks/limestone.json"
```

### Loot Table

You can then use the `match_tool` condition to test for certain tool items, such as a pickaxe that is iron tier or higher.

Similarly to the destructible by mining component, the `match_tool` parameters are poorly named as they do not indicate the aspect of the tool that their filtering is based on. Here's a better description of what each filter parameter does:

-   `minecraft:match_tool_filter_all` checks that the item has all of the listed [tags](/items/item-tags).
-   `minecraft:match_tool_filter_any` checks that the item has at least one of the listed [tags](/items/item-tags).
-   `minecraft:match_tool_filter_none` checks that the item has none of the listed [tags](/items/item-tags).

:::tip EXCLUDING EMPTY HANDS
By default, the `match_tool` component will match an empty hand.
To prevent this from happening, you'll need to ensure that the stack size (`count`) is not 0.
:::

<CodeHeader>BP/loot_tables/wiki/blocks/limestone.json</CodeHeader>

```json
{
    "pools": [
        {
            "rolls": 1,
            "conditions": [
                {
                    "condition": "match_tool",
                    "count": 1, // Ensures that the hand is not empty
                    "minecraft:match_tool_filter_all": [
                        "minecraft:is_tool",
                        "minecraft:is_pickaxe" // Change this tag based on the tool type that must be used.
                    ],
                    // A list of the tool tiers that can successfully mine the block.
                    // If your block should drop regardless of the tool's tier, you should remove this filter rather than listing every tier.
                    "minecraft:match_tool_filter_any": [
                        "minecraft:iron_tier",
                        "minecraft:diamond_tier",
                        "minecraft:netherite_tier"
                    ]
                }
            ],
            "entries": [
                {
                    "type": "item",
                    "name": "wiki:limestone"
                }
            ]
        }
    ]
}
```

### Mining Penalty

Block destroy speed is _supposed_ to be over 3 times slower when using a tool that is not correct for drops.
However, given that custom blocks have no way to properly define the tool they require to drop, this mining penalty is not applied.

We can replicate this penalty by making the hardness of the block **3.33×** higher than it should be when the correct tool is not being used.
This can be achieved by using the `item_specific_speeds` parameter of the destructible by mining component.

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:destructible_by_mining": {
    "seconds_to_destroy": 6.66, // Hardness when not using tool (2 × 3.33 = 6.66)
    "item_specific_speeds": [
        {
            "destroy_speed": 2, // Hardness when using tool
            "item": {
                "tags": "q.all_tags('minecraft:is_tool', 'minecraft:is_pickaxe') && q.any_tag('minecraft:iron_tier', 'minecraft:diamond_tier', 'minecraft:netherite_tier')"
            }
        }
    ]
}
```

### Tier Destructible Tags

There are also several tier destructible [vanilla block tags](/blocks/vanilla-block-tags) that indicate the tier of tool required for the block to drop.
While adding one of these tags to your block does not come with changes in block functionality (such as preventing drops without a custom loot table), the appropriate tag should be added to your block to be consistent with vanilla blocks.

-   Stone or better: `minecraft:stone_tier_destructible`
-   Iron or better: `minecraft:iron_tier_destructible`
-   Diamond or better: `minecraft:diamond_tier_destructible`

## Bad Practices

-   Do not use `item_specific_speeds` to individually define a _hardness_ value for each tool item.

    This will prevent the Efficiency enchantment and custom tools from affecting your block and will make your JSON unnecessarily long.
    You should **always** use the `minecraft:is_*_item_destructible` tags instead.
