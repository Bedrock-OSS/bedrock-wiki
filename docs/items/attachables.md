---
title: Attachables Tutorial
category: Tutorials
tags:
	- beginner
---

::: tip
This tutorial assumes you have a basic understanding of MoLang, render controllers, animations, and client entity definitions. Ensure to check out the [client entity tutorial](/entities/entity-intro-rp) before starting this tutorial!
:::

## Introduction

When we design a custom item or block, Minecraft will build a model from a template so the item can be displayed when held. This takes the form of the item's sprite being an extruded texture mesh, or blocks displaying with their model. But by using a system called **attachables** we can design our own models to be displayed when these items are held.

Ever wanted sticks to look like spyglasses? Or to wield a big chainsaw with a spinning chain? Attachables are the way to accomplish that!

By the end of this tutorial, you should be able to:

<Checklist>

-   [ ] Understand how attachable definitions are made
-   [ ] Make or edit a geometry to be compatible for attachables
-   [ ] Set up animations to display the geometry in Minecraft

</Checklist>

## Overview

Attachable files are quite similar in design to client entity definitions; they let us define textures, materials, geometries, and animations to display the attachable.

Here's a basic example of an attachable, which we will be using throughout this tutorial, that makes a stick look like a spyglass:

<CodeHeader>RP/attachables/stick.json</CodeHeader>

```json
{
	"format_version": "1.10.0",
	"minecraft:attachable": {
		"description": {
			"identifier": "minecraft:stick",
			"materials": {
				"default": "entity",
				"enchanted": "entity_alphatest_glint"
			},
			"textures": {
				"default": "textures/entity/spyglass",
				"enchanted": "textures/misc/enchanted_item_glint"
			},
			"geometry": {
				"default": "geometry.spyglass"
			},
			"animations": {
				"wield": "animation.spyglass.holding"
			},
			"scripts": {
				"animate": [
					"wield"
				]
			},
			"render_controllers": [
				"controller.render.item_default"
			]
		}
	}
}
```

If you work with entities often, this should look pretty familiar. A couple of key things to point out with attachable definitions:
- The attachable's identifier matches an existing item identifier. Any items or blocks with that ID will use the corresponding attachable.
- There is a material and texture listed for the enchantment glint. This is important to keep around if your item should have the glint when enchanted.

Making attachables is more involved than making a client entity file though, as the geometry needs to be set up a certain way and animations are tricky to set up.

![](/assets/images/tutorials/attachables/attachable-example.png)

*That would hurt if you put that in your eye.*

## Geometry

For this tutorial's demonstration, a model of Steve's head will be used. The same principles can be applied to any custom model you want to use.

<BButton link="https://github.com/Bedrock-OSS/bedrock-wiki/blob/wiki/docs/public/assets/packs/tutorials/attachables/steve_head.geo.json?raw=true">📄 Steve head model</BButton>

In the attachable file, change the geometry name to `"geometry.steve_head"` and the default texture path to `"textures/entity/steve"`:

<CodeHeader>RP/attachables/spyglass.json</CodeHeader>

```json
"textures": {
	"default": "textures/entity/steve",
	"enchanted": "textures/misc/enchanted_item_glint"
},
"geometry": {
	"default": "geometry.steve_head"
}
```

It is important to make sure your model can work with attachables. Our first step is modifying the root bone of the geometry to be bound to the slot the item is placed in. Take careful note of line 16 in the Steve head model below:

<CodeHeader>RP/models/entity/steve_head.geo.json</CodeHeader>

```json
{
	"format_version": "1.16.0",
	"minecraft:geometry": [
		{
			"description": {
				"identifier": "geometry.steve_head",
				"texture_width": 64,
				"texture_height": 64,
				"visible_bounds_width": 3,
				"visible_bounds_height": 3,
				"visible_bounds_offset": [0, 1.5, 0]
			},
			"bones": [
				{
					"name": "steve_head",
					"binding": "q.item_slot_to_bone_name(c.item_slot)",
					"pivot": [0, 4, 0],
					"cubes": [
						{"origin": [-4, 0, -4], "size": [8, 8, 8], "uv": [0, 0]}
					]
				}
			]
		}
	]
}
```
While the `"parent"` property accepts a string and will make any child bones inherit transformations from the specified bone, the `"binding"` property accepts MoLang and sets the specified bone as the root that this geometry should inherit; the position of the model is moved to this bone too. This will have consequences in the next section where we make animations.

Here we are converting the contextual variable `c.item_slot` to its corresponding bone name in the geometry. The conversions are `'main_hand'` → "rightItem", `'off_hand'` → "leftItem", and `'head'` → "head".

![](/assets/images/tutorials/attachables/attachable-step-one.png)

*The head is free-floating for now, but we are about to fix that.*


## Display Settings

With that done, the next step is to set up animations to display the model in first person and third person. In the attachable file, change the animations object to include an animation for holding the item in both first person and third person, then change the scripts to animate them depending on context:

<CodeHeader>RP/attachables/spyglass.json</CodeHeader>

```json
"animations": {
	"hold_first_person": "animation.steve_head.hold_first_person",
	"hold_third_person": "animation.steve_head.hold_third_person"
},
"scripts": {
	"animate": [
		{
			"hold_first_person": "c.is_first_person"
		},
		{
			"hold_third_person": "!c.is_first_person"
		}
	]
}
```

Attached below is a template to assist with setting up these animations, using a modified player geometry.

<BButton link="https://github.com/Bedrock-OSS/bedrock-wiki/blob/wiki/docs/public/assets/packs/tutorials/attachables/AttachableRotations.zip?raw=true">📁 Player geometry and animations</BButton>

::: tip
These files already have our Steve head model imported for this tutorial and it serves as an example.
:::

Here are some instructions on how to use these files:
- Edit the geometry file to include the bones and cubes from your custom model.
- Open the geometry in Blockbench, and set your model to be parented under the corresponding bone ("rightItem", "leftItem", or "head").
- Move the model's root bone position so its origin (0, 0, 0) is located at the same position as the parented bone's pivot.
  - It may be a good idea to place a locator at the root of your model to make adjustments easier.

![](/assets/images/tutorials/attachables/blockbench-view-one.png)

*For the right hand slot, the root should be at (6, 15, 1).*

- In the Animations tab, import the provided animations, and play them.

You may then make new animations to position your model as desired. Some example first- and third-person animations for our Steve head model are supplied as well. Be sure to play the template animations while you make adjustments, as these will ensure what you see in Blockbench matches what comes out in Minecraft.

![](/assets/images/tutorials/attachables/blockbench-view-two.png)

### First-person Animations

For creating first person animations, create a new camera angle with the following values to replicate the first-person view in Minecraft:

![](/assets/images/tutorials/attachables/camera-configuration.png)

*You can pull this up by clicking on ≡ "Preview" → "Save Angle...".*

![](/assets/images/tutorials/attachables/blockbench-view-three.png)

## Conclusion

After the geometry is modified and the animations are saved, the item in-game should appear exactly as it does in Blockbench. You can then add any additional animations, models, textures, and whatever else you want to the attachable definition to customize it however you want.

![](/assets/images/tutorials/attachables/attachable-step-two.png)

