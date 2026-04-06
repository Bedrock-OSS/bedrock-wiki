---
title: 创建自定义物品
category: 指南
description: 如何创建你的第一个自定义物品。
nav_order: 5
prefix: "5. "
mentions:
    - KaiFireborn
    - SirLich
    - cda94581
    - TheItsNameless
    - MedicalJewel105
    - ChibiMango
    - TheDoctor15
    - SmokeyStack
    - unickorn
    - Sprunkles137
    - ThomasOrs
    - davedavis
    - QuazChick
---

在 Minecraft 中，我们可以创建自定义物品，这些物品可以像普通物品一样被丢弃、交易、合成或使用。该系统功能非常强大，包括能够制作食物、燃料和工具。

在本教程中，我们将学习如何创建一个简单的"灵质"物品，我们稍后会将其作为鬼魂实体的战利品掉落。

<WikiImage src="ectoplasm_view.png" width="150" />

从概念上讲，物品由两部分组成：

-   视觉外观（纹理、名称）
-   行为（物品应该如何表现）

首先，我们将学习如何创建新的简单物品并定义其行为。在下一节中，我们将为此物品分配纹理，以便你可以在游戏中看到它。

## 物品行为

为了制作物品，我们需要一种方法来识别它并定义我们希望它如何表现。为此，我们将创建一个文件，告诉 Minecraft 将某些行为应用到我们选择的特定物品。

在本节结束时，我们将完全定义我们物品的行为。

### 组件

不同的物品有不同的行为方式；你可以吃猪排，发光的附魔物品和鸡蛋只能堆叠到 16 个。这些都是物品行为方式的例子。
我们能够通过使用行为组件来定义自定义物品的行为。

<Spoiler title="示例组件">

<CodeHeader>minecraft:item > components</CodeHeader>

```json
"minecraft:glint": true,
"minecraft:max_stack_size": 16
```

</Spoiler>

组件包含告诉游戏我们的物品应该做什么的信息。例如，组件 [`"minecraft:glint"`](/items/item-components#glint) 决定物品是否应该有附魔光晕，因此将其设置为 `true` 就会应用它。
所有组件都有一个附加的 `value`，我们可以编辑它以获得我们想要的行为。

对于我们的灵质，我们将它的堆叠上限设置为 16，类似于鸡蛋。为此，我们使用组件 [`"minecraft:max_stack_size"`](/items/item-components#max-stack-size) 并将其值设置为 `16`。

### 标识符

为了让游戏将正确的组件应用到正确的物品，我们需要告诉游戏哪个物品是我们的。我们通过为物品定义标识符来实现这一点。

标识符是该物品独有的名称。对于原版 Minecraft 鸡蛋，它的标识符是 `minecraft:egg`。标识符由两部分组成：

-   命名空间（`minecraft`）
-   ID（`egg`）

命名空间对你的 Add-On 是唯一的，你将在整个项目中使用它。这样做是为了减少问题，如果有人将两个包添加到他们的游戏中，而这两个包都添加了灵质物品；命名空间减少了标识符相同的可能性。
Minecraft 使用的命名空间是 `minecraft`。你的命名空间应该对你是唯一的，例如作者的缩写或包名称的缩写。我们将在示例中使用命名空间 `wiki`；有关创建命名空间的更多信息，请查看我们的页面[这里](/concepts/namespaces)。

ID 是你的物品的简略名称。这里我们将使用 `ectoplasm`。

因此，我们自定义的标识符变成 `wiki:ectoplasm`。请注意，我们使用冒号 `:` 来分隔命名空间和 ID。当我们想要引用我们的物品时，我们将使用这个标识符，例如使用 `/give` 命令。

### 物品文件

现在我们有了组件和标识符，我们可以开始定义我们的物品了。我们通过在行为包中创建物品定义文件来定义物品。这是我们所有信息要去的地方。

所有物品定义都放在 `BP/items/` 中。你的文件名不会影响任何东西，但为了便于导航，建议用你的 ID 来命名它。
我们将创建文件 `BP/items/ectoplasm.json`。以下是文件的基本结构：

<CodeHeader>BP/items/ectoplasm.json</CodeHeader>

```json
{
    "format_version": "1.26.10",
    "minecraft:item": {
        "description": { ... },
        "components": { ... }
    }
}
```

你的包中的大多数文件都会有两个顶级定义，`"format_version"` 和 `"minecraft:<file_type>"`。
格式版本定义了 Minecraft 将使用哪个版本的 Add-On 系统来读取此文件。对于我们的物品，我们将使用 `1.26.10` 以便我们可以使用最新功能。有关格式版本的更多信息，你可以查看[这里](/guide/format-version)。

第二个定义定义了这是什么类型的文件。在我们的情况下，因为这是一个物品定义，所以它是 `minecraft:item`。我们所有的信息都将放在这下面。这将始终包含一个 `description` 键。

让我们仔细看看 `"description"`：

<CodeHeader>ectoplasm.json > minecraft:item</CodeHeader>

```json
"description": {
    "identifier": "wiki:ectoplasm",
    "menu_category": {
        "category": "items"
    }
},
```

description 键包含 `identifier` 和任何其他所需信息。`identifier` 允许文件知道将组件应用到的物品。
`category` 键定义物品会出现在创造模式物品栏/配方书的哪个标签页中。有四个标签可供选择：`"construction"`、`"equipment"`、`"items"` 和 `"nature"`。如果未包含此键，则该物品不会出现在创造模式物品栏中，但你仍然可以通过使用 `/give` 获取该物品。

现在我们可以在 `components` 下实际定义我们物品的行为。这里我们只需放置我们希望物品具有的任何组件。
这将是我们的 `"minecraft:max_stack_size"` 组件。对于你可以使用的其他组件，请查看我们更深入的物品指南[这里](/items/item-components)。

<CodeHeader>ectoplasm.json > minecraft:item</CodeHeader>

```json
"components": {
    "minecraft:max_stack_size": 16
}
```

这样，我们就完全定义了我们物品的行为。这是你现在的文件应该看起来的样子。

<CodeHeader>BP/items/ectoplasm.json</CodeHeader>

```json
{
    "format_version": "1.26.10",
    "minecraft:item": {
        "description": {
            "identifier": "wiki:ectoplasm",
            "menu_category": {
                "category": "items"
            }
        },
        "components": {
            "minecraft:max_stack_size": 16
        }
    }
}
```

如果使用你的 Add-On 打开一个世界，你的物品应该出现在正确的菜单中，但不可见且名称奇怪。

这是因为我们还没有定义视觉外观。但是，你应该看到它按预期堆叠。在下一节中，我们将定义物品的纹理并将其分配给我们的物品。

## 物品视觉外观

现在我们有一个可以工作的物品，我们想为其添加纹理和名称。

纹理作为图片存储在资源包下的 `RP/textures` 中。为了让 Minecraft 知道在哪里使用哪个纹理，我们需要为其分配一个短名称，这样我们就可以访问它。

### 纹理

首先，我们需要为物品准备纹理。对于我们的灵质，我们将使用这张图片。

![ectoplasm.png](https://raw.githubusercontent.com/Bedrock-OSS/bedrock-examples/main/resources/guide/rp/textures/wiki/items/ectoplasm.png)

<Button link="https://raw.githubusercontent.com/Bedrock-OSS/bedrock-examples/main/resources/guide/rp/textures/wiki/items/ectoplasm.png">
    在此处下载纹理
</Button>

所有物品纹理都存储在 `RP/textures/wiki/items/` 中，其中 `wiki` 应该替换为你自己的命名空间。从这里开始，你可以创建任何你想要的子目录。
最好用物品的 _id_ 命名你的纹理图片文件，在我们的例子中它是 `ectoplasm.png`。
建议使用 `.png` 格式的图片，大小为 `16x16`，尽管 Minecraft 也接受其他格式，如 `.jpg` 或 `.tga`。

你的文件夹布局应该如下所示：

<FolderView :paths="[
    'RP/textures/wiki/items/ectoplasm.png'
]" />

### 短名称

短名称本质上是一个名称，分配给纹理的文件夹路径，因此每当我们想在哪里使用纹理时，我们将使用它的短名称而不是它的文件夹路径。

所有物品短名称都存储在一个名为 `item_texture.json` 的文件中，该文件位于 `RP/textures`。这包含短名称及其分配纹理的列表。

<CodeHeader>RP/textures/item_texture.json</CodeHeader>

```json
{
    "texture_data": { ... }
}
```

这里我们有一个顶级定义 `texture_data`，这是我们定义短名称的地方。

在 `texture_data` 下是我们物品短名称定义的列表。示例定义如下所示：

<CodeHeader>RP/textures/item_texture.json/texture_data</CodeHeader>

```json
"wiki:ectoplasm": {
    "textures": "textures/wiki/items/ectoplasm"
}
```

这里 `wiki:ectoplasm` 是我们的短名称，在 `textures` 下我们有了物品的路径。请注意，这是相对于资源包的，不包括文件扩展名。你的短名称应该简短且唯一。我们建议将其设置为我们为其分配物品的命名空间和 ID。

现在，每当我们想引用我们的图片时，我们将使用短名称 `wiki:ectoplasm`。

### 图标

为了最终将我们的纹理应用到我们的物品，我们将 `minecraft:icon` 组件添加到我们的物品定义中，并将其值设置为我们的短名称。

<CodeHeader>ectoplasm.json/minecraft:item/</CodeHeader>

```json
"components": {
    "minecraft:max_stack_size": 16,
    "minecraft:icon": "wiki:ectoplasm"
}
```

现在你的纹理应该出现在你的物品上。

### 物品名称

最后要添加的是为你的物品添加一个好的名称。目前它看起来像 `item.wiki:ectoplasm`。这是你的物品名称的翻译键，用于允许[本地化](/text/text-intro)。要设置它，我们只需要在语言文件中定义它。

我们在创建 `RP` 和 `BP` 时已经创建了这些文件，所以我们只需要添加它们。

<CodeHeader>RP/texts/en_US.lang</CodeHeader>

```lang
item.wiki:ectoplasm=Ectoplasm
```

现在当你进入你的世界时，你的物品应该有一个名称。

## 概览

现在你的第一个自定义物品，灵质，已经完成了！如果一切正确，该物品现在应该可以通过游戏中的 `/give` 命令获取，也会出现在你的创造模式物品栏中。

你的文件夹结构应该如下所示：

<FolderView :paths="[
    'RP/texts/en_US.lang',
    'RP/texts/languages.json',
    'RP/textures/wiki/items/ectoplasm.png',
    'RP/textures/item_texture.json',
    'RP/manifest.json',
    'RP/pack_icon.png',
    'BP/items/ectoplasm.json',
    'BP/texts/en_US.lang',
    'BP/texts/languages.json',
    'BP/manifest.json',
    'BP/pack_icon.png',
]" />

<Spoiler title="完整的 ectoplasm.json">

<CodeHeader>BP/items/ectoplasm.json</CodeHeader>

```json
{
    "format_version": "1.26.10",
    "minecraft:item": {
        "description": {
            "identifier": "wiki:ectoplasm",
            "menu_category": {
                "category": "items"
            }
        },
        "components": {
            "minecraft:max_stack_size": 16,
            "minecraft:icon": "wiki:ectoplasm"
        }
    }
}
```

</Spoiler>

<Spoiler title="完整的 item_texture.json">

<CodeHeader>RP/textures/item_texture.json</CodeHeader>

```json
{
    "texture_data": {
        "wiki:ectoplasm": {
            "textures": "textures/wiki/items/ectoplasm"
        }
    }
}
```

</Spoiler>

如果你遇到一些麻烦，请查看[故障排除页面](/items/troubleshooting-items)。如果这没有帮助，请将你的结果与[示例文件](https://github.com/Bedrock-OSS/bedrock-examples/tree/main/guide)进行比较。

## 你目前的进度

:::tip 你已学到

-   [x] 设置你的包
-   [x] 创建自定义物品
-   [x] 如何为物品格式化行为和资源文件
-   [x] 什么是组件以及如何使用它们
-   [x] 如何设置物品的纹理
-   [ ] 创建自定义实体
-   [ ] 创建实体的战利品、生成规则和自定义配方

:::

<Button link="/guide/custom-entity">下一步：自定义实体</Button>
