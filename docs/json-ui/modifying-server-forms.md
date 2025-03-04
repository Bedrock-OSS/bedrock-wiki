---
title: Modifying Server Forms
category: Tutorials
tags:
  - intermediate
mentions:
  - TheoristMC
description: In this tutorial, you will learn how to efficiently modify server forms.
---

## Introduction

:::warning
This page is intended for people with a basic understanding of JSON-UI, you may check the [JSON UI Documentation](/json-ui/json-ui-documentation) if you haven't already.
:::

When editing server forms, it's important to make sure they're compatible with each other. This tutorial will show you how to do just that.

In this tutorial, we will be implementing this inside the `ui/server_form.json`.

### Action Form

First we need to modify the controls of `main_screen_content` in order to add our custom made one.

<CodeHeader>RP/ui/server_form.json</CodeHeader>
```json
{
  "main_screen_content": {
    "modifications": [
      {
        "array_name": "controls",
        "operation": "insert_back",
        "value": [
          {
            "wiki_server_form_factory": { // Name can be anything but cannot be the same as "server_form_factory"
              "type": "panel",
              "factory": {
                "name": "server_form_factory", // Required, this name is binded to the data given to long_form
                "control_ids": {
                  "long_form": "@server_form.our_long_form_panel"
                }
              }
            }
          }
        ]
      }
    ]
  }
}
```

You can do this multiple times but it's advised to do it once since we can just reference a main panel inside `"long_form"` which contains all our custom made forms.

<CodeHeader>RP/ui/server_form.json</CodeHeader>
```json
{
  "main_screen_content": {
    "modifications": [
      {
        "array_name": "controls",
        "operation": "insert_back",
        "value": [
          {
            "wiki_server_form_factory": { // Name can be anything but cannot be the same as "server_form_factory"
              "type": "panel",
              "factory": {
                "name": "server_form_factory", // Required, this name is binded to the data given to long_form
                "control_ids": {
                  "long_form": "@server_form.our_long_form_panel"
                }
              }
            }
          },
          {
            "wiki_server_form_factory_2": { // Name can be anything but cannot be the same as "server_form_factory" or same as the sibling element
              "type": "panel",
              "factory": {
                "name": "server_form_factory", // Required, this name is binded to the data given to long_form
                "control_ids": {
                  "long_form": "@server_form.our_long_form_panel_2"
                }
              }
            }
          }
        ]
      }
    ]
  }
}
```

Now we need to define the element `"our_long_form_panel"` which contains our all custom made forms.

<CodeHeader>RP/ui/server_form.json</CodeHeader>
```json
{
  "our_long_form_panel": {
    "type": "panel", // We can use any types but we will use panels for simplicity
    "bindings": [
      {
        "binding_name": "#title_text" // We define the title text inside the parent so we don't need to call it everytime we use it
      }
    ],
    "controls": [
      // You can reference your forms here but for now we will use an image of apple as an example
      {
        "our_custom_made_long_form": {
          "type": "image",
          "texture": "textures/items/apple",
          "size": [
            32,
            32
          ],
          "$title_needs_to_contain": "wiki_form:", // What the action form title needs to contain in order for this apple to show
          "bindings": [
            {
              "binding_type": "view",
              "source_control_name": "our_long_form_panel", // The name of our parent where we could get the #title_text binding
              "source_property_name": "(not ((#title_text - $title_needs_to_contain) = #title_text))",
              "target_property_name": "#visible"
            }
          ]
        }
      }
    ]
  },
  "main_screen_content": {
    "modifications": [
      {
        "array_name": "controls",
        "operation": "insert_back",
        "value": [
          {
            "wiki_server_form_factory": { // Name can be anything but cannot be the same as "server_form_factory"
              "type": "panel",
              "factory": {
                "name": "server_form_factory", // Required, this name is binded to the data given to long_form
                "control_ids": {
                  "long_form": "@server_form.our_long_form_panel"
                }
              }
            }
          }
        ]
      }
    ]
  }
}
```

If you've tried this, you might notice it overlaps with the normal action form. To fix this, we need to define the binding in the normal long form as well.

<CodeHeader>RP/ui/server_form.json</CodeHeader>  
```json
{
  "long_form": {
    "modifications": [
      {
        "array_name": "bindings",
        "operation": "insert_back",
        "value": [
          {
            "binding_name": "#title_text"
          },
          {
            "binding_type": "view",
            "source_property_name": "((#title_text - 'wiki_form:') = #title_text)", // We need to define the title we added on $title_needs_to_contain
            // By the way, you can also put the title of your forms as much as you want like this -> (#title_text - 'form_1' - 'form_2' - 'form_3')
            "target_property_name": "#visible"
          }
        ]
      }
    ]
  },
  "our_long_form_panel": {
    "type": "panel", // We can use any types but we will use panels for simplicity
    "bindings": [
      {
        "binding_name": "#title_text" // We define the title text inside the parent so we don't need to call it everytime we use it
      }
    ],
    "controls": [
      // You can reference your forms here but for now we will use an image of apple as an example
      {
        "our_custom_made_long_form": {
          "type": "image",
          "texture": "textures/items/apple",
          "size": [
            32,
            32
          ],
          "$title_needs_to_contain": "wiki_form:", // What the action form title needs to contain in order for this apple to show
          "bindings": [
            {
              "binding_type": "view",
              "source_control_name": "our_long_form_panel", // The name of our parent where we could get the #title_text binding
              "source_property_name": "(not ((#title_text - $title_needs_to_contain) = #title_text))",
              "target_property_name": "#visible"
            }
          ]
        }
      }
    ]
  },
  "main_screen_content": {
    "modifications": [
      {
        "array_name": "controls",
        "operation": "insert_back",
        "value": [
          {
            "wiki_server_form_factory": { // Name can be anything but cannot be the same as "server_form_factory"
              "type": "panel",
              "factory": {
                "name": "server_form_factory", // Required, this name is binded to the data given to long_form
                "control_ids": {
                  "long_form": "@server_form.our_long_form_panel"
                }
              }
            }
          }
        ]
      }
    ]
  }
}
```

And there you have it, now it shows an image of an apple without it overlapping with the normal long form.

### Modal Forms

Editing the modal forms is the same as editing long form but we need to modify multiple things. Modal Forms are called Custom Forms inside `server_form.json`.

First we need to modify the controls of `main_screen_content` in order to add our custom made one.

<CodeHeader>RP/ui/server_form.json</CodeHeader>
```json
{
  "main_screen_content": {
    "modifications": [
      {
        "array_name": "controls",
        "operation": "insert_back",
        "value": [
          {
            "wiki_server_form_factory": { // Name can be anything but cannot be the same as "server_form_factory"
              "type": "panel",
              "factory": {
                "name": "server_form_factory", // Required, this name is binded to the data given to long_form and custom_form
                "control_ids": {
                  "long_form": "@server_form.our_long_form_panel",
                  "custom_form": "@server_form.our_custom_form_panel"
                }
              }
            }
          }
        ]
      }
    ]
  }
}
```

You can do this multiple times but it's advised to do it once since we can just reference a main panel inside `"custom_form"` which contains all our custom made forms.

<CodeHeader>RP/ui/server_form.json</CodeHeader>
```json
{
  "main_screen_content": {
    "modifications": [
      {
        "array_name": "controls",
        "operation": "insert_back",
        "value": [
          {
            "wiki_server_form_factory": { // Name can be anything but cannot be the same as "server_form_factory"
              "type": "panel",
              "factory": {
                "name": "server_form_factory", // Required, this name is binded to the data given to long_form and custom_form
                "control_ids": {
                  "long_form": "@server_form.our_long_form_panel",
                  "custom_form": "@server_form.our_custom_form_panel"
                }
              }
            }
          },
          {
            "wiki_server_form_factory_2": { // Name can be anything but cannot be the same as "server_form_factory" or same as the sibling element
              "type": "panel",
              "factory": {
                "name": "server_form_factory", // Required, this name is binded to the data given to long_form and custom_form
                "control_ids": {
                  "long_form": "@server_form.our_long_form_panel_2",
                  "custom_form": "@server_form.our_custom_form_panel_2"
                }
              }
            }
          }
        ]
      }
    ]
  }
}
```

Now we need to define the element `"our_custom_form_panel"` which contains our all custom made forms.

<CodeHeader>RP/ui/server_form.json</CodeHeader>
```json
{
  "our_custom_form_panel": {
    "type": "panel", // We can use any types but we will use panels for simplicity
    "bindings": [
      {
        "binding_name": "#title_text" // We define the title text inside the parent so we don't need to call it everytime we use it
      }
    ],
    "controls": [
      // You can reference your forms here but for now we will use an image of apple as an example
      {
        "our_custom_made_custom_form": {
          "type": "image",
          "texture": "textures/items/apple",
          "size": [
            32,
            32
          ],
          "$title_needs_to_contain": "wiki_form:", // What the modal form title needs to contain in order for this apple to show
          "bindings": [
            {
              "binding_type": "view",
              "source_control_name": "our_custom_form_panel", // The name of our parent where we could get the #title_text binding
              "source_property_name": "(not ((#title_text - $title_needs_to_contain) = #title_text))",
              "target_property_name": "#visible"
            }
          ]
        }
      }
    ]
  },
  "main_screen_content": {
    "modifications": [
      {
        "array_name": "controls",
        "operation": "insert_back",
        "value": [
          {
            "wiki_server_form_factory": { // Name can be anything but cannot be the same as "server_form_factory"
              "type": "panel",
              "factory": {
                "name": "server_form_factory", // Required, this name is binded to the data given to long_form and custom_form
                "control_ids": {
                  "long_form": "@server_form.our_long_form_panel",
                  "custom_form": "@server_form.our_custom_form_panel"
                }
              }
            }
          }
        ]
      }
    ]
  }
}
```

If you've tried this, you might notice it overlaps with the normal modal form. To fix this, we need to define the binding in the normal custom form as well.

<CodeHeader>RP/ui/server_form.json</CodeHeader>  
```json
{
  "custom_form": {
    "modifications": [
      {
        "array_name": "bindings",
        "operation": "insert_back",
        "value": [
          {
            "binding_name": "#title_text"
          },
          {
            "binding_type": "view",
            "source_control_name": "((#title_text - 'wiki_form:') = #title_text)", // We need to define the title we added on $title_needs_to_contain
            // By the way, you can also put the title of your forms as much as you want like this -> (#title_text - 'form_1' - 'form_2' - 'form_3')
            "target_property_name": "#visible"
          }
        ]
      }
    ]
  },
  "our_custom_form_panel": {
    "type": "panel", // We can use any types but we will use panels for simplicity
    "bindings": [
      {
        "binding_name": "#title_text" // We define the title text inside the parent so we don't need to call it everytime we use it
      }
    ],
    "controls": [
      // You can reference your forms here but for now we will use an image of apple as an example
      {
        "our_custom_made_custom_form": {
          "type": "image",
          "texture": "textures/items/apple",
          "size": [
            32,
            32
          ],
          "$title_needs_to_contain": "wiki_form:", // What the modal form title needs to contain in order for this apple to show
          "bindings": [
            {
              "binding_type": "view",
              "source_control_name": "our_custom_form_panel", // The name of our parent where we could get the #title_text binding
              "source_property_name": "(not ((#title_text - $title_needs_to_contain) = #title_text))",
              "target_property_name": "#visible"
            }
          ]
        }
      }
    ]
  },
  "main_screen_content": {
    "modifications": [
      {
        "array_name": "controls",
        "operation": "insert_back",
        "value": [
          {
            "wiki_server_form_factory": { // Name can be anything but cannot be the same as "server_form_factory"
              "type": "panel",
              "factory": {
                "name": "server_form_factory", // Required, this name is binded to the data given to long_form and custom_form
                "control_ids": {
                  "long_form": "@server_form.our_long_form_panel",
                  "custom_form": "@server_form.our_custom_form_panel"
                }
              }
            }
          }
        ]
      }
    ]
  }
}
```

And there you have it, now it shows an image of an apple without it overlapping with the normal custom form.
