---
title: Custom Food
description: Learn how to create custom foods that, when consumed, grant effects to the player (like the golden apple).
category: Tutorials
tags:
    - easy
    - scripting
license: true
mentions:
    - KawEduh-dv
    - QuazChick
---

:::tip FORMAT VERSION `1.21.110`
This page requires a basic understanding of custom items.
Check out the [items guide](/items/items-intro) before starting!
:::

On this page, you will learn how to create custom foods that, when consumed, grant effects to the player (like the golden apple).

## Basic Item JSON

<CodeHeader>BP/items/custom_food.json</CodeHeader>

```json
{
    "format_version": "1.21.110",
    "minecraft:item": {
        "description": {
            "identifier": "wiki:custom_food",
            "menu_category": {
                "category": "equipment",
                "group": "minecraft:itemGroup.name.miscFood"
            }
        },
        "components": {
            "minecraft:icon": "wiki:custom_food",
            "minecraft:food": {
                "nutrition": 4,
                "saturation_modifier": 0.6
            },
            "minecraft:use_animation": "eat",
            "minecraft:use_modifiers": {
                "use_duration": 1.6,
                "movement_modifier": 0.33
            },
            "minecraft:tags": {
                "tags": [
                    "minecraft:is_food",
                    "minecraft:is_meat", // Only include if the food is meat
                    "minecraft:is_cooked" // Only include if the food is cooked
                ]
            }
        }
    }
}
```

If you already know how to place a texture in the correct path, you can skip down, but if you don't, it's not enough to simply place the texture file in the `RP/textures/items` folder.

We need to create an object named `wiki:custom_<thing>` in the `RP/textures/item_texture.json` file of our resource pack, as in the example below.

<CodeHeader>RP/textures/item_texture.json</CodeHeader>

```json
{
    "texture_name": "atlas.items",
    "texture_data": {
        "wiki:custom_food": {
            "textures": "textures/items/custom_food"
        }
    }
}
```

## Applying Effects

In order to apply effects to the player when the food is consumed, we'll need to make use of [custom components](/items/item-events).

In this tutorial, our custom component will be `wiki:food_effects`.
Make sure to change the namespace to something that uniquely identifies your add-on.

<CodeHeader>minecraft:item > components</CodeHeader>

```json
"wiki:food_effects": [
    {
        "name": "wither",
        "duration": 600, // 30 seconds in ticks.
        "amplifier": 1
    },
    {
        "name": "slowness",
        "duration": 600,
        "amplifier": 2
    }
]
```

### Custom Component Script

In the scripts file, just use a single event after using a specific item, and after using this item the player will acquire one or more effects, as in the code below.

<CodeHeader>BP/scripts/main.js</CodeHeader>

```js
import { system } from "@minecraft/server";

const ItemFoodEffectsComponent = {
    onConsume({ source }, { params }) {
        // Iterates over each object in the component's array.
        for (const { name, duration, amplifier } of params) {
            source.addEffect(name, duration, { amplifier });
        }
    },
};

system.beforeEvents.startup.subscribe(({ itemComponentRegistry }) => {
    // Register the custom component for use in the item JSON file:
    itemComponentRegistry.registerCustomComponent("wiki:food_effects", ItemFoodEffectsComponent);
});
```
