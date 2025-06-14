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

[Sourced by the Bedrock Commands Community (BCC) Discord](https://bedrockcommands.org/)

Block States, also known as Block Properties, define how blocks appear or behave, including attributes like direction, color, variant, or power state. These are extensively used in commands such as `/clone`, `/execute`, `/fill`, `/setblock`, and `/testforblock`.

Before version 1.19.70, Bedrock Edition relied on Aux values (metadata) to define blocks. However, this approach has been replaced by Block States. Aux values are no longer supported in newer engine versions.

### Example Conversion

<CodeHeader></CodeHeader>

```yaml
# Aux value example:
/setblock ~ ~ ~ wool 1

# Equivalent using Block States:
/setblock ~ ~ ~ wool ["color"="orange"]
```

- Commands using Aux values will function in older versions or in Behaviour Packs with `min_engine_version` set to 1.19.63 or below.
- Updating the `min_engine_version` to 1.19.70 or above requires transitioning to Block States.

## Syntax and Examples

### Syntax

- Block States are enclosed in square brackets (` [] `).
- Separate multiple states with a comma (` , `).
- Use quotation marks (` " " `) around strings (e.g., `"birch"`, `"orange"`).
- Integer (`0`, `1`, etc.) and boolean (`true`, `false`) values should not use quotation marks.
- Empty brackets (` [] `) or the absence of brackets default to `0` (e.g., `wool []` or simply `wool` corresponds to white wool).

### Examples

<CodeHeader></CodeHeader>

```yaml
/setblock ~ ~ ~ wool ["color"="white"]
/setblock ~ ~ ~ wheat ["growth"=0]
/setblock ~ ~ ~ wood ["wood_type"="birch","stripped_bit"=true]
/setblock ~ ~ ~ wool []
```

## Key Concepts for Beginners

1. **Integers**: Whole numbers used to define ranges (e.g., `["redstone_power"=10]` for redstone strength).
2. **Booleans**: Represent `true/false` states (e.g., `["stripped_bit"=true]` for stripped logs).
3. **Strings**: Represent predefined text inputs (e.g., `["wood_type"="spruce"]`).

## Reference for Block States

A comprehensive list of Block States is available at:
[Block States List](https://learn.microsoft.com/en-us/minecraft/creator/reference/content/blockreference/examples/blockstateslist)

- **Note**: Block States listed in `camelCase` format on the site must be converted to `snake_case` in commands.
    - Example: `buttonPressedBit` → `"button_pressed_bit"`

## Conversion Tool

Use this [Lookup Table](https://auxval-to-blockstates.netlify.app/) by *@SmokeyStack* to convert Aux values to Block States.

## Known Limitations

Commands using blocks must specify all corresponding Block States or leave the Block States field empty. Missing any required states causes the command to fail.

### Examples

<CodeHeader></CodeHeader>

```yaml
# Testing a Stone Button (Aux Value 0)
/execute if block ~~~ stone_button run say success

# Testing a non-pressed Stone Button facing west (Aux Value 1)
/execute if block ~~~ stone_button ["button_pressed_bit"=false,"facing_direction"=1] run say success
```

- The first command works because the Block States field is empty.
- The second command works because all relevant states (`button_pressed_bit`, `facing_direction`) are specified.

> **Note**: Testing a partial condition (e.g., `["button_pressed_bit"=true]`) without other states, such as `facing_direction`, will fail. Unlike entities, blocks do not yet support condition-based filtering.

### Related Bug Reports

- [MCPE-133360](https://bugs.mojang.com/browse/MCPE-133360)
- [MCPE-168391](https://bugs.mojang.com/browse/MCPE-168391)
