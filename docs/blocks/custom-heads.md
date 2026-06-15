---
title: Custom Heads
example: custom_heads
description: Learn how to create your own mob heads that can be worn, placed in different directions and dropped after charged creeper explosions!
category: Vanilla Re-Creations
tags:
    - expert
    - scripting
license: true
mentions:
    - QuazChick
---

:::tip FORMAT VERSION 1.26.30
This tutorial assumes an advanced understanding of blocks, items and scripting.
Check out the [blocks guide](/blocks/blocks-intro), [block states](/blocks/block-states) and [block events](/blocks/block-events) before starting.
:::

In this tutorial you will learn how to create your own mob head blocks.

**Features:**

-   Able to face any of 16 directions when placed on the ground and attach to the side faces of adjacent blocks.
-   Able to be worn on the heads of entities, hiding players on the locator bar and maps.
-   Drops as an item when the appropriate mob is exploded by a charged creeper.

**Issues:**

-   Custom heads cannot be stacked as items ([MCPE-176931](https://bugs.mojang.com/browse/MCPE-176931)).
-   Custom heads cannot be used to craft firework stars.
-   When enchanted, custom heads lack an enchantment glint outside of the user interface.

By the end of this tutorial, you should have created something like this:

<WikiImage
    src="showcase.png"
    alt="A charged creeper, surrounded by husk heads, waiting eagerly outside a desert villager's house"
    width="500"
/>

## Initial Block JSON

_Note that the block description does not have the `menu_category` parameter as that will be defined in the item JSON instead in a later step._

<CodeHeader path="BP/blocks/custom_head.json" />

```json
{
    "format_version": "1.26.30",
    "minecraft:block": {
        "description": {
            "identifier": "wiki:custom_head"
        },
        "components": {
            // Collision and selection boxes
            "minecraft:collision_box": {
                "origin": [-4, 0, -4],
                "size": [8, 8, 8]
            },
            "minecraft:selection_box": {
                "origin": [-4, 0, -4],
                "size": [8, 8, 8]
            },
            // Prevents blocks (such as fences) from connecting to the block
            "minecraft:connection_rule": {
                "accepts_connections_from": "none"
            },
            // Prevents the block from being placed on the bottom face of another block
            "minecraft:placement_filter": {
                "conditions": [{ "allowed_faces": ["up", "side"] }]
            },
            // Prevents snow from accumulating above the block
            "minecraft:precipitation_interactions": {
                "precipitation_behavior": "none"
            },
            // Destruction
            "minecraft:destructible_by_explosion": {
                "explosion_resistance": 5
            },
            "minecraft:destructible_by_mining": {
                "seconds_to_destroy": 1
            },
            "minecraft:destruction_particles": {
                "particle_count": 48,
                "texture": "soul_sand"
            },
            // Break and drop as an item when pushed by a piston
            "minecraft:movable": {
                "movement_type": "popped"
            },
            "minecraft:liquid_detection": {
                "detection_rules": [
                    {
                        "liquid_type": "water",
                        "can_contain_liquid": true, // Allows the block to be waterlogged
                        "on_liquid_touches": "popped" // Break and drop as an item when water flows into the block
                    }
                ]
            },
            // Visuals
            "minecraft:material_instances": {
                "down": {
                    "texture": "wiki:custom_head_bottom",
                    "ambient_occlusion": 0
                },
                "up": {
                    "texture": "wiki:custom_head_top",
                    "ambient_occlusion": 0
                },
                "north": {
                    "texture": "wiki:custom_head_front",
                    "ambient_occlusion": 0
                },
                "south": {
                    "texture": "wiki:custom_head_back",
                    "ambient_occlusion": 0
                },
                "west": {
                    "texture": "wiki:custom_head_left",
                    "ambient_occlusion": 0
                },
                "east": {
                    "texture": "wiki:custom_head_right",
                    "ambient_occlusion": 0
                }
            }
        }
    }
}
```

## Defining the Direction States

Mob heads use two types of [block orientation](/blocks/block-orientation).
They can be attached to the sides of adjacent blocks, or placed on the ground facing an intercardinal direction.

To support this, we'll need to add two direction states to our block:

-   For block face attachment, we will use the [placement position](/blocks/block-traits#placement-position) trait to enable the `minecraft:block_face` state.

    <ExampleFile path="BP/blocks/custom_head.json" snippet="minecraft:block/description/traits" />

-   For intercardinal orientation when placed on top of another block, we will add a `wiki:intercardinal_direction` state and use a modified version of the wiki's [intercardinal orientation](/blocks/intercardinal-orientation) system.
    As always, remember to change `wiki` to your own namespace!

    <ExampleFile path="BP/blocks/custom_head.json" snippet="minecraft:block/description/states" />

## Setting the Direction States

Given that it's a part of a block trait, the `minecraft:block_face` state will be set automatically.
However, to set the `wiki:intercardinal_direction` state to the correct value, we'll need to use a custom component.

::: tip LEARN MORE
For a more detailed explanation of how this custom component works, check out the [intercardinal orientation](/blocks/intercardinal-orientation#setting-the-direction-state) page!
:::

Add the following script to your `BP/scripts` folder to register the `wiki:intercardinal_orientation` component.

<Spoiler title="Intercardinal Orientation Script">

<ExampleFile path="BP/scripts/intercardinalOrientation.js" />

</Spoiler>

Now we can apply the component to the block when it is being placed on the `up` face of another block using the block [`permutations`](/blocks/block-permutations#conditionally-applying-components) array.

<CodeHeader path="BP/blocks/custom_head.json" breadcrumbs="minecraft:block" />

```json
"permutations": [
    {
        "condition": "q.block_state('minecraft:block_face') == 'up'",
        "components": {
            // Sets the "wiki:intercardinal_direction" state to the correct value before the block is placed
            "wiki:intercardinal_orientation": {
                "y_rotation_offset": 180 // Face towards the player
            }
        }
    }
]
```

## Block Model

Generally, the block [transformation](/blocks/block-components#transformation) component is used to rotate blocks to match their direction, however this component only supports angles that are multiples of 90 degrees.
To allow for the 22.5 degree intervals used for intercardinal rotation, your block's model will need a few extra bones.

There are four bones required for intercardinal orientation, each with different Y-axis rotations:

-   `0`{lang=json}
-   `22.5`{lang=json}
-   `45`{lang=json}
-   `67.5`{lang=json}

**These rotations are in a clockwise direction when looking at the model from above.**

### Cardinal Bone

First, you need to create a bone with no rotation, where the front of the model faces north.
In this tutorial, each bone will be named after its Y rotation, meaning this bone should have the name `0` as it has been rotated 0 degrees.

This is the bone that will be visible when the block is facing a cardinal direction (when `wiki:intercardinal_direction` is `0`{lang=json}, `4`{lang=json}, `8`{lang=json} or `12`{lang=json}) or when the head is attached to the side of an adjacent block.
At this stage, all cubes of your model must be direct children of this bone and cannot be contained in child bones.

![](model_bone_0.png)

### Intercardinal Bones

Now you need to duplicate this bone three times with the remaining rotation values (`22.5`{lang=json}, `45`{lang=json} and `67.5`{lang=json}).
These duplicate bones are used when rotating the block to face an intercardinal direction.

:::tip
You can duplicate bones in Blockbench by selecting the bone and pressing Ctrl + D.

Keep each bone's pivot point set to `[0, 0, 0]`{lang=json} so that its rotation is around the middle of the block.
:::

For reference, here's how the final model looks for a basic custom head. Be warned, it isn't a pretty sight just yet!

![](model_bones.png)

### Example Model

Here's the JSON code for a basic 8×8×8 head model, where each face of the block should have a separate 8×8 texture defined by material instances.

<Spoiler title="Example Head Model">

<ExampleFile path="RP/models/blocks/custom_head.geo.json" />

</Spoiler>

## Applying Block Rotation

### Bone Visibility

Not all bones in your model should be visible, so we make use of the `bone_visibility` parameter in the [geometry](/blocks/block-components#geometry) component to ensure that only the required bones are rendered.

Add the following component to your block:

<ExampleFile
    path="BP/blocks/custom_head.json"
    snippet="minecraft:block/components/minecraft:geometry"
/>

### Permutation Entries

Now, use the [`permutations`](/blocks/block-permutations) array to define the rotation for the base cardinal rotations of the block by inserting the following into your block `permutations` array (in the presented order):

<ExampleFile path="BP/blocks/custom_head.json" snippet="minecraft:block/permutations" />

## Final Block JSON

<Spoiler title="Custom Head Block JSON">

<ExampleFile path="BP/blocks/custom_head.json" />

</Spoiler>

## Item JSON

In order to make our custom head wearable and enchantable, we'll need to replace its [block item](/blocks/blocks-as-items) by adding a new item definition to our pack:

<ExampleFile path="BP/items/custom_head.json" />

Great! Now we're able to equip the block into the head slot:

![](inventory.png)

## Charged Creeper Drops

If a vanilla mob has a mob head associated with it, that head will drop as an item when the entity is exploded by a charged creeper.

You can use the following script to add drops for any custom heads.

<ExampleFile path="BP/scripts/headDrops.js" />

Remember to import the scripts into your entry file!

<ExampleFile path="BP/scripts/index.js" />

## Result

What you have created:

-   [x] A block model supporting intercardinal directions
-   [x] A block with 16 supported direction state values when placed on the ground, along with 4 side attachments
-   [x] A custom component that can be used to set the intercardinal direction state
-   [x] A block item that can be worn and enchanted
-   [x] A custom head drop system for charged creeper explosions

<WikiImage
    src="directions.png"
    alt="Custom head blocks in a square formation, each pointing towards the middle"
    width="500"
/>
