---
title: Block Tags
category: Documentation
tags:
    - experimental
---

Block Tags are used for various block properties. They can be called when testing for block arguments in commands.
Some tags are prefixed with `can_be`, or `can_hurt`. One would expect these to have a boolean response.

## Application

Block tags can be applied exactly as items, as seen below:

<CodeHeader></CodeHeader>

```json
{
	"format_version": "1.16.100",
	"minecraft:block": {
		"description": {
			"identifier": "wiki:tree_stump"
		},
		"components": {
			"tag:wood": {},
			"tag:wiki:very_useless": {}
		},
		"events": {}
	}
}
```

## Lists of Block Tags

### Vanilla Tags

Vanilla tags can be applied to custom blocks, and some vanilla blocks are tagged internally. This kind of tag doesn't give blocks vanilla features. The only usage of it is to tag blocks to make them have the same tags as the vanilla blocks for queries or tests.
| VanillaTags | Vanilla Usage |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| wood | Oak Trapdoor, Spruce Trapdoor, Birch Trapdoor, Jungle Trapdoor, Acacia Trapdoor, Dark Oak Trapdoor, Oak Door, Spruce Door, Birch Door, Jungle Door, Acacia Door, Dark Oak Door, Oak Fence, Spruce Fence, Birch Fence, Jungle Fence, Acacia Fence, Dark Oak Fence, Oak Fence Gate, Spruce Fence Gate, Birch Fence Gate, Jungle Fence Gate, Acacia Fence Gate, Dark Oak Fence Gate, Oak Log, Spruce Log, Birch Log, Jungle Log, Acacia Log, Dark Oak Log, Oak Planks, Spruce Planks, Birch Planks, Jungle Planks, Acacia Planks, Dark Oak Planks, Oak Slab, Spruce Slab, Birch Slab, Jungle Slab, Acacia Slab, Dark Oak Slab, Oak Stairs, Spruce Stairs, Birch Stairs, Jungle Stairs, Acacia Stairs, Dark Oak Stairs, Oak Sign, Spruce Sign, Birch Sign, Jungle Sign, Acacia Sign, Dark Oak Sign, Oak Pressure Plate, Spruce Pressure Plate, Birch Pressure Plate, Jungle Pressure Plate, Acacia Pressure Plate, Dark Oak Pressure Plate, Smithing Table, Fletching Table, Barrel, Beehive, Bee Nest, Ladder |
| pumpkin | Pumpkin, Carved Pumpkin, Jack o'Lantern |
| plant | Tall Grass, Large Fern, Sunflower, Lilac, Rose Bush, Peony, Oak Sapling, Oak Sapling, Spruce Sapling, Birch Sapling, Jungle Sapling, Acacia Sapling, Dark Oak Sapling |
| stone | Stone, Cobblestone, Mossy Cobblestone, Dripstone Block, Bricks, Cobblestone Stairs, Smooth Stone Slab, Sandstone Slab, Cobblestone Slab, Brick Slab, Stone Bricks Slab, Quartz Slab, Nether Brick Slab, Cobblestone Wall, Mossy Cobblestone Wall, Stone Brick Wall, Mossy Stone Brick Wall, Andesite Wall, Diorite Wall, Granite Wall, Sandstone Wall, Red Sandstone Wall, Brick Wall, Prismarine Wall, Nether Brick Wall, Red Nether Brick Wall, End Stone Brick Wall, Andesite, Granite, Polished Andesite, Polished Granite, Polished Diorite, Diorite |
| metal | Block of Gold, Block of Iron, Cauldron, Iron Bars |
| diamond_pick_diggable | Obsidian, Coal Ore, Deepslate Coal Ore, Deepslate Diamond Ore, Deepslate Emerald Ore, Deepslate Gold Ore, Deepslate Iron Ore, Deepslate Redstone Ore, Diamond Ore, Emerald Ore, Gold ore, Iron Ore, Lapis Lazuli Ore, Redstone Ore, Block of Raw Iron, Block of Raw Gold |
| gold_pick_diggable | |
| iron_pick_diggable | Coal Ore, Deepslate Coal Ore, Deepslate Diamond Ore, Deepslate Emerald Ore, Deepslate Gold Ore, Deepslate Iron Ore, Deepslate Redstone Ore, Diamond Ore, Emerald Ore, Gold ore, Iron Ore, Lapis Lazuli Ore, Redstone Ore, Block of Raw Iron, Block of Raw Gold |
| stone_pick_diggable | |
| wood_pick_diggable | |
| dirt | Dirt, Coarse Dirt, Farmland |
| sand | Red Sand, Sand |
| gravel | Gravel |
| grass | Grass Block |
| snow | Snow |
| rail | Rail, Powered Rail, Detector Rail, Activator Rail |
| water | Water |
| mob_spawner | Spawner |
| lush_plants_replaceable | |
| azalea_log_replaceable | |
| not_feature_replaceable | chest, bedrock, end portal frame, mob spawner |
| text_sign | All kinds of signs |
| minecraft:crop | Beetroot, Carrot, Potato, Wheat |
| fertilize_area | All types of Flowers, except Tall Flowers & Wither Rose; Crimson Nylium, Warped Nylium, Grass, Moss |

### Vanilla Block Tags

Vanilla block tags are tags built specifically for blocks. They can give some vanilla features to the blocks which are tagged with them.

| VanillaBlockTags | Vanilla Usage                                                        | Description  |
| ---------------- | -------------------------------------------------------------------- | ------------ |
| acacia           | Acacia Log                                                           |              |
| birch            | Birch Log                                                            |              |
| dark_oak         | Dark Oak Log                                                         |              |
| jungle           | Jungle Log                                                           |              |
| log              | Oak Log, Spruce Log, Birch Log, Jungle Log, Acacia Log, Dark Oak Log | A log block. |
| oak              | Oak Log                                                              |              |
| spruce           | Spruce Log                                                           |              |
