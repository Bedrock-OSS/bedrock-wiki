---
title: Intro to World Generation
nav_order: 1
tags:
    - guide
---

You can change the world's generation via Add-ons. The needed folders in the Behavior pack for these are:

`structures`, `features`, `feature_rules` and `biomes`. It's quite self-explanatory: you can store your .mcstructure files from (or for) structure blocks in `structures`, biome files in `biomes`, terrain features, like ores, in `features` and the rules for their generation in `feature_rules`. Let's go over adding a custom biome first.

_Note: it might be easier to create biomes using bridge., a Visual software for Add-on creation (also linked in Links and Contact), since the official Documentation is rather incomplete. You can also generate all example files of vanilla biomes, features and feature rules for reference, like shown here:_

![](/assets/images/guide/gen_coal_ore.png)
_Generating a coal_ore feature using bridge._

However, bridge. is not required.

---

## Custom Biomes

BP/biomes/cold_biome.json

```json
{
	"format_version": "1.13.0",
	"minecraft:biome": {
		"description": {
			"identifier": "cold_biome"
		},
		"components": {
			"minecraft:climate": {
				"downfall": 0.7,
				"snow_accumulation": [0.6, 0.9],
				"temperature": 15.0
			},
			"minecraft:overworld_height": {
				"noise_params": [0.6, 0.9]
			},
			"minecraft:surface_parameters": {
				"sea_floor_depth": 7,
				"sea_floor_material": "minecraft:blue_ice",
				"foundation_material": "minecraft:cobblestone",
				"mid_material": "minecraft:minecraft:concrete",
				"top_material": "minecraft:glass",
				"sea_material": "minecraft:water"
			},
			"minecraft:overworld_generation_rules": {
				"generate_for_climates": [
					["medium", 100],
					["warm", 100],
					["cold", 100]
				]
			},
			"cold_biome": {}
		}
	}
}
```

-   Set `format_version` to 1.13.0: it's the latest biome file version as of the current release.
-   `description` takes only one value: `identifier`. This requires **NO namespace** and **MUST** be the same as the **file's name**.
    (If you do use a namespace, for example `tut:cold_biome`, the file name needs to only match the id, so it has to remain as `cold_biome.json`.
-   `components` is just what you'd expect: something applied to the biome at default. let's look through them:
-   `minecraft:climate` controls everything climate-wise.
-   `downfall` is how often it'll be raining or snowing. 0.0 is for absolutely no rain (like a desert) and 1.0 should mean constant rain.
-   `temperature` is used to define things like water freezing and rain turning into snow.

**You can generate default biome files for reference using bridge.**

-   `overworld_surface` controls blocks generated.
-   `floor_depth` is how deep down lakes and rivers go in blocks.
-   `sea_floor_material` defines the material to be used when generating the river and lake's floor.
-   `foundation_material` is the material to be used approximately between y=5 and y=50. For a desert, for example, it's stone.
-   `sea_material` is the material used as show liquid in lakes, rivers, oceans, etc. For example, in all Overworld biomes, this is set to "minecraft:water".
-   `top_material` defines the material for the highest level. E.g for Plains it's grass.
-   `mid_material` is the layer between 'top' and 'foundation'. For Plains it's dirt.
-   `overworld_height` defines how the Biome will look terrain-wise.

DO NOT use both `noise_type` and `noise_params` at the same time. `noise_params` is an array of the top level of noise and the lowest level of noise allowed in the biome.

![](/assets/images/guide/non_smooth_noise_transition.jpg)
_A non-smooth transition between the same biome, generated with noise_params as [0.1, 0,1] and then [1.0, 1.0]._

-   If you want to use `noise_type`, however, you will be presented with a few pre-generated types of noise. You will probably know how some of them look from the Vanilla game. Here's the list:

`beach, default, extreme, taiga, ocean, mountains, default_mutated, deep_ocean, lowlands, less_extreme, stone_beach, swamp, river, mushroom`.

-   `minecraft_world_generation_rules` is the most important component of all, especially the `generate_for_climates` array. Basically, there are three climates in the game: "warm", "medium" and "cold". They are randomly thrown around every world when it's created [hard-coded]. Now, you can choose how often your custom biome will generate in every specific climate. If you do not provide anything in here, the default value is 0 for every climate, and the biome won't generate. In the example, the **weight** (the smaller the number, the smaller the chance of this biome generating instead of a vanilla one in the climate) for every climate is set to 100 for testing purposes: that makes the biome generate almost everywhere in the Overworld. Once I'm done with testing, however, I'll balance the weight how it's supposed to be. For example, the Vanilla _desert_ has the weight of 3 for warm.

-   This component also takes Objects such as: `hills_transformation`, `mutate_transformation`, `shore_transformation`, `river_transformation`, but their meaning is unclear to me. Contributions are always appreciated. Same goes for the `surface_meaterial_adjustments` component.

-   And, last but not least, BIOME TAGS! They're very simple, but useful. You can set however many of the vanilla or custom tags you want, by adding them in this format in `components`:

```
"tagName": {}
```

Then, you can test for your tag in _environment_sensors_, _filters_, _has_biome_ tests, _spawn rules_, and more.

Your custom biome is now complete! _Note: cold_biome as well as volcanic biomes are now included in the guide's files on [GitHub](https://github.com/KaiFireborn/Minecraft-Bedrock-Full-Beginner-Add-on-development-Guide-FILES)._

---

## Features and Feature Rules

Note: in v.1.15Beta, it is possible to use `.mcstructures` from the `structures` folder instead of `features` to generate custom structures with `feature_rules`. More on that after the update arrives.

Features and Feature Rules are used to generate everything from ores to grass and flowers, vegetation to granite or clay patches.
It is even possible to create custom structures using those, but as it is very grindy and will be much easier after the mentioned update, we won't talk about it just yet.

Now, it's worthwhile to mention that the easiest way to generate Custom Structures is this [auto generator](https://machine-builder.itch.io/frg-v2) by [MACHINE_BUILDER](https://www.youtube.com/channel/UC8FBQgo4AWwKFX97h60NKOQ). However, we'll still learn some other manual feature generation here, because some things like Ores are much more efficient to generate as `ore_feature`s and not `structure_template_feature`s.

Let's make our `tut:blocky` custom block generate as an ore for the tutorial's sake. I'll do it the easy way, like this:

1. Open _bridge._, choose your Add-on.
1. _Add new file>features>diamond_ore and Add new file>feature_rules>diamond_ore_.
1. Now I'll save the files and open them in my Code Editor and make the necessary modifications.

_You could've easily just written the files from scratch or copied them from somewhere without using bridge. in case you are having trouble installing it. **One place to find the Vanilla Files are the [Example Packs](https://www.minecraft.net/en-us/addons), another, a more complete one is [bridge.'s repository](https://github.com/bridge.-core/bridge../tree/master/static/vanilla)**._

## Features

Features are located in `BP/features` and are basically a group of blocks stored in the game's files, which can be placed with a _feature_rule_. The **file name** of a _feature_ **must match** the **identifier** as well.

You can find their Documentation on [bedrock.dev/r/Features](https://bedrock.dev/r/Features)

`BP/features/blocky_ore_feature.json`

```json
{
	"format_version": "1.13.0",
	"minecraft:ore_feature": {
		"description": {
			"identifier": "blocky_ore_feature"
		},
		"count": 8,
		"places_block": "tut:blocky",
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

`BP/feature_rules/overworld_underground_blocky_ore_feature.json`

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

![](/assets/images/guide/ore_gen_sans_stone.jpg)

And yes, 100 as "iterations" is definitely waaay too much ;)

It's a good idea to proceed checking out other feature and feature_rule vanilla files to learn further techniques. However, the ones you were just walked through are enough to create most of what needs to be generated.

---

## Custom Structures

As of MCBE v1.16.20, **Custom Generated structures are possible**.
A simple way to generate Structures is [this](https://machine-builder.itch.io/frg-v2) auto generator by MACHINE_BUILDER, mentioned earlier. It generates all three of the required files for your structure: `feature_rules/mystructure.feature_rule.json`, `feature_rules/mystructure.feature.json` and `structures/mystructure.mcstructure.` You can learn more about defining `.mcstructures` with Structure Blocks in Minecraft itself [here](guide/manifest-function-extension#mcstructure).

---

Now that you have your `.mcstructure`, time to write your `feature` and `feature rule`. The last is the same as with ores (see the beginning of this article). Let's continue to the **Feature**.

-   Remember that the namespace is not required and that the filename must match the identifier, excluding the namespace. So if you have a feature rule with the identifier `tut:myfeaturerule` or simply `myfeaturerule`, the file name can be be `myfeaturerule.json` in both cases.

Here's an code example from the [Features Documentation](https://bedrock.dev/r/Features#minecraft:structure_template_feature):

```json
{
  "format_version": 1.13.0,
  "minecraft:structure_template_feature": {
    "description": {
      "identifier": "example:hot_air_balloon_feature"
    },
    "structure_name": "example:hot_air_balloon",
    "adjustment_radius": 8,
    "facing_direction": "random",
    "constraints": {
      "unburied": {},
      "block_intersection": {
        "block_whitelist": [
          "example:air"
        ]
      }
    }
  }
}
```

-   `structure_name` is the structure's identifier, the one you saved via a Structure Block.

That's pretty much it! Now you're able to generate your own custom Structures in the world.

---

---

## Your progress so far

**What you've done:**

-   Created you very first biome.
-   Made your very first ore generate naturally.
-   Learned to use bridge. for vanilla files generation and referencing.
-   Learned about other Custom Generation methods.
-   Created custom Structures
