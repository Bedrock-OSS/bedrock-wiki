---
title: Preserve Title Texts
description: Learn how to create reusable UI elements that preserve binding data, updating only when a specific keyword is detected in the data.
category: Tutorials
tags:
    - intermediate
mentions:
    - shanewolf38
    - SmokeyStack
    - pedrodenovo
---

In this tutorial, you will learn how to create a robust and reusable UI component that preserves binding data. The element will listen for incoming data (like a title or subtitle) and only update its display when that data contains a specific keyword, ignoring all other data.

## Overview

Passing data to the UI via titles, subtitles, or scoreboards is a very common technique. However, you often need a UI element to only react to specific information, not every single title command that is run.

This guide demonstrates how to build a component that "listens" for a keyword. When it sees it, it saves the associated text and displays it. The key is creating a component that is self-contained and can be used multiple times on the same screen without conflicts.

The old methods for this often had bugs or used `global` variables, which is not ideal for reusable components. The method below uses a **`property_bag`** to ensure each component instance has its own local "memory", making it truly modular.

## The Reusable Component

The following JSON creates a `label` element that is controlled by a hidden child panel. This panel handles all the logic for detecting the keyword, saving the text, and making it available to the parent label.

### The Code

This code can be placed in any UI screen file, such as `hud_screen.json`.

<CodeHeader>RP/ui/hud_screen.json</CodeHeader>

```json
"preserved_title_display": {
    "$update_string": "update",
    "type": "label",
    "text": "#text",
    "controls": [
        {
            "data_control": {
                "type": "panel",
                "size": [0, 0],
                "property_bag": {
                    "#preserved_text": ""
                },
                "bindings": [
                    {
                        "binding_name": "#hud_title_text_string"
                    },
                    {
                        "binding_name": "#hud_title_text_string",
                        "binding_name_override": "#preserved_text",
                        "binding_condition": "visibility_changed"
                    },
                    {
                        "binding_type": "view",
                        "source_property_name": "(not (#hud_title_text_string = #preserved_text) and not ((#hud_title_text_string - $update_string) = #hud_title_text_string))",
                        "target_property_name": "#visible"
                    }
                ]
            }
        }
    ],
    "bindings": [
        {
            "binding_type": "view",
            "source_control_name": "data_control",
            "source_property_name": "(#preserved_text - $update_string)",
            "target_property_name": "#text"
        }
    ]
}
```

### How It Works

This component is divided into two main parts: the visible **`label`** (`preserved_title_display`) and a hidden **`panel`** (`data_control`) that acts as the brain.

#### The `data_control` Logic

This invisible panel does all the heavy lifting.

1.  **`property_bag`**: This is the key to making the component reusable.

    -   `"#preserved_text": ""` creates and initializes a **local variable** called `#preserved_text`.
    -   Because it's not `global`, every instance of `preserved_title_display` gets its own private `#preserved_text`, so they don't interfere with each other. This fixes the major flaw in older methods.

2.  **`visibility_changed` Binding**: This binding is the trigger for saving data. When the `data_control` panel's visibility changes, it instantly copies the current title (`#hud_title_text_string`) into our local `#preserved_text` variable.

3.  **Visibility Condition**: This binding makes the panel "flicker" (become visible for a single frame) only when the right conditions are met. Both must be true:

    -   `not (#hud_title_text_string = #preserved_text)`: Is the incoming title **different** from the one we already have saved? (Prevents running on the same title).
    -   `not ((#hud_title_text_string - $update_string) = #hud_title_text_string)`: Does the incoming title **contain** our keyword (`$update_string`)?

When a new title with the keyword arrives, the panel becomes visible, `visibility_changed` fires and saves the text, and then the visibility condition immediately becomes false again, hiding the panel.

#### The `preserved_title_display` Binding

The main label element has a simple job. It just reads the text from its child `data_control`.

-   `"source_control_name": "data_control"`: Tells the label to look at its child for data.
-   `source_property_name`: `(#preserved_text - $update_string)`: It takes the text saved in our local `#preserved_text` variable and removes the keyword (`$update_string`) before displaying it.

This creates a clean, efficient, and fully reusable component for your UI.
