---
title: 软件准备
category: 指南
description: 如何设置你的开发环境
nav_order: 3
prefix: "3. "
mentions:
    - SirLich
    - Dreamedc2015
    - sermah
    - cda94581
    - Joelant05
    - MedicalJewel105
    - TheItsNameless
    - TheDoctor15
    - ChibiMango
    - profeplaysminecraft
    - solvedDev
    - aym-i
    - SmokeyStack
    - ThomasOrs
    - QuazChick
---

在你开始创建 Add-On 之前，你必须首先安装所需的工具和应用程序。虽然在 Windows 10 上开发最简单，但我们也提供了 Android 和 iOS 的移动替代方案（如适用）。

本页面将为你提供要安装的软件列表，以及设置配置提示。

## 下载 Minecraft 基岩版

-   [Windows](https://xbox.com/games/store/minecraft-for-windows/9NBLGGH2JHXJ)
-   [Android](https://play.google.com/store/apps/details?id=com.mojang.minecraftpe&hl=en)
-   [iOS](https://apps.apple.com/us/app/minecraft/id479516143)
-   [在 Linux 上运行 MC](https://discord.gg/VJTZ3KaTx6)

## 选择编辑器

可以使用任何文本编辑器创建 Add-On，但在专用编辑器中工作会舒服得多。好的编辑器可以为你提供代码补全、错误检测和内置文档。

对于初学者最好的编辑器，大家有强烈的意见，但一般来说，选择 VSCode 或 bridge. 都不会错。如果你是移动设备用户，则需要使用移动替代方案。

### VSCode

VSCode 是一个通用文本编辑器和 IDE。使用 VSCode，你将能够编辑纯文本形式的 Add-On，并辅以强大的扩展和附加功能阵列。VSCode 是程序员和高级用户的绝佳选择。

[⚙️安装 VSCode](https://code.visualstudio.com/)

<Spoiler title="配置 VSCode">

存在许多使编辑 Add-On 更容易的 VSCode 包：

-   [Blockception 的 Minecraft 基岩开发](https://marketplace.visualstudio.com/items?itemName=BlockceptionLtd.blockceptionvscodeminecraftbedrockdevelopmentextension)
-   [.mcfunction 支持](https://marketplace.visualstudio.com/items?itemName=arcensoth.language-mcfunction)
-   [.lang 支持](https://marketplace.visualstudio.com/items?itemName=zz5840.minecraft-lang-colorizer)
-   [基岩定义](https://marketplace.visualstudio.com/items?itemName=destruc7i0n.vscode-bedrock-definitions)
-   [Prettify-json](https://marketplace.visualstudio.com/items?itemName=mohsen1.prettify-json)
-   [拼写检查器（用于撰写 Wiki）](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)
-   [Snowstorm 粒子编辑器](https://marketplace.visualstudio.com/items?itemName=JannisX11.snowstorm)
-   [UUID 生成器](https://marketplace.visualstudio.com/items?itemName=netcorext.uuid-generator)

</Spoiler>

### bridge.

[bridge.](https://bridge-core.app/) 是一个轻量级、专为 Minecraft Add-On 打造的 IDE。它具有[创新功能](https://bridge-core.app/guide/features/)，如[实体和方块预览](https://bridge-core.app/guide/features/index.html#file-previews)、[丰富的自动补全和文件验证](https://bridge-core.app/guide/features/index.html#auto-completions-and-validation)以及[带有预设的高级文件创建](https://bridge-core.app/guide/features/index.html#advanced-file-creation)。
bridge. 为经验丰富的 Add-On 创建者包含一个常规文本编辑器，以及一个树形编辑器，让初学者可以轻松开始编辑 JSON 文件。

<Spoiler title="配置 Bridge">

-   [详细了解为什么你应该使用 bridge.](https://bridge-core.app/guide/why-bridge)
-   [阅读我们关于 bridge. 入门指南](https://bridge-core.app/guide/index)
-   [在线试用 bridge.](https://editor.bridge-core.app/)

</Spoiler>

### 移动编辑器

#### Android

-   [ACode 编辑器](https://play.google.com/store/apps/details?id=com.foxdebug.acodefree)
-   [bridge. v2](https://bridge-core.app/)

#### iOS

-   [Kodex](https://apps.apple.com/us/app/kodex/id1038574481)
-   [bridge. v2](https://bridge-core.app/)

## Blockbench

-   [Blockbench](https://blockbench.net/) 是一个"方块状 3D 模型编辑器"，通常用于创建 Minecraft 模型、纹理和动画。还提供与移动设备兼容的网页版。

## 图片编辑器

在选择图片编辑器时，需要记住传统的 Minecraft 风格是由简单的 16X16 像素画组成。有很多强大且免费的艺术程序可供你使用。但是，这些程序中的许多工具超出了 Minecraft 图形设计所需的功能，需要时间学习。

:::tip
选择一个让你感觉舒适且易于使用的程序。许多 Add-On 创建者使用不同的艺术程序来完成不同的任务。（例如：一个人可能使用 paint.net 完成大部分艺术工作，而使用 piskel 制作 Minecraft 方块动画）。选择最适合你的！
:::

### Krita

Krita 是一个强大的开源艺术程序，旨在为艺术家提供免费且强大的数字艺术工具。Krita 的功能足以满足你的 Minecraft 需求，可在 MAC 或 PC 上运行。

-   **+ 优点：** 功能丰富，包括直观的用户界面的像素画笔。
-   **- 缺点：** 需要一些时间来熟悉这些工具。

[下载 Krita](https://krita.org/en/)

### GIMP

GIMP 与 Krita 类似，是一个免费的开源数字艺术程序，拥有大量工具。Krita 更专注于插画，而 GIMP 更专注于图像处理（想想 Photoshop）。GIMP 也可以在 MAC 或 PC 上运行。

-   **+ 优点：** GIMP 有足够的工具来编辑 Minecraft 艺术
-   **- 缺点：** 界面不直观。尽管 GIMP 很强大，但它的学习曲线很陡峭。

[下载 Gimp](https://www.gimp.org/)

### Paint.NET

Paint.NET 是一个简单但功能强大的图像编辑和艺术软件。Paint.NET 可能没有 Krita 和 GIMP 那样大量的工具，但它确实提供了简单性和易用性。

-   **+ 优点：** 易于使用和学习。
-   **- 缺点：** 仅适用于 Windows。

[下载 Paint.net](https://www.getpaint.net)

### Pixilart

Pixilart 是一款基于网络的像素艺术软件。它非常易于使用，因为它专注于像素艺术。它还具有强大的调整大小选项，可以派上用场，这样你就可以调整艺术大小而不会丢失像素艺术细节。

-   **+ 优点：** 易于使用和学习，专为像素艺术而策划。
-   **- 缺点：** 必须有互联网连接。 可能缺少你想要的工具。

[使用 Pixilart](https://www.pixilart.com/)

### Piskel

Piskel 是一款基于网络的像素艺术软件，专注于制作像素化精灵（或视频游戏角色动画）。这个工具与 Pixilart 类似，易于使用。这也是制作翻页书（Minecraft 方块或皮肤动画）的绝佳工具。

-   **+ 优点：** 易于使用和学习，非常适合翻页书动画
-   **- 缺点：** 必须有互联网连接。仅提供最基本的工具。

[下载 Piskel](https://www.piskelapp.com/)

### Libresprite

Libresprite 是一个免费的开源程序，用于创建和动画你的精灵。基于 Aseprite 最后的 GPLv2 提交。

-   **+ 优点：** 基本且易于使用，可自定义，专为像素艺术家而策划。
-   **- 缺点：** 可能在 Mac 上无法工作，由小社区维护。

## 额外资料

:::tip
本指南将引导你完成 Add-On 开发的第一阶段，但它并不全面！要了解更多关于 Add-On 的信息，你必须使用并参考其他信息来源，我们将在此处链接这些信息。
:::

### 加入 Discord

获得本指南帮助的最佳方式是加入 [discord 服务器](/discord)。

### 原版包

Minecraft 的原版文件是很好的参考资料。你应该下载这些包，并将它们存储在计算机上的方便位置。当你需要物品、实体或动画的示例时，可以参考这些文件以获取灵感。

-   [原版包](https://github.com/Mojang/bedrock-samples/releases)

### 文档

有很多很好的 Add-On 文档来源。熟悉它们的所有内容，并考虑将它们加入书签。

-   [bedrock.dev](https://bedrock.dev/)：参考文档。
-   [wiki.bedrock.dev](https://wiki.bedrock.dev/)：教程和指南。
-   [MS 文档](https://docs.microsoft.com/en-us/minecraft/creator/)：微软官方的 Add-On 创作者门户。

### 故障排除和额外帮助

-   如果 JSON 格式对你来说非常棘手，请考虑阅读[理解 JSON 指南](/guide/understanding-json)。
-   如果你遇到奇怪的错误，请考虑阅读[故障排除指南](/guide/troubleshooting)。
-   你可以在[这里](/meta/useful-links)探索更多工具。

## 下一步

:::tip 你已学到

-   [x] 已安装必要的软件
-   [x] 已下载原版示例文件
-   [ ] 找到你的 `com.mojang` 文件夹并创建你的 Add-On 工作区。
-   [ ] 为你的第一个 Add-On 创建清单和包图标

:::

<Button link="/guide/project-setup">下一步：项目设置</Button>
