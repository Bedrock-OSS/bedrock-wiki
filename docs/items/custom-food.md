---
title: Custom Food
category: Tutorials
tags:
    - easy
    - scripting
license: true
mentions:
    - KawEduh-dv
description: Learn now how to create custom foods that, when consumed, gain one or more effects (like the golden apple).
---

::: tip
It is highly recommended that you look over the [Blockbench modelling and texturing](/guide/blockbench) section in the beginner's guide before tackling these sections.
:::

Creating customized foods is very easy if you use simple components where you can change any behavior of the food, from eating it and the item not being "eaten" or making it recover all saturation.

## Custom Food

Creating customized food:

<CodeHeader>BP/items/wiki:custom_<thing>.json</CodeHeader>

```json
{
	"format_version": "1.21.60",
	"minecraft:item": {
		"description": {
			"identifier": "wiki:custom_<thing>"
		},
		"components": {
            //custom component with consume component
			"minecraft:custom_components": ["wiki:on_consume"],
            //food icon
			"minecraft:icon": "wiki:custom_<thing>",
            //food components
            "minecraft:food": {
                "nutrition": 4,
                "saturation_modifier": 0.6
            },
            //food animation
            "minecraft:use_animation": "eat",
            "minecraft:use_modifiers": {
                "use_duration": 1.6,
                "movement_modifier": 0.33
            }
		}
	}
}
```

`minecraft:food`: is the object that creates an item to define it as food.
`nutrition`: this is how much hunger will be restored [Number]
`saturation_modifier`: this is how much hunger will be restored [Float]
`can_always_eat`: This defines whether the item will disappear after being eaten [Boolean]

`minecraft:use_modifiers`: is the object that defines the item as usable (have some action when used).
`use_duration`: This is the time it takes to finish using (or eating) the item [Float]
`movement_modifier`: This is the movement the player will have while using/eating the item (it is a multiplier so 0.5 would be 50% of the speed) [Float]


If you already know how to place a texture in the correct path, you can skip down, but if you don't, it's not enough to simply place the texture file in the `textures/items` folder. We need to create an object named `wiki:custom_<thing>` in the `RP/textures/item_texture.json` file of our resource pack, as in the example below.

Adding the texture to `item_texture.json`:

<CodeHeader>RP/textures/item_texture.json</CodeHeader>

```json
{
	"resource_pack_name": "vanilla",
	"texture_name": "atlas.items",
	"texture_data": {
		"my_custom_food_texture": {
			"textures": "textures/items/wiki:custom_<thing>food.png"
		}
	}
}
```

## Custom Food With Effects

Creating customized food:

<CodeHeader>BP/items/wiki:custom_<thing>.json</CodeHeader>

```json
{
	"format_version": "1.21.60",
	"minecraft:item": {
		"description": {
			"identifier": "wiki:custom_<thing>"
		},
		"components": {
            //custom component with consume component
			"minecraft:custom_components": ["wiki:on_consume"],
            //food icon
			"minecraft:icon": "wiki:custom_<thing>",
            //food components
            "minecraft:food": {
                "nutrition": 4,
                "saturation_modifier": 0.6
            },
            //food animation
            "minecraft:use_animation": "eat",
            "minecraft:use_modifiers": {
                "use_duration": 1.6,
                "movement_modifier": 0.33
            }
		}
	}
}
```


## Adding script with effects after eating

In the scripts file, just use a single event after using a specific item, and after using this item the player will acquire one or more effects, as in the code below.

<CodeHeader>BP/scripts/main.js</CodeHeader>

```js
import { world } from "@minecraft/server";

const ItemFoodEffectsComponent = {
    onConsume(event) {
        event.itemStack // The item stack that was consumed.
        event.source // The source entity that consumed the item.
        
        //Use this "if" to change the identifier for the entity that eats specific items to gain different effects depending on the items
        if (event.itemStack.typeId === 'wiki:custom_<thing>') {
            // minecraft:speed is the name of the effect.
            // 100 is the duration of the effect in ticks (a tip is 1 second is 20 ticks so multiply by 20 to get the results in seconds).
            //{ amplifier: 2 } is the effect level, starting at 1 and ending at 256
            //{ showParticle: true } is a boolean value (true or false) where we define whether the particles will appear or not
            event.source.addEffect("minecraft:speed", 100, { amplifier: 2, showParticle: true });
        }
    }
};

world.beforeEvents.worldInitialize.subscribe(({ itemComponentRegistry }) => {
    itemComponentRegistry.registerCustomComponent("wiki:on_consume", ItemFoodEffectsComponent);
});
```

