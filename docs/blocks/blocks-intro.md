---
title: Intro to Blocks
category: General
nav_order: 1
tags:
    - guide
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

:::warning
This page discusses the stable components. You can learn more about experimental block components [here](/blocks/blocks-experimental).
:::

## Block Behavior File

Block behaviors are structured similarly to entities: they contain a description and a list of components that defines the block's behavior.

<CodeHeader>BP/blocks/blockname.json</CodeHeader>

```json
{
	"format_version": "1.19.80",
	"minecraft:block": {
		"description": {
			"identifier": "wiki:custom_block"
		},
		"components": {
			"minecraft:loot": "loot_tables/blocks/custom_block.json",
			"minecraft:destructible_by_mining": {
				"seconds_to_destroy": 3
			},
			"minecraft:destructible_by_explosion": {
				"explosion_resistance": 3
			},
			"minecraft:friction": 0.6,
			"minecraft:flammable": {
				"catch_chance_modifier": 0,
				"destroy_chance_modifier": 0
			},
			"minecraft:map_color": "#FFFFFF",
			"minecraft:light_dampening": 0,
			"minecraft:light_emission": 4
		}
	}
}
```

-   `"identifier"` under `"description"` is already familiar to us.
-   `"components"`
    -   `"minecraft:loot"` defines a loot table path for the block to drop. If this is removed, then the block will drop itself. You can learn more about loot tables [here](/loot/loot-tables).
    -   `"minecraft:destructible_by_mining"` defines how long the player will need to mine the block until it breaks. Currently, it isn't possible to set different destroy times for different tools.
    -   `"minecraft:destructible_by_explosion"` defines the chance for an explosion to break the block. Higher the value, lower the chance.
    -   `"minecraft:friction"` defines how much friction the block has. For example, soulsand has a low value for friction, so it slows the players. Ice has a higher friction value, so it has a slippery effect. The friction of classic blocks such as wood or stone is `0.6`.
    -   `"minecraft:flammable"`
        -   `"catch_chance_modifier"` defines how likely the block is to catch fire.
        -   `"destroy_chance_modifier"` defines how likely the block is to be destroyed by fire.
    -   `"minecraft:map_color"` is the hex color code that will be displayed on a Minecraft map to symbolize this block. `#FFFFFF` means white. You can get hex codes for other colors [here](https://www.google.com/search?q=hex+color+picker&rlz=1C1CHBF_enDE886DE886&oq=hex+color+picker&aqs=chrome..69i57j0l7.2293j0j8&sourceid=chrome&ie=UTF-8).
    -   `"minecraft:light_dampening"` defines the light level the block will absorb. Light level is from 0-15.
    -   `"minecraft:light_emission"` defines the light level the block will output. Light level is from 0-15.

Let's create some more blocks in `BP/blocks`. I created these four block for the tutorial:

-   Filename: `custom_block.json`; Identifier: `wiki:custom_block`;
-   Filename: `custom_log.json`; Identifier: `wiki:custom_log`;
-   Filename: `compass_block.json`; Identifier: `wiki:compass_block`;
-   Filename: `flashing.json`; Identifier: `wiki:flashing`;
    You can play around with changing the component values for each of these. Let's now define the blocks's visuals.

## Block Visuals

Setting up a block's visuals takes place in two places, `terrain_texture.json` and the block file.

These "gorgeous" textures are the ones used for the example blocks. The first three are located in the `RP/textures/blocks/` folder and, the last 6 are located in the `RP/textures/blocks/compass_block` subfolder - they show North, South, etc.

_Left to right: `blocky.png`, `sapp_log_side.png`, `side_block_top.png`, `sb_up.png`, `sb_down.png`, `sb_north.png`, `sb_south.png`, `sb_west.png`, `sb_east.png`_

<WikiImage src="/assets/images/guide/tut_blocky_texture.png" pixelated/>

<WikiImage src="/assets/images/guide/tut_log_side_texture.png" pixelated/>
<WikiImage src="/assets/images/guide/tut_log_top_texture.png" pixelated/>

<WikiImage src="/assets/images/guide/tut_sb_up.png" pixelated/>
<WikiImage src="/assets/images/guide/tut_sb_down.png" pixelated/>

<WikiImage src="/assets/images/guide/tut_sb_north.png" pixelated/>
<WikiImage src="/assets/images/guide/tut_sb_south.png" pixelated/>
<WikiImage src="/assets/images/guide/tut_sb_west.png" pixelated/>
<WikiImage src="/assets/images/guide/tut_sb_east.png" pixelated/>

All textures need to define a **shortname** and we'll do it the same way as we defined item texture shortnames in `RP/textures/item_texture.json`, but this time in `RP/textures/terrain_texture.json`

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

The only difference from `item_textures.json` is that "`atlas.items`" is now changed to "`atlas.terrain`".

`"padding"` and `"num_mip_levels"` mean the quality of how the texture is displayed, especially noticeable on higher resolution textures. The performance will be better if it's lower, but the textures will appear glitchy from further distances.

Now that texture shortnames have been defined, the game still needs to know what textures to use for the blocks. Blocks will use the `material_instances` component to tell the game which shortname to use. Add the following component to the blocks with the appropriate shortname.
```json
{
	"minecraft:material_instances": {
		"*": {
			"texture": "blocky"
		}
	}
}
```

![](/assets/images/guide/custom_blocks_inventory.png)

But, we still have to define the `wiki:flashing` texture(third from the left), which is currently undefined. That's why it appears as a dirt block with "update" written on it.

### Block Flipbook Texture Definition

As you might have already guessed, flipbook texture shortnames are defined in a different place than `RP/textures/terrain_texture.json`. Let's create another file `RP/textures/flipbook_textures.json`.

<CodeHeader>RP/textures/flipbook_textures.json</CodeHeader>

```json
[
	{
		"flipbook_texture": "textures/blocks/flashing_flipbook",
		"atlas_tile": "flashing",
		"ticks_per_frame": 13
	}
]
```

-   `"flipbook_texture"` is the path to your texture file, which is named `"flashing_flipbook"` in this scenario.
-   `"atlas_tile"` is the shortname definition. As you know, we already applied `"flashing"` texture shortname to the `wiki:flashing` block in `RP/blocks.json`.
-   `"ticks_per_frame"` defines how quickly the different textures will fade into the block, in other words, the speed of the animation.

You can read more about flipbook textures [here](/blocks/flipbook-textures).

A **flipbook texture** file is created like this:

-   The image width is 16;
-   Image height is `16*3`, as we have three different block textures/**frames** to fade. If you wanted a flipbook with 12 different textures, the height would be `16*12`.

**Done!** All of our blocks work perfectly.

<video width="320" height="240" controls>
  <source src="/assets/images/guide/custom_blocks_done.mp4" type="video/mp4">
</video>

## Setting block names

And, finally, let's define our block's names in `/RP/texts/en_US.lang` as we did with items, somewhat like this:

```
tile.wiki:blocky.name=Blocky Block
tile.wiki:sapp_log.name=Sapphire Wood
tile.wiki:compass_block.name=A compass in block-form
tile.wiki:flashing.name=Block of Flashing Matter
```

You can learn more about translation keys [here](/concepts/text-and-translations).

---

## What you have learned

:::tip What you have learned:

-   What custom block behavior components there are
-   How to create a custom block with simple textures
-   How to create a custom block with side and face-relying textures
-   How to create a custom block with flipbook textures

:::
