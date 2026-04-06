---
title: 记分板操作
category: 通用
tags:
    - easy
mentions:
    - Sprunkles137
    - Lufurrius
    - MedicalJewel105
    - Hatchibombotar
description: 记分板可用于执行复杂操作，类似于 MoLang。操作有两种类型——数学和逻辑。
---

## 概述

记分板可用于执行复杂操作，类似于 [Molang](/concepts/molang)。操作有两种类型：数学和逻辑。

操作使用 `/scoreboard players operation` 命令执行。完整语法如下：

```yaml
/scoreboard players operation <targetScore> <objective> <operation> <sourceScore> <objective>
```

该命令由两个分数持有者组成：目标分数和源分数。目标分数是被操作的值，源分数是影响操作的值。操作的结果写入目标分数，而源分数的值不受影响（除了[一个操作](/commands/scoreboard-operations#swap-operator)）。

## 数学运算符

数学运算符使用算术影响目标分数。有五种数学运算可用：加法、减法、乘法、向下取整除法和向下取整取模。

对于以下每个示例，假设分数持有者 `.A wiki:var` 等于 25，`.B wiki:var` 等于 10。

-   `+=` 加法：`.A += .B` → .A = 35
-   `-=` 减法：`.A -= .B` → .A = 15
-   `*=` 乘法：`.A *= .B` → .A = 250
-   `/=` 向下取整除法：`.A /= .B` → .A = 2
-   `%=` 向下取整取模：`.A %= .B` → .A = 5

## 逻辑运算符

逻辑运算符比较两个分数。逻辑运算符总是产生 0 或 1。

详见源文件。