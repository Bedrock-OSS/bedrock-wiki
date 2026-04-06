---
title: Dynamic Displays
category: Techniques
tags:
    - intermediate
mentions:
    - BedrockCommands
    - zheaEvyline
    - mittens4all
nav_order: 9
description: Learn how to create custom and dynamic displays with commands.
---

## Introduction

[Sourced by the Bedrock Commands Community (BCC) Discord](https://bedrockcommands.org/)

In this guide, you will learn how to display custom, dynamic text to players based on scores, using commands. This is an effective alternative to using individual `/tellraw` or `/titleraw` messages for each possible outcome.

:::info NOTE:
This technique is primarily used when a player's score exceeds 9. For a simplified version using only score ranges of 1-9, see **[here](/text/rawtext#ordering-with)**

To get the most out of this guide, ensure you have a baseline understanding of **[Raw Text](/text/rawtext)**.
:::

## Video Demonstration

<YouTubeEmbed id="s8QGwsHuEk4" />

## Key Concepts

:::tip

Think of this system like a library: `wiki:array` picks the bookshelf (1-9), and `wiki:element` picks the specific book on that shelf (1-9). This allows you to store 81 different 'texts' total.

:::

| **Term**                 | **What it is**       | **Why we use it**                                                                            |
| :----------------------- | :------------------- | :------------------------------------------------------------------------------------------- |
| **`translate`**          | Text component       | Acts as a "container" for your list of custom messages.                                      |
| **`with`**               | Argument List        | The list of "slots" where your text or scores are inserted.                                  |
| **`score`**              | Data Fetcher         | Gets a player's score and turns it into text for the command.                                |
| **`wiki:var`**           | Input Score          | The actual rank or level number you want to turn into text.                                  |
| **`wiki:q.var_changed`** | Query Score          | Detects updates to the input score to trigger scoreboard operations only when value changes. |
| **`wiki:delta_var`**     | Difference Score     | Detects if the player's score has changed since the last update.                             |
| **`wiki:element`**       | "The Book"           | A score (1-9) that selects the specific message within a group.                              |
| **`wiki:array`**         | "The Shelf"          | A score (1-9) that selects a group of 9 possible messages.                                   |
| **`%%%%s`**              | Placeholder          | A technical trick that lets a score choose which message to display.                         |

**System Logic Breakdown**

- The Inputs & Query: `wiki:var`, `wiki:delta_var`, and `wiki:q.var_changed` track **when** the text needs to update.
- The Math: `wiki:array` and `wiki:element` calculate **where** the specific text is located in your list.

:::warning

  - Only single-digit positive integers (1-9) are used in the format specifier `%%#`. When creating your system, make sure player scores are positive integers.
  - This command block system covers a range of 1-81. For larger ranges, see the function setup **[here](/commands/dynamic-displays#function-setup)**.

:::

## Setup

_Type the following commands in Chat:_

<CodeHeader></CodeHeader>

```yaml
## Add Objectives
### Query / State Machine
/scoreboard objectives add wiki:q.var_changed dummy
### Math
/scoreboard objectives add wiki:const dummy
/scoreboard objectives add wiki:array dummy
/scoreboard objectives add wiki:element dummy
/scoreboard objectives add wiki:var dummy
/scoreboard objectives add wiki:delta_var dummy

## Initialize Scores
### Constants
/scoreboard players set .1 wiki:const 1
/scoreboard players set .8 wiki:const 8
/scoreboard players set .9 wiki:const 9
```

## System

<CodeHeader>BP/functions/wiki/rawtext/display_logic.mcfunction</CodeHeader>

```yaml
## Detect Change in Main Score to Trigger Calculations
### Set score change query state to false (0) by default
scoreboard players set @a[scores={wiki:q.var_changed=1}] wiki:q.var_changed 0
### Set score change query state to true (1) if current score does not match score from previous tick
execute as @a unless entity @s[scores={wiki:var=82..}] unless score @s wiki:delta_var = @s wiki:var run scoreboard players set @s wiki:q.var_changed 1

## Calculate Element Index
### Determine the element, or which "book" should be chosen
execute as @a[scores={wiki:q.var_changed=1}] run scoreboard players operation @s wiki:element = @s wiki:var
### Subtract by 1 to prevent remainder 0 for 9th position
execute as @a[scores={wiki:q.var_changed=1}] run scoreboard players operation @s wiki:element -= .1 wiki:const
### Perform modulo (%) operation and add 1 back to get its specific position (1-9)
execute as @a[scores={wiki:q.var_changed=1}] run scoreboard players operation @s wiki:element %= .9 wiki:const
execute as @a[scores={wiki:q.var_changed=1}] run scoreboard players operation @s wiki:element += .1 wiki:const

## Calculate Array Index
### Determine the array, or which "shelf" the book belongs to
execute as @a[scores={wiki:q.var_changed=1}] run scoreboard players operation @s wiki:array = @s wiki:var
### Add 8 (divisor-1) to ensure it correctly moves to the next "shelf" even when value isn't a multiple of 9
execute as @a[scores={wiki:q.var_changed=1}] run scoreboard players operation @s wiki:array += .8 wiki:const
### Divide by 9 to get its specific position (1-9)
execute as @a[scores={wiki:q.var_changed=1}] run scoreboard players operation @s wiki:array /= .9 wiki:const

## Save Current Score
### Assign 'wiki:var' score to 'wiki:delta_var' score to compare change in the next game tick
execute as @a unless score @s wiki:delta_var = @s wiki:var run scoreboard players operation @s wiki:delta_var = @s wiki:var
```

![Chain of Ten Command Blocks](/assets/images/commands/command-block-chain/10.png)

**Note:** Place the titleraw command last in the command block chain if you plan to run the command continuously.

## Titleraw Template

<CodeHeader></CodeHeader>

```json
titleraw @a actionbar {"rawtext":[{"translate":"%%%%s","with":{"rawtext":[{"score":{"name":"*","objective":"wiki:array"}},{"rawtext":[{"translate":"%%%%s","with":{"rawtext":[{"score":{"name":"*","objective":"wiki:element"}},{"text":"Shelf: 1, Book: 1"},{"text":"Shelf: 1, Book: 2"},{"text":"Shelf: 1, Book: 3"},{"text":"Shelf: 1, Book: 4"},{"text":"Shelf: 1, Book: 5"},{"text":"Shelf: 1, Book: 6"},{"text":"Shelf: 1, Book: 7"},{"text":"Shelf: 1, Book: 8"},{"text":"Shelf: 1, Book: 9"}]}}]},{"rawtext":[{"translate":"%%%%s","with":{"rawtext":[{"score":{"name":"*","objective":"wiki:element"}},{"text":"Shelf: 2, Book: 1"},{"text":"Shelf: 2, Book: 2"},{"text":"Shelf: 2, Book: 3"},{"text":"Shelf: 2, Book: 4"},{"text":"Shelf: 2, Book: 5"},{"text":"Shelf: 2, Book: 6"},{"text":"Shelf: 2, Book: 7"},{"text":"Shelf: 2, Book: 8"},{"text":"Shelf: 2, Book: 9"}]}}]},{"rawtext":[{"translate":"%%%%s","with":{"rawtext":[{"score":{"name":"*","objective":"wiki:element"}},{"text":"Shelf: 3, Book: 1"},{"text":"Shelf: 3, Book: 2"},{"text":"Shelf: 3, Book: 3"},{"text":"Shelf: 3, Book: 4"},{"text":"Shelf: 3, Book: 5"},{"text":"Shelf: 3, Book: 6"},{"text":"Shelf: 3, Book: 7"},{"text":"Shelf: 3, Book: 8"},{"text":"Shelf: 3, Book: 9"}]}}]},{"rawtext":[{"translate":"%%%%s","with":{"rawtext":[{"score":{"name":"*","objective":"wiki:element"}},{"text":"Shelf: 4, Book: 1"},{"text":"Shelf: 4, Book: 2"},{"text":"Shelf: 4, Book: 3"},{"text":"Shelf: 4, Book: 4"},{"text":"Shelf: 4, Book: 5"},{"text":"Shelf: 4, Book: 6"},{"text":"Shelf: 4, Book: 7"},{"text":"Shelf: 4, Book: 8"},{"text":"Shelf: 4, Book: 9"}]}}]},{"rawtext":[{"translate":"%%%%s","with":{"rawtext":[{"score":{"name":"*","objective":"wiki:element"}},{"text":"Shelf: 5, Book: 1"},{"text":"Shelf: 5, Book: 2"},{"text":"Shelf: 5, Book: 3"},{"text":"Shelf: 5, Book: 4"},{"text":"Shelf: 5, Book: 5"},{"text":"Shelf: 5, Book: 6"},{"text":"Shelf: 5, Book: 7"},{"text":"Shelf: 5, Book: 8"},{"text":"Shelf: 5, Book: 9"}]}}]},{"rawtext":[{"translate":"%%%%s","with":{"rawtext":[{"score":{"name":"*","objective":"wiki:element"}},{"text":"Shelf: 6, Book: 1"},{"text":"Shelf: 6, Book: 2"},{"text":"Shelf: 6, Book: 3"},{"text":"Shelf: 6, Book: 4"},{"text":"Shelf: 6, Book: 5"},{"text":"Shelf: 6, Book: 6"},{"text":"Shelf: 6, Book: 7"},{"text":"Shelf: 6, Book: 8"},{"text":"Shelf: 6, Book: 9"}]}}]},{"rawtext":[{"translate":"%%%%s","with":{"rawtext":[{"score":{"name":"*","objective":"wiki:element"}},{"text":"Shelf: 7, Book: 1"},{"text":"Shelf: 7, Book: 2"},{"text":"Shelf: 7, Book: 3"},{"text":"Shelf: 7, Book: 4"},{"text":"Shelf: 7, Book: 5"},{"text":"Shelf: 7, Book: 6"},{"text":"Shelf: 7, Book: 7"},{"text":"Shelf: 7, Book: 8"},{"text":"Shelf: 7, Book: 9"}]}}]},{"rawtext":[{"translate":"%%%%s","with":{"rawtext":[{"score":{"name":"*","objective":"wiki:element"}},{"text":"Shelf: 8, Book: 1"},{"text":"Shelf: 8, Book: 2"},{"text":"Shelf: 8, Book: 3"},{"text":"Shelf: 8, Book: 4"},{"text":"Shelf: 8, Book: 5"},{"text":"Shelf: 8, Book: 6"},{"text":"Shelf: 8, Book: 7"},{"text":"Shelf: 8, Book: 8"},{"text":"Shelf: 8, Book: 9"}]}}]},{"rawtext":[{"translate":"%%%%s","with":{"rawtext":[{"score":{"name":"*","objective":"wiki:element"}},{"text":"Shelf: 9, Book: 1"},{"text":"Shelf: 9, Book: 2"},{"text":"Shelf: 9, Book: 3"},{"text":"Shelf: 9, Book: 4"},{"text":"Shelf: 9, Book: 5"},{"text":"Shelf: 9, Book: 6"},{"text":"Shelf: 9, Book: 7"},{"text":"Shelf: 9, Book: 8"},{"text":"Shelf: 9, Book: 9"}]}}]}]}}]}
```

:::tip
For convenience, work with this file provided below. Once you have finalized your changes, use the **[JSON Minifier](https://codebeautify.org/jsonminifier)** to compress the code before pasting it into your `/titleraw` command.
:::

<Spoiler title="Titleraw Template Readable JSON">

<CodeHeader></CodeHeader>

```json
{"rawtext": [{"translate": "%%%%s","with": {"rawtext": [{"score": {"name": "*","objective": "wiki:array"}},


          {"rawtext": [{"translate": "%%%%s","with": {"rawtext": [{"score": {"name": "*","objective": "wiki:element"}},
                    {"text": "Shelf: 1, Book: 1"},
                    {"text": "Shelf: 1, Book: 2"},
                    {"text": "Shelf: 1, Book: 3"},
                    {"text": "Shelf: 1, Book: 4"},
                    {"text": "Shelf: 1, Book: 5"},
                    {"text": "Shelf: 1, Book: 6"},
                    {"text": "Shelf: 1, Book: 7"},
                    {"text": "Shelf: 1, Book: 8"},
                    {"text": "Shelf: 1, Book: 9"}
                  ]}}]},


          {"rawtext": [{"translate": "%%%%s","with": {"rawtext": [{"score": {"name": "*","objective": "wiki:element"}},
                    {"text": "Shelf: 2, Book: 1"},
                    {"text": "Shelf: 2, Book: 2"},
                    {"text": "Shelf: 2, Book: 3"},
                    {"text": "Shelf: 2, Book: 4"},
                    {"text": "Shelf: 2, Book: 5"},
                    {"text": "Shelf: 2, Book: 6"},
                    {"text": "Shelf: 2, Book: 7"},
                    {"text": "Shelf: 2, Book: 8"},
                    {"text": "Shelf: 2, Book: 9"}
                  ]}}]},


          {"rawtext": [{"translate": "%%%%s","with": {"rawtext": [{"score": {"name": "*","objective": "wiki:element"}},
                    {"text": "Shelf: 3, Book: 1"},
                    {"text": "Shelf: 3, Book: 2"},
                    {"text": "Shelf: 3, Book: 3"},
                    {"text": "Shelf: 3, Book: 4"},
                    {"text": "Shelf: 3, Book: 5"},
                    {"text": "Shelf: 3, Book: 6"},
                    {"text": "Shelf: 3, Book: 7"},
                    {"text": "Shelf: 3, Book: 8"},
                    {"text": "Shelf: 3, Book: 9"}
                  ]}}]},


          {"rawtext": [{"translate": "%%%%s","with": {"rawtext": [{"score": {"name": "*","objective": "wiki:element"}},
                    {"text": "Shelf: 4, Book: 1"},
                    {"text": "Shelf: 4, Book: 2"},
                    {"text": "Shelf: 4, Book: 3"},
                    {"text": "Shelf: 4, Book: 4"},
                    {"text": "Shelf: 4, Book: 5"},
                    {"text": "Shelf: 4, Book: 6"},
                    {"text": "Shelf: 4, Book: 7"},
                    {"text": "Shelf: 4, Book: 8"},
                    {"text": "Shelf: 4, Book: 9"}
                  ]}}]},


          {"rawtext": [{"translate": "%%%%s","with": {"rawtext": [{"score": {"name": "*","objective": "wiki:element"}},
                    {"text": "Shelf: 5, Book: 1"},
                    {"text": "Shelf: 5, Book: 2"},
                    {"text": "Shelf: 5, Book: 3"},
                    {"text": "Shelf: 5, Book: 4"},
                    {"text": "Shelf: 5, Book: 5"},
                    {"text": "Shelf: 5, Book: 6"},
                    {"text": "Shelf: 5, Book: 7"},
                    {"text": "Shelf: 5, Book: 8"},
                    {"text": "Shelf: 5, Book: 9"}
                  ]}}]},


          {"rawtext": [{"translate": "%%%%s","with": {"rawtext": [{"score": {"name": "*","objective": "wiki:element"}},
                    {"text": "Shelf: 6, Book: 1"},
                    {"text": "Shelf: 6, Book: 2"},
                    {"text": "Shelf: 6, Book: 3"},
                    {"text": "Shelf: 6, Book: 4"},
                    {"text": "Shelf: 6, Book: 5"},
                    {"text": "Shelf: 6, Book: 6"},
                    {"text": "Shelf: 6, Book: 7"},
                    {"text": "Shelf: 6, Book: 8"},
                    {"text": "Shelf: 6, Book: 9"}
                  ]}}]},


          {"rawtext": [{"translate": "%%%%s","with": {"rawtext": [{"score": {"name": "*","objective": "wiki:element"}},
                    {"text": "Shelf: 7, Book: 1"},
                    {"text": "Shelf: 7, Book: 2"},
                    {"text": "Shelf: 7, Book: 3"},
                    {"text": "Shelf: 7, Book: 4"},
                    {"text": "Shelf: 7, Book: 5"},
                    {"text": "Shelf: 7, Book: 6"},
                    {"text": "Shelf: 7, Book: 7"},
                    {"text": "Shelf: 7, Book: 8"},
                    {"text": "Shelf: 7, Book: 9"}
                  ]}}]},


          {"rawtext": [{"translate": "%%%%s","with": {"rawtext": [{"score": {"name": "*","objective": "wiki:element"}},
                    {"text": "Shelf: 8, Book: 1"},
                    {"text": "Shelf: 8, Book: 2"},
                    {"text": "Shelf: 8, Book: 3"},
                    {"text": "Shelf: 8, Book: 4"},
                    {"text": "Shelf: 8, Book: 5"},
                    {"text": "Shelf: 8, Book: 6"},
                    {"text": "Shelf: 8, Book: 7"},
                    {"text": "Shelf: 8, Book: 8"},
                    {"text": "Shelf: 8, Book: 9"}
                  ]}}]},


          {"rawtext": [{"translate": "%%%%s","with": {"rawtext": [{"score": {"name": "*","objective": "wiki:element"}},
                    {"text": "Shelf: 9, Book: 1"},
                    {"text": "Shelf: 9, Book: 2"},
                    {"text": "Shelf: 9, Book: 3"},
                    {"text": "Shelf: 9, Book: 4"},
                    {"text": "Shelf: 9, Book: 5"},
                    {"text": "Shelf: 9, Book: 6"},
                    {"text": "Shelf: 9, Book: 7"},
                    {"text": "Shelf: 9, Book: 8"},
                    {"text": "Shelf: 9, Book: 9"}
                  ]}}]}
        ]
      }
    }
  ]
}
```

</Spoiler>

## Function Method

This method uses nested translates to allow scores greater than 81. It uses a slightly modified `display_logic.mcfunction` and an additional score holder is set to 81.

### Function Setup

<CodeHeader>BP/functions/wiki/scoreboard/objectives/add_all.mcfunction</CodeHeader>

```yaml
## Query / State Machine
scoreboard objectives add wiki:q.is_initialised dummy

## Math
scoreboard objectives add wiki:const dummy
scoreboard objectives add wiki:array dummy
scoreboard objectives add wiki:element dummy
scoreboard objectives add wiki:var dummy
scoreboard objectives add wiki:delta_var dummy
```

<CodeHeader>BP/functions/wiki/scoreboard/players/set_all.mcfunction</CodeHeader>

```yaml
## Constants
scoreboard players set .1 wiki:const 1
scoreboard players set .8 wiki:const 8
scoreboard players set .9 wiki:const 9
scoreboard players set .81 wiki:const 81
```

<CodeHeader>BP/functions/wiki/event/world/on_initialise.mcfunction</CodeHeader>

```yaml
## Add Objectives
function wiki/scoreboard/objectives/add_all

## Initialize All Constant & Variable Scores
function wiki/scoreboard/players/set_all

## Mark World as Initialized
scoreboard players set .World wiki:q.is_initialised 1
```

<CodeHeader>BP/functions/wiki/main.mcfunction</CodeHeader>

```yaml
# ON FIRST WORLD LOAD
execute unless score .World wiki:q.is_initialised matches 1 run function wiki/event/world/on_initialise


# DYNAMIC DISPLAY LOGIC
execute as @a unless score @s wiki:delta_var = @s wiki:var run function wiki/rawtext/display_logic
```

### Function TICK.JSON

<CodeHeader>BP/functions/tick.json</CodeHeader>

```json
{
  "values": [
    "wiki/main"
  ]
}
```

### Function System

<CodeHeader>BP/functions/wiki/rawtext/display_logic.mcfunction</CodeHeader>

```yaml
## Normalize Selection Range
### Map scores higher than 81 back into a 1-81 range so the library logic can loop
scoreboard players operation @s wiki:delta_var = @s wiki:var
### Use modulo 81 to find the position within the current "Set"
execute if score @s wiki:delta_var matches 81.. run scoreboard players operation @s wiki:delta_var %= .81 wiki:const
### Ensure a remainder of 0 is treated as the 81st element of the previous set
execute if score @s wiki:delta_var matches 0 run scoreboard players set @s wiki:delta_var 81

## Calculate Element Index
### Determine the element, or which "book" should be chosen
scoreboard players operation @s wiki:element = @s wiki:delta_var
### Subtract by 1 to prevent remainder 0 for 9th position
scoreboard players operation @s wiki:element -= .1 wiki:const
### Perform modulo (%) operation and add 1 back to get its specific position (1-9)
scoreboard players operation @s wiki:element %= .9 wiki:const
scoreboard players operation @s wiki:element += .1 wiki:const

## Calculate Array Index
### Determine the array, or which "shelf" the book belongs to
scoreboard players operation @s wiki:array = @s wiki:delta_var
### Add 8 (divisor-1) to ensure it correctly moves to the next "shelf" even when value isn't a multiple of 9
scoreboard players operation @s wiki:array += .8 wiki:const
### Divide by 9 to get its specific position (1-9)
scoreboard players operation @s wiki:array /= .9 wiki:const

## Display Titleraw
### Call the specific display function based on which "Set" of 81 the player is currently in
execute as @s[scores={wiki:var=1..81}] run function wiki/rawtext/display/1
execute as @s[scores={wiki:var=82..162}] run function wiki/rawtext/display/2
execute as @s[scores={wiki:var=163..243}] run function wiki/rawtext/display/3

## Save Current Score
### Assign 'wiki:var' score to 'wiki:delta_var' score to compare change in the next game tick
execute unless score @s wiki:delta_var = @s wiki:var run scoreboard players operation @s wiki:delta_var = @s wiki:var
```

### Function Titleraw Templates

<CodeHeader>BP/functions/wiki/rawtext/display/1.mcfunction</CodeHeader>

```json
titleraw @a actionbar {"rawtext":[{"translate":"%%%%s", "with":{"rawtext":[{"score":{"name":"*", "objective":"wiki:array"}}, {"rawtext":[{"translate":"%%%%s", "with":{"rawtext":[{"score":{"name":"*", "objective":"wiki:element"}}, {"text":"1"}, {"text":"2"}, {"text":"3"}, {"text":"4"}, {"text":"5"}, {"text":"6"}, {"text":"7"}, {"text":"8"}, {"text":"9"}]}}]}, {"rawtext":[{"translate":"%%%%s", "with":{"rawtext":[{"score":{"name":"*", "objective":"wiki:element"}}, {"text":"10"}, {"text":"11"}, {"text":"12"}, {"text":"13"}, {"text":"14"}, {"text":"15"}, {"text":"16"}, {"text":"17"}, {"text":"18"}]}}]}, {"rawtext":[{"translate":"%%%%s", "with":{"rawtext":[{"score":{"name":"*", "objective":"wiki:element"}}, {"text":"19"}, {"text":"20"}, {"text":"21"}, {"text":"22"}, {"text":"23"}, {"text":"24"}, {"text":"25"}, {"text":"26"}, {"text":"27"}]}}]}, {"rawtext":[{"translate":"%%%%s", "with":{"rawtext":[{"score":{"name":"*", "objective":"wiki:element"}}, {"text":"28"}, {"text":"29"}, {"text":"30"}, {"text":"31"}, {"text":"32"}, {"text":"33"}, {"text":"34"}, {"text":"35"}, {"text":"36"}]}}]}, {"rawtext":[{"translate":"%%%%s", "with":{"rawtext":[{"score":{"name":"*", "objective":"wiki:element"}}, {"text":"37"}, {"text":"38"}, {"text":"39"}, {"text":"40"}, {"text":"41"}, {"text":"42"}, {"text":"43"}, {"text":"44"}, {"text":"45"}]}}]}, {"rawtext":[{"translate":"%%%%s", "with":{"rawtext":[{"score":{"name":"*", "objective":"wiki:element"}}, {"text":"46"}, {"text":"47"}, {"text":"48"}, {"text":"49"}, {"text":"50"}, {"text":"51"}, {"text":"52"}, {"text":"53"}, {"text":"54"}]}}]}, {"rawtext":[{"translate":"%%%%s", "with":{"rawtext":[{"score":{"name":"*", "objective":"wiki:element"}}, {"text":"55"}, {"text":"56"}, {"text":"57"}, {"text":"58"}, {"text":"59"}, {"text":"60"}, {"text":"61"}, {"text":"62"}, {"text":"63"}]}}]}, {"rawtext":[{"translate":"%%%%s", "with":{"rawtext":[{"score":{"name":"*", "objective":"wiki:element"}}, {"text":"64"}, {"text":"65"}, {"text":"66"}, {"text":"67"}, {"text":"68"}, {"text":"69"}, {"text":"70"}, {"text":"71"}, {"text":"72"}]}}]}, {"rawtext":[{"translate":"%%%%s", "with":{"rawtext":[{"score":{"name":"*", "objective":"wiki:element"}}, {"text":"73"}, {"text":"74"}, {"text":"75"}, {"text":"76"}, {"text":"77"}, {"text":"78"}, {"text":"79"}, {"text":"80"}, {"text":"81"}]}}]}]}}]}
```

<CodeHeader>BP/functions/wiki/rawtext/display/2.mcfunction</CodeHeader>

```json
titleraw @a actionbar {"rawtext":[{"translate":"%%%%s", "with":{"rawtext":[{"score":{"name":"*", "objective":"wiki:array"}}, {"rawtext":[{"translate":"%%%%s", "with":{"rawtext":[{"score":{"name":"*", "objective":"wiki:element"}}, {"text":"82"}, {"text":"83"}, {"text":"84"}, {"text":"85"}, {"text":"86"}, {"text":"87"}, {"text":"88"}, {"text":"89"}, {"text":"90"}]}}]}, {"rawtext":[{"translate":"%%%%s", "with":{"rawtext":[{"score":{"name":"*", "objective":"wiki:element"}}, {"text":"91"}, {"text":"92"}, {"text":"93"}, {"text":"94"}, {"text":"95"}, {"text":"96"}, {"text":"97"}, {"text":"98"}, {"text":"99"}]}}]}, {"rawtext":[{"translate":"%%%%s", "with":{"rawtext":[{"score":{"name":"*", "objective":"wiki:element"}}, {"text":"100"}, {"text":"101"}, {"text":"102"}, {"text":"103"}, {"text":"104"}, {"text":"105"}, {"text":"106"}, {"text":"107"}, {"text":"108"}]}}]}, {"rawtext":[{"translate":"%%%%s", "with":{"rawtext":[{"score":{"name":"*", "objective":"wiki:element"}}, {"text":"109"}, {"text":"110"}, {"text":"111"}, {"text":"112"}, {"text":"113"}, {"text":"114"}, {"text":"115"}, {"text":"116"}, {"text":"117"}]}}]}, {"rawtext":[{"translate":"%%%%s", "with":{"rawtext":[{"score":{"name":"*", "objective":"wiki:element"}}, {"text":"118"}, {"text":"119"}, {"text":"120"}, {"text":"121"}, {"text":"122"}, {"text":"123"}, {"text":"124"}, {"text":"125"}, {"text":"126"}]}}]}, {"rawtext":[{"translate":"%%%%s", "with":{"rawtext":[{"score":{"name":"*", "objective":"wiki:element"}}, {"text":"127"}, {"text":"128"}, {"text":"129"}, {"text":"130"}, {"text":"131"}, {"text":"132"}, {"text":"133"}, {"text":"134"}, {"text":"135"}]}}]}, {"rawtext":[{"translate":"%%%%s", "with":{"rawtext":[{"score":{"name":"*", "objective":"wiki:element"}}, {"text":"136"}, {"text":"137"}, {"text":"138"}, {"text":"139"}, {"text":"140"}, {"text":"141"}, {"text":"142"}, {"text":"143"}, {"text":"144"}]}}]}, {"rawtext":[{"translate":"%%%%s", "with":{"rawtext":[{"score":{"name":"*", "objective":"wiki:element"}}, {"text":"145"}, {"text":"146"}, {"text":"147"}, {"text":"148"}, {"text":"149"}, {"text":"150"}, {"text":"151"}, {"text":"152"}, {"text":"153"}]}}]}, {"rawtext":[{"translate":"%%%%s", "with":{"rawtext":[{"score":{"name":"*", "objective":"wiki:element"}}, {"text":"154"}, {"text":"155"}, {"text":"156"}, {"text":"157"}, {"text":"158"}, {"text":"159"}, {"text":"160"}, {"text":"161"}, {"text":"162"}]}}]}]}}]}
```

<CodeHeader>BP/functions/wiki/rawtext/display/3.mcfunction</CodeHeader>

```json
titleraw @a actionbar {"rawtext":[{"translate":"%%%%s", "with":{"rawtext":[{"score":{"name":"*", "objective":"wiki:array"}}, {"rawtext":[{"translate":"%%%%s", "with":{"rawtext":[{"score":{"name":"*", "objective":"wiki:element"}}, {"text":"163"}, {"text":"164"}, {"text":"165"}, {"text":"166"}, {"text":"167"}, {"text":"168"}, {"text":"169"}, {"text":"170"}, {"text":"171"}]}}]}, {"rawtext":[{"translate":"%%%%s", "with":{"rawtext":[{"score":{"name":"*", "objective":"wiki:element"}}, {"text":"172"}, {"text":"173"}, {"text":"174"}, {"text":"175"}, {"text":"176"}, {"text":"177"}, {"text":"178"}, {"text":"179"}, {"text":"180"}]}}]}, {"rawtext":[{"translate":"%%%%s", "with":{"rawtext":[{"score":{"name":"*", "objective":"wiki:element"}}, {"text":"181"}, {"text":"182"}, {"text":"183"}, {"text":"184"}, {"text":"185"}, {"text":"186"}, {"text":"187"}, {"text":"188"}, {"text":"189"}]}}]}, {"rawtext":[{"translate":"%%%%s", "with":{"rawtext":[{"score":{"name":"*", "objective":"wiki:element"}}, {"text":"190"}, {"text":"191"}, {"text":"192"}, {"text":"193"}, {"text":"194"}, {"text":"195"}, {"text":"196"}, {"text":"197"}, {"text":"198"}]}}]}, {"rawtext":[{"translate":"%%%%s", "with":{"rawtext":[{"score":{"name":"*", "objective":"wiki:element"}}, {"text":"199"}, {"text":"200"}, {"text":"201"}, {"text":"202"}, {"text":"203"}, {"text":"204"}, {"text":"205"}, {"text":"206"}, {"text":"207"}]}}]}, {"rawtext":[{"translate":"%%%%s", "with":{"rawtext":[{"score":{"name":"*", "objective":"wiki:element"}}, {"text":"208"}, {"text":"209"}, {"text":"210"}, {"text":"211"}, {"text":"212"}, {"text":"213"}, {"text":"214"}, {"text":"215"}, {"text":"216"}]}}]}, {"rawtext":[{"translate":"%%%%s", "with":{"rawtext":[{"score":{"name":"*", "objective":"wiki:element"}}, {"text":"217"}, {"text":"218"}, {"text":"219"}, {"text":"220"}, {"text":"221"}, {"text":"222"}, {"text":"223"}, {"text":"224"}, {"text":"225"}]}}]}, {"rawtext":[{"translate":"%%%%s", "with":{"rawtext":[{"score":{"name":"*", "objective":"wiki:element"}}, {"text":"226"}, {"text":"227"}, {"text":"228"}, {"text":"229"}, {"text":"230"}, {"text":"231"}, {"text":"232"}, {"text":"233"}, {"text":"234"}]}}]}, {"rawtext":[{"translate":"%%%%s", "with":{"rawtext":[{"score":{"name":"*", "objective":"wiki:element"}}, {"text":"235"}, {"text":"236"}, {"text":"237"}, {"text":"238"}, {"text":"239"}, {"text":"240"}, {"text":"241"}, {"text":"242"}, {"text":"243"}]}}]}]}}]}
```

## Multiple Nested Translates (MNT)

This method uses multiple nested translates in a single titleraw command to allow scores greater than 81. It uses a modified `display_logic.mcfunction`.

:::warning

It is unknown how many characters can exist in a single titleraw before the game engine lags. It is also more difficult to edit and manage.

Therefore, it is recommended to use the function setup **[here](/commands/dynamic-displays#function-setup)**

:::

### MNT Setup

<CodeHeader>BP/functions/wiki/scoreboard/objectives/add_all.mcfunction</CodeHeader>

```yaml
## Query / State Machine
scoreboard objectives add wiki:q.is_initialised dummy

## Math
scoreboard objectives add wiki:const dummy
scoreboard objectives add wiki:var dummy
scoreboard objectives add wiki:delta_var dummy
scoreboard objectives add wiki:mapped_var dummy
scoreboard objectives add wiki:array.3d dummy
scoreboard objectives add wiki:array dummy
scoreboard objectives add wiki:element dummy
```

<CodeHeader>BP/functions/wiki/scoreboard/players/set_all.mcfunction</CodeHeader>

```yaml
## Constants
scoreboard players set .1 wiki:const 1
scoreboard players set .8 wiki:const 8
scoreboard players set .9 wiki:const 9
scoreboard players set .80 wiki:const 80
scoreboard players set .81 wiki:const 81
```

<CodeHeader>BP/functions/wiki/event/world/on_initialise.mcfunction</CodeHeader>

```yaml
## Add Objectives
function wiki/scoreboard/objectives/add_all

## Initialize All Constant & Variable Scores
function wiki/scoreboard/players/set_all

## Mark World as Initialized
scoreboard players set .World wiki:q.is_initialised 1
```

<CodeHeader>BP/functions/wiki/main.mcfunction</CodeHeader>

```yaml
# ON FIRST WORLD LOAD
execute unless score .World wiki:q.is_initialised matches 1 run function wiki/event/world/on_initialise


# DYNAMIC DISPLAY LOGIC
execute as @a unless score @s wiki:delta_var = @s wiki:var run function wiki/rawtext/display_logic
```

### MNT TICK.JSON

<CodeHeader>BP/functions/tick.json</CodeHeader>

```json
{
  "values": [
    "wiki/main"
  ]
}
```

### MNT System

For scores 1 to 729, use the 3 dimensional MNT system.

For scores 1 to 6,561, use the 4 dimensional MNT system.

<CodeHeader>BP/functions/wiki/rawtext/display_logic.mcfunction</CodeHeader>

```yaml
## Calculate 3D Array Index
scoreboard players operation @s wiki:array.3d = @s wiki:var
scoreboard players operation @s wiki:array.3d += .80 wiki:const
scoreboard players operation @s wiki:array.3d /= .81 wiki:const

## Calculate Mapped Variable For 2D Array & Elements
scoreboard players operation @s wiki:mapped_var = @s wiki:var
scoreboard players operation @s wiki:mapped_var -= .1 wiki:const
scoreboard players operation @s wiki:mapped_var %= .81 wiki:const
scoreboard players operation @s wiki:mapped_var += .1 wiki:const

## Calculate 2D Array Index
scoreboard players operation @s wiki:array = @s wiki:mapped_var
scoreboard players operation @s wiki:array += .8 wiki:const
scoreboard players operation @s wiki:array /= .9 wiki:const

### Calculate Element Index
scoreboard players operation @s wiki:element = @s wiki:mapped_var
scoreboard players operation @s wiki:element -= .1 wiki:const
scoreboard players operation @s wiki:element %= .9 wiki:const
scoreboard players operation @s wiki:element += .1 wiki:const

## Save Current Score
scoreboard players operation @s wiki:delta_var = @s wiki:var
```

<Spoiler title="4 Dimensional MNT System">

<CodeHeader>BP/functions/wiki/rawtext/display_logic.mcfunction</CodeHeader>

```yaml
## Calculate 4D Array Index
scoreboard players operation @s wiki:array.4d = @s wiki:var
scoreboard players operation @s wiki:array.4d += .728 wiki:const
scoreboard players operation @s wiki:array.4d /= .729 wiki:const

## Calculate Mapped Variable For 3D Array
scoreboard players operation @s wiki:mapped_var = @s wiki:var
scoreboard players operation @s wiki:mapped_var -= .1 wiki:const
scoreboard players operation @s wiki:mapped_var %= .729 wiki:const
scoreboard players operation @s wiki:mapped_var += .1 wiki:const

## Calculate 3D Array Index
scoreboard players operation @s wiki:array.3d = @s wiki:mapped_var
scoreboard players operation @s wiki:array.3d += .80 wiki:const
scoreboard players operation @s wiki:array.3d /= .81 wiki:const

## Calculate Mapped Variable For 2D Array & Elements
scoreboard players operation @s wiki:mapped_var = @s wiki:var
scoreboard players operation @s wiki:mapped_var -= .1 wiki:const
scoreboard players operation @s wiki:mapped_var %= .81 wiki:const
scoreboard players operation @s wiki:mapped_var += .1 wiki:const

## Calculate 2D Array Index
scoreboard players operation @s wiki:array = @s wiki:mapped_var
scoreboard players operation @s wiki:array += .8 wiki:const
scoreboard players operation @s wiki:array /= .9 wiki:const

### Calculate Element Index
scoreboard players operation @s wiki:element = @s wiki:mapped_var
scoreboard players operation @s wiki:element -= .1 wiki:const
scoreboard players operation @s wiki:element %= .9 wiki:const
scoreboard players operation @s wiki:element += .1 wiki:const

## Save Current Score
scoreboard players operation @s wiki:delta_var = @s wiki:var
```

</Spoiler>

### MNT Titleraw Templates

- **3 Dimensional MNT Downloads:**
    - **[3d_MNT_template.mcfunction](https://github.com/BedrockCommands/developer-packs/releases/download/dd/3d_mnt_template.mcfunction)**
    - **[3d_MNT_readable_template.json](https://github.com/BedrockCommands/developer-packs/releases/download/dd/3d_mnt_readable_template.json)**
- **4 Dimensional MNT Downloads:**
    - **[4d_MNT_template.mcfunction](https://github.com/BedrockCommands/developer-packs/releases/download/dd/4d_mnt_template.mcfunction)**
    - **[4d_MNT_readable_template.json](https://github.com/BedrockCommands/developer-packs/releases/download/dd/4d_mnt_readable_template.json)**
