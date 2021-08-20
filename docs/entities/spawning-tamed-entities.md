---
title: Spawning Tamed Entities
---

<Label color="yellow">Intermediate</Label>

In this tutorial, you will learn how to spawn a pre-tamed entity by running an event on the player you want the entity tamed to.

## Overview

Traditionally, if you wanted entity tamed by a player, you had to force the player to interact with that entity through `minecraft:tameable`. However, you can also take advantage of the fact that vanilla projectiles keep track of the entity responsible for spawning\* them to spawn an entity pre-tamed.

To do this, we'll summon a dummy middle-man projectile entity through `minecraft:spawn_entity`, which will instantly transform into the entity we want to spawn pre-tamed—in this tutorial, a vanilla wolf—through `minecraft:transformation` with `keep_owner` set to `true`.

\*: *Spawning* should not be confused with *summoning*. The projectile will keep track of the player if it was spawned by a spawn egg or `minecraft:spawn_entity` component, but not by a `/summon` command.

## player.json

Here, we'll need a copy of the player's behavior file, which we will modify slightly. we'll add a simple event that adds a component group which will spawn our custom middle-man entity.

You can find the BP player entity file in the vanilla behavior pack provided by Mojang [here](https://aka.ms/behaviorpacktemplate).

<CodeHeader></CodeHeader>

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

Then, we'll need to create a simple custom entity that will have the `minecraft:arrow` runtime identifier, an empty projectile component, and a trasnfomation component to turn into a tamed wolf.

<CodeHeader></CodeHeader>

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
                "into": "minecraft:wolf<tamed>",
                "keep_owner": true
            }
        }
    }
}
```

And now, you can spawn a tamed wolf next to the player with `/event entity @p wiki:spawn_tamed_wolf`; You can also spawn it with an `wiki:pretamed_wolf` spawn egg by setting `is_spawnable` to `true`!

Special thanks to [Zarkmend ZAN](https://twitter.com/Zarkmend_ZAN) for figuring this out :)