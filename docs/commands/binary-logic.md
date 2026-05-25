---
title: Binary in Commands
category: Techniques
mentions:
    - BedrockCommands
    - OneRat240
nav_order: 4
tags:
    - concept
description: Master the use of binary systems to optimize command efficiency and handle large-scale data.
---

## Introduction

**Binary** (Base-2) is a mathematical system that allows you to represent any integer using only two states: `0` (Off/False) and `1` (On/True).

While humans typically use Base-10 (0–9), computers use Binary to perform complex tasks. In a way, they can also be used in command systems like bulk item selling or coordinate detection—with significantly fewer commands than linear methods would require.

## How Binary Works

In a binary system, each digit is called a **bit**. Each bit's position represents a specific power of 2, increasing from right to left.

| Bit Position    | Power | Value  |
| :-------------- | :---- | :----- |
| 1st (Rightmost) | `2^0` | **1**  |
| 2nd             | `2^1` | **2**  |
| 3rd             | `2^2` | **4**  |
| 4th             | `2^3` | **8**  |
| 5th             | `2^4` | **16** |

### Conversion Example

To convert the binary number `1101` to a standard number, you sum the values of the positions where a `1` is present:

-   **1** in the 8s place (`2^3`)
-   **1** in the 4s place (`2^2`)
-   **0** in the 2s place (`2^1`)
-   **1** in the 1s place (`2^0`)

`8 + 4 + 0 + 1 = 13`

## Implementation in Bedrock Commands

The primary advantage of binary in commands is **optimization**. Instead of running 64 commands to check if a player has 1 to 64 items, you can use just **7 binary steps** ($2^0$ through $2^6$).

### Example: Binary Shop System

This system clears items from a player's inventory and rewards them with a scoreboard currency. By checking for the largest possible power of 2 first, the system "deconstructs" any stack size efficiently.

```yaml
## Check For 64 (2^6)
execute as @a[hasitem={item=bread,quantity=64..}] run scoreboard players add @s wiki:money 64
execute as @a[hasitem={item=bread,quantity=64..}] run clear @s bread 0 64

## Check For 32 (2^5)
execute as @a[hasitem={item=bread,quantity=32..}] run scoreboard players add @s wiki:money 32
execute as @a[hasitem={item=bread,quantity=32..}] run clear @s bread 0 32

## Check For 16 (2^4)
execute as @a[hasitem={item=bread,quantity=16..}] run scoreboard players add @s wiki:money 16
execute as @a[hasitem={item=bread,quantity=16..}] run clear @s bread 0 16

## Check For 8 (2^3)
execute as @a[hasitem={item=bread,quantity=8..}] run scoreboard players add @s wiki:money 8
execute as @a[hasitem={item=bread,quantity=8..}] run clear @s bread 0 8

## Check For 4 (2^2)
execute as @a[hasitem={item=bread,quantity=4..}] run scoreboard players add @s wiki:money 4
execute as @a[hasitem={item=bread,quantity=4..}] run clear @s bread 0 4

## Check For 2 (2^1)
execute as @a[hasitem={item=bread,quantity=2..}] run scoreboard players add @s wiki:money 2
execute as @a[hasitem={item=bread,quantity=2..}] run clear @s bread 0 2

## Check For 1 (2^0)
execute as @a[hasitem={item=bread,quantity=1..}] run scoreboard players add @s wiki:money 1
execute as @a[hasitem={item=bread,quantity=1..}] run clear @s bread 0 1
```

![Chain of 14 Command Blocks](/assets/images/commands/command-block-chain/14.png)

> [!TIP] > **Why use this?** If a player has 50 bread, the system clears 32, then 16, then 2 ($32+16+2=50$). This process takes only 3 successful checks, whereas a linear system would take 50.

## Advanced Use Cases

### Get Coordinate as Scores

Detecting a player's exact X, Y, or Z coordinate is performed using a **Binary Search Tree**. Instead of checking every possible coordinate, you use a series of `execute` commands to narrow down the player's position relative to a fixed point.

By checking if a player is within a volume of 32,768 blocks, then 16,384, and so on down to 1 block, you can pinpoint their exact position across the world in just **16 steps**. This is the most performance-efficient way to convert spatial data into scoreboard integers for use in calculations or teleports.

### Implementation With MEF

You can also incorporate a binary tree into **[Multiplicative Execution Forking (MEF)](/commands/execution-forking)** to create complex geometries, terrain, or custom generations, such as a village or backrooms, **with a single command!**
