---
title: CCT Application
category: Coordinates Calculation Theory
tags:
    - method
mentions:
    - theVivia
nav_order: 4
description: The application of the coordinates calculation theory
---

## Introduction

In this page, we are going to talk about the application coordinates calculation theory, including geometry, algebra, and error analysis.
There may be some confusing commands in the fact of symbols, see [the formula table](/cct-formula-table)

### Finding the Midpoint

**Setup**

Name two armor stands as `S` and `M`, placed at **identical Y coordinates**. Keep their distance within a few tens of blocks initially.

```yaml
/summon armor_stand S 0 64 0
/summon armor_stand M 0 64 20
```

We only use their positions, not their view rotations, so armor stands are fully sufficient.

**Command**

```yaml
/execute at @e[type=armor_stand,name=S,c=1] positioned ~ ~100000 ~ facing entity @e[type=armor_stand,name=M,c=1] feet positioned ^ ^ ^50000 positioned ~ ~-50000 ~ run particle minecraft:basic_flame_particle ~ ~ ~
```

**Line-by-line Breakdown**

| Subcommand               | Action               | Purpose                          |
| ------------------------ | -------------------- | -------------------------------- |
| `at @e[...name=S,c=1]`   | Move the origin to S | —                                |
| `positioned ~ ~100000 ~` | Lift the origin      | Set the big reference height $H$ |
| `facing entity ... feet` | Aim at M             | Get the slope direction          |
| `positioned ^ ^ ^50000`  | Walk along the slope | $tH$ with $t = \frac{1}{2}$      |
| `positioned ~ ~-50000 ~` | Drop back down       | $(1-t)H$                         |
| `run particle ...`       | Spawn the particle   | —                                |

**Step-by-step Debugging**

First write only the first three segments and check whether the particle appears high above S:

```yaml
/execute at @e[type=armor_stand,name=S,c=1] positioned ~ ~100000 ~ run particle minecraft:basic_flame_particle ~ ~ ~
```

Then add the slope segment and check whether the particle lands near above M. Finally add the drop segment. Confirm after each segment you add, so that if something goes wrong you immediately know which segment it is.

**Two Caveats**

The selector must include `type` and `c=1`.

The forward distance and the drop distance must match: here they are $50000$ and $50000$. When you change $H$, **you must change both**.

### Proportional Points and Extended Lines

$\text{forward} = tH, \qquad \text{drop} = (1-t)H$

**$\frac{3}{4}$ point** ($t = 0.75$, $H = 100000$):

```yaml
/execute at @e[type=armor_stand,name=S,c=1] positioned ~ ~100000 ~ facing entity @e[type=armor_stand,name=M,c=1] feet positioned ^ ^ ^75000 positioned ~ ~-25000 ~ run particle minecraft:basic_flame_particle ~ ~ ~
```

**$\frac{1}{3}$ point**:

```yaml
/execute at @e[type=armor_stand,name=S,c=1] positioned ~ ~100000 ~ facing entity @e[type=armor_stand,name=M,c=1] feet positioned ^ ^ ^33333 positioned ~ ~-66667 ~ run particle minecraft:basic_flame_particle ~ ~ ~
```

The two numbers must add up to $H$: $33333 + 66667 = 100000$ ✓

**Common Ratios** ($H = 100000$):

|           $t$ | forward |    drop |
| ------------: | ------: | ------: |
|         $0.1$ | $10000$ | $90000$ |
|        $0.25$ | $25000$ | $75000$ |
| $\frac{1}{3}$ | $33333$ | $66667$ |
|         $0.5$ | $50000$ | $50000$ |
| $\frac{2}{3}$ | $66667$ | $33333$ |
|        $0.75$ | $75000$ | $25000$ |
|         $0.9$ | $90000$ | $10000$ |

**Extended Lines**

$t$ can go beyond $[0, 1]$. $t = 1.5$ lands on the extension past M, where the drop goes negative — so you write `positioned ~ ~50000 ~` (up instead of down). $t = -0.5$ lands on the opposite side of S.

The error formula carries the $t$ factor — the bigger $t$, the worse the precision.

**Drawing a Line**

To get a row of equally spaced points between S and M, use a line of chain command blocks, one $t$ per block. Put an impulse block at the head, then ten chain blocks with $t$ from $0.1$ to $1.0$; press the button and ten points pop out.

One command for the whole line? That's MEF's job.

### Cross-Axis Value Transfer

`facing` sets $\text{yaw}$ and $\text{pitch}$ together. Fine when S and M are level, but if the two points differ in height, `facing` gives a slanted direction and `positioned ^ ^ ^d` moves both horizontally and vertically at once. Sometimes you only want one of them.

Fix: after `facing`, use `rotated` to override the angle you don't want.

**Keeping Only the Horizontal Direction**

```yaml
/execute at @e[name=A,c=1] facing entity @e[name=B,c=1] feet rotated ~ 0 positioned ^ ^ ^5 run particle minecraft:basic_flame_particle ~ ~ ~
```

`rotated ~ 0` means "keep $\text{yaw}$, set $\text{pitch}$ to $0$". The view flattens to the horizontal heading toward B. No matter how big the height difference is, the particle lands at A's height, $5$ blocks toward B horizontally.

**Keeping Only the Vertical Direction**

```yaml
/execute at @e[name=A,c=1] facing entity @e[name=B,c=1] feet rotated 0 ~ positioned ^ ^ ^5 run particle minecraft:basic_flame_particle ~ ~ ~
```

`rotated 0 ~` forces $\text{yaw}$ to $0$ and keeps only $\text{pitch}$.

**Why This Trick Matters**

`facing` gives a full 3D direction with its three components mixed together. One `rotated` strips off part of it and leaves only the piece you want.

The community calls this **cross-axis value transfer**. In the cube command, `rotated 0 ~` and `rotated ~ 0` each show up four times — always to bend a tilted view onto a single coordinate axis.

**Note the Entity Difference**

This section uses `facing entity`, which reads positions only, so armor stands are fine — `rotated 0 ~` keeps the $\text{pitch}$ that `facing` computed, not the entity's $\text{pitch}$.

But `rotated as @e[...]` plus `rotated 0 ~` keeps the **entity's** $\text{pitch}$ instead. An armor stand's $\text{pitch}$ is always $0$, so the vertical part just vanishes. That's the rule of cover in action: whatever follows `rotated as` decides which part of the entity's view stays active.

### A Principle for Modifying Commands

This section is one idea, but it's more important than every command above combined.

> **Insert or delete any subcommand and the whole chain's distance pairing can change completely. Re-derive it from scratch.**

Example: in the midpoint command, `positioned ~ ~-50000 ~` exists to cancel the height dropped along the slope. Now insert a `rotated ~ 0` right after `facing` — the "slope" becomes a horizontal line, so walking $50000$ drops nothing. The later `-50000` then buries the particle $50000$ blocks underground.

So don't eyeball the string. Work from an action list. The right way to read a long command is left to right: every subcommand is one action.

```
Move the origin to S
Lift by 100000
Look at M
Walk 50000 along the view
Drop 50000
Run particle
```

When editing:

1. Write the full action list for the new command.
2. Work out what each action does to the position.
3. Check the pieces add up to what you want.
4. Translate back into subcommands.

Skip this and any non-trivial change will quietly break — and you won't see where. I strongly recommend writing the action list before any long command; it's the only sane way to debug.

### Quick Recap

- Proportional points: lift by $H$ → `facing` → walk $tH$ → drop $(1-t)H$
- `rotated ~ 0` keeps $\text{yaw}$ (flattens the view); `rotated 0 ~` keeps $\text{pitch}$
- Always add `type` and `c=1` to selectors
- Reference entities only need a position — armor stands always suffice
- Change anything, re-derive the whole chain

Make sure you can write the midpoint command from scratch and explain every segment before moving on.

---

### Far-Point Reflection

This is the core primitive of all advanced CCT.

**Goal**

Mirror a point across a line. The line passes through the origin, and its direction is given by some entity's view.

**Skeleton**

```
Walk H along the axis
Face the origin
Walk 2H
Restore the axis direction
Walk H again
```

**Command**

Set up three entities: the point to mirror `P`, the origin `O`, and `axis` (which gives the axis direction).

Start with a horizontal axis, so an armor stand works for `axis`:

```yaml
/execute at @e[type=armor_stand,name=P,c=1] rotated as @e[type=armor_stand,name=axis,c=1] positioned ^ ^ ^1024 facing 0 0 0 positioned ^ ^ ^2048 rotated as @e[type=armor_stand,name=axis,c=1] positioned ^ ^ ^1024 run particle minecraft:basic_flame_particle ~ ~ ~
```

`facing 0 0 0` assumes the origin is the world origin. Want a different origin? Use `facing entity @e[name=O,c=1] feet`. The tilted-axis case needs $\text{pitch}$, so it's a boat job — more on that later.

**Why This Is a Reflection**

Take the Z axis as the axis ($\text{yaw} = 0$, $\text{pitch} = 0$) and put P to the right of it at distance $w$.

**Step 1** walks $H$ along Z to a far point A. Since $H$ is huge, A sits basically on the Z axis — P's little offset $w$ doesn't matter compared to $H$.

**Step 2** faces the origin. From A, the origin is almost straight back down the negative Z axis. The "almost" matters: because P is off by $w$, the direction carries a tiny tilt of about $\frac{w}{H}$.

**Step 3** walks $2H$. The tilt gets amplified — the sideways drift is about $2H\times\frac{w}{H} = 2w$, from P's side to the opposite side. Offset $+w$ right becomes $-w$ left.

**Step 4** restores the axis direction, **Step 5** walks $H$ back.

Net effect: the along-axis component survives (walk $H$, walk back $H$); the perpendicular component flips from $+w$ to $-w$. That's the reflection.

**Exact Result**

With the origin at $(0,0,0)$, the point as vector $\mathbf{p}$, and the axis unit vector $\mathbf{u}$:

$\mathbf{p}_H = \mathbf{p} + 2H\mathbf{u} - 2H\frac{\mathbf{p}+H\mathbf{u}}{\lVert\mathbf{p}+H\mathbf{u}\rVert}$

As $H$ tends to infinity this approaches:

$\mathbf{p}' = 2(\mathbf{u}\cdot\mathbf{p})\mathbf{u} - \mathbf{p}$

The parallel component stays; the perpendicular component flips sign.

**Error Magnitude**

$O\!\left(\frac{\lVert\mathbf{p}\rVert^2}{H}\right)$

**A Decisive Property**

Reflection keeps the point's distance to the origin: $\lVert\mathbf{p}'\rVert = \lVert\mathbf{p}\rVert$

The parallel part keeps its length, the perpendicular part only flips sign — Pythagoras says the norm is untouched. This is what lets us draw circles.

### Working It Out by Hand

Formulas are hard to feel. Plug in real numbers and watch, and you'll also check the error model along the way.

**Setup**

- Axis is Z: $\mathbf{u} = (0,0,1)$
- P at $(3,\ 0,\ 5)$
- $H = 1024$

The ideal result is $(-3,\ 0,\ 5)$: Z (parallel) kept, X (perpendicular) flipped.

**Step-by-Step**

Step 1 walks $H$ to $(3,\ 0,\ 1029)$. Its length:

$\sqrt{9+1029^2} = \sqrt{1058850} \approx 1029.004374$

— only $0.0044$ more than $1029$.

Step 2 faces the origin; step 3 walks $2H = 2048$, displacement:

$-\frac{2048}{1029.004374}\times(3,\ 0,\ 1029) = -1.99027\times(3,\ 0,\ 1029) = (-5.97082,\ 0,\ -2047.99129)$

Steps 4–5 restore the axis and walk $H$, displacement $(0,\ 0,\ 1024)$.

**Totals**

$X:\ 3-5.97082 = -2.97082$, $Y:\ 0$, $Z:\ 5+1024-2047.99129+1024 = 5.00871$

So we get $(-2.97082,\ 0,\ 5.00871)$ vs the ideal $(-3,\ 0,\ 5)$: X off by $0.0292$, Z by $0.0087$, total error about $0.030$.

**Check the Error Model**

The model says the leading term is $\frac{\lVert\mathbf{p}\rVert^2}{H}$. Here $\lVert\mathbf{p}\rVert^2 = 9+25 = 34$:

$\frac{34}{1024} = 0.0332$

Measured $0.030$ — same ballpark.

**Try $H = 4096$**

$\lVert\mathbf{p}+H\mathbf{u}\rVert = \sqrt{9+4101^2}\approx4101.0011$, so the ratio is $\frac{8192}{4101.0011}\approx1.997561$.

Result $(-2.99268,\ 0,\ 5.00220)$, total error about $0.0076$.

|    $H$ | total error | theoretical $\frac{\lVert\mathbf{p}\rVert^2}{H}$ |
| -----: | ----------: | -----------------------------------------------: |
| $1024$ |    $0.0304$ |                                         $0.0332$ |
| $4096$ |    $0.0076$ |                                         $0.0083$ |

Quadruple $H$, the error drops to $\frac{1}{4}$. **Error is inversely proportional to $H$ — confirmed.**

Worth doing this once by hand. After that, "asymptotic approximation" stops being an empty phrase.

### Two Reflections Equal One Rotation

**Conclusion**

Reflect across two intersecting lines and you get a rotation about their crossing point. The rotation angle is **twice** the angle between the lines.

Mirror intuition: two mirrors at $30°$ rotate an image inside them by $60°$.

**Why Twice**

Angle between the axes is $\theta$; angle between a point and the first axis is $\alpha$.

After the first reflection the point sits at $-\alpha$ from the first axis, i.e. at $-\alpha-\theta$ from the second.

After the second reflection it's at $+\alpha+\theta$ from the second axis, which is $\alpha+2\theta$ from the first.

Net rotation $2\theta$, **independent of $\alpha$**. Every starting point rotates by the same amount.

**Command**

Both axes are horizontal ($\text{pitch} = 0$), so armor stands are enough. `axisA` has $\text{yaw} = 0$, `axisB` has $\text{yaw} = 30$:

```yaml
/summon armor_stand axisA 0 64 0
/summon armor_stand axisB 0 64 1
/execute as @e[type=armor_stand,name=axisA,c=1] at @s run tp @s ~ ~ ~ 0 0
/execute as @e[type=armor_stand,name=axisB,c=1] at @s run tp @s ~ ~ ~ 30 0
```

```yaml
/execute at @e[type=armor_stand,name=P,c=1] rotated as @e[type=armor_stand,name=axisA,c=1] positioned ^ ^ ^1024 facing 0 0 0 positioned ^ ^ ^2048 rotated as @e[type=armor_stand,name=axisA,c=1] positioned ^ ^ ^1024 rotated as @e[type=armor_stand,name=axisB,c=1] positioned ^ ^ ^1024 facing 0 0 0 positioned ^ ^ ^2048 rotated as @e[type=armor_stand,name=axisB,c=1] positioned ^ ^ ^1024 run particle minecraft:basic_flame_particle ~ ~ ~
```

It's just two reflection skeletons glued together.

**Angle Reference**

| Angle between the axes | Rotation angle |
| ---------------------: | -------------: |
|                  $15°$ |          $30°$ |
|                $22.5°$ |          $45°$ |
|                  $30°$ |          $60°$ |
|                  $45°$ |          $90°$ |
|                  $90°$ |         $180°$ |

Swap the order of the two reflections and the rotation spins the other way.

**Why Not Just Use `rotated`**

`rotated` changes the view, not the position. It makes later `^` moves follow the new direction, but it can't rotate an existing point around the origin.

Rotating a position needs displacement combos, and a reflection pair is the shortest route: one reflection is three `positioned`, two reflections are six, and you get any angle you want.

That's why $H$, $2H$, $H$ triples are everywhere in complex CCT commands — see the triple, smell a reflection.

### Axes That Need $\text{pitch}$

Last section both axes sat in the horizontal plane, so the compound rotation was about the **vertical axis**. To rotate about other directions, or to tilt the mirror axis, you need $\text{pitch}$. And then armor stands stop working — switch to a boat.

**Example: Mirror Across an Axis with $\text{pitch} = 30°$**

```yaml
/summon boat 0 64 0 0 30
/tag @e[type=boat,c=1,r=2] add axisC
```

```yaml
/execute at @e[type=armor_stand,name=P,c=1] rotated as @e[type=boat,tag=axisC,c=1] positioned ^ ^ ^1024 facing 0 0 0 positioned ^ ^ ^2048 rotated as @e[type=boat,tag=axisC,c=1] positioned ^ ^ ^1024 run particle minecraft:basic_flame_particle ~ ~ ~
```

Swap the boat for an armor stand and $\text{pitch}$ pins to $0$ — you'd silently mirror across the **horizontal** Z axis. No error, particle still spawns, position just wrong.

That's the worst kind of bug: valid syntax, visible output, wrong result. Build the habit: **every time you write `rotated as`, ask "does this direction need $\text{pitch}$?"**

**A Compromise**

If the axis's $\text{pitch}$ is a fixed value, you don't need an entity at all — hard-code it:

```yaml
rotated 0 30
```

An absolute angle reads nothing, so it sidesteps the whole problem. In the reflection skeleton, swapping both `rotated as` for `rotated 0 30` works perfectly:

```yaml
/execute at @e[type=armor_stand,name=P,c=1] rotated 0 30 positioned ^ ^ ^1024 facing 0 0 0 positioned ^ ^ ^2048 rotated 0 30 positioned ^ ^ ^1024 run particle minecraft:basic_flame_particle ~ ~ ~
```

**When You Must Use a Boat**

Only one case: you need **multiple different $\text{pitch}$ directions inside one command** and want MEF's branching to sweep through them all at once. Then the directions have to live on entities — absolute angles can't do it. That's exactly the cube's situation.

For a single command with a fixed direction, hard-code the angle and be done.

### Squaring

Time for arithmetic instead of geometry.

**The Idea**

Look at this:

$\frac{a^2}{\sqrt{a^2+x^2}}$

Hypotenuse on the bottom, constant on top. Expand (binomial again):

$\frac{a^2}{a\sqrt{1+\frac{x^2}{a^2}}} = a\left(1+\frac{x^2}{a^2}\right)^{-\frac{1}{2}} \approx a\left(1-\frac{x^2}{2a^2}\right) = a-\frac{x^2}{2a}$

**A square-root quantity, expanded, leaks out a term proportional to $x^2$.** Build that quantity, subtract the constant leading term, and what's left is a multiple of $x^2$.

And the hypotenuse is exactly the normalization denominator `facing` uses — one line builds it.

**Formula**

```yaml
facing 0 ~a ~ positioned ^ ^ ^-a² rotated ~180 ~ positioned ^ ^ ^-a² positioned ~ ~2a² ~
```

Maps $(x,y,z)\to(x,\ y+x^2,\ z)$.

`a` is a big placeholder; `a²` must be the real number. For $a = 100$, `^ ^ ^-a²` becomes `^ ^ ^-10000`.

**Full Derivation**

Start at $(x,y,z)$.

**Step 1** `facing 0 ~a ~`: target $(0,\ y+a,\ z)$, direction

$\mathbf{v} = (-x,\ a,\ 0)$, $s = \lVert\mathbf{v}\rVert = \sqrt{a^2+x^2}$, $\mathbf{F} = \frac{(-x,\ a,\ 0)}{s}$

**Step 2** `positioned ^ ^ ^-a²`: move $-a^2$, displacement $\left(\frac{a^2x}{s},\ -\frac{a^3}{s},\ 0\right)$

**Step 3** `rotated ~180 ~`: $\text{yaw}$ plus $180°$.

That just flips the horizontal component; the vertical stays: $\mathbf{F}' = \frac{(x,\ a,\ 0)}{s}$. X flips, Y doesn't.

**Step 4** `positioned ^ ^ ^-a²`: displacement $\left(-\frac{a^2x}{s},\ -\frac{a^3}{s},\ 0\right)$

**Add the two**: $X:\ \frac{a^2x}{s}-\frac{a^2x}{s} = 0$, $Y:\ -\frac{2a^3}{s}$

X cancels completely, Y piles up. That's the whole point of `rotated ~180 ~` — horizontals cancel, verticals add.

**Step 5** `positioned ~ ~2a² ~`: total Y change

$2a^2-\frac{2a^3}{s} = 2a^2\left(1-\left(1+\frac{x^2}{a^2}\right)^{-\frac{1}{2}}\right) \approx 2a^2\cdot\frac{x^2}{2a^2} = x^2$

$x$, $z$ untouched; $y$ gains $x^2$.

**That `rotated ~180 ~`**

The most common trick in CCT: make one component of two moves cancel, the other add. It's everywhere in the formula table — see it, think "something's about to be cancelled."

The cube base uses the same idea, just with two boats facing opposite ways, one move each.

**A Shorter Version**

```yaml
facing 0 ~a ~ positioned ^ ^ ^-2a² positioned ~ ~2a² ~
```

Three subcommands, but X gets wrecked (an uncancelled drift of about $2ax$). Now it maps $(x,y,z)\to(?,\ y+x^2,\ z)$.

**Error**

The dropped next term is order $\frac{x^4}{a^2}$. Exactly: $(1+u)^{-\frac{1}{2}} = 1-\frac{u}{2}+\frac{3u^2}{8}-\cdots$, so

$\Delta y \approx x^2-\frac{3x^4}{4a^2}$

Error grows with the **fourth power** of the input. So shrink the input first; $[-1,1]$ is the usual target. Use the scaling formula to shrink it.

### Multiplication

Square in hand, multiplication falls out. Difference of squares:

$xz = \frac{(x+z)^2-(x-z)^2}{4}$

Check: $(x^2+2xz+z^2)-(x^2-2xz+z^2) = 4xz$ ✓

Two squares, one subtraction, one divide by $4$. Cleanest to understand, but the command gets long.

The formula table takes another route: normalize a 2D vector's hypotenuse once and be done. The shortest version is six subcommands:

```yaml
facing 0 ~a 0 positioned 0 ~ 0 rotated ~45 ~ positioned ^ ^ ^a² facing ~ ~-a²/√2 0 positioned ^ ^ ^a²
```

Maps $(x,y,z)\to(?,\ y+xz,\ ?)$.

`rotated ~45 ~` and $\sqrt{2}$ are a pair: $\cos 45° = \frac{1}{\sqrt{2}}$. **Constants in these formulas are locked together — change one, change the other.**

### Division and Higher Powers

**Division**

`facing`'s normalization is division already:

$\frac{(x,y,z)}{\sqrt{x^2+y^2+z^2}}$

The division formula pre-places helper axes so the normalization denominator lands exactly on the divisor, then reads the ratio out of a component of the unit direction.

Shortest version:

```yaml
positioned ~ 0 ~ facing 0 a ~ positioned ^ ^-ab ^ facing ~ 0 0 positioned ~ 0 0 positioned ^ ^1/b ^
```

Maps $(x,y,z)\to(?,\ ?,\ \frac{x}{z})$.

The two parameters split the work: **$a$ is a large number** (in math it tends to $+\infty$), so the first denominator ends up about $a$; **$b$ is a small number** (tends to $0$), so the middle offset stays tiny next to $z$ and the second denominator ends up about $\lvert z\rvert$.

Error magnitude:

$\sqrt{\frac{1}{b^2}+\frac{a^2}{z^2}}\cdot\varepsilon$

The two terms fight: too small $b$ blows up the first, too small $z$ blows up the second.

**The Hard Limit**

Near a divisor of $0$, the error blows up without bound. That's not the formula's fault — it's $\frac{1}{z}$'s nature: as $z$ heads to $0$, $\frac{1}{z}$ moves violently and amplifies any tiny error.

So restrict the input domain and keep the divisor clear of $0$.

**Higher Powers**

| Target | Construction                      |
| ------ | --------------------------------- |
| $x^2$  | Squaring formula                  |
| $x^3$  | $x^2\cdot x$, or the cube formula |
| $x^4$  | $x^2\cdot x^2$                    |
| $x^5$  | $x^4\cdot x$                      |

For $x^4$, $x^2\cdot x^2$ beats $x^3\cdot x$: the two factors have similar errors, while the latter re-amplifies $x^3$'s existing error.

Each cascade level costs both error and command length. The fourth power is about the practical ceiling.

### Error Engineering

**Two Errors**

$E_g \approx C_1\frac{r^2}{H} \qquad\text{(geometric truncation)}$

$E_f \approx C_2\varepsilon H \qquad\text{(floating point)}$

One shrinks with $H$, the other grows with $H$.

**Scan $H$**

```
256, 512, 1024, 2048, 4096, 8192
```

The reflection uses $H$, $2H$, $H$ in three spots — replace them **in sync**.

How to judge:

- Error keeps dropping as $H$ grows → geometric error dominates, keep going bigger
- Error rises after bumping $H$ → floating point took over, step back

The hand calculation above is exactly a two-point scan: $1024 \to 4096$, error down to $\frac{1}{4}$ — still in the geometric zone.

**Scan the Input Scale**

Fix $H$, vary the figure scale $r$:

```
0.5, 1, 2, 4, 8, 16
```

Error growing like $r^2$ means all is well.

**Boundaries to Cover**

Test arithmetic formulas with: positives, negatives, $0$, tiny divisors, both ends of the input domain, every quadrant, different $\text{pitch}$.

A formula that only works over a small positive range isn't a general formula.

**Scale First, Then Compute**

Every arithmetic formula's error grows with the input, so:

```
shrink the input to a safe range → do the math → amplify the result
```

Example: inputs in $[-8,8]$, want a square. Square straight and the error follows $x^4$ — at $x=8$ it's $4096$ times the error at $x=1$. Shrink by $8$ into $[-1,1]$, square, then scale the result up by $64$ (since $\left(\frac{x}{8}\right)^2 = \frac{x^2}{64}$). The error stays at the small-range level.

Scaling costs eight subcommands, but the precision it buys is usually worth it.

### Summary

| Operation                    | Structure                                                   | Entity requirement                        |
| ---------------------------- | ----------------------------------------------------------- | ----------------------------------------- |
| Axis reflection (horizontal) | $H$ → face origin → $2H$ → $H$                              | Armor stand suffices                      |
| Axis reflection (tilted)     | same                                                        | Boat, or hard-coded angle                 |
| Rotation $2\theta$           | two reflections, axes at angle $\theta$                     | depends on whether the axis is horizontal |
| Squaring                     | build hypotenuse, flip to cancel, subtract the leading term | none                                      |
| Multiplication               | difference of squares, or 2D vector normalization           | none                                      |
| Division                     | `facing`'s normalization denominator                        | none                                      |

One bottom line: **these are all finite-precision asymptotic approximations, not algebraic identities.**

**Exercise**

Hand-compute the reflection of $(2,\ 0,\ 3)$ across the Z axis with $H = 2048$, then verify with particles in-game. Ideal answer $(-2,\ 0,\ 3)$; predict how far off the real one will be.

---

### The Output of CCT Is a Single Point

**One CCT command makes exactly one execution point.** Every selector carries `c=1`, so there's a single execution path and `run` fires once.

That's by design. CCT is a calculator: accurate, but one result at a time.

So use it to:

- compute one specific spot and do one thing there
- compute a point per tick and let time trace a trajectory
- hand another system a ready-made coordinate
- wrap it around bigger structures as a transform operator

CCT is **not** for dumping hundreds of points at once. For that, reach for MEF.

### Coordinate System Scaling

**Purpose**: cram the input into a safe range (the scale-first rule above), or scale a whole figure.

**Formula** (8 subcommands)

Around a reference point, $(x,y,z)\to\left(\frac{x}{n},\ \frac{y}{n},\ \frac{z}{n}\right)$:

```yaml
positioned ~ ~a ~ facing <> positioned ^ ^ ^(n-1)a/n positioned ~ ~-a/n ~-a facing <> rotated 0 ~ positioned ^ ^ ^(n-1)a/n positioned ~ ~ ~a/n
```

Swap `<>` for the reference point (usually the origin). `a` is big, `n` is the shrink factor.

**Example**: origin as reference, shrink by $4$, $a = 1024$.

$\frac{(n-1)a}{n} = \frac{3\times1024}{4} = 768, \qquad \frac{a}{n} = 256$

```yaml
/execute at @e[type=armor_stand,name=P,c=1] positioned ~ ~1024 ~ facing 0 0 0 positioned ^ ^ ^768 positioned ~ ~-256 ~-1024 facing 0 0 0 rotated 0 ~ positioned ^ ^ ^768 positioned ~ ~ ~256 run particle minecraft:basic_flame_particle ~ ~ ~
```

P's distance to the origin becomes $\frac{1}{4}$, direction unchanged.

**About that `rotated 0 ~`**

It follows `facing 0 0 0`, so it keeps the $\text{pitch}$ `facing` computed — not any entity's. The command never reads entity views, so armor stands vs boats doesn't matter here.

**Why Two `facing`**

One `facing` plus a walk scales along a single line. To scale all three coordinates together you need two differently-directed moves, and the `positioned ~` in the middle flips the reference.

The constants are locked: `a`, `(n-1)a/n`, `a/n` all come from the same $a$ and $n$. Change $n$, recompute all three.

**Enlarging**: $n$ below $1$; $n = 0.25$ magnifies by $4$. Then $\frac{(n-1)a}{n} = -3072$ and $\frac{a}{n} = 4096$ — mind the signs.

### Mapping a Circle to an Ellipse

Pure CCT transform: one point in, one point out. It maps "points at distance $r$ from the origin" onto "points on an ellipse".

Worth its own section because it shows off a key trick: **turn position info into direction info.**

**The Five Subcommands**

```yaml
facing 0 0 0
positioned 0 0 0
positioned ^ ^ ^4
rotated ~180 ~
positioned ^ ^ ^-2
```

**Step by Step**

Input $(0,\ y,\ z)$, distance $r = \sqrt{y^2+z^2}$.

**Step 1** `facing 0 0 0`: look at the origin, forward $\mathbf{F} = \left(0,\ -\frac{y}{r},\ -\frac{z}{r}\right)$

**Step 2** `positioned 0 0 0`: position snaps to the origin, **view stays**.

This is the heart. The position zeroes out, but the direction remembers where the point was. The old $(y,z)$ now lives on as two direction components.

**Step 3** `positioned ^ ^ ^4`: $\mathbf{P} = \left(0,\ -\frac{4y}{r},\ -\frac{4z}{r}\right)$

**Step 4** `rotated ~180 ~`: $\text{yaw}$ plus $180°$, flipping only the horizontal: $\mathbf{F}' = \left(0,\ -\frac{y}{r},\ +\frac{z}{r}\right)$

Y stays, Z flips.

**Step 5** `positioned ^ ^ ^-2`: displacement $\left(0,\ +\frac{2y}{r},\ -\frac{2z}{r}\right)$

**Totals**: $Y:\ -\frac{4y}{r}+\frac{2y}{r} = -\frac{2y}{r}$, $Z:\ -\frac{4z}{r}-\frac{2z}{r} = -\frac{6z}{r}$

Since $\lvert y\rvert\le r$ and $\lvert z\rvert\le r$, output Y maxes at $2$, Z at $6$.

**Semi-Axis Formula**

Two step distances $d_1$, $d_2$ (the second one signed):

$\text{Y semi-axis} = \lvert d_1+d_2\rvert, \qquad \text{Z semi-axis} = \lvert d_1-d_2\rvert$

Check ($d_1 = 4$, $d_2 = -2$): $\lvert4-2\rvert = 2$, $\lvert4+2\rvert = 6$ ✓

**Going the other way**: want a Y semi-axis of $3$ and a Z semi-axis of $5$? Solve $d_1+d_2 = 3$, $d_1-d_2 = 5$ → $d_1 = 4$, $d_2 = -1$:

```yaml
positioned ^ ^ ^4 rotated ~180 ~ positioned ^ ^ ^-1
```

**An Easy Mistake**

The $4$ and $-2$ in the command are **not** the semi-axes. They connect to the semi-axes through those equations. Plug in the semi-axis values directly and you get a totally different ellipse.

**Prerequisite**

The input's distance to the origin must be constant (it has to sit on a circle). If distances vary, the outputs won't land on one ellipse.

Whole ring at once? That's MEF again.

### Function Graphs

**Goal**: plot $y = x^2$.

Feed the squaring formula one input, get one point. With $a = 100$, $a^2 = 10000$ and $2a^2 = 20000$:

```yaml
/execute positioned 2 64 0 facing 0 ~100 ~ positioned ^ ^ ^-10000 rotated ~180 ~ positioned ^ ^ ^-10000 positioned ~ ~20000 ~ run particle minecraft:basic_flame_particle ~ ~ ~
```

`positioned 2 64 0` sets input $x = 2$ at base height $64$. The particle lands at $(2,\ 68,\ 0)$ — $y$ gained $2^2 = 4$.

`positioned 3 64 0` → $(3,\ 73,\ 0)$; `positioned -1.5 64 0` → $(-1.5,\ 66.25,\ 0)$.

**Plotting the Whole Curve**

**Way 1: a row of chain command blocks.** $x$ from $-4$ to $4$ in steps of $0.5$ — $17$ blocks, one input each, one button press, whole curve.

**Way 2: a moving input.** Drop an armor stand as the input, let it walk the X axis, compute every tick:

```yaml
/execute at @e[type=armor_stand,name=in,c=1] facing 0 ~100 ~ positioned ^ ^ ^-10000 rotated ~180 ~ positioned ^ ^ ^-10000 positioned ~ ~20000 ~ run particle minecraft:basic_flame_particle ~ ~ ~
```

Pair it with a repeating block that advances the input (set the stand's $\text{yaw}$ to $-90°$ to head along $+X$; horizontal only, so an armor stand is fine):

```yaml
/execute as @e[type=armor_stand,name=in,c=1] at @s run tp @s ^ ^ ^0.1
```

The particle traces the parabola in real time. Short command, live response; the catch is the curve isn't all visible at once.

**Other Functions**

| Function        | What to use                     |
| --------------- | ------------------------------- |
| $y = x^2$       | Squaring formula                |
| $y = x^3$       | Cube formula                    |
| $y = xz$        | Multiplication formula          |
| $y = ax^2+bx+c$ | Squaring + scaling + two shifts |
| $y = \sin x$    | Sine formula (Taylor)           |

Composing? Remember the order: scale first, compute, then amplify.

### Coordinate System Alignment

Sometimes you want the whole coordinate system to follow an entity's orientation, so every `~` relative coordinate reads along the new axes.

**Formula** (12 subcommands)

```yaml
positioned ~ ~-a ~ rotated as @s positioned ^-a ^ ^ facing <> positioned ^ ^ ^2√2a rotated as @s positioned ^ ^ ^a positioned ~ ~-a ~ facing <> positioned ^ ^ ^2√2a rotated as @s positioned ^a ^ ^a
```

**Entity Requirements**

Here `rotated as @s` has no cover, so `@s`'s $\text{pitch}$ fully applies. Armor stand → $\text{pitch} = 0$ always, so you can only spin around the vertical axis, no tilting.

For arbitrary orientation, `@s` must be a boat (or a player — players carry full $\text{pitch}$).

**When to Use It**

Say a figure is already built "upright" and you want it to track an entity's orientation.

Option one: edit every angle parameter in the figure — tedious, easy to miss one. Option two: prepend one alignment (12 subcommands, done once). The second wins; afterwards just rotate the entity, and the command stays untouched.

CCT's role is a **transform operator**: point in, point out.

Want it to hit thousands of points at once? That's another technique entirely.
