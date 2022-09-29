---
title: Experiments in Education Edition
category: Tutorials
mention:
    - Fabrimat
tags:
    - easy
---

[structure]: /assets/images/nbt/structure.png
[int]: /assets/images/nbt/int.png
[list]: /assets/images/nbt/list.png
[compound]: /assets/images/nbt/compound.png
[string]: /assets/images/nbt/string.png
[byte]: /assets/images/nbt/byte.png

Education Edition is a variant of Bedrock Edition with some different features and limitations.
For security reasons it doesn't allow you to enable Experimental Features from the game.

## Editing NBT

::: warning
Always make a backup of your data before editing NBT files!
:::

1. Extract the level.dat from your .mcworld, .mctemplate or com.mojang world folder.
2. Open the file with NBT editor (NBT Studio for example).
3. Select on the first node which is ![][structure] level.dat
4. Create a new compound tag called ![][compound] experiments
5. Select the new node and create a new ![][byte] byte with the name of the feature you need with a value of 1, which on 1.18.31 are:
    - data_driven_biomes
    - data_driven_items
    - experimental_molang_features
    - gametest
    - spectator_mode
    - upcoming_creator_features
    - vanilla_experiments
    - wild_update

![](/assets/images/nbt/experiments-education-edition/byte-add.png)

Finally, save the file and put it back in the world package or directory.

![](/assets/images/nbt/experiments-education-edition/experiments-file.png)