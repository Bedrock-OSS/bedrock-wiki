---
title: Add Custom Buttons
category: Tutorials
tags:
    - beginner
mentions:
    - TheoristMC
---

In this tutorial, you will learn how toggles/buttons works, how will you add them and their differences.

## Overview

"How to make/put buttons" is one of the commonly asked questions when it comes to JSON-UI. Today, you will learn how they work and how to create them.

There are currently two types of buttons: Toggles and Buttons (although a toggle is different, it functions similarly).

## Toggles

The following code will create a toggle that is referenced from a vanilla file(`ui/ui_template_toggles.json`). After clicking the toggle, it will show the `toggled_image` we created.

<CodeHeader>RP/ui/your_file.json</CodeHeader>

```json
"custom_toggle@common_toggles.light_text_toggle": {
  "$toggle_name": "our_toggle",
  "$button_text": "Template Toggle",
  "size": [90, 15],
  "$toggle_view_binding_name": "view_toggle"
},

"toggled_image": {
  "type": "image",
  "texture": "textures/items/apple",
  "size": [32, 32],
  
  "bindings": [
    {
      "binding_type": "view",
      "source_control_name": "view_toggle",
      "source_property_name": "#toggle_state",
      "target_property_name": "#visible"
    }
  ]
}
```

-   `$toggle_name` is the name of our toggle (can be optional)
-   `$toggle_view_binding_name` is the main key part of our toggle since it's the one that toggles our element.
-   In `source_control_name` we get the state of our toggle via the `$toggle_view_binding_name`.
-   In `source_property_name` we get the `#toggle_state` binding that we got from our toggle. (Note: it returns boolean)

What if we want the image to be closed instead of opening it?

We just change the equation from `source_property_name` to `(not #toggle_state)`

## Buttons

The following code creates a button that is referenced from a vanilla file(`ui/ui_template_buttons`). 

Buttons have hardcoded button ID's meaning we can only use the vanilla ID's no custom ID's. An exception for this is if the button is used as animation player.

<CodeHeader>RP/ui/your_file.json</CodeHeader>

```json
"custom_button@common_buttons.light_text_button": {
  "$pressed_button_name": "button.menu_exit",
  "$button_text": "Exit the game",
  "size": [90, 15]
}
```

-   `$pressed_button_name` is our main key part. As you can see i used one of hardcoded button ID's which shows a pop-up to exit the game.

## Buttons VS. Toggles

When deciding between buttons and toggles, consider the action you want to perform. Buttons are suitable for discrete actions like "Exit the game" while toggles are for switching states like turning on/off a setting. Choose buttons for singular actions and toggles for state changes.
