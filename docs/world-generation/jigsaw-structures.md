---
title: Jigsaw Structures
description: Jigsaw structures are structures made out of smaller pieces and connected via jigsaw blocks.
category: General
tags:
    - experimental
license: true
mentions:
    - Supernova3695
    - QuazChick
    - Nusiq
---

:::warning EXPERIMENTAL
Jigsaw structures only function when the "Data-Driven Jigsaw Structures" experiment is enabled.
:::

Jigsaw structures are structures made out of smaller pieces and connected via jigsaw blocks.

## Jigsaw Blocks

<WikiImage
    src="/assets/images/world-generation/jigsaw-structures/jigsaw-ui.png"
    alt="The jigsaw block ui"
    caption="The jigsaw block UI."
    width="840"
/>

Jigsaw blocks are the blocks that put all the pieces of a structure together. There are two types of them, **generating jigsaws** and **connector jigsaws**. While they are visually identical they perform differently in game.

-   A **generating jigsaw** has a filled [target pool](#target-pool) and [target name](#target-name) field.

    They will look through a [template pool](#template-pools) for a structure with a connecting jigsaw with the name field matching the target name field.

    <WikiImage
        src="/assets/images/world-generation/jigsaw-structures/generating-jigsaw-block.png"
        alt="A generating jigsaw"
        caption="A generating jigsaw"
        width="480"
    />

-   A **connecting jigsaw** has a filled [name](#name) field and cannot generate anything.

    They are the block that generating jigsaws will look for when placing their connector pieces.

    <WikiImage
        src="/assets/images/world-generation/jigsaw-structures/connecting-jigsaw-block.png"
        alt="A generating jigsaw"
        caption="A generating jigsaw"
        width="480"
    />

### Target Pool

The target pool is the field that holds the identifier of the template pool for the jigsaw to look for.

The jigsaw will look through this entire list of structures looking for jigsaws which it can connect to. This is called a generating jigsaw.
It has a target pool and target name which will place a structure with a connector jigsaw which only has a name.

<CardGrid>

<WikiImage
    src="/assets/images/world-generation/jigsaw-structures/connectable-jigsaws.png"
    alt="Jigsaws that can connect"
    caption="These two jigsaws can connect because they are rotated the same way."
/>

<WikiImage
    src="/assets/images/world-generation/jigsaw-structures/connectable-jigsaws2.png"
    alt="Jigsaws that can connect"
    caption="These two jigsaws can connect because their arrows are facing the same way."
/>

<WikiImage
    src="/assets/images/world-generation/jigsaw-structures/unconnectable-jigsaws.png"
    alt="Jigsaws that cannot connect"
    caption="These two jigsaws cannot connect because their arrows are not facing the same direction."
/>

</CardGrid>

### Name

The name of the piece of structure the jigsaw is part of. A jigsaw with only this field is called a connecting jigsaw.

If you want a bunch of tunnels you would give one of their jigsaws a name which a generating jigsaw can use in their target name field to select.
A generating jigsaw will search through their assigned template pool for connecting jigsaws with a name field matching the target name field they have.

### Target Name

The target name is the field that is employed by generating jigsaws to find connecting jigsaws with the same name field.

If you have a connecting jigsaw in a tunnel with the name tunnel and have a generating jigsaw with that target name the game will look for a list of tunnels and pick one that shares its name.

### Turns Into

This field determines the identifier of the block that the jigsaw should turn into when done generating.

Custom blocks are supported but all blocks in that field need their technical identifier found with `/give` or `/fill`.

### Selection Priority

If two generating jigsaws are attempting to place a structure in the same spot the jigsaw with the higher selection priority will place their piece first which will then stop the other piece from being placed unless the jigsaw can find a smaller structure in it's template pool which fits.

### Placement Priority

If a structure has 2+ connecting jigsaws the game will prioritize the connector jigsaw with the higher placement priority to be connected compared to ones with lower values.

### Joint Type

Not valid if the jigsaw is facing outwards, only up or down.

If the jigsaw is facing up and "rollable" is selected, the piece will select a random rotation to place the jigsaws.

If the jigsaw is set to "aligned" then the 2 white bars on the side of the block will always be matching each other when placed.

## Template Pools

Template pools are lists of structure files and how they will adapt to the terrain and what processors they will use.
They are the files whose identifiers are used in the target pool of the jigsaw blocks.

When you put a pool into the target pool you are telling the jigsaw block to look for a jigsaw in that template pool which has a name field value matching the value of the parent jigsaw's target name field.

However it should be noted that they can only match with jigsaws that are of matching orientation.
A jigsaw that is facing up (the direction the arrows are facing) can only match with one facing down and ones facing to the side can match with any other one facing sideways.

### Elements

For now there is only one type of element ready for use to creators, `minecraft:single_pool_element`.

-   `weight` is a number applied to entries on a pool that tells the jigsaw block how often it should pick this element. Higher values are higher likelihood.

#### Single Pool Element

This element places a structure file and then applies a processor to it. Once the element is set up then you can apply weight and terrain adaptation to it.

-   `projection` tells the game how the piece should adapt to the existing the terrain. There are two options:

    -   `minecraft:rigid`: Rigid tells the game to keep the structure as it is, like a stronghold tunnel.
    -   `minecraft:terrain_matching`: Terrain matching tells the game to make all the blocks, including air, to match the level of the ground like village paths.

## Processors

Processors are lists of blocks and how they can be modified when the structure is placed. They can also apply loot tables to blocks that support them such as chests and sus gravel.

Processors support two types, `minecraft:capped` and `minecraft:rule`.

### Capped Processor

Capped allows for the restriction of how many blocks a rule can apply to a structure.

For example, if you want to limit a rule processor from making half your blackstone structure into gilded blackstone you can apply a capped processor to the give the the rule processor a set number of the gilded blackstone blocks it can place before being forced to use other rules.

### Rule Processor

Rule allows for the modification and replacement of blocks within a structure.
It is how the vanilla trail ruins apply loot tables to sus blocks and decay the structures.

A rule processor allows for 5 inputs:

-   `input_predicate`: Allows for 4 different inputs to tell the game how to look for a block. The game will select blocks based on which one is picked.

    -   `minecraft:always_true` is self explanatory.
    -   `minecraft:block_match` looks for a block.
    -   `minecraft:random_block_match` looks for a block and picks some of them at random, if you had stone bricks this can be used to randomize it to cracked or mossy versions.
    -   `minecraft:tag_match` looks for blocks with a specified tag.

-   `output_state`: The block to replace the input predicate if it is found.
-   `block_entity_modifier`: Allows for block entities such as chests and barrels to have loot applied. They can be marked as `pass_through` (do nothing) or `append_loot` in which a loot table is input to be applied.
-   `location_predicate`: To specify if the block in input predicate is supposed to be looked for when placing the structure.
-   `position_predicate`: No difference to the one above?

## Jigsaw Structures

A jigsaw structure is a file that tells the game how to generate the structure.
Its identifier is used for the `/place` and `/locate` structure commands.
It also tells the game what template pool it should use to start and how large the structure should be using `max_depth`.

They are stored in the `structures` subfolder of the `worldgen` folder.

<CodeHeader>BP/worldgen/structures/lone_fortress.json</CodeHeader>

```json
{
    "format_version": "1.21.20",
    "minecraft:jigsaw": {
        "description": {
            "identifier": "wiki:lone_fortress" // Used for "/locate" and "/place"
        }
        // Other parameters go here
    }
}
```

### Jigsaw Parameters

-   `step`: Which step of world generation places the structure.
    Contains multiple options, most notable being `underground_structures`, `strongholds`, and `surface_structures`.

    <CodeHeader>minecraft:jigsaw</CodeHeader>

    ```json
    "step": "surface_structures"
    ```

-   `heightmap_projection`: (Optional) What y level the start_height value will look for to place the structure.
    Can be `world_surface` or `sea_floor`.

    <CodeHeader>minecraft:jigsaw</CodeHeader>

    ```json
    "heightmap_projection": "world_surface"
    ```

-   `start_height`: The setting which controls the offset from `heightmap_projection` to place the `start_pool`.
    It has multiple entries based on the `type` field.

    -   `type`: The type of projection to be used. `constant` and `uniform` types are available.

        -   `constant`: A constant anchor point will be used.
            The rest of the `start_height` will follow the format of `constant` when `type` is set to it.

            <CodeHeader>minecraft:jigsaw</CodeHeader>

            ```json
            "start_height": {
                "type": "constant",
                "value": {
                    "absolute": 10
                }
            }
            ```

        -   `uniform`: Uniform distribution of possible starting heights.
            The rest of the `start_height` will follow the format of `uniform` when `type` is set to it.

            <CodeHeader>minecraft:jigsaw</CodeHeader>

            ```json
            "start_height": {
                "type": "uniform",
                "min": {
                    "below_top": 100
                },
                "max": {
                    "above_bottom": 20
                }
            }
            ```

    -   `value`: 4 possible entries to base the value from relative to it's assigned level.
        -   `absolute`: A number, positive or negative of where to offset the generation of the `start_pool` piece from the `heightmap_projection`. Must be an integer.
        -   `above_bottom`: A height relative to the bottom of the dimension. Must be a positive integer.
        -   `below_top`: A height relative to the top of the dimension. Must be a positive integer.
        -   `from_sea`: A height relative to the sea level of the dimension (overworld is 64). Must be an integer.
    -   `max`: If `type` is uniform this value is used to set the highest value the range of generation y levels can be.
        -   Can use all 4 of the values from `value` above here
    -   `min`: If `type` is uniform this value is used to set the lowest value the range of generation y levels can be.
        -   Can use all 4 of the values from `value` above here

-   `max_depth`: How large you structure will be. Values can be 1 through 20 inclusive and the larger the number the larger the structure.

    A vanilla village is 6 for reference.

    The depth determines how many jigsaws will be placed in a row before terminating the chain.
    For example if the structure starts with a structure with 1 generating jigsaw it will place 1 extension which counts as 1 level however if that extension places a piece with 3 generating jigsaws each piece placed by those will count as a level so all 3 will count as level 2, if they each place 3 more then all of those will count as level 3 and so on.

    <CodeHeader>minecraft:jigsaw</CodeHeader>

    ```json
    "max_depth": 20
    ```

-   `terrain_adaptation`: (optional) How the game will modify the terrain around the structure.

    <CodeHeader>minecraft:jigsaw</CodeHeader>

    ```json
    "terrain_adaptation": "beard_thin"
    ```

    -   `beard_box` hollows a cavern around the structure like an ancient city.
    -   `beard_thin` places a platform around the base like villages.
    -   `bury` puts the structure underground but any part of the structure breaching the surface will be unburied just like a trail ruin.
    -   `encapsulate` surrounds the entire structure in terrain no matter what, trial chambers do this for larger caves underground.

-   `start_pool`: The identifier of a template pool to use for when the structure is placed.

    <CodeHeader>minecraft:jigsaw</CodeHeader>

    ```json
    "start_pool": "wiki:lone_fortress_courtyard"
    ```

-   `start_jigsaw_name`: (optional) The name of the jigsaw block from a structure in the start pool that should be placed.

    <CodeHeader>minecraft:jigsaw</CodeHeader>

    ```json
    "start_jigsaw_name": "wiki:courtyard"
    ```

-   `biome_filters`: (optional) What biomes the structure can spawn in.

    <CodeHeader>minecraft:jigsaw</CodeHeader>

    ```json
    "biome_filters": [
        {
            "test": "has_biome_tag",
            "value": "plains"
        }
    ]
    ```

-   `max_distance_from_center`: (optional) How many blocks out in a radius that the structure can extend before terminating. Can be 1-128 inclusive.

    <CodeHeader>minecraft:jigsaw</CodeHeader>

    ```json
    "max_distance_from_center": 128
    ```

-   `dimension_padding`: (optional) How close to the world height and depth limits pieces of the structure can get before being terminated. Must be a positive number.

    <CodeHeader>minecraft:jigsaw</CodeHeader>

    ```json
    "dimension_padding": 0
    ```

-   `pool_aliases`: (optional) Can be used to reroute jigsaw target pools to a set template that will be applied to the whole structure to allow for the creation of themes.

    Trial chambers use them to determine what type of mob will be spawned from each type of spawner. For example the small melee spawners can pick baby zombies and every single small melee spawner will then spawn baby zombies.

    <CodeHeader>minecraft:jigsaw</CodeHeader>

    ```json
    "pool_aliases": [
        ...
    ]
    ```

    There are three types of redirects:

    -   `direct`: The redirect will reroute the alias assigned to it to a template pool.

        Direct has 2 extra fields after `type` is assigned to be `direct`:

        -   `alias` is the ID of the pool alias to be used in the target field of a jigsaw block.
        -   `target` is the template pool to be used when the alias is called.

        <CodeHeader>minecraft:jigsaw > pool_aliases</CodeHeader>

        ```json
        {
            "type": "direct",
            "alias": "wiki:lone_fortress/spawners/spawner",
            "target": "wiki:lone_fortress/spawners/skeleton" // This template pool is nested in the "lone_fortress/spawners" folder
        }
        ```

    -   `random`: The redirect will reroute the alias to a weighted list of template pools where it will pick one of the entries to use for the entire structure.

        Like direct, `random` has 2 extra fields after `type` is assigned to be `random`:

        -   `alias` is the ID of the pool alias to be used in the target field of a jigsaw block.
        -   `targets` is an array that has entries with 2 fields themselves to govern how they are picked.
            -   `data` is the ID of the template pool to be used if chosen.
            -   `weight` is the weight assigned to it, a higher value is more likely to be chosen.

        <CodeHeader>minecraft:jigsaw > pool_aliases</CodeHeader>

        ```json
        {
            "type": "random",
            "alias": "wiki:lone_fortress/spawners/spawner",
            "targets": [
                {
                    "data": "wiki:lone_fortress/spawners/skeleton",
                    "weight": 1
                },
                {
                    "data": "wiki:lone_fortress/spawners/zombie",
                    "weight": 3
                }
            ]
        }
        ```

    -   `random_group`: The redirect will reroute the alias to a list made up of the prior two types allowing for the pool alias to pick other types.

        They can be any type except `random_group`.

        <CodeHeader>minecraft:jigsaw > pool_aliases</CodeHeader>

        ```json
        {
            "type": "random_group",
            "groups": [
                {
                    "data": [
                        {
                            "type": "direct",
                            "alias": "wiki:lone_fortress/spawners/spawner",
                            "target": "wiki:lone_fortress/spawners/skeleton"
                        },
                        {
                            "type": "direct",
                            "alias": "wiki:lone_fortress/spawners/spawner_throne",
                            "target": "wiki:lone_fortress/spawners/zombie"
                        }
                    ],
                    "weight": 1
                },
                {
                    "data": [
                        {
                            "type": "random",
                            "alias": "wiki:lone_fortress/spawners/spawner",
                            "targets": [
                                {
                                    "data": "wiki:lone_fortress/spawners/skeleton",
                                    "weight": 1
                                },
                                {
                                    "data": "wiki:lone_fortress/spawners/zombie",
                                    "weight": 3
                                }
                            ]
                        }
                    ],
                    "weight": 1
                }
            ]
        }
        ```

### Full Example

<CodeHeader>BP/worldgen/structures/fortress.json</CodeHeader>

```json
{
    "format_version": "1.21.20",
    "minecraft:jigsaw": {
        "description": {
            "identifier": "wiki:fortress"
        },
        "step": "surface_structures",
        "heightmap_projection": "world_surface",
        "start_height": {
            "type": "constant",
            "value": {
                "absolute": -15
            }
        },
        "max_depth": 15,
        "terrain_adaptation": "beard_thin",
        "start_pool": "wiki:fortress_courtyard",
        "biome_filters": [
            {
                "test": "has_biome_tag",
                "value": "plains"
            }
        ],
        "max_distance_from_center": 128,
        "dimension_padding": 10,
        "pool_aliases": [
            {
                "type": "random",
                "alias": "wiki:spawners",
                "targets": [
                    {
                        "data": "wiki:spawners/zombie",
                        "weight": 10
                    },
                    {
                        "data": "wiki:spawners/skeleton",
                        "weight": 8
                    },
                    {
                        "data": "wiki:spawners/vindicator",
                        "weight": 1
                    }
                ]
            }
        ]
    }
}
```

## Structure Sets

A file which tells the game how to place structures in a world. Multiple structures can be put here and the distance of how far apart they are is set here.

<CodeHeader>BP/worldgen/structure_sets/fortress.json</CodeHeader>

```json
{
    "format_version": "1.21.20",
    "minecraft:structure_set": {
        "description": {
            "identifier": "wiki:fortress"
        },
        "placement": { ... },
        "structures": [ ... ]
    }
}
```

### Placement

The `placement` parameter of structure sets contains the following rules of placement:

-   `type`: One value, `minecraft:random_spread`
-   `salt`: A random 8 number string that works like a world seed. A structure set sharing the same salt, spacing, and separation values will place structures in the same location.
-   `spacing`: Grid size (in chunks) of where to place structures in the set. They try to spawn once within the box.
-   `separation`: The padding distance (in chunks) between structures from the set. Must be less than half of the spacing value.
-   `spread_type`: The algorithm used by the game to decided how to place the structures, either `linear` or `triangle`.

### Structures

The `placement` parameter of structure sets is an array with the identifiers of structures (from the `worldgen/structures` file) and weight for how often they should be picked.

<CodeHeader>minecraft:structure_set</CodeHeader>

```json
"structures": [
    {
        "structure": "wiki:fortress",
        "weight": 1
    }
]
```
