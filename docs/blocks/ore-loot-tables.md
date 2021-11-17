---
title: Ore Loot Tables
tags:
    - experimental
    - easy
mention:
    - SykoUSS
    - ExDrill
    - MedicalJewel105
---

## Features

This tutorial aims to show a new way of creating custom ore blocks with a proper loot table. The `minecraft:loot` component will run the specified loot table regardless of the tool used, but by adding the `match_tool` condition to your loot table you can specify what tools are required per pool.

Features:

-   Can be mined using any given item (this tutorial covers the iron pickaxe)
-   Can specify enchantments on items

Issues:

-   All items must be specified individualy
-   Non-player methods of breaking the block (explosions, commands, etc.) will fail to drop the loot

## Block Behavior

The following block behavior can be used as a template. Don't forget to set the block's texture using `terrain_texture.json`.

<CodeHeader>BP/blocks/silver_ore.json</CodeHeader>

```json
{
	"format_version": "1.16.100",
	"minecraft:block": {
		"description": {
			"identifier": "tut:silver_ore"
		},
		"components": {
			//Basic components
			"minecraft:creative_category": {
				"category": "nature",
				"group": "itemGroup.name.ore"
			},
			"minecraft:destroy_time": 10,
			"minecraft:block_light_absorption": 15,
			"minecraft:explosion_resistance": 3,
			"minecraft:unit_cube": {},
			"minecraft:material_instances": {
				"*": {
					"texture": "silver_ore",
					"render_method": "opaque"
				}
			},
			"minecraft:on_player_destroyed": {
				"event": "xp_reward"
			},
			"minecraft:loot": "loot_tables/blocks/silver_ore.json" //The component will not run the loot if the held tool has silk touch
		},
		"events": {
			"xp_reward": {
				"run_command": {
					"command": [
						"structure load my_xp_structure ~~~" //You can download structure with saved xp orbs lower
					]
				}
			}
		}
	}
}
```

## Loot Table

The example shown, displays the required components

<CodeHeader>BP/loot_tables/blocks/silver_ore.json</CodeHeader>

```json
{
	"pools": [
		{
			"rolls": 1,
			"conditions": [
				{
					"condition": "match_tool",
					"item": "minecraft:iron_pickaxe",
					"count": 1
				}
			],
			"entries": [
				{
					"type": "item",
					"name": "tut:silver_ore"
				}
			]
		}
	]
{
```

## Specifying Enchantments

If needed you can add the enchantments section to your condition, but remember each tool and level must be listed as seperate pools

<CodeHeader>BP/loot_tables/blocks/silver_ore.json#pools</CodeHeader>

```json
"conditions": [
	{
		"condition": "match_tool",
		"item": "minecraft:iron_pickaxe",
		"count": 1,
		"enchantments": [
			{
				"fortune": {
					"level": 1
				}
			}
		]
	}
]
```

## Download .mcstructure

<BButton link="https://wiki.bedrock.dev/assets/packs/tutorials/ore-loot/my_xp_structure.mcstructure">Download structure here</BButton>

## Result

![](/assets/images/blocks/ore-loot/result.gif)
