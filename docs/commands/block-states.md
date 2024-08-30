---
title: Block States
category: General
mentions:
    - BedrockCommands
    - zheaEvyline
    - SmokeyStack
    - ThomasOrs
description: Learn how to use block states in commands.
---

## Introduction

[Sourced by Bedrock Commands Community Discord](https://discord.gg/SYstTYx5G5)

Block States or Block Properties are additional data that defines how the block appears or behaves. Such as the direction it's facing, it's color, it's variant, whether it is powered or unpowered, and so on.

This is used in a multitude of commands. Such as `/clone`, `/execute`, `/fill`, `/setblock` and `/testforblock`

In Bedrock Edition, we used Aux values (also known as Metadata) to define a block. However, as of 1.19.70 and beyond, this is no longer supported and have been fully replaced with Block States instead.

<CodeHeader>example</CodeHeader>

```yaml
#Aux Value Example:
/setblock ~ ~ ~ wool 1
#It's Block State equivalent:
/setblock ~ ~ ~ wool ["color"="orange"]
```

- Any command block using Aux Values will continue to function as it is. However, Block States will need to be adopted when updating them.
- Similarly, any commands using Aux Values in behavior/function packs with `min_engine_version` 1.19.63 or below will also continue to function. However, they must be replaced with Block States once the `min_engine_version` is updated to 1.19.70 or above.

## Block State Examples & Syntax

<CodeHeader>Examples</CodeHeader>

```yaml
/setblock ~ ~ ~ wool ["color"="white"]
/setblock ~ ~ ~ wheat ["growth"=0]
/setblock ~ ~ ~ wood ["wood_type"="birch","stripped_bit"=true]
/setblock ~ ~ ~ wool []
```

- Block states are enclosed in square brackets ` [ ] `
- When specifying multiple block states, a comma ` , ` is used to separate them.
- Quotation marks ` " " ` are used around strings. Such as `"birch"`, `"spruce"`, etc..
- Integer values `0, 1, 2..` and boolean values `true/false` should not use quotation marks.
- Leaving the brackets empty will default to 0.
    - Example: `wool 0` is white wool. Hence, you may simply write it as `wool []` or `wool` instead of `wool ["color"="white"]`

### Notes For Beginners

- **Integers** are whole numbers. They are used to define a block from a 'range' of values.
    - Example: Redstone power 1 to 15
    - `["redstone_power"=10]`

- **Boolean** is a programming term which refers to `true/false` values. You can understand them like yes/no questions.
    - Is this piston powered? `yes/no`
    - Is this button pressed? `yes/no`
    - Is this log stripped? `yes/no`
    - Example: `["stripped_bit"=true]`

- **Strings** are unique 'text' inputs. You can understand them like multiple-choice questions.
    - What color is this wool? `"white"`, `"orange"`, `"brown"`, etc..
    - What wood type is this log? `"spruce"`, `"birch"`, `"acacia"`, etc..
    - Example: `["wood_type"="spruce"]`
 
 
## Block States List

A list of all the Block States currently available in Bedrock can be found at:
https://learn.microsoft.com/en-us/minecraft/creator/reference/content/blockreference/examples/blockstateslist

- Note: In the site, Block States may be listed in `camelCase`, but in commands, only enter them in `snake_case`
    - Example: `buttonPressedBit` → `"button_pressed_bit"`

## Converting Aux Values to Block States

For your convenience, you may use this [Lookup Table](https://auxval-to-blockstates.netlify.app/) by *@SmokeyStack* to get the up-to-date list of all the Block IDs, their Aux Values and Block State equivalents.

## Known Issues

Commands specifying blocks must either leave the Block States field blank, or include **all** of it's corresponding Block States. Else, the command will not work.

For example, the following commands will work:
<CodeHeader></CodeHeader>

```yaml
#Testing for a Stone Button. (aux value 0)
/execute if block ~~~ stone_button run say success

#Testing for a non-pressed Stone Button facing west. (aux value 1)
/execute if block ~~~ stone_button [“button_pressed_bit”=false,”facing_direction”=1] run say success
```

- Reason the first command works is because the Block States field was left blank.
- Reason the second command works is because it included all Block States of the Stone Button. Which are:
    - `button_pressed_bit` (if the button was pressed/unpressed)
    - `facing_direction` (whether the button was facing up/down/north/south/east/west)
    - Buttons do not have any other Block State.

Now, if we want to test for a pressed Stone Button that may face *any* direction, we would use a command like this:
<CodeHeader></CodeHeader>

```yaml
/execute if block ~~~ stone_button [“button_pressed_bit”=true] run say success
```

However, this command will not work as the `facing_direction` Block State is missing.

In conclusion: Though Block States have replaced Aux Values, we still cannot test for blocks based on select few conditions/filters like we do with entities using Selector Arguments.

**Related Bug Reports:**
- [MCPE-133360](https://bugs.mojang.com/browse/MCPE-133360)
- [MCPE-168391](https://bugs.mojang.com/browse/MCPE-168391)
