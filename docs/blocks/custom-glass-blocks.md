---
title: Custom Glass
description: This page will show you how to use material instances to allow texture translucency on full blocks.
category: Vanilla Re-Creations
tags:
    - beginner
    - easy
mentions:
    - Eko-byte
    - QuazChick
    - SmokeyStack
---

::: tip FORMAT VERSION `1.21.40`
This example requires basic knowledge of blocks to understand.
Check out the [blocks guide](/blocks/blocks-intro) before starting.
:::

Making glass blocks may seem like a simple task, however when you first try your block may appear opaque. This page will show you how to use [material instances](/blocks/block-components#material-instances) to allow texture translucency.

By the end you should be able to create something like this!

![A collection of custom glass blocks](/assets/images/blocks/custom-glass-blocks/showcase.png)

## Block JSON

<CodeHeader>BP/blocks/custom_glass.json</CodeHeader>

```json
{
    "format_version": "1.21.40",
    "minecraft:block": {
        "description": {
            "identifier": "wiki:custom_glass",
            "menu_category": {
                "category": "construction",
                "group": "itemGroup.name.glass"
            }
        },
        "components": {
            "minecraft:light_dampening": 0, // Don't block any light (this is set to 15 for Tinted Glass)
            "minecraft:loot": "loot_tables/empty.json", // Don't drop without Silk Touch
            "minecraft:material_instances": {
                "*": {
                    "render_method": "blend" // Allows translucency
                }
            }
        }
    }
}
```

## Applying Textures & Sounds

For the correct face culling to apply to your glass block, textures must be defined in `RP/blocks.json` rather than with the material instances and geometry components.

<CodeHeader>RP/blocks.json</CodeHeader>

```json
{
    "format_version": "1.21.40",
    "wiki:custom_glass": {
        "textures": "custom_glass", // Shortname defined in `RP/textures/terrain_texture.json`
        "sound": "glass"
    }
}
```
