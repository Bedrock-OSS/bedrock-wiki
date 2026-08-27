---
title: CCT Application
category: Coordinates Calculation Theory
tags:
    - expert
mentions:
    - theVivia
nav_order: 4
description: Math tools and proves to express CCT subcommands.
---

## 3.1 求中点

**准备**

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

| 子命令 | 动作 | 对应第二章 |
|-------|-----|-----------|
| `at @e[...name=S,c=1]` | 原点搬到 S | — |
| `positioned ~ ~100000 ~` | 抬到 S 上方 H | 第一步 |
| `facing entity ... feet` | 视线转向 M | 第二步 |
| `positioned ^ ^ ^50000` | 沿斜边走 H/2 | 第三步 |
| `positioned ~ ~-50000 ~` | 向下补 H/2 | 第四步 |
| `run particle ...` | 放粒子 | — |


**分段调试**

先只写前三段，看粒子是不是出现在 S 上方很高的地方：

```yaml
/execute at @e[type=armor_stand,name=S,c=1] positioned ~ ~100000 ~ run particle minecraft:basic_flame_particle ~ ~ ~
```

再加走斜边那段，看粒子是不是跑到 M 上方附近。最后加下降段。每加一段确认一次，出问题立刻知道是哪段。

**两个注意点**

选择器必须带 `type` 和 `c=1`。

前进距离和下降距离必须配套：这里是 50000 和 50000，改 H 时**两个都要改**。

## 3.2 比例点与延长线

$$\text{前进} = tH, \qquad \text{下降} = (1-t)H$$

**3/4 点**（t = 0.75，H = 100000）：

```yaml+
/execute at @e[type=armor_stand,name=S,c=1] positioned ~ ~100000 ~ facing entity @e[type=armor_stand,name=M,c=1] feet positioned ^ ^ ^75000 positioned ~ ~-25000 ~ run particle minecraft:basic_flame_particle ~ ~ ~
```

**1/3 点**：

```yaml
/execute at @e[type=armor_stand,name=S,c=1] positioned ~ ~100000 ~ facing entity @e[type=armor_stand,name=M,c=1] feet positioned ^ ^ ^33333 positioned ~ ~-66667 ~ run particle minecraft:basic_flame_particle ~ ~ ~
```

两个数字加起来必须等于 H。33333 + 66667 = 100000 ✓

**常用比例对照**（H = 100000）：

| t | 前进 | 下降 |
|--:|-----:|-----:|
| 0.1 | 10000 | 90000 |
| 0.25 | 25000 | 75000 |
| 1/3 | 33333 | 66667 |
| 0.5 | 50000 | 50000 |
| 2/3 | 66667 | 33333 |
| 0.75 | 75000 | 25000 |
| 0.9 | 90000 | 10000 |

**延长线**

t 可以超出 [0, 1]。t = 1.5 落在 M 之外的延长线上，下降距离是负数，写成 `positioned ~ ~50000 ~`（往上补）。$t = -0.5$ 落在 S 的反方向。

误差公式带 t 因子，t 越大精度越低。

**画一条线**

想在 S、M 之间生成一串等距点，用一排连锁命令方块，每个填一个不同的 t。放一个脉冲方块打头，后面接十个连锁方块，t 依次填 0.1 到 1.0，一按按钮出十个点。

想用一条命令搞定，需要第六章的 MEF。

## 3.3 轴间转值

`facing` 同时改 $\text{yaw}$ 和 $\text{pitch}$。S、M 同高时没问题，但如果两点有高度差，`facing` 给出的方向是斜的，`positioned ^ ^ ^d` 会同时改变水平位置和高度。有时候只想要其中一个分量。

办法是在 `facing` 之后用 `rotated` 覆盖掉不想要的那个角度。

**只留水平方向**

```yaml
/execute at @e[name=A,c=1] facing entity @e[name=B,c=1] feet rotated ~ 0 positioned ^ ^ ^5 run particle minecraft:basic_flame_particle ~ ~ ~
```

`rotated ~ 0` 是"$\text{yaw}$ 保持，$\text{pitch}$ 设为 0"。视线被压平，只保留指向 B 的水平朝向。不管 A、B 高度差多少，粒子都出现在 A 的高度上、朝 B 的水平方向 5 格处。

**只留垂直方向**

```yaml
/execute at @e[name=A,c=1] facing entity @e[name=B,c=1] feet rotated 0 ~ positioned ^ ^ ^5 run particle minecraft:basic_flame_particle ~ ~ ~
```

`rotated 0 ~` 把 $\text{yaw}$ 强制设为 0，只保留 $\text{pitch}$。

**为什么这个技巧重要**

`facing` 给出的是一个三维方向，三个分量混在一起。加一个 `rotated` 就能剥掉一部分，只留下想要的分量。

社区把这类操作叫**轴间转值**。第六章的正方体命令里 `rotated 0 ~` 和 `rotated ~ 0` 各出现四次，作用都是把一个倾斜的视角掰成单一坐标轴方向。

**注意这里的实体差别**

这一节用的是 `facing entity`，只读位置，所以 A、B 用盔甲架没问题——`rotated 0 ~` 保留的是 `facing` 算出来的 $\text{pitch}$，不是实体的 $\text{pitch}$。

但如果换成 `rotated as @e[...]` 加 `rotated 0 ~`，保留的就是**实体的** $\text{pitch}$ 了。这时候盔甲架给出的恒为 0，整个竖直分量凭空消失。1.4 的判据表说的就是这个。

## 3.4 一条改命令的原则

这一节只讲一件事，但它比前面所有命令加起来都重要。

> **插入或删除任何子命令之后，整条链子的距离配套关系可能全变了，必须重新推一遍。**

例子。3.1 的中点命令里，`positioned ~ ~-50000 ~` 是为了抵消沿斜边下降的高度。如果在 `facing` 后面插一个 `rotated ~ 0`，斜边就变成了水平线——走 50000 格根本没有下降，这时候再向下 50000 格，粒子会跑到地下五万格。

改命令时不要盯着字符串改。回到 1.6 的动作清单层面：

1. 写出改动后的完整动作清单
2. 逐条算出每个动作造成的位移
3. 检查各项加起来是不是想要的
4. 再翻译回子命令

跳过这个流程，改动稍复杂就会出错，而且错在哪根本看不出来。

## 3.5 小结

- 比例点：抬高 H → facing → 走 tH → 降 (1-t)H
- `rotated ~ 0` 保留 $\text{yaw}$（压平视线），`rotated 0 ~` 保留 $\text{pitch}$
- 选择器加 `type` 和 `c=1`
- 只用位置的参考实体，盔甲架永远够用
- 改动任何一处，重新推整条链子

第四章的远点反射会把这一章的骨架当积木使用。往下走之前，请确保你能不看书写出中点命令并解释每一段。

---

# 第四章　CCT 进阶

前三章只涉及一次 `facing`。这一章把多个 `facing` 串起来。

串联带来的变化是质的：一次只能做比例，两次能做镜像，四次能做旋转。再配合精心设计的距离，还能算出平方、乘法和除法。

## 4.1 远点反射

这是整个进阶 CCT 的核心原语。

**目标**

把一个点关于某条直线做镜像。这条直线过原点，方向由某个实体的视角给出。

**骨架**

```
沿轴走 H
面向原点
走 2H
恢复轴方向
再走 H
```

**命令**

准备三个实体：待镜像的点 `P`、原点 `O`、给出轴方向的 `axis`。

**先看轴是水平的情况**，这时 `axis` 用盔甲架就行：

```yaml
/execute at @e[type=armor_stand,name=P,c=1] rotated as @e[type=armor_stand,name=axis,c=1] positioned ^ ^ ^1024 facing 0 0 0 positioned ^ ^ ^2048 rotated as @e[type=armor_stand,name=axis,c=1] positioned ^ ^ ^1024 run particle minecraft:basic_flame_particle ~ ~ ~
```

`facing 0 0 0` 假定原点在世界原点。想用别的原点就换成 `facing entity @e[name=O,c=1] feet`。

轴需要 $\text{pitch}$ 的情况见 4.4。

**为什么是镜像**

设轴是 Z 轴（`axis` 的 $\text{yaw}$ = 0，$\text{pitch}$ = 0），点 P 在 Z 轴右侧，到轴的距离记为 w。

**第一步**沿 Z 轴走 H，到达远处的 A。因为 H 很大，A 几乎就在 Z 轴上——P 那点偏移 w 和 H 相比可以忽略。

**第二步**面向原点。从 A 看原点，方向几乎就是 Z 轴反方向。注意"几乎"：由于 P 有偏移 w，这个方向带一个微小的倾斜，倾斜角约为 $w/H$。

**第三步**走 2H。倾斜被 2H 放大，产生约

$$2H\times\frac{w}{H} = 2w$$

的横向位移，方向从 P 那一侧指向对面。原来偏右 w，现在偏左 w。

**第四步**恢复轴方向，**第五步**走 H 回来。

净效果：沿轴的分量原样保留（走了 H 又走回 H），垂直于轴的分量从 $+w$ 变成 $-w$。这就是镜像。

**严格结果**

设原点在 (0,0,0)，点为向量 $\mathbf{p}$，轴的单位向量为 $\mathbf{u}$：

$$\mathbf{p}_H = \mathbf{p}+2H\mathbf{u}-2H\frac{\mathbf{p}+H\mathbf{u}}{\lVert\mathbf{p}+H\mathbf{u}\rVert}$$

8.3 节会给出完整推导。当 H 趋于无穷时它趋近：

$$\mathbf{p}' = 2(\mathbf{u}\cdot\mathbf{p})\mathbf{u}-\mathbf{p}$$

平行于轴的分量保留，垂直的分量取反。

**误差量级**

$$O\!\left(\frac{\lVert\mathbf{p}\rVert^2}{H}\right)$$

和第二章的 $E_y\approx tD^2/2H$ 是同一个形式。

**一个决定性的性质**

镜像不改变点到原点的距离：

$$\lVert\mathbf{p}'\rVert = \lVert\mathbf{p}\rVert$$

平行分量长度不变，垂直分量只是取反，勾股一算模长就不变。

这条性质是第七章画圆的全部依据。

## 4.2 手算一遍

公式不好直观感受，把具体数代进去算一遍，顺便验证误差模型。

**设定**

- 轴是 Z 轴：$\mathbf{u} = (0,0,1)$
- 点 P 在 $(3,\ 0,\ 5)$
- H = 1024

理想的镜像结果是 $(-3,\ 0,\ 5)$：Z 分量（平行于轴）保留，X 分量（垂直于轴）取反。

**逐步计算**

第一步走 H，到 $(3,\ 0,\ 1029)$。这个向量的长度：

$$\sqrt{9+1029^2} = \sqrt{1058850} \approx 1029.004374$$

比 1029 只多 0.0044。

第二步面向原点，第三步走 2H = 2048，位移是：

$$-\frac{2048}{1029.004374}\times(3,\ 0,\ 1029) = -1.99027\times(3,\ 0,\ 1029) = (-5.97082,\ 0,\ -2047.99129)$$

第四、五步恢复轴方向走 H，位移 $(0,\ 0,\ 1024)$。

**总计**

$$X:\ 3-5.97082 = -2.97082$$
$$Y:\ 0$$
$$Z:\ 5+1024-2047.99129+1024 = 5.00871$$

结果 $(-2.97082,\ 0,\ 5.00871)$，理想值 $(-3,\ 0,\ 5)$。偏差：X 差 0.0292，Z 差 0.0087，总误差约 0.030。

**验证误差模型**

模型说主项是 $\lVert\mathbf{p}\rVert^2/H$。这里 $\lVert\mathbf{p}\rVert^2 = 9+25 = 34$：

$$\frac{34}{1024} = 0.0332$$

实测 0.030，量级对得上。

**H 换成 4096**

$\lVert\mathbf{p}+H\mathbf{u}\rVert = \sqrt{9+4101^2}\approx4101.0011$，比例 $8192/4101.0011\approx1.997561$。

结果 $(-2.99268,\ 0,\ 5.00220)$，总误差约 0.0076。

| H | 总误差 | 理论 $\lVert\mathbf{p}\rVert^2/H$ |
|---:|---:|---:|
| 1024 | 0.0304 | 0.0332 |
| 4096 | 0.0076 | 0.0083 |

H 变 4 倍，误差变 1/4。**误差与 H 成反比，这一条确认了。**

这个例子值得自己算一遍。算完之后，"渐近近似"就不再是抽象说法了。

## 4.3 两次反射等于一次旋转

**结论**

两条相交直线的镜像复合，等于绕交点的旋转。旋转角等于两条直线夹角的**两倍**。

用镜子想：两面镜子夹角 30 度，物体在里面的像会转 60 度。

**为什么是两倍**

设两轴夹角为 θ，某点与第一条轴的夹角为 α。

第一次镜像后，它与第一条轴的夹角变成 $-\alpha$。此时它与第二条轴的夹角是 $-\alpha-\theta$。

第二次镜像后，与第二条轴的夹角从 $-\alpha-\theta$ 变成 $+\alpha+\theta$。换回以第一条轴为基准，就是 $\alpha+2\theta$。

净转了 $2\theta$，**与 α 无关**。不管起始点在哪，都转同样的角度。

**命令**

两条轴都是水平的（$\text{pitch}$ = 0），所以**盔甲架够用**。`axisA` 的 $\text{yaw}$ = 0，`axisB` 的 $\text{yaw}$ = 30：

```yaml
/summon armor_stand axisA 0 64 0
/summon armor_stand axisB 0 64 1
/execute as @e[type=armor_stand,name=axisA,c=1] at @s run tp @s ~ ~ ~ 0 0
/execute as @e[type=armor_stand,name=axisB,c=1] at @s run tp @s ~ ~ ~ 30 0
```

```yaml
/execute at @e[type=armor_stand,name=P,c=1] rotated as @e[type=armor_stand,name=axisA,c=1] positioned ^ ^ ^1024 facing 0 0 0 positioned ^ ^ ^2048 rotated as @e[type=armor_stand,name=axisA,c=1] positioned ^ ^ ^1024 rotated as @e[type=armor_stand,name=axisB,c=1] positioned ^ ^ ^1024 facing 0 0 0 positioned ^ ^ ^2048 rotated as @e[type=armor_stand,name=axisB,c=1] positioned ^ ^ ^1024 run particle minecraft:basic_flame_particle ~ ~ ~
```

结构就是两个 4.1 的骨架接在一起。

**角度对照**

| 两轴夹角 | 旋转角 |
|--------:|------:|
| 15° | 30° |
| 22.5° | 45° |
| 30° | 60° |
| 45° | 90° |
| 90° | 180° |

交换两次反射的顺序，旋转方向反向。

**为什么不直接用 rotated**

`rotated` 改的是视角，不是位置。它能让后续的 `^` 沿新方向移动，但不能把一个已有的点绕原点转过去。

要转动位置只能靠位移的组合，反射复合是最短的路径：一次反射三个 `positioned`，两次共六个，换来任意角度的旋转。

这就是为什么复杂 CCT 命令里到处都是 H、2H、H 的三连——看到这个组合就知道是在做反射。

## 4.4 需要 $\text{pitch}$ 的轴

上一节两条轴都在水平面内，所以两次反射的复合是绕**竖直轴**的旋转。想绕别的方向转，或者想让镜像轴倾斜，就需要带 $\text{pitch}$ 的轴。

这时候**盔甲架不能用了**，必须换船。

**例：关于一条 $\text{pitch}$ = 30° 的轴做镜像**

```yaml
/summon boat 0 64 0 0 30
/tag @e[type=boat,c=1,r=2] add axisC
```

```yaml
/execute at @e[type=armor_stand,name=P,c=1] rotated as @e[type=boat,tag=axisC,c=1] positioned ^ ^ ^1024 facing 0 0 0 positioned ^ ^ ^2048 rotated as @e[type=boat,tag=axisC,c=1] positioned ^ ^ ^1024 run particle minecraft:basic_flame_particle ~ ~ ~
```

如果这里把船换成盔甲架，$\text{pitch}$ 恒为 0，得到的会是关于**水平** Z 轴的镜像——命令不会报错，粒子照样出现，但位置完全不是你要的。

这是最难查的一类错误：语法正确、有输出、结果错。养成习惯：**每次写 `rotated as`，先问一句"这个方向需要 $\text{pitch}$ 吗"。**

**一个折中办法**

如果轴的 $\text{pitch}$ 是固定值，不需要靠实体传递，可以直接写死角度：

```yaml
rotated 0 30
```

绝对角度不读任何实体，也就绕过了限制。4.1 的骨架里两次 `rotated as` 都换成 `rotated 0 30` 完全可行：

```yaml
/execute at @e[type=armor_stand,name=P,c=1] rotated 0 30 positioned ^ ^ ^1024 facing 0 0 0 positioned ^ ^ ^2048 rotated 0 30 positioned ^ ^ ^1024 run particle minecraft:basic_flame_particle ~ ~ ~
```

**什么时候必须用船**

只有一种情况：需要**同一条命令里出现多个不同的 $\text{pitch}$ 方向**，且要靠 MEF 的分叉一次遍历它们。那时候方向必须存在实体身上，绝对角度做不到——这正是第六章正方体的处境。

单条 CCT 命令、方向固定的场合，写死角度更省事。

## 4.5 平方

现在不做几何变换，改做算术。

**思路**

看这个式子：

$$\frac{a^2}{\sqrt{a^2+x^2}}$$

分母是斜边，分子是常数。展开（同样用二项近似）：

$$\frac{a^2}{a\sqrt{1+x^2/a^2}} = a\left(1+\frac{x^2}{a^2}\right)^{-1/2} \approx a\left(1-\frac{x^2}{2a^2}\right) = a-\frac{x^2}{2a}$$

**一个含平方根的量，展开后自然带出了和 $x^2$ 成正比的项。** 只要构造出这个量，再减掉常数主项，剩下的就是 $x^2$ 的倍数。

而斜边正是 `facing` 的归一化分母，构造它一行就够。

**公式**（附录 B.1）

```yaml
facing 0 ~a ~ positioned ^ ^ ^-a² rotated ~180 ~ positioned ^ ^ ^-a² positioned ~ ~2a² ~
```

功能：$(x,y,z)\to(x,\ y+x^2,\ z)$

`a` 是大数占位符，`a²` 要写成实际算出的数值。a = 100 时，`^ ^ ^-a²` 写成 `^ ^ ^-10000`。

**完整推导**

设当前位置 $(x,y,z)$。

**第一步** `facing 0 ~a ~`：目标是 $(0,\ y+a,\ z)$，方向向量

$$\mathbf{v} = (-x,\ a,\ 0), \qquad s = \lVert\mathbf{v}\rVert = \sqrt{a^2+x^2}$$

$$\mathbf{F} = \frac{(-x,\ a,\ 0)}{s}$$

**第二步** `positioned ^ ^ ^-a²`：走 $-a^2$，位移

$$\left(\frac{a^2x}{s},\ -\frac{a^3}{s},\ 0\right)$$

**第三步** `rotated ~180 ~`：$\text{yaw}$ 加 180 度。

按 1.2 的观察二，这只反转水平分量，竖直分量不变：

$$\mathbf{F}' = \frac{(x,\ a,\ 0)}{s}$$

X 变号，Y 不变。

**第四步** `positioned ^ ^ ^-a²`：位移

$$\left(-\frac{a^2x}{s},\ -\frac{a^3}{s},\ 0\right)$$

**两次相加**：

$$X:\ \frac{a^2x}{s}-\frac{a^2x}{s} = 0 \qquad Y:\ -\frac{2a^3}{s}$$

X 完全抵消，Y 累计。这正是 `rotated ~180 ~` 的作用——让水平分量互相消掉、竖直分量互相叠加。

**第五步** `positioned ~ ~2a² ~`：总的 Y 变化

$$2a^2-\frac{2a^3}{s} = 2a^2\left(1-\left(1+\frac{x^2}{a^2}\right)^{-1/2}\right) \approx 2a^2\cdot\frac{x^2}{2a^2} = x^2$$

$x$ 和 $z$ 原样保留，$y$ 增加了 $x^2$。

**那个 rotated ~180 ~**

它是 CCT 里最常见的手法：让两次移动的某个分量互相抵消、另一个分量互相叠加。附录的公式表里到处都是它，看到它就该想"某个分量要被消掉"。

第六章的正方体基座段用的是同一个思路，只不过换成两条互补朝向的船各走一次。

**更短的版本**（附录 B.2）

```yaml
facing 0 ~a ~ positioned ^ ^ ^-2a² positioned ~ ~2a² ~
```

三个子命令，代价是 X 坐标被破坏（偏移约 $2ax$ 没人抵消）。功能变成 $(x,y,z)\to(?,\ y+x^2,\ z)$。

**误差**

被丢掉的下一项量级是 $x^4/a^2$。精确一点：$(1+u)^{-1/2} = 1-u/2+3u^2/8-\cdots$，所以

$$\Delta y \approx x^2-\frac{3x^4}{4a^2}$$

误差随输入的**四次方**增长。所以用之前一定要把输入缩放到较小区间，$[-1,1]$ 是常见选择。缩放用 5.2 节的公式。

## 4.6 乘法

有了平方，乘法立刻能推出来。平方差公式：

$$xz = \frac{(x+z)^2-(x-z)^2}{4}$$

验证：$(x^2+2xz+z^2)-(x^2-2xz+z^2) = 4xz$ ✓

理论上做两次平方、一次减法、一次除以 4 就行。这条路概念最清楚，缺点是命令长。

附录里的乘法走另一条路：用二维向量的斜边归一化一次完成。最短的只用六个子命令（B.5）：

```yaml
facing 0 ~a 0 positioned 0 ~ 0 rotated ~45 ~ positioned ^ ^ ^a² facing ~ ~-a²/√2 0 positioned ^ ^ ^a²
```

功能：$(x,y,z)\to(?,\ y+xz,\ ?)$

`rotated ~45 ~` 和 $\sqrt2$ 是配套的：$\cos45° = 1/\sqrt2$。**这类公式的常数之间有严格对应，改一个必须同时改另一个。**

## 4.7 除法与高次幂

**除法**

`facing` 做的归一化本身就是除法：

$$\frac{(x,y,z)}{\sqrt{x^2+y^2+z^2}}$$

除法公式的思路是预先布置合适的辅助轴，让归一化的分母恰好等于除数，再从单位方向的某个分量里把比值读出来。

最短版本（附录 B.10）：

```yaml
positioned ~ 0 ~ facing 0 a ~ positioned ^ ^-ab ^ facing ~ 0 0 positioned ~ 0 0 positioned ^ ^1/b ^
```

功能：$(x,y,z)\to(?,\ ?,\ x/z)$

两个参数各有分工：**a 取大数**，让第一次归一化的分母 $\approx a$；**b 取小数**，让中间偏移远小于 z，使第二次归一化的分母 $\approx\lvert z\rvert$。

误差量级：

$$\sqrt{\frac{1}{b^2}+\frac{a^2}{z^2}}\cdot\varepsilon$$

两项互相制约：b 太小第一项爆炸，z 太小第二项爆炸。

**除法的硬限制**

除数接近 0 时误差无界增长。这不是公式的问题，而是 $1/z$ 本身的性质——z 越接近 0，$1/z$ 变化越剧烈，任何微小误差都被放大。

用除法必须限制输入域，确保除数离 0 有足够距离。

**高次幂**

| 目标 | 构造 |
|-----|-----|
| $x^2$ | 平方公式 |
| $x^3$ | $x^2\cdot x$，或附录 B.13 |
| $x^4$ | $x^2\cdot x^2$ |
| $x^5$ | $x^4\cdot x$ |

$x^4$ 用 $x^2\cdot x^2$ 比 $x^3\cdot x$ 好：前者两个因子误差相当，后者会把 $x^3$ 已有的误差再放大一次。

每级级联同时增加误差和命令长度。做到四次方基本是实用上限。

## 4.8 误差工程

**两种误差**

$$E_g \approx C_1\frac{r^2}{H} \qquad\text{（几何截断）}$$

$$E_f \approx C_2\varepsilon H \qquad\text{（浮点）}$$

一个随 H 减小，一个随 H 增大。

**扫描 H**

```
256, 512, 1024, 2048, 4096, 8192
```

远点反射用了 H、2H、H 三处，必须**同步替换**。

判断标准：

- 误差随 H 增大持续下降 → 几何误差还在主导，可以继续加大
- 加大 H 之后误差反而上升 → 浮点误差已经接管，往回退

4.2 那个手算就是一次两点扫描：1024 → 4096，误差降到 1/4，说明还在几何误差区间。

**扫描输入尺度**

固定 H，改变图形尺度 r：

```
0.5, 1, 2, 4, 8, 16
```

误差大致按 $r^2$ 增长就符合预期。

**必须覆盖的边界**

算术公式要测：正数、负数、0、极小的除数、输入域两个端点、不同象限、不同 $\text{pitch}$。

一个只在正数小范围内有效的公式，不能当通用公式用。

**先缩放，再运算**

所有算术公式的误差都随输入增大，所以正确的流程是：

```
缩小输入到安全区间 → 做运算 → 放大结果
```

具体场景：输入范围 $[-8,8]$，要算平方。直接算，误差按 $x^4$ 走，在 $x=8$ 处是 $x=1$ 处的 4096 倍。先缩小 8 倍到 $[-1,1]$，算完平方再放大 64 倍（因为 $(x/8)^2 = x^2/64$），误差就控制在小区间水平。

缩放要花八个子命令，换来的精度提升通常很值。

## 4.9 小结

| 操作 | 结构 | 实体要求 |
|-----|-----|---------|
| 轴镜像（水平轴） | H → 面向原点 → 2H → H | 盔甲架够 |
| 轴镜像（倾斜轴） | 同上 | 船，或写死角度 |
| 旋转 2θ | 两次镜像，轴夹角 θ | 看轴是否水平 |
| 平方 | 构造斜边，翻转抵消，减主项 | 无需实体 |
| 乘法 | 平方差，或二维向量归一化 | 无需实体 |
| 除法 | facing 的归一化分母 | 无需实体 |

一条底线：**这些公式都是有限精度下的渐近近似，不是代数恒等式。**

**练习**

按 4.2 的方式手算点 $(2,\ 0,\ 3)$ 关于 Z 轴、H = 2048 的反射结果，然后进游戏用粒子对照。理想值 $(-2,\ 0,\ 3)$，实际会差多少，你应该能提前算出来。

---

# 第五章　CCT 应用

## 5.1 CCT 的输出是一个点

**一条 CCT 命令只产生一个执行点。** 因为选择器全带 `c=1`，执行路径只有一条，`run` 只执行一次。

这是设计使然。CCT 是计算器，算得准，但一次只出一个结果。

所以它适合：

- 算出一个特定位置，在那里做一件事
- 每游戏刻算一个点，靠时间累积成轨迹
- 给别的系统提供一个算好的坐标
- 作为变换算子，套在别的结构外面（第七章）

CCT **不**适合一次画出成百上千个点。想要那个效果，需要第六章的 MEF。

## 5.2 坐标系缩放

**用途**：把输入压缩到安全区间（4.8 的流程），或把已有图形整体放缩。

**公式**（附录 A.4，8 子命令）

以某个参考点为中心，$(x,y,z)\to(x/n,\ y/n,\ z/n)$：

```yaml
positioned ~ ~a ~ facing <> positioned ^ ^ ^(n-1)a/n positioned ~ ~-a/n ~-a facing <> rotated 0 ~ positioned ^ ^ ^(n-1)a/n positioned ~ ~ ~a/n
```

`<>` 换成参考点（通常是原点），`a` 是大数，`n` 是缩小倍数。

**具体例子**：参考点在世界原点，缩小 4 倍，a 取 1024。

$$\frac{(n-1)a}{n} = \frac{3\times1024}{4} = 768, \qquad \frac{a}{n} = 256$$

```yaml
/execute at @e[type=armor_stand,name=P,c=1] positioned ~ ~1024 ~ facing 0 0 0 positioned ^ ^ ^768 positioned ~ ~-256 ~-1024 facing 0 0 0 rotated 0 ~ positioned ^ ^ ^768 positioned ~ ~ ~256 run particle minecraft:basic_flame_particle ~ ~ ~
```

P 到原点的距离变成原来的 1/4，方向不变。

**注意这里的 `rotated 0 ~`**

它跟在 `facing 0 0 0` 后面，保留的是 `facing` 算出的 $\text{pitch}$，不是任何实体的 $\text{pitch}$。所以这条命令不涉及实体视角，盔甲架、船都无关。

**为什么需要两次 facing**

一次 `facing` 加走一段只能沿一条直线缩放。要让三个坐标同时按同一比例缩，需要两次不同方向的操作配合，中间那些 `positioned ~` 是在切换参考方向。

这个公式的常数绑得很紧：`a`、`(n-1)a/n`、`a/n` 由同一组 a 和 n 决定。改 n 要重算全部三个数。

**放大**：n 换成小于 1 的数，n = 0.25 就是放大 4 倍。此时 $(n-1)a/n = -3072$，$a/n = 4096$，注意符号。

## 5.3 圆到椭圆的映射

这是一个纯 CCT 变换：输入一个点，输出一个点。作用是把"到原点距离为 r 的点"映射成"落在椭圆上的点"。

值得单独讲，因为它演示了一个很有用的手法：**把位置信息转成方向信息。**

**五个子命令**

```yaml
facing 0 0 0
positioned 0 0 0
positioned ^ ^ ^4
rotated ~180 ~
positioned ^ ^ ^-2
```

**逐步推导**

设输入点为 $(0,\ y,\ z)$，到原点距离 $r = \sqrt{y^2+z^2}$。

**第一步** `facing 0 0 0`：视线指向原点，前方向

$$\mathbf{F} = \left(0,\ -\frac{y}{r},\ -\frac{z}{r}\right)$$

**第二步** `positioned 0 0 0`：位置重置到原点，**视角保留**。

这一步是核心。位置被清零了，但方向记住了原来的点在哪。原来的坐标 $(y,z)$ 现在以"方向的两个分量"的形式活着。

**第三步** `positioned ^ ^ ^4`：

$$\mathbf{P} = \left(0,\ -\frac{4y}{r},\ -\frac{4z}{r}\right)$$

**第四步** `rotated ~180 ~`：$\text{yaw}$ 加 180 度。按 1.2 观察二，只翻转水平分量：

$$\mathbf{F}' = \left(0,\ -\frac{y}{r},\ +\frac{z}{r}\right)$$

Y 保持，Z 变号。

**第五步** `positioned ^ ^ ^-2`：位移

$$\left(0,\ +\frac{2y}{r},\ -\frac{2z}{r}\right)$$

**总计**

$$Y:\ -\frac{4y}{r}+\frac{2y}{r} = -\frac{2y}{r} \qquad Z:\ -\frac{4z}{r}-\frac{2z}{r} = -\frac{6z}{r}$$

由于 $\lvert y\rvert\le r$、$\lvert z\rvert\le r$，输出的 Y 最大值 2，Z 最大值 6。

**半轴公式**

设两步距离为 $d_1$、$d_2$（第二步带符号）：

$$\text{Y 半轴} = \lvert d_1+d_2\rvert, \qquad \text{Z 半轴} = \lvert d_1-d_2\rvert$$

验证（$d_1 = 4$，$d_2 = -2$）：$\lvert4-2\rvert = 2$，$\lvert4+2\rvert = 6$ ✓

**反过来求**：想要 Y 半轴 3、Z 半轴 5，解

$$d_1+d_2 = 3, \qquad d_1-d_2 = 5$$

得 $d_1 = 4$，$d_2 = -1$：

```yaml
positioned ^ ^ ^4 rotated ~180 ~ positioned ^ ^ ^-1
```

**一个容易犯的错**

命令里的 4 和 -2 **不是半轴的值**。它们通过上面那组方程和半轴关联。直接把想要的半轴填进去，得到的是完全不同的椭圆。

**前提**

它要求输入点到原点的距离恒定（落在圆上）。距离不一，输出不会落在同一个椭圆上。

怎么一次生成一整圈这样的点，见 7.4。

## 5.4 函数图像

**目标**：画出 $y = x^2$。

用 4.5 的平方公式，一个输入得到一个点。取 a = 100，则 $a^2 = 10000$，$2a^2 = 20000$：

```yaml
/execute positioned 2 64 0 facing 0 ~100 ~ positioned ^ ^ ^-10000 rotated ~180 ~ positioned ^ ^ ^-10000 positioned ~ ~20000 ~ run particle minecraft:basic_flame_particle ~ ~ ~
```

`positioned 2 64 0` 设定输入 x = 2，基准高度 64。执行完粒子出现在 $(2,\ 68,\ 0)$——y 增加了 $2^2 = 4$。

改成 `positioned 3 64 0` 得到 $(3,\ 73,\ 0)$，`positioned -1.5 64 0` 得到 $(-1.5,\ 66.25,\ 0)$。

**画出整条曲线**

**办法一：一排连锁命令方块。** x 从 -4 到 4，步长 0.5，17 个方块各填一个输入坐标，一按按钮整条曲线出现。

**办法二：一个移动的输入点。** 放一个盔甲架当输入，让它沿 X 轴走，每刻算一次：

```yaml
/execute at @e[type=armor_stand,name=in,c=1] facing 0 ~100 ~ positioned ^ ^ ^-10000 rotated ~180 ~ positioned ^ ^ ^-10000 positioned ~ ~20000 ~ run particle minecraft:basic_flame_particle ~ ~ ~
```

配一个循环命令方块推进输入点（盔甲架 $\text{yaw}$ 设成 -90 就是沿 X 正方向；这里只用到水平方向，盔甲架够）：

```yaml
/execute as @e[type=armor_stand,name=in,c=1] at @s run tp @s ^ ^ ^0.1
```

粒子随时间描出抛物线。命令短、可实时响应，代价是曲线不同时全部显示。

**换成别的函数**

| 函数 | 用什么 |
|-----|-------|
| $y = x^2$ | 平方公式 |
| $y = x^3$ | 附录 B.13 |
| $y = xz$ | 乘法公式 |
| $y = ax^2+bx+c$ | 平方 + 缩放 + 两次平移 |
| $y = \sin x$ | 附录 D.3 |

组合时记住 4.8 的流程：先缩放，再运算，再放大。

## 5.5 坐标系对齐

有时候需要把整个坐标系转到某个实体的朝向上，之后所有 `~` 相对坐标都按新方向解释。

**公式**（附录 C.5，12 子命令）

```yaml
positioned ~ ~-a ~ rotated as @s positioned ^-a ^ ^ facing <> positioned ^ ^ ^2√2a rotated as @s positioned ^ ^ ^a positioned ~ ~-a ~ facing <> positioned ^ ^ ^2√2a rotated as @s positioned ^a ^ ^a
```

逆变换见附录 C.6。

**实体要求**

这个公式里 `rotated as @s` 不加任何覆盖，所以 `@s` 的 $\text{pitch}$ 会完整生效。如果 `@s` 是盔甲架，$\text{pitch}$ 恒为 0，你只能把坐标系绕竖直轴转，转不出倾斜。

想要任意朝向的对齐，`@s` 必须是船（或者玩家——玩家有完整的 $\text{pitch}$）。

**什么时候用得上**

一个图形已经写好了，但它是"正着"的，你想让它跟着某个实体的朝向转。

两个办法：改图形本身所有角度参数（麻烦、容易漏），或者在图形前面加一次坐标系对齐（12 个子命令，一次搞定）。后者更划算，之后改朝向只需转动那个实体，命令一个字不动。

## 5.6 小结

| 用法 | 公式 | 实体要求 |
|-----|-----|---------|
| 比例点 | 第三章 | 位置标记，盔甲架够 |
| 镜像、旋转 | 远点反射 | 轴水平→盔甲架，倾斜→船 |
| 缩放 | A.3 / A.4 | 不涉及实体视角 |
| 圆→椭圆 | 5.3 | 不涉及实体视角 |
| 函数值 | 平方、乘法、立方 | 不涉及实体视角 |
| 坐标系对齐 | C.5 / C.6 | 需完整视角→船或玩家 |

CCT 的定位是**变换算子**：进去一个点，出来一个点。

想让它一次作用在几千个点上，需要另一套技术。

---
