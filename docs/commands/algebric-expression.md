---
title: Math about CCT
category: Coordinates Calculation Theory
tags:
    - expert
mentions:
    - theVivia
nav_order: 5
description: Math tools and proves to express CCT subcommands.
---

## Introduction

:::danger
These are all mathematical theories, and it's just a tool  for theoretical analysis in the `/execute` command of CCT.
:::

If the coordinates of a point $P$ in Minecraft are $(x, y, z)$, then the viewing angle is $(ry, rx)$. To represent this in the mathematical three‑dimensional coordinate system, it is necessary to convert these values to $(z, x, y)$ and $(ry, -rx)$. For all subsequent coordinates, the viewing angles will be based on the Minecraft coordinate system. Thanks to @1maginer0 and @senxyzplayeE from Chinese community contribute this math tool.

The algebraic representation is only applicable to theoretical analysis. In actual practice, factors such as floating‑point numbers and various game mechanics must also be considered. This article does not take those into account.

## Algebraic Expression (Non-linear Algebraic Form)

Let the current execution position of the `/execute` command be $(x, y, z)$ and the execution view angles be $(-ry, rx)$. The following transformations related to positioned do not change the view angles; they only change the execution position.

If `positioned a b c`, perform the following transformations:
$$
(x, y, z) \mapsto (a, b, c)
$$

If `positioned ~a ~b ~c`, perform the following transformations:
$$
(x, y, z) \mapsto (x + a, y + b, z + c)
$$

If `positioned ^a ^b ^c`, perform the following transformations:

$$
\begin{aligned}
(x, y, z) \mapsto
(x + a\cos(ry) - b\sin(rx)\sin(ry) - c\cos(rx)\sin(ry), \\
y + b\cos(rx) - c\sin(rx), \\
z + a\sin(ry) + b\sin(rx)\cos(ry) + c\cos(rx)\cos(ry))
\end{aligned}
$$

The following transformations related to facing and rotated do not change the execution position; they only change the view angles.

If `facing a b c`, the trigonometric values of $ry$ and $rx$ after the transformation are as follows:
$$
\begin{aligned}
\sin ry \leftarrow \frac{a - x}{\sqrt{(a - x)^2 + (c - z)^2}} \\
\cos ry \leftarrow \frac{c - z}{\sqrt{(a - x)^2 + (c - z)^2}} \\
\sin rx \leftarrow \frac{b - y}{\sqrt{(a - x)^2 + (b - y)^2 + (c - z)^2}} \\
\cos rx \leftarrow \frac{\sqrt{(a - x)^2 + (c - z)^2}}{\sqrt{(a - x)^2 + (b - y)^2 + (c - z)^2}}
\end{aligned}
$$

If `facing ~a ~b ~c`, the trigonometric values of $ry$ and $rx$ after the transformation are as follows:
$$
\begin{aligned}
\sin ry \leftarrow \frac{a}{\sqrt{a^2 + c^2}} \\
\cos ry \leftarrow \frac{c}{\sqrt{a^2 + c^2}} \\
\sin rx \leftarrow \frac{b}{\sqrt{a^2 + b^2 + c^2}} \\
\cos rx \leftarrow \frac{\sqrt{a^2 + c^2}}{\sqrt{a^2 + b^2 + c^2}}
\end{aligned}
$$

:::tip
`facing x+a y+b z+c` is equivalent to facing ~a ~b ~c, and this can also handle mixed cases.
:::

If `facing ^a ^b ^c`, the trigonometric values of $ry$ and $rx$ after the transformation are as follows:
$$
\begin{aligned}
\sin(ry) \leftarrow -\frac{a\cos(ry) - \big(b\sin(rx) + c\cos(rx)\big)\sin(ry)}{\sqrt{a^2 + \big(b\sin(rx) + c\cos(rx)\big)^2}} \\
\cos(ry) \leftarrow \frac{a\sin(ry) + \big(b\sin(rx) + c\cos(rx)\big)\cos(ry)}{\sqrt{a^2 + \big(b\sin(rx) + c\cos(rx)\big)^2}} \\
\sin(rx) \leftarrow \frac{c\sin(rx) - b\cos(rx)}{\sqrt{a^2 + b^2 + c^2}} \\
\cos(rx) \leftarrow \frac{\sqrt{a^2 + \big(b\sin(rx) + c\cos(rx)\big)^2}}{\sqrt{a^2 + b^2 + c^2}}
\end{aligned}
$$

Partial conversion formulas related to `facing ~a ~b ~c`:

`facing ^a ^b ^c` $=$ `rotated ~ ~-arctan(b/c) facing ^a ^ ^sqrt(b^2+c^2)`
`rotated ~ ~-theta facing ^a ^ ^b` $=$ `facing ^a ^b*sin(theta) ^b*cos(theta)`

If `rotated ~a ~b`, the trigonometric values of $ry$ and $rx$ after the transformation are as follows:
$$
\begin{aligned}
\sin(ry) \leftarrow \sin(ry)\cos(a) + \cos(ry)\sin(a) \\
\cos(ry) \leftarrow \cos(ry)\cos(a) - \sin(ry)\sin(a) \\
\sin(rx) \leftarrow \sin(rx)\cos(b) + \cos(rx)\sin(b) \\
\cos(rx) \leftarrow \cos(rx)\cos(b) - \sin(rx)\sin(b)
\end{aligned}
$$

As for `rotated a b` — it is not commonly used in the `/execute` command. The author considers the derivation process to be relatively simple, so it is omitted here.

Please pay attention to the conversion between degrees and radians. Errors of this kind frequently occur in angle/radian calculations.

If you have already computed $\sin(ry)$, $\cos(ry)$, $\sin(rx)$, and $\cos(rx)$, and need to calculate the corresponding $ry$ and $rx$ used in the game

Note that $\mathrm{atan2}$ returns a value in radians, like this:

$$
\operatorname{atan2}(y, x) =
\begin{cases}
\arctan\left(\dfrac{y}{x}\right) & x > 0 \\[4pt]
\arctan\left(\dfrac{y}{x}\right) + \pi & y \ge 0,\ x < 0 \\[4pt]
\arctan\left(\dfrac{y}{x}\right) - \pi & y < 0,\ x < 0 \\[4pt]
+\dfrac{\pi}{2} & y > 0,\ x = 0 \\[4pt]
-\dfrac{\pi}{2} & y < 0,\ x = 0 \\[4pt]
\text{undefined} & y = 0,\ x = 0
\end{cases}
$$

Then we can derive:

$$
\begin{aligned}
ry &= \mathrm{atan2}\big(\sin(ry), \cos(ry)\big) \times \frac{180}{\pi} \\
rx &= \mathrm{atan2}\big(\sin(rx), \cos(rx)\big) \times \frac{180}{\pi}
\end{aligned}
$$

## Algebraic Expression (Linear Algebraic Form)

Define the current execution position vector $\boldsymbol{P}$ (the execution coordinates of the current `/execute` command), the rotation matrix $\boldsymbol{R} = \big[\boldsymbol{L}\ \boldsymbol{U}\ \boldsymbol{F}\big]$, and $\boldsymbol{Y}=(0,1,0)$.
$$
\boldsymbol{R} = \big[\boldsymbol{L}\ \boldsymbol{U}\ \boldsymbol{F}\big] =
\begin{bmatrix}
\cos ry & -\sin rx \sin ry & -\cos rx \sin ry \\
0 & \cos rx & -\sin rx \\
\sin ry & \sin rx \cos ry & \cos rx \cos ry
\end{bmatrix}
$$

The $\boldsymbol{L}$ vector points in the left‑hand direction, i.e., leftward. It corresponds to the English word left.
The $\boldsymbol{U}$ vector points in the direction of the top of the head, i.e., upward. It corresponds to the English word Up.
The $\boldsymbol{F}$ vector points in the line‑of‑sight direction, i.e., forward. It corresponds to the English word Front.

The vectors $\boldsymbol{L},\boldsymbol{U}$ and $\boldsymbol{F}$ are all unit vectors and are mutually perpendicular. They also satisfy the cross‑product relation $\boldsymbol{L} = \boldsymbol{U} \times \boldsymbol{F}$.

The following coordinates and view angles are all in the Minecraft system.

The following transformations related to positioned do not change the view angles; they only change the execution position.

If `positioned a b c`, perform the following transformations:
$$
\boldsymbol{P} \rightarrow (a,b,c)
$$

If `positioned ~a ~b ~c`, perform the following transformations:
$$
\boldsymbol{P} \rightarrow \boldsymbol{P} + (a,b,c)
$$

If `positioned ^a ^b ^c`, perform the following transformations:
$$
\boldsymbol{P} \rightarrow \boldsymbol{P} + a\boldsymbol{L} + b\boldsymbol{U} + c\boldsymbol{F}
$$

The following transformations related to facing and rotated do not change the execution position; they only change the view angles. For `facing`, the values of $\boldsymbol{V}$ are as referenced in the following table.

| Facing     | $\boldsymbol{v}$            |
|------------|-----------------------------|
| `a b c`    | $(a,b,c)-\boldsymbol{P}$ |
| `~a ~b ~c` | $(a,b,c)$ |
| `^a ^b ^c` | $a\boldsymbol{L}+b\boldsymbol{U}+c\boldsymbol{F}$ |

Then update $\boldsymbol{F},\boldsymbol{U},\boldsymbol{L}$:
$$
\begin{aligned}
\boldsymbol{F} &\rightarrow \frac{\boldsymbol{v}}{\|\boldsymbol{v}\|} \\
\boldsymbol{U} &\rightarrow \frac{\boldsymbol{Y} - (\boldsymbol{Y}\cdot\boldsymbol{F})\boldsymbol{F}}{\big\|\boldsymbol{Y} - (\boldsymbol{Y}\cdot\boldsymbol{F})\boldsymbol{F}\big\|} \\
\boldsymbol{L} &\rightarrow \boldsymbol{U} \times \boldsymbol{F}
\end{aligned}
$$

If `rotated`, define $\boldsymbol{M}(a,b)$
$$
\boldsymbol{M}(a,b) =
\begin{bmatrix}
\cos(a) & -\sin(b)\sin(a) & -\cos(b)\sin(a) \\
0 & \cos(b) & -\sin(b) \\
\sin(a) & \sin(b)\cos(a) & \cos(b)\cos(a)
\end{bmatrix}
$$

If `rotated ~a ~b`, perform the following transformations:
$$
\begin{aligned}
\Delta\boldsymbol{R} &= \boldsymbol{M}(a,b) \\
\boldsymbol{R} &\rightarrow \boldsymbol{R} \cdot \Delta\boldsymbol{R}
\end{aligned}
$$

If `rotated a b`, perform the following transformations:
$$
\begin{aligned}
\boldsymbol{R}_{goal} &= \boldsymbol{M}(a,b) \\
\boldsymbol{R} &\rightarrow \boldsymbol{R}_{goal}
\end{aligned}
$$

## Appendix

Mathematical formula - Rodrigues' rotation formula.
Here, the rotation axis $\boldsymbol{k}$ must be a unit vector.
$$
\boldsymbol{v}' = \boldsymbol{v}\cos\theta + (\boldsymbol{k} \times \boldsymbol{v})\sin\theta + \boldsymbol{k}(\boldsymbol{k}\cdot\boldsymbol{v})(1-\cos\theta)
$$
There is also an equivalent form:
$$
\boldsymbol{v}' = \boldsymbol{v} + (\boldsymbol{k} \times \boldsymbol{v})\sin\theta + \boldsymbol{k} \times (\boldsymbol{k} \times \boldsymbol{v})(1-\cos\theta)
$$

<!-- This page is still writing -->
