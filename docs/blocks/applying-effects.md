---
title: Applying Effects
description: This tutorial aims to show how to apply status effects to entities that are within a certain radius of your block.
category: Tutorials
tags:
    - easy
    - scripting
license: true
mentions:
    - MysticChair
    - SirLich
    - MedicalJewel105
    - QuazChick
    - SmokeyStack
---

::: tip FORMAT & MIN ENGINE VERSION `1.21.110`
This tutorial assumes a basic understanding of blocks, including [block events](/blocks/block-events).
Check out the [blocks guide](/blocks/blocks-intro) before starting.
:::

This tutorial aims to show how to apply status effects to entities that are within a certain radius of your block.

## Block JSON

To match the vanilla Beacon block, our custom block should apply effects every 4 seconds.
This can be achieved by causing the block to "tick" every 80 ticks.

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:tick": {
    "interval_range": [80, 80], // The interval shouldn't be random, so we use the same value for the min and max.
    "looping": true
}
```

Next, we need to register our custom component to hook onto the [tick](/blocks/block-events#tick) event.
This component should apply effects to entities within a specified area, so we're going to call it `wiki:radial_effects`.

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"wiki:radial_effects": [
    {
        "radius": 64, // Apply the following effect to entities within this radius of blocks.
        "name": "wither",
        "duration": 600, // 30 seconds in ticks.
        "amplifier": 1
    },
    {
        "radius": 64,
        "name": "slowness",
        "duration": 600,
        "amplifier": 2
    }
]
```

## Custom Component Script

<CodeHeader>BP/scripts/radialEffects.js</CodeHeader>

```js
import { system } from "@minecraft/server";

/** @type {import("@minecraft/server").BlockCustomComponent} */
const BlockRadialEffectsComponent = {
    onTick({ block, dimension }, { params }) {
        const effects = params; // The value we have assigned to the component in the block JSON.

        // Iterates over each object in the array.
        for (const { radius, name, duration, amplifier } of effects) {
            // Gets all entities in the specified "radius" around the block.
            const entities = dimension.getEntities({
                location: block.center(),
                maxDistance: radius,
            });

            for (const entity of entities) {
                entity.addEffect(name, duration, { amplifier });
            }
        }
    },
};

system.beforeEvents.startup.subscribe(({ blockComponentRegistry }) => {
    blockComponentRegistry.registerCustomComponent(
        "wiki:radial_effects",
        BlockRadialEffectsComponent
    );
});
```

## Example JSON

<Spoiler title="Example Wither Block">

<CodeHeader>BP/blocks/wither_block.json</CodeHeader>

```json
{
    "format_version": "1.21.110",
    "minecraft:block": {
        "description": {
            "identifier": "wiki:wither_block",
            "menu_category": {
                "category": "items"
            }
        },
        "components": {
            "minecraft:geometry": "geometry.wither_block",
            "minecraft:material_instances": {
                "*": {
                    "texture": "wiki:wither_block"
                }
            },
            "minecraft:tick": {
                "interval_range": [80, 80],
                "looping": true
            },
            "wiki:radial_effects": [
                {
                    "radius": 64,
                    "name": "wither",
                    "duration": 600,
                    "amplifier": 1
                },
                {
                    "radius": 64,
                    "name": "slowness",
                    "duration": 600,
                    "amplifier": 2
                }
            ]
        }
    }
}
```

</Spoiler>
