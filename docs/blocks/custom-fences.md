---
title: Custom Fences
example: custom_fences
description: Learn how to create your own fence blocks with connection and multi-box collisions.
category: Vanilla Re-Creations
tags:
    - intermediate
license: true
mentions:
    - QuazChick
---

:::tip FORMAT VERSION 1.26.40
This tutorial assumes a good understanding of block visuals and block permutations.
Check out the [block visuals guide](/blocks/block-visuals-intro) before starting.
:::

In this tutorial, you'll learn how to create your own fence blocks with connection and multi-box collisions.

![](showcase.png){width=525}

**Features:**

-   Connects with adjacent blocks in each cardinal direction.
-   Multi-box collisions that are 1.5 blocks tall, preventing most entities from jumping over the fence.
-   Able to be used as fuel in a furnace.

## Initial Block JSON

There are quite a few components listed here. Here's what is important for fences specifically:

-   The `minecraft:connection` trait enables the `minecraft:connection_north`, `minecraft:connection_south`, `minecraft:connection_west` and `minecraft:connection_east` states which indicate in which directions the fence should form a connection.
-   The `minecraft:has_fence_connections` tag tells vanilla wooden fences that they can connect to the block.
-   The `minecraft:connection_rule` component is used to prevent bars, glass panes and walls from connecting to the block.

_Note that the block description does not have the `menu_category` parameter as that will be defined in the item JSON instead in a later step._

<CodeHeader path="BP/blocks/custom_fence.json" />

```json
{
    "format_version": "1.26.40",
    "minecraft:block": {
        "description": {
            "identifier": "wiki:custom_fence",
            "traits": {
                "minecraft:connection": {
                    "enabled_states": ["minecraft:cardinal_connections"]
                }
            }
        },
        "components": {
            "minecraft:tags": [
                "minecraft:has_fence_connections",
                "minecraft:is_axe_item_destructible"
            ],
            "minecraft:destructible_by_explosion": {
                "explosion_resistance": 15
            },
            "minecraft:destructible_by_mining": {
                "seconds_to_destroy": 2
            },
            "minecraft:destruction_particles": {
                "particle_count": 48
            },
            "minecraft:flammable": {
                "catch_chance_modifier": 5,
                "destroy_chance_modifier": 20,
                "lava_flammable": "always"
            },
            "minecraft:connection_rule": {
                "accepts_connections_from": "only_fences"
            },
            "minecraft:support": {
                "shape": "fence"
            },
            // Prevents snow from accumulating above the fence
            "minecraft:precipitation_interactions": {
                "precipitation_behavior": "obstruct_rain"
            },
            // Allows the fence to be waterlogged
            "minecraft:liquid_detection": {
                "detection_rules": [
                    {
                        "liquid_type": "water",
                        "can_contain_liquid": true
                    }
                ]
            },
            // Allows leads to be attached to the fence
            "minecraft:leashable": {
                "offset": [0, 12, 0]
            },
            "minecraft:selection_box": {
                "origin": [-2, 0, -2],
                "size": [4, 16, 4]
            },
            "minecraft:collision_box": {
                "origin": [-2, 0, -2],
                "size": [4, 24, 4]
            }
        }
    }
}
```

## Fence Model

You might have noticed that fences use two distinct models: one when carried in the inventory depicting two posts and a different model when placed which only has one post.

This means that we'll have to create two models for our custom fence, where one is applied to the block and the other is applied to the [block item](/blocks/blocks-as-items).

### Block Model

In this example, our block model will contain all of the fence rails (the horizontal parts of the fence).
Each pair of rails in each direction is contained within a separate bone.
This will allow us to conditionally show/hide the rails based on the block's permutation using [`bone_visibility`](/blocks/block-components#bone-visibility).

![](block_model.png){width=450}

<Spoiler title="Block Geometry JSON">

<ExampleFile path="RP/models/blocks/custom_fence.geo.json" />

</Spoiler>

<Spoiler title="Block Culling Rules JSON">

<ExampleFile path="RP/block_culling/custom_fence.json" />

</Spoiler>

### Item Model

In contrast, the bones in the item model are not necessary and have just been used to organize the cubes.

![](item_model.png){width=450}

<Spoiler title="Item Geometry JSON">

<ExampleFile path="RP/models/blocks/custom_fence_carried.geo.json" />

</Spoiler>

## Applying Geometry & Textures

<ExampleFile
    path="BP/blocks/custom_fence.json"
    snippet="minecraft:block/components/minecraft:geometry"
/>

In this example, we will simply be applying a custom wooden planks texture to our fence, although you might instead like to create a special model and texture for your fence like bamboo fences have in vanilla.

<ExampleFile
    path="BP/blocks/custom_fence.json"
    snippet="minecraft:block/components/minecraft:material_instances"
/>

### Item Visual

Next, we can use the [`minecraft:item_visual`](/blocks/block-components#item-visual) component to apply the item model to the block item:

<ExampleFile
    path="BP/blocks/custom_fence.json"
    snippet="minecraft:block/components/minecraft:item_visual"
/>

## Collision & Selection Boxes

Unlike geometry bones, collision and selection boxes cannot be individually enabled/disabled based on block states.
This means we'll have to manually list the components for each block permutation making use of the [`permutations`](/blocks/block-permutations#conditionally-applying-components) array.

<ExampleFile path="BP/blocks/custom_fence.json" snippet="minecraft:block/permutations" />

## Final Block JSON

<Spoiler title="Example Custom Fence Block JSON">

<ExampleFile path="BP/blocks/custom_fence.json" />

</Spoiler>

## Item JSON

Since our fence is made of wood, it should be able to be used as fuel in furnaces.
Therefore, we need to add the `minecraft:fuel` component to the fence by [replacing its block item](/blocks/blocks-as-items#replacing-block-items) as shown below:

<ExampleFile path="BP/items/custom_fence.json" />
