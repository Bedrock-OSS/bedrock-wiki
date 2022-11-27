---
title: Subpacks
---

## What are Subpacks?

Subpacks allow you to select between different addon 'configurations'.

They are intended for texture resolutions to load on different memory capacities, but can also be used to create file variations in behavior and resource packs. These variations can be selected by clicking the gear icon and adjusting the slider.

## How do Subpacks work?

Files placed in you subpack folder will override files placed in your main addon folder, if the subpack is selected. For example, if your addon contains both `RP/textures/entities/ghost.png` and `RP/subpacks/pack_1/textures/ghost.png`, the second image file will replace the first, if subpack `pack_1` is selected.

For more information about how files override each other, please see our page on [overriding vanilla assets](/concepts/overwriting-assets).

## Creating Subpacks

-   To start adding a subpack you need to create a `subpacks` folder inside the root of your `BP`/`RP`.
-   Then inside the `subpacks` folder add a folder for each subpack you want to have
    e.g.

<FolderView :paths="[
	'RP/subpacks/subpack_1',
	'RP/subpacks/subpack_2'
]"></FolderView>

-   Inside each of these folders you can add the content of each subpack.
    This can be anything that normally goes in your behavior or resource pack.
    e.g.

<FolderView :paths="[
	'RP/subpacks/subpack_1/textures/blocks/dirt.png',
	'RP/subpacks/subpack_1/textures/items/example_item.png',
	'RP/subpacks/subpack_2/textures/blocks/dirt.png',
	'RP/subpacks/subpack_2/textures/items/example_item.png'
]"></FolderView>

## Manifest Part

To register the subpacks in the manifest you need to add `subpacks` and this contains an array of subpacks.

Example:

<CodeHeader>RP/manifest.json</CodeHeader>

```json
{
	"format_version": 2,
	"header": {
		"name": "Pack Name",
		"description": "Pack Description",
		"uuid": "2fc2dd6f-86cb-4370-af70-21490a1ae471",
		"version": [1, 0, 0],
		"min_engine_version": [1, 13, 0]
	},
	"modules": [
		{
			"type": "resources",
			"uuid": "f6821b4a-1854-44fc-a8a4-0c2847ffda46",
			"version": [1, 0, 0]
		}
	],
	"subpacks": [
		{
			"folder_name": "subpack_1",
			"name": "First Subpack",
			"memory_tier": 0
		},
		{
			"folder_name": "subpack_2",
			"name": "Second Subpack",
			"memory_tier": 1
		}
	]
}
```

-   `name` - name that will show when selecting subpacks.

-   `memory_tier`- amount of RAM that device must have to enable this subpack. 1 memory tier = 0.25 GB.

-   `folder_name` - name of the folder to be used for this subpack, for example in the examples above this would be `subpack_1` or `subpack_2`.

## Known Things

If you add only one subpack, there will be 2 options at the subpacks selection section, however second resolution (no subpack actually) does **not** make content in the root folder override subpacks.
