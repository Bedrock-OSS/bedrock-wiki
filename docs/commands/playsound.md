---
title: Playsound
category: Commands
mentions:
    - BedrockCommands
    - zheaEvyline
    - jordanparki7
description: Understanding /playsound command.
---

## Introduction

[Sourced by the Bedrock Commands Community (BCC) Discord](https://bedrockcommands.org/)

You can use the `/playsound` command to play sound effects to players present anywhere in your world.

## Syntax

`/playsound <sound> [player] [position] [volume] [pitch] [minimumVolume]`

## Definitions

### Sound

- It is the sound effect you wish to play.
- You can find the list of Sound Effect IDs currently available at:
    - https://www.digminecraft.com/lists/sound_list_pe.php

### Player

- This is an optional argument.
- It refers to your typical target selectors (whom you want to play the sound to) ` @a `, ` @r `, etc. However, the `@e` selector without the `type=player` argument is not applicable.

### Position

- This is an optional argument.
- It refers to the  `x y z` position from where the sound will be played, Thus will be the center of the playsound radius.

### Volume

- This is an optional argument.
- It determines the size of the sphere in which the sound effect can be heard.
    - ` 0.0 ` is the minimum size.
- The audible sphere size will increase as the `volume` value is increased.
    - Playsound volume of `1` is equal to an audible sphere of radius 16 blocks.
    - Similarly, volume of `4` will be equal to 64 blocks.

### Pitch

- This is an optional argument.
- It determines the pitch for the sound effect.
- It can be a value between ` 0.0 ` and ` 256.0 `
    - The higher the value, the higher the pitch.
    - Values less than or equal to  `0.0`  makes the sound inaudible.

> Note: Pitch affects the speed at which the sound effect is played. For example, a pitch of `0.5` would mean the sound effect is played at ` 0.5× ` speed.

### Minimum Volume

- This is an optional argument.
- It determines the minimum volume at which the sound will be heard outside of the audible sphere.
- It can be a value between ` 0.0 ` and ` 1.0 `

## Examples

```yaml
# Play a random explosion sound effect to closest player
/playsound random.explode @p

# Play a random orb sound effect to all players at their position with a volume of 10000
/execute as @a at @s playsound random.orb @s ~ ~ ~ 10000
```

Note: Since the `/playsound` command is positonal, it is helpful to play the sound effect at their position with a large volume like shown in the second example above. This prevents the sound effect from cutting off in certian situations, such as after teleporting to a far away distance.


**(Recommended) Read Next: [Sounds](/concepts/sounds)**

