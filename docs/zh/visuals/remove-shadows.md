---
title: 移除实体阴影
tags:
    - intermediate
category: 教程
mentions:
    - SirLich
    - solvedDev
    - Joelant05
    - MedicalJewel105
    - SmokeyStack
    - ThomasOrs
description: 摆脱恼人的阴影。
---

有很多方法可以移除实体的阴影，而且几乎所有方法都有不良影响。没有万无一失的方法可以完美地从特定实体移除阴影而不产生副作用。

本文将展示各种移除阴影的方法，以及这样做的可能效果。

## 小碰撞箱

一种方法是将碰撞组件的大小做得非常小。这会使与实体交互/命中变得困难，但会让阴影消失！

<CodeHeader>minecraft:entity > components</CodeHeader>

```json
"minecraft:collision_box": {
    "width": 0.1,
    "height": 0.1
}
```

你也可以添加[自定义命中测试组件](https://bedrock.dev/docs/stable/Entities#minecraft:custom_hit_test)。`custom_hit_test` 组件将允许你命中实体，但你将无法与它交互。`custom_hit_test` 不会创建阴影。

<CodeHeader>minecraft:entity > components</CodeHeader>

```json
"minecraft:custom_hit_test": {
    "hitboxes": [
        {
            "pivot": [0, 0.5, 0], // 这是命中框的位置，你可以更改X、Y和Z值
            "width": 0.8,
            "height": 0.7
        }
        // 你可以根据需要添加更多命中框，只需将命中框复制粘贴到"hitboxes"数组中即可。
    ]
}
```

## 渲染时不可见

另一种方法是给予实体隐身效果（会隐藏实体的阴影）并应用 `"minecraft:renders_when_invisible"` 组件。

<CodeHeader>minecraft:entity > components</CodeHeader>

```json
"minecraft:renders_when_invisible": {},
"minecraft:spell_effects": {
    "add_effects": [
        {
            "visible": false,
            "effect": "invisibility",
            "duration": "infinite"
        }
    ]
}
```

## 传送到地下

如果你有一个需要交互的虚拟实体（不可见的），你可以使用 `/teleport @x ~ ~-0.01 ~`。这会将实体稍微插入地下，并停止显示阴影。

## 使用运行时标识符

一些实体没有阴影，或者至少阴影非常小。通过使用这些实体的运行时标识符，我们可以移除阴影。缺点是需要继承那些实体的硬编码行为，这有时会很成问题。请参阅[运行时标识符文档](/entities/runtime-identifier)了解更多信息。

## 使用材质

:::danger
此方法不再受支持。随着渲染龙的到来，此类材质不再起作用。请不要以严肃的方式尝试使用此代码，更绝对不要在市场地图上尝试。
:::

:::warning

-   此文件夹不包含在 vanilla RP 包示例中，必须从APK文件导出或手动添加。
-   这尚未在方块上测试，仅在实体上验证。如果你发现它在方块上也有效，请告诉我们，以便我们可以添加。

:::

<Spoiler title="通过材质移除阴影。">

#### 有效的阴影代码：所有实体的阴影：

<CodeHeader>RP/materials/shadows.material</CodeHeader>

```json
"shadow_overlay":{
    "+states":[
        "DisableDepthTest",
        "DisableCulling",
        "Blending",
        "EnableStencilTest"
    ],
    "vertexShader":"shaders/color.vertex",
    "vrGeometryShader":"shaders/color.geometry",
    "fragmentShader":"shaders/shadow_stencil_overlay.fragment",
    "blendSrc":"DestColor",
    "blendDst":"Zero",
    "frontFace":{
        "stencilFunc":"Equal",
        "stencilPass":"Replace"
    }
}
```

#### 禁用的阴影代码：所有实体无阴影：

<CodeHeader></CodeHeader>

```json
"shadow_overlay":{
    "+states":[
        "DisableDepthTest",
        "DisableCulling",
        "Blending",
        "EnableStencilTest"
    ],
    "vertexShader":"",
    "vrGeometryShader":"",
    "fragmentShader":"",
    "blendSrc":"DestColor",
    "blendDst":"Zero",
    "frontFace":{
        "stencilFunc":"Equal",
        "stencilPass":"Replace"
    }
}
```

</Spoiler>

#### 几何模型 + 材质变通方案

如果在你的实体上应用一个模型来覆盖阴影，并使用 `"banner_pole"` 材质，你可以隐藏实体阴影。
