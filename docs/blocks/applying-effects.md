---
title: Applying Constant Effects
category: Tutorials
tags:
    - easy
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

## Setup

We will need to add a couple things to our code, first let's start with a state that will hold `true` when stood on, and `false` otherwise:

<CodeHeader>minecraft:block > description</CodeHeader>

```json
{
    "states": {
        "wiki:stood_on": [ false, true ]
    }
}
```

Now we need the `minecraft:tick` component that will check if our property is set to `true` and if so, trigger the event causing the effect to apply:

<CodeHeader>minecraft:block > components</CodeHeader>

```json
{
    "minecraft:tick": {
        "interval_range": [1, 1],
    }
}
```

Now we need to register our custom components to hook onto the events:

<CodeHeader>minecraft:block > components</CodeHeader>

```json
{
    "minecraft:custom_components": [
        "wiki:applying_effects_step_on",
        "wiki:applying_effects_step_off"
    ]
}
```

We also need a custom component for the tick event. For this, we'll create a permutation so the custom component is only applied if the block is being stepped on:

<CodeHeader>minecraft:block</CodeHeader>

```json
{
    "permutations": [
        {
            "components": {
                "minecraft:tick": {
                    "interval_range": [1, 1]
                },
                "minecraft:custom_components": ["wiki:applying_effects_tick"]
            },
            "condition": "q.block_state('wiki:stood_on')"
        }
    ]
}
```

Time to setup our `events`. First, let's define the `step_on` and `step_off` events:

<CodeHeader>BP/scripts/applying-effects.js</CodeHeader>

```ts
import {
    BlockComponentStepOffEvent,
    BlockComponentStepOnEvent,
    BlockComponentTickEvent,
    BlockPermutation,
    Entity,
    GameMode,
    Player,
    world
} from '@minecraft/server';

const applyingEffectsStepOn = {
    onStepOn(event: BlockComponentStepOnEvent) {
        if (event.entity.typeId === 'minecraft:player') {
            let source = event.entity as Player;
            if (source.getGameMode() === GameMode.creative) return;
        }

        event.block.setPermutation(
            BlockPermutation.resolve(event.block.typeId, {
                'wiki:stood_on': true
            })
        );
    }
};

const applyingEffectsStepOff = {
    onStepOff(event: BlockComponentStepOffEvent) {
        if (event.entity.typeId === 'minecraft:player') {
            let source = event.entity as Player;
            if (source.getGameMode() === GameMode.creative) return;
        }

        event.block.setPermutation(
            BlockPermutation.resolve(event.block.typeId, {
                'wiki:stood_on': false
            })
        );
    }
};

world.beforeEvents.worldInitialize.subscribe(({ blockTypeRegistry }) => {
    blockTypeRegistry.registerCustomComponent(
        'wiki:applying_effects_step_on',
        applyingEffectsStepOn
    );
});

world.beforeEvents.worldInitialize.subscribe(({ blockTypeRegistry }) => {
    blockTypeRegistry.registerCustomComponent(
        'wiki:applying_effects_step_off',
        applyingEffectsStepOff
    );
});
```

Now, let's add our event that will give the entity the wither effect:

<CodeHeader>BP/scripts/applying-effects.js</CodeHeader>

```js
import {
    BlockComponentStepOffEvent,
    BlockComponentStepOnEvent,
    BlockComponentTickEvent,
    BlockPermutation,
    Entity,
    GameMode,
    Player,
    world
} from '@minecraft/server';

const applyingEffectsTick = {
    onTick(event: BlockComponentTickEvent) {
        let entities: Entity[] = event.dimension.getEntitiesAtBlockLocation(
            event.block.above().location
        );

        entities.forEach((entity) => {
            entity.addEffect('minecraft:wither', 2, { amplifier: 2 });
        });
    }
};

world.beforeEvents.worldInitialize.subscribe(({ blockTypeRegistry }) => {
    blockTypeRegistry.registerCustomComponent(
        'wiki:applying_effects_tick',
        applyingEffectsTick
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
        "components": {
            "minecraft:geometry": "geometry.wither_block",
            "minecraft:loot": "loot_tables/empty.json",
            "minecraft:map_color": "#181818",
            "minecraft:material_instances": {
                "*": {
                    "texture": "wither_block"
                }
            },
            "minecraft:custom_components": [
                "wiki:applying_effects_step_on",
                "wiki:applying_effects_step_off"
            ]
        },
        "description": {
            "identifier": "custom_namespace:custom_block_2",
            "states": {
                "wiki:stood_on": [false, true]
            }
        },
        "permutations": [
            {
                "components": {
                    "minecraft:tick": {
                        "interval_range": [1, 1]
                    },
                    "minecraft:custom_components": ["wiki:applying_effects_tick"]
                },
                "condition": "q.block_state('wiki:stood_on')"
            }
        ]
    }
}
```

</Spoiler>