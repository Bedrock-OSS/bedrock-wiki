---
title: 皮肤包
mentions:
    - MedicalJewel105
    - SirLich
    - Joelant05
    - TheItsNameless
category: 通用
description: 创建你自己的皮肤包。
---

很多人错误地认为皮肤包只能由市场合作伙伴创建。不！这是非常简单的过程，可以通过python完全自动化。但不仅如此。让我们学习如何制作皮肤包！

:::warning
`development_skin_packs` 似乎不能正常工作。你需要使用 `skin_packs` 文件夹，每次更改后都要重新加载Minecraft。
:::

## 需要什么

以下是需要的：

<FolderView :paths="[
    'com.mojang/skin_packs/my_skin_pack/texts/en_US.lang',
    'com.mojang/skin_packs/my_skin_pack/my_skin.png',
    'com.mojang/skin_packs/my_skin_pack/manifest.json',
    'com.mojang/skin_packs/my_skin_pack/skins.json'
]" />

## manifest.json

<CodeHeader>skin_packs/tutorial_skin_pack/manifest.json</CodeHeader>

```json
{
    "format_version": 2,
    "header": {
        "name": "Tutorial Skin Pack",
        "uuid": "bb9616eb-327c-4a81-9f00-064cae820cd5",
        "version": [1, 0, 0]
    },
    "modules": [
        {
            "type": "skin_pack",
            "uuid": "e4bc71b6-8f9b-4094-9d47-dc3824f8a3dc",
            "version": [1, 0, 0]
        }
    ]
}
```

-   `format_version` 也可以是1，因为v2对皮肤包没有太大改变。
-   `name` 不言自明。然而，它并不是很重要。
-   `uuid` 和 `version` 对我们来说已经很熟悉了。manifest中的两个UUID需要不同。你可以通过[有用链接](/meta/useful-links)中链接的生成器生成它们。作为提醒，你不能使用相同的UUID两次。
-   `modules` 中的 `type` 需要设置为 `skin_pack`。

## skins.json

此文件用于定义皮肤的纹理和简称。然而，大多数选项是硬编码的或不可更改的。

<CodeHeader>skin_packs/tutorial_skin_pack/skins.json</CodeHeader>

```json
{
    "geometry": "geometry.json",
    "serialize_name": "Tutorial Skin Pack",
    "localization_name": "tutorial",
    "skins": [
        {
            "localization_name": "tutorial_skin_1",
            "geometry": "geometry.humanoid.custom",
            "texture": "goggled_gecko_no_goggles.png",
            "type": "free"
        },
        {
            "localization_name": "tutorial_skin_2",
            "geometry": "geometry.humanoid.customSlim",
            "texture": "goggled_gecko.png",
            "type": "free"
        }
    ]
}
```

-   `geometry` 对象必须在每个对象中与示例代码相同。Mojang移除了通过皮肤包添加自定义几何模型的能力，因为该功能被滥用了。
-   `serialize_name` 是为市场准备的。
-   `localization_name` 是包标识符。**不要在其他皮肤包中使用**，因为它会影响翻译。
-   `skins` 数组，你在这里定义每个皮肤。皮肤将按照在此处定义的顺序在minecraft中显示。
    -   `localization_name` 将用于.lang文件中。将其视为皮肤的标识符。
    -   `geometry` 你可以在这里使用 `geometry.humanoid.custom` 和 `geometry.humanoid.customSlim`。
    -   `texture` 是位于主皮肤包文件夹中的图像文件的名称。
    -   `type` 只能由市场合作伙伴访问，将其保留为 `free`，否则它将被锁定。

## texts/en_US.lang

最后，我们将在 `.lang` 文件中定义皮肤包和每个皮肤的名称。当然"en_US"可以替换为任何语言。

<CodeHeader>skin_packs/tutorial_skin_pack/texts/en_US.lang</CodeHeader>

```lang
skinpack.tutorial=Tutorial Skin Pack

skin.tutorial.tutorial_skin_1=Skin 1
skin.tutorial.tutorial_skin_2=Skin 2
```

第一行定义包本身的名称。格式如下：

`skinpack.[pack localization_name]=Actual Pack Name`

其他行定义皮肤的名称：

`skin.[pack localization_name].[skin localization_name]=Actual Skin Name`

完成！现在，当你打开角色创建器时，你会看到你的皮肤可供选择！

## 故障排除

如果你在低于1.18.30的MC版本上玩，你可能会遇到“装备”按钮不显示的bug。你需要下载一个特殊的纹理包。

![](troubleshooting-1.png)

<Button link="/assets/packs/visuals/skin-packs/equip_button_fix.mcpack" download>
    下载装备按钮修复
</Button>

![](troubleshooting-2.png)
