---
title: Block Sounds
description: Learn how to modify the sounds that blocks play after actions such as placement.
category: Documentation
related:
    - /blocks/vanilla-block-sounds
license: true
mentions:
    - MedicalJewel105
    - TheItsNameless
    - QuazChick
---

## Applying Sounds

The `sound` parameter in `RP/blocks.json` is used to determine general block sounds, such as the mining sound, step on sound, breaking sound, and placement sound.

You can apply a set of sounds to your block using this parameter:

<CodeHeader>RP/blocks.json</CodeHeader>

```json
{
    "format_version": "1.21.40",
    "wiki:chestnut_log": {
        "sound": "wood" // Define sound here
    }
}
```

You can find a list of vanilla sound types [here](/blocks/vanilla-block-sounds).

## Adding Custom Sounds

Giving your custom block its own set of sounds can help your block feel unique.

First, let's choose a name for the custom block sounds.
We **strongly** recommend giving this identifier a namespace to avoid incompatibilities with other add-ons.

For example, let's imagine we were creating a custom chestnut woodset; we would name the custom block sound `wiki:chestnut_wood`.
This is the `sound` value that should be used in `RP/blocks.json`.

<CodeHeader>RP/blocks.json</CodeHeader>

```json
{
    "format_version": "1.21.40",
    "wiki:chestnut_log": {
        "sound": "wiki:chestnut_wood"
    }
}
```

### Base Block Sounds

-   `break` is triggered when the block is broken.
-   `hit` is triggered when the block is hit, such as when being mined by a player.
-   `place` is triggered when the block is placed by a player.

<CodeHeader>RP/sounds.json</CodeHeader>

```json
{
    "block_sounds": {
        "wiki:chestnut_wood": {
            "pitch": 1,
            "volume": 1,
            "events": {
                "break": "block.chestnut_wood.break", // Sound shortname from "RP/sounds/sound_definitions.json"
                "hit": "block.chestnut_wood.hit",
                "place": "block.chestnut_wood.place"
            }
        }
    }
}
```

### Interactive Block Sounds

The following sound events can be defined in the `interactive_sounds` section of `RP/sounds.json`.

-   `fall` is triggered when an entity falls onto the block from more than 3 blocks above.
-   `jump` is triggered when a player jumps off the block.
-   `land` is triggered when an entity falls onto the block from up to 3 blocks above.
-   `step` is triggered when an entity moves on top of the block.

<CodeHeader>RP/sounds.json</CodeHeader>

```json
{
    "block_sounds": {
        "wiki:chestnut_wood": {
            ...
        }
    },
    "interactive_sounds": {
        "block_sounds": {
            "wiki:chestnut_wood": {
                "pitch": 1,
                "volume": 1,
                "events": {
                    "fall": "block.chestnut_wood.fall",
                    "jump": "block.chestnut_wood.jump",
                    "step": "block.chestnut_wood.step",
                    "land": "block.chestnut_wood.land"
                }
            }
        }
    }
}
```
