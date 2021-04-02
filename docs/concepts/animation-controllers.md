---
layout: page
title: Animation Controllers
parent: Concepts
---

# Animation Controllers

<details id="toc" open markdown="block">
  <summary>
    Table of contents
  </summary>
  {: .text-delta }
1. TOC
{:toc}
</details>

Animation controllers (AC) are state-machines that can be used in both the resource pack, and the behavior pack. In the resource pack, animation controllers (RPAC) are used to play animations, and in the behavior pack (BPAC), they are used to play commands, and command "animations". 

## What are State Machines?

State machines are a special kind of logic management, that relies on a series of states. Each state has two properties:
 - What to do in the current state
 - How to move to other states

State machines are used all over the place, especially in classical programming. They aren't only found in minecraft! [You can learn more about state machines here](https://www.itemis.com/en/yakindu/state-machine/documentation/user-guide/overview_what_are_state_machines).

## State Machine example
The reason that state-machines are useful, is they allow us to naturally break up our animations into a logical flow, where each state handles its own animations *and* its own logic. 

For example, imagine you want to animate the spinning blade of a helicopter -but only when on the ground. You have two states:
 - `ground state`
 - `flying state`

We can annotate these states with the two pieces of information described above:
 - `ground state`
    - play no animation
    - move to `flying state` if in the air
 - `flying state`
    - play flying animation
    - move to `ground state` if on the ground

Here is the state-machine, visualized as a flow-chart:

![](/assets/images/concepts/animation-controllers/two_state_FSM.png)

In this flowchart, states are represented by rectangles, and arrows represent *transitions* from one state to another.

Flowcharts are a nice way to visualize multi-state finite-state-machines, is it allows you to follow the logical *flow* of the animation. Let us look at a more detailed example, which adds a third `explode` state:

![](/assets/images/concepts/animation-controllers/three_state_FSM.png)

As you can see, states can go to more than one state at once. States can also be dead-ends (since the helicopter is dead, and doesn't need further animation). The branching flow of animation-controllers is a large part of what makes them powerful.

## Animation Controller example

Animation controllers go under the `animation_controllers` folder, in either the RP, or the BP. Lets look at a sample render controller for our State Machine from above:

{% include filepath.html path="RP/animation_controllers/helicopter.ac.json"%}
```json
{
    "format_version": "1.10.0",
    "animation_controllers": {
        "controller.animation.helicopter": {
            "states": {
                "default": {
                    "transitions": [
                        {
                            "flying": "!query.is_on_ground"
                        }
                    ]
                },
                "flying": {
                    "animations": [
                        "flying"
                    ],
                    "transitions": [
                        {
                            "default": "query.is_on_ground"
                        }
                    ]
                }
            }
        }
    }
}
```

There is... a lot going on here. Lets break it down, step by step. As we do so, remember two things:
 - Animation controllers are a *list of states*
 - Each state contains two pieces of information: *What to do in any given state*, and *How to transition to new states*.

So this particular example contains two states:
 - default
 - flying

The reason we use `default` instead of `ground` is that Animation Controllers need a `default` state. That is to say, the default the state they will start in when they load into the world. While it is possible to define a particular state as the default, I think it is clearer and more consistent to use `default`. By default, the `default` state will run first.

{% include filepath.html path="RP/animation_controllers/helicopter.ac.json" local_path="animation_controllers/controller.animation.helicopter/states"%}
```json
"default": {
    "transitions": [
        {
            "flying": "!query.is_on_ground"
        }
    ]
}
```
The `default` state contains a list of *transitions*, which is how we get to other states. In this example, the default state is saying: *Move to the `flying` state when `query.is_on_ground` is NOT true*. In other words -start the flying animation when we fly into the air!

{% include filepath.html path="RP/animation_controllers/helicopter.ac.json" local_path="animation_controllers/controller.animation.helicopter/states"%}
```json
"flying": {
    "animations": [
        "flying"
    ],
    "transitions": [
        {
            "default": "query.is_on_ground"
        }
    ]
}
```

The `flying` state also contains a list of transitions. In this case it contains the opposite transition: *Move to the `ground` state when `query.is_on_ground` is true*. In other words -move back to the default state when we land on the ground!

Alongside the `transition` list, there is also a list of `animations` to play while inside of this state. In this case, playing the `flying` animation. This animation will need to be defined in the entity definition file for this entity.

## Animation Controller Flow

Through the examples, hopefully you are starting to get some concept for how animation controller flow works. In this section, I will explain it more explicitly.

When an entity loads into the world, it will *enter* the default animation controller state, in each of its attached animation controllers. It will then do two things each tick:

1) Run any animations in the current state (will loop if set to loop, otherwise it will just play once)
2) Check all transitions to see if there is any valid transition. Search from the top to the bottom of the list, and move to the first valid transition.

Because of the way animation controllers are setup, it will only move from state to state at a MAXIMUM of once per tick. 

{% include warning.html
  contents='Animation Controllers "reset" when an entity reloads (player join/leave, chunk reload, etc). This means that it will "jump" back to the default state. You should always have logic in your default state that can handle restarting any critical animations.'
%}
