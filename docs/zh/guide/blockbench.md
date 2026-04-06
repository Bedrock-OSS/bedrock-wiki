---
title: "Blockbench：建模、纹理与动画"
category: 指南
description: 初步了解 Blockbench。
prefix: "7. "
nav_order: 7
mentions:
    - KaiFireborn
    - SirLich
    - Dreamedc2015
    - SmokeyStack
    - sermah
    - cda94581
    - TheItsNameless
    - ThijsHankelMC
    - MedicalJewel105
    - ChibiMango
    - smell-of-curry
    - QuazChick
---

Blockbench 是一款免费软件，旨在使 Minecraft 建模、纹理处理和动画制作成为可能。它适用于移动浏览器、Windows 10 和 macOS。请在 [blockbench.net](https://blockbench.net/) 安装它。

## 建模

让我们开始吧。

1.  打开 Blockbench。
2.  选择 _文件 > 新建 > 基岩模型_。这很重要，因为 Minecraft 基岩版无法读取 Java 模型。
3.  会弹出这样一个界面。

    ![](create_entity_project_menu.png)

    -   `"文件名："` 不言自明。我的文件将生成为 "skele_yaklin.geo.json"。
    -   `"模型标识符："` 是模型标识符（不需要命名空间），后面会定义这个 ID 的简短名称。
    -   `"Box UV"` 必须勾选，以便自动进行 UV 编辑和纹理展开。
    -   `"纹理高度"` 和 `"纹理宽度"` 定义模型纹理的分辨率。

4.  按确认。你会看到这样的界面：

    ![](create_entity_workspace.png)

    -   你可以看到许多工具：移动、调整大小、旋转等。
    -   你可以在右下角的菜单中添加骨骼和方块。方块可以自行旋转；骨骼将承载其中的所有内容；

5.  现在，你准备好创建你的模型了！有关建模的更深入教程，请查看下面 Everbloom Games 的视频。

<YouTubeEmbed id="XqzxL_-XjA0" />

<YouTubeEmbed id="j7ISUImhgpc" />

## 纹理

现在模型已经就位，让我们开始添加纹理！

1.  在左下角面板中，点击"创建纹理"

2.  在"名称："下写下你的图片文件名。我的将导出为 `ghost.png`。
    勾选"模板："以创建模板纹理，这样更容易操作。

    ![](create_entity_texture_1.png)

3.  勾选所有内容并将分辨率更改为你第一步设置的分辨率。

    ![](create_entity_texture_2.png)

4.  转到右上角的"绘制"并绘制你的纹理。

## 动画

模型和纹理完成后，你可以开始动画了。转到右上角的"动画"。

你可能想要调整其中一个工具栏，添加"导出动画"和"导入动画"，如下所示：
![](create_entity_animation_1.png)

1.  点击"添加动画"[右上角的加号图标]并将其命名为 `animation.{你的实体名称}.move`。
    通过移动腿部，在时间线上的 0 处创建你的行走动画的第一帧。

    ![](create_entity_animation_2.png)

2.  在时间线上的 0.5 处创建第二帧。

    ![](create_entity_animation_3.png)

3.  最后，通过将时间线光标放在 1.0 并选择第一帧，然后按 ctrl+c、ctrl+v，将第一帧复制到第三帧。

4.  右键点击动画并勾选"循环"以使动画循环播放。
    ![](create_entity_animation_4.png)

## 保存你的工作

现在我们的模型、纹理和行走动画已经完成，你可以保存你的工作了。

转到 _文件 > 保存模型_ 或 _文件 > 导出基岩几何体_。将模型保存在 `RP/models/entity` 中，纹理保存在 `RP/textures/wiki/entity/` 中（其中 `wiki` 替换为你自己的命名空间），动画保存在 `RP/animations` 中。恭喜！你已成功创建了第一个实体的视觉外观！你可以在下面看到文件示例。

_同时，为什么不升级你自己的独特实体的视觉外观或创建另一个呢？_

<Spoiler title="显示代码">

<CodeHeader>RP/models/entity/ghost.geo.json</CodeHeader>

```json
{
    "format_version": "1.12.0",
    "minecraft:geometry": [
        {
            "description": {
                "identifier": "geometry.ghost",
                "texture_width": 64,
                "texture_height": 64,
                "visible_bounds_width": 3,
                "visible_bounds_height": 3.5,
                "visible_bounds_offset": [0, 1.25, 0]
            },
            "bones": [
                { "name": "root", "pivot": [0, 3, 0] },
                {
                    "name": "body",
                    "parent": "root",
                    "pivot": [0, 4.625, 0],
                    "cubes": [
                        {
                            "origin": [-4, 3, -4],
                            "size": [8, 13, 8],
                            "uv": [0, 20]
                        }
                    ]
                },
                {
                    "name": "leftArm",
                    "parent": "body",
                    "pivot": [4.6, 15.5, 0.5],
                    "cubes": [
                        {
                            "origin": [4.1, 7, -1],
                            "size": [3, 9, 3],
                            "uv": [32, 32]
                        }
                    ]
                },
                {
                    "name": "rightArm",
                    "parent": "body",
                    "pivot": [-4.5, 15.5, 0.5],
                    "cubes": [
                        {
                            "origin": [-7.1, 7, -1],
                            "size": [3, 9, 3],
                            "uv": [32, 20]
                        }
                    ]
                },
                {
                    "name": "head",
                    "parent": "body",
                    "pivot": [0, 16, 0],
                    "cubes": [
                        {
                            "origin": [-5, 16, -5],
                            "size": [10, 10, 10],
                            "uv": [0, 0]
                        }
                    ]
                }
            ]
        }
    ]
}
```

<CodeHeader>RP/animations/ghost.a.animations.json</CodeHeader>

```json
{
    "format_version": "1.8.0",
    "animations": {
        "animation.ghost.idle": {
            "loop": true,
            "animation_length": 3,
            "bones": {
                "body": {
                    "rotation": { "0.0": [10, 0, 0], "3.0": [10, 0, 0] },
                    "position": {
                        "0.0": [0, 0, 0],
                        "1.5": [0, 1, 0],
                        "3.0": [0, 0, 0]
                    }
                },
                "leftArm": {
                    "rotation": {
                        "0.0": [-10, 0, 0],
                        "1.5": [-5, 0, 0],
                        "3.0": [-10, 0, 0]
                    }
                },
                "rightArm": {
                    "rotation": {
                        "0.0": [-10, 0, 0],
                        "1.5": [-5, 0, 0],
                        "3.0": [-10, 0, 0]
                    }
                },
                "head": {
                    "rotation": {
                        "0.0": [-7.5, 0, 0],
                        "1.5": [-2.5, 0, 0],
                        "3.0": [-7.5, 0, 0]
                    }
                }
            }
        },
        "animation.ghost.attack": {
            "animation_length": 0.75,
            "bones": {
                "body": {
                    "rotation": {
                        "0.0": [10, 0, 0],
                        "0.2917": [10, 15, 0],
                        "0.5": [22.5, -12.5, 0],
                        "0.75": [10, 0, 0]
                    },
                    "position": {
                        "0.0": [0, 0, 0],
                        "0.2917": [0, 0, 3],
                        "0.5": [0, 0, -3],
                        "0.75": [0, 0, 0]
                    }
                },
                "leftArm": {
                    "rotation": { "0.0": [-10, 0, 0], "0.75": [-10, 0, 0] }
                },
                "rightArm": {
                    "rotation": {
                        "0.0": [-10, 0, 0],
                        "0.2083": [-10, 0, 0],
                        "0.2917": [-10, 62.5, 117.5],
                        "0.5": [-80, -17.5, 22.5],
                        "0.75": [-10, 0, 0]
                    }
                },
                "head": {
                    "rotation": { "0.0": [-7.5, 0, 0], "0.75": [-7.5, 0, 0] }
                }
            }
        },
        "animation.ghost.move": {
            "loop": true,
            "animation_length": 1,
            "bones": {
                "body": {
                    "rotation": {
                        "0.0": [15, 0, 0],
                        "0.25": [15, -2.5, 0],
                        "0.5": [15, 0, 0],
                        "0.75": [15, 2.5, 0],
                        "1.0": [15, 0, 0]
                    },
                    "position": [0, 0, 0]
                },
                "leftArm": {
                    "rotation": {
                        "0.0": [15, 0, 0],
                        "0.5": [20, 0, 0],
                        "1.0": [15, 0, 0]
                    }
                },
                "rightArm": {
                    "rotation": {
                        "0.0": [15, 0, 0],
                        "0.5": [20, 0, 0],
                        "1.0": [15, 0, 0]
                    }
                },
                "head": {
                    "rotation": {
                        "0.0": [-12.5, 0, 0],
                        "0.5": [-15, 0, 0],
                        "1.0": [-12.5, 0, 0]
                    }
                }
            }
        }
    }
}
```

</Spoiler>

## 你学到了什么

-   [x] 如何在 Blockbench 中创建实体
-   [x] 如何使用 Blockbench 为你的实体建模、纹理处理和动画制作
