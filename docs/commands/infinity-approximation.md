---
title: Limit Approximation
category: Coordinates Calculation Theory
tags:
    - intermediate
mentions:
    - theVivia
nav_order: 2
description: A detailed introduction to approximation thought of CCT
---

## Introduction

Almost everything in CCT is based on construct a *limit expression*, obtain target outcomes by means of approximation. We call it **Limit Approximation**, It is the most important part of CCT. It is a tool by using very extreme value (close to infinity or zero) to make the formula in CCT be available.

Minecraft makes the coordinates parameters (x, y, z, rx and ry) as a floating point number. It will automatically round decimals with a large digits. To achieve this effect, you need to gives the limit parameters a very extreme value.

In different limit expression, the fittable least values you assign is different, it's up to the convergence rate of the expression, error magnitude in game and required precision you want.

## Infinity Approximation

When you constructed a command line of CCT, it maybe has something like $\lim\limits_{a \to \infin}$ appears, then you need to manually assign a value (a large number) to $a$, We call it **infinity approximation** (as known as the *Large number compass*)

## Zero Approximation

Just like the infinity approximation, when something like $\lim\limits_{b \to 0}$ appears, you need to manually assign a value (a small number) to $b$, We call it **Zero approximation** (as known as the *Little number compass*)
<!-- This page is still writing -->
