---
layout: page
title: Block Texture Variation
parent: Tutorials
---

# Block Texture Variation



intermediate  
{: .label .label-yellow }

Block texture variation is when a single block can have multiple textures.  This is useful for blocks such as dirt or grass where some blocks may have slight variations such as small rocks and others don't.

To enable texture variations you create a terrain_texture.json file in the textures folder. The terrain_texture.json in the block definition the texture should be set to a dictionary with a variation key, the varation key is an array of dictionaries that must contain a path key pointing to the texture file and may contain a weight to control how often the textures show up.

## Example Dirt Texture Variation

This is an example on how to create texture variations for the dirt block with three images:
- Create a `textures/terrain_texture.json` file in the resource pack
- in the json file you need to define the blocks that have variation as shown below
```json
{
   "num_mip_levels" : 0,
   "padding" : 0,
   "resource_pack_name" : "vanilla",
   "texture_data" : {
      "dirt" : {
         "textures" : {
			"variations" : [
				{"path" : "textures/blocks/dirt0"},
				{"path" : "textures/blocks/dirt1"},
				{"path" : "textures/blocks/dirt2"}
			]
		 }
      }
	},
	"texture_name" : "atlas.terrain"
}
```

- Create or modify three dirt textures, name them `dirt0.png`, `dirt1.png`, and `dirt2.png`
- Copy the `dirt0.png`, `dirt1.png`, and `dirt2.png` to the location noted in path varible. this could contain additional folders if you want to be orderly

## Example of weighted dirt amounts

After you have comleted the example above if you want to adjust the weights, simply edit the terrain_textures.json to include a weight field as shown below.
```json
{
   "num_mip_levels" : 0,
   "padding" : 0,
   "resource_pack_name" : "vanilla",
   "texture_data" : {
      "dirt" : {
         "textures" : {
			"variations" : [
				{"path" : "textures/blocks/dirt0","weight":70},
				{"path" : "textures/blocks/dirt1","weight":20},
				{"path" : "textures/blocks/dirt2","weight":10}
			]
		 }
      }
	},
	"texture_name" : "atlas.terrain"
}
```

Some notes:
- This does appear to grab texture set file, however the texture set files do not seem to grab the MER or normal file defined in the texture set.
  -- https://bugs.mojang.com/browse/MCPE-110361
