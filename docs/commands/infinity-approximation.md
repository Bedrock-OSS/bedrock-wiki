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

### 2 Key Chain Section

Actually, all the key point of the infinity approximation is "What kind of coordinates do you  use?" and "How far did you move by it?"
Position and views are mutually independent line, while `positioned ^a ^b ^c` is the only way to connect them together — it moves the position along the view direction.
Another common chain section is `rotated ~ 0`, it can reset the pitch and keep the yaw horizontally.
The basic idea of infinity approximation is consider to match a large distance for what transformation and then you can get the proportional-point. We only use the "Similar-triangles" and "Pythagorean theorem" to calculate.

### `facing` Gives a Direction

First, understand exactly what `facing` does.
Let the current position be $P$, and the target be $Q$. After executing `facing`, the view direction toward $Q$. Then move d blocks with:

```yaml
positioned ^ ^ ^d
```

**The key point: the distance is precisely `d`.**
No matter how far apart $P$ and $Q$ are, the direction produced by `facing` always has a length of 1. It normalizes the displacement "from $P$ to $Q$" into a unit‑length vector.
This means facing gives you a direction for free, and this direction encodes the proportional positional relationship between $P$ and $Q$. The infinity approximation to extract this proportional information.
The extraction method is to construct a right‑angled triangle and apply similar‑triangle geometry.

You end up at a point starting from $P$, along the direction toward $Q$, at an exact distance of d blocks.

### Find the Midpoint by Similar-triangles

Let $S$ and $M$ be two points at the same elevation with a horizontal separation $D$. We wish to find their midpoint.

**Step 1**
Raise the origin far above $S$ to a height denoted $H$; call this new position $S'$.

**Step 2**
Look from $S'$ toward $M$. This line of sight forms the hypotenuse (named its length as $L$) of the right triangle $S'SM$. By the Pythagorean theorem:

$$L = \sqrt{H^2 + D^2}$$

**Step 3**
Travel $H/2$ blocks along this hypotenuse.

The traversed segment shares the same direction as the full hypotenuse, so the resulting smaller triangle is similar to $S'SM$, with similarity ratio:

$$\frac{H/2}{L}$$

The actual horizontal displacement is therefore:

$$\frac{H/2}{L}\times D = \frac{HD}{2L}$$

The actual vertical drop is:

$$\frac{H/2}{L}\times H = \frac{H^2}{2L}$$

**Step 4**
We are still not back to the original elevation, so compensate downward using relative coordinates.

Now for the crucial observation. When $H$ is much larger than $D$:

$$L = \sqrt{H^2+D^2} = H\sqrt{1+\frac{D^2}{H^2}} \approx H$$

since $D^2/H^2$ is a vanishingly small quantity. Substitute back into the horizontal displacement:

$$\frac{HD}{2L} \approx \frac{HD}{2H} = \frac{D}{2}$$

This is exactly half the horizontal distance. The midpoint is recovered.

Meanwhile the vertical drop approximates to $H/2$, so step 4 requires an additional downward offset of $H/2$ to return to the starting elevation.

**Generalise to Arbitrary Ratios**
Replace $H/2$ with $tH$. The horizontal displacement becomes:

$$\frac{tHD}{L} \approx tD$$

The vertical drop is approximately $tH$, descending from height $H$ to roughly $(1-t)H$. Step 4 therefore needs a further downward offset of $(1-t)H$.

This constitutes the complete formula for proportional‑point computation.

## Zero Approximation

Just like the infinity approximation, when something like $\lim\limits_{b \to 0}$ appears, you need to manually assign a value (a small number) to $b$, We call it **Zero approximation** (as known as the *Little number compass*)
<!-- This page is still writing -->
