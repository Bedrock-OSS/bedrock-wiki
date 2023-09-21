---
title: Avoiding Properties Limit
category: Tutorials
tags:
    - guide
    - advanced
mentions:
    - Kaioga5
---

## Introduction
Block properties have a total limit of 64 values (16 maximum per property) that cannot be exceed. This article will explain how to avoid reaching the limit.

:::tip
You are not going to have more than 64 properties. Using this method will be equal to that amount!
:::

## How it works
This method combines two or more properties in order to re-use and read them in permutations or conditions. For example, a block with the English Alphabet letters will need 26 values. You can use less values by using combinations.

## The logic
What your code will do going of by the example above is the following:
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

## How Will It Look
Using the example above as reference, your properties would look like this:
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

# Binary Method
We can use two properties to produce a single number that can range from 0 to 255.

Using the same method, we can use 3 properties to produce a single number that can range from 0 to 4095.

## Value Range Calculation

You can calculate the maximum value of the **number** by using this equation: `16^n - 1`, where `n` is the number of properties being used for **number**.


## How to use
### Create properties
```json
"properties": {
    "wiki:high": [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,13,14,15 ], //every property must have exactly these values
    "wiki:low": [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,13,14,15 ]
}
```

### Reading values
```json
"condition":"q.block_property('wiki:high') * 16 + q.block_property('wiki:low') = 157"
// the condition will be true when wiki:high = 9 and wiki:low = 13
```
### Storing values
suppose we want to save number 98
```json
"set_block_state": {
    "wiki:high":  "math.floor(98/16)", //divide value to save by 16 and assign quotient to property
    "wiki:low":    "math.mod(98,16)", //divide value to save by 16 and assign remainder to property
}
```
## How it works
Since a property can hold 16 different values, this means 4 bit of data.


![Image describing how it works](binay%20method%20working.png)

**Why multiply, divide or do modulus with 16**


The reason is simple we are using two properties with lower part aka wiki:low able to hold 16 different values only

## Creating it with 3 properties
We create **wiki:high** , **wiki:low1**, **wiki:low2** by using same method.

Earlier we used constant 16 for wiki:high but this time we will use 256 for wiki:high

The reason is all wiki:lows can store upto 256 different values (0 - 255)

### Saving

Lets save 2355
```
//pseudo code
wiki:high = math.floor(2355/256)
remainder = math.mod(2355,256)
//The remainder can be saved in same way as we use to store in 2 properties bcz this remainder range is 0 to 255
wiki:low1 = math.floor(remainder/16)
wiki:low2 = math.mod(remainder,16)
```
This is how it will look like in minecraft json
```json
 "set_block_property": {
      "wiki:high": "math.floor(2355/256)",
      "wiki:low1": "math.floor(math.mod(2355,256)/16)",
      "wiki:low2": "math.mod(math.mod(2355,256),16)"
    }
```
### Reading
```json
"condition":"q.block_property('wiki:high') * 256 + (q.block_property('wiki:low1') * 16 + q.block_property('wiki:low2')) == 4355"
```


## What You Have Learned
You have learned how to use less than 64 properties and do more, combining properties to have better possibilities.

:::tip
You can use more than 2 values in order to have more possible combinations.
:::
