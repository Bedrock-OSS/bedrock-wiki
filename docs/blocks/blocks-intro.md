---
title: Intro to Blocks
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

Minecraft Bedrock allows us to add custom blocks into our world with various vanilla-like properties. In latest versions, custom blocks can have multiple stages (like plants), directional facing, and other features. This tutorial will cover how to create some simple blocks for the stable version of Minecraft Bedrock.

:::tip
This page discusses basic block components. You can learn more about other block features [here](/blocks/blocks-stable).
:::

## Block JSON

Block behaviors are structured similarly to entities: they contain a description and a list of components that defines the block's behavior.

Unline entities, blocks do not have a resource definition other than in `RP/blocks.json`.

<CodeHeader>BP/blocks/blockname.json</CodeHeader>

```json
{
  "format_version": "1.20.0",
  "minecraft:block": {
    "description": {
      "identifier": "wiki:custom_block",
      "menu_category": {
        "category": "construction"
      }
    },
    "components": {
      "minecraft:loot": "loot_tables/blocks/custom_block.json",
      "minecraft:destructible_by_mining": {
        "seconds_to_destroy": 3
      },
      "minecraft:destructible_by_explosion": {
        "explosion_resistance": 3
      },
      "minecraft:friction": 0.4,
      "minecraft:flammable": {
        "catch_chance_modifier": 0,
        "destroy_chance_modifier": 0
      },
      "minecraft:map_color": "#ffffff",
      "minecraft:light_dampening": 0,
      "minecraft:light_emission": 4
    }
  }
}
```

### `description`

-   Defines block `identifier`.
-   Contains `properties` and their default values.
-   Configures which `menu_category` the block is placed in.

### `components`

-   `"minecraft:loot"` defines a loot table path for the block to drop. If this is removed, then the block will drop itself. You can learn more about loot tables [here](/loot/loot-tables).
-   `"minecraft:destructible_by_mining"` defines how long the player will need to mine the block until it breaks. Currently, it isn't possible to set different destroy times for different tools.
-   `"minecraft:destructible_by_explosion"` defines the chance for an explosion to break the block. Higher the value, lower the chance.
-   `"minecraft:friction"` defines how much friction the block has. For example, soulsand has a low value for friction, so it slows the players. Ice has a higher friction value, so it has a slippery effect. The friction of classic blocks such as wood or stone is `0.4`.
-   `"minecraft:flammable"`
    -   `"catch_chance_modifier"` defines how likely the block is to catch fire.
    -   `"destroy_chance_modifier"` defines how likely the block is to be destroyed by fire.
-   `"minecraft:map_color"` is the hex color code that will be displayed on a Minecraft map to represent this block. `#ffffff` means white. You can get hex codes for other colors [here](https://www.google.com/search?q=hex+color+picker).
-   `"minecraft:light_dampening"` defines the light level the block will absorb. Light level is from 0-15.
-   `"minecraft:light_emission"` defines the light level the block will output. Light level is from 0-15.

## Setting Up

Let's create some more blocks in `BP/blocks`. Create these four block for the tutorial:

-   Filename: `custom_block.json`;
    Identifier: `wiki:custom_block`.
-   Filename: `custom_log.json`;
    Identifier: `wiki:custom_log`.
-   Filename: `compass_block.json`;
    Identifier: `wiki:compass_block`.
-   Filename: `flashing.json`;
    Identifier: `wiki:flashing`.

You can play around with changing the component values for each of these. Let's now define the blocks's visuals.

## Block Visuals

Setting up a block's visuals takes place in two places, `RP/textures/terrain_texture.json` and the block file.

The "gorgeous" textures below are the ones used for the example blocks. The first three are located in the `RP/textures/blocks` folder and, the last 6 are located in the `RP/textures/blocks/compass_block` subfolder - they show north, south, etc.

_Left to right: `blocky.png`, `sapp_log_side.png`, `side_block_top.png`, `sb_up.png`, `sb_down.png`, `sb_north.png`, `sb_south.png`, `sb_west.png`, `sb_east.png`_

---

<WikiImage src="/assets/images/guide/tut_blocky_texture.png" pixelated="true" width="50"/>

<WikiImage src="/assets/images/guide/tut_log_side_texture.png" pixelated="true" width="50"/>
<WikiImage src="/assets/images/guide/tut_log_top_texture.png" pixelated="true" width="50"/>

<WikiImage src="/assets/images/guide/tut_sb_up.png" pixelated="true" width="50"/>
<WikiImage src="/assets/images/guide/tut_sb_down.png" pixelated="true" width="50"/>

<WikiImage src="/assets/images/guide/tut_sb_north.png" pixelated="true" width="50"/>
<WikiImage src="/assets/images/guide/tut_sb_south.png" pixelated="true" width="50"/>
<WikiImage src="/assets/images/guide/tut_sb_west.png" pixelated="true" width="50"/>
<WikiImage src="/assets/images/guide/tut_sb_east.png" pixelated="true" width="50"/>

---

All textures need to have a defined **friendly name** in `RP/textures/terrain_texture.json`

<CodeHeader>RP/textures/terrain_texture.json</CodeHeader>

```json
{
  "resource_pack_name": "wiki",
  "texture_name": "atlas.terrain",
  "padding": 8,
  "num_mip_levels": 4,
  "texture_data": {
    "blocky": {
      "textures": "textures/blocks/blocky"
    },
    "sapp_log_top": {
      "textures": "textures/blocks/sapp_log_top"
    },
    "sapp_log_side": {
      "textures": "textures/blocks/sapp_log_side"
    },
    "compass_block_north": {
      "textures": "textures/blocks/compass_block/sb_north"
    },
    "compass_block_east": {
      "textures": "textures/blocks/compass_block/sb_east"
    },
    "compass_block_west": {
      "textures": "textures/blocks/compass_block/sb_west"
    },
    "compass_block_south": {
      "textures": "textures/blocks/compass_block/sb_south"
    },
    "compass_block_up": {
      "textures": "textures/blocks/compass_block/sb_up"
    },
    "compass_block_down": {
      "textures": "textures/blocks/compass_block/sb_down"
    }
  }
}
```

The only difference from `RP/textures/item_textures.json` is that `atlas.items` is now changed to `atlas.terrain`.

`"padding"` prevents textures in the atlas from spilling into each other when rendered on blocks.

`"num_mip_levels"` represents the quality of the texture is displayed, especially noticeable on higher resolution textures. The performance will be better if it's lower, but the textures will appear glitchy when viewed indirectly / from further distances.

Now that texture shortnames have been defined, the game still needs to know what textures to use for the blocks. Blocks will use the `material_instances` component to tell the game which shortname to use. Add the following component to the appropriate blocks.

### `wiki:custom_block`

```json
{
  "minecraft:material_instances": {
    "*": {
      "texture": "blocky"
    }
  }
}
```

### `wiki:custom_log`

```json
{
  "minecraft:material_instances": {
    "*": {
      "texture": "sapp_log_side"
    },
    "end": {
      "texture": "sapp_log_top"
    },
    "up": "end",
    "down": "end"
  }
}
```

### `wiki:compass_block`

```json
{
  "minecraft:material_instances": {
    "*": {
      "texture": "compass_block_down" // NOTE: this texture appears in destruction particles
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
}
```

### `wiki:flashing`

```json
{
  "minecraft:material_instances": {
    "*": {
      "texture": "flashing"
    }
  }
}
```

![](/assets/images/guide/custom_blocks_inventory.png)

But, we still have to define the `wiki:flashing` texture (third from the left), which is currently undefined.

## Flipbook Textures

As you might have already guessed, flipbook texture shortnames are defined in a different place than `RP/textures/terrain_texture.json`.

Let's create another file: `RP/textures/flipbook_textures.json`.

<CodeHeader>RP/textures/flipbook_textures.json</CodeHeader>

```json
[
  {
    "flipbook_texture": "textures/blocks/flashing_flipbook",
    "atlas_tile": "flashing",
    "ticks_per_frame": 10
  }
]
```

-   `"flipbook_texture"` is the path to your texture file, which is named `"flashing_flipbook"` in this scenario.
-   `"atlas_tile"` is the shortname definition. As you know, we already applied `"flashing"` texture shortname to the `wiki:flashing` block in `RP/blocks.json`.
-   `"ticks_per_frame"` defines how quickly the different textures will fade into the block, in other words, the speed of the animation.

:::warning
`blocks.json` (resource pack) completely ignores the namespace. You can put there just anything or don't use namespace at all and it will work. This may cause problems if you create custom block with the same name (but not namespace) as some other vanilla block. 
:::


You can read more about flipbook textures [here](/blocks/flipbook-textures).

Textures should also be defined in `RP/textures/terrain_texture.json` to be used as a placeholder when not being animated.

<CodeHeader>RP/textures/terrain_texture.json</CodeHeader>

```json
{
  "texture_data": {
    ...
    "flashing": {
      "textures": "textures/blocks/flashing_flipbook"
    }
  }
}
```

A **flipbook texture** file is created like this:

-   The image width is **16**px.
-   Image height is **16**&times;3 (48px), as we have three different block textures/frames to fade.
    -   If you wanted a flipbook with 12 different textures, the height would be **16**&times;12.

## Naming Blocks

Finally, let's define our block's names like this:

<CodeHeader>RP/texts/en_US.lang</CodeHeader>

```c
tile.wiki:blocky.name=Blocky Block
tile.wiki:sapp_log.name=Sapphire Wood
tile.wiki:compass_block.name=A compass in block-form
tile.wiki:flashing.name=Block of Flashing Matter
```

You can learn more about translation keys [here](/concepts/text-and-translations).

---

## Result

All of our blocks work perfectly!

<video width="600px" style="max-width: 100%;" controls>
  <source src="/assets/images/guide/custom_blocks_done.mp4#t=1" type="video/mp4">
</video>

<Checklist>

-   [x] Basic features of blocks
-   [x] How to create a custom block with simple textures
-   [x] How to create a custom block with side and face-relying textures
-   [x] How to create a custom block with flipbook textures

</Checklist>
