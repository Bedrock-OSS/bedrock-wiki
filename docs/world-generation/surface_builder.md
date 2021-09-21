---
title: Generating Patches
mention:
	- DerpMcaddon
tags:
	- experimental
---

Feature based surface builder is a feature that puts together a collection of blocks that serve to add variety and decoration to the Overworld surface. This tutorial will explain what is needed to create this feature, including size, frequency, generation location, and more!

## Single Block Features

Single block features are going to be the base of our surface builder. They will define which blocks we are goingto use.  For this tutorial I'll be using Coarse Dirt, Podzol and Cobblestone.

Learn more about single block features [here](/world-generation/feature-types.html#single-block-features)

Coarse Dirt File

<CodeHeader>BP/features/coarse_dirt_feature.json</CodeHeader>

```json
{
	"format_version": "1.13.0",
	"minecraft:single_block_feature": {
		"description": {
			"identifier": "wiki:coarse_dirt_feature"
		},
		"places_block": {//Coarse dirt shares same identifier as dirt, set it using name and states
			"name": "minecraft:dirt",
			"states": {
				"dirt_type": "coarse"
			}
		},
		"enforce_survivability_rules": false,
		"enforce_placement_rules": false,
		"may_replace": [
			"minecraft:grass"//The block can only replace grass
		]
	}
}
```

Podzol File

<CodeHeader>BP/features/podzol_feature.json</CodeHeader>

```json
{
	"format_version": "1.13.0",
	"minecraft:single_block_feature": {
		"description": {
			"identifier": "wiki:podzol_feature"
		},
		"places_block": "minecraft:podzol",//Podzol can be defined using direct identifier
		"enforce_survivability_rules": false,
		"enforce_placement_rules": false,
		"may_replace": [
			"minecraft:grass"//The block can only replace grass
		]
	}
}
```

Cobblestone File

<CodeHeader>BP/features/cobblestone_feature.json</CodeHeader>

```json
{
	"format_version": "1.13.0",
	"minecraft:single_block_feature": {
		"description": {
			"identifier": "wiki:cobblestone_feature"
		},
		"places_block": "minecraft:cobblestone",//Podzol can be defined using direct identifier
		"enforce_survivability_rules": false,
		"enforce_placement_rules": false,
		"may_replace": [
			"minecraft:grass"//The block can only replace grass
		]
	}
}
```


## Weighted Random Features

Weighted random features are going to be our *randomizer* to select between each type of blocks.

Learn more about weighted random features [here](/world-generation/feature-types.html#weighted-random-features)

<CodeHeader>BP/features/select_surface_block_feature.json</CodeHeader>

```json
{
	"format_version": "1.13.0",
	"minecraft:weighted_random_feature": {
		"description": {
			"identifier": "wiki:select_surface_block_feature"
		},
		"features": [
			[
				"wiki:coarse_dirt_feature", //Coarse dirt weighs 5
				5
			],
			[
				"wiki:podzol_feature",//Podzol dirt weighs 3
				3
			],
			[
				"wiki:cobblestone_feature",//Cobblestone dirt weighs 2
				2
			]
		]
	}
}
```

## Scatter Features

Scatter features are an important part of our surface builder. It will determine the size, shape and number of blocks in one blob.

Learn more about scatter features [here](/world-generation/feature-types.html#scatter-features)


<CodeHeader>BP/features/scatter_surface_block_feature.json</CodeHeader>

```json
{
	"format_version": "1.13.0",
	"minecraft:scatter_feature": {
		"description": {
			"identifier": "wiki:scatter_surface_block_feature"
		},
		"iterations": 25,
		"x": {
			"extent": [
				0,
				8
			],
			"distribution": "gaussian"
		},
		"z": {
			"extent": [
				0,
				8
			],
			"distribution": "gaussian"
		},
		"y": "query.heightmap(v.worldx, v.worldz) -1",
		"places_feature": "wiki:select_surface_block_feature"//Weighted random feature identifier
	}
}
```


* `iterations` determine how many blocks will be placed. I'm going to use the Molang `math.random` function to randomize the number of blocks. In this case, it'll be 20 to 25 blocks.

* `extent` use an array to determine the size of the blob. `[0, 8]` means the size is extended from 0 to 8 blocks. So, our blob would be 8 blocks long both on X and Z axis. **Only use this for X and Z distribution**.

 
* `"y": "query.heightmap(v.worldx, v.worldz) -1` means it will put the block on the highest block on the y coordinate -1. So it'll always put the feature on the surface.


* `distribution` specifies the type of distribution to use. Available include `Gaussian`, `Inverse Gaussian`, `Uniform`,`Fixed Grid` and `Jittered Grid`


## Feature Rule

This is the final step for our surface builder. The feature rules for our surface builders are slightly different.


<CodeHeader>BP/feature_rules/overworld_surface_blocks_feature.json</CodeHeader>

```json
{
	"format_version": "1.13.0",
	"minecraft:feature_rules": {
		"description": {
			"identifier": "wiki:overworld_surface_blocks_feature",
			"places_feature": "wiki:scatter_surface_block_feature"
		},
		"conditions": {
			"placement_pass": "surface_pass",
			"minecraft:biome_filter": {
				"test": "has_biome_tag",
				"operator": "==",
				"value": "overworld"//You can change this to whatever biometag you want
			}
		},
		"distribution": {
			"iterations": 1,
			"x": {
				"extent": [
					0,
					16
				],
				"distribution": "uniform"
			},
			"y": 0,
			"z": {
				"extent": [
					0,
					16
				],
				"distribution": "uniform"
			},
			"scatter_chance": {//Chance of the blob generating each chunk
				"numerator": 1,
				"denominator": 5
			}
		}
	}
}
```

And our surface builder is done! Feel free to modify and messing around with it!
