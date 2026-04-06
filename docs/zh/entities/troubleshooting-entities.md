---
title: 实体疑难解答
category: 通用
nav_order: 3
tags:
    - help
mentions:
    - SirLich
    - BlueFrog130
    - SmokeyStack
    - MedicalJewel105
    - aexer0e
    - ChibiMango
    - RonarsCorruption
description: 实体的疑难解答指南。
---

:::tip
本文包含关于_实体_的疑难解答信息。在继续之前，您应该阅读我们的[全局疑难解答](/guide/troubleshooting)文档。
:::

:::warning
请务必检查内容日志！
:::

## 0.0.0 - 您搞砸了

接受现实吧，某处肯定有问题。_任何_级别的_任何人_都会犯这些错误，所以不要生气，不要想着"我当然会那样做！"然后跳过一个步骤！

<Button link="#_1-0-0-are-both-packs-active">继续</Button>

## 1.0.0 - 两个包都启用了吗？

确保世界的资源包和行为包都已激活（避免此问题的一个很好的方法是在两个包的 manifest.json 文件中将每个包设置为另一个的依赖项，这样添加或删除一个包会自动添加/删除另一个包）

<Button link="#_2-0-0-determine-whether-the-issue-is-in-the-rp-or-the-bp">继续</Button>

## 2.0.0 - 确定问题是在 RP 还是 BP

您遇到的问题可以通过您的实体生成蛋在创造模式物品栏中的显示方式来显著缩小范围。即使您不希望实体有生成蛋，请暂时进行以下更改，直到您找到问题所在：

### 在 RP 中

确保 .entity 文件有一个自定义的 spawn_egg 对象，如下所示：

<CodeHeader></CodeHeader>

```json
"spawn_egg":{
    "base_color": "#FF0000",
    "overlay_color": "#FFFF00"
}
```

您选择的颜色需要是除 "#000000" 以外的颜色才能符合本指南。

### 在 BP 中

确保在 description 对象中将 `is_spawnable` 和 `is_summonable` 设置为 true，并将 `is_experimental` 设置为 `false`：

<CodeHeader></CodeHeader>

```json
"description":{
    "identifier": "wiki:example_entity",
    "is_spawnable": true,
    "is_summonable": true,
    "is_experimental": false
}
```

### 结果

我根本看不到生成蛋：<Button link="#_3-1-0-bp">去</Button>

我看到了实体的生成蛋，但它是黑色的，而且当生成或召唤它时实体不出现：<Button link="#step-3-2-0-rp-entity">去</Button>

我看到了实体的生成蛋，而且它有我选择的颜色，但实体仍然在生成或召唤时不出现：<Button link="#step-3-3-0-rp-resources-still-writing-because-this-is-going-to-be-extensive">去</Button>

## 3.0.0 - 定位具体问题

## 3.1.0 - BP

_即使在确保行为文件中将 "is_spawnable" 设置为 true 之后，您仍然在创造模式物品栏中看不到实体的生成蛋。_

这意味着游戏根本没有检测到实体的行为文件。造成这种情况的一些常见原因包括：

-   行为文件中的语法错误
-   文件夹名称错误

### 3.1.1 - 语法错误

.json 文件中的单个语法错误会导致整个文件损坏并被忽略。要检查您的文件没有语法错误，请访问 [Json Lint](https://jsonlint.com/)，将行为文件的内容粘贴到大框中，然后点击"Validate JSON"。
（注：虽然此网站会将 // 注释标记为错误，但 Minecraft 确实允许 .json 文件包含它们）

### 3.1.2 - 文件夹名称错误

确保包含行为文件的文件夹名为 "entities" 而不是 "entity"。在行为包中，文件夹通常命名为 "entities"，而在资源包中，它们通常命名为 "entity"。我知道。这并不令人愉快。

## 第 3.2.0 步 - RP .entity

_您确实在创造模式物品栏中看到了实体的生成蛋，但它是黑色的（而且可能有一个奇怪的名字 like "item.spawn_egg.entity.wiki:your_mob.name"），并且在生成/召唤时什么都没有出现。_

这意味着您有一个正常工作的行为文件，但出于某种原因，游戏没有将其与资源包中对应的 .entity 文件连接起来。造成这种情况的一些常见原因包括：

-   .entity 文件中的语法错误
-   实体的标识符不匹配
-   .entity 文件指向的一个或多个资源无效
-   检查您的 RP 文件夹是 "entity"，而您的 BP 文件夹是 "entities"

### 第 3.2.1 步 - 语法错误

.json 文件中的单个语法错误会导致整个文件损坏并被忽略。要检查您的文件没有语法错误，请访问 [Json Lint](https://jsonlint.com/)，将行为文件的内容粘贴到大框中，然后点击"Validate JSON"。
（注：虽然此网站会将 // 注释标记为错误，但 Minecraft 确实允许 .json 文件包含它们）

### 第 3.2.2 步 - 标识符不匹配

行为文件中的 "identifier" 必须与 .entity 文件中的完全相同，包括命名空间（冒号之前的部分，如 `minecraft:bat` 中的 `minecraft`），并且它们都不应该使用 `minecraft` 作为命名空间，除非它是默认生物。

您的标识符也不应包含任何空格或特殊字符（冒号之间的命名空间和 ID 除外），并且由于极少数边缘情况错误的原因，您应该避免让命名空间或 ID 以除小写字母以外的任何字符开头。以数字或大写字母开头_应该_不再是问题，但游戏早期版本中并不总是这样，因此由于这个原因，过去曾零星出现过以数字或大写字母开头会产生意外效果的情况。因此，如果可能的话，最好避免这种情况。

### 第 3.2.3 步 - 无效资源

.entity 文件中的实体 ID 与您在行为文件中使用的 ID 不匹配。

## 第 3.3.0 步 - RP 资源：（进行中）

_您确实在创造模式物品栏中看到了实体的生成蛋，而且它确实具有您在 .entity 文件的 "spawn_egg" 对象中指定的正确颜色，但当您生成/召唤时什么都没有出现，或者只有一个阴影。_

这意味着您有一个有效的 `.behavior` 和 `.entity` 文件，但 .entity 文件中的某些内容指向一个损坏的文件或另一个指向损坏文件的有效文件。

首先：

-   不可见，没有阴影 ->  RP 引用问题：<Button link="#_3-3-1-invisible-no-shadow">去</Button>
-   不可见，存在阴影 -> 几何问题：<Button link="#_3-3-2-invisible-shadow-exists">去</Button>
-   可见，纹理奇怪 -> 纹理问题：<Button link="#_3-3-3-visible-weird-texture">去</Button>
-   可见，可见性奇怪 -> 材质问题：<Button link="#_3-3-4-visible-weird-visibility-stuff">去</Button>

### 3.3.1 - 不可见，没有阴影

这可能是由于...引起的。首先确保您的实体在正确位置（没有消失，例如它没有执行 instant_despawn）。

### 3.3.2 - 不可见，存在阴影

这种情况可能是由于几何错误或材质错误造成的（如果使用半透明/即发光纹理）。

1.  确保几何名称没有拼写错误，几何文件有效，几何偏移正确。
2.  确保您使用了正确的材质。例如，某些材质仅支持发光纹理。
3.  检查您的渲染控制器。也许问题在其中。

### 3.3.3 - 可见，纹理奇怪

### 3.3.4 - 可见，可见性奇怪
