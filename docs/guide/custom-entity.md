---
title: 'Create a custom Entity'
category: Guide
nav_order: 6
prefix: '6. '
---

Last time you created a custom item for this custom entity to drop. This time you will create the Ghost itself, as promised.

<br>
<img src="/assets/images/guide/custom_entity/ghost_view.png" width=150>

## Behavior code

Just like with items, the main files of a custom entity are its RP and BP files. We'll start with the latter in the `BP/entities/` folder:
(the `.se` suffix after the entity's name specifies that this JSON is a server entity file. The game will ignore the part after the first `"."`, so it can be used to describe the type of this file. Recommended in the [Style Guide](/meta/style-guide)).

<CodeHeader>BP/entities/ghost.se.json</CodeHeader>

```json
{
	"format_version": "1.16.0",
	"minecraft:entity": {
		"description": {
			"identifier": "wiki:ghost",
			"is_summonable": true,
			"is_spawnable": true,
			"is_experimental": false
		},
		"components": {
			"minecraft:type_family": { "family": ["ghost", "monster"] },
			"minecraft:jump.static": {},
			"minecraft:can_climb": {},
			"minecraft:physics": {},
			"minecraft:movement.basic": {},
			"minecraft:loot": { "table": "loot_tables/entities/ghost.json" },
			"minecraft:health": { "value": 20, "max": 20 },
			"minecraft:collision_box": { "width": 1, "height": 2 },
			"minecraft:movement": { "value": 0.2 },
			"minecraft:behavior.delayed_attack": {
				"priority": 0,
				"attack_once": false,
				"track_target": true,
				"require_complete_path": false,
				"random_stop_interval": 0,
				"reach_multiplier": 1.5,
				"speed_multiplier": 1,
				"attack_duration": 0.75,
				"hit_delay_pct": 0.5
			},
			"minecraft:navigation.walk": {
				"can_walk": true,
				"avoid_sun": true,
				"can_pass_doors": true,
				"can_open_doors": true
			},
			"minecraft:attack": { "damage": 3 },
			"minecraft:behavior.random_look_around": { "priority": 7 },
			"minecraft:behavior.hurt_by_target": { "priority": 1 },
			"minecraft:behavior.nearest_attackable_target": {
				"priority": 2,
				"within_radius": 25,
				"reselect_targets": true,
				"entity_types": [
					{
						"filters": {
							"any_of": [
								{
									"test": "is_family",
									"subject": "other",
									"value": "player"
								}
							]
						},
						"max_dist": 35
					}
				]
			},
			"minecraft:behavior.random_stroll": {
				"priority": 6,
				"speed_multiplier": 1
			},
			"minecraft:behavior.look_at_player": {
				"priority": 7,
				"look_distance": 6,
				"probability": 0.02
			}
		}
	}
}
```

-   You can already recognize parts of the file syntax from the custom item creation, such as `"format_version"` and `"description"/"identifier"`. We use the same _namespace_ in all the pack files. In our example case, the namespace is `wiki`. The entity's _id_ is `ghost`.
-   The other keys in `"description"` all take Booleans (`true` or `false`) as their values. These are: `"is_summonable"` (whether you can spawn the entity with a `/summon` command), `"is_spawnable"` (whether you can spawn one with a spawn egg or naturally), and `"is_experimental"` (whether you need to turn on [EX] (Experimental mode) in a world for this entity to exist). Set the options to `true`, `true` and `false` respectively. We do not need [EX].
-   The next section is `"components"`. Again, just like with items, components define the main traits of an entity. Let's go over every single one in this example:

    -   `"minecraft:type_family"` lists the _family tags_ of your custom entity. These are used to interact with other entities. For example, Wolves will attack all entities from the `sheep` and `cow` families, while Villagers will flee from entities from the `monster` family.
    -   `"minecraft:jump.static"` (the entity's jumps are of the static type), `"minecraft:can_climb"` (the entity can climb blocks), `"minecraft:physics"` (the entity is affected by gravity), `"minecraft:movement.basic"` (the entity's moves using basic patterns) all take nothing but an empty object `{}` as their values. This is because simply having an _attribute_ listed will ALWAYS apply its traits to the entity. There is a way to temporarily enable and disable attributes using _`component_groups`_ and _`events`_, but that's for later.
    -   `"minecraft_loot"` references a file in the pack, `"loot_tables/entities/ghost.json"` under its `"table"` key. That file defines what items the entity will drop upon death, and we will create it right after finishing the Ghost.
    -   `"minecraft:health"` gives the Ghost 20 health points, which are equivalent to 10 hearts in-game.
    -   `"minecraft:collision_box"` defines the size of the mob's hitbox in blocks.
    -   `"minecraft:movement"` is, of course, the movement speed.
    -   `"minecraft:behavior.delayed_attack"` is a _behavior attribute_, which allows the entity to execute some behavior patterns like, in this case, attacking. Its most important options are:
        -   `"priority"` is often seen in components. If a mob can execute two actions simultaneously, the lower behavior integer will get picked. `0` means the action is always preferred over everything else.
		
		<Spoiler title="Read more about entity behavior priority">

		Behaviors are components that make the entity do something. They are always in the form: `minecraft:behavior.*`.

		All behaviors contain a `"priority"` field. This field is used to decide when/how often the behavior will run.

		⚠️ In general, the more important behaviors should be lower, like 0, or 1.

		When the entity is picking something to do, it searches all its behaviors from lowest priority to the highest priority and picks the first one that it can do. For this reason, you need to make important behaviors like `minecraft:behavior.nearest_attackable_target` lower than behaviors like `minecraft:behavior.look_at_player`. If the `look_at_player` is lower, it will always run this first when the player is close, and the entity will never attack.

		</Spoiler>

        -   You can look up the rest of the options on the official Documentation, [bedrock.dev](https://bedrock.dev/docs/stable/Entities)
    -   `"minecraft:navigation.walk"` allows the mob to use its `"movement.basic"` goal and `"movement"` to navigate by walking. The options inside define if the mob should _avoid sun_, _pass doors_ and if it can _walk_ and _open doors_ itself.
    -   `"minecraft:attack"` / `"damage"` defines the amount of damage the mob deals upon an attack
    -   `"minecraft:behavior.random_look_around"` allows the mob to sometimes look around itself;
    -   `"minecraft:behavior.hurt_by_target"` makes the entity immediately choose the entity that damages/_hurts_ them as their target. For example, a Zombie Piglin will act this way.
    -   `"minecraft:behavior.nearest_attackable_target"` allows the mob to select targets itself (within the radius of 25) as a hostile mob. The `"filters"` in `"entity_type"` will make sure the target belongs to the `player` _family_ in our case, but you could also make it attack villagers, for example, by changing everything inside `" filters": {}` to

    <CodeHeader></CodeHeader>

    ```json
    "any_of": [
	    {
	        "test": "is_family",
	        "subject": "other",
	        "value": "player"
	    },
	    {
	        "test": "is_family",
	        "subject": "other",
	        "value": "villager"
	    }
	]
    ```

    -   `"minecraft:behavior.random_stroll"` makes the entity stroll around sometimes;
    -   And, finally, `"minecraft:behavior.look_at_player"` makes the entity follow the player with its head.

## Resource code

Again, just like with the item, a custom entity needs a resource file listing its model, texture, and animation names.
Note, here we named the file with a `.ce` suffix which stands for client entity.

<CodeHeader>RP/entity/ghost.ce.json</CodeHeader>

```json
{
	"format_version": "1.10.0",
	"minecraft:client_entity": {
		"description": {
			"identifier": "wiki:ghost",
			"materials": {
				"default": "entity_alphatest"
			},
			"textures": {
				"default": "textures/entity/ghost"
			},
			"geometry": {
				"default": "geometry.ghost"
			},
			"scripts": {
				"animate": ["walk_controller", "attack_controller"]
			},
			"animations": {
				"walk_controller": "controller.animation.ghost.walk",
				"attack_controller": "controller.animation.ghost.attack",
				"attack": "animation.ghost.attack",
				"idle": "animation.ghost.idle",
				"move": "animation.ghost.move"
			},
			"spawn_egg": {
				"overlay_color": "#bdd1d1",
				"base_color": "#9fb3b3"
			},
			"render_controllers": ["controller.render.ghost"]
		}
	}
}
```

Let's go over every single object in `"description"` , as usual:

-   `"identifier"` is, of course, the entity's `namespace:id`. This tells the game that this file belongs to the same entity as the one defined in `BP/entities/ghost.se.json`.
-   `"materials"` tell the game how to _render_ our entity. Depending on which material you choose, the translucent pixels on the texture might glow, be transparent, or have no effect. We assigned `entity_alphatest` the short name `default` (precisely like with item textures) to allow partly transparent textures, making sense for a ghost. Custom materials are also possible, but they're more complicated. (You can learn more about materials in general [here](/visuals/materials)).
-   `"textures"/"default"` is the path (relative to the RP folder) to the entity's texture. Like in `item_textures.json`, the `.png` extension can be ignored. Again, the texture path is assigned to the short name `"default"`. In some cases, like the Villager mob, you'd want to have multiple textures for the entity to switch between.
-   `"geometry"` takes the model's identifier as its value; note it for yourself, since we'll create the model itself in a moment. Again, `"default"` is the short name for that.
-   `"scripts"/"animate"` and `"animations"` control when animations are to be played with the help of _animation controllers_ and list them under their _shortnames_ respectively. Again, we'll come back to this once we have the animations ready.
-   `"spawn_egg"` automatically creates an item that will spawn the custom entity on use. It can look in two different ways: one of them can be seen here: both the `"overlay_color" ` and `"base_color"` are defined with [hex codes](https://www.w3schools.com/colors/colors_picker.asp) in the form of text. The other way would be changing the whole thing to

<CodeHeader></CodeHeader>

```json
 "spawn_egg": {
    "texture": "wiki.ectoplasm"
}
```

You can probably remember that `"wiki.ectoplasm"` is the short name of our custom item's texture. If you use this code snippet, the egg will use the same texture as the item instead of a procedurally generated traditional spawn egg.

-   And, finally, `"render_controllers"` lists one or more identifiers of render controllers, which control materials.

Our next step is creating the mentioned _render controller_ with the id `controller.render.ghost`. Since our Ghost's texture, model and materials always remain the same; the following code is quite simple. However, more advanced render controllers typically enable dynamic switching between these. You can learn more about render controllers [here](/visuals/entity-visuals-intro).

<CodeHeader>RP/render_controllers/entity/ghost.rc.json</CodeHeader>

```json
{
	"format_version": "1.10.0",
	"render_controllers": {
		"controller.render.ghost": {
			"geometry": "geometry.default",
			"materials": [
				{
					"*": "material.default"
				}
			],
			"textures": ["texture.default"]
		}
	}
}
```

The id of the only render controllers in this file is `"controller.render.ghost"`, which was referenced in the RP entity folder of the ghost (`RP/entity/ghost.e.json/"render_controllers"`). The code inside tells the game the geometry.

## Visuals

Now it's time to create the entity's visuals. An example model, texture, and animation are all already provided with this Guide, but you can learn how to create your own using _Blockbench_ [here](/guide/blockbench).

### Texture

Like items, the entity textures are simply `.png` files in `RP/textures/entity/`. However, unlike these, entity textures don't need a file equivalent to `item_textures.json`. Instead, their short names are defined in the entity's RP file (`RP/entity/ghost.ce.json` in our case). Usually, the short name for an entity's texture is set to `default`, just like in our example.

`RP/textures/entity/ghost.png`

![ectoplasm.png](https://raw.githubusercontent.com/Bedrock-OSS/wiki-addon/main/guide/guide_RP/textures/entity/ghost.png)

<BButton link="https://raw.githubusercontent.com/Bedrock-OSS/wiki-addon/main/guide/guide_RP/textures/entity/ghost.png">Download texture here</BButton>

### Model

'Model' means 'shape' or 'geometry'. Entity model JSON files are located in `RP/models/entity/` and, according to the [Style guide](/meta/style-guide), use the suffix `.geo`.
Before you take a look at a model's code, which holds data about the size, rotation, and position of every single _cube_ and _bone_, remember that there's no need to learn its syntax by hand: as mentioned above, model and animation files are all automatically generated by a dedicated 3D editor called [Blockbench](/guide/blockbench).
Please note that we have edited the output file for it to be a little bit more compact and easier to copy. A Blockbench output will look different from this.

<CodeHeader>RP/models/entity/ghost.geo.json</CodeHeader>

```json
{
	"format_version": "1.12.0",
	"minecraft:geometry": [
		{
			"description": {
				"identifier": "geometry.ghost",
				"texture_width": 64,
				"texture_height": 64,
				"visible_bounds_width": 3,
				"visible_bounds_height": 3.5,
				"visible_bounds_offset": [0, 1.25, 0]
			},
			"bones": [
				{ "name": "root", "pivot": [0, 3, 0] },
				{
					"name": "body",
					"parent": "root",
					"pivot": [0, 4.625, 0],
					"cubes": [
						{
							"origin": [-4, 3, -4],
							"size": [8, 13, 8],
							"uv": [0, 20]
						}
					]
				},
				{
					"name": "leftArm",
					"parent": "body",
					"pivot": [4.6, 15.5, 0.5],
					"cubes": [
						{
							"origin": [4.1, 7, -1],
							"size": [3, 9, 3],
							"uv": [32, 32]
						}
					]
				},
				{
					"name": "rightArm",
					"parent": "body",
					"pivot": [-4.5, 15.5, 0.5],
					"cubes": [
						{
							"origin": [-7.1, 7, -1],
							"size": [3, 9, 3],
							"uv": [32, 20]
						}
					]
				},
				{
					"name": "head",
					"parent": "body",
					"pivot": [0, 16, 0],
					"cubes": [
						{
							"origin": [-5, 16, -5],
							"size": [10, 10, 10],
							"uv": [0, 0]
						}
					]
				}
			]
		}
	]
}
```

The only important thing, pretty much, is the value of `"identifier"`, which is `"geometry.ghost"`. As you might remember, this same identifier is referenced in the Ghost's RP entity file, under `"geometry"`.

### Animations

Most of what was said for models is also true for animations. Here's the code you ought to copy to `RP/animations/ghost.a.json`. The suffix for resource animation files is `.a`.
Please note that we have edited the output file for it to be a little bit more compact and easier to copy. A Blockbench output will look different from this.

<CodeHeader>RP/animations/ghost.a.json</CodeHeader>

```json
{
	"format_version": "1.8.0",
	"animations": {
		"animation.ghost.idle": {
			"loop": true,
			"animation_length": 3,
			"bones": {
				"body": {
					"rotation": { "0.0": [10, 0, 0], "3.0": [10, 0, 0] },
					"position": {
						"0.0": [0, 0, 0],
						"1.5": [0, 1, 0],
						"3.0": [0, 0, 0]
					}
				},
				"leftArm": {
					"rotation": {
						"0.0": [-10, 0, 0],
						"1.5": [-5, 0, 0],
						"3.0": [-10, 0, 0]
					}
				},
				"rightArm": {
					"rotation": {
						"0.0": [-10, 0, 0],
						"1.5": [-5, 0, 0],
						"3.0": [-10, 0, 0]
					}
				},
				"head": {
					"rotation": {
						"0.0": [-7.5, 0, 0],
						"1.5": [-2.5, 0, 0],
						"3.0": [-7.5, 0, 0]
					}
				}
			}
		},
		"animation.ghost.attack": {
			"animation_length": 0.75,
			"bones": {
				"body": {
					"rotation": {
						"0.0": [10, 0, 0],
						"0.2917": [10, 15, 0],
						"0.5": [22.5, -12.5, 0],
						"0.75": [10, 0, 0]
					},
					"position": {
						"0.0": [0, 0, 0],
						"0.2917": [0, 0, 3],
						"0.5": [0, 0, -3],
						"0.75": [0, 0, 0]
					}
				},
				"leftArm": {
					"rotation": { "0.0": [-10, 0, 0], "0.75": [-10, 0, 0] }
				},
				"rightArm": {
					"rotation": {
						"0.0": [-10, 0, 0],
						"0.2083": [-10, 0, 0],
						"0.2917": [-10, 62.5, 117.5],
						"0.5": [-80, -17.5, 22.5],
						"0.75": [-10, 0, 0]
					}
				},
				"head": {
					"rotation": { "0.0": [-7.5, 0, 0], "0.75": [-7.5, 0, 0] }
				}
			}
		},
		"animation.ghost.move": {
			"loop": true,
			"animation_length": 1,
			"bones": {
				"body": {
					"rotation": {
						"0.0": [15, 0, 0],
						"0.25": [15, -2.5, 0],
						"0.5": [15, 0, 0],
						"0.75": [15, 2.5, 0],
						"1.0": [15, 0, 0]
					},
					"position": [0, 0, 0]
				},
				"leftArm": {
					"rotation": {
						"0.0": [15, 0, 0],
						"0.5": [20, 0, 0],
						"1.0": [15, 0, 0]
					}
				},
				"rightArm": {
					"rotation": {
						"0.0": [15, 0, 0],
						"0.5": [20, 0, 0],
						"1.0": [15, 0, 0]
					}
				},
				"head": {
					"rotation": {
						"0.0": [-12.5, 0, 0],
						"0.5": [-15, 0, 0],
						"1.0": [-12.5, 0, 0]
					}
				}
			}
		}
	}
}
```

Unlike the model's file, this one contains three animations for the Ghost, which are ` "animation.ghost.idle"` (which is an animation playing from time to time), `"animation.ghost.attack" ` and `"animation.ghost.move"` (quite self-explanatory). Their short names, as defined in the Ghost's RP entity file, are ` "idle"`, `"attack"` and `"move"` respectively.
Of course, feel free to open the files and check how the visuals look using Blockbench.

### Animation Controller

Approaching the end, we'll create our Animation Controller file, which will _control_ how the animations are played, as expected. The suffix for resource animation files is `.ac`.

<CodeHeader>RP/animation_controllers/ghost.ac.json</CodeHeader>

```json
{
	"format_version": "1.12.0",
	"animation_controllers": {
		"controller.animation.ghost.attack": {
			"states": {
				"default": {
					"transitions": [
						{
							"attacking": "query.is_delayed_attacking"
						}
					]
				},
				"attacking": {
					"blend_transition": 0.2,
					"animations": ["attack"],
					"transitions": [
						{
							"default": "!query.is_delayed_attacking"
						}
					]
				}
			}
		},
		"controller.animation.ghost.walk": {
			"initial_state": "standing",
			"states": {
				"standing": {
					"blend_transition": 0.2,
					"animations": ["idle"],
					"transitions": [
						{
							"moving": "query.modified_move_speed > 0.1"
						}
					]
				},
				"moving": {
					"blend_transition": 0.2,
					"animations": ["move"],
					"transitions": [
						{
							"standing": "query.modified_move_speed < 0.1"
						}
					]
				}
			}
		}
	}
}
```

Two animation controllers are listed in this file: `"controller.animation.ghost.walk"` and `"controller.animation.ghost.attack"`.

An animation controller allows us to play certain animations when the entity is in certain states, which we can transition between when certain conditions are met.
Let us look inside `”controller.animation.ghost.walk”` under `”animation_controllers”`:
-	`“initial_state”` is the state the entity will start on whenever it is first loaded in. If this isn’t included the entity will start in the `default` state like in `"controller.animation.ghost.attack"`.
-	`“states”` contains the different states of an entity. Here our entity is either in its `standing` state or `moving` state. This allows us to have a separate standing animation and moving animation.
Each state has the following objects:
-	`“animations”` holds the animations that will run whenever the entity is in this state. When the entity is in its `standing` state it plays the `idle` animation which we defined in our RP entity file. 
-	`“blend_transition”` is the time which animations will blend during a transition. A shorter time means a snappier transition. 
-	`“transitions”` are the conditions under which we will transition to another state. Each transition needs its own object. In our `standing` state, we have the transition `"moving": "query.modified_move_speed > 0.1"` which means when the condition on the left, `"query.modified_move_speed > 0.1"`, is true, it will transition the animation controller to the state `moving`. 

For a more in-depth explanation of how animation controllers work, check out our page [Intro to Animation Controllers](/animation-controllers/animation-controllers-intro).

Let's take a look at the Ghost's RP file: Just like the _animations_, the _animation controllers_ get assigned to their short names (`walk_controller` and `attack_controller` respectively) under `"animations"`. Now, since the controllers control the animations, they have to constantly run, which is why we put their short names in the array of `"scripts"/"animate"`.
(For example, if you put the short name `"move"` there, the entity would constantly play the moving animation, even when staying in place. The controller only launches the relevant animation when the entity is doing a certain action, for example, `is_walking`.)

`from RP/entity/ghost.ce.json`

<CodeHeader></CodeHeader>

```json
"scripts": {
    "animate": [
        "walk_controller",
        "attack_controller"
    ]
},
"animations": {
    "walk_controller": "controller.animation.ghost.walk",
    "attack_controller": "controller.animation.ghost.attack",
    "attack": "animation.ghost.attack",
    "idle": "animation.ghost.idle",
    "move": "animation.ghost.move"
}
```

### Entity name

And finally, we have to define the entity's and its spawn egg's in-game names in `en_US.lang` by adding these lines:

<CodeHeader>RP/texts/en_US.lang</CodeHeader>

```json
entity.wiki:ghost.name=Ghost
item.spawn_egg.entity.wiki:ghost.name=Ghost
```

Done! Your entity should now show up in Minecraft, complete with all behaviors and visuals, including animations!

## What you have learned

:::tip What you have learned:

How to format the behavior- and resource files for an item
How to set an entities texture
How to use models, animations, and animation controllers to make your entity more exciting

:::

## Your progress so far

**What you've done:**

<Checklist>

-   [x] Setup your pack
-   [x] Create a custom item
-   [x] Create a custom entity
-   [ ] Create the entity's loot, spawn rules, and a custom recipe

</Checklist>
