---
title: Avoiding Properties Limit
category: Tutorials
tags:
    - guide
    - advanced
mentions:
    - Kaioga5
---

## Introduction:
Block properties have a total limit of 64 values (16 maximum per property) that cannot be exceed. This article will explain how to avoid reaching the limit.

:::tip
You are not going to have more than 64 properties. Using this method will be equal to that amount!
:::

## How it works:
This method combines two or more properties in order to re-use and read them in permutations or conditions. For example, a block with the English Alphabet letters will need 26 values. You can use less values by using combinations.

## The logic:
What your code will do going of by the example above is the following;
```
1 & 1 = A   1 & 5 = E   1 & 9 =  I   1 & 13 = M
1 & 2 = B   1 & 6 = F   1 & 10 = J
1 & 3 = C   1 & 7 = G   1 & 11 = K
1 & 4 = D   1 & 8 = H   1 & 12 = L
```
And then;
```
2 & 1 = N   2 & 5 = R   2 & 9 =  V   2 & 13 = Z
2 & 2 = O   2 & 6 = S   2 & 10 = W
2 & 3 = P   2 & 7 = T   2 & 11 = X
2 & 4 = Q   2 & 8 = U   2 & 12 = Y
```

Using this method, you achieve the same results with just 15 values. The more values available for combinations, the higher your property limit is.

## How will it look like:
Using the example above as reference, your properties would look like this;
```json
"properties": {
    "wiki:value": [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13 ],
    "wiki:division": [ 1, 2 ]
}
```
And your conditions like this;
```
"condition": "q.block_property('wiki:division') == 1 && q.block_property('wiki:value') == 1"

"condition": "q.block_property('wiki:division') == 1 && q.block_property('wiki:value') == 2"
```
## What have you learned;
You have learned how to use less than 64 properties and do more, combining properties to have better possibilities.

:::tip
You can use more than 2 values in order to have more possible combinations.
:::
