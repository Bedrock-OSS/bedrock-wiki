---
title: Intro to Command Blocks
category: General
mentions:
    - BedrockCommands
    - zheaEvyline
    - jordanparki7
nav_order: 1
description: Introduction to MCBE command blocks.
---

## Introduction

[Sourced by the Bedrock Commands Community (BCC) Discord](https://bedrockcommands.org/)

Command Blocks are special blocks in Minecraft. The same commands (cheats) you type in chat can be run automatically using command blocks and it can be reused without needing to type all over again.

They can only be placed or destroyed by a player with the Operator permission in gamemode Creative.

## Obtaining

1. Open your world settings.
2. Under Cheats, toggle "Activate Cheats" setting ON.
3. Run `/give @s command_block` in chat.

## Command Block UI

![Command Block Ui](/assets/images/commands/intro-to-command-blocks/command-block-ui.png)

## Command Block Types

![impulse Command Block](/assets/images/commands/intro-to-command-blocks/command-block.impulse.png) **Impulse** runs the command **once** each time it is powered.

![Chain Command Block](/assets/images/commands/intro-to-command-blocks/command-block.chain.png) **Chain** runs the command in a sequence, ie., only after the previous command block it is connecting from was run.

![Repeat Command Block](/assets/images/commands/intro-to-command-blocks/command-block.repeat.png) **Repeat** runs the command every game-tick. There are approximately 20 ticks per second. A delay can be applied to adjust how often the command is executed, explained [below](/commands/intro-to-command-blocks#command-block-tick-delay).

## Command Block Conditions

**Conditional** command blocks will run the command only if the previous command block it was connecting from had an output that was successful (`true`).

> Conditional command block states are shown by a small indent into the command block's arrow texture, as shown below:
>
> -   ![Impulse Conditional Command Block](/assets/images/commands/intro-to-command-blocks/command-block.impulse-conditional.png) Impulse Conditional Command Block
> -   ![Chain Conditional Command Block](/assets/images/commands/intro-to-command-blocks/command-block.chain-conditional.png) Chain Conditional Command Block
> -   ![Repeat Conditional Command Block](/assets/images/commands/intro-to-command-blocks/command-block.repeat-conditional.png) Repeating Conditional Command Block

**Unconditional** command blocks will run the command regardless of the outcome. Whether the previous command block it was connecting from had an output that was succesful (`true`) or failed (`false`) the command block will still run the command.

## Command Block Redstone States

**Needs Redstone** command block can only be activated with redstone power. Using buttons, levers, redstone torch, etc.

**Always Active** command block will be activated as soon as you close the command block UI.

## Command Block Tick Delay

In this option, you may specify how much delay there should be before the command block runs the command.

The ticks refer to Minecraft game-ticks. A **tick** is simply a unit of measure for time, in games. 1 second in real life is approximately 20 game-ticks in Minecraft.

:::tip
![Approximately Where Commands Run in a Game Tick](/assets/images/commands/intro-to-command-blocks/game-tick.png)
:::

## Command Block Hover Note

This option allows you to put a hovering text over your command blocks. It's useful for giving short-names for easy identification when working with multiple command-blocks-chains.

When a command is run, the hover note will be displayed along with the output in chat if gamerule `commandblockoutput` is enabled.
![Command Block Hover Note](/assets/images/commands/intro-to-command-blocks/command-block-hover-note.png)

## Paste Button

![Command Block Paste Button](/assets/images/commands/intro-to-command-blocks/command-block-paste-button.png)

The paste button allows you to paste previously copied coordinates into the 'Command Input' box.

## Command Block Output

-   Toggle the 'Previous Output' button in the command block UI to see command output and block details.

-   The `/` you type before the whole command is not required in a command block, but doing so will not cause any errors.

-   A redstone comparator can read command block outputs. If output is successful, it will return anywhere from 1 to 15 redstone signals depending on the output strength.

-   You can check if a command block output is `true`/`false` by running it in chat. An output in red text or an output of `0` indicate a syntax error or failed (`false`) output. And output in white text indicate that the command was run successfully.

-   You can also tell if a command was `true`/`false` by checking whether the action was performed or not.

### Disabling Command Messages in Chat

Run in Chat:

-   `/gamerule commandblockoutput false` to disable command block messages in chat.
-   `/gamerule sendcommandfeedback false` to disable feedback from commands entered in chat.

## Command Block Placement

When placing command blocks in a chain (arranged to work in sequence) for any system, make sure the consecutive command blocks connect/begin from the head of the previous command block's arrow.

The arrow/facing direction can be observed from the command block texture on the sides.

**✅ Correct Placement**
![Correct Command Block Placement](/assets/images/commands/intro-to-command-blocks/command-block-placement.correct.png)

**❌ Incorrect Placement**
![Incorrect Command Block Placement](/assets/images/commands/intro-to-command-blocks/command-block-placement.incorrect.png)

## Troubleshooting Command Blocks

-   In world settings, under **Cheats**, make sure command blocks have not been disabled.

-   Make sure gamerule `maxcommandchainlength` is not set to 0

-   Make sure there are no unwanted redstone power that is interfering with the command block. It can be from redstone dust, lever, redstone torch, etc.

-   Try switching between 'Always Active' & 'Needs Redstone'.

-   Double check the block type, condition, and the command syntax. After powering it, check the 'Previous Output' again.

-   Just like redstone, command blocks must also be within loaded chunks for them to work. You can use a ticking area to keep them loaded when players are not nearby. Refer to [/tickingarea](https://learn.microsoft.com/en-us/minecraft/creator/documents/tickingareacommand) command documentation for more info.

If nothing seems to work, simply break and replace that command block.

## What You Have Learned

:::tip What you have learned:

-   How to obtain a command block in game.
-   How the different types of command blocks behave and what they look like.
-   What the different command block options are (including conditional, state and delay.)
-   How command blocks output data by redstone and chat messages.
-   How to properly place command block chains.
-   How to resolve 'command block not working'

:::

> When setting up command block systems following codeblock/mcfunction, always keep in mind that the first command block will be ![Repeat Command Block](/assets/images/commands/intro-to-command-blocks/command-block.repeat.png) **`Unconditional Always Active`** and the rest of the command blocks will be ![Chain Command Block](/assets/images/commands/intro-to-command-blocks/command-block.chain.png) **`Unconditional Always Active`**. All set to 0 ticks delay, unless specified otherwise.
>
> ![Chain of Four Command Blocks](/assets/images/commands/command-block-chain/4.png)

## What's Next?

<CardGrid>
<Card title="Basic Systems" image="/assets/images/icons/command_block.png">

To put what you have learned into practice, try making this simple **[On Player First Join](/commands/on-first-join)** system, or the **[Entity Counter](/commands/entity-counter)** system.

</Card>

<Card title="Understanding Selectors" link="/commands/selectors" image="/assets/images/icons/parrot.png">

Learn to use target selectors in commands and how to filter them.

</Card>
</CardGrid>
