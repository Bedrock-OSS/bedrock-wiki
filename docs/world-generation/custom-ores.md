---
title: Generating Custom Ores
category: Tutorials
tags:
	- experimental
mention:
	- DerpMcaddon
---

`ore_feature`'s are basic but important features! They can form clusters of blocks by replacing blocks where they are generated. This tutorial will show you how to make mineral ores that naturally generate.

The use of features and feature rules requires Creation of Custom Biomes to be enabled in your world settings. If your block doesn't generate, make sure it's enabled!

:::tip
For this tutorial, I'll be using 2 custom blocks, Titanite Ore and Deepslate Titanite Ore. For how to make custom blocks, visit the [Blocks Intro](/blocks/blocks-intro) page.
:::

## The Feature File

<CodeHeader>BP/features/titanite_ore_feature.json</CodeHeader>

```json
{
	"format_version": "1.17.0",
	"minecraft:ore_feature": {
		"description": {
			"identifier": "wiki:titanite_ore_feature"
		},
		"count": 8, // Placement attempts
		"replace_rules": [
			{
				// Replace all stone variants (andesite, granite, and diorite) with titanite ore
				"places_block": "wiki:titanite_ore",
				"may_replace": ["minecraft:stone"]
			},
			{
				// Replace deepslate with deepslate titanite ore
				"places_block": "wiki:deepslate_titanite_ore",
				"may_replace": ["minecraft:deepslate"]
			}
		]
	}
}
```

## The Feature Rule

<CodeHeader>BP/feature_rules/overworld_underground_titanite_ore_feature.json</CodeHeader>

```json
{
	"format_version": "1.13.0",
	"minecraft:feature_rules": {
		"description": {
			"identifier": "wiki:overworld_underground_titanite_ore_feature",
			"places_feature": "wiki:titanite_ore_feature" // Identifier from the feature file
		},
		"conditions": {
			"placement_pass": "underground_pass",
			"minecraft:biome_filter": [
				// Scatter the ore throughout the Overworld
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
			"iterations": 10, // Placement attempts of the cluster, not the ore blocks
			"coordinate_eval_order": "zyx",
			"x": {
				"distribution": "uniform",
				"extent": [0, 16]
			},
			"y": {
				"distribution": "uniform", // You can use "triangle" to make ores more common in the middle of the extent
				"extent": [
					0, // Minimum y level for the ore to generate
					62 // Maximum y level for the ore to generate
				]
			},
			"z": {
				"distribution": "uniform",
				"extent": [0, 16]
			}
		}
	}
}
```

## Testing

You can look for the ore by exploring caves, but if your ores are rare, you can use commands instead to check if they're generating. Simply place this command into a repeating command block, then fly around:

-   `execute @a ~ ~ ~ fill ~8 ~8 ~8 ~-8 ~-8 ~-8 air 0 replace wiki:titanite_ore`

Stone ores:

![](/assets/images/world-generation/generating-custom-ores/stone_ore.png)

Deepslate ores:

![](/assets/images/world-generation/generating-custom-ores/deepslate_ore.png)
