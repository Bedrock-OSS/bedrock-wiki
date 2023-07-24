---
title: Custom Glass
category: Vanilla Re-Creations
tags:
    - experimental
    - expert
mention:
    - Eko-byte
    - QuazChick
---


Making glass blocks may seem like a simple task, however it comes with many drawbacks as you will find, this tutorial aims to help you achieve a vanilla like glass block.

By the end you should be able to create something like this!

![Glass Results](/assets/images/blocks/glass-block/glass_showcase.png)

## Basic Glass

::: tip FORMAT VERSION `1.20.10`
This example requires basic knowledge of blocks to understand.
Check out [block features](/blocks/blocks-stable) before starting.
:::

This will create a custom glass block which appears the same as vanilla glass blocks!

<CodeHeader>BP/blocks/custom_glass.json</CodeHeader>

```json
{
  "format_version": "1.20.10",
  "minecraft:block": {
    "description": {
      "identifier": "wiki:custom_glass",
      "menu_category": {
        "category": "contruction",
        "group": "itemGroup.name.glass"
      }
    },
    "components": {
      "minecraft:light_dampening": 0,
      "minecraft:material_instances": {
        "*": {
          "render_method": "blend" // Allows translucency
        }
      }
    }
  }
}
```

<CodeHeader>RP/blocks.json</CodeHeader>

```json
{
  "wiki:custom_glass": {
    "textures": "custom_glass", // Shortname defined in `RP/textures/terrain_texture.json`
    "sound": "glass"
  }
}
```

## Vertically-Connecting Glass

::: tip FORMAT VERSION `1.20.10`
This example requires advanced knowledge of blocks and Molang to understand.
Check out [block features](/blocks/blocks-stable) and [Molang](/concepts/molang) before starting.
:::

::: warning EXPERIMENTAL
Requires `Holiday Creator Features` for use of `minecraft:unit_cube` and to trigger events.
:::

<Spoiler title="Vertically-Connecting Glass JSON">

<CodeHeader>BP/blocks/custom_vertical_connecting_glass.json</CodeHeader>

```json
// Add a "nothing" texture in terrain_texture, and make it have a transparent file
{
  "format_version": "1.20.10",
  "minecraft:block": {
    "description": {
      "identifier": "wiki:custom_vertical_connecting_glass",
      "menu_category": {
        "category": "contruction",
        "group": "itemGroup.name.glass"
      },
      "properties": {
        // Properties needed for connected textures, also contols up and down culling
        "wiki:connected_state": [0, 1, 2, 3],
        // Properties to cull faces depending on surrounding blocks
        "wiki:cull_north": [false, true],
        "wiki:cull_south": [false, true],
        "wiki:cull_east": [false, true],
        "wiki:cull_west": [false, true]
      }
    },
    "components": {
      // Basic glass components
      "minecraft:destructible_by_mining": {
        "seconds_to_destroy": 1
      },
      "minecraft:queued_ticking": {
        "looping": true,
        "interval_range": [0, 0],
        "on_tick": {
          "event": "wiki:change_state"
        }
      },
      "minecraft:unit_cube": {},
      "minecraft:light_dampening": 0,
      // Tags used to give connected textures, and remove culling
      "tag:custom_vertical_connecting_glass": {},
      "tag:glass": {}
    },
    "permutations": [
      // These permutations control what textures are displayed at different situations
      // They also use tags to determine what state they are in, (top texture then top tag)
      {
        "condition": "q.block_property('wiki:connected_state') == 0 && !q.block_property('wiki:cull_north') && !q.block_property('wiki:cull_south') && !q.block_property('wiki:cull_east') && !q.block_property('wiki:cull_west')",
        "components": {
          "tag:default": {},
          "minecraft:material_instances": {
            "*": {
              "render_method": "blend",
              "texture": "custom_vertical_connecting_glass"
            },
            "up": {
              "render_method": "blend",
              "texture": "custom_vertical_connecting_glass_up"
            },
            "down": {
              "render_method": "blend",
              "texture": "custom_vertical_connecting_glass_up"
            }
          }
        }
      },
      {
        "condition": "q.block_property('wiki:connected_state') == 1 && !q.block_property('wiki:cull_north') && !q.block_property('wiki:cull_south') && !q.block_property('wiki:cull_east') && !q.block_property('wiki:cull_west')",
        "components": {
          "tag:top": {},
          "minecraft:material_instances": {
            "*": {
              "render_method": "blend",
              "texture": "custom_vertical_connecting_glass_top"
            },
            "up": {
              "render_method": "blend",
              "texture": "custom_vertical_connecting_glass_up"
            },
            "down": {
              "render_method": "blend",
              "texture": "nothing"
            }
          }
        }
      },
      {
        "condition": "q.block_property('wiki:connected_state') == 2 && !q.block_property('wiki:cull_north') && !q.block_property('wiki:cull_south') && !q.block_property('wiki:cull_east') && !q.block_property('wiki:cull_west')",
        "components": {
          "tag:bottom": {},
          "minecraft:material_instances": {
            "*": {
              "render_method": "blend",
              "texture": "custom_vertical_connecting_glass_bottom"
            },
            "up": {
              "render_method": "blend",
              "texture": "nothing"
            },
            "down": {
              "render_method": "blend",
              "texture": "custom_vertical_connecting_glass_up"
            }
          }
        }
      },
      {
        "condition": "q.block_property('wiki:connected_state') == 3 && !q.block_property('wiki:cull_north') && !q.block_property('wiki:cull_south') && !q.block_property('wiki:cull_east') && !q.block_property('wiki:cull_west')",
        "components": {
          "tag:middle": {},
          "minecraft:material_instances": {
            "*": {
              "render_method": "blend",
              "texture": "custom_vertical_connecting_glass_middle"
            },
            "up": {
              "render_method": "blend",
              "texture": "nothing"
            },
            "down": {
              "render_method": "blend",
              "texture": "nothing"
            }
          }
        }
      },
      {
        "condition": "q.block_property('wiki:cull_north') && q.block_property('wiki:connected_state') == 0",
        "components": {
          "tag:default": {},
          "minecraft:material_instances": {
            "*": {
              "texture": "custom_vertical_connecting_glass",
              "render_method": "blend"
            },
            "north": {
              "texture": "nothing",
              "render_method": "blend"
            },
            "up": {
              "render_method": "blend",
              "texture": "custom_vertical_connecting_glass_up"
            },
            "down": {
              "render_method": "blend",
              "texture": "custom_vertical_connecting_glass_up"
            }
          }
        }
      },
      {
        "condition": "q.block_property('wiki:cull_south') && q.block_property('wiki:connected_state') == 0",
        "components": {
          "tag:default": {},
          "minecraft:material_instances": {
            "*": {
              "texture": "custom_vertical_connecting_glass",
              "render_method": "blend"
            },
            "south": {
              "texture": "nothing",
              "render_method": "blend"
            },
            "up": {
              "render_method": "blend",
              "texture": "custom_vertical_connecting_glass_up"
            },
            "down": {
              "render_method": "blend",
              "texture": "custom_vertical_connecting_glass_up"
            }
          }
        }
      },
      {
        "condition": "q.block_property('wiki:cull_east') && q.block_property('wiki:connected_state') == 0",
        "components": {
          "tag:default": {},
          "minecraft:material_instances": {
            "*": {
              "texture": "custom_vertical_connecting_glass",
              "render_method": "blend"
            },
            "east": {
              "texture": "nothing",
              "render_method": "blend"
            },
            "up": {
              "render_method": "blend",
              "texture": "custom_vertical_connecting_glass_up"
            },
            "down": {
              "render_method": "blend",
              "texture": "custom_vertical_connecting_glass_up"
            }
          }
        }
      },
      {
        "condition": "q.block_property('wiki:cull_west') && q.block_property('wiki:connected_state') == 0",
        "components": {
          "tag:default": {},
          "minecraft:material_instances": {
            "*": {
              "texture": "custom_vertical_connecting_glass",
              "render_method": "blend"
            },
            "west": {
              "texture": "nothing",
              "render_method": "blend"
            },
            "up": {
              "render_method": "blend",
              "texture": "custom_vertical_connecting_glass_up"
            },
            "down": {
              "render_method": "blend",
              "texture": "custom_vertical_connecting_glass_up"
            }
          }
        }
      },
      {
        "condition": "q.block_property('wiki:cull_north') && q.block_property('wiki:connected_state') == 1",
        "components": {
          "tag:top": {},
          "minecraft:material_instances": {
            "*": {
              "texture": "custom_vertical_connecting_glass_top",
              "render_method": "blend"
            },
            "north": {
              "texture": "nothing",
              "render_method": "blend"
            },
            "up": {
              "render_method": "blend",
              "texture": "custom_vertical_connecting_glass_up"
            },
            "down": {
              "render_method": "blend",
              "texture": "nothing"
            }
          }
        }
      },
      {
        "condition": "q.block_property('wiki:cull_south') && q.block_property('wiki:connected_state') == 1",
        "components": {
          "tag:top": {},
          "minecraft:material_instances": {
            "*": {
              "texture": "custom_vertical_connecting_glass_top",
              "render_method": "blend"
            },
            "south": {
              "texture": "nothing",
              "render_method": "blend"
            },
            "up": {
              "render_method": "blend",
              "texture": "custom_vertical_connecting_glass_up"
            },
            "down": {
              "render_method": "blend",
              "texture": "nothing"
            }
          }
        }
      },
      {
        "condition": "q.block_property('wiki:cull_east') && q.block_property('wiki:connected_state') == 1",
        "components": {
          "tag:top": {},
          "minecraft:material_instances": {
            "*": {
              "texture": "custom_vertical_connecting_glass_top",
              "render_method": "blend"
            },
            "east": {
              "texture": "nothing",
              "render_method": "blend"
            },
            "up": {
              "render_method": "blend",
              "texture": "custom_vertical_connecting_glass_up"
            },
            "down": {
              "render_method": "blend",
              "texture": "nothing"
            }
          }
        }
      },
      //in this situation if there is a block to the west and it is the upper connected texture then it shall have the west side invisible and the sides be the upper connected part
      {
        "condition": "q.block_property('wiki:cull_west') && q.block_property('wiki:connected_state') == 1",
        "components": {
          "tag:top": {},
          "minecraft:material_instances": {
            "*": {
              "texture": "custom_vertical_connecting_glass_top",
              "render_method": "blend"
            },
            "west": {
              "texture": "nothing",
              "render_method": "blend"
            },
            "up": {
              "render_method": "blend",
              "texture": "custom_vertical_connecting_glass_up"
            },
            "down": {
              "render_method": "blend",
              "texture": "nothing"
            }
          }
        }
      },
      {
        "condition": "q.block_property('wiki:cull_north') && q.block_property('wiki:connected_state') == 2",
        "components": {
          "tag:bottom": {},
          "minecraft:material_instances": {
            "*": {
              "texture": "custom_vertical_connecting_glass_bottom",
              "render_method": "blend"
            },
            "north": {
              "texture": "nothing",
              "render_method": "blend"
            },
            "down": {
              "render_method": "blend",
              "texture": "custom_vertical_connecting_glass_up"
            },
            "up": {
              "render_method": "blend",
              "texture": "nothing"
            }
          }
        }
      },
      {
        "condition": "q.block_property('wiki:cull_south') && q.block_property('wiki:connected_state') == 2",
        "components": {
          "tag:bottom": {},
          "minecraft:material_instances": {
            "*": {
              "texture": "custom_vertical_connecting_glass_bottom",
              "render_method": "blend"
            },
            "south": {
              "texture": "nothing",
              "render_method": "blend"
            },
            "down": {
              "render_method": "blend",
              "texture": "custom_vertical_connecting_glass_up"
            },
            "up": {
              "render_method": "blend",
              "texture": "nothing"
            }
          }
        }
      },
      {
        "condition": "q.block_property('wiki:cull_east') && q.block_property('wiki:connected_state') == 2",
        "components": {
          "tag:bottom": {},
          "minecraft:material_instances": {
            "*": {
              "texture": "custom_vertical_connecting_glass_bottom",
              "render_method": "blend"
            },
            "east": {
              "texture": "nothing",
              "render_method": "blend"
            },
            "down": {
              "render_method": "blend",
              "texture": "custom_vertical_connecting_glass_up"
            },
            "up": {
              "render_method": "blend",
              "texture": "nothing"
            }
          }
        }
      },
      {
        "condition": "q.block_property('wiki:cull_west') && q.block_property('wiki:connected_state') == 2",
        "components": {
          "tag:bottom": {},
          "minecraft:material_instances": {
            "*": {
              "texture": "custom_vertical_connecting_glass_bottom",
              "render_method": "blend"
            },
            "west": {
              "texture": "nothing",
              "render_method": "blend"
            },
            "down": {
              "render_method": "blend",
              "texture": "custom_vertical_connecting_glass_up"
            },
            "up": {
              "render_method": "blend",
              "texture": "nothing"
            }
          }
        }
      },
      {
        "condition": "q.block_property('wiki:cull_north') && q.block_property('wiki:connected_state') == 3",
        "components": {
          "tag:middle": {},
          "minecraft:material_instances": {
            "*": {
              "texture": "custom_vertical_connecting_glass_middle",
              "render_method": "blend"
            },
            "north": {
              "texture": "nothing",
              "render_method": "blend"
            },
            "down": {
              "render_method": "blend",
              "texture": "nothing"
            },
            "up": {
              "render_method": "blend",
              "texture": "nothing"
            }
          }
        }
      },
      {
        "condition": "q.block_property('wiki:cull_south') && q.block_property('wiki:connected_state') == 3",
        "components": {
          "tag:middle": {},
          "minecraft:material_instances": {
            "*": {
              "texture": "custom_vertical_connecting_glass_middle",
              "render_method": "blend"
            },
            "south": {
              "texture": "nothing",
              "render_method": "blend"
            },
            "down": {
              "render_method": "blend",
              "texture": "nothing"
            },
            "up": {
              "render_method": "blend",
              "texture": "nothing"
            }
          }
        }
      },
      {
        "condition": "q.block_property('wiki:cull_east') && q.block_property('wiki:connected_state') == 3",
        "components": {
          "tag:middle": {},
          "minecraft:material_instances": {
            "*": {
              "texture": "custom_vertical_connecting_glass_middle",
              "render_method": "blend"
            },
            "east": {
              "texture": "nothing",
              "render_method": "blend"
            },
            "down": {
              "render_method": "blend",
              "texture": "nothing"
            },
            "up": {
              "render_method": "blend",
              "texture": "nothing"
            }
          }
        }
      },
      {
        "condition": "q.block_property('wiki:cull_west') && q.block_property('wiki:connected_state') == 3",
        "components": {
          "tag:middle": {},
          "minecraft:material_instances": {
            "*": {
              "texture": "custom_vertical_connecting_glass_middle",
              "render_method": "blend"
            },
            "west": {
              "texture": "nothing",
              "render_method": "blend"
            },
            "down": {
              "render_method": "blend",
              "texture": "nothing"
            },
            "up": {
              "render_method": "blend",
              "texture": "nothing"
            }
          }
        }
      }
    ],
    "events": {
      "wiki:change_state": {
        "sequence": [
          // Set the block to have no culling
          {
            "condition": "q.block_neighbor_has_any_tag(0,0,-1,'custom_vertical_connecting_glass')",
            "set_block_property": {
              "wiki:cull_north": "q.block_neighbor_has_any_tag(0,0,-1,'custom_vertical_connecting_glass')",
              "wiki:cull_south": "q.block_neighbor_has_any_tag(0,0,1,'custom_vertical_connecting_glass')",
              "wiki:cull_west": "q.block_neighbor_has_any_tag(-1,0,0,'custom_vertical_connecting_glass')",
              "wiki:cull_east": "q.block_neighbor_has_any_tag(1,0,0,'custom_vertical_connecting_glass')"
            }
          },
          // Control the custom texture state
          {
            "condition": "q.block_neighbor_has_any_tag(0,-1,0,'default')",
            "set_block_property": {
              "wiki:connected_state": 1
            }
          },
          {
            "condition": "q.block_neighbor_has_any_tag(0,1,0,'top') && !q.block_neighbor_has_any_tag(0,-1,0,'middle')",
            "set_block_property": {
              "wiki:connected_state": 2
            }
          },
          {
            "condition": "q.block_neighbor_has_any_tag(0,1,0,'top') && q.block_neighbor_has_any_tag(0,-1,0,'middle')",
            "set_block_property": {
              "wiki:connected_state": 3
            }
          },
          {
            "condition": "q.block_neighbor_has_any_tag(0,-1,0,'top')",
            "set_block_property": {
              "wiki:connected_state": 1
            }
          },
          {
            "condition": "q.block_neighbor_has_any_tag(0,-1,0,'bottom') && (q.block_neighbor_has_any_tag(0,1,0,'top') || q.block_neighbor_has_any_tag(0,1,0,'middle'))",
            "set_block_property": {
              "wiki:connected_state": 3
            }
          },
          {
            "condition": "!q.block_neighbor_has_any_tag(0,1,0,'top', 'default', 'middle', 'bottom') && q.block_neighbor_has_any_tag(0,-1,0,'middle', 'bottom')",
            "set_block_property": {
              "wiki:connected_state": 1
            }
          },
          {
            "condition": "!q.block_neighbor_has_any_tag(0,1,0,'top', 'default', 'middle', 'bottom') && !q.block_neighbor_has_any_tag(0,-1,0,'middle', 'bottom', 'top', 'default')",
            "set_block_property": {
              "wiki:connected_state": 0
            }
          },
          {
            "condition": "q.block_neighbor_has_any_tag(0,1,0,'top', 'middle', 'bottom') && !q.block_neighbor_has_any_tag(0,-1,0,'middle', 'bottom', 'top', 'default')",
            "set_block_property": {
              "wiki:connected_state": 2
            }
          },
          {
            "condition": "q.block_neighbor_has_any_tag(0,1,0,'default') && q.block_neighbor_has_any_tag(0,-1,0,'default')",
            "set_block_property": {
              "wiki:connected_state": 3
            }
          }
        ]
      }
    }
  }
}
```

</Spoiler>
