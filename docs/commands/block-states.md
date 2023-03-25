---
title: Block States
category: General
mention:
    - BedrockCommands
    - EziGotFliped
tags:
    - info
---

## Introduction

[Sourced by Bedrock Commands Community Discord](https://discord.gg/SYstTYx5G5)

Block States or Block Properties are additonal data that defines how the block appears or behaves. Such as the direction it is facing, it's color, it's variant, whether it is powered or unpowered and so on.

This is used in a multitude of commands such as `/clone`, `/execute`, `/fill`, `/setblock` and `/testforblock`

In Bedrock Edition we used Aux values (also known as Metadata) to define a block. However; as of 1.19.70 and beyond this is no longer supported and have been fully replaced with Block States instead.

<CodeHeader>example</CodeHeader>

```yaml
#Aux Value Example:
/setblock ~ ~ ~ wool 1
#It's Block State equivelant:
/setblock ~ ~ ~ wool ["color":"orange"]
```

Note; leaving the brackets blank will default to 0
- Any command block using aux values will continue to function as it is however block states will need to be adopted when updating them.
- Similarly any commands using aux values in behaviour or function packs with `min_engine_version` 1.19.63 or below will also continue to function however block states must be adopted if the `min_engine_version` is updated to 1.19.70 or above.

## Block States List
A list of all the block states currently available within Bedrock can be found at:
https://learn.microsoft.com/en-us/minecraft/creator/reference/content/blockreference/examples/blockstateslist

## Converting Aux Values to Block States
For your convenience; download any of the excel sheet below to find the full list of block IDs, their aux values and equivelant block states in Bedrock. *Shared by kayla@Mojang*

<BButton
    link="https://github.com/BedrockCommands/bedrockcommands.github.io/files/10987839/Aux-Value_to_Block-States_Map.xlsx"
    color=white
>Download</BButton>

Note; the above sheet was quickly generated and contains some minor errors. Boolean values `0` should be replaced with `false` and `1` should be replaced with `true`

Alternate, sheet: *Shared by @ItsRichHearts*

<BButton
  link="https://github.com/BedrockCommands/bedrockcommands.github.io/files/11069804/All.Block-Item.List.Bedrock.pdf"
    color=white
>Download</BButton>

You may also use this [Lookup Table](https://auxval-to-blockstates.netlify.app/) instead instead without downloading any files.

## Block State Examples & Syntax

<CodeHeader>Examples</CodeHeader>

```yaml
/setblock ~ ~ ~ wool ["color":"white"]
/setblock ~ ~ ~ wheat ["growth":0]
/setblock ~ ~ ~ wood ["wood_type":"birch","stripped_bit":true]
/setblock ~ ~ ~ wool []
```

- Block states are enclosed in sqaure brackets ` [ ] `
- When specifying multiple block states a comma ` , ` is used to separate them.
- Quotation marks ` " " ` are used around strings such as `"birch", "spruce" etc..`
- Integer values `0, 1, 2..` and boolean values `true/false` do not use quotation marks.
- Leaving the brackets blank is also a correct syntax, it will simply default to 0.
- `wool 0` is white wool hence you may simply write it as `wool []` instead of `wool ["color":"white"]`
