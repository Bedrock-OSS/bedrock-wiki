---
title: Intro to Command Blocks
category: General
mention:
    - BedrockCommands
    - EziGotFliped
    - jordanparki7
nav_order: 1
tags:
    - info
---

## Introduction

[Sourced By Bedrock Commands Community Discord](https://discord.gg/SYstTYx5G5)

Command Blocks are special blocks in Minecraft. The same commands (cheats) you type in chat can be run automatically using command blocks and it can be reused without needing to type all over again.

They can only be placed or destroyed by a player with the Operator permission level in gamemode Creative.

## Obtaining

First, go to your world settings and turn on setting "Enable Cheats"
Then, type the following command into the chat:
`/give @s command_block`

## Command Block Types

![impulseCommandBlock](/assets/images/commands/impulseCommandBlock.png) Impulse:
Runs the command once each time it's powered.

![repeatingCommandBlock](/assets/images/commands/repeatingCommandBlock.png) Repeating:
Runs the command every game tick. Tick delay can be applied (explained below.)

![chainCommandBlock](/assets/images/commands/chainCommandBlock.png) Chain:
Runs the command in a sequence. ie. only after previous command block in line was run.

## Command Block Conditions

Conditional:
Runs the command only if the previous command block in line had an output that was true.
> Conditional command block states are shown by a small indent into the command block's texture, as shown below

![pasteCommandButton](/assets/images/commands/impulseConditionalCommandBlock.png) < Impulse Conditional Command Block

![repeatingConditionalCommandBlock](/assets/images/commands/repeatingConditionalCommandBlock.png) < Repeating Conditional Command Block

![chainConditionalCommandBlock](/assets/images/commands/chainConditionalCommandBlock.png) < Chain Conditional Command Block

Unconditional:
Runs the command regardless of if the previous command block in line had an output that was true. (This includes if there was a syntax error or output was true/false.)

## Command Block Redstone States

- Needs Redstone:
The command block can only be activated with redstone power.

- Always Active:
The command block will be activated as soon as you close the command block UI.

## Command Block Tick Delay

In this option you may specify how much delay you want there to be before the command block runs the command.

The ticks refer to Minecraft gameticks. A **tick** is simply a unit of measure for time in games. 1 second in real life is approximately 20 gameticks in Minecraft.

## Command Block Hover Note

This option allows you to put a hovering text on your command blocks. It's useful for giving nicknames for easy identification when working with big systems.

When a command is run, the hover note will be displayed with the output in chat if gamerule commandblockoutput is enabled.
![hover_note](/assets/images/commands/hover_note.png)

## Command Block Output

- Toggle the Previous Output button in the command block to see command block output and block details.

- The / you type before the whole command is not required in a command block but doing so won't cause any errors.

- A redstone comparator can read command blocks outputs. If output is true, it will send 1-15 redstone signals depending on output value.

- You can check if a command output is true/false by running it in chat. A red output will be a false output or a syntax error. A white output means command was run successfully.

- You can also tell if a command was true/false by checking whether action was performed or not.

- An output with a value of 0 is usually a false output.

- Run the commands `/gamerule commandblockoutput false` and `/gamerule sendcommandfeedback false` to stop command block messages from being sent in chat.

## Paste Button
![pasteCommandButton](/assets/images/commands/pasteCommandButton.png)

The paste button allows you to paste commands from your clipboard to the 'Command Input' box.

## Command Block Placement
When placing command blocks in a line (arranged to work together) for any system, make sure the consecutive command blocks connect/start from the head of the arrow.

The arrow/facing direction can be observed from the command block texture.

Correct Placement ✅

![correctCommandBlockPlacement](/assets/images/commands/correctCommandBlockPlacement.png)

Incorrect Placement ❌

![incorrectCommandBlockPlacement](/assets/images/commands/incorrectCommandBlockPlacement.png)

## Troubleshooting

If you have any issues with command blocks or don't quite know why they aren't running, you should read the [Troubleshooting Commands](https://wiki.bedrock.dev/commands/troubleshooting-commands.html) page

## What you have learned
:::tip What you have learned:
How to obtain a command block in game
How the different types of command blocks behave and what they look like
What the different command block options are (including conditional, state and delay)
How command blocks output data by redstone and chat messages
:::

