---
title: 文本与本地化入门
description: Minecraft 是一款在全球范围内拥有完全本地化文本的游戏。
category: 通用
nav_order: 1
mentions:
    - ThijsHankelMC
    - SirLich
    - aexer0e
    - MedicalJewel105
    - Lufurrius
    - Fabrimat
    - TheDoctor15
    - Hatchibombotar
    - ChibiMango
    - SmokeyStack
    - Sprunkles
    - QuazChick
---

Minecraft 是一款在全球范围内拥有完全本地化文本的游戏。为此，Minecraft 采用了一种系统，为每种语言分配内部**翻译键**值。Minecraft 会为自定义实体、物品和方块生成翻译键，我们需要在我的资源包中为它们分配本地化名称。

## 语言文件

### 文件位置

语言文件通常放在资源包的 "texts" 文件夹中，文件扩展名为 `.lang`。这些文件也可以放在行为包中，但唯一能更改的可翻译文本是包的清单名称和描述。

<FolderView :paths="[
  'RP/texts/en_US.lang',
  'RP/texts/languages.json',
  'RP/manifest.json'
]"
></FolderView>

Minecraft 目前支持 29 种语言，如 [§ 原版语言](/text/text-intro#vanilla-languages) 中所述。

### 格式

语言文件的格式相当简单。翻译以键值对的形式提供，用等号（`=`）分隔，键是翻译键，值是字符串。值不能包含换行符。

```lang
wiki.example_translation.line_1=The first line!
wiki.example_translation.line_2=Some more information following the first line.
```

注释可以用两个井号（`##`）添加，可以是行注释或行内注释。井号后的所有文本都是注释，直到下一行。

:::warning
行内注释不会自动去除尾部空格。如果想缩进注释，请使用 Tab 字符。
:::

```lang
## Translator note: I thought this would be funny to put here.
item.flint_and_steel.name=Flint and Steve	##[sic]
```

翻译可以包含文本替换占位符。替换可以是有序的（`%1`、`%2` 等）或无序的（`%s`）。原版翻译的值由游戏填充，而玩家可以使用原始 JSON 文本格式的命令（如 [`/tellraw`](/text/rawtext)）手动设置替换的值。

```lang
commands.op.success=Opped: %s
immersive_reader.book_page_header=Page %1 of %2
```

### 使用

本地化几乎可以在任何可以使用文本的地方进行，包括（但不限于）：

-   包名称和描述
-   实体、物品或方块名称
-   书籍中的页面
-   标牌上的文字
-   `/tellraw` 和 `/titleraw` 命令
-   对话中的文本

但是，有些文本无法翻译，例如在铁砧中重命名的物品。

## 本地化

:::tip
建议为你的包支持的每种主要语言创建一个语言文件副本。例如，要支持完整的英语，应该同时创建 `en_US.lang` 和 `en_GB.lang` 文件，以分别覆盖美国和英国的英语。
:::

编辑语言文件时，还必须在 `texts` 文件夹中添加一个 `languages.json` 文件，其中包含你计划更改的每种语言的数组。这让 Minecraft 知道应该为这些语言应用本地化。

<CodeHeader>RP/texts/languages.json</CodeHeader>

```json
["en_US", "en_GB", "fr_FR"]
```

### 自定义语言

通过全局资源包，可以通过 `languages.json` 和 `language_names.json` 文件引入自定义语言。应用全局包后，可以在游戏设置中的"语言"选项卡更改语言。

在下面的示例中，假设我们有两个功能完整的语言文件，一个名为 `xx_XX.lang`，另一个名为 `yy_YY.lang`。

<CodeHeader>RP/texts/languages.json</CodeHeader>

```json
["xx_XX", "yy_YY"]
```

`language_names.json` 也是一个数组，但这次用于定义要显示的语言名称。

<CodeHeader>RP/texts/language_names.json</CodeHeader>

```json
[
    ["xx_XX", "New Language (Custom Language #1)"],
    ["yy_YY", "Wiki-Speak (Custom Language #2)"]
]
```

:::warning
使用自定义语言时，请在禁用其所属的资源包之前切换到其他语言，否则 Minecraft 会崩溃。
:::

### 工具

如果 Microsoft 正在本地化你的 .lang 文件，你的 .lang 必须遵循特定的技术要求。

-   确保在注释前使用 &lt;tab&gt;#（**不是**空格）。
-   确保换行符是 Windows 格式（CR+LF），而不是 Unix 格式。
-   不能包含重复的键。
-   必须为字符串添加注释以便于翻译。

你可以使用免费的浏览器工具 [LangUtil tool](https://langutil.bedrockexplorer.com) 来协助处理。

### 原版语言

以下是 Minecraft 默认支持的 29 种语言表。

| 语言 ID | 语言名称           | 国家/地区    |
| ----------- | --------------------- | -------------- |
| id_ID       | 印度尼西亚语          | 印度尼西亚     |
| da_DK       | 丹麦语                | 丹麦          |
| de_DE       | 德语                  | 德国          |
| en_GB       | 英语                  | 英国          |
| en_US       | 英语                  | 北美          |
| es_ES       | 西班牙语              | 西班牙        |
| es_MX       | 墨西哥西班牙语        | 墨西哥        |
| fr_CA       | 加拿大法语            | 加拿大        |
| fr_FR       | 法语                  | 法国          |
| it_IT       | 意大利语              | 意大利        |
| hu_HU       | 匈牙利语              | 匈牙利        |
| nl_NL       | 荷兰语                | 荷兰          |
| nb_NO       | 挪威博克马尔语         | 挪威          |
| pl_PL       | 波兰语                | 波兰          |
| pt_BR       | 巴西葡萄牙语           | 巴西          |
| pt_PT       | 葡萄牙语              | 葡萄牙        |
| sk_SK       | 斯洛伐克语             | 斯洛伐克      |
| fi_FI       | 芬兰语                | 芬兰          |
| sv_SE       | 瑞典语                | 瑞典          |
| tr_TR       | 土耳其语              | 土耳其        |
| cs_CZ       | 捷克语                | 捷克          |
| el_GR       | 希腊语                | 希腊          |
| bg_BG       | 保加利亚语             | 保加利亚      |
| ru_RU       | 俄语                  | 俄罗斯        |
| uk_UA       | 乌克兰语              | 乌克兰        |
| ja_JP       | 日语                  | 日本          |
| zh_CN       | 简体中文               | 中国          |
| zh_TW       | 繁体中文               | 台湾          |
| ko_KR       | 韩语                  | 韩国          |

(End of file - total 164 lines)
