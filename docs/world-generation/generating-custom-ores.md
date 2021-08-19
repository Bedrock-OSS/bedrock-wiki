---
title: Generating Custom Ores
mention:
	- DerpMcaddon
---

Ore Features are basic but important features. They can cluster from blocks by replacing blocks where they are generated. This tutorial will show you how to make mineral ores that naturally generates.

For this tutorial, I'll be using 2 custom blocks, Titanite Ore and Deepslate Titanite Ore. For how to make custom blocks, visit [Blocks Intro](https://wiki.bedrock.dev/blocks/blocks-intro.html).

Setting Up The Feature File

<CodeHeader>BP/features/titanite_ore_feature.json</CodeHeader>

```json
{
	"format_version": "1.17.0",
	"minecraft:ore_feature": {
		"description": {
			"identifier": "derp:titanite_ore_feature"
		},
		"count": 8, // Placement attempts
		"replace_rules": [
			{
				// Replace all stone variant (andesite, granite,diorite) with titanite ore
				"places_block": "derp:titanite_ore",
				"may_replace": [
					"minecraft:stone"
				]
			},
			{
				// Replace deepslate with deepslate titanite ore
				"places_block": "derp:deepslate_titanite_ore",
				"may_replace": [
					"minecraft:deepslate"
				]
			}
		]
	}
}
```

Setting Up The Feature Rule

<CodeHeader>BP/feature_rules/overworld_underground_titanite_ore_feature.json</CodeHeader>

```json
{
	"format_version": "1.13.0",
	"minecraft:feature_rules": {
		"description": {
			"identifier": "derp:overworld_underground_titanite_ore_feature",
			"places_feature": "derp:titanite_ore_feature" // Identifier from the feature file
		},
		"conditions": {
			"placement_pass": "underground_pass",
			"minecraft:biome_filter": [ // Scatter the ore throughout the Overworld
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
				"extent": [
					0,
					16
				]
			},
			"y": {
				"distribution": "uniform",
				"extent": [
					0, // Minimum y level for the ore to generate
					62 // Maximum y level for the ore to generate
				]
			},
			"z": {
				"distribution": "uniform",
				"extent": [
					0,
					16
				]
			}
		}
	}
}
```

How To Test

Just do usual caving, but if your ores are rare use commands instead,example ```/fill ~8 ~8 ~8 ~-8 ~-8 ~-8 air 0 keep derp:titanite_ore```

Stone ores:

![](/assets/images/world-generation/generating-custom-ores/stone_ore.png)

Deepslate ores:

![](/assets/images/world-generation/generating-custom-ores/deepslate_ore.png)