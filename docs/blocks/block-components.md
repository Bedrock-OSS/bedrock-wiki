---
title: Block Components
description: Block components are used to change how your block appears and functions in the world.
category: General
nav_order: 2
mentions:
    - SmokeyStack
    - QuazChick
    - SirLich
    - solvedDev
    - yanasakana
    - MedicalJewel105
    - aexer0e
    - SmokeyStack
    - Chikorita-Lover
    - Luthorius
    - TheDoctor15
    - XxPoggyisLitxX
    - TheItsNameless
    - ThomasOrs
    - Kaioga5
---

:::tip FORMAT & MIN ENGINE VERSION `1.20.20`
Using the latest format version when creating custom blocks provides access to fresh features and improvements. The wiki aims to share up-to-date information about custom blocks, and currently targets format version `1.20.20`.
:::
:::danger <nbsp/>
Only one instance of each component can be active at once. Duplicate components will be overridden by the latest [permutation](/blocks/block-permutations).
:::

Looking for event trigger components? [Find them here!](/blocks/block-events#event-triggers)

## Applying Components

Block components are used to change how your block appears and functions in the world. They are applied in the `components` child of `minecraft:block` or a [permutation](/blocks/block-permutations).

<CodeHeader>BP/blocks/lamp.json</CodeHeader>

```json
{
  "format_version": "1.20.20",
  "minecraft:block": {
    "description": {
      "identifier": "wiki:lamp",
      "menu_category": {
        "category": "items"
      }
    },
    "components": {
      "minecraft:light_dampening": 0,
      "minecraft:light_emission": 15,
      "minecraft:map_color": [210, 200, 190],
      "minecraft:geometry": "geometry.lamp",
      "minecraft:material_instances": {
        "*": {
          "texture": "lamp"
        },
        "shade": {
          "texture": "lamp_shade"
        }
      }
    }
  }
}
```

## Collision Box

The block's entity/particle collision box, measured in <abbr title="16ths of a block unit">pixels</abbr> - must be contained within the block unit (16&times;16&times;16).

-   Origin is measured from the horizontal middle and vertical bottom of your block, extending from the north-east.

-   Size is calculated from the origin point, extending from the north-east.

**May also be defined as a boolean:**

-   When `false`, entities can pass through the block.
-   When `true`, a unit-sized cube is set as the collision.

**Default value:** `true`

_Released from experiment `Holiday Creator Features` for format versions 1.19.50 and higher._

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:collision_box": {
  "origin": [-8, 0, -8],
  "size": [16, 16, 16]
}
```

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:collision_box": false
```

## Crafting Table

Turns your block into a crafting table, opening a functional crafting interface when interacted with.

_Released from experiment `Holiday Creator Features` for format versions 1.19.50 and higher._

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:crafting_table": {
  "table_name": "Wiki Workbench", // Name shown in crafting menu, can be translated
  "crafting_tags": ["crafting_table", "wiki_workbench"] // Tags to be used within the recipe file
}
```

## Destructible By Explosion

How resistant your block is to being destroyed by explosions.

**May also be defined as a boolean:**

-   When `false`, the block cannot be exploded.
-   When `true`, the block has an explosion resistance of `0`.

**Default value:** `true`

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:destructible_by_explosion": {
  "explosion_resistance": 20
}
```

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:destructible_by_explosion": false // Cannot be destroyed by explosions
```

## Destructible By Mining

Duration required to destroy block when being mined.

**May also be defined as a boolean:**

-   When `false`, the block cannot be mined.
-   When `true`, the block can be mined instantly.

**Default value:** `true`

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:destructible_by_mining": {
  "seconds_to_destroy": 0.5
}
```

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:destructible_by_mining": false // Cannot be destroyed by mining
```

## Display Name

Language file key that determines text that will be displayed when you hover over the block in your inventory and hotbar.

If the string given does not have a translation, the raw string given will be displayed.

**Note**: Minecraft may revert to using `tile.<identifier>.name` in some scenarios.

_Released from experiment `Holiday Creator Features` for format versions 1.19.60 and higher._

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:display_name": "tile.example_block.red.name"
```

<CodeHeader>RP/texts/en_US.lang</CodeHeader>

```c
tile.example_block.red.name=Red Example Block
```

## Flammable

Describes your block's flammability.

**May also be defined as a boolean:**

-   When `false`, the block will not catch on fire or be destroyed by fire.
-   When `true`, the example values below are used.

**Default value:** `false`

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:flammable": {
  "catch_chance_modifier": 5, // Affects chance that this block will catch flame when next to a fire
  "destroy_chance_modifier": 20 // Affects chance that this block will be destroyed by flames when on fire
}
```

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:flammable": false // Default - your block will not catch fire, but can be directly ignited
```

## Friction

Describes your block's friction in a decimal range of `0.0` to `0.9`. Less friction means a more slippery surface.

**Vanilla value examples:**

-   Dirt: `0.4`
-   Ice: `0.02`

**Default value:** `0.4`

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:friction": 0.4
```

## Geometry

The model that the block will use. Your model will not have any face culling applied when intersecting with other blocks.

**Custom block model limitations:**

-   Your block is limited to 30&times;30&times;30 <abbr title="16ths of a block unit">pixels</abbr> in size.

-   At least 1 pixel of your block on each axis must be contained by the base 16&times;16&times;16 block.

-   The absolute bounds of the position of your 30&times;30&times;30 block are 30 <abbr title="16ths of a block unit">pixels</abbr> in each direction from the origin. Your block can be placed in any position within these bounds, as long as it adheres to rule #2.

**When active:**

-   The block becomes breathable.
-   The block no longer conducts redstone power.

_Released from experiment `Holiday Creator Features` for format versions 1.19.40 and higher._

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:geometry": "geometry.example_block" // Geometry identifier from file in 'RP/models/entity' or 'RP/models/blocks' folder
```

---

### Bone Visibility

Hide direct child cubes of bones in your model.

**Molang expressions must adhere to [permutation condition](/blocks/block-permutations#permutation-conditions) limitations.**

_Molang expressions supported in `bone_visibility` for format versions 1.20.10 and higher._

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:geometry": {
  "identifier": "geometry.example_block", // Geometry identifier from file in 'RP/models/entity' or 'RP/models/blocks' folder.
  "bone_visibility": {
    "wiki_bone": false, // Hide cubes in this bone
    "conditional_bone": "q.block_state('wiki:example_state') == 3", // Molang expressions can conditionally set visibility
    "another_bone": true // true is the default so has no effect.
  }
}
```

## Light Dampening

Sets how much the light will be dampened when passed through the block (integer 0-15) - higher value means less light passes through.

**Vanilla value examples:**

-   Dirt & Tinted Glass: `15`
-   Iron Bars & Glass Panes: `0`

**Default value:** `15`

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:light_dampening": 7
```

## Light Emission

Sets how much the light will be emitted by the block (integer 0-15).

**Vanilla value examples:**

-   Froglight: `15`
-   Redstone Torch (lit): `7`

**Default value:** `0`

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:light_emission": 10
```

## Loot

Loot to drop when destroyed (ignored by `Silk Touch` enchantment).

**If omitted, drops the block as an item.**

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:loot": "loot_tables/blocks/custom_block.json"
```

## Map Color

Block's appearance on a map as a hex string or [R, G, B] (0-255) array.

**If omitted, the block is ignored by maps.**

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:map_color": "#ffffff"
```

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:map_color": [255, 255, 255]
```

## Material Instances

Configuration of your block's rendering, including textures and lighting.

-   All instances must have the same render method.
-   Block faces will unconditionally darken if intersecting another block.

Material instances can be combined with `RP/blocks.json` entries to create blocks which exhibit opaque-like properties. This is primarily used to enable face culling on [custom glass blocks](/blocks/custom-glass-blocks).

_Released from experiment `Holiday Creator Features` for format versions 1.19.40 and higher._

### Render Methods

Render methods essentially control how a block appears in the world, much like entity materials. Below are the key properties of each type:

| Render Method      | _Transparency_ | _Translucency_ | _Backface Culling_ | Vanilla Examples                |
| ------------------ | -------------- | -------------- | ------------------ | ------------------------------- |
| opaque _(default)_ | ❌             | ❌             | ✔️                 | Dirt, Stone, Concrete.          |
| double_sided       | ❌             | ❌             | ❌                 | N/A - Use for opaque 2D plains. |
| alpha_test         | ✔️             | ❌             | ❌                 | Vines, Rails, Saplings.         |
| blend              | ✔️             | ✔️             | ✔️                 | Glass, Beacon, Honey Block.     |

-   _Transparency_ - fully see-through areas.

-   _Translucency_ - semi-transparent areas.

-   _Backface Culling_ - faces become invisible when viewed from behind.
    -   Render methods without backface culling disappear at a distance (based on render distance).

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:material_instances": {
  // '*' instance required - default instance for your block (also used for destruction particles)
  // Wildcards follow render controller syntax
  // Instance names 'up', 'down', 'north', 'east', 'south' and 'west' are built in
  "*": {
    "texture": "texture_name", // Shortname defined in `RP/textures/terrain_textures.json`
    "render_method": "blend", // One of the render methods in the above table
    "face_dimming": true, // Defaults to true; should this material be dimmed by the direction it's facing?
    "ambient_occlusion": true // Defaults to true; should shadows be created based on surrounding blocks?
  }
}
```

### Custom Instance Names

:::tip
Custom material instance names can be defined on the faces of cubes within Blockbench by right-clicking ona cube and opening its `Material Instances`.
:::

Custom instance names can be defined within material instances, and can be referenced by built-in instance names, or within the block model.

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:material_instances": {
  "*": {
    "texture": "texture_name",
    "render_method": "blend" // Must match other instances
  },
  // Custom instance name
  "end": {
    "texture": "texture_name_end",
    "render_method": "blend" // Must match other instances
  },
  "up": "end",
  "down": "end",
  // Instance name defined in model:
  "flower": {
    "texture": "texture_name_flower",
    "render_method": "blend" // Must match other instances
  }
}
```

## Placement Filter

Configure conditions for a block to be able to survive. If these conditions are not met, the block will not be placed, or if the block is already placed, it will pop off.

**If omitted, the block can be placed and survive on any surface.**

_Released from experiment `Holiday Creator Features` for format versions 1.19.60 and higher._

<CodeHeader>minecraft:block > components</CodeHeader>

```json
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
```

See [this](/blocks/block-tags) page for a list of vanilla tags and relevant blocks.

## Selection Box

The selectable area (hitbox) of the block, measured in <abbr title="16ths of a block unit">pixels</abbr> - must be contained within the block unit (16&times;16&times;16).

-   Origin is measured from the horizontal middle and vertical bottom of your block, extending from the north-east.
-   Size is calculated from the origin point, extending from the north-east.

**May also be defined as a boolean:**

-   When `false`, entities can pass through the block.
-   When `true`, a unit-sized cube is set as the collision.

**Default value:** `true`

_Released from experiment `Holiday Creator Features` for format versions 1.19.60 and higher._

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:selection_box": {
  "origin": [-8, 0, -8],
  "size": [16, 16, 16]
}
```

Or..

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:selection_box": false
```

## Transformation

Allows for translation (movement), scaling and rotation of blocks - both visual and functional.

**Transformed models must not exceed the [block geometry limits](#geometry).**

:::tip
Lean about [rotatable blocks](/blocks/rotatable-blocks) to apply rotation based on how the block is placed, just like furnaces and mob heads!
:::

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:transformation": {
  "translation": [-5, 8, 0],
  "rotation": [90, 180, 0],
  "scale": [0.5, 1, 0.5],
}
```

## Unit Cube (EXPERIMENTAL)

:::warning EXPERIMENTAL
This component requires the `Holiday Creator Features` experiment to be enabled and is expected to be removed/changed in the future.
:::

Turns the block into a 16&times;16&times;16 cube, overriding `minecraft:geometry`.

**When active:**

-   The block becomes non-breathable.
-   The block conducts redstone power.

**If your block's texture/model doesn't need to change based on permutation, define textures in `RP/blocks.json` to avoid using this experimental component.**

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:unit_cube": {}
```
