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

![The Graph of Find the Midpoint by Similar-triangles](infinityapproximation.gif)

**Step 2**
Look from $S'$ toward $M$. This line of sight forms the hypotenuse (named its length as $L$) of the right triangle $S'SM$. By the Pythagorean theorem:

$$L = \sqrt{H^2 + D^2}$$

**Step 3**
Travel $\frac{H}{2}$ blocks along this hypotenuse.

The traversed segment shares the same direction as the full hypotenuse, so the resulting smaller triangle is similar to $S'SM$, with similarity ratio:

$$\frac{\frac{H}{2}}{L}$$

The actual horizontal displacement is therefore:

$$\frac{\frac{H}{2}}{L}\times D = \frac{HD}{2L}$$

The actual vertical drop is:

$$\frac{\frac{H}{2}}{L}\times H = \frac{H^2}{2L}$$

**Step 4**
We are still not back to the original elevation, so compensate downward using relative coordinates.

Now for the crucial observation. When $H$ is much larger than $D$:

$$L = \sqrt{H^2+D^2} = H\sqrt{1+\frac{D^2}{H^2}} \approx H$$

since $\frac{D^2}{H^2}$ is a vanishingly small quantity. Substitute back into the horizontal displacement:

$$\frac{HD}{2L} \approx \frac{HD}{2H} = \frac{D}{2}$$

This is exactly half the horizontal distance. The midpoint is recovered.

Meanwhile the vertical drop approximates to $\frac{H}{2}$, so step 4 requires an additional downward offset of $\frac{H}{2}$ to return to the starting elevation.

**Generalise to Arbitrary Ratios**
Replace $\frac{H}{2}$ with $tH$. The horizontal displacement becomes:

$$\frac{tHD}{L} \approx tD$$

The vertical drop is approximately $tH$, descending from height $H$ to roughly $(1-t)H$. Step 4 therefore needs a further downward offset of $(1-t)H$.

This constitutes the complete formula for proportional‑point computation.

Looking back at the process: we take a fixed length $H$ as the "radius", and locate new points by rotating direction and marking off lengths. This follows the same logic as compass construction — in compass-and-straightedge geometry operations such as finding midpoints and drawing perpendicular lines essentially also rely on circles of fixed radius to locate intersection points.

*We save the data in the "radius" and the "angle" of this "compass"* The difference us that the radius of a traditional compass is comparable to the scale of the figure, while $H$ here must be **far larger than** the figure scale. The approximation $L \approx H$ is only valid under this premise. This is where the term *large number compass* comes from.

### Where Does the Error Come From?

In last section, we made an approximation: We assumed $\sqrt{H^2+D^2}$ as $H$. This approximation is not precise, so the result is not exact.

Let us quantify the error. The exact value of the horizontal displacement is:
$$\frac{tHD}{\sqrt{H^2+D^2}}$$

The ideal value is $tD$, Expanding the square root term:
$$\frac{1}{\sqrt{H^2+D^2}} = \frac{1}{H}\left(1+\frac{D^2}{H^2}\right)^{-1/2} \approx \frac{1}{H}\left(1-\frac{D^2}{2H^2}\right)$$

Therefore:
$$\frac{tHD}{\sqrt{H^2+D^2}} \approx tD - \frac{tD^3}{2H^2}$$

**Horizontal error:**
$$E_x \approx \frac{tD^3}{2H^2}$$

The same reasoning applies to the vertical direction. When traversing a distance of $tH$ along the hypotenuse, the vertical descent is $\frac{tH^2}{L}$. We use $tH$ for compensation, and the difference is:
$$E_y \approx \frac{tD^2}{2H}$$

**Two Key Concolusions to Remember**
First, the error is grows as $D$ increases; the horizontal error is proportional to the cube of $D$.
Second, the horizontal error is inversely proportional to $H^2$, while the vertical error is only inversely proportional to $H$. The vertical error decays more slowly, so it will become noticeable first.

Plugging in sample values ($t = 0.5$，$H = 100000$):

| $D$    | Horizontal Error           | Vertical Error |
| ------ | -------------------------- | -------------- |
| $10$   | approx. $1.3\times10^{-8}$ | $0.00025$      |
| $100$  | approx. $1.3\times10^{-5}$ | $0.025$        |
| $1000$ | approx. $0.0125$           | $2.5$          |

The result is nearly perfect at short distances. When $D$ reaches $1000$ blocks, the vertical deviation amounts to $2.5$ blocks, which is visible to the naked eye.

### How Large Should $H$ Be

Judging from the formula, a larger $H$ is always preferable, but it **cannot** be increased infinitely in practice.

Game coordinates are stored as **floating-point numbers** with *limited precision*. A core property of floating-point numbers is **fixed relative precision**: the greater the magnitude of a value, the larger the minimum interval it can represent. When $H$ reaches the order of hundreds of thousands, while the graphics we work with are only a few blocks in size, the lower-order bits of the small coordinate values will be lost during calculations, overwhelmed by the magnitude of the large coordinate.

Expressed as a model, the total error is the sum of two terms:
$$E(H) \approx C_1\frac{r^2}{H} + C_2\varepsilon H$$

The first is the geometric truncation error, which decreases as $H$ grows larger. The second terms is the floating-point error, which increases as $H$ grows larger. Here, $r$ denotes the typical scale of the figure, and $ε$ is the relative precision of floating-point numbers.

The total error reaches its minimum when the two terms are equal:
$$H \sim \frac{r}{\sqrt{\varepsilon}}$$

For single-precision floating-point numbers,  $\varepsilon \approx 2^{-23}$. Substituting this gives $\frac{1}{\sqrt{\varepsilon}} \approx 2900$, or:
$$H \sim 2900\,r$$

This explains why values such as $1024$, $2048$, $4096$ and $16384$ are commonly seen in community formulas — they all fall within the reasonable range for figures with a scale of several to several dozen blocks

This estimation only gives the order of magnitude. The proper approach is to test multiple values of $H$ for comparison:

```
256, 512, 1024, 2048, 4096, 8192
```

Note when modifying $H$: all related distances in the formula must be updated simultaneously. The midpoint formula involves $H$, $tH$ and $(1-t)H$ — changing only one of them will directly cause errors. The far-point reflection below uses $H$, $2H$ and $H$, and the same rule applies.

### Summary

The entire validity of the infinity approximation rests on a single approximation:
$$\sqrt{H^2+D^2} \approx H \qquad (H \gg D)$$

Two essential facts follow from this approximation:

- The infinity approximation relies on **asymptotic approximation**, not an exact identity.
- There exists an optimal range for $H$; **a larger value is not always better**.

Understanding this is critical. The error analysis of all advanced formulas in subsequent chapters is simply a variation and extension of this principle. When a approximated figure shows *slight deviation*, *jagged edge*s or *double lines* with the precise figure, the first thing to verify is whether the relationship between $H$ and the figure scale is appropriate.

**An Experiment to Build Intuition**
Place two armor stands, named S and M, at the same height with a distance of about 20 blocks between them. Use the midpoint command from section below to spawn particles, and set $H$ to $1000$, $10000$ and $100000$ successively. At such a short distance, the three settings produce barely perceivable difference — this confirms the extremely high precision of the method over short ranges.

Then move the two armor stands 500 blocks apart and repeat the procedure. This time, $H = 1000$ yields a clear deviation, and only with $H = 100000$ does the result settle back near the midpoint. This is because the $E_y \approx \frac{tD^2}{2H}$ is at work.

## Zero Approximation

Just like the infinity approximation, when something like $\lim\limits_{b \to 0}$ appears, you need to manually assign a value (a small number) to $b$, We call it **Zero approximation** (as known as the *Little number compass*), the basic idea of zero approximation is similar to infinity approximation.
