---
title: Creating Custom Toggles
category: Tutorials
tags:
  - beginner
mentions:
  - TheoristMC
description:
---

## Overview

:::warning
This page is for people that has a basic understanding of JSON-UI, you may check the [JSON UI Documentation](/json-ui/json-ui-documentation) if you haven't.
:::

"How to create custom buttons?" is one of the commonly asked questions when it comes to JSON-UI. Today, you will learn how they work and how to create them.

There are currently two types of buttons: Toggles and Buttons (although a toggle is different, it functions similarly). We'd focus on toggles since they are way more customizable.

## Toggles

<CodeHeader>*/ui/your_file.json</CodeHeader>
```json
"toggle_template": {
  "type": "toggle",

  "$toggle_name|default": "Tutorial",
  "$toggle_default_state|default": false,
  
  "toggle_name": "$toggle_name", // Adviseable to make toggle name's be different on each toggles
  "toggle_default_state": "$toggle_default_state" // Is boolean, the default state of toggle

  "sound_name": "random.click", // Sound when a toggle is clicked
  "sound_volume": 1.0 // Sound volume
  "sound_pitch": 1.0 // Sound pitch
  
  "checked_control": "@namespace.img_element", // When toggle is checked
  "unchecked_control": "@namespace.img_element", // When toggle is unchecked
  "checked_hover_control": "@namespace.img_element", // When toggle is checked and hovered
  "unchecked_hover_control": "@namespace.img_element", // When toggle is unchecked and hovered
  "checked_locked_control": "@namespace.img_element", // When toggle is checked and locked
  "unchecked_locked_control": "@namespace.img_element", // When toggle is unchecked and locked 
  "checked_locked_hover_control": "@namespace.img_element", // When a locked and checked toggle is hovered
  "unchecked_locked_hover_control": "@namespace.img_element", // When a locked and unchecked is hovered

  "$use_grouped_toggle|default": false,
  "$toggle_group_index|default": 0,

  "radio_toggle_group": "$use_grouped_toggle" // Is boolean, when used will allow grouped toggles on which case only one toggle can be toggled
  "toggle_group_forced_index": "$toggle_group_index" // It's indices of each toggle that differentiates one to the other

  // Button mapping to do something when the toggle is clicked
  // It can also be used for keybinding
  "button_mappings": [
    {
      "from_button_id": "button.menu_select",
      "to_button_id": "button.menu_select",
      "mapping_type": "pressed"
    },
    {
      "from_button_id": "button.menu_ok",
      "to_button_id": "button.menu_ok",
      "mapping_type": "focused"
    }
  ]
}
```
There are way more properties but i don't want you guys learning useless terms as a beginner.
<br>
<br>
Now it's a bit overwhelming to see but it's very easy to understand. Trust me, you're not in the very deep of JSON-UI yet.
<br>
<br>
Now each properties are labeled as what they do but it does not end there, well in order for a toggle to be custom, it must toggle a custom element and that's where panels and bindings come along:

<CodeHeader>*/ui/your_file.json</CodeHeader>
```json
"main_toggle_template": {
  "type": "panel", // Element being panel is optional but panel is adviseable
  
  "$toggle_state_reference|default": "tutorial_toggle", // A name reference for our toggle that can be used to track toggle's state
  "$template_toggle": "namespace.toggle_template", // Toggle template we want to use

  "controls": [
    {
      "$toggle_state_reference@$template_toggle"
    }
  ]
}
```

You're probably confused is to why we reference our toggle on another element, the thing is with that reference name, we can now actually receive data about toggle state! Wether turned off or on.

You can see it here being used as an example:

<CodeHeader>*/ui/another_one_of_your_file.json</CodeHeader>
```json
"our_toggle@namespace.main_toggle_template": {
  "$toggle_state_reference": "wiki_tutorial_toggle",

  "size": [ 120, 24 ]
},

"our_toggled_element": {
  "type": "image",
  "texture": "textures/items/apple",

  "size": [ 32, 32 ],

  "bindings": [
    {
      "binding_type": "view",
      "source_control_name": "wiki_tutorial_toggle", // As you can see we clearly referenced it from our toggle
      "source_property_name": "#toggle_state", // Is the binding for toggle's state, it returns boolean and can be used for alot of things
      "target_property_name": "#visible" // Now our toggle that returns boolean toggles our image visibility that accepts boolean
    }
  ]
}
```
There you go! You now created a toggle-able image of an apple!

If you're curious as how does `source_control_name` works, it's a bit complicated to be explained on this topic but think of it as a receiver that receives a data binded by the element name we want to get data of.
