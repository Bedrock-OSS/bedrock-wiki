---
title: 高级清单
category: 额外
description: 如何使用清单文件 - 更详细的指南 [正在建设中]
nav_order: 4
prefix: "d. "
mentions:
    - MRBBATES1
    - Lufurrius
    - SirLich
    - smell-of-curry
    - MedicalJewel105
    - QuazChick
---

::: tip
这是一个附录页面。你可以从头开始[这里](/guide/introduction)开始本指南。
:::

本页面旨在更详细地介绍 manifest.json 文件，在这里我们将更详细地介绍什么是 UUID 以及如何添加它们。我们将解释依赖项的使用、不同的格式版本以及如何包含元数据。

我们还将讨论行为包、资源包和皮肤包之间的版本差异。

## UUID

UUID 是通用唯一标识符的缩写，有 5 个 UUID 版本加一个常见的非官方版本，UUID 是一个 36 字符的字符串，包含数字、字母和破折号。

Minecraft 使用版本 4：变体 1，它是完全随机的。这就是在 Minecraft 中为你的包创建独特身份的原因。

### 如何生成正确的 UUID

你可以使用在线网站，例如 [UUID Generator](https://www.uuidgenerator.net/version4/) 和 [UUID Tools](https://www.uuidtools.com/generate/v4) 生成 Minecraft 所需的正确版本。

## 

### UUID 常见问题

-   **UUID 是否区分大小写？**

    -   _不，UUID 以 base 16 编写，使用数字 0-9 和字符 a-f。大小写字母之间没有区别。_

-   **我可以在 header 和 modules UUID 中使用相同的 UUID 吗？**
    -   _不能，header 和 module 的 UUID 需要是不同的。_

:::warning
此页面正在建设中！
:::
