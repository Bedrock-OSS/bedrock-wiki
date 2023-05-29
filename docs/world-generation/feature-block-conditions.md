---
title: Block Conditions for Features
category: Tutorials
tags:
    - experimental
mentions:
    - PavelDobCZ23
---

Sometimes you might need to place any feature conditionally depending on what blocks are below or above it for example. Not many features have the option to conditionally place them like so, but with a simple trick we can use it on anything we want.

:::tip
This technique utilizes `aggregate_feature` and `single_block_feature` features. If you want to learn more about those, visit [Feature Types](/world-generation/feature-types) article.
:::

## Files

### Features

This feature places a `single_block_feature` which can be specified with the conditions we need for some other feature. The block can be kept there if it doesn't interrupt your desired features, but we will replace it with air in the next feature so that it doesn't cause any issues later on. This feature acts as a "dummy" feature because we only want its condition part but we don't need it to actually place anything.

<CodeHeader>BP/features/block_condition_feature.json</CodeHeader>

```json
{
    "format_version": "1.18.0",
    "minecraft:single_block_feature": {
        "description": {
            "identifier": "wiki:block_condition_feature"
        },
        "places_block": "minecraft:cobblestone", //Any block that isn't in "may_replace" list.
        "enforce_placement_rules": false,
        "enforce_survivability_rules": false,
        "may_replace": ["minecraft:air"], //Only blocks the feature is allowed to be placed in.
        "may_attach_to": { //Attachment conditions - what blocks can surround the feature when its being placed
            "bottom": ["minecraft:grass"] //Only blocks the feature can be placed on top of.
        }
    }
}
//This "dummy" feature will only allow the feature to generate in the air, right above a grass block.
```

This next feature is the one that is going to replace the cobblestone with the original air block that was there, however it can be omitted if you choose a block you actually want there or if it won't cause you any issues later.

<CodeHeader>BP/features/block_replacement_feature.json</CodeHeader>

```json
{
    "format_version": "1.18.0",
    "minecraft:single_block_feature": {
        "description": {
            "identifier": "wiki:block_replacement_feature"
        },
        "places_block": "minecraft:air", //Replaces the block with another one which doesn't cause us any issue.
        "enforce_placement_rules": false,
        "enforce_survivability_rules": false,
        "may_replace": ["minecraft:cobblestone"] //The block that we specified in the previous feature.
    }
}
//This feature will replace the block with air that originally was there so it won't cause us any issue.
```

This is a feature that places the condition "dummy" feature, the feature that gets rid of the "dummy" block placed by the condition and after that the actual features we want to conditionally place. It uses `early_out` with value `first_failure` to make the aggregate stop if the conditional placement fails. It is the feature placed by a feature rule.

<CodeHeader>BP/features/aggregate_placement_rock_feature.json</CodeHeader>

```json
{
    "format_version": "1.18.0",
    "minecraft:aggregate_feature": {
        "description": {
            "identifier": "wiki:aggregate_placement_rock_feature"
        },
        "features": [
            "wiki:block_condition_feature", //Single block feature that is used as "dummy" feature to act as our condition.
            "wiki:block_replacement_feature", //This feature replaces the "dummy" block we used in the feature above to not cause us any issues later.
            //Any feature from this point on is what we actually want to place.
            "wiki:rock_ore_feature"
        ],
        "early_out": "first_failure" //This makes sure that if the first(or any) feature fails, it will not continue to place anything else in the list.
    }
}
//This is a feature that places all the features one by one in order and is placed by the feature rule.
```

This is the actual feature we want to be conditionally placed. It is `ore_feature` which doesn't have actual condition for us to allow it to only be placed in air and on a grass block, so this technique has helped us achieve that.

<CodeHeader>BP/features/rock_ore_feature.json</CodeHeader>

```json
{
	"format_version": "1.18.0",
	"minecraft:ore_feature": {
		"description": {
			"identifier": "wiki:rock_ore_feature"
		},
		"count": 12,
		"replace_rules": [
			{
				"places_block": "minecraft:stone",
				"may_replace": ["minecraft:air","minecraft:grass"]
			},
			{
				"places_block": {
                    "name": "minecraft:dirt",
                    "states": {
                      "dirt_type": "coarse"
                    }
                },
				"may_replace": ["minecraft:dirt"]
			}
		]
	}
}
```
:::tip
If you want to learn more about ore features, you can visit [Generating Custom Ores](/world-generation/custom-ores) tutorial.
:::

### Feature Rule

<CodeHeader>BP/feature_rules/overworld_after_surface_rock_feature.json</CodeHeader>

```json
{
	"format_version": "1.18.0",
	"minecraft:feature_rules": {
		"description": {
			"identifier": "wiki:overworld_after_surface_rock_feature",
			"places_feature": "wiki:aggregate_placement_rock_feature"
		},
		"conditions": {
			//Places the feature in any overworld biome along with features in the after_surface_pass
			"placement_pass": "after_surface_pass",
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
			//1 in 3 chance to attempt 1 placement in chunk
            "scatter_chance": 33,
			"iterations": 1, 
			"coordinate_eval_order": "xzy",
			"x": {
				"distribution": "uniform",
				"extent": [0, 15]
			},
			//Places the feature along the heightmap
			"y": "q.heightmap(v.worldx,v.worldz)",
			"z": {
				"distribution": "uniform",
				"extent": [0, 15]
			}
		}
	}
}
```

## Summary

After reading this tutorial you should be able to use block conditions on any feature you want. This was a very basic example as this can be used for far more complex creations and can be used with any feature. 

Like that we have made a rock feature that can only be placed in air blocks and above grass blocks.

Generation screenshot:

![](/assets/images/world-generation/rock_feature.png)
