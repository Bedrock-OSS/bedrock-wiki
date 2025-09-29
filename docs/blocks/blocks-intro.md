---
title: Intro to Blocks
description: A Hello world guide in making blocks. Learn the block format and how to create basic custom blocks.
category: General
nav_order: 1
tags:
    - guide
    - beginner
mentions:
    - SirLich
    - solvedDev
    - Joelant05
    - Dreamedc2015
    - sermah
    - yanasakana
    - aexer0e
    - SmokeyStack
    - MedicalJewel105
    - stirante
    - ChibiMango
    - Hatchibombotar
    - fraysdev
    - Ciosciaa
    - Sprunkles137
    - ThomasOrs
    - QuazChick
---

:::tip FORMAT & MIN ENGINE VERSION `1.21.110`
This page discusses basic block features. You can learn more about other block components [here](/blocks/block-components).
:::
:::danger NOTE
Vanilla blocks are hardcoded. You may not override or access them.
:::

Minecraft Bedrock allows us to add custom blocks into our world with various vanilla-like properties. Custom blocks can have multiple stages (like plants), directional facing, and other useful features.

This tutorial will cover how to create basic blocks for the stable version of Minecraft.

## Registering Blocks

Block definitions are structured similarly to entities: they contain a description and a list of components that defines the block's behavior.

Unlike entities, blocks do not have a resource definition other than in `RP/blocks.json`.

Below is the **minimum** behavior-side code to get a custom block into the creative inventory.

<CodeHeader>BP/blocks/custom_block.json</CodeHeader>

```json
{
    "format_version": "1.21.110",
    "minecraft:block": {
        "description": {
            "identifier": "wiki:custom_block",
            "menu_category": {
                "category": "construction", // The creative inventory or recipe book tab that the block is placed into
                "group": "minecraft:itemGroup.name.concrete", // The expandable group that the block is a part of. (Optional)
                "is_hidden_in_commands": false // Is the block hidden from use in commands? (Optional)
            }
        },
        "components": {} // Must be here, even if empty!
    }
}
```

### Block Description

-   Defines the block's `identifier` - a unique ID in the format of `namespace:identifier`.
-   Configures which `menu_category` the block is placed into.
    -   Also takes the optional parameters `group` and `is_hidden_in_commands`.

_The block description is also home to [states](/blocks/block-states) and [traits](/blocks/block-traits), which are covered in their own pages._

## Adding Components

Right now, our custom block is using the default component values (which can be found [here](/blocks/block-components)).

Let's configure our own functionality!

<CodeHeader>BP/blocks/custom_block.json</CodeHeader>

```json
{
    "format_version": "1.21.110",
    "minecraft:block": {
        "description": {
            "identifier": "wiki:custom_block",
            "menu_category": {
                "category": "construction"
            }
        },
        "components": {
            "minecraft:destructible_by_mining": {
                "seconds_to_destroy": 3
            },
            "minecraft:destructible_by_explosion": {
                "explosion_resistance": 3
            },
            "minecraft:map_color": "#ffffff",
            "minecraft:light_dampening": 0,
            "minecraft:light_emission": 4,
            "minecraft:loot": "loot_tables/blocks/custom_block.json"
        }
    }
}
```

-   [`minecraft:destructible_by_mining`](/blocks/block-components#destructible-by-mining) defines how long the player will need to mine the block until it breaks. Currently, it isn't possible to set different destroy times for different tools.
-   [`minecraft:destructible_by_explosion`](/blocks/block-components#destructible-by-explosion) defines the resistance to explosions. The higher the value, the lower the chance of destruction.
-   [`minecraft:map_color`](/blocks/block-components#map-color) is the hex color code that will be displayed on a Minecraft map to represent this block. `#ffffff` means white. You can get hex codes for other colors [here](https://www.google.com/search?q=hex+color+picker).
-   [`minecraft:light_dampening`](/blocks/block-components#light-dampening) defines how much light will be blocked from passing through.
-   [`minecraft:light_emission`](/blocks/block-components#light-emission) defines the light level the block will output.
-   [`minecraft:loot`](/blocks/block-components#loot) defines a loot table path for the block to drop. If this is removed, then the block will drop itself. You can learn more about loot tables [here](/loot/loot-tables).

_Browse more block components [here](/blocks/block-components)!_

## Applying Textures

The [geometry](/blocks/block-components#geometry) and [material instances](/blocks/block-components#material-instances) components should be used to determine how your block looks.

For our basic 16&times;16&times;16 pixel block, the [vanilla model](/blocks/vanilla-block-models) `minecraft:geometry.full_block` will be used.

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:geometry": "minecraft:geometry.full_block",
"minecraft:material_instances": {
    "*": {
        "texture": "wiki:custom_block"
    }
}
```

Now, we need to link the texture shortname to an image file path in `RP/textures/terrain_texture.json`:

<CodeHeader>RP/textures/terrain_texture.json</CodeHeader>

```json
{
    "resource_pack_name": "wiki",
    "texture_name": "atlas.terrain",
    "texture_data": {
        // Our texture shortname:
        "wiki:custom_block": {
            "textures": "textures/blocks/custom_block" // Link to an image file name
        }
    }
}
```

### Per-Face Textures

Textures can also be applied per face. For example, a custom "compass block" could use the following ✨stunning✨ textures:

-   `textures/blocks/compass_block_down.png`

    <WikiImage
        src="/assets/images/blocks/blocks-intro/compass_block_down.png"
        pixelated
        width="64"
    />

-   `textures/blocks/compass_block_up.png`

    <WikiImage src="/assets/images/blocks/blocks-intro/compass_block_up.png" pixelated width="64" />

-   `textures/blocks/compass_block_north.png`

    <WikiImage
        src="/assets/images/blocks/blocks-intro/compass_block_north.png"
        pixelated
        width="64"
    />

-   `textures/blocks/compass_block_east.png`

    <WikiImage
        src="/assets/images/blocks/blocks-intro/compass_block_east.png"
        pixelated
        width="64"
    />

-   `textures/blocks/compass_block_south.png`

    <WikiImage
        src="/assets/images/blocks/blocks-intro/compass_block_south.png"
        pixelated
        width="64"
    />

-   `textures/blocks/compass_block_west.png`

    <WikiImage
        src="/assets/images/blocks/blocks-intro/compass_block_west.png"
        pixelated
        width="64"
    />

The [material instances](/blocks/block-components#material-instances) should look like this:

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:material_instances": {
    "down": {
        "texture": "wiki:compass_block_down" // This texture appears in destruction particles
    },
    "up": {
        "texture": "wiki:compass_block_up"
    },
    "north": {
        "texture": "wiki:compass_block_north"
    },
    "east": {
        "texture": "wiki:compass_block_east"
    },
    "south": {
        "texture": "wiki:compass_block_south"
    },
    "west": {
        "texture": "wiki:compass_block_west"
    }
}
```

With the following `terrain_texture.json` data:

<CodeHeader>RP/textures/terrain_texture.json</CodeHeader>

```json
{
    "resource_pack_name": "wiki",
    "texture_name": "atlas.terrain",
    "texture_data": {
        "wiki:compass_block_down": {
            "textures": "textures/blocks/compass_block_down"
        },
        "wiki:compass_block_up": {
            "textures": "textures/blocks/compass_block_up"
        },
        "wiki:compass_block_north": {
            "textures": "textures/blocks/compass_block_north"
        },
        "wiki:compass_block_east": {
            "textures": "textures/blocks/compass_block_east"
        },
        "wiki:compass_block_west": {
            "textures": "textures/blocks/compass_block_west"
        },
        "wiki:compass_block_south": {
            "textures": "textures/blocks/compass_block_south"
        }
    }
}
```

## Applying Sounds

The mining sound, step on sound, breaking sound, and placement sound of custom blocks can be determined by the `sound` parameter in `RP/blocks.json`.

Learn more about block sounds [here](/blocks/block-sounds)!

<CodeHeader>RP/blocks.json</CodeHeader>

```json
{
    "format_version": "1.21.40",
    "wiki:custom_block": {
        "sound": "grass"
    }
}
```

## Defining Names

Finally, let's define our block names like this:

<CodeHeader>RP/texts/en_US.lang</CodeHeader>

```lang
tile.wiki:custom_block.name=Custom Block
tile.wiki:compass_block.name=Compass Block
```

You can learn more about translation [here](/text/text-intro).

## Result

In this page, you've learnt about the following:

-   [x] Basic features of blocks
-   [x] How to apply a texture to all block faces
-   [x] How to apply textures per face

...but it's only the beginning, see what else you could do below!

## What's Next?

<CardGrid>
<Card title="Add Functionality" image="/assets/images/icons/crafting_table.png">

Learn about the available block [components](/blocks/block-components) to craft unique gameplay.

Why not give your block a custom model with the [geometry](/blocks/block-components#geometry) component?
You could also configure your own [collision](/blocks/block-components#collision-box) and [selection](/blocks/block-components#selection-box) boxes to match!

</Card>
<Card title="Create Variants" image="/assets/images/icons/levers.png">

Make use of block [states](/blocks/block-states) and [permutations](/blocks/block-permutations) to conditionally enable components on your blocks.

For example, you could add liquid depth levels to your custom tank block, with support for multiple liquid types.

</Card>
<Card title="Replicate Vanilla" image="/assets/images/icons/diamond_ore.png">

Browse several complete replicas of existing blocks in the **Vanilla Re-Creations** category.

Start simple with [custom glass blocks](/blocks/custom-glass-blocks), making use of [material instances](/blocks/block-components#material-instances)!

</Card>
</CardGrid>
