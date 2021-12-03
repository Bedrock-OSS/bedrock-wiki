---
title: 'Blocks 1.16.100+'
tags:
    - experimental
nav_order: 2
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
			"identifier": "wiki:my_block",
			"properties": {
				"wiki:string_property_example": [
					"red",
					"green",
					"blue",
					"purple"
				],
				"wiki:boolean_property_example": [true, false],
				"wiki:integer_property_example": [1, 2, 3, 4, 5]
			}
		}
	}
}
```

### Using Properties:

Properties can be queried with `query.block_property`, like this:

`query.block_property('wiki:string_property_example') == 'blue'`

## Block Events

<CodeHeader></CodeHeader>

```json
{
	"format_version": "1.16.100",
	"minecraft:block": {
		"description": {
			"identifier": "wiki:my_block"
		},
		"components": {
			"minecraft:on_step_on": {
				"event": "wiki:drop_loot",
				"target": "self"
			}
		},
		"events": {
			"wiki:drop_loot": {
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

### `add_mob_effect`

Adds a mob effect when triggered

<CodeHeader></CodeHeader>

```json
{
	"wiki:effect_event": {
		"add_mob_effect": {
			"effect": "poison",
			"target": "other",
			"duration": 8,
			"amplifier": 3
		}
	}
}
```

### `remove_mob_effect`

Removes a mob effect when triggered

<CodeHeader></CodeHeader>

```json
{
	"wiki:remove_effect_event": {
		"remove_mob_effect": {
			"effect": "poison",
			"target": "other"
		}
	}
}
```

### `spawn_loot`

Summons a loot table when the event is triggered.

<CodeHeader></CodeHeader>

```json
{
	"wiki:drop_loot": {
		"spawn_loot": {
			"table": "loot_tables/blocks/my_loot_table.json"
		}
	}
}
```

### `set_block`

Removes the current block and replaces it with the defined block in the same position.

<CodeHeader></CodeHeader>

```json
{
	"wiki:place_block": {
		"set_block": "minecraft:grass"
	}
}
```

### `set_block_property`

Used to set the value of a block's property

<CodeHeader></CodeHeader>

```json
{
	"wiki:change_color": {
		"set_block_property": {
			"wiki:string_property_example": "red"
		}
	}
}
```

### `set_block_at_pos`

Used to set a block relative to the position of this block

<CodeHeader></CodeHeader>

```json
{
	"wiki:trigger_event": {
		"set_block_at_pos": {
			"block_type": "minecraft:stone",
			"block_offset": [0, 0, 0]
		}
	}
}
```

### `run_command`

Used to execute a command

<CodeHeader></CodeHeader>

```json
{
	"wiki:execute_event": {
		"run_command": {
			"command": ["summon pig"]
		}
	}
}
```

### `damage`

<CodeHeader></CodeHeader>

```json
{
	"wiki:damage_event": {
		"damage": {
			"type": "magic",
			"target": "other",
			"amount": 4
		}
	}
}
```

### `decrement_stack`

Decrements the stack

<CodeHeader></CodeHeader>

```json
{
	"wiki:remove_one": {
		"decrement_stack": {}
	}
}
```

### `die`

Kills the target or destroys the block

<CodeHeader></CodeHeader>

```json
{
	"wiki:destroy": {
		"die": {
			"target": "self"
		}
	}
}
```

### `play_effect`

Runs a particle effect on the target

<CodeHeader></CodeHeader>

```json
{
	"wiki:particle_effect": {
		"play_effect": {
			"effect": "minecraft:campfire_smoke",
			"target": "self"
		}
	}
}
```

### `play_sound`

Plays a sound on the target

<CodeHeader></CodeHeader>

```json
{
	"wiki:play_sound": {
		"play_sound": {
			"sound": "mob.enderman.death",
			"target": "self"
		}
	}
}
```

### `trigger`

Used to trigger an event, this can be a block event or an entity event.

<CodeHeader></CodeHeader>

```json
{
	"wiki:trigger_event": {
		"trigger": {
			"event": "wiki:my_event",
			"target": "self" // If set to 'other' an entity event can be defined. It will be triggered on the entity that causes the block event.
		}
	}
}
```

### `sequence`

Used to sequence event functions

<CodeHeader></CodeHeader>

```json
{
	"wiki:sequence_event": {
		"sequence": [
			{
				"set_block_property": {
					"wiki:my_prop": true
				}
			},
			{
				"condition": "query.block_property('wiki:my_prop') == true",
				"trigger": {
					"event": "wiki:my_entity_event",
					"target": "other"
				}
			}
		]
	}
}
```

### `randomize`

Used to randomize event functions

<CodeHeader></CodeHeader>

```json
{
	"wiki:randomize_events": {
		"randomize": [
			{
				"weight": 1,
				"set_block_property": {
					"wiki:boolean_property_example": false
				}
			},
			{
				"weight": 2,
				"set_block_property": {
					"wiki:boolean_property_example": true
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

Block components to trigger block events:

-   `minecraft:on_interact`
-   `minecraft:on_step_on`
-   `minecraft:on_step_off`
-   `minecraft:on_fall_on`
-   `minecraft:on_placed`
-   `minecraft:on_player_placing`
-   `minecraft:on_player_destroyed`

-   `minecraft:ticking` and `minecraft:random_ticking` can both be used to trigger events after a set amount of time or at random times, depending on which component you use

## Block Components

List of all new block components, with usage examples.

### `minecraft:unit_cube`

<CodeHeader></CodeHeader>

```json
{
	"minecraft:unit_cube": {}
}
```

### `minecraft:crafting_table`

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

### `minecraft:material_instances`

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

### `minecraft:geometry`

<CodeHeader></CodeHeader>

```json
{
	"minecraft:geometry": "geometry.wiki" // Geometry identifier from geo file in 'RP/models/entity' folder
}
```

### `minecraft:on_step_on`

<CodeHeader></CodeHeader>

```json
{
	"minecraft:on_step_on": {
		"event": "block_event",
		"target": "self",
		"condition": "query.block_property('wiki:block_property') == true"
	}
}
```

### `minecraft:on_step_off`

<CodeHeader></CodeHeader>

```json
{
	"minecraft:on_step_off": {
		"event": "block_event",
		"target": "self",
		"condition": "query.block_property('wiki:block_property') == true"
	}
}
```

### `minecraft:on_fall_on`

<CodeHeader></CodeHeader>

```json
{
	"minecraft:on_fall_on": {
		"event": "block_event",
		"target": "self",
		"condition": "query.block_property('wiki:block_property') == true",
		"min_fall_distance": 5
	}
}
```

### `minecraft:on_placed`

<CodeHeader></CodeHeader>

```json
{
	"minecraft:on_placed": {
		"event": "block_event",
		"target": "self",
		"condition": "query.block_property('wiki:block_property') == true"
	}
}
```

### `minecraft:on_player_placing`

<CodeHeader></CodeHeader>

```json
{
	"minecraft:on_player_placing": {
		"event": "block_event",
		"target": "self",
		"condition": "query.block_property('wiki:block_property') == true"
	}
}
```

### `minecraft:on_player_destroyed`

<CodeHeader></CodeHeader>

```json
{
	"minecraft:on_player_destroyed": {
		"event": "block_event",
		"target": "self",
		"condition": "query.block_property('wiki:block_property') == true"
	}
}
```

### `minecraft:on_interact`

<CodeHeader></CodeHeader>

```json
{
	"minecraft:on_interact": {
		"event": "block_event",
		"target": "self",
		"condition": "query.block_property('wiki:block_property') == true"
	}
}
```

### `minecraft:ticking`

<CodeHeader></CodeHeader>

```json
{
	"minecraft:ticking": {
		"looping": true,
		"range": [4, 4],
		"on_tick": {
			"event": "block_event",
			"target": "self",
			"condition": "query.block_property('wiki:block_property') == true"
		}
	}
}
```

### `minecraft:random_ticking`

<CodeHeader></CodeHeader>

```json
{
	"minecraft:random_ticking": {
		"on_tick": {
			"event": "block_event",
			"target": "self",
			"condition": "query.block_property('wiki:block_property') == true"
		}
	}
}
```

### `minecraft:entity_collision`

<CodeHeader></CodeHeader>

```json
{
	"minecraft:entity_collision": {
		"origin": [-8, 0, -8],
		"size": [16, 16, 16]
	}
}
```

<CodeHeader></CodeHeader>

```json
{
	"minecraft:entity_collision": false
}
```

### `minecraft:pick_collision`

<CodeHeader></CodeHeader>

```json
{
	"minecraft:pick_collision": {
		"origin": [-8, 0, -8],
		"size": [16, 16, 16]
	}
}
```

<CodeHeader></CodeHeader>

```json
{
	"minecraft:pick_collision": false
}
```

### `minecraft:breakonpush`

<CodeHeader></CodeHeader>

```json
{
	"minecraft:breakonpush": true
}
```

### `minecraft:display_name`

<CodeHeader></CodeHeader>

```json
{
	"minecraft:display_name": "Name"
}
```

### `minecraft:breathability`

<CodeHeader></CodeHeader>

```json
{
	"minecraft:breathability": "solid" // Also accepts 'air'
}
```

### `minecraft:immovable`

<CodeHeader></CodeHeader>

```json
{
	"minecraft:immovable": true
}
```

### `minecraft:onlypistonpush`

<CodeHeader></CodeHeader>

```json
{
	"minecraft:onlypistonpush": true
}
```

### `minecraft:placement_filter`

<CodeHeader></CodeHeader>

```json
{
	"minecraft:placement_filter": {
		"conditions": [
			{
				"block_filter": ["minecraft:dirt"],
				"allowed_faces": ["up"]
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
				"allowed_faces": ["up"],
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

### `minecraft:preventsjumping`

<CodeHeader></CodeHeader>

```json
{
	"minecraft:preventsjumping": true
}
```

### `minecraft:rotation`

<CodeHeader></CodeHeader>

```json
{
	"minecraft:rotation": [90, 180, 0]
}
```

### `minecraft:unwalkable`

<CodeHeader></CodeHeader>

```json
{
	"minecraft:unwalkable": true
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
			"identifier": "wiki:my_block"
		},
		"components": {
			"tag:wiki:my_tag": {},
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
			"identifier": "wiki:pickaxe"
		},
		"components": {
			"minecraft:digger": {
				"use_efficiency": true,
				"destroy_speeds": [
					{
						"block": {
							"tags": "query.any_tag('wiki:my_tag', 'stone', 'metal')"
						},
						"speed": 6
					}
				]
			}
		}
	}
}
```

## Block Permutations

Block permutations are a way of conditionally applying components to a block with MoLang expressions.

wiki:

<CodeHeader></CodeHeader>

```json
{
    "format_version": "1.16.100",
    "minecraft:block": {
        "description": {
            "identifier": "wiki:my_block",
            "properties": {
                "wiki:custom_integer_property": [ 10, 20, 30, 40 ],
                "wiki:custom_boolean_property": [ false, true ],
                "wiki:custom_string_property": [ "red", "green", "blue" ]
            }
        },
        "components": {...},
        "permutations": [
            {
                "condition": "query.block_property('wiki:custom_integer_property') == 20",
                "components": {
                    "minecraft:friction": 0.1
                }
            },
            {
                "condition": "query.block_property('wiki:custom_boolean_property') == true",
                "components": {
                "minecraft:destroy_time": 0.5
                }
            },
            {
                "condition": "query.block_property('wiki:custom_string_property') == 'red'",
                "components": {
                    "minecraft:geometry": "geometry.pig"
                }
            }
        ]
    }
}
```

## Additional Notes

-   Vanilla Blocks are hardcoded. You may not override or access them.
-   Following components may only have one at any given time:
    -   `"minecraft:ticking"`
    -   `"minecraft:random_ticking"`
-   It is not recommended to use `minecraft:display_name`. Example:

<CodeHeader></CodeHeader>

```json
{
	"minecraft:display_name": "Barrel of Foxes"
}
```

In-game, yields the result: `tile.Barrel of Foxes.name`. Using `.lang` files is recommended.

-   Maximum of 16 values per `property`.
-   Following components cannot be larger than 16x16x16:
    -   `minecraft:entity_collision`
    -   `minecraft:pick_collision`
-   `/execute` commands cannot be run on blocks.
-   Custom blocks' tags are ignored by vanilla items.
-   Block faces will become dark if buried in another block.
-   Blocks will always be dropped with `Silk Touch` enchantment.
-   Block identifiers cannot match vanilla blocks, even ignoring namespace.
-   Following components requires `entity_collision` to be 4 or higher on the y-axis:
    -   `minecraft:on_step_on`
    -   `minecraft:on_step_off`
    -   `minecraft:on_fall_on`
-   It seems that `render_method` in `minecraft:material_instances` affects the block's properties.
    -   If you use `opaque` it will allow redstone to pass through it, grass decay, and allow mobs to spawn on it
    - 	If you use `alpha_test` it won't allow redstone to pass through it, it won't make grass decay, and it won't allow mobs to spawn on it
    - 	`blend` has the same properties as `alpha_test`
    - 	Should you want to have a transparent block but have `opaque` properties:
```json
"minecraft:material_instances": {
	"*": {
        	"render_method": "alpha_test"
    	}
}
```
Link the textures via `blocks.json`
