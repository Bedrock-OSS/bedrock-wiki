---
layout: page
title: Controlling Flying Entities
parent: Tutorials
---

# Controlling Flying Entities

<Label color="yellow">Intermediate</Label>

Whether making a plane or a dragon, adding controllability to flying entities will probably be a challenge to most devs who haven't dabbled around this concept. Since there is no "right" way of adding a piloting mechanic to flying entities, I'll showcase 3 main workaround ways you can use to achieve this.

# Great Jump, Slow Fall

While not exactly "flying", setting the entity's jumping power really high, and giving it slow falling & speed effects as it falls down is probably the most straightforward method.

To achieve this, we will need to add the `"minecraft:horse.jump_strength"` component to our entity. Adding this will not only allow you to control its jumping power, but also disable dismounting when the player presses the jump button.

```json
"minecraft:horse.jump_strength": {
    "value": 7
}
```
We can also use `"value"` as an object to utilize the **range bar** players will see when holding down the jump button.
```json
"minecraft:horse.jump_strength": {
    "value": { "range_min": 0.6, "range_max": 1.2 }
}
```

Now we will to give it slow falling and speed as it's falling down so that it doesn't instantly fall down. To do this, we will make an animation controller and give it those effects when it's not on the ground as so:

(You can read a [tutorial on how to use animation controllers to execute commands here](/tutorials/entity-commands).)
```json
"controller.animation.dragon.flying": {
	"states": {
		"default": {
			"transitions": [{
				"jumping": "!query.is_on_ground"
			}]
		},
		"jumping": {
			"transitions": [{
				"default": "query.is_on_ground"
			}],
			"on_entry": [
				"/effect @s slow_falling 20000 0 true",
				"/effect @s speed 20000 10 true"
			],
			"on_exit": [
				"/effect @s clear"
			]
		}
	}
}
```
We'll also need to hook it up to our entity as so:
```json
"description": {
	"identifier": "ass:dragon",
	"is_spawnable": true,
	"is_summonable": true,
	"is_experimental": false,
	"scripts": { "animate": [ "flying" ] },
	"animations": {
		"flying": "controller.animation.dragon.flying"
	}
}
```
Now, we should have a mechanic at least resemblant of flying. You can change the values like jump_strength and speed, but the entity will always be fall down using this method.

# Controlling Through Looking

This is probably the most popular method of piloting flying entities, and unlike the first method, this one gives players control over vertical movement of the entity so that you don't always have to fall everytime you jump, with the downside being you can't look around freely without changing the entity's vertical trajectory

This method is done by detecting the riding player's vertical rotation, and applying levitation/slow_falling effects to the entity accordingly

There are multiple ways of achieving that, but in this tutorial we'll be using the target selectors `rym` (minimum y-rotation) and `ry` (maximum y-rotation) in a chain of repeating command-blocks to detect the player's pitch, and depending on the range, giving our entity levitation or slow falling.

```
execute @a[rxm=-90,rx=-25] ~~~ effect @e[type=ass:dragon,r=1] levitation 1 6 true
execute @a[rxm=-25,rx=-15] ~~~ effect @e[type=ass:dragon,r=1] levitation 1 3 true
execute @a[rxm=-15,rx=-5] ~~~ effect @e[type=ass:dragon,r=1] levitation 1 2 true
execute @a[rxm=-5,rx=20] ~~~ effect @e[type=ass:dragon,r=1] levitation 1 1 true
execute @a[rxm=20,rx=35] ~~~ effect @e[type=ass:dragon,r=1] slow_falling 1 1 true
execute @a[rxm=35,rx=90] ~~~ effect @e[type=ass:dragon,r=1] clear
```
**Depending on how big your entity is, and how far away the player's seat is from it's pivot, you might need to change the radius `r` to a bigger value.**

After you run those commands in a repeating command block, you should be able to control its vertical movement by looking up and down.

The entity will still probably be too slow when flying, so we'll borrow our animation controller from the first method with some changes to give the entity speed when it's flying
```json
"controller.animation.dragon.flying": {
	"states": {
		"default": {
			"transitions": [{
				"jumping_1": "!query.is_on_ground"
			}]
		},
		"jumping_1": {
			"transitions": [{
					"transition_to_default": "query.is_on_ground"
				},
				{
					"jumping_2": true
				}
			],
			"on_entry": [
				"/effect @s speed 15 10 true"
			]
		},
		"jumping_2": {
			"transitions": [{
					"transition_to_default": "query.is_on_ground"
				},
				{
					"jumping_1": true
				}
			],
			"on_entry": [
				"/effect @s speed 15 10 true"
			]
		},
		"transition_to_default": {
			"transitions": [{
				"transition_to_default": true
			}],
			"on_entry": [
				"/effect @s clear"
			]
		}
	}
}
```
*Since the entity's effects might be cleared when it's being flown, we changed the animation controller to give the entity speed every tick it's not on the ground.*

You might also notice that the entity levitates when you go near it. We can fix this by giving the entity a tag when it's being ridden (and removing it when it isn't), and only applying those effects when the entity has the tag by making and animating another animation controller, and updating our commands.

```json
"controller.animation.dragon.test_rider": {
	"states": {
		"default": {
			"transitions": [{
				"has_rider": "query.has_rider"
			}]
		},
		"has_rider": {
			"transitions": [{
				"default": "!query.has_rider"
			}],
			"on_entry": [
				"/tag @s add has_rider"
			],
			"on_exit": [
				"/tag @s remove has_rider"
			]
		}
	}
}
```

```
execute @a[rxm=-90,rx=-25] ~~~ effect @e[type=ass:dragon,r=1,tag=has_rider] levitation 1 6 true
execute @a[rxm=-25,rx=-15] ~~~ effect @e[type=ass:dragon,r=1,tag=has_rider] levitation 1 3 true
execute @a[rxm=-15,rx=-5] ~~~ effect @e[type=ass:dragon,r=1,tag=has_rider] levitation 1 2 true
execute @a[rxm=-5,rx=20] ~~~ effect @e[type=ass:dragon,r=1,tag=has_rider] levitation 1 1 true
execute @a[rxm=20,rx=35] ~~~ effect @e[type=ass:dragon,r=1,tag=has_rider] slow_falling 1 1 true
execute @a[rxm=35,rx=90] ~~~ effect @e[type=ass:dragon,r=1,tag=has_rider] clear
```

# Controlling Through Jumping

A third method of controlling flying entities uses the player's jump button. The entity rises when the player is holding the jump button and falls when the player releases their jump button.

To do this, we need an animation controller attached to the player rather than the entity itself so we can detect when the player uses their jump button. We also need to disable dismounting when the player presses the jump button.

First, on the entity, disable dismounting and jumping:

```json
"minecraft:horse.jump_strength": {
    "value": 0
},
"minecraft:can_power_jump": {}
```

Next we need an animation controller that causes the entity to levitate when the player uses their jump button and resets the levitation when they release their jump button.

```json
"controller.animation.fly_dragon": {
	"initial_state": "falling",
	"states": {
		"falling": {
			"on_entry": [
				"/effect @e[type=ass:dragon,r=1,c=1] levitation 0"
			],
			"transitions": [
				{ "rising": "query.is_jumping" }
			]
		},
		"rising": {
			"on_entry": [
				"/effect @e[type=ass:dragon,r=1,c=1] levitation 100000 6 true"
			],
			"transitions": [
				{ "falling": "!query.is_jumping" }
			]
		}
	}
}
```

Now, we need a copy of the player's behavior file, which we are going to modify slightly. You can find the player's behavior file in the vanilla behavior pack provided by Mojang (found [here](https://aka.ms/behaviorpacktemplate)). Once you have copied the player's behavior file to your own behavior pack, find their `"description"` object and add the animation controller. We also want to ensure that the entity will only respond to the player's jump input when the player is actually riding it, so we can use a MoLang query in the player's behavior to only activate the animation controller when the player is riding.

```json
"description": {
	"identifier": "minecraft:player",
	"is_spawnable": false,
	"is_summonable": false,
	"animations": {
		"fly_dragon": "controller.animation.fly_dragon"
	},
	"scripts": {
		"animate": [
			{ "fly_dragon": "query.is_riding" }
		]
	}
}
```

The entity can now be controlled with the jump key, but there's a bug. If the player dismounts the entity while holding the jump key, it will continue rising. We can fix this with an animation controller on the entity itself that resets the levitation whenever a player dismounts it.

```json
"controller.animation.reset_levitation": {
	"initial_state": "no_rider",
	"states": {
		"no_rider": {
			"transitions": [
				{ "has_rider": "query.has_rider" }
			]
		},
		"has_rider": {
			"on_exit": [
				"/effect @s levitation 0"
			],
			"transitions": [
				{ "no_rider": "!query.has_rider" }
			]
		}
	}
}
```
