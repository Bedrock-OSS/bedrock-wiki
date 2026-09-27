---
title: Client Biomes
description: Learn how to configure the fog, colours, sounds and music of a biome in your resource pack.
category: General
related:
    - /world-generation/biomes
mentions:
    - SmokeyStack
---

Client biomes hold everything a biome does that only the player's client needs to know: fog, sky and water colours, grass and foliage tint, ambient sounds, music, particles and the Vibrant Visuals lighting set. They live in the resource pack and are matched to a server-side [biome](/world-generation/biomes) by identifier.

A client biome does not create a biome. The identifier must belong to a vanilla biome or to a biome defined in a behavior pack, otherwise the file is ignored. A biome without a client biome falls back to defaults derived from its climate.

:::tip
Before `1.21.40`, all of these settings lived in a single `RP/biomes_client.json`. That file is still loaded from resource packs for compatibility, but vanilla no longer uses it and new packs should use per-biome files.
:::

## Folder Structure

Client biomes are placed in the `biomes` folder of the resource pack.

<FolderView :paths="[
	'RP/biomes/crystal_caves.client_biome.json',
]" />

## Format

The file contains a single `minecraft:client_biome` object with a `description` and a `components` object. Use format version `1.21.130` or newer for every component on this page.

<CodeHeader path="RP/biomes/crystal_caves.client_biome.json" />

```json
{
    "format_version": "1.21.130",
    "minecraft:client_biome": {
        "description": {
            "identifier": "wiki:crystal_caves"
        },
        "components": {
            "minecraft:sky_color": {
                "sky_color": "#b28cff"
            },
            "minecraft:fog_appearance": {
                "fog_identifier": "wiki:fog_crystal_caves"
            },
            "minecraft:water_appearance": {
                "surface_color": "#7b5cd6",
                "surface_opacity": 0.65
            },
            "minecraft:grass_appearance": {
                "color": "#9c7bd9"
            },
            "minecraft:foliage_appearance": {
                "color": "#8a6ccf"
            },
            "minecraft:ambient_sounds": {
                "loop": "wiki.ambient.crystal_caves.loop",
                "mood": "wiki.ambient.crystal_caves.mood"
            },
            "minecraft:biome_music": {
                "music_definition": "wiki.crystal_caves"
            }
        }
    }
}
```

### Description

#### identifier

<Label color="red">Required</Label>

The namespaced identifier of the biome this file applies to. It must match the `identifier` of a server-side biome, either vanilla such as `minecraft:plains` or custom such as `wiki:crystal_caves`.

## Components

All components are optional. Colours accept either a `#rrggbb` string or an `[r, g, b]` array of integers from `0` to `255`.

### Colours

#### minecraft:sky_color

-   `sky_color` - The colour of the sky. Required.

```json
"minecraft:sky_color": {
    "sky_color": "#78a7ff"
}
```

#### minecraft:grass_appearance

-   `color` - Either a fixed colour, or `{ "color_map": "grass" }` or `{ "color_map": "swamp_grass" }` to sample the vanilla colour map using the biome's temperature and downfall.
-   `grass_is_shaded` - Boolean, default `false`. Darkens grass the way the vanilla dark forest does.

```json
"minecraft:grass_appearance": {
    "color": {
        "color_map": "grass"
    },
    "grass_is_shaded": true
}
```

#### minecraft:foliage_appearance

-   `color` - Either a fixed colour, or `{ "color_map": ... }` with one of `foliage`, `birch`, `evergreen`, `mangrove_swamp_foliage`, `swamp_foliage` or `dry_foliage`.

```json
"minecraft:foliage_appearance": {
    "color": {
        "color_map": "evergreen"
    }
}
```

#### minecraft:dry_foliage_color

Colour used by blocks that tint with the `dry_foliage` method, such as leaf litter.

-   `color` - Required.

```json
"minecraft:dry_foliage_color": {
    "color": "#7b5334"
}
```

#### minecraft:water_appearance

At least one of the two fields must be set.

-   `surface_color` - The tint of the water surface.
-   `surface_opacity` - Float from `0.0` to `1.0`. How opaque the water surface is.

```json
"minecraft:water_appearance": {
    "surface_color": "#3b6cd1",
    "surface_opacity": 0.65
}
```

### Fog and Particles

#### minecraft:fog_appearance

-   `fog_identifier` - The identifier of a fog definition from the `RP/fogs` folder. Required.

```json
"minecraft:fog_appearance": {
    "fog_identifier": "minecraft:fog_roofed_forest"
}
```

#### minecraft:precipitation

Falling particles in the air, as used by the Nether biomes. Only one type may be set per biome.

-   `ash`, `white_ash`, `red_spores`, `blue_spores` - Float density of the chosen particle.

```json
"minecraft:precipitation": {
    "ash": 0.05
}
```

### Sound

#### minecraft:ambient_sounds

Sound events for this component must be listed under `individual_named_sounds` in the resource pack's `sounds.json`.

-   `loop` - Sound event that plays continuously while the player is in the biome.
-   `mood` - Sound event that plays occasionally in dark, enclosed spaces. Defaults to `ambient.cave` when unset.
-   `addition` - `{ "asset": "...", "chance": 0.0-1.0 }`. A sound event that has the given chance to play each tick.
-   `underwater_loop`, `underwater_mood`, `underwater_addition` - The same three fields, used while the player is underwater.

```json
"minecraft:ambient_sounds": {
    "loop": "ambient.soulsand_valley.loop",
    "mood": "ambient.soulsand_valley.mood",
    "addition": {
        "asset": "ambient.soulsand_valley.additions",
        "chance": 0.0111
    },
    "underwater_loop": "ambient.underwater.loop",
    "underwater_addition": {
        "asset": "ambient.underwater.additions",
        "chance": 0.01
    }
}
```

#### minecraft:biome_music

-   `music_definition` - The name of an entry in `RP/sounds/music_definitions.json`. An empty string disables music in the biome.
-   `volume_multiplier` - Float from `0.0` to `1.0` applied to the music volume.
-   `underwater_music` - Boolean, default `false`. Whether music keeps playing while the player is underwater.

```json
"minecraft:biome_music": {
    "music_definition": "wiki.crystal_caves",
    "volume_multiplier": 0.8
}
```

### Vibrant Visuals

These components only take effect when the player has Vibrant Visuals enabled. Each references a definition in the matching resource pack folder.

#### minecraft:atmosphere_identifier

-   `atmosphere_identifier` - Identifier of an atmospheric scattering definition from `RP/atmospherics`. Required.

#### minecraft:color_grading_identifier

-   `color_grading_identifier` - Identifier of a colour grading definition from `RP/color_grading`. Required.

#### minecraft:lighting_identifier

-   `lighting_identifier` - Identifier of a lighting definition from `RP/lighting`. Required.

#### minecraft:water_identifier

-   `water_identifier` - Identifier of a water definition from `RP/water`. Required. The water definition's `biome_water_color_contribution` controls how strongly `minecraft:water_appearance` tints the water under Vibrant Visuals.

#### minecraft:cubemap_identifier

Requires format version `1.21.130`.

-   `cubemap_identifier` - Identifier of a skybox cubemap definition from `RP/cubemaps`. Required.

```json
"minecraft:atmosphere_identifier": {
    "atmosphere_identifier": "minecraft:roofed_forest_atmospherics"
},
"minecraft:color_grading_identifier": {
    "color_grading_identifier": "minecraft:default_color_grading"
},
"minecraft:lighting_identifier": {
    "lighting_identifier": "minecraft:nether_lighting"
},
"minecraft:water_identifier": {
    "water_identifier": "minecraft:default_water"
}
```

