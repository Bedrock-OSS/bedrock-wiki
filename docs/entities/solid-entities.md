---
title: Solid Entities
description: Solid entities are entities that the player can bump into, step on, or otherwise physically interact with without passing through.
category: Tutorials
tags:
    - intermediate
mentions:
    - SirLich
    - Joelant05
    - Chikorita-Lover
    - Lufurrius
    - MedicalJewel105
    - ThomasOrs
    - QuazChick
---

Solid entities are entities that the player can bump into, step on, or otherwise physically interact with without passing through. Entities like this have many uses, such as emulating blocks.

This page will discuss some of the ways that solid entities can be created.

Not all techniques are ideal for all scenarios. Experiment, and figure out what works best for you.

## Collidable Entities

This is generally the best option for creating entities with solid collisions, allowing players to collide with the entity without needing to modify the player entity JSON.

<CodeHeader>BP/entities/solid_entity.json</CodeHeader>

```json
{
    "format_version": "1.26.0",
    "minecraft:entity": {
        "description": {
            "identifier": "wiki:solid_entity",
            "is_spawnable": true,
            "is_summonable": true
        },
        "components": {
            // Allows other entities to collide with this entity
            "minecraft:is_collidable": {},
            "minecraft:collision_box": {
                "height": 1,
                "width": 1
            },
            // Prevents rotation
            "minecraft:body_rotation_blocked": {},
            "minecraft:rotation_axis_aligned": {},
            // Hides the entity's shadow when using fancy graphics
            "minecraft:renders_when_invisible": {},
            "minecraft:spell_effects": {
                "add_effects": [
                    {
                        "duration": "infinite",
                        "effect": "invisibility",
                        "visible": false
                    }
                ]
            }
        }
    }
}
```

## Stackable Entities

Adding the `minecraft:is_stackable` component to your entity will allow it to collide with other stackable entities, such as boats and minecarts.

You will also need to add `minecraft:push_through` and set its `value` parameter to 1.

<CodeHeader>minecraft:entity</CodeHeader>

```json
"components": {
    "minecraft:is_stackable": {},
    "minecraft:push_through": 1
}
```

## Runtime Identifiers

[Runtime identifiers](/entities/runtime-identifier) can be used to achieve solid entities, but currently only 2, each with a specific shape, and their own side effects. Neither collision shapes are possible to change or scale.

### Boat

<CodeHeader>BP/entities/solid_entity.json</CodeHeader>

```json
{
    "format_version": "1.26.0",
    "minecraft:entity": {
        "description": {
            "identifier": "wiki:solid_entity",
            "runtime_identifier": "minecraft:boat"
            ...
        }
    }
}
```

-   Boat-shaped solid collision
-   Certain other boat-like effects

### Shulker

<CodeHeader>BP/entities/solid_entity.json</CodeHeader>

```json
{
    "format_version": "1.26.0",
    "minecraft:entity": {
        "description": {
            "identifier": "wiki:solid_entity",
            "runtime_identifier": "minecraft:shulker"
            ...
        }
    }
}
```

-   1×1 block sized solid collision.
-   Sticks to block grid.
-   Teleports randomly when supporting block removed.

## Using Block Collisions

In some scenarios, it's probably better to `/setblock` or `/fill` to place barrier blocks, either statically or dynamically. There needs to be both a way of placing the barriers, and removing them.

`/fill ~ ~ ~ ~ ~1 ~ barrier 0 replace air`
Places barriers in a 1x1x2 area.

`/fill ~1 ~1 ~1 ~-1 ~-1 ~-1 air 0 replace barrier`
Removes barriers within a 3x3x3 area.

These [commands](/animation-controllers/entity-commands) will have to be triggering at a constant rate, for consistency. They can either be triggered through entity components, or animation controllers.
