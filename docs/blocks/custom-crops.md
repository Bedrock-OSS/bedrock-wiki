---
title: Custom Crops
category: Vanilla Re-Creations
tags:
    - experimental
    - easy
mentions:
    - Ivyman1992
    - Provedule
    - ThomasOrs
    - QuazChick
    - SmokeyStack
---

:::danger PLEASE READ
This page will be part of a rewrite to accomodate for the removal of the Holiday Creator Feature experimental toggle. Expect this page to be rewritten or removed when this happens.
:::

:::tip FORMAT & MIN ENGINE VERSION `1.20.60`
This tutorial assumes a good understanding of blocks.
Check out the [blocks guide](/blocks/blocks-intro), [block states](/blocks/block-states) and [block permutations](/blocks/block-permutations) before starting.
:::

:::warning EXPERIMENTAL
Requires `Holiday Creator Features` to trigger block events and for use of block tag Molang queries and the `minecraft:unit_cube` block component.
:::

Designing custom crops may appear daunting at first, but it's a straightforward process once you understand the initial steps. Our tutorial/template will guide you through the process of creating a unique crop block as well as other blocks like farmland and dirt.

## Custom Crop

If you aren't a fan of carrots - that's fine. You can make your own (far superior) crop!

Making crops is not as difficult as you may think, it just takes a little practice and forethought in coding a specific series of events.

To start with, we want our crops to have 4 stages of growth, so the crop should include a state with four values.

<CodeHeader>BP/blocks/custom_crop.json</CodeHeader>

```json
{
    "format_version": "1.20.60",
    "minecraft:block": {
        "description": {
            "identifier": "wiki:custom_crop",
            "menu_category": {
                "category": "none" // Hide from creative inventory - seeds should be used to place
            },
            "states": {
                "wiki:growth_stage": [0, 1, 2, 3]
            }
        }
    }
}
```

### Model

If you look at crops like carrots and potatoes in-game, you will see that they are made up of four planes and are situated 4 pixels from each edge as shown in the screenshot below.

It is noteworthy to mention that each plane sits 1 pixel down, unlike traditional blocks. If you forgot to lower the planes down by one, then the crops will appear to grow one pixel higher then the top of our farmland which was lowered in our previous tutorial.

By lowering the position down a pixel, it will sit above our custom farmland perfectly making everything right in our blocky world. Here is a template model for the crop.

![](/assets/images/blocks/custom-crops/model.png)

<BButton
    link="https://github.com/Bedrock-OSS/wiki-addon/blob/main/ma-custom_crops/rp/models/blocks/crop.geo.json"
    color=blue
>Download Custom Crop Geometry</BButton>

### Components

Below are the components our custom crop will use.

**NOTE:** This is not a perfect replica of vanilla crops as lava will not destroy the crops and water destruction behaves differently.

<CodeHeader>minecraft:block</CodeHeader>

```json
"components": {
    "minecraft:flammable": true,
    "minecraft:collision_box": false,
    "minecraft:geometry": "geometry.crop",
    "minecraft:light_dampening": 0,
    // Break if not placed on farmland
    "minecraft:placement_filter": {
        "conditions": [
            {
                "allowed_faces": ["up"],
                "block_filter": ["wiki:custom_farmland"]
            }
        ]
    },
    // Loot table for when the crop is not fully grown. Vanilla crops only drop seeds when young.
    "minecraft:loot": "loot_tables/blocks/custom_crop_young.json",
    // Trigger growth every random tick
    "minecraft:random_ticking": {
        "on_tick": {
            "event": "wiki:grow",
            "condition": "q.block_state('wiki:growth_stage') < 3"
        }
    },
    // Break crop when in contact with water
    "minecraft:queued_ticking": {
        // Check every 10 ticks
        "interval_range": [10, 10],
        "looping": true,
        "on_tick": {
            "event": "wiki:destroy",
            "condition": "q.block_neighbor_has_any_tag(1,0,0,'water') || q.block_neighbor_has_any_tag(-1,0,0,'water') || q.block_neighbor_has_any_tag(0,0,1,'water') || q.block_neighbor_has_any_tag(0,0,-1,'water') || q.block_neighbor_has_any_tag(0,1,0,'water')"
        }
    },
    // Trigger growth with bone meal
    "minecraft:on_interact": {
        "event": "wiki:fertilize",
        "condition": "q.is_item_name_any('slot.weapon.mainhand', 'minecraft:bone_meal') && q.block_state('wiki:growth_stage') < 3"
    }
}
```

### Events

The events below do three important functions to make your crop work:

-   The first event is used to destroy the block if it's in contact with water.
-   The second event adds a stage to the crop growth when activated. It adds one to `wiki:growth_stage` if less than 3.
-   The final event is for bonemeal support, adding a random value to `wiki:growth_stage`.

<CodeHeader>minecraft:block</CodeHeader>

```json
"events": {
    "wiki:destroy": {
        "run_command": {
            "command": "setblock ~~~ air destroy"
        }
    },
    // Adds to "wiki:growth_stage" (grows crop)
    "wiki:grow": {
        "set_block_state": {
            "wiki:growth_stage": "q.block_state('wiki:growth_stage') + 1"
        }
    },
    // Bonemeal the crop (grow crop a random amount)
    "wiki:fertilize": {
        // Take bonemeal
        "decrement_stack": {},
        // Trigger random growth
        "set_block_state": {
            "wiki:growth_stage": "q.block_state('wiki:growth_stage') + Math.random(1, 3 - q.block_state('wiki:growth_stage'))"
        },
        // Trigger effects
        "run_command": {
            "command": ["particle minecraft:crop_growth_emitter ~~~", "playsound item.bone_meal.use @a ~~~"]
        }
    }
}
```

So we know how to set our block states, what happens when our block is on a particular state value?

The permutations below set a certain `"minecraft:selection_box"` and texture to the block based on the `q.block_state('wiki:growth_stage')` or `"wiki:growth_stage"` value. For example, if `"wiki:growth_stage"` is 3, the permutation sets the texture to `"custom_crop_3"`.

### Permutations

<CodeHeader>minecraft:block</CodeHeader>

```json
"permutations": [
    {
        "condition": "q.block_state('wiki:growth_stage') == 0",
        "components": {
            "minecraft:material_instances": {
                "*": {
                    "texture": "custom_crop_0",
                    "render_method": "alpha_test",
                    "face_dimming": false,
                    "ambient_occlusion": false
                }
            },
            "minecraft:selection_box": {
                "origin": [-8, 0, -8],
                "size": [16, 2, 16]
            }
        }
    },
    {
        "condition": "q.block_state('wiki:growth_stage') == 1",
        "components": {
            "minecraft:material_instances": {
                "*": {
                    "texture": "custom_crop_1",
                    "render_method": "alpha_test",
                    "face_dimming": false,
                    "ambient_occlusion": false
                }
            },
            "minecraft:selection_box": {
                "origin": [-8, 0, -8],
                "size": [16, 5, 16]
            }
        }
    },
    {
        "condition": "q.block_state('wiki:growth_stage') == 2",
        "components": {
            "minecraft:material_instances": {
                "*": {
                    "texture": "custom_crop_2",
                    "render_method": "alpha_test",
                    "face_dimming": false,
                    "ambient_occlusion": false
                }
            },
            "minecraft:selection_box": {
                "origin": [-8, 0, -8],
                "size": [16, 9, 16]
            }
        }
    },
    {
        "condition": "q.block_state('wiki:growth_stage') == 3",
        "components": {
            "minecraft:material_instances": {
                "*": {
                    "texture": "custom_crop_3",
                    "render_method": "alpha_test",
                    "face_dimming": false,
                    "ambient_occlusion": false
                }
            },
            "minecraft:selection_box": {
                "origin": [-8, 0, -8],
                "size": [16, 13, 16]
            },
            // Drop different loot when fully grown
            "minecraft:loot": "loot_tables/blocks/custom_crop_mature.json"
        }
    }
]
```

You can add more permutations depending on how many stages you want your crop to have. But don't forget to also change the events and states limit.

Here is the entire `wiki:custom_crop` file for reference.

<Spoiler title="Custom Crop Block JSON">

<CodeHeader>BP/blocks/custom_crop.json</CodeHeader>

```json
{
    "format_version": "1.20.60",
    "minecraft:block": {
        "description": {
            "identifier": "wiki:custom_crop",
            "menu_category": {
                "category": "none" // Hide from creative inventory - seeds should be used to place
            },
            "states": {
                "wiki:growth_stage": [0, 1, 2, 3]
            }
        },
        "components": {
            "minecraft:flammable": true,
            "minecraft:collision_box": false,
            "minecraft:geometry": "geometry.crop",
            "minecraft:light_dampening": 0,
            // Break if not placed on farmland
            "minecraft:placement_filter": {
                "conditions": [
                    {
                        "allowed_faces": ["up"],
                        "block_filter": ["wiki:custom_farmland"]
                    }
                ]
            },
            // Loot table for when the crop is not fully grown. Vanilla crops only drop seeds when young.
            "minecraft:loot": "loot_tables/blocks/custom_crop_young.json",
            // Trigger growth every random tick
            "minecraft:random_ticking": {
                "on_tick": {
                    "event": "wiki:grow",
                    "condition": "q.block_state('wiki:growth_stage') < 3"
                }
            },
            // Break crop when in contact with water
            "minecraft:queued_ticking": {
                // Check every 10 ticks
                "interval_range": [10, 10],
                "looping": true,
                "on_tick": {
                    "event": "wiki:destroy",
                    "condition": "q.block_neighbor_has_any_tag(1,0,0,'water') || q.block_neighbor_has_any_tag(-1,0,0,'water') || q.block_neighbor_has_any_tag(0,0,1,'water') || q.block_neighbor_has_any_tag(0,0,-1,'water') || q.block_neighbor_has_any_tag(0,1,0,'water')"
                }
            },
            // Trigger growth with bone meal
            "minecraft:on_interact": {
                "event": "wiki:fertilize",
                "condition": "q.is_item_name_any('slot.weapon.mainhand', 'minecraft:bone_meal') && q.block_state('wiki:growth_stage') < 3"
            }
        },
        "events": {
            "wiki:destroy": {
                "run_command": {
                    "command": "setblock ~~~ air destroy"
                }
            },
            // Adds to "wiki:growth_stage" (grows crop)
            "wiki:grow": {
                "set_block_state": {
                    "wiki:growth_stage": "q.block_state('wiki:growth_stage') + 1"
                }
            },
            // Bonemeal the crop (grow crop a random amount)
            "wiki:fertilize": {
                // Take bonemeal
                "decrement_stack": {},
                // Trigger random growth
                "set_block_state": {
                    "wiki:growth_stage": "q.block_state('wiki:growth_stage') + Math.random(1, 3 - q.block_state('wiki:growth_stage'))"
                },
                // Trigger effects
                "run_command": {
                    "command": [
                        "particle minecraft:crop_growth_emitter ~~~",
                        "playsound item.bone_meal.use @a ~~~"
                    ]
                }
            }
        },
        "permutations": [
            {
                "condition": "q.block_state('wiki:growth_stage') == 0",
                "components": {
                    "minecraft:material_instances": {
                        "*": {
                            "texture": "custom_crop_0",
                            "render_method": "alpha_test",
                            "face_dimming": false,
                            "ambient_occlusion": false
                        }
                    },
                    "minecraft:selection_box": {
                        "origin": [-8, 0, -8],
                        "size": [16, 2, 16]
                    }
                }
            },
            {
                "condition": "q.block_state('wiki:growth_stage') == 1",
                "components": {
                    "minecraft:material_instances": {
                        "*": {
                            "texture": "custom_crop_1",
                            "render_method": "alpha_test",
                            "face_dimming": false,
                            "ambient_occlusion": false
                        }
                    },
                    "minecraft:selection_box": {
                        "origin": [-8, 0, -8],
                        "size": [16, 5, 16]
                    }
                }
            },
            {
                "condition": "q.block_state('wiki:growth_stage') == 2",
                "components": {
                    "minecraft:material_instances": {
                        "*": {
                            "texture": "custom_crop_2",
                            "render_method": "alpha_test",
                            "face_dimming": false,
                            "ambient_occlusion": false
                        }
                    },
                    "minecraft:selection_box": {
                        "origin": [-8, 0, -8],
                        "size": [16, 9, 16]
                    }
                }
            },
            {
                "condition": "q.block_state('wiki:growth_stage') == 3",
                "components": {
                    "minecraft:material_instances": {
                        "*": {
                            "texture": "custom_crop_3",
                            "render_method": "alpha_test",
                            "face_dimming": false,
                            "ambient_occlusion": false
                        }
                    },
                    "minecraft:selection_box": {
                        "origin": [-8, 0, -8],
                        "size": [16, 13, 16]
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
    "format_version": "1.20.60",
    "minecraft:item": {
        "description": {
            "identifier": "wiki:custom_seeds", // Make sure this is different from your crop's ID
            "menu_category": {
                "category": "nature",
                "group": "itemGroup.name.seed"
            }
        },
        "components": {
            "minecraft:icon": {
                "texture": "custom_seeds"
            },
            "minecraft:block_placer": {
                "block": "wiki:custom_crop" // The block this item is placing
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
    "format_version": "1.20.60",
    "minecraft:item": {
        "description": {
            "identifier": "wiki:custom_food", // Make sure this is different from your crop and food's ID
            "menu_category": {
                "category": "nature",
                "group": "itemGroup.name.crop"
            }
        },
        "components": {
            "minecraft:icon": {
                "texture": "custom_food"
            },
            "minecraft:food": {
                "nutrition": 4,
                "saturation_modifier": 0.6
            },
            "minecraft:use_animation": "eat",
            "minecraft:use_duration": 1.6
        }
    }
}
```

## Result

Your pack should now contain the following files:

<FolderView
  :paths="[
    'BP/blocks/custom_crop.json',
    'BP/items/custom_food.json',
    'BP/items/custom_seeds.json',
    'BP/loot_tables/blocks/custom_crop_mature.json',
    'BP/loot_tables/blocks/custom_crop_young.json'
  ]"
></FolderView>

With the help of this tutorial/template, you now have the knowledge and skills to create your own custom crop, as well as its seed and food items.

## Download Example Pack

If you require further assistance or would like to access the complete template files, please use the download button provided below. Happy designing!

<BButton
    link="https://github.com/Bedrock-OSS/wiki-addon/releases/download/download/custom_crops.mcaddon"
    color=blue
>Download MCADDON</BButton>
