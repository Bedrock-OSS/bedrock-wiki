---
title: JSON UI Documentation
category: Documentation
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
    - Tcbdxh
    - inotflying
    - TheItsNameless
    - SmokeyStack
    - Gotemba912
---

## UI Elements

### Element Types

|      Name       |                                           Description                                           |                                                                                                                                                                                                                                Allowed Properties                                                                                                                                                                                                                                 |
| --------------- | ----------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| panel           | A container, like `<div>` in HTML                                                               | [Control](/json-ui/json-ui-documentation#control) <br> [Layout](/json-ui/json-ui-documentation#layout) <br> [Data Binding](/json-ui/json-ui-documentation#data-binding)                                                                                                                                                                                                                                                                                                 |
| stack_panel     | Similar to `panel` but stacks its children depending on `orientation` property value            | [Stack Panel](/json-ui/json-ui-documentation#stack-panel) <br> [Collection](/json-ui/json-ui-documentation#collection) <br> [Control](/json-ui/json-ui-documentation#control) <br> [Layout](/json-ui/json-ui-documentation#layout) <br> [Data Binding](/json-ui/json-ui-documentation#data-binding)                                                                                                                                                           |
| grid            | Grid of elements                                                                                | [Grid](/json-ui/json-ui-documentation#grid) <br> [Collection](/json-ui/json-ui-documentation#collection) <br> [Control](/json-ui/json-ui-documentation#control) <br> [Layout](/json-ui/json-ui-documentation#layout) <br> [Data Binding](/json-ui/json-ui-documentation#data-binding)                                                                                                                                                                         |
| label           | Text element                                                                                    | [Text](/json-ui/json-ui-documentation#text) <br> [Control](/json-ui/json-ui-documentation#control) <br> [Layout](/json-ui/json-ui-documentation#layout) <br> [Data Binding](/json-ui/json-ui-documentation#data-binding)                                                                                                                                                                                                                                           |
| image           | Sprite element. Draws a texture.                                                                | [Sprite](/json-ui/json-ui-documentation#sprite) <br> [Control](/json-ui/json-ui-documentation#control) <br> [Layout](/json-ui/json-ui-documentation#layout) <br> [Data Binding](/json-ui/json-ui-documentation#data-binding)                                                                                                                                                                                                                                       |
| input_panel     | A `panel` that accepts input                                                                    | [Input](/json-ui/json-ui-documentation#input) <br> [Focus](/json-ui/json-ui-documentation#focus) <br> [Sound](/json-ui/json-ui-documentation#sound) <br> [Control](/json-ui/json-ui-documentation#control) <br> [Layout](/json-ui/json-ui-documentation#layout) <br> [Data Binding](/json-ui/json-ui-documentation#data-binding)                                                                                                                         |
| button          | A button and it can have 4 states (default, hover, pressed and locked)                          | [Button](/json-ui/json-ui-documentation#button) <br> [Input](/json-ui/json-ui-documentation#input) <br> [Focus](/json-ui/json-ui-documentation#focus) <br> [Sound](/json-ui/json-ui-documentation#sound) <br> [Control](/json-ui/json-ui-documentation#control) <br> [Layout](/json-ui/json-ui-documentation#layout) <br> [Data Binding](/json-ui/json-ui-documentation#data-binding)                                                               |
| toggle          | A toggle and it has 2 states (checked or unchecked). Each state has a hover and locked variant  | [Toggle](/json-ui/json-ui-documentation#toggle) <br> [Input](/json-ui/json-ui-documentation#input) <br> [Focus](/json-ui/json-ui-documentation#focus) <br> [Sound](/json-ui/json-ui-documentation#sound) <br> [Control](/json-ui/json-ui-documentation#control) <br> [Layout](/json-ui/json-ui-documentation#layout) <br> [Data Binding](/json-ui/json-ui-documentation#data-binding)                                                               |
| dropdown        | A toggle for dropdown purposes                                                                  | [Dropdown](/json-ui/json-ui-documentation#dropdown) <br> [Toggle](/json-ui/json-ui-documentation#toggle) <br> [Input](/json-ui/json-ui-documentation#input) <br> [Focus](/json-ui/json-ui-documentation#focus) <br> [Sound](/json-ui/json-ui-documentation#sound) <br> [Control](/json-ui/json-ui-documentation#control) <br> [Layout](/json-ui/json-ui-documentation#layout) <br> [Data Binding](/json-ui/json-ui-documentation#data-binding) |
| slider          | Range input element                                                                             | [Slider](/json-ui/json-ui-documentation#slider) <br> [Input](/json-ui/json-ui-documentation#input) <br> [Focus](/json-ui/json-ui-documentation#focus) <br> [Sound](/json-ui/json-ui-documentation#sound) <br> [Control](/json-ui/json-ui-documentation#control) <br> [Layout](/json-ui/json-ui-documentation#layout) <br> [Data Binding](/json-ui/json-ui-documentation#data-binding)                                                               |
| slider_box      | The slider button that you use to change the slider value                                       | [Slider Box](/json-ui/json-ui-documentation#slider-box) <br> [Input](/json-ui/json-ui-documentation#input) <br> [Control](/json-ui/json-ui-documentation#control) <br> [Layout](/json-ui/json-ui-documentation#layout) <br> [Data Binding](/json-ui/json-ui-documentation#data-binding)                                                                                                                                                                       |
| edit_box        | Text field element. By default it's single-lined                                                | [Text Edit](/json-ui/json-ui-documentation#text-edit) <br> [Button](/json-ui/json-ui-documentation#button) <br> [Input](/json-ui/json-ui-documentation#input) <br> [Focus](/json-ui/json-ui-documentation#focus) <br> [Control](/json-ui/json-ui-documentation#control) <br> [Layout](/json-ui/json-ui-documentation#layout) <br> [Data Binding](/json-ui/json-ui-documentation#data-binding)                                                       |
| scroll_view     | Creates a scrolling panel element                                                               | [Scroll View](/json-ui/json-ui-documentation#scroll-view) <br> [Input](/json-ui/json-ui-documentation#input) <br> [Control](/json-ui/json-ui-documentation#control) <br> [Layout](/json-ui/json-ui-documentation#layout) <br> [Data Binding](/json-ui/json-ui-documentation#data-binding)                                                                                                                                                                     |
| scrollbar_track | The scrollbar track                                                                             | [Input](/json-ui/json-ui-documentation#input) <br> [Control](/json-ui/json-ui-documentation#control) <br> [Layout](/json-ui/json-ui-documentation#layout)                                                                                                                                                                                                                                                                                                          |
| scrollbar_box   | The scrollbar "thumb"/button. The draggable scrolling handle. By default is oriented vertically | [Input](/json-ui/json-ui-documentation#input) <br> [Control](/json-ui/json-ui-documentation#control) <br> [Layout](/json-ui/json-ui-documentation#layout)                                                                                                                                                                                                                                                                                                          |
| factory         | A element generator                                                                             | [Control](/json-ui/json-ui-documentation#control) <br> [Layout](/json-ui/json-ui-documentation#layout)                                                                                                                                                                                                                                                                                                                                                                  |
| screen          | Screen element                                                                                  | [Screen](/json-ui/json-ui-documentation#screen) [Control](/json-ui/json-ui-documentation#control) <br> [Layout](/json-ui/json-ui-documentation#layout) <br> [Data Binding](/json-ui/json-ui-documentation#data-binding)                                                                                                                                                                                                                                            |
| custom          | Special renderer element that is created in the code because it's too complex for JSON UI       | [Custom Render](/json-ui/json-ui-documentation#custom-render) <br> [Control](/json-ui/json-ui-documentation#control) <br> [Layout](/json-ui/json-ui-documentation#layout) <br> [Data Binding](/json-ui/json-ui-documentation#data-binding)                                                                                                                                                                                                                         |
| selection_wheel |                                                                                                 | [Selection Wheel](/json-ui/json-ui-documentation#selection-wheel) <br> [Input](/json-ui/json-ui-documentation#input) <br> [Focus](/json-ui/json-ui-documentation#focus) <br> [Sound](/json-ui/json-ui-documentation#sound) <br> [Control](/json-ui/json-ui-documentation#control) <br> [Layout](/json-ui/json-ui-documentation#layout) <br> [Data Binding](/json-ui/json-ui-documentation#data-binding)                                             |

#### Legacy Element Types (No longer work)

|      Name      |                       Description                        |                                                                                                                                                                                                                               Allowed Properties                                                                                                                                                                                                                               |
| -------------- | -------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| tab            | The way tabs were made before the addition of toggles    | [Tab](/json-ui/json-ui-documentation#tab-legacy) <br> [Button](/json-ui/json-ui-documentation#button) <br> [Input](/json-ui/json-ui-documentation#input) <br> [Focus](/json-ui/json-ui-documentation#focus) <br> [Sound](/json-ui/json-ui-documentation#sound) <br> [Control](/json-ui/json-ui-documentation#control) <br> [Layout](/json-ui/json-ui-documentation#layout) <br> [Data Binding](/json-ui/json-ui-documentation#data-binding) |
| carousel_label |                                                          | [Carousel Text](/json-ui/json-ui-documentation#carousel-text-legacy) <br> [Text](/json-ui/json-ui-documentation#text) <br> [Control](/json-ui/json-ui-documentation#control) <br> [Layout](/json-ui/json-ui-documentation#layout) <br> [Data Binding](/json-ui/json-ui-documentation#data-binding)                                                                                                                                                         |
| grid_item      | A `panel` but specifically to be an item/child of a grid | [Control](/json-ui/json-ui-documentation#control) <br> [Layout](/json-ui/json-ui-documentation#layout) <br> [Data Binding](/json-ui/json-ui-documentation#data-binding)                                                                                                                                                                                                                                                                                              |
| scrollbar      |                                                          | [Input](/json-ui/json-ui-documentation#input) <br> [Focus](/json-ui/json-ui-documentation#focus) <br> [Control](/json-ui/json-ui-documentation#control) <br> [Layout](/json-ui/json-ui-documentation#layout) <br> [Data Binding](/json-ui/json-ui-documentation#data-binding)                                                                                                                                                                              |

## Properties

### Control

|       Property Name       |         Type         | Default Value |                                                                                            Description                                                                                             |
| ------------------------- | :------------------: | :-----------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| visible                   |       boolean        |    `true`     | If the UI element should be visible                                                                                                                                                                |
| enabled                   |       boolean        |    `true`     | If true and if the UI element or any of its children have the locked state then they will be in the locked                                                                                         |
| layer                     |         int          |      `0`      | Z-Index/Layer (like zindex in CSS) relative to parent element. Higher layers will render above                                                                                                     |
| alpha                     |        float         |     `1.0`     | Alpha/transparency of the element. It will only affect the UI element. Its children will be unaffected. If you want the alpha to apply for both the parent and children also use `propagate_alpha` |
| propagate_alpha           |       boolean        |    `false`    | If `alpha` should not only apply to the parent if possible but also all its children                                                                                                               |
| clips_children            |       boolean        |    `false`    | Cuts off visually and interactively everything beyond the bounderies of the UI element                                                                                                             |
| allow_clipping            |       boolean        |    `true`     | If `clips_children` works in the UI element. Otherwise, it won't have any effect                                                                                                                   |
| clip_offset               |    Vector [x, y]     |   `[0, 0]`    | Offset from the start of the clipping                                                                                                                                                              |
| clip_state_change_event   |        string        |               |                                                                                                                                                                                                    |
| enable_scissor_test       |       boolean        |               | [https://www.khronos.org/opengl/wiki/Scissor_Test](https://www.khronos.org/opengl/wiki/Scissor_Test)                                                                                               |
| property_bag              |        object        |               | [Property bag](/json-ui/json-ui-documentation#property-bag) contains properties/variables that are more related with the data than the actually structure and look of the UI element               |
| selected                  |       boolean        |               | If the text box is selected by default                                                                                                                                                             |
| use_child_anchors         |       boolean        |    `false`    | Use the `anchor_from` and`anchor_to` of the child of the UI element                                                                                                                                |
| controls                  |        array         |               | For adding children to the element                                                                                                                                                                 |
| anims                     |       string[]       |               | Array of the animation names                                                                                                                                                                       |
| disable_anim_fast_forward |       boolean        |               |                                                                                                                                                                                                    |
| animation_reset_name      |        string        |               |                                                                                                                                                                                                    |
| ignored                   |       boolean        |    `false`    | If the UI element should be ignored                                                                                                                                                                |
| variables                 |   array or object    |               | A bunch of conditions that change the variables values                                                                                                                                             |
| modifications             |        array         |               | Allows to modify the UI files of resource packs below (vanilla being the most bottom one)                                                                                                          |
| grid_position             | Vector [row, column] |               | Position that the control will take inside the grid. This also allows to modify specific grid items of a hardcoded grid                                                                            |
| collection_index          |         int          |               | Index that the control takes in the collection                                                                                                                                                     |

#### Legacy (no longer works)

| Property Name |   Type   | Default Value |                                                                                     Description                                                                                     |
| ------------- | :------: | :-----------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| z_order       |   int    |       0       | First version of the `layer` property                                                                                                                                              |
| scroll_report | string[] |               | Array of the name of the controls to notify when content inside of the scroll panel changes                                                                                         |
| alignment     |   enum   |               | Possible values: <br> `top_left` <br> `top_middle` <br> `top_right` <br> `left_middle` <br> `center` <br> `right_middle` <br> `bottom_left` <br> `bottom_middle` <br> `bottom_right` |

### Layout

|       Property Name        |          Type          |      Default Value       |                                                                                                                                                                                                                                                                                                                                                                                                                    Description                                                                                                                                                                                                                                                                                                                                                                                                                    |
| -------------------------- | :--------------------: | :----------------------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| size                       | Vector [width, height] | `["default", "default"]` | Size of the UI element. <br> Possible values: <br> `"default"` (Default value which is `"100%"`) <br> `0` (Number of pixels) <br> `"0px"` (Number of pixels. It's the same as 0 but it's put inside a string with px at the end. It's used when you want to sum or subtract a percentage based value with a specific number of pixels. (e.g. `"75% + 12px"`)) <br> `"0%"` (Percentage of relative to the parent element) <br> `"0%c"` (Percentage of the total width/height of the element children) <br> `"0%cm"` (Percentage of the width/height of the biggest visible child of that element) <br> `"0%sm"` (Percentage of the width/height of the sibling element) <br> `"0%y"` (Percentage of the element height) <br> `"0%x"` (Percentage of the element width) <br> `"fill"` (Expands to the remaining width/height of the parent element) |
| max_size                   | Vector [width, height] | `["default", "default"]` | Maximum size of the UI element can have                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| min_size                   | Vector [width, height] | `["default", "default"]` | Minimum size of the UI element can have                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| offset                     |     Vector [x, y]      |         `[0, 0]`         | Position of the UI element relative to the parent UI element. It's TopLeft based meaning the coordinates [0, 0] start at the top left of the screen. <br> `10`- pixels <br> `"10px"` - pixels <br> `"50%"` - Width/height of the parent element <br> `"50%x"` - Width of the element <br> `"50%y"` - Height of the element                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| anchor_from                |          enum          |         `center`         | Anchor point in the parent element. <br> Possible values: <br> `top_left` <br> `top_middle` <br> `top_right` <br> `left_middle` <br> `center` <br> `right_middle` <br> `bottom_left` <br> `bottom_middle` <br> `bottom_right`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| anchor_to                  |          enum          |         `center`         | Anchor point in the element. <br> Possible values: <br> `top_left` <br> `top_middle` <br> `top_right` <br> `left_middle` <br> `center` <br> `right_middle` <br> `bottom_left` <br> `bottom_middle` <br> `bottom_right`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| inherit_max_sibling_width  |        boolean         |         `false`          | Use the maximum width of the sibling element                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| inherit_max_sibling_height |        boolean         |         `false`          | Use the maximum height of the sibling element                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| use_anchored_offset        |        boolean         |                          |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| contained                  |        boolean         |                          |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| draggable                  |          enum          |                          | Makes the element draggable through cursor. The element should be able to accept input in order to be draggable (`input_panel`, `button`, etc.) and must have the required button mappings. <br> Possible values: `vertical`, `horizontal` and `both`    |
| follows_cursor             |        boolean         |         `false`          | Follows the cursor                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |

### Data Binding

| Property Name |                                           Type                                            | Default Value |                    Description                     |
| ------------- | :---------------------------------------------------------------------------------------: | :-----------: | -------------------------------------------------- |
| bindings      | Vector of [binding object](/json-ui/json-ui-documentation#data-binding-array-object) |               | Bind and work with hardcoded values in the element |


#### Data Binding Array Object

Data Binding allows to bind hardcoded values/variables to an element property.

|       Property Name       |  Type   | Default Value |                                                                                Description                                                                                |
| ------------------------- | :-----: | :-----------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ignored                   | boolean |    `false`    | If binding should be ignored                                                                                                                                              |
| binding_type              |  enum   |               | Possible values: <br> `global` <br> `view` <br> `collection` <br> `collection_details` <br> `none`                                                                        |
| binding_name              | string  |               | Stores the value of the data binding name or condition with it                                                                                                            |
| binding_name_override     | string  |               | Name of the UI element property that will apply the stored value in `binding_name`                                                                                        |
| binding_collection_name   | string  |               | Name of the collection of items to be used                                                                                                                                |
| binding_collection_prefix | string  |               |                                                                                                                                                                           |
| binding_condition         |  enum   |               | Condition for the data binding to happen. <br> Possible values: <br> `always` <br> `always_when_visible` <br> `visible` <br> `once` <br> `none` <br> `visibility_changed` |
| source_control_name       | string  |               | Name of the UI element to observe its property values                                                                                                                     |
| source_property_name      | string  |               | Store the value of the property value of the UI element refered in `source_control_name`                                                                                  |
| target_property_name      | string  |               | The UI element property that the stored value in `source_property_name` will be applied to                                                                                |
| resolve_sibling_scope     | boolean |               | If `true`, allows the selection of a sibling element in the same control instead of its child, for `source_control_name`                                                  |

### Stack Panel

| Property Name | Type  | Default Value |                                                Description                                                 |
| ------------- | :---: | :-----------: | ---------------------------------------------------------------------------------------------------------- |
| orientation   | enum  |  `vertical`   | Direction the elements stack inside `stack_panel`. <br> Possible values: <br> `vertical` <br> `horizontal` |

### Grid

|       Property Name       |          Type          | Default Value |                                                             Description                                                             |
| ------------------------- | :--------------------: | ------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| grid_dimensions           | Vector [rows, columns] |               | Number of columns and rows the grid has                                                                                             |
| maximum_grid_items        |          int           |               | Maximum number of items the grid will generate                                                                                      |
| grid_dimension_binding    |         string         |               | Binding name for grid dimensions                                                                                                    |
| grid_rescaling_type       |          enum          |               | Grid rescaling orientation. <br> Possible values: <br> `vertical` <br> `horizontal` <br> `none`                                     |
| grid_fill_direction       |          enum          |               | Possible values: <br> `vertical` <br> `horizontal` <br> `none`                                                                      |
| grid_item_template        |         string         |               | An element capable of handling collections <br> (e.g. `"common.container_item"`, `"container_items"`, `"inventory_items"` and etc.) |
| precached_grid_item_count |          int           |               |                                                                                                                                     |

### Text

|      Property Name      |       Type       |   Default Value   |                                                      Description                                                      |
| ----------------------- | :--------------: | :---------------: | --------------------------------------------------------------------------------------------------------------------- |
| text                    |      string      |                   | Text content                                                                                                          |
| color                   | Vector [r, g, b] | `[1.0, 1.0, 1.0]` | Text color. RGB value from 0.0 to 1.0                                                                                                          |
| locked_color            | Vector [r, g, b] |                   | Text color when a parent has `enabled: false`                                                                         |
| shadow                  |     boolean      |      `false`      | Text shadow                                                                                                           |
| hide_hyphen             |     boolean      |      `false`      | Hide hyphen caused by word breaking                                                                                   |
| notify_on_ellipses      |     string[]     |                   | Array of names of the controls to notify when text gets or loses ellipses                                             |
| enable_profanity_filter |     boolean      |      `false`      | If "bad" words should be censored                                                                                     |
| locked_alpha            |      float       |                   | Alpha/transparency of label when a parent has `enabled: false`                                                        |
| font_size               |       enum       |     `normal`      | Size of the text. <br> Possible values: <br> `small` <br> `normal` <br> `large` <br> `extra_large`                    |
| font_scale_factor       |      float       |       `1.0`       | Scale of the text                                                                                                     |
| localize                |     boolean      |      `false`      | If ```text``` should be able to be translated                                                                         |
| line_padding            |      number      |                   | Space between lines                                                                                                   |
| font_type               |       enum       |     `default`     | Font of the text. <br> Possible values: <br> `default` <br> `rune` <br> `unicode` <br> `smooth` <br> `MinecraftTen` <br> or any other custom font                                                                                                      |
| backup_font_type        |       enum       |     `default`     | Font used if `font_type` didn't work                                                                                  |
| text_alignment          |       enum       |                   | Text alignment direction. If it's not defined it will adjust automatically based on `anchor_from` and ```anchor_to``` |

#### Legacy (no longer works)

| Property Name |  Type   | Default Value |                             Description                             |
| ------------- | :-----: | :-----------: | ------------------------------------------------------------------- |
| wrap          | boolean |     `false`     | Break text into lines if text is bigger than width of the element |
| clip          | boolean |     `false`     |                                                                     |

<br>

Use of `notify_on_ellipses`. Mostly used with hardcoded texts.

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

|        Property Name        |                     Type                      | Default Value |                                                                                       Description                                                                                        |
| --------------------------- | :-------------------------------------------: | :-----------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| texture                     |                    string                     |               | Image path starting from pack root. (e.g. `"textures/ui/White"`)                                                                                                                         |
| allow_debug_missing_texture |                    boolean                    |    `true`     | Display the missing_texture if the texture is not found                                                                                                                                  |
| uv                          |                 Vector [u, v]                 |               | Start position of the texture mapping                                                                                                                                                    |
| uv_size                     |            Vector [width, height]             |               | Size of the texture mapping                                                                                                                                                              |
| texture_file_system         |                    string                     |`InUserPackage`| Source to get the texture.  <br> Possible values: <br> `InUserPackage` <br> `InAppPackage` <br> `RawPath` <br> `RawPersistent` <br> `InSettingsDir` <br> `InExternalDir` <br> `InServerPackage` <br> `InDataDir` <br> `InUserDir` <br> `InWorldDir` <br> `StoreCache` <br> Usage is Unknown |
| nineslice_size              | int, Vector [x, y] or Vector [x0, y0, x1, y1] |               | 9-slice. A method that divides an texture into 9 pieces. When resized the corners will stay in place and the rest will stretch                                                           |
| tiled                       |                boolean or enum                |               | If the texture will tile when the size of the UI element is bigger than the texture size. <br> Possible values: <br> `true`/`false` <br> `x` <br> `y`                                    |
| tiled_scale                 |                Vector [sX, sY]                |    `false`    | Scale of the tile textures                                                                                                                                                               |
| clip_direction              |                     enum                      |               | Start point position for the `clip_ratio`. If `down`, the image will begin to appear from the bottom. <br> Possible values: <br> `left` <br> `right` <br> `up` <br> `down` <br> `center` |
| clip_ratio                  |                     float                     |               | How much to clip. From 0.0 to 1.0                                                                                                                                                        |
| clip_pixelperfect           |                    boolean                    |               | If the clip should try to be the most pixel accurate possible                                                                                                                            |
| keep_ratio                  |                    boolean                    |    `true`    | Keep ratio when resizing image                                                                                                                                                           |
| bilinear                    |                    boolean                    |    `false`    | Use the bilinear function when resizing the image                                                                                                                                        |
| fill                        |                    boolean                    |    `false`    | Scratch the image to the size                                                                                                                                                            |
| $fit_to_width               |                    boolean                    |               |                                                                                                                                                                                          |
| zip_folder                  |                    string                     |               |                                                                                                                                                                                          |
| grayscale                   |                    boolean                    |    `false`    | Render image in black and white                                                                                                                                                          |
| force_texture_reload        |                    boolean                    |               | Reload image when the texture path is changed                                                                                                                                            |
| base_size                   |            Vector [width, height]             |               |                                                                                                                                                                                          |

To use clipping, bind a `#*_ratio` binding name to a `#clip-ratio` property with binding condition `"always"`. Progress arrow and fuel images in furnace UI work like this.

### Input

|           Property Name            |                                            Type                                             | Default Value | Description |
| ---------------------------------- | :-----------------------------------------------------------------------------------------: | :-----------: | ----------- |
| button_mappings                    | Vector of [mapping object](/json-ui/json-ui-documentation#button-mapping-array-object) |               |             |
| modal                              |                                           boolean                                           |               |             |
| inline_modal                       |                                           boolean                                           |               |             |
| always_listen_to_input             |                                           boolean                                           |               |             |
| always_handle_pointer              |                                           boolean                                           |               |             |
| always_handle_controller_direction |                                           boolean                                           |               |             |
| hover_enabled                      |                                           boolean                                           |               |             |
| prevent_touch_input                |                                           boolean                                           |               |             |
| consume_event                      |                                           boolean                                           |               |             |
| consume_hover_events               |                                           boolean                                           |               |             |
| gesture_tracking_button            |                                           string                                            |               |             |

#### Button Mapping Array Object

|          Property Name           |  Type   | Default Value |                                    Description                                     |
| -------------------------------- | :-----: | :-----------: | ---------------------------------------------------------------------------------- |
| ignored                          | boolean |    `false`    | If mapping should be ignored                                                       |
| from_button_id                   | string  |               | ID of the action that fires the event                                              |
| to_button_id                     | string  |               | ID of the action to be executed when event is fired                                |
| mapping_type                     |  enum   |               | Possible values: <br> `global` <br> `pressed` <br> `double_pressed` <br> `focused` |
| scope                            |  enum   |               | Possible values: <br> `view` <br> `controller`                                     |
| input_mode_condition             |  enum   |               | Possible values: <br> `not_gaze` <br> `not_gamepad` <br> `gamepad_and_not_gaze`    |
| ignore_input_scope               | boolean |               |                                                                                    |
| consume_event                    | boolean |               |                                                                                    |
| handle_select                    | boolean |               |                                                                                    |
| handle_deselect                  | boolean |               |                                                                                    |
| button_up_right_of_first_refusal | boolean |               |                                                                                    |

### Focus

|        Property Name         |                                                     Type                                                      | Default Value |                                                                                           Description                                                                                           |
| ---------------------------- | :-----------------------------------------------------------------------------------------------------------: | :-----------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| default_focus_precedence     |                                                      int                                                      |               |                                                                                                                                                                                                 |
| focus_enabled                |                                                    boolean                                                    |               | If the arrow keys or controller can focus the element                                                                                                                                           |
| focus_wrap_enabled           |                                                    boolean                                                    |               |                                                                                                                                                                                                 |
| focus_magnet_enabled         |                                                    boolean                                                    |               |                                                                                                                                                                                                 |
| focus_identifier             |                                                    string                                                     |               | Focus identifier for this element                                                                                                                                                               |
| focus_change_down            |                                                    string                                                     |               | Identifier (`focus_identifier`) of the focusable element that will recieve focus when on button.menu_down. If you want to prevent the focus to escape from the bottom use `FOCUS_OVERRIDE_STOP` |
| focus_change_up              |                                                    string                                                     |               | Identifier (`focus_identifier`) of the focusable element that will recieve focus when on button.menu_up. If you want to prevent the focus to escape from the top use `FOCUS_OVERRIDE_STOP`      |
| focus_change_left            |                                                    string                                                     |               | Identifier (`focus_identifier`) of the focusable element that will recieve focus when on button.menu_left. If you want to prevent the focus to escape from the left use `FOCUS_OVERRIDE_STOP`   |
| focus_change_right           |                                                    string                                                     |               | Identifier (`focus_identifier`) of the focusable element that will recieve focus when on button.menu_right. If you want to prevent the focus to escape from the right use `FOCUS_OVERRIDE_STOP` |
| focus_mapping                |                                                     array                                                     |               |                                                                                                                                                                                                 |
| focus_container              |                                                    boolean                                                    |               |                                                                                                                                                                                                 |
| use_last_focus               |                                                    boolean                                                    |               |                                                                                                                                                                                                 |
| focus_navigation_mode_left   |                                                     enum                                                      |               | Possible values: `none` <br> `stop` <br> `custom` <br> `contained`                                                                                                                              |
| focus_navigation_mode_right  |                                                     enum                                                      |               | Possible values: `none` <br> `stop` <br> `custom` <br> `contained`                                                                                                                              |
| focus_navigation_mode_down   |                                                     enum                                                      |               | Possible values: `none` <br> `stop` <br> `custom` <br> `contained`                                                                                                                              |
| focus_navigation_mode_up     |                                                     enum                                                      |               | Possible values: `none` <br> `stop` <br> `custom` <br> `contained`                                                                                                                              |
| focus_container_custom_left  | Vector of [focus container custom object](/json-ui/json-ui-documentation#focus-container-custom-array-object) |               |                                                                                                                                                                                                 |
| focus_container_custom_right | Vector of [focus container custom object](/json-ui/json-ui-documentation#focus-container-custom-array-object) |               |                                                                                                                                                                                                 |
| focus_container_custom_down  | Vector of [focus container custom object](/json-ui/json-ui-documentation#focus-container-custom-array-object) |               |                                                                                                                                                                                                 |
| focus_container_custom_up    | Vector of [focus container custom object](/json-ui/json-ui-documentation#focus-container-custom-array-object) |               |                                                                                                                                                                                                 |


#### Focus Container Custom Array Object

|       Property Name        |  Type  |                                                          Description                                                           |
| -------------------------- | :----: | ------------------------------------------------------------------------------------------------------------------------------ |
| other_focus_container_name | string | Name of the UI control that will receive focus when on button.menu_left, button.menu_right, button.menu_up or button.menu_down |
| focus_id_inside            | string | Identifier (`focus_identifier`) of the focusable child control of the `other_focus_container_name` that will recieve the focus |

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
        "other_focus_container_name": "other_panel" // name of the object that will receive focus when the focus of this container ends on `button.menu_up`
      }
    ]
  }
}
...
```

### Button

|  Property Name  |  Type  | Default Value |                                Description                                 |
| --------------- | :----: | :-----------: | -------------------------------------------------------------------------- |
| default_control | string |               | Name of the child control that will be displayed only in the default state |
| hover_control   | string |               | Name of the child control that will be displayed only in the hover state   |
| pressed_control | string |               | Name of the child control that will be displayed only in the pressed state |
| locked_control  | string |               | Name of the child control that will be displayed only in the locked state  |

### Toggle

|         Property Name          |  Type   | Default Value |                                        Description                                        |
| ------------------------------ | :-----: | :-----------: | ----------------------------------------------------------------------------------------- |
| radio_toggle_group             | boolean |               |                                                                                           |
| toggle_name                    | string  |               | Identifier for the toggle group it belongs to. It can be a custom one.                    |
| toggle_default_state           | boolean |               |                                                                                           |
| toggle_group_forced_index      |   int   |               | Index of the toggle in its group                                                          |
| toggle_group_default_selected  |   int   |               | Index of the default toggle of the its group                                              |
| reset_on_focus_lost            | boolean |               |                                                                                           |
| toggle_on_hover                | string  |               |                                                                                           |
| toggle_on_button               | string  |               |                                                                                           |
| toggle_off_button              | string  |               |                                                                                           |
| enable_directional_toggling    | boolean |               |                                                                                           |
| toggle_grid_collection_name    | string  |               | Name of the collection the toggle belongs to                                              |
| checked_control                | string  |               | Name of the child control that will be displayed only in the checked state                |
| unchecked_control              | string  |               | Name of the child control that will be displayed only in the unchecked state              |
| checked_hover_control          | string  |               | Name of the child control that will be displayed only in the checked hover state          |
| unchecked_hover_control        | string  |               | Name of the child control that will be displayed only in the unchecked hover state        |
| checked_locked_control         | string  |               | Name of the child control that will be displayed only in the checked locked state         |
| unchecked_locked_control       | string  |               | Name of the child control that will be displayed only in the unchecked locked state       |
| checked_locked_hover_control   | string  |               | Name of the child control that will be displayed only in the checked locked hover state   |
| unchecked_locked_hover_control | string  |               | Name of the child control that will be displayed only in the unchecked locked hover state |
### HardCoded Toggles

In some screens,navigation tab group has its mapping default selected tabs,such as settings or inventory.
I guess these values are right.
```json
$search_index - $construction_index
$survival_layout_index - $construction_index
$recipe_book_layout_index - $equipment_index
$creative_layout_index - $items_index
``````
And there are some must toggles in setting and inventory,even though you can not get a warning without dev version and open the assert diagnosis,they exactly esist and controlled by a function called *ScreenView::_passViewCommand::<lambda_6d65fd272578d43f1becb6eada4ff32c>::()::<lambda_2ab071547c9a470558c54e4d3cddb5f2>::operator()*,when you totally modify these screens,you may meet this assertion.

For example,in setting that is  accessibility and in inventory,the construction,equipment,items and nature tabs are must.
### Dropdown

|      Property Name       |  Type  | Default Value |                             Description                              |
| ------------------------ | :----: | :-----------: | -------------------------------------------------------------------- |
| dropdown_name            | string |               | Identifier for the dropdown                                          |
| dropdown_content_control | string |               | Name of the child control that will behave as the root content panel |
| dropdown_area            | string |               | Name of the child control that will behave as the inside content     |

### Sound

| Property Name |                                       Type                                       |                                                     Description                                                     |
| ------------- | :------------------------------------------------------------------------------: | ------------------------------------------------------------------------------------------------------------------- |
| sound_name    |                                      string                                      | Name of the sound defined in the `RP/sounds/sound_definitions.json` file that plays when the pressed event is fired |
| sound_volume  |                                      float                                       | Volume of the sound                                                                                                 |
| sound_pitch   |                                      float                                       | Pitch of the sound                                                                                                  |
| sounds        | Vector of [sound object](/json-ui/json-ui-documentation#sound-array-object) | Array of the sounds to play when the pressed event is fired                                                         |

#### Sound Array Object

|       Property Name       |  Type  |                                                     Description                                                     |
| ------------------------- | :----: | ------------------------------------------------------------------------------------------------------------------- |
| sound_name                | string | Name of the sound defined in the `RP/sounds/sound_definitions.json` file that plays when the pressed event is fired |
| sound_volume              | float  | Volume of the sound                                                                                                 |
| sound_pitch               | float  | Pitch of the sound                                                                                                  |
| min_seconds_between_plays | float  | Seconds of wait before the sound can be played again                                                                |


### Collection

|  Property Name  |  Type  |            Description            |
| --------------- | :----: | --------------------------------- |
| collection_name | string | Name of the collection to be used |

### Text Edit

|           Property Name            |  Type   | Default Value |                                                                        Description                                                                         |
| ---------------------------------- | :-----: | :-----------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| text_box_name                      | string  |               | Identifier for text box                                                                                                                                    |
| text_edit_box_grid_collection_name | string  |               | Name of the collection the `edit_box` belongs to                                                                                                           |
| constrain_to_rect                  | boolean |               |                                                                                                                                                            |
| enabled_newline                    | boolean |               | Allows multiline text                                                                                                                                      |
| text_type                          |  enum   |               | Type of characters that the user is allowed to type in th text field. <br> Possible values: <br> `ExtendedASCII` <br> `IdentifierChars` <br> `NumberChars` |
| max_length                         |   int   |               | Maximum number of characters allow in the text field                                                                                                       |
| text_control                       | string  |               | Name of the child control that will be used for displaying the text                                                                                        |
| place_holder_control               | string  |               | Name of the child control that will be used for display the placeholder text                                                                               |
| can_be_deselected                  | boolean |               |                                                                                                                                                            |
| always_listening                   | boolean |               |                                                                                                                                                            |
| virtual_keyboard_buffer_control    | string  |               |                                                                                                                                                            |

### Slider

|        Property Name         |  Type   | Default Value |                                                 Description                                                  |
| ---------------------------- | :-----: | :-----------: | ------------------------------------------------------------------------------------------------------------ |
| slider_track_button          | string  |               | ID of the action for the slider track                                                                        |
| slider_small_decrease_button | string  |               | ID of the action for the decrease slider                                                                     |
| slider_small_increase_button | string  |               | ID of the action for the increase slider                                                                     |
| slider_steps                 |   int   |               | nHow many steps (or values) does the slider have                                                             |
| slider_direction             |  enum   |               | Orientation of the slider movement. <br> Possible values: <br> `vertical` <br> `horizontal`                  |
| slider_timeout               | number  |               |                                                                                                              |
| slider_collection_name       | string  |               | Name of the collection the slider belongs to                                                                 |
| slider_name                  | string  |               | Identifier for the slider                                                                                    |
| slider_select_on_hover       | boolean |               | Focus slider when it's hovered                                                                               |
| slider_selected_button       | string  |               | ID of the action for when the slider is selected                                                             |
| slider_deselected_button     | string  |               | ID of the action for when the slider is deselected                                                           |
| slider_box_control           | string  |               | Name of the child control that will behave as the slider thumb                                               |
| background_control           | string  |               | Name of the child control that will behave as the slider background                                          |
| background_hover_control     | string  |               | Name of the child control that will behave as the slider background on hover                                 |
| progress_control             | string  |               | Name of the child control that will behave as the slider background overlay for the slider progress          |
| progress_hover_control       | string  |               | Name of the child control that will behave as the slider background overlay for the slider progress on hover |

### Slider Box

|  Property Name  |  Type  | Default Value |                              Description                              |
| --------------- | :----: | :-----------: | --------------------------------------------------------------------- |
| default_control | string |               | Name of the child control that will be displayed in the default state |
| hover_control   | string |               | Name of the child control that will be displayed in the hover state   |
| locked_control  | string |               | Name of the child control that will be displayed in the locked state  |

### Scroll View

|       Property Name        |  Type   | Default Value |                                            Description                                            |
| -------------------------- | :-----: | :-----------: | ------------------------------------------------------------------------------------------------- |
| scrollbar_track_button     | string  |               | ID of the action for the track button                                                             |
| scrollbar_touch_button     | string  |               | ID of the action for the touch input                                                              |
| scroll_speed               | number  |               | Scrolling speed                                                                                   |
| gesture_control_enabled    | boolean |               |                                                                                                   |
| always_handle_scrolling    | boolean |               |                                                                                                   |
| touch_mode                 | boolean |               |                                                                                                   |
| scrollbar_box              | string  |               | Name of child UI element or nested UI element that will behave as the scrollbar thumb.            |
| scrollbar_track            | string  |               | Name of child UI element or nested UI element that will behave as the scrollbar track             |
| scroll_view_port           | string  |               | Name of child UI element that will behave as the view port                                        |
| scroll_content             | string  |               | Name of child UI element that will behave as the content root parent                              |
| scroll_box_and_track_panel | string  |               | Name of child UI element that will contain the scrollbox and track controls                       |
| jump_to_bottom_on_update   | boolean |               | Jump to the bottom when the scrolling panel has an update. For example, adds more children to it. |

### Custom Render

| Property Name | Type  |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ------------- | :---: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| renderer      | enum  | Possible values: <br> `hover_text_renderer` <br> `3d_structure_renderer` <br> `splash_text_renderer` <br> `ui_holo_cursor` <br> `trial_time_renderer` <br> `panorama_renderer` <br> `actor_portrait_renderer` <br> `banner_pattern_renderer` <br> `live_player_renderer` <br> `web_view_renderer` <br> `hunger_renderer` <br> `bubbles_renderer` <br> `mob_effects_renderer` <br> `cursor_renderer` <br> `progress_indicator_renderer` <br> `camera_renderer` <br> `horse_jump_renderer` <br> `armor_renderer` <br> `horse_heart_renderer` <br> `heart_renderer` <br> `hotbar_cooldown_renderer` <br> `hotbar_renderer` <br> `hud_player_renderer` <br> `live_horse_renderer` <br> `holographic_postrenderer` <br> `enchanting_book_renderer` <br> `debug_screen_renderer` <br> `gradient_renderer` <br> `paper_doll_renderer` <br> `name_tag_renderer` <br> `flying_item_renderer` <br> `inventory_item_renderer` <br> `credits_renderer` <br> `vignette_renderer` <br> `progress_bar_renderer` <br> `debug_overlay_renderer` <br> `background_renderer` <br> `bohr_model_renderer` <br> `experience_renderer` (Legacy, no longer works) <br> `menu_background_renderer` (Legacy, no longer works) |


####  Renderers

|         Renderer Name         |                                                  Description                                                   |
| ----------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `flying_item_renderer`        | The flying item when you change an item from a slot to another                                                 |
| `inventory_item_renderer`     | Renders an item icon. It only work in screens when ingame                                                      |
| `credits_renderer`            | The credits and end poem                                                                                       |
| `vignette_renderer`           | A vignette                                                                                                     |
| `name_tag_renderer`           | It's something like the playername above the player head or the name above animals when used a nametag on them |
| `paper_doll_renderer`         | A skin model                                                                                                   |
| `debug_screen_renderer`       | The debug text that appears on the beta/preview versions                                                       |
| `enchanting_book_renderer`    | The enchantment table book. It opens when there's an item to be enchanted                                      |
| `gradient_renderer`           | Draws a gradient                                                                                               |
| `live_horse_renderer`         | The horse/donkey/llama... model                                                                                |
| `live_player_renderer`        | The player model                                                                                               |
| `hud_player_renderer`         | The player model that imitates what the player is doing                                                        |
| `hotbar_renderer`             | Gets the hotbar slot image for each slot                                                                       |
| `hotbar_cooldown_renderer`    | Draws the item cooldown                                                                                        |
| `heart_renderer`              | Draws the player health                                                                                        |
| `horse_heart_renderer`        | Draws the horse/donkey/... health                                                                              |
| `armor_renderer`              | Draws the player armor                                                                                         |
| `horse_jump_renderer`         | Draws the horse jumping progress bar                                                                           |
| `hunger_renderer`             | Draws the player hunger                                                                                        |
| `bubbles_renderer`            | Draws the respiration bubbles                                                                                  |
| `mob_effects_renderer`        | Draws the effects that are applied to the player                                                               |
| `cursor_renderer`             | Draws the crosshair in the center of the screen                                                                |
| `progress_indicator_renderer` | Not used                                                                                                       |
| `camera_renderer`             | Used for the camera item                                                                                       |
| `web_view_renderer`           | Shows a website view                                                                                           |
| `banner_pattern_renderer`     | Renders a banner                                                                                               |
| `actor_portrait_renderer`     | Draws an portrait                                                                                              |
| `trial_time_renderer`         | In the trial version of the game it renders the time left to be able to use the world                          |
| `progress_bar_renderer`       | Draws a progress bar. It has more than one type                                                                |
| `3d_structure_renderer`       | Renders the structure block structure                                                                          |
| `splash_text_renderer`        | Gets and renders a random splash text from the `splashes.json` file                                            |
| `hover_text_renderer`         | Draws a tooltip                                                                                                |
| `ui_holo_cursor`              |                                                                                                                |
| `panorama_renderer`           | It's not the panoramas that appear behind the menus. It's the panorama of the worlds on the store.             |


#### Specific Properties

|    Property Name     |        Type         |                   Renderer                    |                          Description                          |
| -------------------- | :-----------------: | --------------------------------------------- | ------------------------------------------------------------- |
| gradient_direction   |        enum         | `gradient_renderer`                           | Possible values: <br> `vertical` <br> `horizontal`            |
| color1               | Vector [r, g, b, a] | `gradient_renderer`                           |                                                               |
| color2               | Vector [r, g, b, a] | `gradient_renderer`                           |                                                               |
| text_color           | Vector [r, g, b, a] | `name_tag_renderer`                           |                                                               |
| background_color     | Vector [r, g, b, a] | `name_tag_renderer`                           |                                                               |
| primary_color        | Vector [r, g, b, a] | `progress_bar_renderer`                       |                                                               |
| secondary_color      | Vector [r, g, b, a] | `progress_bar_renderer`                       |                                                               |
| camera_tilt_degrees  |       number        | `paper_doll_renderer`                         |                                                               |
| starting_rotation    |       number        | `paper_doll_renderer`                         |                                                               |
| use_selected_skin    |       boolean       | `paper_doll_renderer`                         |                                                               |
| use_uuid             |       boolean       | `paper_doll_renderer`                         |                                                               |
| use_skin_gui_scale   |       boolean       | `paper_doll_renderer`                         |                                                               |
| use_player_paperdoll |       boolean       | `paper_doll_renderer`                         |                                                               |
| rotation             |        enum         | `paper_doll_renderer` and `panorama_renderer` | Possible values: <br> `auto` <br> `gesture_x` <br> `custom_y` |
| end_event            |       string        | `credits_renderer`                            |                                                               |

### Screen

|            Property Name            |  Type   |                                Description                                |
| ----------------------------------- | :-----: | ------------------------------------------------------------------------- |
| render_only_when_topmost            | boolean | Only render the screen if it's the most top screen in the screen stack    |
| screen_not_flushable                | boolean |                                                                           |
| always_accepts_input                | boolean |                                                                           |
| render_game_behind                  | boolean | Doesn't prevent screen below of being able to receive input from the user |
| absorbs_input                       | boolean |                                                                           |
| is_showing_menu                     | boolean |                                                                           |
| is_modal                            | boolean | It's a screen modal                                                       |
| should_steal_mouse                  | boolean | Captures the cursor and hides it                                          |
| low_frequency_rendering             | boolean | Uses less memory to render the screen                                     |
| screen_draws_last                   | boolean | It's the last screen to be drawn/rendered                                 |
| vr_mode                             | boolean |                                                                           |
| force_render_below                  | boolean | Renders bottom screens below current screen in the screen stack           |
| send_telemetry                      | boolean |                                                                           |
| close_on_player_hurt                | boolean | Close the screen is the player takes damage                               |
| cache_screen                        | boolean |                                                                           |
| load_screen_immediately             | boolean |                                                                           |
| gamepad_cursor                      | boolean |                                                                           |
| gamepad_cursor_deflection_mode      | boolean |                                                                           |
| should_be_skipped_during_automation | boolean |                                                                           |

### Selection Wheel

|       Property Name       |   Type   | Description |
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
|            Property Name            |  Type   |                                        Description                                         |
| ----------------------------------- | :-----: | ------------------------------------------------------------------------------------------ |
| tts_name                            | string  |                                                                                            |
| tts_control_header                  | string  |                                                                                            |
| tts_section_header                  | string  |                                                                                            |
| tts_control_type_order_priority     | integer |                                                                                            |
| tts_index_priority                  | integer |                                                                                            |
| tts_toggle_on                       | string  | Use by the `toggle` type                                                                   |
| tts_toggle_off                      | string  | Use by the `toggle` type                                                                   |
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
| use_priority                        | boolean | If the `priority` property will be use to determine the TTS priority of each child control |
| priority                            | boolean | Order/index of priority that the element has on TTS                                        |

### Tab (Legacy)

| Property Name |  Type  | Default Value |                        Description                        |
| ------------- | :----: | :-----------: | --------------------------------------------------------- |
| tab_index     |  int   |               | ID of tab in its group                                    |
| tab_group     |  int   |               | ID of the group the tab belongs to                        |
| tab_control   | string |               | Name of the control that will show when the tab is active |

### Carousel Text (Legacy)

| Property Name |         Type         | Default Value |           Description           |
| ------------- | :------------------: | :-----------: | ------------------------------- |
| always_rotate |       boolean        |               |                                 |
| rotate_speed  |        number        |               |                                 |
| hover_color   | Vector [r, g, b, a], |               | `color` when element is hovered |
| hover_alpha   |        float         |               | `alpha` when element is hovered |
| pressed_color | Vector [r, g, b, a], |               | `color` when element is pressed |
| pressed_alpha |        float         |               | `alpha` when element is pressed |

## Properties Additional Information

### Anchor Properties

Anchors allows the elements to align to a certain point where position, size, scale, animations, etc will take as the point for transformation.
In JSON UI, there's two properties `anchor_from` and `anchor_to` that together achieve this.

Most people use them by giving them the same value:

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
	src="/assets/images/json-ui/json-ui-documentation/anchor_same_value.png"
	alt="Anchors with the same value"
	pixelated="true"
	width=782
/>

However, what happens when they have different values? Let's look at happens when `anchor_from: center` and `anchor_from: top_left`. It's the best example to demonstrate what's really happening.

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
	src="/assets/images/json-ui/json-ui-documentation/anchor_center_top_left.png"
	alt="Anchor from center to top left"
	pixelated="true"
	width=782
/>

The top left point of the element is in the center point of the parent element.

Another example:

<WikiImage
	src="/assets/images/json-ui/json-ui-documentation/anchor_ce_rm_tm_tl.png"
	alt="Anchor from center to right middle and anchor from top middle to top left"
	pixelated="true"
	width=782
/>

The blue box top left point is in the top middle point of the parent element. As for the black box, the right midde point is in the center of the parent.


Basically `anchor_to` is the anchor point in the element that will be attached to the `anchor_from` in  the parent element.

### Variables Property

| Name       |  Type  | Description |
| ---------- | :----: | ----------- |
| `requires` | string | condition   |

<br>

If you only have one variable to use, you should just use `"variables": {}`

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

If you have multiple variables use `"variables": [{}]`

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

|                Name                |        Type         |                     Requirements                     |                           Description                           |
| ---------------------------------- | :-----------------: | ---------------------------------------------------- | --------------------------------------------------------------- |
| #filtered_light_multiplier         |        float        | type[custom] <br> renderer[inventory_item_renderer]  |                                                                 |
| #banner_patterns                   |       string        | type[custom] <br> renderer[inventory_item_renderer]  |                                                                 |
| #banner_colors                     |       string        | type[custom] <br> renderer[inventory_item_renderer]  |                                                                 |
| #item_id_aux                       |         int         | type[custom] <br> renderer[inventory_item_renderer]  |                                                                 |
| #item_custom_color                 |         int         | type[custom] <br> renderer[inventory_item_renderer]  |                                                                 |
| #disabled_filter_visible           |       boolean       | type[custom] <br> renderer[inventory_item_renderer]  |                                                                 |
| #item_pickup_time                  |        float        | type[custom] <br> renderer[inventory_item_renderer]  |                                                                 |
| #look_at_cursor                    |       boolean       | type[custom] <br> renderer[hud_player_renderer]      |                                                                 |
| entity_type                        |        enum         | type[custom] <br> renderer[paper_doll_renderer]      | Possible values: <br> `player` <br> `npc`                       |
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
| #anchored_offset_value_x           |       number        | `use_anchored_offset` property                       |                                                                 |
| #anchored_offset_value_y           |       number        | `use_anchored_offset` property                       |                                                                 |
| #size_binding_x                    |       number        | `use_anchored_offset` property                       |                                                                 |
| #size_binding_y                    |       number        | `use_anchored_offset` property                       |                                                                 |
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
| reset_group                        |        enum         |                                                      | Possible values: <br> `video` <br> `audio` <br> `accessibility` |
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

## Animations

|  Animation Property Name  |     Type      |                                                                                                                                                                                                                                                                                       Description                                                                                                                                                                                                                                                                                        |
| ------------------------- | :-----------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| anim_type                 |     enum      | Possible values: <br> `alpha` <br> `clip` <br> `color` <br> `flip_book` <br> `offset` <br> `size` <br> `uv` <br> `wait` <br> `aseprite_flip_book`                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| duration                  |    number     |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| next                      |    string     |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| destroy_at_end            |    string     |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| play_event                |    string     |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| end_event                 |    string     |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| start_event               |    string     |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| reset_event               |    string     |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| easing                    |     enum      | Possible values: <br> `linear` <br> `spring` <br> `in_quad` <br> `out_quad` <br> `in_out_quad` <br> `in_cubic` <br> `out_cubic` <br> `in_out_cubic` <br> `in_quart` <br> `out_quart` <br> `in_out_quart` <br> `in_quint` <br> `out_quint` <br> `in_out_quint` <br> `in_sine` <br> `out_sine` <br> `in_out_sine` <br> `in_expo` <br> `out_expo` <br> `in_out_expo` <br> `in_circ` <br> `out_circ` <br> `in_out_circ` <br> `in_bounce` <br> `out_bounce` <br> `in_out_bounce` <br> `in_back` <br> `out_back` <br> `in_out_back` <br> `in_elastic` <br> `out_elastic` <br> `in_out_elastic` |
| from                      |               |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| to                        |               |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| initial_uv                | Vector [u, v] |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| fps                       |      int      | Frames per second                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| frame_count               |      int      |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| frame_step                |    number     |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| reversible                |    boolean    |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| resettable                |    boolean    |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| scale_from_starting_alpha |    boolean    |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| activated                 |    boolean    |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |

For more information about the `aseprite_flip_book` animation type, please see our page on [Aseprite Animations](/json-ui/aseprite-animations)

## Global Variables

|                Variable                |                                           Note                                            |
| -------------------------------------- | ----------------------------------------------------------------------------------------- |
| $store_disabled                        |                                                                                           |
| $game_pad                              | There's a controller connected to the device                                              |
| $mouse                                 | There's a mouse connected to the device                                                   |
| $touch                                 |                                                                                           |
| $trial                                 | It's in the trial version of the game                                                     |
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
| $desktop_screen                        | If the classic UI is selected                                                             |
| $pocket_screen                         | If the pocket UI is selected                                                              |
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
| $is_pregame                            | If it's a out-game screen. It's in-game when you are playing in a world, server or realms |
| $is_win10_arm                          |                                                                                           |
| $vibration_supported                   |                                                                                           |
| $is_mobile_vr                          |                                                                                           |
| $is_xboxlive_enabled                   |                                                                                           |
| $device_must_be_removed_for_xbl_signin |                                                                                           |
| $is_publish                            | It's public and not a developer version                                                   |
| $is_desktop                            |                                                                                           |
| $is_ps4                                |                                                                                           |
| $is_on_3p_server                       |                                                                                           |
| $ignore_3rd_party_servers              |                                                                                           |
| $is_berwick                            |                                                                                           |

## Hardcoded Hyperlinks

`#hyperlink` doesn't allow custom urls. These are the ones that will work:

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

## Hardcoded Button IDs

Some of them only work in specific screens.

### Buttons IDs:

-   `button.menu_exit`
-   `button.menu_cancel` (`Escape` key or Controller `B`)
-   `button.menu_inventory_cancel` (`Open Inventory` keybinding)
-   `button.menu_ok` (`Enter` key)
-   `button.menu_select` (Mouse click)
-   `button.controller_select` (Controller `X`)
-   `button.menu_secondary_select`
-   `button.controller_secondary_select`
-   `button.controller_secondary_select_left`
-   `button.controller_secondary_select_right` (Controller `R3`)
-   `button.controller_start`
-   `button.menu_up` (`Arrow Up` key)
-   `button.menu_down` (`Arrow Down` key)
-   `button.menu_left` (`Arrow Left` key)
-   `button.menu_right` (`Arrow Right` key)
-   `button.menu_tab_left` (`Menu Tab Left` keybinding or Controller `Left Bumper`)
-   `button.menu_tab_right` (`Menu Tab Right` keybinding or Controller `Right Bumper`)
-   `button.menu_alternate_tab_left`
-   `button.menu_alternate_tab_right`
-   `button.menu_autocomplete` (Uses `Tab` key)
-   `button.menu_autocomplete_back`
-   `button.controller_autocomplete`
-   `button.controller_autocomplete_back`
-   `button.menu_textedit_up` (Uses `Arrow Up` key)
-   `button.menu_textedit_down` (Uses `Arrow Down` key)
-   `button.controller_textedit_up`
-   `button.controller_textedit_down`
-   `button.menu_auto_place`
-   `button.menu_inventory_drop` (`Drop Item` keybinding)
-   `button.menu_inventory_drop_all` (`Drop Item` + `Control` key)
-   `button.menu_clear`
-   `button.chat` (`Open Chat` keybinding)
-   `button.mobeffects` (`Mob Effects` keybinding)
-   `key.emote` (`Emote` keybinding)
-   `button.slot1` (Emote Wheel) (`1` key)
-   `button.slot2` (Emote Wheel) (`2` key)
-   `button.slot3` (Emote Wheel) (`3` key)
-   `button.slot4` (Emote Wheel) (`4` key)
-   `button.slot5` (Emote Wheel) (`5` key)
-   `button.slot6` (Emote Wheel) (`6` key)
-   `button.inventory_right` (`Mouse Wheel Up`)
-   `button.inventory_left` (`Mouse Wheel Down`)
-   `button.scoreboard`
-   `button.hide_gui` (`F1` key)
-   `button.hide_tooltips`
-   `button.hide_paperdoll`
-   `button.slot0`
-   `button.slot1` (`1` key)
-   `button.slot2` (`2` key)
-   `button.slot3` (`3` key)
-   `button.slot4` (`4` key)
-   `button.slot5` (`5` key)
-   `button.slot6` (`6` key)
-   `button.slot7` (`7` key)
-   `button.slot8` (`8` key)
-   `button.slot9` (`9` key)
-   `button.menu_vr_realign`
-   `any` (literally the name of it)

### Specific Screen Button IDs:

#### Settings (`ui/settings_screen.json`)

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

#### Book (`ui/book_screen.json`)

-   `button.prev_page`
-   `button.next_page`
-   `button.book_exit`

#### Chat (`ui/chat_screen.json`)

-   `button.send`
-   `button.chat_autocomplete`
-   `button.chat_autocomplete_back`
-   `button.chat_previous_message`
-   `button.chat_next_message`
-   `button.chat_menu_cancel`

#### Command Block (`ui/command_block_screen.json`)

-   `command_block.input_minimize`
-   `button.chat_autocomplete`
-   `button.chat_autocomplete_back`

#### Comment (`ui/comment_screen.json`)

-   `button.comment_options_close`
-   `button.comment_feed_options_close`
-   `button.close_comments`
-   `button.comment_next_button`
-   `button.comment_prev_button`

#### Credits (`ui/credits_screen.json`)

-   `button.show_skip`

#### Death Menu (`ui/death_screen.json`)

-   `button.respawn_button`
-   `button.main_menu_button`

#### Emote Wheel (`ui/emote_screen_wheel.json`)

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

#### Feed (`ui/feed_screen.json`)

-   `button.feed_image`
-   `button.newpost`
-   `button.add_screenshot`
-   `button.feed_comment`
-   `button.feed_prev_button`
-   `button.feed_next_button`
-   `button.feed_new_post_close`
-   `button.feed_options_close`
-   `button.close_feed`

#### Game Menu (`ui/pause_screen.json`)

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

#### In Bed (`ui/in_bed_screen.json`)

-   `button.wake_up_button`

#### Invite (`ui/invite_screen.json`)

-   `button.add_friend`
-   `button.add_member`
-   `button.send_invites`

#### Manage Feed (`ui/manage_feed_screen.json`)

-   `button.manage_feed_prev_button`
-   `button.manage_feed_next_button`
-   `button.manage_feed_ignore`
-   `button.manage_feed_delete`
-   `button.close_manage_feed`

#### Anvil (`ui/anvil_screen.json`)

-   `button.anvil_take_all_place_all`
-   `button.anvil_coalesce_stack`

#### Cartography Table (`ui/cartography_screen.json`)

-   `button.cartography_result_take_all_place_all`

#### Enchanting Table (`ui/enchanting_table_screen.json`)

-   `button.enchant`

#### Grindstone (`ui/grindstone_screen.json`)

-   `button.grindstone_take_all_place_all`
-   `button.grindstone_coalesce_stack`

#### Loom (`ui/loom_screen.json`)

-   `button.loom_result_take_all_place_all`
-   `button.pattern_select`

#### Villager Trade (`ui/trade_screen.json`)

- `button.cycle_recipe_left`
- `button.cycle_recipe_right`
- `button.trade_take_all_place_all`
- `button.trade_take_half_place_one`
- `button.trade_coalesce_stack`

#### Play (`ui/play_screen.json`)

- `button.menu_sign_in_to_view_realms`
- `button.menu_realms_world_item_edit`
- `button.menu_realms_feed`
- `button.menu_realms_world_item_remove`
- `button.menu_network_world_item`
- `button.menu_network_server_world_edit`
- `button.connect_to_third_party_server`
- `button.view_third_party_server_offers`
- `button.description_read_toggle`
- `button.news_read_toggle`
- `button.local_world_upload`
- `button.menu_start_local_world`
- `button.convert_legacy_world`
- `button.menu_local_world_item_edit`
- `button.menu_legacy_world_item_delete`
- `button.import_beta_retail_local_world`
- `button.import_beta_retail_legacy_world`
- `button.menu_network_add_friend`
- `button.menu_network_join_by_code`
- `button.menu_quick_play`
- `button.new_world_upload`
- `button.menu_local_world_create`
- `button.create_on_realms_button`
- `button.archived_world_upload`
- `button.menu_import_level`
- `button.menu_sync_legacy_worlds`
- `button.realms_warning_more_info`
- `button.menu_realm_world_trial`
- `button.menu_realm_nintendo_first_realm_purchase_button`
- `button.no_local_worlds_launch_help`
- `button.menu_network_join_by_code_popup_join`
- `button.join_server_anyway`
- `button.cancel_join_server`

### Others

-   `button.try_menu_exit`
-   `button.close_dialog`
-   `button.menu_play`
-   `$play_button_target` (**hardcoded**)
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

## Hardcoded Collection Names

All of them only in specific screens.

### Screen specific:

#### Book (`ui/book_screen.json`)

-   `book_pages`
-   `pick_collection`

#### Bundle Purchase Warning (`ui/bundle_purchase_warning_screen.json`)

-   `owned_list`
-   `unowned_list`

#### Chat (`ui/chat_screen.json`)

-   `auto_complete`
-   `font_colors`
-   `host_main_collection`
-   `players_collection`
-   `host_teleport_collection`
-   `host_time_collection`
-   `host_weather_collection`

#### Choose Realm (`ui/choose_realm_screen.json`)

-   `realms_collection`

#### Coin Purchase (`ui/coin_purchase_screen.json`)

-   `coin_purchase_grid`

#### Comment (`ui/comment_screen.json`)

-   `comment_collection`

#### Content Log History (`ui/content_log_history_screen.json`)

-   `content_log_message`

#### Create World Upsell (`ui/create_world_upsell_screen.json`)

-   `world_list`
-   `realm_list`

#### Custom Templates (`ui/custom_templates_screen.json`)

-   `templates_collection`

#### Feed (`ui/feed_screen.json`)

-   `feed_collection`

#### HUD (`ui/hud_screen.json`)

-   `boss_bars`
-   `chat_text_grid`
-   `hotbar_items`
-   `scoreboard_players`
-   `scoreboard_scores`
-   `left_helper_collection`
-   `right_helper_collection`

#### Invite (`ui/invite_screen.json`)

-   `online_platform_friends`
-   `online_linked_account_friends`
-   `online_xbox_live_friends`
-   `offline_platform_friends`
-   `offline_linked_account_friends`
-   `offline_xbox_live_friends`

#### Manage Feed (`ui/manage_feed_screen.json`)

-   `manage_feed_collection`

#### Manifest Validation (`manifest_validation_screen.json`)

-   `pack_errors`

#### Mob Effects (`ui/mob_effects_screen.json`)

-   `mob_effects_collection`

#### Game Menu (`ui/pause_screen.json`)

-   `players_collection`

#### PDP (`ui/pdp_screen.json`)

-   `factory_collection`
-   `ratings_star_collection`

#### Permissions (`ui/permissions_screen.json`)

-   `players_collection` - it's also used in `pause_screen.json`
-   `permissions_collection`

#### Persona (`ui/persona_screen.json`)

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

#### Play (`ui/play_screen.json`)

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

#### Portfolio (`ui/portfolio_screen.json`)

-   `photos`

#### Progress (`ui/progress_screen.json`)

-   `required_resourcepacks`
-   `optional_resourcepacks`

#### Realms Pending Invitations (`ui/realms_pending_invitations_screen.json`)

-   `pending_invites_collection`

#### Realms Settings (`ui/realms_settings_screen.json`)

-   `additional_realms_subscriptions_collection`
-   `realms_branch_collection`
-   `realms_backup_collection`
-   `members_collection`
-   `invited_friends_collection`
-   `uninvited_friends_collection`
-   `blocked_players_collection`

#### Screenshot Picker (`ui/screenshot_picker_screen.json`)

-   `screenshotpicker_collection`

#### Server Form (`ui/server_form.json`)

-   `custom_form`
-   `form_buttons`
-   `custom_dropdown`

#### Settings (`ui/settings_screen.json`)

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

#### Structure Block (`ui/structure_editor_screen.json`)

-   `save_size_grid`
-   `save_offset_grid`
-   `load_offset_grid`
-   `export_size_grid`
-   `export_offset_grid`

#### Seed Picker (`ui/ugc_viewer_screen.json`)

-   `ugc_items`

#### World Templates (`ui/world_templates_screen.json`)

-   `world_templates`
-   `realms_plus_templates`
-   `custom_world_templates`
-   `#suggested_offers_collection`

#### Anvil (`ui/anvil_screen.json`)

-   `anvil_input_items`
-   `anvil_material_items`
-   `anvil_result_items`

#### Beacon (`ui/beacon_screen.json`)

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

#### Brewing Stand (`ui/brewing_stand_screen.json`)

-   `brewing_fuel_item`
-   `brewing_input_item`
-   `brewing_result_items`

#### Cartography Table (`ui/cartography_screen.json`)

-   `cartography_input_items`
-   `cartography_additional_items`
-   `cartography_result_items`

#### Enchanting Table (`ui/enchanting_table_screen.json`)

-   `enchanting_input_items`
-   `enchanting_lapis_items`
-   `#enchant_buttons`

#### Furnace (`ui/furnace_screen.json`)

-   `furnace_ingredient_items`
-   `furnace_fuel_items`
-   `furnace_output_items`

#### Gridstone (`ui/grindstone_screen.json`)

-   `grindstone_input_items`
-   `grindstone_additional_items`
-   `grindstone_result_items`

#### Horse (`ui/horse_screen.json`)

-   `horse_equip_items`

#### Inventory (`ui/inventory_screen.json` and `ui/inventory_screen_pocket.json`)

-   `armor_items`
-   `offhand_items`
-   `crafting_input_items`
-   `crafting_output_items`
-   `recipe_book`

#### Loom (`ui/loom_screen.json`)

-   `loom_input_items`
-   `loom_dye_items`
-   `loom_material_items`
-   `loom_result_items`
-   `patterns`

#### Smithing Table (`ui/smithing_table_screen.json`)

-   `smithing_table_input_items`
-   `smithing_table_material_items`
-   `smithing_table_result_items`

#### Stonecutter (`ui/stonecutter_screen.json`)

-   `stonecutter_input_items`
-   `stonecutter_result_items`
-   `stones`

#### Villager Trade 2 (`ui/trade_2_screen.json`)

-   `trade2_ingredient1_item`
-   `trade2_ingredient2_item`
-   `trade2_result_item`
-   `trade_item_1`
-   `trade_item_2`
-   `sell_item`
-   `trades`
-   `trade_tiers`

## Hardcoded Binding Names

Some of them only work in specific screens.

### Screen specific:

#### Account Transfer Error (`ui/account_transfer_error_screen.json`)

-   `#error_title_text`
-   `#error_number_label`
-   `#error_number`
-   `#correlation_id_label`
-   `#correlation_id`

#### Add External Server (`ui/add_external_server_screen.json`)

-   `#play_button_enabled`
-   `#play_button_disabled`
-   `#save_button_enabled`
-   `#save_button_disabled`

#### Adhoc In Progress (`ui/adhoc_in_progress_screen.json`)

-   `#adhoc_title`

#### Authentication (`ui/authentication_screen.json`)

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

#### Book (`ui/book_screen.json`)

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

#### Braze (`ui/braze_screen.json`)

-   `#image_texture`

#### Bundle Purchase Warning (`ui/bundle_purchase_warning_screen.json`)

-   `#banner_visible`
-   `#offer_title`
-   `#keyart_path`
-   `#keyart_texture_file_system`

#### Chat (`ui/chat_screen.json`)

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

#### Choose Realm (`ui/choose_realm_screen.json`)

-   `#realms_grid_dimension`
-   `#world_button_focus_identifier`
-   `#ten_player_button_visible`
-   `#two_player_button_visible`
-   `#realms_world_player_count`
-   `#realms_game_online`
-   `#realms_game_unavailable`
-   `#realms_game_offline`

#### Coin Purchase (`ui/coin_purchase_screen.json`)

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

#### Command Block (`ui/command_block_screen.json`)

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

#### Comment (`ui/comment_screen.json`)

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

#### Confirm MSA Unlink (`ui/confirm_msa_unlink_screen.json`)

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

#### Content Log History (`ui/content_log_history_screen.json`)

-   `#content_log_text`
-   `#messages_size`

#### Create World Upsell (`ui/create_world_upsell.json`)

-   `#realm_button_text`
-   `#realm_trial_available`

#### Anvil (`ui/anvil_screen.json`)

-   `#cost_text`
-   `#cost_text_green`
-   `#cost_text_red`

#### Beacon (`ui/beacon_screen.json`)

-   `#supports_netherite`
-   `#extra_image_selection`

#### Brewing Stand (`ui/brewing_stand_screen.json`)

-   `#empty_bottle_image_visible`
-   `#empty_fuel_image_visible`
-   `#brewing_bubbles_ratio`
-   `#brewing_fuel_ratio`
-   `#brewing_arrow_ratio`

#### Cartography Table (`ui/cartography_screen.json`)

-   `#is_none_mode`
-   `#is_clone_mode`
-   `#is_rename_mode`
-   `#is_basic_map_mode`
-   `#is_locator_map_mode`
-   `#is_extend_mode`
-   `#is_locked_mode`
-   `#output_description`

#### Enchanting Table (`ui/enchanting_table_screen.json`)

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

#### Furnace (`ui/furnace_screen.json`)

-   `#furnace_arrow_ratio`
-   `#furnace_flame_ratio`
-   `#output_name`

#### Horse (`ui/horse_screen.json`)

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

#### Loom (`ui/loom_screen.json`)

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

#### Stonecutter (`ui/stonecutter_screen.json`)

-   `#stone_cell_background_texture`
-   `#container_cell_background_texture`
-   `#item_stack_count`
-   `#stone_selector_total_items`
-   `#has_input_item`
-   `#is_right_tab_stonecutter`
-   `#is_left_tab_stones`

#### Death (`ui/death_screen.json`)

- `#death_reason_text`
- `#respawn_visible`
- `#quit_enabled`
- `#quit_visible`
- `#buttons_and_deathmessage_visible`

#### Villager Trade2 (`ui/trade2_screen.json`)

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

### Value depends on the screen it is in:

-   `#title_text`
-   `#body_text`
-   `#hover_text`
-   `#cross_out_icon`
-   `#is_left_tab_inventory`
-   `#selected_hover_text`

### Others:

-   `#tts_dialog_body`
-   `#button_enabled`
-   `#using_touch`
-   `#close_button_visible`

## Settings

### Sliders

|           Name            |           Slider Name           |        Value Binding Name        | TTS Value (`tts_value_changed`) |                  Slider Text                  |           Enabled Binding Name           |
| ------------------------- | ------------------------------- | -------------------------------- | ------------------------------- | --------------------------------------------- | ---------------------------------------- |
| Brightness                | `gamma`                         | `#gamma`                         | `#gamma_text_value`             | `#gamma_slider_label`                         | `#gamma_enabled`                         |
| Brightness (VR)           | `vr_gamma`                      | `#vr_gamma`                      | `#vr_gamma_text_value`          | `#vr_gamma_slider_label`                      | `#vr_gamma_enabled`                      |
| HUD Opacity               | `interface_opacity`             | `#interface_opacity`             | `#interface_opacity_text_value` | `#interface_opacity_slider_label`             | `#interface_opacity_enabled`             |
| HUD Opacity (Splitscreen) | `splitscreen_interface_opacity` | `#splitscreen_interface_opacity` | `#interface_opacity_text_value` | `#splitscreen_interface_opacity_slider_label` | `#splitscreen_interface_opacity_enabled` |
| Field Of View             | `field_of_view`                 | `#field_of_view`                 | `#field_of_view_text_value`     | `#field_of_view_slider_label`                 | `#field_of_view_enabled`                 |

### Toggles

|                  Name                   |              Toggle Name              |           State Binding Name           |              Enabled Binding Name              |
| --------------------------------------- | ------------------------------------- | -------------------------------------- | ---------------------------------------------- |
| Invert Y Axis (Mouse)                   | `keyboard_mouse_invert_y_axis`        | `#keyboard_mouse_invert_y_axis`        | `#keyboard_mouse_invert_y_axis_enabled`        |
| Auto Jump (Mouse)                       | `keyboard_mouse_autojump`             | `#keyboard_mouse_autojump`             | `#keyboard_mouse_autojump_enabled`             |
| Show Full Keyboard Options              | `keyboard_show_full_keyboard_options` | `#keyboard_show_full_keyboard_options` | `#keyboard_show_full_keyboard_options_enabled` |
| Hide Keyboard Tooltips                  | `hide_keyboard_tooltips`              | `#hide_keyboard_tooltips`              | `#hide_keyboard_tooltips_enabled`              |
| Content File Log                        | `content_log_file`                    | `#content_log_file`                    | `#content_log_file_enabled`                    |
| Content Gui Log                         | `content_log_gui`                     | `#content_log_gui`                     | `#content_log_gui_enabled`                     |
| Use SSO                                 | `ad_use_single_sign_on`               | `#ad_use_single_sign_on`               |                                                |
| Auto Update OFF                         | `#auto_update_mode_off`               | `#auto_update_mode_off`                |                                                |
| Auto Update ON with Cellular            | `#auto_update_mode_on_with_cellular`  | `#auto_update_mode_on_with_cellular`   |                                                |
| Auto Update on WiFi Only                | `#auto_update_mode_on_wifi_only`      | `#auto_update_mode_on_wifi_only`       |                                                |
| Auto Update Enabled                     | `auto_update_enabled`                 | `#auto_update_enabled`                 |                                                |
| Cross Platform Enabled                  | `crossplatform_toggle`                | `#crossplatform_toggle`                | `#crossplatform_toggle_enabled`                |
| Allow Cellular Data                     | `allow_cellular_data`                 | `#allow_cellular_data`                 | `#allow_cellular_data_enabled`                 |
| Websocket Encryption                    | `websocket_encryption`                | `#websocket_encryption`                | `#websocket_encryption_enabled`                |
| Only Trusted Skins Allowed              | `only_trusted_skins_allowed`          | `#only_trusted_skins_allowed`          | `#only_trusted_skins_allowed_enabled`          |
| Storage Location External               | `#storage_location_radio_external`    | `#storage_location_radio_external`     | `#file_storage_location_enabled`               |
| Storage Location App                    | `#storage_location_radio_package`     | `#storage_location_radio_package`      | `#file_storage_location_enabled`               |
| First Person Perspective                | `#thirdperson_radio_first`            | `#thirdperson_radio_first`             | `#third_person_dropdown_enabled`               |
| Third Person Back Perspective           | `#thirdperson_radio_third_back`       | `#thirdperson_radio_third_back`        | `#third_person_dropdown_enabled`               |
| Third Person Front Perspective          | `#thirdperson_radio_third_front`      | `#thirdperson_radio_third_front`       | `#third_person_dropdown_enabled`               |
| Fullscreen                              | `full_screen`                         | `#full_screen`                         | `#full_screen_enabled`                         |
| Hide Hand                               | `hide_hand`                           | `#hide_hand`                           | `#hide_hand_enabled`                           |
| Hide Hand (VR)                          | `vr_hide_hand`                        | `#vr_hide_hand`                        | `#vr_hide_hand_enabled`                        |
| Hide Paperdoll                          | `hide_paperdoll`                      | `#hide_paperdoll`                      | `#hide_paperdoll_enabled`                      |
| Hide HUD                                | `hide_hud`                            | `#hide_hud`                            | `#hide_hud_enabled`                            |
| Hide HUD (VR)                           | `vr_hide_hud`                         | `#vr_hide_hud`                         | `#vr_hide_hud_enabled`                         |
| Screen Animations                       | `screen_animations`                   | `#screen_animations`                   | `#screen_animations_enabled`                   |
| Split Screen Horizontally               | `#split_screen_radio_horizontal`      | `#split_screen_radio_horizontal`       | `#split_screen_dropdown_enabled`               |
| Split Screen Vertically                 | `#split_screen_radio_vertical`        | `#split_screen_radio_vertical`         | `#split_screen_dropdown_enabled`               |
| Show Auto Save Icon                     | `show_auto_save_icon`                 | `#show_auto_save_icon`                 | `#show_auto_save_icon_enabled`                 |
| Outline Selection                       | `classic_box_selection`               | `#classic_box_selection`               | `#classic_box_selection_enabled`               |
| Outline Selection (VR)                  | `vr_classic_box_selection`            | `#vr_classic_box_selection`            | `#vr_classic_box_selection_enabled`            |
| Show Players Names Ingame               | `ingame_player_names`                 | `#ingame_player_names`                 | `#ingame_player_names_enabled`                 |
| Show Players Names Ingame (Splitscreen) | `splitscreen_ingame_player_names`     | `#splitscreen_ingame_player_names`     | `#splitscreen_ingame_player_names_enabled`     |
| View Bobbing                            | `view_bobbing`                        | `#view_bobbing`                        | `#view_bobbing_enabled`                        |
| Camera Shake                            | `camera_shake`                        | `#camera_shake`                        | `#camera_shake_enabled`                        |
| Fancy Leaves                            | `transparent_leaves`                  | `#transparent_leaves`                  | `#transparent_leaves_enabled`                  |
| Fancy Leaves (VR)                       | `vr_transparent_leaves`               | `#vr_transparent_leaves`               | `#vr_transparent_leaves_enabled`               |
| Fancy Bubbles                           | `bubble_particles`                    | `#bubble_particles`                    | `#bubble_particles_enabled`                    |
| Render Clouds                           | `render_clouds`                       | `#render_clouds`                       | `#render_clouds_enabled`                       |
| Fancy Clouds                            | `fancy_skies`                         | `#fancy_skies`                         | `#fancy_skies_enabled`                         |
| Smooth Lighting                         | `smooth_lighting`                     | `#smooth_lighting`                     | `#smooth_lighting_enabled`                     |
| Smooth Lighting (VR)                    | `graphics_toggle`                     | `#graphics_toggle`                     | `#graphics_toggle_enabled`                     |
| Graphics                                | `graphics_toggle`                     | `#graphics_toggle`                     | `#graphics_toggle_enabled`                     |
| Field of View                           | `field_of_view_toggle`                | `#field_of_view_toggle`                | `#field_of_view_toggle_enabled`                |
| Classic UI Profile                      | `#ui_profile_radio_classic`           | `#ui_profile_radio_classic`            | `#ui_profile_dropdown_enabled`                 |
| Pocket UI Profile                       | `#ui_profile_radio_pocket`            | `#ui_profile_radio_pocket`             | `#ui_profile_dropdown_enabled`                 |
| Texel Anti-Aliasing                     | `texel_aa`                            | `#texel_aa`                            | `#texel_aa_enabled`                            |
| 3D Rendering (VR)                       | `vr_3d_rendering`                     | `#vr_3d_rendering`                     | `#vr_3d_rendering_enabled`                     |
| Mirror Texture (VR)                     | `vr_mirror_texture`                   | `#vr_mirror_texture`                   | `#vr_mirror_texture_enabled`                   |
| Hand Pointer Visible (VR)               | `vr_hand_pointer`                     | `#vr_hand_pointer`                     | `#vr_hand_pointer_enabled`                     |
| Hands Visible (VR)                      | `vr_hands_visible`                    | `#vr_hands_visible`                    | `#vr_hands_visible_enabled`                    |
| Enable Auto TTS                         | `enable_auto_text_to_speech`          | `#enable_auto_text_to_speech`          | `#enable_auto_text_to_speech_enabled`          |
| Enable UI TTS                           | `enable_ui_text_to_speech`            | `#enable_ui_text_to_speech`            | `#enable_ui_text_to_speech_enabled`            |
| Enable Chat TTS                         | `enable_chat_text_to_speech`          | `#enable_chat_text_to_speech`          | `#enable_chat_text_to_speech_enabled`          |
| Enable Open Chat Message                | `enable_open_chat_message`            | `#enable_open_chat_message`            | `#enable_open_chat_message_enabled`            |
| Camera Shake                            | `camera_shake`                        | `#camera_shake`                        | `#camera_shake_enabled`                        |
| Languages (Collection)                  | `languages`                           | `#language_initial_selected`           |                                                |

## Item ID Aux (`#item_id_aux`)

| Name              |  ID  | Aux Values |
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

#### How to calculate block item aux value:

Aux = ID \* 65536

ID = Aux / 65536
65536 = Aux / ID

Get all Item IDs [here](https://docs.microsoft.com/en-us/minecraft/creator/reference/content/addonsreference/examples/addonitems).
