---
title: Enabling Experiments by Editing NBT
description: Learn how to enable experimental features in existing world by editing the level.dat file. This is useful when working with Minecraft Education and Bedrock Dedicated Servers.
category: Tutorials
tags:
    - intermediate
mentions:
    - Fabrimat
    - TheItsNameless
    - QuazChick
    - roman-emerald
---

[structure]: /assets/images/nbt/structure.png
[int]: /assets/images/nbt/int.png
[list]: /assets/images/nbt/list.png
[compound]: /assets/images/nbt/compound.png
[string]: /assets/images/nbt/string.png
[byte]: /assets/images/nbt/byte.png

To enable experiments on an existing world, you can just use world settings in the game itself.
However, on Minecraft Education and Bedrock Dedicated Servers it is not possible through the GUI or settings.

Here's how you can manually enable experiments by editing the world's `level.dat` file.

:::info
Minecraft Education is a variant of Bedrock Edition with some different features and limitations.
For security reasons it doesn't allow you to enable experimental features from the game.
:::

## Editing NBT

:::warning BACKUPS
Always make a backup of your data before editing NBT files!

Experimental features may not be compatible with every device and can cause your world to behave in unexpected way.
:::

1. Find your world folder (located in `com.mojang`) or extract your `.mcworld`, `.mctemplate`
2. Open the `level.dat` file with an NBT editor (NBT Studio for example)
3. Select the first node, which is ![][structure] `level.dat`
4. Create a new compound tag called ![][compound] `experiments` (if it doesn't already exist)
5. Select the new node and create a new ![][byte] byte tag, with the value of 1 and with the name of the feature you need (see next section!)
6. Finally, save the file and put it back in the world package or directory

## Experimental Features

### Preview Only

#### Add-On Creators

| Feature Name (In-Game)               | Feature Name (NBT)             |
| ------------------------------------ | ------------------------------ |
| Render Dragon Features for Creators  | `deferred_technical_preview`   |

### 1.21.110

#### Gameplay

| Feature Name (In-Game)               | Feature Name (NBT)             |
| ------------------------------------ | ------------------------------ |
| Villager Trade Rebalancing           | `villager_trades_rebalance`    |

#### Add-On Creators

| Feature Name (In-Game)               | Feature Name (NBT)             |
| ------------------------------------ | ------------------------------ |
| Upcoming Creator Features            | `upcoming_creator_features`    |
| Beta APIs                            | `gametest`                     |
| Experimental Creator Camera Features | `experimental_creator_cameras` |
| Data-Driven Jigsaw Structures        | `jigsaw_structures`            |

### 1.21.100

#### Gameplay

| Feature Name (In-Game)               | Feature Name (NBT)             |
| ------------------------------------ | ------------------------------ |
| Villager Trade Rebalancing           | `villager_trades_rebalance`    |
| Drop 3 2025                          | `y_2025_drop_3`                |

#### Add-On Creators

| Feature Name (In-Game)               | Feature Name (NBT)             |
| ------------------------------------ | ------------------------------ |
| Custom biomes                        | `data_driven_biomes`           |
| Upcoming Creator Features            | `upcoming_creator_features`    |
| Beta APIs                            | `gametest`                     |
| Experimental Creator Camera Features | `experimental_creator_cameras` |
| Data-Driven Jigsaw Structures        | `jigsaw_structures`            |

:::tip
Minecraft Education is usually one or two versions behind the classic Bedrock Edition, so you'll always know in advance which experimental features will be added to the stable gameplay and which will be modified or removed.
Try to add only features that will persist over time if you want to use that world in your classroom.
:::

## Gallery

*(Add Byte Tag window)*

![](/assets/images/nbt/experiments-education-edition/byte-add-new.png)

*(Below is, how your `experiments` compound structure might look like)*

![](/assets/images/nbt/experiments-education-edition/experiments-file.png)

## Additional Tags

There are `experiments_ever_used` and `saved_with_toggled_experiments` byte tags,
that appear automatically after the world is loaded with experiments enabled.

## Disabling Experiments

:::danger UNSUPPORTED
This is not officially supported and might lead to unintended consequences.
For example, a world containing experimental blocks will have those blocks turn into "unknown" blocks.
Backup your world!
:::

If you want to disable experiments, you can do so by removing its ![][byte] byte tag(s) from the ![][compound] `experiments` compound.
