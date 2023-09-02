---
title: Custom Fluids
category: Vanilla Re-Creations
tags:
    - experimental
    - intermediate
    - scripting
mentions:
    - Provedule
    - JaylyDev
    - QuazChick
---

::: tip FORMAT VERSION `1.20.30`
This tutorial assumes an advanced understanding of blocks and the execute command.
Check out the [blocks guide](/blocks/blocks-intro) before starting.
:::

::: warning EXPERIMENTAL
Requires `Holiday Creator Features` for use of block tag Molang queries and to trigger block events.

Requires `Beta APIs` to use [@minecraft/server](https://learn.microsoft.com/minecraft/creator/scriptapi/minecraft/server/minecraft-server) module version `1.6.0-beta`.
:::

Creating fluids that are identical to vanilla fluids is not currently possible, but you can make something similar! This template/tutorial is designed to assist you in creating a custom "semi-fluid".

## Flow Logic

-   The fluid block has states defining whether it is a source and its depth.
-   If there is air beneath fluid blocks, it will be converted into falling fluid.
-   Fluids with a depth above `1` will spread horizontally with decreasing depths.
    -   This will not occur if there is falling fluid below.
-   Flowing fluid block must have another fluid block adjacent to survive.
-   Source blocks do not need to have other fluid blocks surrounding themselves.

**This implementation does not include face culling due to its current complexity.**

<WikiImage
  src="/assets/images/blocks/custom-fluids/fluid_display.png"
  alt=""
  pixelated="true"
  width=608
/>

## Source Fluid Block

Below is the code for a custom fluid. Copy and quick replace `custom_fluid` with your fluid's name. When the source block detects air in its surroundings, it replaces it with the outer fluid blocks. If the source block detects air beneath it, it will also place a falling fluid block underneath.

<BButton
    link="https://github.com/Bedrock-OSS/wiki-addon/blob/main/ma-custom_fluids/rp/models/blocks/fluid.geo.json"
    color=blue
>Download Custom Fluid Geometry</BButton>

<Spoiler title="Custom Fluid Block JSON">

<CodeHeader>BP/blocks/custom_fluid.json</CodeHeader>

```json
{
  "format_version": "1.20.30",
  "minecraft:block": {
    "description": {
      "identifier": "wiki:custom_fluid",
      "menu_category": {
        "category": "none"
      },
      "states": {
        "wiki:source": [true, false],
        // Depth of fluid - default to 4
        "wiki:depth": [4, 5, 3, 2, 1]
      }
    },
    "components": {
      "minecraft:light_dampening": 0,
      "minecraft:collision_box": false,
      "minecraft:selection_box": false,
      "minecraft:destructible_by_explosion": false,
      // Trigger fluid spread
      "minecraft:queued_ticking": {
        "looping": true,
        "interval_range": [20, 20], // Fluid speed in ticks
        "on_tick": {
          "event": "wiki:flow"
        }
      },
      "minecraft:material_instances": {
        "*": {
          "texture": "custom_fluid", // Shortname defined in `RP/textures/terrain_texture.json`
          "render_method": "blend",
          "ambient_occlusion": false,
          "face_dimming": false
        }
      },
      "minecraft:loot": "loot_tables/empty.json",
      "tag:custom_fluid": {}
    },
    "events": {
      "wiki:flow": {
        "sequence": [
          // Dry out
          {
            "condition": "!q.block_state('wiki:source') && ((q.block_state('wiki:depth') == 5 && !q.block_neighbor_has_any_tag(0, 1, 0, 'custom_fluid')) || (q.block_state('wiki:depth') == 1 && !(q.block_neighbor_has_any_tag(1, 0, 0, 'custom_fluid_2') || q.block_neighbor_has_any_tag(-1, 0, 0, 'custom_fluid_2') || q.block_neighbor_has_any_tag(0, 0, 1, 'custom_fluid_2') || q.block_neighbor_has_any_tag(0, 0, -1, 'custom_fluid_2')) || q.block_state('wiki:depth') == 2 && !(q.block_neighbor_has_any_tag(1, 0, 0, 'custom_fluid_3') || q.block_neighbor_has_any_tag(-1, 0, 0, 'custom_fluid_3') || q.block_neighbor_has_any_tag(0, 0, 1, 'custom_fluid_3') || q.block_neighbor_has_any_tag(0, 0, -1, 'custom_fluid_3'))) || (q.block_state('wiki:depth') == 3 && !(q.block_neighbor_has_any_tag(1, 0, 0, 'custom_fluid_4', 'custom_fluid_5') || q.block_neighbor_has_any_tag(-1, 0, 0, 'custom_fluid_4', 'custom_fluid_5') || q.block_neighbor_has_any_tag(0, 0, 1, 'custom_fluid_4', 'custom_fluid_5') || q.block_neighbor_has_any_tag(0, 0, -1, 'custom_fluid_4', 'custom_fluid_5'))))",
            "die": {}
          },
          // Spread
          {
            "condition": "q.block_state('wiki:depth') == 4",
            "run_command": {
              "command": [
                "execute if block ~~~1 air run setblock ~~~1 wiki:custom_fluid [\"wiki:source\"=false,\"wiki:depth\"=3]",
                "execute if block ~~~-1 air run setblock ~~~-1 wiki:custom_fluid [\"wiki:source\"=false,\"wiki:depth\"=3]",
                "execute if block ~1~~ air run setblock ~1~~ wiki:custom_fluid [\"wiki:source\"=false,\"wiki:depth\"=3]",
                "execute if block ~-1~~ air run setblock ~-1~~ wiki:custom_fluid [\"wiki:source\"=false,\"wiki:depth\"=3]"
              ]
            }
          },
          {
            "condition": "q.block_state('wiki:source') && q.block_neighbor_has_any_tag(0, 1, 0, 'custom_fluid')",
            "set_block_state": {
              "wiki:depth": 5
            }
          },
          {
            "condition": "q.block_state('wiki:source') && !q.block_neighbor_has_any_tag(0, 1, 0, 'custom_fluid')",
            "set_block_state": {
              "wiki:depth": 4
            }
          },
          {
            "condition": "q.block_state('wiki:depth') == 3",
            "run_command": {
              "command": [
                "execute if block ~~~1 air unless block ~~-1~ air unless block ~~-1~ wiki:custom_fluid run setblock ~~~1 wiki:custom_fluid [\"wiki:source\"=false,\"wiki:depth\"=2]",
                "execute if block ~~~-1 air unless block ~~-1~ air unless block ~~-1~ wiki:custom_fluid run setblock ~~~-1 wiki:custom_fluid [\"wiki:source\"=false,\"wiki:depth\"=2]",
                "execute if block ~1~~ air unless block ~~-1~ air unless block ~~-1~ wiki:custom_fluid run setblock ~1~~ wiki:custom_fluid [\"wiki:source\"=false,\"wiki:depth\"=2]",
                "execute if block ~-1~~ air unless block ~~-1~ air unless block ~~-1~ wiki:custom_fluid run setblock ~-1~~ wiki:custom_fluid [\"wiki:source\"=false,\"wiki:depth\"=2]"
              ]
            }
          },
          {
            "condition": "q.block_state('wiki:depth') == 2",
            "run_command": {
              "command": [
                "execute if block ~~~1 air unless block ~~-1~ air unless block ~~-1~ wiki:custom_fluid run setblock ~~~1 wiki:custom_fluid [\"wiki:source\"=false,\"wiki:depth\"=1]",
                "execute if block ~~~-1 air unless block ~~-1~ air unless block ~~-1~ wiki:custom_fluid run setblock ~~~-1 wiki:custom_fluid [\"wiki:source\"=false,\"wiki:depth\"=1]",
                "execute if block ~1~~ air unless block ~~-1~ air unless block ~~-1~ wiki:custom_fluid run setblock ~1~~ wiki:custom_fluid [\"wiki:source\"=false,\"wiki:depth\"=1]",
                "execute if block ~-1~~ air unless block ~~-1~ air unless block ~~-1~ wiki:custom_fluid run setblock ~-1~~ wiki:custom_fluid [\"wiki:source\"=false,\"wiki:depth\"=1]"
              ]
            }
          },
          {
            "condition": "q.block_state('wiki:depth') == 5 && q.block_neighbor_has_any_tag(0, 1, 0, 'custom_fluid')",
            "run_command": {
              "command": [
                "execute if block ~~-1~ wiki:custom_fluid [\"wiki:depth\"=3] run setblock ~~-1~ wiki:custom_fluid [\"wiki:source\"=false,\"wiki:depth\"=5]",
                "execute if block ~~-1~ wiki:custom_fluid [\"wiki:depth\"=2] run setblock ~~-1~ wiki:custom_fluid [\"wiki:source\"=false,\"wiki:depth\"=5]",
                "execute if block ~~-1~ wiki:custom_fluid [\"wiki:depth\"=1] run setblock ~~-1~ wiki:custom_fluid [\"wiki:source\"=false,\"wiki:depth\"=5]",
                "execute unless block ~~-1~ air unless block ~~-1~ wiki:custom_fluid if block ~1~~ air run setblock ~1~~ wiki:custom_fluid [\"wiki:source\"=false,\"wiki:depth\"=3]",
                "execute unless block ~~-1~ air unless block ~~-1~ wiki:custom_fluid if block ~~~1 air run setblock ~~~1 wiki:custom_fluid [\"wiki:source\"=false,\"wiki:depth\"=3]",
                "execute unless block ~~-1~ air unless block ~~-1~ wiki:custom_fluid if block ~-1~~ air run setblock ~-1~~ wiki:custom_fluid [\"wiki:source\"=false,\"wiki:depth\"=3]",
                "execute unless block ~~-1~ air unless block ~~-1~ wiki:custom_fluid if block ~~~-1 air run setblock ~~~-1 wiki:custom_fluid [\"wiki:source\"=false,\"wiki:depth\"=3]"
              ]
            }
          },
          // Fall
          {
            "run_command": {
              "command": "execute if block ~~-1~ air run setblock ~~-1~ wiki:custom_fluid [\"wiki:source\"=false,\"wiki:depth\"=5]"
            }
          },
          {
            "condition": "q.block_neighbor_has_any_tag(0, -1, 0, 'flowing_custom_fluid')",
            "run_command": {
              "command": "setblock ~~-1~ wiki:custom_fluid [\"wiki:source\"=false,\"wiki:depth\"=5]"
            }
          }
        ]
      },
      "wiki:pick_up": {
        "die": {},
        "decrement_stack": {},
        "run_command": {
          "command": "give @s lava_bucket",
          "target": "other"
        }
      }
    },
    "permutations": [
      {
        "condition": "q.block_state('wiki:source')",
        "components": {
          // Enables the block to be picked up by an item of choice
          "minecraft:selection_box": {
            "origin": [-7.5, 0.5, -7.5],
            "size": [15, 13, 15]
          },
          "tag:custom_fluid_source": {}
        }
      },
      {
        "condition": "!q.block_state('wiki:source')",
        "components": {
          "tag:flowing_custom_fluid": {}
        }
      },
      {
        "condition": "q.block_state('wiki:depth') == 5",
        "components": {
          "minecraft:geometry": "geometry.fluid.5",
          "tag:custom_fluid_5": {}
        }
      },
      {
        "condition": "q.block_state('wiki:depth') == 4",
        "components": {
          "minecraft:geometry": "geometry.fluid.4",
          "tag:custom_fluid_4": {}
        }
      },
      {
        "condition": "q.block_state('wiki:depth') == 3",
        "components": {
          "minecraft:geometry": "geometry.fluid.3",
          "tag:custom_fluid_3": {}
        }
      },
      {
        "condition": "q.block_state('wiki:depth') == 2",
        "components": {
          "minecraft:geometry": "geometry.fluid.2",
          "tag:custom_fluid_2": {}
        }
      },
      {
        "condition": "q.block_state('wiki:depth') == 1",
        "components": {
          "minecraft:geometry": "geometry.fluid.1",
          "tag:custom_fluid_1": {}
        }
      }
    ]
  }
}
```

</Spoiler>

## Fluid Bucket

To place your custom fluid you need a custom bucket item. Below is the JSON for the custom bucket. Replace any instance of `custom_fluid` with your fluid's name.

<Spoiler title="Custom Bucket Item JSON">

<CodeHeader>BP/items/custom_fluid_bucket.json</CodeHeader>

```json
{
  "format_version": "1.20.30",
  "minecraft:item": {
    "description": {
      "identifier": "wiki:custom_fluid_bucket",
      "menu_category": {
        "category": "items"
      }
    },
    "components": {
      "minecraft:max_stack_size": 1,
      "minecraft:icon": {
        "texture": "custom_fluid_bucket" // Shortname defined in `RP/textures/item_texture.json`
      },
      "minecraft:block_placer": {
        "block": "wiki:custom_fluid"
      }
    }
  }
}
```

</Spoiler>

## Scripts

The fluids use a script to add the ability for the player to float/sink in the fluid. The script also adds fog. To add your fluid to the script, put the ID of your new fluids in the `fluids` string array.

<CodeHeader>BP/manifest.json</CodeHeader>

```json
{
  "modules": [
    ...
    {
      "type": "script",
      "language": "javascript",
      "entry": "fluids.js",
      "uuid": ...,
      "version": [1, 0, 0]
    }
  ],
  "dependencies": [
    {
      "module_name": "@minecraft/server",
      "version": "1.6.0-beta"
    }
  ]
}
```

<Spoiler title="Fluid Movement & Fog Script">

<CodeHeader>BP/scripts/fluids.js</CodeHeader>

```javascript
import { system, world } from "@minecraft/server";

const fluids = ["wiki:custom_fluid"];

system.runInterval(() => {
  const players = world.getPlayers();

  for (const player of players) {
    // Fluid effects
    if (
      fluids.includes(world.getDimension(player.dimension.id).getBlock({ ...player.location, y: player.location.y + 1 }).typeId) ||
      fluids.includes(world.getDimension(player.dimension.id).getBlock(player.location).typeId)
    ) {
      player.addEffect("slowness", 3, { amplifier: 2, showParticles: false });
      player.addEffect("slow_falling", 4, { showParticles: false });
      if (player.isJumping) {
        player.addEffect("levitation", 3, { amplifier: 2, showParticles: false });
      }
    }
    // Fluid fog
    if (fluids.includes(world.getDimension(player.dimension.id).getBlock({ ...player.location, y: player.location.y + 1.63 }).typeId)) {
      player.runCommand("fog @s push wiki:custom_fluid_fog fluid_fog");
    } else {
      player.runCommand("fog @s remove fluid_fog");
    }
  }
});
```

</Spoiler>

## Result

By the end your BP folder should look like this:

<FolderView
  :paths="[
    'BP/blocks/custom_fluid.json',
    'BP/items/custom_fluid_bucket.json',
    'BP/scripts/fluids.js',
    'RP/fogs/custom_fluid.json'
  ]"
></FolderView>

## Download Example Pack

If anything goes wrong, or if you require all of the template files, they are available for download here. The pack includes everything necessary for a functional fluid.

<BButton
  link="https://github.com/Bedrock-OSS/wiki-addon/releases/download/download/custom_fluids.mcaddon"
  color=blue
>Download MCADDON</BButton>