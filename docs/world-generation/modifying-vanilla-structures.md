---
title: Modifying Vanilla Structures
description: How to modify vanilla structures such as the Trail Ruins.
category: Tutorials
license: true
mentions:
    - Supernova3695
---

::: tip FORMAT VERSION 1.21.20
This tutorial assumes a understanding of jigsaw stuctures and their related files work.
:::
:::warning Only Trail Ruins can be fully modified. Trial Chambers have limited customizability :::

## Introduction
With the introduction of the jigsaw system in Preview 1.21.50.26 and its stabilization in 1.21.120 we have been able to modify Trail Ruins and to a more limited extent, Trial Chambers. Trail Ruins have publicly accessible code however Trial Chambers do not. You can also add new structures to their structure sets, entirely replace the structure, or just outright remove it short of it's identifier which will still exist.

## Modifying Trail Ruins
You are able to modify the vanilla structure pieces that make up the Trail Ruins. However the game stores the vanilla structure files as NBT data making them not editable by us. But you can replace them. You can also add new pieces to them. All you need to do is set the pieces up.

### Adding pieces
To add pieces is simple. Find the generating jigsaw that places pieces of the structure that you want your new piece to be a part of and then find the target name field of that jigsaw block and set the name field of the jigsaw block in your structure to be that field. For example if you were adding a new large room set the name field to `minecraft:building_anchor`. Or if you wanted a new road you would have two jigsaw blocks with all 3 fields filled. You would set the first jigsaw block to have name as `minecraft:road_out`, target pool as `minecraft:trail_ruins/roads`, and target name as `minecraft:road_in`. The other jigsaw would have name as `minecraft:road_in`, target pool as `minecraft:trail_ruins/roads`, and target name as `minecraft:road_out`. Then after that you would save your new structure piece.

After you have saved the structure piece upload it to the trail_ruins subfolder of the structures folder and then from there nest it in other subfolders. In vanilla the folder is setup as trail_ruins/buildings, trail_ruins/decor, trail_ruins/roads, and trail_ruins/tower. Next is adding it to the template pool.

#### Template Pool
After the piece or pieces are in their folders you can add them to the structure using it's template pools. In order to do this you need to download the vanilla trail ruins files which can be found at the bottom of this page. Then you can find the template pool which has the identfier that the jigsaw was looking for and then add your element to the list. You can also remove other elements to prevent them from spawning.

### Replacing pieces
In order to replace pieces you can go and edit the template pools for the Trail Ruins and remove the piece you want to replace. You can then rebuild the piece how you like and add the vanilla jigsaw block settings to that piece and add it to the structure to make it generate. Do be advised that depending on the size of the piece it may not generate due to the space needed for it to spawn not being present where that piece is placed in the structure.

### Editing Processors
Editing the processor is simple. Just take the file and add more processors to it that you would like. You can also empty the `"processors": []` array and no changes will be made to structures with that piece applied even if you have modified nothing else in the structure. 

### Other files
The structure set and configuration file are both editable however the changes between editing them and editing other structures in minor. You can blank the `"structures": []` array in the structure set and the trail ruins will never spawn again. You can also increase the `max_depth` in the config file and the structure will spawn larger. 

## Vanilla Code

### Trail Ruins

#### Configuration
<CodeHeader>BP/worldgen/structures/trail_ruins.json</CodeHeader>

```json
{
  "format_version": "1.21.20",
  "minecraft:jigsaw": {
    "description": {
      "identifier": "minecraft:trail_ruins"
    },
    "biome_filters": [
      {
        "test": "has_biome_tag",
        "operator": "==",
        "value": "has_structure_trail_ruins"
      }
    ],
    "step": "underground_structures",
    "terrain_adaptation": "bury",
    "start_pool": "minecraft:trail_ruins/tower",
    "max_depth": 7,
    "max_distance_from_center": {
      "horizontal": 80,
      "vertical": 80
    },
    "start_height": {
      "type": "constant",
      "value": {
        "absolute": -15
      }
    },
    "heightmap_projection": "world_surface"
  }
}
```
#### Structure Set
<CodeHeader>BP/worldgen/structure_sets/trail_ruins.json</CodeHeader>

```json
{
  "format_version": "1.21.20",
  "minecraft:structure_set": {
    "description": {
      "identifier": "minecraft:trail_ruins"
    },
    "placement": {
      "type": "minecraft:random_spread",
      "salt": 83469867,
      "separation": 8,
      "spacing": 34,
      "spread_type": "linear"
    },
    "structures": [
      {
        "structure": "minecraft:trail_ruins",
        "weight": 1
      }
    ]
  }
}
```
#### Processors
<CodeHeader>BP/worldgen/processors/trail_ruins_houses_archaeology.json</CodeHeader>

```json
{
  "format_version": "1.21.20",
  "minecraft:processor_list": {
    "description": {
      "identifier": "minecraft:trail_ruins_houses_archaeology"
    },
    "processors": [
      {
        "processor_type": "minecraft:rule",
        "rules": [
          {
            "input_predicate": {
              "predicate_type": "minecraft:random_block_match",
              "block": "minecraft:gravel",
              "probability": 0.2
            },
            "output_state": {
              "name": "minecraft:dirt"
            }
          },
          {
            "input_predicate": {
              "predicate_type": "minecraft:random_block_match",
              "block": "minecraft:gravel",
              "probability": 0.1
            },
            "output_state": {
              "name": "minecraft:dirt",
              "states": {
                "dirt_type": "coarse"
              }
            }
          },
          {
            "input_predicate": {
              "predicate_type": "minecraft:random_block_match",
              "block": "minecraft:mud_bricks",
              "probability": 0.1
            },
            "output_state": {
              "name": "minecraft:packed_mud"
            }
          }
        ]
      },
      {
        "delegate": {
          "processor_type": "minecraft:rule",
          "rules": [
            {
              "block_entity_modifier": {
                "type": "minecraft:append_loot",
                "loot_table": "loot_tables/entities/trail_ruins_brushable_block_common.json"
              },
              "input_predicate": {
                "predicate_type": "minecraft:block_match",
                "block": "minecraft:gravel"
              },
              "output_state": {
                "name": "minecraft:suspicious_gravel"
              }
            }
          ]
        },
        "limit": 6,
        "processor_type": "minecraft:capped"
      },
      {
        "delegate": {
          "processor_type": "minecraft:rule",
          "rules": [
            {
              "block_entity_modifier": {
                "type": "minecraft:append_loot",
                "loot_table": "loot_tables/entities/trail_ruins_brushable_block_rare.json"
              },
              "input_predicate": {
                "predicate_type": "minecraft:block_match",
                "block": "minecraft:gravel"
              },
              "output_state": {
                "name": "minecraft:suspicious_gravel"
              }
            }
          ]
        },
        "limit": 3,
        "processor_type": "minecraft:capped"
      }
    ]
  }
}
```
<CodeHeader>BP/worldgen/processors/trail_ruins_roads_archaeology.json</CodeHeader>

```json
{
  "format_version": "1.21.20",
  "minecraft:processor_list": {
    "description": {
      "identifier": "minecraft:trail_ruins_roads_archaeology"
    },
    "processors": [
      {
        "processor_type": "minecraft:rule",
        "rules": [
          {
            "input_predicate": {
              "predicate_type": "minecraft:random_block_match",
              "block": "minecraft:gravel",
              "probability": 0.2
            },
            "output_state": {
              "name": "minecraft:dirt"
            }
          },
          {
            "input_predicate": {
              "predicate_type": "minecraft:random_block_match",
              "block": "minecraft:gravel",
              "probability": 0.1
            },
            "output_state": {
              "name": "minecraft:gravel"
            }
          },
          {
            "input_predicate": {
              "predicate_type": "minecraft:random_block_match",
              "block": "minecraft:mud_bricks",
              "probability": 0.1
            },
            "output_state": {
              "name": "minecraft:packed_mud"
            }
          }
        ]
      },
      {
        "processor_type": "minecraft:capped",
        "limit": 2,
        "delegate": {
          "processor_type": "minecraft:rule",
          "rules": [
            {
              "input_predicate": {
                "predicate_type": "minecraft:block_match",
                "block": "minecraft:gravel"
              },
              "output_state": {
                "name": "minecraft:suspicious_gravel"
              },
              "block_entity_modifier": {
                "type": "minecraft:append_loot",
                "loot_table": "loot_tables/entities/trail_ruins_brushable_block_common.json"
              }
            }
          ]
        }
      }
    ]
  }
}
```
<CodeHeader>BP/worldgen/processors/trail_ruins_tower_top_archaeology.json</CodeHeader>

```json
{
  "format_version": "1.21.20",
  "minecraft:processor_list": {
    "description": {
      "identifier": "minecraft:trail_ruins_tower_top_archaeology"
    },
    "processors": [
      {
        "processor_type": "minecraft:capped",
        "limit": 2,
        "delegate": {
          "processor_type": "minecraft:rule",
          "rules": [
            {
              "input_predicate": {
                "predicate_type": "minecraft:block_match",
                "block": "minecraft:gravel"
              },
              "output_state": {
                "name": "minecraft:suspicious_gravel"
              },
              "block_entity_modifier": {
                "type": "minecraft:append_loot",
                "loot_table": "loot_tables/entities/trail_ruins_brushable_block_common.json"
              }
            }
          ]
        }
      }
    ]
  }
}
```
#### Template Pools
<CodeHeader>BP/worldgen/template_pools/trail_ruins/buildings.json</CodeHeader>

```json
{
  "format_version": "1.21.20",
  "minecraft:template_pool": {
    "description": {
      "identifier": "minecraft:trail_ruins/buildings"
    },
    "elements": [
      {
        "element": {
          "element_type": "minecraft:single_pool_element",
          "location": "trail_ruins/buildings/group_hall_1",
          "processors": "minecraft:trail_ruins_houses_archaeology"
        },
        "weight": 1
      },
      {
        "element": {
          "element_type": "minecraft:single_pool_element",
          "location": "trail_ruins/buildings/group_hall_2",
          "processors": "minecraft:trail_ruins_houses_archaeology"
        },
        "weight": 1
      },
      {
        "element": {
          "element_type": "minecraft:single_pool_element",
          "location": "trail_ruins/buildings/group_hall_3",
          "processors": "minecraft:trail_ruins_houses_archaeology"
        },
        "weight": 1
      },
      {
        "element": {
          "element_type": "minecraft:single_pool_element",
          "location": "trail_ruins/buildings/group_hall_4",
          "processors": "minecraft:trail_ruins_houses_archaeology"
        },
        "weight": 1
      },
      {
        "element": {
          "element_type": "minecraft:single_pool_element",
          "location": "trail_ruins/buildings/group_hall_5",
          "processors": "minecraft:trail_ruins_houses_archaeology"
        },
        "weight": 1
      },
      {
        "element": {
          "element_type": "minecraft:single_pool_element",
          "location": "trail_ruins/buildings/large_room_1",
          "processors": "minecraft:trail_ruins_houses_archaeology"
        },
        "weight": 1
      },
      {
        "element": {
          "element_type": "minecraft:single_pool_element",
          "location": "trail_ruins/buildings/large_room_2",
          "processors": "minecraft:trail_ruins_houses_archaeology"
        },
        "weight": 1
      },
      {
        "element": {
          "element_type": "minecraft:single_pool_element",
          "location": "trail_ruins/buildings/large_room_3",
          "processors": "minecraft:trail_ruins_houses_archaeology"
        },
        "weight": 1
      },
      {
        "element": {
          "element_type": "minecraft:single_pool_element",
          "location": "trail_ruins/buildings/large_room_4",
          "processors": "minecraft:trail_ruins_houses_archaeology"
        },
        "weight": 1
      },
      {
        "element": {
          "element_type": "minecraft:single_pool_element",
          "location": "trail_ruins/buildings/large_room_5",
          "processors": "minecraft:trail_ruins_houses_archaeology"
        },
        "weight": 1
      },
      {
        "element": {
          "element_type": "minecraft:single_pool_element",
          "location": "trail_ruins/buildings/one_room_1",
          "processors": "minecraft:trail_ruins_houses_archaeology"
        },
        "weight": 1
      },
      {
        "element": {
          "element_type": "minecraft:single_pool_element",
          "location": "trail_ruins/buildings/one_room_2",
          "processors": "minecraft:trail_ruins_houses_archaeology"
        },
        "weight": 1
      },
      {
        "element": {
          "element_type": "minecraft:single_pool_element",
          "location": "trail_ruins/buildings/one_room_3",
          "processors": "minecraft:trail_ruins_houses_archaeology"
        },
        "weight": 1
      },
      {
        "element": {
          "element_type": "minecraft:single_pool_element",
          "location": "trail_ruins/buildings/one_room_4",
          "processors": "minecraft:trail_ruins_houses_archaeology"
        },
        "weight": 1
      },
      {
        "element": {
          "element_type": "minecraft:single_pool_element",
          "location": "trail_ruins/buildings/one_room_5",
          "processors": "minecraft:trail_ruins_houses_archaeology"
        },
        "weight": 1
      }
    ]
  }
}
```
<CodeHeader>BP/worldgen/template_pools/trail_ruins/decor.json</CodeHeader>

```json
{
  "format_version": "1.21.20",
  "minecraft:template_pool": {
    "description": {
      "identifier": "minecraft:trail_ruins/decor"
    },
    "elements": [
      {
        "element": {
          "element_type": "minecraft:single_pool_element",
          "location": "trail_ruins/decor/decor_1",
          "processors": "minecraft:trail_ruins_houses_archaeology"
        },
        "weight": 1
      },
      {
        "element": {
          "element_type": "minecraft:single_pool_element",
          "location": "trail_ruins/decor/decor_2",
          "processors": "minecraft:trail_ruins_houses_archaeology"
        },
        "weight": 1
      },
      {
        "element": {
          "element_type": "minecraft:single_pool_element",
          "location": "trail_ruins/decor/decor_3",
          "processors": "minecraft:trail_ruins_houses_archaeology"
        },
        "weight": 1
      },
      {
        "element": {
          "element_type": "minecraft:single_pool_element",
          "location": "trail_ruins/decor/decor_4",
          "processors": "minecraft:trail_ruins_houses_archaeology"
        },
        "weight": 1
      },
      {
        "element": {
          "element_type": "minecraft:single_pool_element",
          "location": "trail_ruins/decor/decor_5",
          "processors": "minecraft:trail_ruins_houses_archaeology"
        },
        "weight": 1
      },
      {
        "element": {
          "element_type": "minecraft:single_pool_element",
          "location": "trail_ruins/decor/decor_6",
          "processors": "minecraft:trail_ruins_houses_archaeology"
        },
        "weight": 1
      },
      {
        "element": {
          "element_type": "minecraft:single_pool_element",
          "location": "trail_ruins/decor/decor_7",
          "processors": "minecraft:trail_ruins_houses_archaeology"
        },
        "weight": 1
      }
    ]
  }
}
```
<CodeHeader>BP/worldgen/template_pools/trail_ruins/roads.json</CodeHeader>

```json
{
  "format_version": "1.21.20",
  "minecraft:template_pool": {
    "description": {
      "identifier": "minecraft:trail_ruins/roads"
    },
    "elements": [
      {
        "element": {
          "element_type": "minecraft:single_pool_element",
          "location": "trail_ruins/roads/long_road_end",
          "processors": "minecraft:trail_ruins_roads_archaeology"
        },
        "weight": 1
      },
      {
        "element": {
          "element_type": "minecraft:single_pool_element",
          "location": "trail_ruins/roads/road_end_1",
          "processors": "minecraft:trail_ruins_roads_archaeology"
        },
        "weight": 1
      },
      {
        "element": {
          "element_type": "minecraft:single_pool_element",
          "location": "trail_ruins/roads/road_section_1",
          "processors": "minecraft:trail_ruins_roads_archaeology"
        },
        "weight": 1
      },
      {
        "element": {
          "element_type": "minecraft:single_pool_element",
          "location": "trail_ruins/roads/road_section_2",
          "processors": "minecraft:trail_ruins_roads_archaeology"
        },
        "weight": 1
      },
      {
        "element": {
          "element_type": "minecraft:single_pool_element",
          "location": "trail_ruins/roads/road_section_3",
          "processors": "minecraft:trail_ruins_roads_archaeology"
        },
        "weight": 1
      },
      {
        "element": {
          "element_type": "minecraft:single_pool_element",
          "location": "trail_ruins/roads/road_section_4",
          "processors": "minecraft:trail_ruins_roads_archaeology"
        },
        "weight": 1
      },
      {
        "element": {
          "element_type": "minecraft:single_pool_element",
          "location": "trail_ruins/roads/road_spacer_1",
          "processors": "minecraft:trail_ruins_roads_archaeology"
        },
        "weight": 1
      }
    ]
  }
}
```
<CodeHeader>BP/worldgen/template_pools/trail_ruins/roads.json</CodeHeader>

```json
{
  "format_version": "1.21.20",
  "minecraft:template_pool": {
    "description": {
      "identifier": "minecraft:trail_ruins/roads"
    },
    "elements": [
      {
        "element": {
          "element_type": "minecraft:single_pool_element",
          "location": "trail_ruins/roads/long_road_end",
          "processors": "minecraft:trail_ruins_roads_archaeology"
        },
        "weight": 1
      },
      {
        "element": {
          "element_type": "minecraft:single_pool_element",
          "location": "trail_ruins/roads/road_end_1",
          "processors": "minecraft:trail_ruins_roads_archaeology"
        },
        "weight": 1
      },
      {
        "element": {
          "element_type": "minecraft:single_pool_element",
          "location": "trail_ruins/roads/road_section_1",
          "processors": "minecraft:trail_ruins_roads_archaeology"
        },
        "weight": 1
      },
      {
        "element": {
          "element_type": "minecraft:single_pool_element",
          "location": "trail_ruins/roads/road_section_2",
          "processors": "minecraft:trail_ruins_roads_archaeology"
        },
        "weight": 1
      },
      {
        "element": {
          "element_type": "minecraft:single_pool_element",
          "location": "trail_ruins/roads/road_section_3",
          "processors": "minecraft:trail_ruins_roads_archaeology"
        },
        "weight": 1
      },
      {
        "element": {
          "element_type": "minecraft:single_pool_element",
          "location": "trail_ruins/roads/road_section_4",
          "processors": "minecraft:trail_ruins_roads_archaeology"
        },
        "weight": 1
      },
      {
        "element": {
          "element_type": "minecraft:single_pool_element",
          "location": "trail_ruins/roads/road_spacer_1",
          "processors": "minecraft:trail_ruins_roads_archaeology"
        },
        "weight": 1
      }
    ]
  }
}
```
<CodeHeader>BP/worldgen/template_pools/trail_ruins/tower.json</CodeHeader>

```json
{
  "format_version": "1.21.20",
  "minecraft:template_pool": {
    "description": {
      "identifier": "minecraft:trail_ruins/tower"
    },
    "elements": [
      {
        "element": {
          "element_type": "minecraft:single_pool_element",
          "location": "trail_ruins/tower/tower_1",
          "processors": "minecraft:trail_ruins_houses_archaeology"
        },
        "weight": 1
      },
      {
        "element": {
          "element_type": "minecraft:single_pool_element",
          "location": "trail_ruins/tower/tower_2",
          "processors": "minecraft:trail_ruins_houses_archaeology"
        },
        "weight": 1
      },
      {
        "element": {
          "element_type": "minecraft:single_pool_element",
          "location": "trail_ruins/tower/tower_3",
          "processors": "minecraft:trail_ruins_houses_archaeology"
        },
        "weight": 1
      },
      {
        "element": {
          "element_type": "minecraft:single_pool_element",
          "location": "trail_ruins/tower/tower_4",
          "processors": "minecraft:trail_ruins_houses_archaeology"
        },
        "weight": 1
      },
      {
        "element": {
          "element_type": "minecraft:single_pool_element",
          "location": "trail_ruins/tower/tower_5",
          "processors": "minecraft:trail_ruins_houses_archaeology"
        },
        "weight": 1
      }
    ]
  }
}
```
<CodeHeader>BP/worldgen/template_pools/trail_ruins/buildings/grouped.json</CodeHeader>

```json
{
  "format_version": "1.21.20",
  "minecraft:template_pool": {
    "description": {
      "identifier": "minecraft:trail_ruins/buildings/grouped"
    },
    "elements": [
      {
        "element": {
          "element_type": "minecraft:single_pool_element",
          "location": "trail_ruins/buildings/group_full_1",
          "processors": "minecraft:trail_ruins_houses_archaeology"
        },
        "weight": 1
      },
      {
        "element": {
          "element_type": "minecraft:single_pool_element",
          "location": "trail_ruins/buildings/group_full_2",
          "processors": "minecraft:trail_ruins_houses_archaeology"
        },
        "weight": 1
      },
      {
        "element": {
          "element_type": "minecraft:single_pool_element",
          "location": "trail_ruins/buildings/group_full_3",
          "processors": "minecraft:trail_ruins_houses_archaeology"
        },
        "weight": 1
      },
      {
        "element": {
          "element_type": "minecraft:single_pool_element",
          "location": "trail_ruins/buildings/group_full_4",
          "processors": "minecraft:trail_ruins_houses_archaeology"
        },
        "weight": 1
      },
      {
        "element": {
          "element_type": "minecraft:single_pool_element",
          "location": "trail_ruins/buildings/group_full_5",
          "processors": "minecraft:trail_ruins_houses_archaeology"
        },
        "weight": 1
      },
      {
        "element": {
          "element_type": "minecraft:single_pool_element",
          "location": "trail_ruins/buildings/group_lower_1",
          "processors": "minecraft:trail_ruins_houses_archaeology"
        },
        "weight": 1
      },
      {
        "element": {
          "element_type": "minecraft:single_pool_element",
          "location": "trail_ruins/buildings/group_lower_2",
          "processors": "minecraft:trail_ruins_houses_archaeology"
        },
        "weight": 1
      },
      {
        "element": {
          "element_type": "minecraft:single_pool_element",
          "location": "trail_ruins/buildings/group_lower_3",
          "processors": "minecraft:trail_ruins_houses_archaeology"
        },
        "weight": 1
      },
      {
        "element": {
          "element_type": "minecraft:single_pool_element",
          "location": "trail_ruins/buildings/group_lower_4",
          "processors": "minecraft:trail_ruins_houses_archaeology"
        },
        "weight": 1
      },
      {
        "element": {
          "element_type": "minecraft:single_pool_element",
          "location": "trail_ruins/buildings/group_lower_5",
          "processors": "minecraft:trail_ruins_houses_archaeology"
        },
        "weight": 1
      },
      {
        "element": {
          "element_type": "minecraft:single_pool_element",
          "location": "trail_ruins/buildings/group_upper_1",
          "processors": "minecraft:trail_ruins_houses_archaeology"
        },
        "weight": 1
      },
      {
        "element": {
          "element_type": "minecraft:single_pool_element",
          "location": "trail_ruins/buildings/group_upper_2",
          "processors": "minecraft:trail_ruins_houses_archaeology"
        },
        "weight": 1
      },
      {
        "element": {
          "element_type": "minecraft:single_pool_element",
          "location": "trail_ruins/buildings/group_upper_3",
          "processors": "minecraft:trail_ruins_houses_archaeology"
        },
        "weight": 1
      },
      {
        "element": {
          "element_type": "minecraft:single_pool_element",
          "location": "trail_ruins/buildings/group_upper_4",
          "processors": "minecraft:trail_ruins_houses_archaeology"
        },
        "weight": 1
      },
      {
        "element": {
          "element_type": "minecraft:single_pool_element",
          "location": "trail_ruins/buildings/group_upper_5",
          "processors": "minecraft:trail_ruins_houses_archaeology"
        },
        "weight": 1
      },
      {
        "element": {
          "element_type": "minecraft:single_pool_element",
          "location": "trail_ruins/buildings/group_room_1",
          "processors": "minecraft:trail_ruins_houses_archaeology"
        },
        "weight": 1
      },
      {
        "element": {
          "element_type": "minecraft:single_pool_element",
          "location": "trail_ruins/buildings/group_room_2",
          "processors": "minecraft:trail_ruins_houses_archaeology"
        },
        "weight": 1
      },
      {
        "element": {
          "element_type": "minecraft:single_pool_element",
          "location": "trail_ruins/buildings/group_room_3",
          "processors": "minecraft:trail_ruins_houses_archaeology"
        },
        "weight": 1
      },
      {
        "element": {
          "element_type": "minecraft:single_pool_element",
          "location": "trail_ruins/buildings/group_room_4",
          "processors": "minecraft:trail_ruins_houses_archaeology"
        },
        "weight": 1
      },
      {
        "element": {
          "element_type": "minecraft:single_pool_element",
          "location": "trail_ruins/buildings/group_room_5",
          "processors": "minecraft:trail_ruins_houses_archaeology"
        },
        "weight": 1
      }
    ]
  }
}
```
<CodeHeader>BP/worldgen/template_pools/trail_ruins/tower/additions.json</CodeHeader>

```json
{
  "format_version": "1.21.20",
  "minecraft:template_pool": {
    "description": {
      "identifier": "minecraft:trail_ruins/tower/additions"
    },
    "elements": [
      {
        "element": {
          "element_type": "minecraft:single_pool_element",
          "location": "trail_ruins/tower/hall_1",
          "processors": "minecraft:trail_ruins_houses_archaeology"
        },
        "weight": 1
      },
      {
        "element": {
          "element_type": "minecraft:single_pool_element",
          "location": "trail_ruins/tower/hall_2",
          "processors": "minecraft:trail_ruins_houses_archaeology"
        },
        "weight": 1
      },
      {
        "element": {
          "element_type": "minecraft:single_pool_element",
          "location": "trail_ruins/tower/hall_3",
          "processors": "minecraft:trail_ruins_houses_archaeology"
        },
        "weight": 1
      },
      {
        "element": {
          "element_type": "minecraft:single_pool_element",
          "location": "trail_ruins/tower/hall_4",
          "processors": "minecraft:trail_ruins_houses_archaeology"
        },
        "weight": 1
      },
      {
        "element": {
          "element_type": "minecraft:single_pool_element",
          "location": "trail_ruins/tower/hall_5",
          "processors": "minecraft:trail_ruins_houses_archaeology"
        },
        "weight": 1
      },
      {
        "element": {
          "element_type": "minecraft:single_pool_element",
          "location": "trail_ruins/tower/large_hall_1",
          "processors": "minecraft:trail_ruins_houses_archaeology"
        },
        "weight": 1
      },
      {
        "element": {
          "element_type": "minecraft:single_pool_element",
          "location": "trail_ruins/tower/large_hall_2",
          "processors": "minecraft:trail_ruins_houses_archaeology"
        },
        "weight": 1
      },
      {
        "element": {
          "element_type": "minecraft:single_pool_element",
          "location": "trail_ruins/tower/large_hall_3",
          "processors": "minecraft:trail_ruins_houses_archaeology"
        },
        "weight": 1
      },
      {
        "element": {
          "element_type": "minecraft:single_pool_element",
          "location": "trail_ruins/tower/large_hall_4",
          "processors": "minecraft:trail_ruins_houses_archaeology"
        },
        "weight": 1
      },
      {
        "element": {
          "element_type": "minecraft:single_pool_element",
          "location": "trail_ruins/tower/large_hall_5",
          "processors": "minecraft:trail_ruins_houses_archaeology"
        },
        "weight": 1
      },
      {
        "element": {
          "element_type": "minecraft:single_pool_element",
          "location": "trail_ruins/tower/one_room_1",
          "processors": "minecraft:trail_ruins_houses_archaeology"
        },
        "weight": 1
      },
      {
        "element": {
          "element_type": "minecraft:single_pool_element",
          "location": "trail_ruins/tower/one_room_2",
          "processors": "minecraft:trail_ruins_houses_archaeology"
        },
        "weight": 1
      },
      {
        "element": {
          "element_type": "minecraft:single_pool_element",
          "location": "trail_ruins/tower/one_room_3",
          "processors": "minecraft:trail_ruins_houses_archaeology"
        },
        "weight": 1
      },
      {
        "element": {
          "element_type": "minecraft:single_pool_element",
          "location": "trail_ruins/tower/one_room_4",
          "processors": "minecraft:trail_ruins_houses_archaeology"
        },
        "weight": 1
      },
      {
        "element": {
          "element_type": "minecraft:single_pool_element",
          "location": "trail_ruins/tower/one_room_5",
          "processors": "minecraft:trail_ruins_houses_archaeology"
        },
        "weight": 1
      },
      {
        "element": {
          "element_type": "minecraft:single_pool_element",
          "location": "trail_ruins/tower/platform_1",
          "processors": "minecraft:trail_ruins_houses_archaeology"
        },
        "weight": 1
      },
      {
        "element": {
          "element_type": "minecraft:single_pool_element",
          "location": "trail_ruins/tower/platform_2",
          "processors": "minecraft:trail_ruins_houses_archaeology"
        },
        "weight": 1
      },
      {
        "element": {
          "element_type": "minecraft:single_pool_element",
          "location": "trail_ruins/tower/platform_3",
          "processors": "minecraft:trail_ruins_houses_archaeology"
        },
        "weight": 1
      },
      {
        "element": {
          "element_type": "minecraft:single_pool_element",
          "location": "trail_ruins/tower/platform_4",
          "processors": "minecraft:trail_ruins_houses_archaeology"
        },
        "weight": 1
      },
      {
        "element": {
          "element_type": "minecraft:single_pool_element",
          "location": "trail_ruins/tower/platform_5",
          "processors": "minecraft:trail_ruins_houses_archaeology"
        },
        "weight": 1
      },
      {
        "element": {
          "element_type": "minecraft:single_pool_element",
          "location": "trail_ruins/tower/stable_1",
          "processors": "minecraft:trail_ruins_houses_archaeology"
        },
        "weight": 1
      },
      {
        "element": {
          "element_type": "minecraft:single_pool_element",
          "location": "trail_ruins/tower/stable_2",
          "processors": "minecraft:trail_ruins_houses_archaeology"
        },
        "weight": 1
      },
      {
        "element": {
          "element_type": "minecraft:single_pool_element",
          "location": "trail_ruins/tower/stable_3",
          "processors": "minecraft:trail_ruins_houses_archaeology"
        },
        "weight": 1
      },
      {
        "element": {
          "element_type": "minecraft:single_pool_element",
          "location": "trail_ruins/tower/stable_4",
          "processors": "minecraft:trail_ruins_houses_archaeology"
        },
        "weight": 1
      },
      {
        "element": {
          "element_type": "minecraft:single_pool_element",
          "location": "trail_ruins/tower/stable_5",
          "processors": "minecraft:trail_ruins_houses_archaeology"
        },
        "weight": 1
      }
    ]
  }
}
```

<CodeHeader>BP/worldgen/template_pools/trail_ruins/tower/tower_top.json</CodeHeader>

```json
{
  "format_version": "1.21.20",
  "minecraft:template_pool": {
    "description": {
      "identifier": "minecraft:trail_ruins/tower/tower_top"
    },
    "elements": [
      {
        "element": {
          "element_type": "minecraft:single_pool_element",
          "location": "trail_ruins/tower/tower_top_1",
          "processors": "minecraft:trail_ruins_tower_top_archaeology"
        },
        "weight": 1
      },
      {
        "element": {
          "element_type": "minecraft:single_pool_element",
          "location": "trail_ruins/tower/tower_top_2",
          "processors": "minecraft:trail_ruins_tower_top_archaeology"
        },
        "weight": 1
      },
      {
        "element": {
          "element_type": "minecraft:single_pool_element",
          "location": "trail_ruins/tower/tower_top_3",
          "processors": "minecraft:trail_ruins_tower_top_archaeology"
        },
        "weight": 1
      },
      {
        "element": {
          "element_type": "minecraft:single_pool_element",
          "location": "trail_ruins/tower/tower_top_4",
          "processors": "minecraft:trail_ruins_tower_top_archaeology"
        },
        "weight": 1
      },
      {
        "element": {
          "element_type": "minecraft:single_pool_element",
          "location": "trail_ruins/tower/tower_top_5",
          "processors": "minecraft:trail_ruins_tower_top_archaeology"
        },
        "weight": 1
      }
    ]
  }
}
```
