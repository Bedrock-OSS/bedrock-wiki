---
title: Intro to JSON UI
category: General
nav_order: 1
tags:
  - guide
mention:
  - sermah
  - KalmeMarq
---

## Introduction

:::tip
This page is outlined with information containing the basics of JSON UI. For a more detailed documentation, you may check the [JSON UI Documentation](https://wiki.bedrock.dev/json-ui/json-ui-documentation.html) page instead.
:::

The game's user interface is data-driven and can be modified. It allows us to modify how certain user interfaces would render and, to some extent, behave. To get started, all vanilla UI files are stored in `RP/ui/...` folder.

JSON UI may contain the following files:

### System files

These are built-in files used in JSON UI:

- `_global_variables.json` - used for denoting default variables for later use
- `_ui_defs.json` - for referencing the files used on the UI

### Screens

These are files which contains elements that are called to render a screen:

- `hud_screen.json` - shows the main gameplay screen where in-game features such as the hotbar is rendered
- `inventory_screen.json` - shows the player's inventory screen
- etc.

### Templates

These are files which stores JSON UI elements to be used by other namespaces, such as screens:

- `ui_common.json` - contains elements such as the button which is referenced on most other namespaces such buttons for the settings screen
- `ui_template_*.json` - contains elements that are neatly orgnaized to be used by other namespaces

## UI Defs

The `_ui_defs.json` file references all JSON UI files in an array.

You can make new files, for example we'll add `RP/ui/button.json` and `RP/my_ui/main_menu.json`. In the file, we would list them as such:

<CodeHeader>RP/ui/\_ui_defs.json</CodeHeader>

```json
{
  "ui_defs": ["ui/button.json", "my_ui/main_menu.json"]
}
```

- Make sure to append the full filepath of the UI you are referencing - including the file extension (e.g. `*.json`), from the resource pack root folder!
- Only reference new UI files you have added in your pack. You don't need to reference vanilla files nor other third-party JSON UI files, as it automatically gets merged with other packs.
- You may use custom file paths outside the `RP/ui/...` folder, or reference files in a sub-folder within the `RP/ui/...` folder.
- You may append custom file extensions other than `*.json` - so long as the file contents are valid and written in JSON.

## Global Variables

We can denote a variable `"$info_text_color"` and its value of `[0.8, 0.8, 0.8]` within the `_global_variables.json` file as such:

<CodeHeader>RP/ui/\_global_variables.json</CodeHeader>

```json
{
  "$info_text_color": [0.8, 0.8, 0.8]
}
```

Other elements in different JSON UI files can then reference this variable to be used for later:

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

- You can add denote more variables, seperated in a comma, within the `_global_variables.json` file.
- Variables stored in this file are constant and _one-sided_. And therefore, you cannot modify the default variable in one namespace to be then used by the other.

## Namespaces

Namespaces are identifiers for the UI files. They are used to access elements in some files across all other files. When adding a new namespace, it must have a unique name.

For instance, we have an element `foobar` in the namespace `one`:

<CodeHeader>vanilla/ui/file_a.json</CodeHeader>

```json
{
  "namespace": "one",

  "foobar": {...}
}
```

We can then reference the same element above into a different namespace `two`:

<CodeHeader>vanilla/ui/file_b.json</CodeHeader>

```json
{
  "namespace": "two",

  "fizzbuzz@one.foobar": {...}
}
```

When referencing elements from different namespaces, it must have the following format:

```json
"[element_name]@[namespace_reference].[element_name_reference]"
```

## Screens

Screen files contain user interfaces which are called upon in appropriate situations, such as for instance the `inventory_screen.json` file for rendering the player's inventory screen. Within these files contains a root element which the game directly accesses data from.

Screens are special in that it can only access data, where other screens may not.

## Elements

A JSON UI element is the basic form of data within JSON UI. Elements must have a unique name for each namespace so as to not have a conflict with other elements of the same name yet may have different functions.

Here the element `type` is `label` so it will render a text of `Hello World` when called:

<CodeHeader>vanilla/ui/example_file.json</CodeHeader>

```json
{
  "test_element": {
    "type": "label",
    "text": "Hello World"
  }
}
```

### Types

The following are some of the element types, which are possible values for the `type` property:

- `label` - for creating text objects
- `image` - for rendering images from a filepath provided
- `button` - for creating interactive and clickable elements
- `panel` - an empty container where you can store all other elements that may overlap to each other
- `stack_panel` - an empty container where you can store all other elements in a stack that doesn't overlap to each other
- `grid` - uses another element as a template, and then renders it repeatedly in multiple rows and columns
- `factory` - renders an element based off of another element, is capable of calling hardcoded values and variables
- `custom` - is paired with another property `renderer` which renders hardcoded JSON UI elements
- `screen` - elements that are called by the game directly, usually root panel elements

## Animations

When using the `anim_type` property in place of the `type` property, you can create animations to animate other elements.

Animation elements can then be referenced on other non-animation element types, such as `label` and `panel`.

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

### Types

The following are the list of element types, which are possible values for the `anim_type` property:

- `alpha` - accepts float values, animates the opacity of the element
- `offset` - accepts an array, animates the position of the element relative to its anchor
- `size` - accepts an array, animates the size in ( width, height )
- `flip_book` - accepts integer values, animates the image in flipbook texture or frame by frame
- `uv` - accepts an array, animates the image depending on the UV texture
- `color` - accepts float RGB values from 0.0 to 1.0, animates the color of the element
- `wait` - accepts number values, used for waiting/staying purposes
- `aseprite_flip_book` - like a `flip_book` animation, uses sprite sheets. More info [here](/json-ui/aseprite-animations)
- `clip`

## Using Operators

You can use operators in JSON UI, along with `$variables` and `#bindings` into common properties such as `size` and `offset`. Here's a list of properties you can use:

| Operator Name         | Operator | Examples                                                                      |
| --------------------- | -------- | ----------------------------------------------------------------------------- |
| Addition              | +        | `"100% + 420px"` `($text + ' my')` `($index + 2)` `('#' + $bdg_nm + '_name')` |
| Subtraction           | -        | `"100% - 69px"` `($text - ' my')` `($index - 13)`                             |
| Multiplication        | *        | `($var * 9)` `(#value * 5)`                                                   |
| Division              | /        | `($var / 12)` `(#value / 2)`                                                  |
| Equal to              | =        | `($var = 12)` `($var = 'this_text')` `(#name = 'Wither')`                     |
| Greater than          | >        | `(#value > 13)`                                                               |
| Less than             | <        | `($var < 4)`                                                                  |
| Greater or equal than | > or =   | `(#value > 2 or #value = 2)`                                                  |
| Less or equal than    | < or =   | `(#value < 2 or #value = 2)`                                                  |
| Logical AND           | and      | `($is_school and $is_open)`                                                   |
| Logical OR            | or       | `($is_cool or $is_awesome)`                                                   |
| Logical NOT           | not      | `(not #name)` `(not (#name = 'text'))` `(not $name)`                          |

## Variables

Variables are not only limited to the `_global_variables.json` file. Instead, it can be used and denoted directly within other namespaces as well to carry data from one element to the other.

### Defining variables

The symbol `$` is added at the beginning of each string to denote it as a variable. Variables can store integers, floats, booleans, strings, and arrays.

<CodeHeader>vanilla/ui/example_file.json</CodeHeader>

```json
{
  "test_element": {
    ...
    // Define variables
    "$array_variable": [ 10, 10 ],
    "$string_variable": "foobar",
    "$float_variable": 1.0,
    "$string_variable2": "my_button.template_button",

    // Use variables
    "size": "$array_variable",
    "text": "$string_variable",
    "alpha": "$float_variable",

    // You can also use variables to reference another element as a child element
    "controls": [
      { "foobar@$string_variable2": {} }
    ]
  }
}
```

### Deriving variables

You can also derive variables from another element as such:

<CodeHeader>vanilla/ui/example_file.json</CodeHeader>

```json
{
  "foobar": {
    ...
    "$cool_variable": 1,
    "$rad_variable": false
  },

  // Element "fizzbuzz" extends "foobar"
  // and replaces the `$cool_variable` value with 2
  // while `$rad_variable` remains unchanged.
  "fizzbuzz@foobar": {
    "$cool_variable": 2
  }
}
```

Any property to the derived element will be completely overwritten when changed.

## Bindings

Bindings are used to bind hardcoded values to the element and use it for processing elements. Here's an example of a label using a hardcoded text:

The `text` property value is `#hardtext`. By using `bindings`, I can get the value of the hardcoded variable `#hardtext` so the `text` property can use it.
Here it's directly assigning the `#hardtext` value to the `text` property.

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

Or alternatively, it may sometimes look like as follows:

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

In this case, the `#hardtext` value is assigned to the `#text` binding property name that will then be assigned to the `text` property.

This happens a lot with the `visible` and `enabled` properties. Here's an example with both of them:

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
        "binding_name": "#play_button_enabled"
        "binding_name_override": "#enabled"
      }
    ]
  }
}
```

`#using_touch` and `#play_button_enabled` in this case store boolean values. If you're playing on a touch device, `#using_touch` will be `true` else `false.` `#play_button_enabled` is used in the `Add External Server` screen. So, in this case, it will be `true` if all text fields (`server name`, `server ip` and `server_port`) have text inside them. <br>
So the `#using_touch` value will override the `#visible` binding property value, which, in this case, is also a property (`#visible` is used inside `property_bag`, which would be the same as setting `visible` to something).
And `#play_button_enabled` will override the `#enabled` binding property value, which will then set its value to `enabled` property.

Let's say you want to show a panel with some content when a specific toggle is selected/checked. You'll need a different type of binding structure.
We have to tell the source element where the value will come from, tell which property of that source element we want to get the value from and which property we want to override its value.

<CodeHeader></CodeHeader>

```json
{
  "panel": {
    ...
    "bindings": [
      {
        "binding_type": "view",
        "source_control_name": "my_toggle", // the name of the source element
        "source_property_name": "#toggle_state", // We want this property value which tells in which state the toggle is in
        "target_property_name": "#visible" // the target property to be overrided
      }
    ]
  },

  "my_toggle": {
    ...
  }
}
```

When the toggle is checked, the `#toggle_state` will be checked (`1` or `true`), and it will override the `visible` property value of the element to true. When you uncheck, it will be unchecked (`0` or `false`) and once again override the `visible` value.

## Conditional Rendering

It is challenging to manipulate Bedrock's current UI system when things are visible on-screen using standard properties. However, variables and bindings are exceptional in JSON UI because they contain data coming directly from the Bedrock Engine. Using a couple of clever UI techniques, it is possible to have complete control over the conditions in which a UI control is rendered. The methods are split into two categories: conditional rendering with variables and conditional rendering with bindings.

### Conditional Rendering with Variables

Variables can be used to render UI controls conditionally. Recall that UI variables are properties with `$` in front of them. An example of a variable that carries engine data in `hud_screen.json` is `$actionbar_text`. Looking at `hud_actionbar_text`, we can see that `$actionbar_text` is used to display the actionbar text.

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

The `visible` property is used to conditionally render a UI control when working with variables that carry bedrock engine data. Consider the below example. A copy is made of the `$actionbar_text` variable to allow us to modify and perform comparisons on it (cannot be done with the hardcoded variable directly). The copy variable `$atext` is then used in the added `visible` property, which says "make the text label visible if the actionbar text is **not** equal to `hello world`".

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
          "alpha": "@hud.anim_actionbar_text_alpha_out",
	  			// Ignore the text label if the actionbar text is equal to "hello world"
          "$atext": "$actionbar_text",
	  "visible": "(not ($atext = 'hello world'))"
        }
      }
    ]
  }
...
}
```

Modifying the above JSON into an unintrusive UI file used in a resource pack should look identical to this:

<CodeHeader>vanilla/ui/hud_screen.json</CodeHeader>

```json
{
  "hud_actionbar_text/actionbar_message": {
    "$atext": "$actionbar_text",
    "visible": "(not ($atext = 'hello world'))"
  }
}
```

When you log into a world with the resource pack enabled, try executing `/title @s actionbar hello world`. You should notice that no message appears! Running any other actionbar title should show the other messages. You can also remove `/actionbar_message` in the code above if you wish for the actionbar text and its background to disappear. The background is contained in `hud_actionbar_text`, and making it invisible also makes its child elements (`actionbar_message`) invisible.

Here's a more complicated example of conditional rendering with variables. In this case, it is necessary to use the actionbar factory. Factories are element generators, and there are some with specific names such as `hud_actionbar_text_factory` which have hardcoded properties. This factory generates/resets the element inside its `control_id` whenever the actionbar command is run in addition to passing us some useful variables such as `$actionbar_text`, `$tool_tip_text`, etc., data which is only accessible through the factory.

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

The above example shows a 16x16 black square on the HUD screen when the actionbar text string is equal to `hello world`. You may also apply animations to your image to make it more dynamic. Conditional rendering with variables is not limited to images and labels. You may use any object type in conditional rendering with variables. You can imagine pairing your UI code with the actionbar text allows for a high degree of manipulation of JSON UI (at least in `hud_screen.json`). The `visible` property has support for UI operators, so you have even more control. Anywhere where there is a variable that carries bedrock engine data allows for conditional rendering with variables.

### Conditional Rendering with Bindings

Following the above example with the actionbar, you might logically assume that the title also uses variables. This is not the case. The title uses bindings for its data, as shown below.

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

You will need to add another binding object to the text to control its visibility. Recall that `#visible` contains the visibility of the thing directly through bindings. The following example will not render the title string `hello world` but will render all other strings. Try typing `/title @s title hello world` to see it in-game.

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
                  },
                  {
                    "binding_type": "view", // make this a viewing binding
                    "source_property_name": "(not (#text = 'hello world'))", // detect when the title text string is not equal to "hello world"
                    "target_property_name": "#visible" // override the #visibility property depending on if "source_property_name" is true or false
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

Modifying the above JSON into an unintrusive UI file used in a resource pack should look identical to this:

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

Like before, here's a more complicated example of conditional rendering with bindings below. In this case, the 16x16 black image will only render when the title text string equals `hello world`. While you don't need to use the title factory in this case, you should if you are going to use UI animations.

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

## Buttons Mappings

`button_mappings` allows you to modify what would be pressed when a certain control is inputted. This control can either be from a keyboard and mouse, touch, or controller.

Here's an example of a button element with the `button_mappings` property:

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
        "from_button_id": "button.menu_select",
        "to_button_id": "$pressed_button_name",
        "mapping_type": "pressed"
      },
      {
        "from_button_id": "button.menu_ok",
        "to_button_id": "$pressed_button_name",
        "mapping_type": "focused"
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

### Mapping types

Defines the scope of the specified button mapping:

- `focused` - means when the button is hovered onto first
- `pressed` - means when the button is interacted with
- `global` - means when the button is rendered

As long as the `from_button_id` is inputted with it's appropriate `mapping_type`, it will meet the conditions and therefore trigger the `to_button_id` property.

### Common button IDs

These are the list of common button IDs you can use in `from_button_id` property.

**For mouse and keyboard:**
| Button ID | Description |
| --------------------------------- | -------------------------------------- |
| `button.menu_select` | Mouse left click |
| `button.menu_secondary_select` | Mouse right click |
| `button.menu_ok` | ENTER key |
| `button.menu_exit` | ESC key |
| `button.menu_cancel` | ESC key |
| `button.menu_up` | UP ARROW key |
| `button.menu_down` | DOWN ARROW key |
| `button.menu_left` | LEFT ARROW key |
| `button.menu_right` | RIGHT ARROW key |
| `button.menu_autocomplete` | TAB key |

**For controllers:**
| Button ID | Description |
| --------------------------------- | -------------------------------------- |
| `button.controller_select ` | X/A button |
| `button.menu_secondary_select` | Y button |
| `button.menu_exit` | B button |
| `button.menu_cancel` | B button |
| `button.menu_up` | UP DPAD key |
| `button.menu_down` | DOWN DPAD key |
| `button.menu_left` | LEFT DPAD key |
| `button.menu_right` | RIGHT DPAD key |

## Modifications

To modify JSON UI in a non-intrusive way, you can use the `modifications` property to modify previously existing JSON UI elements from other packs (usually vanilla JSON UI files). Doing this makes sure only necessary parts are modified unless otherwise intended, to improve compatibility with other packs that modify the JSON UI.

| Modification    | Description                                 |
| --------------- | ------------------------------------------- |
| `insert_back`   | **insert** at end of array                  |
| `insert_front`  | **insert** at start of array                |
| `insert_after`  | **insert** after target in array            |
| `insert_before` | **insert** before target in array           |
| `move_back`     | **move** target to end of array             |
| `move_front`    | **move** target to start of array           |
| `move_after`    | **move** target after second target         |
| `move_before`   | **move** target before second target        |
| `swap`          | **swap** first target with second target    |
| `replace`       | **replace** first target with second target |
| `remove`        | **remove** target                           |

### Examples

#### Front/Back

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

```json
{
  "array_name": "bindings",
  "operation": "move_front",
  "where": {
    "binding_name": "#example_binding_2"
  }
}
```

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

```json
{
  "array_name": "bindings",
  "operation": "move_back",
  "where": {
    "binding_name": "#example_binding_1"
  }
}
```

#### After/Before

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

#### Swap/Replace/Remove

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

```json
{
  "array_name": "bindings",
  "operation": "remove",
  "where": {
    "binding_name": "#example_binding_1"
  }
}
```
