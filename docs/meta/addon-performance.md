---
title: Optimizing Add-on Performance
---

::: warning
This page was compiled primarily using community feedback from multiple sources. As a result, some information may be generalized, subjective, or conflicting. Always use your own best judgment when optimizing your addons. This page is not a substitute for testing your addon on a wide range of devices.
:::

Performance in addons is crucial, as the most technically fantastic addon is mainly useless if the majority of the player base cannot experience it. When developing addons, it should always be considered that many Bedrock players will be experiencing your addon on a significantly lower power device than you are developing on. This is especially true for mobile users. Therefore, addons should be developed with performance in mind and tested for performance on lower-end devices when possible.

This guide is a non-exhaustive list of specific performance considerations separated by the various subsystems of Bedrock Edition. No single point should be taken as a hard and fast rule. Instead, these performance considerations should help you to recognize potential areas for improvement.

## Performance Cost by Subsystem

### Biomes and Features

#### Biomes

-   The biome system is generally efficient
-   Large values for heightmaps are usually handled gracefully
-   The component `climate` creates large particle storms

#### Features

-   Biomes generally cause less lag than feature generation
-   Hundreds of iterations per chunk of a multi-block feature have been achieved at a low-performance cost
-   Thousands of iterations per chunk of multi-block features negatively impact gameplay
-   Hundreds of thousands of iterations per chunk of a single-block feature have been achieved at a low-performance cost

### Blocks

#### Materials

-   The minimum needed material type with regards to rendering should always be utilized
    -   alpha_blend performance is worse than alpha_test, which is worse than opaque

#### Quantity and Type

-   Flowing liquids should be avoided and minimized

#### Updates

-   Block updates should be minimized

### Commands

#### Quantity and Type

-   Minimize the number of commands run per tick
    -   /effect and /gamemode run every tick are avoidable and have a significant performance impact
-   Large clones and fills during runtime should be avoided
    -   Breaking these more extensive operations into multiple commands distributed over multiple ticks will avoid lag spikes

#### Selectors

-   Care should be taken to ensure a function is not executed on too many entities, and therefore too many times
-   Executing a scoreboard command outweighs the cost of running an entity selector multiple times
-   Using c=1 to ensure the selector stops when it finds one entity may improve performance
-   When executing multiple commands with the same selector, use a function instead to avoid repeatedly resolving the same selector

#### Tags vs. Scoreboards

-   Scoreboards perform better at a large scale than tags

### Entities

-   Entities generally have one of the most significant performance impacts by subsystem and thus should be minimized where possible

#### Components

-   Pathfinding on flying mobs has a significant performance cost
-   Flying mobs in general encounter performance problems
    -   Faking flying mobs via animation should be considered if possible

#### Dummy Entities

-   Dummy entities generally have equal performance impact to proper entities, except when excluding heavy components like pathfinding

#### Geometry

##### Bones

-   No performance impact has been observed regarding bone count

##### Elements

-   Element count is not generally an issue, except in extreme cases when thousands of elements are reached

#### Materials

-   The minimum material required to achieve the desired effect should always be used
-   When in doubt, refer to the material definition files to get an idea of the costs of various materials, taking the material inheritance system into account

#### Quantity

-   Loaded entities at any given time should be minimized
    -   Below 30 is optimal

### Lighting

#### Map Considerations

-   Hollow areas will cause lag due to lighting calculations
    -   Avoid this by filling in unused enclosed areas
-   Keeping the map set to day or night will avoid lighting recalculation

#### Sources

-   Bedrock lighting is calculated dynamically, meaning different light sources have different performance costs
    -   Light blocks are the most performant because they lack particles, rendering, and particular state logic
    -   Torches are a minor performance issue because they emit particles, render, and have particular state logic dependent on what block they connect to
    -   Custom light blocks with minimal components are a reasonable compromise between performance and aesthetics

##### Comparison Table

|     Light Source | Score | Redstone Updates | Animted Texture | Light Updates | Tick Updates | Particles | Renders |
| ---------------: | :---: | :--------------: | :-------------: | :-----------: | :----------: | :-------: | :-----: |
|     Light Blocks |   1   |      False       |      False      |     True      |    False     |   False   |  False  |
|         Lanterns |   4   |      False       |      True       |     True      |     True     |   False   |  True   |
|    Custom Blocks |   2   |      False       |      False      |     True      |    False     |   False   |  True   |
|        Mushrooms |   3   |      False       |      False      |     True      |     True     |   False   |  True   |
|   Redstone Lamps |   3   |       True       |      False      |     True      |    False     |   False   |  True   |
|        Glowstone |   3   |       True       |      False      |     True      |     True     |   False   |  True   |
|     Sea Lanterns |   4   |      False       |      True       |     True      |     True     |   False   |  True   |
|          Torches |   4   |      False       |      False      |     True      |     True     |   True    |  True   |
| Redstone Torches |   5   |       True       |      False      |     True      |     True     |   True    |  True   |

### Molang

#### Recursion

-   Minimize use of recursion when possible
-   Intense nested loop structures will cause performance issues
-   Use break to escape loops when possible

#### Structs

-   Avoid making structs too deep, as there is a performance cost with each layer

#### Variables

-   Use temp variables when possible to minimize variables loaded in memory
-   Consider how often variables are calculated based on script type

### Textures

#### Quantity

-   No more than 3000 textures should be used
    -   This is due to limits imposed by Render Dragon
    -   Render Dragon has a 4096 texture quantity limit, and there are 800 vanilla textures as of 1.16

#### Resolution

-   The maximum texture resolution is 16384x16384
-   The recommended maximum texture resolution is 4096x4096 to maintain compatibility with low-end devices
-   Keep in mind that textures are atlased, and larger textures can mess with atlas generation on lower-end devices
-   Only make textures as significant as needed to convey the detail needed at the needed distance

### Sounds

#### Count

-   Total registered sounds are reported to have an impact on performance

#### Compression

-   Sound compression is exceptionally beneficial to pack size
-   This is especially noticeable on older and low power devices, such as the Switch
-   The FMod simple API utilized by Bedrock decompresses all sounds into WAV before loading into RAM, meaning no CPU performance improvement in this respect
    -   If audio is streamed, this does not occur

#### Streaming

-   As general guidance, sounds over 500kb in size or 1 minute in length should be streamed

### Redstone

#### Chunk Boundaries

-   Crossing chunk boundaries with Redstone should be avoided

#### Command Blocks

-   When creating large command blockchains, stack vertically and in a single chunk
-   Minimize command block use in favor of functions and behaviors where possible

### Ticking Areas

-   Total chunks are of more significant concern than ticking areas
-   Dynamic areas should be avoided unless necessary
-   Best practice is to minimizing the ticking area to one chunk if possible
    -   All always-on Redstone should fit in this ticking chunk
-   Unload ticking areas when they are no longer needed, testing via /testforblock
