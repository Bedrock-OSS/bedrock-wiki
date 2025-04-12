---
title: Buttons and Toggles
category: Tutorials
tags:
  - beginner
mentions:
  - TheoristMC
description: In this tutorial, you will learn how toggles works.
---

## Introduction

:::warning
This page is intended for people with a basic understanding of JSON-UI, you may check the [JSON UI Documentation](/json-ui/json-ui-documentation) if you haven't already.
:::

Creating custom buttons or toggles is a common question regarding JSON-UI. This guide explains how they work and provides step-by-step instructions for creating them.

For this tutorial, we will use the existing vanilla buttons and toggles for simplicity.

### Toggles

In this example, we will reference `ui/ui_template_toggles.json`

<CodeHeader>RP/ui/your_file.json</CodeHeader>
```json
{
  "our_toggle@common_toggles.light_text_toggle": {
    "size": [
      64,
      32
    ],
    "$button_text": "Click me!",
    "$toggle_name": "wiki_toggle", // Required, but it has no effect unless a hardcoded toggle name is used.
    "$toggle_view_binding_name": "wiki_toggle_state" // The toggle name that allows us to retrieve data.
  }
}
```

And that's it! You now have a working toggle. You can test it by adding it to any screen.

Additionally, you can utilize toggles to control the visibility of UI elements.

<CodeHeader>RP/ui/your_file.json</CodeHeader>
```json
{
  "our_toggle@common_toggles.light_text_toggle": {
    "size": [
      64,
      32
    ],
    "$button_text": "Click me!",
    "$toggle_name": "wiki_toggle", // Required, but it has no effect unless a hardcoded toggle name is used.
    "$toggle_view_binding_name": "wiki_toggle_state" // The toggle name that allows us to retrieve data.
  },
  "our_image": {
    "type": "image",
    "texture": "textures/items/apple",
    "size": [
      16,
      16
    ],
    "offset": [
      0,
      20
    ],
    "bindings": [
      {
        "binding_type": "view",
        "source_control_name": "wiki_toggle_state", // // The toggle name specified in the $toggle_view_binding_name
        "source_property_name": "#toggle_state", // The binding data that returns the toggle state as a boolean value
        "target_property_name": "#visible"
      }
    ]
  }
}
```

### Buttons

Generally, buttons have limited functionality, as they are primarily used in hardcoded instances, such as navigating to a screen or opening a dialog.

In this example, we will reference `ui/ui_template_buttons.json`

<CodeHeader>RP/ui/your_file.json</CodeHeader>
```json
{
  "our_button@common_buttons.light_text_button": {
    "size": [
      64,
      32
    ],
    "$button_text": "Click me!",
    "$pressed_button_name": "button.menu_exit" // Required, you can put in any global button names or hardcoded button names.
  }
}
```

And that's it! You now have a working button, clicking on it exits you to the current screen you're in. You can test it by adding it to any screen.

## Advanced Buttons and Toggles

### Hover Text

In order to make buttons that shows a text when you hover into it, we will need to use **Content Buttons**.

In this example, we will reference `ui/ui_template_buttons.json` and `ui/ui_common.json`

<CodeHeader>RP/ui/your_file.json</CodeHeader>
```json
{
  "our_button@common_buttons.light_content_button": {
    "size": [
      18,
      18
    ],
    "$button_content": "namespace.our_button_content_panel", // Reference our content element.
    "$pressed_button_name": "button.menu_exit" // Required, you can put in any global button names or hardcoded button names.
  },
  "our_button_content_panel": {
    "type": "panel",
    "controls": [
      {
        "our_image": {
          "type": "image",
          "texture": "textures/items/apple",
          "size": [
            16,
            16
          ]
        }
      },
      {
        // You can use any element but we'll just use the hover text when you hover an item in-game.
        "our_hover_text@common.hover_text": {
          "ignored": "$default_state", // Required, this will make the element not visible if the button is in a default state or isn't hovered.
          "property_bag": {
            "#hover_text": "" // You can put your text here. It doesn't support localizing so if that's what you are looking to do, create a custom hover text.
          }
        }
      }
    ]
  }
}
```

### Play Animation

If you want to play an animation when you click a button, you have to use `$pressed_button_name` in your animation's `play_event` property.

For example:

<CodeHeader>RP/ui/your_file.json</CodeHeader>
```json
{
    "example_animation": {
        "anim_type": "offset",
        "easing": "linear",
        "duration": 2,
        "from": [
            0,
            0
        ],
        "to": [
            -50,
            0
        ],
        "play_event": "button.example_button_id"
    },
    "example_button@common_buttons.light_text_button": {
        "$pressed_button_name": "button.example_button_id", // use this button id in play_event property of your animation
        "$button_text": "Play Animation",
        "size": [
            80,
            20
        ]
    },
    "example_label": {
        "type": "label",
        "text": "Example Text",
        "anims": [
            "@namespace.example_animation" // add your animation here
        ],
        "anchor_from": "top_right",
        "anchor_to": "top_right"
    }
}
```
