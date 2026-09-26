---
title: Generating Custom Jigsaw Structures
description: How to generate custom jigsaw structures for large randomized structures.
category: Tutorials
license: true
mentions:
    - Supernova3695
    - QuazChick
---

:::tip BEFORE YOU START
This tutorial assumes basic understanding of how to navigate the jigsaw block UI.
:::

Jigsaw structures are the main system of generating custom structures that is used by Mojang to create structures such as Bastion Remnants and Villages.

This tutorial will show you how to make a simple dungeon.

## Structure Pieces

First things first, you will want to make your structure pieces. These can be tunnels or rooms or spawners.
We'll be making 2 tunnels, a straight piece and a corner.
We'll also make a room and a zombie and skeleton spawner to spawn in them.

At each end of a tunnel, place a jigsaw block with a target pool of `wiki:tunnels`, a target name of `wiki:tunnel` and a name of `wiki:tunnel`.
Copy the jigsaw block using Ctrl + Pick Block to copy its NBT data and place those jigsaw blocks at every entrance to tunnel or room that you want to be counted as a tunnel and spawn tunnel pieces out of it.

If you want a piece to only be connected to by tunnel pieces then you can remove target pool and target name and leave the name field or if you want the opposite you can remove the name field and the entrance will only generate tunnels.

<WikiImage
    src="tunnel_jigsaw.png"
    alt="The jigsaw settings for the tunnel pieces and the room piece"
    caption="The jigsaw settings for the tunnel pieces and the room piece."
    width="840"
/>

We'll do the above steps with our tunnels and room entrances.
For spawners we'll place a jigsaw facing upwards in the middle of the room with a target name specifying `wiki:spawner` and a target pool specifying `wiki:spawners`.
Then on the zombie and skeleton spawners we'll place a block beneath them with the name field specifying `wiki:spawner` then we'll set the turns into field to `minecraft:stone_bricks`.

<WikiImage
    src="spawner_jigsaw.png"
    alt="The jigsaw settings for the jigsaw block placing spawners"
    caption="The jigsaw settings for the jigsaw block placing spawners."
    width="840"
/>

After that is done you can save the structure pieces and we move into the programming portion of the structure.

<WikiImage
    src="structure_templates_completed.png"
    alt="All the completed structure templates"
    caption="All the completed structure templates."
    width="840"
/>

## Template Pools

If you don't already have a `worldgen` folder then create a folder named `worldgen` at the base level of the behavior pack on the same level as the manifest file.
Then, inside that folder, make a new folder called `template_pools`.

Inside that folder create a file called `tunnels.json` which should contain the following code:

### Template pool format

In the location field enter the file path to your tunnel structure files respective to their level within the `structures` folder of the behavior pack.

<CodeHeader path="BP/worldgen/template_pools/tunnels.json" />

```json
{
    "format_version": "1.21.100",
    "minecraft:template_pool": {
        "description": {
            "identifier": "wiki:tunnels"
        },
        "elements": [
            {
                "element": {
                    "element_type": "minecraft:single_pool_element",
                    "location": "wiki/example_dungeon/tunnels/tunnel_01"
                }
            },
            {
                "element": {
                    "element_type": "minecraft:single_pool_element",
                    "location": "wiki/example_dungeon/tunnels/tunnel_02"
                }
            },
            {
                "element": {
                    "element_type": "minecraft:single_pool_element",
                    "location": "wiki/example_dungeon/tunnels/room_01"
                }
            }
        ]
    }
}
```

Next up, we'll create the template pool for the spawners:

<CodeHeader path="BP/worldgen/template_pools/spawners.json" />

```json
{
    "format_version": "1.21.100",
    "minecraft:template_pool": {
        "description": {
            "identifier": "wiki:spawners"
        },
        "elements": [
            {
                "element_type": "minecraft:single_pool_element",
                "location": "wiki/example_dungeon/spawners/spawner_01"
            },
            {
                "element_type": "minecraft:single_pool_element",
                "location": "wiki/example_dungeon/spawners/spawner_02"
            }
        ]
    }
}
```

Now you are done with the template pools!

## Configuration Format

The configuration file governs how the structure is to be generated.
It tells the game how large it should be, what pieces should be used to start its generation, the biomes it can spawn in, and the way water works with it.
They are stored in the `structures` subfolder of the `worldgen` folder.

### Configuration format

These settings will make the structure always spawn at y level 0 and in any biome in the overworld.

<CodeHeader path="BP/worldgen/structures/dungeon.json" />

```json
{
    "format_version": "1.21.130",
    "minecraft:jigsaw": {
        "description": {
            "identifier": "wiki:dungeon"
        },
        "step": "underground_structures",
        "liquid_settings": "ignore_waterlogging",
        "start_height": {
            "type": "constant",
            "value": {
                "absolute": 0
            }
        },
        "max_depth": 15,
        "terrain_adaptation": "bury",
        "start_pool": "wiki:tunnels",
        "biome_filters": [
            {
                "test": "has_biome_tag",
                "value": "overworld"
            }
        ],
        "max_distance_from_center": 128,
        "dimension_padding": 10
    }
}
```

Now that you are done with the configuration file and template pools you have only one step left: structure sets!

## Structure Set

A structure set tells the game where to place a structure and how far apart one another should be from each other. They are stored in the `structure_sets` folder of the `worldgen` folder

### Structure Set format

This structure set will place a giant grid of 50 chunk by 50 chunk squares where the structure can spawn in the world seperated by 10 chunk boundries between the grid squares.
The `salt` and `spread_types` are used to randomize the placement of the structures in the set within a grid square.

<CodeHeader path="BP/worldgen/structure_sets/dungeon_set.json" />

```json
{
    "format_version": "1.21.130",
    "minecraft:structure_set": {
        "description": {
            "identifier": "wiki:dungeon_set"
        },
        "placement": {
            "type": "minecraft:random_spread",
            "salt": 39815673,
            "separation": 10,
            "spacing": 50,
            "spread_type": "linear"
        },
        "structures": [
            {
                "structure": "wiki:dungeon",
                "weight": 1
            }
        ]
    }
}
```

And that's it! Your structure should now be generating in the world.

Next you can check out the [Jigsaw Structures](/world-generation/jigsaw-structures) to learn more about more complicated jigsaw features.
