---
title: Jigsaw Structures
description: Jigsaw structures are structures made out of smaller pieces and connected via jigsaw blocks.
category: General
license: true
mentions:
    - Supernova3695
    - QuazChick
    - Nusiq
---

Jigsaw structures are structures made out of smaller pieces and connected via jigsaw blocks.

## Jigsaw Blocks

<WikiImage
    src="/assets/images/world-generation/jigsaw-structures/jigsaw-ui.png"
    alt="The jigsaw block ui"
    caption="The jigsaw block UI."
    width="840"
/>

Jigsaw blocks are the blocks that put all the pieces of a structure together. There are two types of them, **generating jigsaws** and **connector jigsaws**. While they are visually identical they perform differently in game. A jigsaw block can also be both. You can fill out the target pool, target name, and name fields and the jigsaw will be able to generate pieces and be generated as a connector. This can be useful for tunnels or roads that are a turn so that mutiple different turns don't need to be specified. A jigsaw block placing that piece could select either end if all fields are used.

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
    caption="These two jigsaws can connect because their arrows are both aligned horizontally."
/>

<WikiImage
    src="/assets/images/world-generation/jigsaw-structures/connectable-jigsaws2.png"
    alt="Jigsaws that can connect"
    caption="These two jigsaws can connect because their arrows are both aligned horizontally."
/>

<WikiImage
    src="/assets/images/world-generation/jigsaw-structures/unconnectable-jigsaws.png"
    alt="Jigsaws that cannot connect"
    caption="These two jigsaws cannot connect because one is aligned horizontally while the other is aligned vertically."
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

Custom blocks are supported but all blocks in that field need their technical identifier found with `/give` or `/fill`. Block states can be specified in this field as well. `minecraft:campfire["extinguished"=true]` is an example.

### Selection Priority

If two generating jigsaws are attempting to place a structure in the same spot the jigsaw with the higher selection priority will place their piece first which will then stop the other piece from being placed unless the jigsaw can find a smaller structure in it's template pool which fits.

### Placement Priority

If a structure has 2+ connecting jigsaws the game will prioritize the connector jigsaw with the higher placement priority to be connected compared to ones with lower values.

### Joint Type

Not valid if the jigsaw is aligned horizontally, only vertical jigsaws can have this.

If the jigsaw is facing up and "rollable" is selected, the piece will select a random rotation to place the jigsaws.

If the jigsaw is set to "aligned" then the 2 white bars on the side of the block will always be matching each other when placed.

## Template Pools

Template pools are lists of structure files and how they will adapt to the terrain and what processors they will use.
They are the files whose identifiers are used in the target pool of the jigsaw blocks.

When you put a pool into the target pool you are telling the jigsaw block to look for a jigsaw in that template pool which has a name field value matching the value of the parent jigsaw's target name field.

However it should be noted that they can only match with jigsaws that are of matching orientation.
A jigsaw that is facing up (the direction the arrows are facing) can only match with one facing down and ones facing to the side can match with any other one facing sideways.

### Elements

For now there are only two types of element available for creators to use: `minecraft:empty_pool_element` and `minecraft:single_pool_element`.

-   `weight` is a number applied to entries on a pool that tells the jigsaw block how often it should pick this element. Higher values are higher likelihood.

#### Empty Pool Element

This element places nothing. If the jigsaw blocks are viewed using debug generation, they will have no connection if an empty pool element was selected. A structure will fail to generate if this is the starting element.

#### Single Pool Element

This element places a structure template and then applies a processor and projection to it.

-   `projection`: (optional) tells the game how the piece should adapt to the existing the terrain. There are two options:

    -   `rigid`: Rigid tells the game to keep the structure as it is, like a stronghold tunnel. This is the default if `projection` is not specified.
    -   `terrain_matching`: Terrain matching tells the game to make all the blocks, including air, to match the level of the ground like village paths. These pieces do not have terrain density from `terrain_adaptation` applied to them.

-   `location`: tells the game where the file to generate is.
-   `processors`: (optional) the ID of a processor to apply to the piece.

## Processors

Processors are lists of blocks and how they can be modified when the structure is placed. They can also apply loot tables to blocks that support them such as chests and suspicous gravel.

Processors support four `processor_type`s, `minecraft:capped`, `minecraft:protected_blocks`, `minecraft:block_ignore` and `minecraft:rule`.

### Block Ignore Processors

Block ignore processors allow for a array of blocks that will not be placed in the structure. Cobblestone could be listed in the array and no cobblestone would be placed in pieces using that processor.

A block ignore processor allows for 1 field:

-   `blocks`: A array of block identifiers. Block IDs can be found with `/setblock`.

<CodeHeader>minecraft:processor_list</CodeHeader>

```json
{
    "processor_type": "minecraft:block_ignore",
    "blocks": ["minecraft:cobblestone"]
}
```

### Protected Blocks Processor

Protected blocks processors allow for specification of a block tag that will not be overwritten by the structure when generated. The stone block tag could be provided and no blocks with that tag would be replaced by pieces with that processor applied.

A protected block processor allows for 1 field:

-   `value`: A [block tag](https://wiki.bedrock.dev/blocks/vanilla-block-tags).

<CodeHeader>minecraft:processor_list</CodeHeader>

```json
{
    "processor_type": "minecraft:protected_blocks",
    "value": "mob_spawner"
}
```

### Capped Processor

Capped allows for the restriction of how many blocks a rule can apply to a structure.

For example, if you want to limit a rule processor from making half your blackstone structure into gilded blackstone you can apply a capped processor to the give the the rule processor a set number of the gilded blackstone blocks it can place before being forced to use other rules.

A capped processor allows for 2 fields:

-   `limit`: A positive integer that sets the amount of times the delegate field will be run.
    Limit can also be a object and specify a type of `uniform` then a `max_inclusive`, a integer, and then a `min_inclusive`, also a integer.
    Limit can also specify a type of `constant` and then a `value`, a integer.
-   `delegate`: A processor that will run the amount of times set in `limit`. It cannot be another `minecraft:capped` processor.

<CodeHeader>minecraft:processor_list</CodeHeader>

```json
{
    "processor_type": "minecraft:capped",
    "limit": 5,
    "delegate": {}
}
```

### Rule Processor

Rule allows for the modification and replacement of blocks within a structure.
It is how the vanilla trail ruins apply loot tables to sus blocks and decay the structures.

A rule processor allows for 5 inputs:

-   `input_predicate`: Allows for 6 different inputs to tell the game how to look for a block. The game will select blocks based on which one is picked. The field is specified by field `predicate_type`.
    -   `minecraft:always_true` is self explanatory.
    -   `minecraft:block_match` looks for a specific block type.
    -   `minecraft:blockstate_match` looks for a block with the specified block state values.
    -   `minecraft:random_block_match` looks for a specific block and picks some of them at random, if you had stone bricks in your structure this could be used to replace some with cracked or mossy versions.
    -   `minecraft:random_blockstate_match` looks for a block with the specified block state values and picks some of them at random. If you have a upper stone brick slab this rule can look for specifically upper stone brick slabs for replacement into upper mossy stonebrick slabs.
    -   `minecraft:tag_match` looks for blocks with a specified tag.
-   `output_state`: The block to replace the input predicate if it is found.
-   `block_entity_modifier`: Allows for block entities such as chests and barrels to have loot applied. The field is specified by field `predicate_type`.
    -   `minecraft:passthrough` does nothing.
    -   `minecraft:append_loot` applies a loot table to the block if it can support loot tables. This resets the block to its default permutation, resulting in states like chest direction being lost ([MCPE-230078](https://bugs.mojang.com/browse/MCPE-230078)).
        -   `loot_table` is the loot table to apply.
-   `location_predicate`: Checks the block that previosly existed in the world before a block from the structure replaced it. This predicate uses rule tests like `input_predicate` does but it runs it on the block being replaced instead of the block in the structure being placed.
-   `position_predicate`: Changes the block based on its postion realtive to the structure origin point. It has 2 predicate types. The field is specified by field `predicate_type`.
    -   `minecraft:always_true` is self explantory.
    -   `minecraft:axis_aligned_linear_pos` can select blocks at certain ranges from the structure origin based on a specific axis.
        -   `axis` the axis to test, `x`, `y`, or `z` are valid.
        -   `min_distance` the distance from the structure origin to apply `min_chance`. All blocks from the origin to this block will have the `min_chance` field apply and run the rule test based off that percentage.
        -   `max_distance` the distance from the `min_distance` to this field to apply `max_chance`. All blocks from the `min_distance` to this block will have the `max_chance` field apply and run the rule test based off that percentage.
        -   `min_chance` a percentage from 0.0 to 1.0 for the processor to be run if the block is between the origin and the `min_distance`.
        -   `max_chance` a percentage from 0.0 to 1.0 for the processor to be run if the block is between the `min_distance` and the `max_distance`.

<CodeHeader>minecraft:processor_list</CodeHeader>

```json
{
    "processor_type": "minecraft:rule",
    "rules": [
        {
            "input_predicate": {
                "predicate_type": "minecraft:random_block_match",
                "block": "minecraft:diamond_block",
                "probability": 0.5
            },
            "output_state": "minecraft:gold_block"
        }
    ]
}
```

## Jigsaw Structure Definition

Jigsaw structure files tell the game how to generate structures that make use of jigsaws.
They are stored in the `BP/worldgen/structures` folder and each jigsaw structure's identifier is used for the `/place` and `/locate` structure commands.

They tell the game which template pool should be used to start generating the structure and how large the structure should be using `max_depth` among other things.

They are stored in the `structures` subfolder of the `BP/worldgen` folder.

<CodeHeader>BP/worldgen/structures/lone_fortress.json</CodeHeader>

```json
{
    "format_version": "1.21.20",
    "minecraft:jigsaw": {
        "description": {
            "identifier": "wiki:fortress" // Used for "/locate" and "/place"
        }
        // Other parameters go here
    }
}
```

### Generation Configuration

-   `step`: Which step of world generation places the structure.
    Contains multiple options, most notable being `underground_structures`, `strongholds`, and `surface_structures`.

    <CodeHeader>minecraft:jigsaw</CodeHeader>

    ```json
    "step": "surface_structures"
    ```

-   `heightmap_projection`: (optional) What y level the start_height value will look for to place the structure.
    Can be `world_surface` or `sea_floor`.

    <CodeHeader>minecraft:jigsaw</CodeHeader>

    ```json
    "heightmap_projection": "world_surface"
    ```

-   `liquid_settings`: (optional) Determines what to do if a piece generates where a liquid was before. Can be `apply_waterlogging` or `ignore_waterlogging`. Defaults to `apply_waterlogging`.
-   <CodeHeader>minecraft:jigsaw</CodeHeader>

    ```json
    "liquid_settings": "ignore_waterlogging"
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
                "max": {
                    "below_top": 100
                },
                "min": {
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

-   `max_depth`: How large the structure will be. Values can be 1 through 20 inclusive and the larger the number the larger the structure.

    A vanilla village on java is 6 for reference. A trial chamber is 20.

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
    -   `bury` surrounds the structure starting piece in terrain (helpful if the structure is started in the ground with `start_height` but any part of the structure above the start piece will be unburied just like a trail ruin.
    -   `encapsulate` surrounds the entire structure in terrain no matter what, trial chambers do this for larger caves underground.
    -   `none` does nothing.

-   `start_pool`: The identifier of a template pool to use for when the structure is placed.

    <CodeHeader>minecraft:jigsaw</CodeHeader>

    ```json
    "start_pool": "wiki:lone_fortress_courtyard"
    ```

-   `start_jigsaw_name`: (optional) The name field value of the jigsaw block from a structure in the start pool that should be considered the origin point of the structure.
    The location of the jigsaw block will be the center that `max_distance_from_center` uses as an origin and it will also be the coordinates that `/locate` guides to.

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

-   `max_distance_from_center`: (optional) How many blocks out in a radius that the structure can extend before terminating. Can be 1-128 inclusive. Defaults to 128.

    <CodeHeader>minecraft:jigsaw</CodeHeader>

    ```json
    "max_distance_from_center": 128
    ```

-   `dimension_padding`: (optional) How close to the world height and depth limits pieces of the structure can get before being terminated. Must be a positive number. Top and bottom can be set separately. Defaults to 0.

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

The `placement` parameter of structure sets contains the following rules of placement, each of which is required:

-   `type`: One value, `minecraft:random_spread`
-   `salt`: A random 8 number string that works like a world seed. A structure set sharing the same salt, spacing, and separation values will place structures in the same location.
-   `spacing`: Grid size (in chunks) of where to place structures in the set. They try to spawn once within the box.
-   `separation`: The padding distance (in chunks) between structures from the set. Must be less than half of the spacing value.
-   `spread_type`: The algorithm used by the game to decided how to place the structures, either `linear` or `triangular`.
    -   `linear` is basic randomness.
    -   `triangular` is more advanced randomness.

### Structures

The `structures` parameter of structure sets is an array with the identifiers of structures (from the `BP/worldgen/structures` folder) and weight for how often they should be picked.
In this example, the two structures have an equal chance of being picked when the structure set marks a spot for a structure.
If the structure selected to generate rolls a `minecraft:empty_pool_element` for its starting pool, the structure will fail to generate and the structure set will reroll until a structure is generated.

<CodeHeader>minecraft:structure_set</CodeHeader>

```json
"structures": [
    {
        "structure": "wiki:fortress",
        "weight": 1
    },
    {
        "structure": "wiki:mage_tower",
        "weight": 1
    }
]
```

## Full Code Examples

### Jigsaw Definition

<CodeHeader>BP/worldgen/structures/fortress.json</CodeHeader>

```json
{
    "format_version": "1.21.130",
    "minecraft:jigsaw": {
        "description": {
            "identifier": "wiki:fortress"
        },
        "step": "surface_structures",
        "heightmap_projection": "world_surface",
        "liquid_settings": "apply_waterlogging",
        "start_height": {
            "type": "constant",
            "value": {
                "absolute": 0
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

### Template Pool

<CodeHeader>BP/worldgen/template_pools/lone_fortress_courtyard.json</CodeHeader>

```json
{
    "format_version": "1.21.130",
    "minecraft:template_pool": {
        "description": {
            "identifier": "wiki:lone_fortress_courtyard"
        },
        "elements": [
            {
                "element": {
                    "element_type": "minecraft:single_pool_element",
                    "location": "wiki/lone/fortress/courtyard_1",
                    "processors": "wiki:fortress_decay",
                    "projection": "rigid"
                },
                "weight": 1
            }
        ]
    }
}
```

### Processor List

<CodeHeader>BP/worldgen/processors/fortress_decay.json</CodeHeader>

```json
{
    "format_version": "1.21.130",
    "minecraft:processor_list": {
        "description": {
            "identifier": "wiki:fortress_decay"
        },
        "processors": [
            {
                "processor_type": "minecraft:protected_blocks",
                "value": "mob_spawner"
            },
            {
                "processor_type": "minecraft:rule",
                "rules": [
                    {
                        "input_predicate": {
                            "predicate_type": "minecraft:random_block_match",
                            "block": "minecraft:diamond_block",
                            "probability": 0.5
                        },
                        "output_state": "minecraft:gold_block"
                    }
                ]
            },
            {
                "processor_type": "minecraft:block_ignore",
                "blocks": ["minecraft:barrier"]
            },
            {
                "processor_type": "minecraft:capped",
                "limit": 5,
                "delegate": {
                    "processor_type": "minecraft:rule",
                    "rules": [
                        {
                            "input_predicate": {
                                "predicate_type": "minecraft:random_block_match",
                                "block": "diamond_block",
                                "probability": 1
                            },
                            "output_state": "gold_block"
                        }
                    ]
                }
            }
        ]
    }
}
```

### Structure Set

<CodeHeader>BP/worldgen/structure_sets/fortress.json</CodeHeader>

```json
{
    "format_version": "1.21.130",
    "minecraft:structure_set": {
        "description": {
            "identifier": "wiki:fortress"
        },
        "placement": {
            "type": "minecraft:random_spread",
            "salt": 89673456,
            "separation": 10,
            "spacing": 100,
            "spread_type": "triangular"
        },
        "structures": [
            {
                "structure": "wiki:fortress",
                "weight": 1
            }
        ]
    }
}
```
