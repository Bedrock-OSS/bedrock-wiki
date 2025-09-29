---
title: Block Models
description: Learn how to set up a custom model for your block.
category: Visuals
tags:
    - guide
    - beginner
    - easy
license: true
mentions:
    - QuazChick
    - SmokeyStack
---

Although custom blocks are unable to make use of vanilla [block shapes](/blocks/block-shapes), we can create our own models which follow a similar format to entity models.
This tutorial will walk you through the process of creating a custom block model for a "paper bag" using [Blockbench](https://blockbench.net).
You should learn the main features of Minecraft geometry tailored towards creating custom blocks from this tutorial.

**NOTE:** Custom block models must be within the [model size limits](/blocks/block-components#geometry).

## Model Setup

Open Blockbench and create a new `Bedrock Block` project.

![New project panel with Bedrock Block selected](/assets/images/blocks/block-models/new_project.png)

Now you can give your model an identifier! Your file name can be decided here, or changed later.

The UV mode and texture size should remain unchanged.

:::danger NAMESPACES
Model identifiers are **not namespaced and cannot contain colons**.
Colons were previously used for model inheritance and are invalid in modern geometry formats.
:::

![](/assets/images/blocks/block-models/project_settings.png)

## Adding Cubes

Despite not necessarily being perfect cube shapes, elements in your model are called **cubes**.
All cubes must be contained within **bones**, which act as groups.

First, let's create a root bone for our model from the outliner by clicking on `Add Group`.
Bones can be renamed by pressing `F2`.

![](/assets/images/blocks/block-models/root_bone.png)

The "paper bag" model will need two cubes: one for the handle, and one for the main bag.
These can be added by selecting your root bone and clicking `Add Cube`.

<WikiImage src="/assets/images/blocks/block-models/new_cube.png" alt width="600" class="my-4" />

Cubes can be moved, resized and rotated from the top toolbar.
Below are the two cubes my "paper_bag" model will use.

<WikiImage src="/assets/images/blocks/block-models/paper_bag_cubes.png" alt="" width="300" />

## Removing Faces

Some of the faces of our cubes might not need to be visible.
In my example, the top face of the paper_bag should be removed so that you can see inside.

To remove a face, click on it in the preview and remove its UV.

<WikiImage src="/assets/images/blocks/block-models/paper_bag_top_removed.png" alt="" width="600" />

Additionally, only the north and south faces of the handle should be visible.
You can select multiple faces by holding Ctrl while clicking on the face names in the UV panel.

<WikiImage
    src="/assets/images/blocks/block-models/paper_bag_handle_faces_removed.png"
    alt=""
    width="600"
/>

## Previewing Textures

:::tip
Textures can be created in Blockbench by clicking `Create Texture` and selecting `Blank`.
:::

The "paper_bag" model has multiple pre-made textures, listed below:

-   `textures/blocks/paper_bag.png`

    <WikiImage
        src="/assets/images/blocks/block-models/paper_bag.png"
        style="background-color: rgb(0,0,0,0.15);"
        pixelated
        width="128"
    />

-   `textures/blocks/paper_bag_bottom_fold.png`

    <WikiImage
        src="/assets/images/blocks/block-models/paper_bag_bottom_fold.png"
        style="background-color: rgb(0,0,0,0.15);"
        pixelated
        width="128"
    />

-   `textures/blocks/paper_bag_side_gusset.png`

    <WikiImage
        src="/assets/images/blocks/block-models/paper_bag_side_gusset.png"
        style="background-color: rgb(0,0,0,0.15);"
        pixelated
        width="128"
    />

These can be imported into Blockbench and then dragged onto each appropriate block face, although they likely won't look quite right...

<WikiImage
    src="/assets/images/blocks/block-models/preview_textures_applied.png"
    alt=""
    width="300"
/>

## Rearranging UVs

To get textures into the right positions, you may need to reposition/resize your faces' UV mapping.
This can be done by selecting the affected face and using the UV panel.

<WikiImage src="/assets/images/blocks/block-models/paper_bag_handle_uv.png" alt="" width="300" />

<WikiImage src="/assets/images/blocks/block-models/paper_bag_final.png" alt="" width="300" />

## Changing Material Instances

Applying custom material instance names can be used to easily define how certain faces are rendered.

They can be edited by right-clicking on a cube and opening `Edit Material Instances`

![](/assets/images/blocks/block-models/select_edit_material_instances.png)

For the "paper_bag" model, the east and west faces should have their own texture.
We can indicate this by giving them a material instance.

![](/assets/images/blocks/block-models/edit_material_instances.png)

## Applying Geometry & Textures

Once exported from `File > Export > Export Bedrock Geometry` into your `RP/models/blocks` folder, you can reference a model in your block JSON.

Then, textures can be applied by material instances through their `RP/textures/terrian_texture.json` shortname.

:::warning BLOCKS.JSON
Adding [`minecraft:geometry`](/blocks/block-components#geometry) to your block will cause the game to ignore texture definitions in `RP/blocks.json`.

If you have textures for your block defined in that file, make sure you move them to [`minecraft:material_instances`](/blocks/block-components#material-instances) for them to appear.
:::

<CodeHeader>BP/blocks/paper_bag.json</CodeHeader>

```json
{
    "format_version": "1.21.110",
    "minecraft:block": {
        "description": {
            "identifier": "wiki:paper_bag",
            "menu_category": {
                "category": "items"
            }
        },
        "components": {
            // Apply your model by referencing its identifier
            "minecraft:geometry": "geometry.paper_bag",
            // Apply textures and other rendering configuration
            "minecraft:material_instances": {
                "*": {
                    "texture": "wiki:paper_bag",
                    "render_method": "alpha_test" // Disable backface culling and allow transparency
                },
                "down": {
                    "texture": "wiki:paper_bag_bottom_fold",
                    "render_method": "alpha_test" // Must be the same in all instances
                },
                // Custom instance name used in model
                "side_gusset": {
                    "texture": "wiki:paper_bag_side_gusset",
                    "render_method": "alpha_test" // Must be the same in all instances
                }
            }
        }
    }
}
```

## What's Next?

<CardGrid>
<Card
    title="Create Culling Rules"
    link="/blocks/block-culling"
    image="/assets/images/icons/crafting_table.png"
>

Creating culling rules for your model can aid performance by telling the game to hide parts of your model that are being unnecessarily rendered.

</Card>
<Card
    title="Conditional Bones"
    link="/blocks/block-components#bone-visibility"
    image="/assets/images/icons/levers.png"
>

Use the `bone_visibility` parameter of the [geometry](/blocks/block-components#geometry) component to render different model bones based on your block's current permutation.

</Card>
<Card
    title="Vanilla Models"
    link="/blocks/vanilla-block-models"
    image="/assets/images/icons/diamond_ore.png"
>

Use a vanilla model rather than making your own for simple blocks!
These models are especially useful when making full blocks and plants for your add-on.

</Card>
</CardGrid>
