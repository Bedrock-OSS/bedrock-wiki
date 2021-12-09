---
title: Solid Entities
category: Tutorials
tags:
    - recipe
    - intermediate
---

Solid entities are entities that the player can bump into, step on, or otherwise physically interact with without passing through. Entities like this have many uses, such as emulating blocks.

This document will discuss some of the ways that solid entities can be created.

Not all techniques are ideal for all scenarios. Experiment, and figure out what works best for you.

## Runtime Identifiers

[Runtime identifiers](/entities/runtime-identifier) can be used to achieve solid entities, but currently only 2, each with a specific shape, and their own side effects. Neither colision shapes are possible to change or scale.

### Boat

<CodeHeader>BP/Entities/entity_name.json</CodeHeader>

```json
{
  "format_version": "1.16.0",
  "minecraft:entity": {
    "description": {
      "identifier": "wiki:solid_entity",
      "runtime_identifier": "minecraft:boat"
       . . .
    }
  }
}
```

-   Boat-shaped solid collision
-   Certain other boat-like effects

### Shulker

<CodeHeader>BP/Entities/entity_name.json</CodeHeader>

```json
{
  "format_version": "1.16.0",
  "minecraft:entity": {
    "description": {
      "identifier": "wiki:solid_entity",
      "runtime_identifier": "minecraft:shulker"
       . . .
    }
  }
}
```

-   1x1 block sized solid colision.
-   Sticks to block grid.
-   Teleports randomly when supporting block removed.

## minecraft:is_stackable

Place `minecraft:is_stackable` on entities you want to be treated as being solid. **Note:** This requires editing `player.json` if you wish the entity to be solid for the player.

`"minecraft:is_stackable": {}`

You will also need to add `minecraft:push_through` and set its `value` parameter to 1.

`"minecraft:push_through": 1`

(they should both go in `components`)

## Faking it with blocks

In some scenarios, it's probably better to `/setblock` or `/fill` to place barrier blocks, either statically or dynamically. There needs to be both a way of placing the barriers, and removing them.

`/fill ~ ~ ~ ~ ~1 ~ barrier 0 replace air`: placing barriers in a 1x1x2 area.

`/fill ~1 ~1 ~1 ~-1 ~-1 ~-1 air 0 replace barrier`: removing barriers within a 3x3x3 area.

These [commands](/animation-controllers/entity-commands) will have to be triggering at a constant rate, for consistency. They can either be triggered through entity components, or animation controllers.
