---
title: 坐标空间转换
description: 学习如何在客户端实体定义中在骨骼、实体和世界空间坐标之间进行转换。
category: 教程
tags:
    - intermediate
mentions:
    - Johnb003
    - SmokeyStack
---

## 概述

在本页中，我们将讨论如何在 Minecraft 中在不同的坐标系之间进行转换。你可能有很多理由需要这样做：

-   如果你想使用细长的立方体构建 3D 线条来可视化某些 3D 空间，你需要从世界坐标转换到实体骨骼。
-   如果你想进行精确的头部追踪，并想测量从实体上特定关节到目标的角度。
-   如果你想从武器尖端发射投射物。
-   如果你想求解 IK 链以使肢体匹配地面接触点。

## 背景知识

在开始指南之前，有几个背景主题值得了解。

### 矩阵

通常在我们把所有内容发送到显卡时，我们会将内容转换为矩阵，因为通过一组矩阵来变换许多顶点（例如网格的顶点）非常高效。游戏通常使用其他表示方式，例如四元数，或者在 Minecraft 中使用欧拉旋转，但矩阵是很好的入门基础。

如果你看到一个充满各种数值的 4x4 矩阵，如果你不习惯使用它们，可能会觉得需要特殊能力才能看穿它们，就像这样。

<WikiImage src="image-1.png" />

但是，通常我们处理 3D 变换的矩阵只是一个位置偏移和由"轴向量"表示的旋转，这些轴向量描述了 X、Y 和 Z 轴，每个轴都是一个 3 分量向量。

当写成 3x3 矩阵时，方向向量是单位长度向量（除非有缩放），这些向量就像你习惯看到的任何方向向量一样，它们有 x、y、z 分量来定义该空间的轴方向。

<WikiImage src="image.png" />

在 3x3 矩阵中（尤其是在教科书中），它们沿列排列在二维数组中，就像这样：

```
[ XAxis.x  YAxis.x  ZAxis.x ]
[ XAxis.y  YAxis.y  ZAxis.y ]
[ XAxis.z  YAxis.z  ZAxis.z ]
```

在程序中，你总是会将数据以 `<XAxis.x, XAxis.y, XAxis.z, YAxis.x, YAxis.y, YAxis.z, ZAxis.x, ZAxis.y, ZAxis.z>` 的形式存储在内存中，无论你是行优先还是列优先（[关于行优先与列优先的 Wiki](https://en.wikipedia.org/wiki/Row-_and_column-major_order)），这只意味着如果你是行优先，你将 XAxis 沿行放置。如果你的数学库遵循规则，那么它会影响**相乘的顺序**：

对于所有矩阵乘法，它始终是行 x 列。

所以，使用**行优先**进行向量和矩阵乘法时是：row_vector * matrix = row_vector：

<WikiImage src="image-2.png" />

使用**列优先**进行与行优先相同的乘法时，你需要反转顺序：

<WikiImage src="image-3.png" />

上述区别非常重要，特别是如果你在线阅读一些材料以便理解数据被变换的顺序。

所以这意味着，如果我们有一个相对于右手的位置，并且我们想知道它在世界中的位置，我们必须先用右手变换它，然后是右肘、右肩、脊柱、骨盆、根、实体等等，直到它处于世界空间。用列优先写法是这样的：

```
Entity * RootBone * Pelvis * Spine0 .. SpineN * RShoulder * RightElbow * RightHand * point;
```

如果你要进行更复杂的变换，强烈建议命名你的变换以反映它们从哪个空间变换到哪个空间。所以对于上面的内容，我们会使用类似这样的命名：

```
World_To_Entity * Entity_To_Root * Root_To_Pelvis * Pelvis_To_Spine0 .. Spine(N-1)_To_SpineN * SpineN_To_RShoulder * RShoulder_To_RElbow * RElbow_To_RHand * RHand_point;
```

这样我们就不会对我们处于什么"空间"感到困惑。上面描述的是"局部空间"。每个关节都相对于父关节。但如果我们将从 `Root` 到 `RHand` 的所有内容相乘，得到的变换仍然是 `RHand` 变换，只是处于"角色或实体空间"。要将其转换到世界空间，我们需要乘以 `World_To_Entity * Entity_To_RHand = World_To_RHand`

从技术上讲，这种"To"命名有点令人困惑，因为应用于点的实体变换实际上是 `EntityToWorld`，但它是从右到左应用的，所以 `World_To_Entity` 从右到左读是 `Entity_To_World`。我也见过：`WorldFromEntity * EntityFromRoot`。无论使用"From 还是 To"，使用这种相对命名而不是绝对命名的好处是，当你看到它写出来时，你还可以验证你的数学是否正确：

```
A_To_B = A_To_Something * Something_To_B
              ^^^^^^^^^^^^^^^^^^^^^
```

标记为 `^` 的区域应该始终匹配。组合它并移除中间部分就得到了它做什么的自然名称。

最后，回到 Minecraft。在撰写本文时，Minecraft 没有可以相乘的变换，所以它们不推断列优先或行优先表示法。你只是得到一个变换，如何应用它取决于你。但是，由于上面选择了列优先，我们可以写下操作如何作为序列工作，只要你按顺序应用它们，就没问题。

此外，无论我们使用的是 TRS（变换旋转缩放组合对象）、四元数、矩阵还是欧拉角，当涉及旋转时，顺序确实很重要。先旋转 A 再旋转 B，与先旋转 B 再旋转 A 是不同的。

## 在开始之前先了解世界

让我们考虑那些轴向量在未旋转的标准情况下的样子。我们实际上可以通过在世界中移动来确定正 X、Y 和 Z 的方向。当你第一次进入游戏时，你面向的是游戏所说的正北方向。如果你向前走，你会看到 Z 值增加。如果你跳跃，你会看到 Y 值上升。那么 X 呢，这不对！其实没错，是左边！当你继续面向北方时，如果你向左平移，这会增加你的 X 值。这是一个右手坐标系（如果你将手指指向一个轴，然后向下一个连续的轴弯曲，你的拇指指向第三个轴。XY->Z，YZ->X，循环 Z：ZX->Y）。

## 终于！！让我们从实体开始

创建实体时，我建议先在 Blockbench 中开始，并将你创建的第一个实体设为简单的 3 轴框架，就像这样：

<WikiImage src="image-4.png" />

此时有几个奇怪的事情需要注意。请非常仔细地关注 Blockbench 标记的"北、东、南和西"的方向。

1. 首先需要注意的是，这与 Minecraft 世界坐标系旋转了 180 度。你应该让你的实体面向"北"，相对于游戏世界坐标是负 Z 方向。
2. 事情变得更加奇怪。如果你将方块沿正 X 方向移动，方块坐标显示为正 x 值，但是如果你创建一个骨骼，然后转到动画选项卡，并尝试调整骨骼的位置，移动手柄仍然如预期，但现在沿正方向拖动手柄实际上会给你负的 X 值。动画中的 +X 朝西，而 +Y 仍然朝上，+Z 仍然朝南。所以与 Minecraft 世界相比，我们必须翻转 Z，并开始使用左手坐标系。
3. 实体中有 16 倍的缩放因子。世界中的"方块"或 1 个单位，在实体中实际上是 16 个单位。

让我们尝试将我们的 3 轴物体分组到一个骨骼下。
然后复制该组，这样我们就有一个可以保留在实体处，另一个可以移动到世界位置。

<WikiImage src="image-5.png" />

1. 转到动画选项卡。

<WikiImage src="image-6.png" />

2. 创建一个新动画。

<WikiImage src="image-7.png" />

3. 为移动器添加一个位置关键帧。

<WikiImage src="image-8.png" />

4. 尝试在 X 轴上移动并确认事情变得奇怪。

<WikiImage src="image-9.png" />

6. 现在让我们使用在 `pre_animation` 脚本中设置的变量来设置位置。

<WikiImage src="image-11.png" />

7. 你应该能够从最小机器人示例中混合搭配，了解如何开始你的实体。在行为方面，你现在不需要太多。也许只需要：

```json
"minecraft:physics": {},
"minecraft:collision_box": {},
```

在实体方面，你只需要最低限度的内容来播放动画：

```json
"animations": {
    "myAnim": "animation.tut_transform.move"
},
"scripts": {
    "pre_animation": [
        "// TODO -- 我们接下来将填充这部分。"
    ],
    "animate": [
        "myAnim"
    ]
}
```

最后对于脚本，我们可以执行以下操作：

```json
"
v.target.x = 10;
v.target.y = q.position(1);
v.target.z = 10;

v.target.x = v.target.x - q.position(0);
v.target.y = v.target.y - q.position(1);
v.target.z = v.target.z - q.position(2);

t.cos_yaw = math.cos(q.body_y_rotation);
t.sin_yaw = math.sin(q.body_y_rotation);
t.x = v.target.x;
v.target.x=t.cos_yaw * t.x + t.sin_yaw * v.target.z;
v.target.z=-t.sin_yaw * t.x + t.cos_yaw * v.target.z;

v.target.x = v.target.x * 16;
v.target.y = v.target.y * 16;
v.target.z = -v.target.z * 16;
"
```

让我们分解一下：

pre_animation 在动画之前运行，并运行此脚本。该脚本旨在给定一个位置，也许你的插件会通过行为中的脚本参数提供输入？

现在你可以将这些硬编码为世界位置 10,y,10，其中 y 与实体的高度相同。

```molang
v.target.x = 10;
v.target.y = q.position(1);
v.target.z = 10;
```

所以一般来说，我们正在应用"TRS"变换、旋转和缩放来从一个空间转换到另一个空间。

从技术上讲，请记住我们会这样写变换栈：

```
Translation * RotationZ * RotationY * RotationX * Scale * point;
```

但是，在我们的情况下，我们不是从实体变换到世界，而是要从世界变换到实体。当我们有这样的可逆非交换数学运算时，应用这个逆运算的方法是这样的属性：

```
inverse(A*B) = inverse(B) * inverse(A)
```

这意味着，以相反的顺序执行操作的逆运算。所以我们按这个顺序将这些操作应用到我们的向量上。

1. inverse(Translation)
2. inverse(RotationZ)
3. inverse(RotationY)
4. inverse(RotationX)
5. inverse(Scale)

数学上看起来像这样：

```
Inverse(Scale) * Inverse(RotationX) * Inverse(RotationY) * Inverse(RotationZ) * Inverse(Translation) * point;
```

这是从右到左进行的。

#### 1：逆(平移)

如果正常情况下（正向）你从实体到世界，你会取你的实体相对位置（如关节位置）并加上实体的位置。所以反过来，我们减去实体的位置。

```molang
v.target_x = v.target_x - q.position(0);
v.target_y = v.target_y - q.position(1);
v.target_z = v.target_z - q.position(2);
```

#### 2：逆(Z 旋转)

目前实体似乎只能通过控制器调整俯仰和偏航。所以没有"Z"。我们跳过那一步。

#### 3：逆(Y 旋转)

要查询实体的偏航，有一个查询方法：q.body_y_rotation。我们将使用它，但考虑到正旋转应该让角色向左转。用角度旋转向量是一个相当简单的公式，使用 sin 和 cos，但正确设置符号很重要。想想如果你有一个面向世界 +z 的向量，然后向左旋转，+X 轴最初会变成正还是负？在我们的情况下，X 左在世界空间中仍然是正的。同样，如果我们有一个面向正 +X（向左）的向量，然后开始向左旋转，Z 轴会开始变成什么？是的，负的。你只需要取反 sine 项。最后注意，t.x 是一个临时变量，用于保存目标的值

```molang
t.cos_yaw = math.cos(q.body_y_rotation);
t.sin_yaw = math.sin(q.body_y_rotation);
t.x = v.target_x;
v.target_x=t.cos_yaw * t.x + t.sin_yaw * v.target_z;
v.target_z=-t.sin_yaw * t.x + t.cos_yaw * v.target_z;
```

注意，一般来说，我喜欢这样写：

```
new_first_axis = cos(angle) * first_axis - sin(angle) * second_axis;
new_second_axis = sin(angle) * first_axis + cos(angle) * second_axis;
```

其中 first 和 second axis 是与被旋转轴垂直的两个轴，按右手顺序。所以：XY、YZ 或 ZX。

换句话说，这是另一个替代方案，将与其他欧拉角 XY 和 YZ 更一致。

```molang
t.cos_yaw = math.cos(q.body_y_rotation);
t.sin_yaw = math.sin(q.body_y_rotation);
t.z = v.target.z;
v.target.z=t.cos_yaw * t.z - t.sin_yaw * v.target.x;
v.target.x=t.sin_yaw * t.z + t.cos_yaw * v.target.x;
```

#### 4：逆(X 旋转)

实体确实有可能俯仰，但实际上我还没有看到过。所以我跳过了它。

这是留给读者的练习，不过后面在涉及骨骼变换时会有更多信息，你可以从那里获得更多上下文。

#### 5：逆(缩放)

最后一步是应用从世界到实体的缩放。实体需要用更小的单位表示，所以这个方向的操作是乘法。如果我们从实体到世界，它会除以 16。

这里还有一个隐藏的最后取反，正如指出的那样，在 Blockbench 中动画时 X 实际上与它看起来应该的方向相反，但这实际上与世界坐标框架对齐，而 Z 仍然是相反的。所以我们只需要在缩放步骤中翻转 Z。

```molang
v.target.x = v.target.x * 16;
v.target.y = v.target.y * 16;
v.target.z = -v.target.z * 16;
```
