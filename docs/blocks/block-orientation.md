---
title: Block Orientation
description: Learn how to create blocks that can face different directions.
category: Tutorials
tags:
    - easy
outline_depth: 2
related:
    - /blocks/n-way-rotation
license: true
mentions:
    - Ultr4Anubis
    - SmokeyStack
    - ihategravel2
    - MedicalJewel105
    - MajestikButter
    - QuazChick
---

::: tip FORMAT VERSION 1.26.40
This tutorial assumes a basic understanding of blocks, including [block states](/blocks/block-states) and [block traits](/blocks/block-traits).
Check out the [blocks guide](/blocks/blocks-intro) before starting.
:::

## Types of Orientation

-   [Axis Alignment](#axis-alignment)

    -   Used by logs and basalt.
    -   3 axis-aligned orientations.

-   [Block Face Attachment](#block-face-attachment)

    -   Used by item frames and ladders.
    -   6 attachments: down, up, north, south, west and east.

-   [Cardinal Orientation](#cardinal-orientation)

    -   Used by carved pumpkins and furnaces.
    -   4 directions: north, south, west and east.

-   [Facing Orientation](#facing-orientation)

    -   Used by dispensers and observers.
    -   6 directions: down, up, north, south, west and east.

-   [Sixteen-Way Rotation](/blocks/n-way-rotation)

    -   Used by banners, conduits, mob heads and signs.
    -   16 directions (at 22.5 degree intervals)

## Axis Alignment

Block rotation identical to how vanilla logs rotate.

### Trait

To set the state which determines the block's attachment, we will use the `minecraft:placement_position` block trait with the `minecraft:block_face` state enabled.

The state contains more values than we need for log rotation, so some permutations will look identical.

<CodeHeader breadcrumbs="minecraft:block" />

```json
"description": {
    "identifier": "wiki:axis_alignment_example",
    // Block traits are defined here
    "traits": {
        "minecraft:placement_position": {
            "enabled_states": ["minecraft:block_face"] // Can be used in queries e.g. `q.block_state('minecraft:block_face') == 'north'`
        }
    }
}
```

### Permutations

Rotation makes use of block permutations. Each permutation contains the `minecraft:transformation` component, which allows for cardinal rotation by checking the `minecraft:block_face` state and applying an appropriate rotation.

<CodeHeader breadcrumbs="minecraft:block" />

```json
"permutations": [
    // X axis
    {
        "condition": "q.block_state('minecraft:block_face') == 'west' || q.block_state('minecraft:block_face') == 'east'",
        "components": {
            "minecraft:transformation": { "rotation": [0, 0, 90] }
        }
    },
    // Y axis
    {
        "condition": "q.block_state('minecraft:block_face') == 'down' || q.block_state('minecraft:block_face') == 'up'",
        "components": {
            "minecraft:transformation": { "rotation": [0, 0, 0] }
        }
    },
    // Z axis
    {
        "condition": "q.block_state('minecraft:block_face') == 'north' || q.block_state('minecraft:block_face') == 'south'",
        "components": {
            "minecraft:transformation": { "rotation": [90, 0, 0] }
        }
    }
]
```

## Block Face Attachment

### Trait

To set the state which determines the block's attachment, we will use the `minecraft:placement_position` block trait with the `minecraft:block_face` state enabled.

<CodeHeader breadcrumbs="minecraft:block" />

```json
"description": {
    "identifier": "wiki:face_attachment_example",
    // Block traits are defined here
    "traits": {
        "minecraft:placement_position": {
            "enabled_states": ["minecraft:block_face"] // Can be used in queries e.g. `q.block_state('minecraft:block_face') == 'north'`
        }
    }
}
```

### Permutations

Rotation makes use of block permutations. Each permutation contains the `minecraft:transformation` component, which allows for cardinal rotation by checking the `minecraft:block_face` state and applying an appropriate rotation.

**The below rotation values assume that the front of your model is facing north.**

<CodeHeader breadcrumbs="minecraft:block" />

```json
"permutations": [
    // Facing down
    {
        "condition": "q.block_state('minecraft:block_face') == 'down'",
        "components": {
            "minecraft:transformation": { "rotation": [-90, 0, 0] }
        }
    },
    // Facing up
    {
        "condition": "q.block_state('minecraft:block_face') == 'up'",
        "components": {
            "minecraft:transformation": { "rotation": [90, 0, 0] }
        }
    },
    // Facing north
    {
        "condition": "q.block_state('minecraft:block_face') == 'north'",
        "components": {
            "minecraft:transformation": { "rotation": [0, 0, 0] }
        }
    },
    // Facing west
    {
        "condition": "q.block_state('minecraft:block_face') == 'west'",
        "components": {
            "minecraft:transformation": { "rotation": [0, 90, 0] }
        }
    },
    // Facing south
    {
        "condition": "q.block_state('minecraft:block_face') == 'south'",
        "components": {
            "minecraft:transformation": { "rotation": [0, 180, 0] }
        }
    },
    // Facing east
    {
        "condition": "q.block_state('minecraft:block_face') == 'east'",
        "components": {
            "minecraft:transformation": { "rotation": [0, -90, 0] }
        }
    }
]
```

## Cardinal Orientation

### Trait

To set the state which determines the block's direction, we will use the `minecraft:placement_direction` block trait with the `minecraft:cardinal_direction` state enabled.

<CodeHeader breadcrumbs="minecraft:block" />

```json
"description": {
    "identifier": "wiki:cardinal_orientation_example",
    // Block traits are defined here
    "traits": {
        "minecraft:placement_direction": {
            "enabled_states": ["minecraft:cardinal_direction"], // Can be used in queries e.g. `q.block_state('minecraft:cardinal_direction') == 'north'`
            "y_rotation_offset": 180 // Face towards player
        }
    }
}
```

Next, you'll need to decide how you want to apply rotation to the block:

-   If the rotation only needs to be visual, [use N-way rotation](#n-way-rotation-method).
    -   This is useful when the collision and selections boxes of the block do not need to rotate with the geometry.
    -   Blocks like carved pumpkins and stonecutters could make use of this method.
    -   This method will result in simpler a block JSON file.
-   If the rotation needs to impact other components along with geometry, [use the transformation component](#rotation-transformation-method).
    -   Blocks like anvils should use this method so that their collision and selection boxes rotate to match the geometry.

### N-Way Rotation Method

Let's use the `n_way_visual_rotation` parameter of the [geometry](/blocks/block-components#geometry) component to apply rotation to the block's model based on this block state.

<CodeHeader breadcrumbs="minecraft:block/components" />

```json
"minecraft:geometry": {
    "identifier": "geometry.directional_block",
    "n_way_visual_rotation": {
        "y": "minecraft:cardinal_direction"
    }
}
```

That's it! Now your block will have cardinal orientation.

### Rotation Transformation Method

Rotation makes use of block permutations. Each permutation contains the `minecraft:transformation` component, which allows for cardinal rotation by checking the `minecraft:cardinal_direction` state and applying an appropriate rotation.

**The below rotation values assume that the front of your model is facing north.**

<CodeHeader breadcrumbs="minecraft:block" />

```json
"permutations": [
    // Facing north
    {
        "condition": "q.block_state('minecraft:cardinal_direction') == 'north'",
        "components": {
            "minecraft:transformation": { "rotation": [0, 0, 0] }
        }
    },
    // Facing west
    {
        "condition": "q.block_state('minecraft:cardinal_direction') == 'west'",
        "components": {
            "minecraft:transformation": { "rotation": [0, 90, 0] }
        }
    },
    // Facing south
    {
        "condition": "q.block_state('minecraft:cardinal_direction') == 'south'",
        "components": {
            "minecraft:transformation": { "rotation": [0, 180, 0] }
        }
    },
    // Facing east
    {
        "condition": "q.block_state('minecraft:cardinal_direction') == 'east'",
        "components": {
            "minecraft:transformation": { "rotation": [0, -90, 0] }
        }
    }
]
```

## Facing Orientation

### Trait

To set the state which determines the block's direction, we will use the `minecraft:placement_direction` block trait with the `minecraft:facing_direction` state enabled.

<CodeHeader breadcrumbs="minecraft:block" />

```json
"description": {
    "identifier": "wiki:facing_orientation_example",
    // Block traits are defined here
    "traits": {
        "minecraft:placement_direction": {
            "y_rotation_offset": 180,
            "enabled_states": ["minecraft:facing_direction"] // Can be used in queries e.g. `q.block_state('minecraft:facing_direction') == 'north'`
        }
    }
}
```

### Permutations

Rotation makes use of block permutations. Each permutation contains the `minecraft:transformation` component, which allows for cardinal rotation by checking the `minecraft:facing_direction` state and applying an appropriate rotation.

**The below rotation values assume that the front of your model is facing north.**

<CodeHeader breadcrumbs="minecraft:block" />

```json
"permutations": [
    // Facing down
    {
        "condition": "q.block_state('minecraft:facing_direction') == 'down'",
        "components": {
            "minecraft:transformation": { "rotation": [90, 0, 0] }
        }
    },
    // Facing up
    {
        "condition": "q.block_state('minecraft:facing_direction') == 'up'",
        "components": {
            "minecraft:transformation": { "rotation": [-90, 0, 0] }
        }
    },
    // Facing north
    {
        "condition": "q.block_state('minecraft:facing_direction') == 'north'",
        "components": {
            "minecraft:transformation": { "rotation": [0, 0, 0] }
        }
    },
    // Facing west
    {
        "condition": "q.block_state('minecraft:facing_direction') == 'west'",
        "components": {
            "minecraft:transformation": { "rotation": [0, 90, 0] }
        }
    },
    // Facing south
    {
        "condition": "q.block_state('minecraft:facing_direction') == 'south'",
        "components": {
            "minecraft:transformation": { "rotation": [0, 180, 0] }
        }
    },
    // Facing east
    {
        "condition": "q.block_state('minecraft:facing_direction') == 'east'",
        "components": {
            "minecraft:transformation": { "rotation": [0, -90, 0] }
        }
    }
]
```
