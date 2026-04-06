---
title: 自定义合成
category: 实用创作
tags:
    - easy
mentions:
    - TwigYT
    - zheaEvyline
description: 使用漏斗模拟合成台的命令。
---

## 简介

[来自基岩版命令社区 (BCC) Discord](https://bedrockcommands.org/)

在本教程中，你将学习如何使用漏斗模拟合成台，从而创建一个只需一条命令的"自定义合成"系统！一些用例包括：为服务器或冒险地图制作带有附魔或自定义名称的武器。

注意：本教程中自定义合成器的位置是固定的。若要采用更动态的方法，允许你将其放置在世界的任何位置，可以查看 @CrunchyCookie's YouTube 视频[自定义合成](https://www.youtube.com/watch?v=pzQzldaSORs)。

:::tip
要创建使用合成台的自定义合成配方，请参阅[此](/loot/recipes) wiki 页面。
:::

## 设置

对于此系统，每个自定义合成物品配方需要两个漏斗：

1. 包含配方的漏斗。
2. 包含配方输出的漏斗。

示例：

<WikiImage src="recipe.png" alt="自定义配方" width="200" pixelated />
<WikiImage src="recipe-output.png" alt="自定义配方输出" width="200" pixelated />

这两个漏斗通常放置在命令方块附近，或放置在除管理员外玩家无法访问的地方。

要完成设置，在你希望玩家能够进行自定义合成的位置放置最后一个漏斗。这将用作你的自定义**合成器**。

## 系统

<CodeHeader>BP/functions/wiki/custom_crafting.mcfunction</CodeHeader>

```yaml
## 如果配方匹配合成器：将配方输出克隆到合成器
execute if blocks <recipe> <recipe> <crafter> masked run clone <recipe_output> <recipe_output> <crafter>
```

![一个重复命令方块](/assets/images/commands/command-block-chain/1.png)

**定义：**

-   `<crafter>` — 用作**合成器**的漏斗的输入 (x,y,z) 坐标。
-   `<recipe>` — 包含你**配方**的漏斗的输入 (x,y,z) 坐标。
-   `<recipe_output>` — 包含配方**输出**的漏斗的输入 (x,y,z) 坐标。

为方便起见，你可以下载 @TwigYT 分享的 .mcstructure 示例：

<Button link="/assets/packs/commands/custom-crafting/custom_crafter_example.mcstructure" download>
    下载示例 MCSTRUCTURE
</Button>

<WikiImage
    src="completed-setup.png"
    alt="完成设置"
    width=800
/>

> 注意：使用结构方块导入结构后，你仍然需要根据上述定义替换命令方块中的值。

## 技巧

你可以添加 playsound 命令来稍微增强合成体验，如下所示：

<CodeHeader>BP/functions/wiki/custom_crafting.mcfunction</CodeHeader>

```yaml
## 如果配方匹配合成器：合成时播放声音（可选）
execute if blocks <recipe> <recipe> <crafter> masked positioned <crafter> run playsound smithing_table.use @a[r=7]
## 如果配方匹配合成器：将配方输出克隆到合成器
execute if blocks <recipe> <recipe> <crafter> masked run clone <recipe_out> <recipe_output> <crafter>
```

![两个命令方块的链条](/assets/images/commands/command-block-chain/2.png)

更近一步，你还可以使用 [MBE](/commands/block-entities) 或 [Fox MBE](/commands/display-entities) 来赋予漏斗合成台或锻造台的纹理作为覆盖层。