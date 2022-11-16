---
title: Items 1.16.100+
category: General
tags:
    - experimental
nav_order: 2
---

Better documentation on the new item format introduced in the 1.16.100.56 Minecraft beta.

:::warning
This document covers experimental features, for 1.16.100+ format version items. If you would like to learn about stable items, [you can do so here](/items/items-intro).

You can learn more about [experimental toggles here](https://docs.microsoft.com/en-us/minecraft/creator/documents/experimentalfeaturestoggle).
:::

# Item Events

## Using Events

Events in items are used most exactly as they are in entities.

<CodeHeader></CodeHeader>

```json
{
	"format_version": "1.16.100",
	"minecraft:item": {
		"description": {
			"identifier": "example:food_item",
			"category": "items"
		},
		"components": {
			"minecraft:use_duration": 1.6,
			"minecraft:food": {
				"nutrition": 4,
				"saturation_modifier": "low",
				"can_always_eat": true,
				"on_consume": {
					"event": "on_consume",
					"target": "self"
				}
			},
			"minecraft:use_animation": "eat"
		},
		"events": {
			"on_consume": {
				"remove_mob_effect": {
					"effect": "nausea",
					"target": "holder"
				}
			}
		}
	}
}
```

## Event Functions

Items do, however, have a slightly different set of event functions that they use.

### swing

Plays the item swinging animation. (As if to hit.)

<CodeHeader></CodeHeader>

```json
{
	"example:swing_event": {
		"swing": {}
	}
}
```

### shoot

Shoots a projectile when triggered.

-   Properties:

    -   `"angle_offset"` - Does nothing. (Broken)

    -   `"launch_power"` - The launch power to be multiplied over the base power of the projectile entity. Accepts Molang values.

    -   `"projectile"` - Takes an identifier of an entity - any entity, not just projectile ones - to use as an entity to 'shoot'.

<CodeHeader></CodeHeader>

```json
{
	"example:shoot_event": {
		"shoot": {
			"projectile": "minecraft:snowball",
			"launch_power": 5,
			"angle_offset": 20
		}
	}
}
```

### damage

Applies a damage to a specified target.

-   Properties:

    -   `"type"` - The type of damage to administer to the target. Standard entity damage types apply, with contextual exceptions.

    -   `"target"` - The target which receives the damage.

    -   `"amount"` - Amount of damage points to apply.

<CodeHeader></CodeHeader>

```json
{
	"example:damage_event": {
		"damage": {
			"type": "magic",
			"target": "other",
			"amount": 4
		}
	}
}
```

### decrement_stack

Decrements the stack by one.

-   Properties:

    -   `"ignore_game_mode"` - When `false` (as is set by default) will not decrement in Creative gamemode.

<CodeHeader></CodeHeader>

```json
{
	"example:remove_one": {
		"decrement_stack": {
			"ignore_game_mode": false
		}
	}
}
```

### add_mob_effect

Adds a mob effect when triggered.

-   Properties:

    -   `"ignore_game_mode"` - When `false` (as is set by default) will not decrement in Creative gamemodes.

<CodeHeader></CodeHeader>

```json
{
	"example:effect_event": {
		"add_mob_effect": {
			"effect": "poison",
			"target": "holder",
			"duration": 8,
			"amplifier": 3
		}
	}
}
```

### remove_mob_effect

Removes a mob effect when triggered.

<CodeHeader></CodeHeader>

```json
{
	"example:remove_effect_event": {
		"remove_mob_effect": {
			"effect": "poison",
			"target": "holder"
		}
	}
}
```

### transform_item

Transforms the item into the item specified.

<CodeHeader></CodeHeader>

```json
{
	"example:transform_event": {
		"transform_item": {
			"transform": "minecraft:apple"
		}
	}
}
```

### teleport

Teleports the target to a random location in the specified range.

<CodeHeader></CodeHeader>

```json
{
	"example:teleport_event": {
		"teleport": {
			"target": "holder",
			"max_range": [8, 8, 8]
		}
	}
}
```

### sequence

Used to sequence multiple event functions. Works just as in entities.

<CodeHeader></CodeHeader>

```json
{
	"example:sequence_event": {
		"sequence": [
			{
				"add_mob_effect": {
					"effect": "poison",
					"target": "holder",
					"duration": 8,
					"amplifier": 3
				}
			},
			{
				"transform_item": {
					"transform": "minecraft:apple"
				}
			}
		]
	}
}
```

### randomize

Used to randomize event functions. Works just as in entities.

<CodeHeader></CodeHeader>

```json
{
	"example:randomize_events": {
		"randomize": [
			{
				"weight": 1,
				"transform_item": {
					"transform": "minecraft:apple"
				}
			},
			{
				"weight": 2,
				"add_mob_effect": {
					"effect": "weakness",
					"target": "holder",
					"duration": 8,
					"amplifier": 3
				}
			}
		]
	}
}
```

### run_command

Used to execute commands. Works just as in entities.

<CodeHeader></CodeHeader>

```json
{
	"example:execute_command_event": {
		"run_command": {
			"command": ["say hi"],
			"target": "other"
		}
	}
}
```

## Behaviour Item Components

List of all new item components, with usage examples

### minecraft:ignores_permission

<CodeHeader></CodeHeader>

```json
{
	"minecraft:ignores_permission": true
}
```

### minecraft:mining_speed

<CodeHeader></CodeHeader>

```json
{
	"minecraft:mining_speed": 1
}
```

### minecraft:damage

<CodeHeader></CodeHeader>

```json
{
	"minecraft:damage": 5
}
```

### minecraft:can_destroy_in_creative

<CodeHeader></CodeHeader>

```json
{
	"minecraft:can_destroy_in_creative": true
}
```

### minecraft:dye_powder

<CodeHeader></CodeHeader>

```json
{
	"minecraft:dye_powder": {
		"color": 4
	}
}
```

### minecraft:mirrored_art

<CodeHeader></CodeHeader>

```json
{
	"minecraft:mirrored_art": true
}
```

### minecraft:explodable

<CodeHeader></CodeHeader>

```json
{
	"minecraft:explodable": true
}
```

### minecraft:should_despawn

<CodeHeader></CodeHeader>

```json
{
	"minecraft:should_despawn": true
}
```

### minecraft:liquid_clipped

<CodeHeader></CodeHeader>

```json
{
	"minecraft:liquid_clipped": true
}
```

### minecraft:allow_off_hand

<CodeHeader></CodeHeader>

```json
{
	"minecraft:allow_off_hand": true // Disables most functionality
}
```

### minecraft:projectile

<CodeHeader></CodeHeader>

```json
{
	"minecraft:projectile": {
		"projectile_entity": "minecraft:arrow",
		"minimum_critical_power": 0.5
	}
}
```

### minecraft:block_placer

<CodeHeader></CodeHeader>

```json
{
	"minecraft:block_placer": {
		"block": "minecraft:grass",
		"use_block_description": true
	}
}
```

### minecraft:entity_placer

<CodeHeader></CodeHeader>

```json
{
	"minecraft:entity_placer": {
		"entity": "minecraft:zombie",
		"use_on": ["minecraft:grass", "minecraft:sand"],
		"dispense_on": ["minecraft:stone", "minecraft:gold_ore"]
	}
}
```

### minecraft:on_use_on

<CodeHeader></CodeHeader>

```json
{
	"minecraft:on_use_on": {
		"on_use_on": {
			"event": "example:block_event",
			"target": "block"
		}
	}
}
```

### minecraft:on_use

<CodeHeader></CodeHeader>

```json
{
	"minecraft:on_use": {
		"on_use": {
			"event": "example:item_event",
			"target": "self"
		}
	}
}
```

### minecraft:knockback_resistance

<CodeHeader></CodeHeader>

```json
{
	"minecraft:knockback_resistance": {
		"protection": 0.4
	}
}
```

### minecraft:enchantable

<CodeHeader></CodeHeader>

```json
{
	"minecraft:enchantable": {
		"slot": "bow", // Can be any of the enchant slot listed below
		"value": 10
	}
}
```

### Enchantable Slots

| Slot Name     |
| ------------- |
| bow           |
| crossbow           |
| armor_feet    |
| armor_torso   |
| armor_head    |
| armor_legs    |
| hoe           |
| axe           |
| pickaxe       |
| shovel        |
| sword         |
| elytra        |
| fishing_rod   |
| flintsteel    |
| shears        |
| cosmetic_head |

### minecraft:shooter

<CodeHeader></CodeHeader>

```json
{
	"minecraft:shooter": {
		"max_draw_duration": 1,
		"charge_on_draw": false,
		"scale_power_by_draw_duration": true,
		"ammunition": [
			{
				"item": "minecraft:arrow",
				"use_offhand": true,
				"search_inventory": true,
				"use_in_creative": true
			}
		]
	}
}
```

### minecraft:durability

<CodeHeader></CodeHeader>

```json
{
	"minecraft:durability": {
		"max_durability": 100,
		"damage_chance": {
			"min": 5,
			"max": 10
		}
	}
}
```

### minecraft:armor

<CodeHeader></CodeHeader>

```json
{
	"minecraft:armor": {
		"protection": 4
	}
}
```

### minecraft:wearable

<CodeHeader></CodeHeader>

```json
{
	"minecraft:wearable": {
		"slot": "slot.armor.feet" // Can be slot listed in the '/replaceitem' command
	}
}
```

### minecraft:weapon

<CodeHeader></CodeHeader>

```json
{
	"minecraft:weapon": {
		"on_hurt_entity": {
			"event": "example_event",
			"target": "holder" // Can also be 'self' to trigger an item event"
		}
	}
}
```

### minecraft:record

<CodeHeader></CodeHeader>

```json
{
	"minecraft:record": {
		"sound_event": "cat", // Currently restricted to strings listed below
		"comparator_signal": 8
	}
}
```

### Allowed Sound Events

| Slot Name |
| --------- |
| 11        |
| 13        |
| cat       |
| chirp     |
| blocks    |
| far       |
| mall      |
| mellohi   |
| pigstep   |
| stall     |
| strad     |
| wait      |
| ward      |

### minecraft:repairable

<CodeHeader></CodeHeader>

```json
{
	"minecraft:repairable": {
		"repair_items": [
			{
				"items": ["minecraft:iron_ingot", "minecraft:gold_ingot"],
				"repair_amount": 10, // Can also be molang expression
				"on_repaired": {
					"event": "example_event",
					"target": "holder" // Can also be 'self' to trigger an item event"
				}
			}
		]
	}
}
```

### minecraft:cooldown

<CodeHeader></CodeHeader>

```json
{
	"minecraft:cooldown": {
		"category": "ender_pearl", // May be a custom string, as to disable the large, white cooldown bar on multiple cooldown items
		"duration": 1
	}
}
```

### minecraft:use_duration

<CodeHeader></CodeHeader>

```json
{
	"minecraft:use_duration": 1.6 // Use duration in seconds of the item
}
```

### minecraft:digger

<CodeHeader></CodeHeader>

```json
{
	"minecraft:digger": {
		"use_efficiency": true,
		"destroy_speeds": [
			{
				"block": {
					"tags": "query.any_tag('stone', 'metal')" // Note that not all blocks have tags; listing many blocks may be necessary
				},
				"speed": 6,
				"on_dig": {
                    "event": "on_dig"
                }
			}
		]
	}
}
```

### minecraft:fertilizer

<CodeHeader></CodeHeader>

```json
{
	"minecraft:fertilizer": {
		"type": "bonemeal" // Can also be "rapid"
	}
}
```

### minecraft:fuel

<CodeHeader></CodeHeader>

```json
{
	"minecraft:fuel": {
		"duration": 20
	}
}
```

### minecraft:throwable

<CodeHeader></CodeHeader>

```json
{
	"minecraft:throwable": {
		"do_swing_animation": true,
		"max_draw_duration": 2,
		"scale_power_by_draw_duration": true
	}
}
```

### minecraft:icon

<CodeHeader></CodeHeader>

```json
{
	"minecraft:icon": {
		"frame": 0, // Texture's array entry to use, defaults to 0
		"texture": "tool.Kama" // Texture referenced in 'item_texture.json'
	}
}
```

### minecraft:creative_category

<CodeHeader></CodeHeader>

```json
{
	"minecraft:creative_category": {
		"parent": "itemGroup.name.nature" // Can be any creative category
	}
}
```

_Full list of categories can be found [here](/documentation/creative-categories)_

### minecraft:food

    _New Syntax_

<CodeHeader></CodeHeader>

```json
{
	"minecraft:food": {
		"on_consume": {
			"event": "example_event",
			"target": "holder" // Can also be 'self' to trigger an item event
		},
		"nutrition": 3,
		"can_always_eat": true,
		"saturation_modifier": "normal",
		"using_converts_to": "minecraft:apple" // Changes the food or drink into another item when consumed. It can be changed to any item.
	}
}
```

### minecraft:use_animation

<CodeHeader></CodeHeader>

```json
{
	"minecraft:use_animation": "eat" // Adds the animation and sound when eating a food item. It can also be changed to "drink".
}
```

### minecraft:render_offsets

    _New Syntax_

<CodeHeader></CodeHeader>

```json
{
	"minecraft:render_offsets": {
		"main_hand": {
			"first_person": {
				"position": [1, 1, 1],
				"rotation": [1, 1, 1],
				"scale": [1, 1, 1]
			},
			"third_person": {
				"position": [1, 1, 1],
				"rotation": [1, 1, 1],
				"scale": [1, 1, 1]
			}
		},
		"off_hand": {
			"first_person": {
				"position": [1, 1, 1],
				"rotation": [1, 1, 1],
				"scale": [1, 1, 1]
			},
			"third_person": {
				"position": [1, 1, 1],
				"rotation": [1, 1, 1],
				"scale": [1, 1, 1]
			}
		}
	}
}
```

## Item Tags

Item tags work the same as block tags and can be applied like this:

<CodeHeader></CodeHeader>

```json
{
	"format_version": "1.16.100",
	"minecraft:item": {
		"description": {
			"identifier": "example:my_item"
		},
		"components": {
			"tag:example:my_tag": {}
		}
	}
}
```

They can then be queried with:

-   `query.any_tag`
-   `query.all_tags`
-   `query.equipped_item_all_tags`
-   `query.equipped_item_any_tag`

## Breaking changes

If your item isn't showing up, these changes might have broken your item.

-   Item behavior files now require a "category" to show up in the /give command and creative inventory.
    Example:

<CodeHeader></CodeHeader>

```json
{
    "format_version": "1.16.100",
    "minecraft:item": {
        "description": {
            "identifier": "example:item",
            "category" : "items"     // This line is required
        },
        "components": {...},
        "events": {...}
    }
}
```

-   RP item files are no longer used, `minecraft:icon` and all other RP components should be used in the BP item file.

-   Refer to the Troubleshooting Guide for more information, found [here](#)

## Additional Notes

Niche Features

-   Components
    -   `minecraft:icon` - Property `"frame"` may take in Molang values.

> Broken/Nonfunctional Features

-   Components
    -   `minecraft:mining_speed` - Currently has no known function.
    -   `minecraft:dye_powder` - Currently has no known function.
    -   `minecraft:frame_count` - Currently has no known function.
    -   `minecraft:animates_in_toolbar` - Currently has no known function.
    -   `minecraft:mirrored_art` - Currently has no known function.
    -   `minecraft:requires_interact` - Currently has no known function.
    -   `minecraft:ignores_permission` - Currently has no known function.
    -   `minecraft:map` - Currently has no known function.
    -   `"saddle"` - Currently has no known function.
    -   `minecraft:shears` - Currently has no known function.
    -   `minecraft:bucket` - Currently has no known function.
    -   `minecraft:digger` - `use_efficiency` - Parameter Currently has no known function.

> Current Limitations

-   Vanilla Items are hardcoded; you may not override or access them, using the new format.
-   `minecraft:record` - May not add a custom `sound_event`.
-   Items aliases currently do not work.
