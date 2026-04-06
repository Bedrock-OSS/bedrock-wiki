---
title: 实体RP入门
category: 通用
nav_order: 2
tags:
    - guide
    - beginner
mentions:
    - SirLich
    - MedicalJewel105
    - Overload1252
    - ChibiMango
    - Lufurrius
    - TheItsNameless
    - SmokeyStack
    - ThomasOrs
description: 实体资源包简介。
---

资源包实体文件包含形成我们实体视觉效果的资源引用。此外，它还包含有关如何以及何时渲染这些视觉效果的信息。

本页面将分解实体文件的每个部分并解释每个部分。对于制作你自己实体的演练，你可以查看我们的[初学者指南](/guide/custom-entity)。

## 文件大纲

<CodeHeader>RP/entity/example.json</CodeHeader>

```json
{
    "format_version": "1.10.0",
    "minecraft:client_entity": {
        "description": {
            "identifier": "wiki:example",
            "materials": {...},
            "textures": {...},
            "geometry": {...},
            "render_controllers": [...],

            "animations": {...},
            "scripts": {...},

            "sound_effects": {...},
            "particle_effects": {...},

            "spawn_egg": {...},
            "enable_attachables": false,
            "hide_armor": false
        }
    }
}
```

虽然看起来可能令人畏惧，但这些部分中的许多只是_短名称定义_。短名称定义是我们将资源（如纹理路径或几何标识符）分配给一个短名称的地方，然后我们可以在后面引用它。这意味着如果以后更改资源的位置，我们只需要在一个地方更改它。此外，它允许我们的代码更简洁，而无需写出长的路径位置或标识符。

## 材质

材质描述了纹理的渲染方式。例如，骷髅有一个允许纹理透明的材质，末影人有一个允许它们眼睛发光的材质。有许多材质你可以在不需要制作自己的材质的情况下使用。

<CodeHeader>RP/entity/spider.entity.json#minecraft:client_entity/description</CodeHeader>

```json
"materials": {
    "default": "spider",
    "invisible": "spider_invisible"
},

```

这里的材质是 `spider` 和 `spider_invisible`，短名称分别是 `default` and `invisible`。请记住，这个键只是_定义_了什么材质附加到短名称上，我们的实体仍然不知道何时使用它们。
对于预制材质列表，你可以查看我们的[页面](/documentation/materials)。
对于制作自己材质的指南，你可以查看这个[页面](/visuals/materials)。警告说这相当高级。

## 纹理

纹理是映射到我们几何体的图像。每个实体都有不同的纹理。与材质类似，这个键也是短名称定义，然而在这里，引用是纹理的路径。

<CodeHeader>RP/entity/bee.entity.json#minecraft:client_entity/description</CodeHeader>

```json
"textures": {
    "default": "textures/entity/bee/bee",
    "angry": "textures/entity/bee/bee_angry",
    "nectar": "textures/entity/bee/bee_nectar",
    "angry_nectar": "textures/entity/bee/bee_angry_nectar"
}

```

和以前一样，我们可以定义多个纹理。如果我们想要实体的不同变体，这很有用，例如上面的蜜蜂。此外，我们可以使用多个纹理在不同基础上分层不同的纹理，就像村民有不同的生物群系基础和不同的职业层一样。你可以在我们的渲染控制器页面查看[此处](/entities/render-controllers)了解更多关于如何分层纹理的详细信息。

## 几何体

几何体是定义构成我们实体形状的_骨骼_集合的文件。这个文件可以使用Blockbench等应用程序自动生成。你可以查看我们的[指南](/guide/blockbench)了解更多关于如何制作自己模型的详细信息。

<CodeHeader>RP/entity/creeper.entity.json#minecraft:client_entity/description</CodeHeader>

```json
"geometry": {
    "default": "geometry.creeper",
    "charged": "geometry.creeper.charged"
}
```

这里我们的短名称引用我们几何体的标识符。

<CodeHeader>RP/entity/creeper.entity.json#minecraft:client_entity/description</CodeHeader>

```json
{
	"format_version" : "1.12.0",
	"minecraft:geometry" : [
		{
			"description" : {
				"identifier" : "geometry.creeper",
                ...
            }
        }
}
```

同样，我们可以有多个几何体，例如苦力怕，它有两个模型用于其充电和非充电形态。

:::tip
通常如果你的视觉效果有问题，可能是因为实体的短名称有拼写错误。确保你仔细检查。
:::

## 渲染控制器

渲染控制器简单地控制你的实体如何渲染。这个文件获取你的材质、纹理和几何体的短名称，并使用它们定义何时渲染每个元素。

<CodeHeader>RP/render_controllers/example.rc.json</CodeHeader>

```json
{
    "format_version": "1.10.0",
    "render_controllers": {
        "controller.render.example": {
            "geometry": "geometry.default",
            "materials": [
                {
                    "*": "material.default"
                }
            ],
            "textures": ["texture.default"]
        }
    }
}
```

这里，这个渲染控制器说总是使用 `default` 材质、纹理和几何体。你可以获得更复杂的渲染控制器，允许切换纹理或使几何体的某些部分不可见。这在我们的渲染控制器页面上有解释[此处](/entities/render-controllers)。

为了告诉我们的实体使用哪个渲染控制器，我们只需要将渲染控制器标识符添加到我们的文件中。

<CodeHeader>RP/entity/example.json#minecraft:client_entity/description</CodeHeader>

```json
"render_controllers": [
    "controller.render.example"
]
```

最基本的实体文件需要这4个键才能正确渲染实体。

## 动画

动画描述了我们的实体如何移动。这可以包括行走动画、攻击或实体注视玩家的方式。它们由代码定义，描述几何体在某些时候如何移动或使用数学方程。你需要一个几何体才能让动画工作。

<CodeHeader>RP/animations/example.a.json</CodeHeader>

```json
{
	"format_version" : "1.8.0",
	"animations" : {
		"animation.example.walk" : {...},
        "animation.example.attack" : {...}
	}
}
```

每个动画都通过其标识符定义。我们的动画键然后是我们动画的另一个短名称定义。

<CodeHeader>RP/entity/example.json#minecraft:client_entity/description</CodeHeader>

```json
"animations": {
    "walk": "animation.example.walk",
    "attack": "animation.example.attack",
    "attack_controller": "controller.animation.example"
}
```

在这里你会注意到我们还引用了一个动画控制器。这控制何时播放某些动画。这允许我们定义动画之间的不同转换。

此控制器使用动画键中定义的动画短名称。我们还定义我们的控制器，以便能够引用何时运行此控制器。我建议查看我们的指南以获取有关动画控制器如何结构的更多信息。

:::tip 重要
请记住，这个键只是_为我们的动画定义一个短名称，并不运行我们的动画。如果你只有这个键，你的动画将不会在游戏中运行。
:::

## 脚本

脚本键定义实体在某些时候运行的某些脚本。这允许我们运行动画、设置变量，甚至控制我们实体的大小。此外，我们可以使用_Molang_来定义这些。更深入地了解Molang，你可以查看我们的[页面](/concepts/molang)。总的来说，Molang本质上是一种使用变量的数学方程类型。

<CodeHeader>RP/entity/example.json#minecraft:client_entity/description</CodeHeader>

```json
"scripts": {
    "initialize": [...],
    "pre_animation": [...],
    "animate": [...],

    "scale": "1",
}
```

Molang中一些有用的东西是：

-   查询。这些是根据条件变化的值。例如 `query.time_of_day` 或 `q.time_of_day` 查询返回一天中的时间。
-   变量。这些是你可以编辑以保存供以后使用的值。例如，你可以将变量 `variable.my_number` 或 `v.my_number` 设置为比如说2。
-   求值。在Molang中，我们可以使用运算符返回值。例如，如果 `q.time_of_day` 大于 `v.my_number`，我们可以通过编写 `q.time_of_day > v.my_number` 返回值1。

### 初始化

此脚本在实体首次初始化时运行，也就是当它生成时以及每次加载时。这意味着每次你进入你的世界，它都会运行此脚本中的任何内容。这对于设置自定义变量的默认值很有用。

### 预动画

此脚本在动画播放之前每帧运行。这对于计算需要在动画运行之前计算的动画中使用的变量很有用。

### 动画

此脚本在 `pre_animation` 之后每帧运行。这是你运行动画和动画控制器的地方。每一帧这个键中的每个动画或动画控制器都将运行。

<CodeHeader>RP/entity/example.json#minecraft:client_entity/description</CodeHeader>

```json
"scripts": {
    "animate": [
        "attack_controller",
        {
            "walk": "q.modified_move_speed"
        }
    ],
}
```

这里，`attack_controller` 是我们动画控制器的短名称。每一帧它将运行我们的动画控制器和控制器中发生的任何转换。此外，在animate中，我们可以使用Molang定义动画播放的速度。请记住Molang求值为一个值，这里我们有一个查询 `q.modified_move_speed`。此查询返回实体移动的速度，正常行走速度返回 `1`。因此，通过这个，我们的 `walk` 动画根据实体移动的速度播放。

如果我们改为 `"walk": 2`，那么行走动画将始终以两倍的速度播放。我们也可以在动画控制器中定义这，它可以更好地控制何时播放这些动画。更多信息关于在动画中使用Molang查看我们的[页面](/visuals/math-based-animations)。

如果你的动画没有播放，那么检查它们是否使用正确的短名称在 `animate` 中定义是一个好主意。

### 缩放

缩放控制模型的大小。这与你可以 在实体的行为文件中定义的组件 `minecraft:scale` 略有不同。组件 `minecraft:scale` 缩放实体和碰撞箱的模型，而实体资源文件中的 `scale` 只缩放模型。根据你的情况，两者都可能更有用。

`scale` 的另一个区别是你可以使用Molang，还有3个附加组件：`scaleX`、`scaleY` 和 `scaleZ`。

<CodeHeader>RP/entity/example.json#minecraft:client_entity/description</CodeHeader>

```json
"scripts": {
    "scale": "q.variant",
    "scaleX": 2,
    "scaleY": 0.5
}
```

这里，我们的实体将根据它由 `minecraft:variant` 组件确定的变体进行缩放。如果你想要保持碰撞箱相同但让实体看起来更大，这可能是有益的。
此外，模型将在 `y` 方向上被压扁2倍，在 `x` 方向上被拉伸2倍。

这的一个用例可能是有一个随机大小的环境实体。

<CodeHeader>RP/entity/example.json#minecraft:client_entity/description</CodeHeader>

```json
"scripts": {
    "initialize": [
        "v.scale = math.random_integer(1, 5);"
    ],
    "scale": "v.scale"
}
```

这段代码将使实体每次加载时都有我们选择的值之间的随机大小。这里 `math.random_integer` 是一个Molang函数，在提供的数字之间选择随机整数。

## 音效

音效是在游戏中某些时候可以播放的声音文件。此键再次定义可供实体在动画中使用的音效短名称。这对于在实体与世界交互时创建更动态的声音很有用。例如，你可能希望实体在攻击时播放3个声音。

<CodeHeader>RP/entity/example.json#minecraft:client_entity/description</CodeHeader>

```json
"sound_effects": {
    "attack_1": "mob.entity.attack_1",
    "attack_2": "mob.entity.attack_2",
    "attack_3": "mob.entity.attack_3"
}
```

这里，短名称引用 `sound_definitions.json` 文件中定义的声音短名称。当在其他地方使用声音时，比如在命令中，你会使用 `mob.entity.attack_1`，但在实体中定义的动画中，你会使用 `attack_1`。

## 粒子效果

粒子效果是包含许多小尖刺运动信息的文件，以创建烟雾或火焰等效果。与音效类似，此键定义粒子效果的短名称以在动画中使用。例如，幻翼在飞行时翅膀上有粒子效果。

<CodeHeader>RP/entity/example.json#minecraft:client_entity/description</CodeHeader>

```json
"particle_effects": {
    "smoke": "wiki:smoke_particle"
}
```

这里，短名称引用粒子的标识符。关于粒子和制作自己的粒子的更多信息，查看我们的粒子页面[此处](/particles/particles)。关于在动画中使用音效和粒子效果的更多信息，你也可以查看我们的[页面](/visuals/animation-effects)。

## 生成蛋

生成蛋键允许我们为实体生成生成蛋。当使用时，这将生成我们的实体，并自动添加到创造模式库存中。你的生成蛋外观有两个选项：有颜色的和纹理的。

<CodeHeader>RP/entity/example.json#minecraft:client_entity/description</CodeHeader>

```json
"spawn_egg": {
    "base_color": "#db7500",
    "overlay_color": "#242222"
}
```

使用 `base_color` 和 `overlay_color` 将创建一个类似于具有所提供颜色的原版蛋的纹理蛋。

<CodeHeader>RP/entity/example.json#minecraft:client_entity/description</CodeHeader>

```json
"spawn_egg": {
    "texture": "wiki:example",
}
```

`texture` 键获取在 `item_texture.json` 中定义的图像的纹理短名称，用作生成蛋的图像。如果省略此键，则不会生成生成蛋。

## 附加设置

`enable_attachables` 确定是否可以将附件附加到实体。例如，将此设置为false意味着实体无法持有剑或弓等武器。

`hide_armor` 允许实体穿戴盔甲，但不会被渲染。

### 修改玩家客户端实体

为了支持在角色创建器中创建的角色皮肤，客户端实体定义的 `min_engine_version` 不能大于1.13.0。
确保在玩家客户端实体文件中包含以下参数：

<CodeHeader>RP/entity/player.entity.json</CodeHeader>

```json
{
    "format_version": "1.26.10",
    "minecraft:client_entity": {
        "description": {
            "identifier": "minecraft:player",
            "min_engine_version": "1.13.0",
            ...
        }
    }
}
```
