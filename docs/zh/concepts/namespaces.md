---
title: 命名空间
mentions:
    - SirLich
    - MedicalJewel105
description: 命名空间是标识内容所有者的标识符，有助于防止命名冲突。
---

命名空间是标识内容所有者的标识符。你可以把它们想象成文件夹。命名空间有助于防止命名冲突。

在附加组件创建中，命名空间基本上可以认为是“冒号左侧的部分”。例如，`minecraft` 是 `minecraft:zombie` 的命名空间。一般形式是 `namespace:name`。

举一个命名空间如何提供帮助的具体例子，假设你创建了一个新生物。你将它命名为 `minecraft:shark`，却不知道应该为自己的自定义内容创建自己的命名空间。第二年，Mojang 决定在游戏中添加鲨鱼！现在存在命名冲突，因为有两个 `minecraft:shark` 的定义。你的附加组件就会崩溃。明智的做法是为你的鲨鱼选择一个独特的命名空间，这样你就不会与 Mojang 或任何其他创作者发生冲突。

## 选择命名空间

合适的命名空间对你来说是独特的，对项目来说也是独特的。像 `mob`、`cars`、`content` 或 `custom` 这样的命名空间是**不好的**，因为其他开发者可能会想出与你相同的命名空间。

合适的命名空间是短的。你会**经常**写你的命名空间，所以越短越好。`my_amazing_mobs_addon` 由于这个原因会是一个糟糕的命名空间。

建议使用你的玩家/公司名称的便捷版本，结合产品名称。

一些好的例子：

-   `wiki_mobsplus`
-   `cubeworld_mto`
-   `bworks_ftp`

**不要尝试**使用 `minecraft` 或 `minecon` 作为命名空间。

## 在哪里使用命名空间？

简而言之，你应该尽可能经常使用命名空间。

首先，你应该在向游戏添加自定义实体时使用命名空间。例如 `wiki:shark`。也建议将命名空间用于组件和事件。就像 Mojang 使用 `minecraft:pig_saddled` 一样，你应该使用 `namespace:my_mob_event` 和 `namespace:my_component_group`。动画控制器、渲染控制器和动画也是如此。

例如：`controller.animation.namespace.entity_name.action` 比 `controller.animation.my_action` 更好。

## 不要在哪里使用命名空间。

实际的文件结构不需要命名空间，除非文件路径在游戏中使用。例如：`animations/namespace/my_entity/animation` 比 `animations/my_entity/animation` 更令人困惑。

以下文件夹包含按路径引用的文件，因此应该包含命名空间：`functions`、`structures`、`loot_tables`、`trade_tables`、`sounds` 和 `textures`。

-   **示例：** `BP/functions/namespace/test.mcfunction`

你也可以参考[样式指南](/meta/style-guide)了解有关命名空间的更多信息。

## 命名空间注册表

Bedrock OSS 组织维护命名空间与作者/附加组件名称之间的映射。你可以考虑[在那里注册你的命名空间](https://github.com/Bedrock-OSS/add-on-registry)。
