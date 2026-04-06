---
title: Add-On 详解
category: 指南
description: Add-On 的基础知识
nav_order: 2
prefix: "2. "
mentions:
    - SirLich
    - Dreamedc2015
    - sermah
    - cda94581
    - BluMonkie
    - TheItsNameless
    - MedicalJewel105
    - ChibiMango
    - profeplaysminecraft
    - aym-i
    - SmokeyStack
    - QuazChick
---

## 什么是 Add-On？

Add-On 允许我们通过_修改_或_移除_现有内容并_添加_我们自己的内容来更改 Minecraft 体验的内容。Add-On 非常强大，可以创建自定义实体、物品和方块，以及自定义战利品表和合成配方等功能。你的想象力就是极限！

Add-On 主要使用 [json](/guide/understanding-json) 编写，这是一种结构化数据格式。一个 Add-On 本质上是一组 json 文件、图像和声音的集合，它们以某种方式修改或添加游戏内容。

:::tip 脚本 API
自本指南编写以来，"Add-On"的定义已扩展到包含 JavaScript 脚本 API。你可以在本站的其他位置了解更多关于此 API 的信息。
:::

## 行为包和资源包有什么区别？

Add-On 分为两种包类型：资源包（Resource Pack）和行为包（Behavior Pack）。两者都可以独立运行，但通常一起使用。当你同时拥有资源包和行为包时，这被称为一个_Add-On_。

### 资源包

资源包（Resource Pack），也称为_客户端_或 RP，负责 Add-On 中的_视觉效果_和_声音_。包括以下内容：

-   纹理
-   声音
-   几何模型
-   动画
-   粒子效果

### 行为包

行为包（Behavior Pack），也称为_服务器_或 BP，负责 Add-On 的_逻辑_。包括以下内容：

-   实体的行为方式
-   合成配方
-   战利品表
-   自定义函数

### 包之间的通信

在大多数情况下，你会同时拥有 RP 和 BP。这些包可以相互通信或需要彼此才能正常运行，也就是说，在一个包中定义的资源可以在另一个包中访问。例如，创建自定义实体时，你需要两个文件：

-   一个 RP 实体定义文件，描述你的实体_外观_
-   一个 BP 实体定义文件，描述你的实体_行为_

## 下一步

:::tip 你已学到
-   [x] Add-On 可以修改 Minecraft 内容或添加自己的内容
-   [x] Add-On 主要使用 JSON 编写
-   [x] 一个 Add-On 分为**资源包**和**行为包**：
    -   资源包包含纹理、声音等，控制游戏的外观
    -   行为包包含实体行为、合成配方等，控制游戏的逻辑

:::

<Button link="/guide/software-preparation">下一步：软件准备</Button>
