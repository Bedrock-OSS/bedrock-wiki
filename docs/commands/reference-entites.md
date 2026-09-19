---
title: Reference Entities
category: Coordinates Calculation Theory
tags:
    - guide
mentions:
    - theVivia
nav_order: 3
description: A useful standard to create entities for CCT.
---

## Introduction

This is the most useful part of CCT. We always use armor stands and boats to realize the functions.

### Armor Stands Won't Save $\text{pitch}$

The armor stands in Bedrock version only save $\text{yaw}$. Use `/tp` to bring the parameter $\text{pitch}$, but it cannot work — There isn't a option for the rotation of armor stands.

Result: **Armor Stands can only express the horizontal circle.**

Go further: `positioned ^ ^ ^d` moves forward,`positioned ^d ^ ^` moves leftward. When $\text{pitch} = 0$, the two directions are all on the horizontal plane, Therefore:

**Use armor stands only to express, there's no way to get out of the horizontal plane. There's no way to traverse a 3D space.**

X and Z directions is enough to express by $\text{yaw}$, Y direction must have $\text{pitch}$, armor stands cannot provide.

### But Boats Can

Boats will save the $\text{pitch}$. Wherever you needs a vertical portion, the reference entity must be a boat.

But the $\text{pitch}$ of boats **cannot reach $±90°$**, there's no way to give a pure vertical direction like $(0,\pm1,0)$. Communities usually use $∓30°$, and eliminate the horizontal portion. The following pages will calculate the result.

Why it is $30°$? Because $\sin 30° = \tfrac12$, the vertical portion is a simple and exact value, and it is friendliest to match binary weight. While $45°$ gives $0.7071$, It is very annoying to calculate.

### Proofs

It is different that the 3 subcommands read.

| Subcommand        | Reads         | Armor Stands Only      |
| ----------------- | ------------- | ---------------------- |
| `positioned as X` | Position only | Yes                    |
| `facing entity X` | Position only | Yes                    |
| `rotated as X`    | View          | Needs $\text{pitch}=0$ |

Only `rotated as` will touch the restriction.  When entities is signing a position, armor stands work perfectly.

### Rules of Cover

`rotated as` will follow a *cover* behind. While the things behind decide which part of the information of entity is active.

| Combination                    | Active Part                     | Whether Armor Stands Enough                   |
| ------------------------------ | ------------------------------- | --------------------------------------------- |
| `rotated as X` + `rotated ~ θ` | $\text{yaw}$ Only               | Enough                                        |
| `rotated as X` + `rotated θ ~` | $\text{pitch}$ Only             | When $\text{pitch} ≠ 0$ of $θ$ **Needs boat** |
| `rotated as X`(No covered)     | $\text{yaw}$ and $\text{pitch}$ | When $\text{pitch} ≠ 0$ **Needs boat**        |

The second row of the list is considerable: `rotated 0 ~` seems "zeroed $\text{yaw}$", but actually is made success or failure of the whole command all depends on the $\text{pitch}$ of the entity. If the entity is an armor stand, $\text{pitch}$ is always $0$, `positioned ^ ^ ^d` will made a horizontal move only, while there is not a single block to vertical move, the whole graph becomes a plane.

### Summon and Setting

**Armor Stands**

```yaml
/summon armor_stand A 0 64 0
```

Setting $\text{yaw}$, keeps position:

```yaml
/execute as @e[type=armor_stand,tag=a1,c=1] at @s run tp @s ~ ~ ~ 0 0
```

**Boats**

```yaml
/summon boat 0 64 0 0 -30
/summon boat 0 64 1 180 30
```

The fourth and fifth parameter is $\text{yaw}$ and $\text{pitch}$. We can also adjust them after:

```yaml
/execute as @e[type=boat,tag=t1,c=1] at @s run tp @s ~ ~ ~ 0 -30
```

:::tip
Boats can effected by gravity. Put them on a flat solid block, don't put them in water, otherwise they will drift.
Boats can be sit accidentally, it's better to departure the debugging area.
:::

**Tags Entities to Distinguish Them**
MEF needs an abundant of entities but named same, but needs separate view setting. We can use `/tag` to solve this problem:

```yaml
/summon boat 0 64 0
/tag @e[type=boat,c=1,r=2] add t1
/summon boat 0 64 1
/tag @e[type=boat,tag=!t1,c=1,r=2] add t2
/execute as @e[type=boat,tag=t1,c=1] at @s run tp @s ~ ~ ~ 0 -30
/execute as @e[type=boat,tag=t2,c=1] at @s run tp @s ~ ~ ~ 180 30
```

And use another tag like `@e[type=boat,tag=tree]` to select all.

## Single-objective Principle

All the commands before have to add `c=1`,  and as much as possible to  add `type=`：

```yaml
@e[type=armor_stand,name=S,c=1]
```

The reason is: If a selector hits multiple entities, the execution path will split into multiple branches, and the command will run multiple times. CCT commands should produce only one point, and if the command is split, the result will be incomprehensible.

Add `type=` is also needs to consider, while there's other entities which has the same name, they will made the whole command crash.

## Action List

An `execute` will maintain a virtual situation on any time, most of them are **position** and **view**. Subcommands modify this situation one by one, and `run` makes a final effect in the end.

The right way to read a long command is from left to right, each subcommand translates into an action:

```yaml
/execute at @e[name=A,c=1] facing entity @e[name=B,c=1] feet positioned ^ ^ ^5 run particle minecraft:basic_flame_particle ~ ~ ~
```

These are the actions:

```
Move the original point to A
Look at B
Go 5 blocks forwards along the view
Run particle
```

Conversely, you should make an action list before writing a long command, and translate them into subcommands one by one. Actions steps can combine to some formula, this is what we usually do.

**I am strongly recommending you to make an action list before writing a long command because it is very helpful when checking the bugs, it is no way (very hard) to find out where the bug is by only stick tao the command string.**
