---
title: Editing your first model
category: tutorials
tags:
    - expert
---

This tutorial will show you how to make your first VR model.
For the sake of this tutorial we will be editing the right hand model.

:::tip
This tutorial makes use of the program [Blender](https://www.blender.org/download/), make sure you have it before following this tutorial.
:::

## Viewing the model in Blender

First you need to import the model into Blender:

![](/assets/images/vr/tutorial-hand-right/import-1.png)
![](/assets/images/vr/tutorial-hand-right/import-2.png)
![](/assets/images/vr/tutorial-hand-right/import-3.png)

Your model is now imported but it misses a texture.
To add a texture you will go to the Shading tab in blender.
There you are going to add a texture element like this:

![](/assets/images/vr/tutorial-hand-right/shading-add-texture-element.png)
![](/assets/images/vr/tutorial-hand-right/texture-element.png)

In that element you press open and select your texture in our case its `something\VRpackTemplate\textures\hologram_hands.png`.
Make sure you change linear to closest, otherwise your texture will look blurry.
In the end it will look like this:

![](/assets/images/vr/tutorial-hand-right/texture-element-complete.png)

Now its time to add the texture to the models material.
You hold the yellow dot and connect it to the other yellow dot like this:

![](/assets/images/vr/tutorial-hand-right/texture-base-connect.png)

If everything went good your model should now look like this:

![](/assets/images/vr/tutorial-hand-right/texture-on-model.png)

## Editing the model

With editing the model you have almost total freedom, the only requirement is that the model only uses 1 texture.

### Editing the model (easy)

Since this is the easy tutorial, we will show you how to make the hand into an arm.

First we need to figure out the dimensions of this object.

![](/assets/images/vr/tutorial-hand-right/model-dimensions.png)

This image shows us that 3 pixels is equivelent to 18.75 meters in Blender, an arm is 12 pixels long so this means an arm is `4 * 18.75 = 75 meters` in Blender.
When editing the dimensions it will look like this:

![](/assets/images/vr/tutorial-hand-right/model-dimensions-1.png)

If we import it into minecraft the arm will be to far away. This is because the original model is made for a hand not an arm. So we need to move it `3 * 18.75 = 56.25 meters` down.

![](/assets/images/vr/tutorial-hand-right/model-dimensions-2.png)

#### texturing

Since this is an arm we will use the steve arm model, you import it the same way like we did above
![](/assets/images/vr/tutorial-hand-right/hologram-hands-steve.png)

![](/assets/images/vr/tutorial-hand-right/steve-texture-stretched.png)

Now you might notice your texture is stretched out. to fix this we will go to UV-editing and edit the uv map.
UV-editing looks almost the same to blockbench.

![](/assets/images/vr/tutorial-hand-right/uv-map.png)

:::tip
Its handy to turn on this magnet looking icon so its more precise.
![](/assets/images/vr/tutorial-hand-right/magnet-icon.png)
:::

We start with selecting the top and the bottom of the hand.

![](/assets/images/vr/tutorial-hand-right/uv-map-top-selected.png)

Next we select the move tool.

![](/assets/images/vr/tutorial-hand-right/uv-map-pos.png)

Now we move the top face and bottom face to the top of the texture.

![](/assets/images/vr/tutorial-hand-right/uv-map-top-move-up.png)

The same for the sides of the arm.

Your new uv map should look something like this:

![](/assets/images/vr/tutorial-hand-right/uv-map-side-up.png)

If we look how the arm look we see all is now fixed.

![](/assets/images/vr/tutorial-hand-right/uv-map-done.png)

#### time to export it!!!

Its time to now export your model first put the steve arm texture inside `VRpackTemplateRP\textures`. 
Call it `hologram_hands.png`.

![](/assets/images/vr/tutorial-hand-right/export-texture.png)

Now lets export the model. 

![](/assets/images/vr/tutorial-hand-right/export-model-1.png)

Call the model `hologram_hand_right.obj`.

![](/assets/images/vr/tutorial-hand-right/export-model-2.png)

#### Testing it in game

load the pack into minecraft and try it out if it looks like this you succeeded in this tutorial!

![](/assets/images/vr/tutorial-hand-right/export-done.png)

## Your progress so far

<Checklist>

-   [x] Setup Minecraft VR
-   [x] Setup the pack
-   [x] Edit the models

</Checklist>