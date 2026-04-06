---
title: Vanilla 方块模型
description: 内置于游戏中供自定义方块使用的方块模型。
category: 文档
tags:
    - beginner
related:
    - /blocks/block-models
license: true
mentions:
    - QuazChick
---

虽然自定义方块无法使用 vanilla [方块形状](/blocks/block-shapes)，Mojang 提供了几个 `minecraft` 命名空间模型来复制它们的外观！

:::danger 硬编码
目前，vanilla 方块模型不是数据驱动的，因此无法修改也无法在 vanilla 资源包中找到 JSON 文件。

这也意味着它们与[几何](/blocks/block-components#几何)组件的 `bone_visibility` 和 `culling` 参数不兼容。
:::

## 应用 Vanilla 模型

Vanilla 方块模型的应用方式与[自定义方块模型](/blocks/block-models)相同，使用[几何](/blocks/block-components#几何)组件，纹理在[材质实例](/blocks/block-components#材质实例)中定义：

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:geometry": "minecraft:geometry.full_block",
"minecraft:material_instances": {
    "*": {
        "texture": "cobblestone"
    }
}
```

## Vanilla 模型列表

<Table data="models.json" />