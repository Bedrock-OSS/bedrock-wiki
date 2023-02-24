---
title: Custom Fluids
category: Tutorials
tags:
    - experimental
    - intermediate
    - guide
mention:
    - Provedule
---

:::warning
**Requires** a basic knowledge of blocks and commands, including permutations, events, properties, components, and the new execute command.
:::

Creating fluids that are identical to vanilla fluids is not currently possible, but it is possible to make something similar. This template/tutorial is designed to assist you in creating a custom semi-fluid.

## How Semi-fluids Work

Semi-fluids consist of five blocks: three blocks form the outer parts of the fluid, one block acts as the main source of the fluid, and the final block represents the falling part of the fluid. Additionally, execute commands are utilized to identify blocks and establish rules for the fluid flow. Throughout the remainder of this guide, semi-fluids will be referred to as fluids.

<WikiImage
	src="/assets/images/blocks/custom-fluids/fluidDisplay.png"
	alt="alternative text"
	pixelated="true"
	width=540
/>

## Source Fluid Block

Below is the source fluid block code. To replicate the json, copy and quick replace `template` with your fluid's name.

<CodeHeader>BH\blocks\fluid_template\fluid_template.json</CodeHeader>
<Spoiler title="Fluid Source JSON">

```json
{
  "format_version": "1.16.100",
  "minecraft:block": {
    "description": {
      "identifier": "fluids:fluid_template",
      "properties": {
        "fluids:x": [ 0, 1 ],
        "fluids:nx": [ 0, 1 ],
        "fluids:z": [ 0, 1 ],
        "fluids:nz": [ 0, 1 ],
        "fluids:top": [ 0, 1 ],
        "fluids:bottom": [ 0, 1 ]
      }
    },
    "components": {
      "minecraft:on_interact": { // enables the block to be picked up by a custom bucket
        "event": "fluids:pick_up", // can be removed if fluid doesn't need to be picked up
        "target": "other" // add "condition" to make the fluid be picked up by certain buckets/items
      },
      "minecraft:ticking": {
        "looping": true,
        "range": [ 0.2, 0.2 ],
        "on_tick": {
          "event": "fluids:flow"
        }
      },
      "minecraft:loot": "loot_tables/blocks/null.json",
      "minecraft:material_instances": {
        "*": {
          "texture": "fluid_template",
          "render_method": "blend"
        }
      },
      "minecraft:part_visibility": {
        "rules": {
          "x": "query.block_property('fluids:x') == 0",
          "nx": "query.block_property('fluids:nx') == 0",
          "z": "query.block_property('fluids:z') == 0",
          "nz": "query.block_property('fluids:nz') == 0",
          "top": "query.block_property('fluids:top') == 0",
          "bottom": "query.block_property('fluids:bottom') == 0"
        }
      },
      "tag:template": {},
      "tag:template_full": {},
      "tag:fluid": {},
      "minecraft:block_light_absorption": 0.0,
      "minecraft:geometry": "geometry.fluid",
      "minecraft:destroy_time": false,
      "minecraft:entity_collision": false,
      "minecraft:explosion_resistance": false,
      "minecraft:flammable": {
        "burn_odds": 0,
        "flame_odds": 0
      }
    },
    "events": {
      "fluids:flow": {
        "sequence": [
          {
            "run_command": {
              "target": "self",
              "command": [ "execute if block ~ ~-1 ~ air run setblock ~ ~-1 ~ fluids:fluid_template_down" ]
            }
          },
          {
            "run_command": {
              "target": "self",
              "command": [ "execute if block ~ ~ ~1 air unless block ~ ~-1 ~ fluids:fluid_template_down run setblock ~ ~ ~1 fluids:fluid_template1" ]
            }
          },
          {
            "run_command": {
              "target": "self",
              "command": [ "execute if block ~ ~ ~-1 air unless block ~ ~-1 ~ fluids:fluid_template_down run setblock ~ ~ ~-1 fluids:fluid_template1" ]
            }
          },
          {
            "run_command": {
              "target": "self",
              "command": [ "execute if block ~1 ~ ~ air unless block ~ ~-1 ~ fluids:fluid_template_down run setblock ~1 ~ ~ fluids:fluid_template1" ]
            }
          },
          {
            "run_command": {
              "target": "self",
              "command": [ "execute if block ~-1 ~ ~ air unless block ~ ~-1 ~ fluids:fluid_template_down run setblock ~-1 ~ ~ fluids:fluid_template1" ]
            }
          },

          {
            "condition": "query.block_neighbor_has_any_tag(0, 0, -1, 'template_full')",
            "set_block_property": {
              "fluids:nz": 1
            }
          },
          {
            "condition": "query.block_neighbor_has_any_tag(0, 0, 1, 'template_full')",
            "set_block_property": {
              "fluids:z": 1
            }
          },
          {
            "condition": "query.block_neighbor_has_any_tag(1, 0, 0, 'template_full')",
            "set_block_property": {
              "fluids:x": 1
            }
          },
          {
            "condition": "query.block_neighbor_has_any_tag(-1, 0, 0, 'template_full')",
            "set_block_property": {
              "fluids:nx": 1
            }
          },
          {
            "condition": "query.block_neighbor_has_any_tag(0, 1, 0, 'template_full')",
            "set_block_property": {
              "fluids:top": 1
            }
          },
          {
            "condition": "query.block_neighbor_has_any_tag(0, -1, 0, 'template_full')",
            "set_block_property": {
              "fluids:bottom": 1
            }
          },

          {
            "condition": "!query.block_neighbor_has_any_tag(0, 0, -1, 'template_full')",
            "set_block_property": {
              "fluids:nz": 0
            }
          },
          {
            "condition": "!query.block_neighbor_has_any_tag(0, 0, 1, 'template_full')",
            "set_block_property": {
              "fluids:z": 0
            }
          },
          {
            "condition": "!query.block_neighbor_has_any_tag(1, 0, 0, 'template_full')",
            "set_block_property": {
              "fluids:x": 0
            }
          },
          {
            "condition": "!query.block_neighbor_has_any_tag(-1, 0, 0, 'template_full')",
            "set_block_property": {
              "fluids:nx": 0
            }
          },
          {
            "condition": "!query.block_neighbor_has_any_tag(0, 1, 0, 'template_full')",
            "set_block_property": {
              "fluids:top": 0
            }
          },
          {
            "condition": "!query.block_neighbor_has_any_tag(0, -1, 0, 'template_full')",
            "set_block_property": {
              "fluids:bottom": 0
            }
          }
        ]
      },
      "fluids:pick_up": {
        "decrement_stack": {},
        "run_command": {
          "command": "give @p fluids:template_bucket"
        },
        "die": {}
      }
    }
  }
}
```

</Spoiler>

<FolderView
	:paths="[
    'com.mojang/development_behavior_packs/blocks/fluid_template/fluid_template.json',
    ]"
></FolderView>

## Outer Fluid Block 1

Below is the JSON for the outer fluid block 1. To replicate the json, copy and quick replace `template` with your fluid's name.

<CodeHeader>BH\blocks\fluid_template\fluid_template1.json</CodeHeader>
<Spoiler title="Outer Fluid 1 JSON">

```json
{
  "format_version": "1.16.100",
  "minecraft:block": {
    "description": {
      "identifier": "fluids:fluid_template1"
    },
    "components": {
      "minecraft:ticking": {
        "looping": true,
        "range": [ 0.2, 0.2 ],
        "on_tick": {
          "event": "fluids:flow"
        }
      },
      "minecraft:material_instances": {
        "*": {
          "texture": "fluid_template",
          "render_method": "blend"
        }
      },
      "minecraft:loot": "loot_tables/blocks/null.json",
      "minecraft:pick_collision": false,
      "tag:template1": {},
      "tag:template": {},
      "tag:fluid": {},
      "minecraft:block_light_absorption": 0.0,
      "minecraft:geometry": "geometry.fluid1",
      "minecraft:destroy_time": 100.0,
      "minecraft:entity_collision": false,
      "minecraft:explosion_resistance": false,
      "minecraft:flammable": {
        "burn_odds": 0,
        "flame_odds": 0
      }
    },
    "events": {
      "fluids:flow": {
        "sequence": [
          {
            "condition": "query.block_neighbor_has_any_tag(1, 0, 0, 'template_full') || query.block_neighbor_has_any_tag(0, 0, 1, 'template_full') || query.block_neighbor_has_any_tag(-1, 0, 0, 'template_full') || query.block_neighbor_has_any_tag(0, 0, -1, 'template_full')",
            "run_command": {
              "target": "self",
              "command": [ "execute if block ~ ~-1 ~ air run setblock ~ ~-1 ~ fluids:fluid_template_down" ]
            }
          },
          {
            "condition": "query.block_neighbor_has_any_tag(1, 0, 0, 'template_full') || query.block_neighbor_has_any_tag(0, 0, 1, 'template_full') || query.block_neighbor_has_any_tag(-1, 0, 0, 'template_full') || query.block_neighbor_has_any_tag(0, 0, -1, 'template_full')",
            "run_command": {
              "target": "self",
              "command": [ "execute if block ~ ~ ~1 air unless block ~ ~-1 ~ fluids:fluid_template_down run setblock ~ ~ ~1 fluids:fluid_template2" ]
            }
          },
          {
            "condition": "query.block_neighbor_has_any_tag(1, 0, 0, 'template_full') || query.block_neighbor_has_any_tag(0, 0, 1, 'template_full') || query.block_neighbor_has_any_tag(-1, 0, 0, 'template_full') || query.block_neighbor_has_any_tag(0, 0, -1, 'template_full')",
            "run_command": {
              "target": "self",
              "command": [ "execute if block ~ ~ ~-1 air unless block ~ ~-1 ~ fluids:fluid_template_down run setblock ~ ~ ~-1 fluids:fluid_template2" ]
            }
          },
          {
            "condition": "query.block_neighbor_has_any_tag(1, 0, 0, 'template_full') || query.block_neighbor_has_any_tag(0, 0, 1, 'template_full') || query.block_neighbor_has_any_tag(-1, 0, 0, 'template_full') || query.block_neighbor_has_any_tag(0, 0, -1, 'template_full')",
            "run_command": {
              "target": "self",
              "command": [ "execute if block ~1 ~ ~ air unless block ~ ~-1 ~ fluids:fluid_template_down run setblock ~1 ~ ~ fluids:fluid_template2" ]
            }
          },
          {
            "condition": "query.block_neighbor_has_any_tag(1, 0, 0, 'template_full') || query.block_neighbor_has_any_tag(0, 0, 1, 'template_full') || query.block_neighbor_has_any_tag(-1, 0, 0, 'template_full') || query.block_neighbor_has_any_tag(0, 0, -1, 'template_full')",
            "run_command": {
              "target": "self",
              "command": [ "execute if block ~-1 ~ ~ air unless block ~ ~-1 ~ fluids:fluid_template_down run setblock ~-1 ~ ~ fluids:fluid_template2" ]
            }
          },

          {
            "condition": "!query.block_neighbor_has_any_tag(1, 0, 0, 'template_full') && !query.block_neighbor_has_any_tag(0, 0, 1, 'template_full') && !query.block_neighbor_has_any_tag(-1, 0, 0, 'template_full') && !query.block_neighbor_has_any_tag(0, 0, -1, 'template_full')",
            "run_command": {
              "target": "self",
              "command": [ "setblock ~ ~ ~ air" ]
            }
          }
        ]
      }
    }
  }
}
```

</Spoiler>

## Outer Fluid Block 2

Below is the JSON for the outer fluid block 2. To replicate the json, copy and quick replace `template` with your fluid's name.

<CodeHeader>BH\blocks\fluid_template\fluid_template2.json</CodeHeader>
<Spoiler title="Outer Fluid 2 JSON">

```json
{
  "format_version": "1.16.100",
  "minecraft:block": {
    "description": {
      "identifier": "fluids:fluid_template2"
    },
    "components": {
      "minecraft:ticking": {
        "looping": true,
        "range": [ 0.2, 0.2 ],
        "on_tick": {
          "event": "fluids:flow"
        }
      },
      "minecraft:material_instances": {
        "*": {
          "texture": "fluid_template",
          "render_method": "blend"
        }
      },
      "minecraft:loot": "loot_tables/blocks/null.json",
      "minecraft:pick_collision": false,
      "tag:template": {},
      "tag:template2": {},
      "tag:fluid": {},
      "minecraft:block_light_absorption": 0.0,
      "minecraft:geometry": "geometry.fluid2",
      "minecraft:destroy_time": 100.0,
      "minecraft:entity_collision": false,
      "minecraft:explosion_resistance": false,
      "minecraft:flammable": {
        "burn_odds": 0,
        "flame_odds": 0
      }
    },
    "events": {
      "fluids:flow": {
        "sequence": [
          {
            "condition": "query.block_neighbor_has_any_tag(1, 0, 0, 'template1') || query.block_neighbor_has_any_tag(0, 0, 1, 'template1') || query.block_neighbor_has_any_tag(-1, 0, 0, 'template1') || query.block_neighbor_has_any_tag(0, 0, -1, 'template1')",
            "run_command": {
              "target": "self",
              "command": [ "execute if block ~ ~-1 ~ air run setblock ~ ~-1 ~ fluids:fluid_template_down" ]
            }
          },
          {
            "condition": "query.block_neighbor_has_any_tag(1, 0, 0, 'template1') || query.block_neighbor_has_any_tag(0, 0, 1, 'template1') || query.block_neighbor_has_any_tag(-1, 0, 0, 'template1') || query.block_neighbor_has_any_tag(0, 0, -1, 'template1')",
            "run_command": {
              "target": "self",
              "command": [ "execute if block ~ ~ ~1 air unless block ~ ~-1 ~ fluids:fluid_template_down run setblock ~ ~ ~1 fluids:fluid_template3" ]
            }
          },
          {
            "condition": "query.block_neighbor_has_any_tag(1, 0, 0, 'template1') || query.block_neighbor_has_any_tag(0, 0, 1, 'template1') || query.block_neighbor_has_any_tag(-1, 0, 0, 'template1') || query.block_neighbor_has_any_tag(0, 0, -1, 'template1')",
            "run_command": {
              "target": "self",
              "command": [ "execute if block ~ ~ ~-1 air unless block ~ ~-1 ~ fluids:fluid_template_down run setblock ~ ~ ~-1 fluids:fluid_template3" ]
            }
          },
          {
            "condition": "query.block_neighbor_has_any_tag(1, 0, 0, 'template1') || query.block_neighbor_has_any_tag(0, 0, 1, 'template1') || query.block_neighbor_has_any_tag(-1, 0, 0, 'template1') || query.block_neighbor_has_any_tag(0, 0, -1, 'template1')",
            "run_command": {
              "target": "self",
              "command": [ "execute if block ~1 ~ ~ air unless block ~ ~-1 ~ fluids:fluid_template_down run setblock ~1 ~ ~ fluids:fluid_template3" ]
            }
          },
          {
            "condition": "query.block_neighbor_has_any_tag(1, 0, 0, 'template1') || query.block_neighbor_has_any_tag(0, 0, 1, 'template1') || query.block_neighbor_has_any_tag(-1, 0, 0, 'template1') || query.block_neighbor_has_any_tag(0, 0, -1, 'template1')",
            "run_command": {
              "target": "self",
              "command": [ "execute if block ~-1 ~ ~ air unless block ~ ~-1 ~ fluids:fluid_template_down run setblock ~-1 ~ ~ fluids:fluid_template3" ]
            }
          },

          {
            "condition": "!query.block_neighbor_has_any_tag(1, 0, 0, 'template1') && !query.block_neighbor_has_any_tag(0, 0, 1, 'template1') && !query.block_neighbor_has_any_tag(-1, 0, 0, 'template1') && !query.block_neighbor_has_any_tag(0, 0, -1, 'template1')",
            "run_command": {
              "target": "self",
              "command": [ "setblock ~ ~ ~ air" ]
            }
          }
        ]
      }
    }
  }
}
```

</Spoiler>

## Outer Fluid Block 3

Below is the JSON for the outer fluid block 3. To replicate the json, copy and quick replace `template` with your fluid's name.

<CodeHeader>BH\blocks\fluid_template\fluid_template3.json</CodeHeader>
<Spoiler title="Outer Fluid 3 JSON">

```json
{
  "format_version": "1.16.100",
  "minecraft:block": {
    "description": {
      "identifier": "fluids:fluid_template3"
    },
    "components": {
      "minecraft:ticking": {
        "looping": true,
        "range": [ 0.2, 0.2 ],
        "on_tick": {
          "event": "fluids:flow"
        }
      },
      "minecraft:material_instances": {
        "*": {
          "texture": "fluid_template",
          "render_method": "blend"
        }
      },
      "minecraft:loot": "loot_tables/blocks/null.json",
      "minecraft:pick_collision": false,
      "tag:template3": {},
      "tag:template": {},
      "tag:fluid": {},
      "minecraft:block_light_absorption": 0.0,
      "minecraft:geometry": "geometry.fluid3",
      "minecraft:destroy_time": 100.0,
      "minecraft:entity_collision": false,
      "minecraft:explosion_resistance": false,
      "minecraft:flammable": {
        "burn_odds": 0,
        "flame_odds": 0
      }
    },
    "events": {
      "fluids:flow": {
        "sequence": [
          {
            "condition": "query.block_neighbor_has_any_tag(1, 0, 0, 'template2') || query.block_neighbor_has_any_tag(0, 0, 1, 'template2') || query.block_neighbor_has_any_tag(-1, 0, 0, 'template2') || query.block_neighbor_has_any_tag(0, 0, -1, 'template2')",
            "run_command": {
              "target": "self",
              "command": [ "execute if block ~ ~-1 ~ air run setblock ~ ~-1 ~ fluids:fluid_template_down" ]
            }
          },
          {
            "condition": "query.block_neighbor_has_any_tag(1, 0, 0, 'template2') || query.block_neighbor_has_any_tag(0, 0, 1, 'template2') || query.block_neighbor_has_any_tag(-1, 0, 0, 'template2') || query.block_neighbor_has_any_tag(0, 0, -1, 'template2')",
            "run_command": {
              "target": "self",
              "command": [ "execute if block ~ ~-1 ~ fluids:fluid_template1 run setblock ~ ~-1 ~ fluids:fluid_template_down" ]
            }
          },
          {
            "condition": "query.block_neighbor_has_any_tag(1, 0, 0, 'template2') || query.block_neighbor_has_any_tag(0, 0, 1, 'template2') || query.block_neighbor_has_any_tag(-1, 0, 0, 'template2') || query.block_neighbor_has_any_tag(0, 0, -1, 'template2')",
            "run_command": {
              "target": "self",
              "command": [ "execute if block ~ ~-1 ~ fluids:fluid_template2 run setblock ~ ~-1 ~ fluids:fluid_template_down" ]
            }
          },
          {
            "condition": "query.block_neighbor_has_any_tag(1, 0, 0, 'template2') || query.block_neighbor_has_any_tag(0, 0, 1, 'template2') || query.block_neighbor_has_any_tag(-1, 0, 0, 'template2') || query.block_neighbor_has_any_tag(0, 0, -1, 'template2')",
            "run_command": {
              "target": "self",
              "command": [ "execute if block ~ ~-1 ~ fluids:fluid_template3 run setblock ~ ~-1 ~ fluids:fluid_template_down" ]
            }
          },

          {
            "condition": "!query.block_neighbor_has_any_tag(1, 0, 0, 'template2') && !query.block_neighbor_has_any_tag(0, 0, 1, 'template2') && !query.block_neighbor_has_any_tag(-1, 0, 0, 'template2') && !query.block_neighbor_has_any_tag(0, 0, -1, 'template2')",
            "run_command": {
              "target": "self",
              "command": [ "setblock ~ ~ ~ air" ]
            }
          }
        ]
      }
    }
  }
}
```

</Spoiler>

## Falling Fluid Block

Below is the JSON for the falling fluid block. To replicate the json, copy and quick replace `template` with your fluid's name.

<CodeHeader>BH\blocks\fluid_template\fluid_template_down.json</CodeHeader>
<Spoiler title="Falling Fluid JSON">

```json
{
  "format_version": "1.16.100",
  "minecraft:block": {
    "description": {
      "identifier": "fluids:fluid_template3"
    },
    "components": {
      "minecraft:ticking": {
        "looping": true,
        "range": [ 0.2, 0.2 ],
        "on_tick": {
          "event": "fluids:flow"
        }
      },
      "minecraft:material_instances": {
        "*": {
          "texture": "fluid_template",
          "render_method": "blend"
        }
      },
      "minecraft:loot": "loot_tables/blocks/null.json",
      "minecraft:pick_collision": false,
      "tag:template3": {},
      "tag:template": {},
      "tag:fluid": {},
      "minecraft:block_light_absorption": 0.0,
      "minecraft:geometry": "geometry.fluid3",
      "minecraft:destroy_time": 100.0,
      "minecraft:entity_collision": false,
      "minecraft:explosion_resistance": false,
      "minecraft:flammable": {
        "burn_odds": 0,
        "flame_odds": 0
      }
    },
    "events": {
      "fluids:flow": {
        "sequence": [
          {
            "condition": "query.block_neighbor_has_any_tag(1, 0, 0, 'template2') || query.block_neighbor_has_any_tag(0, 0, 1, 'template2') || query.block_neighbor_has_any_tag(-1, 0, 0, 'template2') || query.block_neighbor_has_any_tag(0, 0, -1, 'template2')",
            "run_command": {
              "target": "self",
              "command": [ "execute if block ~ ~-1 ~ air run setblock ~ ~-1 ~ fluids:fluid_template_down" ]
            }
          },
          {
            "condition": "query.block_neighbor_has_any_tag(1, 0, 0, 'template2') || query.block_neighbor_has_any_tag(0, 0, 1, 'template2') || query.block_neighbor_has_any_tag(-1, 0, 0, 'template2') || query.block_neighbor_has_any_tag(0, 0, -1, 'template2')",
            "run_command": {
              "target": "self",
              "command": [ "execute if block ~ ~-1 ~ fluids:fluid_template1 run setblock ~ ~-1 ~ fluids:fluid_template_down" ]
            }
          },
          {
            "condition": "query.block_neighbor_has_any_tag(1, 0, 0, 'template2') || query.block_neighbor_has_any_tag(0, 0, 1, 'template2') || query.block_neighbor_has_any_tag(-1, 0, 0, 'template2') || query.block_neighbor_has_any_tag(0, 0, -1, 'template2')",
            "run_command": {
              "target": "self",
              "command": [ "execute if block ~ ~-1 ~ fluids:fluid_template2 run setblock ~ ~-1 ~ fluids:fluid_template_down" ]
            }
          },
          {
            "condition": "query.block_neighbor_has_any_tag(1, 0, 0, 'template2') || query.block_neighbor_has_any_tag(0, 0, 1, 'template2') || query.block_neighbor_has_any_tag(-1, 0, 0, 'template2') || query.block_neighbor_has_any_tag(0, 0, -1, 'template2')",
            "run_command": {
              "target": "self",
              "command": [ "execute if block ~ ~-1 ~ fluids:fluid_template3 run setblock ~ ~-1 ~ fluids:fluid_template_down" ]
            }
          },

          {
            "condition": "!query.block_neighbor_has_any_tag(1, 0, 0, 'template2') && !query.block_neighbor_has_any_tag(0, 0, 1, 'template2') && !query.block_neighbor_has_any_tag(-1, 0, 0, 'template2') && !query.block_neighbor_has_any_tag(0, 0, -1, 'template2')",
            "run_command": {
              "target": "self",
              "command": [ "setblock ~ ~ ~ air" ]
            }
          }
        ]
      }
    }
  }
}
```

</Spoiler>

## Fluid Bucket

To pickup or place your custom fluid you need a custom bucket item. Although any item can pickup the fluid, you fluid can be customized to require this custom bucket. Below is the JSON for the custom bucket. To replicate the json, copy and quick replace `template` with your fluid's name.

<CodeHeader>BH\items\template_bucket.json</CodeHeader>
<Spoiler title="Template Bucket JSON">

```json
{
  "format_version": "1.16.100",
  "minecraft:item": {
    "description": {
      "identifier": "fluids:template_bucket",
      "category": "items"
    },
    "components": {
      "minecraft:icon": {
        "texture": "template_bucket"
      },
      "minecraft:display_name": {
        "value": "Template Bucket"
      },
      "minecraft:max_stack_size": 1,
      "minecraft:block_placer": {
        "block": "fluids:fluid_template"
      }
    }
  }
}
```

</Spoiler>