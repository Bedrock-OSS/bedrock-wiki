---
title: 3D Items
category: Tutorials
tags:
    - expert
---

:::tip
There are two methods for making 3D items. Please choose the one most suitable for your use-case.

-   [Entity Based](#entity-based-3d-item-models)
-   [Attachable Based](#attachable-based-3d-item-models)

:::

## Entity Based 3D Item Models

::: tip
This tutorial assumes you have a basic understanding of MoLang, render controllers, and client entity definitions. Ensure to check out the [render controller tutorial](/visuals/entity-visuals-intro) before starting this tutorial!
:::

### Concept & Idea

Since Bedrock doesn't support custom item models out of the box, we have to get creative with their implementation. The idea behind this concept is straightforward: we overlay an entity model onto the player model with the help of a render controller and adjust the display settings with a few animations.

### The Item

First of all, we need to make sure our item is ready. You can add custom models to both custom and vanilla items. In this tutorial, we will be making an automatic drill. We won't be going in-depth on creating custom items in this tutorial, but you can use [this](https://gitwither.github.io/bedrock-item-generator/) online custom item generator. Make sure your item has got a texture and displays correctly in the player's inventory.

![](/assets/images/tutorials/custom-item-models/drill-sprite-inventory.png)

### Geometry

Before implementing your custom item model into the game, make sure your item geometry is ready to be used. For your item to render correctly inside a player's hand, it must contain the player's bone skeleton. This means that your item model must contain all of the bones the player model has **without their respective elements (the player's bones must be empty!)**. Export it with a unique identifier. In our case, it will be `geometry.drill`. A geometry file example is present at the end of the file.

![](/assets/images/tutorials/custom-item-models/drill-bone-structure.png)

### Client Player Definition

This is the most crucial part. We must add it to the player entity client definition for our model to render inside a player's hand. This step consists of several parts:

1. Defining a variable that tells us whether the player is currently holding our item.
2. Defining the textures and the geometry of our model in the player client definition.
3. Creating a conditional render controller that adds the model geometry whenever the player holds our item.
4. Creating animations that position our item correctly in first person.

Let's start by defining the texture and the geometry of our item in the player client definition file. Copy the `player.entity.json` file from the [Vanilla Resource Pack](https://aka.ms/resourcepacktemplate) into the `entity` folder of your resource pack. Open the file, find the `geometries` JSON object, and add a new entry to the `geometries` object:

<CodeHeader></CodeHeader>

```json
"geometry": {
    ...,
    "<your_item_name>": "geometry.<your_geometry_id>"
}
```

In our case, it will look like this:

<CodeHeader></CodeHeader>

```json
"geometry": {
    ...,
    "drill": "geometry.drill"
}
```

Next, add a new entry to your `textures` entry that references the texture of your model:

<CodeHeader></CodeHeader>

```json
"textures": {
    ...,
    "<your_item_name>": "path/to/texture"
}
```

In our case, it will look like this:

<CodeHeader></CodeHeader>

```json
"textures": {
    ...,
    "drill": "textures/items/models/drill"
}
```

Now, let's define the variable that tells us whether the player is holding our item. In your player's `scripts.pre_animation` array, add a new entry:
`variable.<your_item> = query.get_equipped_item_name('main_hand') == <your_item_identifier_without_namespace>`
In our case, this entry will look like the following:

<CodeHeader></CodeHeader>

```json
"pre_animation": [
    ...,
    "variable.drill = query.get_equipped_item_name('main_hand') == 'drill';"
]

```

Note: it is essential to define this variable because checking for the item directly in the render controller can yield delays when switching between items.

### Render Controller

Next, let's create a render controller that will render our item. Create a new file in the `render_controllers` folder of your resource pack called `<your_item_name>.render_controllers.json`. In our case, it will be `drill.render_controllers.json`

<CodeHeader></CodeHeader>

```json
{
	"format_version": "1.8.0",
	"render_controllers": {
		"controller.render.<your_item_name>": {
			"textures": [
				"Texture.<item_texture>" //This is the texture you defined in the 'textures' object in player.entity.json
			],
			"geometry": "Geometry.<item_geometry>", //This is the geometry you defined in the 'geometries' object in player.entity.json
			"materials": [
				{
					"*": "Material.default"
				}
			]
		}
	}
}
```

In our case, the render controller will look like the following:

<CodeHeader></CodeHeader>

```json
{
	"format_version": "1.8.0",
	"render_controllers": {
		"controller.render.drill": {
			"textures": ["Texture.drill"],
			"geometry": "Geometry.drill",
			"materials": [
				{
					"*": "Material.default"
				}
			]
		}
	}
}
```

Now, let's add this render controller to our player client definition file. Add a new object to the `render_controllers array like so:

<CodeHeader></CodeHeader>

```json
"render_controllers": [
    ...,
    {
        //This is the ID of the render controller that you created in the previous step
        "controller.render.<your_item>": "variable.<your_item>" //This is the variable you defined in the 'pre_animation' array
    }
]
```

In our case, it will look like this:

<CodeHeader></CodeHeader>

```json
"render_controllers": [
    ...,
    {
        "controller.render.drill": "variable.drill"
    }
]
```

### Animations

This part contains an unnecessary step - creating custom animations for the item, but we will go over it anyway. Let's start with the vital part. If you load up the pack right now, you will see that your item is shifted weirdly in first-person. This is because it still renders as a third-person item. To fix this, we will create an animation that just offsets the item into the correct location. Create a new file called `<your_item>.animation.json` in your resource pack's `animations` folder.

<CodeHeader></CodeHeader>

```json
{
	"format_version": "1.8.0",
	"animations": {
		"animation.<your_item>.first_person.hold": {
			"loop": true,
			"bones": {
				"<root_bone_of_your_item>": {
					"rotation": [87.5, 52.5, -7.5],
					"position": [0, 7, 0]
				}
			}
		}
	}
}
```

Note: these numbers will likely **not** work for you. You must play around with various numbers to get the right ones.
Note: your item geometry must be contained within a root bone that can be easily manipulated.
In our case, the animation will look like this:

<CodeHeader></CodeHeader>

```json
{
	"format_version": "1.8.0",
	"animations": {
		"animation.drill.first_person.hold": {
			"loop": true,
			"bones": {
				"drill": {
					"rotation": [87.5, 52.5, -7.5],
					"position": [0, 7, 0]
				}
			}
		}
	}
}
```

Now, let's add the decorative animation for our drill:

<CodeHeader></CodeHeader>

```json
{
	"format_version": "1.8.0",
	"animations": {
		"animation.drill.hold": {
			"loop": true,
			"bones": {
				"rotator": {
					"rotation": [0, 0, "query.anim_time * 850"]
				},
				"inner_rotor": {
					"rotation": [0, 0, "query.anim_time * -950"]
				}
			}
		},
		"animation.drill.first_person.hold": {
			"loop": true,
			"bones": {
				"drill": {
					"rotation": [87.5, 52.5, -7.5],
					"position": [0, 7, 0]
				}
			}
		}
	}
}
```

This animation will spin the drill quickly to simulate an actual drill.
Now, let's add these animations to the player client definition file. Add a new entity to the `animations` object of your `player.entity.json` file like this:

<CodeHeader></CodeHeader>

```json
"animations": {
    ...,
    "<your_item>_first_person": "animation.<your_item>.first_person.hold" //This is the first-person animation you definde in the previous step
}
```

Next, let's make this animation loop: add a new entry to your `scripts.animate` array like so:

<CodeHeader></CodeHeader>

```json
"animate": [
    ...,
    {
        //This is the animation you defined in the previous step
        "<your_item>_first_person": "variable.<your_item> && variable.is_first_person" //This is the variable you defined in the 'pre_animation' array. This animation will only play if the player is in first person and holding the item (p ∧ q)
    }
]
```

In our case, it will look like this:

<CodeHeader></CodeHeader>

```json
"animate": [
    ...,
    {
        "drill_first_person": "variable.drill && variable.is_first_person"
    },
    {
        "drill": "variable.drill"
    }
]
```

Note: we have the decorative animation defined here as well.

### Final Touches

Great! Our item works, but there is a small problem: you can see that our item sprite is rendered with the 3D model in the player's hand.

![](/assets/images/tutorials/custom-item-models/drill-item-visible.png)

To fix this, set the opacity of the item texture to 1 in a free image editor like GIMP.

Using Gimp:
**NOTE:** It can be challenging to find your Minecraft folder to either import or export the item sprite in the Gimp export/import-search bar since it doesn't support custom shortcuts. I suggest you open your addon's Minecraft resource pack folder in Gimp and drag and drop the item sprite into Gimp.

If you have the item sprite ready in Gimp, go to the top bar and select `Colors`. Then go to button `Levels`, which says `Adjust color levels` when you hover over it. A new screen will pop up, the same as seen in the picture below. Change the channel to `Alpha` and then adjust the level (next to `Clamp output`) to 1, as seen in the example below.

![](/assets/images/tutorials/custom-item-models/drill-opacity.png)

Gimp doesn't let you usually save the picture as a png when pressing `Ctrl+S`, so you'll have to export it. To do this, go to the top bar and select `File`. There you can either choose `Overwrite <your picture_name.png>`, which will automatically export and save it in the same name and same format (which should be `.png`) and overwrite the item sprite you imported. Or you can choose `Export as ...`, which lets you select the location you want to save it in and the name you save it as. Again, make sure it saves as a `.png` format since this format supports transparent backgrounds and translucent pixels.

### The Files

Here you can find the final `player.entity.json` file, render controllers, animations, as well as a download link to the pack.

<CodeHeader>RP/entity/player.entity.json</CodeHeader>

```json
{
	"format_version": "1.10.0",
	"minecraft:client_entity": {
		"description": {
			"identifier": "minecraft:player",
			"materials": {
				"default": "entity_alphatest",
				"cape": "entity_alphatest",
				"animated": "player_animated"
			},
			"textures": {
				"default": "textures/entity/steve",
				"cape": "textures/entity/cape_invisible",
				"drill": "textures/items/models/drill"
			},
			"geometry": {
				"default": "geometry.humanoid.custom",
				"cape": "geometry.cape",
				"drill": "geometry.drill"
			},
			"scripts": {
				"scale": 0.9375,
				"initialize": [
					"variable.is_holding_right = 0.0;",
					"variable.is_blinking = 0.0;",
					"variable.last_blink_time = 0.0;",
					"variable.hand_bob = 0.0;"
				],
				"pre_animation": [
					"variable.helmet_layer_visible = 1.0;",
					"variable.leg_layer_visible = 1.0;",
					"variable.boot_layer_visible = 1.0;",
					"variable.chest_layer_visible = 1.0;",
					"variable.attack_body_rot_y = Math.sin(360*Math.sqrt(variable.attack_time)) * 5.0;",
					"variable.tcos0 = (math.cos(query.modified_distance_moved * 38.17) * query.modified_move_speed / variable.gliding_speed_value) * 57.3;",
					"variable.first_person_rotation_factor = math.sin((1 - variable.attack_time) * 180.0);",
					"variable.hand_bob = query.life_time < 0.01 ? 0.0 : variable.hand_bob + ((query.is_on_ground && query.is_alive ? math.clamp(math.sqrt(math.pow(query.position_delta(0), 2.0) + math.pow(query.position_delta(2), 2.0)), 0.0, 0.1) : 0.0) - variable.hand_bob) * 0.02;",
					"variable.map_angle = math.clamp(1 - variable.player_x_rotation / 45.1, 0.0, 1.0);",
					"variable.item_use_normalized = query.main_hand_item_use_duration / query.main_hand_item_max_duration;",
					"variable.drill = query.get_equipped_item_name('main_hand') == 'drill';"
				],
				"animate": [
					"root",
					{
						"drill": "variable.drill"
					},
					{
						"drill_first_person": "variable.drill && variable.is_first_person"
					}
				]
			},
			"animations": {
				"root": "controller.animation.player.root",
				"base_controller": "controller.animation.player.base",
				"hudplayer": "controller.animation.player.hudplayer",
				"humanoid_base_pose": "animation.humanoid.base_pose",
				"look_at_target": "controller.animation.humanoid.look_at_target",
				"look_at_target_ui": "animation.player.look_at_target.ui",
				"look_at_target_default": "animation.humanoid.look_at_target.default",
				"look_at_target_gliding": "animation.humanoid.look_at_target.gliding",
				"look_at_target_swimming": "animation.humanoid.look_at_target.swimming",
				"look_at_target_inverted": "animation.player.look_at_target.inverted",
				"cape": "animation.player.cape",
				"move.arms": "animation.player.move.arms",
				"move.legs": "animation.player.move.legs",
				"swimming": "animation.player.swim",
				"swimming.legs": "animation.player.swim.legs",
				"riding.arms": "animation.player.riding.arms",
				"riding.legs": "animation.player.riding.legs",
				"holding": "animation.player.holding",
				"brandish_spear": "animation.humanoid.brandish_spear",
				"charging": "animation.humanoid.charging",
				"attack.positions": "animation.player.attack.positions",
				"attack.rotations": "animation.player.attack.rotations",
				"sneaking": "animation.player.sneaking",
				"bob": "animation.player.bob",
				"damage_nearby_mobs": "animation.humanoid.damage_nearby_mobs",
				"bow_and_arrow": "animation.humanoid.bow_and_arrow",
				"fishing_rod": "animation.humanoid.fishing_rod",
				"use_item_progress": "animation.humanoid.use_item_progress",
				"skeleton_attack": "animation.skeleton.attack",
				"sleeping": "animation.player.sleeping",
				"first_person_base_pose": "animation.player.first_person.base_pose",
				"first_person_empty_hand": "animation.player.first_person.empty_hand",
				"first_person_swap_item": "animation.player.first_person.swap_item",
				"first_person_attack_controller": "controller.animation.player.first_person_attack",
				"first_person_attack_rotation": "animation.player.first_person.attack_rotation",
				"first_person_vr_attack_rotation": "animation.player.first_person.vr_attack_rotation",
				"first_person_walk": "animation.player.first_person.walk",
				"first_person_map_controller": "controller.animation.player.first_person_map",
				"first_person_map_hold": "animation.player.first_person.map_hold",
				"first_person_map_hold_attack": "animation.player.first_person.map_hold_attack",
				"first_person_map_hold_off_hand": "animation.player.first_person.map_hold_off_hand",
				"first_person_map_hold_main_hand": "animation.player.first_person.map_hold_main_hand",
				"first_person_crossbow_equipped": "animation.player.first_person.crossbow_equipped",
				"third_person_crossbow_equipped": "animation.player.crossbow_equipped",
				"third_person_bow_equipped": "animation.player.bow_equipped",
				"crossbow_hold": "animation.player.crossbow_hold",
				"crossbow_controller": "controller.animation.player.crossbow",
				"shield_block_main_hand": "animation.player.shield_block_main_hand",
				"shield_block_off_hand": "animation.player.shield_block_off_hand",
				"blink": "controller.animation.persona.blink",
				"drill": "animation.drill.hold",
				"drill_first_person": "animation.drill.first_person.hold"
			},
			"render_controllers": [
				{
					"controller.render.player.first_person": "variable.is_first_person"
				},
				{
					"controller.render.player.third_person": "!variable.is_first_person && !variable.map_face_icon"
				},
				{
					"controller.render.player.map": "variable.map_face_icon"
				},
				{
					"controller.render.drill": "variable.drill"
				}
			],
			"enable_attachables": true
		}
	}
}
```

<CodeHeader>RP/render_controllers/drill.render_controllers.json</CodeHeader>

```json
{
	"format_version": "1.8.0",
	"render_controllers": {
		"controller.render.drill": {
			"textures": ["Texture.drill"],
			"geometry": "Geometry.drill",
			"materials": [
				{
					"*": "Material.default"
				}
			]
		}
	}
}
```

<CodeHeader>animations/drill.animation.json</CodeHeader>

```json
{
	"format_version": "1.8.0",
	"animations": {
		"animation.drill.hold": {
			"loop": true,
			"bones": {
				"rotator": {
					"rotation": [0, 0, "query.anim_time * 850"]
				},
				"inner_rotor": {
					"rotation": [0, 0, "query.anim_time * -950"]
				}
			}
		},
		"animation.drill.first_person.hold": {
			"loop": true,
			"bones": {
				"drill": {
					"rotation": [87.5, 52.5, -7.5],
					"position": [0, 7, 0]
				}
			}
		}
	}
}
```

<CodeHeader>RP/models/entity/drill.geo.json</CodeHeader>

```json
{
	"format_version": "1.12.0",
	"minecraft:geometry": [
		{
			"description": {
				"identifier": "geometry.drill",
				"texture_width": 32,
				"texture_height": 32,
				"visible_bounds_width": 3,
				"visible_bounds_height": 3,
				"visible_bounds_offset": [0, 0, 0]
			},
			"bones": [
				{
					"name": "root",
					"pivot": [0, 0, 0]
				},
				{
					"name": "waist",
					"parent": "root",
					"pivot": [0, 12, 0]
				},
				{
					"name": "body",
					"parent": "waist",
					"pivot": [0, 24, 0]
				},
				{
					"name": "head",
					"parent": "body",
					"pivot": [0, 24, 0]
				},
				{
					"name": "hat",
					"parent": "head",
					"pivot": [0, 24, 0]
				},
				{
					"name": "cape",
					"parent": "body",
					"pivot": [0, 24, 3]
				},
				{
					"name": "leftArm",
					"parent": "body",
					"pivot": [5, 22, 0]
				},
				{
					"name": "leftSleeve",
					"parent": "leftArm",
					"pivot": [5, 22, 0]
				},
				{
					"name": "leftItem",
					"parent": "leftArm",
					"pivot": [6, 15, 1]
				},
				{
					"name": "rightArm",
					"parent": "body",
					"pivot": [-5, 22, 0]
				},
				{
					"name": "rightSleeve",
					"parent": "rightArm",
					"pivot": [-5, 22, 0]
				},
				{
					"name": "rightItem",
					"parent": "rightArm",
					"pivot": [-6, 15, 1],
					"locators": {
						"lead_hold": [-6, 15, 1]
					}
				},
				{
					"name": "drill",
					"parent": "rightArm",
					"pivot": [-7.55, 8.95, 2.25],
					"cubes": [
						{
							"origin": [-8.55, 3.95, -2.75],
							"size": [6, 6, 6],
							"uv": [0, 0]
						}
					]
				},
				{
					"name": "rotator",
					"parent": "drill",
					"pivot": [-5.55, 6.95, -2.75],
					"cubes": [
						{
							"origin": [-7.55, 4.95, -7.75],
							"size": [4, 4, 5],
							"uv": [0, 12]
						}
					]
				},
				{
					"name": "inner_rotor",
					"parent": "drill",
					"pivot": [-5.55, 6.95, -7.75],
					"cubes": [
						{
							"origin": [-6.55, 5.95, -11.75],
							"size": [2, 2, 4],
							"uv": [18, 0]
						}
					]
				},
				{
					"name": "handle",
					"parent": "drill",
					"pivot": [-8.05, 14.95, 2.25],
					"cubes": [
						{
							"origin": [-6.05, 9.95, 2.25],
							"size": [1, 2, 1],
							"uv": [0, 0]
						},
						{
							"origin": [-6.05, 11.95, -2.75],
							"size": [1, 1, 6],
							"uv": [12, 15]
						},
						{
							"origin": [-6.05, 9.95, -2.75],
							"size": [1, 2, 1],
							"uv": [0, 3]
						}
					]
				},
				{
					"name": "jacket",
					"parent": "body",
					"pivot": [0, 24, 0]
				},
				{
					"name": "leftLeg",
					"parent": "root",
					"pivot": [1.9, 12, 0]
				},
				{
					"name": "leftPants",
					"parent": "leftLeg",
					"pivot": [1.9, 12, 0]
				},
				{
					"name": "rightLeg",
					"parent": "root",
					"pivot": [-1.9, 12, 0]
				},
				{
					"name": "rightPants",
					"parent": "rightLeg",
					"pivot": [-1.9, 12, 0]
				}
			]
		}
	]
}
```

Pack download link: [Link](https://wiki.bedrock.dev/assets/packs/tutorials/custom-item-models/CustomItemModels.mcaddon)

## Attachable Based 3D Item Models

### Concept & Idea

1.16.210.5 is the first release in which attachables in player hand slots work correctly. When combined with custom block geometry, we can leverage this to create a minimal-compromises 3D item.

:::warning
Parts of this tutorial currently require that experimental features are enabled due to the presence of custom blocks. Do note that these are entirely optional, and you may use this method to create a custom item with an item sprite, similarly to what is described in the above tutorial. However, an advantage here is that it will not be necessary to remove the alpha layer of the item texture. This will allow for the dropped item and item frame visibility.
:::

### The "Item"

The item, in this case, is a custom block. We'll define this in our behavior pack. Note that this concept can be applied to vanilla items as well. You'll need to define your attachable to utilize the vanilla item. We'll construct the block definition in the blocks folder of our behavior pack as follows:

<CodeHeader>BP/blocks/_your_item_.json</CodeHeader>

```json
{
	"format_version": "1.16.200",
	"minecraft:block": {
		"description": {
			"identifier": "<your_namespace>:<your_item>" //arbitrary namespace and item name
		},
		"components": {
			"minecraft:material_instances": {
				"*": {
					"texture": "<texture_short>", //defined texture shortname, which we'll later add to terrain_texture.json
					"render_method": "<opaque|alpha_test|blend|double_sided>", //block model material type
					"face_dimming": false, //optional to make the item appear more like Java
					"ambient_occlusion": false //optional to make item appear more like java
				}
			},
			"tag:geysercmd:example_block": {},
			"minecraft:geometry": "geometry.<your_item>",
			"minecraft:placement_filter": {
				//optional to ensure our block behaves like an item and is unplaceable
				"conditions": [
					{
						"allowed_faces": [],
						"block_filter": []
					}
				]
			}
		}
	}
}
```

In the above example, we define our block, texture, render method and geometry. We also apply a conditional placement filter to ensure our block behaves like an item and cannot be placed. If this is not desired, simply omit this component.

### Geometry

Unlike the above tutorial, the geometry structure is entity agnostic. Nonetheless, there are still some special notes to allow this to work properly. First, take careful note that we are utilizing the 1.16.0 geometry format. This is important as it will allow us to define a binding expression with a Molang query. This will effectively treat our model as though it is parented to a given bone in the entity to which it is attached. We will define our geometry in the following form:

<CodeHeader>RP/models/blocks/_your_item_.geo.json</CodeHeader>

```json
{
	"format_version": "1.16.0", //note we are on format version 1.16.0
	"minecraft:geometry": [
		{
			"description": {
				"identifier": "geometry.<your_item>", // this uses the same geometry we defined for the block previously
				"texture_width": 16,
				"texture_height": 16,
				"visible_bounds_width": 4,
				"visible_bounds_height": 4.5,
				"visible_bounds_offset": [0, 0.75, 0]
			},
			"bones": [
				{
					"name": "root",
					//this is what will ensure that we bind to the correct slot
					//currently, q.item_slot_to_bone_name only returns hand slots
					//therefore, we must build in a special case if we'd like our item to be useable in the head slot
					"binding": "c.item_slot == 'head' ? 'head' : q.item_slot_to_bone_name(c.item_slot)",
					"pivot": [0, 8, 0]
				},
				{
					"name": "root_x", //we define these extra bones for x, y, & z axes to make applying pseudo-display settings easier
					"parent": "root",
					"pivot": [0, 8, 0]
				},
				{
					"name": "root_y",
					"parent": "root_x",
					"pivot": [0, 8, 0]
				},
				{
					"name": "root_z",
					"parent": "root_y",
					"pivot": [0, 8, 0],
					"cubes": ["<...>"] //cubes of our model
				}
			]
		}
	]
}
```

In the above geometry, you'll notice we've added particular bones for the x, y, and z-axis. These are placed here for the animation. Having separate rotational axes will make it easier to apply animations similar to how Java Edition uses display settings. Another important note for those who utilize individual cube rotations: these are not currently supported by custom block geometry, as the pivots are not correctly applied. If you would like the block portion to render correctly, please use bones for all rotation.

### Attachable Definition

Next, we'll define our attachable. This can be done as follows:

<CodeHeader>RP/attachables/_your_item_.json</CodeHeader>

```json
{
	"format_version": "1.10.0",
	"minecraft:attachable": {
		"description": {
			//ensure this is the same as the block you defined
			//this will ensure the default block geometry is hidden
			"identifier": "<your_namespace>:<your_item>",
			"materials": {
				"default": "entity_alphatest",
				//this is needed because we are using the item_default render controller
				//this would also be useable if were overriding an echantable item
				"enchanted": "entity_alphatest_glint"
			},
			"textures": {
				"default": "textures/blocks/<your_texture>", //full path to your texture
				"enchanted": "textures/misc/enchanted_item_glint"
			},
			"geometry": {
				"default": "geometry.<your_item>" //same geometry as specified in the block definition
			},
			"scripts": {
				"pre_animation": [
					//define a variable to check when our item is in the main hand via the context variable of the attachable
					"v.main_hand = c.item_slot == 'main_hand';",
					//define a variable to check when our item is in the off hand via the context variable of the attachable
					"v.off_hand = c.item_slot == 'off_hand';",
					//define a variable to check when our item is in the head slot via the context variable of the attachable
					"v.head = c.item_slot == 'head';"
					//in theory, you could obviously apply this to any slot
					//I've chosen these because they are what java displays 3D items in
				],
				"animate": [
					//thirdperson_main_hand pseudo display setting defined when we're in the main hand slot but not first person
					{
						"thirdperson_main_hand": "v.main_hand && !c.is_first_person"
					},
					//thirdperson_off_hand pseudo display setting defined when we're in the off-hand slot but not first person
					{
						"thirdperson_off_hand": "v.off_hand && !c.is_first_person"
					},
					//thirdperson_head pseudo display setting defined when we're in the head slot hand but not first person
					{ "thirdperson_head": "v.head && !c.is_first_person" },
					//firstperson_main_hand pseudo display setting defined when we're in the main hand slot slot hand and are first person
					{
						"firstperson_main_hand": "v.main_hand && c.is_first_person"
					},
					//firstperson_off_hand pseudo display setting defined when we're in the off-hand slot hand and are first person
					{
						"firstperson_off_hand": "v.off_hand && c.is_first_person"
					},
					//firstperson_off_hand pseudo display setting defined when we're in the head hand slot hand and are first person
					{ "firstperson_head": "c.is_first_person && v.head" }
				]
			},
			"animations": {
				"thirdperson_main_hand": "animation.<your_item>.thirdperson_main_hand",
				"thirdperson_off_hand": "animation.<your_item>.thirdperson_off_hand",
				"thirdperson_head": "animation.<your_item>.head",
				"firstperson_main_hand": "animation.<your_item>.firstperson_main_hand",
				"firstperson_off_hand": "animation.<your_item>.firstperson_off_hand",
				//animation to disable our attachable in the first person, as not to obstruct player view
				//I attempted this via render controller, but I couldn't seem to get the render controller to acknowledge the attachable variables
				"firstperson_head": "animation.disable"
			},
			"render_controllers": [
				//we'll use the same render controller as the trident here, but you could define your own if you'd like
				"controller.render.item_default"
			]
		}
	}
}
```

There's a bit to unpack here. Firstly, it's important to note that we must use the same identifier for our attachable as our defined block. When we do this, we cause the automatically generated model that Minecraft would place in the right item/left item slot of our entity geometry to be hidden when this attachable is enabled. This is quite desirable, as previous methods of implementing custom items required removing the alpha layer of the defined item texture, which meant that the item would not have a visible sprite for item drops or in item frames. For our animation section, I've essentially set up a system to mimic Java's display settings. If this does not suit your needs, then feel free to define it however you'd like. Also, note that I'm using an animation to disable the first-person view in the player's case, as attempting to do so via render controller seemed to fail due to the pre-animation variable not being accessible.

### Animations

#### Display Animations

For animations, we'll be defining a separate animation for each pseudo-display setting. Here's an example:

<CodeHeader>RP/animations/_your_item_.animation.json</CodeHeader>

```json
{
	"format_version": "1.8.0",
	"animations": {
		"animation.<your_item>.thirdperson_main_hand": {
			"loop": true,
			"bones": {
				"root_x": {
					"rotation": [-19, 0, 0],
					"position": [-0, 2.25, 0.5]
				},
				"root_y": {
					"rotation": [0, -180, 0]
				},
				"root_z": {
					"rotation": [0, 0, 0]
				},
				"root": {
					"rotation": [90, 0, 0],
					"position": [0, 13, -3]
				}
			}
		},
		"animation.<your_item>.thirdperson_off_hand": {
			"loop": true,
			"bones": {
				"root_x": {
					"rotation": [-19, 0, 0],
					"position": [-0, 2.25, 0.5]
				},
				"root_y": {
					"rotation": [0, 180, 0]
				},
				"root_z": {
					"rotation": [0, 0, 0]
				},
				"root": {
					"rotation": [90, 0, 0],
					"position": [0, 13, -3]
				}
			}
		},
		"animation.<your_item>.head": {
			"loop": true,
			"bones": {
				"root_x": {
					"rotation": [-0, 0, 0],
					"position": [-0, 12.8125, 0],
					"scale": 1.125
				},
				"root_y": {
					"rotation": [0, -180, 0]
				},
				"root_z": {
					"rotation": [0, 0, 0]
				},
				"root": {
					"position": [0, 19.5, 0]
				}
			}
		},
		"animation.<your_item>.firstperson_main_hand": {
			"loop": true,
			"bones": {
				"root": {
					"rotation": [90, 60, -40],
					"position": [4, 10, 4],
					"scale": 1.5
				},
				"root_x": {
					"position": [-2.5, 5.5, -0],
					"rotation": [0.1, 0.1, 0.1]
				}
			}
		},
		"animation.<your_item>.firstperson_off_hand": {
			"loop": true,
			"bones": {
				"root": {
					"rotation": [90, 60, -40],
					"position": [4, 10, 4],
					"scale": 1.5
				},
				"root_x": {
					"position": [3, 6, -0],
					"rotation": [0.1, 0.1, 0.1]
				}
			}
		}
	}
}
```

Above, we are essentially defining display settings as we would on Java. However, we must account for the translational and axial differences of bedrock. The above settings are unlikely to work for your model, as obviously the proper display settings will depend on the model. Optionally, I've written a jq filter that can effectively translate input Java display settings to a Bedrock animation. You may access it [here](https://jqterm.com/1966ea34bd01c98494579645ff4aa5d9?query=%22CHANGE_ME%22%20as%20%24model_name%20%7C%0A%0A%7B%0A%20%20%20%20%09%22format_version%22%3A%20%221.8.0%22%2C%0A%20%20%20%20%09%22animations%22%3A%20%7B%0A%20%20%20%20%09%09%28%22animation.%22%20%2B%20%28%24model_name%29%20%2B%20%22.thirdperson_main_hand%22%29%3A%20%7B%0A%20%20%20%20%09%09%09%22loop%22%3A%20true%2C%0A%20%20%20%20%09%09%09%22bones%22%3A%20%7B%0A%20%20%20%20%09%09%09%09%22root_x%22%3A%20%28if%20.display.thirdperson_righthand%20then%20%7B%0A%20%20%20%20%09%09%09%09%09%22rotation%22%3A%20%28if%20.display.thirdperson_righthand.rotation%20then%20%5B%28-%20.display.thirdperson_righthand.rotation%5B0%5D%29%2C%200%2C%200%5D%20else%20null%20end%29%2C%0A%20%20%20%20%09%09%09%09%09%22position%22%3A%20%28if%20.display.thirdperson_righthand.translation%20then%20%5B%28-%20.display.thirdperson_righthand.translation%5B0%5D%29%2C%20%28.display.thirdperson_righthand.translation%5B1%5D%29%2C%20%28.display.thirdperson_righthand.translation%5B2%5D%29%5D%20else%20null%20end%29%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22scale%22%3A%20%28if%20.display.thirdperson_righthand.scale%20then%20%5B%28.display.thirdperson_righthand.scale%5B0%5D%29%2C%20%28.display.thirdperson_righthand.scale%5B1%5D%29%2C%20%28.display.thirdperson_righthand.scale%5B2%5D%29%5D%20else%20null%20end%29%0A%20%20%20%20%09%09%09%09%7D%20else%20null%20end%29%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22root_y%22%3A%20%28if%20.display.thirdperson_righthand.rotation%20then%20%7B%0A%20%20%20%20%09%09%09%09%09%20%22rotation%22%3A%20%28if%20.display.thirdperson_righthand.rotation%20then%20%5B0%2C%20%28-%20.display.thirdperson_righthand.rotation%5B1%5D%29%2C%200%5D%20else%20null%20end%29%0A%20%20%20%20%09%09%09%09%7D%20else%20null%20end%29%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22root_z%22%3A%20%28if%20.display.thirdperson_righthand.rotation%20then%20%7B%0A%20%20%20%20%09%09%09%09%20%20%20%22rotation%22%3A%20%5B0%2C%200%2C%20%28.display.thirdperson_righthand.rotation%5B2%5D%29%5D%0A%20%20%20%20%09%09%09%09%7D%20else%20null%20end%29%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22root%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22rotation%22%3A%20%5B90%2C%200%2C%200%5D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22position%22%3A%20%5B0%2C%2013%2C%20-3%5D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%09%09%09%7D%0A%20%20%20%20%09%09%7D%2C%0A%20%20%20%20%20%20%20%20%28%22animation.%22%20%2B%20%28%24model_name%29%20%2B%20%22.thirdperson_off_hand%22%29%3A%20%7B%0A%20%20%20%20%09%09%09%22loop%22%3A%20true%2C%0A%20%20%20%20%09%09%09%22bones%22%3A%20%7B%0A%20%20%20%20%09%09%09%09%22root_x%22%3A%20%28if%20.display.thirdperson_lefthand%20then%20%7B%0A%20%20%20%20%09%09%09%09%09%22rotation%22%3A%20%28if%20.display.thirdperson_lefthand.rotation%20then%20%5B%28-%20.display.thirdperson_lefthand.rotation%5B0%5D%29%2C%200%2C%200%5D%20else%20null%20end%29%2C%0A%20%20%20%20%09%09%09%09%09%22position%22%3A%20%28if%20.display.thirdperson_lefthand.translation%20then%20%5B%28-%20.display.thirdperson_lefthand.translation%5B0%5D%29%2C%20%28.display.thirdperson_lefthand.translation%5B1%5D%29%2C%20%28.display.thirdperson_lefthand.translation%5B2%5D%29%5D%20else%20null%20end%29%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22scale%22%3A%20%28if%20.display.thirdperson_lefthand.scale%20then%20%5B%28.display.thirdperson_lefthand.scale%5B0%5D%29%2C%20%28.display.thirdperson_lefthand.scale%5B1%5D%29%2C%20%28.display.thirdperson_lefthand.scale%5B2%5D%29%5D%20else%20null%20end%29%0A%20%20%20%20%09%09%09%09%7D%20else%20null%20end%29%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22root_y%22%3A%20%28if%20.display.thirdperson_lefthand.rotation%20then%20%7B%0A%20%20%20%20%09%09%09%09%09%20%22rotation%22%3A%20%28if%20.display.thirdperson_lefthand.rotation%20then%20%5B0%2C%20%28-%20.display.thirdperson_lefthand.rotation%5B1%5D%29%2C%200%5D%20else%20null%20end%29%0A%20%20%20%20%09%09%09%09%7D%20else%20null%20end%29%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22root_z%22%3A%20%28if%20.display.thirdperson_lefthand.rotation%20then%20%7B%0A%20%20%20%20%09%09%09%09%20%20%20%22rotation%22%3A%20%5B0%2C%200%2C%20%28.display.thirdperson_lefthand.rotation%5B2%5D%29%5D%0A%20%20%20%20%09%09%09%09%7D%20else%20null%20end%29%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22root%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22rotation%22%3A%20%5B90%2C%200%2C%200%5D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22position%22%3A%20%5B0%2C%2013%2C%20-3%5D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%09%09%09%7D%0A%20%20%20%20%09%09%7D%2C%0A%20%20%20%20%20%20%20%20%28%22animation.%22%20%2B%20%28%24model_name%29%20%2B%20%22.head%22%29%3A%20%7B%0A%20%20%20%20%09%09%09%22loop%22%3A%20true%2C%0A%20%20%20%20%09%09%09%22bones%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22root_x%22%3A%20%7B%0A%20%20%20%20%09%09%09%09%09%22rotation%22%3A%20%28if%20.display.head.rotation%20then%20%5B%28-%20.display.head.rotation%5B0%5D%29%2C%200%2C%200%5D%20else%20null%20end%29%2C%0A%20%20%20%20%09%09%09%09%09%22position%22%3A%20%28if%20.display.head.translation%20then%20%5B%28-%20.display.head.translation%5B0%5D%20*%200.625%29%2C%20%28.display.head.translation%5B1%5D%20*%200.625%29%2C%20%28.display.head.translation%5B2%5D%20*%200.625%29%5D%20else%20null%20end%29%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22scale%22%3A%20%28if%20.display.head.scale%20then%20%28.display.head.scale%20%7C%20map%28.%20*%200.625%29%29%20else%200.625%20end%29%0A%20%20%20%20%09%09%09%09%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22root_y%22%3A%20%28if%20.display.head.rotation%20then%20%7B%0A%20%20%20%20%09%09%09%09%09%22rotation%22%3A%20%5B0%2C%20%28-%20.display.head.rotation%5B1%5D%29%2C%200%5D%0A%20%20%20%20%09%09%09%09%7D%20else%20null%20end%29%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22root_z%22%3A%20%28if%20.display.head.rotation%20then%20%7B%0A%20%20%20%20%09%09%09%09%09%22rotation%22%3A%20%5B0%2C%200%2C%20%28.display.head.rotation%5B2%5D%29%5D%0A%20%20%20%20%09%09%09%09%7D%20else%20null%20end%29%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22root%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22position%22%3A%20%5B0%2C%2019.5%2C%200%5D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%09%09%09%7D%0A%20%20%20%20%09%09%7D%2C%0A%20%20%20%20%20%20%20%20%28%22animation.%22%20%2B%20%28%24model_name%29%20%2B%20%22.firstperson_main_hand%22%29%3A%20%7B%0A%20%20%20%20%09%09%09%22loop%22%3A%20true%2C%0A%20%20%20%20%09%09%09%22bones%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22root%22%3A%20%7B%0A%20%20%20%20%09%09%09%09%09%22rotation%22%3A%20%5B90%2C%2060%2C%20-40%5D%2C%0A%20%20%20%20%09%09%09%09%09%22position%22%3A%20%5B4%2C%2010%2C%204%5D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22scale%22%3A%201.5%0A%20%20%20%20%09%09%09%09%7D%2C%0A%20%20%20%20%09%09%09%09%22root_x%22%3A%20%7B%0A%20%20%20%20%09%09%09%09%09%22position%22%3A%20%28if%20.display.firstperson_righthand.translation%20then%20%5B%28-%20.display.firstperson_righthand.translation%5B0%5D%29%2C%20%28.display.firstperson_righthand.translation%5B1%5D%29%2C%20%28-%20.display.firstperson_righthand.translation%5B2%5D%29%5D%20else%20null%20end%29%2C%0A%20%20%20%20%09%09%09%09%09%22rotation%22%3A%20%28if%20.display.firstperson_righthand.rotation%20then%20%5B%28-%20.display.firstperson_righthand.rotation%5B0%5D%29%2C%200%2C%200%5D%20else%20%5B0.1%2C%200.1%2C%200.1%5D%20end%29%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22scale%22%3A%20%28if%20.display.firstperson_righthand.scale%20then%20%28.display.firstperson_righthand.scale%29%20else%20null%20end%29%0A%20%20%20%20%09%09%09%09%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22root_y%22%3A%20%28if%20.display.firstperson_righthand.rotation%20then%20%7B%0A%20%20%20%20%09%09%09%09%09%22rotation%22%3A%20%5B0%2C%20%28-%20.display.firstperson_righthand.rotation%5B1%5D%29%2C%200%5D%0A%20%20%20%20%09%09%09%09%7D%20else%20null%20end%29%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22root_z%22%3A%20%28if%20.display.firstperson_righthand.rotation%20then%20%7B%0A%20%20%20%20%09%09%09%09%09%22rotation%22%3A%20%5B0%2C%200%2C%20%28.display.firstperson_righthand.rotation%5B2%5D%29%5D%0A%20%20%20%20%09%09%09%09%7D%20else%20null%20end%29%0A%20%20%20%20%09%09%09%7D%0A%20%20%20%20%09%09%7D%2C%0A%20%20%20%20%09%09%28%22animation.%22%20%2B%20%28%24model_name%29%20%2B%20%22.firstperson_off_hand%22%29%3A%20%7B%0A%20%20%20%20%09%09%09%22loop%22%3A%20true%2C%0A%20%20%20%20%09%09%09%22bones%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22root%22%3A%20%7B%0A%20%20%20%20%09%09%09%09%09%22rotation%22%3A%20%5B90%2C%2060%2C%20-40%5D%2C%0A%20%20%20%20%09%09%09%09%09%22position%22%3A%20%5B4%2C%2010%2C%204%5D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22scale%22%3A%201.5%0A%20%20%20%20%09%09%09%09%7D%2C%0A%20%20%20%20%09%09%09%09%22root_x%22%3A%20%7B%0A%20%20%20%20%09%09%09%09%09%22position%22%3A%20%28if%20.display.firstperson_lefthand.translation%20then%20%5B%28.display.firstperson_lefthand.translation%5B0%5D%29%2C%20%28.display.firstperson_lefthand.translation%5B1%5D%29%2C%20%28-%20.display.firstperson_lefthand.translation%5B2%5D%29%5D%20else%20null%20end%29%2C%0A%20%20%20%20%09%09%09%09%09%22rotation%22%3A%20%28if%20.display.firstperson_lefthand.rotation%20then%20%5B%28-%20.display.firstperson_lefthand.rotation%5B0%5D%29%2C%200%2C%200%5D%20else%20%5B0.1%2C%200.1%2C%200.1%5D%20end%29%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22scale%22%3A%20%28if%20.display.firstperson_lefthand.scale%20then%20%28.display.firstperson_lefthand.scale%29%20else%20null%20end%29%0A%20%20%20%20%09%09%09%09%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22root_y%22%3A%20%28if%20.display.firstperson_lefthand.rotation%20then%20%7B%0A%20%20%20%20%09%09%09%09%09%22rotation%22%3A%20%5B0%2C%20%28-%20.display.firstperson_lefthand.rotation%5B1%5D%29%2C%200%5D%0A%20%20%20%20%09%09%09%09%7D%20else%20null%20end%29%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22root_z%22%3A%20%28if%20.display.firstperson_lefthand.rotation%20then%20%7B%0A%20%20%20%20%09%09%09%09%09%22rotation%22%3A%20%5B0%2C%200%2C%20%28.display.firstperson_lefthand.rotation%5B2%5D%29%5D%0A%20%20%20%20%09%09%09%09%7D%20else%20null%20end%29%0A%20%20%20%20%09%09%09%7D%0A%20%20%20%20%09%09%7D%0A%20%20%20%20%09%7D%0A%20%20%20%20%7D%20%7C%20walk%28%20if%20type%20%3D%3D%20%22object%22%20then%20with_entries%28select%28.value%20!%3D%20null%29%29%20else%20.%20end%29) This filter assumes the pivot of root is `[0, 8, 0]`, and therefore is the point from which display settings will be applied.

#### Disabling via Animations

To ensure our attachable does not display in the first person, we will apply a disabling animation. This can take the following form:

<CodeHeader>RP/animations/disable.animation.json</CodeHeader>

```json
{
	"format_version": "1.8.0",
	"animations": {
		"animation.disable": {
			"loop": true,
			"override_previous_animation": true,
			"bones": {
				"root": {
					"scale": 0
				}
			}
		}
	}
}
```

### Texts

We will also apply a simple lang file to allow our item to be displayed with a properly formatted name. Simply follow the format:

<CodeHeader>RP/texts/_country_\__language_.lang</CodeHeader>

```
tile.<your_namespace>:<your_item>.name=Your Displayed Name
```

This assumes you utilized blocks. If you utilize items instead, simply use "item" instead of "tile".

### Textures

There are no special requirements regarding the construction of our texture beyond it being a single texture. We need only define a shortname for it in `terrain_texture.json` so that our defined block may access the full texture through the shortname. We do so as follows:

<CodeHeader>RP/textures/terrain_texture.json</CodeHeader>

```json
{
	"resource_pack_name": "vanilla",
	"texture_name": "atlas.terrain",
	"padding": 8,
	"num_mip_levels": 4,
	"texture_data": {
		"<texture_short>": {
			//your defined texture shortname
			"textures": "textures/blocks/<your_texture>" //full path to your texture
		}
	}
}
```

### Obtaining the Item

To obtain the item, simply use the give command: `/give @p <your_namespace>:<your_item>`
In order to place the item in the head slot: `/replaceitem entity @p slot.armor.head 0 <your_namespace>:<your_item>`

## Example Pack Download

![](/assets/images/tutorials/custom-item-models/hat_attachable.png)

Pack download link: [Link](https://wiki.bedrock.dev/assets/packs/tutorials/custom-item-models/CustomItemModels_attachable.mcaddon)
