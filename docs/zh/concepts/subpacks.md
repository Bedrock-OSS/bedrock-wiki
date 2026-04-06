---
title: 子包
mentions:
    - SirLich
    - solvedDev
    - Joelant05
    - ChilRx
    - SmokeyStack
    - MedicalJewel105
    - TheItsNameless
description: 子包允许你在不同的附加组件“配置”之间进行选择。
---

## 什么是子包？

子包允许你在不同的附加组件“配置”之间进行选择。

它们原本用于根据不同的内存容量加载不同的纹理分辨率，但也可用于创建行为和资源包中的文件变体。可以通过点击齿轮图标并调整滑块来选择这些变体。

## 子包如何工作？

放置在子包文件夹中的文件将覆盖主附加组件文件夹中的文件（如果选择了该子包）。例如，如果你的附加组件同时包含 `RP/textures/wiki/entities/ghost.png` 和 `RP/subpacks/pack_1/textures/wiki/entities/ghost.png`，当选择子包 `pack_1` 时，第二个图像文件将替换第一个。

有关文件如何相互覆盖的更多信息，请参阅我们的[覆盖默认资源](/concepts/overwriting-assets)页面。

## 创建子包

-   首先需要在你的 `BP`/`RP` 根目录内创建一个 `subpacks` 文件夹。
-   然后在 `subpacks` 文件夹内为每个想要的子包添加一个文件夹，例如：

<FolderView :paths="[
    'RP/subpacks/subpack_1',
    'RP/subpacks/subpack_2'
]" />

-   在这些文件夹中的每一个里，你可以添加每个子包的内容。
    这可以是通常放在你的行为包或资源包中的任何内容，例如：

<FolderView :paths="[
    'RP/subpacks/subpack_1/textures/wiki/blocks/dirt.png',
    'RP/subpacks/subpack_1/textures/wiki/items/example_item.png',
    'RP/subpacks/subpack_2/textures/wiki/blocks/dirt.png',
    'RP/subpacks/subpack_2/textures/wiki/items/example_item.png'
]" />

## 清单部分

要在清单中注册子包，需要添加 `subpacks`，其中包含一个子包数组。

示例：

<CodeHeader>RP/manifest.json</CodeHeader>

```json
{
    "format_version": 2,
    "header": {
        "name": "Pack Name",
        "description": "Pack Description",
        "uuid": "2fc2dd6f-86cb-4370-af70-21490a1ae471",
        "version": [1, 0, 0],
        "min_engine_version": [1, 13, 0]
    },
    "modules": [
        {
            "type": "resources",
            "uuid": "f6821b4a-1854-44fc-a8a4-0c2847ffda46",
            "version": [1, 0, 0]
        }
    ],
    "subpacks": [
        {
            "folder_name": "subpack_1",
            "name": "First Subpack",
            "memory_tier": 0
        },
        {
            "folder_name": "subpack_2",
            "name": "Second Subpack",
            "memory_tier": 1
        }
    ]
}
```

-   `name` - 选择子包时显示的名称。

-   `memory_tier` - 设备必须拥有的内存量才能启用此子包。1 个内存层级 = 0.25 GB。

-   `folder_name` - 用于此子包的文件夹名称，例如在上面的示例中，这将是 `subpack_1` 或 `subpack_2`。

## 已知事项

如果你只添加一个子包，在子包选择部分会有 2 个选项，但是第二个分辨率（无子包）**不会**使根文件夹中的内容覆盖子包。

设备上默认选择的子包将是该设备可用的最高内存层级的子包。如果有多个相同内存层级的子包，则选择的子包将是该内存层级子包数组中的最后一个子包。

要更改活动子包，请转到资源包设置并找到该资源包。按下齿轮/设置图标并滑动滑块以更改活动子包。
