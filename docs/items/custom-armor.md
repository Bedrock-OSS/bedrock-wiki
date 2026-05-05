---
title: Custom Armor
example: custom_armor
description: Learn how to make a custom armor set.
category: Vanilla Re-Creations
license: true
mentions:
    - SirLich
    - Dreamedc2015
    - sermah
    - yanasakana
    - Joelant05
    - MedicalJewel105
    - aexer0e
    - Brougud
    - XxPoggyisLitxX
    - LeGend077
    - SmokeyStack
    - QuazChick
---

:::tip FORMAT VERSION 1.26.10
This page assumes a basic understanding of custom items and attachables.
Check out the [items guide](/items/items-intro) before starting!
:::

Making custom armors is surprisingly easy to do, although you need to do a bit of fiddling around as there are a few files that need to be added and there can be a little bit of texturing involved.

## Armor Textures

Each set of custom armor will need four textures for item icons, as well as three separate textures that will be applied to the armor model when worn.

The first armor model texture (named `custom_1.png` here) is applied to the helmet, chestplate and boots whereas the second texture (named `custom_2.png` here) is applied to the leggings.

<div style="display: grid; grid-template-columns: repeat(auto-fill, 256px); column-gap: 1em;">

<ExampleFile path="RP/textures/wiki/items/custom_helmet.png" />
<ExampleFile path="RP/textures/wiki/items/custom_chestplate.png" />
<ExampleFile path="RP/textures/wiki/items/custom_leggings.png" />
<ExampleFile path="RP/textures/wiki/items/custom_boots.png" />
<ExampleFile path="RP/textures/wiki/models/armor/custom_baby.png" />
<ExampleFile path="RP/textures/wiki/models/armor/custom_1.png" />
<ExampleFile path="RP/textures/wiki/models/armor/custom_2.png" />

</div>

You'll also need to add each item icon to the [items texture atlas](/concepts/texture-atlases#items) using the `item_texture.json` file:

<ExampleFile path="RP/textures/item_texture.json" />

## Custom Helmet

### Item JSON

<ExampleFile path="BP/items/custom_helmet.json" />

### Attachable JSON

At this point your item would appear in-game and would be wearable but it would not have any appearance on the player's model.

This appearance can be achieved by using a feature known as _attachables_, which visually _attach_ themselves to another entity based on its equipment.
To start with, you'll need to create an `attachables` folder in your resource pack (you may already have one).

The attachable samples in this guide are largely based on the vanilla armor attachables, which have support for armor trims, enchantment glint and dedicated models for baby mobs.

<ExampleFile path="RP/attachables/custom_helmet.json" />

### Item Name

Finally, let's define the name of our item by adding a translation in the resource pack in the form `item.<identifier>=<name>`{lang=xml}.

<CodeHeader>RP/texts/en_US.lang</CodeHeader>

```lang
item.wiki:custom_helmet=Custom Helmet
```

If you now go into the game and check what you have produced you should be able to wear your helmet and pat yourself on the back for a job well done.

![](inventory.png)

## Custom Chestplate

### Item JSON

<ExampleFile path="BP/items/custom_chestplate.json" />

### Attachable JSON

<ExampleFile path="RP/attachables/custom_chestplate.json" />

### Item Name

<CodeHeader>RP/texts/en_US.lang</CodeHeader>

```lang
item.wiki:custom_chestplate=Custom Chestplate
```

## Custom Leggings

### Item JSON

<ExampleFile path="BP/items/custom_leggings.json" />

### Attachable JSON

<ExampleFile path="RP/attachables/custom_leggings.json" />

### Item Name

<CodeHeader>RP/texts/en_US.lang</CodeHeader>

```lang
item.wiki:custom_leggings=Custom Leggings
```

## Custom Boots

### Item JSON

<ExampleFile path="BP/items/custom_boots.json" />

### Attachable JSON

<ExampleFile path="RP/attachables/custom_boots.json" />

### Item Name

<CodeHeader>RP/texts/en_US.lang</CodeHeader>

```lang
item.wiki:custom_boots=Custom Boots
```

## Result

That's it, you now have a whole suit of custom armor to swagger around in!
You can use this as a basis to make whatever other armor you want in the game.

![An armor stand and a baby zombie both equipped with a full set of custom armor.](armor_stand.png)

## Bonus - Making Set Effects

This is a bit more advanced but lets say you want your custom armor to act like it's a set from an RPG game. We can add some code to check if we have the set equipped and do some great stuff with it.

Note that for effects you can use `tick.json` and functions with hasitem selector argument to avoid using player.json.

In this example we will just add a chance to teleport the attacker somewhere nearby and put a blurb on the console for flavour.

As we want this to trigger when the player is hit we need to add some logic to the `player.json` file. This is a huge file and we unfortunately need to make sure it has all the default content in there as well due to the way it will overwrite the default player components etc.

So rather than include the whole `player.json` I will just include the parts you will need to add to your `components` and `events` sections. If you have no idea what the `player.json` is then look in the vanilla behavior pack and look for it and just copy it over into your project.

So first of all lets put in the damage sensor component (which goes in your component section) which listens for when you take damage and lets you raise an event from it.

<CodeHeader>BP/entities/player.json#components</CodeHeader>

```json
"minecraft:damage_sensor": {
    "triggers": {
        "on_damage": {
            "filters": {
                "all_of": [
                    {
                        "test": "has_equipment",
                        "subject": "self",
                        // Domain is the body part in this case
                        "domain": "head",
                        "operator": "==",
                        // The item identifier we want to check
                        "value": "wiki:custom_helm"
                    },
                    {
                        "test": "has_equipment",
                        "subject": "self",
                        "domain": "torso",
                        "operator": "==",
                        // Worth noting you can omit prefix for minecraft internal items i.e stick
                        "value": "wiki:custom_chest"
                    },
                    {
                        "test": "has_equipment",
                        "subject": "self",
                        "domain": "leg",
                        "operator": "==",
                        "value": "wiki:custom_leggings"
                    },
                    {
                        "test": "has_equipment",
                        "subject": "self",
                        "domain": "feet",
                        "operator": "==",
                        "value": "wiki:custom_boots"
                    }
                ]
            },
            // If all the triggers match in the filter raise the event
            "event": "wiki:armor_sets.custom.taken_damage"
        },
        // This means if it matches the check it still applies damage
        // Can be good to ignore team damage or similar scenarios
        "deals_damage": true
    }
}
```

As you can see from the comments, there is a lot there but really all we are doing is listening out for something then making sure we only filter the results we care about then relay on an event.

The event can be called anything but it is often better to have it more specific, in case you end up having multiple similar events etc., also it can help finding if you have multiple sections to it, i.e. I could search for "armour_sets" and find all events related to it.
Then once you are done, in the same file we decide what we want to do with the event, which we put into our `events` section.

<CodeHeader>BP/entities/player.json#events</CodeHeader>

```json
"wiki:armor_sets.my_custom.taken_damage": {
    "randomize": [
        {
            "weight": 1,
            // We do a sequence here as we want to apply one command on one entity and the other on ourselves
            "sequence": [
                {
                    // This will take the attacker/other because it was in context at time of raising the event in the damage_sensor
                    "queue_command": {
                        // Teleport the entity away from us
                        "command": "spreadplayers ~~ 5 20 @s",
                        // Run the command on the attacker not us
                        "target": "other"
                    }
                },
                {
                    "queue_command": {
                        "command": "tellraw @s { \"rawtext\": [{ \"text\": \"§aYour armor glows and the enemy vanishes\" }] }"
                    }
                }
            ]
        },
        {
            // Dummy weighting so it happens semi frequently
            "weight": 20
        }
    ]
}
```

Thats it, you can rejig the bits how you see fit but ultimately you have all the pieces to apply effects to armor and check for if you have the whole set applied or check for other equipment.

You can also change the equipment checks from self to other and check if whoever is attacking you has something equipped or even check if you are attacking a sort of block/entity and do different effects based on that. We haven't touched on that directly here but there is a good enough starting point to get you on your way and let you be creative with things.
