---
title: 多人位置重排
category: 实用创作
mentions:
    - BedrockCommands
    - zheaEvyline
    - jeanmajid
tags:
    - function
description: 随机重新定位所有选定目标彼此之间的位置，确保没有人保持在原始位置。
---

## 简介

[来自基岩版命令社区 (BCC) Discord](https://bedrockcommands.org/)

多人位置重排函数，或更准确地说多人位置错乱函数，由 @ZheaEvyline 创建，允许你随机重新定位所有选定目标彼此之间的位置，确保没有目标保持在原始位置。

错乱是"N"元素的排列，其中没有元素出现在其原始位置。

例如，如果 Player1 在 `(0, 0, 1)`，Player2 在 `(0, 0, 2)`，Player3 在 `(0, 0, 3)`，Player1 只能被重新定位到 `(0, 0, 2)` 或 `(0, 0, 3)`。所有其他玩家也适用相同的规则。

<br>

**此函数包的主要特点：**

1. 在单个游戏 tick 中保证错乱。
2. 最少的迭代次数（重复/循环）。
3. 跨维度兼容性。

详见源文件。