---
title: Intro to Command Blocks
category: General
mention:
 - BedrockCommands
 - EziGotFliped
nav_order: 1
tags:
 - info
---

## Introduction

[Sourced By Bedrock Commands Community Discord](https://discord.gg/SYstTYx5G5)

Command Blocks are special blocks in Minecraft. The same commands (cheats) you type in chat can be run automatically using command blocks and it can be reused without needing to type all over again.

They can only be placed or destroyed by a player with the Operator permission level in gamemode Creative.

## Obtaining

1. Open your world settings.
2. Under Cheats toggle "Activate Cheats" setting ON.
3. Run `/give @s command_block` command in chat.

## Command Block Types

![impulseCommandBlock](/assets/images/commands/impulseCommandBlock.png) **Impulse** runs the command __once__ each time it is powered.

![chainCommandBlock](/assets/images/commands/chainCommandBlock.png) **Chain** runs the command in a sequence. ie. only after the previous command block it is comnecting from was run.

![repeatingCommandBlock](/assets/images/commands/repeatingCommandBlock.png) **Repeat** runs the command every game tick. There are approx 20 ticks per second. A delay can be applied to adjust how often the command is executed, (explained [here](/intro-to-command-blocks.html#command-block-tick-delay).)

## Command Block Conditions

**Conditional** command blocks will run the command only if the previous command block it was connecting from had an output that was `true` (successful)
> Conditional command block states are shown by a small indent into the command block's texture, as shown below:
> - ![pasteCommandButton](/assets/images/commands/impulseConditionalCommandBlock.png) Impulse Conditional Command Block
> - ![chainConditionalCommandBlock](/assets/images/commands/chainConditionalCommandBlock.png) Chain Conditional Command Block
> - ![repeatingConditionalCommandBlock](/assets/images/commands/repeatingConditionalCommandBlock.png) Repeating Conditional Command Block

**Unconditional** command blocks will run the command regardless. Whether the previous command block it was connecting from had an output that was `true` (succesful), `false` (failed) or even if it came with a syntax error the command block will still run the command.

## Command Block Redstone States

**Needs Redstone** command block can only be activated with redstone power. Using buttons, levers, redstone torch etc..

**Always Active** command block will be activated as soon as you close the command block UI.

## Command Block Tick Delay

In this option you may specify how much delay you want there to be before the command block runs the command.

The ticks refer to Minecraft game ticks. A **tick** is simply a unit of measure for time in games. 1 second in real life is approximately 20 game ticks in Minecraft.

## Command Block Hover Note

This option allows you to put a hovering text on your command blocks. It's useful for giving short-names for easy identification when working with many command blocks.

When a command is run, the hover note will be displayed with the output in chat if gamerule `commandblockoutput` is enabled.
![hover_note](/assets/images/commands/hover_note.png)

## Command Block Output

- Toggle the 'Previous Output' button in the command block UI to see command block output and block details.

- The ` / ` you type before the whole command is not required in a command block but doing so won't cause any errors.

- A redstone comparator can read command blocks outputs. If output is true, it will send anywhere from 1 to 15 redstone signals depending on the output value.

- You can check if a command output is `true`/`false` by running it in chat. A red output will be a `false` output or a syntax error. A white output means command was run successfully.

- You can also tell if a command was `true`/`false` by checking whether action was performed or not.

- An output with a value of `0` is usually a false output.

- Run the commands `/gamerule commandblockoutput false` and `/gamerule sendcommandfeedback false` to stop command messages from being sent in chat.

## Paste Button

![pasteCommandButton](/assets/images/commands/pasteCommandButton.png)

The paste button allows you to paste commands from your clipboard to the 'Command Input' box.

## Command Block Placement

When placing command blocks in a line (arranged to work together) for any system, make sure the consecutive command blocks connect/start from the head of the arrow.

The arrow/facing direction can be observed from the command block texture.

**✅ Correct Placement**
![correctCommandBlockPlacement](/assets/images/commands/correctCommandBlockPlacement.png)

**❌ Incorrect Placement**
![incorrectCommandBlockPlacement](/assets/images/commands/incorrectCommandBlockPlacement.png)

## Troubleshooting

If you have any issues with command blocks or don't quite know why they aren't running, you should read the [Troubleshooting Commands](/commands/troubleshooting-commands.html) page.

## What you have learned
:::tip What you have learned:
- How to obtain a command block in game.
- How the different types of command blocks behave and what they look like.
- What the different command block options are (including conditional, state and delay.)
- How command blocks output data by redstone and chat messages.
:::
