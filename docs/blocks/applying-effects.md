---
title: Applying constant Effects to Entities
category: Tutorials
tags:
    - experimental
    - easy
mentions:
    - MysticChair
	- SirLich
	- MedicalJewel105
	- QuazChick
---

This tutorial aims to show how to apply status effects to entities as long as these entities stand on the block. There are few issues that can encounter during trial-and-error, this guide is a workaround to these issues. List of potential problems is attached on the bottom of this page.
Please visit [blocks](/blocks/blocks-stable) first to have better understanding of components used in this tutorial.

## Code

We will need to add a couple things to our code, first let's start with property that will hold `true` and `false` values:

<CodeHeader>BP/blocks/damage_block.json</CodeHeader>

```json
{
	"properties": {
		"wiki:is_on_block": [true, false]
	}
}
```

Now we need `minecraft:ticking` component that will check if our property is set to `true` and if so, trigger the event causing the effect to apply:

<CodeHeader>BP/blocks/damage_block.json</CodeHeader>

```json
{
	"minecraft:ticking": {
		"range": [1, 1],
		"looping": true,
		"on_tick": {
			"event": "wiki:add_effect_event",
			"target": "self",
			"condition": "query.block_property('wiki:is_on_block`) == true"
		}
	}
}
```

We will use `minecraft:on_step_on` component to fire the event that will set our `wiki:is_on_block` to `true`:

<CodeHeader>BP/blocks/damage_block.json</CodeHeader>

```json
{
	"minecraft:on_step_on": {
		"event": "wiki:change_property",
		"target": "self"
	}
}
```

Time to setup `events` section. First let's set the `wiki:change_property` event:

<CodeHeader>BP/blocks/damage_block.json</CodeHeader>

```json
{
	"wiki:change_property": {
		"set_block_property": {
			"wiki:is_on_block": true
		}
	}
}
```

The last thing to add is event that will trigger the effect:

<CodeHeader>BP/blocks/damage_block.json</CodeHeader>

```json
{
	"wiki:add_effect_event": {
		"run_command": {
			"command": ["effect @e[r=1] wither 2 2 false"]
		}
	}
}
```

And done! The code above will trigger the desired status effect as long as the entity is standing on a block.

## Notes and issues

Some context for the last part of the code:

-   **Q**: Why does the status effect is triggered via `run_command` event function if there's already `add_mob_effect` event function that does that?

-   **A**: `add_mob_effect` seems to not work if triggered from `minecraft:ticking`, that's why we use `run_command` as a workaround.

-   **Q**: What is `false` value in `wiki:is_on_block` used for?

-   **A**: `false` value is needed as setting `wiki:is_on_block: true` crashes the game. Setting `wiki:is_on_block: [true]` seems to work, however creates many debug log errors.

Depending on the desired outcome, there is a potential issue if effect duration is set to less than 2 seconds. If the effect is causing damage to an entity (for example via poison), that damage will be applied as soon as the effect is triggered. This results in the situation where entity receives damage faster than in vanilla Minecraft, since applying effect is quicker than damage that occurs from effects applied for more than 2 seconds (considering the entity is moving). To better understand this, simply set the effect duration in `command` to 1 second and compare the results.
Having a 2 second duration allows the game to apply the damage in correct pace.

<Spoiler title="Example code">

<CodeHeader>BP/blocks/damage_block.json</CodeHeader>

```json
{
	"format_version": "1.16.100",
	"minecraft:block": {
		"description": {
			"identifier": "wiki:damage_block",
			"properties": {
				"wiki:is_on_block": [true, false]
			}
		},
		"components": {
			"minecraft:unit_cube": {},
			"minecraft:creative_category": {
					"category": "nature"
			},
			"minecraft:loot": "loot_tables/empty.json",
			"minecraft:on_step_on": {
				"event": "wiki:change_property",
				"target": "self"
			},
			"minecraft:ticking": {
				"range": [1, 1],
				"looping": true,
				"on_tick": {
					"event": "wiki:add_effect_event",
					"target": "self",
					"condition": "query.block_property('wiki:is_on_block') == true"
				}
			},
			"minecraft:breakonpush": true,
			"minecraft:destroy_time": 0.2,
			"minecraft:explosion_resistance": 1,
			"minecraft:friction": 0.6,
			"minecraft:flammable": {
				"flame_odds": 0,
				"burn_odds": 0
			},
			"minecraft:map_color": "#181818"
		},
		"events": {
			"wiki:change_property": {
				"set_block_property": {
					"wiki:is_on_block": true
				}
			},
			"wiki:add_effect_event": {
				"run_command": {
					"command": ["effect @e[r=1] wither 2 2 false"]
				}
			}
		}
	}
}
```

</Spoiler>
