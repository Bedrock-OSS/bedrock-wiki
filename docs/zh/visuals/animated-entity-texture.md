---
title: 实体纹理动画
description: 学习如何为实体制作动画纹理，工作原理类似于方块的翻页纹理。
category: 教程
mentions:
    - MedicalJewel105
    - IlkinQafarov
    - TheItsNameless
    - SmokeyStack
    - QuazChick
tags:
    - intermediate
---

从本页面你将学习如何为实体制作动画纹理，工作原理类似于方块的翻页纹理。

## 来源

本页面基于[AgentMindStorm](https://www.youtube.com/channel/UC-ljddYkFdTQl-MVEaVvbuQ)的内容。

<YouTubeEmbed id="F6e-w1rCEi4" />

## 纹理

首先让我们为我们的实体绘制一些新的纹理帧。在本教程中它将是一只正在环顾四周的牛。

<WikiImage
    src="cow.png"
    alt="堆叠在一起的动画牛纹理帧"
    width="180"
    pixelated
/>

我们需要像翻页纹理中的方块一样垂直放置我们的纹理。
在本例中我们有4帧。

## 动画材质

### 创建材质

在本指南中我们需要修改材质。然而，由于渲染龙的到来，材质已经过时了，所以**请自行承担风险**。

要使用动画纹理，我们需要将实体材质更改为具有 `USE_UV_ANIM` 属性的材质。
让我们简单地添加一个新材质：

<CodeHeader>RP/materials/entity.material</CodeHeader>

```json
{
    "materials": {
        "version": "1.0.0",
        "custom_animated:entity": {
            "+defines": ["USE_UV_ANIM"]
        }
    }
}
```

或者你可以将其添加到现有的材质中，查看默认材质文件。

<CodeHeader></CodeHeader>

```json
"+defines": [
    "USE_UV_ANIM"
]
```

<Button link="/assets/packs/visuals/animated-entity-texture/entity.material" download>
    下载默认entity.material文件
</Button>

:::warning
并非每个实体都这么容易！
有些实体有多个材质，如果你想让它的纹理具有动画效果，你需要将此属性添加到此实体的所有材质中。
:::

### 应用材质

在我们继续之前，我们需要在客户端实体文件中定义一个新材质。

<CodeHeader>minecraft:client_entity > description</CodeHeader>

```json
"materials": {
	"default": "custom_animated"
}
```

## 渲染控制器

之后，我们需要编辑渲染控制器。

在这里我们将添加带有offset和scale属性的 `uv_anim` 组件：

<CodeHeader>RP/render_controllers/cow.render_controllers.json > controller.render.cow</CodeHeader>

```json
"uv_anim": {
    "offset": [0, "math.mod(math.floor(q.life_time * frames_per_second), frame_count) / frame_count"],
    "scale": [1, "1 / frame_count"]
}
```

其中 `frames_per_second` 是你希望在一秒内更改的帧数，`frame_count` 是总帧数。
这个公式根据生命周期计算纹理的偏移量和大。

## 结果

现在是时候测试你的创作了！

![](result.gif)

## 下载示例包

<Button link="https://github.com/Bedrock-OSS/bedrock-examples/releases/download/download/animated_entity_texture.mcpack">
    下载MCPACK
</Button>
