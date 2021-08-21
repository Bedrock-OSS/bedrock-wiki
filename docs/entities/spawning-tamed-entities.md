---
title: Spawning Tamed Entities
tags:
    - intermediate
mention:
    - Axelpvz2030
---

In this tutorial, you will learn how to spawn a pre-tamed entity by running an event on the player you want the entity tamed to, and by throwing an item that transforms into a tamed entity upon impact.

## Overview

Traditionally, if you wanted entity tamed by a player, you had to force the player to interact with that entity through `minecraft:tameable`. However, you can also take advantage of the fact that vanilla projectiles keep track of the entity responsible for spawning\* them to spawn an entity pre-tamed.

To do this, we'll summon a dummy middle-man projectile entity through `minecraft:spawn_entity`, which will instantly transform into the entity we want to spawn pre-tamed—in this tutorial, a vanilla wolf—through `minecraft:transformation` with `keep_owner` set to `true`.

\*: _Spawning_ should not be confused with _summoning_. The projectile will keep track of the player if it was spawned by a spawn egg or `minecraft:spawn_entity` component, but not by a `/summon` command.

## player.json

Here, we'll need a copy of the player's behavior file, which we will modify slightly. we'll add a simple event that adds a component group which will spawn our custom middle-man entity.

You can find the BP player entity file in the vanilla behavior pack provided by Mojang [here](https://aka.ms/behaviorpacktemplate).

<CodeHeader>BP/entities/player.json</CodeHeader>
```json
{
    "format_version": "1.16.0",
    "minecraft:entity": {
        "description": {
            "identifier": "minecraft:player",
            "is_spawnable": false,
            "is_summonable": false,
            "is_experimental": false
        },
        "component_groups": {
            "wiki:spawn_tamed_wolf": {
                "minecraft:spawn_entity": {
                    "entities": {
                        "min_wait_time": 0,
                        "max_wait_time": 0,
                        "spawn_entity": "wiki:pretamed_wolf",
                        "single_use": true,
                        "num_to_spawn": 1
                    }
                }
            },
            ...
        "events": {
            "wiki:spawn_tamed_wolf": { "add": { "component_groups": [ "wiki:spawn_tamed_wolf" ] } }
            ...
        }
    }
}
```

## pretamed_wolf.json

Afterwards, we'll need to create a simple custom entity that will have the `minecraft:arrow` runtime identifier (other projectile runtime identifiers work as well), an empty projectile component, and a trasnfomation component to turn into a tamed wolf.

<CodeHeader>BP/entities/pretamed_wolf.json</CodeHeader>
```json
{
	"format_version": "1.16.0",
	"minecraft:entity": {
		"description": {
			"identifier": "wiki:pretamed_wolf",
			"runtime_identifier": "minecraft:arrow",
			"is_spawnable": false,
			"is_summonable": true,
			"is_experimental": false
		},
		"components": {
			"minecraft:projectile": {},
			"minecraft:transformation": {
				"into": "minecraft:wolf<minecraft:on_tame>",
				"keep_owner": true
			}
		}
	}
}
```

And now, you can spawn a tamed wolf next to the player with `/event entity @p wiki:spawn_tamed_wolf`; You can also spawn it with a `wiki:pretamed_wolf` spawn egg by setting `is_spawnable` to `true`!

## Integrating Item Projectiles (Optional)

Introduced as one of [1.16's experimental item features](https://wiki.bedrock.dev/items/items-16.html), `minecraft:projectile` can be used to make projectiles that transform to tamed entities upon impact. 

<CodeHeader>BP/items/throwable_pretamed_wolf.json</CodeHeader>
```json
{
    "format_version": "1.16.100",
    "minecraft:item": {
        "description": {
            "identifier": "wiki:throwable_pretamed_wolf"
        },
        "components": {
            "minecraft:projectile": {
                "projectile_entity": "wiki:pretamed_wolf"
            }
        }
    }
}
```

We'll also need to make some adjustment to our custom projectile entity so that it doesn't transform right as it spawns.

<CodeHeader>BP/entities/pretamed_wolf.json</CodeHeader>
```json
{
    "minecraft:entity": {
        "description": {
			"identifier": "wiki:pretamed_wolf",
			"runtime_identifier": "minecraft:arrow",
			"is_spawnable": false,
			"is_summonable": true,
			"is_experimental": false
        },
        "component_groups": {
            "wiki:transform_to_entity": {
                "minecraft:transformation": {
                    "into": "minecraft:wolf<minecraft:on_tame>",
                    "keep_owner": true
                }
            }
        },
        "components": {
            "minecraft:projectile": {
                "on_hit": {
                    "impact_damage": { "damage": 0 },
                    "stick_in_ground": {},
                    "definition_event": {
                        "event_trigger": { "event": "wiki:on_hit" }
                    }
                }
            }
        },
        "events": {
            "wiki:on_hit": {
                "add": {
                    "component_groups": [ "wiki:transform_to_entity" ]
                }
            }
        }
    }
}
```

Special thanks to [Zarkmend ZAN](https://twitter.com/Zarkmend_ZAN) for figuring this out :)
