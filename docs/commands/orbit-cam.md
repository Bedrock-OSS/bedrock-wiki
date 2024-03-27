---
title: Orbital Camera
category: Techniques
mention:
    - BedrockCommands
    - zheaEvyline
---

## Introduction

[Sourced By Bedrock Commands Community Discord](https://discord.gg/SYstTYx5G5)

This technique allows you to confine your camera rotations to an orbit around the player, an entity or position with the height and radius of the orbit being fully adjustable.

## Video Demonstration

<YouTubeEmbed
    id="yOlWjTpInFE"
/>

## Command

<CodeHeader>mcfunction</CodeHeader>

```yaml
/execute as @p at @s anchored eyes rotated ~ 0 positioned ^^1^-2 run camera @s set minecraft:free ease 0.1 linear pos ~~~ facing @s
```
![commandBlockChain1](/assets/images/commands/commandBlockChain/1.png)

**2D Visualisation:**

![OrbitCamVisualRep](/assets/images/commands/orbitcam/OrbitCamVisualRep.gif)

**Command Breakdown:**

- `as @p`
  - sets the execution target to closest player.
- `at @s`
  - sets the execution position to the target player.
- `anchored eyes`
  - brings the execution position up to the target player's eye level.
- `rotated ~ 0`
  - sets the execution rotation relative to the target player's horizontal rotation but confines the vertical rotation to 0° (straight).
- `positioned ^^1^-2`
  - pushes the execution position 1 block above the player and 2 blocks behind.
  - increase or decrease value 1 to increase / decrease orbit height.
  - increase or decrease value -2 to increase / decrease orbit radius.
     - Negative value will set the position behind the player.
     - Positive value will set the position in front of the player.
     - To learn more, refer to: [Coordinates System](docs/commands/relative-coordinates.md)
- `run camera @s set minecraft:free ease 0.1 linear pos ~~~`
  - sets the camera for the target player with the `minecraft:free` preset with a `linear` ease value of `0.1` at relative coordinates (1 block above and 2 blocks behind from the target player's sight)
  - To adjust camera movement speed increase / decrease ease value `0.1`
  - To learn about the `/camera` command and it's available options such as presets and ease, refer to the following resources:
     - [Introduction to Camera Command](https://learn.microsoft.com/en-us/minecraft/creator/documents/cameracommandintroduction)
     - [Camera Command Video Tutorial](https://youtu.be/GnYrZlBCyWg)
- `facing @s`
  - shifts the camera view direction to face the target player.

**Other Examples:**

<CodeHeader>mcfunction</CodeHeader>

```yaml
#To orbit camera around entity tagged with 'orbit_center'
/execute as @p at @e [tag=orbit_center] anchored eyes rotated as @s rotated ~ 0 positioned ^^1^-5 run camera @s set minecraft:free ease 0.1 linear pos ~~~ facing @e [tag=orbit_center]
```
![commandBlockChain1](/assets/images/commands/commandBlockChain/1.png)

<CodeHeader>mcfunction</CodeHeader>

```yaml
#To orbit camera around position 6 7 8
/execute as @p positioned 6 7 8 rotated as @s rotated ~ 0 positioned ^^1^-5 run camera @s set minecraft:free ease 0.1 linear pos ~~~ facing 6 7 8
```
![commandBlockChain1](/assets/images/commands/commandBlockChain/1.png)
