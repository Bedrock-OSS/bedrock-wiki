---
title: 'Stable Block Components'
category: General
---

Documentation of all stable block components

## Block Properties

Block properties are block states for all your custom blocks.

### Defining Properties:

<CodeHeader></CodeHeader>

```json
{
	"format_version": "1.19.80",
	"minecraft:block": {
		"description": {
			"identifier": "wiki:custom_block",
			"properties": {
				"wiki:string_property_example": [
					"red",
					"green",
					"blue",
					"purple"
				],
				"wiki:boolean_property_example": [
                    true, false
                ],
				"wiki:integer_property_example": [
                    1, 2, 3, 4, 5
                ]
			}
		}
	}
}
```

### Using Properties:

Properties can be tested for with the Molang query, `q.block_property`:

`q.block_property('wiki:string_property_example') == 'blue'`

## Block Permutations

Block permutations are a way of conditionally applying components to a block with Molang expressions.

<CodeHeader></CodeHeader>

```json
{
    "format_version": "1.19.80",
    "minecraft:block": {
        "description": {
            "identifier": "wiki:custom_block",
            "properties": {
                "wiki:custom_integer_property": [ 10, 20, 30, 40 ],
                "wiki:custom_boolean_property": [ false, true ],
                "wiki:custom_string_property": [ "red", "green", "blue" ]
            }
        },
        "components": {...},
        "permutations": [
            {
                "condition": "q.block_property('wiki:custom_integer_property') == 20",
                "components": {
                    "minecraft:friction": 0.1
                }
            },
            {
                "condition": "q.block_property('wiki:custom_boolean_property')",
                "components": {
                    "minecraft:destructible_by_mining": {
				        "seconds_to_destroy": 0.5
			        }
                }
            },
            {
                "condition": "q.block_property('wiki:custom_string_property') == 'red'",
                "components": {
                    "minecraft:geometry": "geometry.pig"
                }
            }
        ]
    }
}
```

## Block Components

List of experimental block components, with usage examples.

### minecraft:geometry

The Model the block will use. This component applies no face culling.

<CodeHeader></CodeHeader>

```json
{
	"minecraft:geometry": "geometry.wiki" // Geometry identifier from geo file in 'RP/models/entity' or 'RP/models/blocks' folder
}
```

Additionally, `bone_visibility` can be used to show/hide certain bones

<CodeHeader></CodeHeader>

```json
{
	"minecraft:geometry":{
		"identifier": "geometry.wiki",
		"bone_visibility": {
        	"bone1": true,
        	"bone2": false,
        }
	}
}
```

### minecraft:material_instances

It's mainly used to set a texture to you block.

<CodeHeader></CodeHeader>

```json
{
	"minecraft:material_instances": {
		// Can also be a specific material instance for a specific face mapped in the geometry
		// Wildcards follow render controller syntax
		// Options 'up', 'down', and 'sides' are builtin
		"*": {
			"texture": "texture_name", // References texture defined in terrain_textures.json
			"render_method": "blend", // Options 'blend', 'opaque', 'alpha_test',
			"face_dimming": true, // Defaults to true; refers to whether or not block is affected by lighting (Undocumented)
			"ambient_occlusion": true // Defaults to true; refers to whether or not faces have smooth lighting (Undocumented)
		}
	}
}
```

Or...

<CodeHeader></CodeHeader>

```json
{
	"minecraft:material_instances": {
		"bone_1": {
			"texture": "texture_name", // References texture defined in terrain_textures.json
			"render_method": "blend", // Options 'blend', 'opaque', 'alpha_test',
			"face_dimming": true, // Defaults to true; refers to whether or not block is affected by lighting (Undocumented)
			"ambient_occlusion": true // Defaults to true; refers to whether or not faces have smooth lighting (Undocumented)
		}
	}
}
```

:::tip
You need do add the material instance onto any face/bone of a cube within BlockBench.
:::

### minecraft:collision_box

The entity collision box.

<CodeHeader></CodeHeader>

```json
{
	"minecraft:collision_box":{
		"origin": [-8, 0, -8],
		"size": [16, 16, 16]
	}
}
```

Or..

<CodeHeader></CodeHeader>

```json
{
	"minecraft:collision_box": false
}
```

### minecraft:crafting_table

Turns your block into a new/custom Crafting Table.

<CodeHeader></CodeHeader>

```json
{
	"minecraft:crafting_table": {
		"custom_description": "Example Crafting Table", // Name shown in GUI
		"grid_size": 3, // Currently only supports 3
		"crafting_tags": ["crafting_table", "custom_crafting_tag"] //Tags to be used within the recipe file
	}
}
```

### minecraft:selection_box

The hitbox of the block when hovering on the block.

<CodeHeader></CodeHeader>

```json
{
	"minecraft:selection_box": {
		"origin": [ -8, 0, -8 ],
		"size": [ 16, 16, 16 ]
	}
}
```

Or..

<CodeHeader></CodeHeader>

```json
{
	"minecraft:selection_box": false
}
```

### minecraft:display_name

<CodeHeader></CodeHeader>

```json
{
	"minecraft:display_name": "Name"
}
```

### minecraft:placement_filter

Allows to make the block only be placed on specified blocks.

<CodeHeader></CodeHeader>

```json
{
	"minecraft:placement_filter": {
		"conditions": [
			{
				"block_filter": [ "minecraft:dirt" ],
				"allowed_faces": [ "up" ] //Can be up, down or side.
			}
		]
	}
}
```

_This also accepts tags, such as:_

<CodeHeader></CodeHeader>

```json
{
	"minecraft:placement_filter": {
		"conditions": [
			{
				"allowed_faces": [ "up" ],
				"block_filter": [
					{
						"tags": "!q.any_tag('stone')"
					}
				]
			}
		]
	}
}
```

See [this](/blocks/block-tags) page for a list of vanilla tags and relevant blocks.

## Additional Notes

-   Vanilla blocks are hard-coded. You may not override or access them.
-   A maximum of `16` values per block property may be used.
-   The following components may not exceed the default (16x) block size limitations:
    -   `minecraft:collision_box`
    -   `minecraft:selection_box`
-   Block faces will unconditionally darken if intersecting another block.
-   Blocks will always be dropped when mined with the `Silk Touch` enchantment.
-   Different parameters for `render_method` in `minecraft:material_instances` will - similar to entity runtime identifiers - affect certain properties of the block:
    -   Inputting `opaque` will allow Redstone to pass through, Grass to decay, and on it, Mobs' spawning
    -   Inputting `alpha_test` will **not** allow Redstone to pass through, Grass to decay, or Mobs to spawn on it
        -   `blend` has the same properties as `alpha_test`
    -   Creating a transparent block exhibiting `opaque` properties:

Use `alpha_test`

```json
{
	"minecraft:material_instances": {
		"*": {
        	"render_method": "alpha_test"
    	}
	}
}
```

..Then simply link the textures via `blocks.json`
