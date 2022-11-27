---
title: 'Blocks 1.16.100+'
category: General
tags:
    - experimental
---

Better documentation on the new block format introduced in the Minecraft Beta 1.16.100.

:::warning
This document covers experimental features, for 1.16.100+ format version blocks. If you would like to learn about stable blocks, you can do it [here](/blocks/blocks-intro).
:::

## Block Properties

### Defining Properties:

<CodeHeader></CodeHeader>

```json
{
	"format_version": "1.16.100",
	"minecraft:block": {
		"description": {
			"identifier": "bedrock_wiki:exemplary_block",
			"properties": {
				"bedrock_wiki:string_property_example": [
					"red",
					"green",
					"blue",
					"purple"
				],
				"bedrock_wiki:boolean_property_example": [
                    true, false
                ],
				"bedrock_wiki:integer_property_example": [
                    1, 2, 3, 4, 5
                ]
			}
		}
	}
}
```

### Using Properties:

Properties can be tested for with the Molang query, `query.block_property`:

`query.block_property('bedrock_wiki:string_property_example') == 'blue'`

## Block Events

<CodeHeader></CodeHeader>

```json
{
	"format_version": "1.16.100",
	"minecraft:block": {
		"description": {
			"identifier": "bedrock_wiki:exemplary_block"
		},
		"components": {
			"minecraft:on_step_on": {
				"event": "bedrock_wiki:drop_loot",
				"target": "self"
			}
		},
		"events": {
			"bedrock_wiki:drop_loot": {
				"spawn_loot": {
					"table": "loot_tables/blocks/my_loot_table.json"
				}
			}
		}
	}
}
```

_This example spawns a loot table when an entity stands on the block._

## Event Functions

### add_mob_effect

Adds a mob effect to a target when triggered.

<CodeHeader></CodeHeader>

```json
{
	"bedrock_wiki:effect_event": {
		"add_mob_effect": {
			"effect": "poison",
			"target": "other",
			"duration": 8,
			"amplifier": 3
		}
	}
}
```

### remove_mob_effect

Removes a target's mob effect when triggered.

<CodeHeader></CodeHeader>

```json
{
	"bedrock_wiki:remove_effect_event": {
		"remove_mob_effect": {
			"effect": "poison",
			"target": "other"
		}
	}
}
```

### spawn_loot

Summons a loot table.

<CodeHeader></CodeHeader>

```json
{
	"bedrock_wiki:drop_loot": {
		"spawn_loot": {
			"table": "loot_tables/blocks/my_loot_table.json"
		}
	}
}
```

### set_block

Removes the current block and replaces it with the defined block in the same position.

<CodeHeader></CodeHeader>

```json
{
	"bedrock_wiki:place_block": {
		"set_block": "minecraft:grass"
	}
}
```

### set_block_property

Sets the block's property.

<CodeHeader></CodeHeader>

```json
{
	"bedrock_wiki:change_color": {
		"set_block_property": {
			"bedrock_wiki:string_property_example": "red"
		}
	}
}
```

### set_block_at_pos

Sets a block at a specified position relative to the block.

<CodeHeader></CodeHeader>

```json
{
	"bedrock_wiki:trigger_event": {
		"set_block_at_pos": {
			"block_type": "minecraft:stone",
			"block_offset": [0, 0, 0]
		}
	}
}
```

### run_command

Runs a command onto a target in context.

<CodeHeader></CodeHeader>

```json
{
	"bedrock_wiki:execute_event": {
		"run_command": {
			"target": "self",
			"command": [ "summon pig" ]
		}
	}
}
```

### damage

Inflicts a specified damage unto a target in context.

<CodeHeader></CodeHeader>

```json
{
	"bedrock_wiki:damage_event": {
		"damage": {
			"type": "magic",
			"target": "other",
			"amount": 4
		}
	}
}
```

### decrement_stack

Decrements the player's current item stack.

<CodeHeader></CodeHeader>

```json
{
	"bedrock_wiki:remove_one": {
		"decrement_stack": {}
	}
}
```

### die

Kills the specified target in context (Destroying the block, if specified).

<CodeHeader></CodeHeader>

```json
{
	"bedrock_wiki:destroy": {
		"die": {
			"target": "self"
		}
	}
}
```

### play_effect

Play a particle effect at a specified contextual target's position.

<CodeHeader></CodeHeader>

```json
{
	"bedrock_wiki:particle_effect": {
		"play_effect": {
			"effect": "minecraft:campfire_smoke",
			"target": "self"
		}
	}
}
```

### play_sound

Play a sound to a specified contextual target.

<CodeHeader></CodeHeader>

```json
{
	"bedrock_wiki:play_sound": {
		"play_sound": {
			"sound": "mob.enderman.death",
			"target": "self"
		}
	}
}
```

### trigger

Triggers an event unto a specified contextual target.

<CodeHeader></CodeHeader>

```json
{
	"bedrock_wiki:trigger_event": {
		"trigger": {
			"event": "bedrock_wiki:my_event",
			"target": "self"
		}
	}
}
```

### sequence

Sequences event functions

<CodeHeader></CodeHeader>

```json
{
	"bedrock_wiki:sequence_event": {
		"sequence": [
			{
				"set_block_property": {
					"bedrock_wiki:my_prop": true
				}
			},
			{
				"condition": "query.block_property('bedrock_wiki:my_prop') == true",
				"trigger": {
					"event": "bedrock_wiki:my_entity_event",
					"target": "other"
				}
			}
		]
	}
}
```

### randomize

Randomizes event functions

<CodeHeader></CodeHeader>

```json
{
	"bedrock_wiki:randomize_events": {
		"randomize": [
			{
				"weight": 1,
				"set_block_property": {
					"bedrock_wiki:boolean_property_example": false
				}
			},
			{
				"weight": 2,
				"set_block_property": {
					"bedrock_wiki:boolean_property_example": true
				}
			},
			{
				"weight": 4,
				"set_block": "minecraft:stone"
			}
		]
	}
}
```

## Triggering Events

Block event-trigger components:

-   `minecraft:on_interact`
-   `minecraft:on_step_on`
-   `minecraft:on_step_off`
-   `minecraft:on_fall_on`
-   `minecraft:on_placed`
-   `minecraft:on_player_placing`
-   `minecraft:on_player_destroyed`

-   `minecraft:ticking` and `minecraft:random_ticking` may be used to trigger events after a time either set or random, respectively

## Block Components

List of experimental block components, with usage examples.

### minecraft:breathability

<CodeHeader></CodeHeader>

```json
{
	"minecraft:breathability": "solid" // Also accepts 'air'
}
```

### minecraft:display_name

(*See the Additional Notes at the bottom of this page*)
<CodeHeader></CodeHeader>

```json
{
	"minecraft:display_name": "Name"
}
```

### minecraft:entity_collision

<CodeHeader></CodeHeader>

```json
{
	"minecraft:entity_collision": {
		"origin": [ -8, 0, -8 ],
		"size": [ 16, 16, 16 ]
	}
}
```
Or..
<CodeHeader></CodeHeader>

```json
{
	"minecraft:entity_collision": false
}
```

### minecraft:geometry

<CodeHeader></CodeHeader>

```json
{
	"minecraft:geometry": "geometry.wiki" // Geometry identifier from geo file in 'RP/models/entity' folder
}
```

### minecraft:material_instances

<CodeHeader></CodeHeader>

```json
{
	"minecraft:material_instances": {
		// Can also be a specific material instance for a specific face mapped in the geometry
		// Wildcards follow render controller syntax
		// Options 'up', 'down', and 'sides' are builtin
		"*": {
			"texture": "texture_name", // References texture defined in terrain_textures.json
			"render_method": "blend", // Options 'blend', 'opaque', 'alpha_test',
			"face_dimming": true, // Defaults to true; refers to whether or not block is affected by lighting (Undocumented)
			"ambient_occlusion": true // Defaults to true; refers to whether or not faces have smooth lighting (Undocumented)
		}
	}
}
```

### minecraft:part_visibility

<CodeHeader></CodeHeader>

```json
{
	"minecraft:part_visibility": {
		"rules": {
			"bone_1": "q.block_property('bedrock_wiki:example_property') == 0", //also accepts `q.has_block_property`
			"bone_2": "q.block_property('bedrock_wiki:example_property') == 0"
		}
	}
}
```

### minecraft:pick_collision

<CodeHeader></CodeHeader>

```json
{
	"minecraft:pick_collision": {
		"origin": [ -8, 0, -8 ],
		"size": [ 16, 16, 16 ]
	}
}
```
Or..
<CodeHeader></CodeHeader>

```json
{
	"minecraft:pick_collision": false
}
```

### minecraft:placement_filter

<CodeHeader></CodeHeader>

```json
{
	"minecraft:placement_filter": {
		"conditions": [
			{
				"block_filter": [ "minecraft:dirt" ],
				"allowed_faces": [ "up" ]
			}
		]
	}
}
```

_This also accepts tags, such as:_

<CodeHeader></CodeHeader>

```json
{
	"minecraft:placement_filter": {
		"conditions": [
			{
				"allowed_faces": [ "up" ],
				"block_filter": [
					{
						"tags": "!query.any_tag('stone')"
					}
				]
			}
		]
	}
}
```

See [this](/blocks/block-tags) page for a list of vanilla tags and relavent blocks.

### minecraft:random_ticking

<CodeHeader></CodeHeader>

```json
{
	"minecraft:random_ticking": {
		"on_tick": {
			"event": "block_event",
			"target": "self",
			"condition": "query.block_property('bedrock_wiki:block_property') == true"
		}
	}
}
```

### minecraft:rotation

<CodeHeader></CodeHeader>

```json
{
	"minecraft:rotation": [ 90, 180, 0 ]
}
```

### minecraft:ticking

<CodeHeader></CodeHeader>

```json
{
	"minecraft:ticking": {
		"looping": true,
		"range": [4, 4],
		"on_tick": {
			"event": "block_event",
			"target": "self",
			"condition": "query.block_property('bedrock_wiki:block_property') == true"
		}
	}
}
```

### minecraft:unit_cube

<CodeHeader></CodeHeader>

```json
{
	"minecraft:unit_cube": {}
}
```

### minecraft:unwalkable

<CodeHeader></CodeHeader>

```json
{
	"minecraft:unwalkable": true
}
```

### minecraft:crafting_table

<CodeHeader></CodeHeader>

```json
{
	"minecraft:crafting_table": {
		"custom_description": "Example Crafting Table", // Name shown in GUI
		"grid_size": 3, // Currently only supports 3
		"crafting_tags": ["crafting_table", "custom_crafting_tag"]
	}
}
```

### minecraft:on_step_on

<CodeHeader></CodeHeader>

```json
{
	"minecraft:on_step_on": {
		"event": "block_event",
		"target": "self",
		"condition": "query.block_property('bedrock_wiki:block_property') == true"
	}
}
```

### minecraft:on_step_off

<CodeHeader></CodeHeader>

```json
{
	"minecraft:on_step_off": {
		"event": "block_event",
		"target": "self",
		"condition": "query.block_property('bedrock_wiki:block_property') == true"
	}
}
```

### minecraft:on_fall_on

<CodeHeader></CodeHeader>

```json
{
	"minecraft:on_fall_on": {
		"event": "block_event",
		"target": "self",
		"condition": "query.block_property('bedrock_wiki:block_property') == true",
		"min_fall_distance": 5
	}
}
```

### minecraft:on_placed

<CodeHeader></CodeHeader>

```json
{
	"minecraft:on_placed": {
		"event": "block_event",
		"target": "self",
		"condition": "query.block_property('bedrock_wiki:block_property') == true"
	}
}
```

### minecraft:on_player_placing

<CodeHeader></CodeHeader>

```json
{
	"minecraft:on_player_placing": {
		"event": "block_event",
		"target": "self",
		"condition": "query.block_property('bedrock_wiki:block_property') == true"
	}
}
```

### minecraft:on_player_destroyed

<CodeHeader></CodeHeader>

```json
{
	"minecraft:on_player_destroyed": {
		"event": "block_event",
		"target": "self",
		"condition": "query.block_property('bedrock_wiki:block_property') == true"
	}
}
```

### minecraft:on_interact

<CodeHeader></CodeHeader>

```json
{
	"minecraft:on_interact": {
		"event": "block_event",
		"target": "self",
		"condition": "query.block_property('bedrock_wiki:block_property') == true"
	}
}
```

## Block Tags

Block tags can be given to blocks to be queried or referenced with `any_tag` or `all_tags`, which is used inside item and entity files.
A tag can be applied like this:

<CodeHeader></CodeHeader>

```json
{
	"format_version": "1.16.100",
	"minecraft:block": {
		"description": {
			"identifier": "bedrock_wiki:exemplary_block"
		},
		"components": {
			"tag:bedrock_wiki:my_tag": {},
			"tag:my_other_tag": {}
		}
	}
}
```

and this tag can be queried with:

-   `query.all_tags`
-   `query.any_tag`
-   `query.block_has_all_tags`
-   `query.block_has_any_tag`
-   `query.relative_block_has_all_tags`
-   `query.relative_block_has_any_tag`

Example of querying a tag:

<CodeHeader></CodeHeader>

```json
{
	"format_version": "1.16.100",
	"minecraft:item": {
		"description": {
			"category": "equipment",
			"identifier": "bedrock_wiki:pickaxe"
		},
		"components": {
			"minecraft:digger": {
				"use_efficiency": true,
				"destroy_speeds": [
					{
						"speed": 5
						"block": {
							"tags": "query.any_tag('bedrock_wiki:my_tag', 'stone', 'metal')"
						}
					}
				]
			}
		}
	}
}
```

## Block Permutations

Block permutations are a way of conditionally applying components to a block with Molang expressions.

bedrock_wiki:

<CodeHeader></CodeHeader>

```json
{
    "format_version": "1.16.100",
    "minecraft:block": {
        "description": {
            "identifier": "bedrock_wiki:exemplary_block",
            "properties": {
                "bedrock_wiki:custom_integer_property": [ 10, 20, 30, 40 ],
                "bedrock_wiki:custom_boolean_property": [ false, true ],
                "bedrock_wiki:custom_string_property": [ "red", "green", "blue" ]
            }
        },
        "components": {...},
        "permutations": [
            {
                "condition": "query.block_property('bedrock_wiki:custom_integer_property') == 20",
                "components": {
                    "minecraft:friction": 0.1
                }
            },
            {
                "condition": "query.block_property('bedrock_wiki:custom_boolean_property') == true",
                "components": {
                "minecraft:destroy_time": 0.5
                }
            },
            {
                "condition": "query.block_property('bedrock_wiki:custom_string_property') == 'red'",
                "components": {
                    "minecraft:geometry": "geometry.pig"
                }
            }
        ]
    }
}
```

## Additional Notes

-   Vanilla blocks are hard-coded. You may not override or access them.
-   Following components may only have one at any given time:
    -   `"minecraft:ticking"`
    -   `"minecraft:random_ticking"`
-   It is not recommended to use `minecraft:display_name`. As an example..

<CodeHeader></CodeHeader>

```json
{
	"minecraft:display_name": "Barrel of Foxes"
}
```

.. Will, in-game, yield the result: `tile.Barrel of Foxes.name`. Using language files is strongly recommended.

-   A maximum of `16` values per block property may be used.
-   The following components may not exceed the default (16x) block size limitations:
    -   `minecraft:entity_collision`
    -   `minecraft:pick_collision`
-   Custom blocks' tags are ignored by Vanilla items.
-   Block faces will unconditionally darken if intersecting another block.
-   Blocks will always be dropped when mined with the `Silk Touch` enchantment.
-   The following event triggers require `entity_collision` to be 4 or higher on the Y-axis:
    -   `minecraft:on_step_on`
    -   `minecraft:on_step_off`
    -   `minecraft:on_fall_on`
-   Different parameters for `render_method` in `minecraft:material_instances` will - similar to entity runtime identifiers - affect certain properties of the block:
    -   Inputting `opaque` will allow Redstone to pass through, Grass to decay, and on it, Mobs' spawning
    -	Inputting `alpha_test` will **not** allow Redstone to pass through, Grass to decay, or Mobs to spawn on it
    	-	`blend` has the same properties as `alpha_test`
    -	Creating a transparent block exhibiting `opaque` properties:

Use `alpha_test`

```json
"minecraft:material_instances": {
	"*": {
        	"render_method": "alpha_test"
    	}
}
```

..Then simply link the textures via `blocks.json`
