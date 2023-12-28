---
title: Creating Block Models
category: Tutorials
tags:
    - beginner
    - easy
mentions:
    - QuazChick
---

Although custom blocks are unable to make use of vanilla [block shapes](/blocks/block-shapes), we can create our own models which follow a similar format to entity models. This tutorial will walk you through the process of creating a custom block model for a "paper bag" using [Blockbench](https://blockbench.net). You should learn the main features of Minecraft geometry tailored towards creating custom blocks from this tutorial.

**NOTE:** Custom block models must be within the [model size limits](/blocks/block-components.html#geometry).

## Model Setup

Open Blockbench and create a new `Bedrock Block` project.

![New project panel with Bedrock Block selected](/assets/images/blocks/block-models/new_project.png)


Now you can give your model an identifier! Your file name can be decided here, or changed later.

The UV mode and texture size should remain unchanged.

:::danger NAMESPACES
Model identifiers are **not namespaced and cannot contain colons**. Colons were previously used for model inheritance and are invalid in modern geometry formats.
:::

![](/assets/images/blocks/block-models/project_settings.png)

## Adding Cubes

Despite not necessarily being perfect cube shapes, elements in your model are called **cubes**. All cubes must be contained within **bones**, which act as groups.

First, let's create a root bone for our model from the outliner by clicking on `Add Group`. Bones can be renamed by pressing `F2`.

![](/assets/images/blocks/block-models/root_bone.png)

The "paper bag" model will need two cubes: one for the handle, and one for the main bag. These can be added by selecting your root bone and clicking `Add Cube`.

<WikiImage
  src="/assets/images/blocks/block-models/new_cube.png"
  alt
  width="600"
  class="my-4"
/>

Cubes can be moved, resized and rotated from the top toolbar. Below are the two cubes my "paper_bag" model will use.


<WikiImage
  src="/assets/images/blocks/block-models/paper_bag_cubes.png"
  alt
  width="300"
  class="my-4"
/>

## Removing Faces

Some of the faces of our cubes might not need to be visible. In my example, the top face of the paper_bag should be removed so that you can see inside.

To remove a face, click on it in the preview and remove its UV.


<WikiImage
  src="/assets/images/blocks/block-models/paper_bag_top_removed.png"
  alt
  width="600"
  class="my-4"
/>

Additionally, only the north and south faces of the handle should be visible. You can select multiple faces by holding Ctrl while clicking on the face names in the UV panel.

<WikiImage
  src="/assets/images/blocks/block-models/paper_bag_handle_faces_removed.png"
  alt
  width="600"
  class="my-4"
/>

## Previewing Textures

:::tip
Textures can be created in Blockbench by clicking `Create Texture` and selecting `Blank`.
:::

The "paper_bag" model has multiple pre-made textures, listed below:

-   `textures/blocks/paper_bag.png`

    <WikiImage src="/assets/images/blocks/block-models/paper_bag.png" style="background-color: rgb(0,0,0,0.15);" pixelated="true" width="128"/>
    <br>
    <br>


-   `textures/blocks/paper_bag_bottom_fold.png`

    <WikiImage src="/assets/images/blocks/block-models/paper_bag_bottom_fold.png" style="background-color: rgb(0,0,0,0.15);" pixelated="true" width="128"/>
    <br>
    <br>


-   `textures/blocks/paper_bag_side_gusset.png`

    <WikiImage src="/assets/images/blocks/block-models/paper_bag_side_gusset.png" style="background-color: rgb(0,0,0,0.15);" pixelated="true" width="128"/>

These can be imported into Blockbench and then dragged onto each appropriate block face, although they likely won't look quite right...

<WikiImage
  src="/assets/images/blocks/block-models/preview_textures_applied.png"
  alt
  width="300"
  class="my-4"
/>

## Rearranging UVs

To get textures into the right positions, you may need to reposition/resize your faces' UV mapping. This can be done by selecting the affected face and using the UV panel.

<WikiImage
  src="/assets/images/blocks/block-models/paper_bag_handle_uv.png"
  alt
  width="300"
  class="my-4"
/>
<br>
<WikiImage
  src="/assets/images/blocks/block-models/paper_bag_final.png"
  alt
  width="300"
  class="my-4"
/>


## Changing Material Instances

Applying custom material instance names can be used to easily define how certain faces are rendered.

They can be edited by right-clicking on a cube and opening `Edit Material Instances`

![](/assets/images/blocks/block-models/select_edit_material_instances.png)

For the "paper_bag" model, the east and west faces should have their own texture. We can indicate this by giving them a material instance.

![](/assets/images/blocks/block-models/edit_material_instances.png)

## Applying Geometry & Textures

Once exported from `File > Export > Export Bedrock Geometry` into your `RP/models/blocks` folder, you can reference a model in your block JSON.

Then, textures can be applied by material instances through their `RP/textures/terrian_texture.json` shortname. In this example, the paper_bag shouldn't block light, so its light dampening is set to 0.

<CodeHeader>BP/blocks/paper_bag.json</CodeHeader>

```json
{
  "format_version": "1.20.30",
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
          "texture": "paper_bag",
          "render_method": "alpha_test" // Disable backface culling and allow transparency
        },
        "down": {
          "texture": "paper_bag_bottom_fold",
          "render_method": "alpha_test" // Must be the same in all instances
        },
        // Custom instance name used in model
        "side_gusset": {
          "texture": "paper_bag_side_gusset",
          "render_method": "alpha_test" // Must be the same in all instances
        }
      },
      // Prevent shadows
      "minecraft:light_dampening": 0
    }
  }
}
```