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

:::tip FORMAT VERSION 1.26.40
Using the latest format version when creating custom blocks provides access to fresh features and improvements.
The wiki aims to share up-to-date information about custom blocks, and currently targets format version 1.26.40.
:::
:::danger OVERRIDING COMPONENTS
Only **one** instance of each component can be active at once.
Duplicate components will be overridden by the latest [`permutations`](/blocks/block-permutations) array entry.
:::

Block components are used to change how your block appears and functions in the world.

## Applying Components

Block components can be directly applied in the `components` child of `minecraft:block`, or per block [permutation](/blocks/block-permutations).

<CodeHeader path="BP/blocks/lamp.json" />

```json
{
    "format_version": "1.26.40",
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

### Chest Obstruction

Determines when the opening of chests placed below the block should be obstructed.

_Requires format version [1.26.20](/blocks/block-format-history#_1-26-20) or later._

#### Object Format {#chest-obstruction-object}

-   `obstruction_rule` — String
    -   `"always"`{lang=json} prevents chests from opening.
    -   `"never"`{lang=json} allows chests to open.
    -   `"shape"`{lang=json} (default) checks the block's [collision box](#collision-box) to determine whether chests should be able to open.

<CodeHeader breadcrumbs="minecraft:block/components" />

```json
"minecraft:chest_obstruction": {
    "obstruction_rule": "always"
}
```

### Collision Box

Defines the area of the block that entities and particles collide with.

_Requires format version [1.19.50](/blocks/block-format-history#_1-19-50) or later._

#### Boolean Format {#collision-box-boolean}

-   When `true`{lang=json} (default), a 16×16×16 collision box is used.
-   When `false`{lang=json}, the block's collision with entities is disabled.

<CodeHeader breadcrumbs="minecraft:block/components" />

```json
"minecraft:collision_box": true
```

#### Object Format {#collision-box-object}

-   `origin` — Vector `[X, Y, Z]`{lang=js}
    -   Bottom north-western corner of the collision box.
    -   Measured in pixels from the bottom center of the block unit.
    -   Must be in the range `[-8, 0, -8]`{lang=json} to `[8, 16, 8]`{lang=json}.
-   `size` — Vector `[X, Y, Z]`{lang=js}
    -   Size of each side of the collision box.
    -   Measured in pixels from the `origin` of the collision box.
    -   The sum of `origin` and `size` must be in the range `[-8, 0, -8]`{lang=json} to `[8, 24, 8]`{lang=json}.

<CodeHeader breadcrumbs="minecraft:block/components" />

```json
"minecraft:collision_box": {
    "origin": [-8, 0, -8],
    "size": [16, 16, 16]
}
```

#### Array Format {#collision-box-array}

An array of up to 16 object collision box definitions.
Setting this to an empty array results in a full block collision.

<CodeHeader breadcrumbs="minecraft:block/components" />

```json
"minecraft:collision_box": [
    {
        "origin": [-4, 8, -4],
        "size": [8, 8, 8]
    },
    {
        "origin": [-8, 0, -8],
        "size": [16, 8, 16]
    }
]
```

### Connection Rule

Determines whether other blocks such as fences and walls can connect to the block.

_Requires format version [1.26.0](/blocks/block-format-history#_1-26-0) or later._

#### Object Format {#connection-rule-object}

-   `accepts_connections_from` — String (optional)
    -   `"all"`{lang=json} (default) allows any block to connect to the block.
    -   `"only_fences"`{lang=json} only allows fences to connect to the block, preventing other blocks such as walls and glass panes from connecting.
    -   `"none"`{lang=json} prevents all blocks from connecting.
-   `enabled_directions` — Array (optional)
    -   Lists the cardinal directions from which other blocks can connect to the block.
    -   By default, blocks can connect from any cardinal direction.

<CodeHeader breadcrumbs="minecraft:block/components" />

```json
"minecraft:connection_rule": {
    "accepts_connections_from": "only_fences",
    "enabled_directions": ["north", "east", "south", "west"]
}
```

### Crafting Table

Turns your block into a crafting table, opening a functional crafting interface when interacted with.

_Requires format version [1.19.50](/blocks/block-format-history#_1-19-50) or later._

#### Object Format {#crafting-table-object}

-   `crafting_tags` — Array
    -   Determines which recipes can be used by this crafting table based on an array of tag strings.
    -   Recipes with any of the defined tags can be used in the crafting table.
    -   Custom tags should include a namespace (such as `"wiki:workbench"`{lang=json}) and can be up to 64 characters long.
    -   A maximum of 64 tags can be included.
-   `table_name` — String (optional)
    -   Specifies the language file key that maps to what text will be displayed above the crafting grid in the crafting table's interface.
    -   If a translation for the given string can not be resolved, the raw string will be displayed.
    -   When omitted, the name displayed will default to the block's [display name](#display-name).

<CodeHeader breadcrumbs="minecraft:block/components" />

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

#### Boolean Format {#destructible-by-explosion-boolean}

-   When `true`{lang=json} (default), the block has an explosion resistance of 0.
-   When `false`{lang=json}, the block cannot be destroyed by explosions.

<CodeHeader breadcrumbs="minecraft:block/components" />

```json
"minecraft:destructible_by_explosion": false
```

#### Object Format {#destructible-by-explosion-object}

-   `explosion_resistance` — Float
    -   Defines how resistant the block is to being destroyed by explosions.
    -   Greater resistance reduces the chance of the block being destroyed when near an explosion.

<CodeHeader breadcrumbs="minecraft:block/components" />

```json
"minecraft:destructible_by_explosion": {
    "explosion_resistance": 20
}
```

### Destructible by Mining

Determines how long it takes for players to mine the block.

_Requires format version [1.19.20](/blocks/block-format-history#_1-19-20) or later._

#### Boolean Format {#destructible-by-mining-boolean}

-   When `true`{lang=json} (default), the block will be destroyed instantly when mined.
-   When `false`{lang=json}, the block cannot be destroyed by mining it.

<CodeHeader breadcrumbs="minecraft:block/components" />

```json
"minecraft:destructible_by_mining": false
```

#### Object Format {#destructible-by-mining-object}

-   `seconds_to_destroy` — Float
    -   Determines the "hardness" value of the block.
    -   Greater numbers result in greater mining times.

:::danger SECONDS TO DESTROY
The name of the `seconds_to_destroy` parameter is misleading.
While the name suggests that this parameter determines how many seconds it takes to destroy the block, in reality the parameter sets the "hardness" value of the block.

By default, the number of seconds it actually takes to destroy a custom block is 1.5× the value set here.
:::

<CodeHeader breadcrumbs="minecraft:block/components" />

```json
"minecraft:destructible_by_mining": {
    "seconds_to_destroy": 20
}
```

### Destruction Particles

Determines the appearance of the particles created when hitting, destroying, stepping on and falling onto blocks.

_Requires format version [1.21.90](/blocks/block-format-history#_1-21-90) or later._

#### Object Format {#destruction-particles-object}

-   `particle_count` — Integer (optional)
    -   Determines how many particles are created when the block is destroyed (`0-255`{lang=json}).
    -   By default, `100`{lang=json} particles are created.
-   `texture` — String (optional)
    -   Specifies the [texture atlas](/concepts/texture-atlases) shortname to use from `RP/textures/terrain_texture.json`.
    -   By default, particles will use the texture of the `down` material instance (or `*` if not specified).
-   `tint_method` — String (optional)
    -   Specifies the [tint method](/blocks/block-tinting#tint-methods) used to tint the `texture` based on the biome the block is placed in.

<CodeHeader breadcrumbs="minecraft:block/components" />

```json
"minecraft:destruction_particles": {
    "texture": "wiki:particle_texture",
    "tint_method": "grass"
}
```

### Display Name

The language file key that determines text that will be displayed when you hover over the block in your inventory and hotbar.

-   If the given string does not have a translation, the raw string will be displayed.
-   Minecraft may revert to using `tile.<identifier>.name`{lang=xml} in some scenarios, such as in the "can place on" tooltip.

_Requires format version [1.19.60](/blocks/block-format-history#_1-19-60) or later._

#### String Format {#display-name-string}

<CodeHeader breadcrumbs="minecraft:block/components" />

```json
"minecraft:display_name": "tile.wiki:custom_block.name"
```

<CodeHeader path="RP/texts/en_US.lang" />

```lang
tile.wiki:custom_block.name=Custom Block
```

### Embedded Visual

:::tip ROOT ONLY
This component may only be defined in the root `components` object of your block, so cannot be specified per permutation.
:::

Determines how this block is displayed when in a Flower Pot.
For a block to be able to be placed in a Flower Pot, it must also have the [flower pottable](#flower-pottable) component applied.

#### Object Format {#embedded-visual-object}

-   `geometry` — String / Object
    -   The displayed [geometry](#geometry) component.
-   `material_instances` — Object
    -   The displayed [material instances](#material-instances) component.

<CodeHeader breadcrumbs="minecraft:block/components" />

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

#### Object Format {#entity-fall-on-object}

-   `min_fall_distance` — Float
    -   The minimum distance (in blocks) that an entity must fall in order to trigger the event.

<CodeHeader breadcrumbs="minecraft:block/components" />

```json
"minecraft:entity_fall_on": {
    "min_fall_distance": 5
}
```

### Flammable

Determines how flammable the block is.

_Requires format version [1.26.20](/blocks/block-format-history#_1-26-20) or later._

#### Boolean Format {#flammable-boolean}

When `true`, the block will be able to catch on fire naturally from neighbors.
When `false` (default), the block will not be able to catch on fire naturally from neighbors, but it can still be directly ignited.

<CodeHeader breadcrumbs="minecraft:block/components" />

```json
"minecraft:flammable": true
```

#### Object Format {#flammable-object}

-   `catch_chance_modifier` — Integer
    -   Affects chance that this block will catch flame when next to a fire.
    -   When `0`{lang=json}, fire on the block will eventually burn out.
    -   When greater than `0`{lang=json}, fire will continue to burn until the block is destroyed (or it will burn forever if the `destroy_chance_modifier` is `0`{lang=json}).
    -   By default, this is set to `5`{lang=json} which is the same as vanilla planks.
-   `destroy_chance_modifier` — Integer
    -   Affects chance that this block will be destroyed by flames when on fire.
-   `lava_flammable` — String
    -   Determines when fire can spread to the block from lava.
    -   Can be set to `"always"`{lang=json} or `"never"`{lang=json} (default).

<CodeHeader breadcrumbs="minecraft:block/components" />

```json
"minecraft:flammable": {
    "catch_chance_modifier": 5,
    "destroy_chance_modifier": 20,
    "lava_flammable": "always"
}
```

### Flower Pottable

:::tip ROOT ONLY
This component may only be defined in the root `components` object of your block, so cannot be specified per permutation.
:::

Allows the block to be placed in a Flower Pot.
The [embedded visual](#embedded-visual) component can be used to change the appearance of the block when in a Flower Pot.

_Requires format version [1.26.20](/blocks/block-format-history#_1-26-20) or later._

#### Object Format {#flower-pottable-object}

<CodeHeader breadcrumbs="minecraft:block/components" />

```json
"minecraft:flower_pottable": {}
```

### Friction

Determines how slippery the block is for entities moving on top (`0.0-0.9`{lang=js}).
Lower values mean the block is more slippery.

:::warning MOVEMENT SPEED
This component is somewhat broken. While it works correctly on boats, higher friction values cause other entities to speed up rather than slow down.
:::

_Requires format version [1.19.20](/blocks/block-format-history#_1-19-20) or later._

#### Float Format {#friction-float}

<CodeHeader breadcrumbs="minecraft:block/components" />

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

#### String Format {#geometry-string}

<CodeHeader breadcrumbs="minecraft:block/components" />

```json
"minecraft:geometry": "geometry.example_block"
```

#### Object Format {#geometry-object}

-   `identifier` — String
    -   The identifier of the geometry.
-   `bone_visibility` — Object (optional)
    -   A key-value map determining which bones in a model are visible.
    -   Keys represent bone names (these do not support wildcards — you must specify the exact bone name)
    -   Values can either be a boolean or Molang expression string determining whether the bone is visible
        -   All bones are visible by default, meaning a value of `true`{lang=json} is redundant.
        -   Molang expressions must adhere to [permutation condition](/blocks/block-permutations#permutation-conditions) limitations.
-   `culling` — String (optional)
    -   Determines the identifier of the culling rules that should be applied to the geometry.
    -   Culling identifiers should take the form `<namespace>:culling.<name>`{lang=xml}.
-   `culling_layer` — String (optional)
    -   Determines the culling layer identifier to be checked for by the [same culling layer](/blocks/block-culling#same-culling-layer) condition in culling rules.
    -   Culling layer identifiers should take the form `<namespace>:culling_layer.<name>`{lang=xml}.
    -   When using the `minecraft` namespace, only the following values are allowed:
        -   `"minecraft:culling_layer.undefined"`{lang=json} is the culling layer of blocks that have none defined.
        -   `"minecraft:culling_layer.leaves"`{lang=json} is the culling layer of all vanilla leaves and should be used when creating custom leaves.
-   `culling_shape` — String (optional)
    -   The voxel shape to check against when culling adjacent blocks.
    -   This parameter may only be set to `"minecraft:unit_cube"`{lang=json} if a [vanilla full block model](/blocks/vanilla-block-models) is being used.
-   `n_way_visual_rotation` — Object (optional)
    -   This parameter may only be used from within the root `components` object, not within `permutations` entries.
    -   Keys are axes (`x`, `y` or `z`) and values are state names (e.g. `"minecraft:sixteen_way_rotation"`{lang=json}).
    -   Learn more about N-way rotation [here](/blocks/n-way-rotation).
-   `uv_lock` — Array / Boolean (optional)
    -   Determines whether UVs should be locked to their original rotation when rotation from the [transformation](#transformation) component is applied.
    -   When `false`{lang=json} (default), all UVs in the model will follow the block's rotation.
    -   When `true`{lang=json}, all UVs in the model will have locked rotation.
    -   When an array is used, all UVs in the listed bones will have locked rotation.

<CodeHeader breadcrumbs="minecraft:block/components" />

```json
"minecraft:geometry": {
    "identifier": "geometry.example_block",
    "culling": "wiki:culling.example_block",
    "bone_visibility": {
        "wiki_bone": false,
        "conditional_bone": "q.block_state('wiki:example_state') == 3",
        "another_bone": true
    },
    "uv_lock": ["locked_bone"]
}
```

### Instrument Sound

Determines the sound played when a Note Block is placed above or below the block.

#### Object Format {#instrument-sound-object}

At least one of the following parameters is required:

-   `up` — [Instrument Sound](#instrument-sounds)
    -   Determines the instrument heard when the Note Block is placed above the block.
    -   By default, this is set to `"note.harp"`{lang=json}.
-   `down` — [Instrument Sound](#instrument-sounds)
    -   Determines the instrument heard when the Note Block is placed below the block.
    -   This sound overrides the sound of blocks placed below the Note Block.
    -   By default, this is set to `"note.none"`{lang=json}.

<CodeHeader breadcrumbs="minecraft:block/components" />

```json
"minecraft:instrument_sound": {
    "up": "note.didgeridoo"
}
```

#### Instrument Sounds

| Value                                 | Sound                  |
| ------------------------------------- | ---------------------- |
| `"note.banjo"`{lang=json}             | Banjo                  |
| `"note.bassattack"`{lang=json}        | Bass                   |
| `"note.bd"`{lang=json}                | Bass drum              |
| `"note.bell"`{lang=json}              | Bell                   |
| `"note.bit"`{lang=json}               | Bit                    |
| `"note.chime"`{lang=json}             | Chime                  |
| `"note.cow_bell"`{lang=json}          | Cow bell               |
| `"note.creeper"`{lang=json}           | Creeper hiss           |
| `"note.didgeridoo"`{lang=json}        | Didgeridoo             |
| `"note.enderdragon"`{lang=json}       | Ender dragon roar      |
| `"note.flute"`{lang=json}             | Flute                  |
| `"note.guitar"`{lang=json}            | Guitar                 |
| `"note.harp"`{lang=json}              | Harp                   |
| `"note.hat"`{lang=json}               | Hi-hat                 |
| `"note.iron_xylophone"`{lang=json}    | Iron xylophone         |
| `"note.none"`{lang=json}              | None                   |
| `"note.piglin"`{lang=json}            | Piglin snort           |
| `"note.pling"`{lang=json}             | Pling                  |
| `"note.skeleton"`{lang=json}          | Skeleton rattle        |
| `"note.snare"`{lang=json}             | Snare drum             |
| `"note.trumpet"`{lang=json}           | Trumpet                |
| `"note.trumpet_exposed"`{lang=json}   | Trumpet (exposed)      |
| `"note.trumpet_oxidized"`{lang=json}  | Trumpet (oxidized)     |
| `"note.trumpet_weathered"`{lang=json} | Trupet (weathered)     |
| `"note.witherskeleton"`{lang=json}    | Wither skeleton rattle |
| `"note.xylophone"`{lang=json}         | Xylophone              |
| `"note.zombie"`{lang=json}            | Zombie moan            |

### Item Visual

Determines how this block is displayed as an item.

_Requires format version [1.21.60](/blocks/block-format-history#_1-21-60) or later._

#### Object Format {#item-visual-object}

-   `geometry` — Object / String
    -   The displayed [geometry](#geometry) component.
-   `material_instances` — Object
    -   The displayed [material instances](#material-instances) component.

<CodeHeader breadcrumbs="minecraft:block/components" />

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

### Leashable

Allows leads and balloons to be attached to the block like fences.

_Requires format version [1.26.0](/blocks/block-format-history#_1-26-0) or later._

#### Object Format {#leashable-object}

-   `offset` — Vector `[X, Y, Z]`{lang=js} (optional)
    -   Determines the position of the middle of the knot relative to the bottom middle of the block.

<CodeHeader breadcrumbs="minecraft:block/components" />

```json
"minecraft:leashable": {
    "offset": [0, 12, 0]
}
```

### Light Dampening

Determines the maximum number of light levels (`0-15`{lang=js}) that will be dampened when passing through the block, in a range.

_Requires format version [1.19.10](/blocks/block-format-history#_1-19-10) or later._

#### Integer Format {#light-dampening-integer}

<CodeHeader breadcrumbs="minecraft:block/components" />

```json
"minecraft:light_dampening": 15
```

### Light Emission

Determines the integer light level (`0-15`{lang=js}) emitted by the block.

_Requires format version [1.19.20](/blocks/block-format-history#_1-19-20) or later._

#### Integer Format {#light-emission-integer}

<CodeHeader breadcrumbs="minecraft:block/components" />

```json
"minecraft:light_emission": 10
```

### Liquid Detection

Determines how this blocks behaves with different types of liquid.

_Requires format version [1.26.0](/blocks/block-format-history#_1-26-0) or later._

#### Object Format {#liquid-detection-object}

-   `detection_rules` — Array
    -   `liquid_type` — String
        -   Which type of liquid this rule applies to. Currently only `"water"`{lang=json} is supported.
    -   `can_contain_liquid` — Boolean
        -   Whether the liquid type can occupy the same space as this block e.g., [waterlogging](/blocks/block-colocation#waterlogging).
    -   `on_liquid_touches` — String (optional)
        -   Determines what happens when the liquid type flows into the block based on one of the following values:
            -   `"blocking"`{lang=json} (default) prevents the liquid from flowing.
            -   `"broken"`{lang=json} causes the block to be broken.
            -   `"no_reaction"`{lang=json} allows the liquid to flow through the block.
            -   `"popped"`{lang=json} causes the block to be popped off, dropping its loot.
    -   `stops_liquid_flowing_from_direction` — Array (optional)
        -   Determines an array of directions that the liquid cannot flow out of this block from.
        -   If `on_liquid_touches` is set to `"no_reaction"`{lang=json}, this array also determines the directions that the liquid cannot flow into this block from.
    -   `use_liquid_clipping` — Boolean (optional)
        -   Determines whether liquid contained in the block is visually clipped based on the block's encompassing collider (the smallest box containing all [collision boxes](#collision-box)).
        -   By default, liquid is not clipped.

<CodeHeader breadcrumbs="minecraft:block/components" />

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

#### String Format {#loot-string}

<CodeHeader breadcrumbs="minecraft:block/components" />

```json
"minecraft:loot": "loot_tables/blocks/custom_block.json"
```

### Map Color

Defines a block's appearance when viewed on maps.
If omitted, the block is ignored by maps.

#### String Format {#map-color-string}

A hex string (starting with a `#`) defining the `#RRGGBB` color of the block on a map.

<CodeHeader breadcrumbs="minecraft:block/components" />

```json
"minecraft:map_color": "#FFFFFF"
```

#### Array Format {#map-color-array}

An array of 3 integers (`0-255`{lang=js}) defining the `[R, G, B]`{lang=js} color of the block on a map.

<CodeHeader breadcrumbs="minecraft:block/components" />

```json
"minecraft:map_color": [255, 255, 255]
```

#### Object Format {#map-color-object}

-   `color` — Array / String
    -   An array of 3 integers (`0-255`{lang=js}) defining the `[R, G, B]`{lang=js} color of the block on a map.
    -   A hex string (starting with a `#`) defining the `#RRGGBB` color of the block on a map.
-   `tint_method` — String (optional)
    -   Specifies the [tint method](/blocks/block-tinting#tint-methods) used to tint the `color` based on the biome the block is placed in.

<CodeHeader breadcrumbs="minecraft:block/components" />

```json
"minecraft:map_color": {
    "color": "#FFFFFF",
    "tint_method": "grass"
}
```

### Material Instances

Defines the [material instances](/blocks/block-visuals-intro#material-instances) of a block, configuring how parts of the block are rendered.

_Requires format version [1.26.20](/blocks/block-format-history#_1-26-20) or later._

**Known Issues:**

-   Ambient occlusion does not perfectly match vanilla blocks, meaning custom blocks may appear darker/lighter than surrounding vanilla blocks ([MCPE-237493](https://bugs.mojang.com/browse/MCPE-237493)).
-   In user interfaces, face dimming is applied before rotation from `item_display_transforms` in the block model ([MCPE-235788](https://bugs.mojang.com/browse/MCPE-235788)).
-   PBR textures are not supported by custom blocks when rendered as entities (when held, in item frames, on ground, etc.) ([MCPE-237517](https://bugs.mojang.com/browse/MCPE-237517)).

#### Object Format {#material-instances-object}

Each key is the name of a material instance and each value is a material instance object.
The `*` instance is the default instance for all cube faces, however it is not required if all faces have a material instance separately defined.

-   `<name>`{lang=xml} — Object
    -   `texture` — String
        -   Specifies the [texture atlas](/concepts/texture-atlases) shortname to use from `RP/textures/terrain_texture.json`.
    -   `render_method` — String (optional)
        -   The [render method](/blocks/block-visuals-intro#render-methods) to use when rendering faces using the material instance.
        -   **All material instances must use the same render method.**
        -   By default, the `opaque` render method is used.
    -   `tint_method` — String (optional)
        -   Specifies the [tint method](/blocks/block-tinting#tint-methods) used to tint the `texture` based on the biome the block is placed in.
    -   `alpha_masked_tint` — Boolean (optional)
        -   Determines whether the intensity of the tint applied by tint methods should be based on the alpha channel of the texture.
        -   When `true`{lang=json}, a `tint_method` must be specified (that is not `"none"`{lang=json}) and the `render_method` must be `"opaque"`{lang=json}.
        -   By default, tinting from tint methods is not alpha-masked.
    -   `ambient_occlusion` — Float (`0.0-10.0`{lang=json}) (optional)
        -   Determines the intensity of "smooth lighting" that is applied to faces using the material instance.
        -   By default, this is or `0.0`{lang=json} for blocks that emit light and `1.0`{lang=json} for blocks that do not emit light.
    -   `face_dimming` — Boolean (optional)
        -   Determines whether faces using the material instance are dimmed by their direction.
        -   By default, this is `false`{lang=json} for blocks that emit light and `true`{lang=json} for blocks that do not emit light.
    -   `isotropic` — Boolean (optional)
        -   Determines whether the UVs of faces using the material instance are randomly rotated based on the block's position in the world.
        -   By default, textures are not randomly rotated.

<CodeHeader breadcrumbs="minecraft:block/components" />

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

#### Custom Material Instance Names

:::tip
Custom material instance names can be defined on the faces of cubes within Blockbench by right-clicking on a cube and opening its `Material Instances`.

Learn more about applying different material instances [here](/blocks/block-models#changing-material-instances)!
:::

Custom instance names can be defined within material instances, and can be referenced by built-in instance names, or within the block model.

<CodeHeader breadcrumbs="minecraft:block/components" />

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

#### Object Format {#movable-object}

-   `movement_type` — String
    -   Can be one of the following values: `"immovable"`{lang=json}, `"popped"`{lang=json}, `"push"`{lang=json} or `"push_pull"`{lang=json} (default).
-   `sticky` — String (optional)
    -   Can be set to `"same"`{lang=json} to replicate Slime/Honey Block functionality.

<CodeHeader breadcrumbs="minecraft:block/components" />

```json
"minecraft:movable": {
    "movement_type": "popped" // Block is broken when pushed by a piston.
}
```

### Placement Filter

Determines the placement conditions that a block must be in to be able to survive.
If none of the specified conditions are met, the block will not be placed; or if the block is already placed, it will pop off as an item.

_Requires format version [1.26.20](/blocks/block-format-history#_1-26-20) or later._

#### Object Format {#placement-filter-object}

-   `conditions` — Array
    -   List of condition objects specifying places where the block can be placed and survive without popping off as an item.
    -   A maximum of 64 conditions can be included.
    -   `allowed_faces` — Array (optional)
        -   The block faces that the block can be placed on
        -   Can include `"down"`{lang=json}, `"up"`{lang=json}, `"north"`{lang=json}, `"south"`{lang=json}, `"west"`{lang=json} and `"east"`{lang=json}.
    -   `block_filter` — Array (optional)
        -   Array of [block descriptors](/documentation/shared-constructs#block-descriptors) that the block can be placed against in the `allowed_faces` direction.
        -   See [this](/blocks/block-tags) page for a list of vanilla tags and relevant blocks.
        -   A maximum of 64 block descriptors can be included.

<CodeHeader breadcrumbs="minecraft:block/components" />

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

### Precipitation Interactions

Determines how the block interacts with rain and snow.

_Requires format version [1.21.120](/blocks/block-format-history#_1-21-120) or later._

#### Object Format {#precipitation-interactions-object}

-   `precipitation_behavior` — String
    -   `"obstruct_rain_accumulate_snow"`{lang=json} (default)
        -   Prevents rain from passing through the block, instead causing it to splash on top of it.
        -   Causes snow layers to build up above the block.
    -   `"obstruct_rain"`{lang=json}
        -   Prevents rain from passing through the block, instead causing it to splash on top of it.
        -   Prevents snow layers from building up above the block.
    -   `"snowlogging"`{lang=json}
        -   Allows rain to pass through the block without splashing on top of it.
        -   Allows snow to build up or be placed inside of the block, meaning the block can be [snowlogged](/blocks/block-colocation#snowlogging).
    -   `"none"`{lang=json}
        -   Allows rain to pass through the block without splashing on top of it.
        -   Prevents snow from building up inside or on top of the block.

<CodeHeader breadcrumbs="minecraft:block/components" />

```json
"minecraft:precipitation_interactions": {
    "precipitation_behavior": "none"
}
```

### Random Offset

Causes a random offset to be applied to the block based on its position in the world, affecting the block's collision box, selection box and geometry.

**Offset models must not exceed the [block geometry limits](#geometry).**

_Requires format version [1.21.100](/blocks/block-format-history#_1-21-100) or later._

#### Object Format {#random-offset-object}

-   `<axis>`{lang=xml}: Object (optional)
    -   The following offset parameters are separately defined for the `x`, `y` and `z` axes.
    -   `range` — [Range](/documentation/shared-constructs#range-objects)
        -   Determines how large offsets can be on each axis.
    -   `steps` — Integer
        -   Determines how many equally-spaced random values can be chosen across the `range`.
        -   A value of `0`{lang=json} means that any value within the `range` can be used.

<CodeHeader breadcrumbs="minecraft:block/components" />

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

#### Object Format {#redstone-conductivity-object}

-   `allows_wire_to_step_down` — Boolean (optional)
    -   Determines whether redstone wire can travel down the side of this block (if the block is not a conductor).
    -   Redstone wire can always travel down the side of [redstone conductors](/blocks/redstone-components#redstone-conductors).
-   `redstone_conductor` — Boolean (optional)
    -   Determines whether this block conducts direct redstone power.

<CodeHeader breadcrumbs="minecraft:block/components" />

```json
"minecraft:redstone_conductivity": {
    "redstone_conductor": true
}
```

### Redstone Consumer

:::tip ROOT ONLY
This component may only be defined in the root `components` object of your block, so cannot be specified per permutation.
:::

Allows the block to respond to redstone power via custom components using the `onRedstoneUpdate()`{lang=js} event hook.

#### Object Format {#redstone-consumer-object}

-   `min_power` — Integer (`0-15`{lang=js})
    -   Determines the minimum power level required to trigger the `onRedstoneUpdate()`{lang=js} custom component event hook.
-   `propagates_power` — Boolean (optional)
    -   Determines whether this block conducts redstone power to adjacent blocks.
        -   This parameter is set to `false`{lang=json} by default and overrides the `redstone_conductor` parameter of the [redstone conductivity](#redstone-conductivity) component.
        -   This allows the block to counterintuitively have properties of a redstone conductor while not actually conducting redstone.

<CodeHeader breadcrumbs="minecraft:block/components" />

```json
"minecraft:redstone_consumer": {
    "min_power": 0
}
```

### Redstone Producer

Causes the block to produce redstone power.

#### Object Format {#redstone-producer-object}

-   `power` — Integer (`0-15`{lang=js})
    -   Determines the power level produced by the block as an integer.
-   `strongly_powered_face` — String
    -   Determines the direction where strong power is produced.
    -   If strong power is received by a [redstone conductor](#redstone-conductivity), blocks surrounding the conductor will be powered (connected to the circuit).
-   `connected_faces` — Array (optional)
    -   Determines which directions power is produced in.
    -   Defined as an array of faces which may include `"down"`{lang=json}, `"up"`{lang=json}, `"north"`{lang=json}, `"south"`{lang=json}, `"west"`{lang=json} and `"east"`{lang=json}.
    -   By default, all faces are connected.
-   `transform_relative` — Boolean (optional)
    -   Determines whether face directions should be relative to the rotation value in the [transformation](#transformation) component.
    -   By default, faces are not transform-relative.

<CodeHeader breadcrumbs="minecraft:block/components" />

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

#### Object Format {#replaceable-object}

<CodeHeader breadcrumbs="minecraft:block/components" />

```json
"minecraft:replaceable": {}
```

### Selection Box

Defines the area of the block that can be selected by players.

_Requires format version [1.19.60](/blocks/block-format-history#_1-19-60) or later._

#### Boolean Format {#selection-box-boolean}

-   When `true`{lang=json} (default), a 16×16×16 selection box is used.
-   When `false`{lang=json}, the block cannot be selected by players.

<CodeHeader breadcrumbs="minecraft:block/components" />

```json
"minecraft:selection_box": true
```

#### Object Format {#selection-box-object}

-   `origin` — Vector `[X, Y, Z]`{lang=js}
    -   Bottom north-western corner of the selection box.
    -   Measured in pixels from the bottom center of the block unit.
    -   Must be in the range `[-8, 0, -8]`{lang=json} to `[8, 16, 8]`{lang=json}.
-   `size` — Vector `[X, Y, Z]`{lang=js}
    -   Size of each side of the selection box.
    -   Measured in pixels from the `origin` of the selection box.
    -   The sum of `origin` and `size` must be in the range `[-8, 0, -8]`{lang=json} to `[8, 16, 8]`{lang=json}.

<CodeHeader breadcrumbs="minecraft:block/components" />

```json
"minecraft:selection_box": {
    "origin": [-8, 0, -8],
    "size": [16, 16, 16]
}
```

### Support

Defines the block's ability to support other blocks that are attached to it.

_Requires format version [1.26.0](/blocks/block-format-history#_1-26-0) or later._

#### Object Format {#support-object}

-   `shape` — String
    -   Can be set to `"fence"`{lang=json} or `"stair"`{lang=json}.

<CodeHeader breadcrumbs="minecraft:block/components" />

```json
"minecraft:support": {
    "shape": "fence"
}
```

### Tags

Determines the list of tags that the block has.

_Requires format version [1.26.20](/blocks/block-format-history#_1-26-20) or later._

#### Array Format {#tags-array}

<CodeHeader breadcrumbs="minecraft:block/components" />

```json
"minecraft:tags": ["wiki:custom_tag"]
```

### Tick

Causes the block to "tick" after a random delay in the range specified by `interval_range`.
Queued ticks can be handled by using the [`onTick()`{lang=js}](/blocks/block-events#tick) event hook in a custom component.

Note that a maximum of 100 queued ticks can be executed in a given chunk every tick, meaning the actual time it takes for the block to tick may be delayed to take slightly longer than specified here if the chunk that the block is placed in contains many ticking blocks.

_Requires format version [1.21.10](/blocks/block-format-history#_1-21-10) or later._

#### Object Format {#tick-object}

-   `interval_range` — Range `[min, max]`{lang=js}
    -   Two durations (in ticks) which will be used as the minimum and maximum delays for randomness.
-   `looping` — Boolean (optional)
    -   Whether this block should continuously tick, rather than only ticking once.

<CodeHeader breadcrumbs="minecraft:block/components" />

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
Lean about [block orientation](/blocks/block-orientation) to apply rotation based on how the block is placed, just like furnaces and mob heads!
:::

#### Object Format {#transformation-object}

-   `rotation` — Vector `[X, Y, Z]`{lang=js} (optional)
    -   The number of degrees to rotate the geometry by on each axis.
    -   Must be in increments of 90 (negative for anticlockwise rotation).
-   `rotation_pivot` — Vector `[X, Y, Z]`{lang=js} (optional)
    -   The pivot point (in block units) to rotate the block on.
    -   By default, rotation is around the center of the block.
-   `scale` — Vector `[X, Y, Z]`{lang=js} (optional)
    -   The factor to scale the geometry by on each axis.
-   `scale_pivot` — Vector `[X, Y, Z]`{lang=js} (optional)
    -   The pivot point (in block units) to scale the block on.
    -   By default, scale is from the center of the block.
-   `translation` — Vector `[X, Y, Z]`{lang=js} (optional)
    -   The number of block units to offset the geometry by on each axis.

<CodeHeader breadcrumbs="minecraft:block/components" />

```json
"minecraft:transformation": {
    "translation": [-5, 8, 0 ],
    "rotation": [90, 180, 0],
    "rotation_pivot": [0, 0, 0],
    "scale": [0.5, 1, 0.5],
    "scale_pivot": [0, 0, 0]
}
```
