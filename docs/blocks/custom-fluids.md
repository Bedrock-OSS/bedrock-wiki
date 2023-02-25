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

Below is the `source fluid block` code. To replicate the json, copy and quick replace `template` with your fluid's name. When the source block detects air in its surroundings, it replaces it with the `outer fluid block 1`. If the source block detects air beneath it, it will also place a `falling fluid block` underneath.

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

## Outer Fluid Block 1

Below is the JSON for the `outer fluid block 1`. To replicate the json, copy and quick replace `template` with your fluid's name. This block has the same function as the source block but it can't be picked up and it places `outer fluid block 2` instead.

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

Below is the JSON for the `outer fluid block 2`. To replicate the json, copy and quick replace `template` with your fluid's name. This block has the same function as the `outer fluid block 2` but it places `outer fluid block 3` instead.

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

Below is the JSON for the `outer fluid block 3`. To replicate the json, copy and quick replace `template` with your fluid's name. This block solely places the falling fluid block. Moreover, all fluid blocks check for the existence of at least one fluid block from a higher tier next to them. If none is found, the block deletes itself.

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

Below is the JSON for the `falling fluid block`. To replicate the json, copy and quick replace `template` with your fluid's name. If this block detects air below it, it will place another `falling fluid block`. However, if it detects another block beneath it, it will behave like the `source fluid block`.

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

To pickup or place your custom fluid you need a custom bucket item. Although any item can pickup the fluid, your fluid can be customized to require this custom bucket. Below is the JSON for the custom bucket. To replicate the json, copy and quick replace `template` with your fluid's name.

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

## Scripts

The fluids use scripts to add the ability for the player to float/sink in the water. The scripts also add fog. To add your fluid to the script, put the ID of your new fluids in the `fluidsIDs` string array.

<CodeHeader>BH\blocks\fluid_template\fluid_template_down.json</CodeHeader>
<Spoiler title="Falling Fluid JSON">

```javascript
import * as mc from "@minecraft/server"

let fluidsIDs = [
"fluids:fluid_template",
"fluids:fluid_template_down",
"fluids:fluid_template1",
"fluids:fluid_template2",
"fluids:fluid_template3"
]

mc.world.events.tick.subscribe(() => {
    const players = Array.from(mc.world.getPlayers())
    for (let p = 0; p < players.length; p++) {
        for (let i = 0; i < fluidsIDs.length; i++) {
            if (mc.world.getDimension(players[p].dimension.id).getBlock(new mc.BlockLocation(Math.floor(players[p].location.x), Math.floor(players[p].location.y+1), Math.floor(players[p].location.z))).typeId == fluidsIDs[i]) {
                if (!players[p].isSneaking) {
                    players[p].addEffect(mc.MinecraftEffectTypes.levitation, 4, 1, false)
                }
                players[p].addEffect(mc.MinecraftEffectTypes.slowFalling, 4, 2, false)
            } else if (mc.world.getDimension(players[p].dimension.id).getBlock(new mc.BlockLocation(Math.floor(players[p].location.x), Math.floor(players[p].location.y), Math.floor(players[p].location.z))).typeId == fluidsIDs[i]) {
                players[p].addEffect(mc.MinecraftEffectTypes.slowFalling, 4, 2, false)
            }
        }
    }
    for (let p = 0; p < players.length; p++) {
        for (let i = 0; i < fluidsIDs.length; i++) {
            if (mc.world.getDimension(players[p].dimension.id).getBlock(new mc.BlockLocation(Math.floor(players[p].location.x), players[p].location.y+1.7, Math.floor(players[p].location.z))).typeId == fluidsIDs[i]) {
                players[p].runCommandAsync("fog @s push fluid:water_fog fluid_fog")
                break
            } else {
                players[p].runCommandAsync("fog @s remove fluid_fog")
            }
        }
    }
})
```

</Spoiler>

## Resources

To define the textures for the fluids you need to do there two thing:
1) Make a texture and in terrain textures copy/rename the "fluid_template" to "fluid_`your fluid name`"
2) Make a texture and in item textures copy/rename the "template_bucket" to "`your fluid name`_bucket"

## Download / Other

By the end your BH folder should look like this

<FolderView
	:paths="[
    'com.mojang/development_behavior_packs/blocks/fluid_template/fluid_template.json',
    'com.mojang/development_behavior_packs/blocks/fluid_template/fluid_template_down.json',
    'com.mojang/development_behavior_packs/blocks/fluid_template/fluid_template1.json',
    'com.mojang/development_behavior_packs/blocks/fluid_template/fluid_template2.json',
    'com.mojang/development_behavior_packs/blocks/fluid_template/fluid_template3.json',
    'com.mojang/development_behavior_packs/items/template_bucket',
    'com.mojang/development_behavior_packs/scripts/fluids/main.js',
    ]"
></FolderView>

(`fluid_template` or `template` can be replaced)

If anything goes wrong, or if you require all of the template files, they are available for download here. The file includes everything necessary for a functional fluid, as well as a `.txt` document that details how to create a new one.

<BButton
    link="/packs/tutorials/custom_fluids/MoreFluidsTemplate.zip" download
    color=blue
>Download Fluid Template</BButton>