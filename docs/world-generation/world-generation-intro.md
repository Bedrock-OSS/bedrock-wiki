---
title: Intro to World Generation
description: Learn about modifying world generation.
category: General
nav_order: 1
tags:
    - guide
mentions:
    - SirLich
    - solvedDev
    - Dreamedc2015
    - destruc7ion
    - MedicalJewel105
    - aexer0e
    - aym-i
    - SmokeyStack
    - Supernova3695
---

:::warning
This page is somewhat out-dated, and contains limited information. For the most up-to-date and comprehensive information, view the other pages in this section.
:::

You can change the world's generation via Add-ons. The behavior pack folders involved are:

`biomes`, `dimensions`, `features`, `feature_rules`, `structures` and `worldgen`. Biome files go in `biomes`, custom dimension files in `dimensions`, terrain features such as ores in `features` and the rules for placing them in `feature_rules`, `.mcstructure` files from structure blocks in `structures`, and jigsaw structure files in `worldgen` and its subfolders. Biome visuals such as fog and colours live separately in the resource pack's `biomes` folder as [client biomes](/world-generation/client-biomes).

_Note: the vanilla behavior and resource packs are the best reference for every file type on this page. They are published in the [bedrock-samples](https://github.com/Mojang/bedrock-samples) repository, and editors such as [bridge.](https://bridge-core.app/) can generate them for you._

---

## Custom Biomes

A biome decides which blocks make up the surface, its climate, and which tags it carries. Custom biomes generate by replacing a share of an existing vanilla biome's area.

<CodeHeader path="BP/biomes/cold_biome.biome.json" />

```json
{
    "format_version": "1.26.50",
    "minecraft:biome": {
        "description": {
            "identifier": "wiki:cold_biome"
        },
        "components": {
            "minecraft:climate": {
                "downfall": 0.7,
                "snow_accumulation": [0.125, 0.5],
                "temperature": -0.3
            },
            "minecraft:surface_builder": {
                "builder": {
                    "type": "minecraft:overworld",
                    "sea_floor_depth": 7,
                    "sea_floor_material": "minecraft:blue_ice",
                    "foundation_material": "minecraft:cobblestone",
                    "mid_material": "minecraft:packed_ice",
                    "top_material": "minecraft:snow",
                    "sea_material": "minecraft:water"
                }
            },
            "minecraft:replace_biomes": {
                "replacements": [
                    {
                        "dimension": "minecraft:overworld",
                        "targets": ["plains"],
                        "amount": 0.5,
                        "noise_frequency_scale": 50
                    }
                ]
            },
            "minecraft:tags": {
                "tags": ["overworld", "monster", "wiki:cold_biome"]
            }
        }
    }
}
```

-   `format_version` is `1.26.50`, the version the current vanilla biome files use.
-   `description` takes only one value: `identifier`, which must be namespaced.
-   `minecraft:climate` controls the weather. `temperature` decides whether rain falls as snow and whether water freezes, `downfall` is how much it rains, and `snow_accumulation` is how many snow layers can pile up in steps of `0.125`.
-   `minecraft:surface_builder` chooses the blocks the terrain is made of. `top_material` is the topmost block, `mid_material` sits between the top and the `foundation_material` that fills the rest, and the `sea_*` fields cover anything below sea level.
-   `minecraft:replace_biomes` is what makes the biome generate. Each rule takes a share (`amount`) of the listed vanilla `targets` in a `dimension` and hands it to your biome. Without this component the biome never appears on its own.
-   `minecraft:tags` are how everything else finds your biome. You can test for a tag in spawn rules, feature rules, loot tables, entity filters and Molang queries.

Custom biomes cannot change the shape of the terrain, only what it is made of and what lives in it. The full list of components, all surface builder types and the rules for Nether replacement are on the [Biomes](/world-generation/biomes) page. Fog, sky and water colours, music and ambient sounds are set in a matching [client biome](/world-generation/client-biomes) in the resource pack.

Your custom biome is now complete!

---

## Custom Dimensions

A dimension file defines a new space outside the Overworld, Nether and End. Custom dimensions currently only support void generation, so they are empty until you fill them, and players are moved in and out with the Script API.

<CodeHeader path="BP/dimensions/void_arena.json" />

```json
{
    "format_version": "1.26.50",
    "minecraft:dimension": {
        "description": {
            "identifier": "wiki:void_arena"
        },
        "components": {
            "minecraft:generation": {
                "generator_type": "void"
            },
            "minecraft:dimension_height": {
                "min_y": -64,
                "height_range": 384
            },
            "minecraft:default_biome": {
                "biome": "wiki:cold_biome"
            }
        }
    }
}
```

-   `minecraft:generation` is required and `void` is the only generator type.
-   `minecraft:dimension_height` sets the bottom of the dimension and how tall it is, within the world limits of -512 to 512.
-   `minecraft:default_biome` fills the dimension with one biome, which can be a custom biome such as the one above.

See the [Dimensions](/world-generation/dimensions) page for the full format and a script example that builds a platform and teleports players in.

---

## Features and Feature Rules

Features and Feature Rules are used to generate everything from ores to grass and flowers, vegetation to granite or clay patches.
It is even possible to create custom structures using those, but as it is very grindy and will be much easier after the mentioned update, we won't talk about it just yet.

Now, it's worthwhile to mention that the easiest way to generate Custom Structures is this [auto generator](https://machine-builder.itch.io/frg-v2) by [MACHINE_BUILDER](https://www.youtube.com/channel/UC8FBQgo4AWwKFX97h60NKOQ), you should note that this tool has a free version with limited functionality and to enjoy the full functionality use the payware version. However, we'll still learn some other manual feature generation here, because some things like Ores are much more efficient to generate as `ore_feature`s and not `structure_template_feature`s.

Let's make our `wiki:blocky` custom block generate as an ore for the tutorial's sake. I'll do it the easy way, like this:

1. Open _bridge._, choose your Add-on.
1. _Add new file>features>diamond_ore and Add new file>feature_rules>diamond_ore_.
1. Now I'll save the files and open them in my Code Editor and make the necessary modifications.

_You can also write the files from scratch or copy them from the vanilla behavior pack in the [bedrock-samples](https://github.com/Mojang/bedrock-samples) repository, which is the complete and current reference._

## Features

Features are located in `BP/features` and are basically a group of blocks stored in the game's files, which can be placed with a _feature_rule_. The **file name** of a _feature_ **must match** the **identifier** as well.

You can find their Documentation on [bedrock.dev/r/Features](https://bedrock.dev/r/Features)

<CodeHeader path="BP/features/blocky_ore_feature.json" />

```json
{
    "format_version": "1.13.0",
    "minecraft:ore_feature": {
        "description": {
            "identifier": "blocky_ore_feature"
        },
        "count": 8,
        "places_block": "wiki:blocky",
        "may_replace": [
            {
                "name": "minecraft:stone",
                "states": {
                    "stone_type": "andesite"
                }
            },
            {
                "name": "minecraft:stone",
                "states": {
                    "stone_type": "andesite_smooth"
                }
            },
            {
                "name": "minecraft:stone",
                "states": {
                    "stone_type": "diorite"
                }
            },
            {
                "name": "minecraft:stone",
                "states": {
                    "stone_type": "diorite_smooth"
                }
            },
            {
                "name": "minecraft:stone",
                "states": {
                    "stone_type": "granite"
                }
            },
            {
                "name": "minecraft:stone",
                "states": {
                    "stone_type": "granite_smooth"
                }
            },
            {
                "name": "minecraft:stone",
                "states": {
                    "stone_type": "stone"
                }
            }
        ]
    }
}
```

-   `minecraft_ore_feature` is type of the specific feature that places ores automatically. Each feature type has it's own specific syntax. (There's also `single_block_feature` that places a single block instead of an ore group, etc)
-   `identifier` doesn't require a namespace in this scenario. The namespace is optional, and is not to be added in the filename.
-   `count` is how big the ore "cluster" will be at maximum, or how many actual ore blocks will generate together.
-   `places_block` takes the identifier of the block to be placed as the value.
-   `may_replace` takes all the blocks that the feature can replace as arguments. If it generates over one of the blocks not included in here, the block will remain where it was without being replaced.

## Feature Rules

**Feature Rules** control where and how _features_ (and, in the future, _structures_) are placed.

<CodeHeader path="BP/feature_rules/overworld_underground_blocky_ore_feature.json" />

```json
{
    "format_version": "1.13.0",
    "minecraft:feature_rules": {
        "description": {
            "identifier": "overworld_underground_blocky_ore_feature",
            "places_feature": "blocky_ore_feature"
        },
        "conditions": {
            "placement_pass": "underground_pass",
            "minecraft:biome_filter": [
                {
                    "any_of": [
                        {
                            "test": "has_biome_tag",
                            "operator": "==",
                            "value": "overworld"
                        },
                        {
                            "test": "has_biome_tag",
                            "operator": "==",
                            "value": "overworld_generation"
                        }
                    ]
                }
            ]
        },
        "distribution": {
            "iterations": 100,
            "coordinate_eval_order": "zyx",
            "x": {
                "distribution": "uniform",
                "extent": [0, 16]
            },
            "y": {
                "distribution": "uniform",
                "extent": [0, 16]
            },
            "z": {
                "distribution": "uniform",
                "extent": [0, 16]
            }
        }
    }
}
```

-   `description`
    -   `identifier` needs no namespace, but the filename needs to match.
    -   `places_feature` takes the identifier of the feature that is controlled by this rule as the value.
-   `conditions`
    -   `placement_pass` HOW the feature will be passed.
    -   `biome_filter` tests for biome tags where the feature will generate, exactly as a spawn rule.
-   `distribution`
    -   `iterations` basically chance. I set mine to 100 to make it generate everywhere, but for a diamond_ore, this is set to 1.
    -   The next four components show in which directions the ore will be 'dragged' towards.
        _Needs more clarification_

The easiest way to test wether your ores generated is /fill ~15 ~5 ~15 ~-15 ~-15 ~-15 air 0 replace stone using this command at a low y level. it'll keep everything BUT stone in the selected area, like this:

![](ore_gen_sans_stone.jpg)

And yes, 100 as "iterations" is definitely waaay too much ;)

It's a good idea to proceed checking out other feature and feature_rule vanilla files to learn further techniques. However, the ones you were just walked through are enough to create most of what needs to be generated.

---

## Custom Structures

### Structure Template Features

As of MCBE v1.16.20, **Custom Generated structures are possible**
A simple way to generate Structures is [this](https://machine-builder.itch.io/frg-v2) auto generator by MACHINE_BUILDER, mentioned earlier. It generates all three of the required files for your structure: `feature_rules/mystructure.feature_rule.json`, `feature_rules/mystructure.feature.json` and `structures/mystructure.mcstructure.` You can learn more about defining `.mcstructures` with Structure Blocks in Minecraft itself [here](/nbt/mcstructure).

---

Now that you have your `.mcstructure`, time to write your `feature` and `feature rule`. The last is the same as with ores (see the beginning of this article). Let's continue to the **Feature**.

-   Remember that the namespace is not required and that the filename must match the identifier, excluding the namespace. So if you have a feature rule with the identifier `wiki:myfeaturerule` or simply `myfeaturerule`, the file name can be be `myfeaturerule.json` in both cases.

Here's an code example from the [Features Documentation](https://bedrock.dev/r/Features#minecraft:structure_template_feature):

```json
{
    "format_version": "1.13.0",
    "minecraft:structure_template_feature": {
        "description": {
            "identifier": "wiki:hot_air_balloon_feature"
        },
        "structure_name": "wiki:hot_air_balloon",
        "adjustment_radius": 8,
        "facing_direction": "random",
        "constraints": {
            "unburied": {},
            "block_intersection": {
                "block_whitelist": ["minecraft:air"]
            }
        }
    }
}
```

-   `structure_name` is the structure's identifier, the one you saved via a Structure Block.

### Jigsaw Structures

Jigsaw structures can be very small or very large, up to 256 blocks across!

Jigsaws allow for large randomize structures like villages or trail ruins which can generate across the world and be located by `/locate` unlike structure features.
They are very powerful and more information about them can be found [here](/world-generation/jigsaw-structures).

That's pretty much it! Now you're able to generate your own custom Structures in the world.

## Your Progress So Far

**What you've done:**

-   [x] Created your very first biome.
-   [x] Defined a custom dimension.
-   [x] Made your very first ore generate naturally.
-   [x] Learned where to find the vanilla files for reference.
-   [x] Learned about other Custom Generation methods.
-   [x] Created custom structures.
