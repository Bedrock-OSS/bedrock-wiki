---
title: Execution Forking
category: Techniques
mentions:
    - BedrockCommands
    - MaxedOut4826
nav_order: 3
tags:
    - concept
description: Learn how to utilize Multiplicative Execution Forking (MEF) to instance commands and increase execution frequency.
---

## Introduction

[Sourced by the Bedrock Commands Community (BCC) Discord](https://bedrockcommands.org/)

**Execution Forking** (also known as *Instancing* or *Nesting*) is a technique used to trigger a single command multiple times within the same tick. This is achieved by leveraging selectors that target multiple entities, effectively "forking" the execution path for each target found.

### The Problem: Speed vs. Efficiency
Imagine you are creating a bullet system. To ensure the bullet doesn't pass through walls, you need to check for collisions every 1 block. If you move the bullet 1 block per tick, it will appear slow and laggy. 

To make it travel 32 blocks instantly while still checking for collisions, you need to run the move-and-check logic 32 times in a single tick. Manually placing 32 command blocks is inefficient and difficult to maintain. **Execution Forking** solves this by using a single command to generate those 32 instances.

## Understanding Instancing

In Bedrock Edition, just because you have one command block does not mean it is only running one command. When you use a selector (like `@a` or `@e`) that identifies multiple targets, you create a new **instance** of that command for every entity selected.

Consider this command:

```yaml
execute at @a run particle minecraft:basic_flame_particle ~ ~ ~
```

If there are 5 players online, the `at @a` subcommand forks the execution. Instead of one particle command, it runs **5 separate instances** (one at the location of each player).

## Multiplicative Execution Forking (MEF)

By "nesting" these execution forks, you can exponentially increase the number of times a command runs. This is often called **Execute Multipliers** or **Nesting**.

When you stack multiple `as` or `at` subcommands, each new fork multiplies the existing ones.

### The Math of Nesting

The total number of instances created follows a simple power formula:

` Instances = n^x `

Where ` n ` is the number of entities targeted per subcommand, and ` x ` is the number of times you nest the execution.

### Example: Stacking Branches

```yaml
execute as @e[c=2] as @e[c=2] as @e[c=2] run say hi
```

In this example, the command will say `hi` **8 times** in a single tick:

1.  **First Fork:** The initial instance targets 2 entities $\rightarrow$ **2 instances**.
2.  **Second Fork:** Those 2 instances each target 2 more entities $\rightarrow$ **4 instances**.
3.  **Third Fork:** Those 4 instances each target 2 more entities $\rightarrow$ **8 instances**.

### Common Use Cases

* **Raycasting:** Forcing a "bullet" or "laser" to move forward multiple steps in one tick to prevent clipping through walls.
* **Mass Entity Updates:** Applying complex logic to every entity in a loaded area without using multiple repeating command blocks.
* **High-Speed Timers:** Running a scoreboard timer multiple times per tick for sub-tick precision.

:::tip
Always use `c=` (count) or `type=` limits when forking. If you accidentally fork `@e` (all entities) without a limit, you can create hundreds of instances instantly, leading to significant server lag or a "Command Overflow."
:::