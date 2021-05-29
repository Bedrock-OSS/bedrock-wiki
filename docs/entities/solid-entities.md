---
title: Solid Entities
tags:
    - recipe
---

# Solid Entities

<Label color="yellow">Intermediate</Label>

Solid entities are entities that the player can bump into, step on, or otherwise physically interact with, without passing through. Entities like this have many uses, such as emulating blocks.

This document will discuss some of the ways that solid entities can be created.

Not all techniques are ideal for all scenarios. Experiment, and figure out what works best for you.

## Boat runtime identifier

The boat runtime identifier will cause the entity to be solid with the shape of a boat, as well as provide some other boat-like effects, which might not be desirable. It is not possible to increase the scale of the solid part, even if you scale the entity.

## Shulker runtime identifier

The shulker runtime identifier wil cause the entity to be solid with a 1x1 block, as well as act like a shulker, including unwanted teleports. It is not possible to increase the scale of the solid part, even if you scale the entity.

## is_stackable

Place `is_stackable` on both entities you want to collide. `Note:` This requires editing `player.json` if you want the entity to be solid for the player.

You will also need to set push through = 1`

## Faking it with blocks

In some scenarios, its probably better to `./setblock` barriers, either statically, or dynamically.
