---
title: Custom Noise Based Terrain Generation
tags:
    - experimental
mention:
    - Apex360
---

In this tutorial we're gonna see how we can make noise based terrain using the `q.noise` molang query.

## Single Block Feature

First we will define the single block feature. It will define the block that is going to be generated. For this tutorial I'll use stone.

<CodeHeader>BP/features/stone_feature.json</CodeHeader>

```json
{
	"format_version": "1.13.0",
	"minecraft:single_block_feature": {
		"description": {
			"identifier": "wiki:stone_feature"
		},
		"places_block": "minecraft:cobblestone",
		"enforce_survivability_rules": false,
		"enforce_placement_rules": false
	}
}
```

## Scatter Feature

The scatter feature is the main feature which we'll be using to generate the terrain.

<CodeHeader>BP/features/column.json</CodeHeader>

```json
{
	"format_version": "1.13.0",
	"minecraft:scatter_feature": {
		"description": {
			"identifier": "wiki:column"
		},
		"iterations": "t.height=64+(q.noise(v.origin/64,v.originx/64))*16; return t.height;",
		"places_feature": "wiki:stone_feature",
		"x": 0,
		"z": 0,
		"y": {
			"extent": [
				0,
				"t.height"
			],
			"distribution": "fixed_grid"
		}
	}
}
```

Let me explain whats happening in the `iterations`:
  In the iterations we've defined a temp `t.height` in which we've defined our main noise function
  In `t.height` the value that we're adding first is the base height, basically the height at which the function starts
  After that we're querying perlin using the `q.noise` query which returns values ranging from -1 to 1 and dividing that by a value which smooths out the function
  Then we're multiplying the whole function by a value which in simple words is basically the variation in the terrain

So what's happening here is that we are getting values from the `t.height` temp and assigning them to the y extent ranging from 0 to the value thus generating a column. Now this value is going to vary column by column but not in a random way as `q.noise` queryies Perlin noise, meaning the values are relative to each other. So instead of getting values like 64,69,45,100,7,56 we are getting values like 64,65,66,68,69,68,66,65 and so on.

## Feature Rule

<CodeHeader>BP/feature_rules/column_grid_placement.json</CodeHeader>

```json
{
	"format_version": "1.13.0",
	"minecraft:feature_rules": {
		"description": {
			"identifier": "wiki:column_grid_placement",
			"places_feature": "wiki:column"
		},
		"conditions": {
			"placement_pass": "first_pass",
			"minecraft:biome_filter": {
				"any_of": [
					{
						"test": "has_biome_tag",
						"value": "overworld"
					},
					{
						"test": "has_biome_tag",
						"value": "overworld_generation"
					}
				]
			}
		},
		"distribution": {
			"iterations": 256,
			"x": {
				"extent": [
					0,
					15
				],
				"distribution": "fixed_grid"
			},
			"y": 0,
			"z": {
				"extent": [
					0,
					15
				],
				"distribution": "fixed_grid"
			}
		}
	}
}
```
In this we have set the `iteration` to 256 as the area of a whole chunk is 256 (16x16) to make the columns generate in the whole chunk.

And our custom noise based terrain is finished! Feel free to mess with the values.
