---
title: Custom Trapdoors
description: Re-creation of vanilla trapdoors.
category: Vanilla Re-Creations
tags:
    - intermediate
    - scripting
license: true
mentions:
    - Kaioga5
    - QuazChick
    - SmokeyStack
---

::: tip FORMAT VERSION 1.26.0
This tutorial assumes a good understanding of blocks and basic knowledge of scripting.
Check out the [blocks guide](/blocks/blocks-intro) before starting.
:::

Trapdoors are versatile blocks that serve well as parts of doors, fences, decorations, and, well — as trapdoors! It's no wonder you want to make your own to add to Minecraft's collection. Here's how it's done:

**Issues:**

-   Custom trapdoors cannot be powered by redstone or toggled by wind charges.

## Block JSON

This is the block JSON you'll need for basic trapdoor functionality.
It includes the rotation for each permutation of your trapdoor, meaning it can be placed in the same orientations as vanilla trapdoors.

<CodeHeader>BP/blocks/custom_trapdoor.json</CodeHeader>

```json
{
    "format_version": "1.26.0",
    "minecraft:block": {
        "description": {
            "identifier": "wiki:custom_trapdoor",
            "menu_category": {
                "category": "construction",
                "group": "minecraft:itemGroup.name.trapdoor"
            },
            "states": {
                "wiki:open": [false, true]
            },
            "traits": {
                "minecraft:placement_direction": {
                    "enabled_states": ["minecraft:cardinal_direction"],
                    "y_rotation_offset": 180
                },
                "minecraft:placement_position": {
                    "enabled_states": ["minecraft:vertical_half"]
                }
            }
        },
        "components": {
            "tag:trapdoors": {},
            "wiki:toggleable": {
                "block_state": "wiki:open",
                "enable_sound": "open.wooden_trapdoor",
                "disable_sound": "close.wooden_trapdoor"
            },
            // Collision and selection boxes
            "tag:one_way_collidable": {}, // Prevents players from being pushed out by the trapdoor collision, just like vanilla
            "minecraft:collision_box": {
                "origin": [-8, 0, -8],
                "size": [16, 2.92, 16]
            },
            "minecraft:selection_box": {
                "origin": [-8, 0, -8],
                "size": [16, 2.92, 16]
            },
            // Visuals
            "minecraft:destruction_particles": {
                "particle_count": 48
            },
            "minecraft:geometry": {
                "identifier": "geometry.custom_trapdoor",
                "culling": "wiki:culling.custom_trapdoor"
            },
            "minecraft:material_instances": {
                "*": {
                    "texture": "wiki:custom_trapdoor",
                    "render_method": "alpha_test_single_sided"
                }
            },
            // Allows the trapdoor to be waterlogged
            "minecraft:liquid_detection": {
                "detection_rules": [
                    {
                        "liquid_type": "water",
                        "can_contain_liquid": true
                    }
                ]
            },
            // Prevent snow from accumulating above the trapdoor
            "minecraft:precipitation_interactions": {
                "precipitation_behavior": "obstruct_rain"
            },
            // Prevent adjacent blocks from connecting when the trapdoor is closed
            "minecraft:connection_rule": {
                "accepts_connections_from": "none"
            }
        },
        "permutations": [
            // Connections
            {
                "condition": "q.block_state('wiki:open') && q.block_state('minecraft:cardinal_direction') == 'north'",
                "components": {
                    "minecraft:connection_rule": { "enabled_directions": ["south"] }
                }
            },
            {
                "condition": "q.block_state('wiki:open') && q.block_state('minecraft:cardinal_direction') == 'south'",
                "components": {
                    "minecraft:connection_rule": { "enabled_directions": ["north"] }
                }
            },
            {
                "condition": "q.block_state('wiki:open') && q.block_state('minecraft:cardinal_direction') == 'west'",
                "components": {
                    "minecraft:connection_rule": { "enabled_directions": ["east"] }
                }
            },
            {
                "condition": "q.block_state('wiki:open') && q.block_state('minecraft:cardinal_direction') == 'east'",
                "components": {
                    "minecraft:connection_rule": { "enabled_directions": ["west"] }
                }
            },
            // Bottom Closed
            {
                "condition": "q.block_state('minecraft:vertical_half') == 'bottom' && !q.block_state('wiki:open') && q.block_state('minecraft:cardinal_direction') == 'north'",
                "components": {
                    "minecraft:transformation": { "rotation": [0, 0, 0] }
                }
            },
            {
                "condition": "q.block_state('minecraft:vertical_half') == 'bottom' && !q.block_state('wiki:open') && q.block_state('minecraft:cardinal_direction') == 'south'",
                "components": {
                    "minecraft:transformation": { "rotation": [0, 180, 0] }
                }
            },
            {
                "condition": "q.block_state('minecraft:vertical_half') == 'bottom' && !q.block_state('wiki:open') && q.block_state('minecraft:cardinal_direction') == 'west'",
                "components": {
                    "minecraft:transformation": { "rotation": [0, 90, 0] }
                }
            },
            {
                "condition": "q.block_state('minecraft:vertical_half') == 'bottom' && !q.block_state('wiki:open') && q.block_state('minecraft:cardinal_direction') == 'east'",
                "components": {
                    "minecraft:transformation": { "rotation": [0, -90, 0] }
                }
            },
            // Bottom Open
            {
                "condition": "q.block_state('minecraft:vertical_half') == 'bottom' && q.block_state('wiki:open') && q.block_state('minecraft:cardinal_direction') == 'north'",
                "components": {
                    "minecraft:transformation": { "rotation": [-90, 0, 180] }
                }
            },
            {
                "condition": "q.block_state('minecraft:vertical_half') == 'bottom' && q.block_state('wiki:open') && q.block_state('minecraft:cardinal_direction') == 'south'",
                "components": {
                    "minecraft:transformation": { "rotation": [90, 0, 0] }
                }
            },
            {
                "condition": "q.block_state('minecraft:vertical_half') == 'bottom' && q.block_state('wiki:open') && q.block_state('minecraft:cardinal_direction') == 'west'",
                "components": {
                    "minecraft:transformation": { "rotation": [0, -90, 90] }
                }
            },
            {
                "condition": "q.block_state('minecraft:vertical_half') == 'bottom' && q.block_state('wiki:open') && q.block_state('minecraft:cardinal_direction') == 'east'",
                "components": {
                    "minecraft:transformation": { "rotation": [180, 90, 90] }
                }
            },
            // Top Closed
            {
                "condition": "q.block_state('minecraft:vertical_half') == 'top' && !q.block_state('wiki:open') && q.block_state('minecraft:cardinal_direction') == 'north'",
                "components": {
                    "minecraft:transformation": { "rotation": [0, 0, 180] }
                }
            },
            {
                "condition": "q.block_state('minecraft:vertical_half') == 'top' && !q.block_state('wiki:open') && q.block_state('minecraft:cardinal_direction') == 'south'",
                "components": {
                    "minecraft:transformation": { "rotation": [180, 0, 0] }
                }
            },
            {
                "condition": "q.block_state('minecraft:vertical_half') == 'top' && !q.block_state('wiki:open') && q.block_state('minecraft:cardinal_direction') == 'west'",
                "components": {
                    "minecraft:transformation": { "rotation": [180, -90, 0] }
                }
            },
            {
                "condition": "q.block_state('minecraft:vertical_half') == 'top' && !q.block_state('wiki:open') && q.block_state('minecraft:cardinal_direction') == 'east'",
                "components": {
                    "minecraft:transformation": { "rotation": [180, 90, 0] }
                }
            },
            // Top Open
            {
                "condition": "q.block_state('minecraft:vertical_half') == 'top' && q.block_state('wiki:open') && q.block_state('minecraft:cardinal_direction') == 'north'",
                "components": {
                    "minecraft:transformation": { "rotation": [-90, 0, 0] }
                }
            },
            {
                "condition": "q.block_state('minecraft:vertical_half') == 'top' && q.block_state('wiki:open') && q.block_state('minecraft:cardinal_direction') == 'south'",
                "components": {
                    "minecraft:transformation": { "rotation": [90, 0, 180] }
                }
            },
            {
                "condition": "q.block_state('minecraft:vertical_half') == 'top' && q.block_state('wiki:open') && q.block_state('minecraft:cardinal_direction') == 'west'",
                "components": {
                    "minecraft:transformation": { "rotation": [0, 90, 90] }
                }
            },
            {
                "condition": "q.block_state('minecraft:vertical_half') == 'top' && q.block_state('wiki:open') && q.block_state('minecraft:cardinal_direction') == 'east'",
                "components": {
                    "minecraft:transformation": { "rotation": [180, -90, 90] }
                }
            }
        ]
    }
}
```

## Custom Component Script

Now, it's time to put these permutations to use. The following script will allow the player to open and close the trapdoor by interacting with it. Don't forget to import this script into your main script entry.

<CodeHeader>BP/scripts/toggleable.js</CodeHeader>

```js
import { system } from "@minecraft/server";

/** @type {import("@minecraft/server").BlockCustomComponent} */
const BlockToggleableComponent = {
    onPlayerInteract({ block, dimension }, { params }) {
        const toggleableState = params.block_state;

        const currentValue = block.permutation.getState(toggleableState);
        const toggledValue = !currentValue;

        block.setPermutation(block.permutation.withState(toggleableState, toggledValue));

        const toggleSound = toggledValue ? params.enable_sound : params.disable_sound;
        dimension.playSound(toggleSound, block.center());
    },
};

system.beforeEvents.startup.subscribe(({ blockComponentRegistry }) => {
    blockComponentRegistry.registerCustomComponent("wiki:toggleable", BlockToggleableComponent);
});
```

## Block Model & Culling

This will be the geometry used for your custom trapdoors.

<Spoiler title="Geometry JSON">
  
<CodeHeader>RP/models/blocks/trapdoor.geo.json</CodeHeader>

```json
{
    "format_version": "1.26.0",
    "minecraft:geometry": [
        {
            "description": {
                "identifier": "geometry.custom_trapdoor",
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
                            "size": [16, 2.9, 16],
                            "uv": {
                                "north": { "uv": [16, 3], "uv_size": [-16, -3] },
                                "east": { "uv": [16, 3], "uv_size": [-16, -3] },
                                "south": { "uv": [16, 3], "uv_size": [-16, -3] },
                                "west": { "uv": [16, 3], "uv_size": [-16, -3] },
                                "up": { "uv": [0, 0], "uv_size": [16, 16] },
                                "down": { "uv": [16, 16], "uv_size": [-16, -16] }
                            }
                        }
                    ]
                }
            ],
            "item_display_transforms": {
                "gui": {
                    "fit_to_frame": false,
                    "rotation": [30, 225, 0],
                    "scale": [0.625, 0.625, 0.625],
                    "translation": [0, -0.15, 0]
                },
                "firstperson_righthand": {
                    "translation": [0, 2.6, 0]
                },
                "thirdperson_righthand": {
                    "translation": [0, 3.35, 2.25]
                },
                "fixed": {
                    "translation": [0, 3.45, 0]
                },
                "ground": {
                    "translation": [0, 4.65, 0]
                }
            }
        }
    ]
}
```

</Spoiler>

<Spoiler title="Block Culling Rules JSON">

<CodeHeader>RP/block_culling/trapdoor.json</CodeHeader>

```json
{
    "format_version": "1.21.80",
    "minecraft:block_culling_rules": {
        "description": {
            "identifier": "wiki:culling.trapdoor"
        },
        "rules": [
            {
                "direction": "down",
                "geometry_part": {
                    "bone": "trapdoor",
                    "cube": 0,
                    "face": "down"
                }
            },
            {
                "direction": "north",
                "geometry_part": {
                    "bone": "trapdoor",
                    "cube": 0,
                    "face": "north"
                }
            },
            {
                "direction": "south",
                "geometry_part": {
                    "bone": "trapdoor",
                    "cube": 0,
                    "face": "south"
                }
            },
            {
                "direction": "west",
                "geometry_part": {
                    "bone": "trapdoor",
                    "cube": 0,
                    "face": "west"
                }
            },
            {
                "direction": "east",
                "geometry_part": {
                    "bone": "trapdoor",
                    "cube": 0,
                    "face": "east"
                }
            }
        ]
    }
}
```

</Spoiler>
