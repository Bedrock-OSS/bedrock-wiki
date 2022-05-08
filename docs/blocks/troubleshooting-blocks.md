---
title: Troubleshooting Blocks
category: General
nav_order: 2
tags:
    - help
---

## Learn about Troubleshooting

:::tip
This page contains troubleshooting information about _blocks_. You should read our [global troubleshooting](/guide/troubleshooting) document before continuing here.
:::

## Step-by-step Block Debugging

## 0.0.0 - Trouble

I followed a tutorial or tried to make my own block and something's wrong! Calm down. This page will help debug common issues. <BButton color="blue" link="troubleshooting-blocks#_1-0-0-my-block-has-a-black-magenta-checkered-pattern-my-textures-are-missing">Continue</BButton>

## 1.0.0 - My Block Has a Black-Magenta checkered pattern/My Textures Are Missing!

I will be reviewing three different types of blocks that have different layouts: Dirt-like ![](/assets/images/blocks/block_tr/tr_dirt.png), Log-like ![](/assets/images/blocks/block_tr/tr_log.png), Grass-like ![](/assets/images/blocks/block_tr/tr_grass.png)

1.10 Block <BButton color="blue" link="troubleshooting-blocks#_1-10-blocks">Continue</BButton>

1.16.100 Block <BButton color="blue" link="troubleshooting-blocks#_1-16-100-blocks">Continue</BButton>

## 1.10 Blocks

Navigate to your `blocks.json`. Ensure that it is properly named.

<CodeHeader>RP/textures/blocks.json</CodeHeader>

```json
{
	"format_version": [1, 1, 0],
	"wiki:dirt_like": {
		"textures": "dirt_like", //You can replace this with anything, just remember the name
		"sound": "your_sound_name"
	},
	"wiki:log_like": {
		"textures": {
			"up": "log_like_top", //You can replace this with anything, just remember the name
			"down": "log_like_top", //You can replace this with anything, just remember the name
			"side": "log_like_side" //You can replace this with anything, just remember the name
		},
		"sound": "your_sound_name"
	},
	"wiki:grass_like": {
		"textures": {
			"up": "grass_like_top", //You can replace this with anything, just remember the name
			"down": "grass_like_bottom", //You can replace this with anything, just remember the name
			"side": "grass_like_side" //You can replace this with anything, just remember the name
		},
		"sound": "your_sound_name"
	}
}
```

Next, navigate to your `terrain_texture.json`. Ensure that it is properly named.

<CodeHeader>RP/textures/terrain_texture.json</CodeHeader>

```json
{
	"resource_pack_name": "tut",
	"texture_name": "atlas.terrain",
	"padding": 8,
	"num_mip_levels": 4,
	"texture_data": {
		"dirt_like": {
			"textures": "textures/blocks/dirt_like" //You can replace this with anything, just remember the name
		},
		"log_like_top": {
			"textures": "textures/blocks/log_like_top" //You can replace this with anything, just remember the name
		},
		"log_like_side": {
			"textures": "textures/blocks/log_like_side" //You can replace this with anything, just remember the name
		},
		"grass_like_top": {
			"textures": "textures/blocks/grass_like_top" //You can replace this with anything, just remember the name
		},
		"grass_like_bottom": {
			"textures": "textures/blocks/grass_like_bottom" //You can replace this with anything, just remember the name
		},
		"grass_like_side": {
			"textures": "textures/blocks/grass_like_side" //You can replace this with anything, just remember the name
		}
	}
}
```

If you followed this properly, your 1.10 block should now have correct texture.

## 1.16.100 Blocks

You can follow the exact same steps as the 1.10 blocks. But doing this method allows you to rotate your blocks.
Navigate to your `terrain_texture.json`. Ensure that it is properly named

<CodeHeader>RP/textures/terrain_texture.json</CodeHeader>

```json
{
	"resource_pack_name": "tut",
	"texture_name": "atlas.terrain",
	"padding": 8,
	"num_mip_levels": 4,
	"texture_data": {
		"dirt_like": {
			"textures": "textures/blocks/dirt_like" //You can replace this with anything, just remember the name
		},
		"log_like_top": {
			"textures": "textures/blocks/log_like_top" //You can replace this with anything, just remember the name
		},
		"log_like_side": {
			"textures": "textures/blocks/log_like_side" //You can replace this with anything, just remember the name
		},
		"grass_like_top": {
			"textures": "textures/blocks/grass_like_top" //You can replace this with anything, just remember the name
		},
		"grass_like_bottom": {
			"textures": "textures/blocks/grass_like_bottom" //You can replace this with anything, just remember the name
		},
		"grass_like_side": {
			"textures": "textures/blocks/grass_like_side" //You can replace this with anything, just remember the name
		}
	}
}
```

Next, navigate to your block file. In your block file, make sure you have the `material_instances` component.

Dirt like block example:
<CodeHeader>BP/blocks/dirt_like.json</CodeHeader>

```json
{
    "format_version": "1.16.100",
    "minecraft:block": {
        "description": {
            "identifier": "wiki:dirt_like",
            "register_to_creative_menu": true
        },
        "components": {
            "minecraft:material_instances": {
                "*": {
                    "texture": "dirt_like",
                }
            },
            ...
        },
        "events": {...}
    }
}
```

Log like block example:
<CodeHeader>BP/blocks/log_like.json</CodeHeader>

```json
{
    "format_version": "1.16.100",
    "minecraft:block": {
        "description": {
            "identifier": "wiki:log_like",
            "register_to_creative_menu": true
        },
        "components": {
            "minecraft:material_instances": {
                "*": {
                    "texture": "log_like_side"
                },
                "ends": {
                    "texture": "log_like_top"
                },
                "up": "ends",
                "down": "ends"
            },
            ...
        },
        "events": {...}
    }
}
```

Grass like block example:
<CodeHeader>BP/blocks/grass_like.json</CodeHeader>

```json
{
    "format_version": "1.16.100",
    "minecraft:block": {
        "description": {
            "identifier": "wiki:grass_like",
            "register_to_creative_menu": true
        },
        "components": {
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
            },
            ...
        },
        "events": {...}
    }
}
```

If you followed this properly, your 1.16.100 block should now have correct texture.

## 2.0.0 - My Block Looks Like Dirt!

Problem: My custom block has turned into a dirt block with green writing on it. ![](/assets/images/blocks/block_tr/tr_update.png) This is called `info_update` block. This happens when the block identifier changed or an invalid json was made.

Solution: Use a json linter and double check that your identifier didn't change.

---

<a name="3.0.0"></a>

## 3.0.0 - Block Rendering

This section will describe common block rendering issues and how to fix them.

## 3.1.0 - Block isn't transparent!

Problem: You have transparent pixels in your texture file. When you apply it in game, they become opaque.

Solution: Navigate to your block file. Navigate to your `material_instances` component. Add the following to your component:

<CodeHeader>BP/blocks/your_block.json</CodeHeader>

```json
{
	"format_version": "1.16.100",
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

## 3.2.0 - Block has shadow!

Problem: You have block with custom geometry but it has shadow.

Solution: Navigate to your block file. Navigate to your `material_instances` component. Add the following to your component:

<CodeHeader>BP/blocks/your_block.json</CodeHeader>

```json
{
	"format_version": "1.16.100",
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

Add following components to your block's code:

<CodeHeader>BP/blocks/your_block.json</CodeHeader>

```json
{
	"format_version": "1.16.100",
	"minecraft:block": {
		"components": {
			"minecraft:block_light_emission": 0.0,
			"minecraft:block_light_absorption": 0
		}
	}
}
```

## 4.0.0 - Common Content Log Errors

This section will describe common content log errors and how to debug them.

## 4.1.0 - [Blocks][error]

Problem: Your content log shows `[Blocks][error]-minecraft:entity_collision: min can't be below (-8, 0, -8) and max can't be more than (8, 16, 8)` or `[Blocks][error]-minecraft:pick_collision: min can't be below (-8, 0, -8) and max can't be more than (8, 16, 8)`

Solution: Check your `entity_collision` or `pick_collision` components and do the following:

-   Make sure the x or z isn't less than -8.
-   Make sure the y isn't less than 0.
-   Make sure the size isn't bigger than 16x16x16.

## 4.2.0 - [Blocks][warning]

Problem: Your content log shows `geometry.your_block contains an X amount of boxes outside the warning bounds of (*insert numbers*) to (*insert numbers*)`

Solution: Don't worry. It's nothing to worry about. It's just telling you that you geometry is bigger than 16x16x16. You can either make the geometry smaller or just ignore it.

---

## What Now?

That is all the common block troubleshooting tips I have seen. If you still have any problems, feel free to join the discord server and ask your question there. If you believe any information is wrong or outdated, feel free to contribute via github.
