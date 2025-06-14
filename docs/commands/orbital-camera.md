---
title: Orbital Camera
category: Techniques
mentions:
  - BedrockCommands
  - zheaEvyline
description: This technique allows you to confine your camera rotations to an orbit around the player, an entity, or position, with the height and radius of the orbit being fully adjustable.
---

## Introduction

[Sourced by the Bedrock Commands Community (BCC) Discord](https://bedrockcommands.org/)

This technique allows you to confine your camera rotations to an orbit around the player, an entity, or position, with the height and radius of the orbit being fully adjustable.

## Video Demonstration

<YouTubeEmbed
    id="yOlWjTpInFE"
/>

## Command

<CodeHeader>BP/functions/wiki/camera/orbital.mcfunction</CodeHeader>

```yaml
execute as @p at @s anchored eyes rotated ~ 0 positioned ^^1^-2 run camera @s set minecraft:free ease 0.1 linear pos ~~~ facing @s
```
![One Repeating Command Block](/assets/images/commands/command-block-chain/1.png)

**2D Visualisation:**

![Orbital Camera 2D Visualisation](/assets/images/commands/orbital-camera/2d-visualisation.gif)

**Command Breakdown:**

- `as @p`
  - sets the execution target to closest player.
- `at @s`
  - sets the execution position to the target player's self.
- `anchored eyes`
  - brings the execution position up to the target player's eye level.
- `rotated ~ 0`
  - sets the execution rotation relative to the target player's horizontal rotation but confines the vertical rotation to 0° (straight).
  - if you wish to lock the horizontal rotation instead, simply do: `rotated 0 ~`
     - note: value `0` can be changed to face the direction you need. Refer to [Rotations](/commands/selectors#rotation) for more info.
  - if you do not wish to lock the vertical rotation, simply omit this part altogether to get a full spherical rotation. However, this will not prevent the camera from going underground.
- `positioned ^^1^-2`
  - pushes the execution position 1 block above the player and 2 blocks behind.
  - increase or decrease value 1 to increase / decrease orbit height.
  - increase or decrease value -2 to increase / decrease orbit radius.
     - Negative value will set the position behind the player.
     - Positive value will set the position in front of the player.
     - To learn more, refer to: [Coordinates System](/commands/relative-coordinates)
- `run camera @s set minecraft:free ease 0.1 linear pos ~~~`
  - sets the camera for the target player with the `minecraft:free` preset with a `linear` ease value of `0.1` at relative coordinates (1 block above and 2 blocks behind from the target player's sight)
  - To adjust camera movement speed increase / decrease ease value `0.1`
  - To learn about the `/camera` command and it's available options such as presets and ease, refer to the following resources:
     - [Introduction to Camera Command](https://learn.microsoft.com/en-us/minecraft/creator/documents/cameracommandintroduction)
     - [Camera Command Video Tutorial](https://youtu.be/GnYrZlBCyWg)
- `facing @s`
  - shifts the camera view direction to face the target player's self.

**Similar Examples:**

<CodeHeader>BP/functions/wiki/camera/orbital.mcfunction</CodeHeader>

```yaml
# To orbit camera around entity tagged with 'wiki:orbital_camera.focus'
execute as @p at @e[tag=wiki:orbital_camera.focus] anchored eyes rotated as @s rotated ~ 0 positioned ^^1^-5 run camera @s set minecraft:free ease 0.1 linear pos ~~~ facing @e[tag=wiki:orbital_camera.focus]
```
![One Repeating Command Block](/assets/images/commands/command-block-chain/1.png)

<CodeHeader>BP/functions/wiki/camera/orbital.mcfunction</CodeHeader>

```yaml
# To orbit camera around position 6 7 8
execute as @p positioned 6 7 8 rotated as @s rotated ~ 0 positioned ^^1^-5 run camera @s set minecraft:free ease 0.1 linear pos ~~~ facing 6 7 8
```
![One Repeating Command Block](/assets/images/commands/command-block-chain/1.png)
