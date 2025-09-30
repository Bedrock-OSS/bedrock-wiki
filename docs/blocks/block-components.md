---
title: Block Components
description: Block components are used to change how your block appears and functions in the world.
category: General
nav_order: 2
license: true
mentions:
    - SirLich
    - solvedDev
    - yanasakana
    - SmokeyStack
    - MedicalJewel105
    - aexer0e
    - Chikorita-Lover
    - Lufurrius
    - TheDoctor15
    - XxPoggyisLitxX
    - TheItsNameless
    - ThomasOrs
    - Kaioga5
    - QuazChick
---

:::tip FORMAT & MIN ENGINE VERSION `1.21.110`
Using the latest format version when creating custom blocks provides access to fresh features and improvements.
The wiki aims to share up-to-date information about custom blocks, and currently targets format version `1.21.110`.
:::
:::danger OVERRIDING COMPONENTS
Only **one** instance of each component can be active at once.
Duplicate components will be overridden by the latest "[permutations](/blocks/block-permutations)" array entry.
:::

Block components are used to change how your block appears and functions in the world.

## Applying Components

Block components can be directly applied in the `components` child of `minecraft:block`, or per block [permutation](/blocks/block-permutations).

<CodeHeader>BP/blocks/lamp.json</CodeHeader>

```json
{
    "format_version": "1.21.110",
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
            "minecraft:geometry": {
                "identifier": "geometry.lamp",
                "culling": "wiki:culling.lamp"
            },
            "minecraft:material_instances": {
                "*": {
                    "texture": "wiki:lamp"
                },
                "shade": {
                    "texture": "wiki:lamp_shade"
                }
            }
        }
    }
}
```

## List of Vanilla Components

### Collision Box

Defines the area of the block that entities and particles collide with.

_Requires format version [1.19.50](/blocks/block-format-history#_1-19-50) or later._

#### Boolean Definition {#collision-box-boolean}

-   When `true` (default), a 16×16×16 collision box is used.
-   When `false`, the block's collision with entities is disabled.

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:collision_box": true
```

#### Object Definition {#collision-box-object}

-   `origin`: Vector [x, y, z]
    -   Bottom north-western corner of the collision box.
    -   Measured in pixels from the bottom center of the block unit.
    -   Must be in the range `[-8, 0, -8]` to `[8, 16, 8]`.
-   `size`: Vector [x, y, z]
    -   Size of each side of the collision box.
    -   Measured in pixels from the `origin` of the collision box.
    -   The sum of `origin` and `size` must be in the range `[-8, 0, -8]` to `[8, 16, 8]`.

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:collision_box": {
    "origin": [-8, 0, -8],
    "size": [16, 16, 16]
}
```

### Crafting Table

Turns your block into a crafting table, opening a functional crafting interface when interacted with.

_Requires format version [1.19.50](/blocks/block-format-history#_1-19-50) or later._

#### Object Definition {#crafting-table-object}

-   `crafting_tags`: String Array (required)
    -   Determines which recipes can be used by this crafting table.
    -   Recipes with any of the defined tags can be used in the crafting table.
    -   Custom tags should include a namespace (such as `wiki:workbench`) and can be up to 64 characters long.
    -   A maximum of 64 tags can be included.
-   `table_name`: String (optional)
    -   Specifies the language file key that maps to what text will be displayed above the crafting grid in the crafting table's interface.
    -   If a translation for the given string can not be resolved, the raw string will be displayed.
    -   If this field is omitted, the name displayed will default to the block's [display name](#display-name).

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:crafting_table": {
    "table_name": "Wiki Workbench",
    "crafting_tags": [
        "crafting_table",
        "wiki:workbench"
    ]
}
```

### Destructible by Explosion

Determines whether the block can be destroyed by explosions.

_Requires format version [1.19.20](/blocks/block-format-history#_1-19-20) or later._

#### Boolean Definition {#destructible-by-explosion-boolean}

-   When `true` (default), the block has an explosion resistance of `0`.
-   When `false`, the block cannot be destroyed by explosions.

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:destructible_by_explosion": false
```

#### Object Definition {#destructible-by-explosion-object}

-   `explosion_resistance`: Float (required)
    -   Defines how resistant the block is to being destroyed by explosions.
    -   Greater resistance reduces the chance of the block being destroyed when near an explosion.

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:destructible_by_explosion": {
    "explosion_resistance": 20
}
```

### Destructible by Mining

Determines how long it takes for players to mine the block.

_Requires format version [1.19.20](/blocks/block-format-history#_1-19-20) or later._

#### Boolean Definition {#destructible-by-mining-boolean}

-   When `true` (default), the block will be destroyed instantly when mined.
-   When `false`, the block cannot be destroyed by mining it.

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:destructible_by_mining": false
```

#### Object Definition {#destructible-by-mining-object}

-   `seconds_to_destroy`: Float
    -   Determines the "hardness" value of the block.
    -   Greater numbers result in greater mining times.

:::danger SECONDS TO DESTROY
The name of the `seconds_to_destroy` parameter is misleading.
While the name suggests that this parameter determines how many seconds it takes to destroy the block, in reality the parameter sets the "hardness" value of the block.

By default, the number of seconds it actually takes to destroy a custom block is 1.5× the value set here.
:::

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:destructible_by_mining": {
    "seconds_to_destroy": 20
}
```

### Destruction Particles

Determines the appearance of the particles created when hitting, destroying, stepping on and falling onto blocks.

_Requires format version [1.21.90](/blocks/block-format-history#_1-21-90) or later._

#### Object Definition {#destruction-particles-object}

-   `particle_count`: Integer (optional)
    -   Determines how many particles are created when the block is destroyed (0-255).
    -   By default, 100 particles are created.
-   `texture`: String (optional)
    -   Specifies the [texture atlas](/concepts/texture-atlases) shortname to use from `RP/textures/terrain_texture.json`.
    -   By default, particles will use the texture of the `down` material instance (or `*` if not specified).
-   `tint_method`: String (optional)
    -   Specifies the [tint method](/blocks/block-tinting#tint-methods) used to tint the `texture` based on the biome the block is placed in.

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:destruction_particles": {
    "texture": "wiki:particle_texture",
    "tint_method": "grass"
}
```

### Display Name

The language file key that determines text that will be displayed when you hover over the block in your inventory and hotbar.

-   If the given string does not have a translation, the raw string will be displayed.
-   Minecraft may revert to using `tile.<identifier>.name` in some scenarios, such as in the "can place on" tooltip.

_Requires format version [1.19.60](/blocks/block-format-history#_1-19-60) or later._

#### String Definition {#display-name-string}

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:display_name": "tile.wiki:custom_block.name"
```

<CodeHeader>RP/texts/en_US.lang</CodeHeader>

```lang
tile.wiki:custom_block.name=Custom Block
```

### Embedded Visual (EXPERIMENTAL) {#embedded-visual}

:::warning EXPERIMENTAL
This component requires "Upcoming Creator Features" to be enabled for your world.
:::
:::tip ROOT ONLY
This component may only be defined in the root `components` object of your block, so cannot be specified per permutation.
:::

Determines how this block is displayed when in a Flower Pot.
For a block to be able to be placed in a Flower Pot, it must also have the [flower pottable](#flower-pottable) component applied.

#### Object Definition {#embedded-visual-object}

-   `geometry`: String/Object
    -   The displayed [geometry](#geometry) component.
-   `material_instances`: Object
    -   The displayed [material instances](#material-instances) component.

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:embedded_visual": {
    "geometry": "minecraft:geometry.full_block",
    "material_instances": {
        "*": {
            "texture": "wiki:block_texture"
        }
    }
}
```

### Entity Fall On

Causes an [entity fall on](/blocks/block-events#entity-fall-on) event to be triggered when an entity falls onto the block.

_Requires format version [1.21.10](/blocks/block-format-history#_1-21-10) or later._

#### Object Definition {#entity-fall-on-object}

-   `min_fall_distance`: Float
    -   The minimum distance (in blocks) that an entity must fall in order to trigger the event.

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:entity_fall_on": {
    "min_fall_distance": 5
}
```

### Flammable

Determines how flammable the block is.

_Requires format version [1.19.10](/blocks/block-format-history#_1-19-10) or later._

#### Boolean Definition {#flammable-boolean}

When `true`, the block will be able to catch on fire naturally from neighbors.
When `false` (default), the block will not be able to catch on fire naturally from neighbors, but it can still be directly ignited.

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:flammable": true
```

#### Object Definition {#flammable-object}

-   `catch_chance_modifier`: Integer
    -   Affects chance that this block will catch flame when next to a fire.
    -   When 0, fire on the block will eventually burn out.
    -   When greater than 0, fire will continue to burn until the block is destroyed (or it will burn forever if the `destroy_chance_modifier` is 0).
    -   By default, this is set to 5 which is the same as vanilla planks.
-   `destroy_chance_modifier`: Integer
    -   Affects chance that this block will be destroyed by flames when on fire.

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:flammable": {
    "catch_chance_modifier": 5,
    "destroy_chance_modifier": 20
}
```

### Flower Pottable (EXPERIMENTAL) {#flower-pottable}

:::warning EXPERIMENTAL
This component requires "Upcoming Creator Features" to be enabled for your world.
:::
:::tip ROOT ONLY
This component may only be defined in the root `components` object of your block, so cannot be specified per permutation.
:::

Allows the block to be placed in a Flower Pot.
The [embedded visual](#embedded-visual) component can be used to change the appearance of the block when in a Flower Pot.

#### Object Definition {#flower-pottable-object}

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:flower_pottable": {}
```

### Friction

Determines how much an entity is slowed down when moving on top of the block (0.0-0.9).

_Requires format version [1.19.20](/blocks/block-format-history#_1-19-20) or later._

#### Float Definition {#friction-float}

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:friction": 0.4
```

### Geometry

Determines the geometry of this block and any culling rules that should be applied.
The geometry of blocks can also be set to any of the [vanilla block models](/blocks/vanilla-block-models).

**Custom block model limitations:**

1.  Your block is limited to 30×30×30 pixels in size.

2.  At least 1 pixel of your block on each axis must be contained within 16×16×16 block unit.

3.  The absolute bounds of the position of your 30×30×30 block are 30 pixels in each direction from the origin.
    Your block can be placed in any position within these bounds, as long as it adheres to rule #2.

_Requires format version [1.21.90](/blocks/block-format-history#_1-21-90) or later._

#### String Definition {#geometry-string}

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:geometry": "geometry.example_block"
```

#### Object Definition {#geometry-object}

-   `identifier`: String (required)
    -   The identifier of the geometry.
-   `bone_visibility`: Object (optional)
    -   A key-value map determining which bones in a model are visible.
    -   All bones are visible by default, meaning a value of `true` is redundant.
    -   Keys represent bone names (these do not support wildcards — you must specify the exact bone name)
    -   Values can either be a boolean or Molang expression string determining whether the bone is visible
        -   Molang expressions must adhere to [permutation condition](/blocks/block-permutations#permutation-conditions) limitations.
-   `culling`: String (optional)
    -   Determines the identifier of the culling rules that should be applied to the geometry.
    -   Culling identifiers should take the form `<namespace>:culling.<name>`.
-   `culling_layer`: String
    -   Determines the culling layer identifier to be checked for by the [`same_culling_layer`](/blocks/block-culling#same-culling-layer) culling rule condition.
    -   Culling layer identifiers should take the form `<namespace>:culling_layer.<name>`.
    -   When using the `minecraft` namespace, the only allowed culling layer identifiers are `minecraft:culling_layer.undefined` and `minecraft:culling_layer.leaves`.
-   `uv_lock`: String Array or Boolean (optional)
    -   Determines whether UVs should be locked to their original rotation when rotation from the [transformation](#transformation) component is applied.
    -   An array is used to list bone names that have locked UVs, a single boolean can be used to lock all UVs in the model.
    -   By default, rotation is applied to UVs.

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:geometry": {
    "identifier": "geometry.example_block",
    "culling": "wiki:culling.example_block",
    "bone_visibility": {
        "wiki_bone": false,
        "conditional_bone": "q.block_state('wiki:example_state') == 3",
        "another_bone": true
    }
}
```

### Item Visual

Determines how this block is displayed as an item.

_Requires format version [1.21.60](/blocks/block-format-history#_1-21-60) or later._

#### Object Definition {#item-visual-object}

-   `geometry`: String/Object
    -   The displayed [geometry](#geometry) component.
-   `material_instances`: Object
    -   The displayed [material instances](#material-instances) component.

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:item_visual": {
    "geometry": "minecraft:geometry.full_block",
    "material_instances": {
        "*": {
            "texture": "wiki:block_texture"
        }
    }
}
```

### Light Dampening

Determines the maximum number of light levels (0-15) that will be dampened when passing through the block, in a range.

_Requires format version [1.19.10](/blocks/block-format-history#_1-19-10) or later._

#### Integer Definition {#light-dampening-integer}

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:light_dampening": 15
```

### Light Emission

Determines the integer light level (0-15) emitted by the block.

_Requires format version [1.19.20](/blocks/block-format-history#_1-19-20) or later._

#### Integer Definition {#light-emission-integer}

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:light_emission": 10
```

### Liquid Detection

Determines how this blocks behaves with different types of liquid.

_Requires format version [1.21.60](/blocks/block-format-history#_1-21-60) or later._

#### Object Definition {#liquid-detection-object}

-   `detection_rules`: Array
    -   `liquid_type`: String
        -   Which type of liquid this rule applies to. Currently only `water` is supported.
    -   `can_contain_liquid`: Boolean
        -   Whether the liquid type can occupy the same space as this block e.g., waterlogging.
    -   `on_liquid_touches`: String
        -   Determines what happens when the liquid type flows into the block.
        -   `blocking` (default) prevents the liquid from flowing.
        -   `broken` causes the block is broken.
        -   `no_reaction` allows the liquid to flow through the block.
        -   `popped` causes the block to be popped off, dropping its loot.
    -   `stops_liquid_flowing_from_direction`: Array
        -   Determines an array of directions that the liquid cannot flow out of this block from.
        -   If `on_liquid_touches` is set to `no_reaction`, this array also determines the directions that the liquid cannot flow into this block from.

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:liquid_detection": {
    "detection_rules": [
        {
            "liquid_type": "water",
            "can_contain_liquid": true, // Waterloggable
            "on_liquid_touches": "no_reaction" // Water flows through the block like air
        }
    ]
}
```

### Loot

The path of the loot table to drop when the block is destroyed (ignored when a tool with the "Silk Touch" enchantment is used).
If omitted, the block is dropped as an item.

#### String Definition {#loot-string}

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:loot": "loot_tables/blocks/custom_block.json"
```

### Map Color

Defines a block's appearance when viewed on maps.
If omitted, the block is ignored by maps.

#### String Definition {#map-color-string}

A hex string (starting with a `#`) defining the `#RRGGBB` color of the block on a map.

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:map_color": "#FFFFFF"
```

#### Array Definition {#map-color-array}

An array of 3 integers (0-255) defining the `[R, G, B]` color of the block on a map.

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:map_color": [255, 255, 255]
```

#### Object Definition {#map-color-object}

-   `color`: String
    -   A hex string (starting with a `#`) defining the `#RRGGBB` color of the block on a map.
-   `tint_method`: String (optional)
    -   Specifies the [tint method](/blocks/block-tinting#tint-methods) used to tint the `color` based on the biome the block is placed in.

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:map_color": {
    "color": "#FFFFFF",
    "tint_method": "grass"
}
```

### Material Instances

Configuration of the block's rendering, including textures and lighting.

_Requires format version [1.19.40](/blocks/block-format-history#_1-19-40) or later._

**Known Issues:**

-   Ambient occlusion from surrounding blocks causes unnatural lighting on custom blocks. This is especially noticeable when the block model intersects surrounding blocks, causing faces to become dark.
-   In user interfaces, face dimming is applied before rotation from `item_display_transforms` in the block model.
-   Blocks do not render in the Structure Block preview.

#### Object Definition {#material-instances-object}

Each key is the name of a material instance and each value is a material instance object.
The `*` instance is the default instance for all cube faces, however it is not required if all faces have a material instance separately defined.

-   `<name>`{lang=xml}: Object
    -   `texture`: String
        -   Specifies the [texture atlas](/concepts/texture-atlases) shortname to use from `RP/textures/terrain_texture.json`.
    -   `render_method`: String (optional)
        -   The [render method](#render-methods) to use when rendering faces using the material instance.
        -   **All material instances must use the same render method.**
        -   By default, the `opaque` material instance is used.
    -   `tint_method`: String (optional)
        -   Specifies the [tint method](/blocks/block-tinting#tint-methods) used to tint the `texture` based on the biome the block is placed in.
    -   `ambient_occlusion`: Float (0.0-10.0) or Boolean (optional)
        -   Determines whether "smooth lighting" is applied to faces using the material instance.
        -   Float values can be used to determine ambient occlusion intensity.
        -   By default, this is `false` (or `0.0`) for blocks that emit light and `true` (or `1.0`) for blocks that do not emit light.
    -   `face_dimming`: Boolean (optional)
        -   Determines whether faces using the material instance are dimmed by their direction.
        -   By default, this is `false` for blocks that emit light and `true` for blocks that do not emit light.
    -   `isotropic`: Boolean (optional)
        -   Determines whether the UVs of faces using the material instance are randomly rotated based on the block's position in the world.
        -   By default, textures are not randomly rotated.

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:material_instances": {
    // Instance names "up", "down", "north", "east", "south" and "west" are built in.
    "*": {
        "texture": "wiki:texture_name", // Shortname defined in "RP/textures/terrain_texture.json".
        "render_method": "blend", // Support texture translucency
        "isotropic": true // Randomly rotate the texture
    }
}
```

#### Render Methods

Render methods essentially control how a block appears in the world, much like entity materials. Below are the key properties of each type:

| Render Method             | _Transparency_ | _Translucency_ | _Backface Culling_ | _Distant Culling_ | Vanilla Examples               |
| ------------------------- | :------------: | :------------: | :----------------: | :---------------: | ------------------------------ |
| `alpha_test`              |       ✔️       |       ❌       |         ❌         |        ✔️         | Ladder, Monster Spawner, Vines |
| `alpha_test_single_sided` |       ✔️       |       ❌       |         ✔️         |        ✔️         | Doors, Saplings, Trapdoors     |
| `blend`                   |       ✔️       |       ✔️       |         ✔️         |        ❌         | Glass, Beacon, Honey Block     |
| `double_sided`            |       ❌       |       ❌       |         ❌         |        ❌         | Powder Snow                    |
| `opaque` _(default)_      |       ❌       |       ❌       |         ✔️         |        ❌         | Dirt, Stone, Concrete          |

-   **_Transparency_** - fully see-through areas.
-   **_Translucency_** - semi-transparent areas.
-   **_Backface Culling_** - faces become invisible when viewed from behind.
-   **_Distant Culling_** - faces become invisible after reaching half the render distance.

##### Distance-Based Render Methods

| Render Method                       | _Near Appearance_         | _Far Appearance_ | Vanilla Examples |
| ----------------------------------- | ------------------------- | ---------------- | ---------------- |
| `alpha_test_to_opaque`              | `alpha_test`              | `opaque`         | Leaves           |
| `alpha_test_single_sided_to_opaque` | `alpha_test_single_sided` | `opaque`         | Kelp, Sugar Cane |
| `blend_to_opaque`                   | `blend`                   | `opaque`         | N/A              |

-   **_Near Appearance_** - the render method used before reaching half the render distance.
-   **_Far Appearance_** - the render method used after reaching half the render distance.

#### Custom Material Instance Names

:::tip
Custom material instance names can be defined on the faces of cubes within Blockbench by right-clicking on a cube and opening its `Material Instances`.

Learn more about applying different material instances [here](/blocks/block-models#changing-material-instances)!
:::

Custom instance names can be defined within material instances, and can be referenced by built-in instance names, or within the block model.

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:material_instances": {
    "*": {
        "texture": "wiki:texture_name",
        "render_method": "blend" // Must match other instances
    },
    // Custom instance name
    "end": {
        "texture": "wiki:texture_name_end",
        "render_method": "blend" // Must match other instances
    },
    "up": "end",
    "down": "end",
    // Instance name defined in model:
    "flower": {
        "texture": "wiki:texture_name_flower",
        "render_method": "blend" // Must match other instances
    }
}
```

### Movable

Determines how a block can be moved by pistons.

_Requires format version [1.21.100](/blocks/block-format-history#_1-21-100) or later._

#### Object Definition {#movable-object}

-   `movement_type`: String
    -   Can be one of the following values: `immovable`, `popped`, `push` or `push_pull` (default).
-   `sticky` String (optional)
    -   Can be set to `same` to replicate Slime/Honey Block functionality.

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:movable": {
    "movement_type": "popped" // Block is broken when pushed by a piston.
}
```

### Placement Filter

Determines the placement conditions that a block must be in to be able to survive.
If none of the specified conditions are met, the block will not be placed; or if the block is already placed, it will pop off as an item.

_Requires format version [1.19.60](/blocks/block-format-history#_1-19-60) or later._

#### Object Definition {#placement-filter-object}

-   `conditions`: Array
    -   List of condition objects specifying places where the block can be placed and survive without popping off as an item.
    -   A maximum of 64 conditions can be included.
    -   `allowed_faces`: Array
        -   The block faces that the block can be placed on
        -   Can include `all`, `side`, `up`, `down`, `north`, `south`, `west` and `east`.
    -   `block_filter`: Array
        -   Array of [block descriptors](/documentation/shared-constructs#block-descriptors) that the block can be placed against in the `allowed_faces` direction.
        -   See [this](/blocks/block-tags) page for a list of vanilla tags and relevant blocks.
        -   A maximum of 64 block descriptors can be included.

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:placement_filter": {
    "conditions": [
        {
            "allowed_faces": ["up"], // Must be placed on the top of any of the following blocks
            "block_filter": [
                "minecraft:dirt",
                {
                    "name": "minecraft:sand",
                    "states": {
                        "sand_type": "red"
                    }
                },
                {
                    "tags": "!q.any_tag('minecraft:crop', 'wiki:tag')"
                }
            ]
        }
    ]
}
```

### Random Offset

Causes a random offset to be applied to the block based on its position in the world, affecting the block's collision box, selection box and geometry.

**Offset models must not exceed the [block geometry limits](#geometry).**

_Requires format version [1.21.100](/blocks/block-format-history#_1-21-100) or later._

#### Object Definition {#random-offset-object}

-   `x`/`y`/`z`: Object (optional)
    -   `range`: [Range](/documentation/shared-constructs#range-objects)
        -   Determines how large offsets can be on each axis.
    -   `steps`: Integer
        -   Determines how many equally-spaced random values can be chosen across the `range`.
        -   A value of `0` means that any value within the `range` can be used.

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:random_offset": {
    "x": {
        "steps": 0,
        "range": {
            "min": -8,
            "max": 8
        }
    },
    "y": {
        "steps": 3,
        "range": {
            "min": -2,
            "max": 0
        }
    },
    "z": {
        "steps": 0,
        "range": {
            "min": -8,
            "max": 8
        }
    }
}
```

### Redstone Conductivity

Defines a block's ability to conduct redstone power.

_Requires format version [1.21.40](/blocks/block-format-history#_1-21-40) or later._

#### Object Definition {#redstone-conductivity-object}

-   `redstone_conductor`: Boolean
    -   Determines whether this block conducts direct redstone power.
-   `allows_wire_to_step_down`: Boolean
    -   Determines whether redstone wire can travel down the side of this block.

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:redstone_conductivity": {
    "redstone_conductor": true,
    "allows_wire_to_step_down": false
}
```

### Redstone Producer (EXPERIMENTAL) {#redstone-producer}

:::warning EXPERIMENTAL
This component requires "Upcoming Creator Features" to be enabled for your world.
:::

Causes the block to produce redstone power.

#### Object Definition {#redstone-producer-object}

-   `power`: Integer (0-15)
    -   Determines the power level produced by the block as an integer.
-   `strongly_powered_face`
    -   Determines the direction where strong power is produced.
    -   If strong power is received by a [redstone conductor](#redstone-conductivity), blocks surrounding the conductor will be powered (connected to the circuit).
-   `connected_faces`: String Array (optional)
    -   Determines which directions power is produced in.
    -   Defined as an array of faces which may include down, up, north, south, west and east.
    -   By default, all faces are connected.
-   `transform_relative`: Boolean (optional)
    -   Determines whether face directions should be relative to the rotation value in the [transformation](#transformation) component.
    -   By default, faces are not transform-relative.

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:redstone_producer": {
    "power": 15,
    "strongly_powered_face": "north",
    "transform_relative": true
}
```

### Replaceable

Allows this block to be replaced by attempting to place another block in its position.
Does not allow the block to be replaced by a block of the same permutation.

#### Object Definition {#replaceable-object}

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:replaceable": {}
```

### Selection Box

Defines the area of the block that can be selected by players.

_Requires format version [1.19.60](/blocks/block-format-history#_1-19-60) or later._

#### Boolean Definition {#selection-box-boolean}

-   When `true` (default), a 16×16×16 selection box is used.
-   When `false`, the block cannot be selected by players.

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:selection_box": true
```

#### Object Definition {#selection-box-object}

-   `origin`: Vector [x, y, z]
    -   Bottom north-western corner of the selection box.
    -   Measured in pixels from the bottom center of the block unit.
    -   Must be in the range `[-8, 0, -8]` to `[8, 16, 8]`.
-   `size`: Vector [x, y, z]
    -   Size of each side of the selection box.
    -   Measured in pixels from the `origin` of the selection box.
    -   The sum of `origin` and `size` must be in the range `[-8, 0, -8]` to `[8, 16, 8]`.

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:selection_box": {
    "origin": [-8, 0, -8],
    "size": [16, 16, 16]
}
```

### Tick

Causes the block to tick after a random delay in the range specified by `interval_range`.

_Requires format version [1.21.10](/blocks/block-format-history#_1-21-10) or later._

#### Object Definition {#tick-object}

-   `interval_range`: Range [min, max]
    -   Two durations (in ticks) which will be used as the minimum and maximum delays for randomness.
-   `looping`: Boolean
    -   Whether this block should continuously tick, rather than only ticking once.

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:tick": {
    "interval_range": [10, 20],
    "looping": true
}
```

### Transformation

Determines the transformation of the block's [geometry](#geometry), [collision box](#collision-box) and [selection box](#selection-box).

**Transformed models must not exceed the [block geometry limits](#geometry).**

_Requires format version [1.21.0](/blocks/block-format-history#_1-21-0) or later._

:::tip
Lean about [rotatable blocks](/blocks/rotatable-blocks) to apply rotation based on how the block is placed, just like furnaces and mob heads!
:::

#### Object Definition {#transformation-object}

-   `rotation`: Vector [x, y, z]
    -   The number of degrees to rotate the geometry by on each axis.
    -   Must be in increments of 90 (negative for anticlockwise rotation).
-   `rotation_pivot`: Vector [x, y, z]
    -   The pivot point (in block units) to rotate the block on.
    -   By default, rotation is around the center of the block.
-   `scale`: Vector [x, y, z]
    -   The factor to scale the geometry by on each axis.
-   `scale_pivot`: Vector [x, y, z]
    -   The pivot point (in block units) to scale the block on.
    -   By default, scale is from the center of the block.
-   `translation`: Vector [x, y, z]
    -   The number of block units to offset the geometry by on each axis.

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:transformation": {
    "translation": [-5, 8, 0 ],
    "rotation": [90, 180, 0],
    "rotation_pivot": [0, 0, 0],
    "scale": [0.5, 1, 0.5],
    "scale_pivot": [0, 0, 0]
}
```
