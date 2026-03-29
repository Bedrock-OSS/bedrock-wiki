---
title: Randomized Structure Loot
description: Learn how to add loot tables to containers in custom structures.
category: Tutorials
mentions:
    - MedicalJewel105
    - SirLich
    - SmokeyStack
    - Ciosciaa
    - rebrainertv
    - Supernova3695
    - QuazChick
tags:
    - easy
---

Adding loot tables to containers in structure is easy, you need to have a PC and your choice of either [NBT Studio](https://github.com/tryashtar/nbt-studio/releases/download/v1.14.1/NbtStudio.exe) (executable) or [Loot Tabler](https://mcbe-essentials.github.io/structure-editor/loot-tabler) (browser application). If the wanted loot is in a jigsaw structure a processor can be used.

## Setup

### Creating the Loot Table

To start, create the directory `BP/loot_tables/chests` and create your loot table file here.

You can learn how to make loot tables in [Beginner's Guide](/guide/loot-table)

<CodeHeader>BP/loot_tables/chests/my_structure_loot.json</CodeHeader>

```json
{
    "pools": [
        {
            "rolls": {
                "min": 8,
                "max": 10
            },
            "entries": [
                {
                    "type": "item",
                    "name": "minecraft:glass_bottle",
                    "functions": [
                        {
                            "function": "set_count",
                            "count": {
                                "min": 4,
                                "max": 6
                            }
                        }
                    ],
                    "weight": 1
                },
                {
                    "type": "item",
                    "name": "minecraft:potion",
                    "functions": [
                        {
                            "function": "set_count",
                            "count": {
                                "min": 4,
                                "max": 6
                            }
                        }
                    ],
                    "weight": 1
                }
            ]
        }
    ]
}
```

### Exporting Structure

Once you have created your loot table, export your structure into `BP/structures`. Then follow the steps for either NBT Studio or Loot Tabler

![](/assets/images/tutorials/randomised-structure-loot/export_structure.png)

## NBT Studio (Executable)

### Software Preparation

Download and launch [NBT Studio](https://github.com/tryashtar/nbt-studio/releases/download/v1.14.1/NbtStudio.exe)

### Adding the Loot Table

Launch NBT Studio and open file `(Ctrl + O)`

![](/assets/images/tutorials/randomised-structure-loot/open_file.png)

Find your container (Ctrl + F)

![](/assets/images/tutorials/randomised-structure-loot/find_container.png)

Navigate to your container, `block_position_data` > `block_entity_data`. Add a string tag

![](/assets/images/tutorials/randomised-structure-loot/add_string_tag1.png)

Add `LootTable` and the file path to your loot table

![](/assets/images/tutorials/randomised-structure-loot/add_string_tag2.png)

Save changes (Ctrl + S)

## Loot Tabler (Browser Application)

### Adding the Loot Table

Open the website and click "Upload". Choose your structure file.

![](/assets/images/tutorials/randomised-structure-loot/LootTable-step1.png)

Find your container in the containers list, making use of the information displayed under "Container Options"

![](/assets/images/tutorials/randomised-structure-loot/LootTable-step2.png)

Under "Loot Table", enter the path to your loot table. Set "Loot Table Seed" to blank or `0` if you want the loot to generate randomly. If you want the loot table to generate consistently, enter a specific value.

![](/assets/images/tutorials/randomised-structure-loot/LootTable-step3.png)

Download your structure file and place it in `BP/structures`.

## Jigsaw Processors

[Processors](/world-generation/jigsaw-structures#processors) for jigsaw structures can set blocks like suspicious sand and chests to have loot.

This can be done using a `minecraft:rule` processor with a `block_entity_modifier` rule.
The `type` field should be specified to `minecraft:append_loot` with the `loot_table` being set to the path to your loot table.

Using that rule in combination with `blockstate_match` predicates will allow for blocks to be given loot tables.

A processor setting a chest to have loot will set it to the default rotation unless `blockstate_match` is set to match the input chest with the loot table and then output a chest with the loot table and same rotation.
A rule is needed for all permutations of the block you want to replace. For example, chests have 4 cardinal directions so 4 rules would be needed.

All of the specified blocks in the structure template with the processor applied will have the loot.
There is no way to have different loot in different chests in the same structure template using processors.

### Example

A example of a suspicius gravel having a loot table applied.

<CodeHeader>minecraft:processor_list</CodeHeader>

```json
{
    "processor_type": "minecraft:rule",
    "rules": [
        {
            "block_entity_modifier": {
                "type": "minecraft:append_loot",
                "loot_table": "loot_tables/entities/trail_ruins_brushable_block_common.json"
            },
            "input_predicate": {
                "predicate_type": "minecraft:block_match",
                "block": "minecraft:suspicious_gravel"
            },
            "output_state": {
                "name": "minecraft:suspicious_gravel"
            }
        }
    ]
}
```

A example of a chest having a loot table applied to all rotations.

<CodeHeader>minecraft:processor_list</CodeHeader>

```json
{
    "processor_type": "minecraft:rule",
    "rules": [
        {
            "block_entity_modifier": {
                "type": "minecraft:append_loot",
                "loot_table": "loot_tables/entities/trail_ruins_brushable_block_common.json"
            },
            "input_predicate": {
                "predicate_type": "minecraft:blockstate_match",
                "block": "minecraft:chest",
                "states": {
                    "minecraft:cardinal_direction": "north"
                }
            },
            "output_state": {
                "name": "minecraft:chest",
                "states": {
                    "minecraft:cardinal_direction": "north"
                }
            }
        },
        {
            "block_entity_modifier": {
                "type": "minecraft:append_loot",
                "loot_table": "loot_tables/entities/trail_ruins_brushable_block_common.json"
            },
            "input_predicate": {
                "predicate_type": "minecraft:blockstate_match",
                "block": "minecraft:chest",
                "states": {
                    "minecraft:cardinal_direction": "south"
                }
            },
            "output_state": {
                "name": "minecraft:chest",
                "states": {
                    "minecraft:cardinal_direction": "south"
                }
            }
        },
        {
            "block_entity_modifier": {
                "type": "minecraft:append_loot",
                "loot_table": "loot_tables/entities/trail_ruins_brushable_block_common.json"
            },
            "input_predicate": {
                "predicate_type": "minecraft:blockstate_match",
                "block": "minecraft:chest",
                "states": {
                    "minecraft:cardinal_direction": "east"
                }
            },
            "output_state": {
                "name": "minecraft:chest",
                "states": {
                    "minecraft:cardinal_direction": "east"
                }
            }
        },
        {
            "block_entity_modifier": {
                "type": "minecraft:append_loot",
                "loot_table": "loot_tables/entities/trail_ruins_brushable_block_common.json"
            },
            "input_predicate": {
                "predicate_type": "minecraft:blockstate_match",
                "block": "minecraft:chest",
                "states": {
                    "minecraft:cardinal_direction": "west"
                }
            },
            "output_state": {
                "name": "minecraft:chest",
                "states": {
                    "minecraft:cardinal_direction": "west"
                }
            }
        }
    ]
}
```

## Testing

Load your structure and open the container. For jigsaws use `/place structure` or `/place jigsaw`.

![](/assets/images/tutorials/randomised-structure-loot/test.png)
