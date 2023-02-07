---
title: Spawn Rules
category: General
---

Spawn rules define how entities will spawn into the world. You should use spawn rules when you want your custom entity to spawn naturally, just like vanilla entities. The different components allow you to define when, where, and how the entity will spawn in.

In general, it's possible to spawn your custom entity in a very similar way as vanilla entities. e.g, in a herd like a cow, only at night like a vanilla zombie, or only underwater like a fish.

## Example Spawn Rule

Here is an example spawn rule, with an explanation of the fields.

<CodeHeader>BP/spawn_rules/zombie.json</CodeHeader>

```json
{
	"format_version": "1.8.0",
	"minecraft:spawn_rules": {
		"description": {
			"identifier": "minecraft:zombie",
			"population_control": "monster"
		},
		"conditions": [
			{
				"minecraft:spawns_on_surface": {},
				"minecraft:spawns_underground": {},
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
					"default": 100
				},
				"minecraft:herd": {
					"min_size": 2,
					"max_size": 4
				},
				"minecraft:permute_type": [
					{
						"weight": 95
					},
					{
						"weight": 5,
						"entity_type": "minecraft:zombie_villager"
					}
				],
				"minecraft:biome_filter": {
					"test": "has_biome_tag",
					"operator": "==",
					"value": "monster"
				}
			}
		]
	}
}
```

-   "`description`">"`identifier`": the entity to spawn
-   "`population_control`": controls spawning and despawning quantities. Can be set to "`animal`", "`underwater_animal`", "`monster`" and "`ambient`".
-   "`conditions`" are a list of conditions that have to be met in order for the spawn attempt to succeed.
-   "`minecraft:spawns_on_surface`", "`minecraft:spawns_underground`" and "`minecraft:spawns_underwater`" control where the entity spawns cap-wise.
-   "`minecraft_brightness_filter`" can be set from 0 to 15 and controls in which light levels can entities spawn. - "`adjust_for_weather`" defines whether it light levels are counted lower during rain or thunder weather.
-   "`minecraft:difficulty_filter`" sets the range of level difficulty to enable this entity's spawns.
-   "`minecraft:herd`" sets the number of entities spawning together, on the same spawn rule.
-   "`minecraft:permute_type`" with "`weight`"s and "`entity_type`"s sets a chance for the spawned entity to mutate into a different one.
-   "`minecraft:biome_filter`" tests for certain biome tags. Look up the filter syntax and list of biome tags in the documentation or search examples in the vanilla Example pack.

## All Known Components

Here is a list of all known components. We will be adding documentation as we better understand how they are used.

```
minecraft:weight
minecraft:density_limit
minecraft:spawns_on_block_filter
minecraft:spawns_on_block_prevented_filter
minecraft:spawns_above_block_filter
minecraft:herd
minecraft:permute_type
minecraft:brightness_filter
minecraft:height_filter
minecraft:spawns_on_surface
minecraft:spawns_underground
minecraft:spawns_underwater
minecraft:disallow_spawns_in_bubble
minecraft:spawns_lava
minecraft:biome_filter
minecraft:difficulty_filter
minecraft:distance_filter
minecraft:is_experimental
minecraft:world_age_filter
minecraft:delay_filter
minecraft:mob_event_filter
minecraft:is_persistent
minecraft:player_in_village_filter
```

## Documentation

### minecraft:herd

<CodeHeader></CodeHeader>

```json
"minecraft:herd": {
          "min_size": 1,
          "max_size": 2,
          "event":"minecraft:entity_born",
          "event_skip_count": 1
        },
```

-   "`minecraft:herd`" can also be used like this to make the second entity spawned [in this scenario] with the "`minecraft:entity_born`" (as baby). Can be used in any event.
    `"event_skip_count": 2`, for example, means that the first two entities will not be spawned with this event, but all the next ones will.

### minecraft:spawns_above_block_filter

<CodeHeader></CodeHeader>

```json
        "minecraft:spawns_above_block_filter": {
          "blocks": "minecraft:stone",
          "distance": 10
        }
```

-   "`minecraft:spawns_above_block_filter`" will detect blocks within a set distance vertically, and if the condition is met, the entity will spawn successfully.

### minecraft:spawns_on_block_prevented_filter

<CodeHeader></CodeHeader>

```json
        "minecraft:spawns_on_block_prevented_filter": [
          "minecraft:nether_wart_block",
          "minecraft:shroomlight"
        ]
```

-   While lastly, "`minecraft:spawns_on_block_prevented_filter`" is the opposite of the above. This is an array of block Identifiers that the entity will never spawn on.
