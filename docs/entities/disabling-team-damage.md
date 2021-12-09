---
title: Disabling Team-damage
category: Tutorials
tags:
    - intermediate
---

If you wish to disable team damage (so one cannot hurt their teammates), assign a tag with the team name to every teammate (I'm going to use `team1`, `team2`, `team3` and `team4` for this example).
Now add this damage sensor component into your `player.json`s `"components": {}`. See comments for explanation.

<CodeHeader>BP/entities/player.json#components</CodeHeader>

```json
"minecraft:damage_sensor":{
   "triggers":[
      { //if you already have a damage sensor, simply copy this object into the "triggers" array
         "on_damage":{
            "filters":{
               "any_of":[
                  {
                     "all_of":[
                        { "test":"has_tag", "value":"team1" }, //Does the player have this tag?
                        { "test":"has_tag", "subject":"other", "value":"team1" } //If so, does the entity they're trying to hurt have this tag?
                     ]
                  },
                  {
                     "all_of":[
                        { "test":"has_tag", "value":"team2" }, //repeats for every team
                        { "test":"has_tag", "subject":"other", "value":"team2" }
                     ]
                  },
                  {
                     "all_of":[
                        { "test":"has_tag", "value":"team3" },
                        { "test":"has_tag", "subject":"other", "value":"team3" }
                     ]
                  },
                  {
                     "all_of":[
                        { "test":"has_tag", "value":"team4" },
                        { "test":"has_tag", "subject":"other", "value":"team4" }
                     ]
                  },
                  {
                     "all_of":[
                        { "test":"has_tag", "value":"team5" },
                        { "test":"has_tag", "subject":"other", "value":"team5" }
                     ]
                  }
               ]
            }
         },
         "deals_damage":false //if any of these filters evaluate to true in the current attack interaction, the target will not be hurt.
      }
   ]
}
```
