---
title: New Execute
category: Commands
tags:
    - easy
mentions:
    - JaylyDev
    - Sprunkles137
    - Hatchibombotar
    - TheItsNameless
    - SmokeyStack
    - zheaEvyline
---

## Introduction

With the release of 1.19.50, the `/execute` command was given a syntax overhaul. While the syntax is now more verbose and longer to write, it allows much finer control over the contextual components of commands and adds support for conditions to commands, superseding the use of commands like `/testfor`, `/testforblock`, and `/testforblocks`.

Before we dive into the syntax and how to write it, we need to understand how the old `/execute` command worked, and what changed and why. This will make explaining the concepts found in the syntax easier.

## Understanding Execution Context

For both beginners to commands and those well versed in how old `/execute` behaved, it may be a good idea to review the concept of a command's **execution context**.

In short, these are the parameters that affects how a command runs. Who the command will run as, also known as its executor; where the command will run, and in which dimension; and the rotation applied to the command are all parameters that can be changed.

Every command has this context applied to it, and this context changes depending on how the command runs. Commands fired from command blocks do not have an executor, and the position is set to that command block; commands ran from chat define the executor as the player, and it runs at the player's position.

## Execute, and Why it Changed

The `/execute` command executes a command on behalf of one or more entities. The old syntax used to be this:

```
/execute <target> <position> <command>
/execute <target> <position> detect <position> <block> <data value> <command>
```

You specified a target to execute as, then the command's context would change to run as that target, and at that target. Any position changes were then always relative to that target.

While this is useful in most cases, it also forces the fact that a command's target and its position are always tied together (unless you were to manually insert world coordinates in place of `<position>`). It is also not very malleable in regards to making conditional statements, as you have to execute as an entity every time.

Back in the Summer of 2017 during the Update Aquatic's development, the developers of Minecraft: Java Edition were getting feedback from the community on how they can improve the `/execute` command's syntax, and the basic concept that was conceived is this: `/execute` takes an unlimited number of **subcommands** that manipulate certain aspects of the command in the order you specify, then a "run" subcommand is placed at the end to fire a command.

This allows for much greater control for what `/execute` can do to a command, and allows splitting up the executor and the command's position.

## New Syntax

Now, let us review the new `/execute` syntax. They are as follows:

### `/execute as`

Changes the executor of the command, or what the target selector `@s` will select.

```
/execute as <origin: target> -> execute
```

This does not change the position, rotation, or dimension context of the command.

If multiple targets are specified then a command is ran once for each target, where `@s` selects each entity in turn.

### `/execute at`

Changes where the command runs, setting the command's position, rotation, and dimension context to the entity.

```
/execute at <origin: target> -> execute
```

This does not change the executor of the command, so `@s` will remain as whoever was targeted last.

If multiple targets are specified then a command is ran once for each target, setting the position, rotation, and dimension context to each target.

### `/execute in`

Sets the dimension in which the command should run.

```
/execute in <dimension: string> -> execute
```

Currently accepted values are `overworld`, `nether`, and `the_end`.

This change in dimension will respect that dimension's scale; going from the Overworld to The Nether will apply a scale of x0.125 to the position, and vice versa will apply a x8 scale to the position.

### `/execute positioned`

Directly sets the position context of the command.

```
/execute positioned <position: x y z> -> execute
```

Sets the position of the command to specific values. [Relative and local coordinates](/commands/relative-coordinates) are based around the current position of the command.

```
/execute positioned as <origin: target> -> execute
```

Sets the position of the command to a target's location. This is similar to how `/execute at` works, but it only sets the command's position and not its rotation or dimension.

If multiple targets are specified then a command is ran once for each target, setting the position context to the target's position.

### `/execute align`

Aligns the current position of the command to the block grid.

```
/execute align <axes: swizzle> -> execute
```

Aligning a position will floor it. This subcommand accepts any non-repeating combination of the letters "x", "y", and "z", and will floor the position along each axis specified.

### `/execute anchored`

Sets the anchor of the command to the executor's feet or eyes. Changing the anchor will affect the position where local coordinates will start at.

```
/execute anchored (eyes|feet) -> execute
```

The default anchor when executing at a target is their feet.

When the anchor is set to `eyes`, the command's local position is offset by some amount corresponding to the "eye height" of the current executor.

This offset should only apply to local coordinates, but it currently affects relative coordinates due to a bug: [MCPE-162681](https://bugs.mojang.com/browse/MCPE-162681).

### `/execute rotated`

Directly sets the rotation context of the command.

```
/execute rotated <yaw: value> <pitch: value> -> execute
```

Sets the rotation of the command to specific values. Relative and local coordinates are based around the current rotation of the command. This defaults to 0 for both pitch and yaw, unless the rotation was changed prior.

```
/execute rotated as <origin: target> -> execute
```

Sets the rotation of the command to a target's rotation.

If multiple targets are specified then a command is ran once for each target, setting the rotation context to the target's rotation.

### `/execute facing`

Sets the rotation of the command to face some position. This rotation is calculated based on the current position of the command.

```
/execute facing <position: x y z> -> execute
```

Sets the rotation to face a block position. Relative and local coordinates are based around the current position of the command.

```
/execute facing entity <origin: target> (eyes|feet) -> execute
```

Sets the rotation to face a target's position. Setting the anchor to `feet` will aim the rotation to face where they are currently standing, while setting the anchor to `eyes` will aim the command up at the "eye position" of that target (see [`/execute anchored`](/commands/new-execute#execute-anchored)).

If multiple targets are specified then a command is ran once for each target, setting the rotation context to face that target.

### `/execute (if|unless)`

Prevents running a command based on a condition. If the condition is true then the command will continue, or stop otherwise.

`/execute unless` acts as the opposite, testing if the condition is false in order to continue.

```
/execute if entity <target: target> -> execute
```

Acts like `/testfor`. Returns true if the targets exist.

```
/execute if block <position: x y z> <block: string> -> execute
```

Acts like `/testforblock`. Returns true if the block at the specified location exists.

A data value or block state may additionally be specified, otherwise it ignores block states (acts as if it were set to `-1`).

```
/execute if blocks <begin: x y z> <end: x y z> <destination: x y z> (all|masked) -> execute
```

Acts like `/testforblocks`. It constructs a volume between the beginning and end positions, and returns true if the volume at the destination matches the original volume.

The parameter `all` tests that all blocks must match, while `masked` will ignore air blocks.

```
/execute if score <target: target> <objective: string> matches <range: integer range> -> execute
```

Tests if a specified score is a certain value. This uses the integer range syntax.

```
/execute if score <target: target> <objective: string> (=|<|<=|>|>=) <source: target> <objective: string> -> execute
```

Tests if a specified score matches some logical comparison to another score. Operators are equals (`=`), greater than (`>`), greater than or equal to (`>=`), less than (`<`), and less than or equal to (`<=`).

### `/execute run`

```
/execute run <command: command>
```

Runs a command using all of the currently applied context modifications. This subcommand always goes last in one `/execute` command.

This subcommand is not always required however; an `/execute` command ending with an `if` or `unless` subcommand is valid too, and will return the success of the test it performed.

## Examples and Upgrading Old Commands

Since subcommands can be chained limitlessly, there really is a nearly infinite combination of arguments for an `/execute` command and they cannot all be listed. Instead, listed here are some common examples of commands.

The old functionality of `/execute` can be replicated with `as <target> at @s`. If you need a positional offset relative to the entity, add `positioned`. If you want to detect if a block is present, add `if block`. Here are some equivalents:

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

(Note that we do not use `as @e[type=sheep] at @s` because we do not need to execute as the sheep; only the position here is required.)

Now for some examples of things that were not possible to do in one command, or were more difficult to perform before the new syntax was introduced.

```
# Testing a fake player's score
/execute if score game_settings var matches 3.. run say [Game] Difficulty set to Hard.

# Comparing if two scores are equal
/execute as @a if score @s x = @s y run say My X is equal to my Y.

# Test for an entity without targeting it
/execute as @a at @s if entity @e[type=armor_stand,r=10] run gamemode survival @s
```
