---
title: Applying Constant Effects
category: Tutorials
tags:
    - easy
    - scripting
mentions:
    - MysticChair
    - SirLich
    - MedicalJewel105
    - QuazChick
    - SmokeyStack
---

::: tip FORMAT & MIN ENGINE VERSION `1.20.80`
This tutorial assumes a basic understanding of blocks, including [block states](/blocks/block-states).
Check out the [blocks guide](/blocks/blocks-intro) before starting.
:::

This tutorial aims to show how to apply status effects to entities as long as these entities stand on the block.

## Detecting Treaders

### Block JSON

We will need to add a couple things to our code, first let's start with a state that will hold `true` when stood on, and `false` otherwise:

<CodeHeader>minecraft:block > description</CodeHeader>

```json
"states": {
    "wiki:stood_on": [false, true]
}
```

Now we need to register our custom components to hook onto the [`stepOn`](/blocks/block-events#step-on) and [`stepOff`](/blocks/block-events#step-off) events:

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:custom_components": [
    "wiki:detect_treaders"
]
```

### Custom Component Script

<CodeHeader>BP/scripts/detect_treaders.js</CodeHeader>

```js
import { BlockPermutation, GameMode, Player, world } from "@minecraft/server";

/** @type {import("@minecraft/server").BlockCustomComponent} */
const DetectTreadersBlockComponent = {
    onStepOn({ entity, block }) {
        if (entity instanceof Player && entity.getGameMode() === GameMode.creative) return;

        block.setPermutation(
            BlockPermutation.resolve(block.typeId, {
                "wiki:stood_on": true,
            })
        );
    },
    onStepOff({ entity, block }) {
        if (entity instanceof Player && entity.getGameMode() === GameMode.creative) return;

        block.setPermutation(
            BlockPermutation.resolve(block.typeId, {
                "wiki:stood_on": false,
            })
        );
    },
};

world.beforeEvents.worldInitialize.subscribe(({ blockComponentRegistry }) => {
    blockComponentRegistry.registerCustomComponent(
        "wiki:detect_treaders",
        DetectTreadersBlockComponent
    );
});
```

## Applying Effects to Treaders

### Block JSON

We also need the block to tick in order to apply the desired effect every tick. For this, we'll use the [permutations](/blocks/block-permutations) array so a custom component is only applied if the block is being stepped on:

<CodeHeader>minecraft:block</CodeHeader>

```json
"permutations": [
    {
        "condition": "q.block_state('wiki:stood_on')",
        "components": {
            "minecraft:custom_components": ["wiki:detect_treaders", "wiki:wither_treaders"],
            "minecraft:tick": {
                "interval_range": [1, 1],
                "looping": true
            }
        }
    }
]
```

### Custom Component Script

Now, let's add our event that will give the entity the wither effect:

<CodeHeader>BP/scripts/wither_treaders.js</CodeHeader>

```js
import { Entity, GameMode, Player, world } from "@minecraft/server";

/** @type {import("@minecraft/server").BlockCustomComponent} */
const WitherTreadersBlockComponent = {
    onTick(event) {
        const entities = event.dimension.getEntitiesAtBlockLocation(event.block.above().location);

        entities.forEach((entity) => {
            entity.addEffect("minecraft:wither", 2, { amplifier: 2 });
        });
    },
};

world.beforeEvents.worldInitialize.subscribe(({ blockComponentRegistry }) => {
    blockComponentRegistry.registerCustomComponent(
        "wiki:wither_treaders",
        WitherTreadersBlockComponent
    );
});
```

And done! The code above will trigger the desired status effect as long as the entity is standing on a block.

## Example JSON

<Spoiler title="Example Wither Block">

<CodeHeader>BP/blocks/wither_block.json</CodeHeader>

```json
{
    "format_version": "1.20.80",
    "minecraft:block": {
        "description": {
            "identifier": "wiki:wither_block",
            "states": {
                "wiki:stood_on": [false, true]
            }
        },
        "components": {
            "minecraft:loot": "loot_tables/empty.json",
            "minecraft:map_color": "#181818",
            "minecraft:geometry": "geometry.wither_block",
            "minecraft:material_instances": {
                "*": {
                    "texture": "wither_block"
                }
            },
            "minecraft:custom_components": ["wiki:detect_treaders"]
        },
        "permutations": [
            {
                "condition": "q.block_state('wiki:stood_on')",
                "components": {
                    "minecraft:custom_components": ["wiki:detect_treaders", "wiki:wither_treaders"],
                    "minecraft:tick": {
                        "interval_range": [1, 1],
                        "looping": true
                    }
                }
            }
        ]
    }
}
```

</Spoiler>
