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
This tutorial assumes you have a basic understanding of blocks.
Check out the [blocks guide](/blocks/blocks-intro) before starting and ensure your block is using format versions `1.19.80`+.
:::

::: warning EXPERIMENTAL
Requires `Holiday Creator Features` to trigger events.
:::

## Rotation Types

- ### [Facing Rotation](#facing-rotation-setup)
  - Used by carved pumpkins
  - 4 cardinal directions

- ### [Log/Pillar Rotation](#log-rotation-setup)
  - Used by logs and basalt
  - 3 axis-aligned directions

- ### [Specific Rotation](/blocks/head-like-rotation)
  - Used by skulls, signs and banners
  - 16 directions (22.5 degree multiples)
  - 4 cardinal side-attached directions

## Facing Rotation Setup

### Permutations

Rotation makes use of block permutations. Each permutation contains the `minecraft:transformation` component, which allows for cardinal rotation.

The 2, 3, 4, and 5 values are used here because the query we'll be using in our event will return those numbers and we'll be storing them to our property.

```json
{
  "permutations": [
    // Facing north
    {
      "condition": "query.block_property('wiki:rotation') == 2",
      "components": {
        "minecraft:transformation": { "rotation": [0, 0, 0] }
      }
    },
    // Facing south
    {
      "condition": "query.block_property('wiki:rotation') == 3",
      "components": {
        "minecraft:transformation": { "rotation": [0, 180, 0] }
      }
    },
    // Facing west
    {
      "condition": "query.block_property('wiki:rotation') == 4",
      "components": {
        "minecraft:transformation": { "rotation": [0, 90, 0] }
      }
    },
    // Facing east
    {
      "condition": "query.block_property('wiki:rotation') == 5",
      "components": {
        "minecraft:transformation": { "rotation": [0, -90, 0] }
      }
    }
  ]
}
```

### Event

In order to make the block rotate with the player, we have to use molang to query which way the player is facing.

The code below sets the `wiki:rotation` property to the cardinal facing direction of the player.

```json
{
  "events": {
    "wiki:set_rotation": {
      "set_block_property": {
        "wiki:rotation": "query.cardinal_facing_2d"
      }
    }
  }
}
```

### Component

This event is triggered by using the `minecraft:on_player_placing` component to manipulate the block as it is placed.

```json
{
  "minecraft:on_player_placing": {
    "event": "wiki:set_rotation"
  }
}
```

## Facing Rotation Example

<CodeHeader>BP/blocks/cabinet.json</CodeHeader>

```json
{
  "format_version": "1.19.80",
  "minecraft:block": {
    "description": {
      "identifier": "wiki:cabinet",
      "properties": {
        "wiki:rotation": [2, 3, 4, 5]
      }
    },
    "components": {
      "minecraft:material_instances": {
        "*": {
          "texture": "cabinet"
        }
      },
      "minecraft:geometry": "geometry.cabinet",
      "minecraft:light_dampening": 0,
      "minecraft:on_player_placing": {
        "event": "wiki:set_rotation"
      }
    },
    "events": {
      "wiki:set_rotation": {
        "set_block_property": {
          "wiki:rotation": "query.cardinal_facing_2d"
        }
      }
    },
    "permutations": [
      // Facing north
      {
        "condition": "query.block_property('wiki:rotation') == 2",
        "components": {
          "minecraft:transformation": { "rotation": [0, 0, 0] }
        }
      },
      // Facing south
      {
        "condition": "query.block_property('wiki:rotation') == 3",
        "components": {
          "minecraft:transformation": { "rotation": [0, 180, 0] }
        }
      },
      // Facing west
      {
        "condition": "query.block_property('wiki:rotation') == 4",
        "components": {
          "minecraft:transformation": { "rotation": [0, 90, 0] }
        }
      },
      // Facing east
      {
        "condition": "query.block_property('wiki:rotation') == 5",
        "components": {
          "minecraft:transformation": { "rotation": [0, -90, 0] }
        }
      }
    ]
  }
}
```

## Log Rotation Setup

Block rotation identical to how vanilla logs rotate.

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
  "wiki:set_rotation": {
    "set_block_property": {
      "wiki:rotation": "Math.floor(query.block_face / 2)"
    }
  }
}
```

This event is called upon by using the `minecraft:on_player_placing` component.

```json
{
  "minecraft:on_player_placing": {
    "event": "wiki:set_rotation"
  }
}
```

### Block Property

```json
{
  "properties": {
    "wiki:rotation": [0, 1, 2]
  }
}
```

## Log Rotation Example

::: warning EXPERIMENTAL
This example also requires `Holiday Creator Features` to use `minecraft:unit_cube`.
:::

<CodeHeader>BP/blocks/custom_log.json</CodeHeader>

```json
{
  "format_version": "1.19.80",
  "minecraft:block": {
    "description": {
      "identifier": "wiki:custom_log",
      "properties": {
        "wiki:rotation": [0, 1, 2]
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
        "event": "wiki:set_rotation"
      }
    },
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
    ],
    "events": {
      "wiki:set_rotation": {
        "set_block_property": {
          "wiki:rotation": "Math.floor(query.block_face / 2)"
        }
      }
    }
  }
}
```
