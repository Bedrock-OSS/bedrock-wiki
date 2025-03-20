---
title: Jigsaw Structures
category: General
mentions:
    - Supernova3695YT
description: Jigsaw structures explained.
---
Jigsaw structures are structures made out of smaller pieces and connected via jigsaw blocks. 
## Template Pools
Template pools are lists of structure files and how they will adapt to the terrain and what processors they will use. They are the files whos identifiers are used in the target pool of the jigsaw blocks. When you put a pool into the target pool you are telling the jigsaw block to look for a jigsaw in that template pool which has a name field value matching the value of the parent jigsaw's target name field. However it should be noted that they can only match with jigsaws that are of matching oritentation. A jigsaw that is facing up (the direction the arrows are facing) can only match with one facing down and ones facing to the side can match with any other one facing sideways.
### Elements
For now there is only one type of element ready for use to creators, minecraft:single_pool_element. This element places a structure file and then applies a processor to it. Once the element is set up then you can apply weight and terrain adaptation to it.
**Weight** is a number applied to entries on a pool that tells the jigsaw block how often it should pick this element. Higher values are higher likelyhood. 
**Projection** tells the game how the piece should adapt to the existing the terrain. There are two options, terrain_matching and rigid.
- terrain_matching: Terrain matching tells the game to make all the blocks, including air, to match the level of the ground like village paths.
- rigid: Rigid tells the game to keep the structure as it is, like a stronghold tunnel.
## Processors
Processors are lists of blocks and how they can be modified when the structure is placed. They can also apply loot tables to blocks that support them such as chests and sus gravel.
### Processor types
Processors support two types, minecraft:rule and minecraft:capped. Rule allows for the modification and replacement of blocks within a structure. It is how the vanilla trail ruins apply loot tables to sus blocks and decay the structures. Capped allows for the restriction of how many blocks a rule can apply to a structure, if you want to limit a rule processor from making half your blackstone structure into guilded blackstone you can apply a capped processor to the give the the rule processor a set number of the guilded blackstone blocks it can place before being forced to use other rules.
#### Rule processor
A rule processor allows for 5 inputs, input_predicate, output_state, block_entity_modifier, location_predicate, position_predicate
- input_predicate:  Allows for 4 different inputs to tell the game how to look for a block. It can be always_true, block_match, random_block_match, and tag_match. Based on which one is picked the game will select blocks based on it. always_true is self explainatory, block_match looks for a block, random_block_match looks for a block and picks some of them at random, if you had stone bricks this can be used to randomize it to cracked or mossy versions, and tag_match looks for blocks with a specfied tag.
- output_state: The block to replace the input predicate if it is found.
- block_entity_modifier: Allows for block_entities such as chests and barrels to applied loot. They can be marked as pass_through (do nothing) or append_loot in which a loot table is input to be applied.
- location_predicate: To specify if the block in input predicate is supposed to be looked for when placing the structure.
- position_predicate: No difference to the one above?
## Jigsaw structure
A jigsaw structure is a file that tells the game how to generate the structure. It's identfier is used for the /place and /locate structure commands. It also tells the game what template pool it should use to start and how large the structure should be using max_depth. They are stored in the jigsaw_structures subfolder of the worldgen folder.
### minecraft:jigsaw
The only type of jigsaw, this component contains the components the game uses to place the structure.
- description: contains the file identifier.
- step: What step of world gen places the structure. Contains multiple options, most notable being underground_structures, strongholds, and surface_structures.
- heightmap_projection: What y level the start_height value will look for to place the structure. Can be world_surface or sea_floor.
- start_height: A number, positive or negative, that tells the game what y level to place the structure realitive to the heightmap_projection.
- max_depth: How large you structure will be. Values can be 1 through 20 and the larger the number the larger the structure. A vanilla village is 6 for refernce. The depth determines how many jigsaws will be placed in a row before terminating the chain. For example if the structure starts with a structure with 1 generating jigsaw it will place 1 extention which counts as 1 level however if that extention places a piece with 3 generating jigsaws each piece placed by those will count as a level so all 3 will count as level 2, if they each place 3 more then all of those will count as level 3 and so on.
- terrain_adaptation: How the game will modify the terrain around the structure. 4 options. beard_thin places a platfrom around the base like java pillager outposts and villages in both versions. beard_box hollows a cavern around the structure like a ancient city. bury puts the structure underground but any part of the structure breaching the surface will be unburied just like a trail ruin. encapsulate surrounds the entire structure in terrain no matter what, trial chambers do this for larger caves underground. 
- start_pool: The identifier of a template pool to use for when the structure is placed.
- biome_filters: What biomes the structure can spawn in
## Structure sets
A file which tells the game how to place structures in a world. Mutliple structures can be put here and the distance of how far apart they are is set here. 
### minecraft:structure_set
The only type of structure set, this component contains the component the game uses to govern the placement of the structures set within it. 
- description: contains the file identifier.
- placement: contains the rules of placement
 - type: One value, minecraft:random_spread
 - salt: A random 8 number string that works like a world seed. A structure set sharing the same salt, spacing, and separation values will place structures in the same location.
 - spacing: Grid size in chunks of where to place structures in the set. They try to spawn once with in the box.
 - separation: The padding distance between structures from the set. Must be less than half of the spacing value.
 - spread_type: The algorithm used by the game to decided how to place the structures. 2 values, linear and triangle. I've not used triangle so I'm not aware of differences between them
- structures: A array with the identifers of structures (from the jigsaw_structures file) and weight for how often they should be picked
