---
title: Playsound
category: Commands
mention:
    - BedrockCommands
    - zheaEvyline
tags:
    - system
---

## Introduction

[Sourced By Bedrock Commands Community Discord](https://discord.gg/SYstTYx5G5)

Introduced in version `1.0.5`, you can use the `/playsound` command to play sound effects to players present anywhere in the world whenever you like.

## Syntax

`/playsound <sound> [player] [position] [volume] [pitch] [minimumVolume]`

## Definitions

- **` sound `** is the sound effect to start playing. You can find the list of sound effects currently available at:
https://www.digminecraft.com/lists/sound_list_pe.php

- **` player `** is optional. It refers to the player selectors  `@a`   `@r`  &  `@p` , you may also use their gamertag.

- **` position `** is optional. It refers to the  `x y z` position from where the sound will be played.

- **` volume `** is optional. It determines the size of the sphere in which the sound effect can be heard.  `0.0`  is the minimum size.  Sound & audible sphere size increases as value entered for `volume` increases.

- **` pitch `** is optional. It determines the pitch for the sound effect. It can be a value between  `0.0`  and  `256.0` . The higher the value, the higher the pitch. Values less than or equal to  `0.0`  makes the sound inaudible. Note that pitch affects the speed at which the audio is played. For example, a pitch of `0.5` would mean the audio is played at `0.5x` speed.

- **` minimumVolume `** is optional. It determines the minimum volume at which the sound will be heard outside of the audible sphere. It can be a value between  `0.0`  and  `1.0`

## Examples

<CodeHeader>mcfunction</CodeHeader>
```yaml
#Play a random explosion sound effect to closest player.
/playsound random.explode @p

#Play a random orb sound effect to all players at their relative position with a volume of 10000
/execute as @a at @s playsound random.orb @s ~ ~ ~ 10000
```

Note; since the playsound command is positonal, it is helpful to use an execute command structure as shown in the second example to prevent the sound effect from cutting off in special cases such as playing a sound effect following a `/tp` command. You may increase volume when covering large distances to reduce failures.
