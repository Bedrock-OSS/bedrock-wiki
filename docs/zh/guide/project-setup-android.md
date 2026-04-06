---
title: Android 项目设置
description: 学习如何在 Android 设备上设置项目
category: 额外
prefix: "f. "
nav_order: 6
mentions:
    - Etanarvazac
    - MedicalJewel105
    - TheItsNameless
    - ThomasOrs
    - hhhwi
    - QuazChick
---

## 工具

在安卓平台上找到好的 Add-On 制作应用程序并不容易，但我们尽了最大努力为你收集了 Google Play 应用程序。
在 Android 上进行开发，你需要三个应用程序的组合。

1. 一个文件管理器，如果你的设备运行的是 Android 12 或更新版本，它需要能够创建 ZIP 压缩包。
2. 一个代码编辑器（任何文本编辑器都可以，但只有代码编辑器会显示语法高亮）。
3. 一个图片编辑器（没有任何设备自带可以编辑像素级别的编辑器）。

### 文件管理器

这些文件管理器已知具有 ZIP 压缩功能，并且只读访问 `Android/data` 文件夹：

1. [**Zarchiver**](https://play.google.com/store/apps/details?id=ru.zdevs.zarchiver) - 一个多功能压缩管理器，支持广泛的压缩格式（ZIP、7z、RAR 等），允许用户创建、提取和管理压缩文件。它具有受密码保护的压缩文件、部分压缩文件提取和多线程以提高性能等功能。在root设备上或使用 [**Shizuku**](https://play.google.com/store/apps/details?id=moe.shizuku.privileged.api) 时，Zarchiver 可以访问和修改 Android/data 和系统目录中的文件，使其成为高级文件管理的理想选择。

2. [**X-Plore**](https://play.google.com/store/apps/details?id=com.lonelycatgames.Xplore) - 一个功能强大的文件管理器，具有双窗格树视图、内置文本编辑器（不是代码）、多种文件压缩格式（ZIP、7zip、RAR 等）等。在root设备上，X-Plore 可以编辑 `Android/data` 和 root 目录。

3. [**Total Commander**](https://play.google.com/store/apps/store/apps/details?id=com.ghisler.android.TotalCommander) - 开箱即用不如 X-Plore 强大，但包含一些相同的功能，包括双窗格、ZIP 和 RAR 压缩包，以及只读访问 `Android/data`。Total Commander 使用列表视图而不是树视图，还有许多其他功能需要插件（来自 Google Play 的应用程序）才能使用。

### 代码编辑器

1. **Acode:** [免费版](https://play.google.com/store/apps/details?id=com.foxdebug.acodefree) 带广告，无需付费即可关闭。支持使用个人访问令牌进行 GitHub 集成、FTP/SFTP、支持 100 多种语言的语法高亮（包括 JSON）、多文件编辑的标签视图、数十种主题等。此应用程序是开源的，确实有[付费版](https://play.google.com/store/apps/details?id=com.foxdebug.acode) 允许更深入的主题定制。

:::info
Acode 是目前 Android 上唯一正在开发的强大代码编辑器。其他编辑器非常有限，或者已经被废弃到从 Google Play 商店消失的程度。如果你知道某个代码应用程序，可以为此指南做出贡献。
:::

### 图片编辑器

1. [**Pocket Paint**](https://play.google.com/store/apps/details?id=org.catrobat.paintroid) - 轻量级编辑器，包含任何 Add-On 创建所需的最少功能。此应用程序易于使用，允许在其他图像上导入其他图像。保存为 JPG（压缩）、PNG（无损，带透明度）和 ORA（多层图像）。此应用程序是开源的。
2. [**PixaPencil**](https://f-droid.org/en/packages/com.therealbluepandabear.pixapencil) - 非常轻量级，无广告或应用内购买。丰富的工具和可自定义的画笔，能够在内部或外部保存调色板，尽管仅在 F-droid 上可用。允许一些简单的快速纹理。
3. [**Pix2D**](https://play.google.com/store/apps/details?id=com.pix2d.pix2dapp) - 一个简单的轻量级应用程序。如果你只需要绘制一些纹理占位符或编辑一些小纹理，这是最好的，它还允许制作动画。

## 你的工作区

:::tip
在本指南的这一版本中，"BP"指你的行为包文件夹，"RP"指你的资源包文件夹在工作区中。对于文件或目录中的位置，`../<当前位置>` 表示"从上一位置"后跟添加的空格（例如：`/one/two/three/file.txt` 缩短为 `../three/file.txt`）

如果你的设备已 root 或已设置 Shizuku，你可以直接使用 `/Android/data/com.mojang.minecraftpe/files/games/com.mojang` [这里](https://wiki.bedrock.dev/guide/project-setup) 开发行为和资源包文件夹。否则，请按照以下步骤操作或设置 Shizuku。
:::

在我们开始之前，你需要一个工作区。使用文件管理器，导航到你的内部存储（在大多数情况下，它是 `/`。在其他情况下，显示完整路径（例如：`/storage/emulated/0/`）都是可以接受的。）并创建一个将包含你的包的文件夹。对于这个例子，我们的完整目录是 `/Minecraft Packs/MyFirstAddon`。从那里，你需要为你的行为和资源包各创建一个文件夹（例如：`../MyFirstAddon/addonBP` 和 `../MyFirstAddon/addonRP`）。

现在你已经有了工作区设置，代码编辑器应该有一种方法可以将文件夹作为工作区打开。在本指南中，我们将介绍 Acode。

1. 打开 Acode。
2. 点击文件浏览器按钮（顶部左侧的三条杠），然后点击"打开文件夹"
3. 点击"添加存储"，然后点击"选择文件夹"
4. 这应该会打开你设备的文件浏览器。导航到项目的主文件夹（对我们来说，是 `/Minecraft Packs`），然后点击"使用此文件夹"。如果你的设备要求你允许 Acode 访问，点击"允许"。
5. 你现在应该回到 Acode。点击"确定"，你的文件夹应该出现在列表中。点击它，然后点击屏幕底部的"选择文件夹"。
6. 现在当你打开文件浏览器（顶部左侧的三条杠）时，你应该会在列表中看到你的文件夹。你现在可以快速访问你的 Add-On 的行为和资源包文件夹。文件浏览器使用树视图显示你的活动工作区。

:::tip
你可以通过在文件浏览器中按住要创建项目的文件夹来在其中创建新文件和文件夹。
:::

## Shizuku

:::tip
Shizuku 只在启用开发者模式的情况下有效，并且需要在重启后启动。
你还需要 Android 11 或更高版本才能使用 Shizuku。
:::

这一部分是可选的。
如果你想在不 root 设备的情况下使用开发文件夹，Shizuku 可能会帮助你。Shizuku 允许你写入 Android/data，如果它正在运行并且你使用的是支持的文件管理器（如 [**Zarchiver**](https://play.google.com/store/apps/details?id=ru.zdevs.zarchiver)。

首先，启用开发者模式，这个过程因手机而异。

打开开发者选项并启用 USB 调试和无线调试
打开 Shizuku 点击配对
开发者选项
向下滚动直到看到无线调试并启用它，然后点击它
点击使用配对码并在通知中输入配对码。

现在启动 Shizuku。

## BP 和 RP 清单

:::warning
从现在开始，除非另有说明，否则所有文件和文件夹都有非常具体的名称。命名错误的文件和/或文件夹是导致错误的常见原因。请确保按照提供的示例仔细检查你的工作。如果尚未创建提到的文件或文件夹，请在其适当的目录中创建它。
:::

在文件管理器或某些文本或代码应用程序中创建新文件时，`.txt` 扩展名会自动添加到文件名末尾。为确保我们的文件按预期工作，请务必删除 `.txt`。与名称一样，错误的文件扩展名也是导致错误的常见原因。如果你使用 Acode，你会注意到 `untitled.txt` 完全高亮显示，而不仅仅是 `untitled`。这是命名编程语言文件的常见做法。

清单文件是 Minecraft 用来识别你的包的文件。每个包有一个（且仅有一个）清单。具有正确格式清单的文件夹将显示在 Minecraft 中。在我们开始添加内容之前，我们将确保我们的"最小"包是可见的。清单使用 `JSON` 编程语言编写。如果你对 JSON 不熟悉，可以[在这里](/guide/understanding-json)了解更多相关信息。

在你的 Add-On 的行为包文件夹中创建一个名为 `manifest.json` 的新文本文件。首先，将以下代码复制并粘贴到 `manifest.json` 文件中。创建这些文件后，会提供完整的清单文件说明。

<codeHeader>BP/manifest.json</codeHeader>

```json
{
    "format_version": 2,
    "header": {
        "name": "pack.name",
        "description": "pack.description",
        "uuid": "...",
        "version": [0, 0, 1],
        "min_engine_version": [1, 16, 0]
    },
    "modules": [
        {
            "type": "data",
            "uuid": "...",
            "version": [0, 0, 1]
        }
    ]
}
```

现在在你的 Add-On 的资源包文件夹中创建另一个 `manifest.json` 文件。同样，将以下代码复制并粘贴到新文件中。

<codeHeader>RP/manifest.json</codeHeader>

```json
{
    "format_version": 2,
    "header": {
        "name": "pack.name",
        "description": "pack.description",
        "uuid": "...",
        "version": [0, 0, 1],
        "min_engine_version": [1, 16, 0]
    },
    "modules": [
        {
            "type": "resources",
            "uuid": "...",
            "version": [0, 0, 1]
        }
    ]
}
```

## 清单说明

-   `format_version` 定义了你的清单所采用的语法版本。版本 2 是最新的稳定版本。请始终使用此版本。
-   `name` 是你的包的名称。我们稍后将用"代码形式"定义它们，以便如果创建多语言包，可以轻松将它们翻译成其他语言。
-   `description` 是关于你的包的简短描述，将显示在游戏中 `name` 的下方。这也将在稍后用"代码形式"定义。
-   `uuid` 是帮助识别你的包与其他包的必需项，下面会有自己的说明。解释后，你需要用它们替换所有的 `...`。
-   `version` 就是你的 Add-On 的版本。完成 Add-On 后，你可以随时将其更改为 `[1, 0, 0]`。但是，在手机上进行更改时，使用热修复补丁会更容易。
-   `min_engine_version` 告诉 Minecraft 需要什么最低版本才能让你的包工作。例如，如果你的包有一个涉及混凝土的合成配方，你的包无法在 Minecraft 1.5 上运行，因为该版本中没有混凝土。
-   在 `modules` 下，你有 `type` 字段。这告诉 Minecraft 你的包是什么。所以 BP 中的 `data` 告诉游戏该包是行为包，RP 中的 `resources` 告诉游戏该包是资源包。

## UUID 说明

UUID，或 **U**niversally **U**nique **ID**entifier，既可以让其他程序（Minecraft 例如）识别你的包，也可以将该程序中的包与别人的包区分开来。版本 4 UUID（UUID-4）通常采用 `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx` 格式，由随机的字母和数字字符串组成。例如：`5c830391-0937-44d6-9774-406de66b6984`。

你**永远不应该**使用相同的 UUID 两次！使用[在线 UUID 生成工具](https://www.uuidgenerator.net/version4)为你的清单文件生成所需的 UUID。每个清单文件使用两个不同的 UUID。因此，为确保你的包能正常工作，请在两个清单中获取 4 个不同的 UUID 来替换所有的 `...`。完成后，每个 UUID 条目应该看起来类似于这样：`"uuid": "5c830391-0937-44d6-9774-406de66b6984"`

## 包图标

注意到其他包有一个图标了吗？那是一张图片文件，可以快速识别你的 Add-On 在游戏中的外观。有低分辨率的 PNG 正方形图片吗？你可以使用它！否则，你可以使用此示例图标。

<WikiImage src="/assets/images/guide/project-setup/pack_icon.png" alt="Pack Icon" pixelated />

<Button link="/assets/images/guide/project-setup/pack_icon.png" download>
    下载图片
</Button>

你必须将所需图片的副本同时放入行为包和资源包中。为了让图片能被正确读取，名称必须是 `pack_icon.png`。

## 语言文件

还记得我们之前说过要用代码形式定义包名称和描述吗？现在是时候了，这是设置 Add-On 的最后一步。你需要创建 4 个新文件和 2 个新文件夹（每个包 2 个文件和 1 个文件夹）。你可以在[这里](/text/text-intro)了解更多关于 Minecraft 如何处理本地化的信息。你也可以使用 `§` 符号格式化你的定义。你可以在[这里](https://htmlcolorcodes.com/minecraft-color-codes/)查看颜色和格式列表。如果你使用任何格式，确保在更改格式时使用 `§r` 重置：`§kl My pack l` 会渲染出"My pack"无法阅读，而 `§kl §rMy pack §kl` 可以正常阅读。

<codeHeader>BP/texts/en_US.lang</codeHeader>

```lang
pack.name=§2My §lFIRST §r§2Add-on's Behavior Pack!
pack.description=This add-on is made by a Wiki Contributor!
```

<codeHeader>BP/texts/languages.json</codeHeader>

```json
["en_US"]
```

<codeHeader>RP/texts/en_US.lang</codeHeader>

```lang
pack.name=§2My §lFIRST §r§2Add-on's Resource Pack!
pack.description=This add-on is made by a Wiki Contributor!
```

<codeHeader>RP/texts/languages.json</CodeHeader>

```json
["en_US"]
```

## 导入你的 Add-On

现在你的 Add-On 已包含所有需要的内容，我们需要将其导入 Minecraft。为此，我们需要创建一个扩展名为 `.mcaddon` 的文件。

1. 打开你首选的文件管理器并导航到包含你的行为包和资源包的文件夹。
2. 使用多选，选择两个包并创建 ZIP 文件。
3. 当被要求输入文件名时，确保将 `.zip` 改为 `.mcaddon`。
   ![](zip-addon.png)
4. 当你的文件管理器完成时，它应该是一个以 Minecraft 为图标的 `MCADDON` 文件。点击此文件应该会启动 Minecraft。

如果操作正确，Minecraft 将为两个包显示横幅。首先是`导入中...`。之后应该是`成功导入"<你的包名称>"`。如果你没有看到导入消息，你也可以转到 `设置 > 存储` 验证你的包是否已导入。如果你看不到任何一个包，请查看我们的[故障排除指南](/guide/troubleshooting)。

## 开启内容日志

:::warning
内容日志是你调试 Add-On 最有用的工具。请不要跳过此步骤。
:::

![](/assets/images/guide/content_log.png)

内容日志是一个极其重要的调试工具，你应该始终保持开启状态。

在 `设置 > 创作者` 中开启两个内容日志设置。当你进入应用了它的世界时，这将显示你的 Add-On 中的任何错误。你也可以通过按 `ctrl+h` 在游戏中打开内容日志 GUI。在[这里](/guide/troubleshooting)了解更多关于内容日志的信息。

## 创建你的测试世界

现在我们创建一个世界来测试你的新 Add-On！

1. 点击"**创建新世界**"；

2. 确保以下设置已设置。

   ![](/assets/images/guide/project-setup/settings_1.png)
   ![](/assets/images/guide/project-setup/settings_2.png)

3. 现在激活你的行为包和资源包。你可以通过选择包并点击"应用"来做到这一点。

4. 现在点击'**创建**'！

## 最后说明

**完成本页面后，你的项目应该是这样的：**

请记住，将来我们将用 `RP` 表示 `com.mojang/development_behavior_packs/guide_RP/`，用 `BP` 表示 `com.mojang/development_behavior_packs/guide_BP/`。

<FolderView :paths="[
	'com.mojang/development_resource_packs/guide_RP/manifest.json',
	'com.mojang/development_resource_packs/guide_RP/pack_icon.png',
	'com.mojang/development_resource_packs/guide_RP/texts/en_US.lang',
	'com.mojang/development_resource_packs/guide_RP/texts/languages.json',
	'com.mojang/development_behavior_packs/guide_BP/manifest.json',
	'com.mojang/development_behavior_packs/guide_BP/pack_icon.png',
	'com.mojang/development_behavior_packs/guide_BP/texts/en_US.lang',
	'com.mojang/development_behavior_packs/guide_BP/texts/languages.json',
]" />

## 你学到了什么

:::tip 你已学到：

-   你的 `com.mojang` 文件夹是什么、在哪里、包含什么
-   如何设置你的移动工作区
-   什么是 `manifest.json` 文件
-   什么是 UUID 以及如何使用它们
-   如何为你的 Add-On 创建图标
-   什么是 `.lang` 文件

:::

## 你目前的进度

-   [x] 设置你的包
-   [ ] 创建自定义物品
-   [ ] 创建自定义实体
-   [ ] 创建自定义方块
