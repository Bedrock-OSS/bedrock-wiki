---
title: 避免状态限制
description: 方块每个状态有16个有效值的限制，无法超过。本指南将解释如何避免达到限制。
category: 教程
tags:
    - expert
related:
    - /blocks/block-states
mentions:
    - Kaioga5
    - QuazChick
---

方块每个状态有16个有效值的限制，无法超过。本指南将解释如何避免达到限制。

:::tip
本教程不会教你如何让单个状态拥有超过16个值，但是使用这种方法可以达到同样的效果！
:::

## 工作原理

这种方法通过组合两个或更多状态来重复使用和读取它们以进行置换或条件判断。例如，一个包含英文字母表的方块需要26个值。你可以通过使用组合来减少所需的值。

## 逻辑

根据上面的例子，你的代码将执行以下操作：

```
1 & 1 = A   1 & 5 = E   1 & 9 =  I   1 & 13 = M
1 & 2 = B   1 & 6 = F   1 & 10 = J
1 & 3 = C   1 & 7 = G   1 & 11 = K
1 & 4 = D   1 & 8 = H   1 & 12 = L
```

然后：

```
2 & 1 = N   2 & 5 = R   2 & 9 =  V   2 & 13 = Z
2 & 2 = O   2 & 6 = S   2 & 10 = W
2 & 3 = P   2 & 7 = T   2 & 11 = X
2 & 4 = Q   2 & 8 = U   2 & 12 = Y
```

使用这种方法，你只需要15个值就能达到同样的结果。可用的组合值越多，状态限制就越高。

:::tip
你可以使用超过2个值来获得更多可能的组合。
:::

## 实现方式

以上面的例子为参考，你的状态应该是这样的：

<CodeHeader>minecraft:block > description</CodeHeader>

```json
"states": {
    "wiki:value": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
    "wiki:division": [1, 2]
}
```

对于你的条件，应该这样写：

<CodeHeader>Permutation Condition</CodeHeader>

```molang
q.block_state('wiki:division') == 1 && q.block_state('wiki:value') == 1
```

<CodeHeader>Permutation Condition</CodeHeader>

```molang
q.block_state('wiki:division') == 1 && q.block_state('wiki:value') == 2
```