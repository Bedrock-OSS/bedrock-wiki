---
title: Execute Logic Gates
category: Techniques
mentions:
    - BedrockCommands
    - zheaEvyline
nav_order: 1
---

## Introduction

[Sourced By Bedrock Commands Community Discord](https://discord.gg/SYstTYx5G5)

Logic Gates are devices which take one or more binary inputs and, as the name suggests; performs logical boolean operations to give a single binary output (either `true` or `false`)

It is what a computer uses to perform any function. These are very helpful for programming and using these logic gates is a very important step to creating optimized command systems. So, let's learn how you can use any of the logic gates using the `/execute` command.


## Logic Gates

**Chart:**

![logicGatesTable](/assets/images/commands/logicGatesTable.jpg)


**Converted To Commands:**

- Buffer:
  - `/execute if entity @s [tag=red] run <command>`
- (Inverter) NOT:
  - `/execute if entity @s [tag=!red] run <command>`
- AND Gate:
  - `/execute if entity @s [tag=red, tag=green] run <command>`
- (NOT AND) NAND Gate:
  - `/execute unless entity @s [tag=red, tag=green] run <command>`
- OR Gate:
  - `/execute unless entity @s [tag=!red, tag=!green] run <command>`
- NOR Gate:
  - `/execute if entity @s [tag=!red, tag=!green] run <command>`
- XOR Gate:
  - `/execute unless entity @s [tag=!red, tag=!green] unless entity @s [tag=red, tag=green] run <command>`
- XNOR Gate:
  - `/execute unless entity @s [tag=red, tag=!green] unless entity @s [tag=!red, tag=green] run <command>`

## Explanation

*Explanation provided by @Champ0401:*

**AND Gate:**
- `/execute as @p [tag=red, tag=green] run say success`
- The AND gate takes at least two inputs. In this case, if the player meets both requirements (meaning they have both the tag red and the tag green), the command will run. The AND gate is the most commonly used gate in Minecraft commands.

**NOT Gate:**
- `/execute as @p [tag=!red] run say success` or:
- `/execute as @p unless entity @s [tag=red] run say success`
- The NOT gate inverses the input. In this case, the command will only run if the player does NOT have the tag red. The NOT gate is also very commonly used in Minecraft commands.

**OR Gate:**
- `/execute as @p unless entity @s[tag=!red, tag=!green] run say success`
- The OR gate takes two or more inputs. If the player has at least one of the requirements, the command will run. In this case, the player can either have the tag red, or the tag green, or both. The OR gate is not natural to Minecraft commands, but with the addition of the `/execute unless`, you can perform it yourself. It may seem a little confusing as to how the OR gate works. You can think about it like this: the command runs UNLESS you have neither tag. This produces the same output table as the OR gate. Try it out in the game yourself!

**XOR Gate:**
- `/execute as @p unless entity @s [tag=!red, tag=!green] unless entity @s [tag=red, tag=green] run say success`
- The XOR gate takes two inputs. If the player has at least one of the requirements, but not both, the command will run. In this case, the player can have either the tag red or the tag green, but if they have both tags the command will not run. The XOR gate is also not natural to Minecraft Commands, but this workaround will allow you to perform the function.

The remaining gates are simply the inverse of the others, which you can change by flipping the `if` / `unless` in the command, or refer the above logic gates for examples.

## Example Commands

Here is a list of argument selectors that can be used in the logic gates:
- `type`
- `scores`
- `name`
- `tag`
- `family`
- `hasitem`

> Note, all of these use the OR gate as example, but any of the logic gates will work, as long as the syntax/order given above are followed in a similar fashion.


**Examples:**

- `/execute unless entity @e [type=!chicken, type=!cow] run <command>`
  - Run the command if the entity is either a chicken or a cow.
- `/execute unless entity @p [scores={scoreA=!5, scoreB=!5}] run <command>`
  - Run the command if the player has either a score of 5 in objective scoreA or scoreB.
- `/execute unless entity @p [hasitem={item=diamond_sword,quantity=0},{item=iron_sword,quantity=0}] run <command>`
  - Run the command if the player has either a diamond sword or an iron sword.

> Note, you amy use more than two filters for the OR gate, and the command will execute if it meets any one or more of the selector arguments.

Mixing any of the different argument selectors will also work:
- `/execute unless entity @p[tag=!red, scores={score1=!1..5}] run <command>`
- `/execute unless entity @p[name=!player, hasitem={item=iron_sword, quantity=0}] run <command>`
- `/execute unless entity @e[type=!chicken, tag=!green, scores={score1=!5}, family=!mob}] run <command>`

For any doubts or queries, you may join our Discord linked above and any of our community experts will be happy to assist you.
