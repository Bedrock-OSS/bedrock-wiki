---
title: AFK Detector
tags:
    - recipe
---

### AFK Detector Animation Controller

<BButton color="blue" link="animation-controllers-intro">Learn more about Animation Controllers</BButton>

Here's an example that can be used to track AFK players.

<CodeHeader>BP/animation_controllers/afk.ac.json</CodeHeader>

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
					"on_entry": [
							"v.afk = q.life_time;"
					],
					"transitions": [
						{
							"afk": "(q.life time - v.afk) >= 30 && !q.is_moving"
						},
						{
							"default": "q.is_moving"
						}
					]
				},
				"afk": {
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
-   "stand_still" state checks if player doesn't move in 30 seconds to transmit to "afk", if not return to "default"
-   When the state "afk" gets entered, "on_entry" gets triggered, which runs the following slash commands.
-   "animations" includes the Behavior Animation's shortname that is to be ran during the whole time the state is active, just like in [Resource Animation Controllers](#animation-controller).
-   If the player is moving again, the state will transit to "default" again.
    The commands "on_exit" will be executed.
