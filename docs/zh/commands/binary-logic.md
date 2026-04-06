---
title: 命令中的二进制
category: 技术
mentions:
    - BedrockCommands
    - OneRat240
nav_order: 4
tags:
    - concept
description: 掌握二进制系统的使用来优化命令效率和处理大规模数据。
---

## 简介

**二进制**（Base-2）是一种数学系统，允许你仅用两个状态表示任何整数：`0`（关/假）和 `1`（开/真）。

虽然人类通常使用十进制（0–9），但计算机使用二进制来执行复杂任务。在命令系统中，二进制也可以用于批量物品销售或坐标检测等场景，而且所需的命令数量远少于线性方法。

## 二进制工作原理

在二进制系统中，每个数字称为一个**位**（bit）。每位的位置代表 2 的特定幂次，从右到左依次递增。

| 位位置 | 幂次 | 值 |
| :--- | :--- | :--- |
| 第1位（最右） | `2^0` | **1** |
| 第2位 | `2^1` | **2** |
| 第3位 | `2^2` | **4** |
| 第4位 | `2^3` | **8** |
| 第5位 | `2^4` | **16** |

### 转换示例

要将二进制数 `1101` 转换为十进制，你需要将所有为 `1` 的位置的值相加：

- **1** 在 8 的位置（`2^3`）
- **1** 在 4 的位置（`2^2`）
- **0** 在 2 的位置（`2^1`）
- **1** 在 1 的位置（`2^0`）

`8 + 4 + 0 + 1 = 13`

## 基岩版命令中的实现

二进制在命令中的主要优势是**优化**。检查玩家是否有 1 到 64 个物品不需要运行 64 条命令，只需要 **7 个二进制步骤**（$2^0$ 到 $2^6$）。

### 示例：二进制商店系统
该系统清除玩家背包中的物品并奖励记分板货币。通过先检查最大的可能的 2 的幂次，系统可以高效地"分解"任何堆叠数量。

<CodeHeader></CodeHeader>

```yaml
## 检查 64 (2^6)
execute as @a[hasitem={item=bread,quantity=64..}] run scoreboard players add @s wiki:money 64
execute as @a[hasitem={item=bread,quantity=64..}] run clear @s bread 0 64

## 检查 32 (2^5)
execute as @a[hasitem={item=bread,quantity=32..}] run scoreboard players add @s wiki:money 32
execute as @a[hasitem={item=bread,quantity=32..}] run clear @s bread 0 32

## 检查 16 (2^4)
execute as @a[hasitem={item=bread,quantity=16..}] run scoreboard players add @s wiki:money 16
execute as @a[hasitem={item=bread,quantity=16..}] run clear @s bread 0 16

## 检查 8 (2^3)
execute as @a[hasitem={item=bread,quantity=8..}] run scoreboard players add @s wiki:money 8
execute as @a[hasitem={item=bread,quantity=8..}] run clear @s bread 0 8

## 检查 4 (2^2)
execute as @a[hasitem={item=bread,quantity=4..}] run scoreboard players add @s wiki:money 4
execute as @a[hasitem={item=bread,quantity=4..}] run clear @s bread 0 4

## 检查 2 (2^1)
execute as @a[hasitem={item=bread,quantity=2..}] run scoreboard players add @s wiki:money 2
execute as @a[hasitem={item=bread,quantity=2..}] run clear @s bread 0 2

## 检查 1 (2^0)
execute as @a[hasitem={item=bread,quantity=1..}] run scoreboard players add @s wiki:money 1
execute as @a[hasitem={item=bread,quantity=1..}] run clear @s bread 0 1
```

![14 个命令方块的链条](/assets/images/commands/command-block-chain/14.png)

> [!TIP]
> **为什么要用这个？** 如果玩家有 50 个面包，系统会先清除 32，然后 16，然后 2（$32+16+2=50$）。这个过程只需要 3 次成功的检查，而线性系统需要 50 次。

## 高级用例

### 获取坐标为记分板

检测玩家的精确 X、Y 或 Z 坐标使用的是**二叉搜索树**。不需要检查每个可能的坐标，而是使用一系列 `execute` 命令将玩家的位置缩小到相对于固定点的范围。

通过检查玩家是否在 32768 方块、16384 方块的范围内，以此类推到 1 方块，你可以在仅 **16 步**内精确定位他们在世界中的确切位置。这是将空间数据转换为记分板整数以用于计算或传送的最高效方法。

### 与 MEF 结合实现

你还可以将二叉树与**[乘法执行分叉 (MEF)](https://www.google.com/search?q=/commands/execution-forking)** 结合，创建复杂的几何体、地形或自定义生成，例如村庄或密室，**只需一条命令！**