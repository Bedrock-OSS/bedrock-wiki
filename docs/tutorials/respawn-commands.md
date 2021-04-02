---
layout: page
title: Respawn Commands
parent: Tutorials
---

# Respawn Commands

<details id="toc" open markdown="block">
  <summary>
    Table of contents
  </summary>
  {: .text-delta }
1. TOC
{:toc}
</details>

Intermediate
{: .label .label-yellow }

This animation controller can be used to run commands, such as re-adding potion effects or giving items when the player respawns.

Simply add the animation controller to the `player.json`, and 

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
              "has_died": "!query.is_alive"
            }
          ],
          "on_exit": [
            "variable.delay = 0.2 + query.life_time;",
            "/<death command or animation>",
          ]
        },
        "has_died": {
          "on_exit": [
            "/<Respawn command or animation>",
          ],
          "transitions": [
            {
              "initialization": "query.is_alive && (query.life_time >= variable.delay)"
            }
          ]
        }
      }
    }
  }
}
```