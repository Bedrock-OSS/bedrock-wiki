---
title: Intro to Blocks
description: A "Hello world" guide in making blocks. Learn the block format and how to create basic custom blocks.
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
    - FrankyRay
    - Ciosciaa
    - Sprunkles137
    - ThomasOrs
    - QuazChick
---

:::tip FORMAT & MIN ENGINE VERSION `1.20.30`
This page discusses basic block features. You can learn more about other block components [here](/blocks/block-components).
:::
:::danger <nbsp/>
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
  "format_version": "1.20.30",
  "minecraft:block": {
    "description": {
      "identifier": "wiki:custom_block",
      "menu_category": {
        "category": "construction", // The creative inventory or recipe book tab that the block is placed into
        "group": "itemGroup.name.concrete", // The expandable group that the block is a part of. (Optional)
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

Right now, out custom block is using the default component values (which can be found [here](/blocks/block-components)).

Let's configure our own functionality!

<CodeHeader>BP/blocks/custom_block.json</CodeHeader>

```json
{
  "format_version": "1.20.30",
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
      "minecraft:friction": 0.4,
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
-   [`minecraft:friction`](/blocks/block-components#friction) defines how much friction the block has. For example, soul sand has a high value for friction, so it slows the players. Ice has a lower friction value, so it has a slippery effect. The friction of classic blocks such as wood or stone is `0.4`.
-   [`minecraft:map_color`](/blocks/block-components#map-color) is the hex color code that will be displayed on a Minecraft map to represent this block. `#ffffff` means white. You can get hex codes for other colors [here](https://www.google.com/search?q=hex+color+picker).
-   [`minecraft:light_dampening`](/blocks/block-components#light-dampening) defines how much light will be blocked from passing through.
-   [`minecraft:light_emission`](/blocks/block-components#light-emission) defines the light level the block will output.
-   [`minecraft:loot`](/blocks/block-components#loot) defines a loot table path for the block to drop. If this is removed, then the block will drop itself. You can learn more about loot tables [here](/loot/loot-tables).

_Browse more block components [here](/blocks/block-components)!_

## Applying Textures

:::warning
`RP/blocks.json` ignores identifier namespaces. You can put anything there or not include a namespace at all, resulting in no difference. This may cause problems if you create a custom block with the same name (but not namespace) as an existing vanilla block.
:::
:::tip <nbsp/>
[Block sounds](/blocks/block-sounds) can also be defined within `RP/blocks.json`.
:::

For our basic 16&times;16&times;16 pixel block, textures should be defined in `RP/blocks.json`.

If you'd like to apply a custom model, the [geometry](/blocks/block-components#geometry) and [material instances](/blocks/block-components#material-instances) components should be used instead.

<CodeHeader>RP/blocks.json</CodeHeader>

```json
{
  "format_version": [1, 1, 0],
  "wiki:custom_block": {
    "textures": "custom_block", // This texture shortname should be defined in `terrain_texture.json`, as shown below
    "sound": "grass"
  }
}
```

Now, we need to link the texture shortname to an image file path in `RP/textures/terrain_texture.json`:

<CodeHeader>RP/textures/terrain_texture.json</CodeHeader>

```json
{
  "texture_name": "atlas.terrain",
  "resource_pack_name": "wiki", // ID for your resource pack
  "padding": 8, // Prevent textures from visually overflowing into each other
  "num_mip_levels": 4, // Quality of texture when viewed from a distance or at an angle
  "texture_data": {
    // Our texture shortname:
    "custom_block": {
      "textures": "textures/blocks/custom_block" // Link to an image file name
    }
  }
}
```

### Per-Face Textures

Textures can also be applied per face. For example, a custom "compass block" could use the following ✨stunning✨ textures:

`textures/blocks/compass_block_down.png`

<WikiImage src="/assets/images/blocks/blocks-intro/compass_block_down.png" pixelated="true" width="64"/>

`textures/blocks/compass_block_up.png`

<WikiImage src="/assets/images/blocks/blocks-intro/compass_block_up.png" pixelated="true" width="64"/>

`textures/blocks/compass_block_north.png`

<WikiImage src="/assets/images/blocks/blocks-intro/compass_block_north.png" pixelated="true" width="64"/>

`textures/blocks/compass_block_east.png`

<WikiImage src="/assets/images/blocks/blocks-intro/compass_block_east.png" pixelated="true" width="64"/>

`textures/blocks/compass_block_south.png`

<WikiImage src="/assets/images/blocks/blocks-intro/compass_block_south.png" pixelated="true" width="64"/>

`textures/blocks/compass_block_west.png`

<WikiImage src="/assets/images/blocks/blocks-intro/compass_block_west.png" pixelated="true" width="64"/>

<br>
<br>

The `blocks.json` entry would look like this:

<CodeHeader>RP/blocks.json</CodeHeader>

```json
{
  "format_version": [1, 1, 0],
  "wiki:compass_block": {
    "textures": {
      "down": "compass_block_down",
      "up":  "compass_block_up",
      "north":  "compass_block_north",
      "east": "compass_block_east",
      "south":  "compass_block_south",
      "west": "compass_block_west"
    }
  }
}
```

<br>

Or, if you're using [material instances](/blocks/block-components#material-instances), they should look like this:

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:material_instances": {
  "*": {
    "texture": "compass_block_down" // This texture appears in destruction particles
  },
  "up": {
    "texture": "compass_block_up"
  },
  "north": {
    "texture": "compass_block_north"
  },
  "east": {
    "texture": "compass_block_east"
  },
  "south": {
    "texture": "compass_block_south"
  },
  "west": {
    "texture": "compass_block_west"
  }
}
```

With the following `terrain_texture.json` data:

<CodeHeader>RP/textures/terrain_texture.json</CodeHeader>

```json
{
  "texture_name": "atlas.terrain",
  "resource_pack_name": "wiki",
  "padding": 8,
  "num_mip_levels": 4,
  "texture_data": {
    "compass_block_down": {
      "textures": "textures/blocks/compass_block_down"
    },
    "compass_block_up": {
      "textures": "textures/blocks/compass_block_up"
    },
    "compass_block_north": {
      "textures": "textures/blocks/compass_block_north"
    },
    "compass_block_east": {
      "textures": "textures/blocks/compass_block_east"
    },
    "compass_block_west": {
      "textures": "textures/blocks/compass_block_west"
    },
    "compass_block_south": {
      "textures": "textures/blocks/compass_block_south"
    }
  }
}
```

## Defining Names

Finally, let's define our block names like this:

<CodeHeader>RP/texts/en_US.lang</CodeHeader>

```c
tile.wiki:custom_block.name=Custom Block
tile.wiki:compass_block.name=Compass Block
```

You can learn more about translation [here](/concepts/text-and-translations).

## Result

In this page, you've learnt about the following:

<Checklist>

-   [x] Basic features of blocks
-   [x] How to apply a texture to all block faces
-   [x] How to apply textures per face

</Checklist>

...but it's only the beginning, see what else you could do below!

## What's Next?

<div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 m-0 p-0">
  <Card
    title="Expand Functionality"
    imgsrc-light="assets/images/homepage/crafting_table_0.png"
    link="/blocks/block-components">
    Learn about the available block <a href="/blocks/block-components">components</a> to craft unique gameplay.
    <br><br>
    Why not give your block a custom model with the <a href="/blocks/block-components#geometry">geometry</a> component?
    You could also configure your own <a href="/blocks/block-components#collision-box">collision</a> and <a href="/blocks/block-components#selection-box">selection</a> boxes to match!
  </Card>
  <Card
    title="Create Variants"
    imgsrc-light="assets/images/homepage/scripting.png">
    Make use of block <a href="/blocks/block-states">states</a> and <a href="/blocks/block-permutations">permutations</a> to conditionally enable components on your blocks.
    <br><br>
    For example, you could add liquid depth levels to your custom tank block, with support for multiple liquid types.
  </Card>
  <Card 
    title="Replicate Vanilla"
    imgsrc-light="assets/images/homepage/diamond_ore_0.png"
    link="/blocks/block-components">
    Browse several complete replicas of existing blocks in the <b class="orange px-1 rounded-md">Vanilla Re-Creations</b> category.
    <br><br>
    Start simple with <a href="/blocks/custom-glass-blocks">custom glass blocks</a>, making use of <a href="/blocks/block-components#material-instances">material instances</a>!
  </Card>
</div>
