---
title: 轨道相机
category: 技术
mentions:
    - BedrockCommands
    - zheaEvyline
description: 此技术允许你将相机旋转限制在围绕玩家、实体或位置的轨道上，轨道的高度和半径完全可调。
---

## 简介

[来自基岩版命令社区 (BCC) Discord](https://bedrockcommands.org/)

此技术允许你将相机旋转限制在围绕玩家、实体或位置的轨道上，轨道的高度和半径完全可调。

## 视频演示

<YouTubeEmbed id="yOlWjTpInFE" />

## 命令

<CodeHeader>BP/functions/wiki/camera/orbital.mcfunction</CodeHeader>

```yaml
execute as @p at @s anchored eyes rotated ~ 0 positioned ^^1^-2 run camera @s set minecraft:free ease 0.1 linear pos ~~~ facing @s
```

![一个重复命令块](/assets/images/commands/command-block-chain/1.png)

**2D 可视化：**

![轨道相机 2D 可视化](2d-visualization.gif)

**命令解析：**

-   `as @p`
    -   将执行目标设置为最近的玩家。
-   `at @s`
    -   将执行位置设置在目标玩家的自身位置。
-   `anchored eyes`
    -   将执行位置提升到目标玩家的眼部高度。
-   `rotated ~ 0`
    -   将执行旋转设置为相对于目标玩家的水平旋转，但将垂直旋转限制为 0°（直视）。
    -   如果你想锁定水平旋转，只需改为：`rotated 0 ~`
        -   注意：值 `0` 可以更改为你需要面对的方向。参阅[旋转](/commands/selectors#rotation)了解更多。
    -   如果你不想锁定垂直旋转，只需省略这部分以获得完整的球形旋转。但是，这不会阻止相机进入地下。
-   `positioned ^^1^-2`
    -   将执行位置向前移动 1 方块并向后移动 2 方块。
    -   增加或减少值 1 以增加/减少轨道高度。
    -   增加或减少值 -2 以增加/减少轨道半径。
        -   负值将设置在玩家后面。
        -   正值将设置在玩家前面。
        -   要了解更多，请参阅：[坐标系统](/commands/relative-coordinates)
-   `run camera @s set minecraft:free ease 0.1 linear pos ~~~`
    -   使用 `minecraft:free` 预设和 `0.1` 的线性缓动值在相对坐标（目标玩家视线后方 2 方块、上方 1 方块）为目标玩家设置相机
    -   要调整相机移动速度，增加/减少缓动值 `0.1`
    -   要了解 `/camera` 命令及其可用选项（如预设和缓动），请参阅以下资源：
        -   [相机命令入门](https://learn.microsoft.com/en-us/minecraft/creator/documents/cameracommandintroduction)
        -   [相机命令视频教程](https://youtu.be/GnYrZlBCyWg)
-   `facing @s`
    -   将相机视角方向切换为面对目标玩家自身。

**类似示例：**

<CodeHeader>BP/functions/wiki/camera/orbital.mcfunction</CodeHeader>

```yaml
# 围绕带有 'wiki:orbital_camera.focus' 标签的实体旋转相机
execute as @p at @e[tag=wiki:orbital_camera.focus] anchored eyes rotated as @s rotated ~ 0 positioned ^^1^-5 run camera @s set minecraft:free ease 0.1 linear pos ~~~ facing @e[tag=wiki:orbital_camera.focus]
```

![一个重复命令块](/assets/images/commands/command-block-chain/1.png)

<CodeHeader>BP/functions/wiki/camera/orbital.mcfunction</CodeHeader>

```yaml
# 围绕位置 6 7 8 旋转相机
execute as @p positioned 6 7 8 rotated as @s rotated ~ 0 positioned ^^1^-5 run camera @s set minecraft:free ease 0.1 linear pos ~~~ facing 6 7 8
```