---
title: Specific (Head-Like) Rotation
category: Tutorials
tags:
    - experimental
    - expert
mention:
    - uspel
    - QuazChick
---


This tutorial guides you through making a block with proper head-like rotation (e.g. creeper heads and signs), providing examples of a "shell" block with this rotation type.

:::warning BEGINNERS BEWARE!

This tutorial assumes good knowledge of [blocks 1.16.100+](/blocks/blocks-16), [advanced Molang](/documentation/advanced-molang) and creating models in applications such as [Blockbench](https://blockbench.net).

:::

![Custom shell blocks oriented randomly](/assets/images/blocks/head-like-rotation/showcase.png)

Features:

-   Can be placed on the top of blocks, with 16 possible rotations
-   Can be placed on the side faces of blocks (north, east, south & west)
-   Rotation behaves the same as vanilla mob heads - without the performance hit from block entities!

Experiments:

- Holiday Creator Features
- Upcoming Creator Features

## Block Model

To allow for more specific rotation, your block's model will need a few extra bones.

There are 4 bones required for specific ground rotation, each with different Y axis rotations:

-   `up0` (Y rotation = 0)
-   `up1` (Y rotation = 22.5)
-   `up2` (Y rotation = 45)
-   `up3` (Y rotation = 67.5)

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
          "name": "up0",
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
          "name": "up1",
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
          "name": "up2",
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
          "name": "up3",
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
	"format_version": "1.19.60",
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
			// Model made in previous step
			"minecraft:geometry": "geometry.shell",
			"minecraft:material_instances": {
				"*": {
					// Friendly name defined in `RP/textures/terrain_texture.json`
					"texture": "shell"
				}
			},
			"minecraft:placement_filter": {
				"conditions": [
					{
						// Prevent block from being placed on `down` face
						"allowed_faces": [
							"up",
							"side"
						]
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
	"wiki:face": ["up", "north", "south", "west", "east"],
	// Specific rotation of block when placed on `up` face
	"wiki:rotation": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
}
```

## Rotation Molang Expression

Rather than manually typing bounds for each `wiki:rotation` value, you can use some division to return the values desired!


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
			// Set the face placed on
			"wiki:face": "q.block_face == 2 ? 'north' : q.block_face == 3 ? 'south' : q.block_face == 4 ? 'west' : q.block_face == 5 ? 'east' : 'up'",
			// Now use the long Molang expression from before to set the rotation property
			"wiki:rotation": "q.block_face == 1 ? { t.positive_head_rot = q.head_y_rotation(0) + 360 * (q.head_y_rotation(0) != Math.abs(q.head_y_rotation(0))); t.block_rotation = Math.round(t.positive_head_rot / 22.5); return t.block_rotation != 16 ? t.block_rotation; };"
		}
	}
}
```

## Part Visibility

Not all bones in your model should be visible - that would look slightly unusual - so make use of the Part Visibility component to ensure that only the required bones (or parts) are rendered:

```json
"minecraft:part_visibility": {
	"conditions": {
		"up0": "q.block_property('wiki:face') == 'up' && (q.block_property('wiki:rotation') == 0 || q.block_property('wiki:rotation') == 4 || q.block_property('wiki:rotation') == 8 || q.block_property('wiki:rotation') == 12)",
		"up1": "q.block_property('wiki:face') == 'up' && (q.block_property('wiki:rotation') == 1 || q.block_property('wiki:rotation') == 5 || q.block_property('wiki:rotation') == 9 || q.block_property('wiki:rotation') == 13)",
		"up2": "q.block_property('wiki:face') == 'up' && (q.block_property('wiki:rotation') == 2 || q.block_property('wiki:rotation') == 6 || q.block_property('wiki:rotation') == 10 || q.block_property('wiki:rotation') == 14)",
		"up3": "q.block_property('wiki:face') == 'up' && (q.block_property('wiki:rotation') == 3 || q.block_property('wiki:rotation') == 7 || q.block_property('wiki:rotation') == 11 || q.block_property('wiki:rotation') == 15)",
		"side": "q.block_property('wiki:face') != 'up'"
	}
}
```

## Block Permutations

In addition to the variants of your model in bones, we will further rotate the block through the `minecraft:rotation` component in permutations. The reason behind having multiple bones is that `minecraft:rotation` only supports multiples of 90 degrees, while head rotation requires 22.5 degree steps.

Insert the following permutations into your block JSON (in the presented order):

```json
"permutations": [
	{
		"condition": "(q.block_property('wiki:face') == 'up' && q.block_property('wiki:rotation') >= 4) || q.block_property('wiki:face') == 'east'",
		"components": {
			"minecraft:rotation": [0, -90, 0]
		}
	},
	{
		"condition": "(q.block_property('wiki:face') == 'up' && q.block_property('wiki:rotation') >= 8) || q.block_property('wiki:face') == 'south'",
		"components": {
			"minecraft:rotation": [0, 180, 0]
		}
	},
	{
		"condition": "(q.block_property('wiki:face') == 'up' && q.block_property('wiki:rotation') >= 12) || q.block_property('wiki:face') == 'west'",
		"components": {
			"minecraft:rotation": [0, 90, 0]
		}
	}
]
```

If you would like your block to have a different collision/selection box when placed on the side of a block, as with my "shell" block, add something similar to the following permutation:

```json
"permutations": [
	...
	{
		"condition": "q.block_property('wiki:face') != 'up'",
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
```

## Final Block JSON

Our block JSON file after the above steps should look similar to the code below:

<Spoiler title="Shell Example Block JSON">

<CodeHeader>BP/blocks/shell.json</CodeHeader>

```json
{
	"format_version": "1.19.60",
	"minecraft:block": {
		"description": {
			"identifier": "wiki:shell",
			"menu_category": {
				"category": "nature"
			},
			"properties": {
				"wiki:face": ["up", "north", "south", "west", "east"],
				"wiki:rotation": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
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
			"minecraft:geometry": "geometry.shell",
			"minecraft:material_instances": {
				"*": {
					"texture": "shell"
				}
			},
			"minecraft:placement_filter": {
				"conditions": [
					{
						"allowed_faces": [
							"up",
							"side"
						]
					}
				]
			},
			"minecraft:on_player_placing": {
				"event": "wiki:set_placement"
			},
			"minecraft:part_visibility": {
				"conditions": {
					"up0": "q.block_property('wiki:face') == 'up' && (q.block_property('wiki:rotation') == 0 || q.block_property('wiki:rotation') == 4 || q.block_property('wiki:rotation') == 8 || q.block_property('wiki:rotation') == 12)",
					"up1": "q.block_property('wiki:face') == 'up' && (q.block_property('wiki:rotation') == 1 || q.block_property('wiki:rotation') == 5 || q.block_property('wiki:rotation') == 9 || q.block_property('wiki:rotation') == 13)",
					"up2": "q.block_property('wiki:face') == 'up' && (q.block_property('wiki:rotation') == 2 || q.block_property('wiki:rotation') == 6 || q.block_property('wiki:rotation') == 10 || q.block_property('wiki:rotation') == 14)",
					"up3": "q.block_property('wiki:face') == 'up' && (q.block_property('wiki:rotation') == 3 || q.block_property('wiki:rotation') == 7 || q.block_property('wiki:rotation') == 11 || q.block_property('wiki:rotation') == 15)",
					"side": "q.block_property('wiki:face') != 'up'"
				}
			}
		},
		"events": {
			"wiki:set_placement": {
				"set_block_property": {
					"wiki:face": "q.block_face == 2 ? 'north' : q.block_face == 3 ? 'south' : q.block_face == 4 ? 'west' : q.block_face == 5 ? 'east' : 'up'",
					"wiki:rotation": "q.block_face == 1 ? { t.positive_head_rot = q.head_y_rotation(0) + 360 * (q.head_y_rotation(0) != Math.abs(q.head_y_rotation(0))); t.block_rotation = Math.round(t.positive_head_rot / 22.5); return t.block_rotation != 16 ? t.block_rotation; };"
				}
			}
		},
		"permutations": [
			{
				"condition": "(q.block_property('wiki:face') == 'up' && q.block_property('wiki:rotation') >= 4) || q.block_property('wiki:face') == 'east'",
				"components": {
					"minecraft:rotation": [0, -90, 0]
				}
			},
			{
				"condition": "(q.block_property('wiki:face') == 'up' && q.block_property('wiki:rotation') >= 8) || q.block_property('wiki:face') == 'south'",
				"components": {
					"minecraft:rotation": [0, 180, 0]
				}
			},
			{
				"condition": "(q.block_property('wiki:face') == 'up' && q.block_property('wiki:rotation') >= 12) || q.block_property('wiki:face') == 'west'",
				"components": {
					"minecraft:rotation": [0, 90, 0]
				}
			},
			{
				"condition": "q.block_property('wiki:face') != 'up'",
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