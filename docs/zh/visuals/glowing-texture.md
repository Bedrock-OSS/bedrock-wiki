---
title: 发光实体纹理
category: 教程
mentions:
    - LeGend077
    - MedicalJewel105
description: 在你自己的细节中重现Enderman的发光眼睛。
---

在本教程中，你将学习如何通过使用材质和纹理来制作发光纹理，就像Enderman的眼睛一样。

## 纹理

要使你的实体纹理发光，你需要在高级图像编辑器（这里是Blockbench）中打开纹理，并将像素的alpha擦除一半。

- 打开你的实体纹理文件。

_不要在意奇怪的骨骼旋转，Mojang喜欢通过动画正确渲染模型。_

- 找到**橡皮擦**工具并将不透明度/alpha设置为较低的值，如71或23。

![](eraser.png)

![](opacity.png)

- 然后，擦除你希望它发光的纹理部分。像素越不可见，它发光越多，但要确保它没有被100%擦除。

![](erase-pixels.png)

示例猪纹理：

![](pig.png)

## 材质

我们需要修改我们想要发光的生物的 `RP/entity/my_entity.entity.json` 文件。现在，找到 `"materials":{}` 并将值设置为 `"entity_emissive_alpha"`。（请确保纹理已正确定义）。

<CodeHeader>RP/entity/pig.entity.json#description</CodeHeader>

```json
"materials": {
    "default": "entity_emissive_alpha"
}
```

<Spoiler title="示例猪实体文件">

<CodeHeader>RP/entity/pig.entity.json</CodeHeader>

```json
{
    "format_version": "1.10.0",
    "minecraft:client_entity": {
        "description": {
            "identifier": "minecraft:pig",
            "min_engine_version": "1.8.0",
            "materials": {
                "default": "entity_emissive_alpha" // 将"pig"替换为"entity_emissive_alpha"
            },
            "textures": {
                "default": "textures/entity/pig/pig",
                "saddled": "textures/entity/pig/pig_saddle"
            },
            "geometry": {
                "default": "geometry.pig.v1.8"
            },
            "animations": {
                "setup": "animation.pig.setup",
                "walk": "animation.quadruped.walk",
                "look_at_target": "animation.common.look_at_target",
                "baby_transform": "animation.pig.baby_transform"
            },
            "scripts": {
                "animate": [
                    "setup",
                    {
                        "walk": "q.modified_move_speed"
                    },
                    "look_at_target",
                    {
                        "baby_transform": "q.is_baby"
                    }
                ]
            },
            "render_controllers": ["controller.render.pig"],
            "spawn_egg": {
                "texture": "spawn_egg",
                "texture_index": 2
            }
        }
    }
}
```

</Spoiler>

## 测试

现在，启动Minecraft并打开一个启用此资源包的世界。将时间设置为_午夜_或找一个附近的洞穴进行测试。实体应该会如预期发光。

![](result.png)
