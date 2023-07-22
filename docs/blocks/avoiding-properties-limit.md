---
title: Avoiding Properties limit
tags:
    - guide
mentions:
    - Kaioga5
---

## Introduction:
As you may know, block properties have a limit of 64 that you cannot exceed. This is very frustrating when creating new blocks, so I will explain you how you can avoid reaching this limit. Please note that you are not going to have more than 64 properties, however the results you'll get using this method will be equal to that!

## How it works:
This method simply combines two or more properties in order to re-use them and read them either in permutations or conditions. For example, let's say you want to have a block with the English Alphabet letters. You'll need 26 properties for that, right? Well, with combinations you need way less! For the sake of simplicity, let's just use 15.

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

You see how you get the same results as using 26 properties with just 15? And it can even be less if you combine more than two digits! With just 16 properties and using 5 values for combinations, you can read up to 4368 properties... crazy right?

## How will it look like:
Using the example above as reference, your properties would look like this;
```
"properties": {
    "wiki:value": [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13 ],
    "wiki:division": [ 1, 2 ]
    }
```
And your conditions like this;
```
"condition": "query.block_property('wiki:division') == 1 && query.block_property('wiki:value') == 1"

"condition": "query.block_property('wiki:division') == 1 && query.block_property('wiki:value') == 2"
```
## What have you learned;
You have learned how to use less than 64 properties and do more, combining properties to have better possibilities.

:::tip
You can use more than 2 values in order to have more possible combinations.

:::
