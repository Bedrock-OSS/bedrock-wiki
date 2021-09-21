---
title: Relative Coordinates

mention:
 - MedicalJewel105
---

## ~ Relative Coordinates

`~` coordinate offsets work simply: they execute commands at current position of entity/block who ran this command or at position of entity on which `execute` command were used.
~<x+/x-> ~<y+/y-> ~<z+/z->

## ^ Relative Coordinates

`^` coordinate offsets detect entity's view angles and execute command there. 
^<left/right> ^<up/down> ^<forward/backward>
Usually you want to offset it a bit upwards, due to camera being 1.7 blocks higher than player's feet.
You might also need to teleport player at his own coordinates facing for example `~90 ~~` to set block correctly.
So `setblock ^-2^1^3 diamond_block` will work like this:

![](/assets/images/commands/relative-coordinates/command-result.png)

## Space in Commands

It doesn't matter if you add ` ` between them or not. Both work same: `fill ~1 ~1 ~1 ~-1 ~-1 ~-1 diamond_block` and `fill ~1~1~1~-1~-1~-1 diamond_block`. First command can be just easier to read.