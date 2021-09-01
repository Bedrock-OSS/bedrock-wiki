---
title: Generating Custom Structures
mention:
	- DerpMcaddon
tags:
	- experimental
---

Structure features places exported `.mcstructure` file into the world using `minecraft:structure_template_feature`.

This tutorial will show you how to make:

-   Surface structure,

-   Underground structure,

-   Floating structure,

-   Underwater structure, and

-   Water surface structure

## Preparing the Structure File

 `.mcstructure` files are exported using *Structure Blocks*. They can only be obtained via commands

• `/give @p structure_block` 

Place it near your structure and right click the block.
Select the save mode, then set the size and offset so that your structure fits into the bounding box.

:::warning
Currently, maximum structure size for `structure_template_feature` is 64 x 256 x 64 blocks
:::

![](/assets/images/world-generation/structure-features/structure_block_gui.png)

Finally, click *Export*, save it to `BP/structures`, and now you have the `.mcstructure` file!

![](/assets/images/world-generation/structure-features/structure_folder.png)



:::tip
For exporting structure on android devices, use [Export Structure Button for Android](https://mcpedl.com/export-structure-button-android-addon/)
:::

## Surface Structure

### Feature File

<CodeHeader>BP/features/house_feature.json</CodeHeader>

```json
{
	"format_version": "1.13.0",
	"minecraft:structure_template_feature": {
		"description": {
			"identifier": "wiki:house_feature"
		},
		"structure_name": "mystructure:house",
		"adjustment_radius": 4,
		"facing_direction": "random",
		"constraints": {
			"grounded": {},
			"unburied": {},
			"block_intersection": {
				"block_allowlist": [
					"minecraft:air" //The structure can only replace air
				]
			}
		}
	}
}
```

### Feature Rule

<CodeHeader>BP/feature_rules/plains_house_feature.json</CodeHeader>

```json
{
	"format_version": "1.13.0",
	"minecraft:feature_rules": {
		"description": {
			"identifier": "wiki:plains_house_feature",
			"places_feature": "wiki:house_feature"
		},
		"conditions": {
			"placement_pass": "first_pass",
			"minecraft:biome_filter": {
				"test": "has_biome_tag",
				"operator": "==",
				"value": "plains"
			}
		},
		"distribution": {
			"iterations": 1,
			"x": {
				"extent": [0, 16],
				"distribution": "uniform"
			},
			"y": "query.heightmap(v.worldx, v.worldz)", //Generates the feature on the highest block on the collumn
			"z": {
				"extent": [0, 16],
				"distribution": "uniform"
			},
			"scatter_chance": {//Chance of the structure to generate
				"numerator": 1,
				"denominator": 25
			}
		}
	}
}
```

![](/assets/images/world-generation/structure-features/house.png)

## Underground Structure

### Feature File

<CodeHeader>BP/features/bunker_feature.json</CodeHeader>

```json
{
	"format_version": "1.13.0",
	"minecraft:structure_template_feature": {
		"description": {
			"identifier": "wiki:bunker_feature"
		},
		"structure_name": "mystructure:bunker",
		"adjustment_radius": 4,
		"facing_direction": "random",
		"constraints": {
			"block_intersection": {
				"block_allowlist": [
					"minecraft:air", //Makes the feature only replace air and stone
					"minecraft:stone"
				]
			}
		}
	}
}
```

### Feature Rule

<CodeHeader>BP/feature_rules/overworld_bunker_feature.json</CodeHeader>

```json
{
	"format_version": "1.13.0",
	"minecraft:feature_rules": {
		"description": {
			"identifier": "wiki:overworld_bunker_feature",
			"places_feature": "wiki:bunker_feature"
		},
		"conditions": {
			"placement_pass": "first_pass",
			"minecraft:biome_filter": {
				"test": "has_biome_tag",
				"operator": "==",
				"value": "overworld"
			}
		},
		"distribution": {
			"iterations": 1,
			"x": {
				"extent": [0, 16],
				"distribution": "uniform"
			},
			"y": {
				"extent": [
					11,
					50 //Makes the structure generates between y-11 and y-50
				],
				"distribution": "uniform"
			},
			"z": {
				"extent": [0, 16],
				"distribution": "uniform"
			},
			"scatter_chance": {//Chance of the structure to generate
				"numerator": 1,
				"denominator": 15
			}
		}
	}
}
```

![](/assets/images/world-generation/structure-features/bunker.png)

## Floating Feature

### Feature File

<CodeHeader>BP/features/balloon_feature.json</CodeHeader>

```json
{
	"format_version": "1.13.0",
	"minecraft:structure_template_feature": {
		"description": {
			"identifier": "wiki:balloon_feature"
		},
		"structure_name": "mystructure:balloon",
		"adjustment_radius": 4,
		"facing_direction": "random",
		"constraints": {
			"block_intersection": {
				"block_allowlist": [
					"minecraft:air" //Makes the structure only replace air
				]
			}
		}
	}
}
```

### Feature Rule

<CodeHeader>BP/feature_rules/overworld_balloon_feature.json</CodeHeader>

```json
{
	"format_version": "1.13.0",
	"minecraft:feature_rules": {
		"description": {
			"identifier": "wiki:overworld_baloon_feature",
			"places_feature": "wiki:balloon_feature"
		},
		"conditions": {
			"placement_pass": "first_pass",
			"minecraft:biome_filter": {
				"test": "has_biome_tag",
				"operator": "==",
				"value": "overworld"
			}
		},
		"distribution": {
			"iterations": 1,
			"x": {
				"extent": [0, 16],
				"distribution": "uniform"
			},
			"y": {
				"extent": [
					100, //Makes the structure generate from y100 to y200
					200
				],
				"distribution": "uniform"
			},
			"z": {
				"extent": [0, 16],
				"distribution": "uniform"
			},
			"scatter_chance": {//Chance of the structure to generate
				"numerator": 1,
				"denominator": 25
			}
		}
	}
}
```

![](/assets/images/world-generation/structure-features/balloon.png)

## Underwater Structure

::: tip
For underwater structures, make sure you waterlogged the structure, because Minecraft won't waterlog them automatically!
:::

![](/assets/images/world-generation/structure-features/waterlogged_structure.png)


### Feature File

<CodeHeader>BP/features/aqua_temple_feature.json</CodeHeader>

```json
{
	"format_version": "1.13.0",
	"minecraft:structure_template_feature": {
		"description": {
			"identifier": "wiki:aqua_temple_feature"
		},
		"structure_name": "mystructure:aqua_temple",
		"adjustment_radius": 4,
		"facing_direction": "random",
		"constraints": {
			"block_intersection": {
				"block_allowlist": [
					"minecraft:water" //Makes the structure only replace water
				]
			}
		}
	}
}
```

### Feature Rule

<CodeHeader>BP/feature_rules/ocean_aqua_temple_feature.json</CodeHeader>

```json
{
	"format_version": "1.13.0",
	"minecraft:feature_rules": {
		"description": {
			"identifier": "wiki:ocean_aqua_temple_feature",
			"places_feature": "wiki:aqua_temple_feature"
		},
		"conditions": {
			"placement_pass": "first_pass",
			"minecraft:biome_filter": {
				"test": "has_biome_tag",
				"operator": "==",
				"value": "ocean"
			}
		},
		"distribution": {
			"iterations": 1,
			"x": {
				"extent": [0, 16],
				"distribution": "uniform"
			},
			"y": "query.above_top_solid(v.worldx, v.worldz)", //Place the feature on top of the highest solid block on the collumn, so it won't place it on the surface of the water
			"z": {
				"extent": [0, 16],
				"distribution": "uniform"
			},
			"scatter_chance": {//Chance of the structure to generate
				"numerator": 1,
				"denominator": 25
			}
		}
	}
}
```

![](/assets/images/world-generation/structure-features/aqua_temple.png)

## Water Surface Structure

### Feature File

<CodeHeader>BP/features/raft_feature.json</CodeHeader>

```json
{
	"format_version": "1.13.0",
	"minecraft:structure_template_feature": {
		"description": {
			"identifier": "wiki:raft_feature"
		},
		"structure_name": "mystructure:raft",
		"adjustment_radius": 4,
		"facing_direction": "random",
		"constraints": {
			"block_intersection": {
				"block_allowlist": [
					"minecraft:water", //Makes the structure only replace air and water
					"minecraft:air"
				]
			}
		}
	}
}
```

### Feature Rule

<CodeHeader>BP/feature_rules/ocean_raft_feature.json</CodeHeader>

```json
{
	"format_version": "1.13.0",
	"minecraft:feature_rules": {
		"description": {
			"identifier": "wiki:ocean_raft_feature",
			"places_feature": "wiki:raft_feature"
		},
		"conditions": {
			"placement_pass": "first_pass",
			"minecraft:biome_filter": {
				"test": "has_biome_tag",
				"operator": "==",
				"value": "ocean"
			}
		},
		"distribution": {
			"iterations": 1,
			"x": {
				"extent": [0, 16],
				"distribution": "uniform"
			},
			"y": 62, //Makes the feature generates only on y62, which is Minecraft water level
			"z": {
				"extent": [0, 16],
				"distribution": "uniform"
			},
			"scatter_chance": {
				"numerator": 1,//Chance of the structure to generate
				"denominator": 25
			}
		}
	}
}
```

![](/assets/images/world-generation/structure-features/raft.png)
