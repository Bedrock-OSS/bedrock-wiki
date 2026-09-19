---
title: Community Formula Table of CCT
category: Coordinates Calculation Theory
tags:
    - help
mentions:
    - theVivia
nav_order: 5
description: The community formula series of CCT
---
> Main Author: 世界的来宾 ｜ Notes: senxyzplayeE
> Comes from the Chinese commanders community
---

## Symbol Convention

### Numbers

| Symbol | Meaning                                           | Notes                                                                                      |
| ------ | ------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| `a`    | a very large positive number ($\approx +\infty$)  | in practice: `512` / `1024` / `2048`                                                       |
| `b`    | a tiny positive number ($\approx 0$)              | in practice: `0.01` / `0.001`                                                              |
| `n`    | a normal-scale tuning variable                    | usually `1` / `2` / `3`; tunes the floating-point adaptation interval; it is a real number |
| `k`    | scale factor                                      | used in the translation & scaling formulas                                                 |
| `?`    | not computed / deliberately omitted by the author | kept as-is                                                                                 |

### Coordinates

- $(x, y, z)$ — a position in space.
- $r$ — distance to the y-axis: $r = \sqrt{x^2 + z^2}$ (like the radial coordinate in cylindrical coordinates).

### Entities

| Notation         | Meaning                                                                  |
| ---------------- | ------------------------------------------------------------------------ |
| `@A`, `@B`       | an entity (any selector-style name)                                      |
| `@s`             | the currently executing entity                                           |
| `{@A}`, `{@B}`   | entity placeholder — replace with a concrete selector, e.g. `@e[name=a]` |
| `\text{dir}(@A)` | the look / direction vector of entity `@A` (a unit vector)               |

### Rotation

Rotation is written as $(yaw, pitch)$, matching the command order `rotated <yaw> <pitch>`.

- Example: command `rotated 55 30` → rotation $(yaw, pitch) = (55^\circ, 30^\circ)$. Where $rx = \text{pitch}$, $ry = \text{yaw}$ — opposite to the command
Angles in the formulas below are in radians unless stated otherwise.

### Other marks

`<>` — placeholder for a coordinate, e.g. `facing <>` → `facing 0 0 0`.
`[ ]` — subcommands that can often be omitted / merged with the surrounding context.
`{@A + y}` — the direction of $\text{dir}(@A) + (0, 1, 0)$: the look vector of `@A` plus the +y unit vector.
$\varepsilon$ — minimum precision when an angle approaches 0° (baseline of the "uncertainty" figures)

---

## I. Basic Algebra and Arithmetic

### 1. Square Formula

**Function**: $(x, y, z) \to (x, y+x^2, z)$ — adds $x^2$ to y
**Performance**: `5` subcommands ｜ **Uncertainty**: $2xa \cdot \varepsilon$ ｜ **Remarks**: Introductory formula to algebra

**Command**:

```yaml
facing 0~a~ positioned ^^^-a² rotated ~180~ positioned ^^^-a² positioned ~~2a²~
```

### 2. Square Formula (Short)

**Function**: $(x, y, z) \to (?, y+x^2, z)$
**Performance**: `3` subcommands ｜ **Uncertainty**: $2xa \cdot \varepsilon$ ｜ **Remarks**: Introductory formula to algebra

**Command**:

```yaml
facing 0~a~ positioned ^^^-2a² positioned ~~2a²~
```

### 3. Multiplication Formula

**Function**: $(x, y, z) \to (x, y+xz, ?)$ — adds $x \cdot z$ to y
**Performance**: `10` subcommands ｜ **Uncertainty**: $a\sqrt{3r^2+4xz} \cdot \varepsilon$ ｜ **Remarks**: Maybe only useful for plotting graphs?

**Command**:

```yaml
facing 0~a 0 positioned ^^^a²/2 rotated ~180~ positioned ^^^a²/2 facing 0~a~ rotated ~-90~ positioned ^^^a positioned ~~-a~ facing ~~a 0 positioned ^^^-a²
```

### 4. Multiplication Formula (Short)

**Function**: $(x, y, z) \to (?, y+xz, ?)$
**Performance**: `7` subcommands ｜ **Uncertainty**: $a\sqrt{1.5r^2+1.5xz+x^2z^2/r^2} \cdot \varepsilon$ ｜ **Remarks**: Completely outperformed by the "Shorter" version

**Command**:

```yaml
[ facing 0~a 0 ] positioned 0~ 0 positioned ^^^a²/2 rotated ~90~ positioned ^^^a²/2 facing ~~~a²/2 0 positioned ^^^a²
```

### 5. Multiplication Formula (Shorter)

**Function**: $(x, y, z) \to (?, y+xz, ?)$
**Performance**: `6` subcommands ｜ **Remarks**: The fastest multiplication formula so far

**Command**:

```yaml
[ facing 0~a 0 ] positioned 0~ 0 rotated ~45~ positioned ^^^a² facing ~~-a²/√2 0 positioned ^^^a²
```

### 6. Division Formula

**Function**: $(x, y, z) \to (x, ?, x/z)$ — sets $x$ to $x/z$ (z unchanged as ?)
**Performance**: `8` subcommands ｜ **Uncertainty**: $\sqrt{1/b^2 + a^2/z^2} \cdot \varepsilon$ ｜ **Remarks**: Basically useless

**Command**:

```yaml
[ positioned ~ 0~ ] facing 0 a~ positioned ^^ -ab/2^ rotated ~180~ positioned ^^ -ab/2^ facing ~ 0 0 positioned ~ 0 0 positioned ^^1/b^
```

### 7. Division Formula (Short)

**Function**: $(x, y, z) \to (?, ?, x/z)$
**Performance**: `6` subcommands ｜ **Uncertainty**: $\sqrt{1/b^2 + a^2/z^2} \cdot \varepsilon$ ｜ **Remarks**: Also basically useless

**Command**:

```yaml
[ positioned ~ 0~ ] facing 0 a~ positioned ^^ -ab^ facing ~ 0 0 positioned ~ 0 0 positioned ^^1/b^
```

### 8. Division Formula (2D Vector)

**Function**: $(x, y, z) \to (x/y, 0, z/y)$ — divides $x$ and $z$ by $y$, zeroes $y$
**Performance**: `8` subcommands ｜ **Uncertainty**: Highly accurate in general ｜ **Remarks**: *[Robust]*

**Command**:

```yaml
facing 0 0 0 positioned 0 0 0 positioned ^^(a+n)/2^ rotated ~180~ positioned ^^-(a-n)/2^ facing 0 0 0 positioned 0 -a/n 0 positioned ^^a/n^
```

### 9. Division Formula (tan)

**Function**: $(x, y, z) \to (?, y/r, ?)$ — sets $y$ to $y/r$
**Performance**: `8` subcommands ｜ **Uncertainty**: Highly accurate in general ｜ **Remarks**: *[Robust]*

**Command**:

```yaml
facing 0 0 0 positioned 0 0 0 positioned ^^-(a+n)/2 rotated ~180~ positioned ^^^(a-n)/2 facing 0 0 0 positioned 0 0 0 positioned ^^^-a/n
```

### 10. Multiplication Formula (2D Vector)

**Function**: $(x, y, z) \to (xy, y, zy)$ — multiplies $x$ and $z$ by $y$
**Performance**: `8` subcommands ｜ **Uncertainty**: $a\sqrt{1+y^2r^4/(a^2b^2)} \cdot \varepsilon$ ｜ **Remarks**: *[Robust]*

**Command**:

```yaml
facing 0 ~b 0 positioned 0 ~0 positioned ^^a/2b^ rotated ~180~ positioned ^^-a/2b^ facing 0 0 0 positioned 0 ~a 0 positioned ^^ -a^
```

### 11. Multiplication Formula Short (2D Vector)

**Function**: $(x, y, z) \to (xy, y, zy)$
**Performance**: `6` subcommands ｜ **Remarks**: Rarely used, the more accurate one is preferred

**Command**:

```yaml
facing 0 ~b 0 positioned 0~-a/b 0 positioned ^^a/b^ facing 0 a/b 0 positioned 0~a 0 positioned ^^ -a^
```

### 12. Cubic Formula (Short)

**Function**: $(x, y, z) \to (x^3+bx, ?, z)$ — adds $x^3+bx$ to y
**Performance**: `4` subcommands ｜ **Remarks**: Short, but doesn't seem to have much use

**Command**:

```yaml
facing 0~a~ positioned ^^^(a-b/(√(a²+1)+a)) facing 0~n~ positioned ^^^-(2na²-1)
```

### 13. Cubic Formula

**Function**: $(x, y, z) \to (x, ?, x^3)$ — cubes $x$ into $z$
**Performance**: `6` subcommands ｜ **Remarks**: Seems completely outperformed by the "Short" version

**Command**:

```yaml
facing 0~a/2~ rotated ~90~ positioned ^^^-a³/3 facing 0~a~ rotated ~90~ positioned ^^^2a³/3
```

### 14. Multiplication Formula (Radius)

**Function**: $(x, y, z) \to (xz^2/r, y, -zx^2/r)$; additionally the rotation becomes $(yaw+90^\circ, 0)$ and the distance from point M becomes $x \cdot z$
**Performance**: `11` subcommands ｜ **Remarks**: A formula derived from geometric principles; it optimizes the accuracy and speed of Perlin noise.

**Command**:

```yaml
facing 0~a 0 positioned 0~ 0 positioned ^^ -a²/2^ rotated ~180~ positioned ^^a²/2^ rotated ~ 0 positioned ^^^a² positioned ~~ 0 positioned ^A^^ facing 0~ 0 positioned ^^^A
```

---

## II. Vectors and Geometric Transformations

### 15. Dot Product Formula

**Function**: $(x, y, z) \to (?, A \cdot R, ?)$ — the dot product of two direction vectors $A$ and $R$, where $A = \text{dir}(@A)$ (look vector of entity `@A`) and $R$ is the current direction (of `@s`)
**Performance**: `6` subcommands ｜ **Uncertainty**: Highly accurate in general ｜ **Remarks**: Can be even shorter for 2D vectors

**Command**:

```yaml
rotated as {@A + y} positioned ^^^a facing 0 0 0 positioned ^^^2a rotated as {@A + y} positioned ^^^a
```

### 16. Cross Product Formula

**Function**: $(x, y, z) \to (x, y, z) \times A$ — the cross product of the current direction with $A = \text{dir}(@A)$; gives both magnitude and direction
**Performance**: `16` subcommands ｜ **Remarks**: Calculates both magnitude and direction; although very long, it is *[Robust]*

**Command**:

```yaml
rotated as {@A + y} positioned ^^^a facing 0 0 0 positioned ^^^2a rotated as {@A + y} positioned ^^^a facing 0~a 0 rotated ~45~ positioned ^^^√2a positioned ~ 0~ rotated as {@A + y} positioned ^^^a facing 0 0 0 positioned ^^^2a rotated as {@A + y} positioned ^^^a
```

### 17. Symmetry Formula

**Function**: Reflects the execution position about the direction of `@A` (mirror symmetry)
**Performance**: `6` subcommands ｜ **Remarks**: *[Robust]*

**Command**:

```yaml
rotated as @A positioned ^^^a facing <> positioned ^^^2a rotated as @A positioned ^^^a
```

### 18. Rotation Formula

**Function**: Aligns the `~~1~` direction of the coordinate system with the `^^^1` direction of `@s`
**Performance**: `12` subcommands ｜ **Remarks**: *[Super Robust]*

**Command**:

```yaml
[ positioned ~~-a~ ] rotated as @s positioned ^-a^^ facing <> positioned ^^^2√2a rotated as @s positioned ^^^a positioned ~~-a~ facing <> positioned ^^^2√2a rotated as @s positioned ^a^^a
```

### 19. Inverse Rotation Formula

**Function**: Aligns the `^^^1` direction of `@s` with the `~~1~` direction of the coordinate system (inverse of formula 18)
**Performance**: `12` subcommands ｜ **Remarks**: *[Super Robust]*

**Command**:

```yaml
rotated as @s positioned ^a^^a facing <> positioned ^^^2√2a rotated as @s positioned ^^^a positioned ~~-a~ facing <> positioned ^^^2√2a rotated as @s positioned ^-a^^ [ positioned ~~-a~ ]
```

### 20. Geometric Scaling Formula

**Function**: $(x, y, z) \to (x/n, y/n, z/n)$ — scales about the "facing" target by $1/n$
**Performance**: `11` subcommands ｜ **Remarks**: Introductory formula to geometry

**Command**:

```yaml
[ positioned ~~-2a~ ] facing <> positioned ^^^(n-1)a/n rotated ~180~ positioned ^^^(1-n)a/n positioned ~~-2a~-2a facing <> positioned ^^^(n-1)a/n rotated ~180~ positioned ^^^(n-1)a/n [ positioned ~~~2a ]
```

### 21. Geometric Scaling Formula (Short)

**Function**: Same as formula 20
**Performance**: `8` subcommands ｜ **Remarks**: Introductory formula to geometry

**Command**:

```yaml
[ positioned ~~~a~ ] facing <> positioned ^^^(n-1)a/n positioned ~~-a/n~-a facing <> rotated 0~ positioned ^^^(n-1)a/n [ positioned ~~~a/n ]
```

### 22. Translation & Scaling Formula

**Function**: $(x, y, z) \to (kx, ky, kz)$ — moves the reference frame from `@A` to `@B` and scales by $k$
**Performance**: `19` subcommands ｜ **Remarks**: This is way too long. Although powerful, the community isn't quite sure what it is useful for. In practice, scaling/translating just xz or y is probably more useful.

**Command**:

```yaml
[ positioned ~~-2a~ ] facing {@B} positioned ^^^a/(1+k) rotated ~180~ positioned ^^^-a/(1+k) facing {@A} positioned ^^^-ka rotated ~180~ positioned ^^^ka positioned ~~-2a~-2a facing {@B} positioned ^^^a/(1+k) rotated ~180~ positioned ^^^a/(1+k) facing {@A} positioned ^^^-ka rotated ~180~ positioned ^^^-ka [ positioned ~~~2a ]
```

### 23. Translation & Scaling Formula (Short)

**Function**: Same as formula 22
**Performance**: `13` subcommands ｜ **Remarks**: Shorter, but less accurate than the one above

**Command**:

```yaml
[ positioned ~~a~ ] facing {@B} positioned ^^^a/(1+k) facing {@A} positioned ^^^-k²a/(1+k) positioned ~~-ka~-a facing {@B} rotated 0~ positioned ^^^a/(1+k) facing {@A} rotated 0~ positioned ^^^-k²a/(1+k) [ positioned ~~~ka ]
```

### 24. Volume Formula

**Function**: $(x, y, z) \to (?, xyz, ?)$ — the only formula that computes $xyz$
**Performance**: `14` subcommands ｜ **Uncertainty**: Very poor symmetry ｜ **Remarks**: Lacks symmetrical aesthetic and has singularities during calculation, but currently it is the only one that can calculate xyz

**Command**:

```yaml
facing ~~b 0 positioned ~~ 0 positioned ^^a/2b^ rotated ~180~ positioned ^^-a/2b^ facing ~ 0 0 positioned ~ 0 0 positioned ^^-a^ facing 0~a 0 positioned 0 0 0 rotated ~45~ positioned ^^^a² facing ~~~a^2/√2 0 positioned ^^^a^2
```

---

## III. Pos-rot Fitting and Trigonometric Functions

### 25. Pos-rot Fitting (1)

**Function**: $(yaw, pitch) \to (x, 0)$, with $x \in [-\pi, \pi]$ — sets pitch to 0 and yaw to $x$ radians
**Performance**: `5` subcommands ｜ **Uncertainty**: Accuracy 0.0001 ｜ **Remarks**: Seems only useful for drawing circles

**Command**:

```yaml
facing 0.0 ~ 3.43204833 positioned ^^^4.65280132 facing 0.0 ~ 4.39744734 positioned ^^^3.01050871 facing 0.0 ~ 5.47992547
```

### 26. Pos-rot Fitting (2)

**Function**: $(yaw, pitch) \to (2\pi x, 0)$, with $x \in [-0.5, 0.5]$ — yaw becomes $2\pi x$ radians, pitch 0
**Performance**: `5` subcommands ｜ **Uncertainty**: Accuracy 0.0001 ｜ **Remarks**: Fits MEF a bit better

**Command**:

```yaml
facing 0.0 ~ 0.546225495 positioned ^^^0.74051535 facing 0.0 ~ 0.69987548 positioned ^^^0.47913733 facing 0.0 ~ 0.87215723
```

### 27. Trigonometric Function Formula

**Function**: $(x, y, z) \to (-\sin x, y, \cos x)$ — applies sine/cosine to $x$
**Performance**: `12` subcommands ｜ **Uncertainty**: Accuracy 0.0001 ｜ **Remarks**: Can't think of any practical use for it

**Command**:

```yaml
facing 0.0 πa ~ positioned 0.5 ~ 0. positioned ^^^-a align x positioned ^^^a facing 0.0 ~ 0.546225495 positioned ^^^0.74051535 facing 0.0 ~ 0.69987548 positioned ^^^0.47913733 facing 0.0 ~ 0.87215723 positioned 0.0 ~ 0.0 positioned ^^^1
```

---

## Notes (original remarks, re-expressed with the new notation)

**a / b** — `a` is a very large positive number (mathematically $\approx +\infty$; in practice 512 / 1024 / 2048), `b` is a tiny positive number (mathematically $\approx 0$; in practice 0.01 / 0.001). These exist because the game's float precision cannot represent actual infinity / zero.
**n** — a normal-scale tuning variable (usually 1 / 2 / 3). Adjusting `n` tunes the floating-point adaptation interval. For example, formula 8 (Division, 2D Vector) cannot be used in Java Edition directly, but works after tuning `n`. It only matters when considering floating-point errors, and its value must be chosen per scenario.
:::tip
If a formula already contains `n`, ignore all explanations about `n` above (except this note). E.g. for $(x, y, z) \to (x/n, y/n, z/n)$ just ignore them. Also, `n` is a real number.
:::
**`{@A + y}`** — a player's rotation can be seen as a unit vector. With $y = (0, 1, 0)$, the sum $\text{dir}(@A) + y$ yields a new vector; `{@A + y}` denotes the direction of that vector. E.g. `rotated as {@A + y}` means rotating toward the direction of $\text{dir}(@A)$ plus the +y unit vector.
**`(yaw, pitch)`** — the yaw and pitch of the game rotation; the order matches the command `rotated <yaw> <pitch>` (the original `〈rx, ry〉` is dropped). The transformation $(yaw, pitch) \to (x, 0)$ means: pitch becomes 0, yaw becomes $x$ radians.
**`@A` / `{@A}`** — `@A` is an entity (e.g. in `rotated as @A`). `{@A}` is an entity placeholder to be replaced with a real selector, e.g. `{@A}` → `@e[name=a]`, giving `facing entity @e[name=a] feet`.
**`<>`** — placeholder for a coordinate or an entity. E.g. `facing <>` → `facing 0 0 0`; or with an entity, `facing entity @e[name=a] feet`.
**`[ ]`** — square brackets mark subcommands that can, in many contexts, be simplified together with the surrounding command. Example (formula 7, Division Short). Full form:

```yaml
/execute positioned ~5 6 ~7 positioned ~ 0 ~ facing 0 a ~ positioned ^^-ab^ facing ~ 0 0 positioned ~ 0 0 positioned ^^1/b^
```

Simplified per the brackets:

```yaml
/execute positioned ~5 0 ~7 facing 0 a ~ positioned ^^-ab^ facing ~ 0 0 positioned ~ 0 0 positioned ^^1/b^
```

**`?`** — the author did not compute this component; resolving it would overcomplicate the table without much practical value.
**`(yaw+90°, 0)` distance note (formula 14)** — if the entity's position before the formula is $M = (x, y, z)$ with rotation $(ry, rx)$, after the formula the rotation becomes $(ry+90^\circ, 0)$ and the distance from M becomes $x \cdot z$.
**Uncertainty** — the author initially intended to roughly estimate floating-point error, with $\varepsilon$ the minimum precision as an angle approaches 0°. It was later found that "uncertainty" is not the dominant cause of floating-point error, so later formulas omit the field. Nobody but the author knows the algorithm behind it.
