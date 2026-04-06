---
title: 持有物品
description: 学习如何让实体生成时手中持有物品。
category: 教程
tags:
    - intermediate
mentions:
    - pieterdefour
    - SirLich
    - solvedDev
    - stirante
    - Joelant05
    - destruc7ion
    - Dreamedc2015
    - sermah
    - 7dev7urandom
    - legopitstop
    - QuazChick
---

::: tip
本教程假设你具有实体、战利品表和Blockbench的基础知识。
:::

在本教程中，你将学习让实体生成时手中持有物品。
我们将使用自定义的 `mandalorian_armorer` 实体和自定义的 `hammer` 物品作为示例。

## 模型

首先，你需要一个在Blockbench中有一个名为 `rightItem` 的骨骼的模型。
现在设置这个骨骼的枢轴点位置，使其位于你希望实体持有物品的位置。

![](blockbench.png)

## 装备组件

现在你需要在实体的组件列表中添加一个 `minecraft:equipment` 组件，并添加一个包含所需物品的战利品表。

在我们的示例中，它看起来像这样：

<CodeHeader>BP/entity/mandalorian.json#components</CodeHeader>

```json
"minecraft:equipment": {
    "table": "loot_tables/wiki/entities/gear/mandalorian.json"
}
```

## 战利品表

最后，为你的实体添加战利品表。它需要在行为包中的 `loot_tables/<你的命名空间>/entities/<你的战利品表名称>.json`。在我们的例子中，它叫做 `mandalorian.json`。

:::warning
这与死亡时掉落的不同。所以确保它有一个不同的名称。
:::

要让实体总是生成相同的物品，添加以下战利品表：

<CodeHeader>BP/loot_tables/wiki/entities/gear/mandalorian.json</CodeHeader>

```json
{
    "pools": [
        {
            "rolls": 1,
            "entries": [
                {
                    "type": "item",
                    "name": "wiki:hammer"
                }
            ]
        }
    ]
}
```

如果一切顺利，你会得到如下结果：

![](finished_result.png)

## 常见问题

-   **问题：** 持有的物品不显示

    **原因：** 你的实体包含多个几何体变体。
