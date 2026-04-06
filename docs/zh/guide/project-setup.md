---
title: 项目设置
category: 指南
description: 学习如何设置项目文件夹
nav_order: 4
prefix: "4. "
mentions:
    - SirLich
    - solvedDev
    - Joelant05
    - Dreamedc2015
    - BlueFrog130
    - sermah
    - cda94581
    - MedicalJewel105
    - TheItsNameless
    - ThijsHankelMC
    - TheHyperWhale
    - stirante
    - ChibiMango
    - Etanarvazac
    - aym-i
    - ThomasOrs
    - QuazChick
---

## 简介

本页面将引导你完成创建第一个"可运行"的 Add-On 并在游戏中查看它的步骤。如果你使用的是安卓设备，应该遵循这个替代指南：

<Button link="./project-setup-android">安卓版指南</Button>

## com.mojang 文件夹

`com.mojang` 文件夹是一个特殊文件夹，Minecraft 在其中存储数据（Add-On、世界、玩家信息等）。Minecraft 知道这个位置，我们将访问或创建的所有文件都将放在这个文件夹中的某个位置！

你应该在桌面或移动设备上创建 `com.mojang` 文件夹的快捷方式，以便随时轻松访问它。`com.mojang` 文件夹的具体位置取决于你的设备操作系统。

### Windows

在 Windows 上，有多个 `com.mojang` 文件夹，以便在使用不同的 Xbox 账户登录 Minecraft 时可以访问不同的内容（如世界）和设置。
正在开发中的包应保存在"共享"的 `com.mojang` 文件夹中，位置如下：

`C:\Users\<USERNAME>\AppData\Roaming\Minecraft Bedrock\Users\Shared\games\com.mojang`{lang=xml}

:::tip 使用路径变量
你可以利用 `APPDATA` 变量直接跳转到你的 `AppData\Roaming` 文件夹。

只需在文件资源管理器地址栏中输入/粘贴 `%APPDATA%\Minecraft Bedrock\Users\Shared\games\com.mojang` 即可找到你的 `com.mojang` 文件夹。
:::

### Android

Android 11 或更早版本：`手机 > games > com.mojang`

Android 12 及更新版本：`手机 > Android > data > com.mojang.minecraftpe > files > games > com.mojang`

### ChromeOS

在文件管理器中看到 `com.mojang` 之前，请确保在 Minecraft 设置中将`文件存储位置`更改为`外部`：

-   进入 `Minecraft 设置`。
-   导航到 `设置 > 常规 > 存储`。
-   将 `文件存储位置` 更改为 `外部`。

之后，你可以在 Android 子系统中访问 `com.mojang` 文件夹：

`我的文件 > 播放文件 > Android > data > com.mojang.minecraftpe > files > games > com.mojang`

### iOS

`我的 iDevice > Minecraft > games > com.mojang`

### 开发包

我们将在 `development_behavior_packs` 和 `development_resource_packs` 中开发我们的 Add-On。当你对这些文件夹中的文件进行更改后，可以_退出并重新进入应用了该包的世界_，内容将自动重新加载。
这使你可以在不重新加载 Minecraft 的情况下快速测试你的 Add-On。

:::tip 重新加载全部
重新加载世界的更快方式是使用 `/reload all` 命令。
:::

另一方面，`resource_packs` 和 `behavior_packs` 包含稳定的 Add-On，包括通过 `.mcpack` 导入的包。我们现在可以忽略这些文件夹。

## 你的工作区

:::tip
在本指南中，BP 指你在 `development_behavior_packs` 中创建的文件夹（"行为包"），RP 指你在 `development_resource_packs` 中创建的文件夹（"资源包"）
:::

首先，你需要在合适的位置创建适当的文件夹并设置你的工作区。
_本指南的其余部分假设你正在使用 VSCode。你也可以使用其他编辑器。_

现在让我们在 Visual Studio Code 中创建你的第一个 Add-On 工作区。

1. 打开 VSCode（_Visual Studio Code，代码编辑器_）
2. 在 `development_resource_packs` 中创建一个名为 `your_pack_name_RP` 的文件夹。**我们把这个文件夹称为 `RP`**
3. 在 `development_behavior_packs` 中创建 `your_pack_name_BP` 文件夹。**我们把这个文件夹称为 `BP`**。
4. 进入 `文件 > 将文件夹添加到工作区...` 并选择 `BP`。对 `RP` 执行相同的操作。
5. 按 `文件 > 将工作区另存为...` 将工作区文件保存到桌面。每当你想处理你的 Add-On 时，只需双击打开工作区，即可快速访问 BP 和 RP 文件夹。

## BP 清单

:::tip 创建文件
在本指南中，你经常会被要求创建具有特定名称的文件，并放在特定的文件夹中。
如果文件夹还不存在，请创建它！
:::

清单是 Minecraft 用来识别你的包的文件。每个包都有一个清单。具有正确格式清单的文件夹将显示在 Minecraft 中，我们认为这是"最小"包，之后才能添加更多内容。

清单文件使用 JSON 编写。如果这对你不熟悉，你可以[在这里](/guide/understanding-json)了解更多关于 json 的信息。

首先，在你的 BP 文件夹中创建一个新文件，方法是右键单击文件夹并选择`新建文件`
将文件命名为 `manifest.json`，并将以下代码粘贴到文件中。

<CodeHeader>BP/manifest.json</CodeHeader>

```json
{
    "format_version": 3,
    "header": {
        "name": "pack.name",
        "description": "pack.description",
        "uuid": "...",
        "version": "1.0.0",
        "min_engine_version": "1.26.10"
    },
    "modules": [
        {
            "type": "data",
            "uuid": "...",
            "version": "1.0.0"
        }
    ],
    "metadata": {
        "authors": ["Your Name"],
        "product_type": "addon"
    }
}
```

### 清单说明

-   `format_version` 定义了你正在使用的清单 JSON 格式版本。版本 3 是最新的稳定版本，请使用它。

-   `name` 是你的行为包的名称。`description` 将在游戏中显示在其下方。

    我们将这些字段定义为_本地化键_，以便以后可以将它们翻译成其他语言。
    有关本地化的更多信息，请[查看此处](/text/text-intro)。

-   `uuid` 字段是**必需的**，下面会详细讨论。

-   `version` 定义了你的 Add-On 的版本。

    这允许用户导入更新版本的 Add-On 而不会遇到"检测到重复包"错误。
    如果你的 Add-On 在 `development_*_packs` 文件夹中且仅在私人世界中使，则无需更改版本。

-   `min_engine_version` 定义了能够使用你的 Add-On 的最低 Minecraft 客户端版本。
    此处指定的数字应与游戏的当前版本匹配，除非你需要与旧版本向后兼容。

-   在 `modules` 中，添加了一个 `type` 为 `"data"`{lang=json} 的模块。这会使你的包成为_行为包_。

-   在 `metadata` 中，`product_type` 允许你的 Add-On 在你的世界上启用成就。它必须是 `"addon"`{lang=json} 的产品类型。

### UUID 说明

UUID（_通用唯一标识符_）用于让其他程序（在这种情况下是 Minecraft）识别你的包。它看起来像这样：`5c830391-0937-44d6-9774-406de66b6984`

**永远不要使用相同的 UUID 两次。** 你可以[在这里](https://www.uuidgenerator.net/version4)生成你自己的 UUID，或者如果你使用 VSCode，可以安装[这个](https://marketplace.visualstudio.com/items?itemName=netcorext.uuid-generator)扩展。许多其他工具（如 _bridge._）会自动生成 UUID。每个清单文件至少使用两个不同的 UUID，如果包有多个 `modules`（例如添加脚本时），则使用更多。

为确保你的 Add-On 能够正常工作，你应该生成两个新的 UUID，并将它们粘贴到 BP `manifest.json` 文件中每个 `"..."`{lang=json} 的位置。
完成后，它应该看起来像这样：

```json
"uuid": "5c830391-0937-44d6-9774-406de66b6984"
```

## RP 清单

下一步是为 RP 创建 `manifest.json`。
资源包清单的格式与 BP 清单几乎相同，只是模块的 `type` 是 `"resources"`{lang=json}，这表示该包是_资源包_。
此外，我们指定 `pack_scope` 为 `"world"`{lang=json}，这可以防止包在世界之外激活。

将以下代码复制到你新创建的 `RP/manifest.json` 中并插入你自己的 UUID。

<CodeHeader>RP/manifest.json</CodeHeader>

```json
{
    "format_version": 3,
    "header": {
        "name": "pack.name",
        "description": "pack.description",
        "uuid": "...",
        "version": "1.0.0",
        "min_engine_version": "1.26.10",
        "pack_scope": "world" // Can be "any" (default), "global" or "world"
    },
    "modules": [
        {
            "type": "resources",
            "uuid": "...",
            "version": "1.0.0"
        }
    ],
    "metadata": {
        "authors": ["Your Name"],
        "product_type": "addon"
    },
    "capabilities": ["pbr"] // Allows Vibrant Visuals to be enabled while this pack is activated.
}
```

## 包图标

包图标是一个图片文件，用于标识你的 Add-On 在游戏中的外观。如果你有低分辨率的正方形图片，可以使用它。否则，请下载并使用此示例图标：

<WikiImage src="pack_icon.png" alt="Pack Icon" pixelated />

<Button link="pack_icon.png" download>
    下载图片
</Button>

你应该在 RP 和 BP 中各放置一份你想要的图片的副本。图片需要命名为 `pack_icon.png`

## 语言文件

最后要做的就是为你的 Add-On 设置语言支持。
你需要为 RP 和 BP 创建一个语言文件（请注意，BP 翻译仅用于 BP 清单，**所有其他翻译，如物品名称，都放在 RP 中**）。
你可以[在这里](/text/text-intro)了解更多关于 Minecraft 如何处理本地化的信息。

<CodeHeader>RP/texts/en_US.lang</CodeHeader>

```lang
pack.name=Wiki Resource Pack
pack.description=A Ghostly Guide
```

<CodeHeader>BP/texts/en_US.lang</CodeHeader>

```lang
pack.name=Wiki Behavior Pack
pack.description=A Ghostly Guide
```

<CodeHeader>RP/texts/languages.json</CodeHeader>

```json
["en_US"]
```

<CodeHeader>BP/texts/languages.json</CodeHeader>

```json
["en_US"]
```

## 检查你的工作

如果一切正确，你的包现在应该显示在 Minecraft 中！如果你没有看到你的包，应该遵循[故障排除指南](/guide/troubleshooting)。

![](active_pack.png)

## 启用内容日志

:::warning 内容日志
内容日志是你调试 Add-On 最有用的工具。请不要跳过此步骤！
:::

![](/assets/images/guide/content_log.png)

内容日志是一个非常重要的调试工具，你应该始终保持开启状态。

在 `设置 > 创作者` 中开启两个内容日志设置。当你进入应用了它的世界时，这会显示你的 Add-On 中的任何错误。

你可以通过按 `Ctrl + H` 或在创作者设置面板中按`内容日志历史`来在游戏中打开内容日志。
在[这里](/guide/troubleshooting)了解更多关于内容日志的信息。

## 创建你的测试世界

现在我们创建一个世界来测试你的新 Add-On！

1. 点击"**创建新世界**"；

2. 从"可用"选项卡中激活你的行为包和资源包。

3. 现在点击'**创建**'！

## 概览

**完成本页面后，你的项目应该是这样的：**

请记住，将来我们将用 `RP` 表示 `com.mojang/development_behavior_packs/guide_RP`，用 `BP` 表示 `com.mojang/development_behavior_packs/guide_BP`。

<FolderView :paths="[
	'com.mojang/development_behavior_packs/guide_BP/texts/en_US.lang',
	'com.mojang/development_behavior_packs/guide_BP/texts/languages.json',
	'com.mojang/development_behavior_packs/guide_BP/manifest.json',
	'com.mojang/development_behavior_packs/guide_BP/pack_icon.png',
	'com.mojang/development_resource_packs/guide_RP/texts/en_US.lang',
	'com.mojang/development_resource_packs/guide_RP/texts/languages.json',
	'com.mojang/development_resource_packs/guide_RP/manifest.json',
	'com.mojang/development_resource_packs/guide_RP/pack_icon.png',
]" />

## 你学到了什么

:::tip 你已学到：

-   什么是 `com.mojang` 文件夹，它在哪里，包含哪些文件夹
-   如何设置你的工作区
-   什么是 `manifest.json` 文件
-   如何使用 UUID
-   如何为你的 Add-On 创建图标
-   什么是 `.lang` 文件

:::

## 你目前的进度

:::tip 你已学到

-   [x] 设置你的包
-   [ ] 创建自定义物品
-   [ ] 创建自定义实体
-   [ ] 创建实体的战利品、生成规则和自定义配方

:::

<Button link="/guide/custom-item">下一步：自定义物品</Button>
