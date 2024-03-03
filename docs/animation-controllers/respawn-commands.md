---
title: Respawn Commands
tags:
    - recipe
mentions:
    - SirLich
    - solvedDev
    - Joelant05
    - BlueFrog130
    - SmokeyStack
    - MedicalJewel105
    - cda94581
---

<BButton color="blue" link="animation-controllers-intro">Learn more about Animation Controllers</BButton>

This animation controller can be used to run commands, such as re-adding potion effects or giving items when the player respawns.

Simply add the following animation controller to the `player.json`, and you'll be all done!

<CodeHeader>BP/animation_controllers/respawn.ac.json</CodeHeader>

```json
{
	"format_version": "1.10.0",
	"animation_controllers": {
		"controller.animation.death": {
			"initial_state": "initialization",
			"states": {
				"initialization": {
					"transitions": [
						{
							"has_died": "!q.is_alive"
						}
					],
					"on_exit": [
						"v.delay = 0.2 + q.life_time;",
						"/<death command or animation>"
					]
				},
				"has_died": {
					"on_exit": ["/<Respawn command or animation>"],
					"transitions": [
						{
							"initialization": "q.is_alive && (q.life_time >= v.delay)"
						}
					]
				}
			}
		}
	}
}
```
