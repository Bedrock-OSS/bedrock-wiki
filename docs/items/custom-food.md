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

:::tip FORMAT VERSION `1.21.60`
This page requires a basic understanding of custom items.
Check out the [items guide](/items/items-intro) before starting!
:::

On this page, you will learn how to create custom foods that, when consumed, grant effects to the player (like the golden apple).

## Basic Item JSON

<CodeHeader>BP/items/custom_food.json</CodeHeader>

```json
{
    "format_version": "1.21.60",
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
"minecraft:custom_components": ["wiki:food_effects"]
```

### Custom Component Script

In the scripts file, just use a single event after using a specific item, and after using this item the player will acquire one or more effects, as in the code below.

<CodeHeader>BP/scripts/main.js</CodeHeader>

```js
import { world } from "@minecraft/server";

const ItemFoodEffectsComponent = {
    onConsume({ itemStack, source }) {
        // Check for the item that should trigger the following effects
        if (itemStack.typeId === "wiki:custom_food") {
            // minecraft:speed is the name of the effect.
            // 100 is the duration of the effect in ticks (1 second is 20 ticks, divide by 20 to get the results in seconds).
            source.addEffect("minecraft:speed", 100, {
                amplifier: 2, // The effect level, starting at 1 and ending at 256.
                showParticle: true, // A boolean representing whether the particles will appear or not.
            });
        }
    },
};

world.beforeEvents.worldInitialize.subscribe(({ itemComponentRegistry }) => {
    // Register the custom component for use in the item JSON file:
    itemComponentRegistry.registerCustomComponent("wiki:food_effects", ItemFoodEffectsComponent);
});
```
