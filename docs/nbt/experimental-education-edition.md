---
title: Enable experiments by editing NBT
description: Enable experimental features in existing world by editing level.dat file. (Works on Minecraft Education and Bedrock Dedicated Servers)
category: Tutorials
mentions:
    - Fabrimat
    - TheItsNameless
    - QuazChick
    - roman-emerald
tags:
    - easy
    - guide
---

[structure]: /assets/images/nbt/structure.png
[int]: /assets/images/nbt/int.png
[list]: /assets/images/nbt/list.png
[compound]: /assets/images/nbt/compound.png
[string]: /assets/images/nbt/string.png
[byte]: /assets/images/nbt/byte.png

To enable experiments on an existing world, you can just use world settings in the game itself.

But on Minecraft Education and Bedrock Dedicated Server it appears to not be possible through the GUI or settings. Here's how you can manually enable experiments by editing `level.dat` file.

:::info
Minecraft Education is a variant of Bedrock Edition with some different features and limitations.
For security reasons it doesn't allow you to enable experimental features from the game.
:::



## Editing NBT

::: warning
Always make a backup of your data before editing NBT files!

Experimental features may not be compatible with every device and can cause your world to behave in unexpected way.
:::

1. Find your world folder (located in `com.mojang`) or extract your `.mcworld`, `.mctemplate`
2. Open the `level.dat` file with an NBT editor (NBT Studio for example)
3. Select the first node, which is ![][structure] `level.dat`
4. Create a new compound tag called ![][compound] `experiments` (If it doesn't already exist)
5. Select the new node and create a new ![][byte] byte tag(s), with the value of 1 and with the name of the feature you need (see next section!)
6. Finally, save the file and put it back in the world package or directory

## Experimental features names

### 1.21.101

#### Gameplay features

| Feature Name (In-game)               | Feature name (NBT)             |
| ------------------------------------ | ------------------------------ |
| Villager Trade Rebalancing           | `villager_trades_rebalance`    |
| Drop 3 2025                          | `y_2025_drop_3`                |

#### Add-On Creators features

| Feature Name (In-game)               | Feature name (NBT)             |
| ------------------------------------ | ------------------------------ |
| Custom biomes                        | `data_driven_biomes`           |
| Upcoming Creator Features            | `upcoming_creator_features`    |
| Beta APIs                            | `gametest`                     |
| Experimental Creator Camera Features | `experimental_creator_cameras` |
| Data-Driven Jigsaw Structures        | `jigsaw_structures`            |
| Custom biomes                        | `data_driven_biomes`           |


### 1.21.90
- `deferred_technical_preview`
- ...

:::tip
Minecraft Education is usually one or two versions behind the classic Bedrock Edition, so you'll always know in advance which experimental features will be added to the stable gameplay and which will be modified or removed.
Try to add only features that will persist over time if you want to use that world in your classroom.
:::

## Gallery

*(Add Byte Tag window)*

![](/assets/images/nbt/experiments-education-edition/byte-add-new.png)

*(Below is, how your `experiments` compound structure might look like)*

![](/assets/images/nbt/experiments-education-edition/experiments-file.png)

## Other tags

There are `experiments_ever_used` and `saved_with_toggled_experiments` byte tags,
that appear automatically after the world is loaded with experiments enabled.


## Disabling experiments

:::warning
This is not officially supported. Backup your world!
:::

If you want to disable experiments, you can do so by removing its ![][byte] byte tag(s) from the ![][compound] `experiments` compound.

But this might lead to unintended consequences:
- No known yet.

