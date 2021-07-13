---
title: Randomised Structure Loot
---


Adding loot tables to containers in structure is easy, you need to have PC and NBT Studio installed.

## Software Preporation

Download and launch NBT Studio:
https://github.com/tryashtar/nbt-studio/releases/download/v1.14.1/NbtStudio.exe

## Exporting Structure

Export your structure in `BP/structures`

![](/assets/images/tutorials/randomised-structure-loot/export_structure.png)

## Creating Loot Table

To start with you need to create directory `BP/loot_tables/chests` and your loot table file here.
You can learn how to make loot tables in Beginners Guide

<CodeHeader>BP/loot_tables/chests/my_structure_loot.json</CodeHeader>

```json
{
    "pools":[
        {
            "rolls":{
                "min":8,
                "max":10
            },
            "entries":[
                {
                    "type":"item",
                    "name":"minecraft:glass_bottle",
                    "functions":[
                        {
                            "function":"set_count",
                            "count":{
                                "min":4,
                                "max":6
                            }
                        }
                    ],
                    "weight":1
                },
                {
                    "type":"item",
                    "name":"minecraft:potion",
                    "functions":[
                        {
                            "function":"set_count",
                            "count":{
                                "min":4,
                                "max":6
                            }
                        }
                    ],
                    "weight":1
                }
            ]
        }
    ]
}
```

## Adding Loot Table to Container in Structure

Launch NBT Studio and open file (Ctrl + O)

![](/assets/images/tutorials/randomised-structure-loot/open_file.png)

Find your container (Ctrl + F)

![](/assets/images/tutorials/randomised-structure-loot/find_container.png)

In block_position_data > block_entity_data of your container add a string tag

![](/assets/images/tutorials/randomised-structure-loot/add_string_tag1.png)

Add `LootTable` and destination to your loot table

![](/assets/images/tutorials/randomised-structure-loot/add_string_tag2.png)

Save changes (Ctrl + S)

## Testing

Import new structureand open container

![](/assets/images/tutorials/randomised-structure-loot/test.png)