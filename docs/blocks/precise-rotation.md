---
title: Precise Rotation
category: Tutorials
tags:
    - experimental
    - expert
mentions:
    - QuazChick
---

::: tip FORMAT VERSION `1.20.20`
This tutorial assumes an advanced understanding of blocks and Molang.
Check out the [blocks guide](/blocks/blocks-intro) before starting.
:::

::: warning EXPERIMENTAL
Requires `Holiday Creator Features` to trigger events. 

Requires `Upcoming Creator Features` to use block traits.
:::

This tutorial guides you through making a block with sub-cardinal rotation (e.g. creeper heads and signs), providing examples of a "shell" block with this rotation type.

*Looking for regular rotation? Learn about it [here](/blocks/rotatable-blocks)!*

![Custom shell blocks oriented randomly](/assets/images/blocks/precise-rotation/showcase.png)

Features:

-   Can be placed on the top of blocks, with 16 possible rotations
-   Can be placed on the side faces of blocks (north, east, south & west)
-   Rotation behaves the same as vanilla mob heads - without the performance hit from block entities!

## Block Model

To allow for more precise rotation, your block's model will need a few extra bones.

There are 4 bones required for precise ground rotation, each with different Y axis rotations:

-   `up_0` (Y rotation = 0)
-   `up_22_5` (Y rotation = 22.5)
-   `up_45` (Y rotation = 45)
-   `up_67_5` (Y rotation = 67.5)

**These rotations are in a clockwise direction.**

The bones will likely be duplicates of each other, excluding rotation change.

:::tip

Keep your bones' pivots set to `[0, 0, 0]` so that their rotation is around the middle of the block.

:::

In addition, a `side` bone will be necessary for placement on side faces.

The following model for a "shell" block can be used as a reference:

![](/assets/images/blocks/precise-rotation/model_bones.png)

<Spoiler title="Shell Example Model">

<CodeHeader>RP/models/blocks/shell.geo.json</CodeHeader>

```json
{
  "format_version": "1.12.0",
  "minecraft:geometry": [
    {
      "description": {
        "identifier": "geometry.shell",
        "texture_width": 16,
        "texture_height": 16,
        "visible_bounds_width": 3,
        "visible_bounds_height": 2.5,
        "visible_bounds_offset": [0, 0.75, 0]
      },
      "bones": [
        {
          "name": "shell",
          "pivot": [0, 0, 0]
        },
        {
          "name": "up_0",
          "parent": "shell",
          "pivot": [0, 0, 0],
          "cubes": [
            {
              "origin": [-3, 0, -3],
              "size": [6, 3, 6],
              "uv": {
                "north": { "uv": [0, 6], "uv_size": [6, 3] },
                "east": { "uv": [0, 6], "uv_size": [6, 3] },
                "south": { "uv": [0, 6], "uv_size": [6, 3] },
                "west": { "uv": [0, 6], "uv_size": [6, 3] },
                "up": { "uv": [6, 6], "uv_size": [-6, -6] },
                "down": { "uv": [6, 6], "uv_size": [-6, -6] }
              }
            }
          ]
        },
        {
          "name": "up_22_5",
          "parent": "shell",
          "pivot": [0, 0, 0],
          "rotation": [0, 22.5, 0],
          "cubes": [
            {
              "origin": [-3, 0, -3],
              "size": [6, 3, 6],
              "uv": {
                "north": { "uv": [0, 6], "uv_size": [6, 3] },
                "east": { "uv": [0, 6], "uv_size": [6, 3] },
                "south": { "uv": [0, 6], "uv_size": [6, 3] },
                "west": { "uv": [0, 6], "uv_size": [6, 3] },
                "up": { "uv": [6, 6], "uv_size": [-6, -6] },
                "down": { "uv": [6, 6], "uv_size": [-6, -6] }
              }
            }
          ]
        },
        {
          "name": "up_45",
          "parent": "shell",
          "pivot": [0, 0, 0],
          "rotation": [0, 45, 0],
          "cubes": [
            {
              "origin": [-3, 0, -3],
              "size": [6, 3, 6],
              "uv": {
                "north": { "uv": [0, 6], "uv_size": [6, 3] },
                "east": { "uv": [0, 6], "uv_size": [6, 3] },
                "south": { "uv": [0, 6], "uv_size": [6, 3] },
                "west": { "uv": [0, 6], "uv_size": [6, 3] },
                "up": { "uv": [6, 6], "uv_size": [-6, -6] },
                "down": { "uv": [6, 6], "uv_size": [-6, -6] }
              }
            }
          ]
        },
        {
          "name": "up_67_5",
          "parent": "shell",
          "pivot": [0, 0, 0],
          "rotation": [0, 67.5, 0],
          "cubes": [
            {
              "origin": [-3, 0, -3],
              "size": [6, 3, 6],
              "uv": {
                "north": { "uv": [0, 6], "uv_size": [6, 3] },
                "east": { "uv": [0, 6], "uv_size": [6, 3] },
                "south": { "uv": [0, 6], "uv_size": [6, 3] },
                "west": { "uv": [0, 6], "uv_size": [6, 3] },
                "up": { "uv": [6, 6], "uv_size": [-6, -6] },
                "down": { "uv": [6, 6], "uv_size": [-6, -6] }
              }
            }
          ]
        },
        {
          "name": "side",
          "parent": "shell",
          "pivot": [0, 5, 8],
          "rotation": [90, 0, 0],
          "cubes": [
            {
              "origin": [-3, 5, 8],
              "size": [6, 3, 6],
              "uv": {
                "north": { "uv": [0, 6], "uv_size": [6, 3] },
                "east": { "uv": [0, 6], "uv_size": [6, 3] },
                "south": { "uv": [0, 6], "uv_size": [6, 3] },
                "west": { "uv": [0, 6], "uv_size": [6, 3] },
                "up": { "uv": [6, 6], "uv_size": [-6, -6] },
                "down": { "uv": [6, 6], "uv_size": [-6, -6] }
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

## Initial Block JSON

Below is the base "shell" block we will be adding advanced rotation to.

<CodeHeader>BP/blocks/shell.json</CodeHeader>

```json
{
  "format_version": "1.20.20",
  "minecraft:block": {
    "description": {
      "identifier": "wiki:shell",
      "menu_category": {
        "category": "nature"
      }
    },
    "components": {
      // `up` face collision/selection boxes
      "minecraft:collision_box": {
        "origin": [-3, 0, -3],
        "size": [6, 3, 6]
      },
      "minecraft:selection_box": {
        "origin": [-3, 0, -3],
        "size": [6, 3, 6]
      },
      "minecraft:material_instances": {
        "*": {
          "texture": "shell" // Shortname defined in `RP/textures/terrain_texture.json`
        }
      },
      // Prevent block from being placed on `down` face
      "minecraft:placement_filter": {
        "conditions": [
          {
             "allowed_faces": ["up", "side"]
          }
        ]
      }
    }
  }
}
```

## Block States

For head-like rotation, you need to add 2 states to your block:

<CodeHeader>minecraft:block</CodeHeader>

```json
"description": {
  ...
  "traits": {
    // Face block is placed on - default is `north`
    "minecraft:placement_position": {
      "enabled_states": ["minecraft:block_face"]
    }
  },
  "states": {
    // Precise rotation of block when placed on `up` face
    "wiki:rotation": {
      "values": { "min": 0, "max": 15 } // An alternative property value syntax to define larger integer ranges easily
    }
  }
}
```

## Rotation Molang Expression

Rather than manually typing bounds for each `wiki:rotation` value, you can use some [complex Molang](https://learn.microsoft.com/en-us/minecraft/creator/reference/content/molangreference/examples/molangconcepts/molangintroduction#simple-vs-complex-expressions) and division to return the values desired!

```c
// Transform player's head Y rotation to a positive
t.positive_head_rot = q.head_y_rotation(0) + 360 * (q.head_y_rotation(0) != math.abs(q.head_y_rotation(0)));
// How many 16ths of 360 is the head rotation? - rounded
t.rotation = math.round(t.positive_head_rot / 22.5);

// 0 and 16 represent duplicate rotations (0 degrees and 360 degrees), so 0 is returned if the value of `t.rotation` is 16
return t.rotation != 16 ? t.rotation;
```

On a single line so that you can put it into JSON:

<CodeHeader>minecraft:block > components > minecraft:on_player_placing > condition</CodeHeader>

```c
t.positive_head_rot = q.head_y_rotation(0) + 360 * (q.head_y_rotation(0) != math.abs(q.head_y_rotation(0))); t.rotation = math.round(t.positive_head_rot / 22.5); return t.rotation != 16 ? t.rotation;
```

## Applying Rotation

Time to use this Molang to set the block properties you have added!

We will update our block properties when the player is placing the block. This means that in our event, we have access to `q.block_face` and `q.head_y_rotation`.

Create the following component and event in your block:

<CodeHeader>minecraft:block</CodeHeader>

```json
"components": {
  ...
  "minecraft:on_player_placing": {
    "condition": "q.block_face == 1", // Precise rotation only applies to `up` face
    "event": "wiki:set_rotation"
  }
},
"events": {
  "wiki:set_rotation": {
    "set_block_property": {
      // Now use the long Molang expression from before to set the rotation property
      "wiki:rotation": "q.block_face == 1 ? { t.positive_head_rot = q.head_y_rotation(0) + 360 * (q.head_y_rotation(0) != math.abs(q.head_y_rotation(0))); t.block_rotation = math.round(t.positive_head_rot / 22.5); return t.block_rotation != 16 ? t.block_rotation; };"
    }
  }
}
```

<br>

Then, use [permutations](/blocks/block-permutations) to define the base cardinal rotations which will be expanded by the precise bones in our model.

Insert the following permutations into your block JSON (in the presented order):

<CodeHeader>minecraft:block</CodeHeader>

```json
"permutations": [
  {
    "condition": "q.block_property('wiki:rotation') >= 4 || q.block_property('minecraft:block_face') == 'east'",
    "components": {
      "minecraft:transformation": { "rotation": [0, -90, 0] }
    }
  },
  {
    "condition": "q.block_property('wiki:rotation') >= 8 || q.block_property('minecraft:block_face') == 'south'",
    "components": {
      "minecraft:transformation": { "rotation": [0, 180, 0] }
    }
  },
  {
    "condition": "q.block_property('wiki:rotation') >= 12 || q.block_property('minecraft:block_face') == 'west'",
    "components": {
      "minecraft:transformation": { "rotation": [0, 90, 0] }
    }
  }
]
```

## Bone Visibility

Not all bones in your model should be visible, so we make use of the bone visibility `minecraft:geometry` property to ensure that only the required bones are rendered. The reason behind having multiple bones is that `minecraft:transformation` only supports multiples of 90 degrees, while precise rotation requires 22.5 degree steps.

Add the following component to your block:

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:geometry": {
  "identifier": "geometry.shell", // Model created in first step
  "bone_visibility": {
    "up_0": "q.block_property('minecraft:block_face') == 'up' && !math.mod(q.block_property('wiki:rotation'), 4)",
    "up_22_5": "q.block_property('minecraft:block_face') == 'up' && !math.mod(q.block_property('wiki:rotation') - 1, 4)",
    "up_45": "q.block_property('minecraft:block_face') == 'up' && !math.mod(q.block_property('wiki:rotation') - 2, 4)",
    "up_67_5": "q.block_property('minecraft:block_face') == 'up' && !math.mod(q.block_property('wiki:rotation') - 3, 4)",
    "side": "q.block_property('minecraft:block_face') != 'up'"
  }
}
```

## Collision/Selection Boxes

If you would like your block to have a different collision/selection box when placed on the side of a block, as with my "shell" block, add something similar to this permutation:

<CodeHeader>minecraft:block > permutations</CodeHeader>

```json
{
  "condition": "q.block_property('minecraft:block_face') != 'up'",
  "components": {
    // Add your collision/selection boxes
    "minecraft:collision_box": {
      "origin": [-3, 5, 5],
      "size": [6, 6, 3]
    },
    "minecraft:selection_box": {
      "origin": [-3, 5, 5],
      "size": [6, 6, 3]
    }
  }
}
```

## Final Block JSON

Our block JSON file after the above steps should look similar to the code below:

<Spoiler title="Shell Example Block JSON">

<CodeHeader>BP/blocks/shell.json</CodeHeader>

```json
{
  "format_version": "1.20.20",
  "minecraft:block": {
    "description": {
      "identifier": "wiki:shell",
      "menu_category": {
        "category": "nature"
      },
      "traits": {
        "minecraft:placement_position": {
          "enabled_states": ["minecraft:block_face"]
        }
      },
      "states": {
        "wiki:rotation": {
          "values": { "min": 0, "max": 15 }
        }
      }
    },
    "components": {
      "minecraft:collision_box": {
        "origin": [-3, 0, -3],
        "size": [6, 3, 6]
      },
      "minecraft:selection_box": {
        "origin": [-3, 0, -3],
        "size": [6, 3, 6]
      },
      "minecraft:geometry": {
        "identifier": "geometry.shell",
        "bone_visibility": {
          "up_0": "q.block_state('minecraft:block_face') == 'up' && !math.mod(q.block_state('wiki:rotation'), 4)",
          "up_22_5": "q.block_state('minecraft:block_face') == 'up' && !math.mod(q.block_state('wiki:rotation') - 1, 4)",
          "up_45": "q.block_state('minecraft:block_face') == 'up' && !math.mod(q.block_state('wiki:rotation') - 2, 4)",
          "up_67_5": "q.block_state('minecraft:block_face') == 'up' && !math.mod(q.block_state('wiki:rotation') - 3, 4)",
          "side": "q.block_state('minecraft:block_face') != 'up'"
        }
      },
      "minecraft:material_instances": {
        "*": {
          "texture": "shell"
        }
      },
      "minecraft:placement_filter": {
        "conditions": [
          {
            "allowed_faces": ["up", "side"]
          }
        ]
      },
      "minecraft:on_player_placing": {
        "condition": "q.block_face == 1",
        "event": "wiki:set_rotation"
      }
    },
    "events": {
      "wiki:set_rotation": {
        "set_block_state": {
          "wiki:rotation": "t.positive_head_rot = q.head_y_rotation(0) + 360 * (q.head_y_rotation(0) != math.abs(q.head_y_rotation(0))); t.block_rotation = math.round(t.positive_head_rot / 22.5); return t.block_rotation != 16 ? t.block_rotation;"
        }
      }
    },
    "permutations": [
      {
        "condition": "q.block_state('wiki:rotation') >= 4 || q.block_state('minecraft:block_face') == 'east'",
        "components": {
          "minecraft:transformation": { "rotation": [0, -90, 0] }
        }
      },
      {
        "condition": "q.block_state('wiki:rotation') >= 8 || q.block_state('minecraft:block_face') == 'south'",
        "components": {
          "minecraft:transformation": { "rotation": [0, 180, 0] }
        }
      },
      {
        "condition": "q.block_state('wiki:rotation') >= 12 || q.block_state('minecraft:block_face') == 'west'",
        "components": {
          "minecraft:transformation": { "rotation": [0, 90, 0] }
        }
      },
      {
        "condition": "q.block_state('minecraft:block_face') != 'up'",
        "components": {
          "minecraft:collision_box": {
            "origin": [-3, 5, 5],
            "size": [6, 6, 3]
          },
          "minecraft:selection_box": {
            "origin": [-3, 5, 5],
            "size": [6, 6, 3]
          }
        }
      }
    ]
  }
}
```

</Spoiler>

## Result

What you have created:

<Checklist>

-   [x] Block model supporting precise rotation
-   [x] Block with 16 rotation states, allowing placement on 5 block faces (20 total orientations)

</Checklist>

---

![Custom shell blocks in a square formation, each pointing towards the middle](/assets/images/blocks/precise-rotation/result.png)

## Download Example Pack

Template pack made according to this tutorial, adding a "shell" block into the `Nature` tab.

<BButton
  link="https://github.com/Bedrock-OSS/wiki-addon/releases/download/download/precise_rotation.mcaddon"
  color=blue
>Download MCADDON</BButton>