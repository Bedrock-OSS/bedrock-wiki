---
title: Best Practices
category: General
nav_order: 2
tags:
    - guide
mentions:
    - LukasPAH
---

:::tip Info
This content of this article assumes that you are somewhat familiar with the JSON-UI system. If you are new to JSON-UI, be sure to familiarize yourself by reading the [JSON-UI Intro](/json-ui/json-ui-intro) and the [JSON-UI Documentation](/json-ui/json-ui-documentation).
:::

## Maximizing Compatibility and Minimizing the Likelihood of the UI Breaking

JSON-UI is different than all other addon systems, as **JSON-UI is unversioned**. Any changes that you make to the UI are subject to become broken as Mojang updates and fixes the JSON-UI system. Fortunately, there are several things that you can do to prevent your UI from breaking as Mojang makes changes to the vanilla UI.

### Only Modify What is Necessary
The most effective way to minimize the risk of your UI from breaking is to only make the changes that you are wanting to make. For example, if you only want to disable the XP bar shadow, you may think you should add this to the `hud_screen.json` file in your pack.

```json
{
    "progress_text_label": {
        "type": "label",
        "shadow": false,
        "text": "#level_number",
        "color": "$experience_text_color",
        "anchor_from": "top_middle",
        "anchor_to": "bottom_middle",
        "bindings": [
            {
                "binding_name": "#level_number",
                "binding_type": "global"
            },
            {
                "binding_name": "#level_number_visible",
                "binding_type": "global",
                "binding_name_override": "#visible"
            }
        ]
    }
}
```

This is technically correct, but this is prone to breaking for several reasons: What if Mojang changes the name of the bindings? What if they change the anchors? What if Mojang adds an offset to the element? The changes you make are strategically merged with the vanilla UI, so including the extra details are redundant and are likely to lead to your custom UI breaking. This can simply be avoided by only including the shadow property in the element:

```json
{
    "progress_text_label": {
        "shadow": false
    }
}
```

Not only is this less prone to breaking in the future, but it is also cleaner to look at and drastically reduces the file size.

By only modifying what is necessary, you are reducing the number of potential points of failure in the UI which drastically helps to prevent breaking your custom UI as the vanilla UI gets updated. As a final point, **if you are including all the contents of a vanilla UI file in your pack with your changes, you are doing JSON-UI wrong**.

### Utilize the Modification Strategies
Using the [modification strategies documented on the wiki](/json-ui/json-ui-intro#modifications) are another great way to reduce the chance of breaking changes when Mojang updates the UI. For example, many addon creators add elements to the HUD to display gameplay related information. A common tactic is to merge custom UI (`custom_ui@namespace.custom_ui`) into the root panel of `hud_screen.json`.

```json
{
    "root_panel": {
        "type": "panel",
        "$xp_control_offset|default": [ 0, -13 ],
        "variables": [
            {
                "requires": "$education_edition",
                "$left_helpers": "hud.left_helpers_edu"
            },
            {
                "requires": "(not $education_edition)",
                "$left_helpers": "hud.left_helpers"
            }
        ],
        "controls": [
            {
                "custom_ui@namespace.custom_ui": {} // <--- people tend to add custom UI here!
            },
            { "left_helpers@$left_helpers": {} },
            { "right_helpers@hud.right_helpers": {} },
            { "emote_helpers@hud.emote_helpers": {} },
            { "centered_gui_elements@centered_gui_elements": {} },
            { "centered_gui_elements_at_bottom_middle@centered_gui_elements_at_bottom_middle": {} }
            ... // the rest of the controls are continued here.
        ]
    }
}
```

By directly merging your custom controls with the vanilla root panel, you are drastically increasing the odds that the UI breaks in the future. For example, if Mojang changes the control names in the root panel in the future, your UI could reference UI elements that do not exist or are significantly changed, which *can* cause errors and/or crashing.

To avoid this, utilize the [modification strategies](/json-ui/json-ui-intro#modifications).

```json
{
    "root_panel": {
        "modifications": [
            {
                "array_name": "controls",
                "operation": "insert_front",
                "value": [
                    {
                        "custom_ui@namespace.custom_ui": {}
                    }
                ]
            }
        ]
    }
}
```

Modifications using the modifications array are strategically merged with the vanilla UI, and any other packs you are using without altering the sibling controls in the root panel. This increases compatibility with other resource packs and decreases the chance of your UI breaking.

### Avoid Modifying Controls in Nested Trees
Another common point of failure is modifying deeply nested controls. Here is an example UI element with nested controls.

```json
{
    "label": {
        "type": "label",
        "text": "hello world",
        "color": [1, 1, 1]
    },

    "bg_image": {
        "type": "image",
        "texture": "textures/ui/Black",
        "alpha": 0.7
    },

    "panel_with_label_and_bg": {
        "type": "panel",
        "size": ["100%c", "100%c"],
        "controls": [
            {
                "bg_image@bg_image": {
                    "size": ["100%c + 2px", "100%c + 2px"],
                    "controls": [
                        {
                            "label@label": {
                                "layer": 5
                            }
                        }
                    ]
                }
            }
        ]
    }
}
```

To best modify this UI, you should avoid nested trees where possible. For example, if you wanted to modify the label color to be grey instead of white and the bg image to be transparent, modify the color and opacity on the element definition rather than in the tree (remember to modify only what is needed!):

```json
{
    "label": {
        "color": [0.5, 0.5, 0.5]
    },

    "bg_image": {
        "alpha": 0
    }
}
```

However, sometimes it is not feasible to avoid modifying trees. In this case, you should use the following syntax to target specific controls in nested trees. For example, to modify the bg image size and label layer, use the following syntax.

```json
{
    "panel_with_label_and_bg/bg_image": {
        "size": ["100%c", "100%c"]
    },

    "panel_with_label_and_bg/bg_image/label": {
        "layer": -5
    }
}
```

The `/` will target a child control of the specified element. Do note that if the specified target child control name does not exist, it will cause a resource pack error. Your UI will function as normal without issue, but it is preferred to avoid targeting controls in nested trees where possible due to that.

### Utilize a Single Entry Point
In order to add custom UI to a particular screen, the UI needs to be merged with the vanilla UI at some point. This is called the entry point, and it is best practice to have your custom UI merged with the vanilla UI in a single point where possible to reduce the likelihood of the UI breaking. Here is an example that uses 2 entry points in `hud_screen.json`:

```json
{
    "root_panel": {
        "modifications": [
            {
                "array_name": "controls",
                "operation": "insert_front",
                "value": [
                    {
                        "custom_ui_control_1@namespace_1.custom_ui_control_1": {}
                    }
                ]
            }
        ]
    },

    "hud_content": {
        "modifications": [
            {
                "array_name": "controls",
                "operation": "insert_front",
                "value": [
                    {
                        "custom_ui_control_2@namespace_2.custom_ui_control_2": {}
                    }
                ]
            }
        ]
    }
}
```

We can reduce the number of entry points to one and consolidate `custom_ui_control_1` and `custom_ui_control_2` into either the `hud_content` or `root_panel` control by doing the following:

```json
{
    "root_panel": {
        "modifications": [
            {
                "array_name": "controls",
                "operation": "insert_front",
                "value": [
                    {
                        "custom_ui_control_1@namespace_1.custom_ui_control_1": {}
                    },
                    {
                        "custom_ui_control_2@namespace_1.custom_ui_control_2": {}
                    }
                ]
            }
        ]
    }
}
```
Using a single entry point reduces the likelihood of UI breaking because if Mojang updated the `hud_content` control name, some custom UI may have broken. Using a single entry point also makes your UI easier to debug since you only need to account for one entry point.

### Avoid Working in Vanilla Namespaces
If you are modifying large parts of the UI or are adding a large amount of custom UI, you should avoid working in the vanilla namespaced files where possible. You can do this by adding your custom UI file with a unique [namespace](/json-ui/json-ui-intro#namespaces) to the [UI Definition File](/json-ui/json-ui-intro#ui-defs). Remember, you can reference other elements in other namespaces by using the `element@namespace.element` syntax in the control definition when you need to merge your UI into an entry point. By adding your custom UI in a custom namespace, you are reducing the likelihood of a vanilla control name collision, which can cause issues. Additionally, like most other addon systems, a namespace can support a prefix, such as `wiki:namespace` that can be referenced as `element@wiki:namespace.element`. A prefix can also help to avoid collisions with vanilla namespaces.

## Maximizing Performance

In terms of FPS, JSON-UI is the second most costly addon subsystem behind entities. Have you ever wondered why the opening the inventory can cut your FPS in half? The short answer is that JSON-UI is incredibly unoptimized, leading to lower FPS. Adding a lot custom UI can have the potential to add **significant overhead**, leading to persistent reduced in-game frame rates, long screen loading times, and general poor user experience.

### Minimize the Number of Operators in the UI

[Operators](/json-ui/json-ui-intro#using-operators) are used in the UI to evaluate conditions, perform math, and modify strings. These operators are useful for techniques such as [conditional rendering](/json-ui/json-ui-intro#conditional-rendering), but using these **add a lot of overhead**. For example, if you have a variable `"$var": "(2 * (-1 * $number))"`, it is significantly more performant to simplify to `"$var": "(-2 * $number)"`. It is best to simplify expressions as much as possible, and remove unneeded expressions in order to speed up evaluation times as much as possible.

### Minimize the Number of Bindings in the UI
Similar to operators, using many [bindings](/json-ui/json-ui-intro#bindings) **can also add significant overhead**. Part of the reason why the settings screen takes so long to open is because all of the toggles and options are linked to specific bindings, in which there are many. Removing bindings that do not contribute to function, or can be simplified are another fantastic way to increase performance.

### Avoid Adding Unneeded Controls
Perhaps the best way to increase performance in JSON-UI is to delete unused or unnecessary controls. In this example, the child control `panel` isn't needed because it is an empty panel.

```json
{
    "element": {
        "type": "image",
        "texture": "textures/ui/Black",
        "controls": [
            {
                "panel": {
                    "type": "panel"
                }
            },
            {
                "label": {
                    "type": "label",
                    "text": "hello world"
                }
            }
        ]
    }
}
```

To fix this, you can either delete it from the UI tree or add `"ignored": true` to the `panel` control. Using `"ignored": true"` is the same as deleting it. The control and all child controls will not be evaluated in UI, leading to the same performance as if it was not there at all. **Using** `"visible": false` **does not have the same effect and the controls will still be evaluated.**

```json
{
    "element": {
        "type": "image",
        "texture": "textures/ui/Black",
        "controls": [
            {
                "label": {
                    "type": "label",
                    "text": "hello world"
                }
            }
        ]
    }
}
```
```json
{
    "element": {
        "type": "image",
        "texture": "textures/ui/Black",
        "controls": [
            {
                "panel": {
                    "type": "panel",
                    "ignored": true
                }
            },
            {
                "label": {
                    "type": "label",
                    "text": "hello world"
                }
            }
        ]
    }
}
```

Sometimes, you can simplify and consolidate multiple controls into a single element. For example, if you wanted to render a specific image based on the `#hud_title_text_string` being a specific number 1-5, you may think you should add 5 separate controls to be evaluated separately:

```json
{
    "image_template": {
        "type": "image",
        "texture": "$texture",
        "bindings": [
            {
                "binding_name": "#hud_title_text_string"
            },
            {
                "binding_type": "view",
                "source_property_name": "(#hud_title_text_string = $binding_text)",
                "target_property_name": "#visible"
            }
        ]
    },

    "image_1@image_template": {
        "$texture": "textures/ui/example_1",
        "$binding_text": "1"
    },

    "image_2@image_template": {
        "$texture": "textures/ui/example_2",
        "$binding_text": "2"
    },

    "image_3@image_template": {
        "$texture": "textures/ui/example_3",
        "$binding_text": "3"
    },

    "image_4@image_template": {
        "$texture": "textures/ui/example_4",
        "$binding_text": "4"
    },

    "image_5@image_template": {
        "$texture": "textures/ui/example_5",
        "$binding_text": "5"
    }
}
```
Taking a more thoughtful approach, this can be significantly simplified into a single control with fewer operators, bindings, and controls overall.

```json
{
    "image": {
        "type": "image",
        "texture": "#texture",
        "bindings": [
            {
                "binding_name": "#hud_title_text_string"
            },
            {
                "binding_type": "view",
                "source_property_name": "(((#hud_title_text_string * 1) > 0) and ((#hud_title_text_string * 1) < 6))",
                "target_property_name": "#visible"
            },
            {
                "binding_type": "view",
                "source_property_name": "('textures/ui/example_' + #hud_title_text_string)",
                "target_property_name": "#texture"
            }
        ]
    }
}
```

Overall, in order to improve performance of the UI, it is important to understand what exactly you are trying to do and make adjustments that fall in line with these general guidelines as much as possible. Leaving a single control unoptimized likely won't make much of a noticeable difference. However when you start leaving many controls unoptimized, performance may start to suffer on top of an already unoptimized UI system.
