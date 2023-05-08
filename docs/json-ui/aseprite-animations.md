---
title: Aseprite Animations
category: Tutorials
---

## Introduction to Aseprite

[Aseprite](https://www.aseprite.org/) is a paid pixel art application specifically designed for creating skins and resource packs with ease. It offers a wide array of tools, extensive documentation, and tutorials, catering to artists of all skill levels.

[LibreSprite](https://www.libresprite.github.io/) is a free and open-source alternative to Aseprite. It is a fork of the last open-source licensed version of Aseprite, and this tutorial can also be followed using LibreSprite.

## Creating an Animation in Aseprite

Suppose you have a series of frame images named "frameimage" with sequential numbers from 1 to 5. Import the first image, and Aseprite will automatically recognize the other images with the same name but different numbers. It will then place them in the correct order and create an animation.

<FolderView
:paths="[
    'frameimage1.png',
    'frameimage2.png',
    'frameimage3.png',
    'frameimage4.png',
    'frameimage5.png'
]"
></FolderView>

Use the `arrow keys` to navigate through all frames and the `enter` key to play or pause the animation. Press the `tab` key to open the timeline and select individual frames. Right-click a frame in the timeline to access various settings.

To export the animation, use the shortcut `Ctrl + E` or navigate to `File -> Export to Sprite Sheet`. In the output settings, select the Output file and the JSON Data. You'll see a dropdown menu with Hash and Array options. Ensure the Array option is selected, or the export will not work properly.

You should now have two files: the SpriteSheet image and a JSON file. Ensure both files have the same name but different extensions.

## Using Aseprite Animations in JSON-UI

The `aseprite_flip_book` animation type can only be used for the `uv` property in an element of the type `image`.

<CodeHeader>RP/ui/example_file.json</CodeHeader>
```json
{
	"image_element": {
		"type": "image",
		"texture": "textures/ui/my_sprite_file",
		"uv_size": [32, 32],
		"uv": "@example_namespace.image_uv_animation"
	},

	"image_uv_animation": {
		"anim_type": "aseprite_flip_book",
		"initial_uv": [0, 0]
	}
}
```

Set the `texture` field to the path of the exported files without the extension. The `uv_size` field should be set to the width and height of a single frame.