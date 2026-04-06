---
title: 自定义玻璃
example: custom_glass
description: 本页面将向你展示如何使用材质实例在完整方块上允许纹理半透明。
category: 原版重制
tags:
    - beginner
    - easy
license: true
mentions:
    - Eko-byte
    - QuazChick
    - SmokeyStack
---

:::tip 格式版本 1.26.10
此示例需要基本的方块知识才能理解。
在开始之前请查看[方块指南](/blocks/blocks-intro)。
:::

制作玻璃方块看起来像是一项简单的任务，但是当你第一次尝试时，你的方块可能显示为不透明。
本页面将向你展示如何使用[材质实例](/blocks/block-components#材质实例)允许纹理半透明以及[剔除规则](/blocks/block-culling)隐藏不需要的方块面。

最终你应该能够创建类似这样的东西！

![A collection of custom glass blocks](showcase.png)

## 方块模型

[Vanilla 方块模型](/blocks/vanilla-block-models)无法应用剔除规则。
因此，我们需要创建自己的完整方块模型，以便我们的玻璃正确显示。

<Spoiler title="自定义玻璃模型 JSON">

<ExampleFile path="RP/models/blocks/custom_glass.geo.json" />

</Spoiler>

## 初始方块 JSON

<CodeHeader>BP/blocks/custom_glass.json</CodeHeader>

```json
{
    "format_version": "1.26.10",
    "minecraft:block": {
        "description": {
            "identifier": "wiki:custom_glass",
            "menu_category": {
                "category": "construction",
                "group": "minecraft:itemGroup.name.glass"
            }
        },
        "components": {
            "minecraft:light_dampening": 0, // 不阻挡任何光线（彩色玻璃设置为15）
            "minecraft:loot": "loot_tables/empty.json", // 没有精准采集不掉落
            "minecraft:geometry": {
                "identifier": "geometry.custom_glass" // 一个我们可以稍后应用剔除的自定义完整方块模型
            },
            "minecraft:material_instances": {
                "*": {
                    "texture": "wiki:custom_glass", // 在 terrain_texture.json 中定义的纹理简称
                    "render_method": "blend" // 允许半透明
                }
            }
        }
    }
}
```

## 应用声音

<ExampleFile path="RP/blocks.json" />

## 玻璃方块剔除

目前，我们的自定义玻璃没有应用任何剔除。

这意味着，当多个玻璃方块彼此相邻时，会有分隔它们的面：

![A collection of custom glass blocks without culling](without_culling.png)

### 方块剔除 JSON

<Spoiler title="自定义玻璃剔除规则 JSON">

<ExampleFile path="RP/block_culling/custom_glass.json" />

</Spoiler>

### 应用剔除规则

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:geometry": {
    "identifier": "geometry.custom_glass",
    "culling": "wiki:culling.custom_glass"
}
```