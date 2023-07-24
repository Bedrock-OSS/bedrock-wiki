---
title: Block Features
category: General
nav_order: 2
mentions:
    - SmokeyStack
    - QuazChick
---

:::tip FORMAT VERSION `1.20.10`

Using the latest format version when creating custom blocks provides access to fresh features and improvements. The wiki aims to share up-to-date information on custom blocks, and currently targets format version `1.20.10`.
:::

Documentation of all stable features of blocks. For a list of experimental block features, visit [here](/blocks/blocks-experimental).

**Note**: Vanilla blocks are hard-coded. You may not override or access them.

## Block Properties

Block properties define all possible block states for your custom blocks. The first item in the values array is used as the default.

_Released from experiment `Holiday Creator Features` for format versions 1.19.70 and higher._

### Defining Properties:

<CodeHeader></CodeHeader>

```json
{
  "format_version": "1.20.10",
  "minecraft:block": {
    "description": {
      "identifier": "wiki:custom_block",
      "properties": {
        "wiki:string_property_example": ["red", "green", "blue"],
        "wiki:boolean_property_example": [false, true],
        "wiki:integer_property_example": [1, 2, 3],
        "wiki:integer_range_property_example": {
          "values": { "min": 0, "max": 5 }
        }
      }
    }
  }
}
```

### Using Properties:

Properties can be tested for with the Molang `q.block_property`

```c
q.block_property('wiki:string_property_example') == 'blue'
```

:::tip
Working with block properties (and many other parts of blocks) requires understanding of Molang. [Get learning!](https://bedrock.dev/docs/stable/Molang)
:::

## Block Permutations

Block permutations are a way of conditionally applying components to a block with Molang expressions.

_Released from experiment `Holiday Creator Features` for format versions 1.19.70 and higher._

<CodeHeader></CodeHeader>

```json
{
  "format_version": "1.20.10",
  "minecraft:block": {
    "description": {
      "identifier": "wiki:custom_block",
      "properties": {
        "wiki:custom_integer_property": [10, 20, 30, 40],
        "wiki:custom_boolean_property": [false, true],
        "wiki:custom_string_property": ["red", "green", "blue"]
      }
    },
    "components": { ... },
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

:::tip
Only one of each component can be active at once. Duplicate components will be overridden by the lowest permutation in the `permutations` array.
:::

List of block components, with usage examples:

-   [`minecraft:collision_box`](#minecraft-collision-box)
-   [`minecraft:crafting_table`](#minecraft-crafting-table)
-   [`minecraft:destructible_by_explosion`](#minecraft-destructible-by-explosion)
-   [`minecraft:destructible_by_mining`](#minecraft-destructible-by-mining)
-   [`minecraft:display_name`](#minecraft-display-name)
-   [`minecraft:flammable`](#minecraft-flammable)
-   [`minecraft:friction`](#minecraft-friction)
-   [`minecraft:geometry`](#minecraft-geometry)
-   [`minecraft:light_dampening`](#minecraft-light-dampening)
-   [`minecraft:light_emission`](#minecraft-light-emission)
-   [`minecraft:loot`](#minecraft-loot)
-   [`minecraft:map_color`](#minecraft-map-color)
-   [`minecraft:material_instances`](#minecraft-material-instances)
-   [`minecraft:placement_filter`](#minecraft-placement-filter)
-   [`minecraft:selection_box`](#minecraft-selection-box)
-   [`minecraft:transformation`](#minecraft-transformation)

### minecraft:collision_box

The block's entity collision box - may not exceed the unit (16&times;16&times;16) block size limitations.

_Released from experiment `Holiday Creator Features` for format versions 1.19.50 and higher._

<CodeHeader></CodeHeader>

```json
{
  "minecraft:collision_box": {
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

Turns your block into a new/custom Crafting Table.

_Released from experiment `Holiday Creator Features` for format versions 1.19.50 and higher._

<CodeHeader></CodeHeader>

```json
{
  "minecraft:crafting_table": {
    "table_name": "Example Crafting Table", // Name shown in GUI, can be translated
    "crafting_tags": ["crafting_table", "wiki_crafting_tag"] // Tags to be used within the recipe file
  }
}
```

### minecraft:destructible_by_explosion

How resistant your block is to being destroyed by explosions.

<CodeHeader></CodeHeader>

```json
{
  "minecraft:destructible_by_explosion": {
    "explosion_resistance": 20
  }
}
```

Or...

<CodeHeader></CodeHeader>

```json
{
  "minecraft:destructible_by_explosion": false // Cannot be destroyed by explosions
}
```

### minecraft:destructible_by_mining

Duration required to destroy block when being mined.

<CodeHeader></CodeHeader>

```json
{
  "minecraft:destructible_by_mining": {
    "seconds_to_destroy": 0.5
  }
}
```

Or...

<CodeHeader></CodeHeader>

```json
{
  "minecraft:destructible_by_mining": false // Cannot be destroyed by mining
}
```

### minecraft:display_name

Language file key that determines text that will be displayed when you hover over the block in your inventory and hotbar.

If the string given does not have a translation, the raw string given will be displayed.

**Note**: Minecraft may revert to using `tile.<identifier>.name` in some scenarios.

_Released from experiment `Holiday Creator Features` for format versions 1.19.60 and higher._

<CodeHeader></CodeHeader>

```json
{
  "minecraft:display_name": "tile.example_block.red.name"
}
```

<CodeHeader>RP/texts/en_US.lang</CodeHeader>

```c
tile.example_block.red.name=Red Example Block
```

### minecraft:flammable

Describes your block's flammability.

<CodeHeader></CodeHeader>

```json
{
  "minecraft:flammable": {
    "catch_chance_modifier": 5, // Affects chance that this block will catch flame when next to a fire
    "destroy_chance_modifier": 20 // Affects chance that this block will be destroyed by flames when on fire
  }
}
```

Or...

<CodeHeader></CodeHeader>

```json
{
  "minecraft:flammable": false // Default - your block will not catch fire, but can be directly ignited
}
```

### minecraft:friction

Describes your block's friction in a decimal range of `0.0` to `0.9`

### Vanilla Value Examples

-   Dirt: `0.4` (default)
-   Ice: `0.02`

<CodeHeader></CodeHeader>

```json
{
  "minecraft:friction": 0.4
}
```

### minecraft:geometry

The model that the block will use. Disables face culling.

**Custom block model limitations:**

-   Your block is limited to 30×30×30 pixels in size.

-   At least 1 pixel of your block on each axis must be contained by the base 16×16×16 block.

-   The absolute bounds of the position of your 30×30×30 block are 30 pixels in each direction from the origin. Your block can be placed in any position within these bounds, as long as it adheres to rule #2.

_Released from experiment `Holiday Creator Features` for format versions 1.19.40 and higher._

<CodeHeader></CodeHeader>

```json
{
  "minecraft:geometry": "geometry.example_block" // Geometry identifier from geo file in 'RP/models/entity' or 'RP/models/blocks' folder
}
```

---

**Bone Visibility**

Hide direct child cubes of bones in your model.

*Molang supported in `bone_visibility` for format versions 1.20.10 and higher.*

<CodeHeader></CodeHeader>

```json
{
  "minecraft:geometry": {
    "identifier": "geometry.example_block", // Geometry identifier from file in 'RP/models/entity' or 'RP/models/blocks' folder.
    "bone_visibility": {
      "wiki_bone": false, // Hide cubes in this bone
      "conditional_bone": "q.block_property('wiki:example_property') == 3", // Molang expressions can conditionally set visibility
      "another_bone": true // true is the default so has no effect.
    }
  }
}
```

### minecraft:light_dampening

Sets how much the light will be dampened when passed through the block (integer 0-15) - higher value means less light passes through.

### Vanilla Value Examples

-   Dirt & Tinted Glass: `15` (default)
-   Iron Bars & Glass Pane: `0`

```json
{
  "minecraft:light_dampening": 7
}
```

### minecraft:light_emission

Sets how much the light will be emitted by the block (integer 0-15).

### Vanilla Value Examples

-   Froglight: `15`
-   Redstone Torch (lit): `7`

```json
{
  "minecraft:light_emission": 10
}
```

### minecraft:loot

Loot to drop when destroyed (ignored by `Silk Touch` enchantment).

```json
{
  "minecraft:loot": "loot_tables/blocks/custom_block.json"
}
```

### minecraft:map_color

Block's appearance on a map as a hex string or RGB (0-255) array. If omitted, the block will be ignored by maps.

```json
{
  "minecraft:map_color": "#ffffff"
}
```

Or...

```json
{
  "minecraft:map_color": [255, 255, 255]
}
```

### minecraft:material_instances

Configures your block's rendering, primarily used to set textures.

**Note**: Block faces will unconditionally darken if intersecting another block.

Different parameters for `render_method` in `minecraft:material_instances` will - similar to entity runtime identifiers - affect certain properties of the block:

-   Inputting `opaque` will allow redstone to pass through, grass to decay, and on it, mobs' spawning.
-   Inputting `alpha_test` will **not** allow redstone to pass through, grass to decay, or mobs to spawn on it.
    -   `blend` has the same properties as `alpha_test`.
-   Creating a transparent block exhibiting `opaque` properties:

    Use `alpha_test`...

    ```json
    {
      "minecraft:material_instances": {
        "*": {
          "render_method": "alpha_test"
        }
      }
    }
    ```

    ...Then, simply link the textures via `RP/blocks.json`.

_Released from experiment `Holiday Creator Features` for format versions 1.19.40 and higher._

<CodeHeader></CodeHeader>

```json
{
  "minecraft:material_instances": {
    // '*' instance required - default instance for your block (also used for destruction particles)
    // Wildcards follow render controller syntax
    // Options 'up', 'down', and 'sides' are built in
    "*": {
      "texture": "texture_name", // References texture defined in `RP/textures/terrain_textures.json`
      "render_method": "blend", // 'opaque' or 'alpha_test', 'blend' or 'double_sided'
      "face_dimming": true, // Defaults to true; should this material be dimmed by the direction it's facing?
      "ambient_occlusion": true // Defaults to true; should shadows be created around and underneath the block?
    }
  }
}
```

Or...

<CodeHeader></CodeHeader>

```json
{
  "minecraft:material_instances": {
    "*": {
      "texture": "texture_name",
      "render_method": "blend" // Must match other instances
    },
    // Material instance name defined in model
    "wiki_front": {
      "texture": "texture_name_front",
      "render_method": "blend" // Must match other instances
    }
  }
}
```

:::tip
Material instance names can be defined on the face of any cube within Blockbench by right-clicking on a cube and opening its `Material Instances`.
:::

### minecraft:placement_filter

Configure conditions for a block to be able to survive.

If these conditions are not met, the block will not be placed, or if the block is already placed, it will pop off.

_Released from experiment `Holiday Creator Features` for format versions 1.19.60 and higher._

<CodeHeader></CodeHeader>

```json
{
  "minecraft:placement_filter": {
    "conditions": [
      {
        "allowed_faces": ["up"], // Can include 'up', 'down', 'north', 'east', 'south', 'west', and 'side'.
        "block_filter": [
          // Test for identifier
          "minecraft:dirt",
          // Test for tags
          { "tags": "!q.any_tag('stone', 'wiki_tag')" }
        ]
      }
    ]
  }
}
```

See [this](/blocks/block-tags) page for a list of vanilla tags and relevant blocks.

### minecraft:selection_box

The hitbox of the block to be targeted - may not exceed the unit (16&times;16&times;16) block size limitations.

_Released from experiment `Holiday Creator Features` for format versions 1.19.60 and higher._

<CodeHeader></CodeHeader>

```json
{
  "minecraft:selection_box": {
    "origin": [-8, 0, -8],
    "size": [16, 16, 16]
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

### minecraft:transformation

Allows for translation, scaling and rotation of blocks - both visual and functional.

<CodeHeader></CodeHeader>

```json
{
  "minecraft:transformation": {
    "translation": [-5, 8, 0],
    "rotation": [90, 180, 0],
    "scale": [0.5, 1, 0.5],
  }
}
```

:::tip
Visit [rotatable blocks](/blocks/rotatable-blocks) to learn how to apply rotation based on how blocks are placed (like furnaces and mob heads).
:::

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

For a list of many categories and groups, see [here](/documentation/creative-categories)