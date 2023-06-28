---
title: Rotatable Blocks
category: Tutorials
tags:
    - experimental
mentions:
    - Ultr4Anubis
    - SmokeyStack
    - ihategravel2
    - MedicalJewel105
    - MajestikButter
    - QuazChick
---

::: tip
The following tutorials assume a basic understanding of blocks.
Check out the [blocks guide](/blocks/blocks-intro) before starting and ensure your block is using format versions `1.20.0`+.
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

-   ### [Specific Rotation](/blocks/head-like-rotation)
    -   Used by skulls, signs and banners
    -   16 directions (22.5 degree multiples)
    -   4 cardinal side-attached directions

## Cardinal Direction Rotation

::: warning EXPERIMENTAL
Requires `Upcoming Creator Features` to use block traits.
:::

### Trait

To set the state which determines the block's direction, we will use the `minecraft:placement_direction` block trait with the `minecraft:cardinal_direction` state enabled.

```json
{
  "description": {
    "identifier": "wiki:cardinal_direction_example",
    // Block traits are defined here
    "traits": {
      "minecraft:placement_direction": {
        "enabled_states": ["minecraft:cardinal_direction"], // Can be used in queries e.g. `q.block_property('minecraft:cardinal_direction') == 'north'`
        "y_rotation_offset": 180 // Face towards player
      }
    }
  }
}
```

### Permutations

Rotation makes use of block permutations. Each permutation contains the `minecraft:transformation` component, which allows for cardinal rotation by checking the `minecraft:cardinal_direction` state and applying an appropriate rotation.

**The below rotation values assume that the front of your model is facing north.**

```json
{
  "permutations": [
    // Facing north
    {
      "condition": "q.block_property('minecraft:cardinal_direction') == 'north'",
      "components": {
        "minecraft:transformation": { "rotation": [0, 0, 0] }
      }
    },
    // Facing west
    {
      "condition": "q.block_property('minecraft:cardinal_direction') == 'west'",
      "components": {
        "minecraft:transformation": { "rotation": [0, 90, 0] }
      }
    },
    // Facing south
    {
      "condition": "q.block_property('minecraft:cardinal_direction') == 'south'",
      "components": {
        "minecraft:transformation": { "rotation": [0, 180, 0] }
      }
    },
    // Facing east
    {
      "condition": "q.block_property('minecraft:cardinal_direction') == 'east'",
      "components": {
        "minecraft:transformation": { "rotation": [0, -90, 0] }
      }
    }
  ]
}
```

## Facing Direction Rotation

::: warning EXPERIMENTAL
Requires `Upcoming Creator Features` to use block traits.
:::

### Trait

To set the state which determines the block's direction, we will use the `minecraft:placement_direction` block trait with the `minecraft:facing_direction` state enabled.

```json
{
  "description": {
    "identifier": "wiki:facing_direction_example",
    // Block traits are defined here
    "traits": {
      "minecraft:placement_direction": {
        "enabled_states": ["minecraft:facing_direction"], // Can be used in queries e.g. `q.block_property('minecraft:facing_direction') == 'north'`
      }
    }
  }
}
```

### Permutations

Rotation makes use of block permutations. Each permutation contains the `minecraft:transformation` component, which allows for cardinal rotation by checking the `minecraft:facing_direction` state and applying an appropriate rotation.

**The below rotation values assume that the front of your model is facing north.**

```json
{
  "permutations": [
    // Facing up
    {
      "condition": "q.block_property('minecraft:facing_direction') == 'up'",
      "components": {
        "minecraft:transformation": { "rotation": [90, 0, 0] }
      }
    },
    // Facing down
    {
      "condition": "q.block_property('minecraft:facing_direction') == 'down'",
      "components": {
        "minecraft:transformation": { "rotation": [-90, 0, 0] }
      }
    },
    // Facing north
    {
      "condition": "q.block_property('minecraft:facing_direction') == 'north'",
      "components": {
        "minecraft:transformation": { "rotation": [0, 0, 0] }
      }
    },
    // Facing west
    {
      "condition": "q.block_property('minecraft:facing_direction') == 'west'",
      "components": {
        "minecraft:transformation": { "rotation": [0, 90, 0] }
      }
    },
    // Facing south
    {
      "condition": "q.block_property('minecraft:facing_direction') == 'south'",
      "components": {
        "minecraft:transformation": { "rotation": [0, 180, 0] }
      }
    },
    // Facing east
    {
      "condition": "q.block_property('minecraft:facing_direction') == 'east'",
      "components": {
        "minecraft:transformation": { "rotation": [0, -90, 0] }
      }
    }
  ]
}
```

## Block Face Rotation

::: warning EXPERIMENTAL
Requires `Upcoming Creator Features` to use block traits.
:::

### Trait

To set the state which determines the block's attachment, we will use the `minecraft:placement_position` block trait with the `minecraft:block_face` state enabled.

```json
{
  "description": {
    "identifier": "wiki:facing_direction_example",
    // Block traits are defined here
    "traits": {
      "minecraft:placement_position": {
        "enabled_states": ["minecraft:block_face"], // Can be used in queries e.g. `q.block_property('minecraft:block_face') == 'north'`
      }
    }
  }
}
```

### Permutations

Rotation makes use of block permutations. Each permutation contains the `minecraft:transformation` component, which allows for cardinal rotation by checking the `minecraft:block_face` state and applying an appropriate rotation.

**The below rotation values assume that the front of your model is facing north.**

```json
{
  "permutations": [
    // Facing up
    {
      "condition": "q.block_property('minecraft:facing_direction') == 'up'",
      "components": {
        "minecraft:transformation": { "rotation": [90, 0, 0] }
      }
    },
    // Facing down
    {
      "condition": "q.block_property('minecraft:facing_direction') == 'down'",
      "components": {
        "minecraft:transformation": { "rotation": [-90, 0, 0] }
      }
    },
    // Facing north
    {
      "condition": "q.block_property('minecraft:facing_direction') == 'north'",
      "components": {
        "minecraft:transformation": { "rotation": [0, 0, 0] }
      }
    },
    // Facing west
    {
      "condition": "q.block_property('minecraft:facing_direction') == 'west'",
      "components": {
        "minecraft:transformation": { "rotation": [0, 90, 0] }
      }
    },
    // Facing south
    {
      "condition": "q.block_property('minecraft:facing_direction') == 'south'",
      "components": {
        "minecraft:transformation": { "rotation": [0, 180, 0] }
      }
    },
    // Facing east
    {
      "condition": "q.block_property('minecraft:facing_direction') == 'east'",
      "components": {
        "minecraft:transformation": { "rotation": [0, -90, 0] }
      }
    }
  ]
}
```

## Log Rotation

Block rotation identical to how vanilla logs rotate.

::: warning EXPERIMENTAL
Requires `Holiday Creator Features` to trigger events.
:::

### Permutations

```json
"permutations": [
  {
    "condition": "query.block_property('wiki:rotation') == 0",
    "components": {
      "minecraft:transformation": { "rotation": [0, 0, 0] }
    }
  },
  {
    "condition": "query.block_property('wiki:rotation') == 1",
    "components": {
      "minecraft:transformation": { "rotation": [90, 0, 0] }
    }
  },
  {
    "condition": "query.block_property('wiki:rotation') == 2",
    "components": {
      "minecraft:transformation": { "rotation": [0, 0, 90] }
    }
  }
]
```

### Event

In order to make the block rotate the way a vanilla log would, we need to use a molang expression that uses a query to get what face of a block we're placing our block on and convert it to 0, 1, or 2.

```json
{
  "wiki:set_axis": {
    "set_block_property": {
      "wiki:axis": "Math.floor(query.block_face / 2)"
    }
  }
}
```

This event is called upon by using the `minecraft:on_player_placing` component.

```json
{
  "minecraft:on_player_placing": {
    "event": "wiki:set_axis"
  }
}
```

### Block Property

```json
{
  "properties": {
    "wiki:axis": [0, 1, 2]
  }
}
```

### Log Rotation Example

::: warning EXPERIMENTAL
This example also requires `Holiday Creator Features` to use `minecraft:unit_cube`.
:::

<Spoiler title="Basic Custom Log JSON">

<CodeHeader>BP/blocks/custom_log.json</CodeHeader>

```json
{
  "format_version": "1.20.0",
  "minecraft:block": {
    "description": {
      "identifier": "wiki:custom_log",
      "properties": {
        "wiki:axis": [0, 1, 2]
      }
    },
    "components": {
      "minecraft:destructible_by_mining": {
        "seconds_to_destroy": 1.5
      },
      "minecraft:destructible_by_explosion": {
        "explosion_resistance": 15
      },
      "minecraft:material_instances": {
        "*": {
          "texture": "log_side"
        },
        "end": {
          "texture": "log_top"
        },
        "up": "end",
        "down": "end"
      },
      "minecraft:unit_cube": {},
      "minecraft:on_player_placing": {
        "event": "wiki:set_axis"
      }
    },
    "permutations": [
      {
        "condition": "query.block_property('wiki:axis') == 0",
        "components": {
          "minecraft:transformation": { "rotation": [0, 0, 0] }
        }
      },
      {
        "condition": "query.block_property('wiki:axis') == 1",
        "components": {
          "minecraft:transformation": { "rotation": [90, 0, 0] }
        }
      },
      {
        "condition": "query.block_property('wiki:axis') == 2",
        "components": {
          "minecraft:transformation": { "rotation": [0, 0, 90] }
        }
      }
    ],
    "events": {
      "wiki:set_rotation": {
        "set_block_property": {
          "wiki:axis": "Math.floor(query.block_face / 2)"
        }
      }
    }
  }
}
```

</Spoiler>
