---
title: Adding a Loot Table
nav_order: 8
prefix: '8.'
---

Next, we'll enhance the custom Ghost entity by adding some more basic mechanics to it:

## Loot tables

First, we'll make the ghost drop Ectoplasm upon death: create the following file:

TODO: needs to be finished

<CodeHeader>BP/loot_tables/entities/ghost.json</CodeHeader>

```json
{
	"pools": [
		{
			"rolls": 1,
			"entries": [
				{
					"type": "item",
					"name": "wiki:ectoplasm",
					"weight": 1,
					"functions": [
						{
							"function": "set_count",
							"count": {
								"min": 1,
								"max": 3
							}
						}
					]
				}
			]
		}
	]
}
```

## Spawn rules

Next, we'll make the ghost spawn in deserts at night:

<CodeHeader>BP/spawn_rules/ghost.json</CodeHeader>

```json
{
  "format_version": "1.8.0",
  "minecraft:spawn_rules": {
    "description": {
      "identifier": "wiki:ghost",
      "population_control": "monster"
    },
    "conditions": [
      {
        "minecraft:spawns_on_surface": {
        },
        "minecraft:brightness_filter": {
          "min": 0,
          "max": 7,
          "adjust_for_weather": true
        },
        "minecraft:difficulty_filter": {
          "min": "easy",
          "max": "hard"
        },
        "minecraft:weight": {
          "default": 80
        },
        "minecraft:herd": {
          "min_size": 1,
          "max_size": 3
        },
        "minecraft:biome_filter": {
          "test": "has_biome_tag",
          "operator": "==",
          "value": "desert"
        }
      }
    ]
  }
}
```

## Crafting recipes

And finally, as an introduction to recipes, we'll make the Ectoplasm craftable into Slime Blocks.

## Your progress so far:

**What you've done:**

-   [x] Setup your pack;
-   [x] Create a custom item;
-   [x] Create a custom entity;
-   [x] Create the entity's loot, spawn rules, and a custom recipe;

**What are you to do next:**
Congratulations! you have finished the Guide and created your first Add-on.
