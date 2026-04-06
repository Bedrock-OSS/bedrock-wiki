---
title: 扩展结构限制
category: 教程
mentions:
    - MedicalJewel105
tags:
    - easy
description: 扩展结构限制。
---

[strUCTURE]: /assets/images/nbt/structure.png
[int]: /assets/images/nbt/int.png
[list]: /assets/images/nbt/list.png
[compound]: /assets/images/nbt/compound.png
[string]: /assets/images/nbt/string.png

:::warning 已弃用
此方法在 1.20.50 更新后不再有效。
:::

默认情况下，Minecraft 不允许保存大于 64x255x64 的结构。在本指南中，你将学习如何为结构方块扩展结构框的大小。

## 编辑 NBT

1. 将结构方块放入结构中并导出。
2. 用 NBT 编辑器（我们使用 NBT Studio）打开你的结构并找到结构方块。

如果你的结构中唯一的方块是结构方块，你会在这里找到它的数据：

![][structure] extending_structure_block.mcstructure

> ![][compound] structure
>
> > ![][compound] palette
> >
> > > ![][compound] default
> > >
> > > > ![][compound] block_position_data
> > >
> > > > > ![][compound] 0

![](nbt-screenshot-1.png)

3. 将 `xStructureSize`、`yStructureSize` 和 `zStructureSize` 的值设置为你想要的大小。
4. 保存结构并在游戏中加载。

![](result.png)

## 提示

你可以通过在按住 Ctrl 的同时滚动鼠标滚轮来将结构方块放入你的物品栏中。
建议在加载大型结构时使用结构加载动画（按方块放置）。这将最大程度减少卡顿。

(End of file - total 53 lines)