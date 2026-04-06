---
title: 方块纹理变化
description: 方块纹理变化是指方块类型可以有多个纹理，根据其在世界中的位置随机应用到方块上。
category: 视觉
tags:
    - intermediate
mentions:
    - SirLich
    - solvedDev
    - Hatchibombotar
    - SmokeyStack
    - MedicalJewel105
    - QuazChick
---

:::tip 格式版本 1.26.10
当将纹理变化与[材质实例](/blocks/block-components#材质实例)组件一起使用时，确保你的方块JSON的 `format_version` 是 1.21.110 或更高版本。
:::

方块纹理变化是指方块类型可以有多个纹理，根据其在世界中的位置随机应用到方块上。
这对方块很有用，如沙砾或草方块，某些方块可能有轻微变化，如小石子，而其他方块则没有。

**问题：**

-   引用纹理集文件的变体不使用定义的高度图、MER 或法线贴图文件（[MCPE-126617](https://bugs.mojang.com/browse/MCPE-126617)）。

## 应用纹理变化

要启用纹理变化，请在资源包的 `textures` 文件夹中创建 `terrain_texture.json` 文件。

此文件包含要包含在地形[纹理图集](/concepts/texture-atlases)中的方块纹理列表。
变化的图集条目有一个 `variations` 参数，这是一个不同纹理的数组，将随机显示在方块上。
通过使用 `weight` 参数，某些纹理变体可以比其他更常见（参见[加权纹理变化](#加权纹理变化)）。

以下是為 vanilla 沙砾方块创建3个纹理变化的示例：

-   创建或修改三个沙砾纹理，命名为 `gravel0.png`、`gravel1.png` 和 `gravel2.png`。
-   将 `gravel0.png`、`gravel1.png` 和 `gravel2.png` 文件复制到 `path` 参数指定的位置。
    如果你想有序，这可以包含额外的文件夹。
-   将以下内容添加到 `gravel` 纹理图集条目：

<CodeHeader>RP/textures/terrain_texture.json</CodeHeader>

```json
{
    "texture_data": {
        "gravel": {
            "textures": {
                "variations": [
                    { "path": "textures/blocks/gravel0" },
                    { "path": "textures/blocks/gravel1" },
                    { "path": "textures/blocks/gravel2" }
                ]
            }
        }
    }
}
```

## 加权纹理变化

使用上面的示例后，你可能想调整权重，编辑 `terrain_texture.json` 以包含如下所示的权重字段。

要计算纹理变化的可能性，将所有权重相加（本例中为 70 + 20 + 10 = 100），然后用权重除以这个总数。例如，`gravel0` 变化被选中的概率是 70 ÷ 100，即 70%。

<CodeHeader>RP/textures/terrain_texture.json</CodeHeader>

```json
{
    "texture_data": {
        "gravel": {
            "textures": {
                "variations": [
                    { "path": "textures/blocks/gravel0", "weight": 70 },
                    { "path": "textures/blocks/gravel1", "weight": 20 },
                    { "path": "textures/blocks/gravel2", "weight": 10 }
                ]
            }
        }
    }
}
```