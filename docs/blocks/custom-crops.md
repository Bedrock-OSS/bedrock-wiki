---
title: Custom Crops
category: Tutorials
tags:
    - experimental
    - easy
mention:
    - Ivyman1992
    - Provedule
---

:::warning
**Requires** a basic knowledge of blocks such as permutations, properties, components, molang, and events.
:::

Designing customized crops may appear daunting at first, but it's a straightforward process once you understand the initial steps. Our tutorial/template will guide you through the process of creating a unique crop block as well as other blocks like farmland and dirt.

## The Basic Dirt Block

Okay, for starters, Below is the dirt block JSON. there isn’t really anything special to this dirt block except for two things the interaction component, and the events. You are welcome to create your own textures and adjust whatever you see fit in this template. That being said, let me walk you through what is happening here. 

For starters `minecraft:on_interact` is how we are going to ‘create’ our farmland, the same way that happens when you use a hoe on grass or dirt in Minecraft. The event `wiki:convert_to_farmland` will trigger if you are holding a wooden hoe, iron hoe, etc and you strike the block with it.

:::tip
You can even put custom tools, weapons, and items under the `condition` to create a more unique experience.
:::

<CodeHeader>BH/blocks/coarse_dirt_faded.json</CodeHeader>
<Spoiler title="Coarse Dirt Faded Block JSON">

``` json
{
  "format_version": "1.19.30",
  "minecraft:block": {
    "description": {
      "identifier": "wiki:coarse_dirt_faded",
      "menu_category": {
        "category": "nature",
        "is_hidden_in_commands": false
      }
    },
    "components": {
      "tag:dirt": {},
      "tag:farmland": {},
      "tag:fertilize_area": {},
      "tag:minecraft:crop": {},
      "minecraft:unit_cube": {}, // give normal cube geometry
      "minecraft:map_color": "#6C5746",
      "minecraft:destructible_by_mining": {
        "seconds_to_destroy": 2.0
      },
      "minecraft:on_interact": { // activate "wiki:convert_to_farmland" when interacted with
        "event": "wiki:convert_to_farmland",
        "condition": "q.get_equipped_item_name('main_hand') == 'wooden_hoe' || q.get_equipped_item_name('main_hand') == 'stone_hoe' || q.get_equipped_item_name('main_hand') == 'iron_hoe' || q.get_equipped_item_name('main_hand') == 'golden_hoe' || q.get_equipped_item_name('main_hand') == 'diamond_hoe' || q.get_equipped_item_name('main_hand') == 'netherite_hoe'"
      },
      "minecraft:material_instances": {
        "*": {
          "texture": "coarse_dirt_faded",
          "render_method": "alpha_test"
        }
      }
    },
    "events": {
      "wiki:convert_to_farmland": {
        "sequence": [
          {
            "play_sound": { // play a pop sound
              "sound": "pop"
            }
          },
          {
            "set_block_at_pos": { //replace this block with "wiki:faded_farmland"
              "block_type": "wiki:faded_farmland",
              "block_offset": [ 0, 0, 0 ]
            }
          }
        ]
      }
    }
  }
}
```

</Spoiler>

So how about our event? What is it doing? Well, when you strike the dirt block while holding one of our tools the block will first run a `set_block_at_pos` event. 

In case you are not familiar with `set_block_at_pos`, simply put, `set_block_at_pos` places a block of your choosing at a particular location. `[ 0, 0, 0 ]` actually stands for ~0 ~0 ~0 spaces away from the block. Think about it like this ~x ~y ~z, they are relative coordinates away from the block we are working with. So following along, ~ ~1 ~ would place a block of our choosing one block directly above our dirt. Make sense? After we list our coordinates, we choose the block that we want to replace our block with. In this case it is `wiki:faded_farmland`.

The next thing that our event does is play a sound and in this case, “scrape”. You can put any sound here that will play in game, `pop` is a fun one, the choice is up to you.

## Understanding Farmland

Farmland is a tricky block… it reacts to water ( changing it’s texture when water is nearby ), dries out and turns back into our dirt block randomly if water does not reach it in time ( I used a random tick speed of 1 in my world, too quick and the water may not have a chance to wet the soil ), and grows carrots when you try to plant them ( though you could add more ). Nevertheless, it’s just special dirt. Let me walk you through how it works. 

The first thing that you will want to do is make a basic block, just like our dirt. We also give it a tag that a crop can look for in queries. Mine is `faded_farmland`, after it’s name. Create a ‘farmland’ texture for the top of the block (both wet and dry) and then assign it a dirt texture to the sides. You will also need to make a custom block geometry that is 16x15x16 pixels in height, one row smaller then a normal block. After that we add our properties to our block like this above. Basically when our block is set to 0, the farmland will have the dry top texture. When it is equal to 1, the farmland texture will be the wet version. Below is the download for the farmland model.

<BButton
    link="/assets/packs/tutorials/custom_crops/farmland.geo.json"
	  download="Custom Farmland Geometry.json"
    color=blue
>Download Custom Farmland Geometry</BButton>

Properties:
``` json
"properties": {
    "wiki:wet_farmland": [ 0, 1 ]
}
```

Permutations:
``` json
"permutations": [
  {
    "condition": "q.block_property('wiki:wet_farmland') == 0",
    "components": {
      "minecraft:material_instances": {
        "*": {
          "texture": "coarse_dirt_faded",
          "render_method": "alpha_test"
        },
        "up": {
          "texture": "faded_farmland",
          "render_method": "alpha_test"
        }
       }
     }
   },
    {
      "condition": "q.block_property('wiki:wet_farmland') == 1",
      "components": {
        "minecraft:material_instances": {
          "*": {
           "texture": "coarse_dirt_faded",
           "render_method": "alpha_test"
         },
         "up": {
           "texture": "faded_farmland_wet",
            "render_method": "alpha_test"
         }
        }
       }
     }
   ]
```

Looking at our Permutations, we can see that there are two sets, each with a condition. The first is saying that our farmland block will have this texture if our property `wiki:wet_farmland` is equal to 0. Opposite condition is true if `wiki:wet_farmland` is equal to 1. It gets the wet texture.

Ticking Component:
``` json
"minecraft:random_ticking": {
    "on_tick": {
        "event": "wiki:detect_water",
        "target": "self"
    }
},
```

So our block has an important ticking event shown here. With our random ticking component, it will trigger it’s event every random tick ( can be set in-game ) and it will be looking for our water blocks. The random ticking event is what will update our farmland back to dry or wet depending on the blocks around it. Let’s focus on the first ticking event for the moment.

Events:
``` json
"events": {
  "wiki:detect_water": {
    "sequence": [
      { // Checks for water around the block and sets "wiki:wet_farmland" to 0 if it doesn't find any
        "condition": "!q.block_neighbor_has_any_tag(4,0,0,'water') && !q.block_neighbor_has_any_tag(3,0,0,'water') && !q.block_neighbor_has_any_tag(2,0,0,'water') &&!q.block_neighbor_has_any_tag(1,0,0,'water') && !q.block_neighbor_has_any_tag(-1,0,0,'water') && !q.block_neighbor_has_any_tag(-2,0,0,'water') && !q.block_neighbor_has_any_tag(-3,0,0,'water') && !q.block_neighbor_has_any_tag(-4,0,0,'water') && !q.block_neighbor_has_any_tag(4,0,-4,'water') && !q.block_neighbor_has_any_tag(3,0,-4,'water') && !q.block_neighbor_has_any_tag(2,0,-4,'water') && !q.block_neighbor_has_any_tag(1,0,-4,'water') && !q.block_neighbor_has_any_tag(0,0,-4,'water') && !q.block_neighbor_has_any_tag(-1,0,-4,'water') && !q.block_neighbor_has_any_tag(-2,0,-4,'water') && !q.block_neighbor_has_any_tag(-3,0,-4,'water') && !q.block_neighbor_has_any_tag(-4,0,-4,'water') && !q.block_neighbor_has_any_tag(4,0,-3,'water') && !q.block_neighbor_has_any_tag(3,0,-3,'water') && !q.block_neighbor_has_any_tag(2,0,-3,'water') && !q.block_neighbor_has_any_tag(1,0,-3,'water') && !q.block_neighbor_has_any_tag(0,0,-3,'water') && !q.block_neighbor_has_any_tag(-1,0,-3,'water') && !q.block_neighbor_has_any_tag(-2,0,-3,'water') && !q.block_neighbor_has_any_tag(-3,0,-3,'water') && !q.block_neighbor_has_any_tag(-4,0,-3,'water') && !q.block_neighbor_has_any_tag(4,0,-2,'water') && !q.block_neighbor_has_any_tag(3,0,-2,'water') && !q.block_neighbor_has_any_tag(2,0,-2,'water') && !q.block_neighbor_has_any_tag(1,0,-2,'water') && !q.block_neighbor_has_any_tag(0,0,-2,'water') && !q.block_neighbor_has_any_tag(-1,0,-2,'water') && !q.block_neighbor_has_any_tag(-2,0,-2,'water') && !q.block_neighbor_has_any_tag(-3,0,-2,'water') && !q.block_neighbor_has_any_tag(-4,0,-2,'water') && !q.block_neighbor_has_any_tag(4,0,-1,'water') && !q.block_neighbor_has_any_tag(3,0,-1,'water') && !q.block_neighbor_has_any_tag(2,0,-1,'water') && !q.block_neighbor_has_any_tag(1,0,-1,'water') && !q.block_neighbor_has_any_tag(0,0,-1,'water') && !q.block_neighbor_has_any_tag(-1,0,-1,'water') && !q.block_neighbor_has_any_tag(-2,0,-1,'water') && !q.block_neighbor_has_any_tag(-3,0,-1,'water') && !q.block_neighbor_has_any_tag(-4,0,-1,'water') && !q.block_neighbor_has_any_tag(4,0,1,'water') && !q.block_neighbor_has_any_tag(3,0,1,'water') && !q.block_neighbor_has_any_tag(2,0,1,'water') && !q.block_neighbor_has_any_tag(1,0,1,'water') && !q.block_neighbor_has_any_tag(0,0,1,'water') && !q.block_neighbor_has_any_tag(-1,0,1,'water') && !q.block_neighbor_has_any_tag(-2,0,1,'water') && !q.block_neighbor_has_any_tag(-3,0,1,'water') && !q.block_neighbor_has_any_tag(-4,0,1,'water') && !q.block_neighbor_has_any_tag(4,0,2,'water') && !q.block_neighbor_has_any_tag(3,0,2,'water') && !q.block_neighbor_has_any_tag(2,0,2,'water') && !q.block_neighbor_has_any_tag(1,0,2,'water') && !q.block_neighbor_has_any_tag(0,0,2,'water') && !q.block_neighbor_has_any_tag(-1,0,2,'water') && !q.block_neighbor_has_any_tag(-2,0,2,'water') && !q.block_neighbor_has_any_tag(-3,0,2,'water') && !q.block_neighbor_has_any_tag(-4,0,2,'water') && !q.block_neighbor_has_any_tag(4,0,3,'water') && !q.block_neighbor_has_any_tag(3,0,3,'water') && !q.block_neighbor_has_any_tag(2,0,3,'water') && !q.block_neighbor_has_any_tag(1,0,3,'water') && !q.block_neighbor_has_any_tag(0,0,3,'water') && !q.block_neighbor_has_any_tag(-1,0,3,'water') && !q.block_neighbor_has_any_tag(-2,0,3,'water') && !q.block_neighbor_has_any_tag(-3,0,3,'water') && !q.block_neighbor_has_any_tag(-4,0,3,'water') && !q.block_neighbor_has_any_tag(4,0,4,'water') && !q.block_neighbor_has_any_tag(3,0,4,'water') && !q.block_neighbor_has_any_tag(2,0,4,'water') && !q.block_neighbor_has_any_tag(1,0,4,'water') && !q.block_neighbor_has_any_tag(0,0,4,'water') && !q.block_neighbor_has_any_tag(-1,0,4,'water') && !q.block_neighbor_has_any_tag(-2,0,4,'water') && !q.block_neighbor_has_any_tag(-3,0,4,'water') && !q.block_neighbor_has_any_tag(-4,0,4,'water')",
        "set_block_property": {
          "wiki:wet_farmland": 0
        }
       },
       { // Checks for water around the block and sets "wiki:wet_farmland" to 1 if it finds any
        "condition": "q.block_neighbor_has_any_tag(4,0,0,'water') || q.block_neighbor_has_any_tag(3,0,0,'water') || q.block_neighbor_has_any_tag(2,0,0,'water') || q.block_neighbor_has_any_tag(1,0,0,'water') || q.block_neighbor_has_any_tag(-1,0,0,'water') || q.block_neighbor_has_any_tag(-2,0,0,'water') || q.block_neighbor_has_any_tag(-3,0,0,'water') || q.block_neighbor_has_any_tag(-4,0,0,'water') || q.block_neighbor_has_any_tag(4,0,-4,'water') || q.block_neighbor_has_any_tag(3,0,-4,'water') || q.block_neighbor_has_any_tag(2,0,-4,'water') || q.block_neighbor_has_any_tag(1,0,-4,'water') || q.block_neighbor_has_any_tag(0,0,-4,'water') || q.block_neighbor_has_any_tag(-1,0,-4,'water') || q.block_neighbor_has_any_tag(-2,0,-4,'water') || q.block_neighbor_has_any_tag(-3,0,-4,'water') || q.block_neighbor_has_any_tag(-4,0,-4,'water') || q.block_neighbor_has_any_tag(4,0,-3,'water') || q.block_neighbor_has_any_tag(3,0,-3,'water') || q.block_neighbor_has_any_tag(2,0,-3,'water') || q.block_neighbor_has_any_tag(1,0,-3,'water') || q.block_neighbor_has_any_tag(0,0,-3,'water') || q.block_neighbor_has_any_tag(-1,0,-3,'water') || q.block_neighbor_has_any_tag(-2,0,-3,'water') || q.block_neighbor_has_any_tag(-3,0,-3,'water') || q.block_neighbor_has_any_tag(-4,0,-3,'water') || q.block_neighbor_has_any_tag(4,0,-2,'water') || q.block_neighbor_has_any_tag(3,0,-2,'water') || q.block_neighbor_has_any_tag(2,0,-2,'water') || q.block_neighbor_has_any_tag(1,0,-2,'water') || q.block_neighbor_has_any_tag(0,0,-2,'water') || q.block_neighbor_has_any_tag(-1,0,-2,'water') || q.block_neighbor_has_any_tag(-2,0,-2,'water') || q.block_neighbor_has_any_tag(-3,0,-2,'water') || q.block_neighbor_has_any_tag(-4,0,-2,'water') || q.block_neighbor_has_any_tag(4,0,-1,'water') || q.block_neighbor_has_any_tag(3,0,-1,'water') || q.block_neighbor_has_any_tag(2,0,-1,'water') || q.block_neighbor_has_any_tag(1,0,-1,'water') || q.block_neighbor_has_any_tag(0,0,-1,'water') || q.block_neighbor_has_any_tag(-1,0,-1,'water') || q.block_neighbor_has_any_tag(-2,0,-1,'water') || q.block_neighbor_has_any_tag(-3,0,-1,'water') || q.block_neighbor_has_any_tag(-4,0,-1,'water') || q.block_neighbor_has_any_tag(4,0,1,'water') || q.block_neighbor_has_any_tag(3,0,1,'water') || q.block_neighbor_has_any_tag(2,0,1,'water') || q.block_neighbor_has_any_tag(1,0,1,'water') || q.block_neighbor_has_any_tag(0,0,1,'water') || q.block_neighbor_has_any_tag(-1,0,1,'water') || q.block_neighbor_has_any_tag(-2,0,1,'water') || q.block_neighbor_has_any_tag(-3,0,1,'water') || q.block_neighbor_has_any_tag(-4,0,1,'water') || q.block_neighbor_has_any_tag(4,0,2,'water') || q.block_neighbor_has_any_tag(3,0,2,'water') || q.block_neighbor_has_any_tag(2,0,2,'water') || q.block_neighbor_has_any_tag(1,0,2,'water') || q.block_neighbor_has_any_tag(0,0,2,'water') || q.block_neighbor_has_any_tag(-1,0,2,'water') || q.block_neighbor_has_any_tag(-2,0,2,'water') || q.block_neighbor_has_any_tag(-3,0,2,'water') || q.block_neighbor_has_any_tag(-4,0,2,'water') || q.block_neighbor_has_any_tag(4,0,3,'water') || q.block_neighbor_has_any_tag(3,0,3,'water') || q.block_neighbor_has_any_tag(2,0,3,'water') || q.block_neighbor_has_any_tag(1,0,3,'water') || q.block_neighbor_has_any_tag(0,0,3,'water') || q.block_neighbor_has_any_tag(-1,0,3,'water') || q.block_neighbor_has_any_tag(-2,0,3,'water') || q.block_neighbor_has_any_tag(-3,0,3,'water') || q.block_neighbor_has_any_tag(-4,0,3,'water') || q.block_neighbor_has_any_tag(4,0,4,'water') || q.block_neighbor_has_any_tag(3,0,4,'water') || q.block_neighbor_has_any_tag(2,0,4,'water') || q.block_neighbor_has_any_tag(1,0,4,'water') || q.block_neighbor_has_any_tag(0,0,4,'water') || q.block_neighbor_has_any_tag(-1,0,4,'water') || q.block_neighbor_has_any_tag(-2,0,4,'water') || q.block_neighbor_has_any_tag(-3,0,4,'water') || q.block_neighbor_has_any_tag(-4,0,4,'water')",
        "set_block_property": {
          "wiki:wet_farmland": 1
        }
      }
    ]
  }
},
```

This is the tricky part of our farmland block, water detection. In vanilla Minecraft, water can wet farmland in a giant 9x9 square if it’s smack dab in the middle of all the blocks. We are replicating that behavior here for each coordinate relative to our farmland on the same y level. For example, `q.block_neighbor_has_any_tag(-3,0,4,’water’)` is saying that if our farmland block has a block with the `water` tag 3 blocks east and 4 blocks south, then the `wiki:wet_farmland` will be set to `1`. The `||` stands for “or”, which means that we can have a water block at any of these coordinates. There is also the opposite happening in the second part of the event.

Here is the full `faded_farmland` json for reference.

<CodeHeader>BH/blocks/faded_farmland.json</CodeHeader>
<Spoiler title="Faded Farmland Block JSON">

``` json
{
  "format_version": "1.19.60",
  "minecraft:block": {
    "description": {
      "identifier": "wiki:faded_farmland",
      "menu_category": {
        "category": "nature",
        "is_hidden_in_commands": false
      },
      "properties": {
        "wiki:wet_farmland": [ 0, 1 ]
      }
    },
    "components": {
      "tag:faded_farmland": {},
      "minecraft:map_color": "#0A5E20",
      "minecraft:geometry": "geometry.farmland",
      "minecraft:destructible_by_mining": {
        "seconds_to_destroy": 2.0
      },
      "minecraft:selection_box": {
        "origin": [ -8, 0, -8 ],
        "size": [ 16, 15, 16 ]
      },
      "minecraft:collision_box": {
        "origin": [ -8, 0, -8 ],
        "size": [ 16, 15, 16 ]
      },
      "minecraft:random_ticking": {
        "on_tick": {
          "event": "wiki:detect_water",
          "target": "self"
        }
      },
      "minecraft:material_instances": {
        "*": {
          "texture": "coarse_dirt_faded",
          "render_method": "alpha_test"
        },
        "up": {
          "texture": "faded_farmland",
          "render_method": "alpha_test"
        }
      }
    },
    "events": {
      "wiki:detect_water": {
        "sequence": [
          { // Checks for water around the block and sets "wiki:wet_farmland" to 0 if it doesn't find any
            "condition": "!q.block_neighbor_has_any_tag(4,0,0,'water') && !q.block_neighbor_has_any_tag(3,0,0,'water') && !q.block_neighbor_has_any_tag(2,0,0,'water') && !q.block_neighbor_has_any_tag(1,0,0,'water') && !q.block_neighbor_has_any_tag(-1,0,0,'water') && !q.block_neighbor_has_any_tag(-2,0,0,'water') && !q.block_neighbor_has_any_tag(-3,0,0,'water') && !q.block_neighbor_has_any_tag(-4,0,0,'water') && !q.block_neighbor_has_any_tag(4,0,-4,'water') && !q.block_neighbor_has_any_tag(3,0,-4,'water') && !q.block_neighbor_has_any_tag(2,0,-4,'water') && !q.block_neighbor_has_any_tag(1,0,-4,'water') && !q.block_neighbor_has_any_tag(0,0,-4,'water') && !q.block_neighbor_has_any_tag(-1,0,-4,'water') && !q.block_neighbor_has_any_tag(-2,0,-4,'water') && !q.block_neighbor_has_any_tag(-3,0,-4,'water') && !q.block_neighbor_has_any_tag(-4,0,-4,'water') && !q.block_neighbor_has_any_tag(4,0,-3,'water') && !q.block_neighbor_has_any_tag(3,0,-3,'water') && !q.block_neighbor_has_any_tag(2,0,-3,'water') && !q.block_neighbor_has_any_tag(1,0,-3,'water') && !q.block_neighbor_has_any_tag(0,0,-3,'water') && !q.block_neighbor_has_any_tag(-1,0,-3,'water') && !q.block_neighbor_has_any_tag(-2,0,-3,'water') && !q.block_neighbor_has_any_tag(-3,0,-3,'water') && !q.block_neighbor_has_any_tag(-4,0,-3,'water') && !q.block_neighbor_has_any_tag(4,0,-2,'water') && !q.block_neighbor_has_any_tag(3,0,-2,'water') && !q.block_neighbor_has_any_tag(2,0,-2,'water') && !q.block_neighbor_has_any_tag(1,0,-2,'water') && !q.block_neighbor_has_any_tag(0,0,-2,'water') && !q.block_neighbor_has_any_tag(-1,0,-2,'water') && !q.block_neighbor_has_any_tag(-2,0,-2,'water') && !q.block_neighbor_has_any_tag(-3,0,-2,'water') && !q.block_neighbor_has_any_tag(-4,0,-2,'water') && !q.block_neighbor_has_any_tag(4,0,-1,'water') && !q.block_neighbor_has_any_tag(3,0,-1,'water') && !q.block_neighbor_has_any_tag(2,0,-1,'water') && !q.block_neighbor_has_any_tag(1,0,-1,'water') && !q.block_neighbor_has_any_tag(0,0,-1,'water') && !q.block_neighbor_has_any_tag(-1,0,-1,'water') && !q.block_neighbor_has_any_tag(-2,0,-1,'water') && !q.block_neighbor_has_any_tag(-3,0,-1,'water') && !q.block_neighbor_has_any_tag(-4,0,-1,'water') && !q.block_neighbor_has_any_tag(4,0,1,'water') && !q.block_neighbor_has_any_tag(3,0,1,'water') && !q.block_neighbor_has_any_tag(2,0,1,'water') && !q.block_neighbor_has_any_tag(1,0,1,'water') && !q.block_neighbor_has_any_tag(0,0,1,'water') && !q.block_neighbor_has_any_tag(-1,0,1,'water') && !q.block_neighbor_has_any_tag(-2,0,1,'water') && !q.block_neighbor_has_any_tag(-3,0,1,'water') && !q.block_neighbor_has_any_tag(-4,0,1,'water') && !q.block_neighbor_has_any_tag(4,0,2,'water') && !q.block_neighbor_has_any_tag(3,0,2,'water') && !q.block_neighbor_has_any_tag(2,0,2,'water') && !q.block_neighbor_has_any_tag(1,0,2,'water') && !q.block_neighbor_has_any_tag(0,0,2,'water') && !q.block_neighbor_has_any_tag(-1,0,2,'water') && !q.block_neighbor_has_any_tag(-2,0,2,'water') && !q.block_neighbor_has_any_tag(-3,0,2,'water') && !q.block_neighbor_has_any_tag(-4,0,2,'water') && !q.block_neighbor_has_any_tag(4,0,3,'water') && !q.block_neighbor_has_any_tag(3,0,3,'water') && !q.block_neighbor_has_any_tag(2,0,3,'water') && !q.block_neighbor_has_any_tag(1,0,3,'water') && !q.block_neighbor_has_any_tag(0,0,3,'water') && !q.block_neighbor_has_any_tag(-1,0,3,'water') && !q.block_neighbor_has_any_tag(-2,0,3,'water') && !q.block_neighbor_has_any_tag(-3,0,3,'water') && !q.block_neighbor_has_any_tag(-4,0,3,'water') && !q.block_neighbor_has_any_tag(4,0,4,'water') && !q.block_neighbor_has_any_tag(3,0,4,'water') && !q.block_neighbor_has_any_tag(2,0,4,'water') && !q.block_neighbor_has_any_tag(1,0,4,'water') && !q.block_neighbor_has_any_tag(0,0,4,'water') && !q.block_neighbor_has_any_tag(-1,0,4,'water') && !q.block_neighbor_has_any_tag(-2,0,4,'water') && !q.block_neighbor_has_any_tag(-3,0,4,'water') && !q.block_neighbor_has_any_tag(-4,0,4,'water')",
            "set_block_property": {
              "wiki:wet_farmland": 0
            }
          },
          { // Checks for water around the block and sets "wiki:wet_farmland" to 1 if it finds any
            "condition": "q.block_neighbor_has_any_tag(4,0,0,'water') || q.block_neighbor_has_any_tag(3,0,0,'water') || q.block_neighbor_has_any_tag(2,0,0,'water') || q.block_neighbor_has_any_tag(1,0,0,'water') || q.block_neighbor_has_any_tag(-1,0,0,'water') || q.block_neighbor_has_any_tag(-2,0,0,'water') || q.block_neighbor_has_any_tag(-3,0,0,'water') || q.block_neighbor_has_any_tag(-4,0,0,'water') || q.block_neighbor_has_any_tag(4,0,-4,'water') || q.block_neighbor_has_any_tag(3,0,-4,'water') || q.block_neighbor_has_any_tag(2,0,-4,'water') || q.block_neighbor_has_any_tag(1,0,-4,'water') || q.block_neighbor_has_any_tag(0,0,-4,'water') || q.block_neighbor_has_any_tag(-1,0,-4,'water') || q.block_neighbor_has_any_tag(-2,0,-4,'water') || q.block_neighbor_has_any_tag(-3,0,-4,'water') || q.block_neighbor_has_any_tag(-4,0,-4,'water') || q.block_neighbor_has_any_tag(4,0,-3,'water') || q.block_neighbor_has_any_tag(3,0,-3,'water') || q.block_neighbor_has_any_tag(2,0,-3,'water') || q.block_neighbor_has_any_tag(1,0,-3,'water') || q.block_neighbor_has_any_tag(0,0,-3,'water') || q.block_neighbor_has_any_tag(-1,0,-3,'water') || q.block_neighbor_has_any_tag(-2,0,-3,'water') || q.block_neighbor_has_any_tag(-3,0,-3,'water') || q.block_neighbor_has_any_tag(-4,0,-3,'water') || q.block_neighbor_has_any_tag(4,0,-2,'water') || q.block_neighbor_has_any_tag(3,0,-2,'water') || q.block_neighbor_has_any_tag(2,0,-2,'water') || q.block_neighbor_has_any_tag(1,0,-2,'water') || q.block_neighbor_has_any_tag(0,0,-2,'water') || q.block_neighbor_has_any_tag(-1,0,-2,'water') || q.block_neighbor_has_any_tag(-2,0,-2,'water') || q.block_neighbor_has_any_tag(-3,0,-2,'water') || q.block_neighbor_has_any_tag(-4,0,-2,'water') || q.block_neighbor_has_any_tag(4,0,-1,'water') || q.block_neighbor_has_any_tag(3,0,-1,'water') || q.block_neighbor_has_any_tag(2,0,-1,'water') || q.block_neighbor_has_any_tag(1,0,-1,'water') || q.block_neighbor_has_any_tag(0,0,-1,'water') || q.block_neighbor_has_any_tag(-1,0,-1,'water') || q.block_neighbor_has_any_tag(-2,0,-1,'water') || q.block_neighbor_has_any_tag(-3,0,-1,'water') || q.block_neighbor_has_any_tag(-4,0,-1,'water') || q.block_neighbor_has_any_tag(4,0,1,'water') || q.block_neighbor_has_any_tag(3,0,1,'water') || q.block_neighbor_has_any_tag(2,0,1,'water') || q.block_neighbor_has_any_tag(1,0,1,'water') || q.block_neighbor_has_any_tag(0,0,1,'water') || q.block_neighbor_has_any_tag(-1,0,1,'water') || q.block_neighbor_has_any_tag(-2,0,1,'water') || q.block_neighbor_has_any_tag(-3,0,1,'water') || q.block_neighbor_has_any_tag(-4,0,1,'water') || q.block_neighbor_has_any_tag(4,0,2,'water') || q.block_neighbor_has_any_tag(3,0,2,'water') || q.block_neighbor_has_any_tag(2,0,2,'water') || q.block_neighbor_has_any_tag(1,0,2,'water') || q.block_neighbor_has_any_tag(0,0,2,'water') || q.block_neighbor_has_any_tag(-1,0,2,'water') || q.block_neighbor_has_any_tag(-2,0,2,'water') || q.block_neighbor_has_any_tag(-3,0,2,'water') || q.block_neighbor_has_any_tag(-4,0,2,'water') || q.block_neighbor_has_any_tag(4,0,3,'water') || q.block_neighbor_has_any_tag(3,0,3,'water') || q.block_neighbor_has_any_tag(2,0,3,'water') || q.block_neighbor_has_any_tag(1,0,3,'water') || q.block_neighbor_has_any_tag(0,0,3,'water') || q.block_neighbor_has_any_tag(-1,0,3,'water') || q.block_neighbor_has_any_tag(-2,0,3,'water') || q.block_neighbor_has_any_tag(-3,0,3,'water') || q.block_neighbor_has_any_tag(-4,0,3,'water') || q.block_neighbor_has_any_tag(4,0,4,'water') || q.block_neighbor_has_any_tag(3,0,4,'water') || q.block_neighbor_has_any_tag(2,0,4,'water') || q.block_neighbor_has_any_tag(1,0,4,'water') || q.block_neighbor_has_any_tag(0,0,4,'water') || q.block_neighbor_has_any_tag(-1,0,4,'water') || q.block_neighbor_has_any_tag(-2,0,4,'water') || q.block_neighbor_has_any_tag(-3,0,4,'water') || q.block_neighbor_has_any_tag(-4,0,4,'water')",
            "set_block_property": {
              "wiki:wet_farmland": 1
            }
          }
        ]
      }
    },
    "permutations": [
      {
        "condition": "q.block_property('wiki:wet_farmland') == 0",
        "components": {
          "minecraft:material_instances": {
            "*": {
              "texture": "coarse_dirt_faded",
              "render_method": "alpha_test"
            },
            "up": {
              "texture": "faded_farmland",
              "render_method": "alpha_test"
            }
          }
        }
      },
      {
        "condition": "q.block_property('wiki:wet_farmland') == 1",
        "components": {
          "minecraft:material_instances": {
            "*": {
              "texture": "coarse_dirt_faded",
              "render_method": "alpha_test"
            },
            "up": {
              "texture": "faded_farmland_wet",
              "render_method": "alpha_test"
            }
          }
        }
      }
    ]
  }
}
```

</Spoiler>

## The Custom Crop

It’s finally time for crops! Now if you are not a fan of carrots, that is okay, you can choose whatever crop that you like. Just remember to alter the rest of the template. Making crops is not as difficult as you may think, it just takes a little practice and fore thought in coding a specific series of events.

To start with, we want our crops to have 4 stages of growth, so the crop should include a property with four values.

``` json
"menu_category": {
    "category": "nature",
    "is_hidden_in_commands": false
},
"properties": {
    "wiki:crop_stage": [ 0, 1, 2, 3 ]
}
```

If you look at crops like carrots and potatoes in game, you will see that they are made up of four planes and are situated 4 pixels from each edge as shown in our screenshot above. It is noteworthy to mention that each plane sits at y level -1 and not 0 like traditional blocks. If you forgot to lower the planes down by one, then the crops will appear to grow one pixel higher then the top of our farmland which was lowered in our previous tutorial. By lowering the position down a pixel, it will sit above our custom farmland perfectly making everything right in our blocky world. Here is a template model for the crop.

<BButton
    link="/assets/packs/tutorials/custom_crops/crop.geo.json"
	  download="Custom Crop Geometry.json"
    color=blue
>Download Custom Crop Geometry</BButton>

Plants in Minecraft also have no collision box. This means that you can walk through them as well. These carrots that we will make are also a little different then vanilla carrots. For example lava would destroy the vanilla ones but not ours. We could change that but we want to simplify things as much as we can, so instead of lava destruction, our carrots are flammable! That’s right folks, you can light up your own field of carrots if you like. Here is what you need to make the block flammable and have zero collision.

Components:
``` json
"minecraft:flammable": true, // flammable
"minecraft:collision_box": false, // no collision
"minecraft:geometry": "geometry.crop", // set geometry
```

We also want to give our carrots a tag that it can be detected with as well as the ability to break if the farmland below it disappears.

Components:
``` json
"tag:carrots_new": {}, // tag
"minecraft:placement_filter": { // break if the set "block" below it disappears
    "conditions": [
        {
        "block_filter": [ "wiki:faded_farmland" ],
        "allowed_faces": [ "up" ]
        }
    ]
},
```
What our placement filter is saying is that we can only place our carrot models on the tops of `wiki:faded_farmland`, this is why our block breaks if the block below it moves or breaks. You can set the placement filter to any block, even the vanilla farmland block.

Below are more components to run events and set visual effects.

Components:
``` json
"minecraft:light_dampening": 0, // visual effect (no shadows)
"minecraft:loot": "loot_tables/blocks/empty_loot.json",
"minecraft:on_player_destroyed": {
  "event": "wiki:update_loot" // activates the "wiki:update_loot" event when the block is broken by a player in survival
},
"minecraft:random_ticking": {
  "on_tick": {
    "event": "wiki:add_stage", // activates the "wiki:add_stage" event every random tick (set in-game)
    "target": "self"
  }
},
"minecraft:queued_ticking": {
  "looping": true,
  "interval_range": [ 10, 10 ], // update/run event every 10-10 ticks
  "on_tick": {
    "event": "wiki:detect_liquid", // activates the "wiki:detect_liquid"
    "target": "self"
  }
},
"minecraft:on_interact": { // when player interacts with bone meal, activate the "wiki:bonemeal" event
  "event": "wiki:bonemeal",
  "condition": "q.is_item_name_any('slot.weapon.mainhand', 0, 'minecraft:bone_meal')"
}
```
Add these to your block JSON.

The events below do four very important things. The first event checks it surrounding for water and destroys the block if it finds any. The second event drop loot based on the growth stage (`"wiki:crop_stage"`) of the block. The third event adds a stage to the crop growth when activated. it adds one to `"wiki:crop_stage"` if `"wiki:crop_stage"` is less than 3. The fourth and final event is for bonemeal. When the event is activated, It adds a random value to `"wiki:crop_stage"`.

Events:
``` json
"wiki:detect_liquid": { // if water is detected above or next to the crop, destroy the crop
  "sequence": [
    { // if water is detected above or next to the crop, run "wiki:update_loot"
      "condition": "q.block_neighbor_has_any_tag(1,0,0,'water') || q.block_neighbor_has_any_tag(-1,0,0,'water') || q.block_neighbor_has_any_tag(0,0,1,'water') || q.block_neighbor_has_any_tag(0,0,-1,'water') || q.block_neighbor_has_any_tag(0,1,0,'water')",
      "trigger": {
        "event": "wiki:update_loot"
      }
    },
    { // if water is detected above or next to the crop, replace the block with air
      "condition": "q.block_neighbor_has_any_tag(1,0,0,'water') || q.block_neighbor_has_any_tag(-1,0,0,'water') || q.block_neighbor_has_any_tag(0,0,1,'water') || q.block_neighbor_has_any_tag(0,0,-1,'water') || q.block_neighbor_has_any_tag(0,1,0,'water')",
      "die": {}
    }
  ]
},
"wiki:update_loot": { // drops the loot that matches the crop stage
  "sequence": [
    {
      "condition": "q.block_property('wiki:crop_stage') == 0",
      "spawn_loot": {
        "table": "loot_tables/blocks/one_carrot_loot.json"
      }
    },
    {
      "condition": "q.block_property('wiki:crop_stage') == 1",
      "spawn_loot": {
        "table": "loot_tables/blocks/one_carrot_loot.json"
      }
    },
    {
      "condition": "q.block_property('wiki:crop_stage') == 2",
      "spawn_loot": {
        "table": "loot_tables/blocks/one_carrot_loot.json"
      }
    },
    {
      "condition": "q.block_property('wiki:crop_stage') == 3",
      "spawn_loot": {
        "table": "loot_tables/blocks/random_carrot_loot.json"
      }
    }
  ]
},
"wiki:add_stage": { // adds to "wiki:crop_stage" (grows crop)
  "sequence": [
    {
      "condition": "q.block_property('wiki:crop_stage') < 3",
      "set_block_property": {
        "wiki:crop_stage": "q.block_property('wiki:crop_stage')+1"
      }
    }
  ]
},
"wiki:bonemeal": { // bonemeal the crop (grow crop a random amount)
  "sequence": [
    {
      "condition": "q.block_property('wiki:crop_stage') < 3",
      "set_block_property": {
        "wiki:crop_stage": "q.block_property('wiki:crop_stage')+math.random(1, 3-q.block_property('wiki:crop_stage'))"
      }
    },
    {
      "run_command": {
        "command": [ "particle minecraft:crop_growth_emitter ~ ~ ~" ], // make particles
        "target": "self"
      }
    }
  ]
}
```

So we know how to set our block properties, what happens when our block is on a particular property value?

The permutations below set a certain `"minecraft:selection_box"` and texture to the block based on the `q.block_property('wiki:crop_stage')` or `"wiki:crop_stage"` value. For example, if `"wiki:crop_stage"` is 3, the permutation sets the `"minecraft:material_instances"` ( texture ) to `"carrots_stage_3"`.

Permutations:
``` json
"permutations": [
    {
    "condition": "q.block_property('wiki:crop_stage') == 0",
    "components": {
        "minecraft:material_instances": {
        "*": {
            "texture": "carrots_stage_0",
            "render_method": "alpha_test",
            "face_dimming": false,
            "ambient_occlusion": false
        }
        },
        "minecraft:selection_box": {
        "origin": [ -8, 0, -8 ],
        "size": [ 16, 2, 16 ]
        }
    }
    },
    {
    "condition": "q.block_property('wiki:crop_stage') == 1",
    "components": {
        "minecraft:material_instances": {
        "*": {
            "texture": "carrots_stage_1",
            "render_method": "alpha_test",
            "face_dimming": false,
            "ambient_occlusion": false
        }
        },
        "minecraft:selection_box": {
        "origin": [ -8, 0, -8 ],
        "size": [ 16, 5, 16 ]
        }
    }
    },
    {
    "condition": "q.block_property('wiki:crop_stage') == 2",
    "components": {
        "minecraft:material_instances": {
        "*": {
            "texture": "carrots_stage_2",
            "render_method": "alpha_test",
            "face_dimming": false,
            "ambient_occlusion": false
        }
        },
        "minecraft:selection_box": {
        "origin": [ -8, 0, -8 ],
        "size": [ 16, 9, 16 ]
        }
    }
    },
    {
    "condition": "q.block_property('wiki:crop_stage') == 3",
    "components": {
        "minecraft:material_instances": {
        "*": {
            "texture": "carrots_stage_3",
            "render_method": "alpha_test",
            "face_dimming": false,
            "ambient_occlusion": false
        }
        },
        "minecraft:selection_box": {
        "origin": [ -8, 0, -8 ],
        "size": [ 16, 13, 16 ]
        }
    }
    }
]
```
You can add more permutations depending on how many stages you want your crop to have. But don't forget to also change the events and properties limit.

Here is the entire custom crop file ( `carrots_new.json` ) for reference.
<CodeHeader>BH/blocks/carrots_new.json</CodeHeader>
<Spoiler title="Crop Block JSON">

``` json
{
  "format_version": "1.19.30",
  "minecraft:block": {
    "description": {
      "identifier": "wiki:carrots_new",
      "menu_category": {
        "category": "nature",
        "is_hidden_in_commands": false
      },
      "properties": {
        "wiki:crop_stage": [ 0, 1, 2, 3 ]
      }
    },
    "components": {
      "tag:carrots_new": {},
      "minecraft:flammable": true,
      "minecraft:light_dampening": 0,
      "minecraft:collision_box": false,
      "minecraft:geometry": "geometry.crop",
      "minecraft:loot": "loot_tables/blocks/empty_loot.json",
      "minecraft:on_player_destroyed": {
        "event": "wiki:update_loot"
      },
      "minecraft:placement_filter": {
        "conditions": [
          {
            "block_filter": [ "wiki:faded_farmland" ],
            "allowed_faces": [ "up" ]
          }
        ]
      },
      "minecraft:material_instances": {
        "*": {
          "texture": "carrots_stage_0",
          "render_method": "alpha_test",
          "face_dimming": false,
          "ambient_occlusion": false
        }
      },
      "minecraft:random_ticking": {
        "on_tick": {
          "event": "wiki:add_stage",
          "target": "self"
        }
      },
      "minecraft:queued_ticking": {
        "looping": true,
        "interval_range": [ 10, 10 ],
        "on_tick": {
          "event": "wiki:detect_liquid",
          "target": "self"
        }
      },
      "minecraft:on_interact": {
        "event": "wiki:bonemeal",
        "condition": "q.is_item_name_any('slot.weapon.mainhand', 0, 'minecraft:bone_meal')"
      }
    },
    "events": {
      "wiki:detect_liquid": {
        "sequence": [
          { // if water is detected above or next to the crop, run "wiki:update_loot"
            "condition": "q.block_neighbor_has_any_tag(1,0,0,'water') || q.block_neighbor_has_any_tag(-1,0,0,'water') || q.block_neighbor_has_any_tag(0,0,1,'water') || q.block_neighbor_has_any_tag(0,0,-1,'water') || q.block_neighbor_has_any_tag(0,1,0,'water')",
            "trigger": {
              "event": "wiki:update_loot"
            }
          },
          { // if water is detected above or next to the crop, replace the block with air
            "condition": "q.block_neighbor_has_any_tag(1,0,0,'water') || q.block_neighbor_has_any_tag(-1,0,0,'water') || q.block_neighbor_has_any_tag(0,0,1,'water') || q.block_neighbor_has_any_tag(0,0,-1,'water') || q.block_neighbor_has_any_tag(0,1,0,'water')",
            "die": {}
          }
        ]
      },
      "wiki:update_loot": {
        "sequence": [
          {
            "condition": "q.block_property('wiki:crop_stage') == 0",
            "spawn_loot": {
              "table": "loot_tables/blocks/one_carrot_loot.json"
            }
          },
          {
            "condition": "q.block_property('wiki:crop_stage') == 1",
            "spawn_loot": {
              "table": "loot_tables/blocks/one_carrot_loot.json"
            }
          },
          {
            "condition": "q.block_property('wiki:crop_stage') == 2",
            "spawn_loot": {
              "table": "loot_tables/blocks/one_carrot_loot.json"
            }
          },
          {
            "condition": "q.block_property('wiki:crop_stage') == 3",
            "spawn_loot": {
              "table": "loot_tables/blocks/random_carrot_loot.json"
            }
          }
        ]
      },
      "wiki:add_stage": {
        "sequence": [
          {
            "condition": "q.block_property('wiki:crop_stage') < 3",
            "set_block_property": {
              "wiki:crop_stage": "q.block_property('wiki:crop_stage')+1"
            }
          }
        ]
      },
      "wiki:bonemeal": {
        "sequence": [
          {
            "condition": "q.block_property('wiki:crop_stage') < 3",
            "set_block_property": {
              "wiki:crop_stage": "q.block_property('wiki:crop_stage')+math.random(1, 3-q.block_property('wiki:crop_stage'))"
            }
          },
          {
            "run_command": {
              "command": [ "particle minecraft:crop_growth_emitter ~ ~ ~" ],
              "target": "self"
            }
          }
        ]
      }
    },
    "permutations": [
      {
        "condition": "q.block_property('wiki:crop_stage') == 0",
        "components": {
          "minecraft:material_instances": {
            "*": {
              "texture": "carrots_stage_0",
              "render_method": "alpha_test",
              "face_dimming": false,
              "ambient_occlusion": false
            }
          },
          "minecraft:selection_box": {
            "origin": [ -8, 0, -8 ],
            "size": [ 16, 2, 16 ]
          }
        }
      },
      {
        "condition": "q.block_property('wiki:crop_stage') == 1",
        "components": {
          "minecraft:material_instances": {
            "*": {
              "texture": "carrots_stage_1",
              "render_method": "alpha_test",
              "face_dimming": false,
              "ambient_occlusion": false
            }
          },
          "minecraft:selection_box": {
            "origin": [ -8, 0, -8 ],
            "size": [ 16, 5, 16 ]
          }
        }
      },
      {
        "condition": "q.block_property('wiki:crop_stage') == 2",
        "components": {
          "minecraft:material_instances": {
            "*": {
              "texture": "carrots_stage_2",
              "render_method": "alpha_test",
              "face_dimming": false,
              "ambient_occlusion": false
            }
          },
          "minecraft:selection_box": {
            "origin": [ -8, 0, -8 ],
            "size": [ 16, 9, 16 ]
          }
        }
      },
      {
        "condition": "q.block_property('wiki:crop_stage') == 3",
        "components": {
          "minecraft:material_instances": {
            "*": {
              "texture": "carrots_stage_3",
              "render_method": "alpha_test",
              "face_dimming": false,
              "ambient_occlusion": false
            }
          },
          "minecraft:selection_box": {
            "origin": [ -8, 0, -8 ],
            "size": [ 16, 13, 16 ]
          }
        }
      }
    ]
  }
}
```

</Spoiler>

## Crop Item

Right now our crop look a bit weird when a player holds it. We can solve this by placing the crop with a custom item! Below is a json for the custom item that places your crop.

<CodeHeader>BH/items/carrots_new_item.json</CodeHeader>

```json
{
  "format_version": "1.16.100",
  "minecraft:item": {
    "description": {
      "identifier": "wiki:carrot_new_item", // Make sure this is different from your crop ID
      "category": "nature"
    },
    "components": {
      "minecraft:use_duration": 1.5,
      "minecraft:use_animation": "eat",
      "minecraft:icon": {
        "texture": "carrot"
      },
      "minecraft:display_name": {
        "value": "Carrot"
      },
      "minecraft:max_stack_size": 16,
      "minecraft:food": {
        "can_always_eat": true,
        "nutrition": 2,
        "saturation_modifier": "normal"
      },
      "minecraft:block_placer": {
        "block": "wiki:carrots_new" // The block this item is placing
      }
    }
  }
}
```

## Conclusion and Template Download

Finally, your addon BH file should look like this:
<FolderView
	:paths="[
    'com.mojang/development_behavior_packs/blocks/carrots_new.json',
    'com.mojang/development_behavior_packs/blocks/coarse_dirt_faded.json',
    'com.mojang/development_behavior_packs/blocks/faded_farmland.json',
    'com.mojang/development_behavior_packs/items/carrot_new_item.json',
    ]"
></FolderView>

In conclusion, with the help of our tutorial/template, you now have the knowledge and skills to create your own custom crop, as well as other blocks such as farmland and dirt. If you require further assistance or would like to access the complete template files, please use the download button provided below. Happy designing!

<BButton
    link="/assets/packs/tutorials/custom_crops/custom_crop_template.zip"
	  download="Custom Crop Template.zip"
    color=blue
>Download Custom Crop Template</BButton>