---
title: Custom Crops
description: Learn how to create your own crop blocks that grow just like vanilla crops!
category: Vanilla Re-Creations
tags:
    - experimental
    - intermediate
    - scripting
license: true
mentions:
    - Ivyman1992
    - Provedule
    - ThomasOrs
    - QuazChick
    - SmokeyStack
---

:::tip FORMAT & MIN ENGINE VERSION `1.21.110`
This tutorial assumes a good understanding of blocks and scripting.
Check out the [blocks guide](/blocks/blocks-intro), [block states](/blocks/block-states) and [block events](/blocks/block-events) before starting.
:::
:::warning EXPERIMENTAL
This example requires "Beta APIs" to be enabled for your world in order to use the light level APIs to affect crop growth.
:::

If you aren't a fan of carrots - that's fine. You can make your own (far superior) crop!

Making crops is not as difficult as you may think, it just takes a little practice and forethought in coding a specific series of events. This page will guide you through the process of creating a unique crop block as well as its seed and food items.

**Issues:**

-   Custom crops cannot be destroyed by flowing lava.
-   Custom crops become dark when surrounded by full blocks.

## Crop Model

If you look at crops like carrots and potatoes in-game, you will see that they are made up of 4 planes that are situated 4 pixels from each edge, as shown in the screenshot below.

It is noteworthy to mention that each plane sits 1 pixel down, unlike traditional blocks. If you forget to lower the planes down by one, then the crops will appear to grow one pixel higher then the top of farmland which has a shorter model.

By lowering the position down a pixel, it will sit above farmland perfectly making everything right in our blocky world. Here is a template model for the crop.

![](/assets/images/blocks/custom-crops/model.png)

<Button link="https://github.com/Bedrock-OSS/bedrock-examples/blob/main/resources/custom_crops/rp/models/blocks/crop.geo.json">
    Download Custom Crop Geometry
</Button>

## Initial Block JSON

To start with, we want our crops to have 8 stages of growth like vanilla crops, so the block should include a state with 8 values.

This code example also includes the base components of our crop which will be active in every permutation.

<CodeHeader>BP/blocks/custom_crop.json</CodeHeader>

```json
{
    "format_version": "1.21.110",
    "minecraft:block": {
        "description": {
            "identifier": "wiki:custom_crop",
            "menu_category": {
                "category": "none" // Hide from creative inventory - seeds should be used to place.
            },
            "states": {
                "wiki:growth": {
                    "values": { "min": 0, "max": 7 }
                }
            }
        },
        "components": {
            "minecraft:collision_box": false,
            "minecraft:light_dampening": 0,
            "minecraft:geometry": "geometry.crop", // Model provided in previous step.
            "minecraft:material_instances": {
                "*": {
                    "texture": "wiki:custom_crop_0",
                    "render_method": "alpha_test_single_sided",
                    "ambient_occlusion": false,
                    "face_dimming": false
                }
            },
            // Break the crop if it isn't placed on farmland.
            "minecraft:placement_filter": {
                "conditions": [
                    {
                        "allowed_faces": ["up"],
                        "block_filter": ["minecraft:farmland"]
                    }
                ]
            },
            // Break the crop when water flows into it.
            "minecraft:liquid_detection": {
                "detection_rules": [
                    {
                        "liquid_type": "water",
                        "on_liquid_touches": "broken"
                    }
                ]
            },
            // Break the crop when it is pushed by a piston
            "minecraft:movable": {
                "movement_type": "popped"
            }
        }
    }
}
```

## Custom Growable Component

The events below do two important functions to make your crop work:

-   The [`onRandomTick`](/blocks/block-events#random-tick) event hook is used to increment the `wiki:growth` state at a random interval.
-   The [`onPlayerInteract`](/blocks/block-events#player-interact) event hook is for bone meal support, adding a random value to `wiki:growth` in survival mode or fully growing the crop in creative mode.

<CodeHeader>BP/scripts/custom_crop.js</CodeHeader>

```js
import { EquipmentSlot, GameMode, system } from "@minecraft/server";

/**
 * @param {number} min The minimum integer
 * @param {number} max The maximum integer
 * @returns {number} A random integer between the `min` and `max` parameters (inclusive)
 */
const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

/** @type {import("@minecraft/server").BlockCustomComponent} */
const BlockGrowableComponent = {
    onRandomTick({ block }, { params }) {
        const minLightLevel = params.min_light_level;

        const lightLevel = block.getLightLevel();
        if (lightLevel < minLightLevel) return;

        const growthState = params.growth_state;
        const growthChance = params.growth_chance / 100;

        if (Math.random() > growthChance) return;

        const growth = block.permutation.getState(growthState);
        block.setPermutation(block.permutation.withState(growthState, growth + 1));
    },
    onPlayerInteract({ block, dimension, player }, { params }) {
        const growthState = params.growth_state;
        const maxGrowth = params.max_growth;

        if (!player) return;

        const equippable = player.getComponent("minecraft:equippable");
        if (!equippable) return;

        const mainhand = equippable.getEquipmentSlot(EquipmentSlot.Mainhand);
        const hasBoneMeal = mainhand.hasItem() && mainhand.typeId === "minecraft:bone_meal";

        if (!hasBoneMeal) return;

        if (player.getGameMode() === GameMode.Creative) {
            // Grow crop fully
            block.setPermutation(block.permutation.withState(growthState, maxGrowth));
        } else {
            let growth = block.permutation.getState(growthState);

            // Add random amount of growth
            growth += randomInt(1, maxGrowth - growth);
            block.setPermutation(block.permutation.withState(growthState, growth));

            // Decrement stack
            if (mainhand.amount > 1) mainhand.amount--;
            else mainhand.setItem(undefined);
        }

        // Play effects
        const effectLocation = block.center();
        dimension.playSound("item.bone_meal.use", effectLocation);
        dimension.spawnParticle("minecraft:crop_growth_emitter", effectLocation);
    },
};

system.beforeEvents.startup.subscribe(({ blockComponentRegistry }) => {
    blockComponentRegistry.registerCustomComponent("wiki:growable", BlockGrowableComponent);
});
```

## Growth Permutations

So we know how to set our block states, what happens when our block is on a particular state value?

The permutations below set a certain selection box, loot table and texture to the block based its `wiki:growth` value.

For example, if `wiki:growth` is 7, the texture is set to `custom_crop_3` and the crop is able to drop food.

<CodeHeader>minecraft:block</CodeHeader>

```json
"permutations": [
    {
        "condition": "q.block_state('wiki:growth') < 7",
        "components": {
            // Loot table for when the crop is not fully grown. Vanilla crops only drop seeds when young.
            "minecraft:loot": "loot_tables/blocks/custom_crop_young.json",
            // Trigger growth on random ticks and when interacting with bone meal (only active when the block isn't fully grown).
            "wiki:growable": {
                "growth_state": "wiki:growth",
                "growth_chance": 50, // 50% chance to grow on each random tick
                "min_light_level": 9, // Minimum light level needed to grow on random ticks
                "max_growth": 7
            }
        }
    },
    {
        "condition": "q.block_state('wiki:growth') == 0",
        "components": {
            "minecraft:selection_box": {
                "origin": [-8, 0, -8],
                "size": [16, 1.6, 16]
            }
        }
    },
    {
        "condition": "q.block_state('wiki:growth') == 1",
        "components": {
            "minecraft:selection_box": {
                "origin": [-8, 0, -8],
                "size": [16, 3.2, 16]
            }
        }
    },
    {
        "condition": "q.block_state('wiki:growth') >= 2",
        "components": {
            "minecraft:material_instances": {
                "*": {
                    "texture": "wiki:custom_crop_1",
                    "render_method": "alpha_test_single_sided",
                    "ambient_occlusion": false,
                    "face_dimming": false
                }
            }
        }
    },
    {
        "condition": "q.block_state('wiki:growth') == 2",
        "components": {
            "minecraft:selection_box": {
                "origin": [-8, 0, -8],
                "size": [16, 4.8, 16]
            }
        }
    },
    {
        "condition": "q.block_state('wiki:growth') == 3",
        "components": {
            "minecraft:selection_box": {
                "origin": [-8, 0, -8],
                "size": [16, 6.4, 16]
            }
        }
    },
    {
        "condition": "q.block_state('wiki:growth') >= 4",
        "components": {
            "minecraft:material_instances": {
                "*": {
                    "texture": "wiki:custom_crop_2",
                    "render_method": "alpha_test_single_sided",
                    "ambient_occlusion": false,
                    "face_dimming": false
                }
            }
        }
    },
    {
        "condition": "q.block_state('wiki:growth') == 4",
        "components": {
            "minecraft:selection_box": {
                "origin": [-8, 0, -8],
                "size": [16, 8, 16]
            }
        }
    },
    {
        "condition": "q.block_state('wiki:growth') == 5",
        "components": {
            "minecraft:selection_box": {
                "origin": [-8, 0, -8],
                "size": [16, 9.6, 16]
            }
        }
    },
    {
        "condition": "q.block_state('wiki:growth') == 6",
        "components": {
            "minecraft:selection_box": {
                "origin": [-8, 0, -8],
                "size": [16, 11.2, 16]
            }
        }
    },
    {
        "condition": "q.block_state('wiki:growth') == 7",
        "components": {
            "minecraft:material_instances": {
                "*": {
                    "texture": "wiki:custom_crop_3",
                    "render_method": "alpha_test_single_sided",
                    "ambient_occlusion": false,
                    "face_dimming": false
                }
            },
            "minecraft:selection_box": {
                "origin": [-8, 0, -8],
                "size": [16, 12.8, 16]
            },
            // Drop different loot when fully grown
            "minecraft:loot": "loot_tables/blocks/custom_crop_mature.json"
        }
    }
]
```

You can add more permutations depending on how many stages you want your crop to have. But don't forget to also change the state's `max` value and the script's `maxGrowth` value.

## Final Block JSON

Here is the entire `wiki:custom_crop` file for reference.

<Spoiler title="Custom Crop Block JSON">

<CodeHeader>BP/blocks/custom_crop.json</CodeHeader>

```json
{
    "format_version": "1.21.110",
    "minecraft:block": {
        "description": {
            "identifier": "wiki:custom_crop",
            "menu_category": {
                "category": "none" // Hide from creative inventory - seeds should be used to place.
            },
            "states": {
                "wiki:growth": {
                    "values": { "min": 0, "max": 7 }
                }
            }
        },
        "components": {
            "minecraft:collision_box": false,
            "minecraft:light_dampening": 0,
            "minecraft:geometry": "geometry.crop", // Model provided in previous step.
            "minecraft:material_instances": {
                "*": {
                    "texture": "wiki:custom_crop_0",
                    "render_method": "alpha_test_single_sided",
                    "ambient_occlusion": false,
                    "face_dimming": false
                }
            },
            // Break the crop if it isn't placed on farmland.
            "minecraft:placement_filter": {
                "conditions": [
                    {
                        "allowed_faces": ["up"],
                        "block_filter": ["minecraft:farmland"]
                    }
                ]
            },
            // Break the crop when water flows into it.
            "minecraft:liquid_detection": {
                "detection_rules": [
                    {
                        "liquid_type": "water",
                        "on_liquid_touches": "broken"
                    }
                ]
            },
            // Break the crop when it is pushed by a piston
            "minecraft:movable": {
                "movement_type": "popped"
            }
        },
        "permutations": [
            {
                "condition": "q.block_state('wiki:growth') < 7",
                "components": {
                    // Loot table for when the crop is not fully grown. Vanilla crops only drop seeds when young.
                    "minecraft:loot": "loot_tables/blocks/custom_crop_young.json",
                    // Trigger growth on random ticks and when interacting with bone meal (only active when the block isn't fully grown).
                    "wiki:growable": {
                        "growth_state": "wiki:growth",
                        "growth_chance": 50, // 50% chance to grow on each random tick
                        "min_light_level": 9, // Minimum light level needed to grow on random ticks
                        "max_growth": 7
                    }
                }
            },
            {
                "condition": "q.block_state('wiki:growth') == 0",
                "components": {
                    "minecraft:selection_box": {
                        "origin": [-8, 0, -8],
                        "size": [16, 1.6, 16]
                    }
                }
            },
            {
                "condition": "q.block_state('wiki:growth') == 1",
                "components": {
                    "minecraft:selection_box": {
                        "origin": [-8, 0, -8],
                        "size": [16, 3.2, 16]
                    }
                }
            },
            {
                "condition": "q.block_state('wiki:growth') >= 2",
                "components": {
                    "minecraft:material_instances": {
                        "*": {
                            "texture": "wiki:custom_crop_1",
                            "render_method": "alpha_test_single_sided",
                            "ambient_occlusion": false,
                            "face_dimming": false
                        }
                    }
                }
            },
            {
                "condition": "q.block_state('wiki:growth') == 2",
                "components": {
                    "minecraft:selection_box": {
                        "origin": [-8, 0, -8],
                        "size": [16, 4.8, 16]
                    }
                }
            },
            {
                "condition": "q.block_state('wiki:growth') == 3",
                "components": {
                    "minecraft:selection_box": {
                        "origin": [-8, 0, -8],
                        "size": [16, 6.4, 16]
                    }
                }
            },
            {
                "condition": "q.block_state('wiki:growth') >= 4",
                "components": {
                    "minecraft:material_instances": {
                        "*": {
                            "texture": "wiki:custom_crop_2",
                            "render_method": "alpha_test_single_sided",
                            "ambient_occlusion": false,
                            "face_dimming": false
                        }
                    }
                }
            },
            {
                "condition": "q.block_state('wiki:growth') == 4",
                "components": {
                    "minecraft:selection_box": {
                        "origin": [-8, 0, -8],
                        "size": [16, 8, 16]
                    }
                }
            },
            {
                "condition": "q.block_state('wiki:growth') == 5",
                "components": {
                    "minecraft:selection_box": {
                        "origin": [-8, 0, -8],
                        "size": [16, 9.6, 16]
                    }
                }
            },
            {
                "condition": "q.block_state('wiki:growth') == 6",
                "components": {
                    "minecraft:selection_box": {
                        "origin": [-8, 0, -8],
                        "size": [16, 11.2, 16]
                    }
                }
            },
            {
                "condition": "q.block_state('wiki:growth') == 7",
                "components": {
                    "minecraft:material_instances": {
                        "*": {
                            "texture": "wiki:custom_crop_3",
                            "render_method": "alpha_test_single_sided",
                            "ambient_occlusion": false,
                            "face_dimming": false
                        }
                    },
                    "minecraft:selection_box": {
                        "origin": [-8, 0, -8],
                        "size": [16, 12.8, 16]
                    },
                    // Drop different loot when fully grown
                    "minecraft:loot": "loot_tables/blocks/custom_crop_mature.json"
                }
            }
        ]
    }
}
```

</Spoiler>

## Crop Loot

Below are some example loot tables that your custom crop could use:

### Young Crop Loot Table

<CodeHeader>BP/loot_tables/blocks/custom_crop_young.json</CodeHeader>

```json
{
    "pools": [
        {
            "rolls": 1,
            "entries": [
                {
                    "type": "item",
                    "name": "wiki:custom_seeds"
                }
            ]
        }
    ]
}
```

### Mature Crop Loot Table

<CodeHeader>BP/loot_tables/blocks/custom_crop_mature.json</CodeHeader>

```json
{
    "pools": [
        {
            "rolls": 1,
            "entries": [
                {
                    "type": "item",
                    "name": "wiki:custom_food",
                    "functions": [
                        {
                            "function": "set_count",
                            "count": { "min": 2, "max": 5 }
                        }
                    ]
                }
            ]
        },
        {
            "rolls": 1,
            "entries": [
                {
                    "type": "item",
                    "name": "wiki:custom_seeds",
                    "functions": [
                        {
                            "function": "set_count",
                            "count": { "min": 0, "max": 3 }
                        }
                    ]
                }
            ]
        }
    ]
}
```

## Custom Seeds

Holding a crop block in your hand wouldn't look right, so we place the crop with seeds! Below is the JSON for a custom item that places your crop.

<CodeHeader>BP/items/custom_seeds.json</CodeHeader>

```json
{
    "format_version": "1.21.110",
    "minecraft:item": {
        "description": {
            "identifier": "wiki:custom_seeds", // Make sure this is different from your crop's ID.
            "menu_category": {
                "category": "nature",
                "group": "minecraft:itemGroup.name.seed"
            }
        },
        "components": {
            "minecraft:icon": "wiki:custom_seeds",
            "minecraft:block_placer": {
                "block": "wiki:custom_crop" // The block this item is placing.
            }
        }
    }
}
```

## Custom Food

Your crop can't only drop seeds! Create a custom food using the template below.

<CodeHeader>BP/items/custom_food.json</CodeHeader>

```json
{
    "format_version": "1.21.110",
    "minecraft:item": {
        "description": {
            "identifier": "wiki:custom_food", // Make sure this is different from your crop and seeds' ID.
            "menu_category": {
                "category": "nature",
                "group": "minecraft:itemGroup.name.crop"
            }
        },
        "components": {
            "minecraft:icon": "wiki:custom_food",
            "minecraft:food": {
                "nutrition": 4,
                "saturation_modifier": 0.6
            },
            "minecraft:use_animation": "eat",
            "minecraft:use_modifiers": {
                "use_duration": 1.6,
                "movement_modifier": 0.33
            }
        }
    }
}
```

## Result

Your pack should now contain the following files:

<FolderView :paths="[
    'BP/blocks/custom_crop.json',
    'BP/items/custom_food.json',
    'BP/items/custom_seeds.json',
    'BP/loot_tables/blocks/custom_crop_mature.json',
    'BP/loot_tables/blocks/custom_crop_young.json'
]" />

With the help of this tutorial/template, you now have the knowledge and skills to create your own custom crop, as well as its seed and food items.

## Download Example Pack

If you require further assistance or would like to access the complete template files, please use the download button provided below. Happy designing!

<Button link="https://github.com/Bedrock-OSS/bedrock-examples/releases/download/download/custom_crops.mcaddon">
    Download MCADDON
</Button>
