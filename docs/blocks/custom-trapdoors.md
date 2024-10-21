---
title: Custom Trapdoors
description: Re-creation of vanilla trapdoors.
category: Vanilla Re-Creations
tags:
    - intermediate
    - scripting
mentions:
    - Kaioga5
    - QuazChick
    - SmokeyStack
---

::: tip FORMAT & MIN ENGINE VERSION `1.21.40`
This tutorial assumes a good understanding of blocks and basic knowledge of scripting.
Check out the [blocks guide](/blocks/blocks-intro) before starting.
:::

Trapdoors are versatile blocks that serve well as parts of doors, fences, decorations, and, well — as trapdoors! It's no wonder you want to make your own to add to Minecraft's collection. Here's how it's done:

## Block JSON

This is the block JSON you'll need for basic trapdoor functionality. It includes the rotation for each permutation of your trapdoor, meaning it can be placed in the same orientations as vanilla trapdoors.

<CodeHeader>BP/blocks/custom_trapdoor.json</CodeHeader>

```json
{
    "format_version": "1.21.40",
    "minecraft:block": {
        "description": {
            "identifier": "wiki:custom_trapdoor",
            "menu_category": {
                "category": "construction",
                "group": "itemGroup.name.trapdoor"
            },
            "states": {
                "wiki:open": [false, true]
            },
            "traits": {
                "minecraft:placement_position": {
                    "enabled_states": ["minecraft:vertical_half"]
                },
                "minecraft:placement_direction": {
                    "enabled_states": ["minecraft:cardinal_direction"]
                }
            }
        },
        "components": {
            "minecraft:custom_components": ["wiki:custom_trapdoor"],
            "minecraft:collision_box": {
                "origin": [-8, 0, -8],
                "size": [16, 3, 16]
            },
            "tag:one_way_collidable": {}, // Prevents the player from being pushed out by the trapdoor collision, just like vanilla
            "minecraft:selection_box": {
                "origin": [-8, 0, -8],
                "size": [16, 3, 16]
            },
            "minecraft:geometry": "geometry.trapdoor",
            "minecraft:material_instances": {
                "*": {
                    "texture": "acacia_trapdoor",
                    "render_method": "alpha_test_single_sided"
                }
            }
        },
        "permutations": [
            // Top Closed
            {
                "condition": "q.block_state('minecraft:vertical_half') == 'top' && q.block_state('minecraft:cardinal_direction') == 'north' && !q.block_state('wiki:open')",
                "components": {
                    "minecraft:transformation": { "rotation": [0, 0, 180] }
                }
            },
            {
                "condition": "q.block_state('minecraft:vertical_half') == 'top' && q.block_state('minecraft:cardinal_direction') == 'south' && !q.block_state('wiki:open')",
                "components": {
                    "minecraft:transformation": { "rotation": [180, 0, 0] }
                }
            },
            {
                "condition": "q.block_state('minecraft:vertical_half') == 'top' && q.block_state('minecraft:cardinal_direction') == 'east' && !q.block_state('wiki:open')",
                "components": {
                    "minecraft:transformation": { "rotation": [180, -270, 0] }
                }
            },
            {
                "condition": "q.block_state('minecraft:vertical_half') == 'top' && q.block_state('minecraft:cardinal_direction') == 'west' && !q.block_state('wiki:open')",
                "components": {
                    "minecraft:transformation": { "rotation": [180, 270, 0] }
                }
            },
            // Top Open
            {
                "condition": "q.block_state('minecraft:vertical_half') == 'top' && q.block_state('minecraft:cardinal_direction') == 'north' && q.block_state('wiki:open')",
                "components": {
                    "minecraft:transformation": { "rotation": [-270, 0, 0] }
                }
            },
            {
                "condition": "q.block_state('minecraft:vertical_half') == 'top' && q.block_state('minecraft:cardinal_direction') == 'south' && q.block_state('wiki:open')",
                "components": {
                    "minecraft:transformation": { "rotation": [270, 0, -180] }
                }
            },
            {
                "condition": "q.block_state('minecraft:vertical_half') == 'top' && q.block_state('minecraft:cardinal_direction') == 'east' && q.block_state('wiki:open')",
                "components": {
                    "minecraft:transformation": { "rotation": [0, 270, 90] }
                }
            },
            {
                "condition": "q.block_state('minecraft:vertical_half') == 'top' && q.block_state('minecraft:cardinal_direction') == 'west' && q.block_state('wiki:open')",
                "components": {
                    "minecraft:transformation": { "rotation": [180, -270, -270] }
                }
            },
            // Bottom Closed
            {
                "condition": "q.block_state('minecraft:vertical_half') == 'bottom' && q.block_state('minecraft:cardinal_direction') == 'north' && !q.block_state('wiki:open')",
                "components": {
                    "minecraft:transformation": { "rotation": [0, 0, 0] }
                }
            },
            {
                "condition": "q.block_state('minecraft:vertical_half') == 'bottom' && q.block_state('minecraft:cardinal_direction') == 'south' && !q.block_state('wiki:open')",
                "components": {
                    "minecraft:transformation": { "rotation": [0, 180, 0] }
                }
            },
            {
                "condition": "q.block_state('minecraft:vertical_half') == 'bottom' && q.block_state('minecraft:cardinal_direction') == 'east' && !q.block_state('wiki:open')",
                "components": {
                    "minecraft:transformation": { "rotation": [0, 270, 0] }
                }
            },
            {
                "condition": "q.block_state('minecraft:vertical_half') == 'bottom' && q.block_state('minecraft:cardinal_direction') == 'west' && !q.block_state('wiki:open')",
                "components": {
                    "minecraft:transformation": { "rotation": [0, -270, 0] }
                }
            },
            // Bottom Open
            {
                "condition": "q.block_state('minecraft:vertical_half') == 'bottom' && q.block_state('minecraft:cardinal_direction') == 'north' && q.block_state('wiki:open')",
                "components": {
                    "minecraft:transformation": { "rotation": [90, 0, 180] }
                }
            },
            {
                "condition": "q.block_state('minecraft:vertical_half') == 'bottom' && q.block_state('minecraft:cardinal_direction') == 'south' && q.block_state('wiki:open')",
                "components": {
                    "minecraft:transformation": { "rotation": [270, 0, 0] }
                }
            },
            {
                "condition": "q.block_state('minecraft:vertical_half') == 'bottom' && q.block_state('minecraft:cardinal_direction') == 'east' && q.block_state('wiki:open')",
                "components": {
                    "minecraft:transformation": { "rotation": [0, -270, 90] }
                }
            },
            {
                "condition": "q.block_state('minecraft:vertical_half') == 'bottom' && q.block_state('minecraft:cardinal_direction') == 'west' && q.block_state('wiki:open')",
                "components": {
                    "minecraft:transformation": { "rotation": [180, 270, -270] }
                }
            }
        ]
    }
}
```

## Custom Component Script

Now, it's time to put these permutations to use. The following script will allow the player to open and close the trapdoor by interacting with it. Don't forget to import this script into your main script entry.

<CodeHeader>BP/scripts/custom_trapdoor.js</CodeHeader>

```js
import { world } from "@minecraft/server";

/** @type {import("@minecraft/server").BlockCustomComponent} */
const CustomTrapdoorBlockComponent = {
    onPlayerInteract({ block, dimension }) {
        const isOpen = block.permutation.getState("wiki:open");
        const sound = isOpen ? "close.wooden_trapdoor" : "open.wooden_trapdoor";

        block.setPermutation(block.permutation.withState("wiki:open", !isOpen));

        dimension.playSound(sound, block.center(), {
            pitch: 0.9,
            volume: 0.9,
        });
    },
};

world.beforeEvents.worldInitialize.subscribe(({ blockComponentRegistry }) => {
    blockComponentRegistry.registerCustomComponent(
        "wiki:custom_trapdoor",
        CustomTrapdoorBlockComponent
    );
});
```

## Block Model

This will be the geometry used for your custom trapdoors.

<Spoiler title="Geometry JSON">
  
<CodeHeader>RP/models/blocks/trapdoor.geo.json</CodeHeader>

```json
{
    "format_version": "1.21.40",
    "minecraft:geometry": [
        {
            "description": {
                "identifier": "geometry.trapdoor",
                "texture_width": 16,
                "texture_height": 16
            },
            "bones": [
                {
                    "name": "trapdoor",
                    "pivot": [0, 0, 0],
                    "cubes": [
                        {
                            "origin": [-8, 0, -8],
                            "size": [16, 3, 16],
                            "uv": {
                                "north": { "uv": [16, 3], "uv_size": [-16, -3] },
                                "east": { "uv": [16, 3], "uv_size": [-16, -3] },
                                "south": { "uv": [16, 3], "uv_size": [-16, -3] },
                                "west": { "uv": [16, 3], "uv_size": [-16, -3] },
                                "up": { "uv": [16, 16], "uv_size": [-16, -16] },
                                "down": { "uv": [0, 0], "uv_size": [16, 16] }
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

:::tip
Vanilla trapdoors have a few issues in the direction of the texture in certain faces and having a height of 2.95 when it should be 3. This block template and geometry fixes both of those issues.
:::
