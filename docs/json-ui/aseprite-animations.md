---
title: Aseprite Animations
category: Tutorials
---

## What is Aseprite?

[Aseprite](https://www.aseprite.org/) is a purchasable art application designed with pixel-art in mind.
It contains many tools that can help make skin and resource pack creation easier.
Aseprite also has significant documentation and tutorials to help artists of all skill levels use the application effectively.

## Creating an Animation in Aseprite

Let's say our frame images are called: "frameimage" and we have five images from 1 to 5.
You can import the first one, and Aseprite will recognize there are multiple images with the same name but different numbers.
Aseprite will put these in the correct order and make it an animation.

<FolderView
:paths="[
    'frameimage1.png',
    'frameimage2.png',
    'frameimage3.png',
    'frameimage4.png',
    'frameimage5.png'
]"
></FolderView>

You can navigate through all frames using your `arrow keys` on your keyboard.
You can play/pause the animation with your `enter` key.

By clicking on `tab` key, you can popup the timeline to select the frame by frame.
You can right-click the frame in this timeline to change different settings.

To export this animation to the correct files, you can use `Ctrl + E` or `File -> Export to Sprite Sheet.`
For the output settings, select the Output file and the JSON Data.
You will also see a dropdown input with a Hash and Array option.
You have to make sure this is set to array, or this will not work.

Now you have your files you need.
You'll have 2 files now, the SpriteSheet image and a json image.

## Aseprite Animations in JSON-UI

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
