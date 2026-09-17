---
title: Dimensions
description: Learn how to define custom dimensions with JSON in your behavior pack.
category: General
related:
    - /world-generation/biomes
mentions:
    - SmokeyStack
---

Custom dimensions are new spaces outside of the Overworld, Nether and End. A dimension JSON file in your behavior pack declares the dimension's identifier, how it generates, its vertical size and its default biome. Once defined, the dimension exists in every world the pack is applied to and can be reached from script.

:::warning
Custom dimensions currently only support the `void` generator, so they contain no terrain until you place blocks in them. There is also no portal or command support for entering a custom dimension yet; players are moved in and out with the Script API.
:::

## Folder Structure

Each dimension is one JSON file inside the behavior pack's `dimensions` folder. The file name does not matter, but it is good practice to match it to the dimension's identifier.

<FolderView :paths="[
	'BP/dimensions/void_arena.json',
]" />

## Format

The file contains a single `minecraft:dimension` object with a `description` and a `components` object, following the same shape as entities and blocks.

<CodeHeader path="BP/dimensions/void_arena.json" />

```json
{
    "format_version": "1.26.50",
    "minecraft:dimension": {
        "description": {
            "identifier": "wiki:void_arena"
        },
        "components": {
            "minecraft:generation": {
                "generator_type": "void"
            },
            "minecraft:dimension_height": {
                "min_y": -64,
                "height_range": 384
            },
            "minecraft:default_biome": {
                "biome": "minecraft:plains"
            }
        }
    }
}
```

## Description

### identifier

<Label color="red">Required</Label>

The namespaced identifier of the dimension, for example `wiki:void_arena`. This is the ID used by `world.getDimension()` in script and reported by `Dimension.id`. Vanilla identifiers (`minecraft:overworld`, `minecraft:nether`, `minecraft:the_end`) cannot be used for custom dimensions.

## Components

### minecraft:generation

<Label color="red">Required</Label>

Controls how the dimension generates terrain.

-   `generator_type` - The generator to use. Only `"void"` is currently supported for custom dimensions, which produces an empty dimension with no terrain, structures or features.

```json
"minecraft:generation": {
    "generator_type": "void"
}
```

### minecraft:dimension_height

<Label color="green">Optional</Label>

Sets the vertical bounds of the dimension. Both fields are required if the component is present. If omitted, the dimension uses the default Overworld range of -64 to 320.

-   `min_y` - The lowest Y level of the dimension. Integer between -512 and 512.
-   `height_range` - The number of blocks between the bottom and the top of the dimension. Integer between 16 and 1024, and must be a multiple of 16.

The dimension must stay within the world's absolute limits of -512 to 512: `min_y` cannot be below -512, and the top of the dimension, `min_y + height_range`, cannot exceed 512.

```json
"minecraft:dimension_height": {
    "min_y": -512,
    "height_range": 1024
}
```

### minecraft:default_biome

<Label color="green">Optional</Label>

The biome that fills the dimension. Custom biomes work here as well as vanilla ones. Because the generator is `void`, the biome does not produce terrain, but it still controls things like the sky and fog colour, mob spawning and the biome reported to scripts and commands.

-   `biome` - The identifier of the biome.

This component is only valid on custom dimensions. Using it on a vanilla dimension produces a content error.

```json
"minecraft:default_biome": {
    "biome": "wiki:crystal_caves"
}
```

## Entering a Custom Dimension

Dimensions defined in JSON are loaded automatically and appear in `DimensionTypes.getAll()` alongside the vanilla ones. Because a void dimension has nothing in it, you should build a landing area before sending players there, and keep the destination chunks loaded with a ticking area while you do so.

<CodeHeader path="BP/scripts/main.js" />

```js
import { world, BlockPermutation } from "@minecraft/server";

const DIMENSION_ID = "wiki:void_arena";
const SPAWN = { x: 0, y: 64, z: 0 };

/** Places a small stone platform under the spawn point. */
async function buildPlatform() {
    const dimension = world.getDimension(DIMENSION_ID);

    await world.tickingAreaManager.createTickingArea("wiki:void_arena_setup", {
        dimension,
        from: { x: SPAWN.x - 6, y: SPAWN.y - 2, z: SPAWN.z - 6 },
        to: { x: SPAWN.x + 6, y: SPAWN.y + 2, z: SPAWN.z + 6 },
    });

    const stone = BlockPermutation.resolve("minecraft:stone");
    for (let x = -4; x <= 4; x++) {
        for (let z = -4; z <= 4; z++) {
            dimension
                .getBlock({ x: SPAWN.x + x, y: SPAWN.y - 1, z: SPAWN.z + z })
                ?.setPermutation(stone);
        }
    }

    world.tickingAreaManager.removeTickingArea("wiki:void_arena_setup");
}

world.afterEvents.worldLoad.subscribe(() => {
    buildPlatform();
});

world.afterEvents.itemUse.subscribe(({ source, itemStack }) => {
    if (itemStack.typeId !== "minecraft:compass") return;

    source.teleport(SPAWN, { dimension: world.getDimension(DIMENSION_ID) });
});
```

:::tip
Ticking areas created from script currently require the `beta` version of `@minecraft/server`. See the [Building with the Custom Dimension API](https://learn.microsoft.com/minecraft/creator/documents/scripting/custom-dimension-api-tutorial) tutorial on Microsoft Learn for a fuller example that also registers dimensions from script instead of JSON.
:::

