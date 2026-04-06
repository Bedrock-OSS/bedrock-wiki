---
title: contents.json
description: 列出包中每个文件的文件。
mentions:
    - MedicalJewel105
    - Osaxely
    - SirLich
    - solvedDev
    - Joelant05
    - Jorginhor
    - TheItsNameless
    - QuazChick
---

`contents.json` 是一个_可能_用于让游戏更轻松地处理包文件的文件。你的包中不需要这个文件也能正常工作。

它的主要目的是允许 Marketplace 内容中的文件被加密，但它也包含在未加密的默认包中。

## JSON 格式

`contents.json` 文件位于包目录的根目录，与包的 `manifest.json` 位于同一位置。它包含在 `content` 参数下的数组形式中列出包中包含的文件列表。

每个 `content` 条目可以包含两个参数：

-   `path` — 文件相对于包根目录的路径。这必须包含文件扩展名。
-   `key`（可选）— 用于解密已加密文件的密钥。

<CodeHeader>RP/contents.json</CodeHeader>

```json
{
    "content": [
        { "path": "animation_controllers/custom_entity.animation_controllers.json" },
        { "path": "animations/my_animation.animations.json" },
        { "path": "entity/custom_entity.entity.json" },
        { "path": "texts/en_US.lang" },
        { "path": "textures/wiki/blocks/custom_block.png" },
        { "path": "textures/textures_list.json" },
        { "path": "contents.json" },
        { "path": "manifest.json" }
    ]
}
```

<FolderView :paths="[
    'RP/animation_controllers/custom_entity.animation_controllers.json',
    'RP/animations/my_animation.animations.json',
    'RP/entity/custom_entity.entity.json',
    'RP/texts/en_US.lang',
    'RP/textures/wiki/blocks/custom_block.png',
    'RP/textures/textures_list.json',
    'RP/contents.json',
    'RP/manifest.json',
]" />

## 自动化流程

`contents.json` 文件可以由游戏自动生成！让 Minecraft 为你生成这个文件意味着你不会在尝试创建它时出错。

但是，必须先准备该文件。在你的附加组件根目录中创建一个名为 `contents.json` 的新空文件，并添加空括号。

<CodeHeader>BP|RP/contents.json</CodeHeader>

```json
{}
```

下次启动游戏时，文件内容将自动写入。

## 附加信息

-   无论包的位置如何（开发文件夹或普通文件夹），自动过程都可以实现。
-   不需要为每个子包制作 `contents.json`，包根目录的文件就足够了。
-   这个文件不是你的包正常工作所必需的。
