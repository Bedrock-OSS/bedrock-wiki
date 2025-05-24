---
title: Experiments in Minecraft Education
description: Enable experimental features in Minecraft Education.
category: Tutorials
mentions:
    - Fabrimat
    - TheItsNameless
    - QuazChick
tags:
    - easy
---

[structure]: /assets/images/nbt/structure.png
[int]: /assets/images/nbt/int.png
[list]: /assets/images/nbt/list.png
[compound]: /assets/images/nbt/compound.png
[string]: /assets/images/nbt/string.png
[byte]: /assets/images/nbt/byte.png

Minecraft Education is a variant of Bedrock Edition with some different features and limitations.
For security reasons it doesn't allow you to enable experimental features from the game.

## Editing NBT

::: warning
Always make a backup of your data before editing NBT files!

Experimental features may not be compatible with every device and can cause your world to behave in unexpected way.
:::

1. Extract the `level.dat` file from your `.mcworld`, `.mctemplate` or `com.mojang` world folder.
2. Open the file with an NBT editor (NBT Studio for example).
3. Select on the first node which is ![][structure] `level.dat`
4. Create a new compound tag called ![][compound] `experiments`
5. Select the new node and create a new ![][byte] byte with the name of the feature you need with a value of 1, which on 1.21.90 are:
    - `data_driven_biomes`
    - `deferred_technical_preview`
    - `experimental_creator_cameras`
    - `gametest`
    - `jigsaw_structures`
    - `upcoming_creator_features`
    - `villager_trades_rebalance`

![](/assets/images/nbt/experiments-education-edition/byte-add.png)

![](/assets/images/nbt/experiments-education-edition/experiments-file.png)

Finally, save the file and put it back in the world package or directory.

## Tips
Minecraft Education is usually one or two versions behind the classic Bedrock Edition, so you'll always know in advance which experimental features will be added to the stable gameplay and which will be modified or removed.
Try to add only features that will persist over time if you want to use that world in your classroom.
