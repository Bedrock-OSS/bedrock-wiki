---
title: CCT - A Technique to Transform Execution Points
category: Coordinates Calculation Theory
tags:
    - expert
mentions:
    - theVivia
nav_order: 1
description: A commands theory to transform execution points more advanced.
---

## Introduction

**Coordinates Calculation Theory (CCT)** is a method to operate the [multiplicative execution forking](/execution-forking) points. Given a set of execution points, CCT can transform them such as move, rotate, face, branch, and compose, then record the process mathematical description and commands that another person can reproduce. **It could build some amazing effects only by using command blocks.** Such as generate a sphere, generate a Perlin noise gen, or something looks like a geometry and even a mathematical function graph, it can also be used to build like a bullet trajectories resembling 3D collisions.

On this page, we will learn about CCT, and show how to use it.

### How does CCT work in Minecraft?

:::warning
This part is full of the mathematics, you better know some calculus and the linear algebra (especially the matrix calculations part), please read carefully. If you are not interested, you can skip this part.
:::

A command chain is a state transformation:

$\text{Pose} = [x, y, z, rx, ry]$
$rx = \text{pitch }ry = \text{yaw}$

#### From one point to a set

Let $S$ be a set of execution states. A deterministic CCT operation $T$ acts on the whole set as:

$T(S) = \bigl\{ T(s) \,\big|\, s \in S \bigr\}$

Sequential commands compose in order:

$(T_2 \circ T_1)(S) = T_2\bigl(T_1(S)\bigr)$

This is the central CCT practice: define the set, choose an operation, and calculate the transformed set. Local coordinates depend on current rotation, and `facing` is *nonlinear*, so these operations cannot be reordered as if they were one fixed matrix.

#### Three primitive operations

| Operation             | $\text{Pose}$ effect                         | Set effect                                |
| --------------------- | -------------------------------------------- | ----------------------------------------- |
| `positioned ~a ~b ~c` | $p ← p+(a,b,c)$                              | Translate every member on world axes      |
| `positioned ^a ^b ^c` | $p ← p+R(rx,ry)(a,b,c)$                      | Move each state using its own orientation |
| `facing`              | Update $rx$ and $ry$ from a target direction | Keep positions, change later local bases  |

For example:

```yaml
execute positioned ~1 ~ ~ rotated ~15 ~
```

has the point expression:

$T([x,y,z,rx,ry]) = [x+1, y, z, rx, ry+15°]$

For a set $S$, the result is simply $T(S)$.

### Use CCT

To do a transformation, you need to create the set of execution points, and just add the command operation one by one, then end up as a `run` command, pretty easy to use.

Briefly:
`execute <Part of Execution Point> [Formula 1] [Formula 2] ... [Formula n] run <Command>`

For example, you want to square the "Set of execution points" and multiplied by 4, it just like:

$S → \text{square}(S) → \text{multiplication}(\text{square}(S), 4)$

Then its command chain is:

```yaml
execute positioned 0.0 0 0.0 rotated as @e[name=mef] positioned ^^^4 rotated as @e[name=mef] positioned ^^^2 rotated as @e[name=mef] positioned ^^^1 rotated as @e[name=mef] positioned ^^^0.5 facing 0.0 ~100 0.0 positioned ^^^-40000 rotated ~180~ positioned ^^^-40000 positioned ~~80000~ run particle minecraft:balloon_gas_particle ~~~
```

The following entries are a small part of transcription of the Formula-table of the Chinese community. They are community/source claims, not automatic independent proofs.

| Table result             | Target transformation  | Typical Note          | Sub-commands                                                                                                                          |
| ------------------------ | ---------------------- | --------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| Square                   | $(x,y,z) → (x,y+z²,z)$ | The base of algebra   | `facing 0~a~ positioned ^^^-a² rotated ~180~ positioned ^^^-a² positioned ~~2a²~`                                                     |
| Short square             | $(x,z) → (?,y+z²,z)$   | The base of algebra   | `facing 0~a~ positioned ^^^-2a² positioned ~~2a²~`                                                                                    |
| Shorter multiplication   | $(x,y,z) → (?,y+xz,?)$ | The base of algebra   | `facing 0 ~a 0 positioned 0~ 0 rotated ~45~ positioned ^^^a² facing ~~-a²/√2 0 positioned ^^^a²`                                      |
| 2D vector multiplication | $(x,y,z) → (xy,y,zy)$  | scales a plane vector | `facing 0 ~b 0 positioned 0~ 0 positioned ^^-a/2b^ rotated ~180~ positioned ^^-a/2b^ facing 0 0 0 positioned 0 ~a 0 positioned ^^-a^` |

:::tip
The "a" is one large number, tends to positive infinity in mathematics; the "b" is a small number, tends to zero in mathematics. [See the other page](/infinity-approximation) for more details.
:::

There is where CCT became powerful, with these two entries, we can build all mathematical transformations which **can expand by Taylor's formula**.

### Appendix

Now you have a basic understanding of CCT, in the forward pages, I will show you the amazing effects and interesting mathematical commands problems which relative to CCT (proven and disproven)

<!--
The Chinese community has developed abundant of formula-table entries, I will integrate them in the future.
I only show a small part of the CCT, the full version is too long. If the community allows, I will write a full version on wiki and show all things to public, the Discord is hard to use via Chinese network. After all, science and technology knows no borders!
-->
