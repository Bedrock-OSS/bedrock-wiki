---
title: Equipment-Based Commands
description: Run commands when certain items are equipped.
category: Tutorials
tags:
    - intermediate
mentions:
    - Chikorita-Lover
    - MedicalJewel105
    - Lufurrius
    - TheItsNameless
    - QuazChick
---

A common concept for add-ons is implementing new armor sets with unique effects, just like the turtle shell.
Items don't have a component for inflicting mob effects, emitting particles, etc. under certain conditions.
However, using the `hasitem` command selector or server animations, this can easily be done!

## Command Selector Method

The [`hasitem`](https://minecraft.wiki/w/Target_selectors#Selecting_targets_by_item) selector parameter can be used to target entities based on the items in their equipment slots.

You can view a list of additional slot identifiers at the [Minecraft Wiki](https://minecraft.wiki/w/Slot#Bedrock_Edition).

<CodeHeader>Target Selector</CodeHeader>

```c
@e[hasitem={item=wiki:custom_helmet,location=slot.armor.head}]
```

By using a function that is listed in the `tick.json` file, we can run commands using this selector every tick.

For example, to make a custom helmet give its wearer jump boost, the following function could be used:

<CodeHeader>RP/functions/wiki/custom_helmet_effects.mcfunction</CodeHeader>

```c
effect @e[hasitem={item=wiki:custom_helmet,location=slot.armor.head}] jump_boost 10
```

<CodeHeader>BP/functions/tick.json</CodeHeader>

```json
{
    "values": ["wiki/custom_helmet_effects"]
}
```

## Server Animation Method

Keep in mind that this requires modifying the player behavior, which is a common theme for many add-ons; thus, your add-on may not be compatible with others if you wish to do this.

The first step will be to create a server animation, which is a file that runs commands or events at certain keyframes. While client animations are in the resource pack, server animations are in the behavior pack. You can read a bit more [here](/entities/timers#animation-based-timers). We can start by using the following as a template:

<CodeHeader>BP/animations/player.json</CodeHeader>

```json
{
    "format_version": "1.10.0",
    "animations": {
        "animation.player.emerald_armor": {
            "animation_length": 0.05,
            "loop": true,
            "timeline": {
                "0.0": []
            }
        }
    }
}
```

Let's go over what's in this template and what everything does:

-   `animation.player.emerald_armor` is our animation's identifier; you can change this to something else, such as `animation.player.phantom_armor`.
-   `animation_length` is how long the animation lasts; we'll use 0.05 seconds, as that's the length of an in-game tick.
-   `loop` is quite straight-forward; setting it to true makes the animation loop.
-   `timeline` runs commands and events at given keyframes.

We can add commands to the `0.0` array in our timeline to execute, such as an `/effect` command, like such:

```json
{
    "0.0": ["/effect @s speed 1 0"]
}
```

We're not limited to `/effect`, of course. If you want to use some other command, such as `/function` or `/particle`, go right ahead!

After this, we're finished in our server animation, and we'll head into the behavior file for our item for a quick addition.

### Applying Item Tags

To actually check if our item is equipped, we can use a Molang query that checks for item tags.

You can skip this section if:

-   You want check for a vanilla item instead, such as an iron armor piece through the `minecraft:iron_tier` tag
-   You want to check for the item via `q.is_item_name_any`, which checks for an item identifier in any slot

In our item's behavior, we'll have to add a tag.
For example, if we wanted to add the `wiki:emerald_tier` tag, we would add the following to the tags component:

<CodeHeader>minecraft:item > components</CodeHeader>

```json
"minecraft:tags": {
    "tags": ["wiki:emerald_tier"]
}
```

That's it, now your item has whatever tag you assigned it! You can add more tags if you want, but this is all we need for what we're doing.

### Player Behavior

Finally, we need to modify the player's behavior to run the server animation. We'll be working entirely within `description`.

First, we need to set a short name for our animation. If you have any experience with client animations, this process will be quite similar. Add `animations` to `description`, and set a short name, like such:

<CodeHeader>BP/entities/player.json > minecraft:entity > description</CodeHeader>

```json
{
    "identifier": "minecraft:player",
    "spawn_category": "creature",
    "is_spawnable": false,
    "is_summonable": false,
    "animations": {
        "emerald_armor": "animation.player.emerald_armor"
    }
}
```

Now with a short name set, we can run our animation.

Add `scripts` to `description`, and set a Molang query to run. To check for the item, we can use one of the following:

-   `q.is_item_name_any`, to check for a given item identifier in any slot. This example will check for `wiki:totem_of_retreat` in either hand:

```molang
q.is_item_name_any('slot.weapon.mainhand', 'wiki:totem_of_retreat') || q.is_item_name_any('slot.weapon.offhand', 'wiki:totem_of_retreat')
```

-   `q.equipped_item_any_tag`, to check for at least one of any given tag in a given slot. This example will allow an emerald- or phantom- tier armor piece to be used:

```molang
q.equipped_item_any_tag('slot.armor.head', 'wiki:emerald_tier', 'wiki:phantom_tier')
```

-   `q.equipped_item_all_tags`, to check for all given tags in a given slot. This example will only allow an armor piece that's both emerald- and ancient- tier:

```molang
q.equipped_item_all_tags('slot.armor.head', 'wiki:ancient_tier', 'wiki:emerald_tier')
```

Let's take a look at an example using `q.equipped_item_any_tag`:

<CodeHeader>BP/entities/player.json > minecraft:entity > description</CodeHeader>

```json
{
    "identifier": "minecraft:player",
    "spawn_category": "creature",
    "is_spawnable": false,
    "is_summonable": false,
    "animations": {
        "emerald_armor": "animation.player.emerald_armor"
    },
    "scripts": {
        "animate": [
            {
                "emerald_armor": "q.equipped_item_any_tag('slot.armor.head', 'wiki:emerald_tier')"
            }
        ]
    }
}
```

This example will run a server animation with the `emerald_armor` short name if an emerald-tier item is equipped in the helmet slot. You can change the Molang field to match your item tag, use a different query, or add additional queries.

You can view a list of additional slot identifiers at the [Minecraft Wiki](https://minecraft.wiki/w/Slot#Bedrock_Edition).

### Conclusion

With the server animation, player behavior, and item tag all set up, your equipped item can now run commands! This technique allows for greater item customization than being restricted to item components. If you want to add more to the effect or add-on, check the next section; otherwise, congratulations, you're finished!

### Additions

#### Multiple Required Items

If you want to run a command when multiple of the armor set's pieces are equipped, we can expand our Molang from before:

<CodeHeader>BP/entities/player.json > minecraft:entity > description > scripts</CodeHeader>

```json
"animate": [
    {
        "emerald_armor": "q.equipped_item_any_tag('slot.armor.head', 'wiki:emerald_tier') && q.equipped_item_any_tag('slot.armor.chest', 'wiki:emerald_tier') && q.equipped_item_any_tag('slot.armor.legs', 'wiki:emerald_tier') && q.equipped_item_any_tag('slot.armor.feet', 'wiki:emerald_tier')"
    }
]
```

This example will check for emerald-tier armor in all four armor slots, and run the animation if they're all equipped.

#### Further Conditions

The turtle shell doesn't always inflict Water Breathing, but instead only for 10 seconds when a player first enters water. If we want our emerald armor to only run our animation when we have lower health, we can add another query to our Molang:

<CodeHeader>BP/entities/player.json > minecraft:entity > description > scripts</CodeHeader>

```json
"animate": [
    {
        "emerald_armor": "q.equipped_item_any_tag('slot.armor.head', 'wiki:emerald_tier') && q.health <= 5"
    }
]
```

This example will run the animation with 2.5 hearts or less remaining, allowing players to make a quick getaway when they're in danger.

We can also apply this to requiring multiple armor pieces, with even longer Molang:

<CodeHeader>BP/entities/player.json > minecraft:entity > description > scripts</CodeHeader>

```json
{
    "animate": [
        {
            "emerald_armor": "q.equipped_item_any_tag('slot.armor.head', 'wiki:emerald_tier') && q.equipped_item_any_tag('slot.armor.chest', 'wiki:emerald_tier') && q.equipped_item_any_tag('slot.armor.legs', 'wiki:emerald_tier') && q.equipped_item_any_tag('slot.armor.feet', 'wiki:emerald_tier') && q.health <= 5"
        }
    ]
}
```

You can view a list of documented Molang queries at [bedrock.dev](https://bedrock.dev/docs/stable/Molang#List%20of%20Entity%20Queries).

#### Multiple Items with Effects

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

<CodeHeader>BP/entities/player.json > minecraft:entity > description</CodeHeader>

```json
{
    "identifier": "minecraft:player",
    "spawn_category": "creature",
    "is_spawnable": false,
    "is_summonable": false,
    "animations": {
        "emerald_armor": "animation.player.emerald_armor",
        "phantom_armor": "animation.player.phantom_armor"
    },
    "scripts": {
        "animate": [
            {
                "emerald_armor": "q.equipped_item_any_tag('slot.armor.head', 'wiki:emerald_tier')"
            },
            {
                "phantom_armor": "q.equipped_item_any_tag('slot.armor.head', 'wiki:phantom_tier')"
            }
        ]
    }
}
```
