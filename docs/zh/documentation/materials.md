---
title: 原版材质
description: 材质文档。
show_outline: false
tags:
    - expert
mentions:
    - SirLich
    - Lufurrius
    - MedicalJewel105
    - SmokeyStack
    - ThomasOrs
---

:::warning
材质不适合心脏较弱的人。请准备好面对可能的崩溃、内容日志错误和较长的加载时间。
:::

材质对于使实体更加独特非常有用。您可以为您的 add-ons 创建新材质，或使用预先存在的原版材质。

您可以在[此处](/visuals/materials)详细了解如何创建材质。

## 原版材质列表

| 原版材质                                                                        |
| --------------------------------------------------------------------------------------- |
| [alpha_block](#alpha-block)                                                             |
| [alpha_block_color](#alpha-block-color)                                                 |
| [banner](#banner)                                                                       |
| [banner_pole](#banner-pole)                                                             |
| [beacon_beam](#beacon-beam)                                                             |
| [beacon_beam_transparent](#beacon-beam-transparent)                                     |
| [charged_creeper](#charged-creeper)                                                     |
| [conduit_wind](#conduit-wind)                                                           |
| [entity](#entity)                                                                       |
| [entity_alphablend](#entity-alphablend)                                                 |
| [entity_alphablend_nocolorentity_static](#entity-alphablend-nocolorentity-static)       |
| [entity_alphatest](#entity-alphatest)                                                   |
| [entity_alphatest_change_color](#entity-alphatest-change-color)                         |
| [entity_alphatest_change_color_glint](#entity-alphatest-change-color-glint)             |
| [entity_alphatest_glint](#entity-alphatest-glint)                                       |
| [entity_alphatest_glint_item](#entity-alphatest-glint-item)                             |
| [entity_alphatest_multicolor_tint](#entity-alphatest-multicolor-tint)                   |
| [entity_beam](#entity-beam)                                                             |
| [entity_beam_additive](#entity-beam-additive)                                           |
| [entity_change_color](#entity-change-color)                                             |
| [entity_change_color_glint](#entity-change-color-glint)                                 |
| [entity_custom](#entity-custom)                                                         |
| [entity_dissolve_layer0](#entity-dissolve-layer0)                                       |
| [entity_dissolve_layer1](#entity-dissolve-layer1)                                       |
| [entity_emissive](#entity-emissive)                                                     |
| [entity_emissive_alpha](#entity-emissive-alpha)                                         |
| [entity_emissive_alpha_one_sided](#entity-emissive-alpha-one-sided)                     |
| [entity_flat_color_line](#entity-flat-color-line)                                       |
| [entity_glint](#entity-glint)                                                           |
| [entity_lead_base](#entity-lead-base)                                                   |
| [entity_loyalty_rope](#entity-loyalty-rope)                                             |
| [entity_multitexture](#entity-multitexture)                                             |
| [entity_multitexture_alpha_test](#entity-multitexture-alpha-test)                       |
| [entity_multitexture_alpha_test_color_mask](#entity-multitexture-alpha-test-color-mask) |
| [entity_multitexture_color_mask](#entity-multitexture-color-mask)                       |
| [entity_multitexture_masked](#entity-multitexture-masked)                               |
| [entity_multitexture_multiplicative_blend](#entity-multitexture-multiplicative-blend)   |
| [entity_nocull](#entity-nocull)                                                         |
| [guardian_ghost](#guardian-ghost)                                                       |
| [item_in_hand](#item-in-hand)                                                           |
| [item_in_hand_entity_alphatest](#item-in-hand-entity-alphatest)                         |
| [item_in_hand_entity_alphatest_color](#item-in-hand-entity-alphatest-color)             |
| [item_in_hand_glint](#item-in-hand-glint)                                               |
| [item_in_hand_multicolor_tint](#item-in-hand-multicolor-tint)                           |
| [map](#map)                                                                             |
| [map_decoration](#map-decoration)                                                       |
| [map_marker](#map-marker)                                                               |
| [moving_block](#moving-block)                                                           |
| [moving_block_alpha](#moving-block-alpha)                                               |
| [moving_block_alpha_seasons](#moving-block-alpha-seasons)                               |
| [moving_block_alpha_single_side](#moving-block-alpha-single-side)                       |
| [moving_block_blend](#moving-block-blend)                                               |
| [moving_block_double_side](#moving-block-double-side)                                   |
| [moving_block_seasons](#moving-block-seasons)                                           |
| [opaque_block](#opaque-block)                                                           |
| [opaque_block_color](#opaque-block-color)                                               |
| [opaque_block_color_uv2](#opaque-block-color-uv2)                                       |

## 属性

材质可以具有一系列影响其外观的不同属性，包括：

### 背面剔除

这会使模型的内部面**不**渲染。

### Alpha 通道

启用模拟半透明，使用纹理的 Alpha 通道。

### 自发光

导致纹理不受昏暗光线影响，看起来像在发光。如果使用了 Alpha 通道，自发光程度与每个像素的透明程度直接成正比。

### 设置半透明

无论其他属性如何，始终以预定的半透明度完全渲染。

### 纹理混合

当存在多个纹理时，可以使用某种滤镜根据纹理改变实体的外观。

## 材质的详细信息

以下是每个材质的列表以及已知的一般属性。这些名称是对每个材质功能的模糊指示，有些可能表现相当不可预测，或有未记录的用法，因此这里只确定每个材质的内容：

:::warning
以下部分目前仅使用单纹理进行了测试。请持保留态度。强烈建议您自己实验这些材质。
:::

### alpha_block

-   背面剔除
-   完全不透明

### alpha_block_color

-   背面剔除
-   半透明如透明

### banner

不一致地渲染具有透明背景的物体。

-   不适用

### banner_pole

不一致地渲染具有透明背景的物体。

-   背面剔除
-   透明

### beacon_beam

-   完全不透明

### beacon_beam_transparent

这个相当特殊。它后面的粒子会在前面渲染，并且它似乎具有"正面剔除"。

-   Alpha 通道

### charged_creeper

不一致地渲染具有透明背景的物体。

-   自发光
-   设置半透明

### conduit_wind

-   透明
-   半透明如透明

### entity

-   完全不透明
-   背面剔除

### entity_alphablend

不一致地渲染具有透明背景的物体。

-   背面剔除
-   Alpha 通道

### entity_alphablend_nocolorentity_static

-   未知
-   可能崩溃

### entity_alphatest

-   透明
-   半透明如透明

### entity_alphatest_change_color

-   透明
-   半透明如不透明

### entity_alphatest_change_color_glint

-   未知

### entity_alphatest_glint

-   未知

### entity_alphatest_glint_item

-   未知

### entity_alphatest_multicolor_tint

-   灰度
-   背面剔除
-   透明
-   半透明如不透明

### entity_beam

-   透明
-   半透明如透明

### entity_beam_additive

粒子始终渲染在最上层

-   透明
-   自发光
-   背面剔除
-   设置半透明

### entity_change_color

-   完全不透明

### entity_change_color_glint

-   未知

### entity_custom

不一致地渲染具有透明背景的物体。

-   背面剔除
-   Alpha 通道

### entity_dissolve_layer0

不一致地渲染具有透明背景的物体。

-   未知

### entity_dissolve_layer1

-   未知

### entity_emissive

-   自发光
-   完全不透明
-   背面剔除

### entity_emissive_alpha

-   自发光
-   Alpha 通道
-   透明

### entity_emissive_alpha_one_sided

-   自发光
-   Alpha 通道
-   透明
-   背面剔除

### entity_flat_color_line

-   背面剔除
-   完全不透明

### entity_glint

-   未知

### entity_lead_base

不一致地渲染具有透明背景的物体。

-   Alpha 通道

### entity_loyalty_rope

-   未知

### entity_multitexture

-   未知

### entity_multitexture_alpha_test

-   未知

### entity_multitexture_alpha_test_color_mask

-   未知

### entity_multitexture_color_mask

-   未知

### entity_multitexture_masked

-   未知

### entity_multitexture_multiplicative_blend

-   未知

### entity_nocull

-   完全不透明

### guardian_ghost

不一致地渲染具有透明背景的物体。

-   背面剔除
-   Alpha 通道

### item_in_hand

-   完全不透明
-   背面剔除

### item_in_hand_entity_alphatest

-   透明
-   半透明根据级别变为不透明或透明

### item_in_hand_entity_alphatest_color

-   透明
-   半透明根据级别变为不透明或透明

### item_in_hand_glint

-   未知

### item_in_hand_multicolor_tint

-   灰度
-   完全不透明
-   背面剔除

### map

-   透明
-   半透明根据级别变为不透明或透明

### map_decoration

-   背面剔除
-   透明
-   半透明根据级别变为不透明或透明

### map_marker

-   背面剔除
-   透明
-   半透明根据级别变为不透明或透明
-   可能崩溃

### moving_block

-   完全不透明
-   背面剔除

### moving_block_alpha

-   背面剔除
-   透明
-   半透明根据级别变为不透明或透明

### moving_block_alpha_seasons

-   半透明根据级别变为不透明或透明
-   透明

### moving_block_alpha_single_side

-   背面剔除
-   透明
-   半透明根据级别变为不透明或透明

### moving_block_blend

不一致地渲染具有透明背景的物体。

-   背面剔除
-   Alpha 通道

### moving_block_double_side

-   完全不透明

### moving_block_seasons

-   完全不透明
-   背面剔除

### opaque_block

-   完全不透明
-   背面剔除

### opaque_block_color

-   完全不透明
-   背面剔除

### opaque_block_color_uv2

-   完全不透明
-   背面剔除

:::warning
请注意，这些也仅使用 RenderDragon 平台进行了测试。非 RenderDragon 视觉可能有所不同。
:::