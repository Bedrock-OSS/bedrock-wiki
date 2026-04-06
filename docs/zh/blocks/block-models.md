---
title: 方块模型
example: block_models
description: 了解如何为你的方块设置自定义模型。
category: 视觉
tags:
    - guide
    - beginner
    - easy
license: true
mentions:
    - QuazChick
    - SmokeyStack
---

虽然自定义方块无法使用原版[方块形状](/blocks/block-shapes)，但我们可以创建自己的模型，其格式类似于实体模型。
本教程将引导你使用[Blockbench](https://blockbench.net)为"纸袋"创建自定义方块模型的过程。
你应该从本教程中学到Minecraft几何体的主要特性，专门用于创建自定义方块。

**注意：** 自定义方块模型必须在[模型大小限制](/blocks/block-components#geometry)范围内。

## 模型设置

打开Blockbench并创建一个新的`Bedrock Block`项目。

![New project panel with Bedrock Block selected](new_project.png)

现在你可以为你的模型指定一个标识符！你的文件名可以在这里决定，或者稍后更改。

UV模式和纹理大小应保持不变。

:::danger NAMESPACES
模型标识符**不包含命名空间且不能包含冒号**。
冒号以前用于模型继承，在现代几何格式中无效。
:::

![](project_settings.png)

## 添加立方体

尽管不一定是完美的立方体形状，模型中的元素被称为**立方体**。
所有立方体必须包含在**骨骼**中，骨骼充当组的作用。

首先，让我们从大纲中通过点击`Add Group`为我们的模型创建一个根骨骼。
骨骼可以通过按`F2`重命名。

![](root_bone.png)

"纸袋"模型需要两个立方体：一个用于把手，一个用于主袋。
这些可以通过选择你的根骨骼并点击`Add Cube`来添加。

<WikiImage src="new_cube.png" alt width="600" class="my-4" />

立方体可以通过顶部工具栏移动、调整大小和旋转。下面是我的"paper_bag"模型将使用的两个立方体。

<WikiImage src="paper_bag_cubes.png" alt="" width="300" />

## 移除面

我们立方体的某些面可能不需要可见。在我的示例中，paper_bag的顶面应该被移除，以便你可以看到内部。

要移除一个面，在预览中点击它并移除其UV。

<WikiImage src="paper_bag_top_removed.png" alt="" width="600" />

此外，只有把手的北面和南面应该是可见的。你可以在UV面板中按住Ctrl同时点击面名称来选择多个面。

<WikiImage src="paper_bag_handle_faces_removed.png" alt="" width="600" />

## 预览纹理

:::tip
纹理可以在Blockbench中通过点击`Create Texture`并选择`Blank`来创建。
:::

"paper_bag"模型有多个预制的纹理，如下所列：

<div style="display: grid; grid-template-columns: repeat(auto-fill, 256px); column-gap: 1em;">

<ExampleFile path="RP/textures/wiki/blocks/paper_bag.png" />
<ExampleFile path="RP/textures/wiki/blocks/paper_bag_bottom_fold.png" />
<ExampleFile path="RP/textures/wiki/blocks/paper_bag_side_gusset.png" />

</div>

这些可以导入到Blockbench中，然后拖到每个适当的方块面上，尽管它们可能看起来不太对...

<WikiImage src="preview_textures_applied.png" alt="" width="300" />

## 重新排列UV

要将纹理放到正确的位置，你可能需要重新定位/调整面的UV映射。这可以通过选择受影响的面并使用UV面板来完成。

<WikiImage src="paper_bag_handle_uv.png" alt="" width="300" />
<WikiImage src="paper_bag_final.png" alt="" width="300" />

## 更改材质实例

应用自定义材质实例名称可以轻松定义某些面的渲染方式。
它们可以通过右键点击立方体并打开`Edit Material Instances`来编辑。

![](select_edit_material_instances.png)

对于"paper_bag"模型，东面和西面应该有它们自己的纹理。我们可以通过给它们一个材质实例来指示这一点。

![](edit_material_instances.png)

## 应用几何体和纹理

一旦从`File > Export > Export Bedrock Geometry`导出到你的`RP/models/blocks`文件夹，你就可以在方块JSON中引用模型。
然后，纹理可以通过材质实例通过它们的`RP/textures/terrain_texture.json`短名称应用。

:::warning BLOCKS.JSON
向你的方块添加[`minecraft:geometry`](/blocks/block-components#geometry)将导致游戏忽略`RP/blocks.json`中的纹理定义。

如果你在该文件中有方块的纹理定义，请确保将它们移动到[`minecraft:material_instances`](/blocks/block-components#material-instances)以使它们显示。
:::

<ExampleFile path="BP/blocks/paper_bag.json" />

## 结果

你现在知道如何制作一个使用你自己自定义模型的自定义方块了！

## 接下来做什么？

<CardGrid>
<Card
    title="创建剔除规则"
    link="/blocks/block-culling"
    image="/assets/images/icons/crafting_table.png"
>

为你的模型创建剔除规则可以通过告诉游戏隐藏不必要的渲染部分来提高性能。

</Card>
<Card
    title="条件骨骼"
    link="/blocks/block-components#bone-visibility"
    image="/assets/images/icons/levers.png"
>

使用[几何](/blocks/block-components#geometry)组件的`bone_visibility`参数，根据你方块的当前置换渲染不同的模型骨骼。

</Card>
<Card
    title="原版模型"
    link="/blocks/vanilla-block-models"
    image="/assets/images/icons/diamond_ore.png"
>

对于简单的方块，使用原版模型而不是自己制作！
这些模型在为你插件制作完整方块和植物时特别有用。

</Card>
</CardGrid>
