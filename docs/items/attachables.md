---
title: Attachables
category: Documentation
tags:
    - beginner
mentions:
    - Sprunkles317
    - MedicalJewel105
    - AdamRaichu
    - Luthorius
    - TheItsNameless
---

::: tip
This document assumes you have a basic understanding of Molang, render controllers, animations, and client entity definitions. Ensure you are familiar with the basics of [client entities](/entities/entity-intro-rp)!
:::

## Introduction

When we design a custom item or block, Minecraft will build a model from a template so the item can be displayed when held. This takes the form of the item's sprite being an extruded texture mesh, or blocks displaying with their model. By using a system called **attachables** we can design our own models to be displayed when these items are held.

Ever wanted sticks to look like spyglasses? Or to wield a big chainsaw with a spinning chain? Attachables are the way to accomplish that!

This document covers **two different ways** to create attachables, depending on how the geometry being used is constructed.

## Overview

Attachables are a system of rendering entity models when an item or block is equipped. This means having the item held in the main hand, off hand, or armor slots.

Attachable definitions are quite similar in design to client entity definitions; they let us define textures, materials, geometries, and animations to display the attachable.

### File Structure

The attachable definition goes within the 'attachables' folder. The file layout is otherwise identical to that of custom entities.

<FolderView
	:paths="[
    'RP/animations/my_item.animation.json',
    'RP/attachables/my_item.entity.json',
    'RP/models/entity/my_item.geo.json',
    'RP/textures/entity/my_item.png',
    'RP/manifest.json'
  ]"
></FolderView>

### Attachable Definition

Here's a basic example of an attachable.

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
				"default": "textures/entity/steve",
				"enchanted": "textures/misc/enchanted_item_glint"
			},
			"geometry": {
				"default": "geometry.wiki.steve_head"
			},
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

## Method 1 - Attached to the Skeleton

<Label name="Beginner" color="blue"></Label>

In this first method we will construct the attachable using a copy of the player's skeleton, by attaching your model to one of the player's bones.

This solution is ideal for models that are intended for scenarios involving only one type of mob/entity, especially players; and involving only one equipment slot. It is easy to view what the model will look like in Blockbench.

### Setting up the Skeleton

We need to reconstruct the player's skeleton in order for our model to be parented to the correct bone, otherwise it will not be parented to anything and will float freely on the player.

With a text editor, take the bones from the provided player skeleton file and copy them to your geometry file, then set the `rightItem` bone as the parent to the cubes from your model. Save this geometry to your resource pack.

For convenience, such a model has been prepared here. The cubes from the player's model have already been removed:
<BButton
  link="https://github.com/Bedrock-OSS/bedrock-wiki/blob/wiki/docs/public/assets/packs/tutorials/attachables/method_one/steve_head.geo.json?raw=true"
	color=blue
>📄 Geometry File</BButton>

### Display Settings

Having your model floating at the player's feet is not ideal. Our next step is to create animations so we can properly display the model on the player.

Create two new animations, one for holding the item in first person and another for holding it in third person. Select your third-person animation, and position it however you want. Save this animation to your resource pack.

Here is an example of such an animation. This also includes a first-person animation—the means of making one is detailed in the section below.
<BButton
  link="https://github.com/Bedrock-OSS/bedrock-wiki/blob/wiki/docs/public/assets/packs/tutorials/attachables/method_one/steve_head.animation.json?raw=true"
	color=blue
>📄 Animation File</BButton>

### First-person Animations

To more easily create first-person animations, we need to mimic how the arm is positioned in the first person.

:::tip
To add animation for player's hands, you need to use player's animations, not attachables animations. 
:::

Use the following guide animation and import it into Blockbench. It applies a rotation of (95, -45, 115) and a translation of (13.5, -10, 12) to the right arm bone, perfectly mimicking how the arm is positioned in first-person.
<BButton
  link="https://github.com/Bedrock-OSS/bedrock-wiki/blob/wiki/docs/public/assets/packs/tutorials/attachables/method_one/attachable_guide.animation.json?raw=true"
	color=blue
>📄 Attachable Guide File</BButton>

:::warning NOTE
This is where things get tricky. Both animations will need to be played simultaneously; your first-person animation, and the guide's first-person animation.

Be sure you are editing your animation when making your changes. Select it first, then play the guide's first-person animation on top.
:::

### Conclusion

With this all set up, go through and delete the *cubes* from the player skeleton if there are any, but keep the bones. Check the model out in-game!

## Method 2 - Bound to a Bone

<Label name="Intermediate" color="orange"></Label>

In this second method, the attachable geometry will be constructed using model binding. This allows a model to be directly attached to a bone within a mob's geometry corresponding to the slot it is equipped in. Minecraft employs model binding for its attachable items, including the trident, spyglass, bow, and shield.

While this method allows the attachable to apply more dynamically to other mobs and equipment slots, model binding also has strange quirks, which will be illustrated below. Some developers may find this method trickier to get working.

### Model Binding

Our first step is to upgrade the model file format version to `"1.16.0"` if it is not already. If the model is a legacy file, then convert it before continuing; Blockbench has a tool to do this (File → Convert Project).

Next up is modifying the root bone of our geometry to be bound to the equipment slot the item is placed in. Take note of line 4 in this excerpt from the skeleton head geometry file:

<CodeHeader>RP/models/entity/skeleton_head.geo.json</CodeHeader>

```json
// A bone
{
  "name": "skeleton_head",
  "binding": "q.item_slot_to_bone_name(context.item_slot)",
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

The `"parent"` key in a bone accepts a string, and whichever bone name is entered will be set as the parent to the current bone; the child bones keep their positions but move relative to the parent bone.

The `"binding"` key on the other hand accepts Molang, and the pivot point of whichever bone name is entered is set as the *root position* that the child bone and its children should inherit.

For the value of `"binding"` we are using the Molang query `q.item_slot_to_bone_name`, which converts a slot name to a bone name, with the contextual variable `context.item_slot` as an argument. This converts the name of the equipment slot this item resides in to its corresponding bone name in the player's geometry. The conversions are as follows:
- `'main_hand'` → "rightitem"
- `'off_hand'` → "leftitem"

Apply the model binding to your bone, and save the geometry to your resource pack.

An example model with this binding applied is provided here:
<BButton
  link="https://github.com/Bedrock-OSS/bedrock-wiki/blob/wiki/docs/public/assets/packs/tutorials/attachables/method_two/skeleton_head.geo.json?raw=true"
	color=blue
>📄 Geometry File</BButton>

### Display Settings

With that done, the next step is to set up animations to display the model in first person and third person.

Create two new animations, one for holding the item in first person and another for holding it in third person.

To make creating these animations easier, please do the following:

- Download the following player skeleton model. We will use this as a visual aid for positioning your model.
<BButton
  link="https://github.com/Bedrock-OSS/bedrock-wiki/blob/wiki/docs/public/assets/packs/tutorials/attachables/method_two/player_skeleton.geo.json?raw=true"
	color=blue
>📄 Player Skeleton File</BButton>

- With a text editor, add the bones and cubes from your model to the player skeleton model, then import the player skeleton model into Blockbench.
- Set your model's root bone(s) to be a child of the 'rightItem' bone in the player skeleton.
- Download the following animation file import the `wiki.third_person_guide` animation. This will be used later to make positioning easier.
<BButton
  link="https://github.com/Bedrock-OSS/bedrock-wiki/blob/wiki/docs/public/assets/packs/tutorials/attachables/method_two/attachable_guide.animation.json?raw=true"
	color=blue
>📄 Attachable Guide File</BButton>

These guide animations have one notable feature: they apply a -24 offset to the y-position of the right item bone to counteract a similar -24 y-position offset Minecraft applies to bound bones. We are unsure at this time why this happens.

:::warning NOTE
Similar to Method One, **two** animations will need to be played simultaneously for correct positioning.

Be sure you are editing your animations when making your changes. Select it first, then play the guide animation on top.
:::

Play both animations, and position your model however you want. Save the animations to your resource pack.

An example animation file for this positioning:
<BButton
  link="https://github.com/Bedrock-OSS/bedrock-wiki/blob/wiki/docs/public/assets/packs/tutorials/attachables/method_two/skeleton_head.animation.json?raw=true"
	color=blue
>📄 Animation File</BButton>

### First-person Animations

Similar to the third-person animation, look in the Attachable Guide file and import the `wiki.first_person_guide` animation into Blockbench. Play both your animation and the guide's first-person animation together, then make your changes and save the file.

## Example Pack

Each of these methods have been compiled into an example pack you may reference, for if you are getting stuck or simply want to see a working example.

<BButton
    link="https://github.com/Bedrock-OSS/wiki-addon/releases/download/download/attachable-example.mcpack"
    color=blue
>💾 Example Pack</BButton>
