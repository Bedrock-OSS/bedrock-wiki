---
title: Coordinate System
category: General
mention:
 - MedicalJewel105
---

## The Coordinate System
Minecraft stores the locations of blocks and entities in the world using a system of three-dimensional coordinates, each representing a value in a one-dimensional axis. They are stored in the format of X, then Y, and lastly Z. Whether you are placing structures and blocks, or teleporting and summoning entities, you can, and are sometimes required to, put in coordinates. They don't need to always be real values however; you can substitute world coordinates for relative values, either based in world space or local space.

![image](https://user-images.githubusercontent.com/64864915/134789891-85644dd7-e30f-4e02-966c-df2bf17a7879.png)

_You may already be familiar with coordinates if you've enabled the Show Coordinates world option!_

## Relative Coordinates (~)
Relative coordinates are represented using tildes in place of real coordinates, and represent a position that is relative to the world coordinates its located at. You may insert numbers after a tilde to add an offset to the current position. These can be mixed with world coordinates, but cannot be mixed with local coordinates.
Examples:
  - ``~ ~ ~``: Current position with no changes.
  - ``~5 ~-2 ~``: Current position with a 5-block X offset and a negative 2-block Y offset.

## Local Coordinates (^)
Local coordinates are similar to relative coordinates, but represent a position in local space, where the axes are based off of rotation. They take the form ``^left ^up ^forward``; you can think of this as ~x ~y ~z if your rotation is 0 (facing straight ahead, due south).

Like relative coordinates, you can insert numbers to produce an offset of the current position, in local space. If there is no entity to copy rotation from, the x- and y-rotations are assumed to be 0.
Examples:
  - ``^10 ^ ^``: Current position with a 10-block offset to the left.
  - ``^ ^1.62 ^1``: Current position with a 1.62-block offset upward and a 1-block offset forward.
