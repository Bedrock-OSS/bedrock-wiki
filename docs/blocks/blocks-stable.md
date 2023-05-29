---
title: Stable Blocks
category: General
nav_order: 2
mentions:
    - SmokeyStack
    - QuazChick
---

Documentation of all stable features of blocks.

## Block Properties

Block properties are block states for all your custom blocks. The first item in the values array is used as the default.

### Defining Properties:

<CodeHeader></CodeHeader>

```json
{
  "format_version": "1.19.80",
  "minecraft:block": {
    "description": {
      "identifier": "wiki:custom_block",
      "properties": {
        "wiki:string_property_example": [
          "red",
          "green",
          "blue",
          "purple"
        ],
        "wiki:boolean_property_example": [
          true,
          false
        ],
        "wiki:integer_property_example": [
          1,
          2,
          3,
          4,
          5
        ],
        "wiki:integer_range_property_example": {
          "values": {
            "min": 1,
            "max": 5
          }
        }
      }
    }
  }
}
```

### Using Properties:

Properties can be tested for with the Molang `query.block_property`

```c
q.block_property('wiki:string_property_example') == 'blue'
```

## Block Permutations

Block permutations are a way of conditionally applying components to a block with Molang expressions.

<CodeHeader></CodeHeader>

```json
{
  "format_version": "1.19.80",
  "minecraft:block": {
    "description": {
      "identifier": "wiki:custom_block",
      "properties": {
        "wiki:custom_integer_property": [ 10, 20, 30, 40 ],
        "wiki:custom_boolean_property": [ false, true ],
        "wiki:custom_string_property": [ "red", "green", "blue" ]
      }
    },
    "components": {...},
    "permutations": [
      {
        "condition": "q.block_property('wiki:custom_integer_property') == 20",
        "components": {
          "minecraft:friction": 0.1
        }
      },
      {
        "condition": "q.block_property('wiki:custom_boolean_property')",
        "components": {
          "minecraft:destructible_by_mining": {
            "seconds_to_destroy": 0.5
          }
        }
      },
      {
        "condition": "q.block_property('wiki:custom_string_property') == 'red'",
        "components": {
            "minecraft:geometry": "geometry.pig"
        }
      }
    ]
  }
}
```

## Block Components

List of experimental block components, with usage examples.

### minecraft:geometry

The model the block will use. This component applies no face culling.

<CodeHeader></CodeHeader>

```json
{
  "minecraft:geometry": "geometry.wiki" // Geometry identifier from geo file in 'RP/models/entity' or 'RP/models/blocks' folder
}
```

Additionally, `bone_visibility` can be used to show/hide certain bones

<CodeHeader></CodeHeader>

```json
{
  "minecraft:geometry":{
    "identifier": "geometry.wiki",
    "bone_visibility": {
      "bone1": true,
      "bone2": false,
    }
  }
}
```

### minecraft:material_instances

Sets a texture and rendering on your block.

<CodeHeader></CodeHeader>

```json
{
  "minecraft:material_instances": {
    // Can also be a specific material instance for a specific face mapped in the geometry
    // Wildcards follow render controller syntax
    // Options 'up', 'down', and 'sides' are builtin
    "*": {
      "texture": "texture_name", // References texture friendly name defined in terrain_textures.json
      "render_method": "blend", // Options 'blend', 'opaque', 'alpha_test',
      "face_dimming": true, // Defaults to true; refers to whether or not block is affected by lighting
      "ambient_occlusion": true // Defaults to true; refers to whether or not faces have smooth lighting
    }
  }
}
```

Or...

<CodeHeader></CodeHeader>

```json
{
  "minecraft:material_instances": {
    "bone_1": {
      "texture": "texture_name", // References texture friendly name defined in terrain_textures.json
      "render_method": "blend", // Options 'blend', 'opaque', 'alpha_test',
      "face_dimming": true, // Defaults to true; refers to whether or not block is affected by lighting
      "ambient_occlusion": true // Defaults to true; refers to whether or not faces have smooth lighting
    }
  }
}
```

:::tip
You need do add the material instance onto any face/bone of a cube within BlockBench.
:::

### minecraft:collision_box

The entity collision box.

<CodeHeader></CodeHeader>

```json
{
  "minecraft:collision_box":{
    "origin": [-8, 0, -8],
    "size": [16, 16, 16]
  }
}
```

Or..

<CodeHeader></CodeHeader>

```json
{
  "minecraft:collision_box": false
}
```

### minecraft:crafting_table

Turns your block into a crafting table, which displays a functioning crafting interface when interacted with.

<CodeHeader></CodeHeader>

```json
{
  "minecraft:crafting_table": {
    "table_name": "container.custom_crafting", // Name shown in GUI - translatable
    "crafting_tags": ["crafting_table", "custom_crafting_tag"] // Tags to be used within the recipe file
  }
}
```

### minecraft:selection_box

The hitbox of the block when hovering on the block.

<CodeHeader></CodeHeader>

```json
{
  "minecraft:selection_box": {
    "origin": [ -8, 0, -8 ],
    "size": [ 16, 16, 16 ]
  }
}
```

Or..

<CodeHeader></CodeHeader>

```json
{
  "minecraft:selection_box": false
}
```

### minecraft:display_name

<CodeHeader></CodeHeader>

```json
{
  "minecraft:display_name": "tile.custom_block.name"
}
```

### minecraft:placement_filter

Allows to make the block only be placed on specified blocks.

<CodeHeader></CodeHeader>

```json
{
  "minecraft:placement_filter": {
    "conditions": [
      {
        "block_filter": [ "minecraft:dirt" ],
        "allowed_faces": [ "up" ] // Can be up, down, north, east, south, west or side.
      }
    ]
  }
}
```

_This also accepts tags, such as:_

<CodeHeader></CodeHeader>

```json
{
  "minecraft:placement_filter": {
    "conditions": [
      {
        "allowed_faces": [ "up" ],
        "block_filter": [
          {
            "tags": "!q.any_tag('stone')"
          }
        ]
      }
    ]
  }
}
```

See [this](/blocks/block-tags) page for a list of vanilla tags and relevant blocks.

## Block Menu Category

<CodeHeader></CodeHeader>

```json
{
  "description": {
    "menu_category": {
      "category": "items", // The creative inventory / recipe book tab that the block is placed into
      "group": "itemGroup.name.bed", // The expandable group that the block is a part of. (Optional)
      "is_hidden_in_commands": true // Is the block hidden from use in commands? (Optional)
    }
  }
}
```

For a list of many categories, see [here](/documentation/creative-categories)

## Additional Notes

- Vanilla blocks are hard-coded. You may not override or access them.
- Only one of each component can be active at once. Duplicate components will be overridden by the lowest permutation.
- Custom blocks' tags are ignored by Vanilla items.
- Block faces will unconditionally darken if intersecting another block.
- Block loot tables are ignored when mined with the `Silk Touch` enchantment, resulting in the block dropping.
- The following components may not exceed the default (16x) block size limitations:
    - `minecraft:collision_box`
    - `minecraft:selection_box`
-   Different parameters for `render_method` in `minecraft:material_instances` will - similar to entity runtime identifiers - affect certain properties of the block:
    - Inputting `opaque` will allow Redstone to pass through, Grass to decay, and on it, Mobs' spawning
    - Inputting `alpha_test` will **not** allow Redstone to pass through, Grass to decay, or Mobs to spawn on it
        - `blend` has the same properties as `alpha_test`
    - Creating a transparent block exhibiting `opaque` properties:

Use `alpha_test`

```json
{
  "minecraft:material_instances": {
    "*": {
      "render_method": "alpha_test"
    }
  }
}
```

...Then, simply link the textures via `blocks.json`
