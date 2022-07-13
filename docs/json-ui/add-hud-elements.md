---
title: Add Hud Elements
category: Tutorials
tags:
    - beginner
mention:
    - shanewolf38
---

In this tutorial, you will learn how to add elements to the hud screen.

## Overview

The hud screen, which is shown the majority of the time in the game, displays critical information for the player. There are plenty of times you'll want to add elements onto this screen, such as pop-up text after completing certain events, a stamina bar showing how much energy the player has, a speedometer showing the player's speed, and much more! 

To add an element you've created onto the hud screen, you'll need to use the `modification` parameter to add a new `control` (element) to the `root_panel`. The root panel is a panel type element which contains nearly all of the elements displayed on the hud.

## Individual Elements

The following code creates an image element that displays a black square at the top of the screen, creates a label element which displays the text "hud text" at the top-right of the screen, and performs a modification to the `root_panel` which adds the image and label elements to the hud screen.

<CodeHeader>RP/ui/hud_screen.json</CodeHeader>

```json
"hud_square": {
	"type": "image",
	"texture": "textures/ui/Black",   // vanilla texture
	"anchor_from": "top_middle",
	"anchor_to": "top_middle",
	"size": [ 64, 64 ],
	"offset": [ 0, 4 ]
},

"hud_text": {
	"type": "label",
	"text": "hud text",
	"anchor_from": "top_right",
	"anchor_to": "top_right",
	"offset": [ -4, 4 ]
},

"root_panel": {
	"modifications": [
		{
			"array_name": "controls",
			"operation": "insert_front",
			"value": [
				{ "hud_square@hud.hud_square": {} },
				{ "hud_text@hud.hud_text": {} }
			]
		}
	]
},
```

All of the elements added to the hud screen are listed out in the `value` section of the root panel `modifications`. The namespace specified in the added elements (e.g. `@hud.hud_square`) can be changed if adding elements which exist in another namespace. If the `hud_square` element was created in the scoreboards.json UI page under the `scoreboard` namespace, for example, you would put `@scoreboard.hud_square` when adding the element to the root panel.

## Combined Elements

It is often helpful for organizational purposes to not add many elements to the root panel individually. The following code wraps the previously defined `hud_square` and `hud_text` elements (not shown) in a panel element called `hud_elements_panel` and then adds that element to the root panel of the hud screen. Effect is the same as the Individual Elements code.

<CodeHeader>RP/ui/hud_screen.json</CodeHeader>
```json
"hud_elements_panel": {
	"type": "panel",
	"controls": [
		{ "hud_square@hud_square": {} },
		{ "hud_text@hud_text": {} }
	]
},

"root_panel": {
	"modifications": [
		{
			"array_name": "controls",
			"operation": "insert_front",
			"value": [
				{ "hud_elements_panel@hud.hud_elements_panel": {} }
			]
		}
	]
},
```

The `hud_elements_panel` does not have its size parameter directly defined so that it will inherit its parent's (`root_panel`) size. This allows child anchoring, % size, etc. to work relative to the hud screen.
