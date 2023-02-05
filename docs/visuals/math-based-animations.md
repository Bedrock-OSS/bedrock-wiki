---
title: Math-based Animations
tags:
    - intermediate
category:
	- General
---

Math animations are a powerful alternative to keyframe animations. Generally speaking, `math-based animations` is the concept of using Molang expressions to animate entity geometry. All vanilla animations are math-based, here is an example:

<CodeHeader></CodeHeader>

```json
"leftarm" : {
    "rotation" : [ "((-0.2 + 1.5 * (math.abs(math.mod(query.modified_distance_moved, 13) - 6.5) - 3.25) / 3.25) * query.modified_move_speed) * 57.3 - variable.agent.armxrotationfactor", 0.0, "-variable.agent.armzrotation" ]
},
```

As you can see, math-based animations can be quite complicated and difficult to understand. Thus, they should be treated as a _specialized-alternative_ to using key-frames - not a *total* replacement.

This is the cost of the smooth and ideal loop of the animation.

![](/assets/images/visuals/math-based-animations/animation-1.gif)

## Writing Math-Animations

### By Hand

To write such an animation by hand, simply create an animation file and substitute keyframes for singular arrays of values; strings values are accepted, and it is in a string that one may place a math expression. The Vanilla files can prove an invaluable reference for these types of animations, and it is **strongly** recommended you download and preview them!

As an important tip for those who wish to *visualise* their processes, the tool, [Molang Grapher](https://jannisx11.github.io/molang-grapher/) from [Jannis](https://twitter.com/jannisx11) may simulate expressions on a proper graph! 

### In Blockbench

Blockbench allows - to a degree - for the creation and live-previewing of most math-based animations.
To begin, first create a new keyframe at frame 0 in your timeline. You may then add and edit MoLang expressions in the keyframe panel on the left sidebar. Mixing keyframes and math is supported.
**Remember**, you should always omit quotation marks around expressions; they are only required in raw JSON-editing!

Do mind that not all MoLang queries are supported in Blockbench in part due to missing game-context. If you wish to preview an animation that uses a context-specific query, you may add it to the Variable Placeholders section, just underneath the keyframe panel, to simulate a value.
For example, adding `query.modified_distance_moved = time*8` simulates the `modified_distance_moved` query with a speed of 8 blocks per second.

## Using Queries

The largest and most useful of tools in our mathematical repertoire is the wide array of MoLang "Queries". Queries can be used to add outside information into your math expression.

Common Queries include:

-   `query.modified_distance_moved`
-   `query.modified_move_speed`
-   `query.anim_time`
-   `query.life_time`

These are utilised in animations to draw things such as the attack-time or distance-moved from the game-world to provide a more dyanamic and synced flow.

### Avoiding Animation Controllers

By using queries, you can avoid the need to create animation controllers. If the entity's speed is directly related to the speed of the walk animation, then by default, an entity that isn't moving won't be animated.

## Example

A specific application example of a Math-Based animation may be found below. The example utilises the MoLang Query, `"query.modified_distance_moved"`:

<CodeHeader></CodeHeader>

```json
{
	"format_version": "1.12.0",
	"animations": {
		"animation.car.wheel_spin": {
			"loop": true,
			"bones": {
			
				"front_wheels": {
					"rotation": [ "query.modified_distance_moved * -30", 0, 0 ]
				},
				
				"back_wheels": {
					"rotation": [ "query.modified_distance_moved * -30", 0, 0 ]
				}
				
			}
		}
	}
}
```

In this example, the model's bones, `front_wheels` and `back_wheels`, are rotated on the X-axis based on information passed from `query.modified_distance_moved`, then multiplied by -30.

This means that a car at *rest* **will not** spin, and a car that is *driving* **will spin** - doing so at a rate proportional to the car's movement speed.
