---
title: Preserve Title Texts
category: Tutorials
tags:
    - intermediate
mentions:
    - shanewolf38
---

In this tutorial, you will learn how to preserve binding data and update elements based on titles containing specific strings.

## Overview

Titles are a very common method used to pass data into the UI system. It is very helpful to have elements that will only update this data when titles containing specific strings are passed in, ignoring all other titles that do not contain that string. Despite the name of this tutorial, this method will work for any data that is passed in through a binding (such as subtitles, player scoreboard names, etc.), not just titles.

To save specific strings, the `visibility_changed` binding update condition is used in combination with `source_control_name` to update a binding only when a specific string is included and then pass that binding to another element.

## Title Command

The following code creates a label element that, when added to the root panel, displays the title on the screen when that title includes the string "update" in it (the "update" text is removed from the text displayed). Any title passed after will only update the displayed text if the string "update" is included in it.

<CodeHeader>RP/ui/hud_screen.json</CodeHeader>

```json
"preserved_title_display": {
	"$update_string": "update",   // title must include this string to update the element
	"type": "label",
	"text": "#text",
	"controls": [
		{
			"data_control": {
				"type": "panel",
				"size": [ 0, 0 ],
				"bindings": [
					{
						"binding_name": "#hud_title_text_string"      // reads in the current title string
					},
					{
						"binding_name": "#hud_title_text_string",
						"binding_name_override": "#preserved_text",   // updates #preserved_text when visibility of this element changes
						"binding_condition": "visibility_changed"
					},
					// element becomes visible then immediately turns invisible when a title containing the update string is passed
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
			"source_control_name": "data_control",   						// reads bindings from the "data_control" child element
			//"resolve_sibling_scope": true,		 						// required if "data_control" is a sibling of the element that pulls the binding
			"source_property_name": "(#preserved_text - $update_string)",   // remove string update text from the text to be displayed
			"target_property_name": "#text"
		}
	]
},
```

The variable `$update_string` defines the specific string that must be included in the title command for this element to update. The child element `data_control` is used to preserve the title text whenever it includes the update string. This must be a child or sibling element of the element the preserved text is passed, as the visibility of the `data_control` element must change to save the text. The first binding in the element will keep track of the current title text, the second binding will save the current title text to the `#preserved_text` binding whenever the visibility of the element changes, and the third binding will make the element visible and then immediately turn it invisible when a title including the update string is passed.

The third binding in the `data_control` element has two main parts, both of which must be true for the element to be visible.
1. `not (#hud_title_text_string = #preserved_text)` - becomes true whenever the current title text does not match the preserved title text
2. `not ((#hud_title_text_string - $update_string)` - becomes true when the current title text includes the update string

When a title containing the update string is passed which differs from the currently preserved text, both parts become true and the element updates. The preserved text is then updated and the first part immediately becomes false, turning the element invisible.
