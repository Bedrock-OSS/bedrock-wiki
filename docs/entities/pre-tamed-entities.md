---
title: Summon Pre-tamed Entities
mention:
  - Axelpvz2030
---

It's possible to spawn tamed entities by taking advantage of projectiles. All projectiles launched by a player considers them as its “owner”. This can be used to transform such projectile into another entity retaining its owner.


First you need to create your projectile entity. To make this work, you must use the runtime of any projectile the player is able to use, such as `minecraft:arrow`, `minecraft:egg`, `minecraft:snowball`, etc. Otherwise the projectile won’t keep any relation with the player.

<CodeHeader>BP/entities/wiki_projectile.entity.bp.json</CodeHeader>
```json
{
    "description": {
        "identifier": "wiki:wiki_projectile",
        "is_spawnable": false,
        "is_summonable": false,
        "is_experimental": false,
        "runtime_identifier": "minecraft:arrow" //You can use other runtimes, must be a projectile the player can use
    }
}
```

To make sure everything works well, make the projectile stick on hit instead of just break. Make sure it doesn't do damage, otherwise if you hit something and your summoned mob has `minecraft.behavior.owner_hurt_target` It will immediately attack once spawned because you hurt an entity. We also add the component group and events to transform it into a tamed entity.

<CodeHeader>BP/entities/wiki_projectile.entity.bp.json</CodeHeader>
```json
{
	"component_groups" {
		"wiki_tame": {
			"minecraft:transformation": {
				"keep_owner": true, // makes the entity keep its owner after transform
				"into": "minecraft:wolf<minecraft:entity_born>"
			}
		}
	}
	"components": {
		"minecraft:projectile": {
			"on_hit": {
				"impact_damage": {
					"damage": 0 //Prevents you from accidently damaging other entities
				},
				"definition_event": {
					"event_trigger": {
						"event": "wiki:transform" //Event to transform the projectile on hit, completely optional
					}
				},
				"stick_in_ground": {} // With this the projectile won't be destroyed on hit
			}
		}
	},
	"events": {
		"wiki:transform": {
			"add": {
				"component_groups": ["wiki_tame"]
			}
		}
	}
}
```

Once you have both your projectile and entity to spawn, just make the player shoots the projectile. There's two ways to do it, the first one is using items, you can do it using the `shoot` item event response.

<CodeHeader>BP/items/example_projectile.item.bp.json</CodeHeader>
```json
{
    "events": {
        "summon": {
            "shoot": {
                "projectile": "wiki:wiki_projectile" // Projectile´s ID
            }
        }
    }
}
```

The second way is by editing the player. You can find player flie in the Vanilla Behavior Pack. Use `minecraft:spawn_entity` to generate the projectile.

<CodeHeader>BP/entities/player.json/components</CodeHeader>
```json
{
   "minecraft:spawn_entity": {
      "entities": [
         {
            "min_wait_time": 0, //Min wait time in seconds
            "max_wait_time": 0, //Max wait time in seconds
            "spawn_entity": "wiki:wiki_projectile", //Projectile's ID
            "single_use": true,
            "num_to_spawn": 1
         }
      ]
   }
}
```

If you use another method to generate the projectile, the entity won´t appear tamed, because there´s no previous relation between both entities.
