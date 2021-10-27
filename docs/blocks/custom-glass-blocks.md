---
title: Making Custom Glass Blocks
tags:
    - experimental
    - expert
mention:
    - Eko-byte
---

## Features
Making glass blocks may seem like a simple task, however it comes with many drawbacks as you will find, this tutorial aims to help you achieve a more vanilla glass block.

 - Features
	 - Make a Glass Block
	 - Make Vertical Connecting Glass
- Issues
	- When breaking there is invisible textures for a second (Minecraft Bug)
	- When placing there is window textures visible for a second (Minecraft Bug)

::: Requires 
Molang and Holiday Toggles ENABLED
:::

## Glass Block

```json
//add a "nothing" texture in terrain_texture, and make it have a transparent file
{
	//this block works because it uses different permutations active at once and multiple material instances at once to change different sides of the custom_glass to be invisible
	"format_version": "1.16.100",
	"minecraft:block": {
		"description": {
			"identifier": "wiki:custom_glass",
			"properties": {
				//the properties needed to detect what sides of the block needs to be invisible
				"wiki:north": [
					0,
					1
				],
				"wiki:south": [
					0,
					1
				],
				"wiki:east": [
					0,
					1
				],
				"wiki:west": [
					0,
					1
				],
				"wiki:up": [
					0,
					1
				],
				"wiki:down": [
					0,
					1
				]
			}
		},
		"permutations": [
			{
				//if the north side of the block has custom glass on it, the north side will be invisible
				"condition": "q.block_property('wiki:north')",
				"components": {
					"minecraft:material_instances": {
						"*": {
							"texture": "custom_glass",
							"render_method": "blend"
						},
						"north": {
							"texture": "nothing",
							"render_method": "blend"
						}
					}
				}
			},
			{
				//if the south side of the block has custom glass on it, the south side will be invisible
				"condition": "q.block_property('wiki:south')",
				"components": {
					"minecraft:material_instances": {
						"*": {
							"texture": "custom_glass",
							"render_method": "blend"
						},
						"south": {
							"texture": "nothing",
							"render_method": "blend"
						}
					}
				}
			},
			{
				//if the east side of the block has custom glass on it, the east side will be invisible
				"condition": "q.block_property('wiki:east')",
				"components": {
					"minecraft:material_instances": {
						"*": {
							"texture": "custom_glass",
							"render_method": "blend"
						},
						"east": {
							"texture": "nothing",
							"render_method": "blend"
						}
					}
				}
			},
			{
				//if the west side of the block has custom glass on it, the west side will be invisible
				"condition": "q.block_property('wiki:west')",
				"components": {
					"minecraft:material_instances": {
						"*": {
							"texture": "custom_glass",
							"render_method": "blend"
						},
						"west": {
							"texture": "nothing",
							"render_method": "blend"
						}
					}
				}
			},
			{
				//if the top of the block has custom glass on it, the top will be invisible
				"condition": "q.block_property('wiki:up')",
				"components": {
					"minecraft:material_instances": {
						"*": {
							"texture": "custom_glass",
							"render_method": "blend"
						},
						"up": {
							"texture": "nothing",
							"render_method": "blend"
						}
					}
				}
			},
			{
				//if the bottom of the block has custom glass on it, the bottom will be invisible
				"condition": "q.block_property('wiki:down')",
				"components": {
					"minecraft:material_instances": {
						"*": {
							"texture": "custom_glass",
							"render_method": "blend"
						},
						"down": {
							"texture": "nothing",
							"render_method": "blend"
						}
					}
				}
			}
		],
		"components": {
			//basic custom glass components
			//custom glass tag used to detect othere custom glass blocks NOTE this must be different per custom glass block
			"tag:custom_glass": {},
			"minecraft:block_light_absorption": 0,
			"minecraft:unit_cube": {},
			"minecraft:material_instances": {
				"*": {
					"render_method": "blend",
					"texture": "custom_glass"
				}
			},
			"minecraft:creative_category": {
				"group": "itemGroup.name.glass",
				"category": "construction"
			},
			//constantly lets the block be updated
			"minecraft:ticking": {
				"looping": true,
				"on_tick": {
					"event": "change_texture"
				},
				"range": [
					0,
					0
				]
			}
		},
		"events": {
			//the state used to update the block
			"change_texture": {
				"sequence": [
					{
						//if custom glass above, then the up property is set to 1, and the top side will be invisible
						"condition": "q.block_neighbor_has_any_tag(0,1,0,'custom_glass')",
						"set_block_property": {
							"wiki:up": 1
						}
					},
					{
						//if custom glass below, then the down property is set to 1, and the bottom side will be invisible
						"condition": "q.block_neighbor_has_any_tag(0,-1,0,'custom_glass')",
						"set_block_property": {
							"wiki:down": 1
						}
					},
					{
						//if custom glass to the north, then the north property is set to 1, and the north side will be invisible
						"condition": "q.block_neighbor_has_any_tag(0,0,-1,'custom_glass')",
						"set_block_property": {
							"wiki:north": 1
						}
					},
					{
						//if custom glass to the south, then the south property is set to 1, and the south side will be invisible
						"condition": "q.block_neighbor_has_any_tag(0,0,1,'custom_glass')",
						"set_block_property": {
							"wiki:south": 1
						}
					},
					{
						//if custom glass to the west, then the west property is set to 1, and the west side will be invisible
						"condition": "q.block_neighbor_has_any_tag(-1,0,0,'custom_glass')",
						"set_block_property": {
							"wiki:west": 1
						}
					},
					{
						//if custom glass to the east, then the east property is set to 1, and the east side will be invisible
						"condition": "q.block_neighbor_has_any_tag(1,0,0,'custom_glass')",
						"set_block_property": {
							"wiki:east": 1
						}
					},
					{
						//if there is not custom glass to the top, then the up property is set to 0, and the top side will be textured
						"condition": "!q.block_neighbor_has_any_tag(0,1,0,'custom_glass')",
						"set_block_property": {
							"wiki:up": 0
						}
					},
					{
						//if there is not custom glass to the bottom, then the down property is set to 0, and the bottom side will be textured
						"condition": "!q.block_neighbor_has_any_tag(0,-1,0,'custom_glass')",
						"set_block_property": {
							"wiki:down": 0
						}
					},
					{
						//if there is not custom glass to the north, then the north property is set to 0, and the north side will be textured
						"condition": "!q.block_neighbor_has_any_tag(0,0,-1,'custom_glass')",
						"set_block_property": {
							"wiki:north": 0
						}
					},
					{
						//if there is not custom glass to the south, then the south property is set to 0, and the south side will be textured
						"condition": "!q.block_neighbor_has_any_tag(0,0,1,'custom_glass')",
						"set_block_property": {
							"wiki:south": 0
						}
					},
					{
						//if there is not custom glass to the west, then the west property is set to 0, and the west side will be textured
						"condition": "!q.block_neighbor_has_any_tag(-1,0,0,'custom_glass')",
						"set_block_property": {
							"wiki:west": 0
						}
					},
					{
						//if there is not custom glass to the east, then the east property is set to 0, and the east side will be textured
						"condition": "!q.block_neighbor_has_any_tag(1,0,0,'custom_glass')",
						"set_block_property": {
							"wiki:east": 0
						}
					}
				]
			}
		}
	}
}
```
## Vertical Connecting Glass
:::Note
This next tutorial is advanced and does not go as in depth
:::
```json
//add a "nothing" texture in terrain_texture, and make it have a transparent file
{
	"format_version": "1.16.100",
	"minecraft:block": {
		"description": {
			"identifier": "wiki:custom_vertical_connecting_glass",
			"properties": {
				//properties needed for connected textures
				"wiki:connected_state": [
					0,
					1,
					2,
					3
				],
				//properties to remove culling
				"wiki:north": [
					0,
					1
				],
				"wiki:south": [
					0,
					1
				],
				"wiki:east": [
					0,
					1
				],
				"wiki:west": [
					0,
					1
				]
			}
		},
		"components": {
			//basic glass components
			"tag:custom_vertical_connecting_glass":{},
			"tag:glass":{},
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
				"range": [
					0,
					0
				]
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
						"up":  {
							"render_method": "blend",
							"texture": "custom_vertical_connecting_glass_up"
						},
						"down":  {
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
						"up":  {
							"render_method": "blend",
							"texture": "custom_vertical_connecting_glass_up"
						},
						"down":  {
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
						"up":  {
							"render_method": "blend",
							"texture": "nothing"
						},
						"down":  {
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
						"up":  {
							"render_method": "blend",
							"texture": "nothing"
						},
						"down":  {
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
						"up":  {
							"render_method": "blend",
							"texture": "custom_vertical_connecting_glass_up"
						},
						"down":  {
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
						"up":  {
							"render_method": "blend",
							"texture": "custom_vertical_connecting_glass_up"
						},
						"down":  {
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
						"up":  {
							"render_method": "blend",
							"texture": "custom_vertical_connecting_glass_up"
						},
						"down":  {
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
						"up":  {
							"render_method": "blend",
							"texture": "custom_vertical_connecting_glass_up"
						},
						"down":  {
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
						"up":  {
							"render_method": "blend",
							"texture": "custom_vertical_connecting_glass_up"
						},
						"down":  {
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
						"up":  {
							"render_method": "blend",
							"texture": "custom_vertical_connecting_glass_up"
						},
						"down":  {
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
						"up":  {
							"render_method": "blend",
							"texture": "custom_vertical_connecting_glass_up"
						},
						"down":  {
							"render_method": "blend",
							"texture": "nothing"
						}
					}
				}
			},
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
						"up":  {
							"render_method": "blend",
							"texture": "custom_vertical_connecting_glass_up"
						},
						"down":  {
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
						"down":  {
							"render_method": "blend",
							"texture": "custom_vertical_connecting_glass_up"
						},
						"up":  {
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
						"down":  {
							"render_method": "blend",
							"texture": "custom_vertical_connecting_glass_up"
						},
						"up":  {
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
						"down":  {
							"render_method": "blend",
							"texture": "custom_vertical_connecting_glass_up"
						},
						"up":  {
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
						"down":  {
							"render_method": "blend",
							"texture": "custom_vertical_connecting_glass_up"
						},
						"up":  {
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
						"down":  {
							"render_method": "blend",
							"texture": "nothing"
						},
						"up":  {
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
						"down":  {
							"render_method": "blend",
							"texture": "nothing"
						},
						"up":  {
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
						"down":  {
							"render_method": "blend",
							"texture": "nothing"
						},
						"up":  {
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
						"down":  {
							"render_method": "blend",
							"texture": "nothing"
						},
						"up":  {
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
## Results
![Glass Results](https://i.imgur.com/ehKCWVm.png)
More Coming Soon!
