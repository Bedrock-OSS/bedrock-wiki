---
title: 可装备物品
description: 物品可装备组件文档。
category: 文档
tags:
    - beginner
mentions:
    - Sprunkles137
    - MedicalJewel105
    - AdamRaichu
    - Lufurrius
    - TheItsNameless
---

::: tip
本文档假定你具备Molang、渲染控制器、动画和客户端实体定义的基础知识。请确保你熟悉[客户端实体](/entities/entity-intro-rp)的基础内容!
:::

## 简介

当我们设计自定义物品或方块时，Minecraft会从模板构建模型，以便在手持物品时显示物品。这表现为物品的精灵图是挤压的纹理网格，或方块使用其模型显示。通过使用**可装备物品**系统，我们可以设计自己的模型，在手持这些物品时显示。

有没有想过让木棍看起来像望远镜？或者挥舞一把带有旋转链条的大电锯？可装备物品就是实现这一目标的方法！

本文档介绍了创建可装备物品的**两种不同方式**，取决于所使用的几何体的构建方式。

## 概述

可装备物品是一个在物品或方块装备时渲染实体模型的系统。这意味着将物品拿在主手、副手或盔甲槽中。

可装备物品定义在设计上与客户端实体定义非常相似：它们允许我们定义纹理、材质、几何体和动画来显示可装备物品。

### 文件结构

可装备物品定义放在' attachables '文件夹中。文件布局与自定义实体相同。

<FolderView :paths="[
    'RP/animations/my_item.animation.json',
    'RP/attachables/my_item.entity.json',
    'RP/models/entity/my_item.geo.json',
    'RP/textures/entity/my_item.png',
    'RP/manifest.json'
]" />

### 可装备物品定义

以下是可装备物品的基本示例。

<CodeHeader>RP/attachables/stick.entity.json</CodeHeader>

```json
{
    "format_version": "1.10.0",
    "minecraft:attachable": {
        "description": {
            "identifier": "minecraft:stick",
            "materials": {
                "default": "entity",
                "enchanted": "entity_alphatest_glint"
            },
            "textures": {
                "default": "textures/entity/steve",
                "enchanted": "textures/misc/enchanted_item_glint"
            },
            "geometry": {
                "default": "geometry.wiki.steve_head"
            },
            "animations": {
                "hold_first_person": "animation.steve_head.hold_first_person",
                "hold_third_person": "animation.steve_head.hold_third_person"
            },
            "scripts": {
                "animate": [
                    {
                        "hold_first_person": "context.is_first_person == 1.0"
                    },
                    {
                        "hold_third_person": "context.is_first_person == 0.0"
                    }
                ]
            },
            "render_controllers": ["controller.render.item_default"]
        }
    }
}
```

关于这个可装备物品定义，有几个关键点需要指出：

-   标识符与现有的方块或物品ID相匹配。这将在物品装备时激活可装备物品，并替换原来手持时显示的模型。
-   列出了附魔光泽的材质和纹理。如果你的物品在附魔时应该有光泽，这点很重要。

创建可装备物品比创建客户端实体文件稍微复杂一点。我们需要正确地绑定几何体的骨骼，以便在装备时看起来正确。

## 方法一 - 连接到骨骼

<Tag name="beginner" />

在第一种方法中，我们将使用玩家骨骼的副本构建可装备物品，将你的模型连接到玩家的一块骨骼上。

这个方案非常适合仅涉及一种生物/实体（尤其是玩家）且仅涉及一个装备槽的模型。在Blockbench中查看模型的样子很容易。

### 设置骨骼

我们需要重建玩家的骨骼，以便我们的模型能够正确地绑定到骨骼上，否则它将不会绑定到任何东西，会在玩家身上自由漂浮。

使用文本编辑器，从提供的玩家骨骼文件中获取骨骼，并将其复制到你的几何体文件中，然后将`rightItem`骨骼作为模型立方体的父级。保存此几何体到你的资源包。

为方便起见，这里已经准备了这样一个模型。玩家模型的立方体已被移除：

<Button download link="/assets/packs/items/attachables/method_one/steve_head.geo.json">
    📄 几何体文件
</Button>

### 显示设置

让你的模型漂浮在玩家脚边并不理想。我们的下一步是创建动画，以便在玩家身上正确显示模型。

创建两个新动画，一个用于第一人称手持物品，另一个用于第三人称手持物品。选择你的第三人称动画，并按你想要的方式定位。将此动画保存到你的资源包。

以下是这样一个动画的示例。这还包括第一人称动画——制作方法在下面的部分详细介绍。

<Button download link="/assets/packs/items/attachables/method_one/steve_head.animation.json">
    📄 动画文件
</Button>

### 第一人称动画

为了更容易创建第一人称动画，我们需要模拟手臂在第一人称中的位置。

:::tip
要为玩家的手添加动画，你需要使用玩家的动画，而不是可装备物品的动画。
:::

使用以下指南动画并将其导入Blockbench。它对右臂骨骼应用了(95, -45, 115)的旋转和(13.5, -10, 12)的平移，完美模拟了手臂在第一人称中的位置。

<Button download link="/assets/packs/items/attachables/method_one/attachable_guide.animation.json">
    📄 可装备物品指南文件
</Button>

:::warning 注意
这里是棘手的部分。两个动画需要同时播放：你的第一人称动画和指南的第一人称动画。

确保在制作更改时正在编辑你的动画。首先选择它，然后在上面播放指南的第一人称动画。
:::

### 总结

设置完成后，浏览并删除玩家骨骼中的_立方体_（如果有的话），保留骨骼。在游戏中检查模型！

## 方法二 - 绑定到骨骼

<Tag name="intermediate" />

在第二种方法中，可装备物品几何体将使用模型绑定构造。这允许模型直接附加到生物几何体内对应装备槽的骨骼上。Minecraft对其可装备物品使用模型绑定，包括三叉戟、望远镜、弓和盾牌。

虽然这种方法允许可装备物品更动态地应用于其他生物和装备槽，但模型绑定也有一些奇怪的特性，下面将进行说明。一些开发者可能会发现这种方法更难搞定。

### 模型绑定

我们的第一步是将模型文件格式版本升级到`"1.16.0"`（如果不是的话）。如果模型是旧文件，则在继续之前进行转换；Blockbench有一个工具可以做到这一点（文件 → 转换项目）。

接下来是修改我们几何体的根骨骼，使其绑定到物品放置的装备槽。请注意此摘录自骨骼头部几何体文件的第4行：

<CodeHeader>RP/models/entity/skeleton_head.geo.json</CodeHeader>

```json
// A bone
{
    "name": "skeleton_head",
    "binding": "q.item_slot_to_bone_name(context.item_slot)",
    "pivot": [0, 4, 0],
    "cubes": [
        {
            "origin": [-4, 0, -4],
            "size": [8, 8, 8],
            "uv": [0, 0]
        }
    ]
}
```

骨骼中的`"parent"`键接受一个字符串，无论输入什么骨骼名称，都将被设置为当前骨骼的父级；子骨骼保持其位置，但相对于父级骨骼移动。

另一方面，`"binding"`键接受Molang，输入的骨骼名称的枢轴点被设置为子骨骼及其子骨骼应该继承的_根位置_。

对于`"binding"`的值，我们使用Molang查询`q.item_slot_to_bone_name`，它将槽名称转换为骨骼名称，上下文变量`context.item_slot`作为参数。这将该物品所在的装备槽的名称转换为玩家几何体中对应的骨骼名称。转换如下：

-   `'main_hand'` → "rightitem"
-   `'off_hand'` → "leftitem"

将模型绑定应用到你的骨骼，并保存几何体到你的资源包。

这里提供了一个应用了此绑定的示例模型：

<Button download link="/assets/packs/items/attachables/method_two/skeleton_head.geo.json">
    📄 几何体文件
</Button>

### 显示设置

完成后，下一步是设置动画以在第一人称和第三人称中显示模型。

创建两个新动画，一个用于第一人称手持物品，另一个用于第三人称手持物品。

为了更容易创建这些动画，请执行以下操作：

-   下载以下玩家骨骼模型。我们将以此作为定位模型的视觉辅助。

    <Button download link="/assets/packs/items/attachables/method_two/player_skeleton.geo.json">
        📄 玩家骨骼文件
    </Button>

-   使用文本编辑器，将模型中的骨骼和立方体添加到玩家骨骼模型中，然后将玩家骨骼模型导入Blockbench。
-   将模型的根骨骼设置为玩家骨骼中'rightItem'骨骼的子级。
-   下载以下动画文件并导入`wiki.third_person_guide`动画。这将在后面用于使定位更容易。

    <Button
        download
        link="/assets/packs/items/attachables/method_two/attachable_guide.animation.json"
    >
        📄 可装备物品指南文件
    </Button>

这些指南动画有一个值得注意的特性：它们对右物品骨骼应用-24的y位置偏移，以抵消Minecraft对绑定骨骼应用的类似-24的y位置偏移。我们目前不确定为什么会发生这种情况。

:::warning 注意
与第一种方法类似，**两个**动画需要同时播放才能正确定位。

确保在制作更改时正在编辑你的动画。首先选择它，然后在上面播放指南动画。
:::

播放两个动画，并以任何你想要的方式定位模型。将动画保存到你的资源包。

以下是此定位的示例动画文件：

<Button download link="/assets/packs/items/attachables/method_two/skeleton_head.animation.json">
    📄 动画文件
</Button>

### 第一人称动画

与第三人称动画类似，请在可装备物品指南文件中查看并将`wiki.first_person_guide`动画导入Blockbench。同时播放你的动画和指南的第一人称动画，然后进行更改并保存文件。

## 示例包

每种方法都已编译成示例包，如果你遇到困难或只是想查看一个工作示例，可以参考。

<Button
    download
    link="https://github.com/Bedrock-OSS/bedrock-examples/releases/download/download/attachable-example.mcpack"
>
    💾 示例包
</Button>
