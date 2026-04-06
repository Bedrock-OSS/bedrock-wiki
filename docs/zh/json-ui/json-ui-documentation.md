---
title: JSON UI 文档
category: 文档
nav_order: 1
mentions:
    - KalmeMarq
    - SirLich
    - solvedDev
    - Joelant05
    - GTB3NW
    - stirante
    - sermah
    - MedicalJewel105
    - tinedpakgamer
    - LeGend077
    - TheDataLioness
    - shanewolf38
    - JosiahDZD
    - Yalums
    - inotflying
    - TheItsNameless
    - SmokeyStack
    - Gotemba912
    - QuazChick
    - 1cce
    - MinecraftBedrockArabic
    - smell-of-curry
    - causal-guide
description: JSON UI 文档。
---

## UI 元素

### 元素类型

| 名称             | 描述                                                                                     | 允许的属性                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ---------------- | ----------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| panel            | 容器，类似 HTML 中的 `<div>`                                                               | [Control](/zh/json-ui/json-ui-documentation#control) <br> [Layout](/zh/json-ui/json-ui-documentation#layout) <br> [Data Binding](/zh/json-ui/json-ui-documentation#data-binding)                                                                                                                                                                                                                                                                        |
| stack_panel      | 类似 `panel`，但根据 `orientation` 属性值堆叠其子元素                           | [Stack Panel](/zh/json-ui/json-ui-documentation#stack-panel) <br> [Collection](/zh/json-ui/json-ui-documentation#collection) <br> [Control](/zh/json-ui/json-ui-documentation#control) <br> [Layout](/zh/json-ui/json-ui-documentation#layout) <br> [Data Binding](/zh/json-ui/json-ui-documentation#data-binding)                                                                                                                                            |
| collection_panel | 类似 `stack_panel`，但没有 `orientation` 属性                          | [Collection](/zh/json-ui/json-ui-documentation#collection) <br> [Control](/zh/json-ui/json-ui-documentation#control) <br> [Layout](/zh/json-ui/json-ui-documentation#layout) <br> [Data Binding](/zh/json-ui/json-ui-documentation#data-binding)                                                                                                                                                                                                           |
| grid             | 元素网格                                                                                | [Grid](/zh/json-ui/json-ui-documentation#grid) <br> [Collection](/zh/json-ui/json-ui-documentation#collection) <br> [Control](/zh/json-ui/json-ui-documentation#control) <br> [Layout](/zh/json-ui/json-ui-documentation#layout) <br> [Data Binding](/zh/json-ui/json-ui-documentation#data-binding)                                                                                                                                                          |
| label            | 文本元素                                                                                    | [Text](/zh/json-ui/json-ui-documentation#text) <br> [Control](/zh/json-ui/json-ui-documentation#control) <br> [Layout](/zh/json-ui/json-ui-documentation#layout) <br> [Data Binding](/zh/json-ui/json-ui-documentation#data-binding)                                                                                                                                                                                                                       |
| image            | 精灵元素。绘制纹理。                                                                | [Sprite](/zh/json-ui/json-ui-documentation#sprite) <br> [Control](/zh/json-ui/json-ui-documentation#control) <br> [Layout](/zh/json-ui/json-ui-documentation#layout) <br> [Data Binding](/zh/json-ui/json-ui-documentation#data-binding)                                                                                                                                                                                                                   |
| input_panel      | 接受输入的 `panel`                                                                    | [Input](/zh/json-ui/json-ui-documentation#input) <br> [Focus](/zh/json-ui/json-ui-documentation#focus) <br> [Sound](/zh/json-ui/json-ui-documentation#sound) <br> [Control](/zh/json-ui/json-ui-documentation#control) <br> [Layout](/zh/json-ui/json-ui-documentation#layout) <br> [Data Binding](/zh/json-ui/json-ui-documentation#data-binding)                                                                                                               |
| button           | 按钮，具有 4 种状态（默认、悬停、按下和锁定）                          | [Button](/zh/json-ui/json-ui-documentation#button) <br> [Input](/zh/json-ui/json-ui-documentation#input) <br> [Focus](/zh/json-ui/json-ui-documentation#focus) <br> [Sound](/zh/json-ui/json-ui-documentation#sound) <br> [Control](/zh/json-ui/json-ui-documentation#control) <br> [Layout](/zh/json-ui/json-ui-documentation#layout) <br> [Data Binding](/zh/json-ui/json-ui-documentation#data-binding)                                                          |
| toggle           | 开关，具有 2 种状态（勾选或未勾选）。每种状态都有悬停和锁定变体 | [Toggle](/zh/json-ui/json-ui-documentation#toggle) <br> [Input](/zh/json-ui/json-ui-documentation#input) <br> [Focus](/zh/json-ui/json-ui-documentation#focus) <br> [Sound](/zh/json-ui/json-ui-documentation#sound) <br> [Control](/zh/json-ui/json-ui-documentation#control) <br> [Layout](/zh/json-ui/json-ui-documentation#layout) <br> [Data Binding](/zh/json-ui/json-ui-documentation#data-binding)                                                          |
| dropdown         | 用于下拉目的的开关                                                                  | [Dropdown](/zh/json-ui/json-ui-documentation#dropdown) <br> [Toggle](/zh/json-ui/json-ui-documentation#toggle) <br> [Input](/zh/json-ui/json-ui-documentation#input) <br> [Focus](/zh/json-ui/json-ui-documentation#focus) <br> [Sound](/zh/json-ui/json-ui-documentation#sound) <br> [Control](/zh/json-ui/json-ui-documentation#control) <br> [Layout](/zh/json-ui/json-ui-documentation#layout) <br> [Data Binding](/zh/json-ui/json-ui-documentation#data-binding) |
| slider           | 范围输入元素                                                                             | [Slider](/zh/json-ui/json-ui-documentation#slider) <br> [Input](/zh/json-ui/json-ui-documentation#input) <br> [Focus](/zh/json-ui/json-ui-documentation#focus) <br> [Sound](/zh/json-ui/json-ui-documentation#sound) <br> [Control](/zh/json-ui/json-ui-documentation#control) <br> [Layout](/zh/json-ui/json-ui-documentation#layout) <br> [Data Binding](/zh/json-ui/json-ui-documentation#data-binding)                                                          |
| slider_box       | 用于更改滑块值的滑块按钮                                       | [Slider Box](/zh/json-ui/json-ui-documentation#slider-box) <br> [Input](/zh/json-ui/json-ui-documentation#input) <br> [Control](/zh/json-ui/json-ui-documentation#control) <br> [Layout](/zh/json-ui/json-ui-documentation#layout) <br> [Data Binding](/zh/json-ui/json-ui-documentation#data-binding)                                                                                                                                                        |
| edit_box         | 文本字段元素。默认单行                                                | [Text Edit](/zh/json-ui/json-ui-documentation#text-edit) <br> [Button](/zh/json-ui/json-ui-documentation#button) <br> [Input](/zh/json-ui/json-ui-documentation#input) <br> [Focus](/zh/json-ui/json-ui-documentation#focus) <br> [Control](/zh/json-ui/json-ui-documentation#control) <br> [Layout](/zh/json-ui/json-ui-documentation#layout) <br> [Data Binding](/zh/json-ui/json-ui-documentation#data-binding)                                                  |
| scroll_view      | 创建滚动面板元素                                                               | [Scroll View](/zh/json-ui/json-ui-documentation#scroll-view) <br> [Input](/zh/json-ui/json-ui-documentation#input) <br> [Control](/zh/json-ui/json-ui-documentation#control) <br> [Layout](/zh/json-ui/json-ui-documentation#layout) <br> [Data Binding](/zh/json-ui/json-ui-documentation#data-binding)                                                                                                                                                      |
| scrollbar-track  | 滚动条轨道                                                                             | [Input](/zh/json-ui/json-ui-documentation#input) <br> [Control](/zh/json-ui/json-ui-documentation#control) <br> [Layout](/zh/json-ui/json-ui-documentation#layout)                                                                                                                                                                                                                                                                                      |
| scrollbar_box    | 滚动条"滑块"/按钮。可拖动的滚动手柄。默认垂直方向 | [Input](/zh/json-ui/json-ui-documentation#input) <br> [Control](/zh/json-ui/json-ui-documentation#control) <br> [Layout](/zh/json-ui/json-ui-documentation#layout)                                                                                                                                                                                                                                                                                      |
| factory          | 元素生成器                                                                             | [Control](/zh/json-ui/json-ui-documentation#control) <br> [Layout](/zh/json-ui/json-ui-documentation#layout)                                                                                                                                                                                                                                                                                                                                         |
| screen           | 屏幕元素                                                                                  | [Screen](/zh/json-ui/json-ui-documentation#screen) <br> [Control](/zh/json-ui/json-ui-documentation#control) <br> [Layout](/zh/json-ui/json-ui-documentation#layout) <br> [Data Binding](/zh/json-ui/json-ui-documentation#data-binding)                                                                                                                                                                                                                   |
| custom           | 特殊渲染器元素，因为在代码中创建而对于 JSON UI 来说太复杂       | [Custom Render](/zh/json-ui/json-ui-documentation#custom-render) <br> [Control](/zh/json-ui/json-ui-documentation#control) <br> [Layout](/zh/json-ui/json-ui-documentation#layout) <br> [Data Binding](/zh/json-ui/json-ui-documentation#data-binding)                                                                                                                                                                                                     |
| selection_wheel  |                                                                                                 | [Selection Wheel](/zh/json-ui/json-ui-documentation#selection-wheel) <br> [Input](/zh/json-ui/json-ui-documentation#input) <br> [Focus](/zh/json-ui/json-ui-documentation#focus) <br> [Sound](/zh/json-ui/json-ui-documentation#sound) <br> [Control](/zh/json-ui/json-ui-documentation#control) <br> [Layout](/zh/json-ui/json-ui-documentation#layout) <br> [Data Binding](/zh/json-ui/json-ui-documentation#data-binding)                                        |

#### 旧元素类型（已不再可用）

| 名称           | 描述                                              | 允许的属性                                                                                                                                                                                                                                                                                                                                                                                                                          |
| -------------- | -------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| tab            | 在添加开关之前制作标签页的方式    | [Tab](/zh/json-ui/json-ui-documentation#tab-legacy) <br> [Button](/zh/json-ui/json-ui-documentation#button) <br> [Input](/zh/json-ui/json-ui-documentation#input) <br> [Focus](/zh/json-ui/json-ui-documentation#focus) <br> [Sound](/zh/json-ui/json-ui-documentation#sound) <br> [Control](/zh/json-ui/json-ui-documentation#control) <br> [Layout](/zh/json-ui/json-ui-documentation#layout) <br> [Data Binding](/zh/json-ui/json-ui-documentation#data-binding) |
| carousel_label |                                                          | [Carousel Text](/zh/json-ui/json-ui-documentation#carousel-text-legacy) <br> [Text](/zh/json-ui/json-ui-documentation#text) <br> [Control](/zh/json-ui/json-ui-documentation#control) <br> [Layout](/zh/json-ui/json-ui-documentation#layout) <br> [Data Binding](/zh/json-ui/json-ui-documentation#data-binding)                                                                                                                                          |
| grid_item      | 一个 `panel`，专门作为网格的项目/子元素 | [Control](/zh/json-ui/json-ui-documentation#control) <br> [Layout](/zh/json-ui/json-ui-documentation#layout) <br> [Data Binding](/zh/json-ui/json-ui-documentation#data-binding)                                                                                                                                                                                                                                                                     |
| scrollbar      |                                                          | [Input](/zh/json-ui/json-ui-documentation#input) <br> [Focus](/zh/json-ui/json-ui-documentation#focus) <br> [Control](/zh/json-ui/json-ui-documentation#control) <br> [Layout](/zh/json-ui/json-ui-documentation#layout) <br> [Data Binding](/zh/json-ui/json-ui-documentation#data-binding)                                                                                                                                                               |

## 属性

### Control

| 属性名称             |         类型         | 默认值 | 描述                                                                                                                                                                                        |
| ------------------------- | :------------------: | :-----------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| visible                   |       boolean        |    `true`     | UI 元素是否可见                                                                                                                                                                |
| enabled                   |       boolean        |    `true`     | 如果为 true 且 UI 元素或任何子元素处于锁定状态，则它们将处于锁定                                                                                         |
| layer                     |         int          |      `0`      | Z 索引/层（类似于 CSS 中的 z-index）相对于父元素。较高的值渲染在上方，而负值渲染在父元素下方                                          |
| alpha                     |        float         |     `1.0`     | 元素的不透明度/透明度。它只会影响 UI 元素。其子元素不受影响。如果希望 alpha 同时应用于父元素和子元素，还需使用 `propagate_alpha` |
| propagate_alpha           |       boolean        |    `false`    | 如果 `alpha` 不仅应尽可能应用于父元素，还应用于其所有子元素                                                                                                               |
| clips_children            |       boolean        |    `false`    | 在视觉上和交互上切断 UI 元素边界之外的所有内容                                                                                                             |
| allow_clipping            |       boolean        |    `true`     | `clips_children` 是否在 UI 元素中有效。否则，它不会有任何效果                                                                                                                   |
| clip_offset               |    Vector [x, y]     |   `[0, 0]`    | 裁剪开始处的偏移                                                                                                                                                              |
| clip_state_change_event   |        string        |               |                                                                                                                                                                                                    |
| enable_scissor_test       |       boolean        |               | [https://www.khronos.org/opengl/wiki/Scissor_Test](https://www.khronos.org/opengl/wiki/Scissor_Test)                                                                                               |
| property_bag              |        object        |               | [属性包](/zh/json-ui/json-ui-documentation#property-bag) 包含与数据更相关的属性/变量，而不是 UI 元素的实际结构和外观               |
| selected                  |       boolean        |               | 文本框是否默认被选中                                                                                                                                                             |
| use_child_anchors         |       boolean        |    `false`    | 使用 UI 元素子元素的 `anchor_from` 和`anchor_to`                                                                                                                                |
| controls                  |        array         |               | 用于向元素添加子元素                                                                                                                                                                 |
| anims                     |       string[]       |               | 动画名称数组                                                                                                                                                                       |
| disable_anim_fast_forward |       boolean        |               |                                                                                                                                                                                                    |
| animation_reset_name      |        string        |               |                                                                                                                                                                                                    |
| ignored                   |       boolean        |    `false`    | UI 元素是否应该被忽略                                                                                                                                                                |
| variables                 |   array or object    |               | 更改变量值的一组条件                                                                                                                                             |
| modifications             |        array         |               | 允许修改下方资源包的 UI 文件（原版是底部）                                                                                                          |
| grid_position             | Vector [row, column] |               | 控件在网格内将占据的位置。这还允许修改硬编码网格的特定网格项                                                                            |
| collection_index          |         int          |               | 控件在集合中占据的索引                                                                                                                                                     |

#### 旧版（不再可用）

| 属性名称 |   类型   | 默认值 | 描述                                                                                                                                                                          |
| ------------- | :------: | :-----------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| z_order       |   int    |       0       | `layer` 属性的第一个版本                                                                                                                                                |
| scroll_report | string[] |               | 滚动面板内容更改时要通知的控件名称数组                                                                                          |
| alignment     |   enum   |               | 可能的值： <br> `top_left` <br> `top_middle` <br> `top_right` <br> `left_middle` <br> `center` <br> `right_middle` <br> `bottom_left` <br> `bottom_middle` <br> `bottom_right` |

### Layout

| 属性名称              |          类型          |      默认值       | 描述                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| -------------------------- | :--------------------: | :----------------------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| size                       | Vector [width, height] | `["default", "default"]` | UI 元素的大小。 <br> 可能的值： <br> `"default"`（默认值，即 `"100%"`） <br> `0`（像素数） <br> `"0px"`（像素数。与 0 相同，但放在带有 px 的字符串末尾。当您想将基于百分比的值与特定像素数相加或相减时使用。（例如 `"75% + 12px"`）） <br> `"0%"`（相对于父元素的百分比） <br> `"0%c"`（元素子元素总宽度/高度的百分比） <br> `"0%cm"`（该元素最大可见子元素宽度/高度的百分比） <br> `"0%sm"`（兄弟元素宽度/高度的百分比） <br> `"0%y"`（元素高度的百分比） <br> `"0%x"`（元素宽度的百分比） <br> `"fill"`（扩展到父元素的剩余宽度/高度） |
| max_size                   | Vector [width, height] | `["default", "default"]` | UI 元素可以拥有的最大大小                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| min_size                   | Vector [width, height] | `["default", "default"]` | UI 元素可以拥有的最小大小                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| offset                     |     Vector [x, y]      |         `[0, 0]`         | UI 元素相对于父 UI 元素的位置。它是基于左上角的，意味着坐标 [0, 0] 从屏幕左上角开始。 <br> `10`- 像素 <br> `"10px"` - 像素 <br> `"50%"` - 父元素的宽度/高度 <br> `"50%x"` - 元素的宽度 <br> `"50%y"` - 元素的高度                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| anchor_from                |          enum          |         `center`         | 父元素中的锚点。 <br> 可能的值： <br> `top_left` <br> `top_middle` <br> `top_right` <br> `left_middle` <br> `center` <br> `right_middle` <br> `bottom_left` <br> `bottom_middle` <br> `bottom_right`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| anchor_to                  |          enum          |         `center`         | 元素中的锚点。 <br> 可能的值： <br> `top_left` <br> `top_middle` <br> `top_right` <br> `left_middle` <br> `center` <br> `right_middle` <br> `bottom_left` <br> `bottom_middle` <br> `bottom_right`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| inherit_max_sibling_width  |        boolean         |         `false`          | 使用兄弟元素的最大宽度                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| inherit_max_sibling_height |        boolean         |         `false`          | 使用兄弟元素的最大高度                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| use_anchored_offset        |        boolean         |                          |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| contained                  |        boolean         |                          |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| draggable                  |          enum          |                          | 通过光标使元素可拖动。元素应该能够接受输入才能拖动（`input_panel`、`button` 等）并且必须具有所需的按钮映射。 <br> 可能的值：`vertical`、`horizontal` 和 `both`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| follows_cursor             |        boolean         |         `false`          | 跟随光标                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |

### Data Binding

| 属性名称 |                                         类型                                         | 默认值 | 描述                                        |
| ------------- | :----------------------------------------------------------------------------------: | :-----------: | -------------------------------------------------- |
| bindings      | [绑定对象](/zh/json-ui/json-ui-documentation#data-binding-array-object) 的向量 |               | 绑定并处理元素中的硬编码值 |

#### Data Binding 数组对象

数据绑定允许将硬编码的值/变量绑定到元素属性。

| 属性名称             |  类型   | 默认值 | 描述                                                                                                                                                                                                                                                      |
| ------------------------- | :-----: | :-----------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ignored                   | boolean |    `false`    | 绑定是否应该被忽略                                                                                                                                                                                                                                     |
| binding_type              |  enum   |               | 可能的值： <br> `global` <br> `view` <br> `collection` <br> `collection_details` <br> `none`                                                                                                                                                               |
| binding_name              | string  |               | 存储数据绑定名称或条件与其的值                                                                                                                                                                                                   |
| binding_name_override     | string  |               | 将存储在 `binding_name` 中的值应用于 UI 元素属性的名称                                                                                                                                                                               |
| binding_collection_name   | string  |               | 要使用的物品集合名称                                                                                                                                                                                                                       |
| binding_collection_prefix | string  |               |                                                                                                                                                                                                                                                                  |
| binding_condition         |  enum   |               | 数据绑定发生的条件。 <br> 可能的值： <br> `always` <br> `always_when_visible` <br> `visible` <br> `once` <br> `none` <br> `visibility_changed`                                                                                        |
| source_control_name       | string  |               | 要观察其属性值的 UI 元素名称                                                                                                                                                                                                            |
| source_property_name      | string  |               | 存储 `source_control_name` 中引用的 UI 元素的属性值                                                                                                                                                                        |
| target_property_name      | string  |               | `source_property_name` 中存储的值将被应用到的 UI 元素属性                                                                                                                                                                       |
| resolve_sibling_scope     | boolean |               | 如果为 `true`，则仅允许在同一控件中选择兄弟元素，并阻止 `source_control_name` 中兄弟作用域之外的所有控件名称。如果兄弟和父级具有相同的名称，即使为 `true`，父级也优先。 |

### Stack Panel

| 属性名称 | 类型 | 默认值 | 描述                                                                                                |
| ------------- | :--: | :-----------: | ---------------------------------------------------------------------------------------------------------- |
| orientation   | enum |  `vertical`   | `stack_panel` 内部元素堆叠的方向。 <br> 可能的值： <br> `vertical` <br> `horizontal` |

### Grid

| 属性名称             |          类型          | 默认值 | 描述                                                                                                                         |
| ------------------------- | :--------------------: | ------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| grid_dimensions           | Vector [columns, rows] |               | 网格的列数和行数                                                                                             |
| maximum_grid_items        |          int           |               | 网格将生成的最大项目数                                                                                      |
| grid_dimension_binding    |         string         |               | 网格尺寸的绑定名称                                                                                                    |
| grid_rescaling_type       |          enum          |               | 网格重缩放方向。 <br> 可能的值： <br> `vertical` <br> `horizontal` <br> `none`                                     |
| grid_fill_direction       |          enum          |               | 可能的值： <br> `vertical` <br> `horizontal` <br> `none`                                                                      |
| grid_item_template        |         string         |               | 能够处理集合的元素 <br>（例如 `"common.container_item"`、`"container_items"`、`"inventory_items"` 等） |
| precached_grid_item_count |          int           |               |                                                                                                                                     |

### Text

| 属性名称           |       类型       |   默认值   | 描述                                                                                                                                       |
| ----------------------- | :--------------: | :---------------: | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| text                    |      string      |                   | 文本内容                                                                                                                                      |
| color                   | Vector [r, g, b] | `[1.0, 1.0, 1.0]` | 文本颜色。RGB 值从 0.0 到 1.0                                                                                                             |
| locked_color            | Vector [r, g, b] |                   | 父元素具有 `enabled: false` 时的文本颜色                                                                                                     |
| shadow                  |     boolean      |      `false`      | 文本阴影                                                                                                                                       |
| hide_hyphen             |     boolean      |      `false`      | 隐藏由断行引起的连字符                                                                                                               |
| notify_on_ellipses      |     string[]     |                   | 当文本获得或失去省略号时要通知的控件名称数组                                                                         |
| enable_profanity_filter |     boolean      |      `false`      | 是否应审查"坏"词                                                                                                                 |
| locked_alpha            |      float       |                   | 父元素具有 `enabled: false` 时的标签不透明度/透明度                                                                                    |
| font_size               |       enum       |     `normal`      | 文本大小。 <br> 可能的值： <br> `small` <br> `normal` <br> `large` <br> `extra_large`                                                |
| font_scale_factor       |      float       |       `1.0`       | 文本缩放                                                                                                                                     |
| localize                |     boolean      |      `false`      | `text` 是否可以被翻译                                                                                                         |
| line_padding            |      number      |                   | 行间距                                                                                                                               |
| font_type               |       enum       |     `default`     | 文本字体。 <br> 可能的值： <br> `default` <br> `rune` <br> `unicode` <br> `smooth` <br> `MinecraftTen` <br> 或任何其他自定义字体 |
| backup_font_type        |       enum       |     `default`     | 如果 `font_type` 不起作用则使用的字体                                                                                                              |
| text_alignment          |       enum       |                   | 文本对齐方向。如果未定义，它将根据 `anchor_from` 和 `anchor_to` 自动调整                                 |

#### 旧版（不再可用）

| 属性名称 |  类型   | 默认值 | 描述                                                       |
| ------------- | :-----: | :-----------: | ----------------------------------------------------------------- |
| wrap          | boolean |    `false`    | 如果文本大于元素宽度则将文本分成多行 |
| clip          | boolean |    `false`    |                                                                   |

`notify_on_ellipses` 的用法。主要用于硬编码文本。

<CodeHeader>RP/ui/example_file.json</CodeHeader>

```json
{
  "label": {
    ...
    "notify_on_ellipses": [
      "my_button"
    ]
  },

  "my_button": {
    ...
    "bindings": [
      {
        "binding_type": "view",
        "source_property_name": "#using_ellipses",
        "target_property_name": "#visible"
      }
    ]
  }
}
```

### Sprite

| 属性名称               |              类型              |  默认值  | 描述                                                                                                                                                                                                                                                                                |
| --------------------------- | :----------------------------: | :-------------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| texture                     |             string             |                 | 从附加包根目录开始的图像路径。（例如 `"textures/ui/White"`）                                                                                                                                                                                                                           |
| allow_debug_missing_texture |            boolean             |     `true`      | 如果未找到纹理则显示 missing_texture                                                                                                                                                                                                                                    |
| uv                          |         Vector [u, v]          |                 | 纹理映射的起始位置                                                                                                                                                                                                                                                      |
| uv_size                     |     Vector [width, height]     |                 | 纹理映射的大小                                                                                                                                                                                                                                                                |
| texture_file_system         |             string             | `InUserPackage` | 获取纹理的来源。 <br> 可能的值： <br> `InUserPackage` <br> `InAppPackage` <br> `RawPath` <br> `RawPersistent` <br> `InSettingsDir` <br> `InExternalDir` <br> `InServerPackage` <br> `InDataDir` <br> `InUserDir` <br> `InWorldDir` <br> `StoreCache` <br> 用法未知 |
| nineslice_size              | int or Vector [x0, y0, x1, y1] |                 | 9 切片。一种将纹理分成 9 份的方法。调整大小时角落将保持原位，其余部分将拉伸                                                                                                                                                             |
| tiled                       |        boolean or enum         |                 | 当 UI 元素大小大于纹理大小时纹理是否平铺。 <br> 可能的值： <br> `true`/`false` <br> `x` <br> `y`                                                                                                                                      |
| tiled_scale                 |        Vector [sX, sY]         |     `false`     | 平铺纹理的缩放                                                                                                                                                                                                                                                                 |
| clip_direction              |              enum              |                 | `clip_ratio` 的起始点位置。如果为 `down`，图像将从底部开始出现。 <br> 可能的值： <br> `left` <br> `right` <br> `up` <br> `down` <br> `center`                                                                                                   |
| clip_ratio                  |             float              |                 | 裁剪多少。从 0.0 到 1.0                                                                                                                                                                                                                                                          |
| clip_pixelperfect           |            boolean             |                 | 裁剪是否应该尽可能像素精确                                                                                                                                                                                                                              |
| keep_ratio                  |            boolean             |     `true`      | 调整图像大小时保持比例                                                                                                                                                                                                                                                             |
| bilinear                    |            boolean             |     `false`     | 调整图像大小时使用双线性函数                                                                                                                                                                                                                                          |
| fill                        |            boolean             |     `false`     | 拉伸图像到指定大小                                                                                                                                                                                                                                                              |
| $fit_to_width               |            boolean             |                 |                                                                                                                                                                                                                                                                                            |
| zip_folder                  |             string             |                 |                                                                                                                                                                                                                                                                                            |
| grayscale                   |            boolean             |     `false`     | 以黑白渲染图像                                                                                                                                                                                                                                                            |
| force_texture_reload        |            boolean             |                 | 更改纹理路径时重新加载图像                                                                                                                                                                                                                                              |
| base_size                   |     Vector [width, height]     |                 |                                                                                                                                                                                                                                                                                            |

要使用裁剪，请将 `#*_ratio` 绑定名称绑定到带有绑定条件 `"always"` 的 `#clip-ratio` 属性。熔炉 UI 中的进度箭头和燃料图像的工作方式与此类似。

### Input

| 属性名称                      |                                          类型                                          | 默认值 | 描述                                                   |
| ---------------------------------- | :------------------------------------------------------------------------------------: | :-----------: | ------------------------------------------------------------- |
| button_mappings                    | [映射对象](/zh/json-ui/json-ui-documentation#button-mapping-array-object) 的向量 |               |                                                               |
| modal                              |                                        boolean                                         |               |                                                               |
| inline_modal                       |                                        boolean                                         |               |                                                               |
| always_listen_to_input             |                                        boolean                                         |               |                                                               |
| always_handle_pointer              |                                        boolean                                         |               |                                                               |
| always_handle_controller_direction |                                        boolean                                         |               |                                                               |
| hover_enabled                      |                                        boolean                                         |               |                                                               |
| prevent_touch_input                |                                        boolean                                         |               |                                                               |
| consume_event                      |                                        boolean                                         |               |                                                               |
| consume_hover_events               |                                        boolean                                         |               | 设置为 false 时，防止元素被悬停 |
| gesture_tracking_button            |                                         string                                         |               |                                                               |

#### Button Mapping 数组对象

| 属性名称                    |  类型   | 默认值 | 描述                                                                        |
| -------------------------------- | :-----: | :-----------: | ---------------------------------------------------------------------------------- |
| ignored                          | boolean |    `false`    | 映射是否应该被忽略                                                       |
| from_button_id                   | string  |               | 触发事件的动作 ID                                              |
| to_button_id                     | string  |               | 事件触发时要执行的动作 ID                                |
| mapping_type                     |  enum   |               | 可能的值： <br> `global` <br> `pressed` <br> `double_pressed` <br> `focused` |
| scope                            |  enum   |               | 可能的值： <br> `view` <br> `controller`                                     |
| input_mode_condition             |  enum   |               | 可能的值： <br> `not_gaze` <br> `not_gamepad` <br> `gamepad_and_not_gaze`    |
| ignore_input_scope               | boolean |               |                                                                                    |
| consume_event                    | boolean |               |                                                                                    |
| handle_select                    | boolean |               |                                                                                    |
| handle_deselect                  | boolean |               |                                                                                    |
| button_up_right_of_first_refusal | boolean |               |                                                                                    |

### Focus

| 属性名称                |                                                     类型                                                      | 默认值 | 描述                                                                                                                                                                                     |
| ---------------------------- | :-----------------------------------------------------------------------------------------------------------: | :-----------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| default_focus_precedence     |                                                      int                                                      |               | 屏幕打开后相对于屏幕上其他输入的优先级，以便被选中                                                                                                         |
| focus_enabled                |                                                    boolean                                                    |               | 方向键或手柄是否能聚焦元素                                                                                                                                           |
| focus_wrap_enabled           |                                                    boolean                                                    |               |                                                                                                                                                                                                 |
| focus_magnet_enabled         |                                                    boolean                                                    |               |                                                                                                                                                                                                 |
| focus_identifier             |                                                    string                                                     |               | 此元素的焦点标识符                                                                                                                                                               |
| focus_change_down            |                                                    string                                                     |               | 在 button.menu_down 时将接收焦点的可聚焦元素的标识符（`focus_identifier`）。如果希望防止焦点从底部逃逸，请使用 `FOCUS_OVERRIDE_STOP` |
| focus_change_up              |                                                    string                                                     |               | 在 button.menu_up 时将接收焦点的可聚焦元素的标识符（`focus_identifier`）。如果希望防止焦点从顶部逃逸，请使用 `FOCUS_OVERRIDE_STOP`      |
| focus_change_left            |                                                    string                                                     |               | 在 button.menu_left 时将接收焦点的可聚焦元素的标识符（`focus_identifier`）。如果希望防止焦点从左侧逃逸，请使用 `FOCUS_OVERRIDE_STOP`   |
| focus_change_right           |                                                    string                                                     |               | 在 button.menu_right 时将接收焦点的可聚焦元素的标识符（`focus_identifier`）。如果希望防止焦点从右侧逃逸，请使用 `FOCUS_OVERRIDE_STOP` |
| focus_mapping                |                                                     array                                                     |               |                                                                                                                                                                                                 |
| focus_container              |                                                    boolean                                                    |               |                                                                                                                                                                                                 |
| use_last_focus               |                                                    boolean                                                    |               |                                                                                                                                                                                                 |
| focus_navigation_mode_left   |                                                     enum                                                      |               | 可能的值：`none` <br> `stop` <br> `custom` <br> `contained`                                                                                                                              |
| focus_navigation_mode_right  |                                                     enum                                                      |               | 可能的值：`none` <br> `stop` <br> `custom` <br> `contained`                                                                                                                              |
| focus_navigation_mode_down   |                                                     enum                                                      |               | 可能的值：`none` <br> `stop` <br> `custom` <br> `contained`                                                                                                                              |
| focus_navigation_mode_up     |                                                     enum                                                      |               | 可能的值：`none` <br> `stop` <br> `custom` <br> `contained`                                                                                                                              |
| focus_container_custom_left  | [焦点容器自定义对象](/zh/json-ui/json-ui-documentation#focus-container-custom-array-object) 的向量 |               |                                                                                                                                                                                                 |
| focus_container_custom_right | [焦点容器自定义对象](/zh/json-ui/json-ui-documentation#focus-container-custom-array-object) 的向量 |               |                                                                                                                                                                                                 |
| focus_container_custom_down  | [焦点容器自定义对象](/zh/json-ui/json-ui-documentation#focus-container-custom-array-object) 的向量 |               |                                                                                                                                                                                                 |
| focus_container_custom_up    | [焦点容器自定义对象](/zh/json-ui/json-ui-documentation#focus-container-custom-array-object) 的向量 |               |                                                                                                                                                                                                 |

#### Focus Container Custom 数组对象

| 属性名称              |  类型  | 描述                                                                                                                    |
| -------------------------- | :----: | ------------------------------------------------------------------------------------------------------------------------------ |
| other_focus_container_name | string | 将在 button.menu_left、button.menu_right、button.menu_up 或 button.menu_down 上接收焦点的 UI 控件名称 |
| focus_id_inside            | string | 将接收焦点的 `other_focus_container_name` 的可聚焦子控件的标识符（`focus_identifier`） |

<CodeHeader>RP/ui/example_file.json</CodeHeader>

```json
...
{
  "other_panel": {
    ...
    "focus_container": true,
    "controls": [
      ...
    ]
  }
},
{
  "input_panel": {
    ...
    "focus_container_custom_up": [
      {
        "other_focus_container_name": "other_panel" // 当此容器的焦点在 `button.menu_up` 上结束时将接收焦点的对象名称
      }
    ]
  }
}
...
```

### Button

| 属性名称   |  类型  | 默认值 | 描述                                                                |
| --------------- | :----: | :-----------: | -------------------------------------------------------------------------- |
| default_control | string |               | 将仅在默认状态下显示的子控件名称 |
| hover_control   | string |               | 将仅在悬停状态下显示的子控件名称   |
| pressed_control | string |               | 将仅在按下状态下显示的子控件名称 |
| locked_control  | string |               | 将仅在锁定状态下显示的子控件名称  |

### Toggle

| 属性名称                  |  类型   | 默认值 | 描述                                                                               |
| ------------------------------ | :-----: | :-----------: | ----------------------------------------------------------------------------------------- |
| radio_toggle_group             | boolean |               |                                                                                           |
| toggle_name                    | string  |               | 它所属的开关组的标识符。可以是自定义的。                    |
| toggle_default_state           | boolean |               |                                                                                           |
| toggle_group_forced_index      |   int   |               | 开关在其组中的索引                                                          |
| toggle_group_default_selected  |   int   |               | 其组的默认开关的索引                                              |
| reset_on_focus_lost            | boolean |               |                                                                                           |
| toggle_on_hover                | string  |               |                                                                                           |
| toggle_on_button               | string  |               |                                                                                           |
| toggle_off_button              | string  |               |                                                                                           |
| enable_directional_toggling    | boolean |               |                                                                                           |
| toggle_grid_collection_name    | string  |               | 开关所属的集合名称                                              |
| checked_control                | string  |               | 将仅在勾选状态下显示的子控件名称                |
| unchecked_control              | string  |               | 将仅在未勾选状态下显示的子控件名称              |
| checked_hover_control          | string  |               | 将仅在勾选悬停状态下显示的子控件名称          |
| unchecked_hover_control        | string  |               | 将仅在未勾选悬停状态下显示的子控件名称        |
| checked_locked_control         | string  |               | 将仅在勾选锁定状态下显示的子控件名称         |
| unchecked_locked_control       | string  |               | 将仅在未勾选锁定状态下显示的子控件名称       |
| checked_locked_hover_control   | string  |               | 将仅在勾选锁定悬停状态下显示的子控件名称   |
| unchecked_locked_hover_control | string  |               | 将仅在未勾选锁定悬停状态下显示的子控件名称 |

### 硬编码开关

在某些屏幕中，导航标签组有其映射默认选中的标签，例如设置或物品栏。
我认为这些值是正确的。

```json
$search_index - $construction_index
$survival_layout_index - $construction_index
$recipe_book_layout_index - $equipment_index
$creative_layout_index - $items_index
```

设置和物品栏中还有一些必备开关，即使没有开发版本和打开断言诊断也无法获得警告，它们确实存在并由名为 _ScreenView::\_passViewCommand::<lambda_6d65fd272578d43f1becb6eada4ff32c>::()::<lambda_2ab071547c9a470558c54e4d3cddb5f2>::operator()_ 的函数控制。当您完全修改这些屏幕时，您可能会遇到此断言。

例如，在设置中的无障碍和物品栏中，construction、equipment、items 和 nature 标签是必备的。

### Dropdown

| 属性名称            |  类型   | 默认值 | 描述                                                          |
| ------------------------ | :----: | :-----------: | -------------------------------------------------------------------- |
| dropdown_name            | string |               | 下拉菜单的标识符                                          |
| dropdown_content_control | string |               | 将作为根内容面板行为的子控件名称 |
| dropdown_area            | string |               | 将作为内部内容行为的子控件名称     |

### Sound

| 属性名称 |                                    类型                                     | 描述                                                                                                         |
| ------------- | :-------------------------------------------------------------------------: | ------------------------------------------------------------------------------------------------------------------- |
| sound_name    |                                   string                                    | 在 `RP/sounds/sound_definitions.json` 文件中定义的在按下事件触发时播放的声音名称 |
| sound_volume  |                                    float                                    | 声音的音量                                                                                                 |
| sound_pitch   |                                    float                                    | 声音的音高                                                                                                  |
| sounds        | [声音对象](/zh/json-ui/json-ui-documentation#sound-array-object) 的向量 | 按下事件触发时要播放的声音数组                                                         |

#### Sound 数组对象

| 属性名称             |  类型  | 描述                                                                                                         |
| ------------------------- | :----: | ------------------------------------------------------------------------------------------------------------------- |
| sound_name                | string | 在 `RP/sounds/sound_definitions.json` 文件中定义的在按下事件触发时播放的声音名称 |
| sound_volume              | float  | 声音的音量                                                                                                 |
| sound_pitch               | float  | 声音的音高                                                                                                  |
| min_seconds_between_plays | float  | 声音再次播放前的等待秒数                                                                |

### Collection

| 属性名称   |  类型  | 描述                       |
| --------------- | :----: | --------------------------------- |
| collection_name | string | 要使用的集合的名称 |

### Text Edit

| 属性名称                      |  类型   | 默认值 | 描述                                                                                                                                                |
| ---------------------------------- | :-----: | :-----------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| text_box_name                      | string  |               | 文本框的标识符                                                                                                                                    |
| text_edit_box_grid_collection_name | string  |               | `edit_box` 所属的集合名称                                                                                                           |
| constrain_to_rect                  | boolean |               |                                                                                                                                                            |
| enabled_newline                    | boolean |               | 允许多行文本                                                                                                                                      |
| text_type                          |  enum   |               | 允许用户在文本字段中输入的字符类型。 <br> 可能的值： <br> `ExtendedASCII` <br> `IdentifierChars` <br> `NumberChars` |
| max_length                         |   int   |               | 文本字段允许的最大字符数                                                                                                       |
| text_control                       | string  |               | 将用于显示文本的子控件名称                                                                                        |
| place_holder_control               | string  |               | 将用于显示占位符文本的子控件名称                                                                               |
| can_be_deselected                  | boolean |               |                                                                                                                                                            |
| always_listening                   | boolean |               |                                                                                                                                                            |
| virtual_keyboard_buffer_control    | string  |               |                                                                                                                                                            |

### Slider

| 属性名称                |  类型   | 默认值 | 描述                                                                                                  |
| ---------------------------- | :-----: | :-----------: | ------------------------------------------------------------------------------------------------------------ |
| slider_track_button          | string  |               | 滑块轨道按钮的动作 ID                                                                        |
| slider_small_decrease_button | string  |               | 减少滑块按钮的动作 ID                                                                     |
| slider_small_increase_button | string  |               | 增加滑块按钮的动作 ID                                                                     |
| slider_steps                 |   int   |               | 滑块有多少步（或值）                                                             |
| slider_direction             |  enum   |               | 滑块移动的方向。 <br> 可能的值： <br> `vertical` <br> `horizontal`                  |
| slider_timeout               | number  |               |                                                                                                              |
| slider_collection_name       | string  |               | 滑块所属的集合名称                                                                 |
| slider_name                  | string  |               | 滑块的标识符                                                                                    |
| slider_select_on_hover       | boolean |               | 悬停时聚焦滑块                                                                               |
| slider_selected_button       | string  |               | 滑块被选中时的动作 ID                                                             |
| slider_deselected_button     | string  |               | 滑块取消选中时的动作 ID                                                           |
| slider_box_control           | string  |               | 将作为滑块滑块行为的子控件名称                                               |
| background_control           | string  |               | 将作为滑块背景行为的子控件名称                                          |
| background_hover_control     | string  |               | 悬停时将作为滑块背景行为的子控件名称                                 |
| progress_control             | string  |               | 将作为滑块进度背景叠加层行为的子控件名称          |
| progress_hover_control       | string  |               | 悬停时将作为滑块进度背景叠加层行为的子控件名称 |

### Slider Box

| 属性名称   |  类型   | 默认值 | 描述                                                           |
| --------------- | :----: | :-----------: | --------------------------------------------------------------------- |
| default_control | string |               | 将在默认状态下显示的子控件名称 |
| hover_control   | boolean |               | 将在悬停状态下显示的子控件名称   |
| locked_control  | string |               | 将在锁定状态下显示的子控件名称  |

### Scroll View

| 属性名称              |  类型   | 默认值 | 描述                                                                                       |
| -------------------------- | :-----: | :-----------: | ------------------------------------------------------------------------------------------------- |
| scrollbar_track_button     | string  |               | 轨道按钮的动作 ID                                                             |
| scrollbar_touch_button     | string  |               | 触摸输入的动作 ID                                                              |
| scroll_speed               | number  |               | 滚动速度                                                                                   |
| gesture_control_enabled    | boolean |               |                                                                                                   |
| always_handle_scrolling    | boolean |               |                                                                                                   |
| touch_mode                 | boolean |               |                                                                                                   |
| scrollbar_box              | string  |               | 将作为滚动条滑块的子 UI 元素或嵌套 UI 元素的名称。            |
| scrollbar_track            | string  |               | 将作为滚动条轨道的子 UI 元素或嵌套 UI 元素的名称。             |
| scroll_view_port           | string  |               | 将作为视口的子 UI 元素的名称                                        |
| scroll_content             | string  |               | 将作为内容根父级的子 UI 元素的名称                              |
| scroll_box_and_track_panel | string  |               | 将包含滚动和轨道控件的子 UI 元素的名称                       |
| jump_to_bottom_on_update   | boolean |               | 滚动面板有更新时跳到底部。例如，向其中添加更多子元素时。 |

### Custom Render

| 属性名称 | 类型 | 描述                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ------------- | :--: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| renderer      | enum | 可能的值： <br> `hover_text_renderer` <br> `3d_structure_renderer` <br> `splash_text_renderer` <br> `ui_holo_cursor` <br> `trial_time_renderer` <br> `panorama_renderer` <br> `actor_portrait_renderer` <br> `banner_pattern_renderer` <br> `live_player_renderer` <br> `web_view_renderer` <br> `hunger_renderer` <br> `bubbles_renderer` <br> `mob_effects_renderer` <br> `cursor_renderer` <br> `progress_indicator_renderer` <br> `camera_renderer` <br> `horse_jump_renderer` <br> `armor_renderer` <br> `horse_heart_renderer` <br> `heart_renderer` <br> `hotbar_cooldown_renderer` <br> `hotbar_renderer` <br> `hud_player_renderer` <br> `live_horse_renderer` <br> `holographic_postrenderer` <br> `enchanting_book_renderer` <br> `debug_screen_renderer` <br> `gradient_renderer` <br> `paper_doll_renderer` <br> `name_tag_renderer` <br> `flying_item_renderer` <br> `inventory_item_renderer` <br> `credits_renderer` <br> `vignette_renderer` <br> `progress_bar_renderer` <br> `debug_overlay_renderer` <br> `background_renderer` <br> `bohr_model_renderer` <br> `equipment_preview_renderer` <br> `experience_renderer`（旧版，不再可用） <br> `menu_background_renderer`（旧版，不再可用） |

#### 渲染器

| 渲染器名称                 | 描述                                                                                                     |
| ----------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `flying_item_renderer`        | 当您将物品从一个槽位移到另一个槽位时飞行的物品                                                  |
| `inventory_item_renderer`     | 渲染物品图标。它仅在游戏中的屏幕时有效                                                      |
| `credits_renderer`            | 致谢和结尾诗                                                                                        |
| `vignette_renderer`           | 暗角                                                                                                      |
| `name_tag_renderer`           | 类似于玩家头顶的玩家名称或对动物使用命名牌时的名称 |
| `paper_doll_renderer`         | 皮肤模型                                                                                                  |
| `debug_screen_renderer`       | 在测试版/预览版上出现的调试文本                                                        |
| `enchanting_book_renderer`    | 附魔台书本。当有物品要附魔时打开                                       |
| `gradient_renderer`           | 绘制渐变                                                                                                |
| `live_horse_renderer`         | 马/驴/羊驼...模型                                                                                 |
| `live_player_renderer`        | 玩家模型                                                                                                |
| `hud_player_renderer`         | 模仿玩家正在做什么的玩家模型                                                                         |
| `hotbar_renderer`             | 为每个槽位获取快捷栏槽位图像                                                                        |
| `hotbar_cooldown_renderer`    | 绘制物品冷却                                                                                         |
| `heart_renderer`              | 绘制玩家生命值                                                                                         |
| `horse_heart_renderer`        | 绘制马/驴/...生命值                                                                               |
| `armor_renderer`              | 绘制玩家盔甲                                                                                          |
| `horse_jump_renderer`         | 绘制马跳跃进度条                                                                            |
| `hunger_renderer`             | 绘制玩家饥饿值                                                                                         |
| `bubbles_renderer`            | 绘制呼吸气泡                                                                                           |
| `mob_effects_renderer`        | 绘制应用于玩家的效果                                                                                |
| `cursor_renderer`             | 在屏幕中心绘制十字准星                                                                                 |
| `equipment_preview_renderer`  | 绘制盔甲架                                                                                               |
| `progress_indicator_renderer` | 未使用                                                                                                        |
| `camera_renderer`             | 用于相机物品                                                                                        |
| `web_view_renderer`           | 显示网站视图                                                                                            |
| `banner_pattern_renderer`     | 渲染旗帜                                                                                                |
| `actor_portrait_renderer`     | 绘制肖像                                                                                               |
| `trial_time_renderer`         | 在游戏试用版中渲染剩余可用时间                                                              |
| `progress_bar_renderer`       | 绘制进度条。它有多种类型                                                                 |
| `3d_structure_renderer`       | 渲染结构方块结构                                                                           |
| `splash_text_renderer`        | 从 `splashes.json` 文件获取并渲染随机闪烁文本                                             |
| `hover_text_renderer`         | 绘制工具提示                                                                                                 |
| `ui_holo_cursor`              |                                                                                                                 |
| `panorama_renderer`           | 不是菜单后面出现的全景图。是商店中的世界全景图。              |

#### 特定属性

| 属性名称        |        类型         | 渲染器                                      | 描述                                                                                                                                                                                                                                            |
| -------------------- | :-----------------: | --------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| gradient_direction   |        enum         | `gradient_renderer`                           | 可能的值： <br> `vertical` <br> `horizontal`                                                                                                                                                                                                     |
| color1               | Vector [r, g, b, a] | `gradient_renderer`                           |                                                                                                                                                                                                                                                        |
| color2               | Vector [r, g, b, a] | `gradient_renderer`                           |                                                                                                                                                                                                                                                        |
| text_color           | Vector [r, g, b, a] | `name_tag_renderer`                           |                                                                                                                                                                                                                                                        |
| background_color     | Vector [r, g, b, a] | `name_tag_renderer`                           |                                                                                                                                                                                                                                                        |
| primary_color        | Vector [r, g, b, a] | `progress_bar_renderer`                       |                                                                                                                                                                                                                                                        |
| secondary_color      | Vector [r, g, b, a] | `progress_bar_renderer`                       |                                                                                                                                                                                                                                                        |
| camera_tilt_degrees  |       number        | `paper_doll_renderer`                         |                                                                                                                                                                                                                                                        |
| starting_rotation    |       number        | `paper_doll_renderer`                         |                                                                                                                                                                                                                                                        |
| use_selected_skin    |       boolean       | `paper_doll_renderer`                         |                                                                                                                                                                                                                                                        |
| use_uuid             |       boolean       | `paper_doll_renderer`                         |                                                                                                                                                                                                                                                        |
| use_skin_gui_scale   |       boolean       | `paper_doll_renderer`                         |                                                                                                                                                                                                                                                        |
| use_player_paperdoll |       boolean       | `paper_doll_renderer`                         |                                                                                                                                                                                                                                                        |
| rotation             |        enum         | `paper_doll_renderer` 和 `panorama_renderer` | 可能的值： <br> `auto` <br> `gesture_x` <br> `custom_y`                                                                                                                                                                                          |
| end_event            |       string        | `credits_renderer`                            |                                                                                                                                                                                                                                                        |
| item_id_aux          |       number        | `equipment_preview_renderer`                  | 您想要显示的装备的物品 ID aux                                                                                                                                                                                                          |
| item_custom_color    |       number        | `equipment_preview_renderer`                  | 染色皮革盔甲颜色 ID                                                                                                                                                                                                                           |
| armor_trim_material  |        enum         | `equipment_preview_renderer`                  | 可能的值： <br> `amethyst` <br> `copper` <br> `diamond` <br> `emerald` <br> `gold` <br> `iron` <br> `lapis` <br> `netherite` <br> `quartz` <br> `redstone` <br> `resin`                                                                          |
| armor_trim_pattern   |        enum         | `equipment_preview_renderer`                  | 可能的值： <br> `coast` <br> `dune` <br> `eye` <br> `host` <br> `raiser` <br> `rib` <br> `sentry` <br> `shaper` <br> `silence` <br> `snout` <br> `spire` <br> `tide` <br> `vex` <br> `ward` <br> `wayfinder` <br> `wild` <br> `bolt` <br> `flow` |

### Screen

| 属性名称                       |  类型   | 描述                                                               |
| ----------------------------------- | :-----: | ------------------------------------------------------------------------- |
| render_only_when_topmost            | boolean | 仅在其是屏幕栈中最顶层屏幕时渲染屏幕    |
| screen_not_flushable                | boolean |                                                                           |
| always_accepts_input                | boolean |                                                                           |
| render_game_behind                  | boolean | 不会阻止下方的屏幕接收用户输入 |
| absorbs_input                       | boolean |                                                                           |
| is_showing_menu                     | boolean |                                                                           |
| is_modal                            | boolean | 它是一个屏幕模态                                                       |
| should_steal_mouse                  | boolean | 捕获光标并隐藏它                                          |
| low_frequency_rendering             | boolean | 使用更少的内存来渲染屏幕                                     |
| screen_draws_last                   | boolean | 它是最后要绘制/渲染的屏幕                                   |
| vr_mode                             | boolean |                                                                           |
| force_render_below                  | boolean | 在屏幕栈中当前屏幕下方渲染底部屏幕           |
| send_telemetry                      | boolean |                                                                           |
| close_on_player_hurt                | boolean | 如果玩家受到伤害则关闭屏幕                               |
| cache_screen                        | boolean |                                                                           |
| load_screen_immediately             | boolean |                                                                           |
| gamepad_cursor                      | boolean |                                                                           |
| gamepad_cursor_deflection_mode      | boolean |                                                                           |
| should_be_skipped_during_automation | boolean |                                                                           |

### Selection Wheel

| 属性名称             |   类型   | 描述 |
| ------------------------- | :------: | ----------- |
| inner_radius              |  number  |             |
| outer_radius              |  number  |             |
| state_controls            | string[] |             |
| slice_count               | integer  |             |
| button_name               |  string  |             |
| iterate_left_button_name  |  string  |             |
| iterate_right_button_name |  string  |             |
| initial_button_slice      | integer  |             |

### TTS

| 属性名称                       |  类型   | 描述                                                                                |
| ----------------------------------- | :-----: | ------------------------------------------------------------------------------------------ |
| tts_name                            | string  |                                                                                            |
| tts_control_header                  | string  |                                                                                            |
| tts_section_header                  | string  |                                                                                            |
| tts_control_type_order_priority     | integer |                                                                                            |
| tts_index_priority                  | integer |                                                                                            |
| tts_toggle_on                       | string  | 由 `toggle` 类型使用                                                                   |
| tts_toggle_off                      | string  | 由 `toggle` 类型使用                                                                   |
| tts_override_control_value          | string  |                                                                                            |
| tts_inherit_siblings                | boolean |                                                                                            |
| tts_value_changed                   | string  |                                                                                            |
| ttsSectionContainer                 | boolean |                                                                                            |
| tts_ignore_count                    | boolean |                                                                                            |
| tts_skip_message                    | boolean |                                                                                            |
| tts_value_order_priority            | integer |                                                                                            |
| tts_play_on_unchanged_focus_control | boolean |                                                                                            |
| tts_ignore_subsections              | boolean |                                                                                            |
| text_tts                            | string  |                                                                                            |
| use_priority                        | boolean | 是否将使用 `priority` 属性来确定每个子控件的 TTS 优先级 |
| priority                            | boolean | 元素在 TTS 上的优先级顺序/索引                                        |

### Tab（旧版）

| 属性名称 |  类型  | 默认值 | 描述                                               |
| ------------- | :----: | :-----------: | --------------------------------------------------------- |
| tab_index     |  int   |               | 其组中标签的 ID                                    |
| tab_group     |  int   |               | 标签所属组的 ID                        |
| tab_control   | string |               | 标签激活时将显示的控件名称 |

### Carousel Text（旧版）

| 属性名称 |         类型         | 默认值 | 描述                     |
| ------------- | :------------------: | :-----------: | ------------------------------- |
| always_rotate |       boolean        |               |                                 |
| rotate_speed  |        number        |               |                                 |
| hover_color   | Vector [r, g, b, a], |               | 元素悬停时的 `color` |
| hover_alpha   |        float         |               | 元素悬停时的 `alpha` |
| pressed_color | Vector [r, g, b, a], |               | 元素按下时的 `color` |
| pressed_alpha |        float         |               | 元素按下时的 `alpha` |

## 属性补充信息

### 锚点属性

锚点允许元素对齐到某个点，位置、大小、缩放、动画等将以该点为变换参考。
在 JSON UI 中，有两个属性 `anchor_from` 和 `anchor_to` 共同实现这一点。

大多数人给它们相同的值：

<CodeHeader>RP/ui/example_file.json</CodeHeader>

```json
{
    "element": {
        "anchor_from": "top_left",
        "anchor_to": "top_left"
    }
}
```

<WikiImage
	src="anchor_same_value.png"
	alt="Anchors with the same value"
	pixelated
	width=782
/>
```

然而，当它们有不同的值时会发生什么？让我们看看当 `anchor_from: center` 和 `anchor_to: top_left` 时会发生什么。这是展示真正发生情况的最佳示例。

<CodeHeader>RP/ui/example_file.json</CodeHeader>

```json
{
    "element": {
        "anchor_from": "center",
        "anchor_to": "top_left"
    }
}
```

<WikiImage
	src="anchor_center_top_left.png"
	alt="Anchor from center to top left"
	pixelated
	width=782
/>
```

元素的左上点位于父元素的中心点。

另一个示例：

<WikiImage
	src="anchor_ce_rm_tm_tl.png"
	alt="Anchor from center to right middle and anchor from top middle to top left"
	pixelated
	width=782
/>
```

蓝色框的左上点位于父元素的顶部中间点。至于黑色框，右中点位于父元素的中心。

基本上 `anchor_to` 是元素中的锚点，它将附加到父元素中的 `anchor_from`。

### Variables 属性

| 名称       |  类型  | 描述                                                                                                             |
| ---------- | :----: | ----------------------------------------------------------------------------------------------------------------------- |
| `requires` | string | 决定是否应用以下变量值的条件。接受 `$variables` 但不接受 `#bindings`。 |

如果您只有一个变量要使用，您应该只使用 `"variables": {}`

<CodeHeader>RP/ui/example_file.json</CodeHeader>

```json
{
  "element": {
    ...
    "size": "$el_size",
    "$el_size|default": ["100%", 20],
    "variables": {
      "requires": "$var_condition",
      "$el_size": ["100%", 30]
    }
  }
}
```

如果您有多个变量，请使用 `"variables": [{}]`

<CodeHeader>RP/ui/example_file.json</CodeHeader>

```json
{
  "element": {
    ...
    "size": "$el_size",
    "offset": "$el_offset",
    "$el_offset|default": [0, 40],
    "$el_size|default": ["100%", 20],
    "variables": [
      {
        "requires": "$var_condition",
        "$el_size": ["100%", 30]
      },
      {
        "requires": "$other_var_condition",
        "$el_offset": [0, 15],
        "$el_size": ["90%", 35]
      }
    ]
  }
}
```

## Property Bag

| 名称                               |        类型         | 要求                                         | 描述                                                     |
| ---------------------------------- | :-----------------: | ---------------------------------------------------- | --------------------------------------------------------------- |
| #filtered_light_multiplier         |        float        | type[custom] <br> renderer[inventory_item_renderer]  |                                                                 |
| #banner_patterns                   |       string        | type[custom] <br> renderer[inventory_item_renderer]  |                                                                 |
| #banner_colors                     |       string        | type[custom] <br> renderer[inventory_item_renderer]  |                                                                 |
| #item_id_aux                       |         int         | type[custom] <br> renderer[inventory_item_renderer]  |                                                                 |
| #item_custom_color                 |         int         | type[custom] <br> renderer[inventory_item_renderer]  |                                                                 |
| #disabled_filter_visible           |       boolean       | type[custom] <br> renderer[inventory_item_renderer]  |                                                                 |
| #item_pickup_time                  |        float        | type[custom] <br> renderer[inventory_item_renderer]  |                                                                 |
| #look_at_cursor                    |       boolean       | type[custom] <br> renderer[hud_player_renderer]      |                                                                 |
| entity_type                        |        enum         | type[custom] <br> renderer[paper_doll_renderer]      | 可能的值： <br> `player` <br> `npc`                       |
| #skin_idx                          |         int         | type[custom] <br> renderer[paper_doll_renderer]      |                                                                 |
| #player_uuid                       |       string        | type[custom] <br> renderer[paper_doll_renderer]      |                                                                 |
| #skin_rotation                     |       boolean       | type[custom] <br> renderer[paper_doll_renderer]      |                                                                 |
| #custom_rot_y                      |        float        | type[custom] <br> renderer[paper_doll_renderer]      |                                                                 |
| #gesture_delta_source              |       string        | type[custom] <br> renderer[paper_doll_renderer]      |                                                                 |
| #gesture_mouse_delta_x             |       string        | type[custom] <br> renderer[paper_doll_renderer]      |                                                                 |
| #pack_id                           |         int         | type[custom] <br> renderer[paper_doll_renderer]      |                                                                 |
| #force_skin_update                 |       string        | type[custom] <br> renderer[paper_doll_renderer]      |                                                                 |
| #progress_bar_visible              |       boolean       | type[custom] <br> renderer[paper_doll_renderer]      |                                                                 |
| #progress_bar_total_amount         |        float        | type[custom] <br> renderer[progress_bar_renderer]    |                                                                 |
| #progress_bar_current_amount       |        float        | type[custom] <br> renderer[progress_bar_renderer]    |                                                                 |
| is_durability                      |       boolean       | type[custom] <br> renderer[progress_bar_renderer]    |                                                                 |
| round_value                        |       boolean       | type[custom] <br> renderer[progress_bar_renderer]    |                                                                 |
| #hover_text                        |       string        | type[custom] <br> renderer[hover_text_renderer]      |                                                                 |
| #open                              |       boolean       | type[custom] <br> renderer[enchanting_book_renderer] |                                                                 |
| flying_item_count                  |         int         | type[custom] <br> renderer[flying_item_renderer]     |                                                                 |
| flying_item_id_aux                 |         int         | type[custom] <br> renderer[flying_item_renderer]     |                                                                 |
| flying_item_custom_color           |         int         | type[custom] <br> renderer[flying_item_renderer]     |                                                                 |
| flying_item_origin_position_x      |        float        | type[custom] <br> renderer[flying_item_renderer]     |                                                                 |
| flying_item_origin_position_y      |        float        | type[custom] <br> renderer[flying_item_renderer]     |                                                                 |
| flying_item_origin_scale           |        float        | type[custom] <br> renderer[flying_item_renderer]     |                                                                 |
| flying_item_destination_position_x |        float        | type[custom] <br> renderer[flying_item_renderer]     |                                                                 |
| flying_item_destination_position_y |        float        | type[custom] <br> renderer[flying_item_renderer]     |                                                                 |
| flying_item_destination_scale      |        float        | type[custom] <br> renderer[flying_item_renderer]     |                                                                 |
| flying_item_banner_patterns        |       string        | type[custom] <br> renderer[flying_item_renderer]     |                                                                 |
| flying_item_banner_colors          |       string        | type[custom] <br> renderer[flying_item_renderer]     |                                                                 |
| #use_heart_offset                  |       boolean       | type[custom] <br> renderer[armor_renderer]           |                                                                 |
| opacity_override                   |        float        | type[custom] <br> renderer[vignette_renderer]        |                                                                 |
| #playername                        |       string        | type[custom] <br> renderer[name_tag_renderer]        |                                                                 |
| #x_padding                         |       number        | type[custom] <br> renderer[name_tag_renderer]        |                                                                 |
| #entity_id                         |    string or int    | type[custom] <br> renderer[live_horse_renderer]      |                                                                 |
| #hyperlink                         |       string        | type[button]                                         |                                                                 |
| #anchored_offset_value_x           |       number        | `use_anchored_offset` 属性                       |                                                                 |
| #anchored_offset_value_y           |       number        | `use_anchored_offset` 属性                       |                                                                 |
| #size_binding_x                    |       number        | `use_anchored_offset` 属性                       |                                                                 |
| #size_binding_y                    |       number        | `use_anchored_offset` 属性                       |                                                                 |
| #has_focus                         |       boolean       | type[custom] <br> renderer[3d_structure_renderer]    |                                                                 |
| #block_position                    |  Vector [x, y, z]   | type[custom] <br> renderer[3d_structure_renderer]    |                                                                 |
| #top_right_block                   |  Vector [x, y, z]   | type[custom] <br> renderer[3d_structure_renderer]    |                                                                 |
| #bottom_left_block                 |  Vector [x, y, z]   | type[custom] <br> renderer[3d_structure_renderer]    |                                                                 |
| #include_entities                  |       boolean       | type[custom] <br> renderer[3d_structure_renderer]    |                                                                 |
| #remove_blocks                     |       boolean       | type[custom] <br> renderer[3d_structure_renderer]    |                                                                 |
| #include_players                   |       boolean       | type[custom] <br> renderer[3d_structure_renderer]    |                                                                 |
| #slider_steps                      |       number        | type[slider]                                         |                                                                 |
| #slider_value                      |       number        | type[slider]                                         |                                                                 |
| #property_field                    |       string        | type[edit_box]                                       |                                                                 |
| #hover_slice                       |         int         | type[selection_wheel]                                |                                                                 |
| #toggle_state                      |       boolean       | type[toggle]                                         |                                                                 |
| #start_selected                    |       boolean       |                                                      |                                                                 |
| #tts_dialog_title                  |       string        |                                                      |                                                                 |
| #tts_dialog_body                   |       string        |                                                      |                                                                 |
| force_update                       |       boolean       |                                                      |                                                                 |
| #sub_command                       |       string        |                                                      |                                                                 |
| #panel_title                       |       string        |                                                      |                                                                 |
| #index                             |         int         |                                                      |                                                                 |
| #collection_prefix                 |       string        |                                                      |                                                                 |
| #collection_name                   |       string        |                                                      |                                                                 |
| #visible                           |       boolean       |                                                      |                                                                 |
| #common                            | Vector [r, g, b, a] |                                                      |                                                                 |
| #uncommon                          | Vector [r, g, b, a] |                                                      |                                                                 |
| #rare                              | Vector [r, g, b, a] |                                                      |                                                                 |
| #epic                              | Vector [r, g, b, a] |                                                      |                                                                 |
| #legendary                         | Vector [r, g, b, a] |                                                      |                                                                 |
| reset_group                        |        enum         |                                                      | 可能的值： <br> `video` <br> `audio` <br> `accessibility` |
| #text                              |       string        |                                                      |                                                                 |
| timer_duration                     |       number        |                                                      |                                                                 |
| #should_host                       |       boolean       |                                                      |                                                                 |
| is_local                           |       boolean       |                                                      |                                                                 |
| #is_left                           |       boolean       |                                                      |                                                                 |
| #is_skins                          |       boolean       |                                                      |                                                                 |
| #is_featured                       |       boolean       |                                                      |                                                                 |
| #image_name                        |       string        |                                                      |                                                                 |
| #is_dropdown                       |       boolean       |                                                      |                                                                 |
| #timer_field_count_to_show         |       number        |                                                      |                                                                 |
| #owned_incompatible_prompt_color   |  Vector [r, g, b]   |                                                      |                                                                 |
| #modal_title_text                  |       string        |                                                      |                                                                 |
| #modal_label_text                  |       string        |                                                      |                                                                 |
| #buttons_visible                   |       boolean       |                                                      |                                                                 |
| #no_buttons_visible                |       boolean       |                                                      |                                                                 |
| #single_button_visible             |       boolean       |                                                      |                                                                 |
| #two_buttons_visible               |       boolean       |                                                      |                                                                 |
| is_fixed_inventory                 |       boolean       |                                                      |                                                                 |
| experimental_radio_button_state    |       string        |                                                      |                                                                 |
| classic_radio_button_state         |       string        |                                                      |                                                                 |

## 动画

| 动画属性名称   |     类型      | 描述                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ------------------------- | :-----------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| anim_type                 |     enum      | 可能的值： <br> `alpha` <br> `clip` <br> `color` <br> `flip_book` <br> `offset` <br> `size` <br> `uv` <br> `wait` <br> `aseprite_flip_book`                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| duration                  |    number     | 此动画完成所需的秒数                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| next                      |    string     | 动画完成后要播放的下一个动画的名称                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| destroy_at_end            |    string     |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| play_event                |    string     |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| end_event                 |    string     |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| start_event               |    string     |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| reset_event               |    string     |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| easing                    |     enum      | 可能的值： <br> `linear` <br> `spring` <br> `in_quad` <br> `out_quad` <br> `in_out_quad` <br> `in_cubic` <br> `out_cubic` <br> `in_out_cubic` <br> `in_quart` <br> `out_quart` <br> `in_out_quart` <br> `in_quint` <br> `out_quint` <br> `in_out_quint` <br> `in_sine` <br> `out_sine` <br> `in_out_sine` <br> `in_expo` <br> `out_expo` <br> `in_out_expo` <br> `in_circ` <br> `out_circ` <br> `in_out_circ` <br> `in_bounce` <br> `out_bounce` <br> `in_out_bounce` <br> `in_back` <br> `out_back` <br> `in_out_back` <br> `in_elastic` <br> `out_elastic` <br> `in_out_elastic` |
| from                      |               | 受 anim_type 影响的属性的初始值                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| to                        |               | 此动画影响的属性的最终值                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| initial_uv                | Vector [u, v] |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| fps                       |      int      | 每秒帧数                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| frame_count               |      int      |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| frame_step                |    number     |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| reversible                |    boolean    | 完成后反向运行动画                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| resettable                |    boolean    |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| scale_from_starting_alpha |    boolean    |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| activated                 |    boolean    |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |

有关 `aseprite_flip_book` 动画类型的更多信息，请参阅我们的 [Aseprite 动画](/zh/json-ui/aseprite-animations) 页面。

## 全局变量

| 变量                               | 备注                                                                                      |
| -------------------------------------- | ----------------------------------------------------------------------------------------- |
| $store_disabled                        |                                                                                           |
| $game_pad                              | 有手柄连接到设备                                              |
| $mouse                                 | 有鼠标连接到设备                                                   |
| $touch                                 |                                                                                           |
| $trial                                 | 在游戏试用版中                                                     |
| $build_platform_UWP                    |                                                                                           |
| $win10_edition                         |                                                                                           |
| $ignore_add_servers                    |                                                                                           |
| $disable_gamertag_controls             |                                                                                           |
| $console_edition                       |                                                                                           |
| $osx_edition                           |                                                                                           |
| $pocket_edition                        |                                                                                           |
| $education_edition                     |                                                                                           |
| $world_archive_support                 |                                                                                           |
| $file_picking_supported                |                                                                                           |
| $desktop_screen                        | 如果选择了经典 UI                                                                |
| $pocket_screen                         | 如果选择了口袋 UI                                                                |
| $is_holographic                        |                                                                                           |
| $gear_vr                               |                                                                                           |
| $oculus_rift                           |                                                                                           |
| $is_living_room_mode                   |                                                                                           |
| $is_reality_mode                       |                                                                                           |
| $realms_beta                           |                                                                                           |
| $fire_tv                               |                                                                                           |
| $is_ios                                |                                                                                           |
| $apple_tv                              |                                                                                           |
| $is_windows_10_mobile                  |                                                                                           |
| $image_picking_not_supported           |                                                                                           |
| $pre_release                           |                                                                                           |
| $ios                                   |                                                                                           |
| $is_console                            |                                                                                           |
| $can_quit                              |                                                                                           |
| $is_settopbox                          |                                                                                           |
| $microsoft_os                          |                                                                                           |
| $apple_os                              |                                                                                           |
| $google_os                             |                                                                                           |
| $nx_os                                 |                                                                                           |
| $horizontal_safezone_size              |                                                                                           |
| $vertical_safezone_size                |                                                                                           |
| $can_splitscreen                       |                                                                                           |
| $is_secondary_client                   |                                                                                           |
| $multiplayer_requires_live_gold        |                                                                                           |
| $xbox_one                              |                                                                                           |
| $is_pregame                            | 如果是游戏外屏幕。当您在世界、服务器或领域玩游戏时，它在游戏中 |
| $is_win10_arm                          |                                                                                           |
| $vibration_supported                   |                                                                                           |
| $is_mobile_vr                          |                                                                                           |
| $is_xboxlive_enabled                   |                                                                                           |
| $device_must_be_removed_for_xbl_signin |                                                                                           |
| $is_publish                            | 是公开版本而非开发者版本                                                   |
| $is_desktop                            |                                                                                           |
| $is_ps4                                |                                                                                           |
| $is_on_3p_server                       |                                                                                           |
| $ignore_3rd_party_servers              |                                                                                           |
| $is_berwick                            |                                                                                           |

## 硬编码超链接

`#hyperlink` 不允许自定义 URL。以下是有效的链接：

-   `http://education.minecraft.net/eula`
-   `http://pocketbeta.minecraft.net/p/how-to-join-and-leave-beta.html`
-   `http://aka.ms/minecraftrealmsfb`
-   `http://aka.ms/minecraftrealmsterms`
-   `http://aka.ms/minecraftfb`
-   `http://aka.ms/minecraftedusupport`
-   `https://aka.ms/blockxboxmessages`
-   `http://aka.ms/minecraftfbbeta`
-   `https://minecraft.net/attribution`
-   `http://aka.ms/mcedulogs`
-   `https://minecraft.net/licensed-content/`
-   `https://education.minecraft.net/eula`
-   `https://aka.ms/mcedulogs`
-   `https://aka.ms/minecraftrealmsterms`
-   `https://aka.ms/minecraftfb`
-   `https://aka.ms/minecraftfbbeta`
-   `https://aka.ms/minecraftedusupport`
-   `https://itunes.apple.com/us/app/minecraft/id479516143?mt=8`
-   `https://account.xbox.com/Settings`
-   `https://aka.ms/meeterms`
-   `https://aka.ms/privacy`
-   `https://aka.ms/MCBanned`
-   `https://aka.ms/MCMultiplayerHelp`
-   `https://aka.ms/meeeula`
-   `https://aka.ms/mee_privacy`
-   `https://www.minecraft.net/attribution/?hideChrome`
-   `https://aka.ms/switchattribution`
-   `https://www.minecraft.net/licensed-content/?hideChrome`
-   `https://aka.ms/switchcontent`
-   `https://social.xbox.com/changegamertag`

## 硬编码按钮 ID

其中一些仅在特定屏幕中有效。

### 按钮 ID：

-   `button.menu_exit`
-   `button.menu_cancel`（`Escape` 键或手柄 `B`）
-   `button.menu_inventory_cancel`（`打开物品栏` 按键绑定）
-   `button.menu_ok`（`Enter` 键）
-   `button.menu_select`（鼠标点击）
-   `button.controller_select`（手柄 `X`）
-   `button.menu_secondary_select`
-   `button.controller_secondary_select`
-   `button.controller_secondary_select_left`
-   `button.controller_secondary_select_right`（手柄 `R3`）
-   `button.controller_start`
-   `button.menu_up`（`方向键上` 键）
-   `button.menu_down`（`方向键下` 键）
-   `button.menu_left`（`方向键左` 键）
-   `button.menu_right`（`方向键右` 键）
-   `button.menu_tab_left`（`向左标签页` 按键绑定或手柄 `Left Bumper`）
-   `button.menu_tab_right`（`向右标签页` 按键绑定或手柄 `Right Bumper`）
-   `button.menu_alternate_tab_left`
-   `button.menu_alternate_tab_right`
-   `button.menu_autocomplete`（使用 `Tab` 键）
-   `button.menu_autocomplete_back`
-   `button.controller_autocomplete`
-   `button.controller_autocomplete_back`
-   `button.menu_textedit_up`（使用 `方向键上` 键）
-   `button.menu_textedit_down`（使用 `方向键下` 键）
-   `button.controller_textedit_up`
-   `button.controller_textedit_down`
-   `button.menu_auto_place`
-   `button.menu_inventory_drop`（`丢弃物品` 按键绑定）
-   `button.menu_inventory_drop_all`（`丢弃物品` + `Control` 键）
-   `button.menu_clear`
-   `button.chat`（`打开聊天` 按键绑定）
-   `button.mobeffects`（`生物效果` 按键绑定）
-   `key.emote`（`表情` 按键绑定）
-   `button.slot1`（表情轮盘）（`1` 键）
-   `button.slot2`（表情轮盘）（`2` 键）
-   `button.slot3`（表情轮盘）（`3` 键）
-   `button.slot4`（表情轮盘）（`4` 键）
-   `button.slot5`（表情轮盘）（`5` 键）
-   `button.slot6`（表情轮盘）（`6` 键）
-   `button.inventory_right`（`鼠标滚轮向上`）
-   `button.inventory_left`（`鼠标滚轮向下`）
-   `button.scoreboard`
-   `button.hide_gui`（`F1` 键）
-   `button.hide_tooltips`
-   `button.hide_paperdoll`
-   `button.slot0`
-   `button.slot1`（`1` 键）
-   `button.slot2`（`2` 键）
-   `button.slot3`（`3` 键）
-   `button.slot4`（`4` 键）
-   `button.slot5`（`5` 键）
-   `button.slot6`（`6` 键）
-   `button.slot7`（`7` 键）
-   `button.slot8`（`8` 键）
-   `button.slot9`（`9` 键）
-   `button.menu_vr_realign`
-   `any`（字面名称）

### 特定屏幕按钮 ID：

#### 设置（`ui/settings_screen.json`）

-   `button.open_content_log_history`
-   `button.clear_content_log_files`
-   `button.clear_msa_token_button`
-   `button.terms_and_conditions_popup`
-   `button.credits`
-   `button.unlink_msa`
-   `button.attribute_popup`
-   `button.licensed_content`
-   `button.font_license`
-   `button.tos_hyperlink`
-   `button.privpol_hyperlink`
-   `button.tos_popup`
-   `button.privpol_popup`
-   `button.binding_button`
-   `button.reset_binding`
-   `button.reset_keyboard_bindings`
-   `button.view_account_errors`

#### 书（`ui/book_screen.json`）

-   `button.prev_page`
-   `button.next_page`
-   `button.book_exit`

#### 聊天（`ui/chat_screen.json`）

-   `button.send`
-   `button.chat_autocomplete`
-   `button.chat_autocomplete_back`
-   `button.chat_previous_message`
-   `button.chat_next_message`
-   `button.chat_menu_cancel`

#### 命令方块（`ui/command_block_screen.json`）

-   `command_block.input_minimize`
-   `button.chat_autocomplete`
-   `button.chat_autocomplete_back`

#### 评论（`ui/comment_screen.json`）

-   `button.comment_options_close`
-   `button.comment_feed_options_close`
-   `button.close_comments`
-   `button.comment_next_button`
-   `button.comment_prev_button`

#### 致谢（`ui/credits_screen.json`）

-   `button.show_skip`

#### 死亡菜单（`ui/death_screen.json`）

-   `button.respawn_button`
-   `button.main_menu_button`

#### 表情轮盘（`ui/emote_screen_wheel.json`）

-   `button.rebind_mode`
-   `button.dressing_room`
-   `button.emote_selected`
-   `button.select_emote_slot_0`
-   `button.select_emote_slot_1`
-   `button.select_emote_slot_2`
-   `button.select_emote_slot_3`
-   `button.select_emote_slot_4`
-   `button.select_emote_slot_5`
-   `button.iterate_selection_left`
-   `button.iterate_selection_right`

#### 订阅源（`ui/feed_screen.json`）

-   `button.feed_image`
-   `button.newpost`
-   `button.add_screenshot`
-   `button.feed_comment`
-   `button.feed_prev_button`
-   `button.feed_next_button`
-   `button.feed_new_post_close`
-   `button.feed_options_close`
-   `button.close_feed`

#### 游戏菜单（`ui/pause_screen.json`）

-   `button.to_profile_or_skins_screen`
-   `button.player_profile_card`
-   `button.menu_continue`
-   `button.menu_server_store`
-   `button.screenshot`
-   `button.menu_how_to_play`
-   `button.menu_feedback`
-   `button.menu_permission`
-   `button.menu_invite_players`
-   `button.menu_quit`
-   `button.menu_feed`
-   `button.pause_focus_filler`

#### 在床上（`ui/in_bed_screen.json`）

-   `button.wake_up_button`

#### 邀请（`ui/invite_screen.json`）

-   `button.add_friend`
-   `button.add_member`
-   `button.send_invites`

#### 管理订阅源（`ui/manage_feed_screen.json`）

-   `button.manage_feed_prev_button`
-   `button.manage_feed_next_button`
-   `button.manage_feed_ignore`
-   `button.manage_feed_delete`
-   `button.close_manage_feed`

#### 铁砧（`ui/anvil_screen.json`）

-   `button.anvil_take_all_place_all`
-   `button.anvil_coalesce_stack`

#### 制图台（`ui/cartography_screen.json`）

-   `button.cartography_result_take_all_place_all`

#### 附魔台（`ui/enchanting_table_screen.json`）

-   `button.enchant`

#### 磨石（`ui/grindstone_screen.json`）

-   `button.grindstone_take_all_place_all`
-   `button.grindstone_coalesce_stack`

#### 织布机（`ui/loom_screen.json`）

-   `button.loom_result_take_all_place_all`
-   `button.pattern_select`

#### 村民交易（`ui/trade_screen.json`）

-   `button.cycle_recipe_left`
-   `button.cycle_recipe_right`
-   `button.trade_take_all_place_all`
-   `button.trade_take_half_place_one`
-   `button.trade_coalesce_stack`

#### 开始游戏（`ui/play_screen.json`）

-   `button.menu_sign_in_to_view_realms`
-   `button.menu_realms_world_item_edit`
-   `button.menu_realms_feed`
-   `button.menu_realms_world_item_remove`
-   `button.menu_network_world_item`
-   `button.menu_network_server_world_edit`
-   `button.connect_to_third_party_server`
-   `button.view_third_party_server_offers`
-   `button.description_read_toggle`
-   `button.news_read_toggle`
-   `button.local_world_upload`
-   `button.menu_start_local_world`
-   `button.convert_legacy_world`
-   `button.menu_local_world_item_edit`
-   `button.menu_legacy_world_item_delete`
-   `button.import_beta_retail_local_world`
-   `button.import_beta_retail_legacy_world`
-   `button.menu_network_add_friend`
-   `button.menu_network_join_by_code`
-   `button.menu_quick_play`
-   `button.new_world_upload`
-   `button.menu_local_world_create`
-   `button.create_on_realms_button`
-   `button.archived_world_upload`
-   `button.menu_import_level`
-   `button.menu_sync_legacy_worlds`
-   `button.realms_warning_more_info`
-   `button.menu_realm_world_trial`
-   `button.menu_realm_nintendo_first_realm_purchase_button`
-   `button.no_local_worlds_launch_help`
-   `button.menu_network_join_by_code_popup_join`
-   `button.join_server_anyway`
-   `button.cancel_join_server`

### 其他

-   `button.try_menu_exit`
-   `button.close_dialog`
-   `button.menu_play`
-   `$play_button_target`（**硬编码**）
-   `button.menu_store`
-   `button.menu_achievements`
-   `button.menu_settings`
-   `button.signin`
-   `button.menu_skins`
-   `button.to_profile_screen`
-   `button.menu_courses`
-   `button.menu_tutorial`
-   `button.featured_world`
-   `button.switch_accounts`
-   `button.launch_editions`
-   `button.edu_feedback`
-   `button.edu_resources`
-   `button.menu_buy_game`
-   `button.menu_invite_notification`
-   `button.search`
-   `button.hotbar_inventory_button`
-   `button.select_offer`
-   `button.action_button`
-   `button.create_realm`
-   `button.switch_accounts`
-   `button.hotbar_select`
-   `button.hotbar_ok`
-   `button.slot_pressed`
-   `button.hotbar_inventory_left`
-   `button.hotbar_inventory_right`
-   `button.hide_gui_all`
-   `button.hide_tooltips_hud`
-   `button.hide_paperdoll_hud`
-   `button.slot_1`
-   `button.slot_2`
-   `button.slot_3`
-   `button.slot_4`
-   `button.slot_5`
-   `button.slot_6`
-   `button.slot_7`
-   `button.slot_8`
-   `button.slot_9`
-   `button.slot_0`
-   `button.chat`
-   `button.menu_continue`
-   `user_confirm_dialog.escape`
-   `user_confirm_dialog.left_button`
-   `user_confirm_dialog.middle_button`
-   `user_confirm_dialog.rightcancel_button`
-   `button.view_skin`
-   `button.delete_action`
-   `button.exit_student`
-   `button.play_video`
-   `button.menu_store_error`
-   `button.left_panel_tab_increment`
-   `button.left_panel_tab_decrement`
-   `button.right_panel_tab_increment`
-   `button.right_panel_tab_decrement`
-   `button.layout_increment`
-   `button.layout_decrement`
-   `button.is_hovered`
-   `button.container_take_all_place_all`
-   `button.container_take_half_place_one`
-   `button.container_auto_place`
-   `button.coalesce_stack`
-   `button.shape_drawing`
-   `button.destroy_selection`
-   `button.clear_selected_recipe`
-   `button.clear_hotbar_or_remove_one`
-   `button.clear_hotbar_or_drop`
-   `button.container_reset_held`
-   `button.container_auto_place`
-   `button.container_slot_hovered`
-   `button.button_hovered`
-   `button.shift_pane_focus`
-   `button.focus_left`
-   `button.focus_right`
-   `button.filter_toggle_hovered`
-   `button.drop_one`
-   `button.cursor_drop_one`
-   `button.drop_all`
-   `button.cursor_drop_all`
-   `button.search_bar_clear`
-   `button.search_bar_selected`
-   `button.search_bar_deselected`
-   `button.menu_leave_screen`
-   `button.turn_doll`
-   `button.select_skin`
-   `button.skin_hovered`
-   `button.skin_unhovered`
-   `button.leave`
-   `button.leave_on_device`
-   `button.text_edit_box_selected`
-   `button.text_edit_box_deselected`
-   `button.text_edit_box_hovered`
-   `button.text_edit_box_clear`
-   `button.help`
-   `button.menu_open_uri`
-   `button.no_interaction`
-   `button.copy_to_clipboard`
-   ...

## 硬编码集合名称

所有这些仅在特定屏幕中。

### 屏幕特定：

#### 书（`ui/book_screen.json`）

-   `book_pages`
-   `pick_collection`

#### 包购买警告（`ui/bundle_purchase_warning_screen.json`）

-   `owned_list`
-   `unowned_list`

#### 聊天（`ui/chat_screen.json`）

-   `auto_complete`
-   `font_colors`
-   `host_main_collection`
-   `players_collection`
-   `host_teleport_collection`
-   `host_time_collection`
-   `host_weather_collection`

#### 选择领域（`ui/choose_realm_screen.json`）

-   `realms_collection`

#### 金币购买（`ui/coin_purchase_screen.json`）

-   `coin_purchase_grid`

#### 评论（`ui/comment_screen.json`）

-   `comment_collection`

#### 内容日志历史（`ui/content_log_history_screen.json`）

-   `content_log_message`

#### 创建世界促销（`ui/create_world_upsell_screen.json`）

-   `world_list`
-   `realm_list`

#### 自定义模板（`ui/custom_templates_screen.json`）

-   `templates_collection`

#### 订阅源（`ui/feed_screen.json`）

-   `feed_collection`

#### HUD（`ui/hud_screen.json`）

-   `boss_bars`
-   `chat_text_grid`
-   `hotbar_items`
-   `scoreboard_players`
-   `scoreboard_scores`
-   `left_helper_collection`
-   `right_helper_collection`

#### 邀请（`ui/invite_screen.json`）

-   `online_platform_friends`
-   `online_linked_account_friends`
-   `online_xbox_live_friends`
-   `offline_platform_friends`
-   `offline_linked_account_friends`
-   `offline_xbox_live_friends`

#### 管理订阅源（`ui/manage_feed_screen.json`）

-   `manage_feed_collection`

#### 清单验证（`manifest_validation_screen.json`）

-   `pack_errors`

#### 生物效果（`ui/mob_effects_screen.json`）

-   `mob_effects_collection`

#### 游戏菜单（`ui/pause_screen.json`）

-   `players_collection`

#### PDP（`ui/pdp_screen.json`）

-   `factory_collection`
-   `ratings_star_collection`

#### 权限（`ui/permissions_screen.json`）

-   `players_collection` - 也在 `pause_screen.json` 中使用
-   `permissions_collection`

#### 皮肤（`ui/persona_screen.json`）

-   `color_collection`
-   `skin_pack_in_grid_item`
-   `persona_featured_skin_pack_collection`
-   `body_size_collection`
-   `arm_size_collection`
-   `category_featured_collection`
-   `main_featured_collection`
-   `profile_featured_collection`
-   `custom_section_collection`
-   `featured_collection`
-   `foobar_collection`
-   `emote_collection`

#### 开始游戏（`ui/play_screen.json`）

-   `friends_network_worlds`
-   `cross_platform_friends_network_worlds`
-   `lan_network_worlds`
-   `personal_realms`
-   `friends_realms`
-   `servers_network_worlds`
-   `third_party_server_network_worlds`
-   `server_screenshot_collection`
-   `server_games_collection`
-   `local_worlds`
-   `legacy_worlds`
-   `beta_retail_local_worlds`
-   `personal_realms`
-   `loading_personal_realms`
-   `friends_realms`
-   `loading_friends_realms`

#### 作品集（`ui/portfolio_screen.json`）

-   `photos`

#### 进度（`ui/progress_screen.json`）

-   `required_resourcepacks`
-   `optional_resourcepacks`

#### 领域待定邀请（`ui/realms_pending_invitations_screen.json`）

-   `pending_invites_collection`

#### 领域设置（`ui/realms_settings_screen.json`）

-   `additional_realms_subscriptions_collection`
-   `realms_branch_collection`
-   `realms_backup_collection`
-   `members_collection`
-   `invited_friends_collection`
-   `uninvited_friends_collection`
-   `blocked_players_collection`

#### 截图选择器（`ui/screenshot_picker_screen.json`）

-   `screenshotpicker_collection`

#### 服务器表单（`ui/server_form.json`）

-   `custom_form`
-   `form_buttons`
-   `custom_dropdown`

#### 设置（`ui/settings_screen.json`）

-   `keyboard_standard_collection`
-   `keyboard_full_collection`
-   `gamepad_collection`
-   `languages`
-   `realms_plus_subscriptions_collection`
-   `additional_realms_subscriptions_collection`
-   `#selected_pack_items_global`
-   `#available_pack_items_global`
-   `#realms_pack_items_global`
-   `#unowned_pack_items_global`
-   `#invalid_pack_items_global`
-   `#selected_pack_items_level`
-   `#available_pack_items_level`
-   `#realms_pack_items_level`
-   `#unowned_pack_items_level`
-   `#invalid_pack_items_level`
-   `#selected_pack_items_addon`
-   `#available_pack_items_addon`
-   `#realms_pack_items_addon`
-   `#unowned_pack_items_addon`
-   `#invalid_pack_items_addon`
-   `experimental_toggles`
-   `world_panel`
-   `world_template_panel`
-   `resource_panel`
-   `behavior_panel`
-   `skin_panel`
-   `cache_panel`
-   `dependent_packs_panel`
-   `dependency_panel`

#### 结构方块（`ui/structure_editor_screen.json`）

-   `save_size_grid`
-   `save_offset_grid`
-   `load_offset_grid`
-   `export_size_grid`
-   `export_offset_grid`

#### 种子选择器（`ui/ugc_viewer_screen.json`）

-   `ugc_items`

#### 世界模板（`ui/world_templates_screen.json`）

-   `world_templates`
-   `realms_plus_templates`
-   `custom_world_templates`
-   `#suggested_offers_collection`

#### 铁砧（`ui/anvil_screen.json`）

-   `anvil_input_items`
-   `anvil_material_items`
-   `anvil_result_items`

#### 信标（`ui/beacon_screen.json`）

-   `beacon_payment_items`
-   `speed`
-   `haste`
-   `resist`
-   `jump`
-   `strength`
-   `regen`
-   `extra`
-   `confirm`
-   `cancel`

#### 酿造台（`ui/brewing_stand_screen.json`）

-   `brewing_fuel_item`
-   `brewing_input_item`
-   `brewing_result_items`

#### 制图台（`ui/cartography_screen.json`）

-   `cartography_input_items`
-   `cartography_additional_items`
-   `cartography_result_items`

#### 附魔台（`ui/enchanting_table_screen.json`）

-   `enchanting_input_items`
-   `enchanting_lapis_items`
-   `#enchant_buttons`

#### 熔炉（`ui/furnace_screen.json`）

-   `furnace_ingredient_items`
-   `furnace_fuel_items`
-   `furnace_output_items`

#### 砂轮（`ui/grindstone_screen.json`）

-   `grindstone_input_items`
-   `grindstone_additional_items`
-   `grindstone_result_items`

#### 马（`ui/horse_screen.json`）

-   `horse_equip_items`

#### 物品栏（`ui/inventory_screen.json` 和 `ui/inventory_screen_pocket.json`）

-   `armor_items`
-   `offhand_items`
-   `crafting_input_items`
-   `crafting_output_items`
-   `recipe_book`

#### 织布机（`ui/loom_screen.json`）

-   `loom_input_items`
-   `loom_dye_items`
-   `loom_material_items`
-   `loom_result_items`
-   `patterns`

#### 锻造台（`ui/smithing_table_screen.json`）

-   `smithing_table_input_items`
-   `smithing_table_material_items`
-   `smithing_table_result_items`

#### 切石机（`ui/stonecutter_screen.json`）

-   `stonecutter_input_items`
-   `stonecutter_result_items`
-   `stones`

#### 村民交易 2（`ui/trade_2_screen.json`）

-   `trade2_ingredient1_item`
-   `trade2_ingredient2_item`
-   `trade2_result_item`
-   `trade_item_1`
-   `trade_item_2`
-   `sell_item`
-   `trades`
-   `trade_tiers`

## 硬编码绑定名称

其中一些仅在特定屏幕中有效。

### 屏幕特定：

#### 账户转移错误（`ui/account_transfer_error_screen.json`）

-   `#error_title_text`
-   `#error_number_label`
-   `#error_number`
-   `#correlation_id_label`
-   `#correlation_id`

#### 添加外部服务器（`ui/add_external_server_screen.json`）

-   `#play_button_enabled`
-   `#play_button_disabled`
-   `#save_button_enabled`
-   `#save_button_disabled`

#### 临时进行中（`ui/adhoc_in_progress_screen.json`）

-   `#adhoc_title`

#### 身份验证（`ui/authentication_screen.json`）

-   `#sign_in_visible`
-   `#sign_in_ios_visible`
-   `#sign_in_button_visible`
-   `#sign_in_ios_buttons_visible`
-   `#authentication_message`
-   `#confirm_button_enabled`
-   `#edu_store_visible`
-   `#edu_store_purchase_info`
-   `#asking_to_buy_visible`
-   `#confirming_purchase_visible`
-   `#demo_choice_visible`
-   `#eula_visible`
-   `#popup_text`
-   `#popup_message_student_text`
-   `#popup_message_student_visible`
-   `#generic_popup_link_visible`
-   `#trial_purchase_link_visible`
-   `#show_popup_dismiss_button`

#### 书（`ui/book_screen.json`）

-   `#screenshot_path`
-   `#is_photo_page`
-   `#is_text_page`
-   `#pick_grid_dimensions`
-   `#page_number`
-   `#title_text_box_item_name`
-   `#author_editable`
-   `#author_text_box_item_name`
-   `#editable`
-   `#viewing`
-   `#signing`
-   `#picking`
-   `#exporting`
-   `#page_visible`
-   `#pick_item_visible`
-   `#close_button_visible`
-   `#edit_controls_active`
-   `#finalize_button_enabled`

#### Braze（`ui/braze_screen.json`）

-   `#image_texture`

#### 包购买警告（`ui/bundle_purchase_warning_screen.json`）

-   `#banner_visible`
-   `#offer_title`
-   `#keyart_path`
-   `#keyart_texture_file_system`

#### 聊天（`ui/chat_screen.json`）

-   `#keyboard_being_use`
-   `#keyboard_button_focus_override_up`
-   `#keyboard_button_focus_override_down`
-   `#keyboard_button_visible`
-   `#send_button_visible`
-   `#send_button_accessibility_text`
-   `#chat_visible`
-   `#message_text_box_content`
-   `#text_edit_box_focus_override_up`
-   `#text_edit_box_focus_override_down`
-   `#auto_complete_item`
-   `#auto_complete_text`
-   `#get_grid_size`
-   `#chat_title_text`
-   `#chat_typeface_visible`

#### 选择领域（`ui/choose_realm_screen.json`）

-   `#realms_grid_dimension`
-   `#world_button_focus_identifier`
-   `#ten_player_button_visible`
-   `#two_player_button_visible`
-   `#realms_world_player_count`
-   `#realms_game_online`
-   `#realms_game_unavailable`
-   `#realms_game_offline`

#### 金币购买（`ui/coin_purchase_screen.json`）

-   `#bonus_coins`
-   `#coins_without_bonus`
-   `#coin_offer_texture_name`
-   `#coin_offer_texture_file_system`
-   `#bonus_coins_visible`
-   `#price_text`
-   `#coins_required_for_purchase`
-   `#show_missing_coins`
-   `#coin_offer_size`
-   `#has_coin_offers`
-   `#coin_loading_visible`

#### 命令方块（`ui/command_block_screen.json`）

-   `#maximized_input_visible`
-   `#block_type_icon_texture`
-   `#close_button_visible_binding_name`
-   `#command_impulse_mode`
-   `#command_chain_mode`
-   `#command_repeat_mode`
-   `#block_type_dropdown_toggle_label`
-   `#block_type_dropdown_label_color_binding`
-   `#block_type_dropdown_enabled`
-   `#command_conditional_mode`
-   `#command_unconditional_mode`
-   `#condition_dropdown_toggle_label`
-   `#condition_dropdown_enabled`
-   `#command_always_on_mode`
-   `#command_needs_redstone_mode`
-   `#redstone_dropdown_enabled`
-   `#command_hover_note`
-   `#execute_on_first_tick_enabled`
-   `#command_tick_delay`
-   `#command_text_edit`
-   `#command_output_text`
-   `#previous_block_type_text`
-   `#previous_block_type_text_color`
-   `#previous_condition_mode_text`
-   `#previous_redstone_mode_text`
-   `#minimize_button_visible_binding_name`

#### 评论（`ui/comment_screen.json`）

-   `#report_to_club_button_visible_feeditem`
-   `#report_to_enforcement_button_visible_feeditem`
-   `#delete_button_visible_feeditem`
-   `#report_to_club_button_visible_comment`
-   `#report_to_enforcement_button_visible_comment`
-   `#delete_button_visible_comment`
-   `#comment_buttons_visible`
-   `#feed_comment_page_collection_length`
-   `#comment_content`
-   `#is_author_linked_account`
-   `#content`
-   `#text_visible`
-   `#likes_and_comments`
-   `#screenshot_texture`
-   `#screenshot_texture_source`
-   `#textpost_content`
-   `#textpost_visible`
-   `#comment_text_box`
-   `#comment_platform_tag`
-   `#comment_gamertag`
-   `#likes_and_time_since_comment_post`
-   `#author_gamertag`
-   `#time_since_feed_post`
-   `#author_platform_tag`
-   `#author_gamertag`

#### 确认 MSA 取消链接（`ui/confirm_msa_unlink_screen.json`）

-   `#unlink_warning_text`
-   `#unlink_consequences_acknowledged`
-   `#confirm_0`
-   `#confirm_0_enabled`
-   `#confirm_1`
-   `#confirm_1_enabled`
-   `#confirm_2`
-   `#confirm_2_enabled`
-   `#confirm_3`
-   `#confirm_3_enabled`

#### 内容日志历史（`ui/content_log_history_screen.json`）

-   `#content_log_text`
-   `#messages_size`

#### 创建世界促销（`ui/create_world_upsell.json`）

-   `#realm_button_text`
-   `#realm_trial_available`

#### 铁砧（`ui/anvil_screen.json`）

-   `#cost_text`
-   `#cost_text_green`
-   `#cost_text_red`

#### 信标（`ui/beacon_screen.json`）

-   `#supports_netherite`
-   `#extra_image_selection`

#### 酿造台（`ui/brewing_stand_screen.json`）

-   `#empty_bottle_image_visible`
-   `#empty_fuel_image_visible`
-   `#brewing_bubbles_ratio`
-   `#brewing_fuel_ratio`
-   `#brewing_arrow_ratio`

#### 制图台（`ui/cartography_screen.json`）

-   `#is_none_mode`
-   `#is_clone_mode`
-   `#is_rename_mode`
-   `#is_basic_map_mode`
-   `#is_locator_map_mode`
-   `#is_extend_mode`
-   `#is_locked_mode`
-   `#output_description`

#### 附魔台（`ui/enchanting_table_screen.json`）

-   `#selectable_dust_is_visible`
-   `#unselectable_dust_is_visible`
-   `#runes`
-   `#cost`
-   `#unselectable_button_visibility`
-   `#selectable_button_visibility`
-   `#show_selected_button_highlight`
-   `#active_enchant`
-   `#inactive_enchant`
-   `#input_item_id`
-   `#output_item_id`
-   `#enchant_hint`
-   `#player_level_color`
-   `#player_level_info`
-   `#enchant_error`

#### 熔炉（`ui/furnace_screen.json`）

-   `#furnace_arrow_ratio`
-   `#furnace_flame_ratio`
-   `#output_name`

#### 马（`ui/horse_screen.json`）

-   `#entity_id`
-   `#equip_grid_dimensions`
-   `#inv_grid_dimensions`
-   `#sadle_slot_centered`
-   `#has_saddle_slot`
-   `#has_armor_slot`
-   `#has_only_armor_slot`
-   `#has_only_carpet_slot`
-   `#has_armor_and_saddle_slot`
-   `#has_carpet_and_saddle_slot`
-   `#is_chested`
-   `#renderer_tab_toggle`
-   `#chest_tab_toggle`

#### 织布机（`ui/loom_screen.json`）

-   `#pattern_cell_background_texture`
-   `#container_cell_background_texture`
-   `#empty_image_visible`
-   `#banner_patterns`
-   `#banner_colors`
-   `#pattern_selector_total_items`
-   `#result_patterns`
-   `#result_colors`
-   `#is_right_tab_loom`
-   `#is_left_tab_patterns`

#### 切石机（`ui/stonecutter_screen.json`）

-   `#stone_cell_background_texture`
-   `#container_cell_background_texture`
-   `#item_stack_count`
-   `#stone_selector_total_items`
-   `#has_input_item`
-   `#is_right_tab_stonecutter`
-   `#is_left_tab_stones`

#### 死亡（`ui/death_screen.json`）

-   `#death_reason_text`
-   `#respawn_visible`
-   `#quit_enabled`
-   `#quit_visible`
-   `#buttons_and_deathmessage_visible`

#### 村民交易 2（`ui/trade2_screen.json`）

-   `#name_label`
-   `#trade_cell_background_texture`
-   `#trade_item_count`
-   `#single_slash_visible`
-   `#double_slash_visible`
-   `#second_trade_item_count`
-   `#trade_price_different`
-   `#trade_cross_out_visible`
-   `#padding_around_sell_item`
-   `#trade_possible`
-   `#trade_toggle_state`
-   `#trade_toggle_enabled`
-   `#trade_tier_total`
-   `#tier_name`
-   `#is_tier_unlocked`
-   `#is_left_tab_trade`
-   `#show_level`
-   `#tier_visible`
-   `#trade_selector_total`
-   `#has_second_buy_item`
-   `#exp_bar_visible`
-   `#exp_progress`
-   `#exp_possible_progress`
-   `#trade_details_button_1_visible`
-   `#trade_details_button_2_visible`
-   `#enchantment_details_button_visible`
-   `#item_valid`

### 值取决于所在屏幕：

-   `#title_text`
-   `#body_text`
-   `#hover_text`
-   `#cross_out_icon`
-   `#is_left_tab_inventory`
-   `#selected_hover_text`

### 其他：

-   `#tts_dialog_body`
-   `#button_enabled`
-   `#using_touch`
-   `#close_button_visible`

## 设置

### 滑块

| 名称                      | 滑块名称                     | 值绑定名称               | TTS 值（`tts_value_changed`） | 滑块文本                                   | 启用绑定名称                     |
| ------------------------- | ------------------------------- | -------------------------------- | ------------------------------- | --------------------------------------------- | ---------------------------------------- |
| 亮度                | `gamma`                         | `#gamma`                         | `#gamma_text_value`             | `#gamma_slider_label`                         | `#gamma_enabled`                         |
| 亮度（VR）           | `vr_gamma`                      | `#vr_gamma`                      | `#vr_gamma_text_value`          | `#vr_gamma_slider_label`                      | `#vr_gamma_enabled`                      |
| HUD 不透明度               | `interface_opacity`             | `#interface_opacity`             | `#interface_opacity_text_value` | `#interface_opacity_slider_label`             | `#interface_opacity_enabled`             |
| HUD 不透明度（分屏） | `splitscreen_interface_opacity` | `#splitscreen_interface_opacity` | `#interface_opacity_text_value` | `#splitscreen_interface_opacity_slider_label` | `#splitscreen_interface_opacity_enabled` |
| 视野               | `field_of_view`                 | `#field_of_view`                 | `#field_of_view_text_value`     | `#field_of_view_slider_label`                 | `#field_of_view_enabled`                 |

### 开关

| 名称                                    | 开关名称                           | 状态绑定名称                     | 启用绑定名称                           |
| --------------------------------------- | ------------------------------------- | -------------------------------------- | ---------------------------------------------- |
| 反转 Y 轴（鼠标）                   | `keyboard_mouse_invert_y_axis`        | `#keyboard_mouse_invert_y_axis`        | `#keyboard_mouse_invert_y_axis_enabled`        |
| 自动跳跃（鼠标）                       | `keyboard_mouse_autojump`             | `#keyboard_mouse_autojump`             | `#keyboard_mouse_autojump_enabled`             |
| 显示完整键盘选项                      | `keyboard_show_full_keyboard_options` | `#keyboard_show_full_keyboard_options` | `#keyboard_show_full_keyboard_options_enabled` |
| 隐藏键盘工具提示                      | `hide_keyboard_tooltips`              | `#hide_keyboard_tooltips`              | `#hide_keyboard_tooltips_enabled`              |
| 内容文件日志                        | `content_log_file`                    | `#content_log_file`                    | `#content_log_file_enabled`                    |
| 内容 GUI 日志                       | `content_log_gui`                     | `#content_log_gui`                     | `#content_log_gui_enabled`                     |
| 使用 SSO                                 | `ad_use_single_sign_on`               | `#ad_use_single_sign_on`               |                                                |
| 自动更新关闭                         | `#auto_update_mode_off`               | `#auto_update_mode_off`                |                                                |
| 开启自动更新并使用流量            | `#auto_update_mode_on_with_cellular`  | `#auto_update_mode_on_with_cellular`   |                                                |
| 仅 WiFi 自动更新                    | `#auto_update_mode_on_wifi_only`      | `#auto_update_mode_on_wifi_only`       |                                                |
| 启用自动更新                     | `auto_update_enabled`                 | `#auto_update_enabled`                 |                                                |
| 跨平台启用                      | `crossplatform_toggle`                | `#crossplatform_toggle`                | `#crossplatform_toggle_enabled`                |
| 允许流量数据                     | `allow_cellular_data`                 | `#allow_cellular_data`                 | `#allow_cellular_data_enabled`                 |
| Websocket 加密                    | `websocket_encryption`                | `#websocket_encryption`                | `#websocket_encryption_enabled`                |
| 仅允许受信任皮肤              | `only_trusted_skins_allowed`          | `#only_trusted_skins_allowed`          | `#only_trusted_skins_allowed_enabled`          |
| 存储位置外部               | `#storage_location_radio_external`    | `#storage_location_radio_external`     | `#file_storage_location_enabled`               |
| 存储位置应用                    | `#storage_location_radio_package`     | `#storage_location_radio_package`      | `#file_storage_location_enabled`               |
| 第一人称视角                | `#thirdperson_radio_first`            | `#thirdperson_radio_first`             | `#third_person_dropdown_enabled`               |
| 第三人称背面视角           | `#thirdperson_radio_third_back`       | `#thirdperson_radio_third_back`        | `#third_person_dropdown_enabled`               |
| 第三人称正面视角          | `#thirdperson_radio_third_front`      | `#thirdperson_radio_third_front`       | `#third_person_dropdown_enabled`               |
| 全屏                              | `full_screen`                         | `#full_screen`                         | `#full_screen_enabled`                         |
| 隐藏手                               | `hide_hand`                           | `#hide_hand`                           | `#hide_hand_enabled`                           |
| 隐藏手（VR）                          | `vr_hide_hand`                        | `#vr_hide_hand`                        | `#vr_hide_hand_enabled`                        |
| 隐藏纸娃娃                          | `hide_paperdoll`                      | `#hide_paperdoll`                      | `#hide_paperdoll_enabled`                      |
| 隐藏 HUD                                | `hide_hud`                            | `#hide_hud`                            | `#hide_hud_enabled`                            |
| 隐藏 HUD（VR）                           | `vr_hide_hud`                         | `#vr_hide_hud`                         | `#vr_hide_hud_enabled`                         |
| 屏幕动画                       | `screen_animations`                   | `#screen_animations`                   | `#screen_animations_enabled`                   |
| 水平分屏                       | `#split_screen_radio_horizontal`      | `#split_screen_radio_horizontal`       | `#split_screen_dropdown_enabled`               |
| 垂直分屏                         | `#split_screen_radio_vertical`        | `#split_screen_radio_vertical`         | `#split_screen_dropdown_enabled`               |
| 显示自动保存图标                     | `show_auto_save_icon`                 | `#show_auto_save_icon`                 | `#show_auto_save_icon_enabled`                 |
| 轮廓选择                       | `classic_box_selection`               | `#classic_box_selection`               | `#classic_box_selection_enabled`               |
| 轮廓选择（VR）                  | `vr_classic_box_selection`            | `#vr_classic_box_selection`            | `#vr_classic_box_selection_enabled`            |
| 游戏内显示玩家名称               | `ingame_player_names`                 | `#ingame_player_names`                 | `#ingame_player_names_enabled`                 |
| 游戏内显示玩家名称（分屏） | `splitscreen_ingame_player_names`     | `#splitscreen_ingame_player_names`     | `#splitscreen_ingame_player_names_enabled`     |
| 视角摆动                            | `view_bobbing`                        | `#view_bobbing`                        | `#view_bobbing_enabled`                        |
| 相机抖动                            | `camera_shake`                        | `#camera_shake`                        | `#camera_shake_enabled`                        |
| 优化树叶                            | `transparent_leaves`                  | `#transparent_leaves`                  | `#transparent_leaves_enabled`                  |
| 优化树叶（VR）                       | `vr_transparent_leaves`               | `#vr_transparent_leaves`               | `#vr_transparent_leaves_enabled`               |
| 优化气泡                            | `bubble_particles`                    | `#bubble_particles`                    | `#bubble_particles_enabled`                    |
| 渲染云                           | `render_clouds`                       | `#render_clouds`                       | `#render_clouds_enabled`                       |
| 优化云                            | `fancy_skies`                         | `#fancy_skies`                         | `#fancy_skies_enabled`                         |
| 平滑光照                         | `smooth_lighting`                     | `#smooth_lighting`                     | `#smooth_lighting_enabled`                     |
| 平滑光照（VR）                    | `graphics_toggle`                     | `#graphics_toggle`                     | `#graphics_toggle_enabled`                     |
| 画质                                | `graphics_toggle`                     | `#graphics_toggle`                     | `#graphics_toggle_enabled`                     |
| 视野                           | `field_of_view_toggle`                | `#field_of_view_toggle`                | `#field_of_view_toggle_enabled`                |
| 经典 UI 配置文件                      | `#ui_profile_radio_classic`           | `#ui_profile_radio_classic`            | `#ui_profile_dropdown_enabled`                 |
| 口袋 UI 配置文件                       | `#ui_profile_radio_pocket`            | `#ui_profile_radio_pocket`             | `#ui_profile_dropdown_enabled`                 |
| 像素抗锯齿                     | `texel_aa`                            | `#texel_aa`                            | `#texel_aa_enabled`                            |
| 3D 渲染（VR）                       | `vr_3d_rendering`                     | `#vr_3d_rendering`                     | `#vr_3d_rendering_enabled`                     |
| 镜像纹理（VR）                     | `vr_mirror_texture`                   | `#vr_mirror_texture`                   | `#vr_mirror_texture_enabled`                   |
| 手指针可见（VR）               | `vr_hand_pointer`                     | `#vr_hand_pointer`                     | `#vr_hand_pointer_enabled`                     |
| 手可见（VR）                      | `vr_hands_visible`                    | `#vr_hands_visible`                    | `#vr_hands_visible_enabled`                    |
| 启用自动 TTS                         | `enable_auto_text_to_speech`          | `#enable_auto_text_to_speech`          | `#enable_auto_text_to_speech_enabled`          |
| 启用 UI TTS                           | `enable_ui_text_to_speech`            | `#enable_ui_text_to_speech`            | `#enable_ui_text_to_speech_enabled`            |
| 启用聊天 TTS                         | `enable_chat_text_to_speech`          | `#enable_chat_text_to_speech`          | `#enable_chat_text_to_speech_enabled`          |
| 启用打开聊天消息                | `enable_open_chat_message`            | `#enable_open_chat_message`            | `#enable_open_chat_message_enabled`            |
| 相机抖动                            | `camera_shake`                        | `#camera_shake`                        | `#camera_shake_enabled`                        |
| 语言（集合）                  | `languages`                           | `#language_initial_selected`           |                                                |

## 物品 ID Aux（`#item_id_aux`）

| 名称              |  ID  | Aux 值 |
| ----------------- | :--: | :--------: |
| diamond           | 306  |  20054016  |
| emerald           | 519  |  34013184  |
| gold_ingot        | 308  |  20185088  |
| iron_ingot        | 307  |  20119552  |
| netherite_ingot   | 616  |  40370176  |
| banner            | 574  |  37617664  |
| saddle            | 373  |  24444928  |
| cartography_table | -200 | -13107200  |
| chest             |  54  |  3538944   |
| crafting_table    |  58  |  3801088   |
| loom              | -204 | -13369344  |
| stonecutter_block | -197 | -12910592  |

#### 如何计算方块物品 aux 值：

Aux = ID * 65536

ID = Aux / 65536
65536 = Aux / ID

在[此处](https://learn.microsoft.com/minecraft/creator/reference/content/vanillalistingsreference/items)获取所有物品 ID。
