---
title: Custom Dirt
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

:::tip FORMAT & MIN ENGINE VERSION `1.20.60`
This tutorial assumes a good understanding of blocks.
Check out the [blocks guide](/blocks/blocks-intro), [block states](/blocks/block-states) and [block permutations](/blocks/block-permutations) before starting.
:::

:::warning EXPERIMENTAL
Requires `Holiday Creator Features` to trigger block events and for use of block tag Molang queries and the `minecraft:unit_cube` block component.
:::

## Custom Dirt

Below is an example of a custom dirt block. This custom dirt can be transformed into `wiki:custom_farmland` by using a hoe or a Dirt Path by using a shovel.

:::tip
Add the `minecraft:is_hoe` or `minecraft:is_shovel` item tags to any custom tools to make them work with our custom dirt!
:::

<Spoiler title="Custom Dirt Block JSON">

<CodeHeader>BP/blocks/custom_dirt.json</CodeHeader>

```json
{
    "format_version": "1.20.60",
    "minecraft:block": {
        "description": {
            "identifier": "wiki:custom_dirt",
            "menu_category": {
                "category": "nature"
            }
        },
        "components": {
            "tag:dirt": {},
            "tag:fertilize_area": {},
            "minecraft:unit_cube": {},
            "minecraft:map_color": "#6C5746",
            "minecraft:destructible_by_mining": {
                "seconds_to_destroy": 0.6
            },
            "minecraft:material_instances": {
                "*": {
                    "texture": "custom_dirt"
                }
            },
            // Convert to farmland or dirt path when interacted with
            "minecraft:on_interact": {
                "event": "wiki:transform",
                "condition": "q.block_face && q.equipped_item_any_tag('slot.weapon.mainhand', 'minecraft:is_hoe', 'minecraft:is_shovel')"
            }
        },
        "events": {
            "wiki:transform": {
                "sequence": [
                    {
                        "damage": {
                            "type": "durability",
                            "amount": 1,
                            "target": "item"
                        }
                    },
                    // Transform into farmland (hoe is used)
                    {
                        "condition": "q.equipped_item_any_tag('slot.weapon.mainhand', 'minecraft:is_hoe')",
                        // Play use sound
                        "run_command": {
                            "command": "playsound use.gravel @a ~~~ 1 0.8"
                        },
                        // Replace this block with "wiki:custom_farmland"
                        "set_block": {
                            "block_type": "wiki:custom_farmland"
                        }
                    },
                    // Tranform into path (shovel is used)
                    {
                        "condition": "q.equipped_item_any_tag('slot.weapon.mainhand', 'minecraft:is_shovel')",
                        // Play use sound
                        "run_command": {
                            "command": "playsound use.grass @a ~~~ 1 0.8"
                        },
                        // Replace this block with Dirt Path
                        "set_block": {
                            "block_type": "minecraft:grass_path"
                        }
                    }
                ]
            }
        }
    }
}
```

</Spoiler>

## Custom Farmland

Farmland is a tricky block… it reacts to water (changing it's texture when water is nearby), dries out and turns back into our dirt block randomly if water does not reach it in time, and supports crops to be placed on top.

Nevertheless, it's just special dirt. Let's walk through how it works:

-   The first thing that you will want to do is make a basic block, just like our dirt.
-   Create a "farmland" texture for the top of the block (both wet and dry) and then assign it a dirt texture to the sides. You will also need to make a custom block geometry that is 16&times;15&times;16 pixels in height, one row smaller then a normal block.
-   After that we can add our moisture logic to our block to emulate vanilla functionality.

<BButton
    link="https://github.com/Bedrock-OSS/wiki-addon/blob/main/ma-custom_crops/rp/models/blocks/farmland.geo.json"
    color=blue
>Download Custom Farmland Geometry</BButton>

### Farmland Moisture

Vanilla farmland has 8 moisture stages:

-   `0` - Shows a dry top texture and decays into dirt on random tick if not near water.
-   `1-7` - Shows a wet top texture and will gradually count down to `0` after each random tick if not near water.
-   If the farmland is near water, the moisture value is set to `7` on random tick.

Add a moisture state to your block to get started with our custom logic.

<CodeHeader>minecraft:block > description</CodeHeader>

```json
"states": {
    "wiki:moisture": {
        "values": { "min": 0, "max": 7 }
    }
}
```

The following permutation sets top texture to be wet when the `wiki:moisture` value is not `0`.

<CodeHeader>minecraft:block</CodeHeader>

```json
"permutations": [
    {
        "condition": "q.block_state('wiki:moisture')",
        "components": {
            "minecraft:material_instances": {
                "*": {
                    "texture": "custom_dirt",
                    "render_method": "alpha_test"
                },
                "up": {
                    "texture": "custom_farmland_wet",
                    "render_method": "alpha_test"
                }
            }
        }
    }
]
```

### Hydration

Each random tick, our farmland should trigger an event to determine the block's current moisture state.

<CodeHeader>minecraft:block</CodeHeader>

```json
"components": {
  ...
    "minecraft:random_ticking": {
        "on_tick": {
            "event": "wiki:set_moisture"
        }
    }
},
"events": {
    "wiki:set_moisture": {
        // If near water, sets `wiki:moisture` to `7`, else takes 1 away from current value to count down to `0` (dry).
        "set_block_state": {
            "wiki:moisture": "q.block_neighbor_has_any_tag(4,0,0,'water') || q.block_neighbor_has_any_tag(3,0,0,'water') || q.block_neighbor_has_any_tag(2,0,0,'water') || q.block_neighbor_has_any_tag(1,0,0,'water') || q.block_neighbor_has_any_tag(-1,0,0,'water') || q.block_neighbor_has_any_tag(-2,0,0,'water') || q.block_neighbor_has_any_tag(-3,0,0,'water') || q.block_neighbor_has_any_tag(-4,0,0,'water') || q.block_neighbor_has_any_tag(4,0,-4,'water') || q.block_neighbor_has_any_tag(3,0,-4,'water') || q.block_neighbor_has_any_tag(2,0,-4,'water') || q.block_neighbor_has_any_tag(1,0,-4,'water') || q.block_neighbor_has_any_tag(0,0,-4,'water') || q.block_neighbor_has_any_tag(-1,0,-4,'water') || q.block_neighbor_has_any_tag(-2,0,-4,'water') || q.block_neighbor_has_any_tag(-3,0,-4,'water') || q.block_neighbor_has_any_tag(-4,0,-4,'water') || q.block_neighbor_has_any_tag(4,0,-3,'water') || q.block_neighbor_has_any_tag(3,0,-3,'water') || q.block_neighbor_has_any_tag(2,0,-3,'water') || q.block_neighbor_has_any_tag(1,0,-3,'water') || q.block_neighbor_has_any_tag(0,0,-3,'water') || q.block_neighbor_has_any_tag(-1,0,-3,'water') || q.block_neighbor_has_any_tag(-2,0,-3,'water') || q.block_neighbor_has_any_tag(-3,0,-3,'water') || q.block_neighbor_has_any_tag(-4,0,-3,'water') || q.block_neighbor_has_any_tag(4,0,-2,'water') || q.block_neighbor_has_any_tag(3,0,-2,'water') || q.block_neighbor_has_any_tag(2,0,-2,'water') || q.block_neighbor_has_any_tag(1,0,-2,'water') || q.block_neighbor_has_any_tag(0,0,-2,'water') || q.block_neighbor_has_any_tag(-1,0,-2,'water') || q.block_neighbor_has_any_tag(-2,0,-2,'water') || q.block_neighbor_has_any_tag(-3,0,-2,'water') || q.block_neighbor_has_any_tag(-4,0,-2,'water') || q.block_neighbor_has_any_tag(4,0,-1,'water') || q.block_neighbor_has_any_tag(3,0,-1,'water') || q.block_neighbor_has_any_tag(2,0,-1,'water') || q.block_neighbor_has_any_tag(1,0,-1,'water') || q.block_neighbor_has_any_tag(0,0,-1,'water') || q.block_neighbor_has_any_tag(-1,0,-1,'water') || q.block_neighbor_has_any_tag(-2,0,-1,'water') || q.block_neighbor_has_any_tag(-3,0,-1,'water') || q.block_neighbor_has_any_tag(-4,0,-1,'water') || q.block_neighbor_has_any_tag(4,0,1,'water') || q.block_neighbor_has_any_tag(3,0,1,'water') || q.block_neighbor_has_any_tag(2,0,1,'water') || q.block_neighbor_has_any_tag(1,0,1,'water') || q.block_neighbor_has_any_tag(0,0,1,'water') || q.block_neighbor_has_any_tag(-1,0,1,'water') || q.block_neighbor_has_any_tag(-2,0,1,'water') || q.block_neighbor_has_any_tag(-3,0,1,'water') || q.block_neighbor_has_any_tag(-4,0,1,'water') || q.block_neighbor_has_any_tag(4,0,2,'water') || q.block_neighbor_has_any_tag(3,0,2,'water') || q.block_neighbor_has_any_tag(2,0,2,'water') || q.block_neighbor_has_any_tag(1,0,2,'water') || q.block_neighbor_has_any_tag(0,0,2,'water') || q.block_neighbor_has_any_tag(-1,0,2,'water') || q.block_neighbor_has_any_tag(-2,0,2,'water') || q.block_neighbor_has_any_tag(-3,0,2,'water') || q.block_neighbor_has_any_tag(-4,0,2,'water') || q.block_neighbor_has_any_tag(4,0,3,'water') || q.block_neighbor_has_any_tag(3,0,3,'water') || q.block_neighbor_has_any_tag(2,0,3,'water') || q.block_neighbor_has_any_tag(1,0,3,'water') || q.block_neighbor_has_any_tag(0,0,3,'water') || q.block_neighbor_has_any_tag(-1,0,3,'water') || q.block_neighbor_has_any_tag(-2,0,3,'water') || q.block_neighbor_has_any_tag(-3,0,3,'water') || q.block_neighbor_has_any_tag(-4,0,3,'water') || q.block_neighbor_has_any_tag(4,0,4,'water') || q.block_neighbor_has_any_tag(3,0,4,'water') || q.block_neighbor_has_any_tag(2,0,4,'water') || q.block_neighbor_has_any_tag(1,0,4,'water') || q.block_neighbor_has_any_tag(0,0,4,'water') || q.block_neighbor_has_any_tag(-1,0,4,'water') || q.block_neighbor_has_any_tag(-2,0,4,'water') || q.block_neighbor_has_any_tag(-3,0,4,'water') || q.block_neighbor_has_any_tag(-4,0,4,'water') || q.block_neighbor_has_any_tag(4,1,0,'water') || q.block_neighbor_has_any_tag(3,1,0,'water') || q.block_neighbor_has_any_tag(2,1,0,'water') || q.block_neighbor_has_any_tag(1,1,0,'water') || q.block_neighbor_has_any_tag(-1,1,0,'water') || q.block_neighbor_has_any_tag(-2,1,0,'water') || q.block_neighbor_has_any_tag(-3,1,0,'water') || q.block_neighbor_has_any_tag(-4,1,0,'water') || q.block_neighbor_has_any_tag(4,1,-4,'water') || q.block_neighbor_has_any_tag(3,1,-4,'water') || q.block_neighbor_has_any_tag(2,1,-4,'water') || q.block_neighbor_has_any_tag(1,1,-4,'water') || q.block_neighbor_has_any_tag(0,1,-4,'water') || q.block_neighbor_has_any_tag(-1,1,-4,'water') || q.block_neighbor_has_any_tag(-2,1,-4,'water') || q.block_neighbor_has_any_tag(-3,1,-4,'water') || q.block_neighbor_has_any_tag(-4,1,-4,'water') || q.block_neighbor_has_any_tag(4,1,-3,'water') || q.block_neighbor_has_any_tag(3,1,-3,'water') || q.block_neighbor_has_any_tag(2,1,-3,'water') || q.block_neighbor_has_any_tag(1,1,-3,'water') || q.block_neighbor_has_any_tag(0,1,-3,'water') || q.block_neighbor_has_any_tag(-1,1,-3,'water') || q.block_neighbor_has_any_tag(-2,1,-3,'water') || q.block_neighbor_has_any_tag(-3,1,-3,'water') || q.block_neighbor_has_any_tag(-4,1,-3,'water') || q.block_neighbor_has_any_tag(4,1,-2,'water') || q.block_neighbor_has_any_tag(3,1,-2,'water') || q.block_neighbor_has_any_tag(2,1,-2,'water') || q.block_neighbor_has_any_tag(1,1,-2,'water') || q.block_neighbor_has_any_tag(0,1,-2,'water') || q.block_neighbor_has_any_tag(-1,1,-2,'water') || q.block_neighbor_has_any_tag(-2,1,-2,'water') || q.block_neighbor_has_any_tag(-3,1,-2,'water') || q.block_neighbor_has_any_tag(-4,1,-2,'water') || q.block_neighbor_has_any_tag(4,1,-1,'water') || q.block_neighbor_has_any_tag(3,1,-1,'water') || q.block_neighbor_has_any_tag(2,1,-1,'water') || q.block_neighbor_has_any_tag(1,1,-1,'water') || q.block_neighbor_has_any_tag(0,1,-1,'water') || q.block_neighbor_has_any_tag(-1,1,-1,'water') || q.block_neighbor_has_any_tag(-2,1,-1,'water') || q.block_neighbor_has_any_tag(-3,1,-1,'water') || q.block_neighbor_has_any_tag(-4,1,-1,'water') || q.block_neighbor_has_any_tag(4,1,1,'water') || q.block_neighbor_has_any_tag(3,1,1,'water') || q.block_neighbor_has_any_tag(2,1,1,'water') || q.block_neighbor_has_any_tag(1,1,1,'water') || q.block_neighbor_has_any_tag(0,1,1,'water') || q.block_neighbor_has_any_tag(-1,1,1,'water') || q.block_neighbor_has_any_tag(-2,1,1,'water') || q.block_neighbor_has_any_tag(-3,1,1,'water') || q.block_neighbor_has_any_tag(-4,1,1,'water') || q.block_neighbor_has_any_tag(4,1,2,'water') || q.block_neighbor_has_any_tag(3,1,2,'water') || q.block_neighbor_has_any_tag(2,1,2,'water') || q.block_neighbor_has_any_tag(1,1,2,'water') || q.block_neighbor_has_any_tag(0,1,2,'water') || q.block_neighbor_has_any_tag(-1,1,2,'water') || q.block_neighbor_has_any_tag(-2,1,2,'water') || q.block_neighbor_has_any_tag(-3,1,2,'water') || q.block_neighbor_has_any_tag(-4,1,2,'water') || q.block_neighbor_has_any_tag(4,1,3,'water') || q.block_neighbor_has_any_tag(3,1,3,'water') || q.block_neighbor_has_any_tag(2,1,3,'water') || q.block_neighbor_has_any_tag(1,1,3,'water') || q.block_neighbor_has_any_tag(0,1,3,'water') || q.block_neighbor_has_any_tag(-1,1,3,'water') || q.block_neighbor_has_any_tag(-2,1,3,'water') || q.block_neighbor_has_any_tag(-3,1,3,'water') || q.block_neighbor_has_any_tag(-4,1,3,'water') || q.block_neighbor_has_any_tag(4,1,4,'water') || q.block_neighbor_has_any_tag(3,1,4,'water') || q.block_neighbor_has_any_tag(2,1,4,'water') || q.block_neighbor_has_any_tag(1,1,4,'water') || q.block_neighbor_has_any_tag(0,1,4,'water') || q.block_neighbor_has_any_tag(-1,1,4,'water') || q.block_neighbor_has_any_tag(-2,1,4,'water') || q.block_neighbor_has_any_tag(-3,1,4,'water') || q.block_neighbor_has_any_tag(-4,1,4,'water') ? 7 : q.block_state('wiki:moisture') ? q.block_state('wiki:moisture') - 1"
        },
        // Triggers the event which decays farmland into dirt if dry.
        "trigger": "wiki:try_decay"
    },
    "wiki:try_decay": {
        "sequence": [
            {
                "condition": "!q.block_state('wiki:moisture')",
                "trigger": "wiki:decay"
            }
        ]
    },
    // Tranform block into `wiki:custom_dirt` when dry or trampled.
    "wiki:decay": {
        "set_block": {
            "block_type": "wiki:custom_dirt"
        }
    }
}
```

This is the tricky part of our farmland block, water detection. In vanilla Minecraft, water can wet farmland in a giant 9x9 square if it's smack dab in the middle of all the blocks. We are replicating that behavior here for each coordinate relative to our farmland on the same Y level, or 1 above. For example, `q.block_neighbor_has_any_tag(-3,0,4,'water')` is saying that if our farmland block has a block with the `water` tag 3 blocks east and 4 blocks south, then the `wiki:moisture` state will be `7`. The `||` stands for 'or', which means that we can have a water block at any of these relative coordinates.

### Trampling

If our custom farmland is fallen onto, it should have a chance to decay.

<CodeHeader>minecraft:block</CodeHeader>

```json
"components": {
    ...
    "minecraft:on_fall_on": {
        "min_fall_distance": 1,
        "event": "wiki:trample"
    }
},
"events": {
    ...
    // 50% chance for farmland to decay if trampled.
    "wiki:trample": {
        "randomize": [
            {
                "weight": 1
            },
            {
                "weight": 1,
                "trigger": "wiki:decay"
            }
        ]
    }
}
```

Here is the full `wiki:custom_farmland` json for reference.

<Spoiler title="Custom Farmland Block JSON">

<CodeHeader>BP/blocks/custom_farmland.json</CodeHeader>

```json
{
    "format_version": "1.20.60",
    "minecraft:block": {
        "description": {
            "identifier": "wiki:custom_farmland",
            "menu_category": {
                "category": "nature"
            },
            "states": {
                "wiki:moisture": {
                    "values": { "min": 0, "max": 7 }
                }
            }
        },
        "components": {
            "minecraft:map_color": "#0A5E20",
            "minecraft:geometry": "geometry.farmland",
            "minecraft:light_dampening": 0,
            "minecraft:destructible_by_mining": {
                "seconds_to_destroy": 0.6
            },
            "minecraft:selection_box": {
                "origin": [-8, 0, -8],
                "size": [16, 15, 16]
            },
            "minecraft:collision_box": {
                "origin": [-8, 0, -8],
                "size": [16, 15, 16]
            },
            "minecraft:material_instances": {
                "*": {
                    "texture": "custom_dirt",
                    "render_method": "alpha_test"
                },
                "up": {
                    "texture": "custom_farmland",
                    "render_method": "alpha_test"
                }
            },
            "minecraft:random_ticking": {
                "on_tick": {
                    "event": "wiki:set_moisture"
                }
            },
            "minecraft:on_fall_on": {
                "min_fall_distance": 1,
                "event": "wiki:trample"
            }
        },
        "events": {
            "wiki:set_moisture": {
                "set_block_state": {
                    "wiki:moisture": "q.block_neighbor_has_any_tag(4,0,0,'water') || q.block_neighbor_has_any_tag(3,0,0,'water') || q.block_neighbor_has_any_tag(2,0,0,'water') || q.block_neighbor_has_any_tag(1,0,0,'water') || q.block_neighbor_has_any_tag(-1,0,0,'water') || q.block_neighbor_has_any_tag(-2,0,0,'water') || q.block_neighbor_has_any_tag(-3,0,0,'water') || q.block_neighbor_has_any_tag(-4,0,0,'water') || q.block_neighbor_has_any_tag(4,0,-4,'water') || q.block_neighbor_has_any_tag(3,0,-4,'water') || q.block_neighbor_has_any_tag(2,0,-4,'water') || q.block_neighbor_has_any_tag(1,0,-4,'water') || q.block_neighbor_has_any_tag(0,0,-4,'water') || q.block_neighbor_has_any_tag(-1,0,-4,'water') || q.block_neighbor_has_any_tag(-2,0,-4,'water') || q.block_neighbor_has_any_tag(-3,0,-4,'water') || q.block_neighbor_has_any_tag(-4,0,-4,'water') || q.block_neighbor_has_any_tag(4,0,-3,'water') || q.block_neighbor_has_any_tag(3,0,-3,'water') || q.block_neighbor_has_any_tag(2,0,-3,'water') || q.block_neighbor_has_any_tag(1,0,-3,'water') || q.block_neighbor_has_any_tag(0,0,-3,'water') || q.block_neighbor_has_any_tag(-1,0,-3,'water') || q.block_neighbor_has_any_tag(-2,0,-3,'water') || q.block_neighbor_has_any_tag(-3,0,-3,'water') || q.block_neighbor_has_any_tag(-4,0,-3,'water') || q.block_neighbor_has_any_tag(4,0,-2,'water') || q.block_neighbor_has_any_tag(3,0,-2,'water') || q.block_neighbor_has_any_tag(2,0,-2,'water') || q.block_neighbor_has_any_tag(1,0,-2,'water') || q.block_neighbor_has_any_tag(0,0,-2,'water') || q.block_neighbor_has_any_tag(-1,0,-2,'water') || q.block_neighbor_has_any_tag(-2,0,-2,'water') || q.block_neighbor_has_any_tag(-3,0,-2,'water') || q.block_neighbor_has_any_tag(-4,0,-2,'water') || q.block_neighbor_has_any_tag(4,0,-1,'water') || q.block_neighbor_has_any_tag(3,0,-1,'water') || q.block_neighbor_has_any_tag(2,0,-1,'water') || q.block_neighbor_has_any_tag(1,0,-1,'water') || q.block_neighbor_has_any_tag(0,0,-1,'water') || q.block_neighbor_has_any_tag(-1,0,-1,'water') || q.block_neighbor_has_any_tag(-2,0,-1,'water') || q.block_neighbor_has_any_tag(-3,0,-1,'water') || q.block_neighbor_has_any_tag(-4,0,-1,'water') || q.block_neighbor_has_any_tag(4,0,1,'water') || q.block_neighbor_has_any_tag(3,0,1,'water') || q.block_neighbor_has_any_tag(2,0,1,'water') || q.block_neighbor_has_any_tag(1,0,1,'water') || q.block_neighbor_has_any_tag(0,0,1,'water') || q.block_neighbor_has_any_tag(-1,0,1,'water') || q.block_neighbor_has_any_tag(-2,0,1,'water') || q.block_neighbor_has_any_tag(-3,0,1,'water') || q.block_neighbor_has_any_tag(-4,0,1,'water') || q.block_neighbor_has_any_tag(4,0,2,'water') || q.block_neighbor_has_any_tag(3,0,2,'water') || q.block_neighbor_has_any_tag(2,0,2,'water') || q.block_neighbor_has_any_tag(1,0,2,'water') || q.block_neighbor_has_any_tag(0,0,2,'water') || q.block_neighbor_has_any_tag(-1,0,2,'water') || q.block_neighbor_has_any_tag(-2,0,2,'water') || q.block_neighbor_has_any_tag(-3,0,2,'water') || q.block_neighbor_has_any_tag(-4,0,2,'water') || q.block_neighbor_has_any_tag(4,0,3,'water') || q.block_neighbor_has_any_tag(3,0,3,'water') || q.block_neighbor_has_any_tag(2,0,3,'water') || q.block_neighbor_has_any_tag(1,0,3,'water') || q.block_neighbor_has_any_tag(0,0,3,'water') || q.block_neighbor_has_any_tag(-1,0,3,'water') || q.block_neighbor_has_any_tag(-2,0,3,'water') || q.block_neighbor_has_any_tag(-3,0,3,'water') || q.block_neighbor_has_any_tag(-4,0,3,'water') || q.block_neighbor_has_any_tag(4,0,4,'water') || q.block_neighbor_has_any_tag(3,0,4,'water') || q.block_neighbor_has_any_tag(2,0,4,'water') || q.block_neighbor_has_any_tag(1,0,4,'water') || q.block_neighbor_has_any_tag(0,0,4,'water') || q.block_neighbor_has_any_tag(-1,0,4,'water') || q.block_neighbor_has_any_tag(-2,0,4,'water') || q.block_neighbor_has_any_tag(-3,0,4,'water') || q.block_neighbor_has_any_tag(-4,0,4,'water') || q.block_neighbor_has_any_tag(4,1,0,'water') || q.block_neighbor_has_any_tag(3,1,0,'water') || q.block_neighbor_has_any_tag(2,1,0,'water') || q.block_neighbor_has_any_tag(1,1,0,'water') || q.block_neighbor_has_any_tag(-1,1,0,'water') || q.block_neighbor_has_any_tag(-2,1,0,'water') || q.block_neighbor_has_any_tag(-3,1,0,'water') || q.block_neighbor_has_any_tag(-4,1,0,'water') || q.block_neighbor_has_any_tag(4,1,-4,'water') || q.block_neighbor_has_any_tag(3,1,-4,'water') || q.block_neighbor_has_any_tag(2,1,-4,'water') || q.block_neighbor_has_any_tag(1,1,-4,'water') || q.block_neighbor_has_any_tag(0,1,-4,'water') || q.block_neighbor_has_any_tag(-1,1,-4,'water') || q.block_neighbor_has_any_tag(-2,1,-4,'water') || q.block_neighbor_has_any_tag(-3,1,-4,'water') || q.block_neighbor_has_any_tag(-4,1,-4,'water') || q.block_neighbor_has_any_tag(4,1,-3,'water') || q.block_neighbor_has_any_tag(3,1,-3,'water') || q.block_neighbor_has_any_tag(2,1,-3,'water') || q.block_neighbor_has_any_tag(1,1,-3,'water') || q.block_neighbor_has_any_tag(0,1,-3,'water') || q.block_neighbor_has_any_tag(-1,1,-3,'water') || q.block_neighbor_has_any_tag(-2,1,-3,'water') || q.block_neighbor_has_any_tag(-3,1,-3,'water') || q.block_neighbor_has_any_tag(-4,1,-3,'water') || q.block_neighbor_has_any_tag(4,1,-2,'water') || q.block_neighbor_has_any_tag(3,1,-2,'water') || q.block_neighbor_has_any_tag(2,1,-2,'water') || q.block_neighbor_has_any_tag(1,1,-2,'water') || q.block_neighbor_has_any_tag(0,1,-2,'water') || q.block_neighbor_has_any_tag(-1,1,-2,'water') || q.block_neighbor_has_any_tag(-2,1,-2,'water') || q.block_neighbor_has_any_tag(-3,1,-2,'water') || q.block_neighbor_has_any_tag(-4,1,-2,'water') || q.block_neighbor_has_any_tag(4,1,-1,'water') || q.block_neighbor_has_any_tag(3,1,-1,'water') || q.block_neighbor_has_any_tag(2,1,-1,'water') || q.block_neighbor_has_any_tag(1,1,-1,'water') || q.block_neighbor_has_any_tag(0,1,-1,'water') || q.block_neighbor_has_any_tag(-1,1,-1,'water') || q.block_neighbor_has_any_tag(-2,1,-1,'water') || q.block_neighbor_has_any_tag(-3,1,-1,'water') || q.block_neighbor_has_any_tag(-4,1,-1,'water') || q.block_neighbor_has_any_tag(4,1,1,'water') || q.block_neighbor_has_any_tag(3,1,1,'water') || q.block_neighbor_has_any_tag(2,1,1,'water') || q.block_neighbor_has_any_tag(1,1,1,'water') || q.block_neighbor_has_any_tag(0,1,1,'water') || q.block_neighbor_has_any_tag(-1,1,1,'water') || q.block_neighbor_has_any_tag(-2,1,1,'water') || q.block_neighbor_has_any_tag(-3,1,1,'water') || q.block_neighbor_has_any_tag(-4,1,1,'water') || q.block_neighbor_has_any_tag(4,1,2,'water') || q.block_neighbor_has_any_tag(3,1,2,'water') || q.block_neighbor_has_any_tag(2,1,2,'water') || q.block_neighbor_has_any_tag(1,1,2,'water') || q.block_neighbor_has_any_tag(0,1,2,'water') || q.block_neighbor_has_any_tag(-1,1,2,'water') || q.block_neighbor_has_any_tag(-2,1,2,'water') || q.block_neighbor_has_any_tag(-3,1,2,'water') || q.block_neighbor_has_any_tag(-4,1,2,'water') || q.block_neighbor_has_any_tag(4,1,3,'water') || q.block_neighbor_has_any_tag(3,1,3,'water') || q.block_neighbor_has_any_tag(2,1,3,'water') || q.block_neighbor_has_any_tag(1,1,3,'water') || q.block_neighbor_has_any_tag(0,1,3,'water') || q.block_neighbor_has_any_tag(-1,1,3,'water') || q.block_neighbor_has_any_tag(-2,1,3,'water') || q.block_neighbor_has_any_tag(-3,1,3,'water') || q.block_neighbor_has_any_tag(-4,1,3,'water') || q.block_neighbor_has_any_tag(4,1,4,'water') || q.block_neighbor_has_any_tag(3,1,4,'water') || q.block_neighbor_has_any_tag(2,1,4,'water') || q.block_neighbor_has_any_tag(1,1,4,'water') || q.block_neighbor_has_any_tag(0,1,4,'water') || q.block_neighbor_has_any_tag(-1,1,4,'water') || q.block_neighbor_has_any_tag(-2,1,4,'water') || q.block_neighbor_has_any_tag(-3,1,4,'water') || q.block_neighbor_has_any_tag(-4,1,4,'water') ? 7 : q.block_state('wiki:moisture') ? q.block_state('wiki:moisture') - 1"
                },
                "trigger": "wiki:try_decay"
            },
            "wiki:trample": {
                "randomize": [
                    {
                        "weight": 1
                    },
                    {
                        "weight": 1,
                        "trigger": "wiki:decay"
                    }
                ]
            },
            "wiki:try_decay": {
                "sequence": [
                    {
                        "condition": "!q.block_state('wiki:moisture')",
                        "trigger": "wiki:decay"
                    }
                ]
            },
            "wiki:decay": {
                "set_block": {
                    "block_type": "wiki:custom_dirt"
                }
            }
        },
        "permutations": [
            {
                "condition": "q.block_state('wiki:moisture')",
                "components": {
                    "minecraft:material_instances": {
                        "*": {
                            "texture": "custom_dirt",
                            "render_method": "alpha_test"
                        },
                        "up": {
                            "texture": "custom_farmland_wet",
                            "render_method": "alpha_test"
                        }
                    }
                }
            }
        ]
    }
}
```

</Spoiler>
