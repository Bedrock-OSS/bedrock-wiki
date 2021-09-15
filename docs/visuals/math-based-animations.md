---
title: Math-based Animations
tags:
    - intermediate
---

Math animations are a powerful alternative to keyframe animations. Generally speaking, `math-based animations` is the concept of using Molang expressions to animate entity geometry. All vanilla animations are math-based:

Here is an example:

<CodeHeader></CodeHeader>

```json
"leftarm" : {
    "rotation" : [ "((-0.2 + 1.5 * (math.abs(math.mod(query.modified_distance_moved, 13) - 6.5) - 3.25) / 3.25) * query.modified_move_speed) * 57.3 - variable.agent.armxrotationfactor", 0.0, "-variable.agent.armzrotation" ]
},
```

As you can see, Math-based animations are complicated and hard to understand. For this reason, they should be treated as a _specialized-alternative_ to key-frames -not a complete replacement.

## Writing math-animations

### By hand

Math-based animations can be written by hand. Simply create a new animation file, and write the math expressions. The format is fundamentally similar to keyframe animations. The vanilla resource files can be a valuable source of inspiration, and you should download the vanilla resource pack!

### In Blockbench

You can write and preview math-based animations in Blockbench.
If you want to create a math-powered animation, create a keyframe at 0 seconds in your timeline and edit the MoLang expressions in the keyframe panel on the left sidebar. You can also mix and match numeric keyframes with math-based keyframes.
Omit quotation marks around the expression. They are only required in raw JSON editing!

Not all queries are supported in Blockbench due to missing context. If you want to preview an animation that uses a specific query, you can add it to the "Variable Placeholders" section right under the keyframe panel to simulate a value.
For example, adding `query.modified_distance_moved = time*8` simulates the modified_distance_moved query with a speed of 8 blocks per second.

## Using queries

The biggest tool you have access to when writing math-based animations is using `queries`. Queries can be used to add outside information into your math expression.

Common ones include:

-   `query.modified_distance_moved`
-   `query.modified_move_speed`
-   `query.anim_time`
-   `query.life_time`

The reason we want to use queries is it allows us to drive animations from gameplay directly. Things like the attack time or distance moved will enable us to drive gameplay directly and allow animations to match the speed of the action.

### Avoiding animation controllers

By using queries, you can avoid the need to create animation controllers. If the entity's speed is directly related to the speed of the walk animation, then by default, an entity that isn't moving won't be animated.

## Example

A specific example is using animations to drive the wheels of a car based on the `modified_distance_moved`:

<CodeHeader></CodeHeader>

```json
{
	"format_version": "1.12.0",
	"animations": {
		"animation.car.wheel_spin": {
			"loop": true,
			"animation_length": 1.0,
			"bones": {
				"front_wheels": {
					"rotation": ["query.modified_distance_moved * -30", 0, 0]
				},
				"back_wheels": {
					"rotation": ["query.modified_distance_moved * -30", 0, 0]
				}
			}
		}
	}
}
```

In this example, the bones/groups `front_wheels` and `back_wheels` are rotated based on the `query.modified_distance_moved`, multiplied by some 30.

This means

-   A car at rests will not spin
-   A car that is driving will spin proportionally fast to the speed of the car
