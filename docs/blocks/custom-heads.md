---
title: Custom Heads
description: Learn how to create your own mob heads that can be worn, placed in different directions and dropped after charged creeper explosions!
category: Vanilla Re-Creations
tags:
    - expert
    - scripting
license: true
mentions:
    - QuazChick
---

:::tip FORMAT VERSION 1.26.0
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
    src="/assets/images/blocks/custom-heads/showcase.png"
    alt="A charged creeper, surrounded by husk heads, waiting eagerly outside a desert villager's house"
    width="500"
/>

## Initial Block JSON

_Note that the block description does not have the `menu_category` parameter as that will be defined in the item JSON instead in a later step._

<CodeHeader>BP/blocks/custom_head.json</CodeHeader>

```json
{
    "format_version": "1.26.0",
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
                    "ambient_occlusion": false
                },
                "up": {
                    "texture": "wiki:custom_head_top",
                    "ambient_occlusion": false
                },
                "north": {
                    "texture": "wiki:custom_head_front",
                    "ambient_occlusion": false
                },
                "south": {
                    "texture": "wiki:custom_head_back",
                    "ambient_occlusion": false
                },
                "west": {
                    "texture": "wiki:custom_head_left",
                    "ambient_occlusion": false
                },
                "east": {
                    "texture": "wiki:custom_head_right",
                    "ambient_occlusion": false
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
-   For intercardinal orientation when placed on top of another block, we will add a `wiki:intercardinal_direction` state and use a modified version of the wiki's [intercardinal orientation](/blocks/intercardinal-orientation) system.
    As always, remember to change `wiki` to your own namespace!

Add the following to your block `description`:

<CodeHeader>minecraft:block > description</CodeHeader>

```json
"traits": {
    "minecraft:placement_position": {
        "enabled_states": ["minecraft:block_face"]
    }
},
"states": {
    "wiki:intercardinal_direction": {
        "values": { "min": 0, "max": 15 }
    }
}
```

## Setting the Direction States

Given that it's a part of a block trait, the `minecraft:block_face` state will be set automatically.
However, to set the `wiki:intercardinal_direction` state to the correct value, we'll need to use a custom component.

::: tip LEARN MORE
For a more detailed explanation of how this custom component works, check out the [intercardinal orientation](/blocks/intercardinal-orientation#setting-the-direction-state) page!
:::

Add the following script to your `BP/scripts` folder to register the `wiki:intercardinal_orientation` component.

<Spoiler title="Intercardinal Orientation Script">

<CodeHeader>BP/scripts/intercardinalOrientation.js</CodeHeader>

```js
import { system } from "@minecraft/server";

/** @param {number} yRotation */
function getIntercardinalDirection(yRotation) {
    // Converts the Y rotation into a positive angle below 360
    yRotation %= 360;
    if (yRotation < 0) yRotation += 360;

    // Returns the Y rotation as an intercardinal direction below 16
    return Math.round(yRotation / 22.5) % 16;
}

// Make sure you change "wiki" to your own namespace!
const stateName = "wiki:intercardinal_direction";
const componentName = "wiki:intercardinal_orientation";

/** @type {import("@minecraft/server").BlockCustomComponent} */
const BlockIntercardinalOrientationComponent = {
    beforeOnPlayerPlace(event, { params }) {
        const { player } = event;
        if (!player) return;

        // Get the "y_rotation_offset" value defined in the block JSON (default to 0) and add it to the player's Y rotation
        const yRotationOffset = params.y_rotation_offset ?? 0;
        const yRotation = player.getRotation().y + yRotationOffset;

        // Get the intercardinal direction value (0-15) from the player's Y rotation
        const direction = getIntercardinalDirection(yRotation);

        // Update the block permutation being placed
        event.permutationToPlace = event.permutationToPlace.withState(stateName, direction);
    },
};

// Register the custom component with the name "wiki:intercardinal_orientation".
system.beforeEvents.startup.subscribe(({ blockComponentRegistry }) => {
    blockComponentRegistry.registerCustomComponent(
        componentName,
        BlockIntercardinalOrientationComponent
    );
});
```

</Spoiler>

Remember to import the script into your entry file!

<CodeHeader>BP/scripts/index.js</CodeHeader>

```js
import "./intercardinalOrientation.js";
```

Now we can apply the component to the block when it is being placed on the `up` face of another block using the block [`permutations`](/blocks/block-permutations#conditionally-applying-components) array.

<CodeHeader>minecraft:block</CodeHeader>

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

![](/assets/images/blocks/custom-heads/model_bone_0.png)

### Intercardinal Bones

Now you need to duplicate this bone three times with the remaining rotation values (`22.5`{lang=json}, `45`{lang=json} and `67.5`{lang=json}).
These duplicate bones are used when rotating the block to face an intercardinal direction.

:::tip
You can duplicate bones in Blockbench by selecting the bone and pressing Ctrl + D.

Keep each bone's pivot point set to `[0, 0, 0]`{lang=json} so that its rotation is around the middle of the block.
:::

For reference, here's how the final model looks for a basic custom head. Be warned, it isn't a pretty sight just yet!

![](/assets/images/blocks/custom-heads/model_bones.png)

### Example Model

Here's the JSON code for a basic 8×8×8 head model, where each face of the block should have a separate 8×8 texture defined by material instances.

<Spoiler title="Example Head Model">

<CodeHeader>RP/models/blocks/custom_head.geo.json</CodeHeader>

```json
{
    "format_version": "1.26.0",
    "minecraft:geometry": [
        {
            "description": {
                "identifier": "geometry.custom_head",
                "texture_width": 8,
                "texture_height": 8
            },
            "item_display_transforms": {
                "gui": {
                    "fit_to_frame": false,
                    "rotation": [30, 225, 0],
                    "scale": [1, 1, 1],
                    "translation": [0, 3, 0]
                },
                "fixed": {
                    "scale": [1, 1, 1],
                    "translation": [0, 4, 0]
                },
                "ground": {
                    "scale": [0.5, 0.5, 0.5],
                    "translation": [0, 3, 0]
                },
                "firstperson_righthand": {
                    "rotation": [0, 180, 0],
                    "scale": [1, 1, 1]
                },
                "thirdperson_righthand": {
                    "rotation": [45, 225, 0],
                    "scale": [0.5, 0.5, 0.5],
                    "translation": [0, 3, 0]
                },
                "head": {
                    "scale": [1.9, 1.9, 1.9],
                    "translation": [0, 8, 0]
                }
            },
            "bones": [
                {
                    "name": "0",
                    "pivot": [0, 0, 0],
                    "cubes": [
                        {
                            "origin": [-4, 0, -4],
                            "size": [8, 8, 8],
                            "uv": {
                                "north": { "uv": [0, 0], "uv_size": [8, 8] },
                                "east": { "uv": [0, 0], "uv_size": [8, 8] },
                                "south": { "uv": [0, 0], "uv_size": [8, 8] },
                                "west": { "uv": [0, 0], "uv_size": [8, 8] },
                                "up": { "uv": [0, 0], "uv_size": [8, 8] },
                                "down": { "uv": [0, 8], "uv_size": [8, -8] }
                            }
                        }
                    ]
                },
                {
                    "name": "22.5",
                    "pivot": [0, 0, 0],
                    "rotation": [0, 22.5, 0],
                    "cubes": [
                        {
                            "origin": [-4, 0, -4],
                            "size": [8, 8, 8],
                            "uv": {
                                "north": { "uv": [0, 0], "uv_size": [8, 8] },
                                "east": { "uv": [0, 0], "uv_size": [8, 8] },
                                "south": { "uv": [0, 0], "uv_size": [8, 8] },
                                "west": { "uv": [0, 0], "uv_size": [8, 8] },
                                "up": { "uv": [0, 0], "uv_size": [8, 8] },
                                "down": { "uv": [0, 8], "uv_size": [8, -8] }
                            }
                        }
                    ]
                },
                {
                    "name": "45",
                    "pivot": [0, 0, 0],
                    "rotation": [0, 45, 0],
                    "cubes": [
                        {
                            "origin": [-4, 0, -4],
                            "size": [8, 8, 8],
                            "uv": {
                                "north": { "uv": [0, 0], "uv_size": [8, 8] },
                                "east": { "uv": [0, 0], "uv_size": [8, 8] },
                                "south": { "uv": [0, 0], "uv_size": [8, 8] },
                                "west": { "uv": [0, 0], "uv_size": [8, 8] },
                                "up": { "uv": [0, 0], "uv_size": [8, 8] },
                                "down": { "uv": [0, 8], "uv_size": [8, -8] }
                            }
                        }
                    ]
                },
                {
                    "name": "67.5",
                    "pivot": [0, 0, 0],
                    "rotation": [0, 67.5, 0],
                    "cubes": [
                        {
                            "origin": [-4, 0, -4],
                            "size": [8, 8, 8],
                            "uv": {
                                "north": { "uv": [0, 0], "uv_size": [8, 8] },
                                "east": { "uv": [0, 0], "uv_size": [8, 8] },
                                "south": { "uv": [0, 0], "uv_size": [8, 8] },
                                "west": { "uv": [0, 0], "uv_size": [8, 8] },
                                "up": { "uv": [0, 0], "uv_size": [8, 8] },
                                "down": { "uv": [0, 8], "uv_size": [8, -8] }
                            }
                        }
                    ]
                }
            ]
        }
    ]
}
```

</Spoiler>

## Applying Block Rotation

### Bone Visibility

Not all bones in your model should be visible, so we make use of the `bone_visibility` parameter in the [geometry](/blocks/block-components#geometry) component to ensure that only the required bones are rendered.

Add the following component to your block:

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:geometry": {
    "identifier": "geometry.custom_head", // Model created in previous step
    "bone_visibility": {
        "0": "math.mod(q.block_state('wiki:intercardinal_direction'), 4) == 0",
        "22.5": "math.mod(q.block_state('wiki:intercardinal_direction'), 4) == 1",
        "45": "math.mod(q.block_state('wiki:intercardinal_direction'), 4) == 2",
        "67.5": "math.mod(q.block_state('wiki:intercardinal_direction'), 4) == 3"
    }
}
```

### Permutation Entries

Now, use the [`permutations`](/blocks/block-permutations) array to define the rotation for the base cardinal rotations of the block by inserting the following into your block `permutations` array (in the presented order):

<CodeHeader>minecraft:block > permutations</CodeHeader>

```json
// Intercardinal directions
{
    "condition": "q.block_state('wiki:intercardinal_direction') >= 0",
    "components": {
        "minecraft:transformation": { "rotation": [0, 180, 0] }
    }
},
{
    "condition": "q.block_state('wiki:intercardinal_direction') >= 4",
    "components": {
        "minecraft:transformation": { "rotation": [0, 90, 0] }
    }
},
{
    "condition": "q.block_state('wiki:intercardinal_direction') >= 8",
    "components": {
        "minecraft:transformation": { "rotation": [0, 0, 0] }
    }
},
{
    "condition": "q.block_state('wiki:intercardinal_direction') >= 12",
    "components": {
        "minecraft:transformation": { "rotation": [0, -90, 0] }
    }
},
// Block face attachments
{
    "condition": "q.block_state('minecraft:block_face') == 'north'",
    "components": {
        "minecraft:transformation": {
            "rotation": [0, 0, 0],
            "translation": [0, 0.25, 0.25]
        }
    }
},
{
    "condition": "q.block_state('minecraft:block_face') == 'west'",
    "components": {
        "minecraft:transformation": {
            "rotation": [0, 90, 0],
            "translation": [0.25, 0.25, 0]
        }
    }
},
{
    "condition": "q.block_state('minecraft:block_face') == 'south'",
    "components": {
        "minecraft:transformation": {
            "rotation": [0, 180, 0],
            "translation": [0, 0.25, -0.25]
        }
    }
},
{
    "condition": "q.block_state('minecraft:block_face') == 'east'",
    "components": {
        "minecraft:transformation": {
            "rotation": [0, -90, 0],
            "translation": [-0.25, 0.25, 0]
        }
    }
}
```

## Final Block JSON

<Spoiler title="Custom Head Block JSON">

<CodeHeader>BP/blocks/custom_head.json</CodeHeader>

```json
{
    "format_version": "1.26.0",
    "minecraft:block": {
        "description": {
            "identifier": "wiki:custom_head",
            "traits": {
                "minecraft:placement_position": {
                    "enabled_states": ["minecraft:block_face"]
                }
            },
            "states": {
                "wiki:intercardinal_direction": {
                    "values": { "min": 0, "max": 15 }
                }
            }
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
            "minecraft:geometry": {
                "identifier": "geometry.custom_head",
                "bone_visibility": {
                    "0": "math.mod(q.block_state('wiki:intercardinal_direction'), 4) == 0",
                    "22.5": "math.mod(q.block_state('wiki:intercardinal_direction'), 4) == 1",
                    "45": "math.mod(q.block_state('wiki:intercardinal_direction'), 4) == 2",
                    "67.5": "math.mod(q.block_state('wiki:intercardinal_direction'), 4) == 3"
                }
            },
            "minecraft:material_instances": {
                "down": {
                    "texture": "wiki:custom_head_bottom",
                    "ambient_occlusion": false
                },
                "up": {
                    "texture": "wiki:custom_head_top",
                    "ambient_occlusion": false
                },
                "north": {
                    "texture": "wiki:custom_head_front",
                    "ambient_occlusion": false
                },
                "south": {
                    "texture": "wiki:custom_head_back",
                    "ambient_occlusion": false
                },
                "west": {
                    "texture": "wiki:custom_head_left",
                    "ambient_occlusion": false
                },
                "east": {
                    "texture": "wiki:custom_head_right",
                    "ambient_occlusion": false
                }
            }
        },
        "permutations": [
            {
                "condition": "q.block_state('minecraft:block_face') == 'up'",
                "components": {
                    // Sets the "wiki:intercardinal_direction" state to the correct value before the block is placed
                    "wiki:intercardinal_orientation": {
                        "y_rotation_offset": 180 // Face towards the player
                    }
                }
            },
            // Intercardinal directions
            {
                "condition": "q.block_state('wiki:intercardinal_direction') >= 0",
                "components": {
                    "minecraft:transformation": { "rotation": [0, 180, 0] }
                }
            },
            {
                "condition": "q.block_state('wiki:intercardinal_direction') >= 4",
                "components": {
                    "minecraft:transformation": { "rotation": [0, 90, 0] }
                }
            },
            {
                "condition": "q.block_state('wiki:intercardinal_direction') >= 8",
                "components": {
                    "minecraft:transformation": { "rotation": [0, 0, 0] }
                }
            },
            {
                "condition": "q.block_state('wiki:intercardinal_direction') >= 12",
                "components": {
                    "minecraft:transformation": { "rotation": [0, -90, 0] }
                }
            },
            // Block face attachments
            {
                "condition": "q.block_state('minecraft:block_face') == 'north'",
                "components": {
                    "minecraft:transformation": {
                        "rotation": [0, 0, 0],
                        "translation": [0, 0.25, 0.25]
                    }
                }
            },
            {
                "condition": "q.block_state('minecraft:block_face') == 'west'",
                "components": {
                    "minecraft:transformation": {
                        "rotation": [0, 90, 0],
                        "translation": [0.25, 0.25, 0]
                    }
                }
            },
            {
                "condition": "q.block_state('minecraft:block_face') == 'south'",
                "components": {
                    "minecraft:transformation": {
                        "rotation": [0, 180, 0],
                        "translation": [0, 0.25, -0.25]
                    }
                }
            },
            {
                "condition": "q.block_state('minecraft:block_face') == 'east'",
                "components": {
                    "minecraft:transformation": {
                        "rotation": [0, -90, 0],
                        "translation": [-0.25, 0.25, 0]
                    }
                }
            }
        ]
    }
}
```

</Spoiler>

## Item JSON

In order to make our custom head wearable and enchantable, we'll need to replace its [block item](/blocks/blocks-as-items) by adding a new item definition to our pack:

<CodeHeader>BP/items/custom_head.json</CodeHeader>

```json
{
    "format_version": "1.26.0",
    "minecraft:item": {
        "description": {
            "identifier": "wiki:custom_head", // Must be the same identifier as the block
            "menu_category": {
                "category": "items",
                "group": "minecraft:itemGroup.name.skull"
            }
        },
        "components": {
            "minecraft:block_placer": {
                "block": "wiki:custom_head", // Must be the same identifier as the block
                "replace_block_item": true
            },
            // Use the same localization key as the block
            "minecraft:display_name": {
                "value": "tile.wiki:custom_head.name"
            },
            // Allows the head to be enchanted with "Curse of Binding" and "Curse of Vanishing"
            "minecraft:enchantable": {
                "slot": "cosmetic_head",
                "value": 0
            },
            "minecraft:max_stack_size": 1, // Currently, custom wearable items cannot be stackable
            "minecraft:rarity": "uncommon",
            // Allows the item to be equipped into the head slot
            "minecraft:wearable": {
                "hides_player_location": true, // Hides the player from the locator bar and maps like vanilla heads
                "slot": "slot.armor.head"
            }
        }
    }
}
```

Great! Now we're able to equip the block into the head slot:

![](/assets/images/blocks/custom-heads/inventory.png)

## Charged Creeper Drops

If a vanilla mob has a mob head associated with it, that head will drop as an item when the entity is exploded by a charged creeper.

You can use the following script to add drops for any custom heads.

<CodeHeader>BP/scripts/headDrops.js</CodeHeader>

```js
import { ItemStack, system, world } from "@minecraft/server";

// Object where keys are entity types and values are the item to drop when exploded by a charged creeper
const heads = {
    "minecraft:husk": "wiki:custom_head",
};

// Set containing the unique IDs of charged creepers that have exploded within the last tick
const explodingChargedCreepers = new Set();

world.beforeEvents.explosion.subscribe(({ source }) => {
    if (!source) return;

    const isCreeper = source.typeId === "minecraft:creeper";
    const isCharged = source.hasComponent("minecraft:is_charged");

    if (isCreeper && isCharged) {
        // Add the charged creeper's ID to the set
        explodingChargedCreepers.add(source.id);

        // Remove the ID after the next tick
        system.runTimeout(() => explodingChargedCreepers.delete(source.id), 1);
    }
});

world.afterEvents.entityDie.subscribe(
    (event) => {
        const { damagingEntity } = event.damageSource;
        if (!damagingEntity || !world.gameRules.doMobLoot) return;

        // Check whether the damaging entity is one of the charged creepers that exploded within the last tick
        const explodedByChargedCreeper = explodingChargedCreepers.has(damagingEntity.id);

        if (explodedByChargedCreeper) {
            const { dimension, location, typeId } = event.deadEntity;
            const head = heads[typeId];

            dimension.spawnItem(new ItemStack(head), location);
        }
    },
    { entityTypes: Object.keys(heads) } // Only subscribe to the deaths of entities that should drop heads
);
```

Remember to import the script into your entry file!

<CodeHeader>BP/scripts/index.js</CodeHeader>

```js
import "./headDrops.js";
import "./intercardinalOrientation.js";
```

## Result

What you have created:

-   [x] A block model supporting intercardinal directions
-   [x] A block with 16 supported direction state values when placed on the ground, along with 4 side attachments
-   [x] A custom component that can be used to set the intercardinal direction state
-   [x] A block item that can be worn and enchanted
-   [x] A custom head drop system for charged creeper explosions

<WikiImage
    src="/assets/images/blocks/custom-heads/directions.png"
    alt="Custom head blocks in a square formation, each pointing towards the middle"
    width="500"
/>

### Download Example Pack

Template pack made according to this tutorial, adding a "Custom Head" block that is dropped when husks are exploded by charged creepers.

<Button link="https://github.com/Bedrock-OSS/bedrock-examples/releases/download/download/custom_heads.mcaddon">
    Download MCADDON
</Button>
