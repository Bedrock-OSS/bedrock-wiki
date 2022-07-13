---
title: String to Number
category: Tutorials
tags:
    - intermediate
mention:
    - shanewolf38
---

In this tutorial, you will learn how to convert a numerical string into a number and a number into a text string.

## Overview

There are many instances that a text string will be passed into the UI, be it through a title, actionbar, scoreboard, or some other source. When we wish to dynamically change elements based off the string that was passed in, it is very helpful to be able to do numerical comparisons. However, numerical strings such as "34" or "89" will normally be treated as text and cannot be compared to a number, only other strings. In this case, we'll need to convert that string to a number.

To convert the string to a number, we will utilize string subtraction. Subtracting any text from a numerical string, or stripping the text from a string containing a number, will cause the game to read that value as a number instead of a string.

## String to Number

The following code creates a label element that, when added to the root panel, displays the highest value in the scoreboard sidebar if that number is between 100-999.

<CodeHeader>RP/ui/hud_screen.json</CodeHeader>

```json
"string_to_number": {
    "type": "label",
    "text": "#player_score_sidebar",
    "bindings": [
        {
            "binding_name": "#player_score_sidebar",
            "binding_type": "collection",
            "binding_collection_name": "scoreboard_scores"
        },
        {
            "binding_type": "view",
            "source_property_name": "(#player_score_sidebar - 'a')",   // convert score from string to number
            "target_property_name": "#score"
        },
        {
            "binding_type": "view",
            "source_property_name": "((#score > 99) and (#score < 1000))",   // visible between 100-999
            "target_property_name": "#visible"
        }
    ]
}
```

The first binding reads the top value in the scoreboard sidebar (the binding is hardcoded as a string), the second binding converts that score to a number by subtracting a text string from it, and the third binding makes the element visible only when the score is greater than 99 or less than 1000.

**Note:** if you want the number to read as a float instead of an integer, pass a variable or binding into the equation which uses a float, such as dividing by 1.0 (it must be through a variable or binding--placing the float number directly does not work). This is especially useful for the `#clip-ratio` binding.

## Number to String

The following code creates a label element that, when added to the root panel, displays the text "a#a" when passing in a title formatted "strength: #".

<CodeHeader>RP/ui/hud_screen.json</CodeHeader>

```json
"number_to_string": {
	"type": "label",
	"text": "#text",
	"bindings": [
		{
			"binding_type": "global",
			"binding_name": "#hud_title_text_string"
		},
		{
			"binding_type": "view",
			"source_property_name": "('a' + (#hud_title_text_string - 'strength: ') + 'a')",
			"target_property_name": "#text"
		}
	]
}
```

In the case when using a title, subtitle, etc. to pass in text in combination with a number, this method will allow you to display just the number. After subtracting out the excess text to strip the string down to its number, identical text is added before and after the number to convert the value to a string (the `text` parameter cannot read a binding with a numerical value). A good method to remove the text added from the display is to wrap the element in a panel with `"clips_children": true` and appropriate sizing. 
