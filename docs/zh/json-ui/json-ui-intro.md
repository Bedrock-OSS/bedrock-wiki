---
title: JSON UI 入门
category: 通用
nav_order: 1
tags:
    - guide
mentions:
    - sermah
    - KalmeMarq
    - SirLich
    - solvedDev
    - Joelant05
    - GTB3NW
    - stirante
    - MedicalJewel105
    - r4isen1920
    - shanewolf38
    - LeGend077
    - mark-wiemer
    - TheItsNameless
    - ThomasOrs
    - QuazChick
    - Cra-ZGuy
description: JSON UI 入门简介
---

## 简介

:::warning
JSON UI 正在被弃用，取而代之的是 [Ore UI](https://github.com/Mojang/ore-ui)。请注意，任何使用 JSON UI 的附加包在未来几年内都将失效。
与 JSON UI 不同，Ore UI 是硬编码的，无法通过资源包进行修改。
:::

:::tip
本页面概述了 JSON UI 的基础知识。如需更详细的文档，您可以查看 [JSON UI 文档](/zh/json-ui/json-ui-documentation) 页面。
:::

游戏的用户界面是数据驱动的，可以进行修改。它允许我们修改某些用户界面的渲染方式，以及在某种程度上修改其行为。要开始使用，所有原版 UI 文件都存储在 `RP/ui/...` 文件夹中。

JSON UI 可能包含以下文件：

### 系统文件

这些是 JSON UI 中使用的内置文件：

-   `_global_variables.json` - 用于表示后续使用的默认变量
-   `_ui_defs.json` - 用于引用 UI 中使用的文件

### 屏幕

这些是包含用于渲染屏幕的元素的文件：

-   `hud_screen.json` - 显示游戏主屏幕，渲染游戏内功能如快捷栏
-   `inventory_screen.json` - 显示玩家物品栏屏幕
-   等等。

### 模板

这些文件存储可供其他命名空间使用的 JSON UI 元素，例如屏幕：

-   `ui_common.json` - 包含按钮等元素，这些元素在大多数其他命名空间中被引用，例如设置屏幕的按钮
-   `ui_template_*.json` - 包含组织整齐的元素，可供其他命名空间使用

## UI 定义

`_ui_defs.json` 文件以数组形式引用所有 JSON UI 文件。

您可以创建新文件，例如我们添加 `RP/ui/button.json` 和 `RP/my_ui/main_menu.json`。在文件中，我们将它们列出如下：

<CodeHeader>RP/ui/_ui_defs.json</CodeHeader>

```json
{
    "ui_defs": ["ui/button.json", "my_ui/main_menu.json"]
}
```

-   请确保追加您引用的 UI 的完整文件路径，包括文件扩展名（例如 `*.json`），从资源包根目录开始！
-   只需引用您在附加包中添加的新 UI 文件。您不需要引用原版文件或其他第三方的 JSON UI 文件，因为它会自动与其他包合并。
-   您可以使用 `RP/ui/...` 文件夹之外的自定义文件路径，或者引用 `RP/ui/...` 文件夹内子文件夹中的文件。
-   只要文件内容有效且用 JSON 编写，您就可以附加除 `*.json` 之外的自定义文件扩展名。

## 全局变量

我们可以在 `_global_variables.json` 文件中表示一个变量 `"$info_text_color"` 及其值 `[0.8, 0.8, 0.8]`，如下所示：

<CodeHeader>RP/ui/_global_variables.json</CodeHeader>

```json
{
    "$info_text_color": [0.8, 0.8, 0.8]
}
```

然后，其他 JSON UI 文件中的元素可以引用此变量以供后续使用：

<CodeHeader>vanilla/my_ui/file1.json</CodeHeader>

```json
{
  "some_info": {
    ...
    "text": "Hey",
    "color": "$info_text_color"
  }
}
```

<CodeHeader>vanilla/my_ui/file2.json</CodeHeader>

```json
{
  "info": {
    ...
    "text": "Information",
    "color": "$info_text_color"
  }
}
```

-   您可以在 `_global_variables.json` 文件中添加更多变量及其值，用逗号分隔。
-   存储在此文件中的变量是常量且单向的。因此，您无法在一个命名空间中修改默认变量然后供其他命名空间使用。

## 命名空间

命名空间是 UI 文件的标识符。它们用于跨所有其他文件访问某些文件中的元素。添加新命名空间时，它必须具有唯一的名称。

例如，我们有一个在命名空间 `one` 中的元素 `foobar`：

<CodeHeader>vanilla/ui/file_a.json</CodeHeader>

```json
{
  "namespace": "one",

  "foobar": {...}
}
```

然后我们可以将上述相同元素引用到不同的命名空间 `two` 中：

<CodeHeader>vanilla/ui/file_b.json</CodeHeader>

```json
{
  "namespace": "two",

  "fizzbuzz@one.foobar": {...}
}
```

引用不同命名空间中的元素时，必须使用以下格式：

```json
"[元素名称]@[命名空间引用].[元素名称引用]"
```

## 屏幕

屏幕文件包含在适当情况下调用的用户界面，例如 `inventory_screen.json` 文件用于渲染玩家物品栏屏幕。这些文件包含游戏直接访问数据的根元素。

屏幕的特殊之处在于它只能访问数据，而其他屏幕不能。

## 元素

JSON UI 元素是 JSON UI 中的基本数据形式。元素必须为每个命名空间具有唯一的名称，以避免与具有相同名称但功能不同的其他元素发生冲突。

这里的元素 `type` 是 `label`，因此在调用时将呈现文本 `Hello World`：

<CodeHeader>vanilla/ui/example_file.json</CodeHeader>

```json
{
    "test_element": {
        "type": "label",
        "text": "Hello World"
    }
}
```

### 类型

以下是一些元素类型，即 `type` 属性的可能值：

-   `label` - 用于创建文本对象
-   `image` - 用于渲染来自文件路径的图像
-   `button` - 用于创建交互式和可点击的元素
-   `panel` - 一个空容器，您可以存储所有可能相互重叠的其他元素
-   `stack_panel` - 一个空容器，您可以存储所有不相互重叠的其他元素
-   `grid` - 使用另一个元素作为模板，然后将其重复渲染为多行多列
-   `factory` - 基于另一个元素渲染元素，能够调用硬编码值和变量
-   `custom` - 与另一个属性 `renderer` 配对，渲染硬编码的 JSON UI 元素
-   `screen` - 由游戏直接调用的元素，通常是根面板元素

## 动画

当使用 `anim_type` 属性代替 `type` 属性时，您可以创建动画来为其他元素设置动画。

然后可以在其他非动画元素类型（如 `label` 和 `panel`）上引用动画元素。

<CodeHeader>vanilla/ui/example_file.json</CodeHeader>

```json
{
  "namespace": "example_nm",

  "anim_size": {
    "anim_type": "size",
    "easing": "linear",
    "from": [ "100%", 27 ],
    "to": [ "100% + 3px", 30 ],
    "duration": 1.25
  },

  "anim_alpha": {
    "anim_type": "alpha",
    "easing": "linear",
    "from": 1,
    "to": 0.5,
    "duration": 2
  },

  "test_animated_element": {
    ...
    "anims": [
      "@example_nm.anim_size",
      "@example_nm.anim_alpha"
    ]
  }
}
```

### 类型

以下是元素类型列表，即 `anim_type` 属性的可能值：

-   `alpha` - 接受浮点数，为元素的不透明度设置动画
-   `offset` - 接受数组，根据其锚点为元素的位置设置动画
-   `size` - 接受数组，为 (宽度、高度) 的尺寸设置动画
-   `flip_book` - 接受整数，为翻书纹理或逐帧的图像设置动画
-   `uv` - 接受数组，根据 UV 纹理为图像设置动画
-   `color` - 接受从 0.0 到 1.0 的浮点 RGB 值，为元素颜色设置动画
-   `wait` - 接受数值，用于等待/停留目的
-   `aseprite_flip_book` - 类似于 `flip_book` 动画，使用精灵图。更多信息见[此处](/zh/json-ui/aseprite-animations)
-   `clip`

## 使用运算符

您可以在 JSON UI 中使用运算符、`$variables` 和 `#bindings`，并将其应用到常见属性如 `size` 和 `offset`。以下是可以使用的属性列表：

| 运算符名称       | 运算符 | 示例                                                                          |
| -------------------- | -------- | ----------------------------------------------------------------------------- |
| 加法              | +        | `"100% + 420px"` `($text + ' my')` `($index + 2)` `('#' + $bdg_nm + '_name')` |
| 减法              | -        | `"100% - 69px"` `($text - ' my')` `($index - 13)`                             |
| 乘法              | \*       | `($var * 9)` `(#value * 5)`                                                   |
| 除法              | /        | `($var / 12)` `(#value / 2)`                                                  |
| 等于              | =        | `($var = 12)` `($var = 'this_text')` `(#name = 'Wither')`                     |
| 大于              | >        | `(#value > 13)`                                                               |
| 小于              | <        | `($var < 4)`                                                                  |
| 大于或等于        | > 或 =   | `(#value > 2 or #value = 2)`                                                  |
| 小于或等于        | < 或 =   | `(#value < 2 or #value = 2)`                                                  |
| 逻辑与            | and      | `($is_school and $is_open)`                                                   |
| 逻辑或             | or       | `($is_cool or $is_awesome)`                                                   |
| 逻辑非            | not      | `(not #name)` `(not (#name = 'text'))` `(not $name)`                          |

## 变量

变量不仅限于 `_global_variables.json` 文件。它们也可以在其他命名空间内直接定义和使用，以将数据从一个元素传递到另一个元素。

### 定义变量

在每个字符串开头添加符号 `$` 来表示它是一个变量。变量可以存储整数、浮点数、布尔值、字符串和数组。

<CodeHeader>vanilla/ui/example_file.json</CodeHeader>

```json
{
  "test_element": {
    ...
    // 定义变量
    "$array_variable": [ 10, 10 ],
    "$string_variable": "foobar",
    "$float_variable": 1.0,
    "$string_variable2": "my_button.template_button",

    // 使用变量
    "size": "$array_variable",
    "text": "$string_variable",
    "alpha": "$float_variable",

    // 您还可以使用变量来引用另一个元素作为子元素
    "controls": [
      { "foobar@$string_variable2": {} }
    ]
  }
}
```

### 派生变量

您也可以从另一个元素派生变量，如下所示：

<CodeHeader>vanilla/ui/example_file.json</CodeHeader>

```json
{
  "foobar": {
    ...
    "$cool_variable": 1,
    "$rad_variable": false
  },

  // 元素 "fizzbuzz" 继承 "foobar"
  // 并将 `$cool_variable` 的值替换为 2
  // 而 `$rad_variable` 保持不变。
  "fizzbuzz@foobar": {
    "$cool_variable": 2
  }
}
```

派生元素的任何属性更改时都将被完全覆盖。

## 绑定

绑定用于将硬编码值绑定到元素并将其用于处理元素。以下是使用硬编码文本的标签示例：

`text` 属性值是 `#hardtext`。通过使用 `bindings`，我可以获取硬编码变量 `#hardtext` 的值，以便 `text` 属性可以使用它。
这里是将 `#hardtext` 值直接分配给 `text` 属性。

<CodeHeader>vanilla/ui/example_file.json</CodeHeader>

```json
{
    "label": {
        "type": "label",
        "text": "#hardtext",
        "bindings": [
            {
                "binding_name": "#hardtext"
            }
        ]
    }
}
```

或者，有时它可能看起来像这样：

<CodeHeader>vanilla/ui/example_file.json</CodeHeader>

```json
{
    "label": {
        "type": "label",
        "text": "#text",
        "bindings": [
            {
                "binding_name": "#hardtext",
                "binding_name_override": "#text"
            }
        ]
    }
}
```

在这种情况下，`#hardtext` 值被分配给 `#text` 绑定属性名称，然后该值将被分配给 `text` 属性。

这在 `visible` 和 `enabled` 属性中很常见。以下是同时包含两者的示例：

<CodeHeader></CodeHeader>

```json
{
    "send_button": {
        "bindings": [
            {
                "binding_name": "#using_touch",
                "binding_name_override": "#visible"
            }
        ]
    },

    "play_button": {
        "bindings": [
            {
                "binding_name": "#play_button_enabled",
                "binding_name_override": "#enabled"
            }
        ]
    }
}
```

在这种情况下，`#using_touch` 和 `#play_button_enabled` 存储布尔值。如果您在触屏设备上玩，`#using_touch` 将为 `true`，否则为 `false`。`#play_button_enabled` 用于“添加外部服务器”屏幕。因此，在这种情况下，如果所有文本字段（`服务器名称`、`服务器 IP` 和 `服务器端口`）内部都有文本，它将为 `true`。

因此，`#using_touch` 值将覆盖 `#visible` 绑定属性值，在这种情况下，它也是一个属性（`#visible` 在 `property_bag` 中使用，与将 `visible` 设置为某个值相同）。
而 `#play_button_enabled` 将覆盖 `#enabled` 绑定属性值，然后将其值设置到 `enabled` 属性。

假设您想要在选中/勾选特定开关时显示包含一些内容的面板。您需要一个不同类型的绑定结构。
我们必须告诉源元素值将来自哪里，告诉我们要从该源元素的哪个属性获取值，以及我们要覆盖其值的属性。

<CodeHeader></CodeHeader>

```json
{
  "panel": {
    ...
    "bindings": [
      {
        "binding_type": "view",
        "source_control_name": "my_toggle", // 源元素的名称
        "source_property_name": "#toggle_state", // 我们想要的属性值，表示开关处于什么状态
        "target_property_name": "#visible" // 要被覆盖的目标属性
      }
    ]
  },

  "my_toggle": {
    ...
  }
}
```

当开关被勾选时，`#toggle_state` 将被勾选（`1` 或 `true`），它将覆盖元素的 `visible` 属性值为 true。当您取消勾选时，它将为未勾选（`0` 或 `false`），并再次覆盖 `visible` 值。

## 条件渲染

使用标准属性在屏幕上操作 Bedrock 当前 UI 系统具有挑战性。然而，变量和绑定在 JSON UI 中是例外，因为它们包含来自 Bedrock Engine 的数据。通过一些聪明的 UI 技术，可以完全控制 UI 控件的渲染条件。这些方法分为两类：使用变量的条件渲染和使用绑定的条件渲染。

### 使用变量的条件渲染

变量可用于条件渲染 UI 控件。回想一下，UI 变量是前面带有 `$` 的属性。`hud_screen.json` 中携带引擎数据的一个变量示例是 `$actionbar_text`。查看 `hud_actionbar_text`，我们可以看到 `$actionbar_text` 用于显示操作栏文本。

<CodeHeader>vanilla/ui/hud_screen.json</CodeHeader>

```json
{
...
  "hud_actionbar_text": {
    "type": "image",
    "size": [ "100%c + 12px", "100%c + 5px" ],
    "offset": [ 0, "50%-68px" ],
    "texture": "textures/ui/hud_tip_text_background",
    "alpha": "@hud.anim_actionbar_text_background_alpha_out",
    "controls": [
      {
        "actionbar_message": {
          "type": "label",
          "anchor_from": "center",
          "anchor_to": "center",
          "color": "$tool_tip_text",
          "layer": 1,
          "text": "$actionbar_text",
          "localize": false,
          "alpha": "@hud.anim_actionbar_text_alpha_out"
        }
      }
    ]
  }
...
}
```

`visible` 属性用于在使用携带 bedrock 引擎数据的变量时条件渲染 UI 控件。考虑下面的示例。复制了 `$actionbar_text` 变量以允许我们对其进行修改和执行比较（无法直接对硬编码变量执行此操作）。然后在添加的 `visible` 属性中使用复制变量 `$atext`，该属性表示“如果操作栏文本不等于 `hello world`，则使文本标签可见”。

<CodeHeader>vanilla/ui/hud_screen.json</CodeHeader>

```json
{
...
  "hud_actionbar_text": {
    "type": "image",
    "size": ["100%c + 12px", "100%c + 5px"],
    "offset": [0, "50%-68px"],
    "texture": "textures/ui/hud_tip_text_background",
    "alpha": "@hud.anim_actionbar_text_background_alpha_out",
    "controls": [
      {
        "actionbar_message": {
          "type": "label",
          "anchor_from": "center",
          "anchor_to": "center",
          "color": "$tool_tip_text",
          "layer": 1,
          "text": "$actionbar_text",
          "localize": false,
          "alpha": "@hud.anim_actionbar_text_alpha_out",
          // 如果操作栏文本等于 "hello world"，则忽略文本标签
          "$atext": "$actionbar_text",
          "visible": "(not ($atext = 'hello world'))"
        }
      }
    ]
  }
...
}
```

将上述 JSON 修改为资源包中使用的非侵入式 UI 文件应如下所示：

<CodeHeader>vanilla/ui/hud_screen.json</CodeHeader>

```json
{
    "hud_actionbar_text/actionbar_message": {
        "$atext": "$actionbar_text",
        "visible": "(not ($atext = 'hello world'))"
    }
}
```

当您进入一个启用了资源包的世界时，尝试执行 `/title @s actionbar hello world`。您应该注意到没有显示消息！执行任何其他操作栏标题应该显示其他消息。如果您希望操作栏文本及其背景消失，您也可以删除上述代码中的 `/actionbar_message`。背景包含在 `hud_actionbar_text` 中，使其不可见也会使其子元素（`actionbar_message`）不可见。

以下是一个使用变量进行条件渲染的更复杂示例。在这种情况下，有必要使用 actionbar factory。Factory 是元素生成器，有一些具有特定名称的，例如 `hud_actionbar_text_factory`，它们具有硬编码的属性。每当在游戏中运行 actionbar 命令时，此 factory 都会在其 `control_id` 内生成/重置元素，此外还会向我们传递一些有用的变量，如 `$actionbar_text`、`$tool_tip_text` 等，这些数据只能通过 factory 访问。

<CodeHeader>vanilla/ui/hud_screen.json</CodeHeader>

```json
{
    "black_conditional_image": {
        "type": "image",
        "texture": "textures/ui/Black",
        "size": [16, 16],
        "layer": 10,
        "$atext": "$actionbar_text",
        "visible": "($atext = 'hello world')"
    },

    "black_conditional_image_factory": {
        "type": "panel",
        "factory": {
            "name": "hud_actionbar_text_factory",
            "control_ids": {
                "hud_actionbar_text": "black_conditional_image@hud.black_conditional_image"
            }
        }
    },

    "root_panel": {
        "modifications": [
            {
                "array_name": "controls",
                "operation": "insert_front",
                "value": {
                    "black_conditional_image_factory@hud.black_conditional_image_factory": {}
                }
            }
        ]
    }
}
```

上面的示例在操作栏文本字符串等于 `hello world` 时在 HUD 屏幕上显示一个 16x16 的黑色方块。您也可以为图像添加动画以使其更加动态。使用变量的条件渲染不限于图像和标签。您可以在使用变量的条件渲染中使用任何对象类型。您可以想象将您的 UI 代码与操作栏文本配对可以高度操作 JSON UI（至少在 `hud_screen.json` 中）。`visible` 属性支持 UI 运算符，因此您有更多控制权。任何携带 bedrock 引擎数据的位置变量都允许使用变量进行条件渲染。

### 使用绑定的条件渲染

按照上面 actionbar 的示例，您可能逻辑上认为标题也使用变量。事实并非如此。标题使用绑定来获取其数据，如下所示。

<CodeHeader>vanilla/ui/hud_screen.json</CodeHeader>

```json
{
...
  "hud_title_text": {
    "type": "stack_panel",
    "orientation": "vertical",
    "offset": [ 0, -19 ],
    "layer": 1,
    "alpha": "@hud.anim_title_text_alpha_in",
    "propagate_alpha": true,
    "controls": [
      {
        "title_frame": {
          "type": "panel",
          "size": [ "100%", "100%cm" ],
          "controls": [
            {
              "title_background": {
                "type": "image",
                "size": [ "100%sm + 30px", "100%sm + 6px" ],
                "texture": "textures/ui/hud_tip_text_background",
                "alpha": "@hud.anim_title_background_alpha_in"
              }
            },
            {
              "title": {
                "type": "label",
                "anchor_from": "top_middle",
                "anchor_to": "top_middle",
                "color": "$title_command_text_color",
                "text": "#text",
                "layer": 1,
                "localize": false,
                "font_size": "extra_large",
                "variables": [
                  {
                    "requires": "(not $title_shadow)",
                    "$show_shadow": false
                  },
                  {
                    "requires": "$title_shadow",
                    "$show_shadow": true
                  }
                ],
                "shadow": "$show_shadow",
                "text_alignment": "center",
                "offset": [ 0, 6 ],
                "bindings": [
                  {
                    "binding_name": "#hud_title_text_string",
                    "binding_name_override": "#text",
                    "binding_type": "global"
                  }
                ]
              }
            }
          ]
        }
      }
    ]
  }
...
}
```

您需要向文本添加另一个绑定对象来控制其可见性。回想一下，`#visible` 通过绑定直接包含事物的可见性。以下示例不会呈现标题字符串 `hello world`，但会呈现所有其他字符串。尝试在游戏中输入 `/title @s title hello world` 来查看它。

<CodeHeader>vanilla/ui/hud_screen.json</CodeHeader>

```json
{
...
  "hud_title_text": {
    "type": "stack_panel",
    "orientation": "vertical",
    "offset": [ 0, -19 ],
    "layer": 1,
    "alpha": "@hud.anim_title_text_alpha_in",
    "propagate_alpha": true,
    "controls": [
      {
        "title_frame": {
          "type": "panel",
          "size": [ "100%", "100%cm" ],
          "controls": [
            {
              "title_background": {
                "type": "image",
                "size": [ "100%sm + 30px", "100%sm + 6px" ],
                "texture": "textures/ui/hud_tip_text_background",
                "alpha": "@hud.anim_title_background_alpha_in"
              }
            },
            {
              "title": {
                "type": "label",
                "anchor_from": "top_middle",
                "anchor_to": "top_middle",
                "color": "$title_command_text_color",
                "text": "#text",
                "layer": 1,
                "localize": false,
                "font_size": "extra_large",
                "variables": [
                  {
                    "requires": "(not $title_shadow)",
                    "$show_shadow": false
                  },
                  {
                    "requires": "$title_shadow",
                    "show_shadow": true
                  }
                ],
                "shadow": "$show_shadow",
                "text_alignment": "center",
                "offset": [ 0, 6 ],
                "bindings": [
                  {
                    "binding_name": "#hud_title_text_string",
                    "binding_name_override": "#text",
                    "binding_type": "global"
                  },
                  {
                    "binding_type": "view", // 使其成为视图绑定
                    "source_property_name": "(not (#text = 'hello world'))", // 检测标题文本字符串何时不等于 "hello world"
                    "target_property_name": "#visible" // 根据 "source_property_name" 是 true 还是 false 覆盖 #visibility 属性
                  }
                ]
              }
            }
          ]
        }
      }
    ]
  }
...
}
```

将上述 JSON 修改为资源包中使用的非侵入式 UI 文件应如下所示：

<CodeHeader>RP/ui/hud_screen.json</CodeHeader>

```json
{
    "hud_title_text/title_frame/title": {
        "modifications": [
            {
                "array_name": "bindings",
                "operation": "insert_back",
                "value": {
                    "binding_type": "view",
                    "source_property_name": "(not (#text = 'hello world'))",
                    "target_property_name": "#visible"
                }
            }
        ]
    }
}
```

和之前一样，以下是使用绑定进行条件渲染的更复杂示例。在这种情况下，16x16 黑色图像仅在标题文本字符串等于 `hello world` 时渲染。虽然在这种情况下您不需要使用标题 factory，但如果您要使用 UI 动画，则应该使用。

<CodeHeader>RP/ui/hud_screen.json</CodeHeader>

```json
{
    "black_conditional_image": {
        "type": "image",
        "texture": "textures/ui/Black",
        "size": [16, 16],
        "layer": 10,
        "bindings": [
            {
                "binding_name": "#hud_title_text_string"
            },
            {
                "binding_type": "view",
                "source_property_name": "(#hud_title_text_string = 'hello world')",
                "target_property_name": "#visible"
            }
        ]
    },

    "black_conditional_image_factory": {
        "type": "panel",
        "factory": {
            "name": "hud_title_text_factory",
            "control_ids": {
                "hud_title_text": "black_conditional_image@hud.black_conditional_image"
            }
        }
    },

    "root_panel": {
        "modifications": [
            {
                "array_name": "controls",
                "operation": "insert_front",
                "value": {
                    "black_conditional_image_factory@hud.black_conditional_image_factory": {}
                }
            }
        ]
    }
}
```

## 字符串格式化

字符串格式化用于使用格式说明符访问或操作字符串的某些部分。格式说明符与变量或绑定中的字符串相乘以返回转换后的结果。

### Unicode 字符宽度

格式说明符中的字符串长度以**字节**而非字符数来衡量。每个字符占用的字节数取决于其 Unicode 码点：

-   字符 `U+0000`-`U+007F`（例如字母、数字、基本符号）使用 **1 字节**
-   字符 `U+0080`-`U+07FF`（例如 `§`、Latin-1 重音符号）使用 **2 字节**
-   超过 `U+07FF` 的字符（例如表情符号、非拉丁文字、自定义字形）使用 **3 字节**

如果字符串读取不正确（即在多字节字符中间切割），最后一个字符可能无法渲染。例如，如果使用 `%.2s` 将 3 字节字符切割在 **2 字节**处，它将根本不显示。

以下字段让您以**字节**为单位计算字符串长度：

<div>
    <form>
        <input
            id="textValue"
            placeholder="输入字符串"
            class="button"
            style="background: none; outline: none;"
        />
        <input
            id="byteCount"
            placeholder="字节数"
            readonly
            class="button"
            style="background: none; outline: none; margin-inline: 0.5em;"
        />
        <button
            type="button"
            class="button"
            style="cursor: pointer;"
            onclick="document.getElementById('byteCount').value = new TextEncoder().encode(document.getElementById('textValue').value).length"
        >
            统计字节
        </button>
    </form>
</div>

### 格式说明符

假设变量 **$var** 定义为：

```json
"$var": "abcdefghijklmn"
```

可以使用以下格式说明符：

-   `%.ns`  
    将字符串截断为前 **n 字节**。  
    示例：`('%.7s' * $var)` 返回 `abcdefg`。

-   `%0ns`  
    如果其长度为 **n 字节或更多**，则返回完整字符串，否则返回 `0`。  
    示例：  
    `('%04s' * $var)` 返回 `abcdefghijklmn`  
    `('%015s' * $var)` 返回 `0`

-   `%n.xs`  
    从开头返回 **x 字节**，用**前导空格**填充以达到总共 **n 字节**。  
    示例：`('%7.4s' * $var)` 返回 `   abcd`。

-   `%-n.xs`  
    从开头返回 **x 字节**，用**尾随空格**填充以达到总共 **n 字节**。  
    示例：`('%-7.4s' * $var)` 返回 `abcd   `。

-   `%ns`  
    在开头添加**空格**以使总长度达到 **n 字节**（如果需要）。  
    示例：`('%15s' * $var)` 返回 ` abcdefghijklmn`。

-   `%-ns`  
    在末尾添加**空格**以使总长度达到 **n 字节**（如果需要）。  
    示例：`('%-15s' * $var)` 返回 `abcdefghijklmn `。

请记住，这种格式的使用是有限的。

## 按钮映射

`button_mappings` 允许您修改输入特定控件时要按下的内容。此控件可以是键盘和鼠标、触摸或手柄。

以下是带有 `button_mappings` 属性的按钮元素示例：

```json
{
    "sample_button@common.button": {
        "$pressed_button_name": "button_id",
        "button_mappings": [
            {
                "to_button_id": "$pressed_button_name",
                "mapping_type": "pressed"
            },
            {
                "from_button_id": "button.menu_ok",
                "to_button_id": "$pressed_button_name",
                "mapping_type": "focused"
            },
            {
                "from_button_id": "button.menu_select",
                "to_button_id": "$pressed_button_name",
                "mapping_type": "pressed"
            },
            {
                "from_button_id": "button.menu_up",
                "to_button_id": "$pressed_button_name",
                "mapping_type": "global"
            }
        ]
    }
}
```

### 映射类型

指定按钮映射的作用域：

-   `focused` - 意味着当按钮首先被悬停时
-   `pressed` - 意味着当按钮被点击或按下时
-   `global` - 意味着当按钮存在于屏幕上并被调用时

只要 `from_button_id` 输入了适当的 `mapping_type`，它将满足条件并因此触发 `to_button_id` 属性：

```json
{
    "sample_button@common.button": {
        "$pressed_button_name": "button_id",
        "button_mappings": [
            // 仅当您首先将鼠标悬停到其中时触发此按钮
            {
                "from_button_id": "button.menu_ok",
                "to_button_id": "$pressed_button_name",
                "mapping_type": "focused"
            },
            // 如果点击或按下此按钮，则触发它
            {
                "from_button_id": "button.menu_select",
                "to_button_id": "$pressed_button_name",
                "mapping_type": "pressed"
            },
            // 如果从任何地方按下 `button.menu_up` 键，则触发此按钮
            {
                "from_button_id": "button.menu_up",
                "to_button_id": "$pressed_button_name",
                "mapping_type": "global"
            }
        ]
    }
}
```

### 常用按钮 ID

这些是您可以在 `from_button_id` 属性中使用的常用按钮 ID 列表。

**对于鼠标和键盘：**
| 按钮 ID | 描述 |
|--------------------------------|-------------------|
| `button.menu_select` | 鼠标左键点击 |
| `button.menu_secondary_select` | 鼠标右键点击 |
| `button.menu_ok` | 回车键 |
| `button.menu_exit` | ESC 键 |
| `button.menu_cancel` | ESC 键 |
| `button.menu_up` | 上方向键 |
| `button.menu_down` | 下方向键 |
| `button.menu_left` | 左方向键 |
| `button.menu_right` | 右方向键 |
| `button.menu_autocomplete` | TAB 键 |

**对于手柄：**
| 按钮 ID | 描述 |
|--------------------------------|----------------|
| `button.controller_select ` | X/A 按钮 |
| `button.menu_secondary_select` | Y 按钮 |
| `button.menu_exit` | B 按钮 |
| `button.menu_cancel` | B 按钮 |
| `button.menu_up` | 上十字键 |
| `button.menu_down` | 下十字键 |
| `button.menu_left` | 左十字键 |
| `button.menu_right` | 右十字键 |

在创建 UI 时，最好也为具有不同控制方法的各个平台添加不同控制的支持。

## 修改

要以非侵入式方式修改 JSON UI，您可以使用 `modifications` 属性来修改其他附加包（通常是原版 JSON UI 文件）中先前存在的 JSON UI 元素。这样做可以确保仅在需要时修改必要的部分，以提高与其他修改 JSON UI 的附加包的兼容性。

| 修改操作       | 描述                                 |
| --------------- | ------------------------------------------- |
| `insert_back`   | **插入**到数组末尾                  |
| `insert_front`  | **插入**到数组开头                |
| `insert_after`  | **插入**到目标之后            |
| `insert_before` | **插入**到目标之前           |
| `move_back`     | **移动**目标到数组末尾             |
| `move_front`    | **移动**目标到数组开头           |
| `move_after`    | **移动**目标到第二个目标之后         |
| `move_before`   | **移动**目标到第二个目标之前        |
| `swap`          | **交换**第一个目标和第二个目标    |
| `replace`       | **替换**第一个目标为第二个目标 |
| `remove`        | **移除**目标                           |

#### 开头/结尾

从列表的顶部（开头）或底部（结尾）修改锚定。

从前缀新的 `foo` 控件到列表顶部：

```json
{
    "array_name": "controls",
    "operation": "insert_front",
    "value": [
        {
            "foo@example.bar": {}
        }
    ]
}
```

将新的 `foo` 控件追加到列表底部：

```json
{
    "array_name": "controls",
    "operation": "insert_back",
    "value": [
        {
            "foo@example.bar": {}
        }
    ]
}
```

将现有的 `foo` 控件移动到列表顶部：

```json
{
    "array_name": "controls",
    "operation": "move_front",
    "value": [
        {
            "foo@example.bar": {}
        }
    ]
}
```

将现有的 `foo` 控件移动到列表底部：

```json
{
    "array_name": "controls",
    "operation": "move_back",
    "value": [
        {
            "foo@example.bar": {}
        }
    ]
}
```

将现有的 `#example_binding_2` 绑定移动到列表顶部：

```json
{
    "array_name": "bindings",
    "operation": "move_front",
    "where": {
        "binding_name": "#example_binding_2"
    }
}
```

将现有的 `#example_binding_2` 绑定移动到列表底部：

```json
{
    "array_name": "bindings",
    "operation": "move_back",
    "where": {
        "binding_name": "#example_binding_1"
    }
}
```

#### 之后/之前

修改锚定在列表中现有控件或绑定之后（下方）或之前（上方）。

在列表中 `second_target` 控件之后添加新的 `foo` 控件：

```json
{
    "control_name": "second_target",
    "operation": "insert_after",
    "value": [
        {
            "foo@example.bar": {}
        }
    ]
}
```

在列表中 `second_target` 控件之前添加新的 `foo` 控件：

```json
{
    "control_name": "second_target",
    "operation": "insert_before",
    "value": [
        {
            "foo@example.bar": {}
        }
    ]
}
```

在列表中 `#example_binding_2` 绑定之后添加新的 `#my_binding_1` 绑定：

```json
{
    "array_name": "bindings",
    "operation": "insert_after",
    "where": {
        "binding_name": "#example_binding_2"
    },
    "value": [
        {
            "binding_name": "#my_binding_1"
        }
    ]
}
```

在列表中 `#example_binding_2` 绑定之前添加新的 `#my_binding_1` 绑定：

```json
{
    "array_name": "bindings",
    "operation": "insert_before",
    "where": {
        "binding_name": "#example_binding_2"
    },
    "value": [
        {
            "binding_name": "#my_binding_1"
        }
    ]
}
```

将现有的 `foo` 控件移动到列表中 `second_target` 控件之后：

```json
{
    "control_name": "second_target",
    "operation": "move_after",
    "value": [
        {
            "foo@example.bar": {}
        }
    ]
}
```

将现有的 `foo` 控件移动到列表中 `second_target` 控件之前：

```json
{
    "control_name": "second_target",
    "operation": "move_before",
    "value": [
        {
            "foo@example.bar": {}
        }
    ]
}
```

将现有的 `#example_binding_1` 绑定移动到列表中 `#example_binding_2` 绑定之后：

```json
{
    "array_name": "bindings",
    "operation": "move_after",
    "where": {
        "binding_name": "#example_binding_2"
    },
    "target": {
        "binding_name": "#example_binding_1"
    }
}
```

将现有的 `#example_binding_1` 绑定移动到列表中 `#example_binding_2` 绑定之前：

```json
{
    "array_name": "bindings",
    "operation": "move_before",
    "where": {
        "binding_name": "#example_binding_1"
    },
    "target": {
        "binding_name": "#example_binding_2"
    }
}
```

#### 交换/替换/删除

修改锚定在至少一个现有控件或绑定上：

交换现有 `#example_binding_1` 和 `#example_binding_2` 绑定的位置：

```json
{
    "array_name": "bindings",
    "operation": "swap",
    "where": {
        "binding_name": "#example_binding_1"
    },
    "target": {
        "binding_name": "#example_binding_2"
    }
}
```

将现有的 `#example_binding_1` 绑定替换为新的 `#replacement_binding` 绑定：

```json
{
    "array_name": "bindings",
    "operation": "replace",
    "where": {
        "binding_name": "#example_binding_1"
    },
    "value": {
        "binding_name": "#replacement_binding"
    }
}
```

移除现有的 `#example_binding_1` 绑定：

```json
{
    "array_name": "bindings",
    "operation": "remove",
    "where": {
        "binding_name": "#example_binding_1"
    }
}
```
