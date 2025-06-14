---
title: Execute Logic Gates
category: Techniques
mentions:
    - BedrockCommands
    - zheaEvyline
    - hatfluppyclouds
nav_order: 1
description: Logic gates are devices that take one or more binary inputs and, as the name suggests, performs logical boolean operations to give a single binary output (either 'true' or 'false').
---

## Introduction

[Sourced by the Bedrock Commands Community (BCC) Discord](https://bedrockcommands.org/)

Logic gates are devices that take one or more binary inputs and, as the name suggests, performs logical boolean operations to give a single binary output (either `true` or `false`).

They are what a computer uses to perform any function. These devices are very helpful for programming, and using them is a crucial step in creating optimized command systems. In this page you will learn how you can utilise any of the logic gates in your systems with the help of the `/execute` command!

## Logic Gates

**Chart:**

![Logic Gates Table with Diagram](/assets/images/commands/logic-gates/table-with-diagram.jpg)

**Converted to Commands:**

-   Buffer:
    -   `/execute if entity @s[tag=red] run <command>`
-   (Inverter) NOT Gate:
    -   `/execute if entity @s[tag=!red] run <command>`
-   AND Gate:
    -   `/execute if entity @s[tag=red,tag=green] run <command>`
-   (NOT AND) NAND Gate:
    -   `/execute unless entity @s[tag=red,tag=green] run <command>`
-   OR Gate:
    -   `/execute unless entity @s[tag=!red,tag=!green] run <command>`
-   NOR Gate:
    -   `/execute if entity @s[tag=!red,tag=!green] run <command>`
-   XOR Gate:
    -   `/execute unless entity @s[tag=!red,tag=!green] unless entity @s[tag=red,tag=green] run <command>`
-   XNOR Gate:
    -   `/execute unless entity @s[tag=red,tag=!green] unless entity @s[tag=!red,tag=green] run <command>`

## Explanation

_Explanation provided by @Champ0401:_

**AND Gate:**

-   `/execute as @p[tag=red,tag=green] run say success`

The AND gate takes at least two inputs. In this case, if the player meets both requirements (having the 'red' and 'green' tags), the command will run. The AND gate is the most commonly used gate in Minecraft commands.

**NOT Gate:**

-   `/execute as @p[tag=!red] run say success` or:
-   `/execute as @p unless entity @s[tag=red] run say success`

The NOT gate inverses the input. In this case, the command will only run if the player does NOT have the tag red. The NOT gate is also very commonly used in Minecraft commands.

**OR Gate:**

-   `/execute as @p unless entity @s[tag=!red,tag=!green] run say success`

The OR gate takes two or more inputs. If the player has at least one of the requirements, the command will run. In this case, the player can either have the tag red, or the tag green, or both. The OR gate is not natural to Minecraft commands, but with the addition of the `/execute unless`, you can perform it yourself. It may seem a little confusing as to how the OR gate works. You can think about it like this: the command runs UNLESS you have neither tag. This produces the same output table as the OR gate. Try it out in the game yourself!

**XOR Gate:**

-   `/execute as @p unless entity @s[tag=!red,tag=!green] unless entity @s[tag=red,tag=green] run say success`

The XOR gate takes two inputs. If the player has exactly _one_ of the requirements, the command will run. In this case, the player can have either the tag red or the tag green, but if they have both tags the command will not run. The XOR gate is also not natural to Minecraft Commands, but this workaround will allow you to perform the function.

The remaining gates are simply the inverse of the others, which you can change by flipping the `if` / `unless` in the command, or refer the above logic gates for examples.

## Example Commands

Here is a list of target selector arguments that can be used in the execute logic gates:

-   `type`
-   `scores`
-   `name`
-   `tag`
-   `family`
-   `hasitem`

> Note, all of these use the OR gate as example, but any of the logic gates will work, as long as the syntax/order given above are followed in a similar fashion.

**Examples:**

-   `/execute unless entity @e[type=!chicken, type=!cow] run <command>`
    -   Run the command if the entity is either a chicken or a cow.
-   `/execute unless entity @p[scores={objective.a=!5, objective.b=!5}] run <command>`
    -   Run the command if the player has a score of 5 in either scoreboard `objective.a` or `objective.b`.
-   `/execute unless entity @p[hasitem=[{item=diamond_sword,quantity=0},{item=iron_sword,quantity=0}]] run <command>`
    -   Run the command if the player has either a diamond sword or an iron sword.

> Note: You may use more than two inputs (selector arguments) for the OR gate, and the command will execute if it meets any one or more of the inputs.

Combining any of the different argument selectors will also work. Examples:

-   `/execute unless entity @p[tag=!red, scores={objective.a=!1..5}] run <command>`
-   `/execute unless entity @p[name=!player, hasitem=[{item=iron_sword, quantity=0}]] run <command>`
-   `/execute unless entity @e[type=!chicken,tag=!green, scores={objective.b=!5}, family=!mob}] run <command>`

For any doubts or queries, you may join our Discord linked above and any of our community experts will be glad to assist you.
