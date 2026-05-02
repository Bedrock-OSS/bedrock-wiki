---
title: Compound Blocks
description: Compound blocks are made up of two blocks that are placed at the same position. This is the system that allows for waterlogging and snowlogging.
category: Documentation
tags:
    - intermediate
license: true
mentions:
    - QuazChick
---

## What Are Compound Blocks?

While each block location in the world is typically limited to only containing one block, there are some situations where a single location can contain two blocks instead.
This includes [waterlogging](#waterlogging) and [snowlogging](#snowlogging) functionality which allows water or snow to occupy the same space as another block.

To support this, each block location in the world is stored as two separate "layers" of blocks:

-   A **primary** block that represents the main block at the position.
    -   This is the block that can be interacted with and is the only block that can be accessed by most APIs.
-   An optional **secondary** (or "extra") block that can be used to store a second block at the same position.
    -   This block is generally inaccessible using APIs, excluding the block [placement filter](/blocks/block-components#placement-filter) which is able to detect it.

## Waterlogging

A block is waterlogged when it contains either a source or flowing block of water.

When a block is waterlogged:

-   The **primary** block remains unchanged.
    -   Unless the block has its own interaction functionality, an empty bucket can be used to pick up the contained water source when the block is selected.
-   The **secondary** block is water (either a source or flowing water).
    -   Items that are [liquid clipped](/items/item-components#liquid-clipped) can be used to interact with liquids that are on the secondary block layer.
    -   This allows blocks that can only be placed on water (such as lily pads) to be placed on waterlogged blocks.

### Creating Waterloggable Blocks

The [liquid detection](/blocks/block-components#liquid-detection) component can be used to allow a block to contain water.
By default, water is not able to flow through waterloggable blocks and will instead flow around.

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:liquid_detection": {
    "detection_rules": [
        {
            "liquid_type": "water",
            "can_contain_liquid": true
        }
    ]
}
```

### Allowing Water Flow

To allow a block to be waterlogged by flowing water, simply set the `on_liquid_touches` parameter to `"no_reaction"`{lang=json}.

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:liquid_detection": {
    "detection_rules": [
        {
            "liquid_type": "water",
            "can_contain_liquid": true,
            "on_liquid_touches": "no_reaction" // Allows water to flow through the block
        }
    ]
}
```

## Snowlogging

A block is snowlogged when it is submerged in snow.

When a block is snowlogged:

-   The **primary** block becomes the placed snow layer.
    -   This prevents the block that has been snowlogged from being interacted with without first destroying the snow.
    -   Despite the selection visually being the shape of the snow layer, the actual selectable region also includes the shape of the submerged block.
    -   Unlike snow layers that do not contain a submerged block, this snow layer will have a `covered_bit` state of `true`{lang=json}.
-   The **secondary** block is set to the previous primary block that was snowlogged.
    -   This prevents most APIs from detecting the block that has been snowlogged.
    -   This breaks any leads that are attached to a [leashable](/blocks/block-components#leashable) snowlogged block.
    -   Each time a block moves between the primary and secondary layers, the [`onPlace()`{lang=js}](/blocks/block-events#place) custom component hook is called.

### Creating Snowloggable Blocks

:::warning EXPERIMENTAL 1.26.30
Snowlogging for custom blocks requires the "Upcoming Creator Features" toggle to be enabled in order to function.
:::

The [precipitation interactions](/blocks/block-components#precipitation-interactions) component can be used to allow a block to be submerged in snow layers.
Note that snowloggable blocks cannot have a collision box as the secondary block layer does not support collision.

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:collision_box": false,
"minecraft:precipitation_interactions": {
    "precipitation_behavior": "snowlogging"
}
```
