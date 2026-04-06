---
title: 重新贴图生蛋
description: 更改实体生蛋的默认纹理。
category: 教程
tags:
    - beginner
mentions:
    - SirLich
    - Joelant05
    - MedicalJewel105
    - aexer0e
    - QuazChick
---

自定义实体将自动获得一个生蛋。
这个生蛋可以在创造模式物品栏中找到，名称类似于 `item.spawn_egg.entity.wiki:custom_entity.name`。
如果你想重命名你的生蛋以及设置纹理，你可以在lang文件中进行。

在本教程中，我们将重新贴图生蛋，使其看起来更像你生成的物品，而不那么像一个蛋。

## 创建纹理

你可以使用Blockbench软件轻松截取实体的截图。加载模型，然后从下拉菜单中选择“导出截图”。

如果你不喜欢这样的图片，你也可以创建自己的像素艺术，或者使用任何你喜欢的图片，只要图片是正方形的。

## 添加纹理

将纹理文件添加到 `RP/textures` 下。
强烈建议在你的附加包中为纹理设置专用文件夹，以避免与其他附加包不兼容。

在wiki上，我们将纹理保存在 `RP/textures/wiki` 文件夹中，因此纹理可以位于 `RP/textures/wiki/items/spawn_egg/custom_entity.png`。

## 为纹理命名

现在我们需要为纹理提供一个简称。这可以在物品纹理图谱文件中完成：

<CodeHeader>RP/textures/item_texture.json</CodeHeader>

```json
{
    "texture_data": {
        "wiki:custom_entity_spawn_egg": {
            // "wiki:custom_entity_spawn_egg" 是纹理的简称，我们可以在后面引用它
            "textures": "textures/wiki/items/spawn_egg/custom_entity"
        }
        // 在这里添加更多生蛋纹理
    }
}
```

## 使用新纹理：

现在我们可以在资源包实体文件中使用我们的新纹理：

<CodeHeader>RP/entity/custom_entity.json#description</CodeHeader>

```json
"spawn_egg": {
    "texture": "wiki:custom_entity_spawn_egg", // "wiki:custom_entity_spawn_egg" 应该匹配我们在步骤1中创建的纹理简称
    "texture_index": 0
}
```

现在去测试吧！
