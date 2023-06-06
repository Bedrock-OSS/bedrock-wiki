---
title: Molang into Scoreboard
mentions:
    - SirLich
    - MedicalJewel105
    - shanewolf38
    - Luthorius
    - TheItsNameless
    - ThomasOrs
---

The following provides a method to read any Molang (variable, query, etc.) into a score instantly. Ensure that the animation name called in the controllers `convert` state matches the name of the animation (animation.namespace.molang_to_score) as defined in the entity.

**NOTE:** These two commands must be run in the world as part of the setup:
`/scoreboard objectives add MoLang dummy`
`/scoreboard players set "#10" MoLang 10`

<CodeHeader>BP/animation_controllers/molang_to_score.animation_controllers.json</CodeHeader>

```json
"controller.animation.namespace.molang_to_score": {
  "initial_state": "idle",
  "states": {
    "idle": {
      "transitions": [ { "convert": "<condition to start conversion>" } ],
      "on_exit": [ "/scoreboard players set @s MoLang 0", "/scoreboard players set \"#var\" MoLang 0", "v.convert = <variable to convert>;", "v.digit = 1000000000;" ]
    },
    "convert": {
      "animations": [
        "molang_to_score",
        "molang_to_score",
        "molang_to_score",
        "molang_to_score",
        "molang_to_score",
        "molang_to_score",
        "molang_to_score",
        "molang_to_score",
        "molang_to_score",
        "molang_to_score",
        "molang_to_score"
      ],
      "transitions": [ { "idle": "1" } ]
    }
  }
}
```

<CodeHeader>BP/animations/molang_to_score.animation.json</CodeHeader>

```json
"animation.namespace.molang_to_score": {
  "animation_length": 10.0,
  "anim_time_update": "t.digit = Math.mod(Math.floor(v.convert / v.digit), 10) + 0.1; v.digit = v.digit / 10; return t.digit;",
  "timeline": {
    "0.0": [ "/scoreboard players operation @s MoLang *= \"#10\" MoLang", "/scoreboard players operation @s MoLang += \"#var\" MoLang", "/scoreboard players set \"#var\" MoLang 0" ],
    "1.0": [ "/scoreboard players set \"#var\" MoLang 1" ],
    "2.0": [ "/scoreboard players set \"#var\" MoLang 2" ],
    "3.0": [ "/scoreboard players set \"#var\" MoLang 3" ],
    "4.0": [ "/scoreboard players set \"#var\" MoLang 4" ],
    "5.0": [ "/scoreboard players set \"#var\" MoLang 5" ],
    "6.0": [ "/scoreboard players set \"#var\" MoLang 6" ],
    "7.0": [ "/scoreboard players set \"#var\" MoLang 7" ],
    "8.0": [ "/scoreboard players set \"#var\" MoLang 8" ],
    "9.0": [ "/scoreboard players set \"#var\" MoLang 9" ]
  }
}
```

**Explanation:** When the conversion begins, the controller resets the player's Molang score and `#var`'s (fake player) Molang score. The conversion variable `v.convert` is initialized and the digit variable `v.digit` is set to grab the 10th digit (10^10). The first animation then runs, setting the animation time equal to the 10th digit and setting the digit variable to grab the next digit (digit 9, 10^9). Because all timeline indices are run up until the time set, the "0.0" entry of the timeline will always run. This multiplies the player's Molang score by 10 to set the correct digit and then adds on the last digit grabbed (for the first run this will always be 0, as `#var` was reset by the controller). The process then repeats 10 more times to grab all 10 digits of the conversion variable. Recall that each animation grabs the digit set by the previous animation, which is why the animation is run 11 times.


To perform a test of the conversion in-game, set `<condition to start conversion>` to `q.is_using_item` and `<variable to convert>` to `Math.random_integer(0, 9999)`. Grab yourself an apple, start eating and watch the numbers roll.
