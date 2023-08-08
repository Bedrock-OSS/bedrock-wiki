---
title: Troubleshooting Blocks
category: General
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

## 0.0 - Trouble

> "I followed a tutorial or tried to make my own block and something's wrong!"

No need to panic! This page will help debug common issues.

## 1.0 - Texture Troubleshooting

Fix issues related to block textures.

## 1.1 - Texture is Black and Magenta

I will be reviewing three different types of blocks that have different layouts: Dirt-like ![](/assets/images/blocks/block_tr/tr_dirt.png), Log-like ![](/assets/images/blocks/block_tr/tr_log.png), Grass-like ![](/assets/images/blocks/block_tr/tr_grass.png)

Navigate to your `RP/textures/terrain_texture.json`. Ensure that the file is properly named.

<CodeHeader>RP/textures/terrain_texture.json</CodeHeader>

```json
{
	"texture_name": "atlas.terrain",
	"resource_pack_name": "wiki",
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
		"custom_grass_top": {
			"textures": "textures/blocks/custom_grass_top" // You can replace this with anything, just remember the name
		},
		"custom_grass_bottom": {
			"textures": "textures/blocks/custom_grass_bottom" // You can replace this with anything, just remember the name
		},
		"custom_grass_side": {
			"textures": "textures/blocks/custom_grass_side" // You can replace this with anything, just remember the name
		}
	}
}
```

Next, navigate to your block file. In your block file, make sure you have the `material_instances` component.

Dirt like block example:

<CodeHeader>BP/blocks/dirt_like.json</CodeHeader>

```json
{
  "format_version": "1.20.20",
  "minecraft:block": {
    "description": {
      "identifier": "wiki:dirt_like"
    },
    "components": {
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
  "format_version": "1.20.20",
  "minecraft:block": {
    "description": {
      "identifier": "wiki:log_like"
    },
    "components": {
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

Grass-like block example:

<CodeHeader>BP/blocks/custom_grass.json</CodeHeader>

```json
{
  "format_version": "1.20.20",
  "minecraft:block": {
    "description": {
      "identifier": "wiki:custom_grass"
    },
    "components": {
      "minecraft:material_instances": {
        "*": {
          "texture": "custom_grass_side"
        },
        "up": {
          "texture": "custom_grass_top"
        },
        "down": {
          "texture": "custom_grass_bottom"
        }
      }
    }
  }
}
```

If you followed this properly, your block should now have correct texture.

## 1.2 - Texture Displays "Update" Written on Dirt

Problem: My custom block has turned into a dirt block with green writing on it.

![](/assets/images/blocks/block_tr/tr_update.png)

This an `unknown` block, which appears when the block identifier is changed or if your block JSON invalid.

Solution: Use a JSON linter and double check that your identifier didn't change. Ensure that you block has `minecraft:unit_cube`/`minecraft:geometry` and `minecraft:material_instances`, or an `RP/blocks.json` textures entry.

---

## 2.0 - Rendering Troubleshooting

This section will describe common block rendering issues and how to fix them.

## 2.1 - Transparency isn't Working

Problem: You have transparent pixels in your texture file, but when applied in-game, they become opaque.

Solution: Navigate to your block file. Navigate to your `material_instances` component. Add the following to your component:

<CodeHeader>BP/blocks/your_block.json</CodeHeader>

```json
{
	"format_version": "1.20.20",
	"minecraft:block": {
    ...
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

## 2.2 - Block Creates Shadows

Problem: You have block with custom geometry but it has a shadow.

Solution: Add following component to your block's code:

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:light_dampening": 0
```

## 2.3 - Model Cubes Overlap in Inventory

Problem: You have a block with custom geometry and it renders strange in inventory, like this:

![](/assets/images/blocks/block_tr/inventory_render_cubes.png)

Solution: In the inventory, block geometry is rendered from the bottom to the top, where later cubes overlap earlier cubes. To render your block correctly, you'll need to change the order of the cubes in blockbench.

```
cube_middle      cube_bottom
cube_top     ->  cube_middle
cube_bottom      cube_top
```

## 2.4 - Block Looks Small in Inventory

Problem: Your custom 16³ block looks smaller than vanilla blocks in inventory.

Solution:
Blocks can get their visuals in two ways, either by applying textures in the `RP/blocks.json` file _OR_ in the `minecraft:material_instances` component.

Using `blocks.json` causes the block to appear full sized in your inventory, but doesn't allow for custom block models or changing visuals using permutations.

If your block has no model or textures active from components or permutations, it will take the textures from the `blocks.json` causing the normal full sized block model.

If you want to make use of the rotation component you can't just apply it, you need to give it material instances, unit_cube or a custom model and the rotation component. This will make it rotatable, while the default state will use the `blocks.json` and shows normally.

## 3.0 - Common Content Log Errors

This section will describe common content log errors and how to debug them.

## 3.1 - Collision/Selection Box Errors

Problem: You get a content error similar to:

> `[Blocks][error]-minecraft:collision_box: min can't be below (-8, 0, -8) and max can't be more than (8, 16, 8)`

Solution: Check your `minecraft:collision_box` or `minecraft:selection_box` components and do the following:

-   Make sure the X and Z values are in the range `-8` - `8`.
-   Make sure the Y value is in the range `0` - `16`.
-   Make sure the box doesn't exit the block's 16&times;16&times;16 unit area.

## 3.2 - Model Errors

Problem: You get a content error similar to:

> `geometry.your_block contains X boxes outside...`

Solution: Your geometry is bigger than Minecraft blocks allow. You can either make the geometry smaller or split it into multiple blocks.

---

## What Now?

If you still have problems after trying these steps, feel free to join the discord server and ask your question there.

If you believe any information is wrong or outdated, please contribute via github!
