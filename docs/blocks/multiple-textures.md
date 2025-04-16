---
title: Adding Multiple Textures
category: Visuals
tags:
    - guide
    - intermediate
mentions:
    - SolarFlurry
description: Add multiple textures to a block
---

:::tip FORMAT & ENGINE VERSION `1.21.70`
This tutorial assumes basic understanding of [block permutations](/blocks/block-permutations) and block textures.
:::

Sometimes you want to create multiple textures for a block, such as creating a cauldron-like block that has the regular cauldron texture, and other side textures such as lava, water or powdered snow. This guide goes through the process of adding multiple textures in [Blockbench](https://blockbench.net). If you are reading this guide with the intention of adding multiple textures to full-blocks, this guide will not cover what you are looking for.

## Creating Multiple Textures

Open your block model in Blockbench. If you do not have one, [create one](/blocks/block-models).

<WikiImage
    src="/assets/images/blocks/multiple-textures/open_model.png"
    alt="Open Model"
    width="300"
/>

In this example, I want to create a gem holder, that can hold different types of gems. Instead of creating a whole seperate image for each, you can create one image for the actual gem holder, and more, seperate images for the different types of gems.

First, select the cubes you want with multiple textures. Click `Create Texture`. Start texturing those parts. To view the textures on Blockbench, right click all the cubes that you want to use the new texture with and choose `Texture > your_texture` to apply the texture in Blockbench.

<WikiImage
    src="/assets/images/blocks/multiple-textures/gem_texturing.png"
    alt="Open Model"
    width="300"
/>

<WikiImage
    src="/assets/images/blocks/multiple-textures/select_texture.png"
    alt="Open Model"
    width="300"
/>

After you are finished texturing, right click those cubes again and choose `Edit Material Instances`. Here, you can edit the face Material Instances for your block. In the faces you want to apply the texture to, type a Material Instance name that you will later use in the `material_instances` component of the block. For this example, I will use `gem`. 

<WikiImage
    src="/assets/images/blocks/multiple-textures/material_instances.png"
    alt="Open Model"
    width="500"
/>

In your block BP file, you will use the Material Instance name you defined in Blockbench.

<CodeHeader>BP/blocks/gem_holder.json</CodeHeader>

```json
{
    "format_version": "1.21.70",
    "minecraft:block": {
        "description": {
            "identifier": "wiki:gem_holder",
            "menu_category": {
                "category": "items"
            }
        },
        "components": {
            // Your model geometry
            "minecraft:geometry": "geometry.gem_holder",
            "minecraft:material_instances": {
                "*": {
                    // Whatever identifier you used for the unchanging texture
                    "texture": "wiki:gem_holder"
                },
                // The material instance name you used in Blockbench
                "gem": {
                    // The identifier for your changing texture
                    "texture": "wiki:gem_holder_diamond"
                }
            }
        }
    }
}
```

However, adding multiple textures is useless if you don't have any [block permutations](/blocks/block-permutations)! You can use different permutations with different textures like this:

<CodeHeader>BP/blocks/gem_holder.json#permutations</CodeHeader>

```json
[
    {
        "condition": "q.block_state('wiki:holding_gem')=='diamond'",
        "components": {
            "minecraft:material_instances": {
                "gem": {
                    // Whatever identifier you used for the unchanging texture
                    "texture": "wiki:gem_holder_diamond"
                }
            }
        }
    },
    {
        "condition": "q.block_state('wiki:holding_gem')=='amethyst'",
        "components": {
            "minecraft:material_instances": {
                "gem": {
                    // Whatever identifier you used for the unchanging texture
                    "texture": "wiki:gem_holder_amethyst"
                }
            }
        }
    }
]
```