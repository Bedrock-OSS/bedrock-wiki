---
title: Block Tags
category: General
nav_order: 3
mentions:
    - SirLich
    - yanasakana
    - aexer0e
    - SmokeyStack
    - MedicalJewel105
    - Luthorius
    - Chikorita-Lover
    - victorsigma
    - TheItsNameless
    - QuazChick
    - Kaioga5
---

Block tags can be used to ensure that a block meets certain conditions.

## Applying Tags

Block tags can be applied in the same way as items - in the block's `components` - as seen below:

<CodeHeader>BP/blocks/tree_stump.json</CodeHeader>

```json
{
    "format_version": "1.20.60",
    "minecraft:block": {
        "description": {
            "identifier": "wiki:tree_stump",
            "menu_category": {
                "category": "nature"
            }
        },
        "components": {
            "tag:wood": {},
            "tag:my_lovely_tag": {},
            "tag:wiki:very_useless": {}
        }
    }
}
```

## Testing for Tags

Tags can be queried with:

-   `q.all_tags`
-   `q.any_tag`

:::warning EXPERIMENTAL
The following query functions require experimental Molang features to be enabled.
:::

-   `q.block_has_all_tags`
-   `q.block_has_any_tag`
-   `q.block_neighbor_has_all_tags`
-   `q.block_neighbor_has_any_tag`
-   `q.relative_block_has_all_tags`
-   `q.relative_block_has_any_tag`

Example of an item querying a block's tags:

<CodeHeader>BP/items/custom_pickaxe.json</CodeHeader>

```json
{
    "format_version": "1.20.60",
    "minecraft:item": {
        "description": {
            "identifier": "wiki:custom_pickaxe",
            "menu_category": {
                "category": "equipment",
                "group": "itemGroup.name.pickaxe"
            }
        },
        "components": {
            "minecraft:digger": {
                "use_efficiency": true,
                "destroy_speeds": [
                    {
                        "speed": 5,
                        "block": {
                            "tags": "q.any_tag('custom_ore', 'stone', 'metal')"
                        }
                    }
                ]
            }
        }
    }
}
```

## Lists of Block Tags

### Vanilla Tags

Vanilla tags can be applied to custom blocks, and some vanilla blocks are tagged internally. This kind of tag doesn't give blocks vanilla features. The only usage of it is to tag blocks to make them have the same tags as the vanilla blocks for queries or tests.
| Tag | Vanilla Usage |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| wood | Acacia Door, Acacia Fence, Acacia Fence Gate, Acacia Planks, Acacia Pressure Plate, Acacia Sign, Barrel, Bee Nest, Beehive, Birch Door, Birch Fence, Birch Fence Gate, Birch Log, Birch Planks, Birch Pressure Plate, Birch Sign, Birch Slab, Birch Stairs, Dark Oak Door, Dark Oak Fence, Dark Oak Fence Gate, Dark Oak Log, Dark Oak Planks, Dark Oak Pressure Plate, Dark Oak Sign, Dark Oak Slab, Dark Oak Stairs, Fletching Table, Jungle Door, Jungle Fence, Jungle Fence Gate, Jungle Log, Jungle Planks, Jungle Pressure Plate, Jungle Sign, Jungle Slab, Jungle Stairs, Ladder, Oak Door, Oak Fence, Oak Fence Gate, Oak Log, Oak Planks, Oak Pressure Plate, Oak Sign, Oak Slab, Oak Stairs, Oak Trapdoor, Smithing Table, Spruce Door, Spruce Fence, Spruce Fence Gate, Spruce Log, Spruce Planks, Spruce Pressure Plate, Spruce Sign, Spruce Slab, Spruce Stairs, Spruce Trapdoor |
| pumpkin | Carved Pumpkin, Jack o'Lantern, Pumpkin |
| plant | Acacia Sapling, Birch Sapling, Dark Oak Sapling, Jungle Sapling, Large Fern, Lilac, Oak Sapling, Oak Sapling, Peony, Rose Bush, Spruce Sapling, Sunflower, Tall Grass |
| stone | Andesite, Andesite Wall, Brick Slab, Brick Wall, Bricks, Cobblestone, Cobblestone Slab, Cobblestone Stairs, Cobblestone Wall, Diorite, Diorite Wall, Dripstone Block, End Stone Brick Wall, Granite, Granite Wall, Mossy Cobblestone, Mossy Cobblestone Wall, Nether Brick Wall, Polished Andesite, Polished Diorite, Polished Granite, Prismarine Wall, Quartz Slab, Red Nether Brick Wall, Red Sandstone Wall, Sandstone Slab, Sandstone Wall, Smooth Stone Slab, Stone, Stone Brick Wall, Stone Bricks Slab |
| metal | Block of Gold, Block of Iron, Cauldron, Iron Bars |
| diamond_pick_diggable | Block of Raw Gold, Block of Raw Iron, Coal Ore, Deepslate Coal Ore, Deepslate Diamond Ore, Deepslate Emerald Ore, Deepslate Gold Ore, Deepslate Iron Ore, Deepslate Redstone Ore, Diamond Ore, Emerald Ore, Gold Ore, Iron Ore, Lapis Lazuli Ore, Obsidian, Redstone Ore |
| gold_pick_diggable | |
| iron_pick_diggable | Block of Raw Gold, Block of Raw Iron, Coal Ore, Deepslate Coal Ore, Deepslate Diamond Ore, Deepslate Emerald Ore, Deepslate Gold Ore, Deepslate Iron Ore, Deepslate Redstone Ore, Diamond Ore, Emerald Ore, Gold Ore, Iron Ore, Lapis Lazuli Ore, Redstone Ore |
| stone_pick_diggable | |
| wood_pick_diggable | |
| dirt | Farmland |
| sand | Red Sand, Sand |
| gravel | Gravel |
| grass | Coarse Dirt, Dirt, Dirt Path, Grass Block |
| snow | Snow |
| rail | Activator Rail, Detector Rail, Powered Rail, Rail |
| water | Water |
| mob_spawner | Spawner |
| lush_plants_replaceable | |
| azalea_log_replaceable | |
| not_feature_replaceable | bedrock, chest, end portal frame, mob spawner |
| text_sign | All kinds of signs |
| minecraft:crop | Beetroot, Carrot, Potato, Wheat |
| fertilize_area | All types of Flowers, except Tall Flowers & Wither Rose; Crimson Nylium, Warped Nylium, Grass, Moss |

### Vanilla Block Tags

Vanilla block tags are tags built specifically for blocks. They can give some vanilla features to the blocks which are tagged with them.

| Tag      | Vanilla Usage                                                        | Description  |
| -------- | -------------------------------------------------------------------- | ------------ |
| acacia   | Acacia Log                                                           |              |
| birch    | Birch Log                                                            |              |
| dark_oak | Dark Oak Log                                                         |              |
| jungle   | Jungle Log                                                           |              |
| log      | Oak Log, Spruce Log, Birch Log, Jungle Log, Acacia Log, Dark Oak Log | A log block. |
| oak      | Oak Log                                                              |              |
| spruce   | Spruce Log                                                           |              |
