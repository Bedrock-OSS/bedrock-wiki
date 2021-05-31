---
title: Beginners Guide
nav_order: 1
tags:
    - guide
---

# Beginners Guide to Blocks

Bedrock Minecraft allows us to add custom blocks into our world, with various vanilla-like properties. In the newest beta , custom blocks can have multiple stages (like plants), directional facing, among other features. This tutorial will cover how to create some simple blocks, for the stable version of Minecraft Bedrock.

[You can find the full bedrock.dev block documentation here.](https://bedrock.dev/r/Blocks)

# Block Behavior File

Block behaviors are structured similarly to entities: They contain description, as well as a list of components that describes the blocks behavior.

<CodeHeader>BP/blocks/blockname.json</CodeHeader>

```json
{
	"format_version": "1.12.0",
	"minecraft:block": {
		"description": {
			"identifier": "tut:blocky",
			"is_experimental": false,
			"register_to_creative_menu": true
		},
		"components": {
			"minecraft:loot": "loot_tables/blocks/blocky.json",
			"minecraft:destroy_time": 3,
			"minecraft:explosion_resistance": 3,
			"minecraft:friction": 0.6,
			"minecraft:flammable": {
				"flame_odds": 0,
				"burn_odds": 0
			},
			"minecraft:map_color": "#FFFFFF",
			"minecraft:block_light_absorption": 0,
			"minecraft:block_light_emission": 0.25
		}
	}
}
```

-   "`identifier`" under "`description`" is already familiar to us;
-   "`components`":
-   "`minecraft:loot`" defines a loot table path which will define what the block will drop. We'll look into loot tables in the next chapter.
-   "`minecraft:destroy_time`" defines how long the player will need to punch the block until it breaks. Currently it isn't possible to set different destroy times for different tools;
-   "`minecraft:explosion_resistance`": the higher the value, the lower the chance that the block will be destroyed by an explosion;
-   "`minecraft:friction`" defines how much friction the block has. For example, Soul and has a high value for friction and thus it slows players down. Ice has a lower friction value, and thus it has the effect of being slippery. The friction of classic blocks such as wood or stone is `0.6`.
-   "`minecraft:flammable":"flame_odds`": how likely the block is to catch fire; "`burn_odds`": how likely the block is to be destroyed by fire;
-   "`minecraft:map_color`" has the hex code of color that will be displayed on a minecraft Map to symbolize this block. `#FFFFFF` means white. You can get hex codes for other colors [here](https://www.google.com/search?q=hex+color+picker&rlz=1C1CHBF_enDE886DE886&oq=hex+color+picker&aqs=chrome..69i57j0l7.2293j0j8&sourceid=chrome&ie=UTF-8).
-   "`minecraft:block_light_emission`" defines the light level the block will output.

Let's create some more blocks in `BP/blocks`. I created these for four for the tutorials' sake:

-   Filename: `blocky.json`; Identifier: `tut:blocky`;
-   Filename: `sapp_log.json`; Identifier: `tut:sapp_log`;
-   Filename: `compass_block.json`; Identifier: `tut:compass_block`;
-   Filename: `flashing.json`; Identifier: `tut:flashing`;
    You can play around with changing the component values for each of these. Now let's move over to the resource definition.

# Block Resource File

The resource definition for blocks differs from entities/items, because all the definitions appear in a single file.

<CodeHeader>RP/blocks.json</CodeHeader>

```json
{
	"format_version": [1, 1, 0],
	"tut:blocky": {
		"textures": "blocky",
		"sound": "stone"
	},
	"tut:sapp_log": {
		"textures": {
			"up": "sapp_log_top",
			"down": "sapp_log_top",
			"side": "sapp_log_side"
		},
		"sound": "wood"
	},
	"tut:compass_block": {
		"textures": {
			"up": "compass_block_up",
			"down": "compass_block_down",
			"north": "compass_block_north",
			"south": "compass_block_south",
			"west": "compass_block_west",
			"east": "compass_block_east"
		},
		"sound": "wool"
	},
	"tut:flashing": {
		"textures": "flashing",
		"sound": "glass"
	}
}
```

As you can see, every block's identifier is applied with textures and step sounds. All of these blocks have a different type of textures, let's look through them.

-   "`tut:blocky`" has "`textures`" set to the texture shortname "`**blocky**`". We'll define it in a file similiar to `RP/textures/item_texture.json`, `RP/textures/terrain_texture.json` later.
-   "`tut:sapp_log`"'s "textures" are broken up in 3 parts: "`up`"(for the upper face of the block), "`down`"(for the bottom face of the block), and "`side`"(for the remaining four faces). Each one of these has a seperate texture shortname applied.
-   "`tut:compass_block`"'s "`textures`" are broken up in even more sub-textures. Instead of "`side`"s, we have a different texture shortname set for the "`north`" side, the "`south`" side, the "`west`" side and the "`east`" side.
-   And, lastly, "`tut_flashing`" simply has "`flashing`" defined in the same way as "`tut_blocky`".

## Block terrain texture definition

These "gorgeous" textures are the ones I'm going to use for my example blocks. The first three are located in the `RP/textures/blocks/` folder and the last 6 are located in the `/RP/textures/blocks/compass_block` subfolder - they show North, South, etc.

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

All textures need to be defines a **shortname**, (and we'll do it the same way as we defined item texture shortnames in `RP/textures/item_texture.json`), but this time in `RP/textures/terrain_texture.json`

<CodeHeader>RP/textures/terrain_texture.json</CodeHeader>

```json
{
	"resource_pack_name": "tut",
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

"`padding`" and "`num_mip_leavels`" mean the quality of how the texture is displayed, especially noticeable on higher resolution textures.. If it's too low, the performance will be better, but the textures will appear glitchy from further distances.

Next, all our texture shortnames have been defined. These shortnames were already used in r`RP/blocks.json`, as you might remember. If you load the game now, you'll be able to see the 3 new custom blocks you just added, with all the texture functionality :)

![](/assets/images/guide/custom_blocks_inventory.png)

But, we still have to define the `tut:flashing`'s texture(third from the left), which is currently undefined. That's why it appears as purple-and-black tiled texture right now.

## Block flipbook texture definition

As you might have already guessed, flipbook texture shortnames are defined in a different place then `RP/textures/terrain_texture.json`. Let's create another file, `RP/textures/flipbook_textures.json`.

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

-   "`flipbbok_texture`" is the path to your texture file, which is named "`flashing_flipbook`" in this scenario.
-   "`atlas_tile`" is basically the shortname definition. As you know, we already applied "`flashing`" texture shortname to the `tut:flashing` block in RPblocks.json`.
-   "`ticks_per_frame`" defines how quickly the different textures will fade into the block, in other words the speed of the animation.

A **flipbook texture** file is created like this:

-   The image width is 16;
-   Image height is `16*3`, as we have three different block textures/**frames** to fade. If you wanted a flipbook with 12 different textures, the height would be `16*12`.
    **Done!** All of our blocks work perfectly.

<video width="320" height="240" controls>
  <source src="/assets/images/guide/custom_blocks_done.mp4" type="video/mp4">
</video>

# Setting block names

And, finally, let's define our block's names in `/RP/texts/en_US.lang` like we did with items, somewhatlike this:

```
tile.tut:blocky.name=Blocky Block
tile.tut:sapp_log.name=Sapphire Wood
tile.tut:compass_block.name=A compass in block-form
tile.tut:flashing.name=Block of Flashing Matter
```

[You can learn more about .lang here](https://wiki.bedrock.dev/concepts/lang)

---

## Your progress so far

**What you've done:**

-   [x] Learned about custom block behavior components;
-   [x] Created a custom block with simple textures;
-   [x] Created a custom block with side- and face-relying textures;
-   [x] Created a custom block with flipbook textures;

**What are you to do next:**

-   [x] Create custom Loot Tables for your blocks and entities;
-   [ ] Create custom crafting recipes;
-   [ ] Create custom Spawn Rules for entities;
