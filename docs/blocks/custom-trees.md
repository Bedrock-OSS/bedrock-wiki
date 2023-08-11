---
title: Custom Trees
category: Vanilla Re-Creations
tags:
    - experimental
mentions:
    - MedicalJewel105
    - TheItsNameless
    - QuazChick
---

::: tip FORMAT & MIN ENGINE VERSION `1.20.20`
This tutorial assumes an advanced understanding of blocks.
Check out the [blocks guide](/blocks/blocks-intro) before starting.
:::

::: warning EXPERIMENTAL
Requires `Holiday Creator Features` to trigger block events and for use of block tag Molang queries.
:::

Creating your own tree with decaying leaves is complex, but possible! Follow this tutorial and you'll have your own in no time.

-   Features:

    -   Decaying leaves
    -   Tree Feature compatable
    -   If leaves were broken using shears, they will drop the block
    -   Leaves don't decay if placed by player
    -   Logs are strippable and rotatable
    -   Stripping logs is compatible with tools from other add-ons (if they have the `minecraft:is_axe` tag)
    -   Saplings can be bonemealed and grow the tree (with structures)

-   Issues:
    -   If you make a structure with these blocks, it will crash the game when generated using features.

## Decaying Leaves

You will notice straight away that our custom leaves have a long list to search for a vanilla log/custom log by its block tag, although the code example uses the custom logs for this tutorial. The value is 4 and this method is used to search for the nearest log in a circular radius.

<WikiImage
  src="/assets/images/blocks/custom-trees/decaying_leaves_showcase_example.png"
  alt="Decaying Leaves Showcase"
  pixelated="false"
  width=420
/>

Our custom leaves disables ticking when placed by the player which doesn't make the leaves decay and this removes the requirements for another duplicate leave block.

<Spoiler title="Code">

<CodeHeader>BP/blocks/custom_leaves.json</CodeHeader>

```json
{
  "format_version": "1.20.10",
  "minecraft:block": {
    "description": {
      "identifier": "wiki:custom_leaves",
      "states": {
        "wiki:decay_tier": [4, 3, 2, 1, 0], // Distance in blocks to find the log
        "wiki:should_decay": [true, false], // Used when placed by the player or with features
        "wiki:opaque": [false, true] // Optional; makes the leaves opaque when surrounded
      }
    },
    "components": {
      "tag:custom_leaves": {},
      "minecraft:loot": "loot_tables/empty.json",
      "minecraft:unit_cube": {},
      "minecraft:on_player_placing": {
        "event": "wiki:stop_decay"
      },
      // Triggers event that spawns different loot
      "minecraft:on_player_destroyed": {
        "event": "wiki:on_destroyed"
      },
      // We need both of these to work with world generation
      "minecraft:queued_ticking": {
        "looping": true,
        "interval_range": [0, 0],
        "on_tick": {
          "event": "wiki:check"
        }
      },
      "minecraft:random_ticking": {
        "on_tick": {
          "event": "wiki:check"
        }
      },
      "minecraft:destructible_by_explosion": {
        "explosion_resistance": 1
      },
      "minecraft:destructible_by_mining": {
        "seconds_to_destroy": 0.3
      },
      "minecraft:map_color": "#DDDDDD",
      "minecraft:light_dampening": 0,
      "minecraft:material_instances": {
        "*": {
          "texture": "custom_leaves",
          "render_method": "blend"
        }
      }
    },
    "events": {
      // Defines the loot for the tool
      "wiki:on_destroyed": {
        "sequence": [
          {
            "condition": "q.is_item_name_any('slot.weapon.mainhand','minecraft:shears')",
            "spawn_loot": {
              "table": "loot_tables/blocks/custom_leaves_shears.json"
            }
          },
          {
            "condition": "!q.is_item_name_any('slot.weapon.mainhand','minecraft:shears')",
            "spawn_loot": {
              "table": "loot_tables/blocks/custom_leaves.json"
            }
          }
        ]
      },
      // Checks for the log
      "wiki:check": {
        "sequence": [
          {
            "condition": "q.block_state('wiki:should_decay')",
            "set_block_state": {
              "wiki:decay_tier": "(q.block_neighbor_has_any_tag(0,0,-1,'log') || q.block_neighbor_has_any_tag(0,0,1,'log') || q.block_neighbor_has_any_tag(-1,0,0,'log') || q.block_neighbor_has_any_tag(1,0,0,'log') || q.block_neighbor_has_any_tag(0,-1,0,'log') || q.block_neighbor_has_any_tag(0,1,0,'log')) ? 4 : ((q.block_neighbor_has_any_tag(0,0,-1,'decay_tier_4') || q.block_neighbor_has_any_tag(0,0,1,'decay_tier_4') || q.block_neighbor_has_any_tag(-1,0,0,'decay_tier_4') || q.block_neighbor_has_any_tag(1,0,0,'decay_tier_4') || q.block_neighbor_has_any_tag(0,-1,0,'decay_tier_4') || q.block_neighbor_has_any_tag(0,1,0,'decay_tier_4')) ? 3 : ( (q.block_neighbor_has_any_tag(0,0,-1,'decay_tier_3') || q.block_neighbor_has_any_tag(0,0,1,'decay_tier_3 ') || q.block_neighbor_has_any_tag(-1,0,0,'decay_tier_3') || q.block_neighbor_has_any_tag(1,0,0,'decay_tier_3') || q.block_neighbor_has_any_tag(0,-1,0,'decay_tier_3') || q.block_neighbor_has_any_tag(0,1,0,'decay_tier_3')) ? 2 : ( (q.block_neighbor_has_any_tag(0,0,-1,'decay_tier_2') || q.block_neighbor_has_any_tag(0,0,1,'decay_tier_2') || q.block_neighbor_has_any_tag(-1,0,0,'decay_tier_2') || q.block_neighbor_has_any_tag(1,0,0,'decay_tier_2') || q.block_neighbor_has_any_tag(0,-1,0,'decay_tier_2') || q.block_neighbor_has_any_tag(0,1,0,'decay_tier_2')) ? 1 : 0 ) ) )"
            }
          },
          {
            "set_block_state": {
              "wiki:opaque": "q.block_neighbor_has_any_tag(0,0,-1,'log','stone','custom_leaves') && q.block_neighbor_has_any_tag(0,0,1,'log','stone','custom_leaves') && q.block_neighbor_has_any_tag(0,1,0,'log','stone','custom_leaves') && q.block_neighbor_has_any_tag(0,-1,0,'log','stone','custom_leaves') && q.block_neighbor_has_any_tag(-1,0,0,'log','stone','custom_leaves') && q.block_neighbor_has_any_tag(1,0,0,'log','stone','custom_leaves')"
            }
          }
        ]
      },
      // When placed
      "wiki:stop_decay": {
        "set_block_state": {
          "wiki:should_decay": false
        }
      },
      // When decayed
      "wiki:decay": {
        "die": {},
        "spawn_loot": {
          "table": "loot_tables/blocks/custom_leaves.json"
        }
      }
    },
    "permutations": [
      {
        "condition": "q.block_state('wiki:decay_tier') == 0",
        "components": {
          "minecraft:random_ticking": {
            "on_tick": {
              "event": "wiki:decay"
            }
          },
          "tag:decay_tier_0": {}
        }
      },
      {
        "condition": "q.block_state('wiki:decay_tier') == 1",
        "components": {
          "tag:decay_tier_1": {}
        }
      },
      {
        "condition": "q.block_state('wiki:decay_tier') == 2",
        "components": {
          "tag:decay_tier_2": {}
        }
      },
      {
        "condition": "q.block_state('wiki:decay_tier') == 3",
        "components": {
          "tag:decay_tier_3": {}
        }
      },
      {
        "condition": "q.block_state('wiki:decay_tier') == 4",
        "components": {
          "tag:decay_tier_4": {}
        }
      },
      {
        "condition": "q.block_state('wiki:opaque')",
        "components": {
          "minecraft:material_instances": {
            "*": {
              "texture": "custom_leaves",
              "render_method": "opaque"
            }
          }
        }
      }
    ]
  }
}
```

</Spoiler>

## Custom Log

<Spoiler title="Code">

<CodeHeader>BP/blocks/custom_log.json</CodeHeader>

```json
{
  "format_version": "1.20.20",
  "minecraft:block": {
    "description": {
      "identifier": "wiki:custom_log",
      "menu_category": {
        "category": "nature",
        "group": "itemGroup.name.log"
      },
      "states": {
        // Log direction state
        "wiki:axis": [0, 1, 2]
      }
    },
    "components": {
      "tag:log": {},
      "minecraft:unit_cube": {},
      // Sets different textures for sides and top/bottom of log
      "minecraft:material_instances": {
        "*": {
          "texture": "custom_log"
        },
        "ends": {
          "texture": "custom_log_top"
        },
        "up": "ends",
        "down": "ends"
      },
      "minecraft:destructible_by_mining": {
        "seconds_to_destroy": 1
      },
      // Sets log rotation on player placing
      "minecraft:on_player_placing": {
        "event": "wiki:set_axis"
      },
      // Make log strippable
      "minecraft:on_interact": {
        "condition": "q.equipped_item_any_tag('slot.weapon.mainhand', 'minecraft:is_axe')",
        "event": "wiki:strip"
      }
    },
    "events": {
      "wiki:set_axis": {
        "set_block_state": {
          "wiki:axis": "Math.floor(q.block_face / 2)"
        }
      },
      "wiki:strip": {
        "sequence": [
          {
            "run_command": {
              "command": "playsound hit.wood @a ~~~"
            },
            // Damages axe of player who stripped the log
            "damage": {
              "type": "durability",
              "amount": 1,
              "target": "item"
            }
          },
          {
            "condition": "q.block_state('wiki:axis') == 0",
            "run_command": {
              "command": "setblock ~~~ wiki:custom_stripped_log [\"wiki:axis\"=0]"
            }
          },
          {
            "condition": "q.block_state('wiki:axis') == 1",
            "run_command": {
              "command": "setblock ~~~ wiki:custom_stripped_log [\"wiki:axis\"=1]"
            }
          },
          {
            "condition": "q.block_state('wiki:axis') == 2",
            "run_command": {
              "command": "setblock ~~~ wiki:custom_stripped_log [\"wiki:axis\"=2]"
            }
          }
        ]
      }
    },
    "permutations": [
      {
        "condition": "q.block_state('wiki:axis') == 0",
        "components": {
          "minecraft:transformation": { "rotation": [0, 0, 0] }
        }
      },
      {
        "condition": "q.block_state('wiki:axis') == 1",
        "components": {
          "minecraft:transformation": { "rotation": [90, 0, 0] }
        }
      },
      {
        "condition": "q.block_state('wiki:axis') == 2",
        "components": {
          "minecraft:transformation": { "rotation": [0, 0, 90] }
        }
      }
    ]
  }
}
```

</Spoiler>

## Stripped Log

Here all components are the same

<Spoiler title="Code">

<CodeHeader>BP/blocks/custom_stripped_log.json</CodeHeader>

```json
{
  "format_version": "1.20.20",
  "minecraft:block": {
    "description": {
      "identifier": "wiki:custom_stripped_log",
      "menu_category": {
        "category": "nature",
        "group": "itemGroup.name.log"
      },
      "states": {
        // Log direction state
        "wiki:axis": [0, 1, 2]
      }
    },
    "components": {
      "tag:log": {},
      "minecraft:unit_cube": {},
      // Sets different textures for sides and top/bottom of log
      "minecraft:material_instances": {
        "*": {
          "texture": "custom_stripped_log"
        },
        "ends": {
          "texture": "custom_stripped_log_top"
        },
        "up": "ends",
        "down": "ends"
      },
      "minecraft:destructible_by_mining": {
        "seconds_to_destroy": 1
      },
      // Sets log rotation on player placing
      "minecraft:on_player_placing": {
        "event": "wiki:set_axis"
      }
    },
    "events": {
      "wiki:set_axis": {
        "set_block_state": {
          "wiki:axis": "Math.floor(q.block_face / 2)"
        }
      }
    },
    "permutations": [
      {
        "condition": "q.block_state('wiki:axis') == 0",
        "components": {
          "minecraft:transformation": { "rotation": [0, 0, 0] }
        }
      },
      {
        "condition": "q.block_state('wiki:axis') == 1",
        "components": {
          "minecraft:transformation": { "rotation": [90, 0, 0] }
        }
      },
      {
        "condition": "q.block_state('wiki:axis') == 2",
        "components": {
          "minecraft:transformation": { "rotation": [0, 0, 90] }
        }
      }
    ]
  }
}
```

</Spoiler>

## Custom Sapling

For the sapling we will need structures of our tree to make the sapling semi-realistic as features cannot currently be placed with commands on Minecraft Bedrock.

<Spoiler title="Code">

<CodeHeader>BP/blocks/custom_sapling.json</CodeHeader>

```json
{
  "format_version": "1.20.20",
  "minecraft:block": {
    "description": {
      "identifier": "wiki:custom_sapling",
      "states": {
        // Sapling's growth stage
        "wiki:growth_stage": [0, 1, 2]
      }
    },
    "components": {
      "minecraft:collision_box": false,
      "minecraft:selection_box": {
        "origin": [-6, 0, -6],
        "size": [12, 13, 12]
      },
      "minecraft:light_dampening": 0,
      "minecraft:geometry": "geometry.custom_sapling",
      "minecraft:material_instances": {
        "*": {
          "texture": "custom_sapling",
          "render_method": "alpha_test",
          "face_dimming": false,
          "ambient_occlusion": false
        }
      },
      // Add loot component so it will drop sapling placer item
      "minecraft:loot": "loot_tables/blocks/custom_sapling.json",
      // Allows to place block only on these blocks
      "minecraft:placement_filter": {
        "conditions": [
          {
            "allowed_faces": ["up"],
            "block_filter": ["minecraft:dirt", "minecraft:grass", "minecraft:podzol"]
          }
        ]
      },
      // Trigger growth on each random tick
      "minecraft:random_ticking": {
        "on_tick": {
          "event": "wiki:grow"
        }
      },
      // Trigger growth when bone meal is used
      "minecraft:on_interact": {
        "condition": "q.is_item_name_any('slot.weapon.mainhand', 'minecraft:bone_meal')",
        "event": "wiki:fertilize"
      }
    },
    "events": {
      "wiki:grow": {
        "sequence": [
          {
            "condition": "q.block_state('wiki:growth_stage') < 2",
            "set_block_state": {
              "wiki:growth_stage": "q.block_state('wiki:growth_stage') + 1"
            }
          },
          {
            "condition": "q.block_state('wiki:growth_stage') == 2",
            "run_command": {
              "command": "structure load custom_tree ~-2~~-2"
            }
          }
        ]
      },
      "wiki:fertilize": {
        // Removes item that was used to interact
        "decrement_stack": {},
        // Trigger growth
        "trigger": {
          "event": "wiki:grow"
        },
        // Trigger effects
        "run_command": {
          "command": ["particle minecraft:crop_growth_emitter ~~~", "playsound item.bone_meal.use @a ~~~"]
        }
      }
    }
  }
}
```

</Spoiler>

## Sapling Placer

<Spoiler title="Code">

<CodeHeader>BP/items/custom_sapling_placer.json</CodeHeader>

```json
{
  "format_version": "1.20.20",
  "minecraft:item": {
    "description": {
      "identifier": "wiki:custom_sapling_placer",
      "menu_category": {
        "category": "nature",
        "group": "itemGroup.name.sapling"
      }
    },
    "components": {
      "minecraft:max_stack_size": 64,
      "minecraft:block_placer": {
        "block": "wiki:custom_sapling"
      },
      "minecraft:icon": {
        "texture": "custom_sapling_placer"
      }
    }
  }
}
```

</Spoiler>

## Loot Tables

<Spoiler title="Code">

This loot will spawn leaves block (when you break it using shears)

<CodeHeader>BP/loot_tables/blocks/custom_leaves_shears.json</CodeHeader>

```json
{
  "pools": [
    {
      "rolls": 1,
      "entries": [
        {
          "type": "item",
          "name": "wiki:custom_leaves"
        }
      ]
    }
  ]
}
```

Leaves default loot

<CodeHeader>BP/loot_tables/blocks/custom_leaves.json</CodeHeader>

```json
{
  "pools": [
    {
      "rolls": 1,
      "entries": [
        {
          "type": "item",
          "name": "minecraft:apple",
          "weight": 1
        },
        {
          "type": "item",
          "name": "wiki:custom_sapling_placer",
          "weight": 5
        },
        {
          // Nothing will drop
          "type": "empty",
          "weight": 10
        }
      ]
    }
  ]
}
```

This will spawn `wiki:custom_sapling`

<CodeHeader>BP/loot_tables/blocks/custom_sapling.json</CodeHeader>

```json
{
  "pools": [
    {
      "rolls": 1,
      "entries": [
        {
          "type": "item",
          "name": "wiki:custom_sapling_placer"
        }
      ]
    }
  ]
}
```

</Spoiler>

## Exporting Structures

Build a tree for your sapling to grow into!

![](/assets/images/blocks/custom-trees/export_tree.png)

## Tree Features

:::tip
Tree Features are a really great way to get actual custom trees. You need some understanding on how they work but for this tutorial you can uses these templates.
:::

<Spoiler title="Feature">

<CodeHeader>BP/feature/custom_tree_feature.json</CodeHeader>

```json
{
  "format_version": "1.13.0",
  "minecraft:tree_feature": {
    "description": {
      "identifier": "wiki:custom_tree_feature"
    },
    "trunk": {
      "trunk_block": "wiki:custom_log",
      "trunk_height": {
        "range_min": 4,
        "range_max": 7
      }
    },
    "canopy": {
      "leaf_block": "wiki:custom_leaves",
      "canopy_offset": {
        "min": -3,
        "max": 0
      },
      "variation_chance": [
        {
          "numerator": 1,
          "denominator": 2
        },
        {
          "numerator": 1,
          "denominator": 2
        },
        {
          "numerator": 1,
          "denominator": 2
        },
        {
          "numerator": 1,
          "denominator": 1
        }
      ]
    },
    "base_block": [
      "minecraft:dirt",
      {
        "name": "minecraft:dirt",
        "states": {
          "dirt_type": "coarse"
        }
      }
    ],
    "may_grow_on": [
      "minecraft:dirt",
      "minecraft:grass",
      "minecraft:podzol",
      {
        "name": "minecraft:dirt",
        "states": {
          "dirt_type": "coarse"
        }
      },
      {
        "name": "minecraft:farmland",
        "states": {
          "moisturized_amount": 0
        }
      },
      {
        "name": "minecraft:farmland",
        "states": {
          "moisturized_amount": 1
        }
      },
      {
        "name": "minecraft:farmland",
        "states": {
          "moisturized_amount": 2
        }
      },
      {
        "name": "minecraft:farmland",
        "states": {
          "moisturized_amount": 3
        }
      },
      {
        "name": "minecraft:farmland",
        "states": {
          "moisturized_amount": 4
        }
      },
      {
        "name": "minecraft:farmland",
        "states": {
          "moisturized_amount": 5
        }
      },
      {
        "name": "minecraft:farmland",
        "states": {
          "moisturized_amount": 6
        }
      },
      {
        "name": "minecraft:farmland",
        "states": {
          "moisturized_amount": 7
        }
      }
    ],
    "may_replace": [
      "minecraft:air",
      {
        "name": "minecraft:leaves",
        "states": {
          "old_leaf_type": "oak"
        }
      },
      {
        "name": "minecraft:leaves",
        "states": {
          "old_leaf_type": "spruce"
        }
      },
      {
        "name": "minecraft:leaves",
        "states": {
          "old_leaf_type": "birch"
        }
      },
      {
        "name": "minecraft:leaves",
        "states": {
          "old_leaf_type": "jungle"
        }
      },
      {
        "name": "minecraft:leaves2",
        "states": {
          "new_leaf_type": "acacia"
        }
      },
      {
        "name": "minecraft:leaves2",
        "states": {
          "new_leaf_type": "dark_oak"
        }
      }
    ],
    "may_grow_through": [
      "minecraft:dirt",
      "minecraft:grass",
      {
        "name": "minecraft:dirt",
        "states": {
          "dirt_type": "coarse"
        }
      }
    ]
  }
}
```

</Spoiler>

<Spoiler title="Feature Rule">

<CodeHeader>BP/feature_rules/custom_tree_feature_rule.json</CodeHeader>

```json
{
  "format_version": "1.13.0",
  "minecraft:feature_rules": {
    "description": {
      "identifier": "wiki:custom_tree_feature_rule",
      "places_feature": "wiki:custom_tree_feature"
    },
    "conditions": {
      "placement_pass": "surface_pass",
      "minecraft:biome_filter": [
        {
          "test": "has_biome_tag",
          "operator": "==",
          "value": "plains"
        }
      ]
    },
    "distribution": {
      "iterations": 1,
      "x": {
        "distribution": "uniform",
        "extent": [0, 16]
      },
      "y": "q.heightmap(variable.worldx, variable.worldz)",
      "z": {
        "distribution": "uniform",
        "extent": [0, 16]
      }
    }
  }
}
```

</Spoiler>

## Resource Pack (optional guide)

Now it is time to make a resource pack!

Make translations for blocks:

<CodeHeader>RP/texts/en_US.lang</CodeHeader>

```
tile.wiki:custom_log.name=Custom Log
tile.wiki:custom_leaves.name=Custom Leaves
tile.wiki:custom_stripped_log.name=Custom Stripped Log
tile.wiki:custom_sapling.name=Custom Sapling
item.wiki:custom_sapling_placer=Custom Sapling
```

Make terrain_texture.json and textures.

<CodeHeader>RP/textures/terrain_texture.json</CodeHeader>

```json
{
  "resource_pack_name": "custom-trees",
  "texture_name": "atlas.terrain",
  "num_mip_levels": 4,
  "padding": 8,
  "texture_data": {
    "custom_leaves": {
      "textures": "textures/blocks/leaves_oak"
    },
    "custom_log": {
      "textures": "textures/blocks/log_oak"
    },
    "custom_log_top": {
      "textures": "textures/blocks/log_oak_top"
    },
    "custom_stripped_log": {
      "textures": "textures/blocks/stripped_oak_log"
    },
    "custom_stripped_log_top": {
      "textures": "textures/blocks/stripped_oak_log_top"
    },
    "custom_sapling": {
      "textures": "textures/blocks/sapling_oak"
    }
  }
}
```

Make geometry for sapling:

<CodeHeader>RP/models/blocks/custom_sapling.geo.json</CodeHeader>

```json
{
	"format_version": "1.12.0",
	"minecraft:geometry": [
		{
			"description": {
				"identifier": "geometry.custom_sapling",
				"texture_width": 16,
				"texture_height": 16,
				"visible_bounds_width": 2,
				"visible_bounds_height": 2.5,
				"visible_bounds_offset": [0, 0.75, 0]
			},
			"bones": [
				{
					"name": "sapling",
					"pivot": [0, 0, 0],
					"cubes": [
						{
							"origin": [-8, 0, 0],
							"size": [16, 16, 0],
							"pivot": [0, 0, 0],
							"rotation": [0, 45, 0],
							"uv": {
								"north": {"uv": [0, 0], "uv_size": [16, 16]}
							}
						},
						{
							"origin": [-8, 0, 0],
							"size": [16, 16, 0],
							"pivot": [0, 0, 0],
							"rotation": [0, -45, 0],
							"uv": {
								"north": {"uv": [0, 0], "uv_size": [16, 16]}
							}
						}
					]
				}
			]
		}
	]
}
```

Make item_texture file

<CodeHeader>RP/textures/item_texture.json</CodeHeader>

```json
{
  "resource_pack_name": "custom-trees",
  "texture_name": "atlas.items",
  "texture_data": {
    "custom_sapling_placer": {
      "textures": "textures/blocks/sapling_oak"
    }
  }
}
```

Add sounds to blocks

<CodeHeader>RP/blocks.json</CodeHeader>

```json
{
  "format_version": [1, 1, 0],
  "wiki:custom_leaves": {
    "sound": "grass"
  },
  "wiki:custom_log": {
    "sound": "wood"
  },
  "wiki:custom_stripped_log": {
    "sound": "wood"
  },
  "wiki:custom_sapling": {
    "sound": "grass"
  }
}
```

## Result

What you have created:

<Checklist>

-   [x] Custom Trees with Decaying Leaves
-   [x] Working Sapling
-   [x] Rotatable and Stripable Logs

</Checklist>

<FolderView :paths="[
'BP/blocks/custom_leaves.json',
'BP/blocks/custom_log.json',
'BP/blocks/custom_stripped_log.json',
'BP/blocks/custom_sapling.json',
'BP/features/custom_tree_feature.json',
'BP/feature_rules/custom_tree_feature_rule.json',
'BP/items/custom_sapling_placer.json',
'BP/loot_tables/blocks/custom_leaves.json',
'BP/loot_tables/blocks/custom_leaves_shears.json',
'BP/loot_tables/blocks/custom_sapling.json',
'BP/structures/custom_tree.mcstructure',
'RP/blocks.json',
'RP/texts/en_US.lang',
'RP/textures/terrain_texture.json',
'RP/models/blocks/custom_sapling.geo.json',
'RP/textures/item_texture.json'
]"></FolderView>

![](/assets/images/blocks/custom-trees/result.png)

## Download Example Pack

Template Pack to use in-game to get the idea.

<BButton
  link="https://github.com/Bedrock-OSS/wiki-addon/releases/download/download/custom_trees.mcaddon"
  color=blue
>Download MCADDON</BButton>