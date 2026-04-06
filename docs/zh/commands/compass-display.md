---
title: 指南针显示
category: 实用创作
tags:
    - easy
mentions:
    - BedrockCommands
    - fantasy9967
description: 使用命令创建指南针显示。
---

## 简介

[来自基岩版命令社区 (BCC) Discord](https://bedrockcommands.org/)

使用命令在动作栏上创建指南针显示。

![演示 GIF](demo.gif)

## 命令

<CodeHeader>BP/functions/wiki/displays/compass.mcfunction</CodeHeader>

```yaml
title @a[rym=157.5,ry=-157.5] actionbar North (N)
title @a[rym=-22.5,ry=22.5] actionbar South (S)
title @a[rym=-112.5,ry=-67.5] actionbar East (E)
title @a[rym=67.5,ry=112.5] actionbar West (W)
title @a[rym=-157.5,ry=-112.5] actionbar Northeast (NE)
title @a[rym=112.5,ry=157.5] actionbar Northwest (NW)
title @a[rym=-67.5,ry=-22.5] actionbar Southeast (SE)
title @a[rym=22.5,ry=67.5] actionbar Southwest (SW)
```

![8 个命令方块的链条](/assets/images/commands/command-block-chain/8.png)

要理解旋转选择器参数 'ry' 和 'rym' 如何工作，请参阅**[此处](/commands/selectors#rotation)**的页面。

:::

你可以将上述命令与**[潜行检测](/commands/detect-movements#is-sneaking)**或 **[hasitem](/commands/selectors#items)** 选择器参数结合使用，以添加额外条件来激活显示。

::