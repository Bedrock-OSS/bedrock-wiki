---
title: Attachables Tutorial
category: Tutorials
tags:
  - guide
---

::: tip
This tutorial assumes you have a basic understanding of Molang, render controllers, animations, and client entity definitions. Ensure to check out the [client entity tutorial](/entities/entity-intro-rp) before starting this tutorial!
:::

## Introduction

When we design a custom item or block, Minecraft will build a model from a template so the item can be displayed when held. This takes the form of the item's sprite being an extruded texture mesh, or blocks displaying with their model. By using a system called **attachables** we can design our own models to be displayed when these items are held.

Ever wanted sticks to look like spyglasses? Or to wield a big chainsaw with a spinning chain? Attachables are the way to accomplish that!

This tutorial will cover **two different ways** to create attachables, depending on how the geometry being used is constructed.

By the end of this tutorial, you should be able to:

<Checklist>

-   [ ] Understand how attachable definitions are made
-   [ ] Make or edit a geometry to be compatible for attachables
-   [ ] Set up animations to display the geometry in Minecraft

</Checklist>

## Overview

Attachables are a system built for rendering entity models when an item or block is equipped. This means having the item held in the main hand, off hand, or armor slots.

Attachable definitions are quite similar in design to client entity definitions; they let us define textures, materials, geometries, and animations to display the attachable.

### File Structure

This is the file layout we will be using for our attachables in this tutorial—the contents of these files will be elaborated on later in the tutorial. This might look familiar to you if you have made an entity before.

<FolderView
	:paths="[
    'RP/animations/steve_head.animation.json',
    'RP/attachables/stick.entity.json',
    'RP/models/entity/steve_head.geo.json',
    'RP/textures/entity/steve.png',
    'RP/manifest.json'
  ]"
></FolderView>

### Attachable Definition

Here's a basic example of an attachable, which we will be using throughout this tutorial. This makes a stick look like a spyglass:

<CodeHeader>RP/attachables/stick.entity.json</CodeHeader>

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

A few key things to point out with this attachable definition:
- The identifier matches an existing block or item ID. This will activate the attachable when the item is equipped, and will replace the original model that appears when held.
- There is a material and texture listed for the enchantment glint. This is important to keep around if your item should have the glint when enchanted.

Making attachables is a little more involved than making a client entity file. We need to properly rig the geometry's skeleton so that it looks correct when equipped.

![](/assets/images/tutorials/attachables/attachable-example.png)

*That would hurt if you put that in your eye.*

## Method 1 - Attached to the Skeleton

<Label name="Beginner" color="blue"></Label>

In this first method we will construct the attachable using a copy of the player's skeleton, by attaching your model to one of the player's bones.

This solution is ideal for models that are intended for scenarios involving only one type of mob/entity, especially players; and involving only one equipment slot. It is easy to view what the model will look like in Blockbench.

### Setting up the Skeleton

This tutorial will be using a Steve head as the model and texture. Download the following ZIP archive for a copy of the files this tutorial will use for this method.

<BButton
  link="https://github.com/Bedrock-OSS/bedrock-wiki/blob/wiki/docs/public/assets/packs/tutorials/attachables/method_one_kit.zip?raw=true"
	color=blue
>📁 Attachables: Method One Kit</BButton>

In the attachable definition, change the default texture path to your texture (this section will use `"textures/entity/steve"`) and the geometry name to your geometry (`"geometry.wiki.steve_head"`):

<CodeHeader>RP/attachables/stick.entity.json</CodeHeader>

```json
"textures": {
	"default": "textures/entity/steve",
	"enchanted": "textures/misc/enchanted_item_glint"
},
"geometry": {
	"default": "geometry.wiki.steve_head"
},
```

We need to reconstruct the player's skeleton in order for our model to be parented to the correct bone, otherwise it will not be parented to anything and will float freely on the player.

With a text editor, take the bones from the provided player skeleton file and copy them to your geometry file, then set the `rightItem` bone as the parent to the cubes from your model. Save this geometry to your resource pack.

![](/assets/images/tutorials/attachables/method_one/step_one.png)

*Take careful note of the bone structure—`steve_head` is a child of `rightItem`.*

### Display Settings

Having your model floating at the player's feet is not ideal. Our next step is to create animations so we can properly display the model on the player.

In the attachable definition, change the animations object to include an animation for holding the item in both first person and third person, then change the scripts to animate them depending on if the player is in first or third person:

<CodeHeader>RP/attachables/stick.entity.json</CodeHeader>

```json
"animations": {
	"hold_first_person": "animation.steve_head.hold_first_person",
	"hold_third_person": "animation.steve_head.hold_third_person"
},
"scripts": {
	"animate": [
		{
			"hold_first_person": "context.is_first_person == 1.0"
		},
		{
			"hold_third_person": "context.is_first_person == 0.0"
		}
	]
},
```

Create two new animations, one for holding the item in first person and another for holding it in third person. You may also import the provided animations.

Select the `steve_head.hold_third_person` animation, and position it however you want. Save these animations to your resource pack.

![](/assets/images/tutorials/attachables/method_one/step_two.png)

### First-person Animations

To more easily create first-person animations, we need to recreate how the arm is positioned in the first person. Look in the Attachable Kit file for `attachable_guide.animation.json`, and import the `wiki.first_person_guide` animation into Blockbench.

:::warning NOTE
This is where things get tricky. Both animations will need to be played simultaneously; the Steve head first-person animation, and the first-person guide animation.

Be sure you are editing the Steve head's first-person animation when making your changes. Select it first, then play the first-person guide animation on top.
:::

![](/assets/images/tutorials/attachables/method_one/step_three.png)

*Play `steve_head.hold_first_person` first! Otherwise you will be making changes to the guide animation.*

### Conclusion

With this all set up, go through and delete the *cubes* from the player skeleton, but keep the bones. Check the model out in-game!

## Method 2 - Bound to a Bone

<Label name="Intermediate" color="orange"></Label>

In this second method, the attachable will be constructed using model binding. This allows a model to be directly attached to a bone corresponding to a slot within a mob's geometry. Minecraft employs model binding for its attachable items, including the trident, spyglass, bow, and shield.

While this method allows the attachable to apply more dynamically to other mobs and equipment slots, it also has strange quirks with how model binding behaves, which will be illustrated below. Some developers may find this method trickier to get working.

### Model Binding

For this tutorial's demonstration, a model of Steve's head will be used. Download the following ZIP archive for a copy of the files this tutorial will use for this method.

<BButton
  link="https://github.com/Bedrock-OSS/bedrock-wiki/blob/wiki/docs/public/assets/packs/tutorials/attachables/method_two_kit.zip?raw=true"
	color=blue
>📁 Attachables: Method Two Kit</BButton>

In the attachable definition, change the default texture path to your texture (this section will use `"textures/entity/skeleton/skeleton"`) and the geometry name to your geometry (`"geometry.wiki.skeleton_head"`):

<CodeHeader>RP/attachables/stick.entity.json</CodeHeader>

```json
"textures": {
	"default": "textures/entity/skeleton/skeleton",
	"enchanted": "textures/misc/enchanted_item_glint"
},
"geometry": {
	"default": "geometry.wiki.skeleton_head"
},
```

Now onto making our model compatible with model binding. Our first step is to upgrade the model file format version to `"1.16.0"` if it is not already. If the model is a legacy file, then convert it to the modern format before continuing.

Next up is modifying the root bone of our geometry to be bound to the equipment slot the item is placed in. Take careful note of line 4 in this excerpt from the skeleton head geometry file:

<CodeHeader>RP/models/entity/skeleton_head.geo.json</CodeHeader>

```json
// A bone
{
  "name": "skeleton_head",
  "binding": "query.item_slot_to_bone_name(context.item_slot)",
  "pivot": [0, 4, 0],
  "cubes": [
    {
      "origin": [-4, 0, -4],
      "size": [8, 8, 8],
      "uv": [0, 0]
    }
  ]
}
```
The `"parent"` key in a bone accepts a string, and whichever bone name is entered will be set as the parent to the current bone, moving relative to the parent bone. The `"binding"` key on the other hand accepts Molang, and the pivot of whichever bone name is entered is set as the *root position* that the current bone and its children should inherit.

For the value of `"binding"` we are using the Molang query `query.item_slot_to_bone_name`, with the contextual variable `context.item_slot` as an argument. This converts the name of the equipment slot this item resides in to its corresponding bone name in the player's geometry. The conversions are as follows:
- `'main_hand'` → "rightitem"
- `'off_hand'` → "leftitem"
- `'head'` → "head"

In effect, this means the model will automatically fit itself to whichever bone corresponding to the equipment slot the item resides in. Apply this key to the geometry.

With a text editor, take the bones from the provided player skeleton file and copy them to your geometry file, then set the `rightItem` bone as the parent to the root bone from your model. Save this geometry to your resource pack.

### Display Settings

With that done, the next step is to set up animations to display the model in first person and third person.

In the attachable definition, change the animations object to include an animation for holding the item in both first person and third person, then change the scripts to animate them depending on if the player is in first or third person:

<CodeHeader>RP/attachables/stick.entity.json</CodeHeader>

```json
"animations": {
	"hold_first_person": "animation.skeleton_head.hold_first_person",
	"hold_third_person": "animation.skeleton_head.hold_third_person"
},
"scripts": {
	"animate": [
		{
			"hold_first_person": "context.is_first_person == 1.0"
		},
		{
			"hold_third_person": "context.is_first_person == 0.0"
		}
	]
},
```

Create two new animations, one for holding the item in first person and another for holding it in third person. You may also import the provided animations.

Look in the Attachable Kit file for `attachable_guide.animation.json`, and import the `wiki.third_person_guide` animation into Blockbench. This animation has one notable feature: it applies a 24 offset to the y-position of the right item bone to counteract a similar -24 y-position offset Minecraft applies. We are unsure at this time why this offset is applied to bones that are bound.

:::warning NOTE
Similar to Method One above, **two** animations will need to be played simultaneously for correct positioning.

Be sure you are editing the skeleton head's animation when making your changes. Select it first, then play the guide animation on top.
:::

Select the `skeleton_head.hold_third_person` animation, and position it however you want. Save these animations to your resource pack.

### First-person Animations

Similar to the third-person animation, look in the Attachable Kit file for `attachable_guide.animation.json`, and import the `wiki.first_person_guide` animation into Blockbench. Play both the skeleton head first-person animation and the guide animation together, then make your changes and save the file.

### Conclusion

Now go through and delete the entire player skeleton from the file, as it will not be needed with the binding system. Be sure to remove the parent key from your model's bone too, and only keep the `"binding": "query.item_slot_to_bone_name(context.item_slot)"`.