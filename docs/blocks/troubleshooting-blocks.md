---
title: Troubleshooting Blocks
category: General
nav_order: 4
tags:
    - help
mentions:
    - SmokeyStack
    - SirLich
    - aexer0e
    - MedicalJewel105
    - Sprunkles137
    - QuazChick
---

:::tip
This page contains troubleshooting information about _blocks_. You should read our [global troubleshooting](/guide/troubleshooting) document before continuing here.
:::

## Step-by-Step Block Debugging

## 0.0.0 - Trouble

> "I followed a tutorial or tried to make my own block and something's wrong!"

No need to panic! This page will help debug common issues.

## 1.0.0 - My block has a black-magenta checkered pattern / missing textures.

I will be reviewing three different types of blocks that have different layouts: Dirt-like ![](/assets/images/blocks/block_tr/tr_dirt.png), Log-like ![](/assets/images/blocks/block_tr/tr_log.png), Grass-like ![](/assets/images/blocks/block_tr/tr_grass.png)

Navigate to your `RP/textures/terrain_texture.json`. Ensure that the file is properly named.

<CodeHeader>RP/textures/terrain_texture.json</CodeHeader>

```json
{
	"resource_pack_name": "wiki",
	"texture_name": "atlas.terrain",
	"padding": 8,
	"num_mip_levels": 4,
	"texture_data": {
		"dirt_like": {
			"textures": "textures/blocks/dirt_like" // You can replace this with anything, just remember the name
		},
		"log_like_top": {
			"textures": "textures/blocks/log_like_top" // You can replace this with anything, just remember the name
		},
		"log_like_side": {
			"textures": "textures/blocks/log_like_side" // You can replace this with anything, just remember the name
		},
		"grass_like_top": {
			"textures": "textures/blocks/grass_like_top" // You can replace this with anything, just remember the name
		},
		"grass_like_bottom": {
			"textures": "textures/blocks/grass_like_bottom" // You can replace this with anything, just remember the name
		},
		"grass_like_side": {
			"textures": "textures/blocks/grass_like_side" // You can replace this with anything, just remember the name
		}
	}
}
```

Next, navigate to your block file. In your block file, make sure you have the `material_instances` component.

Dirt like block example:

<CodeHeader>BP/blocks/dirt_like.json</CodeHeader>

```json
{
  "format_version": "1.20.0",
  "minecraft:block": {
    "description": {
      "identifier": "wiki:dirt_like"
    },
    "components": {
      ...
      "minecraft:material_instances": {
        "*": {
          "texture": "dirt_like",
        }
      }
    }
  }
}
```

Log like block example:

<CodeHeader>BP/blocks/log_like.json</CodeHeader>

```json
{
  "format_version": "1.20.0",
  "minecraft:block": {
    "description": {
      "identifier": "wiki:log_like"
    },
    "components": {
      ...
      "minecraft:material_instances": {
        "*": {
          "texture": "log_like_side"
        },
        "end": {
          "texture": "log_like_top"
        },
        "up": "end",
        "down": "end"
      }
    }
  }
}
```

Grass like block example:

<CodeHeader>BP/blocks/grass_like.json</CodeHeader>

```json
{
  "format_version": "1.20.0",
  "minecraft:block": {
    "description": {
      "identifier": "wiki:grass_like"
    },
    "components": {
      ...
      "minecraft:material_instances": {
        "*": {
          "texture": "grass_like_side"
        },
        "up": {
          "texture": "grass_like_top"
        },
        "down": {
          "texture": "grass_like_bottom"
        }
      }
    }
  }
}
```

If you followed this properly, your block should now have correct texture.

## 2.0.0 - My block looks like dirt.

Problem: My custom block has turned into a dirt block with green writing on it.

![](/assets/images/blocks/block_tr/tr_update.png)

This an `unknown` block, which happens when the block identifier changed or an invalid JSON was made.

Solution: Use a JSON linter and double check that your identifier didn't change.

---

<a name="3.0.0"></a>

## 3.0.0 - Block Rendering

This section will describe common block rendering issues and how to fix them.

## 3.1.0 - My block isn't transparent.

Problem: You have transparent pixels in your texture file. When you apply it in game, they become opaque.

Solution: Navigate to your block file. Navigate to your `material_instances` component. Add the following to your component:

<CodeHeader>BP/blocks/your_block.json</CodeHeader>

```json
{
	"format_version": "1.20.0",
	"minecraft:block": {
		"components": {
			"minecraft:material_instances": {
				"*": {
					"render_method": "alpha_test"
				}
			}
		}
	}
}
```

## 3.2.0 - My block has a shadow.

Problem: You have block with custom geometry but it has shadow.

Solution: Navigate to your block file. Navigate to your `material_instances` component. Add the following to your component:

<CodeHeader>BP/blocks/your_block.json</CodeHeader>

```json
{
	"format_version": "1.20.0",
	"minecraft:block": {
		"components": {
			"minecraft:material_instances": {
				"*": {
					"face_dimming": false,
					"ambient_occlusion": false
				}
			}
		}
	}
}
```

Another method:

Add following component to your block's code:

<CodeHeader>BP/blocks/your_block.json</CodeHeader>

```json
{
	"minecraft:light_dampening": 0
}
```

## 3.3.0 - My block renders odd in inventory.

Problem: You have a block with custom geometry and it renders strange in inventory, like this:

![](/assets/images/blocks/block_tr/inventory_render_cubes.png)

Solution: In inventory, block's geometry is rendered by cubes, from the bottom to the top, where first ones overlap next. To render your block correctly, you'll need to change the order of the cubes in blockbench.

```
cube_middle      cube_bottom
cube_top     ->  cube_middle
cube_bottom      cube_top
```

## 3.4.0 - My block looks smaller in inventory.

Problem: Your custom 16³ block looks smaller than vanilla blocks in inventory.

Solution:
Blocks can get their visuals in two ways, either by applying textures in the `RP/blocks.json` file _OR_ in the `minecraft:material_instances` component.

Using `blocks.json` causes the block to appear full sized in your inventory, but doesn't allow for custom block models or changing visuals using permutations.

If your block has no model or textures active from components or permutations, it will take the textures from the `blocks.json` causing the normal full sized block model.

If you want to make use of the rotation component you can't just apply it, you need to give it material instances, unit_cube or a custom model and the rotation component. This will make it rotatable, while the default state will use the `blocks.json` and shows normally.

## 4.0.0 - Common Content Log Errors

This section will describe common content log errors and how to debug them.

## 4.1.0 - Collision/Selection Box Errors.

Problem: You get a content error similar to:

> `[Blocks][error]-minecraft:collision_box: min can't be below (-8, 0, -8) and max can't be more than (8, 16, 8)`

Solution: Check your `minecraft:collision_box` or `minecraft:selection_box` components and do the following:

-   Make sure the x and z values are in the range `-8` - `8`.
-   Make sure the y value is in the range `0` - `16`.
-   Make sure the size isn't bigger than 16³.

## 4.2.0 - Model Errors

Problem: You get a content error similar to:

> `geometry.your_block contains X boxes outside the warning error of...`

Solution: Your geometry is bigger than Minecraft blocks allow. You can either make the geometry smaller or split it into multiple blocks.

---

## What Now?

If you still have problems after trying these steps, feel free to join the discord server and ask your question there.

If you believe any information is wrong or outdated, please contribute via github!
