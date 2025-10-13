---
title: Block Culling
description: Block culling rules allow you to remove parts of a model based on the surrounding blocks.
category: Visuals
tags:
    - intermediate
license: true
mentions:
    - legopitstop
    - QuazChick
---

:::tip CREATE YOUR MODEL
Before you start, make sure you've [created a model](/blocks/block-models) for your block. Otherwise you'll have nothing to apply culling rules to!
:::

## Applying Culling Rules

Block culling rules allow you to remove parts of a model based on the surrounding blocks. This can help to improve the game's performance as resources aren't wasted on unnecessarily rendering hidden parts of your block.

Culling rules are added in your resource pack's `block_culling` folder and appear in the format shown below:

<CodeHeader>RP/block_culling/lamp.json</CodeHeader>

```json
{
    "format_version": "1.21.80",
    "minecraft:block_culling_rules": {
        "description": {
            "identifier": "wiki:culling.lamp" // Identifier to be referenced in block JSON geometry component.
        },
        "rules": [ ... ] // An array that can contain multiple culling rules.
    }
}
```

They are then applied to block models in your block's [`minecraft:geometry`](/blocks/block-components#geometry) component:

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:geometry": {
    "identifier": "geometry.lamp", // Model identifier
    "culling": "wiki:culling.lamp" // Block culling rules identifier
}
```

## Culling Entire Bones

This type of rule should be used if a bone is only visible from one direction, meaning the entire bone can be culled rather than individual cube faces.

<CodeHeader>minecraft:block_culling_rules > rules</CodeHeader>

```json
{
    "direction": "up", // This bone will be culled if there is a full, opaque block above the lamp.
    "geometry_part": {
        "bone": "lamp_bulb" // Name of the bone to be culled.
    }
}
```

## Culling Cube Faces

This type of rule should be used when you want to hide specific faces of cubes that are abutting full, opaque blocks.

<CodeHeader>minecraft:block_culling_rules > rules</CodeHeader>

```json
{
    "direction": "down", // This bone will be culled if there is a full, opaque block below the lamp.
    "geometry_part": {
        "bone": "lamp_base", // Name of the bone containing the cube to be culled.
        "cube": 0, // The zero-based index of the cube in the bone's "cubes" array.
        "face": "down" // The face of the cube to cull. This is usually the same as the rule's "direction" unless your cube is rotated.
    }
}
```

## Culling Conditions

Culling rules will cull against full, opaque faces of adjacent blocks by default.
However, they can also cull against other types of blocks based on the rule's `condition` parameter.

<CodeHeader>minecraft:block_culling_rules > rules</CodeHeader>

```json
{
    "cull_against_full_and_opaque": true, // Cull against a full, opaque block.
    "condition": "same_block", // Cull against a block with the same identifier.
    "direction": "down",
    "geometry_part": {
        "bone": "lamp_bulb" // Name of the bone containing the cube to be culled.
    }
}
```

### Same Block

When the `same_block` condition is used, the specified geometry part is also culled if the adjacent block has the same identifier as the block.

### Same Block Permutation

When the `same_block_permutation` condition is used, the specified geometry part is also culled if the adjacent block has the same identifier and state values as the block.

### Same Culling Layer

When the `same_culling_layer` condition is used, the specified geometry part is also culled if the adjacent block has the same `culling_layer` identifier as the block.
