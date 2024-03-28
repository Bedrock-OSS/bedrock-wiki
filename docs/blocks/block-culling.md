---
title: Block Culling
category: General
mentions:
    - legopitstop
---

This section shows how to specify particular faces and/or bones in a geometry file for culling checks.

**Note** that face culling and bone culling can both exist in the same culling file.

A face or bone culls (is not visible) if the neighbor in the "direction" direction is full and opaque (a full cube, and drawing using the "opaque" render-method in the minecraft:material_instances component).

**Note** that if a minecraft:transform component rotates the block, the directions rotate as well

## Definition Properties

These properties are part of Block Culling used within block JSON files. This helps the system determine how to change the appearance of this block.

| Name                          | Type        | Description                                                                                                                                                                               |
|-------------------------------|-------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| format_version                | String      | Specifies the version of the game this entity was made in. If the version is lower than the current version, any changes made to the entity in the vanilla version will be applied to it. |
| minecraft:block_culling_rules | JSON Object | JSON container used for descriptions, especially the identifier for the name of the culled version of the block..                                                                         |
| rules                         | List        | List of all components used to identify geometry parts used in culling.                                                                                                                   |

## Description

| Name       | Type   | Description                                                                                                        |
|------------|--------|--------------------------------------------------------------------------------------------------------------------|
| identifier | String | The identifier for this block culling. The name must include a namespace and must not use the Minecraft namespace. |

## Rules

| Name          | Type        | Description                                                                                                                                                                               |
|---------------|-------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| geometry_part | JSON Object | Specifies the bone, cube, and face that the block will be culled. The cube and face fields are optional to allow culling a specific face. Omitting these fields will cull the whole bone. |
| direction     | String      | Specifies the direction of the neighbor block to check for culling. This direction rotates with a block's Transform component.                                                            |

## Geometry Part

| Name | Type    | Description                     |
|------|---------|---------------------------------|
| bone | String  | The name of the bone to cull    |
| cube | Integer | The index in the models `cubes` |
| face | String  | The cubes face to disable       |

## Code Example

<CodeHeader>RP/block_culling/example.json</CodeHeader>

```json
{
  "format_version": "1.20.60",
  "minecraft:block_culling_rules": {
    "description": {
       "identifier": "test:sushi_cull"
    },
    "rules": [
      {
       "geometry_part": { 
          "bone": "bb_main",
          "cube": 0, 
          "face": "north" 
        },
        "direction": "north"
      },
      {
        "geometry_part": { 
          "bone": "bb_main", 
          "cube": 0, 
          "face": "south" 
        },
        "direction": "south"
      },
      {
        "geometry_part": { 
          "bone": "bb_main"
        },
        "direction": "east"
      }
    ]
  }
}
```