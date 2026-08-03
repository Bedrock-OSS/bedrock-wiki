---
title: Custom Heads
example: custom_heads
description: Learn how to create your own mob heads that can be worn, placed in different directions and dropped after charged creeper explosions!
category: Vanilla Re-Creations
tags:
    - expert
license: true
mentions:
    - QuazChick
---

:::tip FORMAT VERSION 1.26.40
This tutorial assumes an advanced understanding of blocks and items.
Check out the [blocks guide](/blocks/blocks-intro), [block states](/blocks/block-states) and [block events](/blocks/block-events) before starting.
:::

In this tutorial you will learn how to create your own mob head blocks.

**Features:**

-   Able to face any of 16 directions when placed on the ground and attach to the side faces of adjacent blocks.
-   Able to be worn on the heads of entities, hiding players on the locator bar and maps.
-   Drops as an item when the appropriate mob is exploded by a charged creeper.

**Issues:**

-   Custom heads cannot be used to craft firework stars.
-   When enchanted, custom heads lack an enchantment glint outside of the user interface.

By the end of this tutorial, you should have created something like this:

<WikiImage
    src="showcase.png"
    alt="A charged creeper, surrounded by husk heads, waiting eagerly outside a desert villager's house"
    width="500"
/>

## Block Model

![](model.png)

Here's the JSON code for a basic 8×8×8 head model, where each face of the block should have a separate 8×8 texture defined by material instances.

<Spoiler title="Example Head Model">

<ExampleFile path="RP/models/blocks/custom_head.geo.json" />

</Spoiler>

## Initial Block JSON

_Note that the block description does not have the `menu_category` parameter as that will be defined in the item JSON instead in a later step._

<CodeHeader path="BP/blocks/custom_head.json" />

```json
{
    "format_version": "1.26.40",
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
                "conditions": [{ "allowed_faces": ["up", "south", "north", "west", "east"] }]
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

## Enabling the Direction States

Mob heads use two types of [block orientation](/blocks/block-orientation).
They can be attached to the sides of adjacent blocks, or placed on the ground facing one of 16 directions.

To support this, we'll need to add two direction states to our block:

-   For 16-way rotation when placed on the ground, we will use the [placement direction](/blocks/block-traits#placement-direction) trait to enable the `minecraft:sixteen_way_rotation` state.
-   For block face attachment, we will use the [placement position](/blocks/block-traits#placement-position) trait to enable the `minecraft:block_face` state.

<ExampleFile path="BP/blocks/custom_head.json" snippet="minecraft:block/description/traits" />

## Applying Block Rotation

### Ground Rotation

First, we'll make use of the [N-way rotation](/blocks/n-way-rotation) geometry feature to apply 16-way rotation when the head is placed on top of another block.

<ExampleFile
    path="BP/blocks/custom_head.json"
    snippet="minecraft:block/components/minecraft:geometry"
/>

### Wall Attachment

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

<Tag name="scripting" />

If a vanilla mob has a mob head associated with it, that head will drop as an item when the entity is exploded by a charged creeper.

You can use the following script to add drops for any custom heads.

<ExampleFile path="BP/scripts/headDrops.js" />

Remember to import the scripts into your entry file and set up scripts in `BP/manifest.json` if you haven't already!

<ExampleFile path="BP/scripts/index.js" />

## Result

What you have created:

-   [x] A block with 16 supported direction state values when placed on the ground, along with 4 side attachments
-   [x] A block item that can be worn and enchanted
-   [x] A custom head drop system for charged creeper explosions

<WikiImage
    src="directions.png"
    alt="Custom head blocks in a square formation, each pointing towards the middle"
    width="500"
/>
