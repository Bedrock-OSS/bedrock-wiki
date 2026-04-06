---
title: "粒子入门"
category: 通用
tags:
    - guide
mentions:
    - SirLich
    - MedicalJewel105
    - TheItsNameless
description: Minecraft Bedrock 粒子入门指南。
---

## 粒子系统

[粒子系统](https://www.wikiwand.com/en/Particle_system)是游戏物理、运动图形和计算机图形学中的一项技术，使用许多小精灵图来创建逼真的效果，如烟雾、火或昆虫群。你可以通过使用自己的自定义纹理和运动逻辑，在 Minecraft Bedrock 版中创建新的粒子系统。这使得粒子变得非常有趣和强大！

粒子中的 MoLang 集成也极为发达，允许你在不同粒子之间，或在实体和粒子之间传递数据。

### 粒子

“粒子”或“粒子实例”是一个放置在 3D 空间中的单个精灵图（纹理），它有自己的逻辑来决定如何移动和改变外观。粒子的例子包括：

-   一片单独的雪花
-   一滴单独的雨滴
-   一缕单独的烟雾

### 发射器

“发射器”或“粒子发射器”是一个可以生成许多粒子的系统，可以一次性生成（爆炸），也可以随时间生成（持续）。发射器有自己的逻辑来决定如何移动、生成多少粒子以及在哪里生成。发射器的例子包括：

-   暴风雪（生成雪花）
-   暴风雨（生成雨滴）
-   冒烟的烟囱（生成烟雾）

## 创建你的第一个粒子

要创建粒子，你需要资源包、纹理和粒子定义文件：

<FolderView :paths="[
    'RP/particles/snowflake.json',
    'RP/textures/wiki/particles/snowflake.png'
]" />
 
你可以使用 [Snowstorm](https://jannisx11.github.io/snowstorm/) 来创建粒子。
