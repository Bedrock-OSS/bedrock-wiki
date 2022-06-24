---
title: MoLang into Scoreboard
mentions:
    - SirLich
    - MedicalJewel105
---

From this page you'll learn how to "convert" MoLang (variable or query) into scoreboard.
We will omit some details, such as adding animation to entity, setting a variable and scoreboard.

Here we set value of `molang_to_score` variable to scoreboard `molang`.

<CodeHeader>BP/animations/molang_into_scoreboard.json</CodeHeader>

```json
{
   "format_version":"1.10.0",
   "animations":{
      "animation.molang_into_scoreboard":{
         "animation_length":<last time+0.1>,
         "anim_time_update":"<condition+0.1>",
         "timeline":{
            "0":[
               "/scoreboard players set @s molang 0"
            ],
            "1":[
               "/scoreboard players set @s molang 1"
            ],
            "2":[
               "/scoreboard players set @s molang 2"
            ],
            "3":[
               "/scoreboard players set @s molang 3"
            ],
            "4":[
               "/scoreboard players set @s molang 4"
            ],
            ...
         }
      }
   }
}
```

The minus of this method is that the score doesn't go back.
Remember, you can always write a simple script which will make a timeline for you.
