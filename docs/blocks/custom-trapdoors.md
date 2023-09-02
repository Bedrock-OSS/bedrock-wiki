---
title: Custom Trapdoors
category: Vanilla Re-Creations
tags:
    - experimental
    - intermediate
mentions:
    - Kaioga5
    - QuazChick
---

::: tip FORMAT VERSION `1.20.30`
This tutorial assumes a good understanding of blocks.
Check out the [blocks guide](/blocks/blocks-intro) before starting.
:::

::: warning EXPERIMENTAL
Requires `Holiday Creator Features` to trigger block events.
:::

## Introduction

Making custom trapdoors is an often difficult task to do, but after reading this tutorial you'll understand how they work in case you find any drawbacks during recreating them, and you'll be provided with a template for you to use.

## Custom Trapdoor

This will create a vanilla-like custom trapdoor.

<CodeHeader>BP/blocks/custom_trapdoor.json</CodeHeader>

```json
{
  "format_version": "1.20.30",
  "minecraft:block": {
    "description": {
      "identifier": "wiki:custom_trapdoor",
      "menu_category": {
        "category": "construction",
        "group": "itemGroup.name.trapdoor"
      },
      "traits": {
        "minecraft:placement_position": {
          "enabled_states": ["minecraft:vertical_half"]
        },
        "minecraft:placement_direction": {
          "enabled_states": ["minecraft:cardinal_direction"]
        }
      },
      "states": {
        "wiki:open": [false, true]
      }
    },
    "permutations": [
      // Top Closed
      {
        "condition": "q.block_state('minecraft:vertical_half') == 'top' && q.block_state('minecraft:cardinal_direction') == 'north' && !q.block_state('wiki:open')",
        "components": {
          "minecraft:transformation": { "rotation": [0, 0, 180] }
        }
      },
      {
        "condition": "q.block_state('minecraft:vertical_half') == 'top' && q.block_state('minecraft:cardinal_direction') == 'south' && !q.block_state('wiki:open')",
        "components": {
          "minecraft:transformation": { "rotation": [180, 0, 0] }
        }
      },
      {
        "condition": "q.block_state('minecraft:vertical_half') == 'top' && q.block_state('minecraft:cardinal_direction') == 'east' && !q.block_state('wiki:open')",
        "components": {
          "minecraft:transformation": { "rotation": [180, -270, 0] }
        }
      },
      {
        "condition": "q.block_state('minecraft:vertical_half') == 'top' && q.block_state('minecraft:cardinal_direction') == 'west' && !q.block_state('wiki:open')",
        "components": {
          "minecraft:transformation": { "rotation": [180, 270, 0] }
        }
      },
      // Top Open
      {
        "condition": "q.block_state('minecraft:vertical_half') == 'top' && q.block_state('minecraft:cardinal_direction') == 'north' && q.block_state('wiki:open')",
        "components": {
          "minecraft:transformation": { "rotation": [-270, 0, 0] }
        }
      },
      {
        "condition": "q.block_state('minecraft:vertical_half') == 'top' && q.block_state('minecraft:cardinal_direction') == 'south' && q.block_state('wiki:open')",
        "components": {
          "minecraft:transformation": { "rotation": [270, 0, -180] }
        }
      },
      {
        "condition": "q.block_state('minecraft:vertical_half') == 'top' && q.block_state('minecraft:cardinal_direction') == 'east' && q.block_state('wiki:open')",
        "components": {
          "minecraft:transformation": { "rotation": [0, 270, 90] }
        }
      },
      {
        "condition": "q.block_state('minecraft:vertical_half') == 'top' && q.block_state('minecraft:cardinal_direction') == 'west' && q.block_state('wiki:open')",
        "components": {
          "minecraft:transformation": {
            "rotation": [180, -270, -270]
          }
        }
      },
      // Bottom Closed
      {
        "condition": "q.block_state('minecraft:vertical_half') == 'bottom' && q.block_state('minecraft:cardinal_direction') == 'north' && !q.block_state('wiki:open')",
        "components": {
          "minecraft:transformation": { "rotation": [0, 0, 0] }
        }
      },
      {
        "condition": "q.block_state('minecraft:vertical_half') == 'bottom' && q.block_state('minecraft:cardinal_direction') == 'south' && !q.block_state('wiki:open')",
        "components": {
          "minecraft:transformation": { "rotation": [0, 180, 0] }
        }
      },
      {
        "condition": "q.block_state('minecraft:vertical_half') == 'bottom' && q.block_state('minecraft:cardinal_direction') == 'east' && !q.block_state('wiki:open')",
        "components": {
          "minecraft:transformation": { "rotation": [0, 270, 0] }
        }
      },
      {
        "condition": "q.block_state('minecraft:vertical_half') == 'bottom' && q.block_state('minecraft:cardinal_direction') == 'west' && !q.block_state('wiki:open')",
        "components": {
          "minecraft:transformation": { "rotation": [0, -270, 0] }
        }
      },
      // Bottom Open
      {
        "condition": "q.block_state('minecraft:vertical_half') == 'bottom' && q.block_state('minecraft:cardinal_direction') == 'north' && q.block_state('wiki:open')",
        "components": {
          "minecraft:transformation": { "rotation": [90, 0, 180] }
        }
      },
      {
        "condition": "q.block_state('minecraft:vertical_half') == 'bottom' && q.block_state('minecraft:cardinal_direction') == 'south' && q.block_state('wiki:open')",
        "components": {
          "minecraft:transformation": { "rotation": [270, 0, 0] }
        }
      },
      {
        "condition": "q.block_state('minecraft:vertical_half') == 'bottom' && q.block_state('minecraft:cardinal_direction') == 'east' && q.block_state('wiki:open')",
        "components": {
          "minecraft:transformation": { "rotation": [0, -270, 90] }
        }
      },
      {
        "condition": "q.block_state('minecraft:vertical_half') == 'bottom' && q.block_state('minecraft:cardinal_direction') == 'west' && q.block_state('wiki:open')",
        "components": {
          "minecraft:transformation": { "rotation": [180, 270, -270] }
        }
      }
    ],
    "components": {
      "minecraft:collision_box": {
        "origin": [-8, 0, -8],
        "size": [16, 3, 16]
      },
      "minecraft:selection_box": {
        "origin": [-8, 0, -8],
        "size": [16, 3, 16]
      },
      "minecraft:geometry": "geometry.trapdoor",
      "minecraft:material_instances": {
        "*": {
          "texture": "spruce_trapdoor",
          "render_method": "alpha_test"
        }
      },
      "minecraft:on_interact": {
        "event": "wiki:toggle"
      }
    },
    "events": {
      "wiki:toggle": {
        "sequence": [
          {
            "set_block_state": {
              "wiki:open": "!q.block_state('wiki:open')"
            }
          },
          {
            "condition": "q.block_state('wiki:open')",
            "run_command": {
              "command": "playsound close.wooden_trapdoor @a ~~~ 0.9 0.9"
            }
          },
          {
            "condition": "!q.block_state('wiki:open')",
            "run_command": {
              "command": "playsound open.wooden_trapdoor @a ~~~ 0.9 0.9"
            }
          }
        ]
      }
    }
  }
}
```

## Geometry

This will be the geometry used for your custom trapdoors.

<Spoiler title="Geometry JSON">
  
<CodeHeader>RP/models/blocks/trapdoor.geo.json</CodeHeader>

```json
{
  "format_version": "1.12.0",
  "minecraft:geometry": [
    {
      "description": {
        "identifier": "geometry.trapdoor",
        "texture_width": 16,
        "texture_height": 16,
        "visible_bounds_width": 2,
        "visible_bounds_height": 1.5,
        "visible_bounds_offset": [0, 0.25, 0]
      },
      "bones": [
        {
          "name": "trapdoor",
          "pivot": [0, 0, 0],
          "cubes": [
            {
              "origin": [-8, 0, -8],
              "size": [16, 3, 16],
              "uv": {
                "north": {"uv": [16, 3], "uv_size": [-16, -3]},
                "east": {"uv": [16, 3], "uv_size": [-16, -3]},
                "south": {"uv": [16, 3], "uv_size": [-16, -3]},
                "west": {"uv": [16, 3], "uv_size": [-16, -3]},
                "up": {"uv": [16, 16], "uv_size": [-16, -16]},
                "down": {"uv": [0, 0], "uv_size": [16, 16]}
              }
            }
          ]
        }
      ]
    }
  ]
}
```

</Spoiler>

:::tip
Vanilla trapdoors have a few issues in the direction of the texture in certain faces and having a height of 2.95 when it should be 3. This block template and geometry fixes both of those issues.
:::
