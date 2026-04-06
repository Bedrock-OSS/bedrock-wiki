---
title: textures_list.json
mentions:
    - SirLich
    - solvedDev
    - Joelant05
    - AFoxyToast
    - TheItsNameless
description: textures_list 文件是 Minecraft 缓存每个纹理的方式，这样可以比遍历 textures 文件夹中的每个图像更快地检索纹理。
---

## 概述

纹理列表是 Minecraft _缓存_每个纹理的方式，这样可以比遍历 textures 文件夹中的每个图像更快地检索纹理。当你拥有大量纹理时这一点尤为重要，因为 Minecraft 可能会出错，比如交换纹理甚至完全不加载它们。

如果你的纹理没有在文件中列出，Minecraft 可能会显示内容日志_警告_。如果你的纹理数量很少可以忽略，但建议还是将纹理列入。

## 应该包含哪些纹理？

任何纹理都可以！为了获得最佳实践和性能，所有纹理都应该且_应该_用在 `textures_list.json` 文件中。

## 文件结构

结构很简单。文件位于 `RP/textures` 中，名为 `textures_list.json`。该文件包含一个纹理路径数组（`textures` 文件夹中的文件路径，不包括扩展名，如 `.texture_set.json` 和 `.png`）：

<CodeHeader>RP/textures/textures_list.json</CodeHeader>

```json
[
    "textures/blocks/foo",
    "textures/blocks/bar",

    "textures/items/foo",
    "textures/items/bar",

    "textures/models/foo",
    "textures/models/bar",

    "textures/entity/foo",
    "textures/entity/bar"
]
```

## 自动化

如果你有很多纹理，逐个列出所有纹理路径会很繁琐。这种情况下，你可能更愿意开始使用带有出色过滤器的 [Regolith](https://regolith-docs.readthedocs.io)。
