---
title: Intro to Animation Controllers
nav_order: 1
tags:
    - guide
---

Animation controllers (AC) are state-machines that can be used in both the resource pack, and the behavior pack. In the resource pack, animation controllers (RPAC) are used to play animations, and in the behavior pack (BPAC), they are used to play commands, and command "animations".

## What are State Machines?

State machines are a special kind of logic management, that relies on a series of states. Each state has two properties:

-   What to do in the current state
-   How to move to other states

State machines are used all over the place, especially in classical programming. They aren't only found in minecraft! You can learn more about state machines [here](https://www.itemis.com/en/yakindu/state-machine/documentation/user-guide/overview_what_are_state_machines).

A state machine can only be `in` one state at a time. When a state machine "runs", you can think of it as moving from state to state, executing the logic inside, and then following `transitions` to other states.

## State Machine example

The reason that state-machines are useful, is they allow us to naturally break up our animations into a logical flow, where each state handles its own animations _and_ its own logic.

For example, imagine you want to animate the spinning blade of a helicopter - but only when on the ground. You have two states:

-   `ground state`
-   `flying state`

We can annotate these states with the two pieces of information described above:

-   `ground state`:
    -   play no animation
    -   move to `flying state` if in the air
-   `flying state`:
    -   play flying animation
    -   move to `ground state` if on the ground

Here is the state-machine, visualized as a flow-chart:

![](/assets/images/concepts/animation-controllers/two_state_FSM.png)

In this flowchart, states are represented by rectangles, and arrows represent _transitions_ from one state to another.

Flowcharts are a nice way to visualize multi-state finite-state-machines, is it allows you to follow the logical _flow_ of the animation. Let us look at a more detailed example, which adds a third `explode` state:

![](/assets/images/concepts/animation-controllers/three_state_FSM.png)

As you can see, states can go to more than one state at once. States can also be dead-ends (since the helicopter is dead, and doesn't need further animation). The branching flow of animation-controllers is a large part of what makes them powerful.

## What are Animation Controllers?

Animation Controllers are Minecraft state machines that allow us to play animations and run commands. Animation controllers always go under the `animation_controllers` folder, in either the RP, or the BP.

### Attaching our controller to an entity

Animation controller are defined in their own files, and must be "attached" to entities before they can do anything. To attach an AC into your entity, you must do two things:

-   Define a short-name for the animation controller
-   Run the animation controller via `scripts`

Here is a sample `description`, which shows how the AC can first be defined in `animations`, and then played in `scripts/animate`.

<CodeHeader>RP/entity/helicopter.ce.json OR BP/entities/helicopter.se.json</CodeHeader>

```json
"description": {
	"identifier": "wiki:helicopter",
	"animations": {
		"blade_controller": "controller.animation.helicopter.blade",
	},
	"scripts": {
		"animate": [
			"blade_controller"
		]
	}
}
```

If you want to conditionally play an animation controller, you can supply an optional molang argument. If the argument evaluates to true, the controller will play:

<CodeHeader>RP/entity/helicopter.ce.json OR BP/entities/helicopter.se.json</CodeHeader>

```json
"scripts": {
	"animate": [
		{
			// Only play the blade_controller if the helicopter has a rider.
			"blade_controller": "query.has_rider"
		}
	]
}
```

### RP Animation Controllers

RP animation controllers go in the RP, and can be attached to RP entities. They allow you to play bone-animations.

### BP Animation Controllers

BP animation controllers go in the BP, and can be attached to BP entities. They allow you to play commands and send events to entities.

## Animation Controller example

Lets look at a simple animation controller from our State Machine example above:

### Simple Example

<CodeHeader>RP/animation_controllers/helicopter.ac.json</CodeHeader>

```json
{
	"format_version": "1.10.0",
	"animation_controllers": {
		"controller.animation.helicopter.blade": {
			"initial_state": "ground",
			"states": {
				"ground": {
					"transitions": [
						{
							"flying": "!query.is_on_ground"
						}
					]
				},
				"flying": {
					"animations": ["flying"],
					"transitions": [
						{
							"ground": "query.is_on_ground"
						}
					]
				}
			}
		}
	}
}
```

There is... a lot going on here. Lets break it down, step by step. As we do so, remember two things:

-   Animation controllers are a _list of states_
-   Each state contains two pieces of information: _What to do in any given state_, and _How to transition to new states_.

So this particular example contains two states:

-   `ground`
-   `flying`

You can note that `"initial_state": "ground"` means that our Animation Controller will begin in the `ground` state.

<CodeHeader>RP/animation_controllers/helicopter.ac.json#animation_controllers/controller.animation.helicopter.blade/states</CodeHeader>

```json
"ground": {
    "transitions": [
        {
            "flying": "!query.is_on_ground"
        }
    ]
}
```

The `ground` state contains a list of _transitions_, which is how we get to other states. In this example, the default state is saying: _Move to the `flying` state when `query.is_on_ground` is NOT true_. In other words - start the flying animation when we fly into the air!

<CodeHeader>RP/animation_controllers/helicopter.ac.json#animation_controllers/controller.animation.helicopter.blade/states</CodeHeader>

```json
"flying": {
    "animations": [
        "flying"
    ],
    "transitions": [
        {
            "ground": "query.is_on_ground"
        }
    ]
}
```

The `flying` state also contains a list of transitions. In this case it contains the opposite transition: _Move to the `ground` state when `query.is_on_ground` is true_. In other words - move back to the default state when we land on the ground!

Alongside the `transition` list, there is also a list of `animations` to play while inside of this state. In this case, playing the `flying` animation. This animation will need to be defined in the entity definition file for this entity.

### Full Example

Here is the code for the second state machine from above, with three states this time. This example illustrates a few new concepts:

-   States with multiple transitions
-   States with no transitions

<CodeHeader>RP/animation_controllers/helicopter.ac.json</CodeHeader>

```json
{
	"format_version": "1.10.0",
	"animation_controllers": {
		"controller.animation.helicopter.blade": {
			"initial_state": "ground",
			"states": {
				"ground": {
					"transitions": [
						{
							"flying": "!query.is_on_ground"
						},
						{
							"explode": "!query.is_alive"
						}
					]
				},
				"flying": {
					"animations": ["flying"],
					"transitions": [
						{
							"ground": "query.is_on_ground"
						},
						{
							"explode": "!query.is_alive"
						}
					]
				},
				"explode": {
					"animations": ["explode"]
				}
			}
		}
	}
}
```

## RP Animation Controllers

Resource Pack animation controllers can run things like sounds and particles too.
Before calling sound or particle in ac, you need to define them in client entity file.

<CodeHeader>RP/entities/custom_tnt.json#minecraft:client_entity/description</CodeHeader>

```json
"sound_effects": {
    "explosion": "wiki.custom_tnt.explosion" //where wiki.custom_tnt.explosion is a sound definited in sound_definitions just like animation sounds.
},
"particle_effects": {
    "fuse_lit": "wiki:tnt_fuse_lit_particle"
}
```

And only then you can call them in ac:

<CodeHeader>RP/animation_controllers/custom_tnt.animation_controllers.json#controller.animation.custom_tnt</CodeHeader>

```json
"states":{
    "default":{
        "transitions":[
            {
                "explode_state":"query.mark_variant == 1"
            }
        ]
    },
    "explode_state":{
        "sound_effects":[
            {
                "effect":"explosion"
            }
        ],
		"particle_effects": [
			{
				"effect": "fuse_lit"
				// "locator": "<bone>" Locator can also go here too
			}
		],
        "transitions":[
            {
                "default":"query.mark_variant == 0"
            }
        ]
    }
}
```

## BP Animation Controllers

Behavior Pack animation controllers use the same general format as RP Animation Controllers, except instead of triggering animations, they allow you to trigger commands. In general, they introduce two new fields:

-   `on_entry`: Commands to play when the state is entered
-   `on_exit`: Commands to play when the state is exited

Commands in this context mean three distinct things:

-   A slash command, such as `/say Hello there!`
-   An event trigger, on the entity, such as: `@s wiki:transform_into_plane`
-   An arbitrary molang expression, such as `variable.tickets += 1;`

Here is an example BP animation controller, which exhibits some of this behavior:

<CodeHeader>BP/animation_controllers/helicopter.ac.json</CodeHeader>

```json
{
	"format_version": "1.10.0",
	"animation_controllers": {
		"controller.animation.helicopter.commands": {
			"initial_state": "ground",
			"states": {
				"ground": {
					"on_entry": ["/say I am now in the ground!"],
					"transitions": [
						{
							"flying": "!query.is_on_ground"
						}
					]
				},
				"flying": {
					"on_entry": ["/say I am now in the air!"],
					"transitions": [
						{
							"ground": "query.is_on_ground"
						}
					]
				}
			}
		}
	}
}
```

## Animation Controller Flow

Through the examples, hopefully you are starting to get some concept for how animation controller flow works. In this section, I will explain it more explicitly.

### Loading

When an entity loads into the world, it will _enter_ the default animation controller state, in each of its attached animation controllers. If no `initial_state` is defined, the state named `default` is used. If this is missing, the AC will generate a content log.

When running, the AC will do the following things each tick:

1. Run any animations in the current state (will loop if set to loop, otherwise it will just play once). Run any commands in `on_entry`, the state was just entered.
2. Check all transitions to see if there is any valid transition. Search from the top to the bottom of the list, and move to the first valid transition. If a transition is found, `on_exit` commands will be played.

Because of the way animation controllers are setup, it will only move from state to state at a MAXIMUM of once per tick.

### Resetting

Animation Controllers "reset" when an entity reloads (player join/leave, chunk reload, etc). This means that it will "jump" back to the default state. You should always have logic in your default state that can handle restarting any critical animations.
