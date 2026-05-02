---
title: Custom Glass
example: custom_glass
description: This page will show you how to use material instances to allow texture translucency on full blocks.
category: Vanilla Re-Creations
tags:
    - beginner
    - easy
license: true
mentions:
    - Eko-byte
    - QuazChick
    - SmokeyStack
---

:::tip FORMAT VERSION 1.26.10
This example requires basic knowledge of blocks to understand.
Check out the [blocks guide](/blocks/blocks-intro) before starting.
:::

Making glass blocks may seem like a simple task, however when you first try your block may appear opaque.
This page will show you how to use [material instances](/blocks/block-components#material-instances) to allow texture translucency and [culling rules](/blocks/block-culling) to hide unwanted block faces.

By the end you should be able to create something like this!

![A collection of custom glass blocks](showcase.png)

## Block Model

[Vanilla block models](/blocks/vanilla-block-models) cannot have culling rules applied.
Therefore, we need to create our own full block model in order for our glass to appear correctly.

<Spoiler title="Custom Glass Model JSON">

<ExampleFile path="RP/models/blocks/custom_glass.geo.json" />

</Spoiler>

## Initial Block JSON

<CodeHeader>BP/blocks/custom_glass.json</CodeHeader>

```json
{
    "format_version": "1.26.10",
    "minecraft:block": {
        "description": {
            "identifier": "wiki:custom_glass",
            "menu_category": {
                "category": "construction",
                "group": "minecraft:itemGroup.name.glass"
            }
        },
        "components": {
            "minecraft:light_dampening": 0, // Don't block any light (this is set to 15 for Tinted Glass)
            "minecraft:loot": "loot_tables/empty.json", // Don't drop without Silk Touch
            "minecraft:geometry": {
                "identifier": "geometry.custom_glass" // A custom full block model that we can apply culling to later
            },
            "minecraft:material_instances": {
                "*": {
                    "texture": "wiki:custom_glass", // Texture shortname defined in terrain_texture.json
                    "render_method": "blend" // Allow translucency
                }
            }
        }
    }
}
```

## Applying Sounds

<ExampleFile path="RP/blocks.json" />

## Glass Block Culling

Currently, our custom glass doesn't have any culling applied.

This means that, when multiple glass blocks are next to each other, there will be faces separating them:

![A collection of custom glass blocks without culling](without_culling.png)

### Block Culling JSON

<Spoiler title="Custom Glass Culling Rules JSON">

<ExampleFile path="RP/block_culling/custom_glass.json" />

</Spoiler>

### Applying Culling Rules

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:geometry": {
    "identifier": "geometry.custom_glass",
    "culling": "wiki:culling.custom_glass"
}
```
