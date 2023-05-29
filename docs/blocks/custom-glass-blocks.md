---
title: Custom Glass
category: Vanilla Recreations
tags:
    - experimental
    - expert
mentions:
    - Eko-byte
	- SirLich
	- ThomasOrs
	- QuazChick
---

Making glass blocks may seem like a simple task, however it comes with many drawbacks as you will find, this tutorial aims to help you achieve a vanilla like glass block.

-   Features
    -   Make a Glass Block
    -   Make Vertical Connecting Glass
-   Issues
    -   When breaking there is invisible textures for a second
    -   When placing there is window textures visible for a second

:::warning
**Requires** Molang for connected textures and Holiday Toggles for BOTH ENABLED
:::

By The End You Should Be Able To Create Something Like This!

![Glass Results](/assets/images/blocks/glass-block/glass_showcase.png)

## Glass Block

<CodeHeader>BP/blocks/custom_glass.json</CodeHeader>

```json
{
	"format_version": "1.16.100",
	"minecraft:block": {
		"description": {
			"identifier": "wiki:custom_glass"
		},
		"components": {
			//basic custom glass components
			"minecraft:block_light_absorption": 0,
			"minecraft:material_instances": {
				"*": {
					"render_method": "blend",
					"texture": "custom_glass"
				}
			},
			"minecraft:creative_category": {
				"group": "itemGroup.name.glass",
				"category": "construction"
			}
		}
	}
}
```

<CodeHeader>RP/blocks.json</CodeHeader>

```json
{
	"wiki:custom_glass": {
		"textures": "window_block",
		"sound": "glass"
	}
}
```

## Vertical Connecting Glass

:::warning
**Note** This next tutorial is advanced and is not meant for beginners
:::

<CodeHeader>BP/blocks/custom_vertical_connecting_glass.json</CodeHeader>
<Spoiler title="Code">

```json
//add a "nothing" texture in terrain_texture, and make it have a transparent file
{
	"format_version": "1.16.100",
	"minecraft:block": {
		"description": {
			"identifier": "wiki:custom_vertical_connecting_glass",
			"properties": {
				//properties needed for connected textures, also controls up and down culling
				"wiki:connected_state": [0, 1, 2, 3],
				//properties to remove culling, depending on the direction in which a block is placed
				"wiki:north": [0, 1],
				"wiki:south": [0, 1],
				"wiki:east": [0, 1],
				"wiki:west": [0, 1]
			}
		},
		"components": {
			//basic glass components
			//tags used to give connected textures, and remove culling
			"tag:custom_vertical_connecting_glass": {},
			"tag:glass": {},
			"minecraft:creative_category": {
				"group": "itemGroup.name.glass",
				"category": "construction"
			},
			"minecraft:unit_cube": {},
			"minecraft:destroy_time": 1,
			"minecraft:ticking": {
				"looping": true,
				"on_tick": {
					"event": "change_state"
				},
				"range": [0, 0]
			},
			"minecraft:block_light_absorption": 0,
			"minecraft:block_light_emission": 0.07
		},
		"permutations": [
			//these permutations control what textures are displayed at different situations
			//they also use tags to determine what state they are in, (top texture then top tag)
			{
				"condition": "q.block_property('wiki:connected_state') == 0 && q.block_property('wiki:north') == 0 && q.block_property('wiki:south') == 0 && q.block_property('wiki:east') == 0 && q.block_property('wiki:west') == 0",
				"components": {
					"tag:default": {},
					"minecraft:material_instances": {
						"*": {
							"render_method": "blend",
							"texture": "custom_vertical_connecting_glass"
						},
						"up": {
							"render_method": "blend",
							"texture": "custom_vertical_connecting_glass_up"
						},
						"down": {
							"render_method": "blend",
							"texture": "custom_vertical_connecting_glass_up"
						}
					}
				}
			},
			{
				"condition": "q.block_property('wiki:connected_state') == 1 && q.block_property('wiki:north') == 0 && q.block_property('wiki:south') == 0 && q.block_property('wiki:east') == 0 && q.block_property('wiki:west') == 0",
				"components": {
					"tag:top": {},
					"minecraft:material_instances": {
						"*": {
							"render_method": "blend",
							"texture": "custom_vertical_connecting_glass_top"
						},
						"up": {
							"render_method": "blend",
							"texture": "custom_vertical_connecting_glass_up"
						},
						"down": {
							"render_method": "blend",
							"texture": "nothing"
						}
					}
				}
			},
			{
				"condition": "q.block_property('wiki:connected_state') == 2 && q.block_property('wiki:north') == 0 && q.block_property('wiki:south') == 0 && q.block_property('wiki:east') == 0 && q.block_property('wiki:west') == 0",
				"components": {
					"tag:bottom": {},
					"minecraft:material_instances": {
						"*": {
							"render_method": "blend",
							"texture": "custom_vertical_connecting_glass_bottom"
						},
						"up": {
							"render_method": "blend",
							"texture": "nothing"
						},
						"down": {
							"render_method": "blend",
							"texture": "custom_vertical_connecting_glass_up"
						}
					}
				}
			},
			{
				"condition": "q.block_property('wiki:connected_state') == 3 && q.block_property('wiki:north') == 0 && q.block_property('wiki:south') == 0 && q.block_property('wiki:east') == 0 && q.block_property('wiki:west') == 0",
				"components": {
					"tag:middle": {},
					"minecraft:material_instances": {
						"*": {
							"render_method": "blend",
							"texture": "custom_vertical_connecting_glass_middle"
						},
						"up": {
							"render_method": "blend",
							"texture": "nothing"
						},
						"down": {
							"render_method": "blend",
							"texture": "nothing"
						}
					}
				}
			},
			{
				"condition": "q.block_property('wiki:north') == 1 && q.block_property('wiki:connected_state') == 0",
				"components": {
					"tag:default": {},
					"minecraft:material_instances": {
						"*": {
							"texture": "custom_vertical_connecting_glass",
							"render_method": "blend"
						},
						"north": {
							"texture": "nothing",
							"render_method": "blend"
						},
						"up": {
							"render_method": "blend",
							"texture": "custom_vertical_connecting_glass_up"
						},
						"down": {
							"render_method": "blend",
							"texture": "custom_vertical_connecting_glass_up"
						}
					}
				}
			},
			{
				"condition": "q.block_property('wiki:south') == 1 && q.block_property('wiki:connected_state') == 0",
				"components": {
					"tag:default": {},
					"minecraft:material_instances": {
						"*": {
							"texture": "custom_vertical_connecting_glass",
							"render_method": "blend"
						},
						"south": {
							"texture": "nothing",
							"render_method": "blend"
						},
						"up": {
							"render_method": "blend",
							"texture": "custom_vertical_connecting_glass_up"
						},
						"down": {
							"render_method": "blend",
							"texture": "custom_vertical_connecting_glass_up"
						}
					}
				}
			},
			{
				"condition": "q.block_property('wiki:east') == 1 && q.block_property('wiki:connected_state') == 0",
				"components": {
					"tag:default": {},
					"minecraft:material_instances": {
						"*": {
							"texture": "custom_vertical_connecting_glass",
							"render_method": "blend"
						},
						"east": {
							"texture": "nothing",
							"render_method": "blend"
						},
						"up": {
							"render_method": "blend",
							"texture": "custom_vertical_connecting_glass_up"
						},
						"down": {
							"render_method": "blend",
							"texture": "custom_vertical_connecting_glass_up"
						}
					}
				}
			},
			{
				"condition": "q.block_property('wiki:west') == 1 && q.block_property('wiki:connected_state') == 0",
				"components": {
					"tag:default": {},
					"minecraft:material_instances": {
						"*": {
							"texture": "custom_vertical_connecting_glass",
							"render_method": "blend"
						},
						"west": {
							"texture": "nothing",
							"render_method": "blend"
						},
						"up": {
							"render_method": "blend",
							"texture": "custom_vertical_connecting_glass_up"
						},
						"down": {
							"render_method": "blend",
							"texture": "custom_vertical_connecting_glass_up"
						}
					}
				}
			},
			{
				"condition": "q.block_property('wiki:north') == 1 && q.block_property('wiki:connected_state') == 1",
				"components": {
					"tag:top": {},
					"minecraft:material_instances": {
						"*": {
							"texture": "custom_vertical_connecting_glass_top",
							"render_method": "blend"
						},
						"north": {
							"texture": "nothing",
							"render_method": "blend"
						},
						"up": {
							"render_method": "blend",
							"texture": "custom_vertical_connecting_glass_up"
						},
						"down": {
							"render_method": "blend",
							"texture": "nothing"
						}
					}
				}
			},
			{
				"condition": "q.block_property('wiki:south') == 1 && q.block_property('wiki:connected_state') == 1",
				"components": {
					"tag:top": {},
					"minecraft:material_instances": {
						"*": {
							"texture": "custom_vertical_connecting_glass_top",
							"render_method": "blend"
						},
						"south": {
							"texture": "nothing",
							"render_method": "blend"
						},
						"up": {
							"render_method": "blend",
							"texture": "custom_vertical_connecting_glass_up"
						},
						"down": {
							"render_method": "blend",
							"texture": "nothing"
						}
					}
				}
			},
			{
				"condition": "q.block_property('wiki:east') == 1 && q.block_property('wiki:connected_state') == 1",
				"components": {
					"tag:top": {},
					"minecraft:material_instances": {
						"*": {
							"texture": "custom_vertical_connecting_glass_top",
							"render_method": "blend"
						},
						"east": {
							"texture": "nothing",
							"render_method": "blend"
						},
						"up": {
							"render_method": "blend",
							"texture": "custom_vertical_connecting_glass_up"
						},
						"down": {
							"render_method": "blend",
							"texture": "nothing"
						}
					}
				}
			},
			//in this situation if there is a block to the west and it is the upper connected texture then it shall have the west side invisible and the sides be the upper connected part
			{
				"condition": "q.block_property('wiki:west') == 1 && q.block_property('wiki:connected_state') == 1",
				"components": {
					"tag:top": {},
					"minecraft:material_instances": {
						"*": {
							"texture": "custom_vertical_connecting_glass_top",
							"render_method": "blend"
						},
						"west": {
							"texture": "nothing",
							"render_method": "blend"
						},
						"up": {
							"render_method": "blend",
							"texture": "custom_vertical_connecting_glass_up"
						},
						"down": {
							"render_method": "blend",
							"texture": "nothing"
						}
					}
				}
			},
			{
				"condition": "q.block_property('wiki:north') == 1 && q.block_property('wiki:connected_state') == 2",
				"components": {
					"tag:bottom": {},
					"minecraft:material_instances": {
						"*": {
							"texture": "custom_vertical_connecting_glass_bottom",
							"render_method": "blend"
						},
						"north": {
							"texture": "nothing",
							"render_method": "blend"
						},
						"down": {
							"render_method": "blend",
							"texture": "custom_vertical_connecting_glass_up"
						},
						"up": {
							"render_method": "blend",
							"texture": "nothing"
						}
					}
				}
			},
			{
				"condition": "q.block_property('wiki:south') == 1 && q.block_property('wiki:connected_state') == 2",
				"components": {
					"tag:bottom": {},
					"minecraft:material_instances": {
						"*": {
							"texture": "custom_vertical_connecting_glass_bottom",
							"render_method": "blend"
						},
						"south": {
							"texture": "nothing",
							"render_method": "blend"
						},
						"down": {
							"render_method": "blend",
							"texture": "custom_vertical_connecting_glass_up"
						},
						"up": {
							"render_method": "blend",
							"texture": "nothing"
						}
					}
				}
			},
			{
				"condition": "q.block_property('wiki:east') == 1 && q.block_property('wiki:connected_state') == 2",
				"components": {
					"tag:bottom": {},
					"minecraft:material_instances": {
						"*": {
							"texture": "custom_vertical_connecting_glass_bottom",
							"render_method": "blend"
						},
						"east": {
							"texture": "nothing",
							"render_method": "blend"
						},
						"down": {
							"render_method": "blend",
							"texture": "custom_vertical_connecting_glass_up"
						},
						"up": {
							"render_method": "blend",
							"texture": "nothing"
						}
					}
				}
			},
			{
				"condition": "q.block_property('wiki:west') == 1 && q.block_property('wiki:connected_state') == 2",
				"components": {
					"tag:bottom": {},
					"minecraft:material_instances": {
						"*": {
							"texture": "custom_vertical_connecting_glass_bottom",
							"render_method": "blend"
						},
						"west": {
							"texture": "nothing",
							"render_method": "blend"
						},
						"down": {
							"render_method": "blend",
							"texture": "custom_vertical_connecting_glass_up"
						},
						"up": {
							"render_method": "blend",
							"texture": "nothing"
						}
					}
				}
			},
			{
				"condition": "q.block_property('wiki:north') == 1 && q.block_property('wiki:connected_state') == 3",
				"components": {
					"tag:middle": {},
					"minecraft:material_instances": {
						"*": {
							"texture": "custom_vertical_connecting_glass_middle",
							"render_method": "blend"
						},
						"north": {
							"texture": "nothing",
							"render_method": "blend"
						},
						"down": {
							"render_method": "blend",
							"texture": "nothing"
						},
						"up": {
							"render_method": "blend",
							"texture": "nothing"
						}
					}
				}
			},
			{
				"condition": "q.block_property('wiki:south') == 1 && q.block_property('wiki:connected_state') == 3",
				"components": {
					"tag:middle": {},
					"minecraft:material_instances": {
						"*": {
							"texture": "custom_vertical_connecting_glass_middle",
							"render_method": "blend"
						},
						"south": {
							"texture": "nothing",
							"render_method": "blend"
						},
						"down": {
							"render_method": "blend",
							"texture": "nothing"
						},
						"up": {
							"render_method": "blend",
							"texture": "nothing"
						}
					}
				}
			},
			{
				"condition": "q.block_property('wiki:east') == 1 && q.block_property('wiki:connected_state') == 3",
				"components": {
					"tag:middle": {},
					"minecraft:material_instances": {
						"*": {
							"texture": "custom_vertical_connecting_glass_middle",
							"render_method": "blend"
						},
						"east": {
							"texture": "nothing",
							"render_method": "blend"
						},
						"down": {
							"render_method": "blend",
							"texture": "nothing"
						},
						"up": {
							"render_method": "blend",
							"texture": "nothing"
						}
					}
				}
			},
			{
				"condition": "q.block_property('wiki:west') == 1 && q.block_property('wiki:connected_state') == 3",
				"components": {
					"tag:middle": {},
					"minecraft:material_instances": {
						"*": {
							"texture": "custom_vertical_connecting_glass_middle",
							"render_method": "blend"
						},
						"west": {
							"texture": "nothing",
							"render_method": "blend"
						},
						"down": {
							"render_method": "blend",
							"texture": "nothing"
						},
						"up": {
							"render_method": "blend",
							"texture": "nothing"
						}
					}
				}
			}
		],
		"events": {
			"change_state": {
				"sequence": [
					//these set the block to have no culling
					{
						"condition": "q.block_neighbor_has_any_tag(0,0,-1,'custom_vertical_connecting_glass')",
						"set_block_property": {
							"wiki:north": 1
						}
					},
					{
						"condition": "q.block_neighbor_has_any_tag(0,0,1,'custom_vertical_connecting_glass')",
						"set_block_property": {
							"wiki:south": 1
						}
					},
					{
						"condition": "q.block_neighbor_has_any_tag(-1,0,0,'custom_vertical_connecting_glass')",
						"set_block_property": {
							"wiki:west": 1
						}
					},
					{
						"condition": "q.block_neighbor_has_any_tag(1,0,0,'custom_vertical_connecting_glass')",
						"set_block_property": {
							"wiki:east": 1
						}
					},
					{
						"condition": "!q.block_neighbor_has_any_tag(0,0,-1,'custom_vertical_connecting_glass')",
						"set_block_property": {
							"wiki:north": 0
						}
					},
					{
						"condition": "!q.block_neighbor_has_any_tag(0,0,1,'custom_vertical_connecting_glass')",
						"set_block_property": {
							"wiki:south": 0
						}
					},
					{
						"condition": "!q.block_neighbor_has_any_tag(-1,0,0,'custom_vertical_connecting_glass')",
						"set_block_property": {
							"wiki:west": 0
						}
					},
					{
						"condition": "!q.block_neighbor_has_any_tag(1,0,0,'custom_vertical_connecting_glass')",
						"set_block_property": {
							"wiki:east": 0
						}
					},
					//these control the custom texture state
					{
						"condition": "q.block_neighbor_has_any_tag(0,-1,0,'default')",
						"set_block_property": {
							"wiki:connected_state": 1
						}
					},
					{
						"condition": "q.block_neighbor_has_any_tag(0,1,0,'top') && !q.block_neighbor_has_any_tag(0,-1,0,'middle')",
						"set_block_property": {
							"wiki:connected_state": 2
						}
					},
					{
						"condition": "q.block_neighbor_has_any_tag(0,1,0,'top') && q.block_neighbor_has_any_tag(0,-1,0,'middle')",
						"set_block_property": {
							"wiki:connected_state": 3
						}
					},
					{
						"condition": "q.block_neighbor_has_any_tag(0,-1,0,'top')",
						"set_block_property": {
							"wiki:connected_state": 1
						}
					},
					{
						"condition": "q.block_neighbor_has_any_tag(0,-1,0,'bottom') && (q.block_neighbor_has_any_tag(0,1,0,'top') || q.block_neighbor_has_any_tag(0,1,0,'middle'))",
						"set_block_property": {
							"wiki:connected_state": 3
						}
					},
					{
						"condition": "!q.block_neighbor_has_any_tag(0,1,0,'top', 'default', 'middle', 'bottom') && q.block_neighbor_has_any_tag(0,-1,0,'middle', 'bottom')",
						"set_block_property": {
							"wiki:connected_state": 1
						}
					},
					{
						"condition": "!q.block_neighbor_has_any_tag(0,1,0,'top', 'default', 'middle', 'bottom') && !q.block_neighbor_has_any_tag(0,-1,0,'middle', 'bottom', 'top', 'default')",
						"set_block_property": {
							"wiki:connected_state": 0
						}
					},
					{
						"condition": "q.block_neighbor_has_any_tag(0,1,0,'top', 'middle', 'bottom') && !q.block_neighbor_has_any_tag(0,-1,0,'middle', 'bottom', 'top', 'default')",
						"set_block_property": {
							"wiki:connected_state": 2
						}
					},
					{
						"condition": "q.block_neighbor_has_any_tag(0,1,0,'default') && q.block_neighbor_has_any_tag(0,-1,0,'default')",
						"set_block_property": {
							"wiki:connected_state": 3
						}
					}
				]
			}
		}
	}
}
```

</Spoiler>

More Coming Soon!
