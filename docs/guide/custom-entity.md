---
title: 'Create a custom Entity'
category: Guide
description: How to create your first custom Entity
nav_order: 6
prefix: '6. '
---

Similarly to custom items, we can also make custom entities with many similar mechanics to the vanilla entities in the game. These entities can be incredibly powerful allowing you to make your own animals which can be bred and tamed or an aggressive mob that attacks anything it sees.

Here we will make a ghost entity which will float, attack the player and drop our ectoplasm item on death.

<br>
<img src="/assets/images/guide/custom_entity/ghost_view.png" width=150>
<br>
<br>

Just like items, entities are made up of two parts:
-	The visuals (texture, name, animations, sounds)
-	The behaviors (movement, attacks)

Differently though, we will need two main files for our entity called the _server_ file and the _client_ file which sit in our BP and RP respectively.
We will also need additional files to describe the geometry of our entity and its animations, but we will cover those in later sections.

First, we will cover how to create an entity & define its behavior. Next, we will look at how to add the visuals.

## Entity Behavior

Like with items, we need a file to tell our entity how to behave which points an identifier to certain components which define behavior. This file will be very similar to our item behavior file except with alot more components.

We define our server file in our BP, under the `BP/entities/` folder. We will call this file `ghost.se.json`. Here the `.se` stands for _server entity_. This is for clarity and is recommend in the [Style Guide](/meta/style-guide).

This is a basic overview of the file:

<CodeHeader>BP/entities/ghost.se.json</CodeHeader>

```json
{
	"format_version": "1.16.0",
	"minecraft:entity": {
		"description": {...},
		"components": {...}
	}
}
```
Just like with the items, we have our format version and here we have `"minecraft:entity"` as this is an entity file. From now on we won't comment on the format version and recommend to use the version example that we give.

For entities we have a little bit more information under `description`:

<CodeHeader>BP/entities/ghost.se.json#minecraft:entity</CodeHeader>

```json
"description": {
	"identifier": "wiki:ghost",
	"is_summonable": true,
	"is_spawnable": true,
	"is_experimental": false
}
```

The `identifier` key serves the same purpose, to point to which entity we are talking about.
The other keys determine what ways we can add the entity to our world:
-	`is_summonable`  : Whether it can be summoned using the `/summon` command.
-	`is_spawnable`   : Whether it can spawn in the world using a spawn egg or spawn rules.
-	`is_experimental`: Whether the entity is experimental (if so it can only be added to 								   Experimental Worlds).

We recommend leaving the settings as they are here as any changes will make it harder to test your entity in game.

### Components

An entity has a lot more behaviors than just an item, so we need to define more components for it.
We will break down the types of components will use into categories and then look at them closer.
For more information on components in entities, you can check out our page [here](/entities/entity-intro-bp).

### Stat Components

These are the components that you will generally have on every entity. This define some core attribrutes to your entity.

<CodeHeader>BP/entities/ghost.se.json#minecraft:entity#components</CodeHeader>

```json
"minecraft:type_family": { 
	"family": ["ghost", "monster"] 
},
"minecraft:health": { 
	"value": 20, 
	"max": 20 
},
"minecraft:attack": { 
	"damage": 3 
},
"minecraft:movement": { 
	"value": 0.2 
},
"minecraft:collision_box": { 
	"width": 1, 
	"height": 2 
},
"minecraft:loot": { 
	"table": "loot_tables/entities/ghost.json" 
},
```

The components `minecraft:health` and `minecraft:attack` and `minecraft:movement` are straight forward and set the entities health, attack damage and movement speed. The collision box of an entity is the box within which the entity interacts with or collides with blocks or other entities. This is defined with `minecraft:collision_box` which will center the box on the middle on the entity.

`minecraft:type_family` adds family tags to the entity. Family tags are used to group entities in a similar category together. For example `monster` includes zombies, skeletons and creepers. This allows us to be able to select all entities with the `monster` tag. 

`minecraft:loot` defines the path to the loot table that the entity will drop on death. We will create this loot table in a later section using this path.

### Movement Components

In order for an entity to move around, we need to define two things, _how_ it moves and _where_ it can move to. This is defined using the `movement` and `navigation` components respectively. 

You will always need a `movement` and `navigation` component if you want your entity to be able to move.

<CodeHeader>BP/entities/ghost.se.json#minecraft:entity#components</CodeHeader>

```json
"minecraft:physics": {},
"minecraft:jump.static": {},
"minecraft:movement.basic": {},
"minecraft:navigation.walk": {
	"can_walk": true,
	"avoid_sun": true,
	"can_pass_doors": true,
	"can_open_doors": true
}
```
`minecraft:physics` is used to apply gravity and collision to your entity. `minecraft:jump.static` allows your entity to jump up blocks for traversal. Both are used on almost every entity.

There are few different types of movement components which allow different types of movement such as `minecraft:movement.swim` used by dolphins, `minecraft:movement.fly` used by parrots and `minecraft:movement.hover` used by bees. 
The `minecraft:movement.basic` component allows our entity to walk by moving over blocks. To make it seem like our entity is actually floating, we will use our geometry .

The navigation component is a pathfinder which defines what paths we allow our entity to follow. For example skeletons will try not to walk in sunlight, so their pathing stops them from taking paths that would put them in sunlight. Additionally, parrots can fly so they can path into the air unlike walking mobs. 

These components have alot of different settings which allow for interesting pathing. The settings we've chosen let our ghost walk along the ground, avoid stepping into sunlight, pass through doorways and open doors. 

### Behavior Components

While we have defined _how_ our entity does things, we haven't yet defined _when_ or _what_ they do. This is where `.behavior` components come in. These components define the specific actions that our entity will do.
For example, villagers will try to breed so they have the `minecraft:behavior.breed` component and tamed wolves follow their owners so they have the `minecraft:behavior.follow_owner` component.

We want our ghost to be able to idly walk and look around, target the player when nearby and then attack them. Here are the components that we use:
<CodeHeader>BP/entities/ghost.se.json#minecraft:entity#components</CodeHeader>

```json
// Allow for random movement and looking around
"minecraft:behavior.random_stroll": {...},
"minecraft:behavior.random_look_around": {...},
"minecraft:behavior.look_at_player": {...},
// Allow for targeting
"minecraft:behavior.hurt_by_target": {...},
"minecraft:behavior.nearest_attackable_target": {...},
// Allow for attacking
"minecraft:behavior.delayed_attack": {...}
```

The first component, `minecraft:behavior.random_stroll` allows our entity to choose a random point nearby to path to periodically. This path is created with our `navigation` component and then the type of movement is defined by our `movement` component.

The next two components allow our entity to randomly look around and to look at the player if they are within range. 

For attacking, in order for our entity to attack, it needs a `target`. The two behaviors `minecraft:behavior.hurt_by_target` and `minecraft:behavior.nearest_attackable_target` will cause the entity to target any entity that hurts it and target any the nearest enemy to it within range.

Finally, the `minecraft:behavior.delayed_attack` is how our entity actually attacks it target. 

Each of these behaviors have further settings to tweak the exact behavior we want. 

<CodeHeader>BP/entities/ghost.se.json#minecraft:entity#components</CodeHeader>

```json
"minecraft:behavior.random_stroll": {
	"priority": 6,
	"speed_multiplier": 1
},
"minecraft:behavior.random_look_around": { 
	"priority": 7 
},
"minecraft:behavior.look_at_player": {
	"priority": 7,
	"look_distance": 6,
	"probability": 0.02
},
"minecraft:behavior.hurt_by_target": { 
	"priority": 1 
},
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
}
```
For more details about what each of these options do, you can read about them on the official documentation, [bedrock.dev](https://bedrock.dev/docs/stable/Entities).

#### Priority

All behaviors contain a `"priority"` field. This field is used to decide which behavior to run when many can.

When the entity is picking something to do, it searches all its behaviors from lowest priority to the highest priority and picks the first one that it can do. For this reason, you need to make important behaviors like `minecraft:behavior.nearest_attackable_target` lower than behaviors like `minecraft:behavior.look_at_player`. If the `look_at_player` behavior is lower, it will always run this first when the player is close, and the entity will never attack.

In general, important behaviors will have a priority of `0` or `1`. 

### Full Entity Server File

<Spoiler title="Full ghost.se.json">

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
			"minecraft:type_family": { 
				"family": ["ghost", "monster"] 
			},
			"minecraft:health": { 
				"value": 20, 
				"max": 20 
			},
			"minecraft:attack": { 
				"damage": 3 
			},
			"minecraft:movement": { 
				"value": 0.2 
			},
			"minecraft:collision_box": { 
				"width": 1, 
				"height": 2 
			},
			"minecraft:loot": { 
				"table": "loot_tables/entities/ghost.json" 
			},

			"minecraft:movement.basic": {},
			"minecraft:navigation.walk": {
				"can_walk": true,
				"avoid_sun": true,
				"can_pass_doors": true,
				"can_open_doors": true
			},

			"minecraft:behavior.random_stroll": {
				"priority": 6,
				"speed_multiplier": 1
			},
			"minecraft:behavior.random_look_around": { 
				"priority": 7 
			},
			"minecraft:behavior.look_at_player": {
				"priority": 7,
				"look_distance": 6,
				"probability": 0.02
			},
			"minecraft:behavior.hurt_by_target": { 
				"priority": 1 
			},
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
			}
		}
	}
}
```

</Spoiler>

With that we have completed our entity behavior file. 

More complex entities can also have different _states_, where they will behave differently depending on what state they are in. For example, a wild wolf will walk around freely, but once it is tamed it will follow the player. An _event_ (being tamed) caused the wolf to change _states_. This feature allows us to create dynamic entities which can perform different actions when different events occurs. You can learn more about this in our guide [here](/entities/entity-intro-bp).

If you open your world and try to summon in your entity using `/summon wiki:ghost`, it should behave like we expect but there will only be a shadow on the ground. You might also see its name as a translation key, similar to how it happened with our item.

Next we will learn how to create our resource or client file and how to assign our texture, geometry and animations.

## Entity Resource

Applying visuals to an entity is very different to an item. Since there are alot more pieces, we have a separate file dedicated to defining the resources.
This is the called entity _client file_ which we will name `ghost.ce.json`. These files go in the folder `RP/entity/`. 

In this section, we will use the example resources created for our ghost entity to demonstrate how to add them to an entity. In the next section of the guide, we explain how to use Blockbench, a dedicated 3D editor, to create your own entity geometry and animations.

### Model

The 'model' for our entity is the shape of our entity, also called the 'geometry'. This describes the shape of our entity, like how a pig is a box with 4 legs and a head whereas a chicken has 2 legs, a head and wings. The geometry is stored as a JSON file in `RP/models/entity/` and ours will be named `ghost.geo.json`. 

This file is automatically generated by Blockbench for us, so there is no need to learn its syntax by hand. As such, we won't go into full detail when looking at the file. It stores the data about each block in our model, such as size, position and rotation.

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

The important information that we need is the `identifier` which we will use to reference our geometry file, which here is `geometry.ghost`. 

### Texture

Our entity now has its shape, but it also needs a texture. This texture can also be created in Blockbench and is simply a `.png` file.

`RP/textures/entity/ghost.png`

![ectoplasm.png](https://raw.githubusercontent.com/Bedrock-OSS/wiki-addon/main/guide/guide_RP/textures/entity/ghost.png)

<BButton link="https://raw.githubusercontent.com/Bedrock-OSS/wiki-addon/main/guide/guide_RP/textures/entity/ghost.png">Download texture here</BButton>

You may recall, when we made our item, we assigned a shortname to our texture to reference later. We will be doing something similar for our entity within our entity file, so make sure you keep the file path to the texture. 

### Animations

Animations allow our entity to have more life and move in different ways. We can have as many animations for an entity as we want and we can also trigger them at different types using an _animation controller_ which we will cover in the next section.

Depending on your entity, you may want different animations. For our ghost we will have an `idle`, `attack` and `move` animation. These files are also created automatically in Blockbench, so we won't look into it in full detail.

An animation file can contain one or multiple animations within it. Our animations will all be under one file called `ghost.a.json` under `RP/animations/`.

<CodeHeader>RP/animations/ghost.a.json</CodeHeader>

```json
{
	"format_version": "1.8.0",
	"animations": {
		"animation.ghost.idle": {...},
		"animation.ghost.attack": {...},
		"animation.ghost.move": {...}
	}
}
```

Each animation is defined by the key, so here our three animation identifiers are `animation.ghost.idle`, `animation.ghost.attack` and `animation.ghost.move`.

:::tip NOTE
If you have mutliple animation files for one entity, consider moving them all into one file to keep your folders easy to read and navigate.
If not, ensure that when you are referencing the animation in your entity file, you use the animation identifier and _not_ the file name.
:::

<Spoiler title="Full Animation File">

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

</Spoiler>

### Animation Controller

We have our animations but our entity won't know when to play them. This is where animation controllers are used. These controllers at their core, _control_ how the animations are played.
An animation controller is made up of _states_ and _transitions_ between states. This allows us to play certain animations when the entity is in certain states, which we can transition between when certain conditions are met.

For example, while an entity is moving, transition to the moving state which plays the `move` animation. Or while an entity is attacking, transition to the attack state which plays the `attack` animation. 

Let us look at our animation controller for attacking.

<CodeHeader>RP/animation_controllers/ghost.ac.json#animation_controllers</CodeHeader>

```json
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
}
```

You can see we have two states, `default` and `attacking`. Our entity begins in the default state. 

You can see under `transitions`, we have a condition, which when true will transfer the entity to a state. 

<CodeHeader></CodeHeader>

```json
{
	"attacking": "query.is_delayed_attacking"
}
```

Here, `attacking` is the state that will be transitioned to, and `query.is_delayed_attacking` is the condition that needs to be true for the transition to occur.
This condition is called a _query_. These queries can tell us things about the entity such as if it is attacking or moving. The query `query.is_delayed_attacking` will return `true` when the entity is performing the attack behavior. 

When the entity is in the `attacking` state, it also has a transition back to the default state. Now the condition is `!query.is_delayed_attacking`. Here the `!` means _not_, so it will return the opposite result of `query.is_delayed_attacking` (If `query.is_delayed_attacking` returns `true` then `!query.is_delayed_attacking` returns false).

This state also has `animations`. These are the animations that will always play while in this state. Note that we are using the _shortname_ for our animation here, which we will reference in our entity file later. If you don't, the animations will not play. 
There is also the `blend_transition` key, which allows the animations to slowly fade into each other. A higher number means a longer blending time. 

We can also make a similar controller for our `move` and `idle` animation.

<CodeHeader>RP/animation_controllers/ghost.ac.json#animation_controllers</CodeHeader>

```json
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
```

This follows a similar pattern with some additions.
We now have `inital_state` which tells the controller which state to start on. If none is listed then it will start on the state `default`. 
You'll also notice our queries look slightly different. Here the query `query.modified_move_speed` returns a value, so in order to return a boolean (i.e. true or false) we look at when the value is above or below `0.1`. For more in depth information on animation controllers, you can read [here](/animation-controllers/animation-controllers-intro).

Now that we have our animation controllers, we can add them to our animation controller file. Similarly to animations, the key is the identifier for our animation controller; `controller.animation.ghost.attack` and `controller.animation.ghost.walk`. 

Our file will be called `ghost.ac.json` and will be placed in `RP/animation_controllers/`.

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

With that, we have created all the resources we need for our entity. We will now create our entity file.

### Entity Client File

The client file contains all the references to the visual components of our entity.
Our client file will go in `RP/entity/` and we name this file `ghost.ce.json`. This file will have all our information under the `decription` key. We begin with the familar formatting:

<CodeHeader>RP/entity/ghost.ce.json</CodeHeader>

```json
{
	"format_version": "1.10.0",
	"minecraft:client_entity": {
		"description": {
			"identifier": "wiki:ghost"
		}
	}
}
```

We use the same identifier as for our behavior file in order to point to the correct entity.

To begin, we need to define the visuals of our entity in our file so we know which models and textures we are using. We also need to do the same for our animations and animation controllers. 

#### Render Controller

In order to display our entity it needs to be _rendered_. For this to happen, it needs a material, texture and geometry. We have already made a texture and geometry. A material defines how our texture will be displayed. For example, a skeleton uses a material to allow for transparency and an enderman uses a material to allow its eyes to glow. 

Since our ghost has some transparency, we need a material which will render this correctly. Luckily, Minecraft has many pre-built materials for us to use such as `entity_alphatest` which will allow us to do this. You can create your own materials but be warned it is very advanced. If you are interested though, you can begin [here](/documentation/materials).

For us to now use these resources, we need to define a reference to them with a shortname. This is similar to how we did for items within the `item_texture.json` file, except here we do it in the entity client file. Here is the layout. 

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
			}
		}
	}
}
```
Here for each category we have assigned the shortname `default` for each of our resources, ensuring to use the correct paths and identifiers. We are able to define multiple of these, though that is more advanced. Now we can use these shortnames to reference our resources.

In order for these resources to be rendered, we need to tell the game which resources to render in. This is controlled with a _render controller_. The controller tells the game which geometry, material and texture to render for the entity, allowing us to see it in game. 

The render controller is defined in a separate file and uses the shortnames we defined in our entity file. 
The file is called `ghost.rc.json` and is under `RP/render_controllers/`:

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

This follows a similar structure to the animation controller and animation file, with our render controller identifier being `controller.render.ghost`. 
This tells the game that the resource rendered should be the resource with shortname `default`. Render controllers can also allow you to display different textures or apply different materials to different parts of our model. Under `materials`, we use `"*"` to mean that we apply this material to all _bones_ in our model (i.e. each cube in our model.) For more information on render controllers, you can check our page [here](/entities/render-controllers).

:::tip
If you keep your shortnames consitent, you can actually reference the same render controller for multiple entities.
:::

Now to tell your entity to use this render controller, we add it to our entity file like so:

<CodeHeader>RP/entity/ghost.ce.json#description</CodeHeader>

```json
"render_controllers": ["controller.render.ghost"]
```

With that our entity file should look like this.

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
			"render_controllers": ["controller.render.ghost"]
		}
	}
}
```
Now if we spawn our entity into a world, we should be able to see it.

#### Scripts

Now let us add our animations. Like with our other resources, we need to define shortnames for them. Keep in mind, we also need to define shortnames our animation controllers as well. 

<CodeHeader>RP/entity/ghost.ce.json#description</CodeHeader>

```json
"animations": {
	"walk_controller": "controller.animation.ghost.walk",
	"attack_controller": "controller.animation.ghost.attack",
	"attack": "animation.ghost.attack",
	"idle": "animation.ghost.idle",
	"move": "animation.ghost.move"
}
```

You'll recall, these are the shortnames we used in our animation controllers; any animations we want to use in animation controllers, must be defined with a shortname in the entity client file.

Now that we have animations and animation controllers referenced, we need to decide when the entity will run them. This is done using `scripts`:

<CodeHeader>RP/entity/ghost.ce.json#description</CodeHeader>

```json
"scripts": {
	"animate": [
		"walk_controller", 
		"attack_controller"
	]
}
```

Here, `scripts` tell the entity to perform certain actions at certain times. The `animate` key will run any animation or controller referenced every tick. This means that each tick our animation controller will check whether to transition to a new state and perform any animations in the state they are in.

With this our animations should be working correctly. 

#### Spawn Egg

The final step to finalise our entity client file, is to create a spawn egg for our entity. Luckily, our file can gnerate one for us with the key `spawn_egg`.

<CodeHeader>RP/entity/ghost.ce.json#description</CodeHeader>

```json
"spawn_egg": {
	"overlay_color": "#bdd1d1",
	"base_color": "#9fb3b3"
}
```

This will generate a spawn egg which will summon our entity when used. It uses the hex codes in `base_color` and `overlay_color` to color the egg. If you want a custom icon for your spawn egg, instead use the key `texture` and put in the shortname to the texture you want. Follow the method in the item tutorial on how to define an texture shortname for an item. 

```json
"spawn_egg": {
	"texture": "texture_shortname"
}
```

With that, we have completed our entity client file. 

<Spoiler title="Full ghost.ce.json">

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
</Spoiler>

### Entity name

The final steps are to add our entity's name to the language files. You may have also noticed that if you created a spawn egg, it will also have a translation key for a name; we will also add this. Within `en_US.lang`, make sure you add names for both the entity and entity spawn egg item. They should look similar to this:

<CodeHeader>RP/texts/en_US.lang</CodeHeader>

```json
entity.wiki:ghost.name=Ghost
item.spawn_egg.entity.wiki:ghost.name=Ghost
```

## Overview

Done! Your entity should now show up in Minecraft, complete with all behaviors and visuals, including animations! You should be able to summon your entity using `/summon` or by finding the spawn egg in the creative menu. 

Your folder structure should look like this:

<FolderView :paths="[

'RP/animations/ghost.a.json',
'RP/animation_controllers/ghost.ac.json',
'RP/entity/ghost.ce.json',
'RP/models/entity/ghost.geo',
'RP/render_controllers/ghost.rc.json',
'RP/textures/entity/ghost.png',
'RP/textures/items/ectoplasm.png',
'RP/textures/item_texture.json',
'RP/texts/en_US.lang',
'RP/texts/languages.json',
'RP/manifest.json',
'RP/pack_icon.png',

'BP/entities/ghost.se.json',
'BP/items/ectoplasm.json',
'BP/texts/en_US.lang',
'BP/texts/languages.json',
'BP/manifest.json',
'BP/pack_icon.png',

]"></FolderView>

<Spoiler title="Full ghost.se.json">

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
			"minecraft:type_family": { 
				"family": ["ghost", "monster"] 
			},
			"minecraft:health": { 
				"value": 20, 
				"max": 20 
			},
			"minecraft:attack": { 
				"damage": 3 
			},
			"minecraft:movement": { 
				"value": 0.2 
			},
			"minecraft:collision_box": { 
				"width": 1, 
				"height": 2 
			},
			"minecraft:loot": { 
				"table": "loot_tables/entities/ghost.json" 
			},

			"minecraft:movement.basic": {},
			"minecraft:navigation.walk": {
				"can_walk": true,
				"avoid_sun": true,
				"can_pass_doors": true,
				"can_open_doors": true
			},

			"minecraft:behavior.random_stroll": {
				"priority": 6,
				"speed_multiplier": 1
			},
			"minecraft:behavior.random_look_around": { 
				"priority": 7 
			},
			"minecraft:behavior.look_at_player": {
				"priority": 7,
				"look_distance": 6,
				"probability": 0.02
			},
			"minecraft:behavior.hurt_by_target": { 
				"priority": 1 
			},
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
			}
		}
	}
}
```

</Spoiler>

<Spoiler title="Full ghost.ce.json">

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
</Spoiler>

<Spoiler title="Full ghost.geo.json">

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
</Spoiler>

<Spoiler title="Full ghost.a.json">

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
</Spoiler>

<Spoiler title="Full ghost.ac.json">

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

</Spoiler>

<Spoiler title="Full ghost.rc.json">

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

</Spoiler>

## Your progress so far

<Checklist>

-   [x] Setup your pack
-   [x] Create a custom item
-   [x] Create a custom entity
-	[x] - How to format the behavior- and resource files for an item
-	[x] - How to set an entities texture
-	[x] - How to use models, animations, and animation controllers to make your entity more exciting
-   [ ] Create the entity's loot, spawn rules, and a custom recipe

</Checklist>
