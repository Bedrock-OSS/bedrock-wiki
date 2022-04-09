---
title: Run Commands with Equipped Items
category: Tutorials
tags:
    - experimental
    - intermediate
mention:
    - Chikorita-Lover
---

## Introduction

A common concept for add-ons is implementing new armor sets with unique effects, just like the turtle shell and netherite armor. While items have a knockback resistance component, they don't have a component for inflicting mob effects, emitting particles, etc. under certain conditions. However, using server animations, MoLang and item tags, this can easily be done!

Keep in mind that this requires modifying the player behavior, which is a common theme for many add-ons; thus, your add-on may not be compatible with others if you wish to do this.

> However some people found a way not to use player.json. They replace it with dummy entity-rider. Try experimenting yourself!

The use of Holiday Creator Features is also required to add item tags and easily equip our item in armor or off-hand slots.

## Server Animation

The first step will be to create a server animation, which is a file that runs commands or events at certain keyframes. While client animations are in the resource pack, server animations are in the behavior pack. You can read a bit more [here](/entities/timers.html#animation-based-timers). We can start by using the following as a template:

<CodeHeader>BP/animations/player.json</CodeHeader>

```json
{
    "format_version": "1.10.0",
    "animations": {
        "animation.player.emerald_armor": {
            "timeline": {
                "0.0": []
            },
            "animation_length": 0.05,
            "loop": true
        }
    }
}
```

Let's go over what's in this template and what everything does:

- `animation.player.emerald_armor` is our animation's identifier; you can change this to something else, such as `animation.player.phantom_armor`.
- `timeline` runs commands and events at given keyframes.
- `animation_length` is how long the animation lasts; we'll use 0.05 seconds, as that's the length of an in-game tick.
- `loop` is quite straight-forward; setting it to true makes the animation loop.

We can add commands to the `0.0` array in our timeline to execute, such as an `/effect` command, like such:

<CodeHeader>BP/animations/player.json#timeline</CodeHeader>

```json
{
    "0.0": [
        "/effect @s speed 1 0"
    ]
}
```

We're not limited to `/effect`, of course. If you want to use some other command, such as `/function` or `/particle`, go right ahead!

After this, we're finished in our server animation, and we'll head into the behavior file for our item for a quick addition.

## Item Behavior

To actually check if our item is equipped, we can use a Molang query that checks for item tags.

You can skip this section if:

- You want check for a vanilla item instead, such as an iron armor piece through the `minecraft:iron_tier` tag
- You want to check for the item via `query.is_item_name_any`, which checks for an item identifier in any slot

In our item's behavior, we'll have to add a tag to `components`. For example, if we wanted to add the `example:emerald_tier` tag, we would add the `tag:example:emerald_tier` component:

<CodeHeader>BP/items/my_item.json#components</CodeHeader>

```json
"tag:example:emerald_tier": {}
```

That's it, now your item has whatever tag you assigned it! You can add more tags if you want, but this is all we need for what we're doing.

## Player Behavior

Finally, we need to modify the player's behavior to run the server animation. We'll be working entirely within `description`.

First, we need to set a short name for our animation. If you have any experience with client animations, this process will be quite similar. Add `animations` to `description`, and set a short name, like such:

<CodeHeader>BP/entities/player.json#description</CodeHeader>

```json
{
    "identifier": "minecraft:player",
    "is_spawnable": false,
    "is_summonable": false,
    "is_experimental": false,
    "animations": {
        "emerald_armor": "animation.player.emerald_armor"
    }
}
```

Now with a short name set, we can run our animation.

Add `scripts` to `description`, and set a Molang query to run. To check for the item, we can use one of the following:

- `query.is_item_name_any`, to check for a given item identifier in any slot. This example will check for `example:totem_of_retreat` in either hand:
```
query.is_item_name_any('slot.weapon.mainhand',0,'example:totem_of_retreat') || query.is_item_name_any('slot.weapon.offhand',0,'example:totem_of_retreat')
```

- `query.equipped_item_any_tag`, to check for at least one of any given tag in a given slot. This example will allow an emerald- or phantom- tier armor piece to be used:
```
query.equipped_item_any_tag('slot.armor.head','example:emerald_tier','example:phantom_tier')
```

- `query.equipped_item_all_tags`, to check for all given tags in a given slot. This example will only allow an armor piece that's both emerald- and ancient- tier:
```
query.equipped_item_all_tags('slot.armor.head','example:ancient_tier','example:emerald_tier')
```

Let's take a look at an example using `query.equipped_item_any_tag`:

<CodeHeader>BP/entities/player.json#description</CodeHeader>

```json
{
    "identifier": "minecraft:player",
    "is_spawnable": false,
    "is_summonable": false,
    "is_experimental": false,
    "animations": {
        "emerald_armor": "animation.player.emerald_armor"
    },
    "scripts": {
        "animate": [
            {
                "emerald_armor": "query.equipped_item_any_tag('slot.armor.head','example:emerald_tier')"
            }
        ]
    }
}
```

This example will run a server animation with the `emerald_armor` short name if an emerald-tier item is equipped in the helmet slot. You can change the Molang field to match your item tag, use a different query, or add additional queries.

You can view a list of additional slot identifiers at the [Minecraft Wiki](https://minecraft.fandom.com/wiki/Commands/replaceitem#:~:text=Slot-,Slot%20Numbers,-Restrictions).

## Conclusion

With the server animation, player behavior, and item tag all set up, your equipped item can now run commands! This technique allows for greater item customization than being restricted to item components. If you want to add more to the effect or add-on, check the next section; otherwise, congratulations, you're finished!

## Additions

### Multiple Required Items

If you want to run a command when multiple of the armor set's pieces are equipped, we can expand our Molang from before:

<CodeHeader>BP/entities/player.json#scripts</CodeHeader>

```json
"animate": [
    {
        "emerald_armor": "query.equipped_item_any_tag('slot.armor.head','example:emerald_tier') && query.equipped_item_any_tag('slot.armor.chest','example:emerald_tier') && query.equipped_item_any_tag('slot.armor.legs','example:emerald_tier') && query.equipped_item_any_tag('slot.armor.feet','example:emerald_tier')"
    }
]
```

This example will check for emerald-tier armor in all four armor slots, and run the animation if they're all equipped.

### Further Conditions

The turtle shell doesn't always inflict Water Breathing, but instead only for 10 seconds when a player first enters water. If we want our emerald armor to only run our animation when we have lower health, we can add another query to our Molang:

<CodeHeader>BP/entities/player.json#scripts</CodeHeader>

```json
"animate": [
    {
        "emerald_armor": "query.equipped_item_any_tag('slot.armor.head','example:emerald_tier') && query.health <= 5"
    }
]
```

This example will run the animation with 2.5 hearts or less remaining, allowing players to make a quick getaway when they're in danger.

We can also apply this to requiring multiple armor pieces, with even longer Molang:

<CodeHeader>BP/entities/player.json#scripts</CodeHeader>

```json
{
    "animate": [
        {
            "emerald_armor": "query.equipped_item_any_tag('slot.armor.head','example:emerald_tier') && query.equipped_item_any_tag('slot.armor.chest','example:emerald_tier') && query.equipped_item_any_tag('slot.armor.legs','example:emerald_tier') && query.equipped_item_any_tag('slot.armor.feet','example:emerald_tier') && query.health <= 5"
        }
    ]
}
```

You can view a list of documented Molang queries at [bedrock.dev](https://bedrock.dev/docs/stable/Molang#List%20of%20Entity%20Queries).

### Multiple Items with Effects

If you want to add more items with unique effects, fret not; this is easily done. You can either create a new server animation file, or add on to the file from before, like such:

<CodeHeader>BP/animations/player.json</CodeHeader>

```json
{
    "format_version": "1.10.0",
    "animations": {
        "animation.player.emerald_armor": {
            "timeline": {
                "0.0": ["..."]
            },
            "animation_length": 0.05,
            "loop": true
        },
        "animation.player.phantom_armor": {
            "timeline": {
                "0.0": ["..."]
            },
            "animation_length": 0.05,
            "loop": true
        }
    }
}
```

In our player behavior, you'll have to add on to `animations` and `scripts` as well.

<CodeHeader>BP/entities/player.json#description</CodeHeader>

```json
{
    "identifier": "minecraft:player",
    "is_spawnable": false,
    "is_summonable": false,
    "is_experimental": false,
    "animations": {
        "emerald_armor": "animation.player.emerald_armor",
        "phantom_armor": "animation.player.phantom_armor"
    },
    "scripts": {
        "animate": [
            {
                "emerald_armor": "query.equipped_item_any_tag('slot.armor.head','example:emerald_tier')"
            },
            {
                "phantom_armor": "query.equipped_item_any_tag('slot.armor.head','example:phantom_tier')"
            }
        ]
    }
}
```
