---
title: Custom Weapons
description: Learn how to make custom weapons.
category: Tutorials
tags:
    - easy
mentions:
    - SirLich
    - solvedDev
    - MedicalJewel105
    - aexer0e
    - PepijnMC
    - ThomasOrs
    - Xterionix
    - QuazChick
---

Follow along with this guide to create a custom sword item. Change it up yourself to create any weapon you want!

Check out the [hit entity](/items/item-events#hit-entity) event to add even more functionality to your weapon if you'd like.

## Custom Sword Item

Like with the other item tutorials we will start by making a simple custom sword like so.

<CodeHeader>BP/items/my_sword.json</CodeHeader>

```json
{
    "format_version": "1.21.110",
    "minecraft:item": {
        "description": {
            "identifier": "wiki:my_sword",
            "menu_category": {
                "category": "equipment",
                "group": "minecraft:itemGroup.name.sword"
            }
        },
        "components": {
            "minecraft:max_stack_size": 1,
            // Give the item the correct positioning in third person
            "minecraft:hand_equipped": true,
            "minecraft:durability": {
                "max_durability": 600
            },
            // How much additional damage this weapon will deal to entities
            "minecraft:damage": 10,
            // We also let it be enchantable in the "sword" slot
            "minecraft:enchantable": {
                "value": 10,
                "slot": "sword"
            },
            // This texture is used for both inventory and the hand model
            "minecraft:icon": "wiki:my_sword",
            "minecraft:display_name": {
                "value": "My Custom Sword"
            },
            // Allow the sword to be repaired with sticks
            "minecraft:repairable": {
                "repair_items": [
                    {
                        "items": ["minecraft:stick"],
                        "repair_amount": "context.other->q.remaining_durability + 0.05 * context.other->q.max_durability"
                    }
                ]
            }
        }
    }
}
```

So at a bare minimum that is enough to get a sword put into the game, we still need to register the icon with the RP but thats not a massive issue as all we need to do is go to our RP folder and enter it in like so.

<CodeHeader>RP/textures/item_texture.json</CodeHeader>

```json
{
    "resource_pack_name": "custom-weapon",
    "texture_name": "atlas.items",
    "texture_data": {
        "wiki:my_sword": {
            // Make sure you have put an icon texture called my_sword.png here
            "textures": "textures/items/my_sword"
        }
    }
}
```

Here is an example texture if you do not have your own to use, just `Save As` and plop it in the `RP/textures/items` directory.

<WikiImage
    src="/assets/images/tutorials/custom-weapons/my_sword.png"
    alt="Sword texture"
    pixelated="true"
    width="128"
    class="my-4 mr-4"
/>

<Button link="https://raw.githubusercontent.com/Bedrock-OSS/bedrock-wiki/wiki/docs/public/assets/images/tutorials/custom-weapons/my_sword.png">
    Download Texture
</Button>

## In-game

Now that we have a BP containing our item's JSON definition and an RP containing the texture, we can make a new world, ensuring that we apply our add-on.

Once you have done all the above, go into creative mode and you should be able to find your sword by its name, or under the sword category as shown.

![](/assets/images/tutorials/custom-weapons/custom_sword.jpg)

Then, if you put it in your hand, you should see it in the game like this.

![](/assets/images/tutorials/custom-weapons/held_sword.jpg)

Now that wasn't too hard was it? You can make as many custom swords as you want now, however there is far more fun stuff you can do from here if you feel up for it.

## Tool-like Functionality

You can also mix and match other components like `minecraft:digger` to allow you to go through web or bamboo quicker like this:

<CodeHeader>minecraft:item > components</CodeHeader>

```json
"minecraft:digger": {
    "use_efficiency": true,
    "destroy_speeds": [
        {
            "block": "minecraft:web",
            "speed": 15
        },
        {
            "block": "minecraft:bamboo",
            "speed": 10
        }
    ]
}
```

## Item Recipe

You should probably make a recipe for it, which is covered in previous chapters, as there isn't anything really new in there, but incase you are unsure here is an example one to make the sword with ender eyes and ender pearls.

<CodeHeader>BP/recipes/my_sword.json</CodeHeader>

```json
{
    "format_version": "1.21.110",
    "minecraft:recipe_shaped": {
        "description": {
            "identifier": "wiki:my_sword"
        },
        "tags": ["crafting_table"],
        "pattern": ["e", "E", "#"],
        "key": {
            "#": {
                "item": "minecraft:stick"
            },
            "E": {
                "item": "minecraft:ender_eye"
            },
            "e": {
                "item": "minecraft:ender_pearl"
            }
        },
        "result": {
            "item": "wiki:my_sword"
        },
        "unlock": [
            {
                "item": "minecraft:ender_eye"
            }
        ]
    }
}
```

![](/assets/images/tutorials/custom-weapons/sword_recipe.jpg)

If you whack that in then you can now craft your sword in the game and hopefully go off and make any other custom swords you fancy or even bows or tridents.
