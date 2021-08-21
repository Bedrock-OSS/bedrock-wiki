---
title: Spawning Items
tags:
    - intermediate
---

It is fairly common to want to spawn an item in the world, as if dropped. This page will walk through how to accomplish this through various methods, including Entity Deaths, Interactions, and an all-purpose method.

## Entity Deaths

The simplest method of spawning items - and generally the most common one - is dropping items upon an entity's death. This is done by adding the `minecraft:loot` component to the entity and linking it to the respective loot table (`forium` in the following example) containing items you wish to be dropped.

<CodeHeader></CodeHeader>

```json
{
	"minecraft:loot": {
  		"table": "loot_tables/entities/forium.json"
	}
},
```

## Dummy Entity Deaths

We can use `minecraft:loot` on a [dummy entity](/entities/dummy-entities) that dies when we spawn it to create a `drop entity`. This entity can be summoned like `/summon wiki:drop_entity` to spawn the items. This is useful for scenarios where death particles or sounds are not an issue.

Behaviors:

<CodeHeader></CodeHeader>

```json
{
	"format_version": "1.16.0",
	"minecraft:entity": {
		"description": {
			"identifier": "wiki:drop_entity",
			"is_spawnable": true,
			"is_summonable": true,
			"is_experimental": false
		},

		"components": {
			// Causes the entity to die when spawned
			"minecraft:health": {
				"value": 0
			},
			// Desired Loot Table
			"minecraft:loot": {
				"table": "loot_tables/entities/some_loot.json"
			}
		}
	}
}
```

## Interactions

Here is an example of an entity called "box" which will drop its contents upon interaction. The table in `spawn_items` is linked to the loot table with the items desired to be dropped. In this particular case, the event `break_box` is also called when the entity is interacted with, adding a component group that removes the box.

Note that if the entity is not removed upon interaction, it can be interacted with again and will spawn the items. If the entity should persist after the interaction, the `cooldown` parameter may be added to the entity to prevent interaction for a specified amount of time. Alternatively, an event may be called to remove the component group containing this `minecraft:interact` component.

<CodeHeader></CodeHeader>

```json
{
	"minecraft:interact": {
		"interactions": [
			{
				"on_interact": {
					"filters": {
						"test": "is_family",
						"subject": "other",
						"value": "player"
					},
					"event": "break_box",
					"target": "self"
				},
				"swing": true,
				"spawn_items": {
					"table": "loot_tables/entities/box.json"
				}
			}
		]
	}
}
```

## All-Purpose Method

This is a method that can be used for virtually any scenario: entity deaths, animation-based interactions, general item drops. This method was created in particular for dropping items without any death animation, sound, or particles.

Several parts are required to set up the item dropping: a new entity with behavior, a corresponding animation controller, the resources for an invisible entity (refer to Dummy Entities tutorial), and a loot table. To spawn the items after it is set up, the entity is spawned where the items are to be dropped. If multiple items are desired, component groups with spawn events may be set up for each item.

### behavior

The items are spawned using the `minecraft:behavior.drop_item_for` component in conjunction with the `minecraft:navigation.walk` component, the latter being required for the former to work. Note that the `time_of_day_range` parameter in the following is not initialized to how it is defined below despite the documentation listing it as such, and this is necessary for proper function. The parameter `max_dist` must be increased to an appropriate value if the items are desired to be dropped when the player is very far away.

This behavior appears to push the mob back when the items are dropped. Thus it is essential to summon the entity slightly above the ground (or teleport it up in the following animation controller) to avoid the items spawning a few blocks away from the spawn location. Decreasing the size of the collision box may also help.

<CodeHeader></CodeHeader>

```json
{
	"minecraft:navigation.walk": {},

	"minecraft:behavior.drop_item_for": {
		"priority": 1,
		"max_dist": 16,
		"loot_table": "loot_tables/entities/forium.json",
		"time_of_day_range": [0.0, 1.0]
	}
}
```

### Animation Controller

The following animation controller must be linked to the entity to remove it upon summoning. Alternatively, an animation with a timeline can be used. If you are unsure how to do this, refer to the Entity Commands tutorial.

Teleporting the entity into the void causes no death animation, sound, or particles. Two transitions are used to ensure it is not killed in the same tick it spawns.

<CodeHeader></CodeHeader>

```json
{
	"format_version": "1.10.0",
	"animation_controllers": {
		"controller.animation.drop_items.die": {
			"initial_state": "spawn",
			"states": {
				"spawn": {
					"transitions": [
						{
							"delay": "1"
						}
					]
				},
				"delay": {
					"transitions": [
						{
							"die": "1"
						}
					]
				},
				"die": {
					"on_entry": ["/tp @s ~ -200 ~"]
				}
			}
		}
	}
}
```
