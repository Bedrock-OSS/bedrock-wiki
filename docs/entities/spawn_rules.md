---
title: Spawn Rules
category: General
---

Spawn rules define how vanilla Entities and custom entities spawn. In the next chapter we'll be creating a custom entity, so make sure to prepare a custom spawn rule for it! Check out the vanilla example files for more information. ;)

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
-   And, lastly, "`minecraft:biome_filter`" tests for certain biome tags. Look up the filter syntax and list of biome tags in the documentation or search examples in the vanilla Example pack.

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