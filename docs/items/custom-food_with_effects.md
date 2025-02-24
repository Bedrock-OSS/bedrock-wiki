---
title: Custom Food With Effects
category: Tutorials
tags:
    - easy
    - scripting
license: true
mentions:
    - KawEduh-dv
description: Learn now how to create customized shirts that, when eaten, gain one or more effects(such as the golden apple).
---

::: tip
It is highly recommended that you look over the [Blockbench modelling and texturing](/guide/blockbench) section in the beginner's guide before tackling these sections.
:::

Creating customizable foods is very easy, and creating an effect as soon as we consume it is still very simple. We will only need the food item and a tiny notion of scripts for the effects, as we will see below.

## Custom Food

Creating customized food:

<CodeHeader>BP/items/my_custom_food.json</CodeHeader>

```json
{
	"format_version": "1.21.60",
	"minecraft:item": {
		"description": {
			"identifier": "wiki:my_custom_food"
		},
		"components": {
            //custom component with consume component
			"minecraft:custom_components": ["wiki:on_consume"],
            //food icon
			"minecraft:icon": "my_custom_food_texture",
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

If you already know how to place a texture in the correct path, you can go further down, but if you don't know, it's not enough to put the texture file in the `textures/items` folder. We need to create an object with the name `my_custom_food_texture` in the `RP/textures/item_texture.json` file of our resource pack, as in the example below.

Adding the texture to `item_texture.json`:

<CodeHeader>RP/textures/item_texture.json</CodeHeader>

```json
{
	"resource_pack_name": "vanilla",
	"texture_name": "atlas.items",
	"texture_data": {
		"my_custom_food_texture": {
			"textures": "textures/items/my_custom_food.png"
		}
	}
}
```

<Button link="https://raw.githubusercontent.com/Bedrock-OSS/bedrock-wiki/wiki/docs/public/assets/images/tutorials/custom-food_with_effects/my_custom_food.png">
    Download texture here
</Button>

## Adding script with effects after eating

In the scripts file, just use a single event after using a specific item, and after using this item the player will acquire one or more effects, as in the code below.

<CodeHeader>BP/scripts/main.js</CodeHeader>

```js
import { world } from "@minecraft/server";

const itemOnConsumeComponent = {
    onConsume(event) {
        event.itemStack // The item stack that was consumed.
        event.source // The source entity that consumed the item.
        
        //Use this "if" to change the identifier for the entity that eats specific items to gain different effects depending on the items
        if (event.itemStack.typeId === 'wiki:my_custom_food') {
            // minecraft:speed is the name of the effect.
            // 100 is the duration of the effect in ticks (a tip is 1 second is 20 ticks so multiply by 20 to get the results in seconds).
            //{ amplifier: 2 } is the effect level, starting at 1 and ending at 256
            //{ showParticle: true } is a boolean value (true or false) where we define whether the particles will appear or not
            event.source.addEffect("minecraft:speed", 100, { amplifier: 2, showParticle: true });
        }
    }
};

world.beforeEvents.worldInitialize.subscribe(({ itemComponentRegistry }) => {
    itemComponentRegistry.registerCustomComponent("wiki:on_consume", itemOnConsumeComponent);
});
```

