---
title: Biomes
description: Learn how to define custom biomes and place them in the world with your behavior pack.
category: General
related:
    - /world-generation/client-biomes
    - /world-generation/biome-tags
    - /world-generation/dimensions
mentions:
    - SirLich
    - solvedDev
    - stirante
    - Joelant05
    - destruc7ion
    - SmokeyStack
    - MedicalJewel105
    - aexer0e
    - Apex360
    - Lufurrius
    - TheItsNameless
    - ThomasOrs
---

Behavior packs can define entirely new biomes or override the vanilla ones. A biome decides which blocks make up the surface, how cold and wet the area is, which mobs and features spawn there through [tags](/world-generation/biome-tags), and whether villages can generate. Everything a player _sees_, such as fog, sky colour, grass tint, music and ambient sounds, is configured separately in the resource pack through a [client biome](/world-generation/client-biomes) with the same identifier.

:::warning
Custom biomes cannot change the shape of the terrain. The Overworld and Nether landscape is carved by the game first, then your biome is painted onto a share of an existing vanilla biome's area with [`minecraft:replace_biomes`](#minecraft-replace-biomes). What you control is which blocks the surface is made of, the climate, and everything that hooks into biome tags.
:::

## Folder Structure

Biomes are placed in the `biomes` folder of your behavior pack. The file name is not used by the game, so name it after the biome for clarity. Subfolders are supported.

<FolderView :paths="[
	'BP/biomes/crystal_caves.biome.json',
]" />

## Format

The file contains a single `minecraft:biome` object with a `description` and a `components` object.

<CodeHeader path="BP/biomes/crystal_caves.biome.json" />

```json
{
    "format_version": "1.26.50",
    "minecraft:biome": {
        "description": {
            "identifier": "wiki:crystal_caves"
        },
        "components": {
            "minecraft:climate": {
                "temperature": 0.5,
                "downfall": 0.8
            },
            "minecraft:surface_builder": {
                "builder": {
                    "type": "minecraft:overworld",
                    "sea_floor_depth": 7,
                    "sea_floor_material": "minecraft:gravel",
                    "foundation_material": "minecraft:stone",
                    "mid_material": "minecraft:dirt",
                    "top_material": "minecraft:amethyst_block",
                    "sea_material": "minecraft:water"
                }
            },
            "minecraft:replace_biomes": {
                "replacements": [
                    {
                        "dimension": "minecraft:overworld",
                        "targets": ["plains", "forest"],
                        "amount": 0.2,
                        "noise_frequency_scale": 25
                    }
                ]
            },
            "minecraft:tags": {
                "tags": ["overworld", "monster", "animal", "wiki:crystal_caves"]
            }
        }
    }
}
```

### Description

#### identifier

<Label color="red">Required</Label>

The namespaced identifier of the biome, for example `wiki:crystal_caves`. To override a vanilla biome, use its vanilla identifier such as `minecraft:plains`. The identifier is also what a [client biome](/world-generation/client-biomes) uses to attach visuals, and what `/locate biome` and the Script API report.

Vanilla biome identifiers are listed on the [Biome Tags](/world-generation/biome-tags) page.

### Overriding Vanilla Biomes

A biome file whose identifier matches a vanilla biome replaces that biome's definition entirely. There is no inheritance, so copy the vanilla file from the vanilla behavior pack and edit it rather than writing only the components you want to change.

## Components

All components are optional. Components that reference blocks accept either a block identifier string or a block specifier object with `name` and `states`, for example

```json
{
    "name": "minecraft:dirt",
    "states": {
        "dirt_type": "coarse"
    }
}
```

### minecraft:climate

Sets the temperature and rainfall of the biome. Biomes without this component use default values.

-   `temperature` - Controls whether rain falls as snow, whether water freezes, and the sky and grass colours when a client biome does not override them. Vanilla values range from `-0.5` (frozen) to `2.0` (desert and Nether).
-   `downfall` - How much rain falls. Also affects fire spread and, alongside `temperature`, the default grass and foliage colour.
-   `snow_accumulation` - A `[min, max]` range for how deep snow layers can pile up. Each `0.125` is one snow layer. `min` must not exceed `max`.

```json
"minecraft:climate": {
    "temperature": 0.25,
    "downfall": 0.8,
    "snow_accumulation": [0.0, 0.125]
}
```

### minecraft:creature_spawn_probability

The chance that passive creatures spawn in a chunk when it is first generated. Higher values mean more animals.

-   `probability` - Float between `0.0` and `0.75`.

```json
"minecraft:creature_spawn_probability": {
    "probability": 0.07
}
```

### minecraft:humidity

Marks the biome as humid, which lowers the chance and rate of fire spreading.

-   `is_humid` - Boolean. Required.

```json
"minecraft:humidity": {
    "is_humid": true
}
```

### minecraft:map_tints

Controls how the biome is drawn on map items. Does not affect the world itself.

-   `grass`

    -   Fixed colour

    ```json
    {
        "type": "tint",
        "tint": "#rrggbb"
    }
    ```

    -   Default Noise Pattern

    ```json
    {
        "type": "noise"
    }
    ```

-   `foliage` - A `#rrggbb` colour string or `[r, g, b]` array.

```json
"minecraft:map_tints": {
	"grass": {
		"type": "tint",
		"tint": "#aea42a"
	},
	"foliage": "#90814d"
}
```

### minecraft:mountain_parameters

Overworld only. Adjusts how mountainous terrain is dressed.

-   `steep_material_adjustment` - Replaces the surface block on steep slopes.
    -   `material` - The block to use.
    -   `north_slopes`, `south_slopes`, `west_slopes`, `east_slopes` - Booleans selecting which slope directions are affected.
-   `top_slide` - `{ "enabled": false }` disables the smoothing that normally rounds off the tops of terrain. Vanilla meadow and cherry grove use this.

```json
"minecraft:mountain_parameters": {
    "steep_material_adjustment": {
        "material": "minecraft:stone",
        "north_slopes": true,
        "south_slopes": true,
        "west_slopes": true,
        "east_slopes": true
    },
    "top_slide": {
        "enabled": false
    }
}
```

### minecraft:partially_frozen

Marks the biome as only partly frozen, producing patchy ice and snow like the frozen ocean. Takes no parameters.

```json
"minecraft:partially_frozen": {}
```

### minecraft:replace_biomes

<Label color="blue">Overworld</Label>
<Label color="red">Nether</Label>

The only way to make a custom biome generate. After the game has laid out the vanilla biomes for a chunk, each replacement claims a share of one or more target biomes' area for your biome.

-   `replacements` - Array of replacement rules. Required, at least one entry, no duplicates.
    -   `dimension` - `"minecraft:overworld"` or `"minecraft:nether"`. Required.
    -   `targets` - Vanilla biome names **without** the `minecraft:` namespace, for example `"plains"`. Required, at least one.
    -   `amount` - Fraction of the target area to take, greater than `0` and up to `1.0`. Required.
    -   `noise_frequency_scale` - How large the replaced patches are, greater than `0` and up to `100`. Higher values produce smaller, more frequent patches. Required.

If two custom biomes target the same vanilla biome, the one with the lower noise result at each position wins. Adding a new rule to the **front** of the array shifts the noise for the rules after it and changes generation in existing worlds, so always append new rules to the end.

In the Nether, replacement only works with surface builders of type `minecraft:overworld`, `minecraft:frozen_ocean`, `minecraft:capped` and `minecraft:the_end`.

```json
"minecraft:replace_biomes": {
    "replacements": [
        {
            "dimension": "minecraft:overworld",
            "targets": ["plains", "sunflower_plains"],
            "amount": 0.3,
            "noise_frequency_scale": 25
        },
        {
            "dimension": "minecraft:nether",
            "targets": ["hell"],
            "amount": 0.1,
            "noise_frequency_scale": 40
        }
    ]
}
```

:::tip
A biome without `minecraft:replace_biomes` never generates on its own. It can still be used as the `minecraft:default_biome` of a [custom dimension](/world-generation/dimensions).
:::

### minecraft:surface_builder

Decides which blocks form the surface of the terrain. The `builder` object is required and its `type` selects one of the builders below. Every builder except `minecraft:the_end` and `minecraft:noise_gradient` shares the same base fields.

Bedrock at the floor and ceiling is placed regardless of this component.

#### minecraft:overworld

The standard layered surface. All fields are required.

-   `top_material` - The topmost block, such as grass.
-   `mid_material` - The block between the surface and the foundation, such as dirt.
-   `foundation_material` - The block the rest of the terrain is made of, such as stone.
-   `sea_material` - The liquid that fills areas below sea level.
-   `sea_floor_material` - The block placed on the sea floor.
-   `sea_floor_depth` - How many blocks below sea level the sea floor material extends. Integer from `0` to `127`.

```json
"minecraft:surface_builder": {
    "builder": {
        "type": "minecraft:overworld",
        "sea_floor_depth": 7,
        "sea_floor_material": "minecraft:gravel",
        "foundation_material": "minecraft:stone",
        "mid_material": "minecraft:dirt",
        "top_material": "minecraft:grass_block",
        "sea_material": "minecraft:water"
    }
}
```

#### minecraft:frozen_ocean

Same fields as `minecraft:overworld`, and additionally generates icebergs.

#### minecraft:mesa

Same fields as `minecraft:overworld` plus the following, all required.

-   `clay_material` - The block used for the banded terracotta layers.
-   `hard_clay_material` - The block used for the hardened top layer.
-   `bryce_pillars` - Whether to generate the tall thin pillars of the eroded badlands.
-   `has_forest` - Whether to place a grass and coarse dirt layer on the plateau top.

#### minecraft:swamp

Same fields as `minecraft:overworld` plus one required field.

-   `max_puddle_depth_below_sea_level` - How deep the shallow puddles that dot the surface can be. Integer from `0` to `127`.

#### minecraft:capped

Generates surfaces on blocks that have air above **or** below them, which suits cave-like and Nether terrain.

-   `ceiling_materials` - Array of blocks to use on ceilings, top to bottom. Required, at least one.
-   `floor_materials` - Array of blocks to use on floors, top to bottom. Required, at least one.
-   `foundation_material` - The block the rest of the terrain is made of. Required.
-   `sea_material` - The liquid below sea level. Required.
-   `beach_material` - Optional block placed where the floor meets the sea.

```json
"minecraft:surface_builder": {
    "builder": {
        "type": "minecraft:capped",
        "ceiling_materials": ["minecraft:netherrack"],
        "floor_materials": ["minecraft:warped_nylium", "minecraft:netherrack"],
        "foundation_material": "minecraft:netherrack",
        "sea_material": "minecraft:lava",
        "beach_material": "minecraft:soul_sand"
    }
}
```

#### minecraft:the_end

Marks the biome as using End terrain generation. Takes no other fields.

```json
"minecraft:surface_builder": {
    "builder": {
        "type": "minecraft:the_end"
    }
}
```

#### minecraft:noise_gradient

Requires format version `1.26.30`. Samples a 3D noise and picks a block based on which range the noise value falls into. This is how the vanilla sulfur caves mix cinnabar and sulfur.

-   `noise_descriptor` - Required.
    -   `name` - A namespaced name for the noise so it is seeded consistently.
    -   `first_octave` - The largest octave to sample. More negative values give larger features.
    -   `amplitudes` - Array of 1 to 100 floats, one per octave, controlling how much each contributes.
-   `noise_block_specifiers` - Array of blocks and the noise range each is used for. Required, at least one.
    -   `block` - The block to place. Required.
    -   `range` - `{ "min": float, "max": float }` between `-1.0` and `1.0`. Where no range matches, the existing block is kept.
-   `non_replaceable_blocks` - Optional array of blocks the builder must never overwrite.

```json
"minecraft:surface_builder": {
    "builder": {
        "type": "minecraft:noise_gradient",
        "noise_descriptor": {
            "name": "wiki:crystal_gradient",
            "first_octave": -5,
            "amplitudes": [1.0, 0.0, 1.0]
        },
        "non_replaceable_blocks": ["minecraft:bedrock"],
        "noise_block_specifiers": [
            {
                "block": "minecraft:amethyst_block",
                "range": { "min": -0.4, "max": -0.1 }
            },
            {
                "block": "minecraft:calcite",
                "range": { "min": 0.0, "max": 0.4 }
            }
        ]
    }
}
```

### minecraft:subsurface_builder

Requires format version `1.26.30`. Identical in shape to `minecraft:surface_builder`, but applied to terrain underneath the regular surface, such as cave walls. The existing builder types were designed for the surface and may give unexpected results underground; `minecraft:noise_gradient` is the intended builder here.

```json
"minecraft:subsurface_builder": {
    "builder": {
        "type": "minecraft:noise_gradient",
        "noise_descriptor": {
            "name": "wiki:crystal_gradient",
            "first_octave": -5,
            "amplitudes": [1.0, 0.0, 1.0]
        },
        "noise_block_specifiers": [
            {
                "block": "minecraft:amethyst_block",
                "range": { "min": 0.4, "max": 1.0 }
            }
        ]
    }
}
```

### minecraft:surface_material_adjustments

Swaps out surface builder materials in parts of the biome selected by noise and height. Adjustments are applied in order, so later entries override earlier ones where they overlap.

-   `adjustments` - Array of adjustment rules.
    -   `materials` - Required. Any of `top_material`, `mid_material`, `foundation_material`, `sea_material`, `sea_floor_material`, each a block to substitute.
    -   `height_range` - Optional `[min, max]` of Molang expressions. `variable.sea_level` is available, so `"variable.sea_level - 3"` is valid.
    -   `noise_frequency_scale` - Optional. How rapidly the selection noise changes across the terrain.
    -   `noise_range` - Optional `[min, max]` of noise values for which this adjustment applies.

```json
"minecraft:surface_material_adjustments": {
    "adjustments": [
        {
            "materials": {
                "top_material": {
                    "name": "minecraft:dirt",
                    "states": { "dirt_type": "coarse" }
                }
            },
            "noise_frequency_scale": 0.22,
            "noise_range": [0.3, 1.0]
        },
        {
            "materials": {
                "top_material": "minecraft:gravel",
                "mid_material": "minecraft:gravel"
            },
            "height_range": ["variable.sea_level - 3", "variable.sea_level + 2"],
            "noise_frequency_scale": 0.2,
            "noise_range": [-1.0, -0.5]
        }
    ]
}
```

### minecraft:tags

Attaches tags to the biome. Tags are how everything else in the game finds biomes: spawn rules, feature rules, structure placement, loot table conditions and the `query.has_any_biome_tags` Molang query all filter on them.

-   `tags` - Array of strings. Required.

Some tags have hard-coded meaning, for example `overworld` and `nether` allow vanilla features to generate, `monster` and `animal` enable the vanilla spawn rules. See the [Biome Tags](/world-generation/biome-tags) page for the tags every vanilla biome carries.

```json
"minecraft:tags": {
    "tags": ["overworld", "monster", "animal", "forest", "wiki:crystal_caves"]
}
```

### minecraft:village_type

Requires format version `1.26.0`. Allows villages to generate in the biome and chooses their style. Biomes without this component never generate villages.

-   `type` - One of `default`, `desert`, `ice`, `savanna` or `taiga`. Required.

```json
"minecraft:village_type": {
    "type": "taiga"
}
```

## Legacy Components

The following components still parse and appear in every vanilla biome file, but they do **not** influence world generation anymore. Do not rely on them when writing a new biome.

-   `minecraft:overworld_generation_rules` - The pre-Caves & Cliffs Overworld placement system with `generate_for_climates`, `hills_transformation`, `mutate_transformation`, `river_transformation` and `shore_transformation`. Does nothing for custom biomes.
-   `minecraft:multinoise_generation_rules` - The pre-Caves & Cliffs Nether placement system with `target_temperature`, `target_humidity`, `target_altitude`, `target_weirdness` and `weight`. Does nothing for custom biomes.
-   `minecraft:overworld_height` - Sets a `noise_type` such as `lowlands` or `mountains`. No longer changes terrain height; only affects how map items shade the biome.

## Placing Blocks and Features

A biome only decides the surface blocks. Trees, ores, plants and structures come from [features and feature rules](/world-generation/feature-types), which target biomes by tag. Give your biome a unique tag such as `wiki:crystal_caves` and use it in your feature rules' `biome_filter` so vanilla decorations do not appear alongside your own.

