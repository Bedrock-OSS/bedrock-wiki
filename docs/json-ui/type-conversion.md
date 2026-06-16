---
title: Type Conversion
description: In this tutorial, you will learn how to convert between data types in JSON UI.
category: Tutorials
tags:
    - intermediate
mentions:
    - shanewolf38
    - SmokeyStack
    - ThomasOrs
    - TheoristMC
---

There are multiple instances where a data needs to be converted into another type due to some properties only allowing specific data types.
This can range from converting strings to numbers and vice-versa.

## String to Number

The following code will create a label that will contain a string data at which will get turned into number.

<CodeHeader path="RP/ui/example_screen.json" />

```json
"label": {
    "type": "label",
    "text": "#text",
    "property_bag": {
        "#str": "10",
        // You don't need to necessarily turn this into a binding
        // property but it alleviate problems later on the line.
        "#float": 1.0
    },
    "bindings": [
        {
            "binding_type": "view",
            "source_property_name": "(#str * 1)",
            "target_property_name": "#integer"
        },
        {
            "binding_type": "view",
            "source_property_name": "(#str * #float)",
            "target_property_name": "#float"
        },
        {
            "binding_type": "view",
            "source_property_name": "('Result: ' + #integer)",
            "target_property_name": "#text"
        }
    ]
}
```

**The Process**

By doing arithmetic operation on strings (except addition), you convert a string into a number.

**Notes:**

-   Instances of strings that is alphanumeric (like `a123`) will not return `123`.
-   Adding a string and float (like `'abc' + 1.2`) will not produce anything.
-   It is not possible to directly display floats—refer to [this](#float-to-string) part of the documentation.

## Number to String

The following code will create a label that will contain a string number at which will get turned into string.

<CodeHeader path="RP/ui/example_screen.json" />

```json
"label": {
    "type": "label",
    "text": "#text",
    "property_bag": {
        "#num": 10
    },
    "bindings": [
        {
            "binding_type": "view",
            "source_property_name": "('Result: ' + #num)",
            "target_property_name": "#text"
        }
    ]
}
```

**The Process**

Doing addition between string and a number will always result a string consisting the combined string and number. In this case, the string is the `'Result: '`.

**Notes:**

-   You cannot combine a string and a float, it will produce nothing.

## Float to String

The following code will create a label that will contain a float data at which will get turned into string.

:::tip
There is no float to number because floats are a sub-child of numbers, so floats are already numbers by itself.
:::

<CodeHeader path="RP/ui/example_screen.json" />

```json
"label": {
    "type": "label",
    "text": "#text",
    "property_bag": {
        "#float": 6.7
    },
    "bindings": [
        {
            "binding_type": "view",
            "source_property_name": "(0 + (#float > 0) + (#float > 1) + (#float > 2) + (#float > 3) + (#float > 4) + (#float > 5) + (#float > 6) + (#float > 7) + (#float > 8) + (#float > 9))",
            "target_property_name": "#integer"
        },
        {
            "binding_type": "view",
            "source_property_name": "('Result: ' + #integer)",
            "target_property_name": "#text"
        }
    ]
}
```

**The Process**

It is not feasible to just add a string and a float as that will produce nothing. Therefore, the binding need to guess where the float lies on between the number 1 to 10.

In this process, it also limits itself into only support floats between 1 to 10 and; the output will not include the decimal number. So in this context, it will only output `6`, not `6.7`.

**Notes:**

-   There is a way to include the decimal but, it requires a more complex expression.
-   The code seen is the simplified version of the concept, there is much more better ways of doing this process.
-   This is great if you know the range of your number reference, otherwise, you will need to guess.

## Boolean to Number

The following code will create a label that will contain a boolean data at which will get turned into number.

<CodeHeader path="RP/ui/example_screen.json" />

```json
"label": {
    "type": "label",
    "text": "#text",
    "property_bag": {
        "#bool": true,
        "#hahasixseven": false
    },
    "bindings": [
        {
            "binding_type": "view",
            "source_property_name": "(#bool + #hahasixseven)",
            "target_property_name": "#integer"
        },
        {
            "binding_type": "view",
            "source_property_name": "('Result: ' + #integer)",
            "target_property_name": "#text"
        }
    ]
}
```

**The Process**

Any arithmetic operations done between booleans and numbers will always result a number. Internally, `true` is recognized as 1, and `false` is 0. The `boolean` can be an expression as long as it results as a boolean.
