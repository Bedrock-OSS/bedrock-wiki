---
title: Extending Structure Limits
category: Tutorials
mentions:
    - MedicalJewel105
tags:
    - easy
---

[structure]: /assets/images/nbt/structure.png
[int]: /assets/images/nbt/int.png
[list]: /assets/images/nbt/list.png
[compound]: /assets/images/nbt/compound.png
[string]: /assets/images/nbt/string.png

By default, Minecraft doesn't allow you to save structures that are more than 64x255x64 in size.
In this guide you will learn how to extend structure box size for structure blocks.

## Editing NBT

1. Put a structure block into structure and export it.
2. Open your structure with NBT editor (NBT Studio in our case) and find your structure block.

If the only block you have in your structure is structure block, you will find its data here:

![][structure] extending_structure_block.mcstructure
> ![][compound] structure
> > ![][compound] palette
> > > ![][compound] default
> > > > ![][compound] block_position_data
> > > > > ![][compound] 0

![](/assets/images/nbt/structure-limits/nbt-screenshot-1.png)

3. Set `xStructureSize`, `yStructureSize` and `zStructureSize` values to what you want.
4. Save the structure and load it in game.

![](/assets/images/nbt/structure-limits/result.png)

## Tips

You can get this structure block to your inventory by pressing mouse scroll button while holding Ctrl.
It is recommended to use structure loading animations (Place by Block) when loading a huge structure. This will minimize lags.
