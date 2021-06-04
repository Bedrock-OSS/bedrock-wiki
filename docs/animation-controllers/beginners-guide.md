---
title: Beginners Guide
nav_order: 0
tags:
    - guide
---

# Animation controllers: giving our entity an attack animation

## Attack Animation

First, let's create the animation itself in Blockbench. Choose _File>Open Model>yourModelFile_ and choose the _Animation_ workspace in the top right corner. Now, unlike the walk animation we already created, our attack animation will consist of a single frame, because Animation Controllers have a "transitions" feature that blends two following animations smoothly. After you're done, name your animation `animation.entityname.attack`, choose _Export Animations_ and replace your old animations file in `RP/animations`.
_Note: you can find Animations documented on [bedrock.dev/r/MoLang](https://bedrock.dev/r/MoLang) and [bedrock.dev/r/Animations](https://bedrock.dev/r/Animations). For Behavior Animations, refer to [bedrock.dev/r/Entity Events](https://bedrock.dev/r/Entity%20Events)._

![](/public/assets/images/guide/animation_controllers_1.png)
As you see, the attack frame is created fully under the keyframe '0'.

Now for the actual

## Animation Controller

Create `RP/animation_controllers/entityName.animation.controller.json`. Let's go over the overall structure of an animation controller.

![](/public/assets/images/guide/animation_controllers_2.png)

-   The animation controller's identifier is `controller.animation.skele_yaklin.attack` We'll define it in the _.entity_ file like a normal animation.
-   Animation controllers are **State Machines**, which means they work on states. Every state is unique, but they can transition between each other.
-   "initial_state" defines the state that the entity will spawn with;
-   "states": {} includes every state's object.

Let's go through the states themselves.

`RP//animation_controllers/skele_yaklin.controller.animation.json`

<CodeHeader>RP/animation_controllers/skele_yaklin.ac.json</CodeHeader>

```json
{
	"format_version": "1.10.0",
	"animation_controllers": {
		"controller.animation.skele_yaklin.attack": {
			"initial_state": "default_state",
			"states": {
				"default_state": {
					"animations": [
						{
							"walk": "query.modified_move_speed"
						}
					],
					"transitions": [
						{
							"attack_state": "variable.attack_time > 0"
						}
					],
					"blend_transition": 0.1
				},
				"attack_state": {
					"animations": ["attack"],
					"transitions": [
						{
							"default_state": "variable.attack_time == 0"
						}
					],
					"blend_transition": 0.1
				}
			}
		}
	}
}
```

The "default_state":

-   The "animations" array includes all animations the same way as "scripts/animate" in the .entity file. If you put an animation shortname like this "walk", the animation will play all the time during which the state is applied. Here we moved `{ "walk": "query.modified_move_speed" }` from ".entity/scripts/animate", which means that if the state is currently applied AND the entity is moving, the walk animation will play.
-   The "transitions" array controls in which state the current state can transit in. For example, in this scenario, if `variable.attack_time > 0` turns true, the state will change from "default_state" to "attack_state".

_(You can see more about queries [here](/guide/custom-entity-full), in the Resource Entity Definitions tutorial.)_

-   `"blend_transition": 0.1` means that the states will transit between each other smoothly, resulting in a smooth visual blend.
-   "attack_state" is very similar, with the exception that the animation, "attack", is run all the time the state is applied. The state transits back to default when attack time is 0 again, or, in other words, the entity no longer attacks.

*   Note:
    The showcased animation controller is a great example of a resource animation controller, also being a great way to implement attack animations. There are some less efficient or much more complicated methods to achieve the same goal out there, but I've been using this one ever since I, myself, found out about it.\*

## Resource and Behavior file edits

<CodeHeader>RP/entity/skele_yaklin.entity.json#minecraft:client_entity/description</CodeHeader>

```json
"animations": {
    "walk": "animation.skele_yaklin.walk",
    "attack": "animation.skele_yaklin.attack",
    "humanoid_big_head": "animation.humanoid.big_head",
    "look_at_target": "animation.humanoid.look_at_target.default.v1.0",
    "ctrl": "controller.animation.skele_yaklin.attack"
},
"scripts": {
    "animate": [
        "ctrl",
        {
            "humanoid_big_head": "query.is_baby"
        },
        "look_at_target"
    ]
}
```

Now, let's define the animation controller and the attack animation in the .entity file. The animation controller shortname should be included in "scripts/animate", so it's active all the time.

<CodeHeader>BP/entities/skele_yaklin.json#minecraft:entity/components</CodeHeader>

```json
  //make the entity attack back
  "minecraft:behavior.hurt_by_target": {
    "priority": 1
  },
  //how much damage the entity deals
  "minecraft:attack": {
    "damage": 6,
    "effect_name": "weakness",
    "effect_duration": 10
  },
  //attack AI type
  "minecraft:behavior.melee_attack": {
    "priority": 3,
    "speed_multiplier": 1.1,
    "track_target": false
  },
  //chose targets
  "minecraft:behavior.nearest_attackable_target": {
    "priority": 1,
    "within_radius": 2,
    "reselect_targets": true,
    "entity_types": [
      {
        "filters": {
          "any_of": [
            {
              "test": "is_family",
              "subject": "other",
              "value": "endermite"
            },
            {
              "test": "is_family",
              "subject": "other",
              "value": "silverfish"
            }
          ]
        },
        "max_dist": 35
      },
      {
        "filters": {
          "any_of": [
            {
              "test": "is_family",
              "subject": "other",
              "value": "skeleton_horse"
            }
          ]
        },
        "max_dist": 64,
        "must_see": false
      }
    ],
    "must_see": true,
    "must_see_forget_duration": 17
  },
```

Lastly, let's give our entity the ability to attack. The needed components are:

-   "minecraft:nearest_attackable_target", which chooses the mobs the mob will attack
-   Attack AI: We'll use "minecraft:behavior.melee_attack" right now, you can see other attack AIs in the Vanilla Example behavior files.
-   "minecraft:hurt_by_target" makes the mob attack back any entity that hits it.
-   "minecraft:attack" defines the value of the damage the entity deals.

I included these attributes in the "tut:wild" component group.

---

# Behavior Animations

Animations and animation controllers are typically defined in the Resource pack. However, there's a certain type of those files that are to be located in the Behavior pack. They are thus called Behavior- (or server- ) Animations.

Behavior animations are able to execute slash(/) commands and to trigger events from the entity behavior file.The syntax is similar to normal resource animations and animation controllers, which are used to run visual animations. Behavior Animations are located in `BP/animations/` and Behavior animation controllers in `BP/animation_controllers/`. The file name is not important, but the animation identifiers are.

## Behavior Animation

Here's an example of a Behavior Animation that executes multiple slash commands on an entity.

<CodeHeader>BP/animations/misc.animation.json</CodeHeader>

```json
{
	"format_version": "1.8.0",
	"animations": {
		"animation.grufallo.revenge": {
			"loop": false,
			"animation_length": 1,
			"timeline": {
				"0.0": ["/effect @p[c=1,r=4] fatal_poison 15 1"]
			}
		},
		"animation.yaklin.on_summon": {
			"loop": false,
			"animation_length": 2,
			"timeline": {
				"0.0": ["/say I've been spawned!"],
				"1.0": "/say ...And managed to survive for a single second already"
			}
		}
	}
}
```

This animation file includes two animations: "animation.grufallo.revenge" and "animation.yaklin.on_summon".

-   When the animation is triggered, things happen based on the timeline. After "0.0" seconds has passed, the entity will execute the `/effect` command. _Note that after every keyframe (like "0.0", "2.0", etc) either a string with a single command or an array [], including multiple strings with commands, must stand._
-   On the first tick of the animation the entity executes a `/say` command, and another one after 1 second. Note that slash commands can only be the ones that can be executed from chat.

## Behavior Animation Controller

Here's an example that can be used to track AFK players. (You can scroll the code box for better readability)

<CodeHeader>BP/animation_controllers/afk_controller.ac.json</CodeHeader>

```json
{
	"format_version": "1.10.0",
	"animation_controllers": {
		"controller.animation.player.afk": {
			"states": {
				"default": {
					"transitions": [
						{
							"stands_still": "!query.is_moving"
						}
					]
				},
				"stands_still": {
					"on_entry": ["/tag @s add AFK", "/say I'm now AFK"],
					"animations": ["afk_animation"],
					"transitions": [
						{
							"default": "query.is_moving"
						}
					],
					"on_exit": ["/tag @s remove AFK", "/say I'm no longer AFK"]
				}
			}
		}
	}
}
```

-   "controller.animation.player.afk" is, of course, the identifier.
-   If the [Molang](https://bedrock.dev/r/MoLang) query `!query.is_moving` returns false (the player isn't moving), the state transits to the "stand_still" state.
    (You can see more about queries [here](/guide/custom-entity-full), in the Resource Entity Definitions tutorial.)
-   When the state gets entered, "on_entry" gets triggered, which runs the following slash commands.
-   "animations" includes the Behavior Animation's shortname that is to be ran during the whole time the state is active, just like in [Resource Animation Controllers](#animation-controller).
-   If the player is moving again, the state will transit to "default" again.
    The commands "on_exit" will be executed.

You can also trigger a behavior event _(defined in the entity behavior file>"events": {})_ on the entity which runs the command. Here, on the "0.2" keyframe, the entity runs the `/tag` command and then runs the `"jdot:tagged_alt"` event, which removes or adds some component groups. For more info see the [behavior events definitions page](/guide/custom-entity-full).

```
"0.2": [
    "/tag @s add TAG",
    "@s jdot:tagged_alt"
]
```

## Defining behavior animation _Shortnames_ in the Behavior file

Just like resource animations and animation controllers, Behavior animations and animation controllers need to be assigned a shortname and called in "scripts>animate". For resource ones, it's done in the _.entity_ file `RP/entity/entityname.entity.json`, but for behavior ones it's done directly in the entity behavior file: `BP/entities/entityname.json/"description: {}`. (For more information on the behavior file and the "description" object see the [Entity behavior definition page](/guide/custom-entity-full).

Here's an example:

<CodeHeader>BP/entities/grufallo.json#minecraft:client_entity</CodeHeader>

```json
"description": {
    "identifier": "jdot:grufallo",
    "is_spawnable": true,
    "is_summonable": true,
    "is_experimental": false,
    "animations": {
        "revenge": "animation.grufallo.revenge"
    },
    "scripts": {
        "animate": [
            {
                "revenge": "!query.is_alive"
            }
        ]
    }
}
```

The "description" object in a behavior file is where the entity's identifier and some configurations are stored. After the "is_experimental" config we added "animations" and `"scripts"/"animate", exactly like in an .entity file.

-   "revenge" is the shortname for the animation with the id "animation.grufallo.revenge".
-   The animation with the shortname "revenge" gets ran if the entity isn't alive in scripts>animate, or, in other words, when the entity is dying, or, in other other words, when the query returns true. _( You can see more about queries in the [Resource Entity Definitions tutorial](/guide/custom-entity-full) )_
-   Animation controllers can be ran the same way as in the .entity resource file.

You can find out more about animation controllers by checking out these guides:

1. [bedrock.dev Entity Events](https://bedrock.dev/r/Entity%20Events) documentation - this one is written in a tutorial form
1. Other documentations related with animations: [bedrock.dev/r/MoLang](https://bedrock.dev/r/MoLang), [bedrock.dev/r/Animations](https://bedrock.dev/r/Animations).
1. [SirLich's Entity Commands Tutorial](/animation-controllers/entity-commands)

---

# Your progress so far

**What you've done:**

-   Learned to use client Animation Controllers
-   Added an attack animation and AI to your custom entity
-   Learned to execute commands through server-side animations and animation controllers

**What are you to do next:**

-   Create custom sounds
-   Add particles to animations
-   Potentially create custom particles
