---
title: Playsound
category: Commands
mentions:
    - BedrockCommands
    - zheaEvyline
    - jordanparki7
---

## Introduction

[Sourced By Bedrock Commands Community Discord](https://discord.gg/SYstTYx5G5)

You can use the `/playsound` command to play sound effects to players present anywhere in the world whenever you like.

## Syntax

`/playsound <sound> [player] [position] [volume] [pitch] [minimumVolume]`

## Definitions

### Sound

- It is the sound effect you wish to play.
- You can find the list of sound IDs currently available at:
    - https://www.digminecraft.com/lists/sound_list_pe.php

### Player

- This is an optional argument.
- It refers to your typical target selectors (whom you want to play the sound to) ` @a `, ` @r `, ` @p `, ` Technoblade `, etc..

### Position

- This is an optional argument.
- It refers to the  `x y z` position from where the sound will be played, ie. the center of the playsound radius.

### Volume

- This is an optional argument.
- It determines the size of the sphere in which the sound effect can be heard.
    - ` 0.0 ` is the minimum size.
- Sound & audible sphere size increases as `volume` value is increased.
    - Playaound volume of `1` is equal to an audible sphere of radius 16 blocks.
    - Similarly; volume of `4` would be equal to 64 blocks.

### Pitch

- This is an optional aegument.
- It determines the pitch for the sound effect.
- It can be a value between ` 0.0 ` and ` 256.0 `
    - The higher the value, the higher the pitch.
    - Values less than or equal to  `0.0`  makes the sound inaudible.

> Note: pitch affects the speed at which the audio is played. For example, a pitch of `0.5` would mean the audio is played at ` 0.5× ` speed.

### Minimum Volume

- This is an optional argument.
- It determines the minimum volume at which the sound will be heard outside of the audible sphere.
- It can be a value between ` 0.0 ` and ` 1.0 `

## Examples

<CodeHeader>mcfunction</CodeHeader>
```yaml
#Play a random explosion sound effect to closest player.
/playsound random.explode @p

#Play a random orb sound effect to all players at their relative position with a volume of 10000
/execute as @a at @s playsound random.orb @s ~ ~ ~ 10000
```

Note: since the playsound command is positonal, it is helpful to use an execute command structure as shown in the second example to prevent the sound effect from cutting off in special cases such as playing a sound effect following a `/tp` command. You may increase volume when covering large distances to reduce failures.


**(Recommended) Read Next: [Sounds](/concepts/sounds)**
