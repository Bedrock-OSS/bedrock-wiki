---
title: 区域效果云
description: 学习如何使用和操作区域效果云。
category: 教程
tags:
    - intermediate
mentions:
    - Sprunkles137
    - MedicalJewel105
    - Nytreon
    - QuazChick
---

**区域效果云**（内部名称为 `minecraft:area_effect_cloud`）是一种具有许多独特属性的特殊实体。通常这些实体通过投掷滞留药水来创建，但借助结构和一些 NBT 编辑技巧，我们可以以非常强大的方式操控它们来进行地图制作。

## 概述

区域效果云具有几个我们可以利用的特殊功能：

-   作为[伪实体](/entities/dummy-entities)，区域效果云具有极高的性能。它们经过优化，不会与世界或其他实体发生碰撞。这使得它们非常适合用于玩家或其他实体周围的场景。
-   区域效果云完全静止，只能通过命令移动。这对于需要精确定位的场景来说非常理想。
-   区域效果云可以配置为施加药水效果。持续时间可以精确到刻，还可以设置效果是否为环境效果、是否在屏幕上显示、是否发射粒子等。
-   运行时标识符为 `minecraft:area_effect_cloud` 的实体也继承这些相同的属性。

## 放置区域效果云

要创建区域效果云，我们首先需要创建一个包含它的结构。区域效果云必须具有特定的 NBT 数据才能正常存在。

### NBT 编辑器

推荐使用以下 NBT 编辑器之一来编辑结构文件：

-   [NBT Studio](https://github.com/tryashtar/nbt-studio)（tryashtar 开发的独立程序）
-   [NBT Viewer](https://marketplace.visualstudio.com/items?itemName=Misodee.vscode-nbt)（Misode 开发的 Visual Studio Code 扩展）

### 结构文件

为方便起见，本文包含一个预制结构文件供你下载和使用。其中包含一个半径最小（0.5 格）且存在时间最长（`2^31 - 1` 刻，约 29,826 小时）的区域效果云。

<Button link="/assets/packs/entities/area-effect-clouds/area_effect_cloud.mcstructure" download>
    下载 MCSTRUCTURE
</Button>

有关编辑结构文件的参考文章：[.mcstructure](/nbt/mcstructure)

### NBT 格式

| 标签                     | 类型    | 描述                                                                                                                       |
| ---------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `Duration`             | Integer | 云在消失前存在的时间长度，以刻为单位。值为 0 会导致云立即消失。              |
| `DurationOnUse`        | Integer | 施加效果时持续时间的变化量。                                                                     |
| `InitialRadius`        | Float   | 创建时云的半径大小。低于 0.5 的值会导致云立即消失。                              |
| `RadiusChangeOnPickup` | Float   | 决定被玻璃瓶拾取时效果半径的变化量。这用于末影龙吐息云。 |
| `RadiusOnUse`          | Float   | 施加效果时半径的变化量。                                                                       |
| `RadiusPerTick`        | Float   | 每刻半径的变化量。                                                                                           |
| `ParticleColor`        | Integer | 粒子效果的颜色，以十进制存储。                                                                              |
| `ParticleId`           | Integer | 用于存储组件粒子 ID 的遗留值。无实际效果。                                                                  |
| `PotionId`             | Short   | 创建时云的药水效果 ID。无实际效果。                                                                        |
| `ReapplicationDelay`   | Integer | 效果可以施加的间隔时间，以刻为单位。                                                                           |
| `mobEffects`           | List    | 描述应施加哪些药水效果。                                                                                  |

以下是 `mobEffects` 标签的参数。

| 标签                               | 类型    | 描述                                                                                                                                                                |
| --------------------------------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Ambient`                         | Byte    | 定义此效果的粒子是否应为半透明。                                                                                                      |
| `Amplifier`                       | Byte    | 此药水效果的强度。                                                                                                                                        |
| `DisplayOnScreenTextureAnimation` | Byte    | 施加效果时显示屏幕动画。这用于不祥之兆、图腾和村庄英雄，在获得效果后显示浮动图标。 |
| `Duration`                        | Integer | 此效果的持续时间，以刻为单位。                                                                                                                   |
| `DurationEasy`                    | Integer | 简单模式下效果消失前的刻数。                                                                                                                 |
| `DurationNormal`                  | Integer | 普通模式下效果消失前的刻数。                                                                                                               |
| `DurationHard`                    | Integer | 困难模式下效果消失前的刻数。                                                                                                                 |
| `Id`                              | Byte    | 此效果的药水效果 ID。                                                                                                                                      |
| `ShowParticles`                   | Byte    | 定义此效果的粒子是否应出现。                                                                                                              |

## 使用区域效果云

放置区域效果云后，我们可以像使用任何其他标记/伪实体一样使用它。

使用区域效果云时需要考虑的一些事项：

-   它们使用粒子发射器 `minecraft:mobspell_lingering`。要避免看到粒子，资源包必须修改此粒子发射器。
-   实体 `minecraft:area_effect_cloud` 不会向客户端发送其位置更新。这意味着它将固定出现在生成位置。仍然可以使用 `/teleport` 移动它。

### 脚本工具

为简化区域效果云的操作，提供了以下工具。它导出一个函数 `registerOnEntityLoad`，在实体加载时调用回调函数。这可用于在将生成延迟到结构管理器后访问区域效果云。

<Button link="/assets/packs/entities/area-effect-clouds/entityLoadHandler.js" download>
    下载工具
</Button>

<CodeHeader>使用示例：</CodeHeader>

```js
import { world, DimensionLocation } from "@minecraft/server";
import { registerOnEntityLoad } from "./entityLoadHandler.js";

/**
 * @param {DimensionLocation} location
 */
function spawnMarker(location) {
    const structureLocation = {
        x: Math.floor(location.x),
        y: Math.floor(location.y),
        z: Math.floor(location.z),
    };

    // 加载保存在 "BP/structures/wiki/area_effect_cloud.mcstructure" 的结构
    world.structureManager.place("wiki:area_effect_cloud", location.dimension, structureLocation);

    registerOnEntityLoad("minecraft:area_effect_cloud", (entity) => {
        entity.teleport(location);
        entity.addTag("origin");
        // 等等。
    });
}
```
