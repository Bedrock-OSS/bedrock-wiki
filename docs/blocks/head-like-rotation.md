---
title: Specific (Head-Like) Rotation
category: Tutorials
tags:
    - experimental
    - expert
mentions:
    - QuazChick
---

::: tip
This tutorial assumes an advanced understanding of blocks.
Check out the [blocks guide](/blocks/blocks-intro) before starting and ensure your block is using format versions `1.19.80`+.
:::

::: warning EXPERIMENTAL
Requires `Holiday Creator Features` to trigger events.
:::

This tutorial guides you through making a block with sub-cardinal rotation (e.g. creeper heads and signs), providing examples of a "shell" block with this rotation type.

![Custom shell blocks oriented randomly](/assets/images/blocks/head-like-rotation/showcase.png)

Features:

-   Can be placed on the top of blocks, with 16 possible rotations
-   Can be placed on the side faces of blocks (north, east, south & west)
-   Rotation behaves the same as vanilla mob heads - without the performance hit from block entities!


## Block Model

To allow for more specific rotation, your block's model will need a few extra bones.

There are 4 bones required for specific ground rotation, each with different Y axis rotations:

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

![](/assets/images/blocks/head-like-rotation/model_bones.png)

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
  "format_version": "1.19.80",
  "minecraft:block": {
    "description": {
      "identifier": "wiki:shell",
      "menu_category": {
        "category": "nature"
      }
    },
    "components": {
      // Default collision/selection boxes
      "minecraft:collision_box": {
        "origin": [-3, 0, -3],
        "size": [6, 3, 6]
      },
      "minecraft:selection_box": {
        "origin": [-3, 0, -3],
        "size": [6, 3, 6]
      },
      "minecraft:geometry": {
        // Model made in previous step
        "identifier": "geometry.shell",
        // Ensure only `up_0` bone is visible by default
        "bone_visibility": {
          "up_22_5": false,
          "up_45": false,
          "up_67_5": false,
          "side": false
        }
      },
      "minecraft:material_instances": {
        "*": {
          // Friendly name defined in `RP/textures/terrain_texture.json`
          "texture": "shell"
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

## Block Properties

For head-like rotation, you need to add 2 properties to your block's `description`:

```json
"properties": {
  // Face block is placed on
  "wiki:face": [0, 1, 2, 3, 4],
  // Specific rotation of block when placed on `up` face
  "wiki:rotation": {
    // This is an alternative property value syntax to define larger integer ranges easily
    "values": { "min": 0, "max": 15 }
  }
}
```

## Rotation Molang Expression

Rather than manually typing bounds for each `wiki:rotation` value, you can use some [complex Molang](https://learn.microsoft.com/en-us/minecraft/creator/reference/content/molangreference/examples/molangconcepts/molangintroduction#simple-vs-complex-expressions) and division to return the values desired!


```c
// If targeted block face is `up`, continue, otherwise 0 is returned
q.block_face == 1 ? {
  // Transform player's head Y rotation to a positive
  t.positive_head_rot = q.head_y_rotation(0) + 360 * (q.head_y_rotation(0) != Math.abs(q.head_y_rotation(0)));
  // How many 16ths of 360 is the head rotation? - rounded
  t.block_rotation = Math.round(t.positive_head_rot / 22.5);

  // 0 and 16 represent duplicate rotations (0 degrees and 360 degrees), so 0 is returned if the value of `t.block_rotation` is 16
  return t.block_rotation != 16 ? t.block_rotation;
};
```

On a single line so that you can put it into JSON:

```c
q.block_face == 1 ? { t.positive_head_rot = q.head_y_rotation(0) + 360 * (q.head_y_rotation(0) != Math.abs(q.head_y_rotation(0))); t.block_rotation = Math.round(t.positive_head_rot / 22.5); return t.block_rotation != 16 ? t.block_rotation; };
```

## Placement Event

Time to use this Molang to set the block properties you have added!

We will update our block properties when the player is placing the block. This means that in our event, we have access to `q.block_face` and `q.head_y_rotation`.

Create the following component and event in your block:

```json
"components": {
  ...
  "minecraft:on_player_placing": {
    "event": "wiki:set_placement"
  }
},
"events": {
  "wiki:set_placement": {
    "set_block_property": {
      // Set the face placed on (excluding `down`)
      "wiki:face": "q.block_face - 1",
      // Now use the long Molang expression from before to set the rotation property
      "wiki:rotation": "q.block_face == 1 ? { t.positive_head_rot = q.head_y_rotation(0) + 360 * (q.head_y_rotation(0) != Math.abs(q.head_y_rotation(0))); t.block_rotation = Math.round(t.positive_head_rot / 22.5); return t.block_rotation != 16 ? t.block_rotation; };"
    }
  }
}
```

## Block Permutations

These define the base cardinal rotations which will be expanded by the specific bones in our model.

Insert the following permutations into your block JSON (in the presented order):

```json
"permutations": [
  {
    "condition": "q.block_property('wiki:rotation') >= 4 || q.block_property('wiki:face') == 4",
    "components": {
      "minecraft:transformation": { "rotation": [0, -90, 0] }
    }
  },
  {
    "condition": "q.block_property('wiki:rotation') >= 8 || q.block_property('wiki:face') == 2",
    "components": {
      "minecraft:transformation": { "rotation": [0, 180, 0] }
    }
  },
  {
    "condition": "q.block_property('wiki:rotation') >= 12 || q.block_property('wiki:face') == 3",
    "components": {
      "minecraft:transformation": { "rotation": [0, 90, 0] }
    }
  }
]
```

## Bone Visibility

Not all bones in your model should be visible, so we make use of the bone visibility `minecraft:geometry` property to ensure that only the required bones are rendered. The reason behind having multiple bones is that `minecraft:transformation` only supports multiples of 90 degrees, while head rotation requires 22.5 degree steps.


Add the following permutations (in order) to your block:

```json
"permutations": [
  ...
  {
    "condition": "q.block_property('wiki:rotation') == 1 || q.block_property('wiki:rotation') == 5 || q.block_property('wiki:rotation') == 9 || q.block_property('wiki:rotation') == 13",
    "components": {
      "minecraft:geometry": {
        "identifier": "geometry.shell",
        // Ensure only `up_22_5` bone is visible
        "bone_visibility": {
          "up_0": false,
          "up_45": false,
          "up_67_5": false,
          "side": false
        }
      }
    }
  },
  {
    "condition": "q.block_property('wiki:rotation') == 2 || q.block_property('wiki:rotation') == 6 || q.block_property('wiki:rotation') == 10 || q.block_property('wiki:rotation') == 14",
    "components": {
      "minecraft:geometry": {
        "identifier": "geometry.shell",
        // Ensure only `up_45` bone is visible
        "bone_visibility": {
          "up_0": false,
          "up_22_5": false,
          "up_67_5": false,
          "side": false
        }
      }
    }
  },
  {
    "condition": "q.block_property('wiki:rotation') == 3 || q.block_property('wiki:rotation') == 7 || q.block_property('wiki:rotation') == 11 || q.block_property('wiki:rotation') == 15",
    "components": {
      "minecraft:geometry": {
        "identifier": "geometry.shell",
        // Ensure only `up_67_5` bone is visible
        "bone_visibility": {
          "up_0": false,
          "up_22_5": false,
          "up_45": false,
          "side": false
        }
      }
    }
  },
  {
    "condition": "q.block_property('wiki:face')",
    "components": {
      "minecraft:geometry": {
        "identifier": "geometry.shell",
        // Ensure only `side` bone is visible
        "bone_visibility": {
          "up_0": false,
          "up_22_5": false,
          "up_45": false,
          "up_67_5": false
        }
      }
    }
  }
]
```

## Collision/Selection Boxes

If you would like your block to have a different collision/selection box when placed on the side of a block, as with my "shell" block, add something similar to the last permutation of your block:

```json
"permutations": [
  ...
  {
    // Look for this condition:
    "condition": "q.block_property('wiki:face')",
    "components": {
      ...
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
]
```

## Final Block JSON

Our block JSON file after the above steps should look similar to the code below:

<Spoiler title="Shell Example Block JSON">

<CodeHeader>BP/blocks/shell.json</CodeHeader>

```json
{
  "format_version": "1.19.80",
  "minecraft:block": {
    "description": {
      "identifier": "wiki:shell",
      "menu_category": {
        "category": "nature"
      },
      "properties": {
        "wiki:face": [0, 1, 2, 3, 4],
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
          "up_22_5": false,
          "up_45": false,
          "up_67_5": false,
          "side": false
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
        "event": "wiki:set_placement"
      }
    },
    "events": {
      "wiki:set_placement": {
        "set_block_property": {
          "wiki:face": "q.block_face - 1",
          "wiki:rotation": "q.block_face == 1 ? { t.positive_head_rot = q.head_y_rotation(0) + 360 * (q.head_y_rotation(0) != Math.abs(q.head_y_rotation(0))); t.block_rotation = Math.round(t.positive_head_rot / 22.5); return t.block_rotation != 16 ? t.block_rotation; };"
        }
      }
    },
    "permutations": [
      {
        "condition": "q.block_property('wiki:rotation') >= 4 || q.block_property('wiki:face') == 4",
        "components": {
          "minecraft:transformation": { "rotation": [0, -90, 0] }
        }
      },
      {
        "condition": "q.block_property('wiki:rotation') >= 8 || q.block_property('wiki:face') == 2",
        "components": {
          "minecraft:transformation": { "rotation": [0, 180, 0] }
        }
      },
      {
        "condition": "q.block_property('wiki:rotation') >= 12 || q.block_property('wiki:face') == 3",
        "components": {
          "minecraft:transformation": { "rotation": [0, 90, 0] }
        }
      },
      {
        "condition": "q.block_property('wiki:rotation') == 1 || q.block_property('wiki:rotation') == 5 || q.block_property('wiki:rotation') == 9 || q.block_property('wiki:rotation') == 13",
        "components": {
          "minecraft:geometry": {
            "identifier": "geometry.shell",
            "bone_visibility": {
              "up_0": false,
              "up_45": false,
              "up_67_5": false,
              "side": false
            }
          }
        }
      },
      {
        "condition": "q.block_property('wiki:rotation') == 2 || q.block_property('wiki:rotation') == 6 || q.block_property('wiki:rotation') == 10 || q.block_property('wiki:rotation') == 14",
        "components": {
          "minecraft:geometry": {
            "identifier": "geometry.shell",
            "bone_visibility": {
              "up_0": false,
              "up_22_5": false,
              "up_67_5": false,
              "side": false
            }
          }
        }
      },
      {
        "condition": "q.block_property('wiki:rotation') == 3 || q.block_property('wiki:rotation') == 7 || q.block_property('wiki:rotation') == 11 || q.block_property('wiki:rotation') == 15",
        "components": {
          "minecraft:geometry": {
            "identifier": "geometry.shell",
            "bone_visibility": {
              "up_0": false,
              "up_22_5": false,
              "up_45": false,
              "side": false
            }
          }
        }
      },
      {
        "condition": "q.block_property('wiki:face')",
        "components": {
          "minecraft:geometry": {
            "identifier": "geometry.shell",
            "bone_visibility": {
              "up_0": false,
              "up_22_5": false,
              "up_45": false,
              "up_67_5": false
            }
          },
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

-   [x] Block model supporting head-like rotation
-   [x] Block with 16 rotation states, allowing placement on 5 block faces (20 total orientations)

</Checklist>

---

![Custom shell blocks in a square formation, each pointing towards the middle](/assets/images/blocks/head-like-rotation/result.png)

## Download Example Pack

Template pack made according to this tutorial, adding a "shell" block into the `Nature` tab.

<BButton
  link="/assets/packs/tutorials/head_like_block_rotation/example.mcaddon"
  download="Head-Like Block Rotation Example.mcaddon"
  color=blue
>Download MCADDON</BButton>

<BButton
  link="/assets/packs/tutorials/head_like_block_rotation/example.mcaddon"
  download="Head-Like Block Rotation Example.zip"
  color=blue
>Download ZIP</BButton>