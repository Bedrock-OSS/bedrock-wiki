---
title: Block Shapes
---

Blockshapes are essentially block geometries or models that are hard-coded into vanilla, meaning that they exist without having accesible files.

## Application

 They are added in the resource pack's file, `blocks.json`, using child `"blockshape"` in a block's object. This would look something like this:

```json

    "yana:invisible_aluminium_ore": {
        "blockshape": "invisible",
        "sound": "stone",
        "textures": "invisible_aluminium_ore"
    }

```

## List of known Blockshapes

| ID  | Block Shape               |
| --- | ------------------------- |
| -1  | invisible                 |
| 0   | block                     |
| 1   | cross_texture             |
| 2   | torch                     |
| 3   | fire                      |
| 4   | water                     |
| 5   | red_dust                  |
| 6   | rows                      |
| 7   | door                      |
| 8   | ladder                    |
| 9   | rail                      |
| 10  | stairs                    |
| 11  | fence                     |
| 12  | lever                     |
| 13  | cactus                    |
| 14  | bed                       |
| 15  | diode                     |
| 18  | iron_fence                |
| 19  | stem                      |
| 20  | vine                      |
| 21  | fence_gate                |
| 22  | chest                     |
| 23  | lilypad                   |
| 25  | brewing_stand             |
| 26  | portal_frame              |
| 28  | cocoa                     |
| 31  | tree                      |
| 32  | cobblestone_wall          |
| 40  | double_plant              |
| 42  | flower_pot                |
| 43  | anvil                     |
| 44  | dragon_egg                |
| 48  | structure_void            |
| 67  | block_half                |
| 68  | top_snow                  |
| 69  | tripwire                  |
| 70  | tripwire_hook             |
| 71  | cauldron                  |
| 72  | repeater                  |
| 73  | comparator                |
| 74  | hopper                    |
| 75  | slime_block               |
| 76  | piston                    |
| 77  | beacon                    |
| 78  | chorus_plant              |
| 79  | chorus_flower             |
| 80  | end_portal                |
| 81  | end_rod                   |
| 83  | skull                     |
| 84  | facing_block              |
| 85  | command_block             |
| 86  | terracotta                |
| 87  | double_side_fence         |
| 88  | frame                     |
| 89  | shulker_box               |
| 90  | doublesided_cross_texture |
| 91  | doublesided_double_plant  |
| 92  | doublesided_rows          |
| 93  | element_block             |
| 94  | chemistry_table           |
| 96  | coral_fan                 |
| 97  | seagrass                  |
| 98  | kelp                      |
| 99  | trapdoor                  |
| 100 | sea_pickle                |
| 101 | conduit                   |
| 102 | turtle_egg                |
| 105 | bubble_column             |
| 106 | barrier                   |
| 107 | sign                      |
| 108 | bamboo                    |
| 109 | bamboo_sapling            |
| 110 | scaffolding               |
| 111 | grindstone                |
| 112 | bell                      |
| 113 | lantern                   |
| 114 | campfire                  |
| 115 | lectern                   |
| 116 | sweet_berry_bush          |
| 117 | cartography_table         |
| 119 | stonecutter_block         |
| 123 | chain                     |
| 126 | sculk_sensor              |
| 133 | azalea                    |
| 133 | flowering_azalea          |
| 134 | glow_frame                |
| 135 | glow_lichen               |

[ Original Credit ](https://gist.github.com/toka7290/3bef704d2f57c775bb9ac84443a6df1c)
