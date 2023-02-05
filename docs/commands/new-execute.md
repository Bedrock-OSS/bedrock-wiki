---
title: New Execute
category: General
tags: 
    - easy
    - experimental
mention:
    - JaylyDev
---

## Introduction
With the release of 1.19.10, the Upcoming Creator Features experimental toggle gave the `/execute` command a syntax overhaul. While the syntax is now more verbose and longer to write, it allows much finer control over the contextual components of commands and adds support for conditions to commands, superseding the use of commands like `/testfor`, `/testforblock`, and `/testforblocks`.

Before we dive into the syntax and how to write it, we need to understand how the old `/execute` command worked, and what changed and why. This will make explaining the concepts found in the syntax easier.

## Execute, and Why it Changed
The `/execute` command executes a command on behalf of one or more entities. The old syntax used to be this:
```
/execute <target> <position> <command>
/execute <target> <position> detect <position> <block> <data value> <command>
```
You specified a target to execute as, then the command's context would change to run as that target, and at that target. Any positions were then relative to that target. While this is useful in most cases, it also forces the fact that a command's target and its position are always tied together (unless you were to manually insert world coordinates in place of `<position>`). It's also not very malleable in regards to making conditional statements, as you have to execute as an entity every time.

Back in the Summer of 2017 during the Update Aquatic's development, the developers from Minecraft: Java Edition were getting feedback from the community on how they can improve the `/execute` command's syntax, and the basic concept that was conceived is this: `/execute` takes an unlimited number of **subcommands** that manipulate certain aspects of the command in the order you specify, then a "run" subcommand is placed at the end to fire a command. This allows for much greater control for what `/execute` can do to a command, and allows splitting up the executor and the command's position.

## New Syntax
Now, let's take a look at those subcommands. They are as follows:

### `/execute as`

```
/execute as <origin: target> -> execute
```
Changes the target of the command, or who @s will select. Affects rotation due to a potential bug ([MCPE-156277](https://bugs.mojang.com/browse/MCPE-156277)). This does not change the position of the command, or its dimension. If multiple targets are specified, then a command is ran once for each of them, and @s selects each entity in turn.

### `/execute at`

```
/execute at <origin: target> -> execute
```
Changes where the command runs, setting the command's position and dimension to the entity. This does not change the target of the command, so @s will stay as whoever was targeted last. If multiple targets are specified, then a command is ran once at each of them.


### `/execute positioned`

```
/execute positioned <position: x y z> -> execute
```
Set a position for the command to run. [Relative and local coordinates](/commands/relative-coordinates.html) are based around the current position of the command.


```
/execute positioned as <origin: target> -> execute
```
Similar to how `/execute at` works, but only sets the command's position.


### `/execute (if|unless)`

Prevents running a command based on a condition. If the condition is true then the command will continue, or stop otherwise. `/execute unless` acts as the opposite, testing if the condition is false.

```
/execute (if|unless) entity <target: target> -> execute
```
Acts like `/testfor`. Returns true if the targets exist.

```
/execute (if|unless) block <position: x y z> <block: string> -> execute
```
Acts like `/testforblock`. Returns true if the block at the specified location exists. A data value or block state may additionally be specified, otherwise it ignores block states (acts as if it were `-1`).

```
/execute (if|unless) blocks <begin: x y z> <end: x y z> <destination: x y z> (all|masked) -> execute
```
Acts like `/testforblocks`. Returns true if the volume at the destination matches the one at the source. `all` tests that all blocks must be there, while `masked` will ignore air blocks.

```
/execute (if|unless) score <target: target> <objective: string> matches <range: integer range> -> execute
```
Tests if a specified score is a certain value. This uses range syntax.

```
/execute (if|unless) score <target: target> <objective: string> (=|<|<=|>|>=) <source: target> <objective: string> -> execute
```
Tests if a specified score matches some logical comparison to another score. Opertors are equals (`=`), greater than (`>`), greater than or equal to (`>=`), less than (`<`), and less than or equal to (`<=`).


### `/execute run`

```
/execute run <command: command>
```

Runs a command using the current context. This argument goes last, though this isn't always required; an `/execute` command ending with `if` or `unless` is valid too.

## Examples and Upgrading Old Commands
Since subcommands can be chained limitlessly, there really is a nearly infinite combination of arguments for an `/execute` command and they can't all be listed. Instead, listed here are some common examples of commands.

The old functionality of `/execute` can be replicated with `as <target> at @s`. If you need a positional offset relative to them, add `positioned`. If you want to detect if a block is present, add `if block`. Here are some equivalents:
```
# Teleport with an offset
/execute @p ~ ~1.62 ~ teleport @s ^ ^ ^3

/execute as @p at @s positioned ~ ~1.62 ~ run teleport @s ^ ^ ^3
```
```
# Chaining multiple '/execute's
/execute @e[type=sheep] ~ ~ ~ execute @e[type=item,r=5] ~ ~ ~ detect ~ ~-1 ~ stone 0 kill @s

/execute at @e[type=sheep] as @e[type=item,r=5] at @s if block ~ ~-1 ~ stone 0 run kill @s
```
(Note that we don't use `as @e[type=sheep] at @s` because we don't need to execute as the sheep.)

Now for some examples of things that were either not possible or were more difficult before the new syntax was introduced.

```
# Testing a fake player's score
/execute if score game_settings var matches 3.. run say [Game] Difficulty set to Hard.

# Comparing if two scores are equal
/execute as @a if score @s x = @s y run say My X is equal to my Y.

# Test for an entity without targeting it
/execute as @a at @s if entity @e[type=armor_stand,r=10] run gamemode survival @s
```