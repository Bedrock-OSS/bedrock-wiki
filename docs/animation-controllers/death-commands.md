---
title: Death Commands
tags:
    - recipe
---

<Button color="blue" link="#animation-controllers/animation-controllers.md">Learn more about Animation Controllers</Button>

I define `Death Effects` as "Doing something when an Entity dies". There are a few wrong ways to achieve this that should be avoided, including:

-   Detecting death in the entity file, adding a component, and _then_ trying to detect that component in the animation controller. This is wrong because the entity will be removed from the world before the animation controller has a chance to run.
-   Detecting the entity death from an outside source, such as a ticking command block. This method isn't _strictly_ wrong, and in some circumstances, it may even be preferred. However it is costly and easy to break.

## Using query.is_alive

The best way to create death effects is by using the `is_alive` query.

Simply create an animation controller with a transition based on `is_alive`. The final `on_entry` will run before the entity is removed from the world, allowing you to run your commands.

Here is a sample animation controller:

<CodeHeader>BP/animation_controllers/death.json</CodeHeader>

```json
{
	"format_version": "1.10.0",
	"animation_controllers": {
		"controller.animation.death": {
			"states": {
				"default": {
					"transitions": [
						{
							"dead": "!query.is_alive"
						}
					]
				},
				"dead": {
					"on_entry": ["/say I am dead!"]
				}
			}
		}
	}
}
```

## Use on player entities

In the case of player entities, an additional transition must be added to the second animation state in order to ensure the state resets between deaths:

<CodeHeader>BP/animation_controllers/death.json</CodeHeader>

```json
{
	"format_version": "1.10.0",
	"animation_controllers": {
		"controller.animation.death": {
			"states": {
				"default": {
					"transitions": [
						{
							"dead": "!query.is_alive"
						}
					]
				},
				"dead": {
					"on_entry": ["/say I am dead!"],
					"transitions": [
						{
							"default": "query.is_alive"
						}
					]
				}
			}
		}
	}
}
```
