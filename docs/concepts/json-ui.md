---
layout: page
title: JSON UI
parent: Concepts
---

# JSON UI

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

Apart: the files can have any extension since the will always be read as if they were a JSON file.

## Global Variables

Let's say you have a variable `"$info_text_color": [0.8, 0.8, 0.8]` that stores a color for the information texts.
If you use the same value in multiple files instead of repeatedly writing `"color": [0.8, 0.8, 0.8]` you can just reference the variable (`"color": "$info_text_color"`) and put the variable on the `_global_variables.json` file.
Another good advantage of doing that is you only need to change in one place and all the elements that use the variable will have the value updated.

<CodeHeader>RP/ui/\_global_variables.json</CodeHeader>

```json
{
	"$info_text_color": [0.8, 0.8, 0.8]
}
```

<CodeHeader>RP/my_ui/file1.json</CodeHeader>

```json
{
  "some_info": {
    ...
    "text": "Hey",
    "color": "$info_text_color"
  }
}
```

<CodeHeader>RP/my_ui/file2.json</CodeHeader>

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

Namespaces are identifiers for the UI files. They are used to access elements in some file across all other files.
They must be unique and short if possible because you may use it a lot of times.

An example:
<CodeHeader>RP/ui/file_a.json</CodeHeader>

```json
{
  "namespace":"stuff",
  ...
  "foobar": {...} // some UI element
}
```

<CodeHeader>RP/ui/file_b.json</CodeHeader>

```json
{
  "fizzbuzz@stuff.foobar": {...}
  // "fizzbuzz" extends "foobar" from "stuff" namespace
}
```

## Screens

Screen files contain UIs which are shown in appropriate situations:

-   `hud_screen` is used in HUD
-   `inventory_screen` is used in Inventory screen
-   etc.

All files are pretty self-explanatory. An important thing to notice is that **different screens can access different variables**. More about that later.

## UI Elements

All the elements must have the `type` property because its value will define what kind of element it is.

Here's an example:

<CodeHeader>RP/ui/example_file.json</CodeHeader>

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

So, what are variables and how can elements derive from others?

### Variables

Everything that has `$` as the first letter of its name is a variable.
Variables can store numbers, booleans, strings and arrays.

<CodeHeader>RP/ui/example_file.json</CodeHeader>

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

<CodeHeader>RP/ui/example_file.json</CodeHeader>

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

Any property you add to the derive element will completely replace the superior one.
Also you can use a string variable after `@`, its value will be interpreted as a superior element name. You may use it before `@` as well, its value will become the derived element name.

## Animations

`offset` animation example.
<CodeHeader>RP/ui/example_file.json</CodeHeader>

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

`Wait` animation example. It's used when you want no animation between two other animtions.
<CodeHeader>RP/ui/example_file.json</CodeHeader>

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

Instead of saying `"offset": "@..."`, `"size": "@..."`, `"alpha": "@..."`, etc, you can reference the animations that will be applied to the element using the `anims` property.
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

Here's an example of an label using a hardcoded text.
The `text` property value is `#hardtext`. By using `bindings` I can get the value of the hardcoded variable `#hardtext` so it can be used by the `text` property.
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

In this case the value of `#hardtext` is assigned to the `#text` binding property name that will then be assigned to the `text` property.

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

`#using_touch` and `#play_button_enabled` in this case store boolean values. If you're playing in a touch device `#using_touch` will be `true` else `false`. `#play_button_enabled` is used in `Add External Server` screen. So in this case it will be `true` if all text fields (`server name`, `server ip` and `server_port`) have text inside them. <br>
So the `#using_touch` value will override the `#visible` binding property value which, in this case, is also a property (`#visible` is used inside `property_bag` which would be the same as setting `visible` to something).
And `#play_button_enabled` will override the `#enabled` binding property value which will then set its value to `enabled` property.

Let's say you want to show a panel with some content when a specific toggle is selected/checked. You'll need a different type of binding structure.
We have to tell what's the source element where the value will come from, tell which property of that source element we want to get the value from and which property we want to override its value.

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

When the toggle is checked the `#toggle_state` will be checked (`1` or `true`) and it will override the `visible` property value of the element to true. When you uncheck it will be unchecked (`0` or `false`) and once again override the `visible` value.

## Button Mappings

## Modify Vanilla
