---
title: Solid Entities
tags:
    - recipe
    - intermediate
---

Solid entities are entities that the player can bump into, step on, or otherwise physically interact with without passing through. Entities like this have many uses, such as emulating blocks.

This document will discuss some of the ways that solid entities can be created.

Not all techniques are ideal for all scenarios. Experiment, and figure out what works best for you.


## Runtime Identifiers

[Runtime identifiers](/entities/runtime-identifier) can be used to achieve solid entities, but currently only 2, each with a specific shape, and their own side effects. Neither colission shapes are possible to change or scale.


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

-   1x1 solid colission box.
-   Sticks to block grid
-   Teleports when supporting block removed.


## is_stackable

Place `minecraft:is_stackable` on both entities you want to collide. **Note:** This requires editing `player.json` if you wish the entity to be solid for the player.

You will also need to add `minecraft:push_through` and set its `value` parameter to 1.

## Faking it with blocks

In some scenarios, it's probably better to `/setblock` or `/fill` to place barrier blocks, either statically or dynamically. For example, lets say we have a *really* big entity:

<CodeHeader>BP/Entities/big_entity.json</CodeHeader>
```json
{
  "format_version": "1.16.0",
  "minecraft:entity": {
    "description": {
      "identifier": "wiki:big_solid_entity"
       . . .
    }
  }
}  
```
