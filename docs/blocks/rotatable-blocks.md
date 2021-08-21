---
title: Rotatable Blocks
tags:
    - experimental
---

::: tip
This tutorial assumes you have a basic understanding of blocks and Blockbench.
Ensure to check out the [blocks guide](/blocks/blocks-intro) before starting this tutorial
:::

### The Model

Minecraft uses the default pivot points of [0,0,0]. This means that if your model consits of specific pivot points, your model will look detached in-game. In order to combat this, we can use the blockbench plugin called "Bedrock Pivot Fix 2". This will align your elements to the default pivot point without moving your elements.

### Permutations

Rotating blocks make use of the permutations that were intoduced in 1.16.100. The each permutation contains the `minecraft:rotation` component, and when the condition is true, it will rotate the block to that direction.

```json

"permutations": [
  {
      "condition": "query.block_property('wiki:rotation') == 1",
      "components": {
        "minecraft:rotation": [0, 0, 0]
        }
    },
    {
      "condition": "query.block_property('wiki:rotation') == 2",
      "components": {
        "minecraft:rotation": [0, 180, 0]
        }
    },
    {
      "condition": "query.block_property('wiki:rotation') == 3",
      "components": {
        "minecraft:rotation": [0, 90, 0]
        }
    },
    {
      "condition": "query.block_property('wiki:rotation') == 4",
      "components": {
        "minecraft:rotation": [0, 270, 0]
        }
      }
    ]
  }
}
```

### Events

In order to make the block rotate the way the player is facing, we have to use some simple molang to query which way the player is facing.

```json
},
"events": {
  "wiki:set_rotation": {
    "set_block_property": {
      "wiki:rotation": "(query.cardinal_facing_2d)"
      }
    }
  },
```

This event is called upon by using the `minecraft:on_player_placing` component.

```json
"minecraft:on_player_placing": {
  "event": "wiki:set_rotation"
  }
```

### The Block Code

```json
{
  "format_version": "1.16.100",
  "minecraft:block": {
    "description": {
      "identifier": "wiki:cabinet",
      "properties": {
        "wiki:rotation": [1, 2, 3, 4]
      }
    },
    "events": {
      "wiki:set_rotation": {
        "set_block_property": {
          "wiki:rotation": "(query.cardinal_facing_2d)"
         }
      }
    },
    "components": {
      "minecraft:material_instances": {
        "*": {
          "texture": "cabinet",
          "render_method": "alpha_test"
        }
      },
      "minecraft:pick_collision": {
        "origin": [-8, 0, -8],
        "size": [16, 16, 16]
      },
      "minecraft:entity_collision": {
        "origin": [-8, 0, -8],
        "size": [16, 16, 16]
      },
      "minecraft:geometry": "geometry.cabinet",
      "minecraft:block_light_absorption": 0,
      "minecraft:destroy_time": 3.0,
      "minecraft:on_player_placing": {
        "event": "wiki:set_rotation"
      }
    },
    "permutations": [
      {
        "condition": "query.block_property('wiki:rotation') == 1",
        "components": {
          "minecraft:rotation": [0, 0, 0]
        }
      },
      {
        "condition": "query.block_property('wiki:rotation') == 2",
        "components": {
          "minecraft:rotation": [0, 180, 0]
        }
      },
      {
        "condition": "query.block_property('wiki:rotation') == 3",
        "components": {
          "minecraft:rotation": [0, 90, 0]
        }
      },
      {
        "condition": "query.block_property('wiki:rotation') == 4",
        "components": {
          "minecraft:rotation": [0, 270, 0]
        }
      }
    ]
  }
}
```
