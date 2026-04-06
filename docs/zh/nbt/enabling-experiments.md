---
title: 通过编辑 NBT 启用实验性功能
description: 了解如何通过编辑 level.dat 文件在现有世界中启用实验性功能。这在处理 Minecraft 教育版和基岩版专用服务器时很有用。
category: 教程
tags:
    - intermediate
mentions:
    - Fabrimat
    - TheItsNameless
    - QuazChick
    - romanemerald
---

[strUCTURE]: /assets/images/nbt/structure.png
[int]: /assets/images/nbt/int.png
[list]: /assets/images/nbt/list.png
[compound]: /assets/images/nbt/compound.png
[string]: /assets/images/nbt/string.png
[byte]: /assets/images/nbt/byte.png

要在现有世界上启用实验性功能，你可以直接在游戏中使用世界设置。
但是，在 Minecraft 教育版和基岩版专用服务器上无法通过 GUI 或设置来做到这一点。

以下是如何通过编辑世界的 `level.dat` 文件手动启用实验性功能的方法。

:::info
Minecraft 教育版是基岩版的一个变体，具有一些不同的功能和限制。
出于安全原因，它不允许你从游戏中启用实验性功能。
:::

## 编辑 NBT

:::warning 备份
在编辑 NBT 文件之前始终要备份你的数据！

实验性功能可能与每个设备都不兼容，并可能导致你的世界出现意外行为。
:::

1. 找到你的世界文件夹（位于 `com.mojang` 中）或解压你的 `.mcworld`、`.mctemplate`
2. 用 NBT 编辑器（例如 NBT Studio）打开 `level.dat` 文件
3. 选择第一个节点，即 ![][structure] `level.dat`
4. 创建一个新的 compound 标签名为 ![][compound] `experiments`（如果它尚不存在）
5. 选择新节点，创建一个新的 ![][byte] byte 标签，值为 1，名称为你需要的功能（见下一节！）
6. 最后，保存文件并将其放回世界包或目录中

## 实验性功能

### 仅预览

#### Add-On 创作者

| 功能名称（游戏中）              | 功能名称（NBT）           |
| ----------------------------------- | ---------------------------- |
| 为创作者渲染龙特性 | `deferred_technical_preview` |

### 1.21.120

#### 游戏性

| 功能名称（游戏中）     | 功能名称（NBT）          |
| -------------------------- | --------------------------- |
| 村民交易重平衡 | `villager_trades_rebalance` |

#### Add-On 创作者

| 功能名称（游戏中）               | 功能名称（NBT）             |
| ------------------------------------ | ------------------------------ |
| 即将推出的创作者功能            | `upcoming_creator_features`    |
| Beta APIs                            | `gametest`                     |
| 实验性创作者相机功能 | `experimental_creator_cameras` |

### 1.21.110

#### 游戏性

| 功能名称（游戏中）     | 功能名称（NBT）          |
| -------------------------- | --------------------------- |
| 村民交易重平衡 | `villager_trades_rebalance` |

#### Add-On 创作者

| 功能名称（游戏中）               | 功能名称（NBT）             |
| ------------------------------------ | ------------------------------ |
| 即将推出的创作者功能            | `upcoming_creator_features`    |
| Beta APIs                            | `gametest`                     |
| 实验性创作者相机功能 | `experimental_creator_cameras` |
| 数据驱动的拼图结构        | `jigsaw_structures`            |

### 1.21.100

#### 游戏性

| 功能名称（游戏中）     | 功能名称（NBT）          |
| -------------------------- | --------------------------- |
| 村民交易重平衡 | `villager_trades_rebalance` |
| 掉落 3 2025                | `y_2025_drop_3`             |

#### Add-On 创作者

| 功能名称（游戏中）               | 功能名称（NBT）             |
| ------------------------------------ | ------------------------------ |
| 自定义生物群系                        | `data_driven_biomes`           |
| 即将推出的创作者功能            | `upcoming_creator_features`    |
| Beta APIs                            | `gametest`                     |
| 实验性创作者相机功能 | `experimental_creator_cameras` |
| 数据驱动的拼图结构        | `jigsaw_structures`            |

:::tip
Minecraft 教育版通常比经典基岩版落后一到两个版本，因此你总是可以提前知道哪些实验性功能会被添加到稳定版游戏中，哪些会被修改或移除。
如果你想在课堂中使用那个世界，请尝试只添加会长期保留的功能。
:::

## 图库

_（添加 Byte 标签窗口）_

![](byte-add-new.png)

_（以下是您的 `experiments` compound 结构可能的样子）_

![](experiments-file.png)

## 附加标签

存在 `experiments_ever_used` 和 `saved_with_toggled_experiments` byte 标签，
它们在世界以启用实验性功能加载后会自动出现。

## 禁用实验性功能

:::danger 不受官方支持
这不受官方支持，可能导致意外后果。
例如，包含实验性方块的世界会让那些方块变成"未知"方块。
请备份你的世界！
:::

如果你想禁用实验性功能，可以从 ![][compound] `experiments` compound 中移除它的 ![][byte] byte 标签。

(End of file - total 136 lines)