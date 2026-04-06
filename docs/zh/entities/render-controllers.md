---
title: 渲染控制器
category: 通用
tags:
    - beginner
mentions:
    - SirLich
    - MedicalJewel105
    - Overload1252
    - ChibiMango
description: 学习渲染控制器。
---

渲染控制器是资源包中经常被误解的部分。但你不需要害怕！如果你把渲染控制器看作是逻辑包，从RP实体文件中获取短名称定义，并确定它们将如何在游戏中组合/分层/渲染，这将对你有所帮助。

## 定义短名称

渲染控制器基于RP实体文件的短名称定义工作。短名称是本地标识符，我们在RP实体文件中定义，然后可以在渲染控制器（和其他地方！）中使用。诸如 `geometry`、`materials` 和 `textures` 之类的变量可以在实体中定义，

让我们看一下简化版的蜘蛛RP实体文件：

<CodeHeader>RP/entity/spider.json</CodeHeader>

```json
{
    "format_version": "1.8.0",
    "minecraft:client_entity": {
        "description": {
            "identifier": "minecraft:cave_spider",
            "materials": {
                "default": "spider",
                "invisible": "spider_invisible"
            },
            "textures": {
                "default": "textures/entity/spider/cave_spider"
            },
            "geometry": {
                "default": "geometry.spider.v1.8"
            },
            "render_controllers": ["controller.render.spider"]
        }
    }
}
```

在这种情况下，创建了四个短名称定义：

-   `default`，在材质数组中
-   `invisible`，在材质数组中
-   `default`，在纹理数组中
-   `default`，在几何体数组中

你可以在每个数组中定义多个短名称，如上面的 `materials` 示例所示。

如果你认为短名称定义是`导入`你想要使用的资源会有所帮助。在这个阶段，你正在定义你想在实体中使用的纹理、几何体和材质。在渲染控制器阶段，你不会导入任何东西。你将简单地使用你已经导入的资源来创建渲染实体。

## 简单渲染控制器

一个简单的渲染控制器如下所示：

<CodeHeader>RP/render_controllers/cow.render.json</CodeHeader>

```json
{
    "format_version": "1.8.0",
    "render_controllers": {
        "controller.render.cow": {
            "geometry": "Geometry.default",
            "materials": [
                {
                    "*": "Material.default"
                }
            ],
            "textures": ["Texture.default"]
        }
    }
}
```

此控制器获取实体文件中的短名称定义并"渲染"它们。例如，这一行：`"textures": [ "Texture.default"]` 说："获取默认纹理，并将其应用到实体"。渲染控制器不知道默认纹理是什么；它只是应用它。

## 重用渲染控制器

由于渲染控制器基于短名称工作，你可以为所有实体重用同一个渲染控制器。对于具有一种材质、一种纹理和一种几何体的简单实体，自定义渲染控制器不是必需的。

例如，上面的渲染控制器用于 `minecraft:cow` 实体。如果你想在你的包中使用此渲染控制器，只需在你的实体文件中将其定义为：`"render_controllers": [ "controller.render.cow" ]`。

:::warning 记住！

渲染控制器基于短名称工作。如果你想使用牛渲染控制器，你需要提供它正在使用的短名称。在这种情况下，你将需要提供：

-   `default` 几何体
-   `default` 纹理
-   `default` 材质

:::

## 创建自定义渲染控制器

通常我们希望对实体的渲染有更多控制，例如渲染分层纹理、多个几何体或将不同的材质应用到不同的骨骼。要创建自定义渲染控制器，只需将原版渲染控制器复制并粘贴到 `render_controllers` 文件夹中，然后根据自己的喜好进行编辑！

## 纹理分层

有时，为自定义实体创建分层纹理会有所帮助。此上下文中的分层 Simply 意味着多个纹理相互叠加，其中顶层纹理具有alpha像素并允许底层纹理显示出来。

作为一个简单的例子，想象一个**绘画**实体。画的框架总是一样的，但画面本身可以改变。虽然你可以复制框架10次并绘制10幅画，但你现在创建了一个问题：如果你想更改框架怎么办？现在你需要编辑10个纹理。

可以通过分层纹理来解决这个问题。只需先放置框架纹理，然后在其上添加不同的绘画。你现在可以在一个简单的地方编辑框架。

或者，你甚至可以为每幅画创建多个框架！这允许你在绘画实体中创造更多变化，因为玩家可以独立更改两个纹理。

### 渲染控制器

纹理分层是通过使用渲染控制器实现的。如果你对渲染控制器不满意，应该查看一些原版用法。包含多个纹理的实体（如 `horse`）是很好的参考。

### 纹理分层

#### 渲染控制器

<CodeHeader>RP/render_controllers/controller.render.texture_layering.json</CodeHeader>

```json
{
    "format_version": "1.10.0",
    "render_controllers": {
        "controller.render.texture_layering": {
            "geometry": "Geometry.default",
            "materials": [
                {
                    "*": "Material.default"
                }
            ],
            "textures": [
                //你可以添加任意多层。从上到下添加。
                "Texture.bottom_layer",
                "Texture.top_layer"
            ]
        }
    }
}
```

#### 实体

你需要在实体中定义所有纹理，还要使用 `villager_v2_masked` 材质。

<CodeHeader>RP/entity/my_entity.json</CodeHeader>

```json
"materials": {
	"default": "villager_v2_masked"
},
"textures": {
	"top_layer": "textures/top",
	"bottom_layer": "textures/bottom"
  //在此添加更多纹理短名称定义。
}
```

### 带变体的纹理分层

虽然我认为硬编码分层纹理很酷，但真正的乐趣在于让纹理动态化：

#### 实体

设置多个顶层纹理，我们稍后将为其编制索引。

<CodeHeader>RP/entity/my_entity.json#description</CodeHeader>

```json
"textures": {
	"top_1": "textures/top_1",
	"top_2": "textures/top_2",
	"top_3": "textures/top_3",
	"bottom_layer": "textures/bottom"
}
```

#### 渲染控制器

<CodeHeader>RP/render_controllers/controller.render.wool_only</CodeHeader>

```json
{
    "format_version": "1.10.0",
    "render_controllers": {
        "controller.render.wool_only": {
            "arrays": {
                "textures": {
                    "Array.top": ["Texture.top_1", "Texture.top_2", "Texture.top_3"]
                }
            },
            "geometry": "Geometry.default",
            "materials": [
                {
                    "*": "Material.default"
                }
            ],
            "textures": [
                "Texture.bottom", //静态底层纹理
                "Array.top[q.variant]" //根据实体变体选择顶层纹理。
            ]
        }
    }
}
```

使用数组然后 `q.variant`，我们可以根据实体的 `variant` 选择顶层纹理。

#### 设置变体

现在，要选择将显示哪一层，我们只需在实体中设置变体组件：

<CodeHeader>BP/entities/my_entity.json#components</CodeHeader>

```json
"minecraft:variant": {
	"value": 0
}
```

请记住，像变体这样的组件是从零开始索引的，这意味着 `0` 是我们的第一个纹理，然后 `1` 和 `2` 指向第二个和第三个。

#### 动态更改纹理

如果你想在游戏过程中动态更改实体的纹理，你只需要更改 `variant`。这可以使用组件组和事件来完成。

#### 动态分层纹理

可以通过添加更多纹理列表和其他虚拟组件作为索引来实现动态分层纹理。你可以在[此处](/entities/dummy-components)阅读有关虚拟组件的信息。

### 动态交替几何体

动态更改几何体的工作方式与更改纹理几乎相同。

在以下示例中，你可以看到一个渲染控制器设置为根据变体更改实体的几何体。
与纹理一样，你写下几何体的顺序决定了它们的编号顺序。顶层为0。
当我们更改变体时，它将使用不同的几何体。

请注意，与纹理不同，你不能分层几何体，因此你不应该包含"基础底层"几何体。
这仍然需要使用 `villager_v2_masked` 材质。

<CodeHeader>RP/render_controllers/controller.render.player.third_person.json</CodeHeader>

```json
{
    "format_version": "1.8.0",
    "render_controllers": {
        "controller.render.player.third_person": {
            "materials": [
                {
                    "*": "Material.default"
                }
            ],
            "textures": ["Texture.bottom", "Array.top[q.variant]"],
            "arrays": {
                "geometries": {
                    "Array.geo": ["Geometry.default", "Geometry.custom_1", "Geometry.custom_2"]
                },
                "textures": {
                    "Array.top": ["Texture.bottom", "Texture.top_1", "Texture.top_2"]
                }
            },
            "geometry": "Array.geo[q.variant]"
        }
    }
}
```

#### 实体

记得在你的实体文件中包含几何体变体

<CodeHeader></CodeHeader>

```json
"geometry": {
	"default": "geometry.entity.default",
	"custom_1": "geometry.entity.custom_1",
	"custom_2": "geometry.entity.custom_2"
}
```

## 常见错误

在渲染控制器中，你可以多次引用纹理但只能引用1个几何体。这也适用于数组。

```json
"arrays": {
    "textures": {
        "array.skin": [],
        "array.dress": []
    },
    "geometries": {
        "array.geo": []
    }
}
```

接着：

```json
"textures": [
    "array.skin[q.variant]",
    "array.dress[q.skin_id]"
],
"geometry": "array.geo[q.mark_variant]"
```
