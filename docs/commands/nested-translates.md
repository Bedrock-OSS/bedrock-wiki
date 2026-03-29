---
title: Nested Translates
category: Techniques
tags:
    - intermediate
mentions:
    - BedrockCommands
    - zheaEvyline
    - mittens4all
nav_order: 9
description: Learn how to display custom, dynamic text to players based on scores.
---

## Introduction

[Sourced by the Bedrock Commands Community (BCC) Discord](https://bedrockcommands.org/)

In this guide, you will learn how to display custom, dynamic text to players based on scores. This is an effective alternative to using individual `/tellraw` or `/titleraw` messages for each possible outcome.

:::info NOTE:

This technique is primarily used when a player's score exceeds 9. For a simplified version using only score ranges of 1-9, see **[here](/text/rawtext#ordering-with)**

:::

## Key Concepts

:::tip

Think of this system like a library: `wiki:array` picks the bookshelf (1-9), and `wiki:element` picks the specific book on that shelf (1-9). This allows you to store 81 different 'texts' total.

:::

| **Term**               | **What it is**       | **Why we use it**                                                    |
| :--------------------- | :------------------- | :------------------------------------------------------------------- |
| **`translate`**        | Text component       | Acts as a "container" for your list of custom messages.              |
| **`with`**             | Argument List        | The list of "slots" where your text or scores are inserted.          |
| **`score`**            | Data Fetcher         | Gets a player's score and turns it into text for the command.        |
| **`wiki:var`**         | Input Score          | The actual rank or level number you want to turn into text.          |
| **`wiki:var_changed`** | Control Score        | Controls when to run the scoreboard operations.                      |
| **`wiki:delta.var`**   | Difference Score     | Detects if the player's score has changed since the last update.     |
| **`wiki:element`**     | "The Book"           | A score (1-9) that selects the specific message within a group.      |
| **`wiki:array`**       | "The Shelf"          | A score (1-9) that selects a group of 9 possible messages.           |
| **`%%%%s`**            | Placeholder          | A technical trick that lets a score choose which message to display. |

**System Logic Breakdown**

- The Inputs: `wiki:var`, `wiki:delta.var`, and `wiki:var_changed` track **when** the text needs to update.
- The Math: `wiki:array` and `wiki:element` calculate **where** the specific text is located in your list.

:::warning

  - Only single-digit positive integers (1-9) are used in the format specifier `%%s`. When creating your system, make sure player scores are positive integers.
  - This command block system covers a range of 1-81. For larger ranges, see the function setup **[here](/commands/nested-translates#function-setup)**.

:::

## Setup

_To be typed in Chat:_

```yaml
# Add objectives
/scoreboard objectives add wiki:array dummy
/scoreboard objectives add wiki:const dummy
/scoreboard objectives add wiki:delta.var dummy
/scoreboard objectives add wiki:element dummy
/scoreboard objectives add wiki:var dummy
/scoreboard objectives add wiki:var_changed dummy

# Assign fakeplayer score
/scoreboard players set .9 wiki:const 9
```

## System

<CodeHeader>BP/functions/wiki/scoreboard/display_logic.mcfunction</CodeHeader>

```yaml
# Detect when a player's main score has changed
execute as @a unless entity @s[scores={wiki:var=82..}] unless score @s wiki:delta.var = @s wiki:var run scoreboard players set @s wiki:var_changed 1

# Get Element Index or which "Book" should be chosen
execute as @a[scores={wiki:var_changed=1}] run scoreboard players operation @s wiki:element = @s wiki:var

# Find the remainder to get the specific position (1-9)
execute as @a[scores={wiki:var_changed=1, wiki:element=9..}] run scoreboard players operation @s wiki:element %= .9 wiki:const

# Get Array Index or which "Shelf" should be chosen
execute as @a[scores={wiki:var_changed=1}] run scoreboard players operation @s wiki:array = @s wiki:var

# Divide by 9 to find which group of nine the score belongs to
execute as @a[scores={wiki:var_changed=1}] run scoreboard players operation @s wiki:array /= .9 wiki:const

# Logic: If there is a remainder (Element 1+), move to the next "Shelf"
execute as @a[scores={wiki:var_changed=1, wiki:element=1..}] run scoreboard players add @s wiki:array 1

# Logic Fix: If the remainder was 0, it is the 9th book on the shelf
execute as @a[scores={wiki:var_changed=1, wiki:element=0}] run scoreboard players operation @s wiki:element = .9 wiki:const

# Reset the change toggle to prevent the math from looping
scoreboard players set @a[scores={wiki:var_changed=1}] wiki:var_changed 0

# Final sync to ensure the math updates only when the main score changes
execute as @a unless score @s wiki:delta.var = @s wiki:var run scoreboard players operation @s wiki:delta.var = @s wiki:var
```

![Chain of Nine Command Blocks](/assets/images/commands/command-block-chain/9.png)

:::tip

Place the titleraw command last in the command block chain if you plan to run the command continuously.

:::

## Titleraw Template

<CodeHeader></CodeHeader>

```json
titleraw @a actionbar {"rawtext":[{"translate":"%%%%s", "with":{"rawtext":[{"score":{"name":"*", "objective":"wiki:array"}}, {"rawtext":[{"translate":"%%%%s", "with":{"rawtext":[{"score":{"name":"*", "objective":"wiki:element"}}, {"text":"1"}, {"text":"2"}, {"text":"3"}, {"text":"4"}, {"text":"5"}, {"text":"6"}, {"text":"7"}, {"text":"8"}, {"text":"9"}]}}]}, {"rawtext":[{"translate":"%%%%s", "with":{"rawtext":[{"score":{"name":"*", "objective":"wiki:element"}}, {"text":"10"}, {"text":"11"}, {"text":"12"}, {"text":"13"}, {"text":"14"}, {"text":"15"}, {"text":"16"}, {"text":"17"}, {"text":"18"}]}}]}, {"rawtext":[{"translate":"%%%%s", "with":{"rawtext":[{"score":{"name":"*", "objective":"wiki:element"}}, {"text":"19"}, {"text":"20"}, {"text":"21"}, {"text":"22"}, {"text":"23"}, {"text":"24"}, {"text":"25"}, {"text":"26"}, {"text":"27"}]}}]}, {"rawtext":[{"translate":"%%%%s", "with":{"rawtext":[{"score":{"name":"*", "objective":"wiki:element"}}, {"text":"28"}, {"text":"29"}, {"text":"30"}, {"text":"31"}, {"text":"32"}, {"text":"33"}, {"text":"34"}, {"text":"35"}, {"text":"36"}]}}]}, {"rawtext":[{"translate":"%%%%s", "with":{"rawtext":[{"score":{"name":"*", "objective":"wiki:element"}}, {"text":"37"}, {"text":"38"}, {"text":"39"}, {"text":"40"}, {"text":"41"}, {"text":"42"}, {"text":"43"}, {"text":"44"}, {"text":"45"}]}}]}, {"rawtext":[{"translate":"%%%%s", "with":{"rawtext":[{"score":{"name":"*", "objective":"wiki:element"}}, {"text":"46"}, {"text":"47"}, {"text":"48"}, {"text":"49"}, {"text":"50"}, {"text":"51"}, {"text":"52"}, {"text":"53"}, {"text":"54"}]}}]}, {"rawtext":[{"translate":"%%%%s", "with":{"rawtext":[{"score":{"name":"*", "objective":"wiki:element"}}, {"text":"55"}, {"text":"56"}, {"text":"57"}, {"text":"58"}, {"text":"59"}, {"text":"60"}, {"text":"61"}, {"text":"62"}, {"text":"63"}]}}]}, {"rawtext":[{"translate":"%%%%s", "with":{"rawtext":[{"score":{"name":"*", "objective":"wiki:element"}}, {"text":"64"}, {"text":"65"}, {"text":"66"}, {"text":"67"}, {"text":"68"}, {"text":"69"}, {"text":"70"}, {"text":"71"}, {"text":"72"}]}}]}, {"rawtext":[{"translate":"%%%%s", "with":{"rawtext":[{"score":{"name":"*", "objective":"wiki:element"}}, {"text":"73"}, {"text":"74"}, {"text":"75"}, {"text":"76"}, {"text":"77"}, {"text":"78"}, {"text":"79"}, {"text":"80"}, {"text":"81"}]}}]}]}}]}
```

## Function Setup

:::info NOTE

This method uses nested translates to allow scores greater than 81. It uses a slightly modified `display_logic.mcfunction` and an additional fakeplayer score is set to 81.

:::

<CodeHeader>BP/functions/wiki/event/world/on_initalise.mcfunction</CodeHeader>

```yaml
# Add objectives
scoreboard objectives add wiki:array dummy
scoreboard objectives add wiki:const dummy
scoreboard objectives add wiki:delta.var dummy
scoreboard objectives add wiki:element dummy
scoreboard objectives add wiki:q.is_initialised dummy
scoreboard objectives add wiki:var dummy

# Assign fakeplayer scores
scoreboard players set .9 wiki:const 9
scoreboard players set .81 wiki:const 81
scoreboard players set .World wiki:q.is_initialised 1
```

<CodeHeader>BP/functions/wiki/main.mcfunction</CodeHeader>

```yaml
# On First World Load
execute unless score .World wiki:q.is_initialised matches 1 run function wiki/event/world/on_initialise

# Detect when a player's main score has changed
execute as @a unless score @s wiki:delta.var = @s wiki:var run function wiki/scoreboard/display_logic
```

## Function Tick.json

<CodeHeader>BP/functions/tick.json</CodeHeader>

```json
{
  "values": [
    "wiki/main"
  ]
}
```

## Function System

<CodeHeader>BP/functions/wiki/scoreboard/display_logic.mcfunction</CodeHeader>

```yaml
# Normalize scores higher than 81 back into a 1-81 range
# This allows the "Library" logic to repeat for every 81 scores
scoreboard players operation @s wiki:delta.var = @s wiki:var
execute unless score @s wiki:delta.var matches 1..81 run scoreboard players operation @s wiki:delta.var %= .81 wiki:const
scoreboard players set @s[scores={wiki:delta.var=0}] wiki:delta.var 81

# Get Element Index or which "Book" should be chosen
scoreboard players operation @s wiki:element = @s wiki:delta.var

# Find the remainder to get the specific position (1-9)
execute if score @s wiki:element matches 9.. run scoreboard players operation @s wiki:element %= .9 wiki:const

# Get Array Index or which "Shelf" should be chosen
scoreboard players operation @s wiki:array = @s wiki:delta.var

# Divide by 9 to find which group of nine the score belongs to
scoreboard players operation @s wiki:array /= .9 wiki:const

# Logic: If there is a remainder (Element 1+), move to the next "Shelf"
execute if score @s wiki:element matches 1.. run scoreboard players add @s wiki:array 1

# Logic Fix: If the remainder was 0, it is the 9th book on the shelf
execute if score @s wiki:element matches 0 run scoreboard players operation @s wiki:element = .9 wiki:const

# Display the correct set of messages based on the player's total score
## If you plan on not having the titleraw display continously, remove these function calls from here
execute as @s[scores={wiki:var=1..81}] run function wiki/display/actionbar/nested_translates.set_01
execute as @s[scores={wiki:var=82..162}] run function wiki/display/actionbar/nested_translates.set_02
execute as @s[scores={wiki:var=163..243}] run function wiki/display/actionbar/nested_translates.set_03
## Add any additional score ranges here

# Final sync to ensure the math updates only when the main score changes
execute unless score @s wiki:delta.var = @s wiki:var run scoreboard players operation @s wiki:delta.var = @s wiki:var
```

## Function Titleraw Template

<CodeHeader>BP/wiki/display/actionbar/nested_translates.set_01.mcfunction</CodeHeader>

```json
titleraw @a actionbar {"rawtext":[{"translate":"%%%%s", "with":{"rawtext":[{"score":{"name":"*", "objective":"wiki:array"}}, {"rawtext":[{"translate":"%%%%s", "with":{"rawtext":[{"score":{"name":"*", "objective":"wiki:element"}}, {"text":"1"}, {"text":"2"}, {"text":"3"}, {"text":"4"}, {"text":"5"}, {"text":"6"}, {"text":"7"}, {"text":"8"}, {"text":"9"}]}}]}, {"rawtext":[{"translate":"%%%%s", "with":{"rawtext":[{"score":{"name":"*", "objective":"wiki:element"}}, {"text":"10"}, {"text":"11"}, {"text":"12"}, {"text":"13"}, {"text":"14"}, {"text":"15"}, {"text":"16"}, {"text":"17"}, {"text":"18"}]}}]}, {"rawtext":[{"translate":"%%%%s", "with":{"rawtext":[{"score":{"name":"*", "objective":"wiki:element"}}, {"text":"19"}, {"text":"20"}, {"text":"21"}, {"text":"22"}, {"text":"23"}, {"text":"24"}, {"text":"25"}, {"text":"26"}, {"text":"27"}]}}]}, {"rawtext":[{"translate":"%%%%s", "with":{"rawtext":[{"score":{"name":"*", "objective":"wiki:element"}}, {"text":"28"}, {"text":"29"}, {"text":"30"}, {"text":"31"}, {"text":"32"}, {"text":"33"}, {"text":"34"}, {"text":"35"}, {"text":"36"}]}}]}, {"rawtext":[{"translate":"%%%%s", "with":{"rawtext":[{"score":{"name":"*", "objective":"wiki:element"}}, {"text":"37"}, {"text":"38"}, {"text":"39"}, {"text":"40"}, {"text":"41"}, {"text":"42"}, {"text":"43"}, {"text":"44"}, {"text":"45"}]}}]}, {"rawtext":[{"translate":"%%%%s", "with":{"rawtext":[{"score":{"name":"*", "objective":"wiki:element"}}, {"text":"46"}, {"text":"47"}, {"text":"48"}, {"text":"49"}, {"text":"50"}, {"text":"51"}, {"text":"52"}, {"text":"53"}, {"text":"54"}]}}]}, {"rawtext":[{"translate":"%%%%s", "with":{"rawtext":[{"score":{"name":"*", "objective":"wiki:element"}}, {"text":"55"}, {"text":"56"}, {"text":"57"}, {"text":"58"}, {"text":"59"}, {"text":"60"}, {"text":"61"}, {"text":"62"}, {"text":"63"}]}}]}, {"rawtext":[{"translate":"%%%%s", "with":{"rawtext":[{"score":{"name":"*", "objective":"wiki:element"}}, {"text":"64"}, {"text":"65"}, {"text":"66"}, {"text":"67"}, {"text":"68"}, {"text":"69"}, {"text":"70"}, {"text":"71"}, {"text":"72"}]}}]}, {"rawtext":[{"translate":"%%%%s", "with":{"rawtext":[{"score":{"name":"*", "objective":"wiki:element"}}, {"text":"73"}, {"text":"74"}, {"text":"75"}, {"text":"76"}, {"text":"77"}, {"text":"78"}, {"text":"79"}, {"text":"80"}, {"text":"81"}]}}]}]}}]}
```

<CodeHeader>BP/wiki/display/actionbar/nested_translates.set_02.mcfunction</CodeHeader>

```json
titleraw @a actionbar {"rawtext":[{"translate":"%%%%s", "with":{"rawtext":[{"score":{"name":"*", "objective":"wiki:array"}}, {"rawtext":[{"translate":"%%%%s", "with":{"rawtext":[{"score":{"name":"*", "objective":"wiki:element"}}, {"text":"82"}, {"text":"83"}, {"text":"84"}, {"text":"85"}, {"text":"86"}, {"text":"87"}, {"text":"88"}, {"text":"89"}, {"text":"90"}]}}]}, {"rawtext":[{"translate":"%%%%s", "with":{"rawtext":[{"score":{"name":"*", "objective":"wiki:element"}}, {"text":"91"}, {"text":"92"}, {"text":"93"}, {"text":"94"}, {"text":"95"}, {"text":"96"}, {"text":"97"}, {"text":"98"}, {"text":"99"}]}}]}, {"rawtext":[{"translate":"%%%%s", "with":{"rawtext":[{"score":{"name":"*", "objective":"wiki:element"}}, {"text":"100"}, {"text":"101"}, {"text":"102"}, {"text":"103"}, {"text":"104"}, {"text":"105"}, {"text":"106"}, {"text":"107"}, {"text":"108"}]}}]}, {"rawtext":[{"translate":"%%%%s", "with":{"rawtext":[{"score":{"name":"*", "objective":"wiki:element"}}, {"text":"109"}, {"text":"110"}, {"text":"111"}, {"text":"112"}, {"text":"113"}, {"text":"114"}, {"text":"115"}, {"text":"116"}, {"text":"117"}]}}]}, {"rawtext":[{"translate":"%%%%s", "with":{"rawtext":[{"score":{"name":"*", "objective":"wiki:element"}}, {"text":"118"}, {"text":"119"}, {"text":"120"}, {"text":"121"}, {"text":"122"}, {"text":"123"}, {"text":"124"}, {"text":"125"}, {"text":"126"}]}}]}, {"rawtext":[{"translate":"%%%%s", "with":{"rawtext":[{"score":{"name":"*", "objective":"wiki:element"}}, {"text":"127"}, {"text":"128"}, {"text":"129"}, {"text":"130"}, {"text":"131"}, {"text":"132"}, {"text":"133"}, {"text":"134"}, {"text":"135"}]}}]}, {"rawtext":[{"translate":"%%%%s", "with":{"rawtext":[{"score":{"name":"*", "objective":"wiki:element"}}, {"text":"136"}, {"text":"137"}, {"text":"138"}, {"text":"139"}, {"text":"140"}, {"text":"141"}, {"text":"142"}, {"text":"143"}, {"text":"144"}]}}]}, {"rawtext":[{"translate":"%%%%s", "with":{"rawtext":[{"score":{"name":"*", "objective":"wiki:element"}}, {"text":"145"}, {"text":"146"}, {"text":"147"}, {"text":"148"}, {"text":"149"}, {"text":"150"}, {"text":"151"}, {"text":"152"}, {"text":"153"}]}}]}, {"rawtext":[{"translate":"%%%%s", "with":{"rawtext":[{"score":{"name":"*", "objective":"wiki:element"}}, {"text":"154"}, {"text":"155"}, {"text":"156"}, {"text":"157"}, {"text":"158"}, {"text":"159"}, {"text":"160"}, {"text":"161"}, {"text":"162"}]}}]}]}}]}
```

<CodeHeader>BP/wiki/display/actionbar/nested_translates.set_03.mcfunction</CodeHeader>

```json
titleraw @a actionbar {"rawtext":[{"translate":"%%%%s", "with":{"rawtext":[{"score":{"name":"*", "objective":"wiki:array"}}, {"rawtext":[{"translate":"%%%%s", "with":{"rawtext":[{"score":{"name":"*", "objective":"wiki:element"}}, {"text":"163"}, {"text":"164"}, {"text":"165"}, {"text":"166"}, {"text":"167"}, {"text":"168"}, {"text":"169"}, {"text":"170"}, {"text":"171"}]}}]}, {"rawtext":[{"translate":"%%%%s", "with":{"rawtext":[{"score":{"name":"*", "objective":"wiki:element"}}, {"text":"172"}, {"text":"173"}, {"text":"174"}, {"text":"175"}, {"text":"176"}, {"text":"177"}, {"text":"178"}, {"text":"179"}, {"text":"180"}]}}]}, {"rawtext":[{"translate":"%%%%s", "with":{"rawtext":[{"score":{"name":"*", "objective":"wiki:element"}}, {"text":"181"}, {"text":"182"}, {"text":"183"}, {"text":"184"}, {"text":"185"}, {"text":"186"}, {"text":"187"}, {"text":"188"}, {"text":"189"}]}}]}, {"rawtext":[{"translate":"%%%%s", "with":{"rawtext":[{"score":{"name":"*", "objective":"wiki:element"}}, {"text":"190"}, {"text":"191"}, {"text":"192"}, {"text":"193"}, {"text":"194"}, {"text":"195"}, {"text":"196"}, {"text":"197"}, {"text":"198"}]}}]}, {"rawtext":[{"translate":"%%%%s", "with":{"rawtext":[{"score":{"name":"*", "objective":"wiki:element"}}, {"text":"199"}, {"text":"200"}, {"text":"201"}, {"text":"202"}, {"text":"203"}, {"text":"204"}, {"text":"205"}, {"text":"206"}, {"text":"207"}]}}]}, {"rawtext":[{"translate":"%%%%s", "with":{"rawtext":[{"score":{"name":"*", "objective":"wiki:element"}}, {"text":"208"}, {"text":"209"}, {"text":"210"}, {"text":"211"}, {"text":"212"}, {"text":"213"}, {"text":"214"}, {"text":"215"}, {"text":"216"}]}}]}, {"rawtext":[{"translate":"%%%%s", "with":{"rawtext":[{"score":{"name":"*", "objective":"wiki:element"}}, {"text":"217"}, {"text":"218"}, {"text":"219"}, {"text":"220"}, {"text":"221"}, {"text":"222"}, {"text":"223"}, {"text":"224"}, {"text":"225"}]}}]}, {"rawtext":[{"translate":"%%%%s", "with":{"rawtext":[{"score":{"name":"*", "objective":"wiki:element"}}, {"text":"226"}, {"text":"227"}, {"text":"228"}, {"text":"229"}, {"text":"230"}, {"text":"231"}, {"text":"232"}, {"text":"233"}, {"text":"234"}]}}]}, {"rawtext":[{"translate":"%%%%s", "with":{"rawtext":[{"score":{"name":"*", "objective":"wiki:element"}}, {"text":"235"}, {"text":"236"}, {"text":"237"}, {"text":"238"}, {"text":"239"}, {"text":"240"}, {"text":"241"}, {"text":"242"}, {"text":"243"}]}}]}]}}]}
```

## Multiple Nested Translates (MNT) Setup

:::warning

It is unknown how many characters can exist in a single titleraw before the game engine lags. It is also more difficult to edit and manage.

Therefore, it is recommended to use the function setup **[here](/commands/nested-translates#function-setup)**

:::

<CodeHeader>BP/functions/wiki/event/world/on_initalise.mcfunction</CodeHeader>

```yaml
# Add objectives
scoreboard objectives add wiki:array.set_01 dummy
scoreboard objectives add wiki:array.set_02 dummy
scoreboard objectives add wiki:const dummy
scoreboard objectives add wiki:delta.var dummy
scoreboard objectives add wiki:element.set_01 dummy
scoreboard objectives add wiki:element.set_02 dummy
scoreboard objectives add wiki:q.is_initialised dummy
scoreboard objectives add wiki:var dummy

# Assign fakeplayer scores
scoreboard players set .9 wiki:const 9
scoreboard players set .81 wiki:const 81
scoreboard players set .World wiki:q.is_initialised 1
```

<CodeHeader>BP/functions/wiki/event/players/on_first_join</CodeHeader>

```yaml
# Set player's initial scores
## The player's main score is set to 2 on first join so the actionbar shows due to empty strings in first array slots
scoreboard players set @s wiki:var 2

## Mark as joined
tag @s add wiki:joined
```

<CodeHeader>BP/functions/wiki/main.mcfunction</CodeHeader>

```yaml
# On First World Load
execute unless score .World wiki:q.is_initialised matches 1 run function wiki/event/world/on_initialise

# On Player First Join
execute as @a[tag=!wiki:joined] run function wiki/event/players/on_first_join

# Detect when a player's main score changes
execute as @a[scores={wiki:var=1..81}] unless score @s wiki:delta.var = @s wiki:var run function wiki/scoreboard/display_logic.set_01
execute as @a[scores={wiki:var=82..162}] unless score @s wiki:delta.var = @s wiki:var run function wiki/scoreboard/display_logic.set_02
## Add any additional score range commands here

# Titleraw
## If you plan on not having the titleraw display continously, remove this function call from here
function wiki/display/actionbar/multiple_nested_translates
```

## MNT Tick.json

<CodeHeader>BP/functions/tick.json</CodeHeader>

```json
{
  "values": [
    "wiki/main"
  ]
}
```

## MNT System

:::info NOTE:

This method uses multiple nested translates (MNT) to allow scores greater than 81 and uses only a single titleraw command. 
It uses a slightly modified `display_logic.mcfunction` in conjunction with additional array and element scoreboard objectives.

:::

<CodeHeader>BP/functions/wiki/scoreboard/display_logic.reset.mcfunction</CodeHeader>

```yaml
# Set all array and element scores to 1 after player's main score changes
scoreboard players set @s wiki:array.set_01 1
scoreboard players set @s wiki:array.set_02 1
scoreboard players set @s wiki:element.set_01 1
scoreboard players set @s wiki:element.set_02 1
```

:::info NOTE:

This system requires the player's array and element scores to be set to 1 each time the player's main score changes.
The titleraw command needs each first `text` component of an array set to be an empty string so that when you have a score of 81 or more, it doesn't show.

:::

<CodeHeader>BP/functions/wiki/scoreboard/display_logic.set_01.mcfunction</CodeHeader>

```yaml
# Set all array and element scores to 1 after player's main score changes
execute as @s run function wiki/scoreboard/display_logic.reset

# Get Element Index or which "Book" should be chosen
scoreboard players operation @s wiki:element.set_01 = @s wiki:var

# Find the remainder to get the specific position (1-9)
execute if score @s wiki:element.set_01 matches 9.. run scoreboard players operation @s wiki:element.set_01 %= .9 wiki:const

# Get Array Index or which "Shelf" should be chosen
scoreboard players operation @s wiki:array.set_01 = @s wiki:var

# Divide by 9 to find which group of nine the score belongs to
scoreboard players operation @s wiki:array.set_01 /= .9 wiki:const

# Logic: If there is a remainder (Element 1+), move to the next "Shelf"
execute if score @s wiki:element.set_01 matches 1.. run scoreboard players add @s wiki:array.set_01 1

# Logic Fix: If the remainder was 0, it is the 9th book on the shelf
execute if score @s wiki:element.set_01 matches 0 run scoreboard players operation @s wiki:element.set_01 = .9 wiki:const

# Final sync to ensure the math updates only when the main score changes
execute unless score @s wiki:delta.var = @s wiki:var run scoreboard players operation @s wiki:delta.var = @s wiki:var
```
:::warning

`display_logic.set_02.mcfunction` is slightly modified from `display_logic.set_01.mcfunction`.

This modification allows for scores above 81 to become normalized and introduces a logic fix for the empty text components.

:::

<CodeHeader>BP/functions/wiki/scoreboard/display_logic.set_02.mcfunction</CodeHeader>

```yaml
# Set all array and element scores to 1 after player's main score changes
execute as @s run function wiki/scoreboard/display_logic.reset

# Normalize scores higher than 81 back into a 1-81 range
# This allows the "Library" logic to repeat for every 81 scores
scoreboard players operation @s wiki:delta.var = @s wiki:var
execute unless score @s wiki:delta.var matches 1..81 run scoreboard players operation @s wiki:delta.var %= .81 wiki:const
scoreboard players set @s[scores={wiki:delta.var=0}] wiki:delta.var 81

## Set delta.var scores of 1 to 2 to skip empty text components in the rawtext
## Multiple nested translate components require the first array text component to be empty
## Otherwise the other sets' first array and element text components will appear alongside the current set's translate components
scoreboard players set @s[scores={wiki:delta.var=1}] wiki:delta.var 2

# Get Element Index or which "Book" should be chosen
scoreboard players operation @s wiki:element.set_02 = @s wiki:delta.var

# Find the remainder to get the specific position (1-9)
execute if score @s wiki:element.set_02 matches 9.. run scoreboard players operation @s wiki:element.set_02 %= .9 wiki:const

# Get Array Index or which "Shelf" should be chosen
scoreboard players operation @s wiki:array.set_02 = @s wiki:delta.var

# Divide by 9 to find which group of nine the score belongs to
scoreboard players operation @s wiki:array.set_02 /= .9 wiki:const

# Logic: If there is a remainder (Element 1+), move to the next "Shelf"
execute if score @s wiki:element.set_02 matches 1.. run scoreboard players add @s wiki:array.set_02 1

# Logic Fix: If the remainder was 0, it is the 9th book on the shelf
execute if score @s wiki:element.set_02 matches 0 run scoreboard players operation @s wiki:element.set_02 = .9 wiki:const

# Final sync to ensure the math updates only when the main score changes
execute unless score @s wiki:delta.var = @s wiki:var run scoreboard players operation @s wiki:delta.var = @s wiki:var
```

:::tip

You may add additional `display_logic.set_xx.mcfunction` based on `display_logic.set_02.mcfunction`.

No further modifications are needed to add an additional 81 text components into the titleraw.
Just remember to create the scoreboard objectives.

:::

## MNT Titleraw Template

<CodeHeader>BP/wiki/display/actionbar/multiple_nested_translates.mcfunction</CodeHeader>

```json
titleraw @a actionbar {"rawtext":[{"translate":"%%%%s", "with":{"rawtext":[{"score":{"name":"*", "objective":"wiki:array.set_01"}}, {"rawtext":[{"translate":"%%%%s", "with":{"rawtext":[{"score":{"name":"*", "objective":"wiki:element.set_01"}}, {"text":""}, {"text":"1"}, {"text":"2"}, {"text":"3"}, {"text":"4"}, {"text":"5"}, {"text":"6"}, {"text":"7"}, {"text":"8"}]}}]}, {"rawtext":[{"translate":"%%%%s", "with":{"rawtext":[{"score":{"name":"*", "objective":"wiki:element.set_01"}}, {"text":"9"}, {"text":"10"}, {"text":"11"}, {"text":"12"}, {"text":"13"}, {"text":"14"}, {"text":"15"}, {"text":"16"}, {"text":"17"}]}}]}, {"rawtext":[{"translate":"%%%%s", "with":{"rawtext":[{"score":{"name":"*", "objective":"wiki:element.set_01"}}, {"text":"18"}, {"text":"19"}, {"text":"20"}, {"text":"21"}, {"text":"22"}, {"text":"23"}, {"text":"24"}, {"text":"25"}, {"text":"26"}]}}]}, {"rawtext":[{"translate":"%%%%s", "with":{"rawtext":[{"score":{"name":"*", "objective":"wiki:element.set_01"}}, {"text":"27"}, {"text":"28"}, {"text":"29"}, {"text":"30"}, {"text":"31"}, {"text":"32"}, {"text":"33"}, {"text":"34"}, {"text":"35"}]}}]}, {"rawtext":[{"translate":"%%%%s", "with":{"rawtext":[{"score":{"name":"*", "objective":"wiki:element.set_01"}}, {"text":"36"}, {"text":"37"}, {"text":"38"}, {"text":"39"}, {"text":"40"}, {"text":"41"}, {"text":"42"}, {"text":"43"}, {"text":"44"}]}}]}, {"rawtext":[{"translate":"%%%%s", "with":{"rawtext":[{"score":{"name":"*", "objective":"wiki:element.set_01"}}, {"text":"45"}, {"text":"46"}, {"text":"47"}, {"text":"48"}, {"text":"49"}, {"text":"50"}, {"text":"51"}, {"text":"52"}, {"text":"53"}]}}]}, {"rawtext":[{"translate":"%%%%s", "with":{"rawtext":[{"score":{"name":"*", "objective":"wiki:element.set_01"}}, {"text":"54"}, {"text":"55"}, {"text":"56"}, {"text":"57"}, {"text":"58"}, {"text":"59"}, {"text":"60"}, {"text":"61"}, {"text":"62"}]}}]}, {"rawtext":[{"translate":"%%%%s", "with":{"rawtext":[{"score":{"name":"*", "objective":"wiki:element.set_01"}}, {"text":"63"}, {"text":"64"}, {"text":"65"}, {"text":"66"}, {"text":"67"}, {"text":"68"}, {"text":"69"}, {"text":"70"}, {"text":"71"}]}}]}, {"rawtext":[{"translate":"%%%%s", "with":{"rawtext":[{"score":{"name":"*", "objective":"wiki:element.set_01"}}, {"text":"72"}, {"text":"73"}, {"text":"74"}, {"text":"75"}, {"text":"76"}, {"text":"77"}, {"text":"78"}, {"text":"79"}, {"text":"80"}]}}]}]}}, {"translate":"%%%%s", "with":{"rawtext":[{"score":{"name":"*", "objective":"wiki:array.set_02"}}, {"rawtext":[{"translate":"%%%%s", "with":{"rawtext":[{"score":{"name":"*", "objective":"wiki:element.set_02"}}, {"text":""}, {"text":"81"}, {"text":"82"}, {"text":"83"}, {"text":"84"}, {"text":"85"}, {"text":"86"}, {"text":"87"}, {"text":"88"}]}}]}, {"rawtext":[{"translate":"%%%%s", "with":{"rawtext":[{"score":{"name":"*", "objective":"wiki:element.set_02"}}, {"text":"89"}, {"text":"90"}, {"text":"91"}, {"text":"92"}, {"text":"93"}, {"text":"94"}, {"text":"95"}, {"text":"96"}, {"text":"97"}]}}]}, {"rawtext":[{"translate":"%%%%s", "with":{"rawtext":[{"score":{"name":"*", "objective":"wiki:element.set_02"}}, {"text":"98"}, {"text":"99"}, {"text":"100"}, {"text":"101"}, {"text":"102"}, {"text":"103"}, {"text":"104"}, {"text":"105"}, {"text":"106"}]}}]}, {"rawtext":[{"translate":"%%%%s", "with":{"rawtext":[{"score":{"name":"*", "objective":"wiki:element.set_02"}}, {"text":"107"}, {"text":"108"}, {"text":"109"}, {"text":"110"}, {"text":"111"}, {"text":"112"}, {"text":"113"}, {"text":"114"}, {"text":"115"}]}}]}, {"rawtext":[{"translate":"%%%%s", "with":{"rawtext":[{"score":{"name":"*", "objective":"wiki:element.set_02"}}, {"text":"116"}, {"text":"117"}, {"text":"118"}, {"text":"119"}, {"text":"120"}, {"text":"121"}, {"text":"122"}, {"text":"123"}, {"text":"124"}]}}]}, {"rawtext":[{"translate":"%%%%s", "with":{"rawtext":[{"score":{"name":"*", "objective":"wiki:element.set_02"}}, {"text":"125"}, {"text":"126"}, {"text":"127"}, {"text":"128"}, {"text":"129"}, {"text":"130"}, {"text":"131"}, {"text":"132"}, {"text":"133"}]}}]}, {"rawtext":[{"translate":"%%%%s", "with":{"rawtext":[{"score":{"name":"*", "objective":"wiki:element.set_02"}}, {"text":"134"}, {"text":"135"}, {"text":"136"}, {"text":"137"}, {"text":"138"}, {"text":"139"}, {"text":"140"}, {"text":"141"}, {"text":"142"}]}}]}, {"rawtext":[{"translate":"%%%%s", "with":{"rawtext":[{"score":{"name":"*", "objective":"wiki:element.set_02"}}, {"text":"143"}, {"text":"144"}, {"text":"145"}, {"text":"146"}, {"text":"147"}, {"text":"148"}, {"text":"149"}, {"text":"150"}, {"text":"151"}]}}]}, {"rawtext":[{"translate":"%%%%s", "with":{"rawtext":[{"score":{"name":"*", "objective":"wiki:element.set_02"}}, {"text":"152"}, {"text":"153"}, {"text":"154"}, {"text":"155"}, {"text":"156"}, {"text":"157"}, {"text":"158"}, {"text":"159"}, {"text":"160"}]}}]}]}}, {"translate":"%%%%s", "with":{"rawtext":[{"score":{"name":"*", "objective":"wiki:array.set_03"}}, {"rawtext":[{"translate":"%%%%s", "with":{"rawtext":[{"score":{"name":"*", "objective":"wiki:element.set_03"}}, {"text":""}, {"text":"161"}, {"text":"162"}, {"text":"163"}, {"text":"164"}, {"text":"165"}, {"text":"166"}, {"text":"167"}, {"text":"168"}]}}]}, {"rawtext":[{"translate":"%%%%s", "with":{"rawtext":[{"score":{"name":"*", "objective":"wiki:element.set_03"}}, {"text":"169"}, {"text":"170"}, {"text":"171"}, {"text":"172"}, {"text":"173"}, {"text":"174"}, {"text":"175"}, {"text":"176"}, {"text":"177"}]}}]}, {"rawtext":[{"translate":"%%%%s", "with":{"rawtext":[{"score":{"name":"*", "objective":"wiki:element.set_03"}}, {"text":"178"}, {"text":"179"}, {"text":"180"}, {"text":"181"}, {"text":"182"}, {"text":"183"}, {"text":"184"}, {"text":"185"}, {"text":"186"}]}}]}, {"rawtext":[{"translate":"%%%%s", "with":{"rawtext":[{"score":{"name":"*", "objective":"wiki:element.set_03"}}, {"text":"187"}, {"text":"188"}, {"text":"189"}, {"text":"190"}, {"text":"191"}, {"text":"192"}, {"text":"193"}, {"text":"194"}, {"text":"195"}]}}]}, {"rawtext":[{"translate":"%%%%s", "with":{"rawtext":[{"score":{"name":"*", "objective":"wiki:element.set_03"}}, {"text":"196"}, {"text":"197"}, {"text":"198"}, {"text":"199"}, {"text":"200"}, {"text":"201"}, {"text":"202"}, {"text":"203"}, {"text":"204"}]}}]}, {"rawtext":[{"translate":"%%%%s", "with":{"rawtext":[{"score":{"name":"*", "objective":"wiki:element.set_03"}}, {"text":"205"}, {"text":"206"}, {"text":"207"}, {"text":"208"}, {"text":"209"}, {"text":"210"}, {"text":"211"}, {"text":"212"}, {"text":"213"}]}}]}, {"rawtext":[{"translate":"%%%%s", "with":{"rawtext":[{"score":{"name":"*", "objective":"wiki:element.set_03"}}, {"text":"214"}, {"text":"215"}, {"text":"216"}, {"text":"217"}, {"text":"218"}, {"text":"219"}, {"text":"220"}, {"text":"221"}, {"text":"222"}]}}]}, {"rawtext":[{"translate":"%%%%s", "with":{"rawtext":[{"score":{"name":"*", "objective":"wiki:element.set_03"}}, {"text":"223"}, {"text":"224"}, {"text":"225"}, {"text":"226"}, {"text":"227"}, {"text":"228"}, {"text":"229"}, {"text":"230"}, {"text":"231"}]}}]}, {"rawtext":[{"translate":"%%%%s", "with":{"rawtext":[{"score":{"name":"*", "objective":"wiki:element.set_03"}}, {"text":"232"}, {"text":"233"}, {"text":"234"}, {"text":"235"}, {"text":"236"}, {"text":"237"}, {"text":"238"}, {"text":"239"}, {"text":"240"}]}}]}]}}]}
```
