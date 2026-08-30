---
title: "Blockbench: Modeling, Texturing & Animating"
category: Guide
description: A first peek into Blockbench.
prefix: "7. "
nav_order: 7
mentions:
    - KaiFireborn
    - SirLich
    - Dreamedc2015
    - SmokeyStack
    - sermah
    - cda94581
    - TheItsNameless
    - ThijsHankelMC
    - MedicalJewel105
    - ChibiMango
    - smell-of-curry
    - QuazChick
---

Blockbench is a free software designed to make Minecraft modeling, texturing, and animating possible. It is available for mobile browsers, Windows 10, and macOS. Please install it at [blockbench.net](https://blockbench.net/).

## Modeling

Let's get started.

1.  Open Blockbench.
2.  Choose _File>New>Bedrock Model_. This is important because Minecraft Bedrock will not be able to read Java models.
3.  A screen like this will have popped up.

    ![](create_entity_project_menu.png)

    -   `"File name:"` is self-explanatory. My file will generate as "skele_yaklin.geo.json".
    -   `"Model Identifier:"` is the model identifier (namespace not required), a short name for this ID will be defined later.
    -   `"Box UV"` has to be checked on for automatic UV editing and unwrapping for texturing.
    -   `"Texture Height"` and `"Texture Width"` define the resolution of the model's textures.

4.  Press confirm. You'll see a screen like this:

    ![](create_entity_workspace.png)

    -   You can see many tools here: move, resize, rotate, etc.
    -   You can add bones and cubes in the menu on the right-bottom corner. Cubes can rotate on their own; the bones will carry everything in them along;

5.  Now, you are ready to create your model! For more in-depth tutorials on modeling, please check out the videos by Everbloom Games below.

<YouTubeEmbed id="XqzxL_-XjA0" />

<YouTubeEmbed id="j7ISUImhgpc" />

## Texturing

Now that you have your model in place let's start texturing!

1.  On the left-bottom panel, click "Create Texture"

2.  Write down your image file name under "Name:". Mine will export as `ghost.png`.
    Check "Template:" to make a template texture - it'll be easier to work with.

    ![](create_entity_texture_1.png)

3.  Check everything and change your resolution to the one you set in the very first step.

    ![](create_entity_texture_2.png)

4.  Go to "Paint" in the upper right corner and paint your texture.

## Animating

Once your model and texture are done, you can start animating. Go to "Animate" in the upper right corner.

You might want to adjust one of the toolbars by adding "Export Animations" and "Import Animations" like this:
![](create_entity_animation_1.png)

1.  Click "Add Animation" [the plus icon on the top right side] and name it `animation.{yourEntityName}.move`.
    Create the first frame of your walking animation under 0 on the timeline by moving the legs.

    ![](create_entity_animation_2.png)

2.  Create the second frame under 0.5 on the timeline.

    ![](create_entity_animation_3.png)

3.  Finally, copy the first frame to the third frame by placing your timeline cursor on 1.0 and selecting the first frame, then ctrl+c, ctrl+v.

4.  Right-click the animation and tick "Loop" for the animation to loop.
    ![](create_entity_animation_4.png)

## Saving Your Work

Now that our model, texture, and walk animation are complete, you can save your work.

Go to _File > Save Model_ or _File > Export Bedrock Geometry_. Save the model in `RP/models/entity`, the texture in `RP/textures/wiki/entity/` (where `wiki` is replaced by your own namespace) and the animation in `RP/animations`. Congratulations! You've successfully created your first entity's visuals! You can see the file examples below.

_Meanwhile, why not upgrade the visuals of your own unique entities' or create another one?_

<Spoiler title="Show code">

<ExampleFile path="RP/models/entity/ghost.geo.json" />
<ExampleFile path="RP/animations/ghost.animations.json" />

</Spoiler>

## What You Have Learned

-   [x] How to create an entity in Blockbench
-   [x] How to use Blockbench to model, texture, and animate your entity
