---
title: Spawning Tamed Entities
description: Learn about different methods that can be used to spawn a pre-tamed entity.
category: Tutorials
tags:
    - scripting
    - intermediate
mentions:
    - Axelpvz2030
    - aexer0e
    - SirLich
    - MedicalJewel105
    - SmokeyStack
    - ThomasOrs
    - QuazChick
---

In this tutorial, you will learn how to spawn a pre-tamed entity via scripting, by running an event on the player you want the entity tamed to, or by throwing an item that transforms into a tamed entity upon impact.

## Scripting Method

This example will spawn a tamed wolf for each player whenever they spawn (or respawn) by using the [`EntityTameableComponent.tame`](https://learn.microsoft.com/minecraft/creator/scriptapi/minecraft/server/entitytameablecomponent#tame) method.

```js
import { world } from "@minecraft/server";

world.afterEvents.playerSpawn.subscribe(({ player }) => {
    const wolf = player.dimension.spawnEntity("minecraft:wolf", player.location);

    // Tame the wolf to the player
    const tameable = wolf.getComponent("minecraft:tameable");
    tameable.tame(player);
});
```

## Events Method

:::danger UNRECOMMENDED
This method makes use of runtime identifiers and modification of the player entity, which can lead to incompatibility.
Using scripting is preferred as it does not have these downsides.
:::

### Tamed Entity Spawner

We'll need to create a simple custom entity that will have the `minecraft:arrow` runtime identifier (other projectile runtime identifiers work as well), an empty projectile component, and a transformation component to turn into a tamed wolf.

<CodeHeader>BP/entities/pretamed_wolf.json</CodeHeader>

```json
{
    "format_version": "1.21.0",
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

You can also spawn it with a `wiki:pretamed_wolf` spawn egg by setting `is_spawnable` to `true`!

:::warning CUSTOM PETS
If you want to spawn a custom entity instead of a wolf using this method, you will need to make sure that the entity has the `minecraft:is_tamed` component for it to work properly. Otherwise, some behaviors will not function as expected for a tamed entity.
:::

### Player Event

Here, we'll need a copy of the player's behavior file, which we will modify slightly. we'll add a simple event that adds a component group which will spawn our custom middle-man entity.

You can find the BP player entity file in the vanilla behavior pack provided by Mojang [here](https://aka.ms/behaviorpacktemplate).

<CodeHeader>BP/entities/player.json</CodeHeader>

```json
{
    "format_version": "1.21.0",
    "minecraft:entity": {
        "description": {
            "identifier": "minecraft:player",
            "is_spawnable": false,
            "is_summonable": false,
            "is_experimental": false
        },
        "component_groups": {
            ...
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
            }
        },
        ...
        "events": {
            "wiki:spawn_tamed_wolf": {
                "add": {
                    "component_groups": ["wiki:spawn_tamed_wolf"]
                }
            }
        }
    }
}
```

### Spawning on Projectile Hit

To make the tamed wolf spawn only when the projectile hits something, we first need to create a throwable item:

<CodeHeader>BP/items/throwable_pretamed_wolf.json</CodeHeader>

```json
{
    "format_version": "1.21.50",
    "minecraft:item": {
        "description": {
            "identifier": "wiki:throwable_pretamed_wolf"
        },
        "components": {
            "minecraft:icon": "wiki:my_icon",
            "minecraft:throwable": {
                "do_swing_animation": true
            },
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
    "format_version": "1.21.0",
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
                    "impact_damage": {
                        "damage": 0
                    },
                    "stick_in_ground": {},
                    "definition_event": {
                        "event_trigger": {
                            "event": "wiki:on_hit"
                        }
                    }
                }
            }
        },
        "events": {
            "wiki:on_hit": {
                "add": {
                    "component_groups": ["wiki:transform_to_entity"]
                }
            }
        }
    }
}
```

Special thanks to [Zarkmend ZAN](https://twitter.com/Zarkmend_ZAN) for figuring this out :)
