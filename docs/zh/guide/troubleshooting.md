---
title: 故障排除
category: 额外
description: 简单的 Add-On 故障排除指南。
prefix: "c. "
nav_order: 3
tags:
    - help
mentions:
    - SirLich
    - Joelant05
    - destruc7ion
    - Dreamedc2015
    - MedicalJewel105
    - Lufurrius
    - SmokeyStack
    - QuazChick
---

为 Minecraft 创建 Add-On 是一个一旦你掌握了窍门就相当简单的过程。第一次通常是一个令人沮丧的、容易出错的过程。本文档包含一些修复那些讨厌的错误的技巧和诀窍，以及最佳实践信息。

在跳入特定领域的故障排除提示之前，请先阅读整个页面。

## 重新加载

首先，你应该始终重新加载 Minecraft。这意味着完全关闭游戏然后重新打开它。这可以捕获许多错误，特别是那些与通过文件路径访问的资源相关的错误，如纹理或战利品表。

## 环境

防止讨厌的错误的最佳方法是在正确的环境中工作。你应该查看[软件准备文档](/guide/software-preparation)以获取编辑器推荐。

最重要的部分是获取 JSON linter（或使用[在线 JSON linter](https://jsonlint.com/)），并将你的包存储在 `development_behavior_packs` 和 `development_resource_packs` 中。
如果你的 Add-On 在普通文件夹中，你可能会遇到"包缓存"问题，你在一个位置编辑文件，但游戏仍在使用旧文件。

## 内容日志

:::warning 使用内容日志！
内容日志是你调试 Add-On 最好的工具。请不要跳过此步骤！
:::

:::tip
错误不会在世界的加载之间清除，所以你在内容日志中看到的错误可能是之前加载时的_旧_错误。
:::

"内容日志"是在你的包中发现的问题列表。Minecraft 每次加载你的世界或更改全局资源包时都会生成此列表。

它可以捕获以下问题：

-   错误的纹理路径
-   拼写错误的组件
-   错误的 JSON 格式

内容日志可以在 `设置 > 创作者` 中开启。内容日志将在游戏启动时显示在游戏中，如果在游戏过程中发生更多错误也会显示。

![](/assets/images/guide/content_log.png)

### 内容日志文件

内容日志以 `.txt` 格式保存在你的文件中：

-   Windows: `%APPDATA%\logs`
-   Android: `/storage/emulated/0/Android/data/com.mojang.minecraftpe/files/games/com.mojang/logs`

## 使用原版示例

你可以在这里找到原版资源包和行为包[here](https://github.com/Mojang/bedrock-samples)。
将你的代码与原版进行比较可以帮助你识别任何问题！

## JSON 模式

JSON 模式是文件验证的宝贵工具。你可以在[这里](/meta/using-schemas)了解更多关于 JSON 模式的信息。

## 故障排除你的 Add-On

### 方块

<Button link="/blocks/troubleshooting-blocks">排查你的方块</Button>

### 实体

<Button link="/entities/troubleshooting-entities">排查你的实体</Button>

### 物品

<Button link="/items/troubleshooting-items">排查你的物品</Button>
