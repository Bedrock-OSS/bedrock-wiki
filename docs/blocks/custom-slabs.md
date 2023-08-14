---
title: Custom Slabs
category: Vanilla Re-Creations
tags:
    - experimental
    - easy
mentions:
    - Kaioga5
    - QuazChick
---

::: tip FORMAT VERSION `1.20.20`
This tutorial assumes a basic understanding of blocks.
Check out the [blocks guide](/blocks/blocks-intro) before starting.
:::

::: warning EXPERIMENTAL
Requires `Holiday Creator Features` to trigger block events.
:::

## Introduction
Making custom slabs is a simple task, but if you find any drawbacks during recreating slabs, this tutorial will help you with it, and you'll be provided with a template for you to use.

## Custom Slab
This will create a vanilla-like custom slab.

<CodeHeader>BP/blocks/custom_slab.json</CodeHeader>

```json
{
  "format_version": "1.20.20",
  "minecraft:block": {
    "description": {
      "identifier": "wiki:custom_slab",
      "menu_category": {
        "category": "construction",
        "group": "itemGroup.name.slab"
      },
      "traits": {
        "minecraft:placement_position": {
          "enabled_states": ["minecraft:vertical_half"]
        }
      },
      "states": {
        "wiki:double": [false, true]
      }
    },
    "permutations": [
      // Bottom Slab
      {
        "condition": "q.block_state('minecraft:vertical_half') == 'bottom' && !q.block_state('wiki:double')",
        "components": {
          "minecraft:collision_box": {
            "origin": [-8, 0, -8],
            "size": [16, 8, 16]
          },
          "minecraft:selection_box": {
            "origin": [-8, 0, -8],
            "size": [16, 8, 16]
          },
          "minecraft:on_interact": {
            "event": "wiki:form_double",
            "condition": "q.block_face == 1.0 && q.is_item_name_any('slot.weapon.mainhand', 'wiki:custom_slab')"
          }
        }
      },
      // Top Slab
      {
        "condition": "q.block_state('minecraft:vertical_half') == 'top' && !q.block_state('wiki:double')",
        "components": {
          "minecraft:collision_box": {
            "origin": [-8, 8, -8],
            "size": [16, 8, 16]
          },
          "minecraft:selection_box": {
            "origin": [-8, 8, -8],
            "size": [16, 8, 16]
          },
          "minecraft:on_interact": {
            "event": "wiki:form_double",
            "condition": "q.block_face == 0.0 && q.is_item_name_any('slot.weapon.mainhand', 'wiki:custom_slab')"
          }
        }
      },
      // Double Slab
      {
        "condition": "q.block_state('wiki:double')",
        "components": {
          "minecraft:unit_cube": {},
          "minecraft:on_player_destroyed": {
            "event": "wiki:destroy_double"
          }
        }
      }
    ],
    "components": {
      "minecraft:destructible_by_mining": {
        "seconds_to_destroy": 7
      },
      "minecraft:destructible_by_explosion": {
        "explosion_resistance": 6
      },
      "minecraft:geometry": {
        "identifier": "geometry.slab",
        "bone_visibility": {
          "bottom_slab": "q.block_state('minecraft:vertical_half') == 'bottom'",
          "top_slab": "q.block_state('minecraft:vertical_half') == 'top'"
        }
      },
      "minecraft:material_instances": {
        "*": {
          "texture": "stone"
        }
      }
    },
    "events": {
      "wiki:form_double": {
        "set_block_state": {
          "wiki:double": true
        },
        "run_command": {
          "command": "playsound use.stone @a ~~~ 1 0.8"
        },
        "decrement_stack": {}
      },
      "wiki:destroy_double": {
        "spawn_loot": {} // Spawns the block's default loot
      }
    }
  }
}
```

## Geometry
This will be the geometry used for your custom slabs.

<Spoiler title="Geometry JSON">
  
<CodeHeader>RP/models/blocks/slab.geo.json</CodeHeader>

```json
{
  "format_version": "1.12.0",
  "minecraft:geometry": [
    {
      "description": {
        "identifier": "geometry.slab",
        "texture_width": 16,
        "texture_height": 16,
        "visible_bounds_width": 2,
        "visible_bounds_height": 2.5,
        "visible_bounds_offset": [0, 0.75, 0]
      },
      "bones": [
        {
          "name": "top_slab",
          "pivot": [0, 0, 0],
          "cubes": [
            {
              "origin": [-8, 8, -8],
              "size": [16, 8, 16],
              "uv": {
                "north": {"uv": [0, 0], "uv_size": [16, 8]},
                "east": {"uv": [0, 0], "uv_size": [16, 8]},
                "south": {"uv": [0, 0], "uv_size": [16, 8]},
                "west": {"uv": [0, 0], "uv_size": [16, 8]},
                "up": {"uv": [16, 16], "uv_size": [-16, -16]},
                "down": {"uv": [16, 16], "uv_size": [-16, -16]}
              }
            }
          ]
        },
        {
          "name": "bottom_slab",
          "pivot": [0, 0, 0],
          "cubes": [
            {
              "origin": [-8, 0, -8],
              "size": [16, 8, 16],
              "uv": {
                "north": {"uv": [0, 8], "uv_size": [16, 8]},
                "east": {"uv": [0, 8], "uv_size": [16, 8]},
                "south": {"uv": [0, 8], "uv_size": [16, 8]},
                "west": {"uv": [0, 8], "uv_size": [16, 8]},
                "up": {"uv": [16, 16], "uv_size": [-16, -16]},
                "down": {"uv": [16, 16], "uv_size": [-16, -16]}
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
