---
title: Intro to JSON UI
nav_order: 1
tags:
    - guide
---

## Introduction

All editable vanilla UI files are stored in `RP/ui/` in `.json` files.

They can be divided into three groups:

-   System files:
    -   `_global_varibles.json` - for variables used in multiple files
    -   `_ui_defs.json` - for referencing the files used on the UI.
-   Screens:
    -   `hud_screen.json`
    -   `inventory_screen.json`
    -   etc.
-   Additional files: (templates, like `ui_common.json`, `ui_templates_*.json` etc.

## UI Defs

In `_ui_defs.json` you add all the files that will be used on the UI.

Imagine I created the files `RP/ui/button.json` and `RP/my_ui/main_menu.json`:

<CodeHeader>RP/ui/\_ui_defs.json</CodeHeader>

```json
{
	"ui_defs": ["ui/button.json", "my_ui/main_menu.json"]
}
```

Three things to notice:

-   You have to add the whole directory starting from the RP folder
-   You can have files wherever you want. Even `RP/textures/folder_1/papers/sound/scrollpane.json`
-   The `_ui_defs.json` in your RP doesn't need to have the vanilla files because all related UI files will not be replaced. Only overwritten.

The files can have any extension since they will always be read as JSON files.

## Global Variables

Let's say you have a variable `"$info_text_color": [0.8, 0.8, 0.8]` that stores a color for the information texts.
If you use the same value in multiple files instead of repeatedly writing `"color": [0.8, 0.8, 0.8]`, you can just reference the variable (`"color": "$info_text_color"`) and put the variable on the `_global_variables.json` file.
Another good advantage of doing that is you only need to change in one place, and all the elements that use the variable will have the value updated.

<CodeHeader>RP/ui/\_global_variables.json</CodeHeader>

```json
{
	"$info_text_color": [0.8, 0.8, 0.8]
}
```

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

## Namespaces

Namespaces are identifiers for the UI files. They are used to access elements in some files across all other files.
They must be unique and short if possible because you may use them a lot of times.

An example:
<CodeHeader>vanilla/ui/file_a.json</CodeHeader>

```json
{
  "namespace":"stuff",
  ...
  "foobar": {...} // some UI element
}
```

<CodeHeader>vanilla/ui/file_b.json</CodeHeader>

```json
{
  "fizzbuzz@stuff.foobar": {...}
  // "fizzbuzz" extends "foobar" from "stuff" namespace
}
```

## Screens

Screen files contain UIs which are shown in appropriate situations:

-   `hud_screen` is used in HUD
-   `inventory_screen` is used in the Inventory screen
-   etc.

All files are pretty self-explanatory. An important thing to notice is that **different screens can access other variables**. More about that later.

## UI Elements

All the elements must have the `type` property because its value will define what kind of element it is.

Here's an example:

<CodeHeader>vanilla/ui/example_file.json</CodeHeader>

```json
{
  ...
  "example_element": {
    "type": "label",
    "text": "Hello World"
    ...
  }
  ...
}
```

Here the element is `type` `label`. So it will render a text.

## Notations

So, what are variables, and how can elements derive from others?

### Variables

Everything that has `$` as the first letter of its name is a variable.
Variables can store numbers, booleans, strings, and arrays.

<CodeHeader>vanilla/ui/example_file.json</CodeHeader>

```json
{
  "cool_element": {
    ...
    "$foo": 100,         // a number variable
    "$bar": "string",    // a string variable
    "$arr": [10, 10],     // an array variable
    "$elem": "my_button.template_button" // a string pointing at the element
    ...
    // How to use
    "size": "$arr"           // puts the value of $arr into the size property
    "text": "$bar"   // sets text to the value of $bar
    "controls": [
      { "tplt_element@$elem": {} }
    ]
  }
}
```

### Deriving

To derive some element from another you should use `new@super` notation. An example:

<CodeHeader>vanilla/ui/example_file.json</CodeHeader>

```json
{
  "foobar": {
    ...
    "color": "white",
    "$cool_variable": 777,
    "$fixbugs": false
  },

  // "fizzbuzz" extends "foobar"
  // and replaces $cool_variable value with 666.
  // $fixbugs is still false for fizzbuzz, because it wasn't changed
  "fizzbuzz@foobar": {
    "color": "red",
    "$cool_variable": 666
  }
}
```

Any property you add to the derived element will completely replace the superior one.
Also, you can use a string variable after `@`. Its value will be interpreted as a superior element name. You may use it before `@` as well. Its value will become the derived element name.

## Animations

`offset` animation example.
<CodeHeader>vanilla/ui/example_file.json</CodeHeader>

```json
{
  "namespace": "example_nm",

  "anim_offset": {
    "anim_type": "offset",
    "from": [0, 0],
    "to": [10, 10],
    "duration": 2
  },

  "element": {
    ...
    "offset": "@example_nm.anim_offset"
  }
}
```

`Wait` animation example. It's used when you want no animation between two other animations.
<CodeHeader>vanilla/ui/example_file.json</CodeHeader>

```json
{
  "namespace": "example_nm",

  "anim_size_0": {
    "anim_type": "size",
    "from": ["100%", 27],
    "to": ["100% + 3px", 30],
    "duration": 1.25,
    "next": "@example_nm.anim_wait"
  },

  "anim_wait": {
    "anim_type": "wait",
    "duration": 1,
    "next": "@example_nm.anim_size_1"
  },

  "anim_size_1": {
    "anim_type": "size",
    "from": ["100% + 3px", 30],
    "to": ["100%", 27],
    "duration": 1.25,
    "next": "@example_nm.anim_size_0"
  },

  "element": {
    ...
    "size": "@example_nm.anim_size_0"
  }
}
```

`flip_book` animation example.
<CodeHeader>RP/ui/example_file.json</CodeHeader>

```json
{
  "namespace": "example_nm",

  "anim_flip_book": {
    "anim_type": "flip_book",
    "initial_uv": [0, 0],
    "frame_count": 50,
    "frame_step": 1,
    "fps": 15
    ...
  },

  "image": {
    ...
    "uv": "@example_nm.anim_flip_book"
  }
}
```

Instead of saying `"offset": "@..."`, `"size": "@..."`, `"alpha": "@..."`, etc., you can reference the animations that will be applied to the element using the `anims` property.
<CodeHeader>RP/ui/example_file.json</CodeHeader>

```json
{
  "namespace": "example_nm",

  "anim_size": {
    "anim_type": "size",
    "from": ["100%", 27],
    "to": ["100% + 3px", 30],
    "duration": 1.25,
    "next": "@..."
  },

  "anim_alpha": {
    "anim_type": "alpha",
    "from": 1,
    "to": 0.5,
    "duration": 2,
    "next": "@..."
  },

  "element": {
    ...
    "anims": [
      "@example_nm.anim_size",
      "@example_nm.anim_alpha"
    ]
  }
}
```

## Operators

| Operator Name         | Operator | Examples                                                                      |
| --------------------- | -------- | ----------------------------------------------------------------------------- |
| Addiction             | +        | `"100% + 420px"` `($text + ' my')` `($index + 2)` `('#' + $bdg_nm + '_name')` |
| Subtraction           | -        | `"100% - 69px"` `($text - ' my')` `($index - 13)`                             |
| Division              | /        | `($var / 12)` `(#value / 2)`                                                  |
| Equal to              | =        | `($var = 12)` `($var = 'this_text')` `(#name = 'Wither')`                     |
| Greater than          | >        | `(#value > 13)`                                                               |
| Less than             | <        | `($var < 4)`                                                                  |
| Greater or equal than | > or =   | `(#value > 2 or #value = 2)`                                                  |
| Less or equal than    | < or =   | `(#value < 2 or #value = 2)`                                                  |
| Logical AND           | and      | `($is_school and $is_open)`                                                   |
| Logical OR            | or       | `($is_cool or $is_awesome)`                                                   |
| Logical NOT           | not      | `(not #name)` `(not #name = 'text')`                                          |

## Bindings

`bindings` is used to bind a hardcoded value to the element and use it for conditions, for example.

Here's an example of a label using a hardcoded text.
The `text` property value is `#hardtext`. By using `bindings`, I can get the value of the hardcoded variable `#hardtext` so the `text` property can use it.
Here it's directly assigning the `#hardtext` value to the `text` property.
<CodeHeader>RP/ui/example_file.json</CodeHeader>

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

Talking more about the `label` example, it can also appear in another way. Let's see:

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

```json
{
  "panel": {
    ...
    "bindings": [
      {
        "binding_type": "view",
        "source_control_name": "my_toggle", // the name of the source element
        "source_property_name": "#toggle_state" // We want this property value which tells in which state the toggle is in
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

The `ignored` property is used to conditionally render a UI control when working with variables that carry bedrock engine data. Consider the below example. The `ignored` property added is the same as saying "ignore the text label if the actionbar text is equal to `hello world`".

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
          "ignored": "($actionbar_text = 'hello world')" // ignore the text label if the actionbar text is equal to "hello world"
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
	"hud_actionbar_text/actionbar_message": {
		"ignored": "($actionbar_text = 'hello world')"
	}
}
```

When you log into a world with the resource pack enabled, try executing `/title @s actionbar hello world`. You should notice that no message appears! Running any other actionbar title should show the other messages.

Here's a more complicated example of conditional rendering with variables. In this case, it is necessary to use the actionbar factory as it turns out the `$actionbar_text` data is only accessible in the factory controls.

<CodeHeader>RP/ui/hud_screen.json</CodeHeader>

```json
{
	"black_conditional_image": {
		"type": "image",
		"texture": "textures/ui/Black",
		"size": [16, 16],
		"layer": 10,
		"ignored": "(not ($actionbar_text = 'hello world'))"
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

The above example shows a 16x16 black square on the HUD screen when the actionbar text string is equal to `hello world`. You may also apply animations to your image to make it more dynamic. Conditional rendering with variables is not limited to images and labels. You may use any object type in conditional rendering with variables. You can imagine pairing your UI code with the actionbar text allows for a high degree of manipulation of JSON UI (at least in `hud_screen.json`). The `ignored` property has support for UI operators, so you have even more control. Anywhere where there is a variable that carries bedrock engine data allows for conditional rendering with variables.

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

## Button Mappings

## Modify Vanilla
