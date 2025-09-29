---
title: Rotatable Blocks
description: Learn how to create rotatable blocks.
category: Tutorials
license: true
mentions:
    - Ultr4Anubis
    - SmokeyStack
    - ihategravel2
    - MedicalJewel105
    - MajestikButter
    - QuazChick
---

::: tip FORMAT & MIN ENGINE VERSION `1.21.110`
This tutorial assumes a basic understanding of blocks, including [block states](/blocks/block-states) and [block traits](/blocks/block-traits).
Check out the [blocks guide](/blocks/blocks-intro) before starting.
:::

## Rotation Types

-   ### [Cardinal Direction](#cardinal-direction-rotation)

    -   Used by carved pumpkins and furnaces
    -   4 directions - 'north', 'south', 'east' and 'west'.

-   ### [Facing Direction](#facing-direction-rotation)

    -   Used by dispensers and observers
    -   6 directions - 'down', 'up', 'north', 'south', 'east' and 'west'.

-   ### [Block Face](#block-face-rotation)

    -   Used by ladders and item frames
    -   6 attachments - 'down', 'up', 'north', 'south', 'east' and 'west'.

-   ### [Log/Pillar Rotation](#log-rotation)

    -   Used by logs and basalt
    -   3 axis-aligned directions

-   ### [Precise Rotation](/blocks/precise-rotation)
    -   Used by skulls, signs and banners
    -   16 directions (22.5 degree multiples)
    -   4 cardinal side-attached directions

## Cardinal Direction Rotation

### Trait

To set the state which determines the block's direction, we will use the `minecraft:placement_direction` block trait with the `minecraft:cardinal_direction` state enabled.

<CodeHeader>minecraft:block</CodeHeader>

```json
"description": {
    "identifier": "wiki:cardinal_direction_example",
    // Block traits are defined here
    "traits": {
        "minecraft:placement_direction": {
            "enabled_states": ["minecraft:cardinal_direction"], // Can be used in queries e.g. `q.block_state('minecraft:cardinal_direction') == 'north'`
            "y_rotation_offset": 180 // Face towards player
        }
    }
}
```

### Permutations

Rotation makes use of block permutations. Each permutation contains the `minecraft:transformation` component, which allows for cardinal rotation by checking the `minecraft:cardinal_direction` state and applying an appropriate rotation.

**The below rotation values assume that the front of your model is facing north.**

<CodeHeader>minecraft:block</CodeHeader>

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

## Facing Direction Rotation

### Trait

To set the state which determines the block's direction, we will use the `minecraft:placement_direction` block trait with the `minecraft:facing_direction` state enabled.

<CodeHeader>minecraft:block</CodeHeader>

```json
"description": {
    "identifier": "wiki:facing_direction_example",
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

<CodeHeader>minecraft:block</CodeHeader>

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

## Block Face Rotation

### Trait

To set the state which determines the block's attachment, we will use the `minecraft:placement_position` block trait with the `minecraft:block_face` state enabled.

<CodeHeader>minecraft:block</CodeHeader>

```json
"description": {
    "identifier": "wiki:facing_direction_example",
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

<CodeHeader>minecraft:block</CodeHeader>

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

## Log Rotation

Block rotation identical to how vanilla logs rotate.

### Trait

To set the state which determines the block's attachment, we will use the `minecraft:placement_position` block trait with the `minecraft:block_face` state enabled.

The state contains more values than we need for log rotation, so some permutations will look identical.

<CodeHeader>minecraft:block</CodeHeader>

```json
"description": {
    "identifier": "wiki:log_rotation_example",
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

<CodeHeader>minecraft:block</CodeHeader>

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
